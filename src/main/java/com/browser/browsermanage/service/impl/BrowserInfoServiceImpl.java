package com.browser.browsermanage.service.impl;

import cn.hutool.crypto.SecureUtil;
import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.browser.browsermanage.dto.BrowserInfoDTO;
import com.browser.browsermanage.entity.BrowserInfo;
import com.browser.browsermanage.enums.Tag;
import com.browser.browsermanage.mapper.BrowserInfoMapper;
import com.browser.browsermanage.service.BrowserInfoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;

/**
 * @ClassName BrowserInfoServiceImpl
 * @Author zsl
 * @Date 2024/3/6 15:55
 */
@Service
@Slf4j
public class BrowserInfoServiceImpl extends ServiceImpl<BrowserInfoMapper, BrowserInfo> implements BrowserInfoService {

    @Override
    public BrowserInfo getByKey(String key) {
        LambdaQueryWrapper<BrowserInfo> queryWrapper = new LambdaQueryWrapper<>();
        queryWrapper.eq(BrowserInfo::getKey, key);
        return super.getOne(queryWrapper);
    }

    @Override
    public Boolean saveOrUpt(BrowserInfoDTO browserInfoDTO) {
        if(!Optional.ofNullable(browserInfoDTO).isPresent()) {
            return false;
        }
        try {
            String fpVAlStr = browserInfoDTO.getFpcf().getFpValstr();
            String key = SecureUtil.sha1(fpVAlStr);
            BrowserInfo browserInfo = this.getByKey(key);
            String infos = JSON.toJSONString(browserInfoDTO);
            //json序列化改变了大小写字母 无语。。。。
            infos = infos.replace("deviceMotionEvent", "DeviceMotionEvent");
            infos = infos.replace("deviceOrientationEvent","DeviceOrientationEvent");
            infos = infos.replace("touchEvent", "TouchEvent");
            if(browserInfo != null) {
                log.info("更新browser key:{}", key);
                browserInfo.setData(infos);
                browserInfo.setUpdateTime(new Date());
                browserInfo.setTag(Tag.ZDY.name());
                browserInfo.setStatus(1);
            } else {
                log.info("新增browser key:{}", key);
                browserInfo = new BrowserInfo();
                browserInfo.setKey(key);
                browserInfo.setData(infos);
                browserInfo.setStatus(1);
                browserInfo.setTag(Tag.ZDY.name());
                browserInfo.setCreateTime(new Date());
            }
            return this.saveOrUpdate(browserInfo);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("操作browser error", e);
            return false;
        }
    }

    public static boolean isValidNumberString(String str) {
        // 正则表达式，匹配只包含0到6的数字的字符串
        String regex = "^[0-7]+$";
        // 编译正则表达式
        Pattern pattern = Pattern.compile(regex);
        // 匹配字符串
        return pattern.matcher(str).matches();
    }

    public static void main(String[] args) {
        String str = "1112222239";
        boolean isValid = isValidNumberString(str);
        System.out.println("Is valid: " + isValid);
    }
}
