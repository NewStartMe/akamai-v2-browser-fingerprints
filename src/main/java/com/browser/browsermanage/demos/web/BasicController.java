/*
 * Copyright 2013-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.browser.browsermanage.demos.web;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.toolkit.StringUtils;
import com.browser.browsermanage.dto.BrowserInfoDTO;
import com.browser.browsermanage.entity.BrowserInfo;
import com.browser.browsermanage.service.BrowserInfoService;
import com.browser.browsermanage.utils.IPUtil;
import com.browser.browsermanage.vo.Result;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Random;
import java.util.regex.Pattern;

/**
 * @author <a href="mailto:chenxilzx1@gmail.com">theonefx</a>
 */
@Controller
@Slf4j
public class BasicController {

    @Autowired
    private BrowserInfoService browserInfoService;

    @PostMapping("/log")
    @ResponseBody
    public String log(@RequestBody String param) {
        log.info("log param:{}", param);
        return "Hello " + param;
    }

    @PostMapping("/putInfo")
    @ResponseBody
    public Result<String> putInfo(HttpServletRequest request, @RequestBody BrowserInfoDTO browserInfoDTO) {
        String ip = IPUtil.getIpAddress(request);
        log.info("putInfo ip:{}, param:{}", ip, JSON.toJSON(browserInfoDTO));
        String nev = browserInfoDTO.getNav_perm();
        if(StringUtils.isBlank(nev)) {
            log.info("putInfo nev 是空");
            return Result.response500("fail");
        }
        if("00000000000000000000".equals(nev)) {
            log.info("putInfo 不合法 00000000000000000000 ip:{}", ip);
            return Result.responseOk("");
        }
        if(!"8".equals(nev)) {
            //检查是否是合法信息
            if(nev.length() < 18 ||  nev.length() > 25 || !isValidNumberString(nev)) {
                log.info("putInfo nev 不合法 ip:{}", ip);
                return Result.response500("fail");
            }
        }
        boolean res = browserInfoService.saveOrUpt(browserInfoDTO);
        log.info("putInfo res:{}", res);
        if(res) {
            return Result.responseOk(JSON.toJSONString(browserInfoDTO));
        }
        return Result.response500("fail");
    }

    public static boolean isValidNumberString(String str) {
        // 正则表达式，匹配只包含0到6的数字的字符串
        String regex = "^[0-8]+$";
        // 编译正则表达式
        Pattern pattern = Pattern.compile(regex);
        // 匹配字符串
        return pattern.matcher(str).matches();
    }

    @RequestMapping("/html")
    public String html() {
        return "index.html";
    }


    @GetMapping("/getInfo")
    @ResponseBody
    public String getInfo(@RequestParam(defaultValue = "") String key) {
        if(StringUtils.isNotBlank(key)) {
            String data = browserInfoService.getByKey(key).getData();
            System.out.println(data);
            return browserInfoService.getByKey(key).getData();
        } else {
            List<BrowserInfo> browserInfos = browserInfoService.list();
            int index = new Random().nextInt(browserInfos.size());
            BrowserInfo browserInfo = browserInfos.get(index);
            String data = browserInfo.getData();
            System.out.println(data);
            return data;
        }
    }


}
