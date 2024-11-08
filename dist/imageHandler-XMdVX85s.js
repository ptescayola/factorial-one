import { jsxs as nt, jsx as X, Fragment as sv } from "react/jsx-runtime";
import * as V from "react";
import k, { createContext as Rr, useContext as tr, useState as jn, useCallback as Ia, useEffect as ea, useRef as La, useImperativeHandle as R1, forwardRef as Rn, useMemo as nu, isValidElement as Kr, Children as Gi, PureComponent as Nr, cloneElement as At, createElement as N1, Component as D1, useLayoutEffect as uv } from "react";
import * as cv from "react-dom";
import { createPortal as qk } from "react-dom";
function L1(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = L1(e[t])) && (n && (n += " "), n += r);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Kk() {
  for (var e, t, r = 0, n = ""; r < arguments.length; ) (e = arguments[r++]) && (t = L1(e)) && (n && (n += " "), n += t);
  return n;
}
const sb = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ub = Kk, ta = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return ub(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: a } = t, s = Object.keys(i).map((f) => {
    const d = r == null ? void 0 : r[f], h = a == null ? void 0 : a[f];
    if (d === null) return null;
    const v = sb(d) || sb(h);
    return i[f][v];
  }), c = r && Object.entries(r).reduce((f, d) => {
    let [h, v] = d;
    return v === void 0 || (f[h] = v), f;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((f, d) => {
    let { class: h, className: v, ...g } = d;
    return Object.entries(g).every((x) => {
      let [y, w] = x;
      return Array.isArray(w) ? w.includes({
        ...a,
        ...c
      }[y]) : {
        ...a,
        ...c
      }[y] === w;
    }) ? [
      ...f,
      h,
      v
    ] : f;
  }, []);
  return ub(e, s, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, lv = Rr({ enabled: !1, enable: () => null, disable: () => null, filter: [] }), rne = ({
  children: e
}) => {
  const [t, r] = jn(!1), [n, i] = jn([]), a = Ia(
    (c) => {
      i(
        c || [...cb].filter((l) => l !== "layout")
      ), r(!0);
    },
    [i, r]
  ), s = Ia(() => r(!1), [r]);
  return ea(() => {
    window.XRay = {
      enable: a,
      disable: s
    };
  }, [a, s]), /* @__PURE__ */ nt(lv.Provider, { value: { enabled: t, enable: a, disable: s, filter: n }, children: [
    e,
    t && typeof document < "u" && qk(
      /* @__PURE__ */ nt("div", { className: "fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border bg-white p-4 opacity-80 shadow-md", children: [
        /* @__PURE__ */ X("div", { className: "text-md z-50 font-semibold", children: "XRay" }),
        /* @__PURE__ */ X("div", { className: "flex flex-col space-y-2", children: cb.map((c) => /* @__PURE__ */ nt("label", { className: "block", children: [
          /* @__PURE__ */ X(
            "input",
            {
              onChange: (l) => l.target.checked ? i([...n, c]) : i(n.filter((f) => f !== c)),
              type: "checkbox",
              checked: n.includes(c),
              className: "mr-2"
            }
          ),
          c
        ] }, c)) })
      ] }),
      document == null ? void 0 : document.body
    )
  ] });
}, Vk = ta(
  "outline-opacity-50 pointer-events-none absolute z-40 outline-dashed",
  {
    variants: {
      type: {
        layout: "outline-red-500",
        info: "outline-blue-500",
        action: "outline-green-600",
        form: "outline-purple-600"
      }
    }
  }
), Yk = ta(
  "absolute z-40 bg-opacity-50 px-2 py-1 text-sm uppercase",
  {
    variants: {
      type: {
        layout: "bg-red-500 text-white",
        info: "bg-blue-500 text-white",
        action: "bg-green-600 text-white",
        form: "bg-purple-600 text-white"
      }
    }
  }
), Xk = (e, t) => {
  const { enabled: r, filter: n } = V.useContext(lv), i = La(null);
  R1(t, () => i.current);
  const a = r && !e.internal, s = typeof document < "u" ? document.body : null;
  return ea(() => {
    if (!a || !i.current || !n.includes(e.type)) return;
    const c = i.current;
    c.dataset.componentName = e.name;
    let l = null, f = null;
    if (s) {
      const d = c.getBoundingClientRect(), { top: h, left: v, width: g, height: x } = d;
      l = document.createElement("div"), l.className = Vk({ type: e.type }), l.style.top = `${h}px`, l.style.left = `${v}px`, l.style.width = `${g}px`, l.style.height = `${x}px`, f = document.createElement("div"), f.className = Yk({ type: e.type }), f.style.top = `${h}px`, f.style.left = `${v}px`, f.innerText = e.name, s.appendChild(f), s.appendChild(l);
    }
    return () => {
      l && (s == null || s.removeChild(l)), f && (s == null || s.removeChild(f));
    };
  }, [a, e.name, e.type, n, s]), {
    ref: i,
    enabled: r
  };
}, nne = () => tr(lv), cb = ["layout", "info", "action", "form"], Zk = (e, t) => {
  const r = Rn((n, i) => {
    const { ref: a } = Xk(e, i);
    return /* @__PURE__ */ X(t, { ref: a, ...n });
  });
  return r.displayName = `${e.name}`, r;
};
function B1(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = B1(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Me() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = B1(e)) && (n && (n += " "), n += t);
  return n;
}
const fv = "-", Jk = (e) => {
  const t = ej(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (s) => {
      const c = s.split(fv);
      return c[0] === "" && c.length !== 1 && c.shift(), F1(c, t) || Qk(s);
    },
    getConflictingClassGroupIds: (s, c) => {
      const l = r[s] || [];
      return c && n[s] ? [...l, ...n[s]] : l;
    }
  };
}, F1 = (e, t) => {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? F1(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(fv);
  return (s = t.validators.find(({
    validator: c
  }) => c(a))) == null ? void 0 : s.classGroupId;
}, lb = /^\[(.+)\]$/, Qk = (e) => {
  if (lb.test(e)) {
    const t = lb.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, ej = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return rj(Object.entries(e.classGroups), r).forEach(([a, s]) => {
    Ah(s, n, a, t);
  }), n;
}, Ah = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : fb(t, i);
      a.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (tj(i)) {
        Ah(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([a, s]) => {
      Ah(s, fb(t, a), r, n);
    });
  });
}, fb = (e, t) => {
  let r = e;
  return t.split(fv).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, tj = (e) => e.isThemeGetter, rj = (e, t) => t ? e.map(([r, n]) => {
  const i = n.map((a) => typeof a == "string" ? t + a : typeof a == "object" ? Object.fromEntries(Object.entries(a).map(([s, c]) => [t + s, c])) : a);
  return [r, i];
}) : e, nj = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (a, s) => {
    r.set(a, s), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let s = r.get(a);
      if (s !== void 0)
        return s;
      if ((s = n.get(a)) !== void 0)
        return i(a, s), s;
    },
    set(a, s) {
      r.has(a) ? r.set(a, s) : i(a, s);
    }
  };
}, W1 = "!", ij = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, i = t[0], a = t.length, s = (c) => {
    const l = [];
    let f = 0, d = 0, h;
    for (let w = 0; w < c.length; w++) {
      let A = c[w];
      if (f === 0) {
        if (A === i && (n || c.slice(w, w + a) === t)) {
          l.push(c.slice(d, w)), d = w + a;
          continue;
        }
        if (A === "/") {
          h = w;
          continue;
        }
      }
      A === "[" ? f++ : A === "]" && f--;
    }
    const v = l.length === 0 ? c : c.substring(d), g = v.startsWith(W1), x = g ? v.substring(1) : v, y = h && h > d ? h - d : void 0;
    return {
      modifiers: l,
      hasImportantModifier: g,
      baseClassName: x,
      maybePostfixModifierPosition: y
    };
  };
  return r ? (c) => r({
    className: c,
    parseClassName: s
  }) : s;
}, aj = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, oj = (e) => ({
  cache: nj(e.cacheSize),
  parseClassName: ij(e),
  ...Jk(e)
}), sj = /\s+/, uj = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i
  } = t, a = [], s = e.trim().split(sj);
  let c = "";
  for (let l = s.length - 1; l >= 0; l -= 1) {
    const f = s[l], {
      modifiers: d,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: g
    } = r(f);
    let x = !!g, y = n(x ? v.substring(0, g) : v);
    if (!y) {
      if (!x) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      if (y = n(v), !y) {
        c = f + (c.length > 0 ? " " + c : c);
        continue;
      }
      x = !1;
    }
    const w = aj(d).join(":"), A = h ? w + W1 : w, O = A + y;
    if (a.includes(O))
      continue;
    a.push(O);
    const S = i(y, x);
    for (let _ = 0; _ < S.length; ++_) {
      const b = S[_];
      a.push(A + b);
    }
    c = f + (c.length > 0 ? " " + c : c);
  }
  return c;
};
function cj() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = z1(t)) && (n && (n += " "), n += r);
  return n;
}
const z1 = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = z1(e[n])) && (r && (r += " "), r += t);
  return r;
};
function lj(e, ...t) {
  let r, n, i, a = s;
  function s(l) {
    const f = t.reduce((d, h) => h(d), e());
    return r = oj(f), n = r.cache.get, i = r.cache.set, a = c, c(l);
  }
  function c(l) {
    const f = n(l);
    if (f)
      return f;
    const d = uj(l, r);
    return i(l, d), d;
  }
  return function() {
    return a(cj.apply(null, arguments));
  };
}
const st = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, U1 = /^\[(?:([a-z-]+):)?(.+)\]$/i, fj = /^\d+\/\d+$/, dj = /* @__PURE__ */ new Set(["px", "full", "screen"]), hj = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, pj = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, vj = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, gj = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, yj = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Sn = (e) => ka(e) || dj.has(e) || fj.test(e), ii = (e) => lo(e, "length", Sj), ka = (e) => !!e && !Number.isNaN(Number(e)), Bd = (e) => lo(e, "number", ka), Yo = (e) => !!e && Number.isInteger(Number(e)), mj = (e) => e.endsWith("%") && ka(e.slice(0, -1)), ke = (e) => U1.test(e), ai = (e) => hj.test(e), bj = /* @__PURE__ */ new Set(["length", "size", "percentage"]), xj = (e) => lo(e, bj, H1), wj = (e) => lo(e, "position", H1), _j = /* @__PURE__ */ new Set(["image", "url"]), Oj = (e) => lo(e, _j, Ej), Aj = (e) => lo(e, "", Pj), Xo = () => !0, lo = (e, t, r) => {
  const n = U1.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, Sj = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  pj.test(e) && !vj.test(e)
), H1 = () => !1, Pj = (e) => gj.test(e), Ej = (e) => yj.test(e), Tj = () => {
  const e = st("colors"), t = st("spacing"), r = st("blur"), n = st("brightness"), i = st("borderColor"), a = st("borderRadius"), s = st("borderSpacing"), c = st("borderWidth"), l = st("contrast"), f = st("grayscale"), d = st("hueRotate"), h = st("invert"), v = st("gap"), g = st("gradientColorStops"), x = st("gradientColorStopPositions"), y = st("inset"), w = st("margin"), A = st("opacity"), O = st("padding"), S = st("saturate"), _ = st("scale"), b = st("sepia"), E = st("skew"), C = st("space"), M = st("translate"), F = () => ["auto", "contain", "none"], D = () => ["auto", "hidden", "clip", "visible", "scroll"], B = () => ["auto", ke, t], N = () => [ke, t], U = () => ["", Sn, ii], z = () => ["auto", ka, ke], J = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], H = () => ["solid", "dashed", "dotted", "double", "none"], Z = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], se = () => ["", "0", ke], G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Y = () => [ka, ke];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Xo],
      spacing: [Sn, ii],
      blur: ["none", "", ai, ke],
      brightness: Y(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ai, ke],
      borderSpacing: N(),
      borderWidth: U(),
      contrast: Y(),
      grayscale: se(),
      hueRotate: Y(),
      invert: se(),
      gap: N(),
      gradientColorStops: [e],
      gradientColorStopPositions: [mj, ii],
      inset: B(),
      margin: B(),
      opacity: Y(),
      padding: N(),
      saturate: Y(),
      scale: Y(),
      sepia: se(),
      skew: Y(),
      space: N(),
      translate: N()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ke]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ai]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": G()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": G()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...J(), ke]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: D()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": D()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": D()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Yo, ke]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: B()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ke]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: se()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: se()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Yo, ke]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Xo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Yo, ke]
        }, ke]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Xo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Yo, ke]
        }, ke]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ke]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ke]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...q()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...q(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...q(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [O]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [O]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [O]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [O]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [O]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [O]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [O]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [O]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [O]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [C]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [C]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ke, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ke, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ke, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ai]
        }, ai]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ke, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ke, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ke, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ke, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ai, ii]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Bd]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Xo]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ke]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", ka, Bd]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Sn, ke]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ke]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ke]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [A]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [A]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...H(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Sn, ii]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Sn, ke]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: N()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ke]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ke]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [A]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...J(), wj]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", xj]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Oj]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [x]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [x]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [x]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [A]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...H(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [c]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [A]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: H()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...H()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Sn, ke]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Sn, ii]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: U()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [A]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Sn, ii]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ai, Aj]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Xo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [A]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Z(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Z()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ai, ke]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [f]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [b]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [f]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [A]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [b]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ke]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Y()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ke]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Y()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ke]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [_]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [_]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [_]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Yo, ke]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [M]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [M]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [E]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [E]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ke]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ke]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": N()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ke]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Sn, ii, Bd]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, $j = /* @__PURE__ */ lj(Tj);
function Ht(...e) {
  return $j(Me(e));
}
function Cj(e) {
  return Ht(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
    e
  );
}
const Mj = ta("inline-block shrink-0", {
  variants: {
    size: {
      lg: "w-6 [&_circle]:stroke-lg [&_path]:stroke-lg",
      md: "w-5 [&_circle]:stroke-md [&_path]:stroke-md",
      sm: "w-4 [&_circle]:stroke-sm [&_path]:stroke-sm"
    }
  },
  defaultVariants: {
    size: "md"
  }
}), G1 = Rn(function({ size: t, icon: r, className: n, ...i }, a) {
  return r ? /* @__PURE__ */ X(
    r,
    {
      ref: a,
      ...i,
      className: Ht("aspect-square", Mj({ size: t }), n)
    }
  ) : null;
}), Ij = (e, t) => /* @__PURE__ */ nt("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ X("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ X("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12.5 11.5L20 4M20 4H15.5M20 4V8.5", vectorEffect: "non-scaling-stroke" })
] }), ine = Rn(Ij), q1 = Rr(void 0), ane = ({ children: e, component: t, currentPath: r }) => /* @__PURE__ */ X(q1.Provider, { value: { component: t, currentPath: r }, children: e }), K1 = () => {
  const e = tr(q1);
  return {
    controller: () => ({}),
    ...e
  };
}, kj = () => {
  const { currentPath: e } = K1();
  return {
    currentPath: e,
    isActive: (r, { exact: n = !1 } = { exact: !1 }) => e === void 0 || r === void 0 ? !1 : n ? e === r : e.startsWith(r)
  };
}, one = Rn(
  function(t, r) {
    const { component: n } = K1(), { isActive: i } = kj(), a = {
      "data-is-active": i(t.href, { exact: t.exactMatch }),
      ...t
    }, s = nu(
      () => Rn(function(l, f) {
        return n ? n(l, f) : /* @__PURE__ */ X("a", { ref: f, ...l });
      }),
      [n]
    );
    return /* @__PURE__ */ X(s, { ref: r, ...a });
  }
);
function jj(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function V1(...e) {
  return (t) => e.forEach((r) => jj(r, t));
}
function ra(...e) {
  return V.useCallback(V1(...e), e);
}
var dv = V.forwardRef((e, t) => {
  const { children: r, ...n } = e, i = V.Children.toArray(r), a = i.find(Rj);
  if (a) {
    const s = a.props.children, c = i.map((l) => l === a ? V.Children.count(s) > 1 ? V.Children.only(null) : V.isValidElement(s) ? s.props.children : null : l);
    return /* @__PURE__ */ X(Sh, { ...n, ref: t, children: V.isValidElement(s) ? V.cloneElement(s, void 0, c) : null });
  }
  return /* @__PURE__ */ X(Sh, { ...n, ref: t, children: r });
});
dv.displayName = "Slot";
var Sh = V.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (V.isValidElement(r)) {
    const i = Dj(r);
    return V.cloneElement(r, {
      ...Nj(n, r.props),
      // @ts-ignore
      ref: t ? V1(t, i) : i
    });
  }
  return V.Children.count(r) > 1 ? V.Children.only(null) : null;
});
Sh.displayName = "SlotClone";
var Y1 = ({ children: e }) => /* @__PURE__ */ X(sv, { children: e });
function Rj(e) {
  return V.isValidElement(e) && e.type === Y1;
}
function Nj(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n], a = t[n];
    /^on[A-Z]/.test(n) ? i && a ? r[n] = (...c) => {
      a(...c), i(...c);
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...a } : n === "className" && (r[n] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Dj(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const Lj = ta(
  Ht(
    "group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md border-none text-base font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
    Cj()
  ),
  {
    variants: {
      variant: {
        default: "bg-f1-background-accent-bold text-f1-foreground-inverse hover:bg-f1-background-accent-bold-hover",
        outline: "border border-solid border-f1-border bg-f1-background text-f1-foreground hover:border-f1-border-hover",
        neutral: "bg-f1-background-secondary text-f1-foreground hover:bg-f1-background-secondary-hover",
        critical: "border border-solid border-f1-border bg-f1-background-secondary text-f1-foreground-critical hover:border-none hover:bg-f1-background-critical-bold hover:text-f1-foreground-inverse",
        ghost: "bg-transparent text-f1-foreground hover:bg-f1-background-secondary-hover",
        promote: "border border-solid border-f1-border-promote bg-f1-background-promote text-f1-foreground hover:bg-f1-background-promote-hover"
      },
      size: {
        sm: "h-6 rounded-sm px-2",
        md: "h-8 rounded px-3",
        lg: "h-10 rounded px-4"
      },
      round: {
        true: "aspect-square px-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      round: !1
    }
  }
), X1 = V.forwardRef(
  ({ className: e, round: t, variant: r, size: n, asChild: i = !1, ...a }, s) => /* @__PURE__ */ X(
    i ? dv : "button",
    {
      className: Ht(Lj({ variant: r, size: n, round: t }), e),
      ref: s,
      ...a
    }
  )
);
X1.displayName = "Button";
const Bj = ta("-ml-0.5 transition-colors", {
  variants: {
    variant: {
      default: "text-f1-icon-inverse/80",
      outline: "text-f1-icon",
      neutral: "text-f1-icon",
      critical: "text-f1-icon-critical-bold group-hover:text-f1-icon-inverse/80",
      ghost: "text-f1-icon",
      promote: "text-f1-icon"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), Fj = ta("transition-colors", {
  variants: {
    variant: {
      default: "text-f1-icon-inverse",
      outline: "text-f1-icon-bold",
      neutral: "text-f1-icon-bold",
      critical: "text-f1-icon-critical-bold group-hover:text-f1-icon-inverse",
      ghost: "text-f1-icon-bold",
      promote: "text-f1-icon-bold"
    }
  },
  defaultVariants: {
    variant: "default"
  }
}), sne = Rn(function({
  label: t,
  hideLabel: r,
  onClick: n,
  disabled: i,
  loading: a,
  icon: s,
  variant: c = "default",
  size: l = "md",
  ...f
}, d) {
  const [h, v] = jn(!1);
  return /* @__PURE__ */ nt(
    X1,
    {
      title: r ? t : void 0,
      onClick: async (x) => {
        const y = n == null ? void 0 : n(x);
        if (y instanceof Promise) {
          v(!0);
          try {
            await y;
          } finally {
            v(!1);
          }
        }
      },
      disabled: i || h || a,
      ref: d,
      variant: c,
      size: l,
      round: r,
      ...f,
      children: [
        s && /* @__PURE__ */ X(
          G1,
          {
            size: l === "sm" ? "sm" : "md",
            icon: s,
            className: r ? Fj({ variant: c }) : Bj({ variant: c })
          }
        ),
        !r && t
      ]
    }
  );
}), Z1 = Rr({
  enabled: !1,
  enable: () => null,
  disable: () => null,
  toggle: () => null
}), une = ({ initiallyEnabled: e = !1, children: t }) => {
  const [r, n] = jn(e), i = Ia(() => {
    n(!0);
  }, []), a = Ia(() => n(!1), []), s = Ia(() => n((c) => !c), []);
  return /* @__PURE__ */ X(Z1.Provider, { value: { enable: i, disable: a, toggle: s, enabled: r }, children: t });
}, Wj = () => {
  const e = tr(Z1);
  if (!e)
    throw "usePrivacyMode requires wrapping the component in a PrivacyModeProvider";
  return e;
};
var pr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Je(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zj = Array.isArray, rr = zj, Uj = typeof pr == "object" && pr && pr.Object === Object && pr, J1 = Uj, Hj = J1, Gj = typeof self == "object" && self && self.Object === Object && self, qj = Hj || Gj || Function("return this")(), dn = qj, Kj = dn, Vj = Kj.Symbol, iu = Vj, db = iu, Q1 = Object.prototype, Yj = Q1.hasOwnProperty, Xj = Q1.toString, Zo = db ? db.toStringTag : void 0;
function Zj(e) {
  var t = Yj.call(e, Zo), r = e[Zo];
  try {
    e[Zo] = void 0;
    var n = !0;
  } catch {
  }
  var i = Xj.call(e);
  return n && (t ? e[Zo] = r : delete e[Zo]), i;
}
var Jj = Zj, Qj = Object.prototype, eR = Qj.toString;
function tR(e) {
  return eR.call(e);
}
var rR = tR, hb = iu, nR = Jj, iR = rR, aR = "[object Null]", oR = "[object Undefined]", pb = hb ? hb.toStringTag : void 0;
function sR(e) {
  return e == null ? e === void 0 ? oR : aR : pb && pb in Object(e) ? nR(e) : iR(e);
}
var Wn = sR;
function uR(e) {
  return e != null && typeof e == "object";
}
var zn = uR, cR = Wn, lR = zn, fR = "[object Symbol]";
function dR(e) {
  return typeof e == "symbol" || lR(e) && cR(e) == fR;
}
var fo = dR, hR = rr, pR = fo, vR = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, gR = /^\w*$/;
function yR(e, t) {
  if (hR(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || pR(e) ? !0 : gR.test(e) || !vR.test(e) || t != null && e in Object(t);
}
var hv = yR;
function mR(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var mi = mR;
const ho = /* @__PURE__ */ Je(mi);
var bR = Wn, xR = mi, wR = "[object AsyncFunction]", _R = "[object Function]", OR = "[object GeneratorFunction]", AR = "[object Proxy]";
function SR(e) {
  if (!xR(e))
    return !1;
  var t = bR(e);
  return t == _R || t == OR || t == wR || t == AR;
}
var pv = SR;
const Pe = /* @__PURE__ */ Je(pv);
var PR = dn, ER = PR["__core-js_shared__"], TR = ER, Fd = TR, vb = function() {
  var e = /[^.]+$/.exec(Fd && Fd.keys && Fd.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function $R(e) {
  return !!vb && vb in e;
}
var CR = $R, MR = Function.prototype, IR = MR.toString;
function kR(e) {
  if (e != null) {
    try {
      return IR.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var e_ = kR, jR = pv, RR = CR, NR = mi, DR = e_, LR = /[\\^$.*+?()[\]{}|]/g, BR = /^\[object .+?Constructor\]$/, FR = Function.prototype, WR = Object.prototype, zR = FR.toString, UR = WR.hasOwnProperty, HR = RegExp(
  "^" + zR.call(UR).replace(LR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function GR(e) {
  if (!NR(e) || RR(e))
    return !1;
  var t = jR(e) ? HR : BR;
  return t.test(DR(e));
}
var qR = GR;
function KR(e, t) {
  return e == null ? void 0 : e[t];
}
var VR = KR, YR = qR, XR = VR;
function ZR(e, t) {
  var r = XR(e, t);
  return YR(r) ? r : void 0;
}
var na = ZR, JR = na, QR = JR(Object, "create"), Ml = QR, gb = Ml;
function e2() {
  this.__data__ = gb ? gb(null) : {}, this.size = 0;
}
var t2 = e2;
function r2(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var n2 = r2, i2 = Ml, a2 = "__lodash_hash_undefined__", o2 = Object.prototype, s2 = o2.hasOwnProperty;
function u2(e) {
  var t = this.__data__;
  if (i2) {
    var r = t[e];
    return r === a2 ? void 0 : r;
  }
  return s2.call(t, e) ? t[e] : void 0;
}
var c2 = u2, l2 = Ml, f2 = Object.prototype, d2 = f2.hasOwnProperty;
function h2(e) {
  var t = this.__data__;
  return l2 ? t[e] !== void 0 : d2.call(t, e);
}
var p2 = h2, v2 = Ml, g2 = "__lodash_hash_undefined__";
function y2(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = v2 && t === void 0 ? g2 : t, this;
}
var m2 = y2, b2 = t2, x2 = n2, w2 = c2, _2 = p2, O2 = m2;
function po(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
po.prototype.clear = b2;
po.prototype.delete = x2;
po.prototype.get = w2;
po.prototype.has = _2;
po.prototype.set = O2;
var A2 = po;
function S2() {
  this.__data__ = [], this.size = 0;
}
var P2 = S2;
function E2(e, t) {
  return e === t || e !== e && t !== t;
}
var vv = E2, T2 = vv;
function $2(e, t) {
  for (var r = e.length; r--; )
    if (T2(e[r][0], t))
      return r;
  return -1;
}
var Il = $2, C2 = Il, M2 = Array.prototype, I2 = M2.splice;
function k2(e) {
  var t = this.__data__, r = C2(t, e);
  if (r < 0)
    return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : I2.call(t, r, 1), --this.size, !0;
}
var j2 = k2, R2 = Il;
function N2(e) {
  var t = this.__data__, r = R2(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var D2 = N2, L2 = Il;
function B2(e) {
  return L2(this.__data__, e) > -1;
}
var F2 = B2, W2 = Il;
function z2(e, t) {
  var r = this.__data__, n = W2(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var U2 = z2, H2 = P2, G2 = j2, q2 = D2, K2 = F2, V2 = U2;
function vo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
vo.prototype.clear = H2;
vo.prototype.delete = G2;
vo.prototype.get = q2;
vo.prototype.has = K2;
vo.prototype.set = V2;
var kl = vo, Y2 = na, X2 = dn, Z2 = Y2(X2, "Map"), gv = Z2, yb = A2, J2 = kl, Q2 = gv;
function eN() {
  this.size = 0, this.__data__ = {
    hash: new yb(),
    map: new (Q2 || J2)(),
    string: new yb()
  };
}
var tN = eN;
function rN(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var nN = rN, iN = nN;
function aN(e, t) {
  var r = e.__data__;
  return iN(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var jl = aN, oN = jl;
function sN(e) {
  var t = oN(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var uN = sN, cN = jl;
function lN(e) {
  return cN(this, e).get(e);
}
var fN = lN, dN = jl;
function hN(e) {
  return dN(this, e).has(e);
}
var pN = hN, vN = jl;
function gN(e, t) {
  var r = vN(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var yN = gN, mN = tN, bN = uN, xN = fN, wN = pN, _N = yN;
function go(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
go.prototype.clear = mN;
go.prototype.delete = bN;
go.prototype.get = xN;
go.prototype.has = wN;
go.prototype.set = _N;
var yv = go, t_ = yv, ON = "Expected a function";
function mv(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(ON);
  var r = function() {
    var n = arguments, i = t ? t.apply(this, n) : n[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, n);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (mv.Cache || t_)(), r;
}
mv.Cache = t_;
var r_ = mv;
const AN = /* @__PURE__ */ Je(r_);
var SN = r_, PN = 500;
function EN(e) {
  var t = SN(e, function(n) {
    return r.size === PN && r.clear(), n;
  }), r = t.cache;
  return t;
}
var TN = EN, $N = TN, CN = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, MN = /\\(\\)?/g, IN = $N(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(CN, function(r, n, i, a) {
    t.push(i ? a.replace(MN, "$1") : n || r);
  }), t;
}), kN = IN;
function jN(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
    i[r] = t(e[r], r, e);
  return i;
}
var bv = jN, mb = iu, RN = bv, NN = rr, DN = fo, LN = 1 / 0, bb = mb ? mb.prototype : void 0, xb = bb ? bb.toString : void 0;
function n_(e) {
  if (typeof e == "string")
    return e;
  if (NN(e))
    return RN(e, n_) + "";
  if (DN(e))
    return xb ? xb.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -LN ? "-0" : t;
}
var BN = n_, FN = BN;
function WN(e) {
  return e == null ? "" : FN(e);
}
var i_ = WN, zN = rr, UN = hv, HN = kN, GN = i_;
function qN(e, t) {
  return zN(e) ? e : UN(e, t) ? [e] : HN(GN(e));
}
var a_ = qN, KN = fo, VN = 1 / 0;
function YN(e) {
  if (typeof e == "string" || KN(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -VN ? "-0" : t;
}
var Rl = YN, XN = a_, ZN = Rl;
function JN(e, t) {
  t = XN(t, e);
  for (var r = 0, n = t.length; e != null && r < n; )
    e = e[ZN(t[r++])];
  return r && r == n ? e : void 0;
}
var xv = JN, QN = xv;
function eD(e, t, r) {
  var n = e == null ? void 0 : QN(e, t);
  return n === void 0 ? r : n;
}
var o_ = eD;
const gr = /* @__PURE__ */ Je(o_);
function tD(e) {
  return e == null;
}
var rD = tD;
const Te = /* @__PURE__ */ Je(rD);
var nD = Wn, iD = rr, aD = zn, oD = "[object String]";
function sD(e) {
  return typeof e == "string" || !iD(e) && aD(e) && nD(e) == oD;
}
var uD = sD;
const au = /* @__PURE__ */ Je(uD);
var Ph = { exports: {} }, qe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wb;
function cD() {
  if (wb) return qe;
  wb = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var E = b.$$typeof;
      switch (E) {
        case t:
          switch (b = b.type, b) {
            case l:
            case f:
            case n:
            case a:
            case i:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case d:
                case x:
                case g:
                case s:
                  return b;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function _(b) {
    return S(b) === f;
  }
  return qe.AsyncMode = l, qe.ConcurrentMode = f, qe.ContextConsumer = c, qe.ContextProvider = s, qe.Element = t, qe.ForwardRef = d, qe.Fragment = n, qe.Lazy = x, qe.Memo = g, qe.Portal = r, qe.Profiler = a, qe.StrictMode = i, qe.Suspense = h, qe.isAsyncMode = function(b) {
    return _(b) || S(b) === l;
  }, qe.isConcurrentMode = _, qe.isContextConsumer = function(b) {
    return S(b) === c;
  }, qe.isContextProvider = function(b) {
    return S(b) === s;
  }, qe.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, qe.isForwardRef = function(b) {
    return S(b) === d;
  }, qe.isFragment = function(b) {
    return S(b) === n;
  }, qe.isLazy = function(b) {
    return S(b) === x;
  }, qe.isMemo = function(b) {
    return S(b) === g;
  }, qe.isPortal = function(b) {
    return S(b) === r;
  }, qe.isProfiler = function(b) {
    return S(b) === a;
  }, qe.isStrictMode = function(b) {
    return S(b) === i;
  }, qe.isSuspense = function(b) {
    return S(b) === h;
  }, qe.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === a || b === i || b === h || b === v || typeof b == "object" && b !== null && (b.$$typeof === x || b.$$typeof === g || b.$$typeof === s || b.$$typeof === c || b.$$typeof === d || b.$$typeof === w || b.$$typeof === A || b.$$typeof === O || b.$$typeof === y);
  }, qe.typeOf = S, qe;
}
var Ke = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _b;
function lD() {
  return _b || (_b = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function S(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === f || j === a || j === i || j === h || j === v || typeof j == "object" && j !== null && (j.$$typeof === x || j.$$typeof === g || j.$$typeof === s || j.$$typeof === c || j.$$typeof === d || j.$$typeof === w || j.$$typeof === A || j.$$typeof === O || j.$$typeof === y);
    }
    function _(j) {
      if (typeof j == "object" && j !== null) {
        var Ee = j.$$typeof;
        switch (Ee) {
          case t:
            var be = j.type;
            switch (be) {
              case l:
              case f:
              case n:
              case a:
              case i:
              case h:
                return be;
              default:
                var We = be && be.$$typeof;
                switch (We) {
                  case c:
                  case d:
                  case x:
                  case g:
                  case s:
                    return We;
                  default:
                    return Ee;
                }
            }
          case r:
            return Ee;
        }
      }
    }
    var b = l, E = f, C = c, M = s, F = t, D = d, B = n, N = x, U = g, z = r, J = a, H = i, Z = h, q = !1;
    function se(j) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(j) || _(j) === l;
    }
    function G(j) {
      return _(j) === f;
    }
    function Y(j) {
      return _(j) === c;
    }
    function ae(j) {
      return _(j) === s;
    }
    function ce(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function he(j) {
      return _(j) === d;
    }
    function ge(j) {
      return _(j) === n;
    }
    function xe(j) {
      return _(j) === x;
    }
    function ye(j) {
      return _(j) === g;
    }
    function we(j) {
      return _(j) === r;
    }
    function ne(j) {
      return _(j) === a;
    }
    function ue(j) {
      return _(j) === i;
    }
    function pe(j) {
      return _(j) === h;
    }
    Ke.AsyncMode = b, Ke.ConcurrentMode = E, Ke.ContextConsumer = C, Ke.ContextProvider = M, Ke.Element = F, Ke.ForwardRef = D, Ke.Fragment = B, Ke.Lazy = N, Ke.Memo = U, Ke.Portal = z, Ke.Profiler = J, Ke.StrictMode = H, Ke.Suspense = Z, Ke.isAsyncMode = se, Ke.isConcurrentMode = G, Ke.isContextConsumer = Y, Ke.isContextProvider = ae, Ke.isElement = ce, Ke.isForwardRef = he, Ke.isFragment = ge, Ke.isLazy = xe, Ke.isMemo = ye, Ke.isPortal = we, Ke.isProfiler = ne, Ke.isStrictMode = ue, Ke.isSuspense = pe, Ke.isValidElementType = S, Ke.typeOf = _;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Ph.exports = cD() : Ph.exports = lD();
var Eh = Ph.exports, fD = Wn, dD = zn, hD = "[object Number]";
function pD(e) {
  return typeof e == "number" || dD(e) && fD(e) == hD;
}
var s_ = pD;
const vD = /* @__PURE__ */ Je(s_);
var gD = s_;
function yD(e) {
  return gD(e) && e != +e;
}
var mD = yD;
const yo = /* @__PURE__ */ Je(mD);
var Gt = function(t) {
  return t === 0 ? 0 : t > 0 ? 1 : -1;
}, Fi = function(t) {
  return au(t) && t.indexOf("%") === t.length - 1;
}, oe = function(t) {
  return vD(t) && !yo(t);
}, Et = function(t) {
  return oe(t) || au(t);
}, bD = 0, ia = function(t) {
  var r = ++bD;
  return "".concat(t || "").concat(r);
}, qt = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  if (!oe(t) && !au(t))
    return n;
  var a;
  if (Fi(t)) {
    var s = t.indexOf("%");
    a = r * parseFloat(t.slice(0, s)) / 100;
  } else
    a = +t;
  return yo(a) && (a = n), i && a > r && (a = r), a;
}, ci = function(t) {
  if (!t)
    return null;
  var r = Object.keys(t);
  return r && r.length ? t[r[0]] : null;
}, xD = function(t) {
  if (!Array.isArray(t))
    return !1;
  for (var r = t.length, n = {}, i = 0; i < r; i++)
    if (!n[t[i]])
      n[t[i]] = !0;
    else
      return !0;
  return !1;
}, St = function(t, r) {
  return oe(t) && oe(r) ? function(n) {
    return t + n * (r - t);
  } : function() {
    return r;
  };
};
function Ec(e, t, r) {
  return !e || !e.length ? null : e.find(function(n) {
    return n && (typeof t == "function" ? t(n) : gr(n, t)) === r;
  });
}
function ja(e, t) {
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r]))
      return !1;
  for (var n in t)
    if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n))
      return !1;
  return !0;
}
function Th(e) {
  "@babel/helpers - typeof";
  return Th = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Th(e);
}
var wD = ["viewBox", "children"], _D = [
  "aria-activedescendant",
  "aria-atomic",
  "aria-autocomplete",
  "aria-busy",
  "aria-checked",
  "aria-colcount",
  "aria-colindex",
  "aria-colspan",
  "aria-controls",
  "aria-current",
  "aria-describedby",
  "aria-details",
  "aria-disabled",
  "aria-errormessage",
  "aria-expanded",
  "aria-flowto",
  "aria-haspopup",
  "aria-hidden",
  "aria-invalid",
  "aria-keyshortcuts",
  "aria-label",
  "aria-labelledby",
  "aria-level",
  "aria-live",
  "aria-modal",
  "aria-multiline",
  "aria-multiselectable",
  "aria-orientation",
  "aria-owns",
  "aria-placeholder",
  "aria-posinset",
  "aria-pressed",
  "aria-readonly",
  "aria-relevant",
  "aria-required",
  "aria-roledescription",
  "aria-rowcount",
  "aria-rowindex",
  "aria-rowspan",
  "aria-selected",
  "aria-setsize",
  "aria-sort",
  "aria-valuemax",
  "aria-valuemin",
  "aria-valuenow",
  "aria-valuetext",
  "className",
  "color",
  "height",
  "id",
  "lang",
  "max",
  "media",
  "method",
  "min",
  "name",
  "style",
  /*
   * removed 'type' SVGElementPropKey because we do not currently use any SVG elements
   * that can use it and it conflicts with the recharts prop 'type'
   * https://github.com/recharts/recharts/pull/3327
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/type
   */
  // 'type',
  "target",
  "width",
  "role",
  "tabIndex",
  "accentHeight",
  "accumulate",
  "additive",
  "alignmentBaseline",
  "allowReorder",
  "alphabetic",
  "amplitude",
  "arabicForm",
  "ascent",
  "attributeName",
  "attributeType",
  "autoReverse",
  "azimuth",
  "baseFrequency",
  "baselineShift",
  "baseProfile",
  "bbox",
  "begin",
  "bias",
  "by",
  "calcMode",
  "capHeight",
  "clip",
  "clipPath",
  "clipPathUnits",
  "clipRule",
  "colorInterpolation",
  "colorInterpolationFilters",
  "colorProfile",
  "colorRendering",
  "contentScriptType",
  "contentStyleType",
  "cursor",
  "cx",
  "cy",
  "d",
  "decelerate",
  "descent",
  "diffuseConstant",
  "direction",
  "display",
  "divisor",
  "dominantBaseline",
  "dur",
  "dx",
  "dy",
  "edgeMode",
  "elevation",
  "enableBackground",
  "end",
  "exponent",
  "externalResourcesRequired",
  "fill",
  "fillOpacity",
  "fillRule",
  "filter",
  "filterRes",
  "filterUnits",
  "floodColor",
  "floodOpacity",
  "focusable",
  "fontFamily",
  "fontSize",
  "fontSizeAdjust",
  "fontStretch",
  "fontStyle",
  "fontVariant",
  "fontWeight",
  "format",
  "from",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyphName",
  "glyphOrientationHorizontal",
  "glyphOrientationVertical",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "hanging",
  "horizAdvX",
  "horizOriginX",
  "href",
  "ideographic",
  "imageRendering",
  "in2",
  "in",
  "intercept",
  "k1",
  "k2",
  "k3",
  "k4",
  "k",
  "kernelMatrix",
  "kernelUnitLength",
  "kerning",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "letterSpacing",
  "lightingColor",
  "limitingConeAngle",
  "local",
  "markerEnd",
  "markerHeight",
  "markerMid",
  "markerStart",
  "markerUnits",
  "markerWidth",
  "mask",
  "maskContentUnits",
  "maskUnits",
  "mathematical",
  "mode",
  "numOctaves",
  "offset",
  "opacity",
  "operator",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "overlinePosition",
  "overlineThickness",
  "paintOrder",
  "panose1",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointerEvents",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "r",
  "radius",
  "refX",
  "refY",
  "renderingIntent",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "restart",
  "result",
  "rotate",
  "rx",
  "ry",
  "seed",
  "shapeRendering",
  "slope",
  "spacing",
  "specularConstant",
  "specularExponent",
  "speed",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stemh",
  "stemv",
  "stitchTiles",
  "stopColor",
  "stopOpacity",
  "strikethroughPosition",
  "strikethroughThickness",
  "string",
  "stroke",
  "strokeDasharray",
  "strokeDashoffset",
  "strokeLinecap",
  "strokeLinejoin",
  "strokeMiterlimit",
  "strokeOpacity",
  "strokeWidth",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textAnchor",
  "textDecoration",
  "textLength",
  "textRendering",
  "to",
  "transform",
  "u1",
  "u2",
  "underlinePosition",
  "underlineThickness",
  "unicode",
  "unicodeBidi",
  "unicodeRange",
  "unitsPerEm",
  "vAlphabetic",
  "values",
  "vectorEffect",
  "version",
  "vertAdvY",
  "vertOriginX",
  "vertOriginY",
  "vHanging",
  "vIdeographic",
  "viewTarget",
  "visibility",
  "vMathematical",
  "widths",
  "wordSpacing",
  "writingMode",
  "x1",
  "x2",
  "x",
  "xChannelSelector",
  "xHeight",
  "xlinkActuate",
  "xlinkArcrole",
  "xlinkHref",
  "xlinkRole",
  "xlinkShow",
  "xlinkTitle",
  "xlinkType",
  "xmlBase",
  "xmlLang",
  "xmlns",
  "xmlnsXlink",
  "xmlSpace",
  "y1",
  "y2",
  "y",
  "yChannelSelector",
  "z",
  "zoomAndPan",
  "ref",
  "key",
  "angle"
], Ob = ["points", "pathLength"], Wd = {
  svg: wD,
  polygon: Ob,
  polyline: Ob
}, wv = ["dangerouslySetInnerHTML", "onCopy", "onCopyCapture", "onCut", "onCutCapture", "onPaste", "onPasteCapture", "onCompositionEnd", "onCompositionEndCapture", "onCompositionStart", "onCompositionStartCapture", "onCompositionUpdate", "onCompositionUpdateCapture", "onFocus", "onFocusCapture", "onBlur", "onBlurCapture", "onChange", "onChangeCapture", "onBeforeInput", "onBeforeInputCapture", "onInput", "onInputCapture", "onReset", "onResetCapture", "onSubmit", "onSubmitCapture", "onInvalid", "onInvalidCapture", "onLoad", "onLoadCapture", "onError", "onErrorCapture", "onKeyDown", "onKeyDownCapture", "onKeyPress", "onKeyPressCapture", "onKeyUp", "onKeyUpCapture", "onAbort", "onAbortCapture", "onCanPlay", "onCanPlayCapture", "onCanPlayThrough", "onCanPlayThroughCapture", "onDurationChange", "onDurationChangeCapture", "onEmptied", "onEmptiedCapture", "onEncrypted", "onEncryptedCapture", "onEnded", "onEndedCapture", "onLoadedData", "onLoadedDataCapture", "onLoadedMetadata", "onLoadedMetadataCapture", "onLoadStart", "onLoadStartCapture", "onPause", "onPauseCapture", "onPlay", "onPlayCapture", "onPlaying", "onPlayingCapture", "onProgress", "onProgressCapture", "onRateChange", "onRateChangeCapture", "onSeeked", "onSeekedCapture", "onSeeking", "onSeekingCapture", "onStalled", "onStalledCapture", "onSuspend", "onSuspendCapture", "onTimeUpdate", "onTimeUpdateCapture", "onVolumeChange", "onVolumeChangeCapture", "onWaiting", "onWaitingCapture", "onAuxClick", "onAuxClickCapture", "onClick", "onClickCapture", "onContextMenu", "onContextMenuCapture", "onDoubleClick", "onDoubleClickCapture", "onDrag", "onDragCapture", "onDragEnd", "onDragEndCapture", "onDragEnter", "onDragEnterCapture", "onDragExit", "onDragExitCapture", "onDragLeave", "onDragLeaveCapture", "onDragOver", "onDragOverCapture", "onDragStart", "onDragStartCapture", "onDrop", "onDropCapture", "onMouseDown", "onMouseDownCapture", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseMoveCapture", "onMouseOut", "onMouseOutCapture", "onMouseOver", "onMouseOverCapture", "onMouseUp", "onMouseUpCapture", "onSelect", "onSelectCapture", "onTouchCancel", "onTouchCancelCapture", "onTouchEnd", "onTouchEndCapture", "onTouchMove", "onTouchMoveCapture", "onTouchStart", "onTouchStartCapture", "onPointerDown", "onPointerDownCapture", "onPointerMove", "onPointerMoveCapture", "onPointerUp", "onPointerUpCapture", "onPointerCancel", "onPointerCancelCapture", "onPointerEnter", "onPointerEnterCapture", "onPointerLeave", "onPointerLeaveCapture", "onPointerOver", "onPointerOverCapture", "onPointerOut", "onPointerOutCapture", "onGotPointerCapture", "onGotPointerCaptureCapture", "onLostPointerCapture", "onLostPointerCaptureCapture", "onScroll", "onScrollCapture", "onWheel", "onWheelCapture", "onAnimationStart", "onAnimationStartCapture", "onAnimationEnd", "onAnimationEndCapture", "onAnimationIteration", "onAnimationIterationCapture", "onTransitionEnd", "onTransitionEndCapture"], Tc = function(t, r) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var n = t;
  if (/* @__PURE__ */ Kr(t) && (n = t.props), !ho(n))
    return null;
  var i = {};
  return Object.keys(n).forEach(function(a) {
    wv.includes(a) && (i[a] = r || function(s) {
      return n[a](n, s);
    });
  }), i;
}, OD = function(t, r, n) {
  return function(i) {
    return t(r, n, i), null;
  };
}, Yi = function(t, r, n) {
  if (!ho(t) || Th(t) !== "object")
    return null;
  var i = null;
  return Object.keys(t).forEach(function(a) {
    var s = t[a];
    wv.includes(a) && typeof s == "function" && (i || (i = {}), i[a] = OD(s, r, n));
  }), i;
}, AD = ["children"], SD = ["children"];
function Ab(e, t) {
  if (e == null) return {};
  var r = PD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function PD(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function $h(e) {
  "@babel/helpers - typeof";
  return $h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $h(e);
}
var Sb = {
  click: "onClick",
  mousedown: "onMouseDown",
  mouseup: "onMouseUp",
  mouseover: "onMouseOver",
  mousemove: "onMouseMove",
  mouseout: "onMouseOut",
  mouseenter: "onMouseEnter",
  mouseleave: "onMouseLeave",
  touchcancel: "onTouchCancel",
  touchend: "onTouchEnd",
  touchmove: "onTouchMove",
  touchstart: "onTouchStart"
}, Mn = function(t) {
  return typeof t == "string" ? t : t ? t.displayName || t.name || "Component" : "";
}, Pb = null, zd = null, _v = function e(t) {
  if (t === Pb && Array.isArray(zd))
    return zd;
  var r = [];
  return Gi.forEach(t, function(n) {
    Te(n) || (Eh.isFragment(n) ? r = r.concat(e(n.props.children)) : r.push(n));
  }), zd = r, Pb = t, r;
};
function yr(e, t) {
  var r = [], n = [];
  return Array.isArray(t) ? n = t.map(function(i) {
    return Mn(i);
  }) : n = [Mn(t)], _v(e).forEach(function(i) {
    var a = gr(i, "type.displayName") || gr(i, "type.name");
    n.indexOf(a) !== -1 && r.push(i);
  }), r;
}
function dr(e, t) {
  var r = yr(e, t);
  return r && r[0];
}
var Eb = function(t) {
  if (!t || !t.props)
    return !1;
  var r = t.props, n = r.width, i = r.height;
  return !(!oe(n) || n <= 0 || !oe(i) || i <= 0);
}, ED = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"], TD = function(t) {
  return t && t.type && au(t.type) && ED.indexOf(t.type) >= 0;
}, u_ = function(t) {
  return t && $h(t) === "object" && "cx" in t && "cy" in t && "r" in t;
}, $D = function(t, r, n, i) {
  var a, s = (a = Wd == null ? void 0 : Wd[i]) !== null && a !== void 0 ? a : [];
  return !Pe(t) && (i && s.includes(r) || _D.includes(r)) || n && wv.includes(r);
}, me = function(t, r, n) {
  if (!t || typeof t == "function" || typeof t == "boolean")
    return null;
  var i = t;
  if (/* @__PURE__ */ Kr(t) && (i = t.props), !ho(i))
    return null;
  var a = {};
  return Object.keys(i).forEach(function(s) {
    var c;
    $D((c = i) === null || c === void 0 ? void 0 : c[s], s, r, n) && (a[s] = i[s]);
  }), a;
}, Ch = function e(t, r) {
  if (t === r)
    return !0;
  var n = Gi.count(t);
  if (n !== Gi.count(r))
    return !1;
  if (n === 0)
    return !0;
  if (n === 1)
    return Tb(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
  for (var i = 0; i < n; i++) {
    var a = t[i], s = r[i];
    if (Array.isArray(a) || Array.isArray(s)) {
      if (!e(a, s))
        return !1;
    } else if (!Tb(a, s))
      return !1;
  }
  return !0;
}, Tb = function(t, r) {
  if (Te(t) && Te(r))
    return !0;
  if (!Te(t) && !Te(r)) {
    var n = t.props || {}, i = n.children, a = Ab(n, AD), s = r.props || {}, c = s.children, l = Ab(s, SD);
    return i && c ? ja(a, l) && Ch(i, c) : !i && !c ? ja(a, l) : !1;
  }
  return !1;
}, $b = function(t, r) {
  var n = [], i = {};
  return _v(t).forEach(function(a, s) {
    if (TD(a))
      n.push(a);
    else if (a) {
      var c = Mn(a.type), l = r[c] || {}, f = l.handler, d = l.once;
      if (f && (!d || !i[c])) {
        var h = f(a, c, s);
        n.push(h), i[c] = !0;
      }
    }
  }), n;
}, CD = function(t) {
  var r = t && t.type;
  return r && Sb[r] ? Sb[r] : null;
}, MD = function(t, r) {
  return _v(r).indexOf(t);
}, ID = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
function Mh() {
  return Mh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mh.apply(this, arguments);
}
function kD(e, t) {
  if (e == null) return {};
  var r = jD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function jD(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ih(e) {
  var t = e.children, r = e.width, n = e.height, i = e.viewBox, a = e.className, s = e.style, c = e.title, l = e.desc, f = kD(e, ID), d = i || {
    width: r,
    height: n,
    x: 0,
    y: 0
  }, h = Me("recharts-surface", a);
  return /* @__PURE__ */ k.createElement("svg", Mh({}, me(f, !0, "svg"), {
    className: h,
    width: r,
    height: n,
    style: s,
    viewBox: "".concat(d.x, " ").concat(d.y, " ").concat(d.width, " ").concat(d.height)
  }), /* @__PURE__ */ k.createElement("title", null, c), /* @__PURE__ */ k.createElement("desc", null, l), t);
}
var RD = ["children", "className"];
function kh() {
  return kh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, kh.apply(this, arguments);
}
function ND(e, t) {
  if (e == null) return {};
  var r = DD(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function DD(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var Le = /* @__PURE__ */ k.forwardRef(function(e, t) {
  var r = e.children, n = e.className, i = ND(e, RD), a = Me("recharts-layer", n);
  return /* @__PURE__ */ k.createElement("g", kh({
    className: a
  }, me(i, !0), {
    ref: t
  }), r);
}), LD = process.env.NODE_ENV !== "production", Vr = function(t, r) {
  for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    i[a - 2] = arguments[a];
  if (LD && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var s = 0;
      console.warn(r.replace(/%s/g, function() {
        return i[s++];
      }));
    }
};
function BD(e, t, r) {
  var n = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + t];
  return a;
}
var FD = BD, WD = FD;
function zD(e, t, r) {
  var n = e.length;
  return r = r === void 0 ? n : r, !t && r >= n ? e : WD(e, t, r);
}
var UD = zD, HD = "\\ud800-\\udfff", GD = "\\u0300-\\u036f", qD = "\\ufe20-\\ufe2f", KD = "\\u20d0-\\u20ff", VD = GD + qD + KD, YD = "\\ufe0e\\ufe0f", XD = "\\u200d", ZD = RegExp("[" + XD + HD + VD + YD + "]");
function JD(e) {
  return ZD.test(e);
}
var c_ = JD;
function QD(e) {
  return e.split("");
}
var eL = QD, l_ = "\\ud800-\\udfff", tL = "\\u0300-\\u036f", rL = "\\ufe20-\\ufe2f", nL = "\\u20d0-\\u20ff", iL = tL + rL + nL, aL = "\\ufe0e\\ufe0f", oL = "[" + l_ + "]", jh = "[" + iL + "]", Rh = "\\ud83c[\\udffb-\\udfff]", sL = "(?:" + jh + "|" + Rh + ")", f_ = "[^" + l_ + "]", d_ = "(?:\\ud83c[\\udde6-\\uddff]){2}", h_ = "[\\ud800-\\udbff][\\udc00-\\udfff]", uL = "\\u200d", p_ = sL + "?", v_ = "[" + aL + "]?", cL = "(?:" + uL + "(?:" + [f_, d_, h_].join("|") + ")" + v_ + p_ + ")*", lL = v_ + p_ + cL, fL = "(?:" + [f_ + jh + "?", jh, d_, h_, oL].join("|") + ")", dL = RegExp(Rh + "(?=" + Rh + ")|" + fL + lL, "g");
function hL(e) {
  return e.match(dL) || [];
}
var pL = hL, vL = eL, gL = c_, yL = pL;
function mL(e) {
  return gL(e) ? yL(e) : vL(e);
}
var bL = mL, xL = UD, wL = c_, _L = bL, OL = i_;
function AL(e) {
  return function(t) {
    t = OL(t);
    var r = wL(t) ? _L(t) : void 0, n = r ? r[0] : t.charAt(0), i = r ? xL(r, 1).join("") : t.slice(1);
    return n[e]() + i;
  };
}
var SL = AL, PL = SL, EL = PL("toUpperCase"), TL = EL;
const Nl = /* @__PURE__ */ Je(TL);
function rt(e) {
  return function() {
    return e;
  };
}
const g_ = Math.cos, $c = Math.sin, Qr = Math.sqrt, Cc = Math.PI, Dl = 2 * Cc, Nh = Math.PI, Dh = 2 * Nh, Ni = 1e-6, $L = Dh - Ni;
function y_(e) {
  this._ += e[0];
  for (let t = 1, r = e.length; t < r; ++t)
    this._ += arguments[t] + e[t];
}
function CL(e) {
  let t = Math.floor(e);
  if (!(t >= 0)) throw new Error(`invalid digits: ${e}`);
  if (t > 15) return y_;
  const r = 10 ** t;
  return function(n) {
    this._ += n[0];
    for (let i = 1, a = n.length; i < a; ++i)
      this._ += Math.round(arguments[i] * r) / r + n[i];
  };
}
class ML {
  constructor(t) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = t == null ? y_ : CL(t);
  }
  moveTo(t, r) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(t, r) {
    this._append`L${this._x1 = +t},${this._y1 = +r}`;
  }
  quadraticCurveTo(t, r, n, i) {
    this._append`Q${+t},${+r},${this._x1 = +n},${this._y1 = +i}`;
  }
  bezierCurveTo(t, r, n, i, a, s) {
    this._append`C${+t},${+r},${+n},${+i},${this._x1 = +a},${this._y1 = +s}`;
  }
  arcTo(t, r, n, i, a) {
    if (t = +t, r = +r, n = +n, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let s = this._x1, c = this._y1, l = n - t, f = i - r, d = s - t, h = c - r, v = d * d + h * h;
    if (this._x1 === null)
      this._append`M${this._x1 = t},${this._y1 = r}`;
    else if (v > Ni) if (!(Math.abs(h * l - f * d) > Ni) || !a)
      this._append`L${this._x1 = t},${this._y1 = r}`;
    else {
      let g = n - s, x = i - c, y = l * l + f * f, w = g * g + x * x, A = Math.sqrt(y), O = Math.sqrt(v), S = a * Math.tan((Nh - Math.acos((y + v - w) / (2 * A * O))) / 2), _ = S / O, b = S / A;
      Math.abs(_ - 1) > Ni && this._append`L${t + _ * d},${r + _ * h}`, this._append`A${a},${a},0,0,${+(h * g > d * x)},${this._x1 = t + b * l},${this._y1 = r + b * f}`;
    }
  }
  arc(t, r, n, i, a, s) {
    if (t = +t, r = +r, n = +n, s = !!s, n < 0) throw new Error(`negative radius: ${n}`);
    let c = n * Math.cos(i), l = n * Math.sin(i), f = t + c, d = r + l, h = 1 ^ s, v = s ? i - a : a - i;
    this._x1 === null ? this._append`M${f},${d}` : (Math.abs(this._x1 - f) > Ni || Math.abs(this._y1 - d) > Ni) && this._append`L${f},${d}`, n && (v < 0 && (v = v % Dh + Dh), v > $L ? this._append`A${n},${n},0,1,${h},${t - c},${r - l}A${n},${n},0,1,${h},${this._x1 = f},${this._y1 = d}` : v > Ni && this._append`A${n},${n},0,${+(v >= Nh)},${h},${this._x1 = t + n * Math.cos(a)},${this._y1 = r + n * Math.sin(a)}`);
  }
  rect(t, r, n, i) {
    this._append`M${this._x0 = this._x1 = +t},${this._y0 = this._y1 = +r}h${n = +n}v${+i}h${-n}Z`;
  }
  toString() {
    return this._;
  }
}
function Ov(e) {
  let t = 3;
  return e.digits = function(r) {
    if (!arguments.length) return t;
    if (r == null)
      t = null;
    else {
      const n = Math.floor(r);
      if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`);
      t = n;
    }
    return e;
  }, () => new ML(t);
}
function Av(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function m_(e) {
  this._context = e;
}
m_.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(e, t);
        break;
    }
  }
};
function Ll(e) {
  return new m_(e);
}
function b_(e) {
  return e[0];
}
function x_(e) {
  return e[1];
}
function w_(e, t) {
  var r = rt(!0), n = null, i = Ll, a = null, s = Ov(c);
  e = typeof e == "function" ? e : e === void 0 ? b_ : rt(e), t = typeof t == "function" ? t : t === void 0 ? x_ : rt(t);
  function c(l) {
    var f, d = (l = Av(l)).length, h, v = !1, g;
    for (n == null && (a = i(g = s())), f = 0; f <= d; ++f)
      !(f < d && r(h = l[f], f, l)) === v && ((v = !v) ? a.lineStart() : a.lineEnd()), v && a.point(+e(h, f, l), +t(h, f, l));
    if (g) return a = null, g + "" || null;
  }
  return c.x = function(l) {
    return arguments.length ? (e = typeof l == "function" ? l : rt(+l), c) : e;
  }, c.y = function(l) {
    return arguments.length ? (t = typeof l == "function" ? l : rt(+l), c) : t;
  }, c.defined = function(l) {
    return arguments.length ? (r = typeof l == "function" ? l : rt(!!l), c) : r;
  }, c.curve = function(l) {
    return arguments.length ? (i = l, n != null && (a = i(n)), c) : i;
  }, c.context = function(l) {
    return arguments.length ? (l == null ? n = a = null : a = i(n = l), c) : n;
  }, c;
}
function uc(e, t, r) {
  var n = null, i = rt(!0), a = null, s = Ll, c = null, l = Ov(f);
  e = typeof e == "function" ? e : e === void 0 ? b_ : rt(+e), t = typeof t == "function" ? t : rt(t === void 0 ? 0 : +t), r = typeof r == "function" ? r : r === void 0 ? x_ : rt(+r);
  function f(h) {
    var v, g, x, y = (h = Av(h)).length, w, A = !1, O, S = new Array(y), _ = new Array(y);
    for (a == null && (c = s(O = l())), v = 0; v <= y; ++v) {
      if (!(v < y && i(w = h[v], v, h)) === A)
        if (A = !A)
          g = v, c.areaStart(), c.lineStart();
        else {
          for (c.lineEnd(), c.lineStart(), x = v - 1; x >= g; --x)
            c.point(S[x], _[x]);
          c.lineEnd(), c.areaEnd();
        }
      A && (S[v] = +e(w, v, h), _[v] = +t(w, v, h), c.point(n ? +n(w, v, h) : S[v], r ? +r(w, v, h) : _[v]));
    }
    if (O) return c = null, O + "" || null;
  }
  function d() {
    return w_().defined(i).curve(s).context(a);
  }
  return f.x = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : rt(+h), n = null, f) : e;
  }, f.x0 = function(h) {
    return arguments.length ? (e = typeof h == "function" ? h : rt(+h), f) : e;
  }, f.x1 = function(h) {
    return arguments.length ? (n = h == null ? null : typeof h == "function" ? h : rt(+h), f) : n;
  }, f.y = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : rt(+h), r = null, f) : t;
  }, f.y0 = function(h) {
    return arguments.length ? (t = typeof h == "function" ? h : rt(+h), f) : t;
  }, f.y1 = function(h) {
    return arguments.length ? (r = h == null ? null : typeof h == "function" ? h : rt(+h), f) : r;
  }, f.lineX0 = f.lineY0 = function() {
    return d().x(e).y(t);
  }, f.lineY1 = function() {
    return d().x(e).y(r);
  }, f.lineX1 = function() {
    return d().x(n).y(t);
  }, f.defined = function(h) {
    return arguments.length ? (i = typeof h == "function" ? h : rt(!!h), f) : i;
  }, f.curve = function(h) {
    return arguments.length ? (s = h, a != null && (c = s(a)), f) : s;
  }, f.context = function(h) {
    return arguments.length ? (h == null ? a = c = null : c = s(a = h), f) : a;
  }, f;
}
class __ {
  constructor(t, r) {
    this._context = t, this._x = r;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(t, r) {
    switch (t = +t, r = +r, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + t) / 2, this._y0, this._x0, r, t, r) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + r) / 2, t, this._y0, t, r);
        break;
      }
    }
    this._x0 = t, this._y0 = r;
  }
}
function IL(e) {
  return new __(e, !0);
}
function kL(e) {
  return new __(e, !1);
}
const Sv = {
  draw(e, t) {
    const r = Qr(t / Cc);
    e.moveTo(r, 0), e.arc(0, 0, r, 0, Dl);
  }
}, jL = {
  draw(e, t) {
    const r = Qr(t / 5) / 2;
    e.moveTo(-3 * r, -r), e.lineTo(-r, -r), e.lineTo(-r, -3 * r), e.lineTo(r, -3 * r), e.lineTo(r, -r), e.lineTo(3 * r, -r), e.lineTo(3 * r, r), e.lineTo(r, r), e.lineTo(r, 3 * r), e.lineTo(-r, 3 * r), e.lineTo(-r, r), e.lineTo(-3 * r, r), e.closePath();
  }
}, O_ = Qr(1 / 3), RL = O_ * 2, NL = {
  draw(e, t) {
    const r = Qr(t / RL), n = r * O_;
    e.moveTo(0, -r), e.lineTo(n, 0), e.lineTo(0, r), e.lineTo(-n, 0), e.closePath();
  }
}, DL = {
  draw(e, t) {
    const r = Qr(t), n = -r / 2;
    e.rect(n, n, r, r);
  }
}, LL = 0.8908130915292852, A_ = $c(Cc / 10) / $c(7 * Cc / 10), BL = $c(Dl / 10) * A_, FL = -g_(Dl / 10) * A_, WL = {
  draw(e, t) {
    const r = Qr(t * LL), n = BL * r, i = FL * r;
    e.moveTo(0, -r), e.lineTo(n, i);
    for (let a = 1; a < 5; ++a) {
      const s = Dl * a / 5, c = g_(s), l = $c(s);
      e.lineTo(l * r, -c * r), e.lineTo(c * n - l * i, l * n + c * i);
    }
    e.closePath();
  }
}, Ud = Qr(3), zL = {
  draw(e, t) {
    const r = -Qr(t / (Ud * 3));
    e.moveTo(0, r * 2), e.lineTo(-Ud * r, -r), e.lineTo(Ud * r, -r), e.closePath();
  }
}, Er = -0.5, Tr = Qr(3) / 2, Lh = 1 / Qr(12), UL = (Lh / 2 + 1) * 3, HL = {
  draw(e, t) {
    const r = Qr(t / UL), n = r / 2, i = r * Lh, a = n, s = r * Lh + r, c = -a, l = s;
    e.moveTo(n, i), e.lineTo(a, s), e.lineTo(c, l), e.lineTo(Er * n - Tr * i, Tr * n + Er * i), e.lineTo(Er * a - Tr * s, Tr * a + Er * s), e.lineTo(Er * c - Tr * l, Tr * c + Er * l), e.lineTo(Er * n + Tr * i, Er * i - Tr * n), e.lineTo(Er * a + Tr * s, Er * s - Tr * a), e.lineTo(Er * c + Tr * l, Er * l - Tr * c), e.closePath();
  }
};
function GL(e, t) {
  let r = null, n = Ov(i);
  e = typeof e == "function" ? e : rt(e || Sv), t = typeof t == "function" ? t : rt(t === void 0 ? 64 : +t);
  function i() {
    let a;
    if (r || (r = a = n()), e.apply(this, arguments).draw(r, +t.apply(this, arguments)), a) return r = null, a + "" || null;
  }
  return i.type = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : rt(a), i) : e;
  }, i.size = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : rt(+a), i) : t;
  }, i.context = function(a) {
    return arguments.length ? (r = a ?? null, i) : r;
  }, i;
}
function Mc() {
}
function Ic(e, t, r) {
  e._context.bezierCurveTo(
    (2 * e._x0 + e._x1) / 3,
    (2 * e._y0 + e._y1) / 3,
    (e._x0 + 2 * e._x1) / 3,
    (e._y0 + 2 * e._y1) / 3,
    (e._x0 + 4 * e._x1 + t) / 6,
    (e._y0 + 4 * e._y1 + r) / 6
  );
}
function S_(e) {
  this._context = e;
}
S_.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        Ic(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        Ic(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function qL(e) {
  return new S_(e);
}
function P_(e) {
  this._context = e;
}
P_.prototype = {
  areaStart: Mc,
  areaEnd: Mc,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._x2 = e, this._y2 = t;
        break;
      case 1:
        this._point = 2, this._x3 = e, this._y3 = t;
        break;
      case 2:
        this._point = 3, this._x4 = e, this._y4 = t, this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
        break;
      default:
        Ic(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function KL(e) {
  return new P_(e);
}
function E_(e) {
  this._context = e;
}
E_.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var r = (this._x0 + 4 * this._x1 + e) / 6, n = (this._y0 + 4 * this._y1 + t) / 6;
        this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n);
        break;
      case 3:
        this._point = 4;
      default:
        Ic(this, e, t);
        break;
    }
    this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t;
  }
};
function VL(e) {
  return new E_(e);
}
function T_(e) {
  this._context = e;
}
T_.prototype = {
  areaStart: Mc,
  areaEnd: Mc,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(e, t) {
    e = +e, t = +t, this._point ? this._context.lineTo(e, t) : (this._point = 1, this._context.moveTo(e, t));
  }
};
function YL(e) {
  return new T_(e);
}
function Cb(e) {
  return e < 0 ? -1 : 1;
}
function Mb(e, t, r) {
  var n = e._x1 - e._x0, i = t - e._x1, a = (e._y1 - e._y0) / (n || i < 0 && -0), s = (r - e._y1) / (i || n < 0 && -0), c = (a * i + s * n) / (n + i);
  return (Cb(a) + Cb(s)) * Math.min(Math.abs(a), Math.abs(s), 0.5 * Math.abs(c)) || 0;
}
function Ib(e, t) {
  var r = e._x1 - e._x0;
  return r ? (3 * (e._y1 - e._y0) / r - t) / 2 : t;
}
function Hd(e, t, r) {
  var n = e._x0, i = e._y0, a = e._x1, s = e._y1, c = (a - n) / 3;
  e._context.bezierCurveTo(n + c, i + c * t, a - c, s - c * r, a, s);
}
function kc(e) {
  this._context = e;
}
kc.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Hd(this, this._t0, Ib(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(e, t) {
    var r = NaN;
    if (e = +e, t = +t, !(e === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Hd(this, Ib(this, r = Mb(this, e, t)), r);
          break;
        default:
          Hd(this, this._t0, r = Mb(this, e, t));
          break;
      }
      this._x0 = this._x1, this._x1 = e, this._y0 = this._y1, this._y1 = t, this._t0 = r;
    }
  }
};
function $_(e) {
  this._context = new C_(e);
}
($_.prototype = Object.create(kc.prototype)).point = function(e, t) {
  kc.prototype.point.call(this, t, e);
};
function C_(e) {
  this._context = e;
}
C_.prototype = {
  moveTo: function(e, t) {
    this._context.moveTo(t, e);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(e, t) {
    this._context.lineTo(t, e);
  },
  bezierCurveTo: function(e, t, r, n, i, a) {
    this._context.bezierCurveTo(t, e, n, r, a, i);
  }
};
function XL(e) {
  return new kc(e);
}
function ZL(e) {
  return new $_(e);
}
function M_(e) {
  this._context = e;
}
M_.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var e = this._x, t = this._y, r = e.length;
    if (r)
      if (this._line ? this._context.lineTo(e[0], t[0]) : this._context.moveTo(e[0], t[0]), r === 2)
        this._context.lineTo(e[1], t[1]);
      else
        for (var n = kb(e), i = kb(t), a = 0, s = 1; s < r; ++a, ++s)
          this._context.bezierCurveTo(n[0][a], i[0][a], n[1][a], i[1][a], e[s], t[s]);
    (this._line || this._line !== 0 && r === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(e, t) {
    this._x.push(+e), this._y.push(+t);
  }
};
function kb(e) {
  var t, r = e.length - 1, n, i = new Array(r), a = new Array(r), s = new Array(r);
  for (i[0] = 0, a[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t) i[t] = 1, a[t] = 4, s[t] = 4 * e[t] + 2 * e[t + 1];
  for (i[r - 1] = 2, a[r - 1] = 7, s[r - 1] = 8 * e[r - 1] + e[r], t = 1; t < r; ++t) n = i[t] / a[t - 1], a[t] -= n, s[t] -= n * s[t - 1];
  for (i[r - 1] = s[r - 1] / a[r - 1], t = r - 2; t >= 0; --t) i[t] = (s[t] - i[t + 1]) / a[t];
  for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t) a[t] = 2 * e[t + 1] - i[t + 1];
  return [i, a];
}
function JL(e) {
  return new M_(e);
}
function Bl(e, t) {
  this._context = e, this._t = t;
}
Bl.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(e, t) {
    switch (e = +e, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(e, t);
        else {
          var r = this._x * (1 - this._t) + e * this._t;
          this._context.lineTo(r, this._y), this._context.lineTo(r, t);
        }
        break;
      }
    }
    this._x = e, this._y = t;
  }
};
function QL(e) {
  return new Bl(e, 0.5);
}
function eB(e) {
  return new Bl(e, 0);
}
function tB(e) {
  return new Bl(e, 1);
}
function Ba(e, t) {
  if ((s = e.length) > 1)
    for (var r = 1, n, i, a = e[t[0]], s, c = a.length; r < s; ++r)
      for (i = a, a = e[t[r]], n = 0; n < c; ++n)
        a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1];
}
function Bh(e) {
  for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t;
  return r;
}
function rB(e, t) {
  return e[t];
}
function nB(e) {
  const t = [];
  return t.key = e, t;
}
function iB() {
  var e = rt([]), t = Bh, r = Ba, n = rB;
  function i(a) {
    var s = Array.from(e.apply(this, arguments), nB), c, l = s.length, f = -1, d;
    for (const h of a)
      for (c = 0, ++f; c < l; ++c)
        (s[c][f] = [0, +n(h, s[c].key, f, a)]).data = h;
    for (c = 0, d = Av(t(s)); c < l; ++c)
      s[d[c]].index = c;
    return r(s, d), s;
  }
  return i.keys = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : rt(Array.from(a)), i) : e;
  }, i.value = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : rt(+a), i) : n;
  }, i.order = function(a) {
    return arguments.length ? (t = a == null ? Bh : typeof a == "function" ? a : rt(Array.from(a)), i) : t;
  }, i.offset = function(a) {
    return arguments.length ? (r = a ?? Ba, i) : r;
  }, i;
}
function aB(e, t) {
  if ((n = e.length) > 0) {
    for (var r, n, i = 0, a = e[0].length, s; i < a; ++i) {
      for (s = r = 0; r < n; ++r) s += e[r][i][1] || 0;
      if (s) for (r = 0; r < n; ++r) e[r][i][1] /= s;
    }
    Ba(e, t);
  }
}
function oB(e, t) {
  if ((i = e.length) > 0) {
    for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
      for (var s = 0, c = 0; s < i; ++s) c += e[s][r][1] || 0;
      n[r][1] += n[r][0] = -c / 2;
    }
    Ba(e, t);
  }
}
function sB(e, t) {
  if (!(!((s = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
    for (var r = 0, n = 1, i, a, s; n < a; ++n) {
      for (var c = 0, l = 0, f = 0; c < s; ++c) {
        for (var d = e[t[c]], h = d[n][1] || 0, v = d[n - 1][1] || 0, g = (h - v) / 2, x = 0; x < c; ++x) {
          var y = e[t[x]], w = y[n][1] || 0, A = y[n - 1][1] || 0;
          g += w - A;
        }
        l += h, f += g * h;
      }
      i[n - 1][1] += i[n - 1][0] = r, l && (r -= f / l);
    }
    i[n - 1][1] += i[n - 1][0] = r, Ba(e, t);
  }
}
function ms(e) {
  "@babel/helpers - typeof";
  return ms = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ms(e);
}
var uB = ["type", "size", "sizeType"];
function Fh() {
  return Fh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fh.apply(this, arguments);
}
function jb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rb(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jb(Object(r), !0).forEach(function(n) {
      cB(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function cB(e, t, r) {
  return t = lB(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lB(e) {
  var t = fB(e, "string");
  return ms(t) == "symbol" ? t : String(t);
}
function fB(e, t) {
  if (ms(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ms(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dB(e, t) {
  if (e == null) return {};
  var r = hB(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hB(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var I_ = {
  symbolCircle: Sv,
  symbolCross: jL,
  symbolDiamond: NL,
  symbolSquare: DL,
  symbolStar: WL,
  symbolTriangle: zL,
  symbolWye: HL
}, pB = Math.PI / 180, vB = function(t) {
  var r = "symbol".concat(Nl(t));
  return I_[r] || Sv;
}, gB = function(t, r, n) {
  if (r === "area")
    return t;
  switch (n) {
    case "cross":
      return 5 * t * t / 9;
    case "diamond":
      return 0.5 * t * t / Math.sqrt(3);
    case "square":
      return t * t;
    case "star": {
      var i = 18 * pB;
      return 1.25 * t * t * (Math.tan(i) - Math.tan(i * 2) * Math.pow(Math.tan(i), 2));
    }
    case "triangle":
      return Math.sqrt(3) * t * t / 4;
    case "wye":
      return (21 - 10 * Math.sqrt(3)) * t * t / 8;
    default:
      return Math.PI * t * t / 4;
  }
}, yB = function(t, r) {
  I_["symbol".concat(Nl(t))] = r;
}, Pv = function(t) {
  var r = t.type, n = r === void 0 ? "circle" : r, i = t.size, a = i === void 0 ? 64 : i, s = t.sizeType, c = s === void 0 ? "area" : s, l = dB(t, uB), f = Rb(Rb({}, l), {}, {
    type: n,
    size: a,
    sizeType: c
  }), d = function() {
    var w = vB(n), A = GL().type(w).size(gB(a, c, n));
    return A();
  }, h = f.className, v = f.cx, g = f.cy, x = me(f, !0);
  return v === +v && g === +g && a === +a ? /* @__PURE__ */ k.createElement("path", Fh({}, x, {
    className: Me("recharts-symbols", h),
    transform: "translate(".concat(v, ", ").concat(g, ")"),
    d: d()
  })) : null;
};
Pv.registerSymbol = yB;
function Fa(e) {
  "@babel/helpers - typeof";
  return Fa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fa(e);
}
function Wh() {
  return Wh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wh.apply(this, arguments);
}
function Nb(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function mB(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nb(Object(r), !0).forEach(function(n) {
      bs(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nb(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function bB(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function xB(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, j_(n.key), n);
  }
}
function wB(e, t, r) {
  return t && xB(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _B(e, t, r) {
  return t = jc(t), OB(e, k_() ? Reflect.construct(t, r || [], jc(e).constructor) : t.apply(e, r));
}
function OB(e, t) {
  if (t && (Fa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return AB(e);
}
function AB(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function k_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (k_ = function() {
    return !!e;
  })();
}
function jc(e) {
  return jc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, jc(e);
}
function SB(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zh(e, t);
}
function zh(e, t) {
  return zh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zh(e, t);
}
function bs(e, t, r) {
  return t = j_(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function j_(e) {
  var t = PB(e, "string");
  return Fa(t) == "symbol" ? t : String(t);
}
function PB(e, t) {
  if (Fa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var $r = 32, Ev = /* @__PURE__ */ function(e) {
  SB(t, e);
  function t() {
    return bB(this, t), _B(this, t, arguments);
  }
  return wB(t, [{
    key: "renderIcon",
    value: (
      /**
       * Render the path of icon
       * @param {Object} data Data of each legend item
       * @return {String} Path element
       */
      function(n) {
        var i = this.props.inactiveColor, a = $r / 2, s = $r / 6, c = $r / 3, l = n.inactive ? i : n.color;
        if (n.type === "plainline")
          return /* @__PURE__ */ k.createElement("line", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            strokeDasharray: n.payload.strokeDasharray,
            x1: 0,
            y1: a,
            x2: $r,
            y2: a,
            className: "recharts-legend-icon"
          });
        if (n.type === "line")
          return /* @__PURE__ */ k.createElement("path", {
            strokeWidth: 4,
            fill: "none",
            stroke: l,
            d: "M0,".concat(a, "h").concat(c, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(2 * c, ",").concat(a, `
            H`).concat($r, "M").concat(2 * c, ",").concat(a, `
            A`).concat(s, ",").concat(s, ",0,1,1,").concat(c, ",").concat(a),
            className: "recharts-legend-icon"
          });
        if (n.type === "rect")
          return /* @__PURE__ */ k.createElement("path", {
            stroke: "none",
            fill: l,
            d: "M0,".concat($r / 8, "h").concat($r, "v").concat($r * 3 / 4, "h").concat(-$r, "z"),
            className: "recharts-legend-icon"
          });
        if (/* @__PURE__ */ k.isValidElement(n.legendIcon)) {
          var f = mB({}, n);
          return delete f.legendIcon, /* @__PURE__ */ k.cloneElement(n.legendIcon, f);
        }
        return /* @__PURE__ */ k.createElement(Pv, {
          fill: l,
          cx: a,
          cy: a,
          size: $r,
          sizeType: "diameter",
          type: n.type
        });
      }
    )
    /**
     * Draw items of legend
     * @return {ReactElement} Items
     */
  }, {
    key: "renderItems",
    value: function() {
      var n = this, i = this.props, a = i.payload, s = i.iconSize, c = i.layout, l = i.formatter, f = i.inactiveColor, d = {
        x: 0,
        y: 0,
        width: $r,
        height: $r
      }, h = {
        display: c === "horizontal" ? "inline-block" : "block",
        marginRight: 10
      }, v = {
        display: "inline-block",
        verticalAlign: "middle",
        marginRight: 4
      };
      return a.map(function(g, x) {
        var y = g.formatter || l, w = Me(bs(bs({
          "recharts-legend-item": !0
        }, "legend-item-".concat(x), !0), "inactive", g.inactive));
        if (g.type === "none")
          return null;
        var A = Pe(g.value) ? null : g.value;
        Vr(
          !Pe(g.value),
          `The name property is also required when using a function for the dataKey of a chart's cartesian components. Ex: <Bar name="Name of my Data"/>`
          // eslint-disable-line max-len
        );
        var O = g.inactive ? f : g.color;
        return /* @__PURE__ */ k.createElement("li", Wh({
          className: w,
          style: h,
          key: "legend-item-".concat(x)
        }, Yi(n.props, g, x)), /* @__PURE__ */ k.createElement(Ih, {
          width: s,
          height: s,
          viewBox: d,
          style: v
        }, n.renderIcon(g)), /* @__PURE__ */ k.createElement("span", {
          className: "recharts-legend-item-text",
          style: {
            color: O
          }
        }, y ? y(A, g, x) : A));
      });
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.payload, a = n.layout, s = n.align;
      if (!i || !i.length)
        return null;
      var c = {
        padding: 0,
        margin: 0,
        textAlign: a === "horizontal" ? s : "left"
      };
      return /* @__PURE__ */ k.createElement("ul", {
        className: "recharts-default-legend",
        style: c
      }, this.renderItems());
    }
  }]), t;
}(Nr);
bs(Ev, "displayName", "Legend");
bs(Ev, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "middle",
  inactiveColor: "#ccc"
});
var EB = kl;
function TB() {
  this.__data__ = new EB(), this.size = 0;
}
var $B = TB;
function CB(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
var MB = CB;
function IB(e) {
  return this.__data__.get(e);
}
var kB = IB;
function jB(e) {
  return this.__data__.has(e);
}
var RB = jB, NB = kl, DB = gv, LB = yv, BB = 200;
function FB(e, t) {
  var r = this.__data__;
  if (r instanceof NB) {
    var n = r.__data__;
    if (!DB || n.length < BB - 1)
      return n.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new LB(n);
  }
  return r.set(e, t), this.size = r.size, this;
}
var WB = FB, zB = kl, UB = $B, HB = MB, GB = kB, qB = RB, KB = WB;
function mo(e) {
  var t = this.__data__ = new zB(e);
  this.size = t.size;
}
mo.prototype.clear = UB;
mo.prototype.delete = HB;
mo.prototype.get = GB;
mo.prototype.has = qB;
mo.prototype.set = KB;
var R_ = mo, VB = "__lodash_hash_undefined__";
function YB(e) {
  return this.__data__.set(e, VB), this;
}
var XB = YB;
function ZB(e) {
  return this.__data__.has(e);
}
var JB = ZB, QB = yv, eF = XB, tF = JB;
function Rc(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new QB(); ++t < r; )
    this.add(e[t]);
}
Rc.prototype.add = Rc.prototype.push = eF;
Rc.prototype.has = tF;
var N_ = Rc;
function rF(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
var D_ = rF;
function nF(e, t) {
  return e.has(t);
}
var L_ = nF, iF = N_, aF = D_, oF = L_, sF = 1, uF = 2;
function cF(e, t, r, n, i, a) {
  var s = r & sF, c = e.length, l = t.length;
  if (c != l && !(s && l > c))
    return !1;
  var f = a.get(e), d = a.get(t);
  if (f && d)
    return f == t && d == e;
  var h = -1, v = !0, g = r & uF ? new iF() : void 0;
  for (a.set(e, t), a.set(t, e); ++h < c; ) {
    var x = e[h], y = t[h];
    if (n)
      var w = s ? n(y, x, h, t, e, a) : n(x, y, h, e, t, a);
    if (w !== void 0) {
      if (w)
        continue;
      v = !1;
      break;
    }
    if (g) {
      if (!aF(t, function(A, O) {
        if (!oF(g, O) && (x === A || i(x, A, r, n, a)))
          return g.push(O);
      })) {
        v = !1;
        break;
      }
    } else if (!(x === y || i(x, y, r, n, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), v;
}
var B_ = cF, lF = dn, fF = lF.Uint8Array, dF = fF;
function hF(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n, i) {
    r[++t] = [i, n];
  }), r;
}
var pF = hF;
function vF(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(n) {
    r[++t] = n;
  }), r;
}
var Tv = vF, Db = iu, Lb = dF, gF = vv, yF = B_, mF = pF, bF = Tv, xF = 1, wF = 2, _F = "[object Boolean]", OF = "[object Date]", AF = "[object Error]", SF = "[object Map]", PF = "[object Number]", EF = "[object RegExp]", TF = "[object Set]", $F = "[object String]", CF = "[object Symbol]", MF = "[object ArrayBuffer]", IF = "[object DataView]", Bb = Db ? Db.prototype : void 0, Gd = Bb ? Bb.valueOf : void 0;
function kF(e, t, r, n, i, a, s) {
  switch (r) {
    case IF:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case MF:
      return !(e.byteLength != t.byteLength || !a(new Lb(e), new Lb(t)));
    case _F:
    case OF:
    case PF:
      return gF(+e, +t);
    case AF:
      return e.name == t.name && e.message == t.message;
    case EF:
    case $F:
      return e == t + "";
    case SF:
      var c = mF;
    case TF:
      var l = n & xF;
      if (c || (c = bF), e.size != t.size && !l)
        return !1;
      var f = s.get(e);
      if (f)
        return f == t;
      n |= wF, s.set(e, t);
      var d = yF(c(e), c(t), n, i, a, s);
      return s.delete(e), d;
    case CF:
      if (Gd)
        return Gd.call(e) == Gd.call(t);
  }
  return !1;
}
var jF = kF;
function RF(e, t) {
  for (var r = -1, n = t.length, i = e.length; ++r < n; )
    e[i + r] = t[r];
  return e;
}
var F_ = RF, NF = F_, DF = rr;
function LF(e, t, r) {
  var n = t(e);
  return DF(e) ? n : NF(n, r(e));
}
var BF = LF;
function FF(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
var WF = FF;
function zF() {
  return [];
}
var UF = zF, HF = WF, GF = UF, qF = Object.prototype, KF = qF.propertyIsEnumerable, Fb = Object.getOwnPropertySymbols, VF = Fb ? function(e) {
  return e == null ? [] : (e = Object(e), HF(Fb(e), function(t) {
    return KF.call(e, t);
  }));
} : GF, YF = VF;
function XF(e, t) {
  for (var r = -1, n = Array(e); ++r < e; )
    n[r] = t(r);
  return n;
}
var ZF = XF, JF = Wn, QF = zn, eW = "[object Arguments]";
function tW(e) {
  return QF(e) && JF(e) == eW;
}
var rW = tW, Wb = rW, nW = zn, W_ = Object.prototype, iW = W_.hasOwnProperty, aW = W_.propertyIsEnumerable, oW = Wb(/* @__PURE__ */ function() {
  return arguments;
}()) ? Wb : function(e) {
  return nW(e) && iW.call(e, "callee") && !aW.call(e, "callee");
}, $v = oW, Nc = { exports: {} };
function sW() {
  return !1;
}
var uW = sW;
Nc.exports;
(function(e, t) {
  var r = dn, n = uW, i = t && !t.nodeType && t, a = i && !0 && e && !e.nodeType && e, s = a && a.exports === i, c = s ? r.Buffer : void 0, l = c ? c.isBuffer : void 0, f = l || n;
  e.exports = f;
})(Nc, Nc.exports);
var z_ = Nc.exports, cW = 9007199254740991, lW = /^(?:0|[1-9]\d*)$/;
function fW(e, t) {
  var r = typeof e;
  return t = t ?? cW, !!t && (r == "number" || r != "symbol" && lW.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
var Cv = fW, dW = 9007199254740991;
function hW(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= dW;
}
var Mv = hW, pW = Wn, vW = Mv, gW = zn, yW = "[object Arguments]", mW = "[object Array]", bW = "[object Boolean]", xW = "[object Date]", wW = "[object Error]", _W = "[object Function]", OW = "[object Map]", AW = "[object Number]", SW = "[object Object]", PW = "[object RegExp]", EW = "[object Set]", TW = "[object String]", $W = "[object WeakMap]", CW = "[object ArrayBuffer]", MW = "[object DataView]", IW = "[object Float32Array]", kW = "[object Float64Array]", jW = "[object Int8Array]", RW = "[object Int16Array]", NW = "[object Int32Array]", DW = "[object Uint8Array]", LW = "[object Uint8ClampedArray]", BW = "[object Uint16Array]", FW = "[object Uint32Array]", ut = {};
ut[IW] = ut[kW] = ut[jW] = ut[RW] = ut[NW] = ut[DW] = ut[LW] = ut[BW] = ut[FW] = !0;
ut[yW] = ut[mW] = ut[CW] = ut[bW] = ut[MW] = ut[xW] = ut[wW] = ut[_W] = ut[OW] = ut[AW] = ut[SW] = ut[PW] = ut[EW] = ut[TW] = ut[$W] = !1;
function WW(e) {
  return gW(e) && vW(e.length) && !!ut[pW(e)];
}
var zW = WW;
function UW(e) {
  return function(t) {
    return e(t);
  };
}
var U_ = UW, Dc = { exports: {} };
Dc.exports;
(function(e, t) {
  var r = J1, n = t && !t.nodeType && t, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, s = a && r.process, c = function() {
    try {
      var l = i && i.require && i.require("util").types;
      return l || s && s.binding && s.binding("util");
    } catch {
    }
  }();
  e.exports = c;
})(Dc, Dc.exports);
var HW = Dc.exports, GW = zW, qW = U_, zb = HW, Ub = zb && zb.isTypedArray, KW = Ub ? qW(Ub) : GW, H_ = KW, VW = ZF, YW = $v, XW = rr, ZW = z_, JW = Cv, QW = H_, e3 = Object.prototype, t3 = e3.hasOwnProperty;
function r3(e, t) {
  var r = XW(e), n = !r && YW(e), i = !r && !n && ZW(e), a = !r && !n && !i && QW(e), s = r || n || i || a, c = s ? VW(e.length, String) : [], l = c.length;
  for (var f in e)
    (t || t3.call(e, f)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    JW(f, l))) && c.push(f);
  return c;
}
var n3 = r3, i3 = Object.prototype;
function a3(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || i3;
  return e === r;
}
var o3 = a3;
function s3(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var G_ = s3, u3 = G_, c3 = u3(Object.keys, Object), l3 = c3, f3 = o3, d3 = l3, h3 = Object.prototype, p3 = h3.hasOwnProperty;
function v3(e) {
  if (!f3(e))
    return d3(e);
  var t = [];
  for (var r in Object(e))
    p3.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
var g3 = v3, y3 = pv, m3 = Mv;
function b3(e) {
  return e != null && m3(e.length) && !y3(e);
}
var ou = b3, x3 = n3, w3 = g3, _3 = ou;
function O3(e) {
  return _3(e) ? x3(e) : w3(e);
}
var Fl = O3, A3 = BF, S3 = YF, P3 = Fl;
function E3(e) {
  return A3(e, P3, S3);
}
var T3 = E3, Hb = T3, $3 = 1, C3 = Object.prototype, M3 = C3.hasOwnProperty;
function I3(e, t, r, n, i, a) {
  var s = r & $3, c = Hb(e), l = c.length, f = Hb(t), d = f.length;
  if (l != d && !s)
    return !1;
  for (var h = l; h--; ) {
    var v = c[h];
    if (!(s ? v in t : M3.call(t, v)))
      return !1;
  }
  var g = a.get(e), x = a.get(t);
  if (g && x)
    return g == t && x == e;
  var y = !0;
  a.set(e, t), a.set(t, e);
  for (var w = s; ++h < l; ) {
    v = c[h];
    var A = e[v], O = t[v];
    if (n)
      var S = s ? n(O, A, v, t, e, a) : n(A, O, v, e, t, a);
    if (!(S === void 0 ? A === O || i(A, O, r, n, a) : S)) {
      y = !1;
      break;
    }
    w || (w = v == "constructor");
  }
  if (y && !w) {
    var _ = e.constructor, b = t.constructor;
    _ != b && "constructor" in e && "constructor" in t && !(typeof _ == "function" && _ instanceof _ && typeof b == "function" && b instanceof b) && (y = !1);
  }
  return a.delete(e), a.delete(t), y;
}
var k3 = I3, j3 = na, R3 = dn, N3 = j3(R3, "DataView"), D3 = N3, L3 = na, B3 = dn, F3 = L3(B3, "Promise"), W3 = F3, z3 = na, U3 = dn, H3 = z3(U3, "Set"), q_ = H3, G3 = na, q3 = dn, K3 = G3(q3, "WeakMap"), V3 = K3, Uh = D3, Hh = gv, Gh = W3, qh = q_, Kh = V3, K_ = Wn, bo = e_, Gb = "[object Map]", Y3 = "[object Object]", qb = "[object Promise]", Kb = "[object Set]", Vb = "[object WeakMap]", Yb = "[object DataView]", X3 = bo(Uh), Z3 = bo(Hh), J3 = bo(Gh), Q3 = bo(qh), ez = bo(Kh), Di = K_;
(Uh && Di(new Uh(new ArrayBuffer(1))) != Yb || Hh && Di(new Hh()) != Gb || Gh && Di(Gh.resolve()) != qb || qh && Di(new qh()) != Kb || Kh && Di(new Kh()) != Vb) && (Di = function(e) {
  var t = K_(e), r = t == Y3 ? e.constructor : void 0, n = r ? bo(r) : "";
  if (n)
    switch (n) {
      case X3:
        return Yb;
      case Z3:
        return Gb;
      case J3:
        return qb;
      case Q3:
        return Kb;
      case ez:
        return Vb;
    }
  return t;
});
var tz = Di, qd = R_, rz = B_, nz = jF, iz = k3, Xb = tz, Zb = rr, Jb = z_, az = H_, oz = 1, Qb = "[object Arguments]", e0 = "[object Array]", cc = "[object Object]", sz = Object.prototype, t0 = sz.hasOwnProperty;
function uz(e, t, r, n, i, a) {
  var s = Zb(e), c = Zb(t), l = s ? e0 : Xb(e), f = c ? e0 : Xb(t);
  l = l == Qb ? cc : l, f = f == Qb ? cc : f;
  var d = l == cc, h = f == cc, v = l == f;
  if (v && Jb(e)) {
    if (!Jb(t))
      return !1;
    s = !0, d = !1;
  }
  if (v && !d)
    return a || (a = new qd()), s || az(e) ? rz(e, t, r, n, i, a) : nz(e, t, l, r, n, i, a);
  if (!(r & oz)) {
    var g = d && t0.call(e, "__wrapped__"), x = h && t0.call(t, "__wrapped__");
    if (g || x) {
      var y = g ? e.value() : e, w = x ? t.value() : t;
      return a || (a = new qd()), i(y, w, r, n, a);
    }
  }
  return v ? (a || (a = new qd()), iz(e, t, r, n, i, a)) : !1;
}
var cz = uz, lz = cz, r0 = zn;
function V_(e, t, r, n, i) {
  return e === t ? !0 : e == null || t == null || !r0(e) && !r0(t) ? e !== e && t !== t : lz(e, t, r, n, V_, i);
}
var Iv = V_, fz = R_, dz = Iv, hz = 1, pz = 2;
function vz(e, t, r, n) {
  var i = r.length, a = i, s = !n;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var c = r[i];
    if (s && c[2] ? c[1] !== e[c[0]] : !(c[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    c = r[i];
    var l = c[0], f = e[l], d = c[1];
    if (s && c[2]) {
      if (f === void 0 && !(l in e))
        return !1;
    } else {
      var h = new fz();
      if (n)
        var v = n(f, d, l, e, t, h);
      if (!(v === void 0 ? dz(d, f, hz | pz, n, h) : v))
        return !1;
    }
  }
  return !0;
}
var gz = vz, yz = mi;
function mz(e) {
  return e === e && !yz(e);
}
var Y_ = mz, bz = Y_, xz = Fl;
function wz(e) {
  for (var t = xz(e), r = t.length; r--; ) {
    var n = t[r], i = e[n];
    t[r] = [n, i, bz(i)];
  }
  return t;
}
var _z = wz;
function Oz(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
var X_ = Oz, Az = gz, Sz = _z, Pz = X_;
function Ez(e) {
  var t = Sz(e);
  return t.length == 1 && t[0][2] ? Pz(t[0][0], t[0][1]) : function(r) {
    return r === e || Az(r, e, t);
  };
}
var Tz = Ez;
function $z(e, t) {
  return e != null && t in Object(e);
}
var Cz = $z, Mz = a_, Iz = $v, kz = rr, jz = Cv, Rz = Mv, Nz = Rl;
function Dz(e, t, r) {
  t = Mz(t, e);
  for (var n = -1, i = t.length, a = !1; ++n < i; ) {
    var s = Nz(t[n]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && Rz(i) && jz(s, i) && (kz(e) || Iz(e)));
}
var Lz = Dz, Bz = Cz, Fz = Lz;
function Wz(e, t) {
  return e != null && Fz(e, t, Bz);
}
var zz = Wz, Uz = Iv, Hz = o_, Gz = zz, qz = hv, Kz = Y_, Vz = X_, Yz = Rl, Xz = 1, Zz = 2;
function Jz(e, t) {
  return qz(e) && Kz(t) ? Vz(Yz(e), t) : function(r) {
    var n = Hz(r, e);
    return n === void 0 && n === t ? Gz(r, e) : Uz(t, n, Xz | Zz);
  };
}
var Qz = Jz;
function eU(e) {
  return e;
}
var xo = eU;
function tU(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
var rU = tU, nU = xv;
function iU(e) {
  return function(t) {
    return nU(t, e);
  };
}
var aU = iU, oU = rU, sU = aU, uU = hv, cU = Rl;
function lU(e) {
  return uU(e) ? oU(cU(e)) : sU(e);
}
var fU = lU, dU = Tz, hU = Qz, pU = xo, vU = rr, gU = fU;
function yU(e) {
  return typeof e == "function" ? e : e == null ? pU : typeof e == "object" ? vU(e) ? hU(e[0], e[1]) : dU(e) : gU(e);
}
var hn = yU;
function mU(e, t, r, n) {
  for (var i = e.length, a = r + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (t(e[a], a, e))
      return a;
  return -1;
}
var Z_ = mU;
function bU(e) {
  return e !== e;
}
var xU = bU;
function wU(e, t, r) {
  for (var n = r - 1, i = e.length; ++n < i; )
    if (e[n] === t)
      return n;
  return -1;
}
var _U = wU, OU = Z_, AU = xU, SU = _U;
function PU(e, t, r) {
  return t === t ? SU(e, t, r) : OU(e, AU, r);
}
var EU = PU, TU = EU;
function $U(e, t) {
  var r = e == null ? 0 : e.length;
  return !!r && TU(e, t, 0) > -1;
}
var CU = $U;
function MU(e, t, r) {
  for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
    if (r(t, e[n]))
      return !0;
  return !1;
}
var IU = MU;
function kU() {
}
var jU = kU, Kd = q_, RU = jU, NU = Tv, DU = 1 / 0, LU = Kd && 1 / NU(new Kd([, -0]))[1] == DU ? function(e) {
  return new Kd(e);
} : RU, BU = LU, FU = N_, WU = CU, zU = IU, UU = L_, HU = BU, GU = Tv, qU = 200;
function KU(e, t, r) {
  var n = -1, i = WU, a = e.length, s = !0, c = [], l = c;
  if (r)
    s = !1, i = zU;
  else if (a >= qU) {
    var f = t ? null : HU(e);
    if (f)
      return GU(f);
    s = !1, i = UU, l = new FU();
  } else
    l = t ? [] : c;
  e:
    for (; ++n < a; ) {
      var d = e[n], h = t ? t(d) : d;
      if (d = r || d !== 0 ? d : 0, s && h === h) {
        for (var v = l.length; v--; )
          if (l[v] === h)
            continue e;
        t && l.push(h), c.push(d);
      } else i(l, h, r) || (l !== c && l.push(h), c.push(d));
    }
  return c;
}
var VU = KU, YU = hn, XU = VU;
function ZU(e, t) {
  return e && e.length ? XU(e, YU(t)) : [];
}
var JU = ZU;
const n0 = /* @__PURE__ */ Je(JU);
function J_(e, t, r) {
  return t === !0 ? n0(e, r) : Pe(t) ? n0(e, t) : e;
}
function Wa(e) {
  "@babel/helpers - typeof";
  return Wa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Wa(e);
}
var QU = ["ref"];
function i0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ki(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? i0(Object(r), !0).forEach(function(n) {
      Wl(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function e5(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function a0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, tO(n.key), n);
  }
}
function t5(e, t, r) {
  return t && a0(e.prototype, t), r && a0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function r5(e, t, r) {
  return t = Lc(t), n5(e, Q_() ? Reflect.construct(t, r || [], Lc(e).constructor) : t.apply(e, r));
}
function n5(e, t) {
  if (t && (Wa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return eO(e);
}
function Q_() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Q_ = function() {
    return !!e;
  })();
}
function Lc(e) {
  return Lc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Lc(e);
}
function eO(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function i5(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Vh(e, t);
}
function Vh(e, t) {
  return Vh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Vh(e, t);
}
function Wl(e, t, r) {
  return t = tO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function tO(e) {
  var t = a5(e, "string");
  return Wa(t) == "symbol" ? t : String(t);
}
function a5(e, t) {
  if (Wa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Wa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function o5(e, t) {
  if (e == null) return {};
  var r = s5(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function s5(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function u5(e) {
  return e.value;
}
function c5(e, t) {
  if (/* @__PURE__ */ k.isValidElement(e))
    return /* @__PURE__ */ k.cloneElement(e, t);
  if (typeof e == "function")
    return /* @__PURE__ */ k.createElement(e, t);
  t.ref;
  var r = o5(t, QU);
  return /* @__PURE__ */ k.createElement(Ev, r);
}
var o0 = 1, za = /* @__PURE__ */ function(e) {
  i5(t, e);
  function t() {
    var r;
    e5(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = r5(this, t, [].concat(i)), Wl(eO(r), "lastBoundingBox", {
      width: -1,
      height: -1
    }), r;
  }
  return t5(t, [{
    key: "componentDidMount",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      this.updateBBox();
    }
  }, {
    key: "getBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        return n.height = this.wrapperNode.offsetHeight, n.width = this.wrapperNode.offsetWidth, n;
      }
      return null;
    }
  }, {
    key: "updateBBox",
    value: function() {
      var n = this.props.onBBoxUpdate, i = this.getBBox();
      i ? (Math.abs(i.width - this.lastBoundingBox.width) > o0 || Math.abs(i.height - this.lastBoundingBox.height) > o0) && (this.lastBoundingBox.width = i.width, this.lastBoundingBox.height = i.height, n && n(i)) : (this.lastBoundingBox.width !== -1 || this.lastBoundingBox.height !== -1) && (this.lastBoundingBox.width = -1, this.lastBoundingBox.height = -1, n && n(null));
    }
  }, {
    key: "getBBoxSnapshot",
    value: function() {
      return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? ki({}, this.lastBoundingBox) : {
        width: 0,
        height: 0
      };
    }
  }, {
    key: "getDefaultPosition",
    value: function(n) {
      var i = this.props, a = i.layout, s = i.align, c = i.verticalAlign, l = i.margin, f = i.chartWidth, d = i.chartHeight, h, v;
      if (!n || (n.left === void 0 || n.left === null) && (n.right === void 0 || n.right === null))
        if (s === "center" && a === "vertical") {
          var g = this.getBBoxSnapshot();
          h = {
            left: ((f || 0) - g.width) / 2
          };
        } else
          h = s === "right" ? {
            right: l && l.right || 0
          } : {
            left: l && l.left || 0
          };
      if (!n || (n.top === void 0 || n.top === null) && (n.bottom === void 0 || n.bottom === null))
        if (c === "middle") {
          var x = this.getBBoxSnapshot();
          v = {
            top: ((d || 0) - x.height) / 2
          };
        } else
          v = c === "bottom" ? {
            bottom: l && l.bottom || 0
          } : {
            top: l && l.top || 0
          };
      return ki(ki({}, h), v);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.content, s = i.width, c = i.height, l = i.wrapperStyle, f = i.payloadUniqBy, d = i.payload, h = ki(ki({
        position: "absolute",
        width: s || "auto",
        height: c || "auto"
      }, this.getDefaultPosition(l)), l);
      return /* @__PURE__ */ k.createElement("div", {
        className: "recharts-legend-wrapper",
        style: h,
        ref: function(g) {
          n.wrapperNode = g;
        }
      }, c5(a, ki(ki({}, this.props), {}, {
        payload: J_(d, f, u5)
      })));
    }
  }], [{
    key: "getWithHeight",
    value: function(n, i) {
      var a = n.props.layout;
      return a === "vertical" && oe(n.props.height) ? {
        height: n.props.height
      } : a === "horizontal" ? {
        width: n.props.width || i
      } : null;
    }
  }]), t;
}(Nr);
Wl(za, "displayName", "Legend");
Wl(za, "defaultProps", {
  iconSize: 14,
  layout: "horizontal",
  align: "center",
  verticalAlign: "bottom"
});
var s0 = iu, l5 = $v, f5 = rr, u0 = s0 ? s0.isConcatSpreadable : void 0;
function d5(e) {
  return f5(e) || l5(e) || !!(u0 && e && e[u0]);
}
var h5 = d5, p5 = F_, v5 = h5;
function rO(e, t, r, n, i) {
  var a = -1, s = e.length;
  for (r || (r = v5), i || (i = []); ++a < s; ) {
    var c = e[a];
    t > 0 && r(c) ? t > 1 ? rO(c, t - 1, r, n, i) : p5(i, c) : n || (i[i.length] = c);
  }
  return i;
}
var nO = rO;
function g5(e) {
  return function(t, r, n) {
    for (var i = -1, a = Object(t), s = n(t), c = s.length; c--; ) {
      var l = s[e ? c : ++i];
      if (r(a[l], l, a) === !1)
        break;
    }
    return t;
  };
}
var y5 = g5, m5 = y5, b5 = m5(), x5 = b5, w5 = x5, _5 = Fl;
function O5(e, t) {
  return e && w5(e, t, _5);
}
var iO = O5, A5 = ou;
function S5(e, t) {
  return function(r, n) {
    if (r == null)
      return r;
    if (!A5(r))
      return e(r, n);
    for (var i = r.length, a = t ? i : -1, s = Object(r); (t ? a-- : ++a < i) && n(s[a], a, s) !== !1; )
      ;
    return r;
  };
}
var P5 = S5, E5 = iO, T5 = P5, $5 = T5(E5), kv = $5, C5 = kv, M5 = ou;
function I5(e, t) {
  var r = -1, n = M5(e) ? Array(e.length) : [];
  return C5(e, function(i, a, s) {
    n[++r] = t(i, a, s);
  }), n;
}
var aO = I5;
function k5(e, t) {
  var r = e.length;
  for (e.sort(t); r--; )
    e[r] = e[r].value;
  return e;
}
var j5 = k5, c0 = fo;
function R5(e, t) {
  if (e !== t) {
    var r = e !== void 0, n = e === null, i = e === e, a = c0(e), s = t !== void 0, c = t === null, l = t === t, f = c0(t);
    if (!c && !f && !a && e > t || a && s && l && !c && !f || n && s && l || !r && l || !i)
      return 1;
    if (!n && !a && !f && e < t || f && r && i && !n && !a || c && r && i || !s && i || !l)
      return -1;
  }
  return 0;
}
var N5 = R5, D5 = N5;
function L5(e, t, r) {
  for (var n = -1, i = e.criteria, a = t.criteria, s = i.length, c = r.length; ++n < s; ) {
    var l = D5(i[n], a[n]);
    if (l) {
      if (n >= c)
        return l;
      var f = r[n];
      return l * (f == "desc" ? -1 : 1);
    }
  }
  return e.index - t.index;
}
var B5 = L5, Vd = bv, F5 = xv, W5 = hn, z5 = aO, U5 = j5, H5 = U_, G5 = B5, q5 = xo, K5 = rr;
function V5(e, t, r) {
  t.length ? t = Vd(t, function(a) {
    return K5(a) ? function(s) {
      return F5(s, a.length === 1 ? a[0] : a);
    } : a;
  }) : t = [q5];
  var n = -1;
  t = Vd(t, H5(W5));
  var i = z5(e, function(a, s, c) {
    var l = Vd(t, function(f) {
      return f(a);
    });
    return { criteria: l, index: ++n, value: a };
  });
  return U5(i, function(a, s) {
    return G5(a, s, r);
  });
}
var Y5 = V5;
function X5(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
var Z5 = X5, J5 = Z5, l0 = Math.max;
function Q5(e, t, r) {
  return t = l0(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var n = arguments, i = -1, a = l0(n.length - t, 0), s = Array(a); ++i < a; )
      s[i] = n[t + i];
    i = -1;
    for (var c = Array(t + 1); ++i < t; )
      c[i] = n[i];
    return c[t] = r(s), J5(e, this, c);
  };
}
var e6 = Q5;
function t6(e) {
  return function() {
    return e;
  };
}
var r6 = t6, n6 = na, i6 = function() {
  try {
    var e = n6(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), oO = i6, a6 = r6, f0 = oO, o6 = xo, s6 = f0 ? function(e, t) {
  return f0(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: a6(t),
    writable: !0
  });
} : o6, u6 = s6, c6 = 800, l6 = 16, f6 = Date.now;
function d6(e) {
  var t = 0, r = 0;
  return function() {
    var n = f6(), i = l6 - (n - r);
    if (r = n, i > 0) {
      if (++t >= c6)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var h6 = d6, p6 = u6, v6 = h6, g6 = v6(p6), y6 = g6, m6 = xo, b6 = e6, x6 = y6;
function w6(e, t) {
  return x6(b6(e, t, m6), e + "");
}
var _6 = w6, O6 = vv, A6 = ou, S6 = Cv, P6 = mi;
function E6(e, t, r) {
  if (!P6(r))
    return !1;
  var n = typeof t;
  return (n == "number" ? A6(r) && S6(t, r.length) : n == "string" && t in r) ? O6(r[t], e) : !1;
}
var zl = E6, T6 = nO, $6 = Y5, C6 = _6, d0 = zl, M6 = C6(function(e, t) {
  if (e == null)
    return [];
  var r = t.length;
  return r > 1 && d0(e, t[0], t[1]) ? t = [] : r > 2 && d0(t[0], t[1], t[2]) && (t = [t[0]]), $6(e, T6(t, 1), []);
}), I6 = M6;
const jv = /* @__PURE__ */ Je(I6);
function xs(e) {
  "@babel/helpers - typeof";
  return xs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, xs(e);
}
function Yh() {
  return Yh = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yh.apply(this, arguments);
}
function k6(e, t) {
  return D6(e) || N6(e, t) || R6(e, t) || j6();
}
function j6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R6(e, t) {
  if (e) {
    if (typeof e == "string") return h0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h0(e, t);
  }
}
function h0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function N6(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function D6(e) {
  if (Array.isArray(e)) return e;
}
function p0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yd(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? p0(Object(r), !0).forEach(function(n) {
      L6(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function L6(e, t, r) {
  return t = B6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function B6(e) {
  var t = F6(e, "string");
  return xs(t) == "symbol" ? t : String(t);
}
function F6(e, t) {
  if (xs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (xs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function W6(e) {
  return Array.isArray(e) && Et(e[0]) && Et(e[1]) ? e.join(" ~ ") : e;
}
var z6 = function(t) {
  var r = t.separator, n = r === void 0 ? " : " : r, i = t.contentStyle, a = i === void 0 ? {} : i, s = t.itemStyle, c = s === void 0 ? {} : s, l = t.labelStyle, f = l === void 0 ? {} : l, d = t.payload, h = t.formatter, v = t.itemSorter, g = t.wrapperClassName, x = t.labelClassName, y = t.label, w = t.labelFormatter, A = t.accessibilityLayer, O = A === void 0 ? !1 : A, S = function() {
    if (d && d.length) {
      var N = {
        padding: 0,
        margin: 0
      }, U = (v ? jv(d, v) : d).map(function(z, J) {
        if (z.type === "none")
          return null;
        var H = Yd({
          display: "block",
          paddingTop: 4,
          paddingBottom: 4,
          color: z.color || "#000"
        }, c), Z = z.formatter || h || W6, q = z.value, se = z.name, G = q, Y = se;
        if (Z && G != null && Y != null) {
          var ae = Z(q, se, z, J, d);
          if (Array.isArray(ae)) {
            var ce = k6(ae, 2);
            G = ce[0], Y = ce[1];
          } else
            G = ae;
        }
        return (
          // eslint-disable-next-line react/no-array-index-key
          /* @__PURE__ */ k.createElement("li", {
            className: "recharts-tooltip-item",
            key: "tooltip-item-".concat(J),
            style: H
          }, Et(Y) ? /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-name"
          }, Y) : null, Et(Y) ? /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-separator"
          }, n) : null, /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-value"
          }, G), /* @__PURE__ */ k.createElement("span", {
            className: "recharts-tooltip-item-unit"
          }, z.unit || ""))
        );
      });
      return /* @__PURE__ */ k.createElement("ul", {
        className: "recharts-tooltip-item-list",
        style: N
      }, U);
    }
    return null;
  }, _ = Yd({
    margin: 0,
    padding: 10,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    whiteSpace: "nowrap"
  }, a), b = Yd({
    margin: 0
  }, f), E = !Te(y), C = E ? y : "", M = Me("recharts-default-tooltip", g), F = Me("recharts-tooltip-label", x);
  E && w && d !== void 0 && d !== null && (C = w(y, d));
  var D = O ? {
    role: "status",
    "aria-live": "assertive"
  } : {};
  return /* @__PURE__ */ k.createElement("div", Yh({
    className: M,
    style: _
  }, D), /* @__PURE__ */ k.createElement("p", {
    className: F,
    style: b
  }, /* @__PURE__ */ k.isValidElement(C) ? C : "".concat(C)), S());
};
function ws(e) {
  "@babel/helpers - typeof";
  return ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ws(e);
}
function lc(e, t, r) {
  return t = U6(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U6(e) {
  var t = H6(e, "string");
  return ws(t) == "symbol" ? t : String(t);
}
function H6(e, t) {
  if (ws(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ws(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Jo = "recharts-tooltip-wrapper", G6 = {
  visibility: "hidden"
};
function q6(e) {
  var t = e.coordinate, r = e.translateX, n = e.translateY;
  return Me(Jo, lc(lc(lc(lc({}, "".concat(Jo, "-right"), oe(r) && t && oe(t.x) && r >= t.x), "".concat(Jo, "-left"), oe(r) && t && oe(t.x) && r < t.x), "".concat(Jo, "-bottom"), oe(n) && t && oe(t.y) && n >= t.y), "".concat(Jo, "-top"), oe(n) && t && oe(t.y) && n < t.y));
}
function v0(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.key, i = e.offsetTopLeft, a = e.position, s = e.reverseDirection, c = e.tooltipDimension, l = e.viewBox, f = e.viewBoxDimension;
  if (a && oe(a[n]))
    return a[n];
  var d = r[n] - c - i, h = r[n] + i;
  if (t[n])
    return s[n] ? d : h;
  if (s[n]) {
    var v = d, g = l[n];
    return v < g ? Math.max(h, l[n]) : Math.max(d, l[n]);
  }
  var x = h + c, y = l[n] + f;
  return x > y ? Math.max(d, l[n]) : Math.max(h, l[n]);
}
function K6(e) {
  var t = e.translateX, r = e.translateY, n = e.useTranslate3d;
  return {
    transform: n ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)")
  };
}
function V6(e) {
  var t = e.allowEscapeViewBox, r = e.coordinate, n = e.offsetTopLeft, i = e.position, a = e.reverseDirection, s = e.tooltipBox, c = e.useTranslate3d, l = e.viewBox, f, d, h;
  return s.height > 0 && s.width > 0 && r ? (d = v0({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "x",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: s.width,
    viewBox: l,
    viewBoxDimension: l.width
  }), h = v0({
    allowEscapeViewBox: t,
    coordinate: r,
    key: "y",
    offsetTopLeft: n,
    position: i,
    reverseDirection: a,
    tooltipDimension: s.height,
    viewBox: l,
    viewBoxDimension: l.height
  }), f = K6({
    translateX: d,
    translateY: h,
    useTranslate3d: c
  })) : f = G6, {
    cssProperties: f,
    cssClasses: q6({
      translateX: d,
      translateY: h,
      coordinate: r
    })
  };
}
function Ua(e) {
  "@babel/helpers - typeof";
  return Ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ua(e);
}
function g0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function y0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? g0(Object(r), !0).forEach(function(n) {
      Jh(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Y6(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function X6(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, uO(n.key), n);
  }
}
function Z6(e, t, r) {
  return t && X6(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function J6(e, t, r) {
  return t = Bc(t), Q6(e, sO() ? Reflect.construct(t, r || [], Bc(e).constructor) : t.apply(e, r));
}
function Q6(e, t) {
  if (t && (Ua(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Xh(e);
}
function sO() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (sO = function() {
    return !!e;
  })();
}
function Bc(e) {
  return Bc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Bc(e);
}
function Xh(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function e8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Zh(e, t);
}
function Zh(e, t) {
  return Zh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Zh(e, t);
}
function Jh(e, t, r) {
  return t = uO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function uO(e) {
  var t = t8(e, "string");
  return Ua(t) == "symbol" ? t : String(t);
}
function t8(e, t) {
  if (Ua(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ua(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var m0 = 1, r8 = /* @__PURE__ */ function(e) {
  e8(t, e);
  function t() {
    var r;
    Y6(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = J6(this, t, [].concat(i)), Jh(Xh(r), "state", {
      dismissed: !1,
      dismissedAtCoordinate: {
        x: 0,
        y: 0
      },
      lastBoundingBox: {
        width: -1,
        height: -1
      }
    }), Jh(Xh(r), "handleKeyDown", function(s) {
      if (s.key === "Escape") {
        var c, l, f, d;
        r.setState({
          dismissed: !0,
          dismissedAtCoordinate: {
            x: (c = (l = r.props.coordinate) === null || l === void 0 ? void 0 : l.x) !== null && c !== void 0 ? c : 0,
            y: (f = (d = r.props.coordinate) === null || d === void 0 ? void 0 : d.y) !== null && f !== void 0 ? f : 0
          }
        });
      }
    }), r;
  }
  return Z6(t, [{
    key: "updateBBox",
    value: function() {
      if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
        var n = this.wrapperNode.getBoundingClientRect();
        (Math.abs(n.width - this.state.lastBoundingBox.width) > m0 || Math.abs(n.height - this.state.lastBoundingBox.height) > m0) && this.setState({
          lastBoundingBox: {
            width: n.width,
            height: n.height
          }
        });
      } else (this.state.lastBoundingBox.width !== -1 || this.state.lastBoundingBox.height !== -1) && this.setState({
        lastBoundingBox: {
          width: -1,
          height: -1
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function() {
      document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      document.removeEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      var n, i;
      this.props.active && this.updateBBox(), this.state.dismissed && (((n = this.props.coordinate) === null || n === void 0 ? void 0 : n.x) !== this.state.dismissedAtCoordinate.x || ((i = this.props.coordinate) === null || i === void 0 ? void 0 : i.y) !== this.state.dismissedAtCoordinate.y) && (this.state.dismissed = !1);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, s = i.allowEscapeViewBox, c = i.animationDuration, l = i.animationEasing, f = i.children, d = i.coordinate, h = i.hasPayload, v = i.isAnimationActive, g = i.offset, x = i.position, y = i.reverseDirection, w = i.useTranslate3d, A = i.viewBox, O = i.wrapperStyle, S = V6({
        allowEscapeViewBox: s,
        coordinate: d,
        offsetTopLeft: g,
        position: x,
        reverseDirection: y,
        tooltipBox: this.state.lastBoundingBox,
        useTranslate3d: w,
        viewBox: A
      }), _ = S.cssClasses, b = S.cssProperties, E = y0(y0({
        transition: v && a ? "transform ".concat(c, "ms ").concat(l) : void 0
      }, b), {}, {
        pointerEvents: "none",
        visibility: !this.state.dismissed && a && h ? "visible" : "hidden",
        position: "absolute",
        top: 0,
        left: 0
      }, O);
      return (
        // This element allow listening to the `Escape` key.
        // See https://github.com/recharts/recharts/pull/2925
        /* @__PURE__ */ k.createElement("div", {
          tabIndex: -1,
          className: _,
          style: E,
          ref: function(M) {
            n.wrapperNode = M;
          }
        }, f)
      );
    }
  }]), t;
}(Nr), n8 = function() {
  return !(typeof window < "u" && window.document && window.document.createElement && window.setTimeout);
}, Yr = {
  isSsr: n8(),
  get: function(t) {
    return Yr[t];
  },
  set: function(t, r) {
    if (typeof t == "string")
      Yr[t] = r;
    else {
      var n = Object.keys(t);
      n && n.length && n.forEach(function(i) {
        Yr[i] = t[i];
      });
    }
  }
};
function Ha(e) {
  "@babel/helpers - typeof";
  return Ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ha(e);
}
function b0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function x0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? b0(Object(r), !0).forEach(function(n) {
      Rv(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function i8(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function a8(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, lO(n.key), n);
  }
}
function o8(e, t, r) {
  return t && a8(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function s8(e, t, r) {
  return t = Fc(t), u8(e, cO() ? Reflect.construct(t, r || [], Fc(e).constructor) : t.apply(e, r));
}
function u8(e, t) {
  if (t && (Ha(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return c8(e);
}
function c8(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function cO() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (cO = function() {
    return !!e;
  })();
}
function Fc(e) {
  return Fc = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fc(e);
}
function l8(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Qh(e, t);
}
function Qh(e, t) {
  return Qh = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Qh(e, t);
}
function Rv(e, t, r) {
  return t = lO(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function lO(e) {
  var t = f8(e, "string");
  return Ha(t) == "symbol" ? t : String(t);
}
function f8(e, t) {
  if (Ha(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ha(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function d8(e) {
  return e.dataKey;
}
function h8(e, t) {
  return /* @__PURE__ */ k.isValidElement(e) ? /* @__PURE__ */ k.cloneElement(e, t) : typeof e == "function" ? /* @__PURE__ */ k.createElement(e, t) : /* @__PURE__ */ k.createElement(z6, t);
}
var an = /* @__PURE__ */ function(e) {
  l8(t, e);
  function t() {
    return i8(this, t), s8(this, t, arguments);
  }
  return o8(t, [{
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.active, s = i.allowEscapeViewBox, c = i.animationDuration, l = i.animationEasing, f = i.content, d = i.coordinate, h = i.filterNull, v = i.isAnimationActive, g = i.offset, x = i.payload, y = i.payloadUniqBy, w = i.position, A = i.reverseDirection, O = i.useTranslate3d, S = i.viewBox, _ = i.wrapperStyle, b = x ?? [];
      h && b.length && (b = J_(x.filter(function(C) {
        return C.value != null && (C.hide !== !0 || n.props.includeHidden);
      }), y, d8));
      var E = b.length > 0;
      return /* @__PURE__ */ k.createElement(r8, {
        allowEscapeViewBox: s,
        animationDuration: c,
        animationEasing: l,
        isAnimationActive: v,
        active: a,
        coordinate: d,
        hasPayload: E,
        offset: g,
        position: w,
        reverseDirection: A,
        useTranslate3d: O,
        viewBox: S,
        wrapperStyle: _
      }, h8(f, x0(x0({}, this.props), {}, {
        payload: b
      })));
    }
  }]), t;
}(Nr);
Rv(an, "displayName", "Tooltip");
Rv(an, "defaultProps", {
  accessibilityLayer: !1,
  allowEscapeViewBox: {
    x: !1,
    y: !1
  },
  animationDuration: 400,
  animationEasing: "ease",
  contentStyle: {},
  coordinate: {
    x: 0,
    y: 0
  },
  cursor: !0,
  cursorStyle: {},
  filterNull: !0,
  isAnimationActive: !Yr.isSsr,
  itemStyle: {},
  labelStyle: {},
  offset: 10,
  reverseDirection: {
    x: !1,
    y: !1
  },
  separator: " : ",
  trigger: "hover",
  useTranslate3d: !1,
  viewBox: {
    x: 0,
    y: 0,
    height: 0,
    width: 0
  },
  wrapperStyle: {}
});
var p8 = dn, v8 = function() {
  return p8.Date.now();
}, g8 = v8, y8 = /\s/;
function m8(e) {
  for (var t = e.length; t-- && y8.test(e.charAt(t)); )
    ;
  return t;
}
var b8 = m8, x8 = b8, w8 = /^\s+/;
function _8(e) {
  return e && e.slice(0, x8(e) + 1).replace(w8, "");
}
var O8 = _8, A8 = O8, w0 = mi, S8 = fo, _0 = NaN, P8 = /^[-+]0x[0-9a-f]+$/i, E8 = /^0b[01]+$/i, T8 = /^0o[0-7]+$/i, $8 = parseInt;
function C8(e) {
  if (typeof e == "number")
    return e;
  if (S8(e))
    return _0;
  if (w0(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = w0(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = A8(e);
  var r = E8.test(e);
  return r || T8.test(e) ? $8(e.slice(2), r ? 2 : 8) : P8.test(e) ? _0 : +e;
}
var fO = C8, M8 = mi, Xd = g8, O0 = fO, I8 = "Expected a function", k8 = Math.max, j8 = Math.min;
function R8(e, t, r) {
  var n, i, a, s, c, l, f = 0, d = !1, h = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(I8);
  t = O0(t) || 0, M8(r) && (d = !!r.leading, h = "maxWait" in r, a = h ? k8(O0(r.maxWait) || 0, t) : a, v = "trailing" in r ? !!r.trailing : v);
  function g(E) {
    var C = n, M = i;
    return n = i = void 0, f = E, s = e.apply(M, C), s;
  }
  function x(E) {
    return f = E, c = setTimeout(A, t), d ? g(E) : s;
  }
  function y(E) {
    var C = E - l, M = E - f, F = t - C;
    return h ? j8(F, a - M) : F;
  }
  function w(E) {
    var C = E - l, M = E - f;
    return l === void 0 || C >= t || C < 0 || h && M >= a;
  }
  function A() {
    var E = Xd();
    if (w(E))
      return O(E);
    c = setTimeout(A, y(E));
  }
  function O(E) {
    return c = void 0, v && n ? g(E) : (n = i = void 0, s);
  }
  function S() {
    c !== void 0 && clearTimeout(c), f = 0, n = l = i = c = void 0;
  }
  function _() {
    return c === void 0 ? s : O(Xd());
  }
  function b() {
    var E = Xd(), C = w(E);
    if (n = arguments, i = this, l = E, C) {
      if (c === void 0)
        return x(l);
      if (h)
        return clearTimeout(c), c = setTimeout(A, t), g(l);
    }
    return c === void 0 && (c = setTimeout(A, t)), s;
  }
  return b.cancel = S, b.flush = _, b;
}
var N8 = R8, D8 = N8, L8 = mi, B8 = "Expected a function";
function F8(e, t, r) {
  var n = !0, i = !0;
  if (typeof e != "function")
    throw new TypeError(B8);
  return L8(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), D8(e, t, {
    leading: n,
    maxWait: t,
    trailing: i
  });
}
var W8 = F8;
const dO = /* @__PURE__ */ Je(W8);
function _s(e) {
  "@babel/helpers - typeof";
  return _s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _s(e);
}
function A0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? A0(Object(r), !0).forEach(function(n) {
      z8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : A0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function z8(e, t, r) {
  return t = U8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function U8(e) {
  var t = H8(e, "string");
  return _s(t) == "symbol" ? t : String(t);
}
function H8(e, t) {
  if (_s(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (_s(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function G8(e, t) {
  return Y8(e) || V8(e, t) || K8(e, t) || q8();
}
function q8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K8(e, t) {
  if (e) {
    if (typeof e == "string") return S0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return S0(e, t);
  }
}
function S0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function V8(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function Y8(e) {
  if (Array.isArray(e)) return e;
}
var X8 = /* @__PURE__ */ Rn(function(e, t) {
  var r = e.aspect, n = e.initialDimension, i = n === void 0 ? {
    width: -1,
    height: -1
  } : n, a = e.width, s = a === void 0 ? "100%" : a, c = e.height, l = c === void 0 ? "100%" : c, f = e.minWidth, d = f === void 0 ? 0 : f, h = e.minHeight, v = e.maxHeight, g = e.children, x = e.debounce, y = x === void 0 ? 0 : x, w = e.id, A = e.className, O = e.onResize, S = e.style, _ = S === void 0 ? {} : S, b = La(null), E = La();
  E.current = O, R1(t, function() {
    return Object.defineProperty(b.current, "current", {
      get: function() {
        return console.warn("The usage of ref.current.current is deprecated and will no longer be supported."), b.current;
      },
      configurable: !0
    });
  });
  var C = jn({
    containerWidth: i.width,
    containerHeight: i.height
  }), M = G8(C, 2), F = M[0], D = M[1], B = Ia(function(U, z) {
    D(function(J) {
      var H = Math.round(U), Z = Math.round(z);
      return J.containerWidth === H && J.containerHeight === Z ? J : {
        containerWidth: H,
        containerHeight: Z
      };
    });
  }, []);
  ea(function() {
    var U = function(se) {
      var G, Y = se[0].contentRect, ae = Y.width, ce = Y.height;
      B(ae, ce), (G = E.current) === null || G === void 0 || G.call(E, ae, ce);
    };
    y > 0 && (U = dO(U, y, {
      trailing: !0,
      leading: !1
    }));
    var z = new ResizeObserver(U), J = b.current.getBoundingClientRect(), H = J.width, Z = J.height;
    return B(H, Z), z.observe(b.current), function() {
      z.disconnect();
    };
  }, [B, y]);
  var N = nu(function() {
    var U = F.containerWidth, z = F.containerHeight;
    if (U < 0 || z < 0)
      return null;
    Vr(Fi(s) || Fi(l), `The width(%s) and height(%s) are both fixed numbers,
       maybe you don't need to use a ResponsiveContainer.`, s, l), Vr(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
    var J = Fi(s) ? U : s, H = Fi(l) ? z : l;
    r && r > 0 && (J ? H = J / r : H && (J = H * r), v && H > v && (H = v)), Vr(J > 0 || H > 0, `The width(%s) and height(%s) of chart should be greater than 0,
       please check the style of container, or the props width(%s) and height(%s),
       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the
       height and width.`, J, H, s, l, d, h, r);
    var Z = !Array.isArray(g) && Eh.isElement(g) && Mn(g.type).endsWith("Chart");
    return k.Children.map(g, function(q) {
      return Eh.isElement(q) ? /* @__PURE__ */ At(q, fc({
        width: J,
        height: H
      }, Z ? {
        style: fc({
          height: "100%",
          width: "100%",
          maxHeight: H,
          maxWidth: J
        }, q.props.style)
      } : {})) : q;
    });
  }, [r, g, l, v, h, d, F, s]);
  return /* @__PURE__ */ k.createElement("div", {
    id: w ? "".concat(w) : void 0,
    className: Me("recharts-responsive-container", A),
    style: fc(fc({}, _), {}, {
      width: s,
      height: l,
      minWidth: d,
      minHeight: h,
      maxHeight: v
    }),
    ref: b
  }, N);
}), Nv = function(t) {
  return null;
};
Nv.displayName = "Cell";
function Os(e) {
  "@babel/helpers - typeof";
  return Os = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Os(e);
}
function P0(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ep(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? P0(Object(r), !0).forEach(function(n) {
      Z8(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : P0(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Z8(e, t, r) {
  return t = J8(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function J8(e) {
  var t = Q8(e, "string");
  return Os(t) == "symbol" ? t : String(t);
}
function Q8(e, t) {
  if (Os(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Os(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Oa = {
  widthCache: {},
  cacheCount: 0
}, eH = 2e3, tH = {
  position: "absolute",
  top: "-20000px",
  left: 0,
  padding: 0,
  margin: 0,
  border: "none",
  whiteSpace: "pre"
}, E0 = "recharts_measurement_span";
function rH(e) {
  var t = ep({}, e);
  return Object.keys(t).forEach(function(r) {
    t[r] || delete t[r];
  }), t;
}
var ls = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (t == null || Yr.isSsr)
    return {
      width: 0,
      height: 0
    };
  var n = rH(r), i = JSON.stringify({
    text: t,
    copyStyle: n
  });
  if (Oa.widthCache[i])
    return Oa.widthCache[i];
  try {
    var a = document.getElementById(E0);
    a || (a = document.createElement("span"), a.setAttribute("id", E0), a.setAttribute("aria-hidden", "true"), document.body.appendChild(a));
    var s = ep(ep({}, tH), n);
    Object.assign(a.style, s), a.textContent = "".concat(t);
    var c = a.getBoundingClientRect(), l = {
      width: c.width,
      height: c.height
    };
    return Oa.widthCache[i] = l, ++Oa.cacheCount > eH && (Oa.cacheCount = 0, Oa.widthCache = {}), l;
  } catch {
    return {
      width: 0,
      height: 0
    };
  }
}, nH = function(t) {
  return {
    top: t.top + window.scrollY - document.documentElement.clientTop,
    left: t.left + window.scrollX - document.documentElement.clientLeft
  };
};
function As(e) {
  "@babel/helpers - typeof";
  return As = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, As(e);
}
function Wc(e, t) {
  return sH(e) || oH(e, t) || aH(e, t) || iH();
}
function iH() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function aH(e, t) {
  if (e) {
    if (typeof e == "string") return T0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return T0(e, t);
  }
}
function T0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function oH(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function sH(e) {
  if (Array.isArray(e)) return e;
}
function uH(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $0(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, lH(n.key), n);
  }
}
function cH(e, t, r) {
  return t && $0(e.prototype, t), r && $0(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lH(e) {
  var t = fH(e, "string");
  return As(t) == "symbol" ? t : String(t);
}
function fH(e, t) {
  if (As(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (As(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
var C0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, M0 = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/, dH = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/, hH = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/, hO = {
  cm: 96 / 2.54,
  mm: 96 / 25.4,
  pt: 96 / 72,
  pc: 96 / 6,
  in: 96,
  Q: 96 / (2.54 * 40),
  px: 1
}, pH = Object.keys(hO), Ta = "NaN";
function vH(e, t) {
  return e * hO[t];
}
var dc = /* @__PURE__ */ function() {
  function e(t, r) {
    uH(this, e), this.num = t, this.unit = r, this.num = t, this.unit = r, Number.isNaN(t) && (this.unit = ""), r !== "" && !dH.test(r) && (this.num = NaN, this.unit = ""), pH.includes(r) && (this.num = vH(t, r), this.unit = "px");
  }
  return cH(e, [{
    key: "add",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num + r.num, this.unit);
    }
  }, {
    key: "subtract",
    value: function(r) {
      return this.unit !== r.unit ? new e(NaN, "") : new e(this.num - r.num, this.unit);
    }
  }, {
    key: "multiply",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num * r.num, this.unit || r.unit);
    }
  }, {
    key: "divide",
    value: function(r) {
      return this.unit !== "" && r.unit !== "" && this.unit !== r.unit ? new e(NaN, "") : new e(this.num / r.num, this.unit || r.unit);
    }
  }, {
    key: "toString",
    value: function() {
      return "".concat(this.num).concat(this.unit);
    }
  }, {
    key: "isNaN",
    value: function() {
      return Number.isNaN(this.num);
    }
  }], [{
    key: "parse",
    value: function(r) {
      var n, i = (n = hH.exec(r)) !== null && n !== void 0 ? n : [], a = Wc(i, 3), s = a[1], c = a[2];
      return new e(parseFloat(s), c ?? "");
    }
  }]), e;
}();
function pO(e) {
  if (e.includes(Ta))
    return Ta;
  for (var t = e; t.includes("*") || t.includes("/"); ) {
    var r, n = (r = C0.exec(t)) !== null && r !== void 0 ? r : [], i = Wc(n, 4), a = i[1], s = i[2], c = i[3], l = dc.parse(a ?? ""), f = dc.parse(c ?? ""), d = s === "*" ? l.multiply(f) : l.divide(f);
    if (d.isNaN())
      return Ta;
    t = t.replace(C0, d.toString());
  }
  for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
    var h, v = (h = M0.exec(t)) !== null && h !== void 0 ? h : [], g = Wc(v, 4), x = g[1], y = g[2], w = g[3], A = dc.parse(x ?? ""), O = dc.parse(w ?? ""), S = y === "+" ? A.add(O) : A.subtract(O);
    if (S.isNaN())
      return Ta;
    t = t.replace(M0, S.toString());
  }
  return t;
}
var I0 = /\(([^()]*)\)/;
function gH(e) {
  for (var t = e; t.includes("("); ) {
    var r = I0.exec(t), n = Wc(r, 2), i = n[1];
    t = t.replace(I0, pO(i));
  }
  return t;
}
function yH(e) {
  var t = e.replace(/\s+/g, "");
  return t = gH(t), t = pO(t), t;
}
function mH(e) {
  try {
    return yH(e);
  } catch {
    return Ta;
  }
}
function Zd(e) {
  var t = mH(e.slice(5, -1));
  return t === Ta ? "" : t;
}
var bH = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"], xH = ["dx", "dy", "angle", "className", "breakAll"];
function tp() {
  return tp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, tp.apply(this, arguments);
}
function k0(e, t) {
  if (e == null) return {};
  var r = wH(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function wH(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function j0(e, t) {
  return SH(e) || AH(e, t) || OH(e, t) || _H();
}
function _H() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function OH(e, t) {
  if (e) {
    if (typeof e == "string") return R0(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return R0(e, t);
  }
}
function R0(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function AH(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function SH(e) {
  if (Array.isArray(e)) return e;
}
var vO = /[ \f\n\r\t\v\u2028\u2029]+/, gO = function(t) {
  var r = t.children, n = t.breakAll, i = t.style;
  try {
    var a = [];
    Te(r) || (n ? a = r.toString().split("") : a = r.toString().split(vO));
    var s = a.map(function(l) {
      return {
        word: l,
        width: ls(l, i).width
      };
    }), c = n ? 0 : ls(" ", i).width;
    return {
      wordsWithComputedWidth: s,
      spaceWidth: c
    };
  } catch {
    return null;
  }
}, PH = function(t, r, n, i, a) {
  var s = t.maxLines, c = t.children, l = t.style, f = t.breakAll, d = oe(s), h = c, v = function() {
    var J = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    return J.reduce(function(H, Z) {
      var q = Z.word, se = Z.width, G = H[H.length - 1];
      if (G && (i == null || a || G.width + se + n < Number(i)))
        G.words.push(q), G.width += se + n;
      else {
        var Y = {
          words: [q],
          width: se
        };
        H.push(Y);
      }
      return H;
    }, []);
  }, g = v(r), x = function(J) {
    return J.reduce(function(H, Z) {
      return H.width > Z.width ? H : Z;
    });
  };
  if (!d)
    return g;
  for (var y = "…", w = function(J) {
    var H = h.slice(0, J), Z = gO({
      breakAll: f,
      style: l,
      children: H + y
    }).wordsWithComputedWidth, q = v(Z), se = q.length > s || x(q).width > Number(i);
    return [se, q];
  }, A = 0, O = h.length - 1, S = 0, _; A <= O && S <= h.length - 1; ) {
    var b = Math.floor((A + O) / 2), E = b - 1, C = w(E), M = j0(C, 2), F = M[0], D = M[1], B = w(b), N = j0(B, 1), U = N[0];
    if (!F && !U && (A = b + 1), F && U && (O = b - 1), !F && U) {
      _ = D;
      break;
    }
    S++;
  }
  return _ || g;
}, N0 = function(t) {
  var r = Te(t) ? [] : t.toString().split(vO);
  return [{
    words: r
  }];
}, EH = function(t) {
  var r = t.width, n = t.scaleToFit, i = t.children, a = t.style, s = t.breakAll, c = t.maxLines;
  if ((r || n) && !Yr.isSsr) {
    var l, f, d = gO({
      breakAll: s,
      children: i,
      style: a
    });
    if (d) {
      var h = d.wordsWithComputedWidth, v = d.spaceWidth;
      l = h, f = v;
    } else
      return N0(i);
    return PH({
      breakAll: s,
      children: i,
      maxLines: c,
      style: a
    }, l, f, r, n);
  }
  return N0(i);
}, D0 = "#808080", hi = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, s = t.lineHeight, c = s === void 0 ? "1em" : s, l = t.capHeight, f = l === void 0 ? "0.71em" : l, d = t.scaleToFit, h = d === void 0 ? !1 : d, v = t.textAnchor, g = v === void 0 ? "start" : v, x = t.verticalAnchor, y = x === void 0 ? "end" : x, w = t.fill, A = w === void 0 ? D0 : w, O = k0(t, bH), S = nu(function() {
    return EH({
      breakAll: O.breakAll,
      children: O.children,
      maxLines: O.maxLines,
      scaleToFit: h,
      style: O.style,
      width: O.width
    });
  }, [O.breakAll, O.children, O.maxLines, h, O.style, O.width]), _ = O.dx, b = O.dy, E = O.angle, C = O.className, M = O.breakAll, F = k0(O, xH);
  if (!Et(n) || !Et(a))
    return null;
  var D = n + (oe(_) ? _ : 0), B = a + (oe(b) ? b : 0), N;
  switch (y) {
    case "start":
      N = Zd("calc(".concat(f, ")"));
      break;
    case "middle":
      N = Zd("calc(".concat((S.length - 1) / 2, " * -").concat(c, " + (").concat(f, " / 2))"));
      break;
    default:
      N = Zd("calc(".concat(S.length - 1, " * -").concat(c, ")"));
      break;
  }
  var U = [];
  if (h) {
    var z = S[0].width, J = O.width;
    U.push("scale(".concat((oe(J) ? J / z : 1) / z, ")"));
  }
  return E && U.push("rotate(".concat(E, ", ").concat(D, ", ").concat(B, ")")), U.length && (F.transform = U.join(" ")), /* @__PURE__ */ k.createElement("text", tp({}, me(F, !0), {
    x: D,
    y: B,
    className: Me("recharts-text", C),
    textAnchor: g,
    fill: A.includes("url") ? D0 : A
  }), S.map(function(H, Z) {
    var q = H.words.join(M ? "" : " ");
    return /* @__PURE__ */ k.createElement("tspan", {
      x: D,
      dy: Z === 0 ? N : c,
      key: q
    }, q);
  }));
};
function di(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function TH(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Dv(e) {
  let t, r, n;
  e.length !== 2 ? (t = di, r = (c, l) => di(e(c), l), n = (c, l) => e(c) - l) : (t = e === di || e === TH ? e : $H, r = e, n = e);
  function i(c, l, f = 0, d = c.length) {
    if (f < d) {
      if (t(l, l) !== 0) return d;
      do {
        const h = f + d >>> 1;
        r(c[h], l) < 0 ? f = h + 1 : d = h;
      } while (f < d);
    }
    return f;
  }
  function a(c, l, f = 0, d = c.length) {
    if (f < d) {
      if (t(l, l) !== 0) return d;
      do {
        const h = f + d >>> 1;
        r(c[h], l) <= 0 ? f = h + 1 : d = h;
      } while (f < d);
    }
    return f;
  }
  function s(c, l, f = 0, d = c.length) {
    const h = i(c, l, f, d - 1);
    return h > f && n(c[h - 1], l) > -n(c[h], l) ? h - 1 : h;
  }
  return { left: i, center: s, right: a };
}
function $H() {
  return 0;
}
function yO(e) {
  return e === null ? NaN : +e;
}
function* CH(e, t) {
  for (let r of e)
    r != null && (r = +r) >= r && (yield r);
}
const MH = Dv(di), su = MH.right;
Dv(yO).center;
class L0 extends Map {
  constructor(t, r = jH) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: r } }), t != null) for (const [n, i] of t) this.set(n, i);
  }
  get(t) {
    return super.get(B0(this, t));
  }
  has(t) {
    return super.has(B0(this, t));
  }
  set(t, r) {
    return super.set(IH(this, t), r);
  }
  delete(t) {
    return super.delete(kH(this, t));
  }
}
function B0({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : r;
}
function IH({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) ? e.get(n) : (e.set(n, r), r);
}
function kH({ _intern: e, _key: t }, r) {
  const n = t(r);
  return e.has(n) && (r = e.get(n), e.delete(n)), r;
}
function jH(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
function RH(e = di) {
  if (e === di) return mO;
  if (typeof e != "function") throw new TypeError("compare is not a function");
  return (t, r) => {
    const n = e(t, r);
    return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0);
  };
}
function mO(e, t) {
  return (e == null || !(e >= e)) - (t == null || !(t >= t)) || (e < t ? -1 : e > t ? 1 : 0);
}
const NH = Math.sqrt(50), DH = Math.sqrt(10), LH = Math.sqrt(2);
function zc(e, t, r) {
  const n = (t - e) / Math.max(0, r), i = Math.floor(Math.log10(n)), a = n / Math.pow(10, i), s = a >= NH ? 10 : a >= DH ? 5 : a >= LH ? 2 : 1;
  let c, l, f;
  return i < 0 ? (f = Math.pow(10, -i) / s, c = Math.round(e * f), l = Math.round(t * f), c / f < e && ++c, l / f > t && --l, f = -f) : (f = Math.pow(10, i) * s, c = Math.round(e / f), l = Math.round(t / f), c * f < e && ++c, l * f > t && --l), l < c && 0.5 <= r && r < 2 ? zc(e, t, r * 2) : [c, l, f];
}
function rp(e, t, r) {
  if (t = +t, e = +e, r = +r, !(r > 0)) return [];
  if (e === t) return [e];
  const n = t < e, [i, a, s] = n ? zc(t, e, r) : zc(e, t, r);
  if (!(a >= i)) return [];
  const c = a - i + 1, l = new Array(c);
  if (n)
    if (s < 0) for (let f = 0; f < c; ++f) l[f] = (a - f) / -s;
    else for (let f = 0; f < c; ++f) l[f] = (a - f) * s;
  else if (s < 0) for (let f = 0; f < c; ++f) l[f] = (i + f) / -s;
  else for (let f = 0; f < c; ++f) l[f] = (i + f) * s;
  return l;
}
function np(e, t, r) {
  return t = +t, e = +e, r = +r, zc(e, t, r)[2];
}
function ip(e, t, r) {
  t = +t, e = +e, r = +r;
  const n = t < e, i = n ? np(t, e, r) : np(e, t, r);
  return (n ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function F0(e, t) {
  let r;
  for (const n of e)
    n != null && (r < n || r === void 0 && n >= n) && (r = n);
  return r;
}
function W0(e, t) {
  let r;
  for (const n of e)
    n != null && (r > n || r === void 0 && n >= n) && (r = n);
  return r;
}
function bO(e, t, r = 0, n = 1 / 0, i) {
  if (t = Math.floor(t), r = Math.floor(Math.max(0, r)), n = Math.floor(Math.min(e.length - 1, n)), !(r <= t && t <= n)) return e;
  for (i = i === void 0 ? mO : RH(i); n > r; ) {
    if (n - r > 600) {
      const l = n - r + 1, f = t - r + 1, d = Math.log(l), h = 0.5 * Math.exp(2 * d / 3), v = 0.5 * Math.sqrt(d * h * (l - h) / l) * (f - l / 2 < 0 ? -1 : 1), g = Math.max(r, Math.floor(t - f * h / l + v)), x = Math.min(n, Math.floor(t + (l - f) * h / l + v));
      bO(e, t, g, x, i);
    }
    const a = e[t];
    let s = r, c = n;
    for (Qo(e, r, t), i(e[n], a) > 0 && Qo(e, r, n); s < c; ) {
      for (Qo(e, s, c), ++s, --c; i(e[s], a) < 0; ) ++s;
      for (; i(e[c], a) > 0; ) --c;
    }
    i(e[r], a) === 0 ? Qo(e, r, c) : (++c, Qo(e, c, n)), c <= t && (r = c + 1), t <= c && (n = c - 1);
  }
  return e;
}
function Qo(e, t, r) {
  const n = e[t];
  e[t] = e[r], e[r] = n;
}
function BH(e, t, r) {
  if (e = Float64Array.from(CH(e)), !(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return W0(e);
    if (t >= 1) return F0(e);
    var n, i = (n - 1) * t, a = Math.floor(i), s = F0(bO(e, a).subarray(0, a + 1)), c = W0(e.subarray(a + 1));
    return s + (c - s) * (i - a);
  }
}
function FH(e, t, r = yO) {
  if (!(!(n = e.length) || isNaN(t = +t))) {
    if (t <= 0 || n < 2) return +r(e[0], 0, e);
    if (t >= 1) return +r(e[n - 1], n - 1, e);
    var n, i = (n - 1) * t, a = Math.floor(i), s = +r(e[a], a, e), c = +r(e[a + 1], a + 1, e);
    return s + (c - s) * (i - a);
  }
}
function WH(e, t, r) {
  e = +e, t = +t, r = (i = arguments.length) < 2 ? (t = e, e = 0, 1) : i < 3 ? 1 : +r;
  for (var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i); ++n < i; )
    a[n] = e + n * r;
  return a;
}
function Dr(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Un(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const ap = Symbol("implicit");
function Lv() {
  var e = new L0(), t = [], r = [], n = ap;
  function i(a) {
    let s = e.get(a);
    if (s === void 0) {
      if (n !== ap) return n;
      e.set(a, s = t.push(a) - 1);
    }
    return r[s % r.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return t.slice();
    t = [], e = new L0();
    for (const s of a)
      e.has(s) || e.set(s, t.push(s) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (r = Array.from(a), i) : r.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return Lv(t, r).unknown(n);
  }, Dr.apply(i, arguments), i;
}
function Ss() {
  var e = Lv().unknown(void 0), t = e.domain, r = e.range, n = 0, i = 1, a, s, c = !1, l = 0, f = 0, d = 0.5;
  delete e.unknown;
  function h() {
    var v = t().length, g = i < n, x = g ? i : n, y = g ? n : i;
    a = (y - x) / Math.max(1, v - l + f * 2), c && (a = Math.floor(a)), x += (y - x - a * (v - l)) * d, s = a * (1 - l), c && (x = Math.round(x), s = Math.round(s));
    var w = WH(v).map(function(A) {
      return x + a * A;
    });
    return r(g ? w.reverse() : w);
  }
  return e.domain = function(v) {
    return arguments.length ? (t(v), h()) : t();
  }, e.range = function(v) {
    return arguments.length ? ([n, i] = v, n = +n, i = +i, h()) : [n, i];
  }, e.rangeRound = function(v) {
    return [n, i] = v, n = +n, i = +i, c = !0, h();
  }, e.bandwidth = function() {
    return s;
  }, e.step = function() {
    return a;
  }, e.round = function(v) {
    return arguments.length ? (c = !!v, h()) : c;
  }, e.padding = function(v) {
    return arguments.length ? (l = Math.min(1, f = +v), h()) : l;
  }, e.paddingInner = function(v) {
    return arguments.length ? (l = Math.min(1, v), h()) : l;
  }, e.paddingOuter = function(v) {
    return arguments.length ? (f = +v, h()) : f;
  }, e.align = function(v) {
    return arguments.length ? (d = Math.max(0, Math.min(1, v)), h()) : d;
  }, e.copy = function() {
    return Ss(t(), [n, i]).round(c).paddingInner(l).paddingOuter(f).align(d);
  }, Dr.apply(h(), arguments);
}
function xO(e) {
  var t = e.copy;
  return e.padding = e.paddingOuter, delete e.paddingInner, delete e.paddingOuter, e.copy = function() {
    return xO(t());
  }, e;
}
function fs() {
  return xO(Ss.apply(null, arguments).paddingInner(1));
}
function Bv(e, t, r) {
  e.prototype = t.prototype = r, r.constructor = e;
}
function wO(e, t) {
  var r = Object.create(e.prototype);
  for (var n in t) r[n] = t[n];
  return r;
}
function uu() {
}
var Ps = 0.7, Uc = 1 / Ps, Ra = "\\s*([+-]?\\d+)\\s*", Es = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", un = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", zH = /^#([0-9a-f]{3,8})$/, UH = new RegExp(`^rgb\\(${Ra},${Ra},${Ra}\\)$`), HH = new RegExp(`^rgb\\(${un},${un},${un}\\)$`), GH = new RegExp(`^rgba\\(${Ra},${Ra},${Ra},${Es}\\)$`), qH = new RegExp(`^rgba\\(${un},${un},${un},${Es}\\)$`), KH = new RegExp(`^hsl\\(${Es},${un},${un}\\)$`), VH = new RegExp(`^hsla\\(${Es},${un},${un},${Es}\\)$`), z0 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Bv(uu, Ts, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: U0,
  // Deprecated! Use color.formatHex.
  formatHex: U0,
  formatHex8: YH,
  formatHsl: XH,
  formatRgb: H0,
  toString: H0
});
function U0() {
  return this.rgb().formatHex();
}
function YH() {
  return this.rgb().formatHex8();
}
function XH() {
  return _O(this).formatHsl();
}
function H0() {
  return this.rgb().formatRgb();
}
function Ts(e) {
  var t, r;
  return e = (e + "").trim().toLowerCase(), (t = zH.exec(e)) ? (r = t[1].length, t = parseInt(t[1], 16), r === 6 ? G0(t) : r === 3 ? new Qt(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : r === 8 ? hc(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : r === 4 ? hc(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = UH.exec(e)) ? new Qt(t[1], t[2], t[3], 1) : (t = HH.exec(e)) ? new Qt(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = GH.exec(e)) ? hc(t[1], t[2], t[3], t[4]) : (t = qH.exec(e)) ? hc(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = KH.exec(e)) ? V0(t[1], t[2] / 100, t[3] / 100, 1) : (t = VH.exec(e)) ? V0(t[1], t[2] / 100, t[3] / 100, t[4]) : z0.hasOwnProperty(e) ? G0(z0[e]) : e === "transparent" ? new Qt(NaN, NaN, NaN, 0) : null;
}
function G0(e) {
  return new Qt(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function hc(e, t, r, n) {
  return n <= 0 && (e = t = r = NaN), new Qt(e, t, r, n);
}
function ZH(e) {
  return e instanceof uu || (e = Ts(e)), e ? (e = e.rgb(), new Qt(e.r, e.g, e.b, e.opacity)) : new Qt();
}
function op(e, t, r, n) {
  return arguments.length === 1 ? ZH(e) : new Qt(e, t, r, n ?? 1);
}
function Qt(e, t, r, n) {
  this.r = +e, this.g = +t, this.b = +r, this.opacity = +n;
}
Bv(Qt, op, wO(uu, {
  brighter(e) {
    return e = e == null ? Uc : Math.pow(Uc, e), new Qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ps : Math.pow(Ps, e), new Qt(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Qt(qi(this.r), qi(this.g), qi(this.b), Hc(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: q0,
  // Deprecated! Use color.formatHex.
  formatHex: q0,
  formatHex8: JH,
  formatRgb: K0,
  toString: K0
}));
function q0() {
  return `#${Wi(this.r)}${Wi(this.g)}${Wi(this.b)}`;
}
function JH() {
  return `#${Wi(this.r)}${Wi(this.g)}${Wi(this.b)}${Wi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function K0() {
  const e = Hc(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${qi(this.r)}, ${qi(this.g)}, ${qi(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Hc(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function qi(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function Wi(e) {
  return e = qi(e), (e < 16 ? "0" : "") + e.toString(16);
}
function V0(e, t, r, n) {
  return n <= 0 ? e = t = r = NaN : r <= 0 || r >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new qr(e, t, r, n);
}
function _O(e) {
  if (e instanceof qr) return new qr(e.h, e.s, e.l, e.opacity);
  if (e instanceof uu || (e = Ts(e)), !e) return new qr();
  if (e instanceof qr) return e;
  e = e.rgb();
  var t = e.r / 255, r = e.g / 255, n = e.b / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), s = NaN, c = a - i, l = (a + i) / 2;
  return c ? (t === a ? s = (r - n) / c + (r < n) * 6 : r === a ? s = (n - t) / c + 2 : s = (t - r) / c + 4, c /= l < 0.5 ? a + i : 2 - a - i, s *= 60) : c = l > 0 && l < 1 ? 0 : s, new qr(s, c, l, e.opacity);
}
function QH(e, t, r, n) {
  return arguments.length === 1 ? _O(e) : new qr(e, t, r, n ?? 1);
}
function qr(e, t, r, n) {
  this.h = +e, this.s = +t, this.l = +r, this.opacity = +n;
}
Bv(qr, QH, wO(uu, {
  brighter(e) {
    return e = e == null ? Uc : Math.pow(Uc, e), new qr(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Ps : Math.pow(Ps, e), new qr(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, r = this.l, n = r + (r < 0.5 ? r : 1 - r) * t, i = 2 * r - n;
    return new Qt(
      Jd(e >= 240 ? e - 240 : e + 120, i, n),
      Jd(e, i, n),
      Jd(e < 120 ? e + 240 : e - 120, i, n),
      this.opacity
    );
  },
  clamp() {
    return new qr(Y0(this.h), pc(this.s), pc(this.l), Hc(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Hc(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Y0(this.h)}, ${pc(this.s) * 100}%, ${pc(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Y0(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function pc(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Jd(e, t, r) {
  return (e < 60 ? t + (r - t) * e / 60 : e < 180 ? r : e < 240 ? t + (r - t) * (240 - e) / 60 : t) * 255;
}
const Fv = (e) => () => e;
function eG(e, t) {
  return function(r) {
    return e + r * t;
  };
}
function tG(e, t, r) {
  return e = Math.pow(e, r), t = Math.pow(t, r) - e, r = 1 / r, function(n) {
    return Math.pow(e + n * t, r);
  };
}
function rG(e) {
  return (e = +e) == 1 ? OO : function(t, r) {
    return r - t ? tG(t, r, e) : Fv(isNaN(t) ? r : t);
  };
}
function OO(e, t) {
  var r = t - e;
  return r ? eG(e, r) : Fv(isNaN(e) ? t : e);
}
const X0 = function e(t) {
  var r = rG(t);
  function n(i, a) {
    var s = r((i = op(i)).r, (a = op(a)).r), c = r(i.g, a.g), l = r(i.b, a.b), f = OO(i.opacity, a.opacity);
    return function(d) {
      return i.r = s(d), i.g = c(d), i.b = l(d), i.opacity = f(d), i + "";
    };
  }
  return n.gamma = e, n;
}(1);
function nG(e, t) {
  t || (t = []);
  var r = e ? Math.min(t.length, e.length) : 0, n = t.slice(), i;
  return function(a) {
    for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a;
    return n;
  };
}
function iG(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function aG(e, t) {
  var r = t ? t.length : 0, n = e ? Math.min(r, e.length) : 0, i = new Array(n), a = new Array(r), s;
  for (s = 0; s < n; ++s) i[s] = wo(e[s], t[s]);
  for (; s < r; ++s) a[s] = t[s];
  return function(c) {
    for (s = 0; s < n; ++s) a[s] = i[s](c);
    return a;
  };
}
function oG(e, t) {
  var r = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(n) {
    return r.setTime(e * (1 - n) + t * n), r;
  };
}
function Gc(e, t) {
  return e = +e, t = +t, function(r) {
    return e * (1 - r) + t * r;
  };
}
function sG(e, t) {
  var r = {}, n = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? r[i] = wo(e[i], t[i]) : n[i] = t[i];
  return function(a) {
    for (i in r) n[i] = r[i](a);
    return n;
  };
}
var sp = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Qd = new RegExp(sp.source, "g");
function uG(e) {
  return function() {
    return e;
  };
}
function cG(e) {
  return function(t) {
    return e(t) + "";
  };
}
function lG(e, t) {
  var r = sp.lastIndex = Qd.lastIndex = 0, n, i, a, s = -1, c = [], l = [];
  for (e = e + "", t = t + ""; (n = sp.exec(e)) && (i = Qd.exec(t)); )
    (a = i.index) > r && (a = t.slice(r, a), c[s] ? c[s] += a : c[++s] = a), (n = n[0]) === (i = i[0]) ? c[s] ? c[s] += i : c[++s] = i : (c[++s] = null, l.push({ i: s, x: Gc(n, i) })), r = Qd.lastIndex;
  return r < t.length && (a = t.slice(r), c[s] ? c[s] += a : c[++s] = a), c.length < 2 ? l[0] ? cG(l[0].x) : uG(t) : (t = l.length, function(f) {
    for (var d = 0, h; d < t; ++d) c[(h = l[d]).i] = h.x(f);
    return c.join("");
  });
}
function wo(e, t) {
  var r = typeof t, n;
  return t == null || r === "boolean" ? Fv(t) : (r === "number" ? Gc : r === "string" ? (n = Ts(t)) ? (t = n, X0) : lG : t instanceof Ts ? X0 : t instanceof Date ? oG : iG(t) ? nG : Array.isArray(t) ? aG : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? sG : Gc)(e, t);
}
function Wv(e, t) {
  return e = +e, t = +t, function(r) {
    return Math.round(e * (1 - r) + t * r);
  };
}
function fG(e, t) {
  t === void 0 && (t = e, e = wo);
  for (var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n); r < n; ) a[r] = e(i, i = t[++r]);
  return function(s) {
    var c = Math.max(0, Math.min(n - 1, Math.floor(s *= n)));
    return a[c](s - c);
  };
}
function dG(e) {
  return function() {
    return e;
  };
}
function qc(e) {
  return +e;
}
var Z0 = [0, 1];
function Kt(e) {
  return e;
}
function up(e, t) {
  return (t -= e = +e) ? function(r) {
    return (r - e) / t;
  } : dG(isNaN(t) ? NaN : 0.5);
}
function hG(e, t) {
  var r;
  return e > t && (r = e, e = t, t = r), function(n) {
    return Math.max(e, Math.min(t, n));
  };
}
function pG(e, t, r) {
  var n = e[0], i = e[1], a = t[0], s = t[1];
  return i < n ? (n = up(i, n), a = r(s, a)) : (n = up(n, i), a = r(a, s)), function(c) {
    return a(n(c));
  };
}
function vG(e, t, r) {
  var n = Math.min(e.length, t.length) - 1, i = new Array(n), a = new Array(n), s = -1;
  for (e[n] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < n; )
    i[s] = up(e[s], e[s + 1]), a[s] = r(t[s], t[s + 1]);
  return function(c) {
    var l = su(e, c, 1, n) - 1;
    return a[l](i[l](c));
  };
}
function cu(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Ul() {
  var e = Z0, t = Z0, r = wo, n, i, a, s = Kt, c, l, f;
  function d() {
    var v = Math.min(e.length, t.length);
    return s !== Kt && (s = hG(e[0], e[v - 1])), c = v > 2 ? vG : pG, l = f = null, h;
  }
  function h(v) {
    return v == null || isNaN(v = +v) ? a : (l || (l = c(e.map(n), t, r)))(n(s(v)));
  }
  return h.invert = function(v) {
    return s(i((f || (f = c(t, e.map(n), Gc)))(v)));
  }, h.domain = function(v) {
    return arguments.length ? (e = Array.from(v, qc), d()) : e.slice();
  }, h.range = function(v) {
    return arguments.length ? (t = Array.from(v), d()) : t.slice();
  }, h.rangeRound = function(v) {
    return t = Array.from(v), r = Wv, d();
  }, h.clamp = function(v) {
    return arguments.length ? (s = v ? !0 : Kt, d()) : s !== Kt;
  }, h.interpolate = function(v) {
    return arguments.length ? (r = v, d()) : r;
  }, h.unknown = function(v) {
    return arguments.length ? (a = v, h) : a;
  }, function(v, g) {
    return n = v, i = g, d();
  };
}
function zv() {
  return Ul()(Kt, Kt);
}
function gG(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Kc(e, t) {
  if ((r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
  var r, n = e.slice(0, r);
  return [
    n.length > 1 ? n[0] + n.slice(2) : n,
    +e.slice(r + 1)
  ];
}
function Ga(e) {
  return e = Kc(Math.abs(e)), e ? e[1] : NaN;
}
function yG(e, t) {
  return function(r, n) {
    for (var i = r.length, a = [], s = 0, c = e[0], l = 0; i > 0 && c > 0 && (l + c + 1 > n && (c = Math.max(1, n - l)), a.push(r.substring(i -= c, i + c)), !((l += c + 1) > n)); )
      c = e[s = (s + 1) % e.length];
    return a.reverse().join(t);
  };
}
function mG(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(r) {
      return e[+r];
    });
  };
}
var bG = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function $s(e) {
  if (!(t = bG.exec(e))) throw new Error("invalid format: " + e);
  var t;
  return new Uv({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
$s.prototype = Uv.prototype;
function Uv(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Uv.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function xG(e) {
  e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
    switch (e[r]) {
      case ".":
        n = i = r;
        break;
      case "0":
        n === 0 && (n = r), i = r;
        break;
      default:
        if (!+e[r]) break e;
        n > 0 && (n = 0);
        break;
    }
  return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e;
}
var AO;
function wG(e, t) {
  var r = Kc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1], a = i - (AO = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, s = n.length;
  return a === s ? n : a > s ? n + new Array(a - s + 1).join("0") : a > 0 ? n.slice(0, a) + "." + n.slice(a) : "0." + new Array(1 - a).join("0") + Kc(e, Math.max(0, t + a - 1))[0];
}
function J0(e, t) {
  var r = Kc(e, t);
  if (!r) return e + "";
  var n = r[0], i = r[1];
  return i < 0 ? "0." + new Array(-i).join("0") + n : n.length > i + 1 ? n.slice(0, i + 1) + "." + n.slice(i + 1) : n + new Array(i - n.length + 2).join("0");
}
const Q0 = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: gG,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => J0(e * 100, t),
  r: J0,
  s: wG,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ex(e) {
  return e;
}
var tx = Array.prototype.map, rx = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function _G(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ex : yG(tx.call(e.grouping, Number), e.thousands + ""), r = e.currency === void 0 ? "" : e.currency[0] + "", n = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? ex : mG(tx.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", c = e.minus === void 0 ? "−" : e.minus + "", l = e.nan === void 0 ? "NaN" : e.nan + "";
  function f(h) {
    h = $s(h);
    var v = h.fill, g = h.align, x = h.sign, y = h.symbol, w = h.zero, A = h.width, O = h.comma, S = h.precision, _ = h.trim, b = h.type;
    b === "n" ? (O = !0, b = "g") : Q0[b] || (S === void 0 && (S = 12), _ = !0, b = "g"), (w || v === "0" && g === "=") && (w = !0, v = "0", g = "=");
    var E = y === "$" ? r : y === "#" && /[boxX]/.test(b) ? "0" + b.toLowerCase() : "", C = y === "$" ? n : /[%p]/.test(b) ? s : "", M = Q0[b], F = /[defgprs%]/.test(b);
    S = S === void 0 ? 6 : /[gprs]/.test(b) ? Math.max(1, Math.min(21, S)) : Math.max(0, Math.min(20, S));
    function D(B) {
      var N = E, U = C, z, J, H;
      if (b === "c")
        U = M(B) + U, B = "";
      else {
        B = +B;
        var Z = B < 0 || 1 / B < 0;
        if (B = isNaN(B) ? l : M(Math.abs(B), S), _ && (B = xG(B)), Z && +B == 0 && x !== "+" && (Z = !1), N = (Z ? x === "(" ? x : c : x === "-" || x === "(" ? "" : x) + N, U = (b === "s" ? rx[8 + AO / 3] : "") + U + (Z && x === "(" ? ")" : ""), F) {
          for (z = -1, J = B.length; ++z < J; )
            if (H = B.charCodeAt(z), 48 > H || H > 57) {
              U = (H === 46 ? i + B.slice(z + 1) : B.slice(z)) + U, B = B.slice(0, z);
              break;
            }
        }
      }
      O && !w && (B = t(B, 1 / 0));
      var q = N.length + B.length + U.length, se = q < A ? new Array(A - q + 1).join(v) : "";
      switch (O && w && (B = t(se + B, se.length ? A - U.length : 1 / 0), se = ""), g) {
        case "<":
          B = N + B + U + se;
          break;
        case "=":
          B = N + se + B + U;
          break;
        case "^":
          B = se.slice(0, q = se.length >> 1) + N + B + U + se.slice(q);
          break;
        default:
          B = se + N + B + U;
          break;
      }
      return a(B);
    }
    return D.toString = function() {
      return h + "";
    }, D;
  }
  function d(h, v) {
    var g = f((h = $s(h), h.type = "f", h)), x = Math.max(-8, Math.min(8, Math.floor(Ga(v) / 3))) * 3, y = Math.pow(10, -x), w = rx[8 + x / 3];
    return function(A) {
      return g(y * A) + w;
    };
  }
  return {
    format: f,
    formatPrefix: d
  };
}
var vc, Hv, SO;
OG({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function OG(e) {
  return vc = _G(e), Hv = vc.format, SO = vc.formatPrefix, vc;
}
function AG(e) {
  return Math.max(0, -Ga(Math.abs(e)));
}
function SG(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ga(t) / 3))) * 3 - Ga(Math.abs(e)));
}
function PG(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ga(t) - Ga(e)) + 1;
}
function PO(e, t, r, n) {
  var i = ip(e, t, r), a;
  switch (n = $s(n ?? ",f"), n.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return n.precision == null && !isNaN(a = SG(i, s)) && (n.precision = a), SO(n, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      n.precision == null && !isNaN(a = PG(i, Math.max(Math.abs(e), Math.abs(t)))) && (n.precision = a - (n.type === "e"));
      break;
    }
    case "f":
    case "%": {
      n.precision == null && !isNaN(a = AG(i)) && (n.precision = a - (n.type === "%") * 2);
      break;
    }
  }
  return Hv(n);
}
function bi(e) {
  var t = e.domain;
  return e.ticks = function(r) {
    var n = t();
    return rp(n[0], n[n.length - 1], r ?? 10);
  }, e.tickFormat = function(r, n) {
    var i = t();
    return PO(i[0], i[i.length - 1], r ?? 10, n);
  }, e.nice = function(r) {
    r == null && (r = 10);
    var n = t(), i = 0, a = n.length - 1, s = n[i], c = n[a], l, f, d = 10;
    for (c < s && (f = s, s = c, c = f, f = i, i = a, a = f); d-- > 0; ) {
      if (f = np(s, c, r), f === l)
        return n[i] = s, n[a] = c, t(n);
      if (f > 0)
        s = Math.floor(s / f) * f, c = Math.ceil(c / f) * f;
      else if (f < 0)
        s = Math.ceil(s * f) / f, c = Math.floor(c * f) / f;
      else
        break;
      l = f;
    }
    return e;
  }, e;
}
function Vc() {
  var e = zv();
  return e.copy = function() {
    return cu(e, Vc());
  }, Dr.apply(e, arguments), bi(e);
}
function EO(e) {
  var t;
  function r(n) {
    return n == null || isNaN(n = +n) ? t : n;
  }
  return r.invert = r, r.domain = r.range = function(n) {
    return arguments.length ? (e = Array.from(n, qc), r) : e.slice();
  }, r.unknown = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.copy = function() {
    return EO(e).unknown(t);
  }, e = arguments.length ? Array.from(e, qc) : [0, 1], bi(r);
}
function TO(e, t) {
  e = e.slice();
  var r = 0, n = e.length - 1, i = e[r], a = e[n], s;
  return a < i && (s = r, r = n, n = s, s = i, i = a, a = s), e[r] = t.floor(i), e[n] = t.ceil(a), e;
}
function nx(e) {
  return Math.log(e);
}
function ix(e) {
  return Math.exp(e);
}
function EG(e) {
  return -Math.log(-e);
}
function TG(e) {
  return -Math.exp(-e);
}
function $G(e) {
  return isFinite(e) ? +("1e" + e) : e < 0 ? 0 : e;
}
function CG(e) {
  return e === 10 ? $G : e === Math.E ? Math.exp : (t) => Math.pow(e, t);
}
function MG(e) {
  return e === Math.E ? Math.log : e === 10 && Math.log10 || e === 2 && Math.log2 || (e = Math.log(e), (t) => Math.log(t) / e);
}
function ax(e) {
  return (t, r) => -e(-t, r);
}
function Gv(e) {
  const t = e(nx, ix), r = t.domain;
  let n = 10, i, a;
  function s() {
    return i = MG(n), a = CG(n), r()[0] < 0 ? (i = ax(i), a = ax(a), e(EG, TG)) : e(nx, ix), t;
  }
  return t.base = function(c) {
    return arguments.length ? (n = +c, s()) : n;
  }, t.domain = function(c) {
    return arguments.length ? (r(c), s()) : r();
  }, t.ticks = (c) => {
    const l = r();
    let f = l[0], d = l[l.length - 1];
    const h = d < f;
    h && ([f, d] = [d, f]);
    let v = i(f), g = i(d), x, y;
    const w = c == null ? 10 : +c;
    let A = [];
    if (!(n % 1) && g - v < w) {
      if (v = Math.floor(v), g = Math.ceil(g), f > 0) {
        for (; v <= g; ++v)
          for (x = 1; x < n; ++x)
            if (y = v < 0 ? x / a(-v) : x * a(v), !(y < f)) {
              if (y > d) break;
              A.push(y);
            }
      } else for (; v <= g; ++v)
        for (x = n - 1; x >= 1; --x)
          if (y = v > 0 ? x / a(-v) : x * a(v), !(y < f)) {
            if (y > d) break;
            A.push(y);
          }
      A.length * 2 < w && (A = rp(f, d, w));
    } else
      A = rp(v, g, Math.min(g - v, w)).map(a);
    return h ? A.reverse() : A;
  }, t.tickFormat = (c, l) => {
    if (c == null && (c = 10), l == null && (l = n === 10 ? "s" : ","), typeof l != "function" && (!(n % 1) && (l = $s(l)).precision == null && (l.trim = !0), l = Hv(l)), c === 1 / 0) return l;
    const f = Math.max(1, n * c / t.ticks().length);
    return (d) => {
      let h = d / a(Math.round(i(d)));
      return h * n < n - 0.5 && (h *= n), h <= f ? l(d) : "";
    };
  }, t.nice = () => r(TO(r(), {
    floor: (c) => a(Math.floor(i(c))),
    ceil: (c) => a(Math.ceil(i(c)))
  })), t;
}
function $O() {
  const e = Gv(Ul()).domain([1, 10]);
  return e.copy = () => cu(e, $O()).base(e.base()), Dr.apply(e, arguments), e;
}
function ox(e) {
  return function(t) {
    return Math.sign(t) * Math.log1p(Math.abs(t / e));
  };
}
function sx(e) {
  return function(t) {
    return Math.sign(t) * Math.expm1(Math.abs(t)) * e;
  };
}
function qv(e) {
  var t = 1, r = e(ox(t), sx(t));
  return r.constant = function(n) {
    return arguments.length ? e(ox(t = +n), sx(t)) : t;
  }, bi(r);
}
function CO() {
  var e = qv(Ul());
  return e.copy = function() {
    return cu(e, CO()).constant(e.constant());
  }, Dr.apply(e, arguments);
}
function ux(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function IG(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function kG(e) {
  return e < 0 ? -e * e : e * e;
}
function Kv(e) {
  var t = e(Kt, Kt), r = 1;
  function n() {
    return r === 1 ? e(Kt, Kt) : r === 0.5 ? e(IG, kG) : e(ux(r), ux(1 / r));
  }
  return t.exponent = function(i) {
    return arguments.length ? (r = +i, n()) : r;
  }, bi(t);
}
function Vv() {
  var e = Kv(Ul());
  return e.copy = function() {
    return cu(e, Vv()).exponent(e.exponent());
  }, Dr.apply(e, arguments), e;
}
function jG() {
  return Vv.apply(null, arguments).exponent(0.5);
}
function cx(e) {
  return Math.sign(e) * e * e;
}
function RG(e) {
  return Math.sign(e) * Math.sqrt(Math.abs(e));
}
function MO() {
  var e = zv(), t = [0, 1], r = !1, n;
  function i(a) {
    var s = RG(e(a));
    return isNaN(s) ? n : r ? Math.round(s) : s;
  }
  return i.invert = function(a) {
    return e.invert(cx(a));
  }, i.domain = function(a) {
    return arguments.length ? (e.domain(a), i) : e.domain();
  }, i.range = function(a) {
    return arguments.length ? (e.range((t = Array.from(a, qc)).map(cx)), i) : t.slice();
  }, i.rangeRound = function(a) {
    return i.range(a).round(!0);
  }, i.round = function(a) {
    return arguments.length ? (r = !!a, i) : r;
  }, i.clamp = function(a) {
    return arguments.length ? (e.clamp(a), i) : e.clamp();
  }, i.unknown = function(a) {
    return arguments.length ? (n = a, i) : n;
  }, i.copy = function() {
    return MO(e.domain(), t).round(r).clamp(e.clamp()).unknown(n);
  }, Dr.apply(i, arguments), bi(i);
}
function IO() {
  var e = [], t = [], r = [], n;
  function i() {
    var s = 0, c = Math.max(1, t.length);
    for (r = new Array(c - 1); ++s < c; ) r[s - 1] = FH(e, s / c);
    return a;
  }
  function a(s) {
    return s == null || isNaN(s = +s) ? n : t[su(r, s)];
  }
  return a.invertExtent = function(s) {
    var c = t.indexOf(s);
    return c < 0 ? [NaN, NaN] : [
      c > 0 ? r[c - 1] : e[0],
      c < r.length ? r[c] : e[e.length - 1]
    ];
  }, a.domain = function(s) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let c of s) c != null && !isNaN(c = +c) && e.push(c);
    return e.sort(di), i();
  }, a.range = function(s) {
    return arguments.length ? (t = Array.from(s), i()) : t.slice();
  }, a.unknown = function(s) {
    return arguments.length ? (n = s, a) : n;
  }, a.quantiles = function() {
    return r.slice();
  }, a.copy = function() {
    return IO().domain(e).range(t).unknown(n);
  }, Dr.apply(a, arguments);
}
function kO() {
  var e = 0, t = 1, r = 1, n = [0.5], i = [0, 1], a;
  function s(l) {
    return l != null && l <= l ? i[su(n, l, 0, r)] : a;
  }
  function c() {
    var l = -1;
    for (n = new Array(r); ++l < r; ) n[l] = ((l + 1) * t - (l - r) * e) / (r + 1);
    return s;
  }
  return s.domain = function(l) {
    return arguments.length ? ([e, t] = l, e = +e, t = +t, c()) : [e, t];
  }, s.range = function(l) {
    return arguments.length ? (r = (i = Array.from(l)).length - 1, c()) : i.slice();
  }, s.invertExtent = function(l) {
    var f = i.indexOf(l);
    return f < 0 ? [NaN, NaN] : f < 1 ? [e, n[0]] : f >= r ? [n[r - 1], t] : [n[f - 1], n[f]];
  }, s.unknown = function(l) {
    return arguments.length && (a = l), s;
  }, s.thresholds = function() {
    return n.slice();
  }, s.copy = function() {
    return kO().domain([e, t]).range(i).unknown(a);
  }, Dr.apply(bi(s), arguments);
}
function jO() {
  var e = [0.5], t = [0, 1], r, n = 1;
  function i(a) {
    return a != null && a <= a ? t[su(e, a, 0, n)] : r;
  }
  return i.domain = function(a) {
    return arguments.length ? (e = Array.from(a), n = Math.min(e.length, t.length - 1), i) : e.slice();
  }, i.range = function(a) {
    return arguments.length ? (t = Array.from(a), n = Math.min(e.length, t.length - 1), i) : t.slice();
  }, i.invertExtent = function(a) {
    var s = t.indexOf(a);
    return [e[s - 1], e[s]];
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return jO().domain(e).range(t).unknown(r);
  }, Dr.apply(i, arguments);
}
const eh = /* @__PURE__ */ new Date(), th = /* @__PURE__ */ new Date();
function Tt(e, t, r, n) {
  function i(a) {
    return e(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = (a) => (e(a = /* @__PURE__ */ new Date(+a)), a), i.ceil = (a) => (e(a = new Date(a - 1)), t(a, 1), e(a), a), i.round = (a) => {
    const s = i(a), c = i.ceil(a);
    return a - s < c - a ? s : c;
  }, i.offset = (a, s) => (t(a = /* @__PURE__ */ new Date(+a), s == null ? 1 : Math.floor(s)), a), i.range = (a, s, c) => {
    const l = [];
    if (a = i.ceil(a), c = c == null ? 1 : Math.floor(c), !(a < s) || !(c > 0)) return l;
    let f;
    do
      l.push(f = /* @__PURE__ */ new Date(+a)), t(a, c), e(a);
    while (f < a && a < s);
    return l;
  }, i.filter = (a) => Tt((s) => {
    if (s >= s) for (; e(s), !a(s); ) s.setTime(s - 1);
  }, (s, c) => {
    if (s >= s)
      if (c < 0) for (; ++c <= 0; )
        for (; t(s, -1), !a(s); )
          ;
      else for (; --c >= 0; )
        for (; t(s, 1), !a(s); )
          ;
  }), r && (i.count = (a, s) => (eh.setTime(+a), th.setTime(+s), e(eh), e(th), Math.floor(r(eh, th))), i.every = (a) => (a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(n ? (s) => n(s) % a === 0 : (s) => i.count(0, s) % a === 0) : i)), i;
}
const Yc = Tt(() => {
}, (e, t) => {
  e.setTime(+e + t);
}, (e, t) => t - e);
Yc.every = (e) => (e = Math.floor(e), !isFinite(e) || !(e > 0) ? null : e > 1 ? Tt((t) => {
  t.setTime(Math.floor(t / e) * e);
}, (t, r) => {
  t.setTime(+t + r * e);
}, (t, r) => (r - t) / e) : Yc);
Yc.range;
const Tn = 1e3, Ir = Tn * 60, $n = Ir * 60, Nn = $n * 24, Yv = Nn * 7, lx = Nn * 30, rh = Nn * 365, zi = Tt((e) => {
  e.setTime(e - e.getMilliseconds());
}, (e, t) => {
  e.setTime(+e + t * Tn);
}, (e, t) => (t - e) / Tn, (e) => e.getUTCSeconds());
zi.range;
const Xv = Tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Tn);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getMinutes());
Xv.range;
const Zv = Tt((e) => {
  e.setUTCSeconds(0, 0);
}, (e, t) => {
  e.setTime(+e + t * Ir);
}, (e, t) => (t - e) / Ir, (e) => e.getUTCMinutes());
Zv.range;
const Jv = Tt((e) => {
  e.setTime(e - e.getMilliseconds() - e.getSeconds() * Tn - e.getMinutes() * Ir);
}, (e, t) => {
  e.setTime(+e + t * $n);
}, (e, t) => (t - e) / $n, (e) => e.getHours());
Jv.range;
const Qv = Tt((e) => {
  e.setUTCMinutes(0, 0, 0);
}, (e, t) => {
  e.setTime(+e + t * $n);
}, (e, t) => (t - e) / $n, (e) => e.getUTCHours());
Qv.range;
const lu = Tt(
  (e) => e.setHours(0, 0, 0, 0),
  (e, t) => e.setDate(e.getDate() + t),
  (e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Ir) / Nn,
  (e) => e.getDate() - 1
);
lu.range;
const Hl = Tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nn, (e) => e.getUTCDate() - 1);
Hl.range;
const RO = Tt((e) => {
  e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCDate(e.getUTCDate() + t);
}, (e, t) => (t - e) / Nn, (e) => Math.floor(e / Nn));
RO.range;
function aa(e) {
  return Tt((t) => {
    t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setDate(t.getDate() + r * 7);
  }, (t, r) => (r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Ir) / Yv);
}
const Gl = aa(0), Xc = aa(1), NG = aa(2), DG = aa(3), qa = aa(4), LG = aa(5), BG = aa(6);
Gl.range;
Xc.range;
NG.range;
DG.range;
qa.range;
LG.range;
BG.range;
function oa(e) {
  return Tt((t) => {
    t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
  }, (t, r) => {
    t.setUTCDate(t.getUTCDate() + r * 7);
  }, (t, r) => (r - t) / Yv);
}
const ql = oa(0), Zc = oa(1), FG = oa(2), WG = oa(3), Ka = oa(4), zG = oa(5), UG = oa(6);
ql.range;
Zc.range;
FG.range;
WG.range;
Ka.range;
zG.range;
UG.range;
const eg = Tt((e) => {
  e.setDate(1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setMonth(e.getMonth() + t);
}, (e, t) => t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12, (e) => e.getMonth());
eg.range;
const tg = Tt((e) => {
  e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCMonth(e.getUTCMonth() + t);
}, (e, t) => t.getUTCMonth() - e.getUTCMonth() + (t.getUTCFullYear() - e.getUTCFullYear()) * 12, (e) => e.getUTCMonth());
tg.range;
const Dn = Tt((e) => {
  e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
}, (e, t) => {
  e.setFullYear(e.getFullYear() + t);
}, (e, t) => t.getFullYear() - e.getFullYear(), (e) => e.getFullYear());
Dn.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Tt((t) => {
  t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
}, (t, r) => {
  t.setFullYear(t.getFullYear() + r * e);
});
Dn.range;
const Ln = Tt((e) => {
  e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
}, (e, t) => {
  e.setUTCFullYear(e.getUTCFullYear() + t);
}, (e, t) => t.getUTCFullYear() - e.getUTCFullYear(), (e) => e.getUTCFullYear());
Ln.every = (e) => !isFinite(e = Math.floor(e)) || !(e > 0) ? null : Tt((t) => {
  t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
}, (t, r) => {
  t.setUTCFullYear(t.getUTCFullYear() + r * e);
});
Ln.range;
function NO(e, t, r, n, i, a) {
  const s = [
    [zi, 1, Tn],
    [zi, 5, 5 * Tn],
    [zi, 15, 15 * Tn],
    [zi, 30, 30 * Tn],
    [a, 1, Ir],
    [a, 5, 5 * Ir],
    [a, 15, 15 * Ir],
    [a, 30, 30 * Ir],
    [i, 1, $n],
    [i, 3, 3 * $n],
    [i, 6, 6 * $n],
    [i, 12, 12 * $n],
    [n, 1, Nn],
    [n, 2, 2 * Nn],
    [r, 1, Yv],
    [t, 1, lx],
    [t, 3, 3 * lx],
    [e, 1, rh]
  ];
  function c(f, d, h) {
    const v = d < f;
    v && ([f, d] = [d, f]);
    const g = h && typeof h.range == "function" ? h : l(f, d, h), x = g ? g.range(f, +d + 1) : [];
    return v ? x.reverse() : x;
  }
  function l(f, d, h) {
    const v = Math.abs(d - f) / h, g = Dv(([, , w]) => w).right(s, v);
    if (g === s.length) return e.every(ip(f / rh, d / rh, h));
    if (g === 0) return Yc.every(Math.max(ip(f, d, h), 1));
    const [x, y] = s[v / s[g - 1][2] < s[g][2] / v ? g - 1 : g];
    return x.every(y);
  }
  return [c, l];
}
const [HG, GG] = NO(Ln, tg, ql, RO, Qv, Zv), [qG, KG] = NO(Dn, eg, Gl, lu, Jv, Xv);
function nh(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L);
    return t.setFullYear(e.y), t;
  }
  return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L);
}
function ih(e) {
  if (0 <= e.y && e.y < 100) {
    var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L));
    return t.setUTCFullYear(e.y), t;
  }
  return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L));
}
function es(e, t, r) {
  return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 };
}
function VG(e) {
  var t = e.dateTime, r = e.date, n = e.time, i = e.periods, a = e.days, s = e.shortDays, c = e.months, l = e.shortMonths, f = ts(i), d = rs(i), h = ts(a), v = rs(a), g = ts(s), x = rs(s), y = ts(c), w = rs(c), A = ts(l), O = rs(l), S = {
    a: Z,
    A: q,
    b: se,
    B: G,
    c: null,
    d: gx,
    e: gx,
    f: yq,
    g: Eq,
    G: $q,
    H: pq,
    I: vq,
    j: gq,
    L: DO,
    m: mq,
    M: bq,
    p: Y,
    q: ae,
    Q: bx,
    s: xx,
    S: xq,
    u: wq,
    U: _q,
    V: Oq,
    w: Aq,
    W: Sq,
    x: null,
    X: null,
    y: Pq,
    Y: Tq,
    Z: Cq,
    "%": mx
  }, _ = {
    a: ce,
    A: he,
    b: ge,
    B: xe,
    c: null,
    d: yx,
    e: yx,
    f: jq,
    g: Hq,
    G: qq,
    H: Mq,
    I: Iq,
    j: kq,
    L: BO,
    m: Rq,
    M: Nq,
    p: ye,
    q: we,
    Q: bx,
    s: xx,
    S: Dq,
    u: Lq,
    U: Bq,
    V: Fq,
    w: Wq,
    W: zq,
    x: null,
    X: null,
    y: Uq,
    Y: Gq,
    Z: Kq,
    "%": mx
  }, b = {
    a: D,
    A: B,
    b: N,
    B: U,
    c: z,
    d: px,
    e: px,
    f: lq,
    g: hx,
    G: dx,
    H: vx,
    I: vx,
    j: oq,
    L: cq,
    m: aq,
    M: sq,
    p: F,
    q: iq,
    Q: dq,
    s: hq,
    S: uq,
    u: QG,
    U: eq,
    V: tq,
    w: JG,
    W: rq,
    x: J,
    X: H,
    y: hx,
    Y: dx,
    Z: nq,
    "%": fq
  };
  S.x = E(r, S), S.X = E(n, S), S.c = E(t, S), _.x = E(r, _), _.X = E(n, _), _.c = E(t, _);
  function E(ne, ue) {
    return function(pe) {
      var j = [], Ee = -1, be = 0, We = ne.length, lt, at, Vt;
      for (pe instanceof Date || (pe = /* @__PURE__ */ new Date(+pe)); ++Ee < We; )
        ne.charCodeAt(Ee) === 37 && (j.push(ne.slice(be, Ee)), (at = fx[lt = ne.charAt(++Ee)]) != null ? lt = ne.charAt(++Ee) : at = lt === "e" ? " " : "0", (Vt = ue[lt]) && (lt = Vt(pe, at)), j.push(lt), be = Ee + 1);
      return j.push(ne.slice(be, Ee)), j.join("");
    };
  }
  function C(ne, ue) {
    return function(pe) {
      var j = es(1900, void 0, 1), Ee = M(j, ne, pe += "", 0), be, We;
      if (Ee != pe.length) return null;
      if ("Q" in j) return new Date(j.Q);
      if ("s" in j) return new Date(j.s * 1e3 + ("L" in j ? j.L : 0));
      if (ue && !("Z" in j) && (j.Z = 0), "p" in j && (j.H = j.H % 12 + j.p * 12), j.m === void 0 && (j.m = "q" in j ? j.q : 0), "V" in j) {
        if (j.V < 1 || j.V > 53) return null;
        "w" in j || (j.w = 1), "Z" in j ? (be = ih(es(j.y, 0, 1)), We = be.getUTCDay(), be = We > 4 || We === 0 ? Zc.ceil(be) : Zc(be), be = Hl.offset(be, (j.V - 1) * 7), j.y = be.getUTCFullYear(), j.m = be.getUTCMonth(), j.d = be.getUTCDate() + (j.w + 6) % 7) : (be = nh(es(j.y, 0, 1)), We = be.getDay(), be = We > 4 || We === 0 ? Xc.ceil(be) : Xc(be), be = lu.offset(be, (j.V - 1) * 7), j.y = be.getFullYear(), j.m = be.getMonth(), j.d = be.getDate() + (j.w + 6) % 7);
      } else ("W" in j || "U" in j) && ("w" in j || (j.w = "u" in j ? j.u % 7 : "W" in j ? 1 : 0), We = "Z" in j ? ih(es(j.y, 0, 1)).getUTCDay() : nh(es(j.y, 0, 1)).getDay(), j.m = 0, j.d = "W" in j ? (j.w + 6) % 7 + j.W * 7 - (We + 5) % 7 : j.w + j.U * 7 - (We + 6) % 7);
      return "Z" in j ? (j.H += j.Z / 100 | 0, j.M += j.Z % 100, ih(j)) : nh(j);
    };
  }
  function M(ne, ue, pe, j) {
    for (var Ee = 0, be = ue.length, We = pe.length, lt, at; Ee < be; ) {
      if (j >= We) return -1;
      if (lt = ue.charCodeAt(Ee++), lt === 37) {
        if (lt = ue.charAt(Ee++), at = b[lt in fx ? ue.charAt(Ee++) : lt], !at || (j = at(ne, pe, j)) < 0) return -1;
      } else if (lt != pe.charCodeAt(j++))
        return -1;
    }
    return j;
  }
  function F(ne, ue, pe) {
    var j = f.exec(ue.slice(pe));
    return j ? (ne.p = d.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function D(ne, ue, pe) {
    var j = g.exec(ue.slice(pe));
    return j ? (ne.w = x.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function B(ne, ue, pe) {
    var j = h.exec(ue.slice(pe));
    return j ? (ne.w = v.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function N(ne, ue, pe) {
    var j = A.exec(ue.slice(pe));
    return j ? (ne.m = O.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function U(ne, ue, pe) {
    var j = y.exec(ue.slice(pe));
    return j ? (ne.m = w.get(j[0].toLowerCase()), pe + j[0].length) : -1;
  }
  function z(ne, ue, pe) {
    return M(ne, t, ue, pe);
  }
  function J(ne, ue, pe) {
    return M(ne, r, ue, pe);
  }
  function H(ne, ue, pe) {
    return M(ne, n, ue, pe);
  }
  function Z(ne) {
    return s[ne.getDay()];
  }
  function q(ne) {
    return a[ne.getDay()];
  }
  function se(ne) {
    return l[ne.getMonth()];
  }
  function G(ne) {
    return c[ne.getMonth()];
  }
  function Y(ne) {
    return i[+(ne.getHours() >= 12)];
  }
  function ae(ne) {
    return 1 + ~~(ne.getMonth() / 3);
  }
  function ce(ne) {
    return s[ne.getUTCDay()];
  }
  function he(ne) {
    return a[ne.getUTCDay()];
  }
  function ge(ne) {
    return l[ne.getUTCMonth()];
  }
  function xe(ne) {
    return c[ne.getUTCMonth()];
  }
  function ye(ne) {
    return i[+(ne.getUTCHours() >= 12)];
  }
  function we(ne) {
    return 1 + ~~(ne.getUTCMonth() / 3);
  }
  return {
    format: function(ne) {
      var ue = E(ne += "", S);
      return ue.toString = function() {
        return ne;
      }, ue;
    },
    parse: function(ne) {
      var ue = C(ne += "", !1);
      return ue.toString = function() {
        return ne;
      }, ue;
    },
    utcFormat: function(ne) {
      var ue = E(ne += "", _);
      return ue.toString = function() {
        return ne;
      }, ue;
    },
    utcParse: function(ne) {
      var ue = C(ne += "", !0);
      return ue.toString = function() {
        return ne;
      }, ue;
    }
  };
}
var fx = { "-": "", _: " ", 0: "0" }, It = /^\s*\d+/, YG = /^%/, XG = /[\\^$*+?|[\]().{}]/g;
function Ue(e, t, r) {
  var n = e < 0 ? "-" : "", i = (n ? -e : e) + "", a = i.length;
  return n + (a < r ? new Array(r - a + 1).join(t) + i : i);
}
function ZG(e) {
  return e.replace(XG, "\\$&");
}
function ts(e) {
  return new RegExp("^(?:" + e.map(ZG).join("|") + ")", "i");
}
function rs(e) {
  return new Map(e.map((t, r) => [t.toLowerCase(), r]));
}
function JG(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.w = +n[0], r + n[0].length) : -1;
}
function QG(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.u = +n[0], r + n[0].length) : -1;
}
function eq(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.U = +n[0], r + n[0].length) : -1;
}
function tq(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.V = +n[0], r + n[0].length) : -1;
}
function rq(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.W = +n[0], r + n[0].length) : -1;
}
function dx(e, t, r) {
  var n = It.exec(t.slice(r, r + 4));
  return n ? (e.y = +n[0], r + n[0].length) : -1;
}
function hx(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3), r + n[0].length) : -1;
}
function nq(e, t, r) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6));
  return n ? (e.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), r + n[0].length) : -1;
}
function iq(e, t, r) {
  var n = It.exec(t.slice(r, r + 1));
  return n ? (e.q = n[0] * 3 - 3, r + n[0].length) : -1;
}
function aq(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.m = n[0] - 1, r + n[0].length) : -1;
}
function px(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.d = +n[0], r + n[0].length) : -1;
}
function oq(e, t, r) {
  var n = It.exec(t.slice(r, r + 3));
  return n ? (e.m = 0, e.d = +n[0], r + n[0].length) : -1;
}
function vx(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.H = +n[0], r + n[0].length) : -1;
}
function sq(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.M = +n[0], r + n[0].length) : -1;
}
function uq(e, t, r) {
  var n = It.exec(t.slice(r, r + 2));
  return n ? (e.S = +n[0], r + n[0].length) : -1;
}
function cq(e, t, r) {
  var n = It.exec(t.slice(r, r + 3));
  return n ? (e.L = +n[0], r + n[0].length) : -1;
}
function lq(e, t, r) {
  var n = It.exec(t.slice(r, r + 6));
  return n ? (e.L = Math.floor(n[0] / 1e3), r + n[0].length) : -1;
}
function fq(e, t, r) {
  var n = YG.exec(t.slice(r, r + 1));
  return n ? r + n[0].length : -1;
}
function dq(e, t, r) {
  var n = It.exec(t.slice(r));
  return n ? (e.Q = +n[0], r + n[0].length) : -1;
}
function hq(e, t, r) {
  var n = It.exec(t.slice(r));
  return n ? (e.s = +n[0], r + n[0].length) : -1;
}
function gx(e, t) {
  return Ue(e.getDate(), t, 2);
}
function pq(e, t) {
  return Ue(e.getHours(), t, 2);
}
function vq(e, t) {
  return Ue(e.getHours() % 12 || 12, t, 2);
}
function gq(e, t) {
  return Ue(1 + lu.count(Dn(e), e), t, 3);
}
function DO(e, t) {
  return Ue(e.getMilliseconds(), t, 3);
}
function yq(e, t) {
  return DO(e, t) + "000";
}
function mq(e, t) {
  return Ue(e.getMonth() + 1, t, 2);
}
function bq(e, t) {
  return Ue(e.getMinutes(), t, 2);
}
function xq(e, t) {
  return Ue(e.getSeconds(), t, 2);
}
function wq(e) {
  var t = e.getDay();
  return t === 0 ? 7 : t;
}
function _q(e, t) {
  return Ue(Gl.count(Dn(e) - 1, e), t, 2);
}
function LO(e) {
  var t = e.getDay();
  return t >= 4 || t === 0 ? qa(e) : qa.ceil(e);
}
function Oq(e, t) {
  return e = LO(e), Ue(qa.count(Dn(e), e) + (Dn(e).getDay() === 4), t, 2);
}
function Aq(e) {
  return e.getDay();
}
function Sq(e, t) {
  return Ue(Xc.count(Dn(e) - 1, e), t, 2);
}
function Pq(e, t) {
  return Ue(e.getFullYear() % 100, t, 2);
}
function Eq(e, t) {
  return e = LO(e), Ue(e.getFullYear() % 100, t, 2);
}
function Tq(e, t) {
  return Ue(e.getFullYear() % 1e4, t, 4);
}
function $q(e, t) {
  var r = e.getDay();
  return e = r >= 4 || r === 0 ? qa(e) : qa.ceil(e), Ue(e.getFullYear() % 1e4, t, 4);
}
function Cq(e) {
  var t = e.getTimezoneOffset();
  return (t > 0 ? "-" : (t *= -1, "+")) + Ue(t / 60 | 0, "0", 2) + Ue(t % 60, "0", 2);
}
function yx(e, t) {
  return Ue(e.getUTCDate(), t, 2);
}
function Mq(e, t) {
  return Ue(e.getUTCHours(), t, 2);
}
function Iq(e, t) {
  return Ue(e.getUTCHours() % 12 || 12, t, 2);
}
function kq(e, t) {
  return Ue(1 + Hl.count(Ln(e), e), t, 3);
}
function BO(e, t) {
  return Ue(e.getUTCMilliseconds(), t, 3);
}
function jq(e, t) {
  return BO(e, t) + "000";
}
function Rq(e, t) {
  return Ue(e.getUTCMonth() + 1, t, 2);
}
function Nq(e, t) {
  return Ue(e.getUTCMinutes(), t, 2);
}
function Dq(e, t) {
  return Ue(e.getUTCSeconds(), t, 2);
}
function Lq(e) {
  var t = e.getUTCDay();
  return t === 0 ? 7 : t;
}
function Bq(e, t) {
  return Ue(ql.count(Ln(e) - 1, e), t, 2);
}
function FO(e) {
  var t = e.getUTCDay();
  return t >= 4 || t === 0 ? Ka(e) : Ka.ceil(e);
}
function Fq(e, t) {
  return e = FO(e), Ue(Ka.count(Ln(e), e) + (Ln(e).getUTCDay() === 4), t, 2);
}
function Wq(e) {
  return e.getUTCDay();
}
function zq(e, t) {
  return Ue(Zc.count(Ln(e) - 1, e), t, 2);
}
function Uq(e, t) {
  return Ue(e.getUTCFullYear() % 100, t, 2);
}
function Hq(e, t) {
  return e = FO(e), Ue(e.getUTCFullYear() % 100, t, 2);
}
function Gq(e, t) {
  return Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function qq(e, t) {
  var r = e.getUTCDay();
  return e = r >= 4 || r === 0 ? Ka(e) : Ka.ceil(e), Ue(e.getUTCFullYear() % 1e4, t, 4);
}
function Kq() {
  return "+0000";
}
function mx() {
  return "%";
}
function bx(e) {
  return +e;
}
function xx(e) {
  return Math.floor(+e / 1e3);
}
var Aa, WO, zO;
Vq({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function Vq(e) {
  return Aa = VG(e), WO = Aa.format, Aa.parse, zO = Aa.utcFormat, Aa.utcParse, Aa;
}
function Yq(e) {
  return new Date(e);
}
function Xq(e) {
  return e instanceof Date ? +e : +/* @__PURE__ */ new Date(+e);
}
function rg(e, t, r, n, i, a, s, c, l, f) {
  var d = zv(), h = d.invert, v = d.domain, g = f(".%L"), x = f(":%S"), y = f("%I:%M"), w = f("%I %p"), A = f("%a %d"), O = f("%b %d"), S = f("%B"), _ = f("%Y");
  function b(E) {
    return (l(E) < E ? g : c(E) < E ? x : s(E) < E ? y : a(E) < E ? w : n(E) < E ? i(E) < E ? A : O : r(E) < E ? S : _)(E);
  }
  return d.invert = function(E) {
    return new Date(h(E));
  }, d.domain = function(E) {
    return arguments.length ? v(Array.from(E, Xq)) : v().map(Yq);
  }, d.ticks = function(E) {
    var C = v();
    return e(C[0], C[C.length - 1], E ?? 10);
  }, d.tickFormat = function(E, C) {
    return C == null ? b : f(C);
  }, d.nice = function(E) {
    var C = v();
    return (!E || typeof E.range != "function") && (E = t(C[0], C[C.length - 1], E ?? 10)), E ? v(TO(C, E)) : d;
  }, d.copy = function() {
    return cu(d, rg(e, t, r, n, i, a, s, c, l, f));
  }, d;
}
function Zq() {
  return Dr.apply(rg(qG, KG, Dn, eg, Gl, lu, Jv, Xv, zi, WO).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
function Jq() {
  return Dr.apply(rg(HG, GG, Ln, tg, ql, Hl, Qv, Zv, zi, zO).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)]), arguments);
}
function Kl() {
  var e = 0, t = 1, r, n, i, a, s = Kt, c = !1, l;
  function f(h) {
    return h == null || isNaN(h = +h) ? l : s(i === 0 ? 0.5 : (h = (a(h) - r) * i, c ? Math.max(0, Math.min(1, h)) : h));
  }
  f.domain = function(h) {
    return arguments.length ? ([e, t] = h, r = a(e = +e), n = a(t = +t), i = r === n ? 0 : 1 / (n - r), f) : [e, t];
  }, f.clamp = function(h) {
    return arguments.length ? (c = !!h, f) : c;
  }, f.interpolator = function(h) {
    return arguments.length ? (s = h, f) : s;
  };
  function d(h) {
    return function(v) {
      var g, x;
      return arguments.length ? ([g, x] = v, s = h(g, x), f) : [s(0), s(1)];
    };
  }
  return f.range = d(wo), f.rangeRound = d(Wv), f.unknown = function(h) {
    return arguments.length ? (l = h, f) : l;
  }, function(h) {
    return a = h, r = h(e), n = h(t), i = r === n ? 0 : 1 / (n - r), f;
  };
}
function xi(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function UO() {
  var e = bi(Kl()(Kt));
  return e.copy = function() {
    return xi(e, UO());
  }, Un.apply(e, arguments);
}
function HO() {
  var e = Gv(Kl()).domain([1, 10]);
  return e.copy = function() {
    return xi(e, HO()).base(e.base());
  }, Un.apply(e, arguments);
}
function GO() {
  var e = qv(Kl());
  return e.copy = function() {
    return xi(e, GO()).constant(e.constant());
  }, Un.apply(e, arguments);
}
function ng() {
  var e = Kv(Kl());
  return e.copy = function() {
    return xi(e, ng()).exponent(e.exponent());
  }, Un.apply(e, arguments);
}
function Qq() {
  return ng.apply(null, arguments).exponent(0.5);
}
function qO() {
  var e = [], t = Kt;
  function r(n) {
    if (n != null && !isNaN(n = +n)) return t((su(e, n, 1) - 1) / (e.length - 1));
  }
  return r.domain = function(n) {
    if (!arguments.length) return e.slice();
    e = [];
    for (let i of n) i != null && !isNaN(i = +i) && e.push(i);
    return e.sort(di), r;
  }, r.interpolator = function(n) {
    return arguments.length ? (t = n, r) : t;
  }, r.range = function() {
    return e.map((n, i) => t(i / (e.length - 1)));
  }, r.quantiles = function(n) {
    return Array.from({ length: n + 1 }, (i, a) => BH(e, a / n));
  }, r.copy = function() {
    return qO(t).domain(e);
  }, Un.apply(r, arguments);
}
function Vl() {
  var e = 0, t = 0.5, r = 1, n = 1, i, a, s, c, l, f = Kt, d, h = !1, v;
  function g(y) {
    return isNaN(y = +y) ? v : (y = 0.5 + ((y = +d(y)) - a) * (n * y < n * a ? c : l), f(h ? Math.max(0, Math.min(1, y)) : y));
  }
  g.domain = function(y) {
    return arguments.length ? ([e, t, r] = y, i = d(e = +e), a = d(t = +t), s = d(r = +r), c = i === a ? 0 : 0.5 / (a - i), l = a === s ? 0 : 0.5 / (s - a), n = a < i ? -1 : 1, g) : [e, t, r];
  }, g.clamp = function(y) {
    return arguments.length ? (h = !!y, g) : h;
  }, g.interpolator = function(y) {
    return arguments.length ? (f = y, g) : f;
  };
  function x(y) {
    return function(w) {
      var A, O, S;
      return arguments.length ? ([A, O, S] = w, f = fG(y, [A, O, S]), g) : [f(0), f(0.5), f(1)];
    };
  }
  return g.range = x(wo), g.rangeRound = x(Wv), g.unknown = function(y) {
    return arguments.length ? (v = y, g) : v;
  }, function(y) {
    return d = y, i = y(e), a = y(t), s = y(r), c = i === a ? 0 : 0.5 / (a - i), l = a === s ? 0 : 0.5 / (s - a), n = a < i ? -1 : 1, g;
  };
}
function KO() {
  var e = bi(Vl()(Kt));
  return e.copy = function() {
    return xi(e, KO());
  }, Un.apply(e, arguments);
}
function VO() {
  var e = Gv(Vl()).domain([0.1, 1, 10]);
  return e.copy = function() {
    return xi(e, VO()).base(e.base());
  }, Un.apply(e, arguments);
}
function YO() {
  var e = qv(Vl());
  return e.copy = function() {
    return xi(e, YO()).constant(e.constant());
  }, Un.apply(e, arguments);
}
function ig() {
  var e = Kv(Vl());
  return e.copy = function() {
    return xi(e, ig()).exponent(e.exponent());
  }, Un.apply(e, arguments);
}
function eK() {
  return ig.apply(null, arguments).exponent(0.5);
}
const wx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  scaleBand: Ss,
  scaleDiverging: KO,
  scaleDivergingLog: VO,
  scaleDivergingPow: ig,
  scaleDivergingSqrt: eK,
  scaleDivergingSymlog: YO,
  scaleIdentity: EO,
  scaleImplicit: ap,
  scaleLinear: Vc,
  scaleLog: $O,
  scaleOrdinal: Lv,
  scalePoint: fs,
  scalePow: Vv,
  scaleQuantile: IO,
  scaleQuantize: kO,
  scaleRadial: MO,
  scaleSequential: UO,
  scaleSequentialLog: HO,
  scaleSequentialPow: ng,
  scaleSequentialQuantile: qO,
  scaleSequentialSqrt: Qq,
  scaleSequentialSymlog: GO,
  scaleSqrt: jG,
  scaleSymlog: CO,
  scaleThreshold: jO,
  scaleTime: Zq,
  scaleUtc: Jq,
  tickFormat: PO
}, Symbol.toStringTag, { value: "Module" }));
var tK = fo;
function rK(e, t, r) {
  for (var n = -1, i = e.length; ++n < i; ) {
    var a = e[n], s = t(a);
    if (s != null && (c === void 0 ? s === s && !tK(s) : r(s, c)))
      var c = s, l = a;
  }
  return l;
}
var Yl = rK;
function nK(e, t) {
  return e > t;
}
var XO = nK, iK = Yl, aK = XO, oK = xo;
function sK(e) {
  return e && e.length ? iK(e, oK, aK) : void 0;
}
var uK = sK;
const li = /* @__PURE__ */ Je(uK);
function cK(e, t) {
  return e < t;
}
var ZO = cK, lK = Yl, fK = ZO, dK = xo;
function hK(e) {
  return e && e.length ? lK(e, dK, fK) : void 0;
}
var pK = hK;
const Xl = /* @__PURE__ */ Je(pK);
var vK = bv, gK = hn, yK = aO, mK = rr;
function bK(e, t) {
  var r = mK(e) ? vK : yK;
  return r(e, gK(t));
}
var xK = bK, wK = nO, _K = xK;
function OK(e, t) {
  return wK(_K(e, t), 1);
}
var AK = OK;
const SK = /* @__PURE__ */ Je(AK);
var PK = Iv;
function EK(e, t) {
  return PK(e, t);
}
var TK = EK;
const Xi = /* @__PURE__ */ Je(TK);
var _o = 1e9, $K = {
  // These values must be integers within the stated ranges (inclusive).
  // Most of these values can be changed during run-time using `Decimal.config`.
  // The maximum number of significant digits of the result of a calculation or base conversion.
  // E.g. `Decimal.config({ precision: 20 });`
  precision: 20,
  // 1 to MAX_DIGITS
  // The rounding mode used by default by `toInteger`, `toDecimalPlaces`, `toExponential`,
  // `toFixed`, `toPrecision` and `toSignificantDigits`.
  //
  // ROUND_UP         0 Away from zero.
  // ROUND_DOWN       1 Towards zero.
  // ROUND_CEIL       2 Towards +Infinity.
  // ROUND_FLOOR      3 Towards -Infinity.
  // ROUND_HALF_UP    4 Towards nearest neighbour. If equidistant, up.
  // ROUND_HALF_DOWN  5 Towards nearest neighbour. If equidistant, down.
  // ROUND_HALF_EVEN  6 Towards nearest neighbour. If equidistant, towards even neighbour.
  // ROUND_HALF_CEIL  7 Towards nearest neighbour. If equidistant, towards +Infinity.
  // ROUND_HALF_FLOOR 8 Towards nearest neighbour. If equidistant, towards -Infinity.
  //
  // E.g.
  // `Decimal.rounding = 4;`
  // `Decimal.rounding = Decimal.ROUND_HALF_UP;`
  rounding: 4,
  // 0 to 8
  // The exponent value at and beneath which `toString` returns exponential notation.
  // JavaScript numbers: -7
  toExpNeg: -7,
  // 0 to -MAX_E
  // The exponent value at and above which `toString` returns exponential notation.
  // JavaScript numbers: 21
  toExpPos: 21,
  // 0 to MAX_E
  // The natural logarithm of 10.
  // 115 digits
  LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
}, og, ht = !0, jr = "[DecimalError] ", Ki = jr + "Invalid argument: ", ag = jr + "Exponent out of range: ", Oo = Math.floor, Li = Math.pow, CK = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, vr, Mt = 1e7, ct = 7, JO = 9007199254740991, Jc = Oo(JO / ct), de = {};
de.absoluteValue = de.abs = function() {
  var e = new this.constructor(this);
  return e.s && (e.s = 1), e;
};
de.comparedTo = de.cmp = function(e) {
  var t, r, n, i, a = this;
  if (e = new a.constructor(e), a.s !== e.s) return a.s || -e.s;
  if (a.e !== e.e) return a.e > e.e ^ a.s < 0 ? 1 : -1;
  for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
    if (a.d[t] !== e.d[t]) return a.d[t] > e.d[t] ^ a.s < 0 ? 1 : -1;
  return n === i ? 0 : n > i ^ a.s < 0 ? 1 : -1;
};
de.decimalPlaces = de.dp = function() {
  var e = this, t = e.d.length - 1, r = (t - e.e) * ct;
  if (t = e.d[t], t) for (; t % 10 == 0; t /= 10) r--;
  return r < 0 ? 0 : r;
};
de.dividedBy = de.div = function(e) {
  return In(this, new this.constructor(e));
};
de.dividedToIntegerBy = de.idiv = function(e) {
  var t = this, r = t.constructor;
  return et(In(t, new r(e), 0, 1), r.precision);
};
de.equals = de.eq = function(e) {
  return !this.cmp(e);
};
de.exponent = function() {
  return xt(this);
};
de.greaterThan = de.gt = function(e) {
  return this.cmp(e) > 0;
};
de.greaterThanOrEqualTo = de.gte = function(e) {
  return this.cmp(e) >= 0;
};
de.isInteger = de.isint = function() {
  return this.e > this.d.length - 2;
};
de.isNegative = de.isneg = function() {
  return this.s < 0;
};
de.isPositive = de.ispos = function() {
  return this.s > 0;
};
de.isZero = function() {
  return this.s === 0;
};
de.lessThan = de.lt = function(e) {
  return this.cmp(e) < 0;
};
de.lessThanOrEqualTo = de.lte = function(e) {
  return this.cmp(e) < 1;
};
de.logarithm = de.log = function(e) {
  var t, r = this, n = r.constructor, i = n.precision, a = i + 5;
  if (e === void 0)
    e = new n(10);
  else if (e = new n(e), e.s < 1 || e.eq(vr)) throw Error(jr + "NaN");
  if (r.s < 1) throw Error(jr + (r.s ? "NaN" : "-Infinity"));
  return r.eq(vr) ? new n(0) : (ht = !1, t = In(Cs(r, a), Cs(e, a), a), ht = !0, et(t, i));
};
de.minus = de.sub = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? tA(t, e) : QO(t, (e.s = -e.s, e));
};
de.modulo = de.mod = function(e) {
  var t, r = this, n = r.constructor, i = n.precision;
  if (e = new n(e), !e.s) throw Error(jr + "NaN");
  return r.s ? (ht = !1, t = In(r, e, 0, 1).times(e), ht = !0, r.minus(t)) : et(new n(r), i);
};
de.naturalExponential = de.exp = function() {
  return eA(this);
};
de.naturalLogarithm = de.ln = function() {
  return Cs(this);
};
de.negated = de.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s || 0, e;
};
de.plus = de.add = function(e) {
  var t = this;
  return e = new t.constructor(e), t.s == e.s ? QO(t, e) : tA(t, (e.s = -e.s, e));
};
de.precision = de.sd = function(e) {
  var t, r, n, i = this;
  if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ki + e);
  if (t = xt(i) + 1, n = i.d.length - 1, r = n * ct + 1, n = i.d[n], n) {
    for (; n % 10 == 0; n /= 10) r--;
    for (n = i.d[0]; n >= 10; n /= 10) r++;
  }
  return e && t > r ? t : r;
};
de.squareRoot = de.sqrt = function() {
  var e, t, r, n, i, a, s, c = this, l = c.constructor;
  if (c.s < 1) {
    if (!c.s) return new l(0);
    throw Error(jr + "NaN");
  }
  for (e = xt(c), ht = !1, i = Math.sqrt(+c), i == 0 || i == 1 / 0 ? (t = on(c.d), (t.length + e) % 2 == 0 && (t += "0"), i = Math.sqrt(t), e = Oo((e + 1) / 2) - (e < 0 || e % 2), i == 1 / 0 ? t = "5e" + e : (t = i.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + e), n = new l(t)) : n = new l(i.toString()), r = l.precision, i = s = r + 3; ; )
    if (a = n, n = a.plus(In(c, a, s + 2)).times(0.5), on(a.d).slice(0, s) === (t = on(n.d)).slice(0, s)) {
      if (t = t.slice(s - 3, s + 1), i == s && t == "4999") {
        if (et(a, r + 1, 0), a.times(a).eq(c)) {
          n = a;
          break;
        }
      } else if (t != "9999")
        break;
      s += 4;
    }
  return ht = !0, et(n, r);
};
de.times = de.mul = function(e) {
  var t, r, n, i, a, s, c, l, f, d = this, h = d.constructor, v = d.d, g = (e = new h(e)).d;
  if (!d.s || !e.s) return new h(0);
  for (e.s *= d.s, r = d.e + e.e, l = v.length, f = g.length, l < f && (a = v, v = g, g = a, s = l, l = f, f = s), a = [], s = l + f, n = s; n--; ) a.push(0);
  for (n = f; --n >= 0; ) {
    for (t = 0, i = l + n; i > n; )
      c = a[i] + g[n] * v[i - n - 1] + t, a[i--] = c % Mt | 0, t = c / Mt | 0;
    a[i] = (a[i] + t) % Mt | 0;
  }
  for (; !a[--s]; ) a.pop();
  return t ? ++r : a.shift(), e.d = a, e.e = r, ht ? et(e, h.precision) : e;
};
de.toDecimalPlaces = de.todp = function(e, t) {
  var r = this, n = r.constructor;
  return r = new n(r), e === void 0 ? r : (ln(e, 0, _o), t === void 0 ? t = n.rounding : ln(t, 0, 8), et(r, e + xt(r) + 1, t));
};
de.toExponential = function(e, t) {
  var r, n = this, i = n.constructor;
  return e === void 0 ? r = Zi(n, !0) : (ln(e, 0, _o), t === void 0 ? t = i.rounding : ln(t, 0, 8), n = et(new i(n), e + 1, t), r = Zi(n, !0, e + 1)), r;
};
de.toFixed = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? Zi(i) : (ln(e, 0, _o), t === void 0 ? t = a.rounding : ln(t, 0, 8), n = et(new a(i), e + xt(i) + 1, t), r = Zi(n.abs(), !1, e + xt(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
};
de.toInteger = de.toint = function() {
  var e = this, t = e.constructor;
  return et(new t(e), xt(e) + 1, t.rounding);
};
de.toNumber = function() {
  return +this;
};
de.toPower = de.pow = function(e) {
  var t, r, n, i, a, s, c = this, l = c.constructor, f = 12, d = +(e = new l(e));
  if (!e.s) return new l(vr);
  if (c = new l(c), !c.s) {
    if (e.s < 1) throw Error(jr + "Infinity");
    return c;
  }
  if (c.eq(vr)) return c;
  if (n = l.precision, e.eq(vr)) return et(c, n);
  if (t = e.e, r = e.d.length - 1, s = t >= r, a = c.s, s) {
    if ((r = d < 0 ? -d : d) <= JO) {
      for (i = new l(vr), t = Math.ceil(n / ct + 4), ht = !1; r % 2 && (i = i.times(c), Ox(i.d, t)), r = Oo(r / 2), r !== 0; )
        c = c.times(c), Ox(c.d, t);
      return ht = !0, e.s < 0 ? new l(vr).div(i) : et(i, n);
    }
  } else if (a < 0) throw Error(jr + "NaN");
  return a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1, c.s = 1, ht = !1, i = e.times(Cs(c, n + f)), ht = !0, i = eA(i), i.s = a, i;
};
de.toPrecision = function(e, t) {
  var r, n, i = this, a = i.constructor;
  return e === void 0 ? (r = xt(i), n = Zi(i, r <= a.toExpNeg || r >= a.toExpPos)) : (ln(e, 1, _o), t === void 0 ? t = a.rounding : ln(t, 0, 8), i = et(new a(i), e, t), r = xt(i), n = Zi(i, e <= r || r <= a.toExpNeg, e)), n;
};
de.toSignificantDigits = de.tosd = function(e, t) {
  var r = this, n = r.constructor;
  return e === void 0 ? (e = n.precision, t = n.rounding) : (ln(e, 1, _o), t === void 0 ? t = n.rounding : ln(t, 0, 8)), et(new n(r), e, t);
};
de.toString = de.valueOf = de.val = de.toJSON = de[Symbol.for("nodejs.util.inspect.custom")] = function() {
  var e = this, t = xt(e), r = e.constructor;
  return Zi(e, t <= r.toExpNeg || t >= r.toExpPos);
};
function QO(e, t) {
  var r, n, i, a, s, c, l, f, d = e.constructor, h = d.precision;
  if (!e.s || !t.s)
    return t.s || (t = new d(e)), ht ? et(t, h) : t;
  if (l = e.d, f = t.d, s = e.e, i = t.e, l = l.slice(), a = s - i, a) {
    for (a < 0 ? (n = l, a = -a, c = f.length) : (n = f, i = s, c = l.length), s = Math.ceil(h / ct), c = s > c ? s + 1 : c + 1, a > c && (a = c, n.length = 1), n.reverse(); a--; ) n.push(0);
    n.reverse();
  }
  for (c = l.length, a = f.length, c - a < 0 && (a = c, n = f, f = l, l = n), r = 0; a; )
    r = (l[--a] = l[a] + f[a] + r) / Mt | 0, l[a] %= Mt;
  for (r && (l.unshift(r), ++i), c = l.length; l[--c] == 0; ) l.pop();
  return t.d = l, t.e = i, ht ? et(t, h) : t;
}
function ln(e, t, r) {
  if (e !== ~~e || e < t || e > r)
    throw Error(Ki + e);
}
function on(e) {
  var t, r, n, i = e.length - 1, a = "", s = e[0];
  if (i > 0) {
    for (a += s, t = 1; t < i; t++)
      n = e[t] + "", r = ct - n.length, r && (a += ui(r)), a += n;
    s = e[t], n = s + "", r = ct - n.length, r && (a += ui(r));
  } else if (s === 0)
    return "0";
  for (; s % 10 === 0; ) s /= 10;
  return a + s;
}
var In = /* @__PURE__ */ function() {
  function e(n, i) {
    var a, s = 0, c = n.length;
    for (n = n.slice(); c--; )
      a = n[c] * i + s, n[c] = a % Mt | 0, s = a / Mt | 0;
    return s && n.unshift(s), n;
  }
  function t(n, i, a, s) {
    var c, l;
    if (a != s)
      l = a > s ? 1 : -1;
    else
      for (c = l = 0; c < a; c++)
        if (n[c] != i[c]) {
          l = n[c] > i[c] ? 1 : -1;
          break;
        }
    return l;
  }
  function r(n, i, a) {
    for (var s = 0; a--; )
      n[a] -= s, s = n[a] < i[a] ? 1 : 0, n[a] = s * Mt + n[a] - i[a];
    for (; !n[0] && n.length > 1; ) n.shift();
  }
  return function(n, i, a, s) {
    var c, l, f, d, h, v, g, x, y, w, A, O, S, _, b, E, C, M, F = n.constructor, D = n.s == i.s ? 1 : -1, B = n.d, N = i.d;
    if (!n.s) return new F(n);
    if (!i.s) throw Error(jr + "Division by zero");
    for (l = n.e - i.e, C = N.length, b = B.length, g = new F(D), x = g.d = [], f = 0; N[f] == (B[f] || 0); ) ++f;
    if (N[f] > (B[f] || 0) && --l, a == null ? O = a = F.precision : s ? O = a + (xt(n) - xt(i)) + 1 : O = a, O < 0) return new F(0);
    if (O = O / ct + 2 | 0, f = 0, C == 1)
      for (d = 0, N = N[0], O++; (f < b || d) && O--; f++)
        S = d * Mt + (B[f] || 0), x[f] = S / N | 0, d = S % N | 0;
    else {
      for (d = Mt / (N[0] + 1) | 0, d > 1 && (N = e(N, d), B = e(B, d), C = N.length, b = B.length), _ = C, y = B.slice(0, C), w = y.length; w < C; ) y[w++] = 0;
      M = N.slice(), M.unshift(0), E = N[0], N[1] >= Mt / 2 && ++E;
      do
        d = 0, c = t(N, y, C, w), c < 0 ? (A = y[0], C != w && (A = A * Mt + (y[1] || 0)), d = A / E | 0, d > 1 ? (d >= Mt && (d = Mt - 1), h = e(N, d), v = h.length, w = y.length, c = t(h, y, v, w), c == 1 && (d--, r(h, C < v ? M : N, v))) : (d == 0 && (c = d = 1), h = N.slice()), v = h.length, v < w && h.unshift(0), r(y, h, w), c == -1 && (w = y.length, c = t(N, y, C, w), c < 1 && (d++, r(y, C < w ? M : N, w))), w = y.length) : c === 0 && (d++, y = [0]), x[f++] = d, c && y[0] ? y[w++] = B[_] || 0 : (y = [B[_]], w = 1);
      while ((_++ < b || y[0] !== void 0) && O--);
    }
    return x[0] || x.shift(), g.e = l, et(g, s ? a + xt(g) + 1 : a);
  };
}();
function eA(e, t) {
  var r, n, i, a, s, c, l = 0, f = 0, d = e.constructor, h = d.precision;
  if (xt(e) > 16) throw Error(ag + xt(e));
  if (!e.s) return new d(vr);
  for (t == null ? (ht = !1, c = h) : c = t, s = new d(0.03125); e.abs().gte(0.1); )
    e = e.times(s), f += 5;
  for (n = Math.log(Li(2, f)) / Math.LN10 * 2 + 5 | 0, c += n, r = i = a = new d(vr), d.precision = c; ; ) {
    if (i = et(i.times(e), c), r = r.times(++l), s = a.plus(In(i, r, c)), on(s.d).slice(0, c) === on(a.d).slice(0, c)) {
      for (; f--; ) a = et(a.times(a), c);
      return d.precision = h, t == null ? (ht = !0, et(a, h)) : a;
    }
    a = s;
  }
}
function xt(e) {
  for (var t = e.e * ct, r = e.d[0]; r >= 10; r /= 10) t++;
  return t;
}
function ah(e, t, r) {
  if (t > e.LN10.sd())
    throw ht = !0, r && (e.precision = r), Error(jr + "LN10 precision limit exceeded");
  return et(new e(e.LN10), t);
}
function ui(e) {
  for (var t = ""; e--; ) t += "0";
  return t;
}
function Cs(e, t) {
  var r, n, i, a, s, c, l, f, d, h = 1, v = 10, g = e, x = g.d, y = g.constructor, w = y.precision;
  if (g.s < 1) throw Error(jr + (g.s ? "NaN" : "-Infinity"));
  if (g.eq(vr)) return new y(0);
  if (t == null ? (ht = !1, f = w) : f = t, g.eq(10))
    return t == null && (ht = !0), ah(y, f);
  if (f += v, y.precision = f, r = on(x), n = r.charAt(0), a = xt(g), Math.abs(a) < 15e14) {
    for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; )
      g = g.times(e), r = on(g.d), n = r.charAt(0), h++;
    a = xt(g), n > 1 ? (g = new y("0." + r), a++) : g = new y(n + "." + r.slice(1));
  } else
    return l = ah(y, f + 2, w).times(a + ""), g = Cs(new y(n + "." + r.slice(1)), f - v).plus(l), y.precision = w, t == null ? (ht = !0, et(g, w)) : g;
  for (c = s = g = In(g.minus(vr), g.plus(vr), f), d = et(g.times(g), f), i = 3; ; ) {
    if (s = et(s.times(d), f), l = c.plus(In(s, new y(i), f)), on(l.d).slice(0, f) === on(c.d).slice(0, f))
      return c = c.times(2), a !== 0 && (c = c.plus(ah(y, f + 2, w).times(a + ""))), c = In(c, new y(h), f), y.precision = w, t == null ? (ht = !0, et(c, w)) : c;
    c = l, i += 2;
  }
}
function _x(e, t) {
  var r, n, i;
  for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; ) ++n;
  for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i;
  if (t = t.slice(n, i), t) {
    if (i -= n, r = r - n - 1, e.e = Oo(r / ct), e.d = [], n = (r + 1) % ct, r < 0 && (n += ct), n < i) {
      for (n && e.d.push(+t.slice(0, n)), i -= ct; n < i; ) e.d.push(+t.slice(n, n += ct));
      t = t.slice(n), n = ct - t.length;
    } else
      n -= i;
    for (; n--; ) t += "0";
    if (e.d.push(+t), ht && (e.e > Jc || e.e < -Jc)) throw Error(ag + r);
  } else
    e.s = 0, e.e = 0, e.d = [0];
  return e;
}
function et(e, t, r) {
  var n, i, a, s, c, l, f, d, h = e.d;
  for (s = 1, a = h[0]; a >= 10; a /= 10) s++;
  if (n = t - s, n < 0)
    n += ct, i = t, f = h[d = 0];
  else {
    if (d = Math.ceil((n + 1) / ct), a = h.length, d >= a) return e;
    for (f = a = h[d], s = 1; a >= 10; a /= 10) s++;
    n %= ct, i = n - ct + s;
  }
  if (r !== void 0 && (a = Li(10, s - i - 1), c = f / a % 10 | 0, l = t < 0 || h[d + 1] !== void 0 || f % a, l = r < 4 ? (c || l) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : c > 5 || c == 5 && (r == 4 || l || r == 6 && // Check whether the digit to the left of the rounding digit is odd.
  (n > 0 ? i > 0 ? f / Li(10, s - i) : 0 : h[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7))), t < 1 || !h[0])
    return l ? (a = xt(e), h.length = 1, t = t - a - 1, h[0] = Li(10, (ct - t % ct) % ct), e.e = Oo(-t / ct) || 0) : (h.length = 1, h[0] = e.e = e.s = 0), e;
  if (n == 0 ? (h.length = d, a = 1, d--) : (h.length = d + 1, a = Li(10, ct - n), h[d] = i > 0 ? (f / Li(10, s - i) % Li(10, i) | 0) * a : 0), l)
    for (; ; )
      if (d == 0) {
        (h[0] += a) == Mt && (h[0] = 1, ++e.e);
        break;
      } else {
        if (h[d] += a, h[d] != Mt) break;
        h[d--] = 0, a = 1;
      }
  for (n = h.length; h[--n] === 0; ) h.pop();
  if (ht && (e.e > Jc || e.e < -Jc))
    throw Error(ag + xt(e));
  return e;
}
function tA(e, t) {
  var r, n, i, a, s, c, l, f, d, h, v = e.constructor, g = v.precision;
  if (!e.s || !t.s)
    return t.s ? t.s = -t.s : t = new v(e), ht ? et(t, g) : t;
  if (l = e.d, h = t.d, n = t.e, f = e.e, l = l.slice(), s = f - n, s) {
    for (d = s < 0, d ? (r = l, s = -s, c = h.length) : (r = h, n = f, c = l.length), i = Math.max(Math.ceil(g / ct), c) + 2, s > i && (s = i, r.length = 1), r.reverse(), i = s; i--; ) r.push(0);
    r.reverse();
  } else {
    for (i = l.length, c = h.length, d = i < c, d && (c = i), i = 0; i < c; i++)
      if (l[i] != h[i]) {
        d = l[i] < h[i];
        break;
      }
    s = 0;
  }
  for (d && (r = l, l = h, h = r, t.s = -t.s), c = l.length, i = h.length - c; i > 0; --i) l[c++] = 0;
  for (i = h.length; i > s; ) {
    if (l[--i] < h[i]) {
      for (a = i; a && l[--a] === 0; ) l[a] = Mt - 1;
      --l[a], l[i] += Mt;
    }
    l[i] -= h[i];
  }
  for (; l[--c] === 0; ) l.pop();
  for (; l[0] === 0; l.shift()) --n;
  return l[0] ? (t.d = l, t.e = n, ht ? et(t, g) : t) : new v(0);
}
function Zi(e, t, r) {
  var n, i = xt(e), a = on(e.d), s = a.length;
  return t ? (r && (n = r - s) > 0 ? a = a.charAt(0) + "." + a.slice(1) + ui(n) : s > 1 && (a = a.charAt(0) + "." + a.slice(1)), a = a + (i < 0 ? "e" : "e+") + i) : i < 0 ? (a = "0." + ui(-i - 1) + a, r && (n = r - s) > 0 && (a += ui(n))) : i >= s ? (a += ui(i + 1 - s), r && (n = r - i - 1) > 0 && (a = a + "." + ui(n))) : ((n = i + 1) < s && (a = a.slice(0, n) + "." + a.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (a += "."), a += ui(n))), e.s < 0 ? "-" + a : a;
}
function Ox(e, t) {
  if (e.length > t)
    return e.length = t, !0;
}
function rA(e) {
  var t, r, n;
  function i(a) {
    var s = this;
    if (!(s instanceof i)) return new i(a);
    if (s.constructor = i, a instanceof i) {
      s.s = a.s, s.e = a.e, s.d = (a = a.d) ? a.slice() : a;
      return;
    }
    if (typeof a == "number") {
      if (a * 0 !== 0)
        throw Error(Ki + a);
      if (a > 0)
        s.s = 1;
      else if (a < 0)
        a = -a, s.s = -1;
      else {
        s.s = 0, s.e = 0, s.d = [0];
        return;
      }
      if (a === ~~a && a < 1e7) {
        s.e = 0, s.d = [a];
        return;
      }
      return _x(s, a.toString());
    } else if (typeof a != "string")
      throw Error(Ki + a);
    if (a.charCodeAt(0) === 45 ? (a = a.slice(1), s.s = -1) : s.s = 1, CK.test(a)) _x(s, a);
    else throw Error(Ki + a);
  }
  if (i.prototype = de, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = rA, i.config = i.set = MK, e === void 0 && (e = {}), e)
    for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
  return i.config(e), i;
}
function MK(e) {
  if (!e || typeof e != "object")
    throw Error(jr + "Object expected");
  var t, r, n, i = [
    "precision",
    1,
    _o,
    "rounding",
    0,
    8,
    "toExpNeg",
    -1 / 0,
    0,
    "toExpPos",
    0,
    1 / 0
  ];
  for (t = 0; t < i.length; t += 3)
    if ((n = e[r = i[t]]) !== void 0)
      if (Oo(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n;
      else throw Error(Ki + r + ": " + n);
  if ((n = e[r = "LN10"]) !== void 0)
    if (n == Math.LN10) this[r] = new this(n);
    else throw Error(Ki + r + ": " + n);
  return this;
}
var og = rA($K);
vr = new og(1);
const Ze = og;
function IK(e) {
  return NK(e) || RK(e) || jK(e) || kK();
}
function kK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jK(e, t) {
  if (e) {
    if (typeof e == "string") return cp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cp(e, t);
  }
}
function RK(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function NK(e) {
  if (Array.isArray(e)) return cp(e);
}
function cp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var DK = function(t) {
  return t;
}, nA = {
  "@@functional/placeholder": !0
}, iA = function(t) {
  return t === nA;
}, Ax = function(t) {
  return function r() {
    return arguments.length === 0 || arguments.length === 1 && iA(arguments.length <= 0 ? void 0 : arguments[0]) ? r : t.apply(void 0, arguments);
  };
}, LK = function e(t, r) {
  return t === 1 ? r : Ax(function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var s = i.filter(function(c) {
      return c !== nA;
    }).length;
    return s >= t ? r.apply(void 0, i) : e(t - s, Ax(function() {
      for (var c = arguments.length, l = new Array(c), f = 0; f < c; f++)
        l[f] = arguments[f];
      var d = i.map(function(h) {
        return iA(h) ? l.shift() : h;
      });
      return r.apply(void 0, IK(d).concat(l));
    }));
  });
}, Zl = function(t) {
  return LK(t.length, t);
}, lp = function(t, r) {
  for (var n = [], i = t; i < r; ++i)
    n[i - t] = i;
  return n;
}, BK = Zl(function(e, t) {
  return Array.isArray(t) ? t.map(e) : Object.keys(t).map(function(r) {
    return t[r];
  }).map(e);
}), FK = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  if (!r.length)
    return DK;
  var i = r.reverse(), a = i[0], s = i.slice(1);
  return function() {
    return s.reduce(function(c, l) {
      return l(c);
    }, a.apply(void 0, arguments));
  };
}, fp = function(t) {
  return Array.isArray(t) ? t.reverse() : t.split("").reverse.join("");
}, aA = function(t) {
  var r = null, n = null;
  return function() {
    for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++)
      a[s] = arguments[s];
    return r && a.every(function(c, l) {
      return c === r[l];
    }) || (r = a, n = t.apply(void 0, a)), n;
  };
};
function WK(e) {
  var t;
  return e === 0 ? t = 1 : t = Math.floor(new Ze(e).abs().log(10).toNumber()) + 1, t;
}
function zK(e, t, r) {
  for (var n = new Ze(e), i = 0, a = []; n.lt(t) && i < 1e5; )
    a.push(n.toNumber()), n = n.add(r), i++;
  return a;
}
var UK = Zl(function(e, t, r) {
  var n = +e, i = +t;
  return n + r * (i - n);
}), HK = Zl(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, (r - e) / n;
}), GK = Zl(function(e, t, r) {
  var n = t - +e;
  return n = n || 1 / 0, Math.max(0, Math.min(1, (r - e) / n));
});
const Jl = {
  rangeStep: zK,
  getDigitCount: WK,
  interpolateNumber: UK,
  uninterpolateNumber: HK,
  uninterpolateTruncation: GK
};
function dp(e) {
  return VK(e) || KK(e) || oA(e) || qK();
}
function qK() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function KK(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e)) return Array.from(e);
}
function VK(e) {
  if (Array.isArray(e)) return hp(e);
}
function Ms(e, t) {
  return ZK(e) || XK(e, t) || oA(e, t) || YK();
}
function YK() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oA(e, t) {
  if (e) {
    if (typeof e == "string") return hp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hp(e, t);
  }
}
function hp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function XK(e, t) {
  if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
    var r = [], n = !0, i = !1, a = void 0;
    try {
      for (var s = e[Symbol.iterator](), c; !(n = (c = s.next()).done) && (r.push(c.value), !(t && r.length === t)); n = !0)
        ;
    } catch (l) {
      i = !0, a = l;
    } finally {
      try {
        !n && s.return != null && s.return();
      } finally {
        if (i) throw a;
      }
    }
    return r;
  }
}
function ZK(e) {
  if (Array.isArray(e)) return e;
}
function sA(e) {
  var t = Ms(e, 2), r = t[0], n = t[1], i = r, a = n;
  return r > n && (i = n, a = r), [i, a];
}
function uA(e, t, r) {
  if (e.lte(0))
    return new Ze(0);
  var n = Jl.getDigitCount(e.toNumber()), i = new Ze(10).pow(n), a = e.div(i), s = n !== 1 ? 0.05 : 0.1, c = new Ze(Math.ceil(a.div(s).toNumber())).add(r).mul(s), l = c.mul(i);
  return t ? l : new Ze(Math.ceil(l));
}
function JK(e, t, r) {
  var n = 1, i = new Ze(e);
  if (!i.isint() && r) {
    var a = Math.abs(e);
    a < 1 ? (n = new Ze(10).pow(Jl.getDigitCount(e) - 1), i = new Ze(Math.floor(i.div(n).toNumber())).mul(n)) : a > 1 && (i = new Ze(Math.floor(e)));
  } else e === 0 ? i = new Ze(Math.floor((t - 1) / 2)) : r || (i = new Ze(Math.floor(e)));
  var s = Math.floor((t - 1) / 2), c = FK(BK(function(l) {
    return i.add(new Ze(l - s).mul(n)).toNumber();
  }), lp);
  return c(0, t);
}
function cA(e, t, r, n) {
  var i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
  if (!Number.isFinite((t - e) / (r - 1)))
    return {
      step: new Ze(0),
      tickMin: new Ze(0),
      tickMax: new Ze(0)
    };
  var a = uA(new Ze(t).sub(e).div(r - 1), n, i), s;
  e <= 0 && t >= 0 ? s = new Ze(0) : (s = new Ze(e).add(t).div(2), s = s.sub(new Ze(s).mod(a)));
  var c = Math.ceil(s.sub(e).div(a).toNumber()), l = Math.ceil(new Ze(t).sub(s).div(a).toNumber()), f = c + l + 1;
  return f > r ? cA(e, t, r, n, i + 1) : (f < r && (l = t > 0 ? l + (r - f) : l, c = t > 0 ? c : c + (r - f)), {
    step: a,
    tickMin: s.sub(new Ze(c).mul(a)),
    tickMax: s.add(new Ze(l).mul(a))
  });
}
function QK(e) {
  var t = Ms(e, 2), r = t[0], n = t[1], i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 6, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, s = Math.max(i, 2), c = sA([r, n]), l = Ms(c, 2), f = l[0], d = l[1];
  if (f === -1 / 0 || d === 1 / 0) {
    var h = d === 1 / 0 ? [f].concat(dp(lp(0, i - 1).map(function() {
      return 1 / 0;
    }))) : [].concat(dp(lp(0, i - 1).map(function() {
      return -1 / 0;
    })), [d]);
    return r > n ? fp(h) : h;
  }
  if (f === d)
    return JK(f, i, a);
  var v = cA(f, d, s, a), g = v.step, x = v.tickMin, y = v.tickMax, w = Jl.rangeStep(x, y.add(new Ze(0.1).mul(g)), g);
  return r > n ? fp(w) : w;
}
function e4(e, t) {
  var r = Ms(e, 2), n = r[0], i = r[1], a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, s = sA([n, i]), c = Ms(s, 2), l = c[0], f = c[1];
  if (l === -1 / 0 || f === 1 / 0)
    return [n, i];
  if (l === f)
    return [l];
  var d = Math.max(t, 2), h = uA(new Ze(f).sub(l).div(d - 1), a, 0), v = [].concat(dp(Jl.rangeStep(new Ze(l), new Ze(f).sub(new Ze(0.99).mul(h)), h)), [f]);
  return n > i ? fp(v) : v;
}
var t4 = aA(QK), r4 = aA(e4), n4 = process.env.NODE_ENV === "production", oh = "Invariant failed";
function er(e, t) {
  if (n4)
    throw new Error(oh);
  var r = typeof t == "function" ? t() : t, n = r ? "".concat(oh, ": ").concat(r) : oh;
  throw new Error(n);
}
var i4 = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
function Qc() {
  return Qc = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qc.apply(this, arguments);
}
function a4(e, t) {
  return c4(e) || u4(e, t) || s4(e, t) || o4();
}
function o4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function s4(e, t) {
  if (e) {
    if (typeof e == "string") return Sx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Sx(e, t);
  }
}
function Sx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function u4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function c4(e) {
  if (Array.isArray(e)) return e;
}
function l4(e, t) {
  if (e == null) return {};
  var r = f4(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function f4(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function fu(e) {
  var t = e.offset, r = e.layout, n = e.width, i = e.dataKey, a = e.data, s = e.dataPointFormatter, c = e.xAxis, l = e.yAxis, f = l4(e, i4), d = me(f, !1);
  e.direction === "x" && c.type !== "number" && (process.env.NODE_ENV !== "production" ? er(!1, 'ErrorBar requires Axis type property to be "number".') : er());
  var h = a.map(function(v) {
    var g = s(v, i), x = g.x, y = g.y, w = g.value, A = g.errorVal;
    if (!A)
      return null;
    var O = [], S, _;
    if (Array.isArray(A)) {
      var b = a4(A, 2);
      S = b[0], _ = b[1];
    } else
      S = _ = A;
    if (r === "vertical") {
      var E = c.scale, C = y + t, M = C + n, F = C - n, D = E(w - S), B = E(w + _);
      O.push({
        x1: B,
        y1: M,
        x2: B,
        y2: F
      }), O.push({
        x1: D,
        y1: C,
        x2: B,
        y2: C
      }), O.push({
        x1: D,
        y1: M,
        x2: D,
        y2: F
      });
    } else if (r === "horizontal") {
      var N = l.scale, U = x + t, z = U - n, J = U + n, H = N(w - S), Z = N(w + _);
      O.push({
        x1: z,
        y1: Z,
        x2: J,
        y2: Z
      }), O.push({
        x1: U,
        y1: H,
        x2: U,
        y2: Z
      }), O.push({
        x1: z,
        y1: H,
        x2: J,
        y2: H
      });
    }
    return /* @__PURE__ */ k.createElement(Le, Qc({
      className: "recharts-errorBar",
      key: "bar-".concat(O.map(function(q) {
        return "".concat(q.x1, "-").concat(q.x2, "-").concat(q.y1, "-").concat(q.y2);
      }))
    }, d), O.map(function(q) {
      return /* @__PURE__ */ k.createElement("line", Qc({}, q, {
        key: "line-".concat(q.x1, "-").concat(q.x2, "-").concat(q.y1, "-").concat(q.y2)
      }));
    }));
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: "recharts-errorBars"
  }, h);
}
fu.defaultProps = {
  stroke: "black",
  strokeWidth: 1.5,
  width: 5,
  offset: 0,
  layout: "horizontal"
};
fu.displayName = "ErrorBar";
function Is(e) {
  "@babel/helpers - typeof";
  return Is = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Is(e);
}
function Px(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Px(Object(r), !0).forEach(function(n) {
      d4(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Px(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function d4(e, t, r) {
  return t = h4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function h4(e) {
  var t = p4(e, "string");
  return Is(t) == "symbol" ? t : String(t);
}
function p4(e, t) {
  if (Is(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Is(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lA = function(t) {
  var r = t.children, n = t.formattedGraphicalItems, i = t.legendWidth, a = t.legendContent, s = dr(r, za);
  if (!s)
    return null;
  var c;
  return s.props && s.props.payload ? c = s.props && s.props.payload : a === "children" ? c = (n || []).reduce(function(l, f) {
    var d = f.item, h = f.props, v = h.sectors || h.data || [];
    return l.concat(v.map(function(g) {
      return {
        type: s.props.iconType || d.props.legendType,
        value: g.name,
        color: g.fill,
        payload: g
      };
    }));
  }, []) : c = (n || []).map(function(l) {
    var f = l.item, d = f.props, h = d.dataKey, v = d.name, g = d.legendType, x = d.hide;
    return {
      inactive: x,
      dataKey: h,
      type: s.props.iconType || g || "square",
      color: sg(f),
      value: v || h,
      // @ts-expect-error property strokeDasharray is required in Payload but optional in props
      payload: f.props
    };
  }), sh(sh(sh({}, s.props), za.getWithHeight(s, i)), {}, {
    payload: c,
    item: s
  });
};
function ks(e) {
  "@babel/helpers - typeof";
  return ks = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ks(e);
}
function Ex(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ex(Object(r), !0).forEach(function(n) {
      Na(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ex(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Na(e, t, r) {
  return t = v4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v4(e) {
  var t = g4(e, "string");
  return ks(t) == "symbol" ? t : String(t);
}
function g4(e, t) {
  if (ks(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ks(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Tx(e) {
  return x4(e) || b4(e) || m4(e) || y4();
}
function y4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function m4(e, t) {
  if (e) {
    if (typeof e == "string") return pp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return pp(e, t);
  }
}
function b4(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function x4(e) {
  if (Array.isArray(e)) return pp(e);
}
function pp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function bt(e, t, r) {
  return Te(e) || Te(t) ? r : Et(t) ? gr(e, t, r) : Pe(t) ? t(e) : r;
}
function ds(e, t, r, n) {
  var i = SK(e, function(c) {
    return bt(c, t);
  });
  if (r === "number") {
    var a = i.filter(function(c) {
      return oe(c) || parseFloat(c);
    });
    return a.length ? [Xl(a), li(a)] : [1 / 0, -1 / 0];
  }
  var s = n ? i.filter(function(c) {
    return !Te(c);
  }) : i;
  return s.map(function(c) {
    return Et(c) || c instanceof Date ? c : "";
  });
}
var w4 = function(t) {
  var r, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = arguments.length > 2 ? arguments[2] : void 0, a = arguments.length > 3 ? arguments[3] : void 0, s = -1, c = (r = n == null ? void 0 : n.length) !== null && r !== void 0 ? r : 0;
  if (c <= 1)
    return 0;
  if (a && a.axisType === "angleAxis" && Math.abs(Math.abs(a.range[1] - a.range[0]) - 360) <= 1e-6)
    for (var l = a.range, f = 0; f < c; f++) {
      var d = f > 0 ? i[f - 1].coordinate : i[c - 1].coordinate, h = i[f].coordinate, v = f >= c - 1 ? i[0].coordinate : i[f + 1].coordinate, g = void 0;
      if (Gt(h - d) !== Gt(v - h)) {
        var x = [];
        if (Gt(v - h) === Gt(l[1] - l[0])) {
          g = v;
          var y = h + l[1] - l[0];
          x[0] = Math.min(y, (y + d) / 2), x[1] = Math.max(y, (y + d) / 2);
        } else {
          g = d;
          var w = v + l[1] - l[0];
          x[0] = Math.min(h, (w + h) / 2), x[1] = Math.max(h, (w + h) / 2);
        }
        var A = [Math.min(h, (g + h) / 2), Math.max(h, (g + h) / 2)];
        if (t > A[0] && t <= A[1] || t >= x[0] && t <= x[1]) {
          s = i[f].index;
          break;
        }
      } else {
        var O = Math.min(d, v), S = Math.max(d, v);
        if (t > (O + h) / 2 && t <= (S + h) / 2) {
          s = i[f].index;
          break;
        }
      }
    }
  else
    for (var _ = 0; _ < c; _++)
      if (_ === 0 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ > 0 && _ < c - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2 && t <= (n[_].coordinate + n[_ + 1].coordinate) / 2 || _ === c - 1 && t > (n[_].coordinate + n[_ - 1].coordinate) / 2) {
        s = n[_].index;
        break;
      }
  return s;
}, sg = function(t) {
  var r = t, n = r.type.displayName, i = t.props, a = i.stroke, s = i.fill, c;
  switch (n) {
    case "Line":
      c = a;
      break;
    case "Area":
    case "Radar":
      c = a && a !== "none" ? a : s;
      break;
    default:
      c = s;
      break;
  }
  return c;
}, _4 = function(t) {
  var r = t.barSize, n = t.totalSize, i = t.stackGroups, a = i === void 0 ? {} : i;
  if (!a)
    return {};
  for (var s = {}, c = Object.keys(a), l = 0, f = c.length; l < f; l++)
    for (var d = a[c[l]].stackGroups, h = Object.keys(d), v = 0, g = h.length; v < g; v++) {
      var x = d[h[v]], y = x.items, w = x.cateAxisId, A = y.filter(function(b) {
        return Mn(b.type).indexOf("Bar") >= 0;
      });
      if (A && A.length) {
        var O = A[0].props.barSize, S = A[0].props[w];
        s[S] || (s[S] = []);
        var _ = Te(O) ? r : O;
        s[S].push({
          item: A[0],
          stackList: A.slice(1),
          barSize: Te(_) ? void 0 : qt(_, n, 0)
        });
      }
    }
  return s;
}, O4 = function(t) {
  var r = t.barGap, n = t.barCategoryGap, i = t.bandSize, a = t.sizeList, s = a === void 0 ? [] : a, c = t.maxBarSize, l = s.length;
  if (l < 1) return null;
  var f = qt(r, i, 0, !0), d, h = [];
  if (s[0].barSize === +s[0].barSize) {
    var v = !1, g = i / l, x = s.reduce(function(_, b) {
      return _ + b.barSize || 0;
    }, 0);
    x += (l - 1) * f, x >= i && (x -= (l - 1) * f, f = 0), x >= i && g > 0 && (v = !0, g *= 0.9, x = l * g);
    var y = (i - x) / 2 >> 0, w = {
      offset: y - f,
      size: 0
    };
    d = s.reduce(function(_, b) {
      var E = {
        item: b.item,
        position: {
          offset: w.offset + w.size + f,
          // @ts-expect-error the type check above does not check for type number explicitly
          size: v ? g : b.barSize
        }
      }, C = [].concat(Tx(_), [E]);
      return w = C[C.length - 1].position, b.stackList && b.stackList.length && b.stackList.forEach(function(M) {
        C.push({
          item: M,
          position: w
        });
      }), C;
    }, h);
  } else {
    var A = qt(n, i, 0, !0);
    i - 2 * A - (l - 1) * f <= 0 && (f = 0);
    var O = (i - 2 * A - (l - 1) * f) / l;
    O > 1 && (O >>= 0);
    var S = c === +c ? Math.min(O, c) : O;
    d = s.reduce(function(_, b, E) {
      var C = [].concat(Tx(_), [{
        item: b.item,
        position: {
          offset: A + (O + f) * E + (O - S) / 2,
          size: S
        }
      }]);
      return b.stackList && b.stackList.length && b.stackList.forEach(function(M) {
        C.push({
          item: M,
          position: C[C.length - 1].position
        });
      }), C;
    }, h);
  }
  return d;
}, A4 = function(t, r, n, i) {
  var a = n.children, s = n.width, c = n.margin, l = s - (c.left || 0) - (c.right || 0), f = lA({
    children: a,
    legendWidth: l
  });
  if (f) {
    var d = i || {}, h = d.width, v = d.height, g = f.align, x = f.verticalAlign, y = f.layout;
    if ((y === "vertical" || y === "horizontal" && x === "middle") && g !== "center" && oe(t[g]))
      return Cr(Cr({}, t), {}, Na({}, g, t[g] + (h || 0)));
    if ((y === "horizontal" || y === "vertical" && g === "center") && x !== "middle" && oe(t[x]))
      return Cr(Cr({}, t), {}, Na({}, x, t[x] + (v || 0)));
  }
  return t;
}, S4 = function(t, r, n) {
  return Te(r) ? !0 : t === "horizontal" ? r === "yAxis" : t === "vertical" || n === "x" ? r === "xAxis" : n === "y" ? r === "yAxis" : !0;
}, fA = function(t, r, n, i, a) {
  var s = r.props.children, c = yr(s, fu).filter(function(f) {
    return S4(i, a, f.props.direction);
  });
  if (c && c.length) {
    var l = c.map(function(f) {
      return f.props.dataKey;
    });
    return t.reduce(function(f, d) {
      var h = bt(d, n);
      if (Te(h)) return f;
      var v = Array.isArray(h) ? [Xl(h), li(h)] : [h, h], g = l.reduce(function(x, y) {
        var w = bt(d, y, 0), A = v[0] - Math.abs(Array.isArray(w) ? w[0] : w), O = v[1] + Math.abs(Array.isArray(w) ? w[1] : w);
        return [Math.min(A, x[0]), Math.max(O, x[1])];
      }, [1 / 0, -1 / 0]);
      return [Math.min(g[0], f[0]), Math.max(g[1], f[1])];
    }, [1 / 0, -1 / 0]);
  }
  return null;
}, P4 = function(t, r, n, i, a) {
  var s = r.map(function(c) {
    return fA(t, c, n, a, i);
  }).filter(function(c) {
    return !Te(c);
  });
  return s && s.length ? s.reduce(function(c, l) {
    return [Math.min(c[0], l[0]), Math.max(c[1], l[1])];
  }, [1 / 0, -1 / 0]) : null;
}, dA = function(t, r, n, i, a) {
  var s = r.map(function(l) {
    var f = l.props.dataKey;
    return n === "number" && f && fA(t, l, f, i) || ds(t, f, n, a);
  });
  if (n === "number")
    return s.reduce(
      // @ts-expect-error if (type === number) means that the domain is numerical type
      // - but this link is missing in the type definition
      function(l, f) {
        return [Math.min(l[0], f[0]), Math.max(l[1], f[1])];
      },
      [1 / 0, -1 / 0]
    );
  var c = {};
  return s.reduce(function(l, f) {
    for (var d = 0, h = f.length; d < h; d++)
      c[f[d]] || (c[f[d]] = !0, l.push(f[d]));
    return l;
  }, []);
}, hA = function(t, r) {
  return t === "horizontal" && r === "xAxis" || t === "vertical" && r === "yAxis" || t === "centric" && r === "angleAxis" || t === "radial" && r === "radiusAxis";
}, pA = function(t, r, n, i) {
  if (i)
    return t.map(function(l) {
      return l.coordinate;
    });
  var a, s, c = t.map(function(l) {
    return l.coordinate === r && (a = !0), l.coordinate === n && (s = !0), l.coordinate;
  });
  return a || c.push(r), s || c.push(n), c;
}, Cn = function(t, r, n) {
  if (!t) return null;
  var i = t.scale, a = t.duplicateDomain, s = t.type, c = t.range, l = t.realScaleType === "scaleBand" ? i.bandwidth() / 2 : 2, f = (r || n) && s === "category" && i.bandwidth ? i.bandwidth() / l : 0;
  if (f = t.axisType === "angleAxis" && (c == null ? void 0 : c.length) >= 2 ? Gt(c[0] - c[1]) * 2 * f : f, r && (t.ticks || t.niceTicks)) {
    var d = (t.ticks || t.niceTicks).map(function(h) {
      var v = a ? a.indexOf(h) : h;
      return {
        // If the scaleContent is not a number, the coordinate will be NaN.
        // That could be the case for example with a PointScale and a string as domain.
        coordinate: i(v) + f,
        value: h,
        offset: f
      };
    });
    return d.filter(function(h) {
      return !yo(h.coordinate);
    });
  }
  return t.isCategorical && t.categoricalDomain ? t.categoricalDomain.map(function(h, v) {
    return {
      coordinate: i(h) + f,
      value: h,
      index: v,
      offset: f
    };
  }) : i.ticks && !n ? i.ticks(t.tickCount).map(function(h) {
    return {
      coordinate: i(h) + f,
      value: h,
      offset: f
    };
  }) : i.domain().map(function(h, v) {
    return {
      coordinate: i(h) + f,
      value: a ? a[h] : h,
      index: v,
      offset: f
    };
  });
}, uh = /* @__PURE__ */ new WeakMap(), gc = function(t, r) {
  if (typeof r != "function")
    return t;
  uh.has(t) || uh.set(t, /* @__PURE__ */ new WeakMap());
  var n = uh.get(t);
  if (n.has(r))
    return n.get(r);
  var i = function() {
    t.apply(void 0, arguments), r.apply(void 0, arguments);
  };
  return n.set(r, i), i;
}, vA = function(t, r, n) {
  var i = t.scale, a = t.type, s = t.layout, c = t.axisType;
  if (i === "auto")
    return s === "radial" && c === "radiusAxis" ? {
      scale: Ss(),
      realScaleType: "band"
    } : s === "radial" && c === "angleAxis" ? {
      scale: Vc(),
      realScaleType: "linear"
    } : a === "category" && r && (r.indexOf("LineChart") >= 0 || r.indexOf("AreaChart") >= 0 || r.indexOf("ComposedChart") >= 0 && !n) ? {
      scale: fs(),
      realScaleType: "point"
    } : a === "category" ? {
      scale: Ss(),
      realScaleType: "band"
    } : {
      scale: Vc(),
      realScaleType: "linear"
    };
  if (au(i)) {
    var l = "scale".concat(Nl(i));
    return {
      scale: (wx[l] || fs)(),
      realScaleType: wx[l] ? l : "point"
    };
  }
  return Pe(i) ? {
    scale: i
  } : {
    scale: fs(),
    realScaleType: "point"
  };
}, $x = 1e-4, gA = function(t) {
  var r = t.domain();
  if (!(!r || r.length <= 2)) {
    var n = r.length, i = t.range(), a = Math.min(i[0], i[1]) - $x, s = Math.max(i[0], i[1]) + $x, c = t(r[0]), l = t(r[n - 1]);
    (c < a || c > s || l < a || l > s) && t.domain([r[0], r[n - 1]]);
  }
}, E4 = function(t, r) {
  if (!t)
    return null;
  for (var n = 0, i = t.length; n < i; n++)
    if (t[n].item === r)
      return t[n].position;
  return null;
}, T4 = function(t, r) {
  if (!r || r.length !== 2 || !oe(r[0]) || !oe(r[1]))
    return t;
  var n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]), a = [t[0], t[1]];
  return (!oe(t[0]) || t[0] < n) && (a[0] = n), (!oe(t[1]) || t[1] > i) && (a[1] = i), a[0] > i && (a[0] = i), a[1] < n && (a[1] = n), a;
}, $4 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, s = 0, c = 0; c < r; ++c) {
        var l = yo(t[c][n][1]) ? t[c][n][0] : t[c][n][1];
        l >= 0 ? (t[c][n][0] = a, t[c][n][1] = a + l, a = t[c][n][1]) : (t[c][n][0] = s, t[c][n][1] = s + l, s = t[c][n][1]);
      }
}, C4 = function(t) {
  var r = t.length;
  if (!(r <= 0))
    for (var n = 0, i = t[0].length; n < i; ++n)
      for (var a = 0, s = 0; s < r; ++s) {
        var c = yo(t[s][n][1]) ? t[s][n][0] : t[s][n][1];
        c >= 0 ? (t[s][n][0] = a, t[s][n][1] = a + c, a = t[s][n][1]) : (t[s][n][0] = 0, t[s][n][1] = 0);
      }
}, M4 = {
  sign: $4,
  // @ts-expect-error definitelytyped types are incorrect
  expand: aB,
  // @ts-expect-error definitelytyped types are incorrect
  none: Ba,
  // @ts-expect-error definitelytyped types are incorrect
  silhouette: oB,
  // @ts-expect-error definitelytyped types are incorrect
  wiggle: sB,
  positive: C4
}, I4 = function(t, r, n) {
  var i = r.map(function(c) {
    return c.props.dataKey;
  }), a = M4[n], s = iB().keys(i).value(function(c, l) {
    return +bt(c, l, 0);
  }).order(Bh).offset(a);
  return s(t);
}, k4 = function(t, r, n, i, a, s) {
  if (!t)
    return null;
  var c = s ? r.reverse() : r, l = {}, f = c.reduce(function(h, v) {
    var g = v.props, x = g.stackId, y = g.hide;
    if (y)
      return h;
    var w = v.props[n], A = h[w] || {
      hasStack: !1,
      stackGroups: {}
    };
    if (Et(x)) {
      var O = A.stackGroups[x] || {
        numericAxisId: n,
        cateAxisId: i,
        items: []
      };
      O.items.push(v), A.hasStack = !0, A.stackGroups[x] = O;
    } else
      A.stackGroups[ia("_stackId_")] = {
        numericAxisId: n,
        cateAxisId: i,
        items: [v]
      };
    return Cr(Cr({}, h), {}, Na({}, w, A));
  }, l), d = {};
  return Object.keys(f).reduce(function(h, v) {
    var g = f[v];
    if (g.hasStack) {
      var x = {};
      g.stackGroups = Object.keys(g.stackGroups).reduce(function(y, w) {
        var A = g.stackGroups[w];
        return Cr(Cr({}, y), {}, Na({}, w, {
          numericAxisId: n,
          cateAxisId: i,
          items: A.items,
          stackedData: I4(t, A.items, a)
        }));
      }, x);
    }
    return Cr(Cr({}, h), {}, Na({}, v, g));
  }, d);
}, yA = function(t, r) {
  var n = r.realScaleType, i = r.type, a = r.tickCount, s = r.originalDomain, c = r.allowDecimals, l = n || r.scale;
  if (l !== "auto" && l !== "linear")
    return null;
  if (a && i === "number" && s && (s[0] === "auto" || s[1] === "auto")) {
    var f = t.domain();
    if (!f.length)
      return null;
    var d = t4(f, a, c);
    return t.domain([Xl(d), li(d)]), {
      niceTicks: d
    };
  }
  if (a && i === "number") {
    var h = t.domain(), v = r4(h, a, c);
    return {
      niceTicks: v
    };
  }
  return null;
};
function el(e) {
  var t = e.axis, r = e.ticks, n = e.bandSize, i = e.entry, a = e.index, s = e.dataKey;
  if (t.type === "category") {
    if (!t.allowDuplicatedCategory && t.dataKey && !Te(i[t.dataKey])) {
      var c = Ec(r, "value", i[t.dataKey]);
      if (c)
        return c.coordinate + n / 2;
    }
    return r[a] ? r[a].coordinate + n / 2 : null;
  }
  var l = bt(i, Te(s) ? t.dataKey : s);
  return Te(l) ? null : t.scale(l);
}
var Cx = function(t) {
  var r = t.axis, n = t.ticks, i = t.offset, a = t.bandSize, s = t.entry, c = t.index;
  if (r.type === "category")
    return n[c] ? n[c].coordinate + i : null;
  var l = bt(s, r.dataKey, r.domain[c]);
  return Te(l) ? null : r.scale(l) - a / 2 + i;
}, j4 = function(t) {
  var r = t.numericAxis, n = r.scale.domain();
  if (r.type === "number") {
    var i = Math.min(n[0], n[1]), a = Math.max(n[0], n[1]);
    return i <= 0 && a >= 0 ? 0 : a < 0 ? a : i;
  }
  return n[0];
}, R4 = function(t, r) {
  var n = t.props.stackId;
  if (Et(n)) {
    var i = r[n];
    if (i) {
      var a = i.items.indexOf(t);
      return a >= 0 ? i.stackedData[a] : null;
    }
  }
  return null;
}, N4 = function(t) {
  return t.reduce(function(r, n) {
    return [Xl(n.concat([r[0]]).filter(oe)), li(n.concat([r[1]]).filter(oe))];
  }, [1 / 0, -1 / 0]);
}, mA = function(t, r, n) {
  return Object.keys(t).reduce(function(i, a) {
    var s = t[a], c = s.stackedData, l = c.reduce(function(f, d) {
      var h = N4(d.slice(r, n + 1));
      return [Math.min(f[0], h[0]), Math.max(f[1], h[1])];
    }, [1 / 0, -1 / 0]);
    return [Math.min(l[0], i[0]), Math.max(l[1], i[1])];
  }, [1 / 0, -1 / 0]).map(function(i) {
    return i === 1 / 0 || i === -1 / 0 ? 0 : i;
  });
}, Mx = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, Ix = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/, vp = function(t, r, n) {
  if (Pe(t))
    return t(r, n);
  if (!Array.isArray(t))
    return r;
  var i = [];
  if (oe(t[0]))
    i[0] = n ? t[0] : Math.min(t[0], r[0]);
  else if (Mx.test(t[0])) {
    var a = +Mx.exec(t[0])[1];
    i[0] = r[0] - a;
  } else Pe(t[0]) ? i[0] = t[0](r[0]) : i[0] = r[0];
  if (oe(t[1]))
    i[1] = n ? t[1] : Math.max(t[1], r[1]);
  else if (Ix.test(t[1])) {
    var s = +Ix.exec(t[1])[1];
    i[1] = r[1] + s;
  } else Pe(t[1]) ? i[1] = t[1](r[1]) : i[1] = r[1];
  return i;
}, tl = function(t, r, n) {
  if (t && t.scale && t.scale.bandwidth) {
    var i = t.scale.bandwidth();
    if (!n || i > 0)
      return i;
  }
  if (t && r && r.length >= 2) {
    for (var a = jv(r, function(h) {
      return h.coordinate;
    }), s = 1 / 0, c = 1, l = a.length; c < l; c++) {
      var f = a[c], d = a[c - 1];
      s = Math.min((f.coordinate || 0) - (d.coordinate || 0), s);
    }
    return s === 1 / 0 ? 0 : s;
  }
  return n ? void 0 : 0;
}, kx = function(t, r, n) {
  return !t || !t.length || Xi(t, gr(n, "type.defaultProps.domain")) ? r : t;
}, bA = function(t, r) {
  var n = t.props, i = n.dataKey, a = n.name, s = n.unit, c = n.formatter, l = n.tooltipType, f = n.chartType, d = n.hide;
  return Cr(Cr({}, me(t, !1)), {}, {
    dataKey: i,
    unit: s,
    formatter: c,
    name: a || i,
    color: sg(t),
    value: bt(r, i),
    type: l,
    payload: r,
    chartType: f,
    hide: d
  });
};
function js(e) {
  "@babel/helpers - typeof";
  return js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, js(e);
}
function jx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jx(Object(r), !0).forEach(function(n) {
      xA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function xA(e, t, r) {
  return t = D4(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function D4(e) {
  var t = L4(e, "string");
  return js(t) == "symbol" ? t : String(t);
}
function L4(e, t) {
  if (js(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (js(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function B4(e, t) {
  return U4(e) || z4(e, t) || W4(e, t) || F4();
}
function F4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function W4(e, t) {
  if (e) {
    if (typeof e == "string") return Rx(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Rx(e, t);
  }
}
function Rx(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function z4(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function U4(e) {
  if (Array.isArray(e)) return e;
}
var rl = Math.PI / 180, H4 = function(t) {
  return t * 180 / Math.PI;
}, it = function(t, r, n, i) {
  return {
    x: t + Math.cos(-rl * i) * n,
    y: r + Math.sin(-rl * i) * n
  };
}, wA = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  return Math.min(Math.abs(t - (n.left || 0) - (n.right || 0)), Math.abs(r - (n.top || 0) - (n.bottom || 0))) / 2;
}, G4 = function(t, r, n, i, a) {
  var s = t.width, c = t.height, l = t.startAngle, f = t.endAngle, d = qt(t.cx, s, s / 2), h = qt(t.cy, c, c / 2), v = wA(s, c, n), g = qt(t.innerRadius, v, 0), x = qt(t.outerRadius, v, v * 0.8), y = Object.keys(r);
  return y.reduce(function(w, A) {
    var O = r[A], S = O.domain, _ = O.reversed, b;
    if (Te(O.range))
      i === "angleAxis" ? b = [l, f] : i === "radiusAxis" && (b = [g, x]), _ && (b = [b[1], b[0]]);
    else {
      b = O.range;
      var E = b, C = B4(E, 2);
      l = C[0], f = C[1];
    }
    var M = vA(O, a), F = M.realScaleType, D = M.scale;
    D.domain(S).range(b), gA(D);
    var B = yA(D, Pn(Pn({}, O), {}, {
      realScaleType: F
    })), N = Pn(Pn(Pn({}, O), B), {}, {
      range: b,
      radius: x,
      realScaleType: F,
      scale: D,
      cx: d,
      cy: h,
      innerRadius: g,
      outerRadius: x,
      startAngle: l,
      endAngle: f
    });
    return Pn(Pn({}, w), {}, xA({}, A, N));
  }, {});
}, q4 = function(t, r) {
  var n = t.x, i = t.y, a = r.x, s = r.y;
  return Math.sqrt(Math.pow(n - a, 2) + Math.pow(i - s, 2));
}, K4 = function(t, r) {
  var n = t.x, i = t.y, a = r.cx, s = r.cy, c = q4({
    x: n,
    y: i
  }, {
    x: a,
    y: s
  });
  if (c <= 0)
    return {
      radius: c
    };
  var l = (n - a) / c, f = Math.acos(l);
  return i > s && (f = 2 * Math.PI - f), {
    radius: c,
    angle: H4(f),
    angleInRadian: f
  };
}, V4 = function(t) {
  var r = t.startAngle, n = t.endAngle, i = Math.floor(r / 360), a = Math.floor(n / 360), s = Math.min(i, a);
  return {
    startAngle: r - s * 360,
    endAngle: n - s * 360
  };
}, Y4 = function(t, r) {
  var n = r.startAngle, i = r.endAngle, a = Math.floor(n / 360), s = Math.floor(i / 360), c = Math.min(a, s);
  return t + c * 360;
}, Nx = function(t, r) {
  var n = t.x, i = t.y, a = K4({
    x: n,
    y: i
  }, r), s = a.radius, c = a.angle, l = r.innerRadius, f = r.outerRadius;
  if (s < l || s > f)
    return !1;
  if (s === 0)
    return !0;
  var d = V4(r), h = d.startAngle, v = d.endAngle, g = c, x;
  if (h <= v) {
    for (; g > v; )
      g -= 360;
    for (; g < h; )
      g += 360;
    x = g >= h && g <= v;
  } else {
    for (; g > h; )
      g -= 360;
    for (; g < v; )
      g += 360;
    x = g >= v && g <= h;
  }
  return x ? Pn(Pn({}, r), {}, {
    radius: s,
    angle: Y4(g, r)
  }) : null;
}, _A = function(t) {
  return !/* @__PURE__ */ Kr(t) && !Pe(t) && typeof t != "boolean" ? t.className : "";
};
function Rs(e) {
  "@babel/helpers - typeof";
  return Rs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Rs(e);
}
var X4 = ["offset"];
function Z4(e) {
  return tV(e) || eV(e) || Q4(e) || J4();
}
function J4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q4(e, t) {
  if (e) {
    if (typeof e == "string") return gp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return gp(e, t);
  }
}
function eV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function tV(e) {
  if (Array.isArray(e)) return gp(e);
}
function gp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function rV(e, t) {
  if (e == null) return {};
  var r = nV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function nV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Dx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Dx(Object(r), !0).forEach(function(n) {
      iV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Dx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function iV(e, t, r) {
  return t = aV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function aV(e) {
  var t = oV(e, "string");
  return Rs(t) == "symbol" ? t : String(t);
}
function oV(e, t) {
  if (Rs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Rs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ns() {
  return Ns = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ns.apply(this, arguments);
}
var sV = function(t) {
  var r = t.value, n = t.formatter, i = Te(t.children) ? r : t.children;
  return Pe(n) ? n(i) : i;
}, uV = function(t, r) {
  var n = Gt(r - t), i = Math.min(Math.abs(r - t), 360);
  return n * i;
}, cV = function(t, r, n) {
  var i = t.position, a = t.viewBox, s = t.offset, c = t.className, l = a, f = l.cx, d = l.cy, h = l.innerRadius, v = l.outerRadius, g = l.startAngle, x = l.endAngle, y = l.clockWise, w = (h + v) / 2, A = uV(g, x), O = A >= 0 ? 1 : -1, S, _;
  i === "insideStart" ? (S = g + O * s, _ = y) : i === "insideEnd" ? (S = x - O * s, _ = !y) : i === "end" && (S = x + O * s, _ = y), _ = A <= 0 ? _ : !_;
  var b = it(f, d, w, S), E = it(f, d, w, S + (_ ? 1 : -1) * 359), C = "M".concat(b.x, ",").concat(b.y, `
    A`).concat(w, ",").concat(w, ",0,1,").concat(_ ? 0 : 1, `,
    `).concat(E.x, ",").concat(E.y), M = Te(t.id) ? ia("recharts-radial-line-") : t.id;
  return /* @__PURE__ */ k.createElement("text", Ns({}, n, {
    dominantBaseline: "central",
    className: Me("recharts-radial-bar-label", c)
  }), /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("path", {
    id: M,
    d: C
  })), /* @__PURE__ */ k.createElement("textPath", {
    xlinkHref: "#".concat(M)
  }, r));
}, lV = function(t) {
  var r = t.viewBox, n = t.offset, i = t.position, a = r, s = a.cx, c = a.cy, l = a.innerRadius, f = a.outerRadius, d = a.startAngle, h = a.endAngle, v = (d + h) / 2;
  if (i === "outside") {
    var g = it(s, c, f + n, v), x = g.x, y = g.y;
    return {
      x,
      y,
      textAnchor: x >= s ? "start" : "end",
      verticalAnchor: "middle"
    };
  }
  if (i === "center")
    return {
      x: s,
      y: c,
      textAnchor: "middle",
      verticalAnchor: "middle"
    };
  if (i === "centerTop")
    return {
      x: s,
      y: c,
      textAnchor: "middle",
      verticalAnchor: "start"
    };
  if (i === "centerBottom")
    return {
      x: s,
      y: c,
      textAnchor: "middle",
      verticalAnchor: "end"
    };
  var w = (l + f) / 2, A = it(s, c, w, v), O = A.x, S = A.y;
  return {
    x: O,
    y: S,
    textAnchor: "middle",
    verticalAnchor: "middle"
  };
}, fV = function(t) {
  var r = t.viewBox, n = t.parentViewBox, i = t.offset, a = t.position, s = r, c = s.x, l = s.y, f = s.width, d = s.height, h = d >= 0 ? 1 : -1, v = h * i, g = h > 0 ? "end" : "start", x = h > 0 ? "start" : "end", y = f >= 0 ? 1 : -1, w = y * i, A = y > 0 ? "end" : "start", O = y > 0 ? "start" : "end";
  if (a === "top") {
    var S = {
      x: c + f / 2,
      y: l - h * i,
      textAnchor: "middle",
      verticalAnchor: g
    };
    return Ot(Ot({}, S), n ? {
      height: Math.max(l - n.y, 0),
      width: f
    } : {});
  }
  if (a === "bottom") {
    var _ = {
      x: c + f / 2,
      y: l + d + v,
      textAnchor: "middle",
      verticalAnchor: x
    };
    return Ot(Ot({}, _), n ? {
      height: Math.max(n.y + n.height - (l + d), 0),
      width: f
    } : {});
  }
  if (a === "left") {
    var b = {
      x: c - w,
      y: l + d / 2,
      textAnchor: A,
      verticalAnchor: "middle"
    };
    return Ot(Ot({}, b), n ? {
      width: Math.max(b.x - n.x, 0),
      height: d
    } : {});
  }
  if (a === "right") {
    var E = {
      x: c + f + w,
      y: l + d / 2,
      textAnchor: O,
      verticalAnchor: "middle"
    };
    return Ot(Ot({}, E), n ? {
      width: Math.max(n.x + n.width - E.x, 0),
      height: d
    } : {});
  }
  var C = n ? {
    width: f,
    height: d
  } : {};
  return a === "insideLeft" ? Ot({
    x: c + w,
    y: l + d / 2,
    textAnchor: O,
    verticalAnchor: "middle"
  }, C) : a === "insideRight" ? Ot({
    x: c + f - w,
    y: l + d / 2,
    textAnchor: A,
    verticalAnchor: "middle"
  }, C) : a === "insideTop" ? Ot({
    x: c + f / 2,
    y: l + v,
    textAnchor: "middle",
    verticalAnchor: x
  }, C) : a === "insideBottom" ? Ot({
    x: c + f / 2,
    y: l + d - v,
    textAnchor: "middle",
    verticalAnchor: g
  }, C) : a === "insideTopLeft" ? Ot({
    x: c + w,
    y: l + v,
    textAnchor: O,
    verticalAnchor: x
  }, C) : a === "insideTopRight" ? Ot({
    x: c + f - w,
    y: l + v,
    textAnchor: A,
    verticalAnchor: x
  }, C) : a === "insideBottomLeft" ? Ot({
    x: c + w,
    y: l + d - v,
    textAnchor: O,
    verticalAnchor: g
  }, C) : a === "insideBottomRight" ? Ot({
    x: c + f - w,
    y: l + d - v,
    textAnchor: A,
    verticalAnchor: g
  }, C) : ho(a) && (oe(a.x) || Fi(a.x)) && (oe(a.y) || Fi(a.y)) ? Ot({
    x: c + qt(a.x, f),
    y: l + qt(a.y, d),
    textAnchor: "end",
    verticalAnchor: "end"
  }, C) : Ot({
    x: c + f / 2,
    y: l + d / 2,
    textAnchor: "middle",
    verticalAnchor: "middle"
  }, C);
}, dV = function(t) {
  return "cx" in t && oe(t.cx);
};
function Pt(e) {
  var t = e.offset, r = t === void 0 ? 5 : t, n = rV(e, X4), i = Ot({
    offset: r
  }, n), a = i.viewBox, s = i.position, c = i.value, l = i.children, f = i.content, d = i.className, h = d === void 0 ? "" : d, v = i.textBreakAll;
  if (!a || Te(c) && Te(l) && !/* @__PURE__ */ Kr(f) && !Pe(f))
    return null;
  if (/* @__PURE__ */ Kr(f))
    return /* @__PURE__ */ At(f, i);
  var g;
  if (Pe(f)) {
    if (g = /* @__PURE__ */ N1(f, i), /* @__PURE__ */ Kr(g))
      return g;
  } else
    g = sV(i);
  var x = dV(a), y = me(i, !0);
  if (x && (s === "insideStart" || s === "insideEnd" || s === "end"))
    return cV(i, g, y);
  var w = x ? lV(i) : fV(i);
  return /* @__PURE__ */ k.createElement(hi, Ns({
    className: Me("recharts-label", h)
  }, y, w, {
    breakAll: v
  }), g);
}
Pt.displayName = "Label";
var OA = function(t) {
  var r = t.cx, n = t.cy, i = t.angle, a = t.startAngle, s = t.endAngle, c = t.r, l = t.radius, f = t.innerRadius, d = t.outerRadius, h = t.x, v = t.y, g = t.top, x = t.left, y = t.width, w = t.height, A = t.clockWise, O = t.labelViewBox;
  if (O)
    return O;
  if (oe(y) && oe(w)) {
    if (oe(h) && oe(v))
      return {
        x: h,
        y: v,
        width: y,
        height: w
      };
    if (oe(g) && oe(x))
      return {
        x: g,
        y: x,
        width: y,
        height: w
      };
  }
  return oe(h) && oe(v) ? {
    x: h,
    y: v,
    width: 0,
    height: 0
  } : oe(r) && oe(n) ? {
    cx: r,
    cy: n,
    startAngle: a || i || 0,
    endAngle: s || i || 0,
    innerRadius: f || 0,
    outerRadius: d || l || c || 0,
    clockWise: A
  } : t.viewBox ? t.viewBox : {};
}, hV = function(t, r) {
  return t ? t === !0 ? /* @__PURE__ */ k.createElement(Pt, {
    key: "label-implicit",
    viewBox: r
  }) : Et(t) ? /* @__PURE__ */ k.createElement(Pt, {
    key: "label-implicit",
    viewBox: r,
    value: t
  }) : /* @__PURE__ */ Kr(t) ? t.type === Pt ? /* @__PURE__ */ At(t, {
    key: "label-implicit",
    viewBox: r
  }) : /* @__PURE__ */ k.createElement(Pt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : Pe(t) ? /* @__PURE__ */ k.createElement(Pt, {
    key: "label-implicit",
    content: t,
    viewBox: r
  }) : ho(t) ? /* @__PURE__ */ k.createElement(Pt, Ns({
    viewBox: r
  }, t, {
    key: "label-implicit"
  })) : null : null;
}, pV = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!t || !t.children && n && !t.label)
    return null;
  var i = t.children, a = OA(t), s = yr(i, Pt).map(function(l, f) {
    return /* @__PURE__ */ At(l, {
      viewBox: r || a,
      // eslint-disable-next-line react/no-array-index-key
      key: "label-".concat(f)
    });
  });
  if (!n)
    return s;
  var c = hV(t.label, r || a);
  return [c].concat(Z4(s));
};
Pt.parseViewBox = OA;
Pt.renderCallByParent = pV;
function vV(e) {
  var t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
var gV = vV;
const yV = /* @__PURE__ */ Je(gV);
function Ds(e) {
  "@babel/helpers - typeof";
  return Ds = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ds(e);
}
var mV = ["valueAccessor"], bV = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
function xV(e) {
  return AV(e) || OV(e) || _V(e) || wV();
}
function wV() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _V(e, t) {
  if (e) {
    if (typeof e == "string") return yp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return yp(e, t);
  }
}
function OV(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function AV(e) {
  if (Array.isArray(e)) return yp(e);
}
function yp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function nl() {
  return nl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, nl.apply(this, arguments);
}
function Lx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lx(Object(r), !0).forEach(function(n) {
      SV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function SV(e, t, r) {
  return t = PV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function PV(e) {
  var t = EV(e, "string");
  return Ds(t) == "symbol" ? t : String(t);
}
function EV(e, t) {
  if (Ds(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ds(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fx(e, t) {
  if (e == null) return {};
  var r = TV(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TV(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var $V = function(t) {
  return Array.isArray(t.value) ? yV(t.value) : t.value;
};
function kr(e) {
  var t = e.valueAccessor, r = t === void 0 ? $V : t, n = Fx(e, mV), i = n.data, a = n.dataKey, s = n.clockWise, c = n.id, l = n.textBreakAll, f = Fx(n, bV);
  return !i || !i.length ? null : /* @__PURE__ */ k.createElement(Le, {
    className: "recharts-label-list"
  }, i.map(function(d, h) {
    var v = Te(a) ? r(d, h) : bt(d && d.payload, a), g = Te(c) ? {} : {
      id: "".concat(c, "-").concat(h)
    };
    return /* @__PURE__ */ k.createElement(Pt, nl({}, me(d, !0), f, g, {
      parentViewBox: d.parentViewBox,
      value: v,
      textBreakAll: l,
      viewBox: Pt.parseViewBox(Te(s) ? d : Bx(Bx({}, d), {}, {
        clockWise: s
      })),
      key: "label-".concat(h),
      index: h
    }));
  }));
}
kr.displayName = "LabelList";
function CV(e, t) {
  return e ? e === !0 ? /* @__PURE__ */ k.createElement(kr, {
    key: "labelList-implicit",
    data: t
  }) : /* @__PURE__ */ k.isValidElement(e) || Pe(e) ? /* @__PURE__ */ k.createElement(kr, {
    key: "labelList-implicit",
    data: t,
    content: e
  }) : ho(e) ? /* @__PURE__ */ k.createElement(kr, nl({
    data: t
  }, e, {
    key: "labelList-implicit"
  })) : null : null;
}
function MV(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  if (!e || !e.children && r && !e.label)
    return null;
  var n = e.children, i = yr(n, kr).map(function(s, c) {
    return /* @__PURE__ */ At(s, {
      data: t,
      // eslint-disable-next-line react/no-array-index-key
      key: "labelList-".concat(c)
    });
  });
  if (!r)
    return i;
  var a = CV(e.label, t);
  return [a].concat(xV(i));
}
kr.renderCallByParent = MV;
function Ls(e) {
  "@babel/helpers - typeof";
  return Ls = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ls(e);
}
function mp() {
  return mp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mp.apply(this, arguments);
}
function Wx(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Wx(Object(r), !0).forEach(function(n) {
      IV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Wx(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function IV(e, t, r) {
  return t = kV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function kV(e) {
  var t = jV(e, "string");
  return Ls(t) == "symbol" ? t : String(t);
}
function jV(e, t) {
  if (Ls(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ls(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var RV = function(t, r) {
  var n = Gt(r - t), i = Math.min(Math.abs(r - t), 359.999);
  return n * i;
}, yc = function(t) {
  var r = t.cx, n = t.cy, i = t.radius, a = t.angle, s = t.sign, c = t.isExternal, l = t.cornerRadius, f = t.cornerIsExternal, d = l * (c ? 1 : -1) + i, h = Math.asin(l / d) / rl, v = f ? a : a + s * h, g = it(r, n, d, v), x = it(r, n, i, v), y = f ? a - s * h : a, w = it(r, n, d * Math.cos(h * rl), y);
  return {
    center: g,
    circleTangency: x,
    lineTangency: w,
    theta: h
  };
}, AA = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, s = t.startAngle, c = t.endAngle, l = RV(s, c), f = s + l, d = it(r, n, a, s), h = it(r, n, a, f), v = "M ".concat(d.x, ",").concat(d.y, `
    A `).concat(a, ",").concat(a, `,0,
    `).concat(+(Math.abs(l) > 180), ",").concat(+(s > f), `,
    `).concat(h.x, ",").concat(h.y, `
  `);
  if (i > 0) {
    var g = it(r, n, i, s), x = it(r, n, i, f);
    v += "L ".concat(x.x, ",").concat(x.y, `
            A `).concat(i, ",").concat(i, `,0,
            `).concat(+(Math.abs(l) > 180), ",").concat(+(s <= f), `,
            `).concat(g.x, ",").concat(g.y, " Z");
  } else
    v += "L ".concat(r, ",").concat(n, " Z");
  return v;
}, NV = function(t) {
  var r = t.cx, n = t.cy, i = t.innerRadius, a = t.outerRadius, s = t.cornerRadius, c = t.forceCornerRadius, l = t.cornerIsExternal, f = t.startAngle, d = t.endAngle, h = Gt(d - f), v = yc({
    cx: r,
    cy: n,
    radius: a,
    angle: f,
    sign: h,
    cornerRadius: s,
    cornerIsExternal: l
  }), g = v.circleTangency, x = v.lineTangency, y = v.theta, w = yc({
    cx: r,
    cy: n,
    radius: a,
    angle: d,
    sign: -h,
    cornerRadius: s,
    cornerIsExternal: l
  }), A = w.circleTangency, O = w.lineTangency, S = w.theta, _ = l ? Math.abs(f - d) : Math.abs(f - d) - y - S;
  if (_ < 0)
    return c ? "M ".concat(x.x, ",").concat(x.y, `
        a`).concat(s, ",").concat(s, ",0,0,1,").concat(s * 2, `,0
        a`).concat(s, ",").concat(s, ",0,0,1,").concat(-s * 2, `,0
      `) : AA({
      cx: r,
      cy: n,
      innerRadius: i,
      outerRadius: a,
      startAngle: f,
      endAngle: d
    });
  var b = "M ".concat(x.x, ",").concat(x.y, `
    A`).concat(s, ",").concat(s, ",0,0,").concat(+(h < 0), ",").concat(g.x, ",").concat(g.y, `
    A`).concat(a, ",").concat(a, ",0,").concat(+(_ > 180), ",").concat(+(h < 0), ",").concat(A.x, ",").concat(A.y, `
    A`).concat(s, ",").concat(s, ",0,0,").concat(+(h < 0), ",").concat(O.x, ",").concat(O.y, `
  `);
  if (i > 0) {
    var E = yc({
      cx: r,
      cy: n,
      radius: i,
      angle: f,
      sign: h,
      isExternal: !0,
      cornerRadius: s,
      cornerIsExternal: l
    }), C = E.circleTangency, M = E.lineTangency, F = E.theta, D = yc({
      cx: r,
      cy: n,
      radius: i,
      angle: d,
      sign: -h,
      isExternal: !0,
      cornerRadius: s,
      cornerIsExternal: l
    }), B = D.circleTangency, N = D.lineTangency, U = D.theta, z = l ? Math.abs(f - d) : Math.abs(f - d) - F - U;
    if (z < 0 && s === 0)
      return "".concat(b, "L").concat(r, ",").concat(n, "Z");
    b += "L".concat(N.x, ",").concat(N.y, `
      A`).concat(s, ",").concat(s, ",0,0,").concat(+(h < 0), ",").concat(B.x, ",").concat(B.y, `
      A`).concat(i, ",").concat(i, ",0,").concat(+(z > 180), ",").concat(+(h > 0), ",").concat(C.x, ",").concat(C.y, `
      A`).concat(s, ",").concat(s, ",0,0,").concat(+(h < 0), ",").concat(M.x, ",").concat(M.y, "Z");
  } else
    b += "L".concat(r, ",").concat(n, "Z");
  return b;
}, DV = {
  cx: 0,
  cy: 0,
  innerRadius: 0,
  outerRadius: 0,
  startAngle: 0,
  endAngle: 0,
  cornerRadius: 0,
  forceCornerRadius: !1,
  cornerIsExternal: !1
}, SA = function(t) {
  var r = zx(zx({}, DV), t), n = r.cx, i = r.cy, a = r.innerRadius, s = r.outerRadius, c = r.cornerRadius, l = r.forceCornerRadius, f = r.cornerIsExternal, d = r.startAngle, h = r.endAngle, v = r.className;
  if (s < a || d === h)
    return null;
  var g = Me("recharts-sector", v), x = s - a, y = qt(c, x, 0, !0), w;
  return y > 0 && Math.abs(d - h) < 360 ? w = NV({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: s,
    cornerRadius: Math.min(y, x / 2),
    forceCornerRadius: l,
    cornerIsExternal: f,
    startAngle: d,
    endAngle: h
  }) : w = AA({
    cx: n,
    cy: i,
    innerRadius: a,
    outerRadius: s,
    startAngle: d,
    endAngle: h
  }), /* @__PURE__ */ k.createElement("path", mp({}, me(r, !0), {
    className: g,
    d: w,
    role: "img"
  }));
};
function Bs(e) {
  "@babel/helpers - typeof";
  return Bs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Bs(e);
}
function bp() {
  return bp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, bp.apply(this, arguments);
}
function Ux(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hx(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ux(Object(r), !0).forEach(function(n) {
      LV(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ux(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function LV(e, t, r) {
  return t = BV(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BV(e) {
  var t = FV(e, "string");
  return Bs(t) == "symbol" ? t : String(t);
}
function FV(e, t) {
  if (Bs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Bs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Gx = {
  curveBasisClosed: KL,
  curveBasisOpen: VL,
  curveBasis: qL,
  curveBumpX: IL,
  curveBumpY: kL,
  curveLinearClosed: YL,
  curveLinear: Ll,
  curveMonotoneX: XL,
  curveMonotoneY: ZL,
  curveNatural: JL,
  curveStep: QL,
  curveStepAfter: tB,
  curveStepBefore: eB
}, mc = function(t) {
  return t.x === +t.x && t.y === +t.y;
}, ns = function(t) {
  return t.x;
}, is = function(t) {
  return t.y;
}, WV = function(t, r) {
  if (Pe(t))
    return t;
  var n = "curve".concat(Nl(t));
  return (n === "curveMonotone" || n === "curveBump") && r ? Gx["".concat(n).concat(r === "vertical" ? "Y" : "X")] : Gx[n] || Ll;
}, zV = function(t) {
  var r = t.type, n = r === void 0 ? "linear" : r, i = t.points, a = i === void 0 ? [] : i, s = t.baseLine, c = t.layout, l = t.connectNulls, f = l === void 0 ? !1 : l, d = WV(n, c), h = f ? a.filter(function(y) {
    return mc(y);
  }) : a, v;
  if (Array.isArray(s)) {
    var g = f ? s.filter(function(y) {
      return mc(y);
    }) : s, x = h.map(function(y, w) {
      return Hx(Hx({}, y), {}, {
        base: g[w]
      });
    });
    return c === "vertical" ? v = uc().y(is).x1(ns).x0(function(y) {
      return y.base.x;
    }) : v = uc().x(ns).y1(is).y0(function(y) {
      return y.base.y;
    }), v.defined(mc).curve(d), v(x);
  }
  return c === "vertical" && oe(s) ? v = uc().y(is).x1(ns).x0(s) : oe(s) ? v = uc().x(ns).y1(is).y0(s) : v = w_().x(ns).y(is), v.defined(mc).curve(d), v(h);
}, Vi = function(t) {
  var r = t.className, n = t.points, i = t.path, a = t.pathRef;
  if ((!n || !n.length) && !i)
    return null;
  var s = n && n.length ? zV(t) : i;
  return /* @__PURE__ */ k.createElement("path", bp({}, me(t, !1), Tc(t), {
    className: Me("recharts-curve", r),
    d: s,
    ref: a
  }));
}, xp = { exports: {} }, bc = { exports: {} }, Ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qx;
function UV() {
  if (qx) return Ve;
  qx = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function S(b) {
    if (typeof b == "object" && b !== null) {
      var E = b.$$typeof;
      switch (E) {
        case t:
          switch (b = b.type, b) {
            case l:
            case f:
            case n:
            case a:
            case i:
            case h:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case d:
                case x:
                case g:
                case s:
                  return b;
                default:
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  function _(b) {
    return S(b) === f;
  }
  return Ve.AsyncMode = l, Ve.ConcurrentMode = f, Ve.ContextConsumer = c, Ve.ContextProvider = s, Ve.Element = t, Ve.ForwardRef = d, Ve.Fragment = n, Ve.Lazy = x, Ve.Memo = g, Ve.Portal = r, Ve.Profiler = a, Ve.StrictMode = i, Ve.Suspense = h, Ve.isAsyncMode = function(b) {
    return _(b) || S(b) === l;
  }, Ve.isConcurrentMode = _, Ve.isContextConsumer = function(b) {
    return S(b) === c;
  }, Ve.isContextProvider = function(b) {
    return S(b) === s;
  }, Ve.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Ve.isForwardRef = function(b) {
    return S(b) === d;
  }, Ve.isFragment = function(b) {
    return S(b) === n;
  }, Ve.isLazy = function(b) {
    return S(b) === x;
  }, Ve.isMemo = function(b) {
    return S(b) === g;
  }, Ve.isPortal = function(b) {
    return S(b) === r;
  }, Ve.isProfiler = function(b) {
    return S(b) === a;
  }, Ve.isStrictMode = function(b) {
    return S(b) === i;
  }, Ve.isSuspense = function(b) {
    return S(b) === h;
  }, Ve.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === f || b === a || b === i || b === h || b === v || typeof b == "object" && b !== null && (b.$$typeof === x || b.$$typeof === g || b.$$typeof === s || b.$$typeof === c || b.$$typeof === d || b.$$typeof === w || b.$$typeof === A || b.$$typeof === O || b.$$typeof === y);
  }, Ve.typeOf = S, Ve;
}
var Ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kx;
function HV() {
  return Kx || (Kx = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, A = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function S(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === n || j === f || j === a || j === i || j === h || j === v || typeof j == "object" && j !== null && (j.$$typeof === x || j.$$typeof === g || j.$$typeof === s || j.$$typeof === c || j.$$typeof === d || j.$$typeof === w || j.$$typeof === A || j.$$typeof === O || j.$$typeof === y);
    }
    function _(j) {
      if (typeof j == "object" && j !== null) {
        var Ee = j.$$typeof;
        switch (Ee) {
          case t:
            var be = j.type;
            switch (be) {
              case l:
              case f:
              case n:
              case a:
              case i:
              case h:
                return be;
              default:
                var We = be && be.$$typeof;
                switch (We) {
                  case c:
                  case d:
                  case x:
                  case g:
                  case s:
                    return We;
                  default:
                    return Ee;
                }
            }
          case r:
            return Ee;
        }
      }
    }
    var b = l, E = f, C = c, M = s, F = t, D = d, B = n, N = x, U = g, z = r, J = a, H = i, Z = h, q = !1;
    function se(j) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), G(j) || _(j) === l;
    }
    function G(j) {
      return _(j) === f;
    }
    function Y(j) {
      return _(j) === c;
    }
    function ae(j) {
      return _(j) === s;
    }
    function ce(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function he(j) {
      return _(j) === d;
    }
    function ge(j) {
      return _(j) === n;
    }
    function xe(j) {
      return _(j) === x;
    }
    function ye(j) {
      return _(j) === g;
    }
    function we(j) {
      return _(j) === r;
    }
    function ne(j) {
      return _(j) === a;
    }
    function ue(j) {
      return _(j) === i;
    }
    function pe(j) {
      return _(j) === h;
    }
    Ye.AsyncMode = b, Ye.ConcurrentMode = E, Ye.ContextConsumer = C, Ye.ContextProvider = M, Ye.Element = F, Ye.ForwardRef = D, Ye.Fragment = B, Ye.Lazy = N, Ye.Memo = U, Ye.Portal = z, Ye.Profiler = J, Ye.StrictMode = H, Ye.Suspense = Z, Ye.isAsyncMode = se, Ye.isConcurrentMode = G, Ye.isContextConsumer = Y, Ye.isContextProvider = ae, Ye.isElement = ce, Ye.isForwardRef = he, Ye.isFragment = ge, Ye.isLazy = xe, Ye.isMemo = ye, Ye.isPortal = we, Ye.isProfiler = ne, Ye.isStrictMode = ue, Ye.isSuspense = pe, Ye.isValidElementType = S, Ye.typeOf = _;
  }()), Ye;
}
var Vx;
function PA() {
  return Vx || (Vx = 1, process.env.NODE_ENV === "production" ? bc.exports = UV() : bc.exports = HV()), bc.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ch, Yx;
function GV() {
  if (Yx) return ch;
  Yx = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ch = i() ? Object.assign : function(a, s) {
    for (var c, l = n(a), f, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var h in c)
        t.call(c, h) && (l[h] = c[h]);
      if (e) {
        f = e(c);
        for (var v = 0; v < f.length; v++)
          r.call(c, f[v]) && (l[f[v]] = c[f[v]]);
      }
    }
    return l;
  }, ch;
}
var lh, Xx;
function ug() {
  if (Xx) return lh;
  Xx = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return lh = e, lh;
}
var fh, Zx;
function EA() {
  return Zx || (Zx = 1, fh = Function.call.bind(Object.prototype.hasOwnProperty)), fh;
}
var dh, Jx;
function qV() {
  if (Jx) return dh;
  Jx = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = ug(), r = {}, n = EA();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function i(a, s, c, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in a)
        if (n(a, d)) {
          var h;
          try {
            if (typeof a[d] != "function") {
              var v = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            h = a[d](s, d, l, c, null, t);
          } catch (x) {
            h = x;
          }
          if (h && !(h instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in r)) {
            r[h.message] = !0;
            var g = f ? f() : "";
            e(
              "Failed " + c + " type: " + h.message + (g ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, dh = i, dh;
}
var hh, Qx;
function KV() {
  if (Qx) return hh;
  Qx = 1;
  var e = PA(), t = GV(), r = ug(), n = EA(), i = qV(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return hh = function(c, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(G) {
      var Y = G && (f && G[f] || G[d]);
      if (typeof Y == "function")
        return Y;
    }
    var v = "<<anonymous>>", g = {
      array: A("array"),
      bigint: A("bigint"),
      bool: A("boolean"),
      func: A("function"),
      number: A("number"),
      object: A("object"),
      string: A("string"),
      symbol: A("symbol"),
      any: O(),
      arrayOf: S,
      element: _(),
      elementType: b(),
      instanceOf: E,
      node: D(),
      objectOf: M,
      oneOf: C,
      oneOfType: F,
      shape: N,
      exact: U
    };
    function x(G, Y) {
      return G === Y ? G !== 0 || 1 / G === 1 / Y : G !== G && Y !== Y;
    }
    function y(G, Y) {
      this.message = G, this.data = Y && typeof Y == "object" ? Y : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function w(G) {
      if (process.env.NODE_ENV !== "production")
        var Y = {}, ae = 0;
      function ce(ge, xe, ye, we, ne, ue, pe) {
        if (we = we || v, ue = ue || ye, pe !== r) {
          if (l) {
            var j = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw j.name = "Invariant Violation", j;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ee = we + ":" + ye;
            !Y[Ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            ae < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + ue + "` prop on `" + we + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), Y[Ee] = !0, ae++);
          }
        }
        return xe[ye] == null ? ge ? xe[ye] === null ? new y("The " + ne + " `" + ue + "` is marked as required " + ("in `" + we + "`, but its value is `null`.")) : new y("The " + ne + " `" + ue + "` is marked as required in " + ("`" + we + "`, but its value is `undefined`.")) : null : G(xe, ye, we, ne, ue);
      }
      var he = ce.bind(null, !1);
      return he.isRequired = ce.bind(null, !0), he;
    }
    function A(G) {
      function Y(ae, ce, he, ge, xe, ye) {
        var we = ae[ce], ne = H(we);
        if (ne !== G) {
          var ue = Z(we);
          return new y(
            "Invalid " + ge + " `" + xe + "` of type " + ("`" + ue + "` supplied to `" + he + "`, expected ") + ("`" + G + "`."),
            { expectedType: G }
          );
        }
        return null;
      }
      return w(Y);
    }
    function O() {
      return w(s);
    }
    function S(G) {
      function Y(ae, ce, he, ge, xe) {
        if (typeof G != "function")
          return new y("Property `" + xe + "` of component `" + he + "` has invalid PropType notation inside arrayOf.");
        var ye = ae[ce];
        if (!Array.isArray(ye)) {
          var we = H(ye);
          return new y("Invalid " + ge + " `" + xe + "` of type " + ("`" + we + "` supplied to `" + he + "`, expected an array."));
        }
        for (var ne = 0; ne < ye.length; ne++) {
          var ue = G(ye, ne, he, ge, xe + "[" + ne + "]", r);
          if (ue instanceof Error)
            return ue;
        }
        return null;
      }
      return w(Y);
    }
    function _() {
      function G(Y, ae, ce, he, ge) {
        var xe = Y[ae];
        if (!c(xe)) {
          var ye = H(xe);
          return new y("Invalid " + he + " `" + ge + "` of type " + ("`" + ye + "` supplied to `" + ce + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(G);
    }
    function b() {
      function G(Y, ae, ce, he, ge) {
        var xe = Y[ae];
        if (!e.isValidElementType(xe)) {
          var ye = H(xe);
          return new y("Invalid " + he + " `" + ge + "` of type " + ("`" + ye + "` supplied to `" + ce + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(G);
    }
    function E(G) {
      function Y(ae, ce, he, ge, xe) {
        if (!(ae[ce] instanceof G)) {
          var ye = G.name || v, we = se(ae[ce]);
          return new y("Invalid " + ge + " `" + xe + "` of type " + ("`" + we + "` supplied to `" + he + "`, expected ") + ("instance of `" + ye + "`."));
        }
        return null;
      }
      return w(Y);
    }
    function C(G) {
      if (!Array.isArray(G))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function Y(ae, ce, he, ge, xe) {
        for (var ye = ae[ce], we = 0; we < G.length; we++)
          if (x(ye, G[we]))
            return null;
        var ne = JSON.stringify(G, function(pe, j) {
          var Ee = Z(j);
          return Ee === "symbol" ? String(j) : j;
        });
        return new y("Invalid " + ge + " `" + xe + "` of value `" + String(ye) + "` " + ("supplied to `" + he + "`, expected one of " + ne + "."));
      }
      return w(Y);
    }
    function M(G) {
      function Y(ae, ce, he, ge, xe) {
        if (typeof G != "function")
          return new y("Property `" + xe + "` of component `" + he + "` has invalid PropType notation inside objectOf.");
        var ye = ae[ce], we = H(ye);
        if (we !== "object")
          return new y("Invalid " + ge + " `" + xe + "` of type " + ("`" + we + "` supplied to `" + he + "`, expected an object."));
        for (var ne in ye)
          if (n(ye, ne)) {
            var ue = G(ye, ne, he, ge, xe + "." + ne, r);
            if (ue instanceof Error)
              return ue;
          }
        return null;
      }
      return w(Y);
    }
    function F(G) {
      if (!Array.isArray(G))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var Y = 0; Y < G.length; Y++) {
        var ae = G[Y];
        if (typeof ae != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(ae) + " at index " + Y + "."
          ), s;
      }
      function ce(he, ge, xe, ye, we) {
        for (var ne = [], ue = 0; ue < G.length; ue++) {
          var pe = G[ue], j = pe(he, ge, xe, ye, we, r);
          if (j == null)
            return null;
          j.data && n(j.data, "expectedType") && ne.push(j.data.expectedType);
        }
        var Ee = ne.length > 0 ? ", expected one of type [" + ne.join(", ") + "]" : "";
        return new y("Invalid " + ye + " `" + we + "` supplied to " + ("`" + xe + "`" + Ee + "."));
      }
      return w(ce);
    }
    function D() {
      function G(Y, ae, ce, he, ge) {
        return z(Y[ae]) ? null : new y("Invalid " + he + " `" + ge + "` supplied to " + ("`" + ce + "`, expected a ReactNode."));
      }
      return w(G);
    }
    function B(G, Y, ae, ce, he) {
      return new y(
        (G || "React class") + ": " + Y + " type `" + ae + "." + ce + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + he + "`."
      );
    }
    function N(G) {
      function Y(ae, ce, he, ge, xe) {
        var ye = ae[ce], we = H(ye);
        if (we !== "object")
          return new y("Invalid " + ge + " `" + xe + "` of type `" + we + "` " + ("supplied to `" + he + "`, expected `object`."));
        for (var ne in G) {
          var ue = G[ne];
          if (typeof ue != "function")
            return B(he, ge, xe, ne, Z(ue));
          var pe = ue(ye, ne, he, ge, xe + "." + ne, r);
          if (pe)
            return pe;
        }
        return null;
      }
      return w(Y);
    }
    function U(G) {
      function Y(ae, ce, he, ge, xe) {
        var ye = ae[ce], we = H(ye);
        if (we !== "object")
          return new y("Invalid " + ge + " `" + xe + "` of type `" + we + "` " + ("supplied to `" + he + "`, expected `object`."));
        var ne = t({}, ae[ce], G);
        for (var ue in ne) {
          var pe = G[ue];
          if (n(G, ue) && typeof pe != "function")
            return B(he, ge, xe, ue, Z(pe));
          if (!pe)
            return new y(
              "Invalid " + ge + " `" + xe + "` key `" + ue + "` supplied to `" + he + "`.\nBad object: " + JSON.stringify(ae[ce], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(G), null, "  ")
            );
          var j = pe(ye, ue, he, ge, xe + "." + ue, r);
          if (j)
            return j;
        }
        return null;
      }
      return w(Y);
    }
    function z(G) {
      switch (typeof G) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !G;
        case "object":
          if (Array.isArray(G))
            return G.every(z);
          if (G === null || c(G))
            return !0;
          var Y = h(G);
          if (Y) {
            var ae = Y.call(G), ce;
            if (Y !== G.entries) {
              for (; !(ce = ae.next()).done; )
                if (!z(ce.value))
                  return !1;
            } else
              for (; !(ce = ae.next()).done; ) {
                var he = ce.value;
                if (he && !z(he[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(G, Y) {
      return G === "symbol" ? !0 : Y ? Y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && Y instanceof Symbol : !1;
    }
    function H(G) {
      var Y = typeof G;
      return Array.isArray(G) ? "array" : G instanceof RegExp ? "object" : J(Y, G) ? "symbol" : Y;
    }
    function Z(G) {
      if (typeof G > "u" || G === null)
        return "" + G;
      var Y = H(G);
      if (Y === "object") {
        if (G instanceof Date)
          return "date";
        if (G instanceof RegExp)
          return "regexp";
      }
      return Y;
    }
    function q(G) {
      var Y = Z(G);
      switch (Y) {
        case "array":
        case "object":
          return "an " + Y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + Y;
        default:
          return Y;
      }
    }
    function se(G) {
      return !G.constructor || !G.constructor.name ? v : G.constructor.name;
    }
    return g.checkPropTypes = i, g.resetWarningCache = i.resetWarningCache, g.PropTypes = g, g;
  }, hh;
}
var ph, ew;
function VV() {
  if (ew) return ph;
  ew = 1;
  var e = ug();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ph = function() {
    function n(s, c, l, f, d, h) {
      if (h !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, ph;
}
if (process.env.NODE_ENV !== "production") {
  var YV = PA(), XV = !0;
  xp.exports = KV()(YV.isElement, XV);
} else
  xp.exports = VV()();
var ZV = xp.exports;
const je = /* @__PURE__ */ Je(ZV);
var JV = Object.getOwnPropertyNames, QV = Object.getOwnPropertySymbols, e9 = Object.prototype.hasOwnProperty;
function tw(e, t) {
  return function(n, i, a) {
    return e(n, i, a) && t(n, i, a);
  };
}
function xc(e) {
  return function(r, n, i) {
    if (!r || !n || typeof r != "object" || typeof n != "object")
      return e(r, n, i);
    var a = i.cache, s = a.get(r), c = a.get(n);
    if (s && c)
      return s === n && c === r;
    a.set(r, n), a.set(n, r);
    var l = e(r, n, i);
    return a.delete(r), a.delete(n), l;
  };
}
function rw(e) {
  return JV(e).concat(QV(e));
}
var TA = Object.hasOwn || function(e, t) {
  return e9.call(e, t);
};
function Ao(e, t) {
  return e || t ? e === t : e === t || e !== e && t !== t;
}
var $A = "_owner", nw = Object.getOwnPropertyDescriptor, iw = Object.keys;
function t9(e, t, r) {
  var n = e.length;
  if (t.length !== n)
    return !1;
  for (; n-- > 0; )
    if (!r.equals(e[n], t[n], n, n, e, t, r))
      return !1;
  return !0;
}
function r9(e, t) {
  return Ao(e.getTime(), t.getTime());
}
function aw(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.entries(), a = 0, s, c; (s = i.next()) && !s.done; ) {
    for (var l = t.entries(), f = !1, d = 0; (c = l.next()) && !c.done; ) {
      var h = s.value, v = h[0], g = h[1], x = c.value, y = x[0], w = x[1];
      !f && !n[d] && (f = r.equals(v, y, a, d, e, t, r) && r.equals(g, w, v, y, e, t, r)) && (n[d] = !0), d++;
    }
    if (!f)
      return !1;
    a++;
  }
  return !0;
}
function n9(e, t, r) {
  var n = iw(e), i = n.length;
  if (iw(t).length !== i)
    return !1;
  for (var a; i-- > 0; )
    if (a = n[i], a === $A && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !TA(t, a) || !r.equals(e[a], t[a], a, a, e, t, r))
      return !1;
  return !0;
}
function as(e, t, r) {
  var n = rw(e), i = n.length;
  if (rw(t).length !== i)
    return !1;
  for (var a, s, c; i-- > 0; )
    if (a = n[i], a === $A && (e.$$typeof || t.$$typeof) && e.$$typeof !== t.$$typeof || !TA(t, a) || !r.equals(e[a], t[a], a, a, e, t, r) || (s = nw(e, a), c = nw(t, a), (s || c) && (!s || !c || s.configurable !== c.configurable || s.enumerable !== c.enumerable || s.writable !== c.writable)))
      return !1;
  return !0;
}
function i9(e, t) {
  return Ao(e.valueOf(), t.valueOf());
}
function a9(e, t) {
  return e.source === t.source && e.flags === t.flags;
}
function ow(e, t, r) {
  if (e.size !== t.size)
    return !1;
  for (var n = {}, i = e.values(), a, s; (a = i.next()) && !a.done; ) {
    for (var c = t.values(), l = !1, f = 0; (s = c.next()) && !s.done; )
      !l && !n[f] && (l = r.equals(a.value, s.value, a.value, s.value, e, t, r)) && (n[f] = !0), f++;
    if (!l)
      return !1;
  }
  return !0;
}
function o9(e, t) {
  var r = e.length;
  if (t.length !== r)
    return !1;
  for (; r-- > 0; )
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var s9 = "[object Arguments]", u9 = "[object Boolean]", c9 = "[object Date]", l9 = "[object Map]", f9 = "[object Number]", d9 = "[object Object]", h9 = "[object RegExp]", p9 = "[object Set]", v9 = "[object String]", g9 = Array.isArray, sw = typeof ArrayBuffer == "function" && ArrayBuffer.isView ? ArrayBuffer.isView : null, uw = Object.assign, y9 = Object.prototype.toString.call.bind(Object.prototype.toString);
function m9(e) {
  var t = e.areArraysEqual, r = e.areDatesEqual, n = e.areMapsEqual, i = e.areObjectsEqual, a = e.arePrimitiveWrappersEqual, s = e.areRegExpsEqual, c = e.areSetsEqual, l = e.areTypedArraysEqual;
  return function(d, h, v) {
    if (d === h)
      return !0;
    if (d == null || h == null || typeof d != "object" || typeof h != "object")
      return d !== d && h !== h;
    var g = d.constructor;
    if (g !== h.constructor)
      return !1;
    if (g === Object)
      return i(d, h, v);
    if (g9(d))
      return t(d, h, v);
    if (sw != null && sw(d))
      return l(d, h, v);
    if (g === Date)
      return r(d, h, v);
    if (g === RegExp)
      return s(d, h, v);
    if (g === Map)
      return n(d, h, v);
    if (g === Set)
      return c(d, h, v);
    var x = y9(d);
    return x === c9 ? r(d, h, v) : x === h9 ? s(d, h, v) : x === l9 ? n(d, h, v) : x === p9 ? c(d, h, v) : x === d9 ? typeof d.then != "function" && typeof h.then != "function" && i(d, h, v) : x === s9 ? i(d, h, v) : x === u9 || x === f9 || x === v9 ? a(d, h, v) : !1;
  };
}
function b9(e) {
  var t = e.circular, r = e.createCustomConfig, n = e.strict, i = {
    areArraysEqual: n ? as : t9,
    areDatesEqual: r9,
    areMapsEqual: n ? tw(aw, as) : aw,
    areObjectsEqual: n ? as : n9,
    arePrimitiveWrappersEqual: i9,
    areRegExpsEqual: a9,
    areSetsEqual: n ? tw(ow, as) : ow,
    areTypedArraysEqual: n ? as : o9
  };
  if (r && (i = uw({}, i, r(i))), t) {
    var a = xc(i.areArraysEqual), s = xc(i.areMapsEqual), c = xc(i.areObjectsEqual), l = xc(i.areSetsEqual);
    i = uw({}, i, {
      areArraysEqual: a,
      areMapsEqual: s,
      areObjectsEqual: c,
      areSetsEqual: l
    });
  }
  return i;
}
function x9(e) {
  return function(t, r, n, i, a, s, c) {
    return e(t, r, c);
  };
}
function w9(e) {
  var t = e.circular, r = e.comparator, n = e.createState, i = e.equals, a = e.strict;
  if (n)
    return function(l, f) {
      var d = n(), h = d.cache, v = h === void 0 ? t ? /* @__PURE__ */ new WeakMap() : void 0 : h, g = d.meta;
      return r(l, f, {
        cache: v,
        equals: i,
        meta: g,
        strict: a
      });
    };
  if (t)
    return function(l, f) {
      return r(l, f, {
        cache: /* @__PURE__ */ new WeakMap(),
        equals: i,
        meta: void 0,
        strict: a
      });
    };
  var s = {
    cache: void 0,
    equals: i,
    meta: void 0,
    strict: a
  };
  return function(l, f) {
    return r(l, f, s);
  };
}
var _9 = wi();
wi({ strict: !0 });
wi({ circular: !0 });
wi({
  circular: !0,
  strict: !0
});
wi({
  createInternalComparator: function() {
    return Ao;
  }
});
wi({
  strict: !0,
  createInternalComparator: function() {
    return Ao;
  }
});
wi({
  circular: !0,
  createInternalComparator: function() {
    return Ao;
  }
});
wi({
  circular: !0,
  createInternalComparator: function() {
    return Ao;
  },
  strict: !0
});
function wi(e) {
  e === void 0 && (e = {});
  var t = e.circular, r = t === void 0 ? !1 : t, n = e.createInternalComparator, i = e.createState, a = e.strict, s = a === void 0 ? !1 : a, c = b9(e), l = m9(c), f = n ? n(l) : x9(l);
  return w9({ circular: r, comparator: l, createState: i, equals: f, strict: s });
}
function O9(e) {
  typeof requestAnimationFrame < "u" && requestAnimationFrame(e);
}
function cw(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = -1, n = function i(a) {
    r < 0 && (r = a), a - r > t ? (e(a), r = -1) : O9(i);
  };
  requestAnimationFrame(n);
}
function wp(e) {
  "@babel/helpers - typeof";
  return wp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wp(e);
}
function A9(e) {
  return T9(e) || E9(e) || P9(e) || S9();
}
function S9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function P9(e, t) {
  if (e) {
    if (typeof e == "string") return lw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return lw(e, t);
  }
}
function lw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function E9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function T9(e) {
  if (Array.isArray(e)) return e;
}
function $9() {
  var e = {}, t = function() {
    return null;
  }, r = !1, n = function i(a) {
    if (!r) {
      if (Array.isArray(a)) {
        if (!a.length)
          return;
        var s = a, c = A9(s), l = c[0], f = c.slice(1);
        if (typeof l == "number") {
          cw(i.bind(null, f), l);
          return;
        }
        i(l), cw(i.bind(null, f));
        return;
      }
      wp(a) === "object" && (e = a, t(e)), typeof a == "function" && a();
    }
  };
  return {
    stop: function() {
      r = !0;
    },
    start: function(a) {
      r = !1, n(a);
    },
    subscribe: function(a) {
      return t = a, function() {
        t = function() {
          return null;
        };
      };
    }
  };
}
function Fs(e) {
  "@babel/helpers - typeof";
  return Fs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Fs(e);
}
function fw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? fw(Object(r), !0).forEach(function(n) {
      CA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : fw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CA(e, t, r) {
  return t = C9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function C9(e) {
  var t = M9(e, "string");
  return Fs(t) === "symbol" ? t : String(t);
}
function M9(e, t) {
  if (Fs(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Fs(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var I9 = function(t, r) {
  return [Object.keys(t), Object.keys(r)].reduce(function(n, i) {
    return n.filter(function(a) {
      return i.includes(a);
    });
  });
}, k9 = function(t) {
  return t;
}, j9 = function(t) {
  return t.replace(/([A-Z])/g, function(r) {
    return "-".concat(r.toLowerCase());
  });
}, hs = function(t, r) {
  return Object.keys(r).reduce(function(n, i) {
    return dw(dw({}, n), {}, CA({}, i, t(i, r[i])));
  }, {});
}, hw = function(t, r, n) {
  return t.map(function(i) {
    return "".concat(j9(i), " ").concat(r, "ms ").concat(n);
  }).join(",");
}, R9 = process.env.NODE_ENV !== "production", il = function(t, r, n, i, a, s, c, l) {
  if (R9 && typeof console < "u" && console.warn && (r === void 0 && console.warn("LogUtils requires an error message argument"), !t))
    if (r === void 0)
      console.warn("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var f = [n, i, a, s, c, l], d = 0;
      console.warn(r.replace(/%s/g, function() {
        return f[d++];
      }));
    }
};
function N9(e, t) {
  return B9(e) || L9(e, t) || MA(e, t) || D9();
}
function D9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L9(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function B9(e) {
  if (Array.isArray(e)) return e;
}
function F9(e) {
  return U9(e) || z9(e) || MA(e) || W9();
}
function W9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function MA(e, t) {
  if (e) {
    if (typeof e == "string") return _p(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _p(e, t);
  }
}
function z9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function U9(e) {
  if (Array.isArray(e)) return _p(e);
}
function _p(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var al = 1e-4, IA = function(t, r) {
  return [0, 3 * t, 3 * r - 6 * t, 3 * t - 3 * r + 1];
}, kA = function(t, r) {
  return t.map(function(n, i) {
    return n * Math.pow(r, i);
  }).reduce(function(n, i) {
    return n + i;
  });
}, pw = function(t, r) {
  return function(n) {
    var i = IA(t, r);
    return kA(i, n);
  };
}, H9 = function(t, r) {
  return function(n) {
    var i = IA(t, r), a = [].concat(F9(i.map(function(s, c) {
      return s * c;
    }).slice(1)), [0]);
    return kA(a, n);
  };
}, vw = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0], a = r[1], s = r[2], c = r[3];
  if (r.length === 1)
    switch (r[0]) {
      case "linear":
        i = 0, a = 0, s = 1, c = 1;
        break;
      case "ease":
        i = 0.25, a = 0.1, s = 0.25, c = 1;
        break;
      case "ease-in":
        i = 0.42, a = 0, s = 1, c = 1;
        break;
      case "ease-out":
        i = 0.42, a = 0, s = 0.58, c = 1;
        break;
      case "ease-in-out":
        i = 0, a = 0, s = 0.58, c = 1;
        break;
      default: {
        var l = r[0].split("(");
        if (l[0] === "cubic-bezier" && l[1].split(")")[0].split(",").length === 4) {
          var f = l[1].split(")")[0].split(",").map(function(w) {
            return parseFloat(w);
          }), d = N9(f, 4);
          i = d[0], a = d[1], s = d[2], c = d[3];
        } else
          il(!1, "[configBezier]: arguments should be one of oneOf 'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', instead received %s", r);
      }
    }
  il([i, s, a, c].every(function(w) {
    return typeof w == "number" && w >= 0 && w <= 1;
  }), "[configBezier]: arguments should be x1, y1, x2, y2 of [0, 1] instead received %s", r);
  var h = pw(i, s), v = pw(a, c), g = H9(i, s), x = function(A) {
    return A > 1 ? 1 : A < 0 ? 0 : A;
  }, y = function(A) {
    for (var O = A > 1 ? 1 : A, S = O, _ = 0; _ < 8; ++_) {
      var b = h(S) - O, E = g(S);
      if (Math.abs(b - O) < al || E < al)
        return v(S);
      S = x(S - b / E);
    }
    return v(S);
  };
  return y.isStepper = !1, y;
}, G9 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = t.stiff, n = r === void 0 ? 100 : r, i = t.damping, a = i === void 0 ? 8 : i, s = t.dt, c = s === void 0 ? 17 : s, l = function(d, h, v) {
    var g = -(d - h) * n, x = v * a, y = v + (g - x) * c / 1e3, w = v * c / 1e3 + d;
    return Math.abs(w - h) < al && Math.abs(y) < al ? [h, 0] : [w, y];
  };
  return l.isStepper = !0, l.dt = c, l;
}, q9 = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var i = r[0];
  if (typeof i == "string")
    switch (i) {
      case "ease":
      case "ease-in-out":
      case "ease-out":
      case "ease-in":
      case "linear":
        return vw(i);
      case "spring":
        return G9();
      default:
        if (i.split("(")[0] === "cubic-bezier")
          return vw(i);
        il(!1, "[configEasing]: first argument should be one of 'ease', 'ease-in', 'ease-out', 'ease-in-out','cubic-bezier(x1,y1,x2,y2)', 'linear' and 'spring', instead  received %s", r);
    }
  return typeof i == "function" ? i : (il(!1, "[configEasing]: first argument type should be function or string, instead received %s", r), null);
};
function Ws(e) {
  "@babel/helpers - typeof";
  return Ws = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ws(e);
}
function gw(e) {
  return Y9(e) || V9(e) || jA(e) || K9();
}
function K9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function V9(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Y9(e) {
  if (Array.isArray(e)) return Ap(e);
}
function yw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yw(Object(r), !0).forEach(function(n) {
      Op(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : yw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Op(e, t, r) {
  return t = X9(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function X9(e) {
  var t = Z9(e, "string");
  return Ws(t) === "symbol" ? t : String(t);
}
function Z9(e, t) {
  if (Ws(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ws(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function J9(e, t) {
  return tY(e) || eY(e, t) || jA(e, t) || Q9();
}
function Q9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jA(e, t) {
  if (e) {
    if (typeof e == "string") return Ap(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Ap(e, t);
  }
}
function Ap(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function eY(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function tY(e) {
  if (Array.isArray(e)) return e;
}
var ol = function(t, r, n) {
  return t + (r - t) * n;
}, Sp = function(t) {
  var r = t.from, n = t.to;
  return r !== n;
}, rY = function e(t, r, n) {
  var i = hs(function(a, s) {
    if (Sp(s)) {
      var c = t(s.from, s.to, s.velocity), l = J9(c, 2), f = l[0], d = l[1];
      return Rt(Rt({}, s), {}, {
        from: f,
        velocity: d
      });
    }
    return s;
  }, r);
  return n < 1 ? hs(function(a, s) {
    return Sp(s) ? Rt(Rt({}, s), {}, {
      velocity: ol(s.velocity, i[a].velocity, n),
      from: ol(s.from, i[a].from, n)
    }) : s;
  }, r) : e(t, i, n - 1);
};
const nY = function(e, t, r, n, i) {
  var a = I9(e, t), s = a.reduce(function(w, A) {
    return Rt(Rt({}, w), {}, Op({}, A, [e[A], t[A]]));
  }, {}), c = a.reduce(function(w, A) {
    return Rt(Rt({}, w), {}, Op({}, A, {
      from: e[A],
      velocity: 0,
      to: t[A]
    }));
  }, {}), l = -1, f, d, h = function() {
    return null;
  }, v = function() {
    return hs(function(A, O) {
      return O.from;
    }, c);
  }, g = function() {
    return !Object.values(c).filter(Sp).length;
  }, x = function(A) {
    f || (f = A);
    var O = A - f, S = O / r.dt;
    c = rY(r, c, S), i(Rt(Rt(Rt({}, e), t), v())), f = A, g() || (l = requestAnimationFrame(h));
  }, y = function(A) {
    d || (d = A);
    var O = (A - d) / n, S = hs(function(b, E) {
      return ol.apply(void 0, gw(E).concat([r(O)]));
    }, s);
    if (i(Rt(Rt(Rt({}, e), t), S)), O < 1)
      l = requestAnimationFrame(h);
    else {
      var _ = hs(function(b, E) {
        return ol.apply(void 0, gw(E).concat([r(1)]));
      }, s);
      i(Rt(Rt(Rt({}, e), t), _));
    }
  };
  return h = r.isStepper ? x : y, function() {
    return requestAnimationFrame(h), function() {
      cancelAnimationFrame(l);
    };
  };
};
function Va(e) {
  "@babel/helpers - typeof";
  return Va = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Va(e);
}
var iY = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
function aY(e, t) {
  if (e == null) return {};
  var r = oY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function oY(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function vh(e) {
  return lY(e) || cY(e) || uY(e) || sY();
}
function sY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function uY(e, t) {
  if (e) {
    if (typeof e == "string") return Pp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Pp(e, t);
  }
}
function cY(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function lY(e) {
  if (Array.isArray(e)) return Pp(e);
}
function Pp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function mw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mw(Object(r), !0).forEach(function(n) {
      ss(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : mw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function ss(e, t, r) {
  return t = RA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fY(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dY(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, RA(n.key), n);
  }
}
function hY(e, t, r) {
  return t && dY(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function RA(e) {
  var t = pY(e, "string");
  return Va(t) === "symbol" ? t : String(t);
}
function pY(e, t) {
  if (Va(e) !== "object" || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Va(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function vY(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ep(e, t);
}
function Ep(e, t) {
  return Ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Ep(e, t);
}
function gY(e) {
  var t = yY();
  return function() {
    var n = sl(e), i;
    if (t) {
      var a = sl(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Tp(this, i);
  };
}
function Tp(e, t) {
  if (t && (Va(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $p(e);
}
function $p(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function yY() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function sl(e) {
  return sl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, sl(e);
}
var Xr = /* @__PURE__ */ function(e) {
  vY(r, e);
  var t = gY(r);
  function r(n, i) {
    var a;
    fY(this, r), a = t.call(this, n, i);
    var s = a.props, c = s.isActive, l = s.attributeName, f = s.from, d = s.to, h = s.steps, v = s.children, g = s.duration;
    if (a.handleStyleChange = a.handleStyleChange.bind($p(a)), a.changeStyle = a.changeStyle.bind($p(a)), !c || g <= 0)
      return a.state = {
        style: {}
      }, typeof v == "function" && (a.state = {
        style: d
      }), Tp(a);
    if (h && h.length)
      a.state = {
        style: h[0].style
      };
    else if (f) {
      if (typeof v == "function")
        return a.state = {
          style: f
        }, Tp(a);
      a.state = {
        style: l ? ss({}, l, f) : f
      };
    } else
      a.state = {
        style: {}
      };
    return a;
  }
  return hY(r, [{
    key: "componentDidMount",
    value: function() {
      var i = this.props, a = i.isActive, s = i.canBegin;
      this.mounted = !0, !(!a || !s) && this.runAnimation(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function(i) {
      var a = this.props, s = a.isActive, c = a.canBegin, l = a.attributeName, f = a.shouldReAnimate, d = a.to, h = a.from, v = this.state.style;
      if (c) {
        if (!s) {
          var g = {
            style: l ? ss({}, l, d) : d
          };
          this.state && v && (l && v[l] !== d || !l && v !== d) && this.setState(g);
          return;
        }
        if (!(_9(i.to, d) && i.canBegin && i.isActive)) {
          var x = !i.canBegin || !i.isActive;
          this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
          var y = x || f ? h : i.to;
          if (this.state && v) {
            var w = {
              style: l ? ss({}, l, y) : y
            };
            (l && v[l] !== y || !l && v !== y) && this.setState(w);
          }
          this.runAnimation(Ur(Ur({}, this.props), {}, {
            from: y,
            begin: 0
          }));
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.mounted = !1;
      var i = this.props.onAnimationEnd;
      this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), this.manager = null), this.stopJSAnimation && this.stopJSAnimation(), i && i();
    }
  }, {
    key: "handleStyleChange",
    value: function(i) {
      this.changeStyle(i);
    }
  }, {
    key: "changeStyle",
    value: function(i) {
      this.mounted && this.setState({
        style: i
      });
    }
  }, {
    key: "runJSAnimation",
    value: function(i) {
      var a = this, s = i.from, c = i.to, l = i.duration, f = i.easing, d = i.begin, h = i.onAnimationEnd, v = i.onAnimationStart, g = nY(s, c, q9(f), l, this.changeStyle), x = function() {
        a.stopJSAnimation = g();
      };
      this.manager.start([v, d, x, l, h]);
    }
  }, {
    key: "runStepAnimation",
    value: function(i) {
      var a = this, s = i.steps, c = i.begin, l = i.onAnimationStart, f = s[0], d = f.style, h = f.duration, v = h === void 0 ? 0 : h, g = function(y, w, A) {
        if (A === 0)
          return y;
        var O = w.duration, S = w.easing, _ = S === void 0 ? "ease" : S, b = w.style, E = w.properties, C = w.onAnimationEnd, M = A > 0 ? s[A - 1] : w, F = E || Object.keys(b);
        if (typeof _ == "function" || _ === "spring")
          return [].concat(vh(y), [a.runJSAnimation.bind(a, {
            from: M.style,
            to: b,
            duration: O,
            easing: _
          }), O]);
        var D = hw(F, O, _), B = Ur(Ur(Ur({}, M.style), b), {}, {
          transition: D
        });
        return [].concat(vh(y), [B, O, C]).filter(k9);
      };
      return this.manager.start([l].concat(vh(s.reduce(g, [d, Math.max(v, c)])), [i.onAnimationEnd]));
    }
  }, {
    key: "runAnimation",
    value: function(i) {
      this.manager || (this.manager = $9());
      var a = i.begin, s = i.duration, c = i.attributeName, l = i.to, f = i.easing, d = i.onAnimationStart, h = i.onAnimationEnd, v = i.steps, g = i.children, x = this.manager;
      if (this.unSubscribe = x.subscribe(this.handleStyleChange), typeof f == "function" || typeof g == "function" || f === "spring") {
        this.runJSAnimation(i);
        return;
      }
      if (v.length > 1) {
        this.runStepAnimation(i);
        return;
      }
      var y = c ? ss({}, c, l) : l, w = hw(Object.keys(y), s, f);
      x.start([d, a, Ur(Ur({}, y), {}, {
        transition: w
      }), s, h]);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, a = i.children;
      i.begin;
      var s = i.duration;
      i.attributeName, i.easing;
      var c = i.isActive;
      i.steps, i.from, i.to, i.canBegin, i.onAnimationEnd, i.shouldReAnimate, i.onAnimationReStart;
      var l = aY(i, iY), f = Gi.count(a), d = this.state.style;
      if (typeof a == "function")
        return a(d);
      if (!c || f === 0 || s <= 0)
        return a;
      var h = function(g) {
        var x = g.props, y = x.style, w = y === void 0 ? {} : y, A = x.className, O = /* @__PURE__ */ At(g, Ur(Ur({}, l), {}, {
          style: Ur(Ur({}, w), d),
          className: A
        }));
        return O;
      };
      return f === 1 ? h(Gi.only(a)) : /* @__PURE__ */ k.createElement("div", null, Gi.map(a, function(v) {
        return h(v);
      }));
    }
  }]), r;
}(Nr);
Xr.displayName = "Animate";
Xr.defaultProps = {
  begin: 0,
  duration: 1e3,
  from: "",
  to: "",
  attributeName: "",
  easing: "ease",
  isActive: !0,
  canBegin: !0,
  steps: [],
  onAnimationEnd: function() {
  },
  onAnimationStart: function() {
  }
};
Xr.propTypes = {
  from: je.oneOfType([je.object, je.string]),
  to: je.oneOfType([je.object, je.string]),
  attributeName: je.string,
  // animation duration
  duration: je.number,
  begin: je.number,
  easing: je.oneOfType([je.string, je.func]),
  steps: je.arrayOf(je.shape({
    duration: je.number.isRequired,
    style: je.object.isRequired,
    easing: je.oneOfType([je.oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), je.func]),
    // transition css properties(dash case), optional
    properties: je.arrayOf("string"),
    onAnimationEnd: je.func
  })),
  children: je.oneOfType([je.node, je.func]),
  isActive: je.bool,
  canBegin: je.bool,
  onAnimationEnd: je.func,
  // decide if it should reanimate with initial from style when props change
  shouldReAnimate: je.bool,
  onAnimationStart: je.func,
  onAnimationReStart: je.func
};
je.object, je.object, je.object, je.element;
je.object, je.object, je.object, je.oneOfType([je.array, je.element]), je.any;
function zs(e) {
  "@babel/helpers - typeof";
  return zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, zs(e);
}
function ul() {
  return ul = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ul.apply(this, arguments);
}
function mY(e, t) {
  return _Y(e) || wY(e, t) || xY(e, t) || bY();
}
function bY() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xY(e, t) {
  if (e) {
    if (typeof e == "string") return bw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return bw(e, t);
  }
}
function bw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wY(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function _Y(e) {
  if (Array.isArray(e)) return e;
}
function xw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ww(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xw(Object(r), !0).forEach(function(n) {
      OY(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function OY(e, t, r) {
  return t = AY(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function AY(e) {
  var t = SY(e, "string");
  return zs(t) == "symbol" ? t : String(t);
}
function SY(e, t) {
  if (zs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (zs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _w = function(t, r, n, i, a) {
  var s = Math.min(Math.abs(n) / 2, Math.abs(i) / 2), c = i >= 0 ? 1 : -1, l = n >= 0 ? 1 : -1, f = i >= 0 && n >= 0 || i < 0 && n < 0 ? 1 : 0, d;
  if (s > 0 && a instanceof Array) {
    for (var h = [0, 0, 0, 0], v = 0, g = 4; v < g; v++)
      h[v] = a[v] > s ? s : a[v];
    d = "M".concat(t, ",").concat(r + c * h[0]), h[0] > 0 && (d += "A ".concat(h[0], ",").concat(h[0], ",0,0,").concat(f, ",").concat(t + l * h[0], ",").concat(r)), d += "L ".concat(t + n - l * h[1], ",").concat(r), h[1] > 0 && (d += "A ".concat(h[1], ",").concat(h[1], ",0,0,").concat(f, `,
        `).concat(t + n, ",").concat(r + c * h[1])), d += "L ".concat(t + n, ",").concat(r + i - c * h[2]), h[2] > 0 && (d += "A ".concat(h[2], ",").concat(h[2], ",0,0,").concat(f, `,
        `).concat(t + n - l * h[2], ",").concat(r + i)), d += "L ".concat(t + l * h[3], ",").concat(r + i), h[3] > 0 && (d += "A ".concat(h[3], ",").concat(h[3], ",0,0,").concat(f, `,
        `).concat(t, ",").concat(r + i - c * h[3])), d += "Z";
  } else if (s > 0 && a === +a && a > 0) {
    var x = Math.min(s, a);
    d = "M ".concat(t, ",").concat(r + c * x, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t + l * x, ",").concat(r, `
            L `).concat(t + n - l * x, ",").concat(r, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t + n, ",").concat(r + c * x, `
            L `).concat(t + n, ",").concat(r + i - c * x, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t + n - l * x, ",").concat(r + i, `
            L `).concat(t + l * x, ",").concat(r + i, `
            A `).concat(x, ",").concat(x, ",0,0,").concat(f, ",").concat(t, ",").concat(r + i - c * x, " Z");
  } else
    d = "M ".concat(t, ",").concat(r, " h ").concat(n, " v ").concat(i, " h ").concat(-n, " Z");
  return d;
}, PY = function(t, r) {
  if (!t || !r)
    return !1;
  var n = t.x, i = t.y, a = r.x, s = r.y, c = r.width, l = r.height;
  if (Math.abs(c) > 0 && Math.abs(l) > 0) {
    var f = Math.min(a, a + c), d = Math.max(a, a + c), h = Math.min(s, s + l), v = Math.max(s, s + l);
    return n >= f && n <= d && i >= h && i <= v;
  }
  return !1;
}, EY = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  // The radius of border
  // The radius of four corners when radius is a number
  // The radius of left-top, right-top, right-bottom, left-bottom when radius is an array
  radius: 0,
  isAnimationActive: !1,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, cg = function(t) {
  var r = ww(ww({}, EY), t), n = La(), i = jn(-1), a = mY(i, 2), s = a[0], c = a[1];
  ea(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var _ = n.current.getTotalLength();
        _ && c(_);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.width, h = r.height, v = r.radius, g = r.className, x = r.animationEasing, y = r.animationDuration, w = r.animationBegin, A = r.isAnimationActive, O = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || d === 0 || h === 0)
    return null;
  var S = Me("recharts-rectangle", g);
  return O ? /* @__PURE__ */ k.createElement(Xr, {
    canBegin: s > 0,
    from: {
      width: d,
      height: h,
      x: l,
      y: f
    },
    to: {
      width: d,
      height: h,
      x: l,
      y: f
    },
    duration: y,
    animationEasing: x,
    isActive: O
  }, function(_) {
    var b = _.width, E = _.height, C = _.x, M = _.y;
    return /* @__PURE__ */ k.createElement(Xr, {
      canBegin: s > 0,
      from: "0px ".concat(s === -1 ? 1 : s, "px"),
      to: "".concat(s, "px 0px"),
      attributeName: "strokeDasharray",
      begin: w,
      duration: y,
      isActive: A,
      easing: x
    }, /* @__PURE__ */ k.createElement("path", ul({}, me(r, !0), {
      className: S,
      d: _w(C, M, b, E, v),
      ref: n
    })));
  }) : /* @__PURE__ */ k.createElement("path", ul({}, me(r, !0), {
    className: S,
    d: _w(l, f, d, h, v)
  }));
}, TY = ["points", "className", "baseLinePoints", "connectNulls"];
function $a() {
  return $a = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, $a.apply(this, arguments);
}
function $Y(e, t) {
  if (e == null) return {};
  var r = CY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function CY(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Ow(e) {
  return jY(e) || kY(e) || IY(e) || MY();
}
function MY() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function IY(e, t) {
  if (e) {
    if (typeof e == "string") return Cp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cp(e, t);
  }
}
function kY(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function jY(e) {
  if (Array.isArray(e)) return Cp(e);
}
function Cp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Aw = function(t) {
  return t && t.x === +t.x && t.y === +t.y;
}, RY = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = [[]];
  return t.forEach(function(n) {
    Aw(n) ? r[r.length - 1].push(n) : r[r.length - 1].length > 0 && r.push([]);
  }), Aw(t[0]) && r[r.length - 1].push(t[0]), r[r.length - 1].length <= 0 && (r = r.slice(0, -1)), r;
}, ps = function(t, r) {
  var n = RY(t);
  r && (n = [n.reduce(function(a, s) {
    return [].concat(Ow(a), Ow(s));
  }, [])]);
  var i = n.map(function(a) {
    return a.reduce(function(s, c, l) {
      return "".concat(s).concat(l === 0 ? "M" : "L").concat(c.x, ",").concat(c.y);
    }, "");
  }).join("");
  return n.length === 1 ? "".concat(i, "Z") : i;
}, NY = function(t, r, n) {
  var i = ps(t, n);
  return "".concat(i.slice(-1) === "Z" ? i.slice(0, -1) : i, "L").concat(ps(r.reverse(), n).slice(1));
}, DY = function(t) {
  var r = t.points, n = t.className, i = t.baseLinePoints, a = t.connectNulls, s = $Y(t, TY);
  if (!r || !r.length)
    return null;
  var c = Me("recharts-polygon", n);
  if (i && i.length) {
    var l = s.stroke && s.stroke !== "none", f = NY(r, i, a);
    return /* @__PURE__ */ k.createElement("g", {
      className: c
    }, /* @__PURE__ */ k.createElement("path", $a({}, me(s, !0), {
      fill: f.slice(-1) === "Z" ? s.fill : "none",
      stroke: "none",
      d: f
    })), l ? /* @__PURE__ */ k.createElement("path", $a({}, me(s, !0), {
      fill: "none",
      d: ps(r, a)
    })) : null, l ? /* @__PURE__ */ k.createElement("path", $a({}, me(s, !0), {
      fill: "none",
      d: ps(i, a)
    })) : null);
  }
  var d = ps(r, a);
  return /* @__PURE__ */ k.createElement("path", $a({}, me(s, !0), {
    fill: d.slice(-1) === "Z" ? s.fill : "none",
    className: c,
    d
  }));
};
function Mp() {
  return Mp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Mp.apply(this, arguments);
}
var du = function(t) {
  var r = t.cx, n = t.cy, i = t.r, a = t.className, s = Me("recharts-dot", a);
  return r === +r && n === +n && i === +i ? /* @__PURE__ */ k.createElement("circle", Mp({}, me(t, !1), Tc(t), {
    className: s,
    cx: r,
    cy: n,
    r: i
  })) : null;
};
function Us(e) {
  "@babel/helpers - typeof";
  return Us = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Us(e);
}
var LY = ["x", "y", "top", "left", "width", "height", "className"];
function Ip() {
  return Ip = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ip.apply(this, arguments);
}
function Sw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function BY(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sw(Object(r), !0).forEach(function(n) {
      FY(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function FY(e, t, r) {
  return t = WY(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function WY(e) {
  var t = zY(e, "string");
  return Us(t) == "symbol" ? t : String(t);
}
function zY(e, t) {
  if (Us(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Us(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UY(e, t) {
  if (e == null) return {};
  var r = HY(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function HY(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var GY = function(t, r, n, i, a, s) {
  return "M".concat(t, ",").concat(a, "v").concat(i, "M").concat(s, ",").concat(r, "h").concat(n);
}, qY = function(t) {
  var r = t.x, n = r === void 0 ? 0 : r, i = t.y, a = i === void 0 ? 0 : i, s = t.top, c = s === void 0 ? 0 : s, l = t.left, f = l === void 0 ? 0 : l, d = t.width, h = d === void 0 ? 0 : d, v = t.height, g = v === void 0 ? 0 : v, x = t.className, y = UY(t, LY), w = BY({
    x: n,
    y: a,
    top: c,
    left: f,
    width: h,
    height: g
  }, y);
  return !oe(n) || !oe(a) || !oe(h) || !oe(g) || !oe(c) || !oe(f) ? null : /* @__PURE__ */ k.createElement("path", Ip({}, me(w, !0), {
    className: Me("recharts-cross", x),
    d: GY(n, a, h, g, c, f)
  }));
}, KY = Yl, VY = XO, YY = hn;
function XY(e, t) {
  return e && e.length ? KY(e, YY(t), VY) : void 0;
}
var ZY = XY;
const JY = /* @__PURE__ */ Je(ZY);
var QY = Yl, eX = hn, tX = ZO;
function rX(e, t) {
  return e && e.length ? QY(e, eX(t), tX) : void 0;
}
var nX = rX;
const iX = /* @__PURE__ */ Je(nX);
var aX = ["cx", "cy", "angle", "ticks", "axisLine"], oX = ["ticks", "tick", "angle", "tickFormatter", "stroke"];
function Ya(e) {
  "@babel/helpers - typeof";
  return Ya = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ya(e);
}
function vs() {
  return vs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vs.apply(this, arguments);
}
function Pw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ji(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pw(Object(r), !0).forEach(function(n) {
      Ql(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ew(e, t) {
  if (e == null) return {};
  var r = sX(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function sX(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function uX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Tw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, DA(n.key), n);
  }
}
function cX(e, t, r) {
  return t && Tw(e.prototype, t), r && Tw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function lX(e, t, r) {
  return t = cl(t), fX(e, NA() ? Reflect.construct(t, r || [], cl(e).constructor) : t.apply(e, r));
}
function fX(e, t) {
  if (t && (Ya(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dX(e);
}
function dX(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function NA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (NA = function() {
    return !!e;
  })();
}
function cl(e) {
  return cl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, cl(e);
}
function hX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && kp(e, t);
}
function kp(e, t) {
  return kp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, kp(e, t);
}
function Ql(e, t, r) {
  return t = DA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function DA(e) {
  var t = pX(e, "string");
  return Ya(t) == "symbol" ? t : String(t);
}
function pX(e, t) {
  if (Ya(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ya(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ef = /* @__PURE__ */ function(e) {
  hX(t, e);
  function t() {
    return uX(this, t), lX(this, t, arguments);
  }
  return cX(t, [{
    key: "getTickValueCoord",
    value: (
      /**
       * Calculate the coordinate of tick
       * @param  {Number} coordinate The radius of tick
       * @return {Object} (x, y)
       */
      function(n) {
        var i = n.coordinate, a = this.props, s = a.angle, c = a.cx, l = a.cy;
        return it(c, l, i, s);
      }
    )
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props.orientation, i;
      switch (n) {
        case "left":
          i = "end";
          break;
        case "right":
          i = "start";
          break;
        default:
          i = "middle";
          break;
      }
      return i;
    }
  }, {
    key: "getViewBox",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, s = n.angle, c = n.ticks, l = JY(c, function(d) {
        return d.coordinate || 0;
      }), f = iX(c, function(d) {
        return d.coordinate || 0;
      });
      return {
        cx: i,
        cy: a,
        startAngle: s,
        endAngle: s,
        innerRadius: f.coordinate || 0,
        outerRadius: l.coordinate || 0
      };
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, s = n.angle, c = n.ticks, l = n.axisLine, f = Ew(n, aX), d = c.reduce(function(x, y) {
        return [Math.min(x[0], y.coordinate), Math.max(x[1], y.coordinate)];
      }, [1 / 0, -1 / 0]), h = it(i, a, d[0], s), v = it(i, a, d[1], s), g = ji(ji(ji({}, me(f, !1)), {}, {
        fill: "none"
      }, me(l, !1)), {}, {
        x1: h.x,
        y1: h.y,
        x2: v.x,
        y2: v.y
      });
      return /* @__PURE__ */ k.createElement("line", vs({
        className: "recharts-polar-radius-axis-line"
      }, g));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, s = i.tick, c = i.angle, l = i.tickFormatter, f = i.stroke, d = Ew(i, oX), h = this.getTickTextAnchor(), v = me(d, !1), g = me(s, !1), x = a.map(function(y, w) {
        var A = n.getTickValueCoord(y), O = ji(ji(ji(ji({
          textAnchor: h,
          transform: "rotate(".concat(90 - c, ", ").concat(A.x, ", ").concat(A.y, ")")
        }, v), {}, {
          stroke: "none",
          fill: f
        }, g), {}, {
          index: w
        }, A), {}, {
          payload: y
        });
        return /* @__PURE__ */ k.createElement(Le, vs({
          className: Me("recharts-polar-radius-axis-tick", _A(s)),
          key: "tick-".concat(y.coordinate)
        }, Yi(n.props, y, w)), t.renderTickItem(s, O, l ? l(y.value, w) : y.value));
      });
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-polar-radius-axis-ticks"
      }, x);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.axisLine, s = n.tick;
      return !i || !i.length ? null : /* @__PURE__ */ k.createElement(Le, {
        className: Me("recharts-polar-radius-axis", this.props.className)
      }, a && this.renderAxisLine(), s && this.renderTicks(), Pt.renderCallByParent(this.props, this.getViewBox()));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var s;
      return /* @__PURE__ */ k.isValidElement(n) ? s = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? s = n(i) : s = /* @__PURE__ */ k.createElement(hi, vs({}, i, {
        className: "recharts-polar-radius-axis-tick-value"
      }), a), s;
    }
  }]), t;
}(Nr);
Ql(ef, "displayName", "PolarRadiusAxis");
Ql(ef, "axisType", "radiusAxis");
Ql(ef, "defaultProps", {
  type: "number",
  radiusAxisId: 0,
  cx: 0,
  cy: 0,
  angle: 0,
  orientation: "right",
  stroke: "#ccc",
  axisLine: !0,
  tick: !0,
  tickCount: 5,
  allowDataOverflow: !1,
  scale: "auto",
  allowDuplicatedCategory: !0
});
function Xa(e) {
  "@babel/helpers - typeof";
  return Xa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xa(e);
}
function Bi() {
  return Bi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bi.apply(this, arguments);
}
function $w(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $w(Object(r), !0).forEach(function(n) {
      tf(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $w(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function vX(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Cw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, BA(n.key), n);
  }
}
function gX(e, t, r) {
  return t && Cw(e.prototype, t), r && Cw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function yX(e, t, r) {
  return t = ll(t), mX(e, LA() ? Reflect.construct(t, r || [], ll(e).constructor) : t.apply(e, r));
}
function mX(e, t) {
  if (t && (Xa(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return bX(e);
}
function bX(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function LA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (LA = function() {
    return !!e;
  })();
}
function ll(e) {
  return ll = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ll(e);
}
function xX(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && jp(e, t);
}
function jp(e, t) {
  return jp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, jp(e, t);
}
function tf(e, t, r) {
  return t = BA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function BA(e) {
  var t = wX(e, "string");
  return Xa(t) == "symbol" ? t : String(t);
}
function wX(e, t) {
  if (Xa(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xa(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _X = Math.PI / 180, Mw = 1e-5, rf = /* @__PURE__ */ function(e) {
  xX(t, e);
  function t() {
    return vX(this, t), yX(this, t, arguments);
  }
  return gX(t, [{
    key: "getTickLineCoord",
    value: (
      /**
       * Calculate the coordinate of line endpoint
       * @param  {Object} data The Data if ticks
       * @return {Object} (x0, y0): The start point of text,
       *                  (x1, y1): The end point close to text,
       *                  (x2, y2): The end point close to axis
       */
      function(n) {
        var i = this.props, a = i.cx, s = i.cy, c = i.radius, l = i.orientation, f = i.tickSize, d = f || 8, h = it(a, s, c, n.coordinate), v = it(a, s, c + (l === "inner" ? -1 : 1) * d, n.coordinate);
        return {
          x1: h.x,
          y1: h.y,
          x2: v.x,
          y2: v.y
        };
      }
    )
    /**
     * Get the text-anchor of each tick
     * @param  {Object} data Data of ticks
     * @return {String} text-anchor
     */
  }, {
    key: "getTickTextAnchor",
    value: function(n) {
      var i = this.props.orientation, a = Math.cos(-n.coordinate * _X), s;
      return a > Mw ? s = i === "outer" ? "start" : "end" : a < -Mw ? s = i === "outer" ? "end" : "start" : s = "middle", s;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.cx, a = n.cy, s = n.radius, c = n.axisLine, l = n.axisLineType, f = Ri(Ri({}, me(this.props, !1)), {}, {
        fill: "none"
      }, me(c, !1));
      if (l === "circle")
        return /* @__PURE__ */ k.createElement(du, Bi({
          className: "recharts-polar-angle-axis-line"
        }, f, {
          cx: i,
          cy: a,
          r: s
        }));
      var d = this.props.ticks, h = d.map(function(v) {
        return it(i, a, s, v.coordinate);
      });
      return /* @__PURE__ */ k.createElement(DY, Bi({
        className: "recharts-polar-angle-axis-line"
      }, f, {
        points: h
      }));
    }
  }, {
    key: "renderTicks",
    value: function() {
      var n = this, i = this.props, a = i.ticks, s = i.tick, c = i.tickLine, l = i.tickFormatter, f = i.stroke, d = me(this.props, !1), h = me(s, !1), v = Ri(Ri({}, d), {}, {
        fill: "none"
      }, me(c, !1)), g = a.map(function(x, y) {
        var w = n.getTickLineCoord(x), A = n.getTickTextAnchor(x), O = Ri(Ri(Ri({
          textAnchor: A
        }, d), {}, {
          stroke: "none",
          fill: f
        }, h), {}, {
          index: y,
          payload: x,
          x: w.x2,
          y: w.y2
        });
        return /* @__PURE__ */ k.createElement(Le, Bi({
          className: Me("recharts-polar-angle-axis-tick", _A(s)),
          key: "tick-".concat(x.coordinate)
        }, Yi(n.props, x, y)), c && /* @__PURE__ */ k.createElement("line", Bi({
          className: "recharts-polar-angle-axis-tick-line"
        }, v, w)), s && t.renderTickItem(s, O, l ? l(x.value, y) : x.value));
      });
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-polar-angle-axis-ticks"
      }, g);
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.ticks, a = n.radius, s = n.axisLine;
      return a <= 0 || !i || !i.length ? null : /* @__PURE__ */ k.createElement(Le, {
        className: Me("recharts-polar-angle-axis", this.props.className)
      }, s && this.renderAxisLine(), this.renderTicks());
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var s;
      return /* @__PURE__ */ k.isValidElement(n) ? s = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? s = n(i) : s = /* @__PURE__ */ k.createElement(hi, Bi({}, i, {
        className: "recharts-polar-angle-axis-tick-value"
      }), a), s;
    }
  }]), t;
}(Nr);
tf(rf, "displayName", "PolarAngleAxis");
tf(rf, "axisType", "angleAxis");
tf(rf, "defaultProps", {
  type: "category",
  angleAxisId: 0,
  scale: "auto",
  cx: 0,
  cy: 0,
  orientation: "outer",
  axisLine: !0,
  tickLine: !0,
  tickSize: 8,
  tick: !0,
  hide: !1,
  allowDuplicatedCategory: !0
});
var OX = G_, AX = OX(Object.getPrototypeOf, Object), SX = AX, PX = Wn, EX = SX, TX = zn, $X = "[object Object]", CX = Function.prototype, MX = Object.prototype, FA = CX.toString, IX = MX.hasOwnProperty, kX = FA.call(Object);
function jX(e) {
  if (!TX(e) || PX(e) != $X)
    return !1;
  var t = EX(e);
  if (t === null)
    return !0;
  var r = IX.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && FA.call(r) == kX;
}
var RX = jX;
const NX = /* @__PURE__ */ Je(RX);
var DX = Wn, LX = zn, BX = "[object Boolean]";
function FX(e) {
  return e === !0 || e === !1 || LX(e) && DX(e) == BX;
}
var WX = FX;
const zX = /* @__PURE__ */ Je(WX);
function Hs(e) {
  "@babel/helpers - typeof";
  return Hs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hs(e);
}
function fl() {
  return fl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, fl.apply(this, arguments);
}
function UX(e, t) {
  return KX(e) || qX(e, t) || GX(e, t) || HX();
}
function HX() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function GX(e, t) {
  if (e) {
    if (typeof e == "string") return Iw(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Iw(e, t);
  }
}
function Iw(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function qX(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function KX(e) {
  if (Array.isArray(e)) return e;
}
function kw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function jw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? kw(Object(r), !0).forEach(function(n) {
      VX(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : kw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function VX(e, t, r) {
  return t = YX(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function YX(e) {
  var t = XX(e, "string");
  return Hs(t) == "symbol" ? t : String(t);
}
function XX(e, t) {
  if (Hs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Hs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Rw = function(t, r, n, i, a) {
  var s = n - i, c;
  return c = "M ".concat(t, ",").concat(r), c += "L ".concat(t + n, ",").concat(r), c += "L ".concat(t + n - s / 2, ",").concat(r + a), c += "L ".concat(t + n - s / 2 - i, ",").concat(r + a), c += "L ".concat(t, ",").concat(r, " Z"), c;
}, ZX = {
  x: 0,
  y: 0,
  upperWidth: 0,
  lowerWidth: 0,
  height: 0,
  isUpdateAnimationActive: !1,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
}, JX = function(t) {
  var r = jw(jw({}, ZX), t), n = La(), i = jn(-1), a = UX(i, 2), s = a[0], c = a[1];
  ea(function() {
    if (n.current && n.current.getTotalLength)
      try {
        var S = n.current.getTotalLength();
        S && c(S);
      } catch {
      }
  }, []);
  var l = r.x, f = r.y, d = r.upperWidth, h = r.lowerWidth, v = r.height, g = r.className, x = r.animationEasing, y = r.animationDuration, w = r.animationBegin, A = r.isUpdateAnimationActive;
  if (l !== +l || f !== +f || d !== +d || h !== +h || v !== +v || d === 0 && h === 0 || v === 0)
    return null;
  var O = Me("recharts-trapezoid", g);
  return A ? /* @__PURE__ */ k.createElement(Xr, {
    canBegin: s > 0,
    from: {
      upperWidth: 0,
      lowerWidth: 0,
      height: v,
      x: l,
      y: f
    },
    to: {
      upperWidth: d,
      lowerWidth: h,
      height: v,
      x: l,
      y: f
    },
    duration: y,
    animationEasing: x,
    isActive: A
  }, function(S) {
    var _ = S.upperWidth, b = S.lowerWidth, E = S.height, C = S.x, M = S.y;
    return /* @__PURE__ */ k.createElement(Xr, {
      canBegin: s > 0,
      from: "0px ".concat(s === -1 ? 1 : s, "px"),
      to: "".concat(s, "px 0px"),
      attributeName: "strokeDasharray",
      begin: w,
      duration: y,
      easing: x
    }, /* @__PURE__ */ k.createElement("path", fl({}, me(r, !0), {
      className: O,
      d: Rw(C, M, _, b, E),
      ref: n
    })));
  }) : /* @__PURE__ */ k.createElement("g", null, /* @__PURE__ */ k.createElement("path", fl({}, me(r, !0), {
    className: O,
    d: Rw(l, f, d, h, v)
  })));
}, QX = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
function Gs(e) {
  "@babel/helpers - typeof";
  return Gs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gs(e);
}
function e7(e, t) {
  if (e == null) return {};
  var r = t7(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function t7(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Nw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nw(Object(r), !0).forEach(function(n) {
      r7(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Nw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function r7(e, t, r) {
  return t = n7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function n7(e) {
  var t = i7(e, "string");
  return Gs(t) == "symbol" ? t : String(t);
}
function i7(e, t) {
  if (Gs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Gs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function a7(e, t) {
  return dl(dl({}, t), e);
}
function o7(e, t) {
  return e === "symbols";
}
function Dw(e) {
  var t = e.shapeType, r = e.elementProps;
  switch (t) {
    case "rectangle":
      return /* @__PURE__ */ k.createElement(cg, r);
    case "trapezoid":
      return /* @__PURE__ */ k.createElement(JX, r);
    case "sector":
      return /* @__PURE__ */ k.createElement(SA, r);
    case "symbols":
      if (o7(t))
        return /* @__PURE__ */ k.createElement(Pv, r);
      break;
    default:
      return null;
  }
}
function s7(e) {
  return /* @__PURE__ */ Kr(e) ? e.props : e;
}
function WA(e) {
  var t = e.option, r = e.shapeType, n = e.propTransformer, i = n === void 0 ? a7 : n, a = e.activeClassName, s = a === void 0 ? "recharts-active-shape" : a, c = e.isActive, l = e7(e, QX), f;
  if (/* @__PURE__ */ Kr(t))
    f = /* @__PURE__ */ At(t, dl(dl({}, l), s7(t)));
  else if (Pe(t))
    f = t(l);
  else if (NX(t) && !zX(t)) {
    var d = i(t, l);
    f = /* @__PURE__ */ k.createElement(Dw, {
      shapeType: r,
      elementProps: d
    });
  } else {
    var h = l;
    f = /* @__PURE__ */ k.createElement(Dw, {
      shapeType: r,
      elementProps: h
    });
  }
  return c ? /* @__PURE__ */ k.createElement(Le, {
    className: s
  }, f) : f;
}
function nf(e, t) {
  return t != null && "trapezoids" in e.props;
}
function af(e, t) {
  return t != null && "sectors" in e.props;
}
function qs(e, t) {
  return t != null && "points" in e.props;
}
function u7(e, t) {
  var r, n, i = e.x === (t == null || (r = t.labelViewBox) === null || r === void 0 ? void 0 : r.x) || e.x === t.x, a = e.y === (t == null || (n = t.labelViewBox) === null || n === void 0 ? void 0 : n.y) || e.y === t.y;
  return i && a;
}
function c7(e, t) {
  var r = e.endAngle === t.endAngle, n = e.startAngle === t.startAngle;
  return r && n;
}
function l7(e, t) {
  var r = e.x === t.x, n = e.y === t.y, i = e.z === t.z;
  return r && n && i;
}
function f7(e, t) {
  var r;
  return nf(e, t) ? r = u7 : af(e, t) ? r = c7 : qs(e, t) && (r = l7), r;
}
function d7(e, t) {
  var r;
  return nf(e, t) ? r = "trapezoids" : af(e, t) ? r = "sectors" : qs(e, t) && (r = "points"), r;
}
function h7(e, t) {
  if (nf(e, t)) {
    var r;
    return (r = t.tooltipPayload) === null || r === void 0 || (r = r[0]) === null || r === void 0 || (r = r.payload) === null || r === void 0 ? void 0 : r.payload;
  }
  if (af(e, t)) {
    var n;
    return (n = t.tooltipPayload) === null || n === void 0 || (n = n[0]) === null || n === void 0 || (n = n.payload) === null || n === void 0 ? void 0 : n.payload;
  }
  return qs(e, t) ? t.payload : {};
}
function p7(e) {
  var t = e.activeTooltipItem, r = e.graphicalItem, n = e.itemData, i = d7(r, t), a = h7(r, t), s = n.filter(function(l, f) {
    var d = Xi(a, l), h = r.props[i].filter(function(x) {
      var y = f7(r, t);
      return y(x, t);
    }), v = r.props[i].indexOf(h[h.length - 1]), g = f === v;
    return d && g;
  }), c = n.indexOf(s[s.length - 1]);
  return c;
}
var Sc;
function Za(e) {
  "@babel/helpers - typeof";
  return Za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Za(e);
}
function Ca() {
  return Ca = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ca.apply(this, arguments);
}
function Lw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function dt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Lw(Object(r), !0).forEach(function(n) {
      Mr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Lw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function v7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Bw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, UA(n.key), n);
  }
}
function g7(e, t, r) {
  return t && Bw(e.prototype, t), r && Bw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function y7(e, t, r) {
  return t = hl(t), m7(e, zA() ? Reflect.construct(t, r || [], hl(e).constructor) : t.apply(e, r));
}
function m7(e, t) {
  if (t && (Za(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ea(e);
}
function zA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (zA = function() {
    return !!e;
  })();
}
function hl(e) {
  return hl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, hl(e);
}
function Ea(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function b7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Rp(e, t);
}
function Rp(e, t) {
  return Rp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Rp(e, t);
}
function Mr(e, t, r) {
  return t = UA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function UA(e) {
  var t = x7(e, "string");
  return Za(t) == "symbol" ? t : String(t);
}
function x7(e, t) {
  if (Za(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Za(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Hn = /* @__PURE__ */ function(e) {
  b7(t, e);
  function t(r) {
    var n;
    return v7(this, t), n = y7(this, t, [r]), Mr(Ea(n), "pieRef", null), Mr(Ea(n), "sectorRefs", []), Mr(Ea(n), "id", ia("recharts-pie-")), Mr(Ea(n), "handleAnimationEnd", function() {
      var i = n.props.onAnimationEnd;
      n.setState({
        isAnimationFinished: !0
      }), Pe(i) && i();
    }), Mr(Ea(n), "handleAnimationStart", function() {
      var i = n.props.onAnimationStart;
      n.setState({
        isAnimationFinished: !1
      }), Pe(i) && i();
    }), n.state = {
      isAnimationFinished: !r.isAnimationActive,
      prevIsAnimationActive: r.isAnimationActive,
      prevAnimationId: r.animationId,
      sectorToFocus: 0
    }, n;
  }
  return g7(t, [{
    key: "isActiveIndex",
    value: function(n) {
      var i = this.props.activeIndex;
      return Array.isArray(i) ? i.indexOf(n) !== -1 : n === i;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var n = this.props.activeIndex;
      return Array.isArray(n) ? n.length !== 0 : n || n === 0;
    }
  }, {
    key: "renderLabels",
    value: function(n) {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var a = this.props, s = a.label, c = a.labelLine, l = a.dataKey, f = a.valueKey, d = me(this.props, !1), h = me(s, !1), v = me(c, !1), g = s && s.offsetRadius || 20, x = n.map(function(y, w) {
        var A = (y.startAngle + y.endAngle) / 2, O = it(y.cx, y.cy, y.outerRadius + g, A), S = dt(dt(dt(dt({}, d), y), {}, {
          stroke: "none"
        }, h), {}, {
          index: w,
          textAnchor: t.getTextAnchor(O.x, y.cx)
        }, O), _ = dt(dt(dt(dt({}, d), y), {}, {
          fill: "none",
          stroke: y.fill
        }, v), {}, {
          index: w,
          points: [it(y.cx, y.cy, y.outerRadius, A), O],
          key: "line"
        }), b = l;
        return Te(l) && Te(f) ? b = "value" : Te(l) && (b = f), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ k.createElement(Le, {
          key: "label-".concat(y.startAngle, "-").concat(y.endAngle, "-").concat(y.midAngle, "-").concat(w)
        }, c && t.renderLabelLineItem(c, _), t.renderLabelItem(s, S, bt(y, b)));
      });
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-pie-labels"
      }, x);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(n) {
      var i = this, a = this.props, s = a.activeShape, c = a.blendStroke, l = a.inactiveShape;
      return n.map(function(f, d) {
        if ((f == null ? void 0 : f.startAngle) === 0 && (f == null ? void 0 : f.endAngle) === 0 && n.length !== 1) return null;
        var h = i.isActiveIndex(d), v = l && i.hasActiveIndex() ? l : null, g = h ? s : v, x = dt(dt({}, f), {}, {
          stroke: c ? f.fill : f.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ k.createElement(Le, Ca({
          ref: function(w) {
            w && !i.sectorRefs.includes(w) && i.sectorRefs.push(w);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, Yi(i.props, f, d), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(f == null ? void 0 : f.startAngle, "-").concat(f == null ? void 0 : f.endAngle, "-").concat(f.midAngle, "-").concat(d)
        }), /* @__PURE__ */ k.createElement(WA, Ca({
          option: g,
          isActive: h,
          shapeType: "sector"
        }, x)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.sectors, s = i.isAnimationActive, c = i.animationBegin, l = i.animationDuration, f = i.animationEasing, d = i.animationId, h = this.state, v = h.prevSectors, g = h.prevIsAnimationActive;
      return /* @__PURE__ */ k.createElement(Xr, {
        begin: c,
        duration: l,
        isActive: s,
        easing: f,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(d, "-").concat(g),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(x) {
        var y = x.t, w = [], A = a && a[0], O = A.startAngle;
        return a.forEach(function(S, _) {
          var b = v && v[_], E = _ > 0 ? gr(S, "paddingAngle", 0) : 0;
          if (b) {
            var C = St(b.endAngle - b.startAngle, S.endAngle - S.startAngle), M = dt(dt({}, S), {}, {
              startAngle: O + E,
              endAngle: O + C(y) + E
            });
            w.push(M), O = M.endAngle;
          } else {
            var F = S.endAngle, D = S.startAngle, B = St(0, F - D), N = B(y), U = dt(dt({}, S), {}, {
              startAngle: O + E,
              endAngle: O + N + E
            });
            w.push(U), O = U.endAngle;
          }
        }), /* @__PURE__ */ k.createElement(Le, null, n.renderSectorsStatically(w));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(n) {
      var i = this;
      n.onkeydown = function(a) {
        if (!a.altKey)
          switch (a.key) {
            case "ArrowLeft": {
              var s = ++i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[s].focus(), i.setState({
                sectorToFocus: s
              });
              break;
            }
            case "ArrowRight": {
              var c = --i.state.sectorToFocus < 0 ? i.sectorRefs.length - 1 : i.state.sectorToFocus % i.sectorRefs.length;
              i.sectorRefs[c].focus(), i.setState({
                sectorToFocus: c
              });
              break;
            }
            case "Escape": {
              i.sectorRefs[i.state.sectorToFocus].blur(), i.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var n = this.props, i = n.sectors, a = n.isAnimationActive, s = this.state.prevSectors;
      return a && i && i.length && (!s || !Xi(s, i)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(i);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.hide, s = i.sectors, c = i.className, l = i.label, f = i.cx, d = i.cy, h = i.innerRadius, v = i.outerRadius, g = i.isAnimationActive, x = this.state.isAnimationFinished;
      if (a || !s || !s.length || !oe(f) || !oe(d) || !oe(h) || !oe(v))
        return null;
      var y = Me("recharts-pie", c);
      return /* @__PURE__ */ k.createElement(Le, {
        tabIndex: this.props.rootTabIndex,
        className: y,
        ref: function(A) {
          n.pieRef = A;
        }
      }, this.renderSectors(), l && this.renderLabels(s), Pt.renderCallByParent(this.props, null, !1), (!g || x) && kr.renderCallByParent(this.props, s, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return i.prevIsAnimationActive !== n.isAnimationActive ? {
        prevIsAnimationActive: n.isAnimationActive,
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : n.isAnimationActive && n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curSectors: n.sectors,
        prevSectors: i.curSectors,
        isAnimationFinished: !0
      } : n.sectors !== i.curSectors ? {
        curSectors: n.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(n, i) {
      return n > i ? "start" : n < i ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(n, i) {
      if (/* @__PURE__ */ k.isValidElement(n))
        return /* @__PURE__ */ k.cloneElement(n, i);
      if (Pe(n))
        return n(i);
      var a = Me("recharts-pie-label-line", typeof n != "boolean" ? n.className : "");
      return /* @__PURE__ */ k.createElement(Vi, Ca({}, i, {
        type: "linear",
        className: a
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(n, i, a) {
      if (/* @__PURE__ */ k.isValidElement(n))
        return /* @__PURE__ */ k.cloneElement(n, i);
      var s = a;
      if (Pe(n) && (s = n(i), /* @__PURE__ */ k.isValidElement(s)))
        return s;
      var c = Me("recharts-pie-label-text", typeof n != "boolean" && !Pe(n) ? n.className : "");
      return /* @__PURE__ */ k.createElement(hi, Ca({}, i, {
        alignmentBaseline: "middle",
        className: c
      }), s);
    }
  }]), t;
}(Nr);
Sc = Hn;
Mr(Hn, "displayName", "Pie");
Mr(Hn, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !Yr.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Mr(Hn, "parseDeltaAngle", function(e, t) {
  var r = Gt(t - e), n = Math.min(Math.abs(t - e), 360);
  return r * n;
});
Mr(Hn, "getRealPieData", function(e) {
  var t = e.props, r = t.data, n = t.children, i = me(e.props, !1), a = yr(n, Nv);
  return r && r.length ? r.map(function(s, c) {
    return dt(dt(dt({
      payload: s
    }, i), s), a && a[c] && a[c].props);
  }) : a && a.length ? a.map(function(s) {
    return dt(dt({}, i), s.props);
  }) : [];
});
Mr(Hn, "parseCoordinateOfPie", function(e, t) {
  var r = t.top, n = t.left, i = t.width, a = t.height, s = wA(i, a), c = n + qt(e.props.cx, i, i / 2), l = r + qt(e.props.cy, a, a / 2), f = qt(e.props.innerRadius, s, 0), d = qt(e.props.outerRadius, s, s * 0.8), h = e.props.maxRadius || Math.sqrt(i * i + a * a) / 2;
  return {
    cx: c,
    cy: l,
    innerRadius: f,
    outerRadius: d,
    maxRadius: h
  };
});
Mr(Hn, "getComposedData", function(e) {
  var t = e.item, r = e.offset, n = Sc.getRealPieData(t);
  if (!n || !n.length)
    return null;
  var i = t.props, a = i.cornerRadius, s = i.startAngle, c = i.endAngle, l = i.paddingAngle, f = i.dataKey, d = i.nameKey, h = i.valueKey, v = i.tooltipType, g = Math.abs(t.props.minAngle), x = Sc.parseCoordinateOfPie(t, r), y = Sc.parseDeltaAngle(s, c), w = Math.abs(y), A = f;
  Te(f) && Te(h) ? (Vr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), A = "value") : Te(f) && (Vr(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), A = h);
  var O = n.filter(function(M) {
    return bt(M, A, 0) !== 0;
  }).length, S = (w >= 360 ? O : O - 1) * l, _ = w - O * g - S, b = n.reduce(function(M, F) {
    var D = bt(F, A, 0);
    return M + (oe(D) ? D : 0);
  }, 0), E;
  if (b > 0) {
    var C;
    E = n.map(function(M, F) {
      var D = bt(M, A, 0), B = bt(M, d, F), N = (oe(D) ? D : 0) / b, U;
      F ? U = C.endAngle + Gt(y) * l * (D !== 0 ? 1 : 0) : U = s;
      var z = U + Gt(y) * ((D !== 0 ? g : 0) + N * _), J = (U + z) / 2, H = (x.innerRadius + x.outerRadius) / 2, Z = [{
        name: B,
        value: D,
        payload: M,
        dataKey: A,
        type: v
      }], q = it(x.cx, x.cy, H, J);
      return C = dt(dt(dt({
        percent: N,
        cornerRadius: a,
        name: B,
        tooltipPayload: Z,
        midAngle: J,
        middleRadius: H,
        tooltipPosition: q
      }, M), x), {}, {
        value: bt(M, A),
        startAngle: U,
        endAngle: z,
        payload: M,
        paddingAngle: Gt(y) * l
      }), C;
    });
  }
  return dt(dt({}, x), {}, {
    sectors: E,
    data: n
  });
});
var w7 = Math.ceil, _7 = Math.max;
function O7(e, t, r, n) {
  for (var i = -1, a = _7(w7((t - e) / (r || 1)), 0), s = Array(a); a--; )
    s[n ? a : ++i] = e, e += r;
  return s;
}
var A7 = O7, S7 = fO, Fw = 1 / 0, P7 = 17976931348623157e292;
function E7(e) {
  if (!e)
    return e === 0 ? e : 0;
  if (e = S7(e), e === Fw || e === -Fw) {
    var t = e < 0 ? -1 : 1;
    return t * P7;
  }
  return e === e ? e : 0;
}
var HA = E7, T7 = A7, $7 = zl, gh = HA;
function C7(e) {
  return function(t, r, n) {
    return n && typeof n != "number" && $7(t, r, n) && (r = n = void 0), t = gh(t), r === void 0 ? (r = t, t = 0) : r = gh(r), n = n === void 0 ? t < r ? 1 : -1 : gh(n), T7(t, r, n, e);
  };
}
var M7 = C7, I7 = M7, k7 = I7(), j7 = k7;
const pl = /* @__PURE__ */ Je(j7);
function Ks(e) {
  "@babel/helpers - typeof";
  return Ks = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ks(e);
}
function Ww(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zw(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ww(Object(r), !0).forEach(function(n) {
      GA(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ww(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function GA(e, t, r) {
  return t = R7(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function R7(e) {
  var t = N7(e, "string");
  return Ks(t) == "symbol" ? t : String(t);
}
function N7(e, t) {
  if (Ks(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ks(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var D7 = ["Webkit", "Moz", "O", "ms"], L7 = function(t, r) {
  var n = t.replace(/(\w)/, function(a) {
    return a.toUpperCase();
  }), i = D7.reduce(function(a, s) {
    return zw(zw({}, a), {}, GA({}, s + n, r));
  }, {});
  return i[t] = r, i;
};
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e);
}
function vl() {
  return vl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, vl.apply(this, arguments);
}
function Uw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function yh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Uw(Object(r), !0).forEach(function(n) {
      fr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Uw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function B7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Hw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, KA(n.key), n);
  }
}
function F7(e, t, r) {
  return t && Hw(e.prototype, t), r && Hw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function W7(e, t, r) {
  return t = gl(t), z7(e, qA() ? Reflect.construct(t, r || [], gl(e).constructor) : t.apply(e, r));
}
function z7(e, t) {
  if (t && (Ja(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return nn(e);
}
function qA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (qA = function() {
    return !!e;
  })();
}
function gl(e) {
  return gl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, gl(e);
}
function nn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function U7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Np(e, t);
}
function Np(e, t) {
  return Np = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Np(e, t);
}
function fr(e, t, r) {
  return t = KA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function KA(e) {
  var t = H7(e, "string");
  return Ja(t) == "symbol" ? t : String(t);
}
function H7(e, t) {
  if (Ja(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ja(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var G7 = function(t) {
  var r = t.data, n = t.startIndex, i = t.endIndex, a = t.x, s = t.width, c = t.travellerWidth;
  if (!r || !r.length)
    return {};
  var l = r.length, f = fs().domain(pl(0, l)).range([a, a + s - c]), d = f.domain().map(function(h) {
    return f(h);
  });
  return {
    isTextActive: !1,
    isSlideMoving: !1,
    isTravellerMoving: !1,
    isTravellerFocused: !1,
    startX: f(n),
    endX: f(i),
    scale: f,
    scaleValues: d
  };
}, Gw = function(t) {
  return t.changedTouches && !!t.changedTouches.length;
}, Qa = /* @__PURE__ */ function(e) {
  U7(t, e);
  function t(r) {
    var n;
    return B7(this, t), n = W7(this, t, [r]), fr(nn(n), "handleDrag", function(i) {
      n.leaveTimer && (clearTimeout(n.leaveTimer), n.leaveTimer = null), n.state.isTravellerMoving ? n.handleTravellerMove(i) : n.state.isSlideMoving && n.handleSlideDrag(i);
    }), fr(nn(n), "handleTouchMove", function(i) {
      i.changedTouches != null && i.changedTouches.length > 0 && n.handleDrag(i.changedTouches[0]);
    }), fr(nn(n), "handleDragEnd", function() {
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !1
      }, function() {
        var i = n.props, a = i.endIndex, s = i.onDragEnd, c = i.startIndex;
        s == null || s({
          endIndex: a,
          startIndex: c
        });
      }), n.detachDragEndListener();
    }), fr(nn(n), "handleLeaveWrapper", function() {
      (n.state.isTravellerMoving || n.state.isSlideMoving) && (n.leaveTimer = window.setTimeout(n.handleDragEnd, n.props.leaveTimeOut));
    }), fr(nn(n), "handleEnterSlideOrTraveller", function() {
      n.setState({
        isTextActive: !0
      });
    }), fr(nn(n), "handleLeaveSlideOrTraveller", function() {
      n.setState({
        isTextActive: !1
      });
    }), fr(nn(n), "handleSlideDragStart", function(i) {
      var a = Gw(i) ? i.changedTouches[0] : i;
      n.setState({
        isTravellerMoving: !1,
        isSlideMoving: !0,
        slideMoveStartX: a.pageX
      }), n.attachDragEndListener();
    }), n.travellerDragStartHandlers = {
      startX: n.handleTravellerDragStart.bind(nn(n), "startX"),
      endX: n.handleTravellerDragStart.bind(nn(n), "endX")
    }, n.state = {}, n;
  }
  return F7(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.leaveTimer && (clearTimeout(this.leaveTimer), this.leaveTimer = null), this.detachDragEndListener();
    }
  }, {
    key: "getIndex",
    value: function(n) {
      var i = n.startX, a = n.endX, s = this.state.scaleValues, c = this.props, l = c.gap, f = c.data, d = f.length - 1, h = Math.min(i, a), v = Math.max(i, a), g = t.getIndexInRange(s, h), x = t.getIndexInRange(s, v);
      return {
        startIndex: g - g % l,
        endIndex: x === d ? d : x - x % l
      };
    }
  }, {
    key: "getTextOfTick",
    value: function(n) {
      var i = this.props, a = i.data, s = i.tickFormatter, c = i.dataKey, l = bt(a[n], c, n);
      return Pe(s) ? s(l, n) : l;
    }
  }, {
    key: "attachDragEndListener",
    value: function() {
      window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "detachDragEndListener",
    value: function() {
      window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
    }
  }, {
    key: "handleSlideDrag",
    value: function(n) {
      var i = this.state, a = i.slideMoveStartX, s = i.startX, c = i.endX, l = this.props, f = l.x, d = l.width, h = l.travellerWidth, v = l.startIndex, g = l.endIndex, x = l.onChange, y = n.pageX - a;
      y > 0 ? y = Math.min(y, f + d - h - c, f + d - h - s) : y < 0 && (y = Math.max(y, f - s, f - c));
      var w = this.getIndex({
        startX: s + y,
        endX: c + y
      });
      (w.startIndex !== v || w.endIndex !== g) && x && x(w), this.setState({
        startX: s + y,
        endX: c + y,
        slideMoveStartX: n.pageX
      });
    }
  }, {
    key: "handleTravellerDragStart",
    value: function(n, i) {
      var a = Gw(i) ? i.changedTouches[0] : i;
      this.setState({
        isSlideMoving: !1,
        isTravellerMoving: !0,
        movingTravellerId: n,
        brushMoveStartX: a.pageX
      }), this.attachDragEndListener();
    }
  }, {
    key: "handleTravellerMove",
    value: function(n) {
      var i = this.state, a = i.brushMoveStartX, s = i.movingTravellerId, c = i.endX, l = i.startX, f = this.state[s], d = this.props, h = d.x, v = d.width, g = d.travellerWidth, x = d.onChange, y = d.gap, w = d.data, A = {
        startX: this.state.startX,
        endX: this.state.endX
      }, O = n.pageX - a;
      O > 0 ? O = Math.min(O, h + v - g - f) : O < 0 && (O = Math.max(O, h - f)), A[s] = f + O;
      var S = this.getIndex(A), _ = S.startIndex, b = S.endIndex, E = function() {
        var M = w.length - 1;
        return s === "startX" && (c > l ? _ % y === 0 : b % y === 0) || c < l && b === M || s === "endX" && (c > l ? b % y === 0 : _ % y === 0) || c > l && b === M;
      };
      this.setState(fr(fr({}, s, f + O), "brushMoveStartX", n.pageX), function() {
        x && E() && x(S);
      });
    }
  }, {
    key: "handleTravellerMoveKeyboard",
    value: function(n, i) {
      var a = this, s = this.state, c = s.scaleValues, l = s.startX, f = s.endX, d = this.state[i], h = c.indexOf(d);
      if (h !== -1) {
        var v = h + n;
        if (!(v === -1 || v >= c.length)) {
          var g = c[v];
          i === "startX" && g >= f || i === "endX" && g <= l || this.setState(fr({}, i, g), function() {
            a.props.onChange(a.getIndex({
              startX: a.state.startX,
              endX: a.state.endX
            }));
          });
        }
      }
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this.props, i = n.x, a = n.y, s = n.width, c = n.height, l = n.fill, f = n.stroke;
      return /* @__PURE__ */ k.createElement("rect", {
        stroke: f,
        fill: l,
        x: i,
        y: a,
        width: s,
        height: c
      });
    }
  }, {
    key: "renderPanorama",
    value: function() {
      var n = this.props, i = n.x, a = n.y, s = n.width, c = n.height, l = n.data, f = n.children, d = n.padding, h = Gi.only(f);
      return h ? /* @__PURE__ */ k.cloneElement(h, {
        x: i,
        y: a,
        width: s,
        height: c,
        margin: d,
        compact: !0,
        data: l
      }) : null;
    }
  }, {
    key: "renderTravellerLayer",
    value: function(n, i) {
      var a, s, c = this, l = this.props, f = l.y, d = l.travellerWidth, h = l.height, v = l.traveller, g = l.ariaLabel, x = l.data, y = l.startIndex, w = l.endIndex, A = Math.max(n, this.props.x), O = yh(yh({}, me(this.props, !1)), {}, {
        x: A,
        y: f,
        width: d,
        height: h
      }), S = g || "Min value: ".concat((a = x[y]) === null || a === void 0 ? void 0 : a.name, ", Max value: ").concat((s = x[w]) === null || s === void 0 ? void 0 : s.name);
      return /* @__PURE__ */ k.createElement(Le, {
        tabIndex: 0,
        role: "slider",
        "aria-label": S,
        "aria-valuenow": n,
        className: "recharts-brush-traveller",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.travellerDragStartHandlers[i],
        onTouchStart: this.travellerDragStartHandlers[i],
        onKeyDown: function(b) {
          ["ArrowLeft", "ArrowRight"].includes(b.key) && (b.preventDefault(), b.stopPropagation(), c.handleTravellerMoveKeyboard(b.key === "ArrowRight" ? 1 : -1, i));
        },
        onFocus: function() {
          c.setState({
            isTravellerFocused: !0
          });
        },
        onBlur: function() {
          c.setState({
            isTravellerFocused: !1
          });
        },
        style: {
          cursor: "col-resize"
        }
      }, t.renderTraveller(v, O));
    }
  }, {
    key: "renderSlide",
    value: function(n, i) {
      var a = this.props, s = a.y, c = a.height, l = a.stroke, f = a.travellerWidth, d = Math.min(n, i) + f, h = Math.max(Math.abs(i - n) - f, 0);
      return /* @__PURE__ */ k.createElement("rect", {
        className: "recharts-brush-slide",
        onMouseEnter: this.handleEnterSlideOrTraveller,
        onMouseLeave: this.handleLeaveSlideOrTraveller,
        onMouseDown: this.handleSlideDragStart,
        onTouchStart: this.handleSlideDragStart,
        style: {
          cursor: "move"
        },
        stroke: "none",
        fill: l,
        fillOpacity: 0.2,
        x: d,
        y: s,
        width: h,
        height: c
      });
    }
  }, {
    key: "renderText",
    value: function() {
      var n = this.props, i = n.startIndex, a = n.endIndex, s = n.y, c = n.height, l = n.travellerWidth, f = n.stroke, d = this.state, h = d.startX, v = d.endX, g = 5, x = {
        pointerEvents: "none",
        fill: f
      };
      return /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-brush-texts"
      }, /* @__PURE__ */ k.createElement(hi, vl({
        textAnchor: "end",
        verticalAnchor: "middle",
        x: Math.min(h, v) - g,
        y: s + c / 2
      }, x), this.getTextOfTick(i)), /* @__PURE__ */ k.createElement(hi, vl({
        textAnchor: "start",
        verticalAnchor: "middle",
        x: Math.max(h, v) + l + g,
        y: s + c / 2
      }, x), this.getTextOfTick(a)));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.data, a = n.className, s = n.children, c = n.x, l = n.y, f = n.width, d = n.height, h = n.alwaysShowText, v = this.state, g = v.startX, x = v.endX, y = v.isTextActive, w = v.isSlideMoving, A = v.isTravellerMoving, O = v.isTravellerFocused;
      if (!i || !i.length || !oe(c) || !oe(l) || !oe(f) || !oe(d) || f <= 0 || d <= 0)
        return null;
      var S = Me("recharts-brush", a), _ = k.Children.count(s) === 1, b = L7("userSelect", "none");
      return /* @__PURE__ */ k.createElement(Le, {
        className: S,
        onMouseLeave: this.handleLeaveWrapper,
        onTouchMove: this.handleTouchMove,
        style: b
      }, this.renderBackground(), _ && this.renderPanorama(), this.renderSlide(g, x), this.renderTravellerLayer(g, "startX"), this.renderTravellerLayer(x, "endX"), (y || w || A || O || h) && this.renderText());
    }
  }], [{
    key: "renderDefaultTraveller",
    value: function(n) {
      var i = n.x, a = n.y, s = n.width, c = n.height, l = n.stroke, f = Math.floor(a + c / 2) - 1;
      return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement("rect", {
        x: i,
        y: a,
        width: s,
        height: c,
        fill: l,
        stroke: "none"
      }), /* @__PURE__ */ k.createElement("line", {
        x1: i + 1,
        y1: f,
        x2: i + s - 1,
        y2: f,
        fill: "none",
        stroke: "#fff"
      }), /* @__PURE__ */ k.createElement("line", {
        x1: i + 1,
        y1: f + 2,
        x2: i + s - 1,
        y2: f + 2,
        fill: "none",
        stroke: "#fff"
      }));
    }
  }, {
    key: "renderTraveller",
    value: function(n, i) {
      var a;
      return /* @__PURE__ */ k.isValidElement(n) ? a = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? a = n(i) : a = t.renderDefaultTraveller(i), a;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      var a = n.data, s = n.width, c = n.x, l = n.travellerWidth, f = n.updateId, d = n.startIndex, h = n.endIndex;
      if (a !== i.prevData || f !== i.prevUpdateId)
        return yh({
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: c,
          prevWidth: s
        }, a && a.length ? G7({
          data: a,
          width: s,
          x: c,
          travellerWidth: l,
          startIndex: d,
          endIndex: h
        }) : {
          scale: null,
          scaleValues: null
        });
      if (i.scale && (s !== i.prevWidth || c !== i.prevX || l !== i.prevTravellerWidth)) {
        i.scale.range([c, c + s - l]);
        var v = i.scale.domain().map(function(g) {
          return i.scale(g);
        });
        return {
          prevData: a,
          prevTravellerWidth: l,
          prevUpdateId: f,
          prevX: c,
          prevWidth: s,
          startX: i.scale(n.startIndex),
          endX: i.scale(n.endIndex),
          scaleValues: v
        };
      }
      return null;
    }
  }, {
    key: "getIndexInRange",
    value: function(n, i) {
      for (var a = n.length, s = 0, c = a - 1; c - s > 1; ) {
        var l = Math.floor((s + c) / 2);
        n[l] > i ? c = l : s = l;
      }
      return i >= n[c] ? c : s;
    }
  }]), t;
}(Nr);
fr(Qa, "displayName", "Brush");
fr(Qa, "defaultProps", {
  height: 40,
  travellerWidth: 5,
  gap: 1,
  fill: "#fff",
  stroke: "#666",
  padding: {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  },
  leaveTimeOut: 1e3,
  alwaysShowText: !1
});
var q7 = kv;
function K7(e, t) {
  var r;
  return q7(e, function(n, i, a) {
    return r = t(n, i, a), !r;
  }), !!r;
}
var V7 = K7, Y7 = D_, X7 = hn, Z7 = V7, J7 = rr, Q7 = zl;
function eZ(e, t, r) {
  var n = J7(e) ? Y7 : Z7;
  return r && Q7(e, t, r) && (t = void 0), n(e, X7(t));
}
var tZ = eZ;
const rZ = /* @__PURE__ */ Je(tZ);
var cn = function(t, r) {
  var n = t.alwaysShow, i = t.ifOverflow;
  return n && (i = "extendDomain"), i === r;
}, qw = oO;
function nZ(e, t, r) {
  t == "__proto__" && qw ? qw(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
var iZ = nZ, aZ = iZ, oZ = iO, sZ = hn;
function uZ(e, t) {
  var r = {};
  return t = sZ(t), oZ(e, function(n, i, a) {
    aZ(r, i, t(n, i, a));
  }), r;
}
var cZ = uZ;
const lZ = /* @__PURE__ */ Je(cZ);
function fZ(e, t) {
  for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
    if (!t(e[r], r, e))
      return !1;
  return !0;
}
var dZ = fZ, hZ = kv;
function pZ(e, t) {
  var r = !0;
  return hZ(e, function(n, i, a) {
    return r = !!t(n, i, a), r;
  }), r;
}
var vZ = pZ, gZ = dZ, yZ = vZ, mZ = hn, bZ = rr, xZ = zl;
function wZ(e, t, r) {
  var n = bZ(e) ? gZ : yZ;
  return r && xZ(e, t, r) && (t = void 0), n(e, mZ(t));
}
var _Z = wZ;
const VA = /* @__PURE__ */ Je(_Z);
var OZ = ["x", "y"];
function eo(e) {
  "@babel/helpers - typeof";
  return eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eo(e);
}
function Dp() {
  return Dp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Dp.apply(this, arguments);
}
function Kw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function os(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Kw(Object(r), !0).forEach(function(n) {
      AZ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Kw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function AZ(e, t, r) {
  return t = SZ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function SZ(e) {
  var t = PZ(e, "string");
  return eo(t) == "symbol" ? t : String(t);
}
function PZ(e, t) {
  if (eo(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (eo(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function EZ(e, t) {
  if (e == null) return {};
  var r = TZ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function TZ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function $Z(e, t) {
  var r = e.x, n = e.y, i = EZ(e, OZ), a = "".concat(r), s = parseInt(a, 10), c = "".concat(n), l = parseInt(c, 10), f = "".concat(t.height || i.height), d = parseInt(f, 10), h = "".concat(t.width || i.width), v = parseInt(h, 10);
  return os(os(os(os(os({}, t), i), s ? {
    x: s
  } : {}), l ? {
    y: l
  } : {}), {}, {
    height: d,
    width: v,
    name: t.name,
    radius: t.radius
  });
}
function Vw(e) {
  return /* @__PURE__ */ k.createElement(WA, Dp({
    shapeType: "rectangle",
    propTransformer: $Z,
    activeClassName: "recharts-active-bar"
  }, e));
}
var CZ = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return function(n, i) {
    if (typeof t == "number") return t;
    var a = typeof n == "number";
    return a ? t(n, i) : (a || (process.env.NODE_ENV !== "production" ? er(!1, "minPointSize callback function received a value with type of ".concat(eo(n), ". Currently only numbers are supported.")) : er()), r);
  };
}, MZ = ["value", "background"], YA;
function to(e) {
  "@babel/helpers - typeof";
  return to = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, to(e);
}
function IZ(e, t) {
  if (e == null) return {};
  var r = kZ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function kZ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function yl() {
  return yl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yl.apply(this, arguments);
}
function Yw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ct(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Yw(Object(r), !0).forEach(function(n) {
      fi(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Yw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function jZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ZA(n.key), n);
  }
}
function RZ(e, t, r) {
  return t && Xw(e.prototype, t), r && Xw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function NZ(e, t, r) {
  return t = ml(t), DZ(e, XA() ? Reflect.construct(t, r || [], ml(e).constructor) : t.apply(e, r));
}
function DZ(e, t) {
  if (t && (to(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return us(e);
}
function XA() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (XA = function() {
    return !!e;
  })();
}
function ml(e) {
  return ml = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ml(e);
}
function us(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function LZ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Lp(e, t);
}
function Lp(e, t) {
  return Lp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Lp(e, t);
}
function fi(e, t, r) {
  return t = ZA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZA(e) {
  var t = BZ(e, "string");
  return to(t) == "symbol" ? t : String(t);
}
function BZ(e, t) {
  if (to(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (to(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var _i = /* @__PURE__ */ function(e) {
  LZ(t, e);
  function t() {
    var r;
    jZ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = NZ(this, t, [].concat(i)), fi(us(r), "state", {
      isAnimationFinished: !1
    }), fi(us(r), "id", ia("recharts-bar-")), fi(us(r), "handleAnimationEnd", function() {
      var s = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), s && s();
    }), fi(us(r), "handleAnimationStart", function() {
      var s = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), s && s();
    }), r;
  }
  return RZ(t, [{
    key: "renderRectanglesStatically",
    value: function(n) {
      var i = this, a = this.props, s = a.shape, c = a.dataKey, l = a.activeIndex, f = a.activeBar, d = me(this.props, !1);
      return n && n.map(function(h, v) {
        var g = v === l, x = g ? f : s, y = Ct(Ct(Ct({}, d), h), {}, {
          isActive: g,
          option: x,
          index: v,
          dataKey: c,
          onAnimationStart: i.handleAnimationStart,
          onAnimationEnd: i.handleAnimationEnd
        });
        return /* @__PURE__ */ k.createElement(Le, yl({
          className: "recharts-bar-rectangle"
        }, Yi(i.props, h, v), {
          key: "rectangle-".concat(h == null ? void 0 : h.x, "-").concat(h == null ? void 0 : h.y, "-").concat(h == null ? void 0 : h.value)
        }), /* @__PURE__ */ k.createElement(Vw, y));
      });
    }
  }, {
    key: "renderRectanglesWithAnimation",
    value: function() {
      var n = this, i = this.props, a = i.data, s = i.layout, c = i.isAnimationActive, l = i.animationBegin, f = i.animationDuration, d = i.animationEasing, h = i.animationId, v = this.state.prevData;
      return /* @__PURE__ */ k.createElement(Xr, {
        begin: l,
        duration: f,
        isActive: c,
        easing: d,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "bar-".concat(h),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(g) {
        var x = g.t, y = a.map(function(w, A) {
          var O = v && v[A];
          if (O) {
            var S = St(O.x, w.x), _ = St(O.y, w.y), b = St(O.width, w.width), E = St(O.height, w.height);
            return Ct(Ct({}, w), {}, {
              x: S(x),
              y: _(x),
              width: b(x),
              height: E(x)
            });
          }
          if (s === "horizontal") {
            var C = St(0, w.height), M = C(x);
            return Ct(Ct({}, w), {}, {
              y: w.y + w.height - M,
              height: M
            });
          }
          var F = St(0, w.width), D = F(x);
          return Ct(Ct({}, w), {}, {
            width: D
          });
        });
        return /* @__PURE__ */ k.createElement(Le, null, n.renderRectanglesStatically(y));
      });
    }
  }, {
    key: "renderRectangles",
    value: function() {
      var n = this.props, i = n.data, a = n.isAnimationActive, s = this.state.prevData;
      return a && i && i.length && (!s || !Xi(s, i)) ? this.renderRectanglesWithAnimation() : this.renderRectanglesStatically(i);
    }
  }, {
    key: "renderBackground",
    value: function() {
      var n = this, i = this.props, a = i.data, s = i.dataKey, c = i.activeIndex, l = me(this.props.background, !1);
      return a.map(function(f, d) {
        f.value;
        var h = f.background, v = IZ(f, MZ);
        if (!h)
          return null;
        var g = Ct(Ct(Ct(Ct(Ct({}, v), {}, {
          fill: "#eee"
        }, h), l), Yi(n.props, f, d)), {}, {
          onAnimationStart: n.handleAnimationStart,
          onAnimationEnd: n.handleAnimationEnd,
          dataKey: s,
          index: d,
          key: "background-bar-".concat(d),
          className: "recharts-bar-background-rectangle"
        });
        return /* @__PURE__ */ k.createElement(Vw, yl({
          option: n.props.background,
          isActive: d === c
        }, g));
      });
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, s = a.data, c = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = yr(d, fu);
      if (!h)
        return null;
      var v = f === "vertical" ? s[0].height / 2 : s[0].width / 2, g = function(w, A) {
        var O = Array.isArray(w.value) ? w.value[1] : w.value;
        return {
          x: w.x,
          y: w.y,
          value: O,
          errorVal: bt(w, A)
        };
      }, x = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, x, h.map(function(y) {
        return /* @__PURE__ */ k.cloneElement(y, {
          key: "error-bar-".concat(i, "-").concat(y.props.dataKey),
          data: s,
          xAxis: c,
          yAxis: l,
          layout: f,
          offset: v,
          dataPointFormatter: g
        });
      }));
    }
  }, {
    key: "render",
    value: function() {
      var n = this.props, i = n.hide, a = n.data, s = n.className, c = n.xAxis, l = n.yAxis, f = n.left, d = n.top, h = n.width, v = n.height, g = n.isAnimationActive, x = n.background, y = n.id;
      if (i || !a || !a.length)
        return null;
      var w = this.state.isAnimationFinished, A = Me("recharts-bar", s), O = c && c.allowDataOverflow, S = l && l.allowDataOverflow, _ = O || S, b = Te(y) ? this.id : y;
      return /* @__PURE__ */ k.createElement(Le, {
        className: A
      }, O || S ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(b)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: O ? f : f - h / 2,
        y: S ? d : d - v / 2,
        width: O ? h : h * 2,
        height: S ? v : v * 2
      }))) : null, /* @__PURE__ */ k.createElement(Le, {
        className: "recharts-bar-rectangles",
        clipPath: _ ? "url(#clipPath-".concat(b, ")") : null
      }, x ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(_, b), (!g || w) && kr.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curData: n.data,
        prevData: i.curData
      } : n.data !== i.curData ? {
        curData: n.data
      } : null;
    }
  }]), t;
}(Nr);
YA = _i;
fi(_i, "displayName", "Bar");
fi(_i, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  legendType: "rect",
  minPointSize: 0,
  hide: !1,
  data: [],
  layout: "vertical",
  activeBar: !1,
  isAnimationActive: !Yr.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "ease"
});
fi(_i, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.barPosition, i = e.bandSize, a = e.xAxis, s = e.yAxis, c = e.xAxisTicks, l = e.yAxisTicks, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = E4(n, r);
  if (!g)
    return null;
  var x = t.layout, y = r.props, w = y.dataKey, A = y.children, O = y.minPointSize, S = x === "horizontal" ? s : a, _ = f ? S.scale.domain() : null, b = j4({
    numericAxis: S
  }), E = yr(A, Nv), C = h.map(function(M, F) {
    var D, B, N, U, z, J;
    f ? D = T4(f[d + F], _) : (D = bt(M, w), Array.isArray(D) || (D = [b, D]));
    var H = CZ(O, YA.defaultProps.minPointSize)(D[1], F);
    if (x === "horizontal") {
      var Z, q = [s.scale(D[0]), s.scale(D[1])], se = q[0], G = q[1];
      B = Cx({
        axis: a,
        ticks: c,
        bandSize: i,
        offset: g.offset,
        entry: M,
        index: F
      }), N = (Z = G ?? se) !== null && Z !== void 0 ? Z : void 0, U = g.size;
      var Y = se - G;
      if (z = Number.isNaN(Y) ? 0 : Y, J = {
        x: B,
        y: s.y,
        width: U,
        height: s.height
      }, Math.abs(H) > 0 && Math.abs(z) < Math.abs(H)) {
        var ae = Gt(z || H) * (Math.abs(H) - Math.abs(z));
        N -= ae, z += ae;
      }
    } else {
      var ce = [a.scale(D[0]), a.scale(D[1])], he = ce[0], ge = ce[1];
      if (B = he, N = Cx({
        axis: s,
        ticks: l,
        bandSize: i,
        offset: g.offset,
        entry: M,
        index: F
      }), U = ge - he, z = g.size, J = {
        x: a.x,
        y: N,
        width: a.width,
        height: z
      }, Math.abs(H) > 0 && Math.abs(U) < Math.abs(H)) {
        var xe = Gt(U || H) * (Math.abs(H) - Math.abs(U));
        U += xe;
      }
    }
    return Ct(Ct(Ct({}, M), {}, {
      x: B,
      y: N,
      width: U,
      height: z,
      value: f ? D : D[1],
      payload: M,
      background: J
    }, E && E[F] && E[F].props), {}, {
      tooltipPayload: [bA(r, M)],
      tooltipPosition: {
        x: B + U / 2,
        y: N + z / 2
      }
    });
  });
  return Ct({
    data: C,
    layout: x
  }, v);
});
function Vs(e) {
  "@babel/helpers - typeof";
  return Vs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vs(e);
}
function FZ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zw(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, JA(n.key), n);
  }
}
function WZ(e, t, r) {
  return t && Zw(e.prototype, t), r && Zw(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function Jw(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Jw(Object(r), !0).forEach(function(n) {
      of(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Jw(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function of(e, t, r) {
  return t = JA(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function JA(e) {
  var t = zZ(e, "string");
  return Vs(t) == "symbol" ? t : String(t);
}
function zZ(e, t) {
  if (Vs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Vs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var lg = function(t, r, n, i, a) {
  var s = t.width, c = t.height, l = t.layout, f = t.children, d = Object.keys(r), h = {
    left: n.left,
    leftMirror: n.left,
    right: s - n.right,
    rightMirror: s - n.right,
    top: n.top,
    topMirror: n.top,
    bottom: c - n.bottom,
    bottomMirror: c - n.bottom
  }, v = !!dr(f, _i);
  return d.reduce(function(g, x) {
    var y = r[x], w = y.orientation, A = y.domain, O = y.padding, S = O === void 0 ? {} : O, _ = y.mirror, b = y.reversed, E = "".concat(w).concat(_ ? "Mirror" : ""), C, M, F, D, B;
    if (y.type === "number" && (y.padding === "gap" || y.padding === "no-gap")) {
      var N = A[1] - A[0], U = 1 / 0, z = y.categoricalDomain.sort();
      if (z.forEach(function(he, ge) {
        ge > 0 && (U = Math.min((he || 0) - (z[ge - 1] || 0), U));
      }), Number.isFinite(U)) {
        var J = U / N, H = y.layout === "vertical" ? n.height : n.width;
        if (y.padding === "gap" && (C = J * H / 2), y.padding === "no-gap") {
          var Z = qt(t.barCategoryGap, J * H), q = J * H / 2;
          C = q - Z - (q - Z) / H * Z;
        }
      }
    }
    i === "xAxis" ? M = [n.left + (S.left || 0) + (C || 0), n.left + n.width - (S.right || 0) - (C || 0)] : i === "yAxis" ? M = l === "horizontal" ? [n.top + n.height - (S.bottom || 0), n.top + (S.top || 0)] : [n.top + (S.top || 0) + (C || 0), n.top + n.height - (S.bottom || 0) - (C || 0)] : M = y.range, b && (M = [M[1], M[0]]);
    var se = vA(y, a, v), G = se.scale, Y = se.realScaleType;
    G.domain(A).range(M), gA(G);
    var ae = yA(G, Hr(Hr({}, y), {}, {
      realScaleType: Y
    }));
    i === "xAxis" ? (B = w === "top" && !_ || w === "bottom" && _, F = n.left, D = h[E] - B * y.height) : i === "yAxis" && (B = w === "left" && !_ || w === "right" && _, F = h[E] - B * y.width, D = n.top);
    var ce = Hr(Hr(Hr({}, y), ae), {}, {
      realScaleType: Y,
      x: F,
      y: D,
      scale: G,
      width: i === "xAxis" ? n.width : y.width,
      height: i === "yAxis" ? n.height : y.height
    });
    return ce.bandSize = tl(ce, ae), !y.hide && i === "xAxis" ? h[E] += (B ? -1 : 1) * ce.height : y.hide || (h[E] += (B ? -1 : 1) * ce.width), Hr(Hr({}, g), {}, of({}, x, ce));
  }, {});
}, QA = function(t, r) {
  var n = t.x, i = t.y, a = r.x, s = r.y;
  return {
    x: Math.min(n, a),
    y: Math.min(i, s),
    width: Math.abs(a - n),
    height: Math.abs(s - i)
  };
}, UZ = function(t) {
  var r = t.x1, n = t.y1, i = t.x2, a = t.y2;
  return QA({
    x: r,
    y: n
  }, {
    x: i,
    y: a
  });
}, eS = /* @__PURE__ */ function() {
  function e(t) {
    FZ(this, e), this.scale = t;
  }
  return WZ(e, [{
    key: "domain",
    get: function() {
      return this.scale.domain;
    }
  }, {
    key: "range",
    get: function() {
      return this.scale.range;
    }
  }, {
    key: "rangeMin",
    get: function() {
      return this.range()[0];
    }
  }, {
    key: "rangeMax",
    get: function() {
      return this.range()[1];
    }
  }, {
    key: "bandwidth",
    get: function() {
      return this.scale.bandwidth;
    }
  }, {
    key: "apply",
    value: function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = n.bandAware, a = n.position;
      if (r !== void 0) {
        if (a)
          switch (a) {
            case "start":
              return this.scale(r);
            case "middle": {
              var s = this.bandwidth ? this.bandwidth() / 2 : 0;
              return this.scale(r) + s;
            }
            case "end": {
              var c = this.bandwidth ? this.bandwidth() : 0;
              return this.scale(r) + c;
            }
            default:
              return this.scale(r);
          }
        if (i) {
          var l = this.bandwidth ? this.bandwidth() / 2 : 0;
          return this.scale(r) + l;
        }
        return this.scale(r);
      }
    }
  }, {
    key: "isInRange",
    value: function(r) {
      var n = this.range(), i = n[0], a = n[n.length - 1];
      return i <= a ? r >= i && r <= a : r >= a && r <= i;
    }
  }], [{
    key: "create",
    value: function(r) {
      return new e(r);
    }
  }]), e;
}();
of(eS, "EPS", 1e-4);
var fg = function(t) {
  var r = Object.keys(t).reduce(function(n, i) {
    return Hr(Hr({}, n), {}, of({}, i, eS.create(t[i])));
  }, {});
  return Hr(Hr({}, r), {}, {
    apply: function(i) {
      var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = a.bandAware, c = a.position;
      return lZ(i, function(l, f) {
        return r[f].apply(l, {
          bandAware: s,
          position: c
        });
      });
    },
    isInRange: function(i) {
      return VA(i, function(a, s) {
        return r[s].isInRange(a);
      });
    }
  });
};
function HZ(e) {
  return (e % 180 + 180) % 180;
}
var GZ = function(t) {
  var r = t.width, n = t.height, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, a = HZ(i), s = a * Math.PI / 180, c = Math.atan(n / r), l = s > c && s < Math.PI - c ? n / Math.sin(s) : r / Math.cos(s);
  return Math.abs(l);
}, qZ = hn, KZ = ou, VZ = Fl;
function YZ(e) {
  return function(t, r, n) {
    var i = Object(t);
    if (!KZ(t)) {
      var a = qZ(r);
      t = VZ(t), r = function(c) {
        return a(i[c], c, i);
      };
    }
    var s = e(t, r, n);
    return s > -1 ? i[a ? t[s] : s] : void 0;
  };
}
var XZ = YZ, ZZ = HA;
function JZ(e) {
  var t = ZZ(e), r = t % 1;
  return t === t ? r ? t - r : t : 0;
}
var QZ = JZ, eJ = Z_, tJ = hn, rJ = QZ, nJ = Math.max;
function iJ(e, t, r) {
  var n = e == null ? 0 : e.length;
  if (!n)
    return -1;
  var i = r == null ? 0 : rJ(r);
  return i < 0 && (i = nJ(n + i, 0)), eJ(e, tJ(t), i);
}
var aJ = iJ, oJ = XZ, sJ = aJ, uJ = oJ(sJ), cJ = uJ;
const lJ = /* @__PURE__ */ Je(cJ);
var fJ = AN(function(e) {
  return {
    x: e.left,
    y: e.top,
    width: e.width,
    height: e.height
  };
}, function(e) {
  return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
});
function bl(e) {
  "@babel/helpers - typeof";
  return bl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, bl(e);
}
var dg = /* @__PURE__ */ Rr(void 0), hg = /* @__PURE__ */ Rr(void 0), tS = /* @__PURE__ */ Rr(void 0), rS = /* @__PURE__ */ Rr({}), nS = /* @__PURE__ */ Rr(void 0), iS = /* @__PURE__ */ Rr(0), aS = /* @__PURE__ */ Rr(0), Qw = function(t) {
  var r = t.state, n = r.xAxisMap, i = r.yAxisMap, a = r.offset, s = t.clipPathId, c = t.children, l = t.width, f = t.height, d = fJ(a);
  return /* @__PURE__ */ k.createElement(dg.Provider, {
    value: n
  }, /* @__PURE__ */ k.createElement(hg.Provider, {
    value: i
  }, /* @__PURE__ */ k.createElement(rS.Provider, {
    value: a
  }, /* @__PURE__ */ k.createElement(tS.Provider, {
    value: d
  }, /* @__PURE__ */ k.createElement(nS.Provider, {
    value: s
  }, /* @__PURE__ */ k.createElement(iS.Provider, {
    value: f
  }, /* @__PURE__ */ k.createElement(aS.Provider, {
    value: l
  }, c)))))));
}, dJ = function() {
  return tr(nS);
};
function oS(e) {
  var t = Object.keys(e);
  return t.length === 0 ? "There are no available ids." : "Available ids are: ".concat(t, ".");
}
var sS = function(t) {
  var r = tr(dg);
  r == null && (process.env.NODE_ENV !== "production" ? er(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : er());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? er(!1, 'Could not find xAxis by id "'.concat(t, '" [').concat(bl(t), "]. ").concat(oS(r))) : er()), n;
}, hJ = function() {
  var t = tr(dg);
  return ci(t);
}, pJ = function() {
  var t = tr(hg), r = lJ(t, function(n) {
    return VA(n.domain, Number.isFinite);
  });
  return r || ci(t);
}, uS = function(t) {
  var r = tr(hg);
  r == null && (process.env.NODE_ENV !== "production" ? er(!1, "Could not find Recharts context; are you sure this is rendered inside a Recharts wrapper component?") : er());
  var n = r[t];
  return n == null && (process.env.NODE_ENV !== "production" ? er(!1, 'Could not find yAxis by id "'.concat(t, '" [').concat(bl(t), "]. ").concat(oS(r))) : er()), n;
}, vJ = function() {
  var t = tr(tS);
  return t;
}, gJ = function() {
  return tr(rS);
}, pg = function() {
  return tr(aS);
}, vg = function() {
  return tr(iS);
};
function Ys(e) {
  "@babel/helpers - typeof";
  return Ys = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ys(e);
}
function e1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function t1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? e1(Object(r), !0).forEach(function(n) {
      yJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function yJ(e, t, r) {
  return t = mJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function mJ(e) {
  var t = bJ(e, "string");
  return Ys(t) == "symbol" ? t : String(t);
}
function bJ(e, t) {
  if (Ys(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ys(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xJ(e, t) {
  return AJ(e) || OJ(e, t) || _J(e, t) || wJ();
}
function wJ() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _J(e, t) {
  if (e) {
    if (typeof e == "string") return r1(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return r1(e, t);
  }
}
function r1(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function OJ(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function AJ(e) {
  if (Array.isArray(e)) return e;
}
function Bp() {
  return Bp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Bp.apply(this, arguments);
}
var SJ = function(t, r) {
  var n;
  return /* @__PURE__ */ k.isValidElement(t) ? n = /* @__PURE__ */ k.cloneElement(t, r) : Pe(t) ? n = t(r) : n = /* @__PURE__ */ k.createElement("line", Bp({}, r, {
    className: "recharts-reference-line-line"
  })), n;
}, PJ = function(t, r, n, i, a, s, c, l, f) {
  var d = a.x, h = a.y, v = a.width, g = a.height;
  if (n) {
    var x = f.y, y = t.y.apply(x, {
      position: s
    });
    if (cn(f, "discard") && !t.y.isInRange(y))
      return null;
    var w = [{
      x: d + v,
      y
    }, {
      x: d,
      y
    }];
    return l === "left" ? w.reverse() : w;
  }
  if (r) {
    var A = f.x, O = t.x.apply(A, {
      position: s
    });
    if (cn(f, "discard") && !t.x.isInRange(O))
      return null;
    var S = [{
      x: O,
      y: h + g
    }, {
      x: O,
      y: h
    }];
    return c === "top" ? S.reverse() : S;
  }
  if (i) {
    var _ = f.segment, b = _.map(function(E) {
      return t.apply(E, {
        position: s
      });
    });
    return cn(f, "discard") && rZ(b, function(E) {
      return !t.isInRange(E);
    }) ? null : b;
  }
  return null;
};
function gg(e) {
  var t = e.x, r = e.y, n = e.segment, i = e.xAxisId, a = e.yAxisId, s = e.shape, c = e.className, l = e.alwaysShow, f = dJ(), d = sS(i), h = uS(a), v = vJ();
  if (!f || !v)
    return null;
  Vr(l === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var g = fg({
    x: d.scale,
    y: h.scale
  }), x = Et(t), y = Et(r), w = n && n.length === 2, A = PJ(g, x, y, w, v, e.position, d.orientation, h.orientation, e);
  if (!A)
    return null;
  var O = xJ(A, 2), S = O[0], _ = S.x, b = S.y, E = O[1], C = E.x, M = E.y, F = cn(e, "hidden") ? "url(#".concat(f, ")") : void 0, D = t1(t1({
    clipPath: F
  }, me(e, !0)), {}, {
    x1: _,
    y1: b,
    x2: C,
    y2: M
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-line", c)
  }, SJ(s, D), Pt.renderCallByParent(e, UZ({
    x1: _,
    y1: b,
    x2: C,
    y2: M
  })));
}
gg.displayName = "ReferenceLine";
gg.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  fill: "none",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1,
  position: "middle"
};
function Xs(e) {
  "@babel/helpers - typeof";
  return Xs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Xs(e);
}
function Fp() {
  return Fp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Fp.apply(this, arguments);
}
function n1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function i1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? n1(Object(r), !0).forEach(function(n) {
      EJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : n1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function EJ(e, t, r) {
  return t = TJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function TJ(e) {
  var t = $J(e, "string");
  return Xs(t) == "symbol" ? t : String(t);
}
function $J(e, t) {
  if (Xs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Xs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var CJ = function(t) {
  var r = t.x, n = t.y, i = t.xAxis, a = t.yAxis, s = fg({
    x: i.scale,
    y: a.scale
  }), c = s.apply({
    x: r,
    y: n
  }, {
    bandAware: !0
  });
  return cn(t, "discard") && !s.isInRange(c) ? null : c;
};
function hu(e) {
  var t = e.x, r = e.y, n = e.r, i = e.alwaysShow, a = e.clipPathId, s = Et(t), c = Et(r);
  if (Vr(i === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.'), !s || !c)
    return null;
  var l = CJ(e);
  if (!l)
    return null;
  var f = l.x, d = l.y, h = e.shape, v = e.className, g = cn(e, "hidden") ? "url(#".concat(a, ")") : void 0, x = i1(i1({
    clipPath: g
  }, me(e, !0)), {}, {
    cx: f,
    cy: d
  });
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-dot", v)
  }, hu.renderDot(h, x), Pt.renderCallByParent(e, {
    x: f - n,
    y: d - n,
    width: 2 * n,
    height: 2 * n
  }));
}
hu.displayName = "ReferenceDot";
hu.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#fff",
  stroke: "#ccc",
  fillOpacity: 1,
  strokeWidth: 1
};
hu.renderDot = function(e, t) {
  var r;
  return /* @__PURE__ */ k.isValidElement(e) ? r = /* @__PURE__ */ k.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ k.createElement(du, Fp({}, t, {
    cx: t.cx,
    cy: t.cy,
    className: "recharts-reference-dot-dot"
  })), r;
};
function Zs(e) {
  "@babel/helpers - typeof";
  return Zs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Zs(e);
}
function Wp() {
  return Wp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Wp.apply(this, arguments);
}
function a1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function o1(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? a1(Object(r), !0).forEach(function(n) {
      MJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function MJ(e, t, r) {
  return t = IJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function IJ(e) {
  var t = kJ(e, "string");
  return Zs(t) == "symbol" ? t : String(t);
}
function kJ(e, t) {
  if (Zs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Zs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var jJ = function(t, r, n, i, a) {
  var s = a.x1, c = a.x2, l = a.y1, f = a.y2, d = a.xAxis, h = a.yAxis;
  if (!d || !h) return null;
  var v = fg({
    x: d.scale,
    y: h.scale
  }), g = {
    x: t ? v.x.apply(s, {
      position: "start"
    }) : v.x.rangeMin,
    y: n ? v.y.apply(l, {
      position: "start"
    }) : v.y.rangeMin
  }, x = {
    x: r ? v.x.apply(c, {
      position: "end"
    }) : v.x.rangeMax,
    y: i ? v.y.apply(f, {
      position: "end"
    }) : v.y.rangeMax
  };
  return cn(a, "discard") && (!v.isInRange(g) || !v.isInRange(x)) ? null : QA(g, x);
};
function pu(e) {
  var t = e.x1, r = e.x2, n = e.y1, i = e.y2, a = e.className, s = e.alwaysShow, c = e.clipPathId;
  Vr(s === void 0, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
  var l = Et(t), f = Et(r), d = Et(n), h = Et(i), v = e.shape;
  if (!l && !f && !d && !h && !v)
    return null;
  var g = jJ(l, f, d, h, e);
  if (!g && !v)
    return null;
  var x = cn(e, "hidden") ? "url(#".concat(c, ")") : void 0;
  return /* @__PURE__ */ k.createElement(Le, {
    className: Me("recharts-reference-area", a)
  }, pu.renderRect(v, o1(o1({
    clipPath: x
  }, me(e, !0)), g)), Pt.renderCallByParent(e, g));
}
pu.displayName = "ReferenceArea";
pu.defaultProps = {
  isFront: !1,
  ifOverflow: "discard",
  xAxisId: 0,
  yAxisId: 0,
  r: 10,
  fill: "#ccc",
  fillOpacity: 0.5,
  stroke: "none",
  strokeWidth: 1
};
pu.renderRect = function(e, t) {
  var r;
  return /* @__PURE__ */ k.isValidElement(e) ? r = /* @__PURE__ */ k.cloneElement(e, t) : Pe(e) ? r = e(t) : r = /* @__PURE__ */ k.createElement(cg, Wp({}, t, {
    className: "recharts-reference-area-rect"
  })), r;
};
function cS(e, t, r) {
  if (t < 1)
    return [];
  if (t === 1 && r === void 0)
    return e;
  for (var n = [], i = 0; i < e.length; i += t)
    n.push(e[i]);
  return n;
}
function RJ(e, t, r) {
  var n = {
    width: e.width + t.width,
    height: e.height + t.height
  };
  return GZ(n, r);
}
function NJ(e, t, r) {
  var n = r === "width", i = e.x, a = e.y, s = e.width, c = e.height;
  return t === 1 ? {
    start: n ? i : a,
    end: n ? i + s : a + c
  } : {
    start: n ? i + s : a + c,
    end: n ? i : a
  };
}
function xl(e, t, r, n, i) {
  if (e * t < e * n || e * t > e * i)
    return !1;
  var a = r();
  return e * (t - e * a / 2 - n) >= 0 && e * (t + e * a / 2 - i) <= 0;
}
function DJ(e, t) {
  return cS(e, t + 1);
}
function LJ(e, t, r, n, i) {
  for (var a = (n || []).slice(), s = t.start, c = t.end, l = 0, f = 1, d = s, h = function() {
    var x = n == null ? void 0 : n[l];
    if (x === void 0)
      return {
        v: cS(n, f)
      };
    var y = l, w, A = function() {
      return w === void 0 && (w = r(x, y)), w;
    }, O = x.coordinate, S = l === 0 || xl(e, O, A, d, c);
    S || (l = 0, d = s, f += 1), S && (d = O + e * (A() / 2 + i), l += f);
  }, v; f <= a.length; )
    if (v = h(), v) return v.v;
  return [];
}
function Js(e) {
  "@babel/helpers - typeof";
  return Js = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Js(e);
}
function s1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Lt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? s1(Object(r), !0).forEach(function(n) {
      BJ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function BJ(e, t, r) {
  return t = FJ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function FJ(e) {
  var t = WJ(e, "string");
  return Js(t) == "symbol" ? t : String(t);
}
function WJ(e, t) {
  if (Js(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Js(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zJ(e, t, r, n, i) {
  for (var a = (n || []).slice(), s = a.length, c = t.start, l = t.end, f = function(v) {
    var g = a[v], x, y = function() {
      return x === void 0 && (x = r(g, v)), x;
    };
    if (v === s - 1) {
      var w = e * (g.coordinate + e * y() / 2 - l);
      a[v] = g = Lt(Lt({}, g), {}, {
        tickCoord: w > 0 ? g.coordinate - w * e : g.coordinate
      });
    } else
      a[v] = g = Lt(Lt({}, g), {}, {
        tickCoord: g.coordinate
      });
    var A = xl(e, g.tickCoord, y, c, l);
    A && (l = g.tickCoord - e * (y() / 2 + i), a[v] = Lt(Lt({}, g), {}, {
      isShow: !0
    }));
  }, d = s - 1; d >= 0; d--)
    f(d);
  return a;
}
function UJ(e, t, r, n, i, a) {
  var s = (n || []).slice(), c = s.length, l = t.start, f = t.end;
  if (a) {
    var d = n[c - 1], h = r(d, c - 1), v = e * (d.coordinate + e * h / 2 - f);
    s[c - 1] = d = Lt(Lt({}, d), {}, {
      tickCoord: v > 0 ? d.coordinate - v * e : d.coordinate
    });
    var g = xl(e, d.tickCoord, function() {
      return h;
    }, l, f);
    g && (f = d.tickCoord - e * (h / 2 + i), s[c - 1] = Lt(Lt({}, d), {}, {
      isShow: !0
    }));
  }
  for (var x = a ? c - 1 : c, y = function(O) {
    var S = s[O], _, b = function() {
      return _ === void 0 && (_ = r(S, O)), _;
    };
    if (O === 0) {
      var E = e * (S.coordinate - e * b() / 2 - l);
      s[O] = S = Lt(Lt({}, S), {}, {
        tickCoord: E < 0 ? S.coordinate - E * e : S.coordinate
      });
    } else
      s[O] = S = Lt(Lt({}, S), {}, {
        tickCoord: S.coordinate
      });
    var C = xl(e, S.tickCoord, b, l, f);
    C && (l = S.tickCoord + e * (b() / 2 + i), s[O] = Lt(Lt({}, S), {}, {
      isShow: !0
    }));
  }, w = 0; w < x; w++)
    y(w);
  return s;
}
function yg(e, t, r) {
  var n = e.tick, i = e.ticks, a = e.viewBox, s = e.minTickGap, c = e.orientation, l = e.interval, f = e.tickFormatter, d = e.unit, h = e.angle;
  if (!i || !i.length || !n)
    return [];
  if (oe(l) || Yr.isSsr)
    return DJ(i, typeof l == "number" && oe(l) ? l : 0);
  var v = [], g = c === "top" || c === "bottom" ? "width" : "height", x = d && g === "width" ? ls(d, {
    fontSize: t,
    letterSpacing: r
  }) : {
    width: 0,
    height: 0
  }, y = function(S, _) {
    var b = Pe(f) ? f(S.value, _) : S.value;
    return g === "width" ? RJ(ls(b, {
      fontSize: t,
      letterSpacing: r
    }), x, h) : ls(b, {
      fontSize: t,
      letterSpacing: r
    })[g];
  }, w = i.length >= 2 ? Gt(i[1].coordinate - i[0].coordinate) : 1, A = NJ(a, w, g);
  return l === "equidistantPreserveStart" ? LJ(w, A, y, i, s) : (l === "preserveStart" || l === "preserveStartEnd" ? v = UJ(w, A, y, i, s, l === "preserveStartEnd") : v = zJ(w, A, y, i, s), v.filter(function(O) {
    return O.isShow;
  }));
}
var HJ = ["viewBox"], GJ = ["viewBox"], qJ = ["ticks"];
function ro(e) {
  "@babel/helpers - typeof";
  return ro = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ro(e);
}
function Ma() {
  return Ma = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ma.apply(this, arguments);
}
function u1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ut(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? u1(Object(r), !0).forEach(function(n) {
      mg(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function mh(e, t) {
  if (e == null) return {};
  var r = KJ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function KJ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function VJ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function c1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, fS(n.key), n);
  }
}
function YJ(e, t, r) {
  return t && c1(e.prototype, t), r && c1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function XJ(e, t, r) {
  return t = wl(t), ZJ(e, lS() ? Reflect.construct(t, r || [], wl(e).constructor) : t.apply(e, r));
}
function ZJ(e, t) {
  if (t && (ro(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return JJ(e);
}
function JJ(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lS = function() {
    return !!e;
  })();
}
function wl(e) {
  return wl = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wl(e);
}
function QJ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && zp(e, t);
}
function zp(e, t) {
  return zp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, zp(e, t);
}
function mg(e, t, r) {
  return t = fS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function fS(e) {
  var t = eQ(e, "string");
  return ro(t) == "symbol" ? t : String(t);
}
function eQ(e, t) {
  if (ro(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ro(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var So = /* @__PURE__ */ function(e) {
  QJ(t, e);
  function t(r) {
    var n;
    return VJ(this, t), n = XJ(this, t, [r]), n.state = {
      fontSize: "",
      letterSpacing: ""
    }, n;
  }
  return YJ(t, [{
    key: "shouldComponentUpdate",
    value: function(n, i) {
      var a = n.viewBox, s = mh(n, HJ), c = this.props, l = c.viewBox, f = mh(c, GJ);
      return !ja(a, l) || !ja(s, f) || !ja(i, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var n = this.layerReference;
      if (n) {
        var i = n.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        i && this.setState({
          fontSize: window.getComputedStyle(i).fontSize,
          letterSpacing: window.getComputedStyle(i).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(n) {
      var i = this.props, a = i.x, s = i.y, c = i.width, l = i.height, f = i.orientation, d = i.tickSize, h = i.mirror, v = i.tickMargin, g, x, y, w, A, O, S = h ? -1 : 1, _ = n.tickSize || d, b = oe(n.tickCoord) ? n.tickCoord : n.coordinate;
      switch (f) {
        case "top":
          g = x = n.coordinate, w = s + +!h * l, y = w - S * _, O = y - S * v, A = b;
          break;
        case "left":
          y = w = n.coordinate, x = a + +!h * c, g = x - S * _, A = g - S * v, O = b;
          break;
        case "right":
          y = w = n.coordinate, x = a + +h * c, g = x + S * _, A = g + S * v, O = b;
          break;
        default:
          g = x = n.coordinate, w = s + +h * l, y = w + S * _, O = y + S * v, A = b;
          break;
      }
      return {
        line: {
          x1: g,
          y1: y,
          x2: x,
          y2: w
        },
        tick: {
          x: A,
          y: O
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, s;
      switch (i) {
        case "left":
          s = a ? "start" : "end";
          break;
        case "right":
          s = a ? "end" : "start";
          break;
        default:
          s = "middle";
          break;
      }
      return s;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var n = this.props, i = n.orientation, a = n.mirror, s = "end";
      switch (i) {
        case "left":
        case "right":
          s = "middle";
          break;
        case "top":
          s = a ? "start" : "end";
          break;
        default:
          s = a ? "end" : "start";
          break;
      }
      return s;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var n = this.props, i = n.x, a = n.y, s = n.width, c = n.height, l = n.orientation, f = n.mirror, d = n.axisLine, h = Ut(Ut(Ut({}, me(this.props, !1)), me(d, !1)), {}, {
        fill: "none"
      });
      if (l === "top" || l === "bottom") {
        var v = +(l === "top" && !f || l === "bottom" && f);
        h = Ut(Ut({}, h), {}, {
          x1: i,
          y1: a + v * c,
          x2: i + s,
          y2: a + v * c
        });
      } else {
        var g = +(l === "left" && !f || l === "right" && f);
        h = Ut(Ut({}, h), {}, {
          x1: i + g * s,
          y1: a,
          x2: i + g * s,
          y2: a + c
        });
      }
      return /* @__PURE__ */ k.createElement("line", Ma({}, h, {
        className: Me("recharts-cartesian-axis-line", gr(d, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(n, i, a) {
        var s = this, c = this.props, l = c.tickLine, f = c.stroke, d = c.tick, h = c.tickFormatter, v = c.unit, g = yg(Ut(Ut({}, this.props), {}, {
          ticks: n
        }), i, a), x = this.getTickTextAnchor(), y = this.getTickVerticalAnchor(), w = me(this.props, !1), A = me(d, !1), O = Ut(Ut({}, w), {}, {
          fill: "none"
        }, me(l, !1)), S = g.map(function(_, b) {
          var E = s.getTickLineCoord(_), C = E.line, M = E.tick, F = Ut(Ut(Ut(Ut({
            textAnchor: x,
            verticalAnchor: y
          }, w), {}, {
            stroke: "none",
            fill: f
          }, A), M), {}, {
            index: b,
            payload: _,
            visibleTicksCount: g.length,
            tickFormatter: h
          });
          return /* @__PURE__ */ k.createElement(Le, Ma({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(_.value, "-").concat(_.coordinate, "-").concat(_.tickCoord)
          }, Yi(s.props, _, b)), l && /* @__PURE__ */ k.createElement("line", Ma({}, O, C, {
            className: Me("recharts-cartesian-axis-tick-line", gr(l, "className"))
          })), d && t.renderTickItem(d, F, "".concat(Pe(h) ? h(_.value, b) : _.value).concat(v || "")));
        });
        return /* @__PURE__ */ k.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, S);
      }
    )
  }, {
    key: "render",
    value: function() {
      var n = this, i = this.props, a = i.axisLine, s = i.width, c = i.height, l = i.ticksGenerator, f = i.className, d = i.hide;
      if (d)
        return null;
      var h = this.props, v = h.ticks, g = mh(h, qJ), x = v;
      return Pe(l) && (x = v && v.length > 0 ? l(this.props) : l(g)), s <= 0 || c <= 0 || !x || !x.length ? null : /* @__PURE__ */ k.createElement(Le, {
        className: Me("recharts-cartesian-axis", f),
        ref: function(w) {
          n.layerReference = w;
        }
      }, a && this.renderAxisLine(), this.renderTicks(x, this.state.fontSize, this.state.letterSpacing), Pt.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(n, i, a) {
      var s;
      return /* @__PURE__ */ k.isValidElement(n) ? s = /* @__PURE__ */ k.cloneElement(n, i) : Pe(n) ? s = n(i) : s = /* @__PURE__ */ k.createElement(hi, Ma({}, i, {
        className: "recharts-cartesian-axis-tick-value"
      }), a), s;
    }
  }]), t;
}(D1);
mg(So, "displayName", "CartesianAxis");
mg(So, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var tQ = ["x1", "y1", "x2", "y2", "key"], rQ = ["offset"];
function Ji(e) {
  "@babel/helpers - typeof";
  return Ji = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ji(e);
}
function l1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? l1(Object(r), !0).forEach(function(n) {
      nQ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function nQ(e, t, r) {
  return t = iQ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function iQ(e) {
  var t = aQ(e, "string");
  return Ji(t) == "symbol" ? t : String(t);
}
function aQ(e, t) {
  if (Ji(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ji(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ui() {
  return Ui = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ui.apply(this, arguments);
}
function f1(e, t) {
  if (e == null) return {};
  var r = oQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function oQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
var sQ = function(t) {
  var r = t.fill;
  if (!r || r === "none")
    return null;
  var n = t.fillOpacity, i = t.x, a = t.y, s = t.width, c = t.height;
  return /* @__PURE__ */ k.createElement("rect", {
    x: i,
    y: a,
    width: s,
    height: c,
    stroke: "none",
    fill: r,
    fillOpacity: n,
    className: "recharts-cartesian-grid-bg"
  });
};
function dS(e, t) {
  var r;
  if (/* @__PURE__ */ k.isValidElement(e))
    r = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = t.x1, i = t.y1, a = t.x2, s = t.y2, c = t.key, l = f1(t, tQ), f = me(l, !1);
    f.offset;
    var d = f1(f, rQ);
    r = /* @__PURE__ */ k.createElement("line", Ui({}, d, {
      x1: n,
      y1: i,
      x2: a,
      y2: s,
      fill: "none",
      key: c
    }));
  }
  return r;
}
function uQ(e) {
  var t = e.x, r = e.width, n = e.horizontal, i = n === void 0 ? !0 : n, a = e.horizontalPoints;
  if (!i || !a || !a.length)
    return null;
  var s = a.map(function(c, l) {
    var f = Bt(Bt({}, e), {}, {
      x1: t,
      y1: c,
      x2: t + r,
      y2: c,
      key: "line-".concat(l),
      index: l
    });
    return dS(i, f);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, s);
}
function cQ(e) {
  var t = e.y, r = e.height, n = e.vertical, i = n === void 0 ? !0 : n, a = e.verticalPoints;
  if (!i || !a || !a.length)
    return null;
  var s = a.map(function(c, l) {
    var f = Bt(Bt({}, e), {}, {
      x1: c,
      y1: t,
      x2: c,
      y2: t + r,
      key: "line-".concat(l),
      index: l
    });
    return dS(i, f);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, s);
}
function lQ(e) {
  var t = e.horizontalFill, r = e.fillOpacity, n = e.x, i = e.y, a = e.width, s = e.height, c = e.horizontalPoints, l = e.horizontal, f = l === void 0 ? !0 : l;
  if (!f || !t || !t.length)
    return null;
  var d = c.map(function(v) {
    return Math.round(v + i - i);
  }).sort(function(v, g) {
    return v - g;
  });
  i !== d[0] && d.unshift(0);
  var h = d.map(function(v, g) {
    var x = !d[g + 1], y = x ? i + s - v : d[g + 1] - v;
    if (y <= 0)
      return null;
    var w = g % t.length;
    return /* @__PURE__ */ k.createElement("rect", {
      key: "react-".concat(g),
      y: v,
      x: n,
      height: y,
      width: a,
      stroke: "none",
      fill: t[w],
      fillOpacity: r,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, h);
}
function fQ(e) {
  var t = e.vertical, r = t === void 0 ? !0 : t, n = e.verticalFill, i = e.fillOpacity, a = e.x, s = e.y, c = e.width, l = e.height, f = e.verticalPoints;
  if (!r || !n || !n.length)
    return null;
  var d = f.map(function(v) {
    return Math.round(v + a - a);
  }).sort(function(v, g) {
    return v - g;
  });
  a !== d[0] && d.unshift(0);
  var h = d.map(function(v, g) {
    var x = !d[g + 1], y = x ? a + c - v : d[g + 1] - v;
    if (y <= 0)
      return null;
    var w = g % n.length;
    return /* @__PURE__ */ k.createElement("rect", {
      key: "react-".concat(g),
      x: v,
      y: s,
      width: y,
      height: l,
      stroke: "none",
      fill: n[w],
      fillOpacity: i,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, h);
}
var dQ = function(t, r) {
  var n = t.xAxis, i = t.width, a = t.height, s = t.offset;
  return pA(yg(Bt(Bt(Bt({}, So.defaultProps), n), {}, {
    ticks: Cn(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), s.left, s.left + s.width, r);
}, hQ = function(t, r) {
  var n = t.yAxis, i = t.width, a = t.height, s = t.offset;
  return pA(yg(Bt(Bt(Bt({}, So.defaultProps), n), {}, {
    ticks: Cn(n, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: i,
      height: a
    }
  })), s.top, s.top + s.height, r);
}, Sa = {
  horizontal: !0,
  vertical: !0,
  // The ordinates of horizontal grid lines
  horizontalPoints: [],
  // The abscissas of vertical grid lines
  verticalPoints: [],
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function vu(e) {
  var t, r, n, i, a, s, c = pg(), l = vg(), f = gJ(), d = Bt(Bt({}, e), {}, {
    stroke: (t = e.stroke) !== null && t !== void 0 ? t : Sa.stroke,
    fill: (r = e.fill) !== null && r !== void 0 ? r : Sa.fill,
    horizontal: (n = e.horizontal) !== null && n !== void 0 ? n : Sa.horizontal,
    horizontalFill: (i = e.horizontalFill) !== null && i !== void 0 ? i : Sa.horizontalFill,
    vertical: (a = e.vertical) !== null && a !== void 0 ? a : Sa.vertical,
    verticalFill: (s = e.verticalFill) !== null && s !== void 0 ? s : Sa.verticalFill,
    x: oe(e.x) ? e.x : f.left,
    y: oe(e.y) ? e.y : f.top,
    width: oe(e.width) ? e.width : f.width,
    height: oe(e.height) ? e.height : f.height
  }), h = d.x, v = d.y, g = d.width, x = d.height, y = d.syncWithTicks, w = d.horizontalValues, A = d.verticalValues, O = hJ(), S = pJ();
  if (!oe(g) || g <= 0 || !oe(x) || x <= 0 || !oe(h) || h !== +h || !oe(v) || v !== +v)
    return null;
  var _ = d.verticalCoordinatesGenerator || dQ, b = d.horizontalCoordinatesGenerator || hQ, E = d.horizontalPoints, C = d.verticalPoints;
  if ((!E || !E.length) && Pe(b)) {
    var M = w && w.length, F = b({
      yAxis: S ? Bt(Bt({}, S), {}, {
        ticks: M ? w : S.ticks
      }) : void 0,
      width: c,
      height: l,
      offset: f
    }, M ? !0 : y);
    Vr(Array.isArray(F), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(Ji(F), "]")), Array.isArray(F) && (E = F);
  }
  if ((!C || !C.length) && Pe(_)) {
    var D = A && A.length, B = _({
      xAxis: O ? Bt(Bt({}, O), {}, {
        ticks: D ? A : O.ticks
      }) : void 0,
      width: c,
      height: l,
      offset: f
    }, D ? !0 : y);
    Vr(Array.isArray(B), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(Ji(B), "]")), Array.isArray(B) && (C = B);
  }
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ k.createElement(sQ, {
    fill: d.fill,
    fillOpacity: d.fillOpacity,
    x: d.x,
    y: d.y,
    width: d.width,
    height: d.height
  }), /* @__PURE__ */ k.createElement(uQ, Ui({}, d, {
    offset: f,
    horizontalPoints: E,
    xAxis: O,
    yAxis: S
  })), /* @__PURE__ */ k.createElement(cQ, Ui({}, d, {
    offset: f,
    verticalPoints: C,
    xAxis: O,
    yAxis: S
  })), /* @__PURE__ */ k.createElement(lQ, Ui({}, d, {
    horizontalPoints: E
  })), /* @__PURE__ */ k.createElement(fQ, Ui({}, d, {
    verticalPoints: C
  })));
}
vu.displayName = "CartesianGrid";
var pQ = ["type", "layout", "connectNulls", "ref"];
function no(e) {
  "@babel/helpers - typeof";
  return no = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, no(e);
}
function vQ(e, t) {
  if (e == null) return {};
  var r = gQ(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function gQ(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function gs() {
  return gs = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gs.apply(this, arguments);
}
function d1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function lr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? d1(Object(r), !0).forEach(function(n) {
      Gr(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Pa(e) {
  return xQ(e) || bQ(e) || mQ(e) || yQ();
}
function yQ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mQ(e, t) {
  if (e) {
    if (typeof e == "string") return Up(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Up(e, t);
  }
}
function bQ(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function xQ(e) {
  if (Array.isArray(e)) return Up(e);
}
function Up(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function wQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function h1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, pS(n.key), n);
  }
}
function _Q(e, t, r) {
  return t && h1(e.prototype, t), r && h1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function OQ(e, t, r) {
  return t = _l(t), AQ(e, hS() ? Reflect.construct(t, r || [], _l(e).constructor) : t.apply(e, r));
}
function AQ(e, t) {
  if (t && (no(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return oi(e);
}
function hS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (hS = function() {
    return !!e;
  })();
}
function _l(e) {
  return _l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, _l(e);
}
function oi(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function SQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Hp(e, t);
}
function Hp(e, t) {
  return Hp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Hp(e, t);
}
function Gr(e, t, r) {
  return t = pS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function pS(e) {
  var t = PQ(e, "string");
  return no(t) == "symbol" ? t : String(t);
}
function PQ(e, t) {
  if (no(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (no(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gu = /* @__PURE__ */ function(e) {
  SQ(t, e);
  function t() {
    var r;
    wQ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = OQ(this, t, [].concat(i)), Gr(oi(r), "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), Gr(oi(r), "generateSimpleStrokeDasharray", function(s, c) {
      return "".concat(c, "px ").concat(s - c, "px");
    }), Gr(oi(r), "getStrokeDasharray", function(s, c, l) {
      var f = l.reduce(function(A, O) {
        return A + O;
      });
      if (!f)
        return r.generateSimpleStrokeDasharray(c, s);
      for (var d = Math.floor(s / f), h = s % f, v = c - s, g = [], x = 0, y = 0; x < l.length; y += l[x], ++x)
        if (y + l[x] > h) {
          g = [].concat(Pa(l.slice(0, x)), [h - y]);
          break;
        }
      var w = g.length % 2 === 0 ? [0, v] : [v];
      return [].concat(Pa(t.repeat(l, d)), Pa(g), w).map(function(A) {
        return "".concat(A, "px");
      }).join(", ");
    }), Gr(oi(r), "id", ia("recharts-line-")), Gr(oi(r), "pathRef", function(s) {
      r.mainCurve = s;
    }), Gr(oi(r), "handleAnimationEnd", function() {
      r.setState({
        isAnimationFinished: !0
      }), r.props.onAnimationEnd && r.props.onAnimationEnd();
    }), Gr(oi(r), "handleAnimationStart", function() {
      r.setState({
        isAnimationFinished: !1
      }), r.props.onAnimationStart && r.props.onAnimationStart();
    }), r;
  }
  return _Q(t, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var n = this.getTotalLength();
        n !== this.state.totalLength && this.setState({
          totalLength: n
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var n = this.mainCurve;
      try {
        return n && n.getTotalLength && n.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(n, i) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var a = this.props, s = a.points, c = a.xAxis, l = a.yAxis, f = a.layout, d = a.children, h = yr(d, fu);
      if (!h)
        return null;
      var v = function(y, w) {
        return {
          x: y.x,
          y: y.y,
          value: y.value,
          errorVal: bt(y.payload, w)
        };
      }, g = {
        clipPath: n ? "url(#clipPath-".concat(i, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, g, h.map(function(x) {
        return /* @__PURE__ */ k.cloneElement(x, {
          key: "bar-".concat(x.props.dataKey),
          data: s,
          xAxis: c,
          yAxis: l,
          layout: f,
          dataPointFormatter: v
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(n, i, a) {
      var s = this.props.isAnimationActive;
      if (s && !this.state.isAnimationFinished)
        return null;
      var c = this.props, l = c.dot, f = c.points, d = c.dataKey, h = me(this.props, !1), v = me(l, !0), g = f.map(function(y, w) {
        var A = lr(lr(lr({
          key: "dot-".concat(w),
          r: 3
        }, h), v), {}, {
          value: y.value,
          dataKey: d,
          cx: y.x,
          cy: y.y,
          index: w,
          payload: y.payload
        });
        return t.renderDotItem(l, A);
      }), x = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, gs({
        className: "recharts-line-dots",
        key: "dots"
      }, x), g);
    }
  }, {
    key: "renderCurveStatically",
    value: function(n, i, a, s) {
      var c = this.props, l = c.type, f = c.layout, d = c.connectNulls;
      c.ref;
      var h = vQ(c, pQ), v = lr(lr(lr({}, me(h, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: i ? "url(#clipPath-".concat(a, ")") : null,
        points: n
      }, s), {}, {
        type: l,
        layout: f,
        connectNulls: d
      });
      return /* @__PURE__ */ k.createElement(Vi, gs({}, v, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(n, i) {
      var a = this, s = this.props, c = s.points, l = s.strokeDasharray, f = s.isAnimationActive, d = s.animationBegin, h = s.animationDuration, v = s.animationEasing, g = s.animationId, x = s.animateNewValues, y = s.width, w = s.height, A = this.state, O = A.prevPoints, S = A.totalLength;
      return /* @__PURE__ */ k.createElement(Xr, {
        begin: d,
        duration: h,
        isActive: f,
        easing: v,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(g),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(_) {
        var b = _.t;
        if (O) {
          var E = O.length / c.length, C = c.map(function(N, U) {
            var z = Math.floor(U * E);
            if (O[z]) {
              var J = O[z], H = St(J.x, N.x), Z = St(J.y, N.y);
              return lr(lr({}, N), {}, {
                x: H(b),
                y: Z(b)
              });
            }
            if (x) {
              var q = St(y * 2, N.x), se = St(w / 2, N.y);
              return lr(lr({}, N), {}, {
                x: q(b),
                y: se(b)
              });
            }
            return lr(lr({}, N), {}, {
              x: N.x,
              y: N.y
            });
          });
          return a.renderCurveStatically(C, n, i);
        }
        var M = St(0, S), F = M(b), D;
        if (l) {
          var B = "".concat(l).split(/[,\s]+/gim).map(function(N) {
            return parseFloat(N);
          });
          D = a.getStrokeDasharray(F, S, B);
        } else
          D = a.generateSimpleStrokeDasharray(S, F);
        return a.renderCurveStatically(c, n, i, {
          strokeDasharray: D
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(n, i) {
      var a = this.props, s = a.points, c = a.isAnimationActive, l = this.state, f = l.prevPoints, d = l.totalLength;
      return c && s && s.length && (!f && d > 0 || !Xi(f, s)) ? this.renderCurveWithAnimation(n, i) : this.renderCurveStatically(s, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, s = i.dot, c = i.points, l = i.className, f = i.xAxis, d = i.yAxis, h = i.top, v = i.left, g = i.width, x = i.height, y = i.isAnimationActive, w = i.id;
      if (a || !c || !c.length)
        return null;
      var A = this.state.isAnimationFinished, O = c.length === 1, S = Me("recharts-line", l), _ = f && f.allowDataOverflow, b = d && d.allowDataOverflow, E = _ || b, C = Te(w) ? this.id : w, M = (n = me(s, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, F = M.r, D = F === void 0 ? 3 : F, B = M.strokeWidth, N = B === void 0 ? 2 : B, U = u_(s) ? s : {}, z = U.clipDot, J = z === void 0 ? !0 : z, H = D * 2 + N;
      return /* @__PURE__ */ k.createElement(Le, {
        className: S
      }, _ || b ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: _ ? v : v - g / 2,
        y: b ? h : h - x / 2,
        width: _ ? g : g * 2,
        height: b ? x : x * 2
      })), !J && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: v - H / 2,
        y: h - H / 2,
        width: g + H,
        height: x + H
      }))) : null, !O && this.renderCurve(E, C), this.renderErrorBar(E, C), (O || s) && this.renderDots(E, J, C), (!y || A) && kr.renderCallByParent(this.props, c));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        prevPoints: i.curPoints
      } : n.points !== i.curPoints ? {
        curPoints: n.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(n, i) {
      for (var a = n.length % 2 !== 0 ? [].concat(Pa(n), [0]) : n, s = [], c = 0; c < i; ++c)
        s = [].concat(Pa(s), Pa(a));
      return s;
    }
  }, {
    key: "renderDotItem",
    value: function(n, i) {
      var a;
      if (/* @__PURE__ */ k.isValidElement(n))
        a = /* @__PURE__ */ k.cloneElement(n, i);
      else if (Pe(n))
        a = n(i);
      else {
        var s = Me("recharts-line-dot", typeof n != "boolean" ? n.className : "");
        a = /* @__PURE__ */ k.createElement(du, gs({}, i, {
          className: s
        }));
      }
      return a;
    }
  }]), t;
}(Nr);
Gr(gu, "displayName", "Line");
Gr(gu, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !Yr.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
Gr(gu, "getComposedData", function(e) {
  var t = e.props, r = e.xAxis, n = e.yAxis, i = e.xAxisTicks, a = e.yAxisTicks, s = e.dataKey, c = e.bandSize, l = e.displayedData, f = e.offset, d = t.layout, h = l.map(function(v, g) {
    var x = bt(v, s);
    return d === "horizontal" ? {
      x: el({
        axis: r,
        ticks: i,
        bandSize: c,
        entry: v,
        index: g
      }),
      y: Te(x) ? null : n.scale(x),
      value: x,
      payload: v
    } : {
      x: Te(x) ? null : r.scale(x),
      y: el({
        axis: n,
        ticks: a,
        bandSize: c,
        entry: v,
        index: g
      }),
      value: x,
      payload: v
    };
  });
  return lr({
    points: h,
    layout: d
  }, f);
});
var EQ = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], vS;
function io(e) {
  "@babel/helpers - typeof";
  return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, io(e);
}
function TQ(e, t) {
  if (e == null) return {};
  var r = $Q(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function $Q(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Hi() {
  return Hi = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Hi.apply(this, arguments);
}
function p1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function si(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? p1(Object(r), !0).forEach(function(n) {
      sn(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function CQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function v1(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, yS(n.key), n);
  }
}
function MQ(e, t, r) {
  return t && v1(e.prototype, t), r && v1(e, r), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function IQ(e, t, r) {
  return t = Ol(t), kQ(e, gS() ? Reflect.construct(t, r || [], Ol(e).constructor) : t.apply(e, r));
}
function kQ(e, t) {
  if (t && (io(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return cs(e);
}
function gS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gS = function() {
    return !!e;
  })();
}
function Ol(e) {
  return Ol = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ol(e);
}
function cs(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function jQ(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Gp(e, t);
}
function Gp(e, t) {
  return Gp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Gp(e, t);
}
function sn(e, t, r) {
  return t = yS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function yS(e) {
  var t = RQ(e, "string");
  return io(t) == "symbol" ? t : String(t);
}
function RQ(e, t) {
  if (io(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (io(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Oi = /* @__PURE__ */ function(e) {
  jQ(t, e);
  function t() {
    var r;
    CQ(this, t);
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    return r = IQ(this, t, [].concat(i)), sn(cs(r), "state", {
      isAnimationFinished: !0
    }), sn(cs(r), "id", ia("recharts-area-")), sn(cs(r), "handleAnimationEnd", function() {
      var s = r.props.onAnimationEnd;
      r.setState({
        isAnimationFinished: !0
      }), Pe(s) && s();
    }), sn(cs(r), "handleAnimationStart", function() {
      var s = r.props.onAnimationStart;
      r.setState({
        isAnimationFinished: !1
      }), Pe(s) && s();
    }), r;
  }
  return MQ(t, [{
    key: "renderDots",
    value: function(n, i, a) {
      var s = this.props.isAnimationActive, c = this.state.isAnimationFinished;
      if (s && !c)
        return null;
      var l = this.props, f = l.dot, d = l.points, h = l.dataKey, v = me(this.props, !1), g = me(f, !0), x = d.map(function(w, A) {
        var O = si(si(si({
          key: "dot-".concat(A),
          r: 3
        }, v), g), {}, {
          index: A,
          cx: w.x,
          cy: w.y,
          dataKey: h,
          value: w.value,
          payload: w.payload,
          points: d
        });
        return t.renderDotItem(f, O);
      }), y = {
        clipPath: n ? "url(#clipPath-".concat(i ? "" : "dots-").concat(a, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Le, Hi({
        className: "recharts-area-dots"
      }, y), x);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, s = i.points, c = i.strokeWidth, l = s[0].x, f = s[s.length - 1].x, d = n * Math.abs(l - f), h = li(s.map(function(v) {
        return v.y || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(li(a.map(function(v) {
        return v.y || 0;
      })), h)), oe(h) ? /* @__PURE__ */ k.createElement("rect", {
        x: l < f ? l : l - d,
        y: 0,
        width: d,
        height: Math.floor(h + (c ? parseInt("".concat(c), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(n) {
      var i = this.props, a = i.baseLine, s = i.points, c = i.strokeWidth, l = s[0].y, f = s[s.length - 1].y, d = n * Math.abs(l - f), h = li(s.map(function(v) {
        return v.x || 0;
      }));
      return oe(a) && typeof a == "number" ? h = Math.max(a, h) : a && Array.isArray(a) && a.length && (h = Math.max(li(a.map(function(v) {
        return v.x || 0;
      })), h)), oe(h) ? /* @__PURE__ */ k.createElement("rect", {
        x: 0,
        y: l < f ? l : l - d,
        width: h + (c ? parseInt("".concat(c), 10) : 1),
        height: Math.floor(d)
      }) : null;
    }
  }, {
    key: "renderClipRect",
    value: function(n) {
      var i = this.props.layout;
      return i === "vertical" ? this.renderVerticalRect(n) : this.renderHorizontalRect(n);
    }
  }, {
    key: "renderAreaStatically",
    value: function(n, i, a, s) {
      var c = this.props, l = c.layout, f = c.type, d = c.stroke, h = c.connectNulls, v = c.isRange;
      c.ref;
      var g = TQ(c, EQ);
      return /* @__PURE__ */ k.createElement(Le, {
        clipPath: a ? "url(#clipPath-".concat(s, ")") : null
      }, /* @__PURE__ */ k.createElement(Vi, Hi({}, me(g, !0), {
        points: n,
        connectNulls: h,
        type: f,
        baseLine: i,
        layout: l,
        stroke: "none",
        className: "recharts-area-area"
      })), d !== "none" && /* @__PURE__ */ k.createElement(Vi, Hi({}, me(this.props, !1), {
        className: "recharts-area-curve",
        layout: l,
        type: f,
        connectNulls: h,
        fill: "none",
        points: n
      })), d !== "none" && v && /* @__PURE__ */ k.createElement(Vi, Hi({}, me(this.props, !1), {
        className: "recharts-area-curve",
        layout: l,
        type: f,
        connectNulls: h,
        fill: "none",
        points: i
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(n, i) {
      var a = this, s = this.props, c = s.points, l = s.baseLine, f = s.isAnimationActive, d = s.animationBegin, h = s.animationDuration, v = s.animationEasing, g = s.animationId, x = this.state, y = x.prevPoints, w = x.prevBaseLine;
      return /* @__PURE__ */ k.createElement(Xr, {
        begin: d,
        duration: h,
        isActive: f,
        easing: v,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(g),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(A) {
        var O = A.t;
        if (y) {
          var S = y.length / c.length, _ = c.map(function(M, F) {
            var D = Math.floor(F * S);
            if (y[D]) {
              var B = y[D], N = St(B.x, M.x), U = St(B.y, M.y);
              return si(si({}, M), {}, {
                x: N(O),
                y: U(O)
              });
            }
            return M;
          }), b;
          if (oe(l) && typeof l == "number") {
            var E = St(w, l);
            b = E(O);
          } else if (Te(l) || yo(l)) {
            var C = St(w, 0);
            b = C(O);
          } else
            b = l.map(function(M, F) {
              var D = Math.floor(F * S);
              if (w[D]) {
                var B = w[D], N = St(B.x, M.x), U = St(B.y, M.y);
                return si(si({}, M), {}, {
                  x: N(O),
                  y: U(O)
                });
              }
              return M;
            });
          return a.renderAreaStatically(_, b, n, i);
        }
        return /* @__PURE__ */ k.createElement(Le, null, /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: "animationClipPath-".concat(i)
        }, a.renderClipRect(O))), /* @__PURE__ */ k.createElement(Le, {
          clipPath: "url(#animationClipPath-".concat(i, ")")
        }, a.renderAreaStatically(c, l, n, i)));
      });
    }
  }, {
    key: "renderArea",
    value: function(n, i) {
      var a = this.props, s = a.points, c = a.baseLine, l = a.isAnimationActive, f = this.state, d = f.prevPoints, h = f.prevBaseLine, v = f.totalLength;
      return l && s && s.length && (!d && v > 0 || !Xi(d, s) || !Xi(h, c)) ? this.renderAreaWithAnimation(n, i) : this.renderAreaStatically(s, c, n, i);
    }
  }, {
    key: "render",
    value: function() {
      var n, i = this.props, a = i.hide, s = i.dot, c = i.points, l = i.className, f = i.top, d = i.left, h = i.xAxis, v = i.yAxis, g = i.width, x = i.height, y = i.isAnimationActive, w = i.id;
      if (a || !c || !c.length)
        return null;
      var A = this.state.isAnimationFinished, O = c.length === 1, S = Me("recharts-area", l), _ = h && h.allowDataOverflow, b = v && v.allowDataOverflow, E = _ || b, C = Te(w) ? this.id : w, M = (n = me(s, !1)) !== null && n !== void 0 ? n : {
        r: 3,
        strokeWidth: 2
      }, F = M.r, D = F === void 0 ? 3 : F, B = M.strokeWidth, N = B === void 0 ? 2 : B, U = u_(s) ? s : {}, z = U.clipDot, J = z === void 0 ? !0 : z, H = D * 2 + N;
      return /* @__PURE__ */ k.createElement(Le, {
        className: S
      }, _ || b ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: _ ? d : d - g / 2,
        y: b ? f : f - x / 2,
        width: _ ? g : g * 2,
        height: b ? x : x * 2
      })), !J && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: d - H / 2,
        y: f - H / 2,
        width: g + H,
        height: x + H
      }))) : null, O ? null : this.renderArea(E, C), (s || O) && this.renderDots(E, J, C), (!y || A) && kr.renderCallByParent(this.props, c));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(n, i) {
      return n.animationId !== i.prevAnimationId ? {
        prevAnimationId: n.animationId,
        curPoints: n.points,
        curBaseLine: n.baseLine,
        prevPoints: i.curPoints,
        prevBaseLine: i.curBaseLine
      } : n.points !== i.curPoints || n.baseLine !== i.curBaseLine ? {
        curPoints: n.points,
        curBaseLine: n.baseLine
      } : null;
    }
  }]), t;
}(Nr);
vS = Oi;
sn(Oi, "displayName", "Area");
sn(Oi, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  // points of area
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !Yr.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
sn(Oi, "getBaseValue", function(e, t, r, n) {
  var i = e.layout, a = e.baseValue, s = t.props.baseValue, c = s ?? a;
  if (oe(c) && typeof c == "number")
    return c;
  var l = i === "horizontal" ? n : r, f = l.scale.domain();
  if (l.type === "number") {
    var d = Math.max(f[0], f[1]), h = Math.min(f[0], f[1]);
    return c === "dataMin" ? h : c === "dataMax" || d < 0 ? d : Math.max(Math.min(f[0], f[1]), 0);
  }
  return c === "dataMin" ? f[0] : c === "dataMax" ? f[1] : f[0];
});
sn(Oi, "getComposedData", function(e) {
  var t = e.props, r = e.item, n = e.xAxis, i = e.yAxis, a = e.xAxisTicks, s = e.yAxisTicks, c = e.bandSize, l = e.dataKey, f = e.stackedData, d = e.dataStartIndex, h = e.displayedData, v = e.offset, g = t.layout, x = f && f.length, y = vS.getBaseValue(t, r, n, i), w = g === "horizontal", A = !1, O = h.map(function(_, b) {
    var E;
    x ? E = f[d + b] : (E = bt(_, l), Array.isArray(E) ? A = !0 : E = [y, E]);
    var C = E[1] == null || x && bt(_, l) == null;
    return w ? {
      x: el({
        axis: n,
        ticks: a,
        bandSize: c,
        entry: _,
        index: b
      }),
      y: C ? null : i.scale(E[1]),
      value: E,
      payload: _
    } : {
      x: C ? null : n.scale(E[1]),
      y: el({
        axis: i,
        ticks: s,
        bandSize: c,
        entry: _,
        index: b
      }),
      value: E,
      payload: _
    };
  }), S;
  return x || A ? S = O.map(function(_) {
    var b = Array.isArray(_.value) ? _.value[0] : null;
    return w ? {
      x: _.x,
      y: b != null && _.y != null ? i.scale(b) : null
    } : {
      x: b != null ? n.scale(b) : null,
      y: _.y
    };
  }) : S = w ? i.scale(y) : n.scale(y), si({
    points: O,
    baseLine: S,
    layout: g,
    isRange: A
  }, v);
});
sn(Oi, "renderDotItem", function(e, t) {
  var r;
  if (/* @__PURE__ */ k.isValidElement(e))
    r = /* @__PURE__ */ k.cloneElement(e, t);
  else if (Pe(e))
    r = e(t);
  else {
    var n = Me("recharts-area-dot", typeof e != "boolean" ? e.className : "");
    r = /* @__PURE__ */ k.createElement(du, Hi({}, t, {
      className: n
    }));
  }
  return r;
});
function qp() {
  return qp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, qp.apply(this, arguments);
}
var Gn = function(t) {
  var r = t.xAxisId, n = pg(), i = vg(), a = sS(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(So, qp({}, a, {
      className: Me("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(c) {
        return Cn(c, !0);
      }
    }))
  );
};
Gn.displayName = "XAxis";
Gn.defaultProps = {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
};
function Kp() {
  return Kp = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Kp.apply(this, arguments);
}
var qn = function(t) {
  var r = t.yAxisId, n = pg(), i = vg(), a = uS(r);
  return a == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(So, Kp({}, a, {
      className: Me("recharts-".concat(a.axisType, " ").concat(a.axisType), a.className),
      viewBox: {
        x: 0,
        y: 0,
        width: n,
        height: i
      },
      ticksGenerator: function(c) {
        return Cn(c, !0);
      }
    }))
  );
};
qn.displayName = "YAxis";
qn.defaultProps = {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
};
function g1(e) {
  return BQ(e) || LQ(e) || DQ(e) || NQ();
}
function NQ() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function DQ(e, t) {
  if (e) {
    if (typeof e == "string") return Vp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Vp(e, t);
  }
}
function LQ(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function BQ(e) {
  if (Array.isArray(e)) return Vp(e);
}
function Vp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var Yp = function(t, r, n, i, a) {
  var s = yr(t, gg), c = yr(t, hu), l = [].concat(g1(s), g1(c)), f = yr(t, pu), d = "".concat(i, "Id"), h = i[0], v = r;
  if (l.length && (v = l.reduce(function(y, w) {
    if (w.props[d] === n && cn(w.props, "extendDomain") && oe(w.props[h])) {
      var A = w.props[h];
      return [Math.min(y[0], A), Math.max(y[1], A)];
    }
    return y;
  }, v)), f.length) {
    var g = "".concat(h, "1"), x = "".concat(h, "2");
    v = f.reduce(function(y, w) {
      if (w.props[d] === n && cn(w.props, "extendDomain") && oe(w.props[g]) && oe(w.props[x])) {
        var A = w.props[g], O = w.props[x];
        return [Math.min(y[0], A, O), Math.max(y[1], A, O)];
      }
      return y;
    }, v);
  }
  return a && a.length && (v = a.reduce(function(y, w) {
    return oe(w) ? [Math.min(y[0], w), Math.max(y[1], w)] : y;
  }, v)), v;
}, mS = { exports: {} };
(function(e) {
  var t = Object.prototype.hasOwnProperty, r = "~";
  function n() {
  }
  Object.create && (n.prototype = /* @__PURE__ */ Object.create(null), new n().__proto__ || (r = !1));
  function i(l, f, d) {
    this.fn = l, this.context = f, this.once = d || !1;
  }
  function a(l, f, d, h, v) {
    if (typeof d != "function")
      throw new TypeError("The listener must be a function");
    var g = new i(d, h || l, v), x = r ? r + f : f;
    return l._events[x] ? l._events[x].fn ? l._events[x] = [l._events[x], g] : l._events[x].push(g) : (l._events[x] = g, l._eventsCount++), l;
  }
  function s(l, f) {
    --l._eventsCount === 0 ? l._events = new n() : delete l._events[f];
  }
  function c() {
    this._events = new n(), this._eventsCount = 0;
  }
  c.prototype.eventNames = function() {
    var f = [], d, h;
    if (this._eventsCount === 0) return f;
    for (h in d = this._events)
      t.call(d, h) && f.push(r ? h.slice(1) : h);
    return Object.getOwnPropertySymbols ? f.concat(Object.getOwnPropertySymbols(d)) : f;
  }, c.prototype.listeners = function(f) {
    var d = r ? r + f : f, h = this._events[d];
    if (!h) return [];
    if (h.fn) return [h.fn];
    for (var v = 0, g = h.length, x = new Array(g); v < g; v++)
      x[v] = h[v].fn;
    return x;
  }, c.prototype.listenerCount = function(f) {
    var d = r ? r + f : f, h = this._events[d];
    return h ? h.fn ? 1 : h.length : 0;
  }, c.prototype.emit = function(f, d, h, v, g, x) {
    var y = r ? r + f : f;
    if (!this._events[y]) return !1;
    var w = this._events[y], A = arguments.length, O, S;
    if (w.fn) {
      switch (w.once && this.removeListener(f, w.fn, void 0, !0), A) {
        case 1:
          return w.fn.call(w.context), !0;
        case 2:
          return w.fn.call(w.context, d), !0;
        case 3:
          return w.fn.call(w.context, d, h), !0;
        case 4:
          return w.fn.call(w.context, d, h, v), !0;
        case 5:
          return w.fn.call(w.context, d, h, v, g), !0;
        case 6:
          return w.fn.call(w.context, d, h, v, g, x), !0;
      }
      for (S = 1, O = new Array(A - 1); S < A; S++)
        O[S - 1] = arguments[S];
      w.fn.apply(w.context, O);
    } else {
      var _ = w.length, b;
      for (S = 0; S < _; S++)
        switch (w[S].once && this.removeListener(f, w[S].fn, void 0, !0), A) {
          case 1:
            w[S].fn.call(w[S].context);
            break;
          case 2:
            w[S].fn.call(w[S].context, d);
            break;
          case 3:
            w[S].fn.call(w[S].context, d, h);
            break;
          case 4:
            w[S].fn.call(w[S].context, d, h, v);
            break;
          default:
            if (!O) for (b = 1, O = new Array(A - 1); b < A; b++)
              O[b - 1] = arguments[b];
            w[S].fn.apply(w[S].context, O);
        }
    }
    return !0;
  }, c.prototype.on = function(f, d, h) {
    return a(this, f, d, h, !1);
  }, c.prototype.once = function(f, d, h) {
    return a(this, f, d, h, !0);
  }, c.prototype.removeListener = function(f, d, h, v) {
    var g = r ? r + f : f;
    if (!this._events[g]) return this;
    if (!d)
      return s(this, g), this;
    var x = this._events[g];
    if (x.fn)
      x.fn === d && (!v || x.once) && (!h || x.context === h) && s(this, g);
    else {
      for (var y = 0, w = [], A = x.length; y < A; y++)
        (x[y].fn !== d || v && !x[y].once || h && x[y].context !== h) && w.push(x[y]);
      w.length ? this._events[g] = w.length === 1 ? w[0] : w : s(this, g);
    }
    return this;
  }, c.prototype.removeAllListeners = function(f) {
    var d;
    return f ? (d = r ? r + f : f, this._events[d] && s(this, d)) : (this._events = new n(), this._eventsCount = 0), this;
  }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = r, c.EventEmitter = c, e.exports = c;
})(mS);
var FQ = mS.exports;
const WQ = /* @__PURE__ */ Je(FQ);
var bh = new WQ(), xh = "recharts.syncMouseEvents";
function Qs(e) {
  "@babel/helpers - typeof";
  return Qs = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qs(e);
}
function zQ(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function UQ(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, bS(n.key), n);
  }
}
function HQ(e, t, r) {
  return t && UQ(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function wh(e, t, r) {
  return t = bS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function bS(e) {
  var t = GQ(e, "string");
  return Qs(t) == "symbol" ? t : String(t);
}
function GQ(e, t) {
  if (Qs(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Qs(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var qQ = /* @__PURE__ */ function() {
  function e() {
    zQ(this, e), wh(this, "activeIndex", 0), wh(this, "coordinateList", []), wh(this, "layout", "horizontal");
  }
  return HQ(e, [{
    key: "setDetails",
    value: function(r) {
      var n, i = r.coordinateList, a = i === void 0 ? null : i, s = r.container, c = s === void 0 ? null : s, l = r.layout, f = l === void 0 ? null : l, d = r.offset, h = d === void 0 ? null : d, v = r.mouseHandlerCallback, g = v === void 0 ? null : v;
      this.coordinateList = (n = a ?? this.coordinateList) !== null && n !== void 0 ? n : [], this.container = c ?? this.container, this.layout = f ?? this.layout, this.offset = h ?? this.offset, this.mouseHandlerCallback = g ?? this.mouseHandlerCallback, this.activeIndex = Math.min(Math.max(this.activeIndex, 0), this.coordinateList.length - 1);
    }
  }, {
    key: "focus",
    value: function() {
      this.spoofMouse();
    }
  }, {
    key: "keyboardEvent",
    value: function(r) {
      if (this.coordinateList.length !== 0)
        switch (r.key) {
          case "ArrowRight": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.min(this.activeIndex + 1, this.coordinateList.length - 1), this.spoofMouse();
            break;
          }
          case "ArrowLeft": {
            if (this.layout !== "horizontal")
              return;
            this.activeIndex = Math.max(this.activeIndex - 1, 0), this.spoofMouse();
            break;
          }
        }
    }
  }, {
    key: "setIndex",
    value: function(r) {
      this.activeIndex = r;
    }
  }, {
    key: "spoofMouse",
    value: function() {
      var r, n;
      if (this.layout === "horizontal" && this.coordinateList.length !== 0) {
        var i = this.container.getBoundingClientRect(), a = i.x, s = i.y, c = i.height, l = this.coordinateList[this.activeIndex].coordinate, f = ((r = window) === null || r === void 0 ? void 0 : r.scrollX) || 0, d = ((n = window) === null || n === void 0 ? void 0 : n.scrollY) || 0, h = a + l + f, v = s + this.offset.top + c / 2 + d;
        this.mouseHandlerCallback({
          pageX: h,
          pageY: v
        });
      }
    }
  }]), e;
}();
function KQ(e, t, r) {
  if (r === "number" && t === !0 && Array.isArray(e)) {
    var n = e == null ? void 0 : e[0], i = e == null ? void 0 : e[1];
    if (n && i && oe(n) && oe(i))
      return !0;
  }
  return !1;
}
function VQ(e, t, r, n) {
  var i = n / 2;
  return {
    stroke: "none",
    fill: "#ccc",
    x: e === "horizontal" ? t.x - i : r.left + 0.5,
    y: e === "horizontal" ? r.top + 0.5 : t.y - i,
    width: e === "horizontal" ? n : r.width - 1,
    height: e === "horizontal" ? r.height - 1 : n
  };
}
function xS(e) {
  var t = e.cx, r = e.cy, n = e.radius, i = e.startAngle, a = e.endAngle, s = it(t, r, n, i), c = it(t, r, n, a);
  return {
    points: [s, c],
    cx: t,
    cy: r,
    radius: n,
    startAngle: i,
    endAngle: a
  };
}
function YQ(e, t, r) {
  var n, i, a, s;
  if (e === "horizontal")
    n = t.x, a = n, i = r.top, s = r.top + r.height;
  else if (e === "vertical")
    i = t.y, s = i, n = r.left, a = r.left + r.width;
  else if (t.cx != null && t.cy != null)
    if (e === "centric") {
      var c = t.cx, l = t.cy, f = t.innerRadius, d = t.outerRadius, h = t.angle, v = it(c, l, f, h), g = it(c, l, d, h);
      n = v.x, i = v.y, a = g.x, s = g.y;
    } else
      return xS(t);
  return [{
    x: n,
    y: i
  }, {
    x: a,
    y: s
  }];
}
function eu(e) {
  "@babel/helpers - typeof";
  return eu = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, eu(e);
}
function y1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function wc(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? y1(Object(r), !0).forEach(function(n) {
      XQ(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : y1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function XQ(e, t, r) {
  return t = ZQ(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function ZQ(e) {
  var t = JQ(e, "string");
  return eu(t) == "symbol" ? t : String(t);
}
function JQ(e, t) {
  if (eu(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (eu(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function QQ(e) {
  var t = e.element, r = e.tooltipEventType, n = e.isActive, i = e.activeCoordinate, a = e.activePayload, s = e.offset, c = e.activeTooltipIndex, l = e.tooltipAxisBandSize, f = e.layout, d = e.chartName;
  if (!t || !t.props.cursor || !n || !i || d !== "ScatterChart" && r !== "axis")
    return null;
  var h, v = Vi;
  if (d === "ScatterChart")
    h = i, v = qY;
  else if (d === "BarChart")
    h = VQ(f, i, s, l), v = cg;
  else if (f === "radial") {
    var g = xS(i), x = g.cx, y = g.cy, w = g.radius, A = g.startAngle, O = g.endAngle;
    h = {
      cx: x,
      cy: y,
      startAngle: A,
      endAngle: O,
      innerRadius: w,
      outerRadius: w
    }, v = SA;
  } else
    h = {
      points: YQ(f, i, s)
    }, v = Vi;
  var S = wc(wc(wc(wc({
    stroke: "#ccc",
    pointerEvents: "none"
  }, s), h), me(t.props.cursor, !1)), {}, {
    payload: a,
    payloadIndex: c,
    className: Me("recharts-tooltip-cursor", t.props.cursor.className)
  });
  return /* @__PURE__ */ Kr(t.props.cursor) ? /* @__PURE__ */ At(t.props.cursor, S) : /* @__PURE__ */ N1(v, S);
}
var eee = ["item"], tee = ["children", "className", "width", "height", "style", "compact", "title", "desc"];
function ao(e) {
  "@babel/helpers - typeof";
  return ao = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ao(e);
}
function ys() {
  return ys = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ys.apply(this, arguments);
}
function m1(e, t) {
  return iee(e) || nee(e, t) || _S(e, t) || ree();
}
function ree() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function nee(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, s, c = [], l = !0, f = !1;
    try {
      if (a = (r = r.call(e)).next, t !== 0) for (; !(l = (n = a.call(r)).done) && (c.push(n.value), c.length !== t); l = !0) ;
    } catch (d) {
      f = !0, i = d;
    } finally {
      try {
        if (!l && r.return != null && (s = r.return(), Object(s) !== s)) return;
      } finally {
        if (f) throw i;
      }
    }
    return c;
  }
}
function iee(e) {
  if (Array.isArray(e)) return e;
}
function b1(e, t) {
  if (e == null) return {};
  var r = aee(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function aee(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function oee(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function see(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, OS(n.key), n);
  }
}
function uee(e, t, r) {
  return t && see(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function cee(e, t, r) {
  return t = Al(t), lee(e, wS() ? Reflect.construct(t, r || [], Al(e).constructor) : t.apply(e, r));
}
function lee(e, t) {
  if (t && (ao(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ze(e);
}
function wS() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (wS = function() {
    return !!e;
  })();
}
function Al(e) {
  return Al = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Al(e);
}
function ze(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fee(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Xp(e, t);
}
function Xp(e, t) {
  return Xp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Xp(e, t);
}
function oo(e) {
  return pee(e) || hee(e) || _S(e) || dee();
}
function dee() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _S(e, t) {
  if (e) {
    if (typeof e == "string") return Zp(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Zp(e, t);
  }
}
function hee(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function pee(e) {
  if (Array.isArray(e)) return Zp(e);
}
function Zp(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function x1(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function re(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? x1(Object(r), !0).forEach(function(n) {
      Se(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x1(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Se(e, t, r) {
  return t = OS(t), t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function OS(e) {
  var t = vee(e, "string");
  return ao(t) == "symbol" ? t : String(t);
}
function vee(e, t) {
  if (ao(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ao(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gee = {
  xAxis: ["bottom", "top"],
  yAxis: ["left", "right"]
}, yee = {
  width: "100%",
  height: "100%"
}, AS = {
  x: 0,
  y: 0
};
function _c(e) {
  return e;
}
var mee = function(t, r) {
  return r === "horizontal" ? t.x : r === "vertical" ? t.y : r === "centric" ? t.angle : t.radius;
}, bee = function(t, r, n, i) {
  var a = r.find(function(d) {
    return d && d.index === n;
  });
  if (a) {
    if (t === "horizontal")
      return {
        x: a.coordinate,
        y: i.y
      };
    if (t === "vertical")
      return {
        x: i.x,
        y: a.coordinate
      };
    if (t === "centric") {
      var s = a.coordinate, c = i.radius;
      return re(re(re({}, i), it(i.cx, i.cy, c, s)), {}, {
        angle: s,
        radius: c
      });
    }
    var l = a.coordinate, f = i.angle;
    return re(re(re({}, i), it(i.cx, i.cy, l, f)), {}, {
      angle: f,
      radius: l
    });
  }
  return AS;
}, sf = function(t, r) {
  var n = r.graphicalItems, i = r.dataStartIndex, a = r.dataEndIndex, s = (n ?? []).reduce(function(c, l) {
    var f = l.props.data;
    return f && f.length ? [].concat(oo(c), oo(f)) : c;
  }, []);
  return s.length > 0 ? s : t && t.length && oe(i) && oe(a) ? t.slice(i, a + 1) : [];
};
function SS(e) {
  return e === "number" ? [0, "auto"] : void 0;
}
var Jp = function(t, r, n, i) {
  var a = t.graphicalItems, s = t.tooltipAxis, c = sf(r, t);
  return n < 0 || !a || !a.length || n >= c.length ? null : a.reduce(function(l, f) {
    var d, h = (d = f.props.data) !== null && d !== void 0 ? d : r;
    h && t.dataStartIndex + t.dataEndIndex !== 0 && (h = h.slice(t.dataStartIndex, t.dataEndIndex + 1));
    var v;
    if (s.dataKey && !s.allowDuplicatedCategory) {
      var g = h === void 0 ? c : h;
      v = Ec(g, s.dataKey, i);
    } else
      v = h && h[n] || c[n];
    return v ? [].concat(oo(l), [bA(f, v)]) : l;
  }, []);
}, w1 = function(t, r, n, i) {
  var a = i || {
    x: t.chartX,
    y: t.chartY
  }, s = mee(a, n), c = t.orderedTooltipTicks, l = t.tooltipAxis, f = t.tooltipTicks, d = w4(s, c, f, l);
  if (d >= 0 && f) {
    var h = f[d] && f[d].value, v = Jp(t, r, d, h), g = bee(n, c, d, a);
    return {
      activeTooltipIndex: d,
      activeLabel: h,
      activePayload: v,
      activeCoordinate: g
    };
  }
  return null;
}, xee = function(t, r) {
  var n = r.axes, i = r.graphicalItems, a = r.axisType, s = r.axisIdKey, c = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = t.stackOffset, g = hA(d, a);
  return n.reduce(function(x, y) {
    var w, A = y.props, O = A.type, S = A.dataKey, _ = A.allowDataOverflow, b = A.allowDuplicatedCategory, E = A.scale, C = A.ticks, M = A.includeHidden, F = y.props[s];
    if (x[F])
      return x;
    var D = sf(t.data, {
      graphicalItems: i.filter(function(ae) {
        return ae.props[s] === F;
      }),
      dataStartIndex: l,
      dataEndIndex: f
    }), B = D.length, N, U, z;
    KQ(y.props.domain, _, O) && (N = vp(y.props.domain, null, _), g && (O === "number" || E !== "auto") && (z = ds(D, S, "category")));
    var J = SS(O);
    if (!N || N.length === 0) {
      var H, Z = (H = y.props.domain) !== null && H !== void 0 ? H : J;
      if (S) {
        if (N = ds(D, S, O), O === "category" && g) {
          var q = xD(N);
          b && q ? (U = N, N = pl(0, B)) : b || (N = kx(Z, N, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 ? ae : [].concat(oo(ae), [ce]);
          }, []));
        } else if (O === "category")
          b ? N = N.filter(function(ae) {
            return ae !== "" && !Te(ae);
          }) : N = kx(Z, N, y).reduce(function(ae, ce) {
            return ae.indexOf(ce) >= 0 || ce === "" || Te(ce) ? ae : [].concat(oo(ae), [ce]);
          }, []);
        else if (O === "number") {
          var se = P4(D, i.filter(function(ae) {
            return ae.props[s] === F && (M || !ae.props.hide);
          }), S, a, d);
          se && (N = se);
        }
        g && (O === "number" || E !== "auto") && (z = ds(D, S, "category"));
      } else g ? N = pl(0, B) : c && c[F] && c[F].hasStack && O === "number" ? N = v === "expand" ? [0, 1] : mA(c[F].stackGroups, l, f) : N = dA(D, i.filter(function(ae) {
        return ae.props[s] === F && (M || !ae.props.hide);
      }), O, d, !0);
      if (O === "number")
        N = Yp(h, N, F, a, C), Z && (N = vp(Z, N, _));
      else if (O === "category" && Z) {
        var G = Z, Y = N.every(function(ae) {
          return G.indexOf(ae) >= 0;
        });
        Y && (N = G);
      }
    }
    return re(re({}, x), {}, Se({}, F, re(re({}, y.props), {}, {
      axisType: a,
      domain: N,
      categoricalDomain: z,
      duplicateDomain: U,
      originalDomain: (w = y.props.domain) !== null && w !== void 0 ? w : J,
      isCategorical: g,
      layout: d
    })));
  }, {});
}, wee = function(t, r) {
  var n = r.graphicalItems, i = r.Axis, a = r.axisType, s = r.axisIdKey, c = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.layout, h = t.children, v = sf(t.data, {
    graphicalItems: n,
    dataStartIndex: l,
    dataEndIndex: f
  }), g = v.length, x = hA(d, a), y = -1;
  return n.reduce(function(w, A) {
    var O = A.props[s], S = SS("number");
    if (!w[O]) {
      y++;
      var _;
      return x ? _ = pl(0, g) : c && c[O] && c[O].hasStack ? (_ = mA(c[O].stackGroups, l, f), _ = Yp(h, _, O, a)) : (_ = vp(S, dA(v, n.filter(function(b) {
        return b.props[s] === O && !b.props.hide;
      }), "number", d), i.defaultProps.allowDataOverflow), _ = Yp(h, _, O, a)), re(re({}, w), {}, Se({}, O, re(re({
        axisType: a
      }, i.defaultProps), {}, {
        hide: !0,
        orientation: gr(gee, "".concat(a, ".").concat(y % 2), null),
        domain: _,
        originalDomain: S,
        isCategorical: x,
        layout: d
        // specify scale when no Axis
        // scale: isCategorical ? 'band' : 'linear',
      })));
    }
    return w;
  }, {});
}, _ee = function(t, r) {
  var n = r.axisType, i = n === void 0 ? "xAxis" : n, a = r.AxisComp, s = r.graphicalItems, c = r.stackGroups, l = r.dataStartIndex, f = r.dataEndIndex, d = t.children, h = "".concat(i, "Id"), v = yr(d, a), g = {};
  return v && v.length ? g = xee(t, {
    axes: v,
    graphicalItems: s,
    axisType: i,
    axisIdKey: h,
    stackGroups: c,
    dataStartIndex: l,
    dataEndIndex: f
  }) : s && s.length && (g = wee(t, {
    Axis: a,
    graphicalItems: s,
    axisType: i,
    axisIdKey: h,
    stackGroups: c,
    dataStartIndex: l,
    dataEndIndex: f
  })), g;
}, Oee = function(t) {
  var r = ci(t), n = Cn(r, !1, !0);
  return {
    tooltipTicks: n,
    orderedTooltipTicks: jv(n, function(i) {
      return i.coordinate;
    }),
    tooltipAxis: r,
    tooltipAxisBandSize: tl(r, n)
  };
}, _1 = function(t) {
  var r = t.children, n = t.defaultShowTooltip, i = dr(r, Qa), a = 0, s = 0;
  return t.data && t.data.length !== 0 && (s = t.data.length - 1), i && i.props && (i.props.startIndex >= 0 && (a = i.props.startIndex), i.props.endIndex >= 0 && (s = i.props.endIndex)), {
    chartX: 0,
    chartY: 0,
    dataStartIndex: a,
    dataEndIndex: s,
    activeTooltipIndex: -1,
    isTooltipActive: !!n
  };
}, Aee = function(t) {
  return !t || !t.length ? !1 : t.some(function(r) {
    var n = Mn(r && r.type);
    return n && n.indexOf("Bar") >= 0;
  });
}, O1 = function(t) {
  return t === "horizontal" ? {
    numericAxisName: "yAxis",
    cateAxisName: "xAxis"
  } : t === "vertical" ? {
    numericAxisName: "xAxis",
    cateAxisName: "yAxis"
  } : t === "centric" ? {
    numericAxisName: "radiusAxis",
    cateAxisName: "angleAxis"
  } : {
    numericAxisName: "angleAxis",
    cateAxisName: "radiusAxis"
  };
}, See = function(t, r) {
  var n = t.props, i = t.graphicalItems, a = t.xAxisMap, s = a === void 0 ? {} : a, c = t.yAxisMap, l = c === void 0 ? {} : c, f = n.width, d = n.height, h = n.children, v = n.margin || {}, g = dr(h, Qa), x = dr(h, za), y = Object.keys(l).reduce(function(b, E) {
    var C = l[E], M = C.orientation;
    return !C.mirror && !C.hide ? re(re({}, b), {}, Se({}, M, b[M] + C.width)) : b;
  }, {
    left: v.left || 0,
    right: v.right || 0
  }), w = Object.keys(s).reduce(function(b, E) {
    var C = s[E], M = C.orientation;
    return !C.mirror && !C.hide ? re(re({}, b), {}, Se({}, M, gr(b, "".concat(M)) + C.height)) : b;
  }, {
    top: v.top || 0,
    bottom: v.bottom || 0
  }), A = re(re({}, w), y), O = A.bottom;
  g && (A.bottom += g.props.height || Qa.defaultProps.height), x && r && (A = A4(A, i, n, r));
  var S = f - A.left - A.right, _ = d - A.top - A.bottom;
  return re(re({
    brushBottom: O
  }, A), {}, {
    // never return negative values for height and width
    width: Math.max(S, 0),
    height: Math.max(_, 0)
  });
}, Pee = function(t, r) {
  if (r === "xAxis")
    return t[r].width;
  if (r === "yAxis")
    return t[r].height;
}, uf = function(t) {
  var r, n = t.chartName, i = t.GraphicalChild, a = t.defaultTooltipEventType, s = a === void 0 ? "axis" : a, c = t.validateTooltipEventTypes, l = c === void 0 ? ["axis"] : c, f = t.axisComponents, d = t.legendContent, h = t.formatAxisMap, v = t.defaultProps, g = function(w, A) {
    var O = A.graphicalItems, S = A.stackGroups, _ = A.offset, b = A.updateId, E = A.dataStartIndex, C = A.dataEndIndex, M = w.barSize, F = w.layout, D = w.barGap, B = w.barCategoryGap, N = w.maxBarSize, U = O1(F), z = U.numericAxisName, J = U.cateAxisName, H = Aee(O), Z = [];
    return O.forEach(function(q, se) {
      var G = sf(w.data, {
        graphicalItems: [q],
        dataStartIndex: E,
        dataEndIndex: C
      }), Y = q.props, ae = Y.dataKey, ce = Y.maxBarSize, he = q.props["".concat(z, "Id")], ge = q.props["".concat(J, "Id")], xe = {}, ye = f.reduce(function(nr, gt) {
        var vn, Kn, Io = A["".concat(gt.axisType, "Map")], Vn = q.props["".concat(gt.axisType, "Id")];
        Io && Io[Vn] || gt.axisType === "zAxis" || (process.env.NODE_ENV !== "production" ? er(!1, "Specifying a(n) ".concat(gt.axisType, "Id requires a corresponding ").concat(
          gt.axisType,
          "Id on the targeted graphical component "
        ).concat((vn = q == null || (Kn = q.type) === null || Kn === void 0 ? void 0 : Kn.displayName) !== null && vn !== void 0 ? vn : "")) : er());
        var bu = Io[Vn];
        return re(re({}, nr), {}, Se(Se({}, gt.axisType, bu), "".concat(gt.axisType, "Ticks"), Cn(bu)));
      }, xe), we = ye[J], ne = ye["".concat(J, "Ticks")], ue = S && S[he] && S[he].hasStack && R4(q, S[he].stackGroups), pe = Mn(q.type).indexOf("Bar") >= 0, j = tl(we, ne), Ee = [], be = H && _4({
        barSize: M,
        stackGroups: S,
        totalSize: Pee(ye, J)
      });
      if (pe) {
        var We, lt, at = Te(ce) ? N : ce, Vt = (We = (lt = tl(we, ne, !0)) !== null && lt !== void 0 ? lt : at) !== null && We !== void 0 ? We : 0;
        Ee = O4({
          barGap: D,
          barCategoryGap: B,
          bandSize: Vt !== j ? Vt : j,
          sizeList: be[ge],
          maxBarSize: at
        }), Vt !== j && (Ee = Ee.map(function(nr) {
          return re(re({}, nr), {}, {
            position: re(re({}, nr.position), {}, {
              offset: nr.position.offset - Vt / 2
            })
          });
        }));
      }
      var Lr = q && q.type && q.type.getComposedData;
      Lr && Z.push({
        props: re(re({}, Lr(re(re({}, ye), {}, {
          displayedData: G,
          props: w,
          dataKey: ae,
          item: q,
          bandSize: j,
          barPosition: Ee,
          offset: _,
          stackedData: ue,
          layout: F,
          dataStartIndex: E,
          dataEndIndex: C
        }))), {}, Se(Se(Se({
          key: q.key || "item-".concat(se)
        }, z, ye[z]), J, ye[J]), "animationId", b)),
        childIndex: MD(q, w.children),
        item: q
      });
    }), Z;
  }, x = function(w, A) {
    var O = w.props, S = w.dataStartIndex, _ = w.dataEndIndex, b = w.updateId;
    if (!Eb({
      props: O
    }))
      return null;
    var E = O.children, C = O.layout, M = O.stackOffset, F = O.data, D = O.reverseStackOrder, B = O1(C), N = B.numericAxisName, U = B.cateAxisName, z = yr(E, i), J = k4(F, z, "".concat(N, "Id"), "".concat(U, "Id"), M, D), H = f.reduce(function(Y, ae) {
      var ce = "".concat(ae.axisType, "Map");
      return re(re({}, Y), {}, Se({}, ce, _ee(O, re(re({}, ae), {}, {
        graphicalItems: z,
        stackGroups: ae.axisType === N && J,
        dataStartIndex: S,
        dataEndIndex: _
      }))));
    }, {}), Z = See(re(re({}, H), {}, {
      props: O,
      graphicalItems: z
    }), A == null ? void 0 : A.legendBBox);
    Object.keys(H).forEach(function(Y) {
      H[Y] = h(O, H[Y], Z, Y.replace("Map", ""), n);
    });
    var q = H["".concat(U, "Map")], se = Oee(q), G = g(O, re(re({}, H), {}, {
      dataStartIndex: S,
      dataEndIndex: _,
      updateId: b,
      graphicalItems: z,
      stackGroups: J,
      offset: Z
    }));
    return re(re({
      formattedGraphicalItems: G,
      graphicalItems: z,
      offset: Z,
      stackGroups: J
    }, se), H);
  };
  return r = /* @__PURE__ */ function(y) {
    fee(w, y);
    function w(A) {
      var O, S, _;
      return oee(this, w), _ = cee(this, w, [A]), Se(ze(_), "eventEmitterSymbol", Symbol("rechartsEventEmitter")), Se(ze(_), "accessibilityManager", new qQ()), Se(ze(_), "handleLegendBBoxUpdate", function(b) {
        if (b) {
          var E = _.state, C = E.dataStartIndex, M = E.dataEndIndex, F = E.updateId;
          _.setState(re({
            legendBBox: b
          }, x({
            props: _.props,
            dataStartIndex: C,
            dataEndIndex: M,
            updateId: F
          }, re(re({}, _.state), {}, {
            legendBBox: b
          }))));
        }
      }), Se(ze(_), "handleReceiveSyncEvent", function(b, E, C) {
        if (_.props.syncId === b) {
          if (C === _.eventEmitterSymbol && typeof _.props.syncMethod != "function")
            return;
          _.applySyncEvent(E);
        }
      }), Se(ze(_), "handleBrushChange", function(b) {
        var E = b.startIndex, C = b.endIndex;
        if (E !== _.state.dataStartIndex || C !== _.state.dataEndIndex) {
          var M = _.state.updateId;
          _.setState(function() {
            return re({
              dataStartIndex: E,
              dataEndIndex: C
            }, x({
              props: _.props,
              dataStartIndex: E,
              dataEndIndex: C,
              updateId: M
            }, _.state));
          }), _.triggerSyncEvent({
            dataStartIndex: E,
            dataEndIndex: C
          });
        }
      }), Se(ze(_), "handleMouseEnter", function(b) {
        var E = _.getMouseInfo(b);
        if (E) {
          var C = re(re({}, E), {}, {
            isTooltipActive: !0
          });
          _.setState(C), _.triggerSyncEvent(C);
          var M = _.props.onMouseEnter;
          Pe(M) && M(C, b);
        }
      }), Se(ze(_), "triggeredAfterMouseMove", function(b) {
        var E = _.getMouseInfo(b), C = E ? re(re({}, E), {}, {
          isTooltipActive: !0
        }) : {
          isTooltipActive: !1
        };
        _.setState(C), _.triggerSyncEvent(C);
        var M = _.props.onMouseMove;
        Pe(M) && M(C, b);
      }), Se(ze(_), "handleItemMouseEnter", function(b) {
        _.setState(function() {
          return {
            isTooltipActive: !0,
            activeItem: b,
            activePayload: b.tooltipPayload,
            activeCoordinate: b.tooltipPosition || {
              x: b.cx,
              y: b.cy
            }
          };
        });
      }), Se(ze(_), "handleItemMouseLeave", function() {
        _.setState(function() {
          return {
            isTooltipActive: !1
          };
        });
      }), Se(ze(_), "handleMouseMove", function(b) {
        b.persist(), _.throttleTriggeredAfterMouseMove(b);
      }), Se(ze(_), "handleMouseLeave", function(b) {
        _.throttleTriggeredAfterMouseMove.cancel();
        var E = {
          isTooltipActive: !1
        };
        _.setState(E), _.triggerSyncEvent(E);
        var C = _.props.onMouseLeave;
        Pe(C) && C(E, b);
      }), Se(ze(_), "handleOuterEvent", function(b) {
        var E = CD(b), C = gr(_.props, "".concat(E));
        if (E && Pe(C)) {
          var M, F;
          /.*touch.*/i.test(E) ? F = _.getMouseInfo(b.changedTouches[0]) : F = _.getMouseInfo(b), C((M = F) !== null && M !== void 0 ? M : {}, b);
        }
      }), Se(ze(_), "handleClick", function(b) {
        var E = _.getMouseInfo(b);
        if (E) {
          var C = re(re({}, E), {}, {
            isTooltipActive: !0
          });
          _.setState(C), _.triggerSyncEvent(C);
          var M = _.props.onClick;
          Pe(M) && M(C, b);
        }
      }), Se(ze(_), "handleMouseDown", function(b) {
        var E = _.props.onMouseDown;
        if (Pe(E)) {
          var C = _.getMouseInfo(b);
          E(C, b);
        }
      }), Se(ze(_), "handleMouseUp", function(b) {
        var E = _.props.onMouseUp;
        if (Pe(E)) {
          var C = _.getMouseInfo(b);
          E(C, b);
        }
      }), Se(ze(_), "handleTouchMove", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && _.throttleTriggeredAfterMouseMove(b.changedTouches[0]);
      }), Se(ze(_), "handleTouchStart", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && _.handleMouseDown(b.changedTouches[0]);
      }), Se(ze(_), "handleTouchEnd", function(b) {
        b.changedTouches != null && b.changedTouches.length > 0 && _.handleMouseUp(b.changedTouches[0]);
      }), Se(ze(_), "triggerSyncEvent", function(b) {
        _.props.syncId !== void 0 && bh.emit(xh, _.props.syncId, b, _.eventEmitterSymbol);
      }), Se(ze(_), "applySyncEvent", function(b) {
        var E = _.props, C = E.layout, M = E.syncMethod, F = _.state.updateId, D = b.dataStartIndex, B = b.dataEndIndex;
        if (b.dataStartIndex !== void 0 || b.dataEndIndex !== void 0)
          _.setState(re({
            dataStartIndex: D,
            dataEndIndex: B
          }, x({
            props: _.props,
            dataStartIndex: D,
            dataEndIndex: B,
            updateId: F
          }, _.state)));
        else if (b.activeTooltipIndex !== void 0) {
          var N = b.chartX, U = b.chartY, z = b.activeTooltipIndex, J = _.state, H = J.offset, Z = J.tooltipTicks;
          if (!H)
            return;
          if (typeof M == "function")
            z = M(Z, b);
          else if (M === "value") {
            z = -1;
            for (var q = 0; q < Z.length; q++)
              if (Z[q].value === b.activeLabel) {
                z = q;
                break;
              }
          }
          var se = re(re({}, H), {}, {
            x: H.left,
            y: H.top
          }), G = Math.min(N, se.x + se.width), Y = Math.min(U, se.y + se.height), ae = Z[z] && Z[z].value, ce = Jp(_.state, _.props.data, z), he = Z[z] ? {
            x: C === "horizontal" ? Z[z].coordinate : G,
            y: C === "horizontal" ? Y : Z[z].coordinate
          } : AS;
          _.setState(re(re({}, b), {}, {
            activeLabel: ae,
            activeCoordinate: he,
            activePayload: ce,
            activeTooltipIndex: z
          }));
        } else
          _.setState(b);
      }), Se(ze(_), "renderCursor", function(b) {
        var E, C = _.state, M = C.isTooltipActive, F = C.activeCoordinate, D = C.activePayload, B = C.offset, N = C.activeTooltipIndex, U = C.tooltipAxisBandSize, z = _.getTooltipEventType(), J = (E = b.props.active) !== null && E !== void 0 ? E : M, H = _.props.layout, Z = b.key || "_recharts-cursor";
        return /* @__PURE__ */ k.createElement(QQ, {
          key: Z,
          activeCoordinate: F,
          activePayload: D,
          activeTooltipIndex: N,
          chartName: n,
          element: b,
          isActive: J,
          layout: H,
          offset: B,
          tooltipAxisBandSize: U,
          tooltipEventType: z
        });
      }), Se(ze(_), "renderPolarAxis", function(b, E, C) {
        var M = gr(b, "type.axisType"), F = gr(_.state, "".concat(M, "Map")), D = F && F[b.props["".concat(M, "Id")]];
        return /* @__PURE__ */ At(b, re(re({}, D), {}, {
          className: Me(M, D.className),
          key: b.key || "".concat(E, "-").concat(C),
          ticks: Cn(D, !0)
        }));
      }), Se(ze(_), "renderPolarGrid", function(b) {
        var E = b.props, C = E.radialLines, M = E.polarAngles, F = E.polarRadius, D = _.state, B = D.radiusAxisMap, N = D.angleAxisMap, U = ci(B), z = ci(N), J = z.cx, H = z.cy, Z = z.innerRadius, q = z.outerRadius;
        return /* @__PURE__ */ At(b, {
          polarAngles: Array.isArray(M) ? M : Cn(z, !0).map(function(se) {
            return se.coordinate;
          }),
          polarRadius: Array.isArray(F) ? F : Cn(U, !0).map(function(se) {
            return se.coordinate;
          }),
          cx: J,
          cy: H,
          innerRadius: Z,
          outerRadius: q,
          key: b.key || "polar-grid",
          radialLines: C
        });
      }), Se(ze(_), "renderLegend", function() {
        var b = _.state.formattedGraphicalItems, E = _.props, C = E.children, M = E.width, F = E.height, D = _.props.margin || {}, B = M - (D.left || 0) - (D.right || 0), N = lA({
          children: C,
          formattedGraphicalItems: b,
          legendWidth: B,
          legendContent: d
        });
        if (!N)
          return null;
        var U = N.item, z = b1(N, eee);
        return /* @__PURE__ */ At(U, re(re({}, z), {}, {
          chartWidth: M,
          chartHeight: F,
          margin: D,
          onBBoxUpdate: _.handleLegendBBoxUpdate
        }));
      }), Se(ze(_), "renderTooltip", function() {
        var b, E = _.props, C = E.children, M = E.accessibilityLayer, F = dr(C, an);
        if (!F)
          return null;
        var D = _.state, B = D.isTooltipActive, N = D.activeCoordinate, U = D.activePayload, z = D.activeLabel, J = D.offset, H = (b = F.props.active) !== null && b !== void 0 ? b : B;
        return /* @__PURE__ */ At(F, {
          viewBox: re(re({}, J), {}, {
            x: J.left,
            y: J.top
          }),
          active: H,
          label: z,
          payload: H ? U : [],
          coordinate: N,
          accessibilityLayer: M
        });
      }), Se(ze(_), "renderBrush", function(b) {
        var E = _.props, C = E.margin, M = E.data, F = _.state, D = F.offset, B = F.dataStartIndex, N = F.dataEndIndex, U = F.updateId;
        return /* @__PURE__ */ At(b, {
          key: b.key || "_recharts-brush",
          onChange: gc(_.handleBrushChange, b.props.onChange),
          data: M,
          x: oe(b.props.x) ? b.props.x : D.left,
          y: oe(b.props.y) ? b.props.y : D.top + D.height + D.brushBottom - (C.bottom || 0),
          width: oe(b.props.width) ? b.props.width : D.width,
          startIndex: B,
          endIndex: N,
          updateId: "brush-".concat(U)
        });
      }), Se(ze(_), "renderReferenceElement", function(b, E, C) {
        if (!b)
          return null;
        var M = ze(_), F = M.clipPathId, D = _.state, B = D.xAxisMap, N = D.yAxisMap, U = D.offset, z = b.props, J = z.xAxisId, H = z.yAxisId;
        return /* @__PURE__ */ At(b, {
          key: b.key || "".concat(E, "-").concat(C),
          xAxis: B[J],
          yAxis: N[H],
          viewBox: {
            x: U.left,
            y: U.top,
            width: U.width,
            height: U.height
          },
          clipPathId: F
        });
      }), Se(ze(_), "renderActivePoints", function(b) {
        var E = b.item, C = b.activePoint, M = b.basePoint, F = b.childIndex, D = b.isRange, B = [], N = E.props.key, U = E.item.props, z = U.activeDot, J = U.dataKey, H = re(re({
          index: F,
          dataKey: J,
          cx: C.x,
          cy: C.y,
          r: 4,
          fill: sg(E.item),
          strokeWidth: 2,
          stroke: "#fff",
          payload: C.payload,
          value: C.value,
          key: "".concat(N, "-activePoint-").concat(F)
        }, me(z, !1)), Tc(z));
        return B.push(w.renderActiveDot(z, H)), M ? B.push(w.renderActiveDot(z, re(re({}, H), {}, {
          cx: M.x,
          cy: M.y,
          key: "".concat(N, "-basePoint-").concat(F)
        }))) : D && B.push(null), B;
      }), Se(ze(_), "renderGraphicChild", function(b, E, C) {
        var M = _.filterFormatItem(b, E, C);
        if (!M)
          return null;
        var F = _.getTooltipEventType(), D = _.state, B = D.isTooltipActive, N = D.tooltipAxis, U = D.activeTooltipIndex, z = D.activeLabel, J = _.props.children, H = dr(J, an), Z = M.props, q = Z.points, se = Z.isRange, G = Z.baseLine, Y = M.item.props, ae = Y.activeDot, ce = Y.hide, he = Y.activeBar, ge = Y.activeShape, xe = !!(!ce && B && H && (ae || he || ge)), ye = {};
        F !== "axis" && H && H.props.trigger === "click" ? ye = {
          onClick: gc(_.handleItemMouseEnter, b.props.onClick)
        } : F !== "axis" && (ye = {
          onMouseLeave: gc(_.handleItemMouseLeave, b.props.onMouseLeave),
          onMouseEnter: gc(_.handleItemMouseEnter, b.props.onMouseEnter)
        });
        var we = /* @__PURE__ */ At(b, re(re({}, M.props), ye));
        function ne(gt) {
          return typeof N.dataKey == "function" ? N.dataKey(gt.payload) : null;
        }
        if (xe)
          if (U >= 0) {
            var ue, pe;
            if (N.dataKey && !N.allowDuplicatedCategory) {
              var j = typeof N.dataKey == "function" ? ne : "payload.".concat(N.dataKey.toString());
              ue = Ec(q, j, z), pe = se && G && Ec(G, j, z);
            } else
              ue = q == null ? void 0 : q[U], pe = se && G && G[U];
            if (ge || he) {
              var Ee = b.props.activeIndex !== void 0 ? b.props.activeIndex : U;
              return [/* @__PURE__ */ At(b, re(re(re({}, M.props), ye), {}, {
                activeIndex: Ee
              })), null, null];
            }
            if (!Te(ue))
              return [we].concat(oo(_.renderActivePoints({
                item: M,
                activePoint: ue,
                basePoint: pe,
                childIndex: U,
                isRange: se
              })));
          } else {
            var be, We = (be = _.getItemByXY(_.state.activeCoordinate)) !== null && be !== void 0 ? be : {
              graphicalItem: we
            }, lt = We.graphicalItem, at = lt.item, Vt = at === void 0 ? b : at, Lr = lt.childIndex, nr = re(re(re({}, M.props), ye), {}, {
              activeIndex: Lr
            });
            return [/* @__PURE__ */ At(Vt, nr), null, null];
          }
        return se ? [we, null, null] : [we, null];
      }), Se(ze(_), "renderCustomized", function(b, E, C) {
        return /* @__PURE__ */ At(b, re(re({
          key: "recharts-customized-".concat(C)
        }, _.props), _.state));
      }), Se(ze(_), "renderMap", {
        CartesianGrid: {
          handler: _c,
          once: !0
        },
        ReferenceArea: {
          handler: _.renderReferenceElement
        },
        ReferenceLine: {
          handler: _c
        },
        ReferenceDot: {
          handler: _.renderReferenceElement
        },
        XAxis: {
          handler: _c
        },
        YAxis: {
          handler: _c
        },
        Brush: {
          handler: _.renderBrush,
          once: !0
        },
        Bar: {
          handler: _.renderGraphicChild
        },
        Line: {
          handler: _.renderGraphicChild
        },
        Area: {
          handler: _.renderGraphicChild
        },
        Radar: {
          handler: _.renderGraphicChild
        },
        RadialBar: {
          handler: _.renderGraphicChild
        },
        Scatter: {
          handler: _.renderGraphicChild
        },
        Pie: {
          handler: _.renderGraphicChild
        },
        Funnel: {
          handler: _.renderGraphicChild
        },
        Tooltip: {
          handler: _.renderCursor,
          once: !0
        },
        PolarGrid: {
          handler: _.renderPolarGrid,
          once: !0
        },
        PolarAngleAxis: {
          handler: _.renderPolarAxis
        },
        PolarRadiusAxis: {
          handler: _.renderPolarAxis
        },
        Customized: {
          handler: _.renderCustomized
        }
      }), _.clipPathId = "".concat((O = A.id) !== null && O !== void 0 ? O : ia("recharts"), "-clip"), _.throttleTriggeredAfterMouseMove = dO(_.triggeredAfterMouseMove, (S = A.throttleDelay) !== null && S !== void 0 ? S : 1e3 / 60), _.state = {}, _;
    }
    return uee(w, [{
      key: "componentDidMount",
      value: function() {
        var O, S;
        this.addListener(), this.accessibilityManager.setDetails({
          container: this.container,
          offset: {
            left: (O = this.props.margin.left) !== null && O !== void 0 ? O : 0,
            top: (S = this.props.margin.top) !== null && S !== void 0 ? S : 0
          },
          coordinateList: this.state.tooltipTicks,
          mouseHandlerCallback: this.triggeredAfterMouseMove,
          layout: this.props.layout
        }), this.displayDefaultTooltip();
      }
    }, {
      key: "displayDefaultTooltip",
      value: function() {
        var O = this.props, S = O.children, _ = O.data, b = O.height, E = O.layout, C = dr(S, an);
        if (C) {
          var M = C.props.defaultIndex;
          if (!(typeof M != "number" || M < 0 || M > this.state.tooltipTicks.length)) {
            var F = this.state.tooltipTicks[M] && this.state.tooltipTicks[M].value, D = Jp(this.state, _, M, F), B = this.state.tooltipTicks[M].coordinate, N = (this.state.offset.top + b) / 2, U = E === "horizontal", z = U ? {
              x: B,
              y: N
            } : {
              y: B,
              x: N
            }, J = this.state.formattedGraphicalItems.find(function(Z) {
              var q = Z.item;
              return q.type.name === "Scatter";
            });
            J && (z = re(re({}, z), J.props.points[M].tooltipPosition), D = J.props.points[M].tooltipPayload);
            var H = {
              activeTooltipIndex: M,
              isTooltipActive: !0,
              activeLabel: F,
              activePayload: D,
              activeCoordinate: z
            };
            this.setState(H), this.renderCursor(C), this.accessibilityManager.setIndex(M);
          }
        }
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function(O, S) {
        if (!this.props.accessibilityLayer)
          return null;
        if (this.state.tooltipTicks !== S.tooltipTicks && this.accessibilityManager.setDetails({
          coordinateList: this.state.tooltipTicks
        }), this.props.layout !== O.layout && this.accessibilityManager.setDetails({
          layout: this.props.layout
        }), this.props.margin !== O.margin) {
          var _, b;
          this.accessibilityManager.setDetails({
            offset: {
              left: (_ = this.props.margin.left) !== null && _ !== void 0 ? _ : 0,
              top: (b = this.props.margin.top) !== null && b !== void 0 ? b : 0
            }
          });
        }
        return null;
      }
    }, {
      key: "componentDidUpdate",
      value: function(O) {
        Ch([dr(O.children, an)], [dr(this.props.children, an)]) || this.displayDefaultTooltip();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.removeListener(), this.throttleTriggeredAfterMouseMove.cancel();
      }
    }, {
      key: "getTooltipEventType",
      value: function() {
        var O = dr(this.props.children, an);
        if (O && typeof O.props.shared == "boolean") {
          var S = O.props.shared ? "axis" : "item";
          return l.indexOf(S) >= 0 ? S : s;
        }
        return s;
      }
      /**
       * Get the information of mouse in chart, return null when the mouse is not in the chart
       * @param  {MousePointer} event    The event object
       * @return {Object}          Mouse data
       */
    }, {
      key: "getMouseInfo",
      value: function(O) {
        if (!this.container)
          return null;
        var S = this.container, _ = S.getBoundingClientRect(), b = nH(_), E = {
          chartX: Math.round(O.pageX - b.left),
          chartY: Math.round(O.pageY - b.top)
        }, C = _.width / S.offsetWidth || 1, M = this.inRange(E.chartX, E.chartY, C);
        if (!M)
          return null;
        var F = this.state, D = F.xAxisMap, B = F.yAxisMap, N = this.getTooltipEventType();
        if (N !== "axis" && D && B) {
          var U = ci(D).scale, z = ci(B).scale, J = U && U.invert ? U.invert(E.chartX) : null, H = z && z.invert ? z.invert(E.chartY) : null;
          return re(re({}, E), {}, {
            xValue: J,
            yValue: H
          });
        }
        var Z = w1(this.state, this.props.data, this.props.layout, M);
        return Z ? re(re({}, E), Z) : null;
      }
    }, {
      key: "inRange",
      value: function(O, S) {
        var _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, b = this.props.layout, E = O / _, C = S / _;
        if (b === "horizontal" || b === "vertical") {
          var M = this.state.offset, F = E >= M.left && E <= M.left + M.width && C >= M.top && C <= M.top + M.height;
          return F ? {
            x: E,
            y: C
          } : null;
        }
        var D = this.state, B = D.angleAxisMap, N = D.radiusAxisMap;
        if (B && N) {
          var U = ci(B);
          return Nx({
            x: E,
            y: C
          }, U);
        }
        return null;
      }
    }, {
      key: "parseEventsOfWrapper",
      value: function() {
        var O = this.props.children, S = this.getTooltipEventType(), _ = dr(O, an), b = {};
        _ && S === "axis" && (_.props.trigger === "click" ? b = {
          onClick: this.handleClick
        } : b = {
          onMouseEnter: this.handleMouseEnter,
          onMouseMove: this.handleMouseMove,
          onMouseLeave: this.handleMouseLeave,
          onTouchMove: this.handleTouchMove,
          onTouchStart: this.handleTouchStart,
          onTouchEnd: this.handleTouchEnd
        });
        var E = Tc(this.props, this.handleOuterEvent);
        return re(re({}, E), b);
      }
    }, {
      key: "addListener",
      value: function() {
        bh.on(xh, this.handleReceiveSyncEvent);
      }
    }, {
      key: "removeListener",
      value: function() {
        bh.removeListener(xh, this.handleReceiveSyncEvent);
      }
    }, {
      key: "filterFormatItem",
      value: function(O, S, _) {
        for (var b = this.state.formattedGraphicalItems, E = 0, C = b.length; E < C; E++) {
          var M = b[E];
          if (M.item === O || M.props.key === O.key || S === Mn(M.item.type) && _ === M.childIndex)
            return M;
        }
        return null;
      }
    }, {
      key: "renderClipPath",
      value: function() {
        var O = this.clipPathId, S = this.state.offset, _ = S.left, b = S.top, E = S.height, C = S.width;
        return /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: O
        }, /* @__PURE__ */ k.createElement("rect", {
          x: _,
          y: b,
          height: E,
          width: C
        })));
      }
    }, {
      key: "getXScales",
      value: function() {
        var O = this.state.xAxisMap;
        return O ? Object.entries(O).reduce(function(S, _) {
          var b = m1(_, 2), E = b[0], C = b[1];
          return re(re({}, S), {}, Se({}, E, C.scale));
        }, {}) : null;
      }
    }, {
      key: "getYScales",
      value: function() {
        var O = this.state.yAxisMap;
        return O ? Object.entries(O).reduce(function(S, _) {
          var b = m1(_, 2), E = b[0], C = b[1];
          return re(re({}, S), {}, Se({}, E, C.scale));
        }, {}) : null;
      }
    }, {
      key: "getXScaleByAxisId",
      value: function(O) {
        var S;
        return (S = this.state.xAxisMap) === null || S === void 0 || (S = S[O]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getYScaleByAxisId",
      value: function(O) {
        var S;
        return (S = this.state.yAxisMap) === null || S === void 0 || (S = S[O]) === null || S === void 0 ? void 0 : S.scale;
      }
    }, {
      key: "getItemByXY",
      value: function(O) {
        var S = this.state, _ = S.formattedGraphicalItems, b = S.activeItem;
        if (_ && _.length)
          for (var E = 0, C = _.length; E < C; E++) {
            var M = _[E], F = M.props, D = M.item, B = Mn(D.type);
            if (B === "Bar") {
              var N = (F.data || []).find(function(H) {
                return PY(O, H);
              });
              if (N)
                return {
                  graphicalItem: M,
                  payload: N
                };
            } else if (B === "RadialBar") {
              var U = (F.data || []).find(function(H) {
                return Nx(O, H);
              });
              if (U)
                return {
                  graphicalItem: M,
                  payload: U
                };
            } else if (nf(M, b) || af(M, b) || qs(M, b)) {
              var z = p7({
                graphicalItem: M,
                activeTooltipItem: b,
                itemData: D.props.data
              }), J = D.props.activeIndex === void 0 ? z : D.props.activeIndex;
              return {
                graphicalItem: re(re({}, M), {}, {
                  childIndex: J
                }),
                payload: qs(M, b) ? D.props.data[z] : M.props.data[z]
              };
            }
          }
        return null;
      }
    }, {
      key: "render",
      value: function() {
        var O = this;
        if (!Eb(this))
          return null;
        var S = this.props, _ = S.children, b = S.className, E = S.width, C = S.height, M = S.style, F = S.compact, D = S.title, B = S.desc, N = b1(S, tee), U = me(N, !1);
        if (F)
          return /* @__PURE__ */ k.createElement(Qw, {
            state: this.state,
            width: this.props.width,
            height: this.props.height,
            clipPathId: this.clipPathId
          }, /* @__PURE__ */ k.createElement(Ih, ys({}, U, {
            width: E,
            height: C,
            title: D,
            desc: B
          }), this.renderClipPath(), $b(_, this.renderMap)));
        if (this.props.accessibilityLayer) {
          var z, J;
          U.tabIndex = (z = this.props.tabIndex) !== null && z !== void 0 ? z : 0, U.role = (J = this.props.role) !== null && J !== void 0 ? J : "application", U.onKeyDown = function(Z) {
            O.accessibilityManager.keyboardEvent(Z);
          }, U.onFocus = function() {
            O.accessibilityManager.focus();
          };
        }
        var H = this.parseEventsOfWrapper();
        return /* @__PURE__ */ k.createElement(Qw, {
          state: this.state,
          width: this.props.width,
          height: this.props.height,
          clipPathId: this.clipPathId
        }, /* @__PURE__ */ k.createElement("div", ys({
          className: Me("recharts-wrapper", b),
          style: re({
            position: "relative",
            cursor: "default",
            width: E,
            height: C
          }, M)
        }, H, {
          ref: function(q) {
            O.container = q;
          }
        }), /* @__PURE__ */ k.createElement(Ih, ys({}, U, {
          width: E,
          height: C,
          title: D,
          desc: B,
          style: yee
        }), this.renderClipPath(), $b(_, this.renderMap)), this.renderLegend(), this.renderTooltip()));
      }
    }]), w;
  }(D1), Se(r, "displayName", n), Se(r, "defaultProps", re({
    layout: "horizontal",
    stackOffset: "none",
    barCategoryGap: "10%",
    barGap: 4,
    margin: {
      top: 5,
      right: 5,
      bottom: 5,
      left: 5
    },
    reverseStackOrder: !1,
    syncMethod: "index"
  }, v)), Se(r, "getDerivedStateFromProps", function(y, w) {
    var A = y.dataKey, O = y.data, S = y.children, _ = y.width, b = y.height, E = y.layout, C = y.stackOffset, M = y.margin, F = w.dataStartIndex, D = w.dataEndIndex;
    if (w.updateId === void 0) {
      var B = _1(y);
      return re(re(re({}, B), {}, {
        updateId: 0
      }, x(re(re({
        props: y
      }, B), {}, {
        updateId: 0
      }), w)), {}, {
        prevDataKey: A,
        prevData: O,
        prevWidth: _,
        prevHeight: b,
        prevLayout: E,
        prevStackOffset: C,
        prevMargin: M,
        prevChildren: S
      });
    }
    if (A !== w.prevDataKey || O !== w.prevData || _ !== w.prevWidth || b !== w.prevHeight || E !== w.prevLayout || C !== w.prevStackOffset || !ja(M, w.prevMargin)) {
      var N = _1(y), U = {
        // (chartX, chartY) are (0,0) in default state, but we want to keep the last mouse position to avoid
        // any flickering
        chartX: w.chartX,
        chartY: w.chartY,
        // The tooltip should stay active when it was active in the previous render. If this is not
        // the case, the tooltip disappears and immediately re-appears, causing a flickering effect
        isTooltipActive: w.isTooltipActive
      }, z = re(re({}, w1(w, O, E)), {}, {
        updateId: w.updateId + 1
      }), J = re(re(re({}, N), U), z);
      return re(re(re({}, J), x(re({
        props: y
      }, J), w)), {}, {
        prevDataKey: A,
        prevData: O,
        prevWidth: _,
        prevHeight: b,
        prevLayout: E,
        prevStackOffset: C,
        prevMargin: M,
        prevChildren: S
      });
    }
    if (!Ch(S, w.prevChildren)) {
      var H, Z, q, se, G = dr(S, Qa), Y = G && (H = (Z = G.props) === null || Z === void 0 ? void 0 : Z.startIndex) !== null && H !== void 0 ? H : F, ae = G && (q = (se = G.props) === null || se === void 0 ? void 0 : se.endIndex) !== null && q !== void 0 ? q : D, ce = Y !== F || ae !== D, he = !Te(O), ge = he && !ce ? w.updateId : w.updateId + 1;
      return re(re({
        updateId: ge
      }, x(re(re({
        props: y
      }, w), {}, {
        updateId: ge,
        dataStartIndex: Y,
        dataEndIndex: ae
      }), w)), {}, {
        prevChildren: S,
        dataStartIndex: Y,
        dataEndIndex: ae
      });
    }
    return null;
  }), Se(r, "renderActiveDot", function(y, w) {
    var A;
    return /* @__PURE__ */ Kr(y) ? A = /* @__PURE__ */ At(y, w) : Pe(y) ? A = y(w) : A = /* @__PURE__ */ k.createElement(du, w), /* @__PURE__ */ k.createElement(Le, {
      className: "recharts-active-dot",
      key: w.key
    }, A);
  }), r;
}, Eee = uf({
  chartName: "LineChart",
  GraphicalChild: gu,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Gn
  }, {
    axisType: "yAxis",
    AxisComp: qn
  }],
  formatAxisMap: lg
}), PS = uf({
  chartName: "BarChart",
  GraphicalChild: _i,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Gn
  }, {
    axisType: "yAxis",
    AxisComp: qn
  }],
  formatAxisMap: lg
}), Tee = uf({
  chartName: "PieChart",
  GraphicalChild: Hn,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: rf
  }, {
    axisType: "radiusAxis",
    AxisComp: ef
  }],
  formatAxisMap: G4,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), $ee = uf({
  chartName: "AreaChart",
  GraphicalChild: Oi,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Gn
  }, {
    axisType: "yAxis",
    AxisComp: qn
  }],
  formatAxisMap: lg
});
const Cee = ta("", {
  variants: {
    aspect: {
      square: "aspect-square",
      wide: "aspect-video",
      small: "h-40"
    }
  }
}), Mee = { light: "", dark: ".dark" }, ES = V.createContext(null);
function TS() {
  const e = V.useContext(ES);
  if (!e)
    throw new Error("useChart must be used within a <ChartContainer />");
  return e;
}
const Iee = ({
  id: e,
  className: t,
  children: r,
  aspect: n,
  config: i,
  ...a
}, s) => {
  const c = V.useId(), l = `chart-${e || c.replace(/:/g, "")}`, f = V.useRef(null), [d, h] = jn(), v = nu(() => new ResizeObserver(
    (g) => h(g[0].contentRect.height)
  ), []);
  return uv(() => {
    const g = s && "current" in s ? s.current : f.current;
    return g && v.observe(g.parentElement), () => {
      v.disconnect();
    };
  }, [v, s, f]), /* @__PURE__ */ X(ES.Provider, { value: { config: i }, children: /* @__PURE__ */ nt(
    "div",
    {
      "data-chromatic": "ignore",
      "data-chart": l,
      ref: s || f,
      className: Ht(
        "flex w-full justify-center overflow-visible text-sm [&_.recharts-cartesian-axis-tick_text]:fill-f1-foreground-secondary [&_.recharts-cartesian-grid_line]:stroke-f1-border [&_.recharts-curve.recharts-tooltip-cursor]:stroke-f1-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-f1-border [&_.recharts-radial-bar-background-sector]:fill-f1-background-secondary [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-f1-background-secondary [&_.recharts-reference-line-line]:stroke-f1-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
        n ? Cee({ aspect: n }) : "aspect-auto h-full",
        t
      ),
      ...a,
      children: [
        /* @__PURE__ */ X(kee, { id: l, config: i }),
        /* @__PURE__ */ X(
          X8,
          {
            height: d,
            className: "overflow-visible",
            children: r
          }
        )
      ]
    }
  ) });
}, Po = V.forwardRef(Iee);
Po.displayName = "Chart";
const kee = ({ id: e, config: t }) => {
  const r = Object.entries(t).filter(([n, i]) => i.theme || i.color);
  return r.length ? /* @__PURE__ */ X(
    "style",
    {
      dangerouslySetInnerHTML: {
        __html: Object.entries(Mee).map(
          ([n, i]) => `
${i} [data-chart=${e}] {
${r.map(([a, s]) => {
            var l;
            const c = ((l = s.theme) == null ? void 0 : l[n]) || s.color;
            return c ? `  --color-${a}: ${c};` : null;
          }).join(`
`)}
}
`
        )
      }
    }
  ) : null;
}, yu = an, Eo = V.forwardRef(
  ({
    active: e,
    payload: t,
    className: r,
    indicator: n = "dot",
    hideLabel: i = !1,
    hideIndicator: a = !1,
    label: s,
    labelFormatter: c,
    labelClassName: l,
    formatter: f,
    yAxisFormatter: d,
    color: h,
    nameKey: v,
    labelKey: g
  }, x) => {
    const { config: y } = TS(), w = V.useMemo(() => {
      var E;
      if (i || !(t != null && t.length))
        return null;
      const [O] = t, S = `${g || O.dataKey || O.name || "value"}`, _ = Qp(y, O, S), b = !g && typeof s == "string" ? ((E = y[s]) == null ? void 0 : E.label) || s : _ == null ? void 0 : _.label;
      return c ? /* @__PURE__ */ X("div", { className: Ht("font-medium", l), children: c(b, t) }) : b ? /* @__PURE__ */ X("div", { className: Ht("font-medium", l), children: b }) : null;
    }, [
      s,
      c,
      t,
      i,
      l,
      y,
      g
    ]);
    if (!e || !(t != null && t.length))
      return null;
    const A = t.length === 1 && n !== "dot";
    return /* @__PURE__ */ nt(
      "div",
      {
        ref: x,
        className: Ht(
          "grid min-w-[8rem] items-start gap-2 rounded-sm border border-solid border-f1-border bg-f1-background px-3 py-2.5 text-sm shadow-xl",
          r
        ),
        children: [
          A ? null : w,
          /* @__PURE__ */ X("div", { className: "grid gap-2", children: t.map((O, S) => {
            const _ = `${v || O.name || O.dataKey || "value"}`, b = Qp(y, O, _), E = h || O.payload.fill || O.color;
            return /* @__PURE__ */ X(
              "div",
              {
                className: Ht(
                  "flex w-full items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-f1-foreground",
                  n === "dot" && "items-center"
                ),
                children: f && (O == null ? void 0 : O.value) !== void 0 && O.name ? f(O.value, O.name, O, S, O.payload) : /* @__PURE__ */ nt(sv, { children: [
                  b != null && b.icon ? /* @__PURE__ */ X(b.icon, {}) : !a && /* @__PURE__ */ X(
                    "div",
                    {
                      className: Ht(
                        "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                        {
                          "h-2.5 w-2.5": n === "dot",
                          "w-1": n === "line",
                          "w-0 border-[1.5px] border-dashed bg-transparent": n === "dashed",
                          "my-0.5": A && n === "dashed"
                        }
                      ),
                      style: {
                        "--color-bg": E,
                        "--color-border": E
                      }
                    }
                  ),
                  /* @__PURE__ */ nt(
                    "div",
                    {
                      className: Ht(
                        "flex flex-1 justify-between leading-none",
                        A ? "items-end" : "items-center"
                      ),
                      children: [
                        /* @__PURE__ */ nt("div", { className: "grid gap-2", children: [
                          A ? w : null,
                          /* @__PURE__ */ X("span", { className: "pr-2 text-f1-foreground", children: (b == null ? void 0 : b.label) || O.name })
                        ] }),
                        O.value && /* @__PURE__ */ X("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: d ? d(String(O.value)) : O.value.toLocaleString() })
                      ]
                    }
                  )
                ] })
              },
              O.dataKey
            );
          }) })
        ]
      }
    );
  }
);
Eo.displayName = "ChartTooltip";
const $S = za, bg = V.forwardRef(
  ({
    className: e,
    hideIcon: t = !1,
    payload: r,
    verticalAlign: n = "bottom",
    nameKey: i,
    leftShift: a = 0
  }, s) => {
    const { config: c } = TS();
    return r != null && r.length ? /* @__PURE__ */ X(
      "div",
      {
        ref: s,
        className: Ht(
          "relative flex flex-wrap items-center justify-center gap-4 text-f1-foreground-secondary",
          n === "top" ? "pb-2" : "pt-2",
          e
        ),
        style: { marginLeft: a },
        children: r.map((l) => {
          const f = `${i || l.dataKey || "value"}`, d = Qp(c, l, f);
          return /* @__PURE__ */ nt(
            "div",
            {
              className: Ht(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-f1-foreground"
              ),
              children: [
                d != null && d.icon && !t ? /* @__PURE__ */ X(d.icon, {}) : /* @__PURE__ */ X(
                  "div",
                  {
                    className: "h-2.5 w-2.5 shrink-0 rounded-full",
                    style: {
                      backgroundColor: l.color
                    }
                  }
                ),
                /* @__PURE__ */ X("span", { className: "text font-medium tracking-wide text-f1-foreground", children: d == null ? void 0 : d.label })
              ]
            },
            l.value
          );
        })
      }
    ) : null;
  }
);
bg.displayName = "ChartLegend";
function Qp(e, t, r) {
  if (typeof t != "object" || t === null)
    return;
  const n = "payload" in t && typeof t.payload == "object" && t.payload !== null ? t.payload : void 0;
  let i = r;
  return r in t && typeof t[r] == "string" ? i = t[r] : n && r in n && typeof n[r] == "string" && (i = n[r]), i in e ? e[i] : e[r];
}
const jee = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Ree = (e = 21) => {
  let t = "", r = crypto.getRandomValues(new Uint8Array(e));
  for (; e--; )
    t += jee[r[e] & 63];
  return t;
};
const Nee = {
  "chart-1": "hsl(var(--chart-1))",
  "chart-2": "hsl(var(--chart-2))",
  "chart-3": "hsl(var(--chart-3))",
  "chart-4": "hsl(var(--chart-4))",
  "chart-5": "hsl(var(--chart-5))",
  "chart-6": "hsl(var(--chart-6))",
  "chart-7": "hsl(var(--chart-7))",
  "chart-8": "hsl(var(--chart-8))"
}, kn = (e) => {
  const t = Object.values(Nee);
  return t[e % t.length];
};
function cf(e, t = "12px Inter, sans-serif") {
  const n = document.createElement("canvas").getContext("2d");
  return n ? (n.font = t, n.measureText(e).width) : 0;
}
const xg = (e) => ({
  dataKey: "x",
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), wg = (e) => ({
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  tickCount: e == null ? void 0 : e.tickCount,
  tickFormatter: e == null ? void 0 : e.tickFormatter
}), lf = () => ({
  vertical: !1,
  strokeDasharray: "4"
});
function To(e) {
  return Rn(e);
}
function _g(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const Dee = ({
  index: e,
  visibleTicksCount: t,
  payload: r,
  tickFormatter: n,
  ...i
}) => {
  const a = e === 0, s = e === t - 1;
  return /* @__PURE__ */ X(hi, { ...i, textAnchor: a ? "start" : s ? "end" : "middle", children: (n == null ? void 0 : n(r.value, r.index)) ?? r.value });
}, Lee = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n,
  canBeBlurred: i,
  lineType: a = "monotoneX",
  aspect: s,
  marginTop: c = 0
}, l) => {
  const { enabled: f } = Wj(), d = Object.keys(t), h = Ree(12), v = _g(e), g = Math.max(
    ...v.flatMap(
      (O) => d.map(
        (S) => cf(
          n != null && n.tickFormatter ? n.tickFormatter(`${O[S]}`) : `${O[S]}`
        )
      )
    )
  ), x = (n == null ? void 0 : n.width) ?? g + 20, y = !(n != null && n.hide), w = !(r != null && r.hide), A = !i || !f;
  return /* @__PURE__ */ X(Po, { config: t, ref: l, aspect: s, children: /* @__PURE__ */ nt(
    $ee,
    {
      accessibilityLayer: !0,
      data: v,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: c
      },
      children: [
        /* @__PURE__ */ nt("defs", { children: [
          /* @__PURE__ */ nt(
            "linearGradient",
            {
              id: `${h}-fadeGradient`,
              gradientUnits: "userSpaceOnUse",
              x1: `${y ? x : 0}`,
              y1: "0",
              x2: "100%",
              y2: "0",
              children: [
                /* @__PURE__ */ X("stop", { offset: "0%", stopColor: "black", stopOpacity: "0" }),
                /* @__PURE__ */ X("stop", { offset: "1%", stopColor: "white", stopOpacity: "0.1" }),
                /* @__PURE__ */ X("stop", { offset: "7%", stopColor: "white", stopOpacity: "1" }),
                /* @__PURE__ */ X("stop", { offset: "93%", stopColor: "white", stopOpacity: "1" }),
                /* @__PURE__ */ X("stop", { offset: "99%", stopColor: "white", stopOpacity: "0.1" }),
                /* @__PURE__ */ X("stop", { offset: "100%", stopColor: "black", stopOpacity: "0" })
              ]
            }
          ),
          /* @__PURE__ */ X(
            "mask",
            {
              id: `${h}-transparent-edges`,
              maskUnits: "userSpaceOnUse",
              maskContentUnits: "userSpaceOnUse",
              children: /* @__PURE__ */ X(
                "rect",
                {
                  x: "0",
                  y: "0",
                  width: "100%",
                  height: "100%",
                  fill: `url(#${h}-fadeGradient)`
                }
              )
            }
          ),
          d.map((O, S) => /* @__PURE__ */ nt(
            "linearGradient",
            {
              id: `fill${String(O)}-${h}`,
              x1: "0",
              y1: "0",
              x2: "0",
              y2: "1",
              children: [
                /* @__PURE__ */ X(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: t[O].color || kn(S),
                    stopOpacity: 0.8
                  }
                ),
                /* @__PURE__ */ X(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: t[O].color || kn(S),
                    stopOpacity: 0.1
                  }
                )
              ]
            },
            S
          ))
        ] }),
        /* @__PURE__ */ X(
          vu,
          {
            ...lf(),
            mask: `url(#${h}-transparent-edges)`
          }
        ),
        w && /* @__PURE__ */ X(
          Gn,
          {
            dataKey: "x",
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickFormatter: r == null ? void 0 : r.tickFormatter,
            ticks: r == null ? void 0 : r.ticks,
            domain: r == null ? void 0 : r.domain,
            interval: 0,
            tick: Dee
          }
        ),
        y && /* @__PURE__ */ X(
          qn,
          {
            tickLine: !1,
            axisLine: !1,
            tickMargin: 8,
            tickCount: n == null ? void 0 : n.tickCount,
            tickFormatter: n == null ? void 0 : n.tickFormatter,
            ticks: n == null ? void 0 : n.ticks,
            domain: n == null ? void 0 : n.domain,
            width: x,
            className: Ht(i && f && "blur-md")
          }
        ),
        A && /* @__PURE__ */ X(
          yu,
          {
            cursor: !0,
            content: /* @__PURE__ */ X(
              Eo,
              {
                indicator: "dot",
                yAxisFormatter: n == null ? void 0 : n.tickFormatter
              }
            )
          }
        ),
        d.map((O, S) => /* @__PURE__ */ X(
          Oi,
          {
            isAnimationActive: !1,
            dataKey: O,
            type: a,
            mask: `url(#${h}-transparent-edges)`,
            fill: `url(#fill${O}-${h})`,
            fillOpacity: t[O].dashed ? 0 : 0.4,
            stroke: t[O].color || kn(S),
            strokeWidth: 1.5,
            strokeDasharray: t[O].dashed ? "4 4" : void 0
          },
          O
        )),
        Object.keys(t).length > 1 && /* @__PURE__ */ X(
          $S,
          {
            className: "flex justify-start",
            iconType: "star",
            content: /* @__PURE__ */ X(
              bg,
              {
                leftShift: y ? Math.round(x) : 0
              }
            )
          }
        )
      ]
    }
  ) });
}, cne = To(Lee), Bee = ({
  dataConfig: e,
  data: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  label: i = !1,
  type: a = "simple",
  aspect: s
}, c) => {
  const l = Object.keys(e), f = _g(t), d = Math.max(
    ...f.flatMap(
      (h) => l.map(
        (v) => cf(
          n != null && n.tickFormatter ? n.tickFormatter(`${h[v]}`) : `${h[v]}`
        )
      )
    )
  );
  return /* @__PURE__ */ X(Po, { config: e, ref: c, aspect: s, children: /* @__PURE__ */ nt(
    PS,
    {
      accessibilityLayer: !0,
      data: f,
      margin: {
        left: n && !n.hide ? 0 : 12,
        right: 12,
        top: i ? 24 : 0
      },
      stackOffset: a === "stacked-by-sign" ? "sign" : void 0,
      children: [
        /* @__PURE__ */ X(
          yu,
          {
            cursor: !0,
            content: /* @__PURE__ */ X(Eo, { yAxisFormatter: n.tickFormatter })
          }
        ),
        /* @__PURE__ */ X(vu, { ...lf() }),
        /* @__PURE__ */ X(
          qn,
          {
            ...wg(n),
            tick: !0,
            width: n.width ?? d + 20,
            hide: n.hide
          }
        ),
        /* @__PURE__ */ X(Gn, { ...xg(r), hide: r == null ? void 0 : r.hide }),
        l.map((h, v) => /* @__PURE__ */ X(
          _i,
          {
            isAnimationActive: !1,
            dataKey: h,
            stackId: a === "stacked" || a === "stacked-by-sign" ? "stack" : void 0,
            fill: e[h].color || kn(v),
            radius: a === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
            maxBarSize: 32,
            children: i && /* @__PURE__ */ X(
              kr,
              {
                position: "top",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-${h}`
            )
          },
          `bar-${h}`
        ))
      ]
    }
  ) });
}, lne = To(Bee);
function En(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), r === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function fne(e, t) {
  const r = V.createContext(t);
  function n(a) {
    const { children: s, ...c } = a, l = V.useMemo(() => c, Object.values(c));
    return /* @__PURE__ */ X(r.Provider, { value: l, children: s });
  }
  function i(a) {
    const s = V.useContext(r);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return n.displayName = e + "Provider", [n, i];
}
function CS(e, t = []) {
  let r = [];
  function n(a, s) {
    const c = V.createContext(s), l = r.length;
    r = [...r, s];
    function f(h) {
      const { scope: v, children: g, ...x } = h, y = (v == null ? void 0 : v[e][l]) || c, w = V.useMemo(() => x, Object.values(x));
      return /* @__PURE__ */ X(y.Provider, { value: w, children: g });
    }
    function d(h, v) {
      const g = (v == null ? void 0 : v[e][l]) || c, x = V.useContext(g);
      if (x) return x;
      if (s !== void 0) return s;
      throw new Error(`\`${h}\` must be used within \`${a}\``);
    }
    return f.displayName = a + "Provider", [f, d];
  }
  const i = () => {
    const a = r.map((s) => V.createContext(s));
    return function(c) {
      const l = (c == null ? void 0 : c[e]) || a;
      return V.useMemo(
        () => ({ [`__scope${e}`]: { ...c, [e]: l } }),
        [c, l]
      );
    };
  };
  return i.scopeName = e, [n, Fee(i, ...t)];
}
function Fee(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(a) {
      const s = n.reduce((c, { useScope: l, scopeName: f }) => {
        const h = l(a)[`__scope${f}`];
        return { ...c, ...h };
      }, {});
      return V.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var Wee = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], sa = Wee.reduce((e, t) => {
  const r = V.forwardRef((n, i) => {
    const { asChild: a, ...s } = n, c = a ? dv : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ X(c, { ...s, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function zee(e, t) {
  e && cv.flushSync(() => e.dispatchEvent(t));
}
function $o(e) {
  const t = V.useRef(e);
  return V.useEffect(() => {
    t.current = e;
  }), V.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function Uee(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $o(e);
  V.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Hee = "DismissableLayer", ev = "dismissableLayer.update", Gee = "dismissableLayer.pointerDownOutside", qee = "dismissableLayer.focusOutside", A1, MS = V.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), IS = V.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: s,
      onDismiss: c,
      ...l
    } = e, f = V.useContext(MS), [d, h] = V.useState(null), v = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = V.useState({}), x = ra(t, (C) => h(C)), y = Array.from(f.layers), [w] = [...f.layersWithOutsidePointerEventsDisabled].slice(-1), A = y.indexOf(w), O = d ? y.indexOf(d) : -1, S = f.layersWithOutsidePointerEventsDisabled.size > 0, _ = O >= A, b = Yee((C) => {
      const M = C.target, F = [...f.branches].some((D) => D.contains(M));
      !_ || F || (i == null || i(C), s == null || s(C), C.defaultPrevented || c == null || c());
    }, v), E = Xee((C) => {
      const M = C.target;
      [...f.branches].some((D) => D.contains(M)) || (a == null || a(C), s == null || s(C), C.defaultPrevented || c == null || c());
    }, v);
    return Uee((C) => {
      O === f.layers.size - 1 && (n == null || n(C), !C.defaultPrevented && c && (C.preventDefault(), c()));
    }, v), V.useEffect(() => {
      if (d)
        return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (A1 = v.body.style.pointerEvents, v.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(d)), f.layers.add(d), S1(), () => {
          r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (v.body.style.pointerEvents = A1);
        };
    }, [d, v, r, f]), V.useEffect(() => () => {
      d && (f.layers.delete(d), f.layersWithOutsidePointerEventsDisabled.delete(d), S1());
    }, [d, f]), V.useEffect(() => {
      const C = () => g({});
      return document.addEventListener(ev, C), () => document.removeEventListener(ev, C);
    }, []), /* @__PURE__ */ X(
      sa.div,
      {
        ...l,
        ref: x,
        style: {
          pointerEvents: S ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: En(e.onFocusCapture, E.onFocusCapture),
        onBlurCapture: En(e.onBlurCapture, E.onBlurCapture),
        onPointerDownCapture: En(
          e.onPointerDownCapture,
          b.onPointerDownCapture
        )
      }
    );
  }
);
IS.displayName = Hee;
var Kee = "DismissableLayerBranch", Vee = V.forwardRef((e, t) => {
  const r = V.useContext(MS), n = V.useRef(null), i = ra(t, n);
  return V.useEffect(() => {
    const a = n.current;
    if (a)
      return r.branches.add(a), () => {
        r.branches.delete(a);
      };
  }, [r.branches]), /* @__PURE__ */ X(sa.div, { ...e, ref: i });
});
Vee.displayName = Kee;
function Yee(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $o(e), n = V.useRef(!1), i = V.useRef(() => {
  });
  return V.useEffect(() => {
    const a = (c) => {
      if (c.target && !n.current) {
        let l = function() {
          kS(
            Gee,
            r,
            f,
            { discrete: !0 }
          );
        };
        const f = { originalEvent: c };
        c.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = l, t.addEventListener("click", i.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", i.current);
      n.current = !1;
    }, s = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", a), t.removeEventListener("click", i.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Xee(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = $o(e), n = V.useRef(!1);
  return V.useEffect(() => {
    const i = (a) => {
      a.target && !n.current && kS(qee, r, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function S1() {
  const e = new CustomEvent(ev);
  document.dispatchEvent(e);
}
function kS(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }), n ? zee(i, a) : i.dispatchEvent(a);
}
var so = globalThis != null && globalThis.document ? V.useLayoutEffect : () => {
}, Zee = V.useId || (() => {
}), Jee = 0;
function Qee(e) {
  const [t, r] = V.useState(Zee());
  return so(() => {
    r((n) => n ?? String(Jee++));
  }, [e]), t ? `radix-${t}` : "";
}
const ete = ["top", "right", "bottom", "left"], pi = Math.min, hr = Math.max, Sl = Math.round, Oc = Math.floor, vi = (e) => ({
  x: e,
  y: e
}), tte = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, rte = {
  start: "end",
  end: "start"
};
function tv(e, t, r) {
  return hr(e, pi(t, r));
}
function Bn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Fn(e) {
  return e.split("-")[0];
}
function Co(e) {
  return e.split("-")[1];
}
function Og(e) {
  return e === "x" ? "y" : "x";
}
function Ag(e) {
  return e === "y" ? "height" : "width";
}
function gi(e) {
  return ["top", "bottom"].includes(Fn(e)) ? "y" : "x";
}
function Sg(e) {
  return Og(gi(e));
}
function nte(e, t, r) {
  r === void 0 && (r = !1);
  const n = Co(e), i = Sg(e), a = Ag(i);
  let s = i === "x" ? n === (r ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[a] > t.floating[a] && (s = Pl(s)), [s, Pl(s)];
}
function ite(e) {
  const t = Pl(e);
  return [rv(e), t, rv(t)];
}
function rv(e) {
  return e.replace(/start|end/g, (t) => rte[t]);
}
function ate(e, t, r) {
  const n = ["left", "right"], i = ["right", "left"], a = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return r ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? a : s;
    default:
      return [];
  }
}
function ote(e, t, r, n) {
  const i = Co(e);
  let a = ate(Fn(e), r === "start", n);
  return i && (a = a.map((s) => s + "-" + i), t && (a = a.concat(a.map(rv)))), a;
}
function Pl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tte[t]);
}
function ste(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function jS(e) {
  return typeof e != "number" ? ste(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function El(e) {
  const {
    x: t,
    y: r,
    width: n,
    height: i
  } = e;
  return {
    width: n,
    height: i,
    top: r,
    left: t,
    right: t + n,
    bottom: r + i,
    x: t,
    y: r
  };
}
function P1(e, t, r) {
  let {
    reference: n,
    floating: i
  } = e;
  const a = gi(t), s = Sg(t), c = Ag(s), l = Fn(t), f = a === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, v = n[c] / 2 - i[c] / 2;
  let g;
  switch (l) {
    case "top":
      g = {
        x: d,
        y: n.y - i.height
      };
      break;
    case "bottom":
      g = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      g = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      g = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      g = {
        x: n.x,
        y: n.y
      };
  }
  switch (Co(t)) {
    case "start":
      g[s] -= v * (r && f ? -1 : 1);
      break;
    case "end":
      g[s] += v * (r && f ? -1 : 1);
      break;
  }
  return g;
}
const ute = async (e, t, r) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: a = [],
    platform: s
  } = r, c = a.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: h
  } = P1(f, n, l), v = n, g = {}, x = 0;
  for (let y = 0; y < c.length; y++) {
    const {
      name: w,
      fn: A
    } = c[y], {
      x: O,
      y: S,
      data: _,
      reset: b
    } = await A({
      x: d,
      y: h,
      initialPlacement: n,
      placement: v,
      strategy: i,
      middlewareData: g,
      rects: f,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    d = O ?? d, h = S ?? h, g = {
      ...g,
      [w]: {
        ...g[w],
        ..._
      }
    }, b && x <= 50 && (x++, typeof b == "object" && (b.placement && (v = b.placement), b.rects && (f = b.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : b.rects), {
      x: d,
      y: h
    } = P1(f, v, l)), y = -1);
  }
  return {
    x: d,
    y: h,
    placement: v,
    strategy: i,
    middlewareData: g
  };
};
async function tu(e, t) {
  var r;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: a,
    rects: s,
    elements: c,
    strategy: l
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: v = !1,
    padding: g = 0
  } = Bn(t, e), x = jS(g), w = c[v ? h === "floating" ? "reference" : "floating" : h], A = El(await a.getClippingRect({
    element: (r = await (a.isElement == null ? void 0 : a.isElement(w))) == null || r ? w : w.contextElement || await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(c.floating)),
    boundary: f,
    rootBoundary: d,
    strategy: l
  })), O = h === "floating" ? {
    x: n,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, S = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c.floating)), _ = await (a.isElement == null ? void 0 : a.isElement(S)) ? await (a.getScale == null ? void 0 : a.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = El(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: c,
    rect: O,
    offsetParent: S,
    strategy: l
  }) : O);
  return {
    top: (A.top - b.top + x.top) / _.y,
    bottom: (b.bottom - A.bottom + x.bottom) / _.y,
    left: (A.left - b.left + x.left) / _.x,
    right: (b.right - A.right + x.right) / _.x
  };
}
const cte = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: r,
      y: n,
      placement: i,
      rects: a,
      platform: s,
      elements: c,
      middlewareData: l
    } = t, {
      element: f,
      padding: d = 0
    } = Bn(e, t) || {};
    if (f == null)
      return {};
    const h = jS(d), v = {
      x: r,
      y: n
    }, g = Sg(i), x = Ag(g), y = await s.getDimensions(f), w = g === "y", A = w ? "top" : "left", O = w ? "bottom" : "right", S = w ? "clientHeight" : "clientWidth", _ = a.reference[x] + a.reference[g] - v[g] - a.floating[x], b = v[g] - a.reference[g], E = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let C = E ? E[S] : 0;
    (!C || !await (s.isElement == null ? void 0 : s.isElement(E))) && (C = c.floating[S] || a.floating[x]);
    const M = _ / 2 - b / 2, F = C / 2 - y[x] / 2 - 1, D = pi(h[A], F), B = pi(h[O], F), N = D, U = C - y[x] - B, z = C / 2 - y[x] / 2 + M, J = tv(N, z, U), H = !l.arrow && Co(i) != null && z !== J && a.reference[x] / 2 - (z < N ? D : B) - y[x] / 2 < 0, Z = H ? z < N ? z - N : z - U : 0;
    return {
      [g]: v[g] + Z,
      data: {
        [g]: J,
        centerOffset: z - J - Z,
        ...H && {
          alignmentOffset: Z
        }
      },
      reset: H
    };
  }
}), lte = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        middlewareData: a,
        rects: s,
        initialPlacement: c,
        platform: l,
        elements: f
      } = t, {
        mainAxis: d = !0,
        crossAxis: h = !0,
        fallbackPlacements: v,
        fallbackStrategy: g = "bestFit",
        fallbackAxisSideDirection: x = "none",
        flipAlignment: y = !0,
        ...w
      } = Bn(e, t);
      if ((r = a.arrow) != null && r.alignmentOffset)
        return {};
      const A = Fn(i), O = gi(c), S = Fn(c) === c, _ = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), b = v || (S || !y ? [Pl(c)] : ite(c)), E = x !== "none";
      !v && E && b.push(...ote(c, y, x, _));
      const C = [c, ...b], M = await tu(t, w), F = [];
      let D = ((n = a.flip) == null ? void 0 : n.overflows) || [];
      if (d && F.push(M[A]), h) {
        const z = nte(i, s, _);
        F.push(M[z[0]], M[z[1]]);
      }
      if (D = [...D, {
        placement: i,
        overflows: F
      }], !F.every((z) => z <= 0)) {
        var B, N;
        const z = (((B = a.flip) == null ? void 0 : B.index) || 0) + 1, J = C[z];
        if (J)
          return {
            data: {
              index: z,
              overflows: D
            },
            reset: {
              placement: J
            }
          };
        let H = (N = D.filter((Z) => Z.overflows[0] <= 0).sort((Z, q) => Z.overflows[1] - q.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!H)
          switch (g) {
            case "bestFit": {
              var U;
              const Z = (U = D.filter((q) => {
                if (E) {
                  const se = gi(q.placement);
                  return se === O || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  se === "y";
                }
                return !0;
              }).map((q) => [q.placement, q.overflows.filter((se) => se > 0).reduce((se, G) => se + G, 0)]).sort((q, se) => q[1] - se[1])[0]) == null ? void 0 : U[0];
              Z && (H = Z);
              break;
            }
            case "initialPlacement":
              H = c;
              break;
          }
        if (i !== H)
          return {
            reset: {
              placement: H
            }
          };
      }
      return {};
    }
  };
};
function E1(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function T1(e) {
  return ete.some((t) => e[t] >= 0);
}
const fte = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: r
      } = t, {
        strategy: n = "referenceHidden",
        ...i
      } = Bn(e, t);
      switch (n) {
        case "referenceHidden": {
          const a = await tu(t, {
            ...i,
            elementContext: "reference"
          }), s = E1(a, r.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: T1(s)
            }
          };
        }
        case "escaped": {
          const a = await tu(t, {
            ...i,
            altBoundary: !0
          }), s = E1(a, r.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: T1(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function dte(e, t) {
  const {
    placement: r,
    platform: n,
    elements: i
  } = e, a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), s = Fn(r), c = Co(r), l = gi(r) === "y", f = ["left", "top"].includes(s) ? -1 : 1, d = a && l ? -1 : 1, h = Bn(t, e);
  let {
    mainAxis: v,
    crossAxis: g,
    alignmentAxis: x
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return c && typeof x == "number" && (g = c === "end" ? x * -1 : x), l ? {
    x: g * d,
    y: v * f
  } : {
    x: v * f,
    y: g * d
  };
}
const hte = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var r, n;
      const {
        x: i,
        y: a,
        placement: s,
        middlewareData: c
      } = t, l = await dte(t, e);
      return s === ((r = c.offset) == null ? void 0 : r.placement) && (n = c.arrow) != null && n.alignmentOffset ? {} : {
        x: i + l.x,
        y: a + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, pte = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: r,
        y: n,
        placement: i
      } = t, {
        mainAxis: a = !0,
        crossAxis: s = !1,
        limiter: c = {
          fn: (w) => {
            let {
              x: A,
              y: O
            } = w;
            return {
              x: A,
              y: O
            };
          }
        },
        ...l
      } = Bn(e, t), f = {
        x: r,
        y: n
      }, d = await tu(t, l), h = gi(Fn(i)), v = Og(h);
      let g = f[v], x = f[h];
      if (a) {
        const w = v === "y" ? "top" : "left", A = v === "y" ? "bottom" : "right", O = g + d[w], S = g - d[A];
        g = tv(O, g, S);
      }
      if (s) {
        const w = h === "y" ? "top" : "left", A = h === "y" ? "bottom" : "right", O = x + d[w], S = x - d[A];
        x = tv(O, x, S);
      }
      const y = c.fn({
        ...t,
        [v]: g,
        [h]: x
      });
      return {
        ...y,
        data: {
          x: y.x - r,
          y: y.y - n,
          enabled: {
            [v]: a,
            [h]: s
          }
        }
      };
    }
  };
}, vte = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: r,
        y: n,
        placement: i,
        rects: a,
        middlewareData: s
      } = t, {
        offset: c = 0,
        mainAxis: l = !0,
        crossAxis: f = !0
      } = Bn(e, t), d = {
        x: r,
        y: n
      }, h = gi(i), v = Og(h);
      let g = d[v], x = d[h];
      const y = Bn(c, t), w = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (l) {
        const S = v === "y" ? "height" : "width", _ = a.reference[v] - a.floating[S] + w.mainAxis, b = a.reference[v] + a.reference[S] - w.mainAxis;
        g < _ ? g = _ : g > b && (g = b);
      }
      if (f) {
        var A, O;
        const S = v === "y" ? "width" : "height", _ = ["top", "left"].includes(Fn(i)), b = a.reference[h] - a.floating[S] + (_ && ((A = s.offset) == null ? void 0 : A[h]) || 0) + (_ ? 0 : w.crossAxis), E = a.reference[h] + a.reference[S] + (_ ? 0 : ((O = s.offset) == null ? void 0 : O[h]) || 0) - (_ ? w.crossAxis : 0);
        x < b ? x = b : x > E && (x = E);
      }
      return {
        [v]: g,
        [h]: x
      };
    }
  };
}, gte = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var r, n;
      const {
        placement: i,
        rects: a,
        platform: s,
        elements: c
      } = t, {
        apply: l = () => {
        },
        ...f
      } = Bn(e, t), d = await tu(t, f), h = Fn(i), v = Co(i), g = gi(i) === "y", {
        width: x,
        height: y
      } = a.floating;
      let w, A;
      h === "top" || h === "bottom" ? (w = h, A = v === (await (s.isRTL == null ? void 0 : s.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (A = h, w = v === "end" ? "top" : "bottom");
      const O = y - d.top - d.bottom, S = x - d.left - d.right, _ = pi(y - d[w], O), b = pi(x - d[A], S), E = !t.middlewareData.shift;
      let C = _, M = b;
      if ((r = t.middlewareData.shift) != null && r.enabled.x && (M = S), (n = t.middlewareData.shift) != null && n.enabled.y && (C = O), E && !v) {
        const D = hr(d.left, 0), B = hr(d.right, 0), N = hr(d.top, 0), U = hr(d.bottom, 0);
        g ? M = x - 2 * (D !== 0 || B !== 0 ? D + B : hr(d.left, d.right)) : C = y - 2 * (N !== 0 || U !== 0 ? N + U : hr(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: M,
        availableHeight: C
      });
      const F = await s.getDimensions(c.floating);
      return x !== F.width || y !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ff() {
  return typeof window < "u";
}
function Mo(e) {
  return RS(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function mr(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pn(e) {
  var t;
  return (t = (RS(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function RS(e) {
  return ff() ? e instanceof Node || e instanceof mr(e).Node : !1;
}
function Zr(e) {
  return ff() ? e instanceof Element || e instanceof mr(e).Element : !1;
}
function fn(e) {
  return ff() ? e instanceof HTMLElement || e instanceof mr(e).HTMLElement : !1;
}
function $1(e) {
  return !ff() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof mr(e).ShadowRoot;
}
function mu(e) {
  const {
    overflow: t,
    overflowX: r,
    overflowY: n,
    display: i
  } = Jr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + r) && !["inline", "contents"].includes(i);
}
function yte(e) {
  return ["table", "td", "th"].includes(Mo(e));
}
function df(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Pg(e) {
  const t = Eg(), r = Zr(e) ? Jr(e) : e;
  return r.transform !== "none" || r.perspective !== "none" || (r.containerType ? r.containerType !== "normal" : !1) || !t && (r.backdropFilter ? r.backdropFilter !== "none" : !1) || !t && (r.filter ? r.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (r.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (r.contain || "").includes(n));
}
function mte(e) {
  let t = yi(e);
  for (; fn(t) && !uo(t); ) {
    if (Pg(t))
      return t;
    if (df(t))
      return null;
    t = yi(t);
  }
  return null;
}
function Eg() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function uo(e) {
  return ["html", "body", "#document"].includes(Mo(e));
}
function Jr(e) {
  return mr(e).getComputedStyle(e);
}
function hf(e) {
  return Zr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function yi(e) {
  if (Mo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    $1(e) && e.host || // Fallback.
    pn(e)
  );
  return $1(t) ? t.host : t;
}
function NS(e) {
  const t = yi(e);
  return uo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : fn(t) && mu(t) ? t : NS(t);
}
function ru(e, t, r) {
  var n;
  t === void 0 && (t = []), r === void 0 && (r = !0);
  const i = NS(e), a = i === ((n = e.ownerDocument) == null ? void 0 : n.body), s = mr(i);
  if (a) {
    const c = nv(s);
    return t.concat(s, s.visualViewport || [], mu(i) ? i : [], c && r ? ru(c) : []);
  }
  return t.concat(i, ru(i, [], r));
}
function nv(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function DS(e) {
  const t = Jr(e);
  let r = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = fn(e), a = i ? e.offsetWidth : r, s = i ? e.offsetHeight : n, c = Sl(r) !== a || Sl(n) !== s;
  return c && (r = a, n = s), {
    width: r,
    height: n,
    $: c
  };
}
function Tg(e) {
  return Zr(e) ? e : e.contextElement;
}
function Da(e) {
  const t = Tg(e);
  if (!fn(t))
    return vi(1);
  const r = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: a
  } = DS(t);
  let s = (a ? Sl(r.width) : r.width) / n, c = (a ? Sl(r.height) : r.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!c || !Number.isFinite(c)) && (c = 1), {
    x: s,
    y: c
  };
}
const bte = /* @__PURE__ */ vi(0);
function LS(e) {
  const t = mr(e);
  return !Eg() || !t.visualViewport ? bte : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function xte(e, t, r) {
  return t === void 0 && (t = !1), !r || t && r !== mr(e) ? !1 : t;
}
function Qi(e, t, r, n) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  const i = e.getBoundingClientRect(), a = Tg(e);
  let s = vi(1);
  t && (n ? Zr(n) && (s = Da(n)) : s = Da(e));
  const c = xte(a, r, n) ? LS(a) : vi(0);
  let l = (i.left + c.x) / s.x, f = (i.top + c.y) / s.y, d = i.width / s.x, h = i.height / s.y;
  if (a) {
    const v = mr(a), g = n && Zr(n) ? mr(n) : n;
    let x = v, y = nv(x);
    for (; y && n && g !== x; ) {
      const w = Da(y), A = y.getBoundingClientRect(), O = Jr(y), S = A.left + (y.clientLeft + parseFloat(O.paddingLeft)) * w.x, _ = A.top + (y.clientTop + parseFloat(O.paddingTop)) * w.y;
      l *= w.x, f *= w.y, d *= w.x, h *= w.y, l += S, f += _, x = mr(y), y = nv(x);
    }
  }
  return El({
    width: d,
    height: h,
    x: l,
    y: f
  });
}
function wte(e) {
  let {
    elements: t,
    rect: r,
    offsetParent: n,
    strategy: i
  } = e;
  const a = i === "fixed", s = pn(n), c = t ? df(t.floating) : !1;
  if (n === s || c && a)
    return r;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = vi(1);
  const d = vi(0), h = fn(n);
  if ((h || !h && !a) && ((Mo(n) !== "body" || mu(s)) && (l = hf(n)), fn(n))) {
    const v = Qi(n);
    f = Da(n), d.x = v.x + n.clientLeft, d.y = v.y + n.clientTop;
  }
  return {
    width: r.width * f.x,
    height: r.height * f.y,
    x: r.x * f.x - l.scrollLeft * f.x + d.x,
    y: r.y * f.y - l.scrollTop * f.y + d.y
  };
}
function _te(e) {
  return Array.from(e.getClientRects());
}
function iv(e, t) {
  const r = hf(e).scrollLeft;
  return t ? t.left + r : Qi(pn(e)).left + r;
}
function Ote(e) {
  const t = pn(e), r = hf(e), n = e.ownerDocument.body, i = hr(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), a = hr(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let s = -r.scrollLeft + iv(e);
  const c = -r.scrollTop;
  return Jr(n).direction === "rtl" && (s += hr(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function Ate(e, t) {
  const r = mr(e), n = pn(e), i = r.visualViewport;
  let a = n.clientWidth, s = n.clientHeight, c = 0, l = 0;
  if (i) {
    a = i.width, s = i.height;
    const f = Eg();
    (!f || f && t === "fixed") && (c = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function Ste(e, t) {
  const r = Qi(e, !0, t === "fixed"), n = r.top + e.clientTop, i = r.left + e.clientLeft, a = fn(e) ? Da(e) : vi(1), s = e.clientWidth * a.x, c = e.clientHeight * a.y, l = i * a.x, f = n * a.y;
  return {
    width: s,
    height: c,
    x: l,
    y: f
  };
}
function C1(e, t, r) {
  let n;
  if (t === "viewport")
    n = Ate(e, r);
  else if (t === "document")
    n = Ote(pn(e));
  else if (Zr(t))
    n = Ste(t, r);
  else {
    const i = LS(e);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return El(n);
}
function BS(e, t) {
  const r = yi(e);
  return r === t || !Zr(r) || uo(r) ? !1 : Jr(r).position === "fixed" || BS(r, t);
}
function Pte(e, t) {
  const r = t.get(e);
  if (r)
    return r;
  let n = ru(e, [], !1).filter((c) => Zr(c) && Mo(c) !== "body"), i = null;
  const a = Jr(e).position === "fixed";
  let s = a ? yi(e) : e;
  for (; Zr(s) && !uo(s); ) {
    const c = Jr(s), l = Pg(s);
    !l && c.position === "fixed" && (i = null), (a ? !l && !i : !l && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || mu(s) && !l && BS(e, s)) ? n = n.filter((d) => d !== s) : i = c, s = yi(s);
  }
  return t.set(e, n), n;
}
function Ete(e) {
  let {
    element: t,
    boundary: r,
    rootBoundary: n,
    strategy: i
  } = e;
  const s = [...r === "clippingAncestors" ? df(t) ? [] : Pte(t, this._c) : [].concat(r), n], c = s[0], l = s.reduce((f, d) => {
    const h = C1(t, d, i);
    return f.top = hr(h.top, f.top), f.right = pi(h.right, f.right), f.bottom = pi(h.bottom, f.bottom), f.left = hr(h.left, f.left), f;
  }, C1(t, c, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Tte(e) {
  const {
    width: t,
    height: r
  } = DS(e);
  return {
    width: t,
    height: r
  };
}
function $te(e, t, r) {
  const n = fn(t), i = pn(t), a = r === "fixed", s = Qi(e, !0, a, t);
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = vi(0);
  if (n || !n && !a)
    if ((Mo(t) !== "body" || mu(i)) && (c = hf(t)), n) {
      const g = Qi(t, !0, a, t);
      l.x = g.x + t.clientLeft, l.y = g.y + t.clientTop;
    } else i && (l.x = iv(i));
  let f = 0, d = 0;
  if (i && !n && !a) {
    const g = i.getBoundingClientRect();
    d = g.top + c.scrollTop, f = g.left + c.scrollLeft - // RTL <body> scrollbar.
    iv(i, g);
  }
  const h = s.left + c.scrollLeft - l.x - f, v = s.top + c.scrollTop - l.y - d;
  return {
    x: h,
    y: v,
    width: s.width,
    height: s.height
  };
}
function _h(e) {
  return Jr(e).position === "static";
}
function M1(e, t) {
  if (!fn(e) || Jr(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let r = e.offsetParent;
  return pn(e) === r && (r = r.ownerDocument.body), r;
}
function FS(e, t) {
  const r = mr(e);
  if (df(e))
    return r;
  if (!fn(e)) {
    let i = yi(e);
    for (; i && !uo(i); ) {
      if (Zr(i) && !_h(i))
        return i;
      i = yi(i);
    }
    return r;
  }
  let n = M1(e, t);
  for (; n && yte(n) && _h(n); )
    n = M1(n, t);
  return n && uo(n) && _h(n) && !Pg(n) ? r : n || mte(e) || r;
}
const Cte = async function(e) {
  const t = this.getOffsetParent || FS, r = this.getDimensions, n = await r(e.floating);
  return {
    reference: $te(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function Mte(e) {
  return Jr(e).direction === "rtl";
}
const Ite = {
  convertOffsetParentRelativeRectToViewportRelativeRect: wte,
  getDocumentElement: pn,
  getClippingRect: Ete,
  getOffsetParent: FS,
  getElementRects: Cte,
  getClientRects: _te,
  getDimensions: Tte,
  getScale: Da,
  isElement: Zr,
  isRTL: Mte
};
function kte(e, t) {
  let r = null, n;
  const i = pn(e);
  function a() {
    var c;
    clearTimeout(n), (c = r) == null || c.disconnect(), r = null;
  }
  function s(c, l) {
    c === void 0 && (c = !1), l === void 0 && (l = 1), a();
    const {
      left: f,
      top: d,
      width: h,
      height: v
    } = e.getBoundingClientRect();
    if (c || t(), !h || !v)
      return;
    const g = Oc(d), x = Oc(i.clientWidth - (f + h)), y = Oc(i.clientHeight - (d + v)), w = Oc(f), O = {
      rootMargin: -g + "px " + -x + "px " + -y + "px " + -w + "px",
      threshold: hr(0, pi(1, l)) || 1
    };
    let S = !0;
    function _(b) {
      const E = b[0].intersectionRatio;
      if (E !== l) {
        if (!S)
          return s();
        E ? s(!1, E) : n = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      S = !1;
    }
    try {
      r = new IntersectionObserver(_, {
        ...O,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(_, O);
    }
    r.observe(e);
  }
  return s(!0), a;
}
function jte(e, t, r, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: a = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: c = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, f = Tg(e), d = i || a ? [...f ? ru(f) : [], ...ru(t)] : [];
  d.forEach((A) => {
    i && A.addEventListener("scroll", r, {
      passive: !0
    }), a && A.addEventListener("resize", r);
  });
  const h = f && c ? kte(f, r) : null;
  let v = -1, g = null;
  s && (g = new ResizeObserver((A) => {
    let [O] = A;
    O && O.target === f && g && (g.unobserve(t), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var S;
      (S = g) == null || S.observe(t);
    })), r();
  }), f && !l && g.observe(f), g.observe(t));
  let x, y = l ? Qi(e) : null;
  l && w();
  function w() {
    const A = Qi(e);
    y && (A.x !== y.x || A.y !== y.y || A.width !== y.width || A.height !== y.height) && r(), y = A, x = requestAnimationFrame(w);
  }
  return r(), () => {
    var A;
    d.forEach((O) => {
      i && O.removeEventListener("scroll", r), a && O.removeEventListener("resize", r);
    }), h == null || h(), (A = g) == null || A.disconnect(), g = null, l && cancelAnimationFrame(x);
  };
}
const Rte = hte, Nte = pte, Dte = lte, Lte = gte, Bte = fte, I1 = cte, Fte = vte, Wte = (e, t, r) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Ite,
    ...r
  }, a = {
    ...i.platform,
    _c: n
  };
  return ute(e, t, {
    ...i,
    platform: a
  });
};
var Pc = typeof document < "u" ? uv : ea;
function Tl(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let r, n, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (r = e.length, r !== t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!Tl(e[n], t[n]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), r = i.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[n]))
        return !1;
    for (n = r; n-- !== 0; ) {
      const a = i[n];
      if (!(a === "_owner" && e.$$typeof) && !Tl(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function WS(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function k1(e, t) {
  const r = WS(e);
  return Math.round(t * r) / r;
}
function Oh(e) {
  const t = V.useRef(e);
  return Pc(() => {
    t.current = e;
  }), t;
}
function zte(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: r = "absolute",
    middleware: n = [],
    platform: i,
    elements: {
      reference: a,
      floating: s
    } = {},
    transform: c = !0,
    whileElementsMounted: l,
    open: f
  } = e, [d, h] = V.useState({
    x: 0,
    y: 0,
    strategy: r,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [v, g] = V.useState(n);
  Tl(v, n) || g(n);
  const [x, y] = V.useState(null), [w, A] = V.useState(null), O = V.useCallback((q) => {
    q !== E.current && (E.current = q, y(q));
  }, []), S = V.useCallback((q) => {
    q !== C.current && (C.current = q, A(q));
  }, []), _ = a || x, b = s || w, E = V.useRef(null), C = V.useRef(null), M = V.useRef(d), F = l != null, D = Oh(l), B = Oh(i), N = Oh(f), U = V.useCallback(() => {
    if (!E.current || !C.current)
      return;
    const q = {
      placement: t,
      strategy: r,
      middleware: v
    };
    B.current && (q.platform = B.current), Wte(E.current, C.current, q).then((se) => {
      const G = {
        ...se,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: N.current !== !1
      };
      z.current && !Tl(M.current, G) && (M.current = G, cv.flushSync(() => {
        h(G);
      }));
    });
  }, [v, t, r, B, N]);
  Pc(() => {
    f === !1 && M.current.isPositioned && (M.current.isPositioned = !1, h((q) => ({
      ...q,
      isPositioned: !1
    })));
  }, [f]);
  const z = V.useRef(!1);
  Pc(() => (z.current = !0, () => {
    z.current = !1;
  }), []), Pc(() => {
    if (_ && (E.current = _), b && (C.current = b), _ && b) {
      if (D.current)
        return D.current(_, b, U);
      U();
    }
  }, [_, b, U, D, F]);
  const J = V.useMemo(() => ({
    reference: E,
    floating: C,
    setReference: O,
    setFloating: S
  }), [O, S]), H = V.useMemo(() => ({
    reference: _,
    floating: b
  }), [_, b]), Z = V.useMemo(() => {
    const q = {
      position: r,
      left: 0,
      top: 0
    };
    if (!H.floating)
      return q;
    const se = k1(H.floating, d.x), G = k1(H.floating, d.y);
    return c ? {
      ...q,
      transform: "translate(" + se + "px, " + G + "px)",
      ...WS(H.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: r,
      left: se,
      top: G
    };
  }, [r, c, H.floating, d.x, d.y]);
  return V.useMemo(() => ({
    ...d,
    update: U,
    refs: J,
    elements: H,
    floatingStyles: Z
  }), [d, U, J, H, Z]);
}
const Ute = (e) => {
  function t(r) {
    return {}.hasOwnProperty.call(r, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(r) {
      const {
        element: n,
        padding: i
      } = typeof e == "function" ? e(r) : e;
      return n && t(n) ? n.current != null ? I1({
        element: n.current,
        padding: i
      }).fn(r) : {} : n ? I1({
        element: n,
        padding: i
      }).fn(r) : {};
    }
  };
}, Hte = (e, t) => ({
  ...Rte(e),
  options: [e, t]
}), Gte = (e, t) => ({
  ...Nte(e),
  options: [e, t]
}), qte = (e, t) => ({
  ...Fte(e),
  options: [e, t]
}), Kte = (e, t) => ({
  ...Dte(e),
  options: [e, t]
}), Vte = (e, t) => ({
  ...Lte(e),
  options: [e, t]
}), Yte = (e, t) => ({
  ...Bte(e),
  options: [e, t]
}), Xte = (e, t) => ({
  ...Ute(e),
  options: [e, t]
});
var Zte = "Arrow", zS = V.forwardRef((e, t) => {
  const { children: r, width: n = 10, height: i = 5, ...a } = e;
  return /* @__PURE__ */ X(
    sa.svg,
    {
      ...a,
      ref: t,
      width: n,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? r : /* @__PURE__ */ X("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
zS.displayName = Zte;
var Jte = zS;
function Qte(e) {
  const [t, r] = V.useState(void 0);
  return so(() => {
    if (e) {
      r({ width: e.offsetWidth, height: e.offsetHeight });
      const n = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const a = i[0];
        let s, c;
        if ("borderBoxSize" in a) {
          const l = a.borderBoxSize, f = Array.isArray(l) ? l[0] : l;
          s = f.inlineSize, c = f.blockSize;
        } else
          s = e.offsetWidth, c = e.offsetHeight;
        r({ width: s, height: c });
      });
      return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
    } else
      r(void 0);
  }, [e]), t;
}
var $g = "Popper", [US, HS] = CS($g), [ere, GS] = US($g), qS = (e) => {
  const { __scopePopper: t, children: r } = e, [n, i] = V.useState(null);
  return /* @__PURE__ */ X(ere, { scope: t, anchor: n, onAnchorChange: i, children: r });
};
qS.displayName = $g;
var KS = "PopperAnchor", VS = V.forwardRef(
  (e, t) => {
    const { __scopePopper: r, virtualRef: n, ...i } = e, a = GS(KS, r), s = V.useRef(null), c = ra(t, s);
    return V.useEffect(() => {
      a.onAnchorChange((n == null ? void 0 : n.current) || s.current);
    }), n ? null : /* @__PURE__ */ X(sa.div, { ...i, ref: c });
  }
);
VS.displayName = KS;
var Cg = "PopperContent", [tre, rre] = US(Cg), YS = V.forwardRef(
  (e, t) => {
    var ye, we, ne, ue, pe, j;
    const {
      __scopePopper: r,
      side: n = "bottom",
      sideOffset: i = 0,
      align: a = "center",
      alignOffset: s = 0,
      arrowPadding: c = 0,
      avoidCollisions: l = !0,
      collisionBoundary: f = [],
      collisionPadding: d = 0,
      sticky: h = "partial",
      hideWhenDetached: v = !1,
      updatePositionStrategy: g = "optimized",
      onPlaced: x,
      ...y
    } = e, w = GS(Cg, r), [A, O] = V.useState(null), S = ra(t, (Ee) => O(Ee)), [_, b] = V.useState(null), E = Qte(_), C = (E == null ? void 0 : E.width) ?? 0, M = (E == null ? void 0 : E.height) ?? 0, F = n + (a !== "center" ? "-" + a : ""), D = typeof d == "number" ? d : { top: 0, right: 0, bottom: 0, left: 0, ...d }, B = Array.isArray(f) ? f : [f], N = B.length > 0, U = {
      padding: D,
      boundary: B.filter(ire),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: z, floatingStyles: J, placement: H, isPositioned: Z, middlewareData: q } = zte({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...Ee) => jte(...Ee, {
        animationFrame: g === "always"
      }),
      elements: {
        reference: w.anchor
      },
      middleware: [
        Hte({ mainAxis: i + M, alignmentAxis: s }),
        l && Gte({
          mainAxis: !0,
          crossAxis: !1,
          limiter: h === "partial" ? qte() : void 0,
          ...U
        }),
        l && Kte({ ...U }),
        Vte({
          ...U,
          apply: ({ elements: Ee, rects: be, availableWidth: We, availableHeight: lt }) => {
            const { width: at, height: Vt } = be.reference, Lr = Ee.floating.style;
            Lr.setProperty("--radix-popper-available-width", `${We}px`), Lr.setProperty("--radix-popper-available-height", `${lt}px`), Lr.setProperty("--radix-popper-anchor-width", `${at}px`), Lr.setProperty("--radix-popper-anchor-height", `${Vt}px`);
          }
        }),
        _ && Xte({ element: _, padding: c }),
        are({ arrowWidth: C, arrowHeight: M }),
        v && Yte({ strategy: "referenceHidden", ...U })
      ]
    }), [se, G] = JS(H), Y = $o(x);
    so(() => {
      Z && (Y == null || Y());
    }, [Z, Y]);
    const ae = (ye = q.arrow) == null ? void 0 : ye.x, ce = (we = q.arrow) == null ? void 0 : we.y, he = ((ne = q.arrow) == null ? void 0 : ne.centerOffset) !== 0, [ge, xe] = V.useState();
    return so(() => {
      A && xe(window.getComputedStyle(A).zIndex);
    }, [A]), /* @__PURE__ */ X(
      "div",
      {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...J,
          transform: Z ? J.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ge,
          "--radix-popper-transform-origin": [
            (ue = q.transformOrigin) == null ? void 0 : ue.x,
            (pe = q.transformOrigin) == null ? void 0 : pe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((j = q.hide) == null ? void 0 : j.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ X(
          tre,
          {
            scope: r,
            placedSide: se,
            onArrowChange: b,
            arrowX: ae,
            arrowY: ce,
            shouldHideArrow: he,
            children: /* @__PURE__ */ X(
              sa.div,
              {
                "data-side": se,
                "data-align": G,
                ...y,
                ref: S,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: Z ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
YS.displayName = Cg;
var XS = "PopperArrow", nre = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, ZS = V.forwardRef(function(t, r) {
  const { __scopePopper: n, ...i } = t, a = rre(XS, n), s = nre[a.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ X(
      "span",
      {
        ref: a.onArrowChange,
        style: {
          position: "absolute",
          left: a.arrowX,
          top: a.arrowY,
          [s]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[a.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[a.placedSide],
          visibility: a.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ X(
          Jte,
          {
            ...i,
            ref: r,
            style: {
              ...i.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
ZS.displayName = XS;
function ire(e) {
  return e !== null;
}
var are = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, A, O;
    const { placement: r, rects: n, middlewareData: i } = t, s = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0, c = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [f, d] = JS(r), h = { start: "0%", center: "50%", end: "100%" }[d], v = (((A = i.arrow) == null ? void 0 : A.x) ?? 0) + c / 2, g = (((O = i.arrow) == null ? void 0 : O.y) ?? 0) + l / 2;
    let x = "", y = "";
    return f === "bottom" ? (x = s ? h : `${v}px`, y = `${-l}px`) : f === "top" ? (x = s ? h : `${v}px`, y = `${n.floating.height + l}px`) : f === "right" ? (x = `${-l}px`, y = s ? h : `${g}px`) : f === "left" && (x = `${n.floating.width + l}px`, y = s ? h : `${g}px`), { data: { x, y } };
  }
});
function JS(e) {
  const [t, r = "center"] = e.split("-");
  return [t, r];
}
var ore = qS, sre = VS, ure = YS, cre = ZS;
function lre(e, t) {
  return V.useReducer((r, n) => t[r][n] ?? r, e);
}
var QS = (e) => {
  const { present: t, children: r } = e, n = fre(t), i = typeof r == "function" ? r({ present: n.isPresent }) : V.Children.only(r), a = ra(n.ref, dre(i));
  return typeof r == "function" || n.isPresent ? V.cloneElement(i, { ref: a }) : null;
};
QS.displayName = "Presence";
function fre(e) {
  const [t, r] = V.useState(), n = V.useRef({}), i = V.useRef(e), a = V.useRef("none"), s = e ? "mounted" : "unmounted", [c, l] = lre(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return V.useEffect(() => {
    const f = Ac(n.current);
    a.current = c === "mounted" ? f : "none";
  }, [c]), so(() => {
    const f = n.current, d = i.current;
    if (d !== e) {
      const v = a.current, g = Ac(f);
      e ? l("MOUNT") : g === "none" || (f == null ? void 0 : f.display) === "none" ? l("UNMOUNT") : l(d && v !== g ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, l]), so(() => {
    if (t) {
      const f = (h) => {
        const g = Ac(n.current).includes(h.animationName);
        h.target === t && g && cv.flushSync(() => l("ANIMATION_END"));
      }, d = (h) => {
        h.target === t && (a.current = Ac(n.current));
      };
      return t.addEventListener("animationstart", d), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        t.removeEventListener("animationstart", d), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(c),
    ref: V.useCallback((f) => {
      f && (n.current = getComputedStyle(f)), r(f);
    }, [])
  };
}
function Ac(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function dre(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function hre({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  }
}) {
  const [n, i] = pre({ defaultProp: t, onChange: r }), a = e !== void 0, s = a ? e : n, c = $o(r), l = V.useCallback(
    (f) => {
      if (a) {
        const h = typeof f == "function" ? f(e) : f;
        h !== e && c(h);
      } else
        i(f);
    },
    [a, e, i, c]
  );
  return [s, l];
}
function pre({
  defaultProp: e,
  onChange: t
}) {
  const r = V.useState(e), [n] = r, i = V.useRef(n), a = $o(t);
  return V.useEffect(() => {
    i.current !== n && (a(n), i.current = n);
  }, [n, i, a]), r;
}
var vre = "VisuallyHidden", eP = V.forwardRef(
  (e, t) => /* @__PURE__ */ X(
    sa.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
eP.displayName = vre;
var gre = eP, [pf, dne] = CS("Tooltip", [
  HS
]), vf = HS(), tP = "TooltipProvider", yre = 700, av = "tooltip.open", [mre, Mg] = pf(tP), rP = (e) => {
  const {
    __scopeTooltip: t,
    delayDuration: r = yre,
    skipDelayDuration: n = 300,
    disableHoverableContent: i = !1,
    children: a
  } = e, [s, c] = V.useState(!0), l = V.useRef(!1), f = V.useRef(0);
  return V.useEffect(() => {
    const d = f.current;
    return () => window.clearTimeout(d);
  }, []), /* @__PURE__ */ X(
    mre,
    {
      scope: t,
      isOpenDelayed: s,
      delayDuration: r,
      onOpen: V.useCallback(() => {
        window.clearTimeout(f.current), c(!1);
      }, []),
      onClose: V.useCallback(() => {
        window.clearTimeout(f.current), f.current = window.setTimeout(
          () => c(!0),
          n
        );
      }, [n]),
      isPointerInTransitRef: l,
      onPointerInTransitChange: V.useCallback((d) => {
        l.current = d;
      }, []),
      disableHoverableContent: i,
      children: a
    }
  );
};
rP.displayName = tP;
var gf = "Tooltip", [bre, yf] = pf(gf), nP = (e) => {
  const {
    __scopeTooltip: t,
    children: r,
    open: n,
    defaultOpen: i = !1,
    onOpenChange: a,
    disableHoverableContent: s,
    delayDuration: c
  } = e, l = Mg(gf, e.__scopeTooltip), f = vf(t), [d, h] = V.useState(null), v = Qee(), g = V.useRef(0), x = s ?? l.disableHoverableContent, y = c ?? l.delayDuration, w = V.useRef(!1), [A = !1, O] = hre({
    prop: n,
    defaultProp: i,
    onChange: (C) => {
      C ? (l.onOpen(), document.dispatchEvent(new CustomEvent(av))) : l.onClose(), a == null || a(C);
    }
  }), S = V.useMemo(() => A ? w.current ? "delayed-open" : "instant-open" : "closed", [A]), _ = V.useCallback(() => {
    window.clearTimeout(g.current), w.current = !1, O(!0);
  }, [O]), b = V.useCallback(() => {
    window.clearTimeout(g.current), O(!1);
  }, [O]), E = V.useCallback(() => {
    window.clearTimeout(g.current), g.current = window.setTimeout(() => {
      w.current = !0, O(!0);
    }, y);
  }, [y, O]);
  return V.useEffect(() => () => window.clearTimeout(g.current), []), /* @__PURE__ */ X(ore, { ...f, children: /* @__PURE__ */ X(
    bre,
    {
      scope: t,
      contentId: v,
      open: A,
      stateAttribute: S,
      trigger: d,
      onTriggerChange: h,
      onTriggerEnter: V.useCallback(() => {
        l.isOpenDelayed ? E() : _();
      }, [l.isOpenDelayed, E, _]),
      onTriggerLeave: V.useCallback(() => {
        x ? b() : window.clearTimeout(g.current);
      }, [b, x]),
      onOpen: _,
      onClose: b,
      disableHoverableContent: x,
      children: r
    }
  ) });
};
nP.displayName = gf;
var ov = "TooltipTrigger", iP = V.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = yf(ov, r), a = Mg(ov, r), s = vf(r), c = V.useRef(null), l = ra(t, c, i.onTriggerChange), f = V.useRef(!1), d = V.useRef(!1), h = V.useCallback(() => f.current = !1, []);
    return V.useEffect(() => () => document.removeEventListener("pointerup", h), [h]), /* @__PURE__ */ X(sre, { asChild: !0, ...s, children: /* @__PURE__ */ X(
      sa.button,
      {
        "aria-describedby": i.open ? i.contentId : void 0,
        "data-state": i.stateAttribute,
        ...n,
        ref: l,
        onPointerMove: En(e.onPointerMove, (v) => {
          v.pointerType !== "touch" && !d.current && !a.isPointerInTransitRef.current && (i.onTriggerEnter(), d.current = !0);
        }),
        onPointerLeave: En(e.onPointerLeave, () => {
          i.onTriggerLeave(), d.current = !1;
        }),
        onPointerDown: En(e.onPointerDown, () => {
          f.current = !0, document.addEventListener("pointerup", h, { once: !0 });
        }),
        onFocus: En(e.onFocus, () => {
          f.current || i.onOpen();
        }),
        onBlur: En(e.onBlur, i.onClose),
        onClick: En(e.onClick, i.onClose)
      }
    ) });
  }
);
iP.displayName = ov;
var xre = "TooltipPortal", [hne, wre] = pf(xre, {
  forceMount: void 0
}), co = "TooltipContent", aP = V.forwardRef(
  (e, t) => {
    const r = wre(co, e.__scopeTooltip), { forceMount: n = r.forceMount, side: i = "top", ...a } = e, s = yf(co, e.__scopeTooltip);
    return /* @__PURE__ */ X(QS, { present: n || s.open, children: s.disableHoverableContent ? /* @__PURE__ */ X(oP, { side: i, ...a, ref: t }) : /* @__PURE__ */ X(_re, { side: i, ...a, ref: t }) });
  }
), _re = V.forwardRef((e, t) => {
  const r = yf(co, e.__scopeTooltip), n = Mg(co, e.__scopeTooltip), i = V.useRef(null), a = ra(t, i), [s, c] = V.useState(null), { trigger: l, onClose: f } = r, d = i.current, { onPointerInTransitChange: h } = n, v = V.useCallback(() => {
    c(null), h(!1);
  }, [h]), g = V.useCallback(
    (x, y) => {
      const w = x.currentTarget, A = { x: x.clientX, y: x.clientY }, O = Pre(A, w.getBoundingClientRect()), S = Ere(A, O), _ = Tre(y.getBoundingClientRect()), b = Cre([...S, ..._]);
      c(b), h(!0);
    },
    [h]
  );
  return V.useEffect(() => () => v(), [v]), V.useEffect(() => {
    if (l && d) {
      const x = (w) => g(w, d), y = (w) => g(w, l);
      return l.addEventListener("pointerleave", x), d.addEventListener("pointerleave", y), () => {
        l.removeEventListener("pointerleave", x), d.removeEventListener("pointerleave", y);
      };
    }
  }, [l, d, g, v]), V.useEffect(() => {
    if (s) {
      const x = (y) => {
        const w = y.target, A = { x: y.clientX, y: y.clientY }, O = (l == null ? void 0 : l.contains(w)) || (d == null ? void 0 : d.contains(w)), S = !$re(A, s);
        O ? v() : S && (v(), f());
      };
      return document.addEventListener("pointermove", x), () => document.removeEventListener("pointermove", x);
    }
  }, [l, d, s, f, v]), /* @__PURE__ */ X(oP, { ...e, ref: a });
}), [Ore, Are] = pf(gf, { isInside: !1 }), oP = V.forwardRef(
  (e, t) => {
    const {
      __scopeTooltip: r,
      children: n,
      "aria-label": i,
      onEscapeKeyDown: a,
      onPointerDownOutside: s,
      ...c
    } = e, l = yf(co, r), f = vf(r), { onClose: d } = l;
    return V.useEffect(() => (document.addEventListener(av, d), () => document.removeEventListener(av, d)), [d]), V.useEffect(() => {
      if (l.trigger) {
        const h = (v) => {
          const g = v.target;
          g != null && g.contains(l.trigger) && d();
        };
        return window.addEventListener("scroll", h, { capture: !0 }), () => window.removeEventListener("scroll", h, { capture: !0 });
      }
    }, [l.trigger, d]), /* @__PURE__ */ X(
      IS,
      {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: a,
        onPointerDownOutside: s,
        onFocusOutside: (h) => h.preventDefault(),
        onDismiss: d,
        children: /* @__PURE__ */ nt(
          ure,
          {
            "data-state": l.stateAttribute,
            ...f,
            ...c,
            ref: t,
            style: {
              ...c.style,
              "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
              "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
              "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
              "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
              "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [
              /* @__PURE__ */ X(Y1, { children: n }),
              /* @__PURE__ */ X(Ore, { scope: r, isInside: !0, children: /* @__PURE__ */ X(gre, { id: l.contentId, role: "tooltip", children: i || n }) })
            ]
          }
        )
      }
    );
  }
);
aP.displayName = co;
var sP = "TooltipArrow", Sre = V.forwardRef(
  (e, t) => {
    const { __scopeTooltip: r, ...n } = e, i = vf(r);
    return Are(
      sP,
      r
    ).isInside ? null : /* @__PURE__ */ X(cre, { ...i, ...n, ref: t });
  }
);
Sre.displayName = sP;
function Pre(e, t) {
  const r = Math.abs(t.top - e.y), n = Math.abs(t.bottom - e.y), i = Math.abs(t.right - e.x), a = Math.abs(t.left - e.x);
  switch (Math.min(r, n, i, a)) {
    case a:
      return "left";
    case i:
      return "right";
    case r:
      return "top";
    case n:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Ere(e, t, r = 5) {
  const n = [];
  switch (t) {
    case "top":
      n.push(
        { x: e.x - r, y: e.y + r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "bottom":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x + r, y: e.y - r }
      );
      break;
    case "left":
      n.push(
        { x: e.x + r, y: e.y - r },
        { x: e.x + r, y: e.y + r }
      );
      break;
    case "right":
      n.push(
        { x: e.x - r, y: e.y - r },
        { x: e.x - r, y: e.y + r }
      );
      break;
  }
  return n;
}
function Tre(e) {
  const { top: t, right: r, bottom: n, left: i } = e;
  return [
    { x: i, y: t },
    { x: r, y: t },
    { x: r, y: n },
    { x: i, y: n }
  ];
}
function $re(e, t) {
  const { x: r, y: n } = e;
  let i = !1;
  for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
    const c = t[a].x, l = t[a].y, f = t[s].x, d = t[s].y;
    l > n != d > n && r < (f - c) * (n - l) / (d - l) + c && (i = !i);
  }
  return i;
}
function Cre(e) {
  const t = e.slice();
  return t.sort((r, n) => r.x < n.x ? -1 : r.x > n.x ? 1 : r.y < n.y ? -1 : r.y > n.y ? 1 : 0), Mre(t);
}
function Mre(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (; t.length >= 2; ) {
      const a = t[t.length - 1], s = t[t.length - 2];
      if ((a.x - s.x) * (i.y - s.y) >= (a.y - s.y) * (i.x - s.x)) t.pop();
      else break;
    }
    t.push(i);
  }
  t.pop();
  const r = [];
  for (let n = e.length - 1; n >= 0; n--) {
    const i = e[n];
    for (; r.length >= 2; ) {
      const a = r[r.length - 1], s = r[r.length - 2];
      if ((a.x - s.x) * (i.y - s.y) >= (a.y - s.y) * (i.x - s.x)) r.pop();
      else break;
    }
    r.push(i);
  }
  return r.pop(), t.length === 1 && r.length === 1 && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r);
}
var Ire = rP, kre = nP, jre = iP, uP = aP;
const Rre = Ire, Nre = kre, Dre = jre, cP = V.forwardRef(({ className: e, sideOffset: t = 4, ...r }, n) => /* @__PURE__ */ X(
  uP,
  {
    ref: n,
    sideOffset: t,
    className: Ht(
      "z-50 overflow-hidden rounded bg-f1-background-bold px-2 py-1.5 leading-tight text-f1-foreground-inverse animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...r
  }
));
cP.displayName = uP.displayName;
const Lre = ({ data: e, legend: t = !0 }, r) => {
  const n = e.reduce((i, a) => i + a.value, 0);
  return /* @__PURE__ */ nt(Rre, { children: [
    /* @__PURE__ */ X("div", { className: "w-full", ref: r, children: /* @__PURE__ */ X("div", { className: "flex h-2 gap-1 overflow-hidden", children: e.map((i, a) => {
      const s = i.value / n * 100, c = i.color || kn(a), l = (f) => {
        const d = f / n * 100;
        return d % 1 === 0 ? d.toFixed(0) : d.toFixed(1);
      };
      return /* @__PURE__ */ nt(Nre, { children: [
        /* @__PURE__ */ X(
          Dre,
          {
            className: "h-full cursor-default overflow-hidden rounded-2xs",
            style: { width: `${s}%` },
            title: i.name,
            asChild: !0,
            children: /* @__PURE__ */ X(
              "div",
              {
                className: "h-full w-full",
                style: { backgroundColor: c },
                role: "img",
                title: i.name,
                tabIndex: 0
              }
            )
          }
        ),
        /* @__PURE__ */ nt(cP, { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ X(
            "div",
            {
              className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
              style: { backgroundColor: c }
            }
          ),
          /* @__PURE__ */ X("span", { className: "pl-0.5 pr-2 text-f1-foreground-secondary", children: i.name }),
          /* @__PURE__ */ nt("span", { className: "font-mono font-medium tabular-nums text-f1-foreground", children: [
            i.value,
            " (",
            l(i.value),
            "%)"
          ] })
        ] })
      ] }, i.name);
    }) }) }),
    t && /* @__PURE__ */ X(
      "div",
      {
        className: "mt-1 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
        role: "list",
        children: e.map((i, a) => {
          const s = i.color || kn(a);
          return /* @__PURE__ */ nt(
            "div",
            {
              className: "flex items-center gap-1",
              role: "listitem",
              children: [
                /* @__PURE__ */ X(
                  "div",
                  {
                    className: "h-2 w-2 shrink-0 translate-y-px rounded-full",
                    style: { backgroundColor: s }
                  }
                ),
                /* @__PURE__ */ X("span", { className: "text-sm tracking-wide text-f1-foreground-secondary", children: i.name })
              ]
            },
            i.name
          );
        })
      }
    )
  ] });
}, pne = To(Lre), Bre = ({
  data: e,
  dataConfig: t,
  xAxis: r,
  yAxis: n = { hide: !0 },
  lineType: i = "natural",
  aspect: a
}, s) => {
  const c = Object.keys(t), l = _g(e), f = Math.max(
    ...l.flatMap(
      (d) => c.map(
        (h) => cf(
          n != null && n.tickFormatter ? n.tickFormatter(`${d[h]}`) : `${d[h]}`
        )
      )
    )
  );
  return /* @__PURE__ */ X(Po, { config: t, ref: s, aspect: a, children: /* @__PURE__ */ nt(
    Eee,
    {
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: 12 },
      children: [
        /* @__PURE__ */ X(vu, { ...lf() }),
        !(r != null && r.hide) && /* @__PURE__ */ X(Gn, { ...xg(r) }),
        !(n != null && n.hide) && /* @__PURE__ */ X(
          qn,
          {
            ...wg(n),
            width: n.width ?? f + 20
          }
        ),
        /* @__PURE__ */ X(
          yu,
          {
            cursor: !0,
            content: /* @__PURE__ */ X(Eo, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        c.map((d, h) => /* @__PURE__ */ X(
          gu,
          {
            dataKey: d,
            isAnimationActive: !1,
            type: i,
            stroke: t[d].color || kn(h),
            strokeWidth: 1.5,
            strokeDasharray: t[d].dashed ? "4 4" : void 0,
            dot: !1
          },
          d
        ))
      ]
    }
  ) });
}, vne = To(Bre), Fre = ({ data: e, dataConfig: t, overview: r, aspect: n, tickFormatter: i }, a) => {
  const s = e.map((c, l) => {
    var f;
    return {
      ...c,
      fill: ((f = t[c.label]) == null ? void 0 : f.color) || kn(l)
    };
  });
  return /* @__PURE__ */ X(
    Po,
    {
      config: t,
      ref: a,
      aspect: n,
      "data-chromatic": "ignore",
      style: { height: 380 },
      children: /* @__PURE__ */ nt(Tee, { accessibilityLayer: !0, margin: { left: 0, right: 0 }, children: [
        /* @__PURE__ */ X(
          yu,
          {
            cursor: !0,
            content: /* @__PURE__ */ X(Eo, { yAxisFormatter: i })
          }
        ),
        /* @__PURE__ */ X(
          Hn,
          {
            isAnimationActive: !1,
            nameKey: "label",
            legendType: "circle",
            dataKey: "value",
            data: s,
            innerRadius: 120,
            outerRadius: 135,
            paddingAngle: 2.5,
            children: /* @__PURE__ */ X(
              Pt,
              {
                content: ({ viewBox: c }) => {
                  if (c && "cx" in c && "cy" in c)
                    return /* @__PURE__ */ nt(
                      "text",
                      {
                        x: c.cx,
                        y: c.cy,
                        textAnchor: "middle",
                        dominantBaseline: "middle",
                        children: [
                          /* @__PURE__ */ X(
                            "tspan",
                            {
                              x: c.cx,
                              y: (c.cy || 0) + 8,
                              className: "fill-f1-foreground text-2xl font-semibold",
                              children: r != null && r.number ? i ? i(String(r.number)) : r.number : null
                            }
                          ),
                          /* @__PURE__ */ X(
                            "tspan",
                            {
                              x: c.cx,
                              y: (c.cy || 0) - 16,
                              className: "fill-f1-foreground-secondary",
                              children: r == null ? void 0 : r.label
                            }
                          )
                        ]
                      }
                    );
                }
              }
            )
          }
        ),
        /* @__PURE__ */ X(
          $S,
          {
            content: /* @__PURE__ */ X(bg, {}),
            align: "center",
            verticalAlign: "bottom",
            layout: "vertical",
            className: "flex-row items-start gap-4 pr-3 pt-2"
          }
        )
      ] })
    }
  );
}, gne = To(Fre);
var $l = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
$l.exports;
(function(e, t) {
  (function() {
    var r, n = "4.17.21", i = 200, a = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", s = "Expected a function", c = "Invalid `variable` option passed into `_.template`", l = "__lodash_hash_undefined__", f = 500, d = "__lodash_placeholder__", h = 1, v = 2, g = 4, x = 1, y = 2, w = 1, A = 2, O = 4, S = 8, _ = 16, b = 32, E = 64, C = 128, M = 256, F = 512, D = 30, B = "...", N = 800, U = 16, z = 1, J = 2, H = 3, Z = 1 / 0, q = 9007199254740991, se = 17976931348623157e292, G = NaN, Y = 4294967295, ae = Y - 1, ce = Y >>> 1, he = [
      ["ary", C],
      ["bind", w],
      ["bindKey", A],
      ["curry", S],
      ["curryRight", _],
      ["flip", F],
      ["partial", b],
      ["partialRight", E],
      ["rearg", M]
    ], ge = "[object Arguments]", xe = "[object Array]", ye = "[object AsyncFunction]", we = "[object Boolean]", ne = "[object Date]", ue = "[object DOMException]", pe = "[object Error]", j = "[object Function]", Ee = "[object GeneratorFunction]", be = "[object Map]", We = "[object Number]", lt = "[object Null]", at = "[object Object]", Vt = "[object Promise]", Lr = "[object Proxy]", nr = "[object RegExp]", gt = "[object Set]", vn = "[object String]", Kn = "[object Symbol]", Io = "[object Undefined]", Vn = "[object WeakMap]", bu = "[object WeakSet]", ko = "[object ArrayBuffer]", ua = "[object DataView]", mf = "[object Float32Array]", bf = "[object Float64Array]", xf = "[object Int8Array]", wf = "[object Int16Array]", _f = "[object Int32Array]", Of = "[object Uint8Array]", Af = "[object Uint8ClampedArray]", Sf = "[object Uint16Array]", Pf = "[object Uint32Array]", hP = /\b__p \+= '';/g, pP = /\b(__p \+=) '' \+/g, vP = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Ig = /&(?:amp|lt|gt|quot|#39);/g, kg = /[&<>"']/g, gP = RegExp(Ig.source), yP = RegExp(kg.source), mP = /<%-([\s\S]+?)%>/g, bP = /<%([\s\S]+?)%>/g, jg = /<%=([\s\S]+?)%>/g, xP = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, wP = /^\w*$/, _P = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Ef = /[\\^$.*+?()[\]{}|]/g, OP = RegExp(Ef.source), Tf = /^\s+/, AP = /\s/, SP = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, PP = /\{\n\/\* \[wrapped with (.+)\] \*/, EP = /,? & /, TP = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, $P = /[()=,{}\[\]\/\s]/, CP = /\\(\\)?/g, MP = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Rg = /\w*$/, IP = /^[-+]0x[0-9a-f]+$/i, kP = /^0b[01]+$/i, jP = /^\[object .+?Constructor\]$/, RP = /^0o[0-7]+$/i, NP = /^(?:0|[1-9]\d*)$/, DP = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, xu = /($^)/, LP = /['\n\r\u2028\u2029\\]/g, wu = "\\ud800-\\udfff", BP = "\\u0300-\\u036f", FP = "\\ufe20-\\ufe2f", WP = "\\u20d0-\\u20ff", Ng = BP + FP + WP, Dg = "\\u2700-\\u27bf", Lg = "a-z\\xdf-\\xf6\\xf8-\\xff", zP = "\\xac\\xb1\\xd7\\xf7", UP = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", HP = "\\u2000-\\u206f", GP = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Bg = "A-Z\\xc0-\\xd6\\xd8-\\xde", Fg = "\\ufe0e\\ufe0f", Wg = zP + UP + HP + GP, $f = "['’]", qP = "[" + wu + "]", zg = "[" + Wg + "]", _u = "[" + Ng + "]", Ug = "\\d+", KP = "[" + Dg + "]", Hg = "[" + Lg + "]", Gg = "[^" + wu + Wg + Ug + Dg + Lg + Bg + "]", Cf = "\\ud83c[\\udffb-\\udfff]", VP = "(?:" + _u + "|" + Cf + ")", qg = "[^" + wu + "]", Mf = "(?:\\ud83c[\\udde6-\\uddff]){2}", If = "[\\ud800-\\udbff][\\udc00-\\udfff]", ca = "[" + Bg + "]", Kg = "\\u200d", Vg = "(?:" + Hg + "|" + Gg + ")", YP = "(?:" + ca + "|" + Gg + ")", Yg = "(?:" + $f + "(?:d|ll|m|re|s|t|ve))?", Xg = "(?:" + $f + "(?:D|LL|M|RE|S|T|VE))?", Zg = VP + "?", Jg = "[" + Fg + "]?", XP = "(?:" + Kg + "(?:" + [qg, Mf, If].join("|") + ")" + Jg + Zg + ")*", ZP = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", JP = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Qg = Jg + Zg + XP, QP = "(?:" + [KP, Mf, If].join("|") + ")" + Qg, eE = "(?:" + [qg + _u + "?", _u, Mf, If, qP].join("|") + ")", tE = RegExp($f, "g"), rE = RegExp(_u, "g"), kf = RegExp(Cf + "(?=" + Cf + ")|" + eE + Qg, "g"), nE = RegExp([
      ca + "?" + Hg + "+" + Yg + "(?=" + [zg, ca, "$"].join("|") + ")",
      YP + "+" + Xg + "(?=" + [zg, ca + Vg, "$"].join("|") + ")",
      ca + "?" + Vg + "+" + Yg,
      ca + "+" + Xg,
      JP,
      ZP,
      Ug,
      QP
    ].join("|"), "g"), iE = RegExp("[" + Kg + wu + Ng + Fg + "]"), aE = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, oE = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], sE = -1, ot = {};
    ot[mf] = ot[bf] = ot[xf] = ot[wf] = ot[_f] = ot[Of] = ot[Af] = ot[Sf] = ot[Pf] = !0, ot[ge] = ot[xe] = ot[ko] = ot[we] = ot[ua] = ot[ne] = ot[pe] = ot[j] = ot[be] = ot[We] = ot[at] = ot[nr] = ot[gt] = ot[vn] = ot[Vn] = !1;
    var tt = {};
    tt[ge] = tt[xe] = tt[ko] = tt[ua] = tt[we] = tt[ne] = tt[mf] = tt[bf] = tt[xf] = tt[wf] = tt[_f] = tt[be] = tt[We] = tt[at] = tt[nr] = tt[gt] = tt[vn] = tt[Kn] = tt[Of] = tt[Af] = tt[Sf] = tt[Pf] = !0, tt[pe] = tt[j] = tt[Vn] = !1;
    var uE = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, cE = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, lE = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, fE = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, dE = parseFloat, hE = parseInt, ey = typeof pr == "object" && pr && pr.Object === Object && pr, pE = typeof self == "object" && self && self.Object === Object && self, kt = ey || pE || Function("return this")(), jf = t && !t.nodeType && t, Ai = jf && !0 && e && !e.nodeType && e, ty = Ai && Ai.exports === jf, Rf = ty && ey.process, br = function() {
      try {
        var L = Ai && Ai.require && Ai.require("util").types;
        return L || Rf && Rf.binding && Rf.binding("util");
      } catch {
      }
    }(), ry = br && br.isArrayBuffer, ny = br && br.isDate, iy = br && br.isMap, ay = br && br.isRegExp, oy = br && br.isSet, sy = br && br.isTypedArray;
    function ir(L, Q, K) {
      switch (K.length) {
        case 0:
          return L.call(Q);
        case 1:
          return L.call(Q, K[0]);
        case 2:
          return L.call(Q, K[0], K[1]);
        case 3:
          return L.call(Q, K[0], K[1], K[2]);
      }
      return L.apply(Q, K);
    }
    function vE(L, Q, K, fe) {
      for (var $e = -1, He = L == null ? 0 : L.length; ++$e < He; ) {
        var wt = L[$e];
        Q(fe, wt, K(wt), L);
      }
      return fe;
    }
    function xr(L, Q) {
      for (var K = -1, fe = L == null ? 0 : L.length; ++K < fe && Q(L[K], K, L) !== !1; )
        ;
      return L;
    }
    function gE(L, Q) {
      for (var K = L == null ? 0 : L.length; K-- && Q(L[K], K, L) !== !1; )
        ;
      return L;
    }
    function uy(L, Q) {
      for (var K = -1, fe = L == null ? 0 : L.length; ++K < fe; )
        if (!Q(L[K], K, L))
          return !1;
      return !0;
    }
    function Yn(L, Q) {
      for (var K = -1, fe = L == null ? 0 : L.length, $e = 0, He = []; ++K < fe; ) {
        var wt = L[K];
        Q(wt, K, L) && (He[$e++] = wt);
      }
      return He;
    }
    function Ou(L, Q) {
      var K = L == null ? 0 : L.length;
      return !!K && la(L, Q, 0) > -1;
    }
    function Nf(L, Q, K) {
      for (var fe = -1, $e = L == null ? 0 : L.length; ++fe < $e; )
        if (K(Q, L[fe]))
          return !0;
      return !1;
    }
    function ft(L, Q) {
      for (var K = -1, fe = L == null ? 0 : L.length, $e = Array(fe); ++K < fe; )
        $e[K] = Q(L[K], K, L);
      return $e;
    }
    function Xn(L, Q) {
      for (var K = -1, fe = Q.length, $e = L.length; ++K < fe; )
        L[$e + K] = Q[K];
      return L;
    }
    function Df(L, Q, K, fe) {
      var $e = -1, He = L == null ? 0 : L.length;
      for (fe && He && (K = L[++$e]); ++$e < He; )
        K = Q(K, L[$e], $e, L);
      return K;
    }
    function yE(L, Q, K, fe) {
      var $e = L == null ? 0 : L.length;
      for (fe && $e && (K = L[--$e]); $e--; )
        K = Q(K, L[$e], $e, L);
      return K;
    }
    function Lf(L, Q) {
      for (var K = -1, fe = L == null ? 0 : L.length; ++K < fe; )
        if (Q(L[K], K, L))
          return !0;
      return !1;
    }
    var mE = Bf("length");
    function bE(L) {
      return L.split("");
    }
    function xE(L) {
      return L.match(TP) || [];
    }
    function cy(L, Q, K) {
      var fe;
      return K(L, function($e, He, wt) {
        if (Q($e, He, wt))
          return fe = He, !1;
      }), fe;
    }
    function Au(L, Q, K, fe) {
      for (var $e = L.length, He = K + (fe ? 1 : -1); fe ? He-- : ++He < $e; )
        if (Q(L[He], He, L))
          return He;
      return -1;
    }
    function la(L, Q, K) {
      return Q === Q ? IE(L, Q, K) : Au(L, ly, K);
    }
    function wE(L, Q, K, fe) {
      for (var $e = K - 1, He = L.length; ++$e < He; )
        if (fe(L[$e], Q))
          return $e;
      return -1;
    }
    function ly(L) {
      return L !== L;
    }
    function fy(L, Q) {
      var K = L == null ? 0 : L.length;
      return K ? Wf(L, Q) / K : G;
    }
    function Bf(L) {
      return function(Q) {
        return Q == null ? r : Q[L];
      };
    }
    function Ff(L) {
      return function(Q) {
        return L == null ? r : L[Q];
      };
    }
    function dy(L, Q, K, fe, $e) {
      return $e(L, function(He, wt, Qe) {
        K = fe ? (fe = !1, He) : Q(K, He, wt, Qe);
      }), K;
    }
    function _E(L, Q) {
      var K = L.length;
      for (L.sort(Q); K--; )
        L[K] = L[K].value;
      return L;
    }
    function Wf(L, Q) {
      for (var K, fe = -1, $e = L.length; ++fe < $e; ) {
        var He = Q(L[fe]);
        He !== r && (K = K === r ? He : K + He);
      }
      return K;
    }
    function zf(L, Q) {
      for (var K = -1, fe = Array(L); ++K < L; )
        fe[K] = Q(K);
      return fe;
    }
    function OE(L, Q) {
      return ft(Q, function(K) {
        return [K, L[K]];
      });
    }
    function hy(L) {
      return L && L.slice(0, yy(L) + 1).replace(Tf, "");
    }
    function ar(L) {
      return function(Q) {
        return L(Q);
      };
    }
    function Uf(L, Q) {
      return ft(Q, function(K) {
        return L[K];
      });
    }
    function jo(L, Q) {
      return L.has(Q);
    }
    function py(L, Q) {
      for (var K = -1, fe = L.length; ++K < fe && la(Q, L[K], 0) > -1; )
        ;
      return K;
    }
    function vy(L, Q) {
      for (var K = L.length; K-- && la(Q, L[K], 0) > -1; )
        ;
      return K;
    }
    function AE(L, Q) {
      for (var K = L.length, fe = 0; K--; )
        L[K] === Q && ++fe;
      return fe;
    }
    var SE = Ff(uE), PE = Ff(cE);
    function EE(L) {
      return "\\" + fE[L];
    }
    function TE(L, Q) {
      return L == null ? r : L[Q];
    }
    function fa(L) {
      return iE.test(L);
    }
    function $E(L) {
      return aE.test(L);
    }
    function CE(L) {
      for (var Q, K = []; !(Q = L.next()).done; )
        K.push(Q.value);
      return K;
    }
    function Hf(L) {
      var Q = -1, K = Array(L.size);
      return L.forEach(function(fe, $e) {
        K[++Q] = [$e, fe];
      }), K;
    }
    function gy(L, Q) {
      return function(K) {
        return L(Q(K));
      };
    }
    function Zn(L, Q) {
      for (var K = -1, fe = L.length, $e = 0, He = []; ++K < fe; ) {
        var wt = L[K];
        (wt === Q || wt === d) && (L[K] = d, He[$e++] = K);
      }
      return He;
    }
    function Su(L) {
      var Q = -1, K = Array(L.size);
      return L.forEach(function(fe) {
        K[++Q] = fe;
      }), K;
    }
    function ME(L) {
      var Q = -1, K = Array(L.size);
      return L.forEach(function(fe) {
        K[++Q] = [fe, fe];
      }), K;
    }
    function IE(L, Q, K) {
      for (var fe = K - 1, $e = L.length; ++fe < $e; )
        if (L[fe] === Q)
          return fe;
      return -1;
    }
    function kE(L, Q, K) {
      for (var fe = K + 1; fe--; )
        if (L[fe] === Q)
          return fe;
      return fe;
    }
    function da(L) {
      return fa(L) ? RE(L) : mE(L);
    }
    function Br(L) {
      return fa(L) ? NE(L) : bE(L);
    }
    function yy(L) {
      for (var Q = L.length; Q-- && AP.test(L.charAt(Q)); )
        ;
      return Q;
    }
    var jE = Ff(lE);
    function RE(L) {
      for (var Q = kf.lastIndex = 0; kf.test(L); )
        ++Q;
      return Q;
    }
    function NE(L) {
      return L.match(kf) || [];
    }
    function DE(L) {
      return L.match(nE) || [];
    }
    var LE = function L(Q) {
      Q = Q == null ? kt : ha.defaults(kt.Object(), Q, ha.pick(kt, oE));
      var K = Q.Array, fe = Q.Date, $e = Q.Error, He = Q.Function, wt = Q.Math, Qe = Q.Object, Gf = Q.RegExp, BE = Q.String, wr = Q.TypeError, Pu = K.prototype, FE = He.prototype, pa = Qe.prototype, Eu = Q["__core-js_shared__"], Tu = FE.toString, Xe = pa.hasOwnProperty, WE = 0, my = function() {
        var o = /[^.]+$/.exec(Eu && Eu.keys && Eu.keys.IE_PROTO || "");
        return o ? "Symbol(src)_1." + o : "";
      }(), $u = pa.toString, zE = Tu.call(Qe), UE = kt._, HE = Gf(
        "^" + Tu.call(Xe).replace(Ef, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Cu = ty ? Q.Buffer : r, Jn = Q.Symbol, Mu = Q.Uint8Array, by = Cu ? Cu.allocUnsafe : r, Iu = gy(Qe.getPrototypeOf, Qe), xy = Qe.create, wy = pa.propertyIsEnumerable, ku = Pu.splice, _y = Jn ? Jn.isConcatSpreadable : r, Ro = Jn ? Jn.iterator : r, Si = Jn ? Jn.toStringTag : r, ju = function() {
        try {
          var o = Ci(Qe, "defineProperty");
          return o({}, "", {}), o;
        } catch {
        }
      }(), GE = Q.clearTimeout !== kt.clearTimeout && Q.clearTimeout, qE = fe && fe.now !== kt.Date.now && fe.now, KE = Q.setTimeout !== kt.setTimeout && Q.setTimeout, Ru = wt.ceil, Nu = wt.floor, qf = Qe.getOwnPropertySymbols, VE = Cu ? Cu.isBuffer : r, Oy = Q.isFinite, YE = Pu.join, XE = gy(Qe.keys, Qe), _t = wt.max, Nt = wt.min, ZE = fe.now, JE = Q.parseInt, Ay = wt.random, QE = Pu.reverse, Kf = Ci(Q, "DataView"), No = Ci(Q, "Map"), Vf = Ci(Q, "Promise"), va = Ci(Q, "Set"), Do = Ci(Q, "WeakMap"), Lo = Ci(Qe, "create"), Du = Do && new Do(), ga = {}, eT = Mi(Kf), tT = Mi(No), rT = Mi(Vf), nT = Mi(va), iT = Mi(Do), Lu = Jn ? Jn.prototype : r, Bo = Lu ? Lu.valueOf : r, Sy = Lu ? Lu.toString : r;
      function T(o) {
        if (vt(o) && !Ce(o) && !(o instanceof Be)) {
          if (o instanceof _r)
            return o;
          if (Xe.call(o, "__wrapped__"))
            return Pm(o);
        }
        return new _r(o);
      }
      var ya = /* @__PURE__ */ function() {
        function o() {
        }
        return function(u) {
          if (!pt(u))
            return {};
          if (xy)
            return xy(u);
          o.prototype = u;
          var p = new o();
          return o.prototype = r, p;
        };
      }();
      function Bu() {
      }
      function _r(o, u) {
        this.__wrapped__ = o, this.__actions__ = [], this.__chain__ = !!u, this.__index__ = 0, this.__values__ = r;
      }
      T.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: mP,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: bP,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: jg,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: T
        }
      }, T.prototype = Bu.prototype, T.prototype.constructor = T, _r.prototype = ya(Bu.prototype), _r.prototype.constructor = _r;
      function Be(o) {
        this.__wrapped__ = o, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Y, this.__views__ = [];
      }
      function aT() {
        var o = new Be(this.__wrapped__);
        return o.__actions__ = Yt(this.__actions__), o.__dir__ = this.__dir__, o.__filtered__ = this.__filtered__, o.__iteratees__ = Yt(this.__iteratees__), o.__takeCount__ = this.__takeCount__, o.__views__ = Yt(this.__views__), o;
      }
      function oT() {
        if (this.__filtered__) {
          var o = new Be(this);
          o.__dir__ = -1, o.__filtered__ = !0;
        } else
          o = this.clone(), o.__dir__ *= -1;
        return o;
      }
      function sT() {
        var o = this.__wrapped__.value(), u = this.__dir__, p = Ce(o), m = u < 0, P = p ? o.length : 0, $ = b$(0, P, this.__views__), I = $.start, R = $.end, W = R - I, ee = m ? R : I - 1, te = this.__iteratees__, ie = te.length, le = 0, ve = Nt(W, this.__takeCount__);
        if (!p || !m && P == W && ve == W)
          return Yy(o, this.__actions__);
        var Oe = [];
        e:
          for (; W-- && le < ve; ) {
            ee += u;
            for (var Re = -1, Ae = o[ee]; ++Re < ie; ) {
              var De = te[Re], Fe = De.iteratee, ur = De.type, zt = Fe(Ae);
              if (ur == J)
                Ae = zt;
              else if (!zt) {
                if (ur == z)
                  continue e;
                break e;
              }
            }
            Oe[le++] = Ae;
          }
        return Oe;
      }
      Be.prototype = ya(Bu.prototype), Be.prototype.constructor = Be;
      function Pi(o) {
        var u = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++u < p; ) {
          var m = o[u];
          this.set(m[0], m[1]);
        }
      }
      function uT() {
        this.__data__ = Lo ? Lo(null) : {}, this.size = 0;
      }
      function cT(o) {
        var u = this.has(o) && delete this.__data__[o];
        return this.size -= u ? 1 : 0, u;
      }
      function lT(o) {
        var u = this.__data__;
        if (Lo) {
          var p = u[o];
          return p === l ? r : p;
        }
        return Xe.call(u, o) ? u[o] : r;
      }
      function fT(o) {
        var u = this.__data__;
        return Lo ? u[o] !== r : Xe.call(u, o);
      }
      function dT(o, u) {
        var p = this.__data__;
        return this.size += this.has(o) ? 0 : 1, p[o] = Lo && u === r ? l : u, this;
      }
      Pi.prototype.clear = uT, Pi.prototype.delete = cT, Pi.prototype.get = lT, Pi.prototype.has = fT, Pi.prototype.set = dT;
      function gn(o) {
        var u = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++u < p; ) {
          var m = o[u];
          this.set(m[0], m[1]);
        }
      }
      function hT() {
        this.__data__ = [], this.size = 0;
      }
      function pT(o) {
        var u = this.__data__, p = Fu(u, o);
        if (p < 0)
          return !1;
        var m = u.length - 1;
        return p == m ? u.pop() : ku.call(u, p, 1), --this.size, !0;
      }
      function vT(o) {
        var u = this.__data__, p = Fu(u, o);
        return p < 0 ? r : u[p][1];
      }
      function gT(o) {
        return Fu(this.__data__, o) > -1;
      }
      function yT(o, u) {
        var p = this.__data__, m = Fu(p, o);
        return m < 0 ? (++this.size, p.push([o, u])) : p[m][1] = u, this;
      }
      gn.prototype.clear = hT, gn.prototype.delete = pT, gn.prototype.get = vT, gn.prototype.has = gT, gn.prototype.set = yT;
      function yn(o) {
        var u = -1, p = o == null ? 0 : o.length;
        for (this.clear(); ++u < p; ) {
          var m = o[u];
          this.set(m[0], m[1]);
        }
      }
      function mT() {
        this.size = 0, this.__data__ = {
          hash: new Pi(),
          map: new (No || gn)(),
          string: new Pi()
        };
      }
      function bT(o) {
        var u = Ju(this, o).delete(o);
        return this.size -= u ? 1 : 0, u;
      }
      function xT(o) {
        return Ju(this, o).get(o);
      }
      function wT(o) {
        return Ju(this, o).has(o);
      }
      function _T(o, u) {
        var p = Ju(this, o), m = p.size;
        return p.set(o, u), this.size += p.size == m ? 0 : 1, this;
      }
      yn.prototype.clear = mT, yn.prototype.delete = bT, yn.prototype.get = xT, yn.prototype.has = wT, yn.prototype.set = _T;
      function Ei(o) {
        var u = -1, p = o == null ? 0 : o.length;
        for (this.__data__ = new yn(); ++u < p; )
          this.add(o[u]);
      }
      function OT(o) {
        return this.__data__.set(o, l), this;
      }
      function AT(o) {
        return this.__data__.has(o);
      }
      Ei.prototype.add = Ei.prototype.push = OT, Ei.prototype.has = AT;
      function Fr(o) {
        var u = this.__data__ = new gn(o);
        this.size = u.size;
      }
      function ST() {
        this.__data__ = new gn(), this.size = 0;
      }
      function PT(o) {
        var u = this.__data__, p = u.delete(o);
        return this.size = u.size, p;
      }
      function ET(o) {
        return this.__data__.get(o);
      }
      function TT(o) {
        return this.__data__.has(o);
      }
      function $T(o, u) {
        var p = this.__data__;
        if (p instanceof gn) {
          var m = p.__data__;
          if (!No || m.length < i - 1)
            return m.push([o, u]), this.size = ++p.size, this;
          p = this.__data__ = new yn(m);
        }
        return p.set(o, u), this.size = p.size, this;
      }
      Fr.prototype.clear = ST, Fr.prototype.delete = PT, Fr.prototype.get = ET, Fr.prototype.has = TT, Fr.prototype.set = $T;
      function Py(o, u) {
        var p = Ce(o), m = !p && Ii(o), P = !p && !m && ni(o), $ = !p && !m && !P && wa(o), I = p || m || P || $, R = I ? zf(o.length, BE) : [], W = R.length;
        for (var ee in o)
          (u || Xe.call(o, ee)) && !(I && // Safari 9 has enumerable `arguments.length` in strict mode.
          (ee == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          P && (ee == "offset" || ee == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          $ && (ee == "buffer" || ee == "byteLength" || ee == "byteOffset") || // Skip index properties.
          wn(ee, W))) && R.push(ee);
        return R;
      }
      function Ey(o) {
        var u = o.length;
        return u ? o[ad(0, u - 1)] : r;
      }
      function CT(o, u) {
        return Qu(Yt(o), Ti(u, 0, o.length));
      }
      function MT(o) {
        return Qu(Yt(o));
      }
      function Yf(o, u, p) {
        (p !== r && !Wr(o[u], p) || p === r && !(u in o)) && mn(o, u, p);
      }
      function Fo(o, u, p) {
        var m = o[u];
        (!(Xe.call(o, u) && Wr(m, p)) || p === r && !(u in o)) && mn(o, u, p);
      }
      function Fu(o, u) {
        for (var p = o.length; p--; )
          if (Wr(o[p][0], u))
            return p;
        return -1;
      }
      function IT(o, u, p, m) {
        return Qn(o, function(P, $, I) {
          u(m, P, p(P), I);
        }), m;
      }
      function Ty(o, u) {
        return o && tn(u, $t(u), o);
      }
      function kT(o, u) {
        return o && tn(u, Zt(u), o);
      }
      function mn(o, u, p) {
        u == "__proto__" && ju ? ju(o, u, {
          configurable: !0,
          enumerable: !0,
          value: p,
          writable: !0
        }) : o[u] = p;
      }
      function Xf(o, u) {
        for (var p = -1, m = u.length, P = K(m), $ = o == null; ++p < m; )
          P[p] = $ ? r : Cd(o, u[p]);
        return P;
      }
      function Ti(o, u, p) {
        return o === o && (p !== r && (o = o <= p ? o : p), u !== r && (o = o >= u ? o : u)), o;
      }
      function Or(o, u, p, m, P, $) {
        var I, R = u & h, W = u & v, ee = u & g;
        if (p && (I = P ? p(o, m, P, $) : p(o)), I !== r)
          return I;
        if (!pt(o))
          return o;
        var te = Ce(o);
        if (te) {
          if (I = w$(o), !R)
            return Yt(o, I);
        } else {
          var ie = Dt(o), le = ie == j || ie == Ee;
          if (ni(o))
            return Jy(o, R);
          if (ie == at || ie == ge || le && !P) {
            if (I = W || le ? {} : ym(o), !R)
              return W ? l$(o, kT(I, o)) : c$(o, Ty(I, o));
          } else {
            if (!tt[ie])
              return P ? o : {};
            I = _$(o, ie, R);
          }
        }
        $ || ($ = new Fr());
        var ve = $.get(o);
        if (ve)
          return ve;
        $.set(o, I), qm(o) ? o.forEach(function(Ae) {
          I.add(Or(Ae, u, p, Ae, o, $));
        }) : Hm(o) && o.forEach(function(Ae, De) {
          I.set(De, Or(Ae, u, p, De, o, $));
        });
        var Oe = ee ? W ? gd : vd : W ? Zt : $t, Re = te ? r : Oe(o);
        return xr(Re || o, function(Ae, De) {
          Re && (De = Ae, Ae = o[De]), Fo(I, De, Or(Ae, u, p, De, o, $));
        }), I;
      }
      function jT(o) {
        var u = $t(o);
        return function(p) {
          return $y(p, o, u);
        };
      }
      function $y(o, u, p) {
        var m = p.length;
        if (o == null)
          return !m;
        for (o = Qe(o); m--; ) {
          var P = p[m], $ = u[P], I = o[P];
          if (I === r && !(P in o) || !$(I))
            return !1;
        }
        return !0;
      }
      function Cy(o, u, p) {
        if (typeof o != "function")
          throw new wr(s);
        return Ko(function() {
          o.apply(r, p);
        }, u);
      }
      function Wo(o, u, p, m) {
        var P = -1, $ = Ou, I = !0, R = o.length, W = [], ee = u.length;
        if (!R)
          return W;
        p && (u = ft(u, ar(p))), m ? ($ = Nf, I = !1) : u.length >= i && ($ = jo, I = !1, u = new Ei(u));
        e:
          for (; ++P < R; ) {
            var te = o[P], ie = p == null ? te : p(te);
            if (te = m || te !== 0 ? te : 0, I && ie === ie) {
              for (var le = ee; le--; )
                if (u[le] === ie)
                  continue e;
              W.push(te);
            } else $(u, ie, m) || W.push(te);
          }
        return W;
      }
      var Qn = nm(en), My = nm(Jf, !0);
      function RT(o, u) {
        var p = !0;
        return Qn(o, function(m, P, $) {
          return p = !!u(m, P, $), p;
        }), p;
      }
      function Wu(o, u, p) {
        for (var m = -1, P = o.length; ++m < P; ) {
          var $ = o[m], I = u($);
          if (I != null && (R === r ? I === I && !sr(I) : p(I, R)))
            var R = I, W = $;
        }
        return W;
      }
      function NT(o, u, p, m) {
        var P = o.length;
        for (p = Ie(p), p < 0 && (p = -p > P ? 0 : P + p), m = m === r || m > P ? P : Ie(m), m < 0 && (m += P), m = p > m ? 0 : Vm(m); p < m; )
          o[p++] = u;
        return o;
      }
      function Iy(o, u) {
        var p = [];
        return Qn(o, function(m, P, $) {
          u(m, P, $) && p.push(m);
        }), p;
      }
      function jt(o, u, p, m, P) {
        var $ = -1, I = o.length;
        for (p || (p = A$), P || (P = []); ++$ < I; ) {
          var R = o[$];
          u > 0 && p(R) ? u > 1 ? jt(R, u - 1, p, m, P) : Xn(P, R) : m || (P[P.length] = R);
        }
        return P;
      }
      var Zf = im(), ky = im(!0);
      function en(o, u) {
        return o && Zf(o, u, $t);
      }
      function Jf(o, u) {
        return o && ky(o, u, $t);
      }
      function zu(o, u) {
        return Yn(u, function(p) {
          return _n(o[p]);
        });
      }
      function $i(o, u) {
        u = ti(u, o);
        for (var p = 0, m = u.length; o != null && p < m; )
          o = o[rn(u[p++])];
        return p && p == m ? o : r;
      }
      function jy(o, u, p) {
        var m = u(o);
        return Ce(o) ? m : Xn(m, p(o));
      }
      function Ft(o) {
        return o == null ? o === r ? Io : lt : Si && Si in Qe(o) ? m$(o) : M$(o);
      }
      function Qf(o, u) {
        return o > u;
      }
      function DT(o, u) {
        return o != null && Xe.call(o, u);
      }
      function LT(o, u) {
        return o != null && u in Qe(o);
      }
      function BT(o, u, p) {
        return o >= Nt(u, p) && o < _t(u, p);
      }
      function ed(o, u, p) {
        for (var m = p ? Nf : Ou, P = o[0].length, $ = o.length, I = $, R = K($), W = 1 / 0, ee = []; I--; ) {
          var te = o[I];
          I && u && (te = ft(te, ar(u))), W = Nt(te.length, W), R[I] = !p && (u || P >= 120 && te.length >= 120) ? new Ei(I && te) : r;
        }
        te = o[0];
        var ie = -1, le = R[0];
        e:
          for (; ++ie < P && ee.length < W; ) {
            var ve = te[ie], Oe = u ? u(ve) : ve;
            if (ve = p || ve !== 0 ? ve : 0, !(le ? jo(le, Oe) : m(ee, Oe, p))) {
              for (I = $; --I; ) {
                var Re = R[I];
                if (!(Re ? jo(Re, Oe) : m(o[I], Oe, p)))
                  continue e;
              }
              le && le.push(Oe), ee.push(ve);
            }
          }
        return ee;
      }
      function FT(o, u, p, m) {
        return en(o, function(P, $, I) {
          u(m, p(P), $, I);
        }), m;
      }
      function zo(o, u, p) {
        u = ti(u, o), o = wm(o, u);
        var m = o == null ? o : o[rn(Sr(u))];
        return m == null ? r : ir(m, o, p);
      }
      function Ry(o) {
        return vt(o) && Ft(o) == ge;
      }
      function WT(o) {
        return vt(o) && Ft(o) == ko;
      }
      function zT(o) {
        return vt(o) && Ft(o) == ne;
      }
      function Uo(o, u, p, m, P) {
        return o === u ? !0 : o == null || u == null || !vt(o) && !vt(u) ? o !== o && u !== u : UT(o, u, p, m, Uo, P);
      }
      function UT(o, u, p, m, P, $) {
        var I = Ce(o), R = Ce(u), W = I ? xe : Dt(o), ee = R ? xe : Dt(u);
        W = W == ge ? at : W, ee = ee == ge ? at : ee;
        var te = W == at, ie = ee == at, le = W == ee;
        if (le && ni(o)) {
          if (!ni(u))
            return !1;
          I = !0, te = !1;
        }
        if (le && !te)
          return $ || ($ = new Fr()), I || wa(o) ? pm(o, u, p, m, P, $) : g$(o, u, W, p, m, P, $);
        if (!(p & x)) {
          var ve = te && Xe.call(o, "__wrapped__"), Oe = ie && Xe.call(u, "__wrapped__");
          if (ve || Oe) {
            var Re = ve ? o.value() : o, Ae = Oe ? u.value() : u;
            return $ || ($ = new Fr()), P(Re, Ae, p, m, $);
          }
        }
        return le ? ($ || ($ = new Fr()), y$(o, u, p, m, P, $)) : !1;
      }
      function HT(o) {
        return vt(o) && Dt(o) == be;
      }
      function td(o, u, p, m) {
        var P = p.length, $ = P, I = !m;
        if (o == null)
          return !$;
        for (o = Qe(o); P--; ) {
          var R = p[P];
          if (I && R[2] ? R[1] !== o[R[0]] : !(R[0] in o))
            return !1;
        }
        for (; ++P < $; ) {
          R = p[P];
          var W = R[0], ee = o[W], te = R[1];
          if (I && R[2]) {
            if (ee === r && !(W in o))
              return !1;
          } else {
            var ie = new Fr();
            if (m)
              var le = m(ee, te, W, o, u, ie);
            if (!(le === r ? Uo(te, ee, x | y, m, ie) : le))
              return !1;
          }
        }
        return !0;
      }
      function Ny(o) {
        if (!pt(o) || P$(o))
          return !1;
        var u = _n(o) ? HE : jP;
        return u.test(Mi(o));
      }
      function GT(o) {
        return vt(o) && Ft(o) == nr;
      }
      function qT(o) {
        return vt(o) && Dt(o) == gt;
      }
      function KT(o) {
        return vt(o) && ac(o.length) && !!ot[Ft(o)];
      }
      function Dy(o) {
        return typeof o == "function" ? o : o == null ? Jt : typeof o == "object" ? Ce(o) ? Fy(o[0], o[1]) : By(o) : ab(o);
      }
      function rd(o) {
        if (!qo(o))
          return XE(o);
        var u = [];
        for (var p in Qe(o))
          Xe.call(o, p) && p != "constructor" && u.push(p);
        return u;
      }
      function VT(o) {
        if (!pt(o))
          return C$(o);
        var u = qo(o), p = [];
        for (var m in o)
          m == "constructor" && (u || !Xe.call(o, m)) || p.push(m);
        return p;
      }
      function nd(o, u) {
        return o < u;
      }
      function Ly(o, u) {
        var p = -1, m = Xt(o) ? K(o.length) : [];
        return Qn(o, function(P, $, I) {
          m[++p] = u(P, $, I);
        }), m;
      }
      function By(o) {
        var u = md(o);
        return u.length == 1 && u[0][2] ? bm(u[0][0], u[0][1]) : function(p) {
          return p === o || td(p, o, u);
        };
      }
      function Fy(o, u) {
        return xd(o) && mm(u) ? bm(rn(o), u) : function(p) {
          var m = Cd(p, o);
          return m === r && m === u ? Md(p, o) : Uo(u, m, x | y);
        };
      }
      function Uu(o, u, p, m, P) {
        o !== u && Zf(u, function($, I) {
          if (P || (P = new Fr()), pt($))
            YT(o, u, I, p, Uu, m, P);
          else {
            var R = m ? m(_d(o, I), $, I + "", o, u, P) : r;
            R === r && (R = $), Yf(o, I, R);
          }
        }, Zt);
      }
      function YT(o, u, p, m, P, $, I) {
        var R = _d(o, p), W = _d(u, p), ee = I.get(W);
        if (ee) {
          Yf(o, p, ee);
          return;
        }
        var te = $ ? $(R, W, p + "", o, u, I) : r, ie = te === r;
        if (ie) {
          var le = Ce(W), ve = !le && ni(W), Oe = !le && !ve && wa(W);
          te = W, le || ve || Oe ? Ce(R) ? te = R : yt(R) ? te = Yt(R) : ve ? (ie = !1, te = Jy(W, !0)) : Oe ? (ie = !1, te = Qy(W, !0)) : te = [] : Vo(W) || Ii(W) ? (te = R, Ii(R) ? te = Ym(R) : (!pt(R) || _n(R)) && (te = ym(W))) : ie = !1;
        }
        ie && (I.set(W, te), P(te, W, m, $, I), I.delete(W)), Yf(o, p, te);
      }
      function Wy(o, u) {
        var p = o.length;
        if (p)
          return u += u < 0 ? p : 0, wn(u, p) ? o[u] : r;
      }
      function zy(o, u, p) {
        u.length ? u = ft(u, function($) {
          return Ce($) ? function(I) {
            return $i(I, $.length === 1 ? $[0] : $);
          } : $;
        }) : u = [Jt];
        var m = -1;
        u = ft(u, ar(_e()));
        var P = Ly(o, function($, I, R) {
          var W = ft(u, function(ee) {
            return ee($);
          });
          return { criteria: W, index: ++m, value: $ };
        });
        return _E(P, function($, I) {
          return u$($, I, p);
        });
      }
      function XT(o, u) {
        return Uy(o, u, function(p, m) {
          return Md(o, m);
        });
      }
      function Uy(o, u, p) {
        for (var m = -1, P = u.length, $ = {}; ++m < P; ) {
          var I = u[m], R = $i(o, I);
          p(R, I) && Ho($, ti(I, o), R);
        }
        return $;
      }
      function ZT(o) {
        return function(u) {
          return $i(u, o);
        };
      }
      function id(o, u, p, m) {
        var P = m ? wE : la, $ = -1, I = u.length, R = o;
        for (o === u && (u = Yt(u)), p && (R = ft(o, ar(p))); ++$ < I; )
          for (var W = 0, ee = u[$], te = p ? p(ee) : ee; (W = P(R, te, W, m)) > -1; )
            R !== o && ku.call(R, W, 1), ku.call(o, W, 1);
        return o;
      }
      function Hy(o, u) {
        for (var p = o ? u.length : 0, m = p - 1; p--; ) {
          var P = u[p];
          if (p == m || P !== $) {
            var $ = P;
            wn(P) ? ku.call(o, P, 1) : ud(o, P);
          }
        }
        return o;
      }
      function ad(o, u) {
        return o + Nu(Ay() * (u - o + 1));
      }
      function JT(o, u, p, m) {
        for (var P = -1, $ = _t(Ru((u - o) / (p || 1)), 0), I = K($); $--; )
          I[m ? $ : ++P] = o, o += p;
        return I;
      }
      function od(o, u) {
        var p = "";
        if (!o || u < 1 || u > q)
          return p;
        do
          u % 2 && (p += o), u = Nu(u / 2), u && (o += o);
        while (u);
        return p;
      }
      function Ne(o, u) {
        return Od(xm(o, u, Jt), o + "");
      }
      function QT(o) {
        return Ey(_a(o));
      }
      function e$(o, u) {
        var p = _a(o);
        return Qu(p, Ti(u, 0, p.length));
      }
      function Ho(o, u, p, m) {
        if (!pt(o))
          return o;
        u = ti(u, o);
        for (var P = -1, $ = u.length, I = $ - 1, R = o; R != null && ++P < $; ) {
          var W = rn(u[P]), ee = p;
          if (W === "__proto__" || W === "constructor" || W === "prototype")
            return o;
          if (P != I) {
            var te = R[W];
            ee = m ? m(te, W, R) : r, ee === r && (ee = pt(te) ? te : wn(u[P + 1]) ? [] : {});
          }
          Fo(R, W, ee), R = R[W];
        }
        return o;
      }
      var Gy = Du ? function(o, u) {
        return Du.set(o, u), o;
      } : Jt, t$ = ju ? function(o, u) {
        return ju(o, "toString", {
          configurable: !0,
          enumerable: !1,
          value: kd(u),
          writable: !0
        });
      } : Jt;
      function r$(o) {
        return Qu(_a(o));
      }
      function Ar(o, u, p) {
        var m = -1, P = o.length;
        u < 0 && (u = -u > P ? 0 : P + u), p = p > P ? P : p, p < 0 && (p += P), P = u > p ? 0 : p - u >>> 0, u >>>= 0;
        for (var $ = K(P); ++m < P; )
          $[m] = o[m + u];
        return $;
      }
      function n$(o, u) {
        var p;
        return Qn(o, function(m, P, $) {
          return p = u(m, P, $), !p;
        }), !!p;
      }
      function Hu(o, u, p) {
        var m = 0, P = o == null ? m : o.length;
        if (typeof u == "number" && u === u && P <= ce) {
          for (; m < P; ) {
            var $ = m + P >>> 1, I = o[$];
            I !== null && !sr(I) && (p ? I <= u : I < u) ? m = $ + 1 : P = $;
          }
          return P;
        }
        return sd(o, u, Jt, p);
      }
      function sd(o, u, p, m) {
        var P = 0, $ = o == null ? 0 : o.length;
        if ($ === 0)
          return 0;
        u = p(u);
        for (var I = u !== u, R = u === null, W = sr(u), ee = u === r; P < $; ) {
          var te = Nu((P + $) / 2), ie = p(o[te]), le = ie !== r, ve = ie === null, Oe = ie === ie, Re = sr(ie);
          if (I)
            var Ae = m || Oe;
          else ee ? Ae = Oe && (m || le) : R ? Ae = Oe && le && (m || !ve) : W ? Ae = Oe && le && !ve && (m || !Re) : ve || Re ? Ae = !1 : Ae = m ? ie <= u : ie < u;
          Ae ? P = te + 1 : $ = te;
        }
        return Nt($, ae);
      }
      function qy(o, u) {
        for (var p = -1, m = o.length, P = 0, $ = []; ++p < m; ) {
          var I = o[p], R = u ? u(I) : I;
          if (!p || !Wr(R, W)) {
            var W = R;
            $[P++] = I === 0 ? 0 : I;
          }
        }
        return $;
      }
      function Ky(o) {
        return typeof o == "number" ? o : sr(o) ? G : +o;
      }
      function or(o) {
        if (typeof o == "string")
          return o;
        if (Ce(o))
          return ft(o, or) + "";
        if (sr(o))
          return Sy ? Sy.call(o) : "";
        var u = o + "";
        return u == "0" && 1 / o == -Z ? "-0" : u;
      }
      function ei(o, u, p) {
        var m = -1, P = Ou, $ = o.length, I = !0, R = [], W = R;
        if (p)
          I = !1, P = Nf;
        else if ($ >= i) {
          var ee = u ? null : p$(o);
          if (ee)
            return Su(ee);
          I = !1, P = jo, W = new Ei();
        } else
          W = u ? [] : R;
        e:
          for (; ++m < $; ) {
            var te = o[m], ie = u ? u(te) : te;
            if (te = p || te !== 0 ? te : 0, I && ie === ie) {
              for (var le = W.length; le--; )
                if (W[le] === ie)
                  continue e;
              u && W.push(ie), R.push(te);
            } else P(W, ie, p) || (W !== R && W.push(ie), R.push(te));
          }
        return R;
      }
      function ud(o, u) {
        return u = ti(u, o), o = wm(o, u), o == null || delete o[rn(Sr(u))];
      }
      function Vy(o, u, p, m) {
        return Ho(o, u, p($i(o, u)), m);
      }
      function Gu(o, u, p, m) {
        for (var P = o.length, $ = m ? P : -1; (m ? $-- : ++$ < P) && u(o[$], $, o); )
          ;
        return p ? Ar(o, m ? 0 : $, m ? $ + 1 : P) : Ar(o, m ? $ + 1 : 0, m ? P : $);
      }
      function Yy(o, u) {
        var p = o;
        return p instanceof Be && (p = p.value()), Df(u, function(m, P) {
          return P.func.apply(P.thisArg, Xn([m], P.args));
        }, p);
      }
      function cd(o, u, p) {
        var m = o.length;
        if (m < 2)
          return m ? ei(o[0]) : [];
        for (var P = -1, $ = K(m); ++P < m; )
          for (var I = o[P], R = -1; ++R < m; )
            R != P && ($[P] = Wo($[P] || I, o[R], u, p));
        return ei(jt($, 1), u, p);
      }
      function Xy(o, u, p) {
        for (var m = -1, P = o.length, $ = u.length, I = {}; ++m < P; ) {
          var R = m < $ ? u[m] : r;
          p(I, o[m], R);
        }
        return I;
      }
      function ld(o) {
        return yt(o) ? o : [];
      }
      function fd(o) {
        return typeof o == "function" ? o : Jt;
      }
      function ti(o, u) {
        return Ce(o) ? o : xd(o, u) ? [o] : Sm(Ge(o));
      }
      var i$ = Ne;
      function ri(o, u, p) {
        var m = o.length;
        return p = p === r ? m : p, !u && p >= m ? o : Ar(o, u, p);
      }
      var Zy = GE || function(o) {
        return kt.clearTimeout(o);
      };
      function Jy(o, u) {
        if (u)
          return o.slice();
        var p = o.length, m = by ? by(p) : new o.constructor(p);
        return o.copy(m), m;
      }
      function dd(o) {
        var u = new o.constructor(o.byteLength);
        return new Mu(u).set(new Mu(o)), u;
      }
      function a$(o, u) {
        var p = u ? dd(o.buffer) : o.buffer;
        return new o.constructor(p, o.byteOffset, o.byteLength);
      }
      function o$(o) {
        var u = new o.constructor(o.source, Rg.exec(o));
        return u.lastIndex = o.lastIndex, u;
      }
      function s$(o) {
        return Bo ? Qe(Bo.call(o)) : {};
      }
      function Qy(o, u) {
        var p = u ? dd(o.buffer) : o.buffer;
        return new o.constructor(p, o.byteOffset, o.length);
      }
      function em(o, u) {
        if (o !== u) {
          var p = o !== r, m = o === null, P = o === o, $ = sr(o), I = u !== r, R = u === null, W = u === u, ee = sr(u);
          if (!R && !ee && !$ && o > u || $ && I && W && !R && !ee || m && I && W || !p && W || !P)
            return 1;
          if (!m && !$ && !ee && o < u || ee && p && P && !m && !$ || R && p && P || !I && P || !W)
            return -1;
        }
        return 0;
      }
      function u$(o, u, p) {
        for (var m = -1, P = o.criteria, $ = u.criteria, I = P.length, R = p.length; ++m < I; ) {
          var W = em(P[m], $[m]);
          if (W) {
            if (m >= R)
              return W;
            var ee = p[m];
            return W * (ee == "desc" ? -1 : 1);
          }
        }
        return o.index - u.index;
      }
      function tm(o, u, p, m) {
        for (var P = -1, $ = o.length, I = p.length, R = -1, W = u.length, ee = _t($ - I, 0), te = K(W + ee), ie = !m; ++R < W; )
          te[R] = u[R];
        for (; ++P < I; )
          (ie || P < $) && (te[p[P]] = o[P]);
        for (; ee--; )
          te[R++] = o[P++];
        return te;
      }
      function rm(o, u, p, m) {
        for (var P = -1, $ = o.length, I = -1, R = p.length, W = -1, ee = u.length, te = _t($ - R, 0), ie = K(te + ee), le = !m; ++P < te; )
          ie[P] = o[P];
        for (var ve = P; ++W < ee; )
          ie[ve + W] = u[W];
        for (; ++I < R; )
          (le || P < $) && (ie[ve + p[I]] = o[P++]);
        return ie;
      }
      function Yt(o, u) {
        var p = -1, m = o.length;
        for (u || (u = K(m)); ++p < m; )
          u[p] = o[p];
        return u;
      }
      function tn(o, u, p, m) {
        var P = !p;
        p || (p = {});
        for (var $ = -1, I = u.length; ++$ < I; ) {
          var R = u[$], W = m ? m(p[R], o[R], R, p, o) : r;
          W === r && (W = o[R]), P ? mn(p, R, W) : Fo(p, R, W);
        }
        return p;
      }
      function c$(o, u) {
        return tn(o, bd(o), u);
      }
      function l$(o, u) {
        return tn(o, vm(o), u);
      }
      function qu(o, u) {
        return function(p, m) {
          var P = Ce(p) ? vE : IT, $ = u ? u() : {};
          return P(p, o, _e(m, 2), $);
        };
      }
      function ma(o) {
        return Ne(function(u, p) {
          var m = -1, P = p.length, $ = P > 1 ? p[P - 1] : r, I = P > 2 ? p[2] : r;
          for ($ = o.length > 3 && typeof $ == "function" ? (P--, $) : r, I && Wt(p[0], p[1], I) && ($ = P < 3 ? r : $, P = 1), u = Qe(u); ++m < P; ) {
            var R = p[m];
            R && o(u, R, m, $);
          }
          return u;
        });
      }
      function nm(o, u) {
        return function(p, m) {
          if (p == null)
            return p;
          if (!Xt(p))
            return o(p, m);
          for (var P = p.length, $ = u ? P : -1, I = Qe(p); (u ? $-- : ++$ < P) && m(I[$], $, I) !== !1; )
            ;
          return p;
        };
      }
      function im(o) {
        return function(u, p, m) {
          for (var P = -1, $ = Qe(u), I = m(u), R = I.length; R--; ) {
            var W = I[o ? R : ++P];
            if (p($[W], W, $) === !1)
              break;
          }
          return u;
        };
      }
      function f$(o, u, p) {
        var m = u & w, P = Go(o);
        function $() {
          var I = this && this !== kt && this instanceof $ ? P : o;
          return I.apply(m ? p : this, arguments);
        }
        return $;
      }
      function am(o) {
        return function(u) {
          u = Ge(u);
          var p = fa(u) ? Br(u) : r, m = p ? p[0] : u.charAt(0), P = p ? ri(p, 1).join("") : u.slice(1);
          return m[o]() + P;
        };
      }
      function ba(o) {
        return function(u) {
          return Df(nb(rb(u).replace(tE, "")), o, "");
        };
      }
      function Go(o) {
        return function() {
          var u = arguments;
          switch (u.length) {
            case 0:
              return new o();
            case 1:
              return new o(u[0]);
            case 2:
              return new o(u[0], u[1]);
            case 3:
              return new o(u[0], u[1], u[2]);
            case 4:
              return new o(u[0], u[1], u[2], u[3]);
            case 5:
              return new o(u[0], u[1], u[2], u[3], u[4]);
            case 6:
              return new o(u[0], u[1], u[2], u[3], u[4], u[5]);
            case 7:
              return new o(u[0], u[1], u[2], u[3], u[4], u[5], u[6]);
          }
          var p = ya(o.prototype), m = o.apply(p, u);
          return pt(m) ? m : p;
        };
      }
      function d$(o, u, p) {
        var m = Go(o);
        function P() {
          for (var $ = arguments.length, I = K($), R = $, W = xa(P); R--; )
            I[R] = arguments[R];
          var ee = $ < 3 && I[0] !== W && I[$ - 1] !== W ? [] : Zn(I, W);
          if ($ -= ee.length, $ < p)
            return lm(
              o,
              u,
              Ku,
              P.placeholder,
              r,
              I,
              ee,
              r,
              r,
              p - $
            );
          var te = this && this !== kt && this instanceof P ? m : o;
          return ir(te, this, I);
        }
        return P;
      }
      function om(o) {
        return function(u, p, m) {
          var P = Qe(u);
          if (!Xt(u)) {
            var $ = _e(p, 3);
            u = $t(u), p = function(R) {
              return $(P[R], R, P);
            };
          }
          var I = o(u, p, m);
          return I > -1 ? P[$ ? u[I] : I] : r;
        };
      }
      function sm(o) {
        return xn(function(u) {
          var p = u.length, m = p, P = _r.prototype.thru;
          for (o && u.reverse(); m--; ) {
            var $ = u[m];
            if (typeof $ != "function")
              throw new wr(s);
            if (P && !I && Zu($) == "wrapper")
              var I = new _r([], !0);
          }
          for (m = I ? m : p; ++m < p; ) {
            $ = u[m];
            var R = Zu($), W = R == "wrapper" ? yd($) : r;
            W && wd(W[0]) && W[1] == (C | S | b | M) && !W[4].length && W[9] == 1 ? I = I[Zu(W[0])].apply(I, W[3]) : I = $.length == 1 && wd($) ? I[R]() : I.thru($);
          }
          return function() {
            var ee = arguments, te = ee[0];
            if (I && ee.length == 1 && Ce(te))
              return I.plant(te).value();
            for (var ie = 0, le = p ? u[ie].apply(this, ee) : te; ++ie < p; )
              le = u[ie].call(this, le);
            return le;
          };
        });
      }
      function Ku(o, u, p, m, P, $, I, R, W, ee) {
        var te = u & C, ie = u & w, le = u & A, ve = u & (S | _), Oe = u & F, Re = le ? r : Go(o);
        function Ae() {
          for (var De = arguments.length, Fe = K(De), ur = De; ur--; )
            Fe[ur] = arguments[ur];
          if (ve)
            var zt = xa(Ae), cr = AE(Fe, zt);
          if (m && (Fe = tm(Fe, m, P, ve)), $ && (Fe = rm(Fe, $, I, ve)), De -= cr, ve && De < ee) {
            var mt = Zn(Fe, zt);
            return lm(
              o,
              u,
              Ku,
              Ae.placeholder,
              p,
              Fe,
              mt,
              R,
              W,
              ee - De
            );
          }
          var zr = ie ? p : this, An = le ? zr[o] : o;
          return De = Fe.length, R ? Fe = I$(Fe, R) : Oe && De > 1 && Fe.reverse(), te && W < De && (Fe.length = W), this && this !== kt && this instanceof Ae && (An = Re || Go(An)), An.apply(zr, Fe);
        }
        return Ae;
      }
      function um(o, u) {
        return function(p, m) {
          return FT(p, o, u(m), {});
        };
      }
      function Vu(o, u) {
        return function(p, m) {
          var P;
          if (p === r && m === r)
            return u;
          if (p !== r && (P = p), m !== r) {
            if (P === r)
              return m;
            typeof p == "string" || typeof m == "string" ? (p = or(p), m = or(m)) : (p = Ky(p), m = Ky(m)), P = o(p, m);
          }
          return P;
        };
      }
      function hd(o) {
        return xn(function(u) {
          return u = ft(u, ar(_e())), Ne(function(p) {
            var m = this;
            return o(u, function(P) {
              return ir(P, m, p);
            });
          });
        });
      }
      function Yu(o, u) {
        u = u === r ? " " : or(u);
        var p = u.length;
        if (p < 2)
          return p ? od(u, o) : u;
        var m = od(u, Ru(o / da(u)));
        return fa(u) ? ri(Br(m), 0, o).join("") : m.slice(0, o);
      }
      function h$(o, u, p, m) {
        var P = u & w, $ = Go(o);
        function I() {
          for (var R = -1, W = arguments.length, ee = -1, te = m.length, ie = K(te + W), le = this && this !== kt && this instanceof I ? $ : o; ++ee < te; )
            ie[ee] = m[ee];
          for (; W--; )
            ie[ee++] = arguments[++R];
          return ir(le, P ? p : this, ie);
        }
        return I;
      }
      function cm(o) {
        return function(u, p, m) {
          return m && typeof m != "number" && Wt(u, p, m) && (p = m = r), u = On(u), p === r ? (p = u, u = 0) : p = On(p), m = m === r ? u < p ? 1 : -1 : On(m), JT(u, p, m, o);
        };
      }
      function Xu(o) {
        return function(u, p) {
          return typeof u == "string" && typeof p == "string" || (u = Pr(u), p = Pr(p)), o(u, p);
        };
      }
      function lm(o, u, p, m, P, $, I, R, W, ee) {
        var te = u & S, ie = te ? I : r, le = te ? r : I, ve = te ? $ : r, Oe = te ? r : $;
        u |= te ? b : E, u &= ~(te ? E : b), u & O || (u &= ~(w | A));
        var Re = [
          o,
          u,
          P,
          ve,
          ie,
          Oe,
          le,
          R,
          W,
          ee
        ], Ae = p.apply(r, Re);
        return wd(o) && _m(Ae, Re), Ae.placeholder = m, Om(Ae, o, u);
      }
      function pd(o) {
        var u = wt[o];
        return function(p, m) {
          if (p = Pr(p), m = m == null ? 0 : Nt(Ie(m), 292), m && Oy(p)) {
            var P = (Ge(p) + "e").split("e"), $ = u(P[0] + "e" + (+P[1] + m));
            return P = (Ge($) + "e").split("e"), +(P[0] + "e" + (+P[1] - m));
          }
          return u(p);
        };
      }
      var p$ = va && 1 / Su(new va([, -0]))[1] == Z ? function(o) {
        return new va(o);
      } : Nd;
      function fm(o) {
        return function(u) {
          var p = Dt(u);
          return p == be ? Hf(u) : p == gt ? ME(u) : OE(u, o(u));
        };
      }
      function bn(o, u, p, m, P, $, I, R) {
        var W = u & A;
        if (!W && typeof o != "function")
          throw new wr(s);
        var ee = m ? m.length : 0;
        if (ee || (u &= ~(b | E), m = P = r), I = I === r ? I : _t(Ie(I), 0), R = R === r ? R : Ie(R), ee -= P ? P.length : 0, u & E) {
          var te = m, ie = P;
          m = P = r;
        }
        var le = W ? r : yd(o), ve = [
          o,
          u,
          p,
          m,
          P,
          te,
          ie,
          $,
          I,
          R
        ];
        if (le && $$(ve, le), o = ve[0], u = ve[1], p = ve[2], m = ve[3], P = ve[4], R = ve[9] = ve[9] === r ? W ? 0 : o.length : _t(ve[9] - ee, 0), !R && u & (S | _) && (u &= ~(S | _)), !u || u == w)
          var Oe = f$(o, u, p);
        else u == S || u == _ ? Oe = d$(o, u, R) : (u == b || u == (w | b)) && !P.length ? Oe = h$(o, u, p, m) : Oe = Ku.apply(r, ve);
        var Re = le ? Gy : _m;
        return Om(Re(Oe, ve), o, u);
      }
      function dm(o, u, p, m) {
        return o === r || Wr(o, pa[p]) && !Xe.call(m, p) ? u : o;
      }
      function hm(o, u, p, m, P, $) {
        return pt(o) && pt(u) && ($.set(u, o), Uu(o, u, r, hm, $), $.delete(u)), o;
      }
      function v$(o) {
        return Vo(o) ? r : o;
      }
      function pm(o, u, p, m, P, $) {
        var I = p & x, R = o.length, W = u.length;
        if (R != W && !(I && W > R))
          return !1;
        var ee = $.get(o), te = $.get(u);
        if (ee && te)
          return ee == u && te == o;
        var ie = -1, le = !0, ve = p & y ? new Ei() : r;
        for ($.set(o, u), $.set(u, o); ++ie < R; ) {
          var Oe = o[ie], Re = u[ie];
          if (m)
            var Ae = I ? m(Re, Oe, ie, u, o, $) : m(Oe, Re, ie, o, u, $);
          if (Ae !== r) {
            if (Ae)
              continue;
            le = !1;
            break;
          }
          if (ve) {
            if (!Lf(u, function(De, Fe) {
              if (!jo(ve, Fe) && (Oe === De || P(Oe, De, p, m, $)))
                return ve.push(Fe);
            })) {
              le = !1;
              break;
            }
          } else if (!(Oe === Re || P(Oe, Re, p, m, $))) {
            le = !1;
            break;
          }
        }
        return $.delete(o), $.delete(u), le;
      }
      function g$(o, u, p, m, P, $, I) {
        switch (p) {
          case ua:
            if (o.byteLength != u.byteLength || o.byteOffset != u.byteOffset)
              return !1;
            o = o.buffer, u = u.buffer;
          case ko:
            return !(o.byteLength != u.byteLength || !$(new Mu(o), new Mu(u)));
          case we:
          case ne:
          case We:
            return Wr(+o, +u);
          case pe:
            return o.name == u.name && o.message == u.message;
          case nr:
          case vn:
            return o == u + "";
          case be:
            var R = Hf;
          case gt:
            var W = m & x;
            if (R || (R = Su), o.size != u.size && !W)
              return !1;
            var ee = I.get(o);
            if (ee)
              return ee == u;
            m |= y, I.set(o, u);
            var te = pm(R(o), R(u), m, P, $, I);
            return I.delete(o), te;
          case Kn:
            if (Bo)
              return Bo.call(o) == Bo.call(u);
        }
        return !1;
      }
      function y$(o, u, p, m, P, $) {
        var I = p & x, R = vd(o), W = R.length, ee = vd(u), te = ee.length;
        if (W != te && !I)
          return !1;
        for (var ie = W; ie--; ) {
          var le = R[ie];
          if (!(I ? le in u : Xe.call(u, le)))
            return !1;
        }
        var ve = $.get(o), Oe = $.get(u);
        if (ve && Oe)
          return ve == u && Oe == o;
        var Re = !0;
        $.set(o, u), $.set(u, o);
        for (var Ae = I; ++ie < W; ) {
          le = R[ie];
          var De = o[le], Fe = u[le];
          if (m)
            var ur = I ? m(Fe, De, le, u, o, $) : m(De, Fe, le, o, u, $);
          if (!(ur === r ? De === Fe || P(De, Fe, p, m, $) : ur)) {
            Re = !1;
            break;
          }
          Ae || (Ae = le == "constructor");
        }
        if (Re && !Ae) {
          var zt = o.constructor, cr = u.constructor;
          zt != cr && "constructor" in o && "constructor" in u && !(typeof zt == "function" && zt instanceof zt && typeof cr == "function" && cr instanceof cr) && (Re = !1);
        }
        return $.delete(o), $.delete(u), Re;
      }
      function xn(o) {
        return Od(xm(o, r, $m), o + "");
      }
      function vd(o) {
        return jy(o, $t, bd);
      }
      function gd(o) {
        return jy(o, Zt, vm);
      }
      var yd = Du ? function(o) {
        return Du.get(o);
      } : Nd;
      function Zu(o) {
        for (var u = o.name + "", p = ga[u], m = Xe.call(ga, u) ? p.length : 0; m--; ) {
          var P = p[m], $ = P.func;
          if ($ == null || $ == o)
            return P.name;
        }
        return u;
      }
      function xa(o) {
        var u = Xe.call(T, "placeholder") ? T : o;
        return u.placeholder;
      }
      function _e() {
        var o = T.iteratee || jd;
        return o = o === jd ? Dy : o, arguments.length ? o(arguments[0], arguments[1]) : o;
      }
      function Ju(o, u) {
        var p = o.__data__;
        return S$(u) ? p[typeof u == "string" ? "string" : "hash"] : p.map;
      }
      function md(o) {
        for (var u = $t(o), p = u.length; p--; ) {
          var m = u[p], P = o[m];
          u[p] = [m, P, mm(P)];
        }
        return u;
      }
      function Ci(o, u) {
        var p = TE(o, u);
        return Ny(p) ? p : r;
      }
      function m$(o) {
        var u = Xe.call(o, Si), p = o[Si];
        try {
          o[Si] = r;
          var m = !0;
        } catch {
        }
        var P = $u.call(o);
        return m && (u ? o[Si] = p : delete o[Si]), P;
      }
      var bd = qf ? function(o) {
        return o == null ? [] : (o = Qe(o), Yn(qf(o), function(u) {
          return wy.call(o, u);
        }));
      } : Dd, vm = qf ? function(o) {
        for (var u = []; o; )
          Xn(u, bd(o)), o = Iu(o);
        return u;
      } : Dd, Dt = Ft;
      (Kf && Dt(new Kf(new ArrayBuffer(1))) != ua || No && Dt(new No()) != be || Vf && Dt(Vf.resolve()) != Vt || va && Dt(new va()) != gt || Do && Dt(new Do()) != Vn) && (Dt = function(o) {
        var u = Ft(o), p = u == at ? o.constructor : r, m = p ? Mi(p) : "";
        if (m)
          switch (m) {
            case eT:
              return ua;
            case tT:
              return be;
            case rT:
              return Vt;
            case nT:
              return gt;
            case iT:
              return Vn;
          }
        return u;
      });
      function b$(o, u, p) {
        for (var m = -1, P = p.length; ++m < P; ) {
          var $ = p[m], I = $.size;
          switch ($.type) {
            case "drop":
              o += I;
              break;
            case "dropRight":
              u -= I;
              break;
            case "take":
              u = Nt(u, o + I);
              break;
            case "takeRight":
              o = _t(o, u - I);
              break;
          }
        }
        return { start: o, end: u };
      }
      function x$(o) {
        var u = o.match(PP);
        return u ? u[1].split(EP) : [];
      }
      function gm(o, u, p) {
        u = ti(u, o);
        for (var m = -1, P = u.length, $ = !1; ++m < P; ) {
          var I = rn(u[m]);
          if (!($ = o != null && p(o, I)))
            break;
          o = o[I];
        }
        return $ || ++m != P ? $ : (P = o == null ? 0 : o.length, !!P && ac(P) && wn(I, P) && (Ce(o) || Ii(o)));
      }
      function w$(o) {
        var u = o.length, p = new o.constructor(u);
        return u && typeof o[0] == "string" && Xe.call(o, "index") && (p.index = o.index, p.input = o.input), p;
      }
      function ym(o) {
        return typeof o.constructor == "function" && !qo(o) ? ya(Iu(o)) : {};
      }
      function _$(o, u, p) {
        var m = o.constructor;
        switch (u) {
          case ko:
            return dd(o);
          case we:
          case ne:
            return new m(+o);
          case ua:
            return a$(o, p);
          case mf:
          case bf:
          case xf:
          case wf:
          case _f:
          case Of:
          case Af:
          case Sf:
          case Pf:
            return Qy(o, p);
          case be:
            return new m();
          case We:
          case vn:
            return new m(o);
          case nr:
            return o$(o);
          case gt:
            return new m();
          case Kn:
            return s$(o);
        }
      }
      function O$(o, u) {
        var p = u.length;
        if (!p)
          return o;
        var m = p - 1;
        return u[m] = (p > 1 ? "& " : "") + u[m], u = u.join(p > 2 ? ", " : " "), o.replace(SP, `{
/* [wrapped with ` + u + `] */
`);
      }
      function A$(o) {
        return Ce(o) || Ii(o) || !!(_y && o && o[_y]);
      }
      function wn(o, u) {
        var p = typeof o;
        return u = u ?? q, !!u && (p == "number" || p != "symbol" && NP.test(o)) && o > -1 && o % 1 == 0 && o < u;
      }
      function Wt(o, u, p) {
        if (!pt(p))
          return !1;
        var m = typeof u;
        return (m == "number" ? Xt(p) && wn(u, p.length) : m == "string" && u in p) ? Wr(p[u], o) : !1;
      }
      function xd(o, u) {
        if (Ce(o))
          return !1;
        var p = typeof o;
        return p == "number" || p == "symbol" || p == "boolean" || o == null || sr(o) ? !0 : wP.test(o) || !xP.test(o) || u != null && o in Qe(u);
      }
      function S$(o) {
        var u = typeof o;
        return u == "string" || u == "number" || u == "symbol" || u == "boolean" ? o !== "__proto__" : o === null;
      }
      function wd(o) {
        var u = Zu(o), p = T[u];
        if (typeof p != "function" || !(u in Be.prototype))
          return !1;
        if (o === p)
          return !0;
        var m = yd(p);
        return !!m && o === m[0];
      }
      function P$(o) {
        return !!my && my in o;
      }
      var E$ = Eu ? _n : Ld;
      function qo(o) {
        var u = o && o.constructor, p = typeof u == "function" && u.prototype || pa;
        return o === p;
      }
      function mm(o) {
        return o === o && !pt(o);
      }
      function bm(o, u) {
        return function(p) {
          return p == null ? !1 : p[o] === u && (u !== r || o in Qe(p));
        };
      }
      function T$(o) {
        var u = nc(o, function(m) {
          return p.size === f && p.clear(), m;
        }), p = u.cache;
        return u;
      }
      function $$(o, u) {
        var p = o[1], m = u[1], P = p | m, $ = P < (w | A | C), I = m == C && p == S || m == C && p == M && o[7].length <= u[8] || m == (C | M) && u[7].length <= u[8] && p == S;
        if (!($ || I))
          return o;
        m & w && (o[2] = u[2], P |= p & w ? 0 : O);
        var R = u[3];
        if (R) {
          var W = o[3];
          o[3] = W ? tm(W, R, u[4]) : R, o[4] = W ? Zn(o[3], d) : u[4];
        }
        return R = u[5], R && (W = o[5], o[5] = W ? rm(W, R, u[6]) : R, o[6] = W ? Zn(o[5], d) : u[6]), R = u[7], R && (o[7] = R), m & C && (o[8] = o[8] == null ? u[8] : Nt(o[8], u[8])), o[9] == null && (o[9] = u[9]), o[0] = u[0], o[1] = P, o;
      }
      function C$(o) {
        var u = [];
        if (o != null)
          for (var p in Qe(o))
            u.push(p);
        return u;
      }
      function M$(o) {
        return $u.call(o);
      }
      function xm(o, u, p) {
        return u = _t(u === r ? o.length - 1 : u, 0), function() {
          for (var m = arguments, P = -1, $ = _t(m.length - u, 0), I = K($); ++P < $; )
            I[P] = m[u + P];
          P = -1;
          for (var R = K(u + 1); ++P < u; )
            R[P] = m[P];
          return R[u] = p(I), ir(o, this, R);
        };
      }
      function wm(o, u) {
        return u.length < 2 ? o : $i(o, Ar(u, 0, -1));
      }
      function I$(o, u) {
        for (var p = o.length, m = Nt(u.length, p), P = Yt(o); m--; ) {
          var $ = u[m];
          o[m] = wn($, p) ? P[$] : r;
        }
        return o;
      }
      function _d(o, u) {
        if (!(u === "constructor" && typeof o[u] == "function") && u != "__proto__")
          return o[u];
      }
      var _m = Am(Gy), Ko = KE || function(o, u) {
        return kt.setTimeout(o, u);
      }, Od = Am(t$);
      function Om(o, u, p) {
        var m = u + "";
        return Od(o, O$(m, k$(x$(m), p)));
      }
      function Am(o) {
        var u = 0, p = 0;
        return function() {
          var m = ZE(), P = U - (m - p);
          if (p = m, P > 0) {
            if (++u >= N)
              return arguments[0];
          } else
            u = 0;
          return o.apply(r, arguments);
        };
      }
      function Qu(o, u) {
        var p = -1, m = o.length, P = m - 1;
        for (u = u === r ? m : u; ++p < u; ) {
          var $ = ad(p, P), I = o[$];
          o[$] = o[p], o[p] = I;
        }
        return o.length = u, o;
      }
      var Sm = T$(function(o) {
        var u = [];
        return o.charCodeAt(0) === 46 && u.push(""), o.replace(_P, function(p, m, P, $) {
          u.push(P ? $.replace(CP, "$1") : m || p);
        }), u;
      });
      function rn(o) {
        if (typeof o == "string" || sr(o))
          return o;
        var u = o + "";
        return u == "0" && 1 / o == -Z ? "-0" : u;
      }
      function Mi(o) {
        if (o != null) {
          try {
            return Tu.call(o);
          } catch {
          }
          try {
            return o + "";
          } catch {
          }
        }
        return "";
      }
      function k$(o, u) {
        return xr(he, function(p) {
          var m = "_." + p[0];
          u & p[1] && !Ou(o, m) && o.push(m);
        }), o.sort();
      }
      function Pm(o) {
        if (o instanceof Be)
          return o.clone();
        var u = new _r(o.__wrapped__, o.__chain__);
        return u.__actions__ = Yt(o.__actions__), u.__index__ = o.__index__, u.__values__ = o.__values__, u;
      }
      function j$(o, u, p) {
        (p ? Wt(o, u, p) : u === r) ? u = 1 : u = _t(Ie(u), 0);
        var m = o == null ? 0 : o.length;
        if (!m || u < 1)
          return [];
        for (var P = 0, $ = 0, I = K(Ru(m / u)); P < m; )
          I[$++] = Ar(o, P, P += u);
        return I;
      }
      function R$(o) {
        for (var u = -1, p = o == null ? 0 : o.length, m = 0, P = []; ++u < p; ) {
          var $ = o[u];
          $ && (P[m++] = $);
        }
        return P;
      }
      function N$() {
        var o = arguments.length;
        if (!o)
          return [];
        for (var u = K(o - 1), p = arguments[0], m = o; m--; )
          u[m - 1] = arguments[m];
        return Xn(Ce(p) ? Yt(p) : [p], jt(u, 1));
      }
      var D$ = Ne(function(o, u) {
        return yt(o) ? Wo(o, jt(u, 1, yt, !0)) : [];
      }), L$ = Ne(function(o, u) {
        var p = Sr(u);
        return yt(p) && (p = r), yt(o) ? Wo(o, jt(u, 1, yt, !0), _e(p, 2)) : [];
      }), B$ = Ne(function(o, u) {
        var p = Sr(u);
        return yt(p) && (p = r), yt(o) ? Wo(o, jt(u, 1, yt, !0), r, p) : [];
      });
      function F$(o, u, p) {
        var m = o == null ? 0 : o.length;
        return m ? (u = p || u === r ? 1 : Ie(u), Ar(o, u < 0 ? 0 : u, m)) : [];
      }
      function W$(o, u, p) {
        var m = o == null ? 0 : o.length;
        return m ? (u = p || u === r ? 1 : Ie(u), u = m - u, Ar(o, 0, u < 0 ? 0 : u)) : [];
      }
      function z$(o, u) {
        return o && o.length ? Gu(o, _e(u, 3), !0, !0) : [];
      }
      function U$(o, u) {
        return o && o.length ? Gu(o, _e(u, 3), !0) : [];
      }
      function H$(o, u, p, m) {
        var P = o == null ? 0 : o.length;
        return P ? (p && typeof p != "number" && Wt(o, u, p) && (p = 0, m = P), NT(o, u, p, m)) : [];
      }
      function Em(o, u, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = p == null ? 0 : Ie(p);
        return P < 0 && (P = _t(m + P, 0)), Au(o, _e(u, 3), P);
      }
      function Tm(o, u, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = m - 1;
        return p !== r && (P = Ie(p), P = p < 0 ? _t(m + P, 0) : Nt(P, m - 1)), Au(o, _e(u, 3), P, !0);
      }
      function $m(o) {
        var u = o == null ? 0 : o.length;
        return u ? jt(o, 1) : [];
      }
      function G$(o) {
        var u = o == null ? 0 : o.length;
        return u ? jt(o, Z) : [];
      }
      function q$(o, u) {
        var p = o == null ? 0 : o.length;
        return p ? (u = u === r ? 1 : Ie(u), jt(o, u)) : [];
      }
      function K$(o) {
        for (var u = -1, p = o == null ? 0 : o.length, m = {}; ++u < p; ) {
          var P = o[u];
          m[P[0]] = P[1];
        }
        return m;
      }
      function Cm(o) {
        return o && o.length ? o[0] : r;
      }
      function V$(o, u, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = p == null ? 0 : Ie(p);
        return P < 0 && (P = _t(m + P, 0)), la(o, u, P);
      }
      function Y$(o) {
        var u = o == null ? 0 : o.length;
        return u ? Ar(o, 0, -1) : [];
      }
      var X$ = Ne(function(o) {
        var u = ft(o, ld);
        return u.length && u[0] === o[0] ? ed(u) : [];
      }), Z$ = Ne(function(o) {
        var u = Sr(o), p = ft(o, ld);
        return u === Sr(p) ? u = r : p.pop(), p.length && p[0] === o[0] ? ed(p, _e(u, 2)) : [];
      }), J$ = Ne(function(o) {
        var u = Sr(o), p = ft(o, ld);
        return u = typeof u == "function" ? u : r, u && p.pop(), p.length && p[0] === o[0] ? ed(p, r, u) : [];
      });
      function Q$(o, u) {
        return o == null ? "" : YE.call(o, u);
      }
      function Sr(o) {
        var u = o == null ? 0 : o.length;
        return u ? o[u - 1] : r;
      }
      function eC(o, u, p) {
        var m = o == null ? 0 : o.length;
        if (!m)
          return -1;
        var P = m;
        return p !== r && (P = Ie(p), P = P < 0 ? _t(m + P, 0) : Nt(P, m - 1)), u === u ? kE(o, u, P) : Au(o, ly, P, !0);
      }
      function tC(o, u) {
        return o && o.length ? Wy(o, Ie(u)) : r;
      }
      var rC = Ne(Mm);
      function Mm(o, u) {
        return o && o.length && u && u.length ? id(o, u) : o;
      }
      function nC(o, u, p) {
        return o && o.length && u && u.length ? id(o, u, _e(p, 2)) : o;
      }
      function iC(o, u, p) {
        return o && o.length && u && u.length ? id(o, u, r, p) : o;
      }
      var aC = xn(function(o, u) {
        var p = o == null ? 0 : o.length, m = Xf(o, u);
        return Hy(o, ft(u, function(P) {
          return wn(P, p) ? +P : P;
        }).sort(em)), m;
      });
      function oC(o, u) {
        var p = [];
        if (!(o && o.length))
          return p;
        var m = -1, P = [], $ = o.length;
        for (u = _e(u, 3); ++m < $; ) {
          var I = o[m];
          u(I, m, o) && (p.push(I), P.push(m));
        }
        return Hy(o, P), p;
      }
      function Ad(o) {
        return o == null ? o : QE.call(o);
      }
      function sC(o, u, p) {
        var m = o == null ? 0 : o.length;
        return m ? (p && typeof p != "number" && Wt(o, u, p) ? (u = 0, p = m) : (u = u == null ? 0 : Ie(u), p = p === r ? m : Ie(p)), Ar(o, u, p)) : [];
      }
      function uC(o, u) {
        return Hu(o, u);
      }
      function cC(o, u, p) {
        return sd(o, u, _e(p, 2));
      }
      function lC(o, u) {
        var p = o == null ? 0 : o.length;
        if (p) {
          var m = Hu(o, u);
          if (m < p && Wr(o[m], u))
            return m;
        }
        return -1;
      }
      function fC(o, u) {
        return Hu(o, u, !0);
      }
      function dC(o, u, p) {
        return sd(o, u, _e(p, 2), !0);
      }
      function hC(o, u) {
        var p = o == null ? 0 : o.length;
        if (p) {
          var m = Hu(o, u, !0) - 1;
          if (Wr(o[m], u))
            return m;
        }
        return -1;
      }
      function pC(o) {
        return o && o.length ? qy(o) : [];
      }
      function vC(o, u) {
        return o && o.length ? qy(o, _e(u, 2)) : [];
      }
      function gC(o) {
        var u = o == null ? 0 : o.length;
        return u ? Ar(o, 1, u) : [];
      }
      function yC(o, u, p) {
        return o && o.length ? (u = p || u === r ? 1 : Ie(u), Ar(o, 0, u < 0 ? 0 : u)) : [];
      }
      function mC(o, u, p) {
        var m = o == null ? 0 : o.length;
        return m ? (u = p || u === r ? 1 : Ie(u), u = m - u, Ar(o, u < 0 ? 0 : u, m)) : [];
      }
      function bC(o, u) {
        return o && o.length ? Gu(o, _e(u, 3), !1, !0) : [];
      }
      function xC(o, u) {
        return o && o.length ? Gu(o, _e(u, 3)) : [];
      }
      var wC = Ne(function(o) {
        return ei(jt(o, 1, yt, !0));
      }), _C = Ne(function(o) {
        var u = Sr(o);
        return yt(u) && (u = r), ei(jt(o, 1, yt, !0), _e(u, 2));
      }), OC = Ne(function(o) {
        var u = Sr(o);
        return u = typeof u == "function" ? u : r, ei(jt(o, 1, yt, !0), r, u);
      });
      function AC(o) {
        return o && o.length ? ei(o) : [];
      }
      function SC(o, u) {
        return o && o.length ? ei(o, _e(u, 2)) : [];
      }
      function PC(o, u) {
        return u = typeof u == "function" ? u : r, o && o.length ? ei(o, r, u) : [];
      }
      function Sd(o) {
        if (!(o && o.length))
          return [];
        var u = 0;
        return o = Yn(o, function(p) {
          if (yt(p))
            return u = _t(p.length, u), !0;
        }), zf(u, function(p) {
          return ft(o, Bf(p));
        });
      }
      function Im(o, u) {
        if (!(o && o.length))
          return [];
        var p = Sd(o);
        return u == null ? p : ft(p, function(m) {
          return ir(u, r, m);
        });
      }
      var EC = Ne(function(o, u) {
        return yt(o) ? Wo(o, u) : [];
      }), TC = Ne(function(o) {
        return cd(Yn(o, yt));
      }), $C = Ne(function(o) {
        var u = Sr(o);
        return yt(u) && (u = r), cd(Yn(o, yt), _e(u, 2));
      }), CC = Ne(function(o) {
        var u = Sr(o);
        return u = typeof u == "function" ? u : r, cd(Yn(o, yt), r, u);
      }), MC = Ne(Sd);
      function IC(o, u) {
        return Xy(o || [], u || [], Fo);
      }
      function kC(o, u) {
        return Xy(o || [], u || [], Ho);
      }
      var jC = Ne(function(o) {
        var u = o.length, p = u > 1 ? o[u - 1] : r;
        return p = typeof p == "function" ? (o.pop(), p) : r, Im(o, p);
      });
      function km(o) {
        var u = T(o);
        return u.__chain__ = !0, u;
      }
      function RC(o, u) {
        return u(o), o;
      }
      function ec(o, u) {
        return u(o);
      }
      var NC = xn(function(o) {
        var u = o.length, p = u ? o[0] : 0, m = this.__wrapped__, P = function($) {
          return Xf($, o);
        };
        return u > 1 || this.__actions__.length || !(m instanceof Be) || !wn(p) ? this.thru(P) : (m = m.slice(p, +p + (u ? 1 : 0)), m.__actions__.push({
          func: ec,
          args: [P],
          thisArg: r
        }), new _r(m, this.__chain__).thru(function($) {
          return u && !$.length && $.push(r), $;
        }));
      });
      function DC() {
        return km(this);
      }
      function LC() {
        return new _r(this.value(), this.__chain__);
      }
      function BC() {
        this.__values__ === r && (this.__values__ = Km(this.value()));
        var o = this.__index__ >= this.__values__.length, u = o ? r : this.__values__[this.__index__++];
        return { done: o, value: u };
      }
      function FC() {
        return this;
      }
      function WC(o) {
        for (var u, p = this; p instanceof Bu; ) {
          var m = Pm(p);
          m.__index__ = 0, m.__values__ = r, u ? P.__wrapped__ = m : u = m;
          var P = m;
          p = p.__wrapped__;
        }
        return P.__wrapped__ = o, u;
      }
      function zC() {
        var o = this.__wrapped__;
        if (o instanceof Be) {
          var u = o;
          return this.__actions__.length && (u = new Be(this)), u = u.reverse(), u.__actions__.push({
            func: ec,
            args: [Ad],
            thisArg: r
          }), new _r(u, this.__chain__);
        }
        return this.thru(Ad);
      }
      function UC() {
        return Yy(this.__wrapped__, this.__actions__);
      }
      var HC = qu(function(o, u, p) {
        Xe.call(o, p) ? ++o[p] : mn(o, p, 1);
      });
      function GC(o, u, p) {
        var m = Ce(o) ? uy : RT;
        return p && Wt(o, u, p) && (u = r), m(o, _e(u, 3));
      }
      function qC(o, u) {
        var p = Ce(o) ? Yn : Iy;
        return p(o, _e(u, 3));
      }
      var KC = om(Em), VC = om(Tm);
      function YC(o, u) {
        return jt(tc(o, u), 1);
      }
      function XC(o, u) {
        return jt(tc(o, u), Z);
      }
      function ZC(o, u, p) {
        return p = p === r ? 1 : Ie(p), jt(tc(o, u), p);
      }
      function jm(o, u) {
        var p = Ce(o) ? xr : Qn;
        return p(o, _e(u, 3));
      }
      function Rm(o, u) {
        var p = Ce(o) ? gE : My;
        return p(o, _e(u, 3));
      }
      var JC = qu(function(o, u, p) {
        Xe.call(o, p) ? o[p].push(u) : mn(o, p, [u]);
      });
      function QC(o, u, p, m) {
        o = Xt(o) ? o : _a(o), p = p && !m ? Ie(p) : 0;
        var P = o.length;
        return p < 0 && (p = _t(P + p, 0)), oc(o) ? p <= P && o.indexOf(u, p) > -1 : !!P && la(o, u, p) > -1;
      }
      var eM = Ne(function(o, u, p) {
        var m = -1, P = typeof u == "function", $ = Xt(o) ? K(o.length) : [];
        return Qn(o, function(I) {
          $[++m] = P ? ir(u, I, p) : zo(I, u, p);
        }), $;
      }), tM = qu(function(o, u, p) {
        mn(o, p, u);
      });
      function tc(o, u) {
        var p = Ce(o) ? ft : Ly;
        return p(o, _e(u, 3));
      }
      function rM(o, u, p, m) {
        return o == null ? [] : (Ce(u) || (u = u == null ? [] : [u]), p = m ? r : p, Ce(p) || (p = p == null ? [] : [p]), zy(o, u, p));
      }
      var nM = qu(function(o, u, p) {
        o[p ? 0 : 1].push(u);
      }, function() {
        return [[], []];
      });
      function iM(o, u, p) {
        var m = Ce(o) ? Df : dy, P = arguments.length < 3;
        return m(o, _e(u, 4), p, P, Qn);
      }
      function aM(o, u, p) {
        var m = Ce(o) ? yE : dy, P = arguments.length < 3;
        return m(o, _e(u, 4), p, P, My);
      }
      function oM(o, u) {
        var p = Ce(o) ? Yn : Iy;
        return p(o, ic(_e(u, 3)));
      }
      function sM(o) {
        var u = Ce(o) ? Ey : QT;
        return u(o);
      }
      function uM(o, u, p) {
        (p ? Wt(o, u, p) : u === r) ? u = 1 : u = Ie(u);
        var m = Ce(o) ? CT : e$;
        return m(o, u);
      }
      function cM(o) {
        var u = Ce(o) ? MT : r$;
        return u(o);
      }
      function lM(o) {
        if (o == null)
          return 0;
        if (Xt(o))
          return oc(o) ? da(o) : o.length;
        var u = Dt(o);
        return u == be || u == gt ? o.size : rd(o).length;
      }
      function fM(o, u, p) {
        var m = Ce(o) ? Lf : n$;
        return p && Wt(o, u, p) && (u = r), m(o, _e(u, 3));
      }
      var dM = Ne(function(o, u) {
        if (o == null)
          return [];
        var p = u.length;
        return p > 1 && Wt(o, u[0], u[1]) ? u = [] : p > 2 && Wt(u[0], u[1], u[2]) && (u = [u[0]]), zy(o, jt(u, 1), []);
      }), rc = qE || function() {
        return kt.Date.now();
      };
      function hM(o, u) {
        if (typeof u != "function")
          throw new wr(s);
        return o = Ie(o), function() {
          if (--o < 1)
            return u.apply(this, arguments);
        };
      }
      function Nm(o, u, p) {
        return u = p ? r : u, u = o && u == null ? o.length : u, bn(o, C, r, r, r, r, u);
      }
      function Dm(o, u) {
        var p;
        if (typeof u != "function")
          throw new wr(s);
        return o = Ie(o), function() {
          return --o > 0 && (p = u.apply(this, arguments)), o <= 1 && (u = r), p;
        };
      }
      var Pd = Ne(function(o, u, p) {
        var m = w;
        if (p.length) {
          var P = Zn(p, xa(Pd));
          m |= b;
        }
        return bn(o, m, u, p, P);
      }), Lm = Ne(function(o, u, p) {
        var m = w | A;
        if (p.length) {
          var P = Zn(p, xa(Lm));
          m |= b;
        }
        return bn(u, m, o, p, P);
      });
      function Bm(o, u, p) {
        u = p ? r : u;
        var m = bn(o, S, r, r, r, r, r, u);
        return m.placeholder = Bm.placeholder, m;
      }
      function Fm(o, u, p) {
        u = p ? r : u;
        var m = bn(o, _, r, r, r, r, r, u);
        return m.placeholder = Fm.placeholder, m;
      }
      function Wm(o, u, p) {
        var m, P, $, I, R, W, ee = 0, te = !1, ie = !1, le = !0;
        if (typeof o != "function")
          throw new wr(s);
        u = Pr(u) || 0, pt(p) && (te = !!p.leading, ie = "maxWait" in p, $ = ie ? _t(Pr(p.maxWait) || 0, u) : $, le = "trailing" in p ? !!p.trailing : le);
        function ve(mt) {
          var zr = m, An = P;
          return m = P = r, ee = mt, I = o.apply(An, zr), I;
        }
        function Oe(mt) {
          return ee = mt, R = Ko(De, u), te ? ve(mt) : I;
        }
        function Re(mt) {
          var zr = mt - W, An = mt - ee, ob = u - zr;
          return ie ? Nt(ob, $ - An) : ob;
        }
        function Ae(mt) {
          var zr = mt - W, An = mt - ee;
          return W === r || zr >= u || zr < 0 || ie && An >= $;
        }
        function De() {
          var mt = rc();
          if (Ae(mt))
            return Fe(mt);
          R = Ko(De, Re(mt));
        }
        function Fe(mt) {
          return R = r, le && m ? ve(mt) : (m = P = r, I);
        }
        function ur() {
          R !== r && Zy(R), ee = 0, m = W = P = R = r;
        }
        function zt() {
          return R === r ? I : Fe(rc());
        }
        function cr() {
          var mt = rc(), zr = Ae(mt);
          if (m = arguments, P = this, W = mt, zr) {
            if (R === r)
              return Oe(W);
            if (ie)
              return Zy(R), R = Ko(De, u), ve(W);
          }
          return R === r && (R = Ko(De, u)), I;
        }
        return cr.cancel = ur, cr.flush = zt, cr;
      }
      var pM = Ne(function(o, u) {
        return Cy(o, 1, u);
      }), vM = Ne(function(o, u, p) {
        return Cy(o, Pr(u) || 0, p);
      });
      function gM(o) {
        return bn(o, F);
      }
      function nc(o, u) {
        if (typeof o != "function" || u != null && typeof u != "function")
          throw new wr(s);
        var p = function() {
          var m = arguments, P = u ? u.apply(this, m) : m[0], $ = p.cache;
          if ($.has(P))
            return $.get(P);
          var I = o.apply(this, m);
          return p.cache = $.set(P, I) || $, I;
        };
        return p.cache = new (nc.Cache || yn)(), p;
      }
      nc.Cache = yn;
      function ic(o) {
        if (typeof o != "function")
          throw new wr(s);
        return function() {
          var u = arguments;
          switch (u.length) {
            case 0:
              return !o.call(this);
            case 1:
              return !o.call(this, u[0]);
            case 2:
              return !o.call(this, u[0], u[1]);
            case 3:
              return !o.call(this, u[0], u[1], u[2]);
          }
          return !o.apply(this, u);
        };
      }
      function yM(o) {
        return Dm(2, o);
      }
      var mM = i$(function(o, u) {
        u = u.length == 1 && Ce(u[0]) ? ft(u[0], ar(_e())) : ft(jt(u, 1), ar(_e()));
        var p = u.length;
        return Ne(function(m) {
          for (var P = -1, $ = Nt(m.length, p); ++P < $; )
            m[P] = u[P].call(this, m[P]);
          return ir(o, this, m);
        });
      }), Ed = Ne(function(o, u) {
        var p = Zn(u, xa(Ed));
        return bn(o, b, r, u, p);
      }), zm = Ne(function(o, u) {
        var p = Zn(u, xa(zm));
        return bn(o, E, r, u, p);
      }), bM = xn(function(o, u) {
        return bn(o, M, r, r, r, u);
      });
      function xM(o, u) {
        if (typeof o != "function")
          throw new wr(s);
        return u = u === r ? u : Ie(u), Ne(o, u);
      }
      function wM(o, u) {
        if (typeof o != "function")
          throw new wr(s);
        return u = u == null ? 0 : _t(Ie(u), 0), Ne(function(p) {
          var m = p[u], P = ri(p, 0, u);
          return m && Xn(P, m), ir(o, this, P);
        });
      }
      function _M(o, u, p) {
        var m = !0, P = !0;
        if (typeof o != "function")
          throw new wr(s);
        return pt(p) && (m = "leading" in p ? !!p.leading : m, P = "trailing" in p ? !!p.trailing : P), Wm(o, u, {
          leading: m,
          maxWait: u,
          trailing: P
        });
      }
      function OM(o) {
        return Nm(o, 1);
      }
      function AM(o, u) {
        return Ed(fd(u), o);
      }
      function SM() {
        if (!arguments.length)
          return [];
        var o = arguments[0];
        return Ce(o) ? o : [o];
      }
      function PM(o) {
        return Or(o, g);
      }
      function EM(o, u) {
        return u = typeof u == "function" ? u : r, Or(o, g, u);
      }
      function TM(o) {
        return Or(o, h | g);
      }
      function $M(o, u) {
        return u = typeof u == "function" ? u : r, Or(o, h | g, u);
      }
      function CM(o, u) {
        return u == null || $y(o, u, $t(u));
      }
      function Wr(o, u) {
        return o === u || o !== o && u !== u;
      }
      var MM = Xu(Qf), IM = Xu(function(o, u) {
        return o >= u;
      }), Ii = Ry(/* @__PURE__ */ function() {
        return arguments;
      }()) ? Ry : function(o) {
        return vt(o) && Xe.call(o, "callee") && !wy.call(o, "callee");
      }, Ce = K.isArray, kM = ry ? ar(ry) : WT;
      function Xt(o) {
        return o != null && ac(o.length) && !_n(o);
      }
      function yt(o) {
        return vt(o) && Xt(o);
      }
      function jM(o) {
        return o === !0 || o === !1 || vt(o) && Ft(o) == we;
      }
      var ni = VE || Ld, RM = ny ? ar(ny) : zT;
      function NM(o) {
        return vt(o) && o.nodeType === 1 && !Vo(o);
      }
      function DM(o) {
        if (o == null)
          return !0;
        if (Xt(o) && (Ce(o) || typeof o == "string" || typeof o.splice == "function" || ni(o) || wa(o) || Ii(o)))
          return !o.length;
        var u = Dt(o);
        if (u == be || u == gt)
          return !o.size;
        if (qo(o))
          return !rd(o).length;
        for (var p in o)
          if (Xe.call(o, p))
            return !1;
        return !0;
      }
      function LM(o, u) {
        return Uo(o, u);
      }
      function BM(o, u, p) {
        p = typeof p == "function" ? p : r;
        var m = p ? p(o, u) : r;
        return m === r ? Uo(o, u, r, p) : !!m;
      }
      function Td(o) {
        if (!vt(o))
          return !1;
        var u = Ft(o);
        return u == pe || u == ue || typeof o.message == "string" && typeof o.name == "string" && !Vo(o);
      }
      function FM(o) {
        return typeof o == "number" && Oy(o);
      }
      function _n(o) {
        if (!pt(o))
          return !1;
        var u = Ft(o);
        return u == j || u == Ee || u == ye || u == Lr;
      }
      function Um(o) {
        return typeof o == "number" && o == Ie(o);
      }
      function ac(o) {
        return typeof o == "number" && o > -1 && o % 1 == 0 && o <= q;
      }
      function pt(o) {
        var u = typeof o;
        return o != null && (u == "object" || u == "function");
      }
      function vt(o) {
        return o != null && typeof o == "object";
      }
      var Hm = iy ? ar(iy) : HT;
      function WM(o, u) {
        return o === u || td(o, u, md(u));
      }
      function zM(o, u, p) {
        return p = typeof p == "function" ? p : r, td(o, u, md(u), p);
      }
      function UM(o) {
        return Gm(o) && o != +o;
      }
      function HM(o) {
        if (E$(o))
          throw new $e(a);
        return Ny(o);
      }
      function GM(o) {
        return o === null;
      }
      function qM(o) {
        return o == null;
      }
      function Gm(o) {
        return typeof o == "number" || vt(o) && Ft(o) == We;
      }
      function Vo(o) {
        if (!vt(o) || Ft(o) != at)
          return !1;
        var u = Iu(o);
        if (u === null)
          return !0;
        var p = Xe.call(u, "constructor") && u.constructor;
        return typeof p == "function" && p instanceof p && Tu.call(p) == zE;
      }
      var $d = ay ? ar(ay) : GT;
      function KM(o) {
        return Um(o) && o >= -q && o <= q;
      }
      var qm = oy ? ar(oy) : qT;
      function oc(o) {
        return typeof o == "string" || !Ce(o) && vt(o) && Ft(o) == vn;
      }
      function sr(o) {
        return typeof o == "symbol" || vt(o) && Ft(o) == Kn;
      }
      var wa = sy ? ar(sy) : KT;
      function VM(o) {
        return o === r;
      }
      function YM(o) {
        return vt(o) && Dt(o) == Vn;
      }
      function XM(o) {
        return vt(o) && Ft(o) == bu;
      }
      var ZM = Xu(nd), JM = Xu(function(o, u) {
        return o <= u;
      });
      function Km(o) {
        if (!o)
          return [];
        if (Xt(o))
          return oc(o) ? Br(o) : Yt(o);
        if (Ro && o[Ro])
          return CE(o[Ro]());
        var u = Dt(o), p = u == be ? Hf : u == gt ? Su : _a;
        return p(o);
      }
      function On(o) {
        if (!o)
          return o === 0 ? o : 0;
        if (o = Pr(o), o === Z || o === -Z) {
          var u = o < 0 ? -1 : 1;
          return u * se;
        }
        return o === o ? o : 0;
      }
      function Ie(o) {
        var u = On(o), p = u % 1;
        return u === u ? p ? u - p : u : 0;
      }
      function Vm(o) {
        return o ? Ti(Ie(o), 0, Y) : 0;
      }
      function Pr(o) {
        if (typeof o == "number")
          return o;
        if (sr(o))
          return G;
        if (pt(o)) {
          var u = typeof o.valueOf == "function" ? o.valueOf() : o;
          o = pt(u) ? u + "" : u;
        }
        if (typeof o != "string")
          return o === 0 ? o : +o;
        o = hy(o);
        var p = kP.test(o);
        return p || RP.test(o) ? hE(o.slice(2), p ? 2 : 8) : IP.test(o) ? G : +o;
      }
      function Ym(o) {
        return tn(o, Zt(o));
      }
      function QM(o) {
        return o ? Ti(Ie(o), -q, q) : o === 0 ? o : 0;
      }
      function Ge(o) {
        return o == null ? "" : or(o);
      }
      var eI = ma(function(o, u) {
        if (qo(u) || Xt(u)) {
          tn(u, $t(u), o);
          return;
        }
        for (var p in u)
          Xe.call(u, p) && Fo(o, p, u[p]);
      }), Xm = ma(function(o, u) {
        tn(u, Zt(u), o);
      }), sc = ma(function(o, u, p, m) {
        tn(u, Zt(u), o, m);
      }), tI = ma(function(o, u, p, m) {
        tn(u, $t(u), o, m);
      }), rI = xn(Xf);
      function nI(o, u) {
        var p = ya(o);
        return u == null ? p : Ty(p, u);
      }
      var iI = Ne(function(o, u) {
        o = Qe(o);
        var p = -1, m = u.length, P = m > 2 ? u[2] : r;
        for (P && Wt(u[0], u[1], P) && (m = 1); ++p < m; )
          for (var $ = u[p], I = Zt($), R = -1, W = I.length; ++R < W; ) {
            var ee = I[R], te = o[ee];
            (te === r || Wr(te, pa[ee]) && !Xe.call(o, ee)) && (o[ee] = $[ee]);
          }
        return o;
      }), aI = Ne(function(o) {
        return o.push(r, hm), ir(Zm, r, o);
      });
      function oI(o, u) {
        return cy(o, _e(u, 3), en);
      }
      function sI(o, u) {
        return cy(o, _e(u, 3), Jf);
      }
      function uI(o, u) {
        return o == null ? o : Zf(o, _e(u, 3), Zt);
      }
      function cI(o, u) {
        return o == null ? o : ky(o, _e(u, 3), Zt);
      }
      function lI(o, u) {
        return o && en(o, _e(u, 3));
      }
      function fI(o, u) {
        return o && Jf(o, _e(u, 3));
      }
      function dI(o) {
        return o == null ? [] : zu(o, $t(o));
      }
      function hI(o) {
        return o == null ? [] : zu(o, Zt(o));
      }
      function Cd(o, u, p) {
        var m = o == null ? r : $i(o, u);
        return m === r ? p : m;
      }
      function pI(o, u) {
        return o != null && gm(o, u, DT);
      }
      function Md(o, u) {
        return o != null && gm(o, u, LT);
      }
      var vI = um(function(o, u, p) {
        u != null && typeof u.toString != "function" && (u = $u.call(u)), o[u] = p;
      }, kd(Jt)), gI = um(function(o, u, p) {
        u != null && typeof u.toString != "function" && (u = $u.call(u)), Xe.call(o, u) ? o[u].push(p) : o[u] = [p];
      }, _e), yI = Ne(zo);
      function $t(o) {
        return Xt(o) ? Py(o) : rd(o);
      }
      function Zt(o) {
        return Xt(o) ? Py(o, !0) : VT(o);
      }
      function mI(o, u) {
        var p = {};
        return u = _e(u, 3), en(o, function(m, P, $) {
          mn(p, u(m, P, $), m);
        }), p;
      }
      function bI(o, u) {
        var p = {};
        return u = _e(u, 3), en(o, function(m, P, $) {
          mn(p, P, u(m, P, $));
        }), p;
      }
      var xI = ma(function(o, u, p) {
        Uu(o, u, p);
      }), Zm = ma(function(o, u, p, m) {
        Uu(o, u, p, m);
      }), wI = xn(function(o, u) {
        var p = {};
        if (o == null)
          return p;
        var m = !1;
        u = ft(u, function($) {
          return $ = ti($, o), m || (m = $.length > 1), $;
        }), tn(o, gd(o), p), m && (p = Or(p, h | v | g, v$));
        for (var P = u.length; P--; )
          ud(p, u[P]);
        return p;
      });
      function _I(o, u) {
        return Jm(o, ic(_e(u)));
      }
      var OI = xn(function(o, u) {
        return o == null ? {} : XT(o, u);
      });
      function Jm(o, u) {
        if (o == null)
          return {};
        var p = ft(gd(o), function(m) {
          return [m];
        });
        return u = _e(u), Uy(o, p, function(m, P) {
          return u(m, P[0]);
        });
      }
      function AI(o, u, p) {
        u = ti(u, o);
        var m = -1, P = u.length;
        for (P || (P = 1, o = r); ++m < P; ) {
          var $ = o == null ? r : o[rn(u[m])];
          $ === r && (m = P, $ = p), o = _n($) ? $.call(o) : $;
        }
        return o;
      }
      function SI(o, u, p) {
        return o == null ? o : Ho(o, u, p);
      }
      function PI(o, u, p, m) {
        return m = typeof m == "function" ? m : r, o == null ? o : Ho(o, u, p, m);
      }
      var Qm = fm($t), eb = fm(Zt);
      function EI(o, u, p) {
        var m = Ce(o), P = m || ni(o) || wa(o);
        if (u = _e(u, 4), p == null) {
          var $ = o && o.constructor;
          P ? p = m ? new $() : [] : pt(o) ? p = _n($) ? ya(Iu(o)) : {} : p = {};
        }
        return (P ? xr : en)(o, function(I, R, W) {
          return u(p, I, R, W);
        }), p;
      }
      function TI(o, u) {
        return o == null ? !0 : ud(o, u);
      }
      function $I(o, u, p) {
        return o == null ? o : Vy(o, u, fd(p));
      }
      function CI(o, u, p, m) {
        return m = typeof m == "function" ? m : r, o == null ? o : Vy(o, u, fd(p), m);
      }
      function _a(o) {
        return o == null ? [] : Uf(o, $t(o));
      }
      function MI(o) {
        return o == null ? [] : Uf(o, Zt(o));
      }
      function II(o, u, p) {
        return p === r && (p = u, u = r), p !== r && (p = Pr(p), p = p === p ? p : 0), u !== r && (u = Pr(u), u = u === u ? u : 0), Ti(Pr(o), u, p);
      }
      function kI(o, u, p) {
        return u = On(u), p === r ? (p = u, u = 0) : p = On(p), o = Pr(o), BT(o, u, p);
      }
      function jI(o, u, p) {
        if (p && typeof p != "boolean" && Wt(o, u, p) && (u = p = r), p === r && (typeof u == "boolean" ? (p = u, u = r) : typeof o == "boolean" && (p = o, o = r)), o === r && u === r ? (o = 0, u = 1) : (o = On(o), u === r ? (u = o, o = 0) : u = On(u)), o > u) {
          var m = o;
          o = u, u = m;
        }
        if (p || o % 1 || u % 1) {
          var P = Ay();
          return Nt(o + P * (u - o + dE("1e-" + ((P + "").length - 1))), u);
        }
        return ad(o, u);
      }
      var RI = ba(function(o, u, p) {
        return u = u.toLowerCase(), o + (p ? tb(u) : u);
      });
      function tb(o) {
        return Id(Ge(o).toLowerCase());
      }
      function rb(o) {
        return o = Ge(o), o && o.replace(DP, SE).replace(rE, "");
      }
      function NI(o, u, p) {
        o = Ge(o), u = or(u);
        var m = o.length;
        p = p === r ? m : Ti(Ie(p), 0, m);
        var P = p;
        return p -= u.length, p >= 0 && o.slice(p, P) == u;
      }
      function DI(o) {
        return o = Ge(o), o && yP.test(o) ? o.replace(kg, PE) : o;
      }
      function LI(o) {
        return o = Ge(o), o && OP.test(o) ? o.replace(Ef, "\\$&") : o;
      }
      var BI = ba(function(o, u, p) {
        return o + (p ? "-" : "") + u.toLowerCase();
      }), FI = ba(function(o, u, p) {
        return o + (p ? " " : "") + u.toLowerCase();
      }), WI = am("toLowerCase");
      function zI(o, u, p) {
        o = Ge(o), u = Ie(u);
        var m = u ? da(o) : 0;
        if (!u || m >= u)
          return o;
        var P = (u - m) / 2;
        return Yu(Nu(P), p) + o + Yu(Ru(P), p);
      }
      function UI(o, u, p) {
        o = Ge(o), u = Ie(u);
        var m = u ? da(o) : 0;
        return u && m < u ? o + Yu(u - m, p) : o;
      }
      function HI(o, u, p) {
        o = Ge(o), u = Ie(u);
        var m = u ? da(o) : 0;
        return u && m < u ? Yu(u - m, p) + o : o;
      }
      function GI(o, u, p) {
        return p || u == null ? u = 0 : u && (u = +u), JE(Ge(o).replace(Tf, ""), u || 0);
      }
      function qI(o, u, p) {
        return (p ? Wt(o, u, p) : u === r) ? u = 1 : u = Ie(u), od(Ge(o), u);
      }
      function KI() {
        var o = arguments, u = Ge(o[0]);
        return o.length < 3 ? u : u.replace(o[1], o[2]);
      }
      var VI = ba(function(o, u, p) {
        return o + (p ? "_" : "") + u.toLowerCase();
      });
      function YI(o, u, p) {
        return p && typeof p != "number" && Wt(o, u, p) && (u = p = r), p = p === r ? Y : p >>> 0, p ? (o = Ge(o), o && (typeof u == "string" || u != null && !$d(u)) && (u = or(u), !u && fa(o)) ? ri(Br(o), 0, p) : o.split(u, p)) : [];
      }
      var XI = ba(function(o, u, p) {
        return o + (p ? " " : "") + Id(u);
      });
      function ZI(o, u, p) {
        return o = Ge(o), p = p == null ? 0 : Ti(Ie(p), 0, o.length), u = or(u), o.slice(p, p + u.length) == u;
      }
      function JI(o, u, p) {
        var m = T.templateSettings;
        p && Wt(o, u, p) && (u = r), o = Ge(o), u = sc({}, u, m, dm);
        var P = sc({}, u.imports, m.imports, dm), $ = $t(P), I = Uf(P, $), R, W, ee = 0, te = u.interpolate || xu, ie = "__p += '", le = Gf(
          (u.escape || xu).source + "|" + te.source + "|" + (te === jg ? MP : xu).source + "|" + (u.evaluate || xu).source + "|$",
          "g"
        ), ve = "//# sourceURL=" + (Xe.call(u, "sourceURL") ? (u.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++sE + "]") + `
`;
        o.replace(le, function(Ae, De, Fe, ur, zt, cr) {
          return Fe || (Fe = ur), ie += o.slice(ee, cr).replace(LP, EE), De && (R = !0, ie += `' +
__e(` + De + `) +
'`), zt && (W = !0, ie += `';
` + zt + `;
__p += '`), Fe && (ie += `' +
((__t = (` + Fe + `)) == null ? '' : __t) +
'`), ee = cr + Ae.length, Ae;
        }), ie += `';
`;
        var Oe = Xe.call(u, "variable") && u.variable;
        if (!Oe)
          ie = `with (obj) {
` + ie + `
}
`;
        else if ($P.test(Oe))
          throw new $e(c);
        ie = (W ? ie.replace(hP, "") : ie).replace(pP, "$1").replace(vP, "$1;"), ie = "function(" + (Oe || "obj") + `) {
` + (Oe ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (W ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ie + `return __p
}`;
        var Re = ib(function() {
          return He($, ve + "return " + ie).apply(r, I);
        });
        if (Re.source = ie, Td(Re))
          throw Re;
        return Re;
      }
      function QI(o) {
        return Ge(o).toLowerCase();
      }
      function ek(o) {
        return Ge(o).toUpperCase();
      }
      function tk(o, u, p) {
        if (o = Ge(o), o && (p || u === r))
          return hy(o);
        if (!o || !(u = or(u)))
          return o;
        var m = Br(o), P = Br(u), $ = py(m, P), I = vy(m, P) + 1;
        return ri(m, $, I).join("");
      }
      function rk(o, u, p) {
        if (o = Ge(o), o && (p || u === r))
          return o.slice(0, yy(o) + 1);
        if (!o || !(u = or(u)))
          return o;
        var m = Br(o), P = vy(m, Br(u)) + 1;
        return ri(m, 0, P).join("");
      }
      function nk(o, u, p) {
        if (o = Ge(o), o && (p || u === r))
          return o.replace(Tf, "");
        if (!o || !(u = or(u)))
          return o;
        var m = Br(o), P = py(m, Br(u));
        return ri(m, P).join("");
      }
      function ik(o, u) {
        var p = D, m = B;
        if (pt(u)) {
          var P = "separator" in u ? u.separator : P;
          p = "length" in u ? Ie(u.length) : p, m = "omission" in u ? or(u.omission) : m;
        }
        o = Ge(o);
        var $ = o.length;
        if (fa(o)) {
          var I = Br(o);
          $ = I.length;
        }
        if (p >= $)
          return o;
        var R = p - da(m);
        if (R < 1)
          return m;
        var W = I ? ri(I, 0, R).join("") : o.slice(0, R);
        if (P === r)
          return W + m;
        if (I && (R += W.length - R), $d(P)) {
          if (o.slice(R).search(P)) {
            var ee, te = W;
            for (P.global || (P = Gf(P.source, Ge(Rg.exec(P)) + "g")), P.lastIndex = 0; ee = P.exec(te); )
              var ie = ee.index;
            W = W.slice(0, ie === r ? R : ie);
          }
        } else if (o.indexOf(or(P), R) != R) {
          var le = W.lastIndexOf(P);
          le > -1 && (W = W.slice(0, le));
        }
        return W + m;
      }
      function ak(o) {
        return o = Ge(o), o && gP.test(o) ? o.replace(Ig, jE) : o;
      }
      var ok = ba(function(o, u, p) {
        return o + (p ? " " : "") + u.toUpperCase();
      }), Id = am("toUpperCase");
      function nb(o, u, p) {
        return o = Ge(o), u = p ? r : u, u === r ? $E(o) ? DE(o) : xE(o) : o.match(u) || [];
      }
      var ib = Ne(function(o, u) {
        try {
          return ir(o, r, u);
        } catch (p) {
          return Td(p) ? p : new $e(p);
        }
      }), sk = xn(function(o, u) {
        return xr(u, function(p) {
          p = rn(p), mn(o, p, Pd(o[p], o));
        }), o;
      });
      function uk(o) {
        var u = o == null ? 0 : o.length, p = _e();
        return o = u ? ft(o, function(m) {
          if (typeof m[1] != "function")
            throw new wr(s);
          return [p(m[0]), m[1]];
        }) : [], Ne(function(m) {
          for (var P = -1; ++P < u; ) {
            var $ = o[P];
            if (ir($[0], this, m))
              return ir($[1], this, m);
          }
        });
      }
      function ck(o) {
        return jT(Or(o, h));
      }
      function kd(o) {
        return function() {
          return o;
        };
      }
      function lk(o, u) {
        return o == null || o !== o ? u : o;
      }
      var fk = sm(), dk = sm(!0);
      function Jt(o) {
        return o;
      }
      function jd(o) {
        return Dy(typeof o == "function" ? o : Or(o, h));
      }
      function hk(o) {
        return By(Or(o, h));
      }
      function pk(o, u) {
        return Fy(o, Or(u, h));
      }
      var vk = Ne(function(o, u) {
        return function(p) {
          return zo(p, o, u);
        };
      }), gk = Ne(function(o, u) {
        return function(p) {
          return zo(o, p, u);
        };
      });
      function Rd(o, u, p) {
        var m = $t(u), P = zu(u, m);
        p == null && !(pt(u) && (P.length || !m.length)) && (p = u, u = o, o = this, P = zu(u, $t(u)));
        var $ = !(pt(p) && "chain" in p) || !!p.chain, I = _n(o);
        return xr(P, function(R) {
          var W = u[R];
          o[R] = W, I && (o.prototype[R] = function() {
            var ee = this.__chain__;
            if ($ || ee) {
              var te = o(this.__wrapped__), ie = te.__actions__ = Yt(this.__actions__);
              return ie.push({ func: W, args: arguments, thisArg: o }), te.__chain__ = ee, te;
            }
            return W.apply(o, Xn([this.value()], arguments));
          });
        }), o;
      }
      function yk() {
        return kt._ === this && (kt._ = UE), this;
      }
      function Nd() {
      }
      function mk(o) {
        return o = Ie(o), Ne(function(u) {
          return Wy(u, o);
        });
      }
      var bk = hd(ft), xk = hd(uy), wk = hd(Lf);
      function ab(o) {
        return xd(o) ? Bf(rn(o)) : ZT(o);
      }
      function _k(o) {
        return function(u) {
          return o == null ? r : $i(o, u);
        };
      }
      var Ok = cm(), Ak = cm(!0);
      function Dd() {
        return [];
      }
      function Ld() {
        return !1;
      }
      function Sk() {
        return {};
      }
      function Pk() {
        return "";
      }
      function Ek() {
        return !0;
      }
      function Tk(o, u) {
        if (o = Ie(o), o < 1 || o > q)
          return [];
        var p = Y, m = Nt(o, Y);
        u = _e(u), o -= Y;
        for (var P = zf(m, u); ++p < o; )
          u(p);
        return P;
      }
      function $k(o) {
        return Ce(o) ? ft(o, rn) : sr(o) ? [o] : Yt(Sm(Ge(o)));
      }
      function Ck(o) {
        var u = ++WE;
        return Ge(o) + u;
      }
      var Mk = Vu(function(o, u) {
        return o + u;
      }, 0), Ik = pd("ceil"), kk = Vu(function(o, u) {
        return o / u;
      }, 1), jk = pd("floor");
      function Rk(o) {
        return o && o.length ? Wu(o, Jt, Qf) : r;
      }
      function Nk(o, u) {
        return o && o.length ? Wu(o, _e(u, 2), Qf) : r;
      }
      function Dk(o) {
        return fy(o, Jt);
      }
      function Lk(o, u) {
        return fy(o, _e(u, 2));
      }
      function Bk(o) {
        return o && o.length ? Wu(o, Jt, nd) : r;
      }
      function Fk(o, u) {
        return o && o.length ? Wu(o, _e(u, 2), nd) : r;
      }
      var Wk = Vu(function(o, u) {
        return o * u;
      }, 1), zk = pd("round"), Uk = Vu(function(o, u) {
        return o - u;
      }, 0);
      function Hk(o) {
        return o && o.length ? Wf(o, Jt) : 0;
      }
      function Gk(o, u) {
        return o && o.length ? Wf(o, _e(u, 2)) : 0;
      }
      return T.after = hM, T.ary = Nm, T.assign = eI, T.assignIn = Xm, T.assignInWith = sc, T.assignWith = tI, T.at = rI, T.before = Dm, T.bind = Pd, T.bindAll = sk, T.bindKey = Lm, T.castArray = SM, T.chain = km, T.chunk = j$, T.compact = R$, T.concat = N$, T.cond = uk, T.conforms = ck, T.constant = kd, T.countBy = HC, T.create = nI, T.curry = Bm, T.curryRight = Fm, T.debounce = Wm, T.defaults = iI, T.defaultsDeep = aI, T.defer = pM, T.delay = vM, T.difference = D$, T.differenceBy = L$, T.differenceWith = B$, T.drop = F$, T.dropRight = W$, T.dropRightWhile = z$, T.dropWhile = U$, T.fill = H$, T.filter = qC, T.flatMap = YC, T.flatMapDeep = XC, T.flatMapDepth = ZC, T.flatten = $m, T.flattenDeep = G$, T.flattenDepth = q$, T.flip = gM, T.flow = fk, T.flowRight = dk, T.fromPairs = K$, T.functions = dI, T.functionsIn = hI, T.groupBy = JC, T.initial = Y$, T.intersection = X$, T.intersectionBy = Z$, T.intersectionWith = J$, T.invert = vI, T.invertBy = gI, T.invokeMap = eM, T.iteratee = jd, T.keyBy = tM, T.keys = $t, T.keysIn = Zt, T.map = tc, T.mapKeys = mI, T.mapValues = bI, T.matches = hk, T.matchesProperty = pk, T.memoize = nc, T.merge = xI, T.mergeWith = Zm, T.method = vk, T.methodOf = gk, T.mixin = Rd, T.negate = ic, T.nthArg = mk, T.omit = wI, T.omitBy = _I, T.once = yM, T.orderBy = rM, T.over = bk, T.overArgs = mM, T.overEvery = xk, T.overSome = wk, T.partial = Ed, T.partialRight = zm, T.partition = nM, T.pick = OI, T.pickBy = Jm, T.property = ab, T.propertyOf = _k, T.pull = rC, T.pullAll = Mm, T.pullAllBy = nC, T.pullAllWith = iC, T.pullAt = aC, T.range = Ok, T.rangeRight = Ak, T.rearg = bM, T.reject = oM, T.remove = oC, T.rest = xM, T.reverse = Ad, T.sampleSize = uM, T.set = SI, T.setWith = PI, T.shuffle = cM, T.slice = sC, T.sortBy = dM, T.sortedUniq = pC, T.sortedUniqBy = vC, T.split = YI, T.spread = wM, T.tail = gC, T.take = yC, T.takeRight = mC, T.takeRightWhile = bC, T.takeWhile = xC, T.tap = RC, T.throttle = _M, T.thru = ec, T.toArray = Km, T.toPairs = Qm, T.toPairsIn = eb, T.toPath = $k, T.toPlainObject = Ym, T.transform = EI, T.unary = OM, T.union = wC, T.unionBy = _C, T.unionWith = OC, T.uniq = AC, T.uniqBy = SC, T.uniqWith = PC, T.unset = TI, T.unzip = Sd, T.unzipWith = Im, T.update = $I, T.updateWith = CI, T.values = _a, T.valuesIn = MI, T.without = EC, T.words = nb, T.wrap = AM, T.xor = TC, T.xorBy = $C, T.xorWith = CC, T.zip = MC, T.zipObject = IC, T.zipObjectDeep = kC, T.zipWith = jC, T.entries = Qm, T.entriesIn = eb, T.extend = Xm, T.extendWith = sc, Rd(T, T), T.add = Mk, T.attempt = ib, T.camelCase = RI, T.capitalize = tb, T.ceil = Ik, T.clamp = II, T.clone = PM, T.cloneDeep = TM, T.cloneDeepWith = $M, T.cloneWith = EM, T.conformsTo = CM, T.deburr = rb, T.defaultTo = lk, T.divide = kk, T.endsWith = NI, T.eq = Wr, T.escape = DI, T.escapeRegExp = LI, T.every = GC, T.find = KC, T.findIndex = Em, T.findKey = oI, T.findLast = VC, T.findLastIndex = Tm, T.findLastKey = sI, T.floor = jk, T.forEach = jm, T.forEachRight = Rm, T.forIn = uI, T.forInRight = cI, T.forOwn = lI, T.forOwnRight = fI, T.get = Cd, T.gt = MM, T.gte = IM, T.has = pI, T.hasIn = Md, T.head = Cm, T.identity = Jt, T.includes = QC, T.indexOf = V$, T.inRange = kI, T.invoke = yI, T.isArguments = Ii, T.isArray = Ce, T.isArrayBuffer = kM, T.isArrayLike = Xt, T.isArrayLikeObject = yt, T.isBoolean = jM, T.isBuffer = ni, T.isDate = RM, T.isElement = NM, T.isEmpty = DM, T.isEqual = LM, T.isEqualWith = BM, T.isError = Td, T.isFinite = FM, T.isFunction = _n, T.isInteger = Um, T.isLength = ac, T.isMap = Hm, T.isMatch = WM, T.isMatchWith = zM, T.isNaN = UM, T.isNative = HM, T.isNil = qM, T.isNull = GM, T.isNumber = Gm, T.isObject = pt, T.isObjectLike = vt, T.isPlainObject = Vo, T.isRegExp = $d, T.isSafeInteger = KM, T.isSet = qm, T.isString = oc, T.isSymbol = sr, T.isTypedArray = wa, T.isUndefined = VM, T.isWeakMap = YM, T.isWeakSet = XM, T.join = Q$, T.kebabCase = BI, T.last = Sr, T.lastIndexOf = eC, T.lowerCase = FI, T.lowerFirst = WI, T.lt = ZM, T.lte = JM, T.max = Rk, T.maxBy = Nk, T.mean = Dk, T.meanBy = Lk, T.min = Bk, T.minBy = Fk, T.stubArray = Dd, T.stubFalse = Ld, T.stubObject = Sk, T.stubString = Pk, T.stubTrue = Ek, T.multiply = Wk, T.nth = tC, T.noConflict = yk, T.noop = Nd, T.now = rc, T.pad = zI, T.padEnd = UI, T.padStart = HI, T.parseInt = GI, T.random = jI, T.reduce = iM, T.reduceRight = aM, T.repeat = qI, T.replace = KI, T.result = AI, T.round = zk, T.runInContext = L, T.sample = sM, T.size = lM, T.snakeCase = VI, T.some = fM, T.sortedIndex = uC, T.sortedIndexBy = cC, T.sortedIndexOf = lC, T.sortedLastIndex = fC, T.sortedLastIndexBy = dC, T.sortedLastIndexOf = hC, T.startCase = XI, T.startsWith = ZI, T.subtract = Uk, T.sum = Hk, T.sumBy = Gk, T.template = JI, T.times = Tk, T.toFinite = On, T.toInteger = Ie, T.toLength = Vm, T.toLower = QI, T.toNumber = Pr, T.toSafeInteger = QM, T.toString = Ge, T.toUpper = ek, T.trim = tk, T.trimEnd = rk, T.trimStart = nk, T.truncate = ik, T.unescape = ak, T.uniqueId = Ck, T.upperCase = ok, T.upperFirst = Id, T.each = jm, T.eachRight = Rm, T.first = Cm, Rd(T, function() {
        var o = {};
        return en(T, function(u, p) {
          Xe.call(T.prototype, p) || (o[p] = u);
        }), o;
      }(), { chain: !1 }), T.VERSION = n, xr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(o) {
        T[o].placeholder = T;
      }), xr(["drop", "take"], function(o, u) {
        Be.prototype[o] = function(p) {
          p = p === r ? 1 : _t(Ie(p), 0);
          var m = this.__filtered__ && !u ? new Be(this) : this.clone();
          return m.__filtered__ ? m.__takeCount__ = Nt(p, m.__takeCount__) : m.__views__.push({
            size: Nt(p, Y),
            type: o + (m.__dir__ < 0 ? "Right" : "")
          }), m;
        }, Be.prototype[o + "Right"] = function(p) {
          return this.reverse()[o](p).reverse();
        };
      }), xr(["filter", "map", "takeWhile"], function(o, u) {
        var p = u + 1, m = p == z || p == H;
        Be.prototype[o] = function(P) {
          var $ = this.clone();
          return $.__iteratees__.push({
            iteratee: _e(P, 3),
            type: p
          }), $.__filtered__ = $.__filtered__ || m, $;
        };
      }), xr(["head", "last"], function(o, u) {
        var p = "take" + (u ? "Right" : "");
        Be.prototype[o] = function() {
          return this[p](1).value()[0];
        };
      }), xr(["initial", "tail"], function(o, u) {
        var p = "drop" + (u ? "" : "Right");
        Be.prototype[o] = function() {
          return this.__filtered__ ? new Be(this) : this[p](1);
        };
      }), Be.prototype.compact = function() {
        return this.filter(Jt);
      }, Be.prototype.find = function(o) {
        return this.filter(o).head();
      }, Be.prototype.findLast = function(o) {
        return this.reverse().find(o);
      }, Be.prototype.invokeMap = Ne(function(o, u) {
        return typeof o == "function" ? new Be(this) : this.map(function(p) {
          return zo(p, o, u);
        });
      }), Be.prototype.reject = function(o) {
        return this.filter(ic(_e(o)));
      }, Be.prototype.slice = function(o, u) {
        o = Ie(o);
        var p = this;
        return p.__filtered__ && (o > 0 || u < 0) ? new Be(p) : (o < 0 ? p = p.takeRight(-o) : o && (p = p.drop(o)), u !== r && (u = Ie(u), p = u < 0 ? p.dropRight(-u) : p.take(u - o)), p);
      }, Be.prototype.takeRightWhile = function(o) {
        return this.reverse().takeWhile(o).reverse();
      }, Be.prototype.toArray = function() {
        return this.take(Y);
      }, en(Be.prototype, function(o, u) {
        var p = /^(?:filter|find|map|reject)|While$/.test(u), m = /^(?:head|last)$/.test(u), P = T[m ? "take" + (u == "last" ? "Right" : "") : u], $ = m || /^find/.test(u);
        P && (T.prototype[u] = function() {
          var I = this.__wrapped__, R = m ? [1] : arguments, W = I instanceof Be, ee = R[0], te = W || Ce(I), ie = function(De) {
            var Fe = P.apply(T, Xn([De], R));
            return m && le ? Fe[0] : Fe;
          };
          te && p && typeof ee == "function" && ee.length != 1 && (W = te = !1);
          var le = this.__chain__, ve = !!this.__actions__.length, Oe = $ && !le, Re = W && !ve;
          if (!$ && te) {
            I = Re ? I : new Be(this);
            var Ae = o.apply(I, R);
            return Ae.__actions__.push({ func: ec, args: [ie], thisArg: r }), new _r(Ae, le);
          }
          return Oe && Re ? o.apply(this, R) : (Ae = this.thru(ie), Oe ? m ? Ae.value()[0] : Ae.value() : Ae);
        });
      }), xr(["pop", "push", "shift", "sort", "splice", "unshift"], function(o) {
        var u = Pu[o], p = /^(?:push|sort|unshift)$/.test(o) ? "tap" : "thru", m = /^(?:pop|shift)$/.test(o);
        T.prototype[o] = function() {
          var P = arguments;
          if (m && !this.__chain__) {
            var $ = this.value();
            return u.apply(Ce($) ? $ : [], P);
          }
          return this[p](function(I) {
            return u.apply(Ce(I) ? I : [], P);
          });
        };
      }), en(Be.prototype, function(o, u) {
        var p = T[u];
        if (p) {
          var m = p.name + "";
          Xe.call(ga, m) || (ga[m] = []), ga[m].push({ name: u, func: p });
        }
      }), ga[Ku(r, A).name] = [{
        name: "wrapper",
        func: r
      }], Be.prototype.clone = aT, Be.prototype.reverse = oT, Be.prototype.value = sT, T.prototype.at = NC, T.prototype.chain = DC, T.prototype.commit = LC, T.prototype.next = BC, T.prototype.plant = WC, T.prototype.reverse = zC, T.prototype.toJSON = T.prototype.valueOf = T.prototype.value = UC, T.prototype.first = T.prototype.head, Ro && (T.prototype[Ro] = FC), T;
    }, ha = LE();
    Ai ? ((Ai.exports = ha)._ = ha, jf._ = ha) : kt._ = ha;
  }).call(pr);
})($l, $l.exports);
var Wre = $l.exports;
function zre(e) {
  return e.map((t) => ({ x: t.label, ...t.values }));
}
const Ure = (e) => {
  const t = Wre.cloneDeep(e);
  let r = "", n = 0;
  return t.forEach((i) => {
    delete i.x, Object.entries(i).forEach(
      ([a, s]) => {
        n < s && (n = s, r = a);
      }
    );
  }), r;
}, Hre = ({
  dataConfig: e,
  data: t,
  xAxis: r = { hide: !0 },
  yAxis: n,
  label: i = !1,
  aspect: a
}, s) => {
  const c = Object.keys(e), l = zre(t), f = Math.max(
    ...l.map((v) => cf(`${v.x}`))
  ), d = {
    ...xg(r),
    type: "number",
    dataKey: Ure(l)
  }, h = {
    ...wg(n),
    type: "category",
    dataKey: "x"
  };
  return /* @__PURE__ */ X(Po, { config: e, ref: s, aspect: a, children: /* @__PURE__ */ nt(
    PS,
    {
      layout: "vertical",
      accessibilityLayer: !0,
      data: l,
      margin: { left: n && !n.hide ? 0 : 12, right: i ? 32 : 0 },
      children: [
        /* @__PURE__ */ X(
          yu,
          {
            cursor: !0,
            content: /* @__PURE__ */ X(Eo, { yAxisFormatter: n == null ? void 0 : n.tickFormatter })
          }
        ),
        /* @__PURE__ */ X(
          vu,
          {
            ...lf(),
            vertical: !0,
            horizontal: !1
          }
        ),
        /* @__PURE__ */ X(Gn, { ...d, hide: r == null ? void 0 : r.hide }),
        /* @__PURE__ */ X(
          qn,
          {
            ...h,
            hide: n == null ? void 0 : n.hide,
            width: (n == null ? void 0 : n.width) ?? f + 20
          }
        ),
        c.map((v, g) => /* @__PURE__ */ X(sv, { children: /* @__PURE__ */ X(
          _i,
          {
            isAnimationActive: !1,
            layout: "vertical",
            dataKey: v,
            fill: e[v].color || kn(g),
            radius: 4,
            maxBarSize: 24,
            children: i && /* @__PURE__ */ X(
              kr,
              {
                position: "right",
                offset: 10,
                className: "fill-f1-foreground",
                fontSize: 12
              },
              `label-{${v}}`
            )
          },
          `bar-${v}`
        ) }))
      ]
    }
  ) });
}, yne = To(Hre), mne = Zk(
  {
    name: "Icon",
    type: "info"
  },
  G1
);
var Gre = typeof pr == "object" && pr && pr.Object === Object && pr, qre = typeof self == "object" && self && self.Object === Object && self;
Gre || qre || Function("return this")();
var Kre = typeof window < "u" ? uv : ea, Vre = typeof window > "u";
function Yre(e, {
  defaultValue: t = !1,
  initializeWithValue: r = !0
} = {}) {
  const n = (c) => Vre ? t : window.matchMedia(c).matches, [i, a] = jn(() => r ? n(e) : t);
  function s() {
    a(n(e));
  }
  return Kre(() => {
    const c = window.matchMedia(e);
    return s(), c.addListener ? c.addListener(s) : c.addEventListener("change", s), () => {
      c.removeListener ? c.removeListener(s) : c.removeEventListener("change", s);
    };
  }, [e]), i;
}
const bne = () => Yre(
  "(prefers-reduced-motion: reduce)",
  {
    initializeWithValue: !0,
    defaultValue: !1
  }
), j1 = Rr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function Xre(e) {
  const t = La(null);
  return t.current === null && (t.current = e()), t.current;
}
const Zre = /* @__PURE__ */ new Set([
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
  "viewport"
]);
function Cl(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Zre.has(e);
}
let lP = (e) => !Cl(e);
function fP(e) {
  e && (lP = (t) => t.startsWith("on") ? !Cl(t) : e(t));
}
try {
  fP(require("@emotion/is-prop-valid").default);
} catch {
}
function xne(e, t, r) {
  const n = {};
  for (const i in e)
    i === "values" && typeof e.values == "object" || (lP(i) || r === !0 && Cl(i) || !t && !Cl(i) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && i.startsWith("onDrag")) && (n[i] = e[i]);
  return n;
}
function wne({ children: e, isValidProp: t, ...r }) {
  t && fP(t), r = { ...tr(j1), ...r }, r.isStatic = Xre(() => r.isStatic);
  const n = nu(() => r, [
    JSON.stringify(r.transition),
    r.transformPagePoint,
    r.reducedMotion
  ]);
  return X(j1.Provider, { value: n, children: e });
}
const dP = Rr(void 0), _ne = ({ children: e, ...t }) => /* @__PURE__ */ X(dP.Provider, { value: t, children: e }), Jre = () => ({
  ...tr(dP)
}), One = Rn(
  function(t, r) {
    const { src: n } = Jre();
    if (!n) return /* @__PURE__ */ X("img", { ref: r, ...t });
    const i = n(t);
    return /* @__PURE__ */ X("img", { ref: r, ...t, ...i });
  }
);
export {
  gre as $,
  cne as A,
  lne as B,
  Zk as C,
  Cj as D,
  Lj as E,
  ine as F,
  One as G,
  HS as H,
  G1 as I,
  sre as J,
  IS as K,
  one as L,
  wne as M,
  ure as N,
  Qee as O,
  sa as P,
  cre as Q,
  eP as R,
  dv as S,
  hre as T,
  ore as U,
  yne as V,
  Yre as W,
  rne as X,
  V1 as Y,
  zee as Z,
  X1 as _,
  ta as a,
  fne as a0,
  Rre as a1,
  Nre as a2,
  Dre as a3,
  cP as a4,
  CS as b,
  Ht as c,
  kn as d,
  pne as e,
  To as f,
  vne as g,
  gne as h,
  ane as i,
  une as j,
  _ne as k,
  Kre as l,
  sne as m,
  mne as n,
  Wj as o,
  nne as p,
  bne as q,
  so as r,
  j1 as s,
  Xre as t,
  kj as u,
  xne as v,
  ra as w,
  QS as x,
  En as y,
  $o as z
};
