package com.browser.browsermanage.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;

/**
 * @ClassName Browser
 * @Description TODO
 * @Author zdy
 * @Date 2024/3/6 15:28
 */
@NoArgsConstructor
@AllArgsConstructor
@Builder
@TableName
@Data
public class BrowserInfo implements Serializable {

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    @TableField(value = "`key`")
    private String key;
    @TableField(value = "`data`")
    private String data;
    private Integer status;
    private String tag;
    private Date createTime;
    private Date updateTime;
}
