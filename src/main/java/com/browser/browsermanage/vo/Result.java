package com.browser.browsermanage.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

/**
 * 接口返回数据格式
 */
@Data
@AllArgsConstructor
@Builder
public class Result<T> implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 成功标志
     */
    private boolean success;

    /**
     * 返回处理消息
     */
    private String message;

    /**
     * 返回代码
     */
    private Integer code;

    /**
     * 返回数据对象 data
     */
    private T result;

    /**
     * 时间戳
     */
    private long timestamp;

    public Result() {
        this.success = true;
        this.message = "操作成功！";
        this.code = 0;
        this.timestamp = System.currentTimeMillis();
    }

    public Result<T> success(String message) {
        this.message = message;
        this.code = 200;
        this.success = true;
        return this;
    }

    public static <T> Result<T> responseOk(T data) {
        return Result.<T>builder()
                .success(true)
                .code(200)
                .message("成功")
                .result(data)
                .timestamp(System.currentTimeMillis())
                .build();
    }

    public static <T> Result<T> responseOk(T data, String message) {
        return Result.<T>builder()
                .success(true)
                .code(200)
                .message(message)
                .result(data)
                .timestamp(System.currentTimeMillis())
                .build();
    }


    public static Result<Object> ok() {
        Result<Object> r = new Result<>();
        r.setSuccess(true);
        r.setCode(200);
        r.setMessage("成功");
        return r;
    }

    public static Result<Object> ok(String msg) {
        Result<Object> r = new Result<>();
        r.setSuccess(true);
        r.setCode(200);
        r.setMessage(msg);
        return r;
    }

    public static Result<Object> ok(Object data) {
        Result<Object> r = new Result<>();
        r.setSuccess(true);
        r.setCode(200);
        r.setResult(data);
        return r;
    }

    public static Result<Object> error(String msg) {
        return error(ResultCode.SC_INTERNAL_SERVER_ERROR_500.getCode(), msg);
    }

    public static Result<Object> error(int code, String msg) {
        Result<Object> r = new Result<>();
        r.setCode(code);
        r.setMessage(msg);
        r.setSuccess(false);
        return r;
    }

    public static <T> Result<T> responseError(int code, String message) {
        return Result.<T>builder()
                .success(false)
                .code(code)
                .message(message)
                .timestamp(System.currentTimeMillis())
                .build();
    }

    public static <T> Result<T> responseNewCode(ResultCode resultCode, T data) {
        return Result.<T>builder()
                .success(true)
                .code(resultCode.getCode())
                .message(resultCode.getMsg())
                .result(data)
                .timestamp(System.currentTimeMillis())
                .build();
    }

    public static <T> Result<T> responseError(ResultCode resultCode) {
        return Result.<T>builder()
                .success(false)
                .code(resultCode.getCode())
                .message(resultCode.getMsg())
                .timestamp(System.currentTimeMillis())
                .build();
    }

    public static <T> Result<T> response500(String message) {
        return Result.<T>builder()
                .code(ResultCode.SC_INTERNAL_SERVER_ERROR_500.getCode())
                .message(message)
                .timestamp(System.currentTimeMillis())
                .build();
    }

    /**
     * 无权限访问返回结果
     */
    public static Result<Object> noauth(String msg) {
        return error(ResultCode.NO_AUTH.getCode(), msg);
    }

    public Result<T> error500(String message) {
        this.message = message;
        this.code = ResultCode.SC_INTERNAL_SERVER_ERROR_500.getCode();
        this.success = false;
        return this;
    }
}
