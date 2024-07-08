import { a as st } from "./chunk-AQIDUISQ.mjs";
import { a as Yt } from "./chunk-N7PISP3R.mjs";
import { a as ar, b as nr, c as or } from "./chunk-DP2ZUAPZ.mjs";
import {
  a as at,
  b as Jt,
  c as Qt,
  d as $t,
  e as er,
  f as tr,
  g as rr,
} from "./chunk-4EK5LH4J.mjs";
import { b as nt, g as ot, h as it } from "./chunk-CZQVLD3V.mjs";
import "./chunk-42U43NKG.mjs";
import {
  $ as rt,
  A as X,
  Aa as Xt,
  Ba as je,
  Ca as Q,
  D as ce,
  Da as $,
  E as Gt,
  G as Dt,
  O as He,
  Q as et,
  S as tt,
  U as r,
  X as Me,
  _ as be,
  b as Je,
  ba as qt,
  c as Z,
  ca as S,
  d as Vt,
  da as k,
  f as Ot,
  fa as Ve,
  g as me,
  ga as Et,
  ha as Kt,
  i as jt,
  j as Tt,
  k as Y,
  ka as U,
  l as ze,
  m as At,
  n as Qe,
  o as Ne,
  p as A,
  q as B,
  sa as Wt,
  t,
  u as h,
  ua as Zt,
  v as $e,
  wa as Oe,
  x as f,
  xa as F,
  y as fe,
  ya as J,
  z as Bt,
} from "./chunk-PIBAGVPI.mjs";
import "./chunk-H3OQIIDF.mjs";
import "./chunk-ELYU6EKT.mjs";
var Te = () => typeof document == "object";
function na() {
  if (Te()) {
    if (typeof document.hidden < "u") return "visibilitychange";
    if (typeof document.msHidden < "u") return "msvisibilitychange";
    if (typeof document.webkitHidden < "u") return "webkitvisibilitychange";
  }
}
function oa() {
  if (Te()) {
    if (typeof document.hidden < "u") return "hidden";
    if (typeof document.msHidden < "u") return "msHidden";
    if (typeof document.webkitHidden < "u") return "webkitHidden";
  }
}
function ir() {
  if (Te()) return !document[oa()];
}
function sr() {
  if (!Te()) return;
  let [e, s] = B(ir()),
    l = () => s(ir());
  return (
    Y(() => {
      let o = na();
      return (
        document.addEventListener(o, l, !1),
        () => {
          document.removeEventListener(o, l);
        }
      );
    }),
    e
  );
}
var lt = 0.001;
function g(e) {
  let {
      slots: s,
      startFrom: l,
      direction: o,
      effectsOptions: c,
      autoPlayControl: x,
      dragControl: w,
      alignment: j,
      gap: i,
      padding: a,
      paddingPerSide: L,
      paddingTop: y,
      paddingRight: G,
      paddingBottom: T,
      paddingLeft: C,
      itemAmount: N,
      fadeOptions: D,
      intervalControl: I,
      transitionControl: R,
      arrowOptions: u,
      borderRadius: p,
      progressOptions: v,
      style: pe,
    } = e,
    {
      effectsOpacity: M,
      effectsScale: ue,
      effectsRotate: ee,
      effectsPerspective: he,
      effectsHover: ge,
    } = c,
    {
      fadeContent: te,
      overflow: ke,
      fadeWidth: q,
      fadeInset: re,
      fadeAlpha: pt,
    } = D,
    {
      showMouseControls: ut,
      arrowSize: W,
      arrowRadius: ht,
      arrowFill: gt,
      leftArrow: br,
      rightArrow: vr,
      arrowShouldSpace: ae = !0,
      arrowShouldFadeIn: xt = !1,
      arrowPosition: P,
      arrowPadding: xe,
      arrowGap: Ur,
      arrowPaddingTop: Lr,
      arrowPaddingRight: Cr,
      arrowPaddingBottom: Sr,
      arrowPaddingLeft: kr,
    } = u,
    {
      showProgressDots: Fr,
      dotSize: wt,
      dotsInset: yt,
      dotsRadius: _r,
      dotsPadding: Ir,
      dotsGap: Rr,
      dotsFill: Pr,
      dotsBackground: zr,
      dotsActiveOpacity: Nr,
      dotsOpacity: Hr,
      dotsBlur: bt,
    } = v,
    Mr = L ? `${y}px ${G}px ${T}px ${C}px` : `${a}px`,
    E = tt.current() === tt.canvas,
    _ = s.filter(Boolean),
    ne = Je.count(_) > 0,
    d = o === "left" || o === "right",
    Fe = o === "right" || o === "bottom";
  if (!ne)
    return h("section", {
      style: ia,
      children: [
        t("div", { style: sa, children: "\u2B50\uFE0F" }),
        t("p", { style: la, children: "Connect to Content" }),
        t("p", {
          style: da,
          children:
            "Add layers or components to make infinite auto-playing slideshows.",
        }),
      ],
    });
  let we = A(null),
    b = Ne(() => _.map((n) => Ot()), [_]),
    Be = A(void 0),
    [m, Vr] = B({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
    }),
    [Or, vt] = B(!1),
    [jr, Ut] = B(x),
    [Tr, Lt] = B(!1),
    [oe, Ct] = B(!1),
    Ge = [],
    St = 4;
  E && (St = 1);
  let kt = jt(() => {
    Dt.read(() => {
      if (ne && we.current) {
        let n = _.length - 1,
          O = d ? we.current.offsetWidth : we.current.offsetHeight,
          z = b[0].current
            ? d
              ? b[0].current.offsetLeft
              : b[0].current.offsetTop
            : 0,
          de =
            (b[n].current
              ? d
                ? b[n].current.offsetLeft + b[n].current.offsetWidth
                : b[n].current.offsetTop + b[n].current.offsetHeight
              : 0) -
            z +
            i,
          Re = b[0].current
            ? d
              ? b[0].current.offsetWidth
              : b[0].current.offsetHeight
            : 0,
          Xe = b[0].current ? b[0].current.offsetWidth : 0,
          Ye = b[0].current ? b[0].current.offsetHeight : 0;
        Vr({
          parent: O,
          children: de,
          item: Re,
          itemWidth: Xe,
          itemHeight: Ye,
        });
      }
    });
  }, [ne]);
  Qe(() => {
    ne && kt();
  }, [ne, N]);
  let De = A(!0);
  Y(
    () =>
      Yt(we.current, ({ contentSize: n }) => {
        !De.current && (n.width || n.height) && (kt(), Ct(!0)),
          (De.current = !1);
      }),
    []
  ),
    Y(() => {
      if (oe) {
        let n = setTimeout(() => Ct(!1), 500);
        return () => clearTimeout(n);
      }
    }, [oe]);
  let ie = _?.length,
    _e = E ? 0 : m?.children,
    qe = m?.item + i,
    Ar = l * qe,
    [V, ye] = B(l + ie),
    [Br, Ft] = B(!1),
    _t = sr(),
    It = Fe ? 1 : -1,
    se = Bt(_e),
    Rt = d ? -l * (m?.itemWidth + i) : -l * (m?.itemHeight + i),
    Ee = () => It * V * qe,
    Ke = E
      ? 0
      : X(se, (n) => {
          let O = ce(-_e, -_e * 2, n);
          return isNaN(O) ? 0 : O;
        }),
    Gr = ce(0, ie, V),
    Dr = ce(0, -ie, V);
  Qe(() => {
    m?.children !== null && !De.current && oe && se.set(Ee());
  }, [m, _e, It, Ar, V, qe, oe]);
  let Pt = () => {
      E ||
        !ne ||
        !m.parent ||
        Br ||
        (se.get() !== Ee() && Gt(se, Ee(), R),
        x &&
          jr &&
          (Be.current = setTimeout(() => {
            ye(V + 1), Pt();
          }, I * 1e3)));
    },
    le = (n) => {
      ye(Fe ? V - n : V + n);
    },
    qr = (n) => {
      let O = ce(0, ie, V),
        z = ce(0, -ie, V),
        K = n - O,
        de = n - Math.abs(z);
      ye(Fe ? V - de : V + K);
    },
    Er = () => {
      Ft(!0);
    },
    Kr = (n, { offset: O, velocity: z }) => {
      Ft(!1);
      let K = d ? O.x : O.y,
        de = 200,
        Re = d ? z.x : z.y,
        Xe = K < -m.item / 2,
        Ye = K > m.item / 2,
        aa = Math.abs(K),
        Pe = Math.round(aa / m.item),
        Mt = Pe === 0 ? 1 : Pe;
      Re > de ? le(-Mt) : Re < -de ? le(Mt) : (Xe && le(Pe), Ye && le(-Pe));
    };
  Y(() => {
    if (!(!_t || oe)) return Pt(), () => Be.current && clearTimeout(Be.current);
  }, [Ge, _t, oe]);
  let Wr = 0,
    zt = `calc(${100 / N}% - ${i}px + ${i / N}px)`;
  for (let n = 0; n < St; n++)
    Ge.push(
      ...Je.map(_, (O, z) => {
        let K;
        return (
          z === 0 && (K = b[0]),
          z === _.length - 1 && (K = b[1]),
          t(
            ca,
            {
              ref: b[z],
              slideKey: n + z + "lg",
              index: n,
              width: d && N > 1 ? zt : "100%",
              height: d ? "100%" : N > 1 ? zt : "100%",
              size: m,
              child: O,
              numChildren: _?.length,
              wrappedValue: Ke,
              childCounter: Wr++,
              gap: i,
              isCanvas: E,
              isHorizontal: d,
              effectsOpacity: M,
              effectsScale: ue,
              effectsRotate: ee,
              children: n + z,
            },
            n + z + "lg"
          )
        );
      })
    );
  let Zr = d ? "to right" : "to bottom",
    Nt = q / 2,
    Xr = 100 - q / 2,
    Yr = fa(re, 0, Nt),
    Jr = 100 - re,
    We = `linear-gradient(${Zr}, rgba(0, 0, 0, ${pt}) ${Yr}%, rgba(0, 0, 0, 1) ${Nt}%, rgba(0, 0, 0, 1) ${Xr}%, rgba(0, 0, 0, ${pt}) ${Jr}%)`,
    Ze = [],
    Ie = {};
  if (Fr) {
    for (let n = 0; n < _?.length; n++)
      Ze.push(
        t(
          pa,
          {
            dotStyle: { ...ha, width: wt, height: wt, backgroundColor: Pr },
            buttonStyle: dt,
            selectedOpacity: Nr,
            opacity: Hr,
            onClick: () => qr(n),
            wrappedIndex: Gr,
            wrappedIndexInverted: Dr,
            total: ie,
            index: n,
            gap: Rr,
            padding: Ir,
            isHorizontal: d,
            isInverted: Fe,
          },
          n
        )
      );
    bt > 0 &&
      (Ie.backdropFilter =
        Ie.WebkitBackdropFilter =
        Ie.MozBackdropFilter =
          `blur(${bt}px)`);
  }
  let Qr = w
      ? {
          drag: d ? "x" : "y",
          onDragStart: Er,
          onDragEnd: Kr,
          dragDirectionLock: !0,
          values: { x: se, y: se },
          dragMomentum: !1,
        }
      : {},
    $r = P === "top-left" || P === "top-mid" || P === "top-right",
    ea = P === "bottom-left" || P === "bottom-mid" || P === "bottom-right",
    ta = P === "top-left" || P === "bottom-left",
    ra = P === "top-right" || P === "bottom-right",
    Ht = P === "top-mid" || P === "bottom-mid" || P === "auto";
  return h("section", {
    style: {
      ...lr,
      padding: Mr,
      WebkitMaskImage: te ? We : void 0,
      MozMaskImage: te ? We : void 0,
      maskImage: te ? We : void 0,
      opacity: m?.item !== null ? 1 : lt,
      userSelect: "none",
    },
    onMouseEnter: () => {
      vt(!0), ge || Ut(!1);
    },
    onMouseLeave: () => {
      vt(!1), ge || Ut(!0);
    },
    onMouseDown: (n) => {
      n.preventDefault(), Lt(!0);
    },
    onMouseUp: () => Lt(!1),
    children: [
      t("div", {
        style: {
          width: "100%",
          height: "100%",
          margin: 0,
          padding: "inherit",
          position: "absolute",
          inset: 0,
          overflow: ke ? "visible" : "hidden",
          borderRadius: p,
          userSelect: "none",
          perspective: E ? "none" : he,
        },
        children: t(f.ul, {
          ref: we,
          ...Qr,
          style: {
            ...lr,
            gap: i,
            placeItems: j,
            x: d ? (E ? Rt : Ke) : 0,
            y: d ? 0 : E ? Rt : Ke,
            flexDirection: d ? "row" : "column",
            transformStyle: ee !== 0 && !E ? "preserve-3d" : void 0,
            cursor: w ? (Tr ? "grabbing" : "grab") : "auto",
            userSelect: "none",
            ...pe,
          },
          children: Ge,
        }),
      }),
      h("fieldset", {
        style: { ...ma },
        "aria-label": "Slideshow pagination controls",
        className: "framer--slideshow-controls",
        children: [
          h(f.div, {
            style: {
              position: "absolute",
              display: "flex",
              flexDirection: d ? "row" : "column",
              justifyContent: ae ? "space-between" : "center",
              gap: ae ? "unset" : Ur,
              opacity: xt ? lt : 1,
              alignItems: "center",
              inset: xe,
              top: ae ? xe : $r ? Lr : "unset",
              left: ae ? xe : ta ? kr : Ht ? 0 : "unset",
              right: ae ? xe : ra ? Cr : Ht ? 0 : "unset",
              bottom: ae ? xe : ea ? Sr : "unset",
            },
            animate: xt && { opacity: Or ? 1 : lt },
            transition: R,
            children: [
              t(f.button, {
                type: "button",
                style: {
                  ...dt,
                  backgroundColor: gt,
                  width: W,
                  height: W,
                  borderRadius: ht,
                  rotate: d ? 0 : 90,
                  display: ut ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => le(-1),
                "aria-label": "Previous",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: t("img", {
                  width: W,
                  height: W,
                  src: br || "./images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg",
                  alt: "Back Arrow",
                }),
              }),
              t(f.button, {
                type: "button",
                style: {
                  ...dt,
                  backgroundColor: gt,
                  width: W,
                  height: W,
                  borderRadius: ht,
                  rotate: d ? 0 : 90,
                  display: ut ? "block" : "none",
                  pointerEvents: "auto",
                },
                onClick: () => le(1),
                "aria-label": "Next",
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: t("img", {
                  width: W,
                  height: W,
                  src: vr || "./images/11KSGbIZoRSg4pjdnUoif6MKHI.svg",
                  alt: "Next Arrow",
                }),
              }),
            ],
          }),
          Ze.length > 1
            ? t("div", {
                style: {
                  ...ua,
                  left: d ? "50%" : yt,
                  top: d ? "unset" : "50%",
                  transform: d ? "translateX(-50%)" : "translateY(-50%)",
                  flexDirection: d ? "row" : "column",
                  bottom: d ? yt : "unset",
                  borderRadius: _r,
                  backgroundColor: zr,
                  userSelect: "none",
                  ...Ie,
                },
                children: Ze,
              })
            : null,
        ],
      }),
    ],
  });
}
g.defaultProps = {
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
Me(g, {
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
    defaultValue: g.defaultProps.direction,
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
    defaultValue: g.defaultProps.startFrom,
  },
  effectsOptions: {
    type: r.Object,
    title: "Effects",
    controls: {
      effectsOpacity: {
        type: r.Number,
        title: "Opacity",
        defaultValue: g.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsScale: {
        type: r.Number,
        title: "Scale",
        defaultValue: g.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: !0,
      },
      effectsPerspective: {
        type: r.Number,
        title: "Perspective",
        defaultValue: g.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: r.Number,
        title: "Rotate",
        defaultValue: g.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: r.Boolean,
        title: "On Hover",
        enabledTitle: "Play",
        disabledTitle: "Pause",
        defaultValue: g.defaultProps.effectsOptions.effectsHover,
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
    defaultValue: g.defaultProps.itemAmount,
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
    defaultValue: g.defaultProps.transitionControl,
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
        defaultValue: g.defaultProps.arrowOptions.showMouseControls,
      },
      arrowFill: {
        type: r.Color,
        title: "Fill",
        hidden: (e) => !e.showMouseControls,
        defaultValue: g.defaultProps.arrowOptions.arrowFill,
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
        defaultValue: g.defaultProps.arrowOptions.arrowSize,
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
        defaultValue: g.defaultProps.arrowOptions.arrowShouldSpace,
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
var lr = {
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
  ia = {
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
  sa = { fontSize: 32, marginBottom: 10 },
  la = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: "center" },
  da = {
    margin: 0,
    opacity: 0.7,
    maxWidth: 180,
    lineHeight: 1.5,
    textAlign: "center",
  },
  dt = {
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
  ma = {
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
  fa = (e, s, l) => Math.min(Math.max(e, s), l),
  ca = me(function (s, l) {
    var o, c;
    let {
        slideKey: x,
        width: w,
        height: j,
        child: i,
        size: a,
        gap: L,
        wrappedValue: y,
        numChildren: G,
        childCounter: T,
        isCanvas: C,
        effects: N,
        effectsOpacity: D,
        effectsScale: I,
        effectsRotate: R,
        isHorizontal: u,
        isLast: p,
        index: v,
      } = s,
      pe = (a?.item + L) * T,
      M = [-a?.item, 0, a?.parent - a?.item + L, a?.parent].map((q) => q - pe),
      ue = !C && X(y, M, [-R, 0, 0, R]),
      ee = !C && X(y, M, [R, 0, 0, -R]),
      he = !C && X(y, M, [D, 1, 1, D]),
      ge = !C && X(y, M, [I, 1, 1, I]),
      te = !C && X(y, M, [1, 1, 0, 0]),
      ke = !C && X(y, (q) => q >= M[1] && q <= M[2]);
    return (
      Y(() => {
        if (ke)
          return ke.onChange((q) => {
            var re;
            (re = l.current) === null ||
              re === void 0 ||
              re.setAttribute("aria-hidden", !q);
          });
      }, []),
      t(fe, {
        inherit: "id",
        children: t("li", {
          style: { display: "contents" },
          "aria-hidden": v !== 0,
          children: Vt(
            i,
            {
              ref: l,
              key: x + "child",
              style: {
                ...((o = i.props) === null || o === void 0 ? void 0 : o.style),
                flexShrink: 0,
                userSelect: "none",
                width: w,
                height: j,
                opacity: he,
                scale: ge,
                originX: u ? te : 0.5,
                originY: u ? 0.5 : te,
                rotateY: u ? ue : 0,
                rotateX: u ? 0 : ee,
              },
              layoutId: i.props.layoutId
                ? i.props.layoutId + "-original-" + v
                : void 0,
            },
            (c = i.props) === null || c === void 0 ? void 0 : c.children
          ),
        }),
      })
    );
  });
function pa({
  selectedOpacity: e,
  opacity: s,
  total: l,
  index: o,
  wrappedIndex: c,
  wrappedIndexInverted: x,
  dotStyle: w,
  buttonStyle: j,
  gap: i,
  padding: a,
  isHorizontal: L,
  isInverted: y,
  ...G
}) {
  let T = c === o;
  y && (T = Math.abs(x) === o);
  let C = i / 2,
    N = !L && o > 0 ? C : a,
    D = !L && o !== l - 1 ? C : a,
    I = L && o !== l - 1 ? C : a,
    R = L && o > 0 ? C : a;
  return t("button", {
    "aria-label": `Scroll to page ${o + 1}`,
    type: "button",
    ...G,
    style: { ...j, padding: `${N}px ${I}px ${D}px ${R}px` },
    children: t(f.div, {
      style: { ...w },
      initial: !1,
      animate: { opacity: T ? e : s },
      transition: { duration: 0.3 },
    }),
  });
}
var ua = {
    display: "flex",
    placeContent: "center",
    placeItems: "center",
    overflow: "hidden",
    position: "absolute",
    pointerEvents: "auto",
  },
  ha = {
    borderRadius: "50%",
    background: "white",
    cursor: "pointer",
    border: "none",
    placeContent: "center",
    placeItems: "center",
    padding: 0,
  };
Oe.loadFonts(["GF;Unbounded-500", "GF;Unbounded-700"]);
var dr = [
    {
      explicitInter: !0,
      fonts: [
        {
          family: "Unbounded",
          source: "google",
          style: "normal",
          url: "https://fonts.gstatic.com/s/unbounded/v7/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG6yrx04jHgP6LR0Y.woff2",
          weight: "500",
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
  mr = [
    '.framer-N8k9p .framer-styles-preset-xz2g08:not(.rich-text-wrapper), .framer-N8k9p .framer-styles-preset-xz2g08.rich-text-wrapper h5 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #333333; --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-N8k9p .framer-styles-preset-xz2g08:not(.rich-text-wrapper), .framer-N8k9p .framer-styles-preset-xz2g08.rich-text-wrapper h5 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #333333; --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-N8k9p .framer-styles-preset-xz2g08:not(.rich-text-wrapper), .framer-N8k9p .framer-styles-preset-xz2g08.rich-text-wrapper h5 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: 0em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: #333333; --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  fr = "framer-N8k9p";
var wa = ["ptlAZagH1"],
  ya = "framer-kHGKi",
  ba = { ptlAZagH1: "framer-v-1k9eo9" };
var va = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" },
  mt = (e) => e != null && e !== "",
  cr = (e) =>
    typeof e == "object" && e !== null && typeof e.src == "string"
      ? e
      : typeof e == "string"
      ? { src: e }
      : void 0,
  Ua = ({ value: e, children: s }) => {
    let l = Tt($e),
      o = e ?? l.transition,
      c = Ne(() => ({ ...l, transition: o }), [JSON.stringify(o)]);
    return t($e.Provider, { value: c, children: s });
  },
  La = f(Z),
  Ca = ({
    clientImage: e,
    designation: s,
    height: l,
    id: o,
    logo: c,
    name1: x,
    testimonial: w,
    width: j,
    ...i
  }) => {
    var a, L, y;
    return {
      ...i,
      bmwajhGqS:
        (a = s ?? i.bmwajhGqS) !== null && a !== void 0 ? a : "CEO, Company",
      fwB3JSARf:
        (L = w ?? i.fwB3JSARf) !== null && L !== void 0
          ? L
          : "Bright Horizon Marketing has been an invaluable partner for our bakery. Their team's expertise in SEO and online marketing has helped us stand out in a competitive market. From optimizing our website to managing our social media presence, their strategic approach has delivered impressive results. Thanks to their efforts, we've seen a significant increase in online orders and customer engagement. I couldn't be happier with the results, and I highly recommend Bright Horizon Marketing to anyone looking to grow their business online.",
      mpLUz063Z:
        (y = x ?? i.mpLUz063Z) !== null && y !== void 0 ? y : "S. Thompson",
      YRgWTIsA7: e ?? i.YRgWTIsA7,
      zAxjXyH9a: c ?? i.zAxjXyH9a,
    };
  },
  Sa = (e, s) => s.join("-") + e.layoutDependency,
  ka = me(function (e, s) {
    let { activeLocale: l, setLocale: o } = He(),
      {
        style: c,
        className: x,
        layoutId: w,
        variant: j,
        YRgWTIsA7: i,
        mpLUz063Z: a,
        bmwajhGqS: L,
        zAxjXyH9a: y,
        fwB3JSARf: G,
        ...T
      } = Ca(e),
      {
        baseVariant: C,
        classNames: N,
        gestureVariant: D,
        setGestureState: I,
        setVariant: R,
        variants: u,
      } = Zt({
        cycleOrder: wa,
        defaultVariant: "ptlAZagH1",
        variant: j,
        variantClassNames: ba,
      }),
      p = Sa(e, u),
      v = A(null),
      pe = mt(y),
      M = mt(G),
      ue = mt(i),
      ee = ze(),
      he = [$t, fr, rr],
      ge = qt();
    return t(fe, {
      id: w ?? ee,
      children: t(La, {
        animate: u,
        initial: !1,
        children: t(Ua, {
          value: va,
          children: h(f.div, {
            ...T,
            className: be(ya, ...he, "framer-1k9eo9", x, N),
            "data-framer-name": "Variant 1",
            layoutDependency: p,
            layoutId: "ptlAZagH1",
            onHoverEnd: () => I({ isHovered: !1 }),
            onHoverStart: () => I({ isHovered: !0 }),
            onTap: () => I({ isPressed: !1 }),
            onTapCancel: () => I({ isPressed: !1 }),
            onTapStart: () => I({ isPressed: !0 }),
            ref: s ?? v,
            style: {
              backdropFilter: "blur(5px)",
              backgroundColor:
                "var(--token-affa1b72-7c43-4531-b217-6ad9a97be289, rgba(255, 255, 255, 0.05))",
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              WebkitBackdropFilter: "blur(5px)",
              ...c,
            },
            children: [
              h(f.div, {
                className: "framer-ybbtu4",
                layoutDependency: p,
                layoutId: "ajT6gTx1f",
                children: [
                  t(f.div, {
                    className: "framer-102ue22",
                    layoutDependency: p,
                    layoutId: "IzrHTAj1i",
                    children: t(Xt, {
                      className: "framer-1aaacdg",
                      "data-framer-name": "Frame 2952",
                      layout: "position",
                      layoutDependency: p,
                      layoutId: "qx748MXTE",
                      opacity: 1,
                      svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 97 12"><path d="M 10.122 7.429 C 9.968 7.583 9.897 7.807 9.932 8.026 L 10.462 11.056 C 10.507 11.312 10.402 11.572 10.194 11.721 C 9.99 11.875 9.719 11.893 9.496 11.77 L 6.856 10.348 C 6.764 10.297 6.662 10.27 6.558 10.267 L 6.396 10.267 C 6.34 10.276 6.285 10.294 6.235 10.322 L 3.594 11.751 C 3.463 11.819 3.315 11.843 3.17 11.819 C 2.817 11.75 2.582 11.403 2.64 11.037 L 3.17 8.007 C 3.206 7.786 3.135 7.561 2.98 7.404 L 0.827 5.249 C 0.647 5.069 0.584 4.798 0.667 4.553 C 0.747 4.309 0.951 4.132 1.197 4.092 L 4.16 3.648 C 4.386 3.624 4.583 3.482 4.685 3.273 L 5.991 0.508 C 6.022 0.446 6.062 0.39 6.11 0.342 L 6.163 0.299 C 6.191 0.267 6.224 0.24 6.259 0.218 L 6.324 0.194 L 6.426 0.151 L 6.677 0.151 C 6.901 0.175 7.098 0.313 7.202 0.52 L 8.525 3.273 C 8.62 3.474 8.805 3.614 9.019 3.648 L 11.983 4.092 C 12.233 4.128 12.442 4.307 12.525 4.553 C 12.603 4.8 12.536 5.071 12.352 5.249 Z" fill="var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(255, 132, 66))"></path><path d="M 31.076 7.429 C 30.922 7.583 30.851 7.807 30.886 8.026 L 31.416 11.056 C 31.46 11.312 31.356 11.572 31.147 11.721 C 30.944 11.875 30.672 11.893 30.45 11.77 L 27.809 10.348 C 27.717 10.297 27.615 10.27 27.511 10.267 L 27.349 10.267 C 27.293 10.276 27.239 10.294 27.188 10.322 L 24.547 11.751 C 24.417 11.819 24.269 11.843 24.124 11.819 C 23.771 11.75 23.535 11.403 23.593 11.037 L 24.124 8.007 C 24.159 7.786 24.088 7.561 23.934 7.404 L 21.781 5.249 C 21.601 5.069 21.538 4.798 21.62 4.553 C 21.7 4.309 21.904 4.132 22.15 4.092 L 25.114 3.648 C 25.339 3.624 25.537 3.482 25.638 3.273 L 26.944 0.508 C 26.975 0.446 27.015 0.39 27.063 0.342 L 27.117 0.299 C 27.145 0.267 27.177 0.24 27.213 0.218 L 27.278 0.194 L 27.379 0.151 L 27.63 0.151 C 27.854 0.175 28.052 0.313 28.155 0.52 L 29.478 3.273 C 29.573 3.474 29.759 3.614 29.973 3.648 L 32.936 4.092 C 33.187 4.128 33.396 4.307 33.479 4.553 C 33.557 4.8 33.489 5.071 33.306 5.249 Z" fill="var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(255, 132, 66))"></path><path d="M 52.029 7.429 C 51.875 7.583 51.804 7.807 51.839 8.026 L 52.369 11.056 C 52.414 11.312 52.309 11.572 52.101 11.721 C 51.897 11.875 51.626 11.893 51.403 11.77 L 48.763 10.348 C 48.671 10.297 48.569 10.27 48.464 10.267 L 48.303 10.267 C 48.247 10.276 48.192 10.294 48.142 10.322 L 45.501 11.751 C 45.37 11.819 45.222 11.843 45.077 11.819 C 44.724 11.75 44.489 11.403 44.547 11.037 L 45.077 8.007 C 45.112 7.786 45.041 7.561 44.887 7.404 L 42.734 5.249 C 42.554 5.069 42.491 4.798 42.574 4.553 C 42.654 4.309 42.857 4.132 43.104 4.092 L 46.067 3.648 C 46.292 3.624 46.49 3.482 46.592 3.273 L 47.897 0.508 C 47.928 0.446 47.968 0.39 48.017 0.342 L 48.07 0.299 C 48.098 0.267 48.131 0.24 48.166 0.218 L 48.231 0.194 L 48.333 0.151 L 48.584 0.151 C 48.808 0.175 49.005 0.313 49.108 0.52 L 50.431 3.273 C 50.527 3.474 50.712 3.614 50.926 3.648 L 53.89 4.092 C 54.14 4.128 54.35 4.307 54.432 4.553 C 54.511 4.8 54.443 5.071 54.259 5.249 Z" fill="var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(255, 132, 66))"></path><path d="M 72.983 7.429 C 72.828 7.583 72.757 7.807 72.793 8.026 L 73.323 11.056 C 73.368 11.312 73.262 11.572 73.054 11.721 C 72.85 11.875 72.579 11.893 72.357 11.77 L 69.716 10.348 C 69.624 10.297 69.522 10.27 69.418 10.267 L 69.256 10.267 C 69.2 10.276 69.145 10.294 69.095 10.322 L 66.454 11.751 C 66.324 11.819 66.175 11.843 66.031 11.819 C 65.678 11.75 65.442 11.403 65.5 11.037 L 66.031 8.007 C 66.066 7.786 65.995 7.561 65.841 7.404 L 63.688 5.249 C 63.507 5.069 63.445 4.798 63.527 4.553 C 63.607 4.309 63.811 4.132 64.057 4.092 L 67.02 3.648 C 67.246 3.624 67.444 3.482 67.545 3.273 L 68.851 0.508 C 68.882 0.446 68.922 0.39 68.97 0.342 L 69.024 0.299 C 69.052 0.267 69.084 0.24 69.12 0.218 L 69.185 0.194 L 69.286 0.151 L 69.537 0.151 C 69.762 0.175 69.959 0.313 70.062 0.52 L 71.385 3.273 C 71.48 3.474 71.666 3.614 71.88 3.648 L 74.843 4.092 C 75.093 4.128 75.303 4.307 75.386 4.553 C 75.464 4.8 75.397 5.071 75.213 5.249 Z" fill="var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(255, 132, 66))"></path><path d="M 93.936 7.429 C 93.782 7.583 93.711 7.807 93.746 8.026 L 94.276 11.056 C 94.321 11.312 94.216 11.572 94.008 11.721 C 93.804 11.875 93.533 11.893 93.31 11.77 L 90.67 10.348 C 90.578 10.297 90.476 10.27 90.372 10.267 L 90.21 10.267 C 90.154 10.276 90.099 10.294 90.049 10.322 L 87.407 11.751 C 87.277 11.819 87.129 11.843 86.984 11.819 C 86.631 11.75 86.396 11.403 86.453 11.037 L 86.984 8.007 C 87.02 7.786 86.949 7.561 86.794 7.404 L 84.641 5.249 C 84.461 5.069 84.398 4.798 84.481 4.553 C 84.56 4.309 84.764 4.132 85.011 4.092 L 87.974 3.648 C 88.199 3.624 88.397 3.482 88.499 3.273 L 89.804 0.508 C 89.836 0.446 89.875 0.39 89.923 0.342 L 89.977 0.299 C 90.005 0.267 90.037 0.24 90.073 0.218 L 90.138 0.194 L 90.24 0.151 L 90.491 0.151 C 90.715 0.175 90.912 0.313 91.016 0.52 L 92.338 3.273 C 92.434 3.474 92.619 3.614 92.833 3.648 L 95.797 4.092 C 96.047 4.128 96.256 4.307 96.339 4.553 C 96.417 4.8 96.35 5.071 96.166 5.249 Z" fill="var(--token-9f0badbf-8d74-41b8-a73a-e1a6bdec487b, rgb(255, 132, 66))"></path></svg>',
                      svgContentId: 336182729,
                      withExternalLayout: !0,
                    }),
                  }),
                  pe &&
                    t(F, {
                      background: {
                        alt: "",
                        fit: "fit",
                        intrinsicHeight: 34,
                        intrinsicWidth: 134,
                        pixelHeight: 34,
                        pixelWidth: 134,
                        sizes: "90px",
                        ...cr(y),
                        positionX: "center",
                        positionY: "center",
                      },
                      className: "framer-1rhz1yg",
                      layoutDependency: p,
                      layoutId: "VyyNQbh8m",
                      style: {
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                    }),
                ],
              }),
              M &&
                t(J, {
                  __fromCanvasComponent: !0,
                  children: t(Z, {
                    children: t(f.p, {
                      className: "framer-styles-preset-smtg16",
                      "data-styles-preset": "DuMLJ2VUN",
                      style: {
                        "--framer-text-color":
                          "var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))",
                      },
                      children:
                        "Bright Horizon Marketing has been an invaluable partner for our bakery. Their team's expertise in SEO and online marketing has helped us stand out in a competitive market. From optimizing our website to managing our social media presence, their strategic approach has delivered impressive results. Thanks to their efforts, we've seen a significant increase in online orders and customer engagement. I couldn't be happier with the results, and I highly recommend Bright Horizon Marketing to anyone looking to grow their business online.",
                    }),
                  }),
                  className: "framer-1rifeex",
                  fonts: ["Inter"],
                  layoutDependency: p,
                  layoutId: "INDC_tvrY",
                  style: {
                    "--extracted-r6o4lv":
                      "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                    "--framer-link-text-color": "rgb(0, 153, 255)",
                    "--framer-link-text-decoration": "underline",
                    opacity: 0.9,
                  },
                  text: G,
                  verticalAlignment: "top",
                  withExternalLayout: !0,
                }),
              h(f.div, {
                className: "framer-dbzspc",
                "data-framer-name": "Name And Location",
                layoutDependency: p,
                layoutId: "gxyR6J6Wv",
                children: [
                  ue &&
                    t(f.div, {
                      className: "framer-sdjwfb",
                      "data-framer-name": "Avatar Wrapper",
                      layoutDependency: p,
                      layoutId: "XRWzNVeDS",
                      style: {
                        backgroundColor:
                          "var(--token-122cea26-357d-4aa9-9285-cd7ff9c161b1, rgba(33, 80, 82, 0.06))",
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                      },
                      children: t(F, {
                        background: {
                          alt: "",
                          fit: "fill",
                          intrinsicHeight: 3023,
                          intrinsicWidth: 3023,
                          pixelHeight: 3023,
                          pixelWidth: 3023,
                          sizes: "44px",
                          ...cr(i),
                        },
                        className: "framer-xbz51v",
                        layoutDependency: p,
                        layoutId: "YMQSciavO",
                        style: {
                          borderBottomLeftRadius: 17,
                          borderBottomRightRadius: 17,
                          borderTopLeftRadius: 17,
                          borderTopRightRadius: 17,
                        },
                      }),
                    }),
                  h(f.div, {
                    className: "framer-qj8lue",
                    layoutDependency: p,
                    layoutId: "ssrHiEa_B",
                    children: [
                      t(J, {
                        __fromCanvasComponent: !0,
                        children: t(Z, {
                          children: t(f.h5, {
                            className: "framer-styles-preset-xz2g08",
                            "data-styles-preset": "vFgiLTeGJ",
                            style: {
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-1lwpl3i, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))",
                            },
                            children: "S. Thompson",
                          }),
                        }),
                        className: "framer-l8n5g6",
                        fonts: ["Inter"],
                        layoutDependency: p,
                        layoutId: "lwRiJJPkU",
                        style: {
                          "--extracted-1lwpl3i":
                            "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: a,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                      t(J, {
                        __fromCanvasComponent: !0,
                        children: t(Z, {
                          children: t(f.p, {
                            className: "framer-styles-preset-5vsgqx",
                            "data-styles-preset": "urlDCZwpF",
                            style: {
                              "--framer-text-alignment": "left",
                              "--framer-text-color":
                                "var(--extracted-r6o4lv, var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255)))",
                            },
                            children: "CEO, Company",
                          }),
                        }),
                        className: "framer-1yyr02m",
                        fonts: ["Inter"],
                        layoutDependency: p,
                        layoutId: "VHOykkF7L",
                        style: {
                          "--extracted-r6o4lv":
                            "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          opacity: 0.8,
                        },
                        text: L,
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                ],
              }),
              t(f.div, {
                className: "framer-je9aiv",
                "data-framer-name": "Divider",
                layoutDependency: p,
                layoutId: "L4oPC66BK",
                style: {
                  backgroundColor:
                    "var(--token-57030bfe-99b8-47c4-8c72-003051413d49, rgba(13, 13, 13, 0.05))",
                },
              }),
            ],
          }),
        }),
      }),
    });
  }),
  Fa = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    ".framer-kHGKi.framer-176iqi6, .framer-kHGKi .framer-176iqi6 { display: block; }",
    ".framer-kHGKi.framer-1k9eo9 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 21px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 20px 20px 20px; position: relative; width: 479px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-kHGKi .framer-ybbtu4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-kHGKi .framer-102ue22 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-kHGKi .framer-1aaacdg { flex: none; height: 12px; position: relative; width: 97px; }",
    ".framer-kHGKi .framer-1rhz1yg { flex: none; height: 60px; overflow: hidden; position: relative; width: 90px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-kHGKi .framer-1rifeex, .framer-kHGKi .framer-l8n5g6, .framer-kHGKi .framer-1yyr02m { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
    ".framer-kHGKi .framer-dbzspc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-kHGKi .framer-sdjwfb { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 52px); justify-content: center; overflow: hidden; padding: 4px 4px 4px 4px; position: relative; width: 52px; will-change: var(--framer-will-change-override, transform); }",
    ".framer-kHGKi .framer-xbz51v { flex: 1 0 0px; height: 1px; overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }",
    ".framer-kHGKi .framer-qj8lue { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1px; }",
    ".framer-kHGKi .framer-je9aiv { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }",
    "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-kHGKi.framer-1k9eo9, .framer-kHGKi .framer-ybbtu4, .framer-kHGKi .framer-dbzspc, .framer-kHGKi .framer-sdjwfb, .framer-kHGKi .framer-qj8lue { gap: 0px; } .framer-kHGKi.framer-1k9eo9 > * { margin: 0px; margin-bottom: calc(21px / 2); margin-top: calc(21px / 2); } .framer-kHGKi.framer-1k9eo9 > :first-child, .framer-kHGKi .framer-sdjwfb > :first-child, .framer-kHGKi .framer-qj8lue > :first-child { margin-top: 0px; } .framer-kHGKi.framer-1k9eo9 > :last-child, .framer-kHGKi .framer-sdjwfb > :last-child, .framer-kHGKi .framer-qj8lue > :last-child { margin-bottom: 0px; } .framer-kHGKi .framer-ybbtu4 > *, .framer-kHGKi .framer-dbzspc > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-kHGKi .framer-ybbtu4 > :first-child, .framer-kHGKi .framer-dbzspc > :first-child { margin-left: 0px; } .framer-kHGKi .framer-ybbtu4 > :last-child, .framer-kHGKi .framer-dbzspc > :last-child { margin-right: 0px; } .framer-kHGKi .framer-sdjwfb > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-kHGKi .framer-qj8lue > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }",
    ...Qt,
    ...mr,
    ...tr,
  ],
  Ce = Ve(ka, Fa, "framer-kHGKi"),
  H = Ce;
Ce.displayName = "Review-Details";
Ce.defaultProps = { height: 430, width: 479 };
Me(Ce, {
  YRgWTIsA7: { title: "Client Image", type: r.ResponsiveImage },
  mpLUz063Z: {
    defaultValue: "S. Thompson",
    displayTextArea: !1,
    title: "Name",
    type: r.String,
  },
  bmwajhGqS: {
    defaultValue: "CEO, Company",
    displayTextArea: !0,
    title: "Designation",
    type: r.String,
  },
  zAxjXyH9a: { title: "Logo", type: r.ResponsiveImage },
  fwB3JSARf: {
    defaultValue:
      "Bright Horizon Marketing has been an invaluable partner for our bakery. Their team's expertise in SEO and online marketing has helped us stand out in a competitive market. From optimizing our website to managing our social media presence, their strategic approach has delivered impressive results. Thanks to their efforts, we've seen a significant increase in online orders and customer engagement. I couldn't be happier with the results, and I highly recommend Bright Horizon Marketing to anyone looking to grow their business online.",
    displayTextArea: !0,
    title: "Testimonial",
    type: r.String,
  },
});
je(
  Ce,
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
    ...$(Jt),
    ...$(dr),
    ...$(er),
  ],
  { supportsExplicitInterCodegen: !0 }
);
Oe.loadFonts(["GF;Unbounded-regular", "GF;Unbounded-700"]);
var pr = [
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
  ur = [
    '.framer-TlxII .framer-styles-preset-4znnbj:not(.rich-text-wrapper), .framer-TlxII .framer-styles-preset-4znnbj.rich-text-wrapper h2 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.8px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 1000px) { .framer-TlxII .framer-styles-preset-4znnbj:not(.rich-text-wrapper), .framer-TlxII .framer-styles-preset-4znnbj.rich-text-wrapper h2 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.8px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 999px) and (min-width: 0px) { .framer-TlxII .framer-styles-preset-4znnbj:not(.rich-text-wrapper), .framer-TlxII .framer-styles-preset-4znnbj.rich-text-wrapper h2 { --framer-font-family: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-family-bold: "Unbounded", "Unbounded Placeholder", sans-serif; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-letter-spacing: -1.8px; --framer-line-height: 1.1em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  hr = "framer-TlxII";
var Ia = Q(at),
  Ra = Q(ot),
  ft = rt(f.div),
  Pa = Q(g),
  za = Q(H),
  Na = rt(f.section),
  Ha = Q(it),
  Ma = Q(nt);
var Va = {
  DpFMOLgVw: "(min-width: 810px) and (max-width: 1199px)",
  IOXlUETG2: "(min-width: 1200px)",
  MKz2FSMZh: "(max-width: 809px)",
};
var gr = "framer-UxULs",
  Oa = {
    DpFMOLgVw: "framer-v-1220stf",
    IOXlUETG2: "framer-v-1eh1pax",
    MKz2FSMZh: "framer-v-1d4qmv0",
  },
  xr = {
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
  Se = { damping: 85, delay: 0.4, mass: 1, stiffness: 212, type: "spring" },
  wr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Se,
    x: 0,
    y: -100,
  },
  ja = {
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
  Ta = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: Se,
    x: 0,
    y: 170,
  },
  Aa = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    x: 0,
    y: 100,
  },
  yr = { damping: 80, delay: 0.1, mass: 1, stiffness: 400, type: "spring" },
  Ba = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 0.9,
    skewX: 0,
    skewY: 0,
    transformPerspective: 1200,
    transition: yr,
    x: 0,
    y: 100,
  },
  ct = st(),
  Ga = { "Desktop-Wide": "IOXlUETG2", Phone: "MKz2FSMZh", Tablet: "DpFMOLgVw" },
  Da = ({ height: e, id: s, width: l, ...o }) => {
    var c, x;
    return {
      ...o,
      variant:
        (x = (c = Ga[o.variant]) !== null && c !== void 0 ? c : o.variant) !==
          null && x !== void 0
          ? x
          : "IOXlUETG2",
    };
  },
  qa = me(function (e, s) {
    let { activeLocale: l, setLocale: o } = He(),
      { style: c, className: x, layoutId: w, variant: j, ...i } = Da(e);
    At(() => {
      let u = st(void 0, l);
      if (((document.title = u.title || ""), u.viewport)) {
        var p;
        (p = document.querySelector('meta[name="viewport"]')) === null ||
          p === void 0 ||
          p.setAttribute("content", u.viewport);
      }
      if (u.robots) {
        let v = document.querySelector('meta[name="robots"]');
        v
          ? v.setAttribute("content", u.robots)
          : ((v = document.createElement("meta")),
            v.setAttribute("name", "robots"),
            v.setAttribute("content", u.robots),
            document.head.appendChild(v));
      }
      if (u.bodyClassName)
        return (
          Array.from(document.body.classList)
            .filter((v) => v.startsWith("framer-body-"))
            .map((v) => document.body.classList.remove(v)),
          document.body.classList.add(`${u.bodyClassName}-framer-UxULs`),
          () => {
            document.body.classList.remove(`${u.bodyClassName}-framer-UxULs`);
          }
        );
    }, [void 0, l]);
    let [a, L] = Wt(j, Va, !1),
      y = void 0,
      G = A(null),
      T = et("M_PvtITaV"),
      C = A(null),
      N = et("bNqhhij8M"),
      D = A(null),
      I = ze(),
      R = [hr, or];
    return (
      Et({}),
      t(Kt.Provider, {
        value: { primaryVariantId: "IOXlUETG2", variantClassNames: Oa },
        children: h(fe, {
          id: w ?? I,
          children: [
            h(f.div, {
              ...i,
              className: be(gr, ...R, "framer-1eh1pax", x),
              ref: s ?? G,
              style: { ...c },
              children: [
                h("div", {
                  className: "framer-1kxoe9j",
                  "data-framer-name": "Background",
                  name: "Background",
                  children: [
                    t(f.div, {
                      className: "framer-1fh5r1w",
                      "data-framer-name": "Overlay",
                      name: "Overlay",
                      style: { transformPerspective: 1200 },
                    }),
                    t(S, {
                      children: t(k, {
                        className: "framer-12z826f-container",
                        layoutScroll: !0,
                        children: t(at, {
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
                t(S, {
                  width: "100vw",
                  children: t(k, {
                    className: "framer-1b73fcn-container",
                    layoutScroll: !0,
                    children: t(U, {
                      breakpoint: a,
                      overrides: {
                        DpFMOLgVw: { variant: "qckzdw_18" },
                        MKz2FSMZh: { variant: "qckzdw_18" },
                      },
                      children: t(ot, {
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
                h("div", {
                  className: "framer-10aakj5",
                  "data-framer-name": "Main",
                  name: "Main",
                  children: [
                    t(U, {
                      breakpoint: a,
                      overrides: {
                        MKz2FSMZh: {
                          __framer__styleAppearEffectEnabled: void 0,
                          style: {},
                        },
                      },
                      children: t(ft, {
                        __framer__animate: { transition: Se },
                        __framer__animateOnce: !0,
                        __framer__enter: xr,
                        __framer__exit: wr,
                        __framer__styleAppearEffectEnabled: !0,
                        __framer__threshold: 0,
                        __perspectiveFX: !1,
                        __targetOpacity: 1,
                        className: "framer-zzxuws",
                        "data-framer-name": "Heading",
                        name: "Heading",
                        style: { transformPerspective: 1200 },
                        children: t(J, {
                          __fromCanvasComponent: !0,
                          children: t(Z, {
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
                          id: T,
                          ref: C,
                          verticalAlignment: "top",
                          withExternalLayout: !0,
                        }),
                      }),
                    }),
                    t(S, {
                      children: t(k, {
                        className: "framer-uogv9e-container",
                        children: t(g, {
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
                            t(F, {
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
                            t(F, {
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
                            t(F, {
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
                            t(F, {
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
                            t(F, {
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
                            t(F, {
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
                            t(F, {
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
                            t(F, {
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
                            t(F, {
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
                            t(F, {
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
                            t(F, {
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
                            t(F, {
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
                    h("div", {
                      className: "framer-1glnikl",
                      "data-framer-name": "Main",
                      name: "Main",
                      children: [
                        t(U, {
                          breakpoint: a,
                          overrides: {
                            MKz2FSMZh: {
                              __framer__styleAppearEffectEnabled: void 0,
                              style: {},
                            },
                          },
                          children: t(ft, {
                            __framer__animate: { transition: Se },
                            __framer__animateOnce: !0,
                            __framer__enter: xr,
                            __framer__exit: wr,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-q0puic",
                            "data-framer-name": "Heading",
                            name: "Heading",
                            style: { transformPerspective: 1200 },
                            children: t(J, {
                              __fromCanvasComponent: !0,
                              children: t(Z, {
                                children: t("h1", {
                                  className: "framer-styles-preset-a0nroh",
                                  "data-styles-preset": "s2c1M16C7",
                                  style: {
                                    "--framer-text-color":
                                      "var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, rgb(255, 255, 255))",
                                  },
                                  children: "Check Our Works With Real Results",
                                }),
                              }),
                              className: "framer-1ggo2y1",
                              fonts: ["Inter"],
                              id: N,
                              ref: D,
                              verticalAlignment: "top",
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        t(U, {
                          breakpoint: a,
                          overrides: {
                            MKz2FSMZh: {
                              __framer__styleAppearEffectEnabled: void 0,
                              style: {},
                            },
                          },
                          children: t(Na, {
                            __framer__animate: { transition: Se },
                            __framer__animateOnce: !0,
                            __framer__enter: ja,
                            __framer__exit: Ta,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-1ovpzxh",
                            "data-framer-name": "Reviews",
                            name: "Reviews",
                            style: { transformPerspective: 1200 },
                            children: t(U, {
                              breakpoint: a,
                              overrides: {
                                MKz2FSMZh: {
                                  __framer__styleAppearEffectEnabled: void 0,
                                  style: {},
                                },
                              },
                              children: h(ft, {
                                __framer__animate: { transition: yr },
                                __framer__animateOnce: !0,
                                __framer__enter: Aa,
                                __framer__exit: Ba,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: "framer-745dje",
                                "data-framer-name": "Container",
                                name: "Container",
                                style: { transformPerspective: 1200 },
                                children: [
                                  h("div", {
                                    className: "framer-1279ora",
                                    "data-framer-name": "Column 1",
                                    name: "Column 1",
                                    children: [
                                      t(U, {
                                        breakpoint: a,
                                        overrides: {
                                          DpFMOLgVw: {
                                            width: "min(100vw - 80px, 1000px)",
                                          },
                                          MKz2FSMZh: {
                                            width: "min(100vw - 24px, 1440px)",
                                          },
                                        },
                                        children: t(S, {
                                          width:
                                            "max((min(100vw - 80px, 1440px) - 10px) / 2, 1px)",
                                          children: t(k, {
                                            className:
                                              "framer-t91usj-container",
                                            children: t(H, {
                                              bmwajhGqS: "",
                                              fwB3JSARf:
                                                "Blu Studio transformed our online presence completely! Their SEO expertise boosted our visibility, and their e-commerce setup streamlined our sales. Highly recommended!",
                                              height: "100%",
                                              id: "gWTAQoP9t",
                                              layoutId: "gWTAQoP9t",
                                              mpLUz063Z: "Aarav Sharma",
                                              style: { width: "100%" },
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      }),
                                      t(U, {
                                        breakpoint: a,
                                        overrides: {
                                          DpFMOLgVw: {
                                            width: "min(100vw - 80px, 1000px)",
                                          },
                                          MKz2FSMZh: {
                                            width: "min(100vw - 24px, 1440px)",
                                          },
                                        },
                                        children: t(S, {
                                          width:
                                            "max((min(100vw - 80px, 1440px) - 10px) / 2, 1px)",
                                          children: t(k, {
                                            className:
                                              "framer-g4h6qf-container",
                                            children: t(H, {
                                              bmwajhGqS: "",
                                              fwB3JSARf:
                                                "Impressive service from Blu Studio! Their print-on-demand setup was seamless, and their team's dedication to detail exceeded my expectations.",
                                              height: "100%",
                                              id: "MGwifp5r1",
                                              layoutId: "MGwifp5r1",
                                              mpLUz063Z: "Rajesh Gupta",
                                              style: { width: "100%" },
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      }),
                                      t(U, {
                                        breakpoint: a,
                                        overrides: {
                                          DpFMOLgVw: {
                                            width: "min(100vw - 80px, 1000px)",
                                          },
                                          MKz2FSMZh: {
                                            width: "min(100vw - 24px, 1440px)",
                                          },
                                        },
                                        children: t(S, {
                                          width:
                                            "max((min(100vw - 80px, 1440px) - 10px) / 2, 1px)",
                                          children: t(k, {
                                            className:
                                              "framer-1bgxygx-container",
                                            children: t(H, {
                                              bmwajhGqS: "",
                                              fwB3JSARf:
                                                "Thanks to Blu Studio's advanced SEO strategies, our website traffic has skyrocketed. Their expertise in ads management has been invaluable!",
                                              height: "100%",
                                              id: "UM7IaW17v",
                                              layoutId: "UM7IaW17v",
                                              mpLUz063Z: "Vikram Reddy",
                                              style: { width: "100%" },
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      }),
                                      t(U, {
                                        breakpoint: a,
                                        overrides: {
                                          DpFMOLgVw: {
                                            width: "min(100vw - 80px, 1000px)",
                                          },
                                          MKz2FSMZh: {
                                            width: "min(100vw - 24px, 1440px)",
                                          },
                                        },
                                        children: t(S, {
                                          width:
                                            "max((min(100vw - 80px, 1440px) - 10px) / 2, 1px)",
                                          children: t(k, {
                                            className:
                                              "framer-12p3m3x-container",
                                            children: t(H, {
                                              bmwajhGqS: "",
                                              fwB3JSARf:
                                                "Blu Studio's dropshipping expertise helped us expand our product range without the hassle of inventory management. Highly efficient and reliable service!",
                                              height: "100%",
                                              id: "PFWq8bxkW",
                                              layoutId: "PFWq8bxkW",
                                              mpLUz063Z: "Amit Joshi",
                                              style: { width: "100%" },
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      }),
                                      t(U, {
                                        breakpoint: a,
                                        overrides: {
                                          DpFMOLgVw: {
                                            width: "min(100vw - 80px, 1000px)",
                                          },
                                          MKz2FSMZh: {
                                            width: "min(100vw - 24px, 1440px)",
                                          },
                                        },
                                        children: t(S, {
                                          width:
                                            "max((min(100vw - 80px, 1440px) - 10px) / 2, 1px)",
                                          children: t(k, {
                                            className:
                                              "framer-105ubhk-container",
                                            children: t(H, {
                                              bmwajhGqS: "",
                                              fwB3JSARf:
                                                "We partnered with Blu Studio for our digital advertising needs, and the results were phenomenal. Their tailored campaigns drove significant ROI for us.",
                                              height: "100%",
                                              id: "FYHjqhujz",
                                              layoutId: "FYHjqhujz",
                                              mpLUz063Z: "Deepak Kumar",
                                              style: { width: "100%" },
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  h("div", {
                                    className: "framer-186amv0",
                                    "data-framer-name": "Column 2",
                                    name: "Column 2",
                                    children: [
                                      t(U, {
                                        breakpoint: a,
                                        overrides: {
                                          DpFMOLgVw: {
                                            width: "min(100vw - 80px, 1000px)",
                                          },
                                          MKz2FSMZh: {
                                            width: "min(100vw - 24px, 1440px)",
                                          },
                                        },
                                        children: t(S, {
                                          width:
                                            "max((min(100vw - 80px, 1440px) - 10px) / 2, 1px)",
                                          children: t(k, {
                                            className:
                                              "framer-m23exd-container",
                                            children: t(H, {
                                              bmwajhGqS: "",
                                              fwB3JSARf:
                                                "As a small business owner, I relied on Blu Studio for their exceptional social media marketing skills. Their strategies helped me connect with more customers effectively.",
                                              height: "100%",
                                              id: "QSF0tljk1",
                                              layoutId: "QSF0tljk1",
                                              mpLUz063Z: "Sneha Patel",
                                              style: { width: "100%" },
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      }),
                                      t(U, {
                                        breakpoint: a,
                                        overrides: {
                                          DpFMOLgVw: {
                                            width: "min(100vw - 80px, 1000px)",
                                          },
                                          MKz2FSMZh: {
                                            width: "min(100vw - 24px, 1440px)",
                                          },
                                        },
                                        children: t(S, {
                                          width:
                                            "max((min(100vw - 80px, 1440px) - 10px) / 2, 1px)",
                                          children: t(k, {
                                            className:
                                              "framer-1kyhu87-container",
                                            children: t(H, {
                                              bmwajhGqS: "",
                                              fwB3JSARf:
                                                "Blu Studio's clothing brand automation is a game-changer. They provided us with the tools and resources to streamline our operations effortlessly.",
                                              height: "100%",
                                              id: "qIKxy9I8K",
                                              layoutId: "qIKxy9I8K",
                                              mpLUz063Z: "Neha Singh",
                                              style: { width: "100%" },
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      }),
                                      t(U, {
                                        breakpoint: a,
                                        overrides: {
                                          DpFMOLgVw: {
                                            width: "min(100vw - 80px, 1000px)",
                                          },
                                          MKz2FSMZh: {
                                            width: "min(100vw - 24px, 1440px)",
                                          },
                                        },
                                        children: t(S, {
                                          width:
                                            "max((min(100vw - 80px, 1440px) - 10px) / 2, 1px)",
                                          children: t(k, {
                                            className:
                                              "framer-hm5gt6-container",
                                            children: t(H, {
                                              bmwajhGqS: "",
                                              fwB3JSARf:
                                                "Working with Rohan and the Blu Studio team was a pleasure. Their insights into esports management helped us navigate the competitive gaming industry.",
                                              height: "100%",
                                              id: "DeZzbyXWy",
                                              layoutId: "DeZzbyXWy",
                                              mpLUz063Z: "Priya Desai",
                                              style: { width: "100%" },
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      }),
                                      t(U, {
                                        breakpoint: a,
                                        overrides: {
                                          DpFMOLgVw: {
                                            width: "min(100vw - 80px, 1000px)",
                                          },
                                          MKz2FSMZh: {
                                            width: "min(100vw - 24px, 1440px)",
                                          },
                                        },
                                        children: t(S, {
                                          width:
                                            "max((min(100vw - 80px, 1440px) - 10px) / 2, 1px)",
                                          children: t(k, {
                                            className:
                                              "framer-11q24gw-container",
                                            children: t(H, {
                                              bmwajhGqS: "",
                                              fwB3JSARf:
                                                "Blu Studio's commitment to excellence is unmatched. They provided us with a comprehensive e-commerce setup that set us up for success from day one.",
                                              height: "100%",
                                              id: "otey_4M7J",
                                              layoutId: "otey_4M7J",
                                              mpLUz063Z: "Pooja Mehta",
                                              style: { width: "100%" },
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      }),
                                      t(U, {
                                        breakpoint: a,
                                        overrides: {
                                          DpFMOLgVw: {
                                            width: "min(100vw - 80px, 1000px)",
                                          },
                                          MKz2FSMZh: {
                                            width: "min(100vw - 24px, 1440px)",
                                          },
                                        },
                                        children: t(S, {
                                          width:
                                            "max((min(100vw - 80px, 1440px) - 10px) / 2, 1px)",
                                          children: t(k, {
                                            className:
                                              "framer-1p6mgqh-container",
                                            children: t(H, {
                                              bmwajhGqS: "",
                                              fwB3JSARf:
                                                "I'm impressed with Blu Studio's attention to detail in every aspect of their service. Their dedication to helping businesses grow online is commendable.",
                                              height: "100%",
                                              id: "axh_tXY5t",
                                              layoutId: "axh_tXY5t",
                                              mpLUz063Z: "Ananya Choudhary",
                                              style: { width: "100%" },
                                              width: "100%",
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                t(S, {
                  width: "100vw",
                  children: t(k, {
                    className: "framer-118h7le-container",
                    children: t(U, {
                      breakpoint: a,
                      overrides: {
                        DpFMOLgVw: { variant: "mKXCPqfUG" },
                        MKz2FSMZh: { variant: "BsZlXwif2" },
                      },
                      children: t(it, {
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
                t(S, {
                  children: t(k, {
                    className: "framer-1lapt5x-container",
                    layoutScroll: !0,
                    children: t(nt, {
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
            t("div", { className: be(gr, ...R), id: "overlay" }),
          ],
        }),
      })
    );
  }),
  Ea = [
    "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
    `.${ct.bodyClassName}-framer-UxULs { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10)); }`,
    ".framer-UxULs.framer-ajq2xv, .framer-UxULs .framer-ajq2xv { display: block; }",
    ".framer-UxULs.framer-1eh1pax { align-content: center; align-items: center; background-color: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, #0a0a0a); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }",
    ".framer-UxULs .framer-1kxoe9j { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; padding: 0px; position: fixed; top: calc(50.00000000000002% - 100vh / 2); width: 100%; z-index: 0; }",
    '.framer-UxULs .framer-1fh5r1w { background: radial-gradient(43.2% 25% at 50% 18.8%, rgba(84, 84, 84, 0) 0%, var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10)) /* {"name":"Dark Green"} */ 100%); flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }',
    ".framer-UxULs .framer-12z826f-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: relative; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 0; }",
    ".framer-UxULs .framer-1b73fcn-container { flex: none; height: auto; left: 0px; position: fixed; right: 0px; top: 0px; z-index: 10; }",
    ".framer-UxULs .framer-10aakj5, .framer-UxULs .framer-1glnikl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-UxULs .framer-zzxuws, .framer-UxULs .framer-q0puic { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40vh; justify-content: center; overflow: hidden; padding: 40px 0px 0px 0px; position: relative; width: 100%; }",
    ".framer-UxULs .framer-12aqlkh, .framer-UxULs .framer-1ggo2y1 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; max-width: 740px; position: relative; text-shadow: 0px 1px 100px #000000; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }",
    ".framer-UxULs .framer-uogv9e-container { flex: none; height: 546px; position: relative; width: 750px; }",
    ".framer-UxULs .framer-17jvpj7, .framer-UxULs .framer-80063m, .framer-UxULs .framer-1ld49nm, .framer-UxULs .framer-4hzu5t, .framer-UxULs .framer-ij5uf2, .framer-UxULs .framer-mcoths, .framer-UxULs .framer-1i2lns9, .framer-UxULs .framer-xfcpz7, .framer-UxULs .framer-5460my, .framer-UxULs .framer-1t1tq4v, .framer-UxULs .framer-qhsd5r { height: 300px; position: relative; width: 400px; }",
    ".framer-UxULs .framer-1xr9lj5 { height: 300px; position: relative; width: 386px; }",
    ".framer-UxULs .framer-1ovpzxh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 65px 40px; position: relative; width: 100%; }",
    ".framer-UxULs .framer-745dje { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1440px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }",
    ".framer-UxULs .framer-1279ora, .framer-UxULs .framer-186amv0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: sticky; top: 100px; width: 1px; will-change: transform; z-index: 1; }",
    ".framer-UxULs .framer-t91usj-container, .framer-UxULs .framer-g4h6qf-container, .framer-UxULs .framer-1bgxygx-container, .framer-UxULs .framer-12p3m3x-container, .framer-UxULs .framer-105ubhk-container, .framer-UxULs .framer-m23exd-container, .framer-UxULs .framer-1kyhu87-container, .framer-UxULs .framer-hm5gt6-container, .framer-UxULs .framer-11q24gw-container, .framer-UxULs .framer-1p6mgqh-container, .framer-UxULs .framer-118h7le-container { flex: none; height: auto; position: relative; width: 100%; }",
    ".framer-UxULs .framer-1lapt5x-container { flex: none; height: auto; left: 0px; position: fixed; top: 0px; width: auto; }",
    "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-UxULs.framer-1eh1pax, .framer-UxULs .framer-1kxoe9j, .framer-UxULs .framer-10aakj5, .framer-UxULs .framer-zzxuws, .framer-UxULs .framer-1glnikl, .framer-UxULs .framer-q0puic, .framer-UxULs .framer-1ovpzxh, .framer-UxULs .framer-745dje, .framer-UxULs .framer-1279ora, .framer-UxULs .framer-186amv0 { gap: 0px; } .framer-UxULs.framer-1eh1pax > *, .framer-UxULs .framer-10aakj5 > *, .framer-UxULs .framer-1glnikl > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-UxULs.framer-1eh1pax > :first-child, .framer-UxULs .framer-10aakj5 > :first-child, .framer-UxULs .framer-1glnikl > :first-child, .framer-UxULs .framer-1ovpzxh > :first-child, .framer-UxULs .framer-1279ora > :first-child, .framer-UxULs .framer-186amv0 > :first-child { margin-top: 0px; } .framer-UxULs.framer-1eh1pax > :last-child, .framer-UxULs .framer-10aakj5 > :last-child, .framer-UxULs .framer-1glnikl > :last-child, .framer-UxULs .framer-1ovpzxh > :last-child, .framer-UxULs .framer-1279ora > :last-child, .framer-UxULs .framer-186amv0 > :last-child { margin-bottom: 0px; } .framer-UxULs .framer-1kxoe9j > *, .framer-UxULs .framer-zzxuws > *, .framer-UxULs .framer-q0puic > *, .framer-UxULs .framer-745dje > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-UxULs .framer-1kxoe9j > :first-child, .framer-UxULs .framer-zzxuws > :first-child, .framer-UxULs .framer-q0puic > :first-child, .framer-UxULs .framer-745dje > :first-child { margin-left: 0px; } .framer-UxULs .framer-1kxoe9j > :last-child, .framer-UxULs .framer-zzxuws > :last-child, .framer-UxULs .framer-q0puic > :last-child, .framer-UxULs .framer-745dje > :last-child { margin-right: 0px; } .framer-UxULs .framer-1ovpzxh > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-UxULs .framer-1279ora > *, .framer-UxULs .framer-186amv0 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }",
    "@media (min-width: 1200px) { .framer-UxULs .hidden-1eh1pax { display: none !important; } }",
    `@media (min-width: 810px) and (max-width: 1199px) { .framer-UxULs .hidden-1220stf { display: none !important; } .${ct.bodyClassName}-framer-UxULs { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10)); } .framer-UxULs.framer-1eh1pax { width: 810px; } .framer-UxULs .framer-zzxuws, .framer-UxULs .framer-q0puic { height: 30vh; } .framer-UxULs .framer-12aqlkh, .framer-UxULs .framer-1ggo2y1 { max-width: 490px; } .framer-UxULs .framer-1ovpzxh { padding: 0px 40px 40px 40px; } .framer-UxULs .framer-745dje { flex-direction: column; max-width: 1000px; } .framer-UxULs .framer-1279ora, .framer-UxULs .framer-186amv0 { flex: none; position: relative; top: unset; width: 100%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-UxULs .framer-745dje { gap: 0px; } .framer-UxULs .framer-745dje > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-UxULs .framer-745dje > :first-child { margin-top: 0px; } .framer-UxULs .framer-745dje > :last-child { margin-bottom: 0px; } }}`,
    `@media (max-width: 809px) { .framer-UxULs .hidden-1d4qmv0 { display: none !important; } .${ct.bodyClassName}-framer-UxULs { background: var(--token-2f560859-5998-4075-847c-9f666c5cfc0b, rgb(10, 10, 10)); } .framer-UxULs.framer-1eh1pax { overflow: hidden; width: 390px; } .framer-UxULs .framer-1kxoe9j { order: 0; } .framer-UxULs .framer-1b73fcn-container { order: 1; } .framer-UxULs .framer-10aakj5 { order: 3; } .framer-UxULs .framer-zzxuws, .framer-UxULs .framer-q0puic { height: 30vh; padding: 40px 20px 0px 20px; } .framer-UxULs .framer-12aqlkh, .framer-UxULs .framer-1ggo2y1 { max-width: unset; } .framer-UxULs .framer-uogv9e-container { height: 265px; width: 339px; } .framer-UxULs .framer-1ovpzxh { padding: 0px 12px 30px 12px; } .framer-UxULs .framer-745dje { flex-direction: column; } .framer-UxULs .framer-1279ora, .framer-UxULs .framer-186amv0 { flex: none; position: relative; top: unset; width: 100%; } .framer-UxULs .framer-118h7le-container { order: 4; } .framer-UxULs .framer-1lapt5x-container { order: 2; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-UxULs .framer-745dje { gap: 0px; } .framer-UxULs .framer-745dje > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-UxULs .framer-745dje > :first-child { margin-top: 0px; } .framer-UxULs .framer-745dje > :last-child { margin-bottom: 0px; } }}`,
    ...ur,
    ...nr,
  ],
  Ae = Ve(qa, Ea, "framer-UxULs"),
  kn = Ae;
Ae.displayName = "Review";
Ae.defaultProps = { height: 3325, width: 1200 };
je(
  Ae,
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
    ...Ia,
    ...Ra,
    ...Pa,
    ...za,
    ...Ha,
    ...Ma,
    ...$(pr),
    ...$(ar),
  ],
  { supportsExplicitInterCodegen: !0 }
);
var Fn = {
  exports: {
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    default: {
      type: "reactComponent",
      name: "FramerzVFenjhZ4",
      slots: [],
      annotations: {
        framerImmutableVariables: "true",
        framerContractVersion: "1",
        framerIntrinsicWidth: "1200",
        framerIntrinsicHeight: "3325",
        framerComponentViewportWidth: "true",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"DpFMOLgVw":{"layout":["fixed","auto"]},"MKz2FSMZh":{"layout":["fixed","auto"]}}}',
        framerDisplayContentsDiv: "false",
        framerResponsiveScreen: "",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
export { Fn as __FramerMetadata__, kn as default };
//# sourceMappingURL=iw93j8rl3Ge-syS_zebOblJdARcGCuNU9Va9mq7Q_lk.5ENSL3TK.mjs.map
