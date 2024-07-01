import { a as Iu, b as Me, c as L } from "./chunk-ELYU6EKT.mjs";
var Ot = {};
Iu(Ot, {
  Children: () => _n,
  Component: () => ge,
  Fragment: () => Ko,
  Profiler: () => sC,
  PureComponent: () => aC,
  StrictMode: () => lC,
  Suspense: () => qo,
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => cC,
  cloneElement: () => yn,
  createContext: () => Se,
  createElement: () => $a,
  createFactory: () => uC,
  createRef: () => $m,
  default: () => b,
  forwardRef: () => Ne,
  isValidElement: () => Yt,
  lazy: () => fC,
  memo: () => dC,
  startTransition: () => $i,
  unstable_act: () => hC,
  useCallback: () => ve,
  useContext: () => D,
  useDebugValue: () => pC,
  useDeferredValue: () => mC,
  useEffect: () => j,
  useId: () => ti,
  useImperativeHandle: () => vC,
  useInsertionEffect: () => ft,
  useLayoutEffect: () => In,
  useMemo: () => he,
  useReducer: () => gC,
  useRef: () => A,
  useState: () => Tt,
  useSyncExternalStore: () => yC,
  useTransition: () => bC,
  version: () => xC,
});
var b = {},
  Go = Symbol.for("react.element"),
  Uk = Symbol.for("react.portal"),
  Xk = Symbol.for("react.fragment"),
  Yk = Symbol.for("react.strict_mode"),
  Gk = Symbol.for("react.profiler"),
  Kk = Symbol.for("react.provider"),
  qk = Symbol.for("react.context"),
  Qk = Symbol.for("react.forward_ref"),
  Zk = Symbol.for("react.suspense"),
  Jk = Symbol.for("react.memo"),
  eC = Symbol.for("react.lazy"),
  _m = Symbol.iterator;
function tC(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_m && e[_m]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Lm = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mm = Object.assign,
  Om = {};
function Bi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Om),
    (this.updater = n || Lm);
}
Bi.prototype.isReactComponent = {};
Bi.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Bi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dm() {}
Dm.prototype = Bi.prototype;
function Lu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Om),
    (this.updater = n || Lm);
}
var Mu = (Lu.prototype = new Dm());
Mu.constructor = Lu;
Mm(Mu, Bi.prototype);
Mu.isPureReactComponent = !0;
var Im = Array.isArray,
  Am = Object.prototype.hasOwnProperty,
  Ou = { current: null },
  Vm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Am.call(t, r) && !Vm.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Go,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Ou.current,
  };
}
function nC(e, t) {
  return {
    $$typeof: Go,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Du(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Go;
}
function rC(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Fm = /\/+/g;
function Fu(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? rC("" + e.key)
    : t.toString(36);
}
function Va(e, t, n, r, i) {
  var o = typeof e;
  (o !== "undefined" && o !== "boolean") || (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Go:
          case Uk:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Fu(s, 0) : r),
      Im(i)
        ? ((n = ""),
          e != null && (n = e.replace(Fm, "$&/") + "/"),
          Va(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (Du(i) &&
            (i = nC(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Fm, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Im(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Fu(o, a);
      s += Va(o, t, n, l, i);
    }
  else if (((l = tC(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Fu(o, a++)), (s += Va(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Aa(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Va(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function iC(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status !== 0 && e._status !== -1) ||
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ct = { current: null },
  Ba = { transition: null },
  oC = {
    ReactCurrentDispatcher: Ct,
    ReactCurrentBatchConfig: Ba,
    ReactCurrentOwner: Ou,
  };
b.Children = {
  map: Aa,
  forEach: function (e, t, n) {
    Aa(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Aa(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Aa(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Du(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
b.Component = Bi;
b.Fragment = Xk;
b.Profiler = Gk;
b.PureComponent = Lu;
b.StrictMode = Yk;
b.Suspense = Zk;
b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = oC;
b.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Mm({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Ou.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Am.call(t, l) &&
        !Vm.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Go, type: e.type, key: i, ref: o, props: r, _owner: s };
};
b.createContext = function (e) {
  return (
    (e = {
      $$typeof: qk,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Kk, _context: e }),
    (e.Consumer = e)
  );
};
b.createElement = Bm;
b.createFactory = function (e) {
  var t = Bm.bind(null, e);
  return (t.type = e), t;
};
b.createRef = function () {
  return { current: null };
};
b.forwardRef = function (e) {
  return { $$typeof: Qk, render: e };
};
b.isValidElement = Du;
b.lazy = function (e) {
  return { $$typeof: eC, _payload: { _status: -1, _result: e }, _init: iC };
};
b.memo = function (e, t) {
  return { $$typeof: Jk, type: e, compare: t === void 0 ? null : t };
};
b.startTransition = function (e) {
  var t = Ba.transition;
  Ba.transition = {};
  try {
    e();
  } finally {
    Ba.transition = t;
  }
};
b.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
b.useCallback = function (e, t) {
  return Ct.current.useCallback(e, t);
};
b.useContext = function (e) {
  return Ct.current.useContext(e);
};
b.useDebugValue = function () {};
b.useDeferredValue = function (e) {
  return Ct.current.useDeferredValue(e);
};
b.useEffect = function (e, t) {
  return Ct.current.useEffect(e, t);
};
b.useId = function () {
  return Ct.current.useId();
};
b.useImperativeHandle = function (e, t, n) {
  return Ct.current.useImperativeHandle(e, t, n);
};
b.useInsertionEffect = function (e, t) {
  return Ct.current.useInsertionEffect(e, t);
};
b.useLayoutEffect = function (e, t) {
  return Ct.current.useLayoutEffect(e, t);
};
b.useMemo = function (e, t) {
  return Ct.current.useMemo(e, t);
};
b.useReducer = function (e, t, n) {
  return Ct.current.useReducer(e, t, n);
};
b.useRef = function (e) {
  return Ct.current.useRef(e);
};
b.useState = function (e) {
  return Ct.current.useState(e);
};
b.useSyncExternalStore = function (e, t, n) {
  return Ct.current.useSyncExternalStore(e, t, n);
};
b.useTransition = function () {
  return Ct.current.useTransition();
};
b.version = "18.2.0";
var _n = b.Children,
  ge = b.Component,
  Ko = b.Fragment,
  sC = b.Profiler,
  aC = b.PureComponent,
  lC = b.StrictMode,
  qo = b.Suspense,
  cC = b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  yn = b.cloneElement,
  Se = b.createContext,
  $a = b.createElement,
  uC = b.createFactory,
  $m = b.createRef,
  Ne = b.forwardRef,
  Yt = b.isValidElement,
  fC = b.lazy,
  dC = b.memo,
  $i = b.startTransition,
  hC = b.unstable_act,
  ve = b.useCallback,
  D = b.useContext,
  pC = b.useDebugValue,
  mC = b.useDeferredValue,
  j = b.useEffect,
  ti = b.useId,
  vC = b.useImperativeHandle,
  ft = b.useInsertionEffect,
  In = b.useLayoutEffect,
  he = b.useMemo,
  gC = b.useReducer,
  A = b.useRef,
  Tt = b.useState,
  yC = b.useSyncExternalStore,
  bC = b.useTransition,
  xC = b.version;
var SC = "default" in Ot ? b : Ot,
  zi = {},
  wC = SC,
  kC = Symbol.for("react.element"),
  CC = Symbol.for("react.fragment"),
  TC = Object.prototype.hasOwnProperty,
  EC = wC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  RC = { key: !0, ref: !0, __self: !0, __source: !0 };
function zm(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) TC.call(t, r) && !RC.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: kC,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: EC.current,
  };
}
zi.Fragment = CC;
zi.jsx = zm;
zi.jsxs = zm;
var Oe = zi.Fragment,
  C = zi.jsx,
  se = zi.jsxs;
var PC = Object.create,
  pf = Object.defineProperty,
  _C = Object.getOwnPropertyDescriptor,
  og = Object.getOwnPropertyNames,
  IC = Object.getPrototypeOf,
  FC = Object.prototype.hasOwnProperty,
  LC = (e, t, n) =>
    t in e
      ? pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  an = (e, t) =>
    function () {
      return t || (0, e[og(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  MC = (e, t, n, r) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let i of og(t))
        !FC.call(e, i) &&
          i !== n &&
          pf(e, i, {
            get: () => t[i],
            enumerable: !(r = _C(t, i)) || r.enumerable,
          });
    return e;
  },
  Vn = (e, t, n) => (
    (n = e != null ? PC(IC(e)) : {}),
    MC(
      t || !e || !e.__esModule
        ? pf(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  ),
  R = (e, t, n) => (LC(e, typeof t != "symbol" ? t + "" : t, n), n),
  mf = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  },
  ci = (e, t, n) => (
    mf(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  Yi = (e, t, n) => {
    if (t.has(e))
      throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  },
  vf = (e, t, n, r) => (
    mf(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  At = (e, t, n) => (mf(e, t, "access private method"), n),
  OC = an({
    "../../../node_modules/@emotion/memoize/dist/memoize.browser.cjs.js"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(n) {
        var r = {};
        return function (i) {
          return r[i] === void 0 && (r[i] = n(i)), r[i];
        };
      }
      e.default = t;
    },
  }),
  DC = an({
    "../../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.cjs.js"(
      e
    ) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      function t(o) {
        return o && typeof o == "object" && "default" in o ? o.default : o;
      }
      var n = t(OC()),
        r =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = n(function (o) {
          return (
            r.test(o) ||
            (o.charCodeAt(0) === 111 &&
              o.charCodeAt(1) === 110 &&
              o.charCodeAt(2) < 91)
          );
        });
      e.default = i;
    },
  }),
  An = Se({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  fs = Se({}),
  Gi = Se(null),
  tl = typeof document < "u",
  wr = tl ? In : j,
  gf = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  AC = "framerAppearId",
  nl = "data-" + gf(AC),
  rl = { skipAnimations: !1, useManualTiming: !1 },
  as = Se({}),
  il = Se({}),
  sg = Se({ strict: !1 }),
  Nm = class {
    constructor() {
      (this.order = []), (this.scheduled = new Set());
    }
    add(e) {
      if (!this.scheduled.has(e))
        return this.scheduled.add(e), this.order.push(e), !0;
    }
    remove(e) {
      let t = this.order.indexOf(e);
      t !== -1 && (this.order.splice(t, 1), this.scheduled.delete(e));
    }
    clear() {
      (this.order.length = 0), this.scheduled.clear();
    }
  };
function VC(e) {
  let t = new Nm(),
    n = new Nm(),
    r = 0,
    i = !1,
    o = !1,
    s = new WeakSet(),
    a = {
      schedule: (l, c = !1, u = !1) => {
        let f = u && i,
          d = f ? t : n;
        return c && s.add(l), d.add(l) && f && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let c = 0; c < r; c++) {
            let u = t.order[c];
            s.has(u) && (a.schedule(u), e()), u(l);
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
var Jo = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  BC = 40;
function ag(e, t) {
  let n = !1,
    r = !0,
    i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Jo.reduce((f, d) => ((f[d] = VC(() => (n = !0))), f), {}),
    s = (f) => {
      o[f].process(i);
    },
    a = () => {
      let f = rl.useManualTiming ? i.timestamp : performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, BC), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Jo.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: Jo.reduce((f, d) => {
      let p = o[d];
      return (f[d] = (g, v = !1, x = !1) => (n || l(), p.schedule(g, v, x))), f;
    }, {}),
    cancel: (f) => Jo.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
var { schedule: yf, cancel: H4 } = ag(queueMicrotask, !1);
function $C(e, t, n, r) {
  let { visualElement: i } = D(fs),
    o = D(sg),
    s = D(Gi),
    a = D(An).reducedMotion,
    l = A();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  let c = l.current;
  ft(() => {
    c && c.update(n, s);
  });
  let u = A(!!(n[nl] && !L.HandoffComplete));
  return (
    wr(() => {
      c &&
        (yf.render(c.render),
        u.current && c.animationState && c.animationState.animateChanges());
    }),
    j(() => {
      c &&
        (c.updateFeatures(),
        !u.current && c.animationState && c.animationState.animateChanges(),
        u.current && ((u.current = !1), (L.HandoffComplete = !0)));
    }),
    c
  );
}
function Ni(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function zC(e, t, n) {
  return ve(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Ni(n) && (n.current = r));
    },
    [t]
  );
}
function ls(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ol(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
var bf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  xf = ["initial", ...bf];
function sl(e) {
  return ol(e.animate) || xf.some((t) => ls(e[t]));
}
function lg(e) {
  return !!(sl(e) || e.variants);
}
function NC(e, t) {
  if (sl(e)) {
    let { initial: n, animate: r } = e;
    return {
      initial: n === !1 || ls(n) ? n : void 0,
      animate: ls(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function HC(e) {
  let { initial: t, animate: n } = NC(e, D(fs));
  return he(() => ({ initial: t, animate: n }), [Hm(t), Hm(n)]);
}
function Hm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
var jm = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  cs = {};
for (let e in jm) cs[e] = { isEnabled: (t) => jm[e].some((n) => !!t[n]) };
function jC(e) {
  for (let t in e) cs[t] = { ...cs[t], ...e[t] };
}
var Sf = Symbol.for("motionComponentSymbol");
function cg({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && jC(e);
  function o(a, l) {
    let c,
      u = { ...D(An), ...a, layoutId: WC(a) },
      { isStatic: f } = u,
      d = HC(a),
      p = r(a, f);
    if (!f && tl) {
      d.visualElement = $C(i, p, u, t);
      let g = D(il),
        v = D(sg).strict;
      d.visualElement && (c = d.visualElement.loadFeatures(u, v, e, g));
    }
    return se(fs.Provider, {
      value: d,
      children: [
        c && d.visualElement
          ? C(c, { visualElement: d.visualElement, ...u })
          : null,
        n(i, a, zC(p, d.visualElement, l), p, f, d.visualElement),
      ],
    });
  }
  let s = Ne(o);
  return (s[Sf] = i), s;
}
function WC({ layoutId: e }) {
  let t = D(as).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
var Ya = {};
function wf(e) {
  Object.assign(Ya, e);
}
var Te = (e) => !!(e && e.getVelocity),
  ds = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  ui = new Set(ds),
  UC = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  XC = ds.length;
function ug(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < XC; s++) {
    let a = ds[s];
    if (e[a] !== void 0) {
      let l = UC[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
var er = (e, t, n) => (n > t ? t : n < e ? e : n),
  ts = (e) => Math.round(e * 1e5) / 1e5,
  kf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  YC =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  GC =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function hs(e) {
  return typeof e == "string";
}
var ps = (e) => ({
    test: (t) => hs(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  gr = ps("deg"),
  Fn = ps("%"),
  K = ps("px"),
  KC = ps("vh"),
  qC = ps("vw"),
  Wm = {
    ...Fn,
    parse: (e) => Fn.parse(e) / 100,
    transform: (e) => Fn.transform(e * 100),
  },
  QC = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
  ]);
function Ui(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    QC.has(e)
  );
}
var fg = (e) => !Ui(e);
function dg(e) {
  e && (fg = (t) => (t.startsWith("on") ? !Ui(t) : e(t)));
}
try {
  dg(DC().default);
} catch {}
function hg(e, t, n) {
  let r = {};
  for (let i in e)
    (i === "values" && typeof e.values == "object") ||
      ((fg(i) ||
        (n === !0 && Ui(i)) ||
        (!t && !Ui(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
var Ku = (e) => Array.isArray(e),
  ZC = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  JC = (e) => (Ku(e) ? e[e.length - 1] || 0 : e);
function dt(e) {
  let t = Te(e) ? e.get() : e;
  return ZC(t) ? t.toValue() : t;
}
function Um(e) {
  let t = [{}, {}];
  return (
    e?.values.forEach((n, r) => {
      (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
    }),
    t
  );
}
function Cf(e, t, n, r) {
  if (typeof t == "function") {
    let [i, o] = Um(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    let [i, o] = Um(r);
    t = t(n !== void 0 ? n : e.custom, i, o);
  }
  return t;
}
function rr(e) {
  let t = A(null);
  return t.current === null && (t.current = e()), t.current;
}
function eT(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  let s = { latestValues: tT(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
var al = (e) => (t, n) => {
  let r = D(fs),
    i = D(Gi),
    o = () => eT(e, t, r, i);
  return n ? o() : rr(o);
};
function tT(e, t, n, r) {
  let i = {},
    o = r(e, {});
  for (let d in o) i[d] = dt(o[d]);
  let { initial: s, animate: a } = e,
    l = sl(e),
    c = lg(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || s === !1;
  let f = u ? a : s;
  return (
    f &&
      typeof f != "boolean" &&
      !ol(f) &&
      (Array.isArray(f) ? f : [f]).forEach((p) => {
        let g = Cf(e, p);
        if (!g) return;
        let { transitionEnd: v, transition: x, ...m } = g;
        for (let h in m) {
          let y = m[h];
          if (Array.isArray(y)) {
            let S = u ? y.length - 1 : 0;
            y = y[S];
          }
          y !== null && (i[h] = y);
        }
        for (let h in v) i[h] = v[h];
      }),
    i
  );
}
var ot = (e) => e,
  {
    schedule: U,
    cancel: ht,
    state: Ae,
    steps: Ha,
  } = ag(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ot, !0),
  pg = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
function ll(e, t = "page") {
  return { point: { x: e[`${t}X`], y: e[`${t}Y`] } };
}
var mg = (e) => (t) => pg(t) && e(t, ll(t));
function Jn(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Ln(e, t, n, r) {
  return Jn(e, t, mg(n), r);
}
var nT = (e, t) => (n) => t(e(n)),
  Mn = (...e) => e.reduce(nT);
function vg(e) {
  let t = null;
  return () => {
    let n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
var Xm = vg("dragHorizontal"),
  Ym = vg("dragVertical");
function gg(e) {
  let t = !1;
  if (e === "y") t = Ym();
  else if (e === "x") t = Xm();
  else {
    let n = Xm(),
      r = Ym();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Tf() {
  let e = gg(!0);
  return e ? (e(), !1) : !0;
}
var Ki = ot,
  Gt = ot,
  qi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  ns = { ...qi, transform: (e) => er(0, 1, e) },
  za = { ...qi, default: 1 },
  Ef = (e, t) => (n) =>
    !!(
      (hs(n) && GC.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  yg = (e, t, n) => (r) => {
    if (!hs(r)) return r;
    let [i, o, s, a] = r.match(kf);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  rT = (e) => er(0, 255, e),
  Au = { ...qi, transform: (e) => Math.round(rT(e)) },
  si = {
    test: Ef("rgb", "red"),
    parse: yg("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Au.transform(e) +
      ", " +
      Au.transform(t) +
      ", " +
      Au.transform(n) +
      ", " +
      ts(ns.transform(r)) +
      ")",
  };
function iT(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
var qu = { test: Ef("#"), parse: iT, transform: si.transform },
  Hi = {
    test: Ef("hsl", "hue"),
    parse: yg("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Fn.transform(ts(t)) +
      ", " +
      Fn.transform(ts(n)) +
      ", " +
      ts(ns.transform(r)) +
      ")",
  },
  it = {
    test: (e) => si.test(e) || qu.test(e) || Hi.test(e),
    parse: (e) =>
      si.test(e) ? si.parse(e) : Hi.test(e) ? Hi.parse(e) : qu.parse(e),
    transform: (e) =>
      hs(e) ? e : e.hasOwnProperty("red") ? si.transform(e) : Hi.transform(e),
  };
function oT(e) {
  var t, n;
  return (
    isNaN(e) &&
    hs(e) &&
    (((t = e.match(kf)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(YC)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
var bg = "number",
  xg = "color",
  sT = "var",
  aT = "var(",
  Gm = "${}",
  lT =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function us(e) {
  let t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    i = [],
    o = 0,
    a = t
      .replace(
        lT,
        (l) => (
          it.test(l)
            ? (r.color.push(o), i.push(xg), n.push(it.parse(l)))
            : l.startsWith(aT)
            ? (r.var.push(o), i.push(sT), n.push(l))
            : (r.number.push(o), i.push(bg), n.push(parseFloat(l))),
          ++o,
          Gm
        )
      )
      .split(Gm);
  return { values: n, split: a, indexes: r, types: i };
}
function Sg(e) {
  return us(e).values;
}
function wg(e) {
  let { split: t, types: n } = us(e),
    r = t.length;
  return (i) => {
    let o = "";
    for (let s = 0; s < r; s++)
      if (((o += t[s]), i[s] !== void 0)) {
        let a = n[s];
        a === bg
          ? (o += ts(i[s]))
          : a === xg
          ? (o += it.transform(i[s]))
          : (o += i[s]);
      }
    return o;
  };
}
var cT = (e) => (typeof e == "number" ? 0 : e);
function uT(e) {
  let t = Sg(e);
  return wg(e)(t.map(cT));
}
var tr = { test: oT, parse: Sg, createTransformer: wg, getAnimatableNone: uT },
  On = (e) => e * 1e3,
  Dn = (e) => e / 1e3;
function Rf(e, t) {
  return t ? e * (1e3 / t) : 0;
}
var fT = 5;
function kg(e, t, n) {
  let r = Math.max(t - fT, 0);
  return Rf(n - e(r), t - r);
}
var Vu = 0.001,
  dT = 0.01,
  Km = 10,
  hT = 0.05,
  pT = 1;
function mT({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  Ki(e <= On(Km), "Spring duration must be 10 seconds or less");
  let s = 1 - t;
  (s = er(hT, pT, s)),
    (e = er(dT, Km, Dn(e))),
    s < 1
      ? ((i = (c) => {
          let u = c * s,
            f = u * e,
            d = u - n,
            p = Qu(c, s),
            g = Math.exp(-f);
          return Vu - (d / p) * g;
        }),
        (o = (c) => {
          let f = c * s * e,
            d = f * n + n,
            p = Math.pow(s, 2) * Math.pow(c, 2) * e,
            g = Math.exp(-f),
            v = Qu(Math.pow(c, 2), s);
          return ((-i(c) + Vu > 0 ? -1 : 1) * ((d - p) * g)) / v;
        }))
      : ((i = (c) => {
          let u = Math.exp(-c * e),
            f = (c - n) * e + 1;
          return -Vu + u * f;
        }),
        (o = (c) => {
          let u = Math.exp(-c * e),
            f = (n - c) * (e * e);
          return u * f;
        }));
  let a = 5 / e,
    l = gT(i, o, a);
  if (((e = On(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    let c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: s * 2 * Math.sqrt(r * c), duration: e };
  }
}
var vT = 12;
function gT(e, t, n) {
  let r = n;
  for (let i = 1; i < vT; i++) r = r - e(r) / t(r);
  return r;
}
function Qu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var yT = ["duration", "bounce"],
  bT = ["stiffness", "damping", "mass"];
function qm(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function xT(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!qm(e, bT) && qm(e, yT)) {
    let n = mT(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function ms({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  let i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: c,
      duration: u,
      velocity: f,
      isResolvedFromDuration: d,
    } = xT({ ...r, velocity: -Dn(r.velocity || 0) }),
    p = f || 0,
    g = l / (2 * Math.sqrt(a * c)),
    v = o - i,
    x = Dn(Math.sqrt(a / c)),
    m = Math.abs(v) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let h;
  if (g < 1) {
    let y = Qu(x, g);
    h = (S) => {
      let k = Math.exp(-g * x * S);
      return (
        o - k * (((p + g * x * v) / y) * Math.sin(y * S) + v * Math.cos(y * S))
      );
    };
  } else if (g === 1) h = (y) => o - Math.exp(-x * y) * (v + (p + x * v) * y);
  else {
    let y = x * Math.sqrt(g * g - 1);
    h = (S) => {
      let k = Math.exp(-g * x * S),
        w = Math.min(y * S, 300);
      return (
        o - (k * ((p + g * x * v) * Math.sinh(w) + y * v * Math.cosh(w))) / y
      );
    };
  }
  return {
    calculatedDuration: (d && u) || null,
    next: (y) => {
      let S = h(y);
      if (d) s.done = y >= u;
      else {
        let k = p;
        y !== 0 && (g < 1 ? (k = kg(h, y, S)) : (k = 0));
        let w = Math.abs(k) <= n,
          T = Math.abs(o - S) <= t;
        s.done = w && T;
      }
      return (s.value = s.done ? o : S), s;
    },
  };
}
var Cg = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  ST = 1e-7,
  wT = 12;
function kT(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = Cg(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > ST && ++a < wT);
  return s;
}
function Qi(e, t, n, r) {
  if (e === t && n === r) return ot;
  let i = (o) => kT(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Cg(i(o), t, r));
}
var Tg = Qi(0.42, 0, 1, 1),
  Eg = Qi(0, 0, 0.58, 1),
  Pf = Qi(0.42, 0, 0.58, 1),
  _f = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  If = (e) => (t) => 1 - e(1 - t),
  cl = (e) => 1 - Math.sin(Math.acos(e)),
  Ff = If(cl),
  Rg = _f(cl),
  Lf = Qi(0.33, 1.53, 0.69, 0.99),
  ul = If(Lf),
  Pg = _f(ul),
  _g = (e) =>
    (e *= 2) < 1 ? 0.5 * ul(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Sr = (e, t, n) => {
    let r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  we = (e, t, n) => e + (t - e) * n;
function Bu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function CT({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Bu(l, a, e + 1 / 3)), (o = Bu(l, a, e)), (s = Bu(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
function Ga(e, t) {
  return (n) => (n > 0 ? t : e);
}
var $u = (e, t, n) => {
    let r = e * e,
      i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i);
  },
  TT = [qu, si, Hi],
  ET = (e) => TT.find((t) => t.test(e));
function Qm(e) {
  let t = ET(e);
  if (
    (Ki(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return t === Hi && (n = CT(n)), n;
}
var Zm = (e, t) => {
    let n = Qm(e),
      r = Qm(t);
    if (!n || !r) return Ga(e, t);
    let i = { ...n };
    return (o) => (
      (i.red = $u(n.red, r.red, o)),
      (i.green = $u(n.green, r.green, o)),
      (i.blue = $u(n.blue, r.blue, o)),
      (i.alpha = we(n.alpha, r.alpha, o)),
      si.transform(i)
    );
  },
  Ig = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Fg = Ig("--"),
  RT = Ig("var(--"),
  Mf = (e) => (RT(e) ? PT.test(e.split("/*")[0].trim()) : !1),
  PT =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Zu = new Set(["none", "hidden"]);
function _T(e, t) {
  return Zu.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function IT(e, t) {
  return (n) => we(e, t, n);
}
function Of(e) {
  return typeof e == "number"
    ? IT
    : typeof e == "string"
    ? Mf(e)
      ? Ga
      : it.test(e)
      ? Zm
      : MT
    : Array.isArray(e)
    ? Lg
    : typeof e == "object"
    ? it.test(e)
      ? Zm
      : FT
    : Ga;
}
function Lg(e, t) {
  let n = [...e],
    r = n.length,
    i = e.map((o, s) => Of(o)(o, t[s]));
  return (o) => {
    for (let s = 0; s < r; s++) n[s] = i[s](o);
    return n;
  };
}
function FT(e, t) {
  let n = { ...e, ...t },
    r = {};
  for (let i in n)
    e[i] !== void 0 && t[i] !== void 0 && (r[i] = Of(e[i])(e[i], t[i]));
  return (i) => {
    for (let o in r) n[o] = r[o](i);
    return n;
  };
}
function LT(e, t) {
  var n;
  let r = [],
    i = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    let s = t.types[o],
      a = e.indexes[s][i[s]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[o] = l), i[s]++;
  }
  return r;
}
var MT = (e, t) => {
  let n = tr.createTransformer(t),
    r = us(e),
    i = us(t);
  return r.indexes.var.length === i.indexes.var.length &&
    r.indexes.color.length === i.indexes.color.length &&
    r.indexes.number.length >= i.indexes.number.length
    ? (Zu.has(e) && !i.values.length) || (Zu.has(t) && !r.values.length)
      ? _T(e, t)
      : Mn(Lg(LT(r, i), i.values), n)
    : (Ki(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      Ga(e, t));
};
function Df(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? we(e, t, n)
    : Of(e)(e, t);
}
function OT(e, t, n) {
  let r = [],
    i = n || Df,
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      let l = Array.isArray(t) ? t[s] || ot : t;
      a = Mn(l, a);
    }
    r.push(a);
  }
  return r;
}
function Zi(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  let o = e.length;
  if (
    (Gt(o === t.length, "Both input and output ranges must be the same length"),
    o === 1)
  )
    return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  let s = OT(t, r, i),
    a = s.length,
    l = (c) => {
      let u = 0;
      if (a > 1) for (; u < e.length - 2 && !(c < e[u + 1]); u++);
      let f = Sr(e[u], e[u + 1], c);
      return s[u](f);
    };
  return n ? (c) => l(er(e[0], e[o - 1], c)) : l;
}
var DT = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Jm = (e) => e === qi || e === K,
  ev = (e, t) => parseFloat(e.split(", ")[t]),
  tv =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      let i = r.match(/^matrix3d\((.+)\)$/u);
      if (i) return ev(i[1], t);
      {
        let o = r.match(/^matrix\((.+)\)$/u);
        return o ? ev(o[1], e) : 0;
      }
    },
  AT = new Set(["x", "y", "z"]),
  VT = ds.filter((e) => !AT.has(e));
function BT(e) {
  let t = [];
  return (
    VT.forEach((n) => {
      let r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
var Xi = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: tv(4, 13),
  y: tv(5, 14),
};
Xi.translateX = Xi.x;
Xi.translateY = Xi.y;
var ai = new Set(),
  Ju = !1,
  ef = !1;
function Mg() {
  if (ef) {
    let e = Array.from(ai).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      let i = BT(r);
      i.length && (n.set(r, i), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        let i = n.get(r);
        i &&
          i.forEach(([o, s]) => {
            var a;
            (a = r.getValue(o)) === null || a === void 0 || a.set(s);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && L.scrollTo(0, r.suspendedScrollY);
      });
  }
  (ef = !1), (Ju = !1), ai.forEach((e) => e.complete()), ai.clear();
}
function Og() {
  ai.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (ef = !0);
  });
}
function $T() {
  Og(), Mg();
}
var Af = class {
  constructor(e, t, n, r, i, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...e]),
      (this.onComplete = t),
      (this.name = n),
      (this.motionValue = r),
      (this.element = i),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (ai.add(this), Ju || ((Ju = !0), U.read(Og), U.resolveKeyframes(Mg)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
    for (let i = 0; i < e.length; i++)
      if (e[i] === null)
        if (i === 0) {
          let o = r?.get(),
            s = e[e.length - 1];
          if (o !== void 0) e[0] = o;
          else if (n && t) {
            let a = n.readValue(t, s);
            a != null && (e[0] = a);
          }
          e[0] === void 0 && (e[0] = s), r && o === void 0 && r.set(e[0]);
        } else e[i] = e[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      ai.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), ai.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
};
function nv({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  let f = e[0],
    d = { done: !1, value: f },
    p = (E) => (a !== void 0 && E < a) || (l !== void 0 && E > l),
    g = (E) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - E) < Math.abs(l - E)
        ? a
        : l,
    v = n * t,
    x = f + v,
    m = s === void 0 ? x : s(x);
  m !== x && (v = m - f);
  let h = (E) => -v * Math.exp(-E / r),
    y = (E) => m + h(E),
    S = (E) => {
      let F = h(E),
        I = y(E);
      (d.done = Math.abs(F) <= c), (d.value = d.done ? m : I);
    },
    k,
    w,
    T = (E) => {
      p(d.value) &&
        ((k = E),
        (w = ms({
          keyframes: [d.value, g(d.value)],
          velocity: kg(y, E, d.value),
          damping: i,
          stiffness: o,
          restDelta: c,
          restSpeed: u,
        })));
    };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (E) => {
        let F = !1;
        return (
          !w && k === void 0 && ((F = !0), S(E), T(E)),
          k !== void 0 && E >= k ? w.next(E - k) : (!F && S(E), d)
        );
      },
    }
  );
}
var Dg = (e) => Array.isArray(e) && typeof e[0] != "number",
  rv = {
    linear: ot,
    easeIn: Tg,
    easeInOut: Pf,
    easeOut: Eg,
    circIn: cl,
    circInOut: Rg,
    circOut: Ff,
    backIn: ul,
    backInOut: Pg,
    backOut: Lf,
    anticipate: _g,
  },
  iv = (e) => {
    if (Array.isArray(e)) {
      Gt(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values."
      );
      let [t, n, r, i] = e;
      return Qi(t, n, r, i);
    } else if (typeof e == "string")
      return Gt(rv[e] !== void 0, `Invalid easing type '${e}'`), rv[e];
    return e;
  };
function Ag(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = Sr(0, t, r);
    e.push(we(n, 1, i));
  }
}
function Vf(e) {
  let t = [0];
  return Ag(t, e.length - 1), t;
}
function zT(e, t) {
  return e.map((n) => n * t);
}
function NT(e, t) {
  return e.map(() => t || Pf).splice(0, e.length - 1);
}
function Ka({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  let i = Dg(r) ? r.map(iv) : iv(r),
    o = { done: !1, value: t[0] },
    s = zT(n && n.length === t.length ? n : Vf(t), e),
    a = Zi(s, t, { ease: Array.isArray(i) ? i : NT(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
var qa = { current: !1 },
  ov = (e, t) =>
    t === "zIndex"
      ? !1
      : !!(
          typeof e == "number" ||
          Array.isArray(e) ||
          (typeof e == "string" &&
            (tr.test(e) || e === "0") &&
            !e.startsWith("url("))
        );
function HT(e) {
  let t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function jT(e, t, n, r) {
  let i = e[0];
  if (i === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  let o = e[e.length - 1],
    s = ov(i, t),
    a = ov(o, t);
  return (
    Ki(
      s === a,
      `You are trying to animate ${t} from "${i}" to "${o}". ${i} is not an animatable value - to enable this animation set ${i} to a value animatable to ${o} via the \`style\` property.`
    ),
    !s || !a ? !1 : HT(e) || (n === "spring" && r)
  );
}
var WT = (e) => e !== null;
function fl(e, { repeat: t, repeatType: n = "loop" }, r) {
  let i = e.filter(WT),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !o || r === void 0 ? i[o] : r;
}
var Vg = class {
    constructor({
      autoplay: e = !0,
      delay: t = 0,
      type: n = "keyframes",
      repeat: r = 0,
      repeatDelay: i = 0,
      repeatType: o = "loop",
      ...s
    }) {
      (this.isStopped = !1),
        (this.hasAttemptedResolve = !1),
        (this.options = {
          autoplay: e,
          delay: t,
          type: n,
          repeat: r,
          repeatDelay: i,
          repeatType: o,
          ...s,
        }),
        this.updateFinishedPromise();
    }
    get resolved() {
      return (
        !this._resolved && !this.hasAttemptedResolve && $T(), this._resolved
      );
    }
    onKeyframesResolved(e, t) {
      this.hasAttemptedResolve = !0;
      let {
        name: n,
        type: r,
        velocity: i,
        delay: o,
        onComplete: s,
        onUpdate: a,
        isGenerator: l,
      } = this.options;
      if (!l && !jT(e, n, r, i))
        if (qa.current || !o) {
          a?.(fl(e, this.options, t)), s?.(), this.resolveFinishedPromise();
          return;
        } else this.options.duration = 0;
      let c = this.initPlayback(e, t);
      c !== !1 &&
        ((this._resolved = { keyframes: e, finalKeyframe: t, ...c }),
        this.onPostResolved());
    }
    onPostResolved() {}
    then(e, t) {
      return this.currentFinishedPromise.then(e, t);
    }
    updateFinishedPromise() {
      this.currentFinishedPromise = new Promise((e) => {
        this.resolveFinishedPromise = e;
      });
    }
  },
  tf = 2e4;
function Bg(e) {
  let t = 0,
    n = 50,
    r = e.next(t);
  for (; !r.done && t < tf; ) (t += n), (r = e.next(t));
  return t >= tf ? 1 / 0 : t;
}
var ja;
function UT() {
  ja = void 0;
}
var xr = {
    now: () => (
      ja === void 0 &&
        xr.set(
          Ae.isProcessing || rl.useManualTiming
            ? Ae.timestamp
            : performance.now()
        ),
      ja
    ),
    set: (e) => {
      (ja = e), queueMicrotask(UT);
    },
  },
  XT = (e) => {
    let t = ({ timestamp: n }) => e(n);
    return {
      start: () => U.update(t, !0),
      stop: () => ht(t),
      now: () => (Ae.isProcessing ? Ae.timestamp : xr.now()),
    };
  },
  YT = { decay: nv, inertia: nv, tween: Ka, keyframes: Ka, spring: ms },
  GT = (e) => e / 100,
  dl = class extends Vg {
    constructor({ KeyframeResolver: e = Af, ...t }) {
      super(t),
        (this.holdTime = null),
        (this.startTime = null),
        (this.cancelTime = null),
        (this.currentTime = 0),
        (this.playbackSpeed = 1),
        (this.pendingPlayState = "running"),
        (this.state = "idle"),
        (this.stop = () => {
          if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
          )
            return;
          this.teardown();
          let { onStop: s } = this.options;
          s && s();
        });
      let { name: n, motionValue: r, keyframes: i } = this.options,
        o = (s, a) => this.onKeyframesResolved(s, a);
      n && r && r.owner
        ? (this.resolver = r.owner.resolveKeyframes(i, o, n, r))
        : (this.resolver = new e(i, o, n, r)),
        this.resolver.scheduleResolve();
    }
    initPlayback(e) {
      let {
          type: t = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: i,
          velocity: o = 0,
        } = this.options,
        s = YT[t] || Ka,
        a,
        l;
      s !== Ka &&
        typeof e[0] != "number" &&
        ((a = Mn(GT, Df(e[0], e[1]))), (e = [0, 100]));
      let c = s({ ...this.options, keyframes: e });
      i === "mirror" &&
        (l = s({ ...this.options, keyframes: [...e].reverse(), velocity: -o })),
        c.calculatedDuration === null && (c.calculatedDuration = Bg(c));
      let { calculatedDuration: u } = c,
        f = u + r,
        d = f * (n + 1) - r;
      return {
        generator: c,
        mirroredGenerator: l,
        mapPercentToKeyframes: a,
        calculatedDuration: u,
        resolvedDuration: f,
        totalDuration: d,
      };
    }
    onPostResolved() {
      let { autoplay: e = !0 } = this.options;
      this.play(),
        this.pendingPlayState === "paused" || !e
          ? this.pause()
          : (this.state = this.pendingPlayState);
    }
    tick(e, t = !1) {
      let { resolved: n } = this;
      if (!n) {
        let { keyframes: T } = this.options;
        return { done: !0, value: T[T.length - 1] };
      }
      let {
        finalKeyframe: r,
        generator: i,
        mirroredGenerator: o,
        mapPercentToKeyframes: s,
        keyframes: a,
        calculatedDuration: l,
        totalDuration: c,
        resolvedDuration: u,
      } = n;
      if (this.startTime === null) return i.next(0);
      let {
        delay: f,
        repeat: d,
        repeatType: p,
        repeatDelay: g,
        onUpdate: v,
      } = this.options;
      this.speed > 0
        ? (this.startTime = Math.min(this.startTime, e))
        : this.speed < 0 &&
          (this.startTime = Math.min(e - c / this.speed, this.startTime)),
        t
          ? (this.currentTime = e)
          : this.holdTime !== null
          ? (this.currentTime = this.holdTime)
          : (this.currentTime = Math.round(e - this.startTime) * this.speed);
      let x = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
        m = this.speed >= 0 ? x < 0 : x > c;
      (this.currentTime = Math.max(x, 0)),
        this.state === "finished" &&
          this.holdTime === null &&
          (this.currentTime = c);
      let h = this.currentTime,
        y = i;
      if (d) {
        let T = Math.min(this.currentTime, c) / u,
          E = Math.floor(T),
          F = T % 1;
        !F && T >= 1 && (F = 1),
          F === 1 && E--,
          (E = Math.min(E, d + 1)),
          !!(E % 2) &&
            (p === "reverse"
              ? ((F = 1 - F), g && (F -= g / u))
              : p === "mirror" && (y = o)),
          (h = er(0, 1, F) * u);
      }
      let S = m ? { done: !1, value: a[0] } : y.next(h);
      s && (S.value = s(S.value));
      let { done: k } = S;
      !m &&
        l !== null &&
        (k = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
      let w =
        this.holdTime === null &&
        (this.state === "finished" || (this.state === "running" && k));
      return (
        w && r !== void 0 && (S.value = fl(a, this.options, r)),
        v && v(S.value),
        w && this.finish(),
        S
      );
    }
    get duration() {
      let { resolved: e } = this;
      return e ? Dn(e.calculatedDuration) : 0;
    }
    get time() {
      return Dn(this.currentTime);
    }
    set time(e) {
      (e = On(e)),
        (this.currentTime = e),
        this.holdTime !== null || this.speed === 0
          ? (this.holdTime = e)
          : this.driver &&
            (this.startTime = this.driver.now() - e / this.speed);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(e) {
      let t = this.playbackSpeed !== e;
      (this.playbackSpeed = e), t && (this.time = Dn(this.currentTime));
    }
    play() {
      if (
        (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
      ) {
        this.pendingPlayState = "running";
        return;
      }
      if (this.isStopped) return;
      let { driver: e = XT, onPlay: t } = this.options;
      this.driver || (this.driver = e((r) => this.tick(r))), t && t();
      let n = this.driver.now();
      this.holdTime !== null
        ? (this.startTime = n - this.holdTime)
        : (!this.startTime || this.state === "finished") &&
          (this.startTime = n),
        this.state === "finished" && this.updateFinishedPromise(),
        (this.cancelTime = this.startTime),
        (this.holdTime = null),
        (this.state = "running"),
        this.driver.start();
    }
    pause() {
      var e;
      if (!this._resolved) {
        this.pendingPlayState = "paused";
        return;
      }
      (this.state = "paused"),
        (this.holdTime =
          (e = this.currentTime) !== null && e !== void 0 ? e : 0);
    }
    complete() {
      this.state !== "running" && this.play(),
        (this.pendingPlayState = this.state = "finished"),
        (this.holdTime = null);
    }
    finish() {
      this.teardown(), (this.state = "finished");
      let { onComplete: e } = this.options;
      e && e();
    }
    cancel() {
      this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise();
    }
    teardown() {
      (this.state = "idle"),
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        (this.startTime = this.cancelTime = null),
        this.resolver.cancel();
    }
    stopDriver() {
      this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(e) {
      return (this.startTime = 0), this.tick(e, !0);
    }
  };
function Bf(e) {
  return new dl(e);
}
var $g = (e) => /^0[^.\s]+$/u.test(e);
function KT(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || $g(e)
    : !0;
}
var zg = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  qT = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function QT(e) {
  let t = qT.exec(e);
  if (!t) return [,];
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
var ZT = 4;
function Ng(e, t, n = 1) {
  Gt(
    n <= ZT,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  let [r, i] = QT(e);
  if (!r) return;
  let o = L.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    let s = o.trim();
    return zg(s) ? parseFloat(s) : s;
  }
  return Mf(i) ? Ng(i, t, n + 1) : i;
}
var Hg = (e) => (t) => t.test(e),
  JT = { test: (e) => e === "auto", parse: (e) => e },
  jg = [qi, K, Fn, gr, qC, KC, JT],
  sv = (e) => jg.find(Hg(e)),
  eE = new Set(["brightness", "contrast", "saturate", "opacity"]);
function tE(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  let [r] = n.match(kf) || [];
  if (!r) return e;
  let i = n.replace(r, ""),
    o = eE.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
var nE = /\b([a-z-]*)\(.*?\)/gu,
  nf = {
    ...tr,
    getAnimatableNone: (e) => {
      let t = e.match(nE);
      return t ? t.map(tE).join(" ") : e;
    },
  },
  av = { ...qi, transform: Math.round },
  Wg = {
    borderWidth: K,
    borderTopWidth: K,
    borderRightWidth: K,
    borderBottomWidth: K,
    borderLeftWidth: K,
    borderRadius: K,
    radius: K,
    borderTopLeftRadius: K,
    borderTopRightRadius: K,
    borderBottomRightRadius: K,
    borderBottomLeftRadius: K,
    width: K,
    maxWidth: K,
    height: K,
    maxHeight: K,
    size: K,
    top: K,
    right: K,
    bottom: K,
    left: K,
    padding: K,
    paddingTop: K,
    paddingRight: K,
    paddingBottom: K,
    paddingLeft: K,
    margin: K,
    marginTop: K,
    marginRight: K,
    marginBottom: K,
    marginLeft: K,
    rotate: gr,
    rotateX: gr,
    rotateY: gr,
    rotateZ: gr,
    scale: za,
    scaleX: za,
    scaleY: za,
    scaleZ: za,
    skew: gr,
    skewX: gr,
    skewY: gr,
    distance: K,
    translateX: K,
    translateY: K,
    translateZ: K,
    x: K,
    y: K,
    z: K,
    perspective: K,
    transformPerspective: K,
    opacity: ns,
    originX: Wm,
    originY: Wm,
    originZ: K,
    zIndex: av,
    backgroundPositionX: K,
    backgroundPositionY: K,
    fillOpacity: ns,
    strokeOpacity: ns,
    numOctaves: av,
  },
  rE = {
    ...Wg,
    color: it,
    backgroundColor: it,
    outlineColor: it,
    fill: it,
    stroke: it,
    borderColor: it,
    borderTopColor: it,
    borderRightColor: it,
    borderBottomColor: it,
    borderLeftColor: it,
    filter: nf,
    WebkitFilter: nf,
  },
  $f = (e) => rE[e];
function Ug(e, t) {
  let n = $f(e);
  return (
    n !== nf && (n = tr), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
var iE = new Set(["auto", "none", "0"]);
function oE(e, t, n) {
  let r = 0,
    i;
  for (; r < e.length && !i; ) {
    let o = e[r];
    typeof o == "string" && !iE.has(o) && us(o).values.length && (i = e[r]),
      r++;
  }
  if (i && n) for (let o of t) e[o] = Ug(n, i);
}
var Xg = class extends Af {
  constructor(e, t, n, r) {
    super(e, t, n, r, r?.owner, !0);
  }
  readKeyframes() {
    let { unresolvedKeyframes: e, element: t, name: n } = this;
    if (!t.current) return;
    super.readKeyframes();
    for (let a = 0; a < e.length; a++) {
      let l = e[a];
      if (typeof l == "string" && ((l = l.trim()), Mf(l))) {
        let c = Ng(l, t.current);
        c !== void 0 && (e[a] = c),
          a === e.length - 1 && (this.finalKeyframe = l);
      }
    }
    if ((this.resolveNoneKeyframes(), !DT.has(n) || e.length !== 2)) return;
    let [r, i] = e,
      o = sv(r),
      s = sv(i);
    if (o !== s)
      if (Jm(o) && Jm(s))
        for (let a = 0; a < e.length; a++) {
          let l = e[a];
          typeof l == "string" && (e[a] = parseFloat(l));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    let { unresolvedKeyframes: e, name: t } = this,
      n = [];
    for (let r = 0; r < e.length; r++) KT(e[r]) && n.push(r);
    n.length && oE(e, n, t);
  }
  measureInitialState() {
    let { element: e, unresolvedKeyframes: t, name: n } = this;
    if (!e.current) return;
    n === "height" && (this.suspendedScrollY = L.pageYOffset),
      (this.measuredOrigin = Xi[n](
        e.measureViewportBox(),
        L.getComputedStyle(e.current)
      )),
      (t[0] = this.measuredOrigin);
    let r = t[t.length - 1];
    r !== void 0 && e.getValue(n, r).jump(r, !1);
  }
  measureEndState() {
    var e;
    let { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t.current) return;
    let i = t.getValue(n);
    i && i.jump(this.measuredOrigin, !1);
    let o = r.length - 1,
      s = r[o];
    (r[o] = Xi[n](t.measureViewportBox(), L.getComputedStyle(t.current))),
      s !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = s),
      !((e = this.removedTransforms) === null || e === void 0) &&
        e.length &&
        this.removedTransforms.forEach(([a, l]) => {
          t.getValue(a).set(l);
        }),
      this.resolveNoneKeyframes();
  }
};
function Yg(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
var Gg = (e) => Array.isArray(e) && typeof e[0] == "number";
function Kg(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in zf) ||
    Gg(e) ||
    (Array.isArray(e) && e.every(Kg))
  );
}
var es = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  zf = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: es([0, 0.65, 0.55, 1]),
    circOut: es([0.55, 0, 1, 0.45]),
    backIn: es([0.31, 0.01, 0.66, -0.59]),
    backOut: es([0.33, 1.53, 0.69, 0.99]),
  };
function sE(e) {
  return qg(e) || zf.easeOut;
}
function qg(e) {
  if (e) return Gg(e) ? es(e) : Array.isArray(e) ? e.map(sE) : zf[e];
}
function aE(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i = 300,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  let c = { [t]: n };
  l && (c.offset = l);
  let u = qg(a);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: i,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
var lE = Yg(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  cE = new Set(["opacity", "clipPath", "filter", "transform"]),
  Qa = 10,
  uE = 2e4;
function fE(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !Kg(e.ease);
}
function dE(e, t) {
  let n = new dl({ ...t, keyframes: e, repeat: 0, delay: 0, isGenerator: !0 }),
    r = { done: !1, value: e[0] },
    i = [],
    o = 0;
  for (; !r.done && o < uE; ) (r = n.sample(o)), i.push(r.value), (o += Qa);
  return { times: void 0, keyframes: i, duration: o - Qa, ease: "linear" };
}
var rf = class extends Vg {
  constructor(e) {
    super(e);
    let { name: t, motionValue: n, keyframes: r } = this.options;
    (this.resolver = new Xg(r, (i, o) => this.onKeyframesResolved(i, o), t, n)),
      this.resolver.scheduleResolve();
  }
  initPlayback(e, t) {
    var n;
    let {
      duration: r = 300,
      times: i,
      ease: o,
      type: s,
      motionValue: a,
      name: l,
    } = this.options;
    if (!(!((n = a.owner) === null || n === void 0) && n.current)) return !1;
    if (fE(this.options)) {
      let { onComplete: u, onUpdate: f, motionValue: d, ...p } = this.options,
        g = dE(e, p);
      (e = g.keyframes),
        e.length === 1 && (e[1] = e[0]),
        (r = g.duration),
        (i = g.times),
        (o = g.ease),
        (s = "keyframes");
    }
    let c = aE(a.owner.current, l, e, {
      ...this.options,
      duration: r,
      times: i,
      ease: o,
    });
    return (
      (c.startTime = xr.now()),
      this.pendingTimeline
        ? ((c.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (c.onfinish = () => {
            let { onComplete: u } = this.options;
            a.set(fl(e, this.options, t)),
              u && u(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: c, duration: r, times: i, type: s, ease: o, keyframes: e }
    );
  }
  get duration() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { duration: t } = e;
    return Dn(t);
  }
  get time() {
    let { resolved: e } = this;
    if (!e) return 0;
    let { animation: t } = e;
    return Dn(t.currentTime || 0);
  }
  set time(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.currentTime = On(e);
  }
  get speed() {
    let { resolved: e } = this;
    if (!e) return 1;
    let { animation: t } = e;
    return t.playbackRate;
  }
  set speed(e) {
    let { resolved: t } = this;
    if (!t) return;
    let { animation: n } = t;
    n.playbackRate = e;
  }
  get state() {
    let { resolved: e } = this;
    if (!e) return "idle";
    let { animation: t } = e;
    return t.playState;
  }
  attachTimeline(e) {
    if (!this._resolved) this.pendingTimeline = e;
    else {
      let { resolved: t } = this;
      if (!t) return ot;
      let { animation: n } = t;
      (n.timeline = e), (n.onfinish = null);
    }
    return ot;
  }
  play() {
    if (this.isStopped) return;
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.playState === "finished" && this.updateFinishedPromise(), t.play();
  }
  pause() {
    let { resolved: e } = this;
    if (!e) return;
    let { animation: t } = e;
    t.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    let { resolved: e } = this;
    if (!e) return;
    let {
      animation: t,
      keyframes: n,
      duration: r,
      type: i,
      ease: o,
      times: s,
    } = e;
    if (!(t.playState === "idle" || t.playState === "finished")) {
      if (this.time) {
        let { motionValue: a, onUpdate: l, onComplete: c, ...u } = this.options,
          f = new dl({
            ...u,
            keyframes: n,
            duration: r,
            type: i,
            ease: o,
            times: s,
            isGenerator: !0,
          }),
          d = On(this.time);
        a.setWithVelocity(f.sample(d - Qa).value, f.sample(d).value, Qa);
      }
      this.cancel();
    }
  }
  complete() {
    let { resolved: e } = this;
    e && e.animation.finish();
  }
  cancel() {
    let { resolved: e } = this;
    e && e.animation.cancel();
  }
  static supports(e) {
    let {
      motionValue: t,
      name: n,
      repeatDelay: r,
      repeatType: i,
      damping: o,
      type: s,
    } = e;
    return (
      lE() &&
      n &&
      cE.has(n) &&
      t &&
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate &&
      !r &&
      i !== "mirror" &&
      o !== 0 &&
      s !== "inertia"
    );
  }
};
function Nf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function hl(e, t) {
  let n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
function hE([...e], t, n) {
  let r = t < 0 ? e.length + t : t;
  if (r >= 0 && r < e.length) {
    let i = n < 0 ? e.length + n : n,
      [o] = e.splice(t, 1);
    e.splice(i, 0, o);
  }
  return e;
}
var Hf = class {
    constructor() {
      this.subscriptions = [];
    }
    add(e) {
      return Nf(this.subscriptions, e), () => hl(this.subscriptions, e);
    }
    notify(e, t, n) {
      let r = this.subscriptions.length;
      if (r)
        if (r === 1) this.subscriptions[0](e, t, n);
        else
          for (let i = 0; i < r; i++) {
            let o = this.subscriptions[i];
            o && o(e, t, n);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  },
  lv = 30,
  pE = (e) => !isNaN(parseFloat(e)),
  rs = { current: void 0 },
  pl = class {
    constructor(e, t = {}) {
      (this.version = "11.2.10"),
        (this.canTrackVelocity = null),
        (this.events = {}),
        (this.updateAndNotify = (n, r = !0) => {
          let i = xr.now();
          this.updatedAt !== i && this.setPrevFrameValue(),
            (this.prev = this.current),
            this.setCurrent(n),
            this.current !== this.prev &&
              this.events.change &&
              this.events.change.notify(this.current),
            r &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.hasAnimated = !1),
        this.setCurrent(e),
        (this.owner = t.owner);
    }
    setCurrent(e) {
      (this.current = e),
        (this.updatedAt = xr.now()),
        this.canTrackVelocity === null &&
          e !== void 0 &&
          (this.canTrackVelocity = pE(this.current));
    }
    setPrevFrameValue(e = this.current) {
      (this.prevFrameValue = e), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(e) {
      return this.on("change", e);
    }
    on(e, t) {
      this.events[e] || (this.events[e] = new Hf());
      let n = this.events[e].add(t);
      return e === "change"
        ? () => {
            n(),
              U.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : n;
    }
    clearListeners() {
      for (let e in this.events) this.events[e].clear();
    }
    attach(e, t) {
      (this.passiveEffect = e), (this.stopPassiveEffect = t);
    }
    set(e, t = !0) {
      !t || !this.passiveEffect
        ? this.updateAndNotify(e, t)
        : this.passiveEffect(e, this.updateAndNotify);
    }
    setWithVelocity(e, t, n) {
      this.set(t),
        (this.prev = void 0),
        (this.prevFrameValue = e),
        (this.prevUpdatedAt = this.updatedAt - n);
    }
    jump(e, t = !0) {
      this.updateAndNotify(e),
        (this.prev = e),
        (this.prevUpdatedAt = this.prevFrameValue = void 0),
        t && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return rs.current && rs.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let e = xr.now();
      if (
        !this.canTrackVelocity ||
        this.prevFrameValue === void 0 ||
        e - this.updatedAt > lv
      )
        return 0;
      let t = Math.min(this.updatedAt - this.prevUpdatedAt, lv);
      return Rf(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
    }
    start(e) {
      return (
        this.stop(),
        new Promise((t) => {
          (this.hasAnimated = !0),
            (this.animation = e(t)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  };
function Ee(e, t) {
  return new pl(e, t);
}
function ml(e, t, n) {
  let r = e.getProps();
  return Cf(r, t, n !== void 0 ? n : r.custom, e);
}
var mE = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  vE = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  gE = { type: "keyframes", duration: 0.8 },
  yE = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  bE = (e, { keyframes: t }) =>
    t.length > 2
      ? gE
      : ui.has(e)
      ? e.startsWith("scale")
        ? vE(t[1])
        : mE
      : yE;
function xE({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
function jf(e, t) {
  return e[t] || e.default || e;
}
function SE(e, t) {
  let n,
    r = () => {
      let { currentTime: i } = t,
        s = (i === null ? 0 : i.value) / 100;
      n !== s && e(s), (n = s);
    };
  return U.update(r, !0), () => ht(r);
}
var wE = Yg(() => L.ScrollTimeline !== void 0),
  Wf = class {
    constructor(e) {
      (this.stop = () => this.runAll("stop")),
        (this.animations = e.filter(Boolean));
    }
    then(e, t) {
      return Promise.all(this.animations).then(e).catch(t);
    }
    getAll(e) {
      return this.animations[0][e];
    }
    setAll(e, t) {
      for (let n = 0; n < this.animations.length; n++)
        this.animations[n][e] = t;
    }
    attachTimeline(e) {
      let t = this.animations.map((n) => {
        if (wE() && n.attachTimeline) n.attachTimeline(e);
        else
          return (
            n.pause(),
            SE((r) => {
              n.time = n.duration * r;
            }, e)
          );
      });
      return () => {
        t.forEach((n, r) => {
          n && n(), this.animations[r].stop();
        });
      };
    }
    get time() {
      return this.getAll("time");
    }
    set time(e) {
      this.setAll("time", e);
    }
    get speed() {
      return this.getAll("speed");
    }
    set speed(e) {
      this.setAll("speed", e);
    }
    get duration() {
      let e = 0;
      for (let t = 0; t < this.animations.length; t++)
        e = Math.max(e, this.animations[t].duration);
      return e;
    }
    runAll(e) {
      this.animations.forEach((t) => t[e]());
    }
    play() {
      this.runAll("play");
    }
    pause() {
      this.runAll("pause");
    }
    cancel() {
      this.runAll("cancel");
    }
    complete() {
      this.runAll("complete");
    }
  },
  Uf =
    (e, t, n, r = {}, i, o) =>
    (s) => {
      let a = jf(r, e) || {},
        l = a.delay || r.delay || 0,
        { elapsed: c = 0 } = r;
      c = c - On(l);
      let u = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...a,
        delay: -c,
        onUpdate: (d) => {
          t.set(d), a.onUpdate && a.onUpdate(d);
        },
        onComplete: () => {
          s(), a.onComplete && a.onComplete();
        },
        name: e,
        motionValue: t,
        element: o ? void 0 : i,
      };
      xE(a) || (u = { ...u, ...bE(e, u) }),
        u.duration && (u.duration = On(u.duration)),
        u.repeatDelay && (u.repeatDelay = On(u.repeatDelay)),
        u.from !== void 0 && (u.keyframes[0] = u.from);
      let f = !1;
      if (
        ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
          ((u.duration = 0), u.delay === 0 && (f = !0)),
        (qa.current || rl.skipAnimations) &&
          ((f = !0), (u.duration = 0), (u.delay = 0)),
        f && !o && t.get() !== void 0)
      ) {
        let d = fl(u.keyframes, a);
        if (d !== void 0)
          return (
            U.update(() => {
              u.onUpdate(d), u.onComplete();
            }),
            new Wf([])
          );
      }
      return !o && rf.supports(u) ? new rf(u) : new dl(u);
    };
function Za(e) {
  return !!(Te(e) && e.add);
}
function kE(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ee(n));
}
function Xf(e, t) {
  let n = ml(e, t),
    { transitionEnd: r = {}, transition: i = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (let s in o) {
    let a = JC(o[s]);
    kE(e, s, a);
  }
}
function Qg(e) {
  return e.getProps()[nl];
}
function CE({ protectedKeys: e, needsAnimating: t }, n) {
  let r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Yf(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  var o;
  let { transition: s = e.getDefaultTransition(), transitionEnd: a, ...l } = t,
    c = e.getValue("willChange");
  r && (s = r);
  let u = [],
    f = i && e.animationState && e.animationState.getState()[i];
  for (let d in l) {
    let p = e.getValue(
        d,
        (o = e.latestValues[d]) !== null && o !== void 0 ? o : null
      ),
      g = l[d];
    if (g === void 0 || (f && CE(f, d))) continue;
    let v = { delay: n, elapsed: 0, ...jf(s || {}, d) },
      x = !1;
    if (L.HandoffAppearAnimations) {
      let h = Qg(e);
      if (h) {
        let y = L.HandoffAppearAnimations(h, d, p, U);
        y !== null && ((v.elapsed = y), (x = !0));
      }
    }
    p.start(
      Uf(d, p, g, e.shouldReduceMotion && ui.has(d) ? { type: !1 } : v, e, x)
    );
    let m = p.animation;
    m && (Za(c) && (c.add(d), m.then(() => c.remove(d))), u.push(m));
  }
  return (
    a &&
      Promise.all(u).then(() => {
        U.update(() => {
          a && Xf(e, a);
        });
      }),
    u
  );
}
function of(e, t, n = {}) {
  var r;
  let i = ml(
      e,
      t,
      n.type === "exit"
        ? (r = e.presenceContext) === null || r === void 0
          ? void 0
          : r.custom
        : void 0
    ),
    { transition: o = e.getDefaultTransition() || {} } = i || {};
  n.transitionOverride && (o = n.transitionOverride);
  let s = i ? () => Promise.all(Yf(e, i, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            let {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: d,
            } = o;
            return TE(e, t, u + c, f, d, n);
          }
        : () => Promise.resolve(),
    { when: l } = o;
  if (l) {
    let [c, u] = l === "beforeChildren" ? [s, a] : [a, s];
    return c().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function TE(e, t, n = 0, r = 0, i = 1, o) {
  let s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(EE)
      .forEach((c, u) => {
        c.notify("AnimationStart", t),
          s.push(
            of(c, t, { ...o, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function EE(e, t) {
  return e.sortNodePosition(t);
}
function Gf(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    let i = t.map((o) => of(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = of(e, t, n);
  else {
    let i = typeof t == "function" ? ml(e, t, n.custom) : t;
    r = Promise.all(Yf(e, i, n));
  }
  return r.then(() => {
    U.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
function Zg(e, t) {
  if (!Array.isArray(t)) return !1;
  let n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
var RE = [...bf].reverse(),
  PE = bf.length;
function _E(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Gf(e, n, r)));
}
function IE(e) {
  let t = _E(e),
    n = LE(),
    r = !0,
    i = (l) => (c, u) => {
      var f;
      let d = ml(
        e,
        u,
        l === "exit"
          ? (f = e.presenceContext) === null || f === void 0
            ? void 0
            : f.custom
          : void 0
      );
      if (d) {
        let { transition: p, transitionEnd: g, ...v } = d;
        c = { ...c, ...v, ...g };
      }
      return c;
    };
  function o(l) {
    t = l(e);
  }
  function s(l) {
    let c = e.getProps(),
      u = e.getVariantContext(!0) || {},
      f = [],
      d = new Set(),
      p = {},
      g = 1 / 0;
    for (let x = 0; x < PE; x++) {
      let m = RE[x],
        h = n[m],
        y = c[m] !== void 0 ? c[m] : u[m],
        S = ls(y),
        k = m === l ? h.isActive : null;
      k === !1 && (g = x);
      let w = y === u[m] && y !== c[m] && S;
      if (
        (w && r && e.manuallyAnimateOnMount && (w = !1),
        (h.protectedKeys = { ...p }),
        (!h.isActive && k === null) ||
          (!y && !h.prevProp) ||
          ol(y) ||
          typeof y == "boolean")
      )
        continue;
      let E =
          FE(h.prevProp, y) ||
          (m === l && h.isActive && !w && S) ||
          (x > g && S),
        F = !1,
        I = Array.isArray(y) ? y : [y],
        $ = I.reduce(i(m), {});
      k === !1 && ($ = {});
      let { prevResolvedValues: B = {} } = h,
        q = { ...B, ...$ },
        J = (W) => {
          (E = !0),
            d.has(W) && ((F = !0), d.delete(W)),
            (h.needsAnimating[W] = !0);
          let ne = e.getValue(W);
          ne && (ne.liveStyle = !1);
        };
      for (let W in q) {
        let ne = $[W],
          Y = B[W];
        if (p.hasOwnProperty(W)) continue;
        let G = !1;
        Ku(ne) && Ku(Y) ? (G = !Zg(ne, Y)) : (G = ne !== Y),
          G
            ? ne != null
              ? J(W)
              : d.add(W)
            : ne !== void 0 && d.has(W)
            ? J(W)
            : (h.protectedKeys[W] = !0);
      }
      (h.prevProp = y),
        (h.prevResolvedValues = $),
        h.isActive && (p = { ...p, ...$ }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!w || F) &&
          f.push(...I.map((W) => ({ animation: W, options: { type: m } })));
    }
    if (d.size) {
      let x = {};
      d.forEach((m) => {
        let h = e.getBaseTarget(m),
          y = e.getValue(m);
        y && (y.liveStyle = !0), (x[m] = h ?? null);
      }),
        f.push({ animation: x });
    }
    let v = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(f) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((d) => {
        var p;
        return (p = d.animationState) === null || p === void 0
          ? void 0
          : p.setActive(l, c);
      }),
      (n[l].isActive = c);
    let f = s(l);
    for (let d in n) n[d].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function FE(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Zg(t, e) : !1;
}
function ni(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function LE() {
  return {
    animate: ni(!0),
    whileInView: ni(),
    whileHover: ni(),
    whileTap: ni(),
    whileDrag: ni(),
    whileFocus: ni(),
    exit: ni(),
  };
}
var kr = class {
    constructor(e) {
      (this.isMounted = !1), (this.node = e);
    }
    update() {}
  },
  ME = class extends kr {
    constructor(e) {
      super(e), e.animationState || (e.animationState = IE(e));
    }
    updateAnimationControlsSubscription() {
      let { animate: e } = this.node.getProps();
      this.unmount(), ol(e) && (this.unmount = e.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: e } = this.node.getProps(),
        { animate: t } = this.node.prevProps || {};
      e !== t && this.updateAnimationControlsSubscription();
    }
    unmount() {}
  },
  OE = 0,
  DE = class extends kr {
    constructor() {
      super(...arguments), (this.id = OE++);
    }
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
        { isPresent: n } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || e === n) return;
      let r = this.node.animationState.setActive("exit", !e);
      t && !e && r.then(() => t(this.id));
    }
    mount() {
      let { register: e } = this.node.presenceContext || {};
      e && (this.unmount = e(this.id));
    }
    unmount() {}
  },
  Kf = { animation: { Feature: ME }, exit: { Feature: DE } },
  sf = (e, t) => Math.abs(e - t);
function Jg(e, t) {
  let n = sf(e.x, t.x),
    r = sf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
function Dt(e) {
  return e.max - e.min;
}
function af(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function cv(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = we(t.min, t.max, e.origin)),
    (e.scale = Dt(n) / Dt(t)),
    (af(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = we(n.min, n.max, e.origin) - e.originPoint),
    (af(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function is(e, t, n, r) {
  cv(e.x, t.x, n.x, r ? r.originX : void 0),
    cv(e.y, t.y, n.y, r ? r.originY : void 0);
}
function uv(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Dt(t));
}
function AE(e, t, n) {
  uv(e.x, t.x, n.x), uv(e.y, t.y, n.y);
}
function fv(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Dt(t));
}
function os(e, t, n) {
  fv(e.x, t.x, n.x), fv(e.y, t.y, n.y);
}
var dv = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ji = () => ({ x: dv(), y: dv() }),
  hv = () => ({ min: 0, max: 0 }),
  De = () => ({ x: hv(), y: hv() });
function vl() {
  let e = D(Gi);
  if (e === null) return [!0, null];
  let { isPresent: t, onExitComplete: n, register: r } = e,
    i = ti();
  return j(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
var VE = (e, t) => e.depth - t.depth,
  ey = class {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(e) {
      Nf(this.children, e), (this.isDirty = !0);
    }
    remove(e) {
      hl(this.children, e), (this.isDirty = !0);
    }
    forEach(e) {
      this.isDirty && this.children.sort(VE),
        (this.isDirty = !1),
        this.children.forEach(e);
    }
  };
function ty(e, t) {
  let n = xr.now(),
    r = ({ timestamp: i }) => {
      let o = i - n;
      o >= t && (ht(r), e(o - t));
    };
  return U.read(r, !0), () => ht(r);
}
var nr = new WeakMap(),
  Ja = { current: null },
  qf = { current: !1 };
function ny() {
  if (((qf.current = !0), !!tl))
    if (L.matchMedia) {
      let e = L.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ja.current = e.matches);
      e.addListener(t), t();
    } else Ja.current = !1;
}
function BE(e, t, n) {
  let { willChange: r } = t;
  for (let i in t) {
    let o = t[i],
      s = n[i];
    if (Te(o)) e.addValue(i, o), Za(r) && r.add(i);
    else if (Te(s)) e.addValue(i, Ee(o, { owner: e })), Za(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        let a = e.getValue(i);
        a.liveStyle === !0 ? a.jump(o) : a.hasAnimated || a.set(o);
      } else {
        let a = e.getStaticValue(i);
        e.addValue(i, Ee(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (let i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
var $E = [...jg, it, tr],
  zE = (e) => $E.find(Hg(e)),
  ry = Object.keys(cs),
  NE = ry.length,
  pv = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  HE = xf.length;
function iy(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : iy(e.parent);
}
var oy = class {
  scrapeMotionValuesFromProps(e, t, n) {
    return {};
  }
  constructor(
    {
      parent: e,
      props: t,
      presenceContext: n,
      reducedMotionConfig: r,
      blockInitialAnimation: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.resolveKeyframes = (f, d, p, g) =>
      new this.KeyframeResolver(f, d, p, g, this)),
      (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Af),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => U.render(this.render, !1, !0));
    let { latestValues: a, renderState: l } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = t.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = e),
      (this.props = t),
      (this.presenceContext = n),
      (this.depth = e ? e.depth + 1 : 0),
      (this.reducedMotionConfig = r),
      (this.options = s),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = sl(t)),
      (this.isVariantNode = lg(t)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(e && e.current));
    let { willChange: c, ...u } = this.scrapeMotionValuesFromProps(t, {}, this);
    for (let f in u) {
      let d = u[f];
      a[f] !== void 0 && Te(d) && (d.set(a[f], !1), Za(c) && c.add(f));
    }
  }
  mount(e) {
    (this.current = e),
      nr.set(e, this),
      this.projection && !this.projection.instance && this.projection.mount(e),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((t, n) => this.bindToMotionValue(n, t)),
      qf.current || ny(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ja.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    var e;
    nr.delete(this.current),
      this.projection && this.projection.unmount(),
      ht(this.notifyUpdate),
      ht(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (let t in this.events) this.events[t].clear();
    for (let t in this.features)
      (e = this.features[t]) === null || e === void 0 || e.unmount();
    this.current = null;
  }
  bindToMotionValue(e, t) {
    let n = ui.has(e),
      r = t.on("change", (o) => {
        (this.latestValues[e] = o),
          this.props.onUpdate && U.preRender(this.notifyUpdate),
          n && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = t.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(e, () => {
      r(), i(), t.owner && t.stop();
    });
  }
  sortNodePosition(e) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== e.type
      ? 0
      : this.sortInstanceNodePosition(this.current, e.current);
  }
  loadFeatures({ children: e, ...t }, n, r, i) {
    let o, s;
    for (let a = 0; a < NE; a++) {
      let l = ry[a],
        {
          isEnabled: c,
          Feature: u,
          ProjectionNode: f,
          MeasureLayout: d,
        } = cs[l];
      f && (o = f),
        c(t) &&
          (!this.features[l] && u && (this.features[l] = new u(this)),
          d && (s = d));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      o
    ) {
      let {
        layoutId: a,
        layout: l,
        drag: c,
        dragConstraints: u,
        layoutScroll: f,
        layoutRoot: d,
      } = t;
      (this.projection = new o(
        this.latestValues,
        t["data-framer-portal-id"] ? void 0 : iy(this.parent)
      )),
        this.projection.setOptions({
          layoutId: a,
          layout: l,
          alwaysMeasureLayout: !!c || (u && Ni(u)),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          animationType: typeof l == "string" ? l : "both",
          initialPromotionConfig: i,
          layoutScroll: f,
          layoutRoot: d,
        });
    }
    return s;
  }
  updateFeatures() {
    for (let e in this.features) {
      let t = this.features[e];
      t.isMounted ? t.update() : (t.mount(), (t.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : De();
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, t) {
    this.latestValues[e] = t;
  }
  update(e, t) {
    (e.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = e),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = t);
    for (let n = 0; n < pv.length; n++) {
      let r = pv[n];
      this.propEventSubscriptions[r] &&
        (this.propEventSubscriptions[r](),
        delete this.propEventSubscriptions[r]);
      let i = "on" + r,
        o = e[i];
      o && (this.propEventSubscriptions[r] = this.on(r, o));
    }
    (this.prevMotionValues = BE(
      this,
      this.scrapeMotionValuesFromProps(e, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants ? this.props.variants[e] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(e = !1) {
    if (e) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      let n = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (n.initial = this.props.initial), n
      );
    }
    let t = {};
    for (let n = 0; n < HE; n++) {
      let r = xf[n],
        i = this.props[r];
      (ls(i) || i === !1) && (t[r] = i);
    }
    return t;
  }
  addVariantChild(e) {
    let t = this.getClosestVariantNode();
    if (t)
      return (
        t.variantChildren && t.variantChildren.add(e),
        () => t.variantChildren.delete(e)
      );
  }
  addValue(e, t) {
    let n = this.values.get(e);
    t !== n &&
      (n && this.removeValue(e),
      this.bindToMotionValue(e, t),
      this.values.set(e, t),
      (this.latestValues[e] = t.get()));
  }
  removeValue(e) {
    this.values.delete(e);
    let t = this.valueSubscriptions.get(e);
    t && (t(), this.valueSubscriptions.delete(e)),
      delete this.latestValues[e],
      this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, t) {
    if (this.props.values && this.props.values[e]) return this.props.values[e];
    let n = this.values.get(e);
    return (
      n === void 0 &&
        t !== void 0 &&
        ((n = Ee(t === null ? void 0 : t, { owner: this })),
        this.addValue(e, n)),
      n
    );
  }
  readValue(e, t) {
    var n;
    let r =
      this.latestValues[e] !== void 0 || !this.current
        ? this.latestValues[e]
        : (n = this.getBaseTargetFromProps(this.props, e)) !== null &&
          n !== void 0
        ? n
        : this.readValueFromInstance(this.current, e, this.options);
    return (
      r != null &&
        (typeof r == "string" && (zg(r) || $g(r))
          ? (r = parseFloat(r))
          : !zE(r) && tr.test(t) && (r = Ug(e, t)),
        this.setBaseTarget(e, Te(r) ? r.get() : r)),
      Te(r) ? r.get() : r
    );
  }
  setBaseTarget(e, t) {
    this.baseTarget[e] = t;
  }
  getBaseTarget(e) {
    var t;
    let { initial: n } = this.props,
      r;
    if (typeof n == "string" || typeof n == "object") {
      let o = Cf(
        this.props,
        n,
        (t = this.presenceContext) === null || t === void 0 ? void 0 : t.custom
      );
      o && (r = o[e]);
    }
    if (n && r !== void 0) return r;
    let i = this.getBaseTargetFromProps(this.props, e);
    return i !== void 0 && !Te(i)
      ? i
      : this.initialValues[e] !== void 0 && r === void 0
      ? void 0
      : this.baseTarget[e];
  }
  on(e, t) {
    return this.events[e] || (this.events[e] = new Hf()), this.events[e].add(t);
  }
  notify(e, ...t) {
    this.events[e] && this.events[e].notify(...t);
  }
};
function sy(e) {
  function t(r, i = {}) {
    return cg(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  let n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
var jE = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Qf(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(jE.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function ay(e, { layout: t, layoutId: n }) {
  return (
    ui.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Ya[e] || e === "opacity"))
  );
}
var WE = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function Zf(e, t, n, r) {
  let { style: i, vars: o, transform: s, transformOrigin: a } = e,
    l = !1,
    c = !1,
    u = !0;
  for (let f in t) {
    let d = t[f];
    if (Fg(f)) {
      o[f] = d;
      continue;
    }
    let p = Wg[f],
      g = WE(d, p);
    if (ui.has(f)) {
      if (((l = !0), (s[f] = g), !u)) continue;
      d !== (p.default || 0) && (u = !1);
    } else f.startsWith("origin") ? ((c = !0), (a[f] = g)) : (i[f] = g);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = ug(e.transform, n, u, r))
        : i.transform && (i.transform = "none")),
    c)
  ) {
    let { originX: f = "50%", originY: d = "50%", originZ: p = 0 } = a;
    i.transformOrigin = `${f} ${d} ${p}`;
  }
}
var Jf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ly(e, t, n) {
  for (let r in t) !Te(t[r]) && !ay(r, n) && (e[r] = t[r]);
}
function UE({ transformTemplate: e }, t, n) {
  return he(() => {
    let r = Jf();
    return (
      Zf(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function XE(e, t, n) {
  let r = e.style || {},
    i = {};
  return ly(i, r, e), Object.assign(i, UE(e, t, n)), i;
}
function YE(e, t, n) {
  let r = {},
    i = XE(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
function mv(e, t, n) {
  return typeof e == "string" ? e : K.transform(t + n * e);
}
function GE(e, t, n) {
  let r = mv(t, e.x, e.width),
    i = mv(n, e.y, e.height);
  return `${r} ${i}`;
}
var KE = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  qE = { offset: "strokeDashoffset", array: "strokeDasharray" };
function QE(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  let o = i ? KE : qE;
  e[o.offset] = K.transform(-r);
  let s = K.transform(t),
    a = K.transform(n);
  e[o.array] = `${s} ${a}`;
}
function ed(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  f,
  d
) {
  if ((Zf(e, c, u, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  let { attrs: p, style: g, dimensions: v } = e;
  p.transform && (v && (g.transform = p.transform), delete p.transform),
    v &&
      (i !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = GE(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (p.x = t),
    n !== void 0 && (p.y = n),
    r !== void 0 && (p.scale = r),
    s !== void 0 && QE(p, s, a, l, !1);
}
var cy = () => ({ ...Jf(), attrs: {} }),
  td = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function ZE(e, t, n, r) {
  let i = he(() => {
    let o = cy();
    return (
      ed(o, t, { enableHardwareAcceleration: !1 }, td(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    let o = {};
    ly(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function JE(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    let l = (Qf(n) ? ZE : YE)(r, o, s, n),
      c = hg(r, typeof n == "string", e),
      u = n !== Ko ? { ...c, ...l, ref: i } : {},
      { children: f } = r,
      d = he(() => (Te(f) ? f.get() : f), [f]);
    return $a(n, { ...u, children: d });
  };
}
function uy(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (let o in n) e.style.setProperty(o, n[o]);
}
var fy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function dy(e, t, n, r) {
  uy(e, t, void 0, r);
  for (let i in t.attrs) e.setAttribute(fy.has(i) ? i : gf(i), t.attrs[i]);
}
function nd(e, t, n) {
  var r;
  let { style: i } = e,
    o = {};
  for (let s in i)
    (Te(i[s]) ||
      (t.style && Te(t.style[s])) ||
      ay(s, e) ||
      ((r = n?.getValue(s)) === null || r === void 0 ? void 0 : r.liveStyle) !==
        void 0) &&
      (o[s] = i[s]);
  return o;
}
function hy(e, t, n) {
  let r = nd(e, t, n);
  for (let i in e)
    if (Te(e[i]) || Te(t[i])) {
      let o =
        ds.indexOf(i) !== -1
          ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
          : i;
      r[o] = e[i];
    }
  return r;
}
var eR = {
    useVisualState: al({
      scrapeMotionValuesFromProps: hy,
      createRenderState: cy,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        U.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          U.render(() => {
            ed(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              td(t.tagName),
              e.transformTemplate
            ),
              dy(t, n);
          });
      },
    }),
  },
  tR = {
    useVisualState: al({
      scrapeMotionValuesFromProps: nd,
      createRenderState: Jf,
    }),
  };
function py(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Qf(e) ? eR : tR),
    preloadedFeatures: n,
    useRender: JE(t),
    createVisualElement: r,
    Component: e,
  };
}
function vv(e, t) {
  let n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    i = (o, s) => {
      if (o.pointerType === "touch" || Tf()) return;
      let a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t);
      let l = a[r];
      l && U.postRender(() => l(o, s));
    };
  return Ln(e.current, n, i, { passive: !e.getProps()[r] });
}
var nR = class extends kr {
    mount() {
      this.unmount = Mn(vv(this.node, !0), vv(this.node, !1));
    }
    unmount() {}
  },
  rR = class extends kr {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let e = !1;
      try {
        e = this.node.current.matches(":focus-visible");
      } catch {
        e = !0;
      }
      !e ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = Mn(
        Jn(this.node.current, "focus", () => this.onFocus()),
        Jn(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  },
  my = (e, t) => (t ? (e === t ? !0 : my(e, t.parentElement)) : !1);
function zu(e, t) {
  if (!t) return;
  let n = new PointerEvent("pointer" + e);
  t(n, ll(n));
}
var iR = class extends kr {
    constructor() {
      super(...arguments),
        (this.removeStartListeners = ot),
        (this.removeEndListeners = ot),
        (this.removeAccessibleListeners = ot),
        (this.startPointerPress = (e, t) => {
          if (this.isPressing) return;
          this.removeEndListeners();
          let n = this.node.getProps(),
            i = Ln(
              L,
              "pointerup",
              (s, a) => {
                if (!this.checkPressEnd()) return;
                let {
                    onTap: l,
                    onTapCancel: c,
                    globalTapTarget: u,
                  } = this.node.getProps(),
                  f = !u && !my(this.node.current, s.target) ? c : l;
                f && U.update(() => f(s, a));
              },
              { passive: !(n.onTap || n.onPointerUp) }
            ),
            o = Ln(L, "pointercancel", (s, a) => this.cancelPress(s, a), {
              passive: !(n.onTapCancel || n.onPointerCancel),
            });
          (this.removeEndListeners = Mn(i, o)), this.startPress(e, t);
        }),
        (this.startAccessiblePress = () => {
          let e = (i) => {
              if (i.key !== "Enter" || this.isPressing) return;
              let o = (s) => {
                s.key !== "Enter" ||
                  !this.checkPressEnd() ||
                  zu("up", (a, l) => {
                    let { onTap: c } = this.node.getProps();
                    c && U.postRender(() => c(a, l));
                  });
              };
              this.removeEndListeners(),
                (this.removeEndListeners = Jn(this.node.current, "keyup", o)),
                zu("down", (s, a) => {
                  this.startPress(s, a);
                });
            },
            t = Jn(this.node.current, "keydown", e),
            n = () => {
              this.isPressing && zu("cancel", (i, o) => this.cancelPress(i, o));
            },
            r = Jn(this.node.current, "blur", n);
          this.removeAccessibleListeners = Mn(t, r);
        });
    }
    startPress(e, t) {
      this.isPressing = !0;
      let { onTapStart: n, whileTap: r } = this.node.getProps();
      r &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !0),
        n && U.postRender(() => n(e, t));
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive("whileTap", !1),
        !Tf()
      );
    }
    cancelPress(e, t) {
      if (!this.checkPressEnd()) return;
      let { onTapCancel: n } = this.node.getProps();
      n && U.postRender(() => n(e, t));
    }
    mount() {
      let e = this.node.getProps(),
        t = Ln(
          e.globalTapTarget ? L : this.node.current,
          "pointerdown",
          this.startPointerPress,
          { passive: !(e.onTapStart || e.onPointerStart) }
        ),
        n = Jn(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = Mn(t, n);
    }
    unmount() {
      this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners();
    }
  },
  lf = new WeakMap(),
  Nu = new WeakMap(),
  oR = (e) => {
    let t = lf.get(e.target);
    t && t(e);
  },
  sR = (e) => {
    e.forEach(oR);
  };
function aR({ root: e, ...t }) {
  let n = e || document;
  Nu.has(n) || Nu.set(n, {});
  let r = Nu.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(sR, { root: e, ...t })), r[i];
}
function lR(e, t, n) {
  let r = aR(t);
  return (
    lf.set(e, n),
    r.observe(e),
    () => {
      lf.delete(e), r.unobserve(e);
    }
  );
}
var cR = { some: 0, all: 1 },
  uR = class extends kr {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      let { viewport: e = {} } = this.node.getProps(),
        { root: t, margin: n, amount: r = "some", once: i } = e,
        o = {
          root: t ? t.current : void 0,
          rootMargin: n,
          threshold: typeof r == "number" ? r : cR[r],
        },
        s = (a) => {
          let { isIntersecting: l } = a;
          if (
            this.isInView === l ||
            ((this.isInView = l), i && !l && this.hasEnteredView)
          )
            return;
          l && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", l);
          let { onViewportEnter: c, onViewportLeave: u } = this.node.getProps(),
            f = l ? c : u;
          f && f(a);
        };
      return lR(this.node.current, o, s);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      let { props: e, prevProps: t } = this.node;
      ["amount", "margin", "root"].some(fR(e, t)) && this.startObserver();
    }
    unmount() {}
  };
function fR({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var vy = {
    inView: { Feature: uR },
    tap: { Feature: iR },
    focus: { Feature: rR },
    hover: { Feature: nR },
  },
  gy = class {
    constructor(
      e,
      t,
      { transformPagePoint: n, contextWindow: r, dragSnapToOrigin: i = !1 } = {}
    ) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.contextWindow = L),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          let u = ju(this.lastMoveEventInfo, this.history),
            f = this.startEvent !== null,
            d = Jg(u.offset, { x: 0, y: 0 }) >= 3;
          if (!f && !d) return;
          let { point: p } = u,
            { timestamp: g } = Ae;
          this.history.push({ ...p, timestamp: g });
          let { onStart: v, onMove: x } = this.handlers;
          f ||
            (v && v(this.lastMoveEvent, u),
            (this.startEvent = this.lastMoveEvent)),
            x && x(this.lastMoveEvent, u);
        }),
        (this.handlePointerMove = (u, f) => {
          (this.lastMoveEvent = u),
            (this.lastMoveEventInfo = Hu(f, this.transformPagePoint)),
            U.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (u, f) => {
          this.end();
          let { onEnd: d, onSessionEnd: p, resumeAnimation: g } = this.handlers;
          if (
            (this.dragSnapToOrigin && g && g(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
          )
            return;
          let v = ju(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Hu(f, this.transformPagePoint),
            this.history
          );
          this.startEvent && d && d(u, v), p && p(u, v);
        }),
        !pg(e))
      )
        return;
      (this.dragSnapToOrigin = i),
        (this.handlers = t),
        (this.transformPagePoint = n),
        (this.contextWindow = r || L);
      let o = ll(e),
        s = Hu(o, this.transformPagePoint),
        { point: a } = s,
        { timestamp: l } = Ae;
      this.history = [{ ...a, timestamp: l }];
      let { onSessionStart: c } = t;
      c && c(e, ju(s, this.history)),
        (this.removeListeners = Mn(
          Ln(this.contextWindow, "pointermove", this.handlePointerMove),
          Ln(this.contextWindow, "pointerup", this.handlePointerUp),
          Ln(this.contextWindow, "pointercancel", this.handlePointerUp)
        ));
    }
    updateHandlers(e) {
      this.handlers = e;
    }
    end() {
      this.removeListeners && this.removeListeners(), ht(this.updatePoint);
    }
  };
function Hu(e, t) {
  return t ? { point: t(e.point) } : e;
}
function gv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ju({ point: e }, t) {
  return {
    point: e,
    delta: gv(e, yy(t)),
    offset: gv(e, dR(t)),
    velocity: hR(t, 0.1),
  };
}
function dR(e) {
  return e[0];
}
function yy(e) {
  return e[e.length - 1];
}
function hR(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = yy(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > On(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  let o = Dn(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  let s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function pR(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? we(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? we(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function yv(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function mR(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: yv(e.x, n, i), y: yv(e.y, t, r) };
}
function bv(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function vR(e, t) {
  return { x: bv(e.x, t.x), y: bv(e.y, t.y) };
}
function gR(e, t) {
  let n = 0.5,
    r = Dt(e),
    i = Dt(t);
  return (
    i > r
      ? (n = Sr(t.min, t.max - r, e.min))
      : r > i && (n = Sr(e.min, e.max - i, t.min)),
    er(0, 1, n)
  );
}
function yR(e, t) {
  let n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
var cf = 0.35;
function bR(e = cf) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = cf),
    { x: xv(e, "left", "right"), y: xv(e, "top", "bottom") }
  );
}
function xv(e, t, n) {
  return { min: Sv(e, t), max: Sv(e, n) };
}
function Sv(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
function sn(e) {
  return [e("x"), e("y")];
}
function by({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function xR({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function SR(e, t) {
  if (!t) return e;
  let n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Wu(e) {
  return e === void 0 || e === 1;
}
function uf({ scale: e, scaleX: t, scaleY: n }) {
  return !Wu(e) || !Wu(t) || !Wu(n);
}
function ri(e) {
  return (
    uf(e) ||
    xy(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function xy(e) {
  return wv(e.x) || wv(e.y);
}
function wv(e) {
  return e && e !== "0%";
}
function el(e, t, n) {
  let r = e - n,
    i = t * r;
  return n + i;
}
function kv(e, t, n, r, i) {
  return i !== void 0 && (e = el(e, i, r)), el(e, n, r) + t;
}
function ff(e, t = 0, n = 1, r, i) {
  (e.min = kv(e.min, t, n, r, i)), (e.max = kv(e.max, t, n, r, i));
}
function Sy(e, { x: t, y: n }) {
  ff(e.x, t.translate, t.scale, t.originPoint),
    ff(e.y, n.translate, n.scale, n.originPoint);
}
function wR(e, t, n, r = !1) {
  let i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    let l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Wi(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Sy(e, s)),
      r && ri(o.latestValues) && Wi(e, o.latestValues));
  }
  (t.x = Cv(t.x)), (t.y = Cv(t.y));
}
function Cv(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function br(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Tv(e, t, [n, r, i]) {
  let o = t[i] !== void 0 ? t[i] : 0.5,
    s = we(e.min, e.max, o);
  ff(e, t[n], t[r], s, t.scale);
}
var kR = ["x", "scaleX", "originX"],
  CR = ["y", "scaleY", "originY"];
function Wi(e, t) {
  Tv(e.x, t, kR), Tv(e.y, t, CR);
}
function wy(e, t) {
  return by(SR(e.getBoundingClientRect(), t));
}
function TR(e, t, n) {
  let r = wy(e, n),
    { scroll: i } = t;
  return i && (br(r.x, i.offset.x), br(r.y, i.offset.y)), r;
}
var ky = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  ER = new WeakMap(),
  RR = class {
    constructor(e) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = De()),
        (this.visualElement = e);
    }
    start(e, { snapToCursor: t = !1 } = {}) {
      let { presenceContext: n } = this.visualElement;
      if (n && n.isPresent === !1) return;
      let r = (c) => {
          let { dragSnapToOrigin: u } = this.getProps();
          u ? this.pauseAnimation() : this.stopAnimation(),
            t && this.snapToCursor(ll(c, "page").point);
        },
        i = (c, u) => {
          let { drag: f, dragPropagation: d, onDragStart: p } = this.getProps();
          if (
            f &&
            !d &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = gg(f)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            sn((v) => {
              let x = this.getAxisMotionValue(v).get() || 0;
              if (Fn.test(x)) {
                let { projection: m } = this.visualElement;
                if (m && m.layout) {
                  let h = m.layout.layoutBox[v];
                  h && (x = Dt(h) * (parseFloat(x) / 100));
                }
              }
              this.originPoint[v] = x;
            }),
            p && U.postRender(() => p(c, u));
          let { animationState: g } = this.visualElement;
          g && g.setActive("whileDrag", !0);
        },
        o = (c, u) => {
          let {
            dragPropagation: f,
            dragDirectionLock: d,
            onDirectionLock: p,
            onDrag: g,
          } = this.getProps();
          if (!f && !this.openGlobalLock) return;
          let { offset: v } = u;
          if (d && this.currentDirection === null) {
            (this.currentDirection = PR(v)),
              this.currentDirection !== null && p && p(this.currentDirection);
            return;
          }
          this.updateAxis("x", u.point, v),
            this.updateAxis("y", u.point, v),
            this.visualElement.render(),
            g && g(c, u);
        },
        s = (c, u) => this.stop(c, u),
        a = () =>
          sn((c) => {
            var u;
            return (
              this.getAnimationState(c) === "paused" &&
              ((u = this.getAxisMotionValue(c).animation) === null ||
              u === void 0
                ? void 0
                : u.play())
            );
          }),
        { dragSnapToOrigin: l } = this.getProps();
      this.panSession = new gy(
        e,
        {
          onSessionStart: r,
          onStart: i,
          onMove: o,
          onSessionEnd: s,
          resumeAnimation: a,
        },
        {
          transformPagePoint: this.visualElement.getTransformPagePoint(),
          dragSnapToOrigin: l,
          contextWindow: ky(this.visualElement),
        }
      );
    }
    stop(e, t) {
      let n = this.isDragging;
      if ((this.cancel(), !n)) return;
      let { velocity: r } = t;
      this.startAnimation(r);
      let { onDragEnd: i } = this.getProps();
      i && U.postRender(() => i(e, t));
    }
    cancel() {
      this.isDragging = !1;
      let { projection: e, animationState: t } = this.visualElement;
      e && (e.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      let { dragPropagation: n } = this.getProps();
      !n &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        t && t.setActive("whileDrag", !1);
    }
    updateAxis(e, t, n) {
      let { drag: r } = this.getProps();
      if (!n || !Na(e, r, this.currentDirection)) return;
      let i = this.getAxisMotionValue(e),
        o = this.originPoint[e] + n[e];
      this.constraints &&
        this.constraints[e] &&
        (o = pR(o, this.constraints[e], this.elastic[e])),
        i.set(o);
    }
    resolveConstraints() {
      var e;
      let { dragConstraints: t, dragElastic: n } = this.getProps(),
        r =
          this.visualElement.projection && !this.visualElement.projection.layout
            ? this.visualElement.projection.measure(!1)
            : (e = this.visualElement.projection) === null || e === void 0
            ? void 0
            : e.layout,
        i = this.constraints;
      t && Ni(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
        ? (this.constraints = mR(r.layoutBox, t))
        : (this.constraints = !1),
        (this.elastic = bR(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          sn((o) => {
            this.constraints !== !1 &&
              this.getAxisMotionValue(o) &&
              (this.constraints[o] = yR(r.layoutBox[o], this.constraints[o]));
          });
    }
    resolveRefConstraints() {
      let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
      if (!e || !Ni(e)) return !1;
      let n = e.current;
      Gt(
        n !== null,
        "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
      );
      let { projection: r } = this.visualElement;
      if (!r || !r.layout) return !1;
      let i = TR(n, r.root, this.visualElement.getTransformPagePoint()),
        o = vR(r.layout.layoutBox, i);
      if (t) {
        let s = t(xR(o));
        (this.hasMutatedConstraints = !!s), s && (o = by(s));
      }
      return o;
    }
    startAnimation(e) {
      let {
          drag: t,
          dragMomentum: n,
          dragElastic: r,
          dragTransition: i,
          dragSnapToOrigin: o,
          onDragTransitionEnd: s,
        } = this.getProps(),
        a = this.constraints || {},
        l = sn((c) => {
          if (!Na(c, t, this.currentDirection)) return;
          let u = (a && a[c]) || {};
          o && (u = { min: 0, max: 0 });
          let f = r ? 200 : 1e6,
            d = r ? 40 : 1e7,
            p = {
              type: "inertia",
              velocity: n ? e[c] : 0,
              bounceStiffness: f,
              bounceDamping: d,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...i,
              ...u,
            };
          return this.startAxisValueAnimation(c, p);
        });
      return Promise.all(l).then(s);
    }
    startAxisValueAnimation(e, t) {
      let n = this.getAxisMotionValue(e);
      return n.start(Uf(e, n, 0, t, this.visualElement));
    }
    stopAnimation() {
      sn((e) => this.getAxisMotionValue(e).stop());
    }
    pauseAnimation() {
      sn((e) => {
        var t;
        return (t = this.getAxisMotionValue(e).animation) === null ||
          t === void 0
          ? void 0
          : t.pause();
      });
    }
    getAnimationState(e) {
      var t;
      return (t = this.getAxisMotionValue(e).animation) === null || t === void 0
        ? void 0
        : t.state;
    }
    getAxisMotionValue(e) {
      let t = `_drag${e.toUpperCase()}`,
        n = this.visualElement.getProps(),
        r = n[t];
      return (
        r ||
        this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
      );
    }
    snapToCursor(e) {
      sn((t) => {
        let { drag: n } = this.getProps();
        if (!Na(t, n, this.currentDirection)) return;
        let { projection: r } = this.visualElement,
          i = this.getAxisMotionValue(t);
        if (r && r.layout) {
          let { min: o, max: s } = r.layout.layoutBox[t];
          i.set(e[t] - we(o, s, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: e, dragConstraints: t } = this.getProps(),
        { projection: n } = this.visualElement;
      if (!Ni(t) || !n || !this.constraints) return;
      this.stopAnimation();
      let r = { x: 0, y: 0 };
      sn((o) => {
        let s = this.getAxisMotionValue(o);
        if (s && this.constraints !== !1) {
          let a = s.get();
          r[o] = gR({ min: a, max: a }, this.constraints[o]);
        }
      });
      let { transformTemplate: i } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
        n.root && n.root.updateScroll(),
        n.updateLayout(),
        this.resolveConstraints(),
        sn((o) => {
          if (!Na(o, e, null)) return;
          let s = this.getAxisMotionValue(o),
            { min: a, max: l } = this.constraints[o];
          s.set(we(a, l, r[o]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      ER.set(this.visualElement, this);
      let e = this.visualElement.current,
        t = Ln(e, "pointerdown", (a) => {
          let { drag: l, dragListener: c = !0 } = this.getProps();
          l && c && this.start(a);
        }),
        n = () => {
          let { dragConstraints: a } = this.getProps();
          Ni(a) && (this.constraints = this.resolveRefConstraints());
        },
        { projection: r } = this.visualElement,
        i = r.addEventListener("measure", n);
      r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
        n();
      let o = Jn(L, "resize", () => this.scalePositionWithinConstraints()),
        s = r.addEventListener(
          "didUpdate",
          ({ delta: a, hasLayoutChanged: l }) => {
            this.isDragging &&
              l &&
              (sn((c) => {
                let u = this.getAxisMotionValue(c);
                u &&
                  ((this.originPoint[c] += a[c].translate),
                  u.set(u.get() + a[c].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        o(), t(), i(), s && s();
      };
    }
    getProps() {
      let e = this.visualElement.getProps(),
        {
          drag: t = !1,
          dragDirectionLock: n = !1,
          dragPropagation: r = !1,
          dragConstraints: i = !1,
          dragElastic: o = cf,
          dragMomentum: s = !0,
        } = e;
      return {
        ...e,
        drag: t,
        dragDirectionLock: n,
        dragPropagation: r,
        dragConstraints: i,
        dragElastic: o,
        dragMomentum: s,
      };
    }
  };
function Na(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function PR(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
var _R = class extends kr {
    constructor(e) {
      super(e),
        (this.removeGroupControls = ot),
        (this.removeListeners = ot),
        (this.controls = new RR(e));
    }
    mount() {
      let { dragControls: e } = this.node.getProps();
      e && (this.removeGroupControls = e.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || ot);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  },
  Ev = (e) => (t, n) => {
    e && U.postRender(() => e(t, n));
  },
  IR = class extends kr {
    constructor() {
      super(...arguments), (this.removePointerDownListener = ot);
    }
    onPointerDown(e) {
      this.session = new gy(e, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: ky(this.node),
      });
    }
    createPanHandlers() {
      let {
        onPanSessionStart: e,
        onPanStart: t,
        onPan: n,
        onPanEnd: r,
      } = this.node.getProps();
      return {
        onSessionStart: Ev(e),
        onStart: Ev(t),
        onMove: n,
        onEnd: (i, o) => {
          delete this.session, r && U.postRender(() => r(i, o));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Ln(
        this.node.current,
        "pointerdown",
        (e) => this.onPointerDown(e)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  },
  Wa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Rv(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
var Qo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (K.test(e)) e = parseFloat(e);
        else return e;
      let n = Rv(e, t.target.x),
        r = Rv(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  FR = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      let r = e,
        i = tr.parse(e);
      if (i.length > 5) return r;
      let o = tr.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      let c = we(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= c),
        typeof i[3 + s] == "number" && (i[3 + s] /= c),
        o(i)
      );
    },
  },
  LR = class extends ge {
    componentDidMount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
          layoutId: r,
        } = this.props,
        { projection: i } = e;
      wf(MR),
        i &&
          (t.group && t.group.add(i),
          n && n.register && r && n.register(i),
          i.root.didUpdate(),
          i.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          i.setOptions({
            ...i.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (Wa.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(e) {
      let {
          layoutDependency: t,
          visualElement: n,
          drag: r,
          isPresent: i,
        } = this.props,
        o = n.projection;
      return (
        o &&
          ((o.isPresent = i),
          r || e.layoutDependency !== t || t === void 0
            ? o.willUpdate()
            : this.safeToRemove(),
          e.isPresent !== i &&
            (i
              ? o.promote()
              : o.relegate() ||
                U.postRender(() => {
                  let s = o.getStack();
                  (!s || !s.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      let { projection: e } = this.props.visualElement;
      e &&
        (e.root.didUpdate(),
        yf.postRender(() => {
          !e.currentAnimation && e.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      let {
          visualElement: e,
          layoutGroup: t,
          switchLayoutGroup: n,
        } = this.props,
        { projection: r } = e;
      r &&
        (r.scheduleCheckAfterUnmount(),
        t && t.group && t.group.remove(r),
        n && n.deregister && n.deregister(r));
    }
    safeToRemove() {
      let { safeToRemove: e } = this.props;
      e && e();
    }
    render() {
      return null;
    }
  };
function Cy(e) {
  let [t, n] = vl(),
    r = D(as);
  return C(LR, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: D(il),
    isPresent: t,
    safeToRemove: n,
  });
}
var MR = {
    borderRadius: {
      ...Qo,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Qo,
    borderTopRightRadius: Qo,
    borderBottomLeftRadius: Qo,
    borderBottomRightRadius: Qo,
    boxShadow: FR,
  },
  Ty = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  OR = Ty.length,
  Pv = (e) => (typeof e == "string" ? parseFloat(e) : e),
  _v = (e) => typeof e == "number" || K.test(e);
function DR(e, t, n, r, i, o) {
  i
    ? ((e.opacity = we(0, n.opacity !== void 0 ? n.opacity : 1, AR(r))),
      (e.opacityExit = we(t.opacity !== void 0 ? t.opacity : 1, 0, VR(r))))
    : o &&
      (e.opacity = we(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < OR; s++) {
    let a = `border${Ty[s]}Radius`,
      l = Iv(t, a),
      c = Iv(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || _v(l) === _v(c)
        ? ((e[a] = Math.max(we(Pv(l), Pv(c), r), 0)),
          (Fn.test(c) || Fn.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = we(t.rotate || 0, n.rotate || 0, r));
}
function Iv(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
var AR = Ey(0, 0.5, Ff),
  VR = Ey(0.5, 0.95, ot);
function Ey(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Sr(e, t, r)));
}
function Fv(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function on(e, t) {
  Fv(e.x, t.x), Fv(e.y, t.y);
}
function Lv(e, t, n, r, i) {
  return (
    (e -= t), (e = el(e, 1 / n, r)), i !== void 0 && (e = el(e, 1 / i, r)), e
  );
}
function BR(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (Fn.test(t) &&
      ((t = parseFloat(t)), (t = we(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = we(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Lv(e.min, t, n, a, i)),
    (e.max = Lv(e.max, t, n, a, i));
}
function Mv(e, t, [n, r, i], o, s) {
  BR(e, t[n], t[r], t[i], t.scale, o, s);
}
var $R = ["x", "scaleX", "originX"],
  zR = ["y", "scaleY", "originY"];
function Ov(e, t, n, r) {
  Mv(e.x, t, $R, n ? n.x : void 0, r ? r.x : void 0),
    Mv(e.y, t, zR, n ? n.y : void 0, r ? r.y : void 0);
}
function Dv(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ry(e) {
  return Dv(e.x) && Dv(e.y);
}
function NR(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Py(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Av(e) {
  return Dt(e.x) / Dt(e.y);
}
var HR = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    Nf(this.members, e), e.scheduleRender();
  }
  remove(e) {
    if (
      (hl(this.members, e),
      e === this.prevLead && (this.prevLead = void 0),
      e === this.lead)
    ) {
      let t = this.members[this.members.length - 1];
      t && this.promote(t);
    }
  }
  relegate(e) {
    let t = this.members.findIndex((r) => e === r);
    if (t === 0) return !1;
    let n;
    for (let r = t; r >= 0; r--) {
      let i = this.members[r];
      if (i.isPresent !== !1) {
        n = i;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && ((this.prevLead = n), (this.lead = e), e.show(), n)) {
      n.instance && n.scheduleRender(),
        e.scheduleRender(),
        (e.resumeFrom = n),
        t && (e.resumeFrom.preserveOpacity = !0),
        n.snapshot &&
          ((e.snapshot = n.snapshot),
          (e.snapshot.latestValues = n.animationValues || n.latestValues)),
        e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
      let { crossfade: r } = e.options;
      r === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((e) => {
      let { options: t, resumingFrom: n } = e;
      t.onExitComplete && t.onExitComplete(),
        n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((e) => {
      e.instance && e.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
};
function Vv(e, t, n) {
  let r = "",
    i = e.x.translate / t.x,
    o = e.y.translate / t.y,
    s = n?.z || 0;
  if (
    ((i || o || s) && (r = `translate3d(${i}px, ${o}px, ${s}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    let {
      transformPerspective: c,
      rotate: u,
      rotateX: f,
      rotateY: d,
      skewX: p,
      skewY: g,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      f && (r += `rotateX(${f}deg) `),
      d && (r += `rotateY(${d}deg) `),
      p && (r += `skewX(${p}deg) `),
      g && (r += `skewY(${g}deg) `);
  }
  let a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
function jR(e) {
  L.MotionDebug && L.MotionDebug.record(e);
}
function _y(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function rd(e, t, n) {
  let r = Te(e) ? e : Ee(e);
  return r.start(Uf("", r, t, n)), r.animation;
}
var Uu = ["", "X", "Y", "Z"],
  WR = { visibility: "hidden" },
  Bv = 1e3,
  UR = 0,
  ii = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  };
function Xu(e, t, n, r) {
  let { latestValues: i } = t;
  i[e] && ((n[e] = i[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Iy(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  let { visualElement: t } = e.options;
  return t
    ? Qg(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
      ? Iy(e.parent)
      : !1
    : !1;
}
function Fy({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t?.()) {
      (this.id = UR++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (ii.totalNodes =
              ii.resolvedTargetDeltas =
              ii.recalculatedProjection =
                0),
            this.nodes.forEach(GR),
            this.nodes.forEach(JR),
            this.nodes.forEach(eP),
            this.nodes.forEach(KR),
            jR(ii);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new ey());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Hf()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      let l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = _y(s)), (this.instance = s);
      let { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f,
          d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = ty(d, 250)),
            Wa.hasAnimatedSinceResize &&
              ((Wa.hasAnimatedSinceResize = !1), this.nodes.forEach(zv));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: p,
              layout: g,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              let v = this.options.transition || u.getDefaultTransition() || oP,
                { onLayoutAnimationStart: x, onLayoutAnimationComplete: m } =
                  u.getProps(),
                h = !this.targetLayout || !Py(this.targetLayout, g) || p,
                y = !d && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                y ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, y);
                let S = { ...jf(v, "layout"), onPlay: x, onComplete: m };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                d || zv(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = g;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      let s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        ht(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(tP),
        this.animationId++);
    }
    getTransformTemplate() {
      let { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (L.HandoffCancelAllAnimations &&
          Iy(this) &&
          L.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        let f = this.path[u];
        (f.shouldResetTransform = !0),
          f.updateScroll("snapshot"),
          f.options.layoutRoot && f.willUpdate(!1);
      }
      let { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      let c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach($v);
        return;
      }
      this.isUpdating || this.nodes.forEach(QR),
        (this.isUpdating = !1),
        this.nodes.forEach(ZR),
        this.nodes.forEach(XR),
        this.nodes.forEach(YR),
        this.clearAllSnapshots();
      let a = xr.now();
      (Ae.delta = er(0, 1e3 / 60, a - Ae.timestamp)),
        (Ae.timestamp = a),
        (Ae.isProcessing = !0),
        Ha.update.process(Ae),
        Ha.preRender.process(Ae),
        Ha.render.process(Ae),
        (Ae.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), yf.read(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(qR), this.sharedNodes.forEach(nP);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        U.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      U.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      let s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = De()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      let { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      let s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Ry(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      s &&
        (a || ri(this.latestValues) || u) &&
        (i(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      let a = this.measurePageBox(),
        l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        sP(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      let { visualElement: s } = this.options;
      if (!s) return De();
      let a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (br(a.x, l.offset.x), br(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      let a = De();
      on(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l],
          { scroll: u, options: f } = c;
        if (c !== this.root && u && f.layoutScroll) {
          if (u.isRoot) {
            on(a, s);
            let { scroll: d } = this.root;
            d && (br(a.x, -d.offset.x), br(a.y, -d.offset.y));
          }
          br(a.x, u.offset.x), br(a.y, u.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      let l = De();
      on(l, s);
      for (let c = 0; c < this.path.length; c++) {
        let u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          Wi(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          ri(u.latestValues) && Wi(l, u.latestValues);
      }
      return ri(this.latestValues) && Wi(l, this.latestValues), l;
    }
    removeTransform(s) {
      let a = De();
      on(a, s);
      for (let l = 0; l < this.path.length; l++) {
        let c = this.path[l];
        if (!c.instance || !ri(c.latestValues)) continue;
        uf(c.latestValues) && c.updateSnapshot();
        let u = De(),
          f = c.measurePageBox();
        on(u, f),
          Ov(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return ri(this.latestValues) && Ov(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Ae.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      let l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      let c = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      let { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = Ae.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          let p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = De()),
              (this.relativeTargetOrigin = De()),
              os(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              on(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = De()), (this.targetWithTransforms = De())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                AE(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : on(this.target, this.layout.layoutBox),
                Sy(this.target, this.targetDelta))
              : on(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            let p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = De()),
                (this.relativeTargetOrigin = De()),
                os(this.relativeTargetOrigin, this.target, p.target),
                on(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ii.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          uf(this.parent.latestValues) ||
          xy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      let a = this.getLead(),
        l = !!this.resumingFrom || this !== a,
        c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Ae.timestamp && (c = !1),
        c)
      )
        return;
      let { layout: u, layoutId: f } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || f))
      )
        return;
      on(this.layoutCorrected, this.layout.layoutBox);
      let d = this.treeScale.x,
        p = this.treeScale.y;
      wR(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = De()));
      let { target: g } = a;
      if (!g) {
        this.projectionTransform &&
          ((this.projectionDelta = ji()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = ji()),
        (this.projectionDeltaWithTransform = ji()));
      let v = this.projectionTransform;
      is(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.projectionTransform = Vv(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== d ||
          this.treeScale.y !== p) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", g)),
        ii.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        let a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      let l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        f = ji();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      let d = De(),
        p = l ? l.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        v = p !== g,
        x = this.getStack(),
        m = !x || x.members.length <= 1,
        h = !!(v && !m && this.options.crossfade === !0 && !this.path.some(iP));
      this.animationProgress = 0;
      let y;
      (this.mixTargetDelta = (S) => {
        let k = S / 1e3;
        Nv(f.x, s.x, k),
          Nv(f.y, s.y, k),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (os(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            rP(this.relativeTarget, this.relativeTargetOrigin, d, k),
            y && NR(this.relativeTarget, y) && (this.isProjectionDirty = !1),
            y || (y = De()),
            on(y, this.relativeTarget)),
          v &&
            ((this.animationValues = u), DR(u, c, this.latestValues, k, h, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (ht(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = U.update(() => {
          (Wa.hasAnimatedSinceResize = !0),
            (this.currentAnimation = rd(0, Bv, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      let s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Bv),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      let s = this.getLead(),
        { targetWithTransforms: a, target: l, layout: c, latestValues: u } = s;
      if (!(!a || !l || !c)) {
        if (
          this !== s &&
          this.layout &&
          c &&
          Ly(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || De();
          let f = Dt(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + f);
          let d = Dt(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        on(a, l),
          Wi(a, u),
          is(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new HR()),
        this.sharedNodes.get(s).add(a);
      let c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      let s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      let { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      let { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      let c = this.getStack();
      c && c.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      let s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      let { visualElement: s } = this.options;
      if (!s) return;
      let a = !1,
        { latestValues: l } = s;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      let c = {};
      l.z && Xu("z", s, c, this.animationValues);
      for (let u = 0; u < Uu.length; u++)
        Xu(`rotate${Uu[u]}`, s, c, this.animationValues),
          Xu(`skew${Uu[u]}`, s, c, this.animationValues);
      s.render();
      for (let u in c)
        s.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return WR;
      let c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = dt(s?.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      let f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        let v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = dt(s?.pointerEvents) || "")),
          this.hasProjected &&
            !ri(this.latestValues) &&
            ((v.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      let d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = Vv(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        u && (c.transform = u(d, c.transform));
      let { x: p, y: g } = this.projectionDelta;
      (c.transformOrigin = `${p.origin * 100}% ${g.origin * 100}% 0`),
        f.animationValues
          ? (c.opacity =
              f === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (c.opacity =
              f === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (let v in Ya) {
        if (d[v] === void 0) continue;
        let { correct: x, applyTo: m } = Ya[v],
          h = c.transform === "none" ? d[v] : x(d[v], f);
        if (m) {
          let y = m.length;
          for (let S = 0; S < y; S++) c[m[S]] = h;
        } else c[v] = h;
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents = f === this ? dt(s?.pointerEvents) || "" : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach($v),
        this.root.sharedNodes.clear();
    }
  };
}
function XR(e) {
  e.updateLayout();
}
function YR(e) {
  var t;
  let n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    let { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? sn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            p = Dt(d);
          (d.min = r[f].min), (d.max = d.min + p);
        })
      : Ly(o, n.layoutBox, r) &&
        sn((f) => {
          let d = s ? n.measuredBox[f] : n.layoutBox[f],
            p = Dt(r[f]);
          (d.max = d.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + p));
        });
    let a = ji();
    is(a, r, n.layoutBox);
    let l = ji();
    s ? is(l, e.applyTransform(i, !0), n.measuredBox) : is(l, r, n.layoutBox);
    let c = !Ry(a),
      u = !1;
    if (!e.resumeFrom) {
      let f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        let { snapshot: d, layout: p } = f;
        if (d && p) {
          let g = De();
          os(g, n.layoutBox, d.layoutBox);
          let v = De();
          os(v, r, p.layoutBox),
            Py(g, v) || (u = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = g),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u,
    });
  } else if (e.isLead()) {
    let { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function GR(e) {
  ii.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function KR(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function qR(e) {
  e.clearSnapshot();
}
function $v(e) {
  e.clearMeasurements();
}
function QR(e) {
  e.isLayoutDirty = !1;
}
function ZR(e) {
  let { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function zv(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function JR(e) {
  e.resolveTargetDelta();
}
function eP(e) {
  e.calcProjection();
}
function tP(e) {
  e.resetSkewAndRotation();
}
function nP(e) {
  e.removeLeadSnapshot();
}
function Nv(e, t, n) {
  (e.translate = we(t.translate, 0, n)),
    (e.scale = we(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Hv(e, t, n, r) {
  (e.min = we(t.min, n.min, r)), (e.max = we(t.max, n.max, r));
}
function rP(e, t, n, r) {
  Hv(e.x, t.x, n.x, r), Hv(e.y, t.y, n.y, r);
}
function iP(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var oP = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  jv = (e) =>
    typeof Me < "u" && Me.userAgent && Me.userAgent.toLowerCase().includes(e),
  Wv = jv("applewebkit/") && !jv("chrome/") ? Math.round : ot;
function Uv(e) {
  (e.min = Wv(e.min)), (e.max = Wv(e.max));
}
function sP(e) {
  Uv(e.x), Uv(e.y);
}
function Ly(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !af(Av(t), Av(n), 0.2))
  );
}
var aP = Fy({
    attachResizeListener: (e, t) => Jn(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  li = { current: void 0 },
  My = Fy({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!li.current) {
        let e = new aP({});
        e.mount(L), e.setOptions({ layoutScroll: !0 }), (li.current = e);
      }
      return li.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => L.getComputedStyle(e).position === "fixed",
  }),
  Oy = {
    pan: { Feature: IR },
    drag: { Feature: _R, ProjectionNode: My, MeasureLayout: Cy },
  },
  Dy = class extends oy {
    constructor() {
      super(...arguments), (this.KeyframeResolver = Xg);
    }
    sortInstanceNodePosition(e, t) {
      return e.compareDocumentPosition(t) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(e, t) {
      return e.style ? e.style[t] : void 0;
    }
    removeValueFromRenderState(e, { vars: t, style: n }) {
      delete t[e], delete n[e];
    }
  };
function lP(e) {
  return L.getComputedStyle(e);
}
var Ay = class extends Dy {
    constructor() {
      super(...arguments), (this.type = "html");
    }
    readValueFromInstance(e, t) {
      if (ui.has(t)) {
        let n = $f(t);
        return (n && n.default) || 0;
      } else {
        let n = lP(e),
          r = (Fg(t) ? n.getPropertyValue(t) : n[t]) || 0;
        return typeof r == "string" ? r.trim() : r;
      }
    }
    measureInstanceViewportBox(e, { transformPagePoint: t }) {
      return wy(e, t);
    }
    build(e, t, n, r) {
      Zf(e, t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return nd(e, t, n);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      let { children: e } = this.props;
      Te(e) &&
        (this.childSubscription = e.on("change", (t) => {
          this.current && (this.current.textContent = `${t}`);
        }));
    }
    renderInstance(e, t, n, r) {
      uy(e, t, n, r);
    }
  },
  Vy = class extends Dy {
    constructor() {
      super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
    }
    getBaseTargetFromProps(e, t) {
      return e[t];
    }
    readValueFromInstance(e, t) {
      if (ui.has(t)) {
        let n = $f(t);
        return (n && n.default) || 0;
      }
      return (t = fy.has(t) ? t : gf(t)), e.getAttribute(t);
    }
    measureInstanceViewportBox() {
      return De();
    }
    scrapeMotionValuesFromProps(e, t, n) {
      return hy(e, t, n);
    }
    build(e, t, n, r) {
      ed(e, t, n, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(e, t, n, r) {
      dy(e, t, n, r);
    }
    mount(e) {
      (this.isSVGTag = td(e.tagName)), super.mount(e);
    }
  },
  By = (e, t) =>
    Qf(e)
      ? new Vy(t, { enableHardwareAcceleration: !1 })
      : new Ay(t, {
          allowProjection: e !== Ko,
          enableHardwareAcceleration: !0,
        }),
  $y = { layout: { ProjectionNode: My, MeasureLayout: Cy } },
  cP = { ...Kf, ...vy, ...Oy, ...$y },
  Vt = sy((e, t) => py(e, t, cP, By));
var uP = sy(py);
function zy() {
  let e = A(!1);
  return (
    wr(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function gl() {
  let e = zy(),
    [t, n] = Tt(0),
    r = ve(() => {
      e.current && n(t + 1);
    }, [t]);
  return [ve(() => U.postRender(r), [r]), t];
}
function Ny(e) {
  return j(() => () => e(), []);
}
var fP = class extends ge {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.childRef.current;
    if (t && e.isPresent && !this.props.isPresent) {
      let n = this.props.sizeRef.current;
      (n.height = t.offsetHeight || 0),
        (n.width = t.offsetWidth || 0),
        (n.top = t.offsetTop),
        (n.left = t.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function dP({ children: e, isPresent: t }) {
  let n = ti(),
    r = A(null),
    i = A({ width: 0, height: 0, top: 0, left: 0 }),
    { nonce: o } = D(An);
  return (
    ft(() => {
      let { width: s, height: a, top: l, left: c } = i.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      let u = document.createElement("style");
      return (
        o && (u.nonce = o),
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    C(fP, {
      isPresent: t,
      childRef: r,
      sizeRef: i,
      children: yn(e, { ref: r }),
    })
  );
}
var Yu = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  let a = rr(hP),
    l = ti(),
    c = he(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (u) => {
          a.set(u, !0);
          for (let f of a.values()) if (!f) return;
          r && r();
        },
        register: (u) => (a.set(u, !1), () => a.delete(u)),
      }),
      o ? [Math.random()] : [n]
    );
  return (
    he(() => {
      a.forEach((u, f) => a.set(f, !1));
    }, [n]),
    j(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = C(dP, { isPresent: n, children: e })),
    C(Gi.Provider, { value: c, children: e })
  );
};
function hP() {
  return new Map();
}
var oi = (e) => e.key || "";
function pP(e, t) {
  e.forEach((n) => {
    let r = oi(n);
    t.set(r, n);
  });
}
function mP(e) {
  let t = [];
  return (
    _n.forEach(e, (n) => {
      Yt(n) && t.push(n);
    }),
    t
  );
}
var id = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: i,
  presenceAffectsLayout: o = !0,
  mode: s = "sync",
}) => {
  Gt(!i, "Replace exitBeforeEnter with mode='wait'");
  let a = D(as).forceRender || gl()[0],
    l = zy(),
    c = mP(e),
    u = c,
    f = A(new Map()).current,
    d = A(u),
    p = A(new Map()).current,
    g = A(!0);
  if (
    (wr(() => {
      (g.current = !1), pP(c, p), (d.current = u);
    }),
    Ny(() => {
      (g.current = !0), p.clear(), f.clear();
    }),
    g.current)
  )
    return C(Oe, {
      children: u.map((h) =>
        C(
          Yu,
          {
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: s,
            children: h,
          },
          oi(h)
        )
      ),
    });
  u = [...u];
  let v = d.current.map(oi),
    x = c.map(oi),
    m = v.length;
  for (let h = 0; h < m; h++) {
    let y = v[h];
    x.indexOf(y) === -1 && !f.has(y) && f.set(y, void 0);
  }
  return (
    s === "wait" && f.size && (u = []),
    f.forEach((h, y) => {
      if (x.indexOf(y) !== -1) return;
      let S = p.get(y);
      if (!S) return;
      let k = v.indexOf(y),
        w = h;
      w ||
        ((w = C(
          Yu,
          {
            isPresent: !1,
            onExitComplete: () => {
              f.delete(y);
              let E = Array.from(p.keys()).filter((F) => !x.includes(F));
              if (
                (E.forEach((F) => p.delete(F)),
                (d.current = c.filter((F) => {
                  let I = oi(F);
                  return I === y || E.includes(I);
                })),
                !f.size)
              ) {
                if (l.current === !1) return;
                a(), r && r();
              }
            },
            custom: t,
            presenceAffectsLayout: o,
            mode: s,
            children: S,
          },
          oi(S)
        )),
        f.set(y, w)),
        u.splice(k, 0, w);
    }),
    (u = u.map((h) => {
      let y = h.key;
      return f.has(y)
        ? h
        : C(
            Yu,
            { isPresent: !0, presenceAffectsLayout: o, mode: s, children: h },
            oi(h)
          );
    })),
    C(Oe, { children: f.size ? u : u.map((h) => yn(h)) })
  );
};
function Hy({ children: e, isValidProp: t, ...n }) {
  t && dg(t), (n = { ...D(An), ...n }), (n.isStatic = rr(() => n.isStatic));
  let r = he(
    () => n,
    [JSON.stringify(n.transition), n.transformPagePoint, n.reducedMotion]
  );
  return C(An.Provider, { value: r, children: e });
}
var jy = Se(null),
  vP = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function Xv() {
  let e = new Set(),
    t = new WeakMap(),
    n = () => e.forEach(vP);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", n));
    },
    remove: (r) => {
      e.delete(r);
      let i = t.get(r);
      i && (i(), t.delete(r)), n();
    },
    dirty: n,
  };
}
var Wy = (e) => e === !0,
  gP = (e) => Wy(e === !0) || e === "id",
  Uy = ({ children: e, id: t, inherit: n = !0 }) => {
    let r = D(as),
      i = D(jy),
      [o, s] = gl(),
      a = A(null),
      l = r.id || i;
    a.current === null &&
      (gP(n) && l && (t = t ? l + "-" + t : l),
      (a.current = { id: t, group: (Wy(n) && r.group) || Xv() }));
    let c = he(() => ({ ...a.current, forceRender: o }), [s]);
    return C(as.Provider, { value: c, children: e });
  };
function Bn(e) {
  let t = rr(() => Ee(e)),
    { isStatic: n } = D(An);
  if (n) {
    let [, r] = Tt(e);
    j(() => t.on("change", r), []);
  }
  return t;
}
var yP = (e) => e && typeof e == "object" && e.mix,
  bP = (e) => (yP(e) ? e.mix : void 0);
function Ji(...e) {
  let t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    i = e[1 + n],
    o = e[2 + n],
    s = e[3 + n],
    a = Zi(i, o, { mixer: bP(o[0]), ...s });
  return t ? a(r) : a;
}
function Xy(e, t) {
  let n = Bn(t()),
    r = () => n.set(t());
  return (
    r(),
    wr(() => {
      let i = () => U.preRender(r, !1, !0),
        o = e.map((s) => s.on("change", i));
      return () => {
        o.forEach((s) => s()), ht(r);
      };
    }),
    n
  );
}
function xP(e) {
  (rs.current = []), e();
  let t = Xy(rs.current, e);
  return (rs.current = void 0), t;
}
function Et(e, t, n, r) {
  if (typeof e == "function") return xP(e);
  let i = typeof t == "function" ? t : Ji(t, n, r);
  return Array.isArray(e) ? Yv(e, i) : Yv([e], ([o]) => i(o));
}
function Yv(e, t) {
  let n = rr(() => []);
  return Xy(e, () => {
    n.length = 0;
    let r = e.length;
    for (let i = 0; i < r; i++) n[i] = e[i].get();
    return t(n);
  });
}
var Yy = Se(null);
function SP(e, t, n, r) {
  if (!r) return e;
  let i = e.findIndex((u) => u.value === t);
  if (i === -1) return e;
  let o = r > 0 ? 1 : -1,
    s = e[i + o];
  if (!s) return e;
  let a = e[i],
    l = s.layout,
    c = we(l.min, l.max, 0.5);
  return (o === 1 && a.layout.max + n > c) || (o === -1 && a.layout.min + n < c)
    ? hE(e, i, i + o)
    : e;
}
function wP(
  { children: e, as: t = "ul", axis: n = "y", onReorder: r, values: i, ...o },
  s
) {
  let a = rr(() => Vt(t)),
    l = [],
    c = A(!1);
  Gt(!!i, "Reorder.Group must be provided a values prop");
  let u = {
    axis: n,
    registerItem: (f, d) => {
      let p = l.findIndex((g) => f === g.value);
      p !== -1 ? (l[p].layout = d[n]) : l.push({ value: f, layout: d[n] }),
        l.sort(CP);
    },
    updateOrder: (f, d, p) => {
      if (c.current) return;
      let g = SP(l, f, d, p);
      l !== g &&
        ((c.current = !0), r(g.map(kP).filter((v) => i.indexOf(v) !== -1)));
    },
  };
  return (
    j(() => {
      c.current = !1;
    }),
    C(a, {
      ...o,
      ref: s,
      ignoreStrict: !0,
      children: C(Yy.Provider, { value: u, children: e }),
    })
  );
}
var SB = Ne(wP);
function kP(e) {
  return e.value;
}
function CP(e, t) {
  return e.layout.min - t.layout.min;
}
function Gv(e, t = 0) {
  return Te(e) ? e : Bn(t);
}
function TP(
  {
    children: e,
    style: t = {},
    value: n,
    as: r = "li",
    onDrag: i,
    layout: o = !0,
    ...s
  },
  a
) {
  let l = rr(() => Vt(r)),
    c = D(Yy),
    u = { x: Gv(t.x), y: Gv(t.y) },
    f = Et([u.x, u.y], ([v, x]) => (v || x ? 1 : "unset"));
  Gt(!!c, "Reorder.Item must be a child of Reorder.Group");
  let { axis: d, registerItem: p, updateOrder: g } = c;
  return C(l, {
    drag: d,
    ...s,
    dragSnapToOrigin: !0,
    style: { ...t, x: u.x, y: u.y, zIndex: f },
    layout: o,
    onDrag: (v, x) => {
      let { velocity: m } = x;
      m[d] && g(n, u[d].get(), m[d]), i && i(v, x);
    },
    onLayoutMeasure: (v) => p(n, v),
    ref: a,
    ignoreStrict: !0,
    children: e,
  });
}
var CB = Ne(TP);
var Gy = { renderer: By, ...Kf, ...vy },
  EP = { ...Gy, ...Oy, ...$y };
function od(e, t = {}) {
  let { isStatic: n } = D(An),
    r = A(null),
    i = Bn(Te(e) ? e.get() : e),
    o = A(i.get()),
    s = A(() => {}),
    a = () => {
      let c = r.current;
      c && c.time === 0 && c.sample(Ae.delta),
        l(),
        (r.current = Bf({
          keyframes: [i.get(), o.current],
          velocity: i.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...t,
          onUpdate: s.current,
        }));
    },
    l = () => {
      r.current && r.current.stop();
    };
  return (
    ft(
      () =>
        i.attach(
          (c, u) =>
            n ? u(c) : ((o.current = c), (s.current = u), U.update(a), i.get()),
          l
        ),
      [JSON.stringify(t)]
    ),
    wr(() => {
      if (Te(e)) return e.on("change", (c) => i.set(parseFloat(c)));
    }, [i]),
    i
  );
}
function yl(e, t, n) {
  var r;
  if (typeof e == "string") {
    let i = document;
    t &&
      (Gt(!!t.current, "Scope provided, but no element detected."),
      (i = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = i.querySelectorAll(e)),
          (e = n[e]))
        : (e = i.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
var Ua = new WeakMap(),
  yr;
function RP(e, t) {
  if (t) {
    let { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : { width: e.offsetWidth, height: e.offsetHeight };
}
function PP({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = Ua.get(e)) === null ||
    r === void 0 ||
    r.forEach((i) => {
      i({
        target: e,
        contentSize: t,
        get size() {
          return RP(e, n);
        },
      });
    });
}
function _P(e) {
  e.forEach(PP);
}
function IP() {
  typeof ResizeObserver > "u" || (yr = new ResizeObserver(_P));
}
function FP(e, t) {
  yr || IP();
  let n = yl(e);
  return (
    n.forEach((r) => {
      let i = Ua.get(r);
      i || ((i = new Set()), Ua.set(r, i)), i.add(t), yr?.observe(r);
    }),
    () => {
      n.forEach((r) => {
        let i = Ua.get(r);
        i?.delete(t), i?.size || yr?.unobserve(r);
      });
    }
  );
}
var Xa = new Set(),
  ss;
function LP() {
  (ss = () => {
    let e = { width: L.innerWidth, height: L.innerHeight },
      t = { target: L, size: e, contentSize: e };
    Xa.forEach((n) => n(t));
  }),
    L.addEventListener("resize", ss);
}
function MP(e) {
  return (
    Xa.add(e),
    ss || LP(),
    () => {
      Xa.delete(e), !Xa.size && ss && (ss = void 0);
    }
  );
}
function OP(e, t) {
  return typeof e == "function" ? MP(e) : FP(e, t);
}
var DP = 50,
  Kv = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  AP = () => ({ time: 0, x: Kv(), y: Kv() }),
  VP = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
function qv(e, t, n, r) {
  let i = n[t],
    { length: o, position: s } = VP[t],
    a = i.current,
    l = n.time;
  (i.current = e[`scroll${s}`]),
    (i.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
    (i.offset.length = 0),
    (i.offset[0] = 0),
    (i.offset[1] = i.scrollLength),
    (i.progress = Sr(0, i.scrollLength, i.current));
  let c = r - l;
  i.velocity = c > DP ? 0 : Rf(i.current - a, c);
}
function BP(e, t, n) {
  qv(e, "x", t, n), qv(e, "y", t, n), (t.time = n);
}
function $P(e, t) {
  let n = { x: 0, y: 0 },
    r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      let i = r.getBoundingClientRect();
      r = r.parentElement;
      let o = r.getBoundingClientRect();
      (n.x += i.left - o.left), (n.y += i.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      let { x: i, y: o } = r.getBBox();
      (n.x += i), (n.y += o);
      let s = null,
        a = r.parentNode;
      for (; !s; ) a.tagName === "svg" && (s = a), (a = r.parentNode);
      r = s;
    } else break;
  return n;
}
var zP = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  df = { start: 0, center: 0.5, end: 1 };
function Qv(e, t, n = 0) {
  let r = 0;
  if ((e in df && (e = df[e]), typeof e == "string")) {
    let i = parseFloat(e);
    e.endsWith("px")
      ? (r = i)
      : e.endsWith("%")
      ? (e = i / 100)
      : e.endsWith("vw")
      ? (r = (i / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (i / 100) * document.documentElement.clientHeight)
      : (e = i);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
var NP = [0, 0];
function HP(e, t, n, r) {
  let i = Array.isArray(e) ? e : NP,
    o = 0,
    s = 0;
  return (
    typeof e == "number"
      ? (i = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (i = e.split(" ")) : (i = [e, df[e] ? e : "0"])),
    (o = Qv(i[0], n, r)),
    (s = Qv(i[1], t)),
    o - s
  );
}
var jP = { x: 0, y: 0 };
function WP(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function UP(e, t, n) {
  let { offset: r = zP.All } = n,
    { target: i = e, axis: o = "y" } = n,
    s = o === "y" ? "height" : "width",
    a = i !== e ? $P(i, e) : jP,
    l = i === e ? { width: e.scrollWidth, height: e.scrollHeight } : WP(i),
    c = { width: e.clientWidth, height: e.clientHeight };
  t[o].offset.length = 0;
  let u = !t[o].interpolate,
    f = r.length;
  for (let d = 0; d < f; d++) {
    let p = HP(r[d], c[s], l[s], a[o]);
    !u && p !== t[o].interpolatorOffsets[d] && (u = !0), (t[o].offset[d] = p);
  }
  u &&
    ((t[o].interpolate = Zi(t[o].offset, Vf(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function XP(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight);
}
function YP(e, t, n, r = {}) {
  return {
    measure: () => XP(e, r.target, n),
    update: (i) => {
      BP(e, n, i), (r.offset || r.target) && UP(e, n, r);
    },
    notify: () => t(n),
  };
}
var Zo = new WeakMap(),
  Zv = new WeakMap(),
  Gu = new WeakMap(),
  Jv = (e) => (e === document.documentElement ? L : e);
function fi(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Gu.get(t);
  r || ((r = new Set()), Gu.set(t, r));
  let i = AP(),
    o = YP(t, e, i, n);
  if ((r.add(o), !Zo.has(t))) {
    let a = () => {
        for (let d of r) d.measure();
      },
      l = () => {
        for (let d of r) d.update(Ae.timestamp);
      },
      c = () => {
        for (let d of r) d.notify();
      },
      u = () => {
        U.read(a, !1, !0), U.read(l, !1, !0), U.update(c, !1, !0);
      };
    Zo.set(t, u);
    let f = Jv(t);
    L.addEventListener("resize", u, { passive: !0 }),
      t !== document.documentElement && Zv.set(t, OP(t, u)),
      f.addEventListener("scroll", u, { passive: !0 });
  }
  let s = Zo.get(t);
  return (
    U.read(s, !1, !0),
    () => {
      var a;
      ht(s);
      let l = Gu.get(t);
      if (!l || (l.delete(o), l.size)) return;
      let c = Zo.get(t);
      Zo.delete(t),
        c &&
          (Jv(t).removeEventListener("scroll", c),
          (a = Zv.get(t)) === null || a === void 0 || a(),
          L.removeEventListener("resize", c));
    }
  );
}
function eg(e, t) {
  Ki(
    !!(!t || t.current),
    `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
  );
}
var GP = () => ({
  scrollX: Ee(0),
  scrollY: Ee(0),
  scrollXProgress: Ee(0),
  scrollYProgress: Ee(0),
});
function Ky({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  let i = rr(GP);
  return (
    (n ? wr : j)(
      () => (
        eg("target", t),
        eg("container", e),
        fi(
          ({ x: s, y: a }) => {
            i.scrollX.set(s.current),
              i.scrollXProgress.set(s.progress),
              i.scrollY.set(a.current),
              i.scrollYProgress.set(a.progress);
          },
          {
            ...r,
            container: e?.current || void 0,
            target: t?.current || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    i
  );
}
function KP(e) {
  let t = A(0),
    { isStatic: n } = D(An);
  j(() => {
    if (n) return;
    let r = ({ timestamp: i, delta: o }) => {
      t.current || (t.current = i), e(i - t.current, o);
    };
    return U.update(r, !0), () => ht(r);
  }, [e]);
}
function qy() {
  !qf.current && ny();
  let [e] = Tt(Ja.current);
  return e;
}
function di() {
  let e = qy(),
    { reducedMotion: t } = D(An);
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function qP(e) {
  e.values.forEach((t) => t.stop());
}
function hf(e, t) {
  [...t].reverse().forEach((r) => {
    let i = e.getVariant(r);
    i && Xf(e, i),
      e.variantChildren &&
        e.variantChildren.forEach((o) => {
          hf(o, t);
        });
  });
}
function QP(e, t) {
  if (Array.isArray(t)) return hf(e, t);
  if (typeof t == "string") return hf(e, [t]);
  Xf(e, t);
}
function Qy() {
  let e = !1,
    t = new Set(),
    n = {
      subscribe(r) {
        return t.add(r), () => void t.delete(r);
      },
      start(r, i) {
        Gt(
          e,
          "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook."
        );
        let o = [];
        return (
          t.forEach((s) => {
            o.push(Gf(s, r, { transitionOverride: i }));
          }),
          Promise.all(o)
        );
      },
      set(r) {
        return (
          Gt(
            e,
            "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."
          ),
          t.forEach((i) => {
            QP(i, r);
          })
        );
      },
      stop() {
        t.forEach((r) => {
          qP(r);
        });
      },
      mount() {
        return (
          (e = !0),
          () => {
            (e = !1), n.stop();
          }
        );
      },
    };
  return n;
}
var Zy = (e, t, n) => {
  let r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function ZP(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function JP(e) {
  let t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = _y(e)
      ? new Vy(t, { enableHardwareAcceleration: !1 })
      : new Ay(t, { enableHardwareAcceleration: !0 });
  n.mount(e), nr.set(e, n);
}
function e_(e, t = 100) {
  let n = ms({ keyframes: [0, t], ...e }),
    r = Math.min(Bg(n), tf);
  return {
    type: "keyframes",
    ease: (i) => n.next(r * i).value / t,
    duration: Dn(r),
  };
}
function tg(e, t, n, r) {
  var i;
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? n
    : (i = r.get(t)) !== null && i !== void 0
    ? i
    : e;
}
function t_(e, t) {
  return Dg(e) ? e[Zy(0, e.length, t)] : e;
}
function n_(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    i.at > t && i.at < n && (hl(e, i), r--);
  }
}
function r_(e, t, n, r, i, o) {
  n_(e, i, o);
  for (let s = 0; s < t.length; s++)
    e.push({ value: t[s], at: we(i, o, r[s]), easing: t_(n, s) });
}
function i_(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
      ? -1
      : 0
    : e.at - t.at;
}
var o_ = "easeInOut";
function s_(e, { defaultTransition: t = {}, ...n } = {}, r) {
  let i = t.duration || 0.3,
    o = new Map(),
    s = new Map(),
    a = {},
    l = new Map(),
    c = 0,
    u = 0,
    f = 0;
  for (let d = 0; d < e.length; d++) {
    let p = e[d];
    if (typeof p == "string") {
      l.set(p, u);
      continue;
    } else if (!Array.isArray(p)) {
      l.set(p.name, tg(u, p.at, c, l));
      continue;
    }
    let [g, v, x = {}] = p;
    x.at !== void 0 && (u = tg(u, x.at, c, l));
    let m = 0,
      h = (y, S, k, w = 0, T = 0) => {
        let E = a_(y),
          { delay: F = 0, times: I = Vf(E), type: $ = "keyframes", ...B } = S,
          { ease: q = t.ease || "easeOut", duration: J } = S,
          W = typeof F == "function" ? F(w, T) : F,
          ne = E.length;
        if (ne <= 2 && $ === "spring") {
          let ee = 100;
          if (ne === 2 && u_(E)) {
            let te = E[1] - E[0];
            ee = Math.abs(te);
          }
          let re = { ...B };
          J !== void 0 && (re.duration = On(J));
          let ae = e_(re, ee);
          (q = ae.ease), (J = ae.duration);
        }
        J ?? (J = i);
        let Y = u + W,
          G = Y + J;
        I.length === 1 && I[0] === 0 && (I[1] = 1);
        let N = I.length - E.length;
        N > 0 && Ag(I, N),
          E.length === 1 && E.unshift(null),
          r_(k, E, q, I, Y, G),
          (m = Math.max(W + J, m)),
          (f = Math.max(G, f));
      };
    if (Te(g)) {
      let y = ng(g, s);
      h(v, x, rg("default", y));
    } else {
      let y = yl(g, r, a),
        S = y.length;
      for (let k = 0; k < S; k++) {
        (v = v), (x = x);
        let w = y[k],
          T = ng(w, s);
        for (let E in v) h(v[E], l_(x, E), rg(E, T), k, S);
      }
    }
    (c = u), (u += m);
  }
  return (
    s.forEach((d, p) => {
      for (let g in d) {
        let v = d[g];
        v.sort(i_);
        let x = [],
          m = [],
          h = [];
        for (let S = 0; S < v.length; S++) {
          let { at: k, value: w, easing: T } = v[S];
          x.push(w), m.push(Sr(0, f, k)), h.push(T || "easeOut");
        }
        m[0] !== 0 && (m.unshift(0), x.unshift(x[0]), h.unshift(o_)),
          m[m.length - 1] !== 1 && (m.push(1), x.push(null)),
          o.has(p) || o.set(p, { keyframes: {}, transition: {} });
        let y = o.get(p);
        (y.keyframes[g] = x),
          (y.transition[g] = { ...t, duration: f, ease: h, times: m, ...n });
      }
    }),
    o
  );
}
function ng(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function rg(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function a_(e) {
  return Array.isArray(e) ? e : [e];
}
function l_(e, t) {
  return e[t] ? { ...e, ...e[t] } : { ...e };
}
var c_ = (e) => typeof e == "number",
  u_ = (e) => e.every(c_);
function Jy(e, t, n, r) {
  let i = yl(e, r),
    o = i.length;
  Gt(!!o, "No valid element provided.");
  let s = [];
  for (let a = 0; a < o; a++) {
    let l = i[a];
    nr.has(l) || JP(l);
    let c = nr.get(l),
      u = { ...n };
    typeof u.delay == "function" && (u.delay = u.delay(a, o)),
      s.push(...Yf(c, { ...t, transition: u }, {}));
  }
  return new Wf(s);
}
var f_ = (e) => Array.isArray(e) && Array.isArray(e[0]);
function d_(e, t, n) {
  let r = [];
  return (
    s_(e, t, n).forEach(({ keyframes: o, transition: s }, a) => {
      let l;
      Te(a) ? (l = rd(a, o.default, s.default)) : (l = Jy(a, o, s)), r.push(l);
    }),
    new Wf(r)
  );
}
var e0 = (e) => {
    function t(n, r, i) {
      let o;
      return (
        f_(n)
          ? (o = d_(n, r, e))
          : ZP(r)
          ? (o = Jy(n, r, i, e))
          : (o = rd(n, r, i)),
        e && e.animations.push(o),
        o
      );
    }
    return t;
  },
  eo = e0();
function t0() {
  let e = rr(Qy);
  return wr(e.mount, []), e;
}
var n0 = t0;
var h_ = { some: 0, all: 1 };
function r0(e, t, { root: n, margin: r, amount: i = "some" } = {}) {
  let o = yl(e),
    s = new WeakMap(),
    a = (c) => {
      c.forEach((u) => {
        let f = s.get(u.target);
        if (u.isIntersecting !== !!f)
          if (u.isIntersecting) {
            let d = t(u);
            typeof d == "function" ? s.set(u.target, d) : l.unobserve(u.target);
          } else f && (f(u), s.delete(u.target));
      });
    },
    l = new IntersectionObserver(a, {
      root: n,
      rootMargin: r,
      threshold: typeof i == "number" ? i : h_[i],
    });
  return o.forEach((c) => l.observe(c)), () => l.disconnect();
}
function p_(e, { root: t, margin: n, amount: r, once: i = !1 } = {}) {
  let [o, s] = Tt(!1);
  return (
    j(() => {
      if (!e.current || (i && o)) return;
      let a = () => (s(!0), i ? void 0 : () => s(!1)),
        l = { root: (t && t.current) || void 0, margin: n, amount: r };
      return r0(e.current, a, l);
    }, [t, e, n, i, r]),
    o
  );
}
function sd(e) {
  return e !== null && typeof e == "object" && Sf in e;
}
function i0(e) {
  if (sd(e)) return e[Sf];
}
function ad() {
  return m_;
}
function m_(e) {
  li.current &&
    ((li.current.isUpdating = !1), li.current.blockUpdate(), e && e());
}
function o0() {
  let [e, t] = gl(),
    n = ad(),
    r = A();
  return (
    j(() => {
      U.postRender(() =>
        U.postRender(() => {
          t === r.current && (qa.current = !1);
        })
      );
    }, [t]),
    (i) => {
      n(() => {
        (qa.current = !0), e(), i(), (r.current = t + 1);
      });
    }
  );
}
function s0() {
  return ve(() => {
    let t = li.current;
    t && t.resetTree();
  }, []);
}
var ig = () => ({});
var VB = al({ scrapeMotionValuesFromProps: ig, createRenderState: ig });
var v_ = U,
  g_ = Jo.reduce((e, t) => ((e[t] = (n) => ht(n)), e), {});
var ZI = {};
Iu(ZI, {
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => zI,
  createPortal: () => NI,
  createRoot: () => HI,
  default: () => xp,
  findDOMNode: () => jI,
  flushSync: () => WI,
  hydrate: () => UI,
  hydrateRoot: () => XI,
  render: () => YI,
  unmountComponentAtNode: () => GI,
  unstable_batchedUpdates: () => KI,
  unstable_renderSubtreeIntoContainer: () => qI,
  version: () => QI,
});
var Cl = {};
Iu(Cl, {
  default: () => Q,
  unstable_IdlePriority: () => x_,
  unstable_ImmediatePriority: () => S_,
  unstable_LowPriority: () => w_,
  unstable_NormalPriority: () => k_,
  unstable_Profiling: () => C_,
  unstable_UserBlockingPriority: () => T_,
  unstable_cancelCallback: () => E_,
  unstable_continueExecution: () => R_,
  unstable_forceFrameRate: () => P_,
  unstable_getCurrentPriorityLevel: () => __,
  unstable_getFirstCallbackNode: () => I_,
  unstable_next: () => F_,
  unstable_now: () => b_,
  unstable_pauseExecution: () => L_,
  unstable_requestPaint: () => M_,
  unstable_runWithPriority: () => O_,
  unstable_scheduleCallback: () => D_,
  unstable_shouldYield: () => A_,
  unstable_wrapCallback: () => V_,
});
var Q = {};
function fd(e, t) {
  var n = e.length;
  e.push(t);
  e: for (; 0 < n; ) {
    var r = (n - 1) >>> 1,
      i = e[r];
    if (!(0 < bl(i, t))) break e;
    (e[r] = t), (e[n] = i), (n = r);
  }
}
function bn(e) {
  return e.length === 0 ? null : e[0];
}
function Sl(e) {
  if (e.length === 0) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    e: for (var r = 0, i = e.length, o = i >>> 1; r < o; ) {
      var s = 2 * (r + 1) - 1,
        a = e[s],
        l = s + 1,
        c = e[l];
      if (0 > bl(a, n))
        l < i && 0 > bl(c, a)
          ? ((e[r] = c), (e[l] = n), (r = l))
          : ((e[r] = a), (e[s] = n), (r = s));
      else {
        if (!(l < i && 0 > bl(c, n))) break e;
        (e[r] = c), (e[l] = n), (r = l);
      }
    }
  }
  return t;
}
function bl(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return n !== 0 ? n : e.id - t.id;
}
typeof performance == "object" && typeof performance.now == "function"
  ? ((a0 = performance),
    (Q.unstable_now = function () {
      return a0.now();
    }))
  : ((ld = Date),
    (l0 = ld.now()),
    (Q.unstable_now = function () {
      return ld.now() - l0;
    }));
var a0,
  ld,
  l0,
  $n = [],
  Cr = [],
  y_ = 1,
  ln = null,
  pt = 3,
  wl = !1,
  hi = !1,
  gs = !1,
  f0 = typeof setTimeout == "function" ? setTimeout : null,
  d0 = typeof clearTimeout == "function" ? clearTimeout : null,
  c0 = typeof setImmediate < "u" ? setImmediate : null;
typeof Me < "u" &&
  Me.scheduling !== void 0 &&
  Me.scheduling.isInputPending !== void 0 &&
  Me.scheduling.isInputPending.bind(Me.scheduling);
function dd(e) {
  for (var t = bn(Cr); t !== null; ) {
    if (t.callback === null) Sl(Cr);
    else {
      if (!(t.startTime <= e)) break;
      Sl(Cr), (t.sortIndex = t.expirationTime), fd($n, t);
    }
    t = bn(Cr);
  }
}
function hd(e) {
  if (((gs = !1), dd(e), !hi))
    if (bn($n) !== null) (hi = !0), md(pd);
    else {
      var t = bn(Cr);
      t !== null && vd(hd, t.startTime - e);
    }
}
function pd(e, t) {
  (hi = !1), gs && ((gs = !1), d0(ys), (ys = -1)), (wl = !0);
  var n = pt;
  try {
    for (
      dd(t), ln = bn($n);
      ln !== null && (!(ln.expirationTime > t) || (e && !m0()));

    ) {
      var r = ln.callback;
      if (typeof r == "function") {
        (ln.callback = null), (pt = ln.priorityLevel);
        var i = r(ln.expirationTime <= t);
        (t = Q.unstable_now()),
          typeof i == "function" ? (ln.callback = i) : ln === bn($n) && Sl($n),
          dd(t);
      } else Sl($n);
      ln = bn($n);
    }
    if (ln !== null) var o = !0;
    else {
      var s = bn(Cr);
      s !== null && vd(hd, s.startTime - t), (o = !1);
    }
    return o;
  } finally {
    (ln = null), (pt = n), (wl = !1);
  }
}
var kl = !1,
  xl = null,
  ys = -1,
  h0 = 5,
  p0 = -1;
function m0() {
  return !(Q.unstable_now() - p0 < h0);
}
function cd() {
  if (xl !== null) {
    var e = Q.unstable_now();
    p0 = e;
    var t = !0;
    try {
      t = xl(!0, e);
    } finally {
      t ? vs() : ((kl = !1), (xl = null));
    }
  } else kl = !1;
}
var vs;
typeof c0 == "function"
  ? (vs = function () {
      c0(cd);
    })
  : typeof MessageChannel < "u"
  ? ((ud = new MessageChannel()),
    (u0 = ud.port2),
    (ud.port1.onmessage = cd),
    (vs = function () {
      u0.postMessage(null);
    }))
  : (vs = function () {
      f0(cd, 0);
    });
var ud, u0;
function md(e) {
  (xl = e), kl || ((kl = !0), vs());
}
function vd(e, t) {
  ys = f0(function () {
    e(Q.unstable_now());
  }, t);
}
Q.unstable_IdlePriority = 5;
Q.unstable_ImmediatePriority = 1;
Q.unstable_LowPriority = 4;
Q.unstable_NormalPriority = 3;
Q.unstable_Profiling = null;
Q.unstable_UserBlockingPriority = 2;
Q.unstable_cancelCallback = function (e) {
  e.callback = null;
};
Q.unstable_continueExecution = function () {
  hi || wl || ((hi = !0), md(pd));
};
Q.unstable_forceFrameRate = function (e) {
  0 > e || 125 < e
    ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      )
    : (h0 = 0 < e ? Math.floor(1e3 / e) : 5);
};
Q.unstable_getCurrentPriorityLevel = function () {
  return pt;
};
Q.unstable_getFirstCallbackNode = function () {
  return bn($n);
};
Q.unstable_next = function (e) {
  switch (pt) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = pt;
  }
  var n = pt;
  pt = t;
  try {
    return e();
  } finally {
    pt = n;
  }
};
Q.unstable_pauseExecution = function () {};
Q.unstable_requestPaint = function () {};
Q.unstable_runWithPriority = function (e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3;
  }
  var n = pt;
  pt = e;
  try {
    return t();
  } finally {
    pt = n;
  }
};
Q.unstable_scheduleCallback = function (e, t, n) {
  var r = Q.unstable_now();
  switch (
    (typeof n == "object" && n !== null
      ? ((n = n.delay), (n = typeof n == "number" && 0 < n ? r + n : r))
      : (n = r),
    e)
  ) {
    case 1:
      var i = -1;
      break;
    case 2:
      i = 250;
      break;
    case 5:
      i = 1073741823;
      break;
    case 4:
      i = 1e4;
      break;
    default:
      i = 5e3;
  }
  return (
    (i = n + i),
    (e = {
      id: y_++,
      callback: t,
      priorityLevel: e,
      startTime: n,
      expirationTime: i,
      sortIndex: -1,
    }),
    n > r
      ? ((e.sortIndex = n),
        fd(Cr, e),
        bn($n) === null &&
          e === bn(Cr) &&
          (gs ? (d0(ys), (ys = -1)) : (gs = !0), vd(hd, n - r)))
      : ((e.sortIndex = i), fd($n, e), hi || wl || ((hi = !0), md(pd))),
    e
  );
};
Q.unstable_shouldYield = m0;
Q.unstable_wrapCallback = function (e) {
  var t = pt;
  return function () {
    var n = pt;
    pt = t;
    try {
      return e.apply(this, arguments);
    } finally {
      pt = n;
    }
  };
};
var b_ = Q.unstable_now,
  x_ = Q.unstable_IdlePriority,
  S_ = Q.unstable_ImmediatePriority,
  w_ = Q.unstable_LowPriority,
  k_ = Q.unstable_NormalPriority,
  C_ = Q.unstable_Profiling,
  T_ = Q.unstable_UserBlockingPriority,
  E_ = Q.unstable_cancelCallback,
  R_ = Q.unstable_continueExecution,
  P_ = Q.unstable_forceFrameRate,
  __ = Q.unstable_getCurrentPriorityLevel,
  I_ = Q.unstable_getFirstCallbackNode,
  F_ = Q.unstable_next,
  L_ = Q.unstable_pauseExecution,
  M_ = Q.unstable_requestPaint,
  O_ = Q.unstable_runWithPriority,
  D_ = Q.unstable_scheduleCallback,
  A_ = Q.unstable_shouldYield,
  V_ = Q.unstable_wrapCallback;
var B_ = "default" in Ot ? b : Ot,
  $_ = "default" in Cl ? Q : Cl,
  Jt = {},
  wb = B_,
  Zt = $_;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var kb = new Set(),
  zs = {};
function Ei(e, t) {
  wo(e, t), wo(e + "Capture", t);
}
function wo(e, t) {
  for (zs[e] = t, e = 0; e < t.length; e++) kb.add(t[e]);
}
var cr = !(
    typeof L > "u" ||
    typeof L.document > "u" ||
    typeof L.document.createElement > "u"
  ),
  $d = Object.prototype.hasOwnProperty,
  z_ =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  v0 = {},
  g0 = {};
function N_(e) {
  return $d.call(g0, e)
    ? !0
    : $d.call(v0, e)
    ? !1
    : z_.test(e)
    ? (g0[e] = !0)
    : ((v0[e] = !0), !1);
}
function H_(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function j_(e, t, n, r) {
  if (t === null || typeof t > "u" || H_(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function _t(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var lt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    lt[e] = new _t(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  lt[t] = new _t(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  lt[e] = new _t(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  lt[e] = new _t(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    lt[e] = new _t(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  lt[e] = new _t(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  lt[e] = new _t(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  lt[e] = new _t(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  lt[e] = new _t(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ih = /[\-:]([a-z])/g;
function Fh(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ih, Fh);
    lt[t] = new _t(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ih, Fh);
    lt[t] = new _t(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ih, Fh);
  lt[t] = new _t(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  lt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
lt.xlinkHref = new _t(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  lt[e] = new _t(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Lh(e, t, n, r) {
  var i = lt.hasOwnProperty(t) ? lt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (j_(t, n, i, r) && (n = null),
    r || i === null
      ? N_(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? i.type !== 3 && "" : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var hr = wb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Tl = Symbol.for("react.element"),
  ro = Symbol.for("react.portal"),
  io = Symbol.for("react.fragment"),
  Mh = Symbol.for("react.strict_mode"),
  zd = Symbol.for("react.profiler"),
  Cb = Symbol.for("react.provider"),
  Tb = Symbol.for("react.context"),
  Oh = Symbol.for("react.forward_ref"),
  Nd = Symbol.for("react.suspense"),
  Hd = Symbol.for("react.suspense_list"),
  Dh = Symbol.for("react.memo"),
  Er = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var Eb = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var y0 = Symbol.iterator;
function bs(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (y0 && e[y0]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var gd,
  Fe = Object.assign;
function Rs(e) {
  if (gd === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gd = (t && t[1]) || "";
    }
  return (
    `
` +
    gd +
    e
  );
}
var yd = !1;
function bd(e, t) {
  if (!e || yd) return "";
  yd = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (yd = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Rs(e) : "";
}
function W_(e) {
  switch (e.tag) {
    case 5:
      return Rs(e.type);
    case 16:
      return Rs("Lazy");
    case 13:
      return Rs("Suspense");
    case 19:
      return Rs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = bd(e.type, !1)), e;
    case 11:
      return (e = bd(e.type.render, !1)), e;
    case 1:
      return (e = bd(e.type, !0)), e;
    default:
      return "";
  }
}
function jd(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case io:
      return "Fragment";
    case ro:
      return "Portal";
    case zd:
      return "Profiler";
    case Mh:
      return "StrictMode";
    case Nd:
      return "Suspense";
    case Hd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Tb:
        return (e.displayName || "Context") + ".Consumer";
      case Cb:
        return (e._context.displayName || "Context") + ".Provider";
      case Oh:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Dh:
        return (
          (t = e.displayName || null), t !== null ? t : jd(e.type) || "Memo"
        );
      case Er:
        (t = e._payload), (e = e._init);
        try {
          return jd(e(t));
        } catch {}
    }
  return null;
}
function U_(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return jd(t);
    case 8:
      return t === Mh ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function zr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Rb(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function X_(e) {
  var t = Rb(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function El(e) {
  e._valueTracker || (e._valueTracker = X_(e));
}
function Pb(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Rb(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n && (t.setValue(e), !0)
  );
}
function ec(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Wd(e, t) {
  var n = t.checked;
  return Fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function b0(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = zr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function _b(e, t) {
  (t = t.checked), t != null && Lh(e, "checked", t, !1);
}
function Ud(e, t) {
  _b(e, t);
  var n = zr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Xd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Xd(e, t.type, zr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function x0(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Xd(e, t, n) {
  (t === "number" && ec(e.ownerDocument) === e) ||
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ps = Array.isArray;
function vo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + zr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Yd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return Fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function S0(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (Ps(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: zr(n) };
}
function Ib(e, t) {
  var n = zr(t.value),
    r = zr(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function w0(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fb(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Gd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Fb(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Rl,
  Lb = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Rl = Rl || document.createElement("div"),
          Rl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Rl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ns(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Y_ = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fs).forEach(function (e) {
  Y_.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fs[t] = Fs[e]);
  });
});
function Mb(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Fs.hasOwnProperty(e) && Fs[e])
    ? ("" + t).trim()
    : t + "px";
}
function Ob(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Mb(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var G_ = Fe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Kd(e, t) {
  if (t) {
    if (G_[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function qd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Qd = null;
function Ah(e) {
  return (
    (e = e.target || e.srcElement || L),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Zd = null,
  go = null,
  yo = null;
function k0(e) {
  if ((e = oa(e))) {
    if (typeof Zd != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = Pc(t)), Zd(e.stateNode, e.type, t));
  }
}
function Db(e) {
  go ? (yo ? yo.push(e) : (yo = [e])) : (go = e);
}
function Ab() {
  if (go) {
    var e = go,
      t = yo;
    if (((yo = go = null), k0(e), t)) for (e = 0; e < t.length; e++) k0(t[e]);
  }
}
function Vb(e, t) {
  return e(t);
}
function Bb() {}
var xd = !1;
function $b(e, t, n) {
  if (xd) return e(t, n);
  xd = !0;
  try {
    return Vb(e, t, n);
  } finally {
    (xd = !1), (go !== null || yo !== null) && (Bb(), Ab());
  }
}
function Hs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Pc(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Jd = !1;
if (cr)
  try {
    (to = {}),
      Object.defineProperty(to, "passive", {
        get: function () {
          Jd = !0;
        },
      }),
      L.addEventListener("test", to, to),
      L.removeEventListener("test", to, to);
  } catch {
    Jd = !1;
  }
var to;
function K_(e, t, n, r, i, o, s, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Ls = !1,
  tc = null,
  nc = !1,
  eh = null,
  q_ = {
    onError: function (e) {
      (Ls = !0), (tc = e);
    },
  };
function Q_(e, t, n, r, i, o, s, a, l) {
  (Ls = !1), (tc = null), K_.apply(q_, arguments);
}
function Z_(e, t, n, r, i, o, s, a, l) {
  if ((Q_.apply(this, arguments), Ls)) {
    if (!Ls) throw Error(M(198));
    var c = tc;
    (Ls = !1), (tc = null), nc || ((nc = !0), (eh = c));
  }
}
function Ri(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), 4098 & t.flags && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function zb(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function C0(e) {
  if (Ri(e) !== e) throw Error(M(188));
}
function J_(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Ri(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return C0(i), e;
        if (o === r) return C0(i), t;
        o = o.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Nb(e) {
  return (e = J_(e)), e !== null ? Hb(e) : null;
}
function Hb(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hb(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var jb = Zt.unstable_scheduleCallback,
  T0 = Zt.unstable_cancelCallback,
  e2 = Zt.unstable_shouldYield,
  t2 = Zt.unstable_requestPaint,
  He = Zt.unstable_now,
  n2 = Zt.unstable_getCurrentPriorityLevel,
  Vh = Zt.unstable_ImmediatePriority,
  Wb = Zt.unstable_UserBlockingPriority,
  rc = Zt.unstable_NormalPriority,
  r2 = Zt.unstable_LowPriority,
  Ub = Zt.unstable_IdlePriority,
  Cc = null,
  jn = null;
function i2(e) {
  if (jn && typeof jn.onCommitFiberRoot == "function")
    try {
      jn.onCommitFiberRoot(Cc, e, void 0, (128 & e.current.flags) === 128);
    } catch {}
}
var Cn = Math.clz32 ? Math.clz32 : a2,
  o2 = Math.log,
  s2 = Math.LN2;
function a2(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((o2(e) / s2) | 0)) | 0;
}
var Pl = 64,
  _l = 4194304;
function _s(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return 130023424 & e;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ic(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = 268435455 & n;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = _s(a)) : ((o &= s), o !== 0 && (r = _s(o)));
  } else (s = n & ~i), s !== 0 ? (r = _s(s)) : o !== 0 && (r = _s(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (4194240 & o) !== 0))
  )
    return t;
  if ((4 & r && (r |= 16 & n), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Cn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function l2(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function c2(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Cn(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (a & n && !(a & r)) || (i[s] = l2(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function th(e) {
  return (
    (e = -1073741825 & e.pendingLanes),
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
  );
}
function Xb() {
  var e = Pl;
  return (Pl <<= 1), !(4194240 & Pl) && (Pl = 64), e;
}
function Sd(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ra(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Cn(t)),
    (e[t] = n);
}
function u2(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Cn(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Bh(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Cn(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var pe = 0;
function Yb(e) {
  return (e &= -e), 1 < e ? (4 < e ? (268435455 & e ? 16 : 536870912) : 4) : 1;
}
var Gb,
  $h,
  Kb,
  qb,
  Qb,
  nh = !1,
  Il = [],
  Lr = null,
  Mr = null,
  Or = null,
  js = new Map(),
  Ws = new Map(),
  Pr = [],
  f2 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function E0(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Lr = null;
      break;
    case "dragenter":
    case "dragleave":
      Mr = null;
      break;
    case "mouseover":
    case "mouseout":
      Or = null;
      break;
    case "pointerover":
    case "pointerout":
      js.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Ws.delete(t.pointerId);
  }
}
function xs(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = oa(t)), t !== null && $h(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function d2(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Lr = xs(Lr, e, t, n, r, i)), !0;
    case "dragenter":
      return (Mr = xs(Mr, e, t, n, r, i)), !0;
    case "mouseover":
      return (Or = xs(Or, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return js.set(o, xs(js.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Ws.set(o, xs(Ws.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Zb(e) {
  var t = vi(e.target);
  if (t !== null) {
    var n = Ri(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = zb(n)), t !== null)) {
          (e.blockedOn = t),
            Qb(e.priority, function () {
              Kb(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Wl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = rh(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null)
      return (t = oa(n)), t !== null && $h(t), (e.blockedOn = n), !1;
    n = e.nativeEvent;
    var r = new n.constructor(n.type, n);
    (Qd = r), n.target.dispatchEvent(r), (Qd = null), t.shift();
  }
  return !0;
}
function R0(e, t, n) {
  Wl(e) && n.delete(t);
}
function h2() {
  (nh = !1),
    Lr !== null && Wl(Lr) && (Lr = null),
    Mr !== null && Wl(Mr) && (Mr = null),
    Or !== null && Wl(Or) && (Or = null),
    js.forEach(R0),
    Ws.forEach(R0);
}
function Ss(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    nh ||
      ((nh = !0),
      Zt.unstable_scheduleCallback(Zt.unstable_NormalPriority, h2)));
}
function Us(e) {
  function t(i) {
    return Ss(i, e);
  }
  if (0 < Il.length) {
    Ss(Il[0], e);
    for (var n = 1; n < Il.length; n++) {
      var r = Il[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Lr !== null && Ss(Lr, e),
      Mr !== null && Ss(Mr, e),
      Or !== null && Ss(Or, e),
      js.forEach(t),
      Ws.forEach(t),
      n = 0;
    n < Pr.length;
    n++
  )
    (r = Pr[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Pr.length && ((n = Pr[0]), n.blockedOn === null); )
    Zb(n), n.blockedOn === null && Pr.shift();
}
var bo = hr.ReactCurrentBatchConfig,
  oc = !0;
function p2(e, t, n, r) {
  var i = pe,
    o = bo.transition;
  bo.transition = null;
  try {
    (pe = 1), zh(e, t, n, r);
  } finally {
    (pe = i), (bo.transition = o);
  }
}
function m2(e, t, n, r) {
  var i = pe,
    o = bo.transition;
  bo.transition = null;
  try {
    (pe = 4), zh(e, t, n, r);
  } finally {
    (pe = i), (bo.transition = o);
  }
}
function zh(e, t, n, r) {
  if (oc) {
    var i = rh(e, t, n, r);
    if (i === null) Pd(e, t, r, sc, n), E0(e, r);
    else if (d2(i, e, t, n, r)) r.stopPropagation();
    else if ((E0(e, r), 4 & t && -1 < f2.indexOf(e))) {
      for (; i !== null; ) {
        var o = oa(i);
        if (
          (o !== null && Gb(o),
          (o = rh(e, t, n, r)),
          o === null && Pd(e, t, r, sc, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Pd(e, t, r, null, n);
  }
}
var sc = null;
function rh(e, t, n, r) {
  if (((sc = null), (e = Ah(r)), (e = vi(e)), e !== null))
    if (((t = Ri(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = zb(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (sc = e), null;
}
function Jb(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (n2()) {
        case Vh:
          return 1;
        case Wb:
          return 4;
        case rc:
        case r2:
          return 16;
        case Ub:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ir = null,
  Nh = null,
  Ul = null;
function ex() {
  if (Ul) return Ul;
  var e,
    t,
    n = Nh,
    r = n.length,
    i = "value" in Ir ? Ir.value : Ir.textContent,
    o = i.length;
  for (e = 0; e < r && n[e] === i[e]; e++);
  var s = r - e;
  for (t = 1; t <= s && n[r - t] === i[o - t]; t++);
  return (Ul = i.slice(e, 1 < t ? 1 - t : void 0));
}
function Xl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Fl() {
  return !0;
}
function P0() {
  return !1;
}
function en(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Fl
        : P0),
      (this.isPropagationStopped = P0),
      this
    );
  }
  return (
    Fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Fl));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Fl));
      },
      persist: function () {},
      isPersistent: Fl,
    }),
    t
  );
}
var wd,
  kd,
  ws,
  _o = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Hh = en(_o),
  ia = Fe({}, _o, { view: 0, detail: 0 }),
  v2 = en(ia),
  Tc = Fe({}, ia, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: jh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ws &&
            (ws && e.type === "mousemove"
              ? ((wd = e.screenX - ws.screenX), (kd = e.screenY - ws.screenY))
              : (kd = wd = 0),
            (ws = e)),
          wd);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : kd;
    },
  }),
  _0 = en(Tc),
  g2 = Fe({}, Tc, { dataTransfer: 0 }),
  y2 = en(g2),
  b2 = Fe({}, ia, { relatedTarget: 0 }),
  Cd = en(b2),
  x2 = Fe({}, _o, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  S2 = en(x2),
  w2 = Fe({}, _o, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : L.clipboardData;
    },
  }),
  k2 = en(w2),
  C2 = Fe({}, _o, { data: 0 }),
  I0 = en(C2),
  T2 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  E2 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  R2 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function P2(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : !!(e = R2[e]) && !!t[e];
}
function jh() {
  return P2;
}
var _2 = Fe({}, ia, {
    key: function (e) {
      if (e.key) {
        var t = T2[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Xl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? E2[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jh,
    charCode: function (e) {
      return e.type === "keypress" ? Xl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Xl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  I2 = en(_2),
  F2 = Fe({}, Tc, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  F0 = en(F2),
  L2 = Fe({}, ia, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jh,
  }),
  M2 = en(L2),
  O2 = Fe({}, _o, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  D2 = en(O2),
  A2 = Fe({}, Tc, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  V2 = en(A2),
  B2 = [9, 13, 27, 32],
  Wh = cr && "CompositionEvent" in L,
  Ms = null;
cr && "documentMode" in document && (Ms = document.documentMode);
var $2 = cr && "TextEvent" in L && !Ms,
  tx = cr && (!Wh || (Ms && 8 < Ms && 11 >= Ms)),
  L0 = String.fromCharCode(32),
  M0 = !1;
function nx(e, t) {
  switch (e) {
    case "keyup":
      return B2.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function rx(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var oo = !1;
function z2(e, t) {
  switch (e) {
    case "compositionend":
      return rx(t);
    case "keypress":
      return t.which !== 32 ? null : ((M0 = !0), L0);
    case "textInput":
      return (e = t.data), e === L0 && M0 ? null : e;
    default:
      return null;
  }
}
function N2(e, t) {
  if (oo)
    return e === "compositionend" || (!Wh && nx(e, t))
      ? ((e = ex()), (Ul = Nh = Ir = null), (oo = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return tx && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var H2 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function O0(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!H2[e.type] : t === "textarea";
}
function ix(e, t, n, r) {
  Db(r),
    (t = ac(t, "onChange")),
    0 < t.length &&
      ((n = new Hh("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Os = null,
  Xs = null;
function j2(e) {
  mx(e, 0);
}
function Ec(e) {
  var t = lo(e);
  if (Pb(t)) return e;
}
function W2(e, t) {
  if (e === "change") return t;
}
var ox = !1;
cr &&
  (cr
    ? ((Ml = "oninput" in document),
      Ml ||
        ((Td = document.createElement("div")),
        Td.setAttribute("oninput", "return;"),
        (Ml = typeof Td.oninput == "function")),
      (Ll = Ml))
    : (Ll = !1),
  (ox = Ll && (!document.documentMode || 9 < document.documentMode)));
var Ll, Ml, Td;
function D0() {
  Os && (Os.detachEvent("onpropertychange", sx), (Xs = Os = null));
}
function sx(e) {
  if (e.propertyName === "value" && Ec(Xs)) {
    var t = [];
    ix(t, Xs, e, Ah(e)), $b(j2, t);
  }
}
function U2(e, t, n) {
  e === "focusin"
    ? (D0(), (Os = t), (Xs = n), Os.attachEvent("onpropertychange", sx))
    : e === "focusout" && D0();
}
function X2(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ec(Xs);
}
function Y2(e, t) {
  if (e === "click") return Ec(t);
}
function G2(e, t) {
  if (e === "input" || e === "change") return Ec(t);
}
function K2(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var En = typeof Object.is == "function" ? Object.is : K2;
function Ys(e, t) {
  if (En(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!$d.call(t, i) || !En(e[i], t[i])) return !1;
  }
  return !0;
}
function A0(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function V0(e, t) {
  var n = A0(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = A0(n);
  }
}
function ax(e, t) {
  return (
    !(!e || !t) &&
    (e === t ||
      ((!e || e.nodeType !== 3) &&
        (t && t.nodeType === 3
          ? ax(e, t.parentNode)
          : "contains" in e
          ? e.contains(t)
          : !!e.compareDocumentPosition &&
            !!(16 & e.compareDocumentPosition(t)))))
  );
}
function lx() {
  for (var e = L, t = ec(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (!n) break;
    (e = t.contentWindow), (t = ec(e.document));
  }
  return t;
}
function Uh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function q2(e) {
  var t = lx(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    ax(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Uh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || L),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = V0(n, o));
        var s = V0(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Q2 = cr && "documentMode" in document && 11 >= document.documentMode,
  so = null,
  ih = null,
  Ds = null,
  oh = !1;
function B0(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  oh ||
    so == null ||
    so !== ec(r) ||
    ((r = so),
    "selectionStart" in r && Uh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          L
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ds && Ys(Ds, r)) ||
      ((Ds = r),
      (r = ac(ih, "onSelect")),
      0 < r.length &&
        ((t = new Hh("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = so))));
}
function Ol(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var ao = {
    animationend: Ol("Animation", "AnimationEnd"),
    animationiteration: Ol("Animation", "AnimationIteration"),
    animationstart: Ol("Animation", "AnimationStart"),
    transitionend: Ol("Transition", "TransitionEnd"),
  },
  Ed = {},
  cx = {};
cr &&
  ((cx = document.createElement("div").style),
  "AnimationEvent" in L ||
    (delete ao.animationend.animation,
    delete ao.animationiteration.animation,
    delete ao.animationstart.animation),
  "TransitionEvent" in L || delete ao.transitionend.transition);
function Rc(e) {
  if (Ed[e]) return Ed[e];
  if (!ao[e]) return e;
  var t,
    n = ao[e];
  for (t in n) if (n.hasOwnProperty(t) && t in cx) return (Ed[e] = n[t]);
  return e;
}
var ux = Rc("animationend"),
  fx = Rc("animationiteration"),
  dx = Rc("animationstart"),
  hx = Rc("transitionend"),
  px = new Map(),
  $0 =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Hr(e, t) {
  px.set(e, t), Ei(t, [e]);
}
for (Dl = 0; Dl < $0.length; Dl++)
  (Al = $0[Dl]),
    (z0 = Al.toLowerCase()),
    (N0 = Al[0].toUpperCase() + Al.slice(1)),
    Hr(z0, "on" + N0);
var Al, z0, N0, Dl;
Hr(ux, "onAnimationEnd");
Hr(fx, "onAnimationIteration");
Hr(dx, "onAnimationStart");
Hr("dblclick", "onDoubleClick");
Hr("focusin", "onFocus");
Hr("focusout", "onBlur");
Hr(hx, "onTransitionEnd");
wo("onMouseEnter", ["mouseout", "mouseover"]);
wo("onMouseLeave", ["mouseout", "mouseover"]);
wo("onPointerEnter", ["pointerout", "pointerover"]);
wo("onPointerLeave", ["pointerout", "pointerover"]);
Ei(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ei(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ei("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ei(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ei(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ei(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Is =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Z2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Is));
function H0(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Z_(r, t, void 0, e), (e.currentTarget = null);
}
function mx(e, t) {
  t = (4 & t) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          H0(i, a, c), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          H0(i, a, c), (o = l);
        }
    }
  }
  if (nc) throw ((e = eh), (nc = !1), (eh = null), e);
}
function ke(e, t) {
  var n = t[uh];
  n === void 0 && (n = t[uh] = new Set());
  var r = e + "__bubble";
  n.has(r) || (vx(t, e, 2, !1), n.add(r));
}
function Rd(e, t, n) {
  var r = 0;
  t && (r |= 4), vx(n, e, r, t);
}
var Vl = "_reactListening" + Math.random().toString(36).slice(2);
function Gs(e) {
  if (!e[Vl]) {
    (e[Vl] = !0),
      kb.forEach(function (n) {
        n !== "selectionchange" && (Z2.has(n) || Rd(n, !1, e), Rd(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Vl] || ((t[Vl] = !0), Rd("selectionchange", !1, t));
  }
}
function vx(e, t, n, r) {
  switch (Jb(t)) {
    case 1:
      var i = p2;
      break;
    case 4:
      i = m2;
      break;
    default:
      i = zh;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Jd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Pd(e, t, n, r, i) {
  var o = r;
  if (!(1 & t) && !(2 & t) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = vi(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  $b(function () {
    var c = o,
      u = Ah(n),
      f = [];
    e: {
      var d = px.get(e);
      if (d !== void 0) {
        var p = Hh,
          g = e;
        switch (e) {
          case "keypress":
            if (Xl(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = I2;
            break;
          case "focusin":
            (g = "focus"), (p = Cd);
            break;
          case "focusout":
            (g = "blur"), (p = Cd);
            break;
          case "beforeblur":
          case "afterblur":
            p = Cd;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = _0;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = y2;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = M2;
            break;
          case ux:
          case fx:
          case dx:
            p = S2;
            break;
          case hx:
            p = D2;
            break;
          case "scroll":
            p = v2;
            break;
          case "wheel":
            p = V2;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = k2;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = F0;
        }
        var v = (4 & t) !== 0,
          x = !v && e === "scroll",
          m = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h, y = c; y !== null; ) {
          h = y;
          var S = h.stateNode;
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S),
              m !== null && ((S = Hs(y, m)), S != null && v.push(Ks(y, S, h)))),
            x)
          )
            break;
          y = y.return;
        }
        0 < v.length &&
          ((d = new p(d, g, null, n, u)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(7 & t)) {
      if (
        ((d = e === "mouseover" || e === "pointerover"),
        (p = e === "mouseout" || e === "pointerout"),
        (!d ||
          n === Qd ||
          !(g = n.relatedTarget || n.fromElement) ||
          (!vi(g) && !g[ur])) &&
          (p || d) &&
          ((d =
            u.window === u
              ? u
              : (d = u.ownerDocument)
              ? d.defaultView || d.parentWindow
              : L),
          p
            ? ((g = n.relatedTarget || n.toElement),
              (p = c),
              (g = g ? vi(g) : null),
              g !== null &&
                ((x = Ri(g)), g !== x || (g.tag !== 5 && g.tag !== 6)) &&
                (g = null))
            : ((p = null), (g = c)),
          p !== g))
      ) {
        if (
          ((v = _0),
          (S = "onMouseLeave"),
          (m = "onMouseEnter"),
          (y = "mouse"),
          (e !== "pointerout" && e !== "pointerover") ||
            ((v = F0),
            (S = "onPointerLeave"),
            (m = "onPointerEnter"),
            (y = "pointer")),
          (x = p == null ? d : lo(p)),
          (h = g == null ? d : lo(g)),
          (d = new v(S, y + "leave", p, n, u)),
          (d.target = x),
          (d.relatedTarget = h),
          (S = null),
          vi(u) === c &&
            ((v = new v(m, y + "enter", g, n, u)),
            (v.target = h),
            (v.relatedTarget = x),
            (S = v)),
          (x = S),
          p && g)
        )
          e: {
            for (v = p, m = g, y = 0, h = v; h; h = no(h)) y++;
            for (h = 0, S = m; S; S = no(S)) h++;
            for (; 0 < y - h; ) (v = no(v)), y--;
            for (; 0 < h - y; ) (m = no(m)), h--;
            for (; y--; ) {
              if (v === m || (m !== null && v === m.alternate)) break e;
              (v = no(v)), (m = no(m));
            }
            v = null;
          }
        else v = null;
        p !== null && j0(f, d, p, v, !1),
          g !== null && x !== null && j0(f, x, g, v, !0);
      }
      if (
        ((d = c ? lo(c) : L),
        (p = d.nodeName && d.nodeName.toLowerCase()),
        p === "select" || (p === "input" && d.type === "file"))
      )
        var k = W2;
      else if (O0(d))
        if (ox) k = G2;
        else {
          k = X2;
          var w = U2;
        }
      else
        (p = d.nodeName) &&
          p.toLowerCase() === "input" &&
          (d.type === "checkbox" || d.type === "radio") &&
          (k = Y2);
      switch (
        (k && (k = k(e, c))
          ? ix(f, k, n, u)
          : (w && w(e, d, c),
            e === "focusout" &&
              (w = d._wrapperState) &&
              w.controlled &&
              d.type === "number" &&
              Xd(d, "number", d.value)),
        (w = c ? lo(c) : L),
        e)
      ) {
        case "focusin":
          (O0(w) || w.contentEditable === "true") &&
            ((so = w), (ih = c), (Ds = null));
          break;
        case "focusout":
          Ds = ih = so = null;
          break;
        case "mousedown":
          oh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (oh = !1), B0(f, n, u);
          break;
        case "selectionchange":
          if (Q2) break;
        case "keydown":
        case "keyup":
          B0(f, n, u);
      }
      var T;
      if (Wh)
        e: {
          switch (e) {
            case "compositionstart":
              var E = "onCompositionStart";
              break e;
            case "compositionend":
              E = "onCompositionEnd";
              break e;
            case "compositionupdate":
              E = "onCompositionUpdate";
              break e;
          }
          E = void 0;
        }
      else
        oo
          ? nx(e, n) && (E = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (E = "onCompositionStart");
      E &&
        (tx &&
          n.locale !== "ko" &&
          (oo || E !== "onCompositionStart"
            ? E === "onCompositionEnd" && oo && (T = ex())
            : ((Ir = u),
              (Nh = "value" in Ir ? Ir.value : Ir.textContent),
              (oo = !0))),
        (w = ac(c, E)),
        0 < w.length &&
          ((E = new I0(E, e, null, n, u)),
          f.push({ event: E, listeners: w }),
          T ? (E.data = T) : ((T = rx(n)), T !== null && (E.data = T)))),
        (T = $2 ? z2(e, n) : N2(e, n)) &&
          ((c = ac(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new I0("onBeforeInput", "beforeinput", null, n, u)),
            f.push({ event: u, listeners: c }),
            (u.data = T)));
    }
    mx(f, t);
  });
}
function Ks(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ac(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Hs(e, n)),
      o != null && r.unshift(Ks(e, o, i)),
      (o = Hs(e, t)),
      o != null && r.push(Ks(e, o, i))),
      (e = e.return);
  }
  return r;
}
function no(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function j0(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = Hs(n, o)), l != null && s.unshift(Ks(n, l, a)))
        : i || ((l = Hs(n, o)), l != null && s.push(Ks(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var J2 = /\r\n?/g,
  eI = /\u0000|\uFFFD/g;
function W0(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      J2,
      `
`
    )
    .replace(eI, "");
}
function Bl(e, t, n) {
  if (((t = W0(t)), W0(e) !== t && n)) throw Error(M(425));
}
function lc() {}
var sh = null,
  ah = null;
function lh(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ch = typeof setTimeout == "function" ? setTimeout : void 0,
  tI = typeof clearTimeout == "function" ? clearTimeout : void 0,
  U0 = typeof Promise == "function" ? Promise : void 0,
  nI =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof U0 < "u"
      ? function (e) {
          return U0.resolve(null).then(e).catch(rI);
        }
      : ch;
function rI(e) {
  setTimeout(function () {
    throw e;
  });
}
function _d(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Us(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Us(t);
}
function Dr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function X0(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Io = Math.random().toString(36).slice(2),
  Hn = "__reactFiber$" + Io,
  qs = "__reactProps$" + Io,
  ur = "__reactContainer$" + Io,
  uh = "__reactEvents$" + Io,
  iI = "__reactListeners$" + Io,
  oI = "__reactHandles$" + Io;
function vi(e) {
  var t = e[Hn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ur] || n[Hn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = X0(e); e !== null; ) {
          if ((n = e[Hn])) return n;
          e = X0(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function oa(e) {
  return (
    (e = e[Hn] || e[ur]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function lo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Pc(e) {
  return e[qs] || null;
}
var fh = [],
  co = -1;
function jr(e) {
  return { current: e };
}
function Ce(e) {
  0 > co || ((e.current = fh[co]), (fh[co] = null), co--);
}
function ye(e, t) {
  co++, (fh[co] = e.current), (e.current = t);
}
var Nr = {},
  yt = jr(Nr),
  zt = jr(!1),
  Si = Nr;
function ko(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Nr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i,
    o = {};
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Nt(e) {
  return (e = e.childContextTypes), e != null;
}
function cc() {
  Ce(zt), Ce(yt);
}
function Y0(e, t, n) {
  if (yt.current !== Nr) throw Error(M(168));
  ye(yt, t), ye(zt, n);
}
function gx(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(M(108, U_(e) || "Unknown", i));
  return Fe({}, n, r);
}
function uc(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Nr),
    (Si = yt.current),
    ye(yt, e),
    ye(zt, zt.current),
    !0
  );
}
function G0(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = gx(e, t, Si)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      Ce(zt),
      Ce(yt),
      ye(yt, e))
    : Ce(zt),
    ye(zt, n);
}
var or = null,
  _c = !1,
  Id = !1;
function yx(e) {
  or === null ? (or = [e]) : or.push(e);
}
function sI(e) {
  (_c = !0), yx(e);
}
function Wr() {
  if (!Id && or !== null) {
    Id = !0;
    var e = 0,
      t = pe;
    try {
      var n = or;
      for (pe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (or = null), (_c = !1);
    } catch (i) {
      throw (or !== null && (or = or.slice(e + 1)), jb(Vh, Wr), i);
    } finally {
      (pe = t), (Id = !1);
    }
  }
  return null;
}
var uo = [],
  fo = 0,
  fc = null,
  dc = 0,
  cn = [],
  un = 0,
  wi = null,
  sr = 1,
  ar = "";
function pi(e, t) {
  (uo[fo++] = dc), (uo[fo++] = fc), (fc = e), (dc = t);
}
function bx(e, t, n) {
  (cn[un++] = sr), (cn[un++] = ar), (cn[un++] = wi), (wi = e);
  var r = sr;
  e = ar;
  var i = 32 - Cn(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Cn(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (sr = (1 << (32 - Cn(t) + i)) | (n << i) | r),
      (ar = o + e);
  } else (sr = (1 << o) | (n << i) | r), (ar = e);
}
function Xh(e) {
  e.return !== null && (pi(e, 1), bx(e, 1, 0));
}
function Yh(e) {
  for (; e === fc; )
    (fc = uo[--fo]), (uo[fo] = null), (dc = uo[--fo]), (uo[fo] = null);
  for (; e === wi; )
    (wi = cn[--un]),
      (cn[un] = null),
      (ar = cn[--un]),
      (cn[un] = null),
      (sr = cn[--un]),
      (cn[un] = null);
}
var Qt = null,
  qt = null,
  Re = !1,
  kn = null;
function xx(e, t) {
  var n = fn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function K0(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null && ((e.stateNode = t), (Qt = e), (qt = Dr(t.firstChild)), !0)
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null && ((e.stateNode = t), (Qt = e), (qt = null), !0)
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null &&
          ((n = wi !== null ? { id: sr, overflow: ar } : null),
          (e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824,
          }),
          (n = fn(18, null, null, 0)),
          (n.stateNode = t),
          (n.return = e),
          (e.child = n),
          (Qt = e),
          (qt = null),
          !0)
      );
    default:
      return !1;
  }
}
function dh(e) {
  return (1 & e.mode) !== 0 && (128 & e.flags) === 0;
}
function hh(e) {
  if (Re) {
    var t = qt;
    if (t) {
      var n = t;
      if (!K0(e, t)) {
        if (dh(e)) throw Error(M(418));
        t = Dr(n.nextSibling);
        var r = Qt;
        t && K0(e, t)
          ? xx(r, n)
          : ((e.flags = (-4097 & e.flags) | 2), (Re = !1), (Qt = e));
      }
    } else {
      if (dh(e)) throw Error(M(418));
      (e.flags = (-4097 & e.flags) | 2), (Re = !1), (Qt = e);
    }
  }
}
function q0(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Qt = e;
}
function $l(e) {
  if (e !== Qt) return !1;
  if (!Re) return q0(e), (Re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !lh(e.type, e.memoizedProps))),
    t && (t = qt))
  ) {
    if (dh(e)) throw (Sx(), Error(M(418)));
    for (; t; ) xx(e, t), (t = Dr(t.nextSibling));
  }
  if ((q0(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qt = Dr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qt = null;
    }
  } else qt = Qt ? Dr(e.stateNode.nextSibling) : null;
  return !0;
}
function Sx() {
  for (var e = qt; e; ) e = Dr(e.nextSibling);
}
function Co() {
  (qt = Qt = null), (Re = !1);
}
function Gh(e) {
  kn === null ? (kn = [e]) : kn.push(e);
}
var aI = hr.ReactCurrentBatchConfig;
function Sn(e, t) {
  if (e && e.defaultProps) {
    (t = Fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var hc = jr(null),
  pc = null,
  ho = null,
  Kh = null;
function qh() {
  Kh = ho = pc = null;
}
function Qh(e) {
  var t = hc.current;
  Ce(hc), (e._currentValue = t);
}
function ph(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xo(e, t) {
  (pc = e),
    (Kh = ho = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && ($t = !0), (e.firstContext = null));
}
function hn(e) {
  var t = e._currentValue;
  if (Kh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), ho === null)) {
      if (pc === null) throw Error(M(308));
      (ho = e), (pc.dependencies = { lanes: 0, firstContext: e });
    } else ho = ho.next = e;
  return t;
}
var gi = null;
function Zh(e) {
  gi === null ? (gi = [e]) : gi.push(e);
}
function wx(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Zh(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    fr(e, r)
  );
}
function fr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Rr = !1;
function Jh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function kx(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function lr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ar(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), 2 & ce)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      fr(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Zh(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    fr(e, n)
  );
}
function Yl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (4194240 & n) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bh(e, n);
  }
}
function Q0(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r === null || ((r = r.updateQueue), n !== r))
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  else {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
  }
}
function mc(e, t, n, r) {
  var i = e.updateQueue;
  Rr = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), s === null ? (o = c) : (s.next = c), (s = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== s &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (u = c = l = null), (a = o);
    do {
      var d = a.lane,
        p = a.eventTime;
      if ((r & d) === d) {
        u !== null &&
          (u = u.next =
            {
              eventTime: p,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var g = e,
            v = a;
          switch (((d = t), (p = n), v.tag)) {
            case 1:
              if (((g = v.payload), typeof g == "function")) {
                f = g.call(p, f, d);
                break e;
              }
              f = g;
              break e;
            case 3:
              g.flags = (-65537 & g.flags) | 128;
            case 0:
              if (
                ((g = v.payload),
                (d = typeof g == "function" ? g.call(p, f, d) : g),
                d == null)
              )
                break e;
              f = Fe({}, f, d);
              break e;
            case 2:
              Rr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (p = {
          eventTime: p,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = p), (l = f)) : (u = u.next = p),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (u === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (Ci |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Z0(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(M(191, i));
        i.call(r);
      }
    }
}
var Cx = new wb.Component().refs;
function mh(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ic = {
  isMounted: function (e) {
    return !!(e = e._reactInternals) && Ri(e) === e;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pt(),
      i = Br(e),
      o = lr(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ar(e, o, i)),
      t !== null && (Tn(t, e, i, r), Yl(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Pt(),
      i = Br(e),
      o = lr(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ar(e, o, i)),
      t !== null && (Tn(t, e, i, r), Yl(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Pt(),
      r = Br(e),
      i = lr(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Ar(e, i, r)),
      t !== null && (Tn(t, e, r, n), Yl(t, e, r));
  },
};
function J0(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : !t.prototype ||
        !t.prototype.isPureReactComponent ||
        !Ys(n, r) ||
        !Ys(i, o)
  );
}
function Tx(e, t, n) {
  var r = !1,
    i = Nr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = hn(o))
      : ((i = Nt(t) ? Si : yt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? ko(e, i) : Nr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ic),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function eb(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ic.enqueueReplaceState(t, t.state, null);
}
function vh(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Cx), Jh(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = hn(o))
    : ((o = Nt(t) ? Si : yt.current), (i.context = ko(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (mh(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ic.enqueueReplaceState(i, i.state, null),
      mc(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ks(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === Cx && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function zl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function tb(e) {
  var t = e._init;
  return t(e._payload);
}
function Ex(e) {
  function t(m, h) {
    if (e) {
      var y = m.deletions;
      y === null ? ((m.deletions = [h]), (m.flags |= 16)) : y.push(h);
    }
  }
  function n(m, h) {
    if (!e) return null;
    for (; h !== null; ) t(m, h), (h = h.sibling);
    return null;
  }
  function r(m, h) {
    for (m = new Map(); h !== null; )
      h.key !== null ? m.set(h.key, h) : m.set(h.index, h), (h = h.sibling);
    return m;
  }
  function i(m, h) {
    return (m = $r(m, h)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, h, y) {
    return (
      (m.index = y),
      e
        ? ((y = m.alternate),
          y !== null
            ? ((y = y.index), y < h ? ((m.flags |= 2), h) : y)
            : ((m.flags |= 2), h))
        : ((m.flags |= 1048576), h)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, h, y, S) {
    return h === null || h.tag !== 6
      ? ((h = Vd(y, m.mode, S)), (h.return = m), h)
      : ((h = i(h, y)), (h.return = m), h);
  }
  function l(m, h, y, S) {
    var k = y.type;
    return k === io
      ? u(m, h, y.props.children, S, y.key)
      : h !== null &&
        (h.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Er &&
            tb(k) === h.type))
      ? ((S = i(h, y.props)), (S.ref = ks(m, h, y)), (S.return = m), S)
      : ((S = Jl(y.type, y.key, y.props, null, m.mode, S)),
        (S.ref = ks(m, h, y)),
        (S.return = m),
        S);
  }
  function c(m, h, y, S) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== y.containerInfo ||
      h.stateNode.implementation !== y.implementation
      ? ((h = Bd(y, m.mode, S)), (h.return = m), h)
      : ((h = i(h, y.children || [])), (h.return = m), h);
  }
  function u(m, h, y, S, k) {
    return h === null || h.tag !== 7
      ? ((h = xi(y, m.mode, S, k)), (h.return = m), h)
      : ((h = i(h, y)), (h.return = m), h);
  }
  function f(m, h, y) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Vd("" + h, m.mode, y)), (h.return = m), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Tl:
          return (
            (y = Jl(h.type, h.key, h.props, null, m.mode, y)),
            (y.ref = ks(m, null, h)),
            (y.return = m),
            y
          );
        case ro:
          return (h = Bd(h, m.mode, y)), (h.return = m), h;
        case Er:
          var S = h._init;
          return f(m, S(h._payload), y);
      }
      if (Ps(h) || bs(h))
        return (h = xi(h, m.mode, y, null)), (h.return = m), h;
      zl(m, h);
    }
    return null;
  }
  function d(m, h, y, S) {
    var k = h !== null ? h.key : null;
    if ((typeof y == "string" && y !== "") || typeof y == "number")
      return k !== null ? null : a(m, h, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case Tl:
          return y.key === k ? l(m, h, y, S) : null;
        case ro:
          return y.key === k ? c(m, h, y, S) : null;
        case Er:
          return (k = y._init), d(m, h, k(y._payload), S);
      }
      if (Ps(y) || bs(y)) return k !== null ? null : u(m, h, y, S, null);
      zl(m, y);
    }
    return null;
  }
  function p(m, h, y, S, k) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(y) || null), a(h, m, "" + S, k);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Tl:
          return (m = m.get(S.key === null ? y : S.key) || null), l(h, m, S, k);
        case ro:
          return (m = m.get(S.key === null ? y : S.key) || null), c(h, m, S, k);
        case Er:
          var w = S._init;
          return p(m, h, y, w(S._payload), k);
      }
      if (Ps(S) || bs(S)) return (m = m.get(y) || null), u(h, m, S, k, null);
      zl(h, S);
    }
    return null;
  }
  function g(m, h, y, S) {
    for (
      var k = null, w = null, T = h, E = (h = 0), F = null;
      T !== null && E < y.length;
      E++
    ) {
      T.index > E ? ((F = T), (T = null)) : (F = T.sibling);
      var I = d(m, T, y[E], S);
      if (I === null) {
        T === null && (T = F);
        break;
      }
      e && T && I.alternate === null && t(m, T),
        (h = o(I, h, E)),
        w === null ? (k = I) : (w.sibling = I),
        (w = I),
        (T = F);
    }
    if (E === y.length) return n(m, T), Re && pi(m, E), k;
    if (T === null) {
      for (; E < y.length; E++)
        (T = f(m, y[E], S)),
          T !== null &&
            ((h = o(T, h, E)), w === null ? (k = T) : (w.sibling = T), (w = T));
      return Re && pi(m, E), k;
    }
    for (T = r(m, T); E < y.length; E++)
      (F = p(T, m, E, y[E], S)),
        F !== null &&
          (e && F.alternate !== null && T.delete(F.key === null ? E : F.key),
          (h = o(F, h, E)),
          w === null ? (k = F) : (w.sibling = F),
          (w = F));
    return (
      e &&
        T.forEach(function ($) {
          return t(m, $);
        }),
      Re && pi(m, E),
      k
    );
  }
  function v(m, h, y, S) {
    var k = bs(y);
    if (typeof k != "function") throw Error(M(150));
    if (((y = k.call(y)), y == null)) throw Error(M(151));
    for (
      var w = (k = null), T = h, E = (h = 0), F = null, I = y.next();
      T !== null && !I.done;
      E++, I = y.next()
    ) {
      T.index > E ? ((F = T), (T = null)) : (F = T.sibling);
      var $ = d(m, T, I.value, S);
      if ($ === null) {
        T === null && (T = F);
        break;
      }
      e && T && $.alternate === null && t(m, T),
        (h = o($, h, E)),
        w === null ? (k = $) : (w.sibling = $),
        (w = $),
        (T = F);
    }
    if (I.done) return n(m, T), Re && pi(m, E), k;
    if (T === null) {
      for (; !I.done; E++, I = y.next())
        (I = f(m, I.value, S)),
          I !== null &&
            ((h = o(I, h, E)), w === null ? (k = I) : (w.sibling = I), (w = I));
      return Re && pi(m, E), k;
    }
    for (T = r(m, T); !I.done; E++, I = y.next())
      (I = p(T, m, E, I.value, S)),
        I !== null &&
          (e && I.alternate !== null && T.delete(I.key === null ? E : I.key),
          (h = o(I, h, E)),
          w === null ? (k = I) : (w.sibling = I),
          (w = I));
    return (
      e &&
        T.forEach(function (B) {
          return t(m, B);
        }),
      Re && pi(m, E),
      k
    );
  }
  function x(m, h, y, S) {
    if (
      (typeof y == "object" &&
        y !== null &&
        y.type === io &&
        y.key === null &&
        (y = y.props.children),
      typeof y == "object" && y !== null)
    ) {
      switch (y.$$typeof) {
        case Tl:
          e: {
            for (var k = y.key, w = h; w !== null; ) {
              if (w.key === k) {
                if (((k = y.type), k === io)) {
                  if (w.tag === 7) {
                    n(m, w.sibling),
                      (h = i(w, y.props.children)),
                      (h.return = m),
                      (m = h);
                    break e;
                  }
                } else if (
                  w.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Er &&
                    tb(k) === w.type)
                ) {
                  n(m, w.sibling),
                    (h = i(w, y.props)),
                    (h.ref = ks(m, w, y)),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, w);
                break;
              }
              t(m, w), (w = w.sibling);
            }
            y.type === io
              ? ((h = xi(y.props.children, m.mode, S, y.key)),
                (h.return = m),
                (m = h))
              : ((S = Jl(y.type, y.key, y.props, null, m.mode, S)),
                (S.ref = ks(m, h, y)),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case ro:
          e: {
            for (w = y.key; h !== null; ) {
              if (h.key === w) {
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === y.containerInfo &&
                  h.stateNode.implementation === y.implementation
                ) {
                  n(m, h.sibling),
                    (h = i(h, y.children || [])),
                    (h.return = m),
                    (m = h);
                  break e;
                }
                n(m, h);
                break;
              }
              t(m, h), (h = h.sibling);
            }
            (h = Bd(y, m.mode, S)), (h.return = m), (m = h);
          }
          return s(m);
        case Er:
          return (w = y._init), x(m, h, w(y._payload), S);
      }
      if (Ps(y)) return g(m, h, y, S);
      if (bs(y)) return v(m, h, y, S);
      zl(m, y);
    }
    return (typeof y == "string" && y !== "") || typeof y == "number"
      ? ((y = "" + y),
        h !== null && h.tag === 6
          ? (n(m, h.sibling), (h = i(h, y)), (h.return = m), (m = h))
          : (n(m, h), (h = Vd(y, m.mode, S)), (h.return = m), (m = h)),
        s(m))
      : n(m, h);
  }
  return x;
}
var To = Ex(!0),
  Rx = Ex(!1),
  sa = {},
  Wn = jr(sa),
  Qs = jr(sa),
  Zs = jr(sa);
function yi(e) {
  if (e === sa) throw Error(M(174));
  return e;
}
function ep(e, t) {
  switch ((ye(Zs, t), ye(Qs, e), ye(Wn, sa), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Gd(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Gd(t, e));
  }
  Ce(Wn), ye(Wn, t);
}
function Eo() {
  Ce(Wn), Ce(Qs), Ce(Zs);
}
function Px(e) {
  yi(Zs.current);
  var t = yi(Wn.current),
    n = Gd(t, e.type);
  t !== n && (ye(Qs, e), ye(Wn, n));
}
function tp(e) {
  Qs.current === e && (Ce(Wn), Ce(Qs));
}
var _e = jr(0);
function vc(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (128 & t.flags) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Fd = [];
function np() {
  for (var e = 0; e < Fd.length; e++)
    Fd[e]._workInProgressVersionPrimary = null;
  Fd.length = 0;
}
var Gl = hr.ReactCurrentDispatcher,
  Ld = hr.ReactCurrentBatchConfig,
  ki = 0,
  Ie = null,
  Ke = null,
  Je = null,
  gc = !1,
  As = !1,
  Js = 0,
  lI = 0;
function mt() {
  throw Error(M(321));
}
function rp(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!En(e[n], t[n])) return !1;
  return !0;
}
function ip(e, t, n, r, i, o) {
  if (
    ((ki = o),
    (Ie = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gl.current = e === null || e.memoizedState === null ? dI : hI),
    (e = n(r, i)),
    As)
  ) {
    o = 0;
    do {
      if (((As = !1), (Js = 0), 25 <= o)) throw Error(M(301));
      (o += 1),
        (Je = Ke = null),
        (t.updateQueue = null),
        (Gl.current = pI),
        (e = n(r, i));
    } while (As);
  }
  if (
    ((Gl.current = yc),
    (t = Ke !== null && Ke.next !== null),
    (ki = 0),
    (Je = Ke = Ie = null),
    (gc = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function op() {
  var e = Js !== 0;
  return (Js = 0), e;
}
function Nn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Je === null ? (Ie.memoizedState = Je = e) : (Je = Je.next = e), Je;
}
function pn() {
  if (Ke === null) {
    var e = Ie.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ke.next;
  var t = Je === null ? Ie.memoizedState : Je.next;
  if (t !== null) (Je = t), (Ke = e);
  else {
    if (e === null) throw Error(M(310));
    (Ke = e),
      (e = {
        memoizedState: Ke.memoizedState,
        baseState: Ke.baseState,
        baseQueue: Ke.baseQueue,
        queue: Ke.queue,
        next: null,
      }),
      Je === null ? (Ie.memoizedState = Je = e) : (Je = Je.next = e);
  }
  return Je;
}
function ea(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Md(e) {
  var t = pn(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = Ke,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      c = o;
    do {
      var u = c.lane;
      if ((ki & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var f = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = f), (s = r)) : (l = l.next = f),
          (Ie.lanes |= u),
          (Ci |= u);
      }
      c = c.next;
    } while (c !== null && c !== o);
    l === null ? (s = r) : (l.next = a),
      En(r, t.memoizedState) || ($t = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Ie.lanes |= o), (Ci |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Od(e) {
  var t = pn(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    En(o, t.memoizedState) || ($t = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function _x() {}
function Ix(e, t) {
  var n = Ie,
    r = pn(),
    i = t(),
    o = !En(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), ($t = !0)),
    (r = r.queue),
    sp(Mx.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Je !== null && 1 & Je.memoizedState.tag))
  ) {
    if (
      ((n.flags |= 2048),
      ta(9, Lx.bind(null, n, r, i, t), void 0, null),
      et === null)
    )
      throw Error(M(349));
    30 & ki || Fx(n, t, i);
  }
  return i;
}
function Fx(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ie.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Lx(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Ox(t) && Dx(e);
}
function Mx(e, t, n) {
  return n(function () {
    Ox(t) && Dx(e);
  });
}
function Ox(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !En(e, n);
  } catch {
    return !0;
  }
}
function Dx(e) {
  var t = fr(e, 1);
  t !== null && Tn(t, e, 1, -1);
}
function nb(e) {
  var t = Nn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ea,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = fI.bind(null, Ie, e)),
    [t.memoizedState, e]
  );
}
function ta(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ie.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ie.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Ax() {
  return pn().memoizedState;
}
function Kl(e, t, n, r) {
  var i = Nn();
  (Ie.flags |= e),
    (i.memoizedState = ta(1 | t, n, void 0, r === void 0 ? null : r));
}
function Fc(e, t, n, r) {
  var i = pn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Ke !== null) {
    var s = Ke.memoizedState;
    if (((o = s.destroy), r !== null && rp(r, s.deps))) {
      i.memoizedState = ta(t, n, o, r);
      return;
    }
  }
  (Ie.flags |= e), (i.memoizedState = ta(1 | t, n, o, r));
}
function rb(e, t) {
  return Kl(8390656, 8, e, t);
}
function sp(e, t) {
  return Fc(2048, 8, e, t);
}
function Vx(e, t) {
  return Fc(4, 2, e, t);
}
function Bx(e, t) {
  return Fc(4, 4, e, t);
}
function $x(e, t) {
  return typeof t == "function"
    ? ((e = e()),
      t(e),
      function () {
        t(null);
      })
    : t != null
    ? ((e = e()),
      (t.current = e),
      function () {
        t.current = null;
      })
    : void 0;
}
function zx(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Fc(4, 4, $x.bind(null, t, e), n)
  );
}
function ap() {}
function Nx(e, t) {
  var n = pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rp(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Hx(e, t) {
  var n = pn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && rp(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function jx(e, t, n) {
  return 21 & ki
    ? (En(n, t) || ((n = Xb()), (Ie.lanes |= n), (Ci |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), ($t = !0)), (e.memoizedState = n));
}
function cI(e, t) {
  var n = pe;
  (pe = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ld.transition;
  Ld.transition = {};
  try {
    e(!1), t();
  } finally {
    (pe = n), (Ld.transition = r);
  }
}
function Wx() {
  return pn().memoizedState;
}
function uI(e, t, n) {
  var r = Br(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Ux(e))
  )
    Xx(t, n);
  else if (((n = wx(e, t, n, r)), n !== null)) {
    var i = Pt();
    Tn(n, e, r, i), Yx(n, t, r);
  }
}
function fI(e, t, n) {
  var r = Br(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ux(e)) Xx(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), En(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Zh(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {}
    (n = wx(e, t, i, r)),
      n !== null && ((i = Pt()), Tn(n, e, r, i), Yx(n, t, r));
  }
}
function Ux(e) {
  var t = e.alternate;
  return e === Ie || (t !== null && t === Ie);
}
function Xx(e, t) {
  As = gc = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Yx(e, t, n) {
  if (4194240 & n) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Bh(e, n);
  }
}
var yc = {
    readContext: hn,
    useCallback: mt,
    useContext: mt,
    useEffect: mt,
    useImperativeHandle: mt,
    useInsertionEffect: mt,
    useLayoutEffect: mt,
    useMemo: mt,
    useReducer: mt,
    useRef: mt,
    useState: mt,
    useDebugValue: mt,
    useDeferredValue: mt,
    useTransition: mt,
    useMutableSource: mt,
    useSyncExternalStore: mt,
    useId: mt,
    unstable_isNewReconciler: !1,
  },
  dI = {
    readContext: hn,
    useCallback: function (e, t) {
      return (Nn().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: hn,
    useEffect: rb,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Kl(4194308, 4, $x.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Kl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Kl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Nn();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Nn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = uI.bind(null, Ie, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Nn();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: nb,
    useDebugValue: ap,
    useDeferredValue: function (e) {
      return (Nn().memoizedState = e);
    },
    useTransition: function () {
      var e = nb(!1),
        t = e[0];
      return (e = cI.bind(null, e[1])), (Nn().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ie,
        i = Nn();
      if (Re) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), et === null)) throw Error(M(349));
        30 & ki || Fx(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        rb(Mx.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ta(9, Lx.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Nn(),
        t = et.identifierPrefix;
      if (Re) {
        var n = ar,
          r = sr;
        (n = (r & ~(1 << (32 - Cn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Js++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = lI++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  hI = {
    readContext: hn,
    useCallback: Nx,
    useContext: hn,
    useEffect: sp,
    useImperativeHandle: zx,
    useInsertionEffect: Vx,
    useLayoutEffect: Bx,
    useMemo: Hx,
    useReducer: Md,
    useRef: Ax,
    useState: function () {
      return Md(ea);
    },
    useDebugValue: ap,
    useDeferredValue: function (e) {
      var t = pn();
      return jx(t, Ke.memoizedState, e);
    },
    useTransition: function () {
      var e = Md(ea)[0],
        t = pn().memoizedState;
      return [e, t];
    },
    useMutableSource: _x,
    useSyncExternalStore: Ix,
    useId: Wx,
    unstable_isNewReconciler: !1,
  },
  pI = {
    readContext: hn,
    useCallback: Nx,
    useContext: hn,
    useEffect: sp,
    useImperativeHandle: zx,
    useInsertionEffect: Vx,
    useLayoutEffect: Bx,
    useMemo: Hx,
    useReducer: Od,
    useRef: Ax,
    useState: function () {
      return Od(ea);
    },
    useDebugValue: ap,
    useDeferredValue: function (e) {
      var t = pn();
      return Ke === null ? (t.memoizedState = e) : jx(t, Ke.memoizedState, e);
    },
    useTransition: function () {
      var e = Od(ea)[0],
        t = pn().memoizedState;
      return [e, t];
    },
    useMutableSource: _x,
    useSyncExternalStore: Ix,
    useId: Wx,
    unstable_isNewReconciler: !1,
  };
function Ro(e, t) {
  try {
    var n = "",
      r = t;
    do (n += W_(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Dd(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gh(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var mI = typeof WeakMap == "function" ? WeakMap : Map;
function Gx(e, t, n) {
  (n = lr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xc || ((xc = !0), (Eh = r)), gh(e, t);
    }),
    n
  );
}
function Kx(e, t, n) {
  (n = lr(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        gh(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        gh(e, t),
          typeof r != "function" &&
            (Vr === null ? (Vr = new Set([this])) : Vr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function ib(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new mI();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = _I.bind(null, e, t, n)), t.then(e, e));
}
function ob(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t === null || t.dehydrated !== null)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function sb(e, t, n, r, i) {
  return 1 & e.mode
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = lr(-1, 1)), (t.tag = 2), Ar(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var vI = hr.ReactCurrentOwner,
  $t = !1;
function Rt(e, t, n, r) {
  t.child = e === null ? Rx(t, null, n, r) : To(t, e.child, n, r);
}
function ab(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    xo(t, i),
    (r = ip(e, t, n, r, o, i)),
    (n = op()),
    e !== null && !$t
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dr(e, t, i))
      : (Re && n && Xh(t), (t.flags |= 1), Rt(e, t, r, i), t.child)
  );
}
function lb(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !mp(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), qx(e, t, o, r, i))
      : ((e = Jl(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ys), n(s, r) && e.ref === t.ref)
    )
      return dr(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = $r(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function qx(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Ys(o, r) && e.ref === t.ref) {
      if ((($t = !1), (t.pendingProps = r = o), (e.lanes & i) === 0))
        return (t.lanes = e.lanes), dr(e, t, i);
      131072 & e.flags && ($t = !0);
    }
  }
  return yh(e, t, n, r, i);
}
function Qx(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(1 & t.mode))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ye(mo, Kt),
        (Kt |= n);
    else {
      if (!(1073741824 & n))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ye(mo, Kt),
          (Kt |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ye(mo, Kt),
        (Kt |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ye(mo, Kt),
      (Kt |= r);
  return Rt(e, t, i, n), t.child;
}
function Zx(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function yh(e, t, n, r, i) {
  var o = Nt(n) ? Si : yt.current;
  return (
    (o = ko(t, o)),
    xo(t, i),
    (n = ip(e, t, n, r, o, i)),
    (r = op()),
    e !== null && !$t
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        dr(e, t, i))
      : (Re && r && Xh(t), (t.flags |= 1), Rt(e, t, n, i), t.child)
  );
}
function cb(e, t, n, r, i) {
  if (Nt(n)) {
    var o = !0;
    uc(t);
  } else o = !1;
  if ((xo(t, i), t.stateNode === null))
    ql(e, t), Tx(t, n, r), vh(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = hn(c))
      : ((c = Nt(n) ? Si : yt.current), (c = ko(t, c)));
    var u = n.getDerivedStateFromProps,
      f =
        typeof u == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && eb(t, s, r, c)),
      (Rr = !1);
    var d = t.memoizedState;
    (s.state = d),
      mc(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || zt.current || Rr
        ? (typeof u == "function" && (mh(t, n, u, r), (l = t.memoizedState)),
          (a = Rr || J0(t, n, a, r, d, l, c))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = c),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      kx(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : Sn(t.type, a)),
      (s.props = c),
      (f = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = hn(l))
        : ((l = Nt(n) ? Si : yt.current), (l = ko(t, l)));
    var p = n.getDerivedStateFromProps;
    (u =
      typeof p == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== f || d !== l) && eb(t, s, r, l)),
      (Rr = !1),
      (d = t.memoizedState),
      (s.state = d),
      mc(t, r, s, i);
    var g = t.memoizedState;
    a !== f || d !== g || zt.current || Rr
      ? (typeof p == "function" && (mh(t, n, p, r), (g = t.memoizedState)),
        (c = Rr || J0(t, n, c, r, d, g, l) || !1)
          ? (u ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, g, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, g, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = g)),
        (s.props = r),
        (s.state = g),
        (s.context = l),
        (r = c))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return bh(e, t, n, r, o, i);
}
function bh(e, t, n, r, i, o) {
  Zx(e, t);
  var s = (128 & t.flags) !== 0;
  if (!r && !s) return i && G0(t, n, !1), dr(e, t, o);
  (r = t.stateNode), (vI.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = To(t, e.child, null, o)), (t.child = To(t, null, a, o)))
      : Rt(e, t, a, o),
    (t.memoizedState = r.state),
    i && G0(t, n, !0),
    t.child
  );
}
function Jx(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Y0(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Y0(e, t.context, !1),
    ep(e, t.containerInfo);
}
function ub(e, t, n, r, i) {
  return Co(), Gh(i), (t.flags |= 256), Rt(e, t, n, r), t.child;
}
var xh = { dehydrated: null, treeContext: null, retryLane: 0 };
function Sh(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function e1(e, t, n) {
  var r,
    i = t.pendingProps,
    o = _e.current,
    s = !1,
    a = (128 & t.flags) !== 0;
  if (
    ((r = a) || (r = (e === null || e.memoizedState !== null) && (2 & o) !== 0),
    r
      ? ((s = !0), (t.flags &= -129))
      : (e !== null && e.memoizedState === null) || (o |= 1),
    ye(_e, 1 & o),
    e === null)
  )
    return (
      hh(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (1 & t.mode
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = i.children),
          (e = i.fallback),
          s
            ? ((i = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(1 & i) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Oc(a, i, 0, null)),
              (e = xi(e, i, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Sh(n)),
              (t.memoizedState = xh),
              e)
            : lp(t, a))
    );
  if (((o = e.memoizedState), o !== null && ((r = o.dehydrated), r !== null)))
    return gI(e, t, a, i, r, o, n);
  if (s) {
    (s = i.fallback), (a = t.mode), (o = e.child), (r = o.sibling);
    var l = { mode: "hidden", children: i.children };
    return (
      !(1 & a) && t.child !== o
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = l),
          (t.deletions = null))
        : ((i = $r(o, l)), (i.subtreeFlags = 14680064 & o.subtreeFlags)),
      r !== null ? (s = $r(r, s)) : ((s = xi(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (i.return = t),
      (i.sibling = s),
      (t.child = i),
      (i = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Sh(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = xh),
      i
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (i = $r(s, { mode: "visible", children: i.children })),
    !(1 & t.mode) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function lp(e, t) {
  return (
    (t = Oc({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Nl(e, t, n, r) {
  return (
    r !== null && Gh(r),
    To(t, e.child, null, n),
    (e = lp(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function gI(e, t, n, r, i, o, s) {
  if (n)
    return 256 & t.flags
      ? ((t.flags &= -257), (r = Dd(Error(M(422)))), Nl(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Oc({ mode: "visible", children: r.children }, i, 0, null)),
        (o = xi(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        1 & t.mode && To(t, e.child, null, s),
        (t.child.memoizedState = Sh(s)),
        (t.memoizedState = xh),
        o);
  if (!(1 & t.mode)) return Nl(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(M(419))), (r = Dd(o, r, void 0)), Nl(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), $t || a)) {
    if (((r = et), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), fr(e, i), Tn(r, e, i, -1));
    }
    return pp(), (r = Dd(Error(M(421)))), Nl(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = II.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (qt = Dr(i.nextSibling)),
      (Qt = t),
      (Re = !0),
      (kn = null),
      e !== null &&
        ((cn[un++] = sr),
        (cn[un++] = ar),
        (cn[un++] = wi),
        (sr = e.id),
        (ar = e.overflow),
        (wi = t)),
      (t = lp(t, r.children)),
      (t.flags |= 4096),
      t);
}
function fb(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ph(e.return, t, n);
}
function Ad(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function t1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Rt(e, t, r.children, n), (r = _e.current), 2 & r))
    (r = (1 & r) | 2), (t.flags |= 128);
  else {
    if (e !== null && 128 & e.flags)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fb(e, n, t);
        else if (e.tag === 19) fb(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ye(_e, r), !(1 & t.mode))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && vc(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ad(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && vc(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Ad(t, !0, n, null, o);
        break;
      case "together":
        Ad(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ql(e, t) {
  !(1 & t.mode) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function dr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Ci |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = $r(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = $r(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yI(e, t, n) {
  switch (t.tag) {
    case 3:
      Jx(t), Co();
      break;
    case 5:
      Px(t);
      break;
    case 1:
      Nt(t.type) && uc(t);
      break;
    case 4:
      ep(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ye(hc, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ye(_e, 1 & _e.current), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? e1(e, t, n)
          : (ye(_e, 1 & _e.current),
            (e = dr(e, t, n)),
            e !== null ? e.sibling : null);
      ye(_e, 1 & _e.current);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), 128 & e.flags)) {
        if (r) return t1(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ye(_e, _e.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Qx(e, t, n);
  }
  return dr(e, t, n);
}
var n1, wh, r1, i1;
n1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
wh = function () {};
r1 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), yi(Wn.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Wd(e, i)), (r = Wd(e, r)), (o = []);
        break;
      case "select":
        (i = Fe({}, i, { value: void 0 })),
          (r = Fe({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Yd(e, i)), (r = Yd(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = lc);
    }
    Kd(n, r);
    var s;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (zs.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i?.[c]),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (zs.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && ke("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(c, l));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
i1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Cs(e, t) {
  if (!Re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function vt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= 14680064 & i.subtreeFlags),
        (r |= 14680064 & i.flags),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function bI(e, t, n) {
  var r = t.pendingProps;
  switch ((Yh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return vt(t), null;
    case 1:
      return Nt(t.type) && cc(), vt(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Eo(),
        Ce(zt),
        Ce(yt),
        np(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e !== null && e.child !== null) ||
          ($l(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
              ((t.flags |= 1024), kn !== null && (_h(kn), (kn = null)))),
        wh(e, t),
        vt(t),
        null
      );
    case 5:
      tp(t);
      var i = yi(Zs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        r1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return vt(t), null;
        }
        if (((e = yi(Wn.current)), $l(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Hn] = t), (r[qs] = o), (e = (1 & t.mode) !== 0), n)) {
            case "dialog":
              ke("cancel", r), ke("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ke("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Is.length; i++) ke(Is[i], r);
              break;
            case "source":
              ke("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ke("error", r), ke("load", r);
              break;
            case "details":
              ke("toggle", r);
              break;
            case "input":
              b0(r, o), ke("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ke("invalid", r);
              break;
            case "textarea":
              S0(r, o), ke("invalid", r);
          }
          Kd(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Bl(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Bl(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : zs.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  ke("scroll", r);
            }
          switch (n) {
            case "input":
              El(r), x0(r, o, !0);
              break;
            case "textarea":
              El(r), w0(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = lc);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Fb(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Hn] = t),
            (e[qs] = r),
            n1(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = qd(n, r)), n)) {
              case "dialog":
                ke("cancel", e), ke("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ke("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Is.length; i++) ke(Is[i], e);
                i = r;
                break;
              case "source":
                ke("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ke("error", e), ke("load", e), (i = r);
                break;
              case "details":
                ke("toggle", e), (i = r);
                break;
              case "input":
                b0(e, r), (i = Wd(e, r)), ke("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Fe({}, r, { value: void 0 })),
                  ke("invalid", e);
                break;
              case "textarea":
                S0(e, r), (i = Yd(e, r)), ke("invalid", e);
                break;
              default:
                i = r;
            }
            Kd(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Ob(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Lb(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && Ns(e, l)
                    : typeof l == "number" && Ns(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (zs.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && ke("scroll", e)
                      : l != null && Lh(e, o, l, s));
              }
            switch (n) {
              case "input":
                El(e), x0(e, r, !1);
                break;
              case "textarea":
                El(e), w0(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + zr(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? vo(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      vo(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = lc);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return vt(t), null;
    case 6:
      if (e && t.stateNode != null) i1(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = yi(Zs.current)), yi(Wn.current), $l(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Hn] = t),
            (o = r.nodeValue !== n) && ((e = Qt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Bl(r.nodeValue, n, (1 & e.mode) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Bl(r.nodeValue, n, (1 & e.mode) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Hn] = t),
            (t.stateNode = r);
      }
      return vt(t), null;
    case 13:
      if (
        (Ce(_e),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Re && qt !== null && 1 & t.mode && !(128 & t.flags))
          Sx(), Co(), (t.flags |= 98560), (o = !1);
        else if (((o = $l(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(M(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(M(317));
            o[Hn] = t;
          } else
            Co(), !(128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
          vt(t), (o = !1);
        } else kn !== null && (_h(kn), (kn = null)), (o = !0);
        if (!o) return 65536 & t.flags ? t : null;
      }
      return 128 & t.flags
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            1 & t.mode &&
              (e === null || 1 & _e.current ? qe === 0 && (qe = 3) : pp())),
          t.updateQueue !== null && (t.flags |= 4),
          vt(t),
          null);
    case 4:
      return (
        Eo(), wh(e, t), e === null && Gs(t.stateNode.containerInfo), vt(t), null
      );
    case 10:
      return Qh(t.type._context), vt(t), null;
    case 17:
      return Nt(t.type) && cc(), vt(t), null;
    case 19:
      if ((Ce(_e), (o = t.memoizedState), o === null)) return vt(t), null;
      if (((r = (128 & t.flags) !== 0), (s = o.rendering), s === null))
        if (r) Cs(o, !1);
        else {
          if (qe !== 0 || (e !== null && 128 & e.flags))
            for (e = t.child; e !== null; ) {
              if (((s = vc(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Cs(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ye(_e, (1 & _e.current) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            He() > Po &&
            ((t.flags |= 128), (r = !0), Cs(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = vc(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Cs(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Re)
            )
              return vt(t), null;
          } else
            2 * He() - o.renderingStartTime > Po &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Cs(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = He()),
          (t.sibling = null),
          (n = _e.current),
          ye(_e, r ? (1 & n) | 2 : 1 & n),
          t)
        : (vt(t), null);
    case 22:
    case 23:
      return (
        hp(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && 1 & t.mode
          ? 1073741824 & Kt && (vt(t), 6 & t.subtreeFlags && (t.flags |= 8192))
          : vt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function xI(e, t) {
  switch ((Yh(t), t.tag)) {
    case 1:
      return (
        Nt(t.type) && cc(),
        (e = t.flags),
        65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 3:
      return (
        Eo(),
        Ce(zt),
        Ce(yt),
        np(),
        (e = t.flags),
        65536 & e && !(128 & e) ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 5:
      return tp(t), null;
    case 13:
      if (
        (Ce(_e), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        Co();
      }
      return (
        (e = t.flags), 65536 & e ? ((t.flags = (-65537 & e) | 128), t) : null
      );
    case 19:
      return Ce(_e), null;
    case 4:
      return Eo(), null;
    case 10:
      return Qh(t.type._context), null;
    case 22:
    case 23:
      return hp(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Hl = !1,
  gt = !1,
  SI = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function po(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ve(e, t, r);
      }
    else n.current = null;
}
function o1(e, t, n) {
  try {
    n();
  } catch (r) {
    Ve(e, t, r);
  }
}
var db = !1;
function wI(e, t) {
  if (((sh = oc), (e = lx()), Uh(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || L;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var p;
              f !== n || (i !== 0 && f.nodeType !== 3) || (a = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (p = f.firstChild) !== null;

            )
              (d = f), (f = p);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++c === i && (a = s),
                d === o && ++u === r && (l = s),
                (p = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = p;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ah = { focusedElem: e, selectionRange: n }, oc = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (1028 & t.subtreeFlags) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var g = t.alternate;
          if (1024 & t.flags)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (g !== null) {
                  var v = g.memoizedProps,
                    x = g.memoizedState,
                    m = t.stateNode,
                    h = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Sn(t.type, v),
                      x
                    );
                  m.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var y = t.stateNode.containerInfo;
                y.nodeType === 1
                  ? (y.textContent = "")
                  : y.nodeType === 9 &&
                    y.documentElement &&
                    y.removeChild(y.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (S) {
          Ve(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (g = db), (db = !1), g;
}
function Vs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && o1(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Lc(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function kh(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function s1(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), s1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Hn], delete t[qs], delete t[uh], delete t[iI], delete t[oI])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function a1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function hb(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || a1(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (2 & e.flags || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(2 & e.flags)) return e.stateNode;
  }
}
function Ch(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = lc));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ch(e, t, n), e = e.sibling; e !== null; ) Ch(e, t, n), (e = e.sibling);
}
function Th(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Th(e, t, n), e = e.sibling; e !== null; ) Th(e, t, n), (e = e.sibling);
}
var st = null,
  wn = !1;
function Tr(e, t, n) {
  for (n = n.child; n !== null; ) l1(e, t, n), (n = n.sibling);
}
function l1(e, t, n) {
  if (jn && typeof jn.onCommitFiberUnmount == "function")
    try {
      jn.onCommitFiberUnmount(Cc, n);
    } catch {}
  switch (n.tag) {
    case 5:
      gt || po(n, t);
    case 6:
      var r = st,
        i = wn;
      (st = null),
        Tr(e, t, n),
        (st = r),
        (wn = i),
        st !== null &&
          (wn
            ? ((e = st),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : st.removeChild(n.stateNode));
      break;
    case 18:
      st !== null &&
        (wn
          ? ((e = st),
            (n = n.stateNode),
            e.nodeType === 8
              ? _d(e.parentNode, n)
              : e.nodeType === 1 && _d(e, n),
            Us(e))
          : _d(st, n.stateNode));
      break;
    case 4:
      (r = st),
        (i = wn),
        (st = n.stateNode.containerInfo),
        (wn = !0),
        Tr(e, t, n),
        (st = r),
        (wn = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !gt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (2 & o || 4 & o) && o1(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Tr(e, t, n);
      break;
    case 1:
      if (
        !gt &&
        (po(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          Ve(n, t, a);
        }
      Tr(e, t, n);
      break;
    case 21:
      Tr(e, t, n);
      break;
    case 22:
      1 & n.mode
        ? ((gt = (r = gt) || n.memoizedState !== null), Tr(e, t, n), (gt = r))
        : Tr(e, t, n);
      break;
    default:
      Tr(e, t, n);
  }
}
function pb(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new SI()),
      t.forEach(function (r) {
        var i = FI.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function xn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (st = a.stateNode), (wn = !1);
              break e;
            case 3:
              (st = a.stateNode.containerInfo), (wn = !0);
              break e;
            case 4:
              (st = a.stateNode.containerInfo), (wn = !0);
              break e;
          }
          a = a.return;
        }
        if (st === null) throw Error(M(160));
        l1(o, s, i), (st = null), (wn = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        Ve(i, t, c);
      }
    }
  if (12854 & t.subtreeFlags)
    for (t = t.child; t !== null; ) c1(t, e), (t = t.sibling);
}
function c1(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((xn(t, e), zn(e), 4 & r)) {
        try {
          Vs(3, e, e.return), Lc(3, e);
        } catch (v) {
          Ve(e, e.return, v);
        }
        try {
          Vs(5, e, e.return);
        } catch (v) {
          Ve(e, e.return, v);
        }
      }
      break;
    case 1:
      xn(t, e), zn(e), 512 & r && n !== null && po(n, n.return);
      break;
    case 5:
      if (
        (xn(t, e),
        zn(e),
        512 & r && n !== null && po(n, n.return),
        32 & e.flags)
      ) {
        var i = e.stateNode;
        try {
          Ns(i, "");
        } catch (v) {
          Ve(e, e.return, v);
        }
      }
      if (4 & r && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && _b(i, o),
              qd(a, s);
            var c = qd(a, o);
            for (s = 0; s < l.length; s += 2) {
              var u = l[s],
                f = l[s + 1];
              u === "style"
                ? Ob(i, f)
                : u === "dangerouslySetInnerHTML"
                ? Lb(i, f)
                : u === "children"
                ? Ns(i, f)
                : Lh(i, u, f, c);
            }
            switch (a) {
              case "input":
                Ud(i, o);
                break;
              case "textarea":
                Ib(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var p = o.value;
                p != null
                  ? vo(i, !!o.multiple, p, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? vo(i, !!o.multiple, o.defaultValue, !0)
                      : vo(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[qs] = o;
          } catch (v) {
            Ve(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((xn(t, e), zn(e), 4 & r)) {
        if (e.stateNode === null) throw Error(M(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          Ve(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (xn(t, e), zn(e), 4 & r && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Us(t.containerInfo);
        } catch (v) {
          Ve(e, e.return, v);
        }
      break;
    case 4:
      xn(t, e), zn(e);
      break;
    case 13:
      xn(t, e),
        zn(e),
        (i = e.child),
        8192 & i.flags &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (fp = He())),
        4 & r && pb(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        1 & e.mode ? ((gt = (c = gt) || u), xn(t, e), (gt = c)) : xn(t, e),
        zn(e),
        8192 & r)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && 1 & e.mode)
        )
          for (V = e, u = e.child; u !== null; ) {
            for (f = V = u; V !== null; ) {
              switch (((d = V), (p = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Vs(4, d, d.return);
                  break;
                case 1:
                  po(d, d.return);
                  var g = d.stateNode;
                  if (typeof g.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (g.props = t.memoizedProps),
                        (g.state = t.memoizedState),
                        g.componentWillUnmount();
                    } catch (v) {
                      Ve(r, n, v);
                    }
                  }
                  break;
                case 5:
                  po(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    vb(f);
                    continue;
                  }
              }
              p !== null ? ((p.return = d), (V = p)) : vb(f);
            }
            u = u.sibling;
          }
        e: for (u = null, f = e; ; ) {
          if (f.tag === 5) {
            if (u === null) {
              u = f;
              try {
                (i = f.stateNode),
                  c
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = f.stateNode),
                      (l = f.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Mb("display", s)));
              } catch (v) {
                Ve(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (u === null)
              try {
                f.stateNode.nodeValue = c ? "" : f.memoizedProps;
              } catch (v) {
                Ve(e, e.return, v);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            u === f && (u = null), (f = f.return);
          }
          u === f && (u = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      xn(t, e), zn(e), 4 & r && pb(e);
      break;
    case 21:
      break;
    default:
      xn(t, e), zn(e);
  }
}
function zn(e) {
  var t = e.flags;
  if (2 & t) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (a1(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          32 & r.flags && (Ns(i, ""), (r.flags &= -33));
          var o = hb(e);
          Th(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = hb(e);
          Ch(e, a, s);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      Ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  4096 & t && (e.flags &= -4097);
}
function kI(e, t, n) {
  (V = e), u1(e, t, n);
}
function u1(e, t, n) {
  for (var r = (1 & e.mode) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Hl;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || gt;
        a = Hl;
        var c = gt;
        if (((Hl = s), (gt = l) && !c))
          for (V = i; V !== null; )
            (s = V),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? gb(i)
                : l !== null
                ? ((l.return = s), (V = l))
                : gb(i);
        for (; o !== null; ) (V = o), u1(o, t, n), (o = o.sibling);
        (V = i), (Hl = a), (gt = c);
      }
      mb(e, t, n);
    } else
      8772 & i.subtreeFlags && o !== null
        ? ((o.return = i), (V = o))
        : mb(e, t, n);
  }
}
function mb(e) {
  for (; V !== null; ) {
    var t = V;
    if (8772 & t.flags) {
      var n = t.alternate;
      try {
        if (8772 & t.flags)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              gt || Lc(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (4 & t.flags && !gt)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Sn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Z0(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Z0(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && 4 & t.flags) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var f = u.dehydrated;
                    f !== null && Us(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        gt || (512 & t.flags && kh(t));
      } catch (d) {
        Ve(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function vb(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function gb(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lc(4, t);
          } catch (l) {
            Ve(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              Ve(t, i, l);
            }
          }
          var o = t.return;
          try {
            kh(t);
          } catch (l) {
            Ve(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            kh(t);
          } catch (l) {
            Ve(t, s, l);
          }
      }
    } catch (l) {
      Ve(t, t.return, l);
    }
    if (t === e) {
      V = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (V = a);
      break;
    }
    V = t.return;
  }
}
var CI = Math.ceil,
  bc = hr.ReactCurrentDispatcher,
  cp = hr.ReactCurrentOwner,
  dn = hr.ReactCurrentBatchConfig,
  ce = 0,
  et = null,
  Ye = null,
  at = 0,
  Kt = 0,
  mo = jr(0),
  qe = 0,
  na = null,
  Ci = 0,
  Mc = 0,
  up = 0,
  Bs = null,
  Bt = null,
  fp = 0,
  Po = 1 / 0,
  ir = null,
  xc = !1,
  Eh = null,
  Vr = null,
  jl = !1,
  Fr = null,
  Sc = 0,
  $s = 0,
  Rh = null,
  Ql = -1,
  Zl = 0;
function Pt() {
  return 6 & ce ? He() : Ql !== -1 ? Ql : (Ql = He());
}
function Br(e) {
  return 1 & e.mode
    ? 2 & ce && at !== 0
      ? at & -at
      : aI.transition !== null
      ? (Zl === 0 && (Zl = Xb()), Zl)
      : ((e = pe),
        e !== 0 || ((e = L.event), (e = e === void 0 ? 16 : Jb(e.type))),
        e)
    : 1;
}
function Tn(e, t, n, r) {
  if (50 < $s) throw (($s = 0), (Rh = null), Error(M(185)));
  ra(e, n, r),
    (2 & ce && e === et) ||
      (e === et && (!(2 & ce) && (Mc |= n), qe === 4 && _r(e, at)),
      Ht(e, r),
      n === 1 && ce === 0 && !(1 & t.mode) && ((Po = He() + 500), _c && Wr()));
}
function Ht(e, t) {
  var n = e.callbackNode;
  c2(e, t);
  var r = ic(e, e === et ? at : 0);
  if (r === 0)
    n !== null && T0(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && T0(n), t === 1))
      e.tag === 0 ? sI(yb.bind(null, e)) : yx(yb.bind(null, e)),
        nI(function () {
          !(6 & ce) && Wr();
        }),
        (n = null);
    else {
      switch (Yb(r)) {
        case 1:
          n = Vh;
          break;
        case 4:
          n = Wb;
          break;
        case 16:
          n = rc;
          break;
        case 536870912:
          n = Ub;
          break;
        default:
          n = rc;
      }
      n = y1(n, f1.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function f1(e, t) {
  if (((Ql = -1), (Zl = 0), 6 & ce)) throw Error(M(327));
  var n = e.callbackNode;
  if (So() && e.callbackNode !== n) return null;
  var r = ic(e, e === et ? at : 0);
  if (r === 0) return null;
  if (30 & r || r & e.expiredLanes || t) t = wc(e, r);
  else {
    t = r;
    var i = ce;
    ce |= 2;
    var o = h1();
    (et === e && at === t) || ((ir = null), (Po = He() + 500), bi(e, t));
    do
      try {
        RI();
        break;
      } catch (a) {
        d1(e, a);
      }
    while (1);
    qh(),
      (bc.current = o),
      (ce = i),
      Ye !== null ? (t = 0) : ((et = null), (at = 0), (t = qe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = th(e)), i !== 0 && ((r = i), (t = Ph(e, i)))), t === 1)
    )
      throw ((n = na), bi(e, 0), _r(e, r), Ht(e, He()), n);
    if (t === 6) _r(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(30 & r) &&
          !TI(i) &&
          ((t = wc(e, r)),
          t === 2 && ((o = th(e)), o !== 0 && ((r = o), (t = Ph(e, o)))),
          t === 1))
      )
        throw ((n = na), bi(e, 0), _r(e, r), Ht(e, He()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          mi(e, Bt, ir);
          break;
        case 3:
          if (
            (_r(e, r), (130023424 & r) === r && ((t = fp + 500 - He()), 10 < t))
          ) {
            if (ic(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Pt(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ch(mi.bind(null, e, Bt, ir), t);
            break;
          }
          mi(e, Bt, ir);
          break;
        case 4:
          if ((_r(e, r), (4194240 & r) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Cn(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = He() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * CI(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ch(mi.bind(null, e, Bt, ir), r);
            break;
          }
          mi(e, Bt, ir);
          break;
        case 5:
          mi(e, Bt, ir);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Ht(e, He()), e.callbackNode === n ? f1.bind(null, e) : null;
}
function Ph(e, t) {
  var n = Bs;
  return (
    e.current.memoizedState.isDehydrated && (bi(e, t).flags |= 256),
    (e = wc(e, t)),
    e !== 2 && ((t = Bt), (Bt = n), t !== null && _h(t)),
    e
  );
}
function _h(e) {
  Bt === null ? (Bt = e) : Bt.push.apply(Bt, e);
}
function TI(e) {
  for (var t = e; ; ) {
    if (16384 & t.flags) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!En(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), 16384 & t.subtreeFlags && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function _r(e, t) {
  for (
    t &= ~up,
      t &= ~Mc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Cn(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function yb(e) {
  if (6 & ce) throw Error(M(327));
  So();
  var t = ic(e, 0);
  if (!(1 & t)) return Ht(e, He()), null;
  var n = wc(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = th(e);
    r !== 0 && ((t = r), (n = Ph(e, r)));
  }
  if (n === 1) throw ((n = na), bi(e, 0), _r(e, t), Ht(e, He()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    mi(e, Bt, ir),
    Ht(e, He()),
    null
  );
}
function dp(e, t) {
  var n = ce;
  ce |= 1;
  try {
    return e(t);
  } finally {
    (ce = n), ce === 0 && ((Po = He() + 500), _c && Wr());
  }
}
function Ti(e) {
  Fr !== null && Fr.tag === 0 && !(6 & ce) && So();
  var t = ce;
  ce |= 1;
  var n = dn.transition,
    r = pe;
  try {
    if (((dn.transition = null), (pe = 1), e)) return e();
  } finally {
    (pe = r), (dn.transition = n), (ce = t), !(6 & ce) && Wr();
  }
}
function hp() {
  (Kt = mo.current), Ce(mo);
}
function bi(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), tI(n)), Ye !== null))
    for (n = Ye.return; n !== null; ) {
      var r = n;
      switch ((Yh(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && cc();
          break;
        case 3:
          Eo(), Ce(zt), Ce(yt), np();
          break;
        case 5:
          tp(r);
          break;
        case 4:
          Eo();
          break;
        case 13:
          Ce(_e);
          break;
        case 19:
          Ce(_e);
          break;
        case 10:
          Qh(r.type._context);
          break;
        case 22:
        case 23:
          hp();
      }
      n = n.return;
    }
  if (
    ((et = e),
    (Ye = e = $r(e.current, null)),
    (at = Kt = t),
    (qe = 0),
    (na = null),
    (up = Mc = Ci = 0),
    (Bt = Bs = null),
    gi !== null)
  ) {
    for (t = 0; t < gi.length; t++)
      if (((n = gi[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    gi = null;
  }
  return e;
}
function d1(e, t) {
  do {
    var n = Ye;
    try {
      if ((qh(), (Gl.current = yc), gc)) {
        for (var r = Ie.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        gc = !1;
      }
      if (
        ((ki = 0),
        (Je = Ke = Ie = null),
        (As = !1),
        (Js = 0),
        (cp.current = null),
        n === null || n.return === null)
      ) {
        (qe = 1), (na = t), (Ye = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = at),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            f = u.tag;
          if (!(1 & u.mode) && (f === 0 || f === 11 || f === 15)) {
            var d = u.alternate;
            d
              ? ((u.updateQueue = d.updateQueue),
                (u.memoizedState = d.memoizedState),
                (u.lanes = d.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var p = ob(s);
          if (p !== null) {
            (p.flags &= -257),
              sb(p, s, a, o, t),
              1 & p.mode && ib(o, c, t),
              (t = p),
              (l = c);
            var g = t.updateQueue;
            if (g === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else g.add(l);
            break e;
          }
          if (!(1 & t)) {
            ib(o, c, t), pp();
            break e;
          }
          l = Error(M(426));
        } else if (Re && 1 & a.mode) {
          var x = ob(s);
          if (x !== null) {
            !(65536 & x.flags) && (x.flags |= 256),
              sb(x, s, a, o, t),
              Gh(Ro(l, a));
            break e;
          }
        }
        (o = l = Ro(l, a)),
          qe !== 4 && (qe = 2),
          Bs === null ? (Bs = [o]) : Bs.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = Gx(o, l, t);
              Q0(o, m);
              break e;
            case 1:
              a = l;
              var h = o.type,
                y = o.stateNode;
              if (
                !(128 & o.flags) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (y !== null &&
                    typeof y.componentDidCatch == "function" &&
                    (Vr === null || !Vr.has(y))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Kx(o, a, t);
                Q0(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      m1(n);
    } catch (k) {
      (t = k), Ye === n && n !== null && (Ye = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function h1() {
  var e = bc.current;
  return (bc.current = yc), e === null ? yc : e;
}
function pp() {
  (qe !== 0 && qe !== 3 && qe !== 2) || (qe = 4),
    et === null || (!(268435455 & Ci) && !(268435455 & Mc)) || _r(et, at);
}
function wc(e, t) {
  var n = ce;
  ce |= 2;
  var r = h1();
  (et === e && at === t) || ((ir = null), bi(e, t));
  do
    try {
      EI();
      break;
    } catch (i) {
      d1(e, i);
    }
  while (1);
  if ((qh(), (ce = n), (bc.current = r), Ye !== null)) throw Error(M(261));
  return (et = null), (at = 0), qe;
}
function EI() {
  for (; Ye !== null; ) p1(Ye);
}
function RI() {
  for (; Ye !== null && !e2(); ) p1(Ye);
}
function p1(e) {
  var t = g1(e.alternate, e, Kt);
  (e.memoizedProps = e.pendingProps),
    t === null ? m1(e) : (Ye = t),
    (cp.current = null);
}
function m1(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), 32768 & t.flags)) {
      if (((n = xI(n, t)), n !== null)) {
        (n.flags &= 32767), (Ye = n);
        return;
      }
      if (e === null) {
        (qe = 6), (Ye = null);
        return;
      }
      (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
    } else if (((n = bI(n, t, Kt)), n !== null)) {
      Ye = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ye = t;
      return;
    }
    Ye = t = e;
  } while (t !== null);
  qe === 0 && (qe = 5);
}
function mi(e, t, n) {
  var r = pe,
    i = dn.transition;
  try {
    (dn.transition = null), (pe = 1), PI(e, t, n, r);
  } finally {
    (dn.transition = i), (pe = r);
  }
  return null;
}
function PI(e, t, n, r) {
  do So();
  while (Fr !== null);
  if (6 & ce) throw Error(M(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (u2(e, o),
    e === et && ((Ye = et = null), (at = 0)),
    (!(2064 & n.subtreeFlags) && !(2064 & n.flags)) ||
      jl ||
      ((jl = !0),
      y1(rc, function () {
        return So(), null;
      })),
    (o = (15990 & n.flags) !== 0),
    15990 & n.subtreeFlags || o)
  ) {
    (o = dn.transition), (dn.transition = null);
    var s = pe;
    pe = 1;
    var a = ce;
    (ce |= 4),
      (cp.current = null),
      wI(e, n),
      c1(n, e),
      q2(ah),
      (oc = !!sh),
      (ah = sh = null),
      (e.current = n),
      kI(n, e, i),
      t2(),
      (ce = a),
      (pe = s),
      (dn.transition = o);
  } else e.current = n;
  if (
    (jl && ((jl = !1), (Fr = e), (Sc = i)),
    (o = e.pendingLanes),
    o === 0 && (Vr = null),
    i2(n.stateNode, r),
    Ht(e, He()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (xc) throw ((xc = !1), (e = Eh), (Eh = null), e);
  return (
    1 & Sc && e.tag !== 0 && So(),
    (o = e.pendingLanes),
    1 & o ? (e === Rh ? $s++ : (($s = 0), (Rh = e))) : ($s = 0),
    Wr(),
    null
  );
}
function So() {
  if (Fr !== null) {
    var e = Yb(Sc),
      t = dn.transition,
      n = pe;
    try {
      if (((dn.transition = null), (pe = 16 > e ? 16 : e), Fr === null))
        var r = !1;
      else {
        if (((e = Fr), (Fr = null), (Sc = 0), 6 & ce)) throw Error(M(331));
        var i = ce;
        for (ce |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child;
          if (16 & V.flags) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (V = c; V !== null; ) {
                  var u = V;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vs(8, u, o);
                  }
                  var f = u.child;
                  if (f !== null) (f.return = u), (V = f);
                  else
                    for (; V !== null; ) {
                      u = V;
                      var d = u.sibling,
                        p = u.return;
                      if ((s1(u), u === c)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = p), (V = d);
                        break;
                      }
                      V = p;
                    }
                }
              }
              var g = o.alternate;
              if (g !== null) {
                var v = g.child;
                if (v !== null) {
                  g.child = null;
                  do {
                    var x = v.sibling;
                    (v.sibling = null), (v = x);
                  } while (v !== null);
                }
              }
              V = o;
            }
          }
          if (2064 & o.subtreeFlags && s !== null) (s.return = o), (V = s);
          else
            e: for (; V !== null; ) {
              if (((o = V), 2048 & o.flags))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Vs(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (V = m);
                break e;
              }
              V = o.return;
            }
        }
        var h = e.current;
        for (V = h; V !== null; ) {
          s = V;
          var y = s.child;
          if (2064 & s.subtreeFlags && y !== null) (y.return = s), (V = y);
          else
            e: for (s = h; V !== null; ) {
              if (((a = V), 2048 & a.flags))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lc(9, a);
                  }
                } catch (k) {
                  Ve(a, a.return, k);
                }
              if (a === s) {
                V = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (V = S);
                break e;
              }
              V = a.return;
            }
        }
        if (
          ((ce = i), Wr(), jn && typeof jn.onPostCommitFiberRoot == "function")
        )
          try {
            jn.onPostCommitFiberRoot(Cc, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (pe = n), (dn.transition = t);
    }
  }
  return !1;
}
function bb(e, t, n) {
  (t = Ro(n, t)),
    (t = Gx(e, t, 1)),
    (e = Ar(e, t, 1)),
    (t = Pt()),
    e !== null && (ra(e, 1, t), Ht(e, t));
}
function Ve(e, t, n) {
  if (e.tag === 3) bb(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        bb(t, e, n);
        break;
      }
      if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Vr === null || !Vr.has(r)))
        ) {
          (e = Ro(n, e)),
            (e = Kx(t, e, 1)),
            (t = Ar(t, e, 1)),
            (e = Pt()),
            t !== null && (ra(t, 1, e), Ht(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function _I(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Pt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    et === e &&
      (at & n) === n &&
      (qe === 4 || (qe === 3 && (130023424 & at) === at && 500 > He() - fp)
        ? bi(e, 0)
        : (up |= n)),
    Ht(e, t);
}
function v1(e, t) {
  t === 0 &&
    (1 & e.mode
      ? ((t = _l), (_l <<= 1), !(130023424 & _l) && (_l = 4194304))
      : (t = 1));
  var n = Pt();
  (e = fr(e, t)), e !== null && (ra(e, t, n), Ht(e, n));
}
function II(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), v1(e, n);
}
function FI(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), v1(e, n);
}
var g1;
g1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || zt.current) $t = !0;
    else {
      if (!(e.lanes & n) && !(128 & t.flags)) return ($t = !1), yI(e, t, n);
      $t = (131072 & e.flags) !== 0;
    }
  else ($t = !1), Re && 1048576 & t.flags && bx(t, dc, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ql(e, t), (e = t.pendingProps);
      var i = ko(t, yt.current);
      xo(t, n), (i = ip(null, t, r, e, i, n));
      var o = op();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Nt(r) ? ((o = !0), uc(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Jh(t),
            (i.updater = Ic),
            (t.stateNode = i),
            (i._reactInternals = t),
            vh(t, r, e, n),
            (t = bh(null, t, r, !0, o, n)))
          : ((t.tag = 0), Re && o && Xh(t), Rt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ql(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = MI(r)),
          (e = Sn(r, e)),
          i)
        ) {
          case 0:
            t = yh(null, t, r, e, n);
            break e;
          case 1:
            t = cb(null, t, r, e, n);
            break e;
          case 11:
            t = ab(null, t, r, e, n);
            break e;
          case 14:
            t = lb(null, t, r, Sn(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Sn(r, i)),
        yh(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Sn(r, i)),
        cb(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Jx(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          kx(e, t),
          mc(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated)) {
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            256 & t.flags)
          ) {
            (i = Ro(Error(M(423)), t)), (t = ub(e, t, r, n, i));
            break e;
          }
          if (r !== i) {
            (i = Ro(Error(M(424)), t)), (t = ub(e, t, r, n, i));
            break e;
          }
          for (
            qt = Dr(t.stateNode.containerInfo.firstChild),
              Qt = t,
              Re = !0,
              kn = null,
              n = Rx(t, null, r, n),
              t.child = n;
            n;

          )
            (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
        } else {
          if ((Co(), r === i)) {
            t = dr(e, t, n);
            break e;
          }
          Rt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Px(t),
        e === null && hh(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        lh(r, i) ? (s = null) : o !== null && lh(r, o) && (t.flags |= 32),
        Zx(e, t),
        Rt(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && hh(t), null;
    case 13:
      return e1(e, t, n);
    case 4:
      return (
        ep(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = To(t, null, r, n)) : Rt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Sn(r, i)),
        ab(e, t, r, i, n)
      );
    case 7:
      return Rt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Rt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Rt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          ye(hc, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (En(o.value, s)) {
            if (o.children === i.children && !zt.current) {
              t = dr(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = lr(-1, n & -n)), (l.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      ph(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(M(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  ph(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Rt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        xo(t, n),
        (i = hn(i)),
        (r = r(i)),
        (t.flags |= 1),
        Rt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Sn(r, t.pendingProps)),
        (i = Sn(r.type, i)),
        lb(e, t, r, i, n)
      );
    case 15:
      return qx(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Sn(r, i)),
        ql(e, t),
        (t.tag = 1),
        Nt(r) ? ((e = !0), uc(t)) : (e = !1),
        xo(t, n),
        Tx(t, r, i),
        vh(t, r, i, n),
        bh(null, t, r, !0, e, n)
      );
    case 19:
      return t1(e, t, n);
    case 22:
      return Qx(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function y1(e, t) {
  return jb(e, t);
}
function LI(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function fn(e, t, n, r) {
  return new LI(e, t, n, r);
}
function mp(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function MI(e) {
  if (typeof e == "function") return mp(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Oh)) return 11;
    if (e === Dh) return 14;
  }
  return 2;
}
function $r(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = fn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = 14680064 & e.flags),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Jl(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) mp(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case io:
        return xi(n.children, i, o, t);
      case Mh:
        (s = 8), (i |= 8);
        break;
      case zd:
        return (
          (e = fn(12, n, t, 2 | i)), (e.elementType = zd), (e.lanes = o), e
        );
      case Nd:
        return (e = fn(13, n, t, i)), (e.elementType = Nd), (e.lanes = o), e;
      case Hd:
        return (e = fn(19, n, t, i)), (e.elementType = Hd), (e.lanes = o), e;
      case Eb:
        return Oc(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Cb:
              s = 10;
              break e;
            case Tb:
              s = 9;
              break e;
            case Oh:
              s = 11;
              break e;
            case Dh:
              s = 14;
              break e;
            case Er:
              (s = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = fn(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function xi(e, t, n, r) {
  return (e = fn(7, e, r, t)), (e.lanes = n), e;
}
function Oc(e, t, n, r) {
  return (
    (e = fn(22, e, r, t)),
    (e.elementType = Eb),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Vd(e, t, n) {
  return (e = fn(6, e, null, t)), (e.lanes = n), e;
}
function Bd(e, t, n) {
  return (
    (t = fn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function OI(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Sd(0)),
    (this.expirationTimes = Sd(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Sd(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function vp(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new OI(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = fn(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Jh(o),
    e
  );
}
function DI(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ro,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function b1(e) {
  if (!e) return Nr;
  e = e._reactInternals;
  e: {
    if (Ri(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Nt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Nt(n)) return gx(e, n, t);
  }
  return t;
}
function x1(e, t, n, r, i, o, s, a, l) {
  return (
    (e = vp(n, r, !0, e, i, o, s, a, l)),
    (e.context = b1(null)),
    (n = e.current),
    (r = Pt()),
    (i = Br(n)),
    (o = lr(r, i)),
    (o.callback = t ?? null),
    Ar(n, o, i),
    (e.current.lanes = i),
    ra(e, i, r),
    Ht(e, r),
    e
  );
}
function Dc(e, t, n, r) {
  var i = t.current,
    o = Pt(),
    s = Br(i);
  return (
    (n = b1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = lr(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ar(i, t, s)),
    e !== null && (Tn(e, i, s, o), Yl(e, i, s)),
    s
  );
}
function kc(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function xb(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function gp(e, t) {
  xb(e, t), (e = e.alternate) && xb(e, t);
}
function AI() {
  return null;
}
var S1 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function yp(e) {
  this._internalRoot = e;
}
Ac.prototype.render = yp.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  Dc(e, t, null, null);
};
Ac.prototype.unmount = yp.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ti(function () {
      Dc(null, e, null, null);
    }),
      (t[ur] = null);
  }
};
function Ac(e) {
  this._internalRoot = e;
}
Ac.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qb();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Pr.length && t !== 0 && t < Pr[n].priority; n++);
    Pr.splice(n, 0, e), n === 0 && Zb(e);
  }
};
function bp(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Vc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Sb() {}
function VI(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = kc(s);
        o.call(c);
      };
    }
    var s = x1(t, r, e, 0, null, !1, !1, "", Sb);
    return (
      (e._reactRootContainer = s),
      (e[ur] = s.current),
      Gs(e.nodeType === 8 ? e.parentNode : e),
      Ti(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = kc(l);
      a.call(c);
    };
  }
  var l = vp(e, 0, !1, null, null, !1, !1, "", Sb);
  return (
    (e._reactRootContainer = l),
    (e[ur] = l.current),
    Gs(e.nodeType === 8 ? e.parentNode : e),
    Ti(function () {
      Dc(t, l, n, r);
    }),
    l
  );
}
function Bc(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = kc(s);
        a.call(l);
      };
    }
    Dc(t, s, e, i);
  } else s = VI(n, t, e, i, r);
  return kc(s);
}
Gb = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = _s(t.pendingLanes);
        n !== 0 &&
          (Bh(t, 1 | n), Ht(t, He()), !(6 & ce) && ((Po = He() + 500), Wr()));
      }
      break;
    case 13:
      Ti(function () {
        var r = fr(e, 1);
        if (r !== null) {
          var i = Pt();
          Tn(r, e, 1, i);
        }
      }),
        gp(e, 1);
  }
};
$h = function (e) {
  if (e.tag === 13) {
    var t = fr(e, 134217728);
    if (t !== null) {
      var n = Pt();
      Tn(t, e, 134217728, n);
    }
    gp(e, 134217728);
  }
};
Kb = function (e) {
  if (e.tag === 13) {
    var t = Br(e),
      n = fr(e, t);
    if (n !== null) {
      var r = Pt();
      Tn(n, e, t, r);
    }
    gp(e, t);
  }
};
qb = function () {
  return pe;
};
Qb = function (e, t) {
  var n = pe;
  try {
    return (pe = e), t();
  } finally {
    pe = n;
  }
};
Zd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ud(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Pc(r);
            if (!i) throw Error(M(90));
            Pb(r), Ud(r, i);
          }
        }
      }
      break;
    case "textarea":
      Ib(e, n);
      break;
    case "select":
      (t = n.value), t != null && vo(e, !!n.multiple, t, !1);
  }
};
Vb = dp;
Bb = Ti;
var BI = { usingClientEntryPoint: !1, Events: [oa, lo, Pc, Db, Ab, dp] },
  Ts = {
    findFiberByHostInstance: vi,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  $I = {
    bundleType: Ts.bundleType,
    version: Ts.version,
    rendererPackageName: Ts.rendererPackageName,
    rendererConfig: Ts.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: hr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Nb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ts.findFiberByHostInstance || AI,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
  ((Es = __REACT_DEVTOOLS_GLOBAL_HOOK__), !Es.isDisabled && Es.supportsFiber)
)
  try {
    (Cc = Es.inject($I)), (jn = Es);
  } catch {}
var Es;
Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = BI;
Jt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bp(t)) throw Error(M(200));
  return DI(e, t, null, n);
};
Jt.createRoot = function (e, t) {
  if (!bp(e)) throw Error(M(299));
  var n = !1,
    r = "",
    i = S1;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = vp(e, 1, !1, null, null, n, !1, r, i)),
    (e[ur] = t.current),
    Gs(e.nodeType === 8 ? e.parentNode : e),
    new yp(t)
  );
};
Jt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = Nb(t)), (e = e === null ? null : e.stateNode), e;
};
Jt.flushSync = function (e) {
  return Ti(e);
};
Jt.hydrate = function (e, t, n) {
  if (!Vc(t)) throw Error(M(200));
  return Bc(null, e, t, !0, n);
};
Jt.hydrateRoot = function (e, t, n) {
  if (!bp(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = S1;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = x1(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[ur] = t.current),
    Gs(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Ac(t);
};
Jt.render = function (e, t, n) {
  if (!Vc(t)) throw Error(M(200));
  return Bc(null, e, t, !1, n);
};
Jt.unmountComponentAtNode = function (e) {
  if (!Vc(e)) throw Error(M(40));
  return (
    !!e._reactRootContainer &&
    (Ti(function () {
      Bc(null, null, e, !1, function () {
        (e._reactRootContainer = null), (e[ur] = null);
      });
    }),
    !0)
  );
};
Jt.unstable_batchedUpdates = dp;
Jt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Vc(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return Bc(e, t, n, !1, r);
};
Jt.version = "18.2.0-next-9e3b772b8-20220608";
function w1() {
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function"
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w1);
    } catch (e) {
      console.error(e);
    }
}
w1();
var tn = Jt,
  xp = tn,
  zI = tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  NI = tn.createPortal,
  HI = tn.createRoot,
  jI = tn.findDOMNode,
  WI = tn.flushSync,
  UI = tn.hydrate,
  XI = tn.hydrateRoot,
  YI = tn.render,
  GI = tn.unmountComponentAtNode,
  KI = tn.unstable_batchedUpdates,
  qI = tn.unstable_renderSubtreeIntoContainer,
  QI = tn.version;
var JI = an({
    "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0);
      var t = class {
        constructor() {
          (this.hex = "#000000"),
            (this.rgb_r = 0),
            (this.rgb_g = 0),
            (this.rgb_b = 0),
            (this.xyz_x = 0),
            (this.xyz_y = 0),
            (this.xyz_z = 0),
            (this.luv_l = 0),
            (this.luv_u = 0),
            (this.luv_v = 0),
            (this.lch_l = 0),
            (this.lch_c = 0),
            (this.lch_h = 0),
            (this.hsluv_h = 0),
            (this.hsluv_s = 0),
            (this.hsluv_l = 0),
            (this.hpluv_h = 0),
            (this.hpluv_p = 0),
            (this.hpluv_l = 0),
            (this.r0s = 0),
            (this.r0i = 0),
            (this.r1s = 0),
            (this.r1i = 0),
            (this.g0s = 0),
            (this.g0i = 0),
            (this.g1s = 0),
            (this.g1i = 0),
            (this.b0s = 0),
            (this.b0i = 0),
            (this.b1s = 0),
            (this.b1i = 0);
        }
        static fromLinear(n) {
          return n <= 0.0031308
            ? 12.92 * n
            : 1.055 * Math.pow(n, 1 / 2.4) - 0.055;
        }
        static toLinear(n) {
          return n > 0.04045 ? Math.pow((n + 0.055) / 1.055, 2.4) : n / 12.92;
        }
        static yToL(n) {
          return n <= t.epsilon
            ? (n / t.refY) * t.kappa
            : 116 * Math.pow(n / t.refY, 1 / 3) - 16;
        }
        static lToY(n) {
          return n <= 8
            ? (t.refY * n) / t.kappa
            : t.refY * Math.pow((n + 16) / 116, 3);
        }
        static rgbChannelToHex(n) {
          let r = Math.round(n * 255),
            i = r % 16,
            o = ((r - i) / 16) | 0;
          return t.hexChars.charAt(o) + t.hexChars.charAt(i);
        }
        static hexToRgbChannel(n, r) {
          let i = t.hexChars.indexOf(n.charAt(r)),
            o = t.hexChars.indexOf(n.charAt(r + 1));
          return (i * 16 + o) / 255;
        }
        static distanceFromOriginAngle(n, r, i) {
          let o = r / (Math.sin(i) - n * Math.cos(i));
          return o < 0 ? 1 / 0 : o;
        }
        static distanceFromOrigin(n, r) {
          return Math.abs(r) / Math.sqrt(Math.pow(n, 2) + 1);
        }
        static min6(n, r, i, o, s, a) {
          return Math.min(
            n,
            Math.min(r, Math.min(i, Math.min(o, Math.min(s, a))))
          );
        }
        rgbToHex() {
          (this.hex = "#"),
            (this.hex += t.rgbChannelToHex(this.rgb_r)),
            (this.hex += t.rgbChannelToHex(this.rgb_g)),
            (this.hex += t.rgbChannelToHex(this.rgb_b));
        }
        hexToRgb() {
          (this.hex = this.hex.toLowerCase()),
            (this.rgb_r = t.hexToRgbChannel(this.hex, 1)),
            (this.rgb_g = t.hexToRgbChannel(this.hex, 3)),
            (this.rgb_b = t.hexToRgbChannel(this.hex, 5));
        }
        xyzToRgb() {
          (this.rgb_r = t.fromLinear(
            t.m_r0 * this.xyz_x + t.m_r1 * this.xyz_y + t.m_r2 * this.xyz_z
          )),
            (this.rgb_g = t.fromLinear(
              t.m_g0 * this.xyz_x + t.m_g1 * this.xyz_y + t.m_g2 * this.xyz_z
            )),
            (this.rgb_b = t.fromLinear(
              t.m_b0 * this.xyz_x + t.m_b1 * this.xyz_y + t.m_b2 * this.xyz_z
            ));
        }
        rgbToXyz() {
          let n = t.toLinear(this.rgb_r),
            r = t.toLinear(this.rgb_g),
            i = t.toLinear(this.rgb_b);
          (this.xyz_x =
            0.41239079926595 * n + 0.35758433938387 * r + 0.18048078840183 * i),
            (this.xyz_y =
              0.21263900587151 * n +
              0.71516867876775 * r +
              0.072192315360733 * i),
            (this.xyz_z =
              0.019330818715591 * n +
              0.11919477979462 * r +
              0.95053215224966 * i);
        }
        xyzToLuv() {
          let n = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
            r = 4 * this.xyz_x,
            i = 9 * this.xyz_y;
          n !== 0 ? ((r /= n), (i /= n)) : ((r = NaN), (i = NaN)),
            (this.luv_l = t.yToL(this.xyz_y)),
            this.luv_l === 0
              ? ((this.luv_u = 0), (this.luv_v = 0))
              : ((this.luv_u = 13 * this.luv_l * (r - t.refU)),
                (this.luv_v = 13 * this.luv_l * (i - t.refV)));
        }
        luvToXyz() {
          if (this.luv_l === 0) {
            (this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0);
            return;
          }
          let n = this.luv_u / (13 * this.luv_l) + t.refU,
            r = this.luv_v / (13 * this.luv_l) + t.refV;
          (this.xyz_y = t.lToY(this.luv_l)),
            (this.xyz_x = 0 - (9 * this.xyz_y * n) / ((n - 4) * r - n * r)),
            (this.xyz_z =
              (9 * this.xyz_y - 15 * r * this.xyz_y - r * this.xyz_x) /
              (3 * r));
        }
        luvToLch() {
          if (
            ((this.lch_l = this.luv_l),
            (this.lch_c = Math.sqrt(
              this.luv_u * this.luv_u + this.luv_v * this.luv_v
            )),
            this.lch_c < 1e-8)
          )
            this.lch_h = 0;
          else {
            let n = Math.atan2(this.luv_v, this.luv_u);
            (this.lch_h = (n * 180) / Math.PI),
              this.lch_h < 0 && (this.lch_h = 360 + this.lch_h);
          }
        }
        lchToLuv() {
          let n = (this.lch_h / 180) * Math.PI;
          (this.luv_l = this.lch_l),
            (this.luv_u = Math.cos(n) * this.lch_c),
            (this.luv_v = Math.sin(n) * this.lch_c);
        }
        calculateBoundingLines(n) {
          let r = Math.pow(n + 16, 3) / 1560896,
            i = r > t.epsilon ? r : n / t.kappa,
            o = i * (284517 * t.m_r0 - 94839 * t.m_r2),
            s = i * (838422 * t.m_r2 + 769860 * t.m_r1 + 731718 * t.m_r0),
            a = i * (632260 * t.m_r2 - 126452 * t.m_r1),
            l = i * (284517 * t.m_g0 - 94839 * t.m_g2),
            c = i * (838422 * t.m_g2 + 769860 * t.m_g1 + 731718 * t.m_g0),
            u = i * (632260 * t.m_g2 - 126452 * t.m_g1),
            f = i * (284517 * t.m_b0 - 94839 * t.m_b2),
            d = i * (838422 * t.m_b2 + 769860 * t.m_b1 + 731718 * t.m_b0),
            p = i * (632260 * t.m_b2 - 126452 * t.m_b1);
          (this.r0s = o / a),
            (this.r0i = (s * n) / a),
            (this.r1s = o / (a + 126452)),
            (this.r1i = ((s - 769860) * n) / (a + 126452)),
            (this.g0s = l / u),
            (this.g0i = (c * n) / u),
            (this.g1s = l / (u + 126452)),
            (this.g1i = ((c - 769860) * n) / (u + 126452)),
            (this.b0s = f / p),
            (this.b0i = (d * n) / p),
            (this.b1s = f / (p + 126452)),
            (this.b1i = ((d - 769860) * n) / (p + 126452));
        }
        calcMaxChromaHpluv() {
          let n = t.distanceFromOrigin(this.r0s, this.r0i),
            r = t.distanceFromOrigin(this.r1s, this.r1i),
            i = t.distanceFromOrigin(this.g0s, this.g0i),
            o = t.distanceFromOrigin(this.g1s, this.g1i),
            s = t.distanceFromOrigin(this.b0s, this.b0i),
            a = t.distanceFromOrigin(this.b1s, this.b1i);
          return t.min6(n, r, i, o, s, a);
        }
        calcMaxChromaHsluv(n) {
          let r = (n / 360) * Math.PI * 2,
            i = t.distanceFromOriginAngle(this.r0s, this.r0i, r),
            o = t.distanceFromOriginAngle(this.r1s, this.r1i, r),
            s = t.distanceFromOriginAngle(this.g0s, this.g0i, r),
            a = t.distanceFromOriginAngle(this.g1s, this.g1i, r),
            l = t.distanceFromOriginAngle(this.b0s, this.b0i, r),
            c = t.distanceFromOriginAngle(this.b1s, this.b1i, r);
          return t.min6(i, o, s, a, l, c);
        }
        hsluvToLch() {
          if (this.hsluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hsluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hsluv_l),
              this.calculateBoundingLines(this.hsluv_l);
            let n = this.calcMaxChromaHsluv(this.hsluv_h);
            this.lch_c = (n / 100) * this.hsluv_s;
          }
          this.lch_h = this.hsluv_h;
        }
        lchToHsluv() {
          if (this.lch_l > 99.9999999) (this.hsluv_s = 0), (this.hsluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hsluv_s = 0), (this.hsluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHsluv(this.lch_h);
            (this.hsluv_s = (this.lch_c / n) * 100),
              (this.hsluv_l = this.lch_l);
          }
          this.hsluv_h = this.lch_h;
        }
        hpluvToLch() {
          if (this.hpluv_l > 99.9999999) (this.lch_l = 100), (this.lch_c = 0);
          else if (this.hpluv_l < 1e-8) (this.lch_l = 0), (this.lch_c = 0);
          else {
            (this.lch_l = this.hpluv_l),
              this.calculateBoundingLines(this.hpluv_l);
            let n = this.calcMaxChromaHpluv();
            this.lch_c = (n / 100) * this.hpluv_p;
          }
          this.lch_h = this.hpluv_h;
        }
        lchToHpluv() {
          if (this.lch_l > 99.9999999) (this.hpluv_p = 0), (this.hpluv_l = 100);
          else if (this.lch_l < 1e-8) (this.hpluv_p = 0), (this.hpluv_l = 0);
          else {
            this.calculateBoundingLines(this.lch_l);
            let n = this.calcMaxChromaHpluv();
            (this.hpluv_p = (this.lch_c / n) * 100),
              (this.hpluv_l = this.lch_l);
          }
          this.hpluv_h = this.lch_h;
        }
        hsluvToRgb() {
          this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hpluvToRgb() {
          this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb();
        }
        hsluvToHex() {
          this.hsluvToRgb(), this.rgbToHex();
        }
        hpluvToHex() {
          this.hpluvToRgb(), this.rgbToHex();
        }
        rgbToHsluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHsluv();
        }
        rgbToHpluv() {
          this.rgbToXyz(),
            this.xyzToLuv(),
            this.luvToLch(),
            this.lchToHpluv(),
            this.lchToHpluv();
        }
        hexToHsluv() {
          this.hexToRgb(), this.rgbToHsluv();
        }
        hexToHpluv() {
          this.hexToRgb(), this.rgbToHpluv();
        }
      };
      (e.Hsluv = t),
        (t.hexChars = "0123456789abcdef"),
        (t.refY = 1),
        (t.refU = 0.19783000664283),
        (t.refV = 0.46831999493879),
        (t.kappa = 903.2962962),
        (t.epsilon = 0.0088564516),
        (t.m_r0 = 3.240969941904521),
        (t.m_r1 = -1.537383177570093),
        (t.m_r2 = -0.498610760293),
        (t.m_g0 = -0.96924363628087),
        (t.m_g1 = 1.87596750150772),
        (t.m_g2 = 0.041555057407175),
        (t.m_b0 = 0.055630079696993),
        (t.m_b1 = -0.20397695888897),
        (t.m_b2 = 1.056971514242878);
    },
  }),
  eF = an({
    "../../../node_modules/eventemitter3/index.js"(e, t) {
      "use strict";
      var n = Object.prototype.hasOwnProperty,
        r = "~";
      function i() {}
      Object.create &&
        ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
      function o(c, u, f) {
        (this.fn = c), (this.context = u), (this.once = f || !1);
      }
      function s(c, u, f, d, p) {
        if (typeof f != "function")
          throw new TypeError("The listener must be a function");
        var g = new o(f, d || c, p),
          v = r ? r + u : u;
        return (
          c._events[v]
            ? c._events[v].fn
              ? (c._events[v] = [c._events[v], g])
              : c._events[v].push(g)
            : ((c._events[v] = g), c._eventsCount++),
          c
        );
      }
      function a(c, u) {
        --c._eventsCount === 0 ? (c._events = new i()) : delete c._events[u];
      }
      function l() {
        (this._events = new i()), (this._eventsCount = 0);
      }
      (l.prototype.eventNames = function () {
        var u = [],
          f,
          d;
        if (this._eventsCount === 0) return u;
        for (d in (f = this._events))
          n.call(f, d) && u.push(r ? d.slice(1) : d);
        return Object.getOwnPropertySymbols
          ? u.concat(Object.getOwnPropertySymbols(f))
          : u;
      }),
        (l.prototype.listeners = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          if (!d) return [];
          if (d.fn) return [d.fn];
          for (var p = 0, g = d.length, v = new Array(g); p < g; p++)
            v[p] = d[p].fn;
          return v;
        }),
        (l.prototype.listenerCount = function (u) {
          var f = r ? r + u : u,
            d = this._events[f];
          return d ? (d.fn ? 1 : d.length) : 0;
        }),
        (l.prototype.emit = function (u, f, d, p, g, v) {
          var x = r ? r + u : u;
          if (!this._events[x]) return !1;
          var m = this._events[x],
            h = arguments.length,
            y,
            S;
          if (m.fn) {
            switch ((m.once && this.removeListener(u, m.fn, void 0, !0), h)) {
              case 1:
                return m.fn.call(m.context), !0;
              case 2:
                return m.fn.call(m.context, f), !0;
              case 3:
                return m.fn.call(m.context, f, d), !0;
              case 4:
                return m.fn.call(m.context, f, d, p), !0;
              case 5:
                return m.fn.call(m.context, f, d, p, g), !0;
              case 6:
                return m.fn.call(m.context, f, d, p, g, v), !0;
            }
            for (S = 1, y = new Array(h - 1); S < h; S++)
              y[S - 1] = arguments[S];
            m.fn.apply(m.context, y);
          } else {
            var k = m.length,
              w;
            for (S = 0; S < k; S++)
              switch (
                (m[S].once && this.removeListener(u, m[S].fn, void 0, !0), h)
              ) {
                case 1:
                  m[S].fn.call(m[S].context);
                  break;
                case 2:
                  m[S].fn.call(m[S].context, f);
                  break;
                case 3:
                  m[S].fn.call(m[S].context, f, d);
                  break;
                case 4:
                  m[S].fn.call(m[S].context, f, d, p);
                  break;
                default:
                  if (!y)
                    for (w = 1, y = new Array(h - 1); w < h; w++)
                      y[w - 1] = arguments[w];
                  m[S].fn.apply(m[S].context, y);
              }
          }
          return !0;
        }),
        (l.prototype.on = function (u, f, d) {
          return s(this, u, f, d, !1);
        }),
        (l.prototype.once = function (u, f, d) {
          return s(this, u, f, d, !0);
        }),
        (l.prototype.removeListener = function (u, f, d, p) {
          var g = r ? r + u : u;
          if (!this._events[g]) return this;
          if (!f) return a(this, g), this;
          var v = this._events[g];
          if (v.fn)
            v.fn === f &&
              (!p || v.once) &&
              (!d || v.context === d) &&
              a(this, g);
          else {
            for (var x = 0, m = [], h = v.length; x < h; x++)
              (v[x].fn !== f ||
                (p && !v[x].once) ||
                (d && v[x].context !== d)) &&
                m.push(v[x]);
            m.length
              ? (this._events[g] = m.length === 1 ? m[0] : m)
              : a(this, g);
          }
          return this;
        }),
        (l.prototype.removeAllListeners = function (u) {
          var f;
          return (
            u
              ? ((f = r ? r + u : u), this._events[f] && a(this, f))
              : ((this._events = new i()), (this._eventsCount = 0)),
            this
          );
        }),
        (l.prototype.off = l.prototype.removeListener),
        (l.prototype.addListener = l.prototype.on),
        (l.prefixed = r),
        (l.EventEmitter = l),
        typeof t < "u" && (t.exports = l);
    },
  }),
  em = an({
    "../../../node_modules/process/browser.js"(e, t) {
      var n = (t.exports = {}),
        r,
        i;
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function s() {
        throw new Error("clearTimeout has not been defined");
      }
      (function () {
        try {
          typeof setTimeout == "function" ? (r = setTimeout) : (r = o);
        } catch {
          r = o;
        }
        try {
          typeof clearTimeout == "function" ? (i = clearTimeout) : (i = s);
        } catch {
          i = s;
        }
      })();
      function a(m) {
        if (r === setTimeout) return setTimeout(m, 0);
        if ((r === o || !r) && setTimeout)
          return (r = setTimeout), setTimeout(m, 0);
        try {
          return r(m, 0);
        } catch {
          try {
            return r.call(null, m, 0);
          } catch {
            return r.call(this, m, 0);
          }
        }
      }
      function l(m) {
        if (i === clearTimeout) return clearTimeout(m);
        if ((i === s || !i) && clearTimeout)
          return (i = clearTimeout), clearTimeout(m);
        try {
          return i(m);
        } catch {
          try {
            return i.call(null, m);
          } catch {
            return i.call(this, m);
          }
        }
      }
      var c = [],
        u = !1,
        f,
        d = -1;
      function p() {
        !u ||
          !f ||
          ((u = !1), f.length ? (c = f.concat(c)) : (d = -1), c.length && g());
      }
      function g() {
        if (!u) {
          var m = a(p);
          u = !0;
          for (var h = c.length; h; ) {
            for (f = c, c = []; ++d < h; ) f && f[d].run();
            (d = -1), (h = c.length);
          }
          (f = null), (u = !1), l(m);
        }
      }
      n.nextTick = function (m) {
        var h = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var y = 1; y < arguments.length; y++) h[y - 1] = arguments[y];
        c.push(new v(m, h)), c.length === 1 && !u && a(g);
      };
      function v(m, h) {
        (this.fun = m), (this.array = h);
      }
      (v.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {});
      function x() {}
      (n.on = x),
        (n.addListener = x),
        (n.once = x),
        (n.off = x),
        (n.removeListener = x),
        (n.removeAllListeners = x),
        (n.emit = x),
        (n.prependListener = x),
        (n.prependOnceListener = x),
        (n.listeners = function (m) {
          return [];
        }),
        (n.binding = function (m) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (m) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
  }),
  tF = an({
    "../../../node_modules/@juggle/resize-observer/lib/exports/resize-observer.umd.js"(
      e,
      t
    ) {
      (function (n, r) {
        typeof e == "object" && typeof t < "u"
          ? r(e)
          : typeof define == "function" && define.amd
          ? define(["exports"], r)
          : ((n = typeof globalThis < "u" ? globalThis : n || self),
            r((n.ResizeObserver = {})));
      })(e, function (n) {
        "use strict";
        var r = [],
          i = function () {
            return r.some(function (P) {
              return P.activeTargets.length > 0;
            });
          },
          o = function () {
            return r.some(function (P) {
              return P.skippedTargets.length > 0;
            });
          },
          s = "ResizeObserver loop completed with undelivered notifications.",
          a = function () {
            var P;
            typeof ErrorEvent == "function"
              ? (P = new ErrorEvent("error", { message: s }))
              : ((P = document.createEvent("Event")),
                P.initEvent("error", !1, !1),
                (P.message = s)),
              L.dispatchEvent(P);
          },
          l;
        (function (P) {
          (P.BORDER_BOX = "border-box"),
            (P.CONTENT_BOX = "content-box"),
            (P.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
        })(l || (l = {}));
        var c = function (P) {
            return Object.freeze(P);
          },
          u = (function () {
            function P(_, O) {
              (this.inlineSize = _), (this.blockSize = O), c(this);
            }
            return P;
          })(),
          f = (function () {
            function P(_, O, H, le) {
              return (
                (this.x = _),
                (this.y = O),
                (this.width = H),
                (this.height = le),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                c(this)
              );
            }
            return (
              (P.prototype.toJSON = function () {
                var _ = this,
                  O = _.x,
                  H = _.y,
                  le = _.top,
                  kt = _.right,
                  rt = _.bottom,
                  ze = _.left,
                  Zn = _.width,
                  Xt = _.height;
                return {
                  x: O,
                  y: H,
                  top: le,
                  right: kt,
                  bottom: rt,
                  left: ze,
                  width: Zn,
                  height: Xt,
                };
              }),
              (P.fromRect = function (_) {
                return new P(_.x, _.y, _.width, _.height);
              }),
              P
            );
          })(),
          d = function (P) {
            return P instanceof SVGElement && "getBBox" in P;
          },
          p = function (P) {
            if (d(P)) {
              var _ = P.getBBox(),
                O = _.width,
                H = _.height;
              return !O && !H;
            }
            var le = P,
              kt = le.offsetWidth,
              rt = le.offsetHeight;
            return !(kt || rt || P.getClientRects().length);
          },
          g = function (P) {
            var _, O;
            if (P instanceof Element) return !0;
            var H =
              (O =
                (_ = P) === null || _ === void 0 ? void 0 : _.ownerDocument) ===
                null || O === void 0
                ? void 0
                : O.defaultView;
            return !!(H && P instanceof H.Element);
          },
          v = function (P) {
            switch (P.tagName) {
              case "INPUT":
                if (P.type !== "image") break;
              case "VIDEO":
              case "AUDIO":
              case "EMBED":
              case "OBJECT":
              case "CANVAS":
              case "IFRAME":
              case "IMG":
                return !0;
            }
            return !1;
          },
          x = typeof L < "u" ? L : {},
          m = new WeakMap(),
          h = /auto|scroll/,
          y = /^tb|vertical/,
          S = /msie|trident/i.test(x.navigator && x.navigator.userAgent),
          k = function (P) {
            return parseFloat(P || "0");
          },
          w = function (P, _, O) {
            return (
              P === void 0 && (P = 0),
              _ === void 0 && (_ = 0),
              O === void 0 && (O = !1),
              new u((O ? _ : P) || 0, (O ? P : _) || 0)
            );
          },
          T = c({
            devicePixelContentBoxSize: w(),
            borderBoxSize: w(),
            contentBoxSize: w(),
            contentRect: new f(0, 0, 0, 0),
          }),
          E = function (P, _) {
            if ((_ === void 0 && (_ = !1), m.has(P) && !_)) return m.get(P);
            if (p(P)) return m.set(P, T), T;
            var O = getComputedStyle(P),
              H = d(P) && P.ownerSVGElement && P.getBBox(),
              le = !S && O.boxSizing === "border-box",
              kt = y.test(O.writingMode || ""),
              rt = !H && h.test(O.overflowY || ""),
              ze = !H && h.test(O.overflowX || ""),
              Zn = H ? 0 : k(O.paddingTop),
              Xt = H ? 0 : k(O.paddingRight),
              ei = H ? 0 : k(O.paddingBottom),
              Vi = H ? 0 : k(O.paddingLeft),
              Vk = H ? 0 : k(O.borderTopWidth),
              Bk = H ? 0 : k(O.borderRightWidth),
              $k = H ? 0 : k(O.borderBottomWidth),
              zk = H ? 0 : k(O.borderLeftWidth),
              Cm = Vi + Xt,
              Tm = Zn + ei,
              Pu = zk + Bk,
              _u = Vk + $k,
              Em = ze ? P.offsetHeight - _u - P.clientHeight : 0,
              Rm = rt ? P.offsetWidth - Pu - P.clientWidth : 0,
              Nk = le ? Cm + Pu : 0,
              Hk = le ? Tm + _u : 0,
              Oa = H ? H.width : k(O.width) - Nk - Rm,
              Da = H ? H.height : k(O.height) - Hk - Em,
              jk = Oa + Cm + Rm + Pu,
              Wk = Da + Tm + Em + _u,
              Pm = c({
                devicePixelContentBoxSize: w(
                  Math.round(Oa * devicePixelRatio),
                  Math.round(Da * devicePixelRatio),
                  kt
                ),
                borderBoxSize: w(jk, Wk, kt),
                contentBoxSize: w(Oa, Da, kt),
                contentRect: new f(Vi, Zn, Oa, Da),
              });
            return m.set(P, Pm), Pm;
          },
          F = function (P, _, O) {
            var H = E(P, O),
              le = H.borderBoxSize,
              kt = H.contentBoxSize,
              rt = H.devicePixelContentBoxSize;
            switch (_) {
              case l.DEVICE_PIXEL_CONTENT_BOX:
                return rt;
              case l.BORDER_BOX:
                return le;
              default:
                return kt;
            }
          },
          I = (function () {
            function P(_) {
              var O = E(_);
              (this.target = _),
                (this.contentRect = O.contentRect),
                (this.borderBoxSize = c([O.borderBoxSize])),
                (this.contentBoxSize = c([O.contentBoxSize])),
                (this.devicePixelContentBoxSize = c([
                  O.devicePixelContentBoxSize,
                ]));
            }
            return P;
          })(),
          $ = function (P) {
            if (p(P)) return 1 / 0;
            for (var _ = 0, O = P.parentNode; O; ) (_ += 1), (O = O.parentNode);
            return _;
          },
          B = function () {
            var P = 1 / 0,
              _ = [];
            r.forEach(function (rt) {
              if (rt.activeTargets.length !== 0) {
                var ze = [];
                rt.activeTargets.forEach(function (Xt) {
                  var ei = new I(Xt.target),
                    Vi = $(Xt.target);
                  ze.push(ei),
                    (Xt.lastReportedSize = F(Xt.target, Xt.observedBox)),
                    Vi < P && (P = Vi);
                }),
                  _.push(function () {
                    rt.callback.call(rt.observer, ze, rt.observer);
                  }),
                  rt.activeTargets.splice(0, rt.activeTargets.length);
              }
            });
            for (var O = 0, H = _; O < H.length; O++) {
              var le = H[O];
              le();
            }
            return P;
          },
          q = function (P) {
            r.forEach(function (O) {
              O.activeTargets.splice(0, O.activeTargets.length),
                O.skippedTargets.splice(0, O.skippedTargets.length),
                O.observationTargets.forEach(function (le) {
                  le.isActive() &&
                    ($(le.target) > P
                      ? O.activeTargets.push(le)
                      : O.skippedTargets.push(le));
                });
            });
          },
          J = function () {
            var P = 0;
            for (q(P); i(); ) (P = B()), q(P);
            return o() && a(), P > 0;
          },
          W,
          ne = [],
          Y = function () {
            return ne.splice(0).forEach(function (P) {
              return P();
            });
          },
          G = function (P) {
            if (!W) {
              var _ = 0,
                O = document.createTextNode(""),
                H = { characterData: !0 };
              new MutationObserver(function () {
                return Y();
              }).observe(O, H),
                (W = function () {
                  O.textContent = "" + (_ ? _-- : _++);
                });
            }
            ne.push(P), W();
          },
          N = function (P) {
            G(function () {
              requestAnimationFrame(P);
            });
          },
          ee = 0,
          re = function () {
            return !!ee;
          },
          ae = 250,
          te = {
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0,
          },
          oe = [
            "resize",
            "load",
            "transitionend",
            "animationend",
            "animationstart",
            "animationiteration",
            "keyup",
            "keydown",
            "mouseup",
            "mousedown",
            "mouseover",
            "mouseout",
            "blur",
            "focus",
          ],
          wt = function (P) {
            return P === void 0 && (P = 0), Date.now() + P;
          },
          me = !1,
          Ze = (function () {
            function P() {
              var _ = this;
              (this.stopped = !0),
                (this.listener = function () {
                  return _.schedule();
                });
            }
            return (
              (P.prototype.run = function (_) {
                var O = this;
                if ((_ === void 0 && (_ = ae), !me)) {
                  me = !0;
                  var H = wt(_);
                  N(function () {
                    var le = !1;
                    try {
                      le = J();
                    } finally {
                      if (((me = !1), (_ = H - wt()), !re())) return;
                      le ? O.run(1e3) : _ > 0 ? O.run(_) : O.start();
                    }
                  });
                }
              }),
              (P.prototype.schedule = function () {
                this.stop(), this.run();
              }),
              (P.prototype.observe = function () {
                var _ = this,
                  O = function () {
                    return _.observer && _.observer.observe(document.body, te);
                  };
                document.body ? O() : x.addEventListener("DOMContentLoaded", O);
              }),
              (P.prototype.start = function () {
                var _ = this;
                this.stopped &&
                  ((this.stopped = !1),
                  (this.observer = new MutationObserver(this.listener)),
                  this.observe(),
                  oe.forEach(function (O) {
                    return x.addEventListener(O, _.listener, !0);
                  }));
              }),
              (P.prototype.stop = function () {
                var _ = this;
                this.stopped ||
                  (this.observer && this.observer.disconnect(),
                  oe.forEach(function (O) {
                    return x.removeEventListener(O, _.listener, !0);
                  }),
                  (this.stopped = !0));
              }),
              P
            );
          })(),
          Xe = new Ze(),
          vn = function (P) {
            !ee && P > 0 && Xe.start(), (ee += P), !ee && Xe.stop();
          },
          fe = function (P) {
            return !d(P) && !v(P) && getComputedStyle(P).display === "inline";
          },
          Qn = (function () {
            function P(_, O) {
              (this.target = _),
                (this.observedBox = O || l.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
            }
            return (
              (P.prototype.isActive = function () {
                var _ = F(this.target, this.observedBox, !0);
                return (
                  fe(this.target) && (this.lastReportedSize = _),
                  this.lastReportedSize.inlineSize !== _.inlineSize ||
                    this.lastReportedSize.blockSize !== _.blockSize
                );
              }),
              P
            );
          })(),
          Wt = (function () {
            function P(_, O) {
              (this.activeTargets = []),
                (this.skippedTargets = []),
                (this.observationTargets = []),
                (this.observer = _),
                (this.callback = O);
            }
            return P;
          })(),
          Pn = new WeakMap(),
          gn = function (P, _) {
            for (var O = 0; O < P.length; O += 1)
              if (P[O].target === _) return O;
            return -1;
          },
          Ut = (function () {
            function P() {}
            return (
              (P.connect = function (_, O) {
                var H = new Wt(_, O);
                Pn.set(_, H);
              }),
              (P.observe = function (_, O, H) {
                var le = Pn.get(_),
                  kt = le.observationTargets.length === 0;
                gn(le.observationTargets, O) < 0 &&
                  (kt && r.push(le),
                  le.observationTargets.push(new Qn(O, H && H.box)),
                  vn(1),
                  Xe.schedule());
              }),
              (P.unobserve = function (_, O) {
                var H = Pn.get(_),
                  le = gn(H.observationTargets, O),
                  kt = H.observationTargets.length === 1;
                le >= 0 &&
                  (kt && r.splice(r.indexOf(H), 1),
                  H.observationTargets.splice(le, 1),
                  vn(-1));
              }),
              (P.disconnect = function (_) {
                var O = this,
                  H = Pn.get(_);
                H.observationTargets.slice().forEach(function (le) {
                  return O.unobserve(_, le.target);
                }),
                  H.activeTargets.splice(0, H.activeTargets.length);
              }),
              P
            );
          })(),
          Ai = (function () {
            function P(_) {
              if (arguments.length === 0)
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present."
                );
              if (typeof _ != "function")
                throw new TypeError(
                  "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."
                );
              Ut.connect(this, _);
            }
            return (
              (P.prototype.observe = function (_, O) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!g(_))
                  throw new TypeError(
                    "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                Ut.observe(this, _, O);
              }),
              (P.prototype.unobserve = function (_) {
                if (arguments.length === 0)
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present."
                  );
                if (!g(_))
                  throw new TypeError(
                    "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element"
                  );
                Ut.unobserve(this, _);
              }),
              (P.prototype.disconnect = function () {
                Ut.disconnect(this);
              }),
              (P.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
              }),
              P
            );
          })();
        (n.ResizeObserver = Ai),
          (n.ResizeObserverEntry = I),
          (n.ResizeObserverSize = u),
          Object.defineProperty(n, "__esModule", { value: !0 });
      });
    },
  }),
  nF = an({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
      e
    ) {
      "use strict";
      var t = typeof Symbol == "function" && Symbol.for,
        n = t ? Symbol.for("react.element") : 60103,
        r = t ? Symbol.for("react.portal") : 60106,
        i = t ? Symbol.for("react.fragment") : 60107,
        o = t ? Symbol.for("react.strict_mode") : 60108,
        s = t ? Symbol.for("react.profiler") : 60114,
        a = t ? Symbol.for("react.provider") : 60109,
        l = t ? Symbol.for("react.context") : 60110,
        c = t ? Symbol.for("react.async_mode") : 60111,
        u = t ? Symbol.for("react.concurrent_mode") : 60111,
        f = t ? Symbol.for("react.forward_ref") : 60112,
        d = t ? Symbol.for("react.suspense") : 60113,
        p = t ? Symbol.for("react.suspense_list") : 60120,
        g = t ? Symbol.for("react.memo") : 60115,
        v = t ? Symbol.for("react.lazy") : 60116,
        x = t ? Symbol.for("react.block") : 60121,
        m = t ? Symbol.for("react.fundamental") : 60117,
        h = t ? Symbol.for("react.responder") : 60118,
        y = t ? Symbol.for("react.scope") : 60119;
      function S(w) {
        if (typeof w == "object" && w !== null) {
          var T = w.$$typeof;
          switch (T) {
            case n:
              switch (((w = w.type), w)) {
                case c:
                case u:
                case i:
                case s:
                case o:
                case d:
                  return w;
                default:
                  switch (((w = w && w.$$typeof), w)) {
                    case l:
                    case f:
                    case v:
                    case g:
                    case a:
                      return w;
                    default:
                      return T;
                  }
              }
            case r:
              return T;
          }
        }
      }
      function k(w) {
        return S(w) === u;
      }
      (e.AsyncMode = c),
        (e.ConcurrentMode = u),
        (e.ContextConsumer = l),
        (e.ContextProvider = a),
        (e.Element = n),
        (e.ForwardRef = f),
        (e.Fragment = i),
        (e.Lazy = v),
        (e.Memo = g),
        (e.Portal = r),
        (e.Profiler = s),
        (e.StrictMode = o),
        (e.Suspense = d),
        (e.isAsyncMode = function (w) {
          return k(w) || S(w) === c;
        }),
        (e.isConcurrentMode = k),
        (e.isContextConsumer = function (w) {
          return S(w) === l;
        }),
        (e.isContextProvider = function (w) {
          return S(w) === a;
        }),
        (e.isElement = function (w) {
          return typeof w == "object" && w !== null && w.$$typeof === n;
        }),
        (e.isForwardRef = function (w) {
          return S(w) === f;
        }),
        (e.isFragment = function (w) {
          return S(w) === i;
        }),
        (e.isLazy = function (w) {
          return S(w) === v;
        }),
        (e.isMemo = function (w) {
          return S(w) === g;
        }),
        (e.isPortal = function (w) {
          return S(w) === r;
        }),
        (e.isProfiler = function (w) {
          return S(w) === s;
        }),
        (e.isStrictMode = function (w) {
          return S(w) === o;
        }),
        (e.isSuspense = function (w) {
          return S(w) === d;
        }),
        (e.isValidElementType = function (w) {
          return (
            typeof w == "string" ||
            typeof w == "function" ||
            w === i ||
            w === u ||
            w === s ||
            w === o ||
            w === d ||
            w === p ||
            (typeof w == "object" &&
              w !== null &&
              (w.$$typeof === v ||
                w.$$typeof === g ||
                w.$$typeof === a ||
                w.$$typeof === l ||
                w.$$typeof === f ||
                w.$$typeof === m ||
                w.$$typeof === h ||
                w.$$typeof === y ||
                w.$$typeof === x))
          );
        }),
        (e.typeOf = S);
    },
  }),
  rF = an({
    "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(
      e,
      t
    ) {
      "use strict";
      t.exports = nF();
    },
  }),
  pu = an({
    "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
      e,
      t
    ) {
      "use strict";
      var n = rF(),
        r = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        a = {};
      (a[n.ForwardRef] = o), (a[n.Memo] = s);
      function l(x) {
        return n.isMemo(x) ? s : a[x.$$typeof] || r;
      }
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        g = Object.prototype;
      function v(x, m, h) {
        if (typeof m != "string") {
          if (g) {
            var y = p(m);
            y && y !== g && v(x, y, h);
          }
          var S = u(m);
          f && (S = S.concat(f(m)));
          for (var k = l(x), w = l(m), T = 0; T < S.length; ++T) {
            var E = S[T];
            if (!i[E] && !(h && h[E]) && !(w && w[E]) && !(k && k[E])) {
              var F = d(m, E);
              try {
                c(x, E, F);
              } catch {}
            }
          }
        }
        return x;
      }
      t.exports = v;
    },
  }),
  iF = an({
    "../../../node_modules/archy/index.js"(e, t) {
      t.exports = function n(r, i, o) {
        i === void 0 && (i = ""), o || (o = {});
        var s = function (u) {
          var f = {
            "\u2502": "|",
            "\u2514": "`",
            "\u251C": "+",
            "\u2500": "-",
            "\u252C": "-",
          };
          return o.unicode === !1 ? f[u] : u;
        };
        typeof r == "string" && (r = { label: r });
        var a = r.nodes || [],
          l = (r.label || "").split(`
`),
          c =
            `
` +
            i +
            (a.length ? s("\u2502") : " ") +
            " ";
        return (
          i +
          l.join(c) +
          `
` +
          a
            .map(function (u, f) {
              var d = f === a.length - 1,
                p = u.nodes && u.nodes.length,
                g = i + (d ? " " : s("\u2502")) + " ";
              return (
                i +
                s(d ? "\u2514" : "\u251C") +
                s("\u2500") +
                s(p ? "\u252C" : "\u2500") +
                " " +
                n(u, g, o).slice(i.length + 2)
              );
            })
            .join("")
        );
      };
    },
  }),
  oF = an({
    "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
      e,
      t
    ) {
      (function () {
        function n(m, h) {
          document.addEventListener
            ? m.addEventListener("scroll", h, !1)
            : m.attachEvent("scroll", h);
        }
        function r(m) {
          document.body
            ? m()
            : document.addEventListener
            ? document.addEventListener("DOMContentLoaded", function h() {
                document.removeEventListener("DOMContentLoaded", h), m();
              })
            : document.attachEvent("onreadystatechange", function h() {
                (document.readyState == "interactive" ||
                  document.readyState == "complete") &&
                  (document.detachEvent("onreadystatechange", h), m());
              });
        }
        function i(m) {
          (this.a = document.createElement("div")),
            this.a.setAttribute("aria-hidden", "true"),
            this.a.appendChild(document.createTextNode(m)),
            (this.b = document.createElement("span")),
            (this.c = document.createElement("span")),
            (this.h = document.createElement("span")),
            (this.f = document.createElement("span")),
            (this.g = -1),
            (this.b.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.c.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.f.style.cssText =
              "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
            (this.h.style.cssText =
              "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
            this.b.appendChild(this.h),
            this.c.appendChild(this.f),
            this.a.appendChild(this.b),
            this.a.appendChild(this.c);
        }
        function o(m, h) {
          m.a.style.cssText =
            "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
            h +
            ";";
        }
        function s(m) {
          var h = m.a.offsetWidth,
            y = h + 100;
          return (
            (m.f.style.width = y + "px"),
            (m.c.scrollLeft = y),
            (m.b.scrollLeft = m.b.scrollWidth + 100),
            m.g !== h ? ((m.g = h), !0) : !1
          );
        }
        function a(m, h) {
          function y() {
            var k = S;
            s(k) && k.a.parentNode && h(k.g);
          }
          var S = m;
          n(m.b, y), n(m.c, y), s(m);
        }
        function l(m, h) {
          var y = h || {};
          (this.family = m),
            (this.style = y.style || "normal"),
            (this.weight = y.weight || "normal"),
            (this.stretch = y.stretch || "normal");
        }
        var c = null,
          u = null,
          f = null,
          d = null;
        function p() {
          if (u === null)
            if (g() && /Apple/.test(L.navigator.vendor)) {
              var m = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                L.navigator.userAgent
              );
              u = !!m && 603 > parseInt(m[1], 10);
            } else u = !1;
          return u;
        }
        function g() {
          return d === null && (d = !!document.fonts), d;
        }
        function v() {
          if (f === null) {
            var m = document.createElement("div");
            try {
              m.style.font = "condensed 100px sans-serif";
            } catch {}
            f = m.style.font !== "";
          }
          return f;
        }
        function x(m, h) {
          return [m.style, m.weight, v() ? m.stretch : "", "100px", h].join(
            " "
          );
        }
        (l.prototype.load = function (m, h) {
          var y = this,
            S = m || "BESbswy",
            k = 0,
            w = h || 3e3,
            T = new Date().getTime();
          return new Promise(function (E, F) {
            if (g() && !p()) {
              var I = new Promise(function (B, q) {
                  function J() {
                    new Date().getTime() - T >= w
                      ? q(Error("" + w + "ms timeout exceeded"))
                      : document.fonts
                          .load(x(y, '"' + y.family + '"'), S)
                          .then(function (W) {
                            1 <= W.length ? B() : setTimeout(J, 25);
                          }, q);
                  }
                  J();
                }),
                $ = new Promise(function (B, q) {
                  k = setTimeout(function () {
                    q(Error("" + w + "ms timeout exceeded"));
                  }, w);
                });
              Promise.race([$, I]).then(function () {
                clearTimeout(k), E(y);
              }, F);
            } else
              r(function () {
                function B() {
                  var oe;
                  (oe =
                    (Y != -1 && G != -1) ||
                    (Y != -1 && N != -1) ||
                    (G != -1 && N != -1)) &&
                    ((oe = Y != G && Y != N && G != N) ||
                      (c === null &&
                        ((oe = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                          L.navigator.userAgent
                        )),
                        (c =
                          !!oe &&
                          (536 > parseInt(oe[1], 10) ||
                            (parseInt(oe[1], 10) === 536 &&
                              11 >= parseInt(oe[2], 10))))),
                      (oe =
                        c &&
                        ((Y == ee && G == ee && N == ee) ||
                          (Y == re && G == re && N == re) ||
                          (Y == ae && G == ae && N == ae)))),
                    (oe = !oe)),
                    oe &&
                      (te.parentNode && te.parentNode.removeChild(te),
                      clearTimeout(k),
                      E(y));
                }
                function q() {
                  if (new Date().getTime() - T >= w)
                    te.parentNode && te.parentNode.removeChild(te),
                      F(Error("" + w + "ms timeout exceeded"));
                  else {
                    var oe = document.hidden;
                    (oe === !0 || oe === void 0) &&
                      ((Y = J.a.offsetWidth),
                      (G = W.a.offsetWidth),
                      (N = ne.a.offsetWidth),
                      B()),
                      (k = setTimeout(q, 50));
                  }
                }
                var J = new i(S),
                  W = new i(S),
                  ne = new i(S),
                  Y = -1,
                  G = -1,
                  N = -1,
                  ee = -1,
                  re = -1,
                  ae = -1,
                  te = document.createElement("div");
                (te.dir = "ltr"),
                  o(J, x(y, "sans-serif")),
                  o(W, x(y, "serif")),
                  o(ne, x(y, "monospace")),
                  te.appendChild(J.a),
                  te.appendChild(W.a),
                  te.appendChild(ne.a),
                  document.body.appendChild(te),
                  (ee = J.a.offsetWidth),
                  (re = W.a.offsetWidth),
                  (ae = ne.a.offsetWidth),
                  q(),
                  a(J, function (oe) {
                    (Y = oe), B();
                  }),
                  o(J, x(y, '"' + y.family + '",sans-serif')),
                  a(W, function (oe) {
                    (G = oe), B();
                  }),
                  o(W, x(y, '"' + y.family + '",serif')),
                  a(ne, function (oe) {
                    (N = oe), B();
                  }),
                  o(ne, x(y, '"' + y.family + '",monospace'));
              });
          });
        }),
          typeof t == "object"
            ? (t.exports = l)
            : ((L.FontFaceObserver = l),
              (L.FontFaceObserver.prototype.load = l.prototype.load));
      })();
    },
  });
function Hp(e, t) {
  let n = { style: t };
  return b.isValidElement(e) ? b.cloneElement(e, n) : b.createElement(e, n);
}
var sF = class extends Error {},
  YS = class extends Error {},
  aF = class extends ge {
    constructor(e) {
      super(e),
        (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey });
    }
    static getDerivedStateFromError(e) {
      return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
      if (e.forceUpdateKey !== t.forceUpdateKey) {
        let n = { forceUpdateKey: e.forceUpdateKey };
        return t.error && (n.error = void 0), n;
      }
      return null;
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (!(this.state.error instanceof sF)) {
        let n = new YS();
        throw ((n.cause = this.state.error), n);
      }
      let { notFoundPage: e, defaultPageStyle: t } = this.props;
      if (!e) throw this.state.error;
      return Hp(e, t);
    }
  },
  lF = ":([a-z]\\w*)",
  Fi = new RegExp(lF, "gi");
function GS(e, t) {
  return e.replace(Fi, (n, r) => {
    let i = t[r];
    return typeof i != "string" || i.length === 0 ? n : encodeURIComponent(i);
  });
}
function KS(e, t) {
  if (!e.startsWith("/") || !t.startsWith("/"))
    throw new Error("from/to paths are expected to be absolute");
  let [n] = k1(e),
    [r, i] = k1(t),
    o = cF(n, r);
  return (
    o === "" && (o = "."),
    !o.startsWith(".") && !o.startsWith("/") && (o = "./" + o),
    o + "/" + i
  );
}
function k1(e) {
  let t = e.lastIndexOf("/");
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
var Sp = 46,
  Ao = 47,
  Qr = (e, t) => e.charCodeAt(t),
  C1 = (e, t) => e.lastIndexOf(t),
  Bo = (e, t, n) => e.slice(t, n);
function cF(e, t) {
  if (e === t || ((e = "/" + E1(e)), (t = "/" + E1(t)), e === t)) return "";
  let n = 1,
    r = e.length,
    i = r - n,
    o = 1,
    s = t.length - o,
    a = i < s ? i : s,
    l = -1,
    c = 0;
  for (; c < a; c++) {
    let f = Qr(e, n + c);
    if (f !== Qr(t, o + c)) break;
    f === Ao && (l = c);
  }
  if (c === a)
    if (s > a) {
      if (Qr(t, o + c) === Ao) return Bo(t, o + c + 1);
      if (c === 0) return Bo(t, o + c);
    } else i > a && (Qr(e, n + c) === Ao ? (l = c) : c === 0 && (l = 0));
  let u = "";
  for (c = n + l + 1; c <= r; ++c)
    (c === r || Qr(e, c) === Ao) && (u += u.length === 0 ? ".." : "/..");
  return `${u}${Bo(t, o + l)}`;
}
var uF = !1,
  $c = "/",
  T1 = (e) => e === Ao;
function E1(e) {
  let t = "",
    n = 0,
    r = -1,
    i = 0,
    o = 0;
  for (let s = 0; s <= e.length; ++s) {
    if (s < e.length) o = Qr(e, s);
    else {
      if (T1(o)) break;
      o = Ao;
    }
    if (T1(o)) {
      if (!(r === s - 1 || i === 1))
        if (i === 2) {
          if (
            t.length < 2 ||
            n !== 2 ||
            Qr(t, t.length - 1) !== Sp ||
            Qr(t, t.length - 2) !== Sp
          ) {
            if (t.length > 2) {
              let a = C1(t, $c);
              a === -1
                ? ((t = ""), (n = 0))
                : ((t = Bo(t, 0, a)), (n = t.length - 1 - C1(t, $c))),
                (r = s),
                (i = 0);
              continue;
            } else if (t.length !== 0) {
              (t = ""), (n = 0), (r = s), (i = 0);
              continue;
            }
          }
          uF && ((t += t.length > 0 ? `${$c}..` : ".."), (n = 2));
        } else
          t.length > 0
            ? (t += `${$c}${Bo(e, r + 1, s)}`)
            : (t = Bo(e, r + 1, s)),
            (n = s - r - 1);
      (r = s), (i = 0);
    } else o === Sp && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function qS(e) {
  let t = typeof L < "u" ? L.location.search : "";
  return t ? fF(t, e) : e;
}
function fF(e, t) {
  let n = t.indexOf("#"),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? "" : t.substring(n),
    o = r.indexOf("?");
  if (o === -1) return r + e + i;
  let s = new URLSearchParams(e),
    a = r.substring(o + 1),
    l = new URLSearchParams(a);
  for (let [c, u] of s) l.has(c) || l.append(c, u);
  return r.substring(0, o + 1) + l.toString() + i;
}
function ru(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function ua(e) {
  return typeof e == "string";
}
var dF = "preload";
function QS(e) {
  return typeof e == "object" && e !== null && !b.isValidElement(e) && dF in e;
}
function Y$(e) {
  let t = b.lazy(e),
    n,
    r,
    i = b.forwardRef(function (s, a) {
      return b.createElement(r ?? t, a ? { ref: a, ...s } : s);
    });
  return (
    (i.preload = () => (n || (n = e().then((o) => ((r = o.default), r))), n)), i
  );
}
function mu(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function hF(e) {
  return /bot|Mediapartners-Google|Google-PageRenderer|yandex|ia_archiver/iu.test(
    e
  );
}
function pF(e) {
  if ("scheduler" in L) {
    let t = { priority: e ? "user-blocking" : "user-visible" };
    if ("yield" in scheduler) return scheduler.yield(t);
    if ("postTask" in scheduler) return scheduler.postTask(() => {}, t);
  }
  return e
    ? Promise.resolve()
    : new Promise((t) => {
        setTimeout(t, 0);
      });
}
async function mF(e, t, n, r, i, o, s) {
  var a, l, c;
  let u = e,
    f = !1,
    d = { ...o },
    p = Array.from(u.matchAll(Fi)),
    g = await Promise.all(
      p.map(async (h) => {
        var y;
        let S = h?.[0],
          k = h?.[1];
        if (!S || !k)
          throw new Error(
            "Failed to replace path variables: unexpected regex match group"
          );
        let w = o[k];
        if (!w || !ua(w))
          throw new Error(`No slug found for path variable ${k}`);
        let T = await ((y = s?.[i]) === null || y === void 0
          ? void 0
          : y.call(s));
        if (!T || !t) return w;
        let E = await T.getRecordIdBySlug(w, t);
        if (!E) return w;
        let F = await T.getSlugByRecordId(E, n);
        if (!F) {
          f = !0;
          let I = await T.getSlugByRecordId(E, r);
          return I && (d[k] = I), I ?? w;
        }
        return (d[k] = F), F;
      })
    ),
    v = 0,
    x = "",
    m = !1;
  for (let h = 0; h < p.length; h++) {
    let y = p[h],
      S = g[h];
    !y ||
      !S ||
      ((x += u.substring(v, y.index)),
      (v =
        ((a = y.index) !== null && a !== void 0 ? a : 0) +
        ((c = (l = y[0]) === null || l === void 0 ? void 0 : l.length) !==
          null && c !== void 0
          ? c
          : 0)),
      (x += g[h]),
      (m = !0));
  }
  return m && (u = x), { path: u, pathVariables: d, isMissingInLocale: f };
}
async function vF({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: o,
  preserveQueryParams: s,
}) {
  let { path: a } = r,
    l = { path: a, pathVariables: i, isMissingInLocale: !1 };
  if (!a) return l;
  if (i && r.collectionId)
    try {
      l = await mF(a, e, t, n, r.collectionId, i, o);
    } catch {}
  return (
    t.slug && (l.path = "/" + t.slug + l.path),
    s && l.path && (l.path = qS(l.path)),
    l
  );
}
function gF(e, t, { global: n, routes: r }) {
  var i;
  return ((i = r[e]) === null || i === void 0 ? void 0 : i[t]) || n;
}
var yF = { global: void 0, routes: {} },
  ZS = b.createContext(yF);
function Q$({ children: e, value: t }) {
  return C(ZS.Provider, { value: t, children: e });
}
function bF() {
  return b.useContext(ZS);
}
var wp = 10,
  xF = 1e4;
function SF(e) {
  let t = wp,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < xF; ) (n = e.next(t)), r.push(n.value), (t += wp);
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(",")})`, duration: t - wp }
  );
}
var vr = (e) => `--view-transition-${e}`;
function jp(e) {
  return [parseFloat(e), e.endsWith("px") ? "px" : "%"];
}
function JS(e) {
  let { innerWidth: t, innerHeight: n } = L,
    [r, i] = jp(e.x),
    [o, s] = jp(e.y);
  return {
    x: i === "px" ? r : t * (r / 100),
    y: s === "px" ? o : n * (o / 100),
  };
}
var wF = {
    makeKeyframe: (e, t, n) => {
      let r = 0;
      return (
        ((n === "exit" &&
          e.angularDirection === "clockwise" &&
          t === "start") ||
          (n === "exit" &&
            e.angularDirection === "counter-clockwise" &&
            t === "end") ||
          (n === "enter" &&
            e.angularDirection === "counter-clockwise" &&
            t === "start") ||
          (n === "enter" &&
            e.angularDirection === "clockwise" &&
            t === "end")) &&
          (r = (e.sweepAngle / 360) * 100),
        `${vr("conic-offset")}: ${r}%;`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${vr("conic-offset")})`,
        r =
          (t === "exit" && e.angularDirection === "clockwise") ||
          (t === "enter" && e.angularDirection === "counter-clockwise"),
        i = r ? "transparent" : "black",
        o = r ? "black" : "transparent",
        s = "conic-gradient(from ";
      return (
        (s += `${e.angle}deg at ${e.x} ${e.y}, `),
        (s += `${i} 0%, ${i} ${n}, `),
        (s += `${o} ${n}, ${o} 100%)`),
        `mask-image: ${s}; -webkit-mask-image: ${s};`
      );
    },
    makePropertyRules: () => `
        @property ${vr("conic-offset")} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
  },
  kF = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = JS(e);
      return t === "start"
        ? `clip-path: circle(0 at ${n}px ${r}px);`
        : `clip-path: circle(${Math.hypot(
            Math.max(n, L.innerWidth - n),
            Math.max(r, L.innerHeight - r)
          )}px at ${n}px ${r}px);`;
    },
  },
  CF = {
    makeKeyframe: (e, t) => {
      let { x: n, y: r } = JS(e),
        i = L.innerHeight - r,
        o = L.innerWidth - n;
      return t === "start"
        ? `clip-path: inset(${r}px ${o}px ${i}px ${n}px round ${e.round}px);`
        : "clip-path: inset(0 round 0);";
    },
  },
  TF = {
    makeKeyframe: (e, t, n) => {
      let [, r] = jp(e.width),
        i = `0${r}`;
      return (
        ((t === "start" && n === "exit") || (t === "end" && n === "enter")) &&
          (i = e.width),
        `${vr("blinds-width")}: ${i};`
      );
    },
    makeStyles: (e, t) => {
      let n = `var(${vr("blinds-width")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "repeating-linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} 0px, ${r} ${n}, `),
        (o += `${i} ${n}, ${i} ${e.width})`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${vr("blinds-width")} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
  },
  EF = {
    makeKeyframe: (e, t, n) => {
      let r =
        (t === "start" && n === "exit") || (t === "end" && n === "enter")
          ? 1
          : 0;
      return `${vr("wipe-offset")}: ${r};`;
    },
    makeStyles: (e, t) => {
      let n = `var(${vr("wipe-offset")})`,
        r = t === "exit" ? "transparent" : "black",
        i = t === "exit" ? "black" : "transparent",
        o = "linear-gradient(";
      return (
        (o += e.angle + 90 + "deg, "),
        (o += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
        (o += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
        `mask-image: ${o}; -webkit-mask-image: ${o};`
      );
    },
    makePropertyRules: () => `
            @property ${vr("wipe-offset")} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
  },
  RF = { circle: kF, conic: wF, inset: CF, blinds: TF, wipe: EF },
  PF = {
    opacity: 1,
    x: "0px",
    y: "0px",
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
  };
function R1(e, t, n, r) {
  var i;
  let o = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (
    e.mask &&
      (o +=
        ((i = r?.makeKeyframe) === null || i === void 0
          ? void 0
          : i.call(r, e.mask, t, n)) || ""),
    o
  );
}
function _F(e) {
  return e ? RF[e] : void 0;
}
function P1(e, { transition: t, ...n }) {
  var r;
  let i = "view-transition-" + e,
    o = { duration: "0s", easing: "linear" };
  if (t.type === "tween")
    (o.duration = t.duration + "s"),
      (o.easing = `cubic-bezier(${t.ease.join(",")})`);
  else if (t.type === "spring") {
    let { easing: c, duration: u } = SF(
      ms({
        keyframes: [0, 1],
        stiffness: t.stiffness,
        damping: t.damping,
        mass: t.mass,
        restDelta: 0.001,
        restSpeed: 1e-4,
      })
    );
    (o.duration = u + "ms"), (o.easing = c);
  }
  let s = _F((r = n?.mask) === null || r === void 0 ? void 0 : r.type),
    a = R1(n, "start", e, s),
    l = R1({ ...PF, mask: n.mask }, "end", e, s);
  return (
    e === "exit" && ([a, l] = [l, a]),
    `
        ${n.mask && s?.makePropertyRules ? s.makePropertyRules(n.mask) : ""}

        @keyframes ${i} {
            0% {
                ${a}
            }

            100% {
                ${l}
            }
        }

        ::view-transition-${e === "enter" ? "new" : "old"}(root) {
            animation-name: ${i};
            animation-duration: ${o.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${o.easing};
            animation-fill-mode: both;
            ${n.mask && s?.makeStyles ? s.makeStyles(n.mask, e) : ""}
        }
    `
  );
}
var ew = "view-transition-styles",
  IF = {
    x: "0px",
    y: "0px",
    scale: 1,
    opacity: 1,
    rotate3d: !1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    mask: void 0,
    transition: {
      type: "tween",
      delay: 0,
      duration: 0.2,
      ease: [0.27, 0, 0.51, 1],
      stiffness: 400,
      damping: 30,
      mass: 1,
    },
  };
function FF({ exit: e = IF, enter: t }) {
  let n = document.createElement("style");
  n.id = ew;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  (e.mask ||
    t.mask ||
    e.opacity ||
    t.opacity ||
    e.transition.delay ||
    t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += P1("exit", e)),
    (r += P1("enter", t)),
    (n.textContent = r),
    document.head.appendChild(n);
}
function LF() {
  U.render(() => {
    let e = document.getElementById(ew);
    e && document.head.removeChild(e);
  });
}
function MF() {
  return !!document.startViewTransition;
}
function OF(e, t) {
  if (!MF()) return void e();
  FF(t);
  let n = document.startViewTransition(e);
  return (
    Promise.all([n.ready, n.finished])
      .then(LF)
      .catch(() => {}),
    n
  );
}
function tw() {
  let e = bF(),
    t = A(void 0);
  return (
    j(() => {
      t.current && (t.current(), (t.current = void 0));
    }),
    ve(
      (n, r, i) => {
        let o = gF(n, r, e);
        if (o) {
          let s = new Promise((l) => {
            t.current = l;
          });
          return OF(async () => {
            i(), await s;
          }, o);
        } else return i();
      },
      [e]
    )
  );
}
function _1(
  e,
  t,
  {
    currentRoutePath: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: a,
  }
) {
  let { path: l } = t;
  if (l)
    try {
      let c = vu(t, {
        currentRoutePath: n,
        currentPathVariables: r,
        hash: i,
        pathVariables: o,
        preserveQueryParams: a,
      });
      nw({ routeId: e, hash: i, pathVariables: o, localeId: s }, c);
    } catch {}
}
function DF(e, t) {
  L.history.replaceState(e, "", t);
}
function nw(e, t) {
  L.history.pushState(e, "", t);
}
function AF({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
}) {
  b.useLayoutEffect(() => {
    e || DF({ routeId: t, pathVariables: n, localeId: r });
  }, []);
}
function VF(e, t) {
  let n = tw(),
    r = b.useRef(void 0),
    i = b.useCallback(
      ({ state: s }) => {
        var a, l, c;
        if (!ru(s)) return;
        let { routeId: u, hash: f, pathVariables: d, localeId: p } = s;
        if (!ua(u)) return;
        let g = () => {
            t(
              u,
              ua(p) ? p : void 0,
              ua(f) ? f : void 0,
              ru(d) ? d : void 0,
              !1,
              !0
            );
          },
          v = n(e.current, u, g);
        v
          ? v.updateCallbackDone
              .then(
                (a = r.current) === null || a === void 0 ? void 0 : a.resolve
              )
              .catch(
                (l = r.current) === null || l === void 0 ? void 0 : l.reject
              )
          : (c = r.current) === null || c === void 0 || c.resolve();
      },
      [e, t, n]
    ),
    o = ve((s) => {
      s.navigationType === "traverse" &&
        s.intercept({
          async handler() {
            await new Promise((a, l) => {
              r.current = { resolve: a, reject: l };
            });
          },
          scroll: "after-transition",
        });
    }, []);
  b.useEffect(() => {
    var s;
    return (
      L.addEventListener("popstate", i),
      (s = L.navigation) === null ||
        s === void 0 ||
        s.addEventListener("navigate", o),
      () => {
        var a;
        L.removeEventListener("popstate", i),
          (a = L.navigation) === null ||
            a === void 0 ||
            a.removeEventListener("navigate", o);
      }
    );
  }, [i, o]);
}
function BF(e, t, n) {
  let r = mu(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Fi, (o, s) => {
    var a;
    return String((a = i[s]) !== null && a !== void 0 ? a : o);
  });
}
function vu(
  e,
  {
    currentRoutePath: t,
    currentPathVariables: n,
    hash: r,
    pathVariables: i,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: a,
  }
) {
  var l;
  let c = t ?? "/";
  n && (c = c.replace(Fi, (g, v) => String(n[v] || g)));
  let f = (l = e?.path) !== null && l !== void 0 ? l : "/";
  i && (f = f.replace(Fi, (g, v) => String(i[v] || g)));
  let d = BF(r, e, o),
    p = c === f && d;
  return (
    s && (f = KS(c, f)), (a || p) && (f = qS(f)), d && (f = `${f}#${d}`), f
  );
}
async function $F(e, t, n) {
  if (!e.path || !t) return !1;
  let i = `${n.slug ? `/${n.slug}` : ""}${GS(e.path, t)}`;
  return (await fetch(i, { method: "HEAD", redirect: "manual" })).type ===
    "opaqueredirect"
    ? ((L.location.href = L.location.origin + i), !0)
    : !1;
}
async function zF(e) {
  let t = await vF(e);
  if (t) {
    try {
      localStorage.setItem("preferredLocale", e.nextLocale.code);
    } catch {}
    try {
      if (typeof t.path != "string")
        throw new Error("Expected result.path to be a string");
      if (
        t.isMissingInLocale &&
        (await $F(e.route, t.pathVariables, e.nextLocale))
      )
        return;
      nw(
        {
          routeId: e.routeId,
          pathVariables: t.pathVariables,
          localeId: e.nextLocale.id,
          paginationInfo: L.history.state.paginationInfo,
        },
        t.path
      );
    } catch {}
    return t;
  }
}
function NF(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((i) => n[i] === r[i]);
}
var fa = [
    "mousedown",
    "mouseup",
    "touchcancel",
    "touchend",
    "touchstart",
    "auxclick",
    "dblclick",
    "pointercancel",
    "pointerdown",
    "pointerup",
    "dragend",
    "dragstart",
    "drop",
    "compositionend",
    "compositionstart",
    "keydown",
    "keypress",
    "keyup",
    "input",
    "textInput",
    "copy",
    "cut",
    "paste",
    "click",
    "change",
    "contextmenu",
    "reset",
  ],
  rw = (e) => {
    var t, n;
    !(
      (n = (t = e.target) === null || t === void 0 ? void 0 : t.closest) ===
        null || n === void 0
    ) &&
      n.call(t, "#main") &&
      (e.stopPropagation(),
      performance.mark("framer-react-event-handling-prevented"));
  };
typeof L < "u" &&
  (L.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__ = function () {
    if (!fa) return;
    let e = { capture: !0 };
    fa.forEach((t) => document.body.addEventListener(t, rw, e)),
      (L.__FRAMER_TURN_OFF_REACT_EVENT_HANDLING__ = void 0);
  });
function I1() {
  if (!fa) return;
  let e = { capture: !0 };
  fa.forEach((t) => document.body.removeEventListener(t, rw, e)), (fa = void 0);
}
function Fo(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (r) {
    console.warn(`Could not measure ${e}`, r);
  }
}
var F1 = !1,
  L1 = !1,
  M1 = !1;
function HF({ addHydrationMarkers: e, turnOffEventHandlerHack: t }) {
  let n = "framer-hydration-",
    r = `${n}start`,
    i = `${n}render-end`,
    o = `${n}layout-effects-end`,
    s = `${n}effects-end`,
    a = `${n}first-paint`;
  return (
    ft(() => {
      L1 || ((L1 = !0), e && (performance.mark(i), Fo(`${n}render`, r, i)));
    }, []),
    In(() => {
      M1 ||
        ((M1 = !0),
        e && (performance.mark(o), Fo(`${n}layout-effects`, i, o)),
        requestAnimationFrame(() => {
          var l, c, u;
          let f = `${n}browser-render-start`;
          e &&
            (performance.mark(f),
            Fo(
              `${n}uho`,
              (c =
                (l = performance.getEntriesByName(s)[0]) === null ||
                l === void 0
                  ? void 0
                  : l.name) !== null && c !== void 0
                ? c
                : (u = performance.getEntriesByName(o)[0]) === null ||
                  u === void 0
                ? void 0
                : u.name,
              f
            )),
            setTimeout(() => {
              t && I1(),
                e &&
                  (performance.mark(a),
                  Fo(`${n}time-to-first-paint`, r, a),
                  Fo(`${n}browser-render`, f, a));
            }, 0);
        }));
    }, []),
    j(() => {
      var l, c, u;
      F1 ||
        ((F1 = !0),
        t && I1(),
        e &&
          (performance.mark(s),
          Fo(
            `${n}effects`,
            (c =
              (l = performance.getEntriesByName(a)[0]) === null || l === void 0
                ? void 0
                : l.name) !== null && c !== void 0
              ? c
              : (u = performance.getEntriesByName(o)[0]) === null ||
                u === void 0
              ? void 0
              : u.name,
            s
          )));
    }, []),
    null
  );
}
function iw(e) {
  return b.useCallback((t) => e[t], [e]);
}
var tm = (() => b.createContext({}))();
function jF({ api: e, children: t }) {
  return C(tm.Provider, { value: e, children: t });
}
function Uo() {
  return b.useContext(tm);
}
function WF({ routes: e, children: t }) {
  let n = iw(e);
  return C(tm.Provider, { value: { getRoute: n }, children: t });
}
var UF = class extends ge {
    constructor() {
      super(...arguments), (this.state = { error: void 0 });
    }
    static getDerivedStateFromError(e) {
      return (
        console.error("Derived error in SuspenseErrorBoundary", e), { error: e }
      );
    }
    componentDidCatch(e, t) {
      var n;
      console.error("Caught error in SuspenseErrorBoundary", e, t),
        (n = L.__framer_events) === null ||
          n === void 0 ||
          n.push([
            "published_site_load_recoverable_error",
            { message: String(e), componentStack: t?.componentStack },
          ]);
    }
    render() {
      if (this.state.error === void 0) return this.props.children;
      if (this.state.error instanceof YS) throw this.state.error.cause;
      return C(qo, { children: this.props.fallbackChildren });
    }
  },
  XF = (() => (typeof L < "u" ? new Promise(() => {}) : null))();
function YF() {
  if (typeof L > "u") return null;
  throw XF;
}
function GF({ children: e }) {
  return C(UF, {
    fallbackChildren: e,
    children: C(qo, { fallback: C(YF, {}), children: e }),
  });
}
var O1 = "default";
function KF() {
  let [e, t] = b.useState(0);
  return [e, b.useCallback(() => t((n) => n + 1), [])];
}
var qF = async () => {},
  QF = { activeLocale: null, locales: [], setLocale: qF },
  ow = b.createContext(QF);
function sw() {
  return b.useContext(ow);
}
function ZF(e) {
  let t = `start-${e}`,
    n = `end-${e}`,
    r = A(void 0);
  return (
    j(() => {
      r.current && (r.current(), (r.current = void 0));
    }),
    ve(() => {
      let i = new Promise((o) => {
        r.current = o;
      });
      performance.mark(t),
        i
          .then(() => {
            performance.mark(n), performance.measure(e, t, n);
          })
          .catch(() => {});
    }, [e, t, n])
  );
}
function D1(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    tL(r, t);
    return;
  }
  n || L.scrollTo(0, 0);
}
function JF(e) {
  let t = b.useRef([]);
  return (
    b.useLayoutEffect(() => {
      var n;
      !((n = t.current) === null || n === void 0) &&
        n.length &&
        (t.current.forEach((r) => r()), (t.current = []));
    }, [e]),
    b.useCallback((n) => {
      t.current.push(n);
    }, [])
  );
}
function eL({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: i,
  collectionUtils: o,
  routes: s,
  initialLocaleId: a,
  locales: l = [],
  preserveQueryParams: c = !1,
  enableImproveInpDuringHydration: u = !1,
  addHydrationMarkers: f = !1,
}) {
  AF({ disabled: t, routeId: r, initialPathVariables: n, initialLocaleId: a });
  let d = tw(),
    p = ZF("route-change"),
    g = b.useRef(r),
    v = b.useRef(n),
    x = b.useRef(a),
    m = x.current,
    h = b.useMemo(() => {
      var Y;
      return (Y = l.find(({ id: G }) => (m ? G === m : G === O1))) !== null &&
        Y !== void 0
        ? Y
        : null;
    }, [m, l]),
    [y, S] = KF(),
    k = b.useMemo(
      () => ({
        activeLocale: h,
        locales: l,
        setLocale: async (Y) => {
          let G;
          ua(Y) ? (G = Y) : ru(Y) && (G = Y.id);
          let N = l.find(({ id: te }) => te === O1),
            ee = l.find(({ id: te }) => te === G);
          if (!ee) return;
          let re = g.current,
            ae = s[re];
          if (ae)
            try {
              let te = await zF({
                currentLocale: h,
                nextLocale: ee,
                route: ae,
                routeId: re,
                defaultLocale: N,
                pathVariables: v.current,
                collectionUtils: o,
                preserveQueryParams: c,
              });
              if (!te) return;
              (v.current = te.pathVariables),
                (x.current = ee.id),
                d(g.current, re, () => $i(S)),
                p();
            } catch {}
        },
      }),
      [h, o, S, l, p, c, s, d]
    ),
    w = JF(y),
    T = b.useCallback(
      (Y, G, N, ee, re = !1, ae = !1) => {
        (g.current = Y),
          (v.current = ee),
          (x.current = G),
          w(() => {
            D1(N, re, ae);
          }),
          $i(S),
          p();
      },
      [S, p, w]
    );
  VF(g, T);
  let E = b.useCallback(
      (Y, G, N, ee) => {
        var re, ae;
        let te = s[Y];
        if (N) {
          let me = new Set(),
            Ze = (re = te?.path) !== null && re !== void 0 ? re : "/";
          for (let Xe of Ze.matchAll(Fi)) {
            let vn = Xe[1];
            if (vn === void 0)
              throw new Error(
                "A matching path variable should not be undefined"
              );
            me.add(vn);
          }
          N = Object.fromEntries(
            Object.entries(N).filter(([Xe]) => me.has(Xe))
          );
        }
        let oe = mu(te, G);
        if (
          NF(
            { routeId: g.current, pathVariables: v.current },
            { routeId: Y, pathVariables: N }
          )
        ) {
          if (
            ((ae = L.history.state) === null || ae === void 0
              ? void 0
              : ae.hash) !== G &&
            !t
          ) {
            let me = s[Y];
            me &&
              _1(Y, me, {
                currentRoutePath: me.path,
                currentPathVariables: v.current,
                pathVariables: N,
                hash: G,
                localeId: x.current,
                preserveQueryParams: c,
              });
          }
          D1(oe, ee, !1);
          return;
        }
        if (!te) return;
        if (!t) {
          let me = s[g.current];
          _1(Y, te, {
            currentRoutePath: me?.path,
            currentPathVariables: v.current,
            hash: G,
            pathVariables: N,
            localeId: x.current,
            preserveQueryParams: c,
          });
        }
        let wt = () => T(Y, x.current, oe, N, ee, !1);
        d(g.current, Y, wt);
      },
      [s, t, T, d, c]
    ),
    F = iw(s),
    I = g.current,
    $ = v.current,
    B = b.useMemo(
      () => ({
        navigate: E,
        getRoute: F,
        currentRouteId: I,
        currentPathVariables: $,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: c,
      }),
      [E, F, I, $, s, o, c]
    ),
    q = s[g.current];
  if (!q) throw new Error(`Router cannot find route for ${g.current}`);
  let J = !h || !q.includedLocales || q.includedLocales.includes(h.id),
    W = q.path && $ ? GS(q.path, $) : q.path,
    ne = String(m) + W;
  return C(jF, {
    api: B,
    children: C(ow.Provider, {
      value: k,
      children: se(GF, {
        children: [
          C(aF, {
            notFoundPage: i,
            defaultPageStyle: e,
            forceUpdateKey: y,
            children: C(
              b.Fragment,
              { children: J ? Hp(q.page, e) : i && Hp(i, e) },
              ne
            ),
          }),
          C(HF, { addHydrationMarkers: f, turnOffEventHandlerHack: u }),
        ],
      }),
    }),
  });
}
function tL(e, t) {
  let n = t
    ? { behavior: "smooth", block: "start", inline: "nearest" }
    : void 0;
  e.scrollIntoView(n);
}
var zc, kp, A1;
function nL(e) {
  if (A1 !== e) {
    zc = {};
    for (let [t, { path: n }] of Object.entries(e))
      n && (zc[n] = { path: n, depth: rL(n), routeId: t });
    (kp = Object.values(zc)),
      kp.sort(({ depth: t }, { depth: n }) => n - t),
      (A1 = e);
  }
  return [zc, kp];
}
function aw(e, t, n = !0, r = []) {
  let [i, o] = nL(e),
    s,
    a,
    l = t;
  if (r.length > 0) {
    let d = l.split("/").find(Boolean);
    if (
      (d &&
        ((s = r.find(({ slug: p }) => p === d)),
        s && ((a = s.id), (l = l.substring(s.slug.length + 1)))),
      !a)
    ) {
      let p = r.find(({ slug: g }) => g === "");
      p && (a = p.id);
    }
  }
  let c = i[l];
  if (c) {
    let d = V1(l, c.path);
    if (d.isMatch)
      return {
        routeId: c.routeId,
        localeId: a,
        pathVariables: d.pathVariables,
      };
  }
  for (let { path: d, routeId: p } of o) {
    let g = V1(l, d);
    if (g.isMatch)
      return { routeId: p, localeId: a, pathVariables: g.pathVariables };
  }
  if (!n) throw new Error("No exact match found for path");
  let u = i["/"];
  if (u) return { routeId: u.routeId, localeId: a };
  let f = Object.keys(e)[0];
  if (!f) throw new Error("Router should not have undefined routes");
  return { routeId: f, localeId: a };
}
function rL(e) {
  let t = e.replace(/^\/|\/$/gu, "");
  return t === "" ? 0 : t.split("/").length;
}
function V1(e, t) {
  let n = [],
    i = iL(t).replace(Fi, (c, u) => (n.push(u), "([^/]+)")),
    o = new RegExp(i + "$"),
    s = e.match(o);
  if (!s) return { isMatch: !1 };
  if (s.length === 1) return { isMatch: !0 };
  let a = {},
    l = s.slice(1);
  for (let c = 0; c < n.length; ++c) {
    let u = n[c];
    if (u === void 0) continue;
    let f = l[c],
      d = a[u];
    if (d) {
      if (d !== f) return { isMatch: !1 };
      continue;
    }
    if (f === void 0)
      throw new Error("Path variable values cannot be undefined");
    a[u] = f;
  }
  return { isMatch: !0, pathVariables: a };
}
function iL(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&").replace(/-/gu, "\\x2d");
}
var oL = "page";
function B1(e) {
  return ru(e) && oL in e && e.page !== void 0;
}
var sL = (() => b.createContext(void 0))();
function gu() {
  var e;
  let t = Uo(),
    n = D(sL),
    r = n ?? t.currentRouteId;
  if (!r) return;
  let i = (e = t.getRoute) === null || e === void 0 ? void 0 : e.call(t, r);
  if (i)
    return { ...i, id: r, pathVariables: n ? void 0 : t.currentPathVariables };
}
function aL(e) {
  var t;
  let n = Uo();
  if (e)
    return (t = n.getRoute) === null || t === void 0 ? void 0 : t.call(n, e);
}
var nm = (() => typeof L < "u" && !hF(Me.userAgent))();
function lL(e, t = !0) {
  let { getRoute: n } = Uo();
  j(() => {
    if (!(!n || !t || !nm)) for (let r of e) lw(n(r));
  }, [e, n, t]);
}
async function lw(e) {
  if (!nm || !e) return;
  let t = e.page;
  if (!(!t || !QS(t))) {
    await pF();
    try {
      await t.preload();
    } catch {}
  }
}
function mz(e, t) {
  var n;
  let r = gu(),
    i = (n = aL(t)) !== null && n !== void 0 ? n : r;
  return b.useMemo(() => (i ? mu(i, e) : e), [e, i]);
}
var $1 = new Set();
function ma(e, ...t) {
  $1.has(e) || ($1.add(e), console.warn(e, ...t));
}
function cL(e, t, n) {
  let r = n ? `, use ${n} instead` : "",
    i = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  ma(i);
}
var cw = class {
    constructor() {
      R(this, "observers", new Set()), R(this, "transactions", {});
    }
    add(e) {
      this.observers.add(e);
      let t = !1;
      return () => {
        t || ((t = !0), this.remove(e));
      };
    }
    remove(e) {
      this.observers.delete(e);
    }
    notify(e, t) {
      if (t) {
        let n = this.transactions[t] || e;
        (n.value = e.value), (this.transactions[t] = n);
      } else this.callObservers(e);
    }
    finishTransaction(e) {
      let t = this.transactions[e];
      return delete this.transactions[e], this.callObservers(t, e);
    }
    callObservers(e, t) {
      let n = [];
      return (
        new Set(this.observers).forEach((r) => {
          typeof r == "function" ? r(e, t) : (r.update(e, t), n.push(r.finish));
        }),
        n
      );
    }
  },
  Qe = (() => {
    function e(t) {
      return (
        cL(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        Rn(t) ? t : new fL(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let n = Math.random(),
          r = new Set();
        t((s, a) => {
          s.set(a, n), r.add(s);
        }, n);
        let o = [];
        r.forEach((s) => {
          o.push(...s.finishTransaction(n));
        }),
          o.forEach((s) => {
            s(n);
          });
      }),
      (e.getNumber = (t, n = 0) => e.get(t, n)),
      (e.get = (t, n) => (t == null ? n : Rn(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
          let i = t[r];
          Rn(i) ? (n[r] = i.get()) : (n[r] = i);
        }
        return n;
      }),
      e
    );
  })(),
  z1 = "onUpdate",
  N1 = "finishTransaction";
function Rn(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    z1 in e &&
    e[z1] instanceof Function &&
    N1 in e &&
    e[N1] instanceof Function
  );
}
function uL(e, t) {
  return {
    interpolate(n, r) {
      let i = n.get(),
        o = r.get(),
        s = Qe(i);
      return (a) => {
        let l = t.interpolate(i, o)(a);
        return s.set(l), s;
      };
    },
    difference(n, r) {
      let i = n.get();
      return t.difference(i, r.get());
    },
  };
}
var fL = class {
  constructor(e) {
    (this.value = e), R(this, "observers", new cw());
  }
  static interpolationFor(e, t) {
    if (Rn(e)) return uL(e, t);
  }
  get() {
    return this.value;
  }
  set(e, t) {
    let n = this.value;
    Rn(e) && (e = e.get()), (this.value = e);
    let r = { value: e, oldValue: n };
    this.observers.notify(r, t);
  }
  finishTransaction(e) {
    return this.observers.finishTransaction(e);
  }
  onUpdate(e) {
    return this.observers.add(e);
  }
};
function Nc(e, t) {
  let r = 10 ** Math.round(Math.abs(t));
  return Math.round(e * r) / r;
}
function H1(e, t) {
  return t === 0
    ? Math.round(e)
    : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function xt(e, t) {
  return { x: e, y: t };
}
((e) => {
  (e.add = (...i) =>
    i.reduce((o, s) => ({ x: o.x + s.x, y: o.y + s.y }), { x: 0, y: 0 })),
    (e.subtract = (i, o) => ({ x: i.x - o.x, y: i.y - o.y })),
    (e.multiply = (i, o) => ({ x: i.x * o, y: i.y * o })),
    (e.divide = (i, o) => ({ x: i.x / o, y: i.y / o })),
    (e.absolute = (i) => ({ x: Math.abs(i.x), y: Math.abs(i.y) })),
    (e.reverse = (i) => ({ x: i.x * -1, y: i.y * -1 })),
    (e.pixelAligned = (i, o = { x: 0, y: 0 }) => ({
      x: H1(i.x, o.x),
      y: H1(i.y, o.y),
    })),
    (e.distance = (i, o) => {
      let s = Math.abs(i.x - o.x),
        a = Math.abs(i.y - o.y);
      return Math.sqrt(s * s + a * a);
    }),
    (e.angle = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI - 90),
    (e.angleFromX = (i, o) =>
      (Math.atan2(o.y - i.y, o.x - i.x) * 180) / Math.PI),
    (e.isEqual = (i, o) => i.x === o.x && i.y === o.y),
    (e.rotationNormalizer = () => {
      let i;
      return (o) => {
        typeof i != "number" && (i = o);
        let s = i - o,
          a = Math.abs(s) + 180,
          l = Math.floor(a / 360);
        return s < 180 && (o -= l * 360), s > 180 && (o += l * 360), (i = o), o;
      };
    });
  function t(i, o) {
    return { x: (i.x + o.x) / 2, y: (i.y + o.y) / 2 };
  }
  e.center = t;
  function n(i) {
    let o = 0,
      s = 0;
    i.forEach((c) => {
      (o += c.x), (s += c.y);
    });
    let a = o / i.length,
      l = s / i.length;
    return { x: a, y: l };
  }
  e.centroid = n;
  function r(i) {
    let o = e.centroid(i),
      s = new Map();
    for (let a = 0; a < i.length; a++) {
      let l = i[a];
      s.set(l, Math.atan2(l.x - o.x, l.y - o.y));
    }
    return i.sort((a, l) => s.get(a) - s.get(l));
  }
  e.sortClockwise = r;
})(xt || (xt = {}));
var Wp = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function Ur(e, t, n, r = !1) {
  let [i, o] = t,
    [s, a] = n,
    l = o - i;
  if (l === 0) return (a + s) / 2;
  let c = a - s;
  if (c === 0) return s;
  let u = s + ((e - i) / l) * c;
  if (r === !0)
    if (s < a) {
      if (u < s) return s;
      if (u > a) return a;
    } else {
      if (u > s) return s;
      if (u < a) return a;
    }
  return u;
}
function $o(e) {
  return !isNaN(e) && isFinite(e);
}
function Xr(e) {
  let t = Up(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function Up(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var dL = (() => JI().Hsluv)(),
  jt = new dL();
function hL(e, t, n) {
  return (
    (jt.rgb_r = e / 255),
    (jt.rgb_g = t / 255),
    (jt.rgb_b = n / 255),
    jt.rgbToHsluv(),
    { h: jt.hsluv_h, s: jt.hsluv_s, l: jt.hsluv_l }
  );
}
function pL(e, t, n, r = 1) {
  return (
    (jt.hsluv_h = e),
    (jt.hsluv_s = t),
    (jt.hsluv_l = n),
    jt.hsluvToRgb(),
    { r: jt.rgb_r * 255, g: jt.rgb_g * 255, b: jt.rgb_b * 255, a: r }
  );
}
function Hc(e, t, n, r) {
  let i = Math.round(e),
    o = Math.round(t * 100),
    s = Math.round(n * 100);
  return r === void 0 || r === 1
    ? "hsv(" + i + ", " + o + "%, " + s + "%)"
    : "hsva(" + i + ", " + o + "%, " + s + "%, " + r + ")";
}
function mL(e, t, n) {
  return {
    r: $o(e) ? Ft(e, 255) * 255 : 0,
    g: $o(t) ? Ft(t, 255) * 255 : 0,
    b: $o(n) ? Ft(n, 255) * 255 : 0,
  };
}
function j1(e, t, n, r) {
  let i = [
    Tp(Math.round(e).toString(16)),
    Tp(Math.round(t).toString(16)),
    Tp(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join("");
}
function rm(e, t, n) {
  let r,
    i,
    o = Ft(e, 255),
    s = Ft(t, 255),
    a = Ft(n, 255),
    l = Math.max(o, s, a),
    c = Math.min(o, s, a),
    u = (i = r = (l + c) / 2);
  if (l === c) u = i = 0;
  else {
    let f = l - c;
    switch (((i = r > 0.5 ? f / (2 - l - c) : f / (l + c)), l)) {
      case o:
        u = (s - a) / f + (s < a ? 6 : 0);
        break;
      case s:
        u = (a - o) / f + 2;
        break;
      case a:
        u = (o - s) / f + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function Cp(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function vL(e, t, n) {
  let r, i, o;
  if (
    ((e = Ft(e, 360)), (t = Ft(t * 100, 100)), (n = Ft(n * 100, 100)), t === 0)
  )
    r = i = o = n;
  else {
    let s = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - s;
    (r = Cp(a, s, e + 1 / 3)), (i = Cp(a, s, e)), (o = Cp(a, s, e - 1 / 3));
  }
  return { r: r * 255, g: i * 255, b: o * 255 };
}
function W1(e, t, n) {
  (e = Ft(e, 255)), (t = Ft(t, 255)), (n = Ft(n, 255));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = r - i,
    s,
    a = r === 0 ? 0 : o / r,
    l = r;
  if (r === i) s = 0;
  else {
    switch (r) {
      case e:
        s = (t - n) / o + (t < n ? 6 : 0);
        break;
      case t:
        s = (n - e) / o + 2;
        break;
      case n:
        s = (e - t) / o + 4;
        break;
    }
    s /= 6;
  }
  return { h: s, s: a, v: l };
}
function gL(e, t, n) {
  (e = Ft(e, 360) * 6), (t = Ft(t * 100, 100)), (n = Ft(n * 100, 100));
  let r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    s = n * (1 - i * t),
    a = n * (1 - (1 - i) * t),
    l = r % 6,
    c = [n, s, o, o, a, n][l],
    u = [a, n, n, s, o, o][l],
    f = [o, o, a, n, n, s][l];
  return { r: c * 255, g: u * 255, b: f * 255 };
}
function Ft(e, t) {
  let n, r;
  if (
    (typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")
  ) {
    yL(e) && (e = "100%");
    let i = bL(e);
    (r = Math.min(n, Math.max(0, parseFloat(e)))),
      i && (r = Math.floor(r * n) / 100);
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function yL(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function bL(e) {
  return typeof e == "string" && e.includes("%");
}
function Tp(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var Un = (() => {
  let e = "[-\\+]?\\d+%?",
    n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + e + ")",
    r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
    i =
      "[\\s|\\(]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")[,|\\s]+(" +
      n +
      ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + i),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + i),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + i),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function im(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    r = Wp[n];
  if ((r && (n = r), n === "transparent"))
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let i;
  return (i = Un.rgb.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (i = Un.rgba.exec(n))
    ? {
        r: parseInt(i[1] ?? ""),
        g: parseInt(i[2] ?? ""),
        b: parseInt(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "rgb",
      }
    : (i = Un.hsl.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Xr(i[2] ?? ""),
        l: Xr(i[3] ?? ""),
        a: 1,
        format: "hsl",
      }
    : (i = Un.hsla.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Xr(i[2] ?? ""),
        l: Xr(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsl",
      }
    : (i = Un.hsv.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Xr(i[2] ?? ""),
        v: Xr(i[3] ?? ""),
        a: 1,
        format: "hsv",
      }
    : (i = Un.hsva.exec(n))
    ? {
        h: parseInt(i[1] ?? ""),
        s: Xr(i[2] ?? ""),
        v: Xr(i[3] ?? ""),
        a: parseFloat(i[4] ?? ""),
        format: "hsv",
      }
    : (i = Un.hex8.exec(n))
    ? {
        r: nn(i[1] ?? ""),
        g: nn(i[2] ?? ""),
        b: nn(i[3] ?? ""),
        a: U1(i[4] ?? ""),
        format: r ? "name" : "hex",
      }
    : (i = Un.hex6.exec(n))
    ? {
        r: nn(i[1] ?? ""),
        g: nn(i[2] ?? ""),
        b: nn(i[3] ?? ""),
        a: 1,
        format: r ? "name" : "hex",
      }
    : (i = Un.hex4.exec(n))
    ? {
        r: nn(`${i[1]}${i[1]}`),
        g: nn(`${i[2]}${i[2]}`),
        b: nn(`${i[3]}${i[3]}`),
        a: U1(i[4] + "" + i[4]),
        format: r ? "name" : "hex",
      }
    : (i = Un.hex3.exec(n))
    ? {
        r: nn(`${i[1]}${i[1]}`),
        g: nn(`${i[2]}${i[2]}`),
        b: nn(`${i[3]}${i[3]}`),
        a: 1,
        format: r ? "name" : "hex",
      }
    : !1;
}
function nn(e) {
  return parseInt(e, 16);
}
function U1(e) {
  return nn(e) / 255;
}
var X1 = new Map(),
  X = (() => {
    function e(o, s, a, l) {
      if (typeof o == "string") {
        let u = X1.get(o);
        return (
          u ||
          ((u = t(o)),
          u === void 0 ? { ...e("black"), isValid: !1 } : (X1.set(o, u), u))
        );
      }
      let c = t(o, s, a, l);
      return c !== void 0 ? c : { ...e("black"), isValid: !1 };
    }
    function t(o, s, a, l) {
      if (o === "") return;
      let c = xL(o, s, a, l);
      if (c) {
        let u = {
          r: c.r,
          g: c.g,
          b: c.b,
          a: c.a,
          h: c.h,
          s: c.s,
          l: c.l,
          initialValue: typeof o == "string" && c.format !== "hsv" ? o : void 0,
          roundA: Math.round(100 * c.a) / 100,
          format: c.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let n = {
      isRGB(o) {
        return o === "rgb" || o === "rgba";
      },
      isHSL(o) {
        return o === "hsl" || o === "hsla";
      },
    };
    (e.inspect = (o, s) =>
      o.format === "hsl"
        ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>`
        : o.format === "hex" || o.format === "name"
        ? `<${o.constructor.name} "${s}">`
        : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`),
      (e.isColor = (o) =>
        typeof o == "string" ? e.isColorString(o) : e.isColorObject(o)),
      (e.isColorString = (o) => (typeof o == "string" ? im(o) !== !1 : !1)),
      (e.isColorObject = (o) =>
        o &&
        typeof o != "string" &&
        typeof o.r == "number" &&
        typeof o.g == "number" &&
        typeof o.b == "number" &&
        typeof o.h == "number" &&
        typeof o.s == "number" &&
        typeof o.l == "number" &&
        typeof o.a == "number" &&
        typeof o.roundA == "number" &&
        typeof o.format == "string"),
      (e.toString = (o) => e.toRgbString(o)),
      (e.toHex = (o, s = !1) => j1(o.r, o.g, o.b, s)),
      (e.toHexString = (o, s = !1) => `#${e.toHex(o, s)}`),
      (e.toRgbString = (o) =>
        o.a === 1
          ? "rgb(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ")"
          : "rgba(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ", " +
            o.roundA +
            ")"),
      (e.toHusl = (o) => ({ ...hL(o.r, o.g, o.b), a: o.roundA })),
      (e.toHslString = (o) => {
        let s = e.toHsl(o),
          a = Math.round(s.h),
          l = Math.round(s.s * 100),
          c = Math.round(s.l * 100);
        return o.a === 1
          ? "hsl(" + a + ", " + l + "%, " + c + "%)"
          : "hsla(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toHsv = (o) => {
        let s = W1(o.r, o.g, o.b);
        return { h: s.h * 360, s: s.s, v: s.v, a: o.a };
      }),
      (e.toHsvString = (o) => {
        let s = W1(o.r, o.g, o.b),
          a = Math.round(s.h * 360),
          l = Math.round(s.s * 100),
          c = Math.round(s.v * 100);
        return o.a === 1
          ? "hsv(" + a + ", " + l + "%, " + c + "%)"
          : "hsva(" + a + ", " + l + "%, " + c + "%, " + o.roundA + ")";
      }),
      (e.toName = (o) => {
        if (o.a === 0) return "transparent";
        if (o.a < 1) return !1;
        let s = j1(o.r, o.g, o.b, !0);
        for (let a of Object.keys(Wp)) if (Wp[a] === s) return a;
        return !1;
      }),
      (e.toHsl = (o) => ({ h: Math.round(o.h), s: o.s, l: o.l, a: o.a })),
      (e.toRgb = (o) => ({
        r: Math.round(o.r),
        g: Math.round(o.g),
        b: Math.round(o.b),
        a: o.a,
      })),
      (e.brighten = (o, s = 10) => {
        let a = e.toRgb(o);
        return (
          (a.r = Math.max(
            0,
            Math.min(255, a.r - Math.round(255 * -(s / 100)))
          )),
          (a.g = Math.max(
            0,
            Math.min(255, a.g - Math.round(255 * -(s / 100)))
          )),
          (a.b = Math.max(
            0,
            Math.min(255, a.b - Math.round(255 * -(s / 100)))
          )),
          e(a)
        );
      }),
      (e.lighten = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l += s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.darken = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.l -= s / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a);
      }),
      (e.saturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s += s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.desaturate = (o, s = 10) => {
        let a = e.toHsl(o);
        return (a.s -= s / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a);
      }),
      (e.grayscale = (o) => e.desaturate(o, 100)),
      (e.hueRotate = (o, s) => {
        let a = e.toHsl(o);
        return (a.h += s), (a.h = a.h > 360 ? a.h - 360 : a.h), e(a);
      }),
      (e.alpha = (o, s = 1) => e({ r: o.r, g: o.g, b: o.b, a: s })),
      (e.transparent = (o) => e.alpha(o, 0)),
      (e.multiplyAlpha = (o, s = 1) =>
        e({ r: o.r, g: o.g, b: o.b, a: o.a * s })),
      (e.interpolate = (o, s, a = "rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(s))
          throw new TypeError(
            "Both arguments for Color.interpolate must be Color objects"
          );
        return (l) => e.mixAsColor(o, s, l, !1, a);
      }),
      (e.mix = (o, s, { model: a = "rgb" } = {}) => {
        let l = typeof o == "string" ? e(o) : o,
          c = e.interpolate(l, s, a);
        return (u) => e.toRgbString(c(u));
      }),
      (e.mixAsColor = (o, s, a = 0.5, l = !1, c = "rgb") => {
        let u = null;
        if (n.isRGB(c))
          u = e({
            r: Ur(a, [0, 1], [o.r, s.r], l),
            g: Ur(a, [0, 1], [o.g, s.g], l),
            b: Ur(a, [0, 1], [o.b, s.b], l),
            a: Ur(a, [0, 1], [o.a, s.a], l),
          });
        else {
          let f, d;
          n.isHSL(c)
            ? ((f = e.toHsl(o)), (d = e.toHsl(s)))
            : ((f = e.toHusl(o)), (d = e.toHusl(s))),
            f.s === 0 ? (f.h = d.h) : d.s === 0 && (d.h = f.h);
          let p = f.h,
            g = d.h,
            v = g - p;
          v > 180 ? (v = g - 360 - p) : v < -180 && (v = g + 360 - p);
          let x = {
            h: Ur(a, [0, 1], [p, p + v], l),
            s: Ur(a, [0, 1], [f.s, d.s], l),
            l: Ur(a, [0, 1], [f.l, d.l], l),
            a: Ur(a, [0, 1], [o.a, s.a], l),
          };
          n.isHSL(c) ? (u = e(x)) : (u = e(pL(x.h, x.s, x.l, x.a)));
        }
        return u;
      }),
      (e.random = (o = 1) => {
        function s() {
          return Math.floor(Math.random() * 255);
        }
        return e("rgba(" + s() + ", " + s() + ", " + s() + ", " + o + ")");
      }),
      (e.grey = (o = 0.5, s = 1) => (
        (o = Math.floor(o * 255)),
        e("rgba(" + o + ", " + o + ", " + o + ", " + s + ")")
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (o, s, a) => rm(o, s, a)),
      (e.isValidColorProperty = (o, s) =>
        !!(
          (o.toLowerCase().slice(-5) === "color" ||
            o === "fill" ||
            o === "stroke") &&
          typeof s == "string" &&
          e.isColorString(s)
        )),
      (e.difference = (o, s) => {
        let a = (o.r + s.r) / 2,
          l = o.r - s.r,
          c = o.g - s.g,
          u = o.b - s.b,
          f = Math.pow(l, 2),
          d = Math.pow(c, 2),
          p = Math.pow(u, 2);
        return Math.sqrt(2 * f + 4 * d + 3 * p + (a * (f - p)) / 256);
      }),
      (e.equal = (o, s, a = 0.1) =>
        !(
          Math.abs(o.r - s.r) >= a ||
          Math.abs(o.g - s.g) >= a ||
          Math.abs(o.b - s.b) >= a ||
          Math.abs(o.a - s.a) * 256 >= a
        ));
    let r = Zi([0, 255], [0, 1]);
    function i(o) {
      o = r(o);
      let s = Math.abs(o);
      return s < 0.04045
        ? o / 12.92
        : (Math.sign(o) || 1) * Math.pow((s + 0.055) / 1.055, 2.4);
    }
    return (
      (e.luminance = (o) => {
        let { r: s, g: a, b: l } = e.toRgb(o);
        return 0.2126 * i(s) + 0.7152 * i(a) + 0.0722 * i(l);
      }),
      (e.contrast = (o, s) => {
        let a = e.luminance(o),
          l = e.luminance(s);
        return (Math.max(a, l) + 0.05) / (Math.min(a, l) + 0.05);
      }),
      e
    );
  })();
function xL(e, t, n, r = 1) {
  let i;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (i = Xp({ r: e, g: t, b: n, a: r }))
      : typeof e == "string"
      ? (i = SL(e))
      : typeof e == "object" &&
        (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
          ? (i = Xp(e))
          : (i = uw(e))),
    i
  );
}
function SL(e) {
  let t = im(e);
  if (t) return t.format === "hsl" ? uw(t) : t.format === "hsv" ? wL(t) : Xp(t);
}
function wL(e) {
  let t = gL(e.h, e.s, e.v);
  return {
    ...rm(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? fw(e.a) : 1,
  };
}
function Xp(e) {
  let t = mL(e.r, e.g, e.b);
  return {
    ...rm(t.r, t.g, t.b),
    ...t,
    format: "rgb",
    a: e.a !== void 0 ? fw(e.a) : 1,
  };
}
function uw(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    o = { h: 0, s: 0, l: 0 };
  return (
    (t = $o(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = $o(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = Up(e.s)),
    (r = $o(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (r = Up(e.l)),
    (i = vL(t, n, r)),
    (o = { h: t, s: n, l: r }),
    { ...i, ...o, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function fw(e) {
  return (
    (e = parseFloat(e)), e < 0 && (e = 0), (isNaN(e) || e > 1) && (e = 1), e
  );
}
var Y1 = (e) => e instanceof pl;
var kL = (() => eF().EventEmitter)(),
  CL = class {
    constructor() {
      R(this, "_emitter", new kL());
    }
    eventNames() {
      return this._emitter.eventNames();
    }
    eventListeners() {
      let e = {};
      for (let t of this._emitter.eventNames())
        e[t] = this._emitter.listeners(t);
      return e;
    }
    on(e, t) {
      this.addEventListener(e, t, !1, !1, this);
    }
    off(e, t) {
      this.removeEventListeners(e, t);
    }
    once(e, t) {
      this.addEventListener(e, t, !0, !1, this);
    }
    unique(e, t) {
      this.addEventListener(e, t, !1, !0, this);
    }
    addEventListener(e, t, n, r, i) {
      if (r) {
        for (let o of this._emitter.eventNames())
          if (t === this._emitter.listeners(o)) return;
      }
      n === !0
        ? this._emitter.once(e, t, i)
        : this._emitter.addListener(e, t, i);
    }
    removeEventListeners(e, t) {
      e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
    }
    removeAllEventListeners() {
      this._emitter.removeAllListeners();
    }
    countEventListeners(e, t) {
      if (e) return this._emitter.listeners(e).length;
      {
        let n = 0;
        for (let r of this._emitter.eventNames())
          n += this._emitter.listeners(r).length;
        return n;
      }
    }
    emit(e, ...t) {
      this._emitter.emit(e, ...t);
    }
  },
  TL = {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => !1,
    ResizeObserver: void 0,
    onpointerdown: !1,
    onpointermove: !1,
    onpointerup: !1,
    ontouchstart: !1,
    ontouchmove: !1,
    ontouchend: !1,
    onmousedown: !1,
    onmousemove: !1,
    onmouseup: !1,
    devicePixelRatio: 1,
    scrollX: 0,
    scrollY: 0,
    location: { href: "" },
    setTimeout: () => 0,
    clearTimeout: () => {},
    setInterval: () => 0,
    clearInterval: () => {},
    requestAnimationFrame: () => 0,
    cancelAnimationFrame: () => {},
    getSelection: () => null,
    matchMedia: (e) => ({
      matches: !1,
      media: e,
      onchange: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => !1,
    }),
    innerHeight: 0,
    innerWidth: 0,
    SVGSVGElement: {},
    open: function (e, t, n) {},
  },
  $e = typeof L > "u" ? TL : L,
  EL = (e) => {
    setTimeout(e, 1 / 60);
  },
  RL = (() => $e.requestAnimationFrame || EL)(),
  G1 = (e) => RL(e),
  aa = (() => 1 / 60)(),
  PL = class extends CL {
    constructor(e = !1) {
      super(),
        R(this, "_started", !1),
        R(this, "_frame", 0),
        R(this, "_frameTasks", []),
        R(this, "tick", () => {
          this._started &&
            (G1(this.tick),
            this.emit("update", this._frame, aa),
            this.emit("render", this._frame, aa),
            this._processFrameTasks(),
            this._frame++);
        }),
        e && this.start();
    }
    addFrameTask(e) {
      this._frameTasks.push(e);
    }
    _processFrameTasks() {
      var e;
      let t = this._frameTasks,
        n = t.length;
      if (n !== 0) {
        for (let r = 0; r < n; r++) (e = t[r]) == null || e.call(t);
        t.length = 0;
      }
    }
    static set TimeStep(e) {
      aa = e;
    }
    static get TimeStep() {
      return aa;
    }
    start() {
      return this._started
        ? this
        : ((this._frame = 0), (this._started = !0), G1(this.tick), this);
    }
    stop() {
      return (this._started = !1), this;
    }
    get frame() {
      return this._frame;
    }
    get time() {
      return this._frame * aa;
    }
  },
  dw = new PL(),
  iu = { target: "PREVIEW", zoom: 1 };
var ie = {
  canvas: "CANVAS",
  export: "EXPORT",
  thumbnail: "THUMBNAIL",
  preview: "PREVIEW",
  current: () => iu.target,
  hasRestrictions: () => {
    let e = iu.target;
    return e === "CANVAS" || e === "EXPORT";
  },
};
var jc = (e) => ({
  correct: (t, { delta: n, treeScale: r }) => {
    if ((typeof t == "string" && (t = parseFloat(t)), t === 0)) return "0px";
    let i = t;
    return (
      n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
      i + "px"
    );
  },
});
wf({
  borderTopWidth: jc("y"),
  borderLeftWidth: jc("x"),
  borderRightWidth: jc("x"),
  borderBottomWidth: jc("y"),
});
function de(e, ...t) {
  var n, r;
  if (e) return;
  let i = Error("Assertion Error" + (t.length > 0 ? ": " + t.join(" ") : ""));
  if (i.stack)
    try {
      let o = i.stack.split(`
`);
      (n = o[1]) != null && n.includes("assert")
        ? (o.splice(1, 1),
          (i.stack = o.join(`
`)))
        : (r = o[0]) != null &&
          r.includes("assert") &&
          (o.splice(0, 1),
          (i.stack = o.join(`
`)));
    } catch {}
  throw i;
}
function We(e, t) {
  throw (
    t ||
    new Error(
      e ? `Unexpected value: ${e}` : "Application entered invalid state"
    )
  );
}
var zo = b.createContext({
  getLayoutId: (e) => null,
  persistLayoutIdCache: () => {},
  top: !1,
  enabled: !0,
});
function _L({ children: e }) {
  if (D(zo).top) return C(Oe, { children: e });
  let n = A({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = A({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    i = A(new Set()).current,
    o = ve(({ id: l, name: c, duplicatedFrom: u }) => {
      if (!l) return null;
      let f = c ? "byName" : "byId",
        d = n.current[f][l];
      if (d) return d;
      let p = c || l;
      if (
        !u &&
        !i.has(p) &&
        (!n.current.byLayoutId[p] || n.current.byLayoutId[p] === p)
      )
        return (
          n.current.count[f][p] === void 0 &&
            ((n.current.count[f][p] = 0),
            (n.current.byLayoutId[p] = p),
            (r.current[f][l] = p)),
          i.add(p),
          p
        );
      let g;
      if (u?.length)
        for (let w = u.length - 1; w >= 0; w--) {
          let T = u[w];
          de(!!T, "duplicatedId must be defined");
          let E = n.current[f][T],
            F = n.current.byLastId[T];
          if (F && !g) {
            let B = n.current.byLayoutId[F],
              q = !B || B === c;
            F && !i.has(F) && (!c || q) && (g = [F, T]);
          }
          let I = E ? n.current.byLayoutId[E] : void 0,
            $ = !I || I === c;
          if (E && !i.has(E) && (!c || $))
            return (
              (r.current[f][l] = E), (r.current.byLastId[T] = E), i.add(E), E
            );
        }
      let v = n.current.byLastId[l];
      if (v && !i.has(v)) return i.add(v), (r.current.byId[l] = v), v;
      if (g) {
        let [w, T] = g;
        return (r.current[f][l] = w), (r.current.byLastId[T] = w), i.add(w), w;
      }
      let x = n.current.byPossibleId[l];
      if (x && !i.has(x)) return i.add(x), (r.current.byId[l] = x), x;
      let m = u?.[0],
        h = c || m || l,
        y = (n.current.count[f][h] ?? -1) + 1,
        { layoutId: S, value: k } = IL(h, y, i);
      if (
        ((n.current.count[f][h] = k), (r.current[f][l] = S), u?.length && !c)
      ) {
        let w = u[u.length - 1];
        if ((w && (r.current.byLastId[w] = S), u.length > 1))
          for (let T = 0; T < u.length - 1; T++) {
            let E = u[T];
            E !== void 0 &&
              (r.current.byPossibleId[E] || (r.current.byPossibleId[E] = S));
          }
      }
      return (r.current.byLayoutId[S] = p), i.add(S), S;
    }, []),
    s = ve(() => {
      (n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        i.clear();
    }, []),
    a = A({
      getLayoutId: o,
      persistLayoutIdCache: s,
      top: !0,
      enabled: !0,
    }).current;
  return C(zo.Provider, { value: a, children: e });
}
function IL(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i); ) r++, (i = `${e}-${r}`);
  return { layoutId: i, value: r };
}
function FL({ enabled: e = !0, ...t }) {
  let n = D(zo),
    r = he(() => ({ ...n, enabled: e }), [e]);
  return C(zo.Provider, { ...t, value: r });
}
function Lt(e) {
  let t = A(null);
  return t.current === null && (t.current = e()), t.current;
}
var LL = {
    background: void 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "1.4em",
    textOverflow: "ellipsis",
    overflow: "hidden",
    minHeight: 0,
    width: "100%",
    height: "100%",
  },
  ML = (() => ({
    ...LL,
    border: "1px solid rgba(149, 149, 149, 0.15)",
    borderRadius: 6,
    fontSize: "12px",
    backgroundColor: "rgba(149, 149, 149, 0.1)",
    color: "#a5a5a5",
  }))(),
  hw = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    maxWidth: "100%",
    flexShrink: 0,
    padding: "0 10px",
  },
  OL = (() => ({ ...hw, fontWeight: 500 }))(),
  DL = (() => ({
    ...hw,
    whiteSpace: "pre",
    maxHeight:
      "calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))",
    WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
  }))();
function kz(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${AL(n)}` : "Error",
    i = t instanceof Error ? t.message : "" + t;
  return se("div", {
    style: ML,
    children: [
      C("div", { className: "text", style: OL, children: r }),
      i && C("div", { className: "text", style: DL, children: i }),
    ],
  });
}
function AL(e) {
  return e.startsWith("./") ? e.replace("./", "") : e;
}
function Z(e) {
  return typeof e == "number" && isFinite(e);
}
function VL(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function da(e) {
  return typeof e != "string" && typeof e != "number";
}
function ha(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !VL(e);
}
function BL(e) {
  return e * (Math.PI / 180);
}
var ct = (() => {
    function e(t, n) {
      return { a: t, b: n };
    }
    return (
      (e.offset = (t, n) => {
        let r = xt.angleFromX(t.a, t.b),
          i = BL(r),
          o = n * Math.sin(i),
          s = n * Math.cos(i);
        return e(
          { x: t.a.x + o, y: t.a.y - s },
          { x: t.b.x + o, y: t.b.y - s }
        );
      }),
      (e.intersection = (t, n, r) => {
        let i = t.a.x,
          o = t.a.y,
          s = t.b.x,
          a = t.b.y,
          l = n.a.x,
          c = n.a.y,
          u = n.b.x,
          f = n.b.y,
          d = (u - l) * (c - o) - (f - c) * (l - i),
          p = (u - l) * (a - o) - (f - c) * (s - i),
          g = (s - i) * (c - o) - (a - o) * (l - i);
        if ((d === 0 && p === 0) || p === 0) return null;
        let v = d / p,
          x = g / p;
        return r && (v < 0 || v > 1 || x < 0 || x > 1)
          ? null
          : { x: i + v * (s - i), y: o + v * (a - o) };
      }),
      (e.intersectionAngle = (t, n) => {
        let r = t.b.x - t.a.x,
          i = t.b.y - t.a.y,
          o = n.b.x - n.a.x,
          s = n.b.y - n.a.y;
        return Math.atan2(r * s - i * o, r * o + i * s) * (180 / Math.PI);
      }),
      (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
      (e.perpendicular = (t, n) => {
        let r = t.a.x - t.b.x,
          i = t.a.y - t.b.y,
          o = xt(n.x - i, n.y + r);
        return e(o, n);
      }),
      (e.projectPoint = (t, n) => {
        let r = e.perpendicular(t, n);
        return e.intersection(t, r);
      }),
      (e.pointAtPercentDistance = (t, n) => {
        let r = e.distance(t),
          i = (n * r) / r;
        return {
          x: i * t.b.x + (1 - i) * t.a.x,
          y: i * t.b.y + (1 - i) * t.a.y,
        };
      }),
      (e.distance = (t) => xt.distance(t.a, t.b)),
      e
    );
  })(),
  z = {
    equals: function (e, t) {
      return e === t
        ? !0
        : !e || !t
        ? !1
        : e.x === t.x &&
          e.y === t.y &&
          e.width === t.width &&
          e.height === t.height;
    },
    atOrigin: (e) => ({ ...e, x: 0, y: 0 }),
    fromTwoPoints: (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      width: Math.abs(e.x - t.x),
      height: Math.abs(e.y - t.y),
    }),
    fromRect: (e) => ({
      x: e.left,
      y: e.top,
      width: e.right - e.left,
      height: e.bottom - e.top,
    }),
    multiply: (e, t) => ({
      x: e.x * t,
      y: e.y * t,
      width: e.width * t,
      height: e.height * t,
    }),
    divide: (e, t) => z.multiply(e, 1 / t),
    offset: (e, t) => {
      let n = typeof t.x == "number" ? t.x : 0,
        r = typeof t.y == "number" ? t.y : 0;
      return { ...e, x: e.x + n, y: e.y + r };
    },
    inflate: (e, t) => {
      if (t === 0) return e;
      let n = 2 * t;
      return {
        x: e.x - t,
        y: e.y - t,
        width: e.width + n,
        height: e.height + n,
      };
    },
    pixelAligned: (e) => {
      let t = Math.round(e.x),
        n = Math.round(e.y),
        r = Math.round(e.x + e.width),
        i = Math.round(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    halfPixelAligned: (e) => {
      let t = Math.round(e.x * 2) / 2,
        n = Math.round(e.y * 2) / 2,
        r = Math.round((e.x + e.width) * 2) / 2,
        i = Math.round((e.y + e.height) * 2) / 2,
        o = Math.max(r - t, 1),
        s = Math.max(i - n, 1);
      return { x: t, y: n, width: o, height: s };
    },
    round: (e, t = 0) => {
      let n = Nc(e.x, t),
        r = Nc(e.y, t),
        i = Nc(e.width, t),
        o = Nc(e.height, t);
      return { x: n, y: r, width: i, height: o };
    },
    roundToOutside: (e) => {
      let t = Math.floor(e.x),
        n = Math.floor(e.y),
        r = Math.ceil(e.x + e.width),
        i = Math.ceil(e.y + e.height),
        o = Math.max(r - t, 0),
        s = Math.max(i - n, 0);
      return { x: t, y: n, width: o, height: s };
    },
    minX: (e) => e.x,
    maxX: (e) => e.x + e.width,
    minY: (e) => e.y,
    maxY: (e) => e.y + e.height,
    positions: (e) => ({
      minX: e.x,
      midX: e.x + e.width / 2,
      maxX: z.maxX(e),
      minY: e.y,
      midY: e.y + e.height / 2,
      maxY: z.maxY(e),
    }),
    center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
    boundingRectFromPoints: (e) => {
      let t = 1 / 0,
        n = -1 / 0,
        r = 1 / 0,
        i = -1 / 0;
      for (let o = 0; o < e.length; o++) {
        let s = e[o];
        (t = Math.min(t, s.x)),
          (n = Math.max(n, s.x)),
          (r = Math.min(r, s.y)),
          (i = Math.max(i, s.y));
      }
      return { x: t, y: r, width: n - t, height: i - r };
    },
    fromPoints: (e) => {
      let [t, n, r, i] = e,
        { x: o, y: s } = t,
        a = xt.distance(t, n),
        l = xt.distance(t, i);
      return { x: o, y: s, width: a, height: l };
    },
    merge: (...e) => {
      let t = { x: Math.min(...e.map(z.minX)), y: Math.min(...e.map(z.minY)) },
        n = { x: Math.max(...e.map(z.maxX)), y: Math.max(...e.map(z.maxY)) };
      return z.fromTwoPoints(t, n);
    },
    intersection: (e, t) => {
      let n = Math.max(e.x, t.x),
        r = Math.min(e.x + e.width, t.x + t.width),
        i = Math.max(e.y, t.y),
        o = Math.min(e.y + e.height, t.y + t.height);
      return { x: n, y: i, width: r - n, height: o - i };
    },
    points: (e) => [
      { x: z.minX(e), y: z.minY(e) },
      { x: z.minX(e), y: z.maxY(e) },
      { x: z.maxX(e), y: z.minY(e) },
      { x: z.maxX(e), y: z.maxY(e) },
    ],
    pointsAtOrigin: (e) => [
      { x: 0, y: 0 },
      { x: e.width, y: 0 },
      { x: e.width, y: e.height },
      { x: 0, y: e.height },
    ],
    transform: (e, t) => {
      let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
        { x: i, y: o } = t.transformPoint({ x: e.x + e.width, y: e.y }),
        { x: s, y: a } = t.transformPoint({
          x: e.x + e.width,
          y: e.y + e.height,
        }),
        { x: l, y: c } = t.transformPoint({ x: e.x, y: e.y + e.height }),
        u = Math.min(n, i, s, l),
        f = Math.max(n, i, s, l) - u,
        d = Math.min(r, o, a, c),
        p = Math.max(r, o, a, c) - d;
      return { x: u, y: d, width: f, height: p };
    },
    containsPoint: (e, t) =>
      !(
        t.x < z.minX(e) ||
        t.x > z.maxX(e) ||
        t.y < z.minY(e) ||
        t.y > z.maxY(e) ||
        isNaN(e.x) ||
        isNaN(e.y)
      ),
    containsRect: (e, t) => {
      for (let n of z.points(t)) if (!z.containsPoint(e, n)) return !1;
      return !0;
    },
    toCSS: (e) => ({
      display: "block",
      transform: `translate(${e.x}px, ${e.y}px)`,
      width: `${e.width}px`,
      height: `${e.height}px`,
    }),
    inset: (e, t) => ({
      x: e.x + t,
      y: e.y + t,
      width: Math.max(0, e.width - 2 * t),
      height: Math.max(0, e.height - 2 * t),
    }),
    intersects: (e, t) =>
      !(
        t.x >= z.maxX(e) ||
        z.maxX(t) <= e.x ||
        t.y >= z.maxY(e) ||
        z.maxY(t) <= e.y
      ),
    overlapHorizontally: (e, t) => {
      let n = z.maxX(e),
        r = z.maxX(t);
      return n > t.x && r > e.x;
    },
    overlapVertically: (e, t) => {
      let n = z.maxY(e),
        r = z.maxY(t);
      return n > t.y && r > e.y;
    },
    doesNotIntersect: (e, t) => t.find((n) => z.intersects(n, e)) === void 0,
    isEqual: (e, t) => z.equals(e, t),
    cornerPoints: (e) => {
      let t = e.x,
        n = e.x + e.width,
        r = e.y,
        i = e.y + e.height;
      return [
        { x: t, y: r },
        { x: n, y: r },
        { x: n, y: i },
        { x: t, y: i },
      ];
    },
    midPoints: (e) => {
      let t = e.x,
        n = e.x + e.width / 2,
        r = e.x + e.width,
        i = e.y,
        o = e.y + e.height / 2,
        s = e.y + e.height;
      return [
        { x: n, y: i },
        { x: r, y: o },
        { x: n, y: s },
        { x: t, y: o },
      ];
    },
    pointDistance: (e, t) => {
      let n = 0,
        r = 0;
      return (
        t.x < e.x ? (n = e.x - t.x) : t.x > z.maxX(e) && (n = t.x - z.maxX(e)),
        t.y < e.y ? (r = e.y - t.y) : t.y > z.maxY(e) && (r = t.y - z.maxY(e)),
        xt.distance({ x: n, y: r }, { x: 0, y: 0 })
      );
    },
    fromAny: (e, t = { x: 0, y: 0, width: 0, height: 0 }) => ({
      x: e.x || t.x,
      y: e.y || t.y,
      width: e.width || t.width,
      height: e.height || t.height,
    }),
    delta: (e, t) => {
      let n = { x: z.minX(e), y: z.minY(e) },
        r = { x: z.minX(t), y: z.minY(t) };
      return { x: n.x - r.x, y: n.y - r.y };
    },
    withMinSize: (e, t) => {
      let { width: n, height: r } = t,
        i = e.width - n,
        o = e.height - r;
      return {
        width: Math.max(e.width, n),
        height: Math.max(e.height, r),
        x: e.width < n ? e.x + i / 2 : e.x,
        y: e.height < r ? e.y + o / 2 : e.y,
      };
    },
    anyPointsOutsideRect: (e, t) => {
      let n = z.minX(e),
        r = z.minY(e),
        i = z.maxX(e),
        o = z.maxY(e);
      for (let s of t) if (s.x < n || s.x > i || s.y < r || s.y > o) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, n, r, i] = z.cornerPoints(e);
      return [ct(t, n), ct(n, r), ct(r, i), ct(i, t)];
    },
    rebaseRectOnto: (e, t, n, r) => {
      let i = { ...e };
      switch (n) {
        case "bottom":
        case "top":
          switch (r) {
            case "start":
              i.x = t.x;
              break;
            case "center":
              i.x = t.x + t.width / 2 - e.width / 2;
              break;
            case "end":
              i.x = t.x + t.width - e.width;
              break;
            default:
              We(r);
          }
          break;
        case "left":
          i.x = t.x - e.width;
          break;
        case "right":
          i.x = t.x + t.width;
          break;
        default:
          We(n);
      }
      switch (n) {
        case "left":
        case "right":
          switch (r) {
            case "start":
              i.y = t.y;
              break;
            case "center":
              i.y = t.y + t.height / 2 - e.height / 2;
              break;
            case "end":
              i.y = t.y + t.height - e.height;
              break;
            default:
              We(r);
          }
          break;
        case "top":
          i.y = t.y - e.height;
          break;
        case "bottom":
          i.y = t.y + t.height;
          break;
        default:
          We(n);
      }
      return i;
    },
  };
var pw = {
  quickfix: (e) => (
    (e.widthType === 2 || e.heightType === 2) && (e.aspectRatio = null),
    Z(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || e.widthType === 2 || Z(e.maxWidth)) && (e.right = !1),
      (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || e.heightType === 2 || Z(e.maxHeight)) && (e.bottom = !1),
      (e.heightType = 0)),
    e
  ),
};
function ou(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var mw = {
    fromProperties: (e) => {
      let {
          left: t,
          right: n,
          top: r,
          bottom: i,
          width: o,
          height: s,
          centerX: a,
          centerY: l,
          aspectRatio: c,
          autoSize: u,
        } = e,
        f = pw.quickfix({
          left: Z(t) || Rn(t),
          right: Z(n) || Rn(n),
          top: Z(r) || Rn(r),
          bottom: Z(i) || Rn(i),
          widthType: ou(o),
          heightType: ou(s),
          aspectRatio: c || null,
          fixedSize: u === !0,
        }),
        d = null,
        p = null,
        g = 0,
        v = 0;
      if (f.widthType !== 0 && typeof o == "string") {
        let h = parseFloat(o);
        o.endsWith("fr")
          ? ((g = 3), (d = h))
          : o === "auto"
          ? (g = 2)
          : ((g = 1), (d = h / 100));
      } else o !== void 0 && typeof o != "string" && (d = Qe.getNumber(o));
      if (f.heightType !== 0 && typeof s == "string") {
        let h = parseFloat(s);
        s.endsWith("fr")
          ? ((v = 3), (p = h))
          : s === "auto"
          ? (v = 2)
          : ((v = 1), (p = parseFloat(s) / 100));
      } else s !== void 0 && typeof s != "string" && (p = Qe.getNumber(s));
      let x = 0.5,
        m = 0.5;
      return (
        a && (x = parseFloat(a) / 100),
        l && (m = parseFloat(l) / 100),
        {
          left: f.left ? Qe.getNumber(t) : null,
          right: f.right ? Qe.getNumber(n) : null,
          top: f.top ? Qe.getNumber(r) : null,
          bottom: f.bottom ? Qe.getNumber(i) : null,
          widthType: g,
          heightType: v,
          width: d,
          height: p,
          aspectRatio: f.aspectRatio || null,
          centerAnchorX: x,
          centerAnchorY: m,
        }
      );
    },
    toSize: (e, t, n, r) => {
      let i = null,
        o = null,
        s = t?.sizing ? Qe.getNumber(t?.sizing.width) : null,
        a = t?.sizing ? Qe.getNumber(t?.sizing.height) : null,
        l = K1(e.left, e.right);
      if (s && Z(l)) i = s - l;
      else if (n && e.widthType === 2) i = n.width;
      else if (Z(e.width))
        switch (e.widthType) {
          case 0:
            i = e.width;
            break;
          case 3:
            i = r
              ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) *
                e.width
              : null;
            break;
          case 1:
          case 4:
            s && (i = s * e.width);
            break;
          case 2:
            break;
          default:
            We(e.widthType);
        }
      let c = K1(e.top, e.bottom);
      if (a && Z(c)) o = a - c;
      else if (n && e.heightType === 2) o = n.height;
      else if (Z(e.height))
        switch (e.heightType) {
          case 0:
            o = e.height;
            break;
          case 3:
            o = r
              ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) *
                e.height
              : null;
            break;
          case 1:
          case 4:
            a && (o = a * e.height);
            break;
          case 2:
            break;
          default:
            We(e.heightType);
        }
      return jL(i, o, e, { height: a ?? 0, width: s ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, r = !1, i = null) => {
      let o = e.left || 0,
        s = e.top || 0,
        { width: a, height: l } = mw.toSize(e, t, n, i),
        c = t?.positioning ?? null,
        u = c ? Qe.getNumber(c.width) : null,
        f = c ? Qe.getNumber(c.height) : null;
      e.left !== null
        ? (o = e.left)
        : u && e.right !== null
        ? (o = u - e.right - a)
        : u && (o = e.centerAnchorX * u - a / 2),
        e.top !== null
          ? (s = e.top)
          : f && e.bottom !== null
          ? (s = f - e.bottom - l)
          : f && (s = e.centerAnchorY * f - l / 2);
      let d = { x: o, y: s, width: a, height: l };
      return r ? z.pixelAligned(d) : d;
    },
  },
  $L = 200,
  zL = 200;
function su(e, t, n, r) {
  if (typeof t == "string") {
    if (t.endsWith("%") && n)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * n.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith("vh") && r)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * r.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    return parseFloat(t);
  }
  return t;
}
function NL(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(su("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(su("maxHeight", t.maxHeight, n, r), e)),
    e
  );
}
function HL(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(su("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(su("maxWidth", t.maxWidth, n, r), e)),
    e
  );
}
function jL(e, t, n, r, i) {
  let o = HL(Z(e) ? e : $L, n, r, i),
    s = NL(Z(t) ? t : zL, n, r, i);
  return (
    Z(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (Z(n.left) && Z(n.right)
        ? (s = o / n.aspectRatio)
        : Z(n.top) && Z(n.bottom)
        ? (o = s * n.aspectRatio)
        : n.widthType !== 0
        ? (s = o / n.aspectRatio)
        : (o = s * n.aspectRatio)),
    { width: o, height: s }
  );
}
function K1(e, t) {
  return !Z(e) || !Z(t) ? null : e + t;
}
function WL(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function Ra(e) {
  return !e._constraints || WL(e) ? !1 : e._constraints.enabled;
}
function UL(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    Z(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    Z(n) && Z(r) ? { width: n, height: r } : null
  );
}
function XL(e) {
  let t = UL(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return Z(n) && Z(r) ? { x: n, y: r, ...t } : null;
}
function va(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Ra(e) || r) return XL(e);
  let i = YL(e),
    o = GL(t),
    s = o ? { sizing: o, positioning: o, viewport: null } : null;
  return mw.toRect(i, s, null, n, null);
}
function YL(e) {
  let {
      left: t,
      right: n,
      top: r,
      bottom: i,
      center: o,
      _constraints: s,
      size: a,
    } = e,
    { width: l, height: c } = e;
  l === void 0 && (l = a), c === void 0 && (c = a);
  let { aspectRatio: u, autoSize: f } = s,
    d = pw.quickfix({
      left: Z(t),
      right: Z(n),
      top: Z(r),
      bottom: Z(i),
      widthType: ou(l),
      heightType: ou(c),
      aspectRatio: u || null,
      fixedSize: f === !0,
    }),
    p = null,
    g = null,
    v = 0,
    x = 0;
  if (d.widthType !== 0 && typeof l == "string") {
    let y = parseFloat(l);
    l.endsWith("fr")
      ? ((v = 3), (p = y))
      : l === "auto"
      ? (v = 2)
      : ((v = 1), (p = y / 100));
  } else l !== void 0 && typeof l != "string" && (p = l);
  if (d.heightType !== 0 && typeof c == "string") {
    let y = parseFloat(c);
    c.endsWith("fr")
      ? ((x = 3), (g = y))
      : c === "auto"
      ? (x = 2)
      : ((x = 1), (g = parseFloat(c) / 100));
  } else c !== void 0 && typeof c != "string" && (g = c);
  let m = 0.5,
    h = 0.5;
  return (
    (o === !0 || o === "x") &&
      ((d.left = !1), typeof t == "string" && (m = parseFloat(t) / 100)),
    (o === !0 || o === "y") &&
      ((d.top = !1), typeof r == "string" && (h = parseFloat(r) / 100)),
    {
      left: d.left ? t : null,
      right: d.right ? n : null,
      top: d.top ? r : null,
      bottom: d.bottom ? i : null,
      widthType: v,
      heightType: x,
      width: p,
      height: g,
      aspectRatio: d.aspectRatio || null,
      centerAnchorX: m,
      centerAnchorY: h,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var vw = b.createContext({ parentSize: 0 });
function GL(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Pa() {
  return b.useContext(vw).parentSize;
}
function gw(e) {
  return typeof e == "object";
}
var KL = (e) => {
  let t = Pa(),
    { parentSize: n, children: r } = e,
    i = b.useMemo(() => ({ parentSize: n }), [qL(n), QL(n)]);
  return t === 1
    ? r
      ? C(Oe, { children: r })
      : null
    : C(vw.Provider, { value: i, children: r });
};
function qL(e) {
  return gw(e) ? e.width : e;
}
function QL(e) {
  return gw(e) ? e.height : e;
}
function ZL(e, t) {
  return C(KL, { parentSize: t, children: e });
}
function JL(e) {
  let t = Pa();
  return va(e, t, !0);
}
function yw({ width: e, height: t }) {
  return (
    e === "auto" || e === "min-content" || t === "auto" || t === "min-content"
  );
}
var eM = ((e) => (
    (e.Boolean = "boolean"),
    (e.Number = "number"),
    (e.String = "string"),
    (e.RichText = "richtext"),
    (e.FusedNumber = "fusednumber"),
    (e.Enum = "enum"),
    (e.SegmentedEnum = "segmentedenum"),
    (e.Color = "color"),
    (e.Image = "image"),
    (e.ResponsiveImage = "responsiveimage"),
    (e.File = "file"),
    (e.ComponentInstance = "componentinstance"),
    (e.Array = "array"),
    (e.EventHandler = "eventhandler"),
    (e.Transition = "transition"),
    (e.BoxShadow = "boxshadow"),
    (e.Link = "link"),
    (e.Date = "date"),
    (e.Object = "object"),
    (e.Font = "font"),
    (e.PageScope = "pagescope"),
    (e.ScrollSectionRef = "scrollsectionref"),
    (e.CustomCursor = "customcursor"),
    (e.Border = "border"),
    (e.Cursor = "cursor"),
    (e.Padding = "padding"),
    (e.BorderRadius = "borderradius"),
    (e.CollectionReference = "collectionreference"),
    e
  ))(eM || {}),
  Ep;
function tM() {
  if (Ep !== void 0) return Ep;
  let e = document.createElement("div");
  Object.assign(e.style, {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    rowGap: "1px",
  }),
    e.appendChild(document.createElement("div")),
    e.appendChild(document.createElement("div")),
    document.body.appendChild(e);
  let t = e.scrollHeight === 1;
  return e.parentNode && e.parentNode.removeChild(e), (Ep = t), t;
}
var Li = "flexbox-gap-not-supported",
  q1 = !1;
function Pz() {
  q1 || ((q1 = !0), !tM() && document.body.classList.add(Li));
}
var nM = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
  rM = `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
  iM = `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
  oM = `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
  sM = `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  aM = `
a[data-framer-page-link-current],
a[data-framer-page-link-current] span:not([data-text-fill]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
  lM = `
a[data-framer-page-link-current]:hover,
a[data-framer-page-link-current]:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
  cM = `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
  uM = `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
  fM = `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
  dM = `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
  hM = `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
}
`,
  pM = `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
  mM = `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
  vM = `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
  gM = `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "\u2022";
}
`,
  yM = [
    '[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }',
    hM,
    dM,
    nM,
    rM,
    iM,
    oM,
    sM,
    aM,
    lM,
    cM,
    uM,
    fM,
    pM,
    mM,
    vM,
    gM,
  ],
  bM = [
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
    `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, none));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
        }
    `,
    `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
    `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
        }
    `,
    `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
        }
    `,
    `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
        }
    `,
    `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
    `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
    `
        .framer-text[data-text-fill] {
            display: inline-block;
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
    `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-code-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-font-size, 16px) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-letter-spacing, 0);
            line-height: var(--framer-line-height, 1.2em);
        }
    `,
    `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
    `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
            text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
        }
    `,
    `
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text:hover,
        code.framer-text a.framer-text:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
        }
    `,
    `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
        }
    `,
    `
        .framer-image.framer-text {
            display: block;
            max-width: 100%;
            height: auto;
        }
    `,
    `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
        }
    `,
    `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
    `
        ul.framer-text,
        ol.framer-text {
            display: table;
            width: 100%;
        }
    `,
    `
        li.framer-text {
            display: table-row;
            counter-increment: list-item;
            list-style: none;
        }
    `,
    `
        ol.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: counter(list-item, var(--list-style-type)) ".";
            white-space: nowrap;
        }
    `,
    `
        ul.framer-text > li.framer-text::before {
            display: table-cell;
            width: 2.25ch;
            box-sizing: border-box;
            padding-inline-end: 0.75ch;
            content: "\u2022";
        }
    `,
    `
        .framer-text-module[style*="aspect-ratio"] > :first-child {
            width: 100%;
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] {
                position: relative;
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
    `
        @supports not (aspect-ratio: 1) {
            .framer-text-module[style*="aspect-ratio"] > :first-child {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
            }
        }
    `,
  ],
  xM = new Set(),
  Rp;
function bw(e, t, n = xM) {
  if (!(!e || n.has(e) || typeof document > "u")) {
    if ((n.add(e), !t)) {
      if (!Rp) {
        let r = document.createElement("style");
        if (
          (r.setAttribute("type", "text/css"),
          r.setAttribute("data-framer-css", "true"),
          !document.head)
        ) {
          console.warn(
            "not injecting CSS: the document is missing a <head> element"
          );
          return;
        }
        if ((document.head.appendChild(r), r.sheet)) Rp = r.sheet;
        else {
          console.warn(
            "not injecting CSS: injected <style> element does not have a sheet",
            r
          );
          return;
        }
      }
      t = Rp;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
var SM = ["[data-framer-component-type] { position: absolute; }"],
  wM = `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
  kM = `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
  CM = `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
  TM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    text-decoration: var(--text-decoration);
    line-height: var(--line-height);
}`,
  EM = `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration);
    --line-height: var(--framer-line-height);
}`,
  RM = `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration));
}`,
  PM = `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  _M = `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration)));
}`,
  IM = [
    '[data-framer-component-type="Text"] { cursor: inherit; }',
    "[data-framer-component-text-autosized] * { white-space: pre; }",
    wM,
    kM,
    CM,
    TM,
    EM,
    RM,
    PM,
    _M,
  ],
  FM = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`,
  LM = (() => [
    `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
    `.${Li} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
  ])(),
  MM = (() => `
.${Li} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)(),
  OM = (() => `
.${Li}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Li}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)(),
  DM = (() => `
.${Li}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Li}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)(),
  AM = (() => [FM, MM, ...LM, OM, DM])(),
  VM = [
    `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
  ],
  BM = [
    '[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }',
    '[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }',
  ],
  $M = [
    '[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }',
    '[data-framer-component-type="NativeScroll"] > * { position: relative; }',
    '[data-framer-component-type="NativeScroll"].direction-both { overflow-x: scroll; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: scroll; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: scroll; overflow-y: hidden; }',
    '[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }',
    '[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }',
  ],
  zM = [
    '[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }',
  ],
  NM = [
    '[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }',
  ],
  HM = [
    '[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }',
  ],
  jM = [
    '[data-framer-cursor="pointer"] { cursor: pointer; }',
    '[data-framer-cursor="grab"] { cursor: grab; }',
    '[data-framer-cursor="grab"]:active { cursor: grabbing; }',
  ],
  WM = [
    '[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }',
    "[data-framer-generated] * { pointer-events: unset }",
  ],
  UM = [
    `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
  ],
  XM = [
    '[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
    '[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
  ],
  YM = (e) => (e ? WM : []),
  GM = [".svgContainer svg { display: block; }"],
  xw = (e) => [
    ...SM,
    ...IM,
    ...bM,
    ...yM,
    ...AM,
    ...VM,
    ...BM,
    ...$M,
    ...NM,
    ...zM,
    ...HM,
    ...jM,
    ...YM(e),
    ...GM,
    ...UM,
    ...XM,
  ],
  KM = xw(!1),
  qM = xw(!0),
  Q1 = !1;
function _a() {
  if (Q1) return;
  Q1 = !0;
  let e = ie.current() === ie.preview ? qM : KM;
  for (let t of e) bw(t, void 0, void 0);
}
function No(e) {
  return typeof e == "function";
}
function Sw(e) {
  return typeof e == "boolean";
}
function xe(e) {
  return typeof e == "string";
}
function Mt(e) {
  return Number.isFinite(e);
}
function om(e) {
  return Array.isArray(e);
}
function Pe(e) {
  return e !== null && typeof e == "object" && !om(e);
}
function St(e) {
  return typeof e > "u";
}
function Be(e) {
  return e === null;
}
function Ho(e) {
  return St(e) || Be(e);
}
function ww(e) {
  return e instanceof Date && !isNaN(e.getTime());
}
function QM(e) {
  return Pe(e) || No(e);
}
var Z1 = "optional";
function ZM(e) {
  return !!e && Z1 in e && e[Z1] === !0;
}
function JM(e) {
  try {
    switch (e.type) {
      case "string":
      case "collectionreference":
      case "color":
      case "date":
      case "link":
      case "boxshadow":
      case "padding":
      case "borderradius":
        return xe(e.defaultValue) ? e.defaultValue : void 0;
      case "boolean":
        return Sw(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return St(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
          ? e.defaultValue
          : void 0;
      case "fusednumber":
      case "number":
        return Mt(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return Pe(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return Pe(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
        return Pe(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = Pe(e.defaultValue) ? e.defaultValue : {};
        return Pe(e.controls) && kw(t, e.controls), t;
      }
      case "array":
        return om(e.defaultValue) ? e.defaultValue : void 0;
      case "file":
      case "image":
      case "richtext":
      case "pagescope":
      case "eventhandler":
      case "segmentedenum":
      case "responsiveimage":
      case "componentinstance":
      case "scrollsectionref":
      case "customcursor":
      case "cursor":
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function kw(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!St(i) || ZM(r)) continue;
    let o = JM(r);
    St(o) || (e[n] = o);
  }
}
function eO(e) {
  if (Pe(e.defaultProps)) return e.defaultProps;
  let t = {};
  return (e.defaultProps = t), t;
}
function tO(e, t) {
  if (!QM(e)) return;
  let n = eO(e);
  kw(n, t);
}
function _z(e, t) {
  Object.assign(e, { propertyControls: t }), tO(e, t);
}
function Cw(e) {
  return e.propertyControls;
}
var Ge = (e) => e;
function nO(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var rO =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/,
  iO = nO(
    (e) =>
      rO.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
  ),
  Tw = b.createContext(void 0),
  Az = (() => Tw.Provider)(),
  oO = () => b.useContext(Tw) ?? {},
  sO = Vn(em(), 1),
  Yn = typeof Me < "u" ? Me : void 0,
  Oi = () => typeof document == "object";
var aO = () =>
    Yn && /Chrome/.test(Yn.userAgent) && /Google Inc/.test(Yn.vendor) && !uO(),
  lO = () =>
    Yn && /Safari/.test(Yn.userAgent) && /Apple Computer/.test(Yn.vendor);
var cO = () => Yn && /FramerX/.test(Yn.userAgent),
  uO = () => Yn && /Edg\//.test(Yn.userAgent);
var Ew = () => sO.default.env.NODE_ENV === "test";
var J1 = (e) => () => {
    ma(e);
  },
  fO = () => () => {},
  dO = {
    useImageSource(e) {
      return e.src ?? "";
    },
    useImageElement(e, t, n) {
      let r = new Image();
      return (
        (r.src = nt.useImageSource(e, t, n)),
        e.srcSet && (r.srcset = e.srcSet),
        r
      );
    },
    canRenderOptimizedCanvasImage() {
      return !1;
    },
  },
  hO = !1,
  pO = {
    get(e, t, n) {
      return Reflect.has(e, t)
        ? Reflect.get(e, t, n)
        : ["getLogger"].includes(String(t))
        ? fO()
        : J1(
            hO
              ? `${String(t)} is not available in this version of Framer.`
              : `${String(
                  t
                )} is only available inside of Framer. https://www.framer.com/`
          );
    },
  },
  nt = new Proxy(dO, pO);
function mO(e, t, n = 1) {
  let { width: r, height: i } = t,
    o = e.pixelWidth ?? e.intrinsicWidth ?? 0,
    s = e.pixelHeight ?? e.intrinsicHeight ?? 0;
  if (r < 1 || i < 1 || o < 1 || s < 1) return;
  (r *= n), (i *= n);
  let a = r / i,
    l = o / s;
  switch (e.fit) {
    case "fill":
      return l > a ? s / i : o / r;
    case "fit":
    case "stretch":
      return Math.max(o / r, s / i);
  }
}
function eS(e, t) {
  return t && Math.max(1, e) > t ? "pixelated" : "auto";
}
var tS = {
    position: "absolute",
    borderRadius: "inherit",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  vO = {
    backgroundSize: "16px 16px",
    backgroundImage:
      "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.2) 50%)",
    border: "1px solid #c4c4c4",
  };
function gO(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Rw(e, t) {
  let n = e ?? "center",
    r = t ?? "center";
  return n === "center" && r === "center" ? "center" : n + " " + r;
}
function yO(e, t) {
  if (!t) return "auto";
  let n = ie.current() === ie.canvas ? $e.devicePixelRatio : 1,
    r = mO(e, t, n);
  return ie.current() === ie.canvas ? eS(1, r) : eS(iu.zoom, r);
}
function sm(e, t) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    borderRadius: "inherit",
    objectPosition: Rw(e.positionX, e.positionY),
    objectFit: gO(e.fit),
    imageRendering: yO(e, t),
  };
}
function bO({ image: e, containerSize: t, nodeId: n, alt: r }) {
  let i = nt.useImageSource(e, t, n),
    o = sm(e, t),
    [s, a] = b.useState(),
    l = b.useRef(null),
    c = oO();
  return (
    b.useEffect(() => {
      if (!c.imgSizesWorkaroundEnabled) return;
      let u = l.current;
      if (!u || Ew() || !e.sizes || !u.closest("[data-framer-name]")) return;
      let d = u.clientWidth,
        p = Number(e.sizes.replace("px", ""));
      (!isNaN(p) && d < p) || a(d + "px");
    }, [e.sizes]),
    C("img", {
      ref: l,
      decoding: "async",
      loading: e.loading,
      sizes: s ?? e.sizes,
      srcSet: e.srcSet,
      src: i,
      alt: r ?? e.alt,
      style: o,
    })
  );
}
function xO({ image: e, containerSize: t, nodeId: n }) {
  let r = b.useRef(null),
    i = nt.useImageElement(e, t, n),
    o = sm(e, t);
  return (
    b.useLayoutEffect(() => {
      let s = r.current;
      if (s !== null)
        return (
          s.appendChild(i),
          () => {
            s.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, o),
    C("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function SO({ nodeId: e, image: t, containerSize: n }) {
  let r = b.useRef(null),
    i = nt.useImageSource(t, n, e);
  return (
    b.useLayoutEffect(() => {
      let o = r.current;
      if (o === null) return;
      let s = sm(t, n);
      nt.renderOptimizedCanvasImage(o, i, s, e);
    }, [e, t, i, n]),
    C("div", {
      ref: r,
      style: { display: "contents", borderRadius: "inherit" },
    })
  );
}
function Pw({ layoutId: e, image: t, ...n }) {
  e && (e = e + "-background");
  let r = { ...tS, ...vO },
    i = null;
  if (xe(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let o = Mt(t.backgroundSize) ? t.backgroundSize : 1,
        s = {
          width: Math.round(o * t.pixelWidth),
          height: Math.round(o * t.pixelHeight),
        },
        a = nt.useImageSource(t, s);
      (r.backgroundImage = `url(${a})`),
        (r.backgroundRepeat = "repeat"),
        (r.backgroundPosition = Rw(t.positionX, t.positionY)),
        t.pixelWidth &&
          (r.backgroundSize = `${(o * (t.pixelWidth / 2)).toFixed(2)}px auto`),
        (r.border = 0),
        (i = null);
    } else
      ie.current() !== ie.canvas
        ? (i = C(bO, { image: t, ...n }))
        : nt.canRenderOptimizedCanvasImage(nt.useImageSource(t))
        ? (i = C(SO, { image: t, ...n }))
        : (i = C(xO, { image: t, ...n }));
  return C(Vt.div, {
    layoutId: e,
    style: i ? tS : r,
    "data-framer-background-image-wrapper": !0,
    children: i,
  });
}
var wO = "src",
  Pi = {
    isImageObject: function (e) {
      return !e || typeof e == "string" ? !1 : wO in e;
    },
  };
function kO(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    o = n ?? i,
    s = r && o ? r[o] : void 0;
  return s && typeof s == "string" && (e = { ...e, src: s }), e;
}
function CO(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Pi.isImageObject(t)) return;
  let r = null;
  if (
    (xe(n) ? (r = { alt: "", src: n }) : (r = Qe.get(t, null)),
    !!Pi.isImageObject(r))
  )
    return kO(r, e);
}
function TO(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: o } = e;
  if (!r) return;
  let s, a, l, c;
  if (
    (typeof r == "number"
      ? (s = a = l = c = r)
      : ((s = r.top || 0),
        (a = r.bottom || 0),
        (l = r.left || 0),
        (c = r.right || 0)),
    !(s === 0 && a === 0 && l === 0 && c === 0))
  ) {
    if (n && s === a && s === l && s === c) {
      t.border = `${s}px ${i} ${o}`;
      return;
    }
    (t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${s}px`),
      (t.borderBottomWidth = `${a}px`),
      (t.borderLeftWidth = `${l}px`),
      (t.borderRightWidth = `${c}px`);
  }
}
function EO(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: "inherit",
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), C(Vt.div, { style: n }))
    : (TO(e, n, !1),
      C(Vt.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function yu(e) {
  return e && e !== "search" && e !== "slot" && e !== "template"
    ? Vt[e]
    : Vt.div;
}
var RO = aO();
function _w(e) {
  let t = {};
  return (
    !RO ||
      ie.current() !== ie.canvas ||
      ((e === !0 || e === "x") && (t["data-framer-layout-hint-center-x"] = !0),
      (e === !0 || e === "y") && (t["data-framer-layout-hint-center-y"] = !0)),
    t
  );
}
function am(e) {
  return e.replace(/^id_/, "").replace(/\\/g, "");
}
function PO(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return n
    ? ((t = b.Children.map(t, (r) =>
        b.isValidElement(r) ? b.cloneElement(r, { _forwardedOverrides: n }) : r
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
function bu(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
      ? `translateX(-50%) ${n}`
      : e === "y"
      ? `translateY(-50%) ${n}`
      : n || "none";
}
function Ia(e, { specificLayoutId: t, postfix: n } = {}) {
  let {
      name: r,
      layoutIdKey: i,
      duplicatedFrom: o,
      __fromCodeComponentNode: s = !1,
      drag: a,
    } = e,
    { getLayoutId: l, enabled: c } = D(zo);
  return he(() => {
    if (!c) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (a || !i || s)) return;
    let f = u || l({ id: i, name: r, duplicatedFrom: o });
    if (f) return n ? `${f}-${n}` : f;
  }, [c]);
}
var Iw = typeof document < "u" ? In : j,
  Xo = b.createContext(!1);
function xu() {
  let [e, t] = b.useState(0);
  return b.useCallback(() => t((n) => n + 1), []);
}
var _O = (() => tF().ResizeObserver)();
var IO = class {
    constructor() {
      R(this, "sharedResizeObserver"), R(this, "callbacks", new WeakMap());
      let e = $e.ResizeObserver ?? _O;
      this.sharedResizeObserver = new e(this.updateResizedElements.bind(this));
    }
    updateResizedElements(e) {
      for (let t of e) {
        let n = this.callbacks.get(t.target);
        n && n(t.contentRect);
      }
    }
    observeElementWithCallback(e, t) {
      this.sharedResizeObserver.observe(e), this.callbacks.set(e, t);
    }
    unobserve(e) {
      this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e);
    }
  },
  Wc = (() => (Oi() ? new IO() : void 0))();
function FO(e) {
  let t = xu();
  j(() => {
    let n = e?.current;
    if (n)
      return (
        Wc?.observeElementWithCallback(e.current, t),
        () => {
          Wc?.unobserve(n);
        }
      );
  }, [e, t]);
}
var LO = "data-framer-size-compatibility-wrapper";
function MO(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(LO)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Fw)
    .map(Lw);
}
function Fw(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Lw(e) {
  if (
    !(e instanceof HTMLElement) ||
    e.children.length === 0 ||
    e.style.display !== "contents"
  )
    return e;
  let t = [...e.children].find(Fw);
  return t ? Lw(t) : e;
}
function Su(e, t, n = () => [], r = {}) {
  let { id: i, visible: o, _needsMeasure: s } = e,
    { skipHook: a = !1 } = r,
    l = !!D(Xo),
    c = ie.current() === ie.canvas;
  Iw(() => {
    !c ||
      l ||
      a ||
      (t.current &&
        i &&
        o &&
        s &&
        nt.queueMeasureRequest(am(i), t.current, n(t.current)));
  });
}
function OO(e) {
  let t = e.closest("[data-framer-component-container]");
  t && nt.queueMeasureRequest(am(t.id), t, MO(t));
}
var Mi = Object.keys;
function ga(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function nS(e) {
  return ga(e, "equals") ? typeof e.equals == "function" : !1;
}
function lm(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function DO(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!lm(e[r], t[r])) return !1;
  return !0;
}
function AO(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0; ) if (!wu(e[r], t[r], !0)) return !1;
  return !0;
}
function VO(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!lm(r, t.get(n))) return !1;
  return !0;
}
function BO(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!wu(r, t.get(n), !0)) return !1;
  return !0;
}
function $O(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function zO(e, t) {
  let n = Mi(e);
  if (n.length !== Mi(t).length) return !1;
  for (let r of n) {
    if (!ga(t, r)) return !1;
    if (!(r === "_owner" && ga(e, "$$typeof") && e.$$typeof) && !lm(e[r], t[r]))
      return !1;
  }
  return !0;
}
function NO(e, t) {
  let n = Mi(e);
  if (n.length !== Mi(t).length) return !1;
  for (let r of n) {
    if (!ga(t, r)) return !1;
    if (
      !(r === "_owner" && ga(e, "$$typeof") && e.$$typeof) &&
      !wu(e[r], t[r], !0)
    )
      return !1;
  }
  return !0;
}
function wu(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== "object") return !1;
  let o = Array.isArray(e),
    s = Array.isArray(t);
  if (o && s) return n ? AO(e, t) : DO(e, t);
  if (o !== s) return !1;
  let a = e instanceof Map,
    l = t instanceof Map;
  if (a && l) return n ? BO(e, t) : VO(e, t);
  if (a !== l) return !1;
  let c = e instanceof Set,
    u = t instanceof Set;
  if (c && u) return $O(e, t);
  if (c !== u) return !1;
  let f = e instanceof Date,
    d = t instanceof Date;
  if (f && d) return e.getTime() === t.getTime();
  if (f !== d) return !1;
  let p = e instanceof RegExp,
    g = t instanceof RegExp;
  return p && g
    ? e.toString() === t.toString()
    : p !== g
    ? !1
    : nS(e) && nS(t)
    ? e.equals(t)
    : n
    ? NO(e, t)
    : zO(e, t);
}
function Ue(e, t, n = !0) {
  try {
    return wu(e, t, n);
  } catch (r) {
    if (r instanceof Error && /stack|recursion/iu.exec(r.message))
      return (
        console.warn(
          "Warning: isEqual does not handle circular references.",
          r.name,
          r.message
        ),
        !1
      );
    throw r;
  }
}
var Mw = "0.000001px",
  Pp = (() => ` translateZ(${Mw})`)(),
  Ow = (() => cO() || lO() || Ew())();
function HO(e) {
  e.willChange = "transform";
  let t = ie.current() === ie.canvas;
  Ow && t && (e.translateZ = Mw);
}
function cm(e) {
  (e.willChange = "transform"), jO(e, !0);
}
function jO(e, t) {
  let n = ie.current() === ie.canvas;
  if (!Ow || !n) return;
  let r = (xe(e.transform) && e.transform) || "";
  t
    ? r.includes(Pp) || (e.transform = r + Pp)
    : (e.transform = r.replace(Pp, ""));
}
function Dw(e, t, n, r = !0) {
  if (!e) return;
  let i = Ge(e.style),
    o = n || i[t],
    s = () => {
      i[t] = o;
    };
  (i[t] = null), r ? Promise.resolve().then(s) : setTimeout(s, 0);
}
var Zc = (() => {
  class e extends ge {
    constructor() {
      super(...arguments),
        R(this, "layerElement", null),
        R(this, "setLayerElement", (n) => {
          this.layerElement = n;
        });
    }
    static applyWillChange(n, r, i) {
      n.willChangeTransform && (i ? HO(r) : cm(r));
    }
    shouldComponentUpdate(n, r) {
      return n._needsMeasure || this.state !== r || !Ue(this.props, n);
    }
    componentDidUpdate(n) {
      Ge(this.props).clip &&
        Ge(this.props).radius === 0 &&
        Ge(n).radius !== 0 &&
        Dw(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return R(e, "defaultProps", {}), e;
})();
function WO(e, t) {
  if (e.size < t) return;
  let r = Math.round(Math.random());
  for (let i of e.keys()) (++r & 1) !== 1 && e.delete(i);
}
function UO(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  WO(t, e);
  let o = r(n);
  return t.set(n, o), o;
}
var Aw = (e) => {
    let t = 0,
      n,
      r;
    if (e.length === 0) return t;
    for (n = 0; n < e.length; n++)
      (r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0);
    return t;
  },
  um = {
    hueRotate: (e, t) => X.toHslString(X.hueRotate(X(e), t)),
    setAlpha: (e, t) => X.toRgbString(X.alpha(X(e), t)),
    getAlpha: (e) => {
      let t = im(e);
      return t ? t.a : 1;
    },
    multiplyAlpha: (e, t) => X.toRgbString(X.multiplyAlpha(X(e), t)),
    toHex: (e) => X.toHexString(X(e)).toUpperCase(),
    toRgb: (e) => X.toRgb(X(e)),
    toRgbString: (e) => X.toRgbString(X(e)),
    toHSV: (e) => X.toHsv(X(e)),
    toHSL: (e) => X.toHsl(X(e)),
    toHslString: (e) => X.toHslString(X(e)),
    toHsvString: (e) => X.toHsvString(X(e)),
    hsvToHSLString: (e) => X.toHslString(X(Hc(e.h, e.s, e.v, e.a))),
    hsvToHex: (e) => X.toHexString(X(Hc(e.h, e.s, e.v, e.a))).toUpperCase(),
    hsvToRgbString: (e) => X.toRgbString(X(Hc(e.h, e.s, e.v, e.a))),
    hsvToString: (e) => Hc(e.h, e.s, e.v),
    rgbaToString: (e) => X.toRgbString(X(e)),
    rgbToHexString: (e) => X.toHexString(X(e)),
    hslToString: (e) => X.toHslString(X(e)),
    hslToRgbString: (e) => X.toRgbString(X(e)),
    toColorPickerSquare: (e) => X.toRgbString(X({ h: e, s: 1, l: 0.5, a: 1 })),
    isValid: (e) => X(e).isValid !== !1,
    equals: (e, t) => (
      typeof e == "string" && (e = X(e)),
      typeof t == "string" && (t = X(t)),
      X.equal(e, t)
    ),
    toHexOrRgbaString: (e) => {
      let t = X(e);
      return t.a !== 1 ? X.toRgbString(t) : X.toHexString(t);
    },
  },
  XO = /var\(.+\)/,
  YO = new Map();
function GO(e, t) {
  let n = [e, t];
  return XO.test(e) ? e : UO(1e3, YO, n, () => um.multiplyAlpha(e, t));
}
function Fa(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((r) => ({ ...r, value: GO(r.value, t) }))
  );
}
function Vw(e, t) {
  let n = 0;
  return (
    Fa(e, t).forEach((r) => {
      n ^= Aw(r.value) ^ r.position;
    }),
    n
  );
}
var KO = ["stops"];
function Bw(e) {
  return e && KO.every((t) => t in e);
}
var qO = ["start", "end"];
function $w(e) {
  return e && qO.every((t) => t in e);
}
var QO = ["angle", "alpha"],
  ya = {
    isLinearGradient: (e) => e && QO.every((t) => t in e) && ($w(e) || Bw(e)),
    hash: (e) => e.angle ^ Vw(e, e.alpha),
    toCSS: (e, t) => {
      let n = Fa(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = n.map((o) => `${o.value} ${o.position * 100}%`);
      return `linear-gradient(${r}deg, ${i.join(", ")})`;
    },
  },
  ZO = [
    "widthFactor",
    "heightFactor",
    "centerAnchorX",
    "centerAnchorY",
    "alpha",
  ],
  ba = {
    isRadialGradient: (e) => e && ZO.every((t) => t in e) && ($w(e) || Bw(e)),
    hash: (e) =>
      e.centerAnchorX ^
      e.centerAnchorY ^
      e.widthFactor ^
      e.heightFactor ^
      Vw(e, e.alpha),
    toCSS: (e) => {
      let {
          alpha: t,
          widthFactor: n,
          heightFactor: r,
          centerAnchorX: i,
          centerAnchorY: o,
        } = e,
        s = Fa(e, t),
        a = s.map((l, c) => {
          let u = s[c + 1],
            f =
              l.position === 1 && u?.position === 1
                ? l.position - 1e-4
                : l.position;
          return `${l.value} ${f * 100}%`;
        });
      return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${
        o * 100
      }%, ${a.join(", ")})`;
    },
  };
function JO({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || Y1(t)
      ? (n.backgroundColor = t)
      : X.isColorObject(e) &&
        (n.backgroundColor = e.initialValue || X.toRgbString(e))
    : e &&
      ((e = Qe.get(e, null)),
      typeof e == "string" || Y1(e)
        ? (n.background = e)
        : ya.isLinearGradient(e)
        ? (n.background = ya.toCSS(e))
        : ba.isRadialGradient(e)
        ? (n.background = ba.toCSS(e))
        : X.isColorObject(e) &&
          (n.backgroundColor = e.initialValue || X.toRgbString(e)));
}
function ue(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function eD(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function tD(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function nD(e) {
  if (!e) return {};
  let t = {};
  return (
    e.preserve3d === !0
      ? (t.transformStyle = "preserve-3d")
      : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = "visible")
      : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 &&
      (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = "50%"), (t.top = "50%"))
        : e.center === "x"
        ? (t.left = "50%")
        : e.center === "y" && (t.top = "50%")),
    ue(e, "size", t),
    ue(e, "width", t),
    ue(e, "height", t),
    ue(e, "minWidth", t),
    ue(e, "minHeight", t),
    ue(e, "top", t),
    ue(e, "right", t),
    ue(e, "bottom", t),
    ue(e, "left", t),
    ue(e, "position", t),
    ue(e, "overflow", t),
    ue(e, "opacity", t),
    (!e._border || !e._border.borderWidth) && ue(e, "border", t),
    ue(e, "borderRadius", t),
    ue(e, "radius", t, "borderRadius"),
    ue(e, "color", t),
    ue(e, "shadow", t, "boxShadow"),
    ue(e, "x", t),
    ue(e, "y", t),
    ue(e, "z", t),
    ue(e, "rotate", t),
    ue(e, "rotateX", t),
    ue(e, "rotateY", t),
    ue(e, "rotateZ", t),
    ue(e, "scale", t),
    ue(e, "scaleX", t),
    ue(e, "scaleY", t),
    ue(e, "skew", t),
    ue(e, "skewX", t),
    ue(e, "skewY", t),
    ue(e, "originX", t),
    ue(e, "originY", t),
    ue(e, "originZ", t),
    JO(e, t),
    t
  );
}
function rD(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof Ge(e)[t] == "function" &&
        t.startsWith("on") &&
        !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var rS = [
    "onClick",
    "onDoubleClick",
    "onMouse",
    "onMouseDown",
    "onMouseUp",
    "onTapDown",
    "onTap",
    "onTapUp",
    "onPointer",
    "onPointerDown",
    "onPointerUp",
    "onTouch",
    "onTouchDown",
    "onTouchUp",
  ],
  iD = (() => new Set([...rS, ...rS.map((e) => `${e}Capture`)]))();
function oD(e) {
  if (e.drag) return "grab";
  for (let t in e) if (iD.has(t)) return "pointer";
}
var _p = "overflow";
function sD(e) {
  return iS(e) ? !0 : e.style ? !!iS(e.style) : !1;
}
function iS(e) {
  return _p in e && (e[_p] === "scroll" || e[_p] === "auto");
}
function zw(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: o,
      height: s,
      center: a,
      _constraints: l,
      size: c,
      widthType: u,
      heightType: f,
      positionFixed: d,
      positionAbsolute: p,
    } = e,
    g = dt(e.minWidth),
    v = dt(e.minHeight),
    x = dt(e.maxWidth),
    m = dt(e.maxHeight);
  return {
    top: dt(n),
    left: dt(t),
    bottom: dt(r),
    right: dt(i),
    width: dt(o),
    height: dt(s),
    size: dt(c),
    center: a,
    _constraints: l,
    widthType: u,
    heightType: f,
    positionFixed: d,
    positionAbsolute: p,
    minWidth: g,
    minHeight: v,
    maxWidth: x,
    maxHeight: m,
  };
}
var oS = { x: 0, y: 0, width: 200, height: 200 };
function aD(e) {
  b.useInsertionEffect(() => {
    _a();
  }, []);
  let t = !!D(Xo),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: o } = e,
    s = zw(e),
    a = JL(s),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: ie.current() !== ie.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor =
      e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let c = !rD(e) && !e.__fromCanvasComponent && !sD(e),
    u = e.style ? !("pointerEvents" in e.style) : !0;
  c && u && (l.pointerEvents = "none");
  let d = b.Children.count(e.children) > 0 &&
      b.Children.toArray(e.children).every(
        (m) => typeof m == "string" || typeof m == "number"
      ) && {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      },
    p = nD(e);
  o === void 0 &&
    !i &&
    (eD(p) || (l.width = oS.width), tD(p) || (l.height = oS.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight);
  let g = {};
  Ra(s) &&
    a &&
    !yw(e) &&
    (g = {
      left: a.x,
      top: a.y,
      width: a.width,
      height: a.height,
      right: void 0,
      bottom: void 0,
    }),
    Object.assign(l, d, r, p, g, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Zc.applyWillChange(e, l, !0);
  let v = l;
  l.transform || (v = { x: 0, y: 0, ...l });
  let x = ie.current() === ie.canvas;
  return (
    e.positionSticky
      ? (!x || t) &&
        ((v.position = "sticky"),
        (v.willChange = "transform"),
        (v.zIndex = 1),
        (v.top = e.positionStickyTop),
        (v.right = e.positionStickyRight),
        (v.bottom = e.positionStickyBottom),
        (v.left = e.positionStickyLeft))
      : x &&
        (e.positionFixed || e.positionAbsolute) &&
        (v.position = "absolute"),
    "rotate" in v && v.rotate === void 0 && delete v.rotate,
    [v, a]
  );
}
var lD = new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ",
]);
function cD(e) {
  let t = {};
  for (let n in e)
    (Ui(n) || iO(n)) && !lD.has(n)
      ? (t[n] = Ge(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof Ge(e)[n] != "boolean" &&
          !e.transition &&
          (t.transition = Ge(e)[n]));
  return t;
}
function uD(e) {
  return "data-framer-name" in e;
}
var fD = Ne(function (t, n) {
    let { name: r, center: i, border: o, _border: s, __portal: a } = t,
      { props: l, children: c } = PO(t),
      u = cD(l),
      f = Ia(t),
      d = oD(t),
      p = A(null),
      g = n ?? p,
      v = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": d,
        "data-framer-highlight": d === "pointer" ? !0 : void 0,
        "data-layoutid": f,
        "data-framer-offset-parent-id": Ge(t)["data-framer-offset-parent-id"],
      };
    !uD(t) && r && (Ge(v)["data-framer-name"] = r);
    let [x, m] = aD(l),
      h = zw(l),
      y = yw(h);
    i && !(m && !y && Ra(h))
      ? (u.transformTemplate || (u.transformTemplate = bu(i)),
        Object.assign(v, _w(i)))
      : u.transformTemplate || (u.transformTemplate = void 0),
      Su(t, g);
    let S = CO(t),
      k = !!D(Xo),
      w = dD(l, h, m, k),
      T = ZL(
        se(Oe, {
          children: [
            S
              ? C(Pw, {
                  alt: t.alt ?? "",
                  image: S,
                  containerSize: m ?? void 0,
                  nodeId: t.id && am(t.id),
                  layoutId: f,
                })
              : null,
            c,
            C(EO, { ...s, border: o, layoutId: f }),
          ],
        }),
        w
      ),
      E = yu(t.as),
      { size: F, radius: I, shadow: $ } = x;
    return (
      F !== void 0 &&
        (delete x.size,
        x.height === void 0 && (x.height = F),
        x.width === void 0 && (x.width = F)),
      I !== void 0 && (delete x.radius, (x.borderRadius = I)),
      $ !== void 0 && (delete x.shadow, (x.boxShadow = $)),
      se(E, { ...v, ...u, layoutId: f, style: x, ref: g, children: [T, a] })
    );
  }),
  Jc = Ne(function (t, n) {
    let { visible: r = !0 } = t;
    return r ? C(fD, { ...t, ref: n }) : null;
  });
function dD(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: o = 0, heightType: s = 0, width: a, height: l } = t;
  return n && !i
    ? n
    : o === 0 && s === 0 && typeof a == "number" && typeof l == "number"
    ? { width: a, height: l }
    : i || e.positionFixed || e.positionAbsolute
    ? 2
    : 0;
}
var fm = "__LAYOUT_TREE_ROOT",
  Nw = b.createContext({
    schedulePromoteTree: () => {},
    scheduleProjectionDidUpdate: () => {},
    initLead: () => {},
  }),
  hD = class extends ge {
    constructor() {
      super(...arguments),
        R(this, "shouldAnimate", !1),
        R(this, "transition"),
        R(this, "lead"),
        R(this, "follow"),
        R(this, "scheduledPromotion", !1),
        R(this, "scheduledDidUpdate", !1),
        R(this, "scheduleProjectionDidUpdate", () => {
          this.scheduledDidUpdate = !0;
        }),
        R(this, "schedulePromoteTree", (e, t, n) => {
          (this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0);
        }),
        R(this, "initLead", (e, t) => {
          (this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0);
        }),
        R(this, "sharedLayoutContext", {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        });
    }
    getSnapshotBeforeUpdate() {
      var e;
      if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
      let t =
        !!((e = this.lead) != null && e.layoutMaybeMutated) &&
        !this.shouldAnimate;
      return (
        this.lead.projectionNodes.forEach((n) => {
          var r;
          n?.promote({
            needsReset: t,
            transition: this.shouldAnimate ? this.transition : void 0,
            preserveFollowOpacity:
              n.options.layoutId === fm &&
              !((r = this.follow) != null && r.isExiting),
          });
        }),
        this.shouldAnimate
          ? (this.follow.layoutMaybeMutated = !0)
          : this.scheduleProjectionDidUpdate(),
        (this.lead.layoutMaybeMutated = !1),
        (this.transition = void 0),
        (this.scheduledPromotion = !1),
        null
      );
    }
    componentDidUpdate() {
      var e, t;
      if (!this.lead) return null;
      this.scheduledDidUpdate &&
        ((t = (e = this.lead.rootProjectionNode) == null ? void 0 : e.root) ==
          null || t.didUpdate(),
        (this.scheduledDidUpdate = !1));
    }
    render() {
      return C(Nw.Provider, {
        value: this.sharedLayoutContext,
        children: this.props.children,
      });
    }
  },
  pD = { width: "100%", height: "100%", backgroundColor: "none" };
function mD(e) {
  return C(Vt.div, { layoutId: fm, style: pD, children: e.children });
}
var vD = class {
    constructor(e) {
      R(this, "sharedIntersectionObserver"),
        R(this, "callbacks", new WeakMap()),
        document &&
          (this.sharedIntersectionObserver = new IntersectionObserver(
            this.resizeObserverCallback.bind(this),
            e
          ));
    }
    resizeObserverCallback(e, t) {
      for (let n of e) {
        let r = this.callbacks.get(n.target);
        r && r([n], t);
      }
    }
    observeElementWithCallback(e, t) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
    }
    unobserve(e) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.unobserve(e),
        this.callbacks.delete(e));
    }
    get root() {
      var e;
      return (e = this.sharedIntersectionObserver) == null ? void 0 : e.root;
    }
  },
  gD = b.createContext(new Map());
function yD(e, t, n) {
  if (typeof IntersectionObserver > "u") return;
  let r = Lt(() => `${n.rootMargin}`),
    i = b.useContext(gD),
    { enabled: o } = n;
  b.useEffect(() => {
    var s;
    let a = e.current;
    if (!o || !a) return;
    let l = i.get(r);
    if (!l || l.root !== ((s = n.root) == null ? void 0 : s.current)) {
      let { root: c, ...u } = n;
      (l = new vD({ ...u, root: c?.current })), i.set(r, l);
    }
    return l.observeElementWithCallback(a, t), () => l?.unobserve(a);
  }, [o]);
}
var bD = new Array(100).fill(void 0).map((e, t) => t * 0.01),
  xD = b.createContext(null);
function Hw(e, t, n) {
  let r = b.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    {
      enabled: i,
      animateOnce: o,
      threshold: s,
      rootMargin: a = "0px 0px 0px 0px",
    } = n,
    l = b.useCallback(
      ([c]) => {
        if (!c) return;
        let { isInView: u, hasAnimatedOnce: f } = r.current,
          d = wD(c, s?.y ?? 0);
        if (d && !u) {
          if (o && f) return;
          (r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0);
          return;
        }
        if (!d && u) {
          if (((r.current.isInView = !1), o)) return;
          t(!1);
          return;
        }
      },
      [o, s?.y, t]
    );
  yD(e, l, { threshold: bD, rootMargin: a, enabled: i ?? !0 });
}
function SD(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, $e.innerHeight);
}
function wD(
  { boundingClientRect: e, intersectionRect: t, isIntersecting: n },
  r
) {
  return e.height === 0 ? n : n && SD(t, e) >= r;
}
var s6 = Vn(pu(), 1);
var l6 = Vn(pu(), 1);
var sS = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
  pr = Symbol("private"),
  Ip = (() => {
    function e(t = {}, n = !1, r = !0) {
      let i = {
          [pr]: {
            makeAnimatables: n,
            observeAnimatables: r,
            observers: new cw(),
            reset() {
              for (let s in o)
                if (sS(o, s)) {
                  let a = sS(t, s) ? Ge(t)[s] : void 0;
                  a !== void 0 ? (o[s] = a) : delete o[s];
                }
            },
            transactions: new Set(),
          },
        },
        o = new Proxy(i, CD);
      return Object.assign(o, t), o;
    }
    return (
      (e.resetObject = (t) => t[pr].reset()),
      (e.addObserver = (t, n) => t[pr].observers.add(n)),
      e
    );
  })(),
  kD = class {
    constructor() {
      R(this, "set", (e, t, n, r) => {
        if (t === pr) return !1;
        let i = e[pr],
          o,
          s;
        if (
          (Rn(n) ? ((o = n), (s = o.get())) : (s = n),
          i.makeAnimatables &&
            typeof n != "function" &&
            typeof n != "object" &&
            !o &&
            (o = Qe(n)),
          i.observeAnimatables && o)
        ) {
          let u = i.transactions;
          o.onUpdate({
            update: (f, d) => {
              d && u.add(d), i.observers.notify({ value: r }, d);
            },
            finish: (f) => {
              u.delete(f) && i.observers.finishTransaction(f);
            },
          });
        }
        let a = !1,
          l = !0,
          c = Ge(e)[t];
        if (c !== void 0) {
          Rn(c)
            ? ((l = c.get() !== s), c.set(s))
            : ((l = c !== s), (Ge(e)[t] = s));
          let u = s !== null && typeof s == "object";
          (Array.isArray(s) || u) && (l = !0), (a = !0);
        } else o && (n = o), (a = Reflect.set(e, t, n));
        return l && i.observers.notify({ value: r }), a;
      }),
        R(this, "get", (e, t, n) => {
          if (t === pr) return Ge(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == "function" ? r.bind(n) : r;
        });
    }
    deleteProperty(e, t) {
      let n = Reflect.deleteProperty(e, t);
      return e[pr].observers.notify({ value: e }), n;
    }
    ownKeys(e) {
      let t = Reflect.ownKeys(e),
        n = t.indexOf(pr);
      return n !== -1 && t.splice(n, 1), t;
    }
    getOwnPropertyDescriptor(e, t) {
      if (t !== pr) return Reflect.getOwnPropertyDescriptor(e, t);
    }
  },
  CD = new kD();
var TD = "opacity";
function ED(e) {
  return TD in e;
}
function RD(e, t) {
  if (!ED(e)) return;
  let n = Qe.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function PD(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map(
      (r) => `drop-shadow(${r.x}px ${r.y}px ${r.blur}px ${r.color})`
    );
    t.push(...n);
  }
  return t;
}
function jw(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows
    .map((r) => `${r.x}px ${r.y}px ${r.blur}px ${r.color}`)
    .join(", ");
  n && (t.textShadow = n);
}
function _D(e, t) {
  let n = [];
  Z(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    Z(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    Z(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    Z(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    Z(e.invert) && n.push(`invert(${e.invert / 100})`),
    Z(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    Z(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    Z(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...PD(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(" "));
}
function ID(e, t) {
  Z(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function dm(e, t) {
  ID(e, t), _D(e, t);
}
var FD = class extends ge {
    constructor() {
      super(...arguments),
        R(this, "layoutMaybeMutated"),
        R(this, "projectionNodes", new Map()),
        R(this, "rootProjectionNode"),
        R(this, "isExiting"),
        R(
          this,
          "shouldPreserveFollowOpacity",
          (e) => e.options.layoutId === fm && !this.props.isExiting
        ),
        R(this, "switchLayoutGroupContext", {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        });
    }
    componentDidMount() {
      this.props.isLead &&
        this.props.sharedLayoutContext.initLead(
          this,
          !!this.props.animatesLayout
        );
    }
    shouldComponentUpdate(e) {
      let {
        isLead: t,
        isExiting: n,
        isOverlayed: r,
        animatesLayout: i,
        transition: o,
        sharedLayoutContext: s,
      } = e;
      if (((this.isExiting = n), t === void 0)) return !0;
      let a = !this.props.isLead && !!t,
        l = this.props.isExiting && !n,
        c = a || l,
        u = !!this.props.isLead && !t,
        f = this.props.isOverlayed !== r;
      return (
        (c || u) && this.projectionNodes.forEach((d) => d?.willUpdate()),
        c
          ? s.schedulePromoteTree(this, o, !!i)
          : f && s.scheduleProjectionDidUpdate(),
        !!c && !!i
      );
    }
    addChild(e) {
      let t = e.options.layoutId;
      t && (this.projectionNodes.set(t, e), this.setRootChild(e));
    }
    setRootChild(e) {
      if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
      this.rootProjectionNode =
        this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
    }
    removeChild(e) {
      let t = e.options.layoutId;
      t && this.projectionNodes.delete(t);
    }
    render() {
      return C(il.Provider, {
        value: this.switchLayoutGroupContext,
        children: this.props.children,
      });
    }
  },
  LD = (e) => {
    let t = b.useContext(Nw);
    return C(FD, { ...e, sharedLayoutContext: t });
  },
  MD = b.createContext(!0);
function OD() {
  return new Map();
}
function DD() {
  return Lt(OD);
}
var Ww = Se({ register: () => {}, deregister: () => {} }),
  AD = ({ isCurrent: e, isOverlayed: t, children: n }) => {
    let r = DD(),
      i = ve(
        (a) => {
          if (r.has(a)) {
            console.warn("NavigationTargetWrapper: already registered");
            return;
          }
          r.set(a, void 0);
        },
        [r]
      ),
      o = ve(
        (a) => {
          let l = r.get(a);
          l?.(), r.delete(a);
        },
        [r]
      ),
      s = A({ register: i, deregister: o }).current;
    return (
      j(
        () => (
          r.forEach((a, l) => {
            let c = l(e, t);
            r.set(l, No(c) ? c : void 0);
          }),
          () => {
            r.forEach((a, l) => {
              a && (a(), r.set(l, void 0));
            });
          }
        ),
        [e, t, r]
      ),
      C(Ww.Provider, { value: s, children: n })
    );
  };
function VD(e, t = []) {
  let { register: n, deregister: r } = D(Ww);
  j(() => {
    if (e) return n(e), () => r(e);
  }, [n, r, ...t]);
}
var Fp = b.memo(function ({
  isLayeredContainer: t,
  isCurrent: n,
  isPrevious: r,
  isOverlayed: i = !1,
  visible: o,
  transitionProps: s,
  children: a,
  backdropColor: l,
  onTapBackdrop: c,
  backfaceVisible: u,
  exitBackfaceVisible: f,
  animation: d,
  exitAnimation: p,
  instant: g,
  initialProps: v,
  exitProps: x,
  position: m = { top: 0, right: 0, bottom: 0, left: 0 },
  withMagicMotion: h,
  index: y,
  areMagicMotionLayersPresent: S,
  id: k,
  isInitial: w,
}) {
  let T = n0(),
    E = D(Gi),
    { persistLayoutIdCache: F } = D(zo),
    I = A({
      wasCurrent: void 0,
      wasPrevious: !1,
      wasBeingRemoved: !1,
      wasReset: !0,
      origins: aS({}, v, s),
    }),
    $ = A(null),
    B = E !== null && !E.isPresent;
  n && I.current.wasCurrent === void 0 && F(),
    j(() => {
      if (t || !T) return;
      if (B) {
        I.current = { ...I.current, wasBeingRemoved: B };
        return;
      }
      let { wasPrevious: te, wasCurrent: oe } = I.current,
        wt = (n && !oe) || (!B && I.current.wasBeingRemoved && n),
        me = r && !te,
        Ze = aS(I.current.origins, v, s),
        Xe = I.current.wasReset;
      wt || me
        ? (T.stop(), T.start({ zIndex: y, ...Ze, ...s }), (Xe = !1))
        : Xe === !1 &&
          (T.stop(), T.set({ zIndex: y, ..._i, opacity: 0 }), (Xe = !0)),
        (I.current = {
          wasCurrent: !!n,
          wasPrevious: !!r,
          wasBeingRemoved: !1,
          wasReset: Xe,
          origins: Ze,
        });
    }, [n, r, B]);
  let q = g ? { type: !1 } : "velocity" in d ? { ...d, velocity: 0 } : d,
    J = g ? { type: !1 } : p || d,
    W = { ...m };
  (W.left === void 0 || W.right === void 0) && (W.width = "auto"),
    (W.top === void 0 || W.bottom === void 0) && (W.height = "auto");
  let Y = (lS(s) || lS(v)) && (t || n || r) ? 1200 : void 0,
    G = { ..._i, ...I.current.origins },
    N = t
      ? {
          initial: { ...G, ...v },
          animate: { ...G, ...s, transition: q },
          exit: { ...G, ...x, transition: d },
        }
      : { animate: T, exit: { ...G, ...x, transition: J } },
    ee = !(B || S === !1),
    re = !!n && ee;
  return se(Jc, {
    "data-framer-component-type": "NavigationContainerWrapper",
    width: "100%",
    height: "100%",
    style: {
      position: "absolute",
      transformStyle: "flat",
      backgroundColor: "transparent",
      overflow: "hidden",
      zIndex: t || B || (n && h) ? y : void 0,
      pointerEvents: void 0,
      visibility: o ? "visible" : "hidden",
      perspective: Y,
    },
    children: [
      t &&
        C(Jc, {
          width: "100%",
          height: "100%",
          "data-framer-component-type": "NavigationContainerBackdrop",
          transition: d,
          initial: { opacity: g && o ? 1 : 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          backgroundColor: l || "transparent",
          onTap: B ? void 0 : c,
        }),
      C(Jc, {
        ...W,
        ...N,
        transition: {
          default: q,
          originX: { type: !1 },
          originY: { type: !1 },
          originZ: { type: !1 },
        },
        backgroundColor: "transparent",
        backfaceVisible: B ? f : u,
        "data-framer-component-type": "NavigationContainer",
        "data-framer-is-current-navigation-target": !!n,
        style: {
          pointerEvents: void 0,
          opacity: (n && w) || t || (n && h) ? 1 : 0,
        },
        "data-is-present": ee ? void 0 : !1,
        ref: $,
        children: C(xD.Provider, {
          value: $,
          children: C(MD.Provider, {
            value: re,
            children: C(AD, {
              isCurrent: re,
              isOverlayed: i,
              children: C(LD, {
                isLead: n,
                animatesLayout: !!h,
                transition: q,
                isExiting: !ee,
                isOverlayed: i,
                id: k,
                children: a,
              }),
            }),
          }),
        }),
      }),
    ],
  });
},
BD);
function BD(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function aS(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (Z(t.originX) && (r.originX = t.originX),
      Z(t.originY) && (r.originY = t.originY),
      Z(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (Z(n.originX) && (r.originX = n.originX),
      Z(n.originY) && (r.originY = n.originY),
      Z(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function lS(e) {
  var t, n, r;
  if (!e || !("rotateX" in e || "rotateY" in e || "z" in e)) return !1;
  let o = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    s =
      ((t = e?.transition) == null ? void 0 : t.rotateX.from) !== 0 ||
      ((n = e?.transition) == null ? void 0 : n.rotateY.from) !== 0 ||
      ((r = e?.transition) == null ? void 0 : r.z.from) !== 0;
  return o || s;
}
var _i = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    scaleX: 1,
    scaleY: 1,
    scaleZ: 1,
    skew: 0,
    skewX: 0,
    skewY: 0,
    originX: 0.5,
    originY: 0.5,
    originZ: 0,
    opacity: 1,
  },
  $D = class {
    constructor() {
      R(this, "warning", () => {
        ma(
          "The Navigator API is only available inside of Framer: https://www.framer.com/"
        );
      }),
        R(this, "goBack", () => this.warning()),
        R(this, "instant", () => this.warning()),
        R(this, "fade", () => this.warning()),
        R(this, "push", () => this.warning()),
        R(this, "modal", () => this.warning()),
        R(this, "overlay", () => this.warning()),
        R(this, "flip", () => this.warning()),
        R(this, "customTransition", () => this.warning()),
        R(this, "magicMotion", () => this.warning());
    }
  },
  zD = new $D(),
  ND = Se(zD),
  tt = {
    Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
    PushLeft: { exit: { x: "-30%" }, enter: { x: "100%" } },
    PushRight: { exit: { x: "30%" }, enter: { x: "-100%" } },
    PushUp: { exit: { y: "-30%" }, enter: { y: "100%" } },
    PushDown: { exit: { y: "30%" }, enter: { y: "-100%" } },
    Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
    Modal: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { center: !0 },
      enter: { opacity: 0, scale: 1.2 },
    },
    OverlayLeft: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { right: 0, top: 0, bottom: 0 },
      enter: { x: "100%" },
    },
    OverlayRight: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { left: 0, top: 0, bottom: 0 },
      enter: { x: "-100%" },
    },
    OverlayUp: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { bottom: 0, left: 0, right: 0 },
      enter: { y: "100%" },
    },
    OverlayDown: {
      overCurrentContext: !0,
      goBackOnTapOutside: !0,
      position: { top: 0, left: 0, right: 0 },
      enter: { y: "-100%" },
    },
    FlipLeft: {
      backfaceVisible: !1,
      exit: { rotateY: -180 },
      enter: { rotateY: 180 },
    },
    FlipRight: {
      backfaceVisible: !1,
      exit: { rotateY: 180 },
      enter: { rotateY: -180 },
    },
    FlipUp: {
      backfaceVisible: !1,
      exit: { rotateX: 180 },
      enter: { rotateX: -180 },
    },
    FlipDown: {
      backfaceVisible: !1,
      exit: { rotateX: -180 },
      enter: { rotateX: 180 },
    },
    MagicMotion: { withMagicMotion: !0 },
  };
function HD(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "right") {
    case "right":
      return tt.PushLeft;
    case "left":
      return tt.PushRight;
    case "bottom":
      return tt.PushUp;
    case "top":
      return tt.PushDown;
  }
}
function jD(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return tt.OverlayLeft;
    case "left":
      return tt.OverlayRight;
    case "bottom":
      return tt.OverlayUp;
    case "top":
      return tt.OverlayDown;
  }
}
function WD(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : "bottom") {
    case "right":
      return tt.FlipLeft;
    case "left":
      return tt.FlipRight;
    case "bottom":
      return tt.FlipUp;
    case "top":
      return tt.FlipDown;
  }
}
var UD = () => ({
  current: -1,
  previous: -1,
  currentOverlay: -1,
  previousOverlay: -1,
  visualIndex: 0,
  overlayItemId: 0,
  historyItemId: 0,
  history: [],
  overlayStack: [],
  containers: {},
  containerIndex: {},
  containerVisualIndex: {},
  containerIsRemoved: {},
  transitionForContainer: {},
  previousTransition: null,
});
function cS(e, t) {
  switch (t.type) {
    case "addOverlay":
      return YD(e, t.transition, t.component);
    case "removeOverlay":
      return GD(e);
    case "add":
      return Uw(e, t.key, t.transition, t.component);
    case "remove":
      return Xw(e);
    case "update":
      return XD(e, t.key, t.component);
    case "back":
      return KD(e);
    case "forward":
      return qD(e);
    default:
      return;
  }
}
function XD(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function YD(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    o = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: o,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, o.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function GD(e) {
  return {
    ...e,
    overlayStack: [],
    currentOverlay: -1,
    previousOverlay: e.currentOverlay,
  };
}
function Uw(e, t, n, r) {
  e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0));
  let i = e.history[e.history.length - 1],
    o = i && i.key === t;
  if (((e.overlayStack = []), o && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (o) return;
  let s = e.containerVisualIndex[t],
    a = e.containerIsRemoved[t],
    l = i?.key && n.withMagicMotion ? eA(t, s, a, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: l ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let c = e.current + 1,
    u = e.current;
  for (let g in e.containerIndex)
    e.containerIndex[g] === c && (e.containerIndex[g] = JD(g, e.history));
  e.containerIndex[t] = c;
  let { containerVisualIndex: f, containerIsRemoved: d } = QD(e, t, l),
    p = Yw(c, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: c,
    previous: u,
    containerVisualIndex: f,
    containerIsRemoved: d,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function KD(e) {
  let t = { ...e.containers },
    n = Xw(e);
  if (n) return (n.containers = t), n;
}
function qD(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    o = [...e.history],
    s = Uw(e, n, r, i);
  if (s) return (s.history = o), s;
}
function Xw(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  de(r, "The navigation history must have at least one component"),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((d) => d.key !== n.key) && delete e.containers[n.key];
  let o = e.current - 1,
    s = e.current,
    {
      containerIsRemoved: a,
      containerVisualIndex: l,
      previousTransition: c,
      visualIndex: u,
    } = ZD(e, r, n),
    f = Yw(o, s, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: o,
    previous: s,
    containerIsRemoved: a,
    containerVisualIndex: l,
    previousTransition: c,
    visualIndex: u,
    transitionForContainer: f,
  };
}
function QD(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n)
    (r.containerVisualIndex[t] = e.history.length - 1),
      (r.containerIsRemoved[t] = !1);
  else {
    let i = e.containerVisualIndex[t];
    for (let [o, s] of Object.entries(e.containerVisualIndex))
      i !== void 0 && s > i && (r.containerIsRemoved[o] = !0);
  }
  return r;
}
function ZD(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    o = e.previousTransition === null ? null : { ...e.previousTransition },
    s = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: o,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let a = e.containerVisualIndex[t.key],
    l = e.containerVisualIndex[n.key],
    c =
      (a !== void 0 && l !== void 0 && a <= l) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    c
      ? ((s.containerIsRemoved[n.key] = !0),
        (s.containerVisualIndex[t.key] =
          u !== void 0 ? u : e.history.length - 1))
      : ((s.visualIndex = e.visualIndex + 1),
        (s.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion &&
      (s.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    s
  );
}
function JD(e, t) {
  var n;
  for (let r = t.length; r > t.length; r--)
    if (((n = t[r]) == null ? void 0 : n.key) === e) return r;
  return -1;
}
function Yw(e, t, n, r, i) {
  let o = { ...i };
  for (let [s, a] of Object.entries(r)) {
    let l = tA(a, { current: e, previous: t, history: n });
    l && (o[s] = l);
  }
  return o;
}
function eA(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
    ? !1
    : r.slice(t, r.length).findIndex((s) => s.key === e) > -1
    ? !0
    : !(r.slice(0, t - 1).findIndex((s) => s.key === e) > -1);
}
function tA(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let o = i[e];
      return Uc("enter", o?.transition.enter, o?.transition.animation);
    }
    if (e === r && n > r) {
      let o = i[e + 1];
      return Uc("exit", o?.transition.exit, o?.transition.animation);
    }
    if (e === n && n < r) {
      let o = i[e + 1];
      return Uc("enter", o?.transition.exit, o?.transition.animation);
    }
    if (e === r && n < r) {
      let o = i[e];
      return Uc("exit", o?.transition.enter, o?.transition.animation);
    }
  }
}
var nA = Mi(_i);
function Uc(e, t, n) {
  let r = {},
    i = {};
  return (
    nA.forEach((o) => {
      (r[o] = _i[o]), (i[o] = { ...n, from: _i[o] });
    }),
    t &&
      Object.keys(t).forEach((o) => {
        if (t[o] === void 0) return;
        let s = t[o],
          a = typeof t[o] == "string" ? `${Ge(_i)[o]}%` : Ge(_i)[o];
        (Ge(r)[o] = e === "enter" ? a : s),
          (i[o] = { ...n, from: e === "enter" ? s : a, velocity: 0 });
      }),
    { ...r, transition: { ...i } }
  );
}
var rA = b.createContext(void 0);
var Gw = b.createContext(void 0),
  iA = (() => {
    var e, t, n, r, i, o, s, a, l;
    return (
      (t = class extends ge {
        constructor(c) {
          var u;
          super(c),
            Yi(this, n),
            Yi(this, i),
            Yi(this, a),
            Yi(this, e, null),
            R(this, "state", UD()),
            Yi(this, s, (x) => {
              if (!this.props.enabled && this.state.history.length > 0) return;
              let m = cS(this.state, x);
              if (!m) return;
              let { skipLayoutAnimation: h } = this.props,
                y = m.history[m.current],
                S =
                  (x.type === "add" && x.transition.withMagicMotion) ||
                  (x.type === "forward" && y?.transition.withMagicMotion) ||
                  (x.type === "remove" && !!m.previousTransition),
                k = () => {
                  var w;
                  this.setState(m),
                    y?.key &&
                      ((w = this.context) == null || w.call(this, y.key));
                };
              h && !S ? h(k) : k();
            }),
            R(this, "goBack", () => {
              var x;
              if (!At(this, i, o).call(this))
                return (
                  vf(
                    this,
                    e,
                    ((x = globalThis.event) == null ? void 0 : x.timeStamp) ||
                      null
                  ),
                  this.state.currentOverlay !== -1
                    ? ci(this, s).call(this, { type: "removeOverlay" })
                    : ci(this, s).call(this, { type: "remove" })
                );
            });
          let f = this.props.children;
          if (!f || !ha(f) || !da(f)) return;
          let d = { ...tt.Instant },
            g = {
              type: "add",
              key:
                ((u = f.key) == null ? void 0 : u.toString()) ||
                `stack-${this.state.historyItemId + 1}`,
              transition: d,
              component: f,
            },
            v = cS(this.state, g);
          v && (this.state = v);
        }
        componentDidMount() {
          var c;
          let u = this.state.history[this.state.current];
          u && ((c = this.context) == null || c.call(this, u.key));
        }
        UNSAFE_componentWillReceiveProps(c) {
          var u;
          let f = c.children;
          if (!ha(f) || !da(f)) return;
          let d = (u = f.key) == null ? void 0 : u.toString();
          d &&
            (this.state.history.length === 0
              ? At(this, a, l).call(this, f, tt.Instant)
              : ci(this, s).call(this, {
                  type: "update",
                  key: d,
                  component: f,
                }));
        }
        componentWillUnmount() {
          var c, u;
          (u = (c = this.props).resetProjection) == null || u.call(c);
        }
        instant(c) {
          At(this, a, l).call(this, c, tt.Instant, void 0);
        }
        fade(c, u) {
          At(this, a, l).call(this, c, tt.Fade, u);
        }
        push(c, u) {
          At(this, a, l).call(this, c, HD(u), u);
        }
        modal(c, u) {
          At(this, a, l).call(this, c, tt.Modal, u);
        }
        overlay(c, u) {
          At(this, a, l).call(this, c, jD(u), u);
        }
        flip(c, u) {
          At(this, a, l).call(this, c, WD(u), u);
        }
        magicMotion(c, u) {
          At(this, a, l).call(this, c, tt.MagicMotion, u);
        }
        customTransition(c, u) {
          At(this, a, l).call(this, c, u);
        }
        render() {
          var c, u, f, d, p;
          let g = At(this, n, r).call(this, { overCurrentContext: !1 }),
            v = At(this, n, r).call(this, { overCurrentContext: !0 }),
            x = oA(v),
            m = v.current > -1,
            h = this.state.history.length === 1,
            y = [];
          for (let [k, w] of Object.entries(this.state.containers)) {
            let T = this.state.containerIndex[k];
            de(T !== void 0, "Container's index must be registered");
            let E = this.state.containerVisualIndex[k];
            de(E !== void 0, "Container's visual index must be registered");
            let F = this.state.containerIsRemoved[k],
              I = this.state.history[T],
              $ = this.state.transitionForContainer[k],
              B = T === this.state.current,
              q = T === this.state.previous,
              J = B ? !1 : F,
              W =
                ((c = I?.transition) == null ? void 0 : c.withMagicMotion) ||
                (B && !!this.state.previousTransition);
            y.push(
              C(
                Fp,
                {
                  id: k,
                  index: E,
                  isInitial: h,
                  isCurrent: B,
                  isPrevious: q,
                  isOverlayed: m,
                  visible: B || q,
                  position: (u = I?.transition) == null ? void 0 : u.position,
                  instant: fS(T, g),
                  transitionProps: $,
                  animation: uS(T, g),
                  backfaceVisible: dA(T, g),
                  exitAnimation:
                    (f = I?.transition) == null ? void 0 : f.animation,
                  exitBackfaceVisible:
                    (d = I?.transition) == null ? void 0 : d.backfaceVisible,
                  exitProps: (p = I?.transition) == null ? void 0 : p.enter,
                  withMagicMotion: W,
                  areMagicMotionLayersPresent: J ? !1 : void 0,
                  children: C(mD, {
                    children: dS({ component: w, transition: I?.transition }),
                  }),
                },
                k
              )
            );
          }
          let S = this.state.overlayStack.map((k, w) =>
            C(
              Fp,
              {
                isLayeredContainer: !0,
                isCurrent: w === this.state.currentOverlay,
                position: k.transition.position,
                initialProps: fA(w, v),
                transitionProps: hA(w, v),
                instant: fS(w, v, !0),
                animation: uS(w, v),
                exitProps: k.transition.enter,
                visible: pA(w, v),
                backdropColor: cA(k.transition),
                backfaceVisible: uA(w, v),
                onTapBackdrop: mA(k.transition, this.goBack),
                index: this.state.current + 1 + w,
                children: dS({
                  component: k.component,
                  transition: k.transition,
                }),
              },
              k.key
            )
          );
          return C(Jc, {
            "data-framer-component-type": "NavigationRoot",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            style: {
              overflow: "hidden",
              backgroundColor: "unset",
              pointerEvents: void 0,
              ...this.props.style,
            },
            children: C(ND.Provider, {
              value: this,
              children: se(Gw.Provider, {
                value: h,
                children: [
                  C(Fp, {
                    isLayeredContainer: !0,
                    position: void 0,
                    initialProps: {},
                    instant: !1,
                    transitionProps: sA(x),
                    animation: aA(x),
                    backfaceVisible: lA(x),
                    visible: !0,
                    backdropColor: void 0,
                    onTapBackdrop: void 0,
                    index: 0,
                    children: C(_L, {
                      children: C(hD, {
                        children: C(id, {
                          presenceAffectsLayout: !1,
                          children: y,
                        }),
                      }),
                    }),
                  }),
                  C(id, { children: S }),
                ],
              }),
            }),
          });
        }
      }),
      (e = new WeakMap()),
      (n = new WeakSet()),
      (r = function (c) {
        let {
          current: u,
          previous: f,
          currentOverlay: d,
          previousOverlay: p,
        } = this.state;
        return c.overCurrentContext
          ? { current: d, previous: p, history: this.state.overlayStack }
          : { current: u, previous: f, history: this.state.history };
      }),
      (i = new WeakSet()),
      (o = function () {
        return globalThis.event
          ? ci(this, e) === globalThis.event.timeStamp
          : !1;
      }),
      (s = new WeakMap()),
      (a = new WeakSet()),
      (l = function (c, u, f) {
        var d, p;
        if (
          At(this, i, o).call(this) ||
          (vf(
            this,
            e,
            ((d = globalThis.event) == null ? void 0 : d.timeStamp) || null
          ),
          !c || !ha(c) || !da(c))
        )
          return;
        let g = { ...u, ...f };
        if (!!g.overCurrentContext)
          return ci(this, s).call(this, {
            type: "addOverlay",
            transition: g,
            component: c,
          });
        let x =
          ((p = c.key) == null ? void 0 : p.toString()) ||
          `stack-${this.state.historyItemId + 1}`;
        ci(this, s).call(this, {
          type: "add",
          key: x,
          transition: g,
          component: c,
        });
      }),
      R(t, "defaultProps", { enabled: !0 }),
      R(t, "contextType", rA),
      t
    );
  })(),
  Kw = { stiffness: 500, damping: 50, restDelta: 1, type: "spring" };
function oA(e) {
  let t, n;
  return (
    e.current !== -1 ? (t = e.history[e.current]) : (n = e.history[e.previous]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function sA({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function aA({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
    ? t.transition.animation
    : Kw;
}
function lA({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function cA(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return "rgba(4,4,15,.4)";
}
function uA(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else if (e < n) {
    let i = r[e + 1];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  } else {
    let i = r[e];
    return i && i.transition ? i.transition.backfaceVisible : !0;
  }
}
function fA(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function dA(e, t) {
  var n, r, i, o;
  let { current: s, previous: a, history: l } = t;
  return (e === a && s > a) || (e === s && s < a)
    ? (r = (n = l[e + 1]) == null ? void 0 : n.transition) == null
      ? void 0
      : r.backfaceVisible
    : (o = (i = l[e]) == null ? void 0 : i.transition) == null
    ? void 0
    : o.backfaceVisible;
}
function hA(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let i = r[e + 1];
      if (i && i.transition) return i.transition.exit;
    } else {
      let i = r[e];
      if (i && i.transition) return i.transition.enter;
    }
}
function uS(e, t) {
  let { current: n, previous: r, history: i } = t,
    o = r > n ? r : n;
  if (e < o) {
    let s = i[e + 1];
    if (s && s.transition.animation) return s.transition.animation;
  } else if (e !== o) {
    let s = i[e];
    if (s && s.transition.animation) return s.transition.animation;
  } else {
    let s = i[e];
    if (s?.transition.animation) return s.transition.animation;
  }
  return Kw;
}
function fS(e, t, n) {
  let { current: r, previous: i, history: o } = t;
  return !!((n && o.length > 1) || (e !== i && e !== r) || r === i);
}
function pA(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function dS(e) {
  return b.Children.map(e.component, (n) => {
    var r;
    if (!ha(n) || !da(n) || !n.props) return n;
    let i = { style: n.props.style ?? {} },
      o = (r = e?.transition) == null ? void 0 : r.position,
      s = !o || (o.left !== void 0 && o.right !== void 0),
      a = !o || (o.top !== void 0 && o.bottom !== void 0),
      l = "style" in n.props ? Pe(n.props.style) : !0;
    return (
      s &&
        ("width" in n.props && (i.width = "100%"),
        l && (i.style.width = "100%")),
      a &&
        ("height" in n.props && (i.height = "100%"),
        l && (i.style.height = "100%")),
      b.cloneElement(n, i)
    );
  });
}
function mA(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function vA(e) {
  let t = s0(),
    n = ad();
  return (
    b.useInsertionEffect(() => {
      _a();
    }, []),
    C(iA, {
      ...e,
      resetProjection: t,
      skipLayoutAnimation: n,
      children: e.children,
    })
  );
}
var C6 = Vn(pu(), 1);
var _6 = Vn(em(), 1);
function au(...e) {
  return e.filter(Boolean).join(" ");
}
var gA = (() => {
    function e(t = {}) {
      let n = Ip(t, !1, !1);
      return e.addData(n), n;
    }
    return (
      (e._stores = []),
      (e.addData = (t) => {
        e._stores.push(t);
      }),
      (e.reset = () => {
        e._stores.forEach((t) => Ip.resetObject(t));
      }),
      (e.addObserver = (t, n) => Ip.addObserver(t, n)),
      e
    );
  })(),
  Lp = gA;
var yA = { update: 0 },
  bA = b.createContext({ update: NaN });
var xA = class extends ge {
    constructor() {
      super(...arguments),
        R(this, "observers", []),
        R(this, "state", yA),
        R(this, "taskAdded", !1),
        R(this, "frameTask", () => {
          this.setState({ update: this.state.update + 1 }),
            (this.taskAdded = !1);
        }),
        R(this, "observer", () => {
          this.taskAdded ||
            ((this.taskAdded = !0), dw.addFrameTask(this.frameTask));
        });
    }
    componentWillUnmount() {
      this.observers.map((e) => e()), Lp.reset();
    }
    render() {
      let { children: e } = this.props;
      return (
        this.observers.map((t) => t()),
        (this.observers = []),
        Lp._stores.forEach((t) => {
          let n = Lp.addObserver(t, this.observer);
          this.observers.push(n);
        }),
        C(bA.Provider, { value: { ...this.state }, children: e })
      );
    }
  },
  tN = Vn(pu(), 1);
var qw = "__framer__",
  SA = (() => qw.length)();
function wA(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let o = Qw(i);
    if (o && t.has(o)) {
      n[o] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function Qw(e) {
  if (e.startsWith(qw)) return e.substr(SA);
}
var Gn = [
    "opacity",
    "x",
    "y",
    "scale",
    "rotate",
    "rotateX",
    "rotateY",
    "skewX",
    "skewY",
    "transformPerspective",
  ],
  lu = (e) => ({
    x: Ee(e?.x ?? 0),
    y: Ee(e?.y ?? 0),
    opacity: Ee(e?.opacity ?? 1),
    scale: Ee(e?.scale ?? 1),
    rotate: Ee(e?.rotate ?? 0),
    rotateX: Ee(e?.rotateX ?? 0),
    rotateY: Ee(e?.rotateY ?? 0),
    skewX: Ee(e?.skewX ?? 0),
    skewY: Ee(e?.skewY ?? 0),
    transformPerspective: Ee(e?.transformPerspective ?? 0),
  }),
  je = {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    skewX: 0,
    skewY: 0,
    transformPerspective: 0,
  };
function Zw(e) {
  return e in je;
}
function Jw(e, t) {
  let n = Lt(() => ({ values: lu(t ? e : void 0) }));
  return (
    b.useEffect(() => {
      if (!t)
        for (let r of Gn) {
          let i = je[r];
          St(i) || n.values[r].set(i);
        }
    }, [n, t]),
    n
  );
}
var kA = new Set([
    "loopEffectEnabled",
    "loopTransition",
    "loop",
    "loopRepeatType",
    "loopRepeatDelay",
  ]),
  CA = () => {
    let e = A();
    return (
      j(
        () => () => {
          clearTimeout(e.current);
        },
        []
      ),
      async (t) =>
        new Promise((n) => {
          e.current = setTimeout(() => {
            n(!0);
          }, t * 1e3);
        })
    );
  };
function TA({
  loopEffectEnabled: e,
  loopRepeatDelay: t,
  loopTransition: n,
  loopRepeatType: r,
  loop: i,
}) {
  let o = di(),
    s = Lt(() => ({ values: lu() })),
    a = b.useRef(!1),
    l = CA(),
    c = async () => {
      if (!i) return;
      let d = n || void 0,
        p = a.current && r === "mirror",
        g = p ? je : i,
        v = p ? i : je;
      return (
        (a.current = !a.current),
        Promise.all(
          Gn.map((x) => {
            if (!(o && x !== "opacity"))
              return (
                s.values[x].set(v[x] ?? je[x]),
                new Promise((m) => {
                  let h = { ...d, onComplete: () => m() };
                  eo(s.values[x], g[x] ?? v[x], h);
                })
              );
          })
        )
      );
    },
    u = async () => {
      e && (await c(), await l(t ?? 0), await u());
    },
    f = ve(() => {
      Gn.forEach((d) => {
        s.values[d].stop();
      }),
        Gn.forEach((d) => {
          s.values[d].set(je[d]);
        }),
        (a.current = !1);
    }, [s]);
  return b.useEffect(() => (e && i ? u() : f(), () => f()), [e]), s;
}
function EA(e, t, n, r, i) {
  let o = n / 100 - 1,
    s = i ? (t - r) * o : 0,
    a = -e * o;
  return s + a;
}
var RA = new Set([
  "speed",
  "adjustPosition",
  "offset",
  "parallaxTransformEnabled",
]);
function PA(e, t, n) {
  let {
      speed: r = 100,
      offset: i = 0,
      adjustPosition: o = !1,
      parallaxTransformEnabled: s,
    } = e,
    a = b.useRef(null),
    l = di(),
    c = b.useCallback(
      (g) => (a.current === null || r === 100 ? 0 : EA(g, a.current, r, i, o)),
      [a, r, i, o]
    );
  b.useLayoutEffect(() => {
    U.read(() => {
      var g, v;
      a.current =
        ((v = (g = t.current) == null ? void 0 : g.getBoundingClientRect()) ==
        null
          ? void 0
          : v.top) ?? 0;
    }),
      U.update(() => {
        f.set(c(u.get())), o && d.set(n ?? "initial");
      });
  }, [t, a, o]);
  let { scrollY: u } = Ky(),
    f = Et(u, c),
    d = Bn(o && a.current === null ? "hidden" : n),
    p = Bn(0);
  return {
    values: { y: l || !s ? p : f },
    style: s ? { visibility: d } : void 0,
  };
}
function _A(e) {
  if (!(xe(e) || !Pe(e))) return e?.transition;
}
async function Mp(e, t, n, r, i, o) {
  let s = _A(e);
  return Promise.all(
    Gn.map(
      (a) =>
        new Promise((l) => {
          if (n && a !== "opacity") return l();
          let c = t.values[a];
          c.stop();
          let u = Pe(e) ? e?.[a] ?? je[a] : je[a];
          if ((Te(u) && (u = u.get()), !Mt(u))) return l();
          let f = nr.get(r.current);
          f && f.setBaseTarget(a, u);
          let d =
            xe(i) && !c?.hasAnimated && $e.HandoffAppearAnimations
              ? { elapsed: $e.HandoffAppearAnimations(i, a, c, U) }
              : void 0;
          o
            ? c.set(u)
            : eo(c, u, {
                ...s,
                velocity: 0,
                elapsed: 0,
                ...d,
                onComplete: () => l(),
              });
        })
    )
  );
}
var IA = new Set(["presenceInitial", "presenceAnimate", "presenceExit"]);
function FA(
  {
    initial: e,
    animate: t,
    exit: n,
    presenceInitial: r,
    presenceAnimate: i,
    presenceExit: o,
  },
  s,
  a,
  l,
  c
) {
  let u = r ?? e,
    f = i ?? t,
    d = o ?? n,
    p = A(!1),
    g = A(f),
    [v, x] = vl(),
    m = A(!1),
    h = Lt(() => {
      let S = u ?? l;
      if (!Pe(S)) return { values: lu() };
      let k = {};
      for (let w in S) {
        let T = Pe(S) ? S[w] : void 0;
        Mt(T) && (k[w] = T);
      }
      return { values: lu(k) };
    });
  In(() => {
    if (p.current && f) return;
    let S = nr.get(s.current);
    if (S) {
      p.current = !0;
      for (let k in h.values) {
        if (!Zw(k)) continue;
        let w = l?.[k];
        S.setBaseTarget(k, Mt(w) ? w : je[k]);
      }
    }
  }, [f]);
  let y = di();
  return (
    In(() => {
      if (!a) {
        x?.();
        return;
      }
      if (v !== m.current)
        (m.current = v),
          v
            ? u && f && Mp(f, h, y, s, c)
            : d
            ? Mp(d, h, y, s, c).then(() => x())
            : x();
      else {
        if (!!Ue(f, g.current) || !f) return;
        (g.current = f), Mp(f, h, y, s, c, !0);
      }
    }),
    h
  );
}
function LA(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement; )
    (n += r.offsetTop), (r = r.offsetParent);
  return n;
}
var MA = 1;
function hm(e, t = 0, n) {
  var r;
  let i = [],
    o = [];
  for (let s = e.length; s >= 0; s--) {
    let { ref: a, offset: l } = e[s] ?? {};
    if (!a || !a.current) continue;
    let u = LA(a.current, document.documentElement) - MA - (l ?? 0) - t,
      f = ((r = a.current) == null ? void 0 : r.clientHeight) ?? 0,
      d = i[i.length - 1],
      p = Math.max(u + f, 0);
    i.push(u),
      o.unshift(
        Math.max(u, 0),
        d === void 0 ? p : Math.min(p, Math.max(d - 1, 0))
      ),
      n?.(s);
  }
  return o;
}
function OA(e, t = 0) {
  return e < t ? "up" : "down";
}
var DA = 4;
function ek(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: o = !0, enabled: s = !0 } = n;
  b.useEffect(() => {
    if (!r || !s) return;
    let a,
      l = 0,
      c,
      u;
    return fi(({ y: f }) => {
      if ((!o && u === i) || f.current > f.scrollLength || f.current < 0)
        return;
      let d = OA(f.current, a);
      a = f.current;
      let p = d !== c;
      if (((c = d), p)) l = f.current;
      else {
        if (Math.abs(f.current - l) < DA) return;
        let v = d === r ? i : void 0;
        v !== u && t(v), (u = v);
      }
    });
  }, [r, o, i, s, t]);
}
var AA = new Set([
    "threshold",
    "animateOnce",
    "opacity",
    "targetOpacity",
    "x",
    "y",
    "scale",
    "transition",
    "rotate",
    "rotateX",
    "rotateY",
    "perspective",
    "enter",
    "exit",
    "animate",
    "styleAppearEffectEnabled",
    "targets",
    "scrollDirection",
  ]),
  VA = ["animate", "animate"],
  hS = { inputRange: [], outputRange: [] };
function BA(e, t, n) {
  let r = hm(e, t),
    i = [...VA],
    o = r[0];
  if (!Mt(o)) return hS;
  if ((o > 1 && (r.unshift(0, o - 1), i.unshift("initial", "initial")), n)) {
    let s = r.length - 1,
      a = r[s];
    if (!Mt(a)) return hS;
    r.push(a + 1), i.push("exit");
  }
  return { inputRange: r, outputRange: i };
}
function Op(e) {
  return {
    x: e?.x ?? je.x,
    y: e?.y ?? je.y,
    scale: e?.scale ?? je.scale,
    opacity: e?.opacity ?? je.opacity,
    transformPerspective: e?.transformPerspective ?? je.transformPerspective,
    rotate: e?.rotate ?? je.rotate,
    rotateX: e?.rotateX ?? je.rotateX,
    rotateY: e?.rotateY ?? je.rotateY,
    skewX: e?.skewX ?? je.skewX,
    skewY: e?.skewY ?? je.skewY,
    transition: e?.transition ?? void 0,
  };
}
function $A({
  opacity: e,
  targetOpacity: t,
  perspective: n,
  enter: r,
  exit: i,
  animate: o,
  ...s
}) {
  return b.useMemo(
    () => ({
      initial: r ?? Op({ ...s, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: o ?? Op({ opacity: t }),
      exit: i ?? Op(),
    }),
    [o, s, r, i, e, t, n]
  );
}
function zA(e, t) {
  let n = di(),
    r = $A(e),
    i = e.styleAppearEffectEnabled,
    o = Jw(i ? r.initial : r.animate, i),
    s = b.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    a = b.useRef(),
    l = b.useCallback(async ({ transition: d, ...p }, g) => {
      let v = d ?? r.animate.transition ?? e.transition;
      await a.current,
        (a.current = Promise.all(
          Gn.map((x) => {
            g && o.values[x].set(r.initial[x] ?? je[x]);
            let m = p[x] ?? je[x],
              h = nr.get(t.current);
            return (
              h && typeof m != "object" && h.setBaseTarget(x, m),
              new Promise((y) => {
                if (n && x !== "opacity") Mt(m) && o.values[x].set(m), y();
                else {
                  let S = {
                    restDelta: x === "scale" ? 0.001 : void 0,
                    ...v,
                    onComplete: () => y(),
                  };
                  eo(o.values[x], m, S);
                }
              })
            );
          })
        ));
    }, []),
    c = e.animateOnce && s.current.lastAppearState === !0,
    u = !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !c;
  Hw(
    t,
    (d) => {
      let { isPlaying: p, lastAppearState: g } = s.current;
      if (p) {
        s.current.scheduledAppearState = d;
        return;
      }
      (s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = d),
        g !== d && l(d ? r.animate : r.exit, d);
    },
    { enabled: u, animateOnce: !!e.animateOnce, threshold: { y: e.threshold } }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    b.useEffect(() => {
      if (!f) return;
      let d = { initial: !0 },
        p = "initial";
      return fi(({ y: g }) => {
        let { targets: v } = e;
        if (!v || !v[0] || (v[0].ref && !v[0].ref.current)) return;
        let { inputRange: x, outputRange: m } = BA(
          v,
          (e.threshold ?? 0) * g.containerLength,
          !!e.exit
        );
        if (x.length === 0 || x.length !== m.length) return;
        let h = Ji(g.current, x, m);
        if ((e.animateOnce && d[h]) || ((d[h] = !0), p === h)) return;
        p = h;
        let y = Ge(r)[h];
        y && l(y);
      });
    }, [f]),
    ek(e.scrollDirection, (d) => l(d ?? r.animate), {
      enabled: i,
      repeat: !e.animateOnce,
    }),
    o
  );
}
var NA = new Set([
    "transformViewportThreshold",
    "styleTransformEffectEnabled",
    "transformTargets",
    "spring",
    "transformTrigger",
  ]),
  HA = (e, t) => {
    var n;
    let r = (n = e?.[0]) == null ? void 0 : n.target;
    return t ? { opacity: r?.opacity ?? 1 } : r;
  },
  tk = () => ({
    opacity: [],
    x: [],
    y: [],
    scale: [],
    rotate: [],
    rotateX: [],
    rotateY: [],
    skewX: [],
    skewY: [],
    transformPerspective: [],
  });
function jA(e, t) {
  let n = b.useRef({});
  b.useEffect(() => {
    if (t !== void 0)
      for (let r of Mi(e)) {
        let i = e[r];
        i.attach((o, s) => {
          let a = n.current[r];
          if (
            (a && a.stop(),
            (n.current[r] = Bf({
              keyframes: [i.get(), o],
              velocity: i.getVelocity(),
              ...t,
              restDelta: 0.001,
              onUpdate: s,
            })),
            !Ae.isProcessing)
          ) {
            let l = performance.now() - Ae.timestamp;
            l < 40 && (n.current[r].time = l / 1e3);
          }
          return i.get();
        });
      }
  }, [JSON.stringify(t)]);
}
function WA(e, t) {
  let n = tk();
  return {
    inputRange: hm(e, t, (i) => {
      var o, s, a;
      let l = (o = e[i - 1]) == null ? void 0 : o.target,
        c = (s = e[i]) == null ? void 0 : s.target;
      for (let u of Gn)
        (a = n[u]) == null || a.unshift(l?.[u] ?? 0, c?.[u] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function UA(e) {
  var t;
  let n = tk();
  for (let { target: r } of e)
    for (let i of Gn) (t = n[i]) == null || t.push(r[i]);
  return n;
}
var pS = [0, 1];
function XA(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  o
) {
  let s = di(),
    a = Jw(HA(n, s), t);
  return (
    b.useLayoutEffect(() => {
      if (!(!t || !n))
        if (e !== "onScrollTarget") {
          let l = UA(n);
          return fi(
            ({ y: c }) => {
              for (let u of Gn)
                (s && u !== "opacity") ||
                  (pS.length === l[u].length &&
                    l[u][0] !== void 0 &&
                    a.values[u].set(Ji(c.progress, pS, l[u])));
            },
            e === "onInView"
              ? {
                  target: o.current ?? void 0,
                  offset: ["start end", "end end"],
                }
              : void 0
          );
        } else
          return fi(({ y: l }) => {
            if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
            let { inputRange: c, effectKeyOutputRange: u } = WA(
              n,
              i * l.containerLength
            );
            if (c.length !== 0)
              for (let f of Gn)
                (s && f !== "opacity") ||
                  (c.length === u[f].length &&
                    u[f][0] !== void 0 &&
                    a.values[f].set(Ji(l.current, c, u[f])));
          });
    }, [s, e, o, i, t, a, n]),
    jA(a.values, r),
    a
  );
}
var nk = {
    parallax: RA,
    styleAppear: AA,
    styleTransform: NA,
    loop: kA,
    presence: IA,
  },
  YA = Mi(nk);
function mS(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function GA(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
  };
  for (let n in e) {
    let r = Qw(n);
    if (r)
      for (let i of YA) {
        let o = nk[i];
        if (o?.has(r)) {
          t[i][r] = Ge(e)[n];
          break;
        }
      }
    else t.forwardedProps[n] = Ge(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = mS(
      "parallaxTransformEnabled",
      "speed",
      t.parallax
    )),
    (t.styleAppear.styleAppearEffectEnabled = mS(
      "styleAppearEffectEnabled",
      "animateOnce",
      t.styleAppear
    )),
    t
  );
}
var Yr = (e) => e.reduce((t, n) => (t += n), 0),
  vS = (e) => e.reduce((t, n) => (t = t * n), 1),
  KA = "current";
function qA(e) {
  return Pe(e) && KA in e;
}
function QA(e, t) {
  if (!e || !Pe(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Te(r) || !Zw(n) || (Mt(r.get()) && t[n].push(r));
  }
}
function la(e) {
  return xe(e) || Array.isArray(e);
}
var ZA = (e) =>
  b.forwardRef((t, n) => {
    if (t.__withFX)
      return C(e, {
        ...t,
        animate: void 0,
        initial: void 0,
        exit: void 0,
        ref: n,
      });
    if (ie.current() === ie.canvas) {
      let te = la(t.animate) ? t.animate : void 0,
        oe = la(t.initial) ? t.initial : void 0;
      return C(e, { ...t, animate: te, initial: oe, exit: void 0, ref: n });
    }
    let r = b.useRef(null),
      i = n ?? r,
      {
        parallax: o = {},
        styleAppear: s = {},
        styleTransform: a = {},
        presence: l = {},
        loop: c = {},
        forwardedProps: u,
      } = GA(t),
      {
        __targetOpacity: f,
        __perspectiveFX: d,
        __smartComponentFX: p = !1,
      } = t,
      g = Bn(f ?? 1),
      { values: v } = FA(l, i, p, t.style, t[nl]),
      { values: x, style: m } = PA(o, i),
      { values: h } = XA(a, i),
      { values: y } = zA(s, i),
      { values: S } = TA(c),
      k = b.useMemo(
        () => ({
          scale: [y.scale, S.scale, v.scale, h.scale],
          opacity: [y.opacity, S.opacity, v.opacity, g, h.opacity],
          x: [y.x, S.x, v.x, h.x],
          y: [y.y, S.y, x.y, v.y, h.y],
          rotate: [y.rotate, S.rotate, v.rotate, h.rotate],
          rotateX: [y.rotateX, S.rotateX, v.rotateX, h.rotateX],
          rotateY: [y.rotateY, S.rotateY, v.rotateY, h.rotateY],
          skewX: [y.skewX, S.skewX, v.skewX, h.skewX],
          skewY: [y.skewY, S.skewY, v.skewY, h.skewY],
          transformPerspective: [
            h.transformPerspective,
            y.transformPerspective,
          ],
        }),
        [g, h, x, y, S, v]
      );
    QA(t.style, k);
    let w = Et(k.scale, vS),
      T = Et(k.opacity, vS),
      E = Et(k.x, Yr),
      F = Et(k.y, Yr),
      I = Et(k.rotate, Yr),
      $ = Et(k.rotateX, Yr),
      B = Et(k.rotateY, Yr),
      q = Et(k.skewX, Yr),
      J = Et(k.skewY, Yr),
      W = Et(k.transformPerspective, Yr),
      { drag: ne, dragConstraints: Y } = u;
    FO(ne && qA(Y) ? Y : void 0);
    let G = {
      opacity: T,
      scale: w,
      x: E,
      y: F,
      rotate: I,
      rotateX: $,
      rotateY: B,
      skewX: q,
      skewY: J,
    };
    St(d) && (G.transformPerspective = W);
    let N = la(t.animate) ? t.animate : void 0,
      ee = la(t.initial) ? t.initial : void 0,
      re = la(t.exit) ? t.exit : void 0,
      ae = p && !l.presenceInitial ? { initial: ee, animate: N, exit: re } : {};
    return C(e, {
      ...u,
      ...ae,
      __withFX: !0,
      style: { ...t.style, ...m, ...G },
      values: v,
      ref: i,
    });
  });
var hN = ZA;
function Yp(e, t) {
  No(e) ? e(t) : rk(e) && (e.current = t);
}
function rk(e) {
  return Pe(e) && "current" in e;
}
function gS(e, t) {
  return {
    get current() {
      return e.current;
    },
    set current(n) {
      (e.current = n), t(n);
    },
  };
}
function JA(...e) {
  return (t) => e.forEach((n) => Yp(n, t));
}
function ku(e) {
  let t = Lt(() => eV(e));
  return t.useSetup(e), t.cloneAsElement;
}
function eV(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = yS(t);
  let n = (s, a) => {
      if (!t.forwardedRef && t.forwardedRef === s) {
        t.ref = a;
        return;
      }
      let l = !1;
      t.childRef !== a && ((t.childRef = a), (l = !0)),
        t.forwardedRef !== s && ((t.forwardedRef = s), (l = !0)),
        l && (t.ref = yS(t));
    },
    r = !1;
  function i(s, a) {
    if (r)
      throw new ReferenceError(
        "useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle."
      );
    return (
      (r = !0),
      _n.count(s) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      _n.map(s, (l) => {
        if (Yt(l)) {
          let c = "ref" in l ? l.ref : void 0;
          n(t.forwardedRef, c);
          let u = t.ref !== c ? { ...a, ref: t.ref } : a;
          return yn(l, u);
        }
        return l;
      })
    );
  }
  let o = function (a, l) {
    return C(Oe, { children: i(a, l) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (s) => {
        (r = !1), n(s, t.childRef);
      },
      cloneAsElement: o,
    }
  );
}
function yS(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (r) => {
    Yp(n, r), Yp(t, r);
  };
}
var ik = b.createContext({});
function bN() {
  return b.useContext(ik);
}
var xN = b.forwardRef(({ width: e, children: t, ...n }, r) => {
    let i = b.useMemo(() => ({ width: e }), [e]),
      o = ku(r);
    return C(ik.Provider, { value: i, children: o(t, n) });
  }),
  tV = (e) =>
    b.forwardRef((t, n) => {
      let r = Ia(t);
      return C(e, {
        layoutId: r,
        ...t,
        layoutIdKey: void 0,
        duplicatedFrom: void 0,
        ref: n,
      });
    }),
  nV = class extends ge {
    constructor() {
      super(...arguments), R(this, "state", { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return (
        console.error(
          "Error in component (see previous error log). This component has been hidden."
        ),
        { hasError: !0 }
      );
    }
    render() {
      let { children: e } = this.props,
        { hasError: t } = this.state;
      return t ? null : e;
    }
  },
  rV = b.forwardRef(({ children: e, layoutId: t, ...n }, r) => {
    let i = Lt(() => (t ? `${t}-container` : void 0));
    return C(Vt.div, {
      layoutId: i,
      ...n,
      ref: r,
      children: C(Xo.Provider, {
        value: !0,
        children: C(FL, {
          enabled: !1,
          children: C(Uy, {
            id: t ?? "",
            inherit: "id",
            children: C(nV, {
              children: b.Children.map(e, (o) =>
                b.isValidElement(o) ? b.cloneElement(o, { layoutId: t }) : o
              ),
            }),
          }),
        }),
      }),
    });
  }),
  EN = tV(rV),
  iV = b.createContext(void 0),
  oV = (() => {
    var e;
    if (!Oi()) return new Set();
    let t =
      (e = document.querySelector("style[data-framer-css-ssr-minified]")) ==
      null
        ? void 0
        : e.getAttribute("data-framer-components");
    return t ? new Set(t.split(" ")) : new Set();
  })(),
  ok = "data-framer-css-ssr",
  sV = (e, t, n) =>
    b.forwardRef((r, i) => {
      let { sheet: o, cache: s } = b.useContext(iV) ?? {};
      if (!Oi()) {
        let a = Array.isArray(t)
          ? t.join(`
`)
          : t;
        return se(Oe, {
          children: [
            C("style", {
              [ok]: !0,
              "data-framer-component": n,
              dangerouslySetInnerHTML: { __html: a },
            }),
            C(e, { ...r, ref: i }),
          ],
        });
      }
      return (
        b.useInsertionEffect(() => {
          if (n && oV.has(n)) return;
          (Array.isArray(t)
            ? t
            : t.split(`
`)
          ).forEach((l) => l && bw(l, o, s));
        }, []),
        C(e, { ...r, ref: i })
      );
    }),
  pm = b.createContext({
    onRegisterCursors: () => () => {},
    registerCursors: () => {},
  }),
  cu = "framer-cursor-none",
  Gp = "framer-pointer-events-none",
  aV = b.memo(function ({ children: t }) {
    let n = Lt(() => {
        let i = new Set(),
          o = {};
        return {
          onRegisterCursors: (s) => (s(o), i.add(s), () => i.delete(s)),
          registerCursors: (s) => {
            let a = {};
            for (let l in s) {
              let c = o[l] ?? s[l];
              c && (a[l] = c);
            }
            o = a;
            for (let l of i) l(o);
          },
        };
      }),
      r = di();
    return se(pm.Provider, { value: n, children: [t, !r && C(hV, {})] });
  }),
  lV = (() =>
    sV(aV, [
      `.${cu}, .${cu} * { cursor: none !important; }`,
      `.${Gp}, .${Gp} * { pointer-events: none !important; }`,
    ]))(),
  cV = (() => ({
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 12 + 1,
    pointerEvents: "none",
  }))();
function uV(e) {
  return !(!e || e.placement || e.alignment);
}
function Xc(e) {
  switch (e) {
    case "start":
      return "0%";
    case "center":
      return "-50%";
    case "end":
      return "-100%";
    default:
      We(e);
  }
}
function fV(e, t = "center") {
  switch (e) {
    case "top":
      return `${Xc(t)}, -100%`;
    case "right":
      return `0%, ${Xc(t)}`;
    case "bottom":
      return `${Xc(t)}, 0%`;
    case "left":
      return `-100%, ${Xc(t)}`;
    default:
      return "-50%, -50%";
  }
}
var bS = "data-framer-portal-id";
function xS(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n; ) {
    if (n === document.body) return;
    let r = n.getAttribute("data-framer-cursor");
    if (r) return r;
    if (n.hasAttribute(bS)) {
      let i = n.getAttribute(bS);
      (n = n.parentElement), i && (n = document.getElementById(i) ?? n);
    } else n = n.parentElement;
  }
}
function dV(e) {
  for (let t in e) return !1;
  return !0;
}
var hV = b.memo(function () {
  let { onRegisterCursors: t } = D(pm),
    n = Bn(0),
    r = Bn(0),
    i = Bn(0),
    o = b.useRef(null),
    s = b.useRef({ cursors: {}, cursorHash: void 0 }),
    a = xu(),
    l = !dV(s.current.cursors);
  b.useEffect(() => {
    let w = 0,
      T = 0;
    function E() {
      n.set(w), r.set(T), eo(i, 1, { type: "tween", duration: 0.2 });
    }
    function F(B) {
      B.pointerType !== "touch" &&
        ((w = B.clientX), (T = B.clientY), U.update(E));
    }
    let I = () => {
      if (!l) return;
      let B = xS(w, T);
      B !== s.current.cursorHash &&
        ((s.current.cursorHash = B), U.update(() => a()));
    };
    U.read(I, !0);
    function $(B) {
      if (B.target === o.current || !o.current) return;
      let q = new PointerEvent(B.type, {
        bubbles: !0,
        cancelable: B.cancelable,
        pointerType: B.pointerType,
        pointerId: B.pointerId,
        composed: B.composed,
        isPrimary: B.isPrimary,
        buttons: B.buttons,
        button: B.button,
      });
      U.update(() => {
        var J;
        (J = o.current) == null || J.dispatchEvent(q);
      });
    }
    return (
      $e.addEventListener("pointermove", F),
      document.addEventListener("pointerdown", $),
      document.addEventListener("pointerup", $),
      () => {
        $e.removeEventListener("pointermove", F),
          document.removeEventListener("pointerdown", $),
          document.removeEventListener("pointerup", $),
          ht(I);
      }
    );
  }, [i, n, r, l, a]),
    b.useEffect(() => {
      function w() {
        eo(i, 0, { type: "tween", duration: 0.2 });
      }
      return (
        document.addEventListener("mouseleave", w),
        $e.addEventListener("blur", w),
        () => {
          document.removeEventListener("mouseleave", w),
            $e.removeEventListener("blur", w);
        }
      );
    }, [i]),
    b.useLayoutEffect(() => {
      function w(E) {
        (s.current.cursors = E),
          (s.current.cursorHash = xS(n.get(), r.get())),
          a();
      }
      let T = t(w);
      return () => {
        T(), document.body.classList.toggle(cu, !1);
      };
    }, [n, r, t, a]);
  let { cursors: c, cursorHash: u } = s.current,
    f = u ? c[u] : null,
    d = uV(f);
  b.useLayoutEffect(() => {
    document.body.classList.toggle(cu, d);
  }, [d]);
  let p = f?.component,
    g = f?.transition ?? { duration: 0 },
    v = od(n, g),
    x = od(r, g),
    m = Et(() => {
      var w;
      return v.get() + (((w = f?.offset) == null ? void 0 : w.x) ?? 0);
    }),
    h = Et(() => {
      var w;
      return x.get() + (((w = f?.offset) == null ? void 0 : w.y) ?? 0);
    }),
    y = f?.alignment,
    S = f?.placement,
    k = b.useCallback((w, T) => `translate(${fV(S, y)}) ${T}`, [y, S]);
  return !f || !p
    ? null
    : C(p, {
        transformTemplate: k,
        style: { ...cV, x: m, y: h, opacity: i },
        globalTapTarget: !0,
        variant: f?.variant,
        ref: o,
        className: Gp,
      });
});
function LN(e) {
  let { registerCursors: t } = D(pm),
    n = Lt(() => e);
  b.useLayoutEffect(() => {
    t(n);
  }, [n, t]);
}
var Oo = {
  isClockwise: (e) => Oo.signedArea(e) <= 0,
  signedArea: (e) => {
    let t = 0,
      n = e.length;
    for (let r = 0; r < n; r++) {
      let i = e[r],
        o = e[(r + 1) % n];
      !i || !o || (t += i.x * -o.y - o.x * -i.y);
    }
    return (1 / 2) * t;
  },
  containsPoint: (e, t) => {
    var n, r, i, o;
    let s;
    for (let a = 0; a < e.length; a++) {
      if (xt.isEqual(e[a], t)) return !0;
      let l = ((n = e[a]) == null ? void 0 : n.x) ?? 0,
        c = ((r = e[a]) == null ? void 0 : r.y) ?? 0,
        u = (a + 1) % e.length;
      if (xt.isEqual(e[u], t)) return !0;
      let f = ((i = e[u]) == null ? void 0 : i.x) ?? 0,
        d = ((o = e[u]) == null ? void 0 : o.y) ?? 0,
        p = (t.x - l) * (d - c) - (t.y - c) * (f - l);
      if (p === 0) continue;
      let g = p > 0;
      if ((s ?? (s = g), s !== g)) return !1;
    }
    return !0;
  },
  intersects: (e, t) => {
    if (e.length < 1 || t.length < 1) return !1;
    let n = z.boundingRectFromPoints(e),
      r = z.boundingRectFromPoints(t);
    if (!z.intersects(n, r)) return !1;
    let i = [],
      o = e.length;
    e.forEach((l, c) => {
      let u = e[(c + 1) % o];
      u && i.push(ct(l, u));
    });
    let s = [],
      a = t.length;
    t.forEach((l, c) => {
      let u = t[(c + 1) % a];
      u && s.push(ct(l, u));
    });
    for (let l of i) for (let c of s) if (ct.intersection(l, c, !0)) return !0;
    return !!(Oo.containsPoint(t, e[0]) || Oo.containsPoint(e, t[0]));
  },
  contains: (e, t) => {
    for (let n = 0; n < t.length; n++)
      if (!Oo.containsPoint(e, t[n])) return !1;
    return !0;
  },
  clipToRect: (e, t) => {
    let n = z.edges(t),
      r = new Set(),
      i = e.length,
      o = [],
      s = [];
    for (let a = 0; a < i; a++) {
      let l = e[a],
        c = e[(a + 1) % i];
      if (z.containsPoint(t, l)) {
        let f = Dp(l);
        if ((r.add(f), s.push(l), z.containsPoint(t, c))) continue;
      }
      let u = ct(l, c);
      n.forEach((f) => {
        let d = ct.intersection(u, f, !0);
        if (!d) return;
        let p = Dp(d);
        r.has(p) || (r.add(p), o.push(d));
      });
    }
    return o.length === 0
      ? s
      : (z.points(t).forEach((a) => {
          Oo.containsPoint(e, a) && (r.add(Dp(a)), o.push(a));
        }),
        xt.sortClockwise([...s, ...o]));
  },
};
function Dp(e) {
  return `${e?.x}-${e?.y}`;
}
function SS(e) {
  switch (e) {
    case "top":
      return "bottom";
    case "right":
      return "left";
    case "bottom":
      return "top";
    case "left":
      return "right";
    default:
      We(e);
  }
}
function wS(e, t, n, r = 0) {
  let i = Math.max(e, r);
  if (e < i) return i;
  let o = t + r;
  return i + o > n ? n - o : i;
}
function pV(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return t.y < 0 || t.y + t.height > n.height ? "y" : void 0;
    case "left":
    case "right":
      return t.x < 0 || t.x + t.width > n.width ? "x" : void 0;
    default:
      We(e);
  }
}
function mV(e, t, n, r) {
  switch (pV(t, e, r)) {
    case "x":
      return { placement: SS(t), x: n.x * -1, y: n.y };
    case "y":
      return { placement: SS(t), x: n.x, y: n.y * -1 };
    default:
      return { placement: t, x: n.x, y: n.y };
  }
}
function vV(e, t, n, r, i, o, s) {
  let a = z.rebaseRectOnto(t, e, n, r),
    l = { x: a.x + i.x, y: a.y + i.y, width: t.width, height: t.height };
  if (!o) return [n, l];
  let { x: c, y: u, placement: f } = mV(l, n, i, o),
    d = z.rebaseRectOnto(t, e, f, r);
  return [
    f,
    {
      x: wS(d.x + c, t.width, o.width, s),
      y: wS(d.y + u, t.height, o.height, s),
      width: t.width,
      height: t.height,
    },
  ];
}
function Gr(e, t, n) {
  return Oo.containsPoint([t, ...n], e) ? t : e;
}
var Yc = 5;
function gV(e) {
  return {
    constrainX: (t) => Math.min(Math.max(t, e.x + Yc), e.x + e.width - Yc),
    constrainY: (t) => Math.min(Math.max(t, e.y + Yc), e.y + e.height - Yc),
  };
}
var Gc = 4;
function yV({ x: e, y: t }, n, r, { constrainX: i, constrainY: o }) {
  let [s, a, l, c] = z.points(r);
  switch (n) {
    case "left": {
      let u = { x: i(e - Gc), y: t };
      return [u, Gr(c, a, [u, l]), Gr(l, s, [u, c])];
    }
    case "right": {
      let u = { x: i(e + Gc), y: t };
      return [u, Gr(a, c, [u, s]), Gr(s, l, [u, a])];
    }
    case "top": {
      let u = { x: e, y: o(t - Gc) };
      return [u, Gr(a, s, [u, c]), Gr(c, l, [u, a])];
    }
    case "bottom": {
      let u = { x: e, y: o(t + Gc) };
      return [u, Gr(s, a, [u, l]), Gr(l, c, [u, s])];
    }
    default:
      We(n);
  }
}
function bV(e, t) {
  switch (e) {
    case "left":
      return `${Math.min(t.y, 0)}px auto auto 0px`;
    case "right":
      return `${Math.min(t.y, 0)}px 0px auto auto`;
    case "top":
      return `0px auto auto ${Math.min(t.x, 0)}px`;
    case "bottom":
      return `auto auto 0px ${Math.min(t.x, 0)}px`;
    default:
      We(e);
  }
}
function xV(e, t, n, r, i) {
  let o = Math.min(i.x, r.x),
    s = Math.min(i.y, r.y),
    a = z.merge(r, i),
    l = yV({ x: e, y: t }, n, i, gV(r))
      .map((c) => `${c.x - o}px ${c.y - s}px`)
      .join(", ");
  return {
    height: `${a.height}px`,
    width: `${a.width}px`,
    clipPath: `polygon(${l})`,
    inset: bV(n, z.delta(r, i)),
  };
}
function Kc(e) {
  switch (e) {
    case "start":
      return 0;
    case "center":
      return 0.5;
    case "end":
      return 1;
    default:
      We(e);
  }
}
function kS(e = "bottom", t = "center") {
  switch (e) {
    case "top":
      return { originX: Kc(t), originY: 1 };
    case "right":
      return { originX: 0, originY: Kc(t) };
    case "bottom":
      return { originX: Kc(t), originY: 0 };
    case "left":
      return { originX: 1, originY: Kc(t) };
    default:
      We(e);
  }
}
function SV(e) {
  return Pe(e) && "current" in e;
}
function wV(e) {
  var t;
  let n = e.current,
    r = { position: "absolute", scrolls: !1 };
  for (; n; ) {
    if (
      n?.tagName === "BODY" ||
      (((t = getComputedStyle(n)) == null ? void 0 : t.position) === "fixed" &&
        (r.position = "fixed"),
      (n.scrollWidth > n.clientWidth || n.scrollHeight > n.clientHeight) &&
        (r.scrolls = !0),
      r.scrolls && r.position === "fixed")
    )
      return r;
    n = n.parentElement;
  }
  return r;
}
function kV(e) {
  return [() => U.read(e, !0), () => ht(e)];
}
function CV(e) {
  let t = 0,
    n = 0;
  return (r, i, o, s) => {
    var a;
    (a = e.current) != null &&
      a.style &&
      ((t = s?.clientX ?? t),
      (n = s?.clientY ?? n),
      Object.assign(e.current.style, xV(t, n, o, r, i)));
  };
}
function CS(e, t, n) {
  e.current &&
    Object.assign(e.current.style, {
      position: t,
      visibility: "visible",
      left: (n?.x ?? 0) + (t === "fixed" ? 0 : $e.scrollX) + "px",
      top: (n?.y ?? 0) + (t === "fixed" ? 0 : $e.scrollY) + "px",
    });
}
var sk = b.createContext(new Set());
function TV(e, t, n, { safeArea: r, onDismiss: i }) {
  let o = Lt(() => new Set()),
    s = b.useContext(sk),
    [a, l] = vl();
  return (
    b.useEffect(() => {
      if (a) {
        if (!t.current) return;
        (t.current.style.pointerEvents = ""), s.add(t.current);
      } else {
        if (!t.current) return;
        (t.current.style.pointerEvents = "none"), s.delete(t.current), l();
      }
    }, [a, t, s]),
    b.useEffect(() => {
      if (!r) {
        let d = (p) => {
          p.key === "Escape" && i();
        };
        return (
          $e.addEventListener("keyup", d),
          () => $e.removeEventListener("keyup", d)
        );
      }
      let c;
      function u() {
        if (!(!c || o.size !== 0)) {
          for (let d of document.elementsFromPoint(c.x, c.y))
            if (d === e.current || d === t.current || d === n.current) return;
          i();
        }
      }
      function f(d) {
        (c = d), U.read(u);
      }
      return (
        $e.addEventListener("mousemove", f),
        () => {
          $e.removeEventListener("mousemove", f);
        }
      );
    }, [i, r, e, n, t, l, s, o]),
    o
  );
}
function EV({
  placement: e,
  alignment: t,
  offset: n,
  collisionDetectionSize: r,
  collisionDetectionPadding: i,
}) {
  return (o, s) => vV(o, s, e, t, n, r, i);
}
function RV(e, t) {
  return Lt(() => {
    let { originX: n, originY: r } = kS(e, t),
      i = { x: Ee(n), y: Ee(r) };
    return [
      i,
      (o) => {
        let s = kS(o, t);
        i.x.set(s.originX), i.y.set(s.originY);
      },
    ];
  });
}
function PV(e, { x: t, y: n }) {
  if (!e || !ha(e) || !da(e) || (!Pe(e.props.style) && !St(e.props.style)))
    return null;
  let r = { ...e.props.style, originX: t, originY: n };
  return b.cloneElement(e, { style: r });
}
function AN({
  alignment: e,
  placement: t,
  safeArea: n,
  offsetX: r,
  offsetY: i,
  anchorRef: o,
  className: s,
  children: a,
  portalSelector: l,
  zIndex: c,
  collisionDetection: u = !1,
  collisionDetectionPadding: f,
  onDismiss: d,
  ...p
}) {
  let g = b.useRef(null),
    v = b.useRef(null),
    x = b.useRef(null),
    [m, h] = RV(t, e);
  b.useLayoutEffect(() => {
    if (!SV(o) || !x.current || !t || !e) return;
    let { position: S, scrolls: k } = wV(o),
      w = x.current.getBoundingClientRect(),
      T = o.current.getBoundingClientRect(),
      F = EV({
        placement: t,
        alignment: e,
        offset: { x: r ?? 0, y: i ?? 0 },
        collisionDetectionSize: u
          ? { width: $e.innerWidth, height: $e.innerHeight }
          : void 0,
        collisionDetectionPadding: f,
      }),
      [I, $] = F(T, w);
    U.render(() => {
      g.current && (CS(g, S, $), h(I));
    });
    let B = CV(v),
      q = T,
      J,
      W = () => {
        let [re, ae] = F(q, w);
        CS(g, S, ae), h(re), n && B(q, ae, re, J), (J = void 0);
      },
      ne = () => {
        (q = o.current.getBoundingClientRect()), U.render(W);
      },
      [Y, G] = kV(ne);
    if ((k && Y?.(), !n)) return () => G?.();
    let N = (re) => {
        (J = re), U.read(ne);
      },
      ee = o.current;
    return (
      ee.addEventListener("mousemove", N),
      () => {
        G?.(), ee.removeEventListener("mousemove", N);
      }
    );
  }, [n, t, e, r, i, o, u, f, h]);
  let y = TV(o, g, v, { safeArea: n, onDismiss: d });
  return xp.createPortal(
    se(Vt.div, {
      ref: g,
      className: s,
      style: {
        visibility: "hidden",
        width: "auto",
        height: "auto",
        position: "absolute",
        zIndex: c,
      },
      ...p,
      children: [
        n
          ? C("div", {
              ref: v,
              style: { position: "absolute" },
              "data-safearea": !0,
            })
          : C("div", {
              style: { position: "fixed", inset: 0 },
              "aria-hidden": !0,
              onMouseDown: d,
            }),
        C(sk.Provider, {
          value: y,
          children: C("div", { ref: x, children: PV(a, m) }),
        }),
      ],
    }),
    document.querySelector(l) ?? document.body
  );
}
var _V = b.createContext(void 0),
  mm = class {
    constructor(e) {
      (this.resolver = e), R(this, "status");
    }
    static is(e) {
      return e instanceof mm;
    }
    preload() {
      if (this.status) {
        let t = this.status;
        return t.type !== "pending" ? void 0 : t.promise;
      }
      let e = this.resolver().then(
        (t) => {
          this.status = { type: "fulfilled", value: t };
        },
        (t) => {
          this.status = { type: "rejected", error: t };
        }
      );
      return (this.status = { type: "pending", promise: e }), e;
    }
    read() {
      let e = this.status;
      if (!e) throw new Error("Need to call preload() before read()");
      switch (e.type) {
        case "pending":
          throw new Error("Need to wait for preload() to resolve");
        case "fulfilled":
          return e.value;
        case "rejected":
          throw e.error;
        default:
          We(e);
      }
    }
  };
function vm(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
    ? e === t
      ? null
      : vm(e.parentElement, t)
    : null;
}
var TS = "element",
  IV = "collection",
  FV = "collectionItemId",
  LV = "pathVariables",
  ak = "framer/page-link,";
function lk(e) {
  return xe(e) && e.startsWith(`data:${ak}`);
}
function gm(e) {
  if (lk(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(ak.length),
        r = t.searchParams,
        i = r.has(TS) ? r.get(TS) : void 0,
        o,
        s = r.get(IV),
        a = r.get(FV),
        l = r.get(LV);
      if (s && a && l) {
        let c = Object.fromEntries(new URLSearchParams(l).entries());
        o = { collection: s, collectionItemId: a, pathVariables: c };
      }
      return {
        target: n === "none" ? null : n,
        element: i === "none" ? void 0 : i,
        collectionItem: o,
      };
    } catch {
      return;
    }
}
function MV(e, t, n) {
  var r;
  let i = t.getAttribute("data-framer-page-link-target"),
    o,
    s;
  if (i) {
    o = t.getAttribute("data-framer-page-link-element") ?? void 0;
    let l = t.getAttribute("data-framer-page-link-path-variables");
    l && (s = Object.fromEntries(new URLSearchParams(l).entries()));
  } else {
    let l = t.getAttribute("href");
    if (!l) return !1;
    let c = gm(l);
    if (!c || !c.target) return !1;
    (i = c.target),
      (o = c.element ?? void 0),
      (s = (r = c.collectionItem) == null ? void 0 : r.pathVariables);
  }
  let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return e(i, o, Object.assign({}, n, s), a), !0;
}
var OV = 500,
  DV = 0.9,
  AV = 1.7,
  VV = 4,
  BV = 1 / 0,
  Lo = new WeakMap(),
  qc = new Set(),
  Mo = new Map();
function $V() {
  var e;
  let t = Me.connection || Me.mozConnection || Me.webkitConnection || {},
    n = Me.deviceMemory && Me.deviceMemory > AV,
    r,
    i,
    o;
  function s() {
    (r = t.effectiveType || ""),
      (i = t.saveData || r.includes("2g")),
      (o = r === "3g" || n ? VV : BV);
  }
  (e = t.addEventListener) == null || e.call(t, "change", s), s();
  let a = new IntersectionObserver(u, { threshold: DV }),
    l = 0;
  async function c(f, d) {
    if (i) return;
    let p = Mo.get(f);
    if (!p?.size || qc.has(f)) return;
    ++l, qc.add(f);
    let g = lw(f).catch(() => {});
    a.unobserve(d), Lo.delete(d);
    for (let v of p) a.unobserve(v), Lo.delete(v);
    p.clear(), Mo.delete(f), await g, --l;
  }
  function u(f) {
    var d;
    for (let p of f) {
      let g = p.target,
        v = Lo.get(g);
      if (!v || qc.has(v)) {
        a.unobserve(g), Lo.delete(g);
        continue;
      }
      let x = Mo.get(v),
        m = ((d = Mo.get(v)) == null ? void 0 : d.size) ?? 0;
      if (p.isIntersecting) {
        if (l >= o) continue;
        x ? x.add(g) : Mo.set(v, new Set([g])),
          setTimeout(c.bind(void 0, v, g), OV);
      } else x && x.delete(g), m <= 1 && Mo.delete(v);
    }
  }
  return (f, d) => {
    if (!qc.has(f))
      return (
        Lo.set(d, f),
        a.observe(d),
        () => {
          Lo.delete(d), a.unobserve(d);
        }
      );
  };
}
var zV = !nm || typeof IntersectionObserver > "u" ? null : $V(),
  Ap = {},
  Qc = new WeakMap();
function ck(e, t, n) {
  var r, i;
  let o =
    (i = (r = Qc?.get(n ?? Ap)) == null ? void 0 : r.get(e.collectionId)) ==
    null
      ? void 0
      : i.get(e.collectionItemId);
  if (o) return o;
  let s = Qc.get(n ?? Ap) ?? new Map();
  Qc.set(n ?? Ap, s);
  let a = s.get(e.collectionId) ?? new Map();
  s.set(e.collectionId, a);
  let l = new mm(async () => {
    try {
      let c = t[e.collectionId];
      if (!c)
        throw new Error(
          `Key not found in collection utils for collection id: "${e.collectionId}`
        );
      let u = await c();
      if (!u) throw new Error("Collection does not contain utility functions");
      return await u.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    } catch (c) {
      console.warn(
        `Failed to resolve slug: ${
          c instanceof Error ? c.message : "Unknown error"
        }`
      );
      return;
    }
  });
  return a.set(e.collectionItemId, l), l;
}
var NV = "webPageId";
function uu(e) {
  return !!(e && typeof e == "object" && NV in e);
}
function HV(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function fu(e) {
  if (!lk(e)) return e;
  let t = gm(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: HV(i) };
}
var uk = /:([a-z]\w*)/gi,
  jV = Se(void 0);
function fk() {
  var e;
  let t = D(jV),
    n = (e = gu()) == null ? void 0 : e.pathVariables;
  return t || n;
}
function dk(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let o = Object.assign({}, i, r);
    for (let [, s] of e.path.matchAll(uk))
      if (!s || e.pathVariables[s] !== o[s]) return !1;
  }
  return !0;
}
function ym(e) {
  return e === void 0
    ? !1
    : !!(e.startsWith("#") || e.startsWith("/") || e.startsWith("."));
}
function WV(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function bm(e, t) {
  return e !== void 0 ? (e ? "_blank" : void 0) : t ? void 0 : "_blank";
}
function Kp(e, t = void 0) {
  let n = ym(e),
    r = bm(t, n);
  return {
    href: WV(e, n) ? e : `https://${e}`,
    target: r,
    rel: n ? void 0 : "noopener",
  };
}
function hk(e, t, n, r, i) {
  return async (o) => {
    var s, a;
    if (o.metaKey) return;
    let l = vm(o.target);
    if (!l || l.getAttribute("target") === "_blank") return;
    o.preventDefault();
    let c = (s = e.getRoute) == null ? void 0 : s.call(e, t);
    c && QS(c?.page) && (await c.page.preload()),
      (a = e.navigate) == null || a.call(e, t, n, r, i);
  };
}
function UV(e, t, n, r) {
  let i = [];
  function o(a) {
    if (!a || !n) return;
    let l = {};
    for (let c in a) {
      let u = a[c];
      de(u, "unresolvedSlug should be defined");
      let f = ck(u, n, r),
        d = f.preload();
      if (d) i.push(d);
      else {
        let p = f.read();
        p && (l[c] = p);
      }
    }
    return l;
  }
  let s = { path: o(e), hash: o(t) };
  if (i.length) throw Promise.allSettled(i);
  return s;
}
function XV(e, t, n, r, i, o) {
  let s = ym(e);
  if (!n.routes || !n.getRoute || !r || !s) return Kp(e, t);
  try {
    let [a, l] = e.split("#", 2);
    de(a !== void 0, "A href must have a defined pathname.");
    let [c] = a.split("?", 2);
    de(c !== void 0, "A href must have a defined pathname.");
    let { routeId: u, pathVariables: f } = aw(n.routes, c),
      d = n.getRoute(u);
    if (d) {
      let p = Object.assign({}, i, f),
        g = vu(d, {
          currentRoutePath: r.path,
          currentPathVariables: r.pathVariables,
          hash: l || void 0,
          pathVariables: p,
          preserveQueryParams: n.preserveQueryParams,
        }),
        v = bm(t, !0);
      return { href: g, target: v, onClick: hk(n, u, l || void 0, p, o) };
    }
  } catch {}
  return Kp(e, t);
}
function YV(e, t, n) {
  var r;
  if (xe(e)) {
    let o = ym(e);
    if (!t.routes || !t.getRoute || !n || !o) return;
    let [s] = e.split("#", 2);
    if (s === void 0) return;
    let [a] = s.split("?", 2);
    if (a === void 0) return;
    let { routeId: l } = aw(t.routes, a);
    return t.getRoute(l);
  }
  let { webPageId: i } = e;
  return (r = t.getRoute) == null ? void 0 : r.call(t, i);
}
var $N = Ne(
  ({ children: e, href: t, openInNewTab: n, smoothScroll: r, ...i }, o) => {
    let s = Uo(),
      a = gu(),
      l = fk(),
      { activeLocale: c } = sw(),
      u = A(null),
      f = he(() => {
        let g,
          v = (m) => {
            var h;
            if (m === null) {
              g?.(), (g = void 0);
              return;
            }
            let y = uu(t) ? t : fu(t);
            if (!y) return;
            let S = YV(y, s, a);
            S && (g = (h = zV) == null ? void 0 : h(S, m));
          },
          x = Yt(e) && "ref" in e;
        return x && rk(e.ref)
          ? gS(e.ref, v)
          : x && No(e.ref)
          ? JA(e.ref, v)
          : gS(u, v);
      }, [t, s, a, e]),
      d = ku(o),
      p = he(() => {
        var g;
        if (!t) return {};
        let v = uu(t) ? t : fu(t);
        if (!v) return {};
        if (xe(v)) return XV(v, n, s, a, l, r);
        let {
            webPageId: x,
            hash: m,
            pathVariables: h,
            hashVariables: y,
            unresolvedHashSlugs: S,
            unresolvedPathSlugs: k,
          } = v,
          w = UV(k, S, s.collectionUtils, c),
          T = { ...l, ...h, ...w?.path },
          E = { ...l, ...y, ...w?.hash },
          F = bm(n, !0),
          I = (g = s.getRoute) == null ? void 0 : g.call(s, x),
          $ = vu(I, {
            currentRoutePath: a?.path,
            currentPathVariables: a?.pathVariables,
            hash: m,
            pathVariables: T,
            hashVariables: E,
            preserveQueryParams: s.preserveQueryParams,
          }),
          B = $.split("#", 2)[1];
        return {
          href: $,
          target: F,
          onClick: hk(s, x, B, T, r),
          "data-framer-page-link-current": (a && dk(a, v, l)) || void 0,
        };
      }, [t, s, c, l, n, a, r]);
    return d(e, { ...i, ...p, ref: f });
  }
);
function GV(e, t, n, r) {
  let i = uu(e) ? e : fu(e);
  if (!uu(i)) return xe(e) ? Kp(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let o = t.getRoute(t.currentRouteId),
    {
      webPageId: s,
      hash: a,
      pathVariables: l,
      hashVariables: c,
      unresolvedHashSlugs: u,
      unresolvedPathSlugs: f,
    } = i,
    d = t.getRoute(s),
    p = f || u ? r?.(f, u) : void 0,
    g = Object.assign({}, t.currentPathVariables, n, l, p?.path),
    v = Object.assign({}, t.currentPathVariables, n, c, p?.hash);
  return vu(d, {
    currentRoutePath: o?.path,
    currentPathVariables: t.currentPathVariables,
    hash: a,
    pathVariables: g,
    hashVariables: v,
    relative: !1,
    preserveQueryParams: t.preserveQueryParams,
  });
}
var KV = b.createContext(void 0);
function WN({
  RootComponent: e,
  isWebsite: t,
  routeId: n,
  framerSiteId: r,
  pathVariables: i,
  routes: o,
  collectionUtils: s,
  notFoundPage: a,
  isReducedMotion: l = !1,
  includeDataObserver: c = !1,
  localeId: u,
  locales: f,
  preserveQueryParams: d,
  enableImproveInpDuringHydration: p,
  addHydrationMarkers: g = !1,
}) {
  if (
    (b.useEffect(() => {
      t || dw.start();
    }, []),
    t)
  )
    return C(Hy, {
      reducedMotion: l ? "user" : "never",
      children: C(lV, {
        children: C(KV.Provider, {
          value: r,
          children: C(eL, {
            initialRoute: n,
            initialPathVariables: i,
            initialLocaleId: u,
            routes: o,
            collectionUtils: s,
            notFoundPage: a,
            locales: f,
            defaultPageStyle: { minHeight: "100vh", width: "auto" },
            preserveQueryParams: d,
            enableImproveInpDuringHydration: p,
            addHydrationMarkers: g,
          }),
        }),
      }),
    });
  {
    let v = c ? xA : b.Fragment;
    return C(v, {
      children: C(WF, {
        routes: o,
        children: C(vA, {
          children: b.isValidElement(e) ? e : b.createElement(e, { key: n }),
        }),
      }),
    });
  }
}
function qV(e, t, n) {
  let r = _n.map(e, (i) => (Yt(i) ? yn(i, t) : i));
  return n ? r : C(Oe, { children: r });
}
var pk = b.createContext(void 0),
  ES = "ssr-variant";
function RS(e, t, n, r, i, o, s, a) {
  let l = b.Children.toArray(t),
    c = l[0];
  if (l.length !== 1 || !b.isValidElement(c))
    return (
      console.warn(
        "PropertyOverrides: expected exactly one React element for a child",
        t
      ),
      s(t, n)
    );
  let u = [],
    f = [];
  for (let [x] of Object.entries(r)) {
    if (x === i) continue;
    let m = e[x];
    if (!m || !ZV(c.props, m)) {
      f.push(x);
      continue;
    }
    let h = PS([x], o);
    h.length && u.push({ variants: h, propOverrides: m });
  }
  if (u.length === 0) return s(c, n);
  let d = [i, ...f],
    p = PS(d, o);
  p.length && u.unshift({ variants: p });
  let g = `.${ES} { display: contents }`,
    v = [];
  for (let { variants: x, propOverrides: m } of u) {
    if (a && !x.includes(a)) continue;
    let h = x.join("+"),
      y = C(
        pk.Provider,
        { value: new Set(x), children: s(c, m ? { ...n, ...m } : n) },
        h
      ),
      S = QV(x, o, r);
    S.length
      ? (de(u.length > 1, "Must branch out when there are hiddenClassNames"),
        (y = C("div", { className: `${ES} ${S.join(" ")}`, children: y }, h)))
      : de(u.length === 1, "Cannot branch out when hiddenClassNames is empty"),
      v.push(y);
  }
  return (
    de(
      !a || v.length === 1,
      "Must render exactly one branch when activeVariantId is given"
    ),
    se(Oe, {
      children: [!o && !Oi() && C("style", { [ok]: !0, children: g }), v],
    })
  );
}
function QV(e, t, n) {
  let r = [];
  for (let [i, o] of Object.entries(n)) {
    let s = t && !t.has(i);
    if (e.includes(i) || s) continue;
    let a = o.split("-")[2];
    r.push(`hidden-${a}`);
  }
  return r;
}
function PS(e, t) {
  return t ? e.filter((n) => t.has(n)) : e;
}
function ZV(e, t) {
  for (let n of Object.keys(t)) if (!Ue(e[n], t[n], !0)) return !0;
  return !1;
}
function JV(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
var e3 = () => () => {},
  t3 = () => !0,
  n3 = () => !1,
  GN = b.forwardRef(function (
    { breakpoint: t, overrides: n, children: r, ...i },
    o
  ) {
    let s = ku(o),
      a = b.useContext(pk),
      l = b.useSyncExternalStore(e3, n3, t3),
      c = Lt(() => (l ? (Oi() ? 1 : 2) : 0)),
      u = b.useContext(_V);
    if (!u)
      return (
        console.warn("PropertyOverrides is missing GeneratedComponentContext"),
        s(r, i)
      );
    let { primaryVariantId: f, variantClassNames: d } = u;
    switch (c) {
      case 0:
        return s(r, JV(t, i, n));
      case 1:
        return RS(n, r, i, d, f, a, s, t);
      case 2:
        return RS(n, r, i, d, f, a, qV, void 0);
      default:
        We(c);
    }
  }),
  KN = Ne(function ({ links: t, children: n, ...r }, i) {
    let o = Uo(),
      { activeLocale: s } = sw(),
      a = ku(i),
      l = [],
      c = t.map((f) =>
        GV(f.href, o, f.implicitPathVariables, (d, p) => {
          function g(v) {
            let x = {};
            for (let m in v) {
              let h = v[m];
              de(o.collectionUtils, "collectionUtils should be defined"),
                de(h, "unresolvedSlug be defined");
              let y = ck(h, o.collectionUtils, s),
                S = y.preload();
              if (S) l.push(S);
              else {
                let k = y.read();
                k && (x[m] = k);
              }
            }
            return x;
          }
          return { path: g(d), hash: g(p) };
        })
      );
    if (l.length > 0) throw Promise.allSettled(l);
    let u = n(c);
    return a(u, r);
  });
var r3 = Vn(iF(), 1);
function i3(e) {
  return {
    trace(...t) {
      var n;
      return (n = nt.getLogger(e)) == null ? void 0 : n.trace(...t);
    },
    debug(...t) {
      var n;
      return (n = nt.getLogger(e)) == null ? void 0 : n.debug(...t);
    },
    info(...t) {
      var n;
      return (n = nt.getLogger(e)) == null ? void 0 : n.info(...t);
    },
    warn(...t) {
      var n;
      return (n = nt.getLogger(e)) == null ? void 0 : n.warn(...t);
    },
    error(...t) {
      var n;
      return (n = nt.getLogger(e)) == null ? void 0 : n.error(...t);
    },
  };
}
function o3(e) {
  return om(e) && e.every(Pe);
}
function mk(e) {
  return Pe(e) && No(e.read) && No(e.preload);
}
function s3(e) {
  return o3(e) || mk(e);
}
function a3(e) {
  return Pe(e) && Pe(e.schema);
}
function xm(e) {
  return Pe(e) && Pe(e.collectionByLocaleId);
}
async function _S(e, t) {
  return mk(e) ? (await e.preload(t), e.read(t)) : e;
}
var l3 = class {
    constructor(e, t) {
      (this.collection = e),
        (this.locale = t),
        R(this, "schema"),
        R(this, "indexes", []);
      let n = Cw(e);
      de(n, "Collection does not have properties");
      let r = { id: { type: "string", isNullable: !1 } },
        i = Object.entries(n);
      for (let [o, s] of i) s && (r[o] = { type: s.type, isNullable: !0 });
      this.schema = r;
    }
    getDatabaseItem(e, t) {
      let n = {};
      for (let r in this.schema) {
        let i = e[r];
        if (Ho(i)) continue;
        let o = this.schema[r];
        St(o) || (n[r] = { type: o.type, value: i });
      }
      return { pointer: t, data: n };
    }
    async resolveRichText(e) {
      if (mm.is(e)) {
        let t = e.preload();
        return t && (await t), e.read();
      }
      return e;
    }
    async scanItems() {
      return (await _S(this.collection, this.locale)).map((t, n) => {
        let r = String(n);
        return this.getDatabaseItem(t, r);
      });
    }
    async resolveItems(e) {
      let t = await _S(this.collection, this.locale);
      return e.map((n) => {
        let r = Number(n),
          i = t[r];
        return de(i, "Can't find collection item"), this.getDatabaseItem(i, n);
      });
    }
    compareItems(e, t) {
      return Number(e.pointer) - Number(t.pointer);
    }
  },
  mn = {
    equal(e, t, n) {
      return e?.type !== t?.type ? !1 : ca(e, t, n) === 0;
    },
    lessThan(e, t, n) {
      return e?.type !== t?.type ? !1 : ca(e, t, n) < 0;
    },
    lessThanOrEqual(e, t, n) {
      return e?.type !== t?.type ? !1 : ca(e, t, n) <= 0;
    },
    greaterThan(e, t, n) {
      return e?.type !== t?.type ? !1 : ca(e, t, n) > 0;
    },
    greaterThanOrEqual(e, t, n) {
      return e?.type !== t?.type ? !1 : ca(e, t, n) >= 0;
    },
    stringify(e) {
      if (e === null) return "null";
      switch (e.type) {
        case "boolean":
        case "number":
          return String(e.value);
        case "string":
          return `'${e.value}'`;
        case "enum":
          return `'${e.value}' /* Enum */`;
        case "color":
          return `'${e.value}' /* Color */`;
        case "date":
          return `'${e.value}' /* Date */`;
        case "richtext":
          return "RichText";
        case "responsiveimage":
          return "ResponsiveImage";
        case "file":
          return "File";
        case "link":
          return xe(e.value) ? `'${e.value}' /* Link */` : "Link";
        default:
          We(e);
      }
    },
  };
function ca(e, t, n) {
  if (Be(e) || Be(t)) return de(e === t), 0;
  switch (e.type) {
    case "boolean":
      return (
        de(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "color":
      return (
        de(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "date": {
      de(e.type === t.type);
      let r = new Date(e.value),
        i = new Date(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "enum":
      return (
        de(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "file":
      return (
        de(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "responsiveimage": {
      de(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "link": {
      de(e.type === t.type);
      let r = JSON.stringify(e.value),
        i = JSON.stringify(t.value);
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "number":
      return (
        de(e.type === t.type),
        e.value < t.value ? -1 : e.value > t.value ? 1 : 0
      );
    case "richtext": {
      de(e.type === t.type);
      let r = e.value,
        i = t.value;
      return r < i ? -1 : r > i ? 1 : 0;
    }
    case "string": {
      de(e.type === t.type);
      let r = e.value,
        i = t.value;
      return (
        n.type === 0 &&
          ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
        r < i ? -1 : r > i ? 1 : 0
      );
    }
    default:
      We(e);
  }
}
var qp = "index",
  It = class {
    static from(e, t) {
      return Xn(e, t, void 0);
    }
  },
  ut = class extends It {
    constructor(e, t) {
      super(),
        (this.schema = e),
        (this.name = t),
        R(this, "definition"),
        t === qp
          ? (this.definition = { type: "number", isNullable: !1 })
          : (this.definition = e[t] ?? null);
    }
    stringify() {
      return this.name;
    }
    equals(e) {
      return (
        e instanceof ut &&
        Ue(this.definition, e.definition) &&
        Ue(e.name, this.name)
      );
    }
    evaluate(e) {
      let t = this.name;
      if (St(e) || t === qp) throw new Error(`Can't evaluate identifier: ${t}`);
      return e.data[t] ?? null;
    }
    canEvaluate() {
      return !1;
    }
  },
  Le = class extends It {
    constructor(e, t) {
      super(), (this.definition = e), (this.value = t);
    }
    stringify() {
      return mn.stringify(this.value);
    }
    static fromNull() {
      return new Le(null, null);
    }
    static fromBoolean(e) {
      return new Le(
        { type: "boolean", isNullable: Be(e) },
        Be(e) ? null : { type: "boolean", value: e }
      );
    }
    static fromDate(e) {
      return new Le(
        { type: "date", isNullable: Be(e) },
        Be(e) ? null : { type: "date", value: e.toISOString() }
      );
    }
    static fromEnum(e) {
      return new Le(
        { type: "enum", isNullable: Be(e) },
        Be(e) ? null : { type: "enum", value: e }
      );
    }
    static fromNumber(e) {
      return new Le(
        { type: "number", isNullable: Be(e) },
        Be(e) ? null : { type: "number", value: e }
      );
    }
    static fromString(e) {
      return new Le(
        { type: "string", isNullable: Be(e) },
        Be(e) ? null : { type: "string", value: e }
      );
    }
    equals(e) {
      return (
        e instanceof Le &&
        Ue(this.definition, e.definition) &&
        Ue(e.value, this.value)
      );
    }
    evaluate() {
      return this.value;
    }
    canEvaluate() {
      return !0;
    }
  },
  La = class extends It {
    constructor(e) {
      super(),
        (this.argumentExpressions = e),
        R(this, "collation", { type: 0 });
    }
    getArgumentExpression(e) {
      let t = this.argumentExpressions[e];
      if (St(t)) throw new Error("Missing argument in function call");
      return t;
    }
    equals(e) {
      return (
        e instanceof La &&
        Ue(this.constructor, e.constructor) &&
        Ue(this.argumentExpressions, e.argumentExpressions)
      );
    }
    canEvaluate() {
      return this.argumentExpressions.every((e) => e.canEvaluate());
    }
  },
  Cu = class extends La {
    constructor() {
      super(...arguments),
        R(this, "definition", Cu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `CONTAINS(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Be(e) || e.type !== "string" || Be(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.includes(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  Tu = class extends La {
    constructor() {
      super(...arguments),
        R(this, "definition", Tu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `STARTS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Be(e) || e.type !== "string" || Be(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.startsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  Eu = class extends La {
    constructor() {
      super(...arguments),
        R(this, "definition", Eu.getDefinition()),
        R(this, "sourceExpression", this.getArgumentExpression(0)),
        R(this, "targetExpression", this.getArgumentExpression(1));
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `ENDS_WITH(${this.sourceExpression.stringify()}, ${this.targetExpression.stringify()})`;
    }
    getValue(e, t) {
      if (Be(e) || e.type !== "string" || Be(t) || t.type !== "string")
        return !1;
      let n = e.value,
        r = t.value;
      return (
        this.collation.type === 0 &&
          ((n = n.toLowerCase()), (r = r.toLowerCase())),
        n.endsWith(r)
      );
    }
    evaluate(e) {
      let t = this.sourceExpression.evaluate(e),
        n = this.targetExpression.evaluate(e);
      return { type: "boolean", value: this.getValue(t, n) };
    }
  },
  du = class extends It {
    constructor(e, t, n) {
      super(),
        (this.valueExpression = e),
        (this.conditions = t),
        (this.elseExpression = n),
        R(this, "definition"),
        R(this, "collation", { type: 0 });
      let r = [];
      for (let { thenExpression: i } of t) r.push(i.definition);
      n && r.push(n.definition), (this.definition = du.getDefinition(r));
    }
    static getDefinition(e) {
      let t = null,
        n = !1;
      for (let r of e) {
        if ((t ?? (t = r), t && r && t.type !== r.type))
          throw new Error("Incompatible types in CASE expression");
        n || (n = r?.isNullable ?? !0);
      }
      return t ? { type: t.type, isNullable: n } : null;
    }
    stringify() {
      let e = "CASE";
      this.valueExpression && (e += ` ${this.valueExpression.stringify()}`);
      for (let { whenExpression: t, thenExpression: n } of this.conditions)
        e += ` WHEN ${t.stringify()} THEN ${n.stringify()}`;
      return (
        this.elseExpression &&
          (e += ` ELSE ${this.elseExpression.stringify()}`),
        (e += " END"),
        e
      );
    }
    equals(e) {
      return (
        e instanceof du &&
        Ue(this.valueExpression, e.valueExpression) &&
        Ue(this.conditions, e.conditions) &&
        Ue(this.elseExpression, e.elseExpression)
      );
    }
    evaluate(e) {
      var t, n;
      let r =
        ((t = this.valueExpression) == null ? void 0 : t.evaluate(e)) ?? null;
      for (let { whenExpression: i, thenExpression: o } of this.conditions) {
        let s = i.evaluate(e);
        if (this.valueExpression ? mn.equal(s, r, this.collation) : Di(s))
          return o.evaluate(e);
      }
      return (
        ((n = this.elseExpression) == null ? void 0 : n.evaluate(e)) ?? null
      );
    }
    canEvaluate() {
      let e = [];
      this.valueExpression && e.push(this.valueExpression);
      for (let t of this.conditions)
        e.push(t.whenExpression), e.push(t.thenExpression);
      return (
        this.elseExpression && e.push(this.elseExpression),
        e.every((t) => t.canEvaluate())
      );
    }
  },
  c3 = class {
    constructor(e, t) {
      (this.whenExpression = e), (this.thenExpression = t);
    }
  },
  vk = class extends It {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    equals(e) {
      return (
        e instanceof vk &&
        Ue(this.constructor, e.constructor) &&
        Ue(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  xa = class extends vk {
    constructor() {
      super(...arguments), R(this, "definition", xa.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `NOT ${this.valueExpression.stringify()}`;
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: "boolean", value: !Di(t) };
    }
  },
  Sa = class extends It {
    constructor(e) {
      super(),
        (this.operandExpressions = e),
        R(this, "definition", Sa.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return this.operandExpressions.map((e) => e.stringify()).join(" AND ");
    }
    equals(e) {
      return (
        e instanceof Sa &&
        Ue(this.constructor, e.constructor) &&
        Ue(this.operandExpressions, e.operandExpressions)
      );
    }
    canEvaluate() {
      return this.operandExpressions.every((e) => e.canEvaluate());
    }
  },
  Ii = class extends Sa {
    constructor() {
      super(...arguments), R(this, "operator", "AND");
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.every((n) => {
          let r = n.evaluate(e);
          return Di(r);
        }),
      };
    }
  },
  pa = class extends Sa {
    constructor() {
      super(...arguments), R(this, "operator", "OR");
    }
    evaluate(e) {
      return {
        type: "boolean",
        value: this.operandExpressions.some((n) => {
          let r = n.evaluate(e);
          return Di(r);
        }),
      };
    }
  },
  Kn = class extends It {
    constructor(e, t) {
      super(),
        (this.leftExpression = e),
        (this.rightExpression = t),
        R(this, "definition", Kn.getDefinition()),
        R(this, "collation", { type: 0 });
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    stringify() {
      return `${this.leftExpression.stringify()} ${
        this.operator
      } ${this.rightExpression.stringify()}`;
    }
    equals(e) {
      return (
        e instanceof Kn &&
        Ue(this.constructor, e.constructor) &&
        Ue(this.leftExpression, e.leftExpression) &&
        Ue(this.rightExpression, e.rightExpression)
      );
    }
    canEvaluate() {
      return (
        this.leftExpression.canEvaluate() && this.rightExpression.canEvaluate()
      );
    }
  },
  jo = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", "=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: mn.equal(t, n, this.collation) };
    }
  },
  Wo = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", "!=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: !mn.equal(t, n, this.collation) };
    }
  },
  wa = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", "<");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: mn.lessThan(t, n, this.collation) };
    }
  },
  ka = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", "<=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: mn.lessThanOrEqual(t, n, this.collation),
      };
    }
  },
  Ca = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", ">");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return { type: "boolean", value: mn.greaterThan(t, n, this.collation) };
    }
  },
  Ta = class extends Kn {
    constructor() {
      super(...arguments), R(this, "operator", ">=");
    }
    evaluate(e) {
      let t = this.leftExpression.evaluate(e),
        n = this.rightExpression.evaluate(e);
      return {
        type: "boolean",
        value: mn.greaterThanOrEqual(t, n, this.collation),
      };
    }
  },
  Ma = class extends It {
    constructor(e) {
      super(), (this.valueExpression = e);
    }
    stringify() {
      return `CAST(${this.valueExpression.stringify()} AS ${this.dataType})`;
    }
    equals(e) {
      return (
        e instanceof Ma &&
        Ue(this.constructor, e.constructor) &&
        Ue(this.valueExpression, e.valueExpression)
      );
    }
    canEvaluate() {
      return this.valueExpression.canEvaluate();
    }
  },
  Ru = class extends Ma {
    constructor() {
      super(...arguments),
        R(this, "dataType", "BOOLEAN"),
        R(this, "definition", Ru.getDefinition());
    }
    static getDefinition() {
      return { type: "boolean", isNullable: !1 };
    }
    evaluate(e) {
      let t = this.valueExpression.evaluate(e);
      return { type: "boolean", value: Di(t) };
    }
  };
function Di(e) {
  switch (e?.type) {
    case "boolean":
    case "number":
    case "string":
      return !!e.value;
  }
  return !1;
}
var Sm = class extends Ma {
  constructor() {
    super(...arguments),
      R(this, "dataType", "DATE"),
      R(this, "definition", Sm.getDefinition());
  }
  static getDefinition() {
    return { type: "date", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = gk(t);
    return Be(n) ? null : { type: "date", value: n.toISOString() };
  }
};
function gk(e) {
  switch (e?.type) {
    case "date":
    case "number":
    case "string": {
      let t = new Date(e.value);
      return ww(t) ? t : null;
    }
  }
  return null;
}
var wm = class extends Ma {
  constructor() {
    super(...arguments),
      R(this, "dataType", "NUMBER"),
      R(this, "definition", wm.getDefinition());
  }
  static getDefinition() {
    return { type: "number", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = yk(t);
    return Be(n) ? null : { type: "number", value: n };
  }
};
function yk(e) {
  switch (e?.type) {
    case "number":
    case "string": {
      let t = Number(e.value);
      return Number.isFinite(t) ? t : null;
    }
  }
  return null;
}
var km = class extends Ma {
  constructor() {
    super(...arguments),
      R(this, "dataType", "STRING"),
      R(this, "definition", km.getDefinition());
  }
  static getDefinition() {
    return { type: "string", isNullable: !0 };
  }
  evaluate(e) {
    let t = this.valueExpression.evaluate(e),
      n = bk(t);
    return Be(n) ? null : { type: "string", value: n };
  }
};
function bk(e) {
  switch (e?.type) {
    case "string":
    case "number":
      return String(e.value);
  }
  return null;
}
function Xn(e, t, n) {
  let r = u3(e, t, n),
    i = r instanceof Le;
  if (r.canEvaluate() && !i) {
    let o = r.evaluate();
    return new Le(r.definition, o);
  }
  return r;
}
function u3(e, t, n) {
  switch (e.type) {
    case "Identifier":
      return f3(e, t);
    case "LiteralValue":
      return d3(e, n);
    case "FunctionCall":
      return p3(e, t);
    case "Case":
      return m3(e, t, n);
    case "UnaryOperation":
      return v3(e, t);
    case "BinaryOperation":
      return g3(e, t);
    case "TypeCast":
      return E3(e, t);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function f3(e, t) {
  return new ut(t, e.name);
}
function d3(e, t) {
  var n;
  let r = h3(e.value);
  switch (t?.type) {
    case "boolean": {
      let i = Di(r.value);
      return Le.fromBoolean(i);
    }
    case "date": {
      let i = gk(r.value);
      return Le.fromDate(i);
    }
    case "enum":
      return ((n = r.value) == null ? void 0 : n.type) === "string"
        ? Le.fromEnum(r.value.value)
        : r;
    case "number": {
      let i = yk(r.value);
      return Le.fromNumber(i);
    }
    case "string": {
      let i = bk(r.value);
      return Le.fromString(i);
    }
  }
  return r;
}
function h3(e) {
  return Sw(e)
    ? Le.fromBoolean(e)
    : ww(e)
    ? Le.fromDate(e)
    : Mt(e)
    ? Le.fromNumber(e)
    : xe(e)
    ? Le.fromString(e)
    : Le.fromNull();
}
function p3(e, t) {
  let n = e.arguments.map((r) => Xn(r, t, void 0));
  switch (e.functionName) {
    case "CONTAINS":
      return new Cu(n);
    case "STARTS_WITH":
      return new Tu(n);
    case "ENDS_WITH":
      return new Eu(n);
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function m3(e, t, n) {
  let r = e.value && Xn(e.value, t, void 0),
    i = e.value && Ea(e.value, t),
    o = e.conditions.map((a) => {
      let l = Xn(a.when, t, i),
        c = Xn(a.then, t, n);
      return new c3(l, c);
    }),
    s = e.else && Xn(e.else, t, n);
  return new du(r, o, s);
}
function v3(e, t) {
  let n = Xn(e.value, t, void 0);
  switch (e.operator) {
    case "not":
      return Qp(n);
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function Qp(e) {
  var t;
  if (e instanceof xa) {
    let n = e.valueExpression;
    return ((t = n.definition) == null ? void 0 : t.type) === "boolean"
      ? n
      : new Ru(n);
  }
  if (e instanceof jo) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Wo(n, r);
  }
  if (e instanceof Wo) {
    let { leftExpression: n, rightExpression: r } = e;
    return new jo(n, r);
  }
  if (e instanceof wa) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Ta(n, r);
  }
  if (e instanceof ka) {
    let { leftExpression: n, rightExpression: r } = e;
    return new Ca(n, r);
  }
  if (e instanceof Ca) {
    let { leftExpression: n, rightExpression: r } = e;
    return new ka(n, r);
  }
  if (e instanceof Ta) {
    let { leftExpression: n, rightExpression: r } = e;
    return new wa(n, r);
  }
  if (e instanceof Ii) {
    let { operandExpressions: n } = e,
      r = n.map(Qp);
    return new pa(r);
  }
  if (e instanceof Ii) {
    let { operandExpressions: n } = e,
      r = n.map(Qp);
    return new Ii(r);
  }
  return new xa(e);
}
function g3(e, t) {
  let n =
      e.operator !== "and" && e.operator !== "or"
        ? Ea(e.left, t) || Ea(e.right, t)
        : void 0,
    r = Xn(e.left, t, n),
    i = Xn(e.right, t, n);
  switch (e.operator) {
    case "and":
      return y3(r, i);
    case "or":
      return b3(r, i);
    case "==":
      return x3(r, i);
    case "!=":
      return S3(r, i);
    case "<":
      return w3(r, i);
    case "<=":
      return k3(r, i);
    case ">":
      return C3(r, i);
    case ">=":
      return T3(r, i);
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function y3(e, t) {
  let n = [];
  return (
    e instanceof Ii ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof Ii ? n.push(...t.operandExpressions) : n.push(t),
    new Ii(n)
  );
}
function b3(e, t) {
  let n = [];
  return (
    e instanceof pa ? n.push(...e.operandExpressions) : n.push(e),
    t instanceof pa ? n.push(...t.operandExpressions) : n.push(t),
    new pa(n)
  );
}
function x3(e, t) {
  let n = e instanceof ut;
  return t instanceof ut && !n ? new jo(t, e) : new jo(e, t);
}
function S3(e, t) {
  let n = e instanceof ut;
  return t instanceof ut && !n ? new Wo(t, e) : new Wo(e, t);
}
function w3(e, t) {
  let n = e instanceof ut;
  return t instanceof ut && !n ? new Ca(t, e) : new wa(e, t);
}
function k3(e, t) {
  let n = e instanceof ut;
  return t instanceof ut && !n ? new Ta(t, e) : new ka(e, t);
}
function C3(e, t) {
  let n = e instanceof ut;
  return t instanceof ut && !n ? new wa(t, e) : new Ca(e, t);
}
function T3(e, t) {
  let n = e instanceof ut;
  return t instanceof ut && !n ? new ka(t, e) : new Ta(e, t);
}
function E3(e, t) {
  let n = Xn(e.value, t, void 0);
  switch (e.dataType) {
    case "BOOLEAN":
      return R3(n);
    case "DATE":
      return P3(n);
    case "NUMBER":
      return _3(n);
    case "STRING":
      return I3(n);
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function R3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "boolean"
    ? e
    : new Ru(e);
}
function P3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "date"
    ? e
    : new Sm(e);
}
function _3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "number"
    ? e
    : new wm(e);
}
function I3(e) {
  var t;
  return ((t = e.definition) == null ? void 0 : t.type) === "string"
    ? e
    : new km(e);
}
function Ea(e, t) {
  switch (e.type) {
    case "Identifier":
      return F3(e, t);
    case "LiteralValue":
      return;
    case "FunctionCall":
      return L3(e);
    case "Case":
      return M3(e, t);
    case "UnaryOperation":
      return O3(e);
    case "BinaryOperation":
      return D3(e);
    case "TypeCast":
      return A3(e);
    default:
      throw new Error(`Unsupported expression: ${JSON.stringify(e)}`);
  }
}
function F3(e, t) {
  return t[e.name];
}
function L3(e) {
  switch (e.functionName) {
    case "CONTAINS":
      return Cu.getDefinition();
    case "STARTS_WITH":
      return Tu.getDefinition();
    case "ENDS_WITH":
      return Eu.getDefinition();
    default:
      throw new Error(`Unsupported function name: ${e.functionName}`);
  }
}
function M3(e, t) {
  let n = [];
  for (let r of e.conditions) {
    let i = Ea(r.then, t);
    St(i) || n.push(i);
  }
  if (e.else) {
    let r = Ea(e.else, t);
    St(r) || n.push(r);
  }
  return du.getDefinition(n) ?? void 0;
}
function O3(e) {
  switch (e.operator) {
    case "not":
      return xa.getDefinition();
    default:
      throw new Error(`Unsupported unary operator: ${e.operator}`);
  }
}
function D3(e) {
  switch (e.operator) {
    case "and":
    case "or":
      return Sa.getDefinition();
    case "==":
    case "!=":
    case "<":
    case "<=":
    case ">":
    case ">=":
      return Kn.getDefinition();
    default:
      throw new Error(`Unsupported binary operator: ${e.operator}`);
  }
}
function A3(e) {
  switch (e.dataType) {
    case "BOOLEAN":
      return Ru.getDefinition();
    case "DATE":
      return Sm.getDefinition();
    case "NUMBER":
      return wm.getDefinition();
    case "STRING":
      return km.getDefinition();
    default:
      throw new Error(`Unsupported data type: ${e.dataType}`);
  }
}
function Zr(e, t) {
  return `(self: ${e}ms${t ? `, total: ${t}ms` : ""})`;
}
function qn(e) {
  return `(items: ${e})`;
}
var Jr = class {
    constructor() {
      R(this, "executionTime", 0), R(this, "itemCount", 0);
    }
    async execute() {
      let e = performance.now(),
        t = await this._execute();
      return (
        (this.executionTime = performance.now() - e),
        (this.itemCount = t.length),
        t
      );
    }
  },
  xk = class extends Jr {
    constructor(e) {
      super(), (this.collection = e);
    }
    inspect() {
      return {
        label: `ScanCollectionPlan ${Zr(this.executionTime)} ${qn(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      return this.collection.scanItems();
    }
  },
  mr = class extends Jr {
    constructor(e, t) {
      super(), (this.index = e), (this.query = t);
    }
    inspect() {
      let e = [],
        t = (n) => {
          switch (n.type) {
            case "All":
              return n.type;
            case "Equals":
            case "NotEquals":
            case "LessThan":
            case "GreaterThan":
            case "Contains":
            case "StartsWith":
            case "EndsWith":
              return `${n.type} ${mn.stringify(n.value)}`;
            default:
              We(n);
          }
        };
      for (let n = 0; n < this.index.fields.length; n++) {
        let r = this.index.fields[n],
          i = this.query[n];
        !r ||
          r.type !== "Identifier" ||
          !i ||
          i.type === "All" ||
          e.push(`${r.name} ${t(i)}`);
      }
      return {
        label: `LookupIndexPlan(${e.join(", ")}) ${Zr(this.executionTime)} ${qn(
          this.itemCount
        )}`,
      };
    }
    async _execute() {
      return this.index.lookupItems(this.query);
    }
  },
  V3 = class extends Jr {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `UnionPlan ${Zr(
          this.executionTime - e,
          this.executionTime
        )} ${qn(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new hu(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.union(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  B3 = class extends Jr {
    constructor(e) {
      super(), (this.childPlans = e);
    }
    inspect() {
      let e = Math.max(...this.childPlans.map((t) => t.executionTime ?? 0));
      return {
        label: `IntersectionPlan ${Zr(
          this.executionTime - e,
          this.executionTime
        )} ${qn(this.itemCount)} ${qn(this.itemCount)}`,
        nodes: this.childPlans.map((t) => t.inspect()),
      };
    }
    async _execute() {
      let e = await Promise.all(
          this.childPlans.map(async (n) => {
            let r = await n.execute();
            return new hu(r);
          })
        ),
        t;
      for (let n of e) t ? (t = t.intersection(n)) : (t = n);
      return t?.items() ?? [];
    }
  },
  $3 = class extends Jr {
    constructor(e, t, n, r) {
      super(),
        (this.childPlan = e),
        (this.collection = t),
        (this.richTextResolver = n),
        (this.select = r);
    }
    inspect() {
      return {
        label: `ResolveItemsPlan ${Zr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${qn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = e.map((n) => n.pointer);
      for (let n of e)
        for (let r of this.select) {
          if (r.type !== "Identifier") continue;
          let i = n.data[r.name];
          i?.type === "richtext" && this.richTextResolver.resolve(i.value);
        }
      return this.collection.resolveItems(t);
    }
  },
  z3 = class extends Jr {
    constructor(e, t) {
      super(), (this.childPlan = e), (this.filterExpression = t);
    }
    inspect() {
      return {
        label: `FilterItemsPlan(${this.filterExpression.stringify()}) ${Zr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${qn(this.itemCount)} ${qn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).filter((t) => {
        let n = this.filterExpression.evaluate(t);
        return Di(n);
      });
    }
  },
  N3 = class extends Jr {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.orderExpressions = t),
        (this.collection = n);
    }
    inspect() {
      return {
        label: `SortItemsPlan(${this.orderExpressions
          .map(
            (t) => `${t.expression.stringify()} ${t.direction.toUpperCase()}`
          )
          .join(", ")}) ${Zr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${qn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    async _execute() {
      return (await this.childPlan.execute()).sort((t, n) => {
        for (let { expression: r, direction: i, collation: o } of this
          .orderExpressions) {
          let s = i === "asc";
          if (r instanceof ut && r.name === qp) {
            let c = this.collection.compareItems(t, n);
            return s ? c : -c;
          }
          let a = r.evaluate(t),
            l = r.evaluate(n);
          if (!mn.equal(a, l, o)) {
            if (mn.lessThan(a, l, o) || Ho(a)) return s ? -1 : 1;
            if (mn.greaterThan(a, l, o) || Ho(l)) return s ? 1 : -1;
            throw new Error("Invalid comparison result.");
          }
        }
        return this.collection.compareItems(t, n);
      });
    }
  },
  H3 = class {
    constructor(e, t, n) {
      (this.expression = e), (this.direction = t), (this.collation = n);
    }
  },
  j3 = class extends Jr {
    constructor(e, t, n) {
      super(),
        (this.childPlan = e),
        (this.offsetExpression = t),
        (this.limitExpression = n);
    }
    inspect() {
      var e, t;
      return {
        label: `SliceItemsPlan(LIMIT ${
          ((e = this.limitExpression) == null ? void 0 : e.stringify()) ??
          "Infinity"
        }, OFFSET ${
          ((t = this.offsetExpression) == null ? void 0 : t.stringify()) ?? "0"
        }) ${Zr(
          this.executionTime - this.childPlan.executionTime,
          this.executionTime
        )} ${qn(this.itemCount)}`,
        nodes: [this.childPlan.inspect()],
      };
    }
    getOffset() {
      var e;
      let t = (e = this.offsetExpression) == null ? void 0 : e.evaluate();
      if (!(Ho(t) || t.type !== "number")) return t.value;
    }
    getLimit() {
      var e;
      let t = (e = this.limitExpression) == null ? void 0 : e.evaluate();
      if (!(Ho(t) || t.type !== "number")) return t.value;
    }
    async _execute() {
      let e = await this.childPlan.execute(),
        t = this.getOffset() ?? 0,
        n = this.getLimit() ?? 1 / 0;
      return e.slice(t, t + n);
    }
  },
  hu = class extends Map {
    constructor(e = []) {
      super();
      for (let t of e) this.set(t.pointer, t);
    }
    union(e) {
      let t = new hu();
      for (let [n, r] of this) t.set(n, r);
      for (let [n, r] of e) t.set(n, r);
      return t;
    }
    intersection(e) {
      let t = new hu();
      for (let [n, r] of this) e.has(n) && t.set(n, r);
      return t;
    }
    items() {
      return [...this.values()];
    }
  },
  W3 = class {
    constructor(e) {
      (this.collection = e), R(this, "cache", new Map());
    }
    resolve(e) {
      let t = this.cache.get(e);
      if (t) return t;
      let n = this.collection.resolveRichText(e);
      return this.cache.set(e, n), n;
    }
  };
function U3(e, t) {
  var n;
  if (xm(e)) {
    let r = Cw(e),
      i = (n = r?.[t.name]) == null ? void 0 : n.title;
    if (i) return `"${t.name}" /* ${i} */`;
  }
  return `"${t.name}"`;
}
function X3(e) {
  return typeof e.value == "string" ? `'${e.value}'` : e.value;
}
function Y3(e, t) {
  return `${t.functionName}(${t.arguments.map((n) => rn(e, n)).join(", ")})`;
}
function G3(e, t) {
  let n = "CASE";
  t.value && (n += ` ${rn(e, t.value)}`);
  for (let r of t.conditions)
    n += ` WHEN ${rn(e, r.when)} THEN ${rn(e, r.then)}`;
  return t.else && (n += ` ELSE ${t.else}`), (n += " END"), n;
}
function K3(e, t) {
  let n = rn(e, t.value);
  return `${t.operator.toUpperCase()} ${n}`;
}
function q3(e, t) {
  let n = rn(e, t.left),
    r = rn(e, t.right),
    i = t.operator.toUpperCase();
  return `${n} ${i} ${r}`;
}
function Q3(e, t) {
  return `CAST(${rn(e, t.value)} as ${t.dataType})`;
}
function rn(e, t) {
  switch (t.type) {
    case "Identifier":
      return U3(e, t);
    case "LiteralValue":
      return X3(t);
    case "FunctionCall":
      return Y3(e, t);
    case "Case":
      return G3(e, t);
    case "UnaryOperation":
      return K3(e, t);
    case "BinaryOperation":
      return q3(e, t);
    case "TypeCast":
      return Q3(e, t);
    default:
      We(t);
  }
}
function Z3(e) {
  let t = "";
  return (
    e.split(/\s+/u).forEach((r) => {
      r !== "" &&
        (["SELECT", "FROM", "WHERE", "ORDER", "LIMIT", "OFFSET"].includes(r)
          ? (t += `
${r}`)
          : ["AND", "OR"].includes(r)
          ? (t += `
	${r}`)
          : (t += ` ${r}`));
    }),
    t.trim()
  );
}
function J3(e) {
  let t = "";
  return (
    (t += `SELECT ${e.select
      .map((n) => {
        let r = rn(e.from.data, n);
        return n.alias ? `${r} AS ${n.alias}` : r;
      })
      .join(", ")}`),
    xm(e.from.data)
      ? (t += ` FROM ${e.from.data.displayName}`)
      : (t += ` FROM ${e.from.data.displayName}`),
    e.where && (t += ` WHERE ${rn(e.from.data, e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy
        .map((n) => `${rn(e.from.data, n)} ${n.direction ?? "asc"}`)
        .join(", ")}`),
    e.limit && (t += ` LIMIT ${rn(e.from.data, e.limit)}`),
    e.offset && (t += ` OFFSET ${rn(e.from.data, e.offset)}`),
    Z3(t)
  );
}
var e5 = i3("query-engine");
function t5({ data: e }, t) {
  if (s3(e)) return new l3(e, t);
  if (a3(e)) return e;
  if (xm(e)) {
    for (; t; ) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  We(e, "Unsupported collection type");
}
var qN = class {
  async query(e, t) {
    let n = t5(e.from, t),
      r = new W3(n),
      i = this.createQueryPlan(n, r, e),
      o = await this.executeQueryPlan(n, r, e, i);
    return (
      e5.debug(`Query:
${J3(e)}

${(0, r3.default)(i.inspect())}`),
      o
    );
  }
  createQueryPlan(e, t, n) {
    var r;
    let i = new xk(e);
    if (n.where) {
      let l = It.from(n.where, e.schema);
      i = Zp(e, l);
    }
    let o =
      (r = n.orderBy) == null
        ? void 0
        : r.map(
            (l) =>
              new H3(It.from(l, e.schema), l.direction ?? "asc", { type: 0 })
          );
    i = new N3(i, o ?? [], e);
    let s;
    n.offset && (s = It.from(n.offset, e.schema));
    let a;
    return (
      n.limit && (a = It.from(n.limit, e.schema)),
      (s || a) && (i = new j3(i, s, a)),
      n.select.length > 0 && (i = new $3(i, e, t, n.select)),
      i
    );
  }
  async executeQueryPlan(e, t, n, r) {
    let i = await r.execute();
    return Promise.all(
      i.map(async (o) => {
        let s = {};
        for (let a of n.select) {
          let l = It.from(a, e.schema),
            c = n5(a),
            u = l.evaluate(o);
          s[c] = await r5(t, u);
        }
        return s;
      })
    );
  }
};
function n5(e) {
  if (e.alias) return e.alias;
  if (e.type === "Identifier") return e.name;
  throw new Error("Can't serialize expression");
}
async function r5(e, t) {
  return Ho(t) ? null : t.type === "richtext" ? e.resolve(t.value) : t.value;
}
function Zp(e, t) {
  if (t instanceof Ii) {
    let n = t.operandExpressions.map((r) => Zp(e, r));
    return new B3(n);
  }
  if (t instanceof pa) {
    let n = t.operandExpressions.map((r) => Zp(e, r));
    return new V3(n);
  }
  return i5(e, t) ?? s5(e, t);
}
function i5(e, t) {
  var n, r;
  if (t instanceof Kn) return Vp(e, t);
  if (t instanceof La) return o5(e, t);
  if (
    t instanceof ut &&
    ((n = t.definition) == null ? void 0 : n.type) === "boolean"
  ) {
    let i = Le.fromBoolean(!0),
      o = new jo(t, i);
    return Vp(e, o);
  }
  if (
    t instanceof xa &&
    t.valueExpression instanceof ut &&
    ((r = t.valueExpression.definition) == null ? void 0 : r.type) === "boolean"
  ) {
    let i = Le.fromBoolean(!0),
      o = new Wo(t.valueExpression, i);
    return Vp(e, o);
  }
}
function Vp(e, t) {
  let n = t.leftExpression,
    r = t.rightExpression;
  if (r instanceof Le)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (St(o)) continue;
      let s = It.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof jo && i.supportedLookupTypes.includes("Equals"))
        return new mr(i, [{ type: "Equals", value: r.evaluate() }, ...a]);
      if (t instanceof Wo && i.supportedLookupTypes.includes("NotEquals"))
        return new mr(i, [{ type: "NotEquals", value: r.evaluate() }, ...a]);
      if (t instanceof wa && i.supportedLookupTypes.includes("LessThan"))
        return new mr(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof ka && i.supportedLookupTypes.includes("LessThan"))
        return new mr(i, [
          { type: "LessThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
      if (t instanceof Ca && i.supportedLookupTypes.includes("GreaterThan"))
        return new mr(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !1 },
          ...a,
        ]);
      if (t instanceof Ta && i.supportedLookupTypes.includes("GreaterThan"))
        return new mr(i, [
          { type: "GreaterThan", value: r.evaluate(), inclusive: !0 },
          ...a,
        ]);
    }
}
function o5(e, t) {
  if (t.argumentExpressions.length !== 2) return;
  let n = t.argumentExpressions[0],
    r = t.argumentExpressions[1];
  if (!St(n) && !St(r) && r instanceof Le)
    for (let i of e.indexes) {
      let o = i.fields[0];
      if (St(o)) continue;
      let s = It.from(o, e.schema);
      if (!n.equals(s)) continue;
      let a = new Array(i.fields.length - 1).fill({ type: "All" });
      if (t instanceof Cu && i.supportedLookupTypes.includes("Contains"))
        return new mr(i, [{ type: "Contains", value: r.evaluate() }, ...a]);
      if (t instanceof Tu && i.supportedLookupTypes.includes("StartsWith"))
        return new mr(i, [{ type: "StartsWith", value: r.evaluate() }, ...a]);
      if (t instanceof Eu && i.supportedLookupTypes.includes("EndsWith"))
        return new mr(i, [{ type: "EndsWith", value: r.evaluate() }, ...a]);
    }
}
function s5(e, t) {
  let n = new xk(e);
  return new z3(n, t);
}
var a5 = class {
    constructor() {
      R(this, "entries", new Map());
    }
    set(e, t, n, r) {
      let i = this.entries.get(e);
      switch (t) {
        case "transformTemplate": {
          de(
            typeof n == "string",
            `transformTemplate must be a string, received: ${n}`
          ),
            i
              ? (i.transformTemplate = n)
              : this.entries.set(e, { transformTemplate: n });
          break;
        }
        case "initial":
        case "animate": {
          de(
            typeof n == "object",
            `${t} must be a valid object, received: ${n}`
          ),
            i
              ? ((i[t] = n), i.variantHash || (i.variantHash = r))
              : this.entries.set(e, { [t]: n, variantHash: r });
          break;
        }
        default:
          break;
      }
    }
    clear() {
      this.entries.clear();
    }
    toObject() {
      return Object.fromEntries(this.entries);
    }
  },
  QN = new a5();
var ZN = "__Appear_Animation_Transform__";
var JN = "data-framer-appear-id",
  e8 = "data-framer-appear-animation";
function Bp(e, t) {
  e.forEach((n) => clearTimeout(n)),
    e.clear(),
    t.forEach((n) => n && n("Callback cancelled by variant change")),
    t.clear();
}
function IS() {
  return new Set();
}
function n8(e) {
  let t = Lt(IS),
    n = Lt(IS);
  return (
    VD(() => () => Bp(n, t)),
    b.useEffect(() => () => Bp(n, t), [t, n]),
    b.useEffect(() => {
      Bp(n, t);
    }, [e, t, n]),
    b.useRef({
      activeVariantCallback:
        (r) =>
        (...i) =>
          new Promise((o, s) => {
            t.add(s), r(...i).then(o);
          }).catch(() => {}),
      delay: async (r, i) => {
        await new Promise((o) => n.add(globalThis.setTimeout(() => o(!0), i))),
          r();
      },
    }).current
  );
}
function l5(e, t, n) {
  return b.useCallback(
    (r) => {
      var i, o, s;
      return n
        ? e
          ? t
            ? Object.assign(
                {},
                (i = n[e]) == null ? void 0 : i[r],
                (o = n[t]) == null ? void 0 : o[r]
              )
            : ((s = n[e]) == null ? void 0 : s[r]) || {}
          : {}
        : {};
    },
    [e, t, n]
  );
}
function c5(e) {
  for (let [t, n] of Object.entries(e)) if ($e.matchMedia(n).matches) return t;
}
function u5(e) {
  var t;
  for (let { hash: n, mediaQuery: r } of e) {
    if (!r) continue;
    if ($e.matchMedia(r).matches) return n;
  }
  return (t = e[0]) == null ? void 0 : t.hash;
}
function o8(e, t, n = !0) {
  let r = D(Gw),
    i = A(Oi() ? c5(t) ?? e : e),
    o = A(n && r ? e : i.current),
    s = xu(),
    a = o0(),
    l = ve(
      (c) => {
        (c !== i.current || c !== o.current) &&
          a(() => {
            (i.current = o.current = c),
              $i(() => {
                s();
              });
          });
      },
      [a, s]
    );
  return (
    Iw(() => {
      !n || r !== !0 || l(i.current);
    }, []),
    j(() => {
      let c = [];
      for (let [u, f] of Object.entries(t)) {
        let d = $e.matchMedia(f),
          p = (g) => {
            g.matches && l(u);
          };
        f5(d, p), c.push([d, p]);
      }
      return () => c.forEach(([u, f]) => d5(u, f));
    }, [t, l]),
    [i.current, o.current]
  );
}
function f5(e, t) {
  e.addEventListener ? e.addEventListener("change", t) : e.addListener(t);
}
function d5(e, t) {
  e.removeEventListener
    ? e.removeEventListener("change", t)
    : e.removeListener(t);
}
function s8(e) {
  var t, n;
  let r = u5(e);
  if (r)
    for (let i of document.querySelectorAll(".hidden-" + r))
      (t = i.parentNode) == null || t.removeChild(i);
  for (let i of document.querySelectorAll(".ssr-variant:empty"))
    (n = i.parentNode) == null || n.removeChild(i);
}
function Sk() {
  return ie.current() === ie.canvas;
}
function h8({ blockDocumentScrolling: e = !0 } = {}) {
  let [t, n] = b.useState(!1),
    r = b.useCallback(
      (i) => {
        n(i),
          e !== !1 &&
            (i
              ? document.documentElement.style.setProperty("overflow", "hidden")
              : document.documentElement.style.removeProperty("overflow"));
      },
      [e]
    );
  return (
    b.useEffect(
      () => () => {
        e !== !1 && document.documentElement.style.removeProperty("overflow");
      },
      [e]
    ),
    [t, r]
  );
}
function h5(e, t) {
  return `${e}-${t}`;
}
function p5(e, t) {
  let r = e.indexOf(t) + 1;
  r >= e.length && (r = 0);
  let i = e[r];
  return de(i !== void 0, "nextVariant should be defined"), i;
}
function m5(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function FS(e, t, n) {
  let { hover: r, pressed: i } = e || {};
  if (i && n) return "pressed";
  if (r && t) return "hover";
}
function v5(e, t) {
  let n = t[e];
  return n || `framer-v-${e}`;
}
function LS(e, t, n) {
  return e && n.has(e) ? e : t;
}
var g5 = Symbol("cycle");
function g8({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: o = {},
  variantClassNames: s = {},
}) {
  let a = xu(),
    l = Lt(() => new Set(i)),
    c = b.useRef({
      isHovered: !1,
      isPressed: !1,
      hasPressedVariants: !0,
      baseVariant: LS(e, t, l),
      lastVariant: e,
      gestureVariant: void 0,
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    u = b.useCallback(
      (S) => {
        let {
            isHovered: k,
            isPressed: w,
            enabledGestures: T,
            defaultVariant: E,
          } = c.current,
          F = LS(S, E, l),
          I = FS(T?.[F], k, w),
          $ = I ? h5(F, I) : void 0;
        return [F, $];
      },
      [l]
    ),
    f = b.useCallback(
      ({ isHovered: S, isPressed: k }) => {
        S !== void 0 && (c.current.isHovered = S),
          k !== void 0 && (c.current.isPressed = k);
        let {
            baseVariant: w,
            gestureVariant: T,
            defaultVariant: E,
          } = c.current,
          [F, I] = u(w);
        (F !== w || I !== T) &&
          ((c.current.baseVariant = F || E),
          (c.current.gestureVariant = I),
          a());
      },
      [u, a]
    ),
    d = b.useCallback(
      (S) => {
        let {
            defaultVariant: k,
            cycleOrder: w,
            baseVariant: T,
            gestureVariant: E,
          } = c.current,
          F = S === g5 ? p5(w || [], T || k) : S,
          [I, $] = u(F);
        (I !== T || $ !== E) &&
          ((c.current.baseVariant = I || k),
          (c.current.gestureVariant = $),
          a());
      },
      [u, a]
    );
  if (e !== c.current.lastVariant) {
    let [S, k] = u(e);
    (c.current.lastVariant = S),
      (S !== c.current.baseVariant || k !== c.current.gestureVariant) &&
        ((c.current.baseVariant = S), (c.current.gestureVariant = k));
  }
  let {
      baseVariant: p,
      gestureVariant: g,
      defaultVariant: v,
      enabledGestures: x,
      isHovered: m,
      isPressed: h,
    } = c.current,
    y = l5(c.current.baseVariant, c.current.gestureVariant, o);
  return b.useMemo(() => {
    let S = [];
    p !== v && S.push(p), g && S.push(g);
    let k = x?.[p],
      w = {
        onMouseEnter: () => f({ isHovered: !0 }),
        onMouseLeave: () => f({ isHovered: !1 }),
      };
    return (
      k?.pressed &&
        Object.assign(w, {
          onTapStart: () => f({ isPressed: !0 }),
          onTapCancel: () => f({ isPressed: !1 }),
          onTap: () => f({ isPressed: !1 }),
        }),
      {
        variants: S,
        baseVariant: p,
        gestureVariant: g,
        transition: m5(c.current.transitions, p),
        setVariant: d,
        setGestureState: f,
        addVariantProps: y,
        gestureHandlers: w,
        classNames: au(v5(p, s), FS(k, m, h)),
      }
    );
  }, [p, g, m, h, y, d, v, x, f, s]);
}
var y5 = new Set([
    "visibleVariantId",
    "obscuredVariantId",
    "threshold",
    "animateOnce",
    "variantAppearEffectEnabled",
    "targets",
    "exitTarget",
    "scrollDirection",
  ]),
  MS = { inputRange: [], outputRange: [] };
function b5(e, t, n) {
  let r = [],
    i = hm(e, t, (s) => r.unshift(s, s));
  if (n) {
    let s = i[i.length - 1];
    if (!Mt(s)) return MS;
    i.push(s + 1), r.push(-1);
  }
  let o = i[0];
  return Mt(o)
    ? o <= 1
      ? { inputRange: i, outputRange: r }
      : {
          inputRange: [0, Math.max(o - 1, 0), ...i],
          outputRange: [-1, -1, ...r],
        }
    : MS;
}
var S8 = (e) =>
  b.forwardRef((t, n) => {
    if (ie.current() === ie.canvas) return C(e, { ...t, ref: n });
    let r = b.useRef(null),
      i = n ?? r,
      [o, s] = wA(t, y5),
      {
        visibleVariantId: a,
        obscuredVariantId: l,
        animateOnce: c,
        threshold: u,
        variantAppearEffectEnabled: f,
        targets: d,
        exitTarget: p,
        scrollDirection: g,
      } = o,
      [v, x] = b.useState(l),
      m = b.useRef(!1);
    return (
      Hw(
        i,
        (h) => {
          o.targets ||
            o.scrollDirection ||
            (c && m.current === !0) ||
            (m.current !== h && ((m.current = h), x(h ? a : l)));
        },
        { enabled: f, animateOnce: c, threshold: { y: u } }
      ),
      b.useEffect(() => {
        if (g || !d) return;
        let h = {},
          y;
        return fi(({ y: S }) => {
          var k;
          if (!d[0] || (d[0].ref && !d[0].ref.current)) return;
          let { inputRange: w, outputRange: T } = b5(
            d,
            (u ?? 0) * S.containerLength,
            p
          );
          if (w.length === 0 || w.length !== T.length) return;
          let E = Math.floor(Ji(S.current, w, T));
          if (c && h[E]) return;
          h[E] = !0;
          let F = ((k = d[E]) == null ? void 0 : k.target) ?? void 0;
          F !== y && ((y = F), x(F));
        });
      }, [c, u, d, t.variant]),
      ek(g, x, { enabled: f, repeat: !c }),
      !("variantAppearEffectEnabled" in o) || f === !0
        ? C(e, { ...s, variant: v ?? t.variant, ref: i })
        : C(e, { ...s })
    );
  });
var x5 = b.createContext(void 0),
  S5 = () => b.useContext(x5);
var w5 = {
    Arial: {
      Regular: { selector: "Arial", weight: void 0 },
      Black: { selector: "Arial-Black", weight: void 0 },
      Narrow: { selector: "Arial Narrow", weight: void 0 },
      "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 },
    },
    Avenir: {
      Book: { selector: "Avenir", weight: void 0 },
      Light: { selector: "Avenir-Light", weight: void 0 },
      Medium: { selector: "Avenir-Medium", weight: void 0 },
      Heavy: { selector: "Avenir-Heavy", weight: void 0 },
      Black: { selector: "Avenir-Black", weight: void 0 },
    },
    "Avenir Next": {
      Regular: { selector: "Avenir Next", weight: void 0 },
      "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNext-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNext-Heavy", weight: void 0 },
    },
    "Avenir Next Condensed": {
      Regular: { selector: "Avenir Next Condensed", weight: void 0 },
      "Ultra Light": {
        selector: "AvenirNextCondensed-UltraLight",
        weight: void 0,
      },
      Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 },
    },
    Baskerville: {
      Regular: { selector: "Baskerville", weight: void 0 },
      "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 },
    },
    "Bodoni 72": {
      Book: { selector: "Bodoni 72", weight: void 0 },
      Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
      Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 },
    },
    Courier: { Regular: { selector: "Courier", weight: void 0 } },
    "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
    Futura: {
      Medium: { selector: "Futura", weight: void 0 },
      Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
      "Condensed ExtraBold": {
        selector: "Futura-CondensedExtraBold",
        weight: void 0,
      },
    },
    Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
    "Gill Sans": {
      Regular: { selector: "Gill Sans", weight: void 0 },
      Light: { selector: "GillSans-Light", weight: void 0 },
      SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
      UltraBold: { selector: "GillSans-UltraBold", weight: void 0 },
    },
    Helvetica: {
      Regular: { selector: "Helvetica", weight: void 0 },
      Light: { selector: "Helvetica-Light", weight: void 0 },
      Bold: { selector: "Helvetica-Bold", weight: void 0 },
      Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
      "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
      "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 },
    },
    "Helvetica Neue": {
      Regular: { selector: "Helvetica Neue", weight: void 0 },
      UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
      Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
      Light: { selector: "HelveticaNeue-Light", weight: void 0 },
      Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
      Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
      Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
      "UltraLight Italic": {
        selector: "HelveticaNeue-UltraLightItalic",
        weight: void 0,
      },
      "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
      "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
      "Medium Italic": {
        selector: "HelveticaNeue-MediumItalic",
        weight: void 0,
      },
      "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
      "Condensed Bold": {
        selector: "HelveticaNeue-CondensedBold",
        weight: void 0,
      },
      "Condensed Black": {
        selector: "HelveticaNeue-CondensedBlack",
        weight: void 0,
      },
    },
    "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
    Impact: { Regular: { selector: "Impact", weight: void 0 } },
    "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
    Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
    Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
    Optima: {
      Regular: { selector: "Optima", weight: void 0 },
      ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 },
    },
    Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
    "SF Pro Display": {
      Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
      Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
      "Ultralight Italic": {
        selector: "__SF-UI-Display-Ultralight-Italic__",
        weight: 100,
      },
      "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
      "Light Italic": {
        selector: "__SF-UI-Display-Light-Italic__",
        weight: 300,
      },
      "Medium Italic": {
        selector: "__SF-UI-Display-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Display-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
      "Heavy Italic": {
        selector: "__SF-UI-Display-Heavy-Italic__",
        weight: 800,
      },
      "Black Italic": {
        selector: "__SF-UI-Display-Black-Italic__",
        weight: 900,
      },
    },
    "SF Pro Display Condensed": {
      Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
      Ultralight: {
        selector: "__SF-UI-Display-Condensed-Ultralight__",
        weight: 100,
      },
      Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
      Semibold: {
        selector: "__SF-UI-Display-Condensed-Semibold__",
        weight: 600,
      },
      Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 },
    },
    "SF Pro Text": {
      Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
      Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
      "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
      "Medium Italic": {
        selector: "__SF-UI-Text-Medium-Italic__",
        weight: 500,
      },
      "Semibold Italic": {
        selector: "__SF-UI-Text-Semibold-Italic__",
        weight: 600,
      },
      "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 },
    },
    "SF Pro Text Condensed": {
      Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 },
    },
    Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
    Times: { Regular: { selector: "Times", weight: void 0 } },
    "Times New Roman": {
      Regular: { selector: "Times New Roman", weight: void 0 },
    },
    Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
    Verdana: { Regular: { selector: "Verdana", weight: void 0 } },
  },
  k5 = {
    "__SF-Compact-Display-Regular__":
      "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__":
      "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__":
      "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__":
      "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__":
      "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__":
      "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__":
      "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__":
      "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__":
      "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__":
      ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__":
      ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__":
      ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__":
      ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__":
      ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__":
      ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__":
      ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__":
      ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__":
      ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__":
      ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__":
      ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__":
      "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__":
      "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__":
      "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__":
      "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__":
      "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__":
      "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__":
      "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__":
      ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__":
      ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__":
      ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__":
      ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__":
      ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__":
      ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__":
      ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__":
      ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__":
      ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__":
      ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__":
      ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__":
      ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__":
      ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__":
      ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__":
      ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__":
      ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__":
      ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__":
      ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__":
      ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__":
      ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__":
      ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__":
      ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__":
      ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__":
      ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__":
      ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__":
      ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__":
      ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__":
      ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__":
      ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__":
      ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__":
      ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__":
      ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__":
      ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__":
      "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__":
      "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__":
      "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__":
      "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__":
      "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__":
      "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__":
      "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__":
      "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__":
      "SFCompactRounded-Black|.SFCompactRounded-Black",
  },
  OS = w5;
var C5 = "System Default",
  T5 = class {
    constructor() {
      R(this, "name", "local"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map()),
        R(this, "fontAliasBySelector", new Map()),
        R(this, "fontAliases", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.addFontFamily(t), t;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts() {
      let e = [];
      for (let r of Object.keys(OS)) {
        let i = OS[r];
        if (!i) continue;
        let o = this.createFontFamily(r);
        for (let s of Object.keys(i)) {
          let a = i[s];
          if (!a) continue;
          let { selector: l, weight: c } = a,
            u = { variant: s, selector: l, weight: c, family: o };
          o.fonts.push(u);
        }
        e.push(...o.fonts);
      }
      for (let [r, i] of Object.entries(k5)) this.addFontAlias(r, i);
      let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
      this.addFontFamily(t);
      for (let [r, i] of n) this.addFontAlias(r, i);
      return e.push(...t.fonts), e;
    }
    addFontAlias(e, t) {
      this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e);
    }
    getSystemFontFamily() {
      let e =
          "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
        t = { name: C5, fonts: [], source: this.name },
        n = new Map(),
        r = [400, 100, 200, 300, 500, 600, 700, 800, 900],
        i = ["normal", "italic"];
      for (let o of i)
        for (let s of r) {
          let a = E5(s, o),
            l = `__SystemDefault-${s}-${o}__`,
            c = { variant: a, selector: l, style: o, weight: s, family: t };
          t.fonts.push(c), n.set(l, e);
        }
      return { fontFamily: t, aliases: n };
    }
    getFontAliasBySelector(e) {
      return this.fontAliasBySelector.get(e) || null;
    }
    getFontSelectorByAlias(e) {
      return this.fontAliases.get(e) || null;
    }
    isFontFamilyAlias(e) {
      return !!(e && /^__.*__$/u.exec(e));
    }
  },
  DS = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };
function E5(e, t) {
  let n = t === "normal" ? "Regular" : "Italic";
  return e === 400 ? n : t !== "normal" ? `${DS[e]} ${n}` : `${DS[e]}`;
}
var R5 = Vn(em(), 1),
  Vo = "CUSTOM;";
function P5(e, t) {
  if (!t) return e.substring(0, e.lastIndexOf("."));
  let n =
      t.font.preferredFamily === ""
        ? t.font.fontFamily
        : t.font.preferredFamily,
    r =
      t.font.preferredSubFamily === ""
        ? t.font.fontSubFamily
        : t.font.preferredSubFamily;
  return `${n} ${r}`;
}
var _5 = class {
  constructor() {
    R(this, "name", "custom"),
      R(this, "fontFamilies", []),
      R(this, "byFamilyName", new Map()),
      R(this, "assetsByFamily", new Map());
  }
  importFonts(e) {
    var t;
    (this.fontFamilies.length = 0),
      this.byFamilyName.clear(),
      this.assetsByFamily.clear();
    let n = [];
    for (let r of e) {
      if (!this.isValidCustomFontAsset(r)) continue;
      let i = P5(r.name, r.properties),
        o = this.createFontFamily(i),
        s = {
          family: o,
          selector: `${Vo}${i}`,
          variant: this.inferVariantName(i),
          postscriptName:
            (t = r.properties) == null ? void 0 : t.font.postscriptName,
          file: r.url,
        };
      o.fonts.push(s),
        (o.owner = r.ownerType === "team" ? "team" : "project"),
        this.assetsByFamily.set(i, r),
        n.push(...o.fonts);
    }
    return n;
  }
  isValidCustomFontAsset(e) {
    var t;
    return !e.mimeType.startsWith("font/") ||
      ((t = e.properties) == null ? void 0 : t.kind) !== "font" ||
      !e.properties.font
      ? !1
      : "fontFamily" in e.properties.font;
  }
  inferVariantName(e) {
    let t = [
        "thin",
        "ultra light",
        "extra light",
        "light",
        "normal",
        "medium",
        "semi bold",
        "bold",
        "extra bold",
        "black",
      ],
      n = [...t.map((s) => `${s} italic`), ...t],
      r = e.toLowerCase(),
      i = [...r.split(" "), ...r.split("-"), ...r.split("_")],
      o = n.find((s) => i.includes(s) || i.includes(s.replace(/\s+/g, "")));
    return o ? o.replace(/^\w|\s\w/g, (s) => s.toUpperCase()) : "Regular";
  }
  createFontFamily(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: this.name, name: e, fonts: [] };
    return this.addFontFamily(n), n;
  }
  addFontFamily(e) {
    this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
  }
  parseSelector(e) {
    if (!e.startsWith(Vo)) return null;
    let t = e.split(Vo);
    return t[1] === void 0 ? null : { source: "custom", name: t[1] };
  }
  getFontBySelector(e, t = !0) {
    let n = this.parseSelector(e);
    if (!n || (!t && !this.byFamilyName.get(n.name))) return;
    let r = this.getFontFamilyByName(n.name).fonts;
    return (
      r.find((o) => {
        var s;
        return (s = o.file) == null ? void 0 : s.endsWith(".woff2");
      }) || r[0]
    );
  }
  getFontFamilyByName(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let n = { source: "custom", name: e, fonts: [] };
    return (
      n.fonts.push({
        selector: `${Vo}${e}`,
        variant: this.inferVariantName(e),
        family: n,
      }),
      n
    );
  }
};
function wk(e, t, n) {
  if (t.length === 0) return {};
  let r = n(e);
  if (!r) return {};
  let { weight: i, style: o } = r,
    s = new Map(),
    a = new Map();
  t.forEach((f) => {
    let d = xe(f) ? f : f.name.toLocaleLowerCase(),
      p = n(d);
    p &&
      (s.set(`${p.weight}-${p.style}`, d),
      !(p.weight <= i) && (a.has(p.style) || a.set(p.style, d)));
  });
  let l = a.get(o),
    c = a.get("italic") ?? a.get("oblique");
  r.weight <= 300
    ? ((l = s.get(`400-${o}`) ?? l),
      (c = s.get("400-italic") ?? s.get("400-oblique") ?? c))
    : r.weight <= 500
    ? ((l = s.get(`700-${o}`) ?? l),
      (c = s.get("700-italic") ?? s.get("700-oblique") ?? c))
    : ((l = s.get(`900-${o}`) ?? l),
      (c = s.get("900-italic") ?? s.get("900-oblique") ?? c));
  let u = s.get(`${i}-italic`) ?? s.get(`${i}-oblique`);
  return { variantBold: l, variantItalic: u, variantBoldItalic: c };
}
var I5 = ["display", "sans", "serif", "slab", "handwritten", "script"];
function F5(e) {
  return e
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(L5);
}
function L5(e) {
  return I5.includes(e);
}
var eu = "FS;",
  kk = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
  },
  Ck = Object.keys(kk),
  M5 = (() => new RegExp(`^(?:${[...Ck, "italic"].join("|")})`, "u"))(),
  Kr = class {
    constructor() {
      R(this, "name", "fontshare"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      let t = e.split(" "),
        n = Ck.find((s) => t.includes(s)),
        r = e.includes("italic") ? "italic" : "normal";
      return {
        weight: (n && kk[n]) || 400,
        style: r === "italic" ? r : "normal",
      };
    }
    parseSelector(e) {
      if (!e.startsWith(eu)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(eu, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${eu}${e}-${t}`;
    }
    addFontFamily(e) {
      this.fontFamilies.push(e), this.byFamilyName.set(e.name, e);
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      for (let n of e) {
        let r = n.font_styles.filter((i) => {
          let o = i.name.toLowerCase();
          return !(!M5.exec(o) || o.endsWith("wide"));
        });
        for (let i of r) {
          let { name: o } = n,
            s = i.name.toLowerCase(),
            a = this.getFontFamilyByName(o);
          a ||
            ((a = { name: o, fonts: [], source: this.name }),
            this.addFontFamily(a));
          let l = Kr.createSelector(o, s),
            c = Kr.parseVariant(s) || { weight: void 0, style: void 0 },
            { weight: u, style: f } = c,
            {
              variantBold: d,
              variantBoldItalic: p,
              variantItalic: g,
            } = wk(s, r, Kr.parseVariant),
            v = {
              family: a,
              variant: s,
              selector: l,
              selectorBold: d ? Kr.createSelector(o, d) : void 0,
              selectorBoldItalic: p ? Kr.createSelector(o, p) : void 0,
              selectorItalic: g ? Kr.createSelector(o, g) : void 0,
              weight: u,
              style: f,
              file: i.file,
              category: O5(n.category),
            };
          a.fonts.push(v), t.push(v);
        }
      }
      return t;
    }
  };
function O5(e) {
  let t = {
      serif: "serif",
      sans: "sans-serif",
      slab: "slab",
      display: "display",
      handwritten: "handwriting",
      script: "handwriting",
    },
    n = F5(e)[0];
  return n && t[n];
}
var D5 = "Inter",
  A5 = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  },
  AS = class {
    constructor() {
      R(this, "name", "framer"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    static getDraftFontPropertiesBySelector(e) {
      if (!e.startsWith(D5)) return null;
      let t = e.split("-"),
        [n, r = ""] = t;
      if (!n) return null;
      let i = r.includes("Italic") ? "italic" : "normal",
        o = r.replace("Italic", ""),
        s = (o && A5[o]) || 400;
      return {
        family: n,
        style: i,
        weight: s,
        source: "framer",
        variant: void 0,
        category: "sans-serif",
      };
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          let { familyName: r, ...i } = n,
            o = this.getFontFamilyByName(r);
          o || (o = this.addFontFamily(r));
          let s = { ...i, family: o };
          o.fonts.push(s), t.push(s);
        }),
        t
      );
    }
  },
  tu = "GF;",
  qr = class {
    constructor() {
      R(this, "name", "google"),
        R(this, "fontFamilies", []),
        R(this, "byFamilyName", new Map());
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      if (e === "regular") return { style: "normal", weight: 400 };
      let t = /(\d*)(normal|italic)?/.exec(e);
      if (!t) return null;
      let n = parseInt(t[1] || "400"),
        r = t[2] === "italic" ? "italic" : "normal";
      return { weight: n, style: r };
    }
    parseSelector(e) {
      if (!e.startsWith(tu)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [n, r] = t;
      return !n || !r
        ? null
        : { name: n.replace(tu, ""), variant: r, source: this.name };
    }
    static createSelector(e, t) {
      return `${tu}${e}-${t}`;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t;
    }
    importFonts(e) {
      (this.fontFamilies.length = 0), this.byFamilyName.clear();
      let t = [];
      return (
        e.forEach((n) => {
          n.variants.forEach((r) => {
            var i;
            let o = n.family,
              s = this.getFontFamilyByName(o);
            s || (s = this.addFontFamily(o));
            let a = qr.parseVariant(r) ?? {},
              { weight: l, style: c } = a,
              u = qr.createSelector(o, r),
              {
                variantBold: f,
                variantItalic: d,
                variantBoldItalic: p,
              } = wk(r, n.variants, qr.parseVariant),
              g = {
                family: s,
                variant: r,
                selector: u,
                selectorBold: f ? qr.createSelector(o, f) : void 0,
                selectorBoldItalic: p ? qr.createSelector(o, p) : void 0,
                selectorItalic: d ? qr.createSelector(o, d) : void 0,
                weight: l,
                style: c,
                category: V5(n.category),
                file:
                  (i = n.files[r]) == null
                    ? void 0
                    : i.replace("http://", "https://"),
              };
            s.fonts.push(g), t.push(g);
          });
        }),
        t
      );
    }
  };
function V5(e) {
  let t = {
    serif: "serif",
    "sans-serif": "sans-serif",
    display: "display",
    handwriting: "handwriting",
    monospace: "monospace",
  };
  if (e) return t[e];
}
var B5 = Vn(oF(), 1),
  VS = 5e3,
  $5 = 3,
  Tk = class extends Error {
    constructor(e) {
      super(e), (this.name = "FontLoadingError");
    }
  },
  $p = new Map(),
  zp = new Map(),
  z5 = (e, t) => Ek(e, t);
async function Ek(e, t, n = 0) {
  let { family: r, url: i, stretch: o, unicodeRange: s } = e,
    a = e.weight || 500,
    l = e.style || "normal",
    c = `${r}-${l}-${a}-${i}`;
  if (!$p.has(c) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: xe(a) ? a : a?.toString(),
        style: l,
        stretch: o,
        unicodeRange: s,
      }),
      f = u
        .load()
        .then(() => (t.fonts.add(u), Rk(r, l, a)))
        .catch((d) => {
          if (d.name !== "NetworkError") throw d;
          if (n < $5) return Ek(e, t, n + 1);
          throw new Tk(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify(
              {
                family: r,
                style: l,
                weight: a,
                url: i,
                stretch: o,
                unicodeRange: s,
              }
            )}`
          );
        });
    $p.set(c, f);
  }
  await $p.get(c);
}
async function Rk(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!zp.has(r)) {
    let o = new B5.default(e, { style: t, weight: n }).load(null, VS);
    zp.set(r, o);
  }
  try {
    await zp.get(r);
  } catch {
    throw new Tk(
      `Failed to check if font is ready (${VS}ms timeout exceeded): ${JSON.stringify(
        { family: e, style: t, weight: n }
      )}`
    );
  }
}
var N5 = class {
    constructor() {
      R(this, "enabled", !1),
        R(this, "bySelector", new Map()),
        R(this, "getGoogleFontsListPromise"),
        R(this, "getFontshareFontsListPromise"),
        R(this, "loadedSelectors", new Set()),
        R(this, "googleFamilyNames", new Set()),
        R(this, "local"),
        R(this, "google"),
        R(this, "fontshare"),
        R(this, "framer"),
        R(this, "custom"),
        (this.local = new T5()),
        (this.google = new qr()),
        (this.fontshare = new Kr()),
        (this.framer = new AS()),
        (this.custom = new _5()),
        (this.bySelector = new Map()),
        this.importLocalFonts();
    }
    addFont(e) {
      this.bySelector.set(e.selector, e);
    }
    getAvailableFonts() {
      return Array.from(this.bySelector.values());
    }
    importLocalFonts() {
      for (let e of this.local.importFonts()) this.addFont(e), this.loadFont(e);
    }
    async importGoogleFonts() {
      if (!this.getGoogleFontsListPromise) {
        this.getGoogleFontsListPromise = nt.fetchGoogleFontsList();
        let e = await this.getGoogleFontsListPromise;
        for (let t of this.google.importFonts(e))
          this.googleFamilyNames.add(t.family.name.toLowerCase()),
            this.addFont(t);
      }
      return this.getGoogleFontsListPromise;
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = nt.fetchFontshareFontsList();
        let e = await this.getFontshareFontsListPromise;
        for (let t of this.fontshare.importFonts(e))
          this.googleFamilyNames.has(t.family.name.toLowerCase()) ||
            this.addFont(t);
      }
      return this.getFontshareFontsListPromise;
    }
    importFramerFonts(e) {
      this.framer.importFonts(e).forEach((t) => {
        this.addFont(t);
      });
    }
    importCustomFonts(e) {
      this.bySelector.forEach((t, n) => {
        n.startsWith(Vo) && this.bySelector.delete(n);
      });
      for (let t of this.custom.importFonts(e)) this.addFont(t);
    }
    getFontFamily(e) {
      return this[e.source].getFontFamilyByName(e.name);
    }
    getFontBySelector(e, t = !0) {
      if (e)
        return e.startsWith(Vo)
          ? this.custom.getFontBySelector(e, t)
          : this.bySelector.get(e);
    }
    getDraftPropertiesBySelector(e) {
      let t = this.getFontBySelector(e);
      if (t)
        return {
          style: t.style,
          weight: t.weight,
          variant: t.variant,
          family: t.family.name,
          source: t.family.source,
          category: t.category,
        };
      let n = this.google.parseSelector(e);
      if (n) {
        let o = qr.parseVariant(n.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: n.variant,
            family: n.name,
            source: "google",
            category: void 0,
          };
      }
      let r = this.fontshare.parseSelector(e);
      if (r) {
        let o = Kr.parseVariant(r.variant);
        if (o)
          return {
            style: o.style,
            weight: o.weight,
            variant: r.variant,
            family: r.name,
            source: "fontshare",
            category: void 0,
          };
      }
      let i = AS.getDraftFontPropertiesBySelector(e);
      return i || null;
    }
    isSelectorLoaded(e) {
      return this.loadedSelectors.has(e);
    }
    async loadFont(e) {
      if (this.isSelectorLoaded(e.selector)) return 0;
      let t = e.family.source;
      switch (t) {
        case "local":
          return this.loadedSelectors.add(e.selector), 1;
        case "framer":
          return (
            R5.default.env.NODE_ENV !== "test" &&
              (await Rk(e.family.name, e.style, e.weight)),
            this.loadedSelectors.add(e.selector),
            1
          );
        case "google":
        case "fontshare":
        case "custom":
          return e.file
            ? (await z5(
                {
                  family: e.family.name,
                  url: e.file,
                  weight: e.weight,
                  style: e.style,
                },
                document
              ),
              this.loadedSelectors.add(e.selector),
              1)
            : Promise.reject(`Unable to load font: ${e.selector}`);
        default:
          We(t);
      }
    }
    async loadFontsFromSelectors(e) {
      if (!this.enabled) return [];
      let t = e.some((i) => i.startsWith(tu)),
        n = e.some((i) => i.startsWith(eu));
      if (t || n) {
        try {
          await this.importGoogleFonts();
        } catch (i) {
          ma("Failed to load Google fonts:", i);
        }
        try {
          await this.importFontshareFonts();
        } catch (i) {
          ma("Failed to load Fontshare fonts:", i);
        }
      }
      let r = e.map((i) => this.bySelector.get(i)).filter((i) => !!i);
      return Promise.allSettled(r.map((i) => this.loadFont(i)));
    }
    async loadFonts(e) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
          (r) => r.status === "fulfilled" && r.value === 1
        ).length,
      };
    }
    async loadMissingFonts(e, t) {
      let n = e.filter((i) => !nu.isSelectorLoaded(i));
      if (n.length === 0) return;
      await nu.loadWebFontsFromSelectors(n),
        n.every((i) => nu.isSelectorLoaded(i)) && t && t();
    }
    async loadWebFontsFromSelectors(e) {
      return this.loadFontsFromSelectors(e);
    }
    get defaultFont() {
      let e = this.getFontBySelector("Inter");
      return de(e, "Can\u2019t find Inter font"), e;
    }
  },
  nu = new N5();
Promise.allSettled =
  Promise.allSettled ||
  ((e) =>
    Promise.all(
      e.map((t) =>
        t
          .then((n) => ({ status: "fulfilled", value: n }))
          .catch((n) => ({ status: "rejected", reason: n }))
      )
    ));
var Pk = ((e) => (
    (e.Padding = "--framer-input-padding"),
    (e.BorderRadiusTopLeft = "--framer-input-border-radius-top-left"),
    (e.BorderRadiusTopRight = "--framer-input-border-radius-top-right"),
    (e.BorderRadiusBottomRight = "--framer-input-border-radius-bottom-right"),
    (e.BorderRadiusBottomLeft = "--framer-input-border-radius-bottom-left"),
    (e.BorderColor = "--framer-input-border-color"),
    (e.BorderTopWidth = "--framer-input-border-top-width"),
    (e.BorderRightWidth = "--framer-input-border-right-width"),
    (e.BorderBottomWidth = "--framer-input-border-bottom-width"),
    (e.BorderLeftWidth = "--framer-input-border-left-width"),
    (e.BorderStyle = "--framer-input-border-style"),
    (e.Background = "--framer-input-background"),
    (e.FontFamily = "--framer-input-font-family"),
    (e.FontWeight = "--framer-input-font-weight"),
    (e.FontSize = "--framer-input-font-size"),
    (e.FontColor = "--framer-input-font-color"),
    (e.FontLetterSpacing = "--framer-input-font-letter-spacing"),
    (e.FontTextAlignment = "--framer-input-font-text-alignment"),
    (e.FontLineHeight = "--framer-input-font-line-height"),
    (e.PlaceholderColor = "--framer-input-placeholder-color"),
    (e.BoxShadow = "--framer-input-box-shadow"),
    (e.FocusedBorderColor = "--framer-input-focused-border-color"),
    (e.FocusedBorderWidth = "--framer-input-focused-border-width"),
    (e.FocusedBorderStyle = "--framer-input-focused-border-style"),
    (e.FocusedBackground = "--framer-input-focused-background"),
    (e.FocusedBoxShadow = "--framer-input-focused-box-shadow"),
    (e.FocusedTransition = "--framer-input-focused-transition"),
    (e.BooleanCheckedBackground = "--framer-input-boolean-checked-background"),
    (e.BooleanCheckedBorderColor =
      "--framer-input-boolean-checked-border-color"),
    (e.BooleanCheckedBorderWidth =
      "--framer-input-boolean-checked-border-width"),
    (e.BooleanCheckedBorderStyle =
      "--framer-input-boolean-checked-border-style"),
    (e.BooleanCheckedBoxShadow = "--framer-input-boolean-checked-box-shadow"),
    (e.BooleanCheckedTransition = "--framer-input-boolean-checked-transition"),
    (e.InvalidTextColor = "--framer-input-invalid-text-color"),
    (e.IconBackgroundImage = "--framer-input-icon-image"),
    (e.IconMaskImage = "--framer-input-icon-mask-image"),
    (e.IconColor = "--framer-input-icon-color"),
    (e.WrapperHeight = "--framer-input-wrapper-height"),
    e
  ))(Pk || {}),
  be = Pk,
  BS = "framer-form-input",
  H5 = "framer-form-input-wrapper";
function j5(e) {
  return typeof e == "number"
    ? e
    : e.startsWith("--")
    ? bt.variable(e)
    : e === ""
    ? '""'
    : e;
}
function bt(e, t) {
  let n = " ";
  for (let r in t) {
    let i = t[r];
    n += `${r.replace(/([A-Z])/gu, "-$1").toLowerCase()}: ${j5(i)}; `;
  }
  return e + " {" + n + "}";
}
((e) => {
  function t(...n) {
    let r = n[n.length - 1],
      i = r.startsWith("--") ? `var(${r})` : r;
    for (let o = n.length - 2; o >= 0; o--) i = `var(${n[o]}, ${i})`;
    return i;
  }
  e.variable = t;
})(bt || (bt = {}));
var I8 = [
  bt(`.${BS}`, {
    padding: bt.variable(be.Padding),
    background: "transparent",
    fontFamily: bt.variable(be.FontFamily),
    fontWeight: bt.variable(be.FontWeight),
    fontSize: bt.variable(be.FontSize),
    color: bt.variable(be.FontColor),
    border: "none",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: "100%",
    height: bt.variable(be.WrapperHeight, "100%"),
    letterSpacing: bt.variable(be.FontLetterSpacing),
    textAlign: bt.variable(be.FontTextAlignment),
    lineHeight: bt.variable(be.FontLineHeight),
  }),
  bt(`.${BS}:focus-visible`, { outline: "none" }),
];
var F8 = `var(${be.BorderTopWidth}) var(${be.BorderRightWidth}) var(${be.BorderBottomWidth}) var(${be.BorderLeftWidth})`,
  L8 = [
    `.${H5}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${be.BorderRadiusTopLeft});
        border-top-right-radius: var(${be.BorderRadiusTopRight});
        border-bottom-right-radius: var(${be.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${be.BorderRadiusBottomLeft});
        border-color: var(${be.BorderColor});
        border-top-width: var(${be.BorderTopWidth});
        border-right-width: var(${be.BorderRightWidth});
        border-bottom-width: var(${be.BorderBottomWidth});
        border-left-width: var(${be.BorderLeftWidth});
        border-style: var(${be.BorderStyle});
        transition: var(${be.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius;
    }`,
  ];
var Np = 16,
  M8 = {
    content: "",
    display: "block",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: `${Np}px`,
    boxSizing: "content-box",
    padding: bt.variable(be.Padding),
    border: "none",
    pointerEvents: "none",
    backgroundRepeat: "no-repeat",
    backgroundSize: `${Np}px`,
    maskRepeat: "no-repeat",
    maskSize: `${Np}px`,
    backgroundColor: bt.variable(be.IconColor),
  };
var H8 = b.forwardRef(function (t, n) {
  let { background: r, children: i, alt: o, ...s } = t,
    a = { ...s.style };
  r && delete a.background;
  let l = yu(t.as);
  return se(l, {
    ...s,
    style: a,
    ref: n,
    children: [r && C(Pw, { image: r, alt: o }), i],
  });
});
function W5(e, t) {
  return e.length === t.length && e.every((n, r) => n === t[r]);
}
var U5 = /[^\p{Letter}\p{Number}()]+/gu,
  X5 = /^-+|-+$/gu;
function Y5(e) {
  return e.toLowerCase().replace(U5, "-").replace(X5, "");
}
var G5 = /[&<>'"]/g,
  K5 = (e) =>
    e.replace(
      G5,
      (t) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        }[t] || t)
    ),
  q5 =
    /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi;
function Q5(e, t, n, r) {
  return e.replace(q5, (i, o, s, a, l, c, u) => {
    var f, d;
    if (s.toLowerCase() !== "a") return i;
    let p = l || c,
      g = gm(p.replace(/&amp;/g, "&"));
    if (!g || !g.target) return i;
    let v = t(g.target);
    if (!B1(v) || !B1(n)) return i;
    let x = v.path,
      m = n.path;
    if (!x || !m) return i;
    let h = ` data-framer-page-link-target="${g.target}"`,
      y = mu(v, g.element ?? void 0);
    y && (h += ` data-framer-page-link-element="${g.element}"`);
    let S = fu(p);
    if (!S || xe(S)) return i;
    dk(n, S, r) && (h += " data-framer-page-link-current");
    let k = x,
      w = Object.assign(
        {},
        r,
        (f = g.collectionItem) == null ? void 0 : f.pathVariables
      );
    if (
      (Object.keys(w).length > 0 && (k = k.replace(uk, (T, E) => "" + w[E])),
      (d = g.collectionItem) != null && d.pathVariables)
    ) {
      let T = new URLSearchParams(g.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${T}"`;
    }
    return (k = KS(m, k)), o + a + `"${K5(k + (y ? `#${y}` : ""))}"` + h + u;
  });
}
var Z5 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  },
  _k = /[&<>"']/gu,
  J5 = (() => new RegExp(_k.source))();
function $S(e) {
  return e && J5.test(e) ? e.replace(_k, (t) => Z5[t] ?? "") : e || "";
}
var zS = "{{ text-placeholder }}",
  e4 = "rich-text-wrapper",
  t4 = Ne(function (t, n) {
    let {
        id: r,
        name: i,
        html: o,
        htmlFromDesign: s,
        text: a,
        textFromDesign: l,
        fonts: c = [],
        width: u,
        height: f,
        left: d,
        right: p,
        top: g,
        bottom: v,
        center: x,
        className: m,
        stylesPresetsClassName: h,
        visible: y = !0,
        opacity: S,
        rotation: k = 0,
        verticalAlignment: w = "top",
        isEditable: T = !1,
        willChangeTransform: E,
        environment: F = ie.current,
        withExternalLayout: I = !1,
        positionSticky: $,
        positionStickyTop: B,
        positionStickyRight: q,
        positionStickyBottom: J,
        positionStickyLeft: W,
        __htmlStructure: ne,
        __fromCanvasComponent: Y = !1,
        _forwardedOverrideId: G,
        _forwardedOverrides: N,
        _usesDOMRect: ee,
        children: re,
        ...ae
      } = t,
      te = Pa(),
      oe = Ia(t),
      wt = A(null),
      me = n ?? wt,
      { navigate: Ze, getRoute: Xe } = Uo(),
      vn = gu();
    lL(t.preload ?? []), Su(t, me);
    let fe = D(Xo),
      Qn = Sk(),
      Wt = a,
      Pn = G ?? r;
    if (Pn && N) {
      let ze = N[Pn];
      typeof ze == "string" && (Wt = ze);
    }
    let gn = "";
    if (Wt) {
      let ze = $S(Wt);
      gn = ne ? ne.replace(zS, ze) : `<p>${ze}</p>`;
    } else if (o) gn = o;
    else if (l) {
      let ze = $S(l);
      gn = ne ? ne.replace(zS, ze) : `<p>${ze}</p>`;
    } else s && (gn = s);
    let Ut = fk(),
      Ai = he(
        () => (Qn || !Xe || !vn ? gn : Q5(gn, Xe, vn, Ut)),
        [Qn, gn, Xe, vn, Ut]
      );
    if (
      (j(() => {
        let ze = me.current;
        if (ze === null) return;
        function Zn(Xt) {
          let ei = vm(Xt.target, me.current);
          if (
            Xt.metaKey ||
            !Ze ||
            !ei ||
            ei.getAttribute("target") === "_blank"
          )
            return;
          MV(Ze, ei, Ut) && Xt.preventDefault();
        }
        return (
          ze.addEventListener("click", Zn),
          () => {
            ze.removeEventListener("click", Zn);
          }
        );
      }, [Ze, Ut]),
      Fk(c, Y, me),
      ft(() => {
        _a();
      }, []),
      !y)
    )
      return null;
    let P = T && F() === ie.canvas,
      _ = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: Ik(w),
        opacity: P ? 0 : S,
        flexShrink: 0,
      },
      O = ie.hasRestrictions(),
      H = va(t, te || 0, !1),
      le = ee && (u === "auto" || f === "auto"),
      rt =
        !!t.transformTemplate || !H || !O || Y || le
          ? t.transformTemplate ?? bu(x)
          : void 0;
    if (!I) {
      if (H && O && !le) {
        let ze = Qe.getNumber(k).toFixed(4);
        (_.transform = `translate(${H.x}px, ${H.y}px) rotate(${ze}deg)`),
          (_.width = H.width),
          (_.minWidth = H.width),
          (_.height = H.height);
      } else
        (_.left = d),
          (_.right = p),
          (_.top = g),
          (_.bottom = v),
          (_.width = u),
          (_.height = f),
          (_.rotate = k);
      $
        ? (!Qn || fe) &&
          ((_.position = "sticky"),
          (_.willChange = "transform"),
          (_.zIndex = 1),
          (_.top = B),
          (_.right = q),
          (_.bottom = J),
          (_.left = W))
        : Qn &&
          (t.positionFixed || t.positionAbsolute) &&
          (_.position = "absolute");
    }
    return (
      dm(t, _),
      jw(t, _),
      E && cm(_),
      Object.assign(_, t.style),
      C(Vt.div, {
        id: r,
        ref: me,
        ...ae,
        style: _,
        layoutId: oe,
        "data-framer-name": i,
        "data-framer-component-type": "DeprecatedRichText",
        "data-center": x,
        className: au(m, h, e4),
        transformTemplate: rt,
        dangerouslySetInnerHTML: { __html: Ai },
      })
    );
  });
function Ik(e) {
  switch (e) {
    case "top":
      return "flex-start";
    case "center":
      return "center";
    case "bottom":
      return "flex-end";
  }
}
function Fk(e, t, n) {
  let r = A([]);
  W5(r.current, e) ||
    ((r.current = e),
    nu.loadFonts(e).then(({ newlyLoadedFontCount: i }) => {
      !t ||
        !n.current ||
        ie.current() !== ie.canvas ||
        (i > 0 && OO(n.current));
    }));
}
var NS = Ne(({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) =>
    C(Vt.svg, {
      ref: i,
      ...r,
      viewBox: t,
      children: C(Vt.foreignObject, {
        width: "100%",
        height: "100%",
        className: "framer-fit-text",
        transform: `scale(${e})`,
        style: { overflow: "visible", transformOrigin: "center center" },
        children: n,
      }),
    })
  ),
  n4 = Ne((e, t) => {
    let {
        __fromCanvasComponent: n = !1,
        _forwardedOverrideId: r,
        _forwardedOverrides: i,
        _usesDOMRect: o,
        anchorLinkOffsetY: s,
        as: a,
        bottom: l,
        center: c,
        children: u,
        environment: f = ie.current,
        fonts: d = [],
        height: p,
        isEditable: g = !1,
        left: v,
        name: x,
        opacity: m,
        positionSticky: h,
        positionStickyBottom: y,
        positionStickyLeft: S,
        positionStickyRight: k,
        positionStickyTop: w,
        right: T,
        rotation: E = 0,
        style: F,
        _initialStyle: I,
        stylesPresetsClassNames: $,
        text: B,
        top: q,
        verticalAlignment: J = "top",
        visible: W = !0,
        width: ne,
        willChangeTransform: Y,
        withExternalLayout: G = !1,
        viewBox: N,
        viewBoxScale: ee = 1,
        ...re
      } = e,
      ae = Pa(),
      te = Sk(),
      oe = D(Xo),
      wt = Ia(e),
      me = A(null),
      Ze = t ?? me;
    Su(e, Ze),
      Fk(d, n, Ze),
      ft(() => {
        _a();
      }, []);
    let Xe = he(() => {
      if (u) return Lk(u, $, B, s);
    }, [u, $, B, s]);
    if (!W) return null;
    let vn = g && f() === ie.canvas,
      fe = {
        outline: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: Ik(J),
        opacity: vn ? 0 : m,
        flexShrink: 0,
      },
      Qn = ie.hasRestrictions(),
      Wt = va(e, ae || 0, !1),
      Pn = o && (ne === "auto" || p === "auto"),
      Ut =
        !!e.transformTemplate || !Wt || !Qn || n || Pn
          ? e.transformTemplate ?? bu(c)
          : void 0;
    G ||
      (Wt && Qn && !Pn
        ? ((fe.x = Wt.x),
          (fe.y = Wt.y),
          (fe.rotate = Qe.getNumber(E)),
          (fe.width = Wt.width),
          (fe.minWidth = Wt.width),
          (fe.height = Wt.height))
        : ((fe.left = v),
          (fe.right = T),
          (fe.top = q),
          (fe.bottom = l),
          (fe.width = ne),
          (fe.height = p),
          (fe.rotate = E)),
      h
        ? (!te || oe) &&
          ((fe.position = "sticky"),
          (fe.willChange = "transform"),
          (fe.zIndex = 1),
          (fe.top = w),
          (fe.right = k),
          (fe.bottom = y),
          (fe.left = S))
        : te &&
          (e.positionFixed || e.positionAbsolute) &&
          (fe.position = "absolute")),
      dm(e, fe),
      jw(e, fe),
      Y && cm(fe),
      Object.assign(fe, I, F),
      wt && (re.layout = "preserve-aspect");
    let Ai = yu(e.as);
    return xe(e.viewBox)
      ? e.as !== void 0
        ? C(Ai, {
            ...re,
            ref: Ze,
            style: fe,
            layoutId: wt,
            transformTemplate: Ut,
            "data-framer-name": x,
            "data-framer-component-type": "RichTextContainer",
            children: C(NS, {
              viewBox: N,
              viewBoxScale: ee,
              style: { width: "100%", height: "100%" },
              children: Xe,
            }),
          })
        : C(NS, {
            ...re,
            ref: Ze,
            style: fe,
            layoutId: wt,
            viewBox: N,
            viewBoxScale: ee,
            transformTemplate: Ut,
            "data-framer-name": x,
            "data-framer-component-type": "RichTextContainer",
            children: Xe,
          })
      : C(Ai, {
          ...re,
          ref: Ze,
          style: fe,
          layoutId: wt,
          transformTemplate: Ut,
          "data-framer-name": x,
          "data-framer-component-type": "RichTextContainer",
          children: Xe,
        });
  });
function Lk(e, t, n, r, i = {}) {
  let o = _n.toArray(e.props.children);
  xe(n) && (o = o.slice(0, 1)),
    (o = o.map((l) => (Yt(l) ? Lk(l, t, n, r, i) : xe(n) ? n : l)));
  let { ["data-preset-tag"]: s, ...a } = e.props;
  if (xe(e.type) || sd(e.type)) {
    let l = i0(e.type) || e.type,
      c = s || l,
      u = xe(c) ? t?.[c] : void 0;
    a.className = au("framer-text", a.className, u);
    let f =
        l === "h1" ||
        l === "h2" ||
        l === "h3" ||
        l === "h4" ||
        l === "h5" ||
        l === "h6",
      d = t?.anchor;
    if (f && d) {
      let p = r4(o, i);
      a.id = p;
      let g = au("framer-text", d),
        v = C("a", { href: `#${p}`, className: g, children: o });
      (a.style = { ...(a.style ?? {}), scrollMarginTop: r }), (o = [v]);
    }
  }
  return yn(e, a, ...o);
}
function r4(e, t) {
  let n = e.map(Jp).join(""),
    r = Y5(n),
    i = t[r] ?? 0;
  return i > 0 && (r += `-${i}`), (t[r] = i + 1), r;
}
function Jp(e) {
  return xe(e) || Mt(e)
    ? e.toString()
    : Yt(e)
    ? Jp(e.props.children)
    : Array.isArray(e)
    ? e.map(Jp).join("")
    : "";
}
var Y8 = Ne(({ children: e, html: t, htmlFromDesign: n, ...r }, i) => {
  let o = t || e || n;
  if (xe(o)) {
    !r.stylesPresetsClassName &&
      Pe(r.stylesPresetsClassNames) &&
      (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(
        " "
      ));
    let s = { [xe(t) ? "html" : "htmlFromDesign"]: o };
    return C(t4, { ...r, ...s, ref: i });
  }
  if (!r.stylesPresetsClassNames && xe(r.stylesPresetsClassName)) {
    let [s, a, l, c, u] = r.stylesPresetsClassName.split(" ");
    s === void 0 || a === void 0 || l === void 0 || c === void 0 || u === void 0
      ? console.warn(
          `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
        )
      : (r.stylesPresetsClassNames = { h1: s, h2: a, h3: l, p: c, a: u });
  }
  return C(n4, { ...r, ref: i, children: Yt(o) ? o : void 0 });
});
function i4(e) {
  var t, n;
  let r = (e * Math.PI) / 180,
    i = { x: -Math.sin(r) * 100, y: Math.cos(r) * 100 },
    o = xt(i.x, i.y),
    s = ct(xt(0.5, 0.5), o),
    a = z.points({ x: 0, y: 0, width: 1, height: 1 }),
    l = a
      .map((v) => ({ point: v, distance: xt.distance(o, v) }))
      .sort((v, x) => v.distance - x.distance),
    c = (t = l[0]) == null ? void 0 : t.point,
    u = (n = l[1]) == null ? void 0 : n.point;
  de(c && u, "linearGradientLine: Must have 2 closest points.");
  let [f, d] = a.filter((v) => !xt.isEqual(v, c) && !xt.isEqual(v, u));
  de(f && d, "linearGradientLine: Must have 2 opposing points.");
  let p = ct.intersection(s, ct(c, u)),
    g = ct.intersection(s, ct(f, d));
  return (
    de(p && g, "linearGradientLine: Must have a start and end point."), ct(p, g)
  );
}
function o4(e, t) {
  var n, r;
  let i = i4(e.angle),
    o = Fa(e),
    s = ((n = o[0]) == null ? void 0 : n.position) ?? 0,
    a = ((r = o[o.length - 1]) == null ? void 0 : r.position) ?? 1,
    l = ct.pointAtPercentDistance(i, s),
    c = ct.pointAtPercentDistance(i, a),
    u = Zi([s, a], [0, 1]);
  return {
    id: `id${t}g${ya.hash(e)}`,
    x1: l.x,
    y1: l.y,
    x2: c.x,
    y2: c.y,
    stops: o.map((f) => ({
      color: f.value,
      alpha: um.getAlpha(f.value) * e.alpha,
      position: u(f.position),
    })),
  };
}
function s4(e, t) {
  return {
    id: `id${t}g${ba.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Fa(e).map((n) => ({
      color: n.value,
      alpha: um.getAlpha(n.value) * e.alpha,
      position: n.position,
    })),
  };
}
function Mk(e) {
  if (!xe(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    r = parseFloat(n);
  return Mt(r);
}
function Ok(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return Mt(n) ? n : 50;
}
function HS(e) {
  return Mk(e) ? Ok(e) / 100 : e === "left" ? 0 : e === "right" ? 1 : 0.5;
}
function jS(e) {
  return Mk(e) ? Ok(e) / 100 : e === "top" ? 0 : e === "bottom" ? 1 : 0.5;
}
function a4(e, t, n, r) {
  if (
    ((e = Qe.get(e, "#09F")),
    !Pi.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
  )
    return;
  let i = e.pixelWidth,
    o = e.pixelHeight,
    s,
    { fit: a } = e,
    l = 1,
    c = 1,
    u = 0,
    f = 0;
  if (a === "fill" || a === "fit" || a === "tile" || !a) {
    let p = 1,
      g = 1,
      v = i / o,
      x = t.height * v,
      m = t.width / v,
      h = x / t.width,
      y = m / t.height;
    if (a === "tile") {
      e.backgroundSize ?? (e.backgroundSize = 1),
        (l = Math.round(e.backgroundSize * (i / 2))),
        (c = Math.round(e.backgroundSize * (o / 2)));
      let S = t.x ?? 0,
        k = t.y ?? 0,
        w = 0,
        T = 0;
      r && ((w = S), (T = k)),
        (u = (t.width - l) * HS(e.positionX) + w),
        (f = (t.height - c) * jS(e.positionY) + T),
        (s = `translate(${u + S}, ${f + k})`);
    } else
      (a === "fill" || !a ? y > h : y < h)
        ? ((g = y), (f = (1 - y) * jS(e.positionY)))
        : ((p = h), (u = (1 - h) * HS(e.positionX))),
        (s = `translate(${u}, ${f}) scale(${p}, ${g})`);
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? "",
    transform: s,
    width: l,
    height: c,
    offsetX: u,
    offsetY: f,
  };
}
var l4 = "framer/asset-reference,";
function c4(e) {
  return e.startsWith(`data:${l4}`);
}
function u4(e, t) {
  if (/^\w+:/.test(e) && !c4(e)) return e;
  typeof t != "number"
    ? (t = void 0)
    : t <= 512
    ? (t = 512)
    : t <= 1024
    ? (t = 1024)
    : t <= 2048
    ? (t = 2048)
    : (t = 4096);
  let n = ie.current() === ie.export;
  return nt.assetResolver(e, { pixelSize: t, isExport: n }) ?? "";
}
var f4 = ({
    id: e,
    path: t,
    transform: n,
    repeat: r,
    width: i,
    height: o,
    offsetX: s,
    offsetY: a,
  }) => {
    let l = u4(t);
    return C("pattern", {
      id: e,
      width: r ? i : "100%",
      height: r ? o : "100%",
      patternContentUnits: r ? void 0 : "objectBoundingBox",
      patternUnits: r ? "userSpaceOnUse" : void 0,
      x: r ? s : void 0,
      y: r ? a : void 0,
      children: C(
        "image",
        {
          width: r ? i : 1,
          height: r ? o : 1,
          href: l,
          preserveAspectRatio: "none",
          transform: r ? void 0 : n,
          x: r ? 0 : void 0,
          y: r ? 0 : void 0,
        },
        l
      ),
    });
  },
  WS = Oi(),
  d4 = class {
    constructor(e, t, n, r, i = 0) {
      (this.id = e),
        (this.svg = t),
        (this.innerHTML = n),
        (this.viewBox = r),
        (this.count = i);
    }
  },
  h4 = class {
    constructor() {
      R(this, "entries", new Map());
    }
    debugGetEntries() {
      return this.entries;
    }
    subscribe(e, t, n) {
      if (!e || e === "") return "";
      let r = this.entries.get(e);
      if (!r) {
        n || (n = "svg" + String(Aw(e)) + "_" + String(e.length));
        let i = e,
          o,
          s = p4(e);
        s && (t && m4(s, n), (s.id = n), (o = b4(s)), (i = s.outerHTML)),
          (r = this.createDOMElementFor(i, n, o)),
          this.entries.set(e, r);
      }
      return (r.count += 1), r.innerHTML;
    }
    getViewBox(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      return t?.viewBox;
    }
    unsubscribe(e) {
      if (!e || e === "") return;
      let t = this.entries.get(e);
      t &&
        ((t.count -= 1),
        !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
    }
    maybeRemoveEntry(e) {
      let t = this.entries.get(e);
      t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
    }
    removeDOMElement(e) {
      let t = "container_" + e.id;
      if (WS) {
        let n = document?.querySelector("#" + t);
        n?.remove();
      }
    }
    createDOMElementFor(e, t, n) {
      let r = "container_" + t;
      if (WS) {
        let a = document.querySelector("#svg-templates");
        if (
          (a ||
            ((a = document.createElement("div")),
            (a.id = "svg-templates"),
            (a.style.position = "absolute"),
            (a.style.top = "0"),
            (a.style.left = "0"),
            (a.style.width = "0"),
            (a.style.height = "0"),
            (a.style.overflow = "hidden"),
            document.body.appendChild(a)),
          !document.querySelector("#" + r))
        ) {
          let l = document.createElement("div");
          (l.id = r),
            (l.innerHTML = e),
            l.firstElementChild && (l.firstElementChild.id = t),
            a.appendChild(l);
        }
      }
      let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
        s = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="width: 100%; height: 100%"${
          i ? ` viewBox="${i}"` : ""
        }><use href="#${t}"></use></svg>`;
      return new d4(t, e, s, i);
    }
    clear() {
      this.entries.clear();
    }
    generateTemplates() {
      let e = [],
        t =
          "position: absolute; overflow: hidden; top: 0; left: 0; width: 0; height: 0";
      e.push(`<div id="svg-templates" style="${t}">`);
      for (let n of this.entries.values()) {
        let r = "container_" + n.id;
        e.push(`  <div id="${r}">`), e.push(`    ${n.svg}`), e.push("  </div>");
      }
      return (
        e.push("</div>"),
        e.join(`
`)
      );
    }
  },
  Do = new h4();
function p4(e) {
  if (typeof DOMParser > "u") {
    console.warn("unable to find DOMParser");
    return;
  }
  try {
    let r = new DOMParser()
      .parseFromString(e, "text/html")
      .getElementsByTagName("svg")[0];
    if (!r) throw Error("no svg element found");
    return r;
  } catch {
    return;
  }
}
function m4(e, t) {
  let n = v4(t);
  Dk(e, n);
}
function v4(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, "");
}
function Dk(e, t) {
  g4(e, t),
    Array.from(e.children).forEach((r) => {
      Dk(r, t);
    });
}
function g4(e, t) {
  e.getAttributeNames().forEach((r) => {
    let i = e.getAttribute(r);
    if (!i) return;
    if (
      (r === "id" && e.setAttribute(r, `${t}_${i}`),
      r === "href" || r === "xlink:href")
    ) {
      let [s, a] = i.split("#");
      if (s) return;
      e.setAttribute(r, `#${t}_${a}`);
      return;
    }
    let o = "url(#";
    if (i.includes(o)) {
      let s = i.replace(o, `${o}${t}_`);
      e.setAttribute(r, s);
    }
  });
}
var y4 = (() => ({
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16,
}))();
function US(e) {
  var t;
  if (!e) return;
  let n = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (
    !(n?.[1] === void 0 || n?.[2] === void 0) &&
    !((t = n[2]) != null && t.startsWith("%"))
  )
    return Math.round(parseFloat(n[1]) * (y4[n[2]] || 1));
}
function b4(e) {
  let t = US(e.getAttribute("width")),
    n = US(e.getAttribute("height"));
  if (!(typeof t != "number" || typeof n != "number") && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Q8(e) {
  let t = Pa(),
    n = Ia(e),
    r = b.useRef(null),
    i = S5();
  return (
    Su(e, r),
    C(T4, { ...e, innerRef: r, parentSize: t, layoutId: n, providedWindow: i })
  );
}
var x4 = 5e4;
function S4(e) {
  return e.indexOf("image") >= 0;
}
function w4(e) {
  return e.indexOf("var(--") >= 0;
}
function k4(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function XS(e, t) {
  var n, r;
  let i = e.current;
  if (!i) return;
  let o = t.providedWindow ?? $e,
    s = i.firstElementChild;
  if (!s || !(s instanceof o.SVGSVGElement)) return;
  if (!s.getAttribute("viewBox")) {
    let p = Do.getViewBox(t.svg);
    p && s.setAttribute("viewBox", p);
  }
  let { withExternalLayout: a, parentSize: l } = t;
  if (!a && Ra(t) && l !== 1 && l !== 2) return;
  let { intrinsicWidth: u, intrinsicHeight: f, _constraints: d } = t;
  ((n = s.viewBox.baseVal) == null ? void 0 : n.width) === 0 &&
    ((r = s.viewBox.baseVal) == null ? void 0 : r.height) === 0 &&
    Z(u) &&
    Z(f) &&
    s.setAttribute("viewBox", `0 0 ${u} ${f}`),
    d && d.aspectRatio
      ? s.setAttribute("preserveAspectRatio", "")
      : s.setAttribute("preserveAspectRatio", "none"),
    s.setAttribute("width", "100%"),
    s.setAttribute("height", "100%");
}
function C4() {
  return (
    b.useInsertionEffect(() => {
      _a();
    }, []),
    null
  );
}
var T4 = (() => {
  var e;
  return (
    (e = class extends Zc {
      constructor() {
        super(...arguments),
          R(this, "container", b.createRef()),
          R(this, "svgElement", null),
          R(this, "setSVGElement", (t) => {
            (this.svgElement = t), this.setLayerElement(t);
          }),
          R(this, "previouslyRenderedSVG", ""),
          R(this, "unmountedSVG", "");
      }
      static frame(t) {
        return va(t, t.parentSize || 0);
      }
      get frame() {
        return va(this.props, this.props.parentSize || 0);
      }
      componentDidMount() {
        if (this.unmountedSVG) {
          let { svgContentId: t } = this.props,
            n = t ? "svg" + t : null;
          Do.subscribe(this.unmountedSVG, !t, n),
            (this.previouslyRenderedSVG = this.unmountedSVG);
        }
        this.props.svgContentId || XS(this.container, this.props);
      }
      componentWillUnmount() {
        Do.unsubscribe(this.previouslyRenderedSVG),
          (this.unmountedSVG = this.previouslyRenderedSVG),
          (this.previouslyRenderedSVG = "");
      }
      componentDidUpdate(t) {
        if ((super.componentDidUpdate(t), this.props.svgContentId)) return;
        let { fill: n } = this.props;
        Pi.isImageObject(n) &&
          Pi.isImageObject(t.fill) &&
          n.src !== t.fill.src &&
          Dw(this.svgElement, "fill", null, !1),
          XS(this.container, this.props);
      }
      collectLayout(t, n) {
        if (this.props.withExternalLayout) {
          (n.width = "100%"), (n.height = "100%"), (n.aspectRatio = "inherit");
          return;
        }
        let r = this.frame,
          {
            rotation: i,
            intrinsicWidth: o,
            intrinsicHeight: s,
            width: a,
            height: l,
          } = this.props,
          c = Qe.getNumber(i);
        if (
          ((t.opacity = Z(this.props.opacity) ? this.props.opacity : 1),
          ie.hasRestrictions() && r)
        ) {
          Object.assign(t, {
            transform: `translate(${r.x}px, ${r.y}px) rotate(${c.toFixed(
              4
            )}deg)`,
            width: `${r.width}px`,
            height: `${r.height}px`,
          }),
            Ra(this.props) && (t.position = "absolute");
          let u = r.width / (o || 1),
            f = r.height / (s || 1);
          n.transformOrigin = "top left";
          let { zoom: d, target: p } = iu;
          if (p === ie.export) {
            let g = d > 1 ? d : 1;
            (n.transform = `scale(${u * g}, ${f * g})`), (n.zoom = 1 / g);
          } else n.transform = `scale(${u}, ${f})`;
          o && s && ((n.width = o), (n.height = s));
        } else {
          let { left: u, right: f, top: d, bottom: p } = this.props;
          Object.assign(t, {
            left: u,
            right: f,
            top: d,
            bottom: p,
            width: a,
            height: l,
            rotate: c,
          }),
            Object.assign(n, {
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
            });
        }
      }
      render() {
        let {
          id: t,
          visible: n,
          style: r,
          fill: i,
          svg: o,
          intrinsicHeight: s,
          intrinsicWidth: a,
          title: l,
          description: c,
          layoutId: u,
          className: f,
          variants: d,
          withExternalLayout: p,
          innerRef: g,
          svgContentId: v,
          height: x,
          opacity: m,
          width: h,
          ...y
        } = this.props;
        if (!p && (!n || !t)) return null;
        let S = t ?? u ?? "svg",
          k = this.frame,
          w = k || { width: a || 100, height: s || 100 },
          T = { ...r, imageRendering: "pixelated", flexShrink: 0 },
          E = {};
        this.collectLayout(T, E),
          RD(this.props, T),
          dm(this.props, T),
          Zc.applyWillChange(this.props, T, !1);
        let F = null;
        if (typeof i == "string" || X.isColorObject(i)) {
          let N = X.isColorObject(i) ? i.initialValue || X.toRgbString(i) : i;
          (T.fill = N), (T.color = N);
        } else if (ya.isLinearGradient(i)) {
          let N = i,
            ee = `${encodeURI(t || "")}g${ya.hash(N)}`;
          T.fill = `url(#${ee})`;
          let { stops: re, x1: ae, x2: te, y1: oe, y2: wt } = o4(N, S);
          F = C("svg", {
            ref: this.setSVGElement,
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            style: { position: "absolute" },
            children: C("linearGradient", {
              id: ee,
              x1: ae,
              x2: te,
              y1: oe,
              y2: wt,
              children: re.map((me, Ze) =>
                C(
                  "stop",
                  {
                    offset: me.position,
                    stopColor: me.color,
                    stopOpacity: me.alpha,
                  },
                  Ze
                )
              ),
            }),
          });
        } else if (ba.isRadialGradient(i)) {
          let N = i,
            ee = `${encodeURI(t || "")}g${ba.hash(N)}`;
          T.fill = `url(#${ee})`;
          let re = s4(N, S);
          F = C("svg", {
            ref: this.setSVGElement,
            xmlns: "http://www.w3.org/2000/svg",
            width: "100%",
            height: "100%",
            style: { position: "absolute" },
            children: C("radialGradient", {
              id: ee,
              cy: N.centerAnchorY,
              cx: N.centerAnchorX,
              r: N.widthFactor,
              children: re.stops.map((ae, te) =>
                C(
                  "stop",
                  {
                    offset: ae.position,
                    stopColor: ae.color,
                    stopOpacity: ae.alpha,
                  },
                  te
                )
              ),
            }),
          });
        } else if (Pi.isImageObject(i)) {
          let N = a4(i, w, S);
          N &&
            ((T.fill = `url(#${N.id})`),
            (F = C("svg", {
              ref: this.setSVGElement,
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              width: "100%",
              height: "100%",
              style: { position: "absolute" },
              children: C("defs", { children: C(f4, { ...N }) }),
            })));
        }
        let I = { "data-framer-component-type": "SVG" },
          $ = !k;
        $ && Object.assign(I, _w(this.props.center));
        let B =
            !F &&
            !T.fill &&
            !T.background &&
            !T.backgroundImage &&
            o.length < x4 &&
            !S4(o) &&
            !w4(o),
          q = null;
        if (B)
          (T.backgroundSize = "100% 100%"),
            (T.backgroundImage = `url('data:image/svg+xml;utf8,${encodeURIComponent(
              o
            )}')`),
            Do.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = "");
        else {
          let N = v ? "svg" + v : null,
            ee = Do.subscribe(o, !v, N);
          Do.unsubscribe(this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = o),
            k4(T) && (T.overflow = "hidden"),
            (q = se(Oe, {
              children: [
                F,
                C(
                  "div",
                  {
                    className: "svgContainer",
                    style: E,
                    ref: this.container,
                    dangerouslySetInnerHTML: { __html: ee },
                  },
                  Pi.isImageObject(i) ? i.src : ""
                ),
              ],
            }));
        }
        let J = yu(this.props.as),
          { href: W, target: ne, rel: Y, onClick: G } = this.props;
        return se(J, {
          ...I,
          ...y,
          layoutId: u,
          transformTemplate: $ ? bu(this.props.center) : void 0,
          id: t,
          ref: g,
          style: T,
          className: f,
          variants: d,
          tabIndex: this.props.tabIndex,
          role: l || c ? "img" : void 0,
          "aria-label": l,
          "aria-description": c,
          href: W,
          target: ne,
          rel: Y,
          onClick: G,
          children: [q, C(C4, {})],
        });
      }
    }),
    R(e, "supportsConstraints", !0),
    R(e, "defaultSVGProps", {
      left: void 0,
      right: void 0,
      top: void 0,
      bottom: void 0,
      style: void 0,
      _constraints: { enabled: !0, aspectRatio: null },
      parentSize: 0,
      rotation: 0,
      visible: !0,
      svg: "",
      shadows: [],
    }),
    R(e, "defaultProps", { ...Zc.defaultProps, ...e.defaultSVGProps }),
    e
  );
})();
function aH(e, t, n) {
  let r = Ak(t);
  !n?.supportsExplicitInterCodegen &&
    !r.some((i) => i.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r });
}
function lH(e) {
  return e.fonts ?? [];
}
function cH(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Ak(e);
}
function Ak(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e) R4(r) ? n.push(r) : t.fonts.push(P4(r));
  return t.fonts.length > 0 && n.push(t), n;
}
var E4 = "explicitInter";
function R4(e) {
  return E4 in e;
}
function P4(e) {
  let t;
  return (
    e.url.startsWith("https://fonts.gstatic.com/s/")
      ? (t = "google")
      : e.url.startsWith("./third-party-assets/fontshare/")
      ? (t = "fontshare")
      : (t = "custom"),
    { ...e, source: t }
  );
}
pl.prototype.addChild = function ({ transformer: e = (t) => t }) {
  let t = Ee(e(this.get()));
  return this.onChange((n) => t.set(e(n))), t;
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ export {
  b as a,
  _n as b,
  Ko as c,
  yn as d,
  $a as e,
  $m as f,
  Ne as g,
  $i as h,
  ve as i,
  D as j,
  j as k,
  ti as l,
  ft as m,
  In as n,
  he as o,
  A as p,
  Tt as q,
  Ot as r,
  Oe as s,
  C as t,
  se as u,
  An as v,
  U as w,
  Vt as x,
  id as y,
  Uy as z,
  Bn as A,
  Et as B,
  KP as C,
  qy as D,
  Zy as E,
  eo as F,
  p_ as G,
  v_ as H,
  xp as I,
  ZI as J,
  Y$ as K,
  Q$ as L,
  Uo as M,
  sw as N,
  aw as O,
  mz as P,
  X as Q,
  ie as R,
  kz as S,
  eM as T,
  Pz as U,
  qM as V,
  _z as W,
  Cw as X,
  Az as Y,
  au as Z,
  ZA as _,
  hN as $,
  bN as aa,
  xN as ba,
  EN as ca,
  ok as da,
  sV as ea,
  LN as fa,
  AN as ga,
  _V as ha,
  $N as ia,
  WN as ja,
  GN as ka,
  KN as la,
  qN as ma,
  QN as na,
  ZN as oa,
  JN as pa,
  e8 as qa,
  n8 as ra,
  o8 as sa,
  s8 as ta,
  h8 as ua,
  g8 as va,
  S8 as wa,
  nu as xa,
  H8 as ya,
  Y8 as za,
  Do as Aa,
  Q8 as Ba,
  aH as Ca,
  lH as Da,
  cH as Ea,
};
//# sourceMappingURL=chunk-27H5APBL.mjs.map
