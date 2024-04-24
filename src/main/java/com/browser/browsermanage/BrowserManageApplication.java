package com.browser.browsermanage;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.browser.browsermanage.mapper")
public class BrowserManageApplication {

    public static void main(String[] args) {
        SpringApplication.run(BrowserManageApplication.class, args);
    }

}
