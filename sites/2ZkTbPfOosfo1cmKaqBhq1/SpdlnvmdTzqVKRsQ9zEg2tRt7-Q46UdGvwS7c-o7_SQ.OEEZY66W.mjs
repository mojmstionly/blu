import { a as je } from "./chunk-E2YJEUMK.mjs";
import { a as Dt } from "./chunk-N7PISP3R.mjs";
import { a as _e } from "./chunk-SNGS4CU5.mjs";
import { b as Be, i as Ae, j as De } from "./chunk-KVW7ZHFM.mjs";
import "./chunk-42U43NKG.mjs";
import {
  A as Nt,
  B as A,
  Ca as Bt,
  Da as re,
  E as $,
  Ea as At,
  F as Ut,
  H as Pt,
  N as It,
  P as Ft,
  R as Te,
  T as r,
  W as kt,
  Z as He,
  _ as Vt,
  b as ze,
  ba as ee,
  c as xt,
  ca as te,
  d as yt,
  ea as Rt,
  f as bt,
  fa as zt,
  g as he,
  ha as Mt,
  i as vt,
  k as j,
  ka as we,
  l as Ct,
  m as St,
  n as Me,
  o as Ot,
  p as W,
  q as F,
  sa as Tt,
  t,
  u as k,
  x as V,
  xa as Ht,
  ya as v,
  z as ge,
  za as _t,
} from "./chunk-27H5APBL.mjs";
import "./chunk-H3OQIIDF.mjs";
import "./chunk-ELYU6EKT.mjs";
var xe = () => typeof document == "object";
function zr() {
  if (xe()) {
    if (typeof document.hidden < "u") return "visibilitychange";
    if (typeof document.msHidden < "u") return "msvisibilitychange";
    if (typeof document.webkitHidden < "u") return "webkitvisibilitychange";
  }
}
function Mr() {
  if (xe()) {
    if (typeof document.hidden < "u") return "hidden";
    if (typeof document.msHidden < "u") return "msHidden";
    if (typeof document.webkitHidden < "u") return "webkitHidden";
  }
}
function jt() {
  if (xe()) return !document[Mr()];
}
function Wt() {
  if (!xe()) return;
  let [e, g] = F(jt()),
    l = () => g(jt());
  return (
    j(() => {
      let n = zr();
      return (
        document.addEventListener(n, l, !1),
        () => {
          document.removeEventListener(n, l);
        }
      );
    }),
    e
  );
}
var Ee = 0.001;
function d(e) {
  let {
      slots: g,
      startFrom: l,
      direction: n,
      effectsOptions: w,
      autoPlayControl: C,
      dragControl: U,
      alignment: D,
      gap: f,
      padding: o,
      paddingPerSide: P,
      paddingTop: S,
      paddingRight: G,
      paddingBottom: _,
      paddingLeft: u,
      itemAmount: I,
      fadeOptions: R,
      intervalControl: p,
      transitionControl: x,
      arrowOptions: c,
      borderRadius: Ye,
      progressOptions: ie,
      style: be,
    } = e,
    {
      effectsOpacity: z,
      effectsScale: ve,
      effectsRotate: se,
      effectsPerspective: Ce,
      effectsHover: le,
    } = w,
    {
      fadeContent: L,
      overflow: de,
      fadeWidth: M,
      fadeInset: E,
      fadeAlpha: Ze,
    } = R,
    {
      showMouseControls: Ke,
      arrowSize: B,
      arrowRadius: Qe,
      arrowFill: Je,
      leftArrow: Zt,
      rightArrow: Kt,
      arrowShouldSpace: q = !0,
      arrowShouldFadeIn: $e = !1,
      arrowPosition: y,
      arrowPadding: ae,
      arrowGap: Qt,
      arrowPaddingTop: Jt,
      arrowPaddingRight: $t,
      arrowPaddingBottom: er,
      arrowPaddingLeft: tr,
    } = c,
    {
      showProgressDots: rr,
      dotSize: et,
      dotsInset: tt,
      dotsRadius: ar,
      dotsPadding: or,
      dotsGap: nr,
      dotsFill: ir,
      dotsBackground: sr,
      dotsActiveOpacity: lr,
      dotsOpacity: dr,
      dotsBlur: rt,
    } = ie,
    fr = P ? `${S}px ${G}px ${_}px ${u}px` : `${o}px`,
    T = Te.current() === Te.canvas,
    h = g.filter(Boolean),
    X = ze.count(h) > 0,
    i = n === "left" || n === "right",
    fe = n === "right" || n === "bottom";
  if (!X)
    return k("section", {
      style: Tr,
      children: [
        t("div", { style: Hr, children: "\u2B50\uFE0F" }),
        t("p", { style: _r, children: "Connect to Content" }),
        t("p", {
          style: Br,
          children:
            "Add layers or components to make infinite auto-playing slideshows.",
        }),
      ],
    });
  let oe = W(null),
    m = Ot(() => h.map((a) => bt()), [h]),
    Se = W(void 0),
    [s, mr] = F({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
    }),
    [cr, at] = F(!1),
    [pr, ot] = F(C),
    [ur, nt] = F(!1),
    [Y, it] = F(!1),
    Oe = [],
    st = 4;
  T && (st = 1);
  let lt = vt(() => {
    Pt.read(() => {
      if (X && oe.current) {
        let a = h.length - 1,
          N = i ? oe.current.offsetWidth : oe.current.offsetHeight,
          b = m[0].current
            ? i
              ? m[0].current.offsetLeft
              : m[0].current.offsetTop
            : 0,
          J =
            (m[a].current
              ? i
                ? m[a].current.offsetLeft + m[a].current.offsetWidth
                : m[a].current.offsetTop + m[a].current.offsetHeight
              : 0) -
            b +
            f,
          pe = m[0].current
            ? i
              ? m[0].current.offsetWidth
              : m[0].current.offsetHeight
            : 0,
          Ve = m[0].current ? m[0].current.offsetWidth : 0,
          Re = m[0].current ? m[0].current.offsetHeight : 0;
        mr({ parent: N, children: J, item: pe, itemWidth: Ve, itemHeight: Re });
      }
    });
  }, [X]);
  Me(() => {
    X && lt();
  }, [X, I]);
  let Ne = W(!0);
  j(
    () =>
      Dt(oe.current, ({ contentSize: a }) => {
        !Ne.current && (a.width || a.height) && (lt(), it(!0)),
          (Ne.current = !1);
      }),
    []
  ),
    j(() => {
      if (Y) {
        let a = setTimeout(() => it(!1), 500);
        return () => clearTimeout(a);
      }
    }, [Y]);
  let Z = h?.length,
    me = T ? 0 : s?.children,
    Ue = s?.item + f,
    hr = l * Ue,
    [O, ne] = F(l + Z),
    [gr, dt] = F(!1),
    ft = Wt(),
    mt = fe ? 1 : -1,
    K = Nt(me),
    ct = i ? -l * (s?.itemWidth + f) : -l * (s?.itemHeight + f),
    Pe = () => mt * O * Ue,
    Ie = T
      ? 0
      : A(K, (a) => {
          let N = $(-me, -me * 2, a);
          return isNaN(N) ? 0 : N;
        }),
    wr = $(0, Z, O),
    xr = $(0, -Z, O);
  Me(() => {
    s?.children !== null && !Ne.current && Y && K.set(Pe());
  }, [s, me, mt, hr, O, Ue, Y]);
  let pt = () => {
      T ||
        !X ||
        !s.parent ||
        gr ||
        (K.get() !== Pe() && Ut(K, Pe(), x),
        C &&
          pr &&
          (Se.current = setTimeout(() => {
            ne(O + 1), pt();
          }, p * 1e3)));
    },
    Q = (a) => {
      ne(fe ? O - a : O + a);
    },
    yr = (a) => {
      let N = $(0, Z, O),
        b = $(0, -Z, O),
        H = a - N,
        J = a - Math.abs(b);
      ne(fe ? O - J : O + H);
    },
    br = () => {
      dt(!0);
    },
    vr = (a, { offset: N, velocity: b }) => {
      dt(!1);
      let H = i ? N.x : N.y,
        J = 200,
        pe = i ? b.x : b.y,
        Ve = H < -s.item / 2,
        Re = H > s.item / 2,
        Rr = Math.abs(H),
        ue = Math.round(Rr / s.item),
        wt = ue === 0 ? 1 : ue;
      pe > J ? Q(-wt) : pe < -J ? Q(wt) : (Ve && Q(ue), Re && Q(-ue));
    };
  j(() => {
    if (!(!ft || Y)) return pt(), () => Se.current && clearTimeout(Se.current);
  }, [Oe, ft, Y]);
  let Cr = 0,
    ut = `calc(${100 / I}% - ${f}px + ${f / I}px)`;
  for (let a = 0; a < st; a++)
    Oe.push(
      ...ze.map(h, (N, b) => {
        let H;
        return (
          b === 0 && (H = m[0]),
          b === h.length - 1 && (H = m[1]),
          t(
            jr,
            {
              ref: m[b],
              slideKey: a + b + "lg",
              index: a,
              width: i && I > 1 ? ut : "100%",
              height: i ? "100%" : I > 1 ? ut : "100%",
              size: s,
              child: N,
              numChildren: h?.length,
              wrappedValue: Ie,
              childCounter: Cr++,
              gap: f,
              isCanvas: T,
              isHorizontal: i,
              effectsOpacity: z,
              effectsScale: ve,
              effectsRotate: se,
              children: a + b,
            },
            a + b + "lg"
          )
        );
      })
    );
  let Sr = i ? "to right" : "to bottom",
    ht = M / 2,
    Or = 100 - M / 2,
    Nr = Dr(E, 0, ht),
    Ur = 100 - E,
    Fe = `linear-gradient(${Sr}, rgba(0, 0, 0, ${Ze}) ${Nr}%, rgba(0, 0, 0, 1) ${ht}%, rgba(0, 0, 0, 1) ${Or}%, rgba(0, 0, 0, ${Ze}) ${Ur}%)`,
    ke = [],
    ce = {};
  if (rr) {
    for (let a = 0; a < h?.length; a++)
      ke.push(
        t(
          Wr,
          {
            dotStyle: { ...Lr, width: et, height: et, backgroundColor: ir },
            buttonStyle: qe,
            selectedOpacity: lr,
            opacity: dr,
            onClick: () => yr(a),
            wrappedIndex: wr,
            wrappedIndexInverted: xr,
            total: Z,
            index: a,
            gap: nr,
            padding: or,
            isHorizontal: i,
            isInverted: fe,
          },
          a
        )
      );
    rt > 0 &&
      (ce.backdropFilter =
        ce.WebkitBackdropFilter =
        ce.MozBackdropFilter =
          `blur(${rt}px)`);
  }
  let Pr = U
      ? {
          drag: i ? "x" : "y",
          onDragStart: br,
          onDragEnd: vr,
          dragDirectionLock: !0,
          values: { x: K, y: K },
          dragMomentum: !1,
        }
      : {},
    Ir = y === "top-left" || y === "top-mid" || y === "top-right",
    Fr = y === "bottom-left" || y === "bottom-mid" || y === "bottom-right",
    kr = y === "top-left" || y === "bottom-left",
    Vr = y === "top-right" || y === "bottom-right",
    gt = y === "top-mid" || y === "bottom-mid" || y === "auto";
  return k("section", {
    style: {
      ...Gt,
      padding: fr,
      WebkitMaskImage: L ? Fe : void 0,
      MozMaskImage: L ? Fe : void 0,
      maskImage: L ? Fe : void 0,
      opacity: s?.item !== null ? 1 : Ee,
      userSelect: "none",
    },
    onMouseEnter: () => {
      at(!0), le || ot(!1);
    },
    onMouseLeave: () => {
      at(!1), le || ot(!0);
    },
    onMouseDown: (a) => {
      a.preventDefault(), nt(!0);
    },
    onMouseUp: () => nt(!1),
    children: [
      t("div", {
        style: {
          width: "100%",
          height: "100%",
          margin: 0,
          padding: "inherit",
          position: "absolute",
          inset: 0,
          overflow: de ? "visible" : "hidden",
          borderRadius: Ye,
          userSelect: "none",
          perspective: T ? "none" : Ce,
        },
        children: t(V.ul, {
          ref: oe,
          ...Pr,
          style: {
            ...Gt,
            gap: f,
            placeItems: D,
            x: i ? (T ? ct : Ie) : 0,
            y: i ? 0 : T ? ct : Ie,
            flexDirection: i ? "row" : "column",
            transformStyle: se !== 0 && !T ? "preserve-3d" : void 0,
            cursor: U ? (ur ? "grabbing" : "grab") : "auto",
            userSelect: "none",
            ...be,
          },
          children: Oe,
        }),
      }),
      k("fieldset", {
        style: { ...Ar },
        "aria-label": "Slideshow pagination controls",
        className: "framer--slideshow-controls",
        children: [
          k(V.div, {
            style: {
              position: "absolute",
              display: "flex",
              flexDirection: i ? "row" : "column",
              justifyContent: q ? "space-between" : "center",
              gap: q ? "unset" : Qt,
              opacity: $e ? Ee : 1,
              alignItems: "center",
              inset: ae,
              top: q ? ae : Ir ? Jt : "unset",
              left: q ? ae : kr ? tr : gt ? 0 : "unset",
              right: q ? ae : Vr ? $t : gt ? 0 : "unset",
              bottom: q ? ae : Fr ? er : "unset",
            },
            animate: $e && { opacity: cr ? 1 : Ee },
            transition: x,
            children: [
              t(V.button, {
                type: "button",
                style: {
                  ...qe,
                  backgroundColor: Je,
                  width: B,
                  height: B,
                  borderRadius: Qe,
                  rotate: i ? 0 : 90,
                  display: Ke ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => Q(-1),
                "aria-label": "Previous",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: t("img", {
                  width: B,
                  height: B,
                  src: Zt || "./images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                  alt: "Back Arrow",
                }),
              }),
              t(V.button, {
                type: "button",
                style: {
                  ...qe,
                  backgroundColor: Je,
                  width: B,
                  height: B,
                  borderRadius: Qe,
                  rotate: i ? 0 : 90,
                  display: Ke ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => Q(1),
                "aria-label": "Next",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: t("img", {
                  width: B,
                  height: B,
                  src: Kt || "./images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                  alt: "Next Arrow",
                }),
              }),
            ],
          }),
          ke.length > 1
            ? t("div", {
                style: {
                  ...Gr,
                  left: i ? "50%" : tt,
                  top: i ? "unset" : "50%",
                  transform: i ? "translateX(-50%)" : "translateY(-50%)",
                  flexDirection: i ? "row" : "column",
                  bottom: i ? tt : "unset",
                  borderRadius: ar,
                  backgroundColor: sr,
                  userSelect: "none",
                  ...ce,
                },
                children: ke,
              })
            : null,
        ],
      }),
    ],
  });
}
d.defaultProps = {
  direction: "left",
  dragControl: !1,
  startFrom: 0,
  itemAmount: 1,
  infinity: !0,
  gap: 10,
  padding: 10,
  autoPlayControl: !0,
  effectsOptions: {
    effectsOpacity: 1,
    effectsScale: 1,
    effectsRotate: 0,
    effectsPerspective: 1200,
    effectsHover: !0,
  },
  transitionControl: { type: "spring", stiffness: 200, damping: 40 },
  fadeOptions: {
    fadeContent: !1,
    overflow: !1,
    fadeWidth: 25,
    fadeAlpha: 0,
    fadeInset: 0,
  },
  arrowOptions: {
    showMouseControls: !0,
    arrowShouldFadeIn: !1,
    arrowShouldSpace: !0,
    arrowFill: "rgba(0,0,0,0.2)",
    arrowSize: 40,
  },
  progressOptions: { showProgressDots: !0 },
};
kt(d, {
  slots: {
    type: r.Array,
    title: "Content",
    control: { type: r.ComponentInstance },
  },
  direction: {
    type: r.Enum,
    title: "Direction",
    options: ["left", "right", "top", "bottom"],
    optionIcons: [
      "direction-left",
      "direction-right",
      "direction-up",
      "direction-down",
    ],
    optionTitles: ["Left", "Right", "Top", "Bottom"],
    displaySegmentedControl: !0,
    defaultValue: d.defaultProps.direction,
  },
  autoPlayControl: { type: r.Boolean, title: "Auto Play", defaultValue: !0 },
  intervalControl: {
    type: r.Number,
    title: "Interval",
    defaultValue: 1.5,
    min: 0.5,
    max: 10,
    step: 0.1,
    displayStepper: !0,
    unit: "s",
    hidden: (e) => !e.autoPlayControl,
  },
  dragControl: { type: r.Boolean, title: "Draggable", defaultValue: !1 },
  startFrom: {
    type: r.Number,
    title: "Current",
    min: 0,
    max: 10,
    displayStepper: !0,
    defaultValue: d.defaultProps.startFrom,
  },
  effectsOptions: {
    type: r.Object,
    title: "Effects",
    controls: {
      effectsOpacity: {
        type: r.Number,
        title: "Opacity",
        defaultValue: d.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsScale: {
        type: r.Number,
        title: "Scale",
        defaultValue: d.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsPerspective: {
        type: r.Number,
        title: "Perspective",
        defaultValue: d.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: r.Number,
        title: "Rotate",
        defaultValue: d.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: r.Boolean,
        title: "On Hover",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        defaultValue: d.defaultProps.effectsOptions.effectsHover,
      },
    },
  },
  alignment: {
    type: r.Enum,
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
  itemAmount: {
    type: r.Number,
    title: "Items",
    min: 1,
    max: 10,
    displayStepper: !0,
    defaultValue: d.defaultProps.itemAmount,
  },
  gap: { type: r.Number, title: "Gap", min: 0 },
  padding: {
    title: "Padding",
    type: r.FusedNumber,
    toggleKey: "paddingPerSide",
    toggleTitles: ["Padding", "Padding per side"],
    defaultValue: 0,
    valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
    valueLabels: ["T", "R", "B", "L"],
    min: 0,
  },
  borderRadius: {
    type: r.Number,
    title: "Radius",
    min: 0,
    max: 500,
    displayStepper: !0,
    defaultValue: 0,
  },
  transitionControl: {
    type: r.Transition,
    defaultValue: d.defaultProps.transitionControl,
    title: "Transition",
  },
  fadeOptions: {
    type: r.Object,
    title: "Clipping",
    controls: {
      fadeContent: { type: r.Boolean, title: "Fade", defaultValue: !1 },
      overflow: {
        type: r.Boolean,
        title: "Overflow",
        enabledTitle: "Show",
        disabledTitle: "Hide",
        defaultValue: !1,
        hidden(e) {
          return e.fadeContent === !0;
        },
      },
      fadeWidth: {
        type: r.Number,
        title: "Width",
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeInset: {
        type: r.Number,
        title: "Inset",
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: "%",
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
      fadeAlpha: {
        type: r.Number,
        title: "Opacity",
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(e) {
          return e.fadeContent === !1;
        },
      },
    },
  },
  arrowOptions: {
    type: r.Object,
    title: "Arrows",
    controls: {
      showMouseControls: {
        type: r.Boolean,
        title: "Show",
        defaultValue: d.defaultProps.arrowOptions.showMouseControls,
      },
      arrowFill: {
        type: r.Color,
        title: "Fill",
        hidden: (e) => !e.showMouseControls,
        defaultValue: d.defaultProps.arrowOptions.arrowFill,
      },
      leftArrow: {
        type: r.Image,
        title: "Previous",
        hidden: (e) => !e.showMouseControls,
      },
      rightArrow: {
        type: r.Image,
        title: "Next",
        hidden: (e) => !e.showMouseControls,
      },
      arrowSize: {
        type: r.Number,
        title: "Size",
        min: 0,
        max: 200,
        displayStepper: !0,
        defaultValue: d.defaultProps.arrowOptions.arrowSize,
        hidden: (e) => !e.showMouseControls,
      },
      arrowRadius: {
        type: r.Number,
        title: "Radius",
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (e) => !e.showMouseControls,
      },
      arrowShouldFadeIn: {
        type: r.Boolean,
        title: "Fade In",
        defaultValue: !1,
        hidden: (e) => !e.showMouseControls,
      },
      arrowShouldSpace: {
        type: r.Boolean,
        title: "Distance",
        enabledTitle: "Space",
        disabledTitle: "Group",
        defaultValue: d.defaultProps.arrowOptions.arrowShouldSpace,
        hidden: (e) => !e.showMouseControls,
      },
      arrowPosition: {
        type: r.Enum,
        title: "Position",
        options: [
          "auto",
          "top-left",
          "top-mid",
          "top-right",
          "bottom-left",
          "bottom-mid",
          "bottom-right",
        ],
        optionTitles: [
          "Center",
          "Top Left",
          "Top Middle",
          "Top Right",
          "Bottom Left",
          "Bottom Middle",
          "Bottom Right",
        ],
        hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
      },
      arrowPadding: {
        type: r.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 20,
        displayStepper: !0,
        hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
      },
      arrowPaddingTop: {
        type: r.Number,
        title: "Top",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "bottom-mid" ||
          e.arrowPosition === "bottom-left" ||
          e.arrowPosition === "bottom-right",
      },
      arrowPaddingBottom: {
        type: r.Number,
        title: "Bottom",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "top-left" ||
          e.arrowPosition === "top-right",
      },
      arrowPaddingRight: {
        type: r.Number,
        title: "Right",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-left" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "bottom-left" ||
          e.arrowPosition === "bottom-mid",
      },
      arrowPaddingLeft: {
        type: r.Number,
        title: "Left",
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: !0,
        hidden: (e) =>
          !e.showMouseControls ||
          e.arrowShouldSpace ||
          e.arrowPosition === "auto" ||
          e.arrowPosition === "top-right" ||
          e.arrowPosition === "top-mid" ||
          e.arrowPosition === "bottom-right" ||
          e.arrowPosition === "bottom-mid",
      },
      arrowGap: {
        type: r.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
      },
    },
  },
  progressOptions: {
    type: r.Object,
    title: "Dots",
    controls: {
      showProgressDots: { type: r.Boolean, title: "Show", defaultValue: !1 },
      dotSize: {
        type: r.Number,
        title: "Size",
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsInset: {
        type: r.Number,
        title: "Inset",
        min: -100,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsGap: {
        type: r.Number,
        title: "Gap",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsPadding: {
        type: r.Number,
        title: "Padding",
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsFill: {
        type: r.Color,
        title: "Fill",
        defaultValue: "#fff",
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBackground: {
        type: r.Color,
        title: "Backdrop",
        defaultValue: "rgba(0,0,0,0.2)",
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsRadius: {
        type: r.Number,
        title: "Radius",
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsOpacity: {
        type: r.Number,
        title: "Opacity",
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsActiveOpacity: {
        type: r.Number,
        title: "Current",
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: !0,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
      dotsBlur: {
        type: r.Number,
        title: "Blur",
        min: 0,
        max: 50,
        defaultValue: 0,
        step: 1,
        hidden: (e) => !e.showProgressDots || e.showScrollbar,
      },
    },
  },
});
var Gt = {
    display: "flex",
    flexDirection: "row",
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
  Tr = {
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
  Hr = { fontSize: 32, marginBottom: 10 },
  _r = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  Br = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 180,
    lineHeight: 1.5,
    textAlign: "center",
  },
  qe = {
    border: "none",
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    background: "transparent",
    cursor: "pointer",
    margin: 0,
    padding: 0,
  },
  Ar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    pointerEvents: "none",
    userSelect: "none",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  Dr = (e, g, l) => Math.min(Math.max(e, g), l),
  jr = he(function (g, l) {
    var n, w;
    let {
        slideKey: C,
        width: U,
        height: D,
        child: f,
        size: o,
        gap: P,
        wrappedValue: S,
        numChildren: G,
        childCounter: _,
        isCanvas: u,
        effects: I,
        effectsOpacity: R,
        effectsScale: p,
        effectsRotate: x,
        isHorizontal: c,
        isLast: Ye,
        index: ie,
      } = g,
      be = (o?.item + P) * _,
      z = [-o?.item, 0, o?.parent - o?.item + P, o?.parent].map((M) => M - be),
      ve = !u && A(S, z, [-x, 0, 0, x]),
      se = !u && A(S, z, [x, 0, 0, -x]),
      Ce = !u && A(S, z, [R, 1, 1, R]),
      le = !u && A(S, z, [p, 1, 1, p]),
      L = !u && A(S, z, [1, 1, 0, 0]),
      de = !u && A(S, (M) => M >= z[1] && M <= z[2]);
    return (
      j(() => {
        if (de)
          return de.onChange((M) => {
            var E;
            (E = l.current) === null ||
              E === void 0 ||
              E.setAttribute("aria-hidden", !M);
          });
      }, []),
      t(ge, {
        inherit: "id",
        children: t("li", {
          style: { display: "contents" },
          "aria-hidden": ie !== 0,
          children: yt(
            f,
            {
              ref: l,
              key: C + "child",
              style: {
                ...((n = f.props) === null || n === void 0 ? void 0 : n.style),
                flexShrink: 0,
                userSelect: "none",
                width: U,
                height: D,
                opacity: Ce,
                scale: le,
                originX: c ? L : 0.5,
                originY: c ? 0.5 : L,
                rotateY: c ? ve : 0,
                rotateX: c ? 0 : se,
              },
              layoutId: f.props.layoutId
                ? f.props.layoutId + "-original-" + ie
                : void 0,
            },
            (w = f.props) === null || w === void 0 ? void 0 : w.children
          ),
        }),
      })
    );
  });
function Wr({
  selectedOpacity: e,
  opacity: g,
  total: l,
  index: n,
  wrappedIndex: w,
  wrappedIndexInverted: C,
  dotStyle: U,
  buttonStyle: D,
  gap: f,
  padding: o,
  isHorizontal: P,
  isInverted: S,
  ...G
}) {
  let _ = w === n;
  S && (_ = Math.abs(C) === n);
  let u = f / 2,
    I = !P && n > 0 ? u : o,
    R = !P && n !== l - 1 ? u : o,
    p = P && n !== l - 1 ? u : o,
    x = P && n > 0 ? u : o;
  return t("button", {
    "aria-label": `Scroll to page ${n + 1}`,
    type: "button",
    ...G,
    style: { ...D, padding: `${I}px ${p}px ${R}px ${x}px` },
    children: t(V.div, {
      style: { ...U },
      initial: !1,
      animate: { opacity: _ ? e : g },
      transition: { duration: 0.3 },
    }),
  });
}
var Gr = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto",
  },
  Lr = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0,
  };
Ht.loadFonts(["GF;Unbounded-regular", "GF;Unbounded-700"]);
var Lt = [
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
  Et = [
    '.framer-TlxII .framer-styles-preset-4znnbj:not(.rich-text-wrapper), .framer-TlxII .framer-styles-preset-4znnbj.rich-text-wrapper h2 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.8px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 1000px) { .framer-TlxII .framer-styles-preset-4znnbj:not(.rich-text-wrapper), .framer-TlxII .framer-styles-preset-4znnbj.rich-text-wrapper h2 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.8px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 999px) and (min-width: 0px) { .framer-TlxII .framer-styles-preset-4znnbj:not(.rich-text-wrapper), .framer-TlxII .framer-styles-preset-4znnbj.rich-text-wrapper h2 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.8px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  qt = "framer-TlxII";
var qr = re(_e),
  Xr = re(Ae),
  Yr = Vt(V.div),
  Zr = re(d),
  Kr = re(De),
  Qr = re(Be);
var Jr = {
  DpFMOLgVw: "(min-width: 810px) and (max-width: 1199px)",
  IOXlUETG2: "(min-width: 1200px)",
  MKz2FSMZh: "(max-width: 809px)",
};
var Xt = "framer-UN0CO",
  $r = {
    DpFMOLgVw: "framer-v-1220stf",
    IOXlUETG2: "framer-v-1eh1pax",
    MKz2FSMZh: "framer-v-1d4qmv0",
  },
  ea = {
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
  Yt = { damping: 85, delay: 0.4, mass: 1, stiffness: 212, type: "spring" },
  ta = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Yt,
    x: 0,
    y: -100,
  },
  Xe = je(),
  ra = { "Desktop-Wide": "IOXlUETG2", Phone: "MKz2FSMZh", Tablet: "DpFMOLgVw" },
  aa = ({ height: e, id: g, width: l, ...n }) => {
    var w, C;
    return {
      ...n,
      variant:
        (C = (w = ra[n.variant]) !== null && w !== void 0 ? w : n.variant) !==
          null && C !== void 0
          ? C
          : "IOXlUETG2",
    };
  },
  oa = he(function (e, g) {
    let { activeLocale: l, setLocale: n } = It(),
      { style: w, className: C, layoutId: U, variant: D, ...f } = aa(e);
    St(() => {
      let p = je(void 0, l);
      if (((document.title = p.title || ""), p.viewport)) {
        var x;
        (x = document.querySelector('meta[name="viewport"]')) === null ||
          x === void 0 ||
          x.setAttribute("content", p.viewport);
      }
      if (p.robots) {
        let c = document.querySelector('meta[name="robots"]');
        c
          ? c.setAttribute("content", p.robots)
          : ((c = document.createElement("meta")),
            c.setAttribute("name", "robots"),
            c.setAttribute("content", p.robots),
            document.head.appendChild(c));
      }
      if (p.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((c) => c.startsWith("framer-body-"))
            .map((c) => document.body.classList.remove(c)),
          document.body.classList.add(`${p.bodyClassName}-framer-UN0CO`),
          () => {
            document.body.classList.remove(`${p.bodyClassName}-framer-UN0CO`);
          }
        );
    }, [void 0, l]);
    let [o, P] = Tt(D, Jr, !1),
      S = void 0,
      G = W(null),
      _ = Ft("M_PvtITaV"),
      u = W(null),
      I = Ct(),
      R = [qt];
    return (
      zt({}),
      t(Mt.Provider, {
        value: { primaryVariantId: "IOXlUETG2", variantClassNames: $r },
        children: k(ge, {
          id: U ?? I,
          children: [
            k(V.div, {
              ...f,
              className: He(Xt, ...R, "framer-1eh1pax", C),
              ref: g ?? G,
              style: { ...w },
              children: [
                k("div", {
                  className: "framer-1kxoe9j",
                  "data-framer-name": "Background",
                  name: "Background",
                  children: [
                    t(V.div, {
                      className: "framer-1fh5r1w",
                      "data-framer-name": "Overlay",
                      name: "Overlay",
                      style: { transformPerspective: 1200 },
                    }),
                    t(ee, {
                      children: t(te, {
                        className: "framer-12z826f-container",
                        layoutScroll: !0,
                        children: t(_e, {
                          back: "var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(0, 0, 0))",
                          diagonal: !0,
                          direction: "left",
                          duration: 5,
                          front: "rgb(23, 23, 23)",
                          height: "100%",
                          id: "ZROdDAL7D",
                          layoutId: "ZROdDAL7D",
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
                t(ee, {
                  width: "100vw",
                  children: t(te, {
                    className: "framer-1b73fcn-container",
                    layoutScroll: !0,
                    children: t(we, {
                      breakpoint: o,
                      overrides: {
                        DpFMOLgVw: { variant: "qckzdw_18" },
                        MKz2FSMZh: { variant: "qckzdw_18" },
                      },
                      children: t(Ae, {
                        gGSU0bs4G: "nrcCICgod",
                        height: "100%",
                        id: "jouWESv0n",
                        layoutId: "jouWESv0n",
                        style: { width: "100%" },
                        variant: "lzTpoNZtf",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                k("div", {
                  className: "framer-10aakj5",
                  "data-framer-name": "Main",
                  name: "Main",
                  children: [
                    t(we, {
                      breakpoint: o,
                      overrides: {
                        MKz2FSMZh: {
                          __framer__styleAppearEffectEnabled: void 0,
                          style: {},
                        },
                      },
                      children: t(Yr, {
                        __framer__animate: { transition: Yt },
                        __framer__animateOnce: !0,
                        __framer__enter: ea,
                        __framer__exit: ta,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-zzxuws",
                        "data-framer-name": "Heading",
                        name: "Heading",
                        style: { transformPerspective: 1200 },
                        children: t(_t, {
                          __fromCanvasComponent: !0,
                          children: t(xt, {
                            children: t("h2", {
                              className: "framer-styles-preset-4znnbj",
                              "data-styles-preset": "rZemCCbaP",
                              style: {
                                "--framer-text-color":
                                  "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                              },
                              children:
                                "Transforming Brands, Elevating Engagement: Discover Our Success Stories",
                            }),
                          }),
                          className: "framer-12aqlkh",
                          fonts: ["Inter"],
                          id: _,
                          ref: u,
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    t(ee, {
                      children: t(te, {
                        className: "framer-uogv9e-container",
                        children: t(d, {
                          alignment: "center",
                          arrowOptions: {
                            arrowFill: "rgba(0, 0, 0, 0.2)",
                            arrowGap: 10,
                            arrowPadding: 20,
                            arrowPaddingBottom: 0,
                            arrowPaddingLeft: 0,
                            arrowPaddingRight: 0,
                            arrowPaddingTop: 0,
                            arrowPosition: "auto",
                            arrowRadius: 40,
                            arrowShouldFadeIn: !1,
                            arrowShouldSpace: !0,
                            arrowSize: 40,
                            showMouseControls: !0,
                          },
                          autoPlayControl: !0,
                          borderRadius: 0,
                          direction: "left",
                          dragControl: !0,
                          effectsOptions: {
                            effectsHover: !0,
                            effectsOpacity: 1,
                            effectsPerspective: 1200,
                            effectsRotate: 0,
                            effectsScale: 1,
                          },
                          fadeOptions: {
                            fadeAlpha: 0,
                            fadeContent: !1,
                            fadeInset: 0,
                            fadeWidth: 25,
                            overflow: !1,
                          },
                          gap: 10,
                          height: "100%",
                          id: "xxV34USrj",
                          intervalControl: 1.5,
                          itemAmount: 1,
                          layoutId: "xxV34USrj",
                          padding: 0,
                          paddingBottom: 0,
                          paddingLeft: 0,
                          paddingPerSide: !1,
                          paddingRight: 0,
                          paddingTop: 0,
                          progressOptions: {
                            dotsActiveOpacity: 1,
                            dotsBackground: "rgba(0, 0, 0, 0.2)",
                            dotsBlur: 0,
                            dotsFill: "rgb(255, 255, 255)",
                            dotsGap: 10,
                            dotsInset: 10,
                            dotSize: 10,
                            dotsOpacity: 0.5,
                            dotsPadding: 10,
                            dotsRadius: 50,
                            showProgressDots: !0,
                          },
                          slots: [
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 948,
                                pixelWidth: 1889,
                                positionX: "right",
                                positionY: "top",
                                sizes: "400px",
                                src: "./images/fJWuE4ty0qQT4ZKBgzW52Ax8kKU.png",
                                srcSet:
                                  "./images/fJWuE4ty0qQT4ZKBgzW52Ax8kKU.png?scale-down-to=512 512w,./images/fJWuE4ty0qQT4ZKBgzW52Ax8kKU.png?scale-down-to=1024 1024w,./images/fJWuE4ty0qQT4ZKBgzW52Ax8kKU.png 1889w",
                              },
                              className: "framer-17jvpj7",
                              "data-framer-name": "1.0",
                              name: "1.0",
                            }),
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 902,
                                pixelWidth: 1897,
                                positionX: "33.8%",
                                positionY: "48%",
                                sizes: "400px",
                                src: "./images/MbLrYWlCsVGeebOqNkDvGWvTrHY.png",
                                srcSet:
                                  "./images/MbLrYWlCsVGeebOqNkDvGWvTrHY.png?scale-down-to=512 512w,./images/MbLrYWlCsVGeebOqNkDvGWvTrHY.png?scale-down-to=1024 1024w,./images/MbLrYWlCsVGeebOqNkDvGWvTrHY.png 1897w",
                              },
                              className: "framer-80063m",
                              "data-framer-name": "1.1",
                              name: "1.1",
                            }),
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 945,
                                pixelWidth: 1887,
                                sizes: "400px",
                                src: "./images/snMqH3Bq8QwiWSrlt2CdsYc02zU.png",
                                srcSet:
                                  "./images/snMqH3Bq8QwiWSrlt2CdsYc02zU.png?scale-down-to=512 512w,./images/snMqH3Bq8QwiWSrlt2CdsYc02zU.png?scale-down-to=1024 1024w,./images/snMqH3Bq8QwiWSrlt2CdsYc02zU.png 1887w",
                              },
                              className: "framer-1ld49nm",
                              "data-framer-name": "1.2",
                              name: "1.2",
                            }),
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 945,
                                pixelWidth: 1871,
                                sizes: "386px",
                                src: "./images/qLncJ5rcq5FJGxtZJpRxtStzi0.png",
                                srcSet:
                                  "./images/qLncJ5rcq5FJGxtZJpRxtStzi0.png?scale-down-to=512 512w,./images/qLncJ5rcq5FJGxtZJpRxtStzi0.png?scale-down-to=1024 1024w,./images/qLncJ5rcq5FJGxtZJpRxtStzi0.png 1871w",
                              },
                              className: "framer-1xr9lj5",
                              "data-framer-name": "1.3",
                              name: "1.3",
                            }),
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 891,
                                pixelWidth: 1916,
                                positionX: "left",
                                positionY: "top",
                                sizes: "400px",
                                src: "./images/GVUaZvr25HXw0qOmNH42m6Tt0.png",
                                srcSet:
                                  "./images/GVUaZvr25HXw0qOmNH42m6Tt0.png?scale-down-to=512 512w,./images/GVUaZvr25HXw0qOmNH42m6Tt0.png?scale-down-to=1024 1024w,./images/GVUaZvr25HXw0qOmNH42m6Tt0.png 1916w",
                              },
                              className: "framer-4hzu5t",
                              "data-framer-name": "2",
                              name: "2",
                            }),
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 900,
                                pixelWidth: 1919,
                                positionX: "left",
                                positionY: "center",
                                sizes: "400px",
                                src: "./images/lZbQIfVAvbbijugeF6TbK4s17Y.png",
                                srcSet:
                                  "./images/lZbQIfVAvbbijugeF6TbK4s17Y.png?scale-down-to=512 512w,./images/lZbQIfVAvbbijugeF6TbK4s17Y.png?scale-down-to=1024 1024w,./images/lZbQIfVAvbbijugeF6TbK4s17Y.png 1919w",
                              },
                              className: "framer-ij5uf2",
                              "data-framer-name": "3",
                              name: "3",
                            }),
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 907,
                                pixelWidth: 1919,
                                positionX: "left",
                                positionY: "top",
                                sizes: "400px",
                                src: "./images/gCyPs18jPNHKfQoaXGIntuXfsgc.png",
                                srcSet:
                                  "./images/gCyPs18jPNHKfQoaXGIntuXfsgc.png?scale-down-to=512 512w,./images/gCyPs18jPNHKfQoaXGIntuXfsgc.png?scale-down-to=1024 1024w,./images/gCyPs18jPNHKfQoaXGIntuXfsgc.png 1919w",
                              },
                              className: "framer-mcoths",
                              "data-framer-name": "4",
                              name: "4",
                            }),
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 910,
                                pixelWidth: 1919,
                                positionX: "left",
                                positionY: "center",
                                sizes: "400px",
                                src: "./images/YFspgNsOnl7vxTZj0wywUengGw.png",
                                srcSet:
                                  "./images/YFspgNsOnl7vxTZj0wywUengGw.png?scale-down-to=512 512w,./images/YFspgNsOnl7vxTZj0wywUengGw.png?scale-down-to=1024 1024w,./images/YFspgNsOnl7vxTZj0wywUengGw.png 1919w",
                              },
                              className: "framer-1i2lns9",
                              "data-framer-name": "5",
                              name: "5",
                            }),
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fill",
                                pixelHeight: 906,
                                pixelWidth: 1896,
                                positionX: "left",
                                positionY: "top",
                                sizes: "400px",
                                src: "./images/du0s6cm5fG5QJlg7rTzYv2Bhf4.png",
                                srcSet:
                                  "./images/du0s6cm5fG5QJlg7rTzYv2Bhf4.png?scale-down-to=512 512w,./images/du0s6cm5fG5QJlg7rTzYv2Bhf4.png?scale-down-to=1024 1024w,./images/du0s6cm5fG5QJlg7rTzYv2Bhf4.png 1896w",
                              },
                              className: "framer-xfcpz7",
                              "data-framer-name": "6",
                              name: "6",
                            }),
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fit",
                                pixelHeight: 904,
                                pixelWidth: 1912,
                                positionX: "center",
                                positionY: "center",
                                sizes: "400px",
                                src: "./images/yYnLdhHfIJuGgZXdxBn0PMqHoA.png",
                                srcSet:
                                  "./images/yYnLdhHfIJuGgZXdxBn0PMqHoA.png?scale-down-to=512 512w,./images/yYnLdhHfIJuGgZXdxBn0PMqHoA.png?scale-down-to=1024 1024w,./images/yYnLdhHfIJuGgZXdxBn0PMqHoA.png 1912w",
                              },
                              className: "framer-5460my",
                              "data-framer-name": "7",
                              name: "7",
                            }),
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fit",
                                pixelHeight: 765,
                                pixelWidth: 1893,
                                positionX: "center",
                                positionY: "center",
                                sizes: "400px",
                                src: "./images/AnGVo8OxrebRdrFuKFvOna6TRA.png",
                                srcSet:
                                  "./images/AnGVo8OxrebRdrFuKFvOna6TRA.png?scale-down-to=512 512w,./images/AnGVo8OxrebRdrFuKFvOna6TRA.png?scale-down-to=1024 1024w,./images/AnGVo8OxrebRdrFuKFvOna6TRA.png 1893w",
                              },
                              className: "framer-1t1tq4v",
                              "data-framer-name": "8",
                              name: "8",
                            }),
                            t(v, {
                              background: {
                                alt: "",
                                fit: "fit",
                                pixelHeight: 827,
                                pixelWidth: 1900,
                                positionX: "left",
                                positionY: "center",
                                sizes: "400px",
                                src: "./images/EKROPwqWQdVSOeO2seONGPfRWE.png",
                                srcSet:
                                  "./images/EKROPwqWQdVSOeO2seONGPfRWE.png?scale-down-to=512 512w,./images/EKROPwqWQdVSOeO2seONGPfRWE.png?scale-down-to=1024 1024w,./images/EKROPwqWQdVSOeO2seONGPfRWE.png 1900w",
                              },
                              className: "framer-qhsd5r",
                              "data-framer-name": "9",
                              name: "9",
                            }),
                          ],
                          startFrom: 0,
                          style: { height: "100%", width: "100%" },
                          transitionControl: {
                            damping: 40,
                            stiffness: 200,
                            type: "spring",
                          },
                          width: "100%",
                        }),
                      }),
                    }),
                  ],
                }),
                t(ee, {
                  width: "100vw",
                  children: t(te, {
                    className: "framer-118h7le-container",
                    children: t(we, {
                      breakpoint: o,
                      overrides: {
                        DpFMOLgVw: { variant: "mKXCPqfUG" },
                        MKz2FSMZh: { variant: "BsZlXwif2" },
                      },
                      children: t(De, {
                        height: "100%",
                        id: "QoVkZNr2Q",
                        layoutId: "QoVkZNr2Q",
                        style: { width: "100%" },
                        variant: "zQXPtCkn3",
                        width: "100%",
                      }),
                    }),
                  }),
                }),
                t(ee, {
                  children: t(te, {
                    className: "framer-1lapt5x-container",
                    layoutScroll: !0,
                    children: t(Be, {
                      height: "100%",
                      id: "E4fZ44sO_",
                      intensity: 12,
                      layoutId: "E4fZ44sO_",
                      width: "100%",
                    }),
                  }),
                }),
              ],
            }),
            t("div", { className: He(Xt, ...R), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  na = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${Xe.bodyClassName}-framer-UN0CO { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10)); }`,
    ".framer-UN0CO.framer-ajq2xv, .framer-UN0CO .framer-ajq2xv { display: block; }",
    ".framer-UN0CO.framer-1eh1pax { align-content: center; align-items: center; background-color: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, #0a0a0a); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }",
    ".framer-UN0CO .framer-1kxoe9j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px; position: fixed; top: calc(50.00000000000002% - 100vh / 2); width: 100%; z-index: 0; }",
    '.framer-UN0CO .framer-1fh5r1w { background: radial-gradient(43.2% 25% at 50% 18.8%, rgba(84, 84, 84, 0) 0%, var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10)) /* {"name":"Dark Green"} */ 100%); flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }',
    ".framer-UN0CO .framer-12z826f-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: relative; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-UN0CO .framer-1b73fcn-container { flex: none; height: auto; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 10; }",
    ".framer-UN0CO .framer-10aakj5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-UN0CO .framer-zzxuws { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40vh; justify-content: center; overflow: hidden; padding: 40px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-UN0CO .framer-12aqlkh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; max-width: 740px; position: relative; text-shadow: 0px 1px 100px #000000; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-UN0CO .framer-uogv9e-container { flex: none; height: 546px; position: relative; width: 750px; }",
    ".framer-UN0CO .framer-17jvpj7, .framer-UN0CO .framer-80063m, .framer-UN0CO .framer-1ld49nm, .framer-UN0CO .framer-4hzu5t, .framer-UN0CO .framer-ij5uf2, .framer-UN0CO .framer-mcoths, .framer-UN0CO .framer-1i2lns9, .framer-UN0CO .framer-xfcpz7, .framer-UN0CO .framer-5460my, .framer-UN0CO .framer-1t1tq4v, .framer-UN0CO .framer-qhsd5r { height: 300px; position: relative; width: 400px; }",
    ".framer-UN0CO .framer-1xr9lj5 { height: 300px; position: relative; width: 386px; }",
    ".framer-UN0CO .framer-118h7le-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-UN0CO .framer-1lapt5x-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-UN0CO.framer-1eh1pax, .framer-UN0CO .framer-1kxoe9j, .framer-UN0CO .framer-10aakj5, .framer-UN0CO .framer-zzxuws { gap: 0px; } .framer-UN0CO.framer-1eh1pax > *, .framer-UN0CO .framer-10aakj5 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-UN0CO.framer-1eh1pax > :first-child, .framer-UN0CO .framer-10aakj5 > :first-child { margin-top: 0px; } .framer-UN0CO.framer-1eh1pax > :last-child, .framer-UN0CO .framer-10aakj5 > :last-child { margin-bottom: 0px; } .framer-UN0CO .framer-1kxoe9j > *, .framer-UN0CO .framer-zzxuws > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-UN0CO .framer-1kxoe9j > :first-child, .framer-UN0CO .framer-zzxuws > :first-child { margin-left: 0px; } .framer-UN0CO .framer-1kxoe9j > :last-child, .framer-UN0CO .framer-zzxuws > :last-child { margin-right: 0px; } }",
    "@media (min-width: 1200px) { .framer-UN0CO .hidden-1eh1pax { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-UN0CO .hidden-1220stf { display: none !important; } .${Xe.bodyClassName}-framer-UN0CO { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10)); } .framer-UN0CO.framer-1eh1pax { width: 810px; } .framer-UN0CO .framer-zzxuws { height: 30vh; } .framer-UN0CO .framer-12aqlkh { max-width: 490px; }}`,
    `@media (max-width: 809px) { .framer-UN0CO .hidden-1d4qmv0 { display: none !important; } .${Xe.bodyClassName}-framer-UN0CO { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10)); } .framer-UN0CO.framer-1eh1pax { overflow: hidden; width: 390px; } .framer-UN0CO .framer-1kxoe9j { order: 0; } .framer-UN0CO .framer-1b73fcn-container { order: 1; } .framer-UN0CO .framer-10aakj5 { order: 3; } .framer-UN0CO .framer-zzxuws { height: 30vh; padding: 40px 20px 0px 20px; } .framer-UN0CO .framer-12aqlkh { max-width: unset; } .framer-UN0CO .framer-uogv9e-container { height: 265px; width: 339px; } .framer-UN0CO .framer-118h7le-container { order: 4; } .framer-UN0CO .framer-1lapt5x-container { order: 2; }}`,
    ...Et,
  ],
  ye = Rt(oa, na, "framer-UN0CO"),
  Fa = ye;
ye.displayName = "Review";
ye.defaultProps = { height: 1705, width: 1200 };
Bt(
  ye,
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
    ...qr,
    ...Xr,
    ...Zr,
    ...Kr,
    ...Qr,
    ...At(Lt),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var ka = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerzVFenjhZ4",
      slots: [],
      annotations: {
        framerDisplayContentsDiv: "false",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1200",
        framerResponsiveScreen: "",
        framerIntrinsicHeight: "1705",
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"DpFMOLgVw":{"layout":["fixed","auto"]},"MKz2FSMZh":{"layout":["fixed","auto"]}}}',
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { ka as __FramerMetadata__, Fa as default };
//# sourceMappingURL=SpdlnvmdTzqVKRsQ9zEg2tRt7-Q46UdGvwS7c-o7_SQ.OEEZY66W.mjs.map
