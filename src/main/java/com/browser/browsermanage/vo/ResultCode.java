package com.browser.browsermanage.vo;


/**
 * 业务状态码：code>1000
 */
public enum ResultCode {


    SUCCESS(200, "Success"),
    NO_AUTH(510, "no auth"),
    SC_INTERNAL_SERVER_ERROR_500(500, "internal server error 500"),;


    //============业务状态码start================//

    //============业务状态码end================//


    private Integer code;

    private String msg;

    ResultCode(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }
}
