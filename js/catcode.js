! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var s = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var s in e) n.d(r, s, function(t) {
                return e[t]
            }.bind(null, s));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "/", n(n.s = 410)
}({
    105: function(e, t, n) {
        "use strict";
        var r = n(75),
            s = n(23),
            a = n(38),
            o = n(31),
            i = n(43),
            c = n(35),
            p = n(80),
            l = n(76),
            u = Math.max,
            d = Math.min,
            h = Math.floor,
            f = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            m = /\$([$&'`]|\d\d?)/g;
        r("replace", 2, (function(e, t, n) {
            return [function(n, r) {
                var s = c(this),
                    a = null == n ? void 0 : n[e];
                return void 0 !== a ? a.call(n, s, r) : t.call(String(s), n, r)
            }, function(e, a) {
                var c = n(t, e, this, a);
                if (c.done) return c.value;
                var h = s(e),
                    f = String(this),
                    m = "function" == typeof a;
                m || (a = String(a));
                var g = h.global;
                if (g) {
                    var y = h.unicode;
                    h.lastIndex = 0
                }
                for (var v = [];;) {
                    var w = l(h, f);
                    if (null === w) break;
                    if (v.push(w), !g) break;
                    "" === String(w[0]) && (h.lastIndex = p(f, o(h.lastIndex), y))
                }
                for (var S, x = "", b = 0, I = 0; I < v.length; I++) {
                    w = v[I];
                    for (var M = String(w[0]), T = u(d(i(w.index), f.length), 0), k = [], O = 1; O < w.length; O++) k.push(void 0 === (S = w[O]) ? S : String(S));
                    var N = w.groups;
                    if (m) {
                        var J = [M].concat(k, T, f);
                        void 0 !== N && J.push(N);
                        var P = String(a.apply(void 0, J))
                    } else P = r(M, f, T, k, N, a);
                    T >= b && (x += f.slice(b, T) + P, b = T + M.length)
                }
                return x + f.slice(b)
            }];

            function r(e, n, r, s, o, i) {
                var c = r + e.length,
                    p = s.length,
                    l = m;
                return void 0 !== o && (o = a(o), l = f), t.call(i, l, (function(t, a) {
                    var i;
                    switch (a.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return e;
                        case "`":
                            return n.slice(0, r);
                        case "'":
                            return n.slice(c);
                        case "<":
                            i = o[a.slice(1, -1)];
                            break;
                        default:
                            var l = +a;
                            if (0 === l) return t;
                            if (l > p) {
                                var u = h(l / 10);
                                return 0 === u ? t : u <= p ? void 0 === s[u - 1] ? a.charAt(1) : s[u - 1] + a.charAt(1) : t
                            }
                            i = s[l - 1]
                    }
                    return void 0 === i ? "" : i
                }))
            }
        }))
    },
    108: function(e, t, n) {
        var r = n(18),
            s = n(58),
            a = r["__core-js_shared__"] || s("__core-js_shared__", {});
        e.exports = a
    },
    109: function(e, t, n) {
        var r = n(18),
            s = n(79),
            a = r.WeakMap;
        e.exports = "function" == typeof a && /native code/.test(s.call(a))
    },
    18: function(e, t, n) {
        (function(t) {
            var n = function(e) {
                return e && e.Math == Math && e
            };
            e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")()
        }).call(this, n(44))
    },
    20: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    21: function(e, t, n) {
        var r = n(18),
            s = n(42),
            a = n(63),
            o = n(92),
            i = r.Symbol,
            c = s("wks");
        e.exports = function(e) {
            return c[e] || (c[e] = o && i[e] || (o ? i : a)("Symbol." + e))
        }
    },
    23: function(e, t, n) {
        var r = n(24);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(String(e) + " is not an object");
            return e
        }
    },
    24: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    26: function(e, t, n) {
        var r = n(20);
        e.exports = !r((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    27: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    28: function(e, t, n) {
        var r = n(26),
            s = n(30),
            a = n(49);
        e.exports = r ? function(e, t, n) {
            return s.f(e, t, a(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    30: function(e, t, n) {
        var r = n(26),
            s = n(83),
            a = n(23),
            o = n(52),
            i = Object.defineProperty;
        t.f = r ? i : function(e, t, n) {
            if (a(e), t = o(t, !0), a(n), s) try {
                return i(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
            return "value" in n && (e[t] = n.value), e
        }
    },
    31: function(e, t, n) {
        var r = n(43),
            s = Math.min;
        e.exports = function(e) {
            return e > 0 ? s(r(e), 9007199254740991) : 0
        }
    },
    34: function(e, t, n) {
        var r = n(18),
            s = n(42),
            a = n(28),
            o = n(27),
            i = n(58),
            c = n(79),
            p = n(50),
            l = p.get,
            u = p.enforce,
            d = String(c).split("toString");
        s("inspectSource", (function(e) {
            return c.call(e)
        })), (e.exports = function(e, t, n, s) {
            var c = !!s && !!s.unsafe,
                p = !!s && !!s.enumerable,
                l = !!s && !!s.noTargetGet;
            "function" == typeof n && ("string" != typeof t || o(n, "name") || a(n, "name", t), u(n).source = d.join("string" == typeof t ? t : "")), e !== r ? (c ? !l && e[t] && (p = !0) : delete e[t], p ? e[t] = n : a(e, t, n)) : p ? e[t] = n : i(t, n)
        })(Function.prototype, "toString", (function() {
            return "function" == typeof this && l(this).source || c.call(this)
        }))
    },
    35: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        }
    },
    36: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    38: function(e, t, n) {
        var r = n(35);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    410: function(e, t, n) {
        "use strict";
        n.r(t);
        n(82), n(105);

        function r() {
            this.name = "Meow", this.sleep = 100, this.happiness = 100, this.hunger = 100, this.loyalty = 100, this.cleanliness = 100, this.playful = 100, this.thirst = 100, this.posLeft = null, this.posTop = null, this.hideUntil = 0, this.show = !0, this.walk = !0, this.talk = !0, this.idleType = "idle", this.walkType = "BOTTOM", this.skin = "grey"
        }
        var s = {
            pets: {
                cat1: new r,
                cat2: new r
            },
            ownerName: "Human",
            reminders: o(),
            chromePopupReminders: !1
        };

        function a() {
            this.hours = 0, this.minutes = 0, this.text = "", this.enabled = !0, this.lastReminded = (new Date).getTime()
        }

        function o() {
            var e = new a;
            e.enabled = !1, e.hours = 0, e.minutes = 20, e.text = "Look away from your screen for 10 seconds and blink multiple times";
            var t = new a;
            t.enabled = !1, t.hours = 0, t.minutes = 45, t.text = "Don't forget to drink";
            var n = new a;
            return n.enabled = !1, n.hours = 2, n.minutes = 0, n.text = "Take a rest from the screen, stand up and walk for a few minutes", {
                1: e,
                2: t,
                3: n
            }
        }
        var i = localStorage.getItem("pets");
        if (i)
            for (var c in i = JSON.parse(i), s.pets = i, s.pets) s.pets[c].loyalty || (s.pets[c].loyalty = 100, localStorage.setItem("pets", JSON.stringify(s.pets))), s.pets[c].thirst || (s.pets[c].thirst = 100, localStorage.setItem("pets", JSON.stringify(s.pets))), s.pets[c].playful || (s.pets[c].playful = 100, localStorage.setItem("pets", JSON.stringify(s.pets))), s.pets[c].cleanliness || (s.pets[c].cleanliness = 100, localStorage.setItem("pets", JSON.stringify(s.pets)));
        else localStorage.setItem("pets", JSON.stringify(s.pets));
        var p = localStorage.getItem("reminders");
        p ? (p = JSON.parse(p), s.reminders = p) : (s.reminders = o(), localStorage.setItem("reminders", JSON.stringify(s.reminders)));
        var l = localStorage.getItem("chromePopupReminders");
        l && "true" == l && (s.chromePopupReminders = !0);
        var u = localStorage.getItem("ownerName");
        u && (s.ownerName = u);

        function d() {
            chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "revive",
                    data: s.pets.cat1
                })
            }))
        }
        chrome.runtime.onMessage.addListener((function(e, t, n) {
            var r = {
                pet: s.pets.cat1
            };
            if ("initiate" == e.method) r.isDebug = !("update_url" in chrome.runtime.getManifest()), chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "browser-assets-ready",
                    data: {
                        pet: s.pets.cat1
                    }
                })
            }));
            else if ("request-login" == e.method) {
                var o = "",
                    i = localStorage.getItem("login");
                i && (o = (i = JSON.parse(i)).login_token), r.token = o
            } else if ("PING" == e.method);
            else if ("updatePositions" == e.method) e.data.posLeft || (e.data.posLeft = 0), e.data.posTop || (e.data.posTop = 0), s.pets.cat1.posLeft = e.data.posLeft, s.pets.cat1.posTop = e.data.posTop, localStorage.setItem("pets", JSON.stringify(s.pets));
            else if ("hide-30-min" == e.method) {
                var c = (new Date).getTime() + 72e5;
                s.pets.cat1.hideUntil = c, localStorage.setItem("pets", JSON.stringify(s.pets)), chrome.tabs.query({}, (function(e) {
                    for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                        method: "hide",
                        data: s.pets.cat1
                    })
                }))
            } else if ("show-toggle" == e.method) s.pets.cat1.hideUntil = 0, e.data.status ? (s.pets.cat1.show = !0, s.pets.cat1.skin = e.data.skin, localStorage.setItem("pets", JSON.stringify(s.pets)), d()) : (s.pets.cat1.show = !1, localStorage.setItem("pets", JSON.stringify(s.pets)), chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "hide",
                    data: s.pets.cat1
                })
            })));
            else if ("walk-toggle" == e.method) s.pets.cat1.walk = e.data.status, localStorage.setItem("pets", JSON.stringify(s.pets)), chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "update-options",
                    data: s.pets.cat1
                })
            }));
            else if ("change-chrome-notify" == e.method) s.chromePopupReminders = e.data.status, localStorage.setItem("chromePopupReminders", s.chromePopupReminders);
            else if ("walk-type" == e.method) s.pets.cat1.walkType = e.data.status, localStorage.setItem("pets", JSON.stringify(s.pets)), chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "update-options",
                    data: s.pets.cat1
                })
            }));
            else if ("talk-toggle" == e.method) s.pets.cat1.talk = e.data.status, localStorage.setItem("pets", JSON.stringify(s.pets)), chrome.tabs.query({}, (function(e) {
                for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                    method: "update-options",
                    data: s.pets.cat1
                })
            }));
            else if ("eat-request" == e.method) s.pets.cat1.hunger = s.pets.cat1.hunger + 20, s.pets.cat1.happiness = s.pets.cat1.happiness + 3, S(), x({
                method: "action",
                data: {
                    name: "talk",
                    parameters: {
                        text: w("happy")
                    }
                }
            }), localStorage.setItem("pets", JSON.stringify(s.pets));
            else if ("petting" == e.method) {
                s.pets.cat1.happiness = s.pets.cat1.happiness + 10, S(), localStorage.setItem("pets", JSON.stringify(s.pets)), Math.floor(100 * Math.random()) + 1 < 15 && x({
                    method: "action",
                    data: {
                        name: "talk",
                        parameters: {
                            text: w("happy")
                        }
                    }
                })
            } else if ("dancing" == e.method) s.pets.cat1.happiness = s.pets.cat1.happiness + 4, S(), localStorage.setItem("pets", JSON.stringify(s.pets));
            else if ("put-to-sleep" == e.method) s.pets.cat1.idleType = "sleep", x({
                method: "action",
                data: {
                    name: "sleep",
                    parameters: null
                }
            });
            else if ("sleep-request" == e.method) s.pets.cat1.sleep = s.pets.cat1.sleep + 5, s.pets.cat1.happiness = s.pets.cat1.happiness + 3, S(), localStorage.setItem("pets", JSON.stringify(s.pets));
            else if ("change-pet-name" == e.method) s.pets.cat1.name = e.data.name, localStorage.setItem("pets", JSON.stringify(s.pets));
            else if ("change-owner-name" == e.method) s.ownerName = e.data.name, localStorage.setItem("ownerName", s.ownerName);
            else if ("reminder-add" == e.method) {
                (p = new a).text = e.data.text, p.enabled = e.data.enabled, p.hours = e.data.hours, p.minutes = e.data.minutes, s.reminders[e.data.id] = p, localStorage.setItem("reminders", JSON.stringify(s.reminders))
            } else if ("reminder-update" == e.method) {
                var p;
                (p = s.reminders[e.data.id]).text = e.data.text, p.enabled = e.data.enabled, p.hours = e.data.hours, p.minutes = e.data.minutes, localStorage.setItem("reminders", JSON.stringify(s.reminders))
            } else "reminder-remove" == e.method ? (delete s.reminders[e.data.id], localStorage.setItem("reminders", JSON.stringify(s.reminders))) : "choose-browser-skin" == e.method ? (s.pets.cat1.skin = e.data.skin, localStorage.setItem("pets", JSON.stringify(s.pets)), (new Date).getTime() > s.pets.cat1.hideUntil && s.pets.cat1.show && d()) : "choose-browser-hat" == e.method ? (s.pets.cat1.hat = e.data.hat, localStorage.setItem("pets", JSON.stringify(s.pets)), (new Date).getTime() > s.pets.cat1.hideUntil && s.pets.cat1.show && d()) : "choose-browser-eyes" == e.method ? (s.pets.cat1.eyes = e.data.eyes, localStorage.setItem("pets", JSON.stringify(s.pets)), (new Date).getTime() > s.pets.cat1.hideUntil && s.pets.cat1.show && d()) : "choose-browser-wings" == e.method ? (s.pets.cat1.wings = e.data.wings, localStorage.setItem("pets", JSON.stringify(s.pets)), (new Date).getTime() > s.pets.cat1.hideUntil && s.pets.cat1.show && d()) : "choose-browser-glasses" == e.method ? (s.pets.cat1.glasses = e.data.glasses, localStorage.setItem("pets", JSON.stringify(s.pets)), (new Date).getTime() > s.pets.cat1.hideUntil && s.pets.cat1.show && d()) : "choose-browser-mask" == e.method ? (s.pets.cat1.mask = e.data.mask, localStorage.setItem("pets", JSON.stringify(s.pets)), (new Date).getTime() > s.pets.cat1.hideUntil && s.pets.cat1.show && d()) : "choose-browser-face-mask" == e.method && (s.pets.cat1.faceMask = e.data.faceMask, localStorage.setItem("pets", JSON.stringify(s.pets)), (new Date).getTime() > s.pets.cat1.hideUntil && s.pets.cat1.show && d());
            n({
                data: r
            })
        })), chrome.tabs.onActivated.addListener((function(e) {
            (new Date).getTime() > s.pets.cat1.hideUntil && chrome.tabs.sendMessage(e.tabId, {
                method: "newActiveTab",
                data: s.pets.cat1
            }, (function() {}))
        }));
        var h = ["I knew that you loved me", "Thank youuuu", "Thankssss", "Meow Meow ^^", "^^", "I LOVE YOU {owner}", "{owner}, You're the best", "It feels so good", "My life is purrfect"],
            f = ["{pet} is so bored", "{pet} life is meaningless", "Take me to the playground please", "All {pet} needs is looooove", "I am here", "{pet} is here", "Why Don't you love {pet}?", "No petting no fun", "Why don't you play with {pet}", "{owner} doesn't love me", "You don't love {pet}", "Please pet me"],
            m = ["<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/fish.png") + "' />", "<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/cheese.png") + "' />", "<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/chicken.png") + "' />"],
            g = ["<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/fish.png") + "' />", "<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/cheese.png") + "' />", "<img style='width:32px;height:32px;' src='" + chrome.extension.getURL("/images/icons/chicken.png") + "' />", "{pet} is so hungry", "{owner} doesn't love {pet}", "Please feed {pet}", "Why no food Why", "Is it fish? Do I see fish?", "Meow needs food", "Do I smell fish?", "{owner} doesn't feed me"],
            y = ["Please Pet Me", "Meow Meow Meow ^^", "I love my {owner}...", "Whats'uppppp human", "Please hug me", "You look great today :)", "Please hug me", "I need a petting from {owner} ^^", "This is an awesome website", "Are you there {owner}?", "My name is {pet}", "Who let the dogs out... Meow Meow", "It smells like fish", "I hate water", "Can you put the Meow Meow song?", "Trust me, {pet} engineer... :D", "Boo !", "Ku-Ku", "Time spent with cats is never wasted.", "What would you do without me?", "HEY {owner}", "KEEP CALM AND PET ME", "Rawrrrr", "I Love my human pillow", "Me happy, you happy, we happy...", "I will sing for Tuna", "I like your mouse...", "This is my favorite spot", "Adopting you was my best decision ever", "What are you doing there?", "check meow out", "I need a hug right about meow", "You are the purrfect {owner} :3", "Take me to the Playground", "Let's play", "{owner} {owner} {owner}"],
            v = {
                lastEvent: 0,
                isUnhappy: function(e) {
                    return e || (e = 20), s.pets.cat1.happiness < e
                },
                isHungry: function(e) {
                    return e || (e = 20), s.pets.cat1.hunger < e
                },
                isSleepy: function(e) {
                    return e || (e = 20), s.pets.cat1.sleep < e
                },
                sendIdleMode: function() {
                    chrome.tabs.query({}, (function(e) {
                        for (var t = 0; t < e.length; ++t) chrome.tabs.sendMessage(e[t].id, {
                            method: "update-idle",
                            data: s.pets.cat1
                        })
                    }))
                }
            },
            w = function(e) {
                var t = "";
                switch (e) {
                    case "hungry":
                        t = g[Math.floor(Math.random() * g.length)];
                        break;
                    case "unhappy":
                        t = f[Math.floor(Math.random() * f.length)];
                        break;
                    case "happy":
                        t = h[Math.floor(Math.random() * h.length)];
                        break;
                    case "dreaming":
                        t = m[Math.floor(Math.random() * m.length)];
                        break;
                    default:
                        t = y[Math.floor(Math.random() * y.length)]
                }
                var n = s.pets.cat1.name,
                    r = s.ownerName;
                return r || (r = "Human"), n || (n = "Meow"), t = t.replace(/{owner}/g, r).replace(/{pet}/g, n)
            },
            S = function() {
                "sleep" == s.pets.cat1.idleType && s.pets.cat1.sleep >= 90 ? (s.pets.cat1.idleType = "idle", v.sendIdleMode()) : "sad" == s.pets.cat1.idleType && s.pets.cat1.happiness >= 40 && s.pets.cat1.hunger >= 40 && (s.pets.cat1.idleType = "idle", v.sendIdleMode()), s.pets.cat1.happiness > 100 ? s.pets.cat1.happiness = 100 : s.pets.cat1.happiness < 0 && (s.pets.cat1.happiness = 0), s.pets.cat1.hunger > 100 ? s.pets.cat1.hunger = 100 : s.pets.cat1.hunger < 0 && (s.pets.cat1.hunger = 0), s.pets.cat1.sleep > 100 ? s.pets.cat1.sleep = 100 : s.pets.cat1.sleep < 0 && (s.pets.cat1.sleep = 0), s.pets.cat1.loyalty > 100 ? s.pets.cat1.loyalty = 100 : s.pets.cat1.loyalty < 0 && (s.pets.cat1.loyalty = 0)
            },
            x = function(e) {
                chrome.tabs.query({}, (function(t) {
                    for (var n = 0; n < t.length; ++n) chrome.tabs.sendMessage(t[n].id, e)
                }))
            };
        window.setInterval((function() {
                "sleep" != s.pets.cat1.idleType && (s.pets.cat1.sleep -= 3, s.pets.cat1.hunger -= 3, s.pets.cat1.happiness -= 2), s.pets.cat1.happiness > 65 ? s.pets.cat1.loyalty += 2 : s.pets.cat1.loyalty -= 2, S(), localStorage.setItem("pets", JSON.stringify(s.pets))
            }), 6e5), window.setInterval((function() {
                "sleep" == s.pets.cat1.idleType && (s.pets.cat1.sleep += 5), S(), localStorage.setItem("pets", JSON.stringify(s.pets))
            }), 6e4), window.setInterval((function() {
                if (s.pets.cat1.show) {
                    var e = (new Date).getTime();
                    if (!(e - v.lastEvent < 4e3)) {
                        var t = Math.floor(450 * Math.random()) + 1,
                            n = null,
                            r = {
                                text: ""
                            };
                        "sleep" == s.pets.cat1.idleType ? t <= 20 && (n = "talk", r.text = w("dreaming")) : v.isSleepy() ? (s.pets.cat1.idleType = "sleep", n = "sleep") : "sad" != s.pets.cat1.idleType && v.isUnhappy(40) ? (s.pets.cat1.idleType = "sad", n = "sad") : "sad" != s.pets.cat1.idleType && v.isHungry(40) ? (s.pets.cat1.idleType = "sad", n = "sad") : v.isHungry() ? t <= 20 && (n = "talk", r.text = w("hungry")) : v.isUnhappy() ? t <= 20 && (n = "talk", r.text = w("unhappy")) : t >= 21 && t <= 40 && "sleep" != s.pets.cat1.idleType ? n = "run" : t >= 41 && t <= 55 && "sleep" != s.pets.cat1.idleType ? n = "walk" : t >= 61 && t <= 80 && "sleep" != s.pets.cat1.idleType ? (n = "talk", r.text = w("default")) : t >= 81 && t <= 90 && "sleep" != s.pets.cat1.idleType && (n = "lick"), n && (v.lastEvent = e, x({
                            method: "action",
                            data: {
                                name: n,
                                parameters: r
                            }
                        }))
                    }
                }
            }), 2e3), window.setInterval((function() {
                if (s.reminders)
                    for (var e in s.reminders)
                        if (s.reminders.hasOwnProperty(e)) {
                            var t = (new Date).getTime(),
                                n = parseInt(s.reminders[e].lastReminded),
                                r = 60 * s.reminders[e].hours * 60 + 60 * s.reminders[e].minutes;
                            if (s.reminders[e].enabled && s.reminders[e].text && n / 1e3 + r < t / 1e3) return chrome.notifications && s.chromePopupReminders && chrome.notifications.create("Meow reminder", {
                                type: "basic",
                                title: "Reminder",
                                iconUrl: "/16.png",
                                message: s.reminders[e].text
                            }, (function(e) {})), s.reminders[e].lastReminded = t, localStorage.setItem("reminders", JSON.stringify(s.reminders)), x({
                                method: "action",
                                data: {
                                    name: "talk",
                                    parameters: {
                                        text: "<span class='reminder'>Reminder: " + s.reminders[e].text + "</span>"
                                    }
                                }
                            }), void(v.lastEvent = t)
                        }
            }), 1e4),
            function() {
                if (chrome.runtime.onInstalled) try {
                    chrome.runtime.onInstalled.addListener((function(e) {
                        "install" == e.reason ? (window.open("https://www.meowplayground.com/welcome"), function(e) {
                            var t = new XMLHttpRequest,
                                n = "";
                            for (var r in e.data) n.length > 0 && (n += "&"), n += encodeURI(r + "=" + e.data[r]);
                            t.onreadystatechange = function() {
                                t.readyState == XMLHttpRequest.DONE && (200 == t.status ? e.success && e.success.call(this, t.responseText) : e.error && e.error.call(t.responseText))
                            }, t.open(e.type, e.url, !0), t.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), t.send(n)
                        }({
                            url: "https://www.meowplayground.com/install",
                            type: "POST",
                            data: {
                                version: chrome.runtime.getManifest().version
                            }
                        })) : e.reason
                    }))
                } catch (e) {}
                chrome.runtime.setUninstallURL
            }()
    },
    42: function(e, t, n) {
        var r = n(53),
            s = n(108);
        (e.exports = function(e, t) {
            return s[e] || (s[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: "3.4.1",
            mode: r ? "pure" : "global",
            copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
        })
    },
    43: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
        }
    },
    44: function(e, t) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" == typeof window && (n = window)
        }
        e.exports = n
    },
    49: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    50: function(e, t, n) {
        var r, s, a, o = n(109),
            i = n(18),
            c = n(24),
            p = n(28),
            l = n(27),
            u = n(62),
            d = n(55),
            h = i.WeakMap;
        if (o) {
            var f = new h,
                m = f.get,
                g = f.has,
                y = f.set;
            r = function(e, t) {
                return y.call(f, e, t), t
            }, s = function(e) {
                return m.call(f, e) || {}
            }, a = function(e) {
                return g.call(f, e)
            }
        } else {
            var v = u("state");
            d[v] = !0, r = function(e, t) {
                return p(e, v, t), t
            }, s = function(e) {
                return l(e, v) ? e[v] : {}
            }, a = function(e) {
                return l(e, v)
            }
        }
        e.exports = {
            set: r,
            get: s,
            has: a,
            enforce: function(e) {
                return a(e) ? s(e) : r(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!c(t) || (n = s(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        }
    },
    52: function(e, t, n) {
        var r = n(24);
        e.exports = function(e, t) {
            if (!r(e)) return e;
            var n, s;
            if (t && "function" == typeof(n = e.toString) && !r(s = n.call(e))) return s;
            if ("function" == typeof(n = e.valueOf) && !r(s = n.call(e))) return s;
            if (!t && "function" == typeof(n = e.toString) && !r(s = n.call(e))) return s;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    53: function(e, t) {
        e.exports = !1
    },
    55: function(e, t) {
        e.exports = {}
    },
    58: function(e, t, n) {
        var r = n(18),
            s = n(28);
        e.exports = function(e, t) {
            try {
                s(r, e, t)
            } catch (n) {
                r[e] = t
            }
            return t
        }
    },
    62: function(e, t, n) {
        var r = n(42),
            s = n(63),
            a = r("keys");
        e.exports = function(e) {
            return a[e] || (a[e] = s(e))
        }
    },
    63: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
        }
    },
    65: function(e, t, n) {
        "use strict";
        var r, s, a = n(89),
            o = RegExp.prototype.exec,
            i = String.prototype.replace,
            c = o,
            p = (r = /a/, s = /b*/g, o.call(r, "a"), o.call(s, "a"), 0 !== r.lastIndex || 0 !== s.lastIndex),
            l = void 0 !== /()??/.exec("")[1];
        (p || l) && (c = function(e) {
            var t, n, r, s, c = this;
            return l && (n = new RegExp("^" + c.source + "$(?!\\s)", a.call(c))), p && (t = c.lastIndex), r = o.call(c, e), p && r && (c.lastIndex = c.global ? r.index + r[0].length : t), l && r && r.length > 1 && i.call(r[0], n, (function() {
                for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (r[s] = void 0)
            })), r
        }), e.exports = c
    },
    72: function(e, t, n) {
        var r = n(18),
            s = n(24),
            a = r.document,
            o = s(a) && s(a.createElement);
        e.exports = function(e) {
            return o ? a.createElement(e) : {}
        }
    },
    75: function(e, t, n) {
        "use strict";
        var r = n(28),
            s = n(34),
            a = n(20),
            o = n(21),
            i = n(65),
            c = o("species"),
            p = !a((function() {
                var e = /./;
                return e.exec = function() {
                    var e = [];
                    return e.groups = {
                        a: "7"
                    }, e
                }, "7" !== "".replace(e, "$<a>")
            })),
            l = !a((function() {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function() {
                    return t.apply(this, arguments)
                };
                var n = "ab".split(e);
                return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
            }));
        e.exports = function(e, t, n, u) {
            var d = o(e),
                h = !a((function() {
                    var t = {};
                    return t[d] = function() {
                        return 7
                    }, 7 != "" [e](t)
                })),
                f = h && !a((function() {
                    var t = !1,
                        n = /a/;
                    return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function() {
                        return n
                    }, n.flags = "", n[d] = /./ [d]), n.exec = function() {
                        return t = !0, null
                    }, n[d](""), !t
                }));
            if (!h || !f || "replace" === e && !p || "split" === e && !l) {
                var m = /./ [d],
                    g = n(d, "" [e], (function(e, t, n, r, s) {
                        return t.exec === i ? h && !s ? {
                            done: !0,
                            value: m.call(t, n, r)
                        } : {
                            done: !0,
                            value: e.call(n, t, r)
                        } : {
                            done: !1
                        }
                    })),
                    y = g[0],
                    v = g[1];
                s(String.prototype, e, y), s(RegExp.prototype, d, 2 == t ? function(e, t) {
                    return v.call(e, this, t)
                } : function(e) {
                    return v.call(e, this)
                }), u && r(RegExp.prototype[d], "sham", !0)
            }
        }
    },
    76: function(e, t, n) {
        var r = n(36),
            s = n(65);
        e.exports = function(e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var a = n.call(e, t);
                if ("object" != typeof a) throw TypeError("RegExp exec method returned something other than an Object or null");
                return a
            }
            if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return s.call(e, t)
        }
    },
    79: function(e, t, n) {
        var r = n(42);
        e.exports = r("native-function-to-string", Function.toString)
    },
    80: function(e, t, n) {
        "use strict";
        var r = n(93).charAt;
        e.exports = function(e, t, n) {
            return t + (n ? r(e, t).length : 1)
        }
    },
    82: function(e, t, n) {
        var r = n(26),
            s = n(30).f,
            a = Function.prototype,
            o = a.toString,
            i = /^\s*function ([^ (]*)/;
        !r || "name" in a || s(a, "name", {
            configurable: !0,
            get: function() {
                try {
                    return o.call(this).match(i)[1]
                } catch (e) {
                    return ""
                }
            }
        })
    },
    83: function(e, t, n) {
        var r = n(26),
            s = n(20),
            a = n(72);
        e.exports = !r && !s((function() {
            return 7 != Object.defineProperty(a("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    89: function(e, t, n) {
        "use strict";
        var r = n(23);
        e.exports = function() {
            var e = r(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
        }
    },
    92: function(e, t, n) {
        var r = n(20);
        e.exports = !!Object.getOwnPropertySymbols && !r((function() {
            return !String(Symbol())
        }))
    },
    93: function(e, t, n) {
        var r = n(43),
            s = n(35),
            a = function(e) {
                return function(t, n) {
                    var a, o, i = String(s(t)),
                        c = r(n),
                        p = i.length;
                    return c < 0 || c >= p ? e ? "" : void 0 : (a = i.charCodeAt(c)) < 55296 || a > 56319 || c + 1 === p || (o = i.charCodeAt(c + 1)) < 56320 || o > 57343 ? e ? i.charAt(c) : a : e ? i.slice(c, c + 2) : o - 56320 + (a - 55296 << 10) + 65536
                }
            };
        e.exports = {
            codeAt: a(!1),
            charAt: a(!0)
        }
    }
});