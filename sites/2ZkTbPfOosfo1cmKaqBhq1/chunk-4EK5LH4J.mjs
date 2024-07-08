import {
  R as h,
  S as w,
  U as l,
  X as E,
  t as S,
  wa as $,
  x as b,
} from "./chunk-PIBAGVPI.mjs";
function v(o) {
  let {
      patternType: i,
      front: t,
      back: a,
      radius: H,
      scale: e,
      shouldAnimate: c,
      direction: d,
      diagonal: P,
      duration: F,
    } = o,
    B = w.current() === w.canvas,
    r,
    f,
    n,
    y,
    u,
    M,
    s,
    p,
    z = h.toHexString(h(t)),
    L = h.toHexString(h(a)),
    m = z.replace("#", ""),
    k = L.replace("#", ""),
    C = d === "left" || d === "top" ? -1 : 1,
    g = d === "left" || d === "right" ? C * e : 0,
    x = d === "top" || d === "bottom" ? C * e : 0;
  return (
    i === "wave" &&
      ((r = `radial-gradient(circle at center center, ${t}, ${a}), repeating-radial-gradient(circle at center center, ${t}, ${t}, ${e}px, transparent ${
        e * 2
      }px, transparent ${e}px)`),
      (u = "multiply")),
    i === "zigzag" &&
      ((r = `linear-gradient(135deg, ${t} 25%, transparent 25%), linear-gradient(225deg, ${t} 25%, transparent 25%), linear-gradient(45deg, ${t} 25%, transparent 25%), linear-gradient(315deg, ${t} 25%, ${a} 25%)`),
      (f = `${e}px 0, ${e}px 0, 0 0, 0 0`),
      (n = `${e * 2}px ${e * 2}px`),
      (y = "repeat")),
    i === "diagonal" &&
      (r = `repeating-linear-gradient(45deg, ${t}, ${t} ${e / 2}px, ${a} ${
        e / 2
      }px, ${a} ${e * 2}px )`),
    i === "diagonal-two" &&
      (r = `repeating-linear-gradient( 135deg, ${t}, ${t} ${e / 2}px, ${a} ${
        e / 2
      }px, ${a} ${e * 2}px )`),
    i === "blocks" &&
      ((r = `linear-gradient(30deg, ${t} 12%, transparent 12.5%, transparent 87%, ${t} 87.5%, ${t}), linear-gradient(150deg, ${t} 12%, transparent 12.5%, transparent 87%, ${t} 87.5%, ${t}), linear-gradient(30deg, ${t} 12%, transparent 12.5%, transparent 87%, ${t} 87.5%, ${t}), linear-gradient(150deg, ${t} 12%, transparent 12.5%, transparent 87%, ${t} 87.5%, ${t}), linear-gradient(60deg, ${a} 25%, transparent 25.5%, transparent 75%, ${a} 75%, ${a}), linear-gradient(60deg, ${a} 25%, transparent 25.5%, transparent 75%, ${a} 75%, ${a})`),
      (n = `${e * 8}px ${e * 14}px`),
      (f = `0 0, 0 0, ${e * 4}px ${e * 7}px, ${e * 4}px ${e * 7}px, 0 0, ${
        e * 4
      }px ${e * 7}px`)),
    i === "polka" &&
      ((r = `radial-gradient(${t} 1px, transparent 1px), radial-gradient(${t} 1px, ${a} 1px)`),
      (n = `${e * 2}px ${e * 2}px`),
      (f = `0 0, ${e}px ${e}px`)),
    i === "rhombus" &&
      ((r = `linear-gradient(135deg, ${t} 25%, transparent 25%), linear-gradient(225deg, ${t} 25%, transparent 25%), linear-gradient(45deg, ${t} 25%, transparent 25%), linear-gradient(315deg, ${t} 25%, ${a} 25%)`),
      (f = `${e}px 0, ${e}px 0, 0 0, 0 0`),
      (n = `${e}px ${e}px`),
      (y = "repeat")),
    i === "stars" &&
      ((r = `radial-gradient(ellipse ${e}px ${e}px, ${t}, ${t} 25%, ${a} 25%)`),
      (n = `${e / 2}px ${e / 2}px`),
      c && (p = `${g}px ${x}px`)),
    i === "circles" &&
      ((r = `radial-gradient(circle at 100% 50%, ${a} 20%, ${t} 21%, ${t} 34%, transparent 35%, transparent), radial-gradient(circle at 0% 50%, ${a} 20%, ${t} 21%, ${t} 34%, ${a} 35%, ${a})`),
      (n = `${e * 2}px ${e * 2}px`)),
    i === "rectangles" &&
      ((r = `repeating-linear-gradient(45deg, ${t} 25%, transparent 25%, transparent 75%, ${t} 75%, ${t}), repeating-linear-gradient(45deg, ${t} 25%, ${a} 25%, ${a} 75%, ${t} 75%, ${t})`),
      (f = `0 0, ${e}px ${e}px`),
      (n = `${e * 2}px ${e * 2}px`)),
    i === "lines" &&
      ((r = `linear-gradient(0deg, ${t} 50%, ${a} 50%)`),
      (n = `${e}px ${e}px`)),
    i === "lines-vertical" &&
      ((r = `linear-gradient(to right, ${t} 50%, ${a} 50%)`),
      (n = `${e}px ${e}px`)),
    i === "paper" &&
      ((r = `linear-gradient(${t} 2px, transparent 2px), linear-gradient(90deg, ${t} 2px, transparent 2px), linear-gradient(${t} 1px, transparent 1px), linear-gradient(90deg, ${t} 1px, ${a} 1px)`),
      (n = `${e * 5}px ${e * 5}px, ${e * 5}px ${
        e * 5
      }px, ${e}px ${e}px, ${e}px ${e}px`),
      (f = "-2px -2px, -2px -2px, -1px -1px, -1px -1px")),
    i === "crosses" &&
      ((r = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' %3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23${m}' %3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`),
      (n = `${e * 4}px ${e * 4}px`),
      (s = a)),
    i === "wave-lines" &&
      ((r = `url("data:image/svg+xml,%3Csvg width='100' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23${m}' fill-rule='evenodd'/%3E%3C/svg%3E")`),
      (n = `${e * 10}px ${e * 2}px`),
      (s = a),
      c && (p = `${g * 10}px ${x * 2}px`)),
    i === "clouds" &&
      ((r = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='28'%3E%3Cpath fill='%23${m}' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E")`),
      (n = `${e * 5.6}px ${e * 2.8}px`),
      (s = a),
      c && (p = `${g * 5.6}px ${x * 2.8}px`)),
    i === "stars-two" &&
      ((r = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cpath fill='%23${m}' d='m16 8.764 2.351 4.764 5.257.764L19.804 18l.898 5.236L16 20.764l-4.702 2.472.898-5.236-3.804-3.708 5.257-.764Z'%3E%3C/path%3E%3C/svg%3E")`),
      (n = `${e * 3.2}px ${e * 3.2}px`),
      (s = a)),
    i === "wiggle" &&
      ((r = `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${m}' %3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`),
      (s = a),
      (n = `${e * 5.2}px ${e * 2.6}px`),
      c &&
        (P
          ? (p = `-${e * 5.2}px -${e * 5.2}px`)
          : (p = `${e * 5.2}px ${e * 5.2}px`))),
    i === "groovy" &&
      ((r = `url("data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40c5.523 0 10-4.477 10-10V0C4.477 0 0 4.477 0 10v30zm22 0c-5.523 0-10-4.477-10-10V0c5.523 0 10 4.477 10 10v30z' fill='%23${m}' fill-rule='evenodd'/%3E%3C/svg%3E")`),
      (s = a),
      (n = `${e * 2.4}px ${e * 4}px`),
      c && (p = `${g * 2.4}px ${x * 4}px`)),
    i === "plus" &&
      ((r = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${m}' %3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`),
      (s = a),
      (n = `${e * 6}px ${e * 6}px`)),
    S(b.div, {
      style: {
        width: "100%",
        height: "100%",
        backgroundColor: s || "transparent",
        backgroundImage: r,
        backgroundPosition: f,
        backgroundSize: n,
        backgroundRepeat: y,
        backgroundBlendMode: u,
        borderRadius: H,
        filter: M,
      },
      animate: c && { backgroundPosition: p },
      transition: {
        type: "tween",
        ease: "linear",
        duration: F,
        repeat: 1 / 0,
        repeatType: "loop",
      },
    })
  );
}
v.displayName = "Pattern";
E(v, {
  patternType: {
    type: l.Enum,
    defaultValue: "wave-lines",
    options: [
      "wave-lines",
      "clouds",
      "wiggle",
      "groovy",
      "plus",
      "circles",
      "rectangles",
      "lines",
      "lines-vertical",
      "diagonal",
      "diagonal-two",
      "blocks",
      "wave",
      "zigzag",
      "polka",
      "rhombus",
      "stars",
      "stars-two",
      "paper",
      "crosses",
    ],
    optionTitles: [
      "Wave Lines",
      "Clouds",
      "Wiggle",
      "Groovy",
      "Plus",
      "Circles",
      "Rectangles",
      "Lines",
      "Lines Vertical",
      "Diagonal",
      "Diagonal 2",
      "Blocks",
      "Wave",
      "ZigZag",
      "Polka",
      "Rhombus",
      "Stars",
      "Stars 2",
      "Paper",
      "Crosses",
    ],
    title: "Type",
  },
  front: { type: l.Color, title: "Front", defaultValue: "#FFF" },
  back: { type: l.Color, title: "Back", defaultValue: "#2DD" },
  scale: { type: l.Number, min: 1, max: 100, step: 1, defaultValue: 10 },
  radius: { type: l.Number, min: 0, max: 100, step: 1, defaultValue: 0 },
  shouldAnimate: {
    type: l.Boolean,
    title: "Animate",
    defaultValue: !1,
    hidden(o) {
      return (
        o.patternType !== "wave-lines" &&
        o.patternType !== "wiggle" &&
        o.patternType !== "clouds" &&
        o.patternType !== "stars" &&
        o.patternType !== "groovy"
      );
    },
  },
  direction: {
    type: l.Enum,
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
    hidden(o) {
      return o.patternType === "wiggle" || o.shouldAnimate === !1;
    },
  },
  diagonal: {
    type: l.Boolean,
    title: "Direction",
    defaultValue: !0,
    enabledTitle: "TL",
    disabledTitle: "BR",
    hidden(o) {
      return o.patternType !== "wiggle";
    },
  },
  duration: {
    type: l.Number,
    min: 0,
    max: 50,
    step: 0.1,
    defaultValue: 5,
    hidden(o) {
      return o.shouldAnimate === !1;
    },
  },
});
$.loadFonts([
  "FS;Satoshi-regular",
  "FS;Satoshi-bold",
  "FS;Satoshi-bold italic",
  "FS;Satoshi-italic",
]);
var Z = [
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
  G = [
    '.framer-IvEId .framer-styles-preset-smtg16:not(.rich-text-wrapper), .framer-IvEId .framer-styles-preset-smtg16.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-IvEId .framer-styles-preset-smtg16:not(.rich-text-wrapper), .framer-IvEId .framer-styles-preset-smtg16.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-IvEId .framer-styles-preset-smtg16:not(.rich-text-wrapper), .framer-IvEId .framer-styles-preset-smtg16.rich-text-wrapper p { --framer-font-family: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-bold-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-family-italic: "Satoshi", "Satoshi Placeholder", sans-serif; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-a3567fc0-2c6f-4fa8-ac8f-89ddd158e98d, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
  ],
  O = "framer-IvEId";
$.loadFonts([
  "FS;Satoshi-black",
  "FS;Satoshi-black",
  "FS;Satoshi-black italic",
  "FS;Satoshi-black italic",
]);
var K = [
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
  Q = [
    '.framer-RcHd1 .framer-styles-preset-5vsgqx:not(.rich-text-wrapper), .framer-RcHd1 .framer-styles-preset-5vsgqx.rich-text-wrapper p { --framer-font-family: "Satoshi", sans-serif; --framer-font-family-bold: "Satoshi", sans-serif; --framer-font-family-bold-italic: "Satoshi", sans-serif; --framer-font-family-italic: "Satoshi", sans-serif; --framer-font-size: 11px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 900; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 900; --framer-letter-spacing: 0em; --framer-line-height: 2em; --framer-paragraph-spacing: 24px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; }',
    '@media (max-width: 1199px) and (min-width: 810px) { .framer-RcHd1 .framer-styles-preset-5vsgqx:not(.rich-text-wrapper), .framer-RcHd1 .framer-styles-preset-5vsgqx.rich-text-wrapper p { --framer-font-family: "Satoshi", sans-serif; --framer-font-family-bold: "Satoshi", sans-serif; --framer-font-family-bold-italic: "Satoshi", sans-serif; --framer-font-family-italic: "Satoshi", sans-serif; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 900; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 900; --framer-letter-spacing: 0em; --framer-line-height: 2em; --framer-paragraph-spacing: 24px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
    '@media (max-width: 809px) and (min-width: 0px) { .framer-RcHd1 .framer-styles-preset-5vsgqx:not(.rich-text-wrapper), .framer-RcHd1 .framer-styles-preset-5vsgqx.rich-text-wrapper p { --framer-font-family: "Satoshi", sans-serif; --framer-font-family-bold: "Satoshi", sans-serif; --framer-font-family-bold-italic: "Satoshi", sans-serif; --framer-font-family-italic: "Satoshi", sans-serif; --framer-font-size: 12px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-weight: 900; --framer-font-weight-bold: 900; --framer-font-weight-bold-italic: 900; --framer-font-weight-italic: 900; --framer-letter-spacing: 0em; --framer-line-height: 2em; --framer-paragraph-spacing: 24px; --framer-text-alignment: left; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: uppercase; } }',
  ],
  U = "framer-RcHd1";
export { v as a, Z as b, G as c, O as d, K as e, Q as f, U as g };
//# sourceMappingURL=chunk-4EK5LH4J.mjs.map
