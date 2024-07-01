import { a as v } from "./chunk-KVW7ZHFM.mjs";
import {
  Ca as G,
  Da as B,
  N as P,
  T as m,
  W as _,
  Z as F,
  aa as T,
  ba as L,
  c as y,
  ea as E,
  g as I,
  ia as R,
  j as U,
  l as C,
  o as k,
  p as Y,
  ra as N,
  t as r,
  u as J,
  v as b,
  va as O,
  x as f,
  xa as g,
  z as D,
  za as q,
} from "./chunk-27H5APBL.mjs";
var oe = B(v),
  ne = { VYn33lVMS: { hover: !0 } },
  ie = ["VYn33lVMS", "YVt9h3DM_"],
  fe = "framer-0U3JM",
  se = { VYn33lVMS: "framer-v-1l0tv7e", YVt9h3DM_: "framer-v-1f0cxlq" };
function le(e, ...t) {
  let a = {};
  return t?.forEach((n) => n && Object.assign(a, e[n])), a;
}
var me = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  de = ({ value: e, children: t }) => {
    let a = U(b),
      n = e ?? a.transition,
      i = k(() => ({ ...a, transition: n }), [JSON.stringify(n)]);
    return r(b.Provider, { value: i, children: t });
  },
  ce = f(y),
  pe = { Small: "YVt9h3DM_", Variant: "VYn33lVMS" },
  he = ({
    discoverBlu: e,
    height: t,
    hover: a,
    id: n,
    link: i,
    tap: d,
    width: u,
    ...o
  }) => {
    var s, l, c;
    return {
      ...o,
      AIYkLNyqb:
        (s = e ?? o.AIYkLNyqb) !== null && s !== void 0 ? s : "Discover Blu",
      bUC28knVO: a ?? o.bUC28knVO,
      DEX53qIxg: i ?? o.DEX53qIxg,
      kwSYrqJyJ: d ?? o.kwSYrqJyJ,
      variant:
        (c = (l = pe[o.variant]) !== null && l !== void 0 ? l : o.variant) !==
          null && c !== void 0
          ? c
          : "VYn33lVMS",
    };
  },
  ue = (e, t) =>
    e.layoutDependency ? t.join("-") + e.layoutDependency : t.join("-"),
  ge = I(function (e, t) {
    let { activeLocale: a, setLocale: n } = P(),
      {
        style: i,
        className: d,
        layoutId: u,
        variant: o,
        bUC28knVO: s,
        kwSYrqJyJ: l,
        AIYkLNyqb: c,
        DEX53qIxg: A,
        ...j
      } = he(e),
      {
        baseVariant: w,
        classNames: Z,
        gestureHandlers: K,
        gestureVariant: Q,
        setGestureState: S,
        setVariant: ye,
        variants: V,
      } = O({
        cycleOrder: ie,
        defaultVariant: "VYn33lVMS",
        enabledGestures: ne,
        variant: o,
        variantClassNames: se,
      }),
      p = ue(e, V),
      { activeVariantCallback: M, delay: be } = N(w),
      z = M(async (...x) => {
        if ((S({ isHovered: !0 }), s && (await s(...x)) === !1)) return !1;
      }),
      $ = M(async (...x) => {
        if ((S({ isHovered: !1 }), l && (await l(...x)) === !1)) return !1;
      }),
      ee = Y(null),
      re = C(),
      te = [],
      ve = T();
    return r(D, {
      id: u ?? re,
      children: r(ce, {
        animate: V,
        initial: !1,
        children: r(de, {
          value: me,
          children: r(R, {
            href: A,
            openInNewTab: !0,
            children: J(f.a, {
              ...j,
              ...K,
              className: `${F(
                fe,
                ...te,
                "framer-1l0tv7e",
                d,
                Z
              )} framer-2wts4c`,
              "data-border": !0,
              "data-highlight": !0,
              "data-reset": "button",
              layoutDependency: p,
              layoutId: "VYn33lVMS",
              onMouseEnter: z,
              onMouseLeave: $,
              ref: t ?? ee,
              style: {
                "--border-bottom-width": "1px",
                "--border-color": "rgb(82, 113, 255)",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                ...i,
              },
              ...le({ YVt9h3DM_: { "data-framer-name": "Small" } }, w, Q),
              children: [
                r(f.div, {
                  className: "framer-1heurm7",
                  "data-framer-name": "Text Wrapper",
                  layoutDependency: p,
                  layoutId: "Knl03LKZl",
                  style: { backgroundColor: "rgb(82, 113, 255)" },
                  children: r(q, {
                    __fromCanvasComponent: !0,
                    children: r(y, {
                      children: r(f.p, {
                        style: {
                          "--font-selector": "R0Y7VW5ib3VuZGVkLXJlZ3VsYXI=",
                          "--framer-font-family":
                            '"Unbounded", "Unbounded Placeholder", sans-serif',
                          "--framer-font-size": "13px",
                          "--framer-line-height": "1.5em",
                          "--framer-text-alignment": "left",
                          "--framer-text-color":
                            "var(--extracted-r6o4lv, var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13)))",
                          "--framer-text-transform": "uppercase",
                        },
                        children: "GET IN TOUCH",
                      }),
                    }),
                    className: "framer-18tr986",
                    fonts: ["GF;Unbounded-regular"],
                    layoutDependency: p,
                    layoutId: "t6iF9BXUC",
                    style: {
                      "--extracted-r6o4lv":
                        "var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13))",
                      "--framer-link-text-color": "rgb(0, 153, 255)",
                      "--framer-link-text-decoration": "underline",
                      "--framer-paragraph-spacing": "0px",
                    },
                    text: c,
                    verticalAlignment: "top",
                    withExternalLayout: !0,
                  }),
                }),
                r(f.div, {
                  className: "framer-1rthbk6",
                  "data-framer-name": "Icon Wrapper",
                  layoutDependency: p,
                  layoutId: "u9Igqc4S0",
                  style: { backgroundColor: "rgb(82, 113, 255)" },
                  children: r(L, {
                    children: r(f.div, {
                      className: "framer-1kk2h53-container",
                      layoutDependency: p,
                      layoutId: "tK6YDksjs-container",
                      style: { rotate: 45 },
                      variants: {
                        "VYn33lVMS-hover": { rotate: 90 },
                        YVt9h3DM_: { rotate: 90 },
                      },
                      children: r(v, {
                        color:
                          "var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13))",
                        height: "100%",
                        iconSearch: "House",
                        iconSelection: "ArrowUp",
                        id: "tK6YDksjs",
                        layoutId: "tK6YDksjs",
                        mirrored: !1,
                        selectByList: !0,
                        style: { height: "100%", width: "100%" },
                        weight: "regular",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  xe = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-0U3JM.framer-2wts4c, .framer-0U3JM .framer-2wts4c { display: block; }",
    ".framer-0U3JM.framer-1l0tv7e { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-0U3JM .framer-1heurm7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 50px; justify-content: flex-start; overflow: visible; padding: 25px 30px 25px 30px; position: relative; width: min-content; }",
    ".framer-0U3JM .framer-18tr986 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-0U3JM .framer-1rthbk6 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 50px; }",
    ".framer-0U3JM .framer-1kk2h53-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 23px); position: relative; width: 20px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0U3JM.framer-1l0tv7e, .framer-0U3JM .framer-1heurm7, .framer-0U3JM .framer-1rthbk6 { gap: 0px; } .framer-0U3JM.framer-1l0tv7e > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-0U3JM.framer-1l0tv7e > :first-child, .framer-0U3JM .framer-1heurm7 > :first-child { margin-left: 0px; } .framer-0U3JM.framer-1l0tv7e > :last-child, .framer-0U3JM .framer-1heurm7 > :last-child { margin-right: 0px; } .framer-0U3JM .framer-1heurm7 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-0U3JM .framer-1rthbk6 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-0U3JM .framer-1rthbk6 > :first-child { margin-top: 0px; } .framer-0U3JM .framer-1rthbk6 > :last-child { margin-bottom: 0px; } }",
    ".framer-0U3JM.framer-v-1f0cxlq .framer-1heurm7 { height: 44px; padding: 10px 20px 10px 30px; }",
    ".framer-0U3JM.framer-v-1l0tv7e.hover.framer-1l0tv7e { gap: 6px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0U3JM.framer-v-1l0tv7e.hover.framer-1l0tv7e { gap: 0px; } .framer-0U3JM.framer-v-1l0tv7e.hover.framer-1l0tv7e > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-0U3JM.framer-v-1l0tv7e.hover.framer-1l0tv7e > :first-child { margin-left: 0px; } .framer-0U3JM.framer-v-1l0tv7e.hover.framer-1l0tv7e > :last-child { margin-right: 0px; } }",
    '.framer-0U3JM[data-border="true"]::after, .framer-0U3JM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  h = E(ge, xe, "framer-0U3JM"),
  Ue = h;
h.displayName = "Button";
h.defaultProps = { height: 50, width: 226 };
_(h, {
  variant: {
    options: ["VYn33lVMS", "YVt9h3DM_"],
    optionTitles: ["Variant", "Small"],
    title: "Variant",
    type: m.Enum,
  },
  bUC28knVO: { title: "Hover", type: m.EventHandler },
  kwSYrqJyJ: { title: "Tap", type: m.EventHandler },
  AIYkLNyqb: {
    defaultValue: "Discover Blu",
    displayTextArea: !1,
    title: "Discover Blu",
    type: m.String,
  },
  DEX53qIxg: { title: "Link", type: m.Link },
});
G(
  h,
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
    ...oe,
  ],
  { supportsExplicitInterCodegen: !0 }
);
g.loadFonts([
  "FS;Satoshi-regular",
  "FS;Satoshi-bold",
  "FS;Satoshi-bold italic",
  "FS;Satoshi-italic",
]);
var Je = [
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
  De = [
    '.framer-IvEId .framer-styles-preset-smtg16:not(.rich-text-wrapper), .framer-IvEId .framer-styles-preset-smtg16.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-IvEId .framer-styles-preset-smtg16:not(.rich-text-wrapper), .framer-IvEId .framer-styles-preset-smtg16.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-IvEId .framer-styles-preset-smtg16:not(.rich-text-wrapper), .framer-IvEId .framer-styles-preset-smtg16.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  Pe = "framer-IvEId";
g.loadFonts(["GF;Unbounded-regular", "GF;Unbounded-700"]);
var Le = [
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
        {
          family: "Unbounded",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/unbounded/v7/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6__204jHgP6LR0Y.woff2",
          weight: "700",
        },
      ],
    },
  ],
  Ee = [
    '.framer-W2e9I .framer-styles-preset-1uey7d7:not(.rich-text-wrapper), .framer-W2e9I .framer-styles-preset-1uey7d7.rich-text-wrapper p { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 96px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-W2e9I .framer-styles-preset-1uey7d7:not(.rich-text-wrapper), .framer-W2e9I .framer-styles-preset-1uey7d7.rich-text-wrapper p { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 52px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-W2e9I .framer-styles-preset-1uey7d7:not(.rich-text-wrapper), .framer-W2e9I .framer-styles-preset-1uey7d7.rich-text-wrapper p { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 46px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  Re = "framer-W2e9I";
export { Ue as a, Je as b, De as c, Pe as d, Le as e, Ee as f, Re as g };
//# sourceMappingURL=chunk-JVAFNABT.mjs.map
