(function () {
    function log(str) {
        fetch("/log", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({log: str})
        }).then(response => response.json()).then(json => {
        })
    }

    var bmak = {
        ua: window.navigator.userAgent.replace(/\\|"/g, ""),
        availWidth: window.screen ? window.screen.availWidth : -1,
        availHeight: window.screen ? window.screen.availHeight : -1,
        width: window.screen ? window.screen.width : -1,
        height: window.screen ? window.screen.height : -1,
        innerHeight: window.innerHeight || (document.body && "clientHeight" in document.body ? document.body.clientHeight : document.documentElement && "clientHeight" in document.documentElement ? document.documentElement.clientHeight : -1),
        innerWidth: window.innerWidth || (document.body && "clientWidth" in document.body ? document.body.clientWidth : document.documentElement && "clientWidth" in document.documentElement ? document.documentElement.clientWidth : -1),
        outerWidth: void 0 !== window.outerWidth ? window.outerWidth : -1,
        psub: navigator.productSub ? navigator.productSub : '_',
        lang: navigator.language ? navigator.language : '_',
        prod: navigator.product ? navigator.product : '_',
        plen: void 0 !== navigator.plugins ? navigator.plugins.length : -1,
        mem: navigator.deviceMemory ? navigator.deviceMemory : "-1",
        hwc: navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "-1",
        wch: 'object' === typeof window.chrome ? 1 : -1,
        bd: function () {
            var t = [],
                a = window.callPhantom ? 1 : 0;
            t.push(",cpen:" + a);
            var e = 0;
            window.ActiveXObject && "ActiveXObject" in window && (e = 1), t.push("i1:" + e);
            var n = "number" == typeof document.documentMode ? 1 : 0;
            t.push("dm:" + n);
            var o = window.chrome && window.chrome.webstore ? 1 : 0;
            t.push("cwen:" + o);
            var m = navigator.onLine ? 1 : 0;
            t.push("non:" + m);
            var r = window.opera ? 1 : 0;
            t.push("opc:" + r);
            var i = "undefined" != typeof InstallTrigger ? 1 : 0;
            t.push("fc:" + i);
            var c = window.HTMLElement && Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 ? 1 : 0;
            t.push("sc:" + c);
            var b = "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection ? 1 : 0;
            t.push("wrc:" + b);
            var d = "mozInnerScreenY" in window ? window.mozInnerScreenY : 0;
            t.push("isc:" + d);
            var s = "function" == typeof navigator.vibrate ? 1 : 0;
            t.push("vib:" + s);
            var k = "function" == typeof navigator.getBattery ? 1 : 0;
            t.push("bat:" + k);
            var l = Array.prototype.forEach ? 0 : 1;
            t.push("x11:" + l);
            var u = "FileReader" in window ? 1 : 0;
            return t.push("x12:" + u), t.join(",");
        }(),
        fas: function () {
            try {
                return Boolean(navigator.credentials) + (Boolean(navigator.appMinorVersion) << 1) + (Boolean(navigator.bluetooth) << 2) + (Boolean(navigator.storage) << 3) + (Boolean(Math.imul) << 4) + (Boolean(navigator.getGamepads) << 5) + (Boolean(navigator.getStorageUpdates) << 6) + (Boolean(navigator.hardwareConcurrency) << 7) + (Boolean(navigator.mediaDevices) << 8) + (Boolean(navigator.mozAlarms) << 9) + (Boolean(navigator.mozConnection) << 10) + (Boolean(navigator.mozIsLocallyAvailable) << 11) + (Boolean(navigator.mozPhoneNumberService) << 12) + (Boolean(navigator.msManipulationViewsEnabled) << 13) + (Boolean(navigator.permissions) << 14) + (Boolean(navigator.registerProtocolHandler) << 15) + (Boolean(navigator.requestMediaKeySystemAccess) << 16) + (Boolean(navigator.requestWakeLock) << 17) + (Boolean(navigator.sendBeacon) << 18) + (Boolean(navigator.serviceWorker) << 19) + (Boolean(navigator.storeWebWideTrackingException) << 20) + (Boolean(navigator.webkitGetGamepads) << 21) + (Boolean(navigator.webkitTemporaryStorage) << 22) + (Boolean(Number.parseInt) << 23) + (Boolean(Math.hypot) << 24);
            } catch (t) {
                return 0;
            }
        }(),
        sed: function () {
            var t;
            t = window.$cdc_asdjflasutopfhvcZLmcfl_ || document.$cdc_asdjflasutopfhvcZLmcfl_ ? "1" : "0";
            var a;
            a = null != window.document.documentElement.getAttribute("webdriver") ? "1" : "0";
            var e;
            e = void 0 !== navigator.webdriver && navigator.webdriver ? "1" : "0";
            var n;
            n = void 0 !== window.webdriver ? "1" : "0";
            var o;
            o = void 0 !== window.XPathResult || void 0 !== document.XPathResult ? "1" : "0";
            var m;
            m = null != window.document.documentElement.getAttribute("driver") ? "1" : "0";
            var r;
            return r = null != window.document.documentElement.getAttribute("selenium") ? "1" : "0", [t, a, e, n, o, m, r].join(",");
        }(),
        ats: function (t) {
            for (var a = "", e = 0; e < t.length; e++) a += 2 == t[e].toString(16).length ? t[e].toString(16) : "0" + t[e].toString(16);

            return a;
        },
        mn_s: function (t) {
            var a = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
                e = 1779033703,
                n = 3144134277,
                o = 1013904242,
                m = 2773480762,
                r = 1359893119,
                i = 2600822924,
                c = 528734635,
                b = 1541459225,
                d = bmak.encode_utf8(t),
                s = 8 * d.length;
            d += String.fromCharCode(128);

            for (var k = d.length / 4 + 2, l = Math.ceil(k / 16), u = new Array(l), _ = 0; _ < l; _++) {
                u[_] = new Array(16);

                for (var f = 0; f < 16; f++) u[_][f] = d.charCodeAt(64 * _ + 4 * f) << 24 | d.charCodeAt(64 * _ + 4 * f + 1) << 16 | d.charCodeAt(64 * _ + 4 * f + 2) << 8 | d.charCodeAt(64 * _ + 4 * f + 3) << 0;
            }

            var p = s / Math.pow(2, 32);
            u[l - 1][14] = Math.floor(p), u[l - 1][15] = s;

            for (var h = 0; h < l; h++) {
                for (var v, g = new Array(64), w = e, y = n, E = o, S = m, C = r, v = i, x = c, M = b, _ = 0; _ < 64; _++) {
                    var j, A, L, P, T, F;
                    _ < 16 ? g[_] = u[h][_] : (j = bmak.rotate_right(g[_ - 15], 7) ^ bmak.rotate_right(g[_ - 15], 18) ^ g[_ - 15] >>> 3, A = bmak.rotate_right(g[_ - 2], 17) ^ bmak.rotate_right(g[_ - 2], 19) ^ g[_ - 2] >>> 10, g[_] = g[_ - 16] + j + g[_ - 7] + A), A = bmak.rotate_right(C, 6) ^ bmak.rotate_right(C, 11) ^ bmak.rotate_right(C, 25), L = C & v ^ ~C & x, P = M + A + L + a[_] + g[_], j = bmak.rotate_right(w, 2) ^ bmak.rotate_right(w, 13) ^ bmak.rotate_right(w, 22), T = w & y ^ w & E ^ y & E, F = j + T, M = x, x = v, v = C, C = S + P >>> 0, S = E, E = y, y = w, w = P + F >>> 0;
                }

                e += w, n += y, o += E, m += S, r += C, i += v, c += x, b += M;
            }

            return [e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, 255 & m, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, i >> 24 & 255, i >> 16 & 255, i >> 8 & 255, 255 & i, c >> 24 & 255, c >> 16 & 255, c >> 8 & 255, 255 & c, b >> 24 & 255, b >> 16 & 255, b >> 8 & 255, 255 & b];
        },
        encode_utf8: function (t) {
            return unescape(encodeURIComponent(t));
        },
        rotate_right: function (t, a) {
            return t >>> a | t << 32 - a;
        },
        ab: function (t) {
            if (null == t) return -1;

            try {
                for (var a = 0, e = 0; e < t.length; e++) {
                    var n = t.charCodeAt(e);
                    n < 128 && (a += n);
                }

                return a;
            } catch (t) {
                return -2;
            }
        },
        DeviceOrientationEvent: window.DeviceOrientationEvent ? "do_en" : "do_dis",
        DeviceMotionEvent: window.DeviceMotionEvent ? "dm_en" : "dm_dis",
        TouchEvent: window.TouchEvent ? "t_en" : "t_dis",
        get_cf_date: function () {
            return Date.now ? Date.now() : +new Date();
        },
    };

    (function () {
        var t = window.addEventListener ? 1 : 0,
            a = window.XMLHttpRequest ? 1 : 0,
            e = window.XDomainRequest ? 1 : 0,
            n = window.emit ? 1 : 0,
            o = window.DeviceOrientationEvent ? 1 : 0,
            m = window.DeviceMotionEvent ? 1 : 0,
            r = window.TouchEvent ? 1 : 0,
            i = window.spawn ? 1 : 0,
            c = window.chrome ? 1 : 0,
            b = Function.prototype.bind ? 1 : 0,
            d = window.Buffer ? 1 : 0,
            s = window.PointerEvent ? 1 : 0;

        try {
            var k = window.innerWidth ? 1 : 0;
        } catch (t) {
            var k = 0;
        }

        try {
            var l = window.outerWidth ? 1 : 0;
        } catch (t) {
            var l = 0;
        }
        bmak.xagg = t + (a << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (k << 8) + (l << 9) + (c << 10) + (b << 11) + (d << 12) + (s << 13);
    })();

    (function () {
        navigator.brave && navigator.brave.isBrave().then(function (t) {
            bmak.brv = t ? 1 : 0;
        }).catch(function (t) {
            bmak.brv = 0;
        });
    })();

    (function () {
        bmak.pen = window._phantom ? 1 : 0, bmak.wen = window.webdriver ? 1 : 0, bmak.den = window.domAutomation ? 1 : 0;
    })();

    (function () {
        try {
            bmak.mr = "undef"
            if ("undefined" == typeof performance || void 0 === performance.now || "undefined" == typeof JSON) return void (bmak.mr = "undef");

            for (var t = "", a = 1e3, e = [Math.abs, Math.acos, Math.asin, Math.atanh, Math.cbrt, Math.exp, Math.random, Math.round, Math.sqrt, isFinite, isNaN, parseFloat, parseInt, JSON.parse], n = 0; n < e.length; n++) {
                var o = [],
                    m = 0,
                    r = performance.now(),
                    i = 0,
                    c = 0;

                if (void 0 !== e[n]) {
                    for (i = 0; i < a && m < .6; i++) {
                        for (var b = performance.now(), d = 0; d < 4e3; d++) e[n](3.14);

                        var s = performance.now();
                        o.push(Math.round(1e3 * (s - b))), m = s - r;
                    }

                    var k = o.sort();
                    c = k[Math.floor(k.length / 2)] / 5;
                }

                t = t + c + ",";
            }

            bmak.mr = t;
        } catch (t) {
            bmak.mr = "exception";
        }
    })();


    (function () {
        var t = [],
            a = ["geolocation", "notifications", "push", "midi", "camera", "microphone", "speaker", "device-info", "background-sync", "bluetooth", "persistent-storage", "ambient-light-sensor", "accelerometer", "gyroscope", "magnetometer", "clipboard", "accessibility-events", "clipboard-read", "clipboard-write", "payment-handler"];

        try {
            if (!navigator.permissions) return void (bmak.nav_perm = 6);
            bmak.nav_perm = 8;
            var e = function (a, e) {
                    return navigator.permissions.query({
                        name: a
                    }).then(function (a) {
                        switch (a.state) {
                            case "prompt":
                                t[e] = 1;
                                break;

                            case "granted":
                                t[e] = 2;
                                break;

                            case "denied":
                                t[e] = 0;
                                break;

                            default:
                                t[e] = 5;
                        }
                    }).catch(function (a) {
                        t[e] = -1 !== a.message.indexOf("is not a valid enum value of type PermissionName") ? 4 : 3;
                    });
                },
                n = a.map(function (item, a) {
                    return e(item, a);
                });

            Promise.all(n).then(function () {
                bmak.nav_perm = t.join("");
                if(bmak.nav_perm === "00300044040300043000" ) {
                    bmak.nav_perm = 8;
                }
            });
        } catch (exception) {
            bmak.nav_perm = 7;
        }
    })();


    (function () {
        var t = ["Monospace", "Wingdings 2", "ITC Bodoni 72 Bold", "Menlo", "Gill Sans MT", "Lucida Sans", "Bodoni 72", "Serif", "Shree Devanagari 714", "Microsoft Tai Le", "Nimbus Roman No 9 L", "Candara", "Press Start 2P", "Waseem"],
            a = document.createElement("span");
        a.innerHTML = "mmmmmmmmlli", a.style.fontSize = "192px";
        var e = "",
            n = document.getElementsByTagName("body")[0];
        if (n) {
            for (var o in t) a.style.fontFamily = t[o], n.appendChild(a), e += t[o] + ":" + a.offsetWidth + "," + a.offsetHeight + ";", n.removeChild(a);
            // log(e)
            bmak.fmh = bmak.ats(bmak.mn_s(e));
        } else bmak.fmh = "";
        bmak.fmz = "devicePixelRatio" in window && void 0 !== window.devicePixelRatio ? window.devicePixelRatio : -1;
    })();

    (function () {
        try {
            var t = document.createElement("canvas"),
                a = t.getContext("webgl");
            bmak.wv = "n", bmak.wr = "n", bmak.weh = "n", bmak.wl = 0, a && (bmak.wv = "b", bmak.wr = "b", bmak.weh = "b", a.getSupportedExtensions() && (bmak.weh = bmak.ats(bmak.mn_s(JSON.stringify(a.getSupportedExtensions().sort()))), bmak.wl = a.getSupportedExtensions().length, a.getSupportedExtensions().indexOf("WEBGL_debug_renderer_info") >= 0 && (bmak.wv = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_VENDOR_WEBGL), bmak.wr = a.getParameter(a.getExtension("WEBGL_debug_renderer_info").UNMASKED_RENDERER_WEBGL))));
        } catch (t) {
            bmak.wv = "e", bmak.wr = "e", bmak.weh = "e", bmak.wl = 0;
        }
    })();

    (function () {
        const hx = [300000, 4095, 1318, 0, 8, 3, 2, 1, 100000, 10000, 80, 16, 5, 6, 7, 10, 11, 13, 20, 21, 8888888, 7777777, 1000, 75, 25, 4, 100, 192, 9, 0.7, 0.95, 0.98, 0.9, 0.8, 0.1, 0.4, 0.07, 0.025, 127, 0.08, 0.075, 4294967296, 999999, 12, 15, 3600000, 65535, 65793, 4294967295, 4282663, 8388607, 92, 4064256, 3000]
        var e;
        var a = {
            "wph": "n"
        };
        try {
            if (WebGLRenderingContext) {
                e = document.createElement("iframe");
                document.head.appendChild(e);
                var r = e.contentWindow,
                    b = r.document.createElement("canvas"),
                    n = b.getContext("webgl");
                a = BkA(r, n);
                var k = function HlA(wb) {
                    try {
                        var LlA = function flA(p, j, v) {
                                var PlA = p.createShader(j);
                                if (p.shaderSource(PlA, v), p.compileShader(PlA), p.getShaderParameter(PlA, p.COMPILE_STATUS)) {
                                    var vlA;
                                    return vlA = PlA, vlA;
                                }
                            },
                            klA = LlA(wb, wb.VERTEX_SHADER, "              attribute vec2 a_position;              attribute vec4 a_color;              varying vec4 v_color;              void main() {                  gl_Position = vec4(a_position, 0, 1);                  v_color = a_color;              }              "),
                            llA = LlA(wb, wb.FRAGMENT_SHADER, "              precision mediump float;              varying vec4 v_color;              void main() {                  gl_FragColor = v_color;              }              "),
                            dlA = wb.createProgram();
                        if (wb.attachShader(dlA, klA), wb.attachShader(dlA, llA), wb.linkProgram(dlA), !wb.getProgramParameter(dlA, wb.LINK_STATUS)) {
                            wb["deleteProgram"](dlA)
                            return [];
                        }
                        wb.clearColor(0, 0, 0, 0), wb.clear(wb.COLOR_BUFFER_BIT), wb.useProgram(dlA);
                        var glA = wb.getAttribLocation(dlA, "a_position"),
                            XlA = wb.getAttribLocation(dlA, "a_color"),
                            nlA = wb.createBuffer();
                        wb.bindBuffer(wb.ARRAY_BUFFER, nlA), wb.enableVertexAttribArray(glA), wb.bufferData(wb.ARRAY_BUFFER, new window.Float32Array([-0.8, -hx[29], -hx[30], hx[31], 0.4, hx[32], -hx[29], -hx[33], 0.98, -hx[30], hx[34], hx[35]]), wb.STATIC_DRAW), wb.vertexAttribPointer(0, 2, wb.FLOAT, !1, 0, 0);
                        var GlA = wb.createBuffer();
                        var hlA;
                        return wb.enableVertexAttribArray(XlA), wb.bindBuffer(wb.ARRAY_BUFFER, GlA), wb.bufferData(wb.ARRAY_BUFFER, new window.Float32Array([1, hx[34], hx[36], hx[29], 1, hx[30], hx[37], hx[29], hx[38] / 255, 1, 212 / 255, 1, hx[39], 1, hx[40], hx[29], hx[39], 0.22, 1, hx[7], 0, 206 / 255, 209 / 255, hx[7]]), wb.STATIC_DRAW), wb.vertexAttribPointer(1, 4, wb.FLOAT, !1, 0, 0), wb.drawArrays(wb.TRIANGLES, 0, 6), hlA = 1, hlA;
                    } catch (cl) {
                        return cl.message;
                    }

                }(n);
                let u = b.toDataURL();
                bmak.wph = bmak.ats(bmak.mn_s(JSON.stringify(a.wph)));
                bmak.wphVal = a.wph;
                bmak.wphCanvas = bmak.ats(bmak.mn_s(u));
                ;
                bmak.wphDataUrl = u;
                bmak.ok = Object.keys(r);
                bmak.oks = bmak.ats(bmak.mn_s(JSON.stringify(window.Object.keys(r))));
            }
        } catch (qlA) {
        } finally {
            e && "function" == typeof e.remove ? e.remove() : e && "function" == typeof e.removeChild && e.removeChild();
        }

        function BkA(cw, wg) {
            var HkA = {"wph": ""};
            try {
                var ckA = function OkA(c, w) {
                    var z = {};
                    try {
                        var r = ["MAX_VERTEX_UNIFORM_VECTORS", "MAX_VIEWPORT_DIMS", "MAX_VERTEX_ATTRIBS", "SHADING_LANGUAGE_VERSION", "VERSION", "MAX_VARYING_VECTORS", "ALIASED_POINT_SIZE_RANGE", "SAMPLES", "MAX_COMBINED_TEXTURE_IMAGE_UNITS", "MAX_TEXTURE_IMAGE_UNITS", "MAX_FRAGMENT_UNIFORM_VECTORS", "ALIASED_LINE_WIDTH_RANGE", "MAX_RENDERBUFFER_SIZE", "MAX_VERTEX_TEXTURE_IMAGE_UNITS", "STENCIL_WRITEMASK", "MAX_TEXTURE_SIZE", "MAX_CUBE_MAP_TEXTURE_SIZE"],
                            q = c.Object.getOwnPropertyNames(c.Object.getPrototypeOf(w));
                        (r = r.filter(function (t) {
                            return q.includes(t);
                        })).forEach(function (tk) {
                            var s = w.getParameter(w[tk]);
                            s && s["buffer"] instanceof c.ArrayBuffer ? z[tk] = TPA(s) : z[tk] = s;
                        });
                        var y = w.getExtension("WEBGL_draw_buffers");
                        z.MAX_DRAW_BUFFERS = y ? w.getParameter(y.MAX_DRAW_BUFFERS_WEBGL) : 1;
                        var wkA = w.getExtension("EXT_texture_filter_anisotropic") || w.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || w.getExtension("MOZ_EXT_texture_filter_anisotropic");
                        if (z.MAX_TEXTURE_MAX_ANISOTROPY = "-1", wkA) {
                            var DkA = w.getParameter(wkA.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                            z.MAX_TEXTURE_MAX_ANISOTROPY = DkA || 2;
                        }
                        return [1, z];
                    } catch (xkA) {
                        var zkA;
                        return zkA = [0, xkA["message"]], zkA;
                    }
                }(cw, wg);
                ckA[0] ? HkA["wph"] = ckA[1] : HkA["wph"] = "e";

            } catch (UkA) {
            }
            return HkA;
        }

        function TPA(w) {
            var f = w.length
            for (var r = 0, BvA = new window["Array"](f); r < f; r++) {
                BvA[r] = w[r]
            }
            return BvA;
        }

    })();

    function getVoices() {
        var sshVal = [];
        if (window.speechSynthesis) {
            var t = window.speechSynthesis.getVoices();
            if (t.length > 0) {
                for (var a = "", e = 0; e < t.length; e++) {
                    sshVal.push(t[e].voiceURI + "_" + t[e].lang);
                    a += t[e].voiceURI + "_" + t[e].lang;
                }
                bmak.ssh = bmak.ats(bmak.mn_s(a));
            } else bmak.ssh = "0";
        } else bmak.ssh = "n";
        bmak.sshVal = sshVal;
    }

    (function () {
        getVoices();
    })();

    (function () {
        for (var t = "", a = "", e = document.getElementsByTagName("input"), n = -1, o = 0; o < e.length; o++) {
            var m = e[o],
                r = bmak.ab(m.getAttribute("name")),
                i = bmak.ab(m.getAttribute("id")),
                c = m.getAttribute("required"),
                b = null == c ? 0 : 1,
                d = m.getAttribute("type"),
                s = null == d ? -1 : d,
                k = m.getAttribute("autocomplete");
            null == k ? n = -1 : (k = k.toLowerCase(), n = "off" == k ? 0 : "on" == k ? 1 : 2);
            var l = m.defaultValue,
                u = m.value,
                _ = 0,
                f = 0;
            l && 0 != l.length && (f = 1), !u || 0 == u.length || f && u == l || (_ = 1), 2 != s && (t = t + s + "," + n + "," + _ + "," + b + "," + i + "," + r + "," + f + ";"), a = a + _ + ";";
        }

        return null == bmak.ins && (bmak.ins = a), bmak.cns = a, t;
    })();

    (function () {
        void 0 !== document.hidden ? (bmak.hn = "hidden", bmak.vc = "visibilitychange") : void 0 !== document.mozHidden ? (bmak.hn = "mozHidden", bmak.vc = "mozvisibilitychange") : void 0 !== document.msHidden ? (bmak.hn = "msHidden", bmak.vc = "msvisibilitychange") : void 0 !== document.webkitHidden && (bmak.hn = "webkitHidden", bmak.vc = "webkitvisibilitychange"), document.addEventListener ? "unk" != bmak.hn && document.addEventListener(bmak.vc, bmak.hvc, !0) : document.attachEvent && "unk" != bmak.hn && document.attachEvent(bmak.vc, bmak.hvc), window.onblur = bmak.hb, window.onfocus = bmak.hf;
    })();


    (function (t) {
        var a = {};
        t.fpcf = a;
        a.sf4 = function () {
            return false
        };
        a.fpValstr = "-1";
        a.fpValCalculated = !1;
        a.rVal = "-1";
        a.rCFP = "-1";
        a.cache = {};
        a.td = -999999;
        a.clearCache = function () {
            a.cache = {};
        }
        a.fpVal = function () {
            a.fpValCalculated = !0;
            try {
                var t = 0;
                t = Date.now ? Date.now() : +new Date();
                var e = a.data();
                a.fpValstr = e.replace(/\"/g, "\\\\\"");
                var n = 0;
                // n = Date.now ? Date.now() : +new Date(), a.td = n - t;
            } catch (t) {
            }
        };
        a.data = function () {
            var t = screen.colorDepth ? screen.colorDepth : -1,
                e = screen.pixelDepth ? screen.pixelDepth : -1,
                n = navigator.cookieEnabled ? navigator.cookieEnabled : -1,
                o = navigator.javaEnabled ? navigator.javaEnabled() : -1,
                m = navigator.doNotTrack ? navigator.doNotTrack : -1,
                r = "default";
            r = bmak.runFonts ? bmak.altFonts ? a.fonts_optm() : a.fonts() : "dis";
            return [a.canvas("<@nv45. F1n63r,Pr1n71n6!"), a.canvas("m,Ev!xV67BaU> eh2m<f3AG3@"), r, a.pluginInfo(), a.sessionStorageKey(), a.localStorageKey(), a.indexedDbKey(), a.timezoneOffsetKey(), a.webrtcKey(), t, e, n, o, m].join(";");
        };
        a.PLUGINS = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"], a.pluginInfo = function () {
            if (void 0 === navigator.plugins) return null;

            for (var t = a.PLUGINS.length, e = "", n = 0; n < t; n++) {
                var o = a.PLUGINS[n];
                void 0 !== navigator.plugins[o] && (e = e + "," + n);
            }
            return e;
        };
        a.canvas = function (t) {
            try {
                if (void 0 !== a.cache.canvas) return a.cache.canvas;
                var e = -1;

                if (!a.sf4()) {
                    var n = document.createElement("canvas");

                    if (n.width = 280, n.height = 60, n.style.display = "none", "function" == typeof n.getContext) {
                        var o = n.getContext("2d");
                        o.fillStyle = "rgb(102, 204, 0)", o.fillRect(100, 5, 80, 50), o.fillStyle = "#f60", o.font = "16pt Arial", o.fillText(t, 10, 40), o.strokeStyle = "rgb(120, 186, 176)", o.arc(80, 10, 20, 0, Math.PI, !1), o.stroke();
                        var m = n.toDataURL();
                        e = 0;

                        for (var r = 0; r < m.length; r++) {
                            e = (e << 5) - e + m.charCodeAt(r), e &= e;
                        }

                        e = e.toString();
                        var i = document.createElement("canvas");
                        i.width = 16, i.height = 16;
                        var c = i.getContext("2d");
                        c.font = "6pt Arial", a.rVal = Math.floor(1e3 * Math.random()).toString(), c.fillText(a.rVal, 1, 12);

                        for (var b = i.toDataURL(), d = 0, s = 0; s < b.length; s++) {
                            d = (d << 5) - d + b.charCodeAt(s), d &= d;
                        }

                        a.rCFP = d.toString();
                    }
                }

                return e;
            } catch (t) {
                return "exception";
            }
        };
        a.fonts_optm = function () {
            var t = 200,
                e = bmak.get_cf_date(),
                n = [];

            if (!a.sf4() && document.body) {
                var o = ["sans-serif", "monospace"],
                    m = [0, 0],
                    r = [0, 0],
                    i = document.createElement("div");
                i.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";
                var c;

                for (c = 0; c < o.length; c++) {
                    var b = document.createElement("span");
                    b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", b.style.fontSize = "90px", b.style.fontFamily = o[c], i.appendChild(b);
                }

                for (document.body.appendChild(i), c = 0; c < i.childNodes.length; c++) b = i.childNodes[c], m[c] = b.offsetWidth, r[c] = b.offsetHeight;

                if (document.body.removeChild(i), bmak.get_cf_date() - e > t) return "";
                var d = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"],
                    s = document.createElement("div");
                s.style.cssText = "position: relative; left: -9999px; visibility: hidden; display: block !important";

                for (var k = [], l = 0; l < d.length; l++) {
                    var u = document.createElement("div");

                    for (c = 0; c < o.length; c++) {
                        var b = document.createElement("span");
                        b.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", b.style.fontSize = "90px", b.style.fontFamily = d[l] + "," + o[c], u.appendChild(b);
                    }

                    s.appendChild(u);
                }

                if (bmak.get_cf_date() - e > t) return "";
                document.body.appendChild(s);

                for (var l = 0; l < s.childNodes.length; l++) {
                    var _ = !1,
                        u = s.childNodes[l];

                    for (c = 0; c < u.childNodes.length; c++) {
                        var b = u.childNodes[c];

                        if (b.offsetWidth !== m[c] || b.offsetHeight !== r[c]) {
                            _ = !0;
                            break;
                        }
                    }

                    if (_ && k.push(l), bmak.get_cf_date() - e > t) break;
                }

                document.body.removeChild(s), n = k.sort();
            }

            return n.join(",");
        };
        a.fonts = function () {
            var t = [];

            if (!a.sf4() && document.body) {
                var e = ["serif", "sans-serif", "monospace"],
                    n = [0, 0, 0],
                    o = [0, 0, 0],
                    m = document.createElement("span");
                m.innerHTML = "abcdefhijklmnopqrstuvxyz1234567890;+-.", m.style.fontSize = "90px";
                var r;

                for (r = 0; r < e.length; r++) m.style.fontFamily = e[r], document.body.appendChild(m), n[r] = m.offsetWidth, o[r] = m.offsetHeight, document.body.removeChild(m);

                for (var i = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"], c = [], b = 0; b < i.length; b++) {
                    var d = !1;

                    for (r = 0; r < e.length; r++)
                        if (m.style.fontFamily = i[b] + "," + e[r], document.body.appendChild(m), m.offsetWidth === n[r] && m.offsetHeight === o[r] || (d = !0), document.body.removeChild(m), d) {
                            c.push(b);
                            break;
                        }
                }

                t = c.sort();
            }

            return t.join(",");
        };
        a.webrtcKey = function () {
            return "function" == typeof window.RTCPeerConnection || "function" == typeof window.mozRTCPeerConnection || "function" == typeof window.webkitRTCPeerConnection;
        };
        a.indexedDbKey = function () {
            return !!a.hasIndexedDB();
        };
        a.sessionStorageKey = function () {
            return !!a.hasSessionStorage();
        };
        a.localStorageKey = function () {
            return !!a.hasLocalStorage();
        };
        a.hasSessionStorage = function () {
            try {
                return !!window.sessionStorage;
            } catch (t) {
                return !1;
            }
        };
        a.hasLocalStorage = function () {
            try {
                return !!window.localStorage;
            } catch (t) {
                return !1;
            }
        };
        a.hasIndexedDB = function () {
            return !!window.indexedDB;
        };
        a.timezoneOffsetKey = function () {
            return new Date().getTimezoneOffset();
        }
    })(bmak)
    bmak.fpcf.fpVal()
    bmak.fpcf.PLUGINS = null
    window.bmak = bmak
    setTimeout(function () {
        getVoices();
        console.log(bmak)
        fetch("/putInfo", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(window.bmak)
        }).then(response => response.json()).then(res => {
            console.log(res);
            let p = document.getElementById("p1")
            if (res.code === 200) {
                p.innerText = 'Collect success, thank you very much!'
            } else {
                p.innerText = 'Collect fail, please please try again!'
            }
        })
    }, 500);
})()

