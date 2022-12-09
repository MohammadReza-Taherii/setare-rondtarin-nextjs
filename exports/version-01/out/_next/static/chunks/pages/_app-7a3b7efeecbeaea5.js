(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    1118: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return n(3164);
        },
      ]);
    },
    227: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, n, l) {
          return !1;
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    1551: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var l = n(2648).Z,
        o = n(7273).Z,
        r = l(n(7294)),
        a = n(1003),
        s = n(7795),
        i = n(4465),
        u = n(2692),
        c = n(8245),
        f = n(9246),
        d = n(227),
        p = n(3468);
      let h = new Set();
      function x(e, t, n, l) {
        if (a.isLocalURL(t)) {
          if (!l.bypassPrefetchedCheck) {
            let o =
                void 0 !== l.locale
                  ? l.locale
                  : "locale" in e
                  ? e.locale
                  : void 0,
              r = t + "%" + n + "%" + o;
            if (h.has(r)) return;
            h.add(r);
          }
          Promise.resolve(e.prefetch(t, n, l)).catch((e) => {});
        }
      }
      function b(e) {
        return "string" == typeof e ? e : s.formatUrl(e);
      }
      let m = r.default.forwardRef(function (e, t) {
        let n, l;
        let {
            href: s,
            as: h,
            children: m,
            prefetch: v,
            passHref: j,
            replace: g,
            shallow: y,
            scroll: w,
            locale: _,
            onClick: N,
            onMouseEnter: k,
            onTouchStart: C,
            legacyBehavior: M = !1,
          } = e,
          E = o(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (n = m),
          M &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = r.default.createElement("a", null, n));
        let O = !1 !== v,
          P = r.default.useContext(u.RouterContext),
          S = r.default.useContext(c.AppRouterContext),
          L = null != P ? P : S,
          T = !P,
          { href: I, as: R } = r.default.useMemo(() => {
            if (!P) {
              let e = b(s);
              return { href: e, as: h ? b(h) : e };
            }
            let [t, n] = a.resolveHref(P, s, !0);
            return { href: t, as: h ? a.resolveHref(P, h) : n || t };
          }, [P, s, h]),
          D = r.default.useRef(I),
          K = r.default.useRef(R);
        M && (l = r.default.Children.only(n));
        let U = M ? l && "object" == typeof l && l.ref : t,
          [z, A, H] = f.useIntersection({ rootMargin: "200px" }),
          B = r.default.useCallback(
            (e) => {
              (K.current !== R || D.current !== I) &&
                (H(), (K.current = R), (D.current = I)),
                z(e),
                U &&
                  ("function" == typeof U
                    ? U(e)
                    : "object" == typeof U && (U.current = e));
            },
            [R, U, I, H, z]
          );
        r.default.useEffect(() => {
          L && A && O && x(L, I, R, { locale: _ });
        }, [R, I, A, _, O, null == P ? void 0 : P.locale, L]);
        let X = {
          ref: B,
          onClick(e) {
            M || "function" != typeof N || N(e),
              M &&
                l.props &&
                "function" == typeof l.props.onClick &&
                l.props.onClick(e),
              L &&
                !e.defaultPrevented &&
                (function (e, t, n, l, o, s, i, u, c, f) {
                  let { nodeName: d } = e.currentTarget,
                    p = "A" === d.toUpperCase();
                  if (
                    p &&
                    ((function (e) {
                      let { target: t } = e.currentTarget;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      !a.isLocalURL(n))
                  )
                    return;
                  e.preventDefault();
                  let h = () => {
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](n, l, {
                          shallow: s,
                          locale: u,
                          scroll: i,
                        })
                      : t[o ? "replace" : "push"](l || n, {
                          forceOptimisticNavigation: !f,
                        });
                  };
                  c ? r.default.startTransition(h) : h();
                })(e, L, I, R, g, y, w, _, T, O);
          },
          onMouseEnter(e) {
            M || "function" != typeof k || k(e),
              M &&
                l.props &&
                "function" == typeof l.props.onMouseEnter &&
                l.props.onMouseEnter(e),
              L &&
                (O || !T) &&
                x(L, I, R, {
                  locale: _,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
          onTouchStart(e) {
            M || "function" != typeof C || C(e),
              M &&
                l.props &&
                "function" == typeof l.props.onTouchStart &&
                l.props.onTouchStart(e),
              L &&
                (O || !T) &&
                x(L, I, R, {
                  locale: _,
                  priority: !0,
                  bypassPrefetchedCheck: !0,
                });
          },
        };
        if (!M || j || ("a" === l.type && !("href" in l.props))) {
          let Z = void 0 !== _ ? _ : null == P ? void 0 : P.locale,
            q =
              (null == P ? void 0 : P.isLocaleDomain) &&
              d.getDomainLocale(
                R,
                Z,
                null == P ? void 0 : P.locales,
                null == P ? void 0 : P.domainLocales
              );
          X.href =
            q ||
            p.addBasePath(
              i.addLocale(R, Z, null == P ? void 0 : P.defaultLocale)
            );
        }
        return M
          ? r.default.cloneElement(l, X)
          : r.default.createElement("a", Object.assign({}, E, X), n);
      });
      (t.default = m),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    9246: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIntersection = function (e) {
          let { rootRef: t, rootMargin: n, disabled: i } = e,
            u = i || !r,
            [c, f] = l.useState(!1),
            [d, p] = l.useState(null);
          l.useEffect(() => {
            if (r) {
              if (!u && !c && d && d.tagName) {
                let e = (function (e, t, n) {
                  let {
                    id: l,
                    observer: o,
                    elements: r,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      l = s.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (l && (t = a.get(l))) return t;
                    let o = new Map(),
                      r = new IntersectionObserver((e) => {
                        e.forEach((e) => {
                          let t = o.get(e.target),
                            n = e.isIntersecting || e.intersectionRatio > 0;
                          t && n && t(n);
                        });
                      }, e);
                    return (
                      (t = { id: n, observer: r, elements: o }),
                      s.push(n),
                      a.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    r.set(e, t),
                    o.observe(e),
                    function () {
                      if ((r.delete(e), o.unobserve(e), 0 === r.size)) {
                        o.disconnect(), a.delete(l);
                        let t = s.findIndex(
                          (e) => e.root === l.root && e.margin === l.margin
                        );
                        t > -1 && s.splice(t, 1);
                      }
                    }
                  );
                })(d, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
                return e;
              }
            } else if (!c) {
              let l = o.requestIdleCallback(() => f(!0));
              return () => o.cancelIdleCallback(l);
            }
          }, [d, u, n, t, c]);
          let h = l.useCallback(() => {
            f(!1);
          }, []);
          return [p, c, h];
        });
      var l = n(7294),
        o = n(4686);
      let r = "function" == typeof IntersectionObserver,
        a = new Map(),
        s = [];
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3164: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var l = n(5893);
      n(7475);
      var o = n(9134),
        r = n.n(o),
        a = n(1664),
        s = n.n(a);
      let i = (e) => {
        let { title: t, link: n, className: o, onClick: r } = e;
        return (0, l.jsx)("button", {
          className: "p-2 w-40 "
            .concat(!n && "rounded-lg border border-solid", " ")
            .concat(o),
          onClick: r,
          children: t,
        });
      };
      function u(e) {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("div", {
              className:
                "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
              children: (0, l.jsx)("div", {
                className: "relative w-auto my-6 mx-auto max-w-3xl",
                children: (0, l.jsxs)("div", {
                  className:
                    "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none",
                  children: [
                    (0, l.jsxs)("div", {
                      className:
                        "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                      children: [
                        (0, l.jsx)("h3", {
                          className: "text-3xl font-semibold",
                          children: "ثبت نام",
                        }),
                        (0, l.jsx)("button", {
                          className:
                            "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                          onClick: () => e.setShowModal(!1),
                          children: (0, l.jsx)("span", {
                            className:
                              "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none",
                            children: "\xd7",
                          }),
                        }),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "relative p-6 flex-auto",
                      children: (0, l.jsx)("p", {
                        className:
                          "my-4 text-slate-500 text-lg leading-relaxed",
                        children:
                          "رندترین مرجع رسمی همراه اول برای فروش سیمکارت به صورت حراج است. شما می‌توانید با پیشنهاد بالاترین قیمت، به سادگی سیم‌کارت مدنظرتان را بخرید.",
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className:
                        "flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b",
                      children: [
                        (0, l.jsx)("button", {
                          className:
                            "text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                          type: "button",
                          onClick: () => e.setShowModal(!1),
                          children: "انصراف",
                        }),
                        (0, l.jsx)("button", {
                          className:
                            "bg-purple-purple-05 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                          type: "button",
                          onClick: () => e.setShowModal(!1),
                          children: "تایید",
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
            (0, l.jsx)("div", {
              className: "opacity-25 fixed inset-0 z-40 bg-black",
            }),
          ],
        });
      }
      var c = n(7294);
      let f = () => {
          let [e, t] = c.useState(!1);
          return (0, l.jsx)("nav", {
            className:
              "h-22 bg-white shadow-sm flex items-center justify-center font-bold bg-white",
            children: (0, l.jsxs)("div", {
              className: "container flex justify-between items-center w-full",
              children: [
                (0, l.jsxs)("div", {
                  className: "flex gap-x-10 items-center",
                  children: [
                    (0, l.jsx)("div", {
                      children: (0, l.jsx)("img", {
                        src: "static/images/rondtarinLogo.svg",
                        height: 36,
                        width: 96,
                        alt: "لوگوی رندترین",
                      }),
                    }),
                    (0, l.jsx)("div", {
                      children: (0, l.jsx)("ul", {
                        className: "flex gap-x-10 text-purple-purple-07",
                        children: [
                          { title: "حراج‌های جاری", href: "/" },
                          { title: "سوالات متداول", href: "/" },
                          { title: "قوانین", href: "/" },
                          { title: "راهنمای سایت", href: "/" },
                          { title: "تماس با ما", href: "/" },
                        ].map((e) =>
                          (0, l.jsx)(
                            "li",
                            {
                              children: (0, l.jsx)(s(), {
                                href: e.href,
                                children: e.title,
                              }),
                            },
                            e.title
                          )
                        ),
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "flex gap-x-1",
                  children: [
                    e && (0, l.jsx)(u, { setShowModal: t }),
                    (0, l.jsx)(i, {
                      title: "ورود",
                      link: !0,
                      className: "text-purple-purple-05",
                      onClick: () => console.log("00000000000"),
                    }),
                    (0, l.jsx)(i, {
                      title: "ثبت نام",
                      className:
                        "text-purple-purple-05 border-purple-purple-05",
                      onClick: () => t(!0),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        d = (e) => {
          let { children: t } = e;
          return (0, l.jsxs)("div", {
            className: "font-IRANYekan bg-default",
            children: [
              (0, l.jsx)(f, {}),
              (0, l.jsx)("div", {
                children: (0, l.jsx)("main", {
                  className: r().main,
                  children: t,
                }),
              }),
            ],
          });
        };
      var p = function (e) {
        let { Component: t, pageProps: n } = e;
        return (0, l.jsx)(d, { children: (0, l.jsx)(t, { ...n }) });
      };
    },
    9134: function () {},
    7475: function () {},
    1664: function (e, t, n) {
      e.exports = n(1551);
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    e.O(0, [774, 179], function () {
      return t(1118), t(880);
    }),
      (_N_E = e.O());
  },
]);
