function dropdownEffectData(e) {
    var t = null
      , i = null
      , n = $(e)
      , r = $(".dropdown-menu", e)
      , a = n.parents("ul.nav");
    return a.size() > 0 && (t = a.data("dropdown-in") || null ,
    i = a.data("dropdown-out") || null ),
    {
        target: e,
        dropdown: n,
        dropdownMenu: r,
        effectIn: r.data("dropdown-in") || t,
        effectOut: r.data("dropdown-out") || i
    }
}
function dropdownEffectStart(e, t) {
    t && (e.dropdown.addClass("dropdown-animating"),
    e.dropdownMenu.addClass("animated"),
    e.dropdownMenu.addClass(t))
}
function dropdownEffectEnd(e, t) {
    var i = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    e.dropdown.one(i, function() {
        e.dropdown.removeClass("dropdown-animating"),
        e.dropdownMenu.removeClass("animated"),
        e.dropdownMenu.removeClass(e.effectIn),
        e.dropdownMenu.removeClass(e.effectOut),
        "function" == typeof t && t()
    })
}
function get_social_counts() {
    var e = window.location.protocol + "//" + window.location.host + window.location.pathname;
    $.ajax({
        type: "GET",
        url: "http://mdbootstrap.com/wp-content/themes/mdbootstrap/inc/get_social_counts.php?thisurl=" + e,
        dataType: "json",
        success: function(e) {
            var t = document.getElementById("dom-target-fb")
              , i = t.textContent
              , t = document.getElementById("dom-target-tw")
              , n = t.textContent
              , t = document.getElementById("dom-target-gp")
              , r = t.textContent
              , a = 1 * i.valueOf() + e.facebook
              , o = 1 * n.valueOf() + e.twitter
              , s = 1 * r.valueOf() + e.gplus;
            a > 0 ? $("#facebook-span").html(a) : $("#facebook-span").hide(),
            $("#twitter-span").html(o),
            $("#gplus-span").html(s)
        }
    })
}
function loadTemplatesBy(e, t) {
    $.post(ajax_object.ajaxurl, {
        action: "ajax_action",
        category: e
    }, function(t) {
        console.log(e),
        $("#products").html(t)
    })
}
if (function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function y(e) {
        var t = !!e && "length"in e && e.length
          , i = d.type(e);
        return "function" === i || d.isWindow(e) ? !1 : "array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function S(e, t, i) {
        if (d.isFunction(t))
            return d.grep(e, function(e, n) {
                return !!t.call(e, n, e) !== i
            });
        if (t.nodeType)
            return d.grep(e, function(e) {
                return e === t !== i
            });
        if ("string" == typeof t) {
            if (k.test(t))
                return d.filter(t, e, i);
            t = d.filter(t, e)
        }
        return d.grep(e, function(e) {
            return s.call(t, e) > -1 !== i
        })
    }
    function D(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function L(e) {
        var t = {};
        return d.each(e.match(O) || [], function(e, i) {
            t[i] = !0
        }),
        t
    }
    function N() {
        n.removeEventListener("DOMContentLoaded", N),
        e.removeEventListener("load", N),
        d.ready()
    }
    function W() {
        this.expando = d.expando + W.uid++
    }
    function B(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(V, "-$&").toLowerCase(),
            i = e.getAttribute(n),
            "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : z.test(i) ? d.parseJSON(i) : i
                } catch (r) {}
                j.set(e, t, i)
            } else
                i = void 0;
        return i
    }
    function U(e, t, i, n) {
        var r, a = 1, o = 20, s = n ? function() {
            return n.cur()
        }
        : function() {
            return d.css(e, t, "")
        }
        , l = s(), u = i && i[3] || (d.cssNumber[t] ? "" : "px"), c = (d.cssNumber[t] || "px" !== u && +l) && Y.exec(d.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3],
            i = i || [],
            c = +l || 1;
            do
                a = a || ".5",
                c /= a,
                d.style(e, t, c + u);
            while (a !== (a = s() / l) && 1 !== a && --o)
        }
        return i && (c = +c || +l || 0,
        r = i[1] ? c + (i[1] + 1) * i[2] : +i[2],
        n && (n.unit = u,
        n.start = c,
        n.end = r)),
        r
    }
    function J(e, t) {
        var i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && d.nodeName(e, t) ? d.merge([e], i) : i
    }
    function ee(e, t) {
        for (var i = 0, n = e.length; n > i; i++)
            H.set(e[i], "globalEval", !t || H.get(t[i], "globalEval"))
    }
    function ie(e, t, i, n, r) {
        for (var a, o, s, l, u, c, f = t.createDocumentFragment(), h = [], p = 0, g = e.length; g > p; p++)
            if (a = e[p],
            a || 0 === a)
                if ("object" === d.type(a))
                    d.merge(h, a.nodeType ? [a] : a);
                else if (te.test(a)) {
                    for (o = o || f.appendChild(t.createElement("div")),
                    s = (G.exec(a) || ["", ""])[1].toLowerCase(),
                    l = K[s] || K._default,
                    o.innerHTML = l[1] + d.htmlPrefilter(a) + l[2],
                    c = l[0]; c--; )
                        o = o.lastChild;
                    d.merge(h, o.childNodes),
                    o = f.firstChild,
                    o.textContent = ""
                } else
                    h.push(t.createTextNode(a));
        for (f.textContent = "",
        p = 0; a = h[p++]; )
            if (n && d.inArray(a, n) > -1)
                r && r.push(a);
            else if (u = d.contains(a.ownerDocument, a),
            o = J(f.appendChild(a), "script"),
            u && ee(o),
            i)
                for (c = 0; a = o[c++]; )
                    Z.test(a.type || "") && i.push(a);
        return f
    }
    function oe() {
        return !0
    }
    function se() {
        return !1
    }
    function le() {
        try {
            return n.activeElement
        } catch (e) {}
    }
    function ue(e, t, i, n, r, a) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof i && (n = n || i,
            i = void 0);
            for (s in t)
                ue(e, s, i, n, t[s], a);
            return e
        }
        if (null == n && null == r ? (r = i,
        n = i = void 0) : null == r && ("string" == typeof i ? (r = n,
        n = void 0) : (r = n,
        n = i,
        i = void 0)),
        r === !1)
            r = se;
        else if (!r)
            return e;
        return 1 === a && (o = r,
        r = function(e) {
            return d().off(e),
            o.apply(this, arguments)
        }
        ,
        r.guid = o.guid || (o.guid = d.guid++)),
        e.each(function() {
            d.event.add(this, t, r, n, i)
        })
    }
    function ge(e, t) {
        return d.nodeName(e, "table") && d.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function me(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function ve(e) {
        var t = de.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function ye(e, t) {
        var i, n, r, a, o, s, l, u;
        if (1 === t.nodeType) {
            if (H.hasData(e) && (a = H.access(e),
            o = H.set(t, a),
            u = a.events)) {
                delete o.handle,
                o.events = {};
                for (r in u)
                    for (i = 0,
                    n = u[r].length; n > i; i++)
                        d.event.add(t, r, u[r][i])
            }
            j.hasData(e) && (s = j.access(e),
            l = d.extend({}, s),
            j.set(t, l))
        }
    }
    function be(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && Q.test(e.type) ? t.checked = e.checked : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
    }
    function we(e, t, i, n) {
        t = a.apply([], t);
        var r, o, s, l, u, c, h = 0, p = e.length, g = p - 1, m = t[0], v = d.isFunction(m);
        if (v || p > 1 && "string" == typeof m && !f.checkClone && he.test(m))
            return e.each(function(r) {
                var a = e.eq(r);
                v && (t[0] = m.call(this, r, a.html())),
                we(a, t, i, n)
            });
        if (p && (r = ie(t, e[0].ownerDocument, !1, e, n),
        o = r.firstChild,
        1 === r.childNodes.length && (r = o),
        o || n)) {
            for (s = d.map(J(r, "script"), me),
            l = s.length; p > h; h++)
                u = r,
                h !== g && (u = d.clone(u, !0, !0),
                l && d.merge(s, J(u, "script"))),
                i.call(e[h], u, h);
            if (l)
                for (c = s[s.length - 1].ownerDocument,
                d.map(s, ve),
                h = 0; l > h; h++)
                    u = s[h],
                    Z.test(u.type || "") && !H.access(u, "globalEval") && d.contains(c, u) && (u.src ? d._evalUrl && d._evalUrl(u.src) : d.globalEval(u.textContent.replace(pe, "")))
        }
        return e
    }
    function xe(e, t, i) {
        for (var n, r = t ? d.filter(t, e) : e, a = 0; null != (n = r[a]); a++)
            i || 1 !== n.nodeType || d.cleanData(J(n)),
            n.parentNode && (i && d.contains(n.ownerDocument, n) && ee(J(n, "script")),
            n.parentNode.removeChild(n));
        return e
    }
    function ke(e, t) {
        var i = d(t.createElement(e)).appendTo(t.body)
          , n = d.css(i[0], "display");
        return i.detach(),
        n
    }
    function Se(e) {
        var t = n
          , i = Te[e];
        return i || (i = ke(e, t),
        "none" !== i && i || (Ce = (Ce || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = Ce[0].contentDocument,
        t.write(),
        t.close(),
        i = ke(e, t),
        Ce.detach()),
        Te[e] = i),
        i
    }
    function De(e, t, i) {
        var n, r, a, o, s = e.style;
        return i = i || _e(e),
        o = i ? i.getPropertyValue(t) || i[t] : void 0,
        "" !== o && void 0 !== o || d.contains(e.ownerDocument, e) || (o = d.style(e, t)),
        i && !f.pixelMarginRight() && Ae.test(o) && Ee.test(t) && (n = s.width,
        r = s.minWidth,
        a = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = o,
        o = i.width,
        s.width = n,
        s.minWidth = r,
        s.maxWidth = a),
        void 0 !== o ? o + "" : o
    }
    function Oe(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function We(e) {
        if (e in Re)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = Me.length; i--; )
            if (e = Me[i] + t,
            e in Re)
                return e
    }
    function He(e, t, i) {
        var n = Y.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }
    function je(e, t, i, n, r) {
        for (var a = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2)
            "margin" === i && (o += d.css(e, i + X[a], !0, r)),
            n ? ("content" === i && (o -= d.css(e, "padding" + X[a], !0, r)),
            "margin" !== i && (o -= d.css(e, "border" + X[a] + "Width", !0, r))) : (o += d.css(e, "padding" + X[a], !0, r),
            "padding" !== i && (o += d.css(e, "border" + X[a] + "Width", !0, r)));
        return o
    }
    function ze(t, i, r) {
        var a = !0
          , o = "width" === i ? t.offsetWidth : t.offsetHeight
          , s = _e(t)
          , l = "border-box" === d.css(t, "boxSizing", !1, s);
        if (n.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[i])),
        0 >= o || null == o) {
            if (o = De(t, i, s),
            (0 > o || null == o) && (o = t.style[i]),
            Ae.test(o))
                return o;
            a = l && (f.boxSizingReliable() || o === t.style[i]),
            o = parseFloat(o) || 0
        }
        return o + je(t, i, r || (l ? "border" : "content"), a, s) + "px"
    }
    function Ve(e, t) {
        for (var i, n, r, a = [], o = 0, s = e.length; s > o; o++)
            n = e[o],
            n.style && (a[o] = H.get(n, "olddisplay"),
            i = n.style.display,
            t ? (a[o] || "none" !== i || (n.style.display = ""),
            "" === n.style.display && $(n) && (a[o] = H.access(n, "olddisplay", Se(n.nodeName)))) : (r = $(n),
            "none" === i && r || H.set(n, "olddisplay", r ? i : d.css(n, "display"))));
        for (o = 0; s > o; o++)
            n = e[o],
            n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? a[o] || "" : "none"));
        return e
    }
    function Be(e, t, i, n, r) {
        return new Be.prototype.init(e,t,i,n,r)
    }
    function Ue() {
        return e.setTimeout(function() {
            qe = void 0
        }),
        qe = d.now()
    }
    function Qe(e, t) {
        var i, n = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > n; n += 2 - t)
            i = X[n],
            r["margin" + i] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function Ge(e, t, i) {
        for (var n, r = (Je.tweeners[t] || []).concat(Je.tweeners["*"]), a = 0, o = r.length; o > a; a++)
            if (n = r[a].call(i, t, e))
                return n
    }
    function Ze(e, t, i) {
        var n, r, a, o, s, l, u, c, f = this, h = {}, p = e.style, g = e.nodeType && $(e), m = H.get(e, "fxshow");
        i.queue || (s = d._queueHooks(e, "fx"),
        null == s.unqueued && (s.unqueued = 0,
        l = s.empty.fire,
        s.empty.fire = function() {
            s.unqueued || l()
        }
        ),
        s.unqueued++,
        f.always(function() {
            f.always(function() {
                s.unqueued--,
                d.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY],
        u = d.css(e, "display"),
        c = "none" === u ? H.get(e, "olddisplay") || Se(e.nodeName) : u,
        "inline" === c && "none" === d.css(e, "float") && (p.display = "inline-block")),
        i.overflow && (p.overflow = "hidden",
        f.always(function() {
            p.overflow = i.overflow[0],
            p.overflowX = i.overflow[1],
            p.overflowY = i.overflow[2]
        }));
        for (n in t)
            if (r = t[n],
            Xe.exec(r)) {
                if (delete t[n],
                a = a || "toggle" === r,
                r === (g ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[n])
                        continue;g = !0
                }
                h[n] = m && m[n] || d.style(e, n)
            } else
                u = void 0;
        if (d.isEmptyObject(h))
            "inline" === ("none" === u ? Se(e.nodeName) : u) && (p.display = u);
        else {
            m ? "hidden"in m && (g = m.hidden) : m = H.access(e, "fxshow", {}),
            a && (m.hidden = !g),
            g ? d(e).show() : f.done(function() {
                d(e).hide()
            }),
            f.done(function() {
                var t;
                H.remove(e, "fxshow");
                for (t in h)
                    d.style(e, t, h[t])
            });
            for (n in h)
                o = Ge(g ? m[n] : 0, n, f),
                n in m || (m[n] = o.start,
                g && (o.end = o.start,
                o.start = "width" === n || "height" === n ? 1 : 0))
        }
    }
    function Ke(e, t) {
        var i, n, r, a, o;
        for (i in e)
            if (n = d.camelCase(i),
            r = t[n],
            a = e[i],
            d.isArray(a) && (r = a[1],
            a = e[i] = a[0]),
            i !== n && (e[n] = a,
            delete e[i]),
            o = d.cssHooks[n],
            o && "expand"in o) {
                a = o.expand(a),
                delete e[n];
                for (i in a)
                    i in e || (e[i] = a[i],
                    t[i] = r)
            } else
                t[n] = r
    }
    function Je(e, t, i) {
        var n, r, a = 0, o = Je.prefilters.length, s = d.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = qe || Ue(), i = Math.max(0, u.startTime + u.duration - t), n = i / u.duration || 0, a = 1 - n, o = 0, l = u.tweens.length; l > o; o++)
                u.tweens[o].run(a);
            return s.notifyWith(e, [u, a, i]),
            1 > a && l ? i : (s.resolveWith(e, [u]),
            !1)
        }
        , u = s.promise({
            elem: e,
            props: d.extend({}, t),
            opts: d.extend(!0, {
                specialEasing: {},
                easing: d.easing._default
            }, i),
            originalProperties: t,
            originalOptions: i,
            startTime: qe || Ue(),
            duration: i.duration,
            tweens: [],
            createTween: function(t, i) {
                var n = d.Tween(e, u.opts, t, i, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(n),
                n
            },
            stop: function(t) {
                var i = 0
                  , n = t ? u.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n > i; i++)
                    u.tweens[i].run(1);
                return t ? (s.notifyWith(e, [u, 1, 0]),
                s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (Ke(c, u.opts.specialEasing); o > a; a++)
            if (n = Je.prefilters[a].call(u, e, c, u.opts))
                return d.isFunction(n.stop) && (d._queueHooks(u.elem, u.opts.queue).stop = d.proxy(n.stop, n)),
                n;
        return d.map(c, Ge, u),
        d.isFunction(u.opts.start) && u.opts.start.call(e, u),
        d.fx.timer(d.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function at(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Ct(e) {
        return function(t, i) {
            "string" != typeof t && (i = t,
            t = "*");
            var n, r = 0, a = t.toLowerCase().match(O) || [];
            if (d.isFunction(i))
                for (; n = a[r++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }
    function Tt(e, t, i, n) {
        function o(s) {
            var l;
            return r[s] = !0,
            d.each(e[s] || [], function(e, s) {
                var u = s(t, i, n);
                return "string" != typeof u || a || r[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                o(u),
                !1)
            }),
            l
        }
        var r = {}
          , a = e === bt;
        return o(t.dataTypes[0]) || !r["*"] && o("*")
    }
    function kt(e, t) {
        var i, n, r = d.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && d.extend(!0, e, n),
        e
    }
    function St(e, t, i) {
        for (var n, r, a, o, s = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (r in s)
                if (s[r] && s[r].test(n)) {
                    l.unshift(r);
                    break
                }
        if (l[0]in i)
            a = l[0];
        else {
            for (r in i) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    a = r;
                    break
                }
                o || (o = r)
            }
            a = a || o
        }
        return a ? (a !== l[0] && l.unshift(a),
        i[a]) : void 0
    }
    function Et(e, t, i, n) {
        var r, a, o, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (o in e.converters)
                u[o.toLowerCase()] = e.converters[o];
        for (a = c.shift(); a; )
            if (e.responseFields[a] && (i[e.responseFields[a]] = t),
            !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = a,
            a = c.shift())
                if ("*" === a)
                    a = l;
                else if ("*" !== l && l !== a) {
                    if (o = u[l + " " + a] || u["* " + a],
                    !o)
                        for (r in u)
                            if (s = r.split(" "),
                            s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
                                o === !0 ? o = u[r] : u[r] !== !0 && (a = s[0],
                                c.unshift(s[1]));
                                break
                            }
                    if (o !== !0)
                        if (o && e["throws"])
                            t = o(t);
                        else
                            try {
                                t = o(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: o ? f : "No conversion from " + l + " to " + a
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function Ot(e, t, i, n) {
        var r;
        if (d.isArray(t))
            d.each(t, function(t, r) {
                i || _t.test(e) ? n(e, r) : Ot(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, i, n)
            });
        else if (i || "object" !== d.type(t))
            n(e, t);
        else
            for (r in t)
                Ot(e + "[" + r + "]", t[r], i, n)
    }
    function Wt(e) {
        return d.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var i = []
      , n = e.document
      , r = i.slice
      , a = i.concat
      , o = i.push
      , s = i.indexOf
      , l = {}
      , u = l.toString
      , c = l.hasOwnProperty
      , f = {}
      , h = "2.2.3"
      , d = function(e, t) {
        return new d.fn.init(e,t)
    }
      , p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , g = /^-ms-/
      , m = /-([\da-z])/gi
      , v = function(e, t) {
        return t.toUpperCase()
    }
    ;
    d.fn = d.prototype = {
        jquery: h,
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = d.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return d.each(this, e)
        },
        map: function(e) {
            return this.pushStack(d.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: o,
        sort: i.sort,
        splice: i.splice
    },
    d.extend = d.fn.extend = function() {
        var e, t, i, n, r, a, o = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof o && (u = o,
        o = arguments[s] || {},
        s++),
        "object" == typeof o || d.isFunction(o) || (o = {}),
        s === l && (o = this,
        s--); l > s; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    i = o[t],
                    n = e[t],
                    o !== n && (u && n && (d.isPlainObject(n) || (r = d.isArray(n))) ? (r ? (r = !1,
                    a = i && d.isArray(i) ? i : []) : a = i && d.isPlainObject(i) ? i : {},
                    o[t] = d.extend(u, a, n)) : void 0 !== n && (o[t] = n));
        return o
    }
    ,
    d.extend({
        expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === d.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !d.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== d.type(e) || e.nodeType || d.isWindow(e))
                return !1;
            if (e.constructor && !c.call(e, "constructor") && !c.call(e.constructor.prototype || {}, "isPrototypeOf"))
                return !1;
            for (t in e)
                ;
            return void 0 === t || c.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, i = eval;
            e = d.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = n.createElement("script"),
            t.text = e,
            n.head.appendChild(t).parentNode.removeChild(t)) : i(e))
        },
        camelCase: function(e) {
            return e.replace(g, "ms-").replace(m, v)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var i, n = 0;
            if (y(e))
                for (i = e.length; i > n && t.call(e[n], n, e[n]) !== !1; n++)
                    ;
            else
                for (n in e)
                    if (t.call(e[n], n, e[n]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(p, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (y(Object(e)) ? d.merge(i, "string" == typeof e ? [e] : e) : o.call(i, e)),
            i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : s.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, r = e.length; i > n; n++)
                e[r++] = t[n];
            return e.length = r,
            e
        },
        grep: function(e, t, i) {
            for (var n, r = [], a = 0, o = e.length, s = !i; o > a; a++)
                n = !t(e[a], a),
                n !== s && r.push(e[a]);
            return r
        },
        map: function(e, t, i) {
            var n, r, o = 0, s = [];
            if (y(e))
                for (n = e.length; n > o; o++)
                    r = t(e[o], o, i),
                    null != r && s.push(r);
            else
                for (o in e)
                    r = t(e[o], o, i),
                    null != r && s.push(r);
            return a.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, a;
            return "string" == typeof t && (i = e[t],
            t = e,
            e = i),
            d.isFunction(e) ? (n = r.call(arguments, 2),
            a = function() {
                return e.apply(t || this, n.concat(r.call(arguments)))
            }
            ,
            a.guid = e.guid = e.guid || d.guid++,
            a) : void 0
        },
        now: Date.now,
        support: f
    }),
    "function" == typeof Symbol && (d.fn[Symbol.iterator] = i[Symbol.iterator]),
    d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        l["[object " + t + "]"] = t.toLowerCase()
    });
    var b = function(e) {
        function ae(e, t, n, r) {
            var a, s, u, c, f, p, v, y, C = t && t.ownerDocument, T = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T)
                return n;
            if (!r && ((t ? t.ownerDocument || t : x) !== d && h(t),
            t = t || d,
            g)) {
                if (11 !== T && (p = K.exec(e)))
                    if (a = p[1]) {
                        if (9 === T) {
                            if (!(u = t.getElementById(a)))
                                return n;
                            if (u.id === a)
                                return n.push(u),
                                n
                        } else if (C && (u = C.getElementById(a)) && b(t, u) && u.id === a)
                            return n.push(u),
                            n
                    } else {
                        if (p[2])
                            return L.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((a = p[3]) && i.getElementsByClassName && t.getElementsByClassName)
                            return L.apply(n, t.getElementsByClassName(a)),
                            n
                    }
                if (i.qsa && !E[e + " "] && (!m || !m.test(e))) {
                    if (1 !== T)
                        C = t,
                        y = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((c = t.getAttribute("id")) ? c = c.replace(ee, "\\$&") : t.setAttribute("id", c = w),
                        v = o(e),
                        s = v.length,
                        f = $.test(c) ? "#" + c : "[id='" + c + "']"; s--; )
                            v[s] = f + " " + me(v[s]);
                        y = v.join(","),
                        C = J.test(e) && pe(t.parentNode) || t
                    }
                    if (y)
                        try {
                            return L.apply(n, C.querySelectorAll(y)),
                            n
                        } catch (k) {} finally {
                            c === w && t.removeAttribute("id")
                        }
                }
            }
            return l(e.replace(V, "$1"), t, n, r)
        }
        function oe() {
            function t(i, r) {
                return e.push(i + " ") > n.cacheLength && delete t[e.shift()],
                t[i + " "] = r
            }
            var e = [];
            return t
        }
        function se(e) {
            return e[w] = !0,
            e
        }
        function le(e) {
            var t = d.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function ue(e, t) {
            for (var i = e.split("|"), r = i.length; r--; )
                n.attrHandle[i[r]] = t
        }
        function ce(e, t) {
            var i = t && e
              , n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || _) - (~e.sourceIndex || _);
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === t)
                        return -1;
            return e ? 1 : -1
        }
        function fe(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return "input" === i && t.type === e
            }
        }
        function he(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }
        function de(e) {
            return se(function(t) {
                return t = +t,
                se(function(i, n) {
                    for (var r, a = e([], i.length, t), o = a.length; o--; )
                        i[r = a[o]] && (i[r] = !(n[r] = i[r]))
                })
            })
        }
        function pe(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function ge() {}
        function me(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++)
                n += e[t].value;
            return n
        }
        function ve(e, t, i) {
            var n = t.dir
              , r = i && "parentNode" === n
              , a = T++;
            return t.first ? function(t, i, a) {
                for (; t = t[n]; )
                    if (1 === t.nodeType || r)
                        return e(t, i, a)
            }
            : function(t, i, o) {
                var s, l, u, c = [C, a];
                if (o) {
                    for (; t = t[n]; )
                        if ((1 === t.nodeType || r) && e(t, i, o))
                            return !0
                } else
                    for (; t = t[n]; )
                        if (1 === t.nodeType || r) {
                            if (u = t[w] || (t[w] = {}),
                            l = u[t.uniqueID] || (u[t.uniqueID] = {}),
                            (s = l[n]) && s[0] === C && s[1] === a)
                                return c[2] = s[2];
                            if (l[n] = c,
                            c[2] = e(t, i, o))
                                return !0
                        }
            }
        }
        function ye(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var r = e.length; r--; )
                    if (!e[r](t, i, n))
                        return !1;
                return !0
            }
            : e[0]
        }
        function be(e, t, i) {
            for (var n = 0, r = t.length; r > n; n++)
                ae(e, t[n], i);
            return i
        }
        function we(e, t, i, n, r) {
            for (var a, o = [], s = 0, l = e.length, u = null != t; l > s; s++)
                (a = e[s]) && (!i || i(a, n, r)) && (o.push(a),
                u && t.push(s));
            return o
        }
        function xe(e, t, i, n, r, a) {
            return n && !n[w] && (n = xe(n)),
            r && !r[w] && (r = xe(r, a)),
            se(function(a, o, s, l) {
                var u, c, f, h = [], d = [], p = o.length, g = a || be(t || "*", s.nodeType ? [s] : s, []), m = !e || !a && t ? g : we(g, h, e, s, l), v = i ? r || (a ? e : p || n) ? [] : o : m;
                if (i && i(m, v, s, l),
                n)
                    for (u = we(v, d),
                    n(u, [], s, l),
                    c = u.length; c--; )
                        (f = u[c]) && (v[d[c]] = !(m[d[c]] = f));
                if (a) {
                    if (r || e) {
                        if (r) {
                            for (u = [],
                            c = v.length; c--; )
                                (f = v[c]) && u.push(m[c] = f);
                            r(null , v = [], u, l)
                        }
                        for (c = v.length; c--; )
                            (f = v[c]) && (u = r ? N(a, f) : h[c]) > -1 && (a[u] = !(o[u] = f))
                    }
                } else
                    v = we(v === o ? v.splice(p, v.length) : v),
                    r ? r(null , o, v, l) : L.apply(o, v)
            })
        }
        function Ce(e) {
            for (var t, i, r, a = e.length, o = n.relative[e[0].type], s = o || n.relative[" "], l = o ? 1 : 0, c = ve(function(e) {
                return e === t
            }, s, !0), f = ve(function(e) {
                return N(t, e) > -1
            }, s, !0), h = [function(e, i, n) {
                var r = !o && (n || i !== u) || ((t = i).nodeType ? c(e, i, n) : f(e, i, n));
                return t = null ,
                r
            }
            ]; a > l; l++)
                if (i = n.relative[e[l].type])
                    h = [ve(ye(h), i)];
                else {
                    if (i = n.filter[e[l].type].apply(null , e[l].matches),
                    i[w]) {
                        for (r = ++l; a > r && !n.relative[e[r].type]; r++)
                            ;
                        return xe(l > 1 && ye(h), l > 1 && me(e.slice(0, l - 1).concat({
                            value: " " === e[l - 2].type ? "*" : ""
                        })).replace(V, "$1"), i, r > l && Ce(e.slice(l, r)), a > r && Ce(e = e.slice(r)), a > r && me(e))
                    }
                    h.push(i)
                }
            return ye(h)
        }
        function Te(e, t) {
            var i = t.length > 0
              , r = e.length > 0
              , a = function(a, o, s, l, c) {
                var f, p, m, v = 0, y = "0", b = a && [], w = [], x = u, T = a || r && n.find.TAG("*", c), k = C += null == x ? 1 : Math.random() || .1, S = T.length;
                for (c && (u = o === d || o || c); y !== S && null != (f = T[y]); y++) {
                    if (r && f) {
                        for (p = 0,
                        o || f.ownerDocument === d || (h(f),
                        s = !g); m = e[p++]; )
                            if (m(f, o || d, s)) {
                                l.push(f);
                                break
                            }
                        c && (C = k)
                    }
                    i && ((f = !m && f) && v--,
                    a && b.push(f))
                }
                if (v += y,
                i && y !== v) {
                    for (p = 0; m = t[p++]; )
                        m(b, w, o, s);
                    if (a) {
                        if (v > 0)
                            for (; y--; )
                                b[y] || w[y] || (w[y] = D.call(l));
                        w = we(w)
                    }
                    L.apply(l, w),
                    c && !a && w.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                }
                return c && (C = k,
                u = x),
                b
            }
            ;
            return i ? se(a) : a
        }
        var t, i, n, r, a, o, s, l, u, c, f, h, d, p, g, m, v, y, b, w = "sizzle" + 1 * new Date, x = e.document, C = 0, T = 0, k = oe(), S = oe(), E = oe(), A = function(e, t) {
            return e === t && (f = !0),
            0
        }
        , _ = 1 << 31, I = {}.hasOwnProperty, P = [], D = P.pop, O = P.push, L = P.push, F = P.slice, N = function(e, t) {
            for (var i = 0, n = e.length; n > i; i++)
                if (e[i] === t)
                    return i;
            return -1
        }
        , M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", H = "\\[" + R + "*(" + W + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + R + "*\\]", j = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", z = new RegExp(R + "+","g"), V = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$","g"), B = new RegExp("^" + R + "*," + R + "*"), q = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), Y = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]","g"), X = new RegExp(j), $ = new RegExp("^" + W + "$"), U = {
            ID: new RegExp("^#(" + W + ")"),
            CLASS: new RegExp("^\\.(" + W + ")"),
            TAG: new RegExp("^(" + W + "|[*])"),
            ATTR: new RegExp("^" + H),
            PSEUDO: new RegExp("^" + j),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)","i"),
            bool: new RegExp("^(?:" + M + ")$","i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)","i")
        }, Q = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /[+~]/, ee = /'|\\/g, te = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)","ig"), ie = function(e, t, i) {
            var n = "0x" + t - 65536;
            return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }
        , ne = function() {
            h()
        }
        ;
        try {
            L.apply(P = F.call(x.childNodes), x.childNodes),
            P[x.childNodes.length].nodeType
        } catch (re) {
            L = {
                apply: P.length ? function(e, t) {
                    O.apply(e, F.call(t))
                }
                : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++]; )
                        ;
                    e.length = i - 1
                }
            }
        }
        i = ae.support = {},
        a = ae.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        h = ae.setDocument = function(e) {
            var t, r, o = e ? e.ownerDocument || e : x;
            return o !== d && 9 === o.nodeType && o.documentElement ? (d = o,
            p = d.documentElement,
            g = !a(d),
            (r = d.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", ne, !1) : r.attachEvent && r.attachEvent("onunload", ne)),
            i.attributes = le(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            i.getElementsByTagName = le(function(e) {
                return e.appendChild(d.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            i.getElementsByClassName = Z.test(d.getElementsByClassName),
            i.getById = le(function(e) {
                return p.appendChild(e).id = w,
                !d.getElementsByName || !d.getElementsByName(w).length
            }),
            i.getById ? (n.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }
            ,
            n.filter.ID = function(e) {
                var t = e.replace(te, ie);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete n.find.ID,
            n.filter.ID = function(e) {
                var t = e.replace(te, ie);
                return function(e) {
                    var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ),
            n.find.TAG = i.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var i, n = [], r = 0, a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = a[r++]; )
                        1 === i.nodeType && n.push(i);
                    return n
                }
                return a
            }
            ,
            n.find.CLASS = i.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && g ? t.getElementsByClassName(e) : void 0
            }
            ,
            v = [],
            m = [],
            (i.qsa = Z.test(d.querySelectorAll)) && (le(function(e) {
                p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + M + ")"),
                e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                e.querySelectorAll(":checked").length || m.push(":checked"),
                e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
            }),
            le(function(e) {
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (i.matchesSelector = Z.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && le(function(e) {
                i.disconnectedMatch = y.call(e, "div"),
                y.call(e, "[s!='']:x"),
                v.push("!=", j)
            }),
            m = m.length && new RegExp(m.join("|")),
            v = v.length && new RegExp(v.join("|")),
            t = Z.test(p.compareDocumentPosition),
            b = t || Z.test(p.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e
                  , n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            A = t ? function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === d || e.ownerDocument === x && b(x, e) ? -1 : t === d || t.ownerDocument === x && b(x, t) ? 1 : c ? N(c, e) - N(c, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return f = !0,
                    0;
                var i, n = 0, r = e.parentNode, a = t.parentNode, o = [e], s = [t];
                if (!r || !a)
                    return e === d ? -1 : t === d ? 1 : r ? -1 : a ? 1 : c ? N(c, e) - N(c, t) : 0;
                if (r === a)
                    return ce(e, t);
                for (i = e; i = i.parentNode; )
                    o.unshift(i);
                for (i = t; i = i.parentNode; )
                    s.unshift(i);
                for (; o[n] === s[n]; )
                    n++;
                return n ? ce(o[n], s[n]) : o[n] === x ? -1 : s[n] === x ? 1 : 0
            }
            ,
            d) : d
        }
        ,
        ae.matches = function(e, t) {
            return ae(e, null , null , t)
        }
        ,
        ae.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d && h(e),
            t = t.replace(Y, "='$1']"),
            i.matchesSelector && g && !E[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t)))
                try {
                    var n = y.call(e, t);
                    if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (r) {}
            return ae(t, d, null , [e]).length > 0
        }
        ,
        ae.contains = function(e, t) {
            return (e.ownerDocument || e) !== d && h(e),
            b(e, t)
        }
        ,
        ae.attr = function(e, t) {
            (e.ownerDocument || e) !== d && h(e);
            var r = n.attrHandle[t.toLowerCase()]
              , a = r && I.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
            return void 0 !== a ? a : i.attributes || !g ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }
        ,
        ae.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        ae.uniqueSort = function(e) {
            var t, n = [], r = 0, a = 0;
            if (f = !i.detectDuplicates,
            c = !i.sortStable && e.slice(0),
            e.sort(A),
            f) {
                for (; t = e[a++]; )
                    t === e[a] && (r = n.push(a));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return c = null ,
            e
        }
        ,
        r = ae.getText = function(e) {
            var t, i = "", n = 0, a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        i += r(e)
                } else if (3 === a || 4 === a)
                    return e.nodeValue
            } else
                for (; t = e[n++]; )
                    i += r(t);
            return i
        }
        ,
        n = ae.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(te, ie),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && X.test(i) && (t = o(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                    e[2] = i.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(te, ie).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = k[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && k(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, i) {
                    return function(n) {
                        var r = ae.attr(n, e);
                        return null == r ? "!=" === t : t ? (r += "",
                        "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r.replace(z, " ") + " ").indexOf(i) > -1 : "|=" === t ? r === i || r.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, i, n, r) {
                    var a = "nth" !== e.slice(0, 3)
                      , o = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === n && 0 === r ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, i, l) {
                        var u, c, f, h, d, p, g = a !== o ? "nextSibling" : "previousSibling", m = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, b = !1;
                        if (m) {
                            if (a) {
                                for (; g; ) {
                                    for (h = t; h = h[g]; )
                                        if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                            return !1;
                                    p = g = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [o ? m.firstChild : m.lastChild],
                            o && y) {
                                for (h = m,
                                f = h[w] || (h[w] = {}),
                                c = f[h.uniqueID] || (f[h.uniqueID] = {}),
                                u = c[e] || [],
                                d = u[0] === C && u[1],
                                b = d && u[2],
                                h = d && m.childNodes[d]; h = ++d && h && h[g] || (b = d = 0) || p.pop(); )
                                    if (1 === h.nodeType && ++b && h === t) {
                                        c[e] = [C, d, b];
                                        break
                                    }
                            } else if (y && (h = t,
                            f = h[w] || (h[w] = {}),
                            c = f[h.uniqueID] || (f[h.uniqueID] = {}),
                            u = c[e] || [],
                            d = u[0] === C && u[1],
                            b = d),
                            b === !1)
                                for (; (h = ++d && h && h[g] || (b = d = 0) || p.pop()) && ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && (f = h[w] || (h[w] = {}),
                                c = f[h.uniqueID] || (f[h.uniqueID] = {}),
                                c[e] = [C, b]),
                                h !== t)); )
                                    ;
                            return b -= r,
                            b === n || b % n === 0 && b / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var i, r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return r[w] ? r(t) : r.length > 1 ? (i = [e, e, "", t],
                    n.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, i) {
                        for (var n, a = r(e, t), o = a.length; o--; )
                            n = N(e, a[o]),
                            e[n] = !(i[n] = a[o])
                    }) : function(e) {
                        return r(e, 0, i)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: se(function(e) {
                    var t = []
                      , i = []
                      , n = s(e.replace(V, "$1"));
                    return n[w] ? se(function(e, t, i, r) {
                        for (var a, o = n(e, null , r, []), s = e.length; s--; )
                            (a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function(e, r, a) {
                        return t[0] = e,
                        n(t, null , a, i),
                        t[0] = null ,
                        !i.pop()
                    }
                }),
                has: se(function(e) {
                    return function(t) {
                        return ae(e, t).length > 0
                    }
                }),
                contains: se(function(e) {
                    return e = e.replace(te, ie),
                    function(t) {
                        return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                    }
                }),
                lang: se(function(e) {
                    return $.test(e || "") || ae.error("unsupported lang: " + e),
                    e = e.replace(te, ie).toLowerCase(),
                    function(t) {
                        var i;
                        do
                            if (i = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return i = i.toLowerCase(),
                                i === e || 0 === i.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === p
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !n.pseudos.empty(e)
                },
                header: function(e) {
                    return G.test(e.nodeName)
                },
                input: function(e) {
                    return Q.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: de(function() {
                    return [0]
                }),
                last: de(function(e, t) {
                    return [t - 1]
                }),
                eq: de(function(e, t, i) {
                    return [0 > i ? i + t : i]
                }),
                even: de(function(e, t) {
                    for (var i = 0; t > i; i += 2)
                        e.push(i);
                    return e
                }),
                odd: de(function(e, t) {
                    for (var i = 1; t > i; i += 2)
                        e.push(i);
                    return e
                }),
                lt: de(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; --n >= 0; )
                        e.push(n);
                    return e
                }),
                gt: de(function(e, t, i) {
                    for (var n = 0 > i ? i + t : i; ++n < t; )
                        e.push(n);
                    return e
                })
            }
        },
        n.pseudos.nth = n.pseudos.eq;
        for (t in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            n.pseudos[t] = fe(t);
        for (t in {
            submit: !0,
            reset: !0
        })
            n.pseudos[t] = he(t);
        return ge.prototype = n.filters = n.pseudos,
        n.setFilters = new ge,
        o = ae.tokenize = function(e, t) {
            var i, r, a, o, s, l, u, c = S[e + " "];
            if (c)
                return t ? 0 : c.slice(0);
            for (s = e,
            l = [],
            u = n.preFilter; s; ) {
                (!i || (r = B.exec(s))) && (r && (s = s.slice(r[0].length) || s),
                l.push(a = [])),
                i = !1,
                (r = q.exec(s)) && (i = r.shift(),
                a.push({
                    value: i,
                    type: r[0].replace(V, " ")
                }),
                s = s.slice(i.length));
                for (o in n.filter)
                    !(r = U[o].exec(s)) || u[o] && !(r = u[o](r)) || (i = r.shift(),
                    a.push({
                        value: i,
                        type: o,
                        matches: r
                    }),
                    s = s.slice(i.length));
                if (!i)
                    break
            }
            return t ? s.length : s ? ae.error(e) : S(e, l).slice(0)
        }
        ,
        s = ae.compile = function(e, t) {
            var i, n = [], r = [], a = E[e + " "];
            if (!a) {
                for (t || (t = o(e)),
                i = t.length; i--; )
                    a = Ce(t[i]),
                    a[w] ? n.push(a) : r.push(a);
                a = E(e, Te(r, n)),
                a.selector = e
            }
            return a
        }
        ,
        l = ae.select = function(e, t, r, a) {
            var l, u, c, f, h, d = "function" == typeof e && e, p = !a && o(e = d.selector || e);
            if (r = r || [],
            1 === p.length) {
                if (u = p[0] = p[0].slice(0),
                u.length > 2 && "ID" === (c = u[0]).type && i.getById && 9 === t.nodeType && g && n.relative[u[1].type]) {
                    if (t = (n.find.ID(c.matches[0].replace(te, ie), t) || [])[0],
                    !t)
                        return r;
                    d && (t = t.parentNode),
                    e = e.slice(u.shift().value.length)
                }
                for (l = U.needsContext.test(e) ? 0 : u.length; l-- && (c = u[l],
                !n.relative[f = c.type]); )
                    if ((h = n.find[f]) && (a = h(c.matches[0].replace(te, ie), J.test(u[0].type) && pe(t.parentNode) || t))) {
                        if (u.splice(l, 1),
                        e = a.length && me(u),
                        !e)
                            return L.apply(r, a),
                            r;
                        break
                    }
            }
            return (d || s(e, p))(a, t, !g, r, !t || J.test(e) && pe(t.parentNode) || t),
            r
        }
        ,
        i.sortStable = w.split("").sort(A).join("") === w,
        i.detectDuplicates = !!f,
        h(),
        i.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(d.createElement("div"))
        }),
        le(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || ue("type|href|height|width", function(e, t, i) {
            return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        i.attributes && le(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || ue("value", function(e, t, i) {
            return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        le(function(e) {
            return null == e.getAttribute("disabled")
        }) || ue(M, function(e, t, i) {
            var n;
            return i ? void 0 : e[t] === !0 ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }),
        ae
    }(e);
    d.find = b,
    d.expr = b.selectors,
    d.expr[":"] = d.expr.pseudos,
    d.uniqueSort = d.unique = b.uniqueSort,
    d.text = b.getText,
    d.isXMLDoc = b.isXML,
    d.contains = b.contains;
    var w = function(e, t, i) {
        for (var n = [], r = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && d(e).is(i))
                    break;
                n.push(e)
            }
        return n
    }
      , x = function(e, t) {
        for (var i = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && i.push(e);
        return i
    }
      , C = d.expr.match.needsContext
      , T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , k = /^.[^:#\[\.,]*$/;
    d.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"),
        1 === t.length && 1 === n.nodeType ? d.find.matchesSelector(n, e) ? [n] : [] : d.find.matches(e, d.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    d.fn.extend({
        find: function(e) {
            var t, i = this.length, n = [], r = this;
            if ("string" != typeof e)
                return this.pushStack(d(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (d.contains(r[t], this))
                            return !0
                }));
            for (t = 0; i > t; t++)
                d.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? d.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(S(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(S(this, e || [], !0))
        },
        is: function(e) {
            return !!S(this, "string" == typeof e && C.test(e) ? d(e) : e || [], !1).length
        }
    });
    var E, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, _ = d.fn.init = function(e, t, i) {
        var r, a;
        if (!e)
            return this;
        if (i = i || E,
        "string" == typeof e) {
            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null , e, null ] : A.exec(e),
            !r || !r[1] && t)
                return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof d ? t[0] : t,
                d.merge(this, d.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : n, !0)),
                T.test(r[1]) && d.isPlainObject(t))
                    for (r in t)
                        d.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return a = n.getElementById(r[2]),
            a && a.parentNode && (this.length = 1,
            this[0] = a),
            this.context = n,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : d.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(d) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        d.makeArray(e, this))
    }
    ;
    _.prototype = d.fn,
    E = d(n);
    var I = /^(?:parents|prev(?:Until|All))/
      , P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    d.fn.extend({
        has: function(e) {
            var t = d(e, this)
              , i = t.length;
            return this.filter(function() {
                for (var e = 0; i > e; e++)
                    if (d.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var i, n = 0, r = this.length, a = [], o = C.test(e) || "string" != typeof e ? d(e, t || this.context) : 0; r > n; n++)
                for (i = this[n]; i && i !== t; i = i.parentNode)
                    if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && d.find.matchesSelector(i, e))) {
                        a.push(i);
                        break
                    }
            return this.pushStack(a.length > 1 ? d.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? s.call(d(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    d.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return w(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return w(e, "parentNode", i)
        },
        next: function(e) {
            return D(e, "nextSibling")
        },
        prev: function(e) {
            return D(e, "previousSibling")
        },
        nextAll: function(e) {
            return w(e, "nextSibling")
        },
        prevAll: function(e) {
            return w(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return w(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return w(e, "previousSibling", i)
        },
        siblings: function(e) {
            return x((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return x(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || d.merge([], e.childNodes)
        }
    }, function(e, t) {
        d.fn[e] = function(i, n) {
            var r = d.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i),
            n && "string" == typeof n && (r = d.filter(n, r)),
            this.length > 1 && (P[e] || d.uniqueSort(r),
            I.test(e) && r.reverse()),
            this.pushStack(r)
        }
    });
    var O = /\S+/g;
    d.Callbacks = function(e) {
        e = "string" == typeof e ? L(e) : d.extend({}, e);
        var t, i, n, r, a = [], o = [], s = -1, l = function() {
            for (r = e.once,
            n = t = !0; o.length; s = -1)
                for (i = o.shift(); ++s < a.length; )
                    a[s].apply(i[0], i[1]) === !1 && e.stopOnFalse && (s = a.length,
                    i = !1);
            e.memory || (i = !1),
            t = !1,
            r && (a = i ? [] : "")
        }
        , u = {
            add: function() {
                return a && (i && !t && (s = a.length - 1,
                o.push(i)),
                function n(t) {
                    d.each(t, function(t, i) {
                        d.isFunction(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== d.type(i) && n(i)
                    })
                }(arguments),
                i && !t && l()),
                this
            },
            remove: function() {
                return d.each(arguments, function(e, t) {
                    for (var i; (i = d.inArray(t, a, i)) > -1; )
                        a.splice(i, 1),
                        s >= i && s--
                }),
                this
            },
            has: function(e) {
                return e ? d.inArray(e, a) > -1 : a.length > 0
            },
            empty: function() {
                return a && (a = []),
                this
            },
            disable: function() {
                return r = o = [],
                a = i = "",
                this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return r = o = [],
                i || (a = i = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(e, i) {
                return r || (i = i || [],
                i = [e, i.slice ? i.slice() : i],
                o.push(i),
                t || l()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return u
    }
    ,
    d.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", d.Callbacks("once memory"), "resolved"], ["reject", "fail", d.Callbacks("once memory"), "rejected"], ["notify", "progress", d.Callbacks("memory")]]
              , i = "pending"
              , n = {
                state: function() {
                    return i
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return d.Deferred(function(i) {
                        d.each(t, function(t, a) {
                            var o = d.isFunction(e[t]) && e[t];
                            r[a[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && d.isFunction(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[a[0] + "With"](this === n ? i.promise() : this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? d.extend(e, n) : n
                }
            }
              , r = {};
            return n.pipe = n.then,
            d.each(t, function(e, a) {
                var o = a[2]
                  , s = a[3];
                n[a[1]] = o.add,
                s && o.add(function() {
                    i = s
                }, t[1 ^ e][2].disable, t[2][2].lock),
                r[a[0]] = function() {
                    return r[a[0] + "With"](this === r ? n : this, arguments),
                    this
                }
                ,
                r[a[0] + "With"] = o.fireWith
            }),
            n.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var l, u, c, t = 0, i = r.call(arguments), n = i.length, a = 1 !== n || e && d.isFunction(e.promise) ? n : 0, o = 1 === a ? e : d.Deferred(), s = function(e, t, i) {
                return function(n) {
                    t[e] = this,
                    i[e] = arguments.length > 1 ? r.call(arguments) : n,
                    i === l ? o.notifyWith(t, i) : --a || o.resolveWith(t, i)
                }
            }
            ;
            if (n > 1)
                for (l = new Array(n),
                u = new Array(n),
                c = new Array(n); n > t; t++)
                    i[t] && d.isFunction(i[t].promise) ? i[t].promise().progress(s(t, u, l)).done(s(t, c, i)).fail(o.reject) : --a;
            return a || o.resolveWith(c, i),
            o.promise()
        }
    });
    var F;
    d.fn.ready = function(e) {
        return d.ready.promise().done(e),
        this
    }
    ,
    d.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? d.readyWait++ : d.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --d.readyWait : d.isReady) || (d.isReady = !0,
            e !== !0 && --d.readyWait > 0 || (F.resolveWith(n, [d]),
            d.fn.triggerHandler && (d(n).triggerHandler("ready"),
            d(n).off("ready"))))
        }
    }),
    d.ready.promise = function(t) {
        return F || (F = d.Deferred(),
        "complete" === n.readyState || "loading" !== n.readyState && !n.documentElement.doScroll ? e.setTimeout(d.ready) : (n.addEventListener("DOMContentLoaded", N),
        e.addEventListener("load", N))),
        F.promise(t)
    }
    ,
    d.ready.promise();
    var M = function(e, t, i, n, r, a, o) {
        var s = 0
          , l = e.length
          , u = null == i;
        if ("object" === d.type(i)) {
            r = !0;
            for (s in i)
                M(e, t, s, i[s], !0, a, o)
        } else if (void 0 !== n && (r = !0,
        d.isFunction(n) || (o = !0),
        u && (o ? (t.call(e, n),
        t = null ) : (u = t,
        t = function(e, t, i) {
            return u.call(d(e), i)
        }
        )),
        t))
            for (; l > s; s++)
                t(e[s], i, o ? n : n.call(e[s], s, t(e[s], i)));
        return r ? e : u ? t.call(e) : l ? t(e[0], i) : a
    }
      , R = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }
    ;
    W.uid = 1,
    W.prototype = {
        register: function(e, t) {
            var i = t || {};
            return e.nodeType ? e[this.expando] = i : Object.defineProperty(e, this.expando, {
                value: i,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        },
        cache: function(e) {
            if (!R(e))
                return {};
            var t = e[this.expando];
            return t || (t = {},
            R(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, i) {
            var n, r = this.cache(e);
            if ("string" == typeof t)
                r[t] = i;
            else
                for (n in t)
                    r[n] = t[n];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, i) {
            var n;
            return void 0 === t || t && "string" == typeof t && void 0 === i ? (n = this.get(e, t),
            void 0 !== n ? n : this.get(e, d.camelCase(t))) : (this.set(e, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n, r, a = e[this.expando];
            if (void 0 !== a) {
                if (void 0 === t)
                    this.register(e);
                else {
                    d.isArray(t) ? n = t.concat(t.map(d.camelCase)) : (r = d.camelCase(t),
                    t in a ? n = [t, r] : (n = r,
                    n = n in a ? [n] : n.match(O) || [])),
                    i = n.length;
                    for (; i--; )
                        delete a[n[i]]
                }
                (void 0 === t || d.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !d.isEmptyObject(t)
        }
    };
    var H = new W
      , j = new W
      , z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , V = /[A-Z]/g;
    d.extend({
        hasData: function(e) {
            return j.hasData(e) || H.hasData(e)
        },
        data: function(e, t, i) {
            return j.access(e, t, i)
        },
        removeData: function(e, t) {
            j.remove(e, t)
        },
        _data: function(e, t, i) {
            return H.access(e, t, i)
        },
        _removeData: function(e, t) {
            H.remove(e, t)
        }
    }),
    d.fn.extend({
        data: function(e, t) {
            var i, n, r, a = this[0], o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (r = j.get(a),
                1 === a.nodeType && !H.get(a, "hasDataAttrs"))) {
                    for (i = o.length; i--; )
                        o[i] && (n = o[i].name,
                        0 === n.indexOf("data-") && (n = d.camelCase(n.slice(5)),
                        B(a, n, r[n])));
                    H.set(a, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                j.set(this, e)
            }) : M(this, function(t) {
                var i, n;
                if (a && void 0 === t) {
                    if (i = j.get(a, e) || j.get(a, e.replace(V, "-$&").toLowerCase()),
                    void 0 !== i)
                        return i;
                    if (n = d.camelCase(e),
                    i = j.get(a, n),
                    void 0 !== i)
                        return i;
                    if (i = B(a, n, void 0),
                    void 0 !== i)
                        return i
                } else
                    n = d.camelCase(e),
                    this.each(function() {
                        var i = j.get(this, n);
                        j.set(this, n, t),
                        e.indexOf("-") > -1 && void 0 !== i && j.set(this, e, t)
                    })
            }, null , t, arguments.length > 1, null , !0)
        },
        removeData: function(e) {
            return this.each(function() {
                j.remove(this, e)
            })
        }
    }),
    d.extend({
        queue: function(e, t, i) {
            var n;
            return e ? (t = (t || "fx") + "queue",
            n = H.get(e, t),
            i && (!n || d.isArray(i) ? n = H.access(e, t, d.makeArray(i)) : n.push(i)),
            n || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = d.queue(e, t)
              , n = i.length
              , r = i.shift()
              , a = d._queueHooks(e, t)
              , o = function() {
                d.dequeue(e, t)
            }
            ;
            "inprogress" === r && (r = i.shift(),
            n--),
            r && ("fx" === t && i.unshift("inprogress"),
            delete a.stop,
            r.call(e, o, a)),
            !n && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return H.get(e, i) || H.access(e, i, {
                empty: d.Callbacks("once memory").add(function() {
                    H.remove(e, [t + "queue", i])
                })
            })
        }
    }),
    d.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            i--),
            arguments.length < i ? d.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = d.queue(this, e, t);
                d._queueHooks(this, e),
                "fx" === e && "inprogress" !== i[0] && d.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                d.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1, r = d.Deferred(), a = this, o = this.length, s = function() {
                --n || r.resolveWith(a, [a])
            }
            ;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; o--; )
                i = H.get(a[o], e + "queueHooks"),
                i && i.empty && (n++,
                i.empty.add(s));
            return s(),
            r.promise(t)
        }
    });
    var q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Y = new RegExp("^(?:([+-])=|)(" + q + ")([a-z%]*)$","i")
      , X = ["Top", "Right", "Bottom", "Left"]
      , $ = function(e, t) {
        return e = t || e,
        "none" === d.css(e, "display") || !d.contains(e.ownerDocument, e)
    }
      , Q = /^(?:checkbox|radio)$/i
      , G = /<([\w:-]+)/
      , Z = /^$|\/(?:java|ecma)script/i
      , K = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    K.optgroup = K.option,
    K.tbody = K.tfoot = K.colgroup = K.caption = K.thead,
    K.th = K.td;
    var te = /<|&#?\w+;/;
    !function() {
        var e = n.createDocumentFragment()
          , t = e.appendChild(n.createElement("div"))
          , i = n.createElement("input");
        i.setAttribute("type", "radio"),
        i.setAttribute("checked", "checked"),
        i.setAttribute("name", "t"),
        t.appendChild(i),
        f.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        f.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var ne = /^key/
      , re = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , ae = /^([^.]*)(?:\.(.+)|)/;
    d.event = {
        global: {},
        add: function(e, t, i, n, r) {
            var a, o, s, l, u, c, f, h, p, g, m, v = H.get(e);
            if (v)
                for (i.handler && (a = i,
                i = a.handler,
                r = a.selector),
                i.guid || (i.guid = d.guid++),
                (l = v.events) || (l = v.events = {}),
                (o = v.handle) || (o = v.handle = function(t) {
                    return "undefined" != typeof d && d.event.triggered !== t.type ? d.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(O) || [""],
                u = t.length; u--; )
                    s = ae.exec(t[u]) || [],
                    p = m = s[1],
                    g = (s[2] || "").split(".").sort(),
                    p && (f = d.event.special[p] || {},
                    p = (r ? f.delegateType : f.bindType) || p,
                    f = d.event.special[p] || {},
                    c = d.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && d.expr.match.needsContext.test(r),
                        namespace: g.join(".")
                    }, a),
                    (h = l[p]) || (h = l[p] = [],
                    h.delegateCount = 0,
                    f.setup && f.setup.call(e, n, g, o) !== !1 || e.addEventListener && e.addEventListener(p, o)),
                    f.add && (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = i.guid)),
                    r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                    d.event.global[p] = !0)
        },
        remove: function(e, t, i, n, r) {
            var a, o, s, l, u, c, f, h, p, g, m, v = H.hasData(e) && H.get(e);
            if (v && (l = v.events)) {
                for (t = (t || "").match(O) || [""],
                u = t.length; u--; )
                    if (s = ae.exec(t[u]) || [],
                    p = m = s[1],
                    g = (s[2] || "").split(".").sort(),
                    p) {
                        for (f = d.event.special[p] || {},
                        p = (n ? f.delegateType : f.bindType) || p,
                        h = l[p] || [],
                        s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        o = a = h.length; a--; )
                            c = h[a],
                            !r && m !== c.origType || i && i.guid !== c.guid || s && !s.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (h.splice(a, 1),
                            c.selector && h.delegateCount--,
                            f.remove && f.remove.call(e, c));
                        o && !h.length && (f.teardown && f.teardown.call(e, g, v.handle) !== !1 || d.removeEvent(e, p, v.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            d.event.remove(e, p + t[u], i, n, !0);
                d.isEmptyObject(l) && H.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = d.event.fix(e);
            var t, i, n, a, o, s = [], l = r.call(arguments), u = (H.get(this, "events") || {})[e.type] || [], c = d.event.special[e.type] || {};
            if (l[0] = e,
            e.delegateTarget = this,
            !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = d.event.handlers.call(this, e, u),
                t = 0; (a = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = a.elem,
                    i = 0; (o = a.handlers[i++]) && !e.isImmediatePropagationStopped(); )
                        (!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o,
                        e.data = o.data,
                        n = ((d.event.special[o.origType] || {}).handle || o.handler).apply(a.elem, l),
                        void 0 !== n && (e.result = n) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var i, n, r, a, o = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (n = [],
                        i = 0; s > i; i++)
                            a = t[i],
                            r = a.selector + " ",
                            void 0 === n[r] && (n[r] = a.needsContext ? d(r, this).index(l) > -1 : d.find(r, this, null , [l]).length),
                            n[r] && n.push(a);
                        n.length && o.push({
                            elem: l,
                            handlers: n
                        })
                    }
            return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }),
            o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, r, a, o = t.button;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || n,
                r = i.documentElement,
                a = i.body,
                e.pageX = t.clientX + (r && r.scrollLeft || a && a.scrollLeft || 0) - (r && r.clientLeft || a && a.clientLeft || 0),
                e.pageY = t.clientY + (r && r.scrollTop || a && a.scrollTop || 0) - (r && r.clientTop || a && a.clientTop || 0)),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[d.expando])
                return e;
            var t, i, r, a = e.type, o = e, s = this.fixHooks[a];
            for (s || (this.fixHooks[a] = s = re.test(a) ? this.mouseHooks : ne.test(a) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new d.Event(o),
            t = r.length; t--; )
                i = r[t],
                e[i] = o[i];
            return e.target || (e.target = n),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            s.filter ? s.filter(e, o) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== le() && this.focus ? (this.focus(),
                    !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === le() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && d.nodeName(this, "input") ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return d.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    d.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }
    ,
    d.Event = function(e, t) {
        return this instanceof d.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? oe : se) : this.type = e,
        t && d.extend(this, t),
        this.timeStamp = e && e.timeStamp || d.now(),
        void (this[d.expando] = !0)) : new d.Event(e,t)
    }
    ,
    d.Event.prototype = {
        constructor: d.Event,
        isDefaultPrevented: se,
        isPropagationStopped: se,
        isImmediatePropagationStopped: se,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = oe,
            e && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = oe,
            e && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = oe,
            e && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        d.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this, r = e.relatedTarget, a = e.handleObj;
                return (!r || r !== n && !d.contains(n, r)) && (e.type = a.origType,
                i = a.handler.apply(this, arguments),
                e.type = t),
                i
            }
        }
    }),
    d.fn.extend({
        on: function(e, t, i, n) {
            return ue(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return ue(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, r;
            if (e && e.preventDefault && e.handleObj)
                return n = e.handleObj,
                d(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" == typeof e) {
                for (r in e)
                    this.off(r, t, e[r]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (i = t,
            t = void 0),
            i === !1 && (i = se),
            this.each(function() {
                d.event.remove(this, e, i, t)
            })
        }
    });
    var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , fe = /<script|<style|<link/i
      , he = /checked\s*(?:[^=]|=\s*.checked.)/i
      , de = /^true\/(.*)/
      , pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    d.extend({
        htmlPrefilter: function(e) {
            return e.replace(ce, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, r, a, o, s = e.cloneNode(!0), l = d.contains(e.ownerDocument, e);
            if (!(f.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || d.isXMLDoc(e)))
                for (o = J(s),
                a = J(e),
                n = 0,
                r = a.length; r > n; n++)
                    be(a[n], o[n]);
            if (t)
                if (i)
                    for (a = a || J(e),
                    o = o || J(s),
                    n = 0,
                    r = a.length; r > n; n++)
                        ye(a[n], o[n]);
                else
                    ye(e, s);
            return o = J(s, "script"),
            o.length > 0 && ee(o, !l && J(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, i, n, r = d.event.special, a = 0; void 0 !== (i = e[a]); a++)
                if (R(i)) {
                    if (t = i[H.expando]) {
                        if (t.events)
                            for (n in t.events)
                                r[n] ? d.event.remove(i, n) : d.removeEvent(i, n, t.handle);
                        i[H.expando] = void 0
                    }
                    i[j.expando] && (i[j.expando] = void 0)
                }
        }
    }),
    d.fn.extend({
        domManip: we,
        detach: function(e) {
            return xe(this, e, !0)
        },
        remove: function(e) {
            return xe(this, e)
        },
        text: function(e) {
            return M(this, function(e) {
                return void 0 === e ? d.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
                })
            }, null , e, arguments.length)
        },
        append: function() {
            return we(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ge(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return we(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ge(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return we(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return we(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (d.cleanData(J(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return d.clone(this, e, t)
            })
        },
        html: function(e) {
            return M(this, function(e) {
                var t = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !fe.test(e) && !K[(G.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = d.htmlPrefilter(e);
                    try {
                        for (; n > i; i++)
                            t = this[i] || {},
                            1 === t.nodeType && (d.cleanData(J(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (r) {}
                }
                t && this.empty().append(e)
            }, null , e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return we(this, arguments, function(t) {
                var i = this.parentNode;
                d.inArray(this, e) < 0 && (d.cleanData(J(this)),
                i && i.replaceChild(t, this))
            }, e)
        }
    }),
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        d.fn[e] = function(e) {
            for (var i, n = [], r = d(e), a = r.length - 1, s = 0; a >= s; s++)
                i = s === a ? this : this.clone(!0),
                d(r[s])[t](i),
                o.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var Ce, Te = {
        HTML: "block",
        BODY: "block"
    }, Ee = /^margin/, Ae = new RegExp("^(" + q + ")(?!px)[a-z%]+$","i"), _e = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = e),
        i.getComputedStyle(t)
    }
    , Ie = function(e, t, i, n) {
        var r, a, o = {};
        for (a in t)
            o[a] = e.style[a],
            e.style[a] = t[a];
        r = i.apply(e, n || []);
        for (a in t)
            e.style[a] = o[a];
        return r
    }
    , Pe = n.documentElement;
    !function() {
        function l() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            s.innerHTML = "",
            Pe.appendChild(o);
            var n = e.getComputedStyle(s);
            t = "1%" !== n.top,
            a = "2px" === n.marginLeft,
            i = "4px" === n.width,
            s.style.marginRight = "50%",
            r = "4px" === n.marginRight,
            Pe.removeChild(o)
        }
        var t, i, r, a, o = n.createElement("div"), s = n.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        f.clearCloneStyle = "content-box" === s.style.backgroundClip,
        o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        o.appendChild(s),
        d.extend(f, {
            pixelPosition: function() {
                return l(),
                t
            },
            boxSizingReliable: function() {
                return null == i && l(),
                i
            },
            pixelMarginRight: function() {
                return null == i && l(),
                r
            },
            reliableMarginLeft: function() {
                return null == i && l(),
                a
            },
            reliableMarginRight: function() {
                var t, i = s.appendChild(n.createElement("div"));
                return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                i.style.marginRight = i.style.width = "0",
                s.style.width = "1px",
                Pe.appendChild(o),
                t = !parseFloat(e.getComputedStyle(i).marginRight),
                Pe.removeChild(o),
                s.removeChild(i),
                t
            }
        }))
    }();
    var Le = /^(none|table(?!-c[ea]).+)/
      , Fe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ne = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Me = ["Webkit", "O", "Moz", "ms"]
      , Re = n.createElement("div").style;
    d.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = De(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, o, s = d.camelCase(t), l = e.style;
                return t = d.cssProps[s] || (d.cssProps[s] = We(s) || s),
                o = d.cssHooks[t] || d.cssHooks[s],
                void 0 === i ? o && "get"in o && void 0 !== (r = o.get(e, !1, n)) ? r : l[t] : (a = typeof i,
                "string" === a && (r = Y.exec(i)) && r[1] && (i = U(e, t, r),
                a = "number"),
                null != i && i === i && ("number" === a && (i += r && r[3] || (d.cssNumber[s] ? "" : "px")),
                f.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                o && "set"in o && void 0 === (i = o.set(e, i, n)) || (l[t] = i)),
                void 0)
            }
        },
        css: function(e, t, i, n) {
            var r, a, o, s = d.camelCase(t);
            return t = d.cssProps[s] || (d.cssProps[s] = We(s) || s),
            o = d.cssHooks[t] || d.cssHooks[s],
            o && "get"in o && (r = o.get(e, !0, i)),
            void 0 === r && (r = De(e, t, n)),
            "normal" === r && t in Ne && (r = Ne[t]),
            "" === i || i ? (a = parseFloat(r),
            i === !0 || isFinite(a) ? a || 0 : r) : r
        }
    }),
    d.each(["height", "width"], function(e, t) {
        d.cssHooks[t] = {
            get: function(e, i, n) {
                return i ? Le.test(d.css(e, "display")) && 0 === e.offsetWidth ? Ie(e, Fe, function() {
                    return ze(e, t, n)
                }) : ze(e, t, n) : void 0
            },
            set: function(e, i, n) {
                var r, a = n && _e(e), o = n && je(e, t, n, "border-box" === d.css(e, "boxSizing", !1, a), a);
                return o && (r = Y.exec(i)) && "px" !== (r[3] || "px") && (e.style[t] = i,
                i = d.css(e, t)),
                He(e, i, o)
            }
        }
    }),
    d.cssHooks.marginLeft = Oe(f.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(De(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px" : void 0
    }),
    d.cssHooks.marginRight = Oe(f.reliableMarginRight, function(e, t) {
        return t ? Ie(e, {
            display: "inline-block"
        }, De, [e, "marginRight"]) : void 0
    }),
    d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        d.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, r = {}, a = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)
                    r[e + X[n] + t] = a[n] || a[n - 2] || a[0];
                return r
            }
        },
        Ee.test(e) || (d.cssHooks[e + t].set = He)
    }),
    d.fn.extend({
        css: function(e, t) {
            return M(this, function(e, t, i) {
                var n, r, a = {}, o = 0;
                if (d.isArray(t)) {
                    for (n = _e(e),
                    r = t.length; r > o; o++)
                        a[t[o]] = d.css(e, t[o], !1, n);
                    return a
                }
                return void 0 !== i ? d.style(e, t, i) : d.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Ve(this, !0)
        },
        hide: function() {
            return Ve(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $(this) ? d(this).show() : d(this).hide()
            })
        }
    }),
    d.Tween = Be,
    Be.prototype = {
        constructor: Be,
        init: function(e, t, i, n, r, a) {
            this.elem = e,
            this.prop = i,
            this.easing = r || d.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = a || (d.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = Be.propHooks[this.prop];
            return e && e.get ? e.get(this) : Be.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = Be.propHooks[this.prop];
            return this.options.duration ? this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : Be.propHooks._default.set(this),
            this
        }
    },
    Be.prototype.init.prototype = Be.prototype,
    Be.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = d.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                d.fx.step[e.prop] ? d.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[d.cssProps[e.prop]] && !d.cssHooks[e.prop] ? e.elem[e.prop] = e.now : d.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    Be.propHooks.scrollTop = Be.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    d.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    d.fx = Be.prototype.init,
    d.fx.step = {};
    var qe, Ye, Xe = /^(?:toggle|show|hide)$/, $e = /queueHooks$/;
    d.Animation = d.extend(Je, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return U(i.elem, e, Y.exec(t), i),
                i
            }
            ]
        },
        tweener: function(e, t) {
            d.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(O);
            for (var i, n = 0, r = e.length; r > n; n++)
                i = e[n],
                Je.tweeners[i] = Je.tweeners[i] || [],
                Je.tweeners[i].unshift(t)
        },
        prefilters: [Ze],
        prefilter: function(e, t) {
            t ? Je.prefilters.unshift(e) : Je.prefilters.push(e)
        }
    }),
    d.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? d.extend({}, e) : {
            complete: i || !i && t || d.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !d.isFunction(t) && t
        };
        return n.duration = d.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in d.fx.speeds ? d.fx.speeds[n.duration] : d.fx.speeds._default,
        (null == n.queue || n.queue === !0) && (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            d.isFunction(n.old) && n.old.call(this),
            n.queue && d.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    d.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter($).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var r = d.isEmptyObject(e)
              , a = d.speed(t, i, n)
              , o = function() {
                var t = Je(this, d.extend({}, e), a);
                (r || H.get(this, "finish")) && t.stop(!0)
            }
            ;
            return o.finish = o,
            r || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            }
            ;
            return "string" != typeof e && (i = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , r = null != e && e + "queueHooks"
                  , a = d.timers
                  , o = H.get(this);
                if (r)
                    o[r] && o[r].stop && n(o[r]);
                else
                    for (r in o)
                        o[r] && o[r].stop && $e.test(r) && n(o[r]);
                for (r = a.length; r--; )
                    a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(i),
                    t = !1,
                    a.splice(r, 1));
                (t || !i) && d.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, i = H.get(this), n = i[e + "queue"], r = i[e + "queueHooks"], a = d.timers, o = n ? n.length : 0;
                for (i.finish = !0,
                d.queue(this, e, []),
                r && r.stop && r.stop.call(this, !0),
                t = a.length; t--; )
                    a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0),
                    a.splice(t, 1));
                for (t = 0; o > t; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }),
    d.each(["toggle", "show", "hide"], function(e, t) {
        var i = d.fn[t];
        d.fn[t] = function(e, n, r) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(Qe(t, !0), e, n, r)
        }
    }),
    d.each({
        slideDown: Qe("show"),
        slideUp: Qe("hide"),
        slideToggle: Qe("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        d.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }),
    d.timers = [],
    d.fx.tick = function() {
        var e, t = 0, i = d.timers;
        for (qe = d.now(); t < i.length; t++)
            e = i[t],
            e() || i[t] !== e || i.splice(t--, 1);
        i.length || d.fx.stop(),
        qe = void 0
    }
    ,
    d.fx.timer = function(e) {
        d.timers.push(e),
        e() ? d.fx.start() : d.timers.pop()
    }
    ,
    d.fx.interval = 13,
    d.fx.start = function() {
        Ye || (Ye = e.setInterval(d.fx.tick, d.fx.interval))
    }
    ,
    d.fx.stop = function() {
        e.clearInterval(Ye),
        Ye = null
    }
    ,
    d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    d.fn.delay = function(t, i) {
        return t = d.fx ? d.fx.speeds[t] || t : t,
        i = i || "fx",
        this.queue(i, function(i, n) {
            var r = e.setTimeout(i, t);
            n.stop = function() {
                e.clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var e = n.createElement("input")
          , t = n.createElement("select")
          , i = t.appendChild(n.createElement("option"));
        e.type = "checkbox",
        f.checkOn = "" !== e.value,
        f.optSelected = i.selected,
        t.disabled = !0,
        f.optDisabled = !i.disabled,
        e = n.createElement("input"),
        e.value = "t",
        e.type = "radio",
        f.radioValue = "t" === e.value
    }();
    var et, tt = d.expr.attrHandle;
    d.fn.extend({
        attr: function(e, t) {
            return M(this, d.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                d.removeAttr(this, e)
            })
        }
    }),
    d.extend({
        attr: function(e, t, i) {
            var n, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return "undefined" == typeof e.getAttribute ? d.prop(e, t, i) : (1 === a && d.isXMLDoc(e) || (t = t.toLowerCase(),
                r = d.attrHooks[t] || (d.expr.match.bool.test(t) ? et : void 0)),
                void 0 !== i ? null === i ? void d.removeAttr(e, t) : r && "set"in r && void 0 !== (n = r.set(e, i, t)) ? n : (e.setAttribute(t, i + ""),
                i) : r && "get"in r && null !== (n = r.get(e, t)) ? n : (n = d.find.attr(e, t),
                null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!f.radioValue && "radio" === t && d.nodeName(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t),
                        i && (e.value = i),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n, r = 0, a = t && t.match(O);
            if (a && 1 === e.nodeType)
                for (; i = a[r++]; )
                    n = d.propFix[i] || i,
                    d.expr.match.bool.test(i) && (e[n] = !1),
                    e.removeAttribute(i)
        }
    }),
    et = {
        set: function(e, t, i) {
            return t === !1 ? d.removeAttr(e, i) : e.setAttribute(i, i),
            i
        }
    },
    d.each(d.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = tt[t] || d.find.attr;
        tt[t] = function(e, t, n) {
            var r, a;
            return n || (a = tt[t],
            tt[t] = r,
            r = null != i(e, t, n) ? t.toLowerCase() : null ,
            tt[t] = a),
            r
        }
    });
    var it = /^(?:input|select|textarea|button)$/i
      , nt = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(e, t) {
            return M(this, d.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[d.propFix[e] || e]
            })
        }
    }),
    d.extend({
        prop: function(e, t, i) {
            var n, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a)
                return 1 === a && d.isXMLDoc(e) || (t = d.propFix[t] || t,
                r = d.propHooks[t]),
                void 0 !== i ? r && "set"in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get"in r && null !== (n = r.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = d.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : it.test(e.nodeName) || nt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    f.optSelected || (d.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        d.propFix[this.toLowerCase()] = this
    });
    var rt = /[\t\r\n\f]/g;
    d.fn.extend({
        addClass: function(e) {
            var t, i, n, r, a, o, s, l = 0;
            if (d.isFunction(e))
                return this.each(function(t) {
                    d(this).addClass(e.call(this, t, at(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(O) || []; i = this[l++]; )
                    if (r = at(i),
                    n = 1 === i.nodeType && (" " + r + " ").replace(rt, " ")) {
                        for (o = 0; a = t[o++]; )
                            n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                        s = d.trim(n),
                        r !== s && i.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, r, a, o, s, l = 0;
            if (d.isFunction(e))
                return this.each(function(t) {
                    d(this).removeClass(e.call(this, t, at(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(O) || []; i = this[l++]; )
                    if (r = at(i),
                    n = 1 === i.nodeType && (" " + r + " ").replace(rt, " ")) {
                        for (o = 0; a = t[o++]; )
                            for (; n.indexOf(" " + a + " ") > -1; )
                                n = n.replace(" " + a + " ", " ");
                        s = d.trim(n),
                        r !== s && i.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : d.isFunction(e) ? this.each(function(i) {
                d(this).toggleClass(e.call(this, i, at(this), t), t)
            }) : this.each(function() {
                var t, n, r, a;
                if ("string" === i)
                    for (n = 0,
                    r = d(this),
                    a = e.match(O) || []; t = a[n++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    (void 0 === e || "boolean" === i) && (t = at(this),
                    t && H.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : H.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++]; )
                if (1 === i.nodeType && (" " + at(i) + " ").replace(rt, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var ot = /\r/g
      , st = /[\x20\t\r\n\f]+/g;
    d.fn.extend({
        val: function(e) {
            var t, i, n, r = this[0];
            {
                if (arguments.length)
                    return n = d.isFunction(e),
                    this.each(function(i) {
                        var r;
                        1 === this.nodeType && (r = n ? e.call(this, i, d(this).val()) : e,
                        null == r ? r = "" : "number" == typeof r ? r += "" : d.isArray(r) && (r = d.map(r, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                    });
                if (r)
                    return t = d.valHooks[r.type] || d.valHooks[r.nodeName.toLowerCase()],
                    t && "get"in t && void 0 !== (i = t.get(r, "value")) ? i : (i = r.value,
                    "string" == typeof i ? i.replace(ot, "") : null == i ? "" : i)
            }
        }
    }),
    d.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = d.find.attr(e, "value");
                    return null != t ? t : d.trim(d.text(e)).replace(st, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, i, n = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, o = a ? null : [], s = a ? r + 1 : n.length, l = 0 > r ? s : a ? r : 0; s > l; l++)
                        if (i = n[l],
                        (i.selected || l === r) && (f.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !d.nodeName(i.parentNode, "optgroup"))) {
                            if (t = d(i).val(),
                            a)
                                return t;
                            o.push(t)
                        }
                    return o
                },
                set: function(e, t) {
                    for (var i, n, r = e.options, a = d.makeArray(t), o = r.length; o--; )
                        n = r[o],
                        (n.selected = d.inArray(d.valHooks.option.get(n), a) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1),
                    a
                }
            }
        }
    }),
    d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(e, t) {
                return d.isArray(t) ? e.checked = d.inArray(d(e).val(), t) > -1 : void 0
            }
        },
        f.checkOn || (d.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var lt = /^(?:focusinfocus|focusoutblur)$/;
    d.extend(d.event, {
        trigger: function(t, i, r, a) {
            var o, s, l, u, f, h, p, g = [r || n], m = c.call(t, "type") ? t.type : t, v = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = l = r = r || n,
            3 !== r.nodeType && 8 !== r.nodeType && !lt.test(m + d.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."),
            m = v.shift(),
            v.sort()),
            f = m.indexOf(":") < 0 && "on" + m,
            t = t[d.expando] ? t : new d.Event(m,"object" == typeof t && t),
            t.isTrigger = a ? 2 : 3,
            t.namespace = v.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            t.result = void 0,
            t.target || (t.target = r),
            i = null == i ? [t] : d.makeArray(i, [t]),
            p = d.event.special[m] || {},
            a || !p.trigger || p.trigger.apply(r, i) !== !1)) {
                if (!a && !p.noBubble && !d.isWindow(r)) {
                    for (u = p.delegateType || m,
                    lt.test(u + m) || (s = s.parentNode); s; s = s.parentNode)
                        g.push(s),
                        l = s;
                    l === (r.ownerDocument || n) && g.push(l.defaultView || l.parentWindow || e)
                }
                for (o = 0; (s = g[o++]) && !t.isPropagationStopped(); )
                    t.type = o > 1 ? u : p.bindType || m,
                    h = (H.get(s, "events") || {})[t.type] && H.get(s, "handle"),
                    h && h.apply(s, i),
                    h = f && s[f],
                    h && h.apply && R(s) && (t.result = h.apply(s, i),
                    t.result === !1 && t.preventDefault());
                return t.type = m,
                a || t.isDefaultPrevented() || p._default && p._default.apply(g.pop(), i) !== !1 || !R(r) || f && d.isFunction(r[m]) && !d.isWindow(r) && (l = r[f],
                l && (r[f] = null ),
                d.event.triggered = m,
                r[m](),
                d.event.triggered = void 0,
                l && (r[f] = l)),
                t.result
            }
        },
        simulate: function(e, t, i) {
            var n = d.extend(new d.Event, i, {
                type: e,
                isSimulated: !0
            });
            d.event.trigger(n, null , t),
            n.isDefaultPrevented() && i.preventDefault()
        }
    }),
    d.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                d.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            return i ? d.event.trigger(e, t, i, !0) : void 0
        }
    }),
    d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        d.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null , e, i) : this.trigger(t)
        }
    }),
    d.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    f.focusin = "onfocusin"in e,
    f.focusin || d.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            d.event.simulate(t, e.target, d.event.fix(e))
        }
        ;
        d.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this
                  , r = H.access(n, t);
                r || n.addEventListener(e, i, !0),
                H.access(n, t, (r || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this
                  , r = H.access(n, t) - 1;
                r ? H.access(n, t, r) : (n.removeEventListener(e, i, !0),
                H.remove(n, t))
            }
        }
    });
    var ut = e.location
      , ct = d.now()
      , ft = /\?/;
    d.parseJSON = function(e) {
        return JSON.parse(e + "")
    }
    ,
    d.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t)
            return null ;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (n) {
            i = void 0
        }
        return (!i || i.getElementsByTagName("parsererror").length) && d.error("Invalid XML: " + t),
        i
    }
    ;
    var ht = /#.*$/
      , dt = /([?&])_=[^&]*/
      , pt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , gt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , mt = /^(?:GET|HEAD)$/
      , vt = /^\/\//
      , yt = {}
      , bt = {}
      , wt = "*/".concat("*")
      , xt = n.createElement("a");
    xt.href = ut.href,
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ut.href,
            type: "GET",
            isLocal: gt.test(ut.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? kt(kt(e, d.ajaxSettings), t) : kt(d.ajaxSettings, e)
        },
        ajaxPrefilter: Ct(yt),
        ajaxTransport: Ct(bt),
        ajax: function(t, i) {
            function S(t, i, n, s) {
                var u, f, b, w, C, k = i;
                2 !== x && (x = 2,
                l && e.clearTimeout(l),
                r = void 0,
                o = s || "",
                T.readyState = t > 0 ? 4 : 0,
                u = t >= 200 && 300 > t || 304 === t,
                n && (w = St(h, T, n)),
                w = Et(h, w, T, u),
                u ? (h.ifModified && (C = T.getResponseHeader("Last-Modified"),
                C && (d.lastModified[a] = C),
                C = T.getResponseHeader("etag"),
                C && (d.etag[a] = C)),
                204 === t || "HEAD" === h.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = w.state,
                f = w.data,
                b = w.error,
                u = !b)) : (b = k,
                (t || !k) && (k = "error",
                0 > t && (t = 0))),
                T.status = t,
                T.statusText = (i || k) + "",
                u ? m.resolveWith(p, [f, k, T]) : m.rejectWith(p, [T, k, b]),
                T.statusCode(y),
                y = void 0,
                c && g.trigger(u ? "ajaxSuccess" : "ajaxError", [T, h, u ? f : b]),
                v.fireWith(p, [T, k]),
                c && (g.trigger("ajaxComplete", [T, h]),
                --d.active || d.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t,
            t = void 0),
            i = i || {};
            var r, a, o, s, l, u, c, f, h = d.ajaxSetup({}, i), p = h.context || h, g = h.context && (p.nodeType || p.jquery) ? d(p) : d.event, m = d.Deferred(), v = d.Callbacks("once memory"), y = h.statusCode || {}, b = {}, w = {}, x = 0, C = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!s)
                            for (s = {}; t = pt.exec(o); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? o : null
                },
                setRequestHeader: function(e, t) {
                    var i = e.toLowerCase();
                    return x || (e = w[i] = w[i] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > x)
                            for (t in e)
                                y[t] = [y[t], e[t]];
                        else
                            T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || C;
                    return r && r.abort(t),
                    S(0, t),
                    this
                }
            };
            if (m.promise(T).complete = v.add,
            T.success = T.done,
            T.error = T.fail,
            h.url = ((t || h.url || ut.href) + "").replace(ht, "").replace(vt, ut.protocol + "//"),
            h.type = i.method || i.type || h.method || h.type,
            h.dataTypes = d.trim(h.dataType || "*").toLowerCase().match(O) || [""],
            null == h.crossDomain) {
                u = n.createElement("a");
                try {
                    u.href = h.url,
                    u.href = u.href,
                    h.crossDomain = xt.protocol + "//" + xt.host != u.protocol + "//" + u.host
                } catch (k) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = d.param(h.data, h.traditional)),
            Tt(yt, h, i, T),
            2 === x)
                return T;
            c = d.event && h.global,
            c && 0 === d.active++ && d.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !mt.test(h.type),
            a = h.url,
            h.hasContent || (h.data && (a = h.url += (ft.test(a) ? "&" : "?") + h.data,
            delete h.data),
            h.cache === !1 && (h.url = dt.test(a) ? a.replace(dt, "$1_=" + ct++) : a + (ft.test(a) ? "&" : "?") + "_=" + ct++)),
            h.ifModified && (d.lastModified[a] && T.setRequestHeader("If-Modified-Since", d.lastModified[a]),
            d.etag[a] && T.setRequestHeader("If-None-Match", d.etag[a])),
            (h.data && h.hasContent && h.contentType !== !1 || i.contentType) && T.setRequestHeader("Content-Type", h.contentType),
            T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + wt + "; q=0.01" : "") : h.accepts["*"]);
            for (f in h.headers)
                T.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (h.beforeSend.call(p, T, h) === !1 || 2 === x))
                return T.abort();
            C = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            })
                T[f](h[f]);
            if (r = Tt(bt, h, i, T)) {
                if (T.readyState = 1,
                c && g.trigger("ajaxSend", [T, h]),
                2 === x)
                    return T;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout")
                }, h.timeout));
                try {
                    x = 1,
                    r.send(b, S)
                } catch (k) {
                    if (!(2 > x))
                        throw k;
                    S(-1, k)
                }
            } else
                S(-1, "No Transport");
            return T
        },
        getJSON: function(e, t, i) {
            return d.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return d.get(e, void 0, t, "script")
        }
    }),
    d.each(["get", "post"], function(e, t) {
        d[t] = function(e, i, n, r) {
            return d.isFunction(i) && (r = r || n,
            n = i,
            i = void 0),
            d.ajax(d.extend({
                url: e,
                type: t,
                dataType: r,
                data: i,
                success: n
            }, d.isPlainObject(e) && e))
        }
    }),
    d._evalUrl = function(e) {
        return d.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    d.fn.extend({
        wrapAll: function(e) {
            var t;
            return d.isFunction(e) ? this.each(function(t) {
                d(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = d(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this)
        },
        wrapInner: function(e) {
            return d.isFunction(e) ? this.each(function(t) {
                d(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = d(this)
                  , i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = d.isFunction(e);
            return this.each(function(i) {
                d(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                d.nodeName(this, "body") || d(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    d.expr.filters.hidden = function(e) {
        return !d.expr.filters.visible(e)
    }
    ,
    d.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    }
    ;
    var At = /%20/g
      , _t = /\[\]$/
      , It = /\r?\n/g
      , Pt = /^(?:submit|button|image|reset|file)$/i
      , Dt = /^(?:input|select|textarea|keygen)/i;
    d.param = function(e, t) {
        var i, n = [], r = function(e, t) {
            t = d.isFunction(t) ? t() : null == t ? "" : t,
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        ;
        if (void 0 === t && (t = d.ajaxSettings && d.ajaxSettings.traditional),
        d.isArray(e) || e.jquery && !d.isPlainObject(e))
            d.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (i in e)
                Ot(i, e[i], t, r);
        return n.join("&").replace(At, "+")
    }
    ,
    d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = d.prop(this, "elements");
                return e ? d.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !d(this).is(":disabled") && Dt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Q.test(e))
            }).map(function(e, t) {
                var i = d(this).val();
                return null == i ? null : d.isArray(i) ? d.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(It, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(It, "\r\n")
                }
            }).get()
        }
    }),
    d.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    ;
    var Lt = {
        0: 200,
        1223: 204
    }
      , Ft = d.ajaxSettings.xhr();
    f.cors = !!Ft && "withCredentials"in Ft,
    f.ajax = Ft = !!Ft,
    d.ajaxTransport(function(t) {
        var i, n;
        return f.cors || Ft && !t.crossDomain ? {
            send: function(r, a) {
                var o, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
                    for (o in t.xhrFields)
                        s[o] = t.xhrFields[o];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r)
                    s.setRequestHeader(o, r[o]);
                i = function(e) {
                    return function() {
                        i && (i = n = s.onload = s.onerror = s.onabort = s.onreadystatechange = null ,
                        "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Lt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }
                ,
                s.onload = i(),
                n = s.onerror = i("error"),
                void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        i && n()
                    })
                }
                ,
                i = i("abort");
                try {
                    s.send(t.hasContent && t.data || null )
                } catch (l) {
                    if (i)
                        throw l
                }
            },
            abort: function() {
                i && i()
            }
        } : void 0
    }),
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return d.globalEval(e),
                e
            }
        }
    }),
    d.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    d.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function(r, a) {
                    t = d("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function(e) {
                        t.remove(),
                        i = null ,
                        e && a("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    n.head.appendChild(t[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Nt = []
      , Mt = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Nt.pop() || d.expando + "_" + ct++;
            return this[e] = !0,
            e
        }
    }),
    d.ajaxPrefilter("json jsonp", function(t, i, n) {
        var r, a, o, s = t.jsonp !== !1 && (Mt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Mt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        s ? t[s] = t[s].replace(Mt, "$1" + r) : t.jsonp !== !1 && (t.url += (ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
        t.converters["script json"] = function() {
            return o || d.error(r + " was not called"),
            o[0]
        }
        ,
        t.dataTypes[0] = "json",
        a = e[r],
        e[r] = function() {
            o = arguments
        }
        ,
        n.always(function() {
            void 0 === a ? d(e).removeProp(r) : e[r] = a,
            t[r] && (t.jsonpCallback = i.jsonpCallback,
            Nt.push(r)),
            o && d.isFunction(a) && a(o[0]),
            o = a = void 0
        }),
        "script") : void 0
    }),
    d.parseHTML = function(e, t, i) {
        if (!e || "string" != typeof e)
            return null ;
        "boolean" == typeof t && (i = t,
        t = !1),
        t = t || n;
        var r = T.exec(e)
          , a = !i && [];
        return r ? [t.createElement(r[1])] : (r = ie([e], t, a),
        a && a.length && d(a).remove(),
        d.merge([], r.childNodes))
    }
    ;
    var Rt = d.fn.load;
    d.fn.load = function(e, t, i) {
        if ("string" != typeof e && Rt)
            return Rt.apply(this, arguments);
        var n, r, a, o = this, s = e.indexOf(" ");
        return s > -1 && (n = d.trim(e.slice(s)),
        e = e.slice(0, s)),
        d.isFunction(t) ? (i = t,
        t = void 0) : t && "object" == typeof t && (r = "POST"),
        o.length > 0 && d.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments,
            o.html(n ? d("<div>").append(d.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            o.each(function() {
                i.apply(this, a || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        d.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    d.expr.filters.animated = function(e) {
        return d.grep(d.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    d.offset = {
        setOffset: function(e, t, i) {
            var n, r, a, o, s, l, u, c = d.css(e, "position"), f = d(e), h = {};
            "static" === c && (e.style.position = "relative"),
            s = f.offset(),
            a = d.css(e, "top"),
            l = d.css(e, "left"),
            u = ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1,
            u ? (n = f.position(),
            o = n.top,
            r = n.left) : (o = parseFloat(a) || 0,
            r = parseFloat(l) || 0),
            d.isFunction(t) && (t = t.call(e, i, d.extend({}, s))),
            null != t.top && (h.top = t.top - s.top + o),
            null != t.left && (h.left = t.left - s.left + r),
            "using"in t ? t.using.call(e, h) : f.css(h)
        }
    },
    d.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    d.offset.setOffset(this, e, t)
                });
            var t, i, n = this[0], r = {
                top: 0,
                left: 0
            }, a = n && n.ownerDocument;
            if (a)
                return t = a.documentElement,
                d.contains(t, n) ? (r = n.getBoundingClientRect(),
                i = Wt(a),
                {
                    top: r.top + i.pageYOffset - t.clientTop,
                    left: r.left + i.pageXOffset - t.clientLeft
                }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0], n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === d.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                d.nodeName(e[0], "html") || (n = e.offset()),
                n.top += d.css(e[0], "borderTopWidth", !0),
                n.left += d.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - d.css(i, "marginTop", !0),
                    left: t.left - n.left - d.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === d.css(e, "position"); )
                    e = e.offsetParent;
                return e || Pe
            })
        }
    }),
    d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        d.fn[e] = function(n) {
            return M(this, function(e, n, r) {
                var a = Wt(e);
                return void 0 === r ? a ? a[t] : e[n] : void (a ? a.scrollTo(i ? a.pageXOffset : r, i ? r : a.pageYOffset) : e[n] = r)
            }, e, n, arguments.length)
        }
    }),
    d.each(["top", "left"], function(e, t) {
        d.cssHooks[t] = Oe(f.pixelPosition, function(e, i) {
            return i ? (i = De(e, t),
            Ae.test(i) ? d(e).position()[t] + "px" : i) : void 0
        })
    }),
    d.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        d.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            d.fn[n] = function(n, r) {
                var a = arguments.length && (i || "boolean" != typeof n)
                  , o = i || (n === !0 || r === !0 ? "margin" : "border");
                return M(this, function(t, i, n) {
                    var r;
                    return d.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === n ? d.css(t, i, o) : d.style(t, i, n, o)
                }, t, a ? n : void 0, a, null )
            }
        })
    }),
    d.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null , t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null , t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        },
        size: function() {
            return this.length
        }
    }),
    d.fn.andSelf = d.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return d
    });
    var Ht = e.jQuery
      , jt = e.$;
    return d.noConflict = function(t) {
        return e.$ === d && (e.$ = jt),
        t && e.jQuery === d && (e.jQuery = Ht),
        d
    }
    ,
    t || (e.jQuery = e.$ = d),
    d
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.Tether = t()
}(this, function(e, t, i) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function o(e) {
        var t = getComputedStyle(e) || {}
          , i = t.position;
        if ("fixed" === i)
            return e;
        for (var n = e; n = n.parentNode; ) {
            var r = void 0;
            try {
                r = getComputedStyle(n)
            } catch (a) {}
            if ("undefined" == typeof r || null === r)
                return n;
            var o = r
              , s = o.overflow
              , l = o.overflowX
              , u = o.overflowY;
            if (/(auto|scroll)/.test(s + u + l) && ("absolute" !== i || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0))
                return n
        }
        return document.body
    }
    function c(e) {
        var t = void 0;
        e === document ? (t = document,
        e = document.documentElement) : t = e.ownerDocument;
        var i = t.documentElement
          , n = {}
          , r = e.getBoundingClientRect();
        for (var a in r)
            n[a] = r[a];
        var o = u(t);
        return n.top -= o.top,
        n.left -= o.left,
        "undefined" == typeof n.width && (n.width = document.body.scrollWidth - n.left - n.right),
        "undefined" == typeof n.height && (n.height = document.body.scrollHeight - n.top - n.bottom),
        n.top = n.top - i.clientTop,
        n.left = n.left - i.clientLeft,
        n.right = t.body.clientWidth - n.width - n.left,
        n.bottom = t.body.clientHeight - n.height - n.top,
        n
    }
    function f(e) {
        return e.offsetParent || document.documentElement
    }
    function h() {
        var e = document.createElement("div");
        e.style.width = "100%",
        e.style.height = "200px";
        var t = document.createElement("div");
        d(t.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }),
        t.appendChild(e),
        document.body.appendChild(t);
        var i = e.offsetWidth;
        t.style.overflow = "scroll";
        var n = e.offsetWidth;
        i === n && (n = t.clientWidth),
        document.body.removeChild(t);
        var r = i - n;
        return {
            width: r,
            height: r
        }
    }
    function d() {
        var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
          , t = [];
        return Array.prototype.push.apply(t, arguments),
        t.slice(1).forEach(function(t) {
            if (t)
                for (var i in t)
                    ({}).hasOwnProperty.call(t, i) && (e[i] = t[i])
        }),
        e
    }
    function p(e, t) {
        if ("undefined" != typeof e.classList)
            t.split(" ").forEach(function(t) {
                t.trim() && e.classList.remove(t)
            });
        else {
            var i = new RegExp("(^| )" + t.split(" ").join("|") + "( |$)","gi")
              , n = v(e).replace(i, " ");
            y(e, n)
        }
    }
    function g(e, t) {
        if ("undefined" != typeof e.classList)
            t.split(" ").forEach(function(t) {
                t.trim() && e.classList.add(t)
            });
        else {
            p(e, t);
            var i = v(e) + (" " + t);
            y(e, i)
        }
    }
    function m(e, t) {
        if ("undefined" != typeof e.classList)
            return e.classList.contains(t);
        var i = v(e);
        return new RegExp("(^| )" + t + "( |$)","gi").test(i)
    }
    function v(e) {
        return e.className instanceof SVGAnimatedString ? e.className.baseVal : e.className
    }
    function y(e, t) {
        e.setAttribute("class", t)
    }
    function b(e, t, i) {
        i.forEach(function(i) {
            -1 === t.indexOf(i) && m(e, i) && p(e, i)
        }),
        t.forEach(function(t) {
            m(e, t) || g(e, t)
        })
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function E(e, t) {
        var i = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return e + i >= t && t >= e - i
    }
    function P() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
    }
    function M() {
        for (var e = {
            top: 0,
            left: 0
        }, t = arguments.length, i = Array(t), n = 0; t > n; n++)
            i[n] = arguments[n];
        return i.forEach(function(t) {
            var i = t.top
              , n = t.left;
            "string" == typeof i && (i = parseFloat(i, 10)),
            "string" == typeof n && (n = parseFloat(n, 10)),
            e.top += i,
            e.left += n
        }),
        e
    }
    function R(e, t) {
        return "string" == typeof e.left && -1 !== e.left.indexOf("%") && (e.left = parseFloat(e.left, 10) / 100 * t.width),
        "string" == typeof e.top && -1 !== e.top.indexOf("%") && (e.top = parseFloat(e.top, 10) / 100 * t.height),
        e
    }
    function B(e, t) {
        return "scrollParent" === t ? t = e.scrollParent : "window" === t && (t = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]),
        t === document && (t = t.documentElement),
        "undefined" != typeof t.nodeType && !function() {
            var e = c(t)
              , i = e
              , n = getComputedStyle(t);
            t = [i.left, i.top, e.width + i.left, e.height + i.top],
            V.forEach(function(e, i) {
                e = e[0].toUpperCase() + e.substr(1),
                "Top" === e || "Left" === e ? t[i] += parseFloat(n["border" + e + "Width"]) : t[i] -= parseFloat(n["border" + e + "Width"])
            })
        }(),
        t
    }
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }()
      , a = void 0;
    "undefined" == typeof a && (a = {
        modules: []
    });
    var s = function() {
        var e = 0;
        return function() {
            return ++e
        }
    }()
      , l = {}
      , u = function(e) {
        var t = e._tetherZeroElement;
        "undefined" == typeof t && (t = e.createElement("div"),
        t.setAttribute("data-tether-id", s()),
        d(t.style, {
            top: 0,
            left: 0,
            position: "absolute"
        }),
        e.body.appendChild(t),
        e._tetherZeroElement = t);
        var i = t.getAttribute("data-tether-id");
        if ("undefined" == typeof l[i]) {
            l[i] = {};
            var n = t.getBoundingClientRect();
            for (var r in n)
                l[i][r] = n[r];
            x(function() {
                delete l[i]
            })
        }
        return l[i]
    }
      , w = []
      , x = function(e) {
        w.push(e)
    }
      , C = function() {
        for (var e = void 0; e = w.pop(); )
            e()
    }
      , T = function() {
        function e() {
            r(this, e)
        }
        return n(e, [{
            key: "on",
            value: function(e, t, i) {
                var n = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3];
                "undefined" == typeof this.bindings && (this.bindings = {}),
                "undefined" == typeof this.bindings[e] && (this.bindings[e] = []),
                this.bindings[e].push({
                    handler: t,
                    ctx: i,
                    once: n
                })
            }
        }, {
            key: "once",
            value: function(e, t, i) {
                this.on(e, t, i, !0)
            }
        }, {
            key: "off",
            value: function(e, t) {
                if ("undefined" == typeof this.bindings || "undefined" == typeof this.bindings[e])
                    if ("undefined" == typeof t)
                        delete this.bindings[e];
                    else
                        for (var i = 0; i < this.bindings[e].length; )
                            this.bindings[e][i].handler === t ? this.bindings[e].splice(i, 1) : ++i
            }
        }, {
            key: "trigger",
            value: function(e) {
                if ("undefined" != typeof this.bindings && this.bindings[e]) {
                    for (var t = 0, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; i > r; r++)
                        n[r - 1] = arguments[r];
                    for (; t < this.bindings[e].length; ) {
                        var a = this.bindings[e][t]
                          , o = a.handler
                          , s = a.ctx
                          , l = a.once
                          , u = s;
                        "undefined" == typeof u && (u = this),
                        o.apply(u, n),
                        l ? this.bindings[e].splice(t, 1) : ++t
                    }
                }
            }
        }]),
        e
    }();
    a.Utils = {
        getScrollParent: o,
        getBounds: c,
        getOffsetParent: f,
        extend: d,
        addClass: g,
        removeClass: p,
        hasClass: m,
        updateClasses: b,
        defer: x,
        flush: C,
        uniqueId: s,
        Evented: T,
        getScrollBarSize: h
    };
    var k = function() {
        function e(e, t) {
            var i = []
              , n = !0
              , r = !1
              , a = void 0;
            try {
                for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value),
                !t || i.length !== t); n = !0)
                    ;
            } catch (l) {
                r = !0,
                a = l
            } finally {
                try {
                    !n && o["return"] && o["return"]()
                } finally {
                    if (r)
                        throw a
                }
            }
            return i
        }
        return function(t, i) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }();
    if ("undefined" == typeof a)
        throw new Error("You must include the utils.js file before tether.js");
    var S = a.Utils
      , o = S.getScrollParent
      , c = S.getBounds
      , f = S.getOffsetParent
      , d = S.extend
      , g = S.addClass
      , p = S.removeClass
      , b = S.updateClasses
      , x = S.defer
      , C = S.flush
      , h = S.getScrollBarSize
      , A = function() {
        if ("undefined" == typeof document)
            return "";
        for (var e = document.createElement("div"), t = ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"], i = 0; i < t.length; ++i) {
            var n = t[i];
            if (void 0 !== e.style[n])
                return n
        }
    }()
      , _ = []
      , I = function() {
        _.forEach(function(e) {
            e.position(!1)
        }),
        C()
    }
    ;
    !function() {
        var e = null
          , t = null
          , i = null
          , n = function r() {
            return "undefined" != typeof t && t > 16 ? (t = Math.min(t - 16, 250),
            void (i = setTimeout(r, 250))) : void ("undefined" != typeof e && P() - e < 10 || ("undefined" != typeof i && (clearTimeout(i),
            i = null ),
            e = P(),
            I(),
            t = P() - e))
        }
        ;
        "undefined" != typeof window && ["resize", "scroll", "touchmove"].forEach(function(e) {
            window.addEventListener(e, n)
        })
    }();
    var D = {
        center: "center",
        left: "right",
        right: "left"
    }
      , O = {
        middle: "middle",
        top: "bottom",
        bottom: "top"
    }
      , L = {
        top: 0,
        left: 0,
        middle: "50%",
        center: "50%",
        bottom: "100%",
        right: "100%"
    }
      , F = function(e, t) {
        var i = e.left
          , n = e.top;
        return "auto" === i && (i = D[t.left]),
        "auto" === n && (n = O[t.top]),
        {
            left: i,
            top: n
        }
    }
      , N = function(e) {
        var t = e.left
          , i = e.top;
        return "undefined" != typeof L[e.left] && (t = L[e.left]),
        "undefined" != typeof L[e.top] && (i = L[e.top]),
        {
            left: t,
            top: i
        }
    }
      , W = function(e) {
        var t = e.split(" ")
          , i = k(t, 2)
          , n = i[0]
          , r = i[1];
        return {
            top: n,
            left: r
        }
    }
      , H = W
      , j = function() {
        function e(t) {
            var i = this;
            r(this, e),
            this.position = this.position.bind(this),
            _.push(this),
            this.history = [],
            this.setOptions(t, !1),
            a.modules.forEach(function(e) {
                "undefined" != typeof e.initialize && e.initialize.call(i)
            }),
            this.position()
        }
        return n(e, [{
            key: "getClass",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0]
                  , t = this.options.classes;
                return "undefined" != typeof t && t[e] ? this.options.classes[e] : this.options.classPrefix ? this.options.classPrefix + "-" + e : e
            }
        }, {
            key: "setOptions",
            value: function(e) {
                var t = this
                  , i = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1]
                  , n = {
                    offset: "0 0",
                    targetOffset: "0 0",
                    targetAttachment: "auto auto",
                    classPrefix: "tether"
                };
                this.options = d(n, e);
                var r = this.options
                  , a = r.element
                  , s = r.target
                  , l = r.targetModifier;
                if (this.element = a,
                this.target = s,
                this.targetModifier = l,
                "viewport" === this.target ? (this.target = document.body,
                this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body,
                this.targetModifier = "scroll-handle"),
                ["element", "target"].forEach(function(e) {
                    if ("undefined" == typeof t[e])
                        throw new Error("Tether Error: Both element and target must be defined");
                    "undefined" != typeof t[e].jquery ? t[e] = t[e][0] : "string" == typeof t[e] && (t[e] = document.querySelector(t[e]))
                }),
                g(this.element, this.getClass("element")),
                this.options.addTargetClasses !== !1 && g(this.target, this.getClass("target")),
                !this.options.attachment)
                    throw new Error("Tether Error: You must provide an attachment");
                this.targetAttachment = H(this.options.targetAttachment),
                this.attachment = H(this.options.attachment),
                this.offset = W(this.options.offset),
                this.targetOffset = W(this.options.targetOffset),
                "undefined" != typeof this.scrollParent && this.disable(),
                "scroll-handle" === this.targetModifier ? this.scrollParent = this.target : this.scrollParent = o(this.target),
                this.options.enabled !== !1 && this.enable(i)
            }
        }, {
            key: "getTargetBounds",
            value: function() {
                if ("undefined" == typeof this.targetModifier)
                    return c(this.target);
                if ("visible" === this.targetModifier) {
                    if (this.target === document.body)
                        return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                    var e = c(this.target)
                      , t = {
                        height: e.height,
                        width: e.width,
                        top: e.top,
                        left: e.left
                    };
                    return t.height = Math.min(t.height, e.height - (pageYOffset - e.top)),
                    t.height = Math.min(t.height, e.height - (e.top + e.height - (pageYOffset + innerHeight))),
                    t.height = Math.min(innerHeight, t.height),
                    t.height -= 2,
                    t.width = Math.min(t.width, e.width - (pageXOffset - e.left)),
                    t.width = Math.min(t.width, e.width - (e.left + e.width - (pageXOffset + innerWidth))),
                    t.width = Math.min(innerWidth, t.width),
                    t.width -= 2,
                    t.top < pageYOffset && (t.top = pageYOffset),
                    t.left < pageXOffset && (t.left = pageXOffset),
                    t
                }
                if ("scroll-handle" === this.targetModifier) {
                    var e = void 0
                      , i = this.target;
                    i === document.body ? (i = document.documentElement,
                    e = {
                        left: pageXOffset,
                        top: pageYOffset,
                        height: innerHeight,
                        width: innerWidth
                    }) : e = c(i);
                    var n = getComputedStyle(i)
                      , r = i.scrollWidth > i.clientWidth || [n.overflow, n.overflowX].indexOf("scroll") >= 0 || this.target !== document.body
                      , a = 0;
                    r && (a = 15);
                    var o = e.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - a
                      , t = {
                        width: 15,
                        height: .975 * o * (o / i.scrollHeight),
                        left: e.left + e.width - parseFloat(n.borderLeftWidth) - 15
                    }
                      , s = 0;
                    408 > o && this.target === document.body && (s = -11e-5 * Math.pow(o, 2) - .00727 * o + 22.58),
                    this.target !== document.body && (t.height = Math.max(t.height, 24));
                    var l = this.target.scrollTop / (i.scrollHeight - o);
                    return t.top = l * (o - t.height - s) + e.top + parseFloat(n.borderTopWidth),
                    this.target === document.body && (t.height = Math.max(t.height, 24)),
                    t
                }
            }
        }, {
            key: "clearCache",
            value: function() {
                this._cache = {}
            }
        }, {
            key: "cache",
            value: function(e, t) {
                return "undefined" == typeof this._cache && (this._cache = {}),
                "undefined" == typeof this._cache[e] && (this._cache[e] = t.call(this)),
                this._cache[e]
            }
        }, {
            key: "enable",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                this.options.addTargetClasses !== !1 && g(this.target, this.getClass("enabled")),
                g(this.element, this.getClass("enabled")),
                this.enabled = !0,
                this.scrollParent !== document && this.scrollParent.addEventListener("scroll", this.position),
                e && this.position()
            }
        }, {
            key: "disable",
            value: function() {
                p(this.target, this.getClass("enabled")),
                p(this.element, this.getClass("enabled")),
                this.enabled = !1,
                "undefined" != typeof this.scrollParent && this.scrollParent.removeEventListener("scroll", this.position)
            }
        }, {
            key: "destroy",
            value: function() {
                var e = this;
                this.disable(),
                _.forEach(function(t, i) {
                    return t === e ? void _.splice(i, 1) : void 0
                })
            }
        }, {
            key: "updateAttachClasses",
            value: function(e, t) {
                var i = this;
                e = e || this.attachment,
                t = t || this.targetAttachment;
                var n = ["left", "top", "bottom", "right", "middle", "center"];
                "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length),
                "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                var r = this._addAttachClasses;
                e.top && r.push(this.getClass("element-attached") + "-" + e.top),
                e.left && r.push(this.getClass("element-attached") + "-" + e.left),
                t.top && r.push(this.getClass("target-attached") + "-" + t.top),
                t.left && r.push(this.getClass("target-attached") + "-" + t.left);
                var a = [];
                n.forEach(function(e) {
                    a.push(i.getClass("element-attached") + "-" + e),
                    a.push(i.getClass("target-attached") + "-" + e)
                }),
                x(function() {
                    "undefined" != typeof i._addAttachClasses && (b(i.element, i._addAttachClasses, a),
                    i.options.addTargetClasses !== !1 && b(i.target, i._addAttachClasses, a),
                    delete i._addAttachClasses)
                })
            }
        }, {
            key: "position",
            value: function() {
                var e = this
                  , t = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                if (this.enabled) {
                    this.clearCache();
                    var i = F(this.targetAttachment, this.attachment);
                    this.updateAttachClasses(this.attachment, i);
                    var n = this.cache("element-bounds", function() {
                        return c(e.element)
                    })
                      , r = n.width
                      , o = n.height;
                    if (0 === r && 0 === o && "undefined" != typeof this.lastSize) {
                        var s = this.lastSize;
                        r = s.width,
                        o = s.height
                    } else
                        this.lastSize = {
                            width: r,
                            height: o
                        };
                    var l = this.cache("target-bounds", function() {
                        return e.getTargetBounds()
                    })
                      , u = l
                      , d = R(N(this.attachment), {
                        width: r,
                        height: o
                    })
                      , p = R(N(i), u)
                      , g = R(this.offset, {
                        width: r,
                        height: o
                    })
                      , m = R(this.targetOffset, u);
                    d = M(d, g),
                    p = M(p, m);
                    for (var v = l.left + p.left - d.left, y = l.top + p.top - d.top, b = 0; b < a.modules.length; ++b) {
                        var w = a.modules[b]
                          , x = w.position.call(this, {
                            left: v,
                            top: y,
                            targetAttachment: i,
                            targetPos: l,
                            elementPos: n,
                            offset: d,
                            targetOffset: p,
                            manualOffset: g,
                            manualTargetOffset: m,
                            scrollbarSize: k,
                            attachment: this.attachment
                        });
                        if (x === !1)
                            return !1;
                        "undefined" != typeof x && "object" == typeof x && (y = x.top,
                        v = x.left)
                    }
                    var T = {
                        page: {
                            top: y,
                            left: v
                        },
                        viewport: {
                            top: y - pageYOffset,
                            bottom: pageYOffset - y - o + innerHeight,
                            left: v - pageXOffset,
                            right: pageXOffset - v - r + innerWidth
                        }
                    }
                      , k = void 0;
                    return document.body.scrollWidth > window.innerWidth && (k = this.cache("scrollbar-size", h),
                    T.viewport.bottom -= k.height),
                    document.body.scrollHeight > window.innerHeight && (k = this.cache("scrollbar-size", h),
                    T.viewport.right -= k.width),
                    (-1 === ["", "static"].indexOf(document.body.style.position) || -1 === ["", "static"].indexOf(document.body.parentElement.style.position)) && (T.page.bottom = document.body.scrollHeight - y - o,
                    T.page.right = document.body.scrollWidth - v - r),
                    "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && !function() {
                        var t = e.cache("target-offsetparent", function() {
                            return f(e.target)
                        })
                          , i = e.cache("target-offsetparent-bounds", function() {
                            return c(t)
                        })
                          , n = getComputedStyle(t)
                          , r = i
                          , a = {};
                        if (["Top", "Left", "Bottom", "Right"].forEach(function(e) {
                            a[e.toLowerCase()] = parseFloat(n["border" + e + "Width"])
                        }),
                        i.right = document.body.scrollWidth - i.left - r.width + a.right,
                        i.bottom = document.body.scrollHeight - i.top - r.height + a.bottom,
                        T.page.top >= i.top + a.top && T.page.bottom >= i.bottom && T.page.left >= i.left + a.left && T.page.right >= i.right) {
                            var o = t.scrollTop
                              , s = t.scrollLeft;
                            T.offset = {
                                top: T.page.top - i.top + o - a.top,
                                left: T.page.left - i.left + s - a.left
                            }
                        }
                    }(),
                    this.move(T),
                    this.history.unshift(T),
                    this.history.length > 3 && this.history.pop(),
                    t && C(),
                    !0
                }
            }
        }, {
            key: "move",
            value: function(e) {
                var t = this;
                if ("undefined" != typeof this.element.parentNode) {
                    var i = {};
                    for (var n in e) {
                        i[n] = {};
                        for (var r in e[n]) {
                            for (var a = !1, o = 0; o < this.history.length; ++o) {
                                var s = this.history[o];
                                if ("undefined" != typeof s[n] && !E(s[n][r], e[n][r])) {
                                    a = !0;
                                    break
                                }
                            }
                            a || (i[n][r] = !0)
                        }
                    }
                    var l = {
                        top: "",
                        left: "",
                        right: "",
                        bottom: ""
                    }
                      , u = function(e, i) {
                        var n = "undefined" != typeof t.options.optimizations
                          , r = n ? t.options.optimizations.gpu : null ;
                        if (r !== !1) {
                            var a = void 0
                              , o = void 0;
                            e.top ? (l.top = 0,
                            a = i.top) : (l.bottom = 0,
                            a = -i.bottom),
                            e.left ? (l.left = 0,
                            o = i.left) : (l.right = 0,
                            o = -i.right),
                            l[A] = "translateX(" + Math.round(o) + "px) translateY(" + Math.round(a) + "px)",
                            "msTransform" !== A && (l[A] += " translateZ(0)")
                        } else
                            e.top ? l.top = i.top + "px" : l.bottom = i.bottom + "px",
                            e.left ? l.left = i.left + "px" : l.right = i.right + "px"
                    }
                      , c = !1;
                    if ((i.page.top || i.page.bottom) && (i.page.left || i.page.right) ? (l.position = "absolute",
                    u(i.page, e.page)) : (i.viewport.top || i.viewport.bottom) && (i.viewport.left || i.viewport.right) ? (l.position = "fixed",
                    u(i.viewport, e.viewport)) : "undefined" != typeof i.offset && i.offset.top && i.offset.left ? !function() {
                        l.position = "absolute";
                        var n = t.cache("target-offsetparent", function() {
                            return f(t.target)
                        });
                        f(t.element) !== n && x(function() {
                            t.element.parentNode.removeChild(t.element),
                            n.appendChild(t.element)
                        }),
                        u(i.offset, e.offset),
                        c = !0
                    }() : (l.position = "absolute",
                    u({
                        top: !0,
                        left: !0
                    }, e.page)),
                    !c) {
                        for (var h = !0, p = this.element.parentNode; p && "BODY" !== p.tagName; ) {
                            if ("static" !== getComputedStyle(p).position) {
                                h = !1;
                                break
                            }
                            p = p.parentNode
                        }
                        h || (this.element.parentNode.removeChild(this.element),
                        document.body.appendChild(this.element))
                    }
                    var g = {}
                      , m = !1;
                    for (var r in l) {
                        var v = l[r]
                          , y = this.element.style[r];
                        "" !== y && "" !== v && ["top", "left", "bottom", "right"].indexOf(r) >= 0 && (y = parseFloat(y),
                        v = parseFloat(v)),
                        y !== v && (m = !0,
                        g[r] = v)
                    }
                    m && x(function() {
                        d(t.element.style, g)
                    })
                }
            }
        }]),
        e
    }();
    j.modules = [],
    a.position = I;
    var z = d(j, a)
      , k = function() {
        function e(e, t) {
            var i = []
              , n = !0
              , r = !1
              , a = void 0;
            try {
                for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value),
                !t || i.length !== t); n = !0)
                    ;
            } catch (l) {
                r = !0,
                a = l
            } finally {
                try {
                    !n && o["return"] && o["return"]()
                } finally {
                    if (r)
                        throw a
                }
            }
            return i
        }
        return function(t, i) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }()
      , S = a.Utils
      , c = S.getBounds
      , d = S.extend
      , b = S.updateClasses
      , x = S.defer
      , V = ["left", "top", "right", "bottom"];
    a.modules.push({
        position: function(e) {
            var t = this
              , i = e.top
              , n = e.left
              , r = e.targetAttachment;
            if (!this.options.constraints)
                return !0;
            var a = this.cache("element-bounds", function() {
                return c(t.element)
            })
              , o = a.height
              , s = a.width;
            if (0 === s && 0 === o && "undefined" != typeof this.lastSize) {
                var l = this.lastSize;
                s = l.width,
                o = l.height
            }
            var u = this.cache("target-bounds", function() {
                return t.getTargetBounds()
            })
              , f = u.height
              , h = u.width
              , p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach(function(e) {
                var t = e.outOfBoundsClass
                  , i = e.pinnedClass;
                t && p.push(t),
                i && p.push(i)
            }),
            p.forEach(function(e) {
                ["left", "top", "right", "bottom"].forEach(function(t) {
                    p.push(e + "-" + t)
                })
            });
            var g = []
              , m = d({}, r)
              , v = d({}, this.attachment);
            return this.options.constraints.forEach(function(e) {
                var a = e.to
                  , l = e.attachment
                  , u = e.pin;
                "undefined" == typeof l && (l = "");
                var c = void 0
                  , d = void 0;
                if (l.indexOf(" ") >= 0) {
                    var p = l.split(" ")
                      , y = k(p, 2);
                    d = y[0],
                    c = y[1]
                } else
                    c = d = l;
                var b = B(t, a);
                ("target" === d || "both" === d) && (i < b[1] && "top" === m.top && (i += f,
                m.top = "bottom"),
                i + o > b[3] && "bottom" === m.top && (i -= f,
                m.top = "top")),
                "together" === d && (i < b[1] && "top" === m.top && ("bottom" === v.top ? (i += f,
                m.top = "bottom",
                i += o,
                v.top = "top") : "top" === v.top && (i += f,
                m.top = "bottom",
                i -= o,
                v.top = "bottom")),
                i + o > b[3] && "bottom" === m.top && ("top" === v.top ? (i -= f,
                m.top = "top",
                i -= o,
                v.top = "bottom") : "bottom" === v.top && (i -= f,
                m.top = "top",
                i += o,
                v.top = "top")),
                "middle" === m.top && (i + o > b[3] && "top" === v.top ? (i -= o,
                v.top = "bottom") : i < b[1] && "bottom" === v.top && (i += o,
                v.top = "top"))),
                ("target" === c || "both" === c) && (n < b[0] && "left" === m.left && (n += h,
                m.left = "right"),
                n + s > b[2] && "right" === m.left && (n -= h,
                m.left = "left")),
                "together" === c && (n < b[0] && "left" === m.left ? "right" === v.left ? (n += h,
                m.left = "right",
                n += s,
                v.left = "left") : "left" === v.left && (n += h,
                m.left = "right",
                n -= s,
                v.left = "right") : n + s > b[2] && "right" === m.left ? "left" === v.left ? (n -= h,
                m.left = "left",
                n -= s,
                v.left = "right") : "right" === v.left && (n -= h,
                m.left = "left",
                n += s,
                v.left = "left") : "center" === m.left && (n + s > b[2] && "left" === v.left ? (n -= s,
                v.left = "right") : n < b[0] && "right" === v.left && (n += s,
                v.left = "left"))),
                ("element" === d || "both" === d) && (i < b[1] && "bottom" === v.top && (i += o,
                v.top = "top"),
                i + o > b[3] && "top" === v.top && (i -= o,
                v.top = "bottom")),
                ("element" === c || "both" === c) && (n < b[0] && ("right" === v.left ? (n += s,
                v.left = "left") : "center" === v.left && (n += s / 2,
                v.left = "left")),
                n + s > b[2] && ("left" === v.left ? (n -= s,
                v.left = "right") : "center" === v.left && (n -= s / 2,
                v.left = "right"))),
                "string" == typeof u ? u = u.split(",").map(function(e) {
                    return e.trim()
                }) : u === !0 && (u = ["top", "left", "right", "bottom"]),
                u = u || [];
                var w = []
                  , x = [];
                i < b[1] && (u.indexOf("top") >= 0 ? (i = b[1],
                w.push("top")) : x.push("top")),
                i + o > b[3] && (u.indexOf("bottom") >= 0 ? (i = b[3] - o,
                w.push("bottom")) : x.push("bottom")),
                n < b[0] && (u.indexOf("left") >= 0 ? (n = b[0],
                w.push("left")) : x.push("left")),
                n + s > b[2] && (u.indexOf("right") >= 0 ? (n = b[2] - s,
                w.push("right")) : x.push("right")),
                w.length && !function() {
                    var e = void 0;
                    e = "undefined" != typeof t.options.pinnedClass ? t.options.pinnedClass : t.getClass("pinned"),
                    g.push(e),
                    w.forEach(function(t) {
                        g.push(e + "-" + t)
                    })
                }(),
                x.length && !function() {
                    var e = void 0;
                    e = "undefined" != typeof t.options.outOfBoundsClass ? t.options.outOfBoundsClass : t.getClass("out-of-bounds"),
                    g.push(e),
                    x.forEach(function(t) {
                        g.push(e + "-" + t)
                    })
                }(),
                (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (v.left = m.left = !1),
                (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (v.top = m.top = !1),
                (m.top !== r.top || m.left !== r.left || v.top !== t.attachment.top || v.left !== t.attachment.left) && t.updateAttachClasses(v, m)
            }),
            x(function() {
                t.options.addTargetClasses !== !1 && b(t.target, g, p),
                b(t.element, g, p)
            }),
            {
                top: i,
                left: n
            }
        }
    });
    var S = a.Utils
      , c = S.getBounds
      , b = S.updateClasses
      , x = S.defer;
    a.modules.push({
        position: function(e) {
            var t = this
              , i = e.top
              , n = e.left
              , r = this.cache("element-bounds", function() {
                return c(t.element)
            })
              , a = r.height
              , o = r.width
              , s = this.getTargetBounds()
              , l = i + a
              , u = n + o
              , f = [];
            i <= s.bottom && l >= s.top && ["left", "right"].forEach(function(e) {
                var t = s[e];
                (t === n || t === u) && f.push(e)
            }),
            n <= s.right && u >= s.left && ["top", "bottom"].forEach(function(e) {
                var t = s[e];
                (t === i || t === l) && f.push(e)
            });
            var h = []
              , d = []
              , p = ["left", "top", "right", "bottom"];
            return h.push(this.getClass("abutted")),
            p.forEach(function(e) {
                h.push(t.getClass("abutted") + "-" + e)
            }),
            f.length && d.push(this.getClass("abutted")),
            f.forEach(function(e) {
                d.push(t.getClass("abutted") + "-" + e)
            }),
            x(function() {
                t.options.addTargetClasses !== !1 && b(t.target, d, h),
                b(t.element, d, h)
            }),
            !0
        }
    });
    var k = function() {
        function e(e, t) {
            var i = []
              , n = !0
              , r = !1
              , a = void 0;
            try {
                for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value),
                !t || i.length !== t); n = !0)
                    ;
            } catch (l) {
                r = !0,
                a = l
            } finally {
                try {
                    !n && o["return"] && o["return"]()
                } finally {
                    if (r)
                        throw a
                }
            }
            return i
        }
        return function(t, i) {
            if (Array.isArray(t))
                return t;
            if (Symbol.iterator in Object(t))
                return e(t, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    return a.modules.push({
        position: function(e) {
            var t = e.top
              , i = e.left;
            if (this.options.shift) {
                var n = this.options.shift;
                "function" == typeof this.options.shift && (n = this.options.shift.call(this, {
                    top: t,
                    left: i
                }));
                var r = void 0
                  , a = void 0;
                if ("string" == typeof n) {
                    n = n.split(" "),
                    n[1] = n[1] || n[0];
                    var o = n
                      , s = k(o, 2);
                    r = s[0],
                    a = s[1],
                    r = parseFloat(r, 10),
                    a = parseFloat(a, 10)
                } else
                    r = n.top,
                    a = n.left;
                return t += r,
                i += a,
                {
                    top: t,
                    left: i
                }
            }
        }
    }),
    z
}),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
+function(e) {
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] >= 4)
        throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery),
+function(e) {
    "use strict";
    function n(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    var t = function(e, t, i) {
        for (var n = !0; n; ) {
            var r = e
              , a = t
              , o = i;
            n = !1,
            null === r && (r = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(r, a);
            if (void 0 !== s) {
                if ("value"in s)
                    return s.value;
                var u = s.get;
                return void 0 === u ? void 0 : u.call(o)
            }
            var l = Object.getPrototypeOf(r);
            if (null === l)
                return void 0;
            e = l,
            t = a,
            i = o,
            n = !0,
            s = l = void 0
        }
    }
      , i = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    }()
      , a = function(e) {
        function r(e) {
            return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }
        function a(e) {
            return (e[0] || e).nodeType
        }
        function o() {
            return {
                bindType: t.end,
                delegateType: t.end,
                handle: function(t) {
                    return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                }
            }
        }
        function s() {
            if (window.QUnit)
                return !1;
            var e = document.createElement("bootstrap");
            for (var t in n)
                if (void 0 !== e.style[t])
                    return {
                        end: n[t]
                    };
            return !1
        }
        function l(t) {
            var i = this
              , n = !1;
            return e(this).one(c.TRANSITION_END, function() {
                n = !0
            }),
            setTimeout(function() {
                n || c.triggerTransitionEnd(i)
            }, t),
            this
        }
        function u() {
            t = s(),
            e.fn.emulateTransitionEnd = l,
            c.supportsTransitionEnd() && (e.event.special[c.TRANSITION_END] = o())
        }
        var t = !1
          , i = 1e6
          , n = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }
          , c = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(e) {
                do
                    e += ~~(Math.random() * i);
                while (document.getElementById(e));return e
            },
            getSelectorFromElement: function(e) {
                var t = e.getAttribute("data-target");
                return t || (t = e.getAttribute("href") || "",
                t = /^#[a-z]/i.test(t) ? t : null ),
                t
            },
            reflow: function(e) {
                new Function("bs","return bs")(e.offsetHeight)
            },
            triggerTransitionEnd: function(i) {
                e(i).trigger(t.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(t)
            },
            typeCheckConfig: function(e, t, i) {
                for (var n in i)
                    if (i.hasOwnProperty(n)) {
                        var o = i[n]
                          , s = t[n]
                          , l = void 0;
                        if (l = s && a(s) ? "element" : r(s),
                        !new RegExp(o).test(l))
                            throw new Error(e.toUpperCase() + ": " + ('Option "' + n + '" provided type "' + l + '" ') + ('but expected type "' + o + '".'))
                    }
            }
        };
        return u(),
        c
    }(jQuery)
      , p = (function(e) {
        var t = "alert"
          , n = "4.0.0-alpha.3"
          , o = "bs.alert"
          , s = "." + o
          , l = ".data-api"
          , u = e.fn[t]
          , c = 150
          , f = {
            DISMISS: '[data-dismiss="alert"]'
        }
          , h = {
            CLOSE: "close" + s,
            CLOSED: "closed" + s,
            CLICK_DATA_API: "click" + s + l
        }
          , d = {
            ALERT: "alert",
            FADE: "fade",
            IN: "in"
        }
          , p = function() {
            function t(e) {
                r(this, t),
                this._element = e
            }
            return i(t, [{
                key: "close",
                value: function(e) {
                    e = e || this._element;
                    var t = this._getRootElement(e)
                      , i = this._triggerCloseEvent(t);
                    i.isDefaultPrevented() || this._removeElement(t)
                }
            }, {
                key: "dispose",
                value: function() {
                    e.removeData(this._element, o),
                    this._element = null
                }
            }, {
                key: "_getRootElement",
                value: function(t) {
                    var i = a.getSelectorFromElement(t)
                      , n = !1;
                    return i && (n = e(i)[0]),
                    n || (n = e(t).closest("." + d.ALERT)[0]),
                    n
                }
            }, {
                key: "_triggerCloseEvent",
                value: function(t) {
                    var i = e.Event(h.CLOSE);
                    return e(t).trigger(i),
                    i
                }
            }, {
                key: "_removeElement",
                value: function(t) {
                    return e(t).removeClass(d.IN),
                    a.supportsTransitionEnd() && e(t).hasClass(d.FADE) ? void e(t).one(a.TRANSITION_END, e.proxy(this._destroyElement, this, t)).emulateTransitionEnd(c) : void this._destroyElement(t)
                }
            }, {
                key: "_destroyElement",
                value: function(t) {
                    e(t).detach().trigger(h.CLOSED).remove()
                }
            }], [{
                key: "_jQueryInterface",
                value: function(i) {
                    return this.each(function() {
                        var n = e(this)
                          , r = n.data(o);
                        r || (r = new t(this),
                        n.data(o, r)),
                        "close" === i && r[i](this)
                    })
                }
            }, {
                key: "_handleDismiss",
                value: function(e) {
                    return function(t) {
                        t && t.preventDefault(),
                        e.close(this)
                    }
                }
            }, {
                key: "VERSION",
                get: function() {
                    return n
                }
            }]),
            t
        }();
        return e(document).on(h.CLICK_DATA_API, f.DISMISS, p._handleDismiss(new p)),
        e.fn[t] = p._jQueryInterface,
        e.fn[t].Constructor = p,
        e.fn[t].noConflict = function() {
            return e.fn[t] = u,
            p._jQueryInterface
        }
        ,
        p
    }(jQuery),
    function(e) {
        var t = "button"
          , n = "4.0.0-alpha.3"
          , a = "bs.button"
          , o = "." + a
          , s = ".data-api"
          , l = e.fn[t]
          , u = {
            ACTIVE: "active",
            BUTTON: "btn",
            FOCUS: "focus"
        }
          , c = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: "input",
            ACTIVE: ".active",
            BUTTON: ".btn"
        }
          , f = {
            CLICK_DATA_API: "click" + o + s,
            FOCUS_BLUR_DATA_API: "focus" + o + s + " " + ("blur" + o + s)
        }
          , h = function() {
            function t(e) {
                r(this, t),
                this._element = e
            }
            return i(t, [{
                key: "toggle",
                value: function() {
                    var t = !0
                      , i = e(this._element).closest(c.DATA_TOGGLE)[0];
                    if (i) {
                        var n = e(this._element).find(c.INPUT)[0];
                        if (n) {
                            if ("radio" === n.type)
                                if (n.checked && e(this._element).hasClass(u.ACTIVE))
                                    t = !1;
                                else {
                                    var r = e(i).find(c.ACTIVE)[0];
                                    r && e(r).removeClass(u.ACTIVE)
                                }
                            t && (n.checked = !e(this._element).hasClass(u.ACTIVE),
                            e(this._element).trigger("change")),
                            n.focus()
                        }
                    } else
                        this._element.setAttribute("aria-pressed", !e(this._element).hasClass(u.ACTIVE));
                    t && e(this._element).toggleClass(u.ACTIVE)
                }
            }, {
                key: "dispose",
                value: function() {
                    e.removeData(this._element, a),
                    this._element = null
                }
            }], [{
                key: "_jQueryInterface",
                value: function(i) {
                    return this.each(function() {
                        var n = e(this).data(a);
                        n || (n = new t(this),
                        e(this).data(a, n)),
                        "toggle" === i && n[i]()
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return n
                }
            }]),
            t
        }();
        return e(document).on(f.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(t) {
            t.preventDefault();
            var i = t.target;
            e(i).hasClass(u.BUTTON) || (i = e(i).closest(c.BUTTON)),
            h._jQueryInterface.call(e(i), "toggle")
        }).on(f.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(t) {
            var i = e(t.target).closest(c.BUTTON)[0];
            e(i).toggleClass(u.FOCUS, /^focus(in)?$/.test(t.type))
        }),
        e.fn[t] = h._jQueryInterface,
        e.fn[t].Constructor = h,
        e.fn[t].noConflict = function() {
            return e.fn[t] = l,
            h._jQueryInterface
        }
        ,
        h
    }(jQuery),
    function(e) {
        var t = "carousel"
          , n = "4.0.0-alpha.3"
          , o = "bs.carousel"
          , s = "." + o
          , l = ".data-api"
          , u = e.fn[t]
          , c = 600
          , f = 37
          , h = 39
          , d = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }
          , p = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }
          , g = {
            NEXT: "next",
            PREVIOUS: "prev"
        }
          , m = {
            SLIDE: "slide" + s,
            SLID: "slid" + s,
            KEYDOWN: "keydown" + s,
            MOUSEENTER: "mouseenter" + s,
            MOUSELEAVE: "mouseleave" + s,
            LOAD_DATA_API: "load" + s + l,
            CLICK_DATA_API: "click" + s + l
        }
          , v = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "right",
            LEFT: "left",
            ITEM: "carousel-item"
        }
          , y = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".next, .prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }
          , b = function() {
            function l(t, i) {
                r(this, l),
                this._items = null ,
                this._interval = null ,
                this._activeElement = null ,
                this._isPaused = !1,
                this._isSliding = !1,
                this._config = this._getConfig(i),
                this._element = e(t)[0],
                this._indicatorsElement = e(this._element).find(y.INDICATORS)[0],
                this._addEventListeners()
            }
            return i(l, [{
                key: "next",
                value: function() {
                    this._isSliding || this._slide(g.NEXT)
                }
            }, {
                key: "nextWhenVisible",
                value: function() {
                    document.hidden || this.next()
                }
            }, {
                key: "prev",
                value: function() {
                    this._isSliding || this._slide(g.PREVIOUS)
                }
            }, {
                key: "pause",
                value: function(t) {
                    t || (this._isPaused = !0),
                    e(this._element).find(y.NEXT_PREV)[0] && a.supportsTransitionEnd() && (a.triggerTransitionEnd(this._element),
                    this.cycle(!0)),
                    clearInterval(this._interval),
                    this._interval = null
                }
            }, {
                key: "cycle",
                value: function(t) {
                    t || (this._isPaused = !1),
                    this._interval && (clearInterval(this._interval),
                    this._interval = null ),
                    this._config.interval && !this._isPaused && (this._interval = setInterval(e.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                }
            }, {
                key: "to",
                value: function(t) {
                    var i = this;
                    this._activeElement = e(this._element).find(y.ACTIVE_ITEM)[0];
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || 0 > t)) {
                        if (this._isSliding)
                            return void e(this._element).one(m.SLID, function() {
                                return i.to(t)
                            });
                        if (n === t)
                            return this.pause(),
                            void this.cycle();
                        var r = t > n ? g.NEXT : g.PREVIOUS;
                        this._slide(r, this._items[t])
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    e(this._element).off(s),
                    e.removeData(this._element, o),
                    this._items = null ,
                    this._config = null ,
                    this._element = null ,
                    this._interval = null ,
                    this._isPaused = null ,
                    this._isSliding = null ,
                    this._activeElement = null ,
                    this._indicatorsElement = null
                }
            }, {
                key: "_getConfig",
                value: function(i) {
                    return i = e.extend({}, d, i),
                    a.typeCheckConfig(t, i, p),
                    i
                }
            }, {
                key: "_addEventListeners",
                value: function() {
                    this._config.keyboard && e(this._element).on(m.KEYDOWN, e.proxy(this._keydown, this)),
                    "hover" !== this._config.pause || "ontouchstart"in document.documentElement || e(this._element).on(m.MOUSEENTER, e.proxy(this.pause, this)).on(m.MOUSELEAVE, e.proxy(this.cycle, this))
                }
            }, {
                key: "_keydown",
                value: function(e) {
                    if (e.preventDefault(),
                    !/input|textarea/i.test(e.target.tagName))
                        switch (e.which) {
                        case f:
                            this.prev();
                            break;
                        case h:
                            this.next();
                            break;
                        default:
                            return
                        }
                }
            }, {
                key: "_getItemIndex",
                value: function(t) {
                    return this._items = e.makeArray(e(t).parent().find(y.ITEM)),
                    this._items.indexOf(t)
                }
            }, {
                key: "_getItemByDirection",
                value: function(e, t) {
                    var i = e === g.NEXT
                      , n = e === g.PREVIOUS
                      , r = this._getItemIndex(t)
                      , a = this._items.length - 1
                      , o = n && 0 === r || i && r === a;
                    if (o && !this._config.wrap)
                        return t;
                    var s = e === g.PREVIOUS ? -1 : 1
                      , l = (r + s) % this._items.length;
                    return -1 === l ? this._items[this._items.length - 1] : this._items[l]
                }
            }, {
                key: "_triggerSlideEvent",
                value: function(t, i) {
                    var n = e.Event(m.SLIDE, {
                        relatedTarget: t,
                        direction: i
                    });
                    return e(this._element).trigger(n),
                    n
                }
            }, {
                key: "_setActiveIndicatorElement",
                value: function(t) {
                    if (this._indicatorsElement) {
                        e(this._indicatorsElement).find(y.ACTIVE).removeClass(v.ACTIVE);
                        var i = this._indicatorsElement.children[this._getItemIndex(t)];
                        i && e(i).addClass(v.ACTIVE)
                    }
                }
            }, {
                key: "_slide",
                value: function(t, i) {
                    var n = this
                      , r = e(this._element).find(y.ACTIVE_ITEM)[0]
                      , o = i || r && this._getItemByDirection(t, r)
                      , s = Boolean(this._interval)
                      , l = t === g.NEXT ? v.LEFT : v.RIGHT;
                    if (o && e(o).hasClass(v.ACTIVE))
                        return void (this._isSliding = !1);
                    var u = this._triggerSlideEvent(o, l);
                    if (!u.isDefaultPrevented() && r && o) {
                        this._isSliding = !0,
                        s && this.pause(),
                        this._setActiveIndicatorElement(o);
                        var f = e.Event(m.SLID, {
                            relatedTarget: o,
                            direction: l
                        });
                        a.supportsTransitionEnd() && e(this._element).hasClass(v.SLIDE) ? (e(o).addClass(t),
                        a.reflow(o),
                        e(r).addClass(l),
                        e(o).addClass(l),
                        e(r).one(a.TRANSITION_END, function() {
                            e(o).removeClass(l).removeClass(t),
                            e(o).addClass(v.ACTIVE),
                            e(r).removeClass(v.ACTIVE).removeClass(t).removeClass(l),
                            n._isSliding = !1,
                            setTimeout(function() {
                                return e(n._element).trigger(f)
                            }, 0)
                        }).emulateTransitionEnd(c)) : (e(r).removeClass(v.ACTIVE),
                        e(o).addClass(v.ACTIVE),
                        this._isSliding = !1,
                        e(this._element).trigger(f)),
                        s && this.cycle()
                    }
                }
            }], [{
                key: "_jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var i = e(this).data(o)
                          , n = e.extend({}, d, e(this).data());
                        "object" == typeof t && e.extend(n, t);
                        var r = "string" == typeof t ? t : n.slide;
                        if (i || (i = new l(this,n),
                        e(this).data(o, i)),
                        "number" == typeof t)
                            i.to(t);
                        else if ("string" == typeof r) {
                            if (void 0 === i[r])
                                throw new Error('No method named "' + r + '"');
                            i[r]()
                        } else
                            n.interval && (i.pause(),
                            i.cycle())
                    })
                }
            }, {
                key: "_dataApiClickHandler",
                value: function(t) {
                    var i = a.getSelectorFromElement(this);
                    if (i) {
                        var n = e(i)[0];
                        if (n && e(n).hasClass(v.CAROUSEL)) {
                            var r = e.extend({}, e(n).data(), e(this).data())
                              , s = this.getAttribute("data-slide-to");
                            s && (r.interval = !1),
                            l._jQueryInterface.call(e(n), r),
                            s && e(n).data(o).to(s),
                            t.preventDefault()
                        }
                    }
                }
            }, {
                key: "VERSION",
                get: function() {
                    return n
                }
            }, {
                key: "Default",
                get: function() {
                    return d
                }
            }]),
            l
        }();
        return e(document).on(m.CLICK_DATA_API, y.DATA_SLIDE, b._dataApiClickHandler),
        e(window).on(m.LOAD_DATA_API, function() {
            e(y.DATA_RIDE).each(function() {
                var t = e(this);
                b._jQueryInterface.call(t, t.data())
            })
        }),
        e.fn[t] = b._jQueryInterface,
        e.fn[t].Constructor = b,
        e.fn[t].noConflict = function() {
            return e.fn[t] = u,
            b._jQueryInterface
        }
        ,
        b
    }(jQuery),
    function(e) {
        var t = "collapse"
          , n = "4.0.0-alpha.3"
          , o = "bs.collapse"
          , s = "." + o
          , l = ".data-api"
          , u = e.fn[t]
          , c = 600
          , f = {
            toggle: !0,
            parent: ""
        }
          , h = {
            toggle: "boolean",
            parent: "string"
        }
          , d = {
            SHOW: "show" + s,
            SHOWN: "shown" + s,
            HIDE: "hide" + s,
            HIDDEN: "hidden" + s,
            CLICK_DATA_API: "click" + s + l
        }
          , p = {
            IN: "in",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
        }
          , g = {
            WIDTH: "width",
            HEIGHT: "height"
        }
          , m = {
            ACTIVES: ".panel > .in, .panel > .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }
          , v = function() {
            function s(t, i) {
                r(this, s),
                this._isTransitioning = !1,
                this._element = t,
                this._config = this._getConfig(i),
                this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],' + ('[data-toggle="collapse"][data-target="#' + t.id + '"]'))),
                this._parent = this._config.parent ? this._getParent() : null ,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            return i(s, [{
                key: "toggle",
                value: function() {
                    e(this._element).hasClass(p.IN) ? this.hide() : this.show()
                }
            }, {
                key: "show",
                value: function() {
                    var t = this;
                    if (!this._isTransitioning && !e(this._element).hasClass(p.IN)) {
                        var i = void 0
                          , n = void 0;
                        if (this._parent && (i = e.makeArray(e(m.ACTIVES)),
                        i.length || (i = null )),
                        !(i && (n = e(i).data(o),
                        n && n._isTransitioning))) {
                            var r = e.Event(d.SHOW);
                            if (e(this._element).trigger(r),
                            !r.isDefaultPrevented()) {
                                i && (s._jQueryInterface.call(e(i), "hide"),
                                n || e(i).data(o, null ));
                                var l = this._getDimension();
                                e(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING),
                                this._element.style[l] = 0,
                                this._element.setAttribute("aria-expanded", !0),
                                this._triggerArray.length && e(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0),
                                this.setTransitioning(!0);
                                var u = function() {
                                    e(t._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.IN),
                                    t._element.style[l] = "",
                                    t.setTransitioning(!1),
                                    e(t._element).trigger(d.SHOWN)
                                }
                                ;
                                if (!a.supportsTransitionEnd())
                                    return void u();
                                var f = l[0].toUpperCase() + l.slice(1)
                                  , h = "scroll" + f;
                                e(this._element).one(a.TRANSITION_END, u).emulateTransitionEnd(c),
                                this._element.style[l] = this._element[h] + "px"
                            }
                        }
                    }
                }
            }, {
                key: "hide",
                value: function() {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass(p.IN)) {
                        var i = e.Event(d.HIDE);
                        if (e(this._element).trigger(i),
                        !i.isDefaultPrevented()) {
                            var n = this._getDimension()
                              , r = n === g.WIDTH ? "offsetWidth" : "offsetHeight";
                            this._element.style[n] = this._element[r] + "px",
                            a.reflow(this._element),
                            e(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.IN),
                            this._element.setAttribute("aria-expanded", !1),
                            this._triggerArray.length && e(this._triggerArray).addClass(p.COLLAPSED).attr("aria-expanded", !1),
                            this.setTransitioning(!0);
                            var o = function() {
                                t.setTransitioning(!1),
                                e(t._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(d.HIDDEN)
                            }
                            ;
                            return this._element.style[n] = 0,
                            a.supportsTransitionEnd() ? void e(this._element).one(a.TRANSITION_END, o).emulateTransitionEnd(c) : void o()
                        }
                    }
                }
            }, {
                key: "setTransitioning",
                value: function(e) {
                    this._isTransitioning = e
                }
            }, {
                key: "dispose",
                value: function() {
                    e.removeData(this._element, o),
                    this._config = null ,
                    this._parent = null ,
                    this._element = null ,
                    this._triggerArray = null ,
                    this._isTransitioning = null
                }
            }, {
                key: "_getConfig",
                value: function(i) {
                    return i = e.extend({}, f, i),
                    i.toggle = Boolean(i.toggle),
                    a.typeCheckConfig(t, i, h),
                    i
                }
            }, {
                key: "_getDimension",
                value: function() {
                    var t = e(this._element).hasClass(g.WIDTH);
                    return t ? g.WIDTH : g.HEIGHT
                }
            }, {
                key: "_getParent",
                value: function() {
                    var t = this
                      , i = e(this._config.parent)[0]
                      , n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return e(i).find(n).each(function(e, i) {
                        t._addAriaAndCollapsedClass(s._getTargetFromElement(i), [i])
                    }),
                    i
                }
            }, {
                key: "_addAriaAndCollapsedClass",
                value: function(t, i) {
                    if (t) {
                        var n = e(t).hasClass(p.IN);
                        t.setAttribute("aria-expanded", n),
                        i.length && e(i).toggleClass(p.COLLAPSED, !n).attr("aria-expanded", n)
                    }
                }
            }], [{
                key: "_getTargetFromElement",
                value: function(t) {
                    var i = a.getSelectorFromElement(t);
                    return i ? e(i)[0] : null
                }
            }, {
                key: "_jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var i = e(this)
                          , n = i.data(o)
                          , r = e.extend({}, f, i.data(), "object" == typeof t && t);
                        if (!n && r.toggle && /show|hide/.test(t) && (r.toggle = !1),
                        n || (n = new s(this,r),
                        i.data(o, n)),
                        "string" == typeof t) {
                            if (void 0 === n[t])
                                throw new Error('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return n
                }
            }, {
                key: "Default",
                get: function() {
                    return f
                }
            }]),
            s
        }();
        return e(document).on(d.CLICK_DATA_API, m.DATA_TOGGLE, function(t) {
            t.preventDefault();
            var i = v._getTargetFromElement(this)
              , n = e(i).data(o)
              , r = n ? "toggle" : e(this).data();
            v._jQueryInterface.call(e(i), r)
        }),
        e.fn[t] = v._jQueryInterface,
        e.fn[t].Constructor = v,
        e.fn[t].noConflict = function() {
            return e.fn[t] = u,
            v._jQueryInterface
        }
        ,
        v
    }(jQuery),
    function(e) {
        var t = "dropdown"
          , n = "4.0.0-alpha.3"
          , o = "bs.dropdown"
          , s = "." + o
          , l = ".data-api"
          , u = e.fn[t]
          , c = 27
          , f = 38
          , h = 40
          , d = 3
          , p = {
            HIDE: "hide" + s,
            HIDDEN: "hidden" + s,
            SHOW: "show" + s,
            SHOWN: "shown" + s,
            CLICK: "click" + s,
            CLICK_DATA_API: "click" + s + l,
            KEYDOWN_DATA_API: "keydown" + s + l
        }
          , g = {
            BACKDROP: "dropdown-backdrop",
            DISABLED: "disabled",
            OPEN: "open"
        }
          , m = {
            BACKDROP: ".dropdown-backdrop",
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            ROLE_MENU: '[role="menu"]',
            ROLE_LISTBOX: '[role="listbox"]',
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
        }
          , v = function() {
            function t(e) {
                r(this, t),
                this._element = e,
                this._addEventListeners()
            }
            return i(t, [{
                key: "toggle",
                value: function() {
                    if (this.disabled || e(this).hasClass(g.DISABLED))
                        return !1;
                    var i = t._getParentFromElement(this)
                      , n = e(i).hasClass(g.OPEN);
                    if (t._clearMenus(),
                    n)
                        return !1;
                    if ("ontouchstart"in document.documentElement && !e(i).closest(m.NAVBAR_NAV).length) {
                        var r = document.createElement("div");
                        r.className = g.BACKDROP,
                        e(r).insertBefore(this),
                        e(r).on("click", t._clearMenus)
                    }
                    var a = {
                        relatedTarget: this
                    }
                      , o = e.Event(p.SHOW, a);
                    return e(i).trigger(o),
                    o.isDefaultPrevented() ? !1 : (this.focus(),
                    this.setAttribute("aria-expanded", "true"),
                    e(i).toggleClass(g.OPEN),
                    e(i).trigger(e.Event(p.SHOWN, a)),
                    !1)
                }
            }, {
                key: "dispose",
                value: function() {
                    e.removeData(this._element, o),
                    e(this._element).off(s),
                    this._element = null
                }
            }, {
                key: "_addEventListeners",
                value: function() {
                    e(this._element).on(p.CLICK, this.toggle)
                }
            }], [{
                key: "_jQueryInterface",
                value: function(i) {
                    return this.each(function() {
                        var n = e(this).data(o);
                        if (n || e(this).data(o, n = new t(this)),
                        "string" == typeof i) {
                            if (void 0 === n[i])
                                throw new Error('No method named "' + i + '"');
                            n[i].call(this)
                        }
                    })
                }
            }, {
                key: "_clearMenus",
                value: function(i) {
                    if (!i || i.which !== d) {
                        var n = e(m.BACKDROP)[0];
                        n && n.parentNode.removeChild(n);
                        for (var r = e.makeArray(e(m.DATA_TOGGLE)), a = 0; a < r.length; a++) {
                            var o = t._getParentFromElement(r[a])
                              , s = {
                                relatedTarget: r[a]
                            };
                            if (e(o).hasClass(g.OPEN) && !(i && "click" === i.type && /input|textarea/i.test(i.target.tagName) && e.contains(o, i.target))) {
                                var l = e.Event(p.HIDE, s);
                                e(o).trigger(l),
                                l.isDefaultPrevented() || (r[a].setAttribute("aria-expanded", "false"),
                                e(o).removeClass(g.OPEN).trigger(e.Event(p.HIDDEN, s)))
                            }
                        }
                    }
                }
            }, {
                key: "_getParentFromElement",
                value: function(t) {
                    var i = void 0
                      , n = a.getSelectorFromElement(t);
                    return n && (i = e(n)[0]),
                    i || t.parentNode
                }
            }, {
                key: "_dataApiKeydownHandler",
                value: function(i) {
                    if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName) && (i.preventDefault(),
                    i.stopPropagation(),
                    !this.disabled && !e(this).hasClass(g.DISABLED))) {
                        var n = t._getParentFromElement(this)
                          , r = e(n).hasClass(g.OPEN);
                        if (!r && i.which !== c || r && i.which === c) {
                            if (i.which === c) {
                                var a = e(n).find(m.DATA_TOGGLE)[0];
                                e(a).trigger("focus")
                            }
                            return void e(this).trigger("click")
                        }
                        var o = e.makeArray(e(m.VISIBLE_ITEMS));
                        if (o = o.filter(function(e) {
                            return e.offsetWidth || e.offsetHeight
                        }),
                        o.length) {
                            var s = o.indexOf(i.target);
                            i.which === f && s > 0 && s--,
                            i.which === h && s < o.length - 1 && s++,
                            0 > s && (s = 0),
                            o[s].focus()
                        }
                    }
                }
            }, {
                key: "VERSION",
                get: function() {
                    return n
                }
            }]),
            t
        }();
        return e(document).on(p.KEYDOWN_DATA_API, m.DATA_TOGGLE, v._dataApiKeydownHandler).on(p.KEYDOWN_DATA_API, m.ROLE_MENU, v._dataApiKeydownHandler).on(p.KEYDOWN_DATA_API, m.ROLE_LISTBOX, v._dataApiKeydownHandler).on(p.CLICK_DATA_API, v._clearMenus).on(p.CLICK_DATA_API, m.DATA_TOGGLE, v.prototype.toggle).on(p.CLICK_DATA_API, m.FORM_CHILD, function(e) {
            e.stopPropagation()
        }),
        e.fn[t] = v._jQueryInterface,
        e.fn[t].Constructor = v,
        e.fn[t].noConflict = function() {
            return e.fn[t] = u,
            v._jQueryInterface
        }
        ,
        v
    }(jQuery),
    function(e) {
        var t = "modal"
          , n = "4.0.0-alpha.3"
          , o = "bs.modal"
          , s = "." + o
          , l = ".data-api"
          , u = e.fn[t]
          , c = 300
          , f = 150
          , h = 27
          , d = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
          , p = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
          , g = {
            HIDE: "hide" + s,
            HIDDEN: "hidden" + s,
            SHOW: "show" + s,
            SHOWN: "shown" + s,
            FOCUSIN: "focusin" + s,
            RESIZE: "resize" + s,
            CLICK_DISMISS: "click.dismiss" + s,
            KEYDOWN_DISMISS: "keydown.dismiss" + s,
            MOUSEUP_DISMISS: "mouseup.dismiss" + s,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + s,
            CLICK_DATA_API: "click" + s + l
        }
          , m = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            IN: "in"
        }
          , v = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
        }
          , y = function() {
            function l(t, i) {
                r(this, l),
                this._config = this._getConfig(i),
                this._element = t,
                this._dialog = e(t).find(v.DIALOG)[0],
                this._backdrop = null ,
                this._isShown = !1,
                this._isBodyOverflowing = !1,
                this._ignoreBackdropClick = !1,
                this._originalBodyPadding = 0,
                this._scrollbarWidth = 0
            }
            return i(l, [{
                key: "toggle",
                value: function(e) {
                    return this._isShown ? this.hide() : this.show(e)
                }
            }, {
                key: "show",
                value: function(t) {
                    var i = this
                      , n = e.Event(g.SHOW, {
                        relatedTarget: t
                    });
                    e(this._element).trigger(n),
                    this._isShown || n.isDefaultPrevented() || (this._isShown = !0,
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    e(document.body).addClass(m.OPEN),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    e(this._element).on(g.CLICK_DISMISS, v.DATA_DISMISS, e.proxy(this.hide, this)),
                    e(this._dialog).on(g.MOUSEDOWN_DISMISS, function() {
                        e(i._element).one(g.MOUSEUP_DISMISS, function(t) {
                            e(t.target).is(i._element) && (i._ignoreBackdropClick = !0)
                        })
                    }),
                    this._showBackdrop(e.proxy(this._showElement, this, t)))
                }
            }, {
                key: "hide",
                value: function(t) {
                    t && t.preventDefault();
                    var i = e.Event(g.HIDE);
                    e(this._element).trigger(i),
                    this._isShown && !i.isDefaultPrevented() && (this._isShown = !1,
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    e(document).off(g.FOCUSIN),
                    e(this._element).removeClass(m.IN),
                    e(this._element).off(g.CLICK_DISMISS),
                    e(this._dialog).off(g.MOUSEDOWN_DISMISS),
                    a.supportsTransitionEnd() && e(this._element).hasClass(m.FADE) ? e(this._element).one(a.TRANSITION_END, e.proxy(this._hideModal, this)).emulateTransitionEnd(c) : this._hideModal())
                }
            }, {
                key: "dispose",
                value: function() {
                    e.removeData(this._element, o),
                    e(window).off(s),
                    e(document).off(s),
                    e(this._element).off(s),
                    e(this._backdrop).off(s),
                    this._config = null ,
                    this._element = null ,
                    this._dialog = null ,
                    this._backdrop = null ,
                    this._isShown = null ,
                    this._isBodyOverflowing = null ,
                    this._ignoreBackdropClick = null ,
                    this._originalBodyPadding = null ,
                    this._scrollbarWidth = null
                }
            }, {
                key: "_getConfig",
                value: function(i) {
                    return i = e.extend({}, d, i),
                    a.typeCheckConfig(t, i, p),
                    i
                }
            }, {
                key: "_showElement",
                value: function(t) {
                    var i = this
                      , n = a.supportsTransitionEnd() && e(this._element).hasClass(m.FADE);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                    this._element.style.display = "block",
                    this._element.removeAttribute("aria-hidden"),
                    this._element.scrollTop = 0,
                    n && a.reflow(this._element),
                    e(this._element).addClass(m.IN),
                    this._config.focus && this._enforceFocus();
                    var r = e.Event(g.SHOWN, {
                        relatedTarget: t
                    })
                      , o = function() {
                        i._config.focus && i._element.focus(),
                        e(i._element).trigger(r)
                    }
                    ;
                    n ? e(this._dialog).one(a.TRANSITION_END, o).emulateTransitionEnd(c) : o()
                }
            }, {
                key: "_enforceFocus",
                value: function() {
                    var t = this;
                    e(document).off(g.FOCUSIN).on(g.FOCUSIN, function(i) {
                        document === i.target || t._element === i.target || e(t._element).has(i.target).length || t._element.focus()
                    })
                }
            }, {
                key: "_setEscapeEvent",
                value: function() {
                    var t = this;
                    this._isShown && this._config.keyboard ? e(this._element).on(g.KEYDOWN_DISMISS, function(e) {
                        e.which === h && t.hide()
                    }) : this._isShown || e(this._element).off(g.KEYDOWN_DISMISS)
                }
            }, {
                key: "_setResizeEvent",
                value: function() {
                    this._isShown ? e(window).on(g.RESIZE, e.proxy(this._handleUpdate, this)) : e(window).off(g.RESIZE)
                }
            }, {
                key: "_hideModal",
                value: function() {
                    var t = this;
                    this._element.style.display = "none",
                    this._element.setAttribute("aria-hidden", "true"),
                    this._showBackdrop(function() {
                        e(document.body).removeClass(m.OPEN),
                        t._resetAdjustments(),
                        t._resetScrollbar(),
                        e(t._element).trigger(g.HIDDEN)
                    })
                }
            }, {
                key: "_removeBackdrop",
                value: function() {
                    this._backdrop && (e(this._backdrop).remove(),
                    this._backdrop = null )
                }
            }, {
                key: "_showBackdrop",
                value: function(t) {
                    var i = this
                      , n = e(this._element).hasClass(m.FADE) ? m.FADE : "";
                    if (this._isShown && this._config.backdrop) {
                        var r = a.supportsTransitionEnd() && n;
                        if (this._backdrop = document.createElement("div"),
                        this._backdrop.className = m.BACKDROP,
                        n && e(this._backdrop).addClass(n),
                        e(this._backdrop).appendTo(document.body),
                        e(this._element).on(g.CLICK_DISMISS, function(e) {
                            return i._ignoreBackdropClick ? void (i._ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide()))
                        }),
                        r && a.reflow(this._backdrop),
                        e(this._backdrop).addClass(m.IN),
                        !t)
                            return;
                        if (!r)
                            return void t();
                        e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(f)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(m.IN);
                        var o = function() {
                            i._removeBackdrop(),
                            t && t()
                        }
                        ;
                        a.supportsTransitionEnd() && e(this._element).hasClass(m.FADE) ? e(this._backdrop).one(a.TRANSITION_END, o).emulateTransitionEnd(f) : o()
                    } else
                        t && t()
                }
            }, {
                key: "_handleUpdate",
                value: function() {
                    this._adjustDialog()
                }
            }, {
                key: "_adjustDialog",
                value: function() {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                    this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }
            }, {
                key: "_resetAdjustments",
                value: function() {
                    this._element.style.paddingLeft = "",
                    this._element.style.paddingRight = ""
                }
            }, {
                key: "_checkScrollbar",
                value: function() {
                    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth,
                    this._scrollbarWidth = this._getScrollbarWidth()
                }
            }, {
                key: "_setScrollbar",
                value: function() {
                    var t = parseInt(e(v.FIXED_CONTENT).css("padding-right") || 0, 10);
                    this._originalBodyPadding = document.body.style.paddingRight || "",
                    this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px")
                }
            }, {
                key: "_resetScrollbar",
                value: function() {
                    document.body.style.paddingRight = this._originalBodyPadding
                }
            }, {
                key: "_getScrollbarWidth",
                value: function() {
                    var e = document.createElement("div");
                    e.className = m.SCROLLBAR_MEASURER,
                    document.body.appendChild(e);
                    var t = e.offsetWidth - e.clientWidth;
                    return document.body.removeChild(e),
                    t
                }
            }], [{
                key: "_jQueryInterface",
                value: function(t, i) {
                    return this.each(function() {
                        var n = e(this).data(o)
                          , r = e.extend({}, l.Default, e(this).data(), "object" == typeof t && t);
                        if (n || (n = new l(this,r),
                        e(this).data(o, n)),
                        "string" == typeof t) {
                            if (void 0 === n[t])
                                throw new Error('No method named "' + t + '"');
                            n[t](i)
                        } else
                            r.show && n.show(i)
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return n
                }
            }, {
                key: "Default",
                get: function() {
                    return d
                }
            }]),
            l
        }();
        return e(document).on(g.CLICK_DATA_API, v.DATA_TOGGLE, function(t) {
            var i = this
              , n = void 0
              , r = a.getSelectorFromElement(this);
            r && (n = e(r)[0]);
            var s = e(n).data(o) ? "toggle" : e.extend({}, e(n).data(), e(this).data());
            "A" === this.tagName && t.preventDefault();
            var l = e(n).one(g.SHOW, function(t) {
                t.isDefaultPrevented() || l.one(g.HIDDEN, function() {
                    e(i).is(":visible") && i.focus()
                })
            });
            y._jQueryInterface.call(e(n), s, this)
        }),
        e.fn[t] = y._jQueryInterface,
        e.fn[t].Constructor = y,
        e.fn[t].noConflict = function() {
            return e.fn[t] = u,
            y._jQueryInterface
        }
        ,
        y
    }(jQuery),
    function(e) {
        var t = "scrollspy"
          , n = "4.0.0-alpha.3"
          , o = "bs.scrollspy"
          , s = "." + o
          , l = ".data-api"
          , u = e.fn[t]
          , c = {
            offset: 10,
            method: "auto",
            target: ""
        }
          , f = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
          , h = {
            ACTIVATE: "activate" + s,
            SCROLL: "scroll" + s,
            LOAD_DATA_API: "load" + s + l
        }
          , d = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            NAV_LINK: "nav-link",
            NAV: "nav",
            ACTIVE: "active"
        }
          , p = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            LIST_ITEM: ".list-item",
            LI: "li",
            LI_DROPDOWN: "li.dropdown",
            NAV_LINKS: ".nav-link",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }
          , g = {
            OFFSET: "offset",
            POSITION: "position"
        }
          , m = function() {
            function l(t, i) {
                r(this, l),
                this._element = t,
                this._scrollElement = "BODY" === t.tagName ? window : t,
                this._config = this._getConfig(i),
                this._selector = this._config.target + " " + p.NAV_LINKS + "," + (this._config.target + " " + p.DROPDOWN_ITEMS),
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null ,
                this._scrollHeight = 0,
                e(this._scrollElement).on(h.SCROLL, e.proxy(this._process, this)),
                this.refresh(),
                this._process()
            }
            return i(l, [{
                key: "refresh",
                value: function() {
                    var t = this
                      , i = this._scrollElement !== this._scrollElement.window ? g.POSITION : g.OFFSET
                      , n = "auto" === this._config.method ? i : this._config.method
                      , r = n === g.POSITION ? this._getScrollTop() : 0;
                    this._offsets = [],
                    this._targets = [],
                    this._scrollHeight = this._getScrollHeight();
                    var o = e.makeArray(e(this._selector));
                    o.map(function(t) {
                        var i = void 0
                          , o = a.getSelectorFromElement(t);
                        return o && (i = e(o)[0]),
                        i && (i.offsetWidth || i.offsetHeight) ? [e(i)[n]().top + r, o] : null
                    }).filter(function(e) {
                        return e
                    }).sort(function(e, t) {
                        return e[0] - t[0]
                    }).forEach(function(e) {
                        t._offsets.push(e[0]),
                        t._targets.push(e[1])
                    })
                }
            }, {
                key: "dispose",
                value: function() {
                    e.removeData(this._element, o),
                    e(this._scrollElement).off(s),
                    this._element = null ,
                    this._scrollElement = null ,
                    this._config = null ,
                    this._selector = null ,
                    this._offsets = null ,
                    this._targets = null ,
                    this._activeTarget = null ,
                    this._scrollHeight = null
                }
            }, {
                key: "_getConfig",
                value: function(i) {
                    if (i = e.extend({}, c, i),
                    "string" != typeof i.target) {
                        var n = e(i.target).attr("id");
                        n || (n = a.getUID(t),
                        e(i.target).attr("id", n)),
                        i.target = "#" + n
                    }
                    return a.typeCheckConfig(t, i, f),
                    i
                }
            }, {
                key: "_getScrollTop",
                value: function() {
                    return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                }
            }, {
                key: "_getScrollHeight",
                value: function() {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }
            }, {
                key: "_process",
                value: function() {
                    var e = this._getScrollTop() + this._config.offset
                      , t = this._getScrollHeight()
                      , i = this._config.offset + t - this._scrollElement.offsetHeight;
                    if (this._scrollHeight !== t && this.refresh(),
                    e >= i) {
                        var n = this._targets[this._targets.length - 1];
                        this._activeTarget !== n && this._activate(n)
                    }
                    if (this._activeTarget && e < this._offsets[0])
                        return this._activeTarget = null ,
                        void this._clear();
                    for (var r = this._offsets.length; r--; ) {
                        var a = this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]);
                        a && this._activate(this._targets[r])
                    }
                }
            }, {
                key: "_activate",
                value: function(t) {
                    this._activeTarget = t,
                    this._clear();
                    var i = this._selector.split(",");
                    i = i.map(function(e) {
                        return e + '[data-target="' + t + '"],' + (e + '[href="' + t + '"]')
                    });
                    var n = e(i.join(","));
                    n.hasClass(d.DROPDOWN_ITEM) ? (n.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(d.ACTIVE),
                    n.addClass(d.ACTIVE)) : n.parents(p.LI).find(p.NAV_LINKS).addClass(d.ACTIVE),
                    e(this._scrollElement).trigger(h.ACTIVATE, {
                        relatedTarget: t
                    })
                }
            }, {
                key: "_clear",
                value: function() {
                    e(this._selector).filter(p.ACTIVE).removeClass(d.ACTIVE)
                }
            }], [{
                key: "_jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var i = e(this).data(o)
                          , n = "object" == typeof t && t || null ;
                        if (i || (i = new l(this,n),
                        e(this).data(o, i)),
                        "string" == typeof t) {
                            if (void 0 === i[t])
                                throw new Error('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return n
                }
            }, {
                key: "Default",
                get: function() {
                    return c
                }
            }]),
            l
        }();
        return e(window).on(h.LOAD_DATA_API, function() {
            for (var t = e.makeArray(e(p.DATA_SPY)), i = t.length; i--; ) {
                var n = e(t[i]);
                m._jQueryInterface.call(n, n.data())
            }
        }),
        e.fn[t] = m._jQueryInterface,
        e.fn[t].Constructor = m,
        e.fn[t].noConflict = function() {
            return e.fn[t] = u,
            m._jQueryInterface
        }
        ,
        m
    }(jQuery),
    function(e) {
        var t = "tab"
          , n = "4.0.0-alpha.3"
          , o = "bs.tab"
          , s = "." + o
          , l = ".data-api"
          , u = e.fn[t]
          , c = 150
          , f = {
            HIDE: "hide" + s,
            HIDDEN: "hidden" + s,
            SHOW: "show" + s,
            SHOWN: "shown" + s,
            CLICK_DATA_API: "click" + s + l
        }
          , h = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            FADE: "fade",
            IN: "in"
        }
          , d = {
            A: "a",
            LI: "li",
            DROPDOWN: ".dropdown",
            UL: "ul:not(.dropdown-menu)",
            FADE_CHILD: "> .nav-item .fade, > .fade",
            ACTIVE: ".active",
            ACTIVE_CHILD: "> .nav-item > .active, > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        }
          , p = function() {
            function t(e) {
                r(this, t),
                this._element = e
            }
            return i(t, [{
                key: "show",
                value: function() {
                    var t = this;
                    if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !e(this._element).hasClass(h.ACTIVE)) {
                        var i = void 0
                          , n = void 0
                          , r = e(this._element).closest(d.UL)[0]
                          , o = a.getSelectorFromElement(this._element);
                        r && (n = e.makeArray(e(r).find(d.ACTIVE)),
                        n = n[n.length - 1]);
                        var s = e.Event(f.HIDE, {
                            relatedTarget: this._element
                        })
                          , l = e.Event(f.SHOW, {
                            relatedTarget: n
                        });
                        if (n && e(n).trigger(s),
                        e(this._element).trigger(l),
                        !l.isDefaultPrevented() && !s.isDefaultPrevented()) {
                            o && (i = e(o)[0]),
                            this._activate(this._element, r);
                            var u = function() {
                                var i = e.Event(f.HIDDEN, {
                                    relatedTarget: t._element
                                })
                                  , r = e.Event(f.SHOWN, {
                                    relatedTarget: n
                                });
                                e(n).trigger(i),
                                e(t._element).trigger(r)
                            }
                            ;
                            i ? this._activate(i, i.parentNode, u) : u()
                        }
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    e.removeClass(this._element, o),
                    this._element = null
                }
            }, {
                key: "_activate",
                value: function(t, i, n) {
                    var r = e(i).find(d.ACTIVE_CHILD)[0]
                      , o = n && a.supportsTransitionEnd() && (r && e(r).hasClass(h.FADE) || Boolean(e(i).find(d.FADE_CHILD)[0]))
                      , s = e.proxy(this._transitionComplete, this, t, r, o, n);
                    r && o ? e(r).one(a.TRANSITION_END, s).emulateTransitionEnd(c) : s(),
                    r && e(r).removeClass(h.IN)
                }
            }, {
                key: "_transitionComplete",
                value: function(t, i, n, r) {
                    if (i) {
                        e(i).removeClass(h.ACTIVE);
                        var o = e(i).find(d.DROPDOWN_ACTIVE_CHILD)[0];
                        o && e(o).removeClass(h.ACTIVE),
                        i.setAttribute("aria-expanded", !1)
                    }
                    if (e(t).addClass(h.ACTIVE),
                    t.setAttribute("aria-expanded", !0),
                    n ? (a.reflow(t),
                    e(t).addClass(h.IN)) : e(t).removeClass(h.FADE),
                    t.parentNode && e(t.parentNode).hasClass(h.DROPDOWN_MENU)) {
                        var s = e(t).closest(d.DROPDOWN)[0];
                        s && e(s).find(d.DROPDOWN_TOGGLE).addClass(h.ACTIVE),
                        t.setAttribute("aria-expanded", !0)
                    }
                    r && r()
                }
            }], [{
                key: "_jQueryInterface",
                value: function(i) {
                    return this.each(function() {
                        var n = e(this)
                          , r = n.data(o);
                        if (r || (r = r = new t(this),
                        n.data(o, r)),
                        "string" == typeof i) {
                            if (void 0 === r[i])
                                throw new Error('No method named "' + i + '"');
                            r[i]()
                        }
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return n
                }
            }]),
            t
        }();
        return e(document).on(f.CLICK_DATA_API, d.DATA_TOGGLE, function(t) {
            t.preventDefault(),
            p._jQueryInterface.call(e(this), "show")
        }),
        e.fn[t] = p._jQueryInterface,
        e.fn[t].Constructor = p,
        e.fn[t].noConflict = function() {
            return e.fn[t] = u,
            p._jQueryInterface
        }
        ,
        p
    }(jQuery),
    function(e) {
        if (void 0 === window.Tether)
            throw new Error("Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)");
        var t = "tooltip"
          , n = "4.0.0-alpha.3"
          , o = "bs.tooltip"
          , s = "." + o
          , l = e.fn[t]
          , u = 150
          , c = "bs-tether"
          , f = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: "0 0",
            constraints: []
        }
          , h = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "string",
            constraints: "array"
        }
          , d = {
            TOP: "bottom center",
            RIGHT: "middle left",
            BOTTOM: "top center",
            LEFT: "middle right"
        }
          , p = {
            IN: "in",
            OUT: "out"
        }
          , g = {
            HIDE: "hide" + s,
            HIDDEN: "hidden" + s,
            SHOW: "show" + s,
            SHOWN: "shown" + s,
            INSERTED: "inserted" + s,
            CLICK: "click" + s,
            FOCUSIN: "focusin" + s,
            FOCUSOUT: "focusout" + s,
            MOUSEENTER: "mouseenter" + s,
            MOUSELEAVE: "mouseleave" + s
        }
          , m = {
            FADE: "fade",
            IN: "in"
        }
          , v = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner"
        }
          , y = {
            element: !1,
            enabled: !1
        }
          , b = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual"
        }
          , w = function() {
            function l(e, t) {
                r(this, l),
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._tether = null ,
                this.element = e,
                this.config = this._getConfig(t),
                this.tip = null ,
                this._setListeners()
            }
            return i(l, [{
                key: "enable",
                value: function() {
                    this._isEnabled = !0
                }
            }, {
                key: "disable",
                value: function() {
                    this._isEnabled = !1
                }
            }, {
                key: "toggleEnabled",
                value: function() {
                    this._isEnabled = !this._isEnabled
                }
            }, {
                key: "toggle",
                value: function(t) {
                    if (t) {
                        var i = this.constructor.DATA_KEY
                          , n = e(t.currentTarget).data(i);
                        n || (n = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                        e(t.currentTarget).data(i, n)),
                        n._activeTrigger.click = !n._activeTrigger.click,
                        n._isWithActiveTrigger() ? n._enter(null , n) : n._leave(null , n)
                    } else {
                        if (e(this.getTipElement()).hasClass(m.IN))
                            return void this._leave(null , this);
                        this._enter(null , this)
                    }
                }
            }, {
                key: "dispose",
                value: function() {
                    clearTimeout(this._timeout),
                    this.cleanupTether(),
                    e.removeData(this.element, this.constructor.DATA_KEY),
                    e(this.element).off(this.constructor.EVENT_KEY),
                    this.tip && e(this.tip).remove(),
                    this._isEnabled = null ,
                    this._timeout = null ,
                    this._hoverState = null ,
                    this._activeTrigger = null ,
                    this._tether = null ,
                    this.element = null ,
                    this.config = null ,
                    this.tip = null
                }
            }, {
                key: "show",
                value: function() {
                    var t = this
                      , i = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(i);
                        var n = e.contains(this.element.ownerDocument.documentElement, this.element);
                        if (i.isDefaultPrevented() || !n)
                            return;
                        var r = this.getTipElement()
                          , o = a.getUID(this.constructor.NAME);
                        r.setAttribute("id", o),
                        this.element.setAttribute("aria-describedby", o),
                        this.setContent(),
                        this.config.animation && e(r).addClass(m.FADE);
                        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                          , u = this._getAttachment(s);
                        e(r).data(this.constructor.DATA_KEY, this).appendTo(document.body),
                        e(this.element).trigger(this.constructor.Event.INSERTED),
                        this._tether = new Tether({
                            attachment: u,
                            element: r,
                            target: this.element,
                            classes: y,
                            classPrefix: c,
                            offset: this.config.offset,
                            constraints: this.config.constraints,
                            addTargetClasses: !1
                        }),
                        a.reflow(r),
                        this._tether.position(),
                        e(r).addClass(m.IN);
                        var f = function() {
                            var i = t._hoverState;
                            t._hoverState = null ,
                            e(t.element).trigger(t.constructor.Event.SHOWN),
                            i === p.OUT && t._leave(null , t)
                        }
                        ;
                        if (a.supportsTransitionEnd() && e(this.tip).hasClass(m.FADE))
                            return void e(this.tip).one(a.TRANSITION_END, f).emulateTransitionEnd(l._TRANSITION_DURATION);
                        f()
                    }
                }
            }, {
                key: "hide",
                value: function(t) {
                    var i = this
                      , n = this.getTipElement()
                      , r = e.Event(this.constructor.Event.HIDE)
                      , o = function() {
                        i._hoverState !== p.IN && n.parentNode && n.parentNode.removeChild(n),
                        i.element.removeAttribute("aria-describedby"),
                        e(i.element).trigger(i.constructor.Event.HIDDEN),
                        i.cleanupTether(),
                        t && t()
                    }
                    ;
                    e(this.element).trigger(r),
                    r.isDefaultPrevented() || (e(n).removeClass(m.IN),
                    a.supportsTransitionEnd() && e(this.tip).hasClass(m.FADE) ? e(n).one(a.TRANSITION_END, o).emulateTransitionEnd(u) : o(),
                    this._hoverState = "")
                }
            }, {
                key: "isWithContent",
                value: function() {
                    return Boolean(this.getTitle())
                }
            }, {
                key: "getTipElement",
                value: function() {
                    return this.tip = this.tip || e(this.config.template)[0]
                }
            }, {
                key: "setContent",
                value: function() {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(v.TOOLTIP_INNER), this.getTitle()),
                    t.removeClass(m.FADE).removeClass(m.IN),
                    this.cleanupTether()
                }
            }, {
                key: "setElementContent",
                value: function(t, i) {
                    var n = this.config.html;
                    "object" == typeof i && (i.nodeType || i.jquery) ? n ? e(i).parent().is(t) || t.empty().append(i) : t.text(e(i).text()) : t[n ? "html" : "text"](i)
                }
            }, {
                key: "getTitle",
                value: function() {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                    e
                }
            }, {
                key: "cleanupTether",
                value: function() {
                    this._tether && this._tether.destroy()
                }
            }, {
                key: "_getAttachment",
                value: function(e) {
                    return d[e.toUpperCase()]
                }
            }, {
                key: "_setListeners",
                value: function() {
                    var t = this
                      , i = this.config.trigger.split(" ");
                    i.forEach(function(i) {
                        if ("click" === i)
                            e(t.element).on(t.constructor.Event.CLICK, t.config.selector, e.proxy(t.toggle, t));
                        else if (i !== b.MANUAL) {
                            var n = i === b.HOVER ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN
                              , r = i === b.HOVER ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element).on(n, t.config.selector, e.proxy(t._enter, t)).on(r, t.config.selector, e.proxy(t._leave, t))
                        }
                    }),
                    this.config.selector ? this.config = e.extend({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }
            }, {
                key: "_fixTitle",
                value: function() {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                    this.element.setAttribute("title", ""))
                }
            }, {
                key: "_enter",
                value: function(t, i) {
                    var n = this.constructor.DATA_KEY;
                    return i = i || e(t.currentTarget).data(n),
                    i || (i = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    e(t.currentTarget).data(n, i)),
                    t && (i._activeTrigger["focusin" === t.type ? b.FOCUS : b.HOVER] = !0),
                    e(i.getTipElement()).hasClass(m.IN) || i._hoverState === p.IN ? void (i._hoverState = p.IN) : (clearTimeout(i._timeout),
                    i._hoverState = p.IN,
                    i.config.delay && i.config.delay.show ? void (i._timeout = setTimeout(function() {
                        i._hoverState === p.IN && i.show()
                    }, i.config.delay.show)) : void i.show())
                }
            }, {
                key: "_leave",
                value: function(t, i) {
                    var n = this.constructor.DATA_KEY;
                    return i = i || e(t.currentTarget).data(n),
                    i || (i = new this.constructor(t.currentTarget,this._getDelegateConfig()),
                    e(t.currentTarget).data(n, i)),
                    t && (i._activeTrigger["focusout" === t.type ? b.FOCUS : b.HOVER] = !1),
                    i._isWithActiveTrigger() ? void 0 : (clearTimeout(i._timeout),
                    i._hoverState = p.OUT,
                    i.config.delay && i.config.delay.hide ? void (i._timeout = setTimeout(function() {
                        i._hoverState === p.OUT && i.hide()
                    }, i.config.delay.hide)) : void i.hide())
                }
            }, {
                key: "_isWithActiveTrigger",
                value: function() {
                    for (var e in this._activeTrigger)
                        if (this._activeTrigger[e])
                            return !0;
                    return !1
                }
            }, {
                key: "_getConfig",
                value: function(i) {
                    return i = e.extend({}, this.constructor.Default, e(this.element).data(), i),
                    i.delay && "number" == typeof i.delay && (i.delay = {
                        show: i.delay,
                        hide: i.delay
                    }),
                    a.typeCheckConfig(t, i, this.constructor.DefaultType),
                    i
                }
            }, {
                key: "_getDelegateConfig",
                value: function() {
                    var e = {};
                    if (this.config)
                        for (var t in this.config)
                            this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }
            }], [{
                key: "_jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var i = e(this).data(o)
                          , n = "object" == typeof t ? t : null ;
                        if ((i || !/destroy|hide/.test(t)) && (i || (i = new l(this,n),
                        e(this).data(o, i)),
                        "string" == typeof t)) {
                            if (void 0 === i[t])
                                throw new Error('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return n
                }
            }, {
                key: "Default",
                get: function() {
                    return f
                }
            }, {
                key: "NAME",
                get: function() {
                    return t
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return o
                }
            }, {
                key: "Event",
                get: function() {
                    return g
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return s
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return h
                }
            }]),
            l
        }();
        return e.fn[t] = w._jQueryInterface,
        e.fn[t].Constructor = w,
        e.fn[t].noConflict = function() {
            return e.fn[t] = l,
            w._jQueryInterface
        }
        ,
        w
    }(jQuery));
    (function(e) {
        var a = "popover"
          , o = "4.0.0-alpha.3"
          , s = "bs.popover"
          , l = "." + s
          , u = e.fn[a]
          , c = e.extend({}, p.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        })
          , f = e.extend({}, p.DefaultType, {
            content: "(string|element|function)"
        })
          , h = {
            FADE: "fade",
            IN: "in"
        }
          , d = {
            TITLE: ".popover-title",
            CONTENT: ".popover-content",
            ARROW: ".popover-arrow"
        }
          , g = {
            HIDE: "hide" + l,
            HIDDEN: "hidden" + l,
            SHOW: "show" + l,
            SHOWN: "shown" + l,
            INSERTED: "inserted" + l,
            CLICK: "click" + l,
            FOCUSIN: "focusin" + l,
            FOCUSOUT: "focusout" + l,
            MOUSEENTER: "mouseenter" + l,
            MOUSELEAVE: "mouseleave" + l
        }
          , m = function(u) {
            function p() {
                r(this, p),
                t(Object.getPrototypeOf(p.prototype), "constructor", this).apply(this, arguments)
            }
            return n(p, u),
            i(p, [{
                key: "isWithContent",
                value: function() {
                    return this.getTitle() || this._getContent()
                }
            }, {
                key: "getTipElement",
                value: function() {
                    return this.tip = this.tip || e(this.config.template)[0]
                }
            }, {
                key: "setContent",
                value: function() {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(d.TITLE), this.getTitle()),
                    this.setElementContent(t.find(d.CONTENT), this._getContent()),
                    t.removeClass(h.FADE).removeClass(h.IN),
                    this.cleanupTether()
                }
            }, {
                key: "_getContent",
                value: function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }
            }], [{
                key: "_jQueryInterface",
                value: function(t) {
                    return this.each(function() {
                        var i = e(this).data(s)
                          , n = "object" == typeof t ? t : null ;
                        if ((i || !/destroy|hide/.test(t)) && (i || (i = new p(this,n),
                        e(this).data(s, i)),
                        "string" == typeof t)) {
                            if (void 0 === i[t])
                                throw new Error('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }
            }, {
                key: "VERSION",
                get: function() {
                    return o
                }
            }, {
                key: "Default",
                get: function() {
                    return c
                }
            }, {
                key: "NAME",
                get: function() {
                    return a
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return s
                }
            }, {
                key: "Event",
                get: function() {
                    return g
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return l
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return f
                }
            }]),
            p
        }(p);
        return e.fn[a] = m._jQueryInterface,
        e.fn[a].Constructor = m,
        e.fn[a].noConflict = function() {
            return e.fn[a] = u,
            m._jQueryInterface
        }
        ,
        m
    })(jQuery)
}(jQuery),
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, i, n, r) {
        return jQuery.easing[jQuery.easing.def](e, t, i, n, r)
    },
    easeInQuad: function(e, t, i, n, r) {
        return n * (t /= r) * t + i
    },
    easeOutQuad: function(e, t, i, n, r) {
        return -n * (t /= r) * (t - 2) + i
    },
    easeInOutQuad: function(e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(e, t, i, n, r) {
        return n * (t /= r) * t * t + i
    },
    easeOutCubic: function(e, t, i, n, r) {
        return n * ((t = t / r - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(e, t, i, n, r) {
        return n * (t /= r) * t * t * t + i
    },
    easeOutQuart: function(e, t, i, n, r) {
        return -n * ((t = t / r - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(e, t, i, n, r) {
        return n * (t /= r) * t * t * t * t + i
    },
    easeOutQuint: function(e, t, i, n, r) {
        return n * ((t = t / r - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(e, t, i, n, r) {
        return -n * Math.cos(t / r * (Math.PI / 2)) + n + i
    },
    easeOutSine: function(e, t, i, n, r) {
        return n * Math.sin(t / r * (Math.PI / 2)) + i
    },
    easeInOutSine: function(e, t, i, n, r) {
        return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + i
    },
    easeInExpo: function(e, t, i, n, r) {
        return 0 == t ? i : n * Math.pow(2, 10 * (t / r - 1)) + i
    },
    easeOutExpo: function(e, t, i, n, r) {
        return t == r ? i + n : n * (-Math.pow(2, -10 * t / r) + 1) + i
    },
    easeInOutExpo: function(e, t, i, n, r) {
        return 0 == t ? i : t == r ? i + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i
    },
    easeInCirc: function(e, t, i, n, r) {
        return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + i
    },
    easeOutCirc: function(e, t, i, n, r) {
        return n * Math.sqrt(1 - (t = t / r - 1) * t) + i
    },
    easeInOutCirc: function(e, t, i, n, r) {
        return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(e, t, i, n, r) {
        var a = 1.70158
          , o = 0
          , s = n;
        if (0 == t)
            return i;
        if (1 == (t /= r))
            return i + n;
        if (o || (o = .3 * r),
        s < Math.abs(n)) {
            s = n;
            var a = o / 4
        } else
            var a = o / (2 * Math.PI) * Math.asin(n / s);
        return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + i
    },
    easeOutElastic: function(e, t, i, n, r) {
        var a = 1.70158
          , o = 0
          , s = n;
        if (0 == t)
            return i;
        if (1 == (t /= r))
            return i + n;
        if (o || (o = .3 * r),
        s < Math.abs(n)) {
            s = n;
            var a = o / 4
        } else
            var a = o / (2 * Math.PI) * Math.asin(n / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * r - a) * (2 * Math.PI) / o) + n + i
    },
    easeInOutElastic: function(e, t, i, n, r) {
        var a = 1.70158
          , o = 0
          , s = n;
        if (0 == t)
            return i;
        if (2 == (t /= r / 2))
            return i + n;
        if (o || (o = r * (.3 * 1.5)),
        s < Math.abs(n)) {
            s = n;
            var a = o / 4
        } else
            var a = o / (2 * Math.PI) * Math.asin(n / s);
        return 1 > t ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + i : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) * .5 + n + i
    },
    easeInBack: function(e, t, i, n, r, a) {
        return void 0 == a && (a = 1.70158),
        n * (t /= r) * t * ((a + 1) * t - a) + i
    },
    easeOutBack: function(e, t, i, n, r, a) {
        return void 0 == a && (a = 1.70158),
        n * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + i
    },
    easeInOutBack: function(e, t, i, n, r, a) {
        return void 0 == a && (a = 1.70158),
        (t /= r / 2) < 1 ? n / 2 * (t * t * (((a *= 1.525) + 1) * t - a)) + i : n / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + i
    },
    easeInBounce: function(e, t, i, n, r) {
        return n - jQuery.easing.easeOutBounce(e, r - t, 0, n, r) + i
    },
    easeOutBounce: function(e, t, i, n, r) {
        return (t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + i : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(e, t, i, n, r) {
        return r / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, n, r) + .5 * n + i
    }
}),
function(e) {
    e.Package ? Materialize = {} : e.Materialize = {}
}(window),
Materialize.guid = function() {
    function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }
}(),
Materialize.elementOrParentIsFixed = function(e) {
    var t = $(e)
      , i = t.add(t.parents())
      , n = !1;
    return i.each(function() {
        return "fixed" === $(this).css("position") ? (n = !0,
        !1) : void 0
    }),
    n
}
;
var Vel;
Vel = $ ? $.Velocity : jQuery ? jQuery.Velocity : Velocity,
jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (!function(e) {
    function t(e) {
        var t = e.length
          , n = i.type(e);
        return "function" === n || i.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    if (!e.jQuery) {
        var i = function(e, t) {
            return new i.fn.init(e,t)
        }
        ;
        i.isWindow = function(e) {
            return null != e && e == e.window
        }
        ,
        i.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? r[o.call(e)] || "object" : typeof e
        }
        ,
        i.isArray = Array.isArray || function(e) {
            return "array" === i.type(e)
        }
        ,
        i.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e))
                return !1;
            try {
                if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            for (t in e)
                ;
            return void 0 === t || a.call(e, t)
        }
        ,
        i.each = function(e, i, n) {
            var r, a = 0, o = e.length, s = t(e);
            if (n) {
                if (s)
                    for (; o > a && (r = i.apply(e[a], n),
                    r !== !1); a++)
                        ;
                else
                    for (a in e)
                        if (r = i.apply(e[a], n),
                        r === !1)
                            break
            } else if (s)
                for (; o > a && (r = i.call(e[a], a, e[a]),
                r !== !1); a++)
                    ;
            else
                for (a in e)
                    if (r = i.call(e[a], a, e[a]),
                    r === !1)
                        break;
            return e
        }
        ,
        i.data = function(e, t, r) {
            if (void 0 === r) {
                var a = e[i.expando]
                  , o = a && n[a];
                if (void 0 === t)
                    return o;
                if (o && t in o)
                    return o[t]
            } else if (void 0 !== t) {
                var a = e[i.expando] || (e[i.expando] = ++i.uuid);
                return n[a] = n[a] || {},
                n[a][t] = r,
                r
            }
        }
        ,
        i.removeData = function(e, t) {
            var r = e[i.expando]
              , a = r && n[r];
            a && i.each(t, function(e, t) {
                delete a[t]
            })
        }
        ,
        i.extend = function() {
            var e, t, n, r, a, o, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s,
            s = arguments[l] || {},
            l++),
            "object" != typeof s && "function" !== i.type(s) && (s = {}),
            l === u && (s = this,
            l--); u > l; l++)
                if (null != (a = arguments[l]))
                    for (r in a)
                        e = s[r],
                        n = a[r],
                        s !== n && (c && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1,
                        o = e && i.isArray(e) ? e : []) : o = e && i.isPlainObject(e) ? e : {},
                        s[r] = i.extend(c, o, n)) : void 0 !== n && (s[r] = n));
            return s
        }
        ,
        i.queue = function(e, n, r) {
            function a(e, i) {
                var n = i || [];
                return null != e && (t(Object(e)) ? !function(e, t) {
                    for (var i = +t.length, n = 0, r = e.length; i > n; )
                        e[r++] = t[n++];
                    if (i !== i)
                        for (; void 0 !== t[n]; )
                            e[r++] = t[n++];
                    return e.length = r,
                    e
                }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)),
                n
            }
            if (e) {
                n = (n || "fx") + "queue";
                var o = i.data(e, n);
                return r ? (!o || i.isArray(r) ? o = i.data(e, n, a(r)) : o.push(r),
                o) : o || []
            }
        }
        ,
        i.dequeue = function(e, t) {
            i.each(e.nodeType ? [e] : e, function(e, n) {
                t = t || "fx";
                var r = i.queue(n, t)
                  , a = r.shift();
                "inprogress" === a && (a = r.shift()),
                a && ("fx" === t && r.unshift("inprogress"),
                a.call(n, function() {
                    i.dequeue(n, t)
                }))
            })
        }
        ,
        i.fn = i.prototype = {
            init: function(e) {
                if (e.nodeType)
                    return this[0] = e,
                    this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; )
                        e = e.offsetParent;
                    return e || document
                }
                var t = this[0]
                  , e = e.apply(t)
                  , n = this.offset()
                  , r = /^(?:body|html)$/i.test(e.nodeName) ? {
                    top: 0,
                    left: 0
                } : i(e).offset();
                return n.top -= parseFloat(t.style.marginTop) || 0,
                n.left -= parseFloat(t.style.marginLeft) || 0,
                e.style && (r.top += parseFloat(e.style.borderTopWidth) || 0,
                r.left += parseFloat(e.style.borderLeftWidth) || 0),
                {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        };
        var n = {};
        i.expando = "velocity" + (new Date).getTime(),
        i.uuid = 0;
        for (var r = {}, a = r.hasOwnProperty, o = r.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++)
            r["[object " + s[l] + "]"] = s[l].toLowerCase();
        i.fn.init.prototype = i.fn,
        e.Velocity = {
            Utilities: i
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, i, n) {
        function r(e) {
            for (var t = -1, i = e ? e.length : 0, n = []; ++t < i; ) {
                var r = e[t];
                r && n.push(r)
            }
            return n
        }
        function a(e) {
            return g.isWrapped(e) ? e = [].slice.call(e) : g.isNode(e) && (e = [e]),
            e
        }
        function o(e) {
            var t = h.data(e, "velocity");
            return null === t ? n : t
        }
        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }
        function l(e, i, n, r) {
            function a(e, t) {
                return 1 - 3 * t + 3 * e
            }
            function o(e, t) {
                return 3 * t - 6 * e
            }
            function s(e) {
                return 3 * e
            }
            function l(e, t, i) {
                return ((a(t, i) * e + o(t, i)) * e + s(t)) * e
            }
            function u(e, t, i) {
                return 3 * a(t, i) * e * e + 2 * o(t, i) * e + s(t)
            }
            function c(t, i) {
                for (var r = 0; g > r; ++r) {
                    var a = u(i, e, n);
                    if (0 === a)
                        return i;
                    var o = l(i, e, n) - t;
                    i -= o / a
                }
                return i
            }
            function f() {
                for (var t = 0; b > t; ++t)
                    T[t] = l(t * w, e, n)
            }
            function h(t, i, r) {
                var a, o, s = 0;
                do
                    o = i + (r - i) / 2,
                    a = l(o, e, n) - t,
                    a > 0 ? r = o : i = o;
                while (Math.abs(a) > v && ++s < y);return o
            }
            function d(t) {
                for (var i = 0, r = 1, a = b - 1; r != a && T[r] <= t; ++r)
                    i += w;
                --r;
                var o = (t - T[r]) / (T[r + 1] - T[r])
                  , s = i + o * w
                  , l = u(s, e, n);
                return l >= m ? c(t, s) : 0 == l ? s : h(t, i, i + w)
            }
            function p() {
                k = !0,
                (e != i || n != r) && f()
            }
            var g = 4
              , m = .001
              , v = 1e-7
              , y = 10
              , b = 11
              , w = 1 / (b - 1)
              , x = "Float32Array"in t;
            if (4 !== arguments.length)
                return !1;
            for (var C = 0; 4 > C; ++C)
                if ("number" != typeof arguments[C] || isNaN(arguments[C]) || !isFinite(arguments[C]))
                    return !1;
            e = Math.min(e, 1),
            n = Math.min(n, 1),
            e = Math.max(e, 0),
            n = Math.max(n, 0);
            var T = x ? new Float32Array(b) : new Array(b)
              , k = !1
              , S = function(t) {
                return k || p(),
                e === i && n === r ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), i, r)
            }
            ;
            S.getControlPoints = function() {
                return [{
                    x: e,
                    y: i
                }, {
                    x: n,
                    y: r
                }]
            }
            ;
            var E = "generateBezier(" + [e, i, n, r] + ")";
            return S.toString = function() {
                return E
            }
            ,
            S
        }
        function u(e, t) {
            var i = e;
            return g.isString(e) ? b.Easings[e] || (i = !1) : i = g.isArray(e) && 1 === e.length ? s.apply(null , e) : g.isArray(e) && 2 === e.length ? w.apply(null , e.concat([t])) : g.isArray(e) && 4 === e.length ? l.apply(null , e) : !1,
            i === !1 && (i = b.Easings[b.defaults.easing] ? b.defaults.easing : y),
            i
        }
        function c(e) {
            if (e) {
                var t = (new Date).getTime()
                  , i = b.State.calls.length;
                i > 1e4 && (b.State.calls = r(b.State.calls));
                for (var a = 0; i > a; a++)
                    if (b.State.calls[a]) {
                        var s = b.State.calls[a]
                          , l = s[0]
                          , u = s[2]
                          , d = s[3]
                          , p = !!d
                          , m = null ;
                        d || (d = b.State.calls[a][3] = t - 16);
                        for (var v = Math.min((t - d) / u.duration, 1), y = 0, w = l.length; w > y; y++) {
                            var C = l[y]
                              , k = C.element;
                            if (o(k)) {
                                var S = !1;
                                if (u.display !== n && null !== u.display && "none" !== u.display) {
                                    if ("flex" === u.display) {
                                        var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        h.each(E, function(e, t) {
                                            x.setPropertyValue(k, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(k, "display", u.display)
                                }
                                u.visibility !== n && "hidden" !== u.visibility && x.setPropertyValue(k, "visibility", u.visibility);
                                for (var A in C)
                                    if ("element" !== A) {
                                        var _, I = C[A], P = g.isString(I.easing) ? b.Easings[I.easing] : I.easing;
                                        if (1 === v)
                                            _ = I.endValue;
                                        else {
                                            var D = I.endValue - I.startValue;
                                            if (_ = I.startValue + D * P(v, u, D),
                                            !p && _ === I.currentValue)
                                                continue
                                        }
                                        if (I.currentValue = _,
                                        "tween" === A)
                                            m = _;
                                        else {
                                            if (x.Hooks.registered[A]) {
                                                var O = x.Hooks.getRoot(A)
                                                  , L = o(k).rootPropertyValueCache[O];
                                                L && (I.rootPropertyValue = L)
                                            }
                                            var F = x.setPropertyValue(k, A, I.currentValue + (0 === parseFloat(_) ? "" : I.unitType), I.rootPropertyValue, I.scrollData);
                                            x.Hooks.registered[A] && (o(k).rootPropertyValueCache[O] = x.Normalizations.registered[O] ? x.Normalizations.registered[O]("extract", null , F[1]) : F[1]),
                                            "transform" === F[0] && (S = !0)
                                        }
                                    }
                                u.mobileHA && o(k).transformCache.translate3d === n && (o(k).transformCache.translate3d = "(0px, 0px, 0px)",
                                S = !0),
                                S && x.flushTransformCache(k)
                            }
                        }
                        u.display !== n && "none" !== u.display && (b.State.calls[a][2].display = !1),
                        u.visibility !== n && "hidden" !== u.visibility && (b.State.calls[a][2].visibility = !1),
                        u.progress && u.progress.call(s[1], s[1], v, Math.max(0, d + u.duration - t), d, m),
                        1 === v && f(a)
                    }
            }
            b.State.isTicking && T(c)
        }
        function f(e, t) {
            if (!b.State.calls[e])
                return !1;
            for (var i = b.State.calls[e][0], r = b.State.calls[e][1], a = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = i.length; c > u; u++) {
                var f = i[u].element;
                if (t || a.loop || ("none" === a.display && x.setPropertyValue(f, "display", a.display),
                "hidden" === a.visibility && x.setPropertyValue(f, "visibility", a.visibility)),
                a.loop !== !0 && (h.queue(f)[1] === n || !/\.velocityQueueEntryFlag/i.test(h.queue(f)[1])) && o(f)) {
                    o(f).isAnimating = !1,
                    o(f).rootPropertyValueCache = {};
                    var d = !1;
                    h.each(x.Lists.transforms3D, function(e, t) {
                        var i = /^scale/.test(t) ? 1 : 0
                          , r = o(f).transformCache[t];
                        o(f).transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(r) && (d = !0,
                        delete o(f).transformCache[t])
                    }),
                    a.mobileHA && (d = !0,
                    delete o(f).transformCache.translate3d),
                    d && x.flushTransformCache(f),
                    x.Values.removeClass(f, "velocity-animating")
                }
                if (!t && a.complete && !a.loop && u === c - 1)
                    try {
                        a.complete.call(r, r)
                    } catch (p) {
                        setTimeout(function() {
                            throw p
                        }, 1)
                    }
                s && a.loop !== !0 && s(r),
                o(f) && a.loop === !0 && !t && (h.each(o(f).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0,
                    t.startValue = 360),
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0,
                    t.startValue = 100)
                }),
                b(f, "reverse", {
                    loop: !0,
                    delay: a.delay
                })),
                a.queue !== !1 && h.dequeue(f, a.queue)
            }
            b.State.calls[e] = !1;
            for (var g = 0, m = b.State.calls.length; m > g; g++)
                if (b.State.calls[g] !== !1) {
                    l = !0;
                    break
                }
            l === !1 && (b.State.isTicking = !1,
            delete b.State.calls,
            b.State.calls = [])
        }
        var h, d = function() {
            if (i.documentMode)
                return i.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = i.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->",
                t.getElementsByTagName("span").length)
                    return t = null ,
                    e
            }
            return n
        }(), p = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                var i, n = (new Date).getTime();
                return i = Math.max(0, 16 - (n - e)),
                e = n + i,
                setTimeout(function() {
                    t(n + i)
                }, i)
            }
        }(), g = {
            isString: function(e) {
                return "string" == typeof e
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ,
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            },
            isNode: function(e) {
                return e && e.nodeType
            },
            isNodeList: function(e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            },
            isWrapped: function(e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            },
            isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement
            },
            isEmptyObject: function(e) {
                for (var t in e)
                    return !1;
                return !0
            }
        }, m = !1;
        if (e.fn && e.fn.jquery ? (h = e,
        m = !0) : h = t.Velocity.Utilities,
        8 >= d && !m)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= d)
            return void (jQuery.fn.velocity = jQuery.fn.animate);
        var v = 400
          , y = "swing"
          , b = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: i.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null ,
                scrollPropertyLeft: null ,
                scrollPropertyTop: null ,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: h,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: v,
                easing: y,
                begin: n,
                complete: n,
                progress: n,
                display: n,
                visibility: n,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function(e) {
                h.data(e, "velocity", {
                    isSVG: g.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null ,
                    tweensContainer: null ,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null ,
            mock: !1,
            version: {
                major: 1,
                minor: 2,
                patch: 2
            },
            debug: !1
        };
        t.pageYOffset !== n ? (b.State.scrollAnchor = t,
        b.State.scrollPropertyLeft = "pageXOffset",
        b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body,
        b.State.scrollPropertyLeft = "scrollLeft",
        b.State.scrollPropertyTop = "scrollTop");
        var w = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }
            function t(t, i, n) {
                var r = {
                    x: t.x + n.dx * i,
                    v: t.v + n.dv * i,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: r.v,
                    dv: e(r)
                }
            }
            function i(i, n) {
                var r = {
                    dx: i.v,
                    dv: e(i)
                }
                  , a = t(i, .5 * n, r)
                  , o = t(i, .5 * n, a)
                  , s = t(i, n, o)
                  , l = 1 / 6 * (r.dx + 2 * (a.dx + o.dx) + s.dx)
                  , u = 1 / 6 * (r.dv + 2 * (a.dv + o.dv) + s.dv);
                return i.x = i.x + l * n,
                i.v = i.v + u * n,
                i
            }
            return function n(e, t, r) {
                var a, o, s, l = {
                    x: -1,
                    v: 0,
                    tension: null ,
                    friction: null
                }, u = [0], c = 0, f = 1e-4, h = .016;
                for (e = parseFloat(e) || 500,
                t = parseFloat(t) || 20,
                r = r || null ,
                l.tension = e,
                l.friction = t,
                a = null !== r,
                a ? (c = n(e, t),
                o = c / r * h) : o = h; s = i(s || l, o),
                u.push(1 + s.x),
                c += 16,
                Math.abs(s.x) > f && Math.abs(s.v) > f; )
                    ;
                return a ? function(e) {
                    return u[e * (u.length - 1) | 0]
                }
                : c
            }
        }();
        b.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        },
        h.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(e, t) {
            b.Easings[t[0]] = l.apply(null , t[1])
        });
        var x = b.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var i, n, r;
                    if (d)
                        for (i in x.Hooks.templates) {
                            n = x.Hooks.templates[i],
                            r = n[0].split(" ");
                            var a = n[1].match(x.RegEx.valueSplit);
                            "Color" === r[0] && (r.push(r.shift()),
                            a.push(a.shift()),
                            x.Hooks.templates[i] = [r.join(" "), a.join(" ")])
                        }
                    for (i in x.Hooks.templates) {
                        n = x.Hooks.templates[i],
                        r = n[0].split(" ");
                        for (var e in r) {
                            var o = i + r[e]
                              , s = e;
                            x.Hooks.registered[o] = [i, s]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]),
                    x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]),
                    t
                },
                extractValue: function(e, t) {
                    var i = x.Hooks.registered[e];
                    if (i) {
                        var n = i[0]
                          , r = i[1];
                        return t = x.Hooks.cleanRootPropertyValue(n, t),
                        t.toString().match(x.RegEx.valueSplit)[r]
                    }
                    return t
                },
                injectValue: function(e, t, i) {
                    var n = x.Hooks.registered[e];
                    if (n) {
                        var r, a, o = n[0], s = n[1];
                        return i = x.Hooks.cleanRootPropertyValue(o, i),
                        r = i.toString().match(x.RegEx.valueSplit),
                        r[s] = t,
                        a = r.join(" ")
                    }
                    return i
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, i) {
                        switch (e) {
                        case "name":
                            return "clip";
                        case "extract":
                            var n;
                            return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap),
                            n = n ? n[1].replace(/,(\s+)?/g, " ") : i),
                            n;
                        case "inject":
                            return "rect(" + i + ")"
                        }
                    },
                    blur: function(e, t, i) {
                        switch (e) {
                        case "name":
                            return b.State.isFirefox ? "filter" : "-webkit-filter";
                        case "extract":
                            var n = parseFloat(i);
                            if (!n && 0 !== n) {
                                var r = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                n = r ? r[1] : 0
                            }
                            return n;
                        case "inject":
                            return parseFloat(i) ? "blur(" + i + ")" : "none"
                        }
                    },
                    opacity: function(e, t, i) {
                        if (8 >= d)
                            switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                return i = n ? n[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1,
                                parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                            }
                        else
                            switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                                return i;
                            case "inject":
                                return i
                            }
                    }
                },
                register: function() {
                    9 >= d || b.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++)
                        !function() {
                            var t = x.Lists.transformsBase[e];
                            x.Normalizations.registered[t] = function(e, i, r) {
                                switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return o(i) === n || o(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : o(i).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var a = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                    case "translate":
                                        a = !/(%|px|em|rem|vw|vh|\d)$/i.test(r);
                                        break;
                                    case "scal":
                                    case "scale":
                                        b.State.isAndroid && o(i).transformCache[t] === n && 1 > r && (r = 1),
                                        a = !/(\d)$/i.test(r);
                                        break;
                                    case "skew":
                                        a = !/(deg|\d)$/i.test(r);
                                        break;
                                    case "rotate":
                                        a = !/(deg|\d)$/i.test(r)
                                    }
                                    return a || (o(i).transformCache[t] = "(" + r + ")"),
                                    o(i).transformCache[t]
                                }
                            }
                        }();
                    for (var e = 0; e < x.Lists.colors.length; e++)
                        !function() {
                            var t = x.Lists.colors[e];
                            x.Normalizations.registered[t] = function(e, i, r) {
                                switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var a;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(r))
                                        a = r;
                                    else {
                                        var o, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(r) ? o = s[r] !== n ? s[r] : s.black : x.RegEx.isHex.test(r) ? o = "rgb(" + x.Values.hexToRgb(r).join(" ") + ")" : /^rgba?\(/i.test(r) || (o = s.black),
                                        a = (o || r).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= d || 3 !== a.split(" ").length || (a += " 1"),
                                    a;
                                case "inject":
                                    return 8 >= d ? 4 === r.split(" ").length && (r = r.split(/\s+/).slice(0, 3).join(" ")) : 3 === r.split(" ").length && (r += " 1"),
                                    (8 >= d ? "rgb" : "rgba") + "(" + r.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (d || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"),
                    new RegExp("^(" + t + ")$","i").test(e)
                },
                prefixCheck: function(e) {
                    if (b.State.prefixMatches[e])
                        return [b.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                        var r;
                        if (r = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                            return e.toUpperCase()
                        }),
                        g.isString(b.State.prefixElement.style[r]))
                            return b.State.prefixMatches[e] = r,
                            [r, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t, i = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(i, function(e, t, i, n) {
                        return t + t + i + i + n + n
                    }),
                    t = n.exec(e),
                    t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)","gi"), " ")
                }
            },
            getPropertyValue: function(e, i, r, a) {
                function s(e, i) {
                    function r() {
                        u && x.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= d)
                        l = h.css(e, i);
                    else {
                        var u = !1;
                        if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(e, "display") && (u = !0,
                        x.setPropertyValue(e, "display", x.Values.getDisplayType(e))),
                        !a) {
                            if ("height" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var c = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return r(),
                                c
                            }
                            if ("width" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var f = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return r(),
                                f
                            }
                        }
                        var p;
                        p = o(e) === n ? t.getComputedStyle(e, null ) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null ),
                        "borderColor" === i && (i = "borderTopColor"),
                        l = 9 === d && "filter" === i ? p.getPropertyValue(i) : p[i],
                        ("" === l || null === l) && (l = e.style[i]),
                        r()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                        var g = s(e, "position");
                        ("fixed" === g || "absolute" === g && /top|left/i.test(i)) && (l = h(e).position()[i] + "px")
                    }
                    return l
                }
                var l;
                if (x.Hooks.registered[i]) {
                    var u = i
                      , c = x.Hooks.getRoot(u);
                    r === n && (r = x.getPropertyValue(e, x.Names.prefixCheck(c)[0])),
                    x.Normalizations.registered[c] && (r = x.Normalizations.registered[c]("extract", e, r)),
                    l = x.Hooks.extractValue(u, r)
                } else if (x.Normalizations.registered[i]) {
                    var f, p;
                    f = x.Normalizations.registered[i]("name", e),
                    "transform" !== f && (p = s(e, x.Names.prefixCheck(f)[0]),
                    x.Values.isCSSNullValue(p) && x.Hooks.templates[i] && (p = x.Hooks.templates[i][1])),
                    l = x.Normalizations.registered[i]("extract", e, p)
                }
                if (!/^[\d-]/.test(l))
                    if (o(e) && o(e).isSVG && x.Names.SVGAttribute(i))
                        if (/^(height|width)$/i.test(i))
                            try {
                                l = e.getBBox()[i]
                            } catch (g) {
                                l = 0
                            }
                        else
                            l = e.getAttribute(i);
                    else
                        l = s(e, x.Names.prefixCheck(i)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0),
                b.debug >= 2 && console.log("Get " + i + ": " + l),
                l
            },
            setPropertyValue: function(e, i, n, r, a) {
                var s = i;
                if ("scroll" === i)
                    a.container ? a.container["scroll" + a.direction] = n : "Left" === a.direction ? t.scrollTo(n, a.alternateValue) : t.scrollTo(a.alternateValue, n);
                else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", e))
                    x.Normalizations.registered[i]("inject", e, n),
                    s = "transform",
                    n = o(e).transformCache[i];
                else {
                    if (x.Hooks.registered[i]) {
                        var l = i
                          , u = x.Hooks.getRoot(i);
                        r = r || x.getPropertyValue(e, u),
                        n = x.Hooks.injectValue(l, n, r),
                        i = u
                    }
                    if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", e, n),
                    i = x.Normalizations.registered[i]("name", e)),
                    s = x.Names.prefixCheck(i)[0],
                    8 >= d)
                        try {
                            e.style[s] = n
                        } catch (c) {
                            b.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                        }
                    else
                        o(e) && o(e).isSVG && x.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[s] = n;
                    b.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                }
                return [s, n]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }
                var i = "";
                if ((d || b.State.isAndroid && !b.State.isChrome) && o(e).isSVG) {
                    var n = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    h.each(o(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"),
                        n[e] && (i += e + "(" + n[e].join(" ") + ") ",
                        delete n[e])
                    })
                } else {
                    var r, a;
                    h.each(o(e).transformCache, function(t) {
                        return r = o(e).transformCache[t],
                        "transformPerspective" === t ? (a = r,
                        !0) : (9 === d && "rotateZ" === t && (t = "rotate"),
                        void (i += t + r + " "))
                    }),
                    a && (i = "perspective" + a + " " + i)
                }
                x.setPropertyValue(e, "transform", i)
            }
        };
        x.Hooks.register(),
        x.Normalizations.register(),
        b.hook = function(e, t, i) {
            var r = n;
            return e = a(e),
            h.each(e, function(e, a) {
                if (o(a) === n && b.init(a),
                i === n)
                    r === n && (r = b.CSS.getPropertyValue(a, t));
                else {
                    var s = b.CSS.setPropertyValue(a, t, i);
                    "transform" === s[0] && b.CSS.flushTransformCache(a),
                    r = s
                }
            }),
            r
        }
        ;
        var C = function() {
            function e() {
                return s ? A.promise || null : l
            }
            function r() {
                function e(e) {
                    function f(e, t) {
                        var i = n
                          , r = n
                          , o = n;
                        return g.isArray(e) ? (i = e[0],
                        !g.isArray(e[1]) && /^[\d-]/.test(e[1]) || g.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? o = e[1] : (g.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || g.isArray(e[1])) && (r = t ? e[1] : u(e[1], s.duration),
                        e[2] !== n && (o = e[2]))) : i = e,
                        t || (r = r || s.easing),
                        g.isFunction(i) && (i = i.call(a, k, T)),
                        g.isFunction(o) && (o = o.call(a, k, T)),
                        [i || 0, r, o]
                    }
                    function d(e, t) {
                        var i, n;
                        return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return i = e,
                            ""
                        }),
                        i || (i = x.Values.getUnitType(e)),
                        [n, i]
                    }
                    function v() {
                        var e = {
                            myParent: a.parentNode || i.body,
                            position: x.getPropertyValue(a, "position"),
                            fontSize: x.getPropertyValue(a, "fontSize")
                        }
                          , n = e.position === F.lastPosition && e.myParent === F.lastParent
                          , r = e.fontSize === F.lastFontSize;
                        F.lastParent = e.myParent,
                        F.lastPosition = e.position,
                        F.lastFontSize = e.fontSize;
                        var s = 100
                          , l = {};
                        if (r && n)
                            l.emToPx = F.lastEmToPx,
                            l.percentToPxWidth = F.lastPercentToPxWidth,
                            l.percentToPxHeight = F.lastPercentToPxHeight;
                        else {
                            var u = o(a).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                            b.init(u),
                            e.myParent.appendChild(u),
                            h.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                b.CSS.setPropertyValue(u, t, "hidden")
                            }),
                            b.CSS.setPropertyValue(u, "position", e.position),
                            b.CSS.setPropertyValue(u, "fontSize", e.fontSize),
                            b.CSS.setPropertyValue(u, "boxSizing", "content-box"),
                            h.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                b.CSS.setPropertyValue(u, t, s + "%")
                            }),
                            b.CSS.setPropertyValue(u, "paddingLeft", s + "em"),
                            l.percentToPxWidth = F.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(u, "width", null , !0)) || 1) / s,
                            l.percentToPxHeight = F.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(u, "height", null , !0)) || 1) / s,
                            l.emToPx = F.lastEmToPx = (parseFloat(x.getPropertyValue(u, "paddingLeft")) || 1) / s,
                            e.myParent.removeChild(u)
                        }
                        return null === F.remToPx && (F.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16),
                        null === F.vwToPx && (F.vwToPx = parseFloat(t.innerWidth) / 100,
                        F.vhToPx = parseFloat(t.innerHeight) / 100),
                        l.remToPx = F.remToPx,
                        l.vwToPx = F.vwToPx,
                        l.vhToPx = F.vhToPx,
                        b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), a),
                        l
                    }
                    if (s.begin && 0 === k)
                        try {
                            s.begin.call(p, p)
                        } catch (w) {
                            setTimeout(function() {
                                throw w
                            }, 1)
                        }
                    if ("scroll" === _) {
                        var C, S, E, I = /^x$/i.test(s.axis) ? "Left" : "Top", P = parseFloat(s.offset) || 0;
                        s.container ? g.isWrapped(s.container) || g.isNode(s.container) ? (s.container = s.container[0] || s.container,
                        C = s.container["scroll" + I],
                        E = C + h(a).position()[I.toLowerCase()] + P) : s.container = null : (C = b.State.scrollAnchor[b.State["scrollProperty" + I]],
                        S = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === I ? "Top" : "Left")]],
                        E = h(a).offset()[I.toLowerCase()] + P),
                        l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: C,
                                currentValue: C,
                                endValue: E,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {
                                    container: s.container,
                                    direction: I,
                                    alternateValue: S
                                }
                            },
                            element: a
                        },
                        b.debug && console.log("tweensContainer (scroll): ", l.scroll, a)
                    } else if ("reverse" === _) {
                        if (!o(a).tweensContainer)
                            return void h.dequeue(a, s.queue);
                        "none" === o(a).opts.display && (o(a).opts.display = "auto"),
                        "hidden" === o(a).opts.visibility && (o(a).opts.visibility = "visible"),
                        o(a).opts.loop = !1,
                        o(a).opts.begin = null ,
                        o(a).opts.complete = null ,
                        y.easing || delete s.easing,
                        y.duration || delete s.duration,
                        s = h.extend({}, o(a).opts, s);
                        var D = h.extend(!0, {}, o(a).tweensContainer);
                        for (var O in D)
                            if ("element" !== O) {
                                var L = D[O].startValue;
                                D[O].startValue = D[O].currentValue = D[O].endValue,
                                D[O].endValue = L,
                                g.isEmptyObject(y) || (D[O].easing = s.easing),
                                b.debug && console.log("reverse tweensContainer (" + O + "): " + JSON.stringify(D[O]), a)
                            }
                        l = D
                    } else if ("start" === _) {
                        var D;
                        o(a).tweensContainer && o(a).isAnimating === !0 && (D = o(a).tweensContainer),
                        h.each(m, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var i = f(t, !0)
                                  , r = i[0]
                                  , a = i[1]
                                  , o = i[2];
                                if (x.RegEx.isHex.test(r)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(r), u = o ? x.Values.hexToRgb(o) : n, c = 0; c < s.length; c++) {
                                        var h = [l[c]];
                                        a && h.push(a),
                                        u !== n && h.push(u[c]),
                                        m[e + s[c]] = h
                                    }
                                    delete m[e]
                                }
                            }
                        });
                        for (var M in m) {
                            var R = f(m[M])
                              , W = R[0]
                              , H = R[1]
                              , j = R[2];
                            M = x.Names.camelCase(M);
                            var z = x.Hooks.getRoot(M)
                              , V = !1;
                            if (o(a).isSVG || "tween" === z || x.Names.prefixCheck(z)[1] !== !1 || x.Normalizations.registered[z] !== n) {
                                (s.display !== n && null !== s.display && "none" !== s.display || s.visibility !== n && "hidden" !== s.visibility) && /opacity|filter/.test(M) && !j && 0 !== W && (j = 0),
                                s._cacheValues && D && D[M] ? (j === n && (j = D[M].endValue + D[M].unitType),
                                V = o(a).rootPropertyValueCache[z]) : x.Hooks.registered[M] ? j === n ? (V = x.getPropertyValue(a, z),
                                j = x.getPropertyValue(a, M, V)) : V = x.Hooks.templates[z][1] : j === n && (j = x.getPropertyValue(a, M));
                                var B, q, Y, X = !1;
                                if (B = d(M, j),
                                j = B[0],
                                Y = B[1],
                                B = d(M, W),
                                W = B[0].replace(/^([+-\/*])=/, function(e, t) {
                                    return X = t,
                                    ""
                                }),
                                q = B[1],
                                j = parseFloat(j) || 0,
                                W = parseFloat(W) || 0,
                                "%" === q && (/^(fontSize|lineHeight)$/.test(M) ? (W /= 100,
                                q = "em") : /^scale/.test(M) ? (W /= 100,
                                q = "") : /(Red|Green|Blue)$/i.test(M) && (W = W / 100 * 255,
                                q = "")),
                                /[\/*]/.test(X))
                                    q = Y;
                                else if (Y !== q && 0 !== j)
                                    if (0 === W)
                                        q = Y;
                                    else {
                                        r = r || v();
                                        var $ = /margin|padding|left|right|width|text|word|letter/i.test(M) || /X$/.test(M) || "x" === M ? "x" : "y";
                                        switch (Y) {
                                        case "%":
                                            j *= "x" === $ ? r.percentToPxWidth : r.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            j *= r[Y + "ToPx"]
                                        }
                                        switch (q) {
                                        case "%":
                                            j *= 1 / ("x" === $ ? r.percentToPxWidth : r.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            j *= 1 / r[q + "ToPx"]
                                        }
                                    }
                                switch (X) {
                                case "+":
                                    W = j + W;
                                    break;
                                case "-":
                                    W = j - W;
                                    break;
                                case "*":
                                    W = j * W;
                                    break;
                                case "/":
                                    W = j / W
                                }
                                l[M] = {
                                    rootPropertyValue: V,
                                    startValue: j,
                                    currentValue: j,
                                    endValue: W,
                                    unitType: q,
                                    easing: H
                                },
                                b.debug && console.log("tweensContainer (" + M + "): " + JSON.stringify(l[M]), a)
                            } else
                                b.debug && console.log("Skipping [" + z + "] due to a lack of browser support.")
                        }
                        l.element = a
                    }
                    l.element && (x.Values.addClass(a, "velocity-animating"),
                    N.push(l),
                    "" === s.queue && (o(a).tweensContainer = l,
                    o(a).opts = s),
                    o(a).isAnimating = !0,
                    k === T - 1 ? (b.State.calls.push([N, p, s, null , A.resolver]),
                    b.State.isTicking === !1 && (b.State.isTicking = !0,
                    c())) : k++)
                }
                var r, a = this, s = h.extend({}, b.defaults, y), l = {};
                switch (o(a) === n && b.init(a),
                parseFloat(s.delay) && s.queue !== !1 && h.queue(a, s.queue, function(e) {
                    b.velocityQueueEntryFlag = !0,
                    o(a).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(s.delay)),
                        next: e
                    }
                }),
                s.duration.toString().toLowerCase()) {
                case "fast":
                    s.duration = 200;
                    break;
                case "normal":
                    s.duration = v;
                    break;
                case "slow":
                    s.duration = 600;
                    break;
                default:
                    s.duration = parseFloat(s.duration) || 1
                }
                b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1,
                s.delay *= parseFloat(b.mock) || 1)),
                s.easing = u(s.easing, s.duration),
                s.begin && !g.isFunction(s.begin) && (s.begin = null ),
                s.progress && !g.isFunction(s.progress) && (s.progress = null ),
                s.complete && !g.isFunction(s.complete) && (s.complete = null ),
                s.display !== n && null !== s.display && (s.display = s.display.toString().toLowerCase(),
                "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(a))),
                s.visibility !== n && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()),
                s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread,
                s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : h.queue(a, s.queue, function(t, i) {
                    return i === !0 ? (A.promise && A.resolver(p),
                    !0) : (b.velocityQueueEntryFlag = !0,
                    void e(t))
                }),
                "" !== s.queue && "fx" !== s.queue || "inprogress" === h.queue(a)[0] || h.dequeue(a)
            }
            var s, l, d, p, m, y, w = arguments[0] && (arguments[0].p || h.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || g.isString(arguments[0].properties));
            if (g.isWrapped(this) ? (s = !1,
            d = 0,
            p = this,
            l = this) : (s = !0,
            d = 1,
            p = w ? arguments[0].elements || arguments[0].e : arguments[0]),
            p = a(p)) {
                w ? (m = arguments[0].properties || arguments[0].p,
                y = arguments[0].options || arguments[0].o) : (m = arguments[d],
                y = arguments[d + 1]);
                var T = p.length
                  , k = 0;
                if (!/^(stop|finish)$/i.test(m) && !h.isPlainObject(y)) {
                    var S = d + 1;
                    y = {};
                    for (var E = S; E < arguments.length; E++)
                        g.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? g.isString(arguments[E]) || g.isArray(arguments[E]) ? y.easing = arguments[E] : g.isFunction(arguments[E]) && (y.complete = arguments[E]) : y.duration = arguments[E]
                }
                var A = {
                    promise: null ,
                    resolver: null ,
                    rejecter: null
                };
                s && b.Promise && (A.promise = new b.Promise(function(e, t) {
                    A.resolver = e,
                    A.rejecter = t
                }
                ));
                var _;
                switch (m) {
                case "scroll":
                    _ = "scroll";
                    break;
                case "reverse":
                    _ = "reverse";
                    break;
                case "finish":
                case "stop":
                    h.each(p, function(e, t) {
                        o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout),
                        o(t).delayTimer.next && o(t).delayTimer.next(),
                        delete o(t).delayTimer)
                    });
                    var I = [];
                    return h.each(b.State.calls, function(e, t) {
                        t && h.each(t[1], function(i, r) {
                            var a = y === n ? "" : y;
                            return a === !0 || t[2].queue === a || y === n && t[2].queue === !1 ? void h.each(p, function(i, n) {
                                n === r && ((y === !0 || g.isString(y)) && (h.each(h.queue(n, g.isString(y) ? y : ""), function(e, t) {
                                    g.isFunction(t) && t(null , !0)
                                }),
                                h.queue(n, g.isString(y) ? y : "", [])),
                                "stop" === m ? (o(n) && o(n).tweensContainer && a !== !1 && h.each(o(n).tweensContainer, function(e, t) {
                                    t.endValue = t.currentValue
                                }),
                                I.push(e)) : "finish" === m && (t[2].duration = 1))
                            }) : !0
                        })
                    }),
                    "stop" === m && (h.each(I, function(e, t) {
                        f(t, !0)
                    }),
                    A.promise && A.resolver(p)),
                    e();
                default:
                    if (!h.isPlainObject(m) || g.isEmptyObject(m)) {
                        if (g.isString(m) && b.Redirects[m]) {
                            var P = h.extend({}, y)
                              , D = P.duration
                              , O = P.delay || 0;
                            return P.backwards === !0 && (p = h.extend(!0, [], p).reverse()),
                            h.each(p, function(e, t) {
                                parseFloat(P.stagger) ? P.delay = O + parseFloat(P.stagger) * e : g.isFunction(P.stagger) && (P.delay = O + P.stagger.call(t, e, T)),
                                P.drag && (P.duration = parseFloat(D) || (/^(callout|transition)/.test(m) ? 1e3 : v),
                                P.duration = Math.max(P.duration * (P.backwards ? 1 - e / T : (e + 1) / T), .75 * P.duration, 200)),
                                b.Redirects[m].call(t, t, P || {}, e, T, p, A.promise ? A : n)
                            }),
                            e()
                        }
                        var L = "Velocity: First argument (" + m + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return A.promise ? A.rejecter(new Error(L)) : console.log(L),
                        e()
                    }
                    _ = "start"
                }
                var F = {
                    lastParent: null ,
                    lastPosition: null ,
                    lastFontSize: null ,
                    lastPercentToPxWidth: null ,
                    lastPercentToPxHeight: null ,
                    lastEmToPx: null ,
                    remToPx: null ,
                    vwToPx: null ,
                    vhToPx: null
                }
                  , N = [];
                h.each(p, function(e, t) {
                    g.isNode(t) && r.call(t)
                });
                var M, P = h.extend({}, b.defaults, y);
                if (P.loop = parseInt(P.loop),
                M = 2 * P.loop - 1,
                P.loop)
                    for (var R = 0; M > R; R++) {
                        var W = {
                            delay: P.delay,
                            progress: P.progress
                        };
                        R === M - 1 && (W.display = P.display,
                        W.visibility = P.visibility,
                        W.complete = P.complete),
                        C(p, "reverse", W)
                    }
                return e()
            }
        }
        ;
        b = h.extend(C, b),
        b.animate = C;
        var T = t.requestAnimationFrame || p;
        return b.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
            i.hidden ? (T = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }
            ,
            c()) : T = t.requestAnimationFrame || p
        }),
        e.Velocity = b,
        e !== t && (e.fn.velocity = C,
        e.fn.velocity.defaults = b.defaults),
        h.each(["Down", "Up"], function(e, t) {
            b.Redirects["slide" + t] = function(e, i, r, a, o, s) {
                var l = h.extend({}, i)
                  , u = l.begin
                  , c = l.complete
                  , f = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }
                  , d = {};
                l.display === n && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"),
                l.begin = function() {
                    u && u.call(o, o);
                    for (var i in f) {
                        d[i] = e.style[i];
                        var n = b.CSS.getPropertyValue(e, i);
                        f[i] = "Down" === t ? [n, 0] : [0, n]
                    }
                    d.overflow = e.style.overflow,
                    e.style.overflow = "hidden"
                }
                ,
                l.complete = function() {
                    for (var t in d)
                        e.style[t] = d[t];
                    c && c.call(o, o),
                    s && s.resolver(o)
                }
                ,
                b(e, f, l)
            }
        }),
        h.each(["In", "Out"], function(e, t) {
            b.Redirects["fade" + t] = function(e, i, r, a, o, s) {
                var l = h.extend({}, i)
                  , u = {
                    opacity: "In" === t ? 1 : 0
                }
                  , c = l.complete;
                l.complete = r !== a - 1 ? l.begin = null : function() {
                    c && c.call(o, o),
                    s && s.resolver(o)
                }
                ,
                l.display === n && (l.display = "In" === t ? "auto" : "none"),
                b(this, u, l)
            }
        }),
        b
    }(window.jQuery || window.Zepto || window, window, document)
})),
function() {
    "use strict";
    var e = this
      , t = e.Chart
      , i = function(e) {
        this.canvas = e.canvas,
        this.ctx = e;
        var i = function(e, t) {
            return e["offset" + t] ? e["offset" + t] : document.defaultView.getComputedStyle(e).getPropertyValue(t)
        }
          , r = this.width = i(e.canvas, "Width") || e.canvas.width
          , a = this.height = i(e.canvas, "Height") || e.canvas.height;
        return r = this.width = e.canvas.width,
        a = this.height = e.canvas.height,
        this.aspectRatio = this.width / this.height,
        n.retinaScale(this),
        this
    }
    ;
    i.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null ,
            scaleStepWidth: null ,
            scaleStartValue: null ,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            customTooltips: !1,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipTitleTemplate: "<%= label%>",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            segmentColorDefault: ["#A6CEE3", "#1F78B4", "#B2DF8A", "#33A02C", "#FB9A99", "#E31A1C", "#FDBF6F", "#FF7F00", "#CAB2D6", "#6A3D9A", "#B4B482", "#B15928"],
            segmentHighlightColorDefaults: ["#CEF6FF", "#47A0DC", "#DAFFB2", "#5BC854", "#FFC2C1", "#FF4244", "#FFE797", "#FFA728", "#F2DAFE", "#9265C2", "#DCDCAA", "#D98150"],
            onAnimationProgress: function() {},
            onAnimationComplete: function() {}
        }
    },
    i.types = {};
    var n = i.helpers = {}
      , r = n.each = function(e, t, i) {
        var n = Array.prototype.slice.call(arguments, 3);
        if (e)
            if (e.length === +e.length) {
                var r;
                for (r = 0; r < e.length; r++)
                    t.apply(i, [e[r], r].concat(n))
            } else
                for (var a in e)
                    t.apply(i, [e[a], a].concat(n))
    }
      , a = n.clone = function(e) {
        var t = {};
        return r(e, function(i, n) {
            e.hasOwnProperty(n) && (t[n] = i)
        }),
        t
    }
      , o = n.extend = function(e) {
        return r(Array.prototype.slice.call(arguments, 1), function(t) {
            r(t, function(i, n) {
                t.hasOwnProperty(n) && (e[n] = i)
            })
        }),
        e
    }
      , s = n.merge = function(e, t) {
        var i = Array.prototype.slice.call(arguments, 0);
        return i.unshift({}),
        o.apply(null , i)
    }
      , l = n.indexOf = function(e, t) {
        if (Array.prototype.indexOf)
            return e.indexOf(t);
        for (var i = 0; i < e.length; i++)
            if (e[i] === t)
                return i;
        return -1
    }
      , h = (n.where = function(e, t) {
        var i = [];
        return n.each(e, function(e) {
            t(e) && i.push(e)
        }),
        i
    }
    ,
    n.findNextWhere = function(e, t, i) {
        i || (i = -1);
        for (var n = i + 1; n < e.length; n++) {
            var r = e[n];
            if (t(r))
                return r
        }
    }
    ,
    n.findPreviousWhere = function(e, t, i) {
        i || (i = e.length);
        for (var n = i - 1; n >= 0; n--) {
            var r = e[n];
            if (t(r))
                return r
        }
    }
    ,
    n.inherits = function(e) {
        var t = this
          , i = e && e.hasOwnProperty("constructor") ? e.constructor : function() {
            return t.apply(this, arguments)
        }
          , n = function() {
            this.constructor = i
        }
        ;
        return n.prototype = t.prototype,
        i.prototype = new n,
        i.extend = h,
        e && o(i.prototype, e),
        i.__super__ = t.prototype,
        i
    }
    )
      , d = n.noop = function() {}
      , p = n.uid = function() {
        var e = 0;
        return function() {
            return "chart-" + e++
        }
    }()
      , g = n.warn = function(e) {
        window.console && "function" == typeof window.console.warn && console.warn(e)
    }
      , m = n.amd = "function" == typeof define && define.amd
      , v = n.isNumber = function(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }
      , y = n.max = function(e) {
        return Math.max.apply(Math, e)
    }
      , b = n.min = function(e) {
        return Math.min.apply(Math, e)
    }
      , x = (n.cap = function(e, t, i) {
        if (v(t)) {
            if (e > t)
                return t
        } else if (v(i) && i > e)
            return i;
        return e
    }
    ,
    n.getDecimalPlaces = function(e) {
        if (e % 1 !== 0 && v(e)) {
            var t = e.toString();
            if (t.indexOf("e-") < 0)
                return t.split(".")[1].length;
            if (t.indexOf(".") < 0)
                return parseInt(t.split("e-")[1]);
            var i = t.split(".")[1].split("e-");
            return i[0].length + parseInt(i[1])
        }
        return 0
    }
    )
      , C = n.radians = function(e) {
        return e * (Math.PI / 180)
    }
      , k = (n.getAngleFromPoint = function(e, t) {
        var i = t.x - e.x
          , n = t.y - e.y
          , r = Math.sqrt(i * i + n * n)
          , a = 2 * Math.PI + Math.atan2(n, i);
        return 0 > i && 0 > n && (a += 2 * Math.PI),
        {
            angle: a,
            distance: r
        }
    }
    ,
    n.aliasPixel = function(e) {
        return e % 2 === 0 ? 0 : .5
    }
    )
      , E = (n.splineCurve = function(e, t, i, n) {
        var r = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
          , a = Math.sqrt(Math.pow(i.x - t.x, 2) + Math.pow(i.y - t.y, 2))
          , o = n * r / (r + a)
          , s = n * a / (r + a);
        return {
            inner: {
                x: t.x - o * (i.x - e.x),
                y: t.y - o * (i.y - e.y)
            },
            outer: {
                x: t.x + s * (i.x - e.x),
                y: t.y + s * (i.y - e.y)
            }
        }
    }
    ,
    n.calculateOrderOfMagnitude = function(e) {
        return Math.floor(Math.log(e) / Math.LN10)
    }
    )
      , _ = (n.calculateScaleRange = function(e, t, i, n, a) {
        var o = 2
          , s = Math.floor(t / (1.5 * i))
          , l = o >= s
          , u = [];
        r(e, function(e) {
            null == e || u.push(e)
        });
        var c = b(u)
          , f = y(u);
        f === c && (f += .5,
        c >= .5 && !n ? c -= .5 : f += .5);
        for (var h = Math.abs(f - c), d = E(h), p = Math.ceil(f / (1 * Math.pow(10, d))) * Math.pow(10, d), g = n ? 0 : Math.floor(c / (1 * Math.pow(10, d))) * Math.pow(10, d), m = p - g, v = Math.pow(10, d), w = Math.round(m / v); (w > s || s > 2 * w) && !l; )
            if (w > s)
                v *= 2,
                w = Math.round(m / v),
                w % 1 !== 0 && (l = !0);
            else if (a && d >= 0) {
                if (v / 2 % 1 !== 0)
                    break;
                v /= 2,
                w = Math.round(m / v)
            } else
                v /= 2,
                w = Math.round(m / v);
        return l && (w = o,
        v = m / w),
        {
            steps: w,
            stepValue: v,
            min: g,
            max: g + w * v
        }
    }
    ,
    n.template = function(e, t) {
        function n(e, t) {
            var n = /\W/.test(e) ? new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : i[e] = i[e];
            return t ? n(t) : n
        }
        if (e instanceof Function)
            return e(t);
        var i = {};
        return n(e, t)
    }
    )
      , P = (n.generateLabels = function(e, t, i, n) {
        var a = new Array(t);
        return e && r(a, function(t, r) {
            a[r] = _(e, {
                value: i + n * (r + 1)
            })
        }),
        a
    }
    ,
    n.easingEffects = {
        linear: function(e) {
            return e
        },
        easeInQuad: function(e) {
            return e * e
        },
        easeOutQuad: function(e) {
            return -1 * e * (e - 2)
        },
        easeInOutQuad: function(e) {
            return (e /= .5) < 1 ? .5 * e * e : -0.5 * (--e * (e - 2) - 1)
        },
        easeInCubic: function(e) {
            return e * e * e
        },
        easeOutCubic: function(e) {
            return 1 * ((e = e / 1 - 1) * e * e + 1)
        },
        easeInOutCubic: function(e) {
            return (e /= .5) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        },
        easeInQuart: function(e) {
            return e * e * e * e
        },
        easeOutQuart: function(e) {
            return -1 * ((e = e / 1 - 1) * e * e * e - 1)
        },
        easeInOutQuart: function(e) {
            return (e /= .5) < 1 ? .5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2)
        },
        easeInQuint: function(e) {
            return 1 * (e /= 1) * e * e * e * e
        },
        easeOutQuint: function(e) {
            return 1 * ((e = e / 1 - 1) * e * e * e * e + 1)
        },
        easeInOutQuint: function(e) {
            return (e /= .5) < 1 ? .5 * e * e * e * e * e : .5 * ((e -= 2) * e * e * e * e + 2)
        },
        easeInSine: function(e) {
            return -1 * Math.cos(e / 1 * (Math.PI / 2)) + 1
        },
        easeOutSine: function(e) {
            return 1 * Math.sin(e / 1 * (Math.PI / 2))
        },
        easeInOutSine: function(e) {
            return -0.5 * (Math.cos(Math.PI * e / 1) - 1)
        },
        easeInExpo: function(e) {
            return 0 === e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1))
        },
        easeOutExpo: function(e) {
            return 1 === e ? 1 : 1 * (-Math.pow(2, -10 * e / 1) + 1)
        },
        easeInOutExpo: function(e) {
            return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
        },
        easeInCirc: function(e) {
            return e >= 1 ? e : -1 * (Math.sqrt(1 - (e /= 1) * e) - 1)
        },
        easeOutCirc: function(e) {
            return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e)
        },
        easeInOutCirc: function(e) {
            return (e /= .5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        },
        easeInElastic: function(e) {
            var t = 1.70158
              , i = 0
              , n = 1;
            return 0 === e ? 0 : 1 == (e /= 1) ? 1 : (i || (i = .3),
            n < Math.abs(1) ? (n = 1,
            t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n),
            -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / i)))
        },
        easeOutElastic: function(e) {
            var t = 1.70158
              , i = 0
              , n = 1;
            return 0 === e ? 0 : 1 == (e /= 1) ? 1 : (i || (i = .3),
            n < Math.abs(1) ? (n = 1,
            t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n),
            n * Math.pow(2, -10 * e) * Math.sin((1 * e - t) * (2 * Math.PI) / i) + 1)
        },
        easeInOutElastic: function(e) {
            var t = 1.70158
              , i = 0
              , n = 1;
            return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (i || (i = 1 * (.3 * 1.5)),
            n < Math.abs(1) ? (n = 1,
            t = i / 4) : t = i / (2 * Math.PI) * Math.asin(1 / n),
            1 > e ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / i)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((1 * e - t) * (2 * Math.PI) / i) * .5 + 1)
        },
        easeInBack: function(e) {
            var t = 1.70158;
            return 1 * (e /= 1) * e * ((t + 1) * e - t)
        },
        easeOutBack: function(e) {
            var t = 1.70158;
            return 1 * ((e = e / 1 - 1) * e * ((t + 1) * e + t) + 1)
        },
        easeInOutBack: function(e) {
            var t = 1.70158;
            return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        },
        easeInBounce: function(e) {
            return 1 - P.easeOutBounce(1 - e)
        },
        easeOutBounce: function(e) {
            return (e /= 1) < 1 / 2.75 ? 1 * (7.5625 * e * e) : 2 / 2.75 > e ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        },
        easeInOutBounce: function(e) {
            return .5 > e ? .5 * P.easeInBounce(2 * e) : .5 * P.easeOutBounce(2 * e - 1) + .5
        }
    })
      , D = n.requestAnimFrame = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
            return window.setTimeout(e, 1e3 / 60)
        }
    }()
      , N = (n.cancelAnimFrame = function() {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(e) {
            return window.clearTimeout(e, 1e3 / 60)
        }
    }(),
    n.animationLoop = function(e, t, i, n, r, a) {
        var o = 0
          , s = P[i] || P.linear
          , l = function() {
            o++;
            var i = o / t
              , u = s(i);
            e.call(a, u, i, o),
            n.call(a, u, i),
            t > o ? a.animationFrame = D(l) : r.apply(a)
        }
        ;
        D(l)
    }
    ,
    n.getRelativePosition = function(e) {
        var t, i, n = e.originalEvent || e, r = e.currentTarget || e.srcElement, a = r.getBoundingClientRect();
        return n.touches ? (t = n.touches[0].clientX - a.left,
        i = n.touches[0].clientY - a.top) : (t = n.clientX - a.left,
        i = n.clientY - a.top),
        {
            x: t,
            y: i
        }
    }
    ,
    n.addEvent = function(e, t, i) {
        e.addEventListener ? e.addEventListener(t, i) : e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i
    }
    )
      , M = n.removeEvent = function(e, t, i) {
        e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent ? e.detachEvent("on" + t, i) : e["on" + t] = d
    }
      , W = (n.bindEvents = function(e, t, i) {
        e.events || (e.events = {}),
        r(t, function(t) {
            e.events[t] = function() {
                i.apply(e, arguments)
            }
            ,
            N(e.chart.canvas, t, e.events[t])
        })
    }
    ,
    n.unbindEvents = function(e, t) {
        r(t, function(t, i) {
            M(e.chart.canvas, i, t)
        })
    }
    )
      , H = n.getMaximumWidth = function(e) {
        var t = e.parentNode
          , i = parseInt(z(t, "padding-left")) + parseInt(z(t, "padding-right"));
        return t.clientWidth - i
    }
      , j = n.getMaximumHeight = function(e) {
        var t = e.parentNode
          , i = parseInt(z(t, "padding-bottom")) + parseInt(z(t, "padding-top"));
        return t.clientHeight - i
    }
      , z = n.getStyle = function(e, t) {
        return e.currentStyle ? e.currentStyle[t] : document.defaultView.getComputedStyle(e, null ).getPropertyValue(t)
    }
      , B = (n.getMaximumSize = n.getMaximumWidth,
    n.retinaScale = function(e) {
        var t = e.ctx
          , i = e.canvas.width
          , n = e.canvas.height;
        window.devicePixelRatio && (t.canvas.style.width = i + "px",
        t.canvas.style.height = n + "px",
        t.canvas.height = n * window.devicePixelRatio,
        t.canvas.width = i * window.devicePixelRatio,
        t.scale(window.devicePixelRatio, window.devicePixelRatio))
    }
    )
      , q = n.clear = function(e) {
        e.ctx.clearRect(0, 0, e.width, e.height)
    }
      , Y = n.fontString = function(e, t, i) {
        return t + " " + e + "px " + i
    }
      , X = n.longestText = function(e, t, i) {
        e.font = t;
        var n = 0;
        return r(i, function(t) {
            var i = e.measureText(t).width;
            n = i > n ? i : n
        }),
        n
    }
      , $ = n.drawRoundedRectangle = function(e, t, i, n, r, a) {
        e.beginPath(),
        e.moveTo(t + a, i),
        e.lineTo(t + n - a, i),
        e.quadraticCurveTo(t + n, i, t + n, i + a),
        e.lineTo(t + n, i + r - a),
        e.quadraticCurveTo(t + n, i + r, t + n - a, i + r),
        e.lineTo(t + a, i + r),
        e.quadraticCurveTo(t, i + r, t, i + r - a),
        e.lineTo(t, i + a),
        e.quadraticCurveTo(t, i, t + a, i),
        e.closePath()
    }
    ;
    i.instances = {},
    i.Type = function(e, t, n) {
        this.options = t,
        this.chart = n,
        this.id = p(),
        i.instances[this.id] = this,
        t.responsive && this.resize(),
        this.initialize.call(this, e)
    }
    ,
    o(i.Type.prototype, {
        initialize: function() {
            return this
        },
        clear: function() {
            return q(this.chart),
            this
        },
        stop: function() {
            return i.animationService.cancelAnimation(this),
            this
        },
        resize: function(e) {
            this.stop();
            var t = this.chart.canvas
              , i = H(this.chart.canvas)
              , n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : j(this.chart.canvas);
            return t.width = this.chart.width = i,
            t.height = this.chart.height = n,
            B(this.chart),
            "function" == typeof e && e.apply(this, Array.prototype.slice.call(arguments, 1)),
            this
        },
        reflow: d,
        render: function(e) {
            if (e && this.reflow(),
            this.options.animation && !e) {
                var t = new i.Animation;
                t.numSteps = this.options.animationSteps,
                t.easing = this.options.animationEasing,
                t.render = function(e, t) {
                    var i = n.easingEffects[t.easing]
                      , r = t.currentStep / t.numSteps
                      , a = i(r);
                    e.draw(a, r, t.currentStep)
                }
                ,
                t.onAnimationProgress = this.options.onAnimationProgress,
                t.onAnimationComplete = this.options.onAnimationComplete,
                i.animationService.addAnimation(this, t)
            } else
                this.draw(),
                this.options.onAnimationComplete.call(this);
            return this
        },
        generateLegend: function() {
            return _(this.options.legendTemplate, this)
        },
        destroy: function() {
            this.clear(),
            W(this, this.events);
            var e = this.chart.canvas;
            e.width = this.chart.width,
            e.height = this.chart.height,
            e.style.removeProperty ? (e.style.removeProperty("width"),
            e.style.removeProperty("height")) : (e.style.removeAttribute("width"),
            e.style.removeAttribute("height")),
            delete i.instances[this.id]
        },
        showTooltip: function(e, t) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var a = function(e) {
                var t = !1;
                return e.length !== this.activeElements.length ? t = !0 : (r(e, function(e, i) {
                    e !== this.activeElements[i] && (t = !0)
                }, this),
                t)
            }
            .call(this, e);
            if (a || t) {
                if (this.activeElements = e,
                this.draw(),
                this.options.customTooltips && this.options.customTooltips(!1),
                e.length > 0)
                    if (this.datasets && this.datasets.length > 1) {
                        for (var o, s, u = this.datasets.length - 1; u >= 0 && (o = this.datasets[u].points || this.datasets[u].bars || this.datasets[u].segments,
                        s = l(o, e[0]),
                        -1 === s); u--)
                            ;
                        var c = []
                          , f = []
                          , h = function(e) {
                            var i, o, l, u, h, t = [], r = [], a = [];
                            return n.each(this.datasets, function(e) {
                                i = e.points || e.bars || e.segments,
                                i[s] && i[s].hasValue() && t.push(i[s])
                            }),
                            n.each(t, function(e) {
                                r.push(e.x),
                                a.push(e.y),
                                c.push(n.template(this.options.multiTooltipTemplate, e)),
                                f.push({
                                    fill: e._saved.fillColor || e.fillColor,
                                    stroke: e._saved.strokeColor || e.strokeColor
                                })
                            }, this),
                            h = b(a),
                            l = y(a),
                            u = b(r),
                            o = y(r),
                            {
                                x: u > this.chart.width / 2 ? u : o,
                                y: (h + l) / 2
                            }
                        }
                        .call(this, s);
                        new i.MultiTooltip({
                            x: h.x,
                            y: h.y,
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            xOffset: this.options.tooltipXOffset,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            titleTextColor: this.options.tooltipTitleFontColor,
                            titleFontFamily: this.options.tooltipTitleFontFamily,
                            titleFontStyle: this.options.tooltipTitleFontStyle,
                            titleFontSize: this.options.tooltipTitleFontSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            labels: c,
                            legendColors: f,
                            legendColorBackground: this.options.multiTooltipKeyBackground,
                            title: _(this.options.tooltipTitleTemplate, e[0]),
                            chart: this.chart,
                            ctx: this.chart.ctx,
                            custom: this.options.customTooltips
                        }).draw()
                    } else
                        r(e, function(e) {
                            var t = e.tooltipPosition();
                            new i.Tooltip({
                                x: Math.round(t.x),
                                y: Math.round(t.y),
                                xPadding: this.options.tooltipXPadding,
                                yPadding: this.options.tooltipYPadding,
                                fillColor: this.options.tooltipFillColor,
                                textColor: this.options.tooltipFontColor,
                                fontFamily: this.options.tooltipFontFamily,
                                fontStyle: this.options.tooltipFontStyle,
                                fontSize: this.options.tooltipFontSize,
                                caretHeight: this.options.tooltipCaretSize,
                                cornerRadius: this.options.tooltipCornerRadius,
                                text: _(this.options.tooltipTemplate, e),
                                chart: this.chart,
                                custom: this.options.customTooltips
                            }).draw()
                        }, this);
                return this
            }
        },
        toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }),
    i.Type.extend = function(e) {
        var t = this
          , n = function() {
            return t.apply(this, arguments)
        }
        ;
        if (n.prototype = a(t.prototype),
        o(n.prototype, e),
        n.extend = i.Type.extend,
        e.name || t.prototype.name) {
            var r = e.name || t.prototype.name
              , l = i.defaults[t.prototype.name] ? a(i.defaults[t.prototype.name]) : {};
            i.defaults[r] = o(l, e.defaults),
            i.types[r] = n,
            i.prototype[r] = function(e, t) {
                var a = s(i.defaults.global, i.defaults[r], t || {});
                return new n(e,a,this)
            }
        } else
            g("Name not provided for this chart, so it hasn't been registered");
        return t
    }
    ,
    i.Element = function(e) {
        o(this, e),
        this.initialize.apply(this, arguments),
        this.save()
    }
    ,
    o(i.Element.prototype, {
        initialize: function() {},
        restore: function(e) {
            return e ? r(e, function(e) {
                this[e] = this._saved[e]
            }, this) : o(this, this._saved),
            this
        },
        save: function() {
            return this._saved = a(this),
            delete this._saved._saved,
            this
        },
        update: function(e) {
            return r(e, function(e, t) {
                this._saved[t] = this[t],
                this[t] = e
            }, this),
            this
        },
        transition: function(e, t) {
            return r(e, function(e, i) {
                this[i] = (e - this._saved[i]) * t + this._saved[i]
            }, this),
            this
        },
        tooltipPosition: function() {
            return {
                x: this.x,
                y: this.y
            }
        },
        hasValue: function() {
            return v(this.value)
        }
    }),
    i.Element.extend = h,
    i.Point = i.Element.extend({
        display: !0,
        inRange: function(e, t) {
            var i = this.hitDetectionRadius + this.radius;
            return Math.pow(e - this.x, 2) + Math.pow(t - this.y, 2) < Math.pow(i, 2)
        },
        draw: function() {
            if (this.display) {
                var e = this.ctx;
                e.beginPath(),
                e.arc(this.x, this.y, this.radius, 0, 2 * Math.PI),
                e.closePath(),
                e.strokeStyle = this.strokeColor,
                e.lineWidth = this.strokeWidth,
                e.fillStyle = this.fillColor,
                e.fill(),
                e.stroke()
            }
        }
    }),
    i.Arc = i.Element.extend({
        inRange: function(e, t) {
            var i = n.getAngleFromPoint(this, {
                x: e,
                y: t
            })
              , r = i.angle % (2 * Math.PI)
              , a = (2 * Math.PI + this.startAngle) % (2 * Math.PI)
              , o = (2 * Math.PI + this.endAngle) % (2 * Math.PI) || 360
              , s = a > o ? o >= r || r >= a : r >= a && o >= r
              , l = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
            return s && l
        },
        tooltipPosition: function() {
            var e = this.startAngle + (this.endAngle - this.startAngle) / 2
              , t = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(e) * t,
                y: this.y + Math.sin(e) * t
            }
        },
        draw: function(e) {
            var i = this.ctx;
            i.beginPath(),
            i.arc(this.x, this.y, this.outerRadius < 0 ? 0 : this.outerRadius, this.startAngle, this.endAngle),
            i.arc(this.x, this.y, this.innerRadius < 0 ? 0 : this.innerRadius, this.endAngle, this.startAngle, !0),
            i.closePath(),
            i.strokeStyle = this.strokeColor,
            i.lineWidth = this.strokeWidth,
            i.fillStyle = this.fillColor,
            i.fill(),
            i.lineJoin = "bevel",
            this.showStroke && i.stroke()
        }
    }),
    i.Rectangle = i.Element.extend({
        draw: function() {
            var e = this.ctx
              , t = this.width / 2
              , i = this.x - t
              , n = this.x + t
              , r = this.base - (this.base - this.y)
              , a = this.strokeWidth / 2;
            this.showStroke && (i += a,
            n -= a,
            r += a),
            e.beginPath(),
            e.fillStyle = this.fillColor,
            e.strokeStyle = this.strokeColor,
            e.lineWidth = this.strokeWidth,
            e.moveTo(i, this.base),
            e.lineTo(i, r),
            e.lineTo(n, r),
            e.lineTo(n, this.base),
            e.fill(),
            this.showStroke && e.stroke()
        },
        height: function() {
            return this.base - this.y
        },
        inRange: function(e, t) {
            return e >= this.x - this.width / 2 && e <= this.x + this.width / 2 && t >= this.y && t <= this.base
        }
    }),
    i.Animation = i.Element.extend({
        currentStep: null ,
        numSteps: 60,
        easing: "",
        render: null ,
        onAnimationProgress: null ,
        onAnimationComplete: null
    }),
    i.Tooltip = i.Element.extend({
        draw: function() {
            var e = this.chart.ctx;
            e.font = Y(this.fontSize, this.fontStyle, this.fontFamily),
            this.xAlign = "center",
            this.yAlign = "above";
            var t = this.caretPadding = 2
              , i = e.measureText(this.text).width + 2 * this.xPadding
              , n = this.fontSize + 2 * this.yPadding
              , r = n + this.caretHeight + t;
            this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"),
            this.y - r < 0 && (this.yAlign = "below");
            var a = this.x - i / 2
              , o = this.y - r;
            if (e.fillStyle = this.fillColor,
            this.custom)
                this.custom(this);
            else {
                switch (this.yAlign) {
                case "above":
                    e.beginPath(),
                    e.moveTo(this.x, this.y - t),
                    e.lineTo(this.x + this.caretHeight, this.y - (t + this.caretHeight)),
                    e.lineTo(this.x - this.caretHeight, this.y - (t + this.caretHeight)),
                    e.closePath(),
                    e.fill();
                    break;
                case "below":
                    o = this.y + t + this.caretHeight,
                    e.beginPath(),
                    e.moveTo(this.x, this.y + t),
                    e.lineTo(this.x + this.caretHeight, this.y + t + this.caretHeight),
                    e.lineTo(this.x - this.caretHeight, this.y + t + this.caretHeight),
                    e.closePath(),
                    e.fill()
                }
                switch (this.xAlign) {
                case "left":
                    a = this.x - i + (this.cornerRadius + this.caretHeight);
                    break;
                case "right":
                    a = this.x - (this.cornerRadius + this.caretHeight)
                }
                $(e, a, o, i, n, this.cornerRadius),
                e.fill(),
                e.fillStyle = this.textColor,
                e.textAlign = "center",
                e.textBaseline = "middle",
                e.fillText(this.text, a + i / 2, o + n / 2)
            }
        }
    }),
    i.MultiTooltip = i.Element.extend({
        initialize: function() {
            this.font = Y(this.fontSize, this.fontStyle, this.fontFamily),
            this.titleFont = Y(this.titleFontSize, this.titleFontStyle, this.titleFontFamily),
            this.titleHeight = this.title ? 1.5 * this.titleFontSize : 0,
            this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + this.titleHeight,
            this.ctx.font = this.titleFont;
            var e = this.ctx.measureText(this.title).width
              , t = X(this.ctx, this.font, this.labels) + this.fontSize + 3
              , i = y([t, e]);
            this.width = i + 2 * this.xPadding;
            var n = this.height / 2;
            this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n),
            this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        },
        getLineHeight: function(e) {
            var t = this.y - this.height / 2 + this.yPadding
              , i = e - 1;
            return 0 === e ? t + this.titleHeight / 3 : t + (1.5 * this.fontSize * i + this.fontSize / 2) + this.titleHeight
        },
        draw: function() {
            if (this.custom)
                this.custom(this);
            else {
                $(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
                var e = this.ctx;
                e.fillStyle = this.fillColor,
                e.fill(),
                e.closePath(),
                e.textAlign = "left",
                e.textBaseline = "middle",
                e.fillStyle = this.titleTextColor,
                e.font = this.titleFont,
                e.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)),
                e.font = this.font,
                n.each(this.labels, function(t, i) {
                    e.fillStyle = this.textColor,
                    e.fillText(t, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)),
                    e.fillStyle = this.legendColorBackground,
                    e.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize),
                    e.fillStyle = this.legendColors[i].fill,
                    e.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
                }, this)
            }
        }
    }),
    i.Scale = i.Element.extend({
        initialize: function() {
            this.fit()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var e = x(this.stepValue), t = 0; t <= this.steps; t++)
                this.yLabels.push(_(this.templateString, {
                    value: (this.min + t * this.stepValue).toFixed(e)
                }));
            this.yLabelWidth = this.display && this.showLabels ? X(this.ctx, this.font, this.yLabels) + 10 : 0
        },
        addXLabel: function(e) {
            this.xLabels.push(e),
            this.valuesCount++,
            this.fit()
        },
        removeXLabel: function() {
            this.xLabels.shift(),
            this.valuesCount--,
            this.fit()
        },
        fit: function() {
            this.startPoint = this.display ? this.fontSize : 0,
            this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height,
            this.startPoint += this.padding,
            this.endPoint -= this.padding;
            var i, e = this.endPoint, t = this.endPoint - this.startPoint;
            for (this.calculateYRange(t),
            this.buildYLabels(),
            this.calculateXLabelRotation(); t > this.endPoint - this.startPoint; )
                t = this.endPoint - this.startPoint,
                i = this.yLabelWidth,
                this.calculateYRange(t),
                this.buildYLabels(),
                i < this.yLabelWidth && (this.endPoint = e,
                this.calculateXLabelRotation())
        },
        calculateXLabelRotation: function() {
            this.ctx.font = this.font;
            var i, n, e = this.ctx.measureText(this.xLabels[0]).width, t = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = t / 2 + 3,
            this.xScalePaddingLeft = e / 2 > this.yLabelWidth ? e / 2 : this.yLabelWidth,
            this.xLabelRotation = 0,
            this.display) {
                var a, r = X(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = r;
                for (var s = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > s && 0 === this.xLabelRotation || this.xLabelWidth > s && this.xLabelRotation <= 90 && this.xLabelRotation > 0; )
                    a = Math.cos(C(this.xLabelRotation)),
                    i = a * e,
                    n = a * t,
                    i + this.fontSize / 2 > this.yLabelWidth && (this.xScalePaddingLeft = i + this.fontSize / 2),
                    this.xScalePaddingRight = this.fontSize / 2,
                    this.xLabelRotation++,
                    this.xLabelWidth = a * r;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(C(this.xLabelRotation)) * r + 3)
            } else
                this.xLabelWidth = 0,
                this.xScalePaddingRight = this.padding,
                this.xScalePaddingLeft = this.padding
        },
        calculateYRange: d,
        drawingArea: function() {
            return this.startPoint - this.endPoint
        },
        calculateY: function(e) {
            var t = this.drawingArea() / (this.min - this.max);
            return this.endPoint - t * (e - this.min)
        },
        calculateX: function(e) {
            var i = (this.xLabelRotation > 0,
            this.width - (this.xScalePaddingLeft + this.xScalePaddingRight))
              , n = i / Math.max(this.valuesCount - (this.offsetGridLines ? 0 : 1), 1)
              , r = n * e + this.xScalePaddingLeft;
            return this.offsetGridLines && (r += n / 2),
            Math.round(r)
        },
        update: function(e) {
            n.extend(this, e),
            this.fit()
        },
        draw: function() {
            var e = this.ctx
              , t = (this.endPoint - this.startPoint) / this.steps
              , i = Math.round(this.xScalePaddingLeft);
            this.display && (e.fillStyle = this.textColor,
            e.font = this.font,
            r(this.yLabels, function(r, a) {
                var o = this.endPoint - t * a
                  , s = Math.round(o)
                  , l = this.showHorizontalLines;
                e.textAlign = "right",
                e.textBaseline = "middle",
                this.showLabels && e.fillText(r, i - 10, o),
                0 !== a || l || (l = !0),
                l && e.beginPath(),
                a > 0 ? (e.lineWidth = this.gridLineWidth,
                e.strokeStyle = this.gridLineColor) : (e.lineWidth = this.lineWidth,
                e.strokeStyle = this.lineColor),
                s += n.aliasPixel(e.lineWidth),
                l && (e.moveTo(i, s),
                e.lineTo(this.width, s),
                e.stroke(),
                e.closePath()),
                e.lineWidth = this.lineWidth,
                e.strokeStyle = this.lineColor,
                e.beginPath(),
                e.moveTo(i - 5, s),
                e.lineTo(i, s),
                e.stroke(),
                e.closePath()
            }, this),
            r(this.xLabels, function(t, i) {
                var n = this.calculateX(i) + k(this.lineWidth)
                  , r = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + k(this.lineWidth)
                  , a = this.xLabelRotation > 0
                  , o = this.showVerticalLines;
                0 !== i || o || (o = !0),
                o && e.beginPath(),
                i > 0 ? (e.lineWidth = this.gridLineWidth,
                e.strokeStyle = this.gridLineColor) : (e.lineWidth = this.lineWidth,
                e.strokeStyle = this.lineColor),
                o && (e.moveTo(r, this.endPoint),
                e.lineTo(r, this.startPoint - 3),
                e.stroke(),
                e.closePath()),
                e.lineWidth = this.lineWidth,
                e.strokeStyle = this.lineColor,
                e.beginPath(),
                e.moveTo(r, this.endPoint),
                e.lineTo(r, this.endPoint + 5),
                e.stroke(),
                e.closePath(),
                e.save(),
                e.translate(n, a ? this.endPoint + 12 : this.endPoint + 8),
                e.rotate(-1 * C(this.xLabelRotation)),
                e.font = this.font,
                e.textAlign = a ? "right" : "center",
                e.textBaseline = a ? "middle" : "top",
                e.fillText(t, 0, 0),
                e.restore()
            }, this))
        }
    }),
    i.RadialScale = i.Element.extend({
        initialize: function() {
            this.size = b([this.height, this.width]),
            this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        },
        calculateCenterOffset: function(e) {
            var t = this.drawingArea / (this.max - this.min);
            return (e - this.min) * t
        },
        update: function() {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(),
            this.buildYLabels()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var e = x(this.stepValue), t = 0; t <= this.steps; t++)
                this.yLabels.push(_(this.templateString, {
                    value: (this.min + t * this.stepValue).toFixed(e)
                }))
        },
        getCircumference: function() {
            return 2 * Math.PI / this.valuesCount
        },
        setScaleSize: function() {
            var t, i, n, r, o, s, u, c, f, h, d, p, e = b([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]), a = this.width, l = 0;
            for (this.ctx.font = Y(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily),
            i = 0; i < this.valuesCount; i++)
                t = this.getPointPosition(i, e),
                n = this.ctx.measureText(_(this.templateString, {
                    value: this.labels[i]
                })).width + 5,
                0 === i || i === this.valuesCount / 2 ? (r = n / 2,
                t.x + r > a && (a = t.x + r,
                o = i),
                t.x - r < l && (l = t.x - r,
                u = i)) : i < this.valuesCount / 2 ? t.x + n > a && (a = t.x + n,
                o = i) : i > this.valuesCount / 2 && t.x - n < l && (l = t.x - n,
                u = i);
            f = l,
            h = Math.ceil(a - this.width),
            s = this.getIndexAngle(o),
            c = this.getIndexAngle(u),
            d = h / Math.sin(s + Math.PI / 2),
            p = f / Math.sin(c + Math.PI / 2),
            d = v(d) ? d : 0,
            p = v(p) ? p : 0,
            this.drawingArea = e - (p + d) / 2,
            this.setCenterPoint(p, d)
        },
        setCenterPoint: function(e, t) {
            var i = this.width - t - this.drawingArea
              , n = e + this.drawingArea;
            this.xCenter = (n + i) / 2,
            this.yCenter = this.height / 2
        },
        getIndexAngle: function(e) {
            var t = 2 * Math.PI / this.valuesCount;
            return e * t - Math.PI / 2
        },
        getPointPosition: function(e, t) {
            var i = this.getIndexAngle(e);
            return {
                x: Math.cos(i) * t + this.xCenter,
                y: Math.sin(i) * t + this.yCenter
            }
        },
        draw: function() {
            if (this.display) {
                var e = this.ctx;
                if (r(this.yLabels, function(t, i) {
                    if (i > 0) {
                        var a, n = i * (this.drawingArea / this.steps), r = this.yCenter - n;
                        if (this.lineWidth > 0)
                            if (e.strokeStyle = this.lineColor,
                            e.lineWidth = this.lineWidth,
                            this.lineArc)
                                e.beginPath(),
                                e.arc(this.xCenter, this.yCenter, n, 0, 2 * Math.PI),
                                e.closePath(),
                                e.stroke();
                            else {
                                e.beginPath();
                                for (var o = 0; o < this.valuesCount; o++)
                                    a = this.getPointPosition(o, this.calculateCenterOffset(this.min + i * this.stepValue)),
                                    0 === o ? e.moveTo(a.x, a.y) : e.lineTo(a.x, a.y);
                                e.closePath(),
                                e.stroke()
                            }
                        if (this.showLabels) {
                            if (e.font = Y(this.fontSize, this.fontStyle, this.fontFamily),
                            this.showLabelBackdrop) {
                                var s = e.measureText(t).width;
                                e.fillStyle = this.backdropColor,
                                e.fillRect(this.xCenter - s / 2 - this.backdropPaddingX, r - this.fontSize / 2 - this.backdropPaddingY, s + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                            }
                            e.textAlign = "center",
                            e.textBaseline = "middle",
                            e.fillStyle = this.fontColor,
                            e.fillText(t, this.xCenter, r)
                        }
                    }
                }, this),
                !this.lineArc) {
                    e.lineWidth = this.angleLineWidth,
                    e.strokeStyle = this.angleLineColor;
                    for (var t = this.valuesCount - 1; t >= 0; t--) {
                        var i = null
                          , n = null ;
                        if (this.angleLineWidth > 0 && (i = this.calculateCenterOffset(this.max),
                        n = this.getPointPosition(t, i),
                        e.beginPath(),
                        e.moveTo(this.xCenter, this.yCenter),
                        e.lineTo(n.x, n.y),
                        e.stroke(),
                        e.closePath()),
                        this.backgroundColors && this.backgroundColors.length == this.valuesCount) {
                            null == i && (i = this.calculateCenterOffset(this.max)),
                            null == n && (n = this.getPointPosition(t, i));
                            var a = this.getPointPosition(0 === t ? this.valuesCount - 1 : t - 1, i)
                              , o = this.getPointPosition(t === this.valuesCount - 1 ? 0 : t + 1, i)
                              , s = {
                                x: (a.x + n.x) / 2,
                                y: (a.y + n.y) / 2
                            }
                              , l = {
                                x: (n.x + o.x) / 2,
                                y: (n.y + o.y) / 2
                            };
                            e.beginPath(),
                            e.moveTo(this.xCenter, this.yCenter),
                            e.lineTo(s.x, s.y),
                            e.lineTo(n.x, n.y),
                            e.lineTo(l.x, l.y),
                            e.fillStyle = this.backgroundColors[t],
                            e.fill(),
                            e.closePath()
                        }
                        var u = this.getPointPosition(t, this.calculateCenterOffset(this.max) + 5);
                        e.font = Y(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily),
                        e.fillStyle = this.pointLabelFontColor;
                        var c = this.labels.length
                          , f = this.labels.length / 2
                          , h = f / 2
                          , d = h > t || t > c - h
                          , p = t === h || t === c - h;
                        0 === t ? e.textAlign = "center" : t === f ? e.textAlign = "center" : f > t ? e.textAlign = "left" : e.textAlign = "right",
                        p ? e.textBaseline = "middle" : d ? e.textBaseline = "bottom" : e.textBaseline = "top",
                        e.fillText(this.labels[t], u.x, u.y)
                    }
                }
            }
        }
    }),
    i.animationService = {
        frameDuration: 17,
        animations: [],
        dropFrames: 0,
        addAnimation: function(e, t) {
            for (var i = 0; i < this.animations.length; ++i)
                if (this.animations[i].chartInstance === e)
                    return void (this.animations[i].animationObject = t);
            this.animations.push({
                chartInstance: e,
                animationObject: t
            }),
            1 == this.animations.length && n.requestAnimFrame.call(window, this.digestWrapper)
        },
        cancelAnimation: function(e) {
            var t = n.findNextWhere(this.animations, function(t) {
                return t.chartInstance === e
            });
            t && this.animations.splice(t, 1)
        },
        digestWrapper: function() {
            i.animationService.startDigest.call(i.animationService)
        },
        startDigest: function() {
            var e = Date.now()
              , t = 0;
            this.dropFrames > 1 && (t = Math.floor(this.dropFrames),
            this.dropFrames -= t);
            for (var i = 0; i < this.animations.length; i++)
                null === this.animations[i].animationObject.currentStep && (this.animations[i].animationObject.currentStep = 0),
                this.animations[i].animationObject.currentStep += 1 + t,
                this.animations[i].animationObject.currentStep > this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.currentStep = this.animations[i].animationObject.numSteps),
                this.animations[i].animationObject.render(this.animations[i].chartInstance, this.animations[i].animationObject),
                this.animations[i].animationObject.currentStep == this.animations[i].animationObject.numSteps && (this.animations[i].animationObject.onAnimationComplete.call(this.animations[i].chartInstance),
                this.animations.splice(i, 1),
                i--);
            var r = Date.now()
              , a = r - e - this.frameDuration
              , o = a / this.frameDuration;
            o > 1 && (this.dropFrames += o),
            this.animations.length > 0 && n.requestAnimFrame.call(window, this.digestWrapper)
        }
    },
    n.addEvent(window, "resize", function() {
        var e;
        return function() {
            clearTimeout(e),
            e = setTimeout(function() {
                r(i.instances, function(e) {
                    e.options.responsive && e.resize(e.render, !0)
                })
            }, 50)
        }
    }()),
    m ? define(function() {
        return i
    }) : "object" == typeof module && module.exports && (module.exports = i),
    e.Chart = i,
    i.noConflict = function() {
        return e.Chart = t,
        i
    }
}
.call(this),
function() {
    "use strict";
    var e = this
      , t = e.Chart
      , i = t.helpers
      , n = {
        scaleBeginAtZero: !0,
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        barShowStroke: !0,
        barStrokeWidth: 2,
        barValueSpacing: 5,
        barDatasetSpacing: 1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
    };
    t.Type.extend({
        name: "Bar",
        defaults: n,
        initialize: function(e) {
            var n = this.options;
            this.ScaleClass = t.Scale.extend({
                offsetGridLines: !0,
                calculateBarX: function(e, t, i) {
                    var r = this.calculateBaseWidth()
                      , a = this.calculateX(i) - r / 2
                      , o = this.calculateBarWidth(e);
                    return a + o * t + t * n.barDatasetSpacing + o / 2
                },
                calculateBaseWidth: function() {
                    return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
                },
                calculateBarWidth: function(e) {
                    var t = this.calculateBaseWidth() - (e - 1) * n.barDatasetSpacing;
                    return t / e
                }
            }),
            this.datasets = [],
            this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(e) {
                var t = "mouseout" !== e.type ? this.getBarsAtEvent(e) : [];
                this.eachBars(function(e) {
                    e.restore(["fillColor", "strokeColor"])
                }),
                i.each(t, function(e) {
                    e.fillColor = e.highlightFill,
                    e.strokeColor = e.highlightStroke
                }),
                this.showTooltip(t)
            }),
            this.BarClass = t.Rectangle.extend({
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            }),
            i.each(e.datasets, function(t, n) {
                var r = {
                    label: t.label || null ,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    bars: []
                };
                this.datasets.push(r),
                i.each(t.data, function(i, n) {
                    r.bars.push(new this.BarClass({
                        value: i,
                        label: e.labels[n],
                        datasetLabel: t.label,
                        strokeColor: t.strokeColor,
                        fillColor: t.fillColor,
                        highlightFill: t.highlightFill || t.fillColor,
                        highlightStroke: t.highlightStroke || t.strokeColor
                    }))
                }, this)
            }, this),
            this.buildScale(e.labels),
            this.BarClass.prototype.base = this.scale.endPoint,
            this.eachBars(function(e, t, n) {
                i.extend(e, {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, n, t),
                    y: this.scale.endPoint
                }),
                e.save()
            }, this),
            this.render()
        },
        update: function() {
            this.scale.update(),
            i.each(this.activeElements, function(e) {
                e.restore(["fillColor", "strokeColor"])
            }),
            this.eachBars(function(e) {
                e.save()
            }),
            this.render()
        },
        eachBars: function(e) {
            i.each(this.datasets, function(t, n) {
                i.each(t.bars, e, this, n)
            }, this)
        },
        getBarsAtEvent: function(e) {
            for (var a, t = [], n = i.getRelativePosition(e), r = function(e) {
                t.push(e.bars[a])
            }
            , o = 0; o < this.datasets.length; o++)
                for (a = 0; a < this.datasets[o].bars.length; a++)
                    if (this.datasets[o].bars[a].inRange(n.x, n.y))
                        return i.each(this.datasets, r),
                        t;
            return t
        },
        buildScale: function(e) {
            var t = this
              , n = function() {
                var e = [];
                return t.eachBars(function(t) {
                    e.push(t.value)
                }),
                e
            }
              , r = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: e.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(e) {
                    var t = i.calculateScaleRange(n(), e, this.fontSize, this.beginAtZero, this.integersOnly);
                    i.extend(this, t)
                },
                xLabels: e,
                font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && i.extend(r, {
                calculateYRange: i.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }),
            this.scale = new this.ScaleClass(r)
        },
        addData: function(e, t) {
            i.each(e, function(e, i) {
                this.datasets[i].bars.push(new this.BarClass({
                    value: e,
                    label: t,
                    datasetLabel: this.datasets[i].label,
                    x: this.scale.calculateBarX(this.datasets.length, i, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[i].strokeColor,
                    fillColor: this.datasets[i].fillColor
                }))
            }, this),
            this.scale.addXLabel(t),
            this.update()
        },
        removeData: function() {
            this.scale.removeXLabel(),
            i.each(this.datasets, function(e) {
                e.bars.shift()
            }, this),
            this.update()
        },
        reflow: function() {
            i.extend(this.BarClass.prototype, {
                y: this.scale.endPoint,
                base: this.scale.endPoint
            });
            var e = i.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(e)
        },
        draw: function(e) {
            var t = e || 1;
            this.clear();
            this.chart.ctx;
            this.scale.draw(t),
            i.each(this.datasets, function(e, n) {
                i.each(e.bars, function(e, i) {
                    e.hasValue() && (e.base = this.scale.endPoint,
                    e.transition({
                        x: this.scale.calculateBarX(this.datasets.length, n, i),
                        y: this.scale.calculateY(e.value),
                        width: this.scale.calculateBarWidth(this.datasets.length)
                    }, t).draw())
                }, this)
            }, this)
        }
    })
}
.call(this),
function() {
    "use strict";
    var e = this
      , t = e.Chart
      , i = t.helpers
      , n = {
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        percentageInnerCutout: 50,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
    };
    t.Type.extend({
        name: "Doughnut",
        defaults: n,
        initialize: function(e) {
            this.segments = [],
            this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2,
            this.SegmentArc = t.Arc.extend({
                ctx: this.chart.ctx,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(e) {
                var t = "mouseout" !== e.type ? this.getSegmentsAtEvent(e) : [];
                i.each(this.segments, function(e) {
                    e.restore(["fillColor"])
                }),
                i.each(t, function(e) {
                    e.fillColor = e.highlightColor
                }),
                this.showTooltip(t)
            }),
            this.calculateTotal(e),
            i.each(e, function(t, i) {
                t.color || (t.color = "hsl(" + 360 * i / e.length + ", 100%, 50%)"),
                this.addData(t, i, !0)
            }, this),
            this.render()
        },
        getSegmentsAtEvent: function(e) {
            var t = []
              , n = i.getRelativePosition(e);
            return i.each(this.segments, function(e) {
                e.inRange(n.x, n.y) && t.push(e)
            }, this),
            t
        },
        addData: function(e, i, n) {
            var r = void 0 !== i ? i : this.segments.length;
            "undefined" == typeof e.color && (e.color = t.defaults.global.segmentColorDefault[r % t.defaults.global.segmentColorDefault.length],
            e.highlight = t.defaults.global.segmentHighlightColorDefaults[r % t.defaults.global.segmentHighlightColorDefaults.length]),
            this.segments.splice(r, 0, new this.SegmentArc({
                value: e.value,
                outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                fillColor: e.color,
                highlightColor: e.highlight || e.color,
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                startAngle: 1.5 * Math.PI,
                circumference: this.options.animateRotate ? 0 : this.calculateCircumference(e.value),
                label: e.label
            })),
            n || (this.reflow(),
            this.update())
        },
        calculateCircumference: function(e) {
            return this.total > 0 ? 2 * Math.PI * (e / this.total) : 0
        },
        calculateTotal: function(e) {
            this.total = 0,
            i.each(e, function(e) {
                this.total += Math.abs(e.value)
            }, this)
        },
        update: function() {
            this.calculateTotal(this.segments),
            i.each(this.activeElements, function(e) {
                e.restore(["fillColor"])
            }),
            i.each(this.segments, function(e) {
                e.save()
            }),
            this.render()
        },
        removeData: function(e) {
            var t = i.isNumber(e) ? e : this.segments.length - 1;
            this.segments.splice(t, 1),
            this.reflow(),
            this.update()
        },
        reflow: function() {
            i.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2,
            i.each(this.segments, function(e) {
                e.update({
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                })
            }, this)
        },
        draw: function(e) {
            var t = e ? e : 1;
            this.clear(),
            i.each(this.segments, function(e, i) {
                e.transition({
                    circumference: this.calculateCircumference(e.value),
                    outerRadius: this.outerRadius,
                    innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                }, t),
                e.endAngle = e.startAngle + e.circumference,
                e.draw(),
                0 === i && (e.startAngle = 1.5 * Math.PI),
                i < this.segments.length - 1 && (this.segments[i + 1].startAngle = e.endAngle)
            }, this)
        }
    }),
    t.types.Doughnut.extend({
        name: "Pie",
        defaults: i.merge(n, {
            percentageInnerCutout: 0
        })
    })
}
.call(this),
function() {
    "use strict";
    var e = this
      , t = e.Chart
      , i = t.helpers
      , n = {
        scaleShowGridLines: !0,
        scaleGridLineColor: "rgba(0,0,0,.05)",
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: !0,
        scaleShowVerticalLines: !0,
        bezierCurve: !0,
        bezierCurveTension: .4,
        pointDot: !0,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: !0,
        datasetStrokeWidth: 2,
        datasetFill: !0,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>',
        offsetGridLines: !1
    };
    t.Type.extend({
        name: "Line",
        defaults: n,
        initialize: function(e) {
            this.PointClass = t.Point.extend({
                offsetGridLines: this.options.offsetGridLines,
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx,
                inRange: function(e) {
                    return Math.pow(e - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                }
            }),
            this.datasets = [],
            this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(e) {
                var t = "mouseout" !== e.type ? this.getPointsAtEvent(e) : [];
                this.eachPoints(function(e) {
                    e.restore(["fillColor", "strokeColor"])
                }),
                i.each(t, function(e) {
                    e.fillColor = e.highlightFill,
                    e.strokeColor = e.highlightStroke
                }),
                this.showTooltip(t)
            }),
            i.each(e.datasets, function(t) {
                var n = {
                    label: t.label || null ,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    pointColor: t.pointColor,
                    pointStrokeColor: t.pointStrokeColor,
                    points: []
                };
                this.datasets.push(n),
                i.each(t.data, function(i, r) {
                    n.points.push(new this.PointClass({
                        value: i,
                        label: e.labels[r],
                        datasetLabel: t.label,
                        strokeColor: t.pointStrokeColor,
                        fillColor: t.pointColor,
                        highlightFill: t.pointHighlightFill || t.pointColor,
                        highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                    }))
                }, this),
                this.buildScale(e.labels),
                this.eachPoints(function(e, t) {
                    i.extend(e, {
                        x: this.scale.calculateX(t),
                        y: this.scale.endPoint
                    }),
                    e.save()
                }, this)
            }, this),
            this.render()
        },
        update: function() {
            this.scale.update(),
            i.each(this.activeElements, function(e) {
                e.restore(["fillColor", "strokeColor"])
            }),
            this.eachPoints(function(e) {
                e.save()
            }),
            this.render()
        },
        eachPoints: function(e) {
            i.each(this.datasets, function(t) {
                i.each(t.points, e, this)
            }, this)
        },
        getPointsAtEvent: function(e) {
            var t = []
              , n = i.getRelativePosition(e);
            return i.each(this.datasets, function(e) {
                i.each(e.points, function(e) {
                    e.inRange(n.x, n.y) && t.push(e)
                })
            }, this),
            t
        },
        buildScale: function(e) {
            var n = this
              , r = function() {
                var e = [];
                return n.eachPoints(function(t) {
                    e.push(t.value)
                }),
                e
            }
              , a = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                offsetGridLines: this.options.offsetGridLines,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: e.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(e) {
                    var t = i.calculateScaleRange(r(), e, this.fontSize, this.beginAtZero, this.integersOnly);
                    i.extend(this, t)
                },
                xLabels: e,
                font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
                gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };
            this.options.scaleOverride && i.extend(a, {
                calculateYRange: i.noop,
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            }),
            this.scale = new t.Scale(a)
        },
        addData: function(e, t) {
            i.each(e, function(e, i) {
                this.datasets[i].points.push(new this.PointClass({
                    value: e,
                    label: t,
                    datasetLabel: this.datasets[i].label,
                    x: this.scale.calculateX(this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    strokeColor: this.datasets[i].pointStrokeColor,
                    fillColor: this.datasets[i].pointColor
                }))
            }, this),
            this.scale.addXLabel(t),
            this.update()
        },
        removeData: function() {
            this.scale.removeXLabel(),
            i.each(this.datasets, function(e) {
                e.points.shift()
            }, this),
            this.update()
        },
        reflow: function() {
            var e = i.extend({
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(e)
        },
        draw: function(e) {
            var t = e || 1;
            this.clear();
            var n = this.chart.ctx
              , r = function(e) {
                return null !== e.value
            }
              , a = function(e, t, n) {
                return i.findNextWhere(t, r, n) || e
            }
              , o = function(e, t, n) {
                return i.findPreviousWhere(t, r, n) || e
            }
            ;
            this.scale && (this.scale.draw(t),
            i.each(this.datasets, function(e) {
                var s = i.where(e.points, r);
                i.each(e.points, function(e, i) {
                    e.hasValue() && e.transition({
                        y: this.scale.calculateY(e.value),
                        x: this.scale.calculateX(i)
                    }, t)
                }, this),
                this.options.bezierCurve && i.each(s, function(e, t) {
                    var n = t > 0 && t < s.length - 1 ? this.options.bezierCurveTension : 0;
                    e.controlPoints = i.splineCurve(o(e, s, t), e, a(e, s, t), n),
                    e.controlPoints.outer.y > this.scale.endPoint ? e.controlPoints.outer.y = this.scale.endPoint : e.controlPoints.outer.y < this.scale.startPoint && (e.controlPoints.outer.y = this.scale.startPoint),
                    e.controlPoints.inner.y > this.scale.endPoint ? e.controlPoints.inner.y = this.scale.endPoint : e.controlPoints.inner.y < this.scale.startPoint && (e.controlPoints.inner.y = this.scale.startPoint)
                }, this),
                n.lineWidth = this.options.datasetStrokeWidth,
                n.strokeStyle = e.strokeColor,
                n.beginPath(),
                i.each(s, function(e, t) {
                    if (0 === t)
                        n.moveTo(e.x, e.y);
                    else if (this.options.bezierCurve) {
                        var i = o(e, s, t);
                        n.bezierCurveTo(i.controlPoints.outer.x, i.controlPoints.outer.y, e.controlPoints.inner.x, e.controlPoints.inner.y, e.x, e.y)
                    } else
                        n.lineTo(e.x, e.y)
                }, this),
                this.options.datasetStroke && n.stroke(),
                this.options.datasetFill && s.length > 0 && (n.lineTo(s[s.length - 1].x, this.scale.endPoint),
                n.lineTo(s[0].x, this.scale.endPoint),
                n.fillStyle = e.fillColor,
                n.closePath(),
                n.fill()),
                i.each(s, function(e) {
                    e.draw()
                })
            }, this))
        }
    })
}
.call(this),
function() {
    "use strict";
    var e = this
      , t = e.Chart
      , i = t.helpers
      , n = {
        scaleShowLabelBackdrop: !0,
        scaleBackdropColor: "rgba(255,255,255,0.75)",
        scaleBeginAtZero: !0,
        scaleBackdropPaddingY: 2,
        scaleBackdropPaddingX: 2,
        scaleShowLine: !0,
        segmentShowStroke: !0,
        segmentStrokeColor: "#fff",
        segmentStrokeWidth: 2,
        animationSteps: 100,
        animationEasing: "easeOutBounce",
        animateRotate: !0,
        animateScale: !1,
        legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"><%if(segments[i].label){%><%=segments[i].label%><%}%></span></li><%}%></ul>'
    };
    t.Type.extend({
        name: "PolarArea",
        defaults: n,
        initialize: function(e) {
            this.segments = [],
            this.SegmentArc = t.Arc.extend({
                showStroke: this.options.segmentShowStroke,
                strokeWidth: this.options.segmentStrokeWidth,
                strokeColor: this.options.segmentStrokeColor,
                ctx: this.chart.ctx,
                innerRadius: 0,
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.scale = new t.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                lineArc: !0,
                width: this.chart.width,
                height: this.chart.height,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                valuesCount: e.length
            }),
            this.updateScaleRange(e),
            this.scale.update(),
            i.each(e, function(e, t) {
                this.addData(e, t, !0)
            }, this),
            this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(e) {
                var t = "mouseout" !== e.type ? this.getSegmentsAtEvent(e) : [];
                i.each(this.segments, function(e) {
                    e.restore(["fillColor"])
                }),
                i.each(t, function(e) {
                    e.fillColor = e.highlightColor
                }),
                this.showTooltip(t)
            }),
            this.render()
        },
        getSegmentsAtEvent: function(e) {
            var t = []
              , n = i.getRelativePosition(e);
            return i.each(this.segments, function(e) {
                e.inRange(n.x, n.y) && t.push(e)
            }, this),
            t
        },
        addData: function(e, t, i) {
            var n = t || this.segments.length;
            this.segments.splice(n, 0, new this.SegmentArc({
                fillColor: e.color,
                highlightColor: e.highlight || e.color,
                label: e.label,
                value: e.value,
                outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(e.value),
                circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                startAngle: 1.5 * Math.PI
            })),
            i || (this.reflow(),
            this.update())
        },
        removeData: function(e) {
            var t = i.isNumber(e) ? e : this.segments.length - 1;
            this.segments.splice(t, 1),
            this.reflow(),
            this.update()
        },
        calculateTotal: function(e) {
            this.total = 0,
            i.each(e, function(e) {
                this.total += e.value
            }, this),
            this.scale.valuesCount = this.segments.length
        },
        updateScaleRange: function(e) {
            var t = [];
            i.each(e, function(e) {
                t.push(e.value)
            });
            var n = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : i.calculateScaleRange(t, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            i.extend(this.scale, n, {
                size: i.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            })
        },
        update: function() {
            this.calculateTotal(this.segments),
            i.each(this.segments, function(e) {
                e.save()
            }),
            this.reflow(),
            this.render()
        },
        reflow: function() {
            i.extend(this.SegmentArc.prototype, {
                x: this.chart.width / 2,
                y: this.chart.height / 2
            }),
            this.updateScaleRange(this.segments),
            this.scale.update(),
            i.extend(this.scale, {
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }),
            i.each(this.segments, function(e) {
                e.update({
                    outerRadius: this.scale.calculateCenterOffset(e.value)
                })
            }, this)
        },
        draw: function(e) {
            var t = e || 1;
            this.clear(),
            i.each(this.segments, function(e, i) {
                e.transition({
                    circumference: this.scale.getCircumference(),
                    outerRadius: this.scale.calculateCenterOffset(e.value)
                }, t),
                e.endAngle = e.startAngle + e.circumference,
                0 === i && (e.startAngle = 1.5 * Math.PI),
                i < this.segments.length - 1 && (this.segments[i + 1].startAngle = e.endAngle),
                e.draw()
            }, this),
            this.scale.draw()
        }
    })
}
.call(this),
function() {
    "use strict";
    var e = this
      , t = e.Chart
      , i = t.helpers;
    t.Type.extend({
        name: "Radar",
        defaults: {
            scaleShowLine: !0,
            angleShowLineOut: !0,
            scaleShowLabels: !1,
            scaleBeginAtZero: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 10,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            pointHitDetectionRadius: 20,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
        },
        initialize: function(e) {
            this.PointClass = t.Point.extend({
                strokeWidth: this.options.pointDotStrokeWidth,
                radius: this.options.pointDotRadius,
                display: this.options.pointDot,
                hitDetectionRadius: this.options.pointHitDetectionRadius,
                ctx: this.chart.ctx
            }),
            this.datasets = [],
            this.buildScale(e),
            this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(e) {
                var t = "mouseout" !== e.type ? this.getPointsAtEvent(e) : [];
                this.eachPoints(function(e) {
                    e.restore(["fillColor", "strokeColor"])
                }),
                i.each(t, function(e) {
                    e.fillColor = e.highlightFill,
                    e.strokeColor = e.highlightStroke
                }),
                this.showTooltip(t)
            }),
            i.each(e.datasets, function(t) {
                var n = {
                    label: t.label || null ,
                    fillColor: t.fillColor,
                    strokeColor: t.strokeColor,
                    pointColor: t.pointColor,
                    pointStrokeColor: t.pointStrokeColor,
                    points: []
                };
                this.datasets.push(n),
                i.each(t.data, function(i, r) {
                    var a;
                    this.scale.animation || (a = this.scale.getPointPosition(r, this.scale.calculateCenterOffset(i))),
                    n.points.push(new this.PointClass({
                        value: i,
                        label: e.labels[r],
                        datasetLabel: t.label,
                        x: this.options.animation ? this.scale.xCenter : a.x,
                        y: this.options.animation ? this.scale.yCenter : a.y,
                        strokeColor: t.pointStrokeColor,
                        fillColor: t.pointColor,
                        highlightFill: t.pointHighlightFill || t.pointColor,
                        highlightStroke: t.pointHighlightStroke || t.pointStrokeColor
                    }))
                }, this)
            }, this),
            this.render()
        },
        eachPoints: function(e) {
            i.each(this.datasets, function(t) {
                i.each(t.points, e, this)
            }, this)
        },
        getPointsAtEvent: function(e) {
            var t = i.getRelativePosition(e)
              , n = i.getAngleFromPoint({
                x: this.scale.xCenter,
                y: this.scale.yCenter
            }, t)
              , r = 2 * Math.PI / this.scale.valuesCount
              , a = Math.round((n.angle - 1.5 * Math.PI) / r)
              , o = [];
            return (a >= this.scale.valuesCount || 0 > a) && (a = 0),
            n.distance <= this.scale.drawingArea && i.each(this.datasets, function(e) {
                o.push(e.points[a])
            }),
            o
        },
        buildScale: function(e) {
            this.scale = new t.RadialScale({
                display: this.options.showScale,
                fontStyle: this.options.scaleFontStyle,
                fontSize: this.options.scaleFontSize,
                fontFamily: this.options.scaleFontFamily,
                fontColor: this.options.scaleFontColor,
                showLabels: this.options.scaleShowLabels,
                showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                backdropColor: this.options.scaleBackdropColor,
                backgroundColors: this.options.scaleBackgroundColors,
                backdropPaddingY: this.options.scaleBackdropPaddingY,
                backdropPaddingX: this.options.scaleBackdropPaddingX,
                lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                lineColor: this.options.scaleLineColor,
                angleLineColor: this.options.angleLineColor,
                angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                pointLabelFontColor: this.options.pointLabelFontColor,
                pointLabelFontSize: this.options.pointLabelFontSize,
                pointLabelFontFamily: this.options.pointLabelFontFamily,
                pointLabelFontStyle: this.options.pointLabelFontStyle,
                height: this.chart.height,
                width: this.chart.width,
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2,
                ctx: this.chart.ctx,
                templateString: this.options.scaleLabel,
                labels: e.labels,
                valuesCount: e.datasets[0].data.length
            }),
            this.scale.setScaleSize(),
            this.updateScaleRange(e.datasets),
            this.scale.buildYLabels()
        },
        updateScaleRange: function(e) {
            var t = function() {
                var t = [];
                return i.each(e, function(e) {
                    e.data ? t = t.concat(e.data) : i.each(e.points, function(e) {
                        t.push(e.value)
                    })
                }),
                t
            }()
              , n = this.options.scaleOverride ? {
                steps: this.options.scaleSteps,
                stepValue: this.options.scaleStepWidth,
                min: this.options.scaleStartValue,
                max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
            } : i.calculateScaleRange(t, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
            i.extend(this.scale, n)
        },
        addData: function(e, t) {
            this.scale.valuesCount++,
            i.each(e, function(e, i) {
                var n = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(e));
                this.datasets[i].points.push(new this.PointClass({
                    value: e,
                    label: t,
                    datasetLabel: this.datasets[i].label,
                    x: n.x,
                    y: n.y,
                    strokeColor: this.datasets[i].pointStrokeColor,
                    fillColor: this.datasets[i].pointColor
                }))
            }, this),
            this.scale.labels.push(t),
            this.reflow(),
            this.update()
        },
        removeData: function() {
            this.scale.valuesCount--,
            this.scale.labels.shift(),
            i.each(this.datasets, function(e) {
                e.points.shift()
            }, this),
            this.reflow(),
            this.update()
        },
        update: function() {
            this.eachPoints(function(e) {
                e.save()
            }),
            this.reflow(),
            this.render()
        },
        reflow: function() {
            i.extend(this.scale, {
                width: this.chart.width,
                height: this.chart.height,
                size: i.min([this.chart.width, this.chart.height]),
                xCenter: this.chart.width / 2,
                yCenter: this.chart.height / 2
            }),
            this.updateScaleRange(this.datasets),
            this.scale.setScaleSize(),
            this.scale.buildYLabels()
        },
        draw: function(e) {
            var t = e || 1
              , n = this.chart.ctx;
            this.clear(),
            this.scale.draw(),
            i.each(this.datasets, function(e) {
                i.each(e.points, function(e, i) {
                    e.hasValue() && e.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(e.value)), t)
                }, this),
                n.lineWidth = this.options.datasetStrokeWidth,
                n.strokeStyle = e.strokeColor,
                n.beginPath(),
                i.each(e.points, function(e, t) {
                    0 === t ? n.moveTo(e.x, e.y) : n.lineTo(e.x, e.y)
                }, this),
                n.closePath(),
                n.stroke(),
                n.fillStyle = e.fillColor,
                this.options.datasetFill && n.fill(),
                i.each(e.points, function(e) {
                    e.hasValue() && e.draw()
                })
            }, this)
        }
    })
}
.call(this),
function() {
    var e, t, i, n, r, a = function(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    , o = [].indexOf || function(e) {
        for (var t = 0, i = this.length; i > t; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    t = function() {
        function e() {}
        return e.prototype.extend = function(e, t) {
            var i, n;
            for (i in t)
                n = t[i],
                null == e[i] && (e[i] = n);
            return e
        }
        ,
        e.prototype.isMobile = function(e) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
        }
        ,
        e.prototype.createEvent = function(e, t, i, n) {
            var r;
            return null == t && (t = !1),
            null == i && (i = !1),
            null == n && (n = null ),
            null != document.createEvent ? (r = document.createEvent("CustomEvent"),
            r.initCustomEvent(e, t, i, n)) : null != document.createEventObject ? (r = document.createEventObject(),
            r.eventType = e) : r.eventName = e,
            r
        }
        ,
        e.prototype.emitEvent = function(e, t) {
            return null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) ? e["on" + t]() : void 0
        }
        ,
        e.prototype.addEvent = function(e, t, i) {
            return null != e.addEventListener ? e.addEventListener(t, i, !1) : null != e.attachEvent ? e.attachEvent("on" + t, i) : e[t] = i
        }
        ,
        e.prototype.removeEvent = function(e, t, i) {
            return null != e.removeEventListener ? e.removeEventListener(t, i, !1) : null != e.detachEvent ? e.detachEvent("on" + t, i) : delete e[t]
        }
        ,
        e.prototype.innerHeight = function() {
            return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
        }
        ,
        e
    }(),
    i = this.WeakMap || this.MozWeakMap || (i = function() {
        function e() {
            this.keys = [],
            this.values = []
        }
        return e.prototype.get = function(e) {
            var t, i, n, r, a;
            for (a = this.keys,
            t = n = 0,
            r = a.length; r > n; t = ++n)
                if (i = a[t],
                i === e)
                    return this.values[t]
        }
        ,
        e.prototype.set = function(e, t) {
            var i, n, r, a, o;
            for (o = this.keys,
            i = r = 0,
            a = o.length; a > r; i = ++r)
                if (n = o[i],
                n === e)
                    return void (this.values[i] = t);
            return this.keys.push(e),
            this.values.push(t)
        }
        ,
        e
    }()),
    e = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (e = function() {
        function e() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return e.notSupported = !0,
        e.prototype.observe = function() {}
        ,
        e
    }()),
    n = this.getComputedStyle || function(e, t) {
        return this.getPropertyValue = function(t) {
            var i;
            return "float" === t && (t = "styleFloat"),
            r.test(t) && t.replace(r, function(e, t) {
                return t.toUpperCase()
            }),
            (null != (i = e.currentStyle) ? i[t] : void 0) || null
        }
        ,
        this
    }
    ,
    r = /(\-([a-z]){1})/g,
    this.WOW = function() {
        function r(e) {
            null == e && (e = {}),
            this.scrollCallback = a(this.scrollCallback, this),
            this.scrollHandler = a(this.scrollHandler, this),
            this.resetAnimation = a(this.resetAnimation, this),
            this.start = a(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(e, this.defaults),
            null != e.scrollContainer && (this.config.scrollContainer = document.querySelector(e.scrollContainer)),
            this.animationNameCache = new i,
            this.wowEvent = this.util().createEvent(this.config.boxClass)
        }
        return r.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0,
            callback: null ,
            scrollContainer: null
        },
        r.prototype.init = function() {
            var e;
            return this.element = window.document.documentElement,
            "interactive" === (e = document.readyState) || "complete" === e ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        r.prototype.start = function() {
            var t, i, n, r;
            if (this.stopped = !1,
            this.boxes = function() {
                var e, i, n, r;
                for (n = this.element.querySelectorAll("." + this.config.boxClass),
                r = [],
                e = 0,
                i = n.length; i > e; e++)
                    t = n[e],
                    r.push(t);
                return r
            }
            .call(this),
            this.all = function() {
                var e, i, n, r;
                for (n = this.boxes,
                r = [],
                e = 0,
                i = n.length; i > e; e++)
                    t = n[e],
                    r.push(t);
                return r
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else
                    for (r = this.boxes,
                    i = 0,
                    n = r.length; n > i; i++)
                        t = r[i],
                        this.applyStyle(t, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().addEvent(window, "resize", this.scrollHandler),
            this.interval = setInterval(this.scrollCallback, 50)),
            this.config.live ? new e(function(e) {
                return function(t) {
                    var i, n, r, a, o;
                    for (o = [],
                    i = 0,
                    n = t.length; n > i; i++)
                        a = t[i],
                        o.push(function() {
                            var e, t, i, n;
                            for (i = a.addedNodes || [],
                            n = [],
                            e = 0,
                            t = i.length; t > e; e++)
                                r = i[e],
                                n.push(this.doSync(r));
                            return n
                        }
                        .call(e));
                    return o
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        r.prototype.stop = function() {
            return this.stopped = !0,
            this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        r.prototype.sync = function(t) {
            return e.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        r.prototype.doSync = function(e) {
            var t, i, n, r, a;
            if (null == e && (e = this.element),
            1 === e.nodeType) {
                for (e = e.parentNode || e,
                r = e.querySelectorAll("." + this.config.boxClass),
                a = [],
                i = 0,
                n = r.length; n > i; i++)
                    t = r[i],
                    o.call(this.all, t) < 0 ? (this.boxes.push(t),
                    this.all.push(t),
                    this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0),
                    a.push(this.scrolled = !0)) : a.push(void 0);
                return a
            }
        }
        ,
        r.prototype.show = function(e) {
            return this.applyStyle(e),
            e.className = e.className + " " + this.config.animateClass,
            null != this.config.callback && this.config.callback(e),
            this.util().emitEvent(e, this.wowEvent),
            this.util().addEvent(e, "animationend", this.resetAnimation),
            this.util().addEvent(e, "oanimationend", this.resetAnimation),
            this.util().addEvent(e, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(e, "MSAnimationEnd", this.resetAnimation),
            e
        }
        ,
        r.prototype.applyStyle = function(e, t) {
            var i, n, r;
            return n = e.getAttribute("data-wow-duration"),
            i = e.getAttribute("data-wow-delay"),
            r = e.getAttribute("data-wow-iteration"),
            this.animate(function(a) {
                return function() {
                    return a.customStyle(e, t, n, i, r)
                }
            }(this))
        }
        ,
        r.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(e) {
                return window.requestAnimationFrame(e)
            }
            : function(e) {
                return e()
            }
        }(),
        r.prototype.resetStyle = function() {
            var e, t, i, n, r;
            for (n = this.boxes,
            r = [],
            t = 0,
            i = n.length; i > t; t++)
                e = n[t],
                r.push(e.style.visibility = "visible");
            return r
        }
        ,
        r.prototype.resetAnimation = function(e) {
            var t;
            return e.type.toLowerCase().indexOf("animationend") >= 0 ? (t = e.target || e.srcElement,
            t.className = t.className.replace(this.config.animateClass, "").trim()) : void 0
        }
        ,
        r.prototype.customStyle = function(e, t, i, n, r) {
            return t && this.cacheAnimationName(e),
            e.style.visibility = t ? "hidden" : "visible",
            i && this.vendorSet(e.style, {
                animationDuration: i
            }),
            n && this.vendorSet(e.style, {
                animationDelay: n
            }),
            r && this.vendorSet(e.style, {
                animationIterationCount: r
            }),
            this.vendorSet(e.style, {
                animationName: t ? "none" : this.cachedAnimationName(e)
            }),
            e
        }
        ,
        r.prototype.vendors = ["moz", "webkit"],
        r.prototype.vendorSet = function(e, t) {
            var i, n, r, a;
            n = [];
            for (i in t)
                r = t[i],
                e["" + i] = r,
                n.push(function() {
                    var t, n, o, s;
                    for (o = this.vendors,
                    s = [],
                    t = 0,
                    n = o.length; n > t; t++)
                        a = o[t],
                        s.push(e["" + a + i.charAt(0).toUpperCase() + i.substr(1)] = r);
                    return s
                }
                .call(this));
            return n
        }
        ,
        r.prototype.vendorCSS = function(e, t) {
            var i, r, a, o, s, l;
            for (s = n(e),
            o = s.getPropertyCSSValue(t),
            a = this.vendors,
            i = 0,
            r = a.length; r > i; i++)
                l = a[i],
                o = o || s.getPropertyCSSValue("-" + l + "-" + t);
            return o
        }
        ,
        r.prototype.animationName = function(e) {
            var t;
            try {
                t = this.vendorCSS(e, "animation-name").cssText
            } catch (i) {
                t = n(e).getPropertyValue("animation-name")
            }
            return "none" === t ? "" : t
        }
        ,
        r.prototype.cacheAnimationName = function(e) {
            return this.animationNameCache.set(e, this.animationName(e))
        }
        ,
        r.prototype.cachedAnimationName = function(e) {
            return this.animationNameCache.get(e)
        }
        ,
        r.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        r.prototype.scrollCallback = function() {
            var e;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var t, i, n, r;
                for (n = this.boxes,
                r = [],
                t = 0,
                i = n.length; i > t; t++)
                    e = n[t],
                    e && (this.isVisible(e) ? this.show(e) : r.push(e));
                return r
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        r.prototype.offsetTop = function(e) {
            for (var t; void 0 === e.offsetTop; )
                e = e.parentNode;
            for (t = e.offsetTop; e = e.offsetParent; )
                t += e.offsetTop;
            return t
        }
        ,
        r.prototype.isVisible = function(e) {
            var t, i, n, r, a;
            return i = e.getAttribute("data-wow-offset") || this.config.offset,
            a = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
            r = a + Math.min(this.element.clientHeight, this.util().innerHeight()) - i,
            n = this.offsetTop(e),
            t = n + e.clientHeight,
            r >= n && t >= a
        }
        ,
        r.prototype.util = function() {
            return null != this._util ? this._util : this._util = new t
        }
        ,
        r.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        r
    }()
}
.call(this),
$(window).scroll(function() {
    $(".navbar").offset() && ($(".navbar").offset().top > 50 ? $(".scrolling-navbar").addClass("top-nav-collapse") : $(".scrolling-navbar").removeClass("top-nav-collapse"))
}),
$(function() {
    $("a.page-scroll").bind("click", function(e) {
        var t = $(this);
        $("html, body").stop().animate({
            scrollTop: $(t.attr("href")).offset().top
        }, 1500, "easeInOutExpo"),
        e.preventDefault()
    })
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function() {
        return t.apply(e)
    }) : "object" == typeof exports ? module.exports = t.call(e) : e.Waves = t.call(e)
}("object" == typeof global ? global : this, function() {
    "use strict";
    function r(e) {
        return null !== e && e === e.window
    }
    function a(e) {
        return r(e) ? e : 9 === e.nodeType && e.defaultView
    }
    function o(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e
    }
    function s(e) {
        return o(e) && e.nodeType > 0
    }
    function l(e) {
        var n = i.call(e);
        return "[object String]" === n ? t(e) : o(e) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(n) && e.hasOwnProperty("length") ? e : s(e) ? [e] : []
    }
    function u(e) {
        var t, i, n = {
            top: 0,
            left: 0
        }, r = e && e.ownerDocument;
        return t = r.documentElement,
        "undefined" != typeof e.getBoundingClientRect && (n = e.getBoundingClientRect()),
        i = a(r),
        {
            top: n.top + i.pageYOffset - t.clientTop,
            left: n.left + i.pageXOffset - t.clientLeft
        }
    }
    function c(e) {
        var t = "";
        for (var i in e)
            e.hasOwnProperty(i) && (t += i + ":" + e[i] + ";");
        return t
    }
    function d(e, t, i) {
        if (i) {
            i.classList.remove("waves-rippling");
            var n = i.getAttribute("data-x")
              , r = i.getAttribute("data-y")
              , a = i.getAttribute("data-scale")
              , o = i.getAttribute("data-translate")
              , s = Date.now() - Number(i.getAttribute("data-hold"))
              , l = 350 - s;
            0 > l && (l = 0),
            "mousemove" === e.type && (l = 150);
            var u = "mousemove" === e.type ? 2500 : f.duration;
            setTimeout(function() {
                var e = {
                    top: r + "px",
                    left: n + "px",
                    opacity: "0",
                    "-webkit-transition-duration": u + "ms",
                    "-moz-transition-duration": u + "ms",
                    "-o-transition-duration": u + "ms",
                    "transition-duration": u + "ms",
                    "-webkit-transform": a + " " + o,
                    "-moz-transform": a + " " + o,
                    "-ms-transform": a + " " + o,
                    "-o-transform": a + " " + o,
                    transform: a + " " + o
                };
                i.setAttribute("style", c(e)),
                setTimeout(function() {
                    try {
                        t.removeChild(i)
                    } catch (e) {
                        return !1
                    }
                }, u)
            }, l)
        }
    }
    function g(e) {
        if (p.allowEvent(e) === !1)
            return null ;
        for (var t = null , i = e.target || e.srcElement; null !== i.parentElement; ) {
            if (i.classList.contains("waves-effect") && !(i instanceof SVGElement)) {
                t = i;
                break
            }
            i = i.parentElement
        }
        return t
    }
    function m(e) {
        var t = g(e);
        if (null !== t) {
            if (t.disabled || t.getAttribute("disabled") || t.classList.contains("disabled"))
                return;
            if (p.registerEvent(e),
            "touchstart" === e.type && f.delay) {
                var i = !1
                  , r = setTimeout(function() {
                    r = null ,
                    f.show(e, t)
                }, f.delay)
                  , a = function(n) {
                    r && (clearTimeout(r),
                    r = null ,
                    f.show(e, t)),
                    i || (i = !0,
                    f.hide(n, t))
                }
                  , o = function(e) {
                    r && (clearTimeout(r),
                    r = null ),
                    a(e)
                }
                ;
                t.addEventListener("touchmove", o, !1),
                t.addEventListener("touchend", a, !1),
                t.addEventListener("touchcancel", a, !1)
            } else
                f.show(e, t),
                n && (t.addEventListener("touchend", f.hide, !1),
                t.addEventListener("touchcancel", f.hide, !1)),
                t.addEventListener("mouseup", f.hide, !1),
                t.addEventListener("mouseleave", f.hide, !1)
        }
    }
    var e = e || {}
      , t = document.querySelectorAll.bind(document)
      , i = Object.prototype.toString
      , n = "ontouchstart"in window
      , f = {
        duration: 750,
        delay: 200,
        show: function(e, t, i) {
            if (2 === e.button)
                return !1;
            t = t || this;
            var n = document.createElement("div");
            n.className = "waves-ripple waves-rippling",
            t.appendChild(n);
            var r = u(t)
              , a = 0
              , o = 0;
            "touches"in e && e.touches.length ? (a = e.touches[0].pageY - r.top,
            o = e.touches[0].pageX - r.left) : (a = e.pageY - r.top,
            o = e.pageX - r.left),
            o = o >= 0 ? o : 0,
            a = a >= 0 ? a : 0;
            var s = "scale(" + t.clientWidth / 100 * 3 + ")"
              , l = "translate(0,0)";
            i && (l = "translate(" + i.x + "px, " + i.y + "px)"),
            n.setAttribute("data-hold", Date.now()),
            n.setAttribute("data-x", o),
            n.setAttribute("data-y", a),
            n.setAttribute("data-scale", s),
            n.setAttribute("data-translate", l);
            var h = {
                top: a + "px",
                left: o + "px"
            };
            n.classList.add("waves-notransition"),
            n.setAttribute("style", c(h)),
            n.classList.remove("waves-notransition"),
            h["-webkit-transform"] = s + " " + l,
            h["-moz-transform"] = s + " " + l,
            h["-ms-transform"] = s + " " + l,
            h["-o-transform"] = s + " " + l,
            h.transform = s + " " + l,
            h.opacity = "1";
            var d = "mousemove" === e.type ? 2500 : f.duration;
            h["-webkit-transition-duration"] = d + "ms",
            h["-moz-transition-duration"] = d + "ms",
            h["-o-transition-duration"] = d + "ms",
            h["transition-duration"] = d + "ms",
            n.setAttribute("style", c(h))
        },
        hide: function(e, t) {
            t = t || this;
            for (var i = t.getElementsByClassName("waves-rippling"), n = 0, r = i.length; r > n; n++)
                d(e, t, i[n])
        }
    }
      , h = {
        input: function(e) {
            var t = e.parentNode;
            if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                var i = document.createElement("i");
                i.className = e.className + " waves-input-wrapper",
                e.className = "waves-button-input",
                t.replaceChild(i, e),
                i.appendChild(e);
                var n = window.getComputedStyle(e, null )
                  , r = n.color
                  , a = n.backgroundColor;
                i.setAttribute("style", "color:" + r + ";background:" + a),
                e.setAttribute("style", "background-color:rgba(0,0,0,0);")
            }
        },
        img: function(e) {
            var t = e.parentNode;
            if ("i" !== t.tagName.toLowerCase() || !t.classList.contains("waves-effect")) {
                var i = document.createElement("i");
                t.replaceChild(i, e),
                i.appendChild(e)
            }
        }
    }
      , p = {
        touches: 0,
        allowEvent: function(e) {
            var t = !0;
            return /^(mousedown|mousemove)$/.test(e.type) && p.touches && (t = !1),
            t
        },
        registerEvent: function(e) {
            var t = e.type;
            "touchstart" === t ? p.touches += 1 : /^(touchend|touchcancel)$/.test(t) && setTimeout(function() {
                p.touches && (p.touches -= 1)
            }, 500)
        }
    };
    return e.init = function(e) {
        var t = document.body;
        e = e || {},
        "duration"in e && (f.duration = e.duration),
        "delay"in e && (f.delay = e.delay),
        n && (t.addEventListener("touchstart", m, !1),
        t.addEventListener("touchcancel", p.registerEvent, !1),
        t.addEventListener("touchend", p.registerEvent, !1)),
        t.addEventListener("mousedown", m, !1)
    }
    ,
    e.attach = function(e, t) {
        e = l(e),
        "[object Array]" === i.call(t) && (t = t.join(" ")),
        t = t ? " " + t : "";
        for (var n, r, a = 0, o = e.length; o > a; a++)
            n = e[a],
            r = n.tagName.toLowerCase(),
            -1 !== ["input", "img"].indexOf(r) && (h[r](n),
            n = n.parentElement),
            -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + t)
    }
    ,
    e.ripple = function(e, t) {
        e = l(e);
        var i = e.length;
        if (t = t || {},
        t.wait = t.wait || 0,
        t.position = t.position || null ,
        i)
            for (var n, r, a, o = {}, s = 0, c = {
                type: "mousedown",
                button: 1
            }, h = function(e, t) {
                return function() {
                    f.hide(e, t)
                }
            }
            ; i > s; s++)
                if (n = e[s],
                r = t.position || {
                    x: n.clientWidth / 2,
                    y: n.clientHeight / 2
                },
                a = u(n),
                o.x = a.left + r.x,
                o.y = a.top + r.y,
                c.pageX = o.x,
                c.pageY = o.y,
                f.show(c, n),
                t.wait >= 0 && null !== t.wait) {
                    var d = {
                        type: "mouseup",
                        button: 1
                    };
                    setTimeout(h(d, n), t.wait)
                }
    }
    ,
    e.calm = function(e) {
        e = l(e);
        for (var t = {
            type: "mouseup",
            button: 1
        }, i = 0, n = e.length; n > i; i++)
            f.hide(t, e[i])
    }
    ,
    e.displayEffect = function(t) {
        console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"),
        e.init(t)
    }
    ,
    e
}),
Waves.attach(".btn, .btn-floating", ["waves-light"]),
Waves.attach(".view .mask", ["waves-light"]),
Waves.attach(".waves-light", ["waves-light"]),
Waves.attach(".navbar-nav a, .nav-icons li a, .navbar form, .nav-tabs .nav-item", ["waves-light"]),
Waves.attach(".navbar-brand", ["waves-light"]),
Waves.attach(".pager li a", ["waves-light"]),
Waves.attach(".pagination .page-item .page-link", ["waves-effect"]),
Waves.init(),
$(document).ready(function() {
    $("#preloader-markup").load("mdb-addons/preloader.html", function() {
        $(window).load(function() {
            $("#mdb-preloader").fadeOut("slow")
        })
    })
}),
function(e) {
    e(document).ready(function() {
        e(document).on("click.card", ".card", function(t) {
            e(this).find(".card-reveal").length && (e(t.target).is(e(".card-reveal .card-title")) || e(t.target).is(e(".card-reveal .card-title i")) ? e(this).find(".card-reveal").velocity({
                translateY: 0
            }, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function() {
                    e(this).css({
                        display: "none"
                    })
                }
            }) : (e(t.target).is(e(".card .activator")) || e(t.target).is(e(".card .activator i"))) && e(this).find(".card-reveal").css({
                display: "block"
            }).velocity("stop", !1).velocity({
                translateY: "-100%"
            }, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            }))
        })
    })
}(jQuery),
$(document).ready(function(e) {
    e(".card-share > a").on("click", function(t) {
        t.preventDefault(),
        e(this).parent().find("div").toggleClass("social-reveal-active"),
        e(this).toggleClass("share-expanded")
    })
}),
function(e) {
    function t() {
        var t = +e(this).attr("length")
          , i = +e(this).val().length
          , n = t >= i;
        e(this).parent().find('span[class="character-counter"]').html(i + "/" + t),
        r(n, e(this))
    }
    function i(t) {
        var i = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1);
        t.parent().append(i)
    }
    function n() {
        e(this).parent().find('span[class="character-counter"]').html("")
    }
    function r(e, t) {
        var i = t.hasClass("invalid");
        e && i ? t.removeClass("invalid") : e || i || (t.removeClass("valid"),
        t.addClass("invalid"))
    }
    e.fn.characterCounter = function() {
        return this.each(function() {
            var r = void 0 !== e(this).attr("length");
            r && (e(this).on("input", t),
            e(this).on("focus", t),
            e(this).on("blur", n),
            i(e(this)))
        })
    }
    ,
    e(document).ready(function() {
        e("input, textarea").characterCounter()
    })
}(jQuery),
function(e) {
    e(["jquery"], function(e) {
        return function() {
            function s(e, t, i) {
                return w({
                    type: r.error,
                    iconClass: x().iconClasses.error,
                    message: e,
                    optionsOverride: i,
                    title: t
                })
            }
            function l(i, n) {
                return i || (i = x()),
                t = e("#" + i.containerId),
                t.length ? t : (n && (t = v(i)),
                t)
            }
            function u(e, t, i) {
                return w({
                    type: r.info,
                    iconClass: x().iconClasses.info,
                    message: e,
                    optionsOverride: i,
                    title: t
                })
            }
            function c(e) {
                i = e
            }
            function f(e, t, i) {
                return w({
                    type: r.success,
                    iconClass: x().iconClasses.success,
                    message: e,
                    optionsOverride: i,
                    title: t
                })
            }
            function h(e, t, i) {
                return w({
                    type: r.warning,
                    iconClass: x().iconClasses.warning,
                    message: e,
                    optionsOverride: i,
                    title: t
                })
            }
            function d(e, i) {
                var n = x();
                t || l(n),
                m(e, n, i) || g(n)
            }
            function p(i) {
                var n = x();
                return t || l(n),
                i && 0 === e(":focus", i).length ? void C(i) : void (t.children().length && t.remove())
            }
            function g(i) {
                for (var n = t.children(), r = n.length - 1; r >= 0; r--)
                    m(e(n[r]), i)
            }
            function m(t, i, n) {
                var r = n && n.force ? n.force : !1;
                return t && (r || 0 === e(":focus", t).length) ? (t[i.hideMethod]({
                    duration: i.hideDuration,
                    easing: i.hideEasing,
                    complete: function() {
                        C(t)
                    }
                }),
                !0) : !1
            }
            function v(i) {
                return t = e("<div/>").attr("id", i.containerId).addClass(i.positionClass).attr("aria-live", "polite").attr("role", "alert"),
                t.appendTo(e(i.target)),
                t
            }
            function y() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1
                }
            }
            function b(e) {
                i && i(e)
            }
            function w(i) {
                function m(e) {
                    return null == e && (e = ""),
                    new String(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }
                function v() {
                    T(),
                    S(),
                    E(),
                    A(),
                    _(),
                    k()
                }
                function y() {
                    u.hover(O, D),
                    !r.onclick && r.tapToDismiss && u.click(P),
                    r.closeButton && d && d.click(function(e) {
                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0),
                        P(!0)
                    }),
                    r.onclick && u.click(function(e) {
                        r.onclick(e),
                        P()
                    })
                }
                function w() {
                    u.hide(),
                    u[r.showMethod]({
                        duration: r.showDuration,
                        easing: r.showEasing,
                        complete: r.onShown
                    }),
                    r.timeOut > 0 && (s = setTimeout(P, r.timeOut),
                    p.maxHideTime = parseFloat(r.timeOut),
                    p.hideEta = (new Date).getTime() + p.maxHideTime,
                    r.progressBar && (p.intervalId = setInterval(L, 10)))
                }
                function T() {
                    i.iconClass && u.addClass(r.toastClass).addClass(a)
                }
                function k() {
                    r.newestOnTop ? t.prepend(u) : t.append(u)
                }
                function S() {
                    i.title && (c.append(r.escapeHtml ? m(i.title) : i.title).addClass(r.titleClass),
                    u.append(c))
                }
                function E() {
                    i.message && (f.append(r.escapeHtml ? m(i.message) : i.message).addClass(r.messageClass),
                    u.append(f))
                }
                function A() {
                    r.closeButton && (d.addClass("toast-close-button").attr("role", "button"),
                    u.prepend(d))
                }
                function _() {
                    r.progressBar && (h.addClass("toast-progress"),
                    u.prepend(h))
                }
                function I(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === o)
                            return !0;
                        o = t.message
                    }
                    return !1
                }
                function P(t) {
                    var i = t && r.closeMethod !== !1 ? r.closeMethod : r.hideMethod
                      , n = t && r.closeDuration !== !1 ? r.closeDuration : r.hideDuration
                      , a = t && r.closeEasing !== !1 ? r.closeEasing : r.hideEasing;
                    return !e(":focus", u).length || t ? (clearTimeout(p.intervalId),
                    u[i]({
                        duration: n,
                        easing: a,
                        complete: function() {
                            C(u),
                            r.onHidden && "hidden" !== g.state && r.onHidden(),
                            g.state = "hidden",
                            g.endTime = new Date,
                            b(g)
                        }
                    })) : void 0
                }
                function D() {
                    (r.timeOut > 0 || r.extendedTimeOut > 0) && (s = setTimeout(P, r.extendedTimeOut),
                    p.maxHideTime = parseFloat(r.extendedTimeOut),
                    p.hideEta = (new Date).getTime() + p.maxHideTime)
                }
                function O() {
                    clearTimeout(s),
                    p.hideEta = 0,
                    u.stop(!0, !0)[r.showMethod]({
                        duration: r.showDuration,
                        easing: r.showEasing
                    })
                }
                function L() {
                    var e = (p.hideEta - (new Date).getTime()) / p.maxHideTime * 100;
                    h.width(e + "%")
                }
                var r = x()
                  , a = i.iconClass || r.iconClass;
                if ("undefined" != typeof i.optionsOverride && (r = e.extend(r, i.optionsOverride),
                a = i.optionsOverride.iconClass || a),
                !I(r, i)) {
                    n++,
                    t = l(r, !0);
                    var s = null
                      , u = e("<div/>")
                      , c = e("<div/>")
                      , f = e("<div/>")
                      , h = e("<div/>")
                      , d = e(r.closeHtml)
                      , p = {
                        intervalId: null ,
                        hideEta: null ,
                        maxHideTime: null
                    }
                      , g = {
                        toastId: n,
                        state: "visible",
                        startTime: new Date,
                        options: r,
                        map: i
                    };
                    return v(),
                    w(),
                    y(),
                    b(g),
                    r.debug && console && console.log(g),
                    u
                }
            }
            function x() {
                return e.extend({}, y(), a.options)
            }
            function C(e) {
                t || (t = l()),
                e.is(":visible") || (e.remove(),
                e = null ,
                0 === t.children().length && (t.remove(),
                o = void 0))
            }
            var t, i, o, n = 0, r = {
                error: "error",
                info: "info",
                success: "success",
                warning: "warning"
            }, a = {
                clear: d,
                remove: p,
                error: s,
                getContainer: l,
                info: u,
                options: {},
                subscribe: c,
                success: f,
                version: "2.1.2",
                warning: h
            };
            return a
        }()
    })
}("function" == typeof define && define.amd ? define : function(e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
}
),
$(".smooth-scroll").on("click", "a", function(e) {
    e.preventDefault();
    var t = $(this).attr("href");
    $("body,html").animate({
        scrollTop: $(t).offset().top
    }, 700)
}),
function(e) {
    e.fn.scrollTo = function(t) {
        return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top),
        this
    }
    ,
    e.fn.dropdown = function(t) {
        var i = {
            inDuration: 300,
            outDuration: 225,
            constrain_width: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left"
        };
        this.each(function() {
            function s() {
                void 0 !== n.data("induration") && (r.inDuration = n.data("inDuration")),
                void 0 !== n.data("outduration") && (r.outDuration = n.data("outDuration")),
                void 0 !== n.data("constrainwidth") && (r.constrain_width = n.data("constrainwidth")),
                void 0 !== n.data("hover") && (r.hover = n.data("hover")),
                void 0 !== n.data("gutter") && (r.gutter = n.data("gutter")),
                void 0 !== n.data("beloworigin") && (r.belowOrigin = n.data("beloworigin")),
                void 0 !== n.data("alignment") && (r.alignment = n.data("alignment"))
            }
            function l(t) {
                "focus" === t && (a = !0),
                s(),
                o.addClass("active"),
                n.addClass("active"),
                r.constrain_width === !0 ? o.css("width", n.outerWidth()) : o.css("white-space", "nowrap");
                var i = window.innerHeight
                  , l = n.innerHeight()
                  , u = n.offset().left
                  , c = n.offset().top - e(window).scrollTop()
                  , f = r.alignment
                  , h = 0
                  , d = 0
                  , p = 0;
                r.belowOrigin === !0 && (p = l);
                var g = 0
                  , m = n.parent();
                if (!m.is("body") && m[0].scrollHeight > m[0].clientHeight && (g = m[0].scrollTop),
                u + o.innerWidth() > e(window).width() ? f = "right" : u - o.innerWidth() + n.innerWidth() < 0 && (f = "left"),
                c + o.innerHeight() > i)
                    if (c + l - o.innerHeight() < 0) {
                        var v = i - c - p;
                        o.css("max-height", v)
                    } else
                        p || (p += l),
                        p -= o.innerHeight();
                if ("left" === f)
                    h = r.gutter,
                    d = n.position().left + h;
                else if ("right" === f) {
                    var y = n.position().left + n.outerWidth() - o.outerWidth();
                    h = -r.gutter,
                    d = y + h
                }
                o.css({
                    position: "absolute",
                    top: n.position().top + p + g,
                    left: d
                }),
                o.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: r.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        e(this).css("height", "")
                    }
                }).animate({
                    opacity: 1
                }, {
                    queue: !1,
                    duration: r.inDuration,
                    easing: "easeOutSine"
                })
            }
            function u() {
                a = !1,
                o.fadeOut(r.outDuration),
                o.removeClass("active"),
                n.removeClass("active"),
                setTimeout(function() {
                    o.css("max-height", "")
                }, r.outDuration)
            }
            var n = e(this)
              , r = e.extend({}, i, t)
              , a = !1
              , o = e("#" + n.attr("data-activates"));
            if (s(),
            n.after(o),
            r.hover) {
                var c = !1;
                n.unbind("click." + n.attr("id")),
                n.on("mouseenter", function(e) {
                    c === !1 && (l(),
                    c = !0)
                }),
                n.on("mouseleave", function(t) {
                    var i = t.toElement || t.relatedTarget;
                    e(i).closest(".dropdown-content").is(o) || (o.stop(!0, !0),
                    u(),
                    c = !1)
                }),
                o.on("mouseleave", function(t) {
                    var i = t.toElement || t.relatedTarget;
                    e(i).closest(".dropdown-button").is(n) || (o.stop(!0, !0),
                    u(),
                    c = !1)
                })
            } else
                n.unbind("click." + n.attr("id")),
                n.bind("click." + n.attr("id"), function(t) {
                    a || (n[0] != t.currentTarget || n.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? n.hasClass("active") && (u(),
                    e(document).unbind("click." + o.attr("id") + " touchstart." + o.attr("id"))) : (t.preventDefault(),
                    l("click")),
                    o.hasClass("active") && e(document).bind("click." + o.attr("id") + " touchstart." + o.attr("id"), function(t) {
                        o.is(t.target) || n.is(t.target) || n.find(t.target).length || (u(),
                        e(document).unbind("click." + o.attr("id") + " touchstart." + o.attr("id")))
                    }))
                });
            n.on("open", function(e, t) {
                l(t)
            }),
            n.on("close", u)
        })
    }
    ,
    e(document).ready(function() {
        e(".dropdown-button").dropdown()
    })
}(jQuery);
var dropdownSelectors = $(".dropdown, .dropup");
dropdownSelectors.on({
    "show.bs.dropdown": function() {
        var e = dropdownEffectData(this);
        dropdownEffectStart(e, e.effectIn)
    },
    "shown.bs.dropdown": function() {
        var e = dropdownEffectData(this);
        e.effectIn && e.effectOut && dropdownEffectEnd(e, function() {})
    },
    "hide.bs.dropdown": function(e) {
        var t = dropdownEffectData(this);
        t.effectOut && (e.preventDefault(),
        dropdownEffectStart(t, t.effectOut),
        dropdownEffectEnd(t, function() {
            t.dropdown.removeClass("open")
        }))
    }
}),
$(".rotate-btn").on("click", function() {
    var e = $(this).attr("data-card");
    $("#" + e).toggleClass("flipped")
}),
function(e) {
    function n(t) {
        if ($this = t,
        $this.hasClass("active") === !1) {
            $this.addClass("active"),
            $this.find("ul .btn-floating").velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: "40px"
            }, {
                duration: 0
            });
            var i = 0;
            $this.find("ul .btn-floating").reverse().each(function() {
                e(this).velocity({
                    opacity: "1",
                    scaleX: "1",
                    scaleY: "1",
                    translateY: "0"
                }, {
                    duration: 80,
                    delay: i
                }),
                i += 40
            })
        } else {
            $this.removeClass("active");
            var i = 0;
            $this.find("ul .btn-floating").velocity("stop", !0),
            $this.find("ul .btn-floating").velocity({
                opacity: "0",
                scaleX: ".4",
                scaleY: ".4",
                translateY: "40px"
            }, {
                duration: 80
            })
        }
    }
    e(document).ready(function() {
        e.fn.reverse = [].reverse,
        e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(i) {
            var n = e(this);
            t(n)
        }),
        e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle)", function(t) {
            var n = e(this);
            i(n)
        }),
        e(document).on("click.fixedActionBtn", ".fixed-action-btn.click-to-toggle > a", function(n) {
            var r = e(this)
              , a = r.parent();
            a.hasClass("active") ? i(a) : t(a)
        })
    }),
    e.fn.extend({
        openFAB: function() {
            t(e(this))
        },
        closeFAB: function() {
            i(e(this))
        }
    });
    var t = function(t) {
        if ($this = t,
        $this.hasClass("active") === !1) {
            var n, r, i = $this.hasClass("horizontal");
            i === !0 ? r = 40 : n = 40,
            $this.addClass("active"),
            $this.find("ul .btn-floating").velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: n + "px",
                translateX: r + "px"
            }, {
                duration: 0
            });
            var a = 0;
            $this.find("ul .btn-floating").reverse().each(function() {
                e(this).velocity({
                    opacity: "1",
                    scaleX: "1",
                    scaleY: "1",
                    translateY: "0",
                    translateX: "0"
                }, {
                    duration: 80,
                    delay: a
                }),
                a += 40
            })
        }
    }
      , i = function(e) {
        $this = e;
        var i, n, t = $this.hasClass("horizontal");
        t === !0 ? n = 40 : i = 40,
        $this.removeClass("active");
        $this.find("ul .btn-floating").velocity("stop", !0),
        $this.find("ul .btn-floating").velocity({
            opacity: "0",
            scaleX: ".4",
            scaleY: ".4",
            translateY: i + "px",
            translateX: n + "px"
        }, {
            duration: 80
        })
    }
    ;
    e(".fixed-action-btn").on({
        click: function(t) {
            return t.preventDefault(),
            n(e(".fixed-action-btn")),
            !1
        }
    })
}(jQuery),
function(e, t, i, n) {
    "use strict";
    function c(e, t, i) {
        return setTimeout(y(e, i), t)
    }
    function f(e, t, i) {
        return Array.isArray(e) ? (h(e, i[t], i),
        !0) : !1
    }
    function h(e, t, i) {
        var r;
        if (e)
            if (e.forEach)
                e.forEach(t, i);
            else if (e.length !== n)
                for (r = 0; r < e.length; )
                    t.call(i, e[r], r, e),
                    r++;
            else
                for (r in e)
                    e.hasOwnProperty(r) && t.call(i, e[r], r, e)
    }
    function d(t, i, n) {
        var r = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
        return function() {
            var i = new Error("get-stack-trace")
              , n = i && i.stack ? i.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
              , a = e.console && (e.console.warn || e.console.log);
            return a && a.call(e.console, r, n),
            t.apply(this, arguments)
        }
    }
    function v(e, t, i) {
        var r, n = t.prototype;
        r = e.prototype = Object.create(n),
        r.constructor = e,
        r._super = n,
        i && p(r, i)
    }
    function y(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function b(e, t) {
        return typeof e == o ? e.apply(t ? t[0] || n : n, t) : e
    }
    function w(e, t) {
        return e === n ? t : e
    }
    function x(e, t, i) {
        h(S(t), function(t) {
            e.addEventListener(t, i, !1)
        })
    }
    function C(e, t, i) {
        h(S(t), function(t) {
            e.removeEventListener(t, i, !1)
        })
    }
    function T(e, t) {
        for (; e; ) {
            if (e == t)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function k(e, t) {
        return e.indexOf(t) > -1
    }
    function S(e) {
        return e.trim().split(/\s+/g)
    }
    function E(e, t, i) {
        if (e.indexOf && !i)
            return e.indexOf(t);
        for (var n = 0; n < e.length; ) {
            if (i && e[n][i] == t || !i && e[n] === t)
                return n;
            n++
        }
        return -1
    }
    function A(e) {
        return Array.prototype.slice.call(e, 0)
    }
    function _(e, t, i) {
        for (var n = [], r = [], a = 0; a < e.length; ) {
            var o = t ? e[a][t] : e[a];
            E(r, o) < 0 && n.push(e[a]),
            r[a] = o,
            a++
        }
        return i && (n = t ? n.sort(function(e, i) {
            return e[t] > i[t]
        }) : n.sort()),
        n
    }
    function I(e, t) {
        for (var i, a, o = t[0].toUpperCase() + t.slice(1), s = 0; s < r.length; ) {
            if (i = r[s],
            a = i ? i + o : t,
            a in e)
                return a;
            s++
        }
        return n
    }
    function D() {
        return P++
    }
    function O(t) {
        var i = t.ownerDocument || t;
        return i.defaultView || i.parentWindow || e
    }
    function ie(e, t) {
        var i = this;
        this.manager = e,
        this.callback = t,
        this.element = e.element,
        this.target = e.options.inputTarget,
        this.domHandler = function(t) {
            b(e.options.enable, [e]) && i.handler(t)
        }
        ,
        this.init()
    }
    function ne(e) {
        var t, i = e.options.inputClass;
        return new (t = i ? i : N ? ke : M ? Oe : F ? Me : be)(e,re)
    }
    function re(e, t, i) {
        var n = i.pointers.length
          , r = i.changedPointers.length
          , a = t & V && n - r === 0
          , o = t & (q | Y) && n - r === 0;
        i.isFirst = !!a,
        i.isFinal = !!o,
        a && (e.session = {}),
        i.eventType = t,
        ae(e, i),
        e.emit("hammer.input", i),
        e.recognize(i),
        e.session.prevInput = i
    }
    function ae(e, t) {
        var i = e.session
          , n = t.pointers
          , r = n.length;
        i.firstInput || (i.firstInput = le(t)),
        r > 1 && !i.firstMultiple ? i.firstMultiple = le(t) : 1 === r && (i.firstMultiple = !1);
        var a = i.firstInput
          , o = i.firstMultiple
          , s = o ? o.center : a.center
          , c = t.center = ue(n);
        t.timeStamp = u(),
        t.deltaTime = t.timeStamp - a.timeStamp,
        t.angle = de(s, c),
        t.distance = he(s, c),
        oe(i, t),
        t.offsetDirection = fe(t.deltaX, t.deltaY);
        var f = ce(t.deltaTime, t.deltaX, t.deltaY);
        t.overallVelocityX = f.x,
        t.overallVelocityY = f.y,
        t.overallVelocity = l(f.x) > l(f.y) ? f.x : f.y,
        t.scale = o ? ge(o.pointers, n) : 1,
        t.rotation = o ? pe(o.pointers, n) : 0,
        t.maxPointers = i.prevInput ? t.pointers.length > i.prevInput.maxPointers ? t.pointers.length : i.prevInput.maxPointers : t.pointers.length,
        se(i, t);
        var h = e.element;
        T(t.srcEvent.target, h) && (h = t.srcEvent.target),
        t.target = h
    }
    function oe(e, t) {
        var i = t.center
          , n = e.offsetDelta || {}
          , r = e.prevDelta || {}
          , a = e.prevInput || {};
        (t.eventType === V || a.eventType === q) && (r = e.prevDelta = {
            x: a.deltaX || 0,
            y: a.deltaY || 0
        },
        n = e.offsetDelta = {
            x: i.x,
            y: i.y
        }),
        t.deltaX = r.x + (i.x - n.x),
        t.deltaY = r.y + (i.y - n.y)
    }
    function se(e, t) {
        var a, o, s, u, i = e.lastInterval || t, r = t.timeStamp - i.timeStamp;
        if (t.eventType != Y && (r > z || i.velocity === n)) {
            var c = t.deltaX - i.deltaX
              , f = t.deltaY - i.deltaY
              , h = ce(r, c, f);
            o = h.x,
            s = h.y,
            a = l(h.x) > l(h.y) ? h.x : h.y,
            u = fe(c, f),
            e.lastInterval = t
        } else
            a = i.velocity,
            o = i.velocityX,
            s = i.velocityY,
            u = i.direction;
        t.velocity = a,
        t.velocityX = o,
        t.velocityY = s,
        t.direction = u
    }
    function le(e) {
        for (var t = [], i = 0; i < e.pointers.length; )
            t[i] = {
                clientX: s(e.pointers[i].clientX),
                clientY: s(e.pointers[i].clientY)
            },
            i++;
        return {
            timeStamp: u(),
            pointers: t,
            center: ue(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }
    function ue(e) {
        var t = e.length;
        if (1 === t)
            return {
                x: s(e[0].clientX),
                y: s(e[0].clientY)
            };
        for (var i = 0, n = 0, r = 0; t > r; )
            i += e[r].clientX,
            n += e[r].clientY,
            r++;
        return {
            x: s(i / t),
            y: s(n / t)
        }
    }
    function ce(e, t, i) {
        return {
            x: t / e || 0,
            y: i / e || 0
        }
    }
    function fe(e, t) {
        return e === t ? X : l(e) >= l(t) ? 0 > e ? $ : U : 0 > t ? Q : G
    }
    function he(e, t, i) {
        i || (i = ee);
        var n = t[i[0]] - e[i[0]]
          , r = t[i[1]] - e[i[1]];
        return Math.sqrt(n * n + r * r)
    }
    function de(e, t, i) {
        i || (i = ee);
        var n = t[i[0]] - e[i[0]]
          , r = t[i[1]] - e[i[1]];
        return 180 * Math.atan2(r, n) / Math.PI
    }
    function pe(e, t) {
        return de(t[1], t[0], te) + de(e[1], e[0], te)
    }
    function ge(e, t) {
        return he(t[0], t[1], te) / he(e[0], e[1], te)
    }
    function be() {
        this.evEl = ve,
        this.evWin = ye,
        this.pressed = !1,
        ie.apply(this, arguments)
    }
    function ke() {
        this.evEl = Ce,
        this.evWin = Te,
        ie.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function _e() {
        this.evTarget = Ee,
        this.evWin = Ae,
        this.started = !1,
        ie.apply(this, arguments)
    }
    function Ie(e, t) {
        var i = A(e.touches)
          , n = A(e.changedTouches);
        return t & (q | Y) && (i = _(i.concat(n), "identifier", !0)),
        [i, n]
    }
    function Oe() {
        this.evTarget = De,
        this.targetIds = {},
        ie.apply(this, arguments)
    }
    function Le(e, t) {
        var i = A(e.touches)
          , n = this.targetIds;
        if (t & (V | B) && 1 === i.length)
            return n[i[0].identifier] = !0,
            [i, i];
        var r, a, o = A(e.changedTouches), s = [], l = this.target;
        if (a = i.filter(function(e) {
            return T(e.target, l)
        }),
        t === V)
            for (r = 0; r < a.length; )
                n[a[r].identifier] = !0,
                r++;
        for (r = 0; r < o.length; )
            n[o[r].identifier] && s.push(o[r]),
            t & (q | Y) && delete n[o[r].identifier],
            r++;
        return s.length ? [_(a.concat(s), "identifier", !0), s] : void 0
    }
    function Me() {
        ie.apply(this, arguments);
        var e = y(this.handler, this);
        this.touch = new Oe(this.manager,e),
        this.mouse = new be(this.manager,e),
        this.primaryTouch = null ,
        this.lastTouches = []
    }
    function Re(e, t) {
        e & V ? (this.primaryTouch = t.changedPointers[0].identifier,
        We.call(this, t)) : e & (q | Y) && We.call(this, t)
    }
    function We(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
            var i = {
                x: t.clientX,
                y: t.clientY
            };
            this.lastTouches.push(i);
            var n = this.lastTouches
              , r = function() {
                var e = n.indexOf(i);
                e > -1 && n.splice(e, 1)
            }
            ;
            setTimeout(r, Fe)
        }
    }
    function He(e) {
        for (var t = e.srcEvent.clientX, i = e.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
            var r = this.lastTouches[n]
              , a = Math.abs(t - r.x)
              , o = Math.abs(i - r.y);
            if (Ne >= a && Ne >= o)
                return !0
        }
        return !1
    }
    function Qe(e, t) {
        this.manager = e,
        this.set(t)
    }
    function Ge(e) {
        if (k(e, Ye))
            return Ye;
        var t = k(e, Xe)
          , i = k(e, $e);
        return t && i ? Ye : t || i ? t ? Xe : $e : k(e, qe) ? qe : Be
    }
    function Ze() {
        if (!ze)
            return !1;
        var t = {}
          , i = e.CSS && e.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(n) {
            t[n] = i ? e.CSS.supports("touch-action", n) : !0
        }),
        t
    }
    function at(e) {
        this.options = p({}, this.defaults, e || {}),
        this.id = D(),
        this.manager = null ,
        this.options.enable = w(this.options.enable, !0),
        this.state = Ke,
        this.simultaneous = {},
        this.requireFail = []
    }
    function ot(e) {
        return e & nt ? "cancel" : e & tt ? "end" : e & et ? "move" : e & Je ? "start" : ""
    }
    function st(e) {
        return e == G ? "down" : e == Q ? "up" : e == $ ? "left" : e == U ? "right" : ""
    }
    function lt(e, t) {
        var i = t.manager;
        return i ? i.get(e) : e
    }
    function ut() {
        at.apply(this, arguments)
    }
    function ct() {
        ut.apply(this, arguments),
        this.pX = null ,
        this.pY = null
    }
    function ft() {
        ut.apply(this, arguments)
    }
    function ht() {
        at.apply(this, arguments),
        this._timer = null ,
        this._input = null
    }
    function dt() {
        ut.apply(this, arguments)
    }
    function pt() {
        ut.apply(this, arguments)
    }
    function gt() {
        at.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null ,
        this._input = null ,
        this.count = 0
    }
    function mt(e, t) {
        return t = t || {},
        t.recognizers = w(t.recognizers, mt.defaults.preset),
        new bt(e,t)
    }
    function bt(e, t) {
        this.options = p({}, mt.defaults, t || {}),
        this.options.inputTarget = this.options.inputTarget || e,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.oldCssProps = {},
        this.element = e,
        this.input = ne(this),
        this.touchAction = new Qe(this,this.options.touchAction),
        wt(this, !0),
        h(this.options.recognizers, function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]),
            e[3] && t.requireFailure(e[3])
        }, this)
    }
    function wt(e, t) {
        var i = e.element;
        if (i.style) {
            var n;
            h(e.options.cssProps, function(r, a) {
                n = I(i.style, a),
                t ? (e.oldCssProps[n] = i.style[n],
                i.style[n] = r) : i.style[n] = e.oldCssProps[n] || ""
            }),
            t || (e.oldCssProps = {})
        }
    }
    function xt(e, i) {
        var n = t.createEvent("Event");
        n.initEvent(e, !0, !0),
        n.gesture = i,
        i.target.dispatchEvent(n)
    }
    var p, r = ["", "webkit", "Moz", "MS", "ms", "o"], a = t.createElement("div"), o = "function", s = Math.round, l = Math.abs, u = Date.now;
    p = "function" != typeof Object.assign ? function(e) {
        if (e === n || null === e)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), i = 1; i < arguments.length; i++) {
            var r = arguments[i];
            if (r !== n && null !== r)
                for (var a in r)
                    r.hasOwnProperty(a) && (t[a] = r[a])
        }
        return t
    }
    : Object.assign;
    var g = d(function(e, t, i) {
        for (var r = Object.keys(t), a = 0; a < r.length; )
            (!i || i && e[r[a]] === n) && (e[r[a]] = t[r[a]]),
            a++;
        return e
    }, "extend", "Use `assign`.")
      , m = d(function(e, t) {
        return g(e, t, !0)
    }, "merge", "Use `assign`.")
      , P = 1
      , L = /mobile|tablet|ip(ad|hone|od)|android/i
      , F = "ontouchstart"in e
      , N = I(e, "PointerEvent") !== n
      , M = F && L.test(navigator.userAgent)
      , R = "touch"
      , W = "pen"
      , H = "mouse"
      , j = "kinect"
      , z = 25
      , V = 1
      , B = 2
      , q = 4
      , Y = 8
      , X = 1
      , $ = 2
      , U = 4
      , Q = 8
      , G = 16
      , Z = $ | U
      , K = Q | G
      , J = Z | K
      , ee = ["x", "y"]
      , te = ["clientX", "clientY"];
    ie.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && x(this.element, this.evEl, this.domHandler),
            this.evTarget && x(this.target, this.evTarget, this.domHandler),
            this.evWin && x(O(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && C(this.element, this.evEl, this.domHandler),
            this.evTarget && C(this.target, this.evTarget, this.domHandler),
            this.evWin && C(O(this.element), this.evWin, this.domHandler)
        }
    };
    var me = {
        mousedown: V,
        mousemove: B,
        mouseup: q
    }
      , ve = "mousedown"
      , ye = "mousemove mouseup";
    v(be, ie, {
        handler: function(e) {
            var t = me[e.type];
            t & V && 0 === e.button && (this.pressed = !0),
            t & B && 1 !== e.which && (t = q),
            this.pressed && (t & q && (this.pressed = !1),
            this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: H,
                srcEvent: e
            }))
        }
    });
    var we = {
        pointerdown: V,
        pointermove: B,
        pointerup: q,
        pointercancel: Y,
        pointerout: Y
    }
      , xe = {
        2: R,
        3: W,
        4: H,
        5: j
    }
      , Ce = "pointerdown"
      , Te = "pointermove pointerup pointercancel";
    e.MSPointerEvent && !e.PointerEvent && (Ce = "MSPointerDown",
    Te = "MSPointerMove MSPointerUp MSPointerCancel"),
    v(ke, ie, {
        handler: function(e) {
            var t = this.store
              , i = !1
              , n = e.type.toLowerCase().replace("ms", "")
              , r = we[n]
              , a = xe[e.pointerType] || e.pointerType
              , o = a == R
              , s = E(t, e.pointerId, "pointerId");
            r & V && (0 === e.button || o) ? 0 > s && (t.push(e),
            s = t.length - 1) : r & (q | Y) && (i = !0),
            0 > s || (t[s] = e,
            this.callback(this.manager, r, {
                pointers: t,
                changedPointers: [e],
                pointerType: a,
                srcEvent: e
            }),
            i && t.splice(s, 1))
        }
    });
    var Se = {
        touchstart: V,
        touchmove: B,
        touchend: q,
        touchcancel: Y
    }
      , Ee = "touchstart"
      , Ae = "touchstart touchmove touchend touchcancel";
    v(_e, ie, {
        handler: function(e) {
            var t = Se[e.type];
            if (t === V && (this.started = !0),
            this.started) {
                var i = Ie.call(this, e, t);
                t & (q | Y) && i[0].length - i[1].length === 0 && (this.started = !1),
                this.callback(this.manager, t, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: R,
                    srcEvent: e
                })
            }
        }
    });
    var Pe = {
        touchstart: V,
        touchmove: B,
        touchend: q,
        touchcancel: Y
    }
      , De = "touchstart touchmove touchend touchcancel";
    v(Oe, ie, {
        handler: function(e) {
            var t = Pe[e.type]
              , i = Le.call(this, e, t);
            i && this.callback(this.manager, t, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: R,
                srcEvent: e
            })
        }
    });
    var Fe = 2500
      , Ne = 25;
    v(Me, ie, {
        handler: function(e, t, i) {
            var n = i.pointerType == R
              , r = i.pointerType == H;
            if (!(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                if (n)
                    Re.call(this, t, i);
                else if (r && He.call(this, i))
                    return;
                this.callback(e, t, i)
            }
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var je = I(a.style, "touchAction")
      , ze = je !== n
      , Ve = "compute"
      , Be = "auto"
      , qe = "manipulation"
      , Ye = "none"
      , Xe = "pan-x"
      , $e = "pan-y"
      , Ue = Ze();
    Qe.prototype = {
        set: function(e) {
            e == Ve && (e = this.compute()),
            ze && this.manager.element.style && Ue[e] && (this.manager.element.style[je] = e),
            this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return h(this.manager.recognizers, function(t) {
                b(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }),
            Ge(e.join(" "))
        },
        preventDefaults: function(e) {
            var t = e.srcEvent
              , i = e.offsetDirection;
            if (this.manager.session.prevented)
                return void t.preventDefault();
            var n = this.actions
              , r = k(n, Ye) && !Ue[Ye]
              , a = k(n, $e) && !Ue[$e]
              , o = k(n, Xe) && !Ue[Xe];
            if (r) {
                var s = 1 === e.pointers.length
                  , l = e.distance < 2
                  , u = e.deltaTime < 250;
                if (s && l && u)
                    return
            }
            return o && a ? void 0 : r || a && i & Z || o && i & K ? this.preventSrc(t) : void 0
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0,
            e.preventDefault()
        }
    };
    var Ke = 1
      , Je = 2
      , et = 4
      , tt = 8
      , it = tt
      , nt = 16
      , rt = 32;
    at.prototype = {
        defaults: {},
        set: function(e) {
            return p(this.options, e),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(e) {
            if (f(e, "recognizeWith", this))
                return this;
            var t = this.simultaneous;
            return e = lt(e, this),
            t[e.id] || (t[e.id] = e,
            e.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(e) {
            return f(e, "dropRecognizeWith", this) ? this : (e = lt(e, this),
            delete this.simultaneous[e.id],
            this)
        },
        requireFailure: function(e) {
            if (f(e, "requireFailure", this))
                return this;
            var t = this.requireFail;
            return e = lt(e, this),
            -1 === E(t, e) && (t.push(e),
            e.requireFailure(this)),
            this
        },
        dropRequireFailure: function(e) {
            if (f(e, "dropRequireFailure", this))
                return this;
            e = lt(e, this);
            var t = E(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(e) {
            function n(i) {
                t.manager.emit(i, e)
            }
            var t = this
              , i = this.state;
            tt > i && n(t.options.event + ot(i)),
            n(t.options.event),
            e.additionalEvent && n(e.additionalEvent),
            i >= tt && n(t.options.event + ot(i))
        },
        tryEmit: function(e) {
            return this.canEmit() ? this.emit(e) : void (this.state = rt)
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length; ) {
                if (!(this.requireFail[e].state & (rt | Ke)))
                    return !1;
                e++
            }
            return !0
        },
        recognize: function(e) {
            var t = p({}, e);
            return b(this.options.enable, [this, t]) ? (this.state & (it | nt | rt) && (this.state = Ke),
            this.state = this.process(t),
            void (this.state & (Je | et | tt | nt) && this.tryEmit(t))) : (this.reset(),
            void (this.state = rt))
        },
        process: function(e) {},
        getTouchAction: function() {},
        reset: function() {}
    },
    v(ut, at, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state
              , i = e.eventType
              , n = t & (Je | et)
              , r = this.attrTest(e);
            return n && (i & Y || !r) ? t | nt : n || r ? i & q ? t | tt : t & Je ? t | et : Je : rt
        }
    }),
    v(ct, ut, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: J
        },
        getTouchAction: function() {
            var e = this.options.direction
              , t = [];
            return e & Z && t.push($e),
            e & K && t.push(Xe),
            t
        },
        directionTest: function(e) {
            var t = this.options
              , i = !0
              , n = e.distance
              , r = e.direction
              , a = e.deltaX
              , o = e.deltaY;
            return r & t.direction || (t.direction & Z ? (r = 0 === a ? X : 0 > a ? $ : U,
            i = a != this.pX,
            n = Math.abs(e.deltaX)) : (r = 0 === o ? X : 0 > o ? Q : G,
            i = o != this.pY,
            n = Math.abs(e.deltaY))),
            e.direction = r,
            i && n > t.threshold && r & t.direction
        },
        attrTest: function(e) {
            return ut.prototype.attrTest.call(this, e) && (this.state & Je || !(this.state & Je) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX,
            this.pY = e.deltaY;
            var t = st(e.direction);
            t && (e.additionalEvent = this.options.event + t),
            this._super.emit.call(this, e)
        }
    }),
    v(ft, ut, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ye]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & Je)
        },
        emit: function(e) {
            if (1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
        }
    }),
    v(ht, at, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return [Be]
        },
        process: function(e) {
            var t = this.options
              , i = e.pointers.length === t.pointers
              , n = e.distance < t.threshold
              , r = e.deltaTime > t.time;
            if (this._input = e,
            !n || !i || e.eventType & (q | Y) && !r)
                this.reset();
            else if (e.eventType & V)
                this.reset(),
                this._timer = c(function() {
                    this.state = it,
                    this.tryEmit()
                }, t.time, this);
            else if (e.eventType & q)
                return it;
            return rt
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            this.state === it && (e && e.eventType & q ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = u(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    v(dt, ut, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Ye]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & Je)
        }
    }),
    v(pt, ut, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Z | K,
            pointers: 1
        },
        getTouchAction: function() {
            return ct.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var i, t = this.options.direction;
            return t & (Z | K) ? i = e.overallVelocity : t & Z ? i = e.overallVelocityX : t & K && (i = e.overallVelocityY),
            this._super.attrTest.call(this, e) && t & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && l(i) > this.options.velocity && e.eventType & q
        },
        emit: function(e) {
            var t = st(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e),
            this.manager.emit(this.options.event, e)
        }
    }),
    v(gt, at, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [qe]
        },
        process: function(e) {
            var t = this.options
              , i = e.pointers.length === t.pointers
              , n = e.distance < t.threshold
              , r = e.deltaTime < t.time;
            if (this.reset(),
            e.eventType & V && 0 === this.count)
                return this.failTimeout();
            if (n && r && i) {
                if (e.eventType != q)
                    return this.failTimeout();
                var a = this.pTime ? e.timeStamp - this.pTime < t.interval : !0
                  , o = !this.pCenter || he(this.pCenter, e.center) < t.posThreshold;
                this.pTime = e.timeStamp,
                this.pCenter = e.center,
                o && a ? this.count += 1 : this.count = 1,
                this._input = e;
                var s = this.count % t.taps;
                if (0 === s)
                    return this.hasRequireFailures() ? (this._timer = c(function() {
                        this.state = it,
                        this.tryEmit()
                    }, t.interval, this),
                    Je) : it
            }
            return rt
        },
        failTimeout: function() {
            return this._timer = c(function() {
                this.state = rt
            }, this.options.interval, this),
            rt
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == it && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    mt.VERSION = "2.0.7",
    mt.defaults = {
        domEvents: !1,
        touchAction: Ve,
        enable: !0,
        inputTarget: null ,
        inputClass: null ,
        preset: [[dt, {
            enable: !1
        }], [ft, {
            enable: !1
        }, ["rotate"]], [pt, {
            direction: Z
        }], [ct, {
            direction: Z
        }, ["swipe"]], [gt], [gt, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [ht]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var vt = 1
      , yt = 2;
    bt.prototype = {
        set: function(e) {
            return p(this.options, e),
            e.touchAction && this.touchAction.update(),
            e.inputTarget && (this.input.destroy(),
            this.input.target = e.inputTarget,
            this.input.init()),
            this
        },
        stop: function(e) {
            this.session.stopped = e ? yt : vt
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var i, n = this.recognizers, r = t.curRecognizer;
                (!r || r && r.state & it) && (r = t.curRecognizer = null );
                for (var a = 0; a < n.length; )
                    i = n[a],
                    t.stopped === yt || r && i != r && !i.canRecognizeWith(r) ? i.reset() : i.recognize(e),
                    !r && i.state & (Je | et | tt) && (r = t.curRecognizer = i),
                    a++
            }
        },
        get: function(e) {
            if (e instanceof at)
                return e;
            for (var t = this.recognizers, i = 0; i < t.length; i++)
                if (t[i].options.event == e)
                    return t[i];
            return null
        },
        add: function(e) {
            if (f(e, "add", this))
                return this;
            var t = this.get(e.options.event);
            return t && this.remove(t),
            this.recognizers.push(e),
            e.manager = this,
            this.touchAction.update(),
            e
        },
        remove: function(e) {
            if (f(e, "remove", this))
                return this;
            if (e = this.get(e)) {
                var t = this.recognizers
                  , i = E(t, e);
                -1 !== i && (t.splice(i, 1),
                this.touchAction.update())
            }
            return this
        },
        on: function(e, t) {
            if (e !== n && t !== n) {
                var i = this.handlers;
                return h(S(e), function(e) {
                    i[e] = i[e] || [],
                    i[e].push(t)
                }),
                this
            }
        },
        off: function(e, t) {
            if (e !== n) {
                var i = this.handlers;
                return h(S(e), function(e) {
                    t ? i[e] && i[e].splice(E(i[e], t), 1) : delete i[e]
                }),
                this
            }
        },
        emit: function(e, t) {
            this.options.domEvents && xt(e, t);
            var i = this.handlers[e] && this.handlers[e].slice();
            if (i && i.length) {
                t.type = e,
                t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                }
                ;
                for (var n = 0; n < i.length; )
                    i[n](t),
                    n++
            }
        },
        destroy: function() {
            this.element && wt(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    p(mt, {
        INPUT_START: V,
        INPUT_MOVE: B,
        INPUT_END: q,
        INPUT_CANCEL: Y,
        STATE_POSSIBLE: Ke,
        STATE_BEGAN: Je,
        STATE_CHANGED: et,
        STATE_ENDED: tt,
        STATE_RECOGNIZED: it,
        STATE_CANCELLED: nt,
        STATE_FAILED: rt,
        DIRECTION_NONE: X,
        DIRECTION_LEFT: $,
        DIRECTION_RIGHT: U,
        DIRECTION_UP: Q,
        DIRECTION_DOWN: G,
        DIRECTION_HORIZONTAL: Z,
        DIRECTION_VERTICAL: K,
        DIRECTION_ALL: J,
        Manager: bt,
        Input: ie,
        TouchAction: Qe,
        TouchInput: Oe,
        MouseInput: be,
        PointerEventInput: ke,
        TouchMouseInput: Me,
        SingleTouchInput: _e,
        Recognizer: at,
        AttrRecognizer: ut,
        Tap: gt,
        Pan: ct,
        Swipe: pt,
        Pinch: ft,
        Rotate: dt,
        Press: ht,
        on: x,
        off: C,
        each: h,
        merge: m,
        extend: g,
        assign: p,
        inherit: v,
        bindFn: y,
        prefixed: I
    });
    var Ct = "undefined" != typeof e ? e : "undefined" != typeof self ? self : {};
    Ct.Hammer = mt,
    "function" == typeof define && define.amd ? define(function() {
        return mt
    }) : "undefined" != typeof module && module.exports ? module.exports = mt : e[i] = mt
}(window, document, "Hammer"),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
}(function(e, t) {
    function i(i, n) {
        var r = e(i);
        r.data("hammer") || r.data("hammer", new t(r[0],n))
    }
    e.fn.hammer = function(e) {
        return this.each(function() {
            i(this, e)
        })
    }
    ,
    t.Manager.prototype.emit = function(t) {
        return function(i, n) {
            t.call(this, i, n),
            e(this.element).trigger({
                type: i,
                gesture: n
            })
        }
    }(t.Manager.prototype.emit)
}),
function(e) {
    var t = {
        init: function(t) {
            var i = {
                menuWidth: 240,
                edge: "left",
                closeOnClick: !1
            };
            t = e.extend(i, t),
            e(this).each(function() {
                function a(i) {
                    o = !1,
                    s = !1,
                    e("body").css({
                        overflow: "",
                        width: ""
                    }),
                    e("#sidenav-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            e(this).remove()
                        }
                    }),
                    "left" === t.edge ? (r.css({
                        width: "",
                        right: "",
                        left: "0"
                    }),
                    n.velocity({
                        translateX: "-100%"
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            i === !0 && (n.removeAttr("style"),
                            n.css("width", t.menuWidth))
                        }
                    })) : (r.css({
                        width: "",
                        right: "0",
                        left: ""
                    }),
                    n.velocity({
                        translateX: "100%"
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            i === !0 && (n.removeAttr("style"),
                            n.css("width", t.menuWidth))
                        }
                    }))
                }
                var i = e(this)
                  , n = e("#" + i.attr("data-activates"));
                240 != t.menuWidth && n.css("width", t.menuWidth);
                var r = e('<div class="drag-target"></div>');
                e("body").append(r),
                "left" == t.edge ? (n.css("transform", "translateX(-100%)"),
                r.css({
                    left: 0
                })) : (n.addClass("right-aligned").css("transform", "translateX(100%)"),
                r.css({
                    right: 0
                })),
                n.hasClass("fixed") && window.innerWidth > 1440 && n.css("transform", "translateX(0)"),
                n.hasClass("fixed") && e(window).resize(function() {
                    window.innerWidth > 1440 ? 0 != e("#sidenav-overlay").length && s ? a(!0) : n.css("transform", "translateX(0%)") : s === !1 && ("left" === t.edge ? n.css("transform", "translateX(-100%)") : n.css("transform", "translateX(100%)"))
                }),
                t.closeOnClick === !0 && n.on("click.itemclick", "a:not(.collapsible-header)", function() {
                    a()
                });
                var o = !1
                  , s = !1;
                r.on("click", function() {
                    a()
                }),
                r.hammer({
                    prevent_default: !1
                }).bind("pan", function(i) {
                    if ("touch" == i.gesture.pointerType) {
                        var o = (i.gesture.direction,
                        i.gesture.center.x)
                          , c = (i.gesture.center.y,
                        i.gesture.velocityX,
                        e("body"))
                          , f = c.innerWidth();
                        if (c.css("overflow", "hidden"),
                        c.width(f),
                        0 === e("#sidenav-overlay").length) {
                            var h = e('<div id="sidenav-overlay"></div>');
                            h.css("opacity", 0).click(function() {
                                a()
                            }),
                            e("body").append(h)
                        }
                        if ("left" === t.edge && (o > t.menuWidth ? o = t.menuWidth : 0 > o && (o = 0)),
                        "left" === t.edge)
                            o < t.menuWidth / 2 ? s = !1 : o >= t.menuWidth / 2 && (s = !0),
                            n.css("transform", "translateX(" + (o - t.menuWidth) + "px)");
                        else {
                            o < window.innerWidth - t.menuWidth / 2 ? s = !0 : o >= window.innerWidth - t.menuWidth / 2 && (s = !1);
                            var d = o - t.menuWidth / 2;
                            0 > d && (d = 0),
                            n.css("transform", "translateX(" + d + "px)")
                        }
                        var p;
                        "left" === t.edge ? (p = o / t.menuWidth,
                        e("#sidenav-overlay").velocity({
                            opacity: p
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (p = Math.abs((o - window.innerWidth) / t.menuWidth),
                        e("#sidenav-overlay").velocity({
                            opacity: p
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function(i) {
                    if ("touch" == i.gesture.pointerType) {
                        var a = i.gesture.velocityX
                          , l = i.gesture.center.x
                          , u = l - t.menuWidth
                          , c = l - t.menuWidth / 2;
                        u > 0 && (u = 0),
                        0 > c && (c = 0),
                        o = !1,
                        "left" === t.edge ? s && .3 >= a || -.5 > a ? (0 != u && n.velocity({
                            translateX: [0, u]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        e("#sidenav-overlay").velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        r.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        })) : (!s || a > .3) && (e("body").css({
                            overflow: "",
                            width: ""
                        }),
                        n.velocity({
                            translateX: [-1 * t.menuWidth - 10, u]
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        e("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }),
                        r.css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : s && a >= -.3 || a > .5 ? (n.velocity({
                            translateX: [0, c]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        e("#sidenav-overlay").velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        r.css({
                            width: "50%",
                            right: "",
                            left: 0
                        })) : (!s || -.3 > a) && (e("body").css({
                            overflow: "",
                            width: ""
                        }),
                        n.velocity({
                            translateX: [t.menuWidth + 10, c]
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        e("#sidenav-overlay").velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }),
                        r.css({
                            width: "10px",
                            right: 0,
                            left: ""
                        }))
                    }
                }),
                i.click(function() {
                    if (s === !0)
                        s = !1,
                        o = !1,
                        a();
                    else {
                        var i = e("body")
                          , l = i.innerWidth();
                        i.css("overflow", "hidden"),
                        i.width(l),
                        e("body").append(r),
                        "left" === t.edge ? (r.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }),
                        n.velocity({
                            translateX: [0, -1 * t.menuWidth]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (r.css({
                            width: "50%",
                            right: "",
                            left: 0
                        }),
                        n.velocity({
                            translateX: [0, t.menuWidth]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }));
                        var u = e('<div id="sidenav-overlay"></div>');
                        u.css("opacity", 0).click(function() {
                            s = !1,
                            o = !1,
                            a(),
                            u.velocity({
                                opacity: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    e(this).remove()
                                }
                            })
                        }),
                        e("body").append(u),
                        u.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                s = !0,
                                o = !1
                            }
                        })
                    }
                    return !1
                })
            })
        },
        show: function() {
            this.trigger("click")
        },
        hide: function() {
            e("#sidenav-overlay").trigger("click")
        }
    };
    e.fn.sideNav = function(i) {
        return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.sideNav") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    e.fn.collapsible = function(t) {
        var i = {
            accordion: void 0
        };
        return t = e.extend(i, t),
        this.each(function() {
            function a(t) {
                n = i.find("> li > .collapsible-header"),
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"),
                t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }),
                n.not(t).removeClass("active").parent().removeClass("active"),
                n.not(t).parent().children(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }
            function o(t) {
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"),
                t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }
            function s(e) {
                var t = l(e);
                return t.length > 0
            }
            function l(e) {
                return e.closest("li > .collapsible-header")
            }
            var i = e(this)
              , n = e(this).find("> li > .collapsible-header")
              , r = i.data("collapsible");
            i.off("click.collapse", ".collapsible-header"),
            n.off("click.collapse"),
            t.accordion || "accordion" === r || void 0 === r ? (n = i.find("> li > .collapsible-header"),
            n.on("click.collapse", function(t) {
                var i = e(t.target);
                s(i) && (i = l(i)),
                i.toggleClass("active"),
                a(i)
            }),
            a(n.filter(".active").first())) : n.each(function() {
                e(this).on("click.collapse", function(t) {
                    var i = e(t.target);
                    s(i) && (i = l(i)),
                    i.toggleClass("active"),
                    o(i)
                }),
                e(this).hasClass("active") && o(e(this))
            })
        })
    }
    ,
    e(document).ready(function() {
        e(".collapsible").collapsible()
    })
}(jQuery),
function(e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function(e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(this, function(e) {
    var t = function(e, t) {
        var i, n = document.createElement("canvas");
        e.appendChild(n),
        "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
        var r = n.getContext("2d");
        n.width = n.height = t.size;
        var a = 1;
        window.devicePixelRatio > 1 && (a = window.devicePixelRatio,
        n.style.width = n.style.height = [t.size, "px"].join(""),
        n.width = n.height = t.size * a,
        r.scale(a, a)),
        r.translate(t.size / 2, t.size / 2),
        r.rotate((-0.5 + t.rotate / 180) * Math.PI);
        var o = (t.size - t.lineWidth) / 2;
        t.scaleColor && t.scaleLength && (o -= t.scaleLength + 2),
        Date.now = Date.now || function() {
            return +new Date
        }
        ;
        var s = function(e, t, i) {
            i = Math.min(Math.max(-1, i || 0), 1);
            var n = 0 >= i ? !0 : !1;
            r.beginPath(),
            r.arc(0, 0, o, 0, 2 * Math.PI * i, n),
            r.strokeStyle = e,
            r.lineWidth = t,
            r.stroke()
        }
          , l = function() {
            var e, i;
            r.lineWidth = 1,
            r.fillStyle = t.scaleColor,
            r.save();
            for (var n = 24; n > 0; --n)
                n % 6 === 0 ? (i = t.scaleLength,
                e = 0) : (i = .6 * t.scaleLength,
                e = t.scaleLength - i),
                r.fillRect(-t.size / 2 + e, 0, i, 1),
                r.rotate(Math.PI / 12);
            r.restore()
        }
          , u = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / 60)
            }
        }()
          , c = function() {
            t.scaleColor && l(),
            t.trackColor && s(t.trackColor, t.trackWidth || t.lineWidth, 1)
        }
        ;
        this.getCanvas = function() {
            return n
        }
        ,
        this.getCtx = function() {
            return r
        }
        ,
        this.clear = function() {
            r.clearRect(t.size / -2, t.size / -2, t.size, t.size)
        }
        ,
        this.draw = function(e) {
            t.scaleColor || t.trackColor ? r.getImageData && r.putImageData ? i ? r.putImageData(i, 0, 0) : (c(),
            i = r.getImageData(0, 0, t.size * a, t.size * a)) : (this.clear(),
            c()) : this.clear(),
            r.lineCap = t.lineCap;
            var n;
            n = "function" == typeof t.barColor ? t.barColor(e) : t.barColor,
            s(n, t.lineWidth, e / 100)
        }
        .bind(this),
        this.animate = function(e, i) {
            var n = Date.now();
            t.onStart(e, i);
            var r = function() {
                var a = Math.min(Date.now() - n, t.animate.duration)
                  , o = t.easing(this, a, e, i - e, t.animate.duration);
                this.draw(o),
                t.onStep(e, i, o),
                a >= t.animate.duration ? t.onStop(e, i) : u(r)
            }
            .bind(this);
            u(r)
        }
        .bind(this)
    }
      , i = function(e, i) {
        var n = {
            barColor: "#ef1e25",
            trackColor: "#f9f9f9",
            scaleColor: "#dfe0e0",
            scaleLength: 5,
            lineCap: "round",
            lineWidth: 3,
            trackWidth: void 0,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1e3,
                enabled: !0
            },
            easing: function(e, t, i, n, r) {
                return t /= r / 2,
                1 > t ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
            },
            onStart: function(e, t) {},
            onStep: function(e, t, i) {},
            onStop: function(e, t) {}
        };
        if ("undefined" != typeof t)
            n.renderer = t;
        else {
            if ("undefined" == typeof SVGRenderer)
                throw new Error("Please load either the SVG- or the CanvasRenderer");
            n.renderer = SVGRenderer
        }
        var r = {}
          , a = 0
          , o = function() {
            this.el = e,
            this.options = r;
            for (var t in n)
                n.hasOwnProperty(t) && (r[t] = i && "undefined" != typeof i[t] ? i[t] : n[t],
                "function" == typeof r[t] && (r[t] = r[t].bind(this)));
            "string" == typeof r.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[r.easing]) ? r.easing = jQuery.easing[r.easing] : r.easing = n.easing,
            "number" == typeof r.animate && (r.animate = {
                duration: r.animate,
                enabled: !0
            }),
            "boolean" != typeof r.animate || r.animate || (r.animate = {
                duration: 1e3,
                enabled: r.animate
            }),
            this.renderer = new r.renderer(e,r),
            this.renderer.draw(a),
            e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
        }
        .bind(this);
        this.update = function(e) {
            return e = parseFloat(e),
            r.animate.enabled ? this.renderer.animate(a, e) : this.renderer.draw(e),
            a = e,
            this
        }
        .bind(this),
        this.disableAnimation = function() {
            return r.animate.enabled = !1,
            this
        }
        ,
        this.enableAnimation = function() {
            return r.animate.enabled = !0,
            this
        }
        ,
        o()
    }
    ;
    e.fn.easyPieChart = function(t) {
        return this.each(function() {
            var n;
            e.data(this, "easyPieChart") || (n = e.extend({}, t, e(this).data()),
            e.data(this, "easyPieChart", new i(this,n)))
        })
    }
}),
$(function() {
    var e = !0;
    $("#accordion").on("show.bs.collapse", function() {
        e && $("#accordion .in").collapse("hide")
    })
}),
function(e) {
    e(document).ready(function() {
        function r(t) {
            var n = t.css("font-family")
              , r = t.css("font-size");
            r && i.css("font-size", r),
            n && i.css("font-family", n),
            "off" === t.attr("wrap") && i.css("overflow-wrap", "normal").css("white-space", "pre"),
            i.text(t.val() + "\n");
            var a = i.html().replace(/\n/g, "<br>");
            i.html(a),
            t.is(":visible") ? i.css("width", t.width()) : i.css("width", e(window).width() / 2),
            t.css("height", i.height())
        }
        Materialize.updateTextFields = function() {
            var t = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            e(t).each(function(t, i) {
                e(i).val().length > 0 || i.autofocus || void 0 !== e(this).attr("placeholder") || e(i)[0].validity.badInput === !0 ? e(this).siblings("label, i").addClass("active") : e(this).siblings("label, i").removeClass("active")
            })
        }
        ;
        var t = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        e(document).on("change", t, function() {
            (0 !== e(this).val().length || void 0 !== e(this).attr("placeholder")) && e(this).siblings("label").addClass("active"),
            validate_field(e(this))
        }),
        e(document).ready(function() {
            Materialize.updateTextFields()
        }),
        e(document).on("reset", function(i) {
            var n = e(i.target);
            n.is("form") && (n.find(t).removeClass("valid").removeClass("invalid"),
            n.find(t).each(function() {
                "" === e(this).attr("value") && e(this).siblings("label, i").removeClass("active")
            }),
            n.find("select.initialized").each(function() {
                var e = n.find("option[selected]").text();
                n.siblings("input.select-dropdown").val(e)
            }))
        }),
        e(document).on("focus", t, function() {
            e(this).siblings("label, i").addClass("active")
        }),
        e(document).on("blur", t, function() {
            var t = e(this);
            0 === t.val().length && t[0].validity.badInput !== !0 && void 0 === t.attr("placeholder") && t.siblings("label, i").removeClass("active"),
            0 === t.val().length && t[0].validity.badInput !== !0 && void 0 !== t.attr("placeholder") && t.siblings("i").removeClass("active"),
            validate_field(t)
        }),
        window.validate_field = function(e) {
            var t = void 0 !== e.attr("length")
              , i = parseInt(e.attr("length"))
              , n = e.val().length;
            0 === e.val().length && e[0].validity.badInput === !1 ? e.hasClass("validate") && (e.removeClass("valid"),
            e.removeClass("invalid")) : e.hasClass("validate") && (e.is(":valid") && t && i >= n || e.is(":valid") && !t ? (e.removeClass("invalid"),
            e.addClass("valid")) : (e.removeClass("valid"),
            e.addClass("invalid")))
        }
        ;
        var i = e(".hiddendiv").first();
        i.length || (i = e('<div class="hiddendiv common"></div>'),
        e("body").append(i));
        var n = ".materialize-textarea";
        e(n).each(function() {
            var t = e(this);
            t.val().length && r(t)
        }),
        e("body").on("keyup keydown autoresize", n, function() {
            r(e(this))
        }),
        e(document).on("change", '.file-field input[type="file"]', function() {
            for (var t = e(this).closest(".file-field"), i = t.find("input.file-path"), n = e(this)[0].files, r = [], a = 0; a < n.length; a++)
                r.push(n[a].name);
            i.val(r.join(", ")),
            i.trigger("change")
        });
        var s, a = "input[type=range]", o = !1;
        e(a).each(function() {
            var t = e('<span class="thumb"><span class="value"></span></span>');
            e(this).after(t)
        });
        var l = ".range-field";
        e(document).on("change", a, function(t) {
            var i = e(this).siblings(".thumb");
            i.find(".value").html(e(this).val())
        }),
        e(document).on("input mousedown touchstart", a, function(t) {
            var i = e(this).siblings(".thumb")
              , n = e(this).outerWidth();
            i.length <= 0 && (i = e('<span class="thumb"><span class="value"></span></span>'),
            e(this).after(i)),
            i.find(".value").html(e(this).val()),
            o = !0,
            e(this).addClass("active"),
            i.hasClass("active") || i.velocity({
                height: "30px",
                width: "30px",
                top: "-20px",
                marginLeft: "-15px"
            }, {
                duration: 300,
                easing: "easeOutExpo"
            }),
            "input" !== t.type && (s = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left,
            0 > s ? s = 0 : s > n && (s = n),
            i.addClass("active").css("left", s)),
            i.find(".value").html(e(this).val())
        }),
        e(document).on("mouseup touchend", l, function() {
            o = !1,
            e(this).removeClass("active")
        }),
        e(document).on("mousemove touchmove", l, function(t) {
            var n, i = e(this).children(".thumb");
            if (o) {
                i.hasClass("active") || i.velocity({
                    height: "30px",
                    width: "30px",
                    top: "-20px",
                    marginLeft: "-15px"
                }, {
                    duration: 300,
                    easing: "easeOutExpo"
                }),
                n = void 0 === t.pageX || null === t.pageX ? t.originalEvent.touches[0].pageX - e(this).offset().left : t.pageX - e(this).offset().left;
                var r = e(this).outerWidth();
                0 > n ? n = 0 : n > r && (n = r),
                i.addClass("active").css("left", n),
                i.find(".value").html(i.siblings(a).val())
            }
        }),
        e(document).on("mouseout touchleave", l, function() {
            if (!o) {
                var t = e(this).children(".thumb");
                t.hasClass("active") && t.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: "-6px"
                }, {
                    duration: 100
                }),
                t.removeClass("active")
            }
        })
    }),
    e.fn.material_select = function(t) {
        function i(e, t, i) {
            var r = e.indexOf(t)
              , a = -1 === r;
            return a ? e.push(t) : e.splice(r, 1),
            i.siblings("ul.dropdown-content").find("li").eq(t).toggleClass("active"),
            i.find("option").eq(t).prop("selected", a),
            n(e, i),
            a
        }
        function n(e, t) {
            for (var i = "", n = 0, r = e.length; r > n; n++) {
                var a = t.find("option").eq(e[n]).text();
                i += 0 === n ? a : ", " + a
            }
            "" === i && (i = t.find("option:disabled").eq(0).text()),
            t.siblings("input.select-dropdown").val(i)
        }
        e(this).each(function() {
            var n = e(this);
            if (!n.hasClass("browser-default")) {
                var r = n.attr("multiple") ? !0 : !1
                  , a = n.data("select-id");
                if (a && (n.parent().find("span.caret").remove(),
                n.parent().find("input").remove(),
                n.unwrap(),
                e("ul#select-options-" + a).remove()),
                "destroy" === t)
                    return void n.data("select-id", null ).removeClass("initialized");
                var o = Materialize.guid();
                n.data("select-id", o);
                var s = e('<div class="select-wrapper"></div>');
                s.addClass(n.attr("class"));
                var l = e('<ul id="select-options-' + o + '" class="dropdown-content select-dropdown ' + (r ? "multiple-select-dropdown" : "") + '"></ul>')
                  , u = n.children("option, optgroup")
                  , c = []
                  , f = !1
                  , h = n.find("option:selected").html() || n.find("option:first").html() || ""
                  , d = function(t, i, n) {
                    var r = i.is(":disabled") ? "disabled " : ""
                      , a = i.data("icon")
                      , o = i.attr("class");
                    if (a) {
                        var s = "";
                        return o && (s = ' class="' + o + '"'),
                        "multiple" === n ? l.append(e('<li class="' + r + '"><img src="' + a + '"' + s + '><span><input type="checkbox"' + r + "/><label></label>" + i.html() + "</span></li>")) : l.append(e('<li class="' + r + '"><img src="' + a + '"' + s + "><span>" + i.html() + "</span></li>")),
                        !0
                    }
                    "multiple" === n ? l.append(e('<li class="' + r + '"><span><input type="checkbox"' + r + "/><label></label>" + i.html() + "</span></li>")) : l.append(e('<li class="' + r + '"><span>' + i.html() + "</span></li>"))
                }
                ;
                u.length && u.each(function() {
                    if (e(this).is("option"))
                        r ? d(n, e(this), "multiple") : d(n, e(this));
                    else if (e(this).is("optgroup")) {
                        var t = e(this).children("option");
                        l.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")),
                        t.each(function() {
                            d(n, e(this))
                        })
                    }
                }),
                l.find("li:not(.optgroup)").each(function(a) {
                    e(this).click(function(o) {
                        if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
                            var s = !0;
                            r ? (e('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                return !t
                            }),
                            s = i(c, e(this).index(), n),
                            m.trigger("focus")) : (l.find("li").removeClass("active"),
                            e(this).toggleClass("active"),
                            m.val(e(this).text())),
                            activateOption(l, e(this)),
                            n.find("option").eq(a).prop("selected", s),
                            n.trigger("change"),
                            "undefined" != typeof t && t()
                        }
                        o.stopPropagation()
                    })
                }),
                n.wrap(s);
                var p = e('<span class="caret">&#9660;</span>');
                n.is(":disabled") && p.addClass("disabled");
                var g = h.replace(/"/g, "&quot;")
                  , m = e('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + o + '" value="' + g + '"/>');
                n.before(m),
                m.before(p),
                m.after(l),
                n.is(":disabled") || m.dropdown({
                    hover: !1,
                    closeOnClick: !1
                }),
                n.attr("tabindex") && e(m[0]).attr("tabindex", n.attr("tabindex")),
                n.addClass("initialized"),
                m.on({
                    focus: function() {
                        if (e("ul.select-dropdown").not(l[0]).is(":visible") && e("input.select-dropdown").trigger("close"),
                        !l.is(":visible")) {
                            e(this).trigger("open", ["focus"]);
                            var t = e(this).val()
                              , i = l.find("li").filter(function() {
                                return e(this).text().toLowerCase() === t.toLowerCase()
                            })[0];
                            activateOption(l, i)
                        }
                    },
                    click: function(e) {
                        e.stopPropagation()
                    }
                }),
                m.on("blur", function() {
                    r || e(this).trigger("close"),
                    l.find("li.selected").removeClass("selected")
                }),
                l.hover(function() {
                    f = !0
                }, function() {
                    f = !1
                }),
                e(window).on({
                    click: function() {
                        r && (f || m.trigger("close"))
                    }
                }),
                r && n.find("option:selected:not(:disabled)").each(function() {
                    var t = e(this).index();
                    i(c, t, n),
                    l.find("li").eq(t).find(":checkbox").prop("checked", !0)
                }),
                activateOption = function(t, i) {
                    if (i) {
                        t.find("li.selected").removeClass("selected");
                        var n = e(i);
                        n.addClass("selected"),
                        l.scrollTo(n)
                    }
                }
                ;
                var v = []
                  , y = function(t) {
                    if (9 == t.which)
                        return void m.trigger("close");
                    if (40 == t.which && !l.is(":visible"))
                        return void m.trigger("open");
                    if (13 != t.which || l.is(":visible")) {
                        t.preventDefault();
                        var i = String.fromCharCode(t.which).toLowerCase()
                          , n = [9, 13, 27, 38, 40];
                        if (i && -1 === n.indexOf(t.which)) {
                            v.push(i);
                            var a = v.join("")
                              , o = l.find("li").filter(function() {
                                return 0 === e(this).text().toLowerCase().indexOf(a)
                            })[0];
                            o && activateOption(l, o)
                        }
                        if (13 == t.which) {
                            var s = l.find("li.selected:not(.disabled)")[0];
                            s && (e(s).trigger("click"),
                            r || m.trigger("close"))
                        }
                        40 == t.which && (o = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0],
                        activateOption(l, o)),
                        27 == t.which && m.trigger("close"),
                        38 == t.which && (o = l.find("li.selected").prev("li:not(.disabled)")[0],
                        o && activateOption(l, o)),
                        setTimeout(function() {
                            v = []
                        }, 1e3)
                    }
                }
                ;
                m.on("keydown", y)
            }
        })
    }
}(jQuery),
jQuery("select").siblings("input.select-dropdown").on("mousedown", function(e) {
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (e.clientX >= e.target.clientWidth || e.clientY >= e.target.clientHeight) && e.preventDefault()
}),
function(e) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
}(function(e) {
    function a(t, u, c, h) {
        function w() {
            return a._.node("div", a._.node("div", a._.node("div", a._.node("div", b.component.nodes(p.open), m.box), m.wrap), m.frame), m.holder, 'tabindex="-1"')
        }
        function x() {
            v.data(u, b).addClass(m.input).val(v.data("value") ? b.get("select", g.format) : t.value),
            g.editable || v.on("focus." + p.id + " click." + p.id, function(e) {
                e.preventDefault(),
                b.open()
            }).on("keydown." + p.id, A),
            l(t, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: t.id + "_root"
            })
        }
        function C() {
            l(b.$root[0], "hidden", !0)
        }
        function T() {
            b.$holder.on({
                keydown: A,
                "focus.toOpen": E,
                blur: function() {
                    v.removeClass(m.target)
                },
                focusin: function(e) {
                    b.$root.removeClass(m.focused),
                    e.stopPropagation()
                },
                "mousedown click": function(t) {
                    var i = t.target;
                    i != b.$holder[0] && (t.stopPropagation(),
                    "mousedown" != t.type || e(i).is("input, select, textarea, button, option") || (t.preventDefault(),
                    b.$holder[0].focus()))
                }
            }).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                var t = e(this)
                  , i = t.data()
                  , n = t.hasClass(m.navDisabled) || t.hasClass(m.disabled)
                  , r = f();
                r = r && (r.type || r.href),
                (n || r && !e.contains(b.$root[0], r)) && b.$holder[0].focus(),
                !n && i.nav ? b.set("highlight", b.component.item.highlight, {
                    nav: i.nav
                }) : !n && "pick"in i ? (b.set("select", i.pick),
                g.closeOnSelect && b.close(!0)) : i.clear ? (b.clear(),
                g.closeOnClear && b.close(!0)) : i.close && b.close(!0)
            })
        }
        function k() {
            var i;
            g.hiddenName === !0 ? (i = t.name,
            t.name = "") : (i = ["string" == typeof g.hiddenPrefix ? g.hiddenPrefix : "", "string" == typeof g.hiddenSuffix ? g.hiddenSuffix : "_submit"],
            i = i[0] + t.name + i[1]),
            b._hidden = e('<input type=hidden name="' + i + '"' + (v.data("value") || t.value ? ' value="' + b.get("select", g.formatSubmit) + '"' : "") + ">")[0],
            v.on("change." + p.id, function() {
                b._hidden.value = t.value ? b.get("select", g.formatSubmit) : ""
            })
        }
        function S() {
            d && r ? b.$holder.find("." + m.frame).one("transitionend", function() {
                b.$holder[0].focus()
            }) : b.$holder[0].focus()
        }
        function E(e) {
            e.stopPropagation(),
            v.addClass(m.target),
            b.$root.addClass(m.focused),
            b.open()
        }
        function A(e) {
            var t = e.keyCode
              , i = /^(8|46)$/.test(t);
            return 27 == t ? (b.close(!0),
            !1) : void ((32 == t || i || !p.open && b.component.key[t]) && (e.preventDefault(),
            e.stopPropagation(),
            i ? b.clear().close() : b.open()))
        }
        if (!t)
            return a;
        var d = !1
          , p = {
            id: t.id || "P" + Math.abs(~~(Math.random() * new Date))
        }
          , g = c ? e.extend(!0, {}, c.defaults, h) : h || {}
          , m = e.extend({}, a.klasses(), g.klass)
          , v = e(t)
          , y = function() {
            return this.start()
        }
          , b = y.prototype = {
            constructor: y,
            $node: v,
            start: function() {
                return p && p.start ? b : (p.methods = {},
                p.start = !0,
                p.open = !1,
                p.type = t.type,
                t.autofocus = t == f(),
                t.readOnly = !g.editable,
                t.id = t.id || p.id,
                "text" != t.type && (t.type = "text"),
                b.component = new c(b,g),
                b.$root = e('<div class="' + m.picker + '" id="' + t.id + '_root" />'),
                C(),
                b.$holder = e(w()).appendTo(b.$root),
                T(),
                g.formatSubmit && k(),
                x(),
                g.containerHidden ? e(g.containerHidden).append(b._hidden) : v.after(b._hidden),
                g.container ? e(g.container).append(b.$root) : v.after(b.$root),
                b.on({
                    start: b.component.onStart,
                    render: b.component.onRender,
                    stop: b.component.onStop,
                    open: b.component.onOpen,
                    close: b.component.onClose,
                    set: b.component.onSet
                }).on({
                    start: g.onStart,
                    render: g.onRender,
                    stop: g.onStop,
                    open: g.onOpen,
                    close: g.onClose,
                    set: g.onSet
                }),
                d = o(b.$holder[0]),
                t.autofocus && b.open(),
                b.trigger("start").trigger("render"))
            },
            render: function(t) {
                return t ? (b.$holder = e(w()),
                T(),
                b.$root.html(b.$holder)) : b.$root.find("." + m.box).html(b.component.nodes(p.open)),
                b.trigger("render")
            },
            stop: function() {
                return p.start ? (b.close(),
                b._hidden && b._hidden.parentNode.removeChild(b._hidden),
                b.$root.remove(),
                v.removeClass(m.input).removeData(u),
                setTimeout(function() {
                    v.off("." + p.id)
                }, 0),
                t.type = p.type,
                t.readOnly = !1,
                b.trigger("stop"),
                p.methods = {},
                p.start = !1,
                b) : b
            },
            open: function(r) {
                return p.open ? b : (v.addClass(m.active),
                l(t, "expanded", !0),
                setTimeout(function() {
                    b.$root.addClass(m.opened),
                    l(b.$root[0], "hidden", !1)
                }, 0),
                r !== !1 && (p.open = !0,
                d && n.css("overflow", "hidden").css("padding-right", "+=" + s()),
                S(),
                i.on("click." + p.id + " focusin." + p.id, function(e) {
                    var i = e.target;
                    i != t && i != document && 3 != e.which && b.close(i === b.$holder[0])
                }).on("keydown." + p.id, function(t) {
                    var i = t.keyCode
                      , n = b.component.key[i]
                      , r = t.target;
                    27 == i ? b.close(!0) : r != b.$holder[0] || !n && 13 != i ? e.contains(b.$root[0], r) && 13 == i && (t.preventDefault(),
                    r.click()) : (t.preventDefault(),
                    n ? a._.trigger(b.component.key.go, b, [a._.trigger(n)]) : b.$root.find("." + m.highlighted).hasClass(m.disabled) || (b.set("select", b.component.item.highlight),
                    g.closeOnSelect && b.close(!0)))
                })),
                b.trigger("open"))
            },
            close: function(e) {
                return e && (g.editable ? t.focus() : (b.$holder.off("focus.toOpen").focus(),
                setTimeout(function() {
                    b.$holder.on("focus.toOpen", E)
                }, 0))),
                v.removeClass(m.active),
                l(t, "expanded", !1),
                setTimeout(function() {
                    b.$root.removeClass(m.opened + " " + m.focused),
                    l(b.$root[0], "hidden", !0)
                }, 0),
                p.open ? (p.open = !1,
                d && n.css("overflow", "").css("padding-right", "-=" + s()),
                i.off("." + p.id),
                b.trigger("close")) : b
            },
            clear: function(e) {
                return b.set("clear", null , e)
            },
            set: function(t, i, n) {
                var r, a, o = e.isPlainObject(t), s = o ? t : {};
                if (n = o && e.isPlainObject(i) ? i : n || {},
                t) {
                    o || (s[t] = i);
                    for (r in s)
                        a = s[r],
                        r in b.component.item && (void 0 === a && (a = null ),
                        b.component.set(r, a, n)),
                        ("select" == r || "clear" == r) && v.val("clear" == r ? "" : b.get(r, g.format)).trigger("change");
                    b.render()
                }
                return n.muted ? b : b.trigger("set", s)
            },
            get: function(e, i) {
                if (e = e || "value",
                null != p[e])
                    return p[e];
                if ("valueSubmit" == e) {
                    if (b._hidden)
                        return b._hidden.value;
                    e = "value"
                }
                if ("value" == e)
                    return t.value;
                if (e in b.component.item) {
                    if ("string" == typeof i) {
                        var n = b.component.get(e);
                        return n ? a._.trigger(b.component.formats.toString, b.component, [i, n]) : ""
                    }
                    return b.component.get(e)
                }
            },
            on: function(t, i, n) {
                var r, a, o = e.isPlainObject(t), s = o ? t : {};
                if (t) {
                    o || (s[t] = i);
                    for (r in s)
                        a = s[r],
                        n && (r = "_" + r),
                        p.methods[r] = p.methods[r] || [],
                        p.methods[r].push(a)
                }
                return b
            },
            off: function() {
                var e, t, i = arguments;
                for (e = 0,
                namesCount = i.length; e < namesCount; e += 1)
                    t = i[e],
                    t in p.methods && delete p.methods[t];
                return b
            },
            trigger: function(e, t) {
                var i = function(e) {
                    var i = p.methods[e];
                    i && i.map(function(e) {
                        a._.trigger(e, b, [t])
                    })
                }
                ;
                return i("_" + e),
                i(e),
                b
            }
        };
        return new y
    }
    function o(e) {
        var t, i = "position";
        return e.currentStyle ? t = e.currentStyle[i] : window.getComputedStyle && (t = getComputedStyle(e)[i]),
        "fixed" == t
    }
    function s() {
        if (n.height() <= t.height())
            return 0;
        var i = e('<div style="visibility:hidden;width:100px" />').appendTo("body")
          , r = i[0].offsetWidth;
        i.css("overflow", "scroll");
        var a = e('<div style="width:100%" />').appendTo(i)
          , o = a[0].offsetWidth;
        return i.remove(),
        r - o
    }
    function l(t, i, n) {
        if (e.isPlainObject(i))
            for (var r in i)
                u(t, r, i[r]);
        else
            u(t, i, n)
    }
    function u(e, t, i) {
        e.setAttribute(("role" == t ? "" : "aria-") + t, i)
    }
    function c(t, i) {
        e.isPlainObject(t) || (t = {
            attribute: i
        }),
        i = "";
        for (var n in t) {
            var r = ("role" == n ? "" : "aria-") + n
              , a = t[n];
            i += null == a ? "" : r + '="' + t[n] + '"'
        }
        return i
    }
    function f() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    var t = e(window)
      , i = e(document)
      , n = e(document.documentElement)
      , r = null != document.documentElement.style.transition;
    return a.klasses = function(e) {
        return e = e || "picker",
        {
            picker: e,
            opened: e + "--opened",
            focused: e + "--focused",
            input: e + "__input",
            active: e + "__input--active",
            target: e + "__input--target",
            holder: e + "__holder",
            frame: e + "__frame",
            wrap: e + "__wrap",
            box: e + "__box"
        }
    }
    ,
    a._ = {
        group: function(e) {
            for (var t, i = "", n = a._.trigger(e.min, e); n <= a._.trigger(e.max, e, [n]); n += e.i)
                t = a._.trigger(e.item, e, [n]),
                i += a._.node(e.node, t[0], t[1], t[2]);
            return i
        },
        node: function(t, i, n, r) {
            return i ? (i = e.isArray(i) ? i.join("") : i,
            n = n ? ' class="' + n + '"' : "",
            r = r ? " " + r : "",
            "<" + t + n + r + ">" + i + "</" + t + ">") : ""
        },
        lead: function(e) {
            return (10 > e ? "0" : "") + e
        },
        trigger: function(e, t, i) {
            return "function" == typeof e ? e.apply(t, i || []) : e
        },
        digits: function(e) {
            return /\d/.test(e[1]) ? 2 : 1
        },
        isDate: function(e) {
            return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
        },
        isInteger: function(e) {
            return {}.toString.call(e).indexOf("Number") > -1 && e % 1 === 0
        },
        ariaAttr: c
    },
    a.extend = function(t, i) {
        e.fn[t] = function(n, r) {
            var o = this.data(t);
            return "picker" == n ? o : o && "string" == typeof n ? a._.trigger(o[n], o, [r]) : this.each(function() {
                var r = e(this);
                r.data(t) || new a(this,t,i,n)
            })
        }
        ,
        e.fn[t].defaults = i.defaults
    }
    ,
    a
}),
function(e) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
}(function(e, t) {
    function a(e, t) {
        var i = this
          , n = e.$node[0]
          , r = n.value
          , a = e.$node.data("value")
          , o = a || r
          , s = a ? t.formatSubmit : t.format
          , l = function() {
            return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
        }
        ;
        i.settings = t,
        i.$node = e.$node,
        i.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        },
        i.item = {},
        i.item.clear = null ,
        i.item.disable = (t.disable || []).slice(0),
        i.item.enable = -function(e) {
            return e[0] === !0 ? e.shift() : -1
        }(i.item.disable),
        i.set("min", t.min).set("max", t.max).set("now"),
        o ? i.set("select", o, {
            format: s,
            defaultValue: !0
        }) : i.set("select", null ).set("highlight", i.item.now),
        i.key = {
            40: 7,
            38: -7,
            39: function() {
                return l() ? -1 : 1
            },
            37: function() {
                return l() ? 1 : -1
            },
            go: function(e) {
                var t = i.item.highlight
                  , n = new Date(t.year,t.month,t.date + e);
                i.set("highlight", n, {
                    interval: e
                }),
                this.render()
            }
        },
        e.on("render", function() {
            e.$root.find("." + t.klass.selectMonth).on("change", function() {
                var i = this.value;
                i && (e.set("highlight", [e.get("view").year, i, e.get("highlight").date]),
                e.$root.find("." + t.klass.selectMonth).trigger("focus"))
            }),
            e.$root.find("." + t.klass.selectYear).on("change", function() {
                var i = this.value;
                i && (e.set("highlight", [i, e.get("view").month, e.get("highlight").date]),
                e.$root.find("." + t.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function() {
            var n = "";
            i.disabled(i.get("now")) && (n = ":not(." + t.klass.buttonToday + ")"),
            e.$root.find("button" + n + ", select").attr("disabled", !1)
        }, 1).on("close", function() {
            e.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }
    var i = 7
      , n = 6
      , r = e._;
    a.prototype.set = function(e, t, i) {
        var n = this
          , r = n.item;
        return null === t ? ("clear" == e && (e = "select"),
        r[e] = t,
        n) : (r["enable" == e ? "disable" : "flip" == e ? "enable" : e] = n.queue[e].split(" ").map(function(r) {
            return t = n[r](e, t, i)
        }).pop(),
        "select" == e ? n.set("highlight", r.select, i) : "highlight" == e ? n.set("view", r.highlight, i) : e.match(/^(flip|min|max|disable|enable)$/) && (r.select && n.disabled(r.select) && n.set("select", r.select, i),
        r.highlight && n.disabled(r.highlight) && n.set("highlight", r.highlight, i)),
        n)
    }
    ,
    a.prototype.get = function(e) {
        return this.item[e]
    }
    ,
    a.prototype.create = function(e, i, n) {
        var a, o = this;
        return i = void 0 === i ? e : i,
        i == -(1 / 0) || i == 1 / 0 ? a = i : t.isPlainObject(i) && r.isInteger(i.pick) ? i = i.obj : t.isArray(i) ? (i = new Date(i[0],i[1],i[2]),
        i = r.isDate(i) ? i : o.create().obj) : i = r.isInteger(i) || r.isDate(i) ? o.normalize(new Date(i), n) : o.now(e, i, n),
        {
            year: a || i.getFullYear(),
            month: a || i.getMonth(),
            date: a || i.getDate(),
            day: a || i.getDay(),
            obj: a || i,
            pick: a || i.getTime()
        }
    }
    ,
    a.prototype.createRange = function(e, i) {
        var n = this
          , a = function(e) {
            return e === !0 || t.isArray(e) || r.isDate(e) ? n.create(e) : e
        }
        ;
        return r.isInteger(e) || (e = a(e)),
        r.isInteger(i) || (i = a(i)),
        r.isInteger(e) && t.isPlainObject(i) ? e = [i.year, i.month, i.date + e] : r.isInteger(i) && t.isPlainObject(e) && (i = [e.year, e.month, e.date + i]),
        {
            from: a(e),
            to: a(i)
        }
    }
    ,
    a.prototype.withinRange = function(e, t) {
        return e = this.createRange(e.from, e.to),
        t.pick >= e.from.pick && t.pick <= e.to.pick
    }
    ,
    a.prototype.overlapRanges = function(e, t) {
        var i = this;
        return e = i.createRange(e.from, e.to),
        t = i.createRange(t.from, t.to),
        i.withinRange(e, t.from) || i.withinRange(e, t.to) || i.withinRange(t, e.from) || i.withinRange(t, e.to)
    }
    ,
    a.prototype.now = function(e, t, i) {
        return t = new Date,
        i && i.rel && t.setDate(t.getDate() + i.rel),
        this.normalize(t, i)
    }
    ,
    a.prototype.navigate = function(e, i, n) {
        var r, a, o, s, l = t.isArray(i), u = t.isPlainObject(i), c = this.item.view;
        if (l || u) {
            for (u ? (a = i.year,
            o = i.month,
            s = i.date) : (a = +i[0],
            o = +i[1],
            s = +i[2]),
            n && n.nav && c && c.month !== o && (a = c.year,
            o = c.month),
            r = new Date(a,o + (n && n.nav ? n.nav : 0),1),
            a = r.getFullYear(),
            o = r.getMonth(); new Date(a,o,s).getMonth() !== o; )
                s -= 1;
            i = [a, o, s]
        }
        return i
    }
    ,
    a.prototype.normalize = function(e) {
        return e.setHours(0, 0, 0, 0),
        e
    }
    ,
    a.prototype.measure = function(e, t) {
        var i = this;
        return t ? "string" == typeof t ? t = i.parse(e, t) : r.isInteger(t) && (t = i.now(e, t, {
            rel: t
        })) : t = "min" == e ? -(1 / 0) : 1 / 0,
        t
    }
    ,
    a.prototype.viewset = function(e, t) {
        return this.create([t.year, t.month, 1])
    }
    ,
    a.prototype.validate = function(e, i, n) {
        var u, c, d, p, a = this, o = i, s = n && n.interval ? n.interval : 1, l = -1 === a.item.enable, f = a.item.min, h = a.item.max, g = l && a.item.disable.filter(function(e) {
            if (t.isArray(e)) {
                var n = a.create(e).pick;
                n < i.pick ? u = !0 : n > i.pick && (c = !0)
            }
            return r.isInteger(e)
        }).length;
        if ((!n || !n.nav && !n.defaultValue) && (!l && a.disabled(i) || l && a.disabled(i) && (g || u || c) || !l && (i.pick <= f.pick || i.pick >= h.pick)))
            for (l && !g && (!c && s > 0 || !u && 0 > s) && (s *= -1); a.disabled(i) && (Math.abs(s) > 1 && (i.month < o.month || i.month > o.month) && (i = o,
            s = s > 0 ? 1 : -1),
            i.pick <= f.pick ? (d = !0,
            s = 1,
            i = a.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : -1)])) : i.pick >= h.pick && (p = !0,
            s = -1,
            i = a.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : 1)])),
            !d || !p); )
                i = a.create([i.year, i.month, i.date + s]);
        return i
    }
    ,
    a.prototype.disabled = function(e) {
        var i = this
          , n = i.item.disable.filter(function(n) {
            return r.isInteger(n) ? e.day === (i.settings.firstDay ? n : n - 1) % 7 : t.isArray(n) || r.isDate(n) ? e.pick === i.create(n).pick : t.isPlainObject(n) ? i.withinRange(n, e) : void 0
        });
        return n = n.length && !n.filter(function(e) {
            return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
        }).length,
        -1 === i.item.enable ? !n : n || e.pick < i.item.min.pick || e.pick > i.item.max.pick
    }
    ,
    a.prototype.parse = function(e, t, i) {
        var n = this
          , a = {};
        return t && "string" == typeof t ? (i && i.format || (i = i || {},
        i.format = n.settings.format),
        n.formats.toArray(i.format).map(function(e) {
            var i = n.formats[e]
              , o = i ? r.trigger(i, n, [t, a]) : e.replace(/^!/, "").length;
            i && (a[e] = t.substr(0, o)),
            t = t.substr(o)
        }),
        [a.yyyy || a.yy, +(a.mm || a.m) - 1, a.dd || a.d]) : t
    }
    ,
    a.prototype.formats = function() {
        function e(e, t, i) {
            var n = e.match(/[^\x00-\x7F]+|\w+/)[0];
            return i.mm || i.m || (i.m = t.indexOf(n) + 1),
            n.length
        }
        function t(e) {
            return e.match(/\w+/)[0].length
        }
        return {
            d: function(e, t) {
                return e ? r.digits(e) : t.date
            },
            dd: function(e, t) {
                return e ? 2 : r.lead(t.date)
            },
            ddd: function(e, i) {
                return e ? t(e) : this.settings.weekdaysShort[i.day]
            },
            dddd: function(e, i) {
                return e ? t(e) : this.settings.weekdaysFull[i.day]
            },
            m: function(e, t) {
                return e ? r.digits(e) : t.month + 1
            },
            mm: function(e, t) {
                return e ? 2 : r.lead(t.month + 1)
            },
            mmm: function(t, i) {
                var n = this.settings.monthsShort;
                return t ? e(t, n, i) : n[i.month]
            },
            mmmm: function(t, i) {
                var n = this.settings.monthsFull;
                return t ? e(t, n, i) : n[i.month]
            },
            yy: function(e, t) {
                return e ? 2 : ("" + t.year).slice(2)
            },
            yyyy: function(e, t) {
                return e ? 4 : t.year
            },
            toArray: function(e) {
                return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            },
            toString: function(e, t) {
                var i = this;
                return i.formats.toArray(e).map(function(e) {
                    return r.trigger(i.formats[e], i, [0, t]) || e.replace(/^!/, "")
                }).join("")
            }
        }
    }(),
    a.prototype.isDateExact = function(e, i) {
        var n = this;
        return r.isInteger(e) && r.isInteger(i) || "boolean" == typeof e && "boolean" == typeof i ? e === i : (r.isDate(e) || t.isArray(e)) && (r.isDate(i) || t.isArray(i)) ? n.create(e).pick === n.create(i).pick : t.isPlainObject(e) && t.isPlainObject(i) ? n.isDateExact(e.from, i.from) && n.isDateExact(e.to, i.to) : !1
    }
    ,
    a.prototype.isDateOverlap = function(e, i) {
        var n = this
          , a = n.settings.firstDay ? 1 : 0;
        return r.isInteger(e) && (r.isDate(i) || t.isArray(i)) ? (e = e % 7 + a,
        e === n.create(i).day + 1) : r.isInteger(i) && (r.isDate(e) || t.isArray(e)) ? (i = i % 7 + a,
        i === n.create(e).day + 1) : t.isPlainObject(e) && t.isPlainObject(i) ? n.overlapRanges(e, i) : !1
    }
    ,
    a.prototype.flipEnable = function(e) {
        var t = this.item;
        t.enable = e || (-1 == t.enable ? 1 : -1)
    }
    ,
    a.prototype.deactivate = function(e, i) {
        var n = this
          , a = n.item.disable.slice(0);
        return "flip" == i ? n.flipEnable() : i === !1 ? (n.flipEnable(1),
        a = []) : i === !0 ? (n.flipEnable(-1),
        a = []) : i.map(function(e) {
            for (var i, o = 0; o < a.length; o += 1)
                if (n.isDateExact(e, a[o])) {
                    i = !0;
                    break
                }
            i || (r.isInteger(e) || r.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && a.push(e)
        }),
        a
    }
    ,
    a.prototype.activate = function(e, i) {
        var n = this
          , a = n.item.disable
          , o = a.length;
        return "flip" == i ? n.flipEnable() : i === !0 ? (n.flipEnable(1),
        a = []) : i === !1 ? (n.flipEnable(-1),
        a = []) : i.map(function(e) {
            var i, s, l, u;
            for (l = 0; o > l; l += 1) {
                if (s = a[l],
                n.isDateExact(s, e)) {
                    i = a[l] = null ,
                    u = !0;
                    break
                }
                if (n.isDateOverlap(s, e)) {
                    t.isPlainObject(e) ? (e.inverted = !0,
                    i = e) : t.isArray(e) ? (i = e,
                    i[3] || i.push("inverted")) : r.isDate(e) && (i = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                    break
                }
            }
            if (i)
                for (l = 0; o > l; l += 1)
                    if (n.isDateExact(a[l], e)) {
                        a[l] = null ;
                        break
                    }
            if (u)
                for (l = 0; o > l; l += 1)
                    if (n.isDateOverlap(a[l], e)) {
                        a[l] = null ;
                        break
                    }
            i && a.push(i)
        }),
        a.filter(function(e) {
            return null != e
        })
    }
    ,
    a.prototype.nodes = function(e) {
        var t = this
          , a = t.settings
          , o = t.item
          , s = o.now
          , l = o.select
          , u = o.highlight
          , c = o.view
          , f = o.disable
          , h = o.min
          , d = o.max
          , p = function(e, t) {
            return a.firstDay && (e.push(e.shift()),
            t.push(t.shift())),
            r.node("thead", r.node("tr", r.group({
                min: 0,
                max: i - 1,
                i: 1,
                node: "th",
                item: function(i) {
                    return [e[i], a.klass.weekdays, 'scope=col title="' + t[i] + '"']
                }
            })))
        }((a.showWeekdaysFull ? a.weekdaysFull : a.weekdaysShort).slice(0), a.weekdaysFull.slice(0))
          , g = function(e) {
            return r.node("div", " ", a.klass["nav" + (e ? "Next" : "Prev")] + (e && c.year >= d.year && c.month >= d.month || !e && c.year <= h.year && c.month <= h.month ? " " + a.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + r.ariaAttr({
                role: "button",
                controls: t.$node[0].id + "_table"
            }) + ' title="' + (e ? a.labelMonthNext : a.labelMonthPrev) + '"')
        }
          , m = function() {
            var i = a.showMonthsShort ? a.monthsShort : a.monthsFull;
            return a.selectMonths ? r.node("select", r.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function(e) {
                    return [i[e], 0, "value=" + e + (c.month == e ? " selected" : "") + (c.year == h.year && e < h.month || c.year == d.year && e > d.month ? " disabled" : "")]
                }
            }), a.klass.selectMonth, (e ? "" : "disabled") + " " + r.ariaAttr({
                controls: t.$node[0].id + "_table"
            }) + ' title="' + a.labelMonthSelect + '"') : r.node("div", i[c.month], a.klass.month)
        }
          , v = function() {
            var i = c.year
              , n = a.selectYears === !0 ? 5 : ~~(a.selectYears / 2);
            if (n) {
                var o = h.year
                  , s = d.year
                  , l = i - n
                  , u = i + n;
                if (o > l && (u += o - l,
                l = o),
                u > s) {
                    var f = l - o
                      , p = u - s;
                    l -= f > p ? p : f,
                    u = s
                }
                return r.node("select", r.group({
                    min: l,
                    max: u,
                    i: 1,
                    node: "option",
                    item: function(e) {
                        return [e, 0, "value=" + e + (i == e ? " selected" : "")]
                    }
                }), a.klass.selectYear, (e ? "" : "disabled") + " " + r.ariaAttr({
                    controls: t.$node[0].id + "_table"
                }) + ' title="' + a.labelYearSelect + '"')
            }
            return r.node("div", i, a.klass.year)
        }
        ;
        return r.node("div", (a.selectYears ? v() + m() : m() + v()) + g() + g(1), a.klass.header) + r.node("table", p + r.node("tbody", r.group({
            min: 0,
            max: n - 1,
            i: 1,
            node: "tr",
            item: function(e) {
                var n = a.firstDay && 0 === t.create([c.year, c.month, 1]).day ? -7 : 0;
                return [r.group({
                    min: i * e - c.day + n + 1,
                    max: function() {
                        return this.min + i - 1
                    },
                    i: 1,
                    node: "td",
                    item: function(e) {
                        e = t.create([c.year, c.month, e + (a.firstDay ? 1 : 0)]);
                        var i = l && l.pick == e.pick
                          , n = u && u.pick == e.pick
                          , o = f && t.disabled(e) || e.pick < h.pick || e.pick > d.pick
                          , p = r.trigger(t.formats.toString, t, [a.format, e]);
                        return [r.node("div", e.date, function(t) {
                            return t.push(c.month == e.month ? a.klass.infocus : a.klass.outfocus),
                            s.pick == e.pick && t.push(a.klass.now),
                            i && t.push(a.klass.selected),
                            n && t.push(a.klass.highlighted),
                            o && t.push(a.klass.disabled),
                            t.join(" ")
                        }([a.klass.day]), "data-pick=" + e.pick + " " + r.ariaAttr({
                            role: "gridcell",
                            label: p,
                            selected: i && t.$node.val() === p ? !0 : null ,
                            activedescendant: n ? !0 : null ,
                            disabled: o ? !0 : null
                        })), "", r.ariaAttr({
                            role: "presentation"
                        })]
                    }
                })]
            }
        })), a.klass.table, 'id="' + t.$node[0].id + '_table" ' + r.ariaAttr({
            role: "grid",
            controls: t.$node[0].id,
            readonly: !0
        })) + r.node("div", r.node("button", a.today, a.klass.buttonToday, "type=button data-pick=" + s.pick + (e && !t.disabled(s) ? "" : " disabled") + " " + r.ariaAttr({
            controls: t.$node[0].id
        })) + r.node("button", a.clear, a.klass.buttonClear, "type=button data-clear=1" + (e ? "" : " disabled") + " " + r.ariaAttr({
            controls: t.$node[0].id
        })) + r.node("button", a.close, a.klass.buttonClose, "type=button data-close=true " + (e ? "" : " disabled") + " " + r.ariaAttr({
            controls: t.$node[0].id
        })), a.klass.footer)
    }
    ,
    a.defaults = function(e) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            closeOnSelect: !0,
            closeOnClear: !0,
            format: "d mmmm, yyyy",
            klass: {
                table: e + "table",
                header: e + "header",
                navPrev: e + "nav--prev",
                navNext: e + "nav--next",
                navDisabled: e + "nav--disabled",
                month: e + "month",
                year: e + "year",
                selectMonth: e + "select--month",
                selectYear: e + "select--year",
                weekdays: e + "weekday",
                day: e + "day",
                disabled: e + "day--disabled",
                selected: e + "day--selected",
                highlighted: e + "day--highlighted",
                now: e + "day--today",
                infocus: e + "day--infocus",
                outfocus: e + "day--outfocus",
                footer: e + "footer",
                buttonClear: e + "button--clear",
                buttonToday: e + "button--today",
                buttonClose: e + "button--close"
            }
        }
    }(e.klasses().picker + "__"),
    e.extend("pickadate", a)
}),
$.extend($.fn.pickadate.defaults, {
    selectMonths: !0,
    selectYears: 15,
    onRender: function() {
        var e = this.$root
          , t = this.get("highlight", "yyyy")
          , i = this.get("highlight", "dd")
          , n = this.get("highlight", "mmm")
          , r = this.get("highlight", "dddd");
        e.find(".picker__header").prepend('<div class="picker__date-display"><div class="picker__weekday-display">' + r + '</div><div class="picker__month-display"><div>' + n + '</div></div><div class="picker__day-display"><div>' + i + '</div></div><div    class="picker__year-display"><div>' + t + "</div></div></div>")
    }
}),
function() {
    function f(e) {
        return document.createElementNS(n, e)
    }
    function h(e) {
        return (10 > e ? "0" : "") + e
    }
    function p(e) {
        var t = ++d + "";
        return e ? e + t : t
    }
    function C(t, n) {
        function W(e, t) {
            var a = o.offset()
              , s = /^touch/.test(e.type)
              , c = a.left + g
              , f = a.top + g
              , h = (s ? e.originalEvent.touches[0] : e).pageX - c
              , d = (s ? e.originalEvent.touches[0] : e).pageY - f
              , p = Math.sqrt(h * h + d * d)
              , v = !1;
            if (!t || !(m - y > p || p > m + y)) {
                e.preventDefault();
                var b = setTimeout(function() {
                    _.popover.addClass("clockpicker-moving")
                }, 200);
                r && o.append(_.canvas),
                _.setHand(h, d, !t, !0),
                i.off(l).on(l, function(e) {
                    e.preventDefault();
                    var t = /^touch/.test(e.type)
                      , i = (t ? e.originalEvent.touches[0] : e).pageX - c
                      , n = (t ? e.originalEvent.touches[0] : e).pageY - f;
                    (v || i !== h || n !== d) && (v = !0,
                    _.setHand(i, n, !1, !0))
                }),
                i.off(u).on(u, function(e) {
                    i.off(u),
                    e.preventDefault();
                    var r = /^touch/.test(e.type)
                      , a = (r ? e.originalEvent.changedTouches[0] : e).pageX - c
                      , s = (r ? e.originalEvent.changedTouches[0] : e).pageY - f;
                    (t || v) && a === h && s === d && _.setHand(a, s),
                    "hours" === _.currentView ? _.toggleView("minutes", w / 2) : n.autoclose && (_.minutesView.addClass("clockpicker-dial-out"),
                    setTimeout(function() {
                        _.done()
                    }, w / 2)),
                    o.prepend(H),
                    clearTimeout(b),
                    _.popover.removeClass("clockpicker-moving"),
                    i.off(l)
                })
            }
        }
        var a = e(x)
          , o = a.find(".clockpicker-plate")
          , c = a.find(".picker__holder")
          , d = a.find(".clockpicker-hours")
          , C = a.find(".clockpicker-minutes")
          , k = a.find(".clockpicker-am-pm-block")
          , S = "INPUT" === t.prop("tagName")
          , E = S ? t : t.find("input")
          , A = e("label[for=" + E.attr("id") + "]")
          , _ = this;
        if (this.id = p("cp"),
        this.element = t,
        this.holder = c,
        this.options = n,
        this.isAppended = !1,
        this.isShown = !1,
        this.currentView = "hours",
        this.isInput = S,
        this.input = E,
        this.label = A,
        this.popover = a,
        this.plate = o,
        this.hoursView = d,
        this.minutesView = C,
        this.amPmBlock = k,
        this.spanHours = a.find(".clockpicker-span-hours"),
        this.spanMinutes = a.find(".clockpicker-span-minutes"),
        this.spanAmPm = a.find(".clockpicker-span-am-pm"),
        this.footer = a.find(".picker__footer"),
        this.amOrPm = "PM",
        n.twelvehour) {
            var P = ['<div class="clockpicker-am-pm-block">', '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-am-button">', "AM", "</button>", '<button type="button" class="btn-floating btn-flat clockpicker-button clockpicker-pm-button">', "PM", "</button>", "</div>"].join("");
            e(P);
            n.ampmclickable ? (this.spanAmPm.empty(),
            e('<div id="click-am">AM</div>').on("click", function() {
                _.spanAmPm.children("#click-am").addClass("text-primary"),
                _.spanAmPm.children("#click-pm").removeClass("text-primary"),
                _.amOrPm = "AM"
            }).appendTo(this.spanAmPm),
            e('<div id="click-pm">PM</div>').on("click", function() {
                _.spanAmPm.children("#click-pm").addClass("text-primary"),
                _.spanAmPm.children("#click-am").removeClass("text-primary"),
                _.amOrPm = "PM"
            }).appendTo(this.spanAmPm)) : (e('<button type="button" class="btn-floating btn-flat clockpicker-button am-button" tabindex="1">AM</button>').on("click", function() {
                _.amOrPm = "AM",
                _.amPmBlock.children(".pm-button").removeClass("active"),
                _.amPmBlock.children(".am-button").addClass("active"),
                _.spanAmPm.empty().append("AM")
            }).appendTo(this.amPmBlock),
            e('<button type="button" class="btn-floating btn-flat clockpicker-button pm-button" tabindex="2">PM</button>').on("click", function() {
                _.amOrPm = "PM",
                _.amPmBlock.children(".am-button").removeClass("active"),
                _.amPmBlock.children(".pm-button").addClass("active"),
                _.spanAmPm.empty().append("PM")
            }).appendTo(this.amPmBlock))
        }
        n.darktheme && a.addClass("darktheme"),
        e('<button type="button" class="btn-flat clockpicker-button" tabindex="' + (n.twelvehour ? "3" : "1") + '">' + n.donetext + "</button>").click(e.proxy(this.done, this)).appendTo(this.footer),
        this.spanHours.click(e.proxy(this.toggleView, this, "hours")),
        this.spanMinutes.click(e.proxy(this.toggleView, this, "minutes")),
        E.on("focus.clockpicker click.clockpicker", e.proxy(this.show, this));
        var L, F, N, M, O = e('<div class="clockpicker-tick"></div>');
        if (n.twelvehour)
            for (L = 1; 13 > L; L += 1)
                F = O.clone(),
                N = L / 6 * Math.PI,
                M = m,
                F.css("font-size", "140%"),
                F.css({
                    left: g + Math.sin(N) * M - y,
                    top: g - Math.cos(N) * M - y
                }),
                F.html(0 === L ? "00" : L),
                d.append(F),
                F.on(s, W);
        else
            for (L = 0; 24 > L; L += 1) {
                F = O.clone(),
                N = L / 6 * Math.PI;
                var R = L > 0 && 13 > L;
                M = R ? v : m,
                F.css({
                    left: g + Math.sin(N) * M - y,
                    top: g - Math.cos(N) * M - y
                }),
                R && F.css("font-size", "120%"),
                F.html(0 === L ? "00" : L),
                d.append(F),
                F.on(s, W)
            }
        for (L = 0; 60 > L; L += 5)
            F = O.clone(),
            N = L / 30 * Math.PI,
            F.css({
                left: g + Math.sin(N) * m - y,
                top: g - Math.cos(N) * m - y
            }),
            F.css("font-size", "140%"),
            F.html(h(L)),
            C.append(F),
            F.on(s, W);
        if (o.on(s, function(t) {
            0 === e(t.target).closest(".clockpicker-tick").length && W(t, !0)
        }),
        r) {
            var H = a.find(".clockpicker-canvas")
              , j = f("svg");
            j.setAttribute("class", "clockpicker-svg"),
            j.setAttribute("width", b),
            j.setAttribute("height", b);
            var z = f("g");
            z.setAttribute("transform", "translate(" + g + "," + g + ")");
            var V = f("circle");
            V.setAttribute("class", "clockpicker-canvas-bearing"),
            V.setAttribute("cx", 0),
            V.setAttribute("cy", 0),
            V.setAttribute("r", 2);
            var B = f("line");
            B.setAttribute("x1", 0),
            B.setAttribute("y1", 0);
            var q = f("circle");
            q.setAttribute("class", "clockpicker-canvas-bg"),
            q.setAttribute("r", y);
            var Y = f("circle");
            Y.setAttribute("class", "clockpicker-canvas-fg"),
            Y.setAttribute("r", 5),
            z.appendChild(B),
            z.appendChild(q),
            z.appendChild(Y),
            z.appendChild(V),
            j.appendChild(z),
            H.append(j),
            this.hand = B,
            this.bg = q,
            this.fg = Y,
            this.bearing = V,
            this.g = z,
            this.canvas = H
        }
        T(this.options.init)
    }
    function T(e) {
        e && "function" == typeof e && e()
    }
    var e = window.jQuery
      , t = e(window)
      , i = e(document)
      , n = "http://www.w3.org/2000/svg"
      , r = "SVGAngle"in window && function() {
        var e, t = document.createElement("div");
        return t.innerHTML = "<svg/>",
        e = (t.firstChild && t.firstChild.namespaceURI) == n,
        t.innerHTML = "",
        e
    }()
      , a = function() {
        var e = document.createElement("div").style;
        return "transition"in e || "WebkitTransition"in e || "MozTransition"in e || "msTransition"in e || "OTransition"in e
    }()
      , o = "ontouchstart"in window
      , s = "mousedown" + (o ? " touchstart" : "")
      , l = "mousemove.clockpicker" + (o ? " touchmove.clockpicker" : "")
      , u = "mouseup.clockpicker" + (o ? " touchend.clockpicker" : "")
      , c = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null
      , d = 0
      , g = 135
      , m = 110
      , v = 80
      , y = 20
      , b = 2 * g
      , w = a ? 350 : 1
      , x = ['<div class="clockpicker picker">', '<div class="picker__holder">', '<div class="picker__frame">', '<div class="picker__wrap">', '<div class="picker__box">', '<div class="picker__date-display">', '<div class="clockpicker-display">', '<div class="clockpicker-display-column">', '<span class="clockpicker-span-hours text-primary"></span>', ":", '<span class="clockpicker-span-minutes"></span>', "</div>", '<div class="clockpicker-display-column clockpicker-display-am-pm">', '<div class="clockpicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="picker__calendar-container">', '<div class="clockpicker-plate">', '<div class="clockpicker-canvas"></div>', '<div class="clockpicker-dial clockpicker-hours"></div>', '<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>', "</div>", '<div class="clockpicker-am-pm-block">', "</div>", "</div>", '<div class="picker__footer">', "</div>", "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
    C.DEFAULTS = {
        "default": "",
        fromnow: 0,
        donetext: "Done",
        autoclose: !1,
        ampmclickable: !1,
        darktheme: !1,
        twelvehour: !0,
        vibrate: !0
    },
    C.prototype.toggle = function() {
        this[this.isShown ? "hide" : "show"]()
    }
    ,
    C.prototype.locate = function() {
        var e = this.element
          , t = this.popover;
        e.offset(),
        e.outerWidth(),
        e.outerHeight(),
        this.options.align;
        t.show()
    }
    ,
    C.prototype.show = function(n) {
        if (!this.isShown) {
            T(this.options.beforeShow),
            e(":input").each(function() {
                e(this).attr("tabindex", -1)
            });
            var r = this;
            this.input.blur(),
            this.popover.addClass("picker--opened"),
            this.input.addClass("picker__input picker__input--active"),
            e(document.body).css("overflow", "hidden"),
            this.isAppended || (this.popover.insertAfter(this.input),
            this.options.twelvehour && (this.amOrPm = "PM",
            this.options.ampmclickable ? (this.spanAmPm.children("#click-pm").addClass("text-primary"),
            this.spanAmPm.children("#click-am").removeClass("text-primary")) : (this.amPmBlock.children(".am-button").removeClass("active"),
            this.amPmBlock.children(".pm-button").addClass("active"),
            this.spanAmPm.empty().append("PM"))),
            t.on("resize.clockpicker" + this.id, function() {
                r.isShown && r.locate()
            }),
            this.isAppended = !0);
            var a = ((this.input.prop("value") || this.options["default"] || "") + "").split(":");
            if (this.options.twelvehour && "undefined" != typeof a[1] && (a[1] = a[1].replace("AM", "").replace("PM", "")),
            "now" === a[0]) {
                var o = new Date(+new Date + this.options.fromnow);
                a = [o.getHours(), o.getMinutes()]
            }
            this.hours = +a[0] || 0,
            this.minutes = +a[1] || 0,
            this.spanHours.html(h(this.hours)),
            this.spanMinutes.html(h(this.minutes)),
            this.toggleView("hours"),
            this.locate(),
            this.isShown = !0,
            i.on("click.clockpicker." + this.id + " focusin.clockpicker." + this.id, function(t) {
                var i = e(t.target);
                0 === i.closest(r.popover.find(".picker__wrap")).length && 0 === i.closest(r.input).length && r.hide()
            }),
            i.on("keyup.clockpicker." + this.id, function(e) {
                27 === e.keyCode && r.hide()
            }),
            T(this.options.afterShow)
        }
    }
    ,
    C.prototype.hide = function() {
        T(this.options.beforeHide),
        this.input.removeClass("picker__input picker__input--active"),
        this.popover.removeClass("picker--opened"),
        e(document.body).css("overflow", "visible"),
        this.isShown = !1,
        e(":input").each(function(t) {
            e(this).attr("tabindex", t + 1)
        }),
        i.off("click.clockpicker." + this.id + " focusin.clockpicker." + this.id),
        i.off("keyup.clockpicker." + this.id),
        this.popover.hide(),
        T(this.options.afterHide)
    }
    ,
    C.prototype.toggleView = function(t, i) {
        var n = !1;
        "minutes" === t && "visible" === e(this.hoursView).css("visibility") && (T(this.options.beforeHourSelect),
        n = !0);
        var r = "hours" === t
          , a = r ? this.hoursView : this.minutesView
          , o = r ? this.minutesView : this.hoursView;
        this.currentView = t,
        this.spanHours.toggleClass("text-primary", r),
        this.spanMinutes.toggleClass("text-primary", !r),
        o.addClass("clockpicker-dial-out"),
        a.css("visibility", "visible").removeClass("clockpicker-dial-out"),
        this.resetClock(i),
        clearTimeout(this.toggleViewTimer),
        this.toggleViewTimer = setTimeout(function() {
            o.css("visibility", "hidden")
        }, w),
        n && T(this.options.afterHourSelect)
    }
    ,
    C.prototype.resetClock = function(e) {
        var t = this.currentView
          , i = this[t]
          , n = "hours" === t
          , a = Math.PI / (n ? 6 : 30)
          , o = i * a
          , s = n && i > 0 && 13 > i ? v : m
          , l = Math.sin(o) * s
          , u = -Math.cos(o) * s
          , c = this;
        r && e ? (c.canvas.addClass("clockpicker-canvas-out"),
        setTimeout(function() {
            c.canvas.removeClass("clockpicker-canvas-out"),
            c.setHand(l, u)
        }, e)) : this.setHand(l, u)
    }
    ,
    C.prototype.setHand = function(t, i, n, a) {
        var g, o = Math.atan2(t, -i), s = "hours" === this.currentView, l = Math.PI / (s || n ? 6 : 30), u = Math.sqrt(t * t + i * i), f = this.options, d = s && (m + v) / 2 > u, p = d ? v : m;
        if (f.twelvehour && (p = m),
        0 > o && (o = 2 * Math.PI + o),
        g = Math.round(o / l),
        o = g * l,
        f.twelvehour ? s ? 0 === g && (g = 12) : (n && (g *= 5),
        60 === g && (g = 0)) : s ? (12 === g && (g = 0),
        g = d ? 0 === g ? 12 : g : 0 === g ? 0 : g + 12) : (n && (g *= 5),
        60 === g && (g = 0)),
        s ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : g % 5 == 0 ? this.fg.setAttribute("class", "clockpicker-canvas-fg") : this.fg.setAttribute("class", "clockpicker-canvas-fg active"),
        this[this.currentView] !== g && c && this.options.vibrate && (this.vibrateTimer || (navigator[c](10),
        this.vibrateTimer = setTimeout(e.proxy(function() {
            this.vibrateTimer = null
        }, this), 100))),
        this[this.currentView] = g,
        this[s ? "spanHours" : "spanMinutes"].html(h(g)),
        !r)
            return void this[s ? "hoursView" : "minutesView"].find(".clockpicker-tick").each(function() {
                var t = e(this);
                t.toggleClass("active", g === +t.html())
            });
        a || !s && g % 5 ? (this.g.insertBefore(this.hand, this.bearing),
        this.g.insertBefore(this.bg, this.fg),
        this.bg.setAttribute("class", "clockpicker-canvas-bg clockpicker-canvas-bg-trans")) : (this.g.insertBefore(this.hand, this.bg),
        this.g.insertBefore(this.fg, this.bg),
        this.bg.setAttribute("class", "clockpicker-canvas-bg"));
        var b = Math.sin(o) * (p - y)
          , w = -Math.cos(o) * (p - y)
          , x = Math.sin(o) * p
          , C = -Math.cos(o) * p;
        this.hand.setAttribute("x2", b),
        this.hand.setAttribute("y2", w),
        this.bg.setAttribute("cx", x),
        this.bg.setAttribute("cy", C),
        this.fg.setAttribute("cx", x),
        this.fg.setAttribute("cy", C)
    }
    ,
    C.prototype.done = function() {
        T(this.options.beforeDone),
        this.hide(),
        this.label.addClass("active");
        var e = this.input.prop("value")
          , t = h(this.hours) + ":" + h(this.minutes);
        this.options.twelvehour && (t += this.amOrPm),
        this.input.prop("value", t),
        t !== e && (this.input.triggerHandler("change"),
        this.isInput || this.element.trigger("change")),
        this.options.autoclose && this.input.trigger("blur"),
        T(this.options.afterDone)
    }
    ,
    C.prototype.remove = function() {
        this.element.removeData("clockpicker"),
        this.input.off("focus.clockpicker click.clockpicker"),
        this.isShown && this.hide(),
        this.isAppended && (t.off("resize.clockpicker" + this.id),
        this.popover.remove())
    }
    ,
    e.fn.pickatime = function(t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var n = e(this)
              , r = n.data("clockpicker");
            if (r)
                "function" == typeof r[t] && r[t].apply(r, i);
            else {
                var a = e.extend({}, C.DEFAULTS, n.data(), "object" == typeof t && t);
                n.data("clockpicker", new C(n,a))
            }
        })
    }
}(),
!function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipe = t()
}(this, function() {
    "use strict";
    var e = function(e, t, i, n) {
        var r = {
            features: null ,
            bind: function(e, t, i, n) {
                var r = (n ? "remove" : "add") + "EventListener";
                t = t.split(" ");
                for (var a = 0; a < t.length; a++)
                    t[a] && e[r](t[a], i, !1)
            },
            isArray: function(e) {
                return e instanceof Array
            },
            createEl: function(e, t) {
                var i = document.createElement(t || "div");
                return e && (i.className = e),
                i
            },
            getScrollY: function() {
                var e = window.pageYOffset;
                return void 0 !== e ? e : document.documentElement.scrollTop
            },
            unbind: function(e, t, i) {
                r.bind(e, t, i, !0)
            },
            removeClass: function(e, t) {
                var i = new RegExp("(\\s|^)" + t + "(\\s|$)");
                e.className = e.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
            },
            addClass: function(e, t) {
                r.hasClass(e, t) || (e.className += (e.className ? " " : "") + t)
            },
            hasClass: function(e, t) {
                return e.className && new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className)
            },
            getChildByClass: function(e, t) {
                for (var i = e.firstChild; i; ) {
                    if (r.hasClass(i, t))
                        return i;
                    i = i.nextSibling
                }
            },
            arraySearch: function(e, t, i) {
                for (var n = e.length; n--; )
                    if (e[n][i] === t)
                        return n;
                return -1
            },
            extend: function(e, t, i) {
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        if (i && e.hasOwnProperty(n))
                            continue;e[n] = t[n]
                    }
            },
            easing: {
                sine: {
                    out: function(e) {
                        return Math.sin(e * (Math.PI / 2))
                    },
                    inOut: function(e) {
                        return -(Math.cos(Math.PI * e) - 1) / 2
                    }
                },
                cubic: {
                    out: function(e) {
                        return --e * e * e + 1
                    }
                }
            },
            detectFeatures: function() {
                if (r.features)
                    return r.features;
                var e = r.createEl()
                  , t = e.style
                  , i = ""
                  , n = {};
                if (n.oldIE = document.all && !document.addEventListener,
                n.touch = "ontouchstart"in window,
                window.requestAnimationFrame && (n.raf = window.requestAnimationFrame,
                n.caf = window.cancelAnimationFrame),
                n.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled,
                !n.pointerEvent) {
                    var a = navigator.userAgent;
                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var o = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                        o && o.length > 0 && (o = parseInt(o[1], 10),
                        o >= 1 && 8 > o && (n.isOldIOSPhone = !0))
                    }
                    var s = a.match(/Android\s([0-9\.]*)/)
                      , l = s ? s[1] : 0;
                    l = parseFloat(l),
                    l >= 1 && (4.4 > l && (n.isOldAndroid = !0),
                    n.androidVersion = l),
                    n.isMobileOpera = /opera mini|opera mobi/i.test(a)
                }
                for (var u, c, f = ["transform", "perspective", "animationName"], h = ["", "webkit", "Moz", "ms", "O"], d = 0; 4 > d; d++) {
                    i = h[d];
                    for (var p = 0; 3 > p; p++)
                        u = f[p],
                        c = i + (i ? u.charAt(0).toUpperCase() + u.slice(1) : u),
                        !n[u] && c in t && (n[u] = c);
                    i && !n.raf && (i = i.toLowerCase(),
                    n.raf = window[i + "RequestAnimationFrame"],
                    n.raf && (n.caf = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]))
                }
                if (!n.raf) {
                    var g = 0;
                    n.raf = function(e) {
                        var t = (new Date).getTime()
                          , i = Math.max(0, 16 - (t - g))
                          , n = window.setTimeout(function() {
                            e(t + i)
                        }, i);
                        return g = t + i,
                        n
                    }
                    ,
                    n.caf = function(e) {
                        clearTimeout(e)
                    }
                }
                return n.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
                r.features = n,
                n
            }
        };
        r.detectFeatures(),
        r.features.oldIE && (r.bind = function(e, t, i, n) {
            t = t.split(" ");
            for (var r, a = (n ? "detach" : "attach") + "Event", o = function() {
                i.handleEvent.call(i)
            }
            , s = 0; s < t.length; s++)
                if (r = t[s])
                    if ("object" == typeof i && i.handleEvent) {
                        if (n) {
                            if (!i["oldIE" + r])
                                return !1
                        } else
                            i["oldIE" + r] = o;
                        e[a]("on" + r, i["oldIE" + r])
                    } else
                        e[a]("on" + r, i)
        }
        );
        var a = this
          , o = 25
          , s = 3
          , l = {
            allowPanToNext: !0,
            spacing: .12,
            bgOpacity: 1,
            mouseUsed: !1,
            loop: !0,
            pinchToClose: !0,
            closeOnScroll: !0,
            closeOnVerticalDrag: !0,
            verticalDragRange: .75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: !1,
            focus: !0,
            escKey: !0,
            arrowKeys: !0,
            mainScrollEndFriction: .35,
            panEndFriction: .35,
            isClickableElement: function(e) {
                return "A" === e.tagName
            },
            getDoubleTapZoom: function(e, t) {
                return e ? 1 : t.initialZoomLevel < .7 ? 1 : 1.33
            },
            maxSpreadZoom: 1.33,
            modal: !0,
            scaleMode: "fit"
        };
        r.extend(l, n);
        var u, c, f, h, d, p, g, m, v, y, b, w, x, C, T, k, S, E, A, _, I, P, D, O, L, F, N, M, R, W, H, j, z, V, B, q, Y, X, $, U, Q, G, Z, K, J, ee, te, ie, ne, re, ae, oe, se, le, ue, ce, fe = function() {
            return {
                x: 0,
                y: 0
            }
        }
        , he = fe(), de = fe(), pe = fe(), ge = {}, me = 0, ve = {}, ye = fe(), be = 0, we = !0, xe = [], Ce = {}, Te = !1, ke = function(e, t) {
            r.extend(a, t.publicMethods),
            xe.push(e)
        }
        , Se = function(e) {
            var t = Jt();
            return e > t - 1 ? e - t : 0 > e ? t + e : e
        }
        , Ee = {}, Ae = function(e, t) {
            return Ee[e] || (Ee[e] = []),
            Ee[e].push(t)
        }
        , _e = function(e) {
            var t = Ee[e];
            if (t) {
                var i = Array.prototype.slice.call(arguments);
                i.shift();
                for (var n = 0; n < t.length; n++)
                    t[n].apply(a, i)
            }
        }
        , Ie = function() {
            return (new Date).getTime()
        }
        , Pe = function(e) {
            le = e,
            a.bg.style.opacity = e * l.bgOpacity
        }
        , De = function(e, t, i, n, r) {
            (!Te || r && r !== a.currItem) && (n /= r ? r.fitRatio : a.currItem.fitRatio),
            e[P] = w + t + "px, " + i + "px" + x + " scale(" + n + ")"
        }
        , Oe = function(e) {
            ne && (e && (y > a.currItem.fitRatio ? Te || (fi(a.currItem, !1, !0),
            Te = !0) : Te && (fi(a.currItem),
            Te = !1)),
            De(ne, pe.x, pe.y, y))
        }
        , Le = function(e) {
            e.container && De(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
        }
        , Fe = function(e, t) {
            t[P] = w + e + "px, 0px" + x
        }
        , Ne = function(e, t) {
            if (!l.loop && t) {
                var i = h + (ye.x * me - e) / ye.x
                  , n = Math.round(e - yt.x);
                (0 > i && n > 0 || i >= Jt() - 1 && 0 > n) && (e = yt.x + n * l.mainScrollEndFriction)
            }
            yt.x = e,
            Fe(e, d)
        }
        , Me = function(e, t) {
            var i = bt[e] - ve[e];
            return de[e] + he[e] + i - i * (t / b)
        }
        , Re = function(e, t) {
            e.x = t.x,
            e.y = t.y,
            t.id && (e.id = t.id)
        }
        , We = function(e) {
            e.x = Math.round(e.x),
            e.y = Math.round(e.y)
        }
        , He = null , je = function() {
            He && (r.unbind(document, "mousemove", je),
            r.addClass(e, "pswp--has_mouse"),
            l.mouseUsed = !0,
            _e("mouseUsed")),
            He = setTimeout(function() {
                He = null
            }, 100)
        }
        , ze = function() {
            r.bind(document, "keydown", a),
            H.transform && r.bind(a.scrollWrap, "click", a),
            l.mouseUsed || r.bind(document, "mousemove", je),
            r.bind(window, "resize scroll", a),
            _e("bindEvents")
        }
        , Ve = function() {
            r.unbind(window, "resize", a),
            r.unbind(window, "scroll", v.scroll),
            r.unbind(document, "keydown", a),
            r.unbind(document, "mousemove", je),
            H.transform && r.unbind(a.scrollWrap, "click", a),
            X && r.unbind(window, g, a),
            _e("unbindEvents")
        }
        , Be = function(e, t) {
            var i = si(a.currItem, ge, e);
            return t && (ie = i),
            i
        }
        , qe = function(e) {
            return e || (e = a.currItem),
            e.initialZoomLevel
        }
        , Ye = function(e) {
            return e || (e = a.currItem),
            e.w > 0 ? l.maxSpreadZoom : 1
        }
        , Xe = function(e, t, i, n) {
            return n === a.currItem.initialZoomLevel ? (i[e] = a.currItem.initialPosition[e],
            !0) : (i[e] = Me(e, n),
            i[e] > t.min[e] ? (i[e] = t.min[e],
            !0) : i[e] < t.max[e] ? (i[e] = t.max[e],
            !0) : !1)
        }
        , $e = function() {
            if (P) {
                var t = H.perspective && !O;
                return w = "translate" + (t ? "3d(" : "("),
                void (x = H.perspective ? ", 0px)" : ")")
            }
            P = "left",
            r.addClass(e, "pswp--ie"),
            Fe = function(e, t) {
                t.left = e + "px"
            }
            ,
            Le = function(e) {
                var t = e.fitRatio > 1 ? 1 : e.fitRatio
                  , i = e.container.style
                  , n = t * e.w
                  , r = t * e.h;
                i.width = n + "px",
                i.height = r + "px",
                i.left = e.initialPosition.x + "px",
                i.top = e.initialPosition.y + "px"
            }
            ,
            Oe = function() {
                if (ne) {
                    var e = ne
                      , t = a.currItem
                      , i = t.fitRatio > 1 ? 1 : t.fitRatio
                      , n = i * t.w
                      , r = i * t.h;
                    e.width = n + "px",
                    e.height = r + "px",
                    e.left = pe.x + "px",
                    e.top = pe.y + "px"
                }
            }
        }
        , Ue = function(e) {
            var t = "";
            l.escKey && 27 === e.keyCode ? t = "close" : l.arrowKeys && (37 === e.keyCode ? t = "prev" : 39 === e.keyCode && (t = "next")),
            t && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
            a[t]()))
        }
        , Qe = function(e) {
            e && (Q || U || re || q) && (e.preventDefault(),
            e.stopPropagation())
        }
        , Ge = function() {
            a.setScrollOffset(0, r.getScrollY())
        }
        , Ze = {}, Ke = 0, Je = function(e) {
            Ze[e] && (Ze[e].raf && F(Ze[e].raf),
            Ke--,
            delete Ze[e])
        }
        , et = function(e) {
            Ze[e] && Je(e),
            Ze[e] || (Ke++,
            Ze[e] = {})
        }
        , tt = function() {
            for (var e in Ze)
                Ze.hasOwnProperty(e) && Je(e)
        }
        , it = function(e, t, i, n, r, a, o) {
            var s, l = Ie();
            et(e);
            var u = function() {
                if (Ze[e]) {
                    if (s = Ie() - l,
                    s >= n)
                        return Je(e),
                        a(i),
                        void (o && o());
                    a((i - t) * r(s / n) + t),
                    Ze[e].raf = L(u)
                }
            }
            ;
            u()
        }
        , nt = {
            shout: _e,
            listen: Ae,
            viewportSize: ge,
            options: l,
            isMainScrollAnimating: function() {
                return re
            },
            getZoomLevel: function() {
                return y
            },
            getCurrentIndex: function() {
                return h
            },
            isDragging: function() {
                return X
            },
            isZooming: function() {
                return J
            },
            setScrollOffset: function(e, t) {
                ve.x = e,
                W = ve.y = t,
                _e("updateScrollOffset", ve)
            },
            applyZoomPan: function(e, t, i, n) {
                pe.x = t,
                pe.y = i,
                y = e,
                Oe(n)
            },
            init: function() {
                if (!u && !c) {
                    var i;
                    a.framework = r,
                    a.template = e,
                    a.bg = r.getChildByClass(e, "pswp__bg"),
                    N = e.className,
                    u = !0,
                    H = r.detectFeatures(),
                    L = H.raf,
                    F = H.caf,
                    P = H.transform,
                    R = H.oldIE,
                    a.scrollWrap = r.getChildByClass(e, "pswp__scroll-wrap"),
                    a.container = r.getChildByClass(a.scrollWrap, "pswp__container"),
                    d = a.container.style,
                    a.itemHolders = k = [{
                        el: a.container.children[0],
                        wrap: 0,
                        index: -1
                    }, {
                        el: a.container.children[1],
                        wrap: 0,
                        index: -1
                    }, {
                        el: a.container.children[2],
                        wrap: 0,
                        index: -1
                    }],
                    k[0].el.style.display = k[2].el.style.display = "none",
                    $e(),
                    v = {
                        resize: a.updateSize,
                        scroll: Ge,
                        keydown: Ue,
                        click: Qe
                    };
                    var n = H.isOldIOSPhone || H.isOldAndroid || H.isMobileOpera;
                    for (H.animationName && H.transform && !n || (l.showAnimationDuration = l.hideAnimationDuration = 0),
                    i = 0; i < xe.length; i++)
                        a["init" + xe[i]]();
                    if (t) {
                        var o = a.ui = new t(a,r);
                        o.init()
                    }
                    _e("firstUpdate"),
                    h = h || l.index || 0,
                    (isNaN(h) || 0 > h || h >= Jt()) && (h = 0),
                    a.currItem = Kt(h),
                    (H.isOldIOSPhone || H.isOldAndroid) && (we = !1),
                    e.setAttribute("aria-hidden", "false"),
                    l.modal && (we ? e.style.position = "fixed" : (e.style.position = "absolute",
                    e.style.top = r.getScrollY() + "px")),
                    void 0 === W && (_e("initialLayout"),
                    W = M = r.getScrollY());
                    var f = "pswp--open ";
                    for (l.mainClass && (f += l.mainClass + " "),
                    l.showHideOpacity && (f += "pswp--animate_opacity "),
                    f += O ? "pswp--touch" : "pswp--notouch",
                    f += H.animationName ? " pswp--css_animation" : "",
                    f += H.svg ? " pswp--svg" : "",
                    r.addClass(e, f),
                    a.updateSize(),
                    p = -1,
                    be = null ,
                    i = 0; s > i; i++)
                        Fe((i + p) * ye.x, k[i].el.style);
                    R || r.bind(a.scrollWrap, m, a),
                    Ae("initialZoomInEnd", function() {
                        a.setContent(k[0], h - 1),
                        a.setContent(k[2], h + 1),
                        k[0].el.style.display = k[2].el.style.display = "block",
                        l.focus && e.focus(),
                        ze()
                    }),
                    a.setContent(k[1], h),
                    a.updateCurrItem(),
                    _e("afterInit"),
                    we || (C = setInterval(function() {
                        Ke || X || J || y !== a.currItem.initialZoomLevel || a.updateSize()
                    }, 1e3)),
                    r.addClass(e, "pswp--visible")
                }
            },
            close: function() {
                u && (u = !1,
                c = !0,
                _e("close"),
                Ve(),
                ti(a.currItem, null , !0, a.destroy))
            },
            destroy: function() {
                _e("destroy"),
                Ut && clearTimeout(Ut),
                e.setAttribute("aria-hidden", "true"),
                e.className = N,
                C && clearInterval(C),
                r.unbind(a.scrollWrap, m, a),
                r.unbind(window, "scroll", a),
                kt(),
                tt(),
                Ee = null
            },
            panTo: function(e, t, i) {
                i || (e > ie.min.x ? e = ie.min.x : e < ie.max.x && (e = ie.max.x),
                t > ie.min.y ? t = ie.min.y : t < ie.max.y && (t = ie.max.y)),
                pe.x = e,
                pe.y = t,
                Oe()
            },
            handleEvent: function(e) {
                e = e || window.event,
                v[e.type] && v[e.type](e)
            },
            goTo: function(e) {
                e = Se(e);
                var t = e - h;
                be = t,
                h = e,
                a.currItem = Kt(h),
                me -= t,
                Ne(ye.x * me),
                tt(),
                re = !1,
                a.updateCurrItem()
            },
            next: function() {
                a.goTo(h + 1)
            },
            prev: function() {
                a.goTo(h - 1)
            },
            updateCurrZoomItem: function(e) {
                if (e && _e("beforeChange", 0),
                k[1].el.children.length) {
                    var t = k[1].el.children[0];
                    ne = r.hasClass(t, "pswp__zoom-wrap") ? t.style : null
                } else
                    ne = null ;
                ie = a.currItem.bounds,
                b = y = a.currItem.initialZoomLevel,
                pe.x = ie.center.x,
                pe.y = ie.center.y,
                e && _e("afterChange")
            },
            invalidateCurrItems: function() {
                T = !0;
                for (var e = 0; s > e; e++)
                    k[e].item && (k[e].item.needsUpdate = !0)
            },
            updateCurrItem: function(e) {
                if (0 !== be) {
                    var t, i = Math.abs(be);
                    if (!(e && 2 > i)) {
                        a.currItem = Kt(h),
                        Te = !1,
                        _e("beforeChange", be),
                        i >= s && (p += be + (be > 0 ? -s : s),
                        i = s);
                        for (var n = 0; i > n; n++)
                            be > 0 ? (t = k.shift(),
                            k[s - 1] = t,
                            p++,
                            Fe((p + 2) * ye.x, t.el.style),
                            a.setContent(t, h - i + n + 1 + 1)) : (t = k.pop(),
                            k.unshift(t),
                            p--,
                            Fe(p * ye.x, t.el.style),
                            a.setContent(t, h + i - n - 1 - 1));
                        if (ne && 1 === Math.abs(be)) {
                            var r = Kt(S);
                            r.initialZoomLevel !== y && (si(r, ge),
                            fi(r),
                            Le(r))
                        }
                        be = 0,
                        a.updateCurrZoomItem(),
                        S = h,
                        _e("afterChange")
                    }
                }
            },
            updateSize: function(t) {
                if (!we && l.modal) {
                    var i = r.getScrollY();
                    if (W !== i && (e.style.top = i + "px",
                    W = i),
                    !t && Ce.x === window.innerWidth && Ce.y === window.innerHeight)
                        return;
                    Ce.x = window.innerWidth,
                    Ce.y = window.innerHeight,
                    e.style.height = Ce.y + "px"
                }
                if (ge.x = a.scrollWrap.clientWidth,
                ge.y = a.scrollWrap.clientHeight,
                Ge(),
                ye.x = ge.x + Math.round(ge.x * l.spacing),
                ye.y = ge.y,
                Ne(ye.x * me),
                _e("beforeResize"),
                void 0 !== p) {
                    for (var n, o, u, c = 0; s > c; c++)
                        n = k[c],
                        Fe((c + p) * ye.x, n.el.style),
                        u = h + c - 1,
                        l.loop && Jt() > 2 && (u = Se(u)),
                        o = Kt(u),
                        o && (T || o.needsUpdate || !o.bounds) ? (a.cleanSlide(o),
                        a.setContent(n, u),
                        1 === c && (a.currItem = o,
                        a.updateCurrZoomItem(!0)),
                        o.needsUpdate = !1) : -1 === n.index && u >= 0 && a.setContent(n, u),
                        o && o.container && (si(o, ge),
                        fi(o),
                        Le(o));
                    T = !1
                }
                b = y = a.currItem.initialZoomLevel,
                ie = a.currItem.bounds,
                ie && (pe.x = ie.center.x,
                pe.y = ie.center.y,
                Oe(!0)),
                _e("resize")
            },
            zoomTo: function(e, t, i, n, a) {
                t && (b = y,
                bt.x = Math.abs(t.x) - pe.x,
                bt.y = Math.abs(t.y) - pe.y,
                Re(de, pe));
                var o = Be(e, !1)
                  , s = {};
                Xe("x", o, s, e),
                Xe("y", o, s, e);
                var l = y
                  , u = {
                    x: pe.x,
                    y: pe.y
                };
                We(s);
                var c = function(t) {
                    1 === t ? (y = e,
                    pe.x = s.x,
                    pe.y = s.y) : (y = (e - l) * t + l,
                    pe.x = (s.x - u.x) * t + u.x,
                    pe.y = (s.y - u.y) * t + u.y),
                    a && a(t),
                    Oe(1 === t)
                }
                ;
                i ? it("customZoomTo", 0, 1, i, n || r.easing.sine.inOut, c) : c(1)
            }
        }, rt = 30, at = 10, ot = {}, st = {}, lt = {}, ut = {}, ct = {}, ft = [], ht = {}, dt = [], pt = {}, gt = 0, mt = fe(), vt = 0, yt = fe(), bt = fe(), wt = fe(), xt = function(e, t) {
            return e.x === t.x && e.y === t.y
        }
        , Ct = function(e, t) {
            return Math.abs(e.x - t.x) < o && Math.abs(e.y - t.y) < o
        }
        , Tt = function(e, t) {
            return pt.x = Math.abs(e.x - t.x),
            pt.y = Math.abs(e.y - t.y),
            Math.sqrt(pt.x * pt.x + pt.y * pt.y)
        }
        , kt = function() {
            G && (F(G),
            G = null )
        }
        , St = function() {
            X && (G = L(St),
            zt())
        }
        , Et = function() {
            return !("fit" === l.scaleMode && y === a.currItem.initialZoomLevel)
        }
        , At = function(e, t) {
            return e && e !== document ? e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1 ? !1 : t(e) ? e : At(e.parentNode, t) : !1
        }
        , _t = {}, It = function(e, t) {
            return _t.prevent = !At(e.target, l.isClickableElement),
            _e("preventDragEvent", e, t, _t),
            _t.prevent
        }
        , Pt = function(e, t) {
            return t.x = e.pageX,
            t.y = e.pageY,
            t.id = e.identifier,
            t
        }
        , Dt = function(e, t, i) {
            i.x = .5 * (e.x + t.x),
            i.y = .5 * (e.y + t.y)
        }
        , Ot = function(e, t, i) {
            if (e - z > 50) {
                var n = dt.length > 2 ? dt.shift() : {};
                n.x = t,
                n.y = i,
                dt.push(n),
                z = e
            }
        }
        , Lt = function() {
            var e = pe.y - a.currItem.initialPosition.y;
            return 1 - Math.abs(e / (ge.y / 2))
        }
        , Ft = {}, Nt = {}, Mt = [], Rt = function(e) {
            for (; Mt.length > 0; )
                Mt.pop();
            return D ? (ce = 0,
            ft.forEach(function(e) {
                0 === ce ? Mt[0] = e : 1 === ce && (Mt[1] = e),
                ce++
            })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Mt[0] = Pt(e.touches[0], Ft),
            e.touches.length > 1 && (Mt[1] = Pt(e.touches[1], Nt))) : (Ft.x = e.pageX,
            Ft.y = e.pageY,
            Ft.id = "",
            Mt[0] = Ft),
            Mt
        }
        , Wt = function(e, t) {
            var i, n, r, o, s = 0, u = pe[e] + t[e], c = t[e] > 0, f = yt.x + t.x, h = yt.x - ht.x;
            return i = u > ie.min[e] || u < ie.max[e] ? l.panEndFriction : 1,
            u = pe[e] + t[e] * i,
            !l.allowPanToNext && y !== a.currItem.initialZoomLevel || (ne ? "h" !== ae || "x" !== e || U || (c ? (u > ie.min[e] && (i = l.panEndFriction,
            s = ie.min[e] - u,
            n = ie.min[e] - de[e]),
            (0 >= n || 0 > h) && Jt() > 1 ? (o = f,
            0 > h && f > ht.x && (o = ht.x)) : ie.min.x !== ie.max.x && (r = u)) : (u < ie.max[e] && (i = l.panEndFriction,
            s = u - ie.max[e],
            n = de[e] - ie.max[e]),
            (0 >= n || h > 0) && Jt() > 1 ? (o = f,
            h > 0 && f < ht.x && (o = ht.x)) : ie.min.x !== ie.max.x && (r = u))) : o = f,
            "x" !== e) ? void (re || Z || y > a.currItem.fitRatio && (pe[e] += t[e] * i)) : (void 0 !== o && (Ne(o, !0),
            Z = o === ht.x ? !1 : !0),
            ie.min.x !== ie.max.x && (void 0 !== r ? pe.x = r : Z || (pe.x += t.x * i)),
            void 0 !== o)
        }
        , Ht = function(e) {
            if (!("mousedown" === e.type && e.button > 0)) {
                if (Zt)
                    return void e.preventDefault();
                if (!Y || "mousedown" !== e.type) {
                    if (It(e, !0) && e.preventDefault(),
                    _e("pointerDown"),
                    D) {
                        var t = r.arraySearch(ft, e.pointerId, "id");
                        0 > t && (t = ft.length),
                        ft[t] = {
                            x: e.pageX,
                            y: e.pageY,
                            id: e.pointerId
                        }
                    }
                    var i = Rt(e)
                      , n = i.length;
                    K = null ,
                    tt(),
                    X && 1 !== n || (X = oe = !0,
                    r.bind(window, g, a),
                    B = ue = se = q = Z = Q = $ = U = !1,
                    ae = null ,
                    _e("firstTouchStart", i),
                    Re(de, pe),
                    he.x = he.y = 0,
                    Re(ut, i[0]),
                    Re(ct, ut),
                    ht.x = ye.x * me,
                    dt = [{
                        x: ut.x,
                        y: ut.y
                    }],
                    z = j = Ie(),
                    Be(y, !0),
                    kt(),
                    St()),
                    !J && n > 1 && !re && !Z && (b = y,
                    U = !1,
                    J = $ = !0,
                    he.y = he.x = 0,
                    Re(de, pe),
                    Re(ot, i[0]),
                    Re(st, i[1]),
                    Dt(ot, st, wt),
                    bt.x = Math.abs(wt.x) - pe.x,
                    bt.y = Math.abs(wt.y) - pe.y,
                    ee = te = Tt(ot, st))
                }
            }
        }
        , jt = function(e) {
            if (e.preventDefault(),
            D) {
                var t = r.arraySearch(ft, e.pointerId, "id");
                if (t > -1) {
                    var i = ft[t];
                    i.x = e.pageX,
                    i.y = e.pageY
                }
            }
            if (X) {
                var n = Rt(e);
                if (ae || Q || J)
                    K = n;
                else if (yt.x !== ye.x * me)
                    ae = "h";
                else {
                    var a = Math.abs(n[0].x - ut.x) - Math.abs(n[0].y - ut.y);
                    Math.abs(a) >= at && (ae = a > 0 ? "h" : "v",
                    K = n)
                }
            }
        }
        , zt = function() {
            if (K) {
                var e = K.length;
                if (0 !== e)
                    if (Re(ot, K[0]),
                    lt.x = ot.x - ut.x,
                    lt.y = ot.y - ut.y,
                    J && e > 1) {
                        if (ut.x = ot.x,
                        ut.y = ot.y,
                        !lt.x && !lt.y && xt(K[1], st))
                            return;
                        Re(st, K[1]),
                        U || (U = !0,
                        _e("zoomGestureStarted"));
                        var t = Tt(ot, st)
                          , i = Xt(t);
                        i > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (ue = !0);
                        var n = 1
                          , r = qe()
                          , o = Ye();
                        if (r > i)
                            if (l.pinchToClose && !ue && b <= a.currItem.initialZoomLevel) {
                                var s = r - i
                                  , u = 1 - s / (r / 1.2);
                                Pe(u),
                                _e("onPinchClose", u),
                                se = !0
                            } else
                                n = (r - i) / r,
                                n > 1 && (n = 1),
                                i = r - n * (r / 3);
                        else
                            i > o && (n = (i - o) / (6 * r),
                            n > 1 && (n = 1),
                            i = o + n * r);
                        0 > n && (n = 0),
                        ee = t,
                        Dt(ot, st, mt),
                        he.x += mt.x - wt.x,
                        he.y += mt.y - wt.y,
                        Re(wt, mt),
                        pe.x = Me("x", i),
                        pe.y = Me("y", i),
                        B = i > y,
                        y = i,
                        Oe()
                    } else {
                        if (!ae)
                            return;
                        if (oe && (oe = !1,
                        Math.abs(lt.x) >= at && (lt.x -= K[0].x - ct.x),
                        Math.abs(lt.y) >= at && (lt.y -= K[0].y - ct.y)),
                        ut.x = ot.x,
                        ut.y = ot.y,
                        0 === lt.x && 0 === lt.y)
                            return;
                        if ("v" === ae && l.closeOnVerticalDrag && !Et()) {
                            he.y += lt.y,
                            pe.y += lt.y;
                            var c = Lt();
                            return q = !0,
                            _e("onVerticalDrag", c),
                            Pe(c),
                            void Oe()
                        }
                        Ot(Ie(), ot.x, ot.y),
                        Q = !0,
                        ie = a.currItem.bounds;
                        var f = Wt("x", lt);
                        f || (Wt("y", lt),
                        We(pe),
                        Oe())
                    }
            }
        }
        , Vt = function(e) {
            if (H.isOldAndroid) {
                if (Y && "mouseup" === e.type)
                    return;
                e.type.indexOf("touch") > -1 && (clearTimeout(Y),
                Y = setTimeout(function() {
                    Y = 0
                }, 600))
            }
            _e("pointerUp"),
            It(e, !1) && e.preventDefault();
            var t;
            if (D) {
                var i = r.arraySearch(ft, e.pointerId, "id");
                if (i > -1)
                    if (t = ft.splice(i, 1)[0],
                    navigator.pointerEnabled)
                        t.type = e.pointerType || "mouse";
                    else {
                        var n = {
                            4: "mouse",
                            2: "touch",
                            3: "pen"
                        };
                        t.type = n[e.pointerType],
                        t.type || (t.type = e.pointerType || "mouse")
                    }
            }
            var o, s = Rt(e), u = s.length;
            if ("mouseup" === e.type && (u = 0),
            2 === u)
                return K = null ,
                !0;
            1 === u && Re(ct, s[0]),
            0 !== u || ae || re || (t || ("mouseup" === e.type ? t = {
                x: e.pageX,
                y: e.pageY,
                type: "mouse"
            } : e.changedTouches && e.changedTouches[0] && (t = {
                x: e.changedTouches[0].pageX,
                y: e.changedTouches[0].pageY,
                type: "touch"
            })),
            _e("touchRelease", e, t));
            var c = -1;
            if (0 === u && (X = !1,
            r.unbind(window, g, a),
            kt(),
            J ? c = 0 : -1 !== vt && (c = Ie() - vt)),
            vt = 1 === u ? Ie() : -1,
            o = -1 !== c && 150 > c ? "zoom" : "swipe",
            J && 2 > u && (J = !1,
            1 === u && (o = "zoomPointerUp"),
            _e("zoomGestureEnded")),
            K = null ,
            Q || U || re || q)
                if (tt(),
                V || (V = Bt()),
                V.calculateSwipeSpeed("x"),
                q) {
                    var f = Lt();
                    if (f < l.verticalDragRange)
                        a.close();
                    else {
                        var h = pe.y
                          , d = le;
                        it("verticalDrag", 0, 1, 300, r.easing.cubic.out, function(e) {
                            pe.y = (a.currItem.initialPosition.y - h) * e + h,
                            Pe((1 - d) * e + d),
                            Oe()
                        }),
                        _e("onVerticalDrag", 1)
                    }
                } else {
                    if ((Z || re) && 0 === u) {
                        var p = Yt(o, V);
                        if (p)
                            return;
                        o = "zoomPointerUp"
                    }
                    if (!re)
                        return "swipe" !== o ? void $t() : void (!Z && y > a.currItem.fitRatio && qt(V))
                }
        }
        , Bt = function() {
            var e, t, i = {
                lastFlickOffset: {},
                lastFlickDist: {},
                lastFlickSpeed: {},
                slowDownRatio: {},
                slowDownRatioReverse: {},
                speedDecelerationRatio: {},
                speedDecelerationRatioAbs: {},
                distanceOffset: {},
                backAnimDestination: {},
                backAnimStarted: {},
                calculateSwipeSpeed: function(n) {
                    dt.length > 1 ? (e = Ie() - z + 50,
                    t = dt[dt.length - 2][n]) : (e = Ie() - j,
                    t = ct[n]),
                    i.lastFlickOffset[n] = ut[n] - t,
                    i.lastFlickDist[n] = Math.abs(i.lastFlickOffset[n]),
                    i.lastFlickDist[n] > 20 ? i.lastFlickSpeed[n] = i.lastFlickOffset[n] / e : i.lastFlickSpeed[n] = 0,
                    Math.abs(i.lastFlickSpeed[n]) < .1 && (i.lastFlickSpeed[n] = 0),
                    i.slowDownRatio[n] = .95,
                    i.slowDownRatioReverse[n] = 1 - i.slowDownRatio[n],
                    i.speedDecelerationRatio[n] = 1
                },
                calculateOverBoundsAnimOffset: function(e, t) {
                    i.backAnimStarted[e] || (pe[e] > ie.min[e] ? i.backAnimDestination[e] = ie.min[e] : pe[e] < ie.max[e] && (i.backAnimDestination[e] = ie.max[e]),
                    void 0 !== i.backAnimDestination[e] && (i.slowDownRatio[e] = .7,
                    i.slowDownRatioReverse[e] = 1 - i.slowDownRatio[e],
                    i.speedDecelerationRatioAbs[e] < .05 && (i.lastFlickSpeed[e] = 0,
                    i.backAnimStarted[e] = !0,
                    it("bounceZoomPan" + e, pe[e], i.backAnimDestination[e], t || 300, r.easing.sine.out, function(t) {
                        pe[e] = t,
                        Oe()
                    }))))
                },
                calculateAnimOffset: function(e) {
                    i.backAnimStarted[e] || (i.speedDecelerationRatio[e] = i.speedDecelerationRatio[e] * (i.slowDownRatio[e] + i.slowDownRatioReverse[e] - i.slowDownRatioReverse[e] * i.timeDiff / 10),
                    i.speedDecelerationRatioAbs[e] = Math.abs(i.lastFlickSpeed[e] * i.speedDecelerationRatio[e]),
                    i.distanceOffset[e] = i.lastFlickSpeed[e] * i.speedDecelerationRatio[e] * i.timeDiff,
                    pe[e] += i.distanceOffset[e])
                },
                panAnimLoop: function() {
                    return Ze.zoomPan && (Ze.zoomPan.raf = L(i.panAnimLoop),
                    i.now = Ie(),
                    i.timeDiff = i.now - i.lastNow,
                    i.lastNow = i.now,
                    i.calculateAnimOffset("x"),
                    i.calculateAnimOffset("y"),
                    Oe(),
                    i.calculateOverBoundsAnimOffset("x"),
                    i.calculateOverBoundsAnimOffset("y"),
                    i.speedDecelerationRatioAbs.x < .05 && i.speedDecelerationRatioAbs.y < .05) ? (pe.x = Math.round(pe.x),
                    pe.y = Math.round(pe.y),
                    Oe(),
                    void Je("zoomPan")) : void 0
                }
            };
            return i
        }
        , qt = function(e) {
            return e.calculateSwipeSpeed("y"),
            ie = a.currItem.bounds,
            e.backAnimDestination = {},
            e.backAnimStarted = {},
            Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05 ? (e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0,
            e.calculateOverBoundsAnimOffset("x"),
            e.calculateOverBoundsAnimOffset("y"),
            !0) : (et("zoomPan"),
            e.lastNow = Ie(),
            void e.panAnimLoop())
        }
        , Yt = function(e, t) {
            var i;
            re || (gt = h);
            var n;
            if ("swipe" === e) {
                var o = ut.x - ct.x
                  , s = t.lastFlickDist.x < 10;
                o > rt && (s || t.lastFlickOffset.x > 20) ? n = -1 : -rt > o && (s || t.lastFlickOffset.x < -20) && (n = 1)
            }
            var u;
            n && (h += n,
            0 > h ? (h = l.loop ? Jt() - 1 : 0,
            u = !0) : h >= Jt() && (h = l.loop ? 0 : Jt() - 1,
            u = !0),
            (!u || l.loop) && (be += n,
            me -= n,
            i = !0));
            var c, f = ye.x * me, d = Math.abs(f - yt.x);
            return i || f > yt.x == t.lastFlickSpeed.x > 0 ? (c = Math.abs(t.lastFlickSpeed.x) > 0 ? d / Math.abs(t.lastFlickSpeed.x) : 333,
            c = Math.min(c, 400),
            c = Math.max(c, 250)) : c = 333,
            gt === h && (i = !1),
            re = !0,
            _e("mainScrollAnimStart"),
            it("mainScroll", yt.x, f, c, r.easing.cubic.out, Ne, function() {
                tt(),
                re = !1,
                gt = -1,
                (i || gt !== h) && a.updateCurrItem(),
                _e("mainScrollAnimComplete")
            }),
            i && a.updateCurrItem(!0),
            i
        }
        , Xt = function(e) {
            return 1 / te * e * b
        }
        , $t = function() {
            var e = y
              , t = qe()
              , i = Ye();
            t > y ? e = t : y > i && (e = i);
            var n, o = 1, s = le;
            return se && !B && !ue && t > y ? (a.close(),
            !0) : (se && (n = function(e) {
                Pe((o - s) * e + s)
            }
            ),
            a.zoomTo(e, 0, 200, r.easing.cubic.out, n),
            !0)
        }
        ;
        ke("Gestures", {
            publicMethods: {
                initGestures: function() {
                    var e = function(e, t, i, n, r) {
                        E = e + t,
                        A = e + i,
                        _ = e + n,
                        I = r ? e + r : ""
                    }
                    ;
                    D = H.pointerEvent,
                    D && H.touch && (H.touch = !1),
                    D ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : H.touch ? (e("touch", "start", "move", "end", "cancel"),
                    O = !0) : e("mouse", "down", "move", "up"),
                    g = A + " " + _ + " " + I,
                    m = E,
                    D && !O && (O = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1),
                    a.likelyTouchDevice = O,
                    v[E] = Ht,
                    v[A] = jt,
                    v[_] = Vt,
                    I && (v[I] = v[_]),
                    H.touch && (m += " mousedown",
                    g += " mousemove mouseup",
                    v.mousedown = v[E],
                    v.mousemove = v[A],
                    v.mouseup = v[_]),
                    O || (l.allowPanToNext = !1)
                }
            }
        });
        var Ut, Qt, Gt, Zt, Kt, Jt, ei, ti = function(t, i, n, o) {
            Ut && clearTimeout(Ut),
            Zt = !0,
            Gt = !0;
            var s;
            t.initialLayout ? (s = t.initialLayout,
            t.initialLayout = null ) : s = l.getThumbBoundsFn && l.getThumbBoundsFn(h);
            var u = n ? l.hideAnimationDuration : l.showAnimationDuration
              , c = function() {
                Je("initialZoom"),
                n ? (a.template.removeAttribute("style"),
                a.bg.removeAttribute("style")) : (Pe(1),
                i && (i.style.display = "block"),
                r.addClass(e, "pswp--animated-in"),
                _e("initialZoom" + (n ? "OutEnd" : "InEnd"))),
                o && o(),
                Zt = !1
            }
            ;
            if (!u || !s || void 0 === s.x)
                return _e("initialZoom" + (n ? "Out" : "In")),
                y = t.initialZoomLevel,
                Re(pe, t.initialPosition),
                Oe(),
                e.style.opacity = n ? 0 : 1,
                Pe(1),
                void (u ? setTimeout(function() {
                    c()
                }, u) : c());
            var d = function() {
                var i = f
                  , o = !a.currItem.src || a.currItem.loadError || l.showHideOpacity;
                t.miniImg && (t.miniImg.style.webkitBackfaceVisibility = "hidden"),
                n || (y = s.w / t.w,
                pe.x = s.x,
                pe.y = s.y - M,
                a[o ? "template" : "bg"].style.opacity = .001,
                Oe()),
                et("initialZoom"),
                n && !i && r.removeClass(e, "pswp--animated-in"),
                o && (n ? r[(i ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function() {
                    r.addClass(e, "pswp--animate_opacity")
                }, 30)),
                Ut = setTimeout(function() {
                    if (_e("initialZoom" + (n ? "Out" : "In")),
                    n) {
                        var a = s.w / t.w
                          , l = {
                            x: pe.x,
                            y: pe.y
                        }
                          , f = y
                          , h = le
                          , d = function(t) {
                            1 === t ? (y = a,
                            pe.x = s.x,
                            pe.y = s.y - W) : (y = (a - f) * t + f,
                            pe.x = (s.x - l.x) * t + l.x,
                            pe.y = (s.y - W - l.y) * t + l.y),
                            Oe(),
                            o ? e.style.opacity = 1 - t : Pe(h - t * h)
                        }
                        ;
                        i ? it("initialZoom", 0, 1, u, r.easing.cubic.out, d, c) : (d(1),
                        Ut = setTimeout(c, u + 20))
                    } else
                        y = t.initialZoomLevel,
                        Re(pe, t.initialPosition),
                        Oe(),
                        Pe(1),
                        o ? e.style.opacity = 1 : Pe(1),
                        Ut = setTimeout(c, u + 20)
                }, n ? 25 : 90)
            }
            ;
            d()
        }
        , ii = {}, ni = [], ri = {
            index: 0,
            errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
            forceProgressiveLoading: !1,
            preload: [1, 1],
            getNumItemsFn: function() {
                return Qt.length
            }
        }, ai = function() {
            return {
                center: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                },
                min: {
                    x: 0,
                    y: 0
                }
            }
        }
        , oi = function(e, t, i) {
            var n = e.bounds;
            n.center.x = Math.round((ii.x - t) / 2),
            n.center.y = Math.round((ii.y - i) / 2) + e.vGap.top,
            n.max.x = t > ii.x ? Math.round(ii.x - t) : n.center.x,
            n.max.y = i > ii.y ? Math.round(ii.y - i) + e.vGap.top : n.center.y,
            n.min.x = t > ii.x ? 0 : n.center.x,
            n.min.y = i > ii.y ? e.vGap.top : n.center.y
        }
        , si = function(e, t, i) {
            if (e.src && !e.loadError) {
                var n = !i;
                if (n && (e.vGap || (e.vGap = {
                    top: 0,
                    bottom: 0
                }),
                _e("parseVerticalMargin", e)),
                ii.x = t.x,
                ii.y = t.y - e.vGap.top - e.vGap.bottom,
                n) {
                    var r = ii.x / e.w
                      , a = ii.y / e.h;
                    e.fitRatio = a > r ? r : a;
                    var o = l.scaleMode;
                    "orig" === o ? i = 1 : "fit" === o && (i = e.fitRatio),
                    i > 1 && (i = 1),
                    e.initialZoomLevel = i,
                    e.bounds || (e.bounds = ai())
                }
                if (!i)
                    return;
                return oi(e, e.w * i, e.h * i),
                n && i === e.initialZoomLevel && (e.initialPosition = e.bounds.center),
                e.bounds
            }
            return e.w = e.h = 0,
            e.initialZoomLevel = e.fitRatio = 1,
            e.bounds = ai(),
            e.initialPosition = e.bounds.center,
            e.bounds
        }
        , li = function(e, t, i, n, r, o) {
            t.loadError || n && (t.imageAppended = !0,
            fi(t, n, t === a.currItem && Te),
            i.appendChild(n),
            o && setTimeout(function() {
                t && t.loaded && t.placeholder && (t.placeholder.style.display = "none",
                t.placeholder = null )
            }, 500))
        }
        , ui = function(e) {
            e.loading = !0,
            e.loaded = !1;
            var t = e.img = r.createEl("pswp__img", "img")
              , i = function() {
                e.loading = !1,
                e.loaded = !0,
                e.loadComplete ? e.loadComplete(e) : e.img = null ,
                t.onload = t.onerror = null ,
                t = null
            }
            ;
            return t.onload = i,
            t.onerror = function() {
                e.loadError = !0,
                i()
            }
            ,
            t.src = e.src,
            t
        }
        , ci = function(e, t) {
            return e.src && e.loadError && e.container ? (t && (e.container.innerHTML = ""),
            e.container.innerHTML = l.errorMsg.replace("%url%", e.src),
            !0) : void 0
        }
        , fi = function(e, t, i) {
            if (e.src) {
                t || (t = e.container.lastChild);
                var n = i ? e.w : Math.round(e.w * e.fitRatio)
                  , r = i ? e.h : Math.round(e.h * e.fitRatio);
                e.placeholder && !e.loaded && (e.placeholder.style.width = n + "px",
                e.placeholder.style.height = r + "px"),
                t.style.width = n + "px",
                t.style.height = r + "px"
            }
        }
        , hi = function() {
            if (ni.length) {
                for (var e, t = 0; t < ni.length; t++)
                    e = ni[t],
                    e.holder.index === e.index && li(e.index, e.item, e.baseDiv, e.img, !1, e.clearPlaceholder);
                ni = []
            }
        }
        ;
        ke("Controller", {
            publicMethods: {
                lazyLoadItem: function(e) {
                    e = Se(e);
                    var t = Kt(e);
                    t && (!t.loaded && !t.loading || T) && (_e("gettingData", e, t),
                    t.src && ui(t))
                },
                initController: function() {
                    r.extend(l, ri, !0),
                    a.items = Qt = i,
                    Kt = a.getItemAt,
                    Jt = l.getNumItemsFn,
                    ei = l.loop,
                    Jt() < 3 && (l.loop = !1),
                    Ae("beforeChange", function(e) {
                        var t, i = l.preload, n = null === e ? !0 : e >= 0, r = Math.min(i[0], Jt()), o = Math.min(i[1], Jt());
                        for (t = 1; (n ? o : r) >= t; t++)
                            a.lazyLoadItem(h + t);
                        for (t = 1; (n ? r : o) >= t; t++)
                            a.lazyLoadItem(h - t)
                    }),
                    Ae("initialLayout", function() {
                        a.currItem.initialLayout = l.getThumbBoundsFn && l.getThumbBoundsFn(h)
                    }),
                    Ae("mainScrollAnimComplete", hi),
                    Ae("initialZoomInEnd", hi),
                    Ae("destroy", function() {
                        for (var e, t = 0; t < Qt.length; t++)
                            e = Qt[t],
                            e.container && (e.container = null ),
                            e.placeholder && (e.placeholder = null ),
                            e.img && (e.img = null ),
                            e.preloader && (e.preloader = null ),
                            e.loadError && (e.loaded = e.loadError = !1);
                        ni = null
                    })
                },
                getItemAt: function(e) {
                    return e >= 0 && void 0 !== Qt[e] ? Qt[e] : !1
                },
                allowProgressiveImg: function() {
                    return l.forceProgressiveLoading || !O || l.mouseUsed || screen.width > 1200
                },
                setContent: function(e, t) {
                    l.loop && (t = Se(t));
                    var i = a.getItemAt(e.index);
                    i && (i.container = null );
                    var n, o = a.getItemAt(t);
                    if (!o)
                        return void (e.el.innerHTML = "");
                    _e("gettingData", t, o),
                    e.index = t,
                    e.item = o;
                    var s = o.container = r.createEl("pswp__zoom-wrap");
                    if (!o.src && o.html && (o.html.tagName ? s.appendChild(o.html) : s.innerHTML = o.html),
                    ci(o),
                    si(o, ge),
                    !o.src || o.loadError || o.loaded)
                        o.src && !o.loadError && (n = r.createEl("pswp__img", "img"),
                        n.style.opacity = 1,
                        n.src = o.src,
                        fi(o, n),
                        li(t, o, s, n, !0));
                    else {
                        if (o.loadComplete = function(i) {
                            if (u) {
                                if (e && e.index === t) {
                                    if (ci(i, !0))
                                        return i.loadComplete = i.img = null ,
                                        si(i, ge),
                                        Le(i),
                                        void (e.index === h && a.updateCurrZoomItem());
                                    i.imageAppended ? !Zt && i.placeholder && (i.placeholder.style.display = "none",
                                    i.placeholder = null ) : H.transform && (re || Zt) ? ni.push({
                                        item: i,
                                        baseDiv: s,
                                        img: i.img,
                                        index: t,
                                        holder: e,
                                        clearPlaceholder: !0
                                    }) : li(t, i, s, i.img, re || Zt, !0)
                                }
                                i.loadComplete = null ,
                                i.img = null ,
                                _e("imageLoadComplete", t, i)
                            }
                        }
                        ,
                        r.features.transform) {
                            var c = "pswp__img pswp__img--placeholder";
                            c += o.msrc ? "" : " pswp__img--placeholder--blank";
                            var f = r.createEl(c, o.msrc ? "img" : "");
                            o.msrc && (f.src = o.msrc),
                            fi(o, f),
                            s.appendChild(f),
                            o.placeholder = f
                        }
                        o.loading || ui(o),
                        a.allowProgressiveImg() && (!Gt && H.transform ? ni.push({
                            item: o,
                            baseDiv: s,
                            img: o.img,
                            index: t,
                            holder: e
                        }) : li(t, o, s, o.img, !0, !0))
                    }
                    Gt || t !== h ? Le(o) : (ne = s.style,
                    ti(o, n || o.img)),
                    e.el.innerHTML = "",
                    e.el.appendChild(s)
                },
                cleanSlide: function(e) {
                    e.img && (e.img.onload = e.img.onerror = null ),
                    e.loaded = e.loading = e.img = e.imageAppended = !1
                }
            }
        });
        var di, pi = {}, gi = function(e, t, i) {
            var n = document.createEvent("CustomEvent")
              , r = {
                origEvent: e,
                target: e.target,
                releasePoint: t,
                pointerType: i || "touch"
            };
            n.initCustomEvent("pswpTap", !0, !0, r),
            e.target.dispatchEvent(n)
        }
        ;
        ke("Tap", {
            publicMethods: {
                initTap: function() {
                    Ae("firstTouchStart", a.onTapStart),
                    Ae("touchRelease", a.onTapRelease),
                    Ae("destroy", function() {
                        pi = {},
                        di = null
                    })
                },
                onTapStart: function(e) {
                    e.length > 1 && (clearTimeout(di),
                    di = null )
                },
                onTapRelease: function(e, t) {
                    if (t && !Q && !$ && !Ke) {
                        var i = t;
                        if (di && (clearTimeout(di),
                        di = null ,
                        Ct(i, pi)))
                            return void _e("doubleTap", i);
                        if ("mouse" === t.type)
                            return void gi(e, t, "mouse");
                        var n = e.target.tagName.toUpperCase();
                        if ("BUTTON" === n || r.hasClass(e.target, "pswp__single-tap"))
                            return void gi(e, t);
                        Re(pi, i),
                        di = setTimeout(function() {
                            gi(e, t),
                            di = null
                        }, 300)
                    }
                }
            }
        });
        var mi;
        ke("DesktopZoom", {
            publicMethods: {
                initDesktopZoom: function() {
                    R || (O ? Ae("mouseUsed", function() {
                        a.setupDesktopZoom()
                    }) : a.setupDesktopZoom(!0))
                },
                setupDesktopZoom: function(t) {
                    mi = {};
                    var i = "wheel mousewheel DOMMouseScroll";
                    Ae("bindEvents", function() {
                        r.bind(e, i, a.handleMouseWheel)
                    }),
                    Ae("unbindEvents", function() {
                        mi && r.unbind(e, i, a.handleMouseWheel)
                    }),
                    a.mouseZoomedIn = !1;
                    var n, o = function() {
                        a.mouseZoomedIn && (r.removeClass(e, "pswp--zoomed-in"),
                        a.mouseZoomedIn = !1),
                        1 > y ? r.addClass(e, "pswp--zoom-allowed") : r.removeClass(e, "pswp--zoom-allowed"),
                        s()
                    }
                    , s = function() {
                        n && (r.removeClass(e, "pswp--dragging"),
                        n = !1)
                    }
                    ;
                    Ae("resize", o),
                    Ae("afterChange", o),
                    Ae("pointerDown", function() {
                        a.mouseZoomedIn && (n = !0,
                        r.addClass(e, "pswp--dragging"))
                    }),
                    Ae("pointerUp", s),
                    t || o()
                },
                handleMouseWheel: function(e) {
                    if (y <= a.currItem.fitRatio)
                        return l.modal && (!l.closeOnScroll || Ke || X ? e.preventDefault() : P && Math.abs(e.deltaY) > 2 && (f = !0,
                        a.close())),
                        !0;
                    if (e.stopPropagation(),
                    mi.x = 0,
                    "deltaX"in e)
                        1 === e.deltaMode ? (mi.x = 18 * e.deltaX,
                        mi.y = 18 * e.deltaY) : (mi.x = e.deltaX,
                        mi.y = e.deltaY);
                    else if ("wheelDelta"in e)
                        e.wheelDeltaX && (mi.x = -.16 * e.wheelDeltaX),
                        e.wheelDeltaY ? mi.y = -.16 * e.wheelDeltaY : mi.y = -.16 * e.wheelDelta;
                    else {
                        if (!("detail"in e))
                            return;
                        mi.y = e.detail
                    }
                    Be(y, !0);
                    var t = pe.x - mi.x
                      , i = pe.y - mi.y;
                    (l.modal || t <= ie.min.x && t >= ie.max.x && i <= ie.min.y && i >= ie.max.y) && e.preventDefault(),
                    a.panTo(t, i)
                },
                toggleDesktopZoom: function(t) {
                    t = t || {
                        x: ge.x / 2 + ve.x,
                        y: ge.y / 2 + ve.y
                    };
                    var i = l.getDoubleTapZoom(!0, a.currItem)
                      , n = y === i;
                    a.mouseZoomedIn = !n,
                    a.zoomTo(n ? a.currItem.initialZoomLevel : i, t, 333),
                    r[(n ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
                }
            }
        });
        var vi, yi, bi, wi, xi, Ci, Ti, ki, Si, Ei, Ai, _i, Ii = {
            history: !0,
            galleryUID: 1
        }, Pi = function() {
            return Ai.hash.substring(1)
        }
        , Di = function() {
            vi && clearTimeout(vi),
            bi && clearTimeout(bi)
        }
        , Oi = function() {
            var e = Pi()
              , t = {};
            if (e.length < 5)
                return t;
            var i, n = e.split("&");
            for (i = 0; i < n.length; i++)
                if (n[i]) {
                    var r = n[i].split("=");
                    r.length < 2 || (t[r[0]] = r[1])
                }
            if (l.galleryPIDs) {
                var a = t.pid;
                for (t.pid = 0,
                i = 0; i < Qt.length; i++)
                    if (Qt[i].pid === a) {
                        t.pid = i;
                        break
                    }
            } else
                t.pid = parseInt(t.pid, 10) - 1;
            return t.pid < 0 && (t.pid = 0),
            t
        }
        , Li = function() {
            if (bi && clearTimeout(bi),
            Ke || X)
                return void (bi = setTimeout(Li, 500));
            wi ? clearTimeout(yi) : wi = !0;
            var e = h + 1
              , t = Kt(h);
            t.hasOwnProperty("pid") && (e = t.pid);
            var i = Ti + "&gid=" + l.galleryUID + "&pid=" + e;
            ki || -1 === Ai.hash.indexOf(i) && (Ei = !0);
            var n = Ai.href.split("#")[0] + "#" + i;
            _i ? "#" + i !== window.location.hash && history[ki ? "replaceState" : "pushState"]("", document.title, n) : ki ? Ai.replace(n) : Ai.hash = i,
            ki = !0,
            yi = setTimeout(function() {
                wi = !1
            }, 60)
        }
        ;
        ke("History", {
            publicMethods: {
                initHistory: function() {
                    if (r.extend(l, Ii, !0),
                    l.history) {
                        Ai = window.location,
                        Ei = !1,
                        Si = !1,
                        ki = !1,
                        Ti = Pi(),
                        _i = "pushState"in history,
                        Ti.indexOf("gid=") > -1 && (Ti = Ti.split("&gid=")[0],
                        Ti = Ti.split("?gid=")[0]),
                        Ae("afterChange", a.updateURL),
                        Ae("unbindEvents", function() {
                            r.unbind(window, "hashchange", a.onHashChange)
                        });
                        var e = function() {
                            Ci = !0,
                            Si || (Ei ? history.back() : Ti ? Ai.hash = Ti : _i ? history.pushState("", document.title, Ai.pathname + Ai.search) : Ai.hash = ""),
                            Di()
                        }
                        ;
                        Ae("unbindEvents", function() {
                            f && e()
                        }),
                        Ae("destroy", function() {
                            Ci || e()
                        }),
                        Ae("firstUpdate", function() {
                            h = Oi().pid
                        });
                        var t = Ti.indexOf("pid=");
                        t > -1 && (Ti = Ti.substring(0, t),
                        "&" === Ti.slice(-1) && (Ti = Ti.slice(0, -1))),
                        setTimeout(function() {
                            u && r.bind(window, "hashchange", a.onHashChange)
                        }, 40)
                    }
                },
                onHashChange: function() {
                    return Pi() === Ti ? (Si = !0,
                    void a.close()) : void (wi || (xi = !0,
                    a.goTo(Oi().pid),
                    xi = !1))
                },
                updateURL: function() {
                    Di(),
                    xi || (ki ? vi = setTimeout(Li, 800) : Li())
                }
            }
        }),
        r.extend(a, nt)
    }
    ;
    return e
}),
!function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.PhotoSwipeUI_Default = t()
}(this, function() {
    "use strict";
    var e = function(e, t) {
        var i, n, r, a, o, s, l, u, c, f, h, d, p, g, m, v, y, b, w, x = this, C = !1, T = !0, k = !0, S = {
            barsSize: {
                top: 44,
                bottom: "auto"
            },
            closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
            timeToIdle: 4e3,
            timeToIdleOutside: 1e3,
            loadingIndicatorDelay: 1e3,
            addCaptionHTMLFn: function(e, t) {
                return e.title ? (t.children[0].innerHTML = e.title,
                !0) : (t.children[0].innerHTML = "",
                !1)
            },
            closeEl: !0,
            captionEl: !0,
            fullscreenEl: !0,
            zoomEl: !0,
            shareEl: !0,
            counterEl: !0,
            arrowEl: !0,
            preloaderEl: !0,
            tapToClose: !1,
            tapToToggleControls: !0,
            clickToCloseNonZoomable: !0,
            shareButtons: [{
                id: "facebook",
                label: "Share on Facebook",
                url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
            }, {
                id: "twitter",
                label: "Tweet",
                url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
            }, {
                id: "pinterest",
                label: "Pin it",
                url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
            }, {
                id: "download",
                label: "Download image",
                url: "{{raw_image_url}}",
                download: !0
            }],
            getImageURLForShare: function() {
                return e.currItem.src || ""
            },
            getPageURLForShare: function() {
                return window.location.href
            },
            getTextForShare: function() {
                return e.currItem.title || ""
            },
            indexIndicatorSep: " / ",
            fitControlsWidth: 1200
        }, E = function(e) {
            if (v)
                return !0;
            e = e || window.event,
            m.timeToIdle && m.mouseUsed && !c && M();
            for (var i, n, r = e.target || e.srcElement, a = r.getAttribute("class") || "", o = 0; o < q.length; o++)
                i = q[o],
                i.onTap && a.indexOf("pswp__" + i.name) > -1 && (i.onTap(),
                n = !0);
            if (n) {
                e.stopPropagation && e.stopPropagation(),
                v = !0;
                var s = t.features.isOldAndroid ? 600 : 30;
                y = setTimeout(function() {
                    v = !1
                }, s)
            }
        }
        , A = function() {
            return !e.likelyTouchDevice || m.mouseUsed || screen.width > m.fitControlsWidth
        }
        , _ = function(e, i, n) {
            t[(n ? "add" : "remove") + "Class"](e, "pswp__" + i)
        }
        , I = function() {
            var e = 1 === m.getNumItemsFn();
            e !== g && (_(n, "ui--one-slide", e),
            g = e)
        }
        , P = function() {
            _(l, "share-modal--hidden", k)
        }
        , D = function() {
            return k = !k,
            k ? (t.removeClass(l, "pswp__share-modal--fade-in"),
            setTimeout(function() {
                k && P()
            }, 300)) : (P(),
            setTimeout(function() {
                k || t.addClass(l, "pswp__share-modal--fade-in")
            }, 30)),
            k || L(),
            !1
        }
        , O = function(t) {
            t = t || window.event;
            var i = t.target || t.srcElement;
            return e.shout("shareLinkClick", t, i),
            i.href ? i.hasAttribute("download") ? !0 : (window.open(i.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)),
            k || D(),
            !1) : !1
        }
        , L = function() {
            for (var e, t, i, n, r, a = "", o = 0; o < m.shareButtons.length; o++)
                e = m.shareButtons[o],
                i = m.getImageURLForShare(e),
                n = m.getPageURLForShare(e),
                r = m.getTextForShare(e),
                t = e.url.replace("{{url}}", encodeURIComponent(n)).replace("{{image_url}}", encodeURIComponent(i)).replace("{{raw_image_url}}", i).replace("{{text}}", encodeURIComponent(r)),
                a += '<a href="' + t + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>",
                m.parseShareButtonOut && (a = m.parseShareButtonOut(e, a));
            l.children[0].innerHTML = a,
            l.children[0].onclick = O
        }
        , F = function(e) {
            for (var i = 0; i < m.closeElClasses.length; i++)
                if (t.hasClass(e, "pswp__" + m.closeElClasses[i]))
                    return !0
        }
        , N = 0, M = function() {
            clearTimeout(w),
            N = 0,
            c && x.setIdle(!1)
        }
        , R = function(e) {
            e = e ? e : window.event;
            var t = e.relatedTarget || e.toElement;
            t && "HTML" !== t.nodeName || (clearTimeout(w),
            w = setTimeout(function() {
                x.setIdle(!0)
            }, m.timeToIdleOutside))
        }
        , W = function() {
            m.fullscreenEl && !t.features.isOldAndroid && (i || (i = x.getFullscreenAPI()),
            i ? (t.bind(document, i.eventK, x.updateFullscreen),
            x.updateFullscreen(),
            t.addClass(e.template, "pswp--supports-fs")) : t.removeClass(e.template, "pswp--supports-fs"))
        }
        , H = function() {
            m.preloaderEl && (j(!0),
            f("beforeChange", function() {
                clearTimeout(p),
                p = setTimeout(function() {
                    e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && j(!1) : j(!0)
                }, m.loadingIndicatorDelay)
            }),
            f("imageLoadComplete", function(t, i) {
                e.currItem === i && j(!0)
            }))
        }
        , j = function(e) {
            d !== e && (_(h, "preloader--active", !e),
            d = e)
        }
        , z = function(e) {
            var i = e.vGap;
            if (A()) {
                var o = m.barsSize;
                if (m.captionEl && "auto" === o.bottom)
                    if (a || (a = t.createEl("pswp__caption pswp__caption--fake"),
                    a.appendChild(t.createEl("pswp__caption__center")),
                    n.insertBefore(a, r),
                    t.addClass(n, "pswp__ui--fit")),
                    m.addCaptionHTMLFn(e, a, !0)) {
                        var s = a.clientHeight;
                        i.bottom = parseInt(s, 10) || 44
                    } else
                        i.bottom = o.top;
                else
                    i.bottom = "auto" === o.bottom ? 0 : o.bottom;
                i.top = o.top
            } else
                i.top = i.bottom = 0
        }
        , V = function() {
            m.timeToIdle && f("mouseUsed", function() {
                t.bind(document, "mousemove", M),
                t.bind(document, "mouseout", R),
                b = setInterval(function() {
                    N++,
                    2 === N && x.setIdle(!0)
                }, m.timeToIdle / 2)
            })
        }
        , B = function() {
            f("onVerticalDrag", function(e) {
                T && .95 > e ? x.hideControls() : !T && e >= .95 && x.showControls()
            });
            var e;
            f("onPinchClose", function(t) {
                T && .9 > t ? (x.hideControls(),
                e = !0) : e && !T && t > .9 && x.showControls()
            }),
            f("zoomGestureEnded", function() {
                e = !1,
                e && !T && x.showControls()
            })
        }
        , q = [{
            name: "caption",
            option: "captionEl",
            onInit: function(e) {
                r = e
            }
        }, {
            name: "share-modal",
            option: "shareEl",
            onInit: function(e) {
                l = e
            },
            onTap: function() {
                D()
            }
        }, {
            name: "button--share",
            option: "shareEl",
            onInit: function(e) {
                s = e
            },
            onTap: function() {
                D()
            }
        }, {
            name: "button--zoom",
            option: "zoomEl",
            onTap: e.toggleDesktopZoom
        }, {
            name: "counter",
            option: "counterEl",
            onInit: function(e) {
                o = e
            }
        }, {
            name: "button--close",
            option: "closeEl",
            onTap: e.close
        }, {
            name: "button--arrow--left",
            option: "arrowEl",
            onTap: e.prev
        }, {
            name: "button--arrow--right",
            option: "arrowEl",
            onTap: e.next
        }, {
            name: "button--fs",
            option: "fullscreenEl",
            onTap: function() {
                i.isFullscreen() ? i.exit() : i.enter()
            }
        }, {
            name: "preloader",
            option: "preloaderEl",
            onInit: function(e) {
                h = e
            }
        }], Y = function() {
            var e, i, r, a = function(n) {
                if (n)
                    for (var a = n.length, o = 0; a > o; o++) {
                        e = n[o],
                        i = e.className;
                        for (var s = 0; s < q.length; s++)
                            r = q[s],
                            i.indexOf("pswp__" + r.name) > -1 && (m[r.option] ? (t.removeClass(e, "pswp__element--disabled"),
                            r.onInit && r.onInit(e)) : t.addClass(e, "pswp__element--disabled"))
                    }
            }
            ;
            a(n.children);
            var o = t.getChildByClass(n, "pswp__top-bar");
            o && a(o.children)
        }
        ;
        x.init = function() {
            t.extend(e.options, S, !0),
            m = e.options,
            n = t.getChildByClass(e.scrollWrap, "pswp__ui"),
            f = e.listen,
            B(),
            f("beforeChange", x.update),
            f("doubleTap", function(t) {
                var i = e.currItem.initialZoomLevel;
                e.getZoomLevel() !== i ? e.zoomTo(i, t, 333) : e.zoomTo(m.getDoubleTapZoom(!1, e.currItem), t, 333)
            }),
            f("preventDragEvent", function(e, t, i) {
                var n = e.target || e.srcElement;
                n && n.getAttribute("class") && e.type.indexOf("mouse") > -1 && (n.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(n.tagName)) && (i.prevent = !1)
            }),
            f("bindEvents", function() {
                t.bind(n, "pswpTap click", E),
                t.bind(e.scrollWrap, "pswpTap", x.onGlobalTap),
                e.likelyTouchDevice || t.bind(e.scrollWrap, "mouseover", x.onMouseOver)
            }),
            f("unbindEvents", function() {
                k || D(),
                b && clearInterval(b),
                t.unbind(document, "mouseout", R),
                t.unbind(document, "mousemove", M),
                t.unbind(n, "pswpTap click", E),
                t.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap),
                t.unbind(e.scrollWrap, "mouseover", x.onMouseOver),
                i && (t.unbind(document, i.eventK, x.updateFullscreen),
                i.isFullscreen() && (m.hideAnimationDuration = 0,
                i.exit()),
                i = null )
            }),
            f("destroy", function() {
                m.captionEl && (a && n.removeChild(a),
                t.removeClass(r, "pswp__caption--empty")),
                l && (l.children[0].onclick = null ),
                t.removeClass(n, "pswp__ui--over-close"),
                t.addClass(n, "pswp__ui--hidden"),
                x.setIdle(!1)
            }),
            m.showAnimationDuration || t.removeClass(n, "pswp__ui--hidden"),
            f("initialZoomIn", function() {
                m.showAnimationDuration && t.removeClass(n, "pswp__ui--hidden")
            }),
            f("initialZoomOut", function() {
                t.addClass(n, "pswp__ui--hidden")
            }),
            f("parseVerticalMargin", z),
            Y(),
            m.shareEl && s && l && (k = !0),
            I(),
            V(),
            W(),
            H()
        }
        ,
        x.setIdle = function(e) {
            c = e,
            _(n, "ui--idle", e)
        }
        ,
        x.update = function() {
            T && e.currItem ? (x.updateIndexIndicator(),
            m.captionEl && (m.addCaptionHTMLFn(e.currItem, r),
            _(r, "caption--empty", !e.currItem.title)),
            C = !0) : C = !1,
            k || D(),
            I()
        }
        ,
        x.updateFullscreen = function(n) {
            n && setTimeout(function() {
                e.setScrollOffset(0, t.getScrollY())
            }, 50),
            t[(i.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }
        ,
        x.updateIndexIndicator = function() {
            m.counterEl && (o.innerHTML = e.getCurrentIndex() + 1 + m.indexIndicatorSep + m.getNumItemsFn())
        }
        ,
        x.onGlobalTap = function(i) {
            i = i || window.event;
            var n = i.target || i.srcElement;
            if (!v)
                if (i.detail && "mouse" === i.detail.pointerType) {
                    if (F(n))
                        return void e.close();
                    t.hasClass(n, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? m.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(i.detail.releasePoint))
                } else if (m.tapToToggleControls && (T ? x.hideControls() : x.showControls()),
                m.tapToClose && (t.hasClass(n, "pswp__img") || F(n)))
                    return void e.close()
        }
        ,
        x.onMouseOver = function(e) {
            e = e || window.event;
            var t = e.target || e.srcElement;
            _(n, "ui--over-close", F(t))
        }
        ,
        x.hideControls = function() {
            t.addClass(n, "pswp__ui--hidden"),
            T = !1
        }
        ,
        x.showControls = function() {
            T = !0,
            C || x.update(),
            t.removeClass(n, "pswp__ui--hidden")
        }
        ,
        x.supportsFullscreen = function() {
            var e = document;
            return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }
        ,
        x.getFullscreenAPI = function() {
            var t, i = document.documentElement, n = "fullscreenchange";
            return i.requestFullscreen ? t = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: n
            } : i.mozRequestFullScreen ? t = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + n
            } : i.webkitRequestFullscreen ? t = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + n
            } : i.msRequestFullscreen && (t = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }),
            t && (t.enter = function() {
                return u = m.closeOnScroll,
                m.closeOnScroll = !1,
                "webkitRequestFullscreen" !== this.enterK ? e.template[this.enterK]() : void e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }
            ,
            t.exit = function() {
                return m.closeOnScroll = u,
                document[this.exitK]()
            }
            ,
            t.isFullscreen = function() {
                return document[this.elementK]
            }
            ),
            t
        }
    }
    ;
    return e
});
var initPhotoSwipeFromDOM = function(e) {
    for (var t = function(e) {
        for (var r, a, o, s, t = e.childNodes, i = t.length, n = [], l = 0; i > l; l++)
            r = t[l],
            1 === r.nodeType && (a = r.children[0],
            o = a.getAttribute("data-size").split("x"),
            s = {
                src: a.getAttribute("href"),
                w: parseInt(o[0], 10),
                h: parseInt(o[1], 10)
            },
            r.children.length > 1 && (s.title = r.children[1].innerHTML),
            a.children.length > 0 && (s.msrc = a.children[0].getAttribute("src")),
            s.el = r,
            n.push(s));
        return n
    }
    , i = function c(e, t) {
        return e && (t(e) ? e : c(e.parentNode, t))
    }
    , n = function(e) {
        e = e || window.event,
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
        var t = e.target || e.srcElement
          , n = i(t, function(e) {
            return e.tagName && "FIGURE" === e.tagName.toUpperCase()
        });
        if (n) {
            for (var u, r = n.parentNode, o = n.parentNode.childNodes, s = o.length, l = 0, c = 0; s > c; c++)
                if (1 === o[c].nodeType) {
                    if (o[c] === n) {
                        u = l;
                        break
                    }
                    l++
                }
            return u >= 0 && a(u, r),
            !1
        }
    }
    , r = function() {
        var e = window.location.hash.substring(1)
          , t = {};
        if (e.length < 5)
            return t;
        for (var i = e.split("&"), n = 0; n < i.length; n++)
            if (i[n]) {
                var r = i[n].split("=");
                r.length < 2 || (t[r[0]] = r[1])
            }
        return t.gid && (t.gid = parseInt(t.gid, 10)),
        t
    }
    , a = function(e, i, n, r) {
        var o, s, l, a = document.querySelectorAll(".pswp")[0];
        if (l = t(i),
        s = {
            galleryUID: i.getAttribute("data-pswp-uid"),
            getThumbBoundsFn: function(e) {
                var t = l[e].el.getElementsByTagName("img")[0]
                  , i = window.pageYOffset || document.documentElement.scrollTop
                  , n = t.getBoundingClientRect();
                return {
                    x: n.left,
                    y: n.top + i,
                    w: n.width
                }
            }
        },
        r)
            if (s.galleryPIDs) {
                for (var u = 0; u < l.length; u++)
                    if (l[u].pid == e) {
                        s.index = u;
                        break
                    }
            } else
                s.index = parseInt(e, 10) - 1;
        else
            s.index = parseInt(e, 10);
        isNaN(s.index) || (n && (s.showAnimationDuration = 0),
        o = new PhotoSwipe(a,PhotoSwipeUI_Default,l,s),
        o.init())
    }
    , o = document.querySelectorAll(e), s = 0, l = o.length; l > s; s++)
        o[s].setAttribute("data-pswp-uid", s + 1),
        o[s].onclick = n;
    var u = r();
    u.pid && u.gid && a(u.pid, o[u.gid - 1], !0, !0)
}
;
initPhotoSwipeFromDOM(".mdb-lightbox"),
function(e) {
    e.fn.sticky = function(t) {
        function r() {
            return "number" == typeof n.zIndex ? !0 : !1
        }
        function o() {
            return 0 < e(n.stopper).length || "number" == typeof n.stopper ? !0 : !1
        }
        var i = {
            topSpacing: 0,
            zIndex: "",
            stopper: ".sticky-stopper"
        }
          , n = e.extend({}, i, t)
          , a = r()
          , s = o();
        return this.each(function() {
            function d() {
                var n = h.scrollTop();
                if (s && "string" == typeof f)
                    var r = e(f).offset().top
                      , d = r - i - o;
                else if (s && "number" == typeof f)
                    var d = f;
                if (n > u) {
                    if (t.after(c).css({
                        position: "fixed",
                        top: o
                    }),
                    a && t.css({
                        zIndex: l
                    }),
                    s && n > d) {
                        var p = d - n + o;
                        t.css({
                            top: p
                        })
                    }
                } else
                    t.css({
                        position: "static",
                        top: null ,
                        left: null
                    }),
                    c.remove()
            }
            var t = e(this)
              , i = t.outerHeight()
              , r = t.outerWidth()
              , o = n.topSpacing
              , l = n.zIndex
              , u = t.offset().top - o
              , c = e("<div></div>").width(r).height(i).addClass("sticky-placeholder")
              , f = n.stopper
              , h = e(window);
            h.bind("scroll", d)
        })
    }
}(jQuery),
!function e(t, i, n) {
    function r(o, s) {
        if (!i[o]) {
            if (!t[o]) {
                var l = "function" == typeof require && require;
                if (!s && l)
                    return l(o, !0);
                if (a)
                    return a(o, !0);
                var u = new Error("Cannot find module '" + o + "'");
                throw u.code = "MODULE_NOT_FOUND",
                u
            }
            var c = i[o] = {
                exports: {}
            };
            t[o][0].call(c.exports, function(e) {
                var i = t[o][1][e];
                return r(i ? i : e)
            }, c, c.exports, e, t, i, n)
        }
        return i[o].exports
    }
    for (var a = "function" == typeof require && require, o = 0; o < n.length; o++)
        r(n[o]);
    return r
}({
    1: [function(e, t, i) {
        "use strict";
        var n = e("../main");
        "function" == typeof define && define.amd ? define(n) : (window.PerfectScrollbar = n,
        "undefined" == typeof window.Ps && (window.Ps = n))
    }
    , {
        "../main": 7
    }],
    2: [function(e, t, i) {
        "use strict";
        function n(e, t) {
            var i = e.className.split(" ");
            i.indexOf(t) < 0 && i.push(t),
            e.className = i.join(" ")
        }
        function r(e, t) {
            var i = e.className.split(" ")
              , n = i.indexOf(t);
            n >= 0 && i.splice(n, 1),
            e.className = i.join(" ")
        }
        i.add = function(e, t) {
            e.classList ? e.classList.add(t) : n(e, t)
        }
        ,
        i.remove = function(e, t) {
            e.classList ? e.classList.remove(t) : r(e, t)
        }
        ,
        i.list = function(e) {
            return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
        }
    }
    , {}],
    3: [function(e, t, i) {
        "use strict";
        function n(e, t) {
            return window.getComputedStyle(e)[t]
        }
        function r(e, t, i) {
            return "number" == typeof i && (i = i.toString() + "px"),
            e.style[t] = i,
            e
        }
        function a(e, t) {
            for (var i in t) {
                var n = t[i];
                "number" == typeof n && (n = n.toString() + "px"),
                e.style[i] = n
            }
            return e
        }
        var o = {};
        o.e = function(e, t) {
            var i = document.createElement(e);
            return i.className = t,
            i
        }
        ,
        o.appendTo = function(e, t) {
            return t.appendChild(e),
            e
        }
        ,
        o.css = function(e, t, i) {
            return "object" == typeof t ? a(e, t) : "undefined" == typeof i ? n(e, t) : r(e, t, i)
        }
        ,
        o.matches = function(e, t) {
            return "undefined" != typeof e.matches ? e.matches(t) : "undefined" != typeof e.matchesSelector ? e.matchesSelector(t) : "undefined" != typeof e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : "undefined" != typeof e.mozMatchesSelector ? e.mozMatchesSelector(t) : "undefined" != typeof e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
        }
        ,
        o.remove = function(e) {
            "undefined" != typeof e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
        }
        ,
        o.queryChildren = function(e, t) {
            return Array.prototype.filter.call(e.childNodes, function(e) {
                return o.matches(e, t)
            })
        }
        ,
        t.exports = o
    }
    , {}],
    4: [function(e, t, i) {
        "use strict";
        var n = function(e) {
            this.element = e,
            this.events = {}
        }
        ;
        n.prototype.bind = function(e, t) {
            "undefined" == typeof this.events[e] && (this.events[e] = []),
            this.events[e].push(t),
            this.element.addEventListener(e, t, !1)
        }
        ,
        n.prototype.unbind = function(e, t) {
            var i = "undefined" != typeof t;
            this.events[e] = this.events[e].filter(function(n) {
                return !(!i || n === t) || (this.element.removeEventListener(e, n, !1),
                !1)
            }, this)
        }
        ,
        n.prototype.unbindAll = function() {
            for (var e in this.events)
                this.unbind(e)
        }
        ;
        var r = function() {
            this.eventElements = []
        }
        ;
        r.prototype.eventElement = function(e) {
            var t = this.eventElements.filter(function(t) {
                return t.element === e
            })[0];
            return "undefined" == typeof t && (t = new n(e),
            this.eventElements.push(t)),
            t
        }
        ,
        r.prototype.bind = function(e, t, i) {
            this.eventElement(e).bind(t, i)
        }
        ,
        r.prototype.unbind = function(e, t, i) {
            this.eventElement(e).unbind(t, i)
        }
        ,
        r.prototype.unbindAll = function() {
            for (var e = 0; e < this.eventElements.length; e++)
                this.eventElements[e].unbindAll()
        }
        ,
        r.prototype.once = function(e, t, i) {
            var n = this.eventElement(e)
              , r = function(e) {
                n.unbind(t, r),
                i(e)
            }
            ;
            n.bind(t, r)
        }
        ,
        t.exports = r
    }
    , {}],
    5: [function(e, t, i) {
        "use strict";
        t.exports = function() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
        }()
    }
    , {}],
    6: [function(e, t, i) {
        "use strict";
        var n = e("./class")
          , r = e("./dom")
          , a = i.toInt = function(e) {
            return parseInt(e, 10) || 0
        }
          , o = i.clone = function(e) {
            if (null === e)
                return null ;
            if (e.constructor === Array)
                return e.map(o);
            if ("object" == typeof e) {
                var t = {};
                for (var i in e)
                    t[i] = o(e[i]);
                return t
            }
            return e
        }
        ;
        i.extend = function(e, t) {
            var i = o(e);
            for (var n in t)
                i[n] = o(t[n]);
            return i
        }
        ,
        i.isEditable = function(e) {
            return r.matches(e, "input,[contenteditable]") || r.matches(e, "select,[contenteditable]") || r.matches(e, "textarea,[contenteditable]") || r.matches(e, "button,[contenteditable]")
        }
        ,
        i.removePsClasses = function(e) {
            for (var t = n.list(e), i = 0; i < t.length; i++) {
                var r = t[i];
                0 === r.indexOf("ps-") && n.remove(e, r)
            }
        }
        ,
        i.outerWidth = function(e) {
            return a(r.css(e, "width")) + a(r.css(e, "paddingLeft")) + a(r.css(e, "paddingRight")) + a(r.css(e, "borderLeftWidth")) + a(r.css(e, "borderRightWidth"))
        }
        ,
        i.startScrolling = function(e, t) {
            n.add(e, "ps-in-scrolling"),
            "undefined" != typeof t ? n.add(e, "ps-" + t) : (n.add(e, "ps-x"),
            n.add(e, "ps-y"))
        }
        ,
        i.stopScrolling = function(e, t) {
            n.remove(e, "ps-in-scrolling"),
            "undefined" != typeof t ? n.remove(e, "ps-" + t) : (n.remove(e, "ps-x"),
            n.remove(e, "ps-y"))
        }
        ,
        i.env = {
            isWebKit: "WebkitAppearance"in document.documentElement.style,
            supportsTouch: "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    }
    , {
        "./class": 2,
        "./dom": 3
    }],
    7: [function(e, t, i) {
        "use strict";
        var n = e("./plugin/destroy")
          , r = e("./plugin/initialize")
          , a = e("./plugin/update");
        t.exports = {
            initialize: r,
            update: a,
            destroy: n
        }
    }
    , {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21
    }],
    8: [function(e, t, i) {
        "use strict";
        t.exports = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null ,
            minScrollbarLength: null ,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            stopPropagationOnClick: !0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        }
    }
    , {}],
    9: [function(e, t, i) {
        "use strict";
        var n = e("../lib/helper")
          , r = e("../lib/dom")
          , a = e("./instances");
        t.exports = function(e) {
            var t = a.get(e);
            t && (t.event.unbindAll(),
            r.remove(t.scrollbarX),
            r.remove(t.scrollbarY),
            r.remove(t.scrollbarXRail),
            r.remove(t.scrollbarYRail),
            n.removePsClasses(e),
            a.remove(e))
        }
    }
    , {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    10: [function(e, t, i) {
        "use strict";
        function n(e, t) {
            function i(e) {
                return e.getBoundingClientRect()
            }
            var n = function(e) {
                e.stopPropagation()
            }
            ;
            t.settings.stopPropagationOnClick && t.event.bind(t.scrollbarY, "click", n),
            t.event.bind(t.scrollbarYRail, "click", function(n) {
                var a = r.toInt(t.scrollbarYHeight / 2)
                  , l = t.railYRatio * (n.pageY - window.pageYOffset - i(t.scrollbarYRail).top - a)
                  , u = t.railYRatio * (t.railYHeight - t.scrollbarYHeight)
                  , c = l / u;
                0 > c ? c = 0 : c > 1 && (c = 1),
                s(e, "top", (t.contentHeight - t.containerHeight) * c),
                o(e),
                n.stopPropagation()
            }),
            t.settings.stopPropagationOnClick && t.event.bind(t.scrollbarX, "click", n),
            t.event.bind(t.scrollbarXRail, "click", function(n) {
                var a = r.toInt(t.scrollbarXWidth / 2)
                  , l = t.railXRatio * (n.pageX - window.pageXOffset - i(t.scrollbarXRail).left - a)
                  , u = t.railXRatio * (t.railXWidth - t.scrollbarXWidth)
                  , c = l / u;
                0 > c ? c = 0 : c > 1 && (c = 1),
                s(e, "left", (t.contentWidth - t.containerWidth) * c - t.negativeScrollAdjustment),
                o(e),
                n.stopPropagation()
            })
        }
        var r = e("../../lib/helper")
          , a = e("../instances")
          , o = e("../update-geometry")
          , s = e("../update-scroll");
        t.exports = function(e) {
            var t = a.get(e);
            n(e, t)
        }
    }
    , {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    11: [function(e, t, i) {
        "use strict";
        function n(e, t) {
            function i(i) {
                var r = n + i * t.railXRatio
                  , o = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                0 > r ? t.scrollbarXLeft = 0 : r > o ? t.scrollbarXLeft = o : t.scrollbarXLeft = r;
                var s = a.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                u(e, "left", s)
            }
            var n = null
              , r = null
              , s = function(t) {
                i(t.pageX - r),
                l(e),
                t.stopPropagation(),
                t.preventDefault()
            }
              , c = function() {
                a.stopScrolling(e, "x"),
                t.event.unbind(t.ownerDocument, "mousemove", s)
            }
            ;
            t.event.bind(t.scrollbarX, "mousedown", function(i) {
                r = i.pageX,
                n = a.toInt(o.css(t.scrollbarX, "left")) * t.railXRatio,
                a.startScrolling(e, "x"),
                t.event.bind(t.ownerDocument, "mousemove", s),
                t.event.once(t.ownerDocument, "mouseup", c),
                i.stopPropagation(),
                i.preventDefault()
            })
        }
        function r(e, t) {
            function i(i) {
                var r = n + i * t.railYRatio
                  , o = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                0 > r ? t.scrollbarYTop = 0 : r > o ? t.scrollbarYTop = o : t.scrollbarYTop = r;
                var s = a.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                u(e, "top", s)
            }
            var n = null
              , r = null
              , s = function(t) {
                i(t.pageY - r),
                l(e),
                t.stopPropagation(),
                t.preventDefault()
            }
              , c = function() {
                a.stopScrolling(e, "y"),
                t.event.unbind(t.ownerDocument, "mousemove", s)
            }
            ;
            t.event.bind(t.scrollbarY, "mousedown", function(i) {
                r = i.pageY,
                n = a.toInt(o.css(t.scrollbarY, "top")) * t.railYRatio,
                a.startScrolling(e, "y"),
                t.event.bind(t.ownerDocument, "mousemove", s),
                t.event.once(t.ownerDocument, "mouseup", c),
                i.stopPropagation(),
                i.preventDefault()
            })
        }
        var a = e("../../lib/helper")
          , o = e("../../lib/dom")
          , s = e("../instances")
          , l = e("../update-geometry")
          , u = e("../update-scroll");
        t.exports = function(e) {
            var t = s.get(e);
            n(e, t),
            r(e, t)
        }
    }
    , {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function(e, t, i) {
        "use strict";
        function n(e, t) {
            function i(i, n) {
                var r = e.scrollTop;
                if (0 === i) {
                    if (!t.scrollbarYActive)
                        return !1;
                    if (0 === r && n > 0 || r >= t.contentHeight - t.containerHeight && 0 > n)
                        return !t.settings.wheelPropagation
                }
                var a = e.scrollLeft;
                if (0 === n) {
                    if (!t.scrollbarXActive)
                        return !1;
                    if (0 === a && 0 > i || a >= t.contentWidth - t.containerWidth && i > 0)
                        return !t.settings.wheelPropagation
                }
                return !0
            }
            var n = !1;
            t.event.bind(e, "mouseenter", function() {
                n = !0
            }),
            t.event.bind(e, "mouseleave", function() {
                n = !1
            });
            var o = !1;
            t.event.bind(t.ownerDocument, "keydown", function(u) {
                if (!(u.isDefaultPrevented && u.isDefaultPrevented() || u.defaultPrevented)) {
                    var c = a.matches(t.scrollbarX, ":focus") || a.matches(t.scrollbarY, ":focus");
                    if (n || c) {
                        var f = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (f) {
                            if ("IFRAME" === f.tagName)
                                f = f.contentDocument.activeElement;
                            else
                                for (; f.shadowRoot; )
                                    f = f.shadowRoot.activeElement;
                            if (r.isEditable(f))
                                return
                        }
                        var h = 0
                          , d = 0;
                        switch (u.which) {
                        case 37:
                            h = -30;
                            break;
                        case 38:
                            d = 30;
                            break;
                        case 39:
                            h = 30;
                            break;
                        case 40:
                            d = -30;
                            break;
                        case 33:
                            d = 90;
                            break;
                        case 32:
                            d = u.shiftKey ? 90 : -90;
                            break;
                        case 34:
                            d = -90;
                            break;
                        case 35:
                            d = u.ctrlKey ? -t.contentHeight : -t.containerHeight;
                            break;
                        case 36:
                            d = u.ctrlKey ? e.scrollTop : t.containerHeight;
                            break;
                        default:
                            return
                        }
                        l(e, "top", e.scrollTop - d),
                        l(e, "left", e.scrollLeft + h),
                        s(e),
                        o = i(h, d),
                        o && u.preventDefault()
                    }
                }
            })
        }
        var r = e("../../lib/helper")
          , a = e("../../lib/dom")
          , o = e("../instances")
          , s = e("../update-geometry")
          , l = e("../update-scroll");
        t.exports = function(e) {
            var t = o.get(e);
            n(e, t)
        }
    }
    , {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13: [function(e, t, i) {
        "use strict";
        function n(e, t) {
            function i(i, n) {
                var r = e.scrollTop;
                if (0 === i) {
                    if (!t.scrollbarYActive)
                        return !1;
                    if (0 === r && n > 0 || r >= t.contentHeight - t.containerHeight && 0 > n)
                        return !t.settings.wheelPropagation
                }
                var a = e.scrollLeft;
                if (0 === n) {
                    if (!t.scrollbarXActive)
                        return !1;
                    if (0 === a && 0 > i || a >= t.contentWidth - t.containerWidth && i > 0)
                        return !t.settings.wheelPropagation
                }
                return !0
            }
            function n(e) {
                var t = e.deltaX
                  , i = -1 * e.deltaY;
                return "undefined" != typeof t && "undefined" != typeof i || (t = -1 * e.wheelDeltaX / 6,
                i = e.wheelDeltaY / 6),
                e.deltaMode && 1 === e.deltaMode && (t *= 10,
                i *= 10),
                t !== t && i !== i && (t = 0,
                i = e.wheelDelta),
                [t, i]
            }
            function r(t, i) {
                var n = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                if (n) {
                    if ("TEXTAREA" !== n.tagName && !window.getComputedStyle(n).overflow.match(/(scroll|auto)/))
                        return !1;
                    var r = n.scrollHeight - n.clientHeight;
                    if (r > 0 && !(0 === n.scrollTop && i > 0 || n.scrollTop === r && 0 > i))
                        return !0;
                    var a = n.scrollLeft - n.clientWidth;
                    if (a > 0 && !(0 === n.scrollLeft && 0 > t || n.scrollLeft === a && t > 0))
                        return !0
                }
                return !1
            }
            function s(s) {
                var u = n(s)
                  , c = u[0]
                  , f = u[1];
                r(c, f) || (l = !1,
                t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (f ? o(e, "top", e.scrollTop - f * t.settings.wheelSpeed) : o(e, "top", e.scrollTop + c * t.settings.wheelSpeed),
                l = !0) : t.scrollbarXActive && !t.scrollbarYActive && (c ? o(e, "left", e.scrollLeft + c * t.settings.wheelSpeed) : o(e, "left", e.scrollLeft - f * t.settings.wheelSpeed),
                l = !0) : (o(e, "top", e.scrollTop - f * t.settings.wheelSpeed),
                o(e, "left", e.scrollLeft + c * t.settings.wheelSpeed)),
                a(e),
                l = l || i(c, f),
                l && (s.stopPropagation(),
                s.preventDefault()))
            }
            var l = !1;
            "undefined" != typeof window.onwheel ? t.event.bind(e, "wheel", s) : "undefined" != typeof window.onmousewheel && t.event.bind(e, "mousewheel", s)
        }
        var r = e("../instances")
          , a = e("../update-geometry")
          , o = e("../update-scroll");
        t.exports = function(e) {
            var t = r.get(e);
            n(e, t)
        }
    }
    , {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    14: [function(e, t, i) {
        "use strict";
        function n(e, t) {
            t.event.bind(e, "scroll", function() {
                a(e)
            })
        }
        var r = e("../instances")
          , a = e("../update-geometry");
        t.exports = function(e) {
            var t = r.get(e);
            n(e, t)
        }
    }
    , {
        "../instances": 18,
        "../update-geometry": 19
    }],
    15: [function(e, t, i) {
        "use strict";
        function n(e, t) {
            function i() {
                var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
            }
            function n() {
                u || (u = setInterval(function() {
                    return a.get(e) ? (s(e, "top", e.scrollTop + c.top),
                    s(e, "left", e.scrollLeft + c.left),
                    void o(e)) : void clearInterval(u)
                }, 50))
            }
            function l() {
                u && (clearInterval(u),
                u = null ),
                r.stopScrolling(e)
            }
            var u = null
              , c = {
                top: 0,
                left: 0
            }
              , f = !1;
            t.event.bind(t.ownerDocument, "selectionchange", function() {
                e.contains(i()) ? f = !0 : (f = !1,
                l())
            }),
            t.event.bind(window, "mouseup", function() {
                f && (f = !1,
                l())
            }),
            t.event.bind(window, "mousemove", function(t) {
                if (f) {
                    var i = {
                        x: t.pageX,
                        y: t.pageY
                    }
                      , a = {
                        left: e.offsetLeft,
                        right: e.offsetLeft + e.offsetWidth,
                        top: e.offsetTop,
                        bottom: e.offsetTop + e.offsetHeight
                    };
                    i.x < a.left + 3 ? (c.left = -5,
                    r.startScrolling(e, "x")) : i.x > a.right - 3 ? (c.left = 5,
                    r.startScrolling(e, "x")) : c.left = 0,
                    i.y < a.top + 3 ? (a.top + 3 - i.y < 5 ? c.top = -5 : c.top = -20,
                    r.startScrolling(e, "y")) : i.y > a.bottom - 3 ? (i.y - a.bottom + 3 < 5 ? c.top = 5 : c.top = 20,
                    r.startScrolling(e, "y")) : c.top = 0,
                    0 === c.top && 0 === c.left ? l() : n()
                }
            })
        }
        var r = e("../../lib/helper")
          , a = e("../instances")
          , o = e("../update-geometry")
          , s = e("../update-scroll");
        t.exports = function(e) {
            var t = a.get(e);
            n(e, t)
        }
    }
    , {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    16: [function(e, t, i) {
        "use strict";
        function n(e, t, i, n) {
            function r(i, n) {
                var r = e.scrollTop
                  , a = e.scrollLeft
                  , o = Math.abs(i)
                  , s = Math.abs(n);
                if (s > o) {
                    if (0 > n && r === t.contentHeight - t.containerHeight || n > 0 && 0 === r)
                        return !t.settings.swipePropagation
                } else if (o > s && (0 > i && a === t.contentWidth - t.containerWidth || i > 0 && 0 === a))
                    return !t.settings.swipePropagation;
                return !0
            }
            function l(t, i) {
                s(e, "top", e.scrollTop - i),
                s(e, "left", e.scrollLeft - t),
                o(e)
            }
            function u() {
                w = !0
            }
            function c() {
                w = !1
            }
            function f(e) {
                return e.targetTouches ? e.targetTouches[0] : e
            }
            function h(e) {
                return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
            }
            function d(e) {
                if (h(e)) {
                    x = !0;
                    var t = f(e);
                    m.pageX = t.pageX,
                    m.pageY = t.pageY,
                    v = (new Date).getTime(),
                    null !== b && clearInterval(b),
                    e.stopPropagation()
                }
            }
            function p(e) {
                if (!x && t.settings.swipePropagation && d(e),
                !w && x && h(e)) {
                    var i = f(e)
                      , n = {
                        pageX: i.pageX,
                        pageY: i.pageY
                    }
                      , a = n.pageX - m.pageX
                      , o = n.pageY - m.pageY;
                    l(a, o),
                    m = n;
                    var s = (new Date).getTime()
                      , u = s - v;
                    u > 0 && (y.x = a / u,
                    y.y = o / u,
                    v = s),
                    r(a, o) && (e.stopPropagation(),
                    e.preventDefault())
                }
            }
            function g() {
                !w && x && (x = !1,
                clearInterval(b),
                b = setInterval(function() {
                    return a.get(e) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (l(30 * y.x, 30 * y.y),
                    y.x *= .8,
                    void (y.y *= .8)) : void clearInterval(b)
                }, 10))
            }
            var m = {}
              , v = 0
              , y = {}
              , b = null
              , w = !1
              , x = !1;
            i && (t.event.bind(window, "touchstart", u),
            t.event.bind(window, "touchend", c),
            t.event.bind(e, "touchstart", d),
            t.event.bind(e, "touchmove", p),
            t.event.bind(e, "touchend", g)),
            n && (window.PointerEvent ? (t.event.bind(window, "pointerdown", u),
            t.event.bind(window, "pointerup", c),
            t.event.bind(e, "pointerdown", d),
            t.event.bind(e, "pointermove", p),
            t.event.bind(e, "pointerup", g)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", u),
            t.event.bind(window, "MSPointerUp", c),
            t.event.bind(e, "MSPointerDown", d),
            t.event.bind(e, "MSPointerMove", p),
            t.event.bind(e, "MSPointerUp", g)))
        }
        var r = e("../../lib/helper")
          , a = e("../instances")
          , o = e("../update-geometry")
          , s = e("../update-scroll");
        t.exports = function(e) {
            if (r.env.supportsTouch || r.env.supportsIePointer) {
                var t = a.get(e);
                n(e, t, r.env.supportsTouch, r.env.supportsIePointer)
            }
        }
    }
    , {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    17: [function(e, t, i) {
        "use strict";
        var n = e("../lib/helper")
          , r = e("../lib/class")
          , a = e("./instances")
          , o = e("./update-geometry")
          , s = {
            "click-rail": e("./handler/click-rail"),
            "drag-scrollbar": e("./handler/drag-scrollbar"),
            keyboard: e("./handler/keyboard"),
            wheel: e("./handler/mouse-wheel"),
            touch: e("./handler/touch"),
            selection: e("./handler/selection")
        }
          , l = e("./handler/native-scroll");
        t.exports = function(e, t) {
            t = "object" == typeof t ? t : {},
            r.add(e, "ps-container");
            var i = a.add(e);
            i.settings = n.extend(i.settings, t),
            r.add(e, "ps-theme-" + i.settings.theme),
            i.settings.handlers.forEach(function(t) {
                s[t](e)
            }),
            l(e),
            o(e)
        }
    }
    , {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function(e, t, i) {
        "use strict";
        function n(e) {
            function t() {
                l.add(e, "ps-focus")
            }
            function i() {
                l.remove(e, "ps-focus")
            }
            var n = this;
            n.settings = s.clone(u),
            n.containerWidth = null ,
            n.containerHeight = null ,
            n.contentWidth = null ,
            n.contentHeight = null ,
            n.isRtl = "rtl" === c.css(e, "direction"),
            n.isNegativeScroll = function() {
                var t = e.scrollLeft
                  , i = null ;
                return e.scrollLeft = -1,
                i = e.scrollLeft < 0,
                e.scrollLeft = t,
                i
            }(),
            n.negativeScrollAdjustment = n.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0,
            n.event = new f,
            n.ownerDocument = e.ownerDocument || document,
            n.scrollbarXRail = c.appendTo(c.e("div", "ps-scrollbar-x-rail"), e),
            n.scrollbarX = c.appendTo(c.e("div", "ps-scrollbar-x"), n.scrollbarXRail),
            n.scrollbarX.setAttribute("tabindex", 0),
            n.event.bind(n.scrollbarX, "focus", t),
            n.event.bind(n.scrollbarX, "blur", i),
            n.scrollbarXActive = null ,
            n.scrollbarXWidth = null ,
            n.scrollbarXLeft = null ,
            n.scrollbarXBottom = s.toInt(c.css(n.scrollbarXRail, "bottom")),
            n.isScrollbarXUsingBottom = n.scrollbarXBottom === n.scrollbarXBottom,
            n.scrollbarXTop = n.isScrollbarXUsingBottom ? null : s.toInt(c.css(n.scrollbarXRail, "top")),
            n.railBorderXWidth = s.toInt(c.css(n.scrollbarXRail, "borderLeftWidth")) + s.toInt(c.css(n.scrollbarXRail, "borderRightWidth")),
            c.css(n.scrollbarXRail, "display", "block"),
            n.railXMarginWidth = s.toInt(c.css(n.scrollbarXRail, "marginLeft")) + s.toInt(c.css(n.scrollbarXRail, "marginRight")),
            c.css(n.scrollbarXRail, "display", ""),
            n.railXWidth = null ,
            n.railXRatio = null ,
            n.scrollbarYRail = c.appendTo(c.e("div", "ps-scrollbar-y-rail"), e),
            n.scrollbarY = c.appendTo(c.e("div", "ps-scrollbar-y"), n.scrollbarYRail),
            n.scrollbarY.setAttribute("tabindex", 0),
            n.event.bind(n.scrollbarY, "focus", t),
            n.event.bind(n.scrollbarY, "blur", i),
            n.scrollbarYActive = null ,
            n.scrollbarYHeight = null ,
            n.scrollbarYTop = null ,
            n.scrollbarYRight = s.toInt(c.css(n.scrollbarYRail, "right")),
            n.isScrollbarYUsingRight = n.scrollbarYRight === n.scrollbarYRight,
            n.scrollbarYLeft = n.isScrollbarYUsingRight ? null : s.toInt(c.css(n.scrollbarYRail, "left")),
            n.scrollbarYOuterWidth = n.isRtl ? s.outerWidth(n.scrollbarY) : null ,
            n.railBorderYWidth = s.toInt(c.css(n.scrollbarYRail, "borderTopWidth")) + s.toInt(c.css(n.scrollbarYRail, "borderBottomWidth")),
            c.css(n.scrollbarYRail, "display", "block"),
            n.railYMarginHeight = s.toInt(c.css(n.scrollbarYRail, "marginTop")) + s.toInt(c.css(n.scrollbarYRail, "marginBottom")),
            c.css(n.scrollbarYRail, "display", ""),
            n.railYHeight = null ,
            n.railYRatio = null
        }
        function r(e) {
            return e.getAttribute("data-ps-id")
        }
        function a(e, t) {
            e.setAttribute("data-ps-id", t)
        }
        function o(e) {
            e.removeAttribute("data-ps-id")
        }
        var s = e("../lib/helper")
          , l = e("../lib/class")
          , u = e("./default-setting")
          , c = e("../lib/dom")
          , f = e("../lib/event-manager")
          , h = e("../lib/guid")
          , d = {};
        i.add = function(e) {
            var t = h();
            return a(e, t),
            d[t] = new n(e),
            d[t]
        }
        ,
        i.remove = function(e) {
            delete d[r(e)],
            o(e)
        }
        ,
        i.get = function(e) {
            return d[r(e)]
        }
    }
    , {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function(e, t, i) {
        "use strict";
        function n(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)),
            e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)),
            t
        }
        function r(e, t) {
            var i = {
                width: t.railXWidth
            };
            t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : i.left = e.scrollLeft,
            t.isScrollbarXUsingBottom ? i.bottom = t.scrollbarXBottom - e.scrollTop : i.top = t.scrollbarXTop + e.scrollTop,
            s.css(t.scrollbarXRail, i);
            var n = {
                top: e.scrollTop,
                height: t.railYHeight
            };
            t.isScrollbarYUsingRight ? t.isRtl ? n.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : n.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? n.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : n.left = t.scrollbarYLeft + e.scrollLeft,
            s.css(t.scrollbarYRail, n),
            s.css(t.scrollbarX, {
                left: t.scrollbarXLeft,
                width: t.scrollbarXWidth - t.railBorderXWidth
            }),
            s.css(t.scrollbarY, {
                top: t.scrollbarYTop,
                height: t.scrollbarYHeight - t.railBorderYWidth
            })
        }
        var a = e("../lib/helper")
          , o = e("../lib/class")
          , s = e("../lib/dom")
          , l = e("./instances")
          , u = e("./update-scroll");
        t.exports = function(e) {
            var t = l.get(e);
            t.containerWidth = e.clientWidth,
            t.containerHeight = e.clientHeight,
            t.contentWidth = e.scrollWidth,
            t.contentHeight = e.scrollHeight;
            var i;
            e.contains(t.scrollbarXRail) || (i = s.queryChildren(e, ".ps-scrollbar-x-rail"),
            i.length > 0 && i.forEach(function(e) {
                s.remove(e)
            }),
            s.appendTo(t.scrollbarXRail, e)),
            e.contains(t.scrollbarYRail) || (i = s.queryChildren(e, ".ps-scrollbar-y-rail"),
            i.length > 0 && i.forEach(function(e) {
                s.remove(e)
            }),
            s.appendTo(t.scrollbarYRail, e)),
            !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0,
            t.railXWidth = t.containerWidth - t.railXMarginWidth,
            t.railXRatio = t.containerWidth / t.railXWidth,
            t.scrollbarXWidth = n(t, a.toInt(t.railXWidth * t.containerWidth / t.contentWidth)),
            t.scrollbarXLeft = a.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1,
            !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0,
            t.railYHeight = t.containerHeight - t.railYMarginHeight,
            t.railYRatio = t.containerHeight / t.railYHeight,
            t.scrollbarYHeight = n(t, a.toInt(t.railYHeight * t.containerHeight / t.contentHeight)),
            t.scrollbarYTop = a.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1,
            t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
            t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
            r(e, t),
            t.scrollbarXActive ? o.add(e, "ps-active-x") : (o.remove(e, "ps-active-x"),
            t.scrollbarXWidth = 0,
            t.scrollbarXLeft = 0,
            u(e, "left", 0)),
            t.scrollbarYActive ? o.add(e, "ps-active-y") : (o.remove(e, "ps-active-y"),
            t.scrollbarYHeight = 0,
            t.scrollbarYTop = 0,
            u(e, "top", 0))
        }
    }
    , {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20
    }],
    20: [function(e, t, i) {
        "use strict";
        var n, r, a = e("./instances"), o = document.createEvent("Event"), s = document.createEvent("Event"), l = document.createEvent("Event"), u = document.createEvent("Event"), c = document.createEvent("Event"), f = document.createEvent("Event"), h = document.createEvent("Event"), d = document.createEvent("Event"), p = document.createEvent("Event"), g = document.createEvent("Event");
        o.initEvent("ps-scroll-up", !0, !0),
        s.initEvent("ps-scroll-down", !0, !0),
        l.initEvent("ps-scroll-left", !0, !0),
        u.initEvent("ps-scroll-right", !0, !0),
        c.initEvent("ps-scroll-y", !0, !0),
        f.initEvent("ps-scroll-x", !0, !0),
        h.initEvent("ps-x-reach-start", !0, !0),
        d.initEvent("ps-x-reach-end", !0, !0),
        p.initEvent("ps-y-reach-start", !0, !0),
        g.initEvent("ps-y-reach-end", !0, !0),
        t.exports = function(e, t, i) {
            if ("undefined" == typeof e)
                throw "You must provide an element to the update-scroll function";
            if ("undefined" == typeof t)
                throw "You must provide an axis to the update-scroll function";
            if ("undefined" == typeof i)
                throw "You must provide a value to the update-scroll function";
            "top" === t && 0 >= i && (e.scrollTop = i = 0,
            e.dispatchEvent(p)),
            "left" === t && 0 >= i && (e.scrollLeft = i = 0,
            e.dispatchEvent(h));
            var m = a.get(e);
            "top" === t && i >= m.contentHeight - m.containerHeight && (i = m.contentHeight - m.containerHeight,
            i - e.scrollTop <= 1 ? i = e.scrollTop : e.scrollTop = i,
            e.dispatchEvent(g)),
            "left" === t && i >= m.contentWidth - m.containerWidth && (i = m.contentWidth - m.containerWidth,
            i - e.scrollLeft <= 1 ? i = e.scrollLeft : e.scrollLeft = i,
            e.dispatchEvent(d)),
            n || (n = e.scrollTop),
            r || (r = e.scrollLeft),
            "top" === t && n > i && e.dispatchEvent(o),
            "top" === t && i > n && e.dispatchEvent(s),
            "left" === t && r > i && e.dispatchEvent(l),
            "left" === t && i > r && e.dispatchEvent(u),
            "top" === t && (e.scrollTop = n = i,
            e.dispatchEvent(c)),
            "left" === t && (e.scrollLeft = r = i,
            e.dispatchEvent(f))
        }
    }
    , {
        "./instances": 18
    }],
    21: [function(e, t, i) {
        "use strict";
        var n = e("../lib/helper")
          , r = e("../lib/dom")
          , a = e("./instances")
          , o = e("./update-geometry")
          , s = e("./update-scroll");
        t.exports = function(e) {
            var t = a.get(e);
            t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0,
            r.css(t.scrollbarXRail, "display", "block"),
            r.css(t.scrollbarYRail, "display", "block"),
            t.railXMarginWidth = n.toInt(r.css(t.scrollbarXRail, "marginLeft")) + n.toInt(r.css(t.scrollbarXRail, "marginRight")),
            t.railYMarginHeight = n.toInt(r.css(t.scrollbarYRail, "marginTop")) + n.toInt(r.css(t.scrollbarYRail, "marginBottom")),
            r.css(t.scrollbarXRail, "display", "none"),
            r.css(t.scrollbarYRail, "display", "none"),
            o(e),
            s(e, "top", e.scrollTop),
            s(e, "left", e.scrollLeft),
            r.css(t.scrollbarXRail, "display", ""),
            r.css(t.scrollbarYRail, "display", ""))
        }
    }
    , {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20
    }]
}, {}, [1]),
$(function() {
    $(".arrow-r").on("click", function() {
        $(".arrow-r").not(this).find(".fa-angle-down").removeClass("rotate-element"),
        $(this).find(".fa-angle-down").toggleClass("rotate-element")
    })
}),
function(e) {
    var t = !1
      , i = {
        data: [],
        placeholder: "",
        secondaryPlaceholder: ""
    };
    e(document).ready(function() {
        e(document).on("click", ".chip .close", function(t) {
            var i = e(this).closest(".chips");
            i.data("initialized") || e(this).closest(".chip").remove()
        })
    }),
    e.fn.material_chip = function(n) {
        var r = this;
        return this.$el = e(this),
        this.$document = e(document),
        this.SELS = {
            CHIPS: ".chips",
            CHIP: ".chip",
            INPUT: "input",
            DELETE: ".fa",
            SELECTED_CHIP: ".selected"
        },
        "data" === n ? this.$el.data("chips") : "options" === n ? this.$el.data("options") : (this.$el.data("options", e.extend({}, i, n)),
        this.init = function() {
            var t = 0;
            r.$el.each(function() {
                var i = e(this);
                if (!i.data("initialized")) {
                    var n = i.data("options");
                    (!n.data || !n.data instanceof Array) && (n.data = []),
                    i.data("chips", n.data),
                    i.data("index", t),
                    i.data("initialized", !0),
                    i.hasClass(r.SELS.CHIPS) || i.addClass("chips"),
                    r.chips(i),
                    t++
                }
            })
        }
        ,
        this.handleEvents = function() {
            var t = r.SELS;
            r.$document.on("click", t.CHIPS, function(i) {
                e(i.target).find(t.INPUT).focus()
            }),
            r.$document.on("click", t.CHIP, function(i) {
                e(t.CHIP).removeClass("selected"),
                e(this).toggleClass("selected")
            }),
            r.$document.on("keydown", function(i) {
                if (!e(i.target).is("input, textarea")) {
                    var s, n = r.$document.find(t.CHIP + t.SELECTED_CHIP), a = n.closest(t.CHIPS), o = n.siblings(t.CHIP).length;
                    if (n.length)
                        if (8 === i.which || 46 === i.which) {
                            i.preventDefault();
                            var l = a.data("index");
                            s = n.index(),
                            r.deleteChip(l, s, a);
                            var u = null ;
                            o > s + 1 ? u = s : (s === o || s + 1 === o) && (u = o - 1),
                            0 > u && (u = null ),
                            null !== u && r.selectChip(l, u, a),
                            o || a.find("input").focus()
                        } else if (37 === i.which) {
                            if (s = n.index() - 1,
                            0 > s)
                                return;
                            e(t.CHIP).removeClass("selected"),
                            r.selectChip(a.data("index"), s, a)
                        } else if (39 === i.which) {
                            if (s = n.index() + 1,
                            e(t.CHIP).removeClass("selected"),
                            s > o)
                                return void a.find("input").focus();
                            r.selectChip(a.data("index"), s, a)
                        }
                }
            }),
            r.$document.on("focusin", t.CHIPS + " " + t.INPUT, function(i) {
                e(i.target).closest(t.CHIPS).addClass("focus"),
                e(t.CHIP).removeClass("selected")
            }),
            r.$document.on("focusout", t.CHIPS + " " + t.INPUT, function(i) {
                e(i.target).closest(t.CHIPS).removeClass("focus")
            }),
            r.$document.on("keydown", t.CHIPS + " " + t.INPUT, function(i) {
                var n = e(i.target)
                  , a = n.closest(t.CHIPS)
                  , o = a.data("index")
                  , s = a.children(t.CHIP).length;
                return 13 === i.which ? (i.preventDefault(),
                r.addChip(o, {
                    tag: n.val()
                }, a),
                void n.val("")) : 8 !== i.keyCode && 37 !== i.keyCode || "" !== n.val() || !s ? void 0 : (r.selectChip(o, s - 1, a),
                void n.blur())
            }),
            r.$document.on("click", t.CHIPS + " " + t.DELETE, function(i) {
                var n = e(i.target)
                  , a = n.closest(t.CHIPS)
                  , o = n.closest(t.CHIP);
                i.stopPropagation(),
                r.deleteChip(a.data("index"), o.index(), a),
                a.find("input").focus()
            })
        }
        ,
        this.chips = function(e) {
            var t = "";
            e.data("options");
            e.data("chips").forEach(function(e) {
                t += r.renderChip(e)
            }),
            t += '<input class="input" placeholder="">',
            e.html(t),
            r.setPlaceholder(e)
        }
        ,
        this.renderChip = function(e) {
            if (e.tag) {
                var t = '<div class="chip">' + e.tag;
                return e.image && (t += ' <img src="' + e.image + '"> '),
                t += '<i class="close fa fa-times"></i>',
                t += "</div>"
            }
        }
        ,
        this.setPlaceholder = function(e) {
            var t = e.data("options");
            e.data("chips").length && t.placeholder ? e.find("input").prop("placeholder", t.placeholder) : !e.data("chips").length && t.secondaryPlaceholder && e.find("input").prop("placeholder", t.secondaryPlaceholder)
        }
        ,
        this.isValid = function(e, t) {
            for (var i = e.data("chips"), n = !1, r = 0; r < i.length; r++)
                if (i[r].tag === t.tag)
                    return void (n = !0);
            return "" !== t.tag && !n
        }
        ,
        this.addChip = function(t, i, n) {
            if (r.isValid(n, i)) {
                var o = (n.data("options"),
                r.renderChip(i));
                n.data("chips").push(i),
                e(o).insertBefore(n.find("input")),
                n.trigger("chip.add", i),
                r.setPlaceholder(n)
            }
        }
        ,
        this.deleteChip = function(e, t, i) {
            var n = i.data("chips")[t];
            i.find(".chip").eq(t).remove(),
            i.data("chips").splice(t, 1),
            i.trigger("chip.delete", n),
            r.setPlaceholder(i)
        }
        ,
        this.selectChip = function(e, t, i) {
            var n = i.find(".chip").eq(t);
            n && !1 === n.hasClass("selected") && (n.addClass("selected"),
            i.trigger("chip.select", i.data("chips")[t]))
        }
        ,
        this.getChipsElement = function(e, t) {
            return t.eq(e)
        }
        ,
        this.init(),
        void (t || (this.handleEvents(),
        t = !0)))
    }
}(jQuery);
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}
  , Prism = function() {
    var e = /\blang(?:uage)?-(\w+)\b/i
      , t = 0
      , i = _self.Prism = {
        util: {
            encode: function(e) {
                return e instanceof n ? new n(e.type,i.util.encode(e.content),e.alias) : "Array" === i.util.type(e) ? e.map(i.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            },
            type: function(e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++t
                }),
                e.__id
            },
            clone: function(e) {
                var t = i.util.type(e);
                switch (t) {
                case "Object":
                    var n = {};
                    for (var r in e)
                        e.hasOwnProperty(r) && (n[r] = i.util.clone(e[r]));
                    return n;
                case "Array":
                    return e.map && e.map(function(e) {
                        return i.util.clone(e)
                    })
                }
                return e
            }
        },
        languages: {
            extend: function(e, t) {
                var n = i.util.clone(i.languages[e]);
                for (var r in t)
                    n[r] = t[r];
                return n
            },
            insertBefore: function(e, t, n, r) {
                r = r || i.languages;
                var a = r[e];
                if (2 == arguments.length) {
                    n = arguments[1];
                    for (var o in n)
                        n.hasOwnProperty(o) && (a[o] = n[o]);
                    return a
                }
                var s = {};
                for (var l in a)
                    if (a.hasOwnProperty(l)) {
                        if (l == t)
                            for (var o in n)
                                n.hasOwnProperty(o) && (s[o] = n[o]);
                        s[l] = a[l]
                    }
                return i.languages.DFS(i.languages, function(t, i) {
                    i === r[e] && t != e && (this[t] = s)
                }),
                r[e] = s
            },
            DFS: function(e, t, n, r) {
                r = r || {};
                for (var a in e)
                    e.hasOwnProperty(a) && (t.call(e, a, e[a], n || a),
                    "Object" !== i.util.type(e[a]) || r[i.util.objId(e[a])] ? "Array" !== i.util.type(e[a]) || r[i.util.objId(e[a])] || (r[i.util.objId(e[a])] = !0,
                    i.languages.DFS(e[a], t, a, r)) : (r[i.util.objId(e[a])] = !0,
                    i.languages.DFS(e[a], t, null , r)))
            }
        },
        plugins: {},
        highlightAll: function(e, t) {
            var n = {
                callback: t,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            i.hooks.run("before-highlightall", n);
            for (var r, a = n.elements || document.querySelectorAll(n.selector), o = 0; r = a[o++]; )
                i.highlightElement(r, e === !0, n.callback)
        },
        highlightElement: function(t, n, r) {
            for (var a, o, s = t; s && !e.test(s.className); )
                s = s.parentNode;
            s && (a = (s.className.match(e) || [, ""])[1],
            o = i.languages[a]),
            t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + a,
            s = t.parentNode,
            /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + a);
            var l = t.textContent
              , u = {
                element: t,
                language: a,
                grammar: o,
                code: l
            };
            if (!l || !o)
                return void i.hooks.run("complete", u);
            if (i.hooks.run("before-highlight", u),
            n && _self.Worker) {
                var c = new Worker(i.filename);
                c.onmessage = function(e) {
                    u.highlightedCode = e.data,
                    i.hooks.run("before-insert", u),
                    u.element.innerHTML = u.highlightedCode,
                    r && r.call(u.element),
                    i.hooks.run("after-highlight", u),
                    i.hooks.run("complete", u)
                }
                ,
                c.postMessage(JSON.stringify({
                    language: u.language,
                    code: u.code,
                    immediateClose: !0
                }))
            } else
                u.highlightedCode = i.highlight(u.code, u.grammar, u.language),
                i.hooks.run("before-insert", u),
                u.element.innerHTML = u.highlightedCode,
                r && r.call(t),
                i.hooks.run("after-highlight", u),
                i.hooks.run("complete", u)
        },
        highlight: function(e, t, r) {
            var a = i.tokenize(e, t);
            return n.stringify(i.util.encode(a), r)
        },
        tokenize: function(e, t) {
            var n = i.Token
              , r = [e]
              , a = t.rest;
            if (a) {
                for (var o in a)
                    t[o] = a[o];
                delete t.rest
            }
            e: for (var o in t)
                if (t.hasOwnProperty(o) && t[o]) {
                    var s = t[o];
                    s = "Array" === i.util.type(s) ? s : [s];
                    for (var l = 0; l < s.length; ++l) {
                        var u = s[l]
                          , c = u.inside
                          , f = !!u.lookbehind
                          , h = !!u.greedy
                          , d = 0
                          , p = u.alias;
                        u = u.pattern || u;
                        for (var g = 0; g < r.length; g++) {
                            var m = r[g];
                            if (r.length > e.length)
                                break e;
                            if (!(m instanceof n)) {
                                u.lastIndex = 0;
                                var v = u.exec(m)
                                  , y = 1;
                                if (!v && h && g != r.length - 1) {
                                    var b = r[g + 1].matchedStr || r[g + 1]
                                      , w = m + b;
                                    if (g < r.length - 2 && (w += r[g + 2].matchedStr || r[g + 2]),
                                    u.lastIndex = 0,
                                    v = u.exec(w),
                                    !v)
                                        continue;var x = v.index + (f ? v[1].length : 0);
                                    if (x >= m.length)
                                        continue;var C = v.index + v[0].length
                                      , T = m.length + b.length;
                                    if (y = 3,
                                    T >= C) {
                                        if (r[g + 1].greedy)
                                            continue;y = 2,
                                        w = w.slice(0, T)
                                    }
                                    m = w
                                }
                                if (v) {
                                    f && (d = v[1].length);
                                    var x = v.index + d
                                      , v = v[0].slice(d)
                                      , C = x + v.length
                                      , k = m.slice(0, x)
                                      , S = m.slice(C)
                                      , E = [g, y];
                                    k && E.push(k);
                                    var A = new n(o,c ? i.tokenize(v, c) : v,p,v,h);
                                    E.push(A),
                                    S && E.push(S),
                                    Array.prototype.splice.apply(r, E)
                                }
                            }
                        }
                    }
                }
            return r
        },
        hooks: {
            all: {},
            add: function(e, t) {
                var n = i.hooks.all;
                n[e] = n[e] || [],
                n[e].push(t)
            },
            run: function(e, t) {
                var n = i.hooks.all[e];
                if (n && n.length)
                    for (var r, a = 0; r = n[a++]; )
                        r(t)
            }
        }
    }
      , n = i.Token = function(e, t, i, n, r) {
        this.type = e,
        this.content = t,
        this.alias = i,
        this.matchedStr = n || null ,
        this.greedy = !!r
    }
    ;
    if (n.stringify = function(e, t, r) {
        if ("string" == typeof e)
            return e;
        if ("Array" === i.util.type(e))
            return e.map(function(i) {
                return n.stringify(i, t, e)
            }).join("");
        var a = {
            type: e.type,
            content: n.stringify(e.content, t, r),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: t,
            parent: r
        };
        if ("comment" == a.type && (a.attributes.spellcheck = "true"),
        e.alias) {
            var o = "Array" === i.util.type(e.alias) ? e.alias : [e.alias];
            Array.prototype.push.apply(a.classes, o)
        }
        i.hooks.run("wrap", a);
        var s = "";
        for (var l in a.attributes)
            s += (s ? " " : "") + l + '="' + (a.attributes[l] || "") + '"';
        return "<" + a.tag + ' class="' + a.classes.join(" ") + '" ' + s + ">" + a.content + "</" + a.tag + ">"
    }
    ,
    !_self.document)
        return _self.addEventListener ? (_self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data)
              , n = t.language
              , r = t.code
              , a = t.immediateClose;
            _self.postMessage(i.highlight(r, i.languages[n], n)),
            a && _self.close()
        }, !1),
        _self.Prism) : _self.Prism;
    var r = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return r && (i.filename = r.src,
    document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", i.highlightAll)),
    _self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism),
"undefined" != typeof global && (global.Prism = Prism),
Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?[\w\W]+?\?>/,
    doctype: /<!DOCTYPE[\w\W]+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
                inside: {
                    punctuation: /[=>"']/
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
},
Prism.hooks.add("wrap", function(e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}),
Prism.languages.xml = Prism.languages.markup,
Prism.languages.html = Prism.languages.markup,
Prism.languages.mathml = Prism.languages.markup,
Prism.languages.svg = Prism.languages.markup,
Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
},
Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css),
Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}),
Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)),
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    string: {
        pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /(\.|\\)/
        }
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    "boolean": /\b(true|false)\b/,
    "function": /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
},
Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
}),
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    }
}),
Prism.languages.insertBefore("javascript", "class-name", {
    "template-string": {
        pattern: /`(?:\\\\|\\?[^\\])*?`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}),
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}),
Prism.languages.js = Prism.languages.javascript,
!function() {
    self.Prism && Prism.hooks.add("after-highlight", function(e) {
        var t = e.element.parentNode;
        if (t && /pre/i.test(t.nodeName) && -1 !== t.className.indexOf("code-toolbar")) {
            var i = document.createElement("div");
            if (i.setAttribute("class", "toolbar"),
            window.ZeroClipboard) {
                var n = document.createElement("a");
                n.innerHTML = "Copy";
                var r = new ZeroClipboard(n);
                r.on("ready", function(e) {
                    r.on("copy", function(e) {
                        var t = e.target.parentNode.parentNode.getElementsByTagName("code")[0];
                        e.clipboardData.setData("text/plain", t.textContent || t.innerText)
                    }),
                    r.on("aftercopy", function(e) {
                        e.target.parentNode.parentNode.getElementsByTagName("code")[0].focus()
                    })
                }),
                i.appendChild(n)
            }
            t.appendChild(i)
        }
    })
}(),
!function(e, t) {
    "use strict";
    var i, n, r, a = e, o = a.document, s = a.navigator, l = a.setTimeout, u = a.clearTimeout, c = a.setInterval, f = a.clearInterval, h = a.getComputedStyle, d = a.encodeURIComponent, p = a.ActiveXObject, g = a.Error, m = a.Number.parseInt || a.parseInt, v = a.Number.parseFloat || a.parseFloat, y = a.Number.isNaN || a.isNaN, b = a.Date.now, w = a.Object.keys, x = a.Object.defineProperty, C = a.Object.prototype.hasOwnProperty, T = a.Array.prototype.slice, k = function() {
        var e = function(e) {
            return e
        }
        ;
        if ("function" == typeof a.wrap && "function" == typeof a.unwrap)
            try {
                var t = o.createElement("div")
                  , i = a.unwrap(t);
                1 === t.nodeType && i && 1 === i.nodeType && (e = a.unwrap)
            } catch (n) {}
        return e
    }(), S = function(e) {
        return T.call(e, 0)
    }
    , E = function() {
        var e, i, n, r, a, o, s = S(arguments), l = s[0] || {};
        for (e = 1,
        i = s.length; i > e; e++)
            if (null != (n = s[e]))
                for (r in n)
                    C.call(n, r) && (a = l[r],
                    o = n[r],
                    l !== o && o !== t && (l[r] = o));
        return l
    }
    , A = function(e) {
        var t, i, n, r;
        if ("object" != typeof e || null == e || "number" == typeof e.nodeType)
            t = e;
        else if ("number" == typeof e.length)
            for (t = [],
            i = 0,
            n = e.length; n > i; i++)
                C.call(e, i) && (t[i] = A(e[i]));
        else {
            t = {};
            for (r in e)
                C.call(e, r) && (t[r] = A(e[r]))
        }
        return t
    }
    , _ = function(e, t) {
        for (var i = {}, n = 0, r = t.length; r > n; n++)
            t[n]in e && (i[t[n]] = e[t[n]]);
        return i
    }
    , I = function(e, t) {
        var i = {};
        for (var n in e)
            -1 === t.indexOf(n) && (i[n] = e[n]);
        return i
    }
    , P = function(e) {
        if (e)
            for (var t in e)
                C.call(e, t) && delete e[t];
        return e
    }
    , D = function(e, t) {
        if (e && 1 === e.nodeType && e.ownerDocument && t && (1 === t.nodeType && t.ownerDocument && t.ownerDocument === e.ownerDocument || 9 === t.nodeType && !t.ownerDocument && t === e.ownerDocument))
            do {
                if (e === t)
                    return !0;
                e = e.parentNode
            } while (e);return !1
    }
    , O = function(e) {
        var t;
        return "string" == typeof e && e && (t = e.split("#")[0].split("?")[0],
        t = e.slice(0, e.lastIndexOf("/") + 1)),
        t
    }
    , L = function(e) {
        var t, i;
        return "string" == typeof e && e && (i = e.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),
        i && i[1] ? t = i[1] : (i = e.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/),
        i && i[1] && (t = i[1]))),
        t
    }
    , F = function() {
        var e, t;
        try {
            throw new g
        } catch (i) {
            t = i
        }
        return t && (e = t.sourceURL || t.fileName || L(t.stack)),
        e
    }
    , N = function() {
        var e, i, n;
        if (o.currentScript && (e = o.currentScript.src))
            return e;
        if (i = o.getElementsByTagName("script"),
        1 === i.length)
            return i[0].src || t;
        if ("readyState"in i[0])
            for (n = i.length; n--; )
                if ("interactive" === i[n].readyState && (e = i[n].src))
                    return e;
        return "loading" === o.readyState && (e = i[i.length - 1].src) ? e : (e = F()) ? e : t
    }
    , M = function() {
        var e, i, n, r = o.getElementsByTagName("script");
        for (e = r.length; e--; ) {
            if (!(n = r[e].src)) {
                i = null ;
                break
            }
            if (n = O(n),
            null == i)
                i = n;
            else if (i !== n) {
                i = null ;
                break
            }
        }
        return i || t
    }
    , R = function() {
        var e = O(N()) || M() || "";
        return e + "ZeroClipboard.swf"
    }
    , W = function() {
        var e = /win(dows|[\s]?(nt|me|ce|xp|vista|[\d]+))/i;
        return !!s && (e.test(s.appVersion || "") || e.test(s.platform || "") || -1 !== (s.userAgent || "").indexOf("Windows"))
    }
    , H = function() {
        return null == e.opener && (!!e.top && e != e.top || !!e.parent && e != e.parent)
    }(), j = {
        bridge: null ,
        version: "0.0.0",
        pluginType: "unknown",
        disabled: null ,
        outdated: null ,
        sandboxed: null ,
        unavailable: null ,
        degraded: null ,
        deactivated: null ,
        overdue: null ,
        ready: null
    }, z = "11.0.0", V = {}, B = {}, q = null , Y = 0, X = 0, $ = {
        ready: "Flash communication is established",
        error: {
            "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.",
            "flash-outdated": "Flash is too outdated to support ZeroClipboard",
            "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible",
            "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript",
            "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript",
            "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.",
            "flash-overdue": "Flash communication was established but NOT within the acceptable time limit",
            "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number",
            "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard",
            "config-mismatch": "ZeroClipboard configuration does not match Flash's reality",
            "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity"
        }
    }, U = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"], Q = ["flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"], G = new RegExp("^flash-(" + Q.map(function(e) {
        return e.replace(/^flash-/, "")
    }).join("|") + ")$"), Z = new RegExp("^flash-(" + Q.slice(1).map(function(e) {
        return e.replace(/^flash-/, "")
    }).join("|") + ")$"), K = {
        swfPath: R(),
        trustedDomains: e.location.host ? [e.location.host] : [],
        cacheBust: !0,
        forceEnhancedClipboard: !1,
        flashLoadTimeout: 3e4,
        autoActivate: !0,
        bubbleEvents: !0,
        fixLineEndings: !0,
        containerId: "global-zeroclipboard-html-bridge",
        containerClass: "global-zeroclipboard-container",
        swfObjectId: "global-zeroclipboard-flash-bridge",
        hoverClass: "zeroclipboard-is-hover",
        activeClass: "zeroclipboard-is-active",
        forceHandCursor: !1,
        title: null ,
        zIndex: 999999999
    }, J = function(e) {
        if ("object" == typeof e && null !== e)
            for (var t in e)
                if (C.call(e, t))
                    if (/^(?:forceHandCursor|title|zIndex|bubbleEvents|fixLineEndings)$/.test(t))
                        K[t] = e[t];
                    else if (null == j.bridge)
                        if ("containerId" === t || "swfObjectId" === t) {
                            if (!pe(e[t]))
                                throw new Error("The specified `" + t + "` value is not valid as an HTML4 Element ID");
                            K[t] = e[t]
                        } else
                            K[t] = e[t];
        return "string" == typeof e && e ? C.call(K, e) ? K[e] : void 0 : A(K)
    }
    , ee = function() {
        return $e(),
        {
            browser: _(s, ["userAgent", "platform", "appName", "appVersion"]),
            flash: I(j, ["bridge"]),
            zeroclipboard: {
                version: Qe.version,
                config: Qe.config()
            }
        }
    }
    , te = function() {
        return !!(j.disabled || j.outdated || j.sandboxed || j.unavailable || j.degraded || j.deactivated)
    }
    , ie = function(e, n) {
        var r, a, o, s = {};
        if ("string" == typeof e && e)
            o = e.toLowerCase().split(/\s+/);
        else if ("object" == typeof e && e && "undefined" == typeof n)
            for (r in e)
                C.call(e, r) && "string" == typeof r && r && "function" == typeof e[r] && Qe.on(r, e[r]);
        if (o && o.length) {
            for (r = 0,
            a = o.length; a > r; r++)
                e = o[r].replace(/^on/, ""),
                s[e] = !0,
                V[e] || (V[e] = []),
                V[e].push(n);
            if (s.ready && j.ready && Qe.emit({
                type: "ready"
            }),
            s.error) {
                for (r = 0,
                a = Q.length; a > r; r++)
                    if (j[Q[r].replace(/^flash-/, "")] === !0) {
                        Qe.emit({
                            type: "error",
                            name: Q[r]
                        });
                        break
                    }
                i !== t && Qe.version !== i && Qe.emit({
                    type: "error",
                    name: "version-mismatch",
                    jsVersion: Qe.version,
                    swfVersion: i
                })
            }
        }
        return Qe
    }
    , ne = function(e, t) {
        var i, n, r, a, o;
        if (0 === arguments.length)
            a = w(V);
        else if ("string" == typeof e && e)
            a = e.split(/\s+/);
        else if ("object" == typeof e && e && "undefined" == typeof t)
            for (i in e)
                C.call(e, i) && "string" == typeof i && i && "function" == typeof e[i] && Qe.off(i, e[i]);
        if (a && a.length)
            for (i = 0,
            n = a.length; n > i; i++)
                if (e = a[i].toLowerCase().replace(/^on/, ""),
                o = V[e],
                o && o.length)
                    if (t)
                        for (r = o.indexOf(t); -1 !== r; )
                            o.splice(r, 1),
                            r = o.indexOf(t, r);
                    else
                        o.length = 0;
        return Qe
    }
    , re = function(e) {
        var t;
        return t = "string" == typeof e && e ? A(V[e]) || null : A(V)
    }
    , ae = function(e) {
        var t, i, n;
        return e = ge(e),
        e && !Ce(e) ? "ready" === e.type && j.overdue === !0 ? Qe.emit({
            type: "error",
            name: "flash-overdue"
        }) : (t = E({}, e),
        we.call(this, t),
        "copy" === e.type && (n = Pe(B),
        i = n.data,
        q = n.formatMap),
        i) : void 0
    }
    , oe = function() {
        var e = j.sandboxed;
        if ($e(),
        "boolean" != typeof j.ready && (j.ready = !1),
        j.sandboxed !== e && j.sandboxed === !0)
            j.ready = !1,
            Qe.emit({
                type: "error",
                name: "flash-sandboxed"
            });
        else if (!Qe.isFlashUnusable() && null === j.bridge) {
            var t = K.flashLoadTimeout;
            "number" == typeof t && t >= 0 && (Y = l(function() {
                "boolean" != typeof j.deactivated && (j.deactivated = !0),
                j.deactivated === !0 && Qe.emit({
                    type: "error",
                    name: "flash-deactivated"
                })
            }, t)),
            j.overdue = !1,
            _e()
        }
    }
    , se = function() {
        Qe.clearData(),
        Qe.blur(),
        Qe.emit("destroy"),
        Ie(),
        Qe.off()
    }
    , le = function(e, t) {
        var i;
        if ("object" == typeof e && e && "undefined" == typeof t)
            i = e,
            Qe.clearData();
        else {
            if ("string" != typeof e || !e)
                return;
            i = {},
            i[e] = t
        }
        for (var n in i)
            "string" == typeof n && n && C.call(i, n) && "string" == typeof i[n] && i[n] && (B[n] = Xe(i[n]))
    }
    , ue = function(e) {
        "undefined" == typeof e ? (P(B),
        q = null ) : "string" == typeof e && C.call(B, e) && delete B[e]
    }
    , ce = function(e) {
        return "undefined" == typeof e ? A(B) : "string" == typeof e && C.call(B, e) ? B[e] : void 0
    }
    , fe = function(e) {
        if (e && 1 === e.nodeType) {
            n && (We(n, K.activeClass),
            n !== e && We(n, K.hoverClass)),
            n = e,
            Re(e, K.hoverClass);
            var t = e.getAttribute("title") || K.title;
            if ("string" == typeof t && t) {
                var i = Ae(j.bridge);
                i && i.setAttribute("title", t)
            }
            var r = K.forceHandCursor === !0 || "pointer" === He(e, "cursor");
            qe(r),
            Be()
        }
    }
    , he = function() {
        var e = Ae(j.bridge);
        e && (e.removeAttribute("title"),
        e.style.left = "0px",
        e.style.top = "-9999px",
        e.style.width = "1px",
        e.style.height = "1px"),
        n && (We(n, K.hoverClass),
        We(n, K.activeClass),
        n = null )
    }
    , de = function() {
        return n || null
    }
    , pe = function(e) {
        return "string" == typeof e && e && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(e)
    }
    , ge = function(e) {
        var t;
        if ("string" == typeof e && e ? (t = e,
        e = {}) : "object" == typeof e && e && "string" == typeof e.type && e.type && (t = e.type),
        t) {
            t = t.toLowerCase(),
            !e.target && (/^(copy|aftercopy|_click)$/.test(t) || "error" === t && "clipboard-error" === e.name) && (e.target = r),
            E(e, {
                type: t,
                target: e.target || n || null ,
                relatedTarget: e.relatedTarget || null ,
                currentTarget: j && j.bridge || null ,
                timeStamp: e.timeStamp || b() || null
            });
            var i = $[e.type];
            return "error" === e.type && e.name && i && (i = i[e.name]),
            i && (e.message = i),
            "ready" === e.type && E(e, {
                target: null ,
                version: j.version
            }),
            "error" === e.type && (G.test(e.name) && E(e, {
                target: null ,
                minimumVersion: z
            }),
            Z.test(e.name) && E(e, {
                version: j.version
            })),
            "copy" === e.type && (e.clipboardData = {
                setData: Qe.setData,
                clearData: Qe.clearData
            }),
            "aftercopy" === e.type && (e = De(e, q)),
            e.target && !e.relatedTarget && (e.relatedTarget = me(e.target)),
            ve(e)
        }
    }
    , me = function(e) {
        var t = e && e.getAttribute && e.getAttribute("data-clipboard-target");
        return t ? o.getElementById(t) : null
    }
    , ve = function(e) {
        if (e && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type)) {
            var i = e.target
              , n = "_mouseover" === e.type && e.relatedTarget ? e.relatedTarget : t
              , r = "_mouseout" === e.type && e.relatedTarget ? e.relatedTarget : t
              , s = je(i)
              , l = a.screenLeft || a.screenX || 0
              , u = a.screenTop || a.screenY || 0
              , c = o.body.scrollLeft + o.documentElement.scrollLeft
              , f = o.body.scrollTop + o.documentElement.scrollTop
              , h = s.left + ("number" == typeof e._stageX ? e._stageX : 0)
              , d = s.top + ("number" == typeof e._stageY ? e._stageY : 0)
              , p = h - c
              , g = d - f
              , m = l + p
              , v = u + g
              , y = "number" == typeof e.movementX ? e.movementX : 0
              , b = "number" == typeof e.movementY ? e.movementY : 0;
            delete e._stageX,
            delete e._stageY,
            E(e, {
                srcElement: i,
                fromElement: n,
                toElement: r,
                screenX: m,
                screenY: v,
                pageX: h,
                pageY: d,
                clientX: p,
                clientY: g,
                x: p,
                y: g,
                movementX: y,
                movementY: b,
                offsetX: 0,
                offsetY: 0,
                layerX: 0,
                layerY: 0
            })
        }
        return e
    }
    , ye = function(e) {
        var t = e && "string" == typeof e.type && e.type || "";
        return !/^(?:(?:before)?copy|destroy)$/.test(t)
    }
    , be = function(e, t, i, n) {
        n ? l(function() {
            e.apply(t, i)
        }, 0) : e.apply(t, i)
    }
    , we = function(e) {
        if ("object" == typeof e && e && e.type) {
            var t = ye(e)
              , i = V["*"] || []
              , n = V[e.type] || []
              , r = i.concat(n);
            if (r && r.length) {
                var o, s, l, u, c, f = this;
                for (o = 0,
                s = r.length; s > o; o++)
                    l = r[o],
                    u = f,
                    "string" == typeof l && "function" == typeof a[l] && (l = a[l]),
                    "object" == typeof l && l && "function" == typeof l.handleEvent && (u = l,
                    l = l.handleEvent),
                    "function" == typeof l && (c = E({}, e),
                    be(l, u, [c], t))
            }
            return this
        }
    }
    , xe = function(e) {
        var t = null ;
        return (H === !1 || e && "error" === e.type && e.name && -1 !== U.indexOf(e.name)) && (t = !1),
        t
    }
    , Ce = function(e) {
        var t = e.target || n || null
          , a = "swf" === e._source;
        switch (delete e._source,
        e.type) {
        case "error":
            var o = "flash-sandboxed" === e.name || xe(e);
            "boolean" == typeof o && (j.sandboxed = o),
            -1 !== Q.indexOf(e.name) ? E(j, {
                disabled: "flash-disabled" === e.name,
                outdated: "flash-outdated" === e.name,
                unavailable: "flash-unavailable" === e.name,
                degraded: "flash-degraded" === e.name,
                deactivated: "flash-deactivated" === e.name,
                overdue: "flash-overdue" === e.name,
                ready: !1
            }) : "version-mismatch" === e.name && (i = e.swfVersion,
            E(j, {
                disabled: !1,
                outdated: !1,
                unavailable: !1,
                degraded: !1,
                deactivated: !1,
                overdue: !1,
                ready: !1
            })),
            Ve();
            break;
        case "ready":
            i = e.swfVersion;
            var s = j.deactivated === !0;
            E(j, {
                disabled: !1,
                outdated: !1,
                sandboxed: !1,
                unavailable: !1,
                degraded: !1,
                deactivated: !1,
                overdue: s,
                ready: !s
            }),
            Ve();
            break;
        case "beforecopy":
            r = t;
            break;
        case "copy":
            var l, u, c = e.relatedTarget;
            !B["text/html"] && !B["text/plain"] && c && (u = c.value || c.outerHTML || c.innerHTML) && (l = c.value || c.textContent || c.innerText) ? (e.clipboardData.clearData(),
            e.clipboardData.setData("text/plain", l),
            u !== l && e.clipboardData.setData("text/html", u)) : !B["text/plain"] && e.target && (l = e.target.getAttribute("data-clipboard-text")) && (e.clipboardData.clearData(),
            e.clipboardData.setData("text/plain", l));
            break;
        case "aftercopy":
            Te(e),
            Qe.clearData(),
            t && t !== Me() && t.focus && t.focus();
            break;
        case "_mouseover":
            Qe.focus(t),
            K.bubbleEvents === !0 && a && (t && t !== e.relatedTarget && !D(e.relatedTarget, t) && ke(E({}, e, {
                type: "mouseenter",
                bubbles: !1,
                cancelable: !1
            })),
            ke(E({}, e, {
                type: "mouseover"
            })));
            break;
        case "_mouseout":
            Qe.blur(),
            K.bubbleEvents === !0 && a && (t && t !== e.relatedTarget && !D(e.relatedTarget, t) && ke(E({}, e, {
                type: "mouseleave",
                bubbles: !1,
                cancelable: !1
            })),
            ke(E({}, e, {
                type: "mouseout"
            })));
            break;
        case "_mousedown":
            Re(t, K.activeClass),
            K.bubbleEvents === !0 && a && ke(E({}, e, {
                type: e.type.slice(1)
            }));
            break;
        case "_mouseup":
            We(t, K.activeClass),
            K.bubbleEvents === !0 && a && ke(E({}, e, {
                type: e.type.slice(1)
            }));
            break;
        case "_click":
            r = null ,
            K.bubbleEvents === !0 && a && ke(E({}, e, {
                type: e.type.slice(1)
            }));
            break;
        case "_mousemove":
            K.bubbleEvents === !0 && a && ke(E({}, e, {
                type: e.type.slice(1)
            }))
        }
        return /^_(?:click|mouse(?:over|out|down|up|move))$/.test(e.type) ? !0 : void 0
    }
    , Te = function(e) {
        if (e.errors && e.errors.length > 0) {
            var t = A(e);
            E(t, {
                type: "error",
                name: "clipboard-error"
            }),
            delete t.success,
            l(function() {
                Qe.emit(t)
            }, 0)
        }
    }
    , ke = function(e) {
        if (e && "string" == typeof e.type && e) {
            var t, i = e.target || null , n = i && i.ownerDocument || o, r = {
                view: n.defaultView || a,
                canBubble: !0,
                cancelable: !0,
                detail: "click" === e.type ? 1 : 0,
                button: "number" == typeof e.which ? e.which - 1 : "number" == typeof e.button ? e.button : n.createEvent ? 0 : 1
            }, s = E(r, e);
            i && n.createEvent && i.dispatchEvent && (s = [s.type, s.canBubble, s.cancelable, s.view, s.detail, s.screenX, s.screenY, s.clientX, s.clientY, s.ctrlKey, s.altKey, s.shiftKey, s.metaKey, s.button, s.relatedTarget],
            t = n.createEvent("MouseEvents"),
            t.initMouseEvent && (t.initMouseEvent.apply(t, s),
            t._source = "js",
            i.dispatchEvent(t)))
        }
    }
    , Se = function() {
        var e = K.flashLoadTimeout;
        if ("number" == typeof e && e >= 0) {
            var t = Math.min(1e3, e / 10)
              , i = K.swfObjectId + "_fallbackContent";
            X = c(function() {
                var e = o.getElementById(i);
                ze(e) && (Ve(),
                j.deactivated = null ,
                Qe.emit({
                    type: "error",
                    name: "swf-not-found"
                }))
            }, t)
        }
    }
    , Ee = function() {
        var e = o.createElement("div");
        return e.id = K.containerId,
        e.className = K.containerClass,
        e.style.position = "absolute",
        e.style.left = "0px",
        e.style.top = "-9999px",
        e.style.width = "1px",
        e.style.height = "1px",
        e.style.zIndex = "" + Ye(K.zIndex),
        e
    }
    , Ae = function(e) {
        for (var t = e && e.parentNode; t && "OBJECT" === t.nodeName && t.parentNode; )
            t = t.parentNode;
        return t || null
    }
    , _e = function() {
        var e, t = j.bridge, i = Ae(t);
        if (!t) {
            var n = Ne(a.location.host, K)
              , r = "never" === n ? "none" : "all"
              , s = Le(E({
                jsVersion: Qe.version
            }, K))
              , l = K.swfPath + Oe(K.swfPath, K);
            i = Ee();
            var u = o.createElement("div");
            i.appendChild(u),
            o.body.appendChild(i);
            var c = o.createElement("div")
              , f = "activex" === j.pluginType;
            c.innerHTML = '<object id="' + K.swfObjectId + '" name="' + K.swfObjectId + '" width="100%" height="100%" ' + (f ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + l + '"') + ">" + (f ? '<param name="movie" value="' + l + '"/>' : "") + '<param name="allowScriptAccess" value="' + n + '"/><param name="allowNetworking" value="' + r + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + s + '"/><div id="' + K.swfObjectId + '_fallbackContent">&nbsp;</div></object>',
            t = c.firstChild,
            c = null ,
            k(t).ZeroClipboard = Qe,
            i.replaceChild(t, u),
            Se()
        }
        return t || (t = o[K.swfObjectId],
        t && (e = t.length) && (t = t[e - 1]),
        !t && i && (t = i.firstChild)),
        j.bridge = t || null ,
        t
    }
    , Ie = function() {
        var e = j.bridge;
        if (e) {
            var n = Ae(e);
            n && ("activex" === j.pluginType && "readyState"in e ? (e.style.display = "none",
            function r() {
                if (4 === e.readyState) {
                    for (var t in e)
                        "function" == typeof e[t] && (e[t] = null );
                    e.parentNode && e.parentNode.removeChild(e),
                    n.parentNode && n.parentNode.removeChild(n)
                } else
                    l(r, 10)
            }()) : (e.parentNode && e.parentNode.removeChild(e),
            n.parentNode && n.parentNode.removeChild(n))),
            Ve(),
            j.ready = null ,
            j.bridge = null ,
            j.deactivated = null ,
            i = t
        }
    }
    , Pe = function(e) {
        var t = {}
          , i = {};
        if ("object" == typeof e && e) {
            for (var n in e)
                if (n && C.call(e, n) && "string" == typeof e[n] && e[n])
                    switch (n.toLowerCase()) {
                    case "text/plain":
                    case "text":
                    case "air:text":
                    case "flash:text":
                        t.text = e[n],
                        i.text = n;
                        break;
                    case "text/html":
                    case "html":
                    case "air:html":
                    case "flash:html":
                        t.html = e[n],
                        i.html = n;
                        break;
                    case "application/rtf":
                    case "text/rtf":
                    case "rtf":
                    case "richtext":
                    case "air:rtf":
                    case "flash:rtf":
                        t.rtf = e[n],
                        i.rtf = n
                    }
            return {
                data: t,
                formatMap: i
            }
        }
    }
    , De = function(e, t) {
        if ("object" != typeof e || !e || "object" != typeof t || !t)
            return e;
        var i = {};
        for (var n in e)
            if (C.call(e, n))
                if ("errors" === n) {
                    i[n] = e[n] ? e[n].slice() : [];
                    for (var r = 0, a = i[n].length; a > r; r++)
                        i[n][r].format = t[i[n][r].format]
                } else if ("success" !== n && "data" !== n)
                    i[n] = e[n];
                else {
                    i[n] = {};
                    var o = e[n];
                    for (var s in o)
                        s && C.call(o, s) && C.call(t, s) && (i[n][t[s]] = o[s])
                }
        return i
    }
    , Oe = function(e, t) {
        var i = null == t || t && t.cacheBust === !0;
        return i ? (-1 === e.indexOf("?") ? "?" : "&") + "noCache=" + b() : ""
    }
    , Le = function(e) {
        var t, i, n, r, o = "", s = [];
        if (e.trustedDomains && ("string" == typeof e.trustedDomains ? r = [e.trustedDomains] : "object" == typeof e.trustedDomains && "length"in e.trustedDomains && (r = e.trustedDomains)),
        r && r.length)
            for (t = 0,
            i = r.length; i > t; t++)
                if (C.call(r, t) && r[t] && "string" == typeof r[t]) {
                    if (n = Fe(r[t]),
                    !n)
                        continue;if ("*" === n) {
                        s.length = 0,
                        s.push(n);
                        break
                    }
                    s.push.apply(s, [n, "//" + n, a.location.protocol + "//" + n])
                }
        return s.length && (o += "trustedOrigins=" + d(s.join(","))),
        e.forceEnhancedClipboard === !0 && (o += (o ? "&" : "") + "forceEnhancedClipboard=true"),
        "string" == typeof e.swfObjectId && e.swfObjectId && (o += (o ? "&" : "") + "swfObjectId=" + d(e.swfObjectId)),
        "string" == typeof e.jsVersion && e.jsVersion && (o += (o ? "&" : "") + "jsVersion=" + d(e.jsVersion)),
        o
    }
    , Fe = function(e) {
        if (null == e || "" === e)
            return null ;
        if (e = e.replace(/^\s+|\s+$/g, ""),
        "" === e)
            return null ;
        var t = e.indexOf("//");
        e = -1 === t ? e : e.slice(t + 2);
        var i = e.indexOf("/");
        return e = -1 === i ? e : -1 === t || 0 === i ? null : e.slice(0, i),
        e && ".swf" === e.slice(-4).toLowerCase() ? null : e || null
    }
    , Ne = function() {
        var e = function(e) {
            var t, i, n, r = [];
            if ("string" == typeof e && (e = [e]),
            "object" != typeof e || !e || "number" != typeof e.length)
                return r;
            for (t = 0,
            i = e.length; i > t; t++)
                if (C.call(e, t) && (n = Fe(e[t]))) {
                    if ("*" === n) {
                        r.length = 0,
                        r.push("*");
                        break
                    }
                    -1 === r.indexOf(n) && r.push(n)
                }
            return r
        }
        ;
        return function(t, i) {
            var n = Fe(i.swfPath);
            null === n && (n = t);
            var r = e(i.trustedDomains)
              , a = r.length;
            if (a > 0) {
                if (1 === a && "*" === r[0])
                    return "always";
                if (-1 !== r.indexOf(t))
                    return 1 === a && t === n ? "sameDomain" : "always"
            }
            return "never"
        }
    }(), Me = function() {
        try {
            return o.activeElement
        } catch (e) {
            return null
        }
    }
    , Re = function(e, t) {
        var i, n, r, a = [];
        if ("string" == typeof t && t && (a = t.split(/\s+/)),
        e && 1 === e.nodeType && a.length > 0) {
            for (r = (" " + (e.className || "") + " ").replace(/[\t\r\n\f]/g, " "),
            i = 0,
            n = a.length; n > i; i++)
                -1 === r.indexOf(" " + a[i] + " ") && (r += a[i] + " ");
            r = r.replace(/^\s+|\s+$/g, ""),
            r !== e.className && (e.className = r)
        }
        return e
    }
    , We = function(e, t) {
        var i, n, r, a = [];
        if ("string" == typeof t && t && (a = t.split(/\s+/)),
        e && 1 === e.nodeType && a.length > 0 && e.className) {
            for (r = (" " + e.className + " ").replace(/[\t\r\n\f]/g, " "),
            i = 0,
            n = a.length; n > i; i++)
                r = r.replace(" " + a[i] + " ", " ");
            r = r.replace(/^\s+|\s+$/g, ""),
            r !== e.className && (e.className = r)
        }
        return e
    }
    , He = function(e, t) {
        var i = h(e, null ).getPropertyValue(t);
        return "cursor" !== t || i && "auto" !== i || "A" !== e.nodeName ? i : "pointer"
    }
    , je = function(e) {
        var t = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        };
        if (e.getBoundingClientRect) {
            var i = e.getBoundingClientRect()
              , n = a.pageXOffset
              , r = a.pageYOffset
              , s = o.documentElement.clientLeft || 0
              , l = o.documentElement.clientTop || 0
              , u = 0
              , c = 0;
            if ("relative" === He(o.body, "position")) {
                var f = o.body.getBoundingClientRect()
                  , h = o.documentElement.getBoundingClientRect();
                u = f.left - h.left || 0,
                c = f.top - h.top || 0
            }
            t.left = i.left + n - s - u,
            t.top = i.top + r - l - c,
            t.width = "width"in i ? i.width : i.right - i.left,
            t.height = "height"in i ? i.height : i.bottom - i.top
        }
        return t
    }
    , ze = function(e) {
        if (!e)
            return !1;
        var t = h(e, null );
        if (!t)
            return !1;
        var i = v(t.height) > 0
          , n = v(t.width) > 0
          , r = v(t.top) >= 0
          , a = v(t.left) >= 0
          , o = i && n && r && a
          , s = o ? null : je(e)
          , l = "none" !== t.display && "collapse" !== t.visibility && (o || !!s && (i || s.height > 0) && (n || s.width > 0) && (r || s.top >= 0) && (a || s.left >= 0));
        return l
    }
    , Ve = function() {
        u(Y),
        Y = 0,
        f(X),
        X = 0
    }
    , Be = function() {
        var e;
        if (n && (e = Ae(j.bridge))) {
            var t = je(n);
            E(e.style, {
                width: t.width + "px",
                height: t.height + "px",
                top: t.top + "px",
                left: t.left + "px",
                zIndex: "" + Ye(K.zIndex)
            })
        }
    }
    , qe = function(e) {
        j.ready === !0 && (j.bridge && "function" == typeof j.bridge.setHandCursor ? j.bridge.setHandCursor(e) : j.ready = !1)
    }
    , Ye = function(e) {
        if (/^(?:auto|inherit)$/.test(e))
            return e;
        var t;
        return "number" != typeof e || y(e) ? "string" == typeof e && (t = Ye(m(e, 10))) : t = e,
        "number" == typeof t ? t : "auto"
    }
    , Xe = function(e) {
        var t = /(\r\n|\r|\n)/g;
        return "string" == typeof e && K.fixLineEndings === !0 && (W() ? /((^|[^\r])\n|\r([^\n]|$))/.test(e) && (e = e.replace(t, "\r\n")) : /\r/.test(e) && (e = e.replace(t, "\n"))),
        e
    }
    , $e = function(t) {
        var i, n, r, a = j.sandboxed, o = null ;
        if (t = t === !0,
        H === !1)
            o = !1;
        else {
            try {
                n = e.frameElement || null
            } catch (s) {
                r = {
                    name: s.name,
                    message: s.message
                }
            }
            if (n && 1 === n.nodeType && "IFRAME" === n.nodeName)
                try {
                    o = n.hasAttribute("sandbox")
                } catch (s) {
                    o = null
                }
            else {
                try {
                    i = document.domain || null
                } catch (s) {
                    i = null
                }
                (null === i || r && "SecurityError" === r.name && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(r.message.toLowerCase())) && (o = !0)
            }
        }
        return j.sandboxed = o,
        a === o || t || Ue(p),
        o
    }
    , Ue = function(e) {
        function t(e) {
            var t = e.match(/[\d]+/g);
            return t.length = 3,
            t.join(".")
        }
        function i(e) {
            return !!e && (e = e.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(e) || "chrome.plugin" === e.slice(-13))
        }
        function n(e) {
            e && (l = !0,
            e.version && (f = t(e.version)),
            !f && e.description && (f = t(e.description)),
            e.filename && (c = i(e.filename)))
        }
        var r, a, o, l = !1, u = !1, c = !1, f = "";
        if (s.plugins && s.plugins.length)
            r = s.plugins["Shockwave Flash"],
            n(r),
            s.plugins["Shockwave Flash 2.0"] && (l = !0,
            f = "2.0.0.11");
        else if (s.mimeTypes && s.mimeTypes.length)
            o = s.mimeTypes["application/x-shockwave-flash"],
            r = o && o.enabledPlugin,
            n(r);
        else if ("undefined" != typeof e) {
            u = !0;
            try {
                a = new e("ShockwaveFlash.ShockwaveFlash.7"),
                l = !0,
                f = t(a.GetVariable("$version"))
            } catch (h) {
                try {
                    a = new e("ShockwaveFlash.ShockwaveFlash.6"),
                    l = !0,
                    f = "6.0.21"
                } catch (d) {
                    try {
                        a = new e("ShockwaveFlash.ShockwaveFlash"),
                        l = !0,
                        f = t(a.GetVariable("$version"))
                    } catch (p) {
                        u = !1
                    }
                }
            }
        }
        j.disabled = l !== !0,
        j.outdated = f && v(f) < v(z),
        j.version = f || "0.0.0",
        j.pluginType = c ? "pepper" : u ? "activex" : l ? "netscape" : "unknown"
    }
    ;
    Ue(p),
    $e(!0);
    var Qe = function() {
        return this instanceof Qe ? void ("function" == typeof Qe._createClient && Qe._createClient.apply(this, S(arguments))) : new Qe
    }
    ;
    x(Qe, "version", {
        value: "2.3.0-beta.1",
        writable: !1,
        configurable: !0,
        enumerable: !0
    }),
    Qe.config = function() {
        return J.apply(this, S(arguments))
    }
    ,
    Qe.state = function() {
        return ee.apply(this, S(arguments))
    }
    ,
    Qe.isFlashUnusable = function() {
        return te.apply(this, S(arguments))
    }
    ,
    Qe.on = function() {
        return ie.apply(this, S(arguments))
    }
    ,
    Qe.off = function() {
        return ne.apply(this, S(arguments))
    }
    ,
    Qe.handlers = function() {
        return re.apply(this, S(arguments))
    }
    ,
    Qe.emit = function() {
        return ae.apply(this, S(arguments))
    }
    ,
    Qe.create = function() {
        return oe.apply(this, S(arguments))
    }
    ,
    Qe.destroy = function() {
        return se.apply(this, S(arguments))
    }
    ,
    Qe.setData = function() {
        return le.apply(this, S(arguments))
    }
    ,
    Qe.clearData = function() {
        return ue.apply(this, S(arguments))
    }
    ,
    Qe.getData = function() {
        return ce.apply(this, S(arguments))
    }
    ,
    Qe.focus = Qe.activate = function() {
        return fe.apply(this, S(arguments))
    }
    ,
    Qe.blur = Qe.deactivate = function() {
        return he.apply(this, S(arguments))
    }
    ,
    Qe.activeElement = function() {
        return de.apply(this, S(arguments))
    }
    ;
    var Ge = 0
      , Ze = {}
      , Ke = 0
      , Je = {}
      , et = {};
    E(K, {
        autoActivate: !0
    });
    var tt = function(e) {
        var t = this;
        t.id = "" + Ge++,
        Ze[t.id] = {
            instance: t,
            elements: [],
            handlers: {}
        },
        e && t.clip(e),
        Qe.on("*", function(e) {
            return t.emit(e)
        }),
        Qe.on("destroy", function() {
            t.destroy()
        }),
        Qe.create()
    }
      , it = function(e, n) {
        var r, a, o, s = {}, l = Ze[this.id], u = l && l.handlers;
        if (!l)
            throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
        if ("string" == typeof e && e)
            o = e.toLowerCase().split(/\s+/);
        else if ("object" == typeof e && e && "undefined" == typeof n)
            for (r in e)
                C.call(e, r) && "string" == typeof r && r && "function" == typeof e[r] && this.on(r, e[r]);
        if (o && o.length) {
            for (r = 0,
            a = o.length; a > r; r++)
                e = o[r].replace(/^on/, ""),
                s[e] = !0,
                u[e] || (u[e] = []),
                u[e].push(n);
            if (s.ready && j.ready && this.emit({
                type: "ready",
                client: this
            }),
            s.error) {
                for (r = 0,
                a = Q.length; a > r; r++)
                    if (j[Q[r].replace(/^flash-/, "")]) {
                        this.emit({
                            type: "error",
                            name: Q[r],
                            client: this
                        });
                        break
                    }
                i !== t && Qe.version !== i && this.emit({
                    type: "error",
                    name: "version-mismatch",
                    jsVersion: Qe.version,
                    swfVersion: i
                })
            }
        }
        return this
    }
      , nt = function(e, t) {
        var i, n, r, a, o, s = Ze[this.id], l = s && s.handlers;
        if (!l)
            return this;
        if (0 === arguments.length)
            a = w(l);
        else if ("string" == typeof e && e)
            a = e.split(/\s+/);
        else if ("object" == typeof e && e && "undefined" == typeof t)
            for (i in e)
                C.call(e, i) && "string" == typeof i && i && "function" == typeof e[i] && this.off(i, e[i]);
        if (a && a.length)
            for (i = 0,
            n = a.length; n > i; i++)
                if (e = a[i].toLowerCase().replace(/^on/, ""),
                o = l[e],
                o && o.length)
                    if (t)
                        for (r = o.indexOf(t); -1 !== r; )
                            o.splice(r, 1),
                            r = o.indexOf(t, r);
                    else
                        o.length = 0;
        return this
    }
      , rt = function(e) {
        var t = null
          , i = Ze[this.id] && Ze[this.id].handlers;
        return i && (t = "string" == typeof e && e ? i[e] ? i[e].slice(0) : [] : A(i)),
        t
    }
      , at = function(e) {
        if (ct.call(this, e)) {
            "object" == typeof e && e && "string" == typeof e.type && e.type && (e = E({}, e));
            var t = E({}, ge(e), {
                client: this
            });
            ft.call(this, t)
        }
        return this
    }
      , ot = function(e) {
        if (!Ze[this.id])
            throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
        e = ht(e);
        for (var t = 0; t < e.length; t++)
            if (C.call(e, t) && e[t] && 1 === e[t].nodeType) {
                e[t].zcClippingId ? -1 === Je[e[t].zcClippingId].indexOf(this.id) && Je[e[t].zcClippingId].push(this.id) : (e[t].zcClippingId = "zcClippingId_" + Ke++,
                Je[e[t].zcClippingId] = [this.id],
                K.autoActivate === !0 && dt(e[t]));
                var i = Ze[this.id] && Ze[this.id].elements;
                -1 === i.indexOf(e[t]) && i.push(e[t])
            }
        return this
    }
      , st = function(e) {
        var t = Ze[this.id];
        if (!t)
            return this;
        var i, n = t.elements;
        e = "undefined" == typeof e ? n.slice(0) : ht(e);
        for (var r = e.length; r--; )
            if (C.call(e, r) && e[r] && 1 === e[r].nodeType) {
                for (i = 0; -1 !== (i = n.indexOf(e[r], i)); )
                    n.splice(i, 1);
                var a = Je[e[r].zcClippingId];
                if (a) {
                    for (i = 0; -1 !== (i = a.indexOf(this.id, i)); )
                        a.splice(i, 1);
                    0 === a.length && (K.autoActivate === !0 && pt(e[r]),
                    delete e[r].zcClippingId)
                }
            }
        return this
    }
      , lt = function() {
        var e = Ze[this.id];
        return e && e.elements ? e.elements.slice(0) : []
    }
      , ut = function() {
        Ze[this.id] && (this.unclip(),
        this.off(),
        delete Ze[this.id])
    }
      , ct = function(e) {
        if (!e || !e.type)
            return !1;
        if (e.client && e.client !== this)
            return !1;
        var t = Ze[this.id]
          , i = t && t.elements
          , n = !!i && i.length > 0
          , r = !e.target || n && -1 !== i.indexOf(e.target)
          , a = e.relatedTarget && n && -1 !== i.indexOf(e.relatedTarget)
          , o = e.client && e.client === this;
        return t && (r || a || o) ? !0 : !1
    }
      , ft = function(e) {
        var t = Ze[this.id];
        if ("object" == typeof e && e && e.type && t) {
            var i = ye(e)
              , n = t && t.handlers["*"] || []
              , r = t && t.handlers[e.type] || []
              , o = n.concat(r);
            if (o && o.length) {
                var s, l, u, c, f, h = this;
                for (s = 0,
                l = o.length; l > s; s++)
                    u = o[s],
                    c = h,
                    "string" == typeof u && "function" == typeof a[u] && (u = a[u]),
                    "object" == typeof u && u && "function" == typeof u.handleEvent && (c = u,
                    u = u.handleEvent),
                    "function" == typeof u && (f = E({}, e),
                    be(u, c, [f], i))
            }
        }
    }
      , ht = function(e) {
        return "string" == typeof e && (e = []),
        "number" != typeof e.length ? [e] : e
    }
      , dt = function(e) {
        if (e && 1 === e.nodeType) {
            var t = function(e) {
                (e || (e = a.event)) && ("js" !== e._source && (e.stopImmediatePropagation(),
                e.preventDefault()),
                delete e._source)
            }
              , i = function(i) {
                (i || (i = a.event)) && (t(i),
                Qe.focus(e))
            }
            ;
            e.addEventListener("mouseover", i, !1),
            e.addEventListener("mouseout", t, !1),
            e.addEventListener("mouseenter", t, !1),
            e.addEventListener("mouseleave", t, !1),
            e.addEventListener("mousemove", t, !1),
            et[e.zcClippingId] = {
                mouseover: i,
                mouseout: t,
                mouseenter: t,
                mouseleave: t,
                mousemove: t
            }
        }
    }
      , pt = function(e) {
        if (e && 1 === e.nodeType) {
            var t = et[e.zcClippingId];
            if ("object" == typeof t && t) {
                for (var i, n, r = ["move", "leave", "enter", "out", "over"], a = 0, o = r.length; o > a; a++)
                    i = "mouse" + r[a],
                    n = t[i],
                    "function" == typeof n && e.removeEventListener(i, n, !1);
                delete et[e.zcClippingId]
            }
        }
    }
    ;
    Qe._createClient = function() {
        tt.apply(this, S(arguments))
    }
    ,
    Qe.prototype.on = function() {
        return it.apply(this, S(arguments))
    }
    ,
    Qe.prototype.off = function() {
        return nt.apply(this, S(arguments))
    }
    ,
    Qe.prototype.handlers = function() {
        return rt.apply(this, S(arguments))
    }
    ,
    Qe.prototype.emit = function() {
        return at.apply(this, S(arguments))
    }
    ,
    Qe.prototype.clip = function() {
        return ot.apply(this, S(arguments))
    }
    ,
    Qe.prototype.unclip = function() {
        return st.apply(this, S(arguments))
    }
    ,
    Qe.prototype.elements = function() {
        return lt.apply(this, S(arguments))
    }
    ,
    Qe.prototype.destroy = function() {
        return ut.apply(this, S(arguments))
    }
    ,
    Qe.prototype.setText = function(e) {
        if (!Ze[this.id])
            throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Qe.setData("text/plain", e),
        this
    }
    ,
    Qe.prototype.setHtml = function(e) {
        if (!Ze[this.id])
            throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Qe.setData("text/html", e),
        this
    }
    ,
    Qe.prototype.setRichText = function(e) {
        if (!Ze[this.id])
            throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Qe.setData("application/rtf", e),
        this
    }
    ,
    Qe.prototype.setData = function() {
        if (!Ze[this.id])
            throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance");
        return Qe.setData.apply(this, S(arguments)),
        this
    }
    ,
    Qe.prototype.clearData = function() {
        if (!Ze[this.id])
            throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance");
        return Qe.clearData.apply(this, S(arguments)),
        this
    }
    ,
    Qe.prototype.getData = function() {
        if (!Ze[this.id])
            throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance");
        return Qe.getData.apply(this, S(arguments))
    }
    ,
    "function" == typeof define && define.amd ? define(function() {
        return Qe
    }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Qe : e.ZeroClipboard = Qe
}(function() {
    return this || window
}()),
function(e) {
    e.extend(e.fn, {
        validate: function(t) {
            if (!this.length)
                return void (t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = e.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"),
            i = new e.validator(t,this[0]),
            e.data(this[0], "validator", i),
            i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                i.settings.submitHandler && (i.submitButton = t.target),
                e(t.target).hasClass("cancel") && (i.cancelSubmit = !0),
                void 0 !== e(t.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }),
            this.submit(function(t) {
                function n() {
                    var n;
                    return i.settings.submitHandler ? (i.submitButton && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)),
                    i.settings.submitHandler.call(i, i.currentForm, t),
                    i.submitButton && n.remove(),
                    !1) : !0
                }
                return i.settings.debug && t.preventDefault(),
                i.cancelSubmit ? (i.cancelSubmit = !1,
                n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                !1) : n() : (i.focusInvalid(),
                !1)
            })),
            i)
        },
        valid: function() {
            var t, i;
            return e(this[0]).is("form") ? t = this.validate().form() : (t = !0,
            i = e(this[0].form).validate(),
            this.each(function() {
                t = i.element(this) && t
            })),
            t
        },
        removeAttrs: function(t) {
            var i = {}
              , n = this;
            return e.each(t.split(/\s/), function(e, t) {
                i[t] = n.attr(t),
                n.removeAttr(t)
            }),
            i
        },
        rules: function(t, i) {
            var r, a, o, s, l, u, n = this[0];
            if (t)
                switch (r = e.data(n.form, "validator").settings,
                a = r.rules,
                o = e.validator.staticRules(n),
                t) {
                case "add":
                    e.extend(o, e.validator.normalizeRule(i)),
                    delete o.messages,
                    a[n.name] = o,
                    i.messages && (r.messages[n.name] = e.extend(r.messages[n.name], i.messages));
                    break;
                case "remove":
                    return i ? (u = {},
                    e.each(i.split(/\s/), function(t, i) {
                        u[i] = o[i],
                        delete o[i],
                        "required" === i && e(n).removeAttr("aria-required")
                    }),
                    u) : (delete a[n.name],
                    o)
                }
            return s = e.validator.normalizeRules(e.extend({}, e.validator.classRules(n), e.validator.attributeRules(n), e.validator.dataRules(n), e.validator.staticRules(n)), n),
            s.required && (l = s.required,
            delete s.required,
            s = e.extend({
                required: l
            }, s),
            e(n).attr("aria-required", "true")),
            s.remote && (l = s.remote,
            delete s.remote,
            s = e.extend(s, {
                remote: l
            })),
            s
        }
    }),
    e.extend(e.expr[":"], {
        blank: function(t) {
            return !e.trim("" + e(t).val())
        },
        filled: function(t) {
            return !!e.trim("" + e(t).val())
        },
        unchecked: function(t) {
            return !e(t).prop("checked")
        }
    }),
    e.validator = function(t, i) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t),
        this.currentForm = i,
        this.init()
    }
    ,
    e.validator.format = function(t, i) {
        return 1 === arguments.length ? function() {
            var i = e.makeArray(arguments);
            return i.unshift(t),
            e.validator.format.apply(this, i)
        }
        : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)),
        i.constructor !== Array && (i = [i]),
        e.each(i, function(e, i) {
            t = t.replace(new RegExp("\\{" + e + "\\}","g"), function() {
                return i
            })
        }),
        t)
    }
    ,
    e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e,
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                this.addWrapper(this.errorsFor(e)).hide())
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(e, t) {
                (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastElement) && this.element(e)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(t, i, n) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
            },
            unhighlight: function(t, i, n) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
            }
        },
        setDefaults: function(t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function n(t) {
                    var i = e.data(this[0].form, "validator")
                      , n = "on" + t.type.replace(/^validate/, "")
                      , r = i.settings;
                    r[n] && !this.is(r.ignore) && r[n].call(i, this[0], t)
                }
                this.labelContainer = e(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm),
                this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var i, t = this.groups = {};
                e.each(this.settings.groups, function(i, n) {
                    "string" == typeof n && (n = n.split(/\s/)),
                    e.each(n, function(e, n) {
                        t[n] = i
                    })
                }),
                i = this.settings.rules,
                e.each(i, function(t, n) {
                    i[t] = e.validator.normalizeRule(n)
                }),
                e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", n).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", n),
                this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler),
                e(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
            },
            form: function() {
                return this.checkForm(),
                e.extend(this.submitted, this.errorMap),
                this.invalid = e.extend({}, this.errorMap),
                this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                    this.check(t[e]);
                return this.valid()
            },
            element: function(t) {
                var i = this.clean(t)
                  , n = this.validationTargetFor(i)
                  , r = !0;
                return this.lastElement = n,
                void 0 === n ? delete this.invalid[i.name] : (this.prepareElement(n),
                this.currentElements = e(n),
                r = this.check(n) !== !1,
                r ? delete this.invalid[n.name] : this.invalid[n.name] = !0),
                e(t).attr("aria-invalid", !r),
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                r
            },
            showErrors: function(t) {
                if (t) {
                    e.extend(this.errorMap, t),
                    this.errorList = [];
                    for (var i in t)
                        this.errorList.push({
                            message: t[i],
                            element: this.findByName(i)[0]
                        });
                    this.successList = e.grep(this.successList, function(e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                e.fn.resetForm && e(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null ,
                this.prepareForm(),
                this.hideErrors(),
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var i, t = 0;
                for (i in e)
                    t++;
                return t
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this
                  , i = {};
                return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in i || !t.objectLength(e(this).rules()) ? !1 : (i[this.name] = !0,
                    !0)
                })
            },
            clean: function(t) {
                return e(t)[0]
            },
            errors: function() {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = e([]),
                this.toHide = e([]),
                this.currentElements = e([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(),
                this.toHide = this.errorsFor(e)
            },
            elementValue: function(t) {
                var i, n = e(t), r = n.attr("type");
                return "radio" === r || "checkbox" === r ? e("input[name='" + n.attr("name") + "']:checked").val() : (i = n.val(),
                "string" == typeof i ? i.replace(/\r/g, "") : i)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var o, s, l, i = e(t).rules(), n = e.map(i, function(e, t) {
                    return t
                }).length, r = !1, a = this.elementValue(t);
                for (s in i) {
                    l = {
                        method: s,
                        parameters: i[s]
                    };
                    try {
                        if (o = e.validator.methods[s].call(this, a, t, l.parameters),
                        "dependency-mismatch" === o && 1 === n) {
                            r = !0;
                            continue
                        }
                        if (r = !1,
                        "pending" === o)
                            return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!o)
                            return this.formatAndAdd(t, l),
                            !1
                    } catch (u) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + l.method + "' method.", u),
                        u
                    }
                }
                if (!r)
                    return this.objectLength(i) && this.successList.push(t),
                    !0
            },
            customDataMessage: function(t, i) {
                return e(t).data("msg" + i[0].toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg")
            },
            customMessage: function(e, t) {
                var i = this.settings.messages[e];
                return i && (i.constructor === String ? i : i[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e])
                        return arguments[e];
                return void 0
            },
            defaultMessage: function(t, i) {
                return this.findDefined(this.customMessage(t.name, i), this.customDataMessage(t, i), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i], "<strong>Warning: No message defined for " + t.name + "</strong>")
            },
            formatAndAdd: function(t, i) {
                var n = this.defaultMessage(t, i.method)
                  , r = /\$?\{(\d+)\}/g;
                "function" == typeof n ? n = n.call(this, i.parameters, t) : r.test(n) && (n = e.validator.format(n.replace(r, "{$1}"), i.parameters)),
                this.errorList.push({
                    message: n,
                    element: t,
                    method: i.method
                }),
                this.errorMap[t.name] = n,
                this.submitted[t.name] = n
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))),
                e
            },
            defaultShowErrors: function() {
                var e, t, i;
                for (e = 0; this.errorList[e]; e++)
                    i = this.errorList[e],
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (e = 0; this.successList[e]; e++)
                        this.showLabel(this.successList[e]);
                if (this.settings.unhighlight)
                    for (e = 0,
                    t = this.validElements(); t[e]; e++)
                        this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return e(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(t, i) {
                var n = this.errorsFor(t);
                n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                n.html(i)) : (n = e("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(i || ""),
                this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, e(t)) : n.insertAfter(t))),
                !i && this.settings.success && (n.text(""),
                "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, t)),
                this.toShow = this.toShow.add(n)
            },
            errorsFor: function(t) {
                var i = this.idOrName(t);
                return this.errors().filter(function() {
                    return e(this).attr("for") === i
                })
            },
            idOrName: function(e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]),
                e
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(t) {
                return e(this.currentForm).find("[name='" + t + "']")
            },
            getLength: function(t, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return e("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            },
            depend: function(e, t) {
                return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
            },
            dependTypes: {
                "boolean": function(e) {
                    return e
                },
                string: function(t, i) {
                    return !!e(t, i.form).length
                },
                "function": function(e, t) {
                    return e(t)
                }
            },
            optional: function(t) {
                var i = this.elementValue(t);
                return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++,
                this.pending[e.name] = !0)
            },
            stopRequest: function(t, i) {
                this.pendingRequest--,
                this.pendingRequest < 0 && (this.pendingRequest = 0),
                delete this.pending[t.name],
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(),
                this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(t) {
                return e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null ,
                    valid: !0,
                    message: this.defaultMessage(t, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
        },
        classRules: function(t) {
            var i = {}
              , n = e(t).attr("class");
            return n && e.each(n.split(" "), function() {
                this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
            }),
            i
        },
        attributeRules: function(t) {
            var a, o, i = {}, n = e(t), r = t.getAttribute("type");
            for (a in e.validator.methods)
                "required" === a ? (o = t.getAttribute(a),
                "" === o && (o = !0),
                o = !!o) : o = n.attr(a),
                /min|max/.test(a) && (null === r || /number|range|text/.test(r)) && (o = Number(o)),
                o || 0 === o ? i[a] = o : r === a && "range" !== r && (i[a] = !0);
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength,
            i
        },
        dataRules: function(t) {
            var i, n, r = {}, a = e(t);
            for (i in e.validator.methods)
                n = a.data("rule" + i[0].toUpperCase() + i.substring(1).toLowerCase()),
                void 0 !== n && (r[i] = n);
            return r
        },
        staticRules: function(t) {
            var i = {}
              , n = e.data(t.form, "validator");
            return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}),
            i
        },
        normalizeRules: function(t, i) {
            return e.each(t, function(n, r) {
                if (r === !1)
                    return void delete t[n];
                if (r.param || r.depends) {
                    var a = !0;
                    switch (typeof r.depends) {
                    case "string":
                        a = !!e(r.depends, i.form).length;
                        break;
                    case "function":
                        a = r.depends.call(i, i)
                    }
                    a ? t[n] = void 0 !== r.param ? r.param : !0 : delete t[n]
                }
            }),
            e.each(t, function(n, r) {
                t[n] = e.isFunction(r) ? r(i) : r
            }),
            e.each(["minlength", "maxlength"], function() {
                t[this] && (t[this] = Number(t[this]))
            }),
            e.each(["rangelength", "range"], function() {
                var i;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].split(/[\s,]+/),
                t[this] = [Number(i[0]), Number(i[1])]))
            }),
            e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max],
            delete t.min,
            delete t.max),
            t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength],
            delete t.minlength,
            delete t.maxlength)),
            t
        },
        normalizeRule: function(t) {
            if ("string" == typeof t) {
                var i = {};
                e.each(t.split(/\s/), function() {
                    i[this] = !0
                }),
                t = i
            }
            return t
        },
        addMethod: function(t, i, n) {
            e.validator.methods[t] = i,
            e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t],
            i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function(t, i, n) {
                if (!this.depend(n, i))
                    return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = e(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : e.trim(t).length > 0
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            creditcard: function(e, t) {
                if (this.optional(t))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(e))
                    return !1;
                var a, o, i = 0, n = 0, r = !1;
                if (e = e.replace(/\D/g, ""),
                e.length < 13 || e.length > 19)
                    return !1;
                for (a = e.length - 1; a >= 0; a--)
                    o = e.charAt(a),
                    n = parseInt(o, 10),
                    r && (n *= 2) > 9 && (n -= 9),
                    i += n,
                    r = !r;
                return i % 10 === 0
            },
            minlength: function(t, i, n) {
                var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
                return this.optional(i) || r >= n
            },
            maxlength: function(t, i, n) {
                var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
                return this.optional(i) || n >= r
            },
            rangelength: function(t, i, n) {
                var r = e.isArray(t) ? t.length : this.getLength(e.trim(t), i);
                return this.optional(i) || r >= n[0] && r <= n[1]
            },
            min: function(e, t, i) {
                return this.optional(t) || e >= i
            },
            max: function(e, t, i) {
                return this.optional(t) || i >= e
            },
            range: function(e, t, i) {
                return this.optional(t) || e >= i[0] && e <= i[1]
            },
            equalTo: function(t, i, n) {
                var r = e(n);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    e(i).valid()
                }),
                t === r.val()
            },
            remote: function(t, i, n) {
                if (this.optional(i))
                    return "dependency-mismatch";
                var a, o, r = this.previousValue(i);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                r.originalMessage = this.settings.messages[i.name].remote,
                this.settings.messages[i.name].remote = r.message,
                n = "string" == typeof n && {
                    url: n
                } || n,
                r.old === t ? r.valid : (r.old = t,
                a = this,
                this.startRequest(i),
                o = {},
                o[i.name] = t,
                e.ajax(e.extend(!0, {
                    url: n,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: o,
                    context: a.currentForm,
                    success: function(n) {
                        var s, l, u, o = n === !0 || "true" === n;
                        a.settings.messages[i.name].remote = r.originalMessage,
                        o ? (u = a.formSubmitted,
                        a.prepareElement(i),
                        a.formSubmitted = u,
                        a.successList.push(i),
                        delete a.invalid[i.name],
                        a.showErrors()) : (s = {},
                        l = n || a.defaultMessage(i, "remote"),
                        s[i.name] = r.message = e.isFunction(l) ? l(t) : l,
                        a.invalid[i.name] = !0,
                        a.showErrors(s)),
                        r.valid = o,
                        a.stopRequest(i, o)
                    }
                }, n)),
                "pending")
            }
        }
    }),
    e.format = function() {
        throw "$.format has been deprecated. Please use $.validator.format instead."
    }
}(jQuery),
function(e) {
    var i, t = {};
    e.ajaxPrefilter ? e.ajaxPrefilter(function(e, i, n) {
        var r = e.port;
        "abort" === e.mode && (t[r] && t[r].abort(),
        t[r] = n)
    }) : (i = e.ajax,
    e.ajax = function(n) {
        var r = ("mode"in n ? n : e.ajaxSettings).mode
          , a = ("port"in n ? n : e.ajaxSettings).port;
        return "abort" === r ? (t[a] && t[a].abort(),
        t[a] = i.apply(this, arguments),
        t[a]) : i.apply(this, arguments)
    }
    )
}(jQuery),
function(e) {
    e.extend(e.fn, {
        validateDelegate: function(t, i, n) {
            return this.bind(i, function(i) {
                var r = e(i.target);
                return r.is(t) ? n.apply(r, arguments) : void 0
            })
        }
    })
}(jQuery);

