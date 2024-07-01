import {
  c as ee,
  d as re,
  e as te,
  f as ae,
  g as ne,
  h as ie,
} from "./chunk-KVW7ZHFM.mjs";
import {
  Ca as z,
  Da as $,
  Ea as j,
  N as U,
  T as p,
  W as D,
  Z as E,
  _ as N,
  aa as P,
  ba as K,
  c as h,
  ea as G,
  g as V,
  j as T,
  l as k,
  o as I,
  p as L,
  t as e,
  u as _,
  v as F,
  va as O,
  wa as q,
  x as i,
  xa as J,
  z as R,
  za as b,
} from "./chunk-27H5APBL.mjs";
J.loadFonts([
  "FS;Satoshi-black",
  "FS;Satoshi-black",
  "FS;Satoshi-black italic",
  "FS;Satoshi-black italic",
]);
var oe = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "./third-party-assets/fontshare/wf/NHPGVFYUXYXE33DZ75OIT4JFGHITX5PE/PSUTMASCDJTVPERDYJZPN23BVUFUCQIF/J64QX5IPOHK56I2KYUNBQ5M2XWZEYKYX.woff2",
          weight: "900",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "./third-party-assets/fontshare/wf/5ICO57VJIN252OT5L2KLEIPW754DTLAO/ZU64SLR2IEO66N27IVY5Z6JJJRTJECJK/TCTRLNEXANFIGSFCZTGQL7PZ5362GYK6.woff2",
          weight: "900",
        },
      ],
    },
  ],
  se = [
    '.framer-RcHd1 .framer-styles-preset-5vsgqx:not(.rich-text-wrapper), .framer-RcHd1 .framer-styles-preset-5vsgqx.rich-text-wrapper p { --framer-font-family: "Satoshi", sans-serif; --framer-font-family-bold: "Satoshi", sans-serif; --framer-font-family-bold-italic: "Satoshi", sans-serif; --framer-font-family-italic: "Satoshi", sans-serif; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 900; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 900; --framer-letter-spacing: 0em; --framer-line-height: 2em; --framer-paragraph-spacing: 24px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-RcHd1 .framer-styles-preset-5vsgqx:not(.rich-text-wrapper), .framer-RcHd1 .framer-styles-preset-5vsgqx.rich-text-wrapper p { --framer-font-family: "Satoshi", sans-serif; --framer-font-family-bold: "Satoshi", sans-serif; --framer-font-family-bold-italic: "Satoshi", sans-serif; --framer-font-family-italic: "Satoshi", sans-serif; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 900; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 900; --framer-letter-spacing: 0em; --framer-line-height: 2em; --framer-paragraph-spacing: 24px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-RcHd1 .framer-styles-preset-5vsgqx:not(.rich-text-wrapper), .framer-RcHd1 .framer-styles-preset-5vsgqx.rich-text-wrapper p { --framer-font-family: "Satoshi", sans-serif; --framer-font-family-bold: "Satoshi", sans-serif; --framer-font-family-bold-italic: "Satoshi", sans-serif; --framer-font-family-italic: "Satoshi", sans-serif; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 900; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 900; --framer-letter-spacing: 0em; --framer-line-height: 2em; --framer-paragraph-spacing: 24px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
  ],
  le = "framer-RcHd1";
var xe = N(b),
  we = ["wae4OkzkL", "JLlnH88L2"],
  ve = "framer-FudnT",
  _e = { JLlnH88L2: "framer-v-3rws8j", wae4OkzkL: "framer-v-ef5wfk" };
function fe(t, ...r) {
  let a = {};
  return r?.forEach((n) => n && Object.assign(a, t[n])), a;
}
var be = { damping: 60, delay: 0, mass: 1, stiffness: 205, type: "spring" },
  Fe = {
    opacity: 0.15,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Se = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: "tween" },
  Ce = (t, r) => `perspective(1200px) translate(-50%, -50%) ${r}`,
  He = ({ value: t, children: r }) => {
    let a = T(F),
      n = t ?? a.transition,
      c = I(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(F.Provider, { value: c, children: r });
  },
  Ae = i(h),
  Ve = { Active: "JLlnH88L2", Default: "wae4OkzkL" },
  Te = ({
    height: t,
    id: r,
    scrollSection: a,
    stepNumber: n,
    width: c,
    ...f
  }) => {
    var l, u, o;
    return {
      ...f,
      k3ls6uLAp: (l = n ?? f.k3ls6uLAp) !== null && l !== void 0 ? l : "01",
      kWjVhf9Ee: a ?? f.kWjVhf9Ee,
      variant:
        (o = (u = Ve[f.variant]) !== null && u !== void 0 ? u : f.variant) !==
          null && o !== void 0
          ? o
          : "wae4OkzkL",
    };
  },
  ke = (t, r) => r.join("-") + t.layoutDependency,
  Ie = V(function (t, r) {
    let { activeLocale: a, setLocale: n } = U(),
      {
        style: c,
        className: f,
        layoutId: l,
        variant: u,
        kWjVhf9Ee: o,
        k3ls6uLAp: w,
        ...v
      } = Te(t),
      {
        baseVariant: d,
        classNames: y,
        gestureVariant: g,
        setGestureState: m,
        setVariant: M,
        variants: H,
      } = O({
        cycleOrder: we,
        defaultVariant: "wae4OkzkL",
        variant: u,
        variantClassNames: _e,
      }),
      x = ke(t, H),
      B = L(null),
      A = k(),
      s = [],
      W = P();
    return e(R, {
      id: l ?? A,
      children: e(Ae, {
        animate: H,
        initial: !1,
        children: e(He, {
          value: be,
          children: e(i.div, {
            ...v,
            className: E(ve, ...s, "framer-ef5wfk", f, y),
            "data-framer-name": "Default",
            layoutDependency: x,
            layoutId: "wae4OkzkL",
            onHoverEnd: () => m({ isHovered: !1 }),
            onHoverStart: () => m({ isHovered: !0 }),
            onTap: () => m({ isPressed: !1 }),
            onTapCancel: () => m({ isPressed: !1 }),
            onTapStart: () => m({ isPressed: !0 }),
            ref: r ?? B,
            style: { ...c },
            ...fe({ JLlnH88L2: { "data-framer-name": "Active" } }, d, g),
            children: e(xe, {
              __framer__animate: { transition: Se },
              __framer__animateOnce: !1,
              __framer__enter: Fe,
              __framer__styleAppearEffectEnabled: !0,
              __framer__targets: [{ ref: o, target: "animate" }],
              __framer__threshold: 0.5,
              __fromCanvasComponent: !0,
              __perspectiveFX: !1,
              __smartComponentFX: !0,
              __targetOpacity: 1,
              children: e(h, {
                children: e(i.p, {
                  style: {
                    "--font-selector": "R0Y7VW5ib3VuZGVkLXJlZ3VsYXI=",
                    "--framer-font-family":
                      '"Unbounded", "Unbounded Placeholder", sans-serif',
                    "--framer-font-size": "66px",
                    "--framer-letter-spacing": "-1px",
                    "--framer-line-height": "0.7em",
                    "--framer-text-color":
                      "var(--extracted-r6o4lv, rgba(255, 221, 0, 0.43))",
                    "--framer-text-transform": "uppercase",
                  },
                  children: "01",
                }),
              }),
              className: "framer-1vxedwr",
              fonts: ["GF;Unbounded-regular"],
              layoutDependency: x,
              layoutId: "Zvi0g_4_g",
              style: {
                "--extracted-r6o4lv": "rgba(255, 221, 0, 0.43)",
                "--framer-link-text-color": "rgb(0, 153, 255)",
                "--framer-link-text-decoration": "underline",
                textShadow: "0px 0px 0px rgba(255, 221, 0, 0)",
              },
              text: w,
              transformTemplate: Ce,
              variants: {
                JLlnH88L2: {
                  "--extracted-r6o4lv":
                    "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(232, 84, 66))",
                  textShadow: "0px 1px 23px rgb(255, 221, 0)",
                },
              },
              verticalAlignment: "top",
              withExternalLayout: !0,
              ...fe(
                {
                  JLlnH88L2: {
                    children: e(h, {
                      children: e(i.p, {
                        style: {
                          "--font-selector": "R0Y7VW5ib3VuZGVkLXJlZ3VsYXI=",
                          "--framer-font-family":
                            '"Unbounded", "Unbounded Placeholder", sans-serif',
                          "--framer-font-size": "66px",
                          "--framer-letter-spacing": "-1px",
                          "--framer-line-height": "0.7em",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(232, 84, 66)))",
                          "--framer-text-transform": "uppercase",
                        },
                        children: "01",
                      }),
                    }),
                  },
                },
                d,
                g
              ),
            }),
          }),
        }),
      }),
    });
  }),
  Le = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-FudnT.framer-r3ndei, .framer-FudnT .framer-r3ndei { display: block; }",
    ".framer-FudnT.framer-ef5wfk { height: 58px; overflow: visible; position: relative; width: 64px; }",
    ".framer-FudnT .framer-1vxedwr { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }",
  ],
  S = G(Ie, Le, "framer-FudnT"),
  Q = S;
S.displayName = "Timeline - Number";
S.defaultProps = { height: 58, width: 64 };
D(S, {
  variant: {
    options: ["wae4OkzkL", "JLlnH88L2"],
    optionTitles: ["Default", "Active"],
    title: "Variant",
    type: p.Enum,
  },
  kWjVhf9Ee: { title: "Scroll Section", type: p.ScrollSectionRef },
  k3ls6uLAp: {
    defaultValue: "01",
    displayTextArea: !1,
    title: "Step Number",
    type: p.String,
  },
});
z(
  S,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Unbounded",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/unbounded/v7/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6xjx04jHgP6LR0Y.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Re = $(Q),
  Ue = q(Q),
  me = N(i.div),
  De = ["yT1gjTwoa", "AZ2JpO8op"],
  Ee = "framer-4H9AF",
  Ne = { AZ2JpO8op: "framer-v-1ihw976", yT1gjTwoa: "framer-v-1040rlm" };
function Pe(t, ...r) {
  let a = {};
  return r?.forEach((n) => n && Object.assign(a, t[n])), a;
}
var Ge = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Oe = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0,
  },
  Je = { delay: 0, duration: 0.1, ease: [0.44, 0, 0.56, 1], type: "tween" },
  ze = ({ value: t, children: r }) => {
    let a = T(F),
      n = t ?? a.transition,
      c = I(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return e(F.Provider, { value: c, children: r });
  },
  je = i(h),
  Xe = { "Variant 1": "yT1gjTwoa", "Variant 2": "AZ2JpO8op" },
  Ye = ({
    height: t,
    id: r,
    progressBar: a,
    scrollSection: n,
    stepDescription: c,
    stepNumber: f,
    stepTitle: l,
    width: u,
    ...o
  }) => {
    var w, v, d, y, g, m;
    return {
      ...o,
      Hia1LsgDC: n ?? o.Hia1LsgDC,
      Iltzd6lgG: (w = a ?? o.Iltzd6lgG) !== null && w !== void 0 ? w : !0,
      QGZG2jrpt:
        (v = l ?? o.QGZG2jrpt) !== null && v !== void 0 ? v : "Discovery Phase",
      SFGHsTrJN:
        (d = c ?? o.SFGHsTrJN) !== null && d !== void 0
          ? d
          : "During this initial stage, we delve deep into understanding your business goals, target audience, and market landscape. We conduct thorough research and analysis to identify opportunities and challenges, laying the foundation for a successful campaign.",
      UJyQQ0kc1: (y = f ?? o.UJyQQ0kc1) !== null && y !== void 0 ? y : "01",
      variant:
        (m = (g = Xe[o.variant]) !== null && g !== void 0 ? g : o.variant) !==
          null && m !== void 0
          ? m
          : "yT1gjTwoa",
    };
  },
  Ze = (t, r) => r.join("-") + t.layoutDependency,
  Qe = V(function (t, r) {
    let { activeLocale: a, setLocale: n } = U(),
      {
        style: c,
        className: f,
        layoutId: l,
        variant: u,
        UJyQQ0kc1: o,
        QGZG2jrpt: w,
        SFGHsTrJN: v,
        Hia1LsgDC: d,
        Iltzd6lgG: y,
        ...g
      } = Ye(t),
      {
        baseVariant: m,
        classNames: M,
        gestureVariant: H,
        setGestureState: x,
        setVariant: B,
        variants: A,
      } = O({
        cycleOrder: De,
        defaultVariant: "yT1gjTwoa",
        variant: u,
        variantClassNames: Ne,
      }),
      s = Ze(t, A),
      W = L(null),
      ce = () => m !== "AZ2JpO8op",
      de = (ue) => (m === "AZ2JpO8op" ? !1 : ue),
      pe = k(),
      he = [le, ie, te],
      Be = P();
    return e(R, {
      id: l ?? pe,
      children: e(je, {
        animate: A,
        initial: !1,
        children: e(ze, {
          value: Ge,
          children: _(i.div, {
            ...g,
            className: E(Ee, ...he, "framer-1040rlm", f, M),
            "data-framer-name": "Variant 1",
            layoutDependency: s,
            layoutId: "yT1gjTwoa",
            onHoverEnd: () => x({ isHovered: !1 }),
            onHoverStart: () => x({ isHovered: !0 }),
            onTap: () => x({ isPressed: !1 }),
            onTapCancel: () => x({ isPressed: !1 }),
            onTapStart: () => x({ isPressed: !0 }),
            ref: r ?? W,
            style: { ...c },
            ...Pe({ AZ2JpO8op: { "data-framer-name": "Variant 2" } }, m, H),
            children: [
              ce() &&
                _(i.div, {
                  className: "framer-5msch8",
                  "data-framer-name": "Timeline Wrapper",
                  layoutDependency: s,
                  layoutId: "h3iIK3RKc",
                  children: [
                    e(K, {
                      width: "64px",
                      children: e(i.div, {
                        className: "framer-12rjfis-container",
                        layoutDependency: s,
                        layoutId: "uWdCQ8VMF-container",
                        children: e(Ue, {
                          __framer__animateOnce: !1,
                          __framer__targets: [{ ref: d, target: "JLlnH88L2" }],
                          __framer__threshold: 0.5,
                          __framer__variantAppearEffectEnabled: !0,
                          height: "100%",
                          id: "uWdCQ8VMF",
                          k3ls6uLAp: o,
                          kWjVhf9Ee: d,
                          layoutId: "uWdCQ8VMF",
                          style: { height: "100%", width: "100%" },
                          variant: "wae4OkzkL",
                          width: "100%",
                        }),
                      }),
                    }),
                    y &&
                      e(i.div, {
                        className: "framer-178i76n",
                        "data-framer-name": "Progress bar",
                        layoutDependency: s,
                        layoutId: "PGIOJGCnc",
                        style: { backgroundColor: "rgba(255, 255, 255, 0.05)" },
                        children: e(me, {
                          __framer__animate: { transition: Je },
                          __framer__animateOnce: !1,
                          __framer__enter: Oe,
                          __framer__spring: {
                            damping: 41,
                            delay: 0,
                            duration: 0.3,
                            ease: [0.44, 0, 0.56, 1],
                            mass: 1,
                            stiffness: 258,
                            type: "spring",
                          },
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__styleTransformEffectEnabled: !0,
                          __framer__targets: [{ ref: d, target: "animate" }],
                          __framer__threshold: 0.5,
                          __framer__transformTargets: [
                            {
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: -410,
                              },
                            },
                            {
                              ref: d,
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 1,
                                skewX: 0,
                                skewY: 0,
                                x: 0,
                                y: -40,
                              },
                            },
                          ],
                          __framer__transformTrigger: "onScrollTarget",
                          __framer__transformViewportThreshold: 0.5,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: "framer-1r2t7x7",
                          "data-framer-name": "Light",
                          layoutDependency: s,
                          layoutId: "HcjqHUOFH",
                          style: {
                            background:
                              'linear-gradient(180deg, rgba(84, 84, 84, 0) 70.44724801060994%, var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(232, 84, 66)) /* {"name":"Light Green"} */ 100%)',
                            transformPerspective: 1200,
                          },
                        }),
                      }),
                  ],
                }),
              _(me, {
                __framer__spring: {
                  damping: 100,
                  delay: 0,
                  duration: 0.3,
                  ease: [0.44, 0, 0.56, 1],
                  mass: 1,
                  stiffness: 362,
                  type: "spring",
                },
                __framer__styleTransformEffectEnabled: !0,
                __framer__transformTargets: [
                  {
                    target: {
                      opacity: 1,
                      rotate: 0,
                      rotateX: 0,
                      rotateY: 0,
                      scale: 1,
                      skewX: 0,
                      skewY: 0,
                      x: 0,
                      y: 200,
                    },
                  },
                  {
                    target: {
                      opacity: 1,
                      rotate: 0,
                      rotateX: 0,
                      rotateY: 0,
                      scale: 1,
                      skewX: 0,
                      skewY: 0,
                      x: 0,
                      y: 0,
                    },
                  },
                ],
                __framer__transformTrigger: "onInView",
                __perspectiveFX: !1,
                __smartComponentFX: !0,
                __targetOpacity: 1,
                className: "framer-fhgtvj",
                "data-framer-name": "Content Wrapper",
                layoutDependency: s,
                layoutId: "hiFT0Qsd2",
                style: { transformPerspective: 1200 },
                children: [
                  _(i.div, {
                    className: "framer-dcs7za",
                    "data-framer-name": "Content",
                    layoutDependency: s,
                    layoutId: "qoPniQyxD",
                    style: {
                      backgroundColor:
                        "var(--token-affa1b72-7c43-4531-b217-6ad9a97be289, rgba(255, 255, 255, 0.05))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    children: [
                      _(i.div, {
                        className: "framer-1md77l8",
                        "data-framer-name": "Heading",
                        layoutDependency: s,
                        layoutId: "XYpJbaAbv",
                        children: [
                          _(i.div, {
                            className: "framer-1udze9u",
                            "data-framer-name": "Label",
                            layoutDependency: s,
                            layoutId: "QzSwHcSr1",
                            style: {
                              backgroundColor:
                                "var(--token-affa1b72-7c43-4531-b217-6ad9a97be289, rgba(255, 255, 255, 0.05))",
                              borderBottomLeftRadius: 39,
                              borderBottomRightRadius: 39,
                              borderTopLeftRadius: 39,
                              borderTopRightRadius: 39,
                            },
                            children: [
                              e(b, {
                                __fromCanvasComponent: !0,
                                children: e(h, {
                                  children: e(i.p, {
                                    className: "framer-styles-preset-5vsgqx",
                                    "data-styles-preset": "urlDCZwpF",
                                    style: {
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(255, 122, 59)))",
                                    },
                                    children: "Step",
                                  }),
                                }),
                                className: "framer-1vsuwbm",
                                fonts: ["Inter"],
                                layoutDependency: s,
                                layoutId: "lKiV4YESp",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(255, 122, 59))",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                              e(b, {
                                __fromCanvasComponent: !0,
                                children: e(h, {
                                  children: e(i.p, {
                                    className: "framer-styles-preset-5vsgqx",
                                    "data-styles-preset": "urlDCZwpF",
                                    style: {
                                      "--framer-text-alignment": "center",
                                      "--framer-text-color":
                                        "var(--extracted-r6o4lv, var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(255, 122, 59)))",
                                    },
                                    children: "01",
                                  }),
                                }),
                                className: "framer-lh1zlh",
                                fonts: ["Inter"],
                                layoutDependency: s,
                                layoutId: "rt9dZ6QYZ",
                                style: {
                                  "--extracted-r6o4lv":
                                    "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(255, 122, 59))",
                                  "--framer-link-text-color":
                                    "rgb(0, 153, 255)",
                                  "--framer-link-text-decoration": "underline",
                                },
                                text: o,
                                verticalAlignment: "top",
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          e(b, {
                            __fromCanvasComponent: !0,
                            children: e(h, {
                              children: e(i.h3, {
                                className: "framer-styles-preset-ravud2",
                                "data-styles-preset": "MjM7LH64L",
                                children: "Physical Exercise (5-10 minutes)",
                              }),
                            }),
                            className: "framer-765fzz",
                            fonts: ["Inter"],
                            layoutDependency: s,
                            layoutId: "iVyrfeA8F",
                            style: {
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            text: w,
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      e(b, {
                        __fromCanvasComponent: !0,
                        children: e(h, {
                          children: e(i.p, {
                            className: "framer-styles-preset-g6micz",
                            "data-styles-preset": "iLvBdfOs8",
                            children:
                              "Just before your appointment, take 5-10 minutes to walk, run or play with your dog. Using physical exercise to release your dog\u2019s energy will help to create calmness and relaxation during their appointment.",
                          }),
                        }),
                        className: "framer-nsyb49",
                        fonts: ["Inter"],
                        layoutDependency: s,
                        layoutId: "ZRPl3uOGm",
                        style: {
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          opacity: 0.6,
                        },
                        text: v,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                  de(y) &&
                    e(i.div, {
                      className: "framer-13sm8q0",
                      layoutDependency: s,
                      layoutId: "p4uUHHHmC",
                    }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Me = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-4H9AF.framer-1wmhocq, .framer-4H9AF .framer-1wmhocq { display: block; }",
    ".framer-4H9AF.framer-1040rlm { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: auto; justify-content: center; overflow: hidden; padding: 30px 0px 0px 0px; position: relative; width: 1600px; }",
    ".framer-4H9AF .framer-5msch8 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: auto; justify-content: flex-start; overflow: visible; padding: 20px 0px 0px 0px; position: relative; width: 100px; }",
    ".framer-4H9AF .framer-12rjfis-container { flex: none; height: 58px; position: relative; width: 64px; }",
    ".framer-4H9AF .framer-178i76n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 3px; z-index: 0; }",
    ".framer-4H9AF .framer-1r2t7x7 { flex: none; height: calc(var(--framer-viewport-height, 100vh) * 0.5); overflow: hidden; position: relative; width: 100%; }",
    ".framer-4H9AF .framer-fhgtvj { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: auto; justify-content: center; max-width: 600px; overflow: hidden; padding: 0px; position: relative; width: 1px; }",
    ".framer-4H9AF .framer-dcs7za { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 20px 30px 30px 30px; position: relative; width: 100%; }",
    ".framer-4H9AF .framer-1md77l8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-4H9AF .framer-1udze9u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 3px 12px 3px 12px; position: relative; width: min-content; }",
    ".framer-4H9AF .framer-1vsuwbm, .framer-4H9AF .framer-lh1zlh { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-4H9AF .framer-765fzz, .framer-4H9AF .framer-nsyb49 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-4H9AF .framer-13sm8q0 { flex: none; height: 180px; overflow: visible; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-4H9AF.framer-1040rlm, .framer-4H9AF .framer-5msch8, .framer-4H9AF .framer-178i76n, .framer-4H9AF .framer-fhgtvj, .framer-4H9AF .framer-dcs7za, .framer-4H9AF .framer-1md77l8, .framer-4H9AF .framer-1udze9u { gap: 0px; } .framer-4H9AF.framer-1040rlm > * { margin: 0px; margin-left: calc(48px / 2); margin-right: calc(48px / 2); } .framer-4H9AF.framer-1040rlm > :first-child, .framer-4H9AF .framer-1udze9u > :first-child { margin-left: 0px; } .framer-4H9AF.framer-1040rlm > :last-child, .framer-4H9AF .framer-1udze9u > :last-child { margin-right: 0px; } .framer-4H9AF .framer-5msch8 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-4H9AF .framer-5msch8 > :first-child, .framer-4H9AF .framer-178i76n > :first-child, .framer-4H9AF .framer-fhgtvj > :first-child, .framer-4H9AF .framer-dcs7za > :first-child, .framer-4H9AF .framer-1md77l8 > :first-child { margin-top: 0px; } .framer-4H9AF .framer-5msch8 > :last-child, .framer-4H9AF .framer-178i76n > :last-child, .framer-4H9AF .framer-fhgtvj > :last-child, .framer-4H9AF .framer-dcs7za > :last-child, .framer-4H9AF .framer-1md77l8 > :last-child { margin-bottom: 0px; } .framer-4H9AF .framer-178i76n > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-4H9AF .framer-fhgtvj > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-4H9AF .framer-dcs7za > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-4H9AF .framer-1md77l8 > * { margin: 0px; margin-bottom: calc(11px / 2); margin-top: calc(11px / 2); } .framer-4H9AF .framer-1udze9u > * { margin: 0px; margin-left: calc(2px / 2); margin-right: calc(2px / 2); } }",
    ".framer-4H9AF.framer-v-1ihw976.framer-1040rlm { padding: 0px; width: 390px; }",
    ".framer-4H9AF.framer-v-1ihw976 .framer-dcs7za { padding: 20px 20px 30px 20px; }",
    ...se,
    ...ne,
    ...re,
  ],
  C = G(Qe, Me, "framer-4H9AF"),
  fr = C;
C.displayName = "Timeline - Item";
C.defaultProps = { height: 447, width: 1600 };
D(C, {
  variant: {
    options: ["yT1gjTwoa", "AZ2JpO8op"],
    optionTitles: ["Variant 1", "Variant 2"],
    title: "Variant",
    type: p.Enum,
  },
  UJyQQ0kc1: {
    defaultValue: "01",
    displayTextArea: !1,
    title: "Step Number",
    type: p.String,
  },
  QGZG2jrpt: {
    defaultValue: "Discovery Phase",
    displayTextArea: !0,
    title: "Step Title",
    type: p.String,
  },
  SFGHsTrJN: {
    defaultValue:
      "During this initial stage, we delve deep into understanding your business goals, target audience, and market landscape. We conduct thorough research and analysis to identify opportunities and challenges, laying the foundation for a successful campaign.",
    displayTextArea: !0,
    title: "Step Description",
    type: p.String,
  },
  Hia1LsgDC: { title: "Scroll Section", type: p.ScrollSectionRef },
  Iltzd6lgG: { defaultValue: !0, title: "Progress Bar", type: p.Boolean },
});
z(
  C,
  [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-ext-CFTLRB35.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://app.framerstatic.com/Inter-Regular.cyrillic-KKLZBALH.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-ext-ULEBLIFV.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://app.framerstatic.com/Inter-Regular.greek-IRHSNFQB.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://app.framerstatic.com/Inter-Regular.latin-ext-VZDUGU3Q.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://app.framerstatic.com/Inter-Regular.latin-JLQMKCHE.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://app.framerstatic.com/Inter-Regular.vietnamese-QK7VSWXK.woff2",
          weight: "400",
        },
      ],
    },
    ...Re,
    ...j(oe),
    ...j(ae),
    ...j(ee),
  ],
  { supportsExplicitInterCodegen: !0 }
);
J.loadFonts([
  "FS;Satoshi-regular",
  "FS;Satoshi-bold",
  "FS;Satoshi-bold italic",
  "FS;Satoshi-italic",
]);
var pr = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "./third-party-assets/fontshare/wf/TTX2Z3BF3P6Y5BQT3IV2VNOK6FL22KUT/7QYRJOI3JIMYHGY6CH7SOIFRQLZOLNJ6/KFIAZD4RUMEZIYV6FQ3T3GP5PDBDB6JY.woff2",
          weight: "400",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "normal",
          url: "./third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "./third-party-assets/fontshare/wf/CDEBEFT2R7XKNGXSBBLZGMY4MMHZG75P/HEVKDGQCYDZ7Z6CDVR2ZQGBCTUD6ZARH/BKWEE3VKGTFABE37K2DTH625VUSN2N35.woff2",
          weight: "700",
        },
        {
          family: "Satoshi",
          source: "fontshare",
          style: "italic",
          url: "./third-party-assets/fontshare/wf/MPIFA4B3XXRNY2MJDGP6GOOOAF6EOCLO/W5E4ZFYPJ3V6JKMBGHB6YMITK6EWS2XA/QOMBWPST76ICDYF6WOBS7SQ7RBT67QW2.woff2",
          weight: "400",
        },
      ],
    },
  ],
  hr = [
    '.framer-p9yC6 .framer-styles-preset-czlv7g:not(.rich-text-wrapper), .framer-p9yC6 .framer-styles-preset-czlv7g.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.04em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-p9yC6 .framer-styles-preset-czlv7g:not(.rich-text-wrapper), .framer-p9yC6 .framer-styles-preset-czlv7g.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 26px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-p9yC6 .framer-styles-preset-czlv7g:not(.rich-text-wrapper), .framer-p9yC6 .framer-styles-preset-czlv7g.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 22px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  ur = "framer-p9yC6";
export { fr as a, pr as b, hr as c, ur as d };
//# sourceMappingURL=chunk-6JZOZVQ7.mjs.map
