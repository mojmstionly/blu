import { a as Gr } from "./chunk-N7PISP3R.mjs";
import {
  a as Ze,
  b as it,
  c as nt,
  d as ot,
  e as dt,
  f as lt,
  g as mt,
} from "./chunk-JVAFNABT.mjs";
import { a as Ee } from "./chunk-ZJ2E34DU.mjs";
import { a as Hr } from "./chunk-GDBMBQJA.mjs";
import { a as yr } from "./chunk-FUW5XFW4.mjs";
import {
  a as X,
  b as hr,
  c as rt,
  d as tt,
  e as at,
} from "./chunk-WHPIGJDV.mjs";
import "./chunk-TVG374JO.mjs";
import { a as Ae } from "./chunk-WXBCOAIB.mjs";
import "./chunk-IZDX7ZS5.mjs";
import { a as pr } from "./chunk-SNGS4CU5.mjs";
import {
  a as he,
  b as ur,
  c as Kr,
  d as $r,
  e as Qr,
  f as Jr,
  g as Zr,
  h as et,
  i as gr,
  j as xr,
} from "./chunk-KVW7ZHFM.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as zr,
  B as Vr,
  C as Ur,
  Ca as me,
  D as Er,
  Da as C,
  E as Or,
  Ea as fe,
  G as qr,
  M as Xr,
  N as le,
  P as Ce,
  R as Ne,
  T as s,
  W as M,
  Z as $,
  _ as Ve,
  aa as we,
  b as je,
  ba as m,
  c as y,
  ca as P,
  d as fr,
  ea as H,
  f as sr,
  fa as Dr,
  g as ne,
  ha as Lr,
  i as Tr,
  ia as Yr,
  j as ve,
  k as Qe,
  ka as p,
  l as oe,
  la as We,
  m as Br,
  o as de,
  p as w,
  q as Rr,
  ra as Pe,
  sa as Mr,
  t as e,
  u as f,
  v as Y,
  va as be,
  w as cr,
  x as n,
  xa as Je,
  ya as Ue,
  z as q,
  za as k,
} from "./chunk-27H5APBL.mjs";
import "./chunk-ELYU6EKT.mjs";
function ft(t) {
  for (var a = 0, o, d = 0, c = t.length; c >= 4; ++d, c -= 4)
    (o =
      (255 & t.charCodeAt(d)) |
      ((255 & t.charCodeAt(++d)) << 8) |
      ((255 & t.charCodeAt(++d)) << 16) |
      ((255 & t.charCodeAt(++d)) << 24)),
      (o = 1540483477 * (65535 & o) + ((59797 * (o >>> 16)) << 16)),
      (o ^= o >>> 24),
      (a =
        (1540483477 * (65535 & o) + ((59797 * (o >>> 16)) << 16)) ^
        (1540483477 * (65535 & a) + ((59797 * (a >>> 16)) << 16)));
  switch (c) {
    case 3:
      a ^= (255 & t.charCodeAt(d + 2)) << 16;
    case 2:
      a ^= (255 & t.charCodeAt(d + 1)) << 8;
    case 1:
      (a ^= 255 & t.charCodeAt(d)),
        (a = 1540483477 * (65535 & a) + ((59797 * (a >>> 16)) << 16));
  }
  return (
    (a ^= a >>> 13),
    (a = 1540483477 * (65535 & a) + ((59797 * (a >>> 16)) << 16)),
    ((a ^ (a >>> 15)) >>> 0).toString(36)
  );
}
var wr = H(
    function (t) {
      let a,
        o,
        d,
        c = je.count(t.slots) > 0,
        u = Ne.current() === Ne.canvas,
        g = c && t.type === "graphic",
        R = t.type === "circle",
        I = t.type === "ellipse",
        b = I ? t.cylinderHeight / 2 : 0,
        i = Bt(t.flip, b);
      if (g) {
        let U = vr(t.slots),
          h = vr(U.props.svg),
          W = vr(U.props.children);
        if (u && !W.props.frame)
          return f("div", {
            style: Rt,
            children: [
              e("div", { style: zt, children: "\u{1F48E}" }),
              e("p", { style: Vt, children: "Please connect to Graphic" }),
              e("p", {
                style: Ut,
                children:
                  "You can only connect the Arc to a Graphic with a single path.",
              }),
            ],
          });
        if (u && W) {
          let z = Hr(W),
            v = W.props.frame;
          for (let l of ((o = `0 0 ${v.width} ${v.height}`),
          z.match(/[\w-]+="[^"]*"/g)))
            l.includes("d=") && (a = st(l));
        }
        if (!u && h) {
          let z = h.match(/[\w-]+="[^"]*"/g);
          for (let v of ((o = (o = (o = h.split("viewBox=")[1]).split(
            ">"
          )[0]).replace(/^"(.+(?="$))"$/, "$1")),
          z))
            v.includes("d=") && (a = st(v));
        }
      }
      let j = `curve-${ft(a || i)}`;
      return (
        t.alignmentBaseline === "top" && (d = "Text Top"),
        t.alignmentBaseline === "center" && (d = "Central"),
        t.alignmentBaseline === "bottom" && (d = "Hanging"),
        e(n.div, {
          style: { width: "100%", height: "100%", position: "relative" },
          draggable: "false",
          children: f(n.svg, {
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
                d: g ? a : i,
                strokeWidth: "none",
                fill: "transparent",
              }),
              e("text", {
                children: f("textPath", {
                  href: `#${j}`,
                  startOffset: t.startOffset,
                  dominantBaseline: d,
                  style: {
                    ...t.font,
                    wordSpacing: t.wordSpacing,
                    fill: t.color,
                  },
                  children: [
                    t.text,
                    !u &&
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
  br = wr;
function vr(t) {
  let a;
  return (
    je.map(t, (o) => {
      a === void 0 && (a = o);
    }),
    a
  );
}
(wr.defaultProps = { height: 50, width: 50 }),
  M(wr, {
    text: {
      title: "Content",
      type: s.String,
      defaultValue: "\u2726 THANK YOU \u2726 FOR VISITING",
      displayTextArea: !0,
    },
    type: {
      title: "Type",
      type: s.Enum,
      options: ["circle", "ellipse", "graphic"],
      optionTitles: ["Circle", "Ellipse", "Graphic"],
      defaultValue: !0,
    },
    cylinderHeight: {
      title: "Height",
      type: s.Number,
      unit: "px",
      min: 0,
      max: 1e3,
      hidden: ({ type: t }) => t !== "ellipse",
    },
    rotate: {
      type: s.Boolean,
      title: "Rotate",
      defaultValue: !1,
      hidden: ({ type: t }) => t !== "circle",
    },
    rotateSpeed: {
      type: s.Number,
      title: "Speed",
      min: 0,
      max: 50,
      defaultValue: 5,
      displayStepper: !0,
      step: 1,
      hidden: ({ type: t, rotate: a }) => t !== "circle" || !a,
    },
    slots: {
      type: s.ComponentInstance,
      title: "Graphic",
      hidden: ({ type: t }) => t !== "graphic",
    },
    alignmentBaseline: {
      title: "Align",
      type: s.Enum,
      options: ["top", "center", "bottom"],
      optionIcons: ["align-top", "align-middle", "align-bottom"],
      defaultValue: "bottom",
      displaySegmentedControl: !0,
    },
    flip: {
      type: s.Boolean,
      defaultValue: !1,
      title: "Direction",
      enabledTitle: "CW",
      disabledTitle: "CCW",
      hidden: ({ type: t }) => t === "graphic",
    },
    startOffset: {
      title: "Offset",
      type: s.Number,
      defaultValue: 0,
      max: 360,
      unit: "\xB0",
      step: 0.5,
    },
    color: { title: "Color", type: s.Color, defaultValue: "#999" },
    font: {
      type: s.Font,
      title: "Font",
      controls: "extended",
      displayTextAlignment: !1,
    },
    wordSpacing: {
      type: s.Number,
      step: 1,
      defaultValue: 0,
      title: "Word",
      displayStepper: !0,
    },
    animate: { type: s.Boolean, defaultValue: !1, title: "Animate" },
    animateStart: {
      type: s.Number,
      min: -200,
      max: 200,
      step: 0.1,
      defaultValue: -50,
      title: "From",
      unit: "%",
      hidden: (t) => !t.animate,
    },
    animateEnd: {
      type: s.Number,
      min: -200,
      max: 200,
      step: 0.1,
      defaultValue: 150,
      title: "To",
      unit: "%",
      hidden: (t) => !t.animate,
    },
    animateDuration: {
      type: s.Number,
      min: 0,
      max: 50,
      defaultValue: 5,
      title: "Time",
      unit: "s",
      displayStepper: !0,
      hidden: (t) => !t.animate,
    },
  });
var st = (t) => t.split("=")[1].replace(/['"]+/g, ""),
  Bt = (t, a) => {
    let o = 50 - a,
      d = 50 + a;
    return t
      ? `M 0 50 L 0 ${d} A 1 1 0 1 0 100 ${d} L 100 ${o} A 1 1 0 1 0 0 ${o} L 0 50`
      : `M 0 50 L 0 ${o} A 1 1 0 0 1 100 ${o} L 100 50 L 100 ${d} A 1 1 0 0 1 0 ${d} L 0 ${o}`;
  },
  Rt = {
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
  zt = { fontSize: 32, marginBottom: 10 },
  Vt = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Ut = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 160,
    lineHeight: 1.5,
    textAlign: "center",
  };
var Et = 100,
  Ot = {
    left: (t) => `translateX(-${t}px)`,
    right: (t) => `translateX(${t}px)`,
    top: (t) => `translateY(-${t}px)`,
    bottom: (t) => `translateY(${t}px)`,
  },
  _r =
    typeof Animation < "u" &&
    typeof Animation.prototype.updatePlaybackRate == "function";
function Te(t) {
  let {
      slots: a,
      gap: o,
      padding: d,
      paddingPerSide: c,
      paddingTop: u,
      paddingRight: g,
      paddingBottom: R,
      paddingLeft: I,
      speed: b,
      hoverFactor: i,
      direction: j,
      alignment: U,
      sizingOptions: h,
      fadeOptions: W,
      style: z,
    } = t,
    {
      fadeContent: v,
      overflow: l,
      fadeWidth: ee,
      fadeInset: E,
      fadeAlpha: A,
    } = W,
    { widthType: O, heightType: se } = h,
    ce = c ? `${u}px ${g}px ${R}px ${I}px` : `${d}px`,
    r = Ne.current() === Ne.canvas,
    D = a.filter(Boolean),
    re = je.count(D),
    te = re > 0;
  j === !0 && (j = "left");
  let pe = j === "left" || j === "right",
    Re = zr(0),
    G = Ot[j],
    x = Vr(Re, G),
    ae = w(null),
    N = de(() => [sr(), sr()], []),
    [_e, Ft] = Rr({ parent: null, children: null }),
    Cr = [],
    ar = [],
    ze = 0,
    ir = 0;
  r && ((ze = re ? Math.floor(10 / re) : 0), (ir = 1)),
    !r &&
      te &&
      _e.parent &&
      ((ze = Math.round((_e.parent / _e.children) * 2) + 1),
      (ze = Math.min(ze, Et)),
      (ir = 1));
  let Fr = Tr(() => {
      if (te && ae.current) {
        let _ = pe ? ae.current.offsetWidth : ae.current.offsetHeight,
          S = N[0].current
            ? pe
              ? N[0].current.offsetLeft
              : N[0].current.offsetTop
            : 0,
          L =
            (N[1].current
              ? pe
                ? N[1].current.offsetLeft + N[1].current.offsetWidth
                : N[1].current.offsetTop + N[1].current.offsetHeight
              : 0) -
            S +
            o;
        Ft({ parent: _, children: L });
      }
    }, []),
    Nr = r ? { contentVisibility: "auto" } : {};
  if (te) {
    if (!r) {
      let _ = w(!0);
      Qe(
        () => (
          cr.read(Fr),
          Gr(ae.current, ({ contentSize: S }) => {
            !_.current && (S.width || S.height) && cr.read(Fr),
              (_.current = !1);
          })
        ),
        []
      );
    }
    Cr = je.map(D, (_, S) => {
      var ue, L, Se, ke;
      let Ie;
      S === 0 && (Ie = N[0]), S === D.length - 1 && (Ie = N[1]);
      let Fe = {
        width: O
          ? (ue = _.props) === null || ue === void 0
            ? void 0
            : ue.width
          : "100%",
        height: se
          ? (L = _.props) === null || L === void 0
            ? void 0
            : L.height
          : "100%",
      };
      return e(q, {
        inherit: "id",
        children: e("li", {
          ref: Ie,
          style: Fe,
          children: fr(
            _,
            {
              style: {
                ...((Se = _.props) === null || Se === void 0
                  ? void 0
                  : Se.style),
                ...Fe,
                flexShrink: 0,
                ...Nr,
              },
              layoutId: _.props.layoutId
                ? _.props.layoutId + "-original-" + S
                : void 0,
            },
            (ke = _.props) === null || ke === void 0 ? void 0 : ke.children
          ),
        }),
      });
    });
  }
  if (!r)
    for (let _ = 0; _ < ze; _++)
      ar = [
        ...ar,
        ...je.map(D, (S, ue) => {
          var L, Se, ke, Ie, Fe, mr;
          let Tt = {
            width: O
              ? (L = S.props) === null || L === void 0
                ? void 0
                : L.width
              : "100%",
            height: se
              ? (Se = S.props) === null || Se === void 0
                ? void 0
                : Se.height
              : "100%",
            willChange: "transform",
          };
          return e(
            q,
            {
              inherit: "id",
              children: e(
                "li",
                {
                  style: Tt,
                  "aria-hidden": !0,
                  children: fr(
                    S,
                    {
                      key: _ + " " + ue,
                      style: {
                        ...((ke = S.props) === null || ke === void 0
                          ? void 0
                          : ke.style),
                        width: O
                          ? (Ie = S.props) === null || Ie === void 0
                            ? void 0
                            : Ie.width
                          : "100%",
                        height: se
                          ? (Fe = S.props) === null || Fe === void 0
                            ? void 0
                            : Fe.height
                          : "100%",
                        flexShrink: 0,
                        ...Nr,
                      },
                      layoutId: S.props.layoutId
                        ? S.props.layoutId + "-dupe-" + _
                        : void 0,
                    },
                    (mr = S.props) === null || mr === void 0
                      ? void 0
                      : mr.children
                  ),
                },
                _ + "li" + ue
              ),
            },
            _ + "lg" + ue
          );
        }),
      ];
  let ie = _e.children + _e.children * Math.round(_e.parent / _e.children),
    nr = w(null),
    or = w(null),
    $e = w(0),
    dr = w(!1),
    Wr = Er(),
    Pr = w(null),
    K = w(null);
  if (!r) {
    let _ = qr(ae);
    _r
      ? (Qe(() => {
          if (!(Wr || !ie || !b))
            return (
              (K.current = Pr.current.animate(
                { transform: [G(0), G(ie)] },
                {
                  duration: (Math.abs(ie) / b) * 1e3,
                  iterations: 1 / 0,
                  easing: "linear",
                }
              )),
              () => K.current.cancel()
            );
        }, [i, ie, b]),
        Qe(() => {
          K.current &&
            (_ && K.current.playState === "paused"
              ? K.current.play()
              : !_ && K.current.playState === "running" && K.current.pause());
        }, [_]))
      : Ur((S) => {
          if (!ie || Wr || _r) return;
          nr.current === null && (nr.current = S), (S = S - nr.current);
          let L = (or.current === null ? 0 : S - or.current) * (b / 1e3);
          dr.current && (L *= i),
            ($e.current += L),
            ($e.current = Or(0, ie, $e.current)),
            (or.current = S),
            _ && Re.set($e.current);
        });
  }
  let Nt = pe ? "to right" : "to bottom",
    Ar = ee / 2,
    Wt = 100 - ee / 2,
    Pt = Yt(E, 0, Ar),
    At = 100 - E,
    lr = `linear-gradient(${Nt}, rgba(0, 0, 0, ${A}) ${Pt}%, rgba(0, 0, 0, 1) ${Ar}%, rgba(0, 0, 0, 1) ${Wt}%, rgba(0, 0, 0, ${A}) ${At}%)`;
  return te
    ? e("section", {
        style: {
          ...ct,
          opacity: ir,
          WebkitMaskImage: v ? lr : void 0,
          MozMaskImage: v ? lr : void 0,
          maskImage: v ? lr : void 0,
          overflow: l ? "visible" : "hidden",
          padding: ce,
        },
        ref: ae,
        children: f(n.ul, {
          ref: Pr,
          style: {
            ...ct,
            gap: o,
            top: j === "bottom" && pt(ie) ? -ie : void 0,
            left: j === "right" && pt(ie) ? -ie : void 0,
            placeItems: U,
            position: "relative",
            flexDirection: pe ? "row" : "column",
            ...z,
            willChange: r ? "auto" : "transform",
            transform: _r ? G(0) : x,
          },
          onMouseEnter: () => {
            (dr.current = !0), K.current && (K.current.playbackRate = i);
          },
          onMouseLeave: () => {
            (dr.current = !1), K.current && (K.current.playbackRate = 1);
          },
          children: [Cr, ar],
        }),
      })
    : f("section", {
        style: qt,
        children: [
          e("div", { style: Xt, children: "\u2728" }),
          e("p", { style: Dt, children: "Connect to Content" }),
          e("p", {
            style: Lt,
            children:
              "Add layers or components to infinitely loop on your page.",
          }),
        ],
      });
}
Te.defaultProps = {
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
M(Te, {
  slots: {
    type: s.Array,
    title: "Children",
    control: { type: s.ComponentInstance },
  },
  speed: {
    type: s.Number,
    title: "Speed",
    min: 0,
    max: 1e3,
    defaultValue: 100,
    unit: "%",
    displayStepper: !0,
    step: 5,
  },
  direction: {
    type: s.Enum,
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
    type: s.Enum,
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
  gap: { type: s.Number, title: "Gap" },
  padding: {
    title: "Padding",
    type: s.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  sizingOptions: {
    type: s.Object,
    title: "Sizing",
    controls: {
      widthType: {
        type: s.Boolean,
        title: "Width",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
      heightType: {
        type: s.Boolean,
        title: "Height",
        enabledTitle: "Auto",
        disabledTitle: "Stretch",
        defaultValue: !0,
      },
    },
  },
  fadeOptions: {
    type: s.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: s.Boolean, title: "Fade", defaultValue: !0 },
      overflow: {
        type: s.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(t) {
          return t.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: s.Number,
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
        type: s.Number,
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
        type: s.Number,
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
    type: s.Number,
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
var ct = {
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
  qt = {
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
  Xt = { fontSize: 32, marginBottom: 10 },
  Dt = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Lt = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center",
  },
  Yt = (t, a, o) => Math.min(Math.max(t, a), o),
  pt = (t) => typeof t == "number" && !isNaN(t);
Je.loadFonts(["GF;Unbounded-regular", "GF;Unbounded-700"]);
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
  ht = [
    '.framer-7fTja .framer-styles-preset-1dy6ejl:not(.rich-text-wrapper), .framer-7fTja .framer-styles-preset-1dy6ejl.rich-text-wrapper p { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.1px; --framer-line-height: 2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-eea41e84-741c-4ad1-8fa4-d13594d15041, #384036); --framer-text-decoration: none; --framer-text-transform: uppercase; }',
  ],
  gt = "framer-7fTja";
var Ht = C(he),
  Gt = { jtRuC2KMh: { hover: !0 }, XAfdliSj0: { hover: !0 } },
  Kt = ["jtRuC2KMh", "XAfdliSj0", "UYq6nen_u"],
  $t = "framer-yf96U",
  Qt = {
    jtRuC2KMh: "framer-v-1kfajd9",
    UYq6nen_u: "framer-v-7wlb4b",
    XAfdliSj0: "framer-v-1kaorwe",
  };
function Sr(t, ...a) {
  let o = {};
  return a?.forEach((d) => d && Object.assign(o, t[d])), o;
}
var Jt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Zt = (t, a) => `translateY(-50%) ${a}`,
  ea = ({ value: t, children: a }) => {
    let o = ve(Y),
      d = t ?? o.transition,
      c = de(() => ({ ...o, transition: d }), [JSON.stringify(d)]);
    return e(Y.Provider, { value: c, children: a });
  },
  ra = n(y),
  ta = {
    "Variant 3": "XAfdliSj0",
    "Variant 4": "UYq6nen_u",
    Dark: "jtRuC2KMh",
  },
  aa = ({
    height: t,
    hover: a,
    id: o,
    link: d,
    smoothScroll: c,
    tap: u,
    title: g,
    width: R,
    ...I
  }) => {
    var b, i, j;
    return {
      ...I,
      AIYkLNyqb:
        (b = g ?? I.AIYkLNyqb) !== null && b !== void 0 ? b : "GET IN TOUCH",
      bUC28knVO: a ?? I.bUC28knVO,
      Deo_eE5Hq: c ?? I.Deo_eE5Hq,
      DEX53qIxg: d ?? I.DEX53qIxg,
      kwSYrqJyJ: u ?? I.kwSYrqJyJ,
      variant:
        (j = (i = ta[I.variant]) !== null && i !== void 0 ? i : I.variant) !==
          null && j !== void 0
          ? j
          : "jtRuC2KMh",
    };
  },
  ia = (t, a) => a.join("-") + t.layoutDependency,
  na = ne(function (t, a) {
    let { activeLocale: o, setLocale: d } = le(),
      {
        style: c,
        className: u,
        layoutId: g,
        variant: R,
        bUC28knVO: I,
        kwSYrqJyJ: b,
        AIYkLNyqb: i,
        DEX53qIxg: j,
        Deo_eE5Hq: U,
        ...h
      } = aa(t),
      {
        baseVariant: W,
        classNames: z,
        gestureVariant: v,
        setGestureState: l,
        setVariant: ee,
        variants: E,
      } = be({
        cycleOrder: Kt,
        defaultVariant: "jtRuC2KMh",
        enabledGestures: Gt,
        variant: R,
        variantClassNames: Qt,
      }),
      A = ia(t, E),
      { activeVariantCallback: O, delay: se } = Pe(W),
      ce = O(async (...G) => {
        if (I && (await I(...G)) === !1) return !1;
      }),
      r = O(async (...G) => {
        if (b && (await b(...G)) === !1) return !1;
      }),
      D = w(null),
      re = () =>
        !(v === "XAfdliSj0-hover" || ["XAfdliSj0", "UYq6nen_u"].includes(W)),
      te = oe(),
      pe = [gt],
      Re = we();
    return e(q, {
      id: g ?? te,
      children: e(ra, {
        animate: E,
        initial: !1,
        children: e(ea, {
          value: Jt,
          children: e(Yr, {
            href: j,
            smoothScroll: U,
            children: f(n.a, {
              ...h,
              className: `${$(
                $t,
                ...pe,
                "framer-1kfajd9",
                u,
                z
              )} framer-site24`,
              "data-border": !0,
              "data-framer-name": "Dark",
              "data-highlight": !0,
              "data-reset": "button",
              layoutDependency: A,
              layoutId: "jtRuC2KMh",
              onHoverEnd: () => l({ isHovered: !1 }),
              onHoverStart: () => l({ isHovered: !0 }),
              onMouseEnter: ce,
              onMouseLeave: r,
              onTap: () => l({ isPressed: !1 }),
              onTapCancel: () => l({ isPressed: !1 }),
              onTapStart: () => l({ isPressed: !0 }),
              ref: a ?? D,
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
                ...c,
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
              ...Sr(
                {
                  "jtRuC2KMh-hover": { "data-framer-name": void 0 },
                  "XAfdliSj0-hover": { "data-framer-name": void 0 },
                  UYq6nen_u: { "data-framer-name": "Variant 4" },
                  XAfdliSj0: { "data-framer-name": "Variant 3" },
                },
                W,
                v
              ),
              children: [
                e(k, {
                  __fromCanvasComponent: !0,
                  children: e(y, {
                    children: e(n.p, {
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
                  layoutDependency: A,
                  layoutId: "Tj5KCEEzk",
                  style: {
                    "--extracted-r6o4lv": "rgb(33, 33, 33)",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    "--framer-paragraph-spacing": "0px",
                  },
                  text: i,
                  variants: {
                    XAfdliSj0: {
                      "--extracted-r6o4lv":
                        "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                    },
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                  ...Sr(
                    {
                      "XAfdliSj0-hover": {
                        children: e(y, {
                          children: e(n.p, {
                            className: "framer-styles-preset-1dy6ejl",
                            "data-styles-preset": "cQLuLB99o",
                            children: "GET IN TOUCH",
                          }),
                        }),
                      },
                      UYq6nen_u: {
                        children: e(y, {
                          children: e(n.p, {
                            className: "framer-styles-preset-1dy6ejl",
                            "data-styles-preset": "cQLuLB99o",
                            children: "GET IN TOUCH",
                          }),
                        }),
                      },
                      XAfdliSj0: {
                        children: e(y, {
                          children: e(n.p, {
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
                    W,
                    v
                  ),
                }),
                re() &&
                  e(m, {
                    children: e(n.div, {
                      className: "framer-1m4bmb1-container",
                      layoutDependency: A,
                      layoutId: "Bfod9mZJG-container",
                      style: { rotate: -45 },
                      variants: { "jtRuC2KMh-hover": { rotate: 0 } },
                      children: e(he, {
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
                re() &&
                  e(n.div, {
                    className: "framer-1djj7in",
                    layoutDependency: A,
                    layoutId: "HZ318x8L5",
                    style: {
                      backgroundColor:
                        "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(135, 186, 84))",
                      borderBottomLeftRadius: 12,
                      borderBottomRightRadius: 12,
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    },
                    transformTemplate: Zt,
                    variants: {
                      "jtRuC2KMh-hover": {
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                        borderTopLeftRadius: 100,
                        borderTopRightRadius: 100,
                      },
                    },
                    ...Sr(
                      { "jtRuC2KMh-hover": { transformTemplate: void 0 } },
                      W,
                      v
                    ),
                  }),
              ],
            }),
          }),
        }),
      }),
    });
  }),
  oa = [
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
    ...ht,
    '.framer-yf96U[data-border="true"]::after, .framer-yf96U [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Oe = H(na, oa, "framer-yf96U"),
  qe = Oe;
Oe.displayName = "Button - Nav";
Oe.defaultProps = { height: 43, width: 169 };
M(Oe, {
  variant: {
    options: ["jtRuC2KMh", "XAfdliSj0", "UYq6nen_u"],
    optionTitles: ["Dark", "Variant 3", "Variant 4"],
    title: "Variant",
    type: s.Enum,
  },
  bUC28knVO: { title: "Hover", type: s.EventHandler },
  kwSYrqJyJ: { title: "Tap", type: s.EventHandler },
  AIYkLNyqb: {
    defaultValue: "GET IN TOUCH",
    displayTextArea: !1,
    title: "Title",
    type: s.String,
  },
  DEX53qIxg: { title: "Link", type: s.Link },
  Deo_eE5Hq: { defaultValue: !1, title: "Smooth Scroll", type: s.Boolean },
});
me(
  Oe,
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
    ...Ht,
    ...fe(ut),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var da = C(he),
  la = ["zL5Ws02uY"],
  ma = "framer-vGt0i",
  fa = { zL5Ws02uY: "framer-v-w68j3f" };
var sa = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  ca = ({ value: t, children: a }) => {
    let o = ve(Y),
      d = t ?? o.transition,
      c = de(() => ({ ...o, transition: d }), [JSON.stringify(d)]);
    return e(Y.Provider, { value: c, children: a });
  },
  pa = n(y),
  ua = ({ height: t, id: a, title: o, width: d, ...c }) => {
    var u;
    return {
      ...c,
      EQMX6mAT1:
        (u = o ?? c.EQMX6mAT1) !== null && u !== void 0
          ? u
          : "Basic SEO Optimization",
    };
  },
  ha = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  ga = ne(function (t, a) {
    let { activeLocale: o, setLocale: d } = le(),
      {
        style: c,
        className: u,
        layoutId: g,
        variant: R,
        EQMX6mAT1: I,
        ...b
      } = ua(t),
      {
        baseVariant: i,
        classNames: j,
        gestureHandlers: U,
        gestureVariant: h,
        setGestureState: W,
        setVariant: z,
        variants: v,
      } = be({
        cycleOrder: la,
        defaultVariant: "zL5Ws02uY",
        variant: R,
        variantClassNames: fa,
      }),
      l = ha(t, v),
      ee = w(null),
      E = oe(),
      A = [],
      O = we();
    return e(q, {
      id: g ?? E,
      children: e(pa, {
        animate: v,
        initial: !1,
        children: e(ca, {
          value: sa,
          children: f(n.div, {
            ...b,
            ...U,
            className: $(ma, ...A, "framer-w68j3f", u, j),
            "data-framer-name": "Variant 1",
            layoutDependency: l,
            layoutId: "zL5Ws02uY",
            ref: a ?? ee,
            style: { ...c },
            children: [
              e(n.div, {
                className: "framer-pumotj",
                layoutDependency: l,
                layoutId: "hXDvZWhHp",
                children: e(m, {
                  children: e(n.div, {
                    className: "framer-ogc5hr-container",
                    layoutDependency: l,
                    layoutId: "lzC4pJX6v-container",
                    children: e(he, {
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
              e(k, {
                __fromCanvasComponent: !0,
                children: e(y, {
                  children: e(n.p, {
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
  Xe = H(ga, xa, "framer-vGt0i"),
  T = Xe;
Xe.displayName = "Pricing - Points Copy";
Xe.defaultProps = { height: 24, width: 191 };
M(Xe, {
  EQMX6mAT1: {
    defaultValue: "Basic SEO Optimization",
    displayTextArea: !1,
    title: "Title",
    type: s.String,
  },
});
me(
  Xe,
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
    ...da,
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ya = ["xijTTPX5J", "kxd9a0niT", "aWUSrldo3", "QTwCHtY9W"],
  va = "framer-voOKf",
  wa = {
    aWUSrldo3: "framer-v-gc4r03",
    kxd9a0niT: "framer-v-1pa0i1v",
    QTwCHtY9W: "framer-v-abg9il",
    xijTTPX5J: "framer-v-m5niue",
  };
function ba(t, ...a) {
  let o = {};
  return a?.forEach((d) => d && Object.assign(o, t[d])), o;
}
var _a = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Sa = ({ value: t, children: a }) => {
    let o = ve(Y),
      d = t ?? o.transition,
      c = de(() => ({ ...o, transition: d }), [JSON.stringify(d)]);
    return e(Y.Provider, { value: c, children: a });
  },
  ka = n(y),
  Ia = {
    "Variant 1": "xijTTPX5J",
    "Variant 2": "kxd9a0niT",
    "Variant 3": "aWUSrldo3",
    "Variant 4": "QTwCHtY9W",
  },
  ja = ({ height: t, id: a, width: o, ...d }) => {
    var c, u;
    return {
      ...d,
      variant:
        (u = (c = Ia[d.variant]) !== null && c !== void 0 ? c : d.variant) !==
          null && u !== void 0
          ? u
          : "xijTTPX5J",
    };
  },
  Ca = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Fa = ne(function (t, a) {
    let { activeLocale: o, setLocale: d } = le(),
      { style: c, className: u, layoutId: g, variant: R, ...I } = ja(t),
      {
        baseVariant: b,
        classNames: i,
        gestureHandlers: j,
        gestureVariant: U,
        setGestureState: h,
        setVariant: W,
        variants: z,
      } = be({
        cycleOrder: ya,
        defaultVariant: "xijTTPX5J",
        variant: R,
        variantClassNames: wa,
      }),
      v = Ca(t, z),
      { activeVariantCallback: l, delay: ee } = Pe(b),
      E = l(async (...te) => {
        h({ isPressed: !1 }), W("aWUSrldo3");
      }),
      A = l(async (...te) => {
        W("xijTTPX5J");
      }),
      O = w(null),
      se = () => b === "aWUSrldo3",
      ce = () => !["kxd9a0niT", "aWUSrldo3"].includes(b),
      r = oe(),
      D = [et],
      re = we();
    return e(q, {
      id: g ?? r,
      children: e(ka, {
        animate: z,
        initial: !1,
        children: e(Sa, {
          value: _a,
          children: f(n.div, {
            ...I,
            ...j,
            className: $(va, ...D, "framer-m5niue", u, i),
            "data-framer-name": "Variant 1",
            layoutDependency: v,
            layoutId: "xijTTPX5J",
            ref: a ?? O,
            style: { ...c },
            ...ba(
              {
                aWUSrldo3: {
                  "data-framer-name": "Variant 3",
                  "data-highlight": !0,
                  onTap: E,
                },
                kxd9a0niT: { "data-framer-name": "Variant 2" },
                QTwCHtY9W: {
                  "data-framer-name": "Variant 4",
                  "data-highlight": !0,
                  onTap: E,
                },
              },
              b,
              U
            ),
            children: [
              se() &&
                e(k, {
                  __fromCanvasComponent: !0,
                  children: e(y, {
                    children: e(n.h3, {
                      className: "framer-styles-preset-ravud2",
                      "data-styles-preset": "MjM7LH64L",
                      children: "                  \u20B95,999",
                    }),
                  }),
                  className: "framer-1bupoj6",
                  "data-highlight": !0,
                  fonts: ["Inter"],
                  layoutDependency: v,
                  layoutId: "LQSpJpiL5",
                  onTap: A,
                  style: {
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                  },
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              ce() &&
                e(k, {
                  __fromCanvasComponent: !0,
                  children: e(y, {
                    children: e(n.h3, {
                      className: "framer-styles-preset-ravud2",
                      "data-styles-preset": "MjM7LH64L",
                      children: "                    \u20B914,999",
                    }),
                  }),
                  className: "framer-bv07kt",
                  "data-highlight": !0,
                  fonts: ["Inter"],
                  layoutDependency: v,
                  layoutId: "UmZaAEMog",
                  onTap: A,
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
  Na = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-voOKf.framer-1e1mgvt, .framer-voOKf .framer-1e1mgvt { display: block; }",
    ".framer-voOKf.framer-m5niue { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 271px; }",
    ".framer-voOKf .framer-1bupoj6 { cursor: pointer; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 273px; word-break: break-word; word-wrap: break-word; }",
    ".framer-voOKf .framer-bv07kt { cursor: pointer; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-voOKf.framer-m5niue { gap: 0px; } .framer-voOKf.framer-m5niue > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-voOKf.framer-m5niue > :first-child { margin-left: 0px; } .framer-voOKf.framer-m5niue > :last-child { margin-right: 0px; } }",
    ".framer-voOKf.framer-v-1pa0i1v.framer-m5niue { min-height: 24px; }",
    ".framer-voOKf.framer-v-gc4r03.framer-m5niue, .framer-voOKf.framer-v-abg9il.framer-m5niue { cursor: pointer; }",
    ".framer-voOKf.framer-v-gc4r03 .framer-1bupoj6 { order: 0; }",
    ...Zr,
  ],
  De = H(Fa, Na, "framer-voOKf"),
  Le = De;
De.displayName = "Pricing - Amount Copy";
De.defaultProps = { height: 26, width: 271 };
M(De, {
  variant: {
    options: ["xijTTPX5J", "kxd9a0niT", "aWUSrldo3", "QTwCHtY9W"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4"],
    title: "Variant",
    type: s.Enum,
  },
});
me(
  De,
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
    ...fe(Jr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Wa = C(Le),
  Pa = C(T),
  Aa = C(qe),
  Ta = ["F0Ee8aztf", "K2PzpG2nv", "mFPnIauR1", "Soly03lik"],
  Ba = "framer-iBveW",
  Ra = {
    F0Ee8aztf: "framer-v-ykjqb1",
    K2PzpG2nv: "framer-v-7s1czs",
    mFPnIauR1: "framer-v-bgjbpo",
    Soly03lik: "framer-v-1b71epu",
  };
function F(t, ...a) {
  let o = {};
  return a?.forEach((d) => d && Object.assign(o, t[d])), o;
}
var za = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  Va = (t, a) => `translateX(-50%) ${a}`,
  Ua = ({ value: t, children: a }) => {
    let o = ve(Y),
      d = t ?? o.transition,
      c = de(() => ({ ...o, transition: d }), [JSON.stringify(d)]);
    return e(Y.Provider, { value: c, children: a });
  },
  Ea = n(y),
  Oa = {
    "Variant 1": "F0Ee8aztf",
    "Variant 2": "K2PzpG2nv",
    "Variant 3": "mFPnIauR1",
    "Variant 4": "Soly03lik",
  },
  qa = ({ height: t, id: a, tap: o, width: d, ...c }) => {
    var u, g;
    return {
      ...c,
      variant:
        (g = (u = Oa[c.variant]) !== null && u !== void 0 ? u : c.variant) !==
          null && g !== void 0
          ? g
          : "F0Ee8aztf",
      ySn3yyiXx: o ?? c.ySn3yyiXx,
    };
  },
  Xa = (t, a) =>
    t.layoutDependency ? a.join("-") + t.layoutDependency : a.join("-"),
  Da = ne(function (t, a) {
    let { activeLocale: o, setLocale: d } = le(),
      {
        style: c,
        className: u,
        layoutId: g,
        variant: R,
        ySn3yyiXx: I,
        ...b
      } = qa(t),
      {
        baseVariant: i,
        classNames: j,
        gestureHandlers: U,
        gestureVariant: h,
        setGestureState: W,
        setVariant: z,
        variants: v,
      } = be({
        cycleOrder: Ta,
        defaultVariant: "F0Ee8aztf",
        variant: R,
        variantClassNames: Ra,
      }),
      l = Xa(t, v),
      { activeVariantCallback: ee, delay: E } = Pe(i),
      A = ee(async (...D) => {
        if (I && (await I(...D)) === !1) return !1;
      }),
      O = w(null),
      se = oe(),
      ce = [],
      r = we();
    return e(q, {
      id: g ?? se,
      children: e(Ea, {
        animate: v,
        initial: !1,
        children: e(Ua, {
          value: za,
          children: f(n.div, {
            ...b,
            ...U,
            className: $(Ba, ...ce, "framer-ykjqb1", u, j),
            "data-framer-name": "Variant 1",
            layoutDependency: l,
            layoutId: "F0Ee8aztf",
            ref: a ?? O,
            style: { ...c },
            ...F(
              {
                K2PzpG2nv: { "data-framer-name": "Variant 2" },
                mFPnIauR1: { "data-framer-name": "Variant 3" },
                Soly03lik: { "data-framer-name": "Variant 4" },
              },
              i,
              h
            ),
            children: [
              e(n.div, {
                className: "framer-w5wrwb",
                layoutDependency: l,
                layoutId: "gKGudW44e",
              }),
              f(n.div, {
                className: "framer-141r4f9",
                layoutDependency: l,
                layoutId: "YVgNYRAyt",
                children: [
                  f(n.div, {
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
                      f(n.div, {
                        className: "framer-vjhh55",
                        layoutDependency: l,
                        layoutId: "wd3JSIOAo",
                        children: [
                          e(k, {
                            __fromCanvasComponent: !0,
                            children: e(y, {
                              children: e(n.h4, {
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
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-1otflg0-container",
                              layoutDependency: l,
                              layoutId: "ihmHUlu_h-container",
                              children: e(Le, {
                                height: "100%",
                                id: "ihmHUlu_h",
                                layoutId: "ihmHUlu_h",
                                style: { maxHeight: "100%", width: "100%" },
                                variant: "aWUSrldo3",
                                width: "100%",
                                ...F(
                                  {
                                    K2PzpG2nv: { variant: "kxd9a0niT" },
                                    Soly03lik: { variant: "kxd9a0niT" },
                                  },
                                  i,
                                  h
                                ),
                              }),
                            }),
                          }),
                        ],
                      }),
                      f(n.div, {
                        className: "framer-pd127h",
                        layoutDependency: l,
                        layoutId: "fQcwad_Bm",
                        children: [
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-1ofmcuh-container",
                              layoutDependency: l,
                              layoutId: "vDpu_1LGl-container",
                              children: e(T, {
                                EQMX6mAT1: "Full Fledeged Website",
                                height: "100%",
                                id: "vDpu_1LGl",
                                layoutId: "vDpu_1LGl",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-1og7afk-container",
                              layoutDependency: l,
                              layoutId: "ySXmlN95L-container",
                              children: e(T, {
                                EQMX6mAT1: "Payment Gateway",
                                height: "100%",
                                id: "ySXmlN95L",
                                layoutId: "ySXmlN95L",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-8xllg0-container",
                              layoutDependency: l,
                              layoutId: "nhY24JGas-container",
                              children: e(T, {
                                EQMX6mAT1: "Shipping Integration",
                                height: "100%",
                                id: "nhY24JGas",
                                layoutId: "nhY24JGas",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-2dubki-container",
                              layoutDependency: l,
                              layoutId: "qNCWTRXmD-container",
                              children: e(T, {
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
                      e(m, {
                        width: `calc(max((${
                          r?.width || "100vw"
                        } - 20px) / 3, 1px) - 40px)`,
                        ...F(
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
                          i,
                          h
                        ),
                        children: e(n.div, {
                          className: "framer-1jm9bzx-container",
                          layoutDependency: l,
                          layoutId: "LpnClSSbT-container",
                          children: e(qe, {
                            AIYkLNyqb: "Get Started",
                            Deo_eE5Hq: !1,
                            DEX53qIxg:
                              "https://calendly.com/contactblustdio/30min",
                            height: "100%",
                            id: "LpnClSSbT",
                            kwSYrqJyJ: A,
                            layoutId: "LpnClSSbT",
                            style: { width: "100%" },
                            variant: "XAfdliSj0",
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
                  f(n.div, {
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
                        "var(--token-175a2ee3-e73a-4465-a45f-78833a0f6493, rgba(13, 13, 13, 0.1))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    children: [
                      e(n.div, {
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
                        transformTemplate: Va,
                        children: e(k, {
                          __fromCanvasComponent: !0,
                          children: e(y, {
                            children: e(n.h4, {
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
                      f(n.div, {
                        className: "framer-l172py",
                        layoutDependency: l,
                        layoutId: "mD_3NOGoF",
                        children: [
                          e(k, {
                            __fromCanvasComponent: !0,
                            children: e(y, {
                              children: e(n.h4, {
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
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-1we498e-container",
                              layoutDependency: l,
                              layoutId: "zPeTk8wT3-container",
                              children: e(Le, {
                                height: "100%",
                                id: "zPeTk8wT3",
                                layoutId: "zPeTk8wT3",
                                style: { width: "100%" },
                                variant: "xijTTPX5J",
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      f(n.div, {
                        className: "framer-1ccc624",
                        layoutDependency: l,
                        layoutId: "joO1jkzTQ",
                        children: [
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-1cgbmg1-container",
                              layoutDependency: l,
                              layoutId: "AnvYgibW9-container",
                              children: e(T, {
                                EQMX6mAT1: "Ecommerce Initiator Pack",
                                height: "100%",
                                id: "AnvYgibW9",
                                layoutId: "AnvYgibW9",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-1tjyufv-container",
                              layoutDependency: l,
                              layoutId: "TdAqN5c1q-container",
                              children: e(T, {
                                EQMX6mAT1: "Branding & Advanced SEO",
                                height: "100%",
                                id: "TdAqN5c1q",
                                layoutId: "TdAqN5c1q",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-1003cd9-container",
                              layoutDependency: l,
                              layoutId: "xolurwfxv-container",
                              children: e(T, {
                                EQMX6mAT1: "Product Optimisation",
                                height: "100%",
                                id: "xolurwfxv",
                                layoutId: "xolurwfxv",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-6clae6-container",
                              layoutDependency: l,
                              layoutId: "pFrmmY1MN-container",
                              children: e(T, {
                                EQMX6mAT1: "Blogs & Articles",
                                height: "100%",
                                id: "pFrmmY1MN",
                                layoutId: "pFrmmY1MN",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-dt2ur-container",
                              layoutDependency: l,
                              layoutId: "YKE602X4V-container",
                              children: e(T, {
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
                      e(m, {
                        width: `calc(max((${
                          r?.width || "100vw"
                        } - 20px) / 3, 1px) - 40px)`,
                        ...F(
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
                          i,
                          h
                        ),
                        children: e(n.div, {
                          className: "framer-1q2gd0i-container",
                          layoutDependency: l,
                          layoutId: "JWZOChMZt-container",
                          children: e(qe, {
                            AIYkLNyqb: "Get Started",
                            Deo_eE5Hq: !1,
                            DEX53qIxg:
                              "https://calendly.com/contactblustdio/30min",
                            height: "100%",
                            id: "JWZOChMZt",
                            layoutId: "JWZOChMZt",
                            style: { width: "100%" },
                            variant: "UYq6nen_u",
                            width: "100%",
                          }),
                        }),
                      }),
                    ],
                  }),
                  f(n.div, {
                    className: "framer-65a6ln",
                    layoutDependency: l,
                    layoutId: "ZTKT0frSt",
                    style: {
                      backgroundColor:
                        "var(--token-16cecdcd-c5a5-4884-abaa-e0abd93e3514, rgba(255, 255, 255, 0.1))",
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    children: [
                      f(n.div, {
                        className: "framer-1jpvzke",
                        layoutDependency: l,
                        layoutId: "epFI8mE1c",
                        children: [
                          e(k, {
                            __fromCanvasComponent: !0,
                            children: e(y, {
                              children: e(n.h4, {
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
                                children: "  Branding & Creatives kit ",
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
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-lhfau-container",
                              layoutDependency: l,
                              layoutId: "iTlzTx0Wj-container",
                              children: e(Le, {
                                height: "100%",
                                id: "iTlzTx0Wj",
                                layoutId: "iTlzTx0Wj",
                                style: { width: "100%" },
                                variant: "aWUSrldo3",
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      f(n.div, {
                        className: "framer-k1k3z8",
                        layoutDependency: l,
                        layoutId: "RQBrHOvP2",
                        children: [
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-1h4zcxr-container",
                              layoutDependency: l,
                              layoutId: "G3zh8iFDk-container",
                              children: e(T, {
                                EQMX6mAT1: "Logo & Brand guidelines",
                                height: "100%",
                                id: "G3zh8iFDk",
                                layoutId: "G3zh8iFDk",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-va0r5a-container",
                              layoutDependency: l,
                              layoutId: "HxZIIvkxa-container",
                              children: e(T, {
                                EQMX6mAT1: "Font & color palletes",
                                height: "100%",
                                id: "HxZIIvkxa",
                                layoutId: "HxZIIvkxa",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-1qgo4ee-container",
                              layoutDependency: l,
                              layoutId: "DvqgAj9Nn-container",
                              children: e(T, {
                                EQMX6mAT1: "Packaging & Accesories Designs",
                                height: "100%",
                                id: "DvqgAj9Nn",
                                layoutId: "DvqgAj9Nn",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-op7ma2-container",
                              layoutDependency: l,
                              layoutId: "KlV3s25UI-container",
                              children: e(T, {
                                EQMX6mAT1: "Brand story",
                                height: "100%",
                                id: "KlV3s25UI",
                                layoutId: "KlV3s25UI",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                          e(m, {
                            width: `calc(max((${
                              r?.width || "100vw"
                            } - 20px) / 3, 1px) - 40px)`,
                            ...F(
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
                              i,
                              h
                            ),
                            children: e(n.div, {
                              className: "framer-s9d08g-container",
                              layoutDependency: l,
                              layoutId: "BjxNqueum-container",
                              children: e(T, {
                                EQMX6mAT1: "24/7 Priority Support",
                                height: "100%",
                                id: "BjxNqueum",
                                layoutId: "BjxNqueum",
                                style: { width: "100%" },
                                width: "100%",
                              }),
                            }),
                          }),
                        ],
                      }),
                      e(m, {
                        width: `calc(max((${
                          r?.width || "100vw"
                        } - 20px) / 3, 1px) - 40px)`,
                        ...F(
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
                          i,
                          h
                        ),
                        children: e(n.div, {
                          className: "framer-1d1yh5h-container",
                          layoutDependency: l,
                          layoutId: "D0mp_fTGM-container",
                          children: e(qe, {
                            AIYkLNyqb: "Get Started",
                            Deo_eE5Hq: !1,
                            DEX53qIxg:
                              "https://calendly.com/contactblustdio/30min",
                            height: "100%",
                            id: "D0mp_fTGM",
                            layoutId: "D0mp_fTGM",
                            style: { width: "100%" },
                            variant: "XAfdliSj0",
                            width: "100%",
                          }),
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
  La = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-iBveW.framer-15igmrp, .framer-iBveW .framer-15igmrp { display: block; }",
    ".framer-iBveW.framer-ykjqb1 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1120px; }",
    ".framer-iBveW .framer-w5wrwb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; min-height: 30px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-iBveW .framer-141r4f9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-iBveW .framer-bcp00i { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: auto; justify-content: center; overflow: hidden; padding: 30px 20px 20px 20px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-iBveW .framer-vjhh55, .framer-iBveW .framer-l172py, .framer-iBveW .framer-1jpvzke { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-iBveW .framer-1eohlfm, .framer-iBveW .framer-1o16gbn, .framer-iBveW .framer-imjj23, .framer-iBveW .framer-1r9xevy { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-iBveW .framer-1otflg0-container { flex: none; height: auto; max-height: 150%; position: relative; width: 100%; }",
    ".framer-iBveW .framer-pd127h, .framer-iBveW .framer-1ccc624 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-iBveW .framer-1ofmcuh-container, .framer-iBveW .framer-1og7afk-container, .framer-iBveW .framer-8xllg0-container, .framer-iBveW .framer-2dubki-container, .framer-iBveW .framer-1jm9bzx-container, .framer-iBveW .framer-1we498e-container, .framer-iBveW .framer-1cgbmg1-container, .framer-iBveW .framer-1tjyufv-container, .framer-iBveW .framer-1003cd9-container, .framer-iBveW .framer-6clae6-container, .framer-iBveW .framer-dt2ur-container, .framer-iBveW .framer-1q2gd0i-container, .framer-iBveW .framer-lhfau-container, .framer-iBveW .framer-1h4zcxr-container, .framer-iBveW .framer-va0r5a-container, .framer-iBveW .framer-1qgo4ee-container, .framer-iBveW .framer-op7ma2-container, .framer-iBveW .framer-s9d08g-container, .framer-iBveW .framer-1d1yh5h-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-iBveW .framer-p1483y { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: auto; justify-content: center; overflow: visible; padding: 30px 20px 20px 20px; position: relative; width: 1px; }",
    ".framer-iBveW .framer-oqhkic { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 83%; overflow: visible; padding: 3px 10px 3px 10px; position: absolute; top: -4px; width: min-content; z-index: 1; }",
    ".framer-iBveW .framer-65a6ln { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: auto; justify-content: center; overflow: hidden; padding: 30px 20px 20px 20px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-iBveW .framer-k1k3z8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-iBveW.framer-ykjqb1, .framer-iBveW .framer-w5wrwb, .framer-iBveW .framer-141r4f9, .framer-iBveW .framer-bcp00i, .framer-iBveW .framer-vjhh55, .framer-iBveW .framer-pd127h, .framer-iBveW .framer-p1483y, .framer-iBveW .framer-oqhkic, .framer-iBveW .framer-l172py, .framer-iBveW .framer-1ccc624, .framer-iBveW .framer-65a6ln, .framer-iBveW .framer-1jpvzke, .framer-iBveW .framer-k1k3z8 { gap: 0px; } .framer-iBveW.framer-ykjqb1 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-iBveW.framer-ykjqb1 > :first-child, .framer-iBveW .framer-w5wrwb > :first-child, .framer-iBveW .framer-bcp00i > :first-child, .framer-iBveW .framer-vjhh55 > :first-child, .framer-iBveW .framer-pd127h > :first-child, .framer-iBveW .framer-p1483y > :first-child, .framer-iBveW .framer-l172py > :first-child, .framer-iBveW .framer-1ccc624 > :first-child, .framer-iBveW .framer-65a6ln > :first-child, .framer-iBveW .framer-1jpvzke > :first-child, .framer-iBveW .framer-k1k3z8 > :first-child { margin-top: 0px; } .framer-iBveW.framer-ykjqb1 > :last-child, .framer-iBveW .framer-w5wrwb > :last-child, .framer-iBveW .framer-bcp00i > :last-child, .framer-iBveW .framer-vjhh55 > :last-child, .framer-iBveW .framer-pd127h > :last-child, .framer-iBveW .framer-p1483y > :last-child, .framer-iBveW .framer-l172py > :last-child, .framer-iBveW .framer-1ccc624 > :last-child, .framer-iBveW .framer-65a6ln > :last-child, .framer-iBveW .framer-1jpvzke > :last-child, .framer-iBveW .framer-k1k3z8 > :last-child { margin-bottom: 0px; } .framer-iBveW .framer-w5wrwb > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-iBveW .framer-141r4f9 > *, .framer-iBveW .framer-oqhkic > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-iBveW .framer-141r4f9 > :first-child, .framer-iBveW .framer-oqhkic > :first-child { margin-left: 0px; } .framer-iBveW .framer-141r4f9 > :last-child, .framer-iBveW .framer-oqhkic > :last-child { margin-right: 0px; } .framer-iBveW .framer-bcp00i > *, .framer-iBveW .framer-p1483y > *, .framer-iBveW .framer-65a6ln > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-iBveW .framer-vjhh55 > *, .framer-iBveW .framer-pd127h > *, .framer-iBveW .framer-l172py > *, .framer-iBveW .framer-1ccc624 > *, .framer-iBveW .framer-1jpvzke > *, .framer-iBveW .framer-k1k3z8 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    ".framer-iBveW.framer-v-bgjbpo .framer-141r4f9, .framer-iBveW.framer-v-1b71epu .framer-141r4f9 { flex-direction: column; max-width: 366px; }",
    ".framer-iBveW.framer-v-bgjbpo .framer-bcp00i, .framer-iBveW.framer-v-bgjbpo .framer-p1483y, .framer-iBveW.framer-v-1b71epu .framer-bcp00i, .framer-iBveW.framer-v-1b71epu .framer-p1483y { align-self: unset; flex: none; gap: 40px; width: 100%; }",
    ".framer-iBveW.framer-v-bgjbpo .framer-pd127h, .framer-iBveW.framer-v-bgjbpo .framer-1ccc624, .framer-iBveW.framer-v-1b71epu .framer-pd127h, .framer-iBveW.framer-v-1b71epu .framer-1ccc624 { flex: none; height: min-content; }",
    ".framer-iBveW.framer-v-bgjbpo .framer-imjj23 { order: 0; }",
    ".framer-iBveW.framer-v-bgjbpo .framer-1we498e-container { order: 1; }",
    ".framer-iBveW.framer-v-bgjbpo .framer-65a6ln, .framer-iBveW.framer-v-1b71epu .framer-65a6ln { flex: none; gap: 40px; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-iBveW.framer-v-bgjbpo .framer-141r4f9, .framer-iBveW.framer-v-bgjbpo .framer-bcp00i, .framer-iBveW.framer-v-bgjbpo .framer-p1483y, .framer-iBveW.framer-v-bgjbpo .framer-65a6ln { gap: 0px; } .framer-iBveW.framer-v-bgjbpo .framer-141r4f9 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-iBveW.framer-v-bgjbpo .framer-141r4f9 > :first-child, .framer-iBveW.framer-v-bgjbpo .framer-bcp00i > :first-child, .framer-iBveW.framer-v-bgjbpo .framer-p1483y > :first-child, .framer-iBveW.framer-v-bgjbpo .framer-65a6ln > :first-child { margin-top: 0px; } .framer-iBveW.framer-v-bgjbpo .framer-141r4f9 > :last-child, .framer-iBveW.framer-v-bgjbpo .framer-bcp00i > :last-child, .framer-iBveW.framer-v-bgjbpo .framer-p1483y > :last-child, .framer-iBveW.framer-v-bgjbpo .framer-65a6ln > :last-child { margin-bottom: 0px; } .framer-iBveW.framer-v-bgjbpo .framer-bcp00i > *, .framer-iBveW.framer-v-bgjbpo .framer-p1483y > *, .framer-iBveW.framer-v-bgjbpo .framer-65a6ln > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-iBveW.framer-v-1b71epu .framer-141r4f9, .framer-iBveW.framer-v-1b71epu .framer-bcp00i, .framer-iBveW.framer-v-1b71epu .framer-p1483y, .framer-iBveW.framer-v-1b71epu .framer-65a6ln { gap: 0px; } .framer-iBveW.framer-v-1b71epu .framer-141r4f9 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-iBveW.framer-v-1b71epu .framer-141r4f9 > :first-child, .framer-iBveW.framer-v-1b71epu .framer-bcp00i > :first-child, .framer-iBveW.framer-v-1b71epu .framer-p1483y > :first-child, .framer-iBveW.framer-v-1b71epu .framer-65a6ln > :first-child { margin-top: 0px; } .framer-iBveW.framer-v-1b71epu .framer-141r4f9 > :last-child, .framer-iBveW.framer-v-1b71epu .framer-bcp00i > :last-child, .framer-iBveW.framer-v-1b71epu .framer-p1483y > :last-child, .framer-iBveW.framer-v-1b71epu .framer-65a6ln > :last-child { margin-bottom: 0px; } .framer-iBveW.framer-v-1b71epu .framer-bcp00i > *, .framer-iBveW.framer-v-1b71epu .framer-p1483y > *, .framer-iBveW.framer-v-1b71epu .framer-65a6ln > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",
    '.framer-iBveW[data-border="true"]::after, .framer-iBveW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  Ye = H(Da, La, "framer-iBveW"),
  kr = Ye;
Ye.displayName = "Pricing Copy";
Ye.defaultProps = { height: 406, width: 1120 };
M(Ye, {
  variant: {
    options: ["F0Ee8aztf", "K2PzpG2nv", "mFPnIauR1", "Soly03lik"],
    optionTitles: ["Variant 1", "Variant 2", "Variant 3", "Variant 4"],
    title: "Variant",
    type: s.Enum,
  },
  ySn3yyiXx: { title: "Tap", type: s.EventHandler },
});
me(
  Ye,
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
    ...Wa,
    ...Pa,
    ...Aa,
  ],
  { supportsExplicitInterCodegen: !0 }
);
Je.loadFonts(["GF;Unbounded-regular", "GF;Unbounded-700"]);
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
  yt = [
    '.framer-4PwVY .framer-styles-preset-m5rh52:not(.rich-text-wrapper), .framer-4PwVY .framer-styles-preset-m5rh52.rich-text-wrapper h1 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 70px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -3px; --framer-line-height: 0.9em; --framer-paragraph-spacing: 1px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-4PwVY .framer-styles-preset-m5rh52:not(.rich-text-wrapper), .framer-4PwVY .framer-styles-preset-m5rh52.rich-text-wrapper h1 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 52px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -3px; --framer-line-height: 0.9em; --framer-paragraph-spacing: 1px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-4PwVY .framer-styles-preset-m5rh52:not(.rich-text-wrapper), .framer-4PwVY .framer-styles-preset-m5rh52.rich-text-wrapper h1 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -3px; --framer-line-height: 1em; --framer-paragraph-spacing: 1px; --framer-text-alignment: center; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  vt = "framer-4PwVY";
var Ma = C(pr),
  Ha = C(gr),
  Ga = C(Ze),
  Ir = Ve(n.div),
  Ka = C(Te),
  $a = C(he),
  Qa = C(br),
  Ja = Ve(Ue),
  Za = C(Ae),
  ei = C(Ee),
  V = Ve(P),
  rr = Ve(n.section),
  ri = C(kr),
  ti = C(X),
  ai = C(hr),
  ii = C(xr),
  ni = C(ur);
var oi = {
    OwNhynIYY: "(min-width: 1200px)",
    P7j2A2OCI: "(max-width: 809px)",
    WgNeKo_y1: "(min-width: 810px) and (max-width: 1199px)",
  },
  wt = () => typeof document < "u",
  bt = "framer-Sudoe",
  di = {
    OwNhynIYY: "framer-v-hvzz3m",
    P7j2A2OCI: "framer-v-1zvqox",
    WgNeKo_y1: "framer-v-1b4lfhe",
  },
  li = {
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
  kt = { damping: 85, delay: 0.4, mass: 1, stiffness: 212, type: "spring" },
  mi = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: kt,
    x: 0,
    y: -100,
  },
  Me = {
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
  Be = { damping: 85, delay: 0.2, mass: 1, stiffness: 212, type: "spring" },
  He = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Be,
    x: 0,
    y: 170,
  },
  Ge = {
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
  Ke = { damping: 30, delay: 0, mass: 1, stiffness: 118, type: "spring" },
  fi = {
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
  si = {
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
  Q = { bounceDamping: 30, bounceStiffness: 400, delay: 0, type: "inertia" },
  J = (t) => t.preventDefault(),
  Z = { cursor: "grabbing" },
  _t = (t, a) => `translateX(-50%) ${a}`,
  ci = {
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
  pi = {
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
  St = {
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
  ui = {
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
  B = { damping: 40, delay: 0.3, mass: 10, stiffness: 232, type: "spring" },
  hi = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: B,
    x: 0,
    y: -100,
  },
  gi = {
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
  xi = {
    opacity: 1,
    rotate: 50,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: B,
    x: 0,
    y: -120,
  },
  yi = {
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
  vi = {
    opacity: 1,
    rotate: -17,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: B,
    x: 0,
    y: -132,
  },
  wi = {
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
  bi = {
    opacity: 1,
    rotate: 40,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: B,
    x: 0,
    y: -130,
  },
  _i = {
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
  Si = {
    opacity: 1,
    rotate: 24,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: B,
    x: 0,
    y: -140,
  },
  ki = {
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
  Ii = {
    opacity: 1,
    rotate: 18,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: B,
    x: 0,
    y: -150,
  },
  ji = {
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
  Ci = {
    opacity: 1,
    rotate: -33,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: B,
    x: 0,
    y: -110,
  },
  Fi = {
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
  Ni = {
    opacity: 1,
    rotate: -10,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: B,
    x: 0,
    y: -120,
  },
  jr = yr(),
  Wi = { "Desktop-Wide": "OwNhynIYY", Phone: "P7j2A2OCI", Tablet: "WgNeKo_y1" },
  Pi = ({ height: t, id: a, width: o, ...d }) => {
    var c, u;
    return {
      ...d,
      variant:
        (u = (c = Wi[d.variant]) !== null && c !== void 0 ? c : d.variant) !==
          null && u !== void 0
          ? u
          : "OwNhynIYY",
    };
  },
  Ai = ne(function (t, a) {
    let { activeLocale: o, setLocale: d } = le(),
      {
        style: c,
        className: u,
        layoutId: g,
        variant: R,
        qGMvZtB2D: I,
        ...b
      } = Pi(t);
    Br(() => {
      let x = yr(void 0, o);
      if (((document.title = x.title || ""), x.viewport)) {
        var ae;
        (ae = document.querySelector('meta[name="viewport"]')) === null ||
          ae === void 0 ||
          ae.setAttribute("content", x.viewport);
      }
      if (x.robots) {
        let N = document.querySelector('meta[name="robots"]');
        N
          ? N.setAttribute("content", x.robots)
          : ((N = document.createElement("meta")),
            N.setAttribute("name", "robots"),
            N.setAttribute("content", x.robots),
            document.head.appendChild(N));
      }
      if (x.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((N) => N.startsWith("framer-body-"))
            .map((N) => document.body.classList.remove(N)),
          document.body.classList.add(`${x.bodyClassName}-framer-Sudoe`),
          () => {
            document.body.classList.remove(`${x.bodyClassName}-framer-Sudoe`);
          }
        );
    }, [void 0, o]);
    let [i, j] = Mr(R, oi, !1),
      U = void 0,
      h = w(null),
      W = Ce("jGFDk87Dh"),
      z = w(null),
      v = Ce("MERXQpASN"),
      l = w(null),
      ee = Ce("ffQKfJ0Kx"),
      E = w(null),
      A = Ce("Usy9pnRtq"),
      O = w(null),
      se = Xr(),
      ce = () => !!(!wt() || ["WgNeKo_y1", "P7j2A2OCI"].includes(i)),
      r = () => (wt() ? i !== "P7j2A2OCI" : !0),
      D = Ce("UaACQKPhS"),
      re = w(null),
      te = Ce("om1250aoL"),
      pe = w(null),
      Re = oe(),
      G = [vt, ot, mt, at, Qr];
    return (
      Dr({}),
      e(Lr.Provider, {
        value: { primaryVariantId: "OwNhynIYY", variantClassNames: di },
        children: f(q, {
          id: g ?? Re,
          children: [
            f(n.div, {
              ...b,
              className: $(bt, ...G, "framer-hvzz3m", u),
              ref: a ?? h,
              style: { ...c },
              children: [
                f("div", {
                  className: "framer-123wqig",
                  "data-framer-name": "Background",
                  name: "Background",
                  children: [
                    e(n.div, {
                      className: "framer-1bsjpkg",
                      "data-framer-name": "Overlay",
                      name: "Overlay",
                      style: { transformPerspective: 1200 },
                    }),
                    e(m, {
                      children: e(P, {
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
                e(m, {
                  width: "100vw",
                  children: e(P, {
                    className: "framer-icz1s2-container",
                    layoutScroll: !0,
                    children: e(p, {
                      breakpoint: i,
                      overrides: {
                        P7j2A2OCI: { variant: "qckzdw_18" },
                        WgNeKo_y1: { variant: "qckzdw_18" },
                      },
                      children: e(gr, {
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
                f("main", {
                  className: "framer-1ma85oo",
                  "data-framer-name": "Main",
                  name: "Main",
                  children: [
                    f("section", {
                      className: "framer-j1yqbq",
                      "data-framer-name": "Hero",
                      name: "Hero",
                      children: [
                        f(Ir, {
                          __framer__animate: { transition: kt },
                          __framer__animateOnce: !0,
                          __framer__enter: li,
                          __framer__exit: mi,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: "framer-j4z2v",
                          "data-framer-name": "Hero Heading Content",
                          name: "Hero Heading Content",
                          style: { transformPerspective: 1200 },
                          children: [
                            f("div", {
                              className: "framer-4w8l5h",
                              "data-framer-name": "Heading & Subheading",
                              name: "Heading & Subheading",
                              children: [
                                f("div", {
                                  className: "framer-fo77gx",
                                  children: [
                                    e(k, {
                                      __fromCanvasComponent: !0,
                                      children: e(y, {
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
                                      id: W,
                                      ref: z,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    e(n.div, {
                                      className: "framer-r4ysuh",
                                      style: { rotate: 3 },
                                      children: e(k, {
                                        __fromCanvasComponent: !0,
                                        children: e(y, {
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
                                        id: v,
                                        ref: l,
                                        style: { rotate: -3 },
                                        verticalAlignment: "top",
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                    e(k, {
                                      __fromCanvasComponent: !0,
                                      children: e(y, {
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
                                      id: ee,
                                      ref: E,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                    e("div", {
                                      className: "framer-1dzy20o",
                                      children: e(Ue, {
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
                                    e(k, {
                                      __fromCanvasComponent: !0,
                                      children: e(y, {
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
                                      id: A,
                                      ref: O,
                                      verticalAlignment: "top",
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                e(k, {
                                  __fromCanvasComponent: !0,
                                  children: e(y, {
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
                            e(We, {
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
                              children: (x) =>
                                e(m, {
                                  children: e(P, {
                                    className: "framer-99gncu-container",
                                    children: e(p, {
                                      breakpoint: i,
                                      overrides: {
                                        P7j2A2OCI: {
                                          DEX53qIxg: x[2],
                                          variant: "YVt9h3DM_",
                                        },
                                        WgNeKo_y1: { DEX53qIxg: x[1] },
                                      },
                                      children: e(Ze, {
                                        AIYkLNyqb: "Discover Blu",
                                        DEX53qIxg: x[0],
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
                        f(Ja, {
                          __framer__animate: { transition: Be },
                          __framer__animateOnce: !0,
                          __framer__enter: Me,
                          __framer__exit: He,
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
                            e(m, {
                              children: e(P, {
                                className: "framer-1d4gaqj-container",
                                children: e(Te, {
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
                                    e(n.div, { className: "framer-1gfdqz2" }),
                                  ],
                                  speed: 100,
                                  style: { height: "100%", width: "100%" },
                                  width: "100%",
                                }),
                              }),
                            }),
                            ce() &&
                              f(n.div, {
                                className: "framer-13d90j0 hidden-hvzz3m",
                                children: [
                                  e("div", {
                                    className: "framer-yfckd4",
                                    "data-framer-name": "Play Icon Wrapper",
                                    name: "Play Icon Wrapper",
                                    children: e(m, {
                                      children: e(P, {
                                        className: "framer-h255qi-container",
                                        children: e(p, {
                                          breakpoint: i,
                                          overrides: {
                                            P7j2A2OCI: {
                                              color:
                                                "var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(245, 131, 39))",
                                            },
                                          },
                                          children: e(he, {
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
                                    e(m, {
                                      children: e(P, {
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
                    e(p, {
                      breakpoint: i,
                      overrides: {
                        P7j2A2OCI: {
                          __framer__styleAppearEffectEnabled: void 0,
                          style: {},
                        },
                      },
                      children: e(rr, {
                        __framer__animate: { transition: Be },
                        __framer__animateOnce: !0,
                        __framer__enter: Me,
                        __framer__exit: He,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-skvjh4",
                        "data-framer-name": "Services",
                        name: "Services",
                        style: { transformPerspective: 1200 },
                        children: f("div", {
                          className: "framer-1u76kmz",
                          "data-framer-name": "Container",
                          name: "Container",
                          children: [
                            f("div", {
                              className: "framer-171tl",
                              "data-framer-name": "Heading Content Wrapper",
                              name: "Heading Content Wrapper",
                              children: [
                                e(p, {
                                  breakpoint: i,
                                  overrides: {
                                    P7j2A2OCI: {
                                      width:
                                        "min(max(100vw - 24px, 1px), 1440px)",
                                    },
                                  },
                                  children: e(m, {
                                    width:
                                      "min(max(100vw - 80px, 1px), 1440px)",
                                    children: e(P, {
                                      className: "framer-1xi7suj-container",
                                      children: e(p, {
                                        breakpoint: i,
                                        overrides: {
                                          P7j2A2OCI: {
                                            style: { width: "100%" },
                                            variant: "KJ1G3Id0e",
                                          },
                                          WgNeKo_y1: { variant: "lLa5v4PpE" },
                                        },
                                        children: e(Ae, {
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
                                e(We, {
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
                                  children: (x) =>
                                    e(m, {
                                      children: e(P, {
                                        className: "framer-lajn5l-container",
                                        children: e(p, {
                                          breakpoint: i,
                                          overrides: {
                                            P7j2A2OCI: {
                                              DEX53qIxg: x[2],
                                              variant: "YVt9h3DM_",
                                            },
                                            WgNeKo_y1: { DEX53qIxg: x[1] },
                                          },
                                          children: e(Ze, {
                                            AIYkLNyqb: "View All Services",
                                            DEX53qIxg: x[0],
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
                              children: f("div", {
                                className: "framer-s3790c",
                                children: [
                                  e(We, {
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
                                    children: (x) =>
                                      e(p, {
                                        breakpoint: i,
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
                                        children: e(m, {
                                          width:
                                            "max((min(max(100vw - 80px, 1px), 1440px) - 10px) / 2, 200px)",
                                          children: e(p, {
                                            breakpoint: i,
                                            overrides: {
                                              P7j2A2OCI: {
                                                __framer__styleAppearEffectEnabled:
                                                  void 0,
                                                style: {},
                                              },
                                            },
                                            children: e(V, {
                                              __framer__animate: {
                                                transition: Ke,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Ge,
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
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    ocFxhgdq4: x[2],
                                                  },
                                                  WgNeKo_y1: {
                                                    ocFxhgdq4: x[1],
                                                  },
                                                },
                                                children: e(Ee, {
                                                  height: "100%",
                                                  id: "mz1tkgmqQ",
                                                  iNyObSHzV:
                                                    "Our E-Commerce services are tailored for startups and growing businesses. The E-Commerce Initiator Pack provides essential tools to establish an online presence, including a full-fledged website, payment gateway, shipping integration, pixel integration, and email support & chatbot. The E-Commerce Enterprise Pack adds branding, product optimization, SEO, and blog & article services for a comprehensive online business solution.",
                                                  layoutId: "mz1tkgmqQ",
                                                  lxVLvSShs: "Browser",
                                                  ocFxhgdq4: x[0],
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
                                  e(We, {
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
                                    children: (x) =>
                                      e(p, {
                                        breakpoint: i,
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
                                        children: e(m, {
                                          width:
                                            "max((min(max(100vw - 80px, 1px), 1440px) - 10px) / 2, 200px)",
                                          children: e(p, {
                                            breakpoint: i,
                                            overrides: {
                                              P7j2A2OCI: {
                                                __framer__styleAppearEffectEnabled:
                                                  void 0,
                                                style: {},
                                              },
                                            },
                                            children: e(V, {
                                              __framer__animate: {
                                                transition: Ke,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Ge,
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
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    ocFxhgdq4: x[2],
                                                  },
                                                  WgNeKo_y1: {
                                                    ocFxhgdq4: x[1],
                                                  },
                                                },
                                                children: e(Ee, {
                                                  height: "100%",
                                                  id: "yMegrk7bW",
                                                  iNyObSHzV:
                                                    "Our Branding & Creatives services help you develop a strong brand identity. This includes logo design, brand guidelines, font & color palettes, packaging & accessories designs, and crafting a compelling brand story to make your business stand out.",
                                                  layoutId: "yMegrk7bW",
                                                  lxVLvSShs: "Article",
                                                  ocFxhgdq4: x[0],
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
                                  e(We, {
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
                                    children: (x) =>
                                      e(p, {
                                        breakpoint: i,
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
                                        children: e(m, {
                                          width:
                                            "max((min(max(100vw - 80px, 1px), 1440px) - 10px) / 2, 200px)",
                                          children: e(p, {
                                            breakpoint: i,
                                            overrides: {
                                              P7j2A2OCI: {
                                                __framer__styleAppearEffectEnabled:
                                                  void 0,
                                                style: {},
                                              },
                                            },
                                            children: e(V, {
                                              __framer__animate: {
                                                transition: Ke,
                                              },
                                              __framer__animateOnce: !0,
                                              __framer__enter: Ge,
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
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    ocFxhgdq4: x[2],
                                                  },
                                                  WgNeKo_y1: {
                                                    ocFxhgdq4: x[1],
                                                  },
                                                },
                                                children: e(Ee, {
                                                  height: "100%",
                                                  id: "MRzPkaxzY",
                                                  iNyObSHzV:
                                                    "Our Marketing & Awareness services boost online visibility and engagement. We offer SEO and Local SEO to improve search rankings, and Facebook & Instagram Marketing with influencer collaborations and guaranteed ROAS, ensuring effective reach and customer acquisition.",
                                                  layoutId: "MRzPkaxzY",
                                                  lxVLvSShs: "InstagramLogo",
                                                  ocFxhgdq4: x[0],
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
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    e(p, {
                      breakpoint: i,
                      overrides: {
                        P7j2A2OCI: {
                          __framer__styleAppearEffectEnabled: void 0,
                          style: {},
                        },
                      },
                      children: e(rr, {
                        __framer__animate: { transition: Be },
                        __framer__animateOnce: !0,
                        __framer__enter: Me,
                        __framer__exit: He,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-1ncy7c0",
                        "data-framer-name": "Pricing",
                        id: D,
                        name: "Pricing",
                        ref: re,
                        style: { transformPerspective: 1200 },
                        children: f("div", {
                          className: "framer-1ycslwf",
                          "data-framer-name": "Container",
                          name: "Container",
                          children: [
                            e(p, {
                              breakpoint: i,
                              overrides: {
                                P7j2A2OCI: {
                                  width: "min(max(100vw - 24px, 1px), 1440px)",
                                },
                                WgNeKo_y1: {
                                  width:
                                    "min(min(max(100vw - 80px, 1px), 1000px), 1440px)",
                                },
                              },
                              children: e(m, {
                                width: "min(max(100vw - 80px, 1px), 1440px)",
                                children: e(P, {
                                  className: "framer-bmjcpe-container",
                                  children: e(Ae, {
                                    ExBt4bIY2: "Explore Our Plans",
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
                            e(p, {
                              breakpoint: i,
                              overrides: {
                                P7j2A2OCI: {
                                  width: "min(max(100vw - 24px, 1px), 1440px)",
                                },
                                WgNeKo_y1: {
                                  width: "min(max(100vw - 80px, 1px), 1000px)",
                                },
                              },
                              children: e(m, {
                                width: "min(max(100vw - 80px, 1px), 1440px)",
                                children: e(P, {
                                  className: "framer-8aj6qy-container",
                                  children: e(p, {
                                    breakpoint: i,
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
                          ],
                        }),
                      }),
                    }),
                    e(p, {
                      breakpoint: i,
                      overrides: {
                        P7j2A2OCI: {
                          __framer__styleAppearEffectEnabled: void 0,
                          style: {},
                        },
                      },
                      children: e(rr, {
                        __framer__animate: { transition: Be },
                        __framer__animateOnce: !0,
                        __framer__enter: Me,
                        __framer__exit: He,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-17tncu9",
                        "data-framer-name": "Specialities",
                        name: "Specialities",
                        style: { transformPerspective: 1200 },
                        children: f("div", {
                          className: "framer-1mng6ye",
                          "data-framer-name": "Container",
                          name: "Container",
                          children: [
                            e(p, {
                              breakpoint: i,
                              overrides: {
                                P7j2A2OCI: {
                                  width: "min(max(100vw - 24px, 1px), 1440px)",
                                },
                              },
                              children: e(m, {
                                width: "min(max(100vw - 80px, 1px), 1440px)",
                                children: e(P, {
                                  className: "framer-18fk8li-container",
                                  children: e(p, {
                                    breakpoint: i,
                                    overrides: {
                                      P7j2A2OCI: { variant: "KJ1G3Id0e" },
                                      WgNeKo_y1: { variant: "KJ1G3Id0e" },
                                    },
                                    children: e(Ae, {
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
                            f("div", {
                              className: "framer-x3dn5k",
                              children: [
                                e(p, {
                                  breakpoint: i,
                                  overrides: {
                                    P7j2A2OCI: {
                                      __framer__styleAppearEffectEnabled:
                                        void 0,
                                      style: {},
                                    },
                                  },
                                  children: f(Ir, {
                                    __framer__animate: { transition: Ke },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Ge,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-1wd7iy1",
                                    style: { transformPerspective: 1200 },
                                    children: [
                                      e(p, {
                                        breakpoint: i,
                                        overrides: {
                                          P7j2A2OCI: {
                                            background: {
                                              alt: "",
                                              fit: "fill",
                                              intrinsicHeight: 667,
                                              intrinsicWidth: 1e3,
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
                                                "max((max(100vw - 80px, 1px) - 10px) / 1.5, 1px)",
                                              src: "./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg",
                                              srcSet:
                                                "./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg?scale-down-to=512 512w,./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg 1000w",
                                            },
                                          },
                                        },
                                        children: f(Ue, {
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
                                              "max((min(max(100vw - 80px, 1px), 1440px) - 10px) / 1.5, 1px)",
                                            src: "./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg",
                                            srcSet:
                                              "./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg?scale-down-to=512 512w,./images/tpbW8SIi5ra8nVMEwdsyHi8dw.jpg 1000w",
                                          },
                                          className: "framer-1s6yyb6",
                                          children: [
                                            e("div", {
                                              className: "framer-dt0c77",
                                            }),
                                            f("div", {
                                              className: "framer-1e8ossu",
                                              children: [
                                                e(k, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(y, {
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
                                                e(k, {
                                                  __fromCanvasComponent: !0,
                                                  children: e(y, {
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
                                              children: e(k, {
                                                __fromCanvasComponent: !0,
                                                children: e(y, {
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
                                      e("div", {
                                        className: "framer-3wze62",
                                        children: e("div", {
                                          className: "framer-ftuw84",
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                e(p, {
                                  breakpoint: i,
                                  overrides: {
                                    P7j2A2OCI: {
                                      __framer__styleAppearEffectEnabled:
                                        void 0,
                                      style: {},
                                    },
                                  },
                                  children: f(Ir, {
                                    __framer__animate: { transition: Ke },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Ge,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: "framer-te7zln",
                                    style: { transformPerspective: 1200 },
                                    children: [
                                      e(Ue, {
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
                                        children: f("div", {
                                          className: "framer-13o8rur",
                                          "data-border": !0,
                                          children: [
                                            e(m, {
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(V, {
                                                  __framer__animate: {
                                                    transition: It,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: fi,
                                                  __framer__exit: si,
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
                                                  dragTransition: Q,
                                                  onMouseDown: J,
                                                  style: {
                                                    transformPerspective: 1200,
                                                  },
                                                  transformTemplate: _t,
                                                  whileTap: Z,
                                                  children: e(X, {
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
                                            e(m, {
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(V, {
                                                  __framer__animate: {
                                                    transition: jt,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: ci,
                                                  __framer__exit: pi,
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
                                                  dragTransition: Q,
                                                  onMouseDown: J,
                                                  style: {
                                                    rotate: 2,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: Z,
                                                  children: e(X, {
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
                                            e(m, {
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(V, {
                                                  __framer__animate: {
                                                    transition: Ct,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: St,
                                                  __framer__exit: ui,
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
                                                  dragTransition: Q,
                                                  onMouseDown: J,
                                                  style: {
                                                    rotate: -4,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: Z,
                                                  children: e(X, {
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
                                            e(m, {
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(V, {
                                                  __framer__animate: {
                                                    transition: B,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: St,
                                                  __framer__exit: hi,
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
                                                  dragTransition: Q,
                                                  onMouseDown: J,
                                                  style: {
                                                    rotate: -17,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: Z,
                                                  children: e(X, {
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
                                            e(m, {
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(V, {
                                                  __framer__animate: {
                                                    transition: B,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: gi,
                                                  __framer__exit: xi,
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
                                                  dragTransition: Q,
                                                  onMouseDown: J,
                                                  style: {
                                                    rotate: -14,
                                                    transformPerspective: 1200,
                                                  },
                                                  transformTemplate: _t,
                                                  whileTap: Z,
                                                  children: e(X, {
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
                                            e(m, {
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(V, {
                                                  __framer__animate: {
                                                    transition: B,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: yi,
                                                  __framer__exit: vi,
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
                                                  dragTransition: Q,
                                                  onMouseDown: J,
                                                  style: {
                                                    rotate: 11,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: Z,
                                                  children: e(X, {
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
                                            e(m, {
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(V, {
                                                  __framer__animate: {
                                                    transition: B,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: wi,
                                                  __framer__exit: bi,
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
                                                  dragTransition: Q,
                                                  onMouseDown: J,
                                                  style: {
                                                    rotate: 11,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: Z,
                                                  children: e(X, {
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
                                            e(m, {
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(V, {
                                                  __framer__animate: {
                                                    transition: B,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: _i,
                                                  __framer__exit: Si,
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
                                                  dragTransition: Q,
                                                  onMouseDown: J,
                                                  style: {
                                                    rotate: -15,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: Z,
                                                  children: e(X, {
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
                                            e(m, {
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(V, {
                                                  __framer__animate: {
                                                    transition: B,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: ki,
                                                  __framer__exit: Ii,
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
                                                  dragTransition: Q,
                                                  onMouseDown: J,
                                                  style: {
                                                    rotate: 3,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: Z,
                                                  children: e(X, {
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
                                            e(m, {
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(V, {
                                                  __framer__animate: {
                                                    transition: B,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: ji,
                                                  __framer__exit: Ci,
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
                                                  dragTransition: Q,
                                                  onMouseDown: J,
                                                  style: {
                                                    rotate: 24,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: Z,
                                                  children: e(X, {
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
                                            e(m, {
                                              children: e(p, {
                                                breakpoint: i,
                                                overrides: {
                                                  P7j2A2OCI: {
                                                    drag: void 0,
                                                    whileTap: void 0,
                                                  },
                                                },
                                                children: e(V, {
                                                  __framer__animate: {
                                                    transition: B,
                                                  },
                                                  __framer__animateOnce: !0,
                                                  __framer__enter: Fi,
                                                  __framer__exit: Ni,
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
                                                  dragTransition: Q,
                                                  onMouseDown: J,
                                                  style: {
                                                    rotate: -28,
                                                    transformPerspective: 1200,
                                                  },
                                                  whileTap: Z,
                                                  children: e(X, {
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
                                      f("div", {
                                        className: "framer-n263oc",
                                        children: [
                                          f("div", {
                                            className: "framer-elyyqd",
                                            children: [
                                              e(k, {
                                                __fromCanvasComponent: !0,
                                                children: e(y, {
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
                                              e(k, {
                                                __fromCanvasComponent: !0,
                                                children: e(y, {
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
                                          e(k, {
                                            __fromCanvasComponent: !0,
                                            children: e(y, {
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
                    e(p, {
                      breakpoint: i,
                      overrides: {
                        P7j2A2OCI: {
                          __framer__styleAppearEffectEnabled: void 0,
                          style: {},
                        },
                      },
                      children: e(rr, {
                        __framer__animate: { transition: Be },
                        __framer__animateOnce: !0,
                        __framer__enter: Me,
                        __framer__exit: He,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-o6dgbz",
                        "data-framer-name": "FAQ",
                        id: te,
                        name: "FAQ",
                        ref: pe,
                        style: { transformPerspective: 1200 },
                        children: f("div", {
                          className: "framer-19j62tj",
                          "data-framer-name": "Container",
                          name: "Container",
                          children: [
                            e(p, {
                              breakpoint: i,
                              overrides: {
                                P7j2A2OCI: {
                                  width: "min(max(100vw - 24px, 1px), 1440px)",
                                },
                                WgNeKo_y1: {
                                  width:
                                    "min(min(max(100vw - 80px, 1px), 1000px), 1440px)",
                                },
                              },
                              children: e(m, {
                                width: "min(max(100vw - 80px, 1px), 1440px)",
                                children: e(P, {
                                  className: "framer-1f2u7rm-container",
                                  children: e(Ae, {
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
                            e(p, {
                              breakpoint: i,
                              overrides: {
                                P7j2A2OCI: {
                                  width:
                                    "min(min(max(100vw - 24px, 1px), 1440px), 1000px)",
                                },
                                WgNeKo_y1: {
                                  width: "min(max(100vw - 80px, 1px), 1000px)",
                                },
                              },
                              children: e(m, {
                                width:
                                  "min(min(max(100vw - 80px, 1px), 1440px), 1000px)",
                                children: e(P, {
                                  className: "framer-dv02ol-container",
                                  children: e(hr, {
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
                e(m, {
                  width: "100vw",
                  children: e(P, {
                    className: "framer-q3g1oe-container",
                    children: e(p, {
                      breakpoint: i,
                      overrides: {
                        P7j2A2OCI: { variant: "BsZlXwif2" },
                        WgNeKo_y1: { variant: "mKXCPqfUG" },
                      },
                      children: e(xr, {
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
                e(m, {
                  children: e(P, {
                    className: "framer-1bn53kh-container",
                    layoutScroll: !0,
                    children: e(ur, {
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
            e("div", { className: $(bt, ...G), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Ti = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${jr.bodyClassName}-framer-Sudoe { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0)); }`,
    ".framer-Sudoe.framer-k7qaoj, .framer-Sudoe .framer-k7qaoj { display: block; }",
    ".framer-Sudoe.framer-hvzz3m { align-content: center; align-items: center; background-color: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, #000000); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }",
    ".framer-Sudoe .framer-123wqig { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: fixed; top: 0px; width: 100%; z-index: 0; }",
    '.framer-Sudoe .framer-1bsjpkg { background: radial-gradient(43.2% 25% at 50% 18.8%, rgba(84, 84, 84, 0) 0%, var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10)) /* {"name":"Dark Green"} */ 100%); flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }',
    ".framer-Sudoe .framer-ne3cqe-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: relative; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-Sudoe .framer-icz1s2-container { flex: none; height: auto; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 10; }",
    ".framer-Sudoe .framer-1ma85oo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-Sudoe .framer-j1yqbq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 31px; height: min-content; justify-content: center; overflow: visible; padding: 180px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-j4z2v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-4w8l5h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 293px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-fo77gx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 10px; height: min-content; justify-content: center; max-width: 850px; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-jbkn8z, .framer-Sudoe .framer-1ty6ljs, .framer-Sudoe .framer-harf3f { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 740px; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }",
    ".framer-Sudoe .framer-r4ysuh { align-content: center; align-items: center; background-color: var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, #9154ba); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }",
    ".framer-Sudoe .framer-n2iyub { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
    ".framer-Sudoe .framer-1dzy20o { align-content: center; align-items: center; background-color: var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, #9154ba); border-bottom-left-radius: 180px; border-bottom-right-radius: 180px; border-top-left-radius: 180px; border-top-right-radius: 180px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 73px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 73px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Sudoe .framer-1h8vqsn { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 73px); overflow: hidden; position: relative; width: 73px; }",
    ".framer-Sudoe .framer-1c0jjav { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-Sudoe .framer-99gncu-container, .framer-Sudoe .framer-lajn5l-container { flex: none; height: auto; position: relative; width: auto; }",
    '.framer-Sudoe .framer-1urq87d { background: linear-gradient(180deg, rgba(191, 51, 19, 0) 16.353996101364523%, var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, rgb(191, 51, 19)) /* {"name":"Light Green"} */ 77.35485380116958%); bottom: 0px; flex: none; height: 855px; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; width: 100%; z-index: -1; }',
    ".framer-Sudoe .framer-1sk6zfr { -webkit-filter: contrast(1.23) grayscale(0.14); filter: contrast(1.23) grayscale(0.14); flex: none; height: 678px; overflow: visible; position: relative; width: 100%; }",
    '.framer-Sudoe .framer-m94qqz { background: linear-gradient(180deg, rgba(84, 84, 84, 0) 41.63993900835976%, var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0)) /* {"name":"Dark Green"} */ 100%); bottom: 0px; flex: none; height: 182px; left: 0px; overflow: hidden; position: absolute; width: 100%; }',
    ".framer-Sudoe .framer-1d4gaqj-container { flex: none; height: 320px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 196px; width: 100%; z-index: -1; }",
    ".framer-Sudoe .framer-1gfdqz2 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 127px; justify-content: center; min-width: 1339px; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
    ".framer-Sudoe .framer-13d90j0 { -webkit-backdrop-filter: blur(5px); align-content: center; align-items: center; backdrop-filter: blur(5px); background-color: var(--token-affa1b72-7c43-4531-b217-6ad9a97be289, rgba(255, 255, 255, 0.05)); border-bottom-left-radius: 123px; border-bottom-right-radius: 123px; border-top-left-radius: 123px; border-top-right-radius: 123px; bottom: 0px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 79px; justify-content: center; overflow: hidden; padding: 1px; pointer-events: none; position: absolute; right: 365px; width: 79px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Sudoe .framer-yfckd4 { aspect-ratio: 1 / 1; background-color: rgba(242, 236, 230, 0.43); border-bottom-left-radius: 170px; border-bottom-right-radius: 170px; border-top-left-radius: 170px; border-top-right-radius: 170px; flex: none; height: var(--framer-aspect-ratio-supported, 66px); left: 51%; overflow: hidden; position: absolute; top: 51%; transform: translate(-50%, -50%); width: 66px; will-change: var(--framer-will-change-override, transform); z-index: 0; }",
    ".framer-Sudoe .framer-h255qi-container { flex: none; height: 38px; left: calc(48.80952380952383% - 38px / 2); position: absolute; top: calc(48.80952380952383% - 38px / 2); width: 38px; }",
    ".framer-Sudoe .framer-1ql1gnv-container { flex: none; height: 60px; left: calc(50.63291139240509% - 60px / 2); position: absolute; top: calc(50.63291139240509% - 60px / 2); width: 60px; z-index: 1; }",
    ".framer-Sudoe .framer-skvjh4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 150px 40px 100px 40px; position: relative; width: 100%; z-index: 1; }",
    ".framer-Sudoe .framer-1u76kmz, .framer-Sudoe .framer-1mng6ye { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; }",
    ".framer-Sudoe .framer-171tl { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-Sudoe .framer-1xi7suj-container, .framer-Sudoe .framer-bmjcpe-container, .framer-Sudoe .framer-1f2u7rm-container { flex: none; height: auto; max-width: 1440px; position: relative; width: 100%; z-index: 1; }",
    ".framer-Sudoe .framer-py75l2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-s3790c { display: grid; flex: none; gap: 10px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(200px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-mrpq24-container, .framer-Sudoe .framer-p1yvjz-container, .framer-Sudoe .framer-w8x50v-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; z-index: 1; }",
    ".framer-Sudoe .framer-1ncy7c0, .framer-Sudoe .framer-17tncu9, .framer-Sudoe .framer-o6dgbz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 100px 40px 100px 40px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-1ycslwf { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }",
    ".framer-Sudoe .framer-8aj6qy-container, .framer-Sudoe .framer-q3g1oe-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-18fk8li-container { flex: none; height: auto; max-width: 1440px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-x3dn5k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-1wd7iy1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 460px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-1s6yyb6 { align-content: flex-start; align-items: flex-start; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100%; justify-content: flex-end; overflow: hidden; padding: 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    '.framer-Sudoe .framer-dt0c77 { background: linear-gradient(243deg, rgba(84, 84, 84, 0) 54.70541257678578%, var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0)) /* {"name":"Dark Green"} */ 84.420754785216%); bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 0; }',
    ".framer-Sudoe .framer-1e8ossu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 50%; }",
    ".framer-Sudoe .framer-1rbiegj, .framer-Sudoe .framer-1b8zfmf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 90px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-Sudoe .framer-a14alj, .framer-Sudoe .framer-g4ukzm { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-Sudoe .framer-1gbj1uu { -webkit-backdrop-filter: blur(5px); align-content: center; align-items: center; backdrop-filter: blur(5px); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 10px 10px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Sudoe .framer-b2npcv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; opacity: 0.8; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }",
    ".framer-Sudoe .framer-3wze62 { align-content: center; align-items: center; background-color: var(--token-2c77483b-74d5-40f8-b894-5fb4dc69010e, #1f1d1d); border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: hidden; padding: 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Sudoe .framer-ftuw84 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 26px; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-te7zln { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 460px; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-1smoyra { align-content: center; align-items: center; border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: 0.5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Sudoe .framer-13o8rur { --border-bottom-width: 1px; --border-color: var(--token-8296390c-3e4f-4c48-afd6-ee4e9808dfbe, rgba(255, 255, 255, 0.5)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-backdrop-filter: blur(8px); aspect-ratio: 1 / 1; backdrop-filter: blur(8px); border-bottom-left-radius: 350px; border-bottom-right-radius: 350px; border-top-left-radius: 350px; border-top-right-radius: 350px; flex: none; height: var(--framer-aspect-ratio-supported, 366px); overflow: hidden; position: relative; width: 366px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Sudoe .framer-1jmnool-container { bottom: 0px; cursor: grab; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; z-index: 1; }",
    ".framer-Sudoe .framer-1r0o321-container { bottom: 47px; cursor: grab; flex: none; height: auto; left: 47px; position: absolute; width: auto; z-index: 1; }",
    ".framer-Sudoe .framer-trja7f-container { bottom: 37px; cursor: grab; flex: none; height: auto; left: 222px; position: absolute; width: auto; z-index: 1; }",
    ".framer-Sudoe .framer-mvrr88-container { bottom: 91px; cursor: grab; flex: none; height: auto; left: 201px; position: absolute; width: auto; z-index: 1; }",
    ".framer-Sudoe .framer-p5yo2r-container { bottom: 101px; cursor: grab; flex: none; height: auto; left: 48%; position: absolute; transform: translateX(-50%); width: auto; z-index: 1; }",
    ".framer-Sudoe .framer-3063ph-container { bottom: 151px; cursor: grab; flex: none; height: auto; left: -5px; position: absolute; width: auto; z-index: 1; }",
    ".framer-Sudoe .framer-1rsmndz-container { bottom: 154px; cursor: grab; flex: none; height: auto; left: 125px; position: absolute; width: auto; z-index: 1; }",
    ".framer-Sudoe .framer-t2hhas-container { bottom: 208px; cursor: grab; flex: none; height: auto; left: 17px; position: absolute; width: auto; z-index: 1; }",
    ".framer-Sudoe .framer-1mb7acv-container { bottom: 194px; cursor: grab; flex: none; height: auto; position: absolute; right: -16px; width: auto; z-index: 1; }",
    ".framer-Sudoe .framer-1aorcb3-container { bottom: 255px; cursor: grab; flex: none; height: auto; left: 192px; position: absolute; width: auto; z-index: 1; }",
    ".framer-Sudoe .framer-6cy7es-container { bottom: 273px; cursor: grab; flex: none; height: auto; left: 28px; position: absolute; width: auto; z-index: 1; }",
    ".framer-Sudoe .framer-n263oc { align-content: center; align-items: center; background-color: var(--token-4fdd7769-e1d0-45b2-8e3d-fe484baba321, #9154ba); border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; display: flex; flex: 0.5 0 0px; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: hidden; padding: 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-Sudoe .framer-elyyqd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-1rxwpr7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-Sudoe .framer-19j62tj { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }",
    ".framer-Sudoe .framer-dv02ol-container { flex: none; height: auto; max-width: 1000px; position: relative; width: 100%; }",
    ".framer-Sudoe .framer-1bn53kh-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Sudoe.framer-hvzz3m, .framer-Sudoe .framer-123wqig, .framer-Sudoe .framer-1ma85oo, .framer-Sudoe .framer-j1yqbq, .framer-Sudoe .framer-j4z2v, .framer-Sudoe .framer-4w8l5h, .framer-Sudoe .framer-fo77gx, .framer-Sudoe .framer-r4ysuh, .framer-Sudoe .framer-1dzy20o, .framer-Sudoe .framer-1gfdqz2, .framer-Sudoe .framer-13d90j0, .framer-Sudoe .framer-skvjh4, .framer-Sudoe .framer-1u76kmz, .framer-Sudoe .framer-171tl, .framer-Sudoe .framer-py75l2, .framer-Sudoe .framer-1ncy7c0, .framer-Sudoe .framer-1ycslwf, .framer-Sudoe .framer-17tncu9, .framer-Sudoe .framer-1mng6ye, .framer-Sudoe .framer-x3dn5k, .framer-Sudoe .framer-1wd7iy1, .framer-Sudoe .framer-1s6yyb6, .framer-Sudoe .framer-1e8ossu, .framer-Sudoe .framer-1gbj1uu, .framer-Sudoe .framer-ftuw84, .framer-Sudoe .framer-te7zln, .framer-Sudoe .framer-1smoyra, .framer-Sudoe .framer-elyyqd, .framer-Sudoe .framer-o6dgbz, .framer-Sudoe .framer-19j62tj { gap: 0px; } .framer-Sudoe.framer-hvzz3m > *, .framer-Sudoe .framer-1ma85oo > *, .framer-Sudoe .framer-1e8ossu > *, .framer-Sudoe .framer-ftuw84 > *, .framer-Sudoe .framer-elyyqd > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Sudoe.framer-hvzz3m > :first-child, .framer-Sudoe .framer-1ma85oo > :first-child, .framer-Sudoe .framer-j1yqbq > :first-child, .framer-Sudoe .framer-j4z2v > :first-child, .framer-Sudoe .framer-4w8l5h > :first-child, .framer-Sudoe .framer-1u76kmz > :first-child, .framer-Sudoe .framer-171tl > :first-child, .framer-Sudoe .framer-py75l2 > :first-child, .framer-Sudoe .framer-1ycslwf > :first-child, .framer-Sudoe .framer-1mng6ye > :first-child, .framer-Sudoe .framer-x3dn5k > :first-child, .framer-Sudoe .framer-1s6yyb6 > :first-child, .framer-Sudoe .framer-1e8ossu > :first-child, .framer-Sudoe .framer-ftuw84 > :first-child, .framer-Sudoe .framer-1smoyra > :first-child, .framer-Sudoe .framer-elyyqd > :first-child, .framer-Sudoe .framer-19j62tj > :first-child { margin-top: 0px; } .framer-Sudoe.framer-hvzz3m > :last-child, .framer-Sudoe .framer-1ma85oo > :last-child, .framer-Sudoe .framer-j1yqbq > :last-child, .framer-Sudoe .framer-j4z2v > :last-child, .framer-Sudoe .framer-4w8l5h > :last-child, .framer-Sudoe .framer-1u76kmz > :last-child, .framer-Sudoe .framer-171tl > :last-child, .framer-Sudoe .framer-py75l2 > :last-child, .framer-Sudoe .framer-1ycslwf > :last-child, .framer-Sudoe .framer-1mng6ye > :last-child, .framer-Sudoe .framer-x3dn5k > :last-child, .framer-Sudoe .framer-1s6yyb6 > :last-child, .framer-Sudoe .framer-1e8ossu > :last-child, .framer-Sudoe .framer-ftuw84 > :last-child, .framer-Sudoe .framer-1smoyra > :last-child, .framer-Sudoe .framer-elyyqd > :last-child, .framer-Sudoe .framer-19j62tj > :last-child { margin-bottom: 0px; } .framer-Sudoe .framer-123wqig > *, .framer-Sudoe .framer-fo77gx > *, .framer-Sudoe .framer-r4ysuh > *, .framer-Sudoe .framer-1dzy20o > *, .framer-Sudoe .framer-1gfdqz2 > *, .framer-Sudoe .framer-13d90j0 > *, .framer-Sudoe .framer-1wd7iy1 > *, .framer-Sudoe .framer-1gbj1uu > *, .framer-Sudoe .framer-te7zln > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Sudoe .framer-123wqig > :first-child, .framer-Sudoe .framer-fo77gx > :first-child, .framer-Sudoe .framer-r4ysuh > :first-child, .framer-Sudoe .framer-1dzy20o > :first-child, .framer-Sudoe .framer-1gfdqz2 > :first-child, .framer-Sudoe .framer-13d90j0 > :first-child, .framer-Sudoe .framer-skvjh4 > :first-child, .framer-Sudoe .framer-1ncy7c0 > :first-child, .framer-Sudoe .framer-17tncu9 > :first-child, .framer-Sudoe .framer-1wd7iy1 > :first-child, .framer-Sudoe .framer-1gbj1uu > :first-child, .framer-Sudoe .framer-te7zln > :first-child, .framer-Sudoe .framer-o6dgbz > :first-child { margin-left: 0px; } .framer-Sudoe .framer-123wqig > :last-child, .framer-Sudoe .framer-fo77gx > :last-child, .framer-Sudoe .framer-r4ysuh > :last-child, .framer-Sudoe .framer-1dzy20o > :last-child, .framer-Sudoe .framer-1gfdqz2 > :last-child, .framer-Sudoe .framer-13d90j0 > :last-child, .framer-Sudoe .framer-skvjh4 > :last-child, .framer-Sudoe .framer-1ncy7c0 > :last-child, .framer-Sudoe .framer-17tncu9 > :last-child, .framer-Sudoe .framer-1wd7iy1 > :last-child, .framer-Sudoe .framer-1gbj1uu > :last-child, .framer-Sudoe .framer-te7zln > :last-child, .framer-Sudoe .framer-o6dgbz > :last-child { margin-right: 0px; } .framer-Sudoe .framer-j1yqbq > * { margin: 0px; margin-bottom: calc(31px / 2); margin-top: calc(31px / 2); } .framer-Sudoe .framer-j4z2v > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-Sudoe .framer-4w8l5h > *, .framer-Sudoe .framer-1s6yyb6 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Sudoe .framer-skvjh4 > *, .framer-Sudoe .framer-1ncy7c0 > *, .framer-Sudoe .framer-17tncu9 > *, .framer-Sudoe .framer-o6dgbz > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-Sudoe .framer-1u76kmz > *, .framer-Sudoe .framer-1mng6ye > *, .framer-Sudoe .framer-19j62tj > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-Sudoe .framer-171tl > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-Sudoe .framer-py75l2 > *, .framer-Sudoe .framer-x3dn5k > *, .framer-Sudoe .framer-1smoyra > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Sudoe .framer-1ycslwf > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } }",
    "@media (min-width: 1200px) { .framer-Sudoe .hidden-hvzz3m { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-Sudoe .hidden-1b4lfhe { display: none !important; } .${jr.bodyClassName}-framer-Sudoe { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0)); } .framer-Sudoe.framer-hvzz3m { width: 810px; } .framer-Sudoe .framer-fo77gx { max-width: 600px; } .framer-Sudoe .framer-jbkn8z, .framer-Sudoe .framer-1ty6ljs, .framer-Sudoe .framer-harf3f { max-width: 490px; } .framer-Sudoe .framer-1urq87d { height: 671px; } .framer-Sudoe .framer-1sk6zfr { height: 441px; } .framer-Sudoe .framer-m94qqz { height: 72px; left: calc(50.00000000000002% - 100% / 2); } .framer-Sudoe .framer-1d4gaqj-container { top: 46px; } .framer-Sudoe .framer-13d90j0 { left: calc(50.00000000000002% - 79px / 2); right: unset; } .framer-Sudoe .framer-skvjh4, .framer-Sudoe .framer-1ncy7c0, .framer-Sudoe .framer-17tncu9, .framer-Sudoe .framer-o6dgbz { padding: 80px 40px 80px 40px; } .framer-Sudoe .framer-1u76kmz, .framer-Sudoe .framer-1mng6ye { gap: 30px; max-width: unset; } .framer-Sudoe .framer-1ycslwf { gap: 60px; justify-content: flex-start; max-width: 1000px; } .framer-Sudoe .framer-1s6yyb6 { gap: 9px; } .framer-Sudoe .framer-dt0c77 { order: 0; } .framer-Sudoe .framer-1e8ossu { justify-content: flex-end; order: 1; width: 100%; } .framer-Sudoe .framer-1rbiegj, .framer-Sudoe .framer-1b8zfmf { height: 70px; } .framer-Sudoe .framer-1gbj1uu { order: 2; } .framer-Sudoe .framer-1smoyra { flex: 1 0 0px; } .framer-Sudoe .framer-n263oc { flex: 0.7 0 0px; } .framer-Sudoe .framer-19j62tj { justify-content: flex-start; max-width: 1000px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Sudoe .framer-1u76kmz, .framer-Sudoe .framer-1ycslwf, .framer-Sudoe .framer-1mng6ye, .framer-Sudoe .framer-1s6yyb6 { gap: 0px; } .framer-Sudoe .framer-1u76kmz > *, .framer-Sudoe .framer-1mng6ye > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-Sudoe .framer-1u76kmz > :first-child, .framer-Sudoe .framer-1ycslwf > :first-child, .framer-Sudoe .framer-1mng6ye > :first-child, .framer-Sudoe .framer-1s6yyb6 > :first-child { margin-top: 0px; } .framer-Sudoe .framer-1u76kmz > :last-child, .framer-Sudoe .framer-1ycslwf > :last-child, .framer-Sudoe .framer-1mng6ye > :last-child, .framer-Sudoe .framer-1s6yyb6 > :last-child { margin-bottom: 0px; } .framer-Sudoe .framer-1ycslwf > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-Sudoe .framer-1s6yyb6 > * { margin: 0px; margin-bottom: calc(9px / 2); margin-top: calc(9px / 2); } }}`,
    `@media (max-width: 809px) { .framer-Sudoe .hidden-1zvqox { display: none !important; } .${jr.bodyClassName}-framer-Sudoe { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0)); } .framer-Sudoe.framer-hvzz3m { overflow: hidden; width: 390px; } .framer-Sudoe .framer-j1yqbq { gap: 60px; padding: 140px 0px 0px 0px; } .framer-Sudoe .framer-j4z2v { padding: 0px 20px 0px 20px; } .framer-Sudoe .framer-jbkn8z, .framer-Sudoe .framer-1ty6ljs, .framer-Sudoe .framer-harf3f, .framer-Sudoe .framer-1c0jjav { max-width: 400px; } .framer-Sudoe .framer-r4ysuh { padding: 0px 2px 0px 2px; } .framer-Sudoe .framer-1dzy20o { height: 48px; width: 48px; } .framer-Sudoe .framer-1h8vqsn { height: var(--framer-aspect-ratio-supported, 38px); width: 38px; } .framer-Sudoe .framer-1urq87d { height: 331px; } .framer-Sudoe .framer-1sk6zfr { height: 241px; } .framer-Sudoe .framer-m94qqz { height: 52px; left: calc(50.00000000000002% - 100% / 2); } .framer-Sudoe .framer-1d4gaqj-container { top: -69px; } .framer-Sudoe .framer-13d90j0 { bottom: -8px; height: 75px; left: calc(50.00000000000002% - 75px / 2); right: unset; width: 75px; } .framer-Sudoe .framer-yfckd4 { background-color: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, #0a0a0a); height: var(--framer-aspect-ratio-supported, 54px); left: 51%; top: 51%; width: 54px; } .framer-Sudoe .framer-h255qi-container { height: 26px; left: calc(48.484848484848506% - 26px / 2); top: calc(48.484848484848506% - 26px / 2); width: 26px; } .framer-Sudoe .framer-skvjh4, .framer-Sudoe .framer-1ncy7c0, .framer-Sudoe .framer-17tncu9, .framer-Sudoe .framer-o6dgbz { padding: 50px 12px 50px 12px; } .framer-Sudoe .framer-1u76kmz, .framer-Sudoe .framer-1mng6ye, .framer-Sudoe .framer-19j62tj { gap: 40px; } .framer-Sudoe .framer-171tl { align-content: center; align-items: center; } .framer-Sudoe .framer-1xi7suj-container { max-width: unset; } .framer-Sudoe .framer-s3790c { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; } .framer-Sudoe .framer-mrpq24-container, .framer-Sudoe .framer-p1yvjz-container, .framer-Sudoe .framer-w8x50v-container { align-self: unset; } .framer-Sudoe .framer-1wd7iy1 { flex-direction: column; height: 879px; } .framer-Sudoe .framer-1s6yyb6 { flex: 1 0 0px; height: 1px; width: 100%; } .framer-Sudoe .framer-1e8ossu { width: 100%; } .framer-Sudoe .framer-1rbiegj, .framer-Sudoe .framer-1b8zfmf { height: 53px; } .framer-Sudoe .framer-3wze62, .framer-Sudoe .framer-n263oc { flex: none; gap: 40px; height: min-content; justify-content: center; width: 100%; } .framer-Sudoe .framer-te7zln { flex-direction: column; height: min-content; } .framer-Sudoe .framer-1smoyra { flex: none; height: min-content; width: 100%; } .framer-Sudoe .framer-1jmnool-container, .framer-Sudoe .framer-1r0o321-container, .framer-Sudoe .framer-trja7f-container, .framer-Sudoe .framer-mvrr88-container, .framer-Sudoe .framer-p5yo2r-container, .framer-Sudoe .framer-3063ph-container, .framer-Sudoe .framer-1rsmndz-container, .framer-Sudoe .framer-t2hhas-container, .framer-Sudoe .framer-1mb7acv-container, .framer-Sudoe .framer-1aorcb3-container, .framer-Sudoe .framer-6cy7es-container { cursor: unset; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Sudoe .framer-j1yqbq, .framer-Sudoe .framer-1u76kmz, .framer-Sudoe .framer-s3790c, .framer-Sudoe .framer-1mng6ye, .framer-Sudoe .framer-1wd7iy1, .framer-Sudoe .framer-3wze62, .framer-Sudoe .framer-te7zln, .framer-Sudoe .framer-n263oc, .framer-Sudoe .framer-19j62tj { gap: 0px; } .framer-Sudoe .framer-j1yqbq > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-Sudoe .framer-j1yqbq > :first-child, .framer-Sudoe .framer-1u76kmz > :first-child, .framer-Sudoe .framer-s3790c > :first-child, .framer-Sudoe .framer-1mng6ye > :first-child, .framer-Sudoe .framer-1wd7iy1 > :first-child, .framer-Sudoe .framer-3wze62 > :first-child, .framer-Sudoe .framer-te7zln > :first-child, .framer-Sudoe .framer-n263oc > :first-child, .framer-Sudoe .framer-19j62tj > :first-child { margin-top: 0px; } .framer-Sudoe .framer-j1yqbq > :last-child, .framer-Sudoe .framer-1u76kmz > :last-child, .framer-Sudoe .framer-s3790c > :last-child, .framer-Sudoe .framer-1mng6ye > :last-child, .framer-Sudoe .framer-1wd7iy1 > :last-child, .framer-Sudoe .framer-3wze62 > :last-child, .framer-Sudoe .framer-te7zln > :last-child, .framer-Sudoe .framer-n263oc > :last-child, .framer-Sudoe .framer-19j62tj > :last-child { margin-bottom: 0px; } .framer-Sudoe .framer-1u76kmz > *, .framer-Sudoe .framer-1mng6ye > *, .framer-Sudoe .framer-3wze62 > *, .framer-Sudoe .framer-n263oc > *, .framer-Sudoe .framer-19j62tj > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-Sudoe .framer-s3790c > *, .framer-Sudoe .framer-1wd7iy1 > *, .framer-Sudoe .framer-te7zln > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`,
    ...yt,
    ...nt,
    ...lt,
    ...tt,
    ...$r,
    '.framer-Sudoe[data-border="true"]::after, .framer-Sudoe [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  ],
  tr = H(Ai, Ti, "framer-Sudoe"),
  Kn = tr;
tr.displayName = "Home";
tr.defaultProps = { height: 6544, width: 1200 };
me(
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
    ...Ma,
    ...Ha,
    ...Ga,
    ...Ka,
    ...$a,
    ...Qa,
    ...Za,
    ...ei,
    ...ri,
    ...ti,
    ...ai,
    ...ii,
    ...ni,
    ...fe(xt),
    ...fe(it),
    ...fe(dt),
    ...fe(rt),
    ...fe(Kr),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var $n = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "Frameryd7nMFDHh",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerIntrinsicWidth: "1200",
        framerComponentViewportWidth: "true",
        framerIntrinsicHeight: "6544",
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"WgNeKo_y1":{"layout":["fixed","auto"]},"P7j2A2OCI":{"layout":["fixed","auto"]}}}',
        framerContractVersion: "1",
        framerResponsiveScreen: "",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { $n as __FramerMetadata__, Kn as default };
//# sourceMappingURL=wdQYo-rLd8qs1yOTt0eims6OkWUoCHfCWZLlpxyxRUI.FPVKJU63.mjs.map
