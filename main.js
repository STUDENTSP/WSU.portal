/*! For license information please see main.js.LICENSE.txt */
(() => {
    var __webpack_modules__ = {
            400: (e, t, n) => {
                "use strict";
                var r = {};
                n.r(r), n.d(r, {
                    afterMain: () => S,
                    afterRead: () => w,
                    afterWrite: () => O,
                    applyStyles: () => P,
                    arrow: () => ee,
                    auto: () => c,
                    basePlacements: () => u,
                    beforeMain: () => E,
                    beforeRead: () => b,
                    beforeWrite: () => T,
                    bottom: () => s,
                    clippingParents: () => d,
                    computeStyles: () => ie,
                    createPopper: () => Pe,
                    createPopperBase: () => Ie,
                    createPopperLite: () => Me,
                    detectOverflow: () => ye,
                    end: () => f,
                    eventListeners: () => se,
                    flip: () => we,
                    hide: () => Se,
                    left: () => l,
                    main: () => x,
                    modifierPhases: () => A,
                    offset: () => Te,
                    placements: () => _,
                    popper: () => g,
                    popperGenerator: () => Ne,
                    popperOffsets: () => Ce,
                    preventOverflow: () => Oe,
                    read: () => y,
                    reference: () => m,
                    right: () => a,
                    start: () => h,
                    top: () => o,
                    variationPlacements: () => v,
                    viewport: () => p,
                    write: () => C
                });
                var i = {};
                n.r(i), n.d(i, {
                    Alert: () => Tt,
                    Button: () => Ot,
                    Carousel: () => rn,
                    Collapse: () => wn,
                    Dropdown: () => Yn,
                    Modal: () => Dr,
                    Offcanvas: () => Ur,
                    Popover: () => bi,
                    ScrollSpy: () => Ii,
                    Tab: () => Ui,
                    Toast: () => ao,
                    Tooltip: () => pi
                });
                var o = "top",
                    s = "bottom",
                    a = "right",
                    l = "left",
                    c = "auto",
                    u = [o, s, a, l],
                    h = "start",
                    f = "end",
                    d = "clippingParents",
                    p = "viewport",
                    g = "popper",
                    m = "reference",
                    v = u.reduce((function(e, t) {
                        return e.concat([t + "-" + h, t + "-" + f])
                    }), []),
                    _ = [].concat(u, [c]).reduce((function(e, t) {
                        return e.concat([t, t + "-" + h, t + "-" + f])
                    }), []),
                    b = "beforeRead",
                    y = "read",
                    w = "afterRead",
                    E = "beforeMain",
                    x = "main",
                    S = "afterMain",
                    T = "beforeWrite",
                    C = "write",
                    O = "afterWrite",
                    A = [b, y, w, E, x, S, T, C, O];

                function k(e) {
                    return e ? (e.nodeName || "").toLowerCase() : null
                }

                function D(e) {
                    if (null == e) return window;
                    if ("[object Window]" !== e.toString()) {
                        var t = e.ownerDocument;
                        return t && t.defaultView || window
                    }
                    return e
                }

                function L(e) {
                    return e instanceof D(e).Element || e instanceof Element
                }

                function N(e) {
                    return e instanceof D(e).HTMLElement || e instanceof HTMLElement
                }

                function I(e) {
                    return "undefined" != typeof ShadowRoot && (e instanceof D(e).ShadowRoot || e instanceof ShadowRoot)
                }
                const P = {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(e) {
                        var t = e.state;
                        Object.keys(t.elements).forEach((function(e) {
                            var n = t.styles[e] || {},
                                r = t.attributes[e] || {},
                                i = t.elements[e];
                            N(i) && k(i) && (Object.assign(i.style, n), Object.keys(r).forEach((function(e) {
                                var t = r[e];
                                !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                            })))
                        }))
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = {
                                popper: {
                                    position: t.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                            function() {
                                Object.keys(t.elements).forEach((function(e) {
                                    var r = t.elements[e],
                                        i = t.attributes[e] || {},
                                        o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                            return e[t] = "", e
                                        }), {});
                                    N(r) && k(r) && (Object.assign(r.style, o), Object.keys(i).forEach((function(e) {
                                        r.removeAttribute(e)
                                    })))
                                }))
                            }
                    },
                    requires: ["computeStyles"]
                };

                function M(e) {
                    return e.split("-")[0]
                }
                var R = Math.max,
                    H = Math.min,
                    q = Math.round;

                function j() {
                    var e = navigator.userAgentData;
                    return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                        return e.brand + "/" + e.version
                    })).join(" ") : navigator.userAgent
                }

                function $() {
                    return !/^((?!chrome|android).)*safari/i.test(j())
                }

                function B(e, t, n) {
                    void 0 === t && (t = !1), void 0 === n && (n = !1);
                    var r = e.getBoundingClientRect(),
                        i = 1,
                        o = 1;
                    t && N(e) && (i = e.offsetWidth > 0 && q(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && q(r.height) / e.offsetHeight || 1);
                    var s = (L(e) ? D(e) : window).visualViewport,
                        a = !$() && n,
                        l = (r.left + (a && s ? s.offsetLeft : 0)) / i,
                        c = (r.top + (a && s ? s.offsetTop : 0)) / o,
                        u = r.width / i,
                        h = r.height / o;
                    return {
                        width: u,
                        height: h,
                        top: c,
                        right: l + u,
                        bottom: c + h,
                        left: l,
                        x: l,
                        y: c
                    }
                }

                function F(e) {
                    var t = B(e),
                        n = e.offsetWidth,
                        r = e.offsetHeight;
                    return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                        x: e.offsetLeft,
                        y: e.offsetTop,
                        width: n,
                        height: r
                    }
                }

                function X(e, t) {
                    var n = t.getRootNode && t.getRootNode();
                    if (e.contains(t)) return !0;
                    if (n && I(n)) {
                        var r = t;
                        do {
                            if (r && e.isSameNode(r)) return !0;
                            r = r.parentNode || r.host
                        } while (r)
                    }
                    return !1
                }

                function W(e) {
                    return D(e).getComputedStyle(e)
                }

                function U(e) {
                    return ["table", "td", "th"].indexOf(k(e)) >= 0
                }

                function Q(e) {
                    return ((L(e) ? e.ownerDocument : e.document) || window.document).documentElement
                }

                function z(e) {
                    return "html" === k(e) ? e : e.assignedSlot || e.parentNode || (I(e) ? e.host : null) || Q(e)
                }

                function Y(e) {
                    return N(e) && "fixed" !== W(e).position ? e.offsetParent : null
                }

                function V(e) {
                    for (var t = D(e), n = Y(e); n && U(n) && "static" === W(n).position;) n = Y(n);
                    return n && ("html" === k(n) || "body" === k(n) && "static" === W(n).position) ? t : n || function(e) {
                        var t = /firefox/i.test(j());
                        if (/Trident/i.test(j()) && N(e) && "fixed" === W(e).position) return null;
                        var n = z(e);
                        for (I(n) && (n = n.host); N(n) && ["html", "body"].indexOf(k(n)) < 0;) {
                            var r = W(n);
                            if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                            n = n.parentNode
                        }
                        return null
                    }(e) || t
                }

                function K(e) {
                    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
                }

                function G(e, t, n) {
                    return R(e, H(t, n))
                }

                function J(e) {
                    return Object.assign({}, {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, e)
                }

                function Z(e, t) {
                    return t.reduce((function(t, n) {
                        return t[n] = e, t
                    }), {})
                }
                const ee = {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t, n = e.state,
                            r = e.name,
                            i = e.options,
                            c = n.elements.arrow,
                            h = n.modifiersData.popperOffsets,
                            f = M(n.placement),
                            d = K(f),
                            p = [l, a].indexOf(f) >= 0 ? "height" : "width";
                        if (c && h) {
                            var g = function(e, t) {
                                    return J("number" != typeof(e = "function" == typeof e ? e(Object.assign({}, t.rects, {
                                        placement: t.placement
                                    })) : e) ? e : Z(e, u))
                                }(i.padding, n),
                                m = F(c),
                                v = "y" === d ? o : l,
                                _ = "y" === d ? s : a,
                                b = n.rects.reference[p] + n.rects.reference[d] - h[d] - n.rects.popper[p],
                                y = h[d] - n.rects.reference[d],
                                w = V(c),
                                E = w ? "y" === d ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
                                x = b / 2 - y / 2,
                                S = g[v],
                                T = E - m[p] - g[_],
                                C = E / 2 - m[p] / 2 + x,
                                O = G(S, C, T),
                                A = d;
                            n.modifiersData[r] = ((t = {})[A] = O, t.centerOffset = O - C, t)
                        }
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = e.options.element,
                            r = void 0 === n ? "[data-popper-arrow]" : n;
                        null != r && ("string" != typeof r || (r = t.elements.popper.querySelector(r))) && X(t.elements.popper, r) && (t.elements.arrow = r)
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                };

                function te(e) {
                    return e.split("-")[1]
                }
                var ne = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

                function re(e) {
                    var t, n = e.popper,
                        r = e.popperRect,
                        i = e.placement,
                        c = e.variation,
                        u = e.offsets,
                        h = e.position,
                        d = e.gpuAcceleration,
                        p = e.adaptive,
                        g = e.roundOffsets,
                        m = e.isFixed,
                        v = u.x,
                        _ = void 0 === v ? 0 : v,
                        b = u.y,
                        y = void 0 === b ? 0 : b,
                        w = "function" == typeof g ? g({
                            x: _,
                            y
                        }) : {
                            x: _,
                            y
                        };
                    _ = w.x, y = w.y;
                    var E = u.hasOwnProperty("x"),
                        x = u.hasOwnProperty("y"),
                        S = l,
                        T = o,
                        C = window;
                    if (p) {
                        var O = V(n),
                            A = "clientHeight",
                            k = "clientWidth";
                        if (O === D(n) && "static" !== W(O = Q(n)).position && "absolute" === h && (A = "scrollHeight", k = "scrollWidth"), i === o || (i === l || i === a) && c === f) T = s, y -= (m && O === C && C.visualViewport ? C.visualViewport.height : O[A]) - r.height, y *= d ? 1 : -1;
                        if (i === l || (i === o || i === s) && c === f) S = a, _ -= (m && O === C && C.visualViewport ? C.visualViewport.width : O[k]) - r.width, _ *= d ? 1 : -1
                    }
                    var L, N = Object.assign({
                            position: h
                        }, p && ne),
                        I = !0 === g ? function(e, t) {
                            var n = e.x,
                                r = e.y,
                                i = t.devicePixelRatio || 1;
                            return {
                                x: q(n * i) / i || 0,
                                y: q(r * i) / i || 0
                            }
                        }({
                            x: _,
                            y
                        }, D(n)) : {
                            x: _,
                            y
                        };
                    return _ = I.x, y = I.y, d ? Object.assign({}, N, ((L = {})[T] = x ? "0" : "", L[S] = E ? "0" : "", L.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + _ + "px, " + y + "px)" : "translate3d(" + _ + "px, " + y + "px, 0)", L)) : Object.assign({}, N, ((t = {})[T] = x ? y + "px" : "", t[S] = E ? _ + "px" : "", t.transform = "", t))
                }
                const ie = {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            r = n.gpuAcceleration,
                            i = void 0 === r || r,
                            o = n.adaptive,
                            s = void 0 === o || o,
                            a = n.roundOffsets,
                            l = void 0 === a || a,
                            c = {
                                placement: M(t.placement),
                                variation: te(t.placement),
                                popper: t.elements.popper,
                                popperRect: t.rects.popper,
                                gpuAcceleration: i,
                                isFixed: "fixed" === t.options.strategy
                            };
                        null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, re(Object.assign({}, c, {
                            offsets: t.modifiersData.popperOffsets,
                            position: t.options.strategy,
                            adaptive: s,
                            roundOffsets: l
                        })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, re(Object.assign({}, c, {
                            offsets: t.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: l
                        })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-placement": t.placement
                        })
                    },
                    data: {}
                };
                var oe = {
                    passive: !0
                };
                const se = {
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(e) {
                        var t = e.state,
                            n = e.instance,
                            r = e.options,
                            i = r.scroll,
                            o = void 0 === i || i,
                            s = r.resize,
                            a = void 0 === s || s,
                            l = D(t.elements.popper),
                            c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return o && c.forEach((function(e) {
                                e.addEventListener("scroll", n.update, oe)
                            })), a && l.addEventListener("resize", n.update, oe),
                            function() {
                                o && c.forEach((function(e) {
                                    e.removeEventListener("scroll", n.update, oe)
                                })), a && l.removeEventListener("resize", n.update, oe)
                            }
                    },
                    data: {}
                };
                var ae = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

                function le(e) {
                    return e.replace(/left|right|bottom|top/g, (function(e) {
                        return ae[e]
                    }))
                }
                var ce = {
                    start: "end",
                    end: "start"
                };

                function ue(e) {
                    return e.replace(/start|end/g, (function(e) {
                        return ce[e]
                    }))
                }

                function he(e) {
                    var t = D(e);
                    return {
                        scrollLeft: t.pageXOffset,
                        scrollTop: t.pageYOffset
                    }
                }

                function fe(e) {
                    return B(Q(e)).left + he(e).scrollLeft
                }

                function de(e) {
                    var t = W(e),
                        n = t.overflow,
                        r = t.overflowX,
                        i = t.overflowY;
                    return /auto|scroll|overlay|hidden/.test(n + i + r)
                }

                function pe(e) {
                    return ["html", "body", "#document"].indexOf(k(e)) >= 0 ? e.ownerDocument.body : N(e) && de(e) ? e : pe(z(e))
                }

                function ge(e, t) {
                    var n;
                    void 0 === t && (t = []);
                    var r = pe(e),
                        i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                        o = D(r),
                        s = i ? [o].concat(o.visualViewport || [], de(r) ? r : []) : r,
                        a = t.concat(s);
                    return i ? a : a.concat(ge(z(s)))
                }

                function me(e) {
                    return Object.assign({}, e, {
                        left: e.x,
                        top: e.y,
                        right: e.x + e.width,
                        bottom: e.y + e.height
                    })
                }

                function ve(e, t, n) {
                    return t === p ? me(function(e, t) {
                        var n = D(e),
                            r = Q(e),
                            i = n.visualViewport,
                            o = r.clientWidth,
                            s = r.clientHeight,
                            a = 0,
                            l = 0;
                        if (i) {
                            o = i.width, s = i.height;
                            var c = $();
                            (c || !c && "fixed" === t) && (a = i.offsetLeft, l = i.offsetTop)
                        }
                        return {
                            width: o,
                            height: s,
                            x: a + fe(e),
                            y: l
                        }
                    }(e, n)) : L(t) ? function(e, t) {
                        var n = B(e, !1, "fixed" === t);
                        return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
                    }(t, n) : me(function(e) {
                        var t, n = Q(e),
                            r = he(e),
                            i = null == (t = e.ownerDocument) ? void 0 : t.body,
                            o = R(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                            s = R(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                            a = -r.scrollLeft + fe(e),
                            l = -r.scrollTop;
                        return "rtl" === W(i || n).direction && (a += R(n.clientWidth, i ? i.clientWidth : 0) - o), {
                            width: o,
                            height: s,
                            x: a,
                            y: l
                        }
                    }(Q(e)))
                }

                function _e(e, t, n, r) {
                    var i = "clippingParents" === t ? function(e) {
                            var t = ge(z(e)),
                                n = ["absolute", "fixed"].indexOf(W(e).position) >= 0 && N(e) ? V(e) : e;
                            return L(n) ? t.filter((function(e) {
                                return L(e) && X(e, n) && "body" !== k(e)
                            })) : []
                        }(e) : [].concat(t),
                        o = [].concat(i, [n]),
                        s = o[0],
                        a = o.reduce((function(t, n) {
                            var i = ve(e, n, r);
                            return t.top = R(i.top, t.top), t.right = H(i.right, t.right), t.bottom = H(i.bottom, t.bottom), t.left = R(i.left, t.left), t
                        }), ve(e, s, r));
                    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
                }

                function be(e) {
                    var t, n = e.reference,
                        r = e.element,
                        i = e.placement,
                        c = i ? M(i) : null,
                        u = i ? te(i) : null,
                        d = n.x + n.width / 2 - r.width / 2,
                        p = n.y + n.height / 2 - r.height / 2;
                    switch (c) {
                        case o:
                            t = {
                                x: d,
                                y: n.y - r.height
                            };
                            break;
                        case s:
                            t = {
                                x: d,
                                y: n.y + n.height
                            };
                            break;
                        case a:
                            t = {
                                x: n.x + n.width,
                                y: p
                            };
                            break;
                        case l:
                            t = {
                                x: n.x - r.width,
                                y: p
                            };
                            break;
                        default:
                            t = {
                                x: n.x,
                                y: n.y
                            }
                    }
                    var g = c ? K(c) : null;
                    if (null != g) {
                        var m = "y" === g ? "height" : "width";
                        switch (u) {
                            case h:
                                t[g] = t[g] - (n[m] / 2 - r[m] / 2);
                                break;
                            case f:
                                t[g] = t[g] + (n[m] / 2 - r[m] / 2)
                        }
                    }
                    return t
                }

                function ye(e, t) {
                    void 0 === t && (t = {});
                    var n = t,
                        r = n.placement,
                        i = void 0 === r ? e.placement : r,
                        l = n.strategy,
                        c = void 0 === l ? e.strategy : l,
                        h = n.boundary,
                        f = void 0 === h ? d : h,
                        v = n.rootBoundary,
                        _ = void 0 === v ? p : v,
                        b = n.elementContext,
                        y = void 0 === b ? g : b,
                        w = n.altBoundary,
                        E = void 0 !== w && w,
                        x = n.padding,
                        S = void 0 === x ? 0 : x,
                        T = J("number" != typeof S ? S : Z(S, u)),
                        C = y === g ? m : g,
                        O = e.rects.popper,
                        A = e.elements[E ? C : y],
                        k = _e(L(A) ? A : A.contextElement || Q(e.elements.popper), f, _, c),
                        D = B(e.elements.reference),
                        N = be({
                            reference: D,
                            element: O,
                            strategy: "absolute",
                            placement: i
                        }),
                        I = me(Object.assign({}, O, N)),
                        P = y === g ? I : D,
                        M = {
                            top: k.top - P.top + T.top,
                            bottom: P.bottom - k.bottom + T.bottom,
                            left: k.left - P.left + T.left,
                            right: P.right - k.right + T.right
                        },
                        R = e.modifiersData.offset;
                    if (y === g && R) {
                        var H = R[i];
                        Object.keys(M).forEach((function(e) {
                            var t = [a, s].indexOf(e) >= 0 ? 1 : -1,
                                n = [o, s].indexOf(e) >= 0 ? "y" : "x";
                            M[e] += H[n] * t
                        }))
                    }
                    return M
                }
                const we = {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            r = e.name;
                        if (!t.modifiersData[r]._skip) {
                            for (var i = n.mainAxis, f = void 0 === i || i, d = n.altAxis, p = void 0 === d || d, g = n.fallbackPlacements, m = n.padding, b = n.boundary, y = n.rootBoundary, w = n.altBoundary, E = n.flipVariations, x = void 0 === E || E, S = n.allowedAutoPlacements, T = t.options.placement, C = M(T), O = g || (C === T || !x ? [le(T)] : function(e) {
                                    if (M(e) === c) return [];
                                    var t = le(e);
                                    return [ue(e), t, ue(t)]
                                }(T)), A = [T].concat(O).reduce((function(e, n) {
                                    return e.concat(M(n) === c ? function(e, t) {
                                        void 0 === t && (t = {});
                                        var n = t,
                                            r = n.placement,
                                            i = n.boundary,
                                            o = n.rootBoundary,
                                            s = n.padding,
                                            a = n.flipVariations,
                                            l = n.allowedAutoPlacements,
                                            c = void 0 === l ? _ : l,
                                            h = te(r),
                                            f = h ? a ? v : v.filter((function(e) {
                                                return te(e) === h
                                            })) : u,
                                            d = f.filter((function(e) {
                                                return c.indexOf(e) >= 0
                                            }));
                                        0 === d.length && (d = f);
                                        var p = d.reduce((function(t, n) {
                                            return t[n] = ye(e, {
                                                placement: n,
                                                boundary: i,
                                                rootBoundary: o,
                                                padding: s
                                            })[M(n)], t
                                        }), {});
                                        return Object.keys(p).sort((function(e, t) {
                                            return p[e] - p[t]
                                        }))
                                    }(t, {
                                        placement: n,
                                        boundary: b,
                                        rootBoundary: y,
                                        padding: m,
                                        flipVariations: x,
                                        allowedAutoPlacements: S
                                    }) : n)
                                }), []), k = t.rects.reference, D = t.rects.popper, L = new Map, N = !0, I = A[0], P = 0; P < A.length; P++) {
                                var R = A[P],
                                    H = M(R),
                                    q = te(R) === h,
                                    j = [o, s].indexOf(H) >= 0,
                                    $ = j ? "width" : "height",
                                    B = ye(t, {
                                        placement: R,
                                        boundary: b,
                                        rootBoundary: y,
                                        altBoundary: w,
                                        padding: m
                                    }),
                                    F = j ? q ? a : l : q ? s : o;
                                k[$] > D[$] && (F = le(F));
                                var X = le(F),
                                    W = [];
                                if (f && W.push(B[H] <= 0), p && W.push(B[F] <= 0, B[X] <= 0), W.every((function(e) {
                                        return e
                                    }))) {
                                    I = R, N = !1;
                                    break
                                }
                                L.set(R, W)
                            }
                            if (N)
                                for (var U = function(e) {
                                        var t = A.find((function(t) {
                                            var n = L.get(t);
                                            if (n) return n.slice(0, e).every((function(e) {
                                                return e
                                            }))
                                        }));
                                        if (t) return I = t, "break"
                                    }, Q = x ? 3 : 1; Q > 0; Q--) {
                                    if ("break" === U(Q)) break
                                }
                            t.placement !== I && (t.modifiersData[r]._skip = !0, t.placement = I, t.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                };

                function Ee(e, t, n) {
                    return void 0 === n && (n = {
                        x: 0,
                        y: 0
                    }), {
                        top: e.top - t.height - n.y,
                        right: e.right - t.width + n.x,
                        bottom: e.bottom - t.height + n.y,
                        left: e.left - t.width - n.x
                    }
                }

                function xe(e) {
                    return [o, a, s, l].some((function(t) {
                        return e[t] >= 0
                    }))
                }
                const Se = {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.name,
                            r = t.rects.reference,
                            i = t.rects.popper,
                            o = t.modifiersData.preventOverflow,
                            s = ye(t, {
                                elementContext: "reference"
                            }),
                            a = ye(t, {
                                altBoundary: !0
                            }),
                            l = Ee(s, r),
                            c = Ee(a, i, o),
                            u = xe(l),
                            h = xe(c);
                        t.modifiersData[n] = {
                            referenceClippingOffsets: l,
                            popperEscapeOffsets: c,
                            isReferenceHidden: u,
                            hasPopperEscaped: h
                        }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                            "data-popper-reference-hidden": u,
                            "data-popper-escaped": h
                        })
                    }
                };
                const Te = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            r = e.name,
                            i = n.offset,
                            s = void 0 === i ? [0, 0] : i,
                            c = _.reduce((function(e, n) {
                                return e[n] = function(e, t, n) {
                                    var r = M(e),
                                        i = [l, o].indexOf(r) >= 0 ? -1 : 1,
                                        s = "function" == typeof n ? n(Object.assign({}, t, {
                                            placement: e
                                        })) : n,
                                        c = s[0],
                                        u = s[1];
                                    return c = c || 0, u = (u || 0) * i, [l, a].indexOf(r) >= 0 ? {
                                        x: u,
                                        y: c
                                    } : {
                                        x: c,
                                        y: u
                                    }
                                }(n, t.rects, s), e
                            }), {}),
                            u = c[t.placement],
                            h = u.x,
                            f = u.y;
                        null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += h, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = c
                    }
                };
                const Ce = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(e) {
                        var t = e.state,
                            n = e.name;
                        t.modifiersData[n] = be({
                            reference: t.rects.reference,
                            element: t.rects.popper,
                            strategy: "absolute",
                            placement: t.placement
                        })
                    },
                    data: {}
                };
                const Oe = {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(e) {
                        var t = e.state,
                            n = e.options,
                            r = e.name,
                            i = n.mainAxis,
                            c = void 0 === i || i,
                            u = n.altAxis,
                            f = void 0 !== u && u,
                            d = n.boundary,
                            p = n.rootBoundary,
                            g = n.altBoundary,
                            m = n.padding,
                            v = n.tether,
                            _ = void 0 === v || v,
                            b = n.tetherOffset,
                            y = void 0 === b ? 0 : b,
                            w = ye(t, {
                                boundary: d,
                                rootBoundary: p,
                                padding: m,
                                altBoundary: g
                            }),
                            E = M(t.placement),
                            x = te(t.placement),
                            S = !x,
                            T = K(E),
                            C = "x" === T ? "y" : "x",
                            O = t.modifiersData.popperOffsets,
                            A = t.rects.reference,
                            k = t.rects.popper,
                            D = "function" == typeof y ? y(Object.assign({}, t.rects, {
                                placement: t.placement
                            })) : y,
                            L = "number" == typeof D ? {
                                mainAxis: D,
                                altAxis: D
                            } : Object.assign({
                                mainAxis: 0,
                                altAxis: 0
                            }, D),
                            N = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                            I = {
                                x: 0,
                                y: 0
                            };
                        if (O) {
                            if (c) {
                                var P, q = "y" === T ? o : l,
                                    j = "y" === T ? s : a,
                                    $ = "y" === T ? "height" : "width",
                                    B = O[T],
                                    X = B + w[q],
                                    W = B - w[j],
                                    U = _ ? -k[$] / 2 : 0,
                                    Q = x === h ? A[$] : k[$],
                                    z = x === h ? -k[$] : -A[$],
                                    Y = t.elements.arrow,
                                    J = _ && Y ? F(Y) : {
                                        width: 0,
                                        height: 0
                                    },
                                    Z = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0
                                    },
                                    ee = Z[q],
                                    ne = Z[j],
                                    re = G(0, A[$], J[$]),
                                    ie = S ? A[$] / 2 - U - re - ee - L.mainAxis : Q - re - ee - L.mainAxis,
                                    oe = S ? -A[$] / 2 + U + re + ne + L.mainAxis : z + re + ne + L.mainAxis,
                                    se = t.elements.arrow && V(t.elements.arrow),
                                    ae = se ? "y" === T ? se.clientTop || 0 : se.clientLeft || 0 : 0,
                                    le = null != (P = null == N ? void 0 : N[T]) ? P : 0,
                                    ce = B + oe - le,
                                    ue = G(_ ? H(X, B + ie - le - ae) : X, B, _ ? R(W, ce) : W);
                                O[T] = ue, I[T] = ue - B
                            }
                            if (f) {
                                var he, fe = "x" === T ? o : l,
                                    de = "x" === T ? s : a,
                                    pe = O[C],
                                    ge = "y" === C ? "height" : "width",
                                    me = pe + w[fe],
                                    ve = pe - w[de],
                                    _e = -1 !== [o, l].indexOf(E),
                                    be = null != (he = null == N ? void 0 : N[C]) ? he : 0,
                                    we = _e ? me : pe - A[ge] - k[ge] - be + L.altAxis,
                                    Ee = _e ? pe + A[ge] + k[ge] - be - L.altAxis : ve,
                                    xe = _ && _e ? function(e, t, n) {
                                        var r = G(e, t, n);
                                        return r > n ? n : r
                                    }(we, pe, Ee) : G(_ ? we : me, pe, _ ? Ee : ve);
                                O[C] = xe, I[C] = xe - pe
                            }
                            t.modifiersData[r] = I
                        }
                    },
                    requiresIfExists: ["offset"]
                };

                function Ae(e, t, n) {
                    void 0 === n && (n = !1);
                    var r, i, o = N(t),
                        s = N(t) && function(e) {
                            var t = e.getBoundingClientRect(),
                                n = q(t.width) / e.offsetWidth || 1,
                                r = q(t.height) / e.offsetHeight || 1;
                            return 1 !== n || 1 !== r
                        }(t),
                        a = Q(t),
                        l = B(e, s, n),
                        c = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        u = {
                            x: 0,
                            y: 0
                        };
                    return (o || !o && !n) && (("body" !== k(t) || de(a)) && (c = (r = t) !== D(r) && N(r) ? {
                        scrollLeft: (i = r).scrollLeft,
                        scrollTop: i.scrollTop
                    } : he(r)), N(t) ? ((u = B(t, !0)).x += t.clientLeft, u.y += t.clientTop) : a && (u.x = fe(a))), {
                        x: l.left + c.scrollLeft - u.x,
                        y: l.top + c.scrollTop - u.y,
                        width: l.width,
                        height: l.height
                    }
                }

                function ke(e) {
                    var t = new Map,
                        n = new Set,
                        r = [];

                    function i(e) {
                        n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                            if (!n.has(e)) {
                                var r = t.get(e);
                                r && i(r)
                            }
                        })), r.push(e)
                    }
                    return e.forEach((function(e) {
                        t.set(e.name, e)
                    })), e.forEach((function(e) {
                        n.has(e.name) || i(e)
                    })), r
                }
                var De = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

                function Le() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return !t.some((function(e) {
                        return !(e && "function" == typeof e.getBoundingClientRect)
                    }))
                }

                function Ne(e) {
                    void 0 === e && (e = {});
                    var t = e,
                        n = t.defaultModifiers,
                        r = void 0 === n ? [] : n,
                        i = t.defaultOptions,
                        o = void 0 === i ? De : i;
                    return function(e, t, n) {
                        void 0 === n && (n = o);
                        var i, s, a = {
                                placement: "bottom",
                                orderedModifiers: [],
                                options: Object.assign({}, De, o),
                                modifiersData: {},
                                elements: {
                                    reference: e,
                                    popper: t
                                },
                                attributes: {},
                                styles: {}
                            },
                            l = [],
                            c = !1,
                            u = {
                                state: a,
                                setOptions: function(n) {
                                    var i = "function" == typeof n ? n(a.options) : n;
                                    h(), a.options = Object.assign({}, o, a.options, i), a.scrollParents = {
                                        reference: L(e) ? ge(e) : e.contextElement ? ge(e.contextElement) : [],
                                        popper: ge(t)
                                    };
                                    var s, c, f = function(e) {
                                        var t = ke(e);
                                        return A.reduce((function(e, n) {
                                            return e.concat(t.filter((function(e) {
                                                return e.phase === n
                                            })))
                                        }), [])
                                    }((s = [].concat(r, a.options.modifiers), c = s.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {}), Object.keys(c).map((function(e) {
                                        return c[e]
                                    }))));
                                    return a.orderedModifiers = f.filter((function(e) {
                                        return e.enabled
                                    })), a.orderedModifiers.forEach((function(e) {
                                        var t = e.name,
                                            n = e.options,
                                            r = void 0 === n ? {} : n,
                                            i = e.effect;
                                        if ("function" == typeof i) {
                                            var o = i({
                                                    state: a,
                                                    name: t,
                                                    instance: u,
                                                    options: r
                                                }),
                                                s = function() {};
                                            l.push(o || s)
                                        }
                                    })), u.update()
                                },
                                forceUpdate: function() {
                                    if (!c) {
                                        var e = a.elements,
                                            t = e.reference,
                                            n = e.popper;
                                        if (Le(t, n)) {
                                            a.rects = {
                                                reference: Ae(t, V(n), "fixed" === a.options.strategy),
                                                popper: F(n)
                                            }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(e) {
                                                return a.modifiersData[e.name] = Object.assign({}, e.data)
                                            }));
                                            for (var r = 0; r < a.orderedModifiers.length; r++)
                                                if (!0 !== a.reset) {
                                                    var i = a.orderedModifiers[r],
                                                        o = i.fn,
                                                        s = i.options,
                                                        l = void 0 === s ? {} : s,
                                                        h = i.name;
                                                    "function" == typeof o && (a = o({
                                                        state: a,
                                                        options: l,
                                                        name: h,
                                                        instance: u
                                                    }) || a)
                                                } else a.reset = !1, r = -1
                                        }
                                    }
                                },
                                update: (i = function() {
                                    return new Promise((function(e) {
                                        u.forceUpdate(), e(a)
                                    }))
                                }, function() {
                                    return s || (s = new Promise((function(e) {
                                        Promise.resolve().then((function() {
                                            s = void 0, e(i())
                                        }))
                                    }))), s
                                }),
                                destroy: function() {
                                    h(), c = !0
                                }
                            };
                        if (!Le(e, t)) return u;

                        function h() {
                            l.forEach((function(e) {
                                return e()
                            })), l = []
                        }
                        return u.setOptions(n).then((function(e) {
                            !c && n.onFirstUpdate && n.onFirstUpdate(e)
                        })), u
                    }
                }
                var Ie = Ne(),
                    Pe = Ne({
                        defaultModifiers: [se, Ce, ie, P, Te, we, Oe, ee, Se]
                    }),
                    Me = Ne({
                        defaultModifiers: [se, Ce, ie, P]
                    });
                const Re = "transitionend",
                    He = e => {
                        let t = e.getAttribute("data-bs-target");
                        if (!t || "#" === t) {
                            let n = e.getAttribute("href");
                            if (!n || !n.includes("#") && !n.startsWith(".")) return null;
                            n.includes("#") && !n.startsWith("#") && (n = `#${n.split("#")[1]}`), t = n && "#" !== n ? n.trim() : null
                        }
                        return t
                    },
                    qe = e => {
                        const t = He(e);
                        return t && document.querySelector(t) ? t : null
                    },
                    je = e => {
                        const t = He(e);
                        return t ? document.querySelector(t) : null
                    },
                    $e = e => {
                        e.dispatchEvent(new Event(Re))
                    },
                    Be = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
                    Fe = e => Be(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null,
                    Xe = (e, t, n) => {
                        Object.keys(n).forEach((r => {
                            const i = n[r],
                                o = t[r],
                                s = o && Be(o) ? "element" : null == (a = o) ? `${a}` : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
                            var a;
                            if (!new RegExp(i).test(s)) throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${i}".`)
                        }))
                    },
                    We = e => !(!Be(e) || 0 === e.getClientRects().length) && "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                    Ue = e => !e || e.nodeType !== Node.ELEMENT_NODE || (!!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"))),
                    Qe = e => {
                        if (!document.documentElement.attachShadow) return null;
                        if ("function" == typeof e.getRootNode) {
                            const t = e.getRootNode();
                            return t instanceof ShadowRoot ? t : null
                        }
                        return e instanceof ShadowRoot ? e : e.parentNode ? Qe(e.parentNode) : null
                    },
                    ze = () => {},
                    Ye = e => {
                        e.offsetHeight
                    },
                    Ve = () => {
                        const {
                            jQuery: e
                        } = window;
                        return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null
                    },
                    Ke = [],
                    Ge = () => "rtl" === document.documentElement.dir,
                    Je = e => {
                        var t;
                        t = () => {
                            const t = Ve();
                            if (t) {
                                const n = e.NAME,
                                    r = t.fn[n];
                                t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = () => (t.fn[n] = r, e.jQueryInterface)
                            }
                        }, "loading" === document.readyState ? (Ke.length || document.addEventListener("DOMContentLoaded", (() => {
                            Ke.forEach((e => e()))
                        })), Ke.push(t)) : t()
                    },
                    Ze = e => {
                        "function" == typeof e && e()
                    },
                    et = (e, t, n = !0) => {
                        if (!n) return void Ze(e);
                        const r = (e => {
                            if (!e) return 0;
                            let {
                                transitionDuration: t,
                                transitionDelay: n
                            } = window.getComputedStyle(e);
                            const r = Number.parseFloat(t),
                                i = Number.parseFloat(n);
                            return r || i ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0
                        })(t) + 5;
                        let i = !1;
                        const o = ({
                            target: n
                        }) => {
                            n === t && (i = !0, t.removeEventListener(Re, o), Ze(e))
                        };
                        t.addEventListener(Re, o), setTimeout((() => {
                            i || $e(t)
                        }), r)
                    },
                    tt = (e, t, n, r) => {
                        let i = e.indexOf(t);
                        if (-1 === i) return e[!n && r ? e.length - 1 : 0];
                        const o = e.length;
                        return i += n ? 1 : -1, r && (i = (i + o) % o), e[Math.max(0, Math.min(i, o - 1))]
                    },
                    nt = /[^.]*(?=\..*)\.|.*/,
                    rt = /\..*/,
                    it = /::\d+$/,
                    ot = {};
                let st = 1;
                const at = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    },
                    lt = /^(mouseenter|mouseleave)/i,
                    ct = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

                function ut(e, t) {
                    return t && `${t}::${st++}` || e.uidEvent || st++
                }

                function ht(e) {
                    const t = ut(e);
                    return e.uidEvent = t, ot[t] = ot[t] || {}, ot[t]
                }

                function ft(e, t, n = null) {
                    const r = Object.keys(e);
                    for (let i = 0, o = r.length; i < o; i++) {
                        const o = e[r[i]];
                        if (o.originalHandler === t && o.delegationSelector === n) return o
                    }
                    return null
                }

                function dt(e, t, n) {
                    const r = "string" == typeof t,
                        i = r ? n : t;
                    let o = mt(e);
                    return ct.has(o) || (o = e), [r, i, o]
                }

                function pt(e, t, n, r, i) {
                    if ("string" != typeof t || !e) return;
                    if (n || (n = r, r = null), lt.test(t)) {
                        const e = e => function(t) {
                            if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t)
                        };
                        r ? r = e(r) : n = e(n)
                    }
                    const [o, s, a] = dt(t, n, r), l = ht(e), c = l[a] || (l[a] = {}), u = ft(c, s, o ? n : null);
                    if (u) return void(u.oneOff = u.oneOff && i);
                    const h = ut(s, t.replace(nt, "")),
                        f = o ? function(e, t, n) {
                            return function r(i) {
                                const o = e.querySelectorAll(t);
                                for (let {
                                        target: s
                                    } = i; s && s !== this; s = s.parentNode)
                                    for (let a = o.length; a--;)
                                        if (o[a] === s) return i.delegateTarget = s, r.oneOff && vt.off(e, i.type, t, n), n.apply(s, [i]);
                                return null
                            }
                        }(e, n, r) : function(e, t) {
                            return function n(r) {
                                return r.delegateTarget = e, n.oneOff && vt.off(e, r.type, t), t.apply(e, [r])
                            }
                        }(e, n);
                    f.delegationSelector = o ? n : null, f.originalHandler = s, f.oneOff = i, f.uidEvent = h, c[h] = f, e.addEventListener(a, f, o)
                }

                function gt(e, t, n, r, i) {
                    const o = ft(t[n], r, i);
                    o && (e.removeEventListener(n, o, Boolean(i)), delete t[n][o.uidEvent])
                }

                function mt(e) {
                    return e = e.replace(rt, ""), at[e] || e
                }
                const vt = {
                        on(e, t, n, r) {
                            pt(e, t, n, r, !1)
                        },
                        one(e, t, n, r) {
                            pt(e, t, n, r, !0)
                        },
                        off(e, t, n, r) {
                            if ("string" != typeof t || !e) return;
                            const [i, o, s] = dt(t, n, r), a = s !== t, l = ht(e), c = t.startsWith(".");
                            if (void 0 !== o) {
                                if (!l || !l[s]) return;
                                return void gt(e, l, s, o, i ? n : null)
                            }
                            c && Object.keys(l).forEach((n => {
                                ! function(e, t, n, r) {
                                    const i = t[n] || {};
                                    Object.keys(i).forEach((o => {
                                        if (o.includes(r)) {
                                            const r = i[o];
                                            gt(e, t, n, r.originalHandler, r.delegationSelector)
                                        }
                                    }))
                                }(e, l, n, t.slice(1))
                            }));
                            const u = l[s] || {};
                            Object.keys(u).forEach((n => {
                                const r = n.replace(it, "");
                                if (!a || t.includes(r)) {
                                    const t = u[n];
                                    gt(e, l, s, t.originalHandler, t.delegationSelector)
                                }
                            }))
                        },
                        trigger(e, t, n) {
                            if ("string" != typeof t || !e) return null;
                            const r = Ve(),
                                i = mt(t),
                                o = t !== i,
                                s = ct.has(i);
                            let a, l = !0,
                                c = !0,
                                u = !1,
                                h = null;
                            return o && r && (a = r.Event(t, n), r(e).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), u = a.isDefaultPrevented()), s ? (h = document.createEvent("HTMLEvents"), h.initEvent(i, l, !0)) : h = new CustomEvent(t, {
                                bubbles: l,
                                cancelable: !0
                            }), void 0 !== n && Object.keys(n).forEach((e => {
                                Object.defineProperty(h, e, {
                                    get: () => n[e]
                                })
                            })), u && h.preventDefault(), c && e.dispatchEvent(h), h.defaultPrevented && void 0 !== a && a.preventDefault(), h
                        }
                    },
                    _t = new Map,
                    bt = {
                        set(e, t, n) {
                            _t.has(e) || _t.set(e, new Map);
                            const r = _t.get(e);
                            r.has(t) || 0 === r.size ? r.set(t, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)
                        },
                        get: (e, t) => _t.has(e) && _t.get(e).get(t) || null,
                        remove(e, t) {
                            if (!_t.has(e)) return;
                            const n = _t.get(e);
                            n.delete(t), 0 === n.size && _t.delete(e)
                        }
                    };
                class yt {
                    constructor(e) {
                        (e = Fe(e)) && (this._element = e, bt.set(this._element, this.constructor.DATA_KEY, this))
                    }
                    dispose() {
                        bt.remove(this._element, this.constructor.DATA_KEY), vt.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((e => {
                            this[e] = null
                        }))
                    }
                    _queueCallback(e, t, n = !0) {
                        et(e, t, n)
                    }
                    static getInstance(e) {
                        return bt.get(Fe(e), this.DATA_KEY)
                    }
                    static getOrCreateInstance(e, t = {}) {
                        return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
                    }
                    static get VERSION() {
                        return "5.1.3"
                    }
                    static get NAME() {
                        throw new Error('You have to implement the static method "NAME", for each component!')
                    }
                    static get DATA_KEY() {
                        return `bs.${this.NAME}`
                    }
                    static get EVENT_KEY() {
                        return `.${this.DATA_KEY}`
                    }
                }
                const wt = (e, t = "hide") => {
                        const n = `click.dismiss${e.EVENT_KEY}`,
                            r = e.NAME;
                        vt.on(document, n, `[data-bs-dismiss="${r}"]`, (function(n) {
                            if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), Ue(this)) return;
                            const i = je(this) || this.closest(`.${r}`);
                            e.getOrCreateInstance(i)[t]()
                        }))
                    },
                    Et = ".bs.alert",
                    xt = `close${Et}`,
                    St = `closed${Et}`;
                class Tt extends yt {
                    static get NAME() {
                        return "alert"
                    }
                    close() {
                        if (vt.trigger(this._element, xt).defaultPrevented) return;
                        this._element.classList.remove("show");
                        const e = this._element.classList.contains("fade");
                        this._queueCallback((() => this._destroyElement()), this._element, e)
                    }
                    _destroyElement() {
                        this._element.remove(), vt.trigger(this._element, St), this.dispose()
                    }
                    static jQueryInterface(e) {
                        return this.each((function() {
                            const t = Tt.getOrCreateInstance(this);
                            if ("string" == typeof e) {
                                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                                t[e](this)
                            }
                        }))
                    }
                }
                wt(Tt, "close"), Je(Tt);
                const Ct = '[data-bs-toggle="button"]';
                class Ot extends yt {
                    static get NAME() {
                        return "button"
                    }
                    toggle() {
                        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
                    }
                    static jQueryInterface(e) {
                        return this.each((function() {
                            const t = Ot.getOrCreateInstance(this);
                            "toggle" === e && t[e]()
                        }))
                    }
                }

                function At(e) {
                    return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e)
                }

                function kt(e) {
                    return e.replace(/[A-Z]/g, (e => `-${e.toLowerCase()}`))
                }
                vt.on(document, "click.bs.button.data-api", Ct, (e => {
                    e.preventDefault();
                    const t = e.target.closest(Ct);
                    Ot.getOrCreateInstance(t).toggle()
                })), Je(Ot);
                const Dt = {
                        setDataAttribute(e, t, n) {
                            e.setAttribute(`data-bs-${kt(t)}`, n)
                        },
                        removeDataAttribute(e, t) {
                            e.removeAttribute(`data-bs-${kt(t)}`)
                        },
                        getDataAttributes(e) {
                            if (!e) return {};
                            const t = {};
                            return Object.keys(e.dataset).filter((e => e.startsWith("bs"))).forEach((n => {
                                let r = n.replace(/^bs/, "");
                                r = r.charAt(0).toLowerCase() + r.slice(1, r.length), t[r] = At(e.dataset[n])
                            })), t
                        },
                        getDataAttribute: (e, t) => At(e.getAttribute(`data-bs-${kt(t)}`)),
                        offset(e) {
                            const t = e.getBoundingClientRect();
                            return {
                                top: t.top + window.pageYOffset,
                                left: t.left + window.pageXOffset
                            }
                        },
                        position: e => ({
                            top: e.offsetTop,
                            left: e.offsetLeft
                        })
                    },
                    Lt = {
                        find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
                        findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
                        children: (e, t) => [].concat(...e.children).filter((e => e.matches(t))),
                        parents(e, t) {
                            const n = [];
                            let r = e.parentNode;
                            for (; r && r.nodeType === Node.ELEMENT_NODE && 3 !== r.nodeType;) r.matches(t) && n.push(r), r = r.parentNode;
                            return n
                        },
                        prev(e, t) {
                            let n = e.previousElementSibling;
                            for (; n;) {
                                if (n.matches(t)) return [n];
                                n = n.previousElementSibling
                            }
                            return []
                        },
                        next(e, t) {
                            let n = e.nextElementSibling;
                            for (; n;) {
                                if (n.matches(t)) return [n];
                                n = n.nextElementSibling
                            }
                            return []
                        },
                        focusableChildren(e) {
                            const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e => `${e}:not([tabindex^="-"])`)).join(", ");
                            return this.find(t, e).filter((e => !Ue(e) && We(e)))
                        }
                    },
                    Nt = "carousel",
                    It = ".bs.carousel",
                    Pt = ".data-api",
                    Mt = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0,
                        touch: !0
                    },
                    Rt = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean",
                        touch: "boolean"
                    },
                    Ht = "next",
                    qt = "prev",
                    jt = "left",
                    $t = "right",
                    Bt = {
                        ArrowLeft: $t,
                        ArrowRight: jt
                    },
                    Ft = `slide${It}`,
                    Xt = `slid${It}`,
                    Wt = `keydown${It}`,
                    Ut = `mouseenter${It}`,
                    Qt = `mouseleave${It}`,
                    zt = `touchstart${It}`,
                    Yt = `touchmove${It}`,
                    Vt = `touchend${It}`,
                    Kt = `pointerdown${It}`,
                    Gt = `pointerup${It}`,
                    Jt = `dragstart${It}`,
                    Zt = `load${It}${Pt}`,
                    en = `click${It}${Pt}`,
                    tn = "active",
                    nn = ".active.carousel-item";
                class rn extends yt {
                    constructor(e, t) {
                        super(e), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._indicatorsElement = Lt.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent), this._addEventListeners()
                    }
                    static get Default() {
                        return Mt
                    }
                    static get NAME() {
                        return Nt
                    }
                    next() {
                        this._slide(Ht)
                    }
                    nextWhenVisible() {
                        !document.hidden && We(this._element) && this.next()
                    }
                    prev() {
                        this._slide(qt)
                    }
                    pause(e) {
                        e || (this._isPaused = !0), Lt.findOne(".carousel-item-next, .carousel-item-prev", this._element) && ($e(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }
                    cycle(e) {
                        e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                    }
                    to(e) {
                        this._activeElement = Lt.findOne(nn, this._element);
                        const t = this._getItemIndex(this._activeElement);
                        if (e > this._items.length - 1 || e < 0) return;
                        if (this._isSliding) return void vt.one(this._element, Xt, (() => this.to(e)));
                        if (t === e) return this.pause(), void this.cycle();
                        const n = e > t ? Ht : qt;
                        this._slide(n, this._items[e])
                    }
                    _getConfig(e) {
                        return e = { ...Mt,
                            ...Dt.getDataAttributes(this._element),
                            ..."object" == typeof e ? e : {}
                        }, Xe(Nt, e, Rt), e
                    }
                    _handleSwipe() {
                        const e = Math.abs(this.touchDeltaX);
                        if (e <= 40) return;
                        const t = e / this.touchDeltaX;
                        this.touchDeltaX = 0, t && this._slide(t > 0 ? $t : jt)
                    }
                    _addEventListeners() {
                        this._config.keyboard && vt.on(this._element, Wt, (e => this._keydown(e))), "hover" === this._config.pause && (vt.on(this._element, Ut, (e => this.pause(e))), vt.on(this._element, Qt, (e => this.cycle(e)))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
                    }
                    _addTouchEventListeners() {
                        const e = e => this._pointerEvent && ("pen" === e.pointerType || "touch" === e.pointerType),
                            t = t => {
                                e(t) ? this.touchStartX = t.clientX : this._pointerEvent || (this.touchStartX = t.touches[0].clientX)
                            },
                            n = e => {
                                this.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this.touchStartX
                            },
                            r = t => {
                                e(t) && (this.touchDeltaX = t.clientX - this.touchStartX), this._handleSwipe(), "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((e => this.cycle(e)), 500 + this._config.interval))
                            };
                        Lt.find(".carousel-item img", this._element).forEach((e => {
                            vt.on(e, Jt, (e => e.preventDefault()))
                        })), this._pointerEvent ? (vt.on(this._element, Kt, (e => t(e))), vt.on(this._element, Gt, (e => r(e))), this._element.classList.add("pointer-event")) : (vt.on(this._element, zt, (e => t(e))), vt.on(this._element, Yt, (e => n(e))), vt.on(this._element, Vt, (e => r(e))))
                    }
                    _keydown(e) {
                        if (/input|textarea/i.test(e.target.tagName)) return;
                        const t = Bt[e.key];
                        t && (e.preventDefault(), this._slide(t))
                    }
                    _getItemIndex(e) {
                        return this._items = e && e.parentNode ? Lt.find(".carousel-item", e.parentNode) : [], this._items.indexOf(e)
                    }
                    _getItemByOrder(e, t) {
                        const n = e === Ht;
                        return tt(this._items, t, n, this._config.wrap)
                    }
                    _triggerSlideEvent(e, t) {
                        const n = this._getItemIndex(e),
                            r = this._getItemIndex(Lt.findOne(nn, this._element));
                        return vt.trigger(this._element, Ft, {
                            relatedTarget: e,
                            direction: t,
                            from: r,
                            to: n
                        })
                    }
                    _setActiveIndicatorElement(e) {
                        if (this._indicatorsElement) {
                            const t = Lt.findOne(".active", this._indicatorsElement);
                            t.classList.remove(tn), t.removeAttribute("aria-current");
                            const n = Lt.find("[data-bs-target]", this._indicatorsElement);
                            for (let t = 0; t < n.length; t++)
                                if (Number.parseInt(n[t].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
                                    n[t].classList.add(tn), n[t].setAttribute("aria-current", "true");
                                    break
                                }
                        }
                    }
                    _updateInterval() {
                        const e = this._activeElement || Lt.findOne(nn, this._element);
                        if (!e) return;
                        const t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
                        t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                    }
                    _slide(e, t) {
                        const n = this._directionToOrder(e),
                            r = Lt.findOne(nn, this._element),
                            i = this._getItemIndex(r),
                            o = t || this._getItemByOrder(n, r),
                            s = this._getItemIndex(o),
                            a = Boolean(this._interval),
                            l = n === Ht,
                            c = l ? "carousel-item-start" : "carousel-item-end",
                            u = l ? "carousel-item-next" : "carousel-item-prev",
                            h = this._orderToDirection(n);
                        if (o && o.classList.contains(tn)) return void(this._isSliding = !1);
                        if (this._isSliding) return;
                        if (this._triggerSlideEvent(o, h).defaultPrevented) return;
                        if (!r || !o) return;
                        this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;
                        const f = () => {
                            vt.trigger(this._element, Xt, {
                                relatedTarget: o,
                                direction: h,
                                from: i,
                                to: s
                            })
                        };
                        if (this._element.classList.contains("slide")) {
                            o.classList.add(u), Ye(o), r.classList.add(c), o.classList.add(c);
                            const e = () => {
                                o.classList.remove(c, u), o.classList.add(tn), r.classList.remove(tn, u, c), this._isSliding = !1, setTimeout(f, 0)
                            };
                            this._queueCallback(e, r, !0)
                        } else r.classList.remove(tn), o.classList.add(tn), this._isSliding = !1, f();
                        a && this.cycle()
                    }
                    _directionToOrder(e) {
                        return [$t, jt].includes(e) ? Ge() ? e === jt ? qt : Ht : e === jt ? Ht : qt : e
                    }
                    _orderToDirection(e) {
                        return [Ht, qt].includes(e) ? Ge() ? e === qt ? jt : $t : e === qt ? $t : jt : e
                    }
                    static carouselInterface(e, t) {
                        const n = rn.getOrCreateInstance(e, t);
                        let {
                            _config: r
                        } = n;
                        "object" == typeof t && (r = { ...r,
                            ...t
                        });
                        const i = "string" == typeof t ? t : r.slide;
                        if ("number" == typeof t) n.to(t);
                        else if ("string" == typeof i) {
                            if (void 0 === n[i]) throw new TypeError(`No method named "${i}"`);
                            n[i]()
                        } else r.interval && r.ride && (n.pause(), n.cycle())
                    }
                    static jQueryInterface(e) {
                        return this.each((function() {
                            rn.carouselInterface(this, e)
                        }))
                    }
                    static dataApiClickHandler(e) {
                        const t = je(this);
                        if (!t || !t.classList.contains("carousel")) return;
                        const n = { ...Dt.getDataAttributes(t),
                                ...Dt.getDataAttributes(this)
                            },
                            r = this.getAttribute("data-bs-slide-to");
                        r && (n.interval = !1), rn.carouselInterface(t, n), r && rn.getInstance(t).to(r), e.preventDefault()
                    }
                }
                vt.on(document, en, "[data-bs-slide], [data-bs-slide-to]", rn.dataApiClickHandler), vt.on(window, Zt, (() => {
                    const e = Lt.find('[data-bs-ride="carousel"]');
                    for (let t = 0, n = e.length; t < n; t++) rn.carouselInterface(e[t], rn.getInstance(e[t]))
                })), Je(rn);
                const on = "collapse",
                    sn = "bs.collapse",
                    an = `.${sn}`,
                    ln = {
                        toggle: !0,
                        parent: null
                    },
                    cn = {
                        toggle: "boolean",
                        parent: "(null|element)"
                    },
                    un = `show${an}`,
                    hn = `shown${an}`,
                    fn = `hide${an}`,
                    dn = `hidden${an}`,
                    pn = `click${an}.data-api`,
                    gn = "show",
                    mn = "collapse",
                    vn = "collapsing",
                    _n = "collapsed",
                    bn = `:scope .${mn} .${mn}`,
                    yn = '[data-bs-toggle="collapse"]';
                class wn extends yt {
                    constructor(e, t) {
                        super(e), this._isTransitioning = !1, this._config = this._getConfig(t), this._triggerArray = [];
                        const n = Lt.find(yn);
                        for (let e = 0, t = n.length; e < t; e++) {
                            const t = n[e],
                                r = qe(t),
                                i = Lt.find(r).filter((e => e === this._element));
                            null !== r && i.length && (this._selector = r, this._triggerArray.push(t))
                        }
                        this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
                    }
                    static get Default() {
                        return ln
                    }
                    static get NAME() {
                        return on
                    }
                    toggle() {
                        this._isShown() ? this.hide() : this.show()
                    }
                    show() {
                        if (this._isTransitioning || this._isShown()) return;
                        let e, t = [];
                        if (this._config.parent) {
                            const e = Lt.find(bn, this._config.parent);
                            t = Lt.find(".collapse.show, .collapse.collapsing", this._config.parent).filter((t => !e.includes(t)))
                        }
                        const n = Lt.findOne(this._selector);
                        if (t.length) {
                            const r = t.find((e => n !== e));
                            if (e = r ? wn.getInstance(r) : null, e && e._isTransitioning) return
                        }
                        if (vt.trigger(this._element, un).defaultPrevented) return;
                        t.forEach((t => {
                            n !== t && wn.getOrCreateInstance(t, {
                                toggle: !1
                            }).hide(), e || bt.set(t, sn, null)
                        }));
                        const r = this._getDimension();
                        this._element.classList.remove(mn), this._element.classList.add(vn), this._element.style[r] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
                        const i = `scroll${r[0].toUpperCase()+r.slice(1)}`;
                        this._queueCallback((() => {
                            this._isTransitioning = !1, this._element.classList.remove(vn), this._element.classList.add(mn, gn), this._element.style[r] = "", vt.trigger(this._element, hn)
                        }), this._element, !0), this._element.style[r] = `${this._element[i]}px`
                    }
                    hide() {
                        if (this._isTransitioning || !this._isShown()) return;
                        if (vt.trigger(this._element, fn).defaultPrevented) return;
                        const e = this._getDimension();
                        this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Ye(this._element), this._element.classList.add(vn), this._element.classList.remove(mn, gn);
                        const t = this._triggerArray.length;
                        for (let e = 0; e < t; e++) {
                            const t = this._triggerArray[e],
                                n = je(t);
                            n && !this._isShown(n) && this._addAriaAndCollapsedClass([t], !1)
                        }
                        this._isTransitioning = !0;
                        this._element.style[e] = "", this._queueCallback((() => {
                            this._isTransitioning = !1, this._element.classList.remove(vn), this._element.classList.add(mn), vt.trigger(this._element, dn)
                        }), this._element, !0)
                    }
                    _isShown(e = this._element) {
                        return e.classList.contains(gn)
                    }
                    _getConfig(e) {
                        return (e = { ...ln,
                            ...Dt.getDataAttributes(this._element),
                            ...e
                        }).toggle = Boolean(e.toggle), e.parent = Fe(e.parent), Xe(on, e, cn), e
                    }
                    _getDimension() {
                        return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
                    }
                    _initializeChildren() {
                        if (!this._config.parent) return;
                        const e = Lt.find(bn, this._config.parent);
                        Lt.find(yn, this._config.parent).filter((t => !e.includes(t))).forEach((e => {
                            const t = je(e);
                            t && this._addAriaAndCollapsedClass([e], this._isShown(t))
                        }))
                    }
                    _addAriaAndCollapsedClass(e, t) {
                        e.length && e.forEach((e => {
                            t ? e.classList.remove(_n) : e.classList.add(_n), e.setAttribute("aria-expanded", t)
                        }))
                    }
                    static jQueryInterface(e) {
                        return this.each((function() {
                            const t = {};
                            "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1);
                            const n = wn.getOrCreateInstance(this, t);
                            if ("string" == typeof e) {
                                if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                                n[e]()
                            }
                        }))
                    }
                }
                vt.on(document, pn, yn, (function(e) {
                    ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
                    const t = qe(this);
                    Lt.find(t).forEach((e => {
                        wn.getOrCreateInstance(e, {
                            toggle: !1
                        }).toggle()
                    }))
                })), Je(wn);
                const En = "dropdown",
                    xn = ".bs.dropdown",
                    Sn = ".data-api",
                    Tn = "Escape",
                    Cn = "Space",
                    On = "ArrowUp",
                    An = "ArrowDown",
                    kn = new RegExp(`${On}|${An}|${Tn}`),
                    Dn = `hide${xn}`,
                    Ln = `hidden${xn}`,
                    Nn = `show${xn}`,
                    In = `shown${xn}`,
                    Pn = `click${xn}${Sn}`,
                    Mn = `keydown${xn}${Sn}`,
                    Rn = `keyup${xn}${Sn}`,
                    Hn = "show",
                    qn = '[data-bs-toggle="dropdown"]',
                    jn = ".dropdown-menu",
                    $n = Ge() ? "top-end" : "top-start",
                    Bn = Ge() ? "top-start" : "top-end",
                    Fn = Ge() ? "bottom-end" : "bottom-start",
                    Xn = Ge() ? "bottom-start" : "bottom-end",
                    Wn = Ge() ? "left-start" : "right-start",
                    Un = Ge() ? "right-start" : "left-start",
                    Qn = {
                        offset: [0, 2],
                        boundary: "clippingParents",
                        reference: "toggle",
                        display: "dynamic",
                        popperConfig: null,
                        autoClose: !0
                    },
                    zn = {
                        offset: "(array|string|function)",
                        boundary: "(string|element)",
                        reference: "(string|element|object)",
                        display: "string",
                        popperConfig: "(null|object|function)",
                        autoClose: "(boolean|string)"
                    };
                class Yn extends yt {
                    constructor(e, t) {
                        super(e), this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar()
                    }
                    static get Default() {
                        return Qn
                    }
                    static get DefaultType() {
                        return zn
                    }
                    static get NAME() {
                        return En
                    }
                    toggle() {
                        return this._isShown() ? this.hide() : this.show()
                    }
                    show() {
                        if (Ue(this._element) || this._isShown(this._menu)) return;
                        const e = {
                            relatedTarget: this._element
                        };
                        if (vt.trigger(this._element, Nn, e).defaultPrevented) return;
                        const t = Yn.getParentFromElement(this._element);
                        this._inNavbar ? Dt.setDataAttribute(this._menu, "popper", "none") : this._createPopper(t), "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && [].concat(...document.body.children).forEach((e => vt.on(e, "mouseover", ze))), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Hn), this._element.classList.add(Hn), vt.trigger(this._element, In, e)
                    }
                    hide() {
                        if (Ue(this._element) || !this._isShown(this._menu)) return;
                        const e = {
                            relatedTarget: this._element
                        };
                        this._completeHide(e)
                    }
                    dispose() {
                        this._popper && this._popper.destroy(), super.dispose()
                    }
                    update() {
                        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
                    }
                    _completeHide(e) {
                        vt.trigger(this._element, Dn, e).defaultPrevented || ("ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => vt.off(e, "mouseover", ze))), this._popper && this._popper.destroy(), this._menu.classList.remove(Hn), this._element.classList.remove(Hn), this._element.setAttribute("aria-expanded", "false"), Dt.removeDataAttribute(this._menu, "popper"), vt.trigger(this._element, Ln, e))
                    }
                    _getConfig(e) {
                        if (e = { ...this.constructor.Default,
                                ...Dt.getDataAttributes(this._element),
                                ...e
                            }, Xe(En, e, this.constructor.DefaultType), "object" == typeof e.reference && !Be(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(`${En.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
                        return e
                    }
                    _createPopper(e) {
                        if (void 0 === r) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                        let t = this._element;
                        "parent" === this._config.reference ? t = e : Be(this._config.reference) ? t = Fe(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
                        const n = this._getPopperConfig(),
                            i = n.modifiers.find((e => "applyStyles" === e.name && !1 === e.enabled));
                        this._popper = Pe(t, this._menu, n), i && Dt.setDataAttribute(this._menu, "popper", "static")
                    }
                    _isShown(e = this._element) {
                        return e.classList.contains(Hn)
                    }
                    _getMenuElement() {
                        return Lt.next(this._element, jn)[0]
                    }
                    _getPlacement() {
                        const e = this._element.parentNode;
                        if (e.classList.contains("dropend")) return Wn;
                        if (e.classList.contains("dropstart")) return Un;
                        const t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
                        return e.classList.contains("dropup") ? t ? Bn : $n : t ? Xn : Fn
                    }
                    _detectNavbar() {
                        return null !== this._element.closest(".navbar")
                    }
                    _getOffset() {
                        const {
                            offset: e
                        } = this._config;
                        return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
                    }
                    _getPopperConfig() {
                        const e = {
                            placement: this._getPlacement(),
                            modifiers: [{
                                name: "preventOverflow",
                                options: {
                                    boundary: this._config.boundary
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: this._getOffset()
                                }
                            }]
                        };
                        return "static" === this._config.display && (e.modifiers = [{
                            name: "applyStyles",
                            enabled: !1
                        }]), { ...e,
                            ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
                        }
                    }
                    _selectMenuItem({
                        key: e,
                        target: t
                    }) {
                        const n = Lt.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(We);
                        n.length && tt(n, t, e === An, !n.includes(t)).focus()
                    }
                    static jQueryInterface(e) {
                        return this.each((function() {
                            const t = Yn.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                                t[e]()
                            }
                        }))
                    }
                    static clearMenus(e) {
                        if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
                        const t = Lt.find(qn);
                        for (let n = 0, r = t.length; n < r; n++) {
                            const r = Yn.getInstance(t[n]);
                            if (!r || !1 === r._config.autoClose) continue;
                            if (!r._isShown()) continue;
                            const i = {
                                relatedTarget: r._element
                            };
                            if (e) {
                                const t = e.composedPath(),
                                    n = t.includes(r._menu);
                                if (t.includes(r._element) || "inside" === r._config.autoClose && !n || "outside" === r._config.autoClose && n) continue;
                                if (r._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                                "click" === e.type && (i.clickEvent = e)
                            }
                            r._completeHide(i)
                        }
                    }
                    static getParentFromElement(e) {
                        return je(e) || e.parentNode
                    }
                    static dataApiKeydownHandler(e) {
                        if (/input|textarea/i.test(e.target.tagName) ? e.key === Cn || e.key !== Tn && (e.key !== An && e.key !== On || e.target.closest(jn)) : !kn.test(e.key)) return;
                        const t = this.classList.contains(Hn);
                        if (!t && e.key === Tn) return;
                        if (e.preventDefault(), e.stopPropagation(), Ue(this)) return;
                        const n = this.matches(qn) ? this : Lt.prev(this, qn)[0],
                            r = Yn.getOrCreateInstance(n);
                        if (e.key !== Tn) return e.key === On || e.key === An ? (t || r.show(), void r._selectMenuItem(e)) : void(t && e.key !== Cn || Yn.clearMenus());
                        r.hide()
                    }
                }
                vt.on(document, Mn, qn, Yn.dataApiKeydownHandler), vt.on(document, Mn, jn, Yn.dataApiKeydownHandler), vt.on(document, Pn, Yn.clearMenus), vt.on(document, Rn, Yn.clearMenus), vt.on(document, Pn, qn, (function(e) {
                    e.preventDefault(), Yn.getOrCreateInstance(this).toggle()
                })), Je(Yn);
                const Vn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    Kn = ".sticky-top";
                class Gn {
                    constructor() {
                        this._element = document.body
                    }
                    getWidth() {
                        const e = document.documentElement.clientWidth;
                        return Math.abs(window.innerWidth - e)
                    }
                    hide() {
                        const e = this.getWidth();
                        this._disableOverFlow(), this._setElementAttributes(this._element, "paddingRight", (t => t + e)), this._setElementAttributes(Vn, "paddingRight", (t => t + e)), this._setElementAttributes(Kn, "marginRight", (t => t - e))
                    }
                    _disableOverFlow() {
                        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
                    }
                    _setElementAttributes(e, t, n) {
                        const r = this.getWidth();
                        this._applyManipulationCallback(e, (e => {
                            if (e !== this._element && window.innerWidth > e.clientWidth + r) return;
                            this._saveInitialAttribute(e, t);
                            const i = window.getComputedStyle(e)[t];
                            e.style[t] = `${n(Number.parseFloat(i))}px`
                        }))
                    }
                    reset() {
                        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, "paddingRight"), this._resetElementAttributes(Vn, "paddingRight"), this._resetElementAttributes(Kn, "marginRight")
                    }
                    _saveInitialAttribute(e, t) {
                        const n = e.style[t];
                        n && Dt.setDataAttribute(e, t, n)
                    }
                    _resetElementAttributes(e, t) {
                        this._applyManipulationCallback(e, (e => {
                            const n = Dt.getDataAttribute(e, t);
                            void 0 === n ? e.style.removeProperty(t) : (Dt.removeDataAttribute(e, t), e.style[t] = n)
                        }))
                    }
                    _applyManipulationCallback(e, t) {
                        Be(e) ? t(e) : Lt.find(e, this._element).forEach(t)
                    }
                    isOverflowing() {
                        return this.getWidth() > 0
                    }
                }
                const Jn = {
                        className: "modal-backdrop",
                        isVisible: !0,
                        isAnimated: !1,
                        rootElement: "body",
                        clickCallback: null
                    },
                    Zn = {
                        className: "string",
                        isVisible: "boolean",
                        isAnimated: "boolean",
                        rootElement: "(element|string)",
                        clickCallback: "(function|null)"
                    },
                    er = "backdrop",
                    tr = "show",
                    nr = `mousedown.bs.${er}`;
                class rr {
                    constructor(e) {
                        this._config = this._getConfig(e), this._isAppended = !1, this._element = null
                    }
                    show(e) {
                        this._config.isVisible ? (this._append(), this._config.isAnimated && Ye(this._getElement()), this._getElement().classList.add(tr), this._emulateAnimation((() => {
                            Ze(e)
                        }))) : Ze(e)
                    }
                    hide(e) {
                        this._config.isVisible ? (this._getElement().classList.remove(tr), this._emulateAnimation((() => {
                            this.dispose(), Ze(e)
                        }))) : Ze(e)
                    }
                    _getElement() {
                        if (!this._element) {
                            const e = document.createElement("div");
                            e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
                        }
                        return this._element
                    }
                    _getConfig(e) {
                        return (e = { ...Jn,
                            ..."object" == typeof e ? e : {}
                        }).rootElement = Fe(e.rootElement), Xe(er, e, Zn), e
                    }
                    _append() {
                        this._isAppended || (this._config.rootElement.append(this._getElement()), vt.on(this._getElement(), nr, (() => {
                            Ze(this._config.clickCallback)
                        })), this._isAppended = !0)
                    }
                    dispose() {
                        this._isAppended && (vt.off(this._element, nr), this._element.remove(), this._isAppended = !1)
                    }
                    _emulateAnimation(e) {
                        et(e, this._getElement(), this._config.isAnimated)
                    }
                }
                const ir = {
                        trapElement: null,
                        autofocus: !0
                    },
                    or = {
                        trapElement: "element",
                        autofocus: "boolean"
                    },
                    sr = ".bs.focustrap",
                    ar = `focusin${sr}`,
                    lr = `keydown.tab${sr}`,
                    cr = "backward";
                class ur {
                    constructor(e) {
                        this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
                    }
                    activate() {
                        const {
                            trapElement: e,
                            autofocus: t
                        } = this._config;
                        this._isActive || (t && e.focus(), vt.off(document, sr), vt.on(document, ar, (e => this._handleFocusin(e))), vt.on(document, lr, (e => this._handleKeydown(e))), this._isActive = !0)
                    }
                    deactivate() {
                        this._isActive && (this._isActive = !1, vt.off(document, sr))
                    }
                    _handleFocusin(e) {
                        const {
                            target: t
                        } = e, {
                            trapElement: n
                        } = this._config;
                        if (t === document || t === n || n.contains(t)) return;
                        const r = Lt.focusableChildren(n);
                        0 === r.length ? n.focus() : this._lastTabNavDirection === cr ? r[r.length - 1].focus() : r[0].focus()
                    }
                    _handleKeydown(e) {
                        "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? cr : "forward")
                    }
                    _getConfig(e) {
                        return e = { ...ir,
                            ..."object" == typeof e ? e : {}
                        }, Xe("focustrap", e, or), e
                    }
                }
                const hr = "modal",
                    fr = ".bs.modal",
                    dr = "Escape",
                    pr = {
                        backdrop: !0,
                        keyboard: !0,
                        focus: !0
                    },
                    gr = {
                        backdrop: "(boolean|string)",
                        keyboard: "boolean",
                        focus: "boolean"
                    },
                    mr = `hide${fr}`,
                    vr = `hidePrevented${fr}`,
                    _r = `hidden${fr}`,
                    br = `show${fr}`,
                    yr = `shown${fr}`,
                    wr = `resize${fr}`,
                    Er = `click.dismiss${fr}`,
                    xr = `keydown.dismiss${fr}`,
                    Sr = `mouseup.dismiss${fr}`,
                    Tr = `mousedown.dismiss${fr}`,
                    Cr = `click${fr}.data-api`,
                    Or = "modal-open",
                    Ar = "show",
                    kr = "modal-static";
                class Dr extends yt {
                    constructor(e, t) {
                        super(e), this._config = this._getConfig(t), this._dialog = Lt.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollBar = new Gn
                    }
                    static get Default() {
                        return pr
                    }
                    static get NAME() {
                        return hr
                    }
                    toggle(e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }
                    show(e) {
                        if (this._isShown || this._isTransitioning) return;
                        vt.trigger(this._element, br, {
                            relatedTarget: e
                        }).defaultPrevented || (this._isShown = !0, this._isAnimated() && (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Or), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), vt.on(this._dialog, Tr, (() => {
                            vt.one(this._element, Sr, (e => {
                                e.target === this._element && (this._ignoreBackdropClick = !0)
                            }))
                        })), this._showBackdrop((() => this._showElement(e))))
                    }
                    hide() {
                        if (!this._isShown || this._isTransitioning) return;
                        if (vt.trigger(this._element, mr).defaultPrevented) return;
                        this._isShown = !1;
                        const e = this._isAnimated();
                        e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), this._focustrap.deactivate(), this._element.classList.remove(Ar), vt.off(this._element, Er), vt.off(this._dialog, Tr), this._queueCallback((() => this._hideModal()), this._element, e)
                    }
                    dispose() {
                        [window, this._dialog].forEach((e => vt.off(e, fr))), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                    }
                    handleUpdate() {
                        this._adjustDialog()
                    }
                    _initializeBackDrop() {
                        return new rr({
                            isVisible: Boolean(this._config.backdrop),
                            isAnimated: this._isAnimated()
                        })
                    }
                    _initializeFocusTrap() {
                        return new ur({
                            trapElement: this._element
                        })
                    }
                    _getConfig(e) {
                        return e = { ...pr,
                            ...Dt.getDataAttributes(this._element),
                            ..."object" == typeof e ? e : {}
                        }, Xe(hr, e, gr), e
                    }
                    _showElement(e) {
                        const t = this._isAnimated(),
                            n = Lt.findOne(".modal-body", this._dialog);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), t && Ye(this._element), this._element.classList.add(Ar);
                        this._queueCallback((() => {
                            this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, vt.trigger(this._element, yr, {
                                relatedTarget: e
                            })
                        }), this._dialog, t)
                    }
                    _setEscapeEvent() {
                        this._isShown ? vt.on(this._element, xr, (e => {
                            this._config.keyboard && e.key === dr ? (e.preventDefault(), this.hide()) : this._config.keyboard || e.key !== dr || this._triggerBackdropTransition()
                        })) : vt.off(this._element, xr)
                    }
                    _setResizeEvent() {
                        this._isShown ? vt.on(window, wr, (() => this._adjustDialog())) : vt.off(window, wr)
                    }
                    _hideModal() {
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                            document.body.classList.remove(Or), this._resetAdjustments(), this._scrollBar.reset(), vt.trigger(this._element, _r)
                        }))
                    }
                    _showBackdrop(e) {
                        vt.on(this._element, Er, (e => {
                            this._ignoreBackdropClick ? this._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === this._config.backdrop ? this.hide() : "static" === this._config.backdrop && this._triggerBackdropTransition())
                        })), this._backdrop.show(e)
                    }
                    _isAnimated() {
                        return this._element.classList.contains("fade")
                    }
                    _triggerBackdropTransition() {
                        if (vt.trigger(this._element, vr).defaultPrevented) return;
                        const {
                            classList: e,
                            scrollHeight: t,
                            style: n
                        } = this._element, r = t > document.documentElement.clientHeight;
                        !r && "hidden" === n.overflowY || e.contains(kr) || (r || (n.overflowY = "hidden"), e.add(kr), this._queueCallback((() => {
                            e.remove(kr), r || this._queueCallback((() => {
                                n.overflowY = ""
                            }), this._dialog)
                        }), this._dialog), this._element.focus())
                    }
                    _adjustDialog() {
                        const e = this._element.scrollHeight > document.documentElement.clientHeight,
                            t = this._scrollBar.getWidth(),
                            n = t > 0;
                        (!n && e && !Ge() || n && !e && Ge()) && (this._element.style.paddingLeft = `${t}px`), (n && !e && !Ge() || !n && e && Ge()) && (this._element.style.paddingRight = `${t}px`)
                    }
                    _resetAdjustments() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }
                    static jQueryInterface(e, t) {
                        return this.each((function() {
                            const n = Dr.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === n[e]) throw new TypeError(`No method named "${e}"`);
                                n[e](t)
                            }
                        }))
                    }
                }
                vt.on(document, Cr, '[data-bs-toggle="modal"]', (function(e) {
                    const t = je(this);
                    ["A", "AREA"].includes(this.tagName) && e.preventDefault(), vt.one(t, br, (e => {
                        e.defaultPrevented || vt.one(t, _r, (() => {
                            We(this) && this.focus()
                        }))
                    }));
                    const n = Lt.findOne(".modal.show");
                    n && Dr.getInstance(n).hide();
                    Dr.getOrCreateInstance(t).toggle(this)
                })), wt(Dr), Je(Dr);
                const Lr = "offcanvas",
                    Nr = ".bs.offcanvas",
                    Ir = ".data-api",
                    Pr = `load${Nr}${Ir}`,
                    Mr = {
                        backdrop: !0,
                        keyboard: !0,
                        scroll: !1
                    },
                    Rr = {
                        backdrop: "boolean",
                        keyboard: "boolean",
                        scroll: "boolean"
                    },
                    Hr = "show",
                    qr = ".offcanvas.show",
                    jr = `show${Nr}`,
                    $r = `shown${Nr}`,
                    Br = `hide${Nr}`,
                    Fr = `hidden${Nr}`,
                    Xr = `click${Nr}${Ir}`,
                    Wr = `keydown.dismiss${Nr}`;
                class Ur extends yt {
                    constructor(e, t) {
                        super(e), this._config = this._getConfig(t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
                    }
                    static get NAME() {
                        return Lr
                    }
                    static get Default() {
                        return Mr
                    }
                    toggle(e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }
                    show(e) {
                        if (this._isShown) return;
                        if (vt.trigger(this._element, jr, {
                                relatedTarget: e
                            }).defaultPrevented) return;
                        this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (new Gn).hide(), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Hr);
                        this._queueCallback((() => {
                            this._config.scroll || this._focustrap.activate(), vt.trigger(this._element, $r, {
                                relatedTarget: e
                            })
                        }), this._element, !0)
                    }
                    hide() {
                        if (!this._isShown) return;
                        if (vt.trigger(this._element, Br).defaultPrevented) return;
                        this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.remove(Hr), this._backdrop.hide();
                        this._queueCallback((() => {
                            this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._element.style.visibility = "hidden", this._config.scroll || (new Gn).reset(), vt.trigger(this._element, Fr)
                        }), this._element, !0)
                    }
                    dispose() {
                        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
                    }
                    _getConfig(e) {
                        return e = { ...Mr,
                            ...Dt.getDataAttributes(this._element),
                            ..."object" == typeof e ? e : {}
                        }, Xe(Lr, e, Rr), e
                    }
                    _initializeBackDrop() {
                        return new rr({
                            className: "offcanvas-backdrop",
                            isVisible: this._config.backdrop,
                            isAnimated: !0,
                            rootElement: this._element.parentNode,
                            clickCallback: () => this.hide()
                        })
                    }
                    _initializeFocusTrap() {
                        return new ur({
                            trapElement: this._element
                        })
                    }
                    _addEventListeners() {
                        vt.on(this._element, Wr, (e => {
                            this._config.keyboard && "Escape" === e.key && this.hide()
                        }))
                    }
                    static jQueryInterface(e) {
                        return this.each((function() {
                            const t = Ur.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError(`No method named "${e}"`);
                                t[e](this)
                            }
                        }))
                    }
                }
                vt.on(document, Xr, '[data-bs-toggle="offcanvas"]', (function(e) {
                    const t = je(this);
                    if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), Ue(this)) return;
                    vt.one(t, Fr, (() => {
                        We(this) && this.focus()
                    }));
                    const n = Lt.findOne(qr);
                    n && n !== t && Ur.getInstance(n).hide();
                    Ur.getOrCreateInstance(t).toggle(this)
                })), vt.on(window, Pr, (() => Lt.find(qr).forEach((e => Ur.getOrCreateInstance(e).show())))), wt(Ur), Je(Ur);
                const Qr = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                    zr = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
                    Yr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                    Vr = (e, t) => {
                        const n = e.nodeName.toLowerCase();
                        if (t.includes(n)) return !Qr.has(n) || Boolean(zr.test(e.nodeValue) || Yr.test(e.nodeValue));
                        const r = t.filter((e => e instanceof RegExp));
                        for (let e = 0, t = r.length; e < t; e++)
                            if (r[e].test(n)) return !0;
                        return !1
                    },
                    Kr = {
                        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                        a: ["target", "href", "title", "rel"],
                        area: [],
                        b: [],
                        br: [],
                        col: [],
                        code: [],
                        div: [],
                        em: [],
                        hr: [],
                        h1: [],
                        h2: [],
                        h3: [],
                        h4: [],
                        h5: [],
                        h6: [],
                        i: [],
                        img: ["src", "srcset", "alt", "title", "width", "height"],
                        li: [],
                        ol: [],
                        p: [],
                        pre: [],
                        s: [],
                        small: [],
                        span: [],
                        sub: [],
                        sup: [],
                        strong: [],
                        u: [],
                        ul: []
                    };

                function Gr(e, t, n) {
                    if (!e.length) return e;
                    if (n && "function" == typeof n) return n(e);
                    const r = (new window.DOMParser).parseFromString(e, "text/html"),
                        i = [].concat(...r.body.querySelectorAll("*"));
                    for (let e = 0, n = i.length; e < n; e++) {
                        const n = i[e],
                            r = n.nodeName.toLowerCase();
                        if (!Object.keys(t).includes(r)) {
                            n.remove();
                            continue
                        }
                        const o = [].concat(...n.attributes),
                            s = [].concat(t["*"] || [], t[r] || []);
                        o.forEach((e => {
                            Vr(e, s) || n.removeAttribute(e.nodeName)
                        }))
                    }
                    return r.body.innerHTML
                }
                const Jr = "tooltip",
                    Zr = ".bs.tooltip",
                    ei = new Set(["sanitize", "allowList", "sanitizeFn"]),
                    ti = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(array|string|function)",
                        container: "(string|element|boolean)",
                        fallbackPlacements: "array",
                        boundary: "(string|element)",
                        customClass: "(string|function)",
                        sanitize: "boolean",
                        sanitizeFn: "(null|function)",
                        allowList: "object",
                        popperConfig: "(null|object|function)"
                    },
                    ni = {
                        AUTO: "auto",
                        TOP: "top",
                        RIGHT: Ge() ? "left" : "right",
                        BOTTOM: "bottom",
                        LEFT: Ge() ? "right" : "left"
                    },
                    ri = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: [0, 0],
                        container: !1,
                        fallbackPlacements: ["top", "right", "bottom", "left"],
                        boundary: "clippingParents",
                        customClass: "",
                        sanitize: !0,
                        sanitizeFn: null,
                        allowList: Kr,
                        popperConfig: null
                    },
                    ii = {
                        HIDE: `hide${Zr}`,
                        HIDDEN: `hidden${Zr}`,
                        SHOW: `show${Zr}`,
                        SHOWN: `shown${Zr}`,
                        INSERTED: `inserted${Zr}`,
                        CLICK: `click${Zr}`,
                        FOCUSIN: `focusin${Zr}`,
                        FOCUSOUT: `focusout${Zr}`,
                        MOUSEENTER: `mouseenter${Zr}`,
                        MOUSELEAVE: `mouseleave${Zr}`
                    },
                    oi = "fade",
                    si = "show",
                    ai = "show",
                    li = "out",
                    ci = ".tooltip-inner",
                    ui = ".modal",
                    hi = "hide.bs.modal",
                    fi = "hover",
                    di = "focus";
                class pi extends yt {
                    constructor(e, t) {
                        if (void 0 === r) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                        super(e), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(t), this.tip = null, this._setListeners()
                    }
                    static get Default() {
                        return ri
                    }
                    static get NAME() {
                        return Jr
                    }
                    static get Event() {
                        return ii
                    }
                    static get DefaultType() {
                        return ti
                    }
                    enable() {
                        this._isEnabled = !0
                    }
                    disable() {
                        this._isEnabled = !1
                    }
                    toggleEnabled() {
                        this._isEnabled = !this._isEnabled
                    }
                    toggle(e) {
                        if (this._isEnabled)
                            if (e) {
                                const t = this._initializeOnDelegatedTarget(e);
                                t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                            } else {
                                if (this.getTipElement().classList.contains(si)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }
                    dispose() {
                        clearTimeout(this._timeout), vt.off(this._element.closest(ui), hi, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
                    }
                    show() {
                        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                        if (!this.isWithContent() || !this._isEnabled) return;
                        const e = vt.trigger(this._element, this.constructor.Event.SHOW),
                            t = Qe(this._element),
                            n = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
                        if (e.defaultPrevented || !n) return;
                        "tooltip" === this.constructor.NAME && this.tip && this.getTitle() !== this.tip.querySelector(ci).innerHTML && (this._disposePopper(), this.tip.remove(), this.tip = null);
                        const r = this.getTipElement(),
                            i = (e => {
                                do {
                                    e += Math.floor(1e6 * Math.random())
                                } while (document.getElementById(e));
                                return e
                            })(this.constructor.NAME);
                        r.setAttribute("id", i), this._element.setAttribute("aria-describedby", i), this._config.animation && r.classList.add(oi);
                        const o = "function" == typeof this._config.placement ? this._config.placement.call(this, r, this._element) : this._config.placement,
                            s = this._getAttachment(o);
                        this._addAttachmentClass(s);
                        const {
                            container: a
                        } = this._config;
                        bt.set(r, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(r), vt.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Pe(this._element, r, this._getPopperConfig(s)), r.classList.add(si);
                        const l = this._resolvePossibleFunction(this._config.customClass);
                        l && r.classList.add(...l.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => {
                            vt.on(e, "mouseover", ze)
                        }));
                        const c = this.tip.classList.contains(oi);
                        this._queueCallback((() => {
                            const e = this._hoverState;
                            this._hoverState = null, vt.trigger(this._element, this.constructor.Event.SHOWN), e === li && this._leave(null, this)
                        }), this.tip, c)
                    }
                    hide() {
                        if (!this._popper) return;
                        const e = this.getTipElement();
                        if (vt.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                        e.classList.remove(si), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((e => vt.off(e, "mouseover", ze))), this._activeTrigger.click = !1, this._activeTrigger[di] = !1, this._activeTrigger[fi] = !1;
                        const t = this.tip.classList.contains(oi);
                        this._queueCallback((() => {
                            this._isWithActiveTrigger() || (this._hoverState !== ai && e.remove(), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), vt.trigger(this._element, this.constructor.Event.HIDDEN), this._disposePopper())
                        }), this.tip, t), this._hoverState = ""
                    }
                    update() {
                        null !== this._popper && this._popper.update()
                    }
                    isWithContent() {
                        return Boolean(this.getTitle())
                    }
                    getTipElement() {
                        if (this.tip) return this.tip;
                        const e = document.createElement("div");
                        e.innerHTML = this._config.template;
                        const t = e.children[0];
                        return this.setContent(t), t.classList.remove(oi, si), this.tip = t, this.tip
                    }
                    setContent(e) {
                        this._sanitizeAndSetContent(e, this.getTitle(), ci)
                    }
                    _sanitizeAndSetContent(e, t, n) {
                        const r = Lt.findOne(n, e);
                        t || !r ? this.setElementContent(r, t) : r.remove()
                    }
                    setElementContent(e, t) {
                        if (null !== e) return Be(t) ? (t = Fe(t), void(this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.append(t)) : e.textContent = t.textContent)) : void(this._config.html ? (this._config.sanitize && (t = Gr(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t)
                    }
                    getTitle() {
                        const e = this._element.getAttribute("data-bs-original-title") || this._config.title;
                        return this._resolvePossibleFunction(e)
                    }
                    updateAttachment(e) {
                        return "right" === e ? "end" : "left" === e ? "start" : e
                    }
                    _initializeOnDelegatedTarget(e, t) {
                        return t || this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
                    }
                    _getOffset() {
                        const {
                            offset: e
                        } = this._config;
                        return "string" == typeof e ? e.split(",").map((e => Number.parseInt(e, 10))) : "function" == typeof e ? t => e(t, this._element) : e
                    }
                    _resolvePossibleFunction(e) {
                        return "function" == typeof e ? e.call(this._element) : e
                    }
                    _getPopperConfig(e) {
                        const t = {
                            placement: e,
                            modifiers: [{
                                name: "flip",
                                options: {
                                    fallbackPlacements: this._config.fallbackPlacements
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: this._getOffset()
                                }
                            }, {
                                name: "preventOverflow",
                                options: {
                                    boundary: this._config.boundary
                                }
                            }, {
                                name: "arrow",
                                options: {
                                    element: `.${this.constructor.NAME}-arrow`
                                }
                            }, {
                                name: "onChange",
                                enabled: !0,
                                phase: "afterWrite",
                                fn: e => this._handlePopperPlacementChange(e)
                            }],
                            onFirstUpdate: e => {
                                e.options.placement !== e.placement && this._handlePopperPlacementChange(e)
                            }
                        };
                        return { ...t,
                            ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
                        }
                    }
                    _addAttachmentClass(e) {
                        this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)
                    }
                    _getAttachment(e) {
                        return ni[e.toUpperCase()]
                    }
                    _setListeners() {
                        this._config.trigger.split(" ").forEach((e => {
                            if ("click" === e) vt.on(this._element, this.constructor.Event.CLICK, this._config.selector, (e => this.toggle(e)));
                            else if ("manual" !== e) {
                                const t = e === fi ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                                    n = e === fi ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                                vt.on(this._element, t, this._config.selector, (e => this._enter(e))), vt.on(this._element, n, this._config.selector, (e => this._leave(e)))
                            }
                        })), this._hideModalHandler = () => {
                            this._element && this.hide()
                        }, vt.on(this._element.closest(ui), hi, this._hideModalHandler), this._config.selector ? this._config = { ...this._config,
                            trigger: "manual",
                            selector: ""
                        } : this._fixTitle()
                    }
                    _fixTitle() {
                        const e = this._element.getAttribute("title"),
                            t = typeof this._element.getAttribute("data-bs-original-title");
                        (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""))
                    }
                    _enter(e, t) {
                        t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? di : fi] = !0), t.getTipElement().classList.contains(si) || t._hoverState === ai ? t._hoverState = ai : (clearTimeout(t._timeout), t._hoverState = ai, t._config.delay && t._config.delay.show ? t._timeout = setTimeout((() => {
                            t._hoverState === ai && t.show()
                        }), t._config.delay.show) : t.show())
                    }
                    _leave(e, t) {
                        t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? di : fi] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = li, t._config.delay && t._config.delay.hide ? t._timeout = setTimeout((() => {
                            t._hoverState === li && t.hide()
                        }), t._config.delay.hide) : t.hide())
                    }
                    _isWithActiveTrigger() {
                        for (const e in this._activeTrigger)
                            if (this._activeTrigger[e]) return !0;
                        return !1
                    }
                    _getConfig(e) {
                        const t = Dt.getDataAttributes(this._element);
                        return Object.keys(t).forEach((e => {
                            ei.has(e) && delete t[e]
                        })), (e = { ...this.constructor.Default,
                            ...t,
                            ..."object" == typeof e && e ? e : {}
                        }).container = !1 === e.container ? document.body : Fe(e.container), "number" == typeof e.delay && (e.delay = {
                            show: e.delay,
                            hide: e.delay
                        }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), Xe(Jr, e, this.constructor.DefaultType), e.sanitize && (e.template = Gr(e.template, e.allowList, e.sanitizeFn)), e
                    }
                    _getDelegateConfig() {
                        const e = {};
                        for (const t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
                        return e
                    }
                    _cleanTipClass() {
                        const e = this.getTipElement(),
                            t = new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`, "g"),
                            n = e.getAttribute("class").match(t);
                        null !== n && n.length > 0 && n.map((e => e.trim())).forEach((t => e.classList.remove(t)))
                    }
                    _getBasicClassPrefix() {
                        return "bs-tooltip"
                    }
                    _handlePopperPlacementChange(e) {
                        const {
                            state: t
                        } = e;
                        t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)))
                    }
                    _disposePopper() {
                        this._popper && (this._popper.destroy(), this._popper = null)
                    }
                    static jQueryInterface(e) {
                        return this.each((function() {
                            const t = pi.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                                t[e]()
                            }
                        }))
                    }
                }
                Je(pi);
                const gi = ".bs.popover",
                    mi = { ...pi.Default,
                        placement: "right",
                        offset: [0, 8],
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                    },
                    vi = { ...pi.DefaultType,
                        content: "(string|element|function)"
                    },
                    _i = {
                        HIDE: `hide${gi}`,
                        HIDDEN: `hidden${gi}`,
                        SHOW: `show${gi}`,
                        SHOWN: `shown${gi}`,
                        INSERTED: `inserted${gi}`,
                        CLICK: `click${gi}`,
                        FOCUSIN: `focusin${gi}`,
                        FOCUSOUT: `focusout${gi}`,
                        MOUSEENTER: `mouseenter${gi}`,
                        MOUSELEAVE: `mouseleave${gi}`
                    };
                class bi extends pi {
                    static get Default() {
                        return mi
                    }
                    static get NAME() {
                        return "popover"
                    }
                    static get Event() {
                        return _i
                    }
                    static get DefaultType() {
                        return vi
                    }
                    isWithContent() {
                        return this.getTitle() || this._getContent()
                    }
                    setContent(e) {
                        this._sanitizeAndSetContent(e, this.getTitle(), ".popover-header"), this._sanitizeAndSetContent(e, this._getContent(), ".popover-body")
                    }
                    _getContent() {
                        return this._resolvePossibleFunction(this._config.content)
                    }
                    _getBasicClassPrefix() {
                        return "bs-popover"
                    }
                    static jQueryInterface(e) {
                        return this.each((function() {
                            const t = bi.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                                t[e]()
                            }
                        }))
                    }
                }
                Je(bi);
                const yi = "scrollspy",
                    wi = ".bs.scrollspy",
                    Ei = {
                        offset: 10,
                        method: "auto",
                        target: ""
                    },
                    xi = {
                        offset: "number",
                        method: "string",
                        target: "(string|element)"
                    },
                    Si = `activate${wi}`,
                    Ti = `scroll${wi}`,
                    Ci = `load${wi}.data-api`,
                    Oi = "dropdown-item",
                    Ai = "active",
                    ki = ".nav-link",
                    Di = ".list-group-item",
                    Li = `${ki}, ${Di}, .${Oi}`,
                    Ni = "position";
                class Ii extends yt {
                    constructor(e, t) {
                        super(e), this._scrollElement = "BODY" === this._element.tagName ? window : this._element, this._config = this._getConfig(t), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, vt.on(this._scrollElement, Ti, (() => this._process())), this.refresh(), this._process()
                    }
                    static get Default() {
                        return Ei
                    }
                    static get NAME() {
                        return yi
                    }
                    refresh() {
                        const e = this._scrollElement === this._scrollElement.window ? "offset" : Ni,
                            t = "auto" === this._config.method ? e : this._config.method,
                            n = t === Ni ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                        Lt.find(Li, this._config.target).map((e => {
                            const r = qe(e),
                                i = r ? Lt.findOne(r) : null;
                            if (i) {
                                const e = i.getBoundingClientRect();
                                if (e.width || e.height) return [Dt[t](i).top + n, r]
                            }
                            return null
                        })).filter((e => e)).sort(((e, t) => e[0] - t[0])).forEach((e => {
                            this._offsets.push(e[0]), this._targets.push(e[1])
                        }))
                    }
                    dispose() {
                        vt.off(this._scrollElement, wi), super.dispose()
                    }
                    _getConfig(e) {
                        return (e = { ...Ei,
                            ...Dt.getDataAttributes(this._element),
                            ..."object" == typeof e && e ? e : {}
                        }).target = Fe(e.target) || document.documentElement, Xe(yi, e, xi), e
                    }
                    _getScrollTop() {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                    }
                    _getScrollHeight() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }
                    _getOffsetHeight() {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                    }
                    _process() {
                        const e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            n = this._config.offset + t - this._getOffsetHeight();
                        if (this._scrollHeight !== t && this.refresh(), e >= n) {
                            const e = this._targets[this._targets.length - 1];
                            this._activeTarget !== e && this._activate(e)
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                            for (let t = this._offsets.length; t--;) {
                                this._activeTarget !== this._targets[t] && e >= this._offsets[t] && (void 0 === this._offsets[t + 1] || e < this._offsets[t + 1]) && this._activate(this._targets[t])
                            }
                        }
                    }
                    _activate(e) {
                        this._activeTarget = e, this._clear();
                        const t = Li.split(",").map((t => `${t}[data-bs-target="${e}"],${t}[href="${e}"]`)),
                            n = Lt.findOne(t.join(","), this._config.target);
                        n.classList.add(Ai), n.classList.contains(Oi) ? Lt.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add(Ai) : Lt.parents(n, ".nav, .list-group").forEach((e => {
                            Lt.prev(e, `${ki}, ${Di}`).forEach((e => e.classList.add(Ai))), Lt.prev(e, ".nav-item").forEach((e => {
                                Lt.children(e, ki).forEach((e => e.classList.add(Ai)))
                            }))
                        })), vt.trigger(this._scrollElement, Si, {
                            relatedTarget: e
                        })
                    }
                    _clear() {
                        Lt.find(Li, this._config.target).filter((e => e.classList.contains(Ai))).forEach((e => e.classList.remove(Ai)))
                    }
                    static jQueryInterface(e) {
                        return this.each((function() {
                            const t = Ii.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                                t[e]()
                            }
                        }))
                    }
                }
                vt.on(window, Ci, (() => {
                    Lt.find('[data-bs-spy="scroll"]').forEach((e => new Ii(e)))
                })), Je(Ii);
                const Pi = ".bs.tab",
                    Mi = `hide${Pi}`,
                    Ri = `hidden${Pi}`,
                    Hi = `show${Pi}`,
                    qi = `shown${Pi}`,
                    ji = `click${Pi}.data-api`,
                    $i = "active",
                    Bi = "fade",
                    Fi = "show",
                    Xi = ".active",
                    Wi = ":scope > li > .active";
                class Ui extends yt {
                    static get NAME() {
                        return "tab"
                    }
                    show() {
                        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains($i)) return;
                        let e;
                        const t = je(this._element),
                            n = this._element.closest(".nav, .list-group");
                        if (n) {
                            const t = "UL" === n.nodeName || "OL" === n.nodeName ? Wi : Xi;
                            e = Lt.find(t, n), e = e[e.length - 1]
                        }
                        const r = e ? vt.trigger(e, Mi, {
                            relatedTarget: this._element
                        }) : null;
                        if (vt.trigger(this._element, Hi, {
                                relatedTarget: e
                            }).defaultPrevented || null !== r && r.defaultPrevented) return;
                        this._activate(this._element, n);
                        const i = () => {
                            vt.trigger(e, Ri, {
                                relatedTarget: this._element
                            }), vt.trigger(this._element, qi, {
                                relatedTarget: e
                            })
                        };
                        t ? this._activate(t, t.parentNode, i) : i()
                    }
                    _activate(e, t, n) {
                        const r = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? Lt.children(t, Xi) : Lt.find(Wi, t))[0],
                            i = n && r && r.classList.contains(Bi),
                            o = () => this._transitionComplete(e, r, n);
                        r && i ? (r.classList.remove(Fi), this._queueCallback(o, e, !0)) : o()
                    }
                    _transitionComplete(e, t, n) {
                        if (t) {
                            t.classList.remove($i);
                            const e = Lt.findOne(":scope > .dropdown-menu .active", t.parentNode);
                            e && e.classList.remove($i), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                        }
                        e.classList.add($i), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), Ye(e), e.classList.contains(Bi) && e.classList.add(Fi);
                        let r = e.parentNode;
                        if (r && "LI" === r.nodeName && (r = r.parentNode), r && r.classList.contains("dropdown-menu")) {
                            const t = e.closest(".dropdown");
                            t && Lt.find(".dropdown-toggle", t).forEach((e => e.classList.add($i))), e.setAttribute("aria-expanded", !0)
                        }
                        n && n()
                    }
                    static jQueryInterface(e) {
                        return this.each((function() {
                            const t = Ui.getOrCreateInstance(this);
                            if ("string" == typeof e) {
                                if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                                t[e]()
                            }
                        }))
                    }
                }
                vt.on(document, ji, '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', (function(e) {
                    if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), Ue(this)) return;
                    Ui.getOrCreateInstance(this).show()
                })), Je(Ui);
                const Qi = "toast",
                    zi = ".bs.toast",
                    Yi = `mouseover${zi}`,
                    Vi = `mouseout${zi}`,
                    Ki = `focusin${zi}`,
                    Gi = `focusout${zi}`,
                    Ji = `hide${zi}`,
                    Zi = `hidden${zi}`,
                    eo = `show${zi}`,
                    to = `shown${zi}`,
                    no = "hide",
                    ro = "show",
                    io = "showing",
                    oo = {
                        animation: "boolean",
                        autohide: "boolean",
                        delay: "number"
                    },
                    so = {
                        animation: !0,
                        autohide: !0,
                        delay: 5e3
                    };
                class ao extends yt {
                    constructor(e, t) {
                        super(e), this._config = this._getConfig(t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
                    }
                    static get DefaultType() {
                        return oo
                    }
                    static get Default() {
                        return so
                    }
                    static get NAME() {
                        return Qi
                    }
                    show() {
                        if (vt.trigger(this._element, eo).defaultPrevented) return;
                        this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                        this._element.classList.remove(no), Ye(this._element), this._element.classList.add(ro), this._element.classList.add(io), this._queueCallback((() => {
                            this._element.classList.remove(io), vt.trigger(this._element, to), this._maybeScheduleHide()
                        }), this._element, this._config.animation)
                    }
                    hide() {
                        if (!this._element.classList.contains(ro)) return;
                        if (vt.trigger(this._element, Ji).defaultPrevented) return;
                        this._element.classList.add(io), this._queueCallback((() => {
                            this._element.classList.add(no), this._element.classList.remove(io), this._element.classList.remove(ro), vt.trigger(this._element, Zi)
                        }), this._element, this._config.animation)
                    }
                    dispose() {
                        this._clearTimeout(), this._element.classList.contains(ro) && this._element.classList.remove(ro), super.dispose()
                    }
                    _getConfig(e) {
                        return e = { ...so,
                            ...Dt.getDataAttributes(this._element),
                            ..."object" == typeof e && e ? e : {}
                        }, Xe(Qi, e, this.constructor.DefaultType), e
                    }
                    _maybeScheduleHide() {
                        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout((() => {
                            this.hide()
                        }), this._config.delay)))
                    }
                    _onInteraction(e, t) {
                        switch (e.type) {
                            case "mouseover":
                            case "mouseout":
                                this._hasMouseInteraction = t;
                                break;
                            case "focusin":
                            case "focusout":
                                this._hasKeyboardInteraction = t
                        }
                        if (t) return void this._clearTimeout();
                        const n = e.relatedTarget;
                        this._element === n || this._element.contains(n) || this._maybeScheduleHide()
                    }
                    _setListeners() {
                        vt.on(this._element, Yi, (e => this._onInteraction(e, !0))), vt.on(this._element, Vi, (e => this._onInteraction(e, !1))), vt.on(this._element, Ki, (e => this._onInteraction(e, !0))), vt.on(this._element, Gi, (e => this._onInteraction(e, !1)))
                    }
                    _clearTimeout() {
                        clearTimeout(this._timeout), this._timeout = null
                    }
                    static jQueryInterface(e) {
                        return this.each((function() {
                            const t = ao.getOrCreateInstance(this, e);
                            if ("string" == typeof e) {
                                if (void 0 === t[e]) throw new TypeError(`No method named "${e}"`);
                                t[e](this)
                            }
                        }))
                    }
                }
                wt(ao), Je(ao);
                var lo = n(28);

                function co(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function uo(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? co(Object(n), !0).forEach((function(t) {
                            fo(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : co(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }

                function ho(e) {
                    return ho = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, ho(e)
                }

                function fo(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function po() {
                    return po = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }, po.apply(this, arguments)
                }

                function go(e, t) {
                    if (null == e) return {};
                    var n, r, i = function(e, t) {
                        if (null == e) return {};
                        var n, r, i = {},
                            o = Object.keys(e);
                        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                    return i
                }

                function mo(e) {
                    if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(e)
                }
                var vo = mo(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
                    _o = mo(/Edge/i),
                    bo = mo(/firefox/i),
                    yo = mo(/safari/i) && !mo(/chrome/i) && !mo(/android/i),
                    wo = mo(/iP(ad|od|hone)/i),
                    Eo = mo(/chrome/i) && mo(/android/i),
                    xo = {
                        capture: !1,
                        passive: !1
                    };

                function So(e, t, n) {
                    e.addEventListener(t, n, !vo && xo)
                }

                function To(e, t, n) {
                    e.removeEventListener(t, n, !vo && xo)
                }

                function Co(e, t) {
                    if (t) {
                        if (">" === t[0] && (t = t.substring(1)), e) try {
                            if (e.matches) return e.matches(t);
                            if (e.msMatchesSelector) return e.msMatchesSelector(t);
                            if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t)
                        } catch (e) {
                            return !1
                        }
                        return !1
                    }
                }

                function Oo(e) {
                    return e.host && e !== document && e.host.nodeType ? e.host : e.parentNode
                }

                function Ao(e, t, n, r) {
                    if (e) {
                        n = n || document;
                        do {
                            if (null != t && (">" === t[0] ? e.parentNode === n && Co(e, t) : Co(e, t)) || r && e === n) return e;
                            if (e === n) break
                        } while (e = Oo(e))
                    }
                    return null
                }
                var ko, Do = /\s+/g;

                function Lo(e, t, n) {
                    if (e && t)
                        if (e.classList) e.classList[n ? "add" : "remove"](t);
                        else {
                            var r = (" " + e.className + " ").replace(Do, " ").replace(" " + t + " ", " ");
                            e.className = (r + (n ? " " + t : "")).replace(Do, " ")
                        }
                }

                function No(e, t, n) {
                    var r = e && e.style;
                    if (r) {
                        if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), void 0 === t ? n : n[t];
                        t in r || -1 !== t.indexOf("webkit") || (t = "-webkit-" + t), r[t] = n + ("string" == typeof n ? "" : "px")
                    }
                }

                function Io(e, t) {
                    var n = "";
                    if ("string" == typeof e) n = e;
                    else
                        do {
                            var r = No(e, "transform");
                            r && "none" !== r && (n = r + " " + n)
                        } while (!t && (e = e.parentNode));
                    var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
                    return i && new i(n)
                }

                function Po(e, t, n) {
                    if (e) {
                        var r = e.getElementsByTagName(t),
                            i = 0,
                            o = r.length;
                        if (n)
                            for (; i < o; i++) n(r[i], i);
                        return r
                    }
                    return []
                }

                function Mo() {
                    var e = document.scrollingElement;
                    return e || document.documentElement
                }

                function Ro(e, t, n, r, i) {
                    if (e.getBoundingClientRect || e === window) {
                        var o, s, a, l, c, u, h;
                        if (e !== window && e.parentNode && e !== Mo() ? (s = (o = e.getBoundingClientRect()).top, a = o.left, l = o.bottom, c = o.right, u = o.height, h = o.width) : (s = 0, a = 0, l = window.innerHeight, c = window.innerWidth, u = window.innerHeight, h = window.innerWidth), (t || n) && e !== window && (i = i || e.parentNode, !vo))
                            do {
                                if (i && i.getBoundingClientRect && ("none" !== No(i, "transform") || n && "static" !== No(i, "position"))) {
                                    var f = i.getBoundingClientRect();
                                    s -= f.top + parseInt(No(i, "border-top-width")), a -= f.left + parseInt(No(i, "border-left-width")), l = s + o.height, c = a + o.width;
                                    break
                                }
                            } while (i = i.parentNode);
                        if (r && e !== window) {
                            var d = Io(i || e),
                                p = d && d.a,
                                g = d && d.d;
                            d && (l = (s /= g) + (u /= g), c = (a /= p) + (h /= p))
                        }
                        return {
                            top: s,
                            left: a,
                            bottom: l,
                            right: c,
                            width: h,
                            height: u
                        }
                    }
                }

                function Ho(e, t, n) {
                    for (var r = Fo(e, !0), i = Ro(e)[t]; r;) {
                        var o = Ro(r)[n];
                        if (!("top" === n || "left" === n ? i >= o : i <= o)) return r;
                        if (r === Mo()) break;
                        r = Fo(r, !1)
                    }
                    return !1
                }

                function qo(e, t, n, r) {
                    for (var i = 0, o = 0, s = e.children; o < s.length;) {
                        if ("none" !== s[o].style.display && s[o] !== zs.ghost && (r || s[o] !== zs.dragged) && Ao(s[o], n.draggable, e, !1)) {
                            if (i === t) return s[o];
                            i++
                        }
                        o++
                    }
                    return null
                }

                function jo(e, t) {
                    for (var n = e.lastElementChild; n && (n === zs.ghost || "none" === No(n, "display") || t && !Co(n, t));) n = n.previousElementSibling;
                    return n || null
                }

                function $o(e, t) {
                    var n = 0;
                    if (!e || !e.parentNode) return -1;
                    for (; e = e.previousElementSibling;) "TEMPLATE" === e.nodeName.toUpperCase() || e === zs.clone || t && !Co(e, t) || n++;
                    return n
                }

                function Bo(e) {
                    var t = 0,
                        n = 0,
                        r = Mo();
                    if (e)
                        do {
                            var i = Io(e),
                                o = i.a,
                                s = i.d;
                            t += e.scrollLeft * o, n += e.scrollTop * s
                        } while (e !== r && (e = e.parentNode));
                    return [t, n]
                }

                function Fo(e, t) {
                    if (!e || !e.getBoundingClientRect) return Mo();
                    var n = e,
                        r = !1;
                    do {
                        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                            var i = No(n);
                            if (n.clientWidth < n.scrollWidth && ("auto" == i.overflowX || "scroll" == i.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == i.overflowY || "scroll" == i.overflowY)) {
                                if (!n.getBoundingClientRect || n === document.body) return Mo();
                                if (r || t) return n;
                                r = !0
                            }
                        }
                    } while (n = n.parentNode);
                    return Mo()
                }

                function Xo(e, t) {
                    return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width)
                }

                function Wo(e, t) {
                    return function() {
                        if (!ko) {
                            var n = arguments;
                            1 === n.length ? e.call(this, n[0]) : e.apply(this, n), ko = setTimeout((function() {
                                ko = void 0
                            }), t)
                        }
                    }
                }

                function Uo(e, t, n) {
                    e.scrollLeft += t, e.scrollTop += n
                }

                function Qo(e) {
                    var t = window.Polymer,
                        n = window.jQuery || window.Zepto;
                    return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0)
                }

                function zo(e, t, n) {
                    var r = {};
                    return Array.from(e.children).forEach((function(i) {
                        var o, s, a, l;
                        if (Ao(i, t.draggable, e, !1) && !i.animated && i !== n) {
                            var c = Ro(i);
                            r.left = Math.min(null !== (o = r.left) && void 0 !== o ? o : 1 / 0, c.left), r.top = Math.min(null !== (s = r.top) && void 0 !== s ? s : 1 / 0, c.top), r.right = Math.max(null !== (a = r.right) && void 0 !== a ? a : -1 / 0, c.right), r.bottom = Math.max(null !== (l = r.bottom) && void 0 !== l ? l : -1 / 0, c.bottom)
                        }
                    })), r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r
                }
                var Yo = "Sortable" + (new Date).getTime();

                function Vo() {
                    var e, t = [];
                    return {
                        captureAnimationState: function() {
                            (t = [], this.options.animation) && [].slice.call(this.el.children).forEach((function(e) {
                                if ("none" !== No(e, "display") && e !== zs.ghost) {
                                    t.push({
                                        target: e,
                                        rect: Ro(e)
                                    });
                                    var n = uo({}, t[t.length - 1].rect);
                                    if (e.thisAnimationDuration) {
                                        var r = Io(e, !0);
                                        r && (n.top -= r.f, n.left -= r.e)
                                    }
                                    e.fromRect = n
                                }
                            }))
                        },
                        addAnimationState: function(e) {
                            t.push(e)
                        },
                        removeAnimationState: function(e) {
                            t.splice(function(e, t) {
                                for (var n in e)
                                    if (e.hasOwnProperty(n))
                                        for (var r in t)
                                            if (t.hasOwnProperty(r) && t[r] === e[n][r]) return Number(n);
                                return -1
                            }(t, {
                                target: e
                            }), 1)
                        },
                        animateAll: function(n) {
                            var r = this;
                            if (!this.options.animation) return clearTimeout(e), void("function" == typeof n && n());
                            var i = !1,
                                o = 0;
                            t.forEach((function(e) {
                                var t = 0,
                                    n = e.target,
                                    s = n.fromRect,
                                    a = Ro(n),
                                    l = n.prevFromRect,
                                    c = n.prevToRect,
                                    u = e.rect,
                                    h = Io(n, !0);
                                h && (a.top -= h.f, a.left -= h.e), n.toRect = a, n.thisAnimationDuration && Xo(l, a) && !Xo(s, a) && (u.top - a.top) / (u.left - a.left) == (s.top - a.top) / (s.left - a.left) && (t = function(e, t, n, r) {
                                    return Math.sqrt(Math.pow(t.top - e.top, 2) + Math.pow(t.left - e.left, 2)) / Math.sqrt(Math.pow(t.top - n.top, 2) + Math.pow(t.left - n.left, 2)) * r.animation
                                }(u, l, c, r.options)), Xo(a, s) || (n.prevFromRect = s, n.prevToRect = a, t || (t = r.options.animation), r.animate(n, u, a, t)), t && (i = !0, o = Math.max(o, t), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout((function() {
                                    n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null
                                }), t), n.thisAnimationDuration = t)
                            })), clearTimeout(e), i ? e = setTimeout((function() {
                                "function" == typeof n && n()
                            }), o) : "function" == typeof n && n(), t = []
                        },
                        animate: function(e, t, n, r) {
                            if (r) {
                                No(e, "transition", ""), No(e, "transform", "");
                                var i = Io(this.el),
                                    o = i && i.a,
                                    s = i && i.d,
                                    a = (t.left - n.left) / (o || 1),
                                    l = (t.top - n.top) / (s || 1);
                                e.animatingX = !!a, e.animatingY = !!l, No(e, "transform", "translate3d(" + a + "px," + l + "px,0)"), this.forRepaintDummy = function(e) {
                                    return e.offsetWidth
                                }(e), No(e, "transition", "transform " + r + "ms" + (this.options.easing ? " " + this.options.easing : "")), No(e, "transform", "translate3d(0,0,0)"), "number" == typeof e.animated && clearTimeout(e.animated), e.animated = setTimeout((function() {
                                    No(e, "transition", ""), No(e, "transform", ""), e.animated = !1, e.animatingX = !1, e.animatingY = !1
                                }), r)
                            }
                        }
                    }
                }
                var Ko = [],
                    Go = {
                        initializeByDefault: !0
                    },
                    Jo = {
                        mount: function(e) {
                            for (var t in Go) Go.hasOwnProperty(t) && !(t in e) && (e[t] = Go[t]);
                            Ko.forEach((function(t) {
                                if (t.pluginName === e.pluginName) throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once")
                            })), Ko.push(e)
                        },
                        pluginEvent: function(e, t, n) {
                            var r = this;
                            this.eventCanceled = !1, n.cancel = function() {
                                r.eventCanceled = !0
                            };
                            var i = e + "Global";
                            Ko.forEach((function(r) {
                                t[r.pluginName] && (t[r.pluginName][i] && t[r.pluginName][i](uo({
                                    sortable: t
                                }, n)), t.options[r.pluginName] && t[r.pluginName][e] && t[r.pluginName][e](uo({
                                    sortable: t
                                }, n)))
                            }))
                        },
                        initializePlugins: function(e, t, n, r) {
                            for (var i in Ko.forEach((function(r) {
                                    var i = r.pluginName;
                                    if (e.options[i] || r.initializeByDefault) {
                                        var o = new r(e, t, e.options);
                                        o.sortable = e, o.options = e.options, e[i] = o, po(n, o.defaults)
                                    }
                                })), e.options)
                                if (e.options.hasOwnProperty(i)) {
                                    var o = this.modifyOption(e, i, e.options[i]);
                                    void 0 !== o && (e.options[i] = o)
                                }
                        },
                        getEventProperties: function(e, t) {
                            var n = {};
                            return Ko.forEach((function(r) {
                                "function" == typeof r.eventProperties && po(n, r.eventProperties.call(t[r.pluginName], e))
                            })), n
                        },
                        modifyOption: function(e, t, n) {
                            var r;
                            return Ko.forEach((function(i) {
                                e[i.pluginName] && i.optionListeners && "function" == typeof i.optionListeners[t] && (r = i.optionListeners[t].call(e[i.pluginName], n))
                            })), r
                        }
                    };

                function Zo(e) {
                    var t = e.sortable,
                        n = e.rootEl,
                        r = e.name,
                        i = e.targetEl,
                        o = e.cloneEl,
                        s = e.toEl,
                        a = e.fromEl,
                        l = e.oldIndex,
                        c = e.newIndex,
                        u = e.oldDraggableIndex,
                        h = e.newDraggableIndex,
                        f = e.originalEvent,
                        d = e.putSortable,
                        p = e.extraEventProperties;
                    if (t = t || n && n[Yo]) {
                        var g, m = t.options,
                            v = "on" + r.charAt(0).toUpperCase() + r.substr(1);
                        !window.CustomEvent || vo || _o ? (g = document.createEvent("Event")).initEvent(r, !0, !0) : g = new CustomEvent(r, {
                            bubbles: !0,
                            cancelable: !0
                        }), g.to = s || n, g.from = a || n, g.item = i || n, g.clone = o, g.oldIndex = l, g.newIndex = c, g.oldDraggableIndex = u, g.newDraggableIndex = h, g.originalEvent = f, g.pullMode = d ? d.lastPutMode : void 0;
                        var _ = uo(uo({}, p), Jo.getEventProperties(r, t));
                        for (var b in _) g[b] = _[b];
                        n && n.dispatchEvent(g), m[v] && m[v].call(t, g)
                    }
                }
                var es = ["evt"],
                    ts = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = n.evt,
                            i = go(n, es);
                        Jo.pluginEvent.bind(zs)(e, t, uo({
                            dragEl: rs,
                            parentEl: is,
                            ghostEl: os,
                            rootEl: ss,
                            nextEl: as,
                            lastDownEl: ls,
                            cloneEl: cs,
                            cloneHidden: us,
                            dragStarted: xs,
                            putSortable: ms,
                            activeSortable: zs.active,
                            originalEvent: r,
                            oldIndex: hs,
                            oldDraggableIndex: ds,
                            newIndex: fs,
                            newDraggableIndex: ps,
                            hideGhostForTarget: Xs,
                            unhideGhostForTarget: Ws,
                            cloneNowHidden: function() {
                                us = !0
                            },
                            cloneNowShown: function() {
                                us = !1
                            },
                            dispatchSortableEvent: function(e) {
                                ns({
                                    sortable: t,
                                    name: e,
                                    originalEvent: r
                                })
                            }
                        }, i))
                    };

                function ns(e) {
                    Zo(uo({
                        putSortable: ms,
                        cloneEl: cs,
                        targetEl: rs,
                        rootEl: ss,
                        oldIndex: hs,
                        oldDraggableIndex: ds,
                        newIndex: fs,
                        newDraggableIndex: ps
                    }, e))
                }
                var rs, is, os, ss, as, ls, cs, us, hs, fs, ds, ps, gs, ms, vs, _s, bs, ys, ws, Es, xs, Ss, Ts, Cs, Os, As = !1,
                    ks = !1,
                    Ds = [],
                    Ls = !1,
                    Ns = !1,
                    Is = [],
                    Ps = !1,
                    Ms = [],
                    Rs = "undefined" != typeof document,
                    Hs = wo,
                    qs = _o || vo ? "cssFloat" : "float",
                    js = Rs && !Eo && !wo && "draggable" in document.createElement("div"),
                    $s = function() {
                        if (Rs) {
                            if (vo) return !1;
                            var e = document.createElement("x");
                            return e.style.cssText = "pointer-events:auto", "auto" === e.style.pointerEvents
                        }
                    }(),
                    Bs = function(e, t) {
                        var n = No(e),
                            r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
                            i = qo(e, 0, t),
                            o = qo(e, 1, t),
                            s = i && No(i),
                            a = o && No(o),
                            l = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + Ro(i).width,
                            c = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + Ro(o).width;
                        if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
                        if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
                        if (i && s.float && "none" !== s.float) {
                            var u = "left" === s.float ? "left" : "right";
                            return !o || "both" !== a.clear && a.clear !== u ? "horizontal" : "vertical"
                        }
                        return i && ("block" === s.display || "flex" === s.display || "table" === s.display || "grid" === s.display || l >= r && "none" === n[qs] || o && "none" === n[qs] && l + c > r) ? "vertical" : "horizontal"
                    },
                    Fs = function(e) {
                        function t(e, n) {
                            return function(r, i, o, s) {
                                var a = r.options.group.name && i.options.group.name && r.options.group.name === i.options.group.name;
                                if (null == e && (n || a)) return !0;
                                if (null == e || !1 === e) return !1;
                                if (n && "clone" === e) return e;
                                if ("function" == typeof e) return t(e(r, i, o, s), n)(r, i, o, s);
                                var l = (n ? r : i).options.group.name;
                                return !0 === e || "string" == typeof e && e === l || e.join && e.indexOf(l) > -1
                            }
                        }
                        var n = {},
                            r = e.group;
                        r && "object" == ho(r) || (r = {
                            name: r
                        }), n.name = r.name, n.checkPull = t(r.pull, !0), n.checkPut = t(r.put), n.revertClone = r.revertClone, e.group = n
                    },
                    Xs = function() {
                        !$s && os && No(os, "display", "none")
                    },
                    Ws = function() {
                        !$s && os && No(os, "display", "")
                    };
                Rs && !Eo && document.addEventListener("click", (function(e) {
                    if (ks) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), ks = !1, !1
                }), !0);
                var Us = function(e) {
                        if (rs) {
                            e = e.touches ? e.touches[0] : e;
                            var t = (i = e.clientX, o = e.clientY, Ds.some((function(e) {
                                var t = e[Yo].options.emptyInsertThreshold;
                                if (t && !jo(e)) {
                                    var n = Ro(e),
                                        r = i >= n.left - t && i <= n.right + t,
                                        a = o >= n.top - t && o <= n.bottom + t;
                                    return r && a ? s = e : void 0
                                }
                            })), s);
                            if (t) {
                                var n = {};
                                for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                                n.target = n.rootEl = t, n.preventDefault = void 0, n.stopPropagation = void 0, t[Yo]._onDragOver(n)
                            }
                        }
                        var i, o, s
                    },
                    Qs = function(e) {
                        rs && rs.parentNode[Yo]._isOutsideThisEl(e.target)
                    };

                function zs(e, t) {
                    if (!e || !e.nodeType || 1 !== e.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
                    this.el = e, this.options = t = po({}, t), e[Yo] = this;
                    var n = {
                        group: null,
                        sort: !0,
                        disabled: !1,
                        store: null,
                        handle: null,
                        draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
                        swapThreshold: 1,
                        invertSwap: !1,
                        invertedSwapThreshold: null,
                        removeCloneOnHide: !0,
                        direction: function() {
                            return Bs(e, this.options)
                        },
                        ghostClass: "sortable-ghost",
                        chosenClass: "sortable-chosen",
                        dragClass: "sortable-drag",
                        ignore: "a, img",
                        filter: null,
                        preventOnFilter: !0,
                        animation: 0,
                        easing: null,
                        setData: function(e, t) {
                            e.setData("Text", t.textContent)
                        },
                        dropBubble: !1,
                        dragoverBubble: !1,
                        dataIdAttr: "data-id",
                        delay: 0,
                        delayOnTouchOnly: !1,
                        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
                        forceFallback: !1,
                        fallbackClass: "sortable-fallback",
                        fallbackOnBody: !1,
                        fallbackTolerance: 0,
                        fallbackOffset: {
                            x: 0,
                            y: 0
                        },
                        supportPointer: !1 !== zs.supportPointer && "PointerEvent" in window && !yo,
                        emptyInsertThreshold: 5
                    };
                    for (var r in Jo.initializePlugins(this, e, n), n) !(r in t) && (t[r] = n[r]);
                    for (var i in Fs(t), this) "_" === i.charAt(0) && "function" == typeof this[i] && (this[i] = this[i].bind(this));
                    this.nativeDraggable = !t.forceFallback && js, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? So(e, "pointerdown", this._onTapStart) : (So(e, "mousedown", this._onTapStart), So(e, "touchstart", this._onTapStart)), this.nativeDraggable && (So(e, "dragover", this), So(e, "dragenter", this)), Ds.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), po(this, Vo())
                }

                function Ys(e, t, n, r, i, o, s, a) {
                    var l, c, u = e[Yo],
                        h = u.options.onMove;
                    return !window.CustomEvent || vo || _o ? (l = document.createEvent("Event")).initEvent("move", !0, !0) : l = new CustomEvent("move", {
                        bubbles: !0,
                        cancelable: !0
                    }), l.to = t, l.from = e, l.dragged = n, l.draggedRect = r, l.related = i || t, l.relatedRect = o || Ro(t), l.willInsertAfter = a, l.originalEvent = s, e.dispatchEvent(l), h && (c = h.call(u, l, s)), c
                }

                function Vs(e) {
                    e.draggable = !1
                }

                function Ks() {
                    Ps = !1
                }

                function Gs(e) {
                    for (var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, r = 0; n--;) r += t.charCodeAt(n);
                    return r.toString(36)
                }

                function Js(e) {
                    return setTimeout(e, 0)
                }

                function Zs(e) {
                    return clearTimeout(e)
                }
                zs.prototype = {
                    constructor: zs,
                    _isOutsideThisEl: function(e) {
                        this.el.contains(e) || e === this.el || (Ss = null)
                    },
                    _getDirection: function(e, t) {
                        return "function" == typeof this.options.direction ? this.options.direction.call(this, e, t, rs) : this.options.direction
                    },
                    _onTapStart: function(e) {
                        if (e.cancelable) {
                            var t = this,
                                n = this.el,
                                r = this.options,
                                i = r.preventOnFilter,
                                o = e.type,
                                s = e.touches && e.touches[0] || e.pointerType && "touch" === e.pointerType && e,
                                a = (s || e).target,
                                l = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || a,
                                c = r.filter;
                            if (function(e) {
                                    Ms.length = 0;
                                    var t = e.getElementsByTagName("input"),
                                        n = t.length;
                                    for (; n--;) {
                                        var r = t[n];
                                        r.checked && Ms.push(r)
                                    }
                                }(n), !rs && !(/mousedown|pointerdown/.test(o) && 0 !== e.button || r.disabled) && !l.isContentEditable && (this.nativeDraggable || !yo || !a || "SELECT" !== a.tagName.toUpperCase()) && !((a = Ao(a, r.draggable, n, !1)) && a.animated || ls === a)) {
                                if (hs = $o(a), ds = $o(a, r.draggable), "function" == typeof c) {
                                    if (c.call(this, e, a, this)) return ns({
                                        sortable: t,
                                        rootEl: l,
                                        name: "filter",
                                        targetEl: a,
                                        toEl: n,
                                        fromEl: n
                                    }), ts("filter", t, {
                                        evt: e
                                    }), void(i && e.cancelable && e.preventDefault())
                                } else if (c && (c = c.split(",").some((function(r) {
                                        if (r = Ao(l, r.trim(), n, !1)) return ns({
                                            sortable: t,
                                            rootEl: r,
                                            name: "filter",
                                            targetEl: a,
                                            fromEl: n,
                                            toEl: n
                                        }), ts("filter", t, {
                                            evt: e
                                        }), !0
                                    })))) return void(i && e.cancelable && e.preventDefault());
                                r.handle && !Ao(l, r.handle, n, !1) || this._prepareDragStart(e, s, a)
                            }
                        }
                    },
                    _prepareDragStart: function(e, t, n) {
                        var r, i = this,
                            o = i.el,
                            s = i.options,
                            a = o.ownerDocument;
                        if (n && !rs && n.parentNode === o) {
                            var l = Ro(n);
                            if (ss = o, is = (rs = n).parentNode, as = rs.nextSibling, ls = n, gs = s.group, zs.dragged = rs, vs = {
                                    target: rs,
                                    clientX: (t || e).clientX,
                                    clientY: (t || e).clientY
                                }, ws = vs.clientX - l.left, Es = vs.clientY - l.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, rs.style["will-change"] = "all", r = function() {
                                    ts("delayEnded", i, {
                                        evt: e
                                    }), zs.eventCanceled ? i._onDrop() : (i._disableDelayedDragEvents(), !bo && i.nativeDraggable && (rs.draggable = !0), i._triggerDragStart(e, t), ns({
                                        sortable: i,
                                        name: "choose",
                                        originalEvent: e
                                    }), Lo(rs, s.chosenClass, !0))
                                }, s.ignore.split(",").forEach((function(e) {
                                    Po(rs, e.trim(), Vs)
                                })), So(a, "dragover", Us), So(a, "mousemove", Us), So(a, "touchmove", Us), So(a, "mouseup", i._onDrop), So(a, "touchend", i._onDrop), So(a, "touchcancel", i._onDrop), bo && this.nativeDraggable && (this.options.touchStartThreshold = 4, rs.draggable = !0), ts("delayStart", this, {
                                    evt: e
                                }), !s.delay || s.delayOnTouchOnly && !t || this.nativeDraggable && (_o || vo)) r();
                            else {
                                if (zs.eventCanceled) return void this._onDrop();
                                So(a, "mouseup", i._disableDelayedDrag), So(a, "touchend", i._disableDelayedDrag), So(a, "touchcancel", i._disableDelayedDrag), So(a, "mousemove", i._delayedDragTouchMoveHandler), So(a, "touchmove", i._delayedDragTouchMoveHandler), s.supportPointer && So(a, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(r, s.delay)
                            }
                        }
                    },
                    _delayedDragTouchMoveHandler: function(e) {
                        var t = e.touches ? e.touches[0] : e;
                        Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
                    },
                    _disableDelayedDrag: function() {
                        rs && Vs(rs), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
                    },
                    _disableDelayedDragEvents: function() {
                        var e = this.el.ownerDocument;
                        To(e, "mouseup", this._disableDelayedDrag), To(e, "touchend", this._disableDelayedDrag), To(e, "touchcancel", this._disableDelayedDrag), To(e, "mousemove", this._delayedDragTouchMoveHandler), To(e, "touchmove", this._delayedDragTouchMoveHandler), To(e, "pointermove", this._delayedDragTouchMoveHandler)
                    },
                    _triggerDragStart: function(e, t) {
                        t = t || "touch" == e.pointerType && e, !this.nativeDraggable || t ? this.options.supportPointer ? So(document, "pointermove", this._onTouchMove) : So(document, t ? "touchmove" : "mousemove", this._onTouchMove) : (So(rs, "dragend", this), So(ss, "dragstart", this._onDragStart));
                        try {
                            document.selection ? Js((function() {
                                document.selection.empty()
                            })) : window.getSelection().removeAllRanges()
                        } catch (e) {}
                    },
                    _dragStarted: function(e, t) {
                        if (As = !1, ss && rs) {
                            ts("dragStarted", this, {
                                evt: t
                            }), this.nativeDraggable && So(document, "dragover", Qs);
                            var n = this.options;
                            !e && Lo(rs, n.dragClass, !1), Lo(rs, n.ghostClass, !0), zs.active = this, e && this._appendGhost(), ns({
                                sortable: this,
                                name: "start",
                                originalEvent: t
                            })
                        } else this._nulling()
                    },
                    _emulateDragOver: function() {
                        if (_s) {
                            this._lastX = _s.clientX, this._lastY = _s.clientY, Xs();
                            for (var e = document.elementFromPoint(_s.clientX, _s.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(_s.clientX, _s.clientY)) !== t;) t = e;
                            if (rs.parentNode[Yo]._isOutsideThisEl(e), t)
                                do {
                                    if (t[Yo]) {
                                        if (t[Yo]._onDragOver({
                                                clientX: _s.clientX,
                                                clientY: _s.clientY,
                                                target: e,
                                                rootEl: t
                                            }) && !this.options.dragoverBubble) break
                                    }
                                    e = t
                                } while (t = t.parentNode);
                            Ws()
                        }
                    },
                    _onTouchMove: function(e) {
                        if (vs) {
                            var t = this.options,
                                n = t.fallbackTolerance,
                                r = t.fallbackOffset,
                                i = e.touches ? e.touches[0] : e,
                                o = os && Io(os, !0),
                                s = os && o && o.a,
                                a = os && o && o.d,
                                l = Hs && Os && Bo(Os),
                                c = (i.clientX - vs.clientX + r.x) / (s || 1) + (l ? l[0] - Is[0] : 0) / (s || 1),
                                u = (i.clientY - vs.clientY + r.y) / (a || 1) + (l ? l[1] - Is[1] : 0) / (a || 1);
                            if (!zs.active && !As) {
                                if (n && Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) < n) return;
                                this._onDragStart(e, !0)
                            }
                            if (os) {
                                o ? (o.e += c - (bs || 0), o.f += u - (ys || 0)) : o = {
                                    a: 1,
                                    b: 0,
                                    c: 0,
                                    d: 1,
                                    e: c,
                                    f: u
                                };
                                var h = "matrix(".concat(o.a, ",").concat(o.b, ",").concat(o.c, ",").concat(o.d, ",").concat(o.e, ",").concat(o.f, ")");
                                No(os, "webkitTransform", h), No(os, "mozTransform", h), No(os, "msTransform", h), No(os, "transform", h), bs = c, ys = u, _s = i
                            }
                            e.cancelable && e.preventDefault()
                        }
                    },
                    _appendGhost: function() {
                        if (!os) {
                            var e = this.options.fallbackOnBody ? document.body : ss,
                                t = Ro(rs, !0, Hs, !0, e),
                                n = this.options;
                            if (Hs) {
                                for (Os = e;
                                    "static" === No(Os, "position") && "none" === No(Os, "transform") && Os !== document;) Os = Os.parentNode;
                                Os !== document.body && Os !== document.documentElement ? (Os === document && (Os = Mo()), t.top += Os.scrollTop, t.left += Os.scrollLeft) : Os = Mo(), Is = Bo(Os)
                            }
                            Lo(os = rs.cloneNode(!0), n.ghostClass, !1), Lo(os, n.fallbackClass, !0), Lo(os, n.dragClass, !0), No(os, "transition", ""), No(os, "transform", ""), No(os, "box-sizing", "border-box"), No(os, "margin", 0), No(os, "top", t.top), No(os, "left", t.left), No(os, "width", t.width), No(os, "height", t.height), No(os, "opacity", "0.8"), No(os, "position", Hs ? "absolute" : "fixed"), No(os, "zIndex", "100000"), No(os, "pointerEvents", "none"), zs.ghost = os, e.appendChild(os), No(os, "transform-origin", ws / parseInt(os.style.width) * 100 + "% " + Es / parseInt(os.style.height) * 100 + "%")
                        }
                    },
                    _onDragStart: function(e, t) {
                        var n = this,
                            r = e.dataTransfer,
                            i = n.options;
                        ts("dragStart", this, {
                            evt: e
                        }), zs.eventCanceled ? this._onDrop() : (ts("setupClone", this), zs.eventCanceled || ((cs = Qo(rs)).removeAttribute("id"), cs.draggable = !1, cs.style["will-change"] = "", this._hideClone(), Lo(cs, this.options.chosenClass, !1), zs.clone = cs), n.cloneId = Js((function() {
                            ts("clone", n), zs.eventCanceled || (n.options.removeCloneOnHide || ss.insertBefore(cs, rs), n._hideClone(), ns({
                                sortable: n,
                                name: "clone"
                            }))
                        })), !t && Lo(rs, i.dragClass, !0), t ? (ks = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (To(document, "mouseup", n._onDrop), To(document, "touchend", n._onDrop), To(document, "touchcancel", n._onDrop), r && (r.effectAllowed = "move", i.setData && i.setData.call(n, r, rs)), So(document, "drop", n), No(rs, "transform", "translateZ(0)")), As = !0, n._dragStartId = Js(n._dragStarted.bind(n, t, e)), So(document, "selectstart", n), xs = !0, yo && No(document.body, "user-select", "none"))
                    },
                    _onDragOver: function(e) {
                        var t, n, r, i, o = this.el,
                            s = e.target,
                            a = this.options,
                            l = a.group,
                            c = zs.active,
                            u = gs === l,
                            h = a.sort,
                            f = ms || c,
                            d = this,
                            p = !1;
                        if (!Ps) {
                            if (void 0 !== e.preventDefault && e.cancelable && e.preventDefault(), s = Ao(s, a.draggable, o, !0), k("dragOver"), zs.eventCanceled) return p;
                            if (rs.contains(e.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s) return L(!1);
                            if (ks = !1, c && !a.disabled && (u ? h || (r = is !== ss) : ms === this || (this.lastPutMode = gs.checkPull(this, c, rs, e)) && l.checkPut(this, c, rs, e))) {
                                if (i = "vertical" === this._getDirection(e, s), t = Ro(rs), k("dragOverValid"), zs.eventCanceled) return p;
                                if (r) return is = ss, D(), this._hideClone(), k("revert"), zs.eventCanceled || (as ? ss.insertBefore(rs, as) : ss.appendChild(rs)), L(!0);
                                var g = jo(o, a.draggable);
                                if (!g || function(e, t, n) {
                                        var r = Ro(jo(n.el, n.options.draggable)),
                                            i = zo(n.el, n.options, os),
                                            o = 10;
                                        return t ? e.clientX > i.right + o || e.clientY > r.bottom && e.clientX > r.left : e.clientY > i.bottom + o || e.clientX > r.right && e.clientY > r.top
                                    }(e, i, this) && !g.animated) {
                                    if (g === rs) return L(!1);
                                    if (g && o === e.target && (s = g), s && (n = Ro(s)), !1 !== Ys(ss, o, rs, t, s, n, e, !!s)) return D(), g && g.nextSibling ? o.insertBefore(rs, g.nextSibling) : o.appendChild(rs), is = o, N(), L(!0)
                                } else if (g && function(e, t, n) {
                                        var r = Ro(qo(n.el, 0, n.options, !0)),
                                            i = zo(n.el, n.options, os),
                                            o = 10;
                                        return t ? e.clientX < i.left - o || e.clientY < r.top && e.clientX < r.right : e.clientY < i.top - o || e.clientY < r.bottom && e.clientX < r.left
                                    }(e, i, this)) {
                                    var m = qo(o, 0, a, !0);
                                    if (m === rs) return L(!1);
                                    if (n = Ro(s = m), !1 !== Ys(ss, o, rs, t, s, n, e, !1)) return D(), o.insertBefore(rs, m), is = o, N(), L(!0)
                                } else if (s.parentNode === o) {
                                    n = Ro(s);
                                    var v, _, b, y = rs.parentNode !== o,
                                        w = ! function(e, t, n) {
                                            var r = n ? e.left : e.top,
                                                i = n ? e.right : e.bottom,
                                                o = n ? e.width : e.height,
                                                s = n ? t.left : t.top,
                                                a = n ? t.right : t.bottom,
                                                l = n ? t.width : t.height;
                                            return r === s || i === a || r + o / 2 === s + l / 2
                                        }(rs.animated && rs.toRect || t, s.animated && s.toRect || n, i),
                                        E = i ? "top" : "left",
                                        x = Ho(s, "top", "top") || Ho(rs, "top", "top"),
                                        S = x ? x.scrollTop : void 0;
                                    if (Ss !== s && (_ = n[E], Ls = !1, Ns = !w && a.invertSwap || y), v = function(e, t, n, r, i, o, s, a) {
                                            var l = r ? e.clientY : e.clientX,
                                                c = r ? n.height : n.width,
                                                u = r ? n.top : n.left,
                                                h = r ? n.bottom : n.right,
                                                f = !1;
                                            if (!s)
                                                if (a && Cs < c * i) {
                                                    if (!Ls && (1 === Ts ? l > u + c * o / 2 : l < h - c * o / 2) && (Ls = !0), Ls) f = !0;
                                                    else if (1 === Ts ? l < u + Cs : l > h - Cs) return -Ts
                                                } else if (l > u + c * (1 - i) / 2 && l < h - c * (1 - i) / 2) return function(e) {
                                                return $o(rs) < $o(e) ? 1 : -1
                                            }(t);
                                            if ((f = f || s) && (l < u + c * o / 2 || l > h - c * o / 2)) return l > u + c / 2 ? 1 : -1;
                                            return 0
                                        }(e, s, n, i, w ? 1 : a.swapThreshold, null == a.invertedSwapThreshold ? a.swapThreshold : a.invertedSwapThreshold, Ns, Ss === s), 0 !== v) {
                                        var T = $o(rs);
                                        do {
                                            T -= v, b = is.children[T]
                                        } while (b && ("none" === No(b, "display") || b === os))
                                    }
                                    if (0 === v || b === s) return L(!1);
                                    Ss = s, Ts = v;
                                    var C = s.nextElementSibling,
                                        O = !1,
                                        A = Ys(ss, o, rs, t, s, n, e, O = 1 === v);
                                    if (!1 !== A) return 1 !== A && -1 !== A || (O = 1 === A), Ps = !0, setTimeout(Ks, 30), D(), O && !C ? o.appendChild(rs) : s.parentNode.insertBefore(rs, O ? C : s), x && Uo(x, 0, S - x.scrollTop), is = rs.parentNode, void 0 === _ || Ns || (Cs = Math.abs(_ - Ro(s)[E])), N(), L(!0)
                                }
                                if (o.contains(rs)) return L(!1)
                            }
                            return !1
                        }

                        function k(a, l) {
                            ts(a, d, uo({
                                evt: e,
                                isOwner: u,
                                axis: i ? "vertical" : "horizontal",
                                revert: r,
                                dragRect: t,
                                targetRect: n,
                                canSort: h,
                                fromSortable: f,
                                target: s,
                                completed: L,
                                onMove: function(n, r) {
                                    return Ys(ss, o, rs, t, n, Ro(n), e, r)
                                },
                                changed: N
                            }, l))
                        }

                        function D() {
                            k("dragOverAnimationCapture"), d.captureAnimationState(), d !== f && f.captureAnimationState()
                        }

                        function L(t) {
                            return k("dragOverCompleted", {
                                insertion: t
                            }), t && (u ? c._hideClone() : c._showClone(d), d !== f && (Lo(rs, ms ? ms.options.ghostClass : c.options.ghostClass, !1), Lo(rs, a.ghostClass, !0)), ms !== d && d !== zs.active ? ms = d : d === zs.active && ms && (ms = null), f === d && (d._ignoreWhileAnimating = s), d.animateAll((function() {
                                k("dragOverAnimationComplete"), d._ignoreWhileAnimating = null
                            })), d !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (s === rs && !rs.animated || s === o && !s.animated) && (Ss = null), a.dragoverBubble || e.rootEl || s === document || (rs.parentNode[Yo]._isOutsideThisEl(e.target), !t && Us(e)), !a.dragoverBubble && e.stopPropagation && e.stopPropagation(), p = !0
                        }

                        function N() {
                            fs = $o(rs), ps = $o(rs, a.draggable), ns({
                                sortable: d,
                                name: "change",
                                toEl: o,
                                newIndex: fs,
                                newDraggableIndex: ps,
                                originalEvent: e
                            })
                        }
                    },
                    _ignoreWhileAnimating: null,
                    _offMoveEvents: function() {
                        To(document, "mousemove", this._onTouchMove), To(document, "touchmove", this._onTouchMove), To(document, "pointermove", this._onTouchMove), To(document, "dragover", Us), To(document, "mousemove", Us), To(document, "touchmove", Us)
                    },
                    _offUpEvents: function() {
                        var e = this.el.ownerDocument;
                        To(e, "mouseup", this._onDrop), To(e, "touchend", this._onDrop), To(e, "pointerup", this._onDrop), To(e, "touchcancel", this._onDrop), To(document, "selectstart", this)
                    },
                    _onDrop: function(e) {
                        var t = this.el,
                            n = this.options;
                        fs = $o(rs), ps = $o(rs, n.draggable), ts("drop", this, {
                            evt: e
                        }), is = rs && rs.parentNode, fs = $o(rs), ps = $o(rs, n.draggable), zs.eventCanceled || (As = !1, Ns = !1, Ls = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Zs(this.cloneId), Zs(this._dragStartId), this.nativeDraggable && (To(document, "drop", this), To(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), yo && No(document.body, "user-select", ""), No(rs, "transform", ""), e && (xs && (e.cancelable && e.preventDefault(), !n.dropBubble && e.stopPropagation()), os && os.parentNode && os.parentNode.removeChild(os), (ss === is || ms && "clone" !== ms.lastPutMode) && cs && cs.parentNode && cs.parentNode.removeChild(cs), rs && (this.nativeDraggable && To(rs, "dragend", this), Vs(rs), rs.style["will-change"] = "", xs && !As && Lo(rs, ms ? ms.options.ghostClass : this.options.ghostClass, !1), Lo(rs, this.options.chosenClass, !1), ns({
                            sortable: this,
                            name: "unchoose",
                            toEl: is,
                            newIndex: null,
                            newDraggableIndex: null,
                            originalEvent: e
                        }), ss !== is ? (fs >= 0 && (ns({
                            rootEl: is,
                            name: "add",
                            toEl: is,
                            fromEl: ss,
                            originalEvent: e
                        }), ns({
                            sortable: this,
                            name: "remove",
                            toEl: is,
                            originalEvent: e
                        }), ns({
                            rootEl: is,
                            name: "sort",
                            toEl: is,
                            fromEl: ss,
                            originalEvent: e
                        }), ns({
                            sortable: this,
                            name: "sort",
                            toEl: is,
                            originalEvent: e
                        })), ms && ms.save()) : fs !== hs && fs >= 0 && (ns({
                            sortable: this,
                            name: "update",
                            toEl: is,
                            originalEvent: e
                        }), ns({
                            sortable: this,
                            name: "sort",
                            toEl: is,
                            originalEvent: e
                        })), zs.active && (null != fs && -1 !== fs || (fs = hs, ps = ds), ns({
                            sortable: this,
                            name: "end",
                            toEl: is,
                            originalEvent: e
                        }), this.save())))), this._nulling()
                    },
                    _nulling: function() {
                        ts("nulling", this), ss = rs = is = os = as = cs = ls = us = vs = _s = xs = fs = ps = hs = ds = Ss = Ts = ms = gs = zs.dragged = zs.ghost = zs.clone = zs.active = null, Ms.forEach((function(e) {
                            e.checked = !0
                        })), Ms.length = bs = ys = 0
                    },
                    handleEvent: function(e) {
                        switch (e.type) {
                            case "drop":
                            case "dragend":
                                this._onDrop(e);
                                break;
                            case "dragenter":
                            case "dragover":
                                rs && (this._onDragOver(e), function(e) {
                                    e.dataTransfer && (e.dataTransfer.dropEffect = "move");
                                    e.cancelable && e.preventDefault()
                                }(e));
                                break;
                            case "selectstart":
                                e.preventDefault()
                        }
                    },
                    toArray: function() {
                        for (var e, t = [], n = this.el.children, r = 0, i = n.length, o = this.options; r < i; r++) Ao(e = n[r], o.draggable, this.el, !1) && t.push(e.getAttribute(o.dataIdAttr) || Gs(e));
                        return t
                    },
                    sort: function(e, t) {
                        var n = {},
                            r = this.el;
                        this.toArray().forEach((function(e, t) {
                            var i = r.children[t];
                            Ao(i, this.options.draggable, r, !1) && (n[e] = i)
                        }), this), t && this.captureAnimationState(), e.forEach((function(e) {
                            n[e] && (r.removeChild(n[e]), r.appendChild(n[e]))
                        })), t && this.animateAll()
                    },
                    save: function() {
                        var e = this.options.store;
                        e && e.set && e.set(this)
                    },
                    closest: function(e, t) {
                        return Ao(e, t || this.options.draggable, this.el, !1)
                    },
                    option: function(e, t) {
                        var n = this.options;
                        if (void 0 === t) return n[e];
                        var r = Jo.modifyOption(this, e, t);
                        n[e] = void 0 !== r ? r : t, "group" === e && Fs(n)
                    },
                    destroy: function() {
                        ts("destroy", this);
                        var e = this.el;
                        e[Yo] = null, To(e, "mousedown", this._onTapStart), To(e, "touchstart", this._onTapStart), To(e, "pointerdown", this._onTapStart), this.nativeDraggable && (To(e, "dragover", this), To(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), (function(e) {
                            e.removeAttribute("draggable")
                        })), this._onDrop(), this._disableDelayedDragEvents(), Ds.splice(Ds.indexOf(this.el), 1), this.el = e = null
                    },
                    _hideClone: function() {
                        if (!us) {
                            if (ts("hideClone", this), zs.eventCanceled) return;
                            No(cs, "display", "none"), this.options.removeCloneOnHide && cs.parentNode && cs.parentNode.removeChild(cs), us = !0
                        }
                    },
                    _showClone: function(e) {
                        if ("clone" === e.lastPutMode) {
                            if (us) {
                                if (ts("showClone", this), zs.eventCanceled) return;
                                rs.parentNode != ss || this.options.group.revertClone ? as ? ss.insertBefore(cs, as) : ss.appendChild(cs) : ss.insertBefore(cs, rs), this.options.group.revertClone && this.animate(rs, cs), No(cs, "display", ""), us = !1
                            }
                        } else this._hideClone()
                    }
                }, Rs && So(document, "touchmove", (function(e) {
                    (zs.active || As) && e.cancelable && e.preventDefault()
                })), zs.utils = {
                    on: So,
                    off: To,
                    css: No,
                    find: Po,
                    is: function(e, t) {
                        return !!Ao(e, t, e, !1)
                    },
                    extend: function(e, t) {
                        if (e && t)
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                        return e
                    },
                    throttle: Wo,
                    closest: Ao,
                    toggleClass: Lo,
                    clone: Qo,
                    index: $o,
                    nextTick: Js,
                    cancelNextTick: Zs,
                    detectDirection: Bs,
                    getChild: qo
                }, zs.get = function(e) {
                    return e[Yo]
                }, zs.mount = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    t[0].constructor === Array && (t = t[0]), t.forEach((function(e) {
                        if (!e.prototype || !e.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));
                        e.utils && (zs.utils = uo(uo({}, zs.utils), e.utils)), Jo.mount(e)
                    }))
                }, zs.create = function(e, t) {
                    return new zs(e, t)
                }, zs.version = "1.15.2";
                var ea, ta, na, ra, ia, oa, sa = [],
                    aa = !1;

                function la() {
                    sa.forEach((function(e) {
                        clearInterval(e.pid)
                    })), sa = []
                }

                function ca() {
                    clearInterval(oa)
                }
                var ua = Wo((function(e, t, n, r) {
                        if (t.scroll) {
                            var i, o = (e.touches ? e.touches[0] : e).clientX,
                                s = (e.touches ? e.touches[0] : e).clientY,
                                a = t.scrollSensitivity,
                                l = t.scrollSpeed,
                                c = Mo(),
                                u = !1;
                            ta !== n && (ta = n, la(), ea = t.scroll, i = t.scrollFn, !0 === ea && (ea = Fo(n, !0)));
                            var h = 0,
                                f = ea;
                            do {
                                var d = f,
                                    p = Ro(d),
                                    g = p.top,
                                    m = p.bottom,
                                    v = p.left,
                                    _ = p.right,
                                    b = p.width,
                                    y = p.height,
                                    w = void 0,
                                    E = void 0,
                                    x = d.scrollWidth,
                                    S = d.scrollHeight,
                                    T = No(d),
                                    C = d.scrollLeft,
                                    O = d.scrollTop;
                                d === c ? (w = b < x && ("auto" === T.overflowX || "scroll" === T.overflowX || "visible" === T.overflowX), E = y < S && ("auto" === T.overflowY || "scroll" === T.overflowY || "visible" === T.overflowY)) : (w = b < x && ("auto" === T.overflowX || "scroll" === T.overflowX), E = y < S && ("auto" === T.overflowY || "scroll" === T.overflowY));
                                var A = w && (Math.abs(_ - o) <= a && C + b < x) - (Math.abs(v - o) <= a && !!C),
                                    k = E && (Math.abs(m - s) <= a && O + y < S) - (Math.abs(g - s) <= a && !!O);
                                if (!sa[h])
                                    for (var D = 0; D <= h; D++) sa[D] || (sa[D] = {});
                                sa[h].vx == A && sa[h].vy == k && sa[h].el === d || (sa[h].el = d, sa[h].vx = A, sa[h].vy = k, clearInterval(sa[h].pid), 0 == A && 0 == k || (u = !0, sa[h].pid = setInterval(function() {
                                    r && 0 === this.layer && zs.active._onTouchMove(ia);
                                    var t = sa[this.layer].vy ? sa[this.layer].vy * l : 0,
                                        n = sa[this.layer].vx ? sa[this.layer].vx * l : 0;
                                    "function" == typeof i && "continue" !== i.call(zs.dragged.parentNode[Yo], n, t, e, ia, sa[this.layer].el) || Uo(sa[this.layer].el, n, t)
                                }.bind({
                                    layer: h
                                }), 24))), h++
                            } while (t.bubbleScroll && f !== c && (f = Fo(f, !1)));
                            aa = u
                        }
                    }), 30),
                    ha = function(e) {
                        var t = e.originalEvent,
                            n = e.putSortable,
                            r = e.dragEl,
                            i = e.activeSortable,
                            o = e.dispatchSortableEvent,
                            s = e.hideGhostForTarget,
                            a = e.unhideGhostForTarget;
                        if (t) {
                            var l = n || i;
                            s();
                            var c = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t,
                                u = document.elementFromPoint(c.clientX, c.clientY);
                            a(), l && !l.el.contains(u) && (o("spill"), this.onSpill({
                                dragEl: r,
                                putSortable: n
                            }))
                        }
                    };

                function fa() {}

                function da() {}
                fa.prototype = {
                    startIndex: null,
                    dragStart: function(e) {
                        var t = e.oldDraggableIndex;
                        this.startIndex = t
                    },
                    onSpill: function(e) {
                        var t = e.dragEl,
                            n = e.putSortable;
                        this.sortable.captureAnimationState(), n && n.captureAnimationState();
                        var r = qo(this.sortable.el, this.startIndex, this.options);
                        r ? this.sortable.el.insertBefore(t, r) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll()
                    },
                    drop: ha
                }, po(fa, {
                    pluginName: "revertOnSpill"
                }), da.prototype = {
                    onSpill: function(e) {
                        var t = e.dragEl,
                            n = e.putSortable || this.sortable;
                        n.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), n.animateAll()
                    },
                    drop: ha
                }, po(da, {
                    pluginName: "removeOnSpill"
                });
                zs.mount(new function() {
                    function e() {
                        for (var e in this.defaults = {
                                scroll: !0,
                                forceAutoScrollFallback: !1,
                                scrollSensitivity: 30,
                                scrollSpeed: 10,
                                bubbleScroll: !0
                            }, this) "_" === e.charAt(0) && "function" == typeof this[e] && (this[e] = this[e].bind(this))
                    }
                    return e.prototype = {
                        dragStarted: function(e) {
                            var t = e.originalEvent;
                            this.sortable.nativeDraggable ? So(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? So(document, "pointermove", this._handleFallbackAutoScroll) : t.touches ? So(document, "touchmove", this._handleFallbackAutoScroll) : So(document, "mousemove", this._handleFallbackAutoScroll)
                        },
                        dragOverCompleted: function(e) {
                            var t = e.originalEvent;
                            this.options.dragOverBubble || t.rootEl || this._handleAutoScroll(t)
                        },
                        drop: function() {
                            this.sortable.nativeDraggable ? To(document, "dragover", this._handleAutoScroll) : (To(document, "pointermove", this._handleFallbackAutoScroll), To(document, "touchmove", this._handleFallbackAutoScroll), To(document, "mousemove", this._handleFallbackAutoScroll)), ca(), la(), clearTimeout(ko), ko = void 0
                        },
                        nulling: function() {
                            ia = ta = ea = aa = oa = na = ra = null, sa.length = 0
                        },
                        _handleFallbackAutoScroll: function(e) {
                            this._handleAutoScroll(e, !0)
                        },
                        _handleAutoScroll: function(e, t) {
                            var n = this,
                                r = (e.touches ? e.touches[0] : e).clientX,
                                i = (e.touches ? e.touches[0] : e).clientY,
                                o = document.elementFromPoint(r, i);
                            if (ia = e, t || this.options.forceAutoScrollFallback || _o || vo || yo) {
                                ua(e, this.options, o, t);
                                var s = Fo(o, !0);
                                !aa || oa && r === na && i === ra || (oa && ca(), oa = setInterval((function() {
                                    var o = Fo(document.elementFromPoint(r, i), !0);
                                    o !== s && (s = o, la()), ua(e, n.options, o, t)
                                }), 10), na = r, ra = i)
                            } else {
                                if (!this.options.bubbleScroll || Fo(o, !0) === Mo()) return void la();
                                ua(e, this.options, Fo(o, !1), !1)
                            }
                        }
                    }, po(e, {
                        pluginName: "scroll",
                        initializeByDefault: !0
                    })
                }), zs.mount(da, fa);
                const pa = zs;

                function ga(e) {
                    return ga = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, ga(e)
                }

                function ma() {
                    ma = function() {
                        return e
                    };
                    var e = {},
                        t = Object.prototype,
                        n = t.hasOwnProperty,
                        r = Object.defineProperty || function(e, t, n) {
                            e[t] = n.value
                        },
                        i = "function" == typeof Symbol ? Symbol : {},
                        o = i.iterator || "@@iterator",
                        s = i.asyncIterator || "@@asyncIterator",
                        a = i.toStringTag || "@@toStringTag";

                    function l(e, t, n) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        l({}, "")
                    } catch (e) {
                        l = function(e, t, n) {
                            return e[t] = n
                        }
                    }

                    function c(e, t, n, i) {
                        var o = t && t.prototype instanceof f ? t : f,
                            s = Object.create(o.prototype),
                            a = new T(i || []);
                        return r(s, "_invoke", {
                            value: w(e, n, a)
                        }), s
                    }

                    function u(e, t, n) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, n)
                            }
                        } catch (e) {
                            return {
                                type: "throw",
                                arg: e
                            }
                        }
                    }
                    e.wrap = c;
                    var h = {};

                    function f() {}

                    function d() {}

                    function p() {}
                    var g = {};
                    l(g, o, (function() {
                        return this
                    }));
                    var m = Object.getPrototypeOf,
                        v = m && m(m(C([])));
                    v && v !== t && n.call(v, o) && (g = v);
                    var _ = p.prototype = f.prototype = Object.create(g);

                    function b(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            l(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function y(e, t) {
                        function i(r, o, s, a) {
                            var l = u(e[r], e, o);
                            if ("throw" !== l.type) {
                                var c = l.arg,
                                    h = c.value;
                                return h && "object" == ga(h) && n.call(h, "__await") ? t.resolve(h.__await).then((function(e) {
                                    i("next", e, s, a)
                                }), (function(e) {
                                    i("throw", e, s, a)
                                })) : t.resolve(h).then((function(e) {
                                    c.value = e, s(c)
                                }), (function(e) {
                                    return i("throw", e, s, a)
                                }))
                            }
                            a(l.arg)
                        }
                        var o;
                        r(this, "_invoke", {
                            value: function(e, n) {
                                function r() {
                                    return new t((function(t, r) {
                                        i(e, n, t, r)
                                    }))
                                }
                                return o = o ? o.then(r, r) : r()
                            }
                        })
                    }

                    function w(e, t, n) {
                        var r = "suspendedStart";
                        return function(i, o) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === i) throw o;
                                return O()
                            }
                            for (n.method = i, n.arg = o;;) {
                                var s = n.delegate;
                                if (s) {
                                    var a = E(s, n);
                                    if (a) {
                                        if (a === h) continue;
                                        return a
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var l = u(e, t, n);
                                if ("normal" === l.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", l.arg === h) continue;
                                    return {
                                        value: l.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
                            }
                        }
                    }

                    function E(e, t) {
                        var n = t.method,
                            r = e.iterator[n];
                        if (void 0 === r) return t.delegate = null, "throw" === n && e.iterator.return && (t.method = "return", t.arg = void 0, E(e, t), "throw" === t.method) || "return" !== n && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), h;
                        var i = u(r, e.iterator, t.arg);
                        if ("throw" === i.type) return t.method = "throw", t.arg = i.arg, t.delegate = null, h;
                        var o = i.arg;
                        return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, h) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, h)
                    }

                    function x(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function S(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function T(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(x, this), this.reset(!0)
                    }

                    function C(e) {
                        if (e) {
                            var t = e[o];
                            if (t) return t.call(e);
                            if ("function" == typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var r = -1,
                                    i = function t() {
                                        for (; ++r < e.length;)
                                            if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                        return t.value = void 0, t.done = !0, t
                                    };
                                return i.next = i
                            }
                        }
                        return {
                            next: O
                        }
                    }

                    function O() {
                        return {
                            value: void 0,
                            done: !0
                        }
                    }
                    return d.prototype = p, r(_, "constructor", {
                        value: p,
                        configurable: !0
                    }), r(p, "constructor", {
                        value: d,
                        configurable: !0
                    }), d.displayName = l(p, a, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" == typeof e && e.constructor;
                        return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, l(e, a, "GeneratorFunction")), e.prototype = Object.create(_), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, b(y.prototype), l(y.prototype, s, (function() {
                        return this
                    })), e.AsyncIterator = y, e.async = function(t, n, r, i, o) {
                        void 0 === o && (o = Promise);
                        var s = new y(c(t, n, r, i), o);
                        return e.isGeneratorFunction(n) ? s : s.next().then((function(e) {
                            return e.done ? e.value : s.next()
                        }))
                    }, b(_), l(_, a, "Generator"), l(_, o, (function() {
                        return this
                    })), l(_, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = Object(e),
                            n = [];
                        for (var r in t) n.push(r);
                        return n.reverse(),
                            function e() {
                                for (; n.length;) {
                                    var r = n.pop();
                                    if (r in t) return e.value = r, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, e.values = C, T.prototype = {
                        constructor: T,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(S), !e)
                                for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var t = this;

                            function r(n, r) {
                                return s.type = "throw", s.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                            }
                            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                var o = this.tryEntries[i],
                                    s = o.completion;
                                if ("root" === o.tryLoc) return r("end");
                                if (o.tryLoc <= this.prev) {
                                    var a = n.call(o, "catchLoc"),
                                        l = n.call(o, "finallyLoc");
                                    if (a && l) {
                                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                                        if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                    } else if (a) {
                                        if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                                    } else {
                                        if (!l) throw new Error("try statement without catch or finally");
                                        if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var i = this.tryEntries[r];
                                if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var o = i;
                                    break
                                }
                            }
                            o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                            var s = o ? o.completion : {};
                            return s.type = e, s.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, h) : this.complete(s)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), h
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), h
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var i = r.arg;
                                        S(n)
                                    }
                                    return i
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, t, n) {
                            return this.delegate = {
                                iterator: C(e),
                                resultName: t,
                                nextLoc: n
                            }, "next" === this.method && (this.arg = void 0), h
                        }
                    }, e
                }

                function va(e, t) {
                    var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!n) {
                        if (Array.isArray(e) || (n = function(e, t) {
                                if (!e) return;
                                if ("string" == typeof e) return _a(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === n && e.constructor && (n = e.constructor.name);
                                if ("Map" === n || "Set" === n) return Array.from(e);
                                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _a(e, t)
                            }(e)) || t && e && "number" == typeof e.length) {
                            n && (e = n);
                            var r = 0,
                                i = function() {};
                            return {
                                s: i,
                                n: function() {
                                    return r >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[r++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: i
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, s = !0,
                        a = !1;
                    return {
                        s: function() {
                            n = n.call(e)
                        },
                        n: function() {
                            var e = n.next();
                            return s = e.done, e
                        },
                        e: function(e) {
                            a = !0, o = e
                        },
                        f: function() {
                            try {
                                s || null == n.return || n.return()
                            } finally {
                                if (a) throw o
                            }
                        }
                    }
                }

                function _a(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function ba(e, t, n, r, i, o, s) {
                    try {
                        var a = e[o](s),
                            l = a.value
                    } catch (e) {
                        return void n(e)
                    }
                    a.done ? t(l) : Promise.resolve(l).then(r, i)
                }

                function ya(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var o = e.apply(t, n);

                            function s(e) {
                                ba(o, r, i, s, a, "next", e)
                            }

                            function a(e) {
                                ba(o, r, i, s, a, "throw", e)
                            }
                            s(void 0)
                        }))
                    }
                }
                window.bootstrap = i, window.htmx = lo, window.addEventListener("DOMContentLoaded", ya(ma().mark((function e() {
                    var t, n, r, i, o, s, a, l, c, u, h;
                    return ma().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                t = va(document.getElementsByClassName("copy-button")), e.prev = 1, r = ma().mark((function e() {
                                    var t;
                                    return ma().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (t = n.value, navigator.clipboard) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return t.setAttribute("disabled", "disabled"), e.abrupt("return", "continue");
                                            case 4:
                                                t.addEventListener("click", (function(e) {
                                                    navigator.clipboard.writeText(t.value).then(ya(ma().mark((function e() {
                                                        return ma().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    pi.getOrCreateInstance(t, {
                                                                        title: "Copied!"
                                                                    }).show();
                                                                case 1:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e)
                                                    })))), e.preventDefault()
                                                }));
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })), t.s();
                            case 4:
                                if ((n = t.n()).done) {
                                    e.next = 11;
                                    break
                                }
                                return e.delegateYield(r(), "t0", 6);
                            case 6:
                                if ("continue" !== e.t0) {
                                    e.next = 9;
                                    break
                                }
                                return e.abrupt("continue", 9);
                            case 9:
                                e.next = 4;
                                break;
                            case 11:
                                e.next = 16;
                                break;
                            case 13:
                                e.prev = 13, e.t1 = e.catch(1), t.e(e.t1);
                            case 16:
                                return e.prev = 16, t.f(), e.finish(16);
                            case 19:
                                i = "htmx_modal", o = "htmx_dialog", document.getElementById(i) && (s = document.getElementById(o), a = document.getElementById(i), l = new Dr(a), lo.on("htmx:beforeRequest", (function(e) {
                                    if (e.detail.target.id === o) {
                                        var t = e.detail.elt.getAttribute("data-bs-modal-classes");
                                        t && "" !== t && (s.className = "modal-dialog " + t)
                                    }
                                })), lo.on("htmx:beforeSwap", (function(e) {
                                    e.detail.target.id !== o || e.detail.xhr.response || (l.hide(), e.detail.shouldSwap = !1)
                                })), lo.on("htmx:afterSwap", (function(e) {
                                    e.detail.target.id === o && l.show()
                                })), lo.on("hidden.bs.modal", (function() {
                                    s.className = "modal-dialog", s.innerHTML = ""
                                }))), c = va(document.getElementsByClassName("sortable"));
                                try {
                                    for (c.s(); !(u = c.n()).done;) h = u.value, new pa(h)
                                } catch (e) {
                                    c.e(e)
                                } finally {
                                    c.f()
                                }
                            case 24:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 13, 16, 19]
                    ])
                }))));
                var wa = document.getElementById("customTable"),
                    Ea = null;
                if (wa) {
                    var xa = Array.prototype.slice.call(wa.querySelectorAll("td,th")),
                        Sa = Array.prototype.slice.call(wa.querySelectorAll('td input[type="checkbox"], th input[type="checkbox"]'));
                    xa.forEach((function(e, t) {
                        e.addEventListener("click", (function(n) {
                            var r = e.querySelector('input[type="checkbox"]');
                            if (r && Ta(r), r && "TH" === e.tagName && function(e, t) {
                                    var n = Array.prototype.slice.call(wa.querySelectorAll("tbody tr td:nth-child(".concat(t + 1, ') input[type="checkbox"]')));
                                    n.forEach((function(t) {
                                        Ta(t, e.checked)
                                    }))
                                }(r, t), n.shiftKey && r && "TD" === e.tagName && function(e, t) {
                                    var n = Oa(e, "tbody"),
                                        r = Oa(e, "tr"),
                                        i = Array.prototype.indexOf.call(r.children, e),
                                        o = Array.prototype.indexOf.call(n.children, r),
                                        s = {
                                            element: t,
                                            rowIndex: i,
                                            columnIndex: o
                                        };
                                    if (Ea)
                                        if (Ea.rowIndex === s.rowIndex) {
                                            var a = Ca(Ea.columnIndex, s.columnIndex).map((function(e) {
                                                return "tbody tr:nth-child(".concat(e + 1, ") td:nth-child(").concat(s.rowIndex + 1, ') input[type="checkbox"]')
                                            })).join(", ");
                                            Array.prototype.slice.call(wa.querySelectorAll(a)).forEach((function(e) {
                                                Ta(e, s.element.checked)
                                            }))
                                        } else if (Ea.columnIndex === s.columnIndex) {
                                        var l = Ca(Ea.rowIndex, s.rowIndex).map((function(e) {
                                            return "tbody tr:nth-child(".concat(s.columnIndex + 1, ") td:nth-child(").concat(e + 1, ') input[type="checkbox"]')
                                        })).join(", ");
                                        Array.prototype.slice.call(wa.querySelectorAll(l)).forEach((function(e) {
                                            Ta(e, s.element.checked)
                                        }))
                                    }
                                }(e, r), !n.shiftKey && r && "TD" === e.tagName) {
                                var i = Oa(e, "tbody"),
                                    o = Oa(e, "tr"),
                                    s = Array.prototype.indexOf.call(o.children, e),
                                    a = Array.prototype.indexOf.call(i.children, o);
                                Ea = {
                                    element: r,
                                    rowIndex: s,
                                    columnIndex: a
                                }
                            }
                        }))
                    })), Sa.forEach((function(e) {
                        e.addEventListener("change", (function() {
                            var t = Oa(e, "td");
                            t && (e.checked ? (t.classList.remove("open"), t.classList.add("blackout")) : (t.classList.add("open"), t.classList.remove("blackout")))
                        }))
                    }))
                }

                function Ta(e, t) {
                    e.checked = !0 === t || !1 === t ? t : !e.checked, e.dispatchEvent(new Event("change"))
                }

                function Ca(e, t) {
                    var n, r, i = [];
                    e < t ? (n = e, r = t) : (n = t, r = e);
                    for (var o = n; o <= r; o++) i.push(o);
                    return i
                }

                function Oa(e, t) {
                    for (;
                        (e = e.parentElement) && e.tagName !== t.toUpperCase(););
                    return e
                }
            },
            28: function(module, exports) {
                var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__, t;
                "undefined" != typeof self && self, t = function() {
                    return function() {
                        "use strict";
                        var Q = {
                                onLoad: F,
                                process: zt,
                                on: de,
                                off: ge,
                                trigger: ce,
                                ajax: Nr,
                                find: C,
                                findAll: f,
                                closest: v,
                                values: function(e, t) {
                                    return dr(e, t || "post").values
                                },
                                remove: _,
                                addClass: z,
                                removeClass: n,
                                toggleClass: $,
                                takeClass: W,
                                defineExtension: Ur,
                                removeExtension: Br,
                                logAll: V,
                                logNone: j,
                                logger: null,
                                config: {
                                    historyEnabled: !0,
                                    historyCacheSize: 10,
                                    refreshOnHistoryMiss: !1,
                                    defaultSwapStyle: "innerHTML",
                                    defaultSwapDelay: 0,
                                    defaultSettleDelay: 20,
                                    includeIndicatorStyles: !0,
                                    indicatorClass: "htmx-indicator",
                                    requestClass: "htmx-request",
                                    addedClass: "htmx-added",
                                    settlingClass: "htmx-settling",
                                    swappingClass: "htmx-swapping",
                                    allowEval: !0,
                                    allowScriptTags: !0,
                                    inlineScriptNonce: "",
                                    attributesToSettle: ["class", "style", "width", "height"],
                                    withCredentials: !1,
                                    timeout: 0,
                                    wsReconnectDelay: "full-jitter",
                                    wsBinaryType: "blob",
                                    disableSelector: "[hx-disable], [data-hx-disable]",
                                    useTemplateFragments: !1,
                                    scrollBehavior: "smooth",
                                    defaultFocusScroll: !1,
                                    getCacheBusterParam: !1,
                                    globalViewTransitions: !1,
                                    methodsThatUseUrlParams: ["get"],
                                    selfRequestsOnly: !1,
                                    ignoreTitle: !1,
                                    scrollIntoViewOnBoost: !0,
                                    triggerSpecsCache: null
                                },
                                parseInterval: d,
                                _: t,
                                createEventSource: function(e) {
                                    return new EventSource(e, {
                                        withCredentials: !0
                                    })
                                },
                                createWebSocket: function(e) {
                                    var t = new WebSocket(e, []);
                                    return t.binaryType = Q.config.wsBinaryType, t
                                },
                                version: "1.9.10"
                            },
                            r = {
                                addTriggerHandler: Lt,
                                bodyContains: se,
                                canAccessLocalStorage: U,
                                findThisElement: xe,
                                filterValues: yr,
                                hasAttribute: o,
                                getAttributeValue: te,
                                getClosestAttributeValue: ne,
                                getClosestMatch: c,
                                getExpressionVars: Hr,
                                getHeaders: xr,
                                getInputValues: dr,
                                getInternalData: ae,
                                getSwapSpecification: wr,
                                getTriggerSpecs: it,
                                getTarget: ye,
                                makeFragment: l,
                                mergeObjects: le,
                                makeSettleInfo: T,
                                oobSwap: Ee,
                                querySelectorExt: ue,
                                selectAndSwap: je,
                                settleImmediately: nr,
                                shouldCancel: ut,
                                triggerEvent: ce,
                                triggerErrorEvent: fe,
                                withExtensions: R
                            },
                            w = ["get", "post", "put", "delete", "patch"],
                            i = w.map((function(e) {
                                return "[hx-" + e + "], [data-hx-" + e + "]"
                            })).join(", "),
                            S = e("head"),
                            q = e("title"),
                            H = e("svg", !0);

                        function e(e, t = !1) {
                            return new RegExp(`<${e}(\\s[^>]*>|>)([\\s\\S]*?)<\\/${e}>`, t ? "gim" : "im")
                        }

                        function d(e) {
                            if (null == e) return;
                            let t = NaN;
                            return t = "ms" == e.slice(-2) ? parseFloat(e.slice(0, -2)) : "s" == e.slice(-1) ? 1e3 * parseFloat(e.slice(0, -1)) : "m" == e.slice(-1) ? 1e3 * parseFloat(e.slice(0, -1)) * 60 : parseFloat(e), isNaN(t) ? void 0 : t
                        }

                        function ee(e, t) {
                            return e.getAttribute && e.getAttribute(t)
                        }

                        function o(e, t) {
                            return e.hasAttribute && (e.hasAttribute(t) || e.hasAttribute("data-" + t))
                        }

                        function te(e, t) {
                            return ee(e, t) || ee(e, "data-" + t)
                        }

                        function u(e) {
                            return e.parentElement
                        }

                        function re() {
                            return document
                        }

                        function c(e, t) {
                            for (; e && !t(e);) e = u(e);
                            return e || null
                        }

                        function L(e, t, n) {
                            var r = te(t, n),
                                i = te(t, "hx-disinherit");
                            return e !== t && i && ("*" === i || i.split(" ").indexOf(n) >= 0) ? "unset" : r
                        }

                        function ne(e, t) {
                            var n = null;
                            if (c(e, (function(r) {
                                    return n = L(e, r, t)
                                })), "unset" !== n) return n
                        }

                        function h(e, t) {
                            var n = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
                            return n && n.call(e, t)
                        }

                        function A(e) {
                            var t = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i.exec(e);
                            return t ? t[1].toLowerCase() : ""
                        }

                        function a(e, t) {
                            for (var n = (new DOMParser).parseFromString(e, "text/html").body; t > 0;) t--, n = n.firstChild;
                            return null == n && (n = re().createDocumentFragment()), n
                        }

                        function N(e) {
                            return /<body/.test(e)
                        }

                        function l(e) {
                            var t = !N(e),
                                n = A(e),
                                r = e;
                            if ("head" === n && (r = r.replace(S, "")), Q.config.useTemplateFragments && t) return a("<body><template>" + r + "</template></body>", 0).querySelector("template").content;
                            switch (n) {
                                case "thead":
                                case "tbody":
                                case "tfoot":
                                case "colgroup":
                                case "caption":
                                    return a("<table>" + r + "</table>", 1);
                                case "col":
                                    return a("<table><colgroup>" + r + "</colgroup></table>", 2);
                                case "tr":
                                    return a("<table><tbody>" + r + "</tbody></table>", 2);
                                case "td":
                                case "th":
                                    return a("<table><tbody><tr>" + r + "</tr></tbody></table>", 3);
                                case "script":
                                case "style":
                                    return a("<div>" + r + "</div>", 1);
                                default:
                                    return a(r, 0)
                            }
                        }

                        function ie(e) {
                            e && e()
                        }

                        function I(e, t) {
                            return Object.prototype.toString.call(e) === "[object " + t + "]"
                        }

                        function k(e) {
                            return I(e, "Function")
                        }

                        function P(e) {
                            return I(e, "Object")
                        }

                        function ae(e) {
                            var t = "htmx-internal-data",
                                n = e[t];
                            return n || (n = e[t] = {}), n
                        }

                        function M(e) {
                            var t = [];
                            if (e)
                                for (var n = 0; n < e.length; n++) t.push(e[n]);
                            return t
                        }

                        function oe(e, t) {
                            if (e)
                                for (var n = 0; n < e.length; n++) t(e[n])
                        }

                        function X(e) {
                            var t = e.getBoundingClientRect(),
                                n = t.top,
                                r = t.bottom;
                            return n < window.innerHeight && r >= 0
                        }

                        function se(e) {
                            return e.getRootNode && e.getRootNode() instanceof window.ShadowRoot ? re().body.contains(e.getRootNode().host) : re().body.contains(e)
                        }

                        function D(e) {
                            return e.trim().split(/\s+/)
                        }

                        function le(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                            return e
                        }

                        function E(e) {
                            try {
                                return JSON.parse(e)
                            } catch (e) {
                                return b(e), null
                            }
                        }

                        function U() {
                            var e = "htmx:localStorageTest";
                            try {
                                return localStorage.setItem(e, e), localStorage.removeItem(e), !0
                            } catch (e) {
                                return !1
                            }
                        }

                        function B(e) {
                            try {
                                var t = new URL(e);
                                return t && (e = t.pathname + t.search), /^\/$/.test(e) || (e = e.replace(/\/+$/, "")), e
                            } catch (t) {
                                return e
                            }
                        }

                        function t(e) {
                            return Tr(re().body, (function() {
                                return eval(e)
                            }))
                        }

                        function F(e) {
                            return Q.on("htmx:load", (function(t) {
                                e(t.detail.elt)
                            }))
                        }

                        function V() {
                            Q.logger = function(e, t, n) {
                                console && console.log(t, e, n)
                            }
                        }

                        function j() {
                            Q.logger = null
                        }

                        function C(e, t) {
                            return t ? e.querySelector(t) : C(re(), e)
                        }

                        function f(e, t) {
                            return t ? e.querySelectorAll(t) : f(re(), e)
                        }

                        function _(e, t) {
                            e = g(e), t ? setTimeout((function() {
                                _(e), e = null
                            }), t) : e.parentElement.removeChild(e)
                        }

                        function z(e, t, n) {
                            e = g(e), n ? setTimeout((function() {
                                z(e, t), e = null
                            }), n) : e.classList && e.classList.add(t)
                        }

                        function n(e, t, r) {
                            e = g(e), r ? setTimeout((function() {
                                n(e, t), e = null
                            }), r) : e.classList && (e.classList.remove(t), 0 === e.classList.length && e.removeAttribute("class"))
                        }

                        function $(e, t) {
                            (e = g(e)).classList.toggle(t)
                        }

                        function W(e, t) {
                            oe((e = g(e)).parentElement.children, (function(e) {
                                n(e, t)
                            })), z(e, t)
                        }

                        function v(e, t) {
                            if ((e = g(e)).closest) return e.closest(t);
                            do {
                                if (null == e || h(e, t)) return e
                            } while (e = e && u(e));
                            return null
                        }

                        function s(e, t) {
                            return e.substring(0, t.length) === t
                        }

                        function G(e, t) {
                            return e.substring(e.length - t.length) === t
                        }

                        function J(e) {
                            var t = e.trim();
                            return s(t, "<") && G(t, "/>") ? t.substring(1, t.length - 2) : t
                        }

                        function Z(e, t) {
                            return 0 === t.indexOf("closest ") ? [v(e, J(t.substr(8)))] : 0 === t.indexOf("find ") ? [C(e, J(t.substr(5)))] : "next" === t ? [e.nextElementSibling] : 0 === t.indexOf("next ") ? [K(e, J(t.substr(5)))] : "previous" === t ? [e.previousElementSibling] : 0 === t.indexOf("previous ") ? [Y(e, J(t.substr(9)))] : "document" === t ? [document] : "window" === t ? [window] : "body" === t ? [document.body] : re().querySelectorAll(J(t))
                        }
                        var K = function(e, t) {
                                for (var n = re().querySelectorAll(t), r = 0; r < n.length; r++) {
                                    var i = n[r];
                                    if (i.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_PRECEDING) return i
                                }
                            },
                            Y = function(e, t) {
                                for (var n = re().querySelectorAll(t), r = n.length - 1; r >= 0; r--) {
                                    var i = n[r];
                                    if (i.compareDocumentPosition(e) === Node.DOCUMENT_POSITION_FOLLOWING) return i
                                }
                            };

                        function ue(e, t) {
                            return t ? Z(e, t)[0] : Z(re().body, e)[0]
                        }

                        function g(e) {
                            return I(e, "String") ? C(e) : e
                        }

                        function ve(e, t, n) {
                            return k(t) ? {
                                target: re().body,
                                event: e,
                                listener: t
                            } : {
                                target: g(e),
                                event: t,
                                listener: n
                            }
                        }

                        function de(e, t, n) {
                            return jr((function() {
                                var r = ve(e, t, n);
                                r.target.addEventListener(r.event, r.listener)
                            })), k(t) ? t : n
                        }

                        function ge(e, t, n) {
                            return jr((function() {
                                var r = ve(e, t, n);
                                r.target.removeEventListener(r.event, r.listener)
                            })), k(t) ? t : n
                        }
                        var me = re().createElement("output");

                        function pe(e, t) {
                            var n = ne(e, t);
                            if (n) {
                                if ("this" === n) return [xe(e, t)];
                                var r = Z(e, n);
                                return 0 === r.length ? (b('The selector "' + n + '" on ' + t + " returned no matches!"), [me]) : r
                            }
                        }

                        function xe(e, t) {
                            return c(e, (function(e) {
                                return null != te(e, t)
                            }))
                        }

                        function ye(e) {
                            var t = ne(e, "hx-target");
                            return t ? "this" === t ? xe(e, "hx-target") : ue(e, t) : ae(e).boosted ? re().body : e
                        }

                        function be(e) {
                            for (var t = Q.config.attributesToSettle, n = 0; n < t.length; n++)
                                if (e === t[n]) return !0;
                            return !1
                        }

                        function we(e, t) {
                            oe(e.attributes, (function(n) {
                                !t.hasAttribute(n.name) && be(n.name) && e.removeAttribute(n.name)
                            })), oe(t.attributes, (function(t) {
                                be(t.name) && e.setAttribute(t.name, t.value)
                            }))
                        }

                        function Se(e, t) {
                            for (var n = Fr(t), r = 0; r < n.length; r++) {
                                var i = n[r];
                                try {
                                    if (i.isInlineSwap(e)) return !0
                                } catch (e) {
                                    b(e)
                                }
                            }
                            return "outerHTML" === e
                        }

                        function Ee(e, t, n) {
                            var r = "#" + ee(t, "id"),
                                i = "outerHTML";
                            "true" === e || (e.indexOf(":") > 0 ? (i = e.substr(0, e.indexOf(":")), r = e.substr(e.indexOf(":") + 1, e.length)) : i = e);
                            var o = re().querySelectorAll(r);
                            return o ? (oe(o, (function(e) {
                                var r, o = t.cloneNode(!0);
                                (r = re().createDocumentFragment()).appendChild(o), Se(i, e) || (r = o);
                                var s = {
                                    shouldSwap: !0,
                                    target: e,
                                    fragment: r
                                };
                                ce(e, "htmx:oobBeforeSwap", s) && (e = s.target, s.shouldSwap && Fe(i, e, e, r, n), oe(n.elts, (function(e) {
                                    ce(e, "htmx:oobAfterSwap", s)
                                })))
                            })), t.parentNode.removeChild(t)) : (t.parentNode.removeChild(t), fe(re().body, "htmx:oobErrorNoTarget", {
                                content: t
                            })), e
                        }

                        function Ce(e, t, n) {
                            var r = ne(e, "hx-select-oob");
                            if (r)
                                for (var i = r.split(","), o = 0; o < i.length; o++) {
                                    var s = i[o].split(":", 2),
                                        a = s[0].trim();
                                    0 === a.indexOf("#") && (a = a.substring(1));
                                    var l = s[1] || "true",
                                        c = t.querySelector("#" + a);
                                    c && Ee(l, c, n)
                                }
                            oe(f(t, "[hx-swap-oob], [data-hx-swap-oob]"), (function(e) {
                                var t = te(e, "hx-swap-oob");
                                null != t && Ee(t, e, n)
                            }))
                        }

                        function Re(e) {
                            oe(f(e, "[hx-preserve], [data-hx-preserve]"), (function(e) {
                                var t = te(e, "id"),
                                    n = re().getElementById(t);
                                null != n && e.parentNode.replaceChild(n, e)
                            }))
                        }

                        function Te(e, t, n) {
                            oe(t.querySelectorAll("[id]"), (function(t) {
                                var r = ee(t, "id");
                                if (r && r.length > 0) {
                                    var i = r.replace("'", "\\'"),
                                        o = t.tagName.replace(":", "\\:"),
                                        s = e.querySelector(o + "[id='" + i + "']");
                                    if (s && s !== e) {
                                        var a = t.cloneNode();
                                        we(t, s), n.tasks.push((function() {
                                            we(t, a)
                                        }))
                                    }
                                }
                            }))
                        }

                        function Oe(e) {
                            return function() {
                                n(e, Q.config.addedClass), zt(e), Nt(e), qe(e), ce(e, "htmx:load")
                            }
                        }

                        function qe(e) {
                            var t = "[autofocus]",
                                n = h(e, t) ? e : e.querySelector(t);
                            null != n && n.focus()
                        }

                        function m(e, t, n, r) {
                            for (Te(e, n, r); n.childNodes.length > 0;) {
                                var i = n.firstChild;
                                z(i, Q.config.addedClass), e.insertBefore(i, t), i.nodeType !== Node.TEXT_NODE && i.nodeType !== Node.COMMENT_NODE && r.tasks.push(Oe(i))
                            }
                        }

                        function He(e, t) {
                            for (var n = 0; n < e.length;) t = (t << 5) - t + e.charCodeAt(n++) | 0;
                            return t
                        }

                        function Le(e) {
                            var t = 0;
                            if (e.attributes)
                                for (var n = 0; n < e.attributes.length; n++) {
                                    var r = e.attributes[n];
                                    r.value && (t = He(r.name, t), t = He(r.value, t))
                                }
                            return t
                        }

                        function Ae(e) {
                            var t = ae(e);
                            if (t.onHandlers) {
                                for (var n = 0; n < t.onHandlers.length; n++) {
                                    const r = t.onHandlers[n];
                                    e.removeEventListener(r.event, r.listener)
                                }
                                delete t.onHandlers
                            }
                        }

                        function Ne(e) {
                            var t = ae(e);
                            t.timeout && clearTimeout(t.timeout), t.webSocket && t.webSocket.close(), t.sseEventSource && t.sseEventSource.close(), t.listenerInfos && oe(t.listenerInfos, (function(e) {
                                e.on && e.on.removeEventListener(e.trigger, e.listener)
                            })), Ae(e), oe(Object.keys(t), (function(e) {
                                delete t[e]
                            }))
                        }

                        function p(e) {
                            ce(e, "htmx:beforeCleanupElement"), Ne(e), e.children && oe(e.children, (function(e) {
                                p(e)
                            }))
                        }

                        function Ie(e, t, n) {
                            if ("BODY" === e.tagName) return Ue(e, t, n);
                            var r, i = e.previousSibling;
                            for (m(u(e), e, t, n), r = null == i ? u(e).firstChild : i.nextSibling, n.elts = n.elts.filter((function(t) {
                                    return t != e
                                })); r && r !== e;) r.nodeType === Node.ELEMENT_NODE && n.elts.push(r), r = r.nextElementSibling;
                            p(e), u(e).removeChild(e)
                        }

                        function ke(e, t, n) {
                            return m(e, e.firstChild, t, n)
                        }

                        function Pe(e, t, n) {
                            return m(u(e), e, t, n)
                        }

                        function Me(e, t, n) {
                            return m(e, null, t, n)
                        }

                        function Xe(e, t, n) {
                            return m(u(e), e.nextSibling, t, n)
                        }

                        function De(e, t, n) {
                            return p(e), u(e).removeChild(e)
                        }

                        function Ue(e, t, n) {
                            var r = e.firstChild;
                            if (m(e, r, t, n), r) {
                                for (; r.nextSibling;) p(r.nextSibling), e.removeChild(r.nextSibling);
                                p(r), e.removeChild(r)
                            }
                        }

                        function Be(e, t, n) {
                            var r = n || ne(e, "hx-select");
                            if (r) {
                                var i = re().createDocumentFragment();
                                oe(t.querySelectorAll(r), (function(e) {
                                    i.appendChild(e)
                                })), t = i
                            }
                            return t
                        }

                        function Fe(e, t, n, r, i) {
                            switch (e) {
                                case "none":
                                    return;
                                case "outerHTML":
                                    return void Ie(n, r, i);
                                case "afterbegin":
                                    return void ke(n, r, i);
                                case "beforebegin":
                                    return void Pe(n, r, i);
                                case "beforeend":
                                    return void Me(n, r, i);
                                case "afterend":
                                    return void Xe(n, r, i);
                                case "delete":
                                    return void De(n, r, i);
                                default:
                                    for (var o = Fr(t), s = 0; s < o.length; s++) {
                                        var a = o[s];
                                        try {
                                            var l = a.handleSwap(e, n, r, i);
                                            if (l) {
                                                if (void 0 !== l.length)
                                                    for (var c = 0; c < l.length; c++) {
                                                        var u = l[c];
                                                        u.nodeType !== Node.TEXT_NODE && u.nodeType !== Node.COMMENT_NODE && i.tasks.push(Oe(u))
                                                    }
                                                return
                                            }
                                        } catch (e) {
                                            b(e)
                                        }
                                    }
                                    "innerHTML" === e ? Ue(n, r, i) : Fe(Q.config.defaultSwapStyle, t, n, r, i)
                            }
                        }

                        function Ve(e) {
                            if (e.indexOf("<title") > -1) {
                                var t = e.replace(H, "").match(q);
                                if (t) return t[2]
                            }
                        }

                        function je(e, t, n, r, i, o) {
                            i.title = Ve(r);
                            var s = l(r);
                            if (s) return Ce(n, s, i), Re(s = Be(n, s, o)), Fe(e, n, t, s, i)
                        }

                        function _e(e, t, n) {
                            var r = e.getResponseHeader(t);
                            if (0 === r.indexOf("{")) {
                                var i = E(r);
                                for (var o in i)
                                    if (i.hasOwnProperty(o)) {
                                        var s = i[o];
                                        P(s) || (s = {
                                            value: s
                                        }), ce(n, o, s)
                                    }
                            } else
                                for (var a = r.split(","), l = 0; l < a.length; l++) ce(n, a[l].trim(), [])
                        }
                        var ze = /\s/,
                            x = /[\s,]/,
                            $e = /[_$a-zA-Z]/,
                            We = /[_$a-zA-Z0-9]/,
                            Ge = ['"', "'", "/"],
                            Je = /[^\s]/,
                            Ze = /[{(]/,
                            Ke = /[})]/;

                        function Ye(e) {
                            for (var t = [], n = 0; n < e.length;) {
                                if ($e.exec(e.charAt(n))) {
                                    for (var r = n; We.exec(e.charAt(n + 1));) n++;
                                    t.push(e.substr(r, n - r + 1))
                                } else if (-1 !== Ge.indexOf(e.charAt(n))) {
                                    var i = e.charAt(n);
                                    for (r = n, n++; n < e.length && e.charAt(n) !== i;) "\\" === e.charAt(n) && n++, n++;
                                    t.push(e.substr(r, n - r + 1))
                                } else {
                                    var o = e.charAt(n);
                                    t.push(o)
                                }
                                n++
                            }
                            return t
                        }

                        function Qe(e, t, n) {
                            return $e.exec(e.charAt(0)) && "true" !== e && "false" !== e && "this" !== e && e !== n && "." !== t
                        }

                        function et(e, t, n) {
                            if ("[" === t[0]) {
                                t.shift();
                                for (var r = 1, i = " return (function(" + n + "){ return (", o = null; t.length > 0;) {
                                    var s = t[0];
                                    if ("]" === s) {
                                        if (0 == --r) {
                                            null === o && (i += "true"), t.shift(), i += ")})";
                                            try {
                                                var a = Tr(e, (function() {
                                                    return Function(i)()
                                                }), (function() {
                                                    return !0
                                                }));
                                                return a.source = i, a
                                            } catch (e) {
                                                return fe(re().body, "htmx:syntax:error", {
                                                    error: e,
                                                    source: i
                                                }), null
                                            }
                                        }
                                    } else "[" === s && r++;
                                    Qe(s, o, n) ? i += "((" + n + "." + s + ") ? (" + n + "." + s + ") : (window." + s + "))" : i += s, o = t.shift()
                                }
                            }
                        }

                        function y(e, t) {
                            for (var n = ""; e.length > 0 && !t.test(e[0]);) n += e.shift();
                            return n
                        }

                        function tt(e) {
                            var t;
                            return e.length > 0 && Ze.test(e[0]) ? (e.shift(), t = y(e, Ke).trim(), e.shift()) : t = y(e, x), t
                        }
                        var rt = "input, textarea, select";

                        function nt(e, t, n) {
                            var r = [],
                                i = Ye(t);
                            do {
                                y(i, Je);
                                var o = i.length,
                                    s = y(i, /[,\[\s]/);
                                if ("" !== s)
                                    if ("every" === s) {
                                        var a = {
                                            trigger: "every"
                                        };
                                        y(i, Je), a.pollInterval = d(y(i, /[,\[\s]/)), y(i, Je), (l = et(e, i, "event")) && (a.eventFilter = l), r.push(a)
                                    } else if (0 === s.indexOf("sse:")) r.push({
                                    trigger: "sse",
                                    sseEvent: s.substr(4)
                                });
                                else {
                                    var l, c = {
                                        trigger: s
                                    };
                                    for ((l = et(e, i, "event")) && (c.eventFilter = l); i.length > 0 && "," !== i[0];) {
                                        y(i, Je);
                                        var u = i.shift();
                                        if ("changed" === u) c.changed = !0;
                                        else if ("once" === u) c.once = !0;
                                        else if ("consume" === u) c.consume = !0;
                                        else if ("delay" === u && ":" === i[0]) i.shift(), c.delay = d(y(i, x));
                                        else if ("from" === u && ":" === i[0]) {
                                            if (i.shift(), Ze.test(i[0])) var h = tt(i);
                                            else if ("closest" === (h = y(i, x)) || "find" === h || "next" === h || "previous" === h) {
                                                i.shift();
                                                var f = tt(i);
                                                f.length > 0 && (h += " " + f)
                                            }
                                            c.from = h
                                        } else "target" === u && ":" === i[0] ? (i.shift(), c.target = tt(i)) : "throttle" === u && ":" === i[0] ? (i.shift(), c.throttle = d(y(i, x))) : "queue" === u && ":" === i[0] ? (i.shift(), c.queue = y(i, x)) : "root" === u && ":" === i[0] ? (i.shift(), c[u] = tt(i)) : "threshold" === u && ":" === i[0] ? (i.shift(), c[u] = y(i, x)) : fe(e, "htmx:syntax:error", {
                                            token: i.shift()
                                        })
                                    }
                                    r.push(c)
                                }
                                i.length === o && fe(e, "htmx:syntax:error", {
                                    token: i.shift()
                                }), y(i, Je)
                            } while ("," === i[0] && i.shift());
                            return n && (n[t] = r), r
                        }

                        function it(e) {
                            var t = te(e, "hx-trigger"),
                                n = [];
                            if (t) {
                                var r = Q.config.triggerSpecsCache;
                                n = r && r[t] || nt(e, t, r)
                            }
                            return n.length > 0 ? n : h(e, "form") ? [{
                                trigger: "submit"
                            }] : h(e, 'input[type="button"], input[type="submit"]') ? [{
                                trigger: "click"
                            }] : h(e, rt) ? [{
                                trigger: "change"
                            }] : [{
                                trigger: "click"
                            }]
                        }

                        function at(e) {
                            ae(e).cancelled = !0
                        }

                        function ot(e, t, n) {
                            var r = ae(e);
                            r.timeout = setTimeout((function() {
                                se(e) && !0 !== r.cancelled && (ct(n, e, Wt("hx:poll:trigger", {
                                    triggerSpec: n,
                                    target: e
                                })) || t(e), ot(e, t, n))
                            }), n.pollInterval)
                        }

                        function st(e) {
                            return location.hostname === e.hostname && ee(e, "href") && 0 !== ee(e, "href").indexOf("#")
                        }

                        function lt(e, t, n) {
                            if ("A" === e.tagName && st(e) && ("" === e.target || "_self" === e.target) || "FORM" === e.tagName) {
                                var r, i;
                                if (t.boosted = !0, "A" === e.tagName) r = "get", i = ee(e, "href");
                                else {
                                    var o = ee(e, "method");
                                    r = o ? o.toLowerCase() : "get", i = ee(e, "action")
                                }
                                n.forEach((function(n) {
                                    ht(e, (function(e, t) {
                                        v(e, Q.config.disableSelector) ? p(e) : he(r, i, e, t)
                                    }), t, n, !0)
                                }))
                            }
                        }

                        function ut(e, t) {
                            if ("submit" === e.type || "click" === e.type) {
                                if ("FORM" === t.tagName) return !0;
                                if (h(t, 'input[type="submit"], button') && null !== v(t, "form")) return !0;
                                if ("A" === t.tagName && t.href && ("#" === t.getAttribute("href") || 0 !== t.getAttribute("href").indexOf("#"))) return !0
                            }
                            return !1
                        }

                        function ft(e, t) {
                            return ae(e).boosted && "A" === e.tagName && "click" === t.type && (t.ctrlKey || t.metaKey)
                        }

                        function ct(e, t, n) {
                            var r = e.eventFilter;
                            if (r) try {
                                return !0 !== r.call(t, n)
                            } catch (e) {
                                return fe(re().body, "htmx:eventFilter:error", {
                                    error: e,
                                    source: r.source
                                }), !0
                            }
                            return !1
                        }

                        function ht(e, t, n, r, i) {
                            var o, s = ae(e);
                            o = r.from ? Z(e, r.from) : [e], r.changed && o.forEach((function(e) {
                                ae(e).lastValue = e.value
                            })), oe(o, (function(o) {
                                var a = function(n) {
                                    if (se(e)) {
                                        if (!ft(e, n) && ((i || ut(n, e)) && n.preventDefault(), !ct(r, e, n))) {
                                            var l = ae(n);
                                            if (l.triggerSpec = r, null == l.handledFor && (l.handledFor = []), l.handledFor.indexOf(e) < 0) {
                                                if (l.handledFor.push(e), r.consume && n.stopPropagation(), r.target && n.target && !h(n.target, r.target)) return;
                                                if (r.once) {
                                                    if (s.triggeredOnce) return;
                                                    s.triggeredOnce = !0
                                                }
                                                if (r.changed) {
                                                    var c = ae(o);
                                                    if (c.lastValue === o.value) return;
                                                    c.lastValue = o.value
                                                }
                                                if (s.delayed && clearTimeout(s.delayed), s.throttle) return;
                                                r.throttle > 0 ? s.throttle || (t(e, n), s.throttle = setTimeout((function() {
                                                    s.throttle = null
                                                }), r.throttle)) : r.delay > 0 ? s.delayed = setTimeout((function() {
                                                    t(e, n)
                                                }), r.delay) : (ce(e, "htmx:trigger"), t(e, n))
                                            }
                                        }
                                    } else o.removeEventListener(r.trigger, a)
                                };
                                null == n.listenerInfos && (n.listenerInfos = []), n.listenerInfos.push({
                                    trigger: r.trigger,
                                    listener: a,
                                    on: o
                                }), o.addEventListener(r.trigger, a)
                            }))
                        }
                        var vt = !1,
                            dt = null;

                        function gt() {
                            dt || (dt = function() {
                                vt = !0
                            }, window.addEventListener("scroll", dt), setInterval((function() {
                                vt && (vt = !1, oe(re().querySelectorAll("[hx-trigger='revealed'],[data-hx-trigger='revealed']"), (function(e) {
                                    mt(e)
                                })))
                            }), 200))
                        }

                        function mt(e) {
                            !o(e, "data-hx-revealed") && X(e) && (e.setAttribute("data-hx-revealed", "true"), ae(e).initHash ? ce(e, "revealed") : e.addEventListener("htmx:afterProcessNode", (function(t) {
                                ce(e, "revealed")
                            }), {
                                once: !0
                            }))
                        }

                        function pt(e, t, n) {
                            for (var r = D(n), i = 0; i < r.length; i++) {
                                var o = r[i].split(/:(.+)/);
                                "connect" === o[0] && xt(e, o[1], 0), "send" === o[0] && bt(e)
                            }
                        }

                        function xt(e, t, n) {
                            if (se(e)) {
                                if (0 == t.indexOf("/")) {
                                    var r = location.hostname + (location.port ? ":" + location.port : "");
                                    "https:" == location.protocol ? t = "wss://" + r + t : "http:" == location.protocol && (t = "ws://" + r + t)
                                }
                                var i = Q.createWebSocket(t);
                                i.onerror = function(t) {
                                    fe(e, "htmx:wsError", {
                                        error: t,
                                        socket: i
                                    }), yt(e)
                                }, i.onclose = function(r) {
                                    if ([1006, 1012, 1013].indexOf(r.code) >= 0) {
                                        var i = wt(n);
                                        setTimeout((function() {
                                            xt(e, t, n + 1)
                                        }), i)
                                    }
                                }, i.onopen = function(e) {
                                    n = 0
                                }, ae(e).webSocket = i, i.addEventListener("message", (function(t) {
                                    if (!yt(e)) {
                                        var n = t.data;
                                        R(e, (function(t) {
                                            n = t.transformResponse(n, null, e)
                                        }));
                                        for (var r = T(e), i = M(l(n).children), o = 0; o < i.length; o++) {
                                            var s = i[o];
                                            Ee(te(s, "hx-swap-oob") || "true", s, r)
                                        }
                                        nr(r.tasks)
                                    }
                                }))
                            }
                        }

                        function yt(e) {
                            if (!se(e)) return ae(e).webSocket.close(), !0
                        }

                        function bt(e) {
                            var t = c(e, (function(e) {
                                return null != ae(e).webSocket
                            }));
                            t ? e.addEventListener(it(e)[0].trigger, (function(n) {
                                var r = ae(t).webSocket,
                                    i = xr(e, t),
                                    o = dr(e, "post"),
                                    s = o.errors,
                                    a = yr(le(o.values, Hr(e)), e);
                                a.HEADERS = i, s && s.length > 0 ? ce(e, "htmx:validation:halted", s) : (r.send(JSON.stringify(a)), ut(n, e) && n.preventDefault())
                            })) : fe(e, "htmx:noWebSocketSourceError")
                        }

                        function wt(e) {
                            var t = Q.config.wsReconnectDelay;
                            if ("function" == typeof t) return t(e);
                            if ("full-jitter" === t) {
                                var n = Math.min(e, 6);
                                return 1e3 * Math.pow(2, n) * Math.random()
                            }
                            b('htmx.config.wsReconnectDelay must either be a function or the string "full-jitter"')
                        }

                        function St(e, t, n) {
                            for (var r = D(n), i = 0; i < r.length; i++) {
                                var o = r[i].split(/:(.+)/);
                                "connect" === o[0] && Et(e, o[1]), "swap" === o[0] && Ct(e, o[1])
                            }
                        }

                        function Et(e, t) {
                            var n = Q.createEventSource(t);
                            n.onerror = function(t) {
                                fe(e, "htmx:sseError", {
                                    error: t,
                                    source: n
                                }), Tt(e)
                            }, ae(e).sseEventSource = n
                        }

                        function Ct(e, t) {
                            var n = c(e, Ot);
                            if (n) {
                                var r = ae(n).sseEventSource,
                                    i = function(o) {
                                        if (!Tt(n))
                                            if (se(e)) {
                                                var s = o.data;
                                                R(e, (function(t) {
                                                    s = t.transformResponse(s, null, e)
                                                }));
                                                var a = wr(e),
                                                    l = ye(e),
                                                    c = T(e);
                                                je(a.swapStyle, l, e, s, c), nr(c.tasks), ce(e, "htmx:sseMessage", o)
                                            } else r.removeEventListener(t, i)
                                    };
                                ae(e).sseListener = i, r.addEventListener(t, i)
                            } else fe(e, "htmx:noSSESourceError")
                        }

                        function Rt(e, t, n) {
                            var r = c(e, Ot);
                            if (r) {
                                var i = ae(r).sseEventSource,
                                    o = function() {
                                        Tt(r) || (se(e) ? t(e) : i.removeEventListener(n, o))
                                    };
                                ae(e).sseListener = o, i.addEventListener(n, o)
                            } else fe(e, "htmx:noSSESourceError")
                        }

                        function Tt(e) {
                            if (!se(e)) return ae(e).sseEventSource.close(), !0
                        }

                        function Ot(e) {
                            return null != ae(e).sseEventSource
                        }

                        function qt(e, t, n, r) {
                            var i = function() {
                                n.loaded || (n.loaded = !0, t(e))
                            };
                            r > 0 ? setTimeout(i, r) : i()
                        }

                        function Ht(e, t, n) {
                            var r = !1;
                            return oe(w, (function(i) {
                                if (o(e, "hx-" + i)) {
                                    var s = te(e, "hx-" + i);
                                    r = !0, t.path = s, t.verb = i, n.forEach((function(n) {
                                        Lt(e, n, t, (function(e, t) {
                                            v(e, Q.config.disableSelector) ? p(e) : he(i, s, e, t)
                                        }))
                                    }))
                                }
                            })), r
                        }

                        function Lt(e, t, n, r) {
                            if (t.sseEvent) Rt(e, r, t.sseEvent);
                            else if ("revealed" === t.trigger) gt(), ht(e, r, n, t), mt(e);
                            else if ("intersect" === t.trigger) {
                                var i = {};
                                t.root && (i.root = ue(e, t.root)), t.threshold && (i.threshold = parseFloat(t.threshold));
                                var o = new IntersectionObserver((function(t) {
                                    for (var n = 0; n < t.length; n++)
                                        if (t[n].isIntersecting) {
                                            ce(e, "intersect");
                                            break
                                        }
                                }), i);
                                o.observe(e), ht(e, r, n, t)
                            } else "load" === t.trigger ? ct(t, e, Wt("load", {
                                elt: e
                            })) || qt(e, r, n, t.delay) : t.pollInterval > 0 ? (n.polling = !0, ot(e, r, t)) : ht(e, r, n, t)
                        }

                        function At(e) {
                            if (Q.config.allowScriptTags && ("text/javascript" === e.type || "module" === e.type || "" === e.type)) {
                                var t = re().createElement("script");
                                oe(e.attributes, (function(e) {
                                    t.setAttribute(e.name, e.value)
                                })), t.textContent = e.textContent, t.async = !1, Q.config.inlineScriptNonce && (t.nonce = Q.config.inlineScriptNonce);
                                var n = e.parentElement;
                                try {
                                    n.insertBefore(t, e)
                                } catch (e) {
                                    b(e)
                                } finally {
                                    e.parentElement && e.parentElement.removeChild(e)
                                }
                            }
                        }

                        function Nt(e) {
                            h(e, "script") && At(e), oe(f(e, "script"), (function(e) {
                                At(e)
                            }))
                        }

                        function It(e) {
                            for (var t = e.attributes, n = 0; n < t.length; n++) {
                                var r = t[n].name;
                                if (s(r, "hx-on:") || s(r, "data-hx-on:") || s(r, "hx-on-") || s(r, "data-hx-on-")) return !0
                            }
                            return !1
                        }

                        function kt(e) {
                            var t = null,
                                n = [];
                            if (It(e) && n.push(e), document.evaluate)
                                for (var r = document.evaluate('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]', e); t = r.iterateNext();) n.push(t);
                            else
                                for (var i = e.getElementsByTagName("*"), o = 0; o < i.length; o++) It(i[o]) && n.push(i[o]);
                            return n
                        }

                        function Pt(e) {
                            return e.querySelectorAll ? e.querySelectorAll(i + ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost], form, [type='submit'], [hx-sse], [data-hx-sse], [hx-ws], [data-hx-ws], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger], [hx-on], [data-hx-on]") : []
                        }

                        function Mt(e) {
                            var t = v(e.target, "button, input[type='submit']"),
                                n = Dt(e);
                            n && (n.lastButtonClicked = t)
                        }

                        function Xt(e) {
                            var t = Dt(e);
                            t && (t.lastButtonClicked = null)
                        }

                        function Dt(e) {
                            var t = v(e.target, "button, input[type='submit']");
                            if (t) {
                                var n = g("#" + ee(t, "form")) || v(t, "form");
                                if (n) return ae(n)
                            }
                        }

                        function Ut(e) {
                            e.addEventListener("click", Mt), e.addEventListener("focusin", Mt), e.addEventListener("focusout", Xt)
                        }

                        function Bt(e) {
                            for (var t = Ye(e), n = 0, r = 0; r < t.length; r++) {
                                const e = t[r];
                                "{" === e ? n++ : "}" === e && n--
                            }
                            return n
                        }

                        function Ft(e, t, n) {
                            var r, i = ae(e);
                            Array.isArray(i.onHandlers) || (i.onHandlers = []);
                            var o = function(t) {
                                return Tr(e, (function() {
                                    r || (r = new Function("event", n)), r.call(e, t)
                                }))
                            };
                            e.addEventListener(t, o), i.onHandlers.push({
                                event: t,
                                listener: o
                            })
                        }

                        function Vt(e) {
                            var t = te(e, "hx-on");
                            if (t) {
                                for (var n = {}, r = t.split("\n"), i = null, o = 0; r.length > 0;) {
                                    var s = r.shift(),
                                        a = s.match(/^\s*([a-zA-Z:\-\.]+:)(.*)/);
                                    0 === o && a ? (s.split(":"), n[i = a[1].slice(0, -1)] = a[2]) : n[i] += s, o += Bt(s)
                                }
                                for (var l in n) Ft(e, l, n[l])
                            }
                        }

                        function jt(e) {
                            Ae(e);
                            for (var t = 0; t < e.attributes.length; t++) {
                                var n = e.attributes[t].name,
                                    r = e.attributes[t].value;
                                if (s(n, "hx-on") || s(n, "data-hx-on")) {
                                    var i = n.indexOf("-on") + 3,
                                        o = n.slice(i, i + 1);
                                    if ("-" === o || ":" === o) {
                                        var a = n.slice(i + 1);
                                        s(a, ":") ? a = "htmx" + a : s(a, "-") ? a = "htmx:" + a.slice(1) : s(a, "htmx-") && (a = "htmx:" + a.slice(5)), Ft(e, a, r)
                                    }
                                }
                            }
                        }

                        function _t(e) {
                            if (v(e, Q.config.disableSelector)) p(e);
                            else {
                                var t = ae(e);
                                if (t.initHash !== Le(e)) {
                                    Ne(e), t.initHash = Le(e), Vt(e), ce(e, "htmx:beforeProcessNode"), e.value && (t.lastValue = e.value);
                                    var n = it(e);
                                    Ht(e, t, n) || ("true" === ne(e, "hx-boost") ? lt(e, t, n) : o(e, "hx-trigger") && n.forEach((function(n) {
                                        Lt(e, n, t, (function() {}))
                                    }))), ("FORM" === e.tagName || "submit" === ee(e, "type") && o(e, "form")) && Ut(e);
                                    var r = te(e, "hx-sse");
                                    r && St(e, t, r);
                                    var i = te(e, "hx-ws");
                                    i && pt(e, t, i), ce(e, "htmx:afterProcessNode")
                                }
                            }
                        }

                        function zt(e) {
                            v(e = g(e), Q.config.disableSelector) ? p(e) : (_t(e), oe(Pt(e), (function(e) {
                                _t(e)
                            })), oe(kt(e), jt))
                        }

                        function $t(e) {
                            return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
                        }

                        function Wt(e, t) {
                            var n;
                            return window.CustomEvent && "function" == typeof window.CustomEvent ? n = new CustomEvent(e, {
                                bubbles: !0,
                                cancelable: !0,
                                detail: t
                            }) : (n = re().createEvent("CustomEvent")).initCustomEvent(e, !0, !0, t), n
                        }

                        function fe(e, t, n) {
                            ce(e, t, le({
                                error: t
                            }, n))
                        }

                        function Gt(e) {
                            return "htmx:afterProcessNode" === e
                        }

                        function R(e, t) {
                            oe(Fr(e), (function(e) {
                                try {
                                    t(e)
                                } catch (e) {
                                    b(e)
                                }
                            }))
                        }

                        function b(e) {
                            console.error ? console.error(e) : console.log && console.log("ERROR: ", e)
                        }

                        function ce(e, t, n) {
                            e = g(e), null == n && (n = {}), n.elt = e;
                            var r = Wt(t, n);
                            Q.logger && !Gt(t) && Q.logger(e, t, n), n.error && (b(n.error), ce(e, "htmx:error", {
                                errorInfo: n
                            }));
                            var i = e.dispatchEvent(r),
                                o = $t(t);
                            if (i && o !== t) {
                                var s = Wt(o, r.detail);
                                i = i && e.dispatchEvent(s)
                            }
                            return R(e, (function(e) {
                                i = i && !1 !== e.onEvent(t, r) && !r.defaultPrevented
                            })), i
                        }
                        var Jt = location.pathname + location.search;

                        function Zt() {
                            return re().querySelector("[hx-history-elt],[data-hx-history-elt]") || re().body
                        }

                        function Kt(e, t, n, r) {
                            if (U())
                                if (Q.config.historyCacheSize <= 0) localStorage.removeItem("htmx-history-cache");
                                else {
                                    e = B(e);
                                    for (var i = E(localStorage.getItem("htmx-history-cache")) || [], o = 0; o < i.length; o++)
                                        if (i[o].url === e) {
                                            i.splice(o, 1);
                                            break
                                        }
                                    var s = {
                                        url: e,
                                        content: t,
                                        title: n,
                                        scroll: r
                                    };
                                    for (ce(re().body, "htmx:historyItemCreated", {
                                            item: s,
                                            cache: i
                                        }), i.push(s); i.length > Q.config.historyCacheSize;) i.shift();
                                    for (; i.length > 0;) try {
                                        localStorage.setItem("htmx-history-cache", JSON.stringify(i));
                                        break
                                    } catch (e) {
                                        fe(re().body, "htmx:historyCacheError", {
                                            cause: e,
                                            cache: i
                                        }), i.shift()
                                    }
                                }
                        }

                        function Yt(e) {
                            if (!U()) return null;
                            e = B(e);
                            for (var t = E(localStorage.getItem("htmx-history-cache")) || [], n = 0; n < t.length; n++)
                                if (t[n].url === e) return t[n];
                            return null
                        }

                        function Qt(e) {
                            var t = Q.config.requestClass,
                                r = e.cloneNode(!0);
                            return oe(f(r, "." + t), (function(e) {
                                n(e, t)
                            })), r.innerHTML
                        }

                        function er() {
                            var e, t = Zt(),
                                n = Jt || location.pathname + location.search;
                            try {
                                e = re().querySelector('[hx-history="false" i],[data-hx-history="false" i]')
                            } catch (t) {
                                e = re().querySelector('[hx-history="false"],[data-hx-history="false"]')
                            }
                            e || (ce(re().body, "htmx:beforeHistorySave", {
                                path: n,
                                historyElt: t
                            }), Kt(n, Qt(t), re().title, window.scrollY)), Q.config.historyEnabled && history.replaceState({
                                htmx: !0
                            }, re().title, window.location.href)
                        }

                        function tr(e) {
                            Q.config.getCacheBusterParam && (G(e = e.replace(/org\.htmx\.cache-buster=[^&]*&?/, ""), "&") || G(e, "?")) && (e = e.slice(0, -1)), Q.config.historyEnabled && history.pushState({
                                htmx: !0
                            }, "", e), Jt = e
                        }

                        function rr(e) {
                            Q.config.historyEnabled && history.replaceState({
                                htmx: !0
                            }, "", e), Jt = e
                        }

                        function nr(e) {
                            oe(e, (function(e) {
                                e.call()
                            }))
                        }

                        function ir(e) {
                            var t = new XMLHttpRequest,
                                n = {
                                    path: e,
                                    xhr: t
                                };
                            ce(re().body, "htmx:historyCacheMiss", n), t.open("GET", e, !0), t.setRequestHeader("HX-Request", "true"), t.setRequestHeader("HX-History-Restore-Request", "true"), t.setRequestHeader("HX-Current-URL", re().location.href), t.onload = function() {
                                if (this.status >= 200 && this.status < 400) {
                                    ce(re().body, "htmx:historyCacheMissLoad", n);
                                    var t = l(this.response);
                                    t = t.querySelector("[hx-history-elt],[data-hx-history-elt]") || t;
                                    var r = Zt(),
                                        i = T(r),
                                        o = Ve(this.response);
                                    if (o) {
                                        var s = C("title");
                                        s ? s.innerHTML = o : window.document.title = o
                                    }
                                    Ue(r, t, i), nr(i.tasks), Jt = e, ce(re().body, "htmx:historyRestore", {
                                        path: e,
                                        cacheMiss: !0,
                                        serverResponse: this.response
                                    })
                                } else fe(re().body, "htmx:historyCacheMissLoadError", n)
                            }, t.send()
                        }

                        function ar(e) {
                            er();
                            var t = Yt(e = e || location.pathname + location.search);
                            if (t) {
                                var n = l(t.content),
                                    r = Zt(),
                                    i = T(r);
                                Ue(r, n, i), nr(i.tasks), document.title = t.title, setTimeout((function() {
                                    window.scrollTo(0, t.scroll)
                                }), 0), Jt = e, ce(re().body, "htmx:historyRestore", {
                                    path: e,
                                    item: t
                                })
                            } else Q.config.refreshOnHistoryMiss ? window.location.reload(!0) : ir(e)
                        }

                        function or(e) {
                            var t = pe(e, "hx-indicator");
                            return null == t && (t = [e]), oe(t, (function(e) {
                                var t = ae(e);
                                t.requestCount = (t.requestCount || 0) + 1, e.classList.add.call(e.classList, Q.config.requestClass)
                            })), t
                        }

                        function sr(e) {
                            var t = pe(e, "hx-disabled-elt");
                            return null == t && (t = []), oe(t, (function(e) {
                                var t = ae(e);
                                t.requestCount = (t.requestCount || 0) + 1, e.setAttribute("disabled", "")
                            })), t
                        }

                        function lr(e, t) {
                            oe(e, (function(e) {
                                var t = ae(e);
                                t.requestCount = (t.requestCount || 0) - 1, 0 === t.requestCount && e.classList.remove.call(e.classList, Q.config.requestClass)
                            })), oe(t, (function(e) {
                                var t = ae(e);
                                t.requestCount = (t.requestCount || 0) - 1, 0 === t.requestCount && e.removeAttribute("disabled")
                            }))
                        }

                        function ur(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if (e[n].isSameNode(t)) return !0;
                            return !1
                        }

                        function fr(e) {
                            return "" !== e.name && null != e.name && !e.disabled && !v(e, "fieldset[disabled]") && "button" !== e.type && "submit" !== e.type && "image" !== e.tagName && "reset" !== e.tagName && "file" !== e.tagName && ("checkbox" !== e.type && "radio" !== e.type || e.checked)
                        }

                        function cr(e, t, n) {
                            if (null != e && null != t) {
                                var r = n[e];
                                void 0 === r ? n[e] = t : Array.isArray(r) ? Array.isArray(t) ? n[e] = r.concat(t) : r.push(t) : Array.isArray(t) ? n[e] = [r].concat(t) : n[e] = [r, t]
                            }
                        }

                        function hr(e, t, n, r, i) {
                            if (null != r && !ur(e, r)) {
                                if (e.push(r), fr(r)) {
                                    var o = ee(r, "name"),
                                        s = r.value;
                                    r.multiple && "SELECT" === r.tagName && (s = M(r.querySelectorAll("option:checked")).map((function(e) {
                                        return e.value
                                    }))), r.files && (s = M(r.files)), cr(o, s, t), i && vr(r, n)
                                }
                                h(r, "form") && oe(r.elements, (function(r) {
                                    hr(e, t, n, r, i)
                                }))
                            }
                        }

                        function vr(e, t) {
                            e.willValidate && (ce(e, "htmx:validation:validate"), e.checkValidity() || (t.push({
                                elt: e,
                                message: e.validationMessage,
                                validity: e.validity
                            }), ce(e, "htmx:validation:failed", {
                                message: e.validationMessage,
                                validity: e.validity
                            })))
                        }

                        function dr(e, t) {
                            var n = [],
                                r = {},
                                i = {},
                                o = [],
                                s = ae(e);
                            s.lastButtonClicked && !se(s.lastButtonClicked) && (s.lastButtonClicked = null);
                            var a = h(e, "form") && !0 !== e.noValidate || "true" === te(e, "hx-validate");
                            if (s.lastButtonClicked && (a = a && !0 !== s.lastButtonClicked.formNoValidate), "get" !== t && hr(n, i, o, v(e, "form"), a), hr(n, r, o, e, a), s.lastButtonClicked || "BUTTON" === e.tagName || "INPUT" === e.tagName && "submit" === ee(e, "type")) {
                                var l = s.lastButtonClicked || e;
                                cr(ee(l, "name"), l.value, i)
                            }
                            return oe(pe(e, "hx-include"), (function(e) {
                                hr(n, r, o, e, a), h(e, "form") || oe(e.querySelectorAll(rt), (function(e) {
                                    hr(n, r, o, e, a)
                                }))
                            })), r = le(r, i), {
                                errors: o,
                                values: r
                            }
                        }

                        function gr(e, t, n) {
                            "" !== e && (e += "&"), "[object Object]" === String(n) && (n = JSON.stringify(n));
                            var r = encodeURIComponent(n);
                            return e += encodeURIComponent(t) + "=" + r
                        }

                        function mr(e) {
                            var t = "";
                            for (var n in e)
                                if (e.hasOwnProperty(n)) {
                                    var r = e[n];
                                    Array.isArray(r) ? oe(r, (function(e) {
                                        t = gr(t, n, e)
                                    })) : t = gr(t, n, r)
                                }
                            return t
                        }

                        function pr(e) {
                            var t = new FormData;
                            for (var n in e)
                                if (e.hasOwnProperty(n)) {
                                    var r = e[n];
                                    Array.isArray(r) ? oe(r, (function(e) {
                                        t.append(n, e)
                                    })) : t.append(n, r)
                                }
                            return t
                        }

                        function xr(e, t, n) {
                            var r = {
                                "HX-Request": "true",
                                "HX-Trigger": ee(e, "id"),
                                "HX-Trigger-Name": ee(e, "name"),
                                "HX-Target": te(t, "id"),
                                "HX-Current-URL": re().location.href
                            };
                            return Rr(e, "hx-headers", !1, r), void 0 !== n && (r["HX-Prompt"] = n), ae(e).boosted && (r["HX-Boosted"] = "true"), r
                        }

                        function yr(e, t) {
                            var n = ne(t, "hx-params");
                            if (n) {
                                if ("none" === n) return {};
                                if ("*" === n) return e;
                                if (0 === n.indexOf("not ")) return oe(n.substr(4).split(","), (function(t) {
                                    t = t.trim(), delete e[t]
                                })), e;
                                var r = {};
                                return oe(n.split(","), (function(t) {
                                    t = t.trim(), r[t] = e[t]
                                })), r
                            }
                            return e
                        }

                        function br(e) {
                            return ee(e, "href") && ee(e, "href").indexOf("#") >= 0
                        }

                        function wr(e, t) {
                            var n = t || ne(e, "hx-swap"),
                                r = {
                                    swapStyle: ae(e).boosted ? "innerHTML" : Q.config.defaultSwapStyle,
                                    swapDelay: Q.config.defaultSwapDelay,
                                    settleDelay: Q.config.defaultSettleDelay
                                };
                            if (Q.config.scrollIntoViewOnBoost && ae(e).boosted && !br(e) && (r.show = "top"), n) {
                                var i = D(n);
                                if (i.length > 0)
                                    for (var o = 0; o < i.length; o++) {
                                        var s = i[o];
                                        if (0 === s.indexOf("swap:")) r.swapDelay = d(s.substr(5));
                                        else if (0 === s.indexOf("settle:")) r.settleDelay = d(s.substr(7));
                                        else if (0 === s.indexOf("transition:")) r.transition = "true" === s.substr(11);
                                        else if (0 === s.indexOf("ignoreTitle:")) r.ignoreTitle = "true" === s.substr(12);
                                        else if (0 === s.indexOf("scroll:")) {
                                            var a = (c = s.substr(7).split(":")).pop(),
                                                l = c.length > 0 ? c.join(":") : null;
                                            r.scroll = a, r.scrollTarget = l
                                        } else if (0 === s.indexOf("show:")) {
                                            var c, u = (c = s.substr(5).split(":")).pop();
                                            l = c.length > 0 ? c.join(":") : null, r.show = u, r.showTarget = l
                                        } else if (0 === s.indexOf("focus-scroll:")) {
                                            var h = s.substr(13);
                                            r.focusScroll = "true" == h
                                        } else 0 == o ? r.swapStyle = s : b("Unknown modifier in hx-swap: " + s)
                                    }
                            }
                            return r
                        }

                        function Sr(e) {
                            return "multipart/form-data" === ne(e, "hx-encoding") || h(e, "form") && "multipart/form-data" === ee(e, "enctype")
                        }

                        function Er(e, t, n) {
                            var r = null;
                            return R(t, (function(i) {
                                null == r && (r = i.encodeParameters(e, n, t))
                            })), null != r ? r : Sr(t) ? pr(n) : mr(n)
                        }

                        function T(e) {
                            return {
                                tasks: [],
                                elts: [e]
                            }
                        }

                        function Cr(e, t) {
                            var n = e[0],
                                r = e[e.length - 1];
                            if (t.scroll) {
                                var i = null;
                                t.scrollTarget && (i = ue(n, t.scrollTarget)), "top" === t.scroll && (n || i) && ((i = i || n).scrollTop = 0), "bottom" === t.scroll && (r || i) && ((i = i || r).scrollTop = i.scrollHeight)
                            }
                            if (t.show) {
                                if (i = null, t.showTarget) {
                                    var o = t.showTarget;
                                    "window" === t.showTarget && (o = "body"), i = ue(n, o)
                                }
                                "top" === t.show && (n || i) && (i = i || n).scrollIntoView({
                                    block: "start",
                                    behavior: Q.config.scrollBehavior
                                }), "bottom" === t.show && (r || i) && (i = i || r).scrollIntoView({
                                    block: "end",
                                    behavior: Q.config.scrollBehavior
                                })
                            }
                        }

                        function Rr(e, t, n, r) {
                            if (null == r && (r = {}), null == e) return r;
                            var i = te(e, t);
                            if (i) {
                                var o, s = i.trim(),
                                    a = n;
                                if ("unset" === s) return null;
                                for (var l in 0 === s.indexOf("javascript:") ? (s = s.substr(11), a = !0) : 0 === s.indexOf("js:") && (s = s.substr(3), a = !0), 0 !== s.indexOf("{") && (s = "{" + s + "}"), o = a ? Tr(e, (function() {
                                        return Function("return (" + s + ")")()
                                    }), {}) : E(s)) o.hasOwnProperty(l) && null == r[l] && (r[l] = o[l])
                            }
                            return Rr(u(e), t, n, r)
                        }

                        function Tr(e, t, n) {
                            return Q.config.allowEval ? t() : (fe(e, "htmx:evalDisallowedError"), n)
                        }

                        function Or(e, t) {
                            return Rr(e, "hx-vars", !0, t)
                        }

                        function qr(e, t) {
                            return Rr(e, "hx-vals", !1, t)
                        }

                        function Hr(e) {
                            return le(Or(e), qr(e))
                        }

                        function Lr(e, t, n) {
                            if (null !== n) try {
                                e.setRequestHeader(t, n)
                            } catch (r) {
                                e.setRequestHeader(t, encodeURIComponent(n)), e.setRequestHeader(t + "-URI-AutoEncoded", "true")
                            }
                        }

                        function Ar(e) {
                            if (e.responseURL && "undefined" != typeof URL) try {
                                var t = new URL(e.responseURL);
                                return t.pathname + t.search
                            } catch (t) {
                                fe(re().body, "htmx:badResponseUrl", {
                                    url: e.responseURL
                                })
                            }
                        }

                        function O(e, t) {
                            return t.test(e.getAllResponseHeaders())
                        }

                        function Nr(e, t, n) {
                            return e = e.toLowerCase(), n ? n instanceof Element || I(n, "String") ? he(e, t, null, null, {
                                targetOverride: g(n),
                                returnPromise: !0
                            }) : he(e, t, g(n.source), n.event, {
                                handler: n.handler,
                                headers: n.headers,
                                values: n.values,
                                targetOverride: g(n.target),
                                swapOverride: n.swap,
                                select: n.select,
                                returnPromise: !0
                            }) : he(e, t, null, null, {
                                returnPromise: !0
                            })
                        }

                        function Ir(e) {
                            for (var t = []; e;) t.push(e), e = e.parentElement;
                            return t
                        }

                        function kr(e, t, n) {
                            var r, i;
                            return "function" == typeof URL ? (i = new URL(t, document.location.href), r = document.location.origin === i.origin) : (i = t, r = s(t, document.location.origin)), !(Q.config.selfRequestsOnly && !r) && ce(e, "htmx:validateUrl", le({
                                url: i,
                                sameHost: r
                            }, n))
                        }

                        function he(e, t, n, r, i, o) {
                            var s = null,
                                a = null;
                            if ((i = null != i ? i : {}).returnPromise && "undefined" != typeof Promise) var l = new Promise((function(e, t) {
                                s = e, a = t
                            }));
                            null == n && (n = re().body);
                            var c = i.handler || Mr,
                                u = i.select || null;
                            if (!se(n)) return ie(s), l;
                            var h = i.targetOverride || ye(n);
                            if (null == h || h == me) return fe(n, "htmx:targetError", {
                                target: te(n, "hx-target")
                            }), ie(a), l;
                            var f = ae(n),
                                d = f.lastButtonClicked;
                            if (d) {
                                var p = ee(d, "formaction");
                                null != p && (t = p);
                                var g = ee(d, "formmethod");
                                null != g && "dialog" !== g.toLowerCase() && (e = g)
                            }
                            var m = ne(n, "hx-confirm");
                            if (void 0 === o) {
                                var v = {
                                    target: h,
                                    elt: n,
                                    path: t,
                                    verb: e,
                                    triggeringEvent: r,
                                    etc: i,
                                    issueRequest: function(o) {
                                        return he(e, t, n, r, i, !!o)
                                    },
                                    question: m
                                };
                                if (!1 === ce(n, "htmx:confirm", v)) return ie(s), l
                            }
                            var _ = n,
                                b = ne(n, "hx-sync"),
                                y = null,
                                w = !1;
                            if (b) {
                                var E = b.split(":"),
                                    x = E[0].trim();
                                if (_ = "this" === x ? xe(n, "hx-sync") : ue(n, x), b = (E[1] || "drop").trim(), f = ae(_), "drop" === b && f.xhr && !0 !== f.abortable) return ie(s), l;
                                if ("abort" === b) {
                                    if (f.xhr) return ie(s), l;
                                    w = !0
                                } else "replace" === b ? ce(_, "htmx:abort") : 0 === b.indexOf("queue") && (y = (b.split(" ")[1] || "last").trim())
                            }
                            if (f.xhr) {
                                if (!f.abortable) {
                                    if (null == y) {
                                        if (r) {
                                            var S = ae(r);
                                            S && S.triggerSpec && S.triggerSpec.queue && (y = S.triggerSpec.queue)
                                        }
                                        null == y && (y = "last")
                                    }
                                    return null == f.queuedRequests && (f.queuedRequests = []), "first" === y && 0 === f.queuedRequests.length || "all" === y ? f.queuedRequests.push((function() {
                                        he(e, t, n, r, i)
                                    })) : "last" === y && (f.queuedRequests = [], f.queuedRequests.push((function() {
                                        he(e, t, n, r, i)
                                    }))), ie(s), l
                                }
                                ce(_, "htmx:abort")
                            }
                            var T = new XMLHttpRequest;
                            f.xhr = T, f.abortable = w;
                            var C = function() {
                                    f.xhr = null, f.abortable = !1, null != f.queuedRequests && f.queuedRequests.length > 0 && f.queuedRequests.shift()()
                                },
                                O = ne(n, "hx-prompt");
                            if (O) {
                                var A = prompt(O);
                                if (null === A || !ce(n, "htmx:prompt", {
                                        prompt: A,
                                        target: h
                                    })) return ie(s), C(), l
                            }
                            if (m && !o && !confirm(m)) return ie(s), C(), l;
                            var k = xr(n, h, A);
                            "get" === e || Sr(n) || (k["Content-Type"] = "application/x-www-form-urlencoded"), i.headers && (k = le(k, i.headers));
                            var D = dr(n, e),
                                L = D.errors,
                                N = D.values;
                            i.values && (N = le(N, i.values));
                            var I = le(N, Hr(n)),
                                P = yr(I, n);
                            Q.config.getCacheBusterParam && "get" === e && (P["org.htmx.cache-buster"] = ee(h, "id") || "true"), null != t && "" !== t || (t = re().location.href);
                            var M = Rr(n, "hx-request"),
                                R = ae(n).boosted,
                                H = Q.config.methodsThatUseUrlParams.indexOf(e) >= 0,
                                q = {
                                    boosted: R,
                                    useUrlParams: H,
                                    parameters: P,
                                    unfilteredParameters: I,
                                    headers: k,
                                    target: h,
                                    verb: e,
                                    errors: L,
                                    withCredentials: i.credentials || M.credentials || Q.config.withCredentials,
                                    timeout: i.timeout || M.timeout || Q.config.timeout,
                                    path: t,
                                    triggeringEvent: r
                                };
                            if (!ce(n, "htmx:configRequest", q)) return ie(s), C(), l;
                            if (t = q.path, e = q.verb, k = q.headers, P = q.parameters, H = q.useUrlParams, (L = q.errors) && L.length > 0) return ce(n, "htmx:validation:halted", q), ie(s), C(), l;
                            var j = t.split("#"),
                                $ = j[0],
                                B = j[1],
                                F = t;
                            if (H && (F = $, 0 !== Object.keys(P).length && (F.indexOf("?") < 0 ? F += "?" : F += "&", F += mr(P), B && (F += "#" + B))), !kr(n, F, q)) return fe(n, "htmx:invalidPath", q), ie(a), l;
                            if (T.open(e.toUpperCase(), F, !0), T.overrideMimeType("text/html"), T.withCredentials = q.withCredentials, T.timeout = q.timeout, M.noHeaders);
                            else
                                for (var X in k)
                                    if (k.hasOwnProperty(X)) {
                                        var W = k[X];
                                        Lr(T, X, W)
                                    } var U = {
                                xhr: T,
                                target: h,
                                requestConfig: q,
                                etc: i,
                                boosted: R,
                                select: u,
                                pathInfo: {
                                    requestPath: t,
                                    finalRequestPath: F,
                                    anchor: B
                                }
                            };
                            if (T.onload = function() {
                                    try {
                                        var e = Ir(n);
                                        if (U.pathInfo.responsePath = Ar(T), c(n, U), lr(z, Y), ce(n, "htmx:afterRequest", U), ce(n, "htmx:afterOnLoad", U), !se(n)) {
                                            for (var t = null; e.length > 0 && null == t;) {
                                                var r = e.shift();
                                                se(r) && (t = r)
                                            }
                                            t && (ce(t, "htmx:afterRequest", U), ce(t, "htmx:afterOnLoad", U))
                                        }
                                        ie(s), C()
                                    } catch (e) {
                                        throw fe(n, "htmx:onLoadError", le({
                                            error: e
                                        }, U)), e
                                    }
                                }, T.onerror = function() {
                                    lr(z, Y), fe(n, "htmx:afterRequest", U), fe(n, "htmx:sendError", U), ie(a), C()
                                }, T.onabort = function() {
                                    lr(z, Y), fe(n, "htmx:afterRequest", U), fe(n, "htmx:sendAbort", U), ie(a), C()
                                }, T.ontimeout = function() {
                                    lr(z, Y), fe(n, "htmx:afterRequest", U), fe(n, "htmx:timeout", U), ie(a), C()
                                }, !ce(n, "htmx:beforeRequest", U)) return ie(s), C(), l;
                            var z = or(n),
                                Y = sr(n);
                            oe(["loadstart", "loadend", "progress", "abort"], (function(e) {
                                oe([T, T.upload], (function(t) {
                                    t.addEventListener(e, (function(t) {
                                        ce(n, "htmx:xhr:" + e, {
                                            lengthComputable: t.lengthComputable,
                                            loaded: t.loaded,
                                            total: t.total
                                        })
                                    }))
                                }))
                            })), ce(n, "htmx:beforeSend", U);
                            var V = H ? null : Er(T, n, P);
                            return T.send(V), l
                        }

                        function Pr(e, t) {
                            var n = t.xhr,
                                r = null,
                                i = null;
                            if (O(n, /HX-Push:/i) ? (r = n.getResponseHeader("HX-Push"), i = "push") : O(n, /HX-Push-Url:/i) ? (r = n.getResponseHeader("HX-Push-Url"), i = "push") : O(n, /HX-Replace-Url:/i) && (r = n.getResponseHeader("HX-Replace-Url"), i = "replace"), r) return "false" === r ? {} : {
                                type: i,
                                path: r
                            };
                            var o = t.pathInfo.finalRequestPath,
                                s = t.pathInfo.responsePath,
                                a = ne(e, "hx-push-url"),
                                l = ne(e, "hx-replace-url"),
                                c = ae(e).boosted,
                                u = null,
                                h = null;
                            return a ? (u = "push", h = a) : l ? (u = "replace", h = l) : c && (u = "push", h = s || o), h ? "false" === h ? {} : ("true" === h && (h = s || o), t.pathInfo.anchor && -1 === h.indexOf("#") && (h = h + "#" + t.pathInfo.anchor), {
                                type: u,
                                path: h
                            }) : {}
                        }

                        function Mr(e, t) {
                            var n = t.xhr,
                                r = t.target,
                                i = t.etc,
                                o = (t.requestConfig, t.select);
                            if (ce(e, "htmx:beforeOnLoad", t)) {
                                if (O(n, /HX-Trigger:/i) && _e(n, "HX-Trigger", e), O(n, /HX-Location:/i)) {
                                    er();
                                    var s = n.getResponseHeader("HX-Location");
                                    return 0 === s.indexOf("{") && (p = E(s), s = p.path, delete p.path), void Nr("GET", s, p).then((function() {
                                        tr(s)
                                    }))
                                }
                                var a = O(n, /HX-Refresh:/i) && "true" === n.getResponseHeader("HX-Refresh");
                                if (O(n, /HX-Redirect:/i)) return location.href = n.getResponseHeader("HX-Redirect"), void(a && location.reload());
                                if (a) location.reload();
                                else {
                                    O(n, /HX-Retarget:/i) && ("this" === n.getResponseHeader("HX-Retarget") ? t.target = e : t.target = ue(e, n.getResponseHeader("HX-Retarget")));
                                    var l = Pr(e, t),
                                        c = n.status >= 200 && n.status < 400 && 204 !== n.status,
                                        u = n.response,
                                        h = n.status >= 400,
                                        f = Q.config.ignoreTitle,
                                        d = le({
                                            shouldSwap: c,
                                            serverResponse: u,
                                            isError: h,
                                            ignoreTitle: f
                                        }, t);
                                    if (ce(r, "htmx:beforeSwap", d)) {
                                        if (r = d.target, u = d.serverResponse, h = d.isError, f = d.ignoreTitle, t.target = r, t.failed = h, t.successful = !h, d.shouldSwap) {
                                            286 === n.status && at(e), R(e, (function(t) {
                                                u = t.transformResponse(u, n, e)
                                            })), l.type && er();
                                            var p, g = i.swapOverride;
                                            O(n, /HX-Reswap:/i) && (g = n.getResponseHeader("HX-Reswap")), (p = wr(e, g)).hasOwnProperty("ignoreTitle") && (f = p.ignoreTitle), r.classList.add(Q.config.swappingClass);
                                            var m = null,
                                                v = null,
                                                _ = function() {
                                                    try {
                                                        var i, s = document.activeElement,
                                                            a = {};
                                                        try {
                                                            a = {
                                                                elt: s,
                                                                start: s ? s.selectionStart : null,
                                                                end: s ? s.selectionEnd : null
                                                            }
                                                        } catch (s) {}
                                                        o && (i = o), O(n, /HX-Reselect:/i) && (i = n.getResponseHeader("HX-Reselect")), l.type && (ce(re().body, "htmx:beforeHistoryUpdate", le({
                                                            history: l
                                                        }, t)), "push" === l.type ? (tr(l.path), ce(re().body, "htmx:pushedIntoHistory", {
                                                            path: l.path
                                                        })) : (rr(l.path), ce(re().body, "htmx:replacedInHistory", {
                                                            path: l.path
                                                        })));
                                                        var c = T(r);
                                                        if (je(p.swapStyle, r, e, u, c, i), a.elt && !se(a.elt) && ee(a.elt, "id")) {
                                                            var h = document.getElementById(ee(a.elt, "id")),
                                                                d = {
                                                                    preventScroll: void 0 !== p.focusScroll ? !p.focusScroll : !Q.config.defaultFocusScroll
                                                                };
                                                            if (h) {
                                                                if (a.start && h.setSelectionRange) try {
                                                                    h.setSelectionRange(a.start, a.end)
                                                                } catch (s) {}
                                                                h.focus(d)
                                                            }
                                                        }
                                                        if (r.classList.remove(Q.config.swappingClass), oe(c.elts, (function(e) {
                                                                e.classList && e.classList.add(Q.config.settlingClass), ce(e, "htmx:afterSwap", t)
                                                            })), O(n, /HX-Trigger-After-Swap:/i)) {
                                                            var g = e;
                                                            se(e) || (g = re().body), _e(n, "HX-Trigger-After-Swap", g)
                                                        }
                                                        var _ = function() {
                                                            if (oe(c.tasks, (function(e) {
                                                                    e.call()
                                                                })), oe(c.elts, (function(e) {
                                                                    e.classList && e.classList.remove(Q.config.settlingClass), ce(e, "htmx:afterSettle", t)
                                                                })), t.pathInfo.anchor) {
                                                                var r = re().getElementById(t.pathInfo.anchor);
                                                                r && r.scrollIntoView({
                                                                    block: "start",
                                                                    behavior: "auto"
                                                                })
                                                            }
                                                            if (c.title && !f) {
                                                                var i = C("title");
                                                                i ? i.innerHTML = c.title : window.document.title = c.title
                                                            }
                                                            if (Cr(c.elts, p), O(n, /HX-Trigger-After-Settle:/i)) {
                                                                var o = e;
                                                                se(e) || (o = re().body), _e(n, "HX-Trigger-After-Settle", o)
                                                            }
                                                            ie(m)
                                                        };
                                                        p.settleDelay > 0 ? setTimeout(_, p.settleDelay) : _()
                                                    } catch (s) {
                                                        throw fe(e, "htmx:swapError", t), ie(v), s
                                                    }
                                                },
                                                b = Q.config.globalViewTransitions;
                                            if (p.hasOwnProperty("transition") && (b = p.transition), b && ce(e, "htmx:beforeTransition", t) && "undefined" != typeof Promise && document.startViewTransition) {
                                                var y = new Promise((function(e, t) {
                                                        m = e, v = t
                                                    })),
                                                    w = _;
                                                _ = function() {
                                                    document.startViewTransition((function() {
                                                        return w(), y
                                                    }))
                                                }
                                            }
                                            p.swapDelay > 0 ? setTimeout(_, p.swapDelay) : _()
                                        }
                                        h && fe(e, "htmx:responseError", le({
                                            error: "Response Status Error Code " + n.status + " from " + t.pathInfo.requestPath
                                        }, t))
                                    }
                                }
                            }
                        }
                        var Xr = {};

                        function Dr() {
                            return {
                                init: function(e) {
                                    return null
                                },
                                onEvent: function(e, t) {
                                    return !0
                                },
                                transformResponse: function(e, t, n) {
                                    return e
                                },
                                isInlineSwap: function(e) {
                                    return !1
                                },
                                handleSwap: function(e, t, n, r) {
                                    return !1
                                },
                                encodeParameters: function(e, t, n) {
                                    return null
                                }
                            }
                        }

                        function Ur(e, t) {
                            t.init && t.init(r), Xr[e] = le(Dr(), t)
                        }

                        function Br(e) {
                            delete Xr[e]
                        }

                        function Fr(e, t, n) {
                            if (null == e) return t;
                            null == t && (t = []), null == n && (n = []);
                            var r = te(e, "hx-ext");
                            return r && oe(r.split(","), (function(e) {
                                if ("ignore:" != (e = e.replace(/ /g, "")).slice(0, 7)) {
                                    if (n.indexOf(e) < 0) {
                                        var r = Xr[e];
                                        r && t.indexOf(r) < 0 && t.push(r)
                                    }
                                } else n.push(e.slice(7))
                            })), Fr(u(e), t, n)
                        }
                        var Vr = !1;

                        function jr(e) {
                            Vr || "complete" === re().readyState ? e() : re().addEventListener("DOMContentLoaded", e)
                        }

                        function _r() {
                            !1 !== Q.config.includeIndicatorStyles && re().head.insertAdjacentHTML("beforeend", "<style>                      ." + Q.config.indicatorClass + "{opacity:0}                      ." + Q.config.requestClass + " ." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                      ." + Q.config.requestClass + "." + Q.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}                    </style>")
                        }

                        function zr() {
                            var e = re().querySelector('meta[name="htmx-config"]');
                            return e ? E(e.content) : null
                        }

                        function $r() {
                            var e = zr();
                            e && (Q.config = le(Q.config, e))
                        }
                        return re().addEventListener("DOMContentLoaded", (function() {
                            Vr = !0
                        })), jr((function() {
                            $r(), _r();
                            var e = re().body;
                            zt(e);
                            var t = re().querySelectorAll("[hx-trigger='restored'],[data-hx-trigger='restored']");
                            e.addEventListener("htmx:abort", (function(e) {
                                var t = ae(e.target);
                                t && t.xhr && t.xhr.abort()
                            }));
                            const n = window.onpopstate ? window.onpopstate.bind(window) : null;
                            window.onpopstate = function(e) {
                                e.state && e.state.htmx ? (ar(), oe(t, (function(e) {
                                    ce(e, "htmx:restored", {
                                        document: re(),
                                        triggerEvent: ce
                                    })
                                }))) : n && n(e)
                            }, setTimeout((function() {
                                ce(e, "htmx:load", {}), e = null
                            }), 0)
                        })), Q
                    }()
                }, __WEBPACK_AMD_DEFINE_ARRAY__ = [], void 0 === (__WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof(__WEBPACK_AMD_DEFINE_FACTORY__ = t) ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__) || (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
            },
            489: () => {}
        },
        __webpack_module_cache__ = {},
        deferred;

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports
    }
    __webpack_require__.m = __webpack_modules__, deferred = [], __webpack_require__.O = (e, t, n, r) => {
        if (!t) {
            var i = 1 / 0;
            for (l = 0; l < deferred.length; l++) {
                for (var [t, n, r] = deferred[l], o = !0, s = 0; s < t.length; s++)(!1 & r || i >= r) && Object.keys(__webpack_require__.O).every((e => __webpack_require__.O[e](t[s]))) ? t.splice(s--, 1) : (o = !1, r < i && (i = r));
                if (o) {
                    deferred.splice(l--, 1);
                    var a = n();
                    void 0 !== a && (e = a)
                }
            }
            return e
        }
        r = r || 0;
        for (var l = deferred.length; l > 0 && deferred[l - 1][2] > r; l--) deferred[l] = deferred[l - 1];
        deferred[l] = [t, n, r]
    }, __webpack_require__.d = (e, t) => {
        for (var n in t) __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e = {
            522: 0,
            870: 0
        };
        __webpack_require__.O.j = t => 0 === e[t];
        var t = (t, n) => {
                var r, i, [o, s, a] = n,
                    l = 0;
                if (o.some((t => 0 !== e[t]))) {
                    for (r in s) __webpack_require__.o(s, r) && (__webpack_require__.m[r] = s[r]);
                    if (a) var c = a(__webpack_require__)
                }
                for (t && t(n); l < o.length; l++) i = o[l], __webpack_require__.o(e, i) && e[i] && e[i][0](), e[i] = 0;
                return __webpack_require__.O(c)
            },
            n = self.webpackChunkmix = self.webpackChunkmix || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })(), __webpack_require__.O(void 0, [870], (() => __webpack_require__(400)));
    var __webpack_exports__ = __webpack_require__.O(void 0, [870], (() => __webpack_require__(489)));
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__)
})();