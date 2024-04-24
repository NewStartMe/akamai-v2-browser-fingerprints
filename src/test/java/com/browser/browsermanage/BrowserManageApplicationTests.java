package com.browser.browsermanage;

import com.alibaba.fastjson.JSON;
import com.browser.browsermanage.service.BrowserInfoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@SpringBootTest
class BrowserManageApplicationTests {

    @Autowired
    private BrowserInfoService browserInfoService;

}
