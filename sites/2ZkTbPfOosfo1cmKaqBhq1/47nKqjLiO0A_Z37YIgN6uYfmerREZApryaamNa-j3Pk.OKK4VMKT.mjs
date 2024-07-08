import { a as Fe } from "./chunk-GRTGDNQN.mjs";
import { a as Gr } from "./chunk-N7PISP3R.mjs";
import {
  a as rt,
  b as tt,
  c as at,
  d as nt,
  e as it,
  f as ot,
} from "./chunk-NFA27UZR.mjs";
import { a as Br } from "./chunk-HF52UQIO.mjs";
import { a as xr } from "./chunk-VVIRL5HP.mjs";
import { a as D, b as ur } from "./chunk-IMRPELPH.mjs";
import "./chunk-RXQB73XJ.mjs";
import { a as Jr, b as Zr, c as et, d as Ve } from "./chunk-PJJHVBHR.mjs";
import { a as pr } from "./chunk-4EK5LH4J.mjs";
import {
  a as we,
  b as hr,
  c as We,
  d as Qr,
  e as Kr,
  f as $r,
  g as yr,
  h as gr,
} from "./chunk-CZQVLD3V.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as Xe,
  A as Er,
  B as Ur,
  Ba as se,
  C as zr,
  Ca as C,
  D as qr,
  Da as de,
  F as Xr,
  N as Dr,
  O as me,
  Q as Ce,
  S as Ae,
  U as d,
  X as B,
  _ as J,
  b as je,
  ba as be,
  c as x,
  ca as s,
  d as dr,
  da as S,
  f as fr,
  fa as G,
  g as ie,
  ga as Wr,
  ha as Yr,
  i as Ar,
  ia as Mr,
  j as ve,
  k as Je,
  ka as f,
  l as oe,
  la as xe,
  m as Tr,
  o as le,
  p as b,
  q as Rr,
  ra as Te,
  sa as Hr,
  t as e,
  u as c,
  ua as _e,
  v as H,
  w as cr,
  wa as Re,
  x as i,
  xa as De,
  y as X,
  ya as _,
  z as Vr,
} from "./chunk-PIBAGVPI.mjs";
import "./chunk-ELYU6EKT.mjs";
function lt(t) {
  for (var a = 0, o, m = 0, p = t.length; p >= 4; ++m, p -= 4)
    (o =
      (255 & t.charCodeAt(m)) |
      ((255 & t.charCodeAt(++m)) << 8) |
      ((255 & t.charCodeAt(++m)) << 16) |
      ((255 & t.charCodeAt(++m)) << 24)),
      (o = 1540483477 * (65535 & o) + ((59797 * (o >>> 16)) << 16)),
      (o ^= o >>> 24),
      (a =
        (1540483477 * (65535 & o) + ((59797 * (o >>> 16)) << 16)) ^
        (1540483477 * (65535 & a) + ((59797 * (a >>> 16)) << 16)));
  switch (p) {
    case 3:
      a ^= (255 & t.charCodeAt(m + 2)) << 16;
    case 2:
      a ^= (255 & t.charCodeAt(m + 1)) << 8;
    case 1:
      (a ^= 255 & t.charCodeAt(m)),
        (a = 1540483477 * (65535 & a) + ((59797 * (a >>> 16)) << 16));
  }
  return (
    (a ^= a >>> 13),
    (a = 1540483477 * (65535 & a) + ((59797 * (a >>> 16)) << 16)),
    ((a ^ (a >>> 15)) >>> 0).toString(36)
  );
}
var vr = G(
    function (t) {
      let a,
        o,
        m,
        p = je.count(t.slots) > 0,
        y = Ae.current() === Ae.canvas,
        g = p && t.type === "graphic",
        R = t.type === "circle",
        I = t.type === "ellipse",
        v = I ? t.cylinderHeight / 2 : 0,
        n = Rt(t.flip, v);
      if (g) {
        let E = wr(t.slots),
          u = wr(E.props.svg),
          P = wr(E.props.children);
        if (y && !P.props.frame)
          return c("div", {
            style: Vt,
            children: [
              e("div", { style: Et, children: "\u{1F48E}" }),
              e("p", { style: Ut, children: "Please connect to Graphic" }),
              e("p", {
                style: zt,
                children:
                  "You can only connect the Arc to a Graphic with a single path.",
              }),
            ],
          });
        if (y && P) {
          let U = Br(P),
            w = P.props.frame;
          for (let l of ((o = `0 0 ${w.width} ${w.height}`),
          U.match(/[\w-]+="[^"]*"/g)))
            l.includes("d=") && (a = mt(l));
        }
        if (!y && u) {
          let U = u.match(/[\w-]+="[^"]*"/g);
          for (let w of ((o = (o = (o = u.split("viewBox=")[1]).split(
            ">"
          )[0]).replace(/^"(.+(?="$))"$/, "$1")),
          U))
            w.includes("d=") && (a = mt(w));
        }
      }
      let j = `curve-${lt(a || n)}`;
      return (
        t.alignmentBaseline === "top" && (m = "Text Top"),
        t.alignmentBaseline === "center" && (m = "Central"),
        t.alignmentBaseline === "bottom" && (m = "Hanging"),
        e(i.div, {
          style: { width: "100%", height: "100%", position: "relative" },
          draggable: "false",
          children: c(i.svg, {
            className: "transform-origin-center-center",
            style: {
              width: "100%",
              height: "100%",
              position: "absolute",
              inset: 0,
              transformOrigin: "center",
              willChange: t.rotate && "transform",
            },
            viewBox: g ? o : "0 0 100 100",
            overflow: "visible",
            animate: R && t.rotate && { rotate: 360 },
            transition: R &&
              t.rotate && {
                duration: 100 / t.rotateSpeed,
                repeat: 1 / 0,
                ease: "linear",
              },
            children: [
              e("path", {
                id: j,
                d: g ? a : n,
                strokeWidth: "none",
                fill: "transparent",
              }),
              e("text", {
                children: c("textPath", {
                  href: `#${j}`,
                  startOffset: t.startOffset,
                  dominantBaseline: m,
                  style: {
                    ...t.font,
                    wordSpacing: t.wordSpacing,
                    fill: t.color,
                  },
                  children: [
                    t.text,
                    !y &&
                      t.animate &&
                      e("animate", {
                        attributeName: "startOffset",
                        from: `${t.animateStart}%`,
                        to: `${t.animateEnd}%`,
                        begin: "0s",
                        dur: `${t.animateDuration}s`,
                        repeatCount: "indefinite",
                      }),
                  ],
                }),
              }),
            ],
          }),
        })
      );
    },
    [
      ".transform-origin-center-center { transform-origin: center center !important; }",
    ]
  ),
  br = vr;
function wr(t) {
  let a;
  return (
    je.map(t, (o) => {
      a === void 0 && (a = o);
    }),
    a
  );
}
(vr.defaultProps = { height: 50, width: 50 }),
  B(vr, {
    text: {
      title: "Content",
      type: d.String,
      defaultValue: "\u2726 THANK YOU \u2726 FOR VISITING",
      displayTextArea: !0,
    },
    type: {
      title: "Type",
      type: d.Enum,
      options: ["circle", "ellipse", "graphic"],
      optionTitles: ["Circle", "Ellipse", "Graphic"],
      defaultValue: !0,
    },
    cylinderHeight: {
      title: "Height",
      type: d.Number,
      unit: "px",
      min: 0,
      max: 1e3,
      hidden: ({ type: t }) => t !== "ellipse",
    },
    rotate: {
      type: d.Boolean,
      title: "Rotate",
      defaultValue: !1,
      hidden: ({ type: t }) => t !== "circle",
    },
    rotateSpeed: {
      type: d.Number,
      title: "Speed",
      min: 0,
      max: 50,
      defaultValue: 5,
      displayStepper: !0,
      step: 1,
      hidden: ({ type: t, rotate: a }) => t !== "circle" || !a,
    },
    slots: {
      type: d.ComponentInstance,
      title: "Graphic",
      hidden: ({ type: t }) => t !== "graphic",
    },
    alignmentBaseline: {
      title: "Align",
      type: d.Enum,
      options: ["top", "center", "bottom"],
      optionIcons: ["align-top", "align-middle", "align-bottom"],
      defaultValue: "bottom",
      displaySegmentedControl: !0,
    },
    flip: {
      type: d.Boolean,
      defaultValue: !1,
      title: "Direction",
      enabledTitle: "CW",
      disabledTitle: "CCW",
      hidden: ({ type: t }) => t === "graphic",
    },
    startOffset: {
      title: "Offset",
      type: d.Number,
      defaultValue: 0,
      max: 360,
      unit: "\xB0",
      step: 0.5,
    },
    color: { title: "Color", type: d.Color, defaultValue: "#999" },
    font: {
      type: d.Font,
      title: "Font",
      controls: "extended",
      displayTextAlignment: !1,
    },
    wordSpacing: {
      type: d.Number,
      step: 1,
      defaultValue: 0,
      title: "Word",
      displayStepper: !0,
    },
    animate: { type: d.Boolean, defaultValue: !1, title: "Animate" },
    animateStart: {
      type: d.Number,
      min: -200,
      max: 200,
      step: 0.1,
      defaultValue: -50,
      title: "From",
      unit: "%",
      hidden: (t) => !t.animate,
    },
    animateEnd: {
      type: d.Number,
      min: -200,
      max: 200,
      step: 0.1,
      defaultValue: 150,
      title: "To",
      unit: "%",
      hidden: (t) => !t.animate,
    },
    animateDuration: {
      type: d.Number,
      min: 0,
      max: 50,
      defaultValue: 5,
      title: "Time",
      unit: "s",
      displayStepper: !0,
      hidden: (t) => !t.animate,
    },
  });
var mt = (t) => t.split("=")[1].replace(/['"]+/g, ""),
  Rt = (t, a) => {
    let o = 50 - a,
      m = 50 + a;
    return t
      ? `M 0 50 L 0 ${m} A 1 1 0 1 0 100 ${m} L 100 ${o} A 1 1 0 1 0 0 ${o} L 0 50`
      : `M 0 50 L 0 ${o} A 1 1 0 0 1 100 ${o} L 100 50 L 100 ${m} A 1 1 0 0 1 0 ${m} L 0 ${o}`;
  },
  Vt = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
  },
  Et = { fontSize: 32, marginBottom: 10 },
  Ut = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  zt = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 160,
    lineHeight: 1.5,
    textAlign: "center",
  };
var qt = 100,
  Xt = {
    left: (t) => `translateX(-${t}px)`,
    right: (t) => `translateX(${t}px)`,
    top: (t) => `translateY(-${t}px)`,
    bottom: (t) => `translateY(${t}px)`,
  },
  _r =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function Ee(t) {
  let {
      slots: a,
      gap: o,
      padding: m,
      paddingPerSide: p,
      paddingTop: y,
      paddingRight: g,
      paddingBottom: R,
      paddingLeft: I,
      speed: v,
      hoverFactor: n,
      direction: j,
      alignment: E,
      sizingOptions: u,
      fadeOptions: P,
      style: U,
    } = t,
    {
      fadeContent: w,
      overflow: l,
      fadeWidth: te,
      fadeInset: q,
      fadeAlpha: V,
    } = P,
    { widthType: z, heightType: he } = u,
    ue = p ? `${y}px ${g}px ${R}px ${I}px` : `${m}px`,
    r = Ae.current() === Ae.canvas,
    W = a.filter(Boolean),
    Q = je.count(W),
    ye = Q > 0;
  j === !0 && (j = "left");
  let Y = j === "left" || j === "right",
    ze = Vr(0),
    K = Xt[j],
    h = Er(ze, K),
    ae = b(null),
    F = le(() => [fr(), fr()], []),
    [Ne, Ft] = Rr({ parent: null, children: null }),
    jr = [],
    ar = [],
    qe = 0,
    nr = 0;
  r && ((qe = Q ? Math.floor(10 / Q) : 0), (nr = 1)),
    !r &&
      ye &&
      Ne.parent &&
      ((qe = Math.round((Ne.parent / Ne.children) * 2) + 1),
      (qe = Math.min(qe, qt)),
      (nr = 1));
  let Cr = Ar(() => {
      if (ye && ae.current) {
        let N = Y ? ae.current.offsetWidth : ae.current.offsetHeight,
          k = F[0].current
            ? Y
              ? F[0].current.offsetLeft
              : F[0].current.offsetTop
            : 0,
          M =
            (F[1].current
              ? Y
                ? F[1].current.offsetLeft + F[1].current.offsetWidth
                : F[1].current.offsetTop + F[1].current.offsetHeight
              : 0) -
            k +
            o;
        Ft({ parent: N, children: M });
      }
    }, []),
    Fr = r ? { contentVisibility: "auto" } : {};
  if (ye) {
    if (!r) {
      let N = b(!0);
      Je(
        () => (
          cr.read(Cr),
          Gr(ae.current, ({ contentSize: k }) => {
            !N.current && (k.width || k.height) && cr.read(Cr),
              (N.current = !1);
          })
        ),
        []
      );
    }
    jr = je.map(W, (N, k) => {
      var ge, M, ke, Oe;
      let Ie;
      k === 0 && (Ie = F[0]), k === W.length - 1 && (Ie = F[1]);
      let Se = {
        width: z
          ? (ge = N.props) === null || ge === void 0
            ? void 0
            : ge.width
          : "100%",
        height: he
          ? (M = N.props) === null || M === void 0
            ? void 0
            : M.height
          : "100%",
      };
      return e(X, {
        inherit: "id",
        children: e("li", {
          ref: Ie,
          style: Se,
          children: dr(
            N,
            {
              style: {
                ...((ke = N.props) === null || ke === void 0
                  ? void 0
                  : ke.style),
                ...Se,
                flexShrink: 0,
                ...Fr,
              },
              layoutId: N.props.layoutId
                ? N.props.layoutId + "-original-" + k
                : void 0,
            },
            (Oe = N.props) === null || Oe === void 0 ? void 0 : Oe.children
          ),
        }),
      });
    });
  }
  if (!r)
    for (let N = 0; N < qe; N++)
      ar = [
        ...ar,
        ...je.map(W, (k, ge) => {
          var M, ke, Oe, Ie, Se, sr;
          let Tt = {
            width: z
              ? (M = k.props) === null || M === void 0
                ? void 0
                : M.width
              : "100%",
            height: he
              ? (ke = k.props) === null || ke === void 0
                ? void 0
                : ke.height
              : "100%",
            willChange: "transform",
          };
          return e(
            X,
            {
              inherit: "id",
              children: e(
                "li",
                {
                  style: Tt,
                  "aria-hidden": !0,
                  children: dr(
                    k,
                    {
                      key: N + " " + ge,
                      style: {
                        ...((Oe = k.props) === null || Oe === void 0
                          ? void 0
                          : Oe.style),
                        width: z
                          ? (Ie = k.props) === null || Ie === void 0
                            ? void 0
                            : Ie.width
                          : "100%",
                        height: he
                          ? (Se = k.props) === null || Se === void 0
                            ? void 0
                            : Se.height
                          : "100%",
                        flexShrink: 0,
                        ...Fr,
                      },
                      layoutId: k.props.layoutId
                        ? k.props.layoutId + "-dupe-" + N
                        : void 0,
                    },
                    (sr = k.props) === null || sr === void 0
                      ? void 0
                      : sr.children
                  ),
                },
                N + "li" + ge
              ),
            },
            N + "lg" + ge
          );
        }),
      ];
  let ne = Ne.children + Ne.children * Math.round(Ne.parent / Ne.children),
    ir = b(null),
    or = b(null),
    $e = b(0),
    lr = b(!1),
    Pr = zr(),
    Lr = b(null),
    $ = b(null);
  if (!r) {
    let N = Xr(ae);
    _r
      ? (Je(() => {
          if (!(Pr || !ne || !v))
            return (
              ($.current = Lr.current.animate(
                { transform: [K(0), K(ne)] },
                {
                  duration: (Math.abs(ne) / v) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => $.current.cancel()
            );
        }, [n, ne, v]),
        Je(() => {
          $.current &&
            (N && $.current.playState === "paused"
              ? $.current.play()
              : !N && $.current.playState === "running" && $.current.pause());
        }, [N]))
      : Ur((k) => {
          if (!ne || Pr || _r) return;
          ir.current === null && (ir.current = k), (k = k - ir.current);
          let M = (or.current === null ? 0 : k - or.current) * (v / 1e3);
          lr.current && (M *= n),
            ($e.current += M),
            ($e.current = qr(0, ne, $e.current)),
            (or.current = k),
            N && ze.set($e.current);
        });
  }
  let Pt = Y ? "to right" : "to bottom",
    Sr = te / 2,
    Lt = 100 - te / 2,
    St = Ht(q, 0, Sr),
    At = 100 - q,
    mr = `linear-gradient(${Pt}, rgba(0, 0, 0, ${V}) ${St}%, rgba(0, 0, 0, 1) ${Sr}%, rgba(0, 0, 0, 1) ${Lt}%, rgba(0, 0, 0, ${V}) ${At}%)`;
  return ye
    ? e("section", {
        style: {
          ...st,
          opacity: nr,
          WebkitMaskImage: w ? mr : void 0,
          MozMaskImage: w ? mr : void 0,
          maskImage: w ? mr : void 0,
          overflow: l ? "visible" : "hidden",
          padding: ue,
        },
        ref: ae,
        children: c(i.ul, {
          ref: Lr,
          style: {
            ...st,
            gap: o,
            top: j === "bottom" && dt(ne) ? -ne : void 0,
            left: j === "right" && dt(ne) ? -ne : void 0,
            placeItems: E,
            position: "relative",
            flexDirection: Y ? "row" : "column",
            ...U,
            willChange: r ? "auto" : "transform",
            transform: _r ? K(0) : h,
          },
          onMouseEnter: () => {
            (lr.current = !0), $.current && ($.current.playbackRate = n);
          },
          onMouseLeave: () => {
            (lr.current = !1), $.current && ($.current.playbackRate = 1);
          },
          children: [jr, ar],
        }),
      })
    : c("section", {
        style: Dt,
        children: [
          e("div", { style: Wt, children: "\u2728" }),
          e("p", { style: Yt, children: "Connect to Content" }),
          e("p", {
            style: Mt,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
Ee.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: !0, heightType: !0 },
  fadeOptions: {
    fadeContent: !0,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  direction: !0,
};
B(Ee, {
  slots: {
    type: d.Array,
    title: "Children",
    control: { type: d.ComponentInstance },
  },
  speed: {
    type: d.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: d.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    defaultValue: "left",
    displaySegmentedControl: !0,
  },
  alignment: {
    type: d.Enum,
    title: "Align",
    options: ["flex-start", "center", "flex-end"],
    optionIcons: {
      direction: {
        right: ["align-top", "align-middle", "align-bottom"],
        left: ["align-top", "align-middle", "align-bottom"],
        top: ["align-left", "align-center", "align-right"],
        bottom: ["align-left", "align-center", "align-right"],
      },
    },
    defaultValue: "center",
    displaySegmentedControl: !0,
  },
  gap: { type: d.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: d.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: d.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: d.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: d.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: d.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: d.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: d.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(t) {
          return t.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: d.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeInset: {
        type: d.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: d.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(t) {
          return t.fadeContent === !1;
        },
      },
    },
  },
  hoverFactor: {
    type: d.Number,
    title: "Hover",
    min: 0,
    max: 1,
    unit: "x",
    defaultValue: 1,
    step: 0.1,
    displayStepper: !0,
    description: "Slows down the speed while you are hovering.",
  },
});
var st = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none",
  },
  Dt = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px",
  },
  Wt = { fontSize: 32, marginBottom: 10 },
  Yt = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Mt = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Ht = (t, a, o) => Math.min(Math.max(t, a), o),
  dt = (t) => typeof t == "number" && !isNaN(t);
Re.loadFonts(["GF;Unbounded-regular", "GF;Unbounded-700"]);
var ft = [
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
  ct = [
    '.framer-7fTja .framer-styles-preset-1dy6ejl:not(.rich-text-wrapper), .framer-7fTja .framer-styles-preset-1dy6ejl.rich-text-wrapper p { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.1px; --framer-line-height: 2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-eea41e84-741c-4ad1-8fa4-d13594d15041, #384036); --framer-text-decoration: none; --framer-text-transform: uppercase; }',
  ],
  pt = "framer-7fTja";
var Gt = C(we),
  Qt = { jtRuC2KMh: { hover: !0 }, XAfdliSj0: { hover: !0 } },
  Kt = ["jtRuC2KMh", "XAfdliSj0", "UYq6nen_u"],
  $t = "framer-yf96U",
  Jt = {
    jtRuC2KMh: "framer-v-1kfajd9",
    UYq6nen_u: "framer-v-7wlb4b",
    XAfdliSj0: "framer-v-1kaorwe",
  };
function Nr(t, ...a) {
  let o = {};
  return a?.forEach((m) => m && Object.assign(o, t[m])), o;
}
var Zt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ea = (t, a) => `translateY(-50%) ${a}`,
  ra = ({ value: t, children: a }) => {
    let o = ve(H),
      m = t ?? o.transition,
      p = le(() => ({ ...o, transition: m }), [JSON.stringify(m)]);
    return e(H.Provider, { value: p, children: a });
  },
  ta = i(x),
  aa = {
    "Variant 3": "XAfdliSj0",
    "Variant 4": "UYq6nen_u",
    Dark: "jtRuC2KMh",
  },
  na = ({
    height: t,
    hover: a,
    id: o,
    link: m,
    smoothScroll: p,
    tap: y,
    title: g,
    width: R,
    ...I
  }) => {
    var v, n, j;
    return {
      ...I,
      AIYkLNyqb:
        (v = g ?? I.AIYkLNyqb) !== null && v !== void 0 ? v : "GET IN TOUCH",
      bUC28knVO: a ?? I.bUC28knVO,
      Deo_eE5Hq: p ?? I.Deo_eE5Hq,
      DEX53qIxg: m ?? I.DEX53qIxg,
      kwSYrqJyJ: y ?? I.kwSYrqJyJ,
      variant:
        (j = (n = aa[I.variant]) !== null && n !== void 0 ? n : I.variant) !==
          null && j !== void 0
          ? j
          : "jtRuC2KMh",
    };
  },
  ia = (t, a) => a.join("-") + t.layoutDependency,
  oa = ie(function (t, a) {
    let { activeLocale: o, setLocale: m } = me(),
      {
        style: p,
        className: y,
        layoutId: g,
        variant: R,
        bUC28knVO: I,
        kwSYrqJyJ: v,
        AIYkLNyqb: n,
        DEX53qIxg: j,
        Deo_eE5Hq: E,
        ...u
      } = na(t),
      {
        baseVariant: P,
        classNames: U,
        gestureVariant: w,
        setGestureState: l,
        setVariant: te,
        variants: q,
      } = _e({
        cycleOrder: Kt,
        defaultVariant: "jtRuC2KMh",
        enabledGestures: Qt,
        variant: R,
        variantClassNames: Jt,
      }),
      V = ia(t, q),
      { activeVariantCallback: z, delay: he } = Te(P),
      ue = z(async (...K) => {
        if (I && (await I(...K)) === !1) return !1;
      }),
      r = z(async (...K) => {
        if (v && (await v(...K)) === !1) return !1;
      }),
      W = b(null),
      Q = () =>
        !(w === "XAfdliSj0-hover" || ["XAfdliSj0", "UYq6nen_u"].includes(P)),
      ye = oe(),
      Y = [pt],
      ze = be();
    return e(X, {
      id: g ?? ye,
      children: e(ta, {
        animate: q,
        initial: !1,
        children: e(ra, {
          value: Zt,
          children: e(Mr, {
            href: j,
            smoothScroll: E,
            children: c(i.a, {
              ...u,
              className: `${J($t, ...Y, "framer-1kfajd9", y, U)} framer-site24`,
              "data-border": !0,
              "data-framer-name": "Dark",
              "data-highlight": !0,
              "data-reset": "button",
              layoutDependency: V,
              layoutId: "jtRuC2KMh",
              onHoverEnd: () => l({ isHovered: !1 }),
              onHoverStart: () => l({ isHovered: !0 }),
              onMouseEnter: ue,
              onMouseLeave: r,
              onTap: () => l({ isPressed: !1 }),
              onTapCancel: () => l({ isPressed: !1 }),
              onTapStart: () => l({ isPressed: !0 }),
              ref: a ?? W,
              style: {
                "--border-bottom-width": "1px",
                "--border-color":
                  "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(135, 186, 84))",
                "--border-left-width": "1px",
                "--border-right-width": "1px",
                "--border-style": "solid",
                "--border-top-width": "1px",
                backgroundColor:
                  "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(145, 84, 186))",
                borderBottomLeftRadius: 60,
                borderBottomRightRadius: 60,
                borderTopLeftRadius: 60,
                borderTopRightRadius: 60,
                ...p,
              },
              variants: {
                "XAfdliSj0-hover": {
                  backgroundColor:
                    "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(135, 186, 84))",
                },
                UYq6nen_u: {
                  "--border-color":
                    "var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(248, 248, 245))",
                  backgroundColor:
                    "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(135, 186, 84))",
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                },
                XAfdliSj0: {
                  "--border-color":
                    "var(--token-8c47652b-dea5-4767-a9f2-5d952dcce49a, rgb(248, 248, 245))",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                },
              },
              ...Nr(
                {
                  "jtRuC2KMh-hover": { "data-framer-name": void 0 },
                  "XAfdliSj0-hover": { "data-framer-name": void 0 },
                  UYq6nen_u: { "data-framer-name": "Variant 4" },
                  XAfdliSj0: { "data-framer-name": "Variant 3" },
                },
                P,
                w
              ),
              children: [
                e(_, {
                  __fromCanvasComponent: !0,
                  children: e(x, {
                    children: e(i.p, {
                      className: "framer-styles-preset-1dy6ejl",
                      "data-styles-preset": "cQLuLB99o",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, rgb(33, 33, 33))",
                      },
                      children: "GET IN TOUCH",
                    }),
                  }),
                  className: "framer-413gm2",
                  fonts: ["Inter"],
                  layoutDependency: V,
                  layoutId: "Tj5KCEEzk",
                  style: {
                    "--extracted-r6o4lv": "rgb(33, 33, 33)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  text: n,
                  variants: {
                    XAfdliSj0: {
                      "--extracted-r6o4lv":
                        "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Nr(
                    {
                      "XAfdliSj0-hover": {
                        children: e(x, {
                          children: e(i.p, {
                            className: "framer-styles-preset-1dy6ejl",
                            "data-styles-preset": "cQLuLB99o",
                            children: "GET IN TOUCH",
                          }),
                        }),
                      },
                      UYq6nen_u: {
                        children: e(x, {
                          children: e(i.p, {
                            className: "framer-styles-preset-1dy6ejl",
                            "data-styles-preset": "cQLuLB99o",
                            children: "GET IN TOUCH",
                          }),
                        }),
                      },
                      XAfdliSj0: {
                        children: e(x, {
                          children: e(i.p, {
                            className: "framer-styles-preset-1dy6ejl",
                            "data-styles-preset": "cQLuLB99o",
                            style: {
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))",
                            },
                            children: "GET IN TOUCH",
                          }),
                        }),
                      },
                    },
                    P,
                    w
                  ),
                }),
                Q() &&
                  e(s, {
                    children: e(i.div, {
                      className: "framer-1m4bmb1-container",
                      layoutDependency: V,
                      layoutId: "Bfod9mZJG-container",
                      style: { rotate: -45 },
                      variants: { "jtRuC2KMh-hover": { rotate: 0 } },
                      children: e(we, {
                        color:
                          "var(--token-eea41e84-741c-4ad1-8fa4-d13594d15041, rgb(10, 10, 10))",
                        height: "100%",
                        iconSearch: "House",
                        iconSelection: "ArrowRight",
                        id: "Bfod9mZJG",
                        layoutId: "Bfod9mZJG",
                        mirrored: !1,
                        selectByList: !0,
                        style: { height: "100%", width: "100%" },
                        weight: "regular",
                        width: "100%",
                      }),
                    }),
                  }),
                Q() &&
                  e(i.div, {
                    className: "framer-1djj7in",
                    layoutDependency: V,
                    layoutId: "HZ318x8L5",
                    style: {
                      backgroundColor:
                        "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(135, 186, 84))",
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    transformTemplate: ea,
                    variants: {
                      "jtRuC2KMh-hover": {
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                    },
                    ...Nr(
                      { "jtRuC2KMh-hover": { transformTemplate: void 0 } },
                      P,
                      w
                    ),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  la = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-yf96U.framer-site24, .framer-yf96U .framer-site24 { display: block; }",
    ".framer-yf96U.framer-1kfajd9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 43px; justify-content: flex-start; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; text-decoration: none; width: auto; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yf96U .framer-413gm2 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }",
    ".framer-yf96U .framer-1m4bmb1-container { flex: none; height: 10px; position: relative; width: 10px; }",
    ".framer-yf96U .framer-1djj7in { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); overflow: visible; position: absolute; right: 15px; top: 52%; width: 18px; z-index: -1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yf96U.framer-1kfajd9 { gap: 0px; } .framer-yf96U.framer-1kfajd9 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-yf96U.framer-1kfajd9 > :first-child { margin-left: 0px; } .framer-yf96U.framer-1kfajd9 > :last-child { margin-right: 0px; } }",
    ".framer-yf96U.framer-v-1kaorwe.framer-1kfajd9, .framer-yf96U.framer-v-7wlb4b.framer-1kfajd9 { gap: 57px; justify-content: center; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yf96U.framer-v-1kaorwe.framer-1kfajd9 { gap: 0px; } .framer-yf96U.framer-v-1kaorwe.framer-1kfajd9 > * { margin: 0px; margin-left: calc(57px / 2); margin-right: calc(57px / 2); } .framer-yf96U.framer-v-1kaorwe.framer-1kfajd9 > :first-child { margin-left: 0px; } .framer-yf96U.framer-v-1kaorwe.framer-1kfajd9 > :last-child { margin-right: 0px; } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yf96U.framer-v-7wlb4b.framer-1kfajd9 { gap: 0px; } .framer-yf96U.framer-v-7wlb4b.framer-1kfajd9 > * { margin: 0px; margin-left: calc(57px / 2); margin-right: calc(57px / 2); } .framer-yf96U.framer-v-7wlb4b.framer-1kfajd9 > :first-child { margin-left: 0px; } .framer-yf96U.framer-v-7wlb4b.framer-1kfajd9 > :last-child { margin-right: 0px; } }",
    ".framer-yf96U.framer-v-1kfajd9.hover .framer-1djj7in { bottom: -111px; height: var(--framer-aspect-ratio-supported, 254px); left: -44px; right: unset; top: unset; width: 150%; }",
    ...ct,
    '.framer-yf96U[data-border="true"]::after, .framer-yf96U [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ye = G(oa, la, "framer-yf96U"),
  Me = Ye;
Ye.displayName = "Button - Nav";
Ye.defaultProps = { height: 43, width: 169 };
B(Ye, {
  variant: {
    options: ["jtRuC2KMh", "XAfdliSj0", "UYq6nen_u"],
    optionTitles: ["Dark", "Variant 3", "Variant 4"],
    title: "Variant",
    type: d.Enum,
  },
  bUC28knVO: { title: "Hover", type: d.EventHandler },
  kwSYrqJyJ: { title: "Tap", type: d.EventHandler },
  AIYkLNyqb: {
    defaultValue: "GET IN TOUCH",
    displayTextArea: !1,
    title: "Title",
    type: d.String,
  },
  DEX53qIxg: { title: "Link", type: d.Link },
  Deo_eE5Hq: { defaultValue: !1, title: "Smooth Scroll", type: d.Boolean },
});
se(
  Ye,
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
    ...Gt,
    ...de(ft),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ma = C(we),
  sa = ["zL5Ws02uY"],
  da = "framer-vGt0i",
  fa = { zL5Ws02uY: "framer-v-w68j3f" };
var ca = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  pa = ({ value: t, children: a }) => {
    let o = ve(H),
      m = t ?? o.transition,
      p = le(() => ({ ...o, transition: m }), [JSON.stringify(m)]);
    return e(H.Provider, { value: p, children: a });
  },
  ha = i(x),
  ua = ({ height: t, id: a, title: o, width: m, ...p }) => {
    var y;
    return {
      ...p,
      EQMX6mAT1:
        (y = o ?? p.EQMX6mAT1) !== null && y !== void 0
          ? y
          : "Basic SEO Optimization",
    };
  },
  ya = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  ga = ie(function (t, a) {
    let { activeLocale: o, setLocale: m } = me(),
      {
        style: p,
        className: y,
        layoutId: g,
        variant: R,
        EQMX6mAT1: I,
        ...v
      } = ua(t),
      {
        baseVariant: n,
        classNames: j,
        gestureHandlers: E,
        gestureVariant: u,
        setGestureState: P,
        setVariant: U,
        variants: w,
      } = _e({
        cycleOrder: sa,
        defaultVariant: "zL5Ws02uY",
        variant: R,
        variantClassNames: fa,
      }),
      l = ya(t, w),
      te = b(null),
      q = oe(),
      V = [],
      z = be();
    return e(X, {
      id: g ?? q,
      children: e(ha, {
        animate: w,
        initial: !1,
        children: e(pa, {
          value: ca,
          children: c(i.div, {
            ...v,
            ...E,
            className: J(da, ...V, "framer-w68j3f", y, j),
            "data-framer-name": "Variant 1",
            layoutDependency: l,
            layoutId: "zL5Ws02uY",
            ref: a ?? te,
            style: { ...p },
            children: [
              e(i.div, {
                className: "framer-pumotj",
                layoutDependency: l,
                layoutId: "hXDvZWhHp",
                children: e(s, {
                  children: e(i.div, {
                    className: "framer-ogc5hr-container",
                    layoutDependency: l,
                    layoutId: "lzC4pJX6v-container",
                    children: e(we, {
                      color:
                        "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(232, 84, 66))",
                      height: "100%",
                      iconSearch: "House",
                      iconSelection: "CheckCircle",
                      id: "lzC4pJX6v",
                      layoutId: "lzC4pJX6v",
                      mirrored: !1,
                      selectByList: !0,
                      style: { height: "100%", width: "100%" },
                      weight: "regular",
                      width: "100%",
                    }),
                  }),
                }),
              }),
              e(_, {
                __fromCanvasComponent: !0,
                children: e(x, {
                  children: e(i.p, {
                    style: {
                      "--font-selector": "RlM7U2F0b3NoaS1yZWd1bGFy",
                      "--framer-font-family":
                        '"Satoshi", "Satoshi Placeholder", sans-serif',
                      "--framer-line-height": "1.5em",
                      "--framer-text-alignment": "left",
                      "--framer-text-color":
                        "var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))",
                    },
                    children: "Basic SEO Optimization",
                  }),
                }),
                className: "framer-1qvoy3j",
                fonts: ["FS;Satoshi-regular"],
                layoutDependency: l,
                layoutId: "kdWRK73je",
                style: {
                  "--extracted-r6o4lv":
                    "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                  "--framer-link-text-color": "rgb(0, 153, 255)",
                  "--framer-link-text-decoration": "underline",
                },
                text: I,
                verticalAlignment: "top",
                withExternalLayout: !0,
              }),
            ],
          }),
        }),
      }),
    });
  }),
  xa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-vGt0i.framer-wsapu1, .framer-vGt0i .framer-wsapu1 { display: block; }",
    ".framer-vGt0i.framer-w68j3f { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 191px; }",
    ".framer-vGt0i .framer-pumotj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 4px 0px 0px 0px; position: relative; width: 16px; }",
    ".framer-vGt0i .framer-ogc5hr-container { flex: none; height: 16px; position: relative; width: 16px; }",
    ".framer-vGt0i .framer-1qvoy3j { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vGt0i.framer-w68j3f, .framer-vGt0i .framer-pumotj { gap: 0px; } .framer-vGt0i.framer-w68j3f > *, .framer-vGt0i .framer-pumotj > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-vGt0i.framer-w68j3f > :first-child, .framer-vGt0i .framer-pumotj > :first-child { margin-left: 0px; } .framer-vGt0i.framer-w68j3f > :last-child, .framer-vGt0i .framer-pumotj > :last-child { margin-right: 0px; } }",
  ],
  He = G(ga, xa, "framer-vGt0i"),
  L = He;
He.displayName = "Pricing - Points Copy";
He.defaultProps = { height: 24, width: 191 };
B(He, {
  EQMX6mAT1: {
    defaultValue: "Basic SEO Optimization",
    displayTextArea: !1,
    title: "Title",
    type: d.String,
  },
});
se(
  He,
  [
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
      ],
    },
    ...ma,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var wa = ["xijTTPX5J", "kxd9a0niT", "aWUSrldo3", "QTwCHtY9W", "tJj2gW7vZ"],
  va = "framer-yH6WQ",
  ba = {
    aWUSrldo3: "framer-v-gc4r03",
    kxd9a0niT: "framer-v-1pa0i1v",
    QTwCHtY9W: "framer-v-abg9il",
    tJj2gW7vZ: "framer-v-qgp8tk",
    xijTTPX5J: "framer-v-m5niue",
  };
function ht(t, ...a) {
  let o = {};
  return a?.forEach((m) => m && Object.assign(o, t[m])), o;
}
var _a = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Na = ({ value: t, children: a }) => {
    let o = ve(H),
      m = t ?? o.transition,
      p = le(() => ({ ...o, transition: m }), [JSON.stringify(m)]);
    return e(H.Provider, { value: p, children: a });
  },
  ka = i(x),
  Oa = {
    "Variant 1": "xijTTPX5J",
    "Variant 2": "kxd9a0niT",
    "Variant 3": "aWUSrldo3",
    "Variant 4": "QTwCHtY9W",
    "variant 5": "tJj2gW7vZ",
  },
  Ia = ({ height: t, id: a, width: o, ...m }) => {
    var p, y;
    return {
      ...m,
      variant:
        (y = (p = Oa[m.variant]) !== null && p !== void 0 ? p : m.variant) !==
          null && y !== void 0
          ? y
          : "xijTTPX5J",
    };
  },
  ja = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Ca = ie(function (t, a) {
    let { activeLocale: o, setLocale: m } = me(),
      { style: p, className: y, layoutId: g, variant: R, ...I } = Ia(t),
      {
        baseVariant: v,
        classNames: n,
        gestureHandlers: j,
        gestureVariant: E,
        setGestureState: u,
        setVariant: P,
        variants: U,
      } = _e({
        cycleOrder: wa,
        defaultVariant: "xijTTPX5J",
        variant: R,
        variantClassNames: ba,
      }),
      w = ja(t, U),
      { activeVariantCallback: l, delay: te } = Te(v),
      q = l(async (...Y) => {
        u({ isPressed: !1 }), P("aWUSrldo3");
      }),
      V = l(async (...Y) => {
        u({ isPressed: !1 }), P("tJj2gW7vZ");
      }),
      z = l(async (...Y) => {
        P("xijTTPX5J");
      }),
      he = b(null),
      ue = () => !!["aWUSrldo3", "tJj2gW7vZ"].includes(v),
      r = () => !["kxd9a0niT", "aWUSrldo3", "tJj2gW7vZ"].includes(v),
      W = oe(),
      Q = [et],
      ye = be();
    return e(X, {
      id: g ?? W,
      children: e(ka, {
        animate: U,
        initial: !1,
        children: e(Na, {
          value: _a,
          children: c(i.div, {
            ...I,
            ...j,
            className: J(va, ...Q, "framer-m5niue", y, n),
            "data-framer-name": "Variant 1",
            layoutDependency: w,
            layoutId: "xijTTPX5J",
            ref: a ?? he,
            style: { ...p },
            ...ht(
              {
                aWUSrldo3: {
                  "data-framer-name": "Variant 3",
                  "data-highlight": !0,
                  onTap: q,
                },
                kxd9a0niT: { "data-framer-name": "Variant 2" },
                QTwCHtY9W: {
                  "data-framer-name": "Variant 4",
                  "data-highlight": !0,
                  onTap: q,
                },
                tJj2gW7vZ: {
                  "data-framer-name": "variant 5",
                  "data-highlight": !0,
                  onTap: V,
                },
              },
              v,
              E
            ),
            children: [
              ue() &&
                e(_, {
                  __fromCanvasComponent: !0,
                  children: e(x, {
                    children: e(i.h3, {
                      className: "framer-styles-preset-ravud2",
                      "data-styles-preset": "MjM7LH64L",
                      children: "                  \u20B99,999",
                    }),
                  }),
                  className: "framer-1bupoj6",
                  "data-highlight": !0,
                  fonts: ["Inter"],
                  layoutDependency: w,
                  layoutId: "LQSpJpiL5",
                  onTap: z,
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...ht(
                    {
                      tJj2gW7vZ: {
                        children: e(x, {
                          children: e(i.h3, {
                            className: "framer-styles-preset-ravud2",
                            "data-styles-preset": "MjM7LH64L",
                            children: "                  \u20B914,999",
                          }),
                        }),
                      },
                    },
                    v,
                    E
                  ),
                }),
              r() &&
                e(_, {
                  __fromCanvasComponent: !0,
                  children: e(x, {
                    children: e(i.h3, {
                      className: "framer-styles-preset-ravud2",
                      "data-styles-preset": "MjM7LH64L",
                      children: "                    \u20B95,999",
                    }),
                  }),
                  className: "framer-bv07kt",
                  "data-highlight": !0,
                  fonts: ["Inter"],
                  layoutDependency: w,
                  layoutId: "UmZaAEMog",
                  onTap: z,
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
            ],
          }),
        }),
      }),
    });
  }),
  Fa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-yH6WQ.framer-1e1mgvt, .framer-yH6WQ .framer-1e1mgvt { display: block; }",
    ".framer-yH6WQ.framer-m5niue { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 271px; }",
    ".framer-yH6WQ .framer-1bupoj6 { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 273px; word-break: break-word; word-wrap: break-word; }",
    ".framer-yH6WQ .framer-bv07kt { cursor: pointer; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-yH6WQ.framer-m5niue { gap: 0px; } .framer-yH6WQ.framer-m5niue > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-yH6WQ.framer-m5niue > :first-child { margin-left: 0px; } .framer-yH6WQ.framer-m5niue > :last-child { margin-right: 0px; } }",
    ".framer-yH6WQ.framer-v-1pa0i1v.framer-m5niue { min-height: 24px; }",
    ".framer-yH6WQ.framer-v-gc4r03.framer-m5niue, .framer-yH6WQ.framer-v-abg9il.framer-m5niue { cursor: pointer; }",
    ".framer-yH6WQ.framer-v-gc4r03 .framer-1bupoj6, .framer-yH6WQ.framer-v-qgp8tk .framer-1bupoj6 { order: 0; }",
    ".framer-yH6WQ.framer-v-qgp8tk.framer-m5niue { cursor: pointer; height: 26px; }",
    ...Zr,
  ],
  Be = G(Ca, Fa, "framer-yH6WQ"),
  er = Be;
Be.displayName = "Pricing - Amount Copy";
Be.defaultProps = { height: 26, width: 271 };
B(Be, {
  variant: {
    options: ["xijTTPX5J", "kxd9a0niT", "aWUSrldo3", "QTwCHtY9W", "tJj2gW7vZ"],
    optionTitles: [
      "Variant 1",
      "Variant 2",
      "Variant 3",
      "Variant 4",
      "variant 5",
    ],
    title: "Variant",
    type: d.Enum,
  },
});
se(
  Be,
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
    ...de(Jr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Pa = C(er),
  La = C(L),
  Sa = C(Me),
  Aa = ["F0Ee8aztf", "K2PzpG2nv", "mFPnIauR1", "Soly03lik"],
  Ta = "framer-Lhenh",
  Ra = {
    F0Ee8aztf: "framer-v-ykjqb1",
    K2PzpG2nv: "framer-v-7s1czs",
    mFPnIauR1: "framer-v-bgjbpo",
    Soly03lik: "framer-v-1b71epu",
  };
function O(t, ...a) {
  let o = {};
  return a?.forEach((m) => m && Object.assign(o, t[m])), o;
}
var Va = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Ea = ({ value: t, children: a }) => {
    let o = ve(H),
      m = t ?? o.transition,
      p = le(() => ({ ...o, transition: m }), [JSON.stringify(m)]);
    return e(H.Provider, { value: p, children: a });
  },
  Ua = i(x),
  za = {
    "Variant 1": "F0Ee8aztf",
    "Variant 2": "K2PzpG2nv",
    "Variant 3": "mFPnIauR1",
    "Variant 4": "Soly03lik",
  },
  qa = ({ height: t, id: a, tap: o, width: m, ...p }) => {
    var y, g;
    return {
      ...p,
      variant:
        (g = (y = za[p.variant]) !== null && y !== void 0 ? y : p.variant) !==
          null && g !== void 0
          ? g
          : "F0Ee8aztf",
      ySn3yyiXx: o ?? p.ySn3yyiXx,
    };
  },
  Xa = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Da = ie(function (t, a) {
    let { activeLocale: o, setLocale: m } = me(),
      {
        style: p,
        className: y,
        layoutId: g,
        variant: R,
        ySn3yyiXx: I,
        ...v
      } = qa(t),
      {
        baseVariant: n,
        classNames: j,
        gestureHandlers: E,
        gestureVariant: u,
        setGestureState: P,
        setVariant: U,
        variants: w,
      } = _e({
        cycleOrder: Aa,
        defaultVariant: "F0Ee8aztf",
        variant: R,
        variantClassNames: Ra,
      }),
      l = Xa(t, w),
      { activeVariantCallback: te, delay: q } = Te(n),
      V = te(async (...W) => {
        if (I && (await I(...W)) === !1) return !1;
      }),
      z = b(null),
      he = oe(),
      ue = [],
      r = be();
    return e(X, {
      id: g ?? he,
      children: e(Ua, {
        animate: w,
        initial: !1,
        children: e(Ea, {
          value: Va,
          children: c(i.div, {
            ...v,
            ...E,
            className: J(Ta, ...ue, "framer-ykjqb1", y, j),
            "data-framer-name": "Variant 1",
            layoutDependency: l,
            layoutId: "F0Ee8aztf",
            ref: a ?? z,
            style: { ...p },
            ...O(
              {
                K2PzpG2nv: { "data-framer-name": "Variant 2" },
                mFPnIauR1: { "data-framer-name": "Variant 3" },
                Soly03lik: { "data-framer-name": "Variant 4" },
              },
              n,
              u
            ),
            children: [
              e(i.div, {
                className: "framer-w5wrwb",
                layoutDependency: l,
                layoutId: "gKGudW44e",
              }),
              c(i.div, {
                className: "framer-141r4f9",
                layoutDependency: l,
                layoutId: "YVgNYRAyt",
                children: [
                  c(i.div, {
                    className: "framer-bcp00i",
                    layoutDependency: l,
                    layoutId: "ycqSzVDww",
                    style: {
                      backgroundColor:
                        "var(--token-16cecdcd-c5a5-4884-abaa-e0abd93e3514, rgba(255, 255, 255, 0.1))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    children: [
                      c(i.div, {
                        className: "framer-vjhh55",
                        layoutDependency: l,
                        layoutId: "wd3JSIOAo",
                        children: [
                          e(_, {
                            __fromCanvasComponent: !0,
                            children: e(x, {
                              children: e(i.h4, {
                                style: {
                                  "--font-selector":
                                    "R0Y7VW5ib3VuZGVkLXJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Unbounded", "Unbounded Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "130%",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))",
                                },
                                children: " Ecommerce Initiator Pack",
                              }),
                            }),
                            className: "framer-1eohlfm",
                            fonts: ["GF;Unbounded-regular"],
                            layoutDependency: l,
                            layoutId: "KouHWbM_r",
                            style: {
                              "--extracted-1eung3n":
                                "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-1otflg0-container",
                              layoutDependency: l,
                              layoutId: "ihmHUlu_h-container",
                              children: e(er, {
                                height: "100%",
                                id: "ihmHUlu_h",
                                layoutId: "ihmHUlu_h",
                                style: { maxHeight: "100%", width: "100%" },
                                variant: "xijTTPX5J",
                                width: "100%",
                                ...O(
                                  {
                                    K2PzpG2nv: { variant: "kxd9a0niT" },
                                    Soly03lik: { variant: "kxd9a0niT" },
                                  },
                                  n,
                                  u
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                      c(i.div, {
                        className: "framer-pd127h",
                        layoutDependency: l,
                        layoutId: "fQcwad_Bm",
                        children: [
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-1ofmcuh-container",
                              layoutDependency: l,
                              layoutId: "vDpu_1LGl-container",
                              children: e(L, {
                                EQMX6mAT1: "Full Fledeged Website",
                                height: "100%",
                                id: "vDpu_1LGl",
                                layoutId: "vDpu_1LGl",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-1og7afk-container",
                              layoutDependency: l,
                              layoutId: "ySXmlN95L-container",
                              children: e(L, {
                                EQMX6mAT1: "Payment Gateway",
                                height: "100%",
                                id: "ySXmlN95L",
                                layoutId: "ySXmlN95L",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-8xllg0-container",
                              layoutDependency: l,
                              layoutId: "nhY24JGas-container",
                              children: e(L, {
                                EQMX6mAT1: "Shipping Integration",
                                height: "100%",
                                id: "nhY24JGas",
                                layoutId: "nhY24JGas",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-2dubki-container",
                              layoutDependency: l,
                              layoutId: "qNCWTRXmD-container",
                              children: e(L, {
                                EQMX6mAT1: "Shipping Integration",
                                height: "100%",
                                id: "qNCWTRXmD",
                                layoutId: "qNCWTRXmD",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      e(s, {
                        width: `calc(max((${
                          r?.width || "100vw"
                        } - 20px) / 3, 1px) - 40px)`,
                        ...O(
                          {
                            mFPnIauR1: {
                              width: `calc(min(${
                                r?.width || "100vw"
                              }, 366px) - 40px)`,
                            },
                            Soly03lik: {
                              width: `calc(min(${
                                r?.width || "100vw"
                              }, 366px) - 40px)`,
                            },
                          },
                          n,
                          u
                        ),
                        children: e(i.div, {
                          className: "framer-1jm9bzx-container",
                          layoutDependency: l,
                          layoutId: "LpnClSSbT-container",
                          children: e(Me, {
                            AIYkLNyqb: "Get Started",
                            Deo_eE5Hq: !1,
                            DEX53qIxg:
                              "https://calendly.com/contactblustdio/30min",
                            height: "100%",
                            id: "LpnClSSbT",
                            kwSYrqJyJ: V,
                            layoutId: "LpnClSSbT",
                            style: { width: "100%" },
                            variant: "XAfdliSj0",
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
                  c(i.div, {
                    className: "framer-65a6ln",
                    "data-border": !0,
                    layoutDependency: l,
                    layoutId: "ZTKT0frSt",
                    style: {
                      "--border-bottom-width": "1px",
                      "--border-color": "rgb(34, 34, 34)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-175a2ee3-e73a-4465-a45f-78833a0f6493, rgba(13, 13, 13, 0.1))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    children: [
                      e(i.div, {
                        className: "framer-1jpvzke",
                        layoutDependency: l,
                        layoutId: "epFI8mE1c",
                        children: e(_, {
                          __fromCanvasComponent: !0,
                          children: e(x, {
                            children: e(i.h4, {
                              style: {
                                "--font-selector":
                                  "R0Y7VW5ib3VuZGVkLXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Unbounded", "Unbounded Placeholder", sans-serif',
                                "--framer-font-size": "21px",
                                "--framer-letter-spacing": "-0.02em",
                                "--framer-line-height": "130%",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-1eung3n, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))",
                              },
                              children: "Business Automation",
                            }),
                          }),
                          className: "framer-1r9xevy",
                          fonts: ["GF;Unbounded-regular"],
                          layoutDependency: l,
                          layoutId: "w3DTBcDzR",
                          style: {
                            "--extracted-1eung3n":
                              "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                      c(i.div, {
                        className: "framer-k1k3z8",
                        layoutDependency: l,
                        layoutId: "RQBrHOvP2",
                        children: [
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-1h4zcxr-container",
                              layoutDependency: l,
                              layoutId: "G3zh8iFDk-container",
                              children: e(L, {
                                EQMX6mAT1: "Efficient Onboarding",
                                height: "100%",
                                id: "G3zh8iFDk",
                                layoutId: "G3zh8iFDk",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-va0r5a-container",
                              layoutDependency: l,
                              layoutId: "HxZIIvkxa-container",
                              children: e(L, {
                                EQMX6mAT1: "Niche & Product Selection",
                                height: "100%",
                                id: "HxZIIvkxa",
                                layoutId: "HxZIIvkxa",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-1qgo4ee-container",
                              layoutDependency: l,
                              layoutId: "DvqgAj9Nn-container",
                              children: e(L, {
                                EQMX6mAT1: "High-End Manufacturing",
                                height: "100%",
                                id: "DvqgAj9Nn",
                                layoutId: "DvqgAj9Nn",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-op7ma2-container",
                              layoutDependency: l,
                              layoutId: "KlV3s25UI-container",
                              children: e(L, {
                                EQMX6mAT1: "Storage Solutions",
                                height: "100%",
                                id: "KlV3s25UI",
                                layoutId: "KlV3s25UI",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-s9d08g-container",
                              layoutDependency: l,
                              layoutId: "BjxNqueum-container",
                              children: e(L, {
                                EQMX6mAT1: "Professional Website Creation",
                                height: "100%",
                                id: "BjxNqueum",
                                layoutId: "BjxNqueum",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-apawo7-container",
                              layoutDependency: l,
                              layoutId: "WbcD1Fe5t-container",
                              children: e(L, {
                                EQMX6mAT1: "Packing & Shipping",
                                height: "100%",
                                id: "WbcD1Fe5t",
                                layoutId: "WbcD1Fe5t",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-1w0m5lh-container",
                              layoutDependency: l,
                              layoutId: "A6Qz4G89A-container",
                              children: e(L, {
                                EQMX6mAT1: "Customer Support",
                                height: "100%",
                                id: "A6Qz4G89A",
                                layoutId: "A6Qz4G89A",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-9eb5ly-container",
                              layoutDependency: l,
                              layoutId: "p3Mvgq8uq-container",
                              children: e(L, {
                                EQMX6mAT1: "Scalability",
                                height: "100%",
                                id: "p3Mvgq8uq",
                                layoutId: "p3Mvgq8uq",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      e(s, {
                        width: `calc(max((${
                          r?.width || "100vw"
                        } - 20px) / 3, 1px) - 40px)`,
                        ...O(
                          {
                            mFPnIauR1: {
                              width: `calc(min(${
                                r?.width || "100vw"
                              }, 366px) - 40px)`,
                            },
                            Soly03lik: {
                              width: `calc(min(${
                                r?.width || "100vw"
                              }, 366px) - 40px)`,
                            },
                          },
                          n,
                          u
                        ),
                        children: e(i.div, {
                          className: "framer-1d1yh5h-container",
                          layoutDependency: l,
                          layoutId: "D0mp_fTGM-container",
                          children: e(Me, {
                            AIYkLNyqb: "Get Quotation",
                            Deo_eE5Hq: !1,
                            DEX53qIxg:
                              "https://calendly.com/contactblustdio/30min",
                            height: "100%",
                            id: "D0mp_fTGM",
                            layoutId: "D0mp_fTGM",
                            style: { width: "100%" },
                            variant: "UYq6nen_u",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(i.div, {
                        className: "framer-13vnrie",
                        "data-border": !0,
                        layoutDependency: l,
                        layoutId: "yuv6_KkLs",
                        style: {
                          "--border-bottom-width": "1px",
                          "--border-color":
                            "var(--token-16cecdcd-c5a5-4884-abaa-e0abd93e3514, rgba(255, 255, 255, 0.1))",
                          "--border-left-width": "1px",
                          "--border-right-width": "1px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                          backgroundColor:
                            "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(232, 84, 66))",
                        },
                        children: e(_, {
                          __fromCanvasComponent: !0,
                          children: e(x, {
                            children: e(i.h4, {
                              style: {
                                "--font-selector":
                                  "R0Y7VW5ib3VuZGVkLXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Unbounded", "Unbounded Placeholder", sans-serif',
                                "--framer-font-size": "10px",
                                "--framer-letter-spacing": "-0.02em",
                                "--framer-line-height": "130%",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-1eung3n, var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13)))",
                              },
                              children: "Best Value",
                            }),
                          }),
                          className: "framer-xbo7o",
                          fonts: ["GF;Unbounded-regular"],
                          layoutDependency: l,
                          layoutId: "FeXjmW3po",
                          style: {
                            "--extracted-1eung3n":
                              "var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13))",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
                  c(i.div, {
                    className: "framer-p1483y",
                    "data-border": !0,
                    layoutDependency: l,
                    layoutId: "vS2K6LsB_",
                    style: {
                      "--border-bottom-width": "1px",
                      "--border-color": "rgb(110, 109, 109)",
                      "--border-left-width": "1px",
                      "--border-right-width": "1px",
                      "--border-style": "solid",
                      "--border-top-width": "1px",
                      backgroundColor:
                        "var(--token-16cecdcd-c5a5-4884-abaa-e0abd93e3514, rgba(255, 255, 255, 0.1))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    children: [
                      c(i.div, {
                        className: "framer-l172py",
                        layoutDependency: l,
                        layoutId: "mD_3NOGoF",
                        children: [
                          e(_, {
                            __fromCanvasComponent: !0,
                            children: e(x, {
                              children: e(i.h4, {
                                style: {
                                  "--font-selector":
                                    "R0Y7VW5ib3VuZGVkLXJlZ3VsYXI=",
                                  "--framer-font-family":
                                    '"Unbounded", "Unbounded Placeholder", sans-serif',
                                  "--framer-font-size": "20px",
                                  "--framer-letter-spacing": "-0.02em",
                                  "--framer-line-height": "130%",
                                  "--framer-text-alignment": "left",
                                  "--framer-text-color":
                                    "var(--extracted-1eung3n, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))",
                                },
                                children: "Ecommerce Enterprise Pack ",
                              }),
                            }),
                            className: "framer-imjj23",
                            fonts: ["GF;Unbounded-regular"],
                            layoutDependency: l,
                            layoutId: "fLASx6U6k",
                            style: {
                              "--extracted-1eung3n":
                                "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                              "--framer-link-text-color": "rgb(0, 153, 255)",
                              "--framer-link-text-decoration": "underline",
                            },
                            verticalAlignment: "top",
                            withExternalLayout: !0,
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-1we498e-container",
                              layoutDependency: l,
                              layoutId: "zPeTk8wT3-container",
                              children: e(er, {
                                height: "100%",
                                id: "zPeTk8wT3",
                                layoutId: "zPeTk8wT3",
                                style: { width: "100%" },
                                variant: "tJj2gW7vZ",
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      c(i.div, {
                        className: "framer-1ccc624",
                        layoutDependency: l,
                        layoutId: "joO1jkzTQ",
                        children: [
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-1cgbmg1-container",
                              layoutDependency: l,
                              layoutId: "AnvYgibW9-container",
                              children: e(L, {
                                EQMX6mAT1: "Ecommerce Initiator Pack",
                                height: "100%",
                                id: "AnvYgibW9",
                                layoutId: "AnvYgibW9",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-1tjyufv-container",
                              layoutDependency: l,
                              layoutId: "TdAqN5c1q-container",
                              children: e(L, {
                                EQMX6mAT1: "Branding & Advanced SEO",
                                height: "100%",
                                id: "TdAqN5c1q",
                                layoutId: "TdAqN5c1q",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-1003cd9-container",
                              layoutDependency: l,
                              layoutId: "xolurwfxv-container",
                              children: e(L, {
                                EQMX6mAT1: "Product Optimisation",
                                height: "100%",
                                id: "xolurwfxv",
                                layoutId: "xolurwfxv",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-6clae6-container",
                              layoutDependency: l,
                              layoutId: "pFrmmY1MN-container",
                              children: e(L, {
                                EQMX6mAT1: "Blogs & Articles",
                                height: "100%",
                                id: "pFrmmY1MN",
                                layoutId: "pFrmmY1MN",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(s, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...O(
                              {
                                mFPnIauR1: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                                Soly03lik: {
                                  width: `calc(min(${
                                    r?.width || "100vw"
                                  }, 366px) - 40px)`,
                                },
                              },
                              n,
                              u
                            ),
                            children: e(i.div, {
                              className: "framer-dt2ur-container",
                              layoutDependency: l,
                              layoutId: "YKE602X4V-container",
                              children: e(L, {
                                EQMX6mAT1:
                                  "24/7 Priority Email and Phone Support",
                                height: "100%",
                                id: "YKE602X4V",
                                layoutId: "YKE602X4V",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      e(s, {
                        width: `calc(max((${
                          r?.width || "100vw"
                        } - 20px) / 3, 1px) - 40px)`,
                        ...O(
                          {
                            mFPnIauR1: {
                              width: `calc(min(${
                                r?.width || "100vw"
                              }, 366px) - 40px)`,
                            },
                            Soly03lik: {
                              width: `calc(min(${
                                r?.width || "100vw"
                              }, 366px) - 40px)`,
                            },
                          },
                          n,
                          u
                        ),
                        children: e(i.div, {
                          className: "framer-1q2gd0i-container",
                          layoutDependency: l,
                          layoutId: "JWZOChMZt-container",
                          children: e(Me, {
                            AIYkLNyqb: "Get Started",
                            Deo_eE5Hq: !1,
                            DEX53qIxg:
                              "https://calendly.com/contactblustdio/30min",
                            height: "100%",
                            id: "JWZOChMZt",
                            layoutId: "JWZOChMZt",
                            style: { width: "100%" },
                            variant: "XAfdliSj0",
                            width: "100%",
                          }),
                        }),
                      }),
                      e(i.div, {
                        className: "framer-oqhkic",
                        "data-border": !0,
                        layoutDependency: l,
                        layoutId: "h5m_iyTAV",
                        style: {
                          "--border-bottom-width": "1px",
                          "--border-color":
                            "var(--token-16cecdcd-c5a5-4884-abaa-e0abd93e3514, rgba(255, 255, 255, 0.1))",
                          "--border-left-width": "1px",
                          "--border-right-width": "1px",
                          "--border-style": "solid",
                          "--border-top-width": "1px",
                          backgroundColor:
                            "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(232, 84, 66))",
                        },
                        children: e(_, {
                          __fromCanvasComponent: !0,
                          children: e(x, {
                            children: e(i.h4, {
                              style: {
                                "--font-selector":
                                  "R0Y7VW5ib3VuZGVkLXJlZ3VsYXI=",
                                "--framer-font-family":
                                  '"Unbounded", "Unbounded Placeholder", sans-serif',
                                "--framer-font-size": "10px",
                                "--framer-letter-spacing": "-0.02em",
                                "--framer-line-height": "130%",
                                "--framer-text-alignment": "left",
                                "--framer-text-color":
                                  "var(--extracted-1eung3n, var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13)))",
                              },
                              children: "Best Value",
                            }),
                          }),
                          className: "framer-1o16gbn",
                          fonts: ["GF;Unbounded-regular"],
                          layoutDependency: l,
                          layoutId: "TIuvxcj9P",
                          style: {
                            "--extracted-1eung3n":
                              "var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13))",
                            "--framer-link-text-color": "rgb(0, 153, 255)",
                            "--framer-link-text-decoration": "underline",
                          },
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Wa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-Lhenh.framer-15igmrp, .framer-Lhenh .framer-15igmrp { display: block; }",
    ".framer-Lhenh.framer-ykjqb1 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1120px; }",
    ".framer-Lhenh .framer-w5wrwb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; min-height: 30px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Lhenh .framer-141r4f9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Lhenh .framer-bcp00i { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: auto; justify-content: center; overflow: hidden; padding: 30px 20px 20px 20px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Lhenh .framer-vjhh55, .framer-Lhenh .framer-1jpvzke, .framer-Lhenh .framer-l172py { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Lhenh .framer-1eohlfm, .framer-Lhenh .framer-1r9xevy, .framer-Lhenh .framer-xbo7o, .framer-Lhenh .framer-imjj23, .framer-Lhenh .framer-1o16gbn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-Lhenh .framer-1otflg0-container { flex: none; height: auto; max-height: 150%; position: relative; width: 100%; }",
    ".framer-Lhenh .framer-pd127h, .framer-Lhenh .framer-1ccc624 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Lhenh .framer-1ofmcuh-container, .framer-Lhenh .framer-1og7afk-container, .framer-Lhenh .framer-8xllg0-container, .framer-Lhenh .framer-2dubki-container, .framer-Lhenh .framer-1jm9bzx-container, .framer-Lhenh .framer-1h4zcxr-container, .framer-Lhenh .framer-va0r5a-container, .framer-Lhenh .framer-1qgo4ee-container, .framer-Lhenh .framer-op7ma2-container, .framer-Lhenh .framer-s9d08g-container, .framer-Lhenh .framer-apawo7-container, .framer-Lhenh .framer-1w0m5lh-container, .framer-Lhenh .framer-9eb5ly-container, .framer-Lhenh .framer-1d1yh5h-container, .framer-Lhenh .framer-1we498e-container, .framer-Lhenh .framer-1cgbmg1-container, .framer-Lhenh .framer-1tjyufv-container, .framer-Lhenh .framer-1003cd9-container, .framer-Lhenh .framer-6clae6-container, .framer-Lhenh .framer-dt2ur-container, .framer-Lhenh .framer-1q2gd0i-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-Lhenh .framer-65a6ln { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 30px 20px 20px 20px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Lhenh .framer-k1k3z8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Lhenh .framer-13vnrie, .framer-Lhenh .framer-oqhkic { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 3px 10px 3px 10px; position: absolute; right: 22px; top: -4px; width: min-content; z-index: 1; }",
    ".framer-Lhenh .framer-p1483y { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: auto; justify-content: center; overflow: visible; padding: 30px 20px 20px 20px; position: relative; width: 1px; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Lhenh.framer-ykjqb1, .framer-Lhenh .framer-w5wrwb, .framer-Lhenh .framer-141r4f9, .framer-Lhenh .framer-bcp00i, .framer-Lhenh .framer-vjhh55, .framer-Lhenh .framer-pd127h, .framer-Lhenh .framer-65a6ln, .framer-Lhenh .framer-1jpvzke, .framer-Lhenh .framer-k1k3z8, .framer-Lhenh .framer-13vnrie, .framer-Lhenh .framer-p1483y, .framer-Lhenh .framer-l172py, .framer-Lhenh .framer-1ccc624, .framer-Lhenh .framer-oqhkic { gap: 0px; } .framer-Lhenh.framer-ykjqb1 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Lhenh.framer-ykjqb1 > :first-child, .framer-Lhenh .framer-w5wrwb > :first-child, .framer-Lhenh .framer-bcp00i > :first-child, .framer-Lhenh .framer-vjhh55 > :first-child, .framer-Lhenh .framer-pd127h > :first-child, .framer-Lhenh .framer-65a6ln > :first-child, .framer-Lhenh .framer-1jpvzke > :first-child, .framer-Lhenh .framer-k1k3z8 > :first-child, .framer-Lhenh .framer-p1483y > :first-child, .framer-Lhenh .framer-l172py > :first-child, .framer-Lhenh .framer-1ccc624 > :first-child { margin-top: 0px; } .framer-Lhenh.framer-ykjqb1 > :last-child, .framer-Lhenh .framer-w5wrwb > :last-child, .framer-Lhenh .framer-bcp00i > :last-child, .framer-Lhenh .framer-vjhh55 > :last-child, .framer-Lhenh .framer-pd127h > :last-child, .framer-Lhenh .framer-65a6ln > :last-child, .framer-Lhenh .framer-1jpvzke > :last-child, .framer-Lhenh .framer-k1k3z8 > :last-child, .framer-Lhenh .framer-p1483y > :last-child, .framer-Lhenh .framer-l172py > :last-child, .framer-Lhenh .framer-1ccc624 > :last-child { margin-bottom: 0px; } .framer-Lhenh .framer-w5wrwb > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-Lhenh .framer-141r4f9 > *, .framer-Lhenh .framer-13vnrie > *, .framer-Lhenh .framer-oqhkic > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Lhenh .framer-141r4f9 > :first-child, .framer-Lhenh .framer-13vnrie > :first-child, .framer-Lhenh .framer-oqhkic > :first-child { margin-left: 0px; } .framer-Lhenh .framer-141r4f9 > :last-child, .framer-Lhenh .framer-13vnrie > :last-child, .framer-Lhenh .framer-oqhkic > :last-child { margin-right: 0px; } .framer-Lhenh .framer-bcp00i > *, .framer-Lhenh .framer-65a6ln > *, .framer-Lhenh .framer-p1483y > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-Lhenh .framer-vjhh55 > *, .framer-Lhenh .framer-pd127h > *, .framer-Lhenh .framer-1jpvzke > *, .framer-Lhenh .framer-k1k3z8 > *, .framer-Lhenh .framer-l172py > *, .framer-Lhenh .framer-1ccc624 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    ".framer-Lhenh.framer-v-bgjbpo .framer-141r4f9, .framer-Lhenh.framer-v-1b71epu .framer-141r4f9 { flex-direction: column; max-width: 366px; }",
    ".framer-Lhenh.framer-v-bgjbpo .framer-bcp00i, .framer-Lhenh.framer-v-bgjbpo .framer-p1483y, .framer-Lhenh.framer-v-1b71epu .framer-bcp00i, .framer-Lhenh.framer-v-1b71epu .framer-p1483y { align-self: unset; flex: none; gap: 40px; height: min-content; width: 100%; }",
    ".framer-Lhenh.framer-v-bgjbpo .framer-pd127h, .framer-Lhenh.framer-v-bgjbpo .framer-1ccc624, .framer-Lhenh.framer-v-1b71epu .framer-pd127h, .framer-Lhenh.framer-v-1b71epu .framer-1ccc624 { flex: none; height: min-content; }",
    ".framer-Lhenh.framer-v-bgjbpo .framer-65a6ln, .framer-Lhenh.framer-v-1b71epu .framer-65a6ln { flex: none; gap: 40px; width: 100%; }",
    ".framer-Lhenh.framer-v-bgjbpo .framer-imjj23 { order: 0; }",
    ".framer-Lhenh.framer-v-bgjbpo .framer-1we498e-container { order: 1; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Lhenh.framer-v-bgjbpo .framer-141r4f9, .framer-Lhenh.framer-v-bgjbpo .framer-bcp00i, .framer-Lhenh.framer-v-bgjbpo .framer-65a6ln, .framer-Lhenh.framer-v-bgjbpo .framer-p1483y { gap: 0px; } .framer-Lhenh.framer-v-bgjbpo .framer-141r4f9 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Lhenh.framer-v-bgjbpo .framer-141r4f9 > :first-child, .framer-Lhenh.framer-v-bgjbpo .framer-bcp00i > :first-child, .framer-Lhenh.framer-v-bgjbpo .framer-65a6ln > :first-child, .framer-Lhenh.framer-v-bgjbpo .framer-p1483y > :first-child { margin-top: 0px; } .framer-Lhenh.framer-v-bgjbpo .framer-141r4f9 > :last-child, .framer-Lhenh.framer-v-bgjbpo .framer-bcp00i > :last-child, .framer-Lhenh.framer-v-bgjbpo .framer-65a6ln > :last-child, .framer-Lhenh.framer-v-bgjbpo .framer-p1483y > :last-child { margin-bottom: 0px; } .framer-Lhenh.framer-v-bgjbpo .framer-bcp00i > *, .framer-Lhenh.framer-v-bgjbpo .framer-65a6ln > *, .framer-Lhenh.framer-v-bgjbpo .framer-p1483y > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Lhenh.framer-v-1b71epu .framer-141r4f9, .framer-Lhenh.framer-v-1b71epu .framer-bcp00i, .framer-Lhenh.framer-v-1b71epu .framer-65a6ln, .framer-Lhenh.framer-v-1b71epu .framer-p1483y { gap: 0px; } .framer-Lhenh.framer-v-1b71epu .framer-141r4f9 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Lhenh.framer-v-1b71epu .framer-141r4f9 > :first-child, .framer-Lhenh.framer-v-1b71epu .framer-bcp00i > :first-child, .framer-Lhenh.framer-v-1b71epu .framer-65a6ln > :first-child, .framer-Lhenh.framer-v-1b71epu .framer-p1483y > :first-child { margin-top: 0px; } .framer-Lhenh.framer-v-1b71epu .framer-141r4f9 > :last-child, .framer-Lhenh.framer-v-1b71epu .framer-bcp00i > :last-child, .framer-Lhenh.framer-v-1b71epu .framer-65a6ln > :last-child, .framer-Lhenh.framer-v-1b71epu .framer-p1483y > :last-child { margin-bottom: 0px; } .framer-Lhenh.framer-v-1b71epu .framer-bcp00i > *, .framer-Lhenh.framer-v-1b71epu .framer-65a6ln > *, .framer-Lhenh.framer-v-1b71epu .framer-p1483y > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",
    '.framer-Lhenh[data-border="true"]::after, .framer-Lhenh [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ge = G(Da, Wa, "framer-Lhenh"),
  kr = Ge;
Ge.displayName = "Pricing Copy";
Ge.defaultProps = { height: 472, width: 1120 };
B(Ge, {
  variant: {
    options: ["F0Ee8aztf", "K2PzpG2nv", "mFPnIauR1", "Soly03lik"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4"],
    title: "Variant",
    type: d.Enum,
  },
  ySn3yyiXx: { title: "Tap", type: d.EventHandler },
});
se(
  Ge,
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
    ...Pa,
    ...La,
    ...Sa,
  ],
  { supportsExplicitInterCodegen: !0 }
);
Re.loadFonts(["GF;Unbounded-regular", "GF;Unbounded-700"]);
var ut = [
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
  yt = [
    '.framer-ZYyw9 .framer-styles-preset-39le6:not(.rich-text-wrapper), .framer-ZYyw9 .framer-styles-preset-39le6.rich-text-wrapper p { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-ZYyw9 .framer-styles-preset-39le6:not(.rich-text-wrapper), .framer-ZYyw9 .framer-styles-preset-39le6.rich-text-wrapper p { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-ZYyw9 .framer-styles-preset-39le6:not(.rich-text-wrapper), .framer-ZYyw9 .framer-styles-preset-39le6.rich-text-wrapper p { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.02em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
  ],
  gt = "framer-ZYyw9";
Re.loadFonts(["GF;Unbounded-regular", "GF;Unbounded-700"]);
var xt = [
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
  wt = [
    '.framer-4PwVY .framer-styles-preset-m5rh52:not(.rich-text-wrapper), .framer-4PwVY .framer-styles-preset-m5rh52.rich-text-wrapper h1 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 70px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -3px; --framer-line-height: 0.9em; --framer-paragraph-spacing: 1px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-4PwVY .framer-styles-preset-m5rh52:not(.rich-text-wrapper), .framer-4PwVY .framer-styles-preset-m5rh52.rich-text-wrapper h1 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 52px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -3px; --framer-line-height: 0.9em; --framer-paragraph-spacing: 1px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-4PwVY .framer-styles-preset-m5rh52:not(.rich-text-wrapper), .framer-4PwVY .framer-styles-preset-m5rh52.rich-text-wrapper h1 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -3px; --framer-line-height: 1em; --framer-paragraph-spacing: 1px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  vt = "framer-4PwVY";
var Ha = C(pr),
  Ba = C(yr),
  Ga = C(We),
  Or = Xe(i.div),
  Qa = C(Ee),
  Ka = C(we),
  $a = C(br),
  Ja = Xe(De),
  Za = C(Ve),
  en = C(Fe),
  A = Xe(S),
  rr = Xe(i.section),
  rn = C(kr),
  tn = C(D),
  an = C(ur),
  nn = C(gr),
  on = C(hr);
var ln = {
    OwNhynIYY: "(min-width: 1200px)",
    P7j2A2OCI: "(max-width: 809px)",
    WgNeKo_y1: "(min-width: 810px) and (max-width: 1199px)",
  },
  bt = () => typeof document < "u",
  _t = "framer-yOmNs",
  mn = {
    OwNhynIYY: "framer-v-hvzz3m",
    P7j2A2OCI: "framer-v-1zvqox",
    WgNeKo_y1: "framer-v-1b4lfhe",
  },
  sn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -100,
  },
  Ot = { damping: 85, delay: 0.4, mass: 1, stiffness: 212, type: "spring" },
  dn = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ot,
    x: 0,
    y: -100,
  },
  Qe = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 170,
  },
  Ue = { damping: 85, delay: 0.2, mass: 1, stiffness: 212, type: "spring" },
  Ke = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ue,
    x: 0,
    y: 170,
  },
  Pe = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 32,
  },
  Le = { damping: 30, delay: 0, mass: 1, stiffness: 118, type: "spring" },
  fn = {
    opacity: 1,
    rotate: 20,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -90,
  },
  It = { damping: 40, delay: 0.3, mass: 0.1, stiffness: 232, type: "spring" },
  cn = {
    opacity: 1,
    rotate: 20,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: It,
    x: 0,
    y: -90,
  },
  Z = { bounceDamping: 30, bounceStiffness: 400, delay: 0, type: "inertia" },
  ee = (t) => t.preventDefault(),
  re = { cursor: "grabbing" },
  Nt = (t, a) => `translateX(-50%) ${a}`,
  pn = {
    opacity: 1,
    rotate: 40,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -90,
  },
  jt = { damping: 40, delay: 0.3, mass: 4.7, stiffness: 232, type: "spring" },
  hn = {
    opacity: 1,
    rotate: 40,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: jt,
    x: 0,
    y: -90,
  },
  kt = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -100,
  },
  Ct = { damping: 40, delay: 0.3, mass: 4.1, stiffness: 232, type: "spring" },
  un = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Ct,
    x: 0,
    y: -100,
  },
  T = { damping: 40, delay: 0.3, mass: 10, stiffness: 232, type: "spring" },
  yn = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: T,
    x: 0,
    y: -100,
  },
  gn = {
    opacity: 1,
    rotate: 50,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -120,
  },
  xn = {
    opacity: 1,
    rotate: 50,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: T,
    x: 0,
    y: -120,
  },
  wn = {
    opacity: 1,
    rotate: -17,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -132,
  },
  vn = {
    opacity: 1,
    rotate: -17,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: T,
    x: 0,
    y: -132,
  },
  bn = {
    opacity: 1,
    rotate: 40,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -130,
  },
  _n = {
    opacity: 1,
    rotate: 40,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: T,
    x: 0,
    y: -130,
  },
  Nn = {
    opacity: 1,
    rotate: 24,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -140,
  },
  kn = {
    opacity: 1,
    rotate: 24,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: T,
    x: 0,
    y: -140,
  },
  On = {
    opacity: 1,
    rotate: 18,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -150,
  },
  In = {
    opacity: 1,
    rotate: 18,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: T,
    x: 0,
    y: -150,
  },
  jn = {
    opacity: 1,
    rotate: -33,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -110,
  },
  Cn = {
    opacity: 1,
    rotate: -33,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: T,
    x: 0,
    y: -110,
  },
  Fn = {
    opacity: 1,
    rotate: -10,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: -120,
  },
  Pn = {
    opacity: 1,
    rotate: -10,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: T,
    x: 0,
    y: -120,
  },
  Ir = xr(),
  Ln = { "Desktop-Wide": "OwNhynIYY", Phone: "P7j2A2OCI", Tablet: "WgNeKo_y1" },
  Sn = ({ height: t, id: a, width: o, ...m }) => {
    var p, y;
    return {
      ...m,
      variant:
        (y = (p = Ln[m.variant]) !== null && p !== void 0 ? p : m.variant) !==
          null && y !== void 0
          ? y
          : "OwNhynIYY",
    };
  },
  An = ie(function (t, a) {
    let { activeLocale: o, setLocale: m } = me(),
      {
        style: p,
        className: y,
        layoutId: g,
        variant: R,
        qGMvZtB2D: I,
        ...v
      } = Sn(t);
    Tr(() => {
      let h = xr(void 0, o);
      if (((document.title = h.title || ""), h.viewport)) {
        var ae;
        (ae = document.querySelector('meta[name="viewport"]')) === null ||
          ae === void 0 ||
          ae.setAttribute("content", h.viewport);
      }
      if (h.robots) {
        let F = document.querySelector('meta[name="robots"]');
        F
          ? F.setAttribute("content", h.robots)
          : ((F = document.createElement("meta")),
            F.setAttribute("name", "robots"),
            F.setAttribute("content", h.robots),
            document.head.appendChild(F));
      }
      if (h.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((F) => F.startsWith("framer-body-"))
            .map((F) => document.body.classList.remove(F)),
          document.body.classList.add(`${h.bodyClassName}-framer-yOmNs`),
          () => {
            document.body.classList.remove(`${h.bodyClassName}-framer-yOmNs`);
          }
        );
    }, [void 0, o]);
    let [n, j] = Hr(R, ln, !1),
      E = void 0,
      u = b(null),
      P = Ce("jGFDk87Dh"),
      U = b(null),
      w = Ce("MERXQpASN"),
      l = b(null),
      te = Ce("ffQKfJ0Kx"),
      q = b(null),
      V = Ce("Usy9pnRtq"),
      z = b(null),
      he = Dr(),
      ue = () => !!(!bt() || ["WgNeKo_y1", "P7j2A2OCI"].includes(n)),
      r = () => (bt() ? n !== "P7j2A2OCI" : !0),
      W = Ce("UaACQKPhS"),
      Q = b(null),
      ye = Ce("om1250aoL"),
      Y = b(null),
      ze = oe(),
      K = [vt, at, ot, gt, $r];
    return (
      Wr({}),
      e(Yr.Provider, {
        value: { primaryVariantId: "OwNhynIYY", variantClassNames: mn },
        children: c(X, {
          id: g ?? ze,
          children: [
            c(i.div, {
              ...v,
              className: J(_t, ...K, "framer-hvzz3m", y),
              ref: a ?? u,
              style: { ...p },
              children: [
                c("div", {
                  className: "framer-123wqig",
                  "data-framer-name": "Background",
                  name: "Background",
                  children: [
                    e(i.div, {
                      className: "framer-1bsjpkg",
                      "data-framer-name": "Overlay",
                      name: "Overlay",
                      style: { transformPerspective: 1200 },
                    }),
                    e(s, {
                      children: e(S, {
                        className: "framer-ne3cqe-container",
                        layoutScroll: !0,
                        children: e(pr, {
                          back: "var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0))",
                          diagonal: !0,
                          direction: "left",
                          duration: 5,
                          front: "rgb(23, 23, 23)",
                          height: "100%",
                          id: "uJPrb4EIT",
                          layoutId: "uJPrb4EIT",
                          patternType: "groovy",
                          radius: 0,
                          scale: 54,
                          shouldAnimate: !1,
                          style: { height: "100%", width: "100%" },
                          width: "100%",
                        }),
                      }),
                    }),
                  ],
                }),
                e(s, {
                  width: "100vw",
                  children: e(S, {
                    className: "framer-icz1s2-container",
                    layoutScroll: !0,
                    children: e(f, {
                      breakpoint: n,
                      overrides: {
                        P7j2A2OCI: { variant: "qckzdw_18" },
                        WgNeKo_y1: { variant: "qckzdw_18" },
                      },
                      children: e(yr, {
                        gGSU0bs4G: "jcV_yFltq",
                        height: "100%",
                        id: "qucQ2rL9C",
                        layoutId: "qucQ2rL9C",
                        style: { width: "100%" },
                        variant: "lzTpoNZtf",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                c("main", {
                  className: "framer-1ma85oo",
                  "data-framer-name": "Main",
                  name: "Main",
                  children: [
                    c("section", {
                      className: "framer-j1yqbq",
                      "data-framer-name": "Hero",
                      name: "Hero",
                      children: [
                        c(Or, {
                          __framer__animate: { transition: Ot },
                          __framer__animateOnce: !0,
                          __framer__enter: sn,
                          __framer__exit: dn,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-j4z2v",
                          "data-framer-name": "Hero Heading Content",
                          name: "Hero Heading Content",
                          style: { transformPerspective: 1200 },
                          children: [
                            c("div", {
                              className: "framer-4w8l5h",
                              "data-framer-name": "Heading & Subheading",
                              name: "Heading & Subheading",
                              children: [
                                c("div", {
                                  className: "framer-fo77gx",
                                  children: [
                                    e(_, {
                                      __fromCanvasComponent: !0,
                                      children: e(x, {
                                        children: e("h1", {
                                          className:
                                            "framer-styles-preset-m5rh52",
                                          "data-styles-preset": "hwFxtQiSW",
                                          style: {
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "var(--token-eea41e84-741c-4ad1-8fa4-d13594d15041, rgb(82, 113, 255))",
                                          },
                                          children: "Transforming",
                                        }),
                                      }),
                                      className: "framer-jbkn8z",
                                      fonts: ["Inter"],
                                      id: P,
                                      ref: U,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    e(i.div, {
                                      className: "framer-r4ysuh",
                                      style: { rotate: 3 },
                                      children: e(_, {
                                        __fromCanvasComponent: !0,
                                        children: e(x, {
                                          children: e("h1", {
                                            className:
                                              "framer-styles-preset-m5rh52",
                                            "data-styles-preset": "hwFxtQiSW",
                                            style: {
                                              "--framer-text-alignment":
                                                "center",
                                              "--framer-text-color":
                                                "var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10))",
                                            },
                                            children: "Ideas",
                                          }),
                                        }),
                                        className: "framer-n2iyub",
                                        fonts: ["Inter"],
                                        id: w,
                                        ref: l,
                                        style: { rotate: -3 },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    e(_, {
                                      __fromCanvasComponent: !0,
                                      children: e(x, {
                                        children: e("h1", {
                                          className:
                                            "framer-styles-preset-m5rh52",
                                          "data-styles-preset": "hwFxtQiSW",
                                          style: {
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "var(--token-eea41e84-741c-4ad1-8fa4-d13594d15041, rgb(82, 113, 255))",
                                          },
                                          children: "into Online",
                                        }),
                                      }),
                                      className: "framer-1ty6ljs",
                                      fonts: ["Inter"],
                                      id: te,
                                      ref: q,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    e("div", {
                                      className: "framer-1dzy20o",
                                      children: e(De, {
                                        background: {
                                          alt: "",
                                          fit: "fit",
                                          intrinsicHeight: 512,
                                          intrinsicWidth: 512,
                                          pixelHeight: 512,
                                          pixelWidth: 512,
                                          positionX: "center",
                                          positionY: "center",
                                          src: "./images/b4IW2nPWxHJ6UTAoq3A4u5d56ps.png",
                                        },
                                        className: "framer-1h8vqsn",
                                        style: { rotate: -16 },
                                      }),
                                    }),
                                    e(_, {
                                      __fromCanvasComponent: !0,
                                      children: e(x, {
                                        children: e("h1", {
                                          className:
                                            "framer-styles-preset-m5rh52",
                                          "data-styles-preset": "hwFxtQiSW",
                                          style: {
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color":
                                              "var(--token-eea41e84-741c-4ad1-8fa4-d13594d15041, rgb(82, 113, 255))",
                                          },
                                          children: "Success.",
                                        }),
                                      }),
                                      className: "framer-harf3f",
                                      fonts: ["Inter"],
                                      id: V,
                                      ref: z,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                e(_, {
                                  __fromCanvasComponent: !0,
                                  children: e(x, {
                                    children: e("p", {
                                      className: "framer-styles-preset-smtg16",
                                      "data-styles-preset": "DuMLJ2VUN",
                                      style: {
                                        "--framer-text-alignment": "center",
                                        "--framer-text-color":
                                          "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                                      },
                                      children:
                                        "Blu excels in turning your business ideas into successful online ventures. From e-commerce setups and print-on-demand to advanced SEO and product ads, we provide the expertise you need to propel your business to new heights.",
                                    }),
                                  }),
                                  className: "framer-1c0jjav",
                                  fonts: ["Inter"],
                                  verticalAlignment: "top",
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            e(xe, {
                              links: [
                                {
                                  href: { webPageId: "zVFenjhZ4" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "zVFenjhZ4" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "zVFenjhZ4" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (h) =>
                                e(s, {
                                  children: e(S, {
                                    className: "framer-99gncu-container",
                                    children: e(f, {
                                      breakpoint: n,
                                      overrides: {
                                        P7j2A2OCI: {
                                          DEX53qIxg: h[2],
                                          variant: "YVt9h3DM_",
                                        },
                                        WgNeKo_y1: { DEX53qIxg: h[1] },
                                      },
                                      children: e(We, {
                                        AIYkLNyqb: "Discover Blu",
                                        DEX53qIxg: h[0],
                                        height: "100%",
                                        id: "IGPZxk8oZ",
                                        layoutId: "IGPZxk8oZ",
                                        variant: "VYn33lVMS",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                        e("div", {
                          className: "framer-1urq87d",
                          "data-framer-name": "Background Gradient",
                          name: "Background Gradient",
                        }),
                        c(Ja, {
                          __framer__animate: { transition: Ue },
                          __framer__animateOnce: !0,
                          __framer__enter: Qe,
                          __framer__exit: Ke,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          background: {
                            alt: "",
                            fit: "fit",
                            intrinsicHeight: 931,
                            intrinsicWidth: 1500,
                            pixelHeight: 931,
                            pixelWidth: 1500,
                            positionX: "center",
                            positionY: "center",
                            sizes: "100vw",
                            src: "./images/tVDg230sxN3guk1uVhxlFkIu1s.png",
                            srcSet:
                              "./images/tVDg230sxN3guk1uVhxlFkIu1s.png?scale-down-to=512 512w,./images/tVDg230sxN3guk1uVhxlFkIu1s.png?scale-down-to=1024 1024w,./images/tVDg230sxN3guk1uVhxlFkIu1s.png 1500w",
                          },
                          className: "framer-1sk6zfr",
                          "data-framer-name": "Image",
                          name: "Image",
                          style: { transformPerspective: 1200 },
                          children: [
                            e("div", {
                              className: "framer-m94qqz",
                              "data-framer-name": "Gradient Overlay",
                              name: "Gradient Overlay",
                            }),
                            e(s, {
                              children: e(S, {
                                className: "framer-1d4gaqj-container",
                                children: e(Ee, {
                                  alignment: "center",
                                  direction: "left",
                                  fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !1,
                                    fadeInset: 0,
                                    fadeWidth: 25,
                                    overflow: !1,
                                  },
                                  gap: 50,
                                  height: "100%",
                                  hoverFactor: 1,
                                  id: "EzdrIZE62",
                                  layoutId: "EzdrIZE62",
                                  padding: 10,
                                  paddingBottom: 10,
                                  paddingLeft: 10,
                                  paddingPerSide: !1,
                                  paddingRight: 10,
                                  paddingTop: 10,
                                  sizingOptions: {
                                    heightType: !0,
                                    widthType: !0,
                                  },
                                  slots: [
                                    e(i.div, { className: "framer-1gfdqz2" }),
                                  ],
                                  speed: 100,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                            ue() &&
                              c(i.div, {
                                className: "framer-13d90j0 hidden-hvzz3m",
                                children: [
                                  e("div", {
                                    className: "framer-yfckd4",
                                    "data-framer-name": "Play Icon Wrapper",
                                    name: "Play Icon Wrapper",
                                    children: e(s, {
                                      children: e(S, {
                                        className: "framer-h255qi-container",
                                        children: e(f, {
                                          breakpoint: n,
                                          overrides: {
                                            P7j2A2OCI: {
                                              color:
                                                "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(245, 131, 39))",
                                            },
                                          },
                                          children: e(we, {
                                            color:
                                              "var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10))",
                                            height: "100%",
                                            iconSearch: "House",
                                            iconSelection: "Play",
                                            id: "mH7O1E2rfc3kWHksXj",
                                            layoutId: "mH7O1E2rfc3kWHksXj",
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: {
                                              height: "100%",
                                              width: "100%",
                                            },
                                            weight: "fill",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  r() &&
                                    e(s, {
                                      children: e(S, {
                                        className:
                                          "framer-1ql1gnv-container hidden-1zvqox",
                                        children: e(br, {
                                          alignmentBaseline: "bottom",
                                          animate: !1,
                                          animateDuration: 5,
                                          animateEnd: 150,
                                          animateStart: -50,
                                          color:
                                            "var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13))",
                                          cylinderHeight: 0,
                                          flip: !1,
                                          font: {},
                                          height: "100%",
                                          id: "mH7O1E2rfs2xcmZeZp",
                                          layoutId: "mH7O1E2rfs2xcmZeZp",
                                          rotate: !0,
                                          rotateSpeed: 5,
                                          slots: [],
                                          startOffset: 0,
                                          style: {
                                            height: "100%",
                                            width: "100%",
                                          },
                                          text: "\u2726 PLAY VIDEO \u2726 KNOW ABOUT US \u2726 AGENCEE",
                                          type: "circle",
                                          width: "100%",
                                          wordSpacing: 4,
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                    e(f, {
                      breakpoint: n,
                      overrides: {
                        P7j2A2OCI: {
                          __framer__styleAppearEffectEnabled: void 0,
                          style: {},
                        },
                      },
                      children: e(rr, {
                        __framer__animate: { transition: Ue },
                        __framer__animateOnce: !0,
                        __framer__enter: Qe,
                        __framer__exit: Ke,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-skvjh4",
                        "data-framer-name": "Services",
                        name: "Services",
                        style: { transformPerspective: 1200 },
                        children: c("div", {
                          className: "framer-1u76kmz",
                          "data-framer-name": "Container",
                          name: "Container",
                          children: [
                            c("div", {
                              className: "framer-171tl",
                              "data-framer-name": "Heading Content Wrapper",
                              name: "Heading Content Wrapper",
                              children: [
                                e(f, {
                                  breakpoint: n,
                                  overrides: {
                                    P7j2A2OCI: {
                                      width:
                                        "min(max(100vw - 24px, 1px), 1440px)",
                                    },
                                  },
                                  children: e(s, {
                                    width:
                                      "min(max(100vw - 80px, 1px), 1440px)",
                                    children: e(S, {
                                      className: "framer-1xi7suj-container",
                                      children: e(f, {
                                        breakpoint: n,
                                        overrides: {
                                          P7j2A2OCI: {
                                            style: { width: "100%" },
                                            variant: "KJ1G3Id0e",
                                          },
                                          WgNeKo_y1: { variant: "lLa5v4PpE" },
                                        },
                                        children: e(Ve, {
                                          ExBt4bIY2: "What we are offering",
                                          GqTmcaQLx: "Services",
                                          height: "100%",
                                          id: "mS9piqvch",
                                          kAHPdHlCh:
                                            "Our top-notch digital marketing agency not only delivers impressive results but also dazzles our clients with remarkable statistics. We pride ourselves on our ability to amaze customers with tangible outcomes and eye-catching figures.",
                                          layoutId: "mS9piqvch",
                                          NlGfzfEF2: !0,
                                          p1KubWiKz: !1,
                                          style: {
                                            maxWidth: "100%",
                                            width: "100%",
                                          },
                                          variant: "u4P6wTRAk",
                                          width: "100%",
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                                e(xe, {
                                  links: [
                                    {
                                      href: { webPageId: "I048UAEvC" },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: "I048UAEvC" },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: "I048UAEvC" },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (h) =>
                                    e(s, {
                                      children: e(S, {
                                        className: "framer-lajn5l-container",
                                        children: e(f, {
                                          breakpoint: n,
                                          overrides: {
                                            P7j2A2OCI: {
                                              DEX53qIxg: h[2],
                                              variant: "YVt9h3DM_",
                                            },
                                            WgNeKo_y1: { DEX53qIxg: h[1] },
                                          },
                                          children: e(We, {
                                            AIYkLNyqb: "View All Services",
                                            DEX53qIxg: h[0],
                                            height: "100%",
                                            id: "D8ZrHgbie",
                                            layoutId: "D8ZrHgbie",
                                            variant: "VYn33lVMS",
                                            width: "100%",
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              ],
                            }),
                            e("div", {
                              className: "framer-py75l2",
                              "data-framer-name": "Services Wrapper",
                              name: "Services Wrapper",
                              children: c("div", {
                                className: "framer-s3790c",
                                children: [
                                  e(xe, {
                                    links: [
                                      {
                                        href: { webPageId: "BadAnFeJz" },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: "BadAnFeJz" },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: "BadAnFeJz" },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (h) =>
                                      e(f, {
                                        breakpoint: n,
                                        overrides: {
                                          P7j2A2OCI: {
                                            width:
                                              "min(max(100vw - 24px, 1px), 1440px)",
                                          },
                                          WgNeKo_y1: {
                                            width:
                                              "max((max(100vw - 80px, 1px) - 10px) / 2, 200px)",
                                          },
                                        },
                                        children: e(s, {
                                          width:
                                            "max((min(max(100vw - 80px, 1px), 1440px) - 10px) / 2, 200px)",
                                          children: e(f, {
                                            breakpoint: n,
                                            overrides: {
                                              P7j2A2OCI: {
                                                __framer__styleAppearEffectEnabled:
                                                  void 0,
                                                style: {},
                                              },
                                            },
                                            children: e(A, {
                                              __framer__animate: {
                                                transition: Le,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Pe,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className:
                                                "framer-mrpq24-container",
                                              style: {
                                                transformPerspective: 1200,
                                              },
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    ocFxhgdq4: h[2],
                                                    style: {
                                                      height: "100%",
                                                      width: "100%",
                                                    },
                                                  },
                                                  WgNeKo_y1: {
                                                    ocFxhgdq4: h[1],
                                                  },
                                                },
                                                children: e(Fe, {
                                                  height: "100%",
                                                  id: "mz1tkgmqQ",
                                                  iNyObSHzV:
                                                    "Our E-Commerce services are tailored for startups and growing businesses. The E-Commerce Initiator Pack provides essential tools to establish an online presence, including a full-fledged website, payment gateway, shipping integration, pixel integration, and email support & chatbot. The E-Commerce Enterprise Pack adds branding, product optimization, SEO, and blog & article services for a comprehensive online business solution.",
                                                  layoutId: "mz1tkgmqQ",
                                                  lxVLvSShs: "Browser",
                                                  ocFxhgdq4: h[0],
                                                  p1QdeJ3VD: !0,
                                                  style: { width: "100%" },
                                                  variant: "tICj7eCix",
                                                  width: "100%",
                                                  x6gTlITKM: "E-Commerce",
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  e(xe, {
                                    links: [
                                      {
                                        href: { webPageId: "TYlK941Z4" },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: "TYlK941Z4" },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: "TYlK941Z4" },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (h) =>
                                      e(f, {
                                        breakpoint: n,
                                        overrides: {
                                          P7j2A2OCI: {
                                            width:
                                              "min(max(100vw - 24px, 1px), 1440px)",
                                          },
                                          WgNeKo_y1: {
                                            width:
                                              "max((max(100vw - 80px, 1px) - 10px) / 2, 200px)",
                                          },
                                        },
                                        children: e(s, {
                                          width:
                                            "max((min(max(100vw - 80px, 1px), 1440px) - 10px) / 2, 200px)",
                                          children: e(f, {
                                            breakpoint: n,
                                            overrides: {
                                              P7j2A2OCI: {
                                                __framer__styleAppearEffectEnabled:
                                                  void 0,
                                                style: {},
                                              },
                                            },
                                            children: e(A, {
                                              __framer__animate: {
                                                transition: Le,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Pe,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className:
                                                "framer-w8x50v-container",
                                              style: {
                                                transformPerspective: 1200,
                                              },
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    ocFxhgdq4: h[2],
                                                    style: {
                                                      height: "100%",
                                                      width: "100%",
                                                    },
                                                  },
                                                  WgNeKo_y1: {
                                                    ocFxhgdq4: h[1],
                                                  },
                                                },
                                                children: e(Fe, {
                                                  height: "100%",
                                                  id: "MRzPkaxzY",
                                                  iNyObSHzV:
                                                    "Our Marketing & Awareness services boost online visibility and engagement. We offer SEO and Local SEO to improve search rankings, and Facebook & Instagram Marketing with influencer collaborations and guaranteed ROAS, ensuring effective reach and customer acquisition.",
                                                  layoutId: "MRzPkaxzY",
                                                  lxVLvSShs: "ImagesSquare",
                                                  ocFxhgdq4: h[0],
                                                  p1QdeJ3VD: !0,
                                                  style: { width: "100%" },
                                                  variant: "tICj7eCix",
                                                  width: "100%",
                                                  x6gTlITKM:
                                                    "Marketing & Awareness ",
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  e(xe, {
                                    links: [
                                      {
                                        href: { webPageId: "ZcJwE98sm" },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: "ZcJwE98sm" },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: "ZcJwE98sm" },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (h) =>
                                      e(f, {
                                        breakpoint: n,
                                        overrides: {
                                          P7j2A2OCI: {
                                            width:
                                              "min(max(100vw - 24px, 1px), 1440px)",
                                          },
                                          WgNeKo_y1: {
                                            width:
                                              "max((max(100vw - 80px, 1px) - 10px) / 2, 200px)",
                                          },
                                        },
                                        children: e(s, {
                                          width:
                                            "max((min(max(100vw - 80px, 1px), 1440px) - 10px) / 2, 200px)",
                                          children: e(f, {
                                            breakpoint: n,
                                            overrides: {
                                              P7j2A2OCI: {
                                                __framer__styleAppearEffectEnabled:
                                                  void 0,
                                                style: {},
                                              },
                                            },
                                            children: e(A, {
                                              __framer__animate: {
                                                transition: Le,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Pe,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className:
                                                "framer-1txw3k5-container",
                                              style: {
                                                transformPerspective: 1200,
                                              },
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    ocFxhgdq4: h[2],
                                                    style: {
                                                      height: "100%",
                                                      width: "100%",
                                                    },
                                                  },
                                                  WgNeKo_y1: {
                                                    ocFxhgdq4: h[1],
                                                  },
                                                },
                                                children: e(Fe, {
                                                  height: "100%",
                                                  id: "TdcFdr6Mw",
                                                  iNyObSHzV:
                                                    "Automate your business from the comfort of your home. We cover every aspect, ensuring your path to success is smooth and hassle-free. From initial setup to daily operations, we handle it all, so you can focus on what matters most.",
                                                  layoutId: "TdcFdr6Mw",
                                                  lxVLvSShs: "Brain",
                                                  ocFxhgdq4: h[0],
                                                  p1QdeJ3VD: !0,
                                                  style: { width: "100%" },
                                                  variant: "tICj7eCix",
                                                  width: "100%",
                                                  x6gTlITKM:
                                                    "Business Automation",
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  e(xe, {
                                    links: [
                                      {
                                        href: { webPageId: "wMBI5eR7Q" },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: "wMBI5eR7Q" },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: "wMBI5eR7Q" },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (h) =>
                                      e(f, {
                                        breakpoint: n,
                                        overrides: {
                                          P7j2A2OCI: {
                                            width:
                                              "min(max(100vw - 24px, 1px), 1440px)",
                                          },
                                          WgNeKo_y1: {
                                            width:
                                              "max((max(100vw - 80px, 1px) - 10px) / 2, 200px)",
                                          },
                                        },
                                        children: e(s, {
                                          width:
                                            "max((min(max(100vw - 80px, 1px), 1440px) - 10px) / 2, 200px)",
                                          children: e(f, {
                                            breakpoint: n,
                                            overrides: {
                                              P7j2A2OCI: {
                                                __framer__styleAppearEffectEnabled:
                                                  void 0,
                                                style: {},
                                              },
                                            },
                                            children: e(A, {
                                              __framer__animate: {
                                                transition: Le,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Pe,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className:
                                                "framer-p1yvjz-container",
                                              style: {
                                                transformPerspective: 1200,
                                              },
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    ocFxhgdq4: h[2],
                                                    style: {
                                                      height: "100%",
                                                      width: "100%",
                                                    },
                                                  },
                                                  WgNeKo_y1: {
                                                    ocFxhgdq4: h[1],
                                                  },
                                                },
                                                children: e(Fe, {
                                                  height: "100%",
                                                  id: "yMegrk7bW",
                                                  iNyObSHzV:
                                                    "Our Branding & Creatives services help you develop a strong brand identity. This includes logo design, brand guidelines, font & color palettes, packaging & accessories designs, and crafting a compelling brand story to make your business stand out.",
                                                  layoutId: "yMegrk7bW",
                                                  lxVLvSShs: "Article",
                                                  ocFxhgdq4: h[0],
                                                  p1QdeJ3VD: !0,
                                                  style: { width: "100%" },
                                                  variant: "tICj7eCix",
                                                  width: "100%",
                                                  x6gTlITKM:
                                                    "Branding & Creatives",
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  e(xe, {
                                    links: [
                                      {
                                        href: { webPageId: "jVd3nMdBR" },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: "jVd3nMdBR" },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: "jVd3nMdBR" },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (h) =>
                                      e(f, {
                                        breakpoint: n,
                                        overrides: {
                                          P7j2A2OCI: {
                                            width:
                                              "min(max(100vw - 24px, 1px), 1440px)",
                                          },
                                          WgNeKo_y1: {
                                            width:
                                              "max((max(100vw - 80px, 1px) - 10px) / 2, 200px)",
                                          },
                                        },
                                        children: e(s, {
                                          width:
                                            "max((min(max(100vw - 80px, 1px), 1440px) - 10px) / 2, 200px)",
                                          children: e(f, {
                                            breakpoint: n,
                                            overrides: {
                                              P7j2A2OCI: {
                                                __framer__styleAppearEffectEnabled:
                                                  void 0,
                                                style: {},
                                              },
                                            },
                                            children: e(A, {
                                              __framer__animate: {
                                                transition: Le,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Pe,
                                              __framer__styleAppearEffectEnabled:
                                                !0,
                                              __framer__threshold: 0.5,
                                              __perspectiveFX: !1,
                                              __targetOpacity: 1,
                                              className:
                                                "framer-fibh1m-container",
                                              style: {
                                                transformPerspective: 1200,
                                              },
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    ocFxhgdq4: h[2],
                                                    style: {
                                                      height: "100%",
                                                      width: "100%",
                                                    },
                                                  },
                                                  WgNeKo_y1: {
                                                    ocFxhgdq4: h[1],
                                                  },
                                                },
                                                children: e(Fe, {
                                                  height: "100%",
                                                  id: "Jtuw1YSuY",
                                                  iNyObSHzV:
                                                    "Enhance your brand's presence on Instagram with our Instagram Growth Pack. Designed to boost engagement and visibility, this comprehensive service leverages influencer collaborations and optimized content strategies to drive growth.",
                                                  layoutId: "Jtuw1YSuY",
                                                  lxVLvSShs: "InstagramLogo",
                                                  ocFxhgdq4: h[0],
                                                  p1QdeJ3VD: !0,
                                                  style: { width: "100%" },
                                                  variant: "tICj7eCix",
                                                  width: "100%",
                                                  x6gTlITKM:
                                                    "Instagram Success Accelerator",
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    e(f, {
                      breakpoint: n,
                      overrides: {
                        P7j2A2OCI: {
                          __framer__styleAppearEffectEnabled: void 0,
                          style: {},
                        },
                      },
                      children: e(rr, {
                        __framer__animate: { transition: Ue },
                        __framer__animateOnce: !0,
                        __framer__enter: Qe,
                        __framer__exit: Ke,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1ncy7c0",
                        "data-framer-name": "Pricing",
                        id: W,
                        name: "Pricing",
                        ref: Q,
                        style: { transformPerspective: 1200 },
                        children: c("div", {
                          className: "framer-1ycslwf",
                          "data-framer-name": "Container",
                          name: "Container",
                          children: [
                            e(f, {
                              breakpoint: n,
                              overrides: {
                                P7j2A2OCI: {
                                  width: "min(max(100vw - 24px, 1px), 1440px)",
                                },
                                WgNeKo_y1: {
                                  width:
                                    "min(min(max(100vw - 80px, 1px), 1000px), 1440px)",
                                },
                              },
                              children: e(s, {
                                width: "min(max(100vw - 80px, 1px), 1440px)",
                                children: e(S, {
                                  className: "framer-bmjcpe-container",
                                  children: e(Ve, {
                                    ExBt4bIY2: "Explore Our Picing Plans",
                                    GqTmcaQLx: "Pricing",
                                    height: "100%",
                                    id: "E9fVGDByl",
                                    kAHPdHlCh: "",
                                    layoutId: "E9fVGDByl",
                                    NlGfzfEF2: !0,
                                    p1KubWiKz: !1,
                                    style: { maxWidth: "100%", width: "100%" },
                                    variant: "KJ1G3Id0e",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                            e(f, {
                              breakpoint: n,
                              overrides: {
                                P7j2A2OCI: {
                                  width: "min(max(100vw - 24px, 1px), 1440px)",
                                },
                                WgNeKo_y1: {
                                  width: "min(max(100vw - 80px, 1px), 1000px)",
                                },
                              },
                              children: e(s, {
                                width: "min(max(100vw - 80px, 1px), 1440px)",
                                children: e(S, {
                                  className: "framer-8aj6qy-container",
                                  children: e(f, {
                                    breakpoint: n,
                                    overrides: {
                                      P7j2A2OCI: { variant: "mFPnIauR1" },
                                      WgNeKo_y1: { variant: "mFPnIauR1" },
                                    },
                                    children: e(kr, {
                                      height: "100%",
                                      id: "QGrsVj7Tr",
                                      layoutId: "QGrsVj7Tr",
                                      style: { width: "100%" },
                                      variant: "F0Ee8aztf",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            e(xe, {
                              links: [
                                {
                                  href: { webPageId: "GCIF6zJzS" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "GCIF6zJzS" },
                                  implicitPathVariables: void 0,
                                },
                                {
                                  href: { webPageId: "GCIF6zJzS" },
                                  implicitPathVariables: void 0,
                                },
                              ],
                              children: (h) =>
                                e(s, {
                                  children: e(S, {
                                    className: "framer-kig475-container",
                                    children: e(f, {
                                      breakpoint: n,
                                      overrides: {
                                        P7j2A2OCI: {
                                          DEX53qIxg: h[2],
                                          variant: "YVt9h3DM_",
                                        },
                                        WgNeKo_y1: { DEX53qIxg: h[1] },
                                      },
                                      children: e(We, {
                                        AIYkLNyqb: "view all",
                                        DEX53qIxg: h[0],
                                        height: "100%",
                                        id: "vmCdBbr2y",
                                        layoutId: "vmCdBbr2y",
                                        variant: "VYn33lVMS",
                                        width: "100%",
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    e(f, {
                      breakpoint: n,
                      overrides: {
                        P7j2A2OCI: {
                          __framer__styleAppearEffectEnabled: void 0,
                          style: {},
                        },
                      },
                      children: e(rr, {
                        __framer__animate: { transition: Ue },
                        __framer__animateOnce: !0,
                        __framer__enter: Qe,
                        __framer__exit: Ke,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-17tncu9",
                        "data-framer-name": "Specialities",
                        name: "Specialities",
                        style: { transformPerspective: 1200 },
                        children: c("div", {
                          className: "framer-1mng6ye",
                          "data-framer-name": "Container",
                          name: "Container",
                          children: [
                            e(f, {
                              breakpoint: n,
                              overrides: {
                                P7j2A2OCI: {
                                  width: "min(max(100vw - 24px, 1px), 1440px)",
                                },
                              },
                              children: e(s, {
                                width: "min(max(100vw - 80px, 1px), 1440px)",
                                children: e(S, {
                                  className: "framer-18fk8li-container",
                                  children: e(f, {
                                    breakpoint: n,
                                    overrides: {
                                      P7j2A2OCI: { variant: "KJ1G3Id0e" },
                                      WgNeKo_y1: { variant: "KJ1G3Id0e" },
                                    },
                                    children: e(Ve, {
                                      ExBt4bIY2: "Our Specialities",
                                      GqTmcaQLx: "Why Us",
                                      height: "100%",
                                      id: "ty2_oh6O2",
                                      kAHPdHlCh:
                                        "Our top-notch tech and media agency specializes in building e-commerce brands, with a particular focus on startup e-commerce businesses. We pride ourselves on delivering impressive results and helping our clients achieve remarkable success in the digital space.",
                                      layoutId: "ty2_oh6O2",
                                      NlGfzfEF2: !0,
                                      p1KubWiKz: !0,
                                      style: {
                                        maxWidth: "100%",
                                        width: "100%",
                                      },
                                      variant: "u4P6wTRAk",
                                      width: "100%",
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            c("div", {
                              className: "framer-x3dn5k",
                              children: [
                                e(f, {
                                  breakpoint: n,
                                  overrides: {
                                    P7j2A2OCI: {
                                      __framer__styleAppearEffectEnabled:
                                        void 0,
                                      style: {},
                                    },
                                  },
                                  children: e(Or, {
                                    __framer__animate: { transition: Le },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Pe,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-1wd7iy1",
                                    style: { transformPerspective: 1200 },
                                    children: e(f, {
                                      breakpoint: n,
                                      overrides: {
                                        P7j2A2OCI: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 667,
                                            intrinsicWidth: 1e3,
                                            loading: "lazy",
                                            pixelHeight: 667,
                                            pixelWidth: 1e3,
                                            positionX: "55.1%",
                                            positionY: "30.2%",
                                            sizes:
                                              "min(max(100vw - 24px, 1px), 1440px)",
                                            src: "./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg",
                                            srcSet:
                                              "./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg?scale-down-to=512 512w,./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg 1000w",
                                          },
                                        },
                                        WgNeKo_y1: {
                                          background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 667,
                                            intrinsicWidth: 1e3,
                                            loading: "lazy",
                                            pixelHeight: 667,
                                            pixelWidth: 1e3,
                                            positionX: "55.1%",
                                            positionY: "30.2%",
                                            sizes:
                                              "max(max(100vw - 80px, 1px) * 1, 1px)",
                                            src: "./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg",
                                            srcSet:
                                              "./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg?scale-down-to=512 512w,./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg 1000w",
                                          },
                                        },
                                      },
                                      children: c(De, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 667,
                                          intrinsicWidth: 1e3,
                                          loading: "lazy",
                                          pixelHeight: 667,
                                          pixelWidth: 1e3,
                                          positionX: "55.1%",
                                          positionY: "30.2%",
                                          sizes:
                                            "max(min(max(100vw - 80px, 1px), 1440px) * 1, 1px)",
                                          src: "./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg",
                                          srcSet:
                                            "./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg?scale-down-to=512 512w,./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg 1000w",
                                        },
                                        className: "framer-1s6yyb6",
                                        children: [
                                          e("div", {
                                            className: "framer-dt0c77",
                                          }),
                                          c("div", {
                                            className: "framer-1e8ossu",
                                            children: [
                                              e(_, {
                                                __fromCanvasComponent: !0,
                                                children: e(x, {
                                                  children: e("p", {
                                                    className:
                                                      "framer-styles-preset-1uey7d7",
                                                    "data-styles-preset":
                                                      "XiF1LAa3c",
                                                    children: "150%",
                                                  }),
                                                }),
                                                className: "framer-1rbiegj",
                                                fonts: ["Inter"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                              e(_, {
                                                __fromCanvasComponent: !0,
                                                children: e(x, {
                                                  children: e("p", {
                                                    className:
                                                      "framer-styles-preset-39le6",
                                                    "data-styles-preset":
                                                      "BZqcnnsi4",
                                                    children:
                                                      "Average Traffic Increase",
                                                  }),
                                                }),
                                                className: "framer-a14alj",
                                                fonts: ["Inter"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          e("div", {
                                            className: "framer-1gbj1uu",
                                            children: e(_, {
                                              __fromCanvasComponent: !0,
                                              children: e(x, {
                                                children: e("p", {
                                                  className:
                                                    "framer-styles-preset-g6micz",
                                                  "data-styles-preset":
                                                    "iLvBdfOs8",
                                                  children:
                                                    "Clients choose to stay with us over the long run due to the exceptional results we deliver and the strong relationships we build.",
                                                }),
                                              }),
                                              className: "framer-b2npcv",
                                              fonts: ["Inter"],
                                              verticalAlignment: "top",
                                              withExternalLayout: !0,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                }),
                                e(f, {
                                  breakpoint: n,
                                  overrides: {
                                    P7j2A2OCI: {
                                      __framer__styleAppearEffectEnabled:
                                        void 0,
                                      style: {},
                                    },
                                  },
                                  children: c(Or, {
                                    __framer__animate: { transition: Le },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Pe,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-te7zln",
                                    style: { transformPerspective: 1200 },
                                    children: [
                                      e(De, {
                                        background: {
                                          alt: "",
                                          fit: "fill",
                                          intrinsicHeight: 4500,
                                          intrinsicWidth: 3e3,
                                          loading: "lazy",
                                          pixelHeight: 4500,
                                          pixelWidth: 3e3,
                                          positionX: "center",
                                          positionY: "bottom",
                                          src: "./images/QHwiFG8CdFS1wdIHWtWHvAuzLAM.jpg?scale-down-to=1024",
                                        },
                                        className: "framer-1smoyra",
                                        children: c("div", {
                                          className: "framer-13o8rur",
                                          "data-border": !0,
                                          children: [
                                            e(s, {
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(A, {
                                                  __framer__animate: {
                                                    transition: It,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: fn,
                                                  __framer__exit: cn,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-1jmnool-container",
                                                  drag: !0,
                                                  dragMomentum: !1,
                                                  dragSnapToOrigin: !0,
                                                  dragTransition: Z,
                                                  onMouseDown: ee,
                                                  style: {
                                                    transformPerspective: 1200,
                                                  },
                                                  transformTemplate: Nt,
                                                  whileTap: re,
                                                  children: e(D, {
                                                    ej_oyrdNG: "Quality",
                                                    height: "100%",
                                                    id: "p7AMn55yN",
                                                    layoutId: "p7AMn55yN",
                                                    variant: "yWlmd8pQp",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(s, {
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(A, {
                                                  __framer__animate: {
                                                    transition: jt,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: pn,
                                                  __framer__exit: hn,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-1r0o321-container",
                                                  drag: !0,
                                                  dragMomentum: !1,
                                                  dragSnapToOrigin: !0,
                                                  dragTransition: Z,
                                                  onMouseDown: ee,
                                                  style: {
                                                    rotate: 2,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: re,
                                                  children: e(D, {
                                                    ej_oyrdNG:
                                                      "Personalization",
                                                    height: "100%",
                                                    id: "oXyw3aYrr",
                                                    layoutId: "oXyw3aYrr",
                                                    variant: "yWlmd8pQp",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(s, {
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(A, {
                                                  __framer__animate: {
                                                    transition: Ct,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: kt,
                                                  __framer__exit: un,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-trja7f-container",
                                                  drag: !0,
                                                  dragMomentum: !1,
                                                  dragSnapToOrigin: !0,
                                                  dragTransition: Z,
                                                  onMouseDown: ee,
                                                  style: {
                                                    rotate: -4,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: re,
                                                  children: e(D, {
                                                    ej_oyrdNG: "Reliability",
                                                    height: "100%",
                                                    id: "X8QqHiYuz",
                                                    layoutId: "X8QqHiYuz",
                                                    variant: "yWlmd8pQp",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(s, {
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(A, {
                                                  __framer__animate: {
                                                    transition: T,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: kt,
                                                  __framer__exit: yn,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-mvrr88-container",
                                                  drag: !0,
                                                  dragMomentum: !1,
                                                  dragSnapToOrigin: !0,
                                                  dragTransition: Z,
                                                  onMouseDown: ee,
                                                  style: {
                                                    rotate: -17,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: re,
                                                  children: e(D, {
                                                    ej_oyrdNG: "Collaboration",
                                                    height: "100%",
                                                    id: "HASNsDcS3",
                                                    layoutId: "HASNsDcS3",
                                                    variant: "yWlmd8pQp",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(s, {
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(A, {
                                                  __framer__animate: {
                                                    transition: T,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: gn,
                                                  __framer__exit: xn,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-p5yo2r-container",
                                                  drag: !0,
                                                  dragMomentum: !1,
                                                  dragSnapToOrigin: !0,
                                                  dragTransition: Z,
                                                  onMouseDown: ee,
                                                  style: {
                                                    rotate: -14,
                                                    transformPerspective: 1200,
                                                  },
                                                  transformTemplate: Nt,
                                                  whileTap: re,
                                                  children: e(D, {
                                                    ej_oyrdNG: "Innovation",
                                                    height: "100%",
                                                    id: "Blh9QJ6z1",
                                                    layoutId: "Blh9QJ6z1",
                                                    variant: "yWlmd8pQp",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(s, {
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(A, {
                                                  __framer__animate: {
                                                    transition: T,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: wn,
                                                  __framer__exit: vn,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-3063ph-container",
                                                  drag: !0,
                                                  dragMomentum: !1,
                                                  dragSnapToOrigin: !0,
                                                  dragTransition: Z,
                                                  onMouseDown: ee,
                                                  style: {
                                                    rotate: 11,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: re,
                                                  children: e(D, {
                                                    ej_oyrdNG: "Customer Focus",
                                                    height: "100%",
                                                    id: "O_tHxRvOp",
                                                    layoutId: "O_tHxRvOp",
                                                    variant: "yWlmd8pQp",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(s, {
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(A, {
                                                  __framer__animate: {
                                                    transition: T,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: bn,
                                                  __framer__exit: _n,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-1rsmndz-container",
                                                  drag: !0,
                                                  dragMomentum: !1,
                                                  dragSnapToOrigin: !0,
                                                  dragTransition: Z,
                                                  onMouseDown: ee,
                                                  style: {
                                                    rotate: 11,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: re,
                                                  children: e(D, {
                                                    ej_oyrdNG:
                                                      "Long-Term Relationships",
                                                    height: "100%",
                                                    id: "pLGjURVVi",
                                                    layoutId: "pLGjURVVi",
                                                    variant: "yWlmd8pQp",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(s, {
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(A, {
                                                  __framer__animate: {
                                                    transition: T,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: Nn,
                                                  __framer__exit: kn,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-t2hhas-container",
                                                  drag: !0,
                                                  dragMomentum: !1,
                                                  dragSnapToOrigin: !0,
                                                  dragTransition: Z,
                                                  onMouseDown: ee,
                                                  style: {
                                                    rotate: -15,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: re,
                                                  children: e(D, {
                                                    ej_oyrdNG:
                                                      "Positive Experience",
                                                    height: "100%",
                                                    id: "pn_Wu45YU",
                                                    layoutId: "pn_Wu45YU",
                                                    variant: "yWlmd8pQp",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(s, {
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(A, {
                                                  __framer__animate: {
                                                    transition: T,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: On,
                                                  __framer__exit: In,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-1mb7acv-container",
                                                  drag: !0,
                                                  dragMomentum: !1,
                                                  dragSnapToOrigin: !0,
                                                  dragTransition: Z,
                                                  onMouseDown: ee,
                                                  style: {
                                                    rotate: 3,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: re,
                                                  children: e(D, {
                                                    ej_oyrdNG:
                                                      "Trustworthiness",
                                                    height: "100%",
                                                    id: "REdf2YXuu",
                                                    layoutId: "REdf2YXuu",
                                                    variant: "yWlmd8pQp",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(s, {
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(A, {
                                                  __framer__animate: {
                                                    transition: T,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: jn,
                                                  __framer__exit: Cn,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-1aorcb3-container",
                                                  drag: !0,
                                                  dragMomentum: !1,
                                                  dragSnapToOrigin: !0,
                                                  dragTransition: Z,
                                                  onMouseDown: ee,
                                                  style: {
                                                    rotate: 24,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: re,
                                                  children: e(D, {
                                                    ej_oyrdNG: "Passion",
                                                    height: "100%",
                                                    id: "xLvN11CHg",
                                                    layoutId: "xLvN11CHg",
                                                    variant: "yWlmd8pQp",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e(s, {
                                              children: e(f, {
                                                breakpoint: n,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(A, {
                                                  __framer__animate: {
                                                    transition: T,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: Fn,
                                                  __framer__exit: Pn,
                                                  __framer__styleAppearEffectEnabled:
                                                    !0,
                                                  __framer__threshold: 0,
                                                  __perspectiveFX: !1,
                                                  __targetOpacity: 1,
                                                  className:
                                                    "framer-6cy7es-container",
                                                  drag: !0,
                                                  dragMomentum: !1,
                                                  dragSnapToOrigin: !0,
                                                  dragTransition: Z,
                                                  onMouseDown: ee,
                                                  style: {
                                                    rotate: -28,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: re,
                                                  children: e(D, {
                                                    ej_oyrdNG:
                                                      "Customer Support",
                                                    height: "100%",
                                                    id: "ABFtcuw84",
                                                    layoutId: "ABFtcuw84",
                                                    variant: "yWlmd8pQp",
                                                    width: "100%",
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                      c("div", {
                                        className: "framer-n263oc",
                                        children: [
                                          c("div", {
                                            className: "framer-elyyqd",
                                            children: [
                                              e(_, {
                                                __fromCanvasComponent: !0,
                                                children: e(x, {
                                                  children: e("p", {
                                                    className:
                                                      "framer-styles-preset-39le6",
                                                    "data-styles-preset":
                                                      "BZqcnnsi4",
                                                    style: {
                                                      "--framer-text-alignment":
                                                        "right",
                                                      "--framer-text-color":
                                                        "var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13))",
                                                    },
                                                    children:
                                                      "Enhanced Brand Visibility",
                                                  }),
                                                }),
                                                className: "framer-g4ukzm",
                                                fonts: ["Inter"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0,
                                              }),
                                              e(_, {
                                                __fromCanvasComponent: !0,
                                                children: e(x, {
                                                  children: e("p", {
                                                    className:
                                                      "framer-styles-preset-1uey7d7",
                                                    "data-styles-preset":
                                                      "XiF1LAa3c",
                                                    style: {
                                                      "--framer-text-alignment":
                                                        "right",
                                                      "--framer-text-color":
                                                        "var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13))",
                                                    },
                                                    children: "80%",
                                                  }),
                                                }),
                                                className: "framer-1b8zfmf",
                                                fonts: ["Inter"],
                                                verticalAlignment: "center",
                                                withExternalLayout: !0,
                                              }),
                                            ],
                                          }),
                                          e(_, {
                                            __fromCanvasComponent: !0,
                                            children: e(x, {
                                              children: e("p", {
                                                className:
                                                  "framer-styles-preset-g6micz",
                                                "data-styles-preset":
                                                  "iLvBdfOs8",
                                                style: {
                                                  "--framer-text-color":
                                                    "var(--token-620fac81-7c2e-4342-b93a-72603d1fc89e, rgb(13, 13, 13))",
                                                },
                                                children:
                                                  "Our agency developed a content marketing plan for a client, resulting in a significant increase in brand visibility and recognition. As a result, the client experienced a 80% increase in website traffic within six months.",
                                              }),
                                            }),
                                            className: "framer-1rxwpr7",
                                            fonts: ["Inter"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    e(f, {
                      breakpoint: n,
                      overrides: {
                        P7j2A2OCI: {
                          __framer__styleAppearEffectEnabled: void 0,
                          style: {},
                        },
                      },
                      children: e(rr, {
                        __framer__animate: { transition: Ue },
                        __framer__animateOnce: !0,
                        __framer__enter: Qe,
                        __framer__exit: Ke,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-o6dgbz",
                        "data-framer-name": "FAQ",
                        id: ye,
                        name: "FAQ",
                        ref: Y,
                        style: { transformPerspective: 1200 },
                        children: c("div", {
                          className: "framer-19j62tj",
                          "data-framer-name": "Container",
                          name: "Container",
                          children: [
                            e(f, {
                              breakpoint: n,
                              overrides: {
                                P7j2A2OCI: {
                                  width: "min(max(100vw - 24px, 1px), 1440px)",
                                },
                                WgNeKo_y1: {
                                  width:
                                    "min(min(max(100vw - 80px, 1px), 1000px), 1440px)",
                                },
                              },
                              children: e(s, {
                                width: "min(max(100vw - 80px, 1px), 1440px)",
                                children: e(S, {
                                  className: "framer-1f2u7rm-container",
                                  children: e(Ve, {
                                    ExBt4bIY2: `Got Questions?
We've Got Answers!`,
                                    GqTmcaQLx: "Frequently Asked Questions",
                                    height: "100%",
                                    id: "WoYkGo2hS",
                                    kAHPdHlCh: "",
                                    layoutId: "WoYkGo2hS",
                                    NlGfzfEF2: !0,
                                    p1KubWiKz: !1,
                                    style: { maxWidth: "100%", width: "100%" },
                                    variant: "KJ1G3Id0e",
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                            e(f, {
                              breakpoint: n,
                              overrides: {
                                P7j2A2OCI: {
                                  width:
                                    "min(min(max(100vw - 24px, 1px), 1440px), 1000px)",
                                },
                                WgNeKo_y1: {
                                  width: "min(max(100vw - 80px, 1px), 1000px)",
                                },
                              },
                              children: e(s, {
                                width:
                                  "min(min(max(100vw - 80px, 1px), 1440px), 1000px)",
                                children: e(S, {
                                  className: "framer-dv02ol-container",
                                  children: e(ur, {
                                    height: "100%",
                                    id: "Vf0IQ65Mm",
                                    layoutId: "Vf0IQ65Mm",
                                    style: { maxWidth: "100%", width: "100%" },
                                    width: "100%",
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                e(s, {
                  width: "100vw",
                  children: e(S, {
                    className: "framer-q3g1oe-container",
                    children: e(f, {
                      breakpoint: n,
                      overrides: {
                        P7j2A2OCI: { variant: "BsZlXwif2" },
                        WgNeKo_y1: { variant: "mKXCPqfUG" },
                      },
                      children: e(gr, {
                        height: "100%",
                        id: "S6HR3Mlhv",
                        layoutId: "S6HR3Mlhv",
                        style: { width: "100%" },
                        variant: "zQXPtCkn3",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                e(s, {
                  children: e(S, {
                    className: "framer-1bn53kh-container",
                    layoutScroll: !0,
                    children: e(hr, {
                      height: "100%",
                      id: "ZCezUq2zT",
                      intensity: 12,
                      layoutId: "ZCezUq2zT",
                      width: "100%",
                    }),
                  }),
                }),
              ],
            }),
            e("div", { className: J(_t, ...K), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Tn = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Ir.bodyClassName}-framer-yOmNs { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0)); }`,
    ".framer-yOmNs.framer-k7qaoj, .framer-yOmNs .framer-k7qaoj { display: block; }",
    ".framer-yOmNs.framer-hvzz3m { align-content: center; align-items: center; background-color: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }",
    ".framer-yOmNs .framer-123wqig { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: fixed; top: 0px; width: 100%; z-index: 0; }",
    '.framer-yOmNs .framer-1bsjpkg { background: radial-gradient(43.2% 25% at 50% 18.8%, rgba(84, 84, 84, 0) 0%, var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10)) /* {"name":"Dark Green"} */ 100%); flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }',
    ".framer-yOmNs .framer-ne3cqe-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: relative; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-yOmNs .framer-icz1s2-container { flex: none; height: auto; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 10; }",
    ".framer-yOmNs .framer-1ma85oo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-yOmNs .framer-j1yqbq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 31px; height: min-content; justify-content: center; overflow: visible; padding: 180px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-j4z2v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-4w8l5h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 293px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-fo77gx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: center; max-width: 850px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-jbkn8z, .framer-yOmNs .framer-1ty6ljs, .framer-yOmNs .framer-harf3f { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 740px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    ".framer-yOmNs .framer-r4ysuh { align-content: center; align-items: center; background-color: var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, #9154ba); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-yOmNs .framer-n2iyub { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-yOmNs .framer-1dzy20o { align-content: center; align-items: center; background-color: var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, #9154ba); border-bottom-left-radius: 180px; border-bottom-right-radius: 180px; border-top-left-radius: 180px; border-top-right-radius: 180px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 73px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 73px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yOmNs .framer-1h8vqsn { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 73px); overflow: hidden; position: relative; width: 73px; }",
    ".framer-yOmNs .framer-1c0jjav { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yOmNs .framer-99gncu-container, .framer-yOmNs .framer-lajn5l-container, .framer-yOmNs .framer-kig475-container { flex: none; height: auto; position: relative; width: auto; }",
    '.framer-yOmNs .framer-1urq87d { background: linear-gradient(180deg, rgba(191, 51, 19, 0) 16.353996101364523%, var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(191, 51, 19)) /* {"name":"Light Green"} */ 77.35485380116958%); bottom: 0px; flex: none; height: 855px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: -1; }',
    ".framer-yOmNs .framer-1sk6zfr { -webkit-filter: contrast(1.23) grayscale(0.14); filter: contrast(1.23) grayscale(0.14); flex: none; height: 678px; overflow: visible; position: relative; width: 100%; }",
    '.framer-yOmNs .framer-m94qqz { background: linear-gradient(180deg, rgba(84, 84, 84, 0) 41.63993900835976%, var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0)) /* {"name":"Dark Green"} */ 100%); bottom: 0px; flex: none; height: 182px; left: 0px; overflow: hidden; position: absolute; width: 100%; }',
    ".framer-yOmNs .framer-1d4gaqj-container { flex: none; height: 320px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 196px; width: 100%; z-index: -1; }",
    ".framer-yOmNs .framer-1gfdqz2 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 127px; justify-content: center; min-width: 1339px; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-yOmNs .framer-13d90j0 { -webkit-backdrop-filter: blur(5px); align-content: center; align-items: center; backdrop-filter: blur(5px); background-color: var(--token-affa1b72-7c43-4531-b217-6ad9a97be289, rgba(255, 255, 255, 0.05)); border-bottom-left-radius: 123px; border-bottom-right-radius: 123px; border-top-left-radius: 123px; border-top-right-radius: 123px; bottom: 0px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 79px; justify-content: center; overflow: hidden; padding: 1px; pointer-events: none; position: absolute; right: 365px; width: 79px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yOmNs .framer-yfckd4 { aspect-ratio: 1 / 1; background-color: rgba(242, 236, 230, 0.43); border-bottom-left-radius: 170px; border-bottom-right-radius: 170px; border-top-left-radius: 170px; border-top-right-radius: 170px; flex: none; height: var(--framer-aspect-ratio-supported, 66px); left: 51%; overflow: hidden; position: absolute; top: 51%; transform: translate(-50%, -50%); width: 66px; will-change: var(--framer-will-change-override, transform); z-index: 0; }",
    ".framer-yOmNs .framer-h255qi-container { flex: none; height: 38px; left: calc(48.80952380952383% - 38px / 2); position: absolute; top: calc(48.80952380952383% - 38px / 2); width: 38px; }",
    ".framer-yOmNs .framer-1ql1gnv-container { flex: none; height: 60px; left: calc(50.63291139240509% - 60px / 2); position: absolute; top: calc(50.63291139240509% - 60px / 2); width: 60px; z-index: 1; }",
    ".framer-yOmNs .framer-skvjh4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 150px 40px 100px 40px; position: relative; width: 100%; z-index: 1; }",
    ".framer-yOmNs .framer-1u76kmz, .framer-yOmNs .framer-1mng6ye { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-yOmNs .framer-171tl { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-yOmNs .framer-1xi7suj-container, .framer-yOmNs .framer-bmjcpe-container, .framer-yOmNs .framer-1f2u7rm-container { flex: none; height: auto; max-width: 1440px; position: relative; width: 100%; z-index: 1; }",
    ".framer-yOmNs .framer-py75l2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-s3790c { display: grid; flex: none; gap: 10px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(200px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-mrpq24-container, .framer-yOmNs .framer-w8x50v-container, .framer-yOmNs .framer-1txw3k5-container, .framer-yOmNs .framer-p1yvjz-container, .framer-yOmNs .framer-fibh1m-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; z-index: 1; }",
    ".framer-yOmNs .framer-1ncy7c0, .framer-yOmNs .framer-17tncu9, .framer-yOmNs .framer-o6dgbz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 100px 40px 100px 40px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-1ycslwf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }",
    ".framer-yOmNs .framer-8aj6qy-container, .framer-yOmNs .framer-q3g1oe-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-18fk8li-container { flex: none; height: auto; max-width: 1440px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-x3dn5k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-1wd7iy1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 460px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-1s6yyb6 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: flex-end; overflow: hidden; padding: 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    '.framer-yOmNs .framer-dt0c77 { background: linear-gradient(243deg, rgba(84, 84, 84, 0) 54.70541257678578%, var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0)) /* {"name":"Dark Green"} */ 84.420754785216%); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }',
    ".framer-yOmNs .framer-1e8ossu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 50%; }",
    ".framer-yOmNs .framer-1rbiegj, .framer-yOmNs .framer-1b8zfmf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 90px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yOmNs .framer-a14alj, .framer-yOmNs .framer-g4ukzm { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-yOmNs .framer-1gbj1uu { -webkit-backdrop-filter: blur(5px); align-content: center; align-items: center; backdrop-filter: blur(5px); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 10px 10px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yOmNs .framer-b2npcv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; opacity: 0.8; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-yOmNs .framer-te7zln { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 460px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-1smoyra { align-content: center; align-items: center; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: 0.5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yOmNs .framer-13o8rur { --border-bottom-width: 1px; --border-color: var(--token-8296390c-3e4f-4c48-afd6-ee4e9808dfbe, rgba(255, 255, 255, 0.5)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-backdrop-filter: blur(8px); aspect-ratio: 1 / 1; backdrop-filter: blur(8px); border-bottom-left-radius: 350px; border-bottom-right-radius: 350px; border-top-left-radius: 350px; border-top-right-radius: 350px; flex: none; height: var(--framer-aspect-ratio-supported, 366px); overflow: hidden; position: relative; width: 366px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yOmNs .framer-1jmnool-container { bottom: 0px; cursor: grab; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; z-index: 1; }",
    ".framer-yOmNs .framer-1r0o321-container { bottom: 47px; cursor: grab; flex: none; height: auto; left: 47px; position: absolute; width: auto; z-index: 1; }",
    ".framer-yOmNs .framer-trja7f-container { bottom: 37px; cursor: grab; flex: none; height: auto; left: 222px; position: absolute; width: auto; z-index: 1; }",
    ".framer-yOmNs .framer-mvrr88-container { bottom: 91px; cursor: grab; flex: none; height: auto; left: 201px; position: absolute; width: auto; z-index: 1; }",
    ".framer-yOmNs .framer-p5yo2r-container { bottom: 101px; cursor: grab; flex: none; height: auto; left: 48%; position: absolute; transform: translateX(-50%); width: auto; z-index: 1; }",
    ".framer-yOmNs .framer-3063ph-container { bottom: 151px; cursor: grab; flex: none; height: auto; left: -5px; position: absolute; width: auto; z-index: 1; }",
    ".framer-yOmNs .framer-1rsmndz-container { bottom: 154px; cursor: grab; flex: none; height: auto; left: 125px; position: absolute; width: auto; z-index: 1; }",
    ".framer-yOmNs .framer-t2hhas-container { bottom: 208px; cursor: grab; flex: none; height: auto; left: 17px; position: absolute; width: auto; z-index: 1; }",
    ".framer-yOmNs .framer-1mb7acv-container { bottom: 194px; cursor: grab; flex: none; height: auto; position: absolute; right: -16px; width: auto; z-index: 1; }",
    ".framer-yOmNs .framer-1aorcb3-container { bottom: 255px; cursor: grab; flex: none; height: auto; left: 192px; position: absolute; width: auto; z-index: 1; }",
    ".framer-yOmNs .framer-6cy7es-container { bottom: 273px; cursor: grab; flex: none; height: auto; left: 28px; position: absolute; width: auto; z-index: 1; }",
    ".framer-yOmNs .framer-n263oc { align-content: center; align-items: center; background-color: var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, #9154ba); border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: 0.5 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: hidden; padding: 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-yOmNs .framer-elyyqd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-1rxwpr7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-yOmNs .framer-19j62tj { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }",
    ".framer-yOmNs .framer-dv02ol-container { flex: none; height: auto; max-width: 1000px; position: relative; width: 100%; }",
    ".framer-yOmNs .framer-1bn53kh-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-yOmNs.framer-hvzz3m, .framer-yOmNs .framer-123wqig, .framer-yOmNs .framer-1ma85oo, .framer-yOmNs .framer-j1yqbq, .framer-yOmNs .framer-j4z2v, .framer-yOmNs .framer-4w8l5h, .framer-yOmNs .framer-fo77gx, .framer-yOmNs .framer-r4ysuh, .framer-yOmNs .framer-1dzy20o, .framer-yOmNs .framer-1gfdqz2, .framer-yOmNs .framer-13d90j0, .framer-yOmNs .framer-skvjh4, .framer-yOmNs .framer-1u76kmz, .framer-yOmNs .framer-171tl, .framer-yOmNs .framer-py75l2, .framer-yOmNs .framer-1ncy7c0, .framer-yOmNs .framer-1ycslwf, .framer-yOmNs .framer-17tncu9, .framer-yOmNs .framer-1mng6ye, .framer-yOmNs .framer-x3dn5k, .framer-yOmNs .framer-1wd7iy1, .framer-yOmNs .framer-1s6yyb6, .framer-yOmNs .framer-1e8ossu, .framer-yOmNs .framer-1gbj1uu, .framer-yOmNs .framer-te7zln, .framer-yOmNs .framer-1smoyra, .framer-yOmNs .framer-elyyqd, .framer-yOmNs .framer-o6dgbz, .framer-yOmNs .framer-19j62tj { gap: 0px; } .framer-yOmNs.framer-hvzz3m > *, .framer-yOmNs .framer-1ma85oo > *, .framer-yOmNs .framer-1e8ossu > *, .framer-yOmNs .framer-elyyqd > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-yOmNs.framer-hvzz3m > :first-child, .framer-yOmNs .framer-1ma85oo > :first-child, .framer-yOmNs .framer-j1yqbq > :first-child, .framer-yOmNs .framer-j4z2v > :first-child, .framer-yOmNs .framer-4w8l5h > :first-child, .framer-yOmNs .framer-1u76kmz > :first-child, .framer-yOmNs .framer-171tl > :first-child, .framer-yOmNs .framer-py75l2 > :first-child, .framer-yOmNs .framer-1ycslwf > :first-child, .framer-yOmNs .framer-1mng6ye > :first-child, .framer-yOmNs .framer-x3dn5k > :first-child, .framer-yOmNs .framer-1s6yyb6 > :first-child, .framer-yOmNs .framer-1e8ossu > :first-child, .framer-yOmNs .framer-1smoyra > :first-child, .framer-yOmNs .framer-elyyqd > :first-child, .framer-yOmNs .framer-19j62tj > :first-child { margin-top: 0px; } .framer-yOmNs.framer-hvzz3m > :last-child, .framer-yOmNs .framer-1ma85oo > :last-child, .framer-yOmNs .framer-j1yqbq > :last-child, .framer-yOmNs .framer-j4z2v > :last-child, .framer-yOmNs .framer-4w8l5h > :last-child, .framer-yOmNs .framer-1u76kmz > :last-child, .framer-yOmNs .framer-171tl > :last-child, .framer-yOmNs .framer-py75l2 > :last-child, .framer-yOmNs .framer-1ycslwf > :last-child, .framer-yOmNs .framer-1mng6ye > :last-child, .framer-yOmNs .framer-x3dn5k > :last-child, .framer-yOmNs .framer-1s6yyb6 > :last-child, .framer-yOmNs .framer-1e8ossu > :last-child, .framer-yOmNs .framer-1smoyra > :last-child, .framer-yOmNs .framer-elyyqd > :last-child, .framer-yOmNs .framer-19j62tj > :last-child { margin-bottom: 0px; } .framer-yOmNs .framer-123wqig > *, .framer-yOmNs .framer-fo77gx > *, .framer-yOmNs .framer-r4ysuh > *, .framer-yOmNs .framer-1dzy20o > *, .framer-yOmNs .framer-1gfdqz2 > *, .framer-yOmNs .framer-13d90j0 > *, .framer-yOmNs .framer-1wd7iy1 > *, .framer-yOmNs .framer-1gbj1uu > *, .framer-yOmNs .framer-te7zln > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-yOmNs .framer-123wqig > :first-child, .framer-yOmNs .framer-fo77gx > :first-child, .framer-yOmNs .framer-r4ysuh > :first-child, .framer-yOmNs .framer-1dzy20o > :first-child, .framer-yOmNs .framer-1gfdqz2 > :first-child, .framer-yOmNs .framer-13d90j0 > :first-child, .framer-yOmNs .framer-skvjh4 > :first-child, .framer-yOmNs .framer-1ncy7c0 > :first-child, .framer-yOmNs .framer-17tncu9 > :first-child, .framer-yOmNs .framer-1wd7iy1 > :first-child, .framer-yOmNs .framer-1gbj1uu > :first-child, .framer-yOmNs .framer-te7zln > :first-child, .framer-yOmNs .framer-o6dgbz > :first-child { margin-left: 0px; } .framer-yOmNs .framer-123wqig > :last-child, .framer-yOmNs .framer-fo77gx > :last-child, .framer-yOmNs .framer-r4ysuh > :last-child, .framer-yOmNs .framer-1dzy20o > :last-child, .framer-yOmNs .framer-1gfdqz2 > :last-child, .framer-yOmNs .framer-13d90j0 > :last-child, .framer-yOmNs .framer-skvjh4 > :last-child, .framer-yOmNs .framer-1ncy7c0 > :last-child, .framer-yOmNs .framer-17tncu9 > :last-child, .framer-yOmNs .framer-1wd7iy1 > :last-child, .framer-yOmNs .framer-1gbj1uu > :last-child, .framer-yOmNs .framer-te7zln > :last-child, .framer-yOmNs .framer-o6dgbz > :last-child { margin-right: 0px; } .framer-yOmNs .framer-j1yqbq > * { margin: 0px; margin-bottom: calc(31px / 2); margin-top: calc(31px / 2); } .framer-yOmNs .framer-j4z2v > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-yOmNs .framer-4w8l5h > *, .framer-yOmNs .framer-1s6yyb6 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-yOmNs .framer-skvjh4 > *, .framer-yOmNs .framer-1ncy7c0 > *, .framer-yOmNs .framer-17tncu9 > *, .framer-yOmNs .framer-o6dgbz > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-yOmNs .framer-1u76kmz > *, .framer-yOmNs .framer-1mng6ye > *, .framer-yOmNs .framer-19j62tj > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-yOmNs .framer-171tl > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-yOmNs .framer-py75l2 > *, .framer-yOmNs .framer-x3dn5k > *, .framer-yOmNs .framer-1smoyra > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-yOmNs .framer-1ycslwf > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",
    "@media (min-width: 1200px) { .framer-yOmNs .hidden-hvzz3m { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-yOmNs .hidden-1b4lfhe { display: none !important; } .${Ir.bodyClassName}-framer-yOmNs { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0)); } .framer-yOmNs.framer-hvzz3m { width: 810px; } .framer-yOmNs .framer-fo77gx { max-width: 600px; } .framer-yOmNs .framer-jbkn8z, .framer-yOmNs .framer-1ty6ljs, .framer-yOmNs .framer-harf3f { max-width: 490px; } .framer-yOmNs .framer-1urq87d { height: 671px; } .framer-yOmNs .framer-1sk6zfr { height: 441px; } .framer-yOmNs .framer-m94qqz { height: 72px; left: calc(50.00000000000002% - 100% / 2); } .framer-yOmNs .framer-1d4gaqj-container { top: 46px; } .framer-yOmNs .framer-13d90j0 { left: calc(50.00000000000002% - 79px / 2); right: unset; } .framer-yOmNs .framer-skvjh4, .framer-yOmNs .framer-1ncy7c0, .framer-yOmNs .framer-17tncu9, .framer-yOmNs .framer-o6dgbz { padding: 80px 40px 80px 40px; } .framer-yOmNs .framer-1u76kmz, .framer-yOmNs .framer-1mng6ye { gap: 30px; max-width: unset; } .framer-yOmNs .framer-1ycslwf { gap: 60px; justify-content: flex-start; max-width: 1000px; } .framer-yOmNs .framer-1s6yyb6 { gap: 9px; } .framer-yOmNs .framer-dt0c77 { order: 0; } .framer-yOmNs .framer-1e8ossu { justify-content: flex-end; order: 1; width: 100%; } .framer-yOmNs .framer-1rbiegj, .framer-yOmNs .framer-1b8zfmf { height: 70px; } .framer-yOmNs .framer-1gbj1uu { order: 2; } .framer-yOmNs .framer-1smoyra { flex: 1 0 0px; } .framer-yOmNs .framer-n263oc { flex: 0.7 0 0px; } .framer-yOmNs .framer-19j62tj { justify-content: flex-start; max-width: 1000px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-yOmNs .framer-1u76kmz, .framer-yOmNs .framer-1ycslwf, .framer-yOmNs .framer-1mng6ye, .framer-yOmNs .framer-1s6yyb6 { gap: 0px; } .framer-yOmNs .framer-1u76kmz > *, .framer-yOmNs .framer-1mng6ye > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-yOmNs .framer-1u76kmz > :first-child, .framer-yOmNs .framer-1ycslwf > :first-child, .framer-yOmNs .framer-1mng6ye > :first-child, .framer-yOmNs .framer-1s6yyb6 > :first-child { margin-top: 0px; } .framer-yOmNs .framer-1u76kmz > :last-child, .framer-yOmNs .framer-1ycslwf > :last-child, .framer-yOmNs .framer-1mng6ye > :last-child, .framer-yOmNs .framer-1s6yyb6 > :last-child { margin-bottom: 0px; } .framer-yOmNs .framer-1ycslwf > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-yOmNs .framer-1s6yyb6 > * { margin: 0px; margin-bottom: calc(9px / 2); margin-top: calc(9px / 2); } }}`,
    `@media (max-width: 809px) { .framer-yOmNs .hidden-1zvqox { display: none !important; } .${Ir.bodyClassName}-framer-yOmNs { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0)); } .framer-yOmNs.framer-hvzz3m { overflow: hidden; width: 390px; } .framer-yOmNs .framer-j1yqbq { gap: 60px; padding: 140px 0px 0px 0px; } .framer-yOmNs .framer-j4z2v { padding: 0px 20px 0px 20px; } .framer-yOmNs .framer-jbkn8z, .framer-yOmNs .framer-1ty6ljs, .framer-yOmNs .framer-harf3f, .framer-yOmNs .framer-1c0jjav { max-width: 400px; } .framer-yOmNs .framer-r4ysuh { padding: 0px 2px 0px 2px; } .framer-yOmNs .framer-1dzy20o { height: 48px; width: 48px; } .framer-yOmNs .framer-1h8vqsn { height: var(--framer-aspect-ratio-supported, 38px); width: 38px; } .framer-yOmNs .framer-1urq87d { height: 331px; } .framer-yOmNs .framer-1sk6zfr { height: 241px; } .framer-yOmNs .framer-m94qqz { height: 52px; left: calc(50.00000000000002% - 100% / 2); } .framer-yOmNs .framer-1d4gaqj-container { top: -69px; } .framer-yOmNs .framer-13d90j0 { bottom: -8px; height: 75px; left: calc(50.00000000000002% - 75px / 2); right: unset; width: 75px; } .framer-yOmNs .framer-yfckd4 { background-color: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, #0a0a0a); height: var(--framer-aspect-ratio-supported, 54px); left: 51%; top: 51%; width: 54px; } .framer-yOmNs .framer-h255qi-container { height: 26px; left: calc(48.484848484848506% - 26px / 2); top: calc(48.484848484848506% - 26px / 2); width: 26px; } .framer-yOmNs .framer-skvjh4, .framer-yOmNs .framer-1ncy7c0, .framer-yOmNs .framer-17tncu9, .framer-yOmNs .framer-o6dgbz { padding: 50px 12px 50px 12px; } .framer-yOmNs .framer-1u76kmz, .framer-yOmNs .framer-1mng6ye, .framer-yOmNs .framer-19j62tj { gap: 40px; } .framer-yOmNs .framer-171tl { align-content: center; align-items: center; } .framer-yOmNs .framer-1xi7suj-container { max-width: unset; } .framer-yOmNs .framer-s3790c { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; padding: 15px 0px 15px 0px; } .framer-yOmNs .framer-mrpq24-container { align-self: unset; height: 315px; } .framer-yOmNs .framer-w8x50v-container { align-self: unset; height: 273px; } .framer-yOmNs .framer-1txw3k5-container { align-self: unset; height: 292px; } .framer-yOmNs .framer-p1yvjz-container { align-self: unset; height: 279px; } .framer-yOmNs .framer-fibh1m-container { align-self: unset; height: 304px; } .framer-yOmNs .framer-1wd7iy1 { flex-direction: column; height: 879px; } .framer-yOmNs .framer-1s6yyb6 { flex: 1 0 0px; height: 1px; width: 100%; } .framer-yOmNs .framer-1e8ossu { width: 100%; } .framer-yOmNs .framer-1rbiegj, .framer-yOmNs .framer-1b8zfmf { height: 53px; } .framer-yOmNs .framer-te7zln { flex-direction: column; height: min-content; } .framer-yOmNs .framer-1smoyra { flex: none; height: min-content; width: 100%; } .framer-yOmNs .framer-1jmnool-container, .framer-yOmNs .framer-1r0o321-container, .framer-yOmNs .framer-trja7f-container, .framer-yOmNs .framer-mvrr88-container, .framer-yOmNs .framer-p5yo2r-container, .framer-yOmNs .framer-3063ph-container, .framer-yOmNs .framer-1rsmndz-container, .framer-yOmNs .framer-t2hhas-container, .framer-yOmNs .framer-1mb7acv-container, .framer-yOmNs .framer-1aorcb3-container, .framer-yOmNs .framer-6cy7es-container { cursor: unset; } .framer-yOmNs .framer-n263oc { flex: none; gap: 40px; height: min-content; justify-content: center; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-yOmNs .framer-j1yqbq, .framer-yOmNs .framer-1u76kmz, .framer-yOmNs .framer-s3790c, .framer-yOmNs .framer-1mng6ye, .framer-yOmNs .framer-1wd7iy1, .framer-yOmNs .framer-te7zln, .framer-yOmNs .framer-n263oc, .framer-yOmNs .framer-19j62tj { gap: 0px; } .framer-yOmNs .framer-j1yqbq > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-yOmNs .framer-j1yqbq > :first-child, .framer-yOmNs .framer-1u76kmz > :first-child, .framer-yOmNs .framer-s3790c > :first-child, .framer-yOmNs .framer-1mng6ye > :first-child, .framer-yOmNs .framer-1wd7iy1 > :first-child, .framer-yOmNs .framer-te7zln > :first-child, .framer-yOmNs .framer-n263oc > :first-child, .framer-yOmNs .framer-19j62tj > :first-child { margin-top: 0px; } .framer-yOmNs .framer-j1yqbq > :last-child, .framer-yOmNs .framer-1u76kmz > :last-child, .framer-yOmNs .framer-s3790c > :last-child, .framer-yOmNs .framer-1mng6ye > :last-child, .framer-yOmNs .framer-1wd7iy1 > :last-child, .framer-yOmNs .framer-te7zln > :last-child, .framer-yOmNs .framer-n263oc > :last-child, .framer-yOmNs .framer-19j62tj > :last-child { margin-bottom: 0px; } .framer-yOmNs .framer-1u76kmz > *, .framer-yOmNs .framer-1mng6ye > *, .framer-yOmNs .framer-n263oc > *, .framer-yOmNs .framer-19j62tj > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-yOmNs .framer-s3790c > *, .framer-yOmNs .framer-1wd7iy1 > *, .framer-yOmNs .framer-te7zln > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`,
    ...wt,
    ...tt,
    ...it,
    ...yt,
    ...Kr,
    '.framer-yOmNs[data-border="true"]::after, .framer-yOmNs [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  tr = G(An, Tn, "framer-yOmNs"),
  Ki = tr;
tr.displayName = "Home";
tr.defaultProps = { height: 7240, width: 1200 };
se(
  tr,
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
    ...Ha,
    ...Ba,
    ...Ga,
    ...Qa,
    ...Ka,
    ...$a,
    ...Za,
    ...en,
    ...rn,
    ...tn,
    ...an,
    ...nn,
    ...on,
    ...de(xt),
    ...de(rt),
    ...de(nt),
    ...de(ut),
    ...de(Qr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var $i = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Frameryd7nMFDHh",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerResponsiveScreen: "",
        framerIntrinsicHeight: "7240",
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1200",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"WgNeKo_y1":{"layout":["fixed","auto"]},"P7j2A2OCI":{"layout":["fixed","auto"]}}}',
        framerComponentViewportWidth: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
export { $i as __FramerMetadata__, Ki as default };
//# sourceMappingURL=47nKqjLiO0A_Z37YIgN6uYfmerREZApryaamNa-j3Pk.OKK4VMKT.mjs.map
