package com.browser.browsermanage.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.browser.browsermanage.dto.BrowserInfoDTO;
import com.browser.browsermanage.entity.BrowserInfo;

/**
 * @ClassName BrowserInfoService
 * @Author zsl
 * @Date 2024/3/6 15:54
 */
public interface BrowserInfoService extends IService<BrowserInfo> {

    BrowserInfo getByKey(String key);

    Boolean saveOrUpt(BrowserInfoDTO browserInfoDTO);

}
