!function() {
    "use strict";
    var u = "undefined" != typeof window && void 0 !== window.document ? window.document : {}
      , e = "undefined" != typeof module && module.exports
      , t = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT"in Element
      , c = function() {
        for (var e, n = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], r = 0, l = n.length, t = {}; r < l; r++)
            if ((e = n[r]) && e[1]in u) {
                for (r = 0; r < e.length; r++)
                    t[n[0][r]] = e[r];
                return t
            }
        return !1
    }()
      , l = {
        change: c.fullscreenchange,
        error: c.fullscreenerror
    }
      , n = {
        request: function(l) {
            return new Promise(function(e) {
                var n = c.requestFullscreen
                  , r = function() {
                    this.off("change", r),
                    e()
                }
                .bind(this);
                l = l || u.documentElement,
                / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? l[n]() : l[n](t ? Element.ALLOW_KEYBOARD_INPUT : {}),
                this.on("change", r)
            }
            .bind(this))
        },
        exit: function() {
            return new Promise(function(e) {
                var n = function() {
                    this.off("change", n),
                    e()
                }
                .bind(this);
                u[c.exitFullscreen](),
                this.on("change", n)
            }
            .bind(this))
        },
        toggle: function(e) {
            return this.isFullscreen ? this.exit() : this.request(e)
        },
        onchange: function(e) {
            this.on("change", e)
        },
        onerror: function(e) {
            this.on("error", e)
        },
        on: function(e, n) {
            var r = l[e];
            r && u.addEventListener(r, n, !1)
        },
        off: function(e, n) {
            var r = l[e];
            r && u.removeEventListener(r, n, !1)
        },
        raw: c
    };
    c ? (Object.defineProperties(n, {
        isFullscreen: {
            get: function() {
                return Boolean(u[c.fullscreenElement])
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return u[c.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return Boolean(u[c.fullscreenEnabled])
            }
        }
    }),
    e ? module.exports = n : window.screenfull = n) : e ? module.exports = !1 : window.screenfull = !1
}();
$(function() {
    var OSisFullscreen = false;
    $(".head4").click(function() {
        $(".header-menu").slideToggle("slow");
    });
    $(".dropbox").click(function() {
        var e = this
          , i = $(this).data("dropgroup");
        $(this).parent().parent().hasClass("expand") && ($(this).next().is(":hidden") ? $(this).parent().parent().animate({
            "max-width": "4000px"
        }, {
            queue: !1
        }) : $(this).parent().parent().animate({
            "max-width": "1000px"
        }, {
            queue: !1
        })),
        $(this).next().slideToggle({
            complete: function() {
                null != i && $(".dropbox[data-dropgroup|=" + i + "]").each(function() {
                    $(this).not(e).next().find(".dropbox").next().hide(),
                    $(this).not(e).next().find(".dropbox").removeClass("flip-image"),
                    $(this).not(e).next().find(".dropbox").children(".titleInner").removeClass("flip-image")
                }),
                $(this).is(":hidden") ? ($(e).removeClass("flip-image"),
                $(e).children(".titleInner").removeClass("flip-image")) : ($(e).addClass("flip-image"),
                $(e).children(".titleInner").addClass("flip-image"))
            }
        }),
        null != i && $(".dropbox[data-dropgroup|=" + i + "]").each(function() {
            $(this).not(e).next().slideUp(),
            $(this).not(e).removeClass("flip-image"),
            $(this).not(e).children(".titleInner").removeClass("flip-image")
        })
    });
    var a = document.getElementById("menu");
    if (null != a)
        for (var a = a.getElementsByTagName("a"), b = a.length; 0 < b; )
            a[--b].title = "";
    a = document.getElementById("topmenu");
    if (null != a)
        for (var a = a.getElementsByTagName("a"), b = a.length; 0 < b; )
            a[--b].title = "";
    $(document).on('click', '#osFullscreenLaunch', function(event) {
        event.preventDefault();
        OSfullscreen();
    });
    if ($('#emailUsLink').length) {
        var emaila = "info"
          , emaild = "stopwatch"
          , emailc = "online"
          , emaile = "com";
        $('#emailUsLink').html("<a href=" + "mail" + "to:" + emaila + "@" + emailc + "-" + emaild + "." + emaile + ">" + emaila + "@" + emailc + "-" + emaild + "." + emaile + "</a>");
    }
    var infoShow = false;
    $(".fullinfobutton").on("click", function() {
        $(".fullinfo").addClass("active");
        if (!infoShow) {
            infoShow = true;
            setTimeout(function() {
                window.addEventListener("click", onClickOutside);
            }, 500);
        } else {
            onClickOutside()
        }
    });
    function onClickOutside() {
        console.log("OUTSIDE CLICK");
        window.removeEventListener("click", onClickOutside);
        $(".fullinfo").removeClass("active");
        infoShow = false
    }
    function OSfullscreen() {
        if (screenfull.enabled) {
            screenfull.toggle(document.getElementById('AppHolder'));
        }
    }
    if (screenfull.enabled) {
        screenfull.on('change', fullscreenchange);
    }
    function fullscreenchange() {
        if (screenfull.isFullscreen) {
            $('#AppHolder').addClass('iframefullScreen');
        } else {
            $('#AppHolder').removeClass('iframefullScreen');
        }
        osScaleApp();
    }
    function osScaleApp() {
        if ($("#fullframe").length) {
            var newSize = osGetBestSize();
            OSisFullscreen = false
            if (screenfull.isFullscreen) {
                OSisFullscreen = true
            }
            if (OSisFullscreen == true) {
                $("#fullframe")[0].setAttribute("width", "100%");
                $("#fullframe").css('width', '100%');
            } else {
                if ($(window).innerWidth() < parseFloat(OSapp.width, 10)) {
                    if ($(window).innerWidth() > $(window).innerHeight()) {
                        newSize.width = parseInt(newSize.width, 10);
                        newSize.width -= (newSize.width * 0.10);
                        newSize.width += 'px';
                    }
                } else {}
                $('#fullframe').width(newSize.width);
                $("#fullframe")[0].setAttribute("width", newSize.width);
            }
            if ($('#topTitle').length && OSisFullscreen) {} else {
                $('#fullframe').height(newSize.height);
                $("#fullframe")[0].setAttribute("height", newSize.height);
            }
        }
    }
    function osGetBestSize() {
        var tmpHeight = parseFloat(OSapp.height, 10);
        var tmpWidth = parseFloat(OSapp.width, 10);
        var frameWidth = $(window).innerWidth();
        var frameHeight = $(window).innerHeight();
        var adHeight = 0;
        if (!OSapp.fullscreen) {
            if (parseFloat(tmpWidth, 10) > frameWidth) {
                tmpWidth = frameWidth;
            }
            if (parseFloat(tmpHeight, 10) > frameHeight) {
                tmpHeight = frameHeight;
            }
        } else {
            adHeight = 20;
            if ($('.ad').length) {
                if (OSisFullscreen == false) {
                    $('.ad').each(function(index) {
                        adHeight += $(this).outerHeight(true);
                    });
                } else {
                    if ($('.topTitle').length) {
                        adHeight = $('.topTitle').outerHeight(true);
                        adHeight += 20;
                    }
                }
            }
            frameHeight = (frameHeight - adHeight);
            tmpWidth = ((frameHeight / tmpHeight) * tmpWidth);
            tmpHeight = frameHeight;
            if (tmpWidth > frameWidth) {
                tmpHeight = ((frameWidth / tmpWidth) * tmpHeight);
                tmpWidth = frameWidth;
            }
        }
        return {
            width: tmpWidth + 'px',
            height: tmpHeight + 'px'
        };
    }
    if ($("#fullframe").length) {
        $(window).resize(function() {
            osScaleApp();
        });
        osScaleApp()
    }
});
function chk(tf) {
    if (tf == 't' && document.getElementById("go").value == '') {
        document.getElementById("go").value = 'Search the site...';
        document.getElementById("go").style.color = "#B5B5B5";
    } else if (document.getElementById("go").value == 'Search the site...') {
        document.getElementById("go").value = '';
        document.getElementById("go").style.color = "#000";
    }
}
function srch(k) {
    if (event.keyCode == '13' || k == null) {
        if (document.getElementById("go").value.length < 3 || document.getElementById("go").value == 'Search the site...') {} else {
            window.location = "https://www.online-calculator.com/search/?q=" + escape(document.getElementById("go").value);
        }
    }
}
function ssrch(k) {
    if (k == 'submit') {
        window.location = "https://www.online-calculator.com/search/?q=" + escape(document.getElementById("searchbox").value);
    }
    if (k.keyCode == '13' || k == null) {
        if (document.getElementById("searchbox").value.length < 3 || document.getElementById("searchbox").value == 'Search Online-Calculator.com') {} else {
            window.location = "https://www.online-calculator.com/search/?q=" + escape(document.getElementById("searchbox").value);
        }
    }
}
function schk(tf) {
    if (tf == 't' && document.getElementById("searchbox").value == '') {
        document.getElementById("searchbox").value = 'Search Online-Calculator.com';
        document.getElementById("searchbox").style.color = "#B5B5B5";
    } else if (document.getElementById("searchbox").value == 'Search Online-Calculator.com') {
        document.getElementById("searchbox").value = '';
        document.getElementById("searchbox").style.color = "#000";
    }
}
