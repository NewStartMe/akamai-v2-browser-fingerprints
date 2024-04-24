package com.browser.browsermanage.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @ClassName BrowserInfoDTO
 * @Author zsl
 * @Date 2024/3/21 16:05
 */
@Data
public class BrowserInfoDTO {
    private String ua;
    private Integer availWidth;
    private Integer availHeight;
    private Integer width;
    private Integer height;
    private Integer innerHeight;
    private Integer innerWidth;
    private Integer outerWidth;
    private String psub;
    private String lang;
    private String prod;
    private Integer plen;
    // memory
    private Integer mem;
    private Integer hwc;
    private Integer wch;
    private String bd;
    private long fas;
    private String sed;
    @JsonProperty("DeviceOrientationEvent")
    private String DeviceOrientationEvent;
    @JsonProperty("DeviceMotionEvent")
    private String DeviceMotionEvent;
    @JsonProperty("TouchEvent")
    private String TouchEvent;
    private Integer xagg;
    private Integer pen;
    private Integer wen;
    private Integer den;
    private String mr;
    private String nav_perm;
    private String fmh;
    private Integer fmz;
    private String wv;
    private String wr;
    private String weh;
    private Integer wl;
    //window.Object.keys
    private List<String> ok;
    private String oks;
    //wphVal hash
    private String wph;
    //webgl value
    private Map<String, Object> wphVal = new HashMap<>();
    private String wphCanvas;
    private String wphDataUrl;
    private String ssh;
    private List<String> sshVal;
    private String ins;
    private String cns;
    private String hn;
    private String vc;
    private Fpcf fpcf;

    @Data
    public static class Fpcf {
        private String fpValstr;
        private boolean fpValCalculated;
        private String rVal;
        private String rCFP;
        private Map<String, Object> cache = new HashMap<>();
        private Integer td;
        private Integer PLUGINS;   
    }
}
