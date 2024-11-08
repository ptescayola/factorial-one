import { r as Ee, P as z, s as li, t as ci, v as Vm, b as wt, w as te, x as Fe, y as O, z as be, c as T, D as bt, F as Om, I as Ae, E as qa, G as Fm, a as Be, S as En, H as go, J as ru, K as vo, N as ou, O as Je, Q as su, R as Bm, T as st, U as iu, C as Te, n as ui, u as di, W as $m, q as fi, M as Wm, L as ln, Y as hi, Z as Rs, m as nn, _ as jm, $ as Hm, a0 as Um, o as au, a1 as Gm, a2 as zm, a3 as Km, a4 as Ym, A as Zm, B as Xm, g as qm, h as Qm, V as Jm, e as eg } from "./imageHandler-XMdVX85s.js";
import { jsx as a, jsxs as k, Fragment as me } from "react/jsx-runtime";
import * as h from "react";
import ee, { createContext as Ge, useContext as fe, useId as yo, useEffect as Le, useCallback as rn, Component as tg, useLayoutEffect as lu, useRef as Ue, useInsertionEffect as cu, useMemo as Wt, forwardRef as P, Fragment as uu, createElement as Kr, Children as pi, isValidElement as ng, useState as Ce, memo as rg, cloneElement as og } from "react";
import * as du from "react-dom";
import fu from "react-dom";
var sg = "Portal", wo = h.forwardRef((e, t) => {
  var l;
  const { container: n, ...r } = e, [o, s] = h.useState(!1);
  Ee(() => s(!0), []);
  const i = n || o && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return i ? fu.createPortal(/* @__PURE__ */ a(z.div, { ...r, ref: t }), i) : null;
});
wo.displayName = sg;
const Qa = /* @__PURE__ */ new Set();
function bo(e, t, n) {
  e || Qa.has(t) || (console.warn(t), Qa.add(t));
}
function ig(e) {
  if (typeof Proxy > "u")
    return e;
  const t = /* @__PURE__ */ new Map(), n = (...r) => (process.env.NODE_ENV !== "production" && bo(!1, "motion() is deprecated. Use motion.create() instead."), e(...r));
  return new Proxy(n, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, o) => o === "create" ? e : (t.has(o) || t.set(o, e(o)), t.get(o))
  });
}
function Qn(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Ds = (e) => Array.isArray(e);
function hu(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function Jn(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ja(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function mi(e, t, n, r) {
  if (typeof t == "function") {
    const [o, s] = Ja(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [o, s] = Ja(r);
    t = t(n !== void 0 ? n : e.custom, o, s);
  }
  return t;
}
function Co(e, t, n) {
  const r = e.getProps();
  return mi(r, t, n !== void 0 ? n : r.custom, e);
}
const gi = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], vi = ["initial", ...gi], ar = [
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
  "skewY"
], Ut = new Set(ar), gt = (e) => e * 1e3, Tt = (e) => e / 1e3, ag = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, lg = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), cg = {
  type: "keyframes",
  duration: 0.8
}, ug = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, dg = (e, { keyframes: t }) => t.length > 2 ? cg : Ut.has(e) ? e.startsWith("scale") ? lg(t[1]) : ag : ug;
function fg({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: o, repeat: s, repeatType: i, repeatDelay: l, from: c, elapsed: u, ...d }) {
  return !!Object.keys(d).length;
}
function yi(e, t) {
  return e[t] || e.default || e;
}
const hg = {
  skipAnimations: !1,
  useManualTiming: !1
}, pg = (e) => e !== null;
function xo(e, { repeat: t, repeatType: n = "loop" }, r) {
  const o = e.filter(pg), s = t && n !== "loop" && t % 2 === 1 ? 0 : o.length - 1;
  return !s || r === void 0 ? o[s] : r;
}
const Ne = (e) => e;
function mg(e) {
  let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, o = !1;
  const s = /* @__PURE__ */ new WeakSet();
  let i = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(u) {
    s.has(u) && (c.schedule(u), e()), u(i);
  }
  const c = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (u, d = !1, f = !1) => {
      const m = f && r ? t : n;
      return d && s.add(u), m.has(u) || m.add(u), u;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (u) => {
      n.delete(u), s.delete(u);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (u) => {
      if (i = u, r) {
        o = !0;
        return;
      }
      r = !0, [t, n] = [n, t], n.clear(), t.forEach(l), r = !1, o && (o = !1, c.process(u));
    }
  };
  return c;
}
const Er = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], gg = 40;
function pu(e, t) {
  let n = !1, r = !0;
  const o = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, s = () => n = !0, i = Er.reduce((b, y) => (b[y] = mg(s), b), {}), { read: l, resolveKeyframes: c, update: u, preRender: d, render: f, postRender: p } = i, m = () => {
    const b = performance.now();
    n = !1, o.delta = r ? 1e3 / 60 : Math.max(Math.min(b - o.timestamp, gg), 1), o.timestamp = b, o.isProcessing = !0, l.process(o), c.process(o), u.process(o), d.process(o), f.process(o), p.process(o), o.isProcessing = !1, n && t && (r = !1, e(m));
  }, g = () => {
    n = !0, r = !0, o.isProcessing || e(m);
  };
  return { schedule: Er.reduce((b, y) => {
    const C = i[y];
    return b[y] = (M, E = !1, A = !1) => (n || g(), C.schedule(M, E, A)), b;
  }, {}), cancel: (b) => {
    for (let y = 0; y < Er.length; y++)
      i[Er[y]].cancel(b);
  }, state: o, steps: i };
}
const { schedule: oe, cancel: At, state: Pe, steps: es } = pu(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ne, !0), mu = (e) => /^0[^.\s]+$/u.test(e);
function vg(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || mu(e) : !0;
}
let Dn = Ne, _t = Ne;
process.env.NODE_ENV !== "production" && (Dn = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, _t = (e, t) => {
  if (!e)
    throw new Error(t);
});
const gu = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), vu = (e) => (t) => typeof t == "string" && t.startsWith(e), yu = vu("--"), yg = vu("var(--"), wi = (e) => yg(e) ? wg.test(e.split("/*")[0].trim()) : !1, wg = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, bg = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Cg(e) {
  const t = bg.exec(e);
  if (!t)
    return [,];
  const [, n, r, o] = t;
  return [`--${n ?? r}`, o];
}
const xg = 4;
function wu(e, t, n = 1) {
  _t(n <= xg, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, o] = Cg(e);
  if (!r)
    return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const i = s.trim();
    return gu(i) ? parseFloat(i) : i;
  }
  return wi(o) ? wu(o, t, n + 1) : o;
}
const jt = (e, t, n) => n > t ? t : n < e ? e : n, An = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Kn = {
  ...An,
  transform: (e) => jt(0, 1, e)
}, Pr = {
  ...An,
  default: 1
}, Yn = (e) => Math.round(e * 1e5) / 1e5, bi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, kg = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, Sg = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function lr(e) {
  return typeof e == "string";
}
function Mg(e) {
  return e == null;
}
const cr = (e) => ({
  test: (t) => lr(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Ft = /* @__PURE__ */ cr("deg"), vt = /* @__PURE__ */ cr("%"), Y = /* @__PURE__ */ cr("px"), Eg = /* @__PURE__ */ cr("vh"), Pg = /* @__PURE__ */ cr("vw"), el = {
  ...vt,
  parse: (e) => vt.parse(e) / 100,
  transform: (e) => vt.transform(e * 100)
}, Ng = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), tl = (e) => e === An || e === Y, nl = (e, t) => parseFloat(e.split(", ")[t]), rl = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const o = r.match(/^matrix3d\((.+)\)$/u);
  if (o)
    return nl(o[1], t);
  {
    const s = r.match(/^matrix\((.+)\)$/u);
    return s ? nl(s[1], e) : 0;
  }
}, Tg = /* @__PURE__ */ new Set(["x", "y", "z"]), Lg = ar.filter((e) => !Tg.has(e));
function Rg(e) {
  const t = [];
  return Lg.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const Pn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: rl(4, 13),
  y: rl(5, 14)
};
Pn.translateX = Pn.x;
Pn.translateY = Pn.y;
const bu = (e) => (t) => t.test(e), Dg = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Cu = [An, Y, vt, Ft, Pg, Eg, Dg], ol = (e) => Cu.find(bu(e)), en = /* @__PURE__ */ new Set();
let As = !1, _s = !1;
function xu() {
  if (_s) {
    const e = Array.from(en).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const o = Rg(r);
      o.length && (n.set(r, o), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const o = n.get(r);
      o && o.forEach(([s, i]) => {
        var l;
        (l = r.getValue(s)) === null || l === void 0 || l.set(i);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  _s = !1, As = !1, en.forEach((e) => e.complete()), en.clear();
}
function ku() {
  en.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (_s = !0);
  });
}
function Ag() {
  ku(), xu();
}
class Ci {
  constructor(t, n, r, o, s, i = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = o, this.element = s, this.isAsync = i;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (en.add(this), As || (As = !0, oe.read(ku), oe.resolveKeyframes(xu))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: o } = this;
    for (let s = 0; s < t.length; s++)
      if (t[s] === null)
        if (s === 0) {
          const i = o == null ? void 0 : o.get(), l = t[t.length - 1];
          if (i !== void 0)
            t[0] = i;
          else if (r && n) {
            const c = r.readValue(n, l);
            c != null && (t[0] = c);
          }
          t[0] === void 0 && (t[0] = l), o && i === void 0 && o.set(t[0]);
        } else
          t[s] = t[s - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), en.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, en.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const xi = (e, t) => (n) => !!(lr(n) && Sg.test(n) && n.startsWith(e) || t && !Mg(n) && Object.prototype.hasOwnProperty.call(n, t)), Su = (e, t, n) => (r) => {
  if (!lr(r))
    return r;
  const [o, s, i, l] = r.match(bi);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(s),
    [n]: parseFloat(i),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, _g = (e) => jt(0, 255, e), ts = {
  ...An,
  transform: (e) => Math.round(_g(e))
}, Jt = {
  test: /* @__PURE__ */ xi("rgb", "red"),
  parse: /* @__PURE__ */ Su("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ts.transform(e) + ", " + ts.transform(t) + ", " + ts.transform(n) + ", " + Yn(Kn.transform(r)) + ")"
};
function Ig(e) {
  let t = "", n = "", r = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Is = {
  test: /* @__PURE__ */ xi("#"),
  parse: Ig,
  transform: Jt.transform
}, wn = {
  test: /* @__PURE__ */ xi("hsl", "hue"),
  parse: /* @__PURE__ */ Su("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + vt.transform(Yn(t)) + ", " + vt.transform(Yn(n)) + ", " + Yn(Kn.transform(r)) + ")"
}, Re = {
  test: (e) => Jt.test(e) || Is.test(e) || wn.test(e),
  parse: (e) => Jt.test(e) ? Jt.parse(e) : wn.test(e) ? wn.parse(e) : Is.parse(e),
  transform: (e) => lr(e) ? e : e.hasOwnProperty("red") ? Jt.transform(e) : wn.transform(e)
};
function Vg(e) {
  var t, n;
  return isNaN(e) && lr(e) && (((t = e.match(bi)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(kg)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Mu = "number", Eu = "color", Og = "var", Fg = "var(", sl = "${}", Bg = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function er(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, o = [];
  let s = 0;
  const l = t.replace(Bg, (c) => (Re.test(c) ? (r.color.push(s), o.push(Eu), n.push(Re.parse(c))) : c.startsWith(Fg) ? (r.var.push(s), o.push(Og), n.push(c)) : (r.number.push(s), o.push(Mu), n.push(parseFloat(c))), ++s, sl)).split(sl);
  return { values: n, split: l, indexes: r, types: o };
}
function Pu(e) {
  return er(e).values;
}
function Nu(e) {
  const { split: t, types: n } = er(e), r = t.length;
  return (o) => {
    let s = "";
    for (let i = 0; i < r; i++)
      if (s += t[i], o[i] !== void 0) {
        const l = n[i];
        l === Mu ? s += Yn(o[i]) : l === Eu ? s += Re.transform(o[i]) : s += o[i];
      }
    return s;
  };
}
const $g = (e) => typeof e == "number" ? 0 : e;
function Wg(e) {
  const t = Pu(e);
  return Nu(e)(t.map($g));
}
const Ht = {
  test: Vg,
  parse: Pu,
  createTransformer: Nu,
  getAnimatableNone: Wg
}, jg = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Hg(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(bi) || [];
  if (!r)
    return e;
  const o = n.replace(r, "");
  let s = jg.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + o + ")";
}
const Ug = /\b([a-z-]*)\(.*?\)/gu, Vs = {
  ...Ht,
  getAnimatableNone: (e) => {
    const t = e.match(Ug);
    return t ? t.map(Hg).join(" ") : e;
  }
}, il = {
  ...An,
  transform: Math.round
}, ki = {
  // Border props
  borderWidth: Y,
  borderTopWidth: Y,
  borderRightWidth: Y,
  borderBottomWidth: Y,
  borderLeftWidth: Y,
  borderRadius: Y,
  radius: Y,
  borderTopLeftRadius: Y,
  borderTopRightRadius: Y,
  borderBottomRightRadius: Y,
  borderBottomLeftRadius: Y,
  // Positioning props
  width: Y,
  maxWidth: Y,
  height: Y,
  maxHeight: Y,
  size: Y,
  top: Y,
  right: Y,
  bottom: Y,
  left: Y,
  // Spacing props
  padding: Y,
  paddingTop: Y,
  paddingRight: Y,
  paddingBottom: Y,
  paddingLeft: Y,
  margin: Y,
  marginTop: Y,
  marginRight: Y,
  marginBottom: Y,
  marginLeft: Y,
  // Transform props
  rotate: Ft,
  rotateX: Ft,
  rotateY: Ft,
  rotateZ: Ft,
  scale: Pr,
  scaleX: Pr,
  scaleY: Pr,
  scaleZ: Pr,
  skew: Ft,
  skewX: Ft,
  skewY: Ft,
  distance: Y,
  translateX: Y,
  translateY: Y,
  translateZ: Y,
  x: Y,
  y: Y,
  z: Y,
  perspective: Y,
  transformPerspective: Y,
  opacity: Kn,
  originX: el,
  originY: el,
  originZ: Y,
  // Misc
  zIndex: il,
  backgroundPositionX: Y,
  backgroundPositionY: Y,
  // SVG
  fillOpacity: Kn,
  strokeOpacity: Kn,
  numOctaves: il
}, Gg = {
  ...ki,
  // Color props
  color: Re,
  backgroundColor: Re,
  outlineColor: Re,
  fill: Re,
  stroke: Re,
  // Border props
  borderColor: Re,
  borderTopColor: Re,
  borderRightColor: Re,
  borderBottomColor: Re,
  borderLeftColor: Re,
  filter: Vs,
  WebkitFilter: Vs
}, Si = (e) => Gg[e];
function Tu(e, t) {
  let n = Si(e);
  return n !== Vs && (n = Ht), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const zg = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function Kg(e, t, n) {
  let r = 0, o;
  for (; r < e.length && !o; ) {
    const s = e[r];
    typeof s == "string" && !zg.has(s) && er(s).values.length && (o = e[r]), r++;
  }
  if (o && n)
    for (const s of t)
      e[s] = Tu(n, o);
}
class Lu extends Ci {
  constructor(t, n, r, o, s) {
    super(t, n, r, o, s, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let u = t[c];
      if (typeof u == "string" && (u = u.trim(), wi(u))) {
        const d = wu(u, n.current);
        d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Ng.has(r) || t.length !== 2)
      return;
    const [o, s] = t, i = ol(o), l = ol(s);
    if (i !== l)
      if (tl(i) && tl(l))
        for (let c = 0; c < t.length; c++) {
          const u = t[c];
          typeof u == "string" && (t[c] = parseFloat(u));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let o = 0; o < t.length; o++)
      vg(t[o]) && r.push(o);
    r.length && Kg(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Pn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const o = n[n.length - 1];
    o !== void 0 && t.getValue(r, o).jump(o, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: o } = this;
    if (!n || !n.current)
      return;
    const s = n.getValue(r);
    s && s.jump(this.measuredOrigin, !1);
    const i = o.length - 1, l = o[i];
    o[i] = Pn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([c, u]) => {
      n.getValue(c).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function Ru(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
let Fr;
function Yg() {
  Fr = void 0;
}
const Lt = {
  now: () => (Fr === void 0 && Lt.set(Pe.isProcessing || hg.useManualTiming ? Pe.timestamp : performance.now()), Fr),
  set: (e) => {
    Fr = e, queueMicrotask(Yg);
  }
}, al = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Ht.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function Zg(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function Xg(e, t, n, r) {
  const o = e[0];
  if (o === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const s = e[e.length - 1], i = al(o, t), l = al(s, t);
  return Dn(i === l, `You are trying to animate ${t} from "${o}" to "${s}". ${o} is not an animatable value - to enable this animation set ${o} to a value animatable to ${s} via the \`style\` property.`), !i || !l ? !1 : Zg(e) || n === "spring" && r;
}
const qg = 40;
class Du {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: o = 0, repeatDelay: s = 0, repeatType: i = "loop", ...l }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = Lt.now(), this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: o,
      repeatDelay: s,
      repeatType: i,
      ...l
    }, this.updateFinishedPromise();
  }
  /**
   * This method uses the createdAt and resolvedAt to calculate the
   * animation startTime. *Ideally*, we would use the createdAt time as t=0
   * as the following frame would then be the first frame of the animation in
   * progress, which would feel snappier.
   *
   * However, if there's a delay (main thread work) between the creation of
   * the animation and the first commited frame, we prefer to use resolvedAt
   * to avoid a sudden jump into the animation.
   */
  calcStartTime() {
    return this.resolvedAt ? this.resolvedAt - this.createdAt > qg ? this.resolvedAt : this.createdAt : this.createdAt;
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && Ag(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.resolvedAt = Lt.now(), this.hasAttemptedResolve = !0;
    const { name: r, type: o, velocity: s, delay: i, onComplete: l, onUpdate: c, isGenerator: u } = this.options;
    if (!u && !Xg(t, r, o, s))
      if (i)
        this.options.duration = 0;
      else {
        c == null || c(xo(t, this.options, n)), l == null || l(), this.resolveFinishedPromise();
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...d
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Au(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Qg = 5;
function _u(e, t, n) {
  const r = Math.max(t - Qg, 0);
  return Au(n - e(r), t - r);
}
const ns = 1e-3, Jg = 0.01, ll = 10, ev = 0.05, tv = 1;
function nv({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let o, s;
  Dn(e <= gt(ll), "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = jt(ev, tv, i), e = jt(Jg, ll, Tt(e)), i < 1 ? (o = (u) => {
    const d = u * i, f = d * e, p = d - n, m = Os(u, i), g = Math.exp(-f);
    return ns - p / m * g;
  }, s = (u) => {
    const f = u * i * e, p = f * n + n, m = Math.pow(i, 2) * Math.pow(u, 2) * e, g = Math.exp(-f), v = Os(Math.pow(u, 2), i);
    return (-o(u) + ns > 0 ? -1 : 1) * ((p - m) * g) / v;
  }) : (o = (u) => {
    const d = Math.exp(-u * e), f = (u - n) * e + 1;
    return -ns + d * f;
  }, s = (u) => {
    const d = Math.exp(-u * e), f = (n - u) * (e * e);
    return d * f;
  });
  const l = 5 / e, c = ov(o, s, l);
  if (e = gt(e), isNaN(c))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const u = Math.pow(c, 2) * r;
    return {
      stiffness: u,
      damping: i * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const rv = 12;
function ov(e, t, n) {
  let r = n;
  for (let o = 1; o < rv; o++)
    r = r - e(r) / t(r);
  return r;
}
function Os(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const sv = ["duration", "bounce"], iv = ["stiffness", "damping", "mass"];
function cl(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function av(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!cl(e, iv) && cl(e, sv)) {
    const n = nv(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Iu({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const o = e[0], s = e[e.length - 1], i = { done: !1, value: o }, { stiffness: l, damping: c, mass: u, duration: d, velocity: f, isResolvedFromDuration: p } = av({
    ...r,
    velocity: -Tt(r.velocity || 0)
  }), m = f || 0, g = c / (2 * Math.sqrt(l * u)), v = s - o, w = Tt(Math.sqrt(l / u)), b = Math.abs(v) < 5;
  n || (n = b ? 0.01 : 2), t || (t = b ? 5e-3 : 0.5);
  let y;
  if (g < 1) {
    const C = Os(w, g);
    y = (M) => {
      const E = Math.exp(-g * w * M);
      return s - E * ((m + g * w * v) / C * Math.sin(C * M) + v * Math.cos(C * M));
    };
  } else if (g === 1)
    y = (C) => s - Math.exp(-w * C) * (v + (m + w * v) * C);
  else {
    const C = w * Math.sqrt(g * g - 1);
    y = (M) => {
      const E = Math.exp(-g * w * M), A = Math.min(C * M, 300);
      return s - E * ((m + g * w * v) * Math.sinh(A) + C * v * Math.cosh(A)) / C;
    };
  }
  return {
    calculatedDuration: p && d || null,
    next: (C) => {
      const M = y(C);
      if (p)
        i.done = C >= d;
      else {
        let E = 0;
        g < 1 && (E = C === 0 ? gt(m) : _u(y, C, M));
        const A = Math.abs(E) <= n, B = Math.abs(s - M) <= t;
        i.done = A && B;
      }
      return i.value = i.done ? s : M, i;
    }
  };
}
function ul({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: o = 10, bounceStiffness: s = 500, modifyTarget: i, min: l, max: c, restDelta: u = 0.5, restSpeed: d }) {
  const f = e[0], p = {
    done: !1,
    value: f
  }, m = (L) => l !== void 0 && L < l || c !== void 0 && L > c, g = (L) => l === void 0 ? c : c === void 0 || Math.abs(l - L) < Math.abs(c - L) ? l : c;
  let v = n * t;
  const w = f + v, b = i === void 0 ? w : i(w);
  b !== w && (v = b - f);
  const y = (L) => -v * Math.exp(-L / r), C = (L) => b + y(L), M = (L) => {
    const D = y(L), W = C(L);
    p.done = Math.abs(D) <= u, p.value = p.done ? b : W;
  };
  let E, A;
  const B = (L) => {
    m(p.value) && (E = L, A = Iu({
      keyframes: [p.value, g(p.value)],
      velocity: _u(C, L, p.value),
      // TODO: This should be passing * 1000
      damping: o,
      stiffness: s,
      restDelta: u,
      restSpeed: d
    }));
  };
  return B(0), {
    calculatedDuration: null,
    next: (L) => {
      let D = !1;
      return !A && E === void 0 && (D = !0, M(L), B(L)), E !== void 0 && L >= E ? A.next(L - E) : (!D && M(L), p);
    }
  };
}
const Vu = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, lv = 1e-7, cv = 12;
function uv(e, t, n, r, o) {
  let s, i, l = 0;
  do
    i = t + (n - t) / 2, s = Vu(i, r, o) - e, s > 0 ? n = i : t = i;
  while (Math.abs(s) > lv && ++l < cv);
  return i;
}
function ur(e, t, n, r) {
  if (e === t && n === r)
    return Ne;
  const o = (s) => uv(s, 0, 1, e, n);
  return (s) => s === 0 || s === 1 ? s : Vu(o(s), t, r);
}
const dv = /* @__PURE__ */ ur(0.42, 0, 1, 1), fv = /* @__PURE__ */ ur(0, 0, 0.58, 1), Ou = /* @__PURE__ */ ur(0.42, 0, 0.58, 1), hv = (e) => Array.isArray(e) && typeof e[0] != "number", Fu = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Bu = (e) => (t) => 1 - e(1 - t), Mi = (e) => 1 - Math.sin(Math.acos(e)), $u = Bu(Mi), pv = Fu(Mi), Wu = /* @__PURE__ */ ur(0.33, 1.53, 0.69, 0.99), Ei = /* @__PURE__ */ Bu(Wu), mv = /* @__PURE__ */ Fu(Ei), gv = (e) => (e *= 2) < 1 ? 0.5 * Ei(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), dl = {
  linear: Ne,
  easeIn: dv,
  easeInOut: Ou,
  easeOut: fv,
  circIn: Mi,
  circInOut: pv,
  circOut: $u,
  backIn: Ei,
  backInOut: mv,
  backOut: Wu,
  anticipate: gv
}, fl = (e) => {
  if (Array.isArray(e)) {
    _t(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, o] = e;
    return ur(t, n, r, o);
  } else if (typeof e == "string")
    return _t(dl[e] !== void 0, `Invalid easing type '${e}'`), dl[e];
  return e;
}, vv = (e, t) => (n) => t(e(n)), Rt = (...e) => e.reduce(vv), tr = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, ge = (e, t, n) => e + (t - e) * n;
function rs(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function yv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let o = 0, s = 0, i = 0;
  if (!t)
    o = s = i = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - l;
    o = rs(c, l, e + 1 / 3), s = rs(c, l, e), i = rs(c, l, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(s * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
function Yr(e, t) {
  return (n) => n > 0 ? t : e;
}
const os = (e, t, n) => {
  const r = e * e, o = n * (t * t - r) + r;
  return o < 0 ? 0 : Math.sqrt(o);
}, wv = [Is, Jt, wn], bv = (e) => wv.find((t) => t.test(e));
function hl(e) {
  const t = bv(e);
  if (Dn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === wn && (n = yv(n)), n;
}
const pl = (e, t) => {
  const n = hl(e), r = hl(t);
  if (!n || !r)
    return Yr(e, t);
  const o = { ...n };
  return (s) => (o.red = os(n.red, r.red, s), o.green = os(n.green, r.green, s), o.blue = os(n.blue, r.blue, s), o.alpha = ge(n.alpha, r.alpha, s), Jt.transform(o));
}, Fs = /* @__PURE__ */ new Set(["none", "hidden"]);
function Cv(e, t) {
  return Fs.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function xv(e, t) {
  return (n) => ge(e, t, n);
}
function Pi(e) {
  return typeof e == "number" ? xv : typeof e == "string" ? wi(e) ? Yr : Re.test(e) ? pl : Mv : Array.isArray(e) ? ju : typeof e == "object" ? Re.test(e) ? pl : kv : Yr;
}
function ju(e, t) {
  const n = [...e], r = n.length, o = e.map((s, i) => Pi(s)(s, t[i]));
  return (s) => {
    for (let i = 0; i < r; i++)
      n[i] = o[i](s);
    return n;
  };
}
function kv(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const o in n)
    e[o] !== void 0 && t[o] !== void 0 && (r[o] = Pi(e[o])(e[o], t[o]));
  return (o) => {
    for (const s in r)
      n[s] = r[s](o);
    return n;
  };
}
function Sv(e, t) {
  var n;
  const r = [], o = { color: 0, var: 0, number: 0 };
  for (let s = 0; s < t.values.length; s++) {
    const i = t.types[s], l = e.indexes[i][o[i]], c = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[s] = c, o[i]++;
  }
  return r;
}
const Mv = (e, t) => {
  const n = Ht.createTransformer(t), r = er(e), o = er(t);
  return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? Fs.has(e) && !o.values.length || Fs.has(t) && !r.values.length ? Cv(e, t) : Rt(ju(Sv(r, o), o.values), n) : (Dn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Yr(e, t));
};
function Hu(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ge(e, t, n) : Pi(e)(e, t);
}
function Ev(e, t, n) {
  const r = [], o = n || Hu, s = e.length - 1;
  for (let i = 0; i < s; i++) {
    let l = o(e[i], e[i + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[i] || Ne : t;
      l = Rt(c, l);
    }
    r.push(l);
  }
  return r;
}
function Pv(e, t, { clamp: n = !0, ease: r, mixer: o } = {}) {
  const s = e.length;
  if (_t(s === t.length, "Both input and output ranges must be the same length"), s === 1)
    return () => t[0];
  if (s === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[s - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = Ev(t, r, o), l = i.length, c = (u) => {
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(u < e[d + 1]); d++)
        ;
    const f = tr(e[d], e[d + 1], u);
    return i[d](f);
  };
  return n ? (u) => c(jt(e[0], e[s - 1], u)) : c;
}
function Nv(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const o = tr(0, t, r);
    e.push(ge(n, 1, o));
  }
}
function Tv(e) {
  const t = [0];
  return Nv(t, e.length - 1), t;
}
function Lv(e, t) {
  return e.map((n) => n * t);
}
function Rv(e, t) {
  return e.map(() => t || Ou).splice(0, e.length - 1);
}
function Zr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const o = hv(r) ? r.map(fl) : fl(r), s = {
    done: !1,
    value: t[0]
  }, i = Lv(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Tv(t),
    e
  ), l = Pv(i, t, {
    ease: Array.isArray(o) ? o : Rv(t, o)
  });
  return {
    calculatedDuration: e,
    next: (c) => (s.value = l(c), s.done = c >= e, s)
  };
}
const ml = 2e4;
function Dv(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < ml; )
    t += n, r = e.next(t);
  return t >= ml ? 1 / 0 : t;
}
const Av = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => oe.update(t, !0),
    stop: () => At(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Pe.isProcessing ? Pe.timestamp : Lt.now()
  };
}, _v = {
  decay: ul,
  inertia: ul,
  tween: Zr,
  keyframes: Zr,
  spring: Iu
}, Iv = (e) => e / 100;
class Ni extends Du {
  constructor(t) {
    super(t), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: c } = this.options;
      c && c();
    };
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options, i = (o == null ? void 0 : o.KeyframeResolver) || Ci, l = (c, u) => this.onKeyframesResolved(c, u);
    this.resolver = new i(s, l, n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: o = 0, repeatType: s, velocity: i = 0 } = this.options, l = _v[n] || Zr;
    let c, u;
    l !== Zr && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && _t(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), c = Rt(Iv, Hu(t[0], t[1])), t = [0, 100]);
    const d = l({ ...this.options, keyframes: t });
    s === "mirror" && (u = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -i
    })), d.calculatedDuration === null && (d.calculatedDuration = Dv(d));
    const { calculatedDuration: f } = d, p = f + o, m = p * (r + 1) - o;
    return {
      generator: d,
      mirroredGenerator: u,
      mapPercentToKeyframes: c,
      calculatedDuration: f,
      resolvedDuration: p,
      totalDuration: m
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: L } = this.options;
      return { done: !0, value: L[L.length - 1] };
    }
    const { finalKeyframe: o, generator: s, mirroredGenerator: i, mapPercentToKeyframes: l, keyframes: c, calculatedDuration: u, totalDuration: d, resolvedDuration: f } = r;
    if (this.startTime === null)
      return s.next(0);
    const { delay: p, repeat: m, repeatType: g, repeatDelay: v, onUpdate: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - d / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const b = this.currentTime - p * (this.speed >= 0 ? 1 : -1), y = this.speed >= 0 ? b < 0 : b > d;
    this.currentTime = Math.max(b, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = d);
    let C = this.currentTime, M = s;
    if (m) {
      const L = Math.min(this.currentTime, d) / f;
      let D = Math.floor(L), W = L % 1;
      !W && L >= 1 && (W = 1), W === 1 && D--, D = Math.min(D, m + 1), !!(D % 2) && (g === "reverse" ? (W = 1 - W, v && (W -= v / f)) : g === "mirror" && (M = i)), C = jt(0, 1, W) * f;
    }
    const E = y ? { done: !1, value: c[0] } : M.next(C);
    l && (E.value = l(E.value));
    let { done: A } = E;
    !y && u !== null && (A = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const B = this.holdTime === null && (this.state === "finished" || this.state === "running" && A);
    return B && o !== void 0 && (E.value = xo(c, this.options, o)), w && w(E.value), B && this.finish(), E;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Tt(t.calculatedDuration) : 0;
  }
  get time() {
    return Tt(this.currentTime);
  }
  set time(t) {
    t = gt(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = Tt(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = Av, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const o = this.driver.now();
    this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = o) : this.startTime = r ?? this.calcStartTime(), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const Uu = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), Gu = (e) => Array.isArray(e) && typeof e[0] == "number";
function zu(e) {
  return !!(!e || typeof e == "string" && e in Ti || Gu(e) || Array.isArray(e) && e.every(zu));
}
const jn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Ti = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ jn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ jn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ jn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ jn([0.33, 1.53, 0.69, 0.99])
};
function Vv(e) {
  return Ku(e) || Ti.easeOut;
}
function Ku(e) {
  if (e)
    return Gu(e) ? jn(e) : Array.isArray(e) ? e.map(Vv) : Ti[e];
}
function Ov(e, t, n, { delay: r = 0, duration: o = 300, repeat: s = 0, repeatType: i = "loop", ease: l, times: c } = {}) {
  const u = { [t]: n };
  c && (u.offset = c);
  const d = Ku(l);
  return Array.isArray(d) && (u.easing = d), e.animate(u, {
    delay: r,
    duration: o,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: s + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const Fv = /* @__PURE__ */ Ru(() => Object.hasOwnProperty.call(Element.prototype, "animate")), Xr = 10, Bv = 2e4;
function $v(e) {
  return e.type === "spring" || !zu(e.ease);
}
function Wv(e, t) {
  const n = new Ni({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const o = [];
  let s = 0;
  for (; !r.done && s < Bv; )
    r = n.sample(s), o.push(r.value), s += Xr;
  return {
    times: void 0,
    keyframes: o,
    duration: s - Xr,
    ease: "linear"
  };
}
class gl extends Du {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: o, keyframes: s } = this.options;
    this.resolver = new Lu(s, (i, l) => this.onKeyframesResolved(i, l), n, r, o), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: o = 300, times: s, ease: i, type: l, motionValue: c, name: u, startTime: d } = this.options;
    if (!(!((r = c.owner) === null || r === void 0) && r.current))
      return !1;
    if ($v(this.options)) {
      const { onComplete: p, onUpdate: m, motionValue: g, element: v, ...w } = this.options, b = Wv(t, w);
      t = b.keyframes, t.length === 1 && (t[1] = t[0]), o = b.duration, s = b.times, i = b.ease, l = "keyframes";
    }
    const f = Ov(c.owner.current, u, t, { ...this.options, duration: o, times: s, ease: i });
    return f.startTime = d ?? this.calcStartTime(), this.pendingTimeline ? (f.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : f.onfinish = () => {
      const { onComplete: p } = this.options;
      c.set(xo(t, this.options, n)), p && p(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: f,
      duration: o,
      times: s,
      type: l,
      ease: i,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return Tt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return Tt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = gt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t)
      return null;
    const { animation: n } = t;
    return n.startTime;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return Ne;
      const { animation: r } = n;
      r.timeline = t, r.onfinish = null;
    }
    return Ne;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: o, type: s, ease: i, times: l } = t;
    if (n.playState === "idle" || n.playState === "finished")
      return;
    if (this.time) {
      const { motionValue: u, onUpdate: d, onComplete: f, element: p, ...m } = this.options, g = new Ni({
        ...m,
        keyframes: r,
        duration: o,
        type: s,
        ease: i,
        times: l,
        isGenerator: !0
      }), v = gt(this.time);
      u.setWithVelocity(g.sample(v - Xr).value, g.sample(v).value, Xr);
    }
    const { onStop: c } = this.options;
    c && c(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: o, repeatType: s, damping: i, type: l } = t;
    return Fv() && r && Uu.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !o && s !== "mirror" && i !== 0 && l !== "inertia";
  }
}
function jv(e, t) {
  let n;
  const r = () => {
    const { currentTime: o } = t, i = (o === null ? 0 : o.value) / 100;
    n !== i && e(i), n = i;
  };
  return oe.update(r, !0), () => At(r);
}
const Hv = Ru(() => window.ScrollTimeline !== void 0);
class Uv {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (Hv() && r.attachTimeline)
        r.attachTimeline(t);
      else
        return r.pause(), jv((o) => {
          r.time = r.duration * o;
        }, t);
    });
    return () => {
      n.forEach((r, o) => {
        r && r(), this.animations[o].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
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
}
const Li = (e, t, n, r = {}, o, s, i) => (l) => {
  const c = yi(r, e) || {}, u = c.delay || r.delay || 0;
  let { elapsed: d = 0 } = r;
  d = d - gt(u);
  let f = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...c,
    delay: -d,
    onUpdate: (m) => {
      t.set(m), c.onUpdate && c.onUpdate(m);
    },
    onComplete: () => {
      l(), c.onComplete && c.onComplete(), i && i();
    },
    onStop: i,
    name: e,
    motionValue: t,
    element: s ? void 0 : o
  };
  fg(c) || (f = {
    ...f,
    ...dg(e, f)
  }), f.duration && (f.duration = gt(f.duration)), f.repeatDelay && (f.repeatDelay = gt(f.repeatDelay)), f.from !== void 0 && (f.keyframes[0] = f.from);
  let p = !1;
  if ((f.type === !1 || f.duration === 0 && !f.repeatDelay) && (f.duration = 0, f.delay === 0 && (p = !0)), p && !s && t.get() !== void 0) {
    const m = xo(f.keyframes, c);
    if (m !== void 0)
      return oe.update(() => {
        f.onUpdate(m), f.onComplete();
      }), new Uv([]);
  }
  return !s && gl.supports(f) ? new gl(f) : new Ni(f);
}, Gv = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), zv = (e) => Ds(e) ? e[e.length - 1] || 0 : e;
function ko(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function So(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Ri {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ko(this.subscriptions, t), () => So(this.subscriptions, t);
  }
  notify(t, n, r) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < o; s++) {
          const i = this.subscriptions[s];
          i && i(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const vl = 30, Kv = (e) => !isNaN(parseFloat(e));
class Yu {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.5.4", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, o = !0) => {
      const s = Lt.now();
      this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Lt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Kv(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && bo(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ri());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), oe.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Lt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > vl)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, vl);
    return Au(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function nr(e, t) {
  return new Yu(e, t);
}
function Yv(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, nr(n));
}
function Zv(e, t) {
  const n = Co(e, t);
  let { transitionEnd: r = {}, transition: o = {}, ...s } = n || {};
  s = { ...s, ...r };
  for (const i in s) {
    const l = zv(s[i]);
    Yv(e, i, l);
  }
}
const Mo = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Xv = "framerAppearId", Zu = "data-" + Mo(Xv);
function Xu(e) {
  return e.props[Zu];
}
function qu(e) {
  if (Ut.has(e))
    return "transform";
  if (Uu.has(e))
    return Mo(e);
}
class qv extends Yu {
  constructor() {
    super(...arguments), this.output = [], this.counts = /* @__PURE__ */ new Map();
  }
  add(t) {
    const n = qu(t);
    if (!n)
      return;
    const r = this.counts.get(n) || 0;
    this.counts.set(n, r + 1), r === 0 && (this.output.push(n), this.update());
    let o = !1;
    return () => {
      if (o)
        return;
      o = !0;
      const s = this.counts.get(n) - 1;
      this.counts.set(n, s), s === 0 && (So(this.output, n), this.update());
    };
  }
  update() {
    this.set(this.output.length ? this.output.join(", ") : "auto");
  }
}
const De = (e) => !!(e && e.getVelocity);
function Qv(e) {
  return !!(De(e) && e.add);
}
function Bs(e, t) {
  var n;
  if (!e.applyWillChange)
    return;
  let r = e.getValue("willChange");
  if (!r && !(!((n = e.props.style) === null || n === void 0) && n.willChange) && (r = new qv("auto"), e.addValue("willChange", r)), Qv(r))
    return r.add(t);
}
function Jv({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Qu(e, t, { delay: n = 0, transitionOverride: r, type: o } = {}) {
  var s;
  let { transition: i = e.getDefaultTransition(), transitionEnd: l, ...c } = t;
  r && (i = r);
  const u = [], d = o && e.animationState && e.animationState.getState()[o];
  for (const f in c) {
    const p = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null), m = c[f];
    if (m === void 0 || d && Jv(d, f))
      continue;
    const g = {
      delay: n,
      ...yi(i || {}, f)
    };
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const b = Xu(e);
      if (b) {
        const y = window.MotionHandoffAnimation(b, f, oe);
        y !== null && (g.startTime = y, v = !0);
      }
    }
    p.start(Li(f, p, m, e.shouldReduceMotion && Ut.has(f) ? { type: !1 } : g, e, v, Bs(e, f)));
    const w = p.animation;
    w && u.push(w);
  }
  return l && Promise.all(u).then(() => {
    oe.update(() => {
      l && Zv(e, l);
    });
  }), u;
}
function $s(e, t, n = {}) {
  var r;
  const o = Co(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = o || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = o ? () => Promise.all(Qu(e, o, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: d = 0, staggerChildren: f, staggerDirection: p } = s;
    return e0(e, t, d + u, f, p, n);
  } : () => Promise.resolve(), { when: c } = s;
  if (c) {
    const [u, d] = c === "beforeChildren" ? [i, l] : [l, i];
    return u().then(() => d());
  } else
    return Promise.all([i(), l(n.delay)]);
}
function e0(e, t, n = 0, r = 0, o = 1, s) {
  const i = [], l = (e.variantChildren.size - 1) * r, c = o === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return Array.from(e.variantChildren).sort(t0).forEach((u, d) => {
    u.notify("AnimationStart", t), i.push($s(u, t, {
      ...s,
      delay: n + c(d)
    }).then(() => u.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function t0(e, t) {
  return e.sortNodePosition(t);
}
function n0(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const o = t.map((s) => $s(e, s, n));
    r = Promise.all(o);
  } else if (typeof t == "string")
    r = $s(e, t, n);
  else {
    const o = typeof t == "function" ? Co(e, t, n.custom) : t;
    r = Promise.all(Qu(e, o, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const r0 = [...gi].reverse(), o0 = gi.length;
function s0(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => n0(e, n, r)));
}
function i0(e) {
  let t = s0(e), n = yl(), r = !0;
  const o = (c) => (u, d) => {
    var f;
    const p = Co(e, d, c === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
    if (p) {
      const { transition: m, transitionEnd: g, ...v } = p;
      u = { ...u, ...v, ...g };
    }
    return u;
  };
  function s(c) {
    t = c(e);
  }
  function i(c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], p = /* @__PURE__ */ new Set();
    let m = {}, g = 1 / 0;
    for (let w = 0; w < o0; w++) {
      const b = r0[w], y = n[b], C = u[b] !== void 0 ? u[b] : d[b], M = Jn(C), E = b === c ? y.isActive : null;
      E === !1 && (g = w);
      let A = C === d[b] && C !== u[b] && M;
      if (A && r && e.manuallyAnimateOnMount && (A = !1), y.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !y.isActive && E === null || // If we didn't and don't have any defined prop for this animation type
      !C && !y.prevProp || // Or if the prop doesn't define an animation
      Qn(C) || typeof C == "boolean")
        continue;
      let L = a0(y.prevProp, C) || // If we're making this variant active, we want to always make it active
      b === c && y.isActive && !A && M || // If we removed a higher-priority variant (i is in reverse order)
      w > g && M, D = !1;
      const W = Array.isArray(C) ? C : [C];
      let Q = W.reduce(o(b), {});
      E === !1 && (Q = {});
      const { prevResolvedValues: j = {} } = y, Z = {
        ...j,
        ...Q
      }, J = (G) => {
        L = !0, p.has(G) && (D = !0, p.delete(G)), y.needsAnimating[G] = !0;
        const q = e.getValue(G);
        q && (q.liveStyle = !1);
      };
      for (const G in Z) {
        const q = Q[G], I = j[G];
        if (m.hasOwnProperty(G))
          continue;
        let V = !1;
        Ds(q) && Ds(I) ? V = !hu(q, I) : V = q !== I, V ? q != null ? J(G) : p.add(G) : q !== void 0 && p.has(G) ? J(G) : y.protectedKeys[G] = !0;
      }
      y.prevProp = C, y.prevResolvedValues = Q, y.isActive && (m = { ...m, ...Q }), r && e.blockInitialAnimation && (L = !1), L && (!A || D) && f.push(...W.map((G) => ({
        animation: G,
        options: { type: b }
      })));
    }
    if (p.size) {
      const w = {};
      p.forEach((b) => {
        const y = e.getBaseTarget(b), C = e.getValue(b);
        C && (C.liveStyle = !0), w[b] = y ?? null;
      }), f.push({ animation: w });
    }
    let v = !!f.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (v = !1), r = !1, v ? t(f) : Promise.resolve();
  }
  function l(c, u) {
    var d;
    if (n[c].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var m;
      return (m = p.animationState) === null || m === void 0 ? void 0 : m.setActive(c, u);
    }), n[c].isActive = u;
    const f = i(c);
    for (const p in n)
      n[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: i,
    setActive: l,
    setAnimateFunction: s,
    getState: () => n,
    reset: () => {
      n = yl(), r = !0;
    }
  };
}
function a0(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !hu(t, e) : !1;
}
function Zt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function yl() {
  return {
    animate: Zt(!0),
    whileInView: Zt(),
    whileHover: Zt(),
    whileTap: Zt(),
    whileDrag: Zt(),
    whileFocus: Zt(),
    exit: Zt()
  };
}
class Gt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class l0 extends Gt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = i0(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Qn(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let c0 = 0;
class u0 extends Gt {
  constructor() {
    super(...arguments), this.id = c0++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const o = this.node.animationState.setActive("exit", !t);
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const d0 = {
  animation: {
    Feature: l0
  },
  exit: {
    Feature: u0
  }
}, Ju = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Eo(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const f0 = (e) => (t) => Ju(t) && e(t, Eo(t));
function Pt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Dt(e, t, n, r) {
  return Pt(e, t, f0(n), r);
}
const wl = (e, t) => Math.abs(e - t);
function h0(e, t) {
  const n = wl(e.x, t.x), r = wl(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class ed {
  constructor(t, n, { transformPagePoint: r, contextWindow: o, dragSnapToOrigin: s = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = is(this.lastMoveEventInfo, this.history), p = this.startEvent !== null, m = h0(f.offset, { x: 0, y: 0 }) >= 3;
      if (!p && !m)
        return;
      const { point: g } = f, { timestamp: v } = Pe;
      this.history.push({ ...g, timestamp: v });
      const { onStart: w, onMove: b } = this.handlers;
      p || (w && w(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), b && b(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, p) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = ss(p, this.transformPagePoint), oe.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, p) => {
      this.end();
      const { onEnd: m, onSessionEnd: g, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const w = is(f.type === "pointercancel" ? this.lastMoveEventInfo : ss(p, this.transformPagePoint), this.history);
      this.startEvent && m && m(f, w), g && g(f, w);
    }, !Ju(t))
      return;
    this.dragSnapToOrigin = s, this.handlers = n, this.transformPagePoint = r, this.contextWindow = o || window;
    const i = Eo(t), l = ss(i, this.transformPagePoint), { point: c } = l, { timestamp: u } = Pe;
    this.history = [{ ...c, timestamp: u }];
    const { onSessionStart: d } = n;
    d && d(t, is(l, this.history)), this.removeListeners = Rt(Dt(this.contextWindow, "pointermove", this.handlePointerMove), Dt(this.contextWindow, "pointerup", this.handlePointerUp), Dt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), At(this.updatePoint);
  }
}
function ss(e, t) {
  return t ? { point: t(e.point) } : e;
}
function bl(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function is({ point: e }, t) {
  return {
    point: e,
    delta: bl(e, td(t)),
    offset: bl(e, p0(t)),
    velocity: m0(t, 0.1)
  };
}
function p0(e) {
  return e[0];
}
function td(e) {
  return e[e.length - 1];
}
function m0(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = td(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > gt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const s = Tt(o.timestamp - r.timestamp);
  if (s === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - r.x) / s,
    y: (o.y - r.y) / s
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function nd(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Cl = nd("dragHorizontal"), xl = nd("dragVertical");
function rd(e) {
  let t = !1;
  if (e === "y")
    t = xl();
  else if (e === "x")
    t = Cl();
  else {
    const n = Cl(), r = xl();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function od() {
  const e = rd(!0);
  return e ? (e(), !1) : !0;
}
function bn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const sd = 1e-4, g0 = 1 - sd, v0 = 1 + sd, id = 0.01, y0 = 0 - id, w0 = 0 + id;
function Ke(e) {
  return e.max - e.min;
}
function b0(e, t, n) {
  return Math.abs(e - t) <= n;
}
function kl(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ge(t.min, t.max, e.origin), e.scale = Ke(n) / Ke(t), e.translate = ge(n.min, n.max, e.origin) - e.originPoint, (e.scale >= g0 && e.scale <= v0 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= y0 && e.translate <= w0 || isNaN(e.translate)) && (e.translate = 0);
}
function Zn(e, t, n, r) {
  kl(e.x, t.x, n.x, r ? r.originX : void 0), kl(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Sl(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Ke(t);
}
function C0(e, t, n) {
  Sl(e.x, t.x, n.x), Sl(e.y, t.y, n.y);
}
function Ml(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Ke(t);
}
function Xn(e, t, n) {
  Ml(e.x, t.x, n.x), Ml(e.y, t.y, n.y);
}
function x0(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ge(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ge(n, e, r.max) : Math.min(e, n)), e;
}
function El(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function k0(e, { top: t, left: n, bottom: r, right: o }) {
  return {
    x: El(e.x, n, o),
    y: El(e.y, t, r)
  };
}
function Pl(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function S0(e, t) {
  return {
    x: Pl(e.x, t.x),
    y: Pl(e.y, t.y)
  };
}
function M0(e, t) {
  let n = 0.5;
  const r = Ke(e), o = Ke(t);
  return o > r ? n = tr(t.min, t.max - r, e.min) : r > o && (n = tr(e.min, e.max - o, t.min)), jt(0, 1, n);
}
function E0(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Ws = 0.35;
function P0(e = Ws) {
  return e === !1 ? e = 0 : e === !0 && (e = Ws), {
    x: Nl(e, "left", "right"),
    y: Nl(e, "top", "bottom")
  };
}
function Nl(e, t, n) {
  return {
    min: Tl(e, t),
    max: Tl(e, n)
  };
}
function Tl(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ll = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Cn = () => ({
  x: Ll(),
  y: Ll()
}), Rl = () => ({ min: 0, max: 0 }), ye = () => ({
  x: Rl(),
  y: Rl()
});
function qe(e) {
  return [e("x"), e("y")];
}
function ad({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function N0({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function T0(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function as(e) {
  return e === void 0 || e === 1;
}
function js({ scale: e, scaleX: t, scaleY: n }) {
  return !as(e) || !as(t) || !as(n);
}
function Xt(e) {
  return js(e) || ld(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function ld(e) {
  return Dl(e.x) || Dl(e.y);
}
function Dl(e) {
  return e && e !== "0%";
}
function qr(e, t, n) {
  const r = e - n, o = t * r;
  return n + o;
}
function Al(e, t, n, r, o) {
  return o !== void 0 && (e = qr(e, o, r)), qr(e, n, r) + t;
}
function Hs(e, t = 0, n = 1, r, o) {
  e.min = Al(e.min, t, n, r, o), e.max = Al(e.max, t, n, r, o);
}
function cd(e, { x: t, y: n }) {
  Hs(e.x, t.translate, t.scale, t.originPoint), Hs(e.y, n.translate, n.scale, n.originPoint);
}
const _l = 0.999999999999, Il = 1.0000000000001;
function L0(e, t, n, r = !1) {
  const o = n.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let s, i;
  for (let l = 0; l < o; l++) {
    s = n[l], i = s.projectionDelta;
    const { visualElement: c } = s.options;
    c && c.props.style && c.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && kn(e, {
      x: -s.scroll.offset.x,
      y: -s.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, cd(e, i)), r && Xt(s.latestValues) && kn(e, s.latestValues));
  }
  t.x < Il && t.x > _l && (t.x = 1), t.y < Il && t.y > _l && (t.y = 1);
}
function xn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Vl(e, t, n, r, o = 0.5) {
  const s = ge(e.min, e.max, o);
  Hs(e, t, n, s, r);
}
function kn(e, t) {
  Vl(e.x, t.x, t.scaleX, t.scale, t.originX), Vl(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function ud(e, t) {
  return ad(T0(e.getBoundingClientRect(), t));
}
function R0(e, t, n) {
  const r = ud(e, n), { scroll: o } = t;
  return o && (xn(r.x, o.offset.x), xn(r.y, o.offset.y)), r;
}
const dd = ({ current: e }) => e ? e.ownerDocument.defaultView : null, D0 = /* @__PURE__ */ new WeakMap();
class A0 {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ye(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const o = (d) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Eo(d, "page").point);
    }, s = (d, f) => {
      var p;
      const { drag: m, dragPropagation: g, onDragStart: v } = this.getProps();
      if (m && !g && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = rd(m), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), qe((b) => {
        let y = this.getAxisMotionValue(b).get() || 0;
        if (vt.test(y)) {
          const { projection: C } = this.visualElement;
          if (C && C.layout) {
            const M = C.layout.layoutBox[b];
            M && (y = Ke(M) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[b] = y;
      }), v && oe.postRender(() => v(d, f)), (p = this.removeWillChange) === null || p === void 0 || p.call(this), this.removeWillChange = Bs(this.visualElement, "transform");
      const { animationState: w } = this.visualElement;
      w && w.setActive("whileDrag", !0);
    }, i = (d, f) => {
      const { dragPropagation: p, dragDirectionLock: m, onDirectionLock: g, onDrag: v } = this.getProps();
      if (!p && !this.openGlobalLock)
        return;
      const { offset: w } = f;
      if (m && this.currentDirection === null) {
        this.currentDirection = _0(w), this.currentDirection !== null && g && g(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, w), this.updateAxis("y", f.point, w), this.visualElement.render(), v && v(d, f);
    }, l = (d, f) => this.stop(d, f), c = () => qe((d) => {
      var f;
      return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) === null || f === void 0 ? void 0 : f.play());
    }), { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new ed(t, {
      onSessionStart: o,
      onStart: s,
      onMove: i,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: u,
      contextWindow: dd(this.visualElement)
    });
  }
  stop(t, n) {
    var r;
    (r = this.removeWillChange) === null || r === void 0 || r.call(this);
    const o = this.isDragging;
    if (this.cancel(), !o)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && oe.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: o } = this.getProps();
    if (!r || !Nr(t, o, this.currentDirection))
      return;
    const s = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (i = x0(i, this.constraints[t], this.elastic[t])), s.set(i);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, s = this.constraints;
    n && bn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && o ? this.constraints = k0(o.layoutBox, n) : this.constraints = !1, this.elastic = P0(r), s !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && qe((i) => {
      this.constraints !== !1 && this.getAxisMotionValue(i) && (this.constraints[i] = E0(o.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !bn(t))
      return !1;
    const r = t.current;
    _t(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const s = R0(r, o.root, this.visualElement.getTransformPagePoint());
    let i = S0(o.layout.layoutBox, s);
    if (n) {
      const l = n(N0(i));
      this.hasMutatedConstraints = !!l, l && (i = ad(l));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: o, dragTransition: s, dragSnapToOrigin: i, onDragTransitionEnd: l } = this.getProps(), c = this.constraints || {}, u = qe((d) => {
      if (!Nr(d, n, this.currentDirection))
        return;
      let f = c && c[d] || {};
      i && (f = { min: 0, max: 0 });
      const p = o ? 200 : 1e6, m = o ? 40 : 1e7, g = {
        type: "inertia",
        velocity: r ? t[d] : 0,
        bounceStiffness: p,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...s,
        ...f
      };
      return this.startAxisValueAnimation(d, g);
    });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Li(t, r, 0, n, this.visualElement, !1, Bs(this.visualElement, t)));
  }
  stopAnimation() {
    qe((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    qe((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), o = r[n];
    return o || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    qe((n) => {
      const { drag: r } = this.getProps();
      if (!Nr(n, r, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, s = this.getAxisMotionValue(n);
      if (o && o.layout) {
        const { min: i, max: l } = o.layout.layoutBox[n];
        s.set(t[n] - ge(i, l, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!bn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    qe((i) => {
      const l = this.getAxisMotionValue(i);
      if (l && this.constraints !== !1) {
        const c = l.get();
        o[i] = M0({ min: c, max: c }, this.constraints[i]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    this.visualElement.current.style.transform = s ? s({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), qe((i) => {
      if (!Nr(i, t, null))
        return;
      const l = this.getAxisMotionValue(i), { min: c, max: u } = this.constraints[i];
      l.set(ge(c, u, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    D0.set(this.visualElement, this);
    const t = this.visualElement.current, n = Dt(t, "pointerdown", (c) => {
      const { drag: u, dragListener: d = !0 } = this.getProps();
      u && d && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      bn(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, s = o.addEventListener("measure", r);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), oe.read(r);
    const i = Pt(window, "resize", () => this.scalePositionWithinConstraints()), l = o.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: u }) => {
      this.isDragging && u && (qe((d) => {
        const f = this.getAxisMotionValue(d);
        f && (this.originPoint[d] += c[d].translate, f.set(f.get() + c[d].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), n(), s(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: o = !1, dragConstraints: s = !1, dragElastic: i = Ws, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: o,
      dragConstraints: s,
      dragElastic: i,
      dragMomentum: l
    };
  }
}
function Nr(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function _0(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class I0 extends Gt {
  constructor(t) {
    super(t), this.removeGroupControls = Ne, this.removeListeners = Ne, this.controls = new A0(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Ne;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ol = (e) => (t, n) => {
  e && oe.postRender(() => e(t, n));
};
class V0 extends Gt {
  constructor() {
    super(...arguments), this.removePointerDownListener = Ne;
  }
  onPointerDown(t) {
    this.session = new ed(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: dd(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Ol(t),
      onStart: Ol(n),
      onMove: r,
      onEnd: (s, i) => {
        delete this.session, o && oe.postRender(() => o(s, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Dt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Po = Ge(null);
function O0() {
  const e = fe(Po);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, o = yo();
  Le(() => r(o), []);
  const s = rn(() => n && n(o), [o, n]);
  return !t && n ? [!1, s] : [!0];
}
const rr = Ge({}), fd = Ge({}), Br = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function Fl(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Fn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (Y.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Fl(e, t.target.x), r = Fl(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, F0 = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, o = Ht.parse(e);
    if (o.length > 5)
      return r;
    const s = Ht.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, l = n.x.scale * t.x, c = n.y.scale * t.y;
    o[0 + i] /= l, o[1 + i] /= c;
    const u = ge(l, c, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= u), typeof o[3 + i] == "number" && (o[3 + i] /= u), s(o);
  }
}, Qr = {};
function B0(e) {
  Object.assign(Qr, e);
}
const { schedule: Di, cancel: tS } = pu(queueMicrotask, !1);
class $0 extends tg {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: o } = this.props, { projection: s } = t;
    B0(W0), s && (n.group && n.group.add(s), r && r.register && o && r.register(s), s.root.didUpdate(), s.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), s.setOptions({
      ...s.options,
      onExitComplete: () => this.safeToRemove()
    })), Br.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: o, isPresent: s } = this.props, i = r.projection;
    return i && (i.isPresent = s, o || t.layoutDependency !== n || n === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== s && (s ? i.promote() : i.relegate() || oe.postRender(() => {
      const l = i.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Di.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(o), r && r.deregister && r.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function hd(e) {
  const [t, n] = O0(), r = fe(rr);
  return a($0, { ...e, layoutGroup: r, switchLayoutGroup: fe(fd), isPresent: t, safeToRemove: n });
}
const W0 = {
  borderRadius: {
    ...Fn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Fn,
  borderTopRightRadius: Fn,
  borderBottomLeftRadius: Fn,
  borderBottomRightRadius: Fn,
  boxShadow: F0
}, pd = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], j0 = pd.length, Bl = (e) => typeof e == "string" ? parseFloat(e) : e, $l = (e) => typeof e == "number" || Y.test(e);
function H0(e, t, n, r, o, s) {
  o ? (e.opacity = ge(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    U0(r)
  ), e.opacityExit = ge(t.opacity !== void 0 ? t.opacity : 1, 0, G0(r))) : s && (e.opacity = ge(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let i = 0; i < j0; i++) {
    const l = `border${pd[i]}Radius`;
    let c = Wl(t, l), u = Wl(n, l);
    if (c === void 0 && u === void 0)
      continue;
    c || (c = 0), u || (u = 0), c === 0 || u === 0 || $l(c) === $l(u) ? (e[l] = Math.max(ge(Bl(c), Bl(u), r), 0), (vt.test(u) || vt.test(c)) && (e[l] += "%")) : e[l] = u;
  }
  (t.rotate || n.rotate) && (e.rotate = ge(t.rotate || 0, n.rotate || 0, r));
}
function Wl(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const U0 = /* @__PURE__ */ md(0, 0.5, $u), G0 = /* @__PURE__ */ md(0.5, 0.95, Ne);
function md(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(tr(e, t, r));
}
function jl(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ze(e, t) {
  jl(e.x, t.x), jl(e.y, t.y);
}
function Hl(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Ul(e, t, n, r, o) {
  return e -= t, e = qr(e, 1 / n, r), o !== void 0 && (e = qr(e, 1 / o, r)), e;
}
function z0(e, t = 0, n = 1, r = 0.5, o, s = e, i = e) {
  if (vt.test(t) && (t = parseFloat(t), t = ge(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let l = ge(s.min, s.max, r);
  e === s && (l -= t), e.min = Ul(e.min, t, n, l, o), e.max = Ul(e.max, t, n, l, o);
}
function Gl(e, t, [n, r, o], s, i) {
  z0(e, t[n], t[r], t[o], t.scale, s, i);
}
const K0 = ["x", "scaleX", "originX"], Y0 = ["y", "scaleY", "originY"];
function zl(e, t, n, r) {
  Gl(e.x, t, K0, n ? n.x : void 0, r ? r.x : void 0), Gl(e.y, t, Y0, n ? n.y : void 0, r ? r.y : void 0);
}
function Kl(e) {
  return e.translate === 0 && e.scale === 1;
}
function gd(e) {
  return Kl(e.x) && Kl(e.y);
}
function Yl(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Z0(e, t) {
  return Yl(e.x, t.x) && Yl(e.y, t.y);
}
function Zl(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function vd(e, t) {
  return Zl(e.x, t.x) && Zl(e.y, t.y);
}
function Xl(e) {
  return Ke(e.x) / Ke(e.y);
}
function ql(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class X0 {
  constructor() {
    this.members = [];
  }
  add(t) {
    ko(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (So(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((o) => t === o);
    if (n === 0)
      return !1;
    let r;
    for (let o = n; o >= 0; o--) {
      const s = this.members[o];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function q0(e, t, n) {
  let r = "";
  const o = e.x.translate / t.x, s = e.y.translate / t.y, i = (n == null ? void 0 : n.z) || 0;
  if ((o || s || i) && (r = `translate3d(${o}px, ${s}px, ${i}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: d, rotateX: f, rotateY: p, skewX: m, skewY: g } = n;
    u && (r = `perspective(${u}px) ${r}`), d && (r += `rotate(${d}deg) `), f && (r += `rotateX(${f}deg) `), p && (r += `rotateY(${p}deg) `), m && (r += `skewX(${m}deg) `), g && (r += `skewY(${g}deg) `);
  }
  const l = e.x.scale * t.x, c = e.y.scale * t.y;
  return (l !== 1 || c !== 1) && (r += `scale(${l}, ${c})`), r || "none";
}
const Q0 = (e, t) => e.depth - t.depth;
class J0 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ko(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    So(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Q0), this.isDirty = !1, this.children.forEach(t);
  }
}
function $r(e) {
  const t = De(e) ? e.get() : e;
  return Gv(t) ? t.toValue() : t;
}
function ey(e, t) {
  const n = Lt.now(), r = ({ timestamp: o }) => {
    const s = o - n;
    s >= t && (At(r), e(s - t));
  };
  return oe.read(r, !0), () => At(r);
}
function ty(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function ny(e, t, n) {
  const r = De(e) ? e : nr(e);
  return r.start(Li("", r, t, n)), r.animation;
}
const qt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
}, Hn = typeof window < "u" && window.MotionDebug !== void 0, ls = ["", "X", "Y", "Z"], ry = { visibility: "hidden" }, Ql = 1e3;
let oy = 0;
function cs(e, t, n, r) {
  const { latestValues: o } = t;
  o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function yd(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Xu(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: o, layoutId: s } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", oe, !(o || s));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && yd(r);
}
function wd({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: o }) {
  return class {
    constructor(i = {}, l = t == null ? void 0 : t()) {
      this.id = oy++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Hn && (qt.totalNodes = qt.resolvedTargetDeltas = qt.recalculatedProjection = 0), this.nodes.forEach(ay), this.nodes.forEach(fy), this.nodes.forEach(hy), this.nodes.forEach(ly), Hn && window.MotionDebug.record(qt);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new J0());
    }
    addEventListener(i, l) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Ri()), this.eventHandlers.get(i).add(l);
    }
    notifyListeners(i, ...l) {
      const c = this.eventHandlers.get(i);
      c && c.notify(...l);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i, l = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = ty(i), this.instance = i;
      const { layoutId: c, layout: u, visualElement: d } = this.options;
      if (d && !d.current && d.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (u || c) && (this.isLayoutDirty = !0), e) {
        let f;
        const p = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, f && f(), f = ey(p, 250), Br.hasAnimatedSinceResize && (Br.hasAnimatedSinceResize = !1, this.nodes.forEach(ec));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && d && (c || u) && this.addEventListener("didUpdate", ({ delta: f, hasLayoutChanged: p, hasRelativeTargetChanged: m, layout: g }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const v = this.options.transition || d.getDefaultTransition() || yy, { onLayoutAnimationStart: w, onLayoutAnimationComplete: b } = d.getProps(), y = !this.targetLayout || !vd(this.targetLayout, g) || m, C = !p && m;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || C || p && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(f, C);
          const M = {
            ...yi(v, "layout"),
            onPlay: w,
            onComplete: b
          };
          (d.shouldReduceMotion || this.options.layoutRoot) && (M.delay = 0, M.type = !1), this.startAnimation(M);
        } else
          p || ec(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = g;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, At(this.updateProjection);
    }
    // only on the root
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
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(py), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && yd(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        f.shouldResetTransform = !0, f.updateScroll("snapshot"), f.options.layoutRoot && f.willUpdate(!1);
      }
      const { layoutId: l, layout: c } = this.options;
      if (l === void 0 && !c)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Jl);
        return;
      }
      this.isUpdating || this.nodes.forEach(uy), this.isUpdating = !1, this.nodes.forEach(dy), this.nodes.forEach(sy), this.nodes.forEach(iy), this.clearAllSnapshots();
      const l = Lt.now();
      Pe.delta = jt(0, 1e3 / 60, l - Pe.timestamp), Pe.timestamp = l, Pe.isProcessing = !0, es.update.process(Pe), es.preRender.process(Pe), es.render.process(Pe), Pe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Di.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(cy), this.sharedNodes.forEach(my);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, oe.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      oe.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ye(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (l = !1), l) {
        const c = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: i,
          isRoot: c,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : c
        };
      }
    }
    resetTransform() {
      if (!o)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !gd(this.projectionDelta), c = this.getTransformTemplate(), u = c ? c(this.latestValues, "") : void 0, d = u !== this.prevTransformTemplateValue;
      i && (l || Xt(this.latestValues) || d) && (o(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const l = this.measurePageBox();
      let c = this.removeElementScroll(l);
      return i && (c = this.removeTransform(c)), wy(c), {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var i;
      const { visualElement: l } = this.options;
      if (!l)
        return ye();
      const c = l.measureViewportBox();
      if (!(((i = this.scroll) === null || i === void 0 ? void 0 : i.wasRoot) || this.path.some(by))) {
        const { scroll: d } = this.root;
        d && (xn(c.x, d.offset.x), xn(c.y, d.offset.y));
      }
      return c;
    }
    removeElementScroll(i) {
      var l;
      const c = ye();
      if (Ze(c, i), !((l = this.scroll) === null || l === void 0) && l.wasRoot)
        return c;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u], { scroll: f, options: p } = d;
        d !== this.root && f && p.layoutScroll && (f.wasRoot && Ze(c, i), xn(c.x, f.offset.x), xn(c.y, f.offset.y));
      }
      return c;
    }
    applyTransform(i, l = !1) {
      const c = ye();
      Ze(c, i);
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        !l && d.options.layoutScroll && d.scroll && d !== d.root && kn(c, {
          x: -d.scroll.offset.x,
          y: -d.scroll.offset.y
        }), Xt(d.latestValues) && kn(c, d.latestValues);
      }
      return Xt(this.latestValues) && kn(c, this.latestValues), c;
    }
    removeTransform(i) {
      const l = ye();
      Ze(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        if (!u.instance || !Xt(u.latestValues))
          continue;
        js(u.latestValues) && u.updateSnapshot();
        const d = ye(), f = u.measurePageBox();
        Ze(d, f), zl(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, d);
      }
      return Xt(this.latestValues) && zl(l, this.latestValues), l;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Pe.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var l;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== c;
      if (!(i || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: f, layoutId: p } = this.options;
      if (!(!this.layout || !(f || p))) {
        if (this.resolvedRelativeTargetAt = Pe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ye(), this.relativeTargetOrigin = ye(), Xn(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), Ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ye(), this.targetWithTransforms = ye()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), C0(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ze(this.target, this.layout.layoutBox), cd(this.target, this.targetDelta)) : Ze(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ye(), this.relativeTargetOrigin = ye(), Xn(this.relativeTargetOrigin, this.target, m.target), Ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Hn && qt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || js(this.parent.latestValues) || ld(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const l = this.getLead(), c = !!this.resumingFrom || this !== l;
      let u = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (u = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1), this.resolvedRelativeTargetAt === Pe.timestamp && (u = !1), u)
        return;
      const { layout: d, layoutId: f } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(d || f))
        return;
      Ze(this.layoutCorrected, this.layout.layoutBox);
      const p = this.treeScale.x, m = this.treeScale.y;
      L0(this.layoutCorrected, this.treeScale, this.path, c), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = ye());
      const { target: g } = l;
      if (!g) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Hl(this.prevProjectionDelta.x, this.projectionDelta.x), Hl(this.prevProjectionDelta.y, this.projectionDelta.y)), Zn(this.projectionDelta, this.layoutCorrected, g, this.latestValues), (this.treeScale.x !== p || this.treeScale.y !== m || !ql(this.projectionDelta.x, this.prevProjectionDelta.x) || !ql(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", g)), Hn && qt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      var l;
      if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(), i) {
        const c = this.getStack();
        c && c.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Cn(), this.projectionDelta = Cn(), this.projectionDeltaWithTransform = Cn();
    }
    setAnimationOrigin(i, l = !1) {
      const c = this.snapshot, u = c ? c.latestValues : {}, d = { ...this.latestValues }, f = Cn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const p = ye(), m = c ? c.source : void 0, g = this.layout ? this.layout.source : void 0, v = m !== g, w = this.getStack(), b = !w || w.members.length <= 1, y = !!(v && !b && this.options.crossfade === !0 && !this.path.some(vy));
      this.animationProgress = 0;
      let C;
      this.mixTargetDelta = (M) => {
        const E = M / 1e3;
        tc(f.x, i.x, E), tc(f.y, i.y, E), this.setTargetDelta(f), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Xn(p, this.layout.layoutBox, this.relativeParent.layout.layoutBox), gy(this.relativeTarget, this.relativeTargetOrigin, p, E), C && Z0(this.relativeTarget, C) && (this.isProjectionDirty = !1), C || (C = ye()), Ze(C, this.relativeTarget)), v && (this.animationValues = d, H0(d, u, this.latestValues, E, y, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = E;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (At(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = oe.update(() => {
        Br.hasAnimatedSinceResize = !0, this.currentAnimation = ny(0, Ql, {
          ...i,
          onUpdate: (l) => {
            this.mixTargetDelta(l), i.onUpdate && i.onUpdate(l);
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Ql), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: l, target: c, layout: u, latestValues: d } = i;
      if (!(!l || !c || !u)) {
        if (this !== i && this.layout && u && bd(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          c = this.target || ye();
          const f = Ke(this.layout.layoutBox.x);
          c.x.min = i.target.x.min, c.x.max = c.x.min + f;
          const p = Ke(this.layout.layoutBox.y);
          c.y.min = i.target.y.min, c.y.max = c.y.min + p;
        }
        Ze(l, c), kn(l, d), Zn(this.projectionDeltaWithTransform, this.layoutCorrected, l, d);
      }
    }
    registerSharedNode(i, l) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new X0()), this.sharedNodes.get(i).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      const { layoutId: l } = this.options;
      return l ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: l } = this.options;
      return l ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: l, preserveFollowOpacity: c } = {}) {
      const u = this.getStack();
      u && u.promote(this, c), i && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let l = !1;
      const { latestValues: c } = i;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (l = !0), !l)
        return;
      const u = {};
      c.z && cs("z", i, u, this.animationValues);
      for (let d = 0; d < ls.length; d++)
        cs(`rotate${ls[d]}`, i, u, this.animationValues), cs(`skew${ls[d]}`, i, u, this.animationValues);
      i.render();
      for (const d in u)
        i.setStaticValue(d, u[d]), this.animationValues && (this.animationValues[d] = u[d]);
      i.scheduleRender();
    }
    getProjectionStyles(i) {
      var l, c;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return ry;
      const u = {
        visibility: ""
      }, d = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, u.opacity = "", u.pointerEvents = $r(i == null ? void 0 : i.pointerEvents) || "", u.transform = d ? d(this.latestValues, "") : "none", u;
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return this.options.layoutId && (v.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, v.pointerEvents = $r(i == null ? void 0 : i.pointerEvents) || ""), this.hasProjected && !Xt(this.latestValues) && (v.transform = d ? d({}, "") : "none", this.hasProjected = !1), v;
      }
      const p = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(), u.transform = q0(this.projectionDeltaWithTransform, this.treeScale, p), d && (u.transform = d(p, u.transform));
      const { x: m, y: g } = this.projectionDelta;
      u.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`, f.animationValues ? u.opacity = f === this ? (c = (l = p.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : p.opacityExit : u.opacity = f === this ? p.opacity !== void 0 ? p.opacity : "" : p.opacityExit !== void 0 ? p.opacityExit : 0;
      for (const v in Qr) {
        if (p[v] === void 0)
          continue;
        const { correct: w, applyTo: b } = Qr[v], y = u.transform === "none" ? p[v] : w(p[v], f);
        if (b) {
          const C = b.length;
          for (let M = 0; M < C; M++)
            u[b[M]] = y;
        } else
          u[v] = y;
      }
      return this.options.layoutId && (u.pointerEvents = f === this ? $r(i == null ? void 0 : i.pointerEvents) || "" : "none"), u;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var l;
        return (l = i.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }), this.root.nodes.forEach(Jl), this.root.sharedNodes.clear();
    }
  };
}
function sy(e) {
  e.updateLayout();
}
function iy(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: o } = e.layout, { animationType: s } = e.options, i = n.source !== e.layout.source;
    s === "size" ? qe((f) => {
      const p = i ? n.measuredBox[f] : n.layoutBox[f], m = Ke(p);
      p.min = r[f].min, p.max = p.min + m;
    }) : bd(s, n.layoutBox, r) && qe((f) => {
      const p = i ? n.measuredBox[f] : n.layoutBox[f], m = Ke(r[f]);
      p.max = p.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[f].max = e.relativeTarget[f].min + m);
    });
    const l = Cn();
    Zn(l, r, n.layoutBox);
    const c = Cn();
    i ? Zn(c, e.applyTransform(o, !0), n.measuredBox) : Zn(c, r, n.layoutBox);
    const u = !gd(l);
    let d = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: p, layout: m } = f;
        if (p && m) {
          const g = ye();
          Xn(g, n.layoutBox, p.layoutBox);
          const v = ye();
          Xn(v, r, m.layoutBox), vd(g, v) || (d = !0), f.options.layoutRoot && (e.relativeTarget = v, e.relativeTargetOrigin = g, e.relativeParent = f);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: c,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: d
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function ay(e) {
  Hn && qt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function ly(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function cy(e) {
  e.clearSnapshot();
}
function Jl(e) {
  e.clearMeasurements();
}
function uy(e) {
  e.isLayoutDirty = !1;
}
function dy(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ec(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function fy(e) {
  e.resolveTargetDelta();
}
function hy(e) {
  e.calcProjection();
}
function py(e) {
  e.resetSkewAndRotation();
}
function my(e) {
  e.removeLeadSnapshot();
}
function tc(e, t, n) {
  e.translate = ge(t.translate, 0, n), e.scale = ge(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function nc(e, t, n, r) {
  e.min = ge(t.min, n.min, r), e.max = ge(t.max, n.max, r);
}
function gy(e, t, n, r) {
  nc(e.x, t.x, n.x, r), nc(e.y, t.y, n.y, r);
}
function vy(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const yy = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, rc = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), oc = rc("applewebkit/") && !rc("chrome/") ? Math.round : Ne;
function sc(e) {
  e.min = oc(e.min), e.max = oc(e.max);
}
function wy(e) {
  sc(e.x), sc(e.y);
}
function bd(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !b0(Xl(t), Xl(n), 0.2);
}
function by(e) {
  var t;
  return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot);
}
const Cy = wd({
  attachResizeListener: (e, t) => Pt(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), us = {
  current: void 0
}, Cd = wd({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!us.current) {
      const e = new Cy({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), us.current = e;
    }
    return us.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), xy = {
  pan: {
    Feature: V0
  },
  drag: {
    Feature: I0,
    ProjectionNode: Cd,
    MeasureLayout: hd
  }
};
function ic(e, t) {
  const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", o = (s, i) => {
    if (s.pointerType === "touch" || od())
      return;
    const l = e.getProps();
    e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
    const c = l[r];
    c && oe.postRender(() => c(s, i));
  };
  return Dt(e.current, n, o, {
    passive: !e.getProps()[r]
  });
}
class ky extends Gt {
  mount() {
    this.unmount = Rt(ic(this.node, !0), ic(this.node, !1));
  }
  unmount() {
  }
}
class Sy extends Gt {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Rt(Pt(this.node.current, "focus", () => this.onFocus()), Pt(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const xd = (e, t) => t ? e === t ? !0 : xd(e, t.parentElement) : !1;
function ds(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Eo(n));
}
class My extends Gt {
  constructor() {
    super(...arguments), this.removeStartListeners = Ne, this.removeEndListeners = Ne, this.removeAccessibleListeners = Ne, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), s = Dt(window, "pointerup", (l, c) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: u, onTapCancel: d, globalTapTarget: f } = this.node.getProps(), p = !f && !xd(this.node.current, l.target) ? d : u;
        p && oe.update(() => p(l, c));
      }, {
        passive: !(r.onTap || r.onPointerUp)
      }), i = Dt(window, "pointercancel", (l, c) => this.cancelPress(l, c), {
        passive: !(r.onTapCancel || r.onPointerCancel)
      });
      this.removeEndListeners = Rt(s, i), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (s) => {
        if (s.key !== "Enter" || this.isPressing)
          return;
        const i = (l) => {
          l.key !== "Enter" || !this.checkPressEnd() || ds("up", (c, u) => {
            const { onTap: d } = this.node.getProps();
            d && oe.postRender(() => d(c, u));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Pt(this.node.current, "keyup", i), ds("down", (l, c) => {
          this.startPress(l, c);
        });
      }, n = Pt(this.node.current, "keydown", t), r = () => {
        this.isPressing && ds("cancel", (s, i) => this.cancelPress(s, i));
      }, o = Pt(this.node.current, "blur", r);
      this.removeAccessibleListeners = Rt(n, o);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && oe.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !od();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && oe.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = Dt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), r = Pt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Rt(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Us = /* @__PURE__ */ new WeakMap(), fs = /* @__PURE__ */ new WeakMap(), Ey = (e) => {
  const t = Us.get(e.target);
  t && t(e);
}, Py = (e) => {
  e.forEach(Ey);
};
function Ny({ root: e, ...t }) {
  const n = e || document;
  fs.has(n) || fs.set(n, {});
  const r = fs.get(n), o = JSON.stringify(t);
  return r[o] || (r[o] = new IntersectionObserver(Py, { root: e, ...t })), r[o];
}
function Ty(e, t, n) {
  const r = Ny(t);
  return Us.set(e, n), r.observe(e), () => {
    Us.delete(e), r.unobserve(e);
  };
}
const Ly = {
  some: 0,
  all: 1
};
class Ry extends Gt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: o = "some", once: s } = t, i = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof o == "number" ? o : Ly[o]
    }, l = (c) => {
      const { isIntersecting: u } = c;
      if (this.isInView === u || (this.isInView = u, s && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: d, onViewportLeave: f } = this.node.getProps(), p = u ? d : f;
      p && p(c);
    };
    return Ty(this.node.current, i, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Dy(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Dy({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Ay = {
  inView: {
    Feature: Ry
  },
  tap: {
    Feature: My
  },
  focus: {
    Feature: Sy
  },
  hover: {
    Feature: ky
  }
}, _y = {
  layout: {
    ProjectionNode: Cd,
    MeasureLayout: hd
  }
}, No = Ge({}), Ai = typeof window < "u", _i = Ai ? lu : Le, kd = Ge({ strict: !1 });
let ac = !1;
function Iy(e, t, n, r, o) {
  var s;
  const { visualElement: i } = fe(No), l = fe(kd), c = fe(Po), u = fe(li).reducedMotion, d = Ue();
  r = r || l.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: c,
    blockInitialAnimation: c ? c.initial === !1 : !1,
    reducedMotionConfig: u
  }));
  const f = d.current, p = fe(fd);
  f && !f.projection && o && (f.type === "html" || f.type === "svg") && Oy(d.current, n, o, p), cu(() => {
    f && f.update(n, c);
  });
  const m = n[Zu], g = Ue(!!m && !window.MotionHandoffIsComplete && ((s = window.MotionHasOptimisedAnimation) === null || s === void 0 ? void 0 : s.call(window, m)));
  return _i(() => {
    f && (f.updateFeatures(), Di.render(f.render), g.current && f.animationState && f.animationState.animateChanges());
  }), Le(() => {
    f && (!g.current && f.animationState && f.animationState.animateChanges(), g.current = !1, ac || (ac = !0, queueMicrotask(Vy)));
  }), f;
}
function Vy() {
  window.MotionHandoffIsComplete = !0;
}
function Oy(e, t, n, r) {
  const { layoutId: o, layout: s, drag: i, dragConstraints: l, layoutScroll: c, layoutRoot: u } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Sd(e.parent)), e.projection.setOptions({
    layoutId: o,
    layout: s,
    alwaysMeasureLayout: !!i || l && bn(l),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof s == "string" ? s : "both",
    initialPromotionConfig: r,
    layoutScroll: c,
    layoutRoot: u
  });
}
function Sd(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Sd(e.parent);
}
function Fy(e, t, n) {
  return rn(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : bn(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function To(e) {
  return Qn(e.animate) || vi.some((t) => Jn(e[t]));
}
function Md(e) {
  return !!(To(e) || e.variants);
}
function By(e, t) {
  if (To(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Jn(n) ? n : void 0,
      animate: Jn(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function $y(e) {
  const { initial: t, animate: n } = By(e, fe(No));
  return Wt(() => ({ initial: t, animate: n }), [lc(t), lc(n)]);
}
function lc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const cc = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Nn = {};
for (const e in cc)
  Nn[e] = {
    isEnabled: (t) => cc[e].some((n) => !!t[n])
  };
function Wy(e) {
  for (const t in e)
    Nn[t] = {
      ...Nn[t],
      ...e[t]
    };
}
const jy = Symbol.for("motionComponentSymbol");
function Hy({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: o }) {
  e && Wy(e);
  function s(l, c) {
    let u;
    const d = {
      ...fe(li),
      ...l,
      layoutId: Uy(l)
    }, { isStatic: f } = d, p = $y(l), m = r(l, f);
    if (!f && Ai) {
      Gy(d, e);
      const g = zy(d);
      u = g.MeasureLayout, p.visualElement = Iy(o, m, d, t, g.ProjectionNode);
    }
    return k(No.Provider, { value: p, children: [u && p.visualElement ? a(u, { visualElement: p.visualElement, ...d }) : null, n(o, l, Fy(m, p.visualElement, c), m, f, p.visualElement)] });
  }
  const i = P(s);
  return i[jy] = o, i;
}
function Uy({ layoutId: e }) {
  const t = fe(rr).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Gy(e, t) {
  const n = fe(kd).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Dn(!1, r) : _t(!1, r);
  }
}
function zy(e) {
  const { drag: t, layout: n } = Nn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
const Ky = [
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
  "view"
];
function Ii(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Ky.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Ed(e, { style: t, vars: n }, r, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(r));
  for (const s in n)
    e.style.setProperty(s, n[s]);
}
const Pd = /* @__PURE__ */ new Set([
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
  "lengthAdjust"
]);
function Nd(e, t, n, r) {
  Ed(e, t, void 0, r);
  for (const o in t.attrs)
    e.setAttribute(Pd.has(o) ? o : Mo(o), t.attrs[o]);
}
function Td(e, { layout: t, layoutId: n }) {
  return Ut.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Qr[e] || e === "opacity");
}
function Vi(e, t, n) {
  var r;
  const { style: o } = e, s = {};
  for (const i in o)
    (De(o[i]) || t.style && De(t.style[i]) || Td(i, e) || ((r = n == null ? void 0 : n.getValue(i)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[i] = o[i]);
  return n && o && typeof o.willChange == "string" && (n.applyWillChange = !1), s;
}
function Ld(e, t, n) {
  const r = Vi(e, t, n);
  for (const o in e)
    if (De(e[o]) || De(t[o])) {
      const s = ar.indexOf(o) !== -1 ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o;
      r[s] = e[o];
    }
  return r;
}
function Yy({ applyWillChange: e = !1, scrapeMotionValuesFromProps: t, createRenderState: n, onMount: r }, o, s, i, l) {
  const c = {
    latestValues: Xy(o, s, i, l ? !1 : e, t),
    renderState: n()
  };
  return r && (c.mount = (u) => r(o, u, c)), c;
}
const Rd = (e) => (t, n) => {
  const r = fe(No), o = fe(Po), s = () => Yy(e, t, r, o, n);
  return n ? s() : ci(s);
};
function Zy(e, t) {
  const n = qu(t);
  n && ko(e, n);
}
function uc(e, t, n) {
  const r = Array.isArray(t) ? t : [t];
  for (let o = 0; o < r.length; o++) {
    const s = mi(e, r[o]);
    if (s) {
      const { transitionEnd: i, transition: l, ...c } = s;
      n(c, i);
    }
  }
}
function Xy(e, t, n, r, o) {
  var s;
  const i = {}, l = [], c = r && ((s = e.style) === null || s === void 0 ? void 0 : s.willChange) === void 0, u = o(e, {});
  for (const w in u)
    i[w] = $r(u[w]);
  let { initial: d, animate: f } = e;
  const p = To(e), m = Md(e);
  t && m && !p && e.inherit !== !1 && (d === void 0 && (d = t.initial), f === void 0 && (f = t.animate));
  let g = n ? n.initial === !1 : !1;
  g = g || d === !1;
  const v = g ? f : d;
  return v && typeof v != "boolean" && !Qn(v) && uc(e, v, (w, b) => {
    for (const y in w) {
      let C = w[y];
      if (Array.isArray(C)) {
        const M = g ? C.length - 1 : 0;
        C = C[M];
      }
      C !== null && (i[y] = C);
    }
    for (const y in b)
      i[y] = b[y];
  }), c && (f && d !== !1 && !Qn(f) && uc(e, f, (w) => {
    for (const b in w)
      Zy(l, b);
  }), l.length && (i.willChange = l.join(","))), i;
}
const Oi = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
}), Dd = () => ({
  ...Oi(),
  attrs: {}
}), Ad = (e, t) => t && typeof e == "number" ? t.transform(e) : e, qy = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Qy = ar.length;
function Jy(e, t, n) {
  let r = "", o = !0;
  for (let s = 0; s < Qy; s++) {
    const i = ar[s], l = e[i];
    if (l === void 0)
      continue;
    let c = !0;
    if (typeof l == "number" ? c = l === (i.startsWith("scale") ? 1 : 0) : c = parseFloat(l) === 0, !c || n) {
      const u = Ad(l, ki[i]);
      if (!c) {
        o = !1;
        const d = qy[i] || i;
        r += `${d}(${u}) `;
      }
      n && (t[i] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r;
}
function Fi(e, t, n) {
  const { style: r, vars: o, transformOrigin: s } = e;
  let i = !1, l = !1;
  for (const c in t) {
    const u = t[c];
    if (Ut.has(c)) {
      i = !0;
      continue;
    } else if (yu(c)) {
      o[c] = u;
      continue;
    } else {
      const d = Ad(u, ki[c]);
      c.startsWith("origin") ? (l = !0, s[c] = d) : r[c] = d;
    }
  }
  if (t.transform || (i || n ? r.transform = Jy(t, e.transform, n) : r.transform && (r.transform = "none")), l) {
    const { originX: c = "50%", originY: u = "50%", originZ: d = 0 } = s;
    r.transformOrigin = `${c} ${u} ${d}`;
  }
}
function dc(e, t, n) {
  return typeof e == "string" ? e : Y.transform(t + n * e);
}
function e2(e, t, n) {
  const r = dc(t, e.x, e.width), o = dc(n, e.y, e.height);
  return `${r} ${o}`;
}
const t2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, n2 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function r2(e, t, n = 1, r = 0, o = !0) {
  e.pathLength = 1;
  const s = o ? t2 : n2;
  e[s.offset] = Y.transform(-r);
  const i = Y.transform(t), l = Y.transform(n);
  e[s.array] = `${i} ${l}`;
}
function Bi(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: o,
  originY: s,
  pathLength: i,
  pathSpacing: l = 1,
  pathOffset: c = 0,
  // This is object creation, which we try to avoid per-frame.
  ...u
}, d, f) {
  if (Fi(e, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: m, dimensions: g } = e;
  p.transform && (g && (m.transform = p.transform), delete p.transform), g && (o !== void 0 || s !== void 0 || m.transform) && (m.transformOrigin = e2(g, o !== void 0 ? o : 0.5, s !== void 0 ? s : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), i !== void 0 && r2(p, i, l, c, !1);
}
const $i = (e) => typeof e == "string" && e.toLowerCase() === "svg", o2 = {
  useVisualState: Rd({
    scrapeMotionValuesFromProps: Ld,
    createRenderState: Dd,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      oe.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), oe.render(() => {
        Bi(n, r, $i(t.tagName), e.transformTemplate), Nd(t, n);
      });
    }
  })
}, s2 = {
  useVisualState: Rd({
    applyWillChange: !0,
    scrapeMotionValuesFromProps: Vi,
    createRenderState: Oi
  })
};
function _d(e, t, n) {
  for (const r in t)
    !De(t[r]) && !Td(r, n) && (e[r] = t[r]);
}
function i2({ transformTemplate: e }, t) {
  return Wt(() => {
    const n = Oi();
    return Fi(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function a2(e, t) {
  const n = e.style || {}, r = {};
  return _d(r, n, e), Object.assign(r, i2(e, t)), r;
}
function l2(e, t) {
  const n = {}, r = a2(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
function c2(e, t, n, r) {
  const o = Wt(() => {
    const s = Dd();
    return Bi(s, t, $i(r), e.transformTemplate), {
      ...s.attrs,
      style: { ...s.style }
    };
  }, [t]);
  if (e.style) {
    const s = {};
    _d(s, e.style, e), o.style = { ...s, ...o.style };
  }
  return o;
}
function u2(e = !1) {
  return (n, r, o, { latestValues: s }, i) => {
    const c = (Ii(n) ? c2 : l2)(r, s, i, n), u = Vm(r, typeof n == "string", e), d = n !== uu ? { ...u, ...c, ref: o } : {}, { children: f } = r, p = Wt(() => De(f) ? f.get() : f, [f]);
    return Kr(n, {
      ...d,
      children: p
    });
  };
}
function d2(e, t) {
  return function(r, { forwardMotionProps: o } = { forwardMotionProps: !1 }) {
    const i = {
      ...Ii(r) ? o2 : s2,
      preloadedFeatures: e,
      useRender: u2(o),
      createVisualElement: t,
      Component: r
    };
    return Hy(i);
  };
}
const Gs = { current: null }, Id = { current: !1 };
function f2() {
  if (Id.current = !0, !!Ai)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Gs.current = e.matches;
      e.addListener(t), t();
    } else
      Gs.current = !1;
}
function h2(e, t, n) {
  for (const r in t) {
    const o = t[r], s = n[r];
    if (De(o))
      e.addValue(r, o), process.env.NODE_ENV === "development" && bo(o.version === "11.5.4", `Attempting to mix Framer Motion versions ${o.version} with 11.5.4 may not work as expected.`);
    else if (De(s))
      e.addValue(r, nr(o, { owner: e }));
    else if (s !== o)
      if (e.hasValue(r)) {
        const i = e.getValue(r);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(r);
        e.addValue(r, nr(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const fc = /* @__PURE__ */ new WeakMap(), p2 = [...Cu, Re, Ht], m2 = (e) => p2.find(bu(e)), hc = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], g2 = vi.length;
class v2 {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: o, blockInitialAnimation: s, visualState: i }, l = {}) {
    this.applyWillChange = !1, this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ci, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.isRenderScheduled = !1, this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.isRenderScheduled = !1, this.scheduleRender = () => {
      this.isRenderScheduled || (this.isRenderScheduled = !0, oe.render(this.render, !1, !0));
    };
    const { latestValues: c, renderState: u } = i;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = l, this.blockInitialAnimation = !!s, this.isControllingVariants = To(n), this.isVariantNode = Md(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const p in f) {
      const m = f[p];
      c[p] !== void 0 && De(m) && m.set(c[p], !1);
    }
  }
  mount(t) {
    this.current = t, fc.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), Id.current || f2(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Gs.current, process.env.NODE_ENV !== "production" && bo(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    fc.delete(this.current), this.projection && this.projection.unmount(), At(this.notifyUpdate), At(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Ut.has(t), o = n.on("change", (l) => {
      this.latestValues[t] = l, this.props.onUpdate && oe.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), s = n.on("renderRequest", this.scheduleRender);
    let i;
    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      o(), s(), i && i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Nn) {
      const n = Nn[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: o } = n;
      if (!this.features[t] && o && r(this.props) && (this.features[t] = new o(this)), this.features[t]) {
        const s = this.features[t];
        s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ye();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < hc.length; r++) {
      const o = hc[r];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const s = "on" + o, i = t[s];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = h2(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < g2; r++) {
      const o = vi[r], s = this.props[o];
      (Jn(s) || s === !1) && (n[o] = s);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = nr(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let o = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return o != null && (typeof o == "string" && (gu(o) || mu(o)) ? o = parseFloat(o) : !m2(o) && Ht.test(n) && (o = Tu(t, n)), this.setBaseTarget(t, De(o) ? o.get() : o)), De(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let o;
    if (typeof r == "string" || typeof r == "object") {
      const i = mi(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      i && (o = i[t]);
    }
    if (r && o !== void 0)
      return o;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !De(s) ? s : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ri()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Vd extends v2 {
  constructor() {
    super(...arguments), this.KeyframeResolver = Lu;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function y2(e) {
  return window.getComputedStyle(e);
}
class w2 extends Vd {
  constructor() {
    super(...arguments), this.type = "html", this.applyWillChange = !0, this.renderInstance = Ed;
  }
  readValueFromInstance(t, n) {
    if (Ut.has(n)) {
      const r = Si(n);
      return r && r.default || 0;
    } else {
      const r = y2(t), o = (yu(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ud(t, n);
  }
  build(t, n, r) {
    Fi(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Vi(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    De(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
class b2 extends Vd {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = ye;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ut.has(n)) {
      const r = Si(n);
      return r && r.default || 0;
    }
    return n = Pd.has(n) ? n : Mo(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ld(t, n, r);
  }
  build(t, n, r) {
    Bi(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, o) {
    Nd(t, n, r, o);
  }
  mount(t) {
    this.isSVGTag = $i(t.tagName), super.mount(t);
  }
}
const C2 = (e, t) => Ii(e) ? new b2(t) : new w2(t, {
  allowProjection: e !== uu
}), x2 = /* @__PURE__ */ d2({
  ...d0,
  ...Ay,
  ...xy,
  ..._y
}, C2), It = /* @__PURE__ */ ig(x2);
class k2 extends h.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function S2({ children: e, isPresent: t }) {
  const n = yo(), r = Ue(null), o = Ue({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: s } = fe(li);
  return cu(() => {
    const { width: i, height: l, top: c, left: u } = o.current;
    if (t || !r.current || !i || !l)
      return;
    r.current.dataset.motionPopId = n;
    const d = document.createElement("style");
    return s && (d.nonce = s), document.head.appendChild(d), d.sheet && d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${i}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${u}px !important;
          }
        `), () => {
      document.head.removeChild(d);
    };
  }, [t]), a(k2, { isPresent: t, childRef: r, sizeRef: o, children: h.cloneElement(e, { ref: r }) });
}
const M2 = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: o, presenceAffectsLayout: s, mode: i }) => {
  const l = ci(E2), c = yo(), u = Wt(
    () => ({
      id: c,
      initial: t,
      isPresent: n,
      custom: o,
      onExitComplete: (d) => {
        l.set(d, !0);
        for (const f of l.values())
          if (!f)
            return;
        r && r();
      },
      register: (d) => (l.set(d, !1), () => l.delete(d))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? [Math.random()] : [n]
  );
  return Wt(() => {
    l.forEach((d, f) => l.set(f, !1));
  }, [n]), h.useEffect(() => {
    !n && !l.size && r && r();
  }, [n]), i === "popLayout" && (e = a(S2, { isPresent: n, children: e })), a(Po.Provider, { value: u, children: e });
};
function E2() {
  return /* @__PURE__ */ new Map();
}
const Tr = (e) => e.key || "";
function pc(e) {
  const t = [];
  return pi.forEach(e, (n) => {
    ng(n) && t.push(n);
  }), t;
}
const Lo = ({ children: e, exitBeforeEnter: t, custom: n, initial: r = !0, onExitComplete: o, presenceAffectsLayout: s = !0, mode: i = "sync" }) => {
  _t(!t, "Replace exitBeforeEnter with mode='wait'");
  const l = Wt(() => pc(e), [e]), c = l.map(Tr), u = Ue(!0), d = Ue(l), f = ci(() => /* @__PURE__ */ new Map()), [p, m] = Ce(l), [g, v] = Ce(l);
  _i(() => {
    u.current = !1, d.current = l;
    for (let y = 0; y < g.length; y++) {
      const C = Tr(g[y]);
      c.includes(C) ? f.delete(C) : f.get(C) !== !0 && f.set(C, !1);
    }
  }, [g, c.length, c.join("-")]);
  const w = [];
  if (l !== p) {
    let y = [...l];
    for (let C = 0; C < g.length; C++) {
      const M = g[C], E = Tr(M);
      c.includes(E) || (y.splice(C, 0, M), w.push(M));
    }
    i === "wait" && w.length && (y = w), v(pc(y)), m(l);
    return;
  }
  process.env.NODE_ENV !== "production" && i === "wait" && g.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: b } = fe(rr);
  return a(me, { children: g.map((y) => {
    const C = Tr(y), M = l === g || c.includes(C), E = () => {
      if (f.has(C))
        f.set(C, !0);
      else
        return;
      let A = !0;
      f.forEach((B) => {
        B || (A = !1);
      }), A && (b == null || b(), v(d.current), o && o());
    };
    return a(M2, { isPresent: M, initial: !u.current || r ? void 0 : !1, custom: M ? void 0 : n, presenceAffectsLayout: s, mode: i, onExitComplete: M ? void 0 : E, children: y }, C);
  }) });
}, P2 = Ge(null);
function N2() {
  const e = Ue(!1);
  return _i(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function T2() {
  const e = N2(), [t, n] = Ce(0), r = rn(() => {
    e.current && n(t + 1);
  }, [t]);
  return [rn(() => oe.postRender(r), [r]), t];
}
const L2 = (e) => !e.isLayoutDirty && e.willUpdate(!1);
function mc() {
  const e = /* @__PURE__ */ new Set(), t = /* @__PURE__ */ new WeakMap(), n = () => e.forEach(L2);
  return {
    add: (r) => {
      e.add(r), t.set(r, r.addEventListener("willUpdate", n));
    },
    remove: (r) => {
      e.delete(r);
      const o = t.get(r);
      o && (o(), t.delete(r)), n();
    },
    dirty: n
  };
}
const Od = (e) => e === !0, R2 = (e) => Od(e === !0) || e === "id", D2 = ({ children: e, id: t, inherit: n = !0 }) => {
  const r = fe(rr), o = fe(P2), [s, i] = T2(), l = Ue(null), c = r.id || o;
  l.current === null && (R2(n) && c && (t = t ? c + "-" + t : c), l.current = {
    id: t,
    group: Od(n) && r.group || mc()
  });
  const u = Wt(() => ({ ...l.current, forceRender: s }), [i]);
  return a(rr.Provider, { value: u, children: e });
};
var A2 = h.createContext(void 0);
function _n(e) {
  const t = h.useContext(A2);
  return e || t || "ltr";
}
function zs(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
function _2(e, t) {
  return h.useReducer((n, r) => t[n][r] ?? n, e);
}
var Wi = "ScrollArea", [Fd, rS] = wt(Wi), [I2, nt] = Fd(Wi), Bd = h.forwardRef(
  (e, t) => {
    const {
      __scopeScrollArea: n,
      type: r = "hover",
      dir: o,
      scrollHideDelay: s = 600,
      ...i
    } = e, [l, c] = h.useState(null), [u, d] = h.useState(null), [f, p] = h.useState(null), [m, g] = h.useState(null), [v, w] = h.useState(null), [b, y] = h.useState(0), [C, M] = h.useState(0), [E, A] = h.useState(!1), [B, L] = h.useState(!1), D = te(t, (Q) => c(Q)), W = _n(o);
    return /* @__PURE__ */ a(
      I2,
      {
        scope: n,
        type: r,
        dir: W,
        scrollHideDelay: s,
        scrollArea: l,
        viewport: u,
        onViewportChange: d,
        content: f,
        onContentChange: p,
        scrollbarX: m,
        onScrollbarXChange: g,
        scrollbarXEnabled: E,
        onScrollbarXEnabledChange: A,
        scrollbarY: v,
        onScrollbarYChange: w,
        scrollbarYEnabled: B,
        onScrollbarYEnabledChange: L,
        onCornerWidthChange: y,
        onCornerHeightChange: M,
        children: /* @__PURE__ */ a(
          z.div,
          {
            dir: W,
            ...i,
            ref: D,
            style: {
              position: "relative",
              // Pass corner sizes as CSS vars to reduce re-renders of context consumers
              "--radix-scroll-area-corner-width": b + "px",
              "--radix-scroll-area-corner-height": C + "px",
              ...e.style
            }
          }
        )
      }
    );
  }
);
Bd.displayName = Wi;
var $d = "ScrollAreaViewport", Wd = h.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, children: r, nonce: o, ...s } = e, i = nt($d, n), l = h.useRef(null), c = te(t, l, i.onViewportChange);
    return /* @__PURE__ */ k(me, { children: [
      /* @__PURE__ */ a(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: o
        }
      ),
      /* @__PURE__ */ a(
        z.div,
        {
          "data-radix-scroll-area-viewport": "",
          ...s,
          ref: c,
          style: {
            /**
             * We don't support `visible` because the intention is to have at least one scrollbar
             * if this component is used and `visible` will behave like `auto` in that case
             * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
             *
             * We don't handle `auto` because the intention is for the native implementation
             * to be hidden if using this component. We just want to ensure the node is scrollable
             * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
             * the browser from having to work out whether to render native scrollbars or not,
             * we tell it to with the intention of hiding them in CSS.
             */
            overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
            overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
            ...e.style
          },
          children: /* @__PURE__ */ a("div", { ref: i.onContentChange, style: { minWidth: "100%", display: "table" }, children: r })
        }
      )
    ] });
  }
);
Wd.displayName = $d;
var Ct = "ScrollAreaScrollbar", ji = h.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = nt(Ct, e.__scopeScrollArea), { onScrollbarXEnabledChange: s, onScrollbarYEnabledChange: i } = o, l = e.orientation === "horizontal";
    return h.useEffect(() => (l ? s(!0) : i(!0), () => {
      l ? s(!1) : i(!1);
    }), [l, s, i]), o.type === "hover" ? /* @__PURE__ */ a(V2, { ...r, ref: t, forceMount: n }) : o.type === "scroll" ? /* @__PURE__ */ a(O2, { ...r, ref: t, forceMount: n }) : o.type === "auto" ? /* @__PURE__ */ a(jd, { ...r, ref: t, forceMount: n }) : o.type === "always" ? /* @__PURE__ */ a(Hi, { ...r, ref: t }) : null;
  }
);
ji.displayName = Ct;
var V2 = h.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = nt(Ct, e.__scopeScrollArea), [s, i] = h.useState(!1);
  return h.useEffect(() => {
    const l = o.scrollArea;
    let c = 0;
    if (l) {
      const u = () => {
        window.clearTimeout(c), i(!0);
      }, d = () => {
        c = window.setTimeout(() => i(!1), o.scrollHideDelay);
      };
      return l.addEventListener("pointerenter", u), l.addEventListener("pointerleave", d), () => {
        window.clearTimeout(c), l.removeEventListener("pointerenter", u), l.removeEventListener("pointerleave", d);
      };
    }
  }, [o.scrollArea, o.scrollHideDelay]), /* @__PURE__ */ a(Fe, { present: n || s, children: /* @__PURE__ */ a(
    jd,
    {
      "data-state": s ? "visible" : "hidden",
      ...r,
      ref: t
    }
  ) });
}), O2 = h.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = nt(Ct, e.__scopeScrollArea), s = e.orientation === "horizontal", i = Do(() => c("SCROLL_END"), 100), [l, c] = _2("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return h.useEffect(() => {
    if (l === "idle") {
      const u = window.setTimeout(() => c("HIDE"), o.scrollHideDelay);
      return () => window.clearTimeout(u);
    }
  }, [l, o.scrollHideDelay, c]), h.useEffect(() => {
    const u = o.viewport, d = s ? "scrollLeft" : "scrollTop";
    if (u) {
      let f = u[d];
      const p = () => {
        const m = u[d];
        f !== m && (c("SCROLL"), i()), f = m;
      };
      return u.addEventListener("scroll", p), () => u.removeEventListener("scroll", p);
    }
  }, [o.viewport, s, c, i]), /* @__PURE__ */ a(Fe, { present: n || l !== "hidden", children: /* @__PURE__ */ a(
    Hi,
    {
      "data-state": l === "hidden" ? "hidden" : "visible",
      ...r,
      ref: t,
      onPointerEnter: O(e.onPointerEnter, () => c("POINTER_ENTER")),
      onPointerLeave: O(e.onPointerLeave, () => c("POINTER_LEAVE"))
    }
  ) });
}), jd = h.forwardRef((e, t) => {
  const n = nt(Ct, e.__scopeScrollArea), { forceMount: r, ...o } = e, [s, i] = h.useState(!1), l = e.orientation === "horizontal", c = Do(() => {
    if (n.viewport) {
      const u = n.viewport.offsetWidth < n.viewport.scrollWidth, d = n.viewport.offsetHeight < n.viewport.scrollHeight;
      i(l ? u : d);
    }
  }, 10);
  return Tn(n.viewport, c), Tn(n.content, c), /* @__PURE__ */ a(Fe, { present: r || s, children: /* @__PURE__ */ a(
    Hi,
    {
      "data-state": s ? "visible" : "hidden",
      ...o,
      ref: t
    }
  ) });
}), Hi = h.forwardRef((e, t) => {
  const { orientation: n = "vertical", ...r } = e, o = nt(Ct, e.__scopeScrollArea), s = h.useRef(null), i = h.useRef(0), [l, c] = h.useState({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  }), u = Kd(l.viewport, l.content), d = {
    ...r,
    sizes: l,
    onSizesChange: c,
    hasThumb: u > 0 && u < 1,
    onThumbChange: (p) => s.current = p,
    onThumbPointerUp: () => i.current = 0,
    onThumbPointerDown: (p) => i.current = p
  };
  function f(p, m) {
    return H2(p, i.current, l, m);
  }
  return n === "horizontal" ? /* @__PURE__ */ a(
    F2,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollLeft, m = gc(p, l, o.dir);
          s.current.style.transform = `translate3d(${m}px, 0, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollLeft = f(p, o.dir));
      }
    }
  ) : n === "vertical" ? /* @__PURE__ */ a(
    B2,
    {
      ...d,
      ref: t,
      onThumbPositionChange: () => {
        if (o.viewport && s.current) {
          const p = o.viewport.scrollTop, m = gc(p, l);
          s.current.style.transform = `translate3d(0, ${m}px, 0)`;
        }
      },
      onWheelScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = p);
      },
      onDragScroll: (p) => {
        o.viewport && (o.viewport.scrollTop = f(p));
      }
    }
  ) : null;
}), F2 = h.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = nt(Ct, e.__scopeScrollArea), [i, l] = h.useState(), c = h.useRef(null), u = te(t, c, s.onScrollbarXChange);
  return h.useEffect(() => {
    c.current && l(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ a(
    Ud,
    {
      "data-orientation": "horizontal",
      ...o,
      ref: u,
      sizes: n,
      style: {
        bottom: 0,
        left: s.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
        right: s.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
        "--radix-scroll-area-thumb-width": Ro(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.x),
      onDragScroll: (d) => e.onDragScroll(d.x),
      onWheelScroll: (d, f) => {
        if (s.viewport) {
          const p = s.viewport.scrollLeft + d.deltaX;
          e.onWheelScroll(p), Zd(p, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && i && r({
          content: s.viewport.scrollWidth,
          viewport: s.viewport.offsetWidth,
          scrollbar: {
            size: c.current.clientWidth,
            paddingStart: eo(i.paddingLeft),
            paddingEnd: eo(i.paddingRight)
          }
        });
      }
    }
  );
}), B2 = h.forwardRef((e, t) => {
  const { sizes: n, onSizesChange: r, ...o } = e, s = nt(Ct, e.__scopeScrollArea), [i, l] = h.useState(), c = h.useRef(null), u = te(t, c, s.onScrollbarYChange);
  return h.useEffect(() => {
    c.current && l(getComputedStyle(c.current));
  }, [c]), /* @__PURE__ */ a(
    Ud,
    {
      "data-orientation": "vertical",
      ...o,
      ref: u,
      sizes: n,
      style: {
        top: 0,
        right: s.dir === "ltr" ? 0 : void 0,
        left: s.dir === "rtl" ? 0 : void 0,
        bottom: "var(--radix-scroll-area-corner-height)",
        "--radix-scroll-area-thumb-height": Ro(n) + "px",
        ...e.style
      },
      onThumbPointerDown: (d) => e.onThumbPointerDown(d.y),
      onDragScroll: (d) => e.onDragScroll(d.y),
      onWheelScroll: (d, f) => {
        if (s.viewport) {
          const p = s.viewport.scrollTop + d.deltaY;
          e.onWheelScroll(p), Zd(p, f) && d.preventDefault();
        }
      },
      onResize: () => {
        c.current && s.viewport && i && r({
          content: s.viewport.scrollHeight,
          viewport: s.viewport.offsetHeight,
          scrollbar: {
            size: c.current.clientHeight,
            paddingStart: eo(i.paddingTop),
            paddingEnd: eo(i.paddingBottom)
          }
        });
      }
    }
  );
}), [$2, Hd] = Fd(Ct), Ud = h.forwardRef((e, t) => {
  const {
    __scopeScrollArea: n,
    sizes: r,
    hasThumb: o,
    onThumbChange: s,
    onThumbPointerUp: i,
    onThumbPointerDown: l,
    onThumbPositionChange: c,
    onDragScroll: u,
    onWheelScroll: d,
    onResize: f,
    ...p
  } = e, m = nt(Ct, n), [g, v] = h.useState(null), w = te(t, (D) => v(D)), b = h.useRef(null), y = h.useRef(""), C = m.viewport, M = r.content - r.viewport, E = be(d), A = be(c), B = Do(f, 10);
  function L(D) {
    if (b.current) {
      const W = D.clientX - b.current.left, Q = D.clientY - b.current.top;
      u({ x: W, y: Q });
    }
  }
  return h.useEffect(() => {
    const D = (W) => {
      const Q = W.target;
      (g == null ? void 0 : g.contains(Q)) && E(W, M);
    };
    return document.addEventListener("wheel", D, { passive: !1 }), () => document.removeEventListener("wheel", D, { passive: !1 });
  }, [C, g, M, E]), h.useEffect(A, [r, A]), Tn(g, B), Tn(m.content, B), /* @__PURE__ */ a(
    $2,
    {
      scope: n,
      scrollbar: g,
      hasThumb: o,
      onThumbChange: be(s),
      onThumbPointerUp: be(i),
      onThumbPositionChange: A,
      onThumbPointerDown: be(l),
      children: /* @__PURE__ */ a(
        z.div,
        {
          ...p,
          ref: w,
          style: { position: "absolute", ...p.style },
          onPointerDown: O(e.onPointerDown, (D) => {
            D.button === 0 && (D.target.setPointerCapture(D.pointerId), b.current = g.getBoundingClientRect(), y.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), L(D));
          }),
          onPointerMove: O(e.onPointerMove, L),
          onPointerUp: O(e.onPointerUp, (D) => {
            const W = D.target;
            W.hasPointerCapture(D.pointerId) && W.releasePointerCapture(D.pointerId), document.body.style.webkitUserSelect = y.current, m.viewport && (m.viewport.style.scrollBehavior = ""), b.current = null;
          })
        }
      )
    }
  );
}), Jr = "ScrollAreaThumb", Gd = h.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Hd(Jr, e.__scopeScrollArea);
    return /* @__PURE__ */ a(Fe, { present: n || o.hasThumb, children: /* @__PURE__ */ a(W2, { ref: t, ...r }) });
  }
), W2 = h.forwardRef(
  (e, t) => {
    const { __scopeScrollArea: n, style: r, ...o } = e, s = nt(Jr, n), i = Hd(Jr, n), { onThumbPositionChange: l } = i, c = te(
      t,
      (f) => i.onThumbChange(f)
    ), u = h.useRef(), d = Do(() => {
      u.current && (u.current(), u.current = void 0);
    }, 100);
    return h.useEffect(() => {
      const f = s.viewport;
      if (f) {
        const p = () => {
          if (d(), !u.current) {
            const m = U2(f, l);
            u.current = m, l();
          }
        };
        return l(), f.addEventListener("scroll", p), () => f.removeEventListener("scroll", p);
      }
    }, [s.viewport, d, l]), /* @__PURE__ */ a(
      z.div,
      {
        "data-state": i.hasThumb ? "visible" : "hidden",
        ...o,
        ref: c,
        style: {
          width: "var(--radix-scroll-area-thumb-width)",
          height: "var(--radix-scroll-area-thumb-height)",
          ...r
        },
        onPointerDownCapture: O(e.onPointerDownCapture, (f) => {
          const m = f.target.getBoundingClientRect(), g = f.clientX - m.left, v = f.clientY - m.top;
          i.onThumbPointerDown({ x: g, y: v });
        }),
        onPointerUp: O(e.onPointerUp, i.onThumbPointerUp)
      }
    );
  }
);
Gd.displayName = Jr;
var Ui = "ScrollAreaCorner", zd = h.forwardRef(
  (e, t) => {
    const n = nt(Ui, e.__scopeScrollArea), r = !!(n.scrollbarX && n.scrollbarY);
    return n.type !== "scroll" && r ? /* @__PURE__ */ a(j2, { ...e, ref: t }) : null;
  }
);
zd.displayName = Ui;
var j2 = h.forwardRef((e, t) => {
  const { __scopeScrollArea: n, ...r } = e, o = nt(Ui, n), [s, i] = h.useState(0), [l, c] = h.useState(0), u = !!(s && l);
  return Tn(o.scrollbarX, () => {
    var f;
    const d = ((f = o.scrollbarX) == null ? void 0 : f.offsetHeight) || 0;
    o.onCornerHeightChange(d), c(d);
  }), Tn(o.scrollbarY, () => {
    var f;
    const d = ((f = o.scrollbarY) == null ? void 0 : f.offsetWidth) || 0;
    o.onCornerWidthChange(d), i(d);
  }), u ? /* @__PURE__ */ a(
    z.div,
    {
      ...r,
      ref: t,
      style: {
        width: s,
        height: l,
        position: "absolute",
        right: o.dir === "ltr" ? 0 : void 0,
        left: o.dir === "rtl" ? 0 : void 0,
        bottom: 0,
        ...e.style
      }
    }
  ) : null;
});
function eo(e) {
  return e ? parseInt(e, 10) : 0;
}
function Kd(e, t) {
  const n = e / t;
  return isNaN(n) ? 0 : n;
}
function Ro(e) {
  const t = Kd(e.viewport, e.content), n = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, r = (e.scrollbar.size - n) * t;
  return Math.max(r, 18);
}
function H2(e, t, n, r = "ltr") {
  const o = Ro(n), s = o / 2, i = t || s, l = o - i, c = n.scrollbar.paddingStart + i, u = n.scrollbar.size - n.scrollbar.paddingEnd - l, d = n.content - n.viewport, f = r === "ltr" ? [0, d] : [d * -1, 0];
  return Yd([c, u], f)(e);
}
function gc(e, t, n = "ltr") {
  const r = Ro(t), o = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, s = t.scrollbar.size - o, i = t.content - t.viewport, l = s - r, c = n === "ltr" ? [0, i] : [i * -1, 0], u = zs(e, c);
  return Yd([0, i], [0, l])(u);
}
function Yd(e, t) {
  return (n) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    const r = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + r * (n - e[0]);
  };
}
function Zd(e, t) {
  return e > 0 && e < t;
}
var U2 = (e, t = () => {
}) => {
  let n = { left: e.scrollLeft, top: e.scrollTop }, r = 0;
  return function o() {
    const s = { left: e.scrollLeft, top: e.scrollTop }, i = n.left !== s.left, l = n.top !== s.top;
    (i || l) && t(), n = s, r = window.requestAnimationFrame(o);
  }(), () => window.cancelAnimationFrame(r);
};
function Do(e, t) {
  const n = be(e), r = h.useRef(0);
  return h.useEffect(() => () => window.clearTimeout(r.current), []), h.useCallback(() => {
    window.clearTimeout(r.current), r.current = window.setTimeout(n, t);
  }, [n, t]);
}
function Tn(e, t) {
  const n = be(t);
  Ee(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
var Xd = Bd, G2 = Wd, z2 = zd;
const Gi = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ k(
  Xd,
  {
    ref: r,
    className: T("relative overflow-hidden", e),
    scrollHideDelay: 200,
    ...n,
    children: [
      /* @__PURE__ */ a(
        G2,
        {
          className: "h-full w-full rounded-[inherit]",
          "data-scroll-container": !0,
          children: t
        }
      ),
      /* @__PURE__ */ a(Ks, { orientation: "vertical" }),
      /* @__PURE__ */ a(Ks, { orientation: "horizontal" }),
      /* @__PURE__ */ a(z2, {})
    ]
  }
));
Gi.displayName = Xd.displayName;
const Ks = h.forwardRef(({ className: e, orientation: t = "vertical", ...n }, r) => /* @__PURE__ */ a(
  ji,
  {
    ref: r,
    orientation: t,
    forceMount: !0,
    className: T(
      "z-50 flex touch-none select-none p-[1px]",
      "transition-opacity data-[state=hidden]:pointer-events-none data-[state=visible]:pointer-events-auto data-[state=hidden]:opacity-0 data-[state=visible]:opacity-100",
      t === "vertical" && "mr-[2px] h-full w-2.5",
      t === "horizontal" && "mt-[2px] h-2.5 flex-col",
      e
    ),
    ...n,
    children: /* @__PURE__ */ a(Gd, { className: "relative flex-1 rounded-full bg-f1-background-secondary opacity-50" })
  }
));
Ks.displayName = ji.displayName;
const zi = h.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ a(
    "input",
    {
      type: t,
      className: T(
        "flex h-10 w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50",
        bt("focus-visible:border-f1-border-hover"),
        e
      ),
      ref: r,
      ...n
    }
  )
);
zi.displayName = "Input";
const K2 = zi, Y2 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5V12V19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12H5H19", vectorEffect: "non-scaling-stroke" })
] }), Z2 = P(Y2), X2 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M4 13C7.31371 13 10 9.86599 10 6C10 9.86599 12.6863 13 16 13C12.6863 13 10 16.134 10 20C10 16.134 7.31371 13 4 13Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.5001 3.35001C17.8591 3.35001 18.1501 3.64102 18.1501 4.00001C18.1501 5.02173 18.9784 5.85001 20.0001 5.85001C20.3591 5.85001 20.6501 6.14102 20.6501 6.50001C20.6501 6.85899 20.3591 7.15001 20.0001 7.15001C18.9784 7.15001 18.1501 7.97828 18.1501 9.00001C18.1501 9.35899 17.8591 9.65001 17.5001 9.65001C17.1411 9.65001 16.8501 9.35899 16.8501 9.00001C16.8501 7.97828 16.0218 7.15001 15.0001 7.15001C14.6411 7.15001 14.3501 6.85899 14.3501 6.50001C14.3501 6.14102 14.6411 5.85001 15.0001 5.85001C16.0218 5.85001 16.8501 5.02173 16.8501 4.00001C16.8501 3.64102 17.1411 3.35001 17.5001 3.35001Z", vectorEffect: "non-scaling-stroke" })
] }), q2 = P(X2), Q2 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 12V9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 15.1V15", vectorEffect: "non-scaling-stroke" })
] }), J2 = P(Q2), e5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12.65 14.9C12.65 14.541 12.359 14.25 12 14.25C11.641 14.25 11.35 14.541 11.35 14.9L11.35 15C11.35 15.359 11.641 15.65 12 15.65C12.359 15.65 12.65 15.359 12.65 15L12.65 14.9ZM12.65 8.89999C12.65 8.54101 12.359 8.24999 12 8.24999C11.641 8.24999 11.35 8.54101 11.35 8.89999L11.35 11.9C11.35 12.259 11.641 12.55 12 12.55C12.359 12.55 12.65 12.259 12.65 11.9L12.65 8.89999Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), qd = P(e5), t5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 14V6.99997", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 17.1V17", vectorEffect: "non-scaling-stroke" })
] }), n5 = P(t5), r5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("mask", { id: "a", fill: "currentColor", children: /* @__PURE__ */ a("path", { fillRule: "evenodd", d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }),
  /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M12 18.7V5.3C8.29969 5.3 5.3 8.29969 5.3 12C5.3 15.7003 8.29969 18.7 12 18.7ZM13.6123 4.16253C13.4102 4.12118 13.2053 4.08745 12.998 4.06165C12.9977 4.0616 12.9973 4.06156 12.997 4.06152C12.6704 4.02091 12.3376 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C12.338 20 12.6711 19.979 12.998 19.9384C16.9453 19.4471 20 16.0803 20 12C20 8.13401 17.2577 4.9085 13.6123 4.16253Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 5.3H13.3V4H12V5.3ZM12 18.7V20H13.3V18.7H12ZM13.6123 4.16253L13.3517 5.43614L13.3517 5.43614L13.6123 4.16253ZM12.998 4.06165L12.8373 5.35168L12.8375 5.3517L12.998 4.06165ZM12.997 4.06152L12.8366 5.35159L12.8378 5.35174L12.997 4.06152ZM12.998 19.9384L12.8375 18.6483L12.8375 18.6483L12.998 19.9384ZM10.7 5.3V18.7H13.3V5.3H10.7ZM12 4C7.58172 4 4 7.58172 4 12H6.6C6.6 9.01766 9.01766 6.6 12 6.6V4ZM4 12C4 16.4183 7.58172 20 12 20V17.4C9.01766 17.4 6.6 14.9823 6.6 12H4ZM13.8729 2.88892C13.6378 2.84081 13.3995 2.80159 13.1586 2.7716L12.8375 5.3517C13.0111 5.37331 13.1826 5.40155 13.3517 5.43614L13.8729 2.88892ZM13.1587 2.77162C13.1591 2.77166 13.1575 2.77146 13.1561 2.7713L12.8378 5.35174L12.8373 5.35168L13.1587 2.77162ZM13.1573 2.77145C12.7777 2.72425 12.3914 2.7 12 2.7V5.3C12.2839 5.3 12.5631 5.31758 12.8366 5.35159L13.1573 2.77145ZM12 2.7C6.86375 2.7 2.7 6.86375 2.7 12H5.3C5.3 8.29969 8.29969 5.3 12 5.3V2.7ZM2.7 12C2.7 17.1362 6.86375 21.3 12 21.3V18.7C8.29969 18.7 5.3 15.7003 5.3 12H2.7ZM12 21.3C12.3918 21.3 12.7785 21.2757 13.1586 21.2284L12.8375 18.6483C12.5636 18.6824 12.2842 18.7 12 18.7V21.3ZM13.1586 21.2284C17.7486 20.6572 21.3 16.7443 21.3 12H18.7C18.7 15.4163 16.142 18.2371 12.8375 18.6483L13.1586 21.2284ZM21.3 12C21.3 7.50426 18.1113 3.75622 13.8729 2.88892L13.3517 5.43614C16.4042 6.06078 18.7 8.76375 18.7 12H21.3Z", mask: "url(#a)", vectorEffect: "non-scaling-stroke" })
] }), o5 = P(r5), s5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M3.87597 10.0077L3.62403 7.99228C3.55553 7.44426 3.94426 6.94447 4.49228 6.87597L18.5077 5.12403C19.0557 5.05553 19.5555 5.44426 19.624 5.99228L19.876 8.00772C19.9445 8.55574 19.5557 9.05553 19.0077 9.12403L4.99228 10.876C4.44426 10.9445 3.94447 10.5557 3.87597 10.0077Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 12V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14 14H10", vectorEffect: "non-scaling-stroke" })
] }), i5 = P(s5), a5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4 9V7C4 6.44772 4.44772 6 5 6H19C19.5523 6 20 6.44772 20 7V9C20 9.55228 19.5523 10 19 10H5C4.44772 10 4 9.55228 4 9Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 15V10H19V15C19 16.6569 17.6569 18 16 18H8C6.34315 18 5 16.6569 5 15Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14 14H10", vectorEffect: "non-scaling-stroke" })
] }), l5 = P(a5), c5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 13L12 19L6.00002 13", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5L12 18.5", vectorEffect: "non-scaling-stroke" })
] }), Qd = P(c5), u5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M11 18L5.00002 12L11 6.00002", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 12L5.50002 12", vectorEffect: "non-scaling-stroke" })
] }), d5 = P(u5), f5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M13 6L19 12L13 18", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12H18.5", vectorEffect: "non-scaling-stroke" })
] }), h5 = P(f5), p5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 11L12 5.00002L18 11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 19L12 5.50002", vectorEffect: "non-scaling-stroke" })
] }), Jd = P(p5), m5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9.76367 18C10.313 18.6137 11.1113 19 11.9998 19C12.8883 19 13.6866 18.6137 14.2359 18", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M12 4C9.23858 4 7 6.23858 7 9V9.72607C7 9.90146 6.93033 10.0697 6.8063 10.1937L6.03225 10.9678C5.39962 11.6004 5.17871 12.5361 5.46164 13.3849C5.78314 14.3494 6.68577 15 7.70246 15H16.2975C17.3142 15 18.2169 14.3494 18.5384 13.3849C18.8213 12.5361 18.6004 11.6004 17.9678 10.9678L17.1937 10.1937C17.0697 10.0697 17 9.90146 17 9.72607V9C17 6.23858 14.7614 4 12 4Z", vectorEffect: "non-scaling-stroke" })
] }), g5 = P(m5), v5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 7.50006C15 5.49507 17.5 5.50004 20 7.50006V16.9194C20 17.7579 19.0021 18.2442 18.2289 17.9199C16.2959 17.109 14.2941 17.4668 12 19M12 7.50006C9 5.49507 6.5 5.50004 4 7.50006L4 16.9194C4 17.7579 4.99792 18.2442 5.77115 17.9199C7.7041 17.109 9.70585 17.4668 12 19M12 7.50006V19", vectorEffect: "non-scaling-stroke" }) }), y5 = P(v5), w5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("rect", { width: 16, height: 12, x: 4, y: 7, stroke: "currentColor", rx: 3, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M8.9999 6.99998V5.99998C8.9999 4.89542 9.89533 3.99998 10.9999 3.99998H12.9999C14.1045 3.99998 14.9999 4.89542 14.9999 5.99998V6.99998", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M7.9999 6.99998V19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M15.9999 6.99998V19", vectorEffect: "non-scaling-stroke" })
] }), b5 = P(w5), C5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 3V5M15 7V5M15 5H9M15 5H16C17.6569 5 19 6.34315 19 8V10V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V10V8C5 6.34315 6.34315 5 8 5H9M9 5V3M9 5V7", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 10H19", vectorEffect: "non-scaling-stroke" })
] }), ef = P(C5), x5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M4 6V15C4 16.6569 5.34315 18 7 18H20", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4 13L8.5 9L12 10L16.5 6L20 9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5.5 17L9 13.5L12.5 15.5L16.5 12L20 14.5", vectorEffect: "non-scaling-stroke" })
] }), k5 = P(x5), S5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9.00002 12L11.4 14.4L15 9.6", vectorEffect: "non-scaling-stroke" })
] }), M5 = P(S5), E5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM16.52 9.39C16.7354 9.10281 16.6772 8.69539 16.39 8.48C16.1028 8.26461 15.6954 8.32281 15.48 8.61L11.4297 14.0104L8.95963 11.5404C8.70578 11.2865 8.29423 11.2865 8.04039 11.5404C7.78655 11.7942 7.78655 12.2058 8.04039 12.4596L11.0404 15.4596C11.1736 15.5929 11.3581 15.6617 11.5461 15.6484C11.734 15.635 11.9069 15.5407 12.02 15.39L16.52 9.39Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), Ki = P(E5), P5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10.5 18L17.5 8.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 13L10.5 18", vectorEffect: "non-scaling-stroke" })
] }), N5 = P(P5), T5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 10L12 16", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 10L12 16", vectorEffect: "non-scaling-stroke" })
] }), dr = P(T5), L5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 6L9 12", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 18L9 12", vectorEffect: "non-scaling-stroke" })
] }), R5 = P(L5), D5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 6L15 12", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 18L15 12", vectorEffect: "non-scaling-stroke" })
] }), fr = P(D5), A5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 14L12 8", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 14L12 8", vectorEffect: "non-scaling-stroke" })
] }), tf = P(A5), _5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("rect", { width: 16, height: 16, x: 4, y: 4, fill: "currentColor", rx: 8, vectorEffect: "non-scaling-stroke" }) }), I5 = P(_5), V5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9V12L15.5 14", vectorEffect: "non-scaling-stroke" })
] }), O5 = P(V5), F5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M18.6499 6.83752C18.6499 8.04565 17.6705 9.02502 16.4624 9.02502L14.2749 9.0246V6.83752C14.2749 5.6294 15.2543 4.65002 16.4624 4.65002C17.6705 4.65002 18.6499 5.6294 18.6499 6.83752Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M9.0249 16.463C9.0249 17.6711 8.04553 18.6505 6.8374 18.6505C5.62928 18.6505 4.6499 17.6711 4.6499 16.463C4.6499 15.2548 5.62928 14.2755 6.8374 14.2755L9.0249 14.275V16.463Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M18.6499 16.4625C18.6499 17.6706 17.6705 18.65 16.4624 18.65C15.2543 18.65 14.2749 17.6706 14.2749 16.4625V14.275H16.4624C17.6705 14.275 18.6499 15.2544 18.6499 16.4625Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M9.0249 6.83771V9.02521H6.8374C5.62928 9.02521 4.6499 8.04583 4.6499 6.83771C4.6499 5.62958 5.62928 4.65021 6.8374 4.65021C8.04553 4.65021 9.0249 5.62958 9.0249 6.83771Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M14.2749 9.02502H9.0249V14.275H14.2749V9.02502Z", vectorEffect: "non-scaling-stroke" })
] }), nf = P(F5), B5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M6 17V8.5C6 7.94772 6.44772 7.5 7 7.5H15C15.5523 7.5 16 7.94772 16 8.5V17C16 18.6569 14.6569 20 13 20H9C7.34315 20 6 18.6569 6 17Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M8 2V2C7.44772 2.55228 7.44772 3.44772 8 4V4", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 2V2C11.4477 2.55228 11.4477 3.44772 12 4V4", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 11H17.5C18.6046 11 19.5 11.8954 19.5 13V15C19.5 16.1046 18.6046 17 17.5 17H16", vectorEffect: "non-scaling-stroke" })
] }), $5 = P(B5), W5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16.9497 7.05026L12 12L7.05025 16.9498", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12L7.05025 7.05026L16.9497 16.9498", vectorEffect: "non-scaling-stroke" })
] }), rf = P(W5), j5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M17 8V17C17 18.6569 15.6569 20 14 20H10C8.34315 20 7 18.6569 7 17V8M17 8H15.5M17 8H18.5M7 8H8.5M7 8H5.5M15.5 8V5C15.5 4.44772 15.0523 4 14.5 4L9.5 4C8.94772 4 8.5 4.44772 8.5 5V8M15.5 8H8.5", vectorEffect: "non-scaling-stroke" }) }), H5 = P(j5), U5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M6 4H18C19.6569 4 21 5.34315 21 7V13C21 14.6569 19.6569 16 18 16H6C4.34315 16 3 14.6569 3 13V7C3 5.34315 4.34315 4 6 4Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 20H17", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 20L9 16", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 20L15 16", vectorEffect: "non-scaling-stroke" })
] }), G5 = P(U5), z5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("rect", { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M14 9H11.5C10.6716 9 10 9.67157 10 10.5V10.5C10 11.3284 10.6716 12 11.5 12H12.5C13.3284 12 14 12.6716 14 13.5V13.5C14 14.3284 13.3284 15 12.5 15H10", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M7 12V12.1", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M17 12V12.1", vectorEffect: "non-scaling-stroke" })
] }), K5 = P(z5), Y5 = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", strokeDasharray: "2 2", vectorEffect: "non-scaling-stroke" }) }), of = P(Y5), Z5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 15V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5V14M12 14L9 11M12 14L15 11", vectorEffect: "non-scaling-stroke" })
] }), X5 = P(Z5), q5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 6.5, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 17.5, cy: 12, r: 1.5, fill: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), Q5 = P(q5), J5 = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 1.5, fill: "currentColor", transform: "rotate(90 12 12)", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 12, cy: 6.5, r: 1.5, fill: "currentColor", transform: "rotate(90 12 6.5)", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 12, cy: 17.5, r: 1.5, fill: "currentColor", transform: "rotate(90 12 17.5)", vectorEffect: "non-scaling-stroke" })
] }), sf = P(J5), ew = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M20 15V8.61803C20 8.23926 19.786 7.893 19.4472 7.72361L13.3416 4.67082C12.4971 4.24853 11.5029 4.24853 10.6584 4.67082L4.55279 7.72361C4.214 7.893 4 8.23926 4 8.61803V15C4 16.6569 5.34315 18 7 18H17C18.6569 18 20 16.6569 20 15Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M4 9L11.4969 12.7484C11.8136 12.9068 12.1864 12.9068 12.5031 12.7484L20 9", vectorEffect: "non-scaling-stroke" })
] }), tw = P(ew), nw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("rect", { width: 16, height: 12, x: 4, y: 6, stroke: "currentColor", rx: 3, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M4.5 9.5L11.1542 12.6053C11.6903 12.8555 12.3097 12.8555 12.8458 12.6053L19.5 9.5", vectorEffect: "non-scaling-stroke" })
] }), rw = P(nw), ow = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10.0001 12L19.0001 12M19.0001 12L16.0001 9.00001M19.0001 12L16.0001 15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M11.0001 19L8.00011 19C6.34325 19 5.00011 17.6569 5.00011 16L5.00011 8.00001C5.00011 6.34315 6.34325 5.00001 8.00011 5.00001L11.0001 5.00001", vectorEffect: "non-scaling-stroke" })
] }), sw = P(ow), iw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5919 7.66492C18.318 10.297 15.5536 12.6649 11.9999 12.6649C8.44623 12.6649 5.68183 10.297 4.40796 7.66492", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M10.0083 13.0159L8.89773 16.3351", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M14.0576 13.0159L15.1682 16.3351", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M17.5232 10.543L20 13.0159", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M6.47681 10.543L4.00002 13.0159", vectorEffect: "non-scaling-stroke" })
] }), af = P(iw), aw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M20 12C19 9 16 6 12 6C8 6 5 9 4 12C5 15 8 18 12 18C16 18 19 15 20 12Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 2.35, stroke: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), lf = P(aw), lw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14.8787 4.87868L17.1213 7.12132C17.684 7.68393 18 8.44699 18 9.24264V17C18 18.6569 16.6569 20 15 20H9.00002C7.34317 20 6.00002 18.6569 6.00002 17V7C6.00002 5.34315 7.34317 4 9.00002 4H12.7574C13.553 4 14.3161 4.31607 14.8787 4.87868Z", vectorEffect: "non-scaling-stroke" }) }), cw = P(lw), uw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M11.4375 6C11.09 5.38228 10.4364 5 9.72763 5H7.19998C6.07987 5 5.51982 5 5.092 5.21799C4.71567 5.40973 4.40971 5.71569 4.21796 6.09202C3.99998 6.51984 3.99998 7.07989 3.99998 8.2V14.2C3.99998 15.8802 3.99998 16.7202 4.32696 17.362C4.61458 17.9265 5.07352 18.3854 5.63801 18.673C6.27974 19 7.11982 19 8.79998 19H15.2C16.8801 19 17.7202 19 18.3619 18.673C18.9264 18.3854 19.3854 17.9265 19.673 17.362C20 16.7202 20 15.8802 20 14.2V11.8C20 10.1198 20 9.27976 19.673 8.63803C19.3854 8.07354 18.9264 7.6146 18.3619 7.32698C17.7202 7 16.8801 7 15.2 7H13.1473C12.4386 7 11.7849 6.61772 11.4375 6V6Z", vectorEffect: "non-scaling-stroke" }) }), dw = P(uw), fw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M10.4375 5C10.09 4.38228 9.43639 4 8.72765 4H7.12954C6.07585 4 5.54901 4 5.14167 4.19355C4.72595 4.39108 4.39108 4.72595 4.19355 5.14167C4 5.54901 4 6.07585 4 7.12954V11.2C4 12.8802 4 13.7202 4.32698 14.362C4.6146 14.9265 5.07354 15.3854 5.63803 15.673C6.27976 16 7.11984 16 8.8 16H13.2C14.8802 16 15.7202 16 16.362 15.673C16.9265 15.3854 17.3854 14.9265 17.673 14.362C18 13.7202 18 12.8802 18 11.2V10.4168C18 9.09704 18 8.43714 17.796 7.91257C17.4911 7.12874 16.8713 6.50887 16.0874 6.20402C15.5629 6 14.903 6 13.5832 6H12.1473C11.4386 6 10.785 5.61772 10.4375 5V5Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M7 19H11.4C14.7603 19 16.4405 19 17.7239 18.346C18.8529 17.7708 19.7708 16.8529 20.346 15.7239C21 14.4405 21 12.7603 21 9.4V9", vectorEffect: "non-scaling-stroke" })
] }), hw = P(fw), pw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M4 6V15C4 16.6569 5.34315 18 7 18H20", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 14L11.6464 10.3536C11.8417 10.1583 12.1583 10.1583 12.3536 10.3536L14.6464 12.6464C14.8417 12.8417 15.1583 12.8417 15.3536 12.6464L20 8M20 8V11M20 8H17", vectorEffect: "non-scaling-stroke" })
] }), mw = P(pw), gw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15.0625 6C12.875 6 12 8 12 8C12 8 11.125 6 8.9375 6C7.1875 6 5 7.71429 5 10.2857C5 14.5714 12 19 12 19C12 19 19 14.5714 19 10.2857C19 8.14286 17.25 6 15.0625 6Z", vectorEffect: "non-scaling-stroke" }) }), vw = P(gw), yw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M6.25629 7.60265L10.2563 4.74551C11.2994 4.00044 12.7006 4.00044 13.7437 4.74551L17.7437 7.60265C18.5321 8.16579 19 9.075 19 10.0439V16C19 17.6569 17.6569 19 16 19H15C14.4477 19 14 18.5523 14 18V15.5C14 14.3954 13.1046 13.5 12 13.5C10.8954 13.5 10 14.3954 10 15.5V18C10 18.5523 9.55228 19 9 19H8C6.34315 19 5 17.6569 5 16V10.0439C5 9.075 5.4679 8.16579 6.25629 7.60265Z", vectorEffect: "non-scaling-stroke" }) }), ww = P(yw), bw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.9999 18C15.3136 18 17.9999 15.3137 17.9999 12C17.9999 8.68629 15.3136 6 11.9999 6V18Z", vectorEffect: "non-scaling-stroke" })
] }), cf = P(bw), Cw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 12V15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 9V9.1", vectorEffect: "non-scaling-stroke" })
] }), uf = P(Cw), xw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM11.35 9.10001C11.35 9.45899 11.641 9.75001 12 9.75001C12.359 9.75001 12.65 9.45899 12.65 9.10001V9.00001C12.65 8.64102 12.359 8.35001 12 8.35001C11.641 8.35001 11.35 8.64102 11.35 9.00001V9.10001ZM11.35 15.1C11.35 15.459 11.641 15.75 12 15.75C12.359 15.75 12.65 15.459 12.65 15.1V12.1C12.65 11.741 12.359 11.45 12 11.45C11.641 11.45 11.35 11.741 11.35 12.1L11.35 15.1Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), df = P(xw), kw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 10H11C11.5523 10 12 10.4477 12 11V17C12 17.5523 11.5523 18 11 18H10H14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 7V7.1", vectorEffect: "non-scaling-stroke" })
] }), Sw = P(kw), Mw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 5H14C15.6569 5 17 6.34315 17 8V14C17 15.6569 15.6569 17 14 17H8C6.34315 17 5 15.6569 5 14V8C5 6.34315 6.34315 5 8 5Z", vectorEffect: "non-scaling-stroke" })
] }), ff = P(Mw), Ew = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M8 16H16V17C16 18.6569 14.6569 20 13 20H11C9.34315 20 8 18.6569 8 17V16Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 16V11.5M12 11.5L10.5 10.5M12 11.5L13.5 10.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M8 16V13.9192C8 13.6348 7.87558 13.3669 7.67824 13.162C6.63904 12.0832 6 10.6162 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 10.6162 17.361 12.0832 16.3218 13.162C16.1244 13.3669 16 13.6348 16 13.9192V16", vectorEffect: "non-scaling-stroke" })
] }), Pw = P(Ew), Nw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16 10H8C6.34315 10 5 11.3431 5 13V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13C19 11.3431 17.6569 10 16 10Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14V15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 10V8C8 5.79086 9.79086 4 12 4V4C14.2091 4 16 5.79086 16 8V10", vectorEffect: "non-scaling-stroke" })
] }), Tw = P(Nw), Lw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16 10H8C6.34315 10 5 11.3431 5 13V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V13C19 11.3431 17.6569 10 16 10Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 14V15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M8 10V8C8 5.79086 9.79086 4 12 4V4", vectorEffect: "non-scaling-stroke" })
] }), Rw = P(Lw), Dw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M6.91895 16.2844C5.94243 15.1275 5.35384 13.6325 5.35384 12C5.35384 8.32943 8.32943 5.35384 12 5.35384C15.6706 5.35384 18.6461 8.32943 18.6461 12C18.6461 13.6325 18.0576 15.1275 17.0811 16.2844C17.417 16.4944 17.739 16.7244 18.0453 16.973L18.1792 17.0815C19.3168 15.6997 20 13.9296 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.9296 4.68318 15.6997 5.82087 17.0815L5.95467 16.973C6.26096 16.7244 6.58297 16.4944 6.91895 16.2844Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.0372 18.2154C15.6619 19.3313 13.9091 20 12 20C10.0909 20 8.33808 19.3313 6.96283 18.2154C8.33808 17.0995 10.0909 16.4308 12 16.4308C13.9091 16.4308 15.6619 17.0995 17.0372 18.2154Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M12 14.7077C13.6314 14.7077 14.9539 13.3852 14.9539 11.7539C14.9539 10.1225 13.6314 8.8 12 8.8C10.3686 8.8 9.04614 10.1225 9.04614 11.7539C9.04614 13.3852 10.3686 14.7077 12 14.7077Z", vectorEffect: "non-scaling-stroke" })
] }), Aw = P(Dw), _w = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M5 6C5 5.44772 5.44772 5 6 5H9C9.55228 5 10 5.44772 10 6V8C10 8.55228 9.55228 9 9 9H6C5.44772 9 5 8.55228 5 8V6Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M5 14C5 13.4477 5.44772 13 6 13H9C9.55228 13 10 13.4477 10 14V18C10 18.5523 9.55228 19 9 19H6C5.44772 19 5 18.5523 5 18V14Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M14 16C14 15.4477 14.4477 15 15 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H15C14.4477 19 14 18.5523 14 18V16Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M14 6C14 5.44772 14.4477 5 15 5H18C18.5523 5 19 5.44772 19 6V10C19 10.5523 18.5523 11 18 11H15C14.4477 11 14 10.5523 14 10V6Z", vectorEffect: "non-scaling-stroke" })
] }), Iw = P(_w), Vw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.99989 7H18.9999", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M5 12H19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.99989 17H18.9999", vectorEffect: "non-scaling-stroke" })
] }), hf = P(Vw), Ow = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 14L14.2361 13.618C12.8284 12.9142 11.1716 12.9142 9.76393 13.618L9 14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 10V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14 10V11", vectorEffect: "non-scaling-stroke" })
] }), Fw = P(Ow), Bw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M17 6H6.85714C5.27919 6 4 7.27919 4 8.85714V15.1293C4 16.7148 5.28525 18 6.87068 18C6.94791 18 7.01647 18.0494 7.04089 18.1227L7.56126 19.6838C7.7771 20.3313 8.56389 20.5771 9.10994 20.1675L11.7333 18.2C11.9064 18.0702 12.117 18 12.3333 18H17C18.6569 18 20 16.6569 20 15V9C20 7.34315 18.6569 6 17 6Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M13.4389 9C14.6716 9 15.5 10.1175 15.5 11.16C15.5 13.2713 12.0622 15 12 15C11.9378 15 8.5 13.2713 8.5 11.16C8.5 10.1175 9.32833 9 10.5611 9C11.2689 9 11.7317 9.34125 12 9.64125C12.2683 9.34125 12.7311 9 13.4389 9Z", vectorEffect: "non-scaling-stroke" })
] }), $w = P(Bw), Ww = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M14 17V14C14 12.8954 13.1046 12 12 12H7C5.89543 12 5 12.8954 5 14V19.7929C5 20.2383 5.53857 20.4614 5.85355 20.1464L7 19H12C13.1046 19 14 18.1046 14 17Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 9V7C10 5.89543 10.8954 5 12 5H17C18.1046 5 19 5.89543 19 7V12.7929C19 13.2383 18.4614 13.4614 18.1464 13.1464L17 12H16.5", vectorEffect: "non-scaling-stroke" })
] }), jw = P(Ww), Hw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M5.54981 14.121L6.2641 10.121C6.68993 7.73641 8.76387 6 11.1862 6H12.8138C15.2361 6 17.3101 7.73641 17.7359 10.121L18.4502 14.121C18.9974 17.1857 16.6412 20 13.528 20H10.472C7.35882 20 5.00255 17.1857 5.54981 14.121Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M10.3257 2.5H13.6743C14.3386 2.5 14.8183 3.13591 14.6358 3.77472L14 6H10L9.36421 3.77472C9.18169 3.1359 9.66135 2.5 10.3257 2.5Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M14 10H11.5C10.6716 10 10 10.6716 10 11.5V11.5C10 12.3284 10.6716 13 11.5 13H12.5C13.3284 13 14 13.6716 14 14.5V14.5C14 15.3284 13.3284 16 12.5 16H10", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 16V17", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 9V10", vectorEffect: "non-scaling-stroke" })
] }), Uw = P(Hw), Gw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M9 3H14C15.6569 3 17 4.34315 17 6V14C17 15.6569 15.6569 17 14 17H9C7.34315 17 6 15.6569 6 14V6C6 4.34315 7.34315 3 9 3Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9 20H10.4C13.7603 20 15.4405 20 16.7239 19.346C17.8529 18.7708 18.7708 17.8529 19.346 16.7239C20 15.4405 20 13.7603 20 10.4V9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M13.5 7H11C10.1716 7 9.5 7.67157 9.5 8.5V8.5C9.5 9.32843 10.1716 10 11 10H12C12.8284 10 13.5 10.6716 13.5 11.5V11.5C13.5 12.3284 12.8284 13 12 13H9.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M11.5 7V6", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M11.5 14V13", vectorEffect: "non-scaling-stroke" })
] }), zw = P(Gw), Kw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 7C6 5.34315 7.34315 4 9 4H15C16.6569 4 18 5.34315 18 7V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V7Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 12H14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 8H14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M10 16.5C10 15.9477 10.4477 15.5 11 15.5H13C13.5523 15.5 14 15.9477 14 16.5V20H10V16.5Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19 20H5", vectorEffect: "non-scaling-stroke" })
] }), Yw = P(Kw), Zw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 12L17.9536 14.9768C17.9781 14.989 18.0078 14.9765 18.0161 14.9505C18.4772 13.5039 18.0133 12.0621 17.0728 11.0423C17.0459 11.0131 17.0663 10.9652 17.1061 10.9652H19.955C19.9799 10.9652 20.0001 10.9454 19.9995 10.9205C19.9697 9.47309 18.492 7.53588 15.0948 7.50048C15.0571 7.50008 15.0349 7.45634 15.0585 7.42687L16.982 5.02247C16.993 5.00876 16.9952 4.99013 16.9869 4.97467C16.4577 3.99167 13.9831 3.51695 12 5.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 12L6.04641 14.9768C6.02191 14.989 5.99217 14.9766 5.98385 14.9505C5.52281 13.5039 5.98675 12.0621 6.92718 11.0423C6.95411 11.0131 6.93366 10.9652 6.89394 10.9652H4.045C4.02015 10.9652 3.99995 10.9454 4.00046 10.9206C4.0303 9.47311 5.50795 7.5359 8.90518 7.50049C8.94291 7.5001 8.96508 7.45635 8.94151 7.42689L7.01799 5.02248C7.00702 5.00878 7.00482 4.99014 7.01314 4.97469C7.54231 3.99168 10.0169 3.51697 12 5.50001", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M8 19H16M13.5 13L14 19M10.5 13L10 19", vectorEffect: "non-scaling-stroke" })
] }), Xw = P(Zw), qw = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 13L5.5 18.5L11 17M7 13L14.5 5.5C15.6046 4.39543 17.3954 4.39543 18.5 5.5V5.5C19.6046 6.60457 19.6046 8.39543 18.5 9.5L11 17M7 13L11 17", vectorEffect: "non-scaling-stroke" }) }), Qw = P(qw), Jw = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 9, cy: 9, r: 4, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 13C17.6569 13 19 11.6569 19 10C19 8.34315 17.6569 7 16 7", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.00002 18C4.00002 18 5.50002 16 9.00002 16C12.5 16 14 18 14 18", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M17 16C19 16 19.75 17 19.75 17", vectorEffect: "non-scaling-stroke" })
] }), eb = P(Jw), tb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 9, r: 4, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 18C7 18 8.5 16 12 16C15.5 16 17 18 17 18", vectorEffect: "non-scaling-stroke" })
] }), nb = P(tb), rb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 20C15 16.8 18 13.9346 18 10.4C18 6.86538 15.3137 4 12 4C8.68629 4 6 6.86538 6 10.4C6 13.9346 9 16.8 12 20Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 4, height: 4, x: 10, y: 8, stroke: "currentColor", rx: 2, vectorEffect: "non-scaling-stroke" })
] }), ob = P(rb), sb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 12, r: 8, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M17.5 6.5L6.5 17.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M17.5 17.5L6.5 6.5", vectorEffect: "non-scaling-stroke" })
] }), ib = P(sb), ab = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M18 6.99999L18 18.8258C18 19.6801 16.9979 20.141 16.3492 19.585L15.1663 18.5711C14.7851 18.2444 14.2207 18.2509 13.8472 18.5865L12.6599 19.653C12.2785 19.9957 11.6998 19.9944 11.32 19.65L10.1531 18.5921C9.77987 18.2537 9.21318 18.2458 8.83066 18.5737L7.65079 19.585C7.00211 20.141 6 19.6801 6 18.8258L6 6.99999C6 5.34313 7.34314 3.99999 9 3.99999L15 3.99998C16.6569 3.99998 18 5.34313 18 6.99999Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9 8H15", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M9 12H13", vectorEffect: "non-scaling-stroke" })
] }), lb = P(ab), cb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M11 14.9999L9 12.9999M11 14.9999C12.0745 14.5913 13.413 14.0759 14.3846 13.4615M11 14.9999V18.9999C11 18.9999 14.2538 18.1153 15 16.9999C15.8308 15.7538 14.3846 13.4615 14.3846 13.4615M9 12.9999C9.40934 11.938 9.92477 10.6124 10.5385 9.6539M9 12.9999H5C5 12.9999 5.88462 9.74607 7 8.99993C8.24615 8.16917 10.5385 9.6539 10.5385 9.6539M10.5385 9.6539C12.5 6.50003 14.5 5.00003 19 5.00003C19 8.50003 18 11.5 14.3846 13.4615", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M4.66921 17.526C4.74318 16.6629 5.46533 16 6.33156 16V16C7.25301 16 8 16.747 8 17.6684V17.6684C8 18.5347 7.3371 19.2568 6.47404 19.3308L4.5 19.5L4.66921 17.526Z", vectorEffect: "non-scaling-stroke" })
] }), ub = P(cb), db = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M16 19V19C17.6569 19 19 17.6569 19 16V10.2426C19 9.44699 18.6839 8.68393 18.1213 8.12132L15.8787 5.87868C15.3161 5.31607 14.553 5 13.7574 5H8V5C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19V19M16 19V16C16 14.8954 15.1046 14 14 14H10C8.89543 14 8 14.8954 8 16V19M16 19H8", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M15 6V10H9V6", vectorEffect: "non-scaling-stroke" })
] }), fb = P(db), hb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M10.5 18H7C5.34315 18 4 16.6569 4 15V9C4 7.34315 5.34315 6 7 6H17C18.6569 6 20 7.34315 20 9V9", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 9, height: 9, x: 13, y: 11, stroke: "currentColor", rx: 4.5, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M17.5 14V15.054C17.5 15.3326 17.6393 15.5928 17.8711 15.7474L19 16.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 10L11 10", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M7 14H9", vectorEffect: "non-scaling-stroke" })
] }), pb = P(hb), mb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6.5 16V16C8.60581 12.7243 13.3942 12.7243 15.5 16V16", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 16L19 19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 11, cy: 10.5, r: 2.5, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 14, height: 14, x: 4, y: 4, stroke: "currentColor", rx: 7, vectorEffect: "non-scaling-stroke" })
] }), gb = P(mb), vb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M16 16L19 19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 14, height: 14, x: 4, y: 4, stroke: "currentColor", rx: 7, vectorEffect: "non-scaling-stroke" })
] }), pf = P(vb), yb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M10.3036 4.71638C11.0868 3.46223 12.9132 3.46223 13.6964 4.71638L14.4364 5.90129C14.7887 6.46555 15.3986 6.81766 16.0635 6.8407L17.4596 6.88908C18.9373 6.94029 19.8505 8.52194 19.156 9.8273L18.4998 11.0606C18.1873 11.6479 18.1873 12.3521 18.4998 12.9394L19.156 14.1727C19.8505 15.4781 18.9373 17.0597 17.4596 17.1109L16.0635 17.1593C15.3986 17.1823 14.7887 17.5345 14.4364 18.0987L13.6964 19.2836C12.9132 20.5378 11.0868 20.5378 10.3036 19.2836L9.56365 18.0987C9.21127 17.5345 8.60139 17.1823 7.93654 17.1593L6.54039 17.1109C5.06266 17.0597 4.14949 15.4781 4.84401 14.1727L5.50018 12.9394C5.81266 12.3521 5.81266 11.6479 5.50018 11.0606L4.84401 9.8273C4.14949 8.52194 5.06266 6.94029 6.54039 6.88908L7.93654 6.8407C8.60139 6.81766 9.21127 6.46555 9.56365 5.90129L10.3036 4.71638Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 11.999, cy: 12, r: 2.5, stroke: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), wb = P(yb), bb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M6 13V21", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M18 13V21", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 3V11", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M6 3L6 4", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M18 3L18 4", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 20L12 21", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 6, height: 3, x: 3, y: 7, stroke: "currentColor", rx: 1.5, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 6, height: 3, x: 9, y: 14, stroke: "currentColor", rx: 1.5, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("rect", { width: 6, height: 3, x: 15, y: 7, stroke: "currentColor", rx: 1.5, vectorEffect: "non-scaling-stroke" })
] }), Cb = P(bb), xb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M11.7977 3.69779C11.9251 3.63406 12.0747 3.63406 12.2021 3.69779C12.3154 3.75444 12.3728 3.84956 12.3952 3.88789C12.4197 3.92977 12.444 3.98153 12.4647 4.02555L12.4688 4.03428L12.8928 4.93538L13.8346 5.07976L13.8442 5.08122C13.89 5.08823 13.9461 5.0968 13.9933 5.1087C14.0395 5.12036 14.1455 5.15012 14.2306 5.24425C14.3225 5.34607 14.3628 5.48181 14.3462 5.61368C14.331 5.73432 14.2664 5.81806 14.2363 5.85495C14.2056 5.89263 14.1658 5.93327 14.1323 5.96743L14.1256 5.97427L13.4348 6.68001L13.5985 7.68083L13.6 7.69027C13.608 7.73883 13.6172 7.7953 13.6209 7.84374C13.6243 7.8894 13.6302 7.99564 13.5743 8.10354C13.5119 8.22399 13.3972 8.31509 13.2564 8.34246C13.1285 8.36734 13.0233 8.32389 12.9816 8.30574C12.9371 8.28636 12.8872 8.25883 12.8462 8.23614L12.8377 8.23146L11.9999 7.76934L11.1621 8.23146L11.1536 8.23614L11.1536 8.23615C11.1125 8.25884 11.0627 8.28636 11.0182 8.30574C10.9765 8.32389 10.8713 8.36734 10.7434 8.34246C10.6026 8.31509 10.4879 8.22399 10.4255 8.10354C10.3696 7.99564 10.3755 7.8894 10.3789 7.84374C10.3826 7.7953 10.3918 7.73883 10.3998 7.69027L10.4013 7.68083L10.565 6.68001L9.87419 5.97427L9.86748 5.96742C9.83402 5.93327 9.79421 5.89263 9.76348 5.85495C9.73338 5.81806 9.66874 5.73432 9.65355 5.61368C9.63695 5.48181 9.67727 5.34607 9.76924 5.24425C9.85426 5.15012 9.96026 5.12036 10.0065 5.1087C10.0537 5.0968 10.1098 5.08823 10.1556 5.08122L10.1556 5.08122L10.1652 5.07976L11.1069 4.93538L11.531 4.03428L11.5351 4.02555L11.5351 4.02555C11.5558 3.98153 11.5801 3.92977 11.6046 3.88789C11.6269 3.84956 11.6844 3.75444 11.7977 3.69779Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M5.79768 6.69779C5.92512 6.63406 6.07467 6.63406 6.20211 6.69779C6.31538 6.75444 6.37285 6.84956 6.39522 6.88789C6.41966 6.92977 6.444 6.98153 6.46469 7.02555L6.46879 7.03428L6.89285 7.93538L7.83464 8.07976L7.84417 8.08122C7.89003 8.08823 7.94612 8.0968 7.99331 8.1087C8.03953 8.12036 8.14553 8.15012 8.23056 8.24425C8.32252 8.34607 8.36284 8.48181 8.34624 8.61368C8.33105 8.73432 8.26641 8.81806 8.23631 8.85495C8.20558 8.89263 8.16576 8.93327 8.1323 8.96743L8.1256 8.97427L7.4348 9.68001L7.59845 10.6808L7.6 10.6903C7.60796 10.7388 7.61721 10.7953 7.62087 10.8437C7.62432 10.8894 7.63019 10.9956 7.57431 11.1035C7.51194 11.224 7.39718 11.3151 7.25642 11.3425C7.12848 11.3673 7.02333 11.3239 6.98162 11.3057C6.93709 11.2864 6.88725 11.2588 6.84616 11.2361L6.83768 11.2315L5.9999 10.7693L5.16211 11.2315L5.15363 11.2361L5.15363 11.2361C5.11254 11.2588 5.0627 11.2864 5.01817 11.3057C4.97646 11.3239 4.87131 11.3673 4.74337 11.3425C4.60261 11.3151 4.48786 11.224 4.42548 11.1035C4.36961 10.9956 4.37547 10.8894 4.37892 10.8437C4.38258 10.7953 4.39183 10.7388 4.39979 10.6903L4.40134 10.6808L4.56499 9.68001L3.87419 8.97427L3.86748 8.96742C3.83402 8.93327 3.79421 8.89263 3.76348 8.85495C3.73338 8.81806 3.66874 8.73432 3.65355 8.61368C3.63695 8.48181 3.67727 8.34607 3.76924 8.24425C3.85426 8.15012 3.96026 8.12036 4.00649 8.1087C4.05367 8.0968 4.10975 8.08823 4.15562 8.08122L4.15562 8.08122L4.16516 8.07976L5.10694 7.93538L5.531 7.03428L5.5351 7.02555L5.5351 7.02555C5.5558 6.98153 5.58013 6.92977 5.60457 6.88789C5.62694 6.84956 5.68441 6.75444 5.79768 6.69779Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { fill: "currentColor", d: "M17.7977 6.69779C17.9251 6.63406 18.0747 6.63406 18.2021 6.69779C18.3154 6.75444 18.3728 6.84956 18.3952 6.88789C18.4197 6.92977 18.444 6.98153 18.4647 7.02555L18.4688 7.03428L18.8928 7.93538L19.8346 8.07976L19.8442 8.08122C19.89 8.08823 19.9461 8.0968 19.9933 8.1087C20.0395 8.12036 20.1455 8.15012 20.2306 8.24425C20.3225 8.34607 20.3628 8.48181 20.3462 8.61368C20.331 8.73432 20.2664 8.81806 20.2363 8.85495C20.2056 8.89263 20.1658 8.93327 20.1323 8.96743L20.1256 8.97427L19.4348 9.68001L19.5985 10.6808L19.6 10.6903C19.608 10.7388 19.6172 10.7953 19.6209 10.8437C19.6243 10.8894 19.6302 10.9956 19.5743 11.1035C19.5119 11.224 19.3972 11.3151 19.2564 11.3425C19.1285 11.3673 19.0233 11.3239 18.9816 11.3057C18.9371 11.2864 18.8872 11.2588 18.8462 11.2361L18.8377 11.2315L17.9999 10.7693L17.1621 11.2315L17.1536 11.2361L17.1536 11.2361C17.1125 11.2588 17.0627 11.2864 17.0182 11.3057C16.9765 11.3239 16.8713 11.3673 16.7434 11.3425C16.6026 11.3151 16.4879 11.224 16.4255 11.1035C16.3696 10.9956 16.3755 10.8894 16.3789 10.8437C16.3826 10.7953 16.3918 10.7388 16.3998 10.6903L16.4013 10.6808L16.565 9.68001L15.8742 8.97427L15.8675 8.96742C15.834 8.93327 15.7942 8.89263 15.7635 8.85495C15.7334 8.81806 15.6687 8.73432 15.6536 8.61368C15.6369 8.48181 15.6773 8.34607 15.7692 8.24425C15.8543 8.15012 15.9603 8.12036 16.0065 8.1087C16.0537 8.0968 16.1098 8.08823 16.1556 8.08122L16.1556 8.08122L16.1652 8.07976L17.1069 7.93538L17.531 7.03428L17.5351 7.02555L17.5351 7.02555C17.5558 6.98153 17.5801 6.92977 17.6046 6.88789C17.6269 6.84956 17.6844 6.75444 17.7977 6.69779Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 11V19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M6 14C7 14.3333 9 16 9 19", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M18 14C17 14.3333 15 16 15 19", vectorEffect: "non-scaling-stroke" })
] }), kb = P(xb), Sb = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M11.4673 5.64161C11.6384 5.27788 11.724 5.09602 11.8402 5.03792C11.9413 4.98736 12.0587 4.98736 12.1598 5.03792C12.276 5.09602 12.3616 5.27788 12.5327 5.64161L14.1567 9.09236C14.2072 9.19974 14.2325 9.25343 14.2694 9.29512C14.3021 9.33202 14.3413 9.36193 14.3848 9.38317C14.434 9.40717 14.4905 9.41583 14.6035 9.43315L18.236 9.99005C18.6185 10.0487 18.8097 10.078 18.8982 10.176C18.9752 10.2613 19.0115 10.3784 18.9968 10.4949C18.98 10.6287 18.8415 10.7702 18.5646 11.0531L15.9371 13.7374C15.8552 13.8211 15.8142 13.8629 15.7878 13.9127C15.7644 13.9568 15.7494 14.0052 15.7436 14.0553C15.737 14.1118 15.7467 14.1709 15.766 14.2891L16.386 18.0806C16.4514 18.4805 16.4841 18.6804 16.4226 18.7991C16.3692 18.9023 16.2742 18.9747 16.164 18.9962C16.0375 19.0208 15.8663 18.9263 15.5239 18.7375L12.2765 16.9462C12.1754 16.8904 12.1248 16.8625 12.0715 16.8515C12.0243 16.8418 11.9757 16.8418 11.9285 16.8515C11.8752 16.8625 11.8247 16.8904 11.7235 16.9462L8.47609 18.7375C8.13373 18.9263 7.96254 19.0208 7.83597 18.9962C7.72584 18.9747 7.63081 18.9023 7.57736 18.7991C7.51591 18.6804 7.54861 18.4805 7.614 18.0806L8.23396 14.2891C8.25329 14.1709 8.26295 14.1118 8.25642 14.0553C8.25063 14.0052 8.23561 13.9568 8.21222 13.9127C8.18579 13.8629 8.14484 13.8211 8.06293 13.7374L5.43544 11.0531C5.15851 10.7702 5.02005 10.6287 5.0032 10.4949C4.98854 10.3784 5.02476 10.2613 5.10177 10.176C5.19028 10.078 5.38153 10.0487 5.76405 9.99005L9.39651 9.43315C9.50948 9.41583 9.56596 9.40717 9.61515 9.38317C9.65871 9.36193 9.69792 9.33202 9.73061 9.29512C9.76753 9.25343 9.7928 9.19974 9.84333 9.09236L11.4673 5.64161Z", vectorEffect: "non-scaling-stroke" }) }), Mb = P(Sb), Eb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("rect", { width: 16, height: 12, x: 4, y: 7.5, stroke: "currentColor", rx: 3, vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", d: "M9 7.49999V6.49999C9 5.39542 9.89543 4.49999 11 4.49999H13C14.1046 4.49999 15 5.39542 15 6.49999V7.49999", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M20 12.5L4 12.5", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M11 12.5V14.25C11 14.3881 11.1119 14.5 11.25 14.5H12.75C12.8881 14.5 13 14.3881 13 14.25V12.5", vectorEffect: "non-scaling-stroke" })
] }), Pb = P(Eb), Nb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("circle", { cx: 12, cy: 13, r: 7.35, stroke: "currentColor", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", d: "M12 10.3301V12.9967L15 14.6634", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M12 5.5V3", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M10 3H14", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M19.0901 6L20.5043 7.41421", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", d: "M4.90991 6L3.4957 7.41421", vectorEffect: "non-scaling-stroke" })
] }), Tb = P(Nb), Lb = (e, t) => /* @__PURE__ */ k("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: [
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M4 7V16C4 17.6569 5.34315 19 7 19H17C18.6569 19 20 17.6569 20 16V12C20 10.3431 18.6569 9 17 9H16", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("path", { stroke: "currentColor", strokeLinejoin: "round", d: "M6 5H15C16.1046 5 17 5.89543 17 7V9H6C4.89543 9 4 8.10457 4 7C4 5.89543 4.89543 5 6 5Z", vectorEffect: "non-scaling-stroke" }),
  /* @__PURE__ */ a("circle", { cx: 16.25, cy: 13.75, r: 1.25, fill: "currentColor", vectorEffect: "non-scaling-stroke" })
] }), Rb = P(Lb), Db = (e, t) => /* @__PURE__ */ a("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ref: t, ...e, children: /* @__PURE__ */ a("path", { fill: "currentColor", fillRule: "evenodd", d: "M5.39903 19C3.87406 19 2.91012 17.3618 3.65071 16.0287L10.2517 4.14697C11.0137 2.77535 12.9863 2.77535 13.7483 4.14697L20.3493 16.0287C21.0899 17.3618 20.1259 19 18.601 19H5.39903ZM12 7.5C11.4345 7.5 10.9888 7.98166 11.0325 8.54549L11.3353 12.4456C11.3623 12.7927 11.6518 13.0607 12 13.0607C12.3482 13.0607 12.6377 12.7927 12.6647 12.4456L12.9675 8.54549C13.0112 7.98166 12.5655 7.5 12 7.5ZM12 16.4869C12.5523 16.4869 13 16.0391 13 15.4869C13 14.9346 12.5523 14.4869 12 14.4869C11.4477 14.4869 11 14.9346 11 15.4869C11 16.0391 11.4477 16.4869 12 16.4869Z", clipRule: "evenodd", vectorEffect: "non-scaling-stroke" }) }), mf = P(Db), gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Add: Z2,
  Ai: q2,
  Alert: n5,
  AlertCircle: qd,
  AlertCircleLine: J2,
  Appearance: o5,
  Archive: l5,
  ArchiveOpen: i5,
  ArrowDown: Qd,
  ArrowLeft: d5,
  ArrowRight: h5,
  ArrowUp: Jd,
  Bell: g5,
  BookOpen: y5,
  Briefcase: b5,
  Calendar: ef,
  ChartLine: k5,
  Check: N5,
  CheckCircle: Ki,
  CheckCircleLine: M5,
  ChevronDown: dr,
  ChevronLeft: R5,
  ChevronRight: fr,
  ChevronUp: tf,
  Circle: I5,
  Clock: O5,
  Cmd: nf,
  Coffee: $5,
  Cross: rf,
  Delete: H5,
  Desktop: G5,
  DollarBill: K5,
  DottedCircle: of,
  Download: X5,
  Ellipsis: sf,
  EllipsisHorizontal: Q5,
  Envelope: rw,
  EnvelopeOpen: tw,
  Exit: sw,
  ExternalLink: Om,
  EyeInvisible: af,
  EyeVisible: lf,
  File: cw,
  Folder: dw,
  Folders: hw,
  Graph: mw,
  Heart: vw,
  Home: ww,
  InProgressTask: cf,
  Info: Sw,
  InfoCircle: df,
  InfoCircleLine: uf,
  LayersFront: ff,
  Lightbulb: Pw,
  LockLocked: Tw,
  LockUnlocked: Rw,
  LogoAvatar: Aw,
  Masonry: Iw,
  Menu: hf,
  MessageFrown: Fw,
  MessageHeart: $w,
  Messages: jw,
  Money: zw,
  MoneyBag: Uw,
  Office: Yw,
  PalmTree: Xw,
  Pencil: Qw,
  People: eb,
  Person: nb,
  Pin: ob,
  Placeholder: ib,
  Receipt: lb,
  Rocket: ub,
  Save: fb,
  Schedule: pb,
  Search: pf,
  SearchPerson: gb,
  Settings: wb,
  Sliders: Cb,
  Sparkles: kb,
  Star: Mb,
  Suitcase: Pb,
  Timer: Tb,
  Wallet: Rb,
  Warning: mf
}, Symbol.toStringTag, { value: "Module" })), Ab = /^(-?)([0-9]+)?(?:([\.,])([0-9]+)?)?$/;
function vc(e, { maxDecimals: t }) {
  if (!e || e === "-")
    return {
      formattedValue: e ?? "",
      value: null
    };
  const n = e.match(Ab);
  if (!n) return null;
  let [r, o, s, i, l] = n;
  t && ((l == null ? void 0 : l.length) ?? 0) > t ? l = l == null ? void 0 : l.slice(0, t) : t === 0 && (l = ""), s = (s == null ? void 0 : s.replace(/^0+(\d)/, (d, f) => f)) ?? "";
  const c = `${o}${s}${t !== 0 ? `${i ?? ""}${l ?? ""}` : ""}`, u = parseFloat(c.replace(",", "."));
  return {
    formattedValue: c,
    value: Number.isNaN(u) ? null : u
  };
}
const Lr = (e, t, n) => new Intl.NumberFormat(t, {
  maximumFractionDigits: n,
  useGrouping: !1
}).format(e), _b = P(
  function({ locale: t, value: n, maxDecimals: r, step: o, min: s, max: i, onChange: l, ...c }, u) {
    const [d, f] = Ce(
      () => n != null ? Lr(n, t, r) : ""
    ), p = (v) => {
      const w = vc(v, { maxDecimals: r });
      if (!w) return;
      const { formattedValue: b, value: y } = w;
      f(b), l == null || l(y);
    }, m = (v) => () => {
      if (!o) return;
      if (n == null)
        return p(Lr(o ?? s ?? 0, t, r));
      const w = v === "increase" ? n + o : n - o;
      s != null && w < s || i != null && w > i || p(Lr(w, t, r));
    }, g = () => o ? /* @__PURE__ */ k(
      "div",
      {
        className: "absolute right-2 top-0.5 hidden h-full flex-col group-focus-within:flex group-hover:flex",
        onClick: (v) => v.preventDefault(),
        children: [
          /* @__PURE__ */ a(
            "div",
            {
              onClick: m("increase"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ a(Ae, { size: "sm", icon: tf })
            }
          ),
          /* @__PURE__ */ a(
            "div",
            {
              onClick: m("decrease"),
              className: "h-4 cursor-pointer",
              role: "button",
              children: /* @__PURE__ */ a(Ae, { size: "sm", icon: dr })
            }
          )
        ]
      }
    ) : null;
    return Le(() => {
      const v = vc(d, { maxDecimals: r });
      n === void 0 || n == (v == null ? void 0 : v.value) || f(n ? Lr(n, t, r) : "");
    }, [d, r, n, t]), /* @__PURE__ */ k("div", { className: "group relative", children: [
      /* @__PURE__ */ a(
        zi,
        {
          type: "text",
          ref: u,
          value: d,
          inputMode: "decimal",
          className: "group-focus-within:pr-5 group-hover:pr-5",
          onChange: (v) => p(v.target.value),
          ...c
        }
      ),
      /* @__PURE__ */ a(g, {})
    ] });
  }
);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ib = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vf = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Vb = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ob = P(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: s,
    iconNode: i,
    ...l
  }, c) => Kr(
    "svg",
    {
      ref: c,
      ...Vb,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: vf("lucide", o),
      ...l
    },
    [
      ...i.map(([u, d]) => Kr(u, d)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = (e, t) => {
  const n = P(
    ({ className: r, ...o }, s) => Kr(Ob, {
      ref: s,
      iconNode: t,
      className: vf(`lucide-${Ib(e)}`, r),
      ...o
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fb = lt("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bb = lt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $b = lt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wb = lt("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yi = lt("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jb = lt("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hb = lt("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ub = lt("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gb = lt("OctagonX", [
  [
    "polygon",
    {
      points: "7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",
      key: "h1p8hx"
    }
  ],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zb = lt("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
]);
/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kb = lt("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function ne(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Ye(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
function Ve(e, t) {
  const n = ne(e);
  return isNaN(t) ? Ye(e, NaN) : (t && n.setDate(n.getDate() + t), n);
}
function it(e, t) {
  const n = ne(e);
  if (isNaN(t)) return Ye(e, NaN);
  if (!t)
    return n;
  const r = n.getDate(), o = Ye(e, n.getTime());
  o.setMonth(n.getMonth() + t + 1, 0);
  const s = o.getDate();
  return r >= s ? o : (n.setFullYear(
    o.getFullYear(),
    o.getMonth(),
    r
  ), n);
}
const Zi = 6048e5, Yb = 864e5;
let Zb = {};
function hr() {
  return Zb;
}
function yt(e, t) {
  var l, c, u, d;
  const n = hr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ne(e), s = o.getDay(), i = (s < r ? 7 : 0) + s - r;
  return o.setDate(o.getDate() - i), o.setHours(0, 0, 0, 0), o;
}
function on(e) {
  return yt(e, { weekStartsOn: 1 });
}
function yf(e) {
  const t = ne(e), n = t.getFullYear(), r = Ye(e, 0);
  r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
  const o = on(r), s = Ye(e, 0);
  s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
  const i = on(s);
  return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= i.getTime() ? n : n - 1;
}
function Ln(e) {
  const t = ne(e);
  return t.setHours(0, 0, 0, 0), t;
}
function to(e) {
  const t = ne(e), n = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return n.setUTCFullYear(t.getFullYear()), +e - +n;
}
function pt(e, t) {
  const n = Ln(e), r = Ln(t), o = +n - to(n), s = +r - to(r);
  return Math.round((o - s) / Yb);
}
function Xb(e) {
  const t = yf(e), n = Ye(e, 0);
  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), on(n);
}
function Ys(e, t) {
  const n = t * 7;
  return Ve(e, n);
}
function qb(e, t) {
  return it(e, t * 12);
}
function Qb(e) {
  let t;
  return e.forEach(function(n) {
    const r = ne(n);
    (t === void 0 || t < r || isNaN(Number(r))) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function Jb(e) {
  let t;
  return e.forEach((n) => {
    const r = ne(n);
    (!t || t > r || isNaN(+r)) && (t = r);
  }), t || /* @__PURE__ */ new Date(NaN);
}
function je(e, t) {
  const n = Ln(e), r = Ln(t);
  return +n == +r;
}
function Xi(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function e4(e) {
  if (!Xi(e) && typeof e != "number")
    return !1;
  const t = ne(e);
  return !isNaN(Number(t));
}
function or(e, t) {
  const n = ne(e), r = ne(t), o = n.getFullYear() - r.getFullYear(), s = n.getMonth() - r.getMonth();
  return o * 12 + s;
}
function t4(e, t, n) {
  const r = yt(e, n), o = yt(t, n), s = +r - to(r), i = +o - to(o);
  return Math.round((s - i) / Zi);
}
function qi(e) {
  const t = ne(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function He(e) {
  const t = ne(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function wf(e) {
  const t = ne(e), n = Ye(e, 0);
  return n.setFullYear(t.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
function Qi(e, t) {
  var l, c, u, d;
  const n = hr(), r = (t == null ? void 0 : t.weekStartsOn) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.weekStartsOn) ?? n.weekStartsOn ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = ne(e), s = o.getDay(), i = (s < r ? -7 : 0) + 6 - (s - r);
  return o.setDate(o.getDate() + i), o.setHours(23, 59, 59, 999), o;
}
function bf(e) {
  return Qi(e, { weekStartsOn: 1 });
}
const n4 = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, r4 = (e, t, n) => {
  let r;
  const o = n4[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
function hs(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
const o4 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, s4 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, i4 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, a4 = {
  date: hs({
    formats: o4,
    defaultWidth: "full"
  }),
  time: hs({
    formats: s4,
    defaultWidth: "full"
  }),
  dateTime: hs({
    formats: i4,
    defaultWidth: "full"
  })
}, l4 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, c4 = (e, t, n, r) => l4[e];
function Bn(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : i;
      o = e.formattingValues[l] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[l] || e.values[i];
    }
    const s = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[s];
  };
}
const u4 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, d4 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, f4 = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, h4 = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, p4 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, m4 = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, g4 = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, v4 = {
  ordinalNumber: g4,
  era: Bn({
    values: u4,
    defaultWidth: "wide"
  }),
  quarter: Bn({
    values: d4,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Bn({
    values: f4,
    defaultWidth: "wide"
  }),
  day: Bn({
    values: h4,
    defaultWidth: "wide"
  }),
  dayPeriod: Bn({
    values: p4,
    defaultWidth: "wide",
    formattingValues: m4,
    defaultFormattingWidth: "wide"
  })
};
function $n(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], s = t.match(o);
    if (!s)
      return null;
    const i = s[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(l) ? w4(l, (f) => f.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      y4(l, (f) => f.test(i))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(c) : c, u = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(u)
    ) : u;
    const d = t.slice(i.length);
    return { value: u, rest: d };
  };
}
function y4(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function w4(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function b4(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], s = t.match(e.parsePattern);
    if (!s) return null;
    let i = e.valueCallback ? e.valueCallback(s[0]) : s[0];
    i = n.valueCallback ? n.valueCallback(i) : i;
    const l = t.slice(o.length);
    return { value: i, rest: l };
  };
}
const C4 = /^(\d+)(th|st|nd|rd)?/i, x4 = /\d+/i, k4 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, S4 = {
  any: [/^b/i, /^(a|c)/i]
}, M4 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, E4 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, P4 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, N4 = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, T4 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, L4 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, R4 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, D4 = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, A4 = {
  ordinalNumber: b4({
    matchPattern: C4,
    parsePattern: x4,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: $n({
    matchPatterns: k4,
    defaultMatchWidth: "wide",
    parsePatterns: S4,
    defaultParseWidth: "any"
  }),
  quarter: $n({
    matchPatterns: M4,
    defaultMatchWidth: "wide",
    parsePatterns: E4,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: $n({
    matchPatterns: P4,
    defaultMatchWidth: "wide",
    parsePatterns: N4,
    defaultParseWidth: "any"
  }),
  day: $n({
    matchPatterns: T4,
    defaultMatchWidth: "wide",
    parsePatterns: L4,
    defaultParseWidth: "any"
  }),
  dayPeriod: $n({
    matchPatterns: R4,
    defaultMatchWidth: "any",
    parsePatterns: D4,
    defaultParseWidth: "any"
  })
}, Cf = {
  code: "en-US",
  formatDistance: r4,
  formatLong: a4,
  formatRelative: c4,
  localize: v4,
  match: A4,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function _4(e) {
  const t = ne(e);
  return pt(t, wf(t)) + 1;
}
function xf(e) {
  const t = ne(e), n = +on(t) - +Xb(t);
  return Math.round(n / Zi) + 1;
}
function kf(e, t) {
  var d, f, p, m;
  const n = ne(e), r = n.getFullYear(), o = hr(), s = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((f = (d = t == null ? void 0 : t.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? o.firstWeekContainsDate ?? ((m = (p = o.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, i = Ye(e, 0);
  i.setFullYear(r + 1, 0, s), i.setHours(0, 0, 0, 0);
  const l = yt(i, t), c = Ye(e, 0);
  c.setFullYear(r, 0, s), c.setHours(0, 0, 0, 0);
  const u = yt(c, t);
  return n.getTime() >= l.getTime() ? r + 1 : n.getTime() >= u.getTime() ? r : r - 1;
}
function I4(e, t) {
  var l, c, u, d;
  const n = hr(), r = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((c = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : c.firstWeekContainsDate) ?? n.firstWeekContainsDate ?? ((d = (u = n.locale) == null ? void 0 : u.options) == null ? void 0 : d.firstWeekContainsDate) ?? 1, o = kf(e, t), s = Ye(e, 0);
  return s.setFullYear(o, 0, r), s.setHours(0, 0, 0, 0), yt(s, t);
}
function Sf(e, t) {
  const n = ne(e), r = +yt(n, t) - +I4(n, t);
  return Math.round(r / Zi) + 1;
}
function ie(e, t) {
  const n = e < 0 ? "-" : "", r = Math.abs(e).toString().padStart(t, "0");
  return n + r;
}
const Ot = {
  // Year
  y(e, t) {
    const n = e.getFullYear(), r = n > 0 ? n : 1 - n;
    return ie(t === "yy" ? r % 100 : r, t.length);
  },
  // Month
  M(e, t) {
    const n = e.getMonth();
    return t === "M" ? String(n + 1) : ie(n + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return ie(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const n = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return ie(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return ie(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return ie(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return ie(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const n = t.length, r = e.getMilliseconds(), o = Math.trunc(
      r * Math.pow(10, n - 3)
    );
    return ie(o, t.length);
  }
}, pn = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, yc = {
  // Era
  G: function(e, t, n) {
    const r = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return n.era(r, { width: "abbreviated" });
      case "GGGGG":
        return n.era(r, { width: "narrow" });
      case "GGGG":
      default:
        return n.era(r, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, n) {
    if (t === "yo") {
      const r = e.getFullYear(), o = r > 0 ? r : 1 - r;
      return n.ordinalNumber(o, { unit: "year" });
    }
    return Ot.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, n, r) {
    const o = kf(e, r), s = o > 0 ? o : 1 - o;
    if (t === "YY") {
      const i = s % 100;
      return ie(i, 2);
    }
    return t === "Yo" ? n.ordinalNumber(s, { unit: "year" }) : ie(s, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const n = yf(e);
    return ie(n, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const n = e.getFullYear();
    return ie(n, t.length);
  },
  // Quarter
  Q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(r);
      case "QQ":
        return ie(r, 2);
      case "Qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "QQQ":
        return n.quarter(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return n.quarter(r, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, n) {
    const r = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(r);
      case "qq":
        return ie(r, 2);
      case "qo":
        return n.ordinalNumber(r, { unit: "quarter" });
      case "qqq":
        return n.quarter(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return n.quarter(r, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return n.quarter(r, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return Ot.M(e, t);
      case "Mo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "MMM":
        return n.month(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return n.month(r, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return n.month(r, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, n) {
    const r = e.getMonth();
    switch (t) {
      case "L":
        return String(r + 1);
      case "LL":
        return ie(r + 1, 2);
      case "Lo":
        return n.ordinalNumber(r + 1, { unit: "month" });
      case "LLL":
        return n.month(r, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return n.month(r, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return n.month(r, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, n, r) {
    const o = Sf(e, r);
    return t === "wo" ? n.ordinalNumber(o, { unit: "week" }) : ie(o, t.length);
  },
  // ISO week of year
  I: function(e, t, n) {
    const r = xf(e);
    return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ie(r, t.length);
  },
  // Day of the month
  d: function(e, t, n) {
    return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ot.d(e, t);
  },
  // Day of year
  D: function(e, t, n) {
    const r = _4(e);
    return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ie(r, t.length);
  },
  // Day of week
  E: function(e, t, n) {
    const r = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(s);
      case "ee":
        return ie(s, 2);
      case "eo":
        return n.ordinalNumber(s, { unit: "day" });
      case "eee":
        return n.day(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return n.day(o, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return n.day(o, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return n.day(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, n, r) {
    const o = e.getDay(), s = (o - r.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(s);
      case "cc":
        return ie(s, t.length);
      case "co":
        return n.ordinalNumber(s, { unit: "day" });
      case "ccc":
        return n.day(o, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return n.day(o, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return n.day(o, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return n.day(o, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, n) {
    const r = e.getDay(), o = r === 0 ? 7 : r;
    switch (t) {
      case "i":
        return String(o);
      case "ii":
        return ie(o, t.length);
      case "io":
        return n.ordinalNumber(o, { unit: "day" });
      case "iii":
        return n.day(r, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return n.day(r, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return n.day(r, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return n.day(r, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, n) {
    const o = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r === 12 ? o = pn.noon : r === 0 ? o = pn.midnight : o = r / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, n) {
    const r = e.getHours();
    let o;
    switch (r >= 17 ? o = pn.evening : r >= 12 ? o = pn.afternoon : r >= 4 ? o = pn.morning : o = pn.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return n.dayPeriod(o, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return n.dayPeriod(o, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return n.dayPeriod(o, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, n) {
    if (t === "ho") {
      let r = e.getHours() % 12;
      return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
    }
    return Ot.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, n) {
    return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ot.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, n) {
    const r = e.getHours() % 12;
    return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ie(r, t.length);
  },
  // Hour [1-24]
  k: function(e, t, n) {
    let r = e.getHours();
    return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ie(r, t.length);
  },
  // Minute
  m: function(e, t, n) {
    return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ot.m(e, t);
  },
  // Second
  s: function(e, t, n) {
    return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ot.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return Ot.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, n) {
    const r = e.getTimezoneOffset();
    if (r === 0)
      return "Z";
    switch (t) {
      case "X":
        return bc(r);
      case "XXXX":
      case "XX":
        return Qt(r);
      case "XXXXX":
      case "XXX":
      default:
        return Qt(r, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return bc(r);
      case "xxxx":
      case "xx":
        return Qt(r);
      case "xxxxx":
      case "xxx":
      default:
        return Qt(r, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + wc(r, ":");
      case "OOOO":
      default:
        return "GMT" + Qt(r, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, n) {
    const r = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + wc(r, ":");
      case "zzzz":
      default:
        return "GMT" + Qt(r, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, n) {
    const r = Math.trunc(e.getTime() / 1e3);
    return ie(r, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, n) {
    const r = e.getTime();
    return ie(r, t.length);
  }
};
function wc(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = Math.trunc(r / 60), s = r % 60;
  return s === 0 ? n + String(o) : n + String(o) + t + ie(s, 2);
}
function bc(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + ie(Math.abs(e) / 60, 2) : Qt(e, t);
}
function Qt(e, t = "") {
  const n = e > 0 ? "-" : "+", r = Math.abs(e), o = ie(Math.trunc(r / 60), 2), s = ie(r % 60, 2);
  return n + o + t + s;
}
const Cc = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, Mf = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, V4 = (e, t) => {
  const n = e.match(/(P+)(p+)?/) || [], r = n[1], o = n[2];
  if (!o)
    return Cc(e, t);
  let s;
  switch (r) {
    case "P":
      s = t.dateTime({ width: "short" });
      break;
    case "PP":
      s = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      s = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      s = t.dateTime({ width: "full" });
      break;
  }
  return s.replace("{{date}}", Cc(r, t)).replace("{{time}}", Mf(o, t));
}, O4 = {
  p: Mf,
  P: V4
}, F4 = /^D+$/, B4 = /^Y+$/, $4 = ["D", "DD", "YY", "YYYY"];
function W4(e) {
  return F4.test(e);
}
function j4(e) {
  return B4.test(e);
}
function H4(e, t, n) {
  const r = U4(e, t, n);
  if (console.warn(r), $4.includes(e)) throw new RangeError(r);
}
function U4(e, t, n) {
  const r = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const G4 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, z4 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, K4 = /^'([^]*?)'?$/, Y4 = /''/g, Z4 = /[a-zA-Z]/;
function cn(e, t, n) {
  var d, f, p, m, g, v, w, b;
  const r = hr(), o = (n == null ? void 0 : n.locale) ?? r.locale ?? Cf, s = (n == null ? void 0 : n.firstWeekContainsDate) ?? ((f = (d = n == null ? void 0 : n.locale) == null ? void 0 : d.options) == null ? void 0 : f.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((m = (p = r.locale) == null ? void 0 : p.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, i = (n == null ? void 0 : n.weekStartsOn) ?? ((v = (g = n == null ? void 0 : n.locale) == null ? void 0 : g.options) == null ? void 0 : v.weekStartsOn) ?? r.weekStartsOn ?? ((b = (w = r.locale) == null ? void 0 : w.options) == null ? void 0 : b.weekStartsOn) ?? 0, l = ne(e);
  if (!e4(l))
    throw new RangeError("Invalid time value");
  let c = t.match(z4).map((y) => {
    const C = y[0];
    if (C === "p" || C === "P") {
      const M = O4[C];
      return M(y, o.formatLong);
    }
    return y;
  }).join("").match(G4).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const C = y[0];
    if (C === "'")
      return { isToken: !1, value: X4(y) };
    if (yc[C])
      return { isToken: !0, value: y };
    if (C.match(Z4))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + C + "`"
      );
    return { isToken: !1, value: y };
  });
  o.localize.preprocessor && (c = o.localize.preprocessor(l, c));
  const u = {
    firstWeekContainsDate: s,
    weekStartsOn: i,
    locale: o
  };
  return c.map((y) => {
    if (!y.isToken) return y.value;
    const C = y.value;
    (!(n != null && n.useAdditionalWeekYearTokens) && j4(C) || !(n != null && n.useAdditionalDayOfYearTokens) && W4(C)) && H4(C, t, String(e));
    const M = yc[C[0]];
    return M(l, C, o.localize, u);
  }).join("");
}
function X4(e) {
  const t = e.match(K4);
  return t ? t[1].replace(Y4, "'") : e;
}
function q4(e) {
  const t = ne(e), n = t.getFullYear(), r = t.getMonth(), o = Ye(e, 0);
  return o.setFullYear(n, r + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Q4(e) {
  return Math.trunc(+ne(e) / 1e3);
}
function J4(e) {
  const t = ne(e), n = t.getMonth();
  return t.setFullYear(t.getFullYear(), n + 1, 0), t.setHours(0, 0, 0, 0), t;
}
function eC(e, t) {
  return t4(
    J4(e),
    He(e),
    t
  ) + 1;
}
function Zs(e, t) {
  const n = ne(e), r = ne(t);
  return n.getTime() > r.getTime();
}
function Ef(e, t) {
  const n = ne(e), r = ne(t);
  return +n < +r;
}
function Ji(e, t) {
  const n = ne(e), r = ne(t);
  return n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth();
}
function tC(e, t) {
  const n = ne(e), r = ne(t);
  return n.getFullYear() === r.getFullYear();
}
function ps(e, t) {
  return Ve(e, -t);
}
function ms(e, t) {
  const n = ne(e), r = n.getFullYear(), o = n.getDate(), s = Ye(e, 0);
  s.setFullYear(r, t, 15), s.setHours(0, 0, 0, 0);
  const i = q4(s);
  return n.setMonth(t, Math.min(o, i)), n;
}
function xc(e, t) {
  const n = ne(e);
  return isNaN(+n) ? Ye(e, NaN) : (n.setFullYear(t), n);
}
var X = function() {
  return X = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, X.apply(this, arguments);
};
function nC(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Pf(e, t, n) {
  for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
function pr(e) {
  return e.mode === "multiple";
}
function mr(e) {
  return e.mode === "range";
}
function Ao(e) {
  return e.mode === "single";
}
var rC = {
  root: "rdp",
  multiple_months: "rdp-multiple_months",
  with_weeknumber: "rdp-with_weeknumber",
  vhidden: "rdp-vhidden",
  button_reset: "rdp-button_reset",
  button: "rdp-button",
  caption: "rdp-caption",
  caption_start: "rdp-caption_start",
  caption_end: "rdp-caption_end",
  caption_between: "rdp-caption_between",
  caption_label: "rdp-caption_label",
  caption_dropdowns: "rdp-caption_dropdowns",
  dropdown: "rdp-dropdown",
  dropdown_month: "rdp-dropdown_month",
  dropdown_year: "rdp-dropdown_year",
  dropdown_icon: "rdp-dropdown_icon",
  months: "rdp-months",
  month: "rdp-month",
  table: "rdp-table",
  tbody: "rdp-tbody",
  tfoot: "rdp-tfoot",
  head: "rdp-head",
  head_row: "rdp-head_row",
  head_cell: "rdp-head_cell",
  nav: "rdp-nav",
  nav_button: "rdp-nav_button",
  nav_button_previous: "rdp-nav_button_previous",
  nav_button_next: "rdp-nav_button_next",
  nav_icon: "rdp-nav_icon",
  row: "rdp-row",
  weeknumber: "rdp-weeknumber",
  cell: "rdp-cell",
  day: "rdp-day",
  day_today: "rdp-day_today",
  day_outside: "rdp-day_outside",
  day_selected: "rdp-day_selected",
  day_disabled: "rdp-day_disabled",
  day_hidden: "rdp-day_hidden",
  day_range_start: "rdp-day_range_start",
  day_range_end: "rdp-day_range_end",
  day_range_middle: "rdp-day_range_middle"
};
function oC(e, t) {
  return cn(e, "LLLL y", t);
}
function sC(e, t) {
  return cn(e, "d", t);
}
function iC(e, t) {
  return cn(e, "LLLL", t);
}
function aC(e) {
  return "".concat(e);
}
function lC(e, t) {
  return cn(e, "cccccc", t);
}
function cC(e, t) {
  return cn(e, "yyyy", t);
}
var uC = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  formatCaption: oC,
  formatDay: sC,
  formatMonthCaption: iC,
  formatWeekNumber: aC,
  formatWeekdayName: lC,
  formatYearCaption: cC
}), dC = function(e, t, n) {
  return cn(e, "do MMMM (EEEE)", n);
}, fC = function() {
  return "Month: ";
}, hC = function() {
  return "Go to next month";
}, pC = function() {
  return "Go to previous month";
}, mC = function(e, t) {
  return cn(e, "cccc", t);
}, gC = function(e) {
  return "Week n. ".concat(e);
}, vC = function() {
  return "Year: ";
}, yC = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  labelDay: dC,
  labelMonthDropdown: fC,
  labelNext: hC,
  labelPrevious: pC,
  labelWeekNumber: gC,
  labelWeekday: mC,
  labelYearDropdown: vC
});
function wC() {
  var e = "buttons", t = rC, n = Cf, r = {}, o = {}, s = 1, i = {}, l = /* @__PURE__ */ new Date();
  return {
    captionLayout: e,
    classNames: t,
    formatters: uC,
    labels: yC,
    locale: n,
    modifiersClassNames: r,
    modifiers: o,
    numberOfMonths: s,
    styles: i,
    today: l,
    mode: "default"
  };
}
function bC(e) {
  var t = e.fromYear, n = e.toYear, r = e.fromMonth, o = e.toMonth, s = e.fromDate, i = e.toDate;
  return r ? s = He(r) : t && (s = new Date(t, 0, 1)), o ? i = qi(o) : n && (i = new Date(n, 11, 31)), {
    fromDate: s ? Ln(s) : void 0,
    toDate: i ? Ln(i) : void 0
  };
}
var Nf = Ge(void 0);
function CC(e) {
  var t, n = e.initialProps, r = wC(), o = bC(n), s = o.fromDate, i = o.toDate, l = (t = n.captionLayout) !== null && t !== void 0 ? t : r.captionLayout;
  l !== "buttons" && (!s || !i) && (l = "buttons");
  var c;
  (Ao(n) || pr(n) || mr(n)) && (c = n.onSelect);
  var u = X(X(X({}, r), n), { captionLayout: l, classNames: X(X({}, r.classNames), n.classNames), components: X({}, n.components), formatters: X(X({}, r.formatters), n.formatters), fromDate: s, labels: X(X({}, r.labels), n.labels), mode: n.mode || r.mode, modifiers: X(X({}, r.modifiers), n.modifiers), modifiersClassNames: X(X({}, r.modifiersClassNames), n.modifiersClassNames), onSelect: c, styles: X(X({}, r.styles), n.styles), toDate: i });
  return a(Nf.Provider, { value: u, children: e.children });
}
function he() {
  var e = fe(Nf);
  if (!e)
    throw new Error("useDayPicker must be used within a DayPickerProvider.");
  return e;
}
function Tf(e) {
  var t = he(), n = t.locale, r = t.classNames, o = t.styles, s = t.formatters.formatCaption;
  return a("div", { className: r.caption_label, style: o.caption_label, "aria-live": "polite", role: "presentation", id: e.id, children: s(e.displayMonth, { locale: n }) });
}
function xC(e) {
  return a("svg", X({ width: "8px", height: "8px", viewBox: "0 0 120 120", "data-testid": "iconDropdown" }, e, { children: a("path", { d: "M4.22182541,48.2218254 C8.44222828,44.0014225 15.2388494,43.9273804 19.5496459,47.9996989 L19.7781746,48.2218254 L60,88.443 L100.221825,48.2218254 C104.442228,44.0014225 111.238849,43.9273804 115.549646,47.9996989 L115.778175,48.2218254 C119.998577,52.4422283 120.07262,59.2388494 116.000301,63.5496459 L115.778175,63.7781746 L67.7781746,111.778175 C63.5577717,115.998577 56.7611506,116.07262 52.4503541,112.000301 L52.2218254,111.778175 L4.22182541,63.7781746 C-0.0739418023,59.4824074 -0.0739418023,52.5175926 4.22182541,48.2218254 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function Lf(e) {
  var t, n, r = e.onChange, o = e.value, s = e.children, i = e.caption, l = e.className, c = e.style, u = he(), d = (n = (t = u.components) === null || t === void 0 ? void 0 : t.IconDropdown) !== null && n !== void 0 ? n : xC;
  return k("div", { className: l, style: c, children: [a("span", { className: u.classNames.vhidden, children: e["aria-label"] }), a("select", { name: e.name, "aria-label": e["aria-label"], className: u.classNames.dropdown, style: u.styles.dropdown, value: o, onChange: r, children: s }), k("div", { className: u.classNames.caption_label, style: u.styles.caption_label, "aria-hidden": "true", children: [i, a(d, { className: u.classNames.dropdown_icon, style: u.styles.dropdown_icon })] })] });
}
function kC(e) {
  var t, n = he(), r = n.fromDate, o = n.toDate, s = n.styles, i = n.locale, l = n.formatters.formatMonthCaption, c = n.classNames, u = n.components, d = n.labels.labelMonthDropdown;
  if (!r)
    return a(me, {});
  if (!o)
    return a(me, {});
  var f = [];
  if (tC(r, o))
    for (var p = He(r), m = r.getMonth(); m <= o.getMonth(); m++)
      f.push(ms(p, m));
  else
    for (var p = He(/* @__PURE__ */ new Date()), m = 0; m <= 11; m++)
      f.push(ms(p, m));
  var g = function(w) {
    var b = Number(w.target.value), y = ms(He(e.displayMonth), b);
    e.onChange(y);
  }, v = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Lf;
  return a(v, { name: "months", "aria-label": d(), className: c.dropdown_month, style: s.dropdown_month, onChange: g, value: e.displayMonth.getMonth(), caption: l(e.displayMonth, { locale: i }), children: f.map(function(w) {
    return a("option", { value: w.getMonth(), children: l(w, { locale: i }) }, w.getMonth());
  }) });
}
function SC(e) {
  var t, n = e.displayMonth, r = he(), o = r.fromDate, s = r.toDate, i = r.locale, l = r.styles, c = r.classNames, u = r.components, d = r.formatters.formatYearCaption, f = r.labels.labelYearDropdown, p = [];
  if (!o)
    return a(me, {});
  if (!s)
    return a(me, {});
  for (var m = o.getFullYear(), g = s.getFullYear(), v = m; v <= g; v++)
    p.push(xc(wf(/* @__PURE__ */ new Date()), v));
  var w = function(y) {
    var C = xc(He(n), Number(y.target.value));
    e.onChange(C);
  }, b = (t = u == null ? void 0 : u.Dropdown) !== null && t !== void 0 ? t : Lf;
  return a(b, { name: "years", "aria-label": f(), className: c.dropdown_year, style: l.dropdown_year, onChange: w, value: n.getFullYear(), caption: d(n, { locale: i }), children: p.map(function(y) {
    return a("option", { value: y.getFullYear(), children: d(y, { locale: i }) }, y.getFullYear());
  }) });
}
function MC(e, t) {
  var n = Ce(e), r = n[0], o = n[1], s = t === void 0 ? r : t;
  return [s, o];
}
function EC(e) {
  var t = e.month, n = e.defaultMonth, r = e.today, o = t || n || r || /* @__PURE__ */ new Date(), s = e.toDate, i = e.fromDate, l = e.numberOfMonths, c = l === void 0 ? 1 : l;
  if (s && or(s, o) < 0) {
    var u = -1 * (c - 1);
    o = it(s, u);
  }
  return i && or(o, i) < 0 && (o = i), He(o);
}
function PC() {
  var e = he(), t = EC(e), n = MC(t, e.month), r = n[0], o = n[1], s = function(i) {
    var l;
    if (!e.disableNavigation) {
      var c = He(i);
      o(c), (l = e.onMonthChange) === null || l === void 0 || l.call(e, c);
    }
  };
  return [r, s];
}
function NC(e, t) {
  for (var n = t.reverseMonths, r = t.numberOfMonths, o = He(e), s = He(it(o, r)), i = or(s, o), l = [], c = 0; c < i; c++) {
    var u = it(o, c);
    l.push(u);
  }
  return n && (l = l.reverse()), l;
}
function TC(e, t) {
  if (!t.disableNavigation) {
    var n = t.toDate, r = t.pagedNavigation, o = t.numberOfMonths, s = o === void 0 ? 1 : o, i = r ? s : 1, l = He(e);
    if (!n)
      return it(l, i);
    var c = or(n, e);
    if (!(c < s))
      return it(l, i);
  }
}
function LC(e, t) {
  if (!t.disableNavigation) {
    var n = t.fromDate, r = t.pagedNavigation, o = t.numberOfMonths, s = o === void 0 ? 1 : o, i = r ? s : 1, l = He(e);
    if (!n)
      return it(l, -i);
    var c = or(l, n);
    if (!(c <= 0))
      return it(l, -i);
  }
}
var Rf = Ge(void 0);
function RC(e) {
  var t = he(), n = PC(), r = n[0], o = n[1], s = NC(r, t), i = TC(r, t), l = LC(r, t), c = function(f) {
    return s.some(function(p) {
      return Ji(f, p);
    });
  }, u = function(f, p) {
    c(f) || (p && Ef(f, p) ? o(it(f, 1 + t.numberOfMonths * -1)) : o(f));
  }, d = {
    currentMonth: r,
    displayMonths: s,
    goToMonth: o,
    goToDate: u,
    previousMonth: l,
    nextMonth: i,
    isDateDisplayed: c
  };
  return a(Rf.Provider, { value: d, children: e.children });
}
function gr() {
  var e = fe(Rf);
  if (!e)
    throw new Error("useNavigation must be used within a NavigationProvider");
  return e;
}
function kc(e) {
  var t, n = he(), r = n.classNames, o = n.styles, s = n.components, i = gr().goToMonth, l = function(d) {
    i(it(d, e.displayIndex ? -e.displayIndex : 0));
  }, c = (t = s == null ? void 0 : s.CaptionLabel) !== null && t !== void 0 ? t : Tf, u = a(c, { id: e.id, displayMonth: e.displayMonth });
  return k("div", { className: r.caption_dropdowns, style: o.caption_dropdowns, children: [a("div", { className: r.vhidden, children: u }), a(kC, { onChange: l, displayMonth: e.displayMonth }), a(SC, { onChange: l, displayMonth: e.displayMonth })] });
}
function DC(e) {
  return a("svg", X({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: a("path", { d: "M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z", fill: "currentColor", fillRule: "nonzero" }) }));
}
function AC(e) {
  return a("svg", X({ width: "16px", height: "16px", viewBox: "0 0 120 120" }, e, { children: a("path", { d: "M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z", fill: "currentColor" }) }));
}
var no = P(function(e, t) {
  var n = he(), r = n.classNames, o = n.styles, s = [r.button_reset, r.button];
  e.className && s.push(e.className);
  var i = s.join(" "), l = X(X({}, o.button_reset), o.button);
  return e.style && Object.assign(l, e.style), a("button", X({}, e, { ref: t, type: "button", className: i, style: l }));
});
function _C(e) {
  var t, n, r = he(), o = r.dir, s = r.locale, i = r.classNames, l = r.styles, c = r.labels, u = c.labelPrevious, d = c.labelNext, f = r.components;
  if (!e.nextMonth && !e.previousMonth)
    return a(me, {});
  var p = u(e.previousMonth, { locale: s }), m = [
    i.nav_button,
    i.nav_button_previous
  ].join(" "), g = d(e.nextMonth, { locale: s }), v = [
    i.nav_button,
    i.nav_button_next
  ].join(" "), w = (t = f == null ? void 0 : f.IconRight) !== null && t !== void 0 ? t : AC, b = (n = f == null ? void 0 : f.IconLeft) !== null && n !== void 0 ? n : DC;
  return k("div", { className: i.nav, style: l.nav, children: [!e.hidePrevious && a(no, { name: "previous-month", "aria-label": p, className: m, style: l.nav_button_previous, disabled: !e.previousMonth, onClick: e.onPreviousClick, children: o === "rtl" ? a(w, { className: i.nav_icon, style: l.nav_icon }) : a(b, { className: i.nav_icon, style: l.nav_icon }) }), !e.hideNext && a(no, { name: "next-month", "aria-label": g, className: v, style: l.nav_button_next, disabled: !e.nextMonth, onClick: e.onNextClick, children: o === "rtl" ? a(b, { className: i.nav_icon, style: l.nav_icon }) : a(w, { className: i.nav_icon, style: l.nav_icon }) })] });
}
function Sc(e) {
  var t = he().numberOfMonths, n = gr(), r = n.previousMonth, o = n.nextMonth, s = n.goToMonth, i = n.displayMonths, l = i.findIndex(function(g) {
    return Ji(e.displayMonth, g);
  }), c = l === 0, u = l === i.length - 1, d = t > 1 && (c || !u), f = t > 1 && (u || !c), p = function() {
    r && s(r);
  }, m = function() {
    o && s(o);
  };
  return a(_C, { displayMonth: e.displayMonth, hideNext: d, hidePrevious: f, nextMonth: o, previousMonth: r, onPreviousClick: p, onNextClick: m });
}
function IC(e) {
  var t, n = he(), r = n.classNames, o = n.disableNavigation, s = n.styles, i = n.captionLayout, l = n.components, c = (t = l == null ? void 0 : l.CaptionLabel) !== null && t !== void 0 ? t : Tf, u;
  return o ? u = a(c, { id: e.id, displayMonth: e.displayMonth }) : i === "dropdown" ? u = a(kc, { displayMonth: e.displayMonth, id: e.id }) : i === "dropdown-buttons" ? u = k(me, { children: [a(kc, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id }), a(Sc, { displayMonth: e.displayMonth, displayIndex: e.displayIndex, id: e.id })] }) : u = k(me, { children: [a(c, { id: e.id, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), a(Sc, { displayMonth: e.displayMonth, id: e.id })] }), a("div", { className: r.caption, style: s.caption, children: u });
}
function VC(e) {
  var t = he(), n = t.footer, r = t.styles, o = t.classNames.tfoot;
  return n ? a("tfoot", { className: o, style: r.tfoot, children: a("tr", { children: a("td", { colSpan: 8, children: n }) }) }) : a(me, {});
}
function OC(e, t, n) {
  for (var r = n ? on(/* @__PURE__ */ new Date()) : yt(/* @__PURE__ */ new Date(), { locale: e, weekStartsOn: t }), o = [], s = 0; s < 7; s++) {
    var i = Ve(r, s);
    o.push(i);
  }
  return o;
}
function FC() {
  var e = he(), t = e.classNames, n = e.styles, r = e.showWeekNumber, o = e.locale, s = e.weekStartsOn, i = e.ISOWeek, l = e.formatters.formatWeekdayName, c = e.labels.labelWeekday, u = OC(o, s, i);
  return k("tr", { style: n.head_row, className: t.head_row, children: [r && a("td", { style: n.head_cell, className: t.head_cell }), u.map(function(d, f) {
    return a("th", { scope: "col", className: t.head_cell, style: n.head_cell, "aria-label": c(d, { locale: o }), children: l(d, { locale: o }) }, f);
  })] });
}
function BC() {
  var e, t = he(), n = t.classNames, r = t.styles, o = t.components, s = (e = o == null ? void 0 : o.HeadRow) !== null && e !== void 0 ? e : FC;
  return a("thead", { style: r.head, className: n.head, children: a(s, {}) });
}
function $C(e) {
  var t = he(), n = t.locale, r = t.formatters.formatDay;
  return a(me, { children: r(e.date, { locale: n }) });
}
var ea = Ge(void 0);
function WC(e) {
  if (!pr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        disabled: []
      }
    };
    return a(ea.Provider, { value: t, children: e.children });
  }
  return a(jC, { initialProps: e.initialProps, children: e.children });
}
function jC(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = t.min, s = t.max, i = function(u, d, f) {
    var p, m;
    (p = t.onDayClick) === null || p === void 0 || p.call(t, u, d, f);
    var g = !!(d.selected && o && (r == null ? void 0 : r.length) === o);
    if (!g) {
      var v = !!(!d.selected && s && (r == null ? void 0 : r.length) === s);
      if (!v) {
        var w = r ? Pf([], r) : [];
        if (d.selected) {
          var b = w.findIndex(function(y) {
            return je(u, y);
          });
          w.splice(b, 1);
        } else
          w.push(u);
        (m = t.onSelect) === null || m === void 0 || m.call(t, w, u, d, f);
      }
    }
  }, l = {
    disabled: []
  };
  r && l.disabled.push(function(u) {
    var d = s && r.length > s - 1, f = r.some(function(p) {
      return je(p, u);
    });
    return !!(d && !f);
  });
  var c = {
    selected: r,
    onDayClick: i,
    modifiers: l
  };
  return a(ea.Provider, { value: c, children: n });
}
function ta() {
  var e = fe(ea);
  if (!e)
    throw new Error("useSelectMultiple must be used within a SelectMultipleProvider");
  return e;
}
function HC(e, t) {
  var n = t || {}, r = n.from, o = n.to;
  return r && o ? je(o, e) && je(r, e) ? void 0 : je(o, e) ? { from: o, to: void 0 } : je(r, e) ? void 0 : Zs(r, e) ? { from: e, to: o } : { from: r, to: e } : o ? Zs(e, o) ? { from: o, to: e } : { from: e, to: o } : r ? Ef(e, r) ? { from: e, to: r } : { from: r, to: e } : { from: e, to: void 0 };
}
var na = Ge(void 0);
function UC(e) {
  if (!mr(e.initialProps)) {
    var t = {
      selected: void 0,
      modifiers: {
        range_start: [],
        range_end: [],
        range_middle: [],
        disabled: []
      }
    };
    return a(na.Provider, { value: t, children: e.children });
  }
  return a(GC, { initialProps: e.initialProps, children: e.children });
}
function GC(e) {
  var t = e.initialProps, n = e.children, r = t.selected, o = r || {}, s = o.from, i = o.to, l = t.min, c = t.max, u = function(m, g, v) {
    var w, b;
    (w = t.onDayClick) === null || w === void 0 || w.call(t, m, g, v);
    var y = HC(m, r);
    (b = t.onSelect) === null || b === void 0 || b.call(t, y, m, g, v);
  }, d = {
    range_start: [],
    range_end: [],
    range_middle: [],
    disabled: []
  };
  if (s ? (d.range_start = [s], i ? (d.range_end = [i], je(s, i) || (d.range_middle = [
    {
      after: s,
      before: i
    }
  ])) : d.range_end = [s]) : i && (d.range_start = [i], d.range_end = [i]), l && (s && !i && d.disabled.push({
    after: ps(s, l - 1),
    before: Ve(s, l - 1)
  }), s && i && d.disabled.push({
    after: s,
    before: Ve(s, l - 1)
  }), !s && i && d.disabled.push({
    after: ps(i, l - 1),
    before: Ve(i, l - 1)
  })), c) {
    if (s && !i && (d.disabled.push({
      before: Ve(s, -c + 1)
    }), d.disabled.push({
      after: Ve(s, c - 1)
    })), s && i) {
      var f = pt(i, s) + 1, p = c - f;
      d.disabled.push({
        before: ps(s, p)
      }), d.disabled.push({
        after: Ve(i, p)
      });
    }
    !s && i && (d.disabled.push({
      before: Ve(i, -c + 1)
    }), d.disabled.push({
      after: Ve(i, c - 1)
    }));
  }
  return a(na.Provider, { value: { selected: r, onDayClick: u, modifiers: d }, children: n });
}
function ra() {
  var e = fe(na);
  if (!e)
    throw new Error("useSelectRange must be used within a SelectRangeProvider");
  return e;
}
function Wr(e) {
  return Array.isArray(e) ? Pf([], e) : e !== void 0 ? [e] : [];
}
function zC(e) {
  var t = {};
  return Object.entries(e).forEach(function(n) {
    var r = n[0], o = n[1];
    t[r] = Wr(o);
  }), t;
}
var at;
(function(e) {
  e.Outside = "outside", e.Disabled = "disabled", e.Selected = "selected", e.Hidden = "hidden", e.Today = "today", e.RangeStart = "range_start", e.RangeEnd = "range_end", e.RangeMiddle = "range_middle";
})(at || (at = {}));
var KC = at.Selected, St = at.Disabled, YC = at.Hidden, ZC = at.Today, gs = at.RangeEnd, vs = at.RangeMiddle, ys = at.RangeStart, XC = at.Outside;
function qC(e, t, n) {
  var r, o = (r = {}, r[KC] = Wr(e.selected), r[St] = Wr(e.disabled), r[YC] = Wr(e.hidden), r[ZC] = [e.today], r[gs] = [], r[vs] = [], r[ys] = [], r[XC] = [], r);
  return e.fromDate && o[St].push({ before: e.fromDate }), e.toDate && o[St].push({ after: e.toDate }), pr(e) ? o[St] = o[St].concat(t.modifiers[St]) : mr(e) && (o[St] = o[St].concat(n.modifiers[St]), o[ys] = n.modifiers[ys], o[vs] = n.modifiers[vs], o[gs] = n.modifiers[gs]), o;
}
var Df = Ge(void 0);
function QC(e) {
  var t = he(), n = ta(), r = ra(), o = qC(t, n, r), s = zC(t.modifiers), i = X(X({}, o), s);
  return a(Df.Provider, { value: i, children: e.children });
}
function Af() {
  var e = fe(Df);
  if (!e)
    throw new Error("useModifiers must be used within a ModifiersProvider");
  return e;
}
function JC(e) {
  return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function e6(e) {
  return !!(e && typeof e == "object" && "from" in e);
}
function t6(e) {
  return !!(e && typeof e == "object" && "after" in e);
}
function n6(e) {
  return !!(e && typeof e == "object" && "before" in e);
}
function r6(e) {
  return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function o6(e, t) {
  var n, r = t.from, o = t.to;
  if (r && o) {
    var s = pt(o, r) < 0;
    s && (n = [o, r], r = n[0], o = n[1]);
    var i = pt(e, r) >= 0 && pt(o, e) >= 0;
    return i;
  }
  return o ? je(o, e) : r ? je(r, e) : !1;
}
function s6(e) {
  return Xi(e);
}
function i6(e) {
  return Array.isArray(e) && e.every(Xi);
}
function a6(e, t) {
  return t.some(function(n) {
    if (typeof n == "boolean")
      return n;
    if (s6(n))
      return je(e, n);
    if (i6(n))
      return n.includes(e);
    if (e6(n))
      return o6(e, n);
    if (r6(n))
      return n.dayOfWeek.includes(e.getDay());
    if (JC(n)) {
      var r = pt(n.before, e), o = pt(n.after, e), s = r > 0, i = o < 0, l = Zs(n.before, n.after);
      return l ? i && s : s || i;
    }
    return t6(n) ? pt(e, n.after) > 0 : n6(n) ? pt(n.before, e) > 0 : typeof n == "function" ? n(e) : !1;
  });
}
function oa(e, t, n) {
  var r = Object.keys(t).reduce(function(s, i) {
    var l = t[i];
    return a6(e, l) && s.push(i), s;
  }, []), o = {};
  return r.forEach(function(s) {
    return o[s] = !0;
  }), n && !Ji(e, n) && (o.outside = !0), o;
}
function l6(e, t) {
  for (var n = He(e[0]), r = qi(e[e.length - 1]), o, s, i = n; i <= r; ) {
    var l = oa(i, t), c = !l.disabled && !l.hidden;
    if (!c) {
      i = Ve(i, 1);
      continue;
    }
    if (l.selected)
      return i;
    l.today && !s && (s = i), o || (o = i), i = Ve(i, 1);
  }
  return s || o;
}
var c6 = 365;
function _f(e, t) {
  var n = t.moveBy, r = t.direction, o = t.context, s = t.modifiers, i = t.retry, l = i === void 0 ? { count: 0, lastFocused: e } : i, c = o.weekStartsOn, u = o.fromDate, d = o.toDate, f = o.locale, p = {
    day: Ve,
    week: Ys,
    month: it,
    year: qb,
    startOfWeek: function(w) {
      return o.ISOWeek ? on(w) : yt(w, { locale: f, weekStartsOn: c });
    },
    endOfWeek: function(w) {
      return o.ISOWeek ? bf(w) : Qi(w, { locale: f, weekStartsOn: c });
    }
  }, m = p[n](e, r === "after" ? 1 : -1);
  r === "before" && u ? m = Qb([u, m]) : r === "after" && d && (m = Jb([d, m]));
  var g = !0;
  if (s) {
    var v = oa(m, s);
    g = !v.disabled && !v.hidden;
  }
  return g ? m : l.count > c6 ? l.lastFocused : _f(m, {
    moveBy: n,
    direction: r,
    context: o,
    modifiers: s,
    retry: X(X({}, l), { count: l.count + 1 })
  });
}
var If = Ge(void 0);
function u6(e) {
  var t = gr(), n = Af(), r = Ce(), o = r[0], s = r[1], i = Ce(), l = i[0], c = i[1], u = l6(t.displayMonths, n), d = o ?? (l && t.isDateDisplayed(l)) ? l : u, f = function() {
    c(o), s(void 0);
  }, p = function(w) {
    s(w);
  }, m = he(), g = function(w, b) {
    if (o) {
      var y = _f(o, {
        moveBy: w,
        direction: b,
        context: m,
        modifiers: n
      });
      je(o, y) || (t.goToDate(y, o), p(y));
    }
  }, v = {
    focusedDay: o,
    focusTarget: d,
    blur: f,
    focus: p,
    focusDayAfter: function() {
      return g("day", "after");
    },
    focusDayBefore: function() {
      return g("day", "before");
    },
    focusWeekAfter: function() {
      return g("week", "after");
    },
    focusWeekBefore: function() {
      return g("week", "before");
    },
    focusMonthBefore: function() {
      return g("month", "before");
    },
    focusMonthAfter: function() {
      return g("month", "after");
    },
    focusYearBefore: function() {
      return g("year", "before");
    },
    focusYearAfter: function() {
      return g("year", "after");
    },
    focusStartOfWeek: function() {
      return g("startOfWeek", "before");
    },
    focusEndOfWeek: function() {
      return g("endOfWeek", "after");
    }
  };
  return a(If.Provider, { value: v, children: e.children });
}
function sa() {
  var e = fe(If);
  if (!e)
    throw new Error("useFocusContext must be used within a FocusProvider");
  return e;
}
function d6(e, t) {
  var n = Af(), r = oa(e, n, t);
  return r;
}
var ia = Ge(void 0);
function f6(e) {
  if (!Ao(e.initialProps)) {
    var t = {
      selected: void 0
    };
    return a(ia.Provider, { value: t, children: e.children });
  }
  return a(h6, { initialProps: e.initialProps, children: e.children });
}
function h6(e) {
  var t = e.initialProps, n = e.children, r = function(s, i, l) {
    var c, u, d;
    if ((c = t.onDayClick) === null || c === void 0 || c.call(t, s, i, l), i.selected && !t.required) {
      (u = t.onSelect) === null || u === void 0 || u.call(t, void 0, s, i, l);
      return;
    }
    (d = t.onSelect) === null || d === void 0 || d.call(t, s, s, i, l);
  }, o = {
    selected: t.selected,
    onDayClick: r
  };
  return a(ia.Provider, { value: o, children: n });
}
function Vf() {
  var e = fe(ia);
  if (!e)
    throw new Error("useSelectSingle must be used within a SelectSingleProvider");
  return e;
}
function p6(e, t) {
  var n = he(), r = Vf(), o = ta(), s = ra(), i = sa(), l = i.focusDayAfter, c = i.focusDayBefore, u = i.focusWeekAfter, d = i.focusWeekBefore, f = i.blur, p = i.focus, m = i.focusMonthBefore, g = i.focusMonthAfter, v = i.focusYearBefore, w = i.focusYearAfter, b = i.focusStartOfWeek, y = i.focusEndOfWeek, C = function(I) {
    var V, H, ue, ve;
    Ao(n) ? (V = r.onDayClick) === null || V === void 0 || V.call(r, e, t, I) : pr(n) ? (H = o.onDayClick) === null || H === void 0 || H.call(o, e, t, I) : mr(n) ? (ue = s.onDayClick) === null || ue === void 0 || ue.call(s, e, t, I) : (ve = n.onDayClick) === null || ve === void 0 || ve.call(n, e, t, I);
  }, M = function(I) {
    var V;
    p(e), (V = n.onDayFocus) === null || V === void 0 || V.call(n, e, t, I);
  }, E = function(I) {
    var V;
    f(), (V = n.onDayBlur) === null || V === void 0 || V.call(n, e, t, I);
  }, A = function(I) {
    var V;
    (V = n.onDayMouseEnter) === null || V === void 0 || V.call(n, e, t, I);
  }, B = function(I) {
    var V;
    (V = n.onDayMouseLeave) === null || V === void 0 || V.call(n, e, t, I);
  }, L = function(I) {
    var V;
    (V = n.onDayPointerEnter) === null || V === void 0 || V.call(n, e, t, I);
  }, D = function(I) {
    var V;
    (V = n.onDayPointerLeave) === null || V === void 0 || V.call(n, e, t, I);
  }, W = function(I) {
    var V;
    (V = n.onDayTouchCancel) === null || V === void 0 || V.call(n, e, t, I);
  }, Q = function(I) {
    var V;
    (V = n.onDayTouchEnd) === null || V === void 0 || V.call(n, e, t, I);
  }, j = function(I) {
    var V;
    (V = n.onDayTouchMove) === null || V === void 0 || V.call(n, e, t, I);
  }, Z = function(I) {
    var V;
    (V = n.onDayTouchStart) === null || V === void 0 || V.call(n, e, t, I);
  }, J = function(I) {
    var V;
    (V = n.onDayKeyUp) === null || V === void 0 || V.call(n, e, t, I);
  }, G = function(I) {
    var V;
    switch (I.key) {
      case "ArrowLeft":
        I.preventDefault(), I.stopPropagation(), n.dir === "rtl" ? l() : c();
        break;
      case "ArrowRight":
        I.preventDefault(), I.stopPropagation(), n.dir === "rtl" ? c() : l();
        break;
      case "ArrowDown":
        I.preventDefault(), I.stopPropagation(), u();
        break;
      case "ArrowUp":
        I.preventDefault(), I.stopPropagation(), d();
        break;
      case "PageUp":
        I.preventDefault(), I.stopPropagation(), I.shiftKey ? v() : m();
        break;
      case "PageDown":
        I.preventDefault(), I.stopPropagation(), I.shiftKey ? w() : g();
        break;
      case "Home":
        I.preventDefault(), I.stopPropagation(), b();
        break;
      case "End":
        I.preventDefault(), I.stopPropagation(), y();
        break;
    }
    (V = n.onDayKeyDown) === null || V === void 0 || V.call(n, e, t, I);
  }, q = {
    onClick: C,
    onFocus: M,
    onBlur: E,
    onKeyDown: G,
    onKeyUp: J,
    onMouseEnter: A,
    onMouseLeave: B,
    onPointerEnter: L,
    onPointerLeave: D,
    onTouchCancel: W,
    onTouchEnd: Q,
    onTouchMove: j,
    onTouchStart: Z
  };
  return q;
}
function m6() {
  var e = he(), t = Vf(), n = ta(), r = ra(), o = Ao(e) ? t.selected : pr(e) ? n.selected : mr(e) ? r.selected : void 0;
  return o;
}
function g6(e) {
  return Object.values(at).includes(e);
}
function v6(e, t) {
  var n = [e.classNames.day];
  return Object.keys(t).forEach(function(r) {
    var o = e.modifiersClassNames[r];
    if (o)
      n.push(o);
    else if (g6(r)) {
      var s = e.classNames["day_".concat(r)];
      s && n.push(s);
    }
  }), n;
}
function y6(e, t) {
  var n = X({}, e.styles.day);
  return Object.keys(t).forEach(function(r) {
    var o;
    n = X(X({}, n), (o = e.modifiersStyles) === null || o === void 0 ? void 0 : o[r]);
  }), n;
}
function w6(e, t, n) {
  var r, o, s, i = he(), l = sa(), c = d6(e, t), u = p6(e, c), d = m6(), f = !!(i.onDayClick || i.mode !== "default");
  Le(function() {
    var A;
    c.outside || l.focusedDay && f && je(l.focusedDay, e) && ((A = n.current) === null || A === void 0 || A.focus());
  }, [
    l.focusedDay,
    e,
    n,
    f,
    c.outside
  ]);
  var p = v6(i, c).join(" "), m = y6(i, c), g = !!(c.outside && !i.showOutsideDays || c.hidden), v = (s = (o = i.components) === null || o === void 0 ? void 0 : o.DayContent) !== null && s !== void 0 ? s : $C, w = a(v, { date: e, displayMonth: t, activeModifiers: c }), b = {
    style: m,
    className: p,
    children: w,
    role: "gridcell"
  }, y = l.focusTarget && je(l.focusTarget, e) && !c.outside, C = l.focusedDay && je(l.focusedDay, e), M = X(X(X({}, b), (r = { disabled: c.disabled, role: "gridcell" }, r["aria-selected"] = c.selected, r.tabIndex = C || y ? 0 : -1, r)), u), E = {
    isButton: f,
    isHidden: g,
    activeModifiers: c,
    selectedDays: d,
    buttonProps: M,
    divProps: b
  };
  return E;
}
function b6(e) {
  var t = Ue(null), n = w6(e.date, e.displayMonth, t);
  return n.isHidden ? a("div", { role: "gridcell" }) : n.isButton ? a(no, X({ name: "day", ref: t }, n.buttonProps)) : a("div", X({}, n.divProps));
}
function C6(e) {
  var t = e.number, n = e.dates, r = he(), o = r.onWeekNumberClick, s = r.styles, i = r.classNames, l = r.locale, c = r.labels.labelWeekNumber, u = r.formatters.formatWeekNumber, d = u(Number(t), { locale: l });
  if (!o)
    return a("span", { className: i.weeknumber, style: s.weeknumber, children: d });
  var f = c(Number(t), { locale: l }), p = function(m) {
    o(t, n, m);
  };
  return a(no, { name: "week-number", "aria-label": f, className: i.weeknumber, style: s.weeknumber, onClick: p, children: d });
}
function x6(e) {
  var t, n, r = he(), o = r.styles, s = r.classNames, i = r.showWeekNumber, l = r.components, c = (t = l == null ? void 0 : l.Day) !== null && t !== void 0 ? t : b6, u = (n = l == null ? void 0 : l.WeekNumber) !== null && n !== void 0 ? n : C6, d;
  return i && (d = a("td", { className: s.cell, style: o.cell, children: a(u, { number: e.weekNumber, dates: e.dates }) })), k("tr", { className: s.row, style: o.row, children: [d, e.dates.map(function(f) {
    return a("td", { className: s.cell, style: o.cell, role: "presentation", children: a(c, { displayMonth: e.displayMonth, date: f }) }, Q4(f));
  })] });
}
function Mc(e, t, n) {
  for (var r = n != null && n.ISOWeek ? bf(t) : Qi(t, n), o = n != null && n.ISOWeek ? on(e) : yt(e, n), s = pt(r, o), i = [], l = 0; l <= s; l++)
    i.push(Ve(o, l));
  var c = i.reduce(function(u, d) {
    var f = n != null && n.ISOWeek ? xf(d) : Sf(d, n), p = u.find(function(m) {
      return m.weekNumber === f;
    });
    return p ? (p.dates.push(d), u) : (u.push({
      weekNumber: f,
      dates: [d]
    }), u);
  }, []);
  return c;
}
function k6(e, t) {
  var n = Mc(He(e), qi(e), t);
  if (t != null && t.useFixedWeeks) {
    var r = eC(e, t);
    if (r < 6) {
      var o = n[n.length - 1], s = o.dates[o.dates.length - 1], i = Ys(s, 6 - r), l = Mc(Ys(s, 1), i, t);
      n.push.apply(n, l);
    }
  }
  return n;
}
function S6(e) {
  var t, n, r, o = he(), s = o.locale, i = o.classNames, l = o.styles, c = o.hideHead, u = o.fixedWeeks, d = o.components, f = o.weekStartsOn, p = o.firstWeekContainsDate, m = o.ISOWeek, g = k6(e.displayMonth, {
    useFixedWeeks: !!u,
    ISOWeek: m,
    locale: s,
    weekStartsOn: f,
    firstWeekContainsDate: p
  }), v = (t = d == null ? void 0 : d.Head) !== null && t !== void 0 ? t : BC, w = (n = d == null ? void 0 : d.Row) !== null && n !== void 0 ? n : x6, b = (r = d == null ? void 0 : d.Footer) !== null && r !== void 0 ? r : VC;
  return k("table", { id: e.id, className: i.table, style: l.table, role: "grid", "aria-labelledby": e["aria-labelledby"], children: [!c && a(v, {}), a("tbody", { className: i.tbody, style: l.tbody, children: g.map(function(y) {
    return a(w, { displayMonth: e.displayMonth, dates: y.dates, weekNumber: y.weekNumber }, y.weekNumber);
  }) }), a(b, { displayMonth: e.displayMonth })] });
}
function M6() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var E6 = M6() ? lu : Le, ws = !1, P6 = 0;
function Ec() {
  return "react-day-picker-".concat(++P6);
}
function N6(e) {
  var t, n = e ?? (ws ? Ec() : null), r = Ce(n), o = r[0], s = r[1];
  return E6(function() {
    o === null && s(Ec());
  }, []), Le(function() {
    ws === !1 && (ws = !0);
  }, []), (t = e ?? o) !== null && t !== void 0 ? t : void 0;
}
function T6(e) {
  var t, n, r = he(), o = r.dir, s = r.classNames, i = r.styles, l = r.components, c = gr().displayMonths, u = N6(r.id ? "".concat(r.id, "-").concat(e.displayIndex) : void 0), d = r.id ? "".concat(r.id, "-grid-").concat(e.displayIndex) : void 0, f = [s.month], p = i.month, m = e.displayIndex === 0, g = e.displayIndex === c.length - 1, v = !m && !g;
  o === "rtl" && (t = [m, g], g = t[0], m = t[1]), m && (f.push(s.caption_start), p = X(X({}, p), i.caption_start)), g && (f.push(s.caption_end), p = X(X({}, p), i.caption_end)), v && (f.push(s.caption_between), p = X(X({}, p), i.caption_between));
  var w = (n = l == null ? void 0 : l.Caption) !== null && n !== void 0 ? n : IC;
  return k("div", { className: f.join(" "), style: p, children: [a(w, { id: u, displayMonth: e.displayMonth, displayIndex: e.displayIndex }), a(S6, { id: d, "aria-labelledby": u, displayMonth: e.displayMonth })] }, e.displayIndex);
}
function L6(e) {
  var t = he(), n = t.classNames, r = t.styles;
  return a("div", { className: n.months, style: r.months, children: e.children });
}
function R6(e) {
  var t, n, r = e.initialProps, o = he(), s = sa(), i = gr(), l = Ce(!1), c = l[0], u = l[1];
  Le(function() {
    o.initialFocus && s.focusTarget && (c || (s.focus(s.focusTarget), u(!0)));
  }, [
    o.initialFocus,
    c,
    s.focus,
    s.focusTarget,
    s
  ]);
  var d = [o.classNames.root, o.className];
  o.numberOfMonths > 1 && d.push(o.classNames.multiple_months), o.showWeekNumber && d.push(o.classNames.with_weeknumber);
  var f = X(X({}, o.styles.root), o.style), p = Object.keys(r).filter(function(g) {
    return g.startsWith("data-");
  }).reduce(function(g, v) {
    var w;
    return X(X({}, g), (w = {}, w[v] = r[v], w));
  }, {}), m = (n = (t = r.components) === null || t === void 0 ? void 0 : t.Months) !== null && n !== void 0 ? n : L6;
  return a("div", X({ className: d.join(" "), style: f, dir: o.dir, id: o.id, nonce: r.nonce, title: r.title, lang: r.lang }, p, { children: a(m, { children: i.displayMonths.map(function(g, v) {
    return a(T6, { displayIndex: v, displayMonth: g }, v);
  }) }) }));
}
function D6(e) {
  var t = e.children, n = nC(e, ["children"]);
  return a(CC, { initialProps: n, children: a(RC, { children: a(f6, { initialProps: n, children: a(WC, { initialProps: n, children: a(UC, { initialProps: n, children: a(QC, { children: a(u6, { children: t }) }) }) }) }) }) });
}
function A6(e) {
  return a(D6, X({}, e, { children: a(R6, { initialProps: e }) }));
}
function _6({
  className: e,
  classNames: t,
  showOutsideDays: n = !0,
  ...r
}) {
  return /* @__PURE__ */ a(
    A6,
    {
      showOutsideDays: n,
      className: T("p-3", e),
      classNames: {
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: T(
          qa({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "text-f1-foreground-secondary rounded-xs w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "rounded-full h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-outside)]:bg-f1-background-selected focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-middle)]:rounded-none first:[&:has([aria-selected].day-range-middle)]:rounded-l-lg last:[&:has([aria-selected].day-range-middle)]:rounded-r-lg [&:has([aria-selected].day-range-start)]:rounded-r-none [&:has([aria-selected].day-range-end)]:rounded-l-none first:[&:has([aria-selected].day-range-end)]:rounded-r-[24px] first:[&:has([aria-selected].day-range-end)]:rounded-l-md last:[&:has([aria-selected].day-range-start)]:rounded-l-[24px] last:[&:has([aria-selected].day-range-start)]:rounded-r-md [&:has([aria-selected].day-range-start.day-range-end)]:rounded-full",
        day: T(
          qa({ variant: "ghost" }),
          "rounded-[inherit] h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
        day_today: "bg-f1-background-secondary text-f1-foreground",
        day_outside: "day-outside text-f1-foreground-secondary opacity-50 aria-selected:bg-f1-background-selected aria-selected:text-f1-foreground",
        day_disabled: "text-f1-foreground-secondary opacity-50",
        day_range_middle: "day-range-middle",
        day_hidden: "invisible",
        ...t
      },
      components: {
        IconLeft: () => /* @__PURE__ */ a(Wb, { className: "h-4 w-4" }),
        IconRight: () => /* @__PURE__ */ a(Yi, { className: "h-4 w-4" })
      },
      ...r
    }
  );
}
_6.displayName = "Calendar";
var aa = "Avatar", [I6, oS] = wt(aa), [V6, Of] = I6(aa), Ff = h.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, ...r } = e, [o, s] = h.useState("idle");
    return /* @__PURE__ */ a(
      V6,
      {
        scope: n,
        imageLoadingStatus: o,
        onImageLoadingStatusChange: s,
        children: /* @__PURE__ */ a(z.span, { ...r, ref: t })
      }
    );
  }
);
Ff.displayName = aa;
var Bf = "AvatarImage", $f = h.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: o = () => {
    }, ...s } = e, i = Of(Bf, n), l = O6(r), c = be((u) => {
      o(u), i.onImageLoadingStatusChange(u);
    });
    return Ee(() => {
      l !== "idle" && c(l);
    }, [l, c]), l === "loaded" ? /* @__PURE__ */ a(z.img, { ...s, ref: t, src: r }) : null;
  }
);
$f.displayName = Bf;
var Wf = "AvatarFallback", jf = h.forwardRef(
  (e, t) => {
    const { __scopeAvatar: n, delayMs: r, ...o } = e, s = Of(Wf, n), [i, l] = h.useState(r === void 0);
    return h.useEffect(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => l(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), i && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ a(z.span, { ...o, ref: t }) : null;
  }
);
jf.displayName = Wf;
function O6(e) {
  const [t, n] = h.useState("idle");
  return Ee(() => {
    if (!e) {
      n("error");
      return;
    }
    let r = !0;
    const o = new window.Image(), s = (i) => () => {
      r && n(i);
    };
    return n("loading"), o.onload = s("loaded"), o.onerror = s("error"), o.src = e, () => {
      r = !1;
    };
  }, [e]), t;
}
var Hf = Ff, Uf = $f, Gf = jf;
const Rr = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel"
], F6 = Be(
  "relative flex shrink-0 items-center justify-center overflow-hidden text-center font-semibold",
  {
    variants: {
      size: {
        xsmall: "size-5 rounded-xs text-sm",
        small: "size-6 rounded-sm text-sm",
        medium: "size-8 rounded",
        large: "size-18 rounded-xl text-2xl"
      },
      type: {
        base: "",
        rounded: "rounded-full"
      },
      color: {
        viridian: "bg-[hsl(theme(colors.viridian.50))]",
        malibu: "bg-[hsl(theme(colors.malibu.50))]",
        yellow: "bg-[hsl(theme(colors.yellow.50))]",
        purple: "bg-[hsl(theme(colors.purple.50))]",
        lilac: "bg-[hsl(theme(colors.lilac.50))]",
        barbie: "bg-[hsl(theme(colors.barbie.50))]",
        smoke: "bg-[hsl(theme(colors.smoke.50))]",
        army: "bg-[hsl(theme(colors.army.50))]",
        flubber: "bg-[hsl(theme(colors.flubber.50))]",
        indigo: "bg-[hsl(theme(colors.indigo.50))]",
        camel: "bg-[hsl(theme(colors.camel.50))]"
      }
    },
    defaultVariants: {
      size: "medium",
      type: "base",
      color: "viridian"
    }
  }
), zf = h.forwardRef(({ size: e, type: t, color: n, className: r, ...o }, s) => /* @__PURE__ */ a(
  Hf,
  {
    ref: s,
    className: T(F6({ size: e, type: t, color: n, className: r })),
    ...o
  }
));
zf.displayName = Hf.displayName;
const Kf = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Uf,
  {
    ref: n,
    className: T("aspect-square h-full w-full object-cover", e),
    ...t,
    asChild: !0,
    children: /* @__PURE__ */ a(Fm, {})
  }
));
Kf.displayName = Uf.displayName;
const Yf = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Gf,
  {
    ref: n,
    className: T(
      "flex h-full w-full items-center justify-center text-f1-foreground-inverse/90",
      e
    ),
    ...t
  }
));
Yf.displayName = Gf.displayName;
function B6(e, t) {
  const n = Array.isArray(e) ? e : [e];
  return t === "xsmall" || t === "small" ? (n[0][0] ?? "").toUpperCase() : Array.isArray(e) ? n.slice(0, 2).map((o) => o[0]).join("").toUpperCase() : e.slice(0, 2).toUpperCase();
}
function $6(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++)
    t = e.charCodeAt(r) + ((t << 5) - t), t = t & t;
  const n = (t % Rr.length + Rr.length) % Rr.length;
  return Rr[n];
}
const _o = P(
  ({
    src: e,
    name: t,
    size: n,
    type: r,
    color: o = "random",
    "aria-label": s,
    "aria-labelledby": i
  }, l) => {
    const c = B6(t, n), u = o === "random" ? $6(Array.isArray(t) ? t.join("") : t) : o;
    return /* @__PURE__ */ k(
      zf,
      {
        size: n,
        type: r,
        color: u,
        ref: l,
        role: "img",
        "aria-hidden": !!!(s || i),
        "aria-label": s,
        "aria-labelledby": i,
        children: [
          /* @__PURE__ */ a(Kf, { src: e, alt: c }),
          /* @__PURE__ */ a(Yf, { children: c })
        ]
      }
    );
  }
);
_o.displayName = "BaseAvatar";
const Io = ({
  name: e,
  src: t,
  size: n,
  "aria-label": r,
  "aria-labelledby": o
}) => /* @__PURE__ */ a(
  _o,
  {
    type: "base",
    name: e,
    src: t,
    size: n,
    color: "viridian",
    "aria-label": r,
    "aria-labelledby": o
  }
);
Io.displayName = "CompanyAvatar";
const Vo = ({
  firstName: e,
  lastName: t,
  src: n,
  size: r,
  "aria-label": o,
  "aria-labelledby": s
}) => /* @__PURE__ */ a(
  _o,
  {
    type: "rounded",
    name: [e, t],
    src: n,
    size: r,
    color: "random",
    "aria-label": o,
    "aria-labelledby": s
  }
);
Vo.displayName = "PersonAvatar";
const la = ({
  name: e,
  src: t,
  size: n,
  "aria-label": r,
  "aria-labelledby": o
}) => /* @__PURE__ */ a(
  _o,
  {
    type: "base",
    name: e,
    src: t,
    size: n,
    color: "random",
    "aria-label": r,
    "aria-labelledby": o
  }
);
la.displayName = "TeamAvatar";
function Zf(e, t = "xsmall") {
  switch (e.type) {
    case "person":
      return /* @__PURE__ */ a(
        Vo,
        {
          firstName: e.firstName,
          lastName: e.lastName,
          src: e.src,
          size: t,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"]
        }
      );
    case "team":
      return /* @__PURE__ */ a(
        la,
        {
          name: e.name,
          src: e.src,
          size: t,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"]
        }
      );
    case "company":
      return /* @__PURE__ */ a(
        Io,
        {
          name: e.name,
          src: e.src,
          size: t,
          "aria-label": e["aria-label"],
          "aria-labelledby": e["aria-labelledby"]
        }
      );
  }
}
function vr(e) {
  const t = e + "CollectionProvider", [n, r] = wt(t), [o, s] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), i = (m) => {
    const { scope: g, children: v } = m, w = ee.useRef(null), b = ee.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ a(o, { scope: g, itemMap: b, collectionRef: w, children: v });
  };
  i.displayName = t;
  const l = e + "CollectionSlot", c = ee.forwardRef(
    (m, g) => {
      const { scope: v, children: w } = m, b = s(l, v), y = te(g, b.collectionRef);
      return /* @__PURE__ */ a(En, { ref: y, children: w });
    }
  );
  c.displayName = l;
  const u = e + "CollectionItemSlot", d = "data-radix-collection-item", f = ee.forwardRef(
    (m, g) => {
      const { scope: v, children: w, ...b } = m, y = ee.useRef(null), C = te(g, y), M = s(u, v);
      return ee.useEffect(() => (M.itemMap.set(y, { ref: y, ...b }), () => void M.itemMap.delete(y))), /* @__PURE__ */ a(En, { [d]: "", ref: C, children: w });
    }
  );
  f.displayName = u;
  function p(m) {
    const g = s(e + "CollectionConsumer", m);
    return ee.useCallback(() => {
      const w = g.collectionRef.current;
      if (!w) return [];
      const b = Array.from(w.querySelectorAll(`[${d}]`));
      return Array.from(g.itemMap.values()).sort(
        (M, E) => b.indexOf(M.ref.current) - b.indexOf(E.ref.current)
      );
    }, [g.collectionRef, g.itemMap]);
  }
  return [
    { Provider: i, Slot: c, ItemSlot: f },
    p,
    r
  ];
}
var bs = 0;
function ca() {
  h.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Pc()), document.body.insertAdjacentElement("beforeend", e[1] ?? Pc()), bs++, () => {
      bs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), bs--;
    };
  }, []);
}
function Pc() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Cs = "focusScope.autoFocusOnMount", xs = "focusScope.autoFocusOnUnmount", Nc = { bubbles: !1, cancelable: !0 }, W6 = "FocusScope", Oo = h.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: s,
    ...i
  } = e, [l, c] = h.useState(null), u = be(o), d = be(s), f = h.useRef(null), p = te(t, (v) => c(v)), m = h.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  h.useEffect(() => {
    if (r) {
      let v = function(C) {
        if (m.paused || !l) return;
        const M = C.target;
        l.contains(M) ? f.current = M : Bt(f.current, { select: !0 });
      }, w = function(C) {
        if (m.paused || !l) return;
        const M = C.relatedTarget;
        M !== null && (l.contains(M) || Bt(f.current, { select: !0 }));
      }, b = function(C) {
        if (document.activeElement === document.body)
          for (const E of C)
            E.removedNodes.length > 0 && Bt(l);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", w);
      const y = new MutationObserver(b);
      return l && y.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", w), y.disconnect();
      };
    }
  }, [r, l, m.paused]), h.useEffect(() => {
    if (l) {
      Lc.add(m);
      const v = document.activeElement;
      if (!l.contains(v)) {
        const b = new CustomEvent(Cs, Nc);
        l.addEventListener(Cs, u), l.dispatchEvent(b), b.defaultPrevented || (j6(K6(Xf(l)), { select: !0 }), document.activeElement === v && Bt(l));
      }
      return () => {
        l.removeEventListener(Cs, u), setTimeout(() => {
          const b = new CustomEvent(xs, Nc);
          l.addEventListener(xs, d), l.dispatchEvent(b), b.defaultPrevented || Bt(v ?? document.body, { select: !0 }), l.removeEventListener(xs, d), Lc.remove(m);
        }, 0);
      };
    }
  }, [l, u, d, m]);
  const g = h.useCallback(
    (v) => {
      if (!n && !r || m.paused) return;
      const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, b = document.activeElement;
      if (w && b) {
        const y = v.currentTarget, [C, M] = H6(y);
        C && M ? !v.shiftKey && b === M ? (v.preventDefault(), n && Bt(C, { select: !0 })) : v.shiftKey && b === C && (v.preventDefault(), n && Bt(M, { select: !0 })) : b === y && v.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ a(z.div, { tabIndex: -1, ...i, ref: p, onKeyDown: g });
});
Oo.displayName = W6;
function j6(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Bt(r, { select: t }), document.activeElement !== n) return;
}
function H6(e) {
  const t = Xf(e), n = Tc(t, e), r = Tc(t.reverse(), e);
  return [n, r];
}
function Xf(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Tc(e, t) {
  for (const n of e)
    if (!U6(n, { upTo: t })) return n;
}
function U6(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function G6(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Bt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && G6(e) && t && e.select();
  }
}
var Lc = z6();
function z6() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Rc(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Rc(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Rc(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function K6(e) {
  return e.filter((t) => t.tagName !== "A");
}
function qf(e) {
  const t = h.useRef({ value: e, previous: e });
  return h.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e]);
}
var Y6 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, mn = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap(), Ar = {}, ks = 0, Qf = function(e) {
  return e && (e.host || Qf(e.parentNode));
}, Z6 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Qf(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, X6 = function(e, t, n, r) {
  var o = Z6(t, Array.isArray(e) ? e : [e]);
  Ar[n] || (Ar[n] = /* @__PURE__ */ new WeakMap());
  var s = Ar[n], i = [], l = /* @__PURE__ */ new Set(), c = new Set(o), u = function(f) {
    !f || l.has(f) || (l.add(f), u(f.parentNode));
  };
  o.forEach(u);
  var d = function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(p) {
      if (l.has(p))
        d(p);
      else
        try {
          var m = p.getAttribute(r), g = m !== null && m !== "false", v = (mn.get(p) || 0) + 1, w = (s.get(p) || 0) + 1;
          mn.set(p, v), s.set(p, w), i.push(p), v === 1 && g && Dr.set(p, !0), w === 1 && p.setAttribute(n, "true"), g || p.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return d(t), l.clear(), ks++, function() {
    i.forEach(function(f) {
      var p = mn.get(f) - 1, m = s.get(f) - 1;
      mn.set(f, p), s.set(f, m), p || (Dr.has(f) || f.removeAttribute(r), Dr.delete(f)), m || f.removeAttribute(n);
    }), ks--, ks || (mn = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), Dr = /* @__PURE__ */ new WeakMap(), Ar = {});
  };
}, ua = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = Y6(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), X6(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, ht = function() {
  return ht = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
    }
    return t;
  }, ht.apply(this, arguments);
};
function Jf(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function q6(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, s; r < o; r++)
    (s || !(r in t)) && (s || (s = Array.prototype.slice.call(t, 0, r)), s[r] = t[r]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var jr = "right-scroll-bar-position", Hr = "width-before-scroll-bar", Q6 = "with-scroll-bars-hidden", J6 = "--removed-body-scroll-bar-size";
function Ss(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function e9(e, t) {
  var n = Ce(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var t9 = typeof window < "u" ? h.useLayoutEffect : h.useEffect, Dc = /* @__PURE__ */ new WeakMap();
function n9(e, t) {
  var n = e9(null, function(r) {
    return e.forEach(function(o) {
      return Ss(o, r);
    });
  });
  return t9(function() {
    var r = Dc.get(n);
    if (r) {
      var o = new Set(r), s = new Set(e), i = n.current;
      o.forEach(function(l) {
        s.has(l) || Ss(l, null);
      }), s.forEach(function(l) {
        o.has(l) || Ss(l, i);
      });
    }
    Dc.set(n, e);
  }, [e]), n;
}
function r9(e) {
  return e;
}
function o9(e, t) {
  t === void 0 && (t = r9);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(s) {
      var i = t(s, r);
      return n.push(i), function() {
        n = n.filter(function(l) {
          return l !== i;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (r = !0; n.length; ) {
        var i = n;
        n = [], i.forEach(s);
      }
      n = {
        push: function(l) {
          return s(l);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(s) {
      r = !0;
      var i = [];
      if (n.length) {
        var l = n;
        n = [], l.forEach(s), i = n;
      }
      var c = function() {
        var d = i;
        i = [], d.forEach(s);
      }, u = function() {
        return Promise.resolve().then(c);
      };
      u(), n = {
        push: function(d) {
          i.push(d), u();
        },
        filter: function(d) {
          return i = i.filter(d), n;
        }
      };
    }
  };
  return o;
}
function s9(e) {
  e === void 0 && (e = {});
  var t = o9(null);
  return t.options = ht({ async: !0, ssr: !1 }, e), t;
}
var eh = function(e) {
  var t = e.sideCar, n = Jf(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return h.createElement(r, ht({}, n));
};
eh.isSideCarExport = !0;
function i9(e, t) {
  return e.useMedium(t), eh;
}
var th = s9(), Ms = function() {
}, Fo = h.forwardRef(function(e, t) {
  var n = h.useRef(null), r = h.useState({
    onScrollCapture: Ms,
    onWheelCapture: Ms,
    onTouchMoveCapture: Ms
  }), o = r[0], s = r[1], i = e.forwardProps, l = e.children, c = e.className, u = e.removeScrollBar, d = e.enabled, f = e.shards, p = e.sideCar, m = e.noIsolation, g = e.inert, v = e.allowPinchZoom, w = e.as, b = w === void 0 ? "div" : w, y = e.gapMode, C = Jf(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), M = p, E = n9([n, t]), A = ht(ht({}, C), o);
  return h.createElement(
    h.Fragment,
    null,
    d && h.createElement(M, { sideCar: th, removeScrollBar: u, shards: f, noIsolation: m, inert: g, setCallbacks: s, allowPinchZoom: !!v, lockRef: n, gapMode: y }),
    i ? h.cloneElement(h.Children.only(l), ht(ht({}, A), { ref: E })) : h.createElement(b, ht({}, A, { className: c, ref: E }), l)
  );
});
Fo.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Fo.classNames = {
  fullWidth: Hr,
  zeroRight: jr
};
var a9 = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function l9() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = a9();
  return t && e.setAttribute("nonce", t), e;
}
function c9(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function u9(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var d9 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = l9()) && (c9(t, n), u9(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, f9 = function() {
  var e = d9();
  return function(t, n) {
    h.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, nh = function() {
  var e = f9(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, h9 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Es = function(e) {
  return parseInt(e || "", 10) || 0;
}, p9 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Es(n), Es(r), Es(o)];
}, m9 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return h9;
  var t = p9(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, g9 = nh(), Mn = "data-scroll-locked", v9 = function(e, t, n, r) {
  var o = e.left, s = e.top, i = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Q6, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body[`).concat(Mn, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(jr, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(Hr, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(jr, " .").concat(jr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Hr, " .").concat(Hr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Mn, `] {
    `).concat(J6, ": ").concat(l, `px;
  }
`);
}, Ac = function() {
  var e = parseInt(document.body.getAttribute(Mn) || "0", 10);
  return isFinite(e) ? e : 0;
}, y9 = function() {
  h.useEffect(function() {
    return document.body.setAttribute(Mn, (Ac() + 1).toString()), function() {
      var e = Ac() - 1;
      e <= 0 ? document.body.removeAttribute(Mn) : document.body.setAttribute(Mn, e.toString());
    };
  }, []);
}, w9 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  y9();
  var s = h.useMemo(function() {
    return m9(o);
  }, [o]);
  return h.createElement(g9, { styles: v9(s, !t, o, n ? "" : "!important") });
}, Xs = !1;
if (typeof window < "u")
  try {
    var _r = Object.defineProperty({}, "passive", {
      get: function() {
        return Xs = !0, !0;
      }
    });
    window.addEventListener("test", _r, _r), window.removeEventListener("test", _r, _r);
  } catch {
    Xs = !1;
  }
var gn = Xs ? { passive: !1 } : !1, b9 = function(e) {
  return e.tagName === "TEXTAREA";
}, rh = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !b9(e) && n[t] === "visible")
  );
}, C9 = function(e) {
  return rh(e, "overflowY");
}, x9 = function(e) {
  return rh(e, "overflowX");
}, _c = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = oh(e, r);
    if (o) {
      var s = sh(e, r), i = s[1], l = s[2];
      if (i > l)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, k9 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, S9 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, oh = function(e, t) {
  return e === "v" ? C9(t) : x9(t);
}, sh = function(e, t) {
  return e === "v" ? k9(t) : S9(t);
}, M9 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, E9 = function(e, t, n, r, o) {
  var s = M9(e, window.getComputedStyle(t).direction), i = s * r, l = n.target, c = t.contains(l), u = !1, d = i > 0, f = 0, p = 0;
  do {
    var m = sh(e, l), g = m[0], v = m[1], w = m[2], b = v - w - s * g;
    (g || b) && oh(e, l) && (f += b, p += g), l instanceof ShadowRoot ? l = l.host : l = l.parentNode;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (t.contains(l) || t === l)
  );
  return (d && (Math.abs(f) < 1 || !o) || !d && (Math.abs(p) < 1 || !o)) && (u = !0), u;
}, Ir = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ic = function(e) {
  return [e.deltaX, e.deltaY];
}, Vc = function(e) {
  return e && "current" in e ? e.current : e;
}, P9 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, N9 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, T9 = 0, vn = [];
function L9(e) {
  var t = h.useRef([]), n = h.useRef([0, 0]), r = h.useRef(), o = h.useState(T9++)[0], s = h.useState(nh)[0], i = h.useRef(e);
  h.useEffect(function() {
    i.current = e;
  }, [e]), h.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var v = q6([e.lockRef.current], (e.shards || []).map(Vc), !0).filter(Boolean);
      return v.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), v.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = h.useCallback(function(v, w) {
    if ("touches" in v && v.touches.length === 2)
      return !i.current.allowPinchZoom;
    var b = Ir(v), y = n.current, C = "deltaX" in v ? v.deltaX : y[0] - b[0], M = "deltaY" in v ? v.deltaY : y[1] - b[1], E, A = v.target, B = Math.abs(C) > Math.abs(M) ? "h" : "v";
    if ("touches" in v && B === "h" && A.type === "range")
      return !1;
    var L = _c(B, A);
    if (!L)
      return !0;
    if (L ? E = B : (E = B === "v" ? "h" : "v", L = _c(B, A)), !L)
      return !1;
    if (!r.current && "changedTouches" in v && (C || M) && (r.current = E), !E)
      return !0;
    var D = r.current || E;
    return E9(D, w, v, D === "h" ? C : M, !0);
  }, []), c = h.useCallback(function(v) {
    var w = v;
    if (!(!vn.length || vn[vn.length - 1] !== s)) {
      var b = "deltaY" in w ? Ic(w) : Ir(w), y = t.current.filter(function(E) {
        return E.name === w.type && (E.target === w.target || w.target === E.shadowParent) && P9(E.delta, b);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var C = (i.current.shards || []).map(Vc).filter(Boolean).filter(function(E) {
          return E.contains(w.target);
        }), M = C.length > 0 ? l(w, C[0]) : !i.current.noIsolation;
        M && w.cancelable && w.preventDefault();
      }
    }
  }, []), u = h.useCallback(function(v, w, b, y) {
    var C = { name: v, delta: w, target: b, should: y, shadowParent: R9(b) };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(M) {
        return M !== C;
      });
    }, 1);
  }, []), d = h.useCallback(function(v) {
    n.current = Ir(v), r.current = void 0;
  }, []), f = h.useCallback(function(v) {
    u(v.type, Ic(v), v.target, l(v, e.lockRef.current));
  }, []), p = h.useCallback(function(v) {
    u(v.type, Ir(v), v.target, l(v, e.lockRef.current));
  }, []);
  h.useEffect(function() {
    return vn.push(s), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, gn), document.addEventListener("touchmove", c, gn), document.addEventListener("touchstart", d, gn), function() {
      vn = vn.filter(function(v) {
        return v !== s;
      }), document.removeEventListener("wheel", c, gn), document.removeEventListener("touchmove", c, gn), document.removeEventListener("touchstart", d, gn);
    };
  }, []);
  var m = e.removeScrollBar, g = e.inert;
  return h.createElement(
    h.Fragment,
    null,
    g ? h.createElement(s, { styles: N9(o) }) : null,
    m ? h.createElement(w9, { gapMode: e.gapMode }) : null
  );
}
function R9(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const D9 = i9(th, L9);
var Bo = h.forwardRef(function(e, t) {
  return h.createElement(Fo, ht({}, e, { ref: t, sideCar: D9 }));
});
Bo.classNames = Fo.classNames;
var A9 = [" ", "Enter", "ArrowUp", "ArrowDown"], _9 = [" ", "Enter"], yr = "Select", [$o, Wo, I9] = vr(yr), [In, sS] = wt(yr, [
  I9,
  go
]), jo = go(), [V9, zt] = In(yr), [O9, F9] = In(yr), ih = (e) => {
  const {
    __scopeSelect: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    value: i,
    defaultValue: l,
    onValueChange: c,
    dir: u,
    name: d,
    autoComplete: f,
    disabled: p,
    required: m
  } = e, g = jo(t), [v, w] = h.useState(null), [b, y] = h.useState(null), [C, M] = h.useState(!1), E = _n(u), [A = !1, B] = st({
    prop: r,
    defaultProp: o,
    onChange: s
  }), [L, D] = st({
    prop: i,
    defaultProp: l,
    onChange: c
  }), W = h.useRef(null), Q = v ? !!v.closest("form") : !0, [j, Z] = h.useState(/* @__PURE__ */ new Set()), J = Array.from(j).map((G) => G.props.value).join(";");
  return /* @__PURE__ */ a(iu, { ...g, children: /* @__PURE__ */ k(
    V9,
    {
      required: m,
      scope: t,
      trigger: v,
      onTriggerChange: w,
      valueNode: b,
      onValueNodeChange: y,
      valueNodeHasChildren: C,
      onValueNodeHasChildrenChange: M,
      contentId: Je(),
      value: L,
      onValueChange: D,
      open: A,
      onOpenChange: B,
      dir: E,
      triggerPointerDownPosRef: W,
      disabled: p,
      children: [
        /* @__PURE__ */ a($o.Provider, { scope: t, children: /* @__PURE__ */ a(
          O9,
          {
            scope: e.__scopeSelect,
            onNativeOptionAdd: h.useCallback((G) => {
              Z((q) => new Set(q).add(G));
            }, []),
            onNativeOptionRemove: h.useCallback((G) => {
              Z((q) => {
                const I = new Set(q);
                return I.delete(G), I;
              });
            }, []),
            children: n
          }
        ) }),
        Q ? /* @__PURE__ */ k(
          Lh,
          {
            "aria-hidden": !0,
            required: m,
            tabIndex: -1,
            name: d,
            autoComplete: f,
            value: L,
            onChange: (G) => D(G.target.value),
            disabled: p,
            children: [
              L === void 0 ? /* @__PURE__ */ a("option", { value: "" }) : null,
              Array.from(j)
            ]
          },
          J
        ) : null
      ]
    }
  ) });
};
ih.displayName = yr;
var ah = "SelectTrigger", lh = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e, s = jo(n), i = zt(ah, n), l = i.disabled || r, c = te(t, i.onTriggerChange), u = Wo(n), [d, f, p] = Rh((g) => {
      const v = u().filter((y) => !y.disabled), w = v.find((y) => y.value === i.value), b = Dh(v, g, w);
      b !== void 0 && i.onValueChange(b.value);
    }), m = () => {
      l || (i.onOpenChange(!0), p());
    };
    return /* @__PURE__ */ a(ru, { asChild: !0, ...s, children: /* @__PURE__ */ a(
      z.button,
      {
        type: "button",
        role: "combobox",
        "aria-controls": i.contentId,
        "aria-expanded": i.open,
        "aria-required": i.required,
        "aria-autocomplete": "none",
        dir: i.dir,
        "data-state": i.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": Th(i.value) ? "" : void 0,
        ...o,
        ref: c,
        onClick: O(o.onClick, (g) => {
          g.currentTarget.focus();
        }),
        onPointerDown: O(o.onPointerDown, (g) => {
          const v = g.target;
          v.hasPointerCapture(g.pointerId) && v.releasePointerCapture(g.pointerId), g.button === 0 && g.ctrlKey === !1 && (m(), i.triggerPointerDownPosRef.current = {
            x: Math.round(g.pageX),
            y: Math.round(g.pageY)
          }, g.preventDefault());
        }),
        onKeyDown: O(o.onKeyDown, (g) => {
          const v = d.current !== "";
          !(g.ctrlKey || g.altKey || g.metaKey) && g.key.length === 1 && f(g.key), !(v && g.key === " ") && A9.includes(g.key) && (m(), g.preventDefault());
        })
      }
    ) });
  }
);
lh.displayName = ah;
var ch = "SelectValue", uh = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, children: s, placeholder: i = "", ...l } = e, c = zt(ch, n), { onValueNodeHasChildrenChange: u } = c, d = s !== void 0, f = te(t, c.onValueNodeChange);
    return Ee(() => {
      u(d);
    }, [u, d]), /* @__PURE__ */ a(
      z.span,
      {
        ...l,
        ref: f,
        style: { pointerEvents: "none" },
        children: Th(c.value) ? /* @__PURE__ */ a(me, { children: i }) : s
      }
    );
  }
);
uh.displayName = ch;
var B9 = "SelectIcon", $9 = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return /* @__PURE__ */ a(z.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
  }
);
$9.displayName = B9;
var W9 = "SelectPortal", dh = (e) => /* @__PURE__ */ a(wo, { asChild: !0, ...e });
dh.displayName = W9;
var sn = "SelectContent", fh = h.forwardRef(
  (e, t) => {
    const n = zt(sn, e.__scopeSelect), [r, o] = h.useState();
    if (Ee(() => {
      o(new DocumentFragment());
    }, []), !n.open) {
      const s = r;
      return s ? du.createPortal(
        /* @__PURE__ */ a(hh, { scope: e.__scopeSelect, children: /* @__PURE__ */ a($o.Slot, { scope: e.__scopeSelect, children: /* @__PURE__ */ a("div", { children: e.children }) }) }),
        s
      ) : null;
    }
    return /* @__PURE__ */ a(ph, { ...e, ref: t });
  }
);
fh.displayName = sn;
var Et = 10, [hh, Kt] = In(sn), j9 = "SelectContentImpl", ph = h.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      position: r = "item-aligned",
      onCloseAutoFocus: o,
      onEscapeKeyDown: s,
      onPointerDownOutside: i,
      //
      // PopperContent props
      side: l,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: m,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: w,
      //
      ...b
    } = e, y = zt(sn, n), [C, M] = h.useState(null), [E, A] = h.useState(null), B = te(t, (K) => M(K)), [L, D] = h.useState(null), [W, Q] = h.useState(
      null
    ), j = Wo(n), [Z, J] = h.useState(!1), G = h.useRef(!1);
    h.useEffect(() => {
      if (C) return ua(C);
    }, [C]), ca();
    const q = h.useCallback(
      (K) => {
        const [se, ...de] = j().map((ce) => ce.ref.current), [ae] = de.slice(-1), le = document.activeElement;
        for (const ce of K)
          if (ce === le || (ce == null || ce.scrollIntoView({ block: "nearest" }), ce === se && E && (E.scrollTop = 0), ce === ae && E && (E.scrollTop = E.scrollHeight), ce == null || ce.focus(), document.activeElement !== le)) return;
      },
      [j, E]
    ), I = h.useCallback(
      () => q([L, C]),
      [q, L, C]
    );
    h.useEffect(() => {
      Z && I();
    }, [Z, I]);
    const { onOpenChange: V, triggerPointerDownPosRef: H } = y;
    h.useEffect(() => {
      if (C) {
        let K = { x: 0, y: 0 };
        const se = (ae) => {
          var le, ce;
          K = {
            x: Math.abs(Math.round(ae.pageX) - (((le = H.current) == null ? void 0 : le.x) ?? 0)),
            y: Math.abs(Math.round(ae.pageY) - (((ce = H.current) == null ? void 0 : ce.y) ?? 0))
          };
        }, de = (ae) => {
          K.x <= 10 && K.y <= 10 ? ae.preventDefault() : C.contains(ae.target) || V(!1), document.removeEventListener("pointermove", se), H.current = null;
        };
        return H.current !== null && (document.addEventListener("pointermove", se), document.addEventListener("pointerup", de, { capture: !0, once: !0 })), () => {
          document.removeEventListener("pointermove", se), document.removeEventListener("pointerup", de, { capture: !0 });
        };
      }
    }, [C, V, H]), h.useEffect(() => {
      const K = () => V(!1);
      return window.addEventListener("blur", K), window.addEventListener("resize", K), () => {
        window.removeEventListener("blur", K), window.removeEventListener("resize", K);
      };
    }, [V]);
    const [ue, ve] = Rh((K) => {
      const se = j().filter((le) => !le.disabled), de = se.find((le) => le.ref.current === document.activeElement), ae = Dh(se, K, de);
      ae && setTimeout(() => ae.ref.current.focus());
    }), _e = h.useCallback(
      (K, se, de) => {
        const ae = !G.current && !de;
        (y.value !== void 0 && y.value === se || ae) && (D(K), ae && (G.current = !0));
      },
      [y.value]
    ), xt = h.useCallback(() => C == null ? void 0 : C.focus(), [C]), ze = h.useCallback(
      (K, se, de) => {
        const ae = !G.current && !de;
        (y.value !== void 0 && y.value === se || ae) && Q(K);
      },
      [y.value]
    ), kt = r === "popper" ? qs : mh, Ie = kt === qs ? {
      side: l,
      sideOffset: c,
      align: u,
      alignOffset: d,
      arrowPadding: f,
      collisionBoundary: p,
      collisionPadding: m,
      sticky: g,
      hideWhenDetached: v,
      avoidCollisions: w
    } : {};
    return /* @__PURE__ */ a(
      hh,
      {
        scope: n,
        content: C,
        viewport: E,
        onViewportChange: A,
        itemRefCallback: _e,
        selectedItem: L,
        onItemLeave: xt,
        itemTextRefCallback: ze,
        focusSelectedItem: I,
        selectedItemText: W,
        position: r,
        isPositioned: Z,
        searchRef: ue,
        children: /* @__PURE__ */ a(Bo, { as: En, allowPinchZoom: !0, children: /* @__PURE__ */ a(
          Oo,
          {
            asChild: !0,
            trapped: y.open,
            onMountAutoFocus: (K) => {
              K.preventDefault();
            },
            onUnmountAutoFocus: O(o, (K) => {
              var se;
              (se = y.trigger) == null || se.focus({ preventScroll: !0 }), K.preventDefault();
            }),
            children: /* @__PURE__ */ a(
              vo,
              {
                asChild: !0,
                disableOutsidePointerEvents: !0,
                onEscapeKeyDown: s,
                onPointerDownOutside: i,
                onFocusOutside: (K) => K.preventDefault(),
                onDismiss: () => y.onOpenChange(!1),
                children: /* @__PURE__ */ a(
                  kt,
                  {
                    role: "listbox",
                    id: y.contentId,
                    "data-state": y.open ? "open" : "closed",
                    dir: y.dir,
                    onContextMenu: (K) => K.preventDefault(),
                    ...b,
                    ...Ie,
                    onPlaced: () => J(!0),
                    ref: B,
                    style: {
                      // flex layout so we can place the scroll buttons properly
                      display: "flex",
                      flexDirection: "column",
                      // reset the outline by default as the content MAY get focused
                      outline: "none",
                      ...b.style
                    },
                    onKeyDown: O(b.onKeyDown, (K) => {
                      const se = K.ctrlKey || K.altKey || K.metaKey;
                      if (K.key === "Tab" && K.preventDefault(), !se && K.key.length === 1 && ve(K.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(K.key)) {
                        let ae = j().filter((le) => !le.disabled).map((le) => le.ref.current);
                        if (["ArrowUp", "End"].includes(K.key) && (ae = ae.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(K.key)) {
                          const le = K.target, ce = ae.indexOf(le);
                          ae = ae.slice(ce + 1);
                        }
                        setTimeout(() => q(ae)), K.preventDefault();
                      }
                    })
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
ph.displayName = j9;
var H9 = "SelectItemAlignedPosition", mh = h.forwardRef((e, t) => {
  const { __scopeSelect: n, onPlaced: r, ...o } = e, s = zt(sn, n), i = Kt(sn, n), [l, c] = h.useState(null), [u, d] = h.useState(null), f = te(t, (B) => d(B)), p = Wo(n), m = h.useRef(!1), g = h.useRef(!0), { viewport: v, selectedItem: w, selectedItemText: b, focusSelectedItem: y } = i, C = h.useCallback(() => {
    if (s.trigger && s.valueNode && l && u && v && w && b) {
      const B = s.trigger.getBoundingClientRect(), L = u.getBoundingClientRect(), D = s.valueNode.getBoundingClientRect(), W = b.getBoundingClientRect();
      if (s.dir !== "rtl") {
        const le = W.left - L.left, ce = D.left - le, ut = B.left - ce, dt = B.width + ut, kr = Math.max(dt, L.width), Sr = window.innerWidth - Et, Mr = zs(ce, [Et, Sr - kr]);
        l.style.minWidth = dt + "px", l.style.left = Mr + "px";
      } else {
        const le = L.right - W.right, ce = window.innerWidth - D.right - le, ut = window.innerWidth - B.right - ce, dt = B.width + ut, kr = Math.max(dt, L.width), Sr = window.innerWidth - Et, Mr = zs(ce, [Et, Sr - kr]);
        l.style.minWidth = dt + "px", l.style.right = Mr + "px";
      }
      const Q = p(), j = window.innerHeight - Et * 2, Z = v.scrollHeight, J = window.getComputedStyle(u), G = parseInt(J.borderTopWidth, 10), q = parseInt(J.paddingTop, 10), I = parseInt(J.borderBottomWidth, 10), V = parseInt(J.paddingBottom, 10), H = G + q + Z + V + I, ue = Math.min(w.offsetHeight * 5, H), ve = window.getComputedStyle(v), _e = parseInt(ve.paddingTop, 10), xt = parseInt(ve.paddingBottom, 10), ze = B.top + B.height / 2 - Et, kt = j - ze, Ie = w.offsetHeight / 2, K = w.offsetTop + Ie, se = G + q + K, de = H - se;
      if (se <= ze) {
        const le = w === Q[Q.length - 1].ref.current;
        l.style.bottom = "0px";
        const ce = u.clientHeight - v.offsetTop - v.offsetHeight, ut = Math.max(
          kt,
          Ie + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (le ? xt : 0) + ce + I
        ), dt = se + ut;
        l.style.height = dt + "px";
      } else {
        const le = w === Q[0].ref.current;
        l.style.top = "0px";
        const ut = Math.max(
          ze,
          G + v.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (le ? _e : 0) + Ie
        ) + de;
        l.style.height = ut + "px", v.scrollTop = se - ze + v.offsetTop;
      }
      l.style.margin = `${Et}px 0`, l.style.minHeight = ue + "px", l.style.maxHeight = j + "px", r == null || r(), requestAnimationFrame(() => m.current = !0);
    }
  }, [
    p,
    s.trigger,
    s.valueNode,
    l,
    u,
    v,
    w,
    b,
    s.dir,
    r
  ]);
  Ee(() => C(), [C]);
  const [M, E] = h.useState();
  Ee(() => {
    u && E(window.getComputedStyle(u).zIndex);
  }, [u]);
  const A = h.useCallback(
    (B) => {
      B && g.current === !0 && (C(), y == null || y(), g.current = !1);
    },
    [C, y]
  );
  return /* @__PURE__ */ a(
    G9,
    {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: A,
      children: /* @__PURE__ */ a(
        "div",
        {
          ref: c,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: M
          },
          children: /* @__PURE__ */ a(
            z.div,
            {
              ...o,
              ref: f,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...o.style
              }
            }
          )
        }
      )
    }
  );
});
mh.displayName = H9;
var U9 = "SelectPopperPosition", qs = h.forwardRef((e, t) => {
  const {
    __scopeSelect: n,
    align: r = "start",
    collisionPadding: o = Et,
    ...s
  } = e, i = jo(n);
  return /* @__PURE__ */ a(
    ou,
    {
      ...i,
      ...s,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...s.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
qs.displayName = U9;
var [G9, da] = In(sn, {}), Qs = "SelectViewport", gh = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e, s = Kt(Qs, n), i = da(Qs, n), l = te(t, s.onViewportChange), c = h.useRef(0);
    return /* @__PURE__ */ k(me, { children: [
      /* @__PURE__ */ a(
        "style",
        {
          dangerouslySetInnerHTML: {
            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
          },
          nonce: r
        }
      ),
      /* @__PURE__ */ a($o.Slot, { scope: n, children: /* @__PURE__ */ a(
        z.div,
        {
          "data-radix-select-viewport": "",
          role: "presentation",
          ...o,
          ref: l,
          style: {
            // we use position: 'relative' here on the `viewport` so that when we call
            // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
            // (independent of the scrollUpButton).
            position: "relative",
            flex: 1,
            overflow: "auto",
            ...o.style
          },
          onScroll: O(o.onScroll, (u) => {
            const d = u.currentTarget, { contentWrapper: f, shouldExpandOnScrollRef: p } = i;
            if (p != null && p.current && f) {
              const m = Math.abs(c.current - d.scrollTop);
              if (m > 0) {
                const g = window.innerHeight - Et * 2, v = parseFloat(f.style.minHeight), w = parseFloat(f.style.height), b = Math.max(v, w);
                if (b < g) {
                  const y = b + m, C = Math.min(g, y), M = y - C;
                  f.style.height = C + "px", f.style.bottom === "0px" && (d.scrollTop = M > 0 ? M : 0, f.style.justifyContent = "flex-end");
                }
              }
            }
            c.current = d.scrollTop;
          })
        }
      ) })
    ] });
  }
);
gh.displayName = Qs;
var vh = "SelectGroup", [z9, K9] = In(vh), Y9 = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = Je();
    return /* @__PURE__ */ a(z9, { scope: n, id: o, children: /* @__PURE__ */ a(z.div, { role: "group", "aria-labelledby": o, ...r, ref: t }) });
  }
);
Y9.displayName = vh;
var yh = "SelectLabel", wh = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = K9(yh, n);
    return /* @__PURE__ */ a(z.div, { id: o.id, ...r, ref: t });
  }
);
wh.displayName = yh;
var ro = "SelectItem", [Z9, bh] = In(ro), Ch = h.forwardRef(
  (e, t) => {
    const {
      __scopeSelect: n,
      value: r,
      disabled: o = !1,
      textValue: s,
      ...i
    } = e, l = zt(ro, n), c = Kt(ro, n), u = l.value === r, [d, f] = h.useState(s ?? ""), [p, m] = h.useState(!1), g = te(
      t,
      (b) => {
        var y;
        return (y = c.itemRefCallback) == null ? void 0 : y.call(c, b, r, o);
      }
    ), v = Je(), w = () => {
      o || (l.onValueChange(r), l.onOpenChange(!1));
    };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ a(
      Z9,
      {
        scope: n,
        value: r,
        disabled: o,
        textId: v,
        isSelected: u,
        onItemTextChange: h.useCallback((b) => {
          f((y) => y || ((b == null ? void 0 : b.textContent) ?? "").trim());
        }, []),
        children: /* @__PURE__ */ a(
          $o.ItemSlot,
          {
            scope: n,
            value: r,
            disabled: o,
            textValue: d,
            children: /* @__PURE__ */ a(
              z.div,
              {
                role: "option",
                "aria-labelledby": v,
                "data-highlighted": p ? "" : void 0,
                "aria-selected": u && p,
                "data-state": u ? "checked" : "unchecked",
                "aria-disabled": o || void 0,
                "data-disabled": o ? "" : void 0,
                tabIndex: o ? void 0 : -1,
                ...i,
                ref: g,
                onFocus: O(i.onFocus, () => m(!0)),
                onBlur: O(i.onBlur, () => m(!1)),
                onPointerUp: O(i.onPointerUp, w),
                onPointerMove: O(i.onPointerMove, (b) => {
                  var y;
                  o ? (y = c.onItemLeave) == null || y.call(c) : b.currentTarget.focus({ preventScroll: !0 });
                }),
                onPointerLeave: O(i.onPointerLeave, (b) => {
                  var y;
                  b.currentTarget === document.activeElement && ((y = c.onItemLeave) == null || y.call(c));
                }),
                onKeyDown: O(i.onKeyDown, (b) => {
                  var C;
                  ((C = c.searchRef) == null ? void 0 : C.current) !== "" && b.key === " " || (_9.includes(b.key) && w(), b.key === " " && b.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Ch.displayName = ro;
var Un = "SelectItemText", xh = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...s } = e, i = zt(Un, n), l = Kt(Un, n), c = bh(Un, n), u = F9(Un, n), [d, f] = h.useState(null), p = te(
      t,
      (b) => f(b),
      c.onItemTextChange,
      (b) => {
        var y;
        return (y = l.itemTextRefCallback) == null ? void 0 : y.call(l, b, c.value, c.disabled);
      }
    ), m = d == null ? void 0 : d.textContent, g = h.useMemo(
      () => /* @__PURE__ */ a("option", { value: c.value, disabled: c.disabled, children: m }, c.value),
      [c.disabled, c.value, m]
    ), { onNativeOptionAdd: v, onNativeOptionRemove: w } = u;
    return Ee(() => (v(g), () => w(g)), [v, w, g]), /* @__PURE__ */ k(me, { children: [
      /* @__PURE__ */ a(z.span, { id: c.textId, ...s, ref: p }),
      c.isSelected && i.valueNode && !i.valueNodeHasChildren ? du.createPortal(s.children, i.valueNode) : null
    ] });
  }
);
xh.displayName = Un;
var kh = "SelectItemIndicator", Sh = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return bh(kh, n).isSelected ? /* @__PURE__ */ a(z.span, { "aria-hidden": !0, ...r, ref: t }) : null;
  }
);
Sh.displayName = kh;
var Js = "SelectScrollUpButton", Mh = h.forwardRef((e, t) => {
  const n = Kt(Js, e.__scopeSelect), r = da(Js, e.__scopeSelect), [o, s] = h.useState(!1), i = te(t, r.onScrollButtonChange);
  return Ee(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const u = c.scrollTop > 0;
        s(u);
      };
      const c = n.viewport;
      return l(), c.addEventListener("scroll", l), () => c.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ a(
    Ph,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: c } = n;
        l && c && (l.scrollTop = l.scrollTop - c.offsetHeight);
      }
    }
  ) : null;
});
Mh.displayName = Js;
var ei = "SelectScrollDownButton", Eh = h.forwardRef((e, t) => {
  const n = Kt(ei, e.__scopeSelect), r = da(ei, e.__scopeSelect), [o, s] = h.useState(!1), i = te(t, r.onScrollButtonChange);
  return Ee(() => {
    if (n.viewport && n.isPositioned) {
      let l = function() {
        const u = c.scrollHeight - c.clientHeight, d = Math.ceil(c.scrollTop) < u;
        s(d);
      };
      const c = n.viewport;
      return l(), c.addEventListener("scroll", l), () => c.removeEventListener("scroll", l);
    }
  }, [n.viewport, n.isPositioned]), o ? /* @__PURE__ */ a(
    Ph,
    {
      ...e,
      ref: i,
      onAutoScroll: () => {
        const { viewport: l, selectedItem: c } = n;
        l && c && (l.scrollTop = l.scrollTop + c.offsetHeight);
      }
    }
  ) : null;
});
Eh.displayName = ei;
var Ph = h.forwardRef((e, t) => {
  const { __scopeSelect: n, onAutoScroll: r, ...o } = e, s = Kt("SelectScrollButton", n), i = h.useRef(null), l = Wo(n), c = h.useCallback(() => {
    i.current !== null && (window.clearInterval(i.current), i.current = null);
  }, []);
  return h.useEffect(() => () => c(), [c]), Ee(() => {
    var d;
    const u = l().find((f) => f.ref.current === document.activeElement);
    (d = u == null ? void 0 : u.ref.current) == null || d.scrollIntoView({ block: "nearest" });
  }, [l]), /* @__PURE__ */ a(
    z.div,
    {
      "aria-hidden": !0,
      ...o,
      ref: t,
      style: { flexShrink: 0, ...o.style },
      onPointerDown: O(o.onPointerDown, () => {
        i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerMove: O(o.onPointerMove, () => {
        var u;
        (u = s.onItemLeave) == null || u.call(s), i.current === null && (i.current = window.setInterval(r, 50));
      }),
      onPointerLeave: O(o.onPointerLeave, () => {
        c();
      })
    }
  );
}), X9 = "SelectSeparator", Nh = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return /* @__PURE__ */ a(z.div, { "aria-hidden": !0, ...r, ref: t });
  }
);
Nh.displayName = X9;
var ti = "SelectArrow", q9 = h.forwardRef(
  (e, t) => {
    const { __scopeSelect: n, ...r } = e, o = jo(n), s = zt(ti, n), i = Kt(ti, n);
    return s.open && i.position === "popper" ? /* @__PURE__ */ a(su, { ...o, ...r, ref: t }) : null;
  }
);
q9.displayName = ti;
function Th(e) {
  return e === "" || e === void 0;
}
var Lh = h.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = h.useRef(null), s = te(t, o), i = qf(n);
    return h.useEffect(() => {
      const l = o.current, c = window.HTMLSelectElement.prototype, d = Object.getOwnPropertyDescriptor(
        c,
        "value"
      ).set;
      if (i !== n && d) {
        const f = new Event("change", { bubbles: !0 });
        d.call(l, n), l.dispatchEvent(f);
      }
    }, [i, n]), /* @__PURE__ */ a(Bm, { asChild: !0, children: /* @__PURE__ */ a("select", { ...r, ref: s, defaultValue: n }) });
  }
);
Lh.displayName = "BubbleSelect";
function Rh(e) {
  const t = be(e), n = h.useRef(""), r = h.useRef(0), o = h.useCallback(
    (i) => {
      const l = n.current + i;
      t(l), function c(u) {
        n.current = u, window.clearTimeout(r.current), u !== "" && (r.current = window.setTimeout(() => c(""), 1e3));
      }(l);
    },
    [t]
  ), s = h.useCallback(() => {
    n.current = "", window.clearTimeout(r.current);
  }, []);
  return h.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, s];
}
function Dh(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Q9(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const c = i.find(
    (u) => u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function Q9(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var J9 = ih, Ah = lh, e3 = uh, t3 = dh, _h = fh, n3 = gh, Ih = wh, Vh = Ch, r3 = xh, o3 = Sh, Oh = Mh, Fh = Eh, Bh = Nh;
const s3 = J9, i3 = e3, $h = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ a(Ah, { ref: r, className: T(e), ...n, children: t }));
$h.displayName = Ah.displayName;
const Wh = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Oh,
  {
    ref: n,
    className: T(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a(jb, { className: "h-4 w-4 text-f1-foreground" })
  }
));
Wh.displayName = Oh.displayName;
const jh = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Fh,
  {
    ref: n,
    className: T(
      "flex cursor-default items-center justify-center py-1",
      e
    ),
    ...t,
    children: /* @__PURE__ */ a($b, { className: "h-4 w-4 text-f1-foreground" })
  }
));
jh.displayName = Fh.displayName;
const Hh = h.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) => /* @__PURE__ */ a(t3, { children: /* @__PURE__ */ k(
  _h,
  {
    ref: o,
    className: T(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border bg-f1-background text-f1-foreground shadow-md data-[state=closed]:fade-out-0 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 motion-safe:data-[state=open]:animate-in motion-safe:data-[state=closed]:animate-out motion-safe:data-[state=open]:fade-in-0 motion-safe:data-[state=closed]:zoom-out-95 motion-safe:data-[state=open]:zoom-in-95 motion-safe:data-[side=bottom]:slide-in-from-top-2",
      n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      e
    ),
    position: n,
    ...r,
    children: [
      /* @__PURE__ */ a(Wh, {}),
      /* @__PURE__ */ a(
        n3,
        {
          className: T(
            "p-1",
            n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children: t
        }
      ),
      /* @__PURE__ */ a(jh, {})
    ]
  }
) }));
Hh.displayName = _h.displayName;
const a3 = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Ih,
  {
    ref: n,
    className: T("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t
  }
));
a3.displayName = Ih.displayName;
const Uh = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ k(
  Vh,
  {
    ref: r,
    className: T(
      "relative grid w-full cursor-default select-none grid-cols-[1fr_20px] gap-x-1.5 rounded p-2 outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "data-[state=checked]:bg-f1-background-selected-bold/5 hover:data-[state=checked]:bg-f1-background-selected-bold/10",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ a(r3, { children: t }),
      /* @__PURE__ */ a(o3, { className: "flex", children: /* @__PURE__ */ a(Ki, { className: "size-5 text-f1-icon-selected" }) })
    ]
  }
));
Uh.displayName = Vh.displayName;
const l3 = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Bh,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-f1-background-secondary", e),
    ...t
  }
));
l3.displayName = Bh.displayName;
const c3 = ({ item: e }) => {
  const t = e.icon && gf[e.icon];
  return /* @__PURE__ */ a(Uh, { value: e.value, children: /* @__PURE__ */ k("div", { className: "flex items-start gap-1.5", children: [
    e.avatar && Zf(e.avatar, "xsmall"),
    t && /* @__PURE__ */ a(t, { className: "h-5 w-5 shrink-0 text-f1-icon" }),
    /* @__PURE__ */ k("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ a("span", { className: "font-medium", children: e.label }),
      e.description && /* @__PURE__ */ a("div", { className: "text-f1-foreground-secondary", children: e.description })
    ] })
  ] }) });
}, u3 = ({ item: e }) => {
  const t = e.icon && gf[e.icon];
  return /* @__PURE__ */ k("div", { className: "flex items-center gap-1.5", children: [
    t && /* @__PURE__ */ a(t, { className: "h-5 w-5 shrink-0 text-f1-icon" }),
    e.label
  ] });
}, d3 = "flex h-10 w-full items-center justify-between rounded-md border border-solid border-f1-border bg-f1-background pl-3 pr-2 py-2.5 transition-colors placeholder:text-f1-foreground-secondary hover:border-f1-border-hover disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50 [&>span]:line-clamp-1", f3 = P(
  function({
    placeholder: t,
    options: n,
    onChange: r,
    value: o,
    children: s,
    disabled: i,
    open: l,
    onOpenChange: c,
    ...u
  }, d) {
    const f = n.find((p) => p.value === o);
    return /* @__PURE__ */ k(
      s3,
      {
        onValueChange: r,
        value: o,
        disabled: i,
        open: l,
        onOpenChange: c,
        ...u,
        children: [
          /* @__PURE__ */ a($h, { ref: d, asChild: !0, children: s || /* @__PURE__ */ k(
            "button",
            {
              className: T(
                d3,
                bt("focus-visible:border-f1-border-hover")
              ),
              children: [
                /* @__PURE__ */ a(i3, { placeholder: t, asChild: !0, children: f && /* @__PURE__ */ a(u3, { item: f }) }),
                /* @__PURE__ */ a("div", { className: "flex h-6 w-6 items-center justify-center", children: /* @__PURE__ */ a("div", { className: "h-4 w-4 rounded-2xs bg-f1-background-secondary", children: /* @__PURE__ */ a(dr, { className: "h-3 w-3" }) }) })
              ]
            }
          ) }),
          /* @__PURE__ */ a(Hh, { children: n.map((p) => /* @__PURE__ */ a(c3, { item: p }, p.value)) })
        ]
      }
    );
  }
), Gh = h.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ a(
    "textarea",
    {
      className: T(
        "ring-offset-background focus-visible:ring-ring flex min-h-[80px] w-full rounded-sm border-2 border-solid border-f1-border bg-f1-background px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-f1-foreground-secondary/60 hover:border-f1-border-hover focus-visible:border-f1-border-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-f1-background-secondary disabled:opacity-50",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Gh.displayName = "Textarea";
const iS = Te(
  {
    name: "Textarea",
    type: "form"
  },
  Gh
), aS = Te(
  {
    name: "Input",
    type: "form"
  },
  K2
), lS = Te(
  {
    name: "NumberInput",
    type: "form"
  },
  _b
);
var wr = (e) => e.type === "checkbox", Sn = (e) => e instanceof Date, Oe = (e) => e == null;
const zh = (e) => typeof e == "object";
var xe = (e) => !Oe(e) && !Array.isArray(e) && zh(e) && !Sn(e), h3 = (e) => xe(e) && e.target ? wr(e.target) ? e.target.checked : e.target.value : e, p3 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, m3 = (e, t) => e.has(p3(t)), g3 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return xe(t) && t.hasOwnProperty("isPrototypeOf");
}, fa = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Xe(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(fa && (e instanceof Blob || e instanceof FileList)) && (n || xe(e)))
    if (t = n ? [] : {}, !n && !g3(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Xe(e[r]));
  else
    return e;
  return t;
}
var Ho = (e) => Array.isArray(e) ? e.filter(Boolean) : [], we = (e) => e === void 0, $ = (e, t, n) => {
  if (!t || !xe(e))
    return n;
  const r = Ho(t.split(/[,[\].]+?/)).reduce((o, s) => Oe(o) ? o : o[s], e);
  return we(r) || r === e ? we(e[t]) ? n : e[t] : r;
}, ft = (e) => typeof e == "boolean", ha = (e) => /^\w*$/.test(e), Kh = (e) => Ho(e.replace(/["|']|\]/g, "").split(/\.|\[/)), pe = (e, t, n) => {
  let r = -1;
  const o = ha(t) ? [t] : Kh(t), s = o.length, i = s - 1;
  for (; ++r < s; ) {
    const l = o[r];
    let c = n;
    if (r !== i) {
      const u = e[l];
      c = xe(u) || Array.isArray(u) ? u : isNaN(+o[r + 1]) ? {} : [];
    }
    if (l === "__proto__")
      return;
    e[l] = c, e = e[l];
  }
  return e;
};
const Oc = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, ot = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Mt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
ee.createContext(null);
var v3 = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const s in e)
    Object.defineProperty(o, s, {
      get: () => {
        const i = s;
        return t._proxyFormState[i] !== ot.all && (t._proxyFormState[i] = !r || ot.all), e[i];
      }
    });
  return o;
}, We = (e) => xe(e) && !Object.keys(e).length, y3 = (e, t, n, r) => {
  n(e);
  const { name: o, ...s } = e;
  return We(s) || Object.keys(s).length >= Object.keys(t).length || Object.keys(s).find((i) => t[i] === ot.all);
}, Ur = (e) => Array.isArray(e) ? e : [e];
function w3(e) {
  const t = ee.useRef(e);
  t.current = e, ee.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
var mt = (e) => typeof e == "string", b3 = (e, t, n, r, o) => mt(e) ? (r && t.watch.add(e), $(n, e, o)) : Array.isArray(e) ? e.map((s) => (r && t.watch.add(s), $(n, s))) : (r && (t.watchAll = !0), n), C3 = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, Fc = (e) => ({
  isOnSubmit: !e || e === ot.onSubmit,
  isOnBlur: e === ot.onBlur,
  isOnChange: e === ot.onChange,
  isOnAll: e === ot.all,
  isOnTouch: e === ot.onTouched
}), Bc = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const qn = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const s = $(e, o);
    if (s) {
      const { _f: i, ...l } = s;
      if (i) {
        if (i.refs && i.refs[0] && t(i.refs[0], o) && !r)
          return !0;
        if (i.ref && t(i.ref, i.name) && !r)
          return !0;
        if (qn(l, t))
          break;
      } else if (xe(l) && qn(l, t))
        break;
    }
  }
};
var x3 = (e, t, n) => {
  const r = Ur($(e, n));
  return pe(r, "root", t[n]), pe(e, n, r), e;
}, pa = (e) => e.type === "file", Nt = (e) => typeof e == "function", oo = (e) => {
  if (!fa)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Gr = (e) => mt(e), ma = (e) => e.type === "radio", so = (e) => e instanceof RegExp;
const $c = {
  value: !1,
  isValid: !1
}, Wc = { value: !0, isValid: !0 };
var Yh = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !we(e[0].attributes.value) ? we(e[0].value) || e[0].value === "" ? Wc : { value: e[0].value, isValid: !0 } : Wc
    ) : $c;
  }
  return $c;
};
const jc = {
  isValid: !1,
  value: null
};
var Zh = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, jc) : jc;
function Hc(e, t, n = "validate") {
  if (Gr(e) || Array.isArray(e) && e.every(Gr) || ft(e) && !e)
    return {
      type: n,
      message: Gr(e) ? e : "",
      ref: t
    };
}
var yn = (e) => xe(e) && !so(e) ? e : {
  value: e,
  message: ""
}, Uc = async (e, t, n, r, o) => {
  const { ref: s, refs: i, required: l, maxLength: c, minLength: u, min: d, max: f, pattern: p, validate: m, name: g, valueAsNumber: v, mount: w, disabled: b } = e._f, y = $(t, g);
  if (!w || b)
    return {};
  const C = i ? i[0] : s, M = (j) => {
    r && C.reportValidity && (C.setCustomValidity(ft(j) ? "" : j || ""), C.reportValidity());
  }, E = {}, A = ma(s), B = wr(s), L = A || B, D = (v || pa(s)) && we(s.value) && we(y) || oo(s) && s.value === "" || y === "" || Array.isArray(y) && !y.length, W = C3.bind(null, g, n, E), Q = (j, Z, J, G = Mt.maxLength, q = Mt.minLength) => {
    const I = j ? Z : J;
    E[g] = {
      type: j ? G : q,
      message: I,
      ref: s,
      ...W(j ? G : q, I)
    };
  };
  if (o ? !Array.isArray(y) || !y.length : l && (!L && (D || Oe(y)) || ft(y) && !y || B && !Yh(i).isValid || A && !Zh(i).isValid)) {
    const { value: j, message: Z } = Gr(l) ? { value: !!l, message: l } : yn(l);
    if (j && (E[g] = {
      type: Mt.required,
      message: Z,
      ref: C,
      ...W(Mt.required, Z)
    }, !n))
      return M(Z), E;
  }
  if (!D && (!Oe(d) || !Oe(f))) {
    let j, Z;
    const J = yn(f), G = yn(d);
    if (!Oe(y) && !isNaN(y)) {
      const q = s.valueAsNumber || y && +y;
      Oe(J.value) || (j = q > J.value), Oe(G.value) || (Z = q < G.value);
    } else {
      const q = s.valueAsDate || new Date(y), I = (ue) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + ue), V = s.type == "time", H = s.type == "week";
      mt(J.value) && y && (j = V ? I(y) > I(J.value) : H ? y > J.value : q > new Date(J.value)), mt(G.value) && y && (Z = V ? I(y) < I(G.value) : H ? y < G.value : q < new Date(G.value));
    }
    if ((j || Z) && (Q(!!j, J.message, G.message, Mt.max, Mt.min), !n))
      return M(E[g].message), E;
  }
  if ((c || u) && !D && (mt(y) || o && Array.isArray(y))) {
    const j = yn(c), Z = yn(u), J = !Oe(j.value) && y.length > +j.value, G = !Oe(Z.value) && y.length < +Z.value;
    if ((J || G) && (Q(J, j.message, Z.message), !n))
      return M(E[g].message), E;
  }
  if (p && !D && mt(y)) {
    const { value: j, message: Z } = yn(p);
    if (so(j) && !y.match(j) && (E[g] = {
      type: Mt.pattern,
      message: Z,
      ref: s,
      ...W(Mt.pattern, Z)
    }, !n))
      return M(Z), E;
  }
  if (m) {
    if (Nt(m)) {
      const j = await m(y, t), Z = Hc(j, C);
      if (Z && (E[g] = {
        ...Z,
        ...W(Mt.validate, Z.message)
      }, !n))
        return M(Z.message), E;
    } else if (xe(m)) {
      let j = {};
      for (const Z in m) {
        if (!We(j) && !n)
          break;
        const J = Hc(await m[Z](y, t), C, Z);
        J && (j = {
          ...J,
          ...W(Z, J.message)
        }, M(J.message), n && (E[g] = j));
      }
      if (!We(j) && (E[g] = {
        ref: C,
        ...j
      }, !n))
        return E;
    }
  }
  return M(!0), E;
};
function k3(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = we(e) ? r++ : e[t[r++]];
  return e;
}
function S3(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !we(e[t]))
      return !1;
  return !0;
}
function ke(e, t) {
  const n = Array.isArray(t) ? t : ha(t) ? [t] : Kh(t), r = n.length === 1 ? e : k3(e, n), o = n.length - 1, s = n[o];
  return r && delete r[s], o !== 0 && (xe(r) && We(r) || Array.isArray(r) && S3(r)) && ke(e, n.slice(0, -1)), e;
}
var Ps = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const s of e)
        s.next && s.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((s) => s !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, io = (e) => Oe(e) || !zh(e);
function $t(e, t) {
  if (io(e) || io(t))
    return e === t;
  if (Sn(e) && Sn(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const o of n) {
    const s = e[o];
    if (!r.includes(o))
      return !1;
    if (o !== "ref") {
      const i = t[o];
      if (Sn(s) && Sn(i) || xe(s) && xe(i) || Array.isArray(s) && Array.isArray(i) ? !$t(s, i) : s !== i)
        return !1;
    }
  }
  return !0;
}
var Xh = (e) => e.type === "select-multiple", M3 = (e) => ma(e) || wr(e), Ns = (e) => oo(e) && e.isConnected, qh = (e) => {
  for (const t in e)
    if (Nt(e[t]))
      return !0;
  return !1;
};
function ao(e, t = {}) {
  const n = Array.isArray(e);
  if (xe(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || xe(e[r]) && !qh(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, ao(e[r], t[r])) : Oe(e[r]) || (t[r] = !0);
  return t;
}
function Qh(e, t, n) {
  const r = Array.isArray(e);
  if (xe(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || xe(e[o]) && !qh(e[o]) ? we(t) || io(n[o]) ? n[o] = Array.isArray(e[o]) ? ao(e[o], []) : { ...ao(e[o]) } : Qh(e[o], Oe(t) ? {} : t[o], n[o]) : n[o] = !$t(e[o], t[o]);
  return n;
}
var Vr = (e, t) => Qh(e, t, ao(t)), Jh = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => we(e) ? e : t ? e === "" ? NaN : e && +e : n && mt(e) ? new Date(e) : r ? r(e) : e;
function Ts(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return pa(t) ? t.files : ma(t) ? Zh(e.refs).value : Xh(t) ? [...t.selectedOptions].map(({ value: n }) => n) : wr(t) ? Yh(e.refs).value : Jh(we(t.value) ? e.ref.value : t.value, e);
}
var E3 = (e, t, n, r) => {
  const o = {};
  for (const s of e) {
    const i = $(t, s);
    i && pe(o, s, i._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Wn = (e) => we(e) ? e : so(e) ? e.source : xe(e) ? so(e.value) ? e.value.source : e.value : e;
const Gc = "AsyncFunction";
var P3 = (e) => (!e || !e.validate) && !!(Nt(e.validate) && e.validate.constructor.name === Gc || xe(e.validate) && Object.values(e.validate).find((t) => t.constructor.name === Gc)), N3 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function zc(e, t, n) {
  const r = $(e, n);
  if (r || ha(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const s = o.join("."), i = $(t, s), l = $(e, s);
    if (i && !Array.isArray(i) && n !== s)
      return { name: n };
    if (l && l.type)
      return {
        name: s,
        error: l
      };
    o.pop();
  }
  return {
    name: n
  };
}
var T3 = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, L3 = (e, t) => !Ho($(e, t)).length && ke(e, t);
const R3 = {
  mode: ot.onSubmit,
  reValidateMode: ot.onChange,
  shouldFocusError: !0
};
function D3(e = {}) {
  let t = {
    ...R3,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Nt(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, o = xe(t.defaultValues) || xe(t.values) ? Xe(t.defaultValues || t.values) || {} : {}, s = t.shouldUnregister ? {} : Xe(o), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, u = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, f = {
    values: Ps(),
    array: Ps(),
    state: Ps()
  }, p = Fc(t.mode), m = Fc(t.reValidateMode), g = t.criteriaMode === ot.all, v = (x) => (S) => {
    clearTimeout(u), u = setTimeout(x, S);
  }, w = async (x) => {
    if (d.isValid || x) {
      const S = t.resolver ? We((await L()).errors) : await W(r, !0);
      S !== n.isValid && f.state.next({
        isValid: S
      });
    }
  }, b = (x, S) => {
    (d.isValidating || d.validatingFields) && ((x || Array.from(l.mount)).forEach((N) => {
      N && (S ? pe(n.validatingFields, N, S) : ke(n.validatingFields, N));
    }), f.state.next({
      validatingFields: n.validatingFields,
      isValidating: !We(n.validatingFields)
    }));
  }, y = (x, S = [], N, F, _ = !0, R = !0) => {
    if (F && N) {
      if (i.action = !0, R && Array.isArray($(r, x))) {
        const U = N($(r, x), F.argA, F.argB);
        _ && pe(r, x, U);
      }
      if (R && Array.isArray($(n.errors, x))) {
        const U = N($(n.errors, x), F.argA, F.argB);
        _ && pe(n.errors, x, U), L3(n.errors, x);
      }
      if (d.touchedFields && R && Array.isArray($(n.touchedFields, x))) {
        const U = N($(n.touchedFields, x), F.argA, F.argB);
        _ && pe(n.touchedFields, x, U);
      }
      d.dirtyFields && (n.dirtyFields = Vr(o, s)), f.state.next({
        name: x,
        isDirty: j(x, S),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      pe(s, x, S);
  }, C = (x, S) => {
    pe(n.errors, x, S), f.state.next({
      errors: n.errors
    });
  }, M = (x) => {
    n.errors = x, f.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, E = (x, S, N, F) => {
    const _ = $(r, x);
    if (_) {
      const R = $(s, x, we(N) ? $(o, x) : N);
      we(R) || F && F.defaultChecked || S ? pe(s, x, S ? R : Ts(_._f)) : G(x, R), i.mount && w();
    }
  }, A = (x, S, N, F, _) => {
    let R = !1, U = !1;
    const re = {
      name: x
    }, Se = !!($(r, x) && $(r, x)._f && $(r, x)._f.disabled);
    if (!N || F) {
      d.isDirty && (U = n.isDirty, n.isDirty = re.isDirty = j(), R = U !== re.isDirty);
      const Me = Se || $t($(o, x), S);
      U = !!(!Se && $(n.dirtyFields, x)), Me || Se ? ke(n.dirtyFields, x) : pe(n.dirtyFields, x, !0), re.dirtyFields = n.dirtyFields, R = R || d.dirtyFields && U !== !Me;
    }
    if (N) {
      const Me = $(n.touchedFields, x);
      Me || (pe(n.touchedFields, x, N), re.touchedFields = n.touchedFields, R = R || d.touchedFields && Me !== N);
    }
    return R && _ && f.state.next(re), R ? re : {};
  }, B = (x, S, N, F) => {
    const _ = $(n.errors, x), R = d.isValid && ft(S) && n.isValid !== S;
    if (e.delayError && N ? (c = v(() => C(x, N)), c(e.delayError)) : (clearTimeout(u), c = null, N ? pe(n.errors, x, N) : ke(n.errors, x)), (N ? !$t(_, N) : _) || !We(F) || R) {
      const U = {
        ...F,
        ...R && ft(S) ? { isValid: S } : {},
        errors: n.errors,
        name: x
      };
      n = {
        ...n,
        ...U
      }, f.state.next(U);
    }
  }, L = async (x) => {
    b(x, !0);
    const S = await t.resolver(s, t.context, E3(x || l.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return b(x), S;
  }, D = async (x) => {
    const { errors: S } = await L(x);
    if (x)
      for (const N of x) {
        const F = $(S, N);
        F ? pe(n.errors, N, F) : ke(n.errors, N);
      }
    else
      n.errors = S;
    return S;
  }, W = async (x, S, N = {
    valid: !0
  }) => {
    for (const F in x) {
      const _ = x[F];
      if (_) {
        const { _f: R, ...U } = _;
        if (R) {
          const re = l.array.has(R.name), Se = _._f && P3(_._f);
          Se && d.validatingFields && b([F], !0);
          const Me = await Uc(_, s, g, t.shouldUseNativeValidation && !S, re);
          if (Se && d.validatingFields && b([F]), Me[R.name] && (N.valid = !1, S))
            break;
          !S && ($(Me, R.name) ? re ? x3(n.errors, Me, R.name) : pe(n.errors, R.name, Me[R.name]) : ke(n.errors, R.name));
        }
        !We(U) && await W(U, S, N);
      }
    }
    return N.valid;
  }, Q = () => {
    for (const x of l.unMount) {
      const S = $(r, x);
      S && (S._f.refs ? S._f.refs.every((N) => !Ns(N)) : !Ns(S._f.ref)) && Ie(x);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, j = (x, S) => (x && S && pe(s, x, S), !$t(ve(), o)), Z = (x, S, N) => b3(x, l, {
    ...i.mount ? s : we(S) ? o : mt(x) ? { [x]: S } : S
  }, N, S), J = (x) => Ho($(i.mount ? s : o, x, e.shouldUnregister ? $(o, x, []) : [])), G = (x, S, N = {}) => {
    const F = $(r, x);
    let _ = S;
    if (F) {
      const R = F._f;
      R && (!R.disabled && pe(s, x, Jh(S, R)), _ = oo(R.ref) && Oe(S) ? "" : S, Xh(R.ref) ? [...R.ref.options].forEach((U) => U.selected = _.includes(U.value)) : R.refs ? wr(R.ref) ? R.refs.length > 1 ? R.refs.forEach((U) => (!U.defaultChecked || !U.disabled) && (U.checked = Array.isArray(_) ? !!_.find((re) => re === U.value) : _ === U.value)) : R.refs[0] && (R.refs[0].checked = !!_) : R.refs.forEach((U) => U.checked = U.value === _) : pa(R.ref) ? R.ref.value = "" : (R.ref.value = _, R.ref.type || f.values.next({
        name: x,
        values: { ...s }
      })));
    }
    (N.shouldDirty || N.shouldTouch) && A(x, _, N.shouldTouch, N.shouldDirty, !0), N.shouldValidate && ue(x);
  }, q = (x, S, N) => {
    for (const F in S) {
      const _ = S[F], R = `${x}.${F}`, U = $(r, R);
      (l.array.has(x) || !io(_) || U && !U._f) && !Sn(_) ? q(R, _, N) : G(R, _, N);
    }
  }, I = (x, S, N = {}) => {
    const F = $(r, x), _ = l.array.has(x), R = Xe(S);
    pe(s, x, R), _ ? (f.array.next({
      name: x,
      values: { ...s }
    }), (d.isDirty || d.dirtyFields) && N.shouldDirty && f.state.next({
      name: x,
      dirtyFields: Vr(o, s),
      isDirty: j(x, R)
    })) : F && !F._f && !Oe(R) ? q(x, R, N) : G(x, R, N), Bc(x, l) && f.state.next({ ...n }), f.values.next({
      name: i.mount ? x : void 0,
      values: { ...s }
    });
  }, V = async (x) => {
    i.mount = !0;
    const S = x.target;
    let N = S.name, F = !0;
    const _ = $(r, N), R = () => S.type ? Ts(_._f) : h3(x), U = (re) => {
      F = Number.isNaN(re) || $t(re, $(s, N, re));
    };
    if (_) {
      let re, Se;
      const Me = R(), Yt = x.type === Oc.BLUR || x.type === Oc.FOCUS_OUT, Am = !N3(_._f) && !t.resolver && !$(n.errors, N) && !_._f.deps || T3(Yt, $(n.touchedFields, N), n.isSubmitted, m, p), Qo = Bc(N, l, Yt);
      pe(s, N, Me), Yt ? (_._f.onBlur && _._f.onBlur(x), c && c(0)) : _._f.onChange && _._f.onChange(x);
      const Jo = A(N, Me, Yt, !1), _m = !We(Jo) || Qo;
      if (!Yt && f.values.next({
        name: N,
        type: x.type,
        values: { ...s }
      }), Am)
        return d.isValid && (e.mode === "onBlur" ? Yt && w() : w()), _m && f.state.next({ name: N, ...Qo ? {} : Jo });
      if (!Yt && Qo && f.state.next({ ...n }), t.resolver) {
        const { errors: Za } = await L([N]);
        if (U(Me), F) {
          const Im = zc(n.errors, r, N), Xa = zc(Za, r, Im.name || N);
          re = Xa.error, N = Xa.name, Se = We(Za);
        }
      } else
        b([N], !0), re = (await Uc(_, s, g, t.shouldUseNativeValidation))[N], b([N]), U(Me), F && (re ? Se = !1 : d.isValid && (Se = await W(r, !0)));
      F && (_._f.deps && ue(_._f.deps), B(N, Se, re, Jo));
    }
  }, H = (x, S) => {
    if ($(n.errors, S) && x.focus)
      return x.focus(), 1;
  }, ue = async (x, S = {}) => {
    let N, F;
    const _ = Ur(x);
    if (t.resolver) {
      const R = await D(we(x) ? x : _);
      N = We(R), F = x ? !_.some((U) => $(R, U)) : N;
    } else x ? (F = (await Promise.all(_.map(async (R) => {
      const U = $(r, R);
      return await W(U && U._f ? { [R]: U } : U);
    }))).every(Boolean), !(!F && !n.isValid) && w()) : F = N = await W(r);
    return f.state.next({
      ...!mt(x) || d.isValid && N !== n.isValid ? {} : { name: x },
      ...t.resolver || !x ? { isValid: N } : {},
      errors: n.errors
    }), S.shouldFocus && !F && qn(r, H, x ? _ : l.mount), F;
  }, ve = (x) => {
    const S = {
      ...i.mount ? s : o
    };
    return we(x) ? S : mt(x) ? $(S, x) : x.map((N) => $(S, N));
  }, _e = (x, S) => ({
    invalid: !!$((S || n).errors, x),
    isDirty: !!$((S || n).dirtyFields, x),
    error: $((S || n).errors, x),
    isValidating: !!$(n.validatingFields, x),
    isTouched: !!$((S || n).touchedFields, x)
  }), xt = (x) => {
    x && Ur(x).forEach((S) => ke(n.errors, S)), f.state.next({
      errors: x ? n.errors : {}
    });
  }, ze = (x, S, N) => {
    const F = ($(r, x, { _f: {} })._f || {}).ref, _ = $(n.errors, x) || {}, { ref: R, message: U, type: re, ...Se } = _;
    pe(n.errors, x, {
      ...Se,
      ...S,
      ref: F
    }), f.state.next({
      name: x,
      errors: n.errors,
      isValid: !1
    }), N && N.shouldFocus && F && F.focus && F.focus();
  }, kt = (x, S) => Nt(x) ? f.values.subscribe({
    next: (N) => x(Z(void 0, S), N)
  }) : Z(x, S, !0), Ie = (x, S = {}) => {
    for (const N of x ? Ur(x) : l.mount)
      l.mount.delete(N), l.array.delete(N), S.keepValue || (ke(r, N), ke(s, N)), !S.keepError && ke(n.errors, N), !S.keepDirty && ke(n.dirtyFields, N), !S.keepTouched && ke(n.touchedFields, N), !S.keepIsValidating && ke(n.validatingFields, N), !t.shouldUnregister && !S.keepDefaultValue && ke(o, N);
    f.values.next({
      values: { ...s }
    }), f.state.next({
      ...n,
      ...S.keepDirty ? { isDirty: j() } : {}
    }), !S.keepIsValid && w();
  }, K = ({ disabled: x, name: S, field: N, fields: F, value: _ }) => {
    if (ft(x) && i.mount || x) {
      const R = x ? void 0 : we(_) ? Ts(N ? N._f : $(F, S)._f) : _;
      pe(s, S, R), A(S, R, !1, !1, !0);
    }
  }, se = (x, S = {}) => {
    let N = $(r, x);
    const F = ft(S.disabled) || ft(e.disabled);
    return pe(r, x, {
      ...N || {},
      _f: {
        ...N && N._f ? N._f : { ref: { name: x } },
        name: x,
        mount: !0,
        ...S
      }
    }), l.mount.add(x), N ? K({
      field: N,
      disabled: ft(S.disabled) ? S.disabled : e.disabled,
      name: x,
      value: S.value
    }) : E(x, !0, S.value), {
      ...F ? { disabled: S.disabled || e.disabled } : {},
      ...t.progressive ? {
        required: !!S.required,
        min: Wn(S.min),
        max: Wn(S.max),
        minLength: Wn(S.minLength),
        maxLength: Wn(S.maxLength),
        pattern: Wn(S.pattern)
      } : {},
      name: x,
      onChange: V,
      onBlur: V,
      ref: (_) => {
        if (_) {
          se(x, S), N = $(r, x);
          const R = we(_.value) && _.querySelectorAll && _.querySelectorAll("input,select,textarea")[0] || _, U = M3(R), re = N._f.refs || [];
          if (U ? re.find((Se) => Se === R) : R === N._f.ref)
            return;
          pe(r, x, {
            _f: {
              ...N._f,
              ...U ? {
                refs: [
                  ...re.filter(Ns),
                  R,
                  ...Array.isArray($(o, x)) ? [{}] : []
                ],
                ref: { type: R.type, name: x }
              } : { ref: R }
            }
          }), E(x, !1, void 0, R);
        } else
          N = $(r, x, {}), N._f && (N._f.mount = !1), (t.shouldUnregister || S.shouldUnregister) && !(m3(l.array, x) && i.action) && l.unMount.add(x);
      }
    };
  }, de = () => t.shouldFocusError && qn(r, H, l.mount), ae = (x) => {
    ft(x) && (f.state.next({ disabled: x }), qn(r, (S, N) => {
      const F = $(r, N);
      F && (S.disabled = F._f.disabled || x, Array.isArray(F._f.refs) && F._f.refs.forEach((_) => {
        _.disabled = F._f.disabled || x;
      }));
    }, 0, !1));
  }, le = (x, S) => async (N) => {
    let F;
    N && (N.preventDefault && N.preventDefault(), N.persist && N.persist());
    let _ = Xe(s);
    if (f.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: R, values: U } = await L();
      n.errors = R, _ = U;
    } else
      await W(r);
    if (ke(n.errors, "root"), We(n.errors)) {
      f.state.next({
        errors: {}
      });
      try {
        await x(_, N);
      } catch (R) {
        F = R;
      }
    } else
      S && await S({ ...n.errors }, N), de(), setTimeout(de);
    if (f.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: We(n.errors) && !F,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), F)
      throw F;
  }, ce = (x, S = {}) => {
    $(r, x) && (we(S.defaultValue) ? I(x, Xe($(o, x))) : (I(x, S.defaultValue), pe(o, x, Xe(S.defaultValue))), S.keepTouched || ke(n.touchedFields, x), S.keepDirty || (ke(n.dirtyFields, x), n.isDirty = S.defaultValue ? j(x, Xe($(o, x))) : j()), S.keepError || (ke(n.errors, x), d.isValid && w()), f.state.next({ ...n }));
  }, ut = (x, S = {}) => {
    const N = x ? Xe(x) : o, F = Xe(N), _ = We(x), R = _ ? o : F;
    if (S.keepDefaultValues || (o = N), !S.keepValues) {
      if (S.keepDirtyValues)
        for (const U of l.mount)
          $(n.dirtyFields, U) ? pe(R, U, $(s, U)) : I(U, $(R, U));
      else {
        if (fa && we(x))
          for (const U of l.mount) {
            const re = $(r, U);
            if (re && re._f) {
              const Se = Array.isArray(re._f.refs) ? re._f.refs[0] : re._f.ref;
              if (oo(Se)) {
                const Me = Se.closest("form");
                if (Me) {
                  Me.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      s = e.shouldUnregister ? S.keepDefaultValues ? Xe(o) : {} : Xe(R), f.array.next({
        values: { ...R }
      }), f.values.next({
        values: { ...R }
      });
    }
    l = {
      mount: S.keepDirtyValues ? l.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, i.mount = !d.isValid || !!S.keepIsValid || !!S.keepDirtyValues, i.watch = !!e.shouldUnregister, f.state.next({
      submitCount: S.keepSubmitCount ? n.submitCount : 0,
      isDirty: _ ? !1 : S.keepDirty ? n.isDirty : !!(S.keepDefaultValues && !$t(x, o)),
      isSubmitted: S.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: _ ? {} : S.keepDirtyValues ? S.keepDefaultValues && s ? Vr(o, s) : n.dirtyFields : S.keepDefaultValues && x ? Vr(o, x) : S.keepDirty ? n.dirtyFields : {},
      touchedFields: S.keepTouched ? n.touchedFields : {},
      errors: S.keepErrors ? n.errors : {},
      isSubmitSuccessful: S.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, dt = (x, S) => ut(Nt(x) ? x(s) : x, S);
  return {
    control: {
      register: se,
      unregister: Ie,
      getFieldState: _e,
      handleSubmit: le,
      setError: ze,
      _executeSchema: L,
      _getWatch: Z,
      _getDirty: j,
      _updateValid: w,
      _removeUnmounted: Q,
      _updateFieldArray: y,
      _updateDisabledField: K,
      _getFieldArray: J,
      _reset: ut,
      _resetDefaultValues: () => Nt(t.defaultValues) && t.defaultValues().then((x) => {
        dt(x, t.resetOptions), f.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (x) => {
        n = {
          ...n,
          ...x
        };
      },
      _disableForm: ae,
      _subjects: f,
      _proxyFormState: d,
      _setErrors: M,
      get _fields() {
        return r;
      },
      get _formValues() {
        return s;
      },
      get _state() {
        return i;
      },
      set _state(x) {
        i = x;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return l;
      },
      set _names(x) {
        l = x;
      },
      get _formState() {
        return n;
      },
      set _formState(x) {
        n = x;
      },
      get _options() {
        return t;
      },
      set _options(x) {
        t = {
          ...t,
          ...x
        };
      }
    },
    trigger: ue,
    register: se,
    handleSubmit: le,
    watch: kt,
    setValue: I,
    getValues: ve,
    reset: dt,
    resetField: ce,
    clearErrors: xt,
    unregister: Ie,
    setError: ze,
    setFocus: (x, S = {}) => {
      const N = $(r, x), F = N && N._f;
      if (F) {
        const _ = F.refs ? F.refs[0] : F.ref;
        _.focus && (_.focus(), S.shouldSelect && _.select());
      }
    },
    getFieldState: _e
  };
}
function cS(e = {}) {
  const t = ee.useRef(), n = ee.useRef(), [r, o] = ee.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Nt(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: Nt(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...D3(e),
    formState: r
  });
  const s = t.current.control;
  return s._options = e, w3({
    subject: s._subjects.state,
    next: (i) => {
      y3(i, s._proxyFormState, s._updateFormState) && o({ ...s._formState });
    }
  }), ee.useEffect(() => s._disableForm(e.disabled), [s, e.disabled]), ee.useEffect(() => {
    if (s._proxyFormState.isDirty) {
      const i = s._getDirty();
      i !== r.isDirty && s._subjects.state.next({
        isDirty: i
      });
    }
  }, [s, r.isDirty]), ee.useEffect(() => {
    e.values && !$t(e.values, n.current) ? (s._reset(e.values, s._options.resetOptions), n.current = e.values, o((i) => ({ ...i }))) : s._resetDefaultValues();
  }, [e.values, s]), ee.useEffect(() => {
    e.errors && s._setErrors(e.errors);
  }, [e.errors, s]), ee.useEffect(() => {
    s._state.mount || (s._updateValid(), s._state.mount = !0), s._state.watch && (s._state.watch = !1, s._subjects.state.next({ ...s._formState })), s._removeUnmounted();
  }), ee.useEffect(() => {
    e.shouldUnregister && s._subjects.values.next({
      values: s._getWatch()
    });
  }, [e.shouldUnregister, s]), t.current.formState = v3(r, s), t.current;
}
const A3 = Be(
  "relative w-full rounded-xl bg-f1-background-secondary p-6 text-f1-foreground [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-6 [&>svg]:top-6 [&>svg]:text-f1-foreground [&>svg~*]:pl-8",
  {
    variants: {
      variant: {
        destructive: "bg-f1-background-critical [&>svg]:text-f1-icon-critical",
        positive: "bg-f1-background-positive [&>svg]:text-f1-icon-positive",
        warning: "bg-f1-background-warning [&>svg]:text-f1-icon-warning",
        info: "bg-f1-background-info [&>svg]:text-f1-icon-info"
      }
    },
    defaultVariants: {
      variant: "info"
    }
  }
), _3 = {
  destructive: Gb,
  positive: Hb,
  warning: zb,
  info: Fb
}, uS = Te(
  {
    name: "Alert",
    type: "info"
  },
  // eslint-disable-next-line react/display-name
  h.forwardRef(({ className: e, variant: t = "info", children: n, ...r }, o) => {
    const s = t ? _3[t] : null;
    return /* @__PURE__ */ a(
      "div",
      {
        ref: o,
        role: "alert",
        className: T(A3({ variant: t }), e),
        ...r,
        children: /* @__PURE__ */ k("div", { className: "flex flex-row", children: [
          s && /* @__PURE__ */ a("div", { className: "mr-2 flex h-6 items-center", children: /* @__PURE__ */ a(s, { size: 20 }) }),
          /* @__PURE__ */ a("div", { children: n })
        ] })
      }
    );
  })
), dS = h.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    "h5",
    {
      ref: r,
      className: T("mb-1 text-base font-medium tracking-tight", t),
      ...n
    }
  );
}), fS = h.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    "div",
    {
      ref: r,
      className: T("[&_p]:leading-relaxed", t),
      ...n
    }
  );
}), I3 = Be(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xs text-sm font-medium tabular-nums",
  {
    variants: {
      size: {
        md: "min-w-5 p-0.5",
        sm: "min-w-4 px-0.5"
      },
      type: {
        default: "border border-solid border-f1-border bg-f1-background-secondary",
        selected: "bg-f1-background-selected-bold text-f1-foreground-inverse",
        bold: "bg-f1-background-accent-bold text-f1-foreground-inverse"
      }
    },
    defaultVariants: {
      size: "md",
      type: "default"
    }
  }
);
function e1({ size: e, type: t, value: n, maxValue: r }) {
  const o = r && n > r ? `+${r}` : n;
  return /* @__PURE__ */ a("div", { className: I3({ size: e, type: t }), children: o });
}
const V3 = Be(
  "relative flex shrink-0 items-center justify-center",
  {
    variants: {
      size: {
        sm: "h-5 w-5",
        md: "h-6 w-6",
        lg: "h-8 w-8"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), O3 = Be(
  "relative text-f1-foreground-inverse drop-shadow",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-4 w-4",
        lg: "h-6 w-6"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
), F3 = "M50,0 C43,0 36,0 30,1 23,2 17,5 12,9 5,16 1,25 0,36 0,43 0,57 0,64 1,75 5,84 12,91 17,95 23,98 30,99 36,100 43,100 50,100 57,100 64,100 70,99 77,98 83,95 88,91 95,84 99,75 100,64 100,57 100,43 100,36 99,25 95,16 88,9 83,5 77,2 70,1 64,0 57,0 50,0";
function t1({ size: e = "md", icon: t }) {
  const n = t;
  return /* @__PURE__ */ k("div", { className: V3({ size: e }), children: [
    /* @__PURE__ */ k(
      "svg",
      {
        viewBox: "0 0 100 100",
        className: "absolute h-full w-full",
        preserveAspectRatio: "none",
        children: [
          /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ k("linearGradient", { id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
            /* @__PURE__ */ a("stop", { offset: "0%", stopColor: "#FF355E" }),
            /* @__PURE__ */ a("stop", { offset: "44%", stopColor: "#FF355E" }),
            /* @__PURE__ */ a("stop", { offset: "100%", stopColor: "#D62D4F" })
          ] }) }),
          /* @__PURE__ */ a("path", { d: F3, fill: "url(#gradient)" })
        ]
      }
    ),
    /* @__PURE__ */ a(n, { className: O3({ size: e }) })
  ] });
}
const B3 = Be(
  "flex h-5 items-center justify-center rounded-xs border border-solid py-0.5 text-sm font-semibold uppercase leading-none",
  {
    variants: {
      variant: {
        default: "border-f1-border bg-f1-background-tertiary text-f1-foreground-secondary",
        inverse: "border-f1-border/20 bg-f1-background/10 text-f1-foreground-inverse/70"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Kc = {
  cmd: nf
};
function $3({ keys: e, variant: t }) {
  return /* @__PURE__ */ a("div", { className: "flex flex-wrap items-center gap-0.5", children: e.map((n, r) => {
    const o = n.toLowerCase(), s = o in Kc;
    return /* @__PURE__ */ a(
      "kbd",
      {
        className: T(
          B3({ variant: t }),
          s ? "w-5 px-0.5" : "min-w-5 px-1"
        ),
        children: s ? /* @__PURE__ */ a(Ae, { icon: Kc[o], size: "sm" }) : n
      },
      r
    );
  }) });
}
const W3 = (e, t) => {
  if (t.disallowEmpty && e.length === 0)
    throw Error("You need to provide some text that is not empty");
  if (t.maxLength !== void 0 && e.length > t.maxLength)
    throw Error(
      `"${e}" should have no more than ${t.maxLength} characters`
    );
  if (t.minLength !== void 0 && e.length < t.minLength)
    throw Error(`"${e}" should have at least ${t.minLength} characters`);
}, un = (e, t) => {
  Le(() => {
    e !== void 0 && t && W3(e, t);
  }, [e, t]);
}, dn = P(
  ({ left: e, text: t, additionalAccesibleText: n, onClick: r, className: o }, s) => /* @__PURE__ */ k(
    "div",
    {
      ref: s,
      className: T(
        "line-clamp-1 flex flex-row items-center justify-start gap-0.5 rounded-full py-0.5 pl-0.5 pr-2 text-base font-medium",
        r && "cursor-pointer hover:bg-f1-background-hover",
        o
      ),
      onClick: r,
      children: [
        e,
        n && /* @__PURE__ */ a("span", { className: "sr-only", children: n }),
        /* @__PURE__ */ a("span", { children: t })
      ]
    }
  )
);
dn.displayName = "BaseTag";
const j3 = {
  info: df,
  warning: mf,
  critical: qd
}, ga = P(
  ({ text: e, level: t }, n) => (un(e, { disallowEmpty: !0 }), /* @__PURE__ */ a(
    dn,
    {
      ref: n,
      className: {
        info: "bg-f1-background-info text-f1-foreground-info",
        warning: "bg-f1-background-warning text-f1-foreground-warning",
        critical: "bg-f1-background-critical text-f1-foreground-critical"
      }[t],
      left: /* @__PURE__ */ a(
        ui,
        {
          icon: j3[t],
          size: "md",
          "aria-hidden": !0,
          className: T(
            {
              info: "text-f1-icon-info",
              warning: "text-f1-icon-warning",
              critical: "text-f1-icon-critical"
            }[t]
          )
        }
      ),
      text: e
    }
  ))
);
ga.displayName = "AlertTag";
const H3 = {
  positive: Jd,
  negative: Qd
}, U3 = P(
  ({ text: e, status: t }, n) => (un(e, { disallowEmpty: !0 }), /* @__PURE__ */ a(
    dn,
    {
      ref: n,
      className: T(
        "pl-1",
        {
          positive: "bg-f1-background-positive text-f1-foreground-positive",
          negative: "bg-f1-background-critical text-f1-foreground-critical"
        }[t]
      ),
      left: /* @__PURE__ */ a(
        ui,
        {
          icon: H3[t],
          size: "sm",
          className: T(
            {
              positive: "text-f1-icon-positive",
              negative: "text-f1-icon-critical"
            }[t]
          )
        }
      ),
      additionalAccesibleText: `${t} balance`,
      text: e
    }
  ))
);
U3.displayName = "BalanceTag";
const Uo = P(
  ({ imageUrl: e, text: t, rounded: n = !1, onClick: r }, o) => (un(t, { disallowEmpty: !0 }), /* @__PURE__ */ a(
    dn,
    {
      ref: o,
      className: T(
        "gap-1 border-[1px] border-solid border-f1-border-secondary pl-0.5",
        n ? "rounded-full" : "rounded-[8px]"
      ),
      left: /* @__PURE__ */ a(
        "img",
        {
          src: e,
          "aria-hidden": !0,
          className: T(
            "h-[20px] w-[20x]",
            n ? "rounded-full" : "rounded-[6px]"
          )
        }
      ),
      text: t,
      onClick: r
    }
  ))
);
Uo.displayName = "ImageTag";
const G3 = P(
  ({ companyName: e, companyImageUrl: t, onClick: n }, r) => /* @__PURE__ */ a(
    Uo,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n
    }
  )
);
G3.displayName = "CompanyTag";
const z3 = {
  white: "0 0% 100%",
  current: "currentColor",
  transparent: "transparent",
  grey: {
    2: "210 25% 98%",
    5: "220 18% 97%",
    10: "216 20% 95%",
    20: "214 17% 92%",
    30: "213 15% 88%",
    40: "219 18% 69%",
    50: "218 14% 45%",
    60: "219 28% 26%",
    70: "219 35% 19%",
    80: "219 36% 16%",
    90: "219 37% 14%",
    100: "218 48% 10%"
  },
  lilac: {
    50: "340 49% 60%",
    60: "341 34% 50%",
    70: "340 33% 41%"
  },
  barbie: {
    50: "331 84% 63%",
    60: "331 55% 53%",
    70: "330 49% 43%"
  },
  smoke: {
    50: "192 26% 54%",
    60: "192 22% 45%",
    70: "192 22% 37%"
  },
  army: {
    50: "162 44% 33%",
    60: "163 45% 28%",
    70: "162 44% 23%"
  },
  flubber: {
    50: "84 55% 53%",
    60: "84 48% 45%",
    70: "83 48% 33%"
  },
  indigo: {
    50: "239 91% 64%",
    60: "239 59% 54%",
    70: "239 51% 44%"
  },
  camel: {
    50: "25 46% 53%",
    60: "25 42% 44%",
    70: "25 42% 36%"
  },
  radical: {
    50: "348 80% 50%",
    60: "348 80% 42%",
    70: "347 80% 34%"
  },
  viridian: {
    50: "184 92% 35%",
    60: "184 92% 30%",
    70: "184 92% 24%"
  },
  orange: {
    50: "25 95% 53%",
    60: "24 69% 49%",
    70: "24 69% 40%"
  },
  red: {
    50: "5 69% 56%",
    60: "4 61% 49%",
    70: "3 71% 41%"
  },
  grass: {
    50: "160 84% 39%",
    60: "160 85% 33%",
    70: "161 84% 27%"
  },
  malibu: {
    50: "216 90% 65%",
    60: "216 59% 55%",
    70: "216 48% 44%"
  },
  yellow: {
    50: "38 92% 54%",
    60: "38 79% 45%",
    70: "38 80% 36%"
  },
  purple: {
    50: "258 88% 67%",
    60: "258 56% 56%",
    70: "258 43% 46%"
  }
}, K3 = P(
  ({ text: e, color: t }, n) => {
    un(e, { disallowEmpty: !0 });
    const r = z3[t][50];
    return /* @__PURE__ */ a(
      dn,
      {
        ref: n,
        className: "border-[1px] border-solid border-f1-border-secondary pl-1",
        left: /* @__PURE__ */ a(
          "div",
          {
            className: "m-1 aspect-square w-2 rounded-full",
            style: {
              backgroundColor: `hsl(${r})`
            },
            "aria-hidden": !0
          }
        ),
        text: e
      }
    );
  }
);
K3.displayName = "DotTag";
const Y3 = P(
  ({ name: e, avatarUrl: t, onClick: n }, r) => /* @__PURE__ */ a(
    Uo,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n,
      rounded: !0
    }
  )
);
Y3.displayName = "PersonTag";
const n1 = P(
  ({ text: e, icon: t }, n) => (un(e, { disallowEmpty: !0 }), /* @__PURE__ */ a(
    dn,
    {
      ref: n,
      className: T(
        "border-[1px] border-solid border-f1-border-secondary pl-1",
        t ? "pl-1" : "pl-2"
      ),
      left: t ? /* @__PURE__ */ a(ui, { icon: t, size: "sm", className: "text-f1-icon", "aria-hidden": !0 }) : null,
      text: e
    }
  ))
);
n1.displayName = "RawTag";
const r1 = P(
  ({ text: e, variant: t }, n) => (un(e, { disallowEmpty: !0 }), /* @__PURE__ */ a(
    dn,
    {
      ref: n,
      className: T(
        "pl-1",
        {
          neutral: "bg-f1-background-secondary text-f1-foreground-secondary",
          info: "bg-f1-background-info text-f1-foreground-info",
          positive: "bg-f1-background-positive text-f1-foreground-positive",
          warning: "bg-f1-background-warning text-f1-foreground-warning",
          critical: "bg-f1-background-critical text-f1-foreground-critical"
        }[t]
      ),
      left: /* @__PURE__ */ a(
        "div",
        {
          className: T(
            "m-1 aspect-square w-2 rounded-full",
            {
              neutral: "bg-f1-icon",
              info: "bg-f1-icon-info",
              positive: "bg-f1-icon-positive",
              warning: "bg-f1-icon-warning",
              critical: "bg-f1-icon-critical"
            }[t]
          ),
          "aria-hidden": !0
        }
      ),
      additionalAccesibleText: "Status",
      text: e
    }
  ))
);
r1.displayName = "StatusTag";
const Z3 = P(
  ({ teamName: e, teamImageUrl: t, onClick: n }, r) => /* @__PURE__ */ a(
    Uo,
    {
      ref: r,
      imageUrl: t,
      text: e,
      onClick: n
    }
  )
);
Z3.displayName = "TeamTag";
const o1 = Ge(void 0);
function Go() {
  const e = fe(o1);
  return e === void 0 ? {
    isSmallScreen: !1,
    sidebarState: "locked",
    toggleSidebar: () => {
    }
  } : e;
}
function X3({ children: e }) {
  const { currentPath: t } = di(), n = $m("(max-width: 900px)", {
    initializeWithValue: !0
  }), [r, o] = Ce(!0), [s, i] = Ce(!1), l = rn(() => {
    n && i(!s), o(!r);
  }, [n, s, r, o, i]), c = rn(
    (d) => {
      n || (d.clientX < 32 && i(!0), d.clientX > 280 && i(!1));
    },
    [n, i]
  ), u = n ? s ? "unlocked" : "hidden" : !r && !s ? "hidden" : !r && s ? "unlocked" : "locked";
  return Le(() => {
    i(!1);
  }, [t]), /* @__PURE__ */ a(
    o1.Provider,
    {
      value: {
        isSmallScreen: n,
        sidebarState: u,
        toggleSidebar: l
      },
      children: /* @__PURE__ */ a("div", { onPointerMove: c, className: "h-screen w-screen", children: e })
    }
  );
}
function hS({ children: e, sidebar: t }) {
  return /* @__PURE__ */ a(X3, { children: /* @__PURE__ */ a(Q3, { sidebar: t, children: e }) });
}
const q3 = ({ contentId: e }) => /* @__PURE__ */ a(
  "a",
  {
    href: `#${e}`,
    className: bt(
      "absolute z-50 -translate-y-full translate-x-4 rounded-md bg-f1-background px-4 py-2.5 text-base font-medium text-f1-foreground no-underline transition-transform duration-200 focus-visible:translate-y-4"
    ),
    children: "Skip to content"
  }
);
function Q3({ children: e, sidebar: t }) {
  const { sidebarState: n, toggleSidebar: r, isSmallScreen: o } = Go(), s = fi();
  return /* @__PURE__ */ k(me, { children: [
    /* @__PURE__ */ a(q3, { contentId: "content" }),
    /* @__PURE__ */ a(
      Wm,
      {
        reducedMotion: s ? "always" : "never",
        transition: {
          ease: [0.25, 0.1, 0.25, 1],
          duration: s ? 0 : 0.2
        },
        children: /* @__PURE__ */ k("div", { className: "relative isolate flex h-full flex-row", children: [
          /* @__PURE__ */ a(Lo, { children: n === "unlocked" && /* @__PURE__ */ a(
            It.div,
            {
              className: T("fixed inset-0 z-[5] bg-f1-background-bold/60", {
                hidden: !o
              }),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: s ? 0 : 0.2 },
              onClick: r
            }
          ) }),
          /* @__PURE__ */ a(
            "div",
            {
              className: T(
                { "transition-all": !s },
                n === "locked" ? "w-64 pl-3" : "w-0"
              ),
              children: t
            }
          ),
          /* @__PURE__ */ a(
            It.main,
            {
              id: "content",
              className: T(
                "flex max-w-full flex-1 overflow-x-hidden xs:py-1 xs:pr-1",
                n === "locked" ? "pl-0" : "xs:pl-1"
              ),
              layout: !0,
              transition: {
                duration: s ? 0 : 0.3,
                type: "spring",
                stiffness: 300,
                damping: 30
              },
              children: e
            }
          )
        ] })
      }
    )
  ] });
}
const s1 = h.forwardRef(({ ...e }, t) => /* @__PURE__ */ a("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
s1.displayName = "Breadcrumb";
const i1 = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "ol",
  {
    ref: n,
    className: T(
      "flex list-none flex-nowrap items-center gap-1 text-f1-foreground-secondary",
      e
    ),
    ...t
  }
));
i1.displayName = "BreadcrumbList";
const a1 = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "li",
  {
    ref: n,
    className: T("inline-flex items-center gap-0.5", e),
    ...t
  }
));
a1.displayName = "BreadcrumbItem";
const l1 = h.forwardRef(({ asChild: e, className: t, ...n }, r) => /* @__PURE__ */ a(
  e ? En : ln,
  {
    ref: r,
    className: T(
      "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary",
      t
    ),
    ...n
  }
));
l1.displayName = "BreadcrumbLink";
const c1 = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: T("truncate px-1.5 py-0.5 text-f1-foreground", e),
    ...t
  }
));
c1.displayName = "BreadcrumbPage";
const va = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ a(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: T("flex align-bottom", t),
    ...n,
    children: e ?? /* @__PURE__ */ a(Yi, {})
  }
);
va.displayName = "BreadcrumbSeparator";
var Ls = "rovingFocusGroup.onEntryFocus", J3 = { bubbles: !1, cancelable: !0 }, zo = "RovingFocusGroup", [ni, u1, ex] = vr(zo), [tx, Ko] = wt(
  zo,
  [ex]
), [nx, rx] = tx(zo), d1 = h.forwardRef(
  (e, t) => /* @__PURE__ */ a(ni.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(ni.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ a(ox, { ...e, ref: t }) }) })
);
d1.displayName = zo;
var ox = h.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: s,
    currentTabStopId: i,
    defaultCurrentTabStopId: l,
    onCurrentTabStopIdChange: c,
    onEntryFocus: u,
    preventScrollOnEntryFocus: d = !1,
    ...f
  } = e, p = h.useRef(null), m = te(t, p), g = _n(s), [v = null, w] = st({
    prop: i,
    defaultProp: l,
    onChange: c
  }), [b, y] = h.useState(!1), C = be(u), M = u1(n), E = h.useRef(!1), [A, B] = h.useState(0);
  return h.useEffect(() => {
    const L = p.current;
    if (L)
      return L.addEventListener(Ls, C), () => L.removeEventListener(Ls, C);
  }, [C]), /* @__PURE__ */ a(
    nx,
    {
      scope: n,
      orientation: r,
      dir: g,
      loop: o,
      currentTabStopId: v,
      onItemFocus: h.useCallback(
        (L) => w(L),
        [w]
      ),
      onItemShiftTab: h.useCallback(() => y(!0), []),
      onFocusableItemAdd: h.useCallback(
        () => B((L) => L + 1),
        []
      ),
      onFocusableItemRemove: h.useCallback(
        () => B((L) => L - 1),
        []
      ),
      children: /* @__PURE__ */ a(
        z.div,
        {
          tabIndex: b || A === 0 ? -1 : 0,
          "data-orientation": r,
          ...f,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: O(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: O(e.onFocus, (L) => {
            const D = !E.current;
            if (L.target === L.currentTarget && D && !b) {
              const W = new CustomEvent(Ls, J3);
              if (L.currentTarget.dispatchEvent(W), !W.defaultPrevented) {
                const Q = M().filter((q) => q.focusable), j = Q.find((q) => q.active), Z = Q.find((q) => q.id === v), G = [j, Z, ...Q].filter(
                  Boolean
                ).map((q) => q.ref.current);
                p1(G, d);
              }
            }
            E.current = !1;
          }),
          onBlur: O(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), f1 = "RovingFocusGroupItem", h1 = h.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: s,
      ...i
    } = e, l = Je(), c = s || l, u = rx(f1, n), d = u.currentTabStopId === c, f = u1(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = u;
    return h.useEffect(() => {
      if (r)
        return p(), () => m();
    }, [r, p, m]), /* @__PURE__ */ a(
      ni.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ a(
          z.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": u.orientation,
            ...i,
            ref: t,
            onMouseDown: O(e.onMouseDown, (g) => {
              r ? u.onItemFocus(c) : g.preventDefault();
            }),
            onFocus: O(e.onFocus, () => u.onItemFocus(c)),
            onKeyDown: O(e.onKeyDown, (g) => {
              if (g.key === "Tab" && g.shiftKey) {
                u.onItemShiftTab();
                return;
              }
              if (g.target !== g.currentTarget) return;
              const v = ax(g, u.orientation, u.dir);
              if (v !== void 0) {
                if (g.metaKey || g.ctrlKey || g.altKey || g.shiftKey) return;
                g.preventDefault();
                let b = f().filter((y) => y.focusable).map((y) => y.ref.current);
                if (v === "last") b.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && b.reverse();
                  const y = b.indexOf(g.currentTarget);
                  b = u.loop ? lx(b, y + 1) : b.slice(y + 1);
                }
                setTimeout(() => p1(b));
              }
            })
          }
        )
      }
    );
  }
);
h1.displayName = f1;
var sx = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function ix(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function ax(e, t, n) {
  const r = ix(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return sx[r];
}
function p1(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function lx(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var m1 = d1, g1 = h1, ri = ["Enter", " "], cx = ["ArrowDown", "PageUp", "Home"], v1 = ["ArrowUp", "PageDown", "End"], ux = [...cx, ...v1], dx = {
  ltr: [...ri, "ArrowRight"],
  rtl: [...ri, "ArrowLeft"]
}, fx = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, br = "Menu", [sr, hx, px] = vr(br), [fn, y1] = wt(br, [
  px,
  go,
  Ko
]), Yo = go(), w1 = Ko(), [mx, hn] = fn(br), [gx, Cr] = fn(br), b1 = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: s, modal: i = !0 } = e, l = Yo(t), [c, u] = h.useState(null), d = h.useRef(!1), f = be(s), p = _n(o);
  return h.useEffect(() => {
    const m = () => {
      d.current = !0, document.addEventListener("pointerdown", g, { capture: !0, once: !0 }), document.addEventListener("pointermove", g, { capture: !0, once: !0 });
    }, g = () => d.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", g, { capture: !0 }), document.removeEventListener("pointermove", g, { capture: !0 });
    };
  }, []), /* @__PURE__ */ a(iu, { ...l, children: /* @__PURE__ */ a(
    mx,
    {
      scope: t,
      open: n,
      onOpenChange: f,
      content: c,
      onContentChange: u,
      children: /* @__PURE__ */ a(
        gx,
        {
          scope: t,
          onClose: h.useCallback(() => f(!1), [f]),
          isUsingKeyboardRef: d,
          dir: p,
          modal: i,
          children: r
        }
      )
    }
  ) });
};
b1.displayName = br;
var vx = "MenuAnchor", ya = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Yo(n);
    return /* @__PURE__ */ a(ru, { ...o, ...r, ref: t });
  }
);
ya.displayName = vx;
var wa = "MenuPortal", [yx, C1] = fn(wa, {
  forceMount: void 0
}), x1 = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, s = hn(wa, t);
  return /* @__PURE__ */ a(yx, { scope: t, forceMount: n, children: /* @__PURE__ */ a(Fe, { present: n || s.open, children: /* @__PURE__ */ a(wo, { asChild: !0, container: o, children: r }) }) });
};
x1.displayName = wa;
var et = "MenuContent", [wx, ba] = fn(et), k1 = h.forwardRef(
  (e, t) => {
    const n = C1(et, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = hn(et, e.__scopeMenu), i = Cr(et, e.__scopeMenu);
    return /* @__PURE__ */ a(sr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Fe, { present: r || s.open, children: /* @__PURE__ */ a(sr.Slot, { scope: e.__scopeMenu, children: i.modal ? /* @__PURE__ */ a(bx, { ...o, ref: t }) : /* @__PURE__ */ a(Cx, { ...o, ref: t }) }) }) });
  }
), bx = h.forwardRef(
  (e, t) => {
    const n = hn(et, e.__scopeMenu), r = h.useRef(null), o = te(t, r);
    return h.useEffect(() => {
      const s = r.current;
      if (s) return ua(s);
    }, []), /* @__PURE__ */ a(
      Ca,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: O(
          e.onFocusOutside,
          (s) => s.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), Cx = h.forwardRef((e, t) => {
  const n = hn(et, e.__scopeMenu);
  return /* @__PURE__ */ a(
    Ca,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Ca = h.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: s,
      onCloseAutoFocus: i,
      disableOutsidePointerEvents: l,
      onEntryFocus: c,
      onEscapeKeyDown: u,
      onPointerDownOutside: d,
      onFocusOutside: f,
      onInteractOutside: p,
      onDismiss: m,
      disableOutsideScroll: g,
      ...v
    } = e, w = hn(et, n), b = Cr(et, n), y = Yo(n), C = w1(n), M = hx(n), [E, A] = h.useState(null), B = h.useRef(null), L = te(t, B, w.onContentChange), D = h.useRef(0), W = h.useRef(""), Q = h.useRef(0), j = h.useRef(null), Z = h.useRef("right"), J = h.useRef(0), G = g ? Bo : h.Fragment, q = g ? { as: En, allowPinchZoom: !0 } : void 0, I = (H) => {
      var K, se;
      const ue = W.current + H, ve = M().filter((de) => !de.disabled), _e = document.activeElement, xt = (K = ve.find((de) => de.ref.current === _e)) == null ? void 0 : K.textValue, ze = ve.map((de) => de.textValue), kt = Ax(ze, ue, xt), Ie = (se = ve.find((de) => de.textValue === kt)) == null ? void 0 : se.ref.current;
      (function de(ae) {
        W.current = ae, window.clearTimeout(D.current), ae !== "" && (D.current = window.setTimeout(() => de(""), 1e3));
      })(ue), Ie && setTimeout(() => Ie.focus());
    };
    h.useEffect(() => () => window.clearTimeout(D.current), []), ca();
    const V = h.useCallback((H) => {
      var ve, _e;
      return Z.current === ((ve = j.current) == null ? void 0 : ve.side) && Ix(H, (_e = j.current) == null ? void 0 : _e.area);
    }, []);
    return /* @__PURE__ */ a(
      wx,
      {
        scope: n,
        searchRef: W,
        onItemEnter: h.useCallback(
          (H) => {
            V(H) && H.preventDefault();
          },
          [V]
        ),
        onItemLeave: h.useCallback(
          (H) => {
            var ue;
            V(H) || ((ue = B.current) == null || ue.focus(), A(null));
          },
          [V]
        ),
        onTriggerLeave: h.useCallback(
          (H) => {
            V(H) && H.preventDefault();
          },
          [V]
        ),
        pointerGraceTimerRef: Q,
        onPointerGraceIntentChange: h.useCallback((H) => {
          j.current = H;
        }, []),
        children: /* @__PURE__ */ a(G, { ...q, children: /* @__PURE__ */ a(
          Oo,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: O(s, (H) => {
              var ue;
              H.preventDefault(), (ue = B.current) == null || ue.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: i,
            children: /* @__PURE__ */ a(
              vo,
              {
                asChild: !0,
                disableOutsidePointerEvents: l,
                onEscapeKeyDown: u,
                onPointerDownOutside: d,
                onFocusOutside: f,
                onInteractOutside: p,
                onDismiss: m,
                children: /* @__PURE__ */ a(
                  m1,
                  {
                    asChild: !0,
                    ...C,
                    dir: b.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: A,
                    onEntryFocus: O(c, (H) => {
                      b.isUsingKeyboardRef.current || H.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ a(
                      ou,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": B1(w.open),
                        "data-radix-menu-content": "",
                        dir: b.dir,
                        ...y,
                        ...v,
                        ref: L,
                        style: { outline: "none", ...v.style },
                        onKeyDown: O(v.onKeyDown, (H) => {
                          const ve = H.target.closest("[data-radix-menu-content]") === H.currentTarget, _e = H.ctrlKey || H.altKey || H.metaKey, xt = H.key.length === 1;
                          ve && (H.key === "Tab" && H.preventDefault(), !_e && xt && I(H.key));
                          const ze = B.current;
                          if (H.target !== ze || !ux.includes(H.key)) return;
                          H.preventDefault();
                          const Ie = M().filter((K) => !K.disabled).map((K) => K.ref.current);
                          v1.includes(H.key) && Ie.reverse(), Rx(Ie);
                        }),
                        onBlur: O(e.onBlur, (H) => {
                          H.currentTarget.contains(H.target) || (window.clearTimeout(D.current), W.current = "");
                        }),
                        onPointerMove: O(
                          e.onPointerMove,
                          ir((H) => {
                            const ue = H.target, ve = J.current !== H.clientX;
                            if (H.currentTarget.contains(ue) && ve) {
                              const _e = H.clientX > J.current ? "right" : "left";
                              Z.current = _e, J.current = H.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
k1.displayName = et;
var xx = "MenuGroup", xa = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(z.div, { role: "group", ...r, ref: t });
  }
);
xa.displayName = xx;
var kx = "MenuLabel", S1 = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(z.div, { ...r, ref: t });
  }
);
S1.displayName = kx;
var lo = "MenuItem", Yc = "menu.itemSelect", Zo = h.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, s = h.useRef(null), i = Cr(lo, e.__scopeMenu), l = ba(lo, e.__scopeMenu), c = te(t, s), u = h.useRef(!1), d = () => {
      const f = s.current;
      if (!n && f) {
        const p = new CustomEvent(Yc, { bubbles: !0, cancelable: !0 });
        f.addEventListener(Yc, (m) => r == null ? void 0 : r(m), { once: !0 }), Rs(f, p), p.defaultPrevented ? u.current = !1 : i.onClose();
      }
    };
    return /* @__PURE__ */ a(
      M1,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: O(e.onClick, d),
        onPointerDown: (f) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, f), u.current = !0;
        },
        onPointerUp: O(e.onPointerUp, (f) => {
          var p;
          u.current || (p = f.currentTarget) == null || p.click();
        }),
        onKeyDown: O(e.onKeyDown, (f) => {
          const p = l.searchRef.current !== "";
          n || p && f.key === " " || ri.includes(f.key) && (f.currentTarget.click(), f.preventDefault());
        })
      }
    );
  }
);
Zo.displayName = lo;
var M1 = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...s } = e, i = ba(lo, n), l = w1(n), c = h.useRef(null), u = te(t, c), [d, f] = h.useState(!1), [p, m] = h.useState("");
    return h.useEffect(() => {
      const g = c.current;
      g && m((g.textContent ?? "").trim());
    }, [s.children]), /* @__PURE__ */ a(
      sr.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ a(g1, { asChild: !0, ...l, focusable: !r, children: /* @__PURE__ */ a(
          z.div,
          {
            role: "menuitem",
            "data-highlighted": d ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...s,
            ref: u,
            onPointerMove: O(
              e.onPointerMove,
              ir((g) => {
                r ? i.onItemLeave(g) : (i.onItemEnter(g), g.defaultPrevented || g.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: O(
              e.onPointerLeave,
              ir((g) => i.onItemLeave(g))
            ),
            onFocus: O(e.onFocus, () => f(!0)),
            onBlur: O(e.onBlur, () => f(!1))
          }
        ) })
      }
    );
  }
), Sx = "MenuCheckboxItem", E1 = h.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ a(R1, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ a(
      Zo,
      {
        role: "menuitemcheckbox",
        "aria-checked": co(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Sa(n),
        onSelect: O(
          o.onSelect,
          () => r == null ? void 0 : r(co(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
E1.displayName = Sx;
var P1 = "MenuRadioGroup", [Mx, Ex] = fn(
  P1,
  { value: void 0, onValueChange: () => {
  } }
), N1 = h.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, s = be(r);
    return /* @__PURE__ */ a(Mx, { scope: e.__scopeMenu, value: n, onValueChange: s, children: /* @__PURE__ */ a(xa, { ...o, ref: t }) });
  }
);
N1.displayName = P1;
var T1 = "MenuRadioItem", L1 = h.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = Ex(T1, e.__scopeMenu), s = n === o.value;
    return /* @__PURE__ */ a(R1, { scope: e.__scopeMenu, checked: s, children: /* @__PURE__ */ a(
      Zo,
      {
        role: "menuitemradio",
        "aria-checked": s,
        ...r,
        ref: t,
        "data-state": Sa(s),
        onSelect: O(
          r.onSelect,
          () => {
            var i;
            return (i = o.onValueChange) == null ? void 0 : i.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
L1.displayName = T1;
var ka = "MenuItemIndicator", [R1, Px] = fn(
  ka,
  { checked: !1 }
), D1 = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, s = Px(ka, n);
    return /* @__PURE__ */ a(
      Fe,
      {
        present: r || co(s.checked) || s.checked === !0,
        children: /* @__PURE__ */ a(
          z.span,
          {
            ...o,
            ref: t,
            "data-state": Sa(s.checked)
          }
        )
      }
    );
  }
);
D1.displayName = ka;
var Nx = "MenuSeparator", A1 = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ a(
      z.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
A1.displayName = Nx;
var Tx = "MenuArrow", _1 = h.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Yo(n);
    return /* @__PURE__ */ a(su, { ...o, ...r, ref: t });
  }
);
_1.displayName = Tx;
var Lx = "MenuSub", [pS, I1] = fn(Lx), Gn = "MenuSubTrigger", V1 = h.forwardRef(
  (e, t) => {
    const n = hn(Gn, e.__scopeMenu), r = Cr(Gn, e.__scopeMenu), o = I1(Gn, e.__scopeMenu), s = ba(Gn, e.__scopeMenu), i = h.useRef(null), { pointerGraceTimerRef: l, onPointerGraceIntentChange: c } = s, u = { __scopeMenu: e.__scopeMenu }, d = h.useCallback(() => {
      i.current && window.clearTimeout(i.current), i.current = null;
    }, []);
    return h.useEffect(() => d, [d]), h.useEffect(() => {
      const f = l.current;
      return () => {
        window.clearTimeout(f), c(null);
      };
    }, [l, c]), /* @__PURE__ */ a(ya, { asChild: !0, ...u, children: /* @__PURE__ */ a(
      M1,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": B1(n.open),
        ...e,
        ref: hi(t, o.onTriggerChange),
        onClick: (f) => {
          var p;
          (p = e.onClick) == null || p.call(e, f), !(e.disabled || f.defaultPrevented) && (f.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: O(
          e.onPointerMove,
          ir((f) => {
            s.onItemEnter(f), !f.defaultPrevented && !e.disabled && !n.open && !i.current && (s.onPointerGraceIntentChange(null), i.current = window.setTimeout(() => {
              n.onOpenChange(!0), d();
            }, 100));
          })
        ),
        onPointerLeave: O(
          e.onPointerLeave,
          ir((f) => {
            var m, g;
            d();
            const p = (m = n.content) == null ? void 0 : m.getBoundingClientRect();
            if (p) {
              const v = (g = n.content) == null ? void 0 : g.dataset.side, w = v === "right", b = w ? -5 : 5, y = p[w ? "left" : "right"], C = p[w ? "right" : "left"];
              s.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: f.clientX + b, y: f.clientY },
                  { x: y, y: p.top },
                  { x: C, y: p.top },
                  { x: C, y: p.bottom },
                  { x: y, y: p.bottom }
                ],
                side: v
              }), window.clearTimeout(l.current), l.current = window.setTimeout(
                () => s.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (s.onTriggerLeave(f), f.defaultPrevented) return;
              s.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: O(e.onKeyDown, (f) => {
          var m;
          const p = s.searchRef.current !== "";
          e.disabled || p && f.key === " " || dx[r.dir].includes(f.key) && (n.onOpenChange(!0), (m = n.content) == null || m.focus(), f.preventDefault());
        })
      }
    ) });
  }
);
V1.displayName = Gn;
var O1 = "MenuSubContent", F1 = h.forwardRef(
  (e, t) => {
    const n = C1(et, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, s = hn(et, e.__scopeMenu), i = Cr(et, e.__scopeMenu), l = I1(O1, e.__scopeMenu), c = h.useRef(null), u = te(t, c);
    return /* @__PURE__ */ a(sr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(Fe, { present: r || s.open, children: /* @__PURE__ */ a(sr.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ a(
      Ca,
      {
        id: l.contentId,
        "aria-labelledby": l.triggerId,
        ...o,
        ref: u,
        align: "start",
        side: i.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (d) => {
          var f;
          i.isUsingKeyboardRef.current && ((f = c.current) == null || f.focus()), d.preventDefault();
        },
        onCloseAutoFocus: (d) => d.preventDefault(),
        onFocusOutside: O(e.onFocusOutside, (d) => {
          d.target !== l.trigger && s.onOpenChange(!1);
        }),
        onEscapeKeyDown: O(e.onEscapeKeyDown, (d) => {
          i.onClose(), d.preventDefault();
        }),
        onKeyDown: O(e.onKeyDown, (d) => {
          var m;
          const f = d.currentTarget.contains(d.target), p = fx[i.dir].includes(d.key);
          f && p && (s.onOpenChange(!1), (m = l.trigger) == null || m.focus(), d.preventDefault());
        })
      }
    ) }) }) });
  }
);
F1.displayName = O1;
function B1(e) {
  return e ? "open" : "closed";
}
function co(e) {
  return e === "indeterminate";
}
function Sa(e) {
  return co(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function Rx(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function Dx(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Ax(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, s = n ? e.indexOf(n) : -1;
  let i = Dx(e, Math.max(s, 0));
  o.length === 1 && (i = i.filter((u) => u !== n));
  const c = i.find(
    (u) => u.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function _x(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const l = t[s].x, c = t[s].y, u = t[i].x, d = t[i].y;
    c > r != d > r && n < (u - l) * (r - c) / (d - c) + l && (o = !o);
  }
  return o;
}
function Ix(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return _x(n, t);
}
function ir(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Vx = b1, Ox = ya, Fx = x1, Bx = k1, $x = xa, Wx = S1, jx = Zo, Hx = E1, Ux = N1, Gx = L1, zx = D1, Kx = A1, Yx = _1, Zx = V1, Xx = F1, Ma = "DropdownMenu", [qx, mS] = wt(
  Ma,
  [y1]
), $e = y1(), [Qx, $1] = qx(Ma), W1 = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: s,
    onOpenChange: i,
    modal: l = !0
  } = e, c = $e(t), u = h.useRef(null), [d = !1, f] = st({
    prop: o,
    defaultProp: s,
    onChange: i
  });
  return /* @__PURE__ */ a(
    Qx,
    {
      scope: t,
      triggerId: Je(),
      triggerRef: u,
      contentId: Je(),
      open: d,
      onOpenChange: f,
      onOpenToggle: h.useCallback(() => f((p) => !p), [f]),
      modal: l,
      children: /* @__PURE__ */ a(Vx, { ...c, open: d, onOpenChange: f, dir: r, modal: l, children: n })
    }
  );
};
W1.displayName = Ma;
var j1 = "DropdownMenuTrigger", H1 = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, s = $1(j1, n), i = $e(n);
    return /* @__PURE__ */ a(Ox, { asChild: !0, ...i, children: /* @__PURE__ */ a(
      z.button,
      {
        type: "button",
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": s.open,
        "aria-controls": s.open ? s.contentId : void 0,
        "data-state": s.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: hi(t, s.triggerRef),
        onPointerDown: O(e.onPointerDown, (l) => {
          !r && l.button === 0 && l.ctrlKey === !1 && (s.onOpenToggle(), s.open || l.preventDefault());
        }),
        onKeyDown: O(e.onKeyDown, (l) => {
          r || (["Enter", " "].includes(l.key) && s.onOpenToggle(), l.key === "ArrowDown" && s.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(l.key) && l.preventDefault());
        })
      }
    ) });
  }
);
H1.displayName = j1;
var Jx = "DropdownMenuPortal", U1 = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = $e(t);
  return /* @__PURE__ */ a(Fx, { ...r, ...n });
};
U1.displayName = Jx;
var G1 = "DropdownMenuContent", z1 = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = $1(G1, n), s = $e(n), i = h.useRef(!1);
    return /* @__PURE__ */ a(
      Bx,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...s,
        ...r,
        ref: t,
        onCloseAutoFocus: O(e.onCloseAutoFocus, (l) => {
          var c;
          i.current || (c = o.triggerRef.current) == null || c.focus(), i.current = !1, l.preventDefault();
        }),
        onInteractOutside: O(e.onInteractOutside, (l) => {
          const c = l.detail.originalEvent, u = c.button === 0 && c.ctrlKey === !0, d = c.button === 2 || u;
          (!o.modal || d) && (i.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
z1.displayName = G1;
var e8 = "DropdownMenuGroup", t8 = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = $e(n);
    return /* @__PURE__ */ a($x, { ...o, ...r, ref: t });
  }
);
t8.displayName = e8;
var n8 = "DropdownMenuLabel", K1 = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = $e(n);
    return /* @__PURE__ */ a(Wx, { ...o, ...r, ref: t });
  }
);
K1.displayName = n8;
var r8 = "DropdownMenuItem", Y1 = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = $e(n);
    return /* @__PURE__ */ a(jx, { ...o, ...r, ref: t });
  }
);
Y1.displayName = r8;
var o8 = "DropdownMenuCheckboxItem", Z1 = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = $e(n);
  return /* @__PURE__ */ a(Hx, { ...o, ...r, ref: t });
});
Z1.displayName = o8;
var s8 = "DropdownMenuRadioGroup", i8 = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = $e(n);
  return /* @__PURE__ */ a(Ux, { ...o, ...r, ref: t });
});
i8.displayName = s8;
var a8 = "DropdownMenuRadioItem", X1 = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = $e(n);
  return /* @__PURE__ */ a(Gx, { ...o, ...r, ref: t });
});
X1.displayName = a8;
var l8 = "DropdownMenuItemIndicator", q1 = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = $e(n);
  return /* @__PURE__ */ a(zx, { ...o, ...r, ref: t });
});
q1.displayName = l8;
var c8 = "DropdownMenuSeparator", Q1 = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = $e(n);
  return /* @__PURE__ */ a(Kx, { ...o, ...r, ref: t });
});
Q1.displayName = c8;
var u8 = "DropdownMenuArrow", d8 = h.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = $e(n);
    return /* @__PURE__ */ a(Yx, { ...o, ...r, ref: t });
  }
);
d8.displayName = u8;
var f8 = "DropdownMenuSubTrigger", J1 = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = $e(n);
  return /* @__PURE__ */ a(Zx, { ...o, ...r, ref: t });
});
J1.displayName = f8;
var h8 = "DropdownMenuSubContent", ep = h.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = $e(n);
  return /* @__PURE__ */ a(
    Xx,
    {
      ...o,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
ep.displayName = h8;
var p8 = W1, m8 = H1, g8 = U1, tp = z1, np = K1, rp = Y1, op = Z1, sp = X1, ip = q1, ap = Q1, lp = J1, cp = ep;
const v8 = p8, y8 = m8, w8 = h.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ k(
  lp,
  {
    ref: o,
    className: T(
      "flex cursor-default select-none items-center rounded-2xs px-2 py-1.5 text-sm outline-none focus:bg-f1-background-secondary data-[state=open]:bg-f1-background-secondary",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ a(Yi, { className: "ml-auto h-4 w-4" })
    ]
  }
));
w8.displayName = lp.displayName;
const b8 = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  cp,
  {
    ref: n,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...t
  }
));
b8.displayName = cp.displayName;
const up = h.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ a(g8, { children: /* @__PURE__ */ a(
  tp,
  {
    ref: r,
    sideOffset: t,
    className: T(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-solid border-f1-border bg-f1-background text-f1-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      e
    ),
    ...n
  }
) }));
up.displayName = tp.displayName;
const dp = h.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ a(
  rp,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded p-2 text-base font-medium outline-none transition-colors hover:bg-f1-background-secondary focus:bg-f1-background-secondary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
dp.displayName = rp.displayName;
const C8 = h.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ k(
  op,
  {
    ref: o,
    className: T(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(ip, { children: /* @__PURE__ */ a(Bb, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
C8.displayName = op.displayName;
const x8 = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ k(
  sp,
  {
    ref: r,
    className: T(
      "relative flex cursor-default select-none items-center rounded-xs py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-f1-background-secondary focus:text-f1-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ a("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ a(ip, { children: /* @__PURE__ */ a(Ub, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
x8.displayName = sp.displayName;
const k8 = h.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ a(
  np,
  {
    ref: r,
    className: T(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
k8.displayName = np.displayName;
const S8 = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  ap,
  {
    ref: n,
    className: T("-mx-1 my-1 h-px bg-f1-background-secondary", e),
    ...t
  }
));
S8.displayName = ap.displayName;
const M8 = ({ item: e }) => {
  const { label: t, ...n } = e, r = /* @__PURE__ */ k(me, { children: [
    e.avatar && Zf(e.avatar, "xsmall"),
    e.icon && /* @__PURE__ */ a(
      Ae,
      {
        icon: e.icon,
        size: "md",
        className: T(
          "text-f1-icon",
          e.critical && "text-f1-icon-critical"
        )
      }
    ),
    /* @__PURE__ */ k("div", { className: "flex flex-col items-start", children: [
      t,
      e.description && /* @__PURE__ */ a(
        "div",
        {
          className: T(
            "font-normal text-f1-foreground-secondary",
            e.critical && "text-f1-foreground-critical"
          ),
          children: e.description
        }
      )
    ] })
  ] }), o = T(
    "flex items-start gap-1.5 w-full",
    e.critical && "text-f1-foreground-critical"
  );
  return /* @__PURE__ */ a(dp, { asChild: !0, onClick: e.onClick, className: o, children: e.href ? /* @__PURE__ */ a(
    ln,
    {
      href: e.href,
      className: T(o, "text-f1-foreground no-underline"),
      ...n,
      children: r
    }
  ) : /* @__PURE__ */ a("div", { className: o, children: r }) });
};
function fp({ items: e, children: t }) {
  return /* @__PURE__ */ k(v8, { children: [
    /* @__PURE__ */ a(y8, { asChild: !0, children: t || /* @__PURE__ */ a(
      nn,
      {
        hideLabel: !0,
        icon: sf,
        label: "...",
        round: !0,
        variant: "outline"
      }
    ) }),
    /* @__PURE__ */ a(up, { className: "min-w-[var(--radix-dropdown-menu-trigger-width)]", children: /* @__PURE__ */ a("div", { className: "flex flex-col p-1", children: e.map((n, r) => /* @__PURE__ */ a(
      M8,
      {
        item: {
          ...n,
          onClick: n.onClick
        }
      },
      r
    )) }) })
  ] });
}
function Zc({ item: e, isLast: t }) {
  const { label: n, ...r } = e;
  return /* @__PURE__ */ a(a1, { children: t ? /* @__PURE__ */ a(c1, { children: e.label }) : /* @__PURE__ */ k(me, { children: [
    /* @__PURE__ */ a(
      l1,
      {
        className: T("max-w-40", e.icon && "pl-0.5"),
        asChild: !0,
        children: /* @__PURE__ */ k(
          ln,
          {
            ...r,
            className: T("flex items-center gap-1.5", bt()),
            children: [
              e.icon && /* @__PURE__ */ a(t1, { icon: e.icon, size: "sm" }),
              /* @__PURE__ */ a("span", { className: "truncate", children: e.label })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ a(va, { children: /* @__PURE__ */ a(fr, { className: "h-4 w-4 text-f1-icon-secondary" }) })
  ] }) });
}
function E8({ breadcrumbs: e }) {
  const [t, n] = Ce(2), r = Ue(null);
  Le(() => {
    const l = r.current;
    if (!l) return;
    const c = () => {
      if (!r.current || e.length <= 2) {
        n(e.length);
        return;
      }
      const d = r.current.offsetWidth, f = 150, p = 50;
      let m = d - f, g = 1;
      for (let v = e.length - 1; v > 0 && !(m < f); v--)
        m -= f, g++;
      if (g < e.length - 1)
        for (m -= p; m < 0 && g > 1; )
          m += f, g--;
      n(g);
    }, u = new ResizeObserver(() => {
      c();
    });
    return u.observe(l), c(), () => {
      u.disconnect();
    };
  }, [e]);
  const o = e[0], s = e.slice(-t + 1), i = e.slice(1, -t + 1);
  return /* @__PURE__ */ a(s1, { ref: r, className: "w-full", children: /* @__PURE__ */ k(i1, { children: [
    /* @__PURE__ */ a(Zc, { item: o, isLast: !1 }),
    i.length > 0 && /* @__PURE__ */ k(me, { children: [
      /* @__PURE__ */ a(fp, { items: i, children: /* @__PURE__ */ a("li", { className: "rounded-sm px-1.5 py-0.5 font-medium text-f1-foreground no-underline transition-colors hover:bg-f1-background-secondary", children: "..." }) }),
      /* @__PURE__ */ a(va, { children: /* @__PURE__ */ a(fr, { className: "h-4 w-4 text-f1-icon-secondary" }) })
    ] }),
    s.map((l, c) => /* @__PURE__ */ a(
      Zc,
      {
        item: l,
        isLast: c === s.length - 1
      },
      c
    ))
  ] }) });
}
function gS({
  module: e,
  breadcrumbs: t = [],
  actions: n = []
}) {
  const { sidebarState: r, toggleSidebar: o } = Go(), s = [
    { label: e.name, href: e.href, icon: e.icon },
    ...t
  ], i = t.length > 0;
  return /* @__PURE__ */ k(
    "div",
    {
      className: T(
        "flex h-16 items-center justify-between bg-f1-background/80 px-5 py-4 backdrop-blur-xl xs:px-6",
        i && "border-b border-dashed border-transparent border-b-f1-border/80"
      ),
      children: [
        /* @__PURE__ */ k("div", { className: "flex flex-grow items-center", children: [
          /* @__PURE__ */ a(Lo, { children: r !== "locked" && /* @__PURE__ */ a(
            It.div,
            {
              initial: { opacity: 0, width: 0 },
              animate: { opacity: 1, width: "auto" },
              exit: { opacity: 0, width: 0 },
              children: /* @__PURE__ */ a("div", { className: "mr-3", children: /* @__PURE__ */ a(
                nn,
                {
                  variant: "ghost",
                  hideLabel: !0,
                  round: !0,
                  onClick: o,
                  label: "Menu",
                  icon: hf
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ k("div", { className: "flex flex-grow items-center gap-3", children: [
            !i && /* @__PURE__ */ a(t1, { icon: e.icon, size: "lg" }),
            s.length > 1 ? /* @__PURE__ */ a(E8, { breadcrumbs: s }) : /* @__PURE__ */ a("div", { className: "text-xl font-semibold", children: e.name })
          ] })
        ] }),
        n && /* @__PURE__ */ a("div", { className: "flex items-center gap-2", children: n.map((l, c) => /* @__PURE__ */ a(
          nn,
          {
            hideLabel: !0,
            round: !0,
            variant: "outline",
            onClick: l.onClick,
            label: l.label,
            icon: l.icon
          },
          c
        )) })
      ]
    }
  );
}
function vS({ children: e, header: t }) {
  return /* @__PURE__ */ k("div", { className: "flex w-full flex-col overflow-hidden rounded-xl bg-f1-background shadow", children: [
    t && /* @__PURE__ */ a("div", { className: "flex flex-col", children: t }),
    /* @__PURE__ */ a("div", { className: "isolate flex w-full flex-1 flex-col overflow-auto [&>*]:flex-1", children: e })
  ] });
}
function P8({
  companies: e,
  selected: t,
  onChange: n
}) {
  var l;
  const [r, o] = Ce(!1), s = e.map((c) => ({
    value: c.id,
    label: c.name,
    avatar: {
      type: "company",
      name: c.name,
      src: c.logo,
      "aria-label": `${c.name} logo`
    }
  })), i = e.find((c) => c.id === t) || e[0];
  return /* @__PURE__ */ a(
    f3,
    {
      options: s,
      value: t,
      onChange: n,
      placeholder: "Select a company",
      open: r,
      onOpenChange: o,
      children: /* @__PURE__ */ k(
        "div",
        {
          className: T(
            "group flex w-fit flex-nowrap items-center gap-2 truncate rounded p-1.5 text-lg font-semibold text-f1-foreground transition-colors hover:bg-f1-background-secondary-hover data-[state=open]:bg-f1-background-secondary-hover",
            bt()
          ),
          tabIndex: 0,
          title: i == null ? void 0 : i.name,
          children: [
            /* @__PURE__ */ a(
              Io,
              {
                name: (l = i == null ? void 0 : i.name) == null ? void 0 : l[0],
                src: i == null ? void 0 : i.logo,
                size: "xsmall"
              }
            ),
            /* @__PURE__ */ a("span", { className: "truncate", children: i == null ? void 0 : i.name }),
            /* @__PURE__ */ a("div", { className: "h-6 w-6 shrink-0 p-1", children: /* @__PURE__ */ a("div", { className: "flex h-4 w-4 items-center justify-center rounded-xs bg-f1-background-secondary-hover transition-all group-hover:brightness-90 group-data-[state=open]:brightness-90", children: /* @__PURE__ */ a(
              It.div,
              {
                animate: { rotate: r ? 180 : 0 },
                transition: { duration: 0.2 },
                className: "flex h-3 w-3 items-center justify-center",
                children: /* @__PURE__ */ a(dr, { className: "h-3 w-3 shrink-0 text-f1-icon" })
              }
            ) }) })
          ]
        }
      )
    }
  );
}
function N8({ isExpanded: e }) {
  return /* @__PURE__ */ k(
    "svg",
    {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className: "text-f1-icon-bold",
      children: [
        /* @__PURE__ */ a(
          "rect",
          {
            id: "container",
            x: "3.33325",
            y: "5",
            width: "13.3333",
            height: "10",
            rx: "3",
            strokeWidth: "1.3",
            className: "stroke-current"
          }
        ),
        /* @__PURE__ */ a(
          "path",
          {
            id: "arrow",
            d: e ? "M10.417 10L14.167 10M10.417 10L12.0837 8.33337M10.417 10L12.0837 11.6667" : "M10.75 10L7 10M10.75 10L9.08333 8.33337M10.75 10L9.08333 11.6667",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: T(
              "translate-x-0 stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "opacity-0 group-hover:-translate-x-1 group-hover:opacity-100" : "opacity-1 group-hover:translate-x-[3px]"
            )
          }
        ),
        /* @__PURE__ */ a(
          "path",
          {
            id: "line",
            d: "M7.5 5L7.5 15",
            strokeWidth: "1.3",
            strokeLinecap: "round",
            className: T(
              "stroke-current transition-all duration-200 ease-out motion-reduce:transition-none",
              e ? "translate-x-0 opacity-100 group-hover:-translate-x-0.5 group-hover:opacity-0" : "-translate-x-0.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
function T8() {
  const { sidebarState: e, toggleSidebar: t, isSmallScreen: n } = Go();
  return /* @__PURE__ */ k(
    jm,
    {
      variant: "ghost",
      size: "md",
      round: !0,
      onClick: t,
      className: "group",
      title: "Toggle Sidebar",
      children: [
        /* @__PURE__ */ a("div", { className: T("hidden", { flex: !n }), children: /* @__PURE__ */ a(N8, { isExpanded: e === "locked" }) }),
        /* @__PURE__ */ a("div", { className: T("hidden", { flex: n }), children: /* @__PURE__ */ a(Ae, { icon: rf, size: "md" }) })
      ]
    }
  );
}
function yS({
  companies: e,
  selected: t,
  onChange: n
}) {
  return /* @__PURE__ */ k("div", { className: "flex h-[72px] items-center justify-between gap-3", children: [
    /* @__PURE__ */ a(
      P8,
      {
        companies: e,
        selected: t,
        onChange: n
      }
    ),
    /* @__PURE__ */ a(T8, {})
  ] });
}
function L8(e, t = []) {
  let n = [];
  function r(s, i) {
    const l = h.createContext(i), c = n.length;
    n = [...n, i];
    const u = (f) => {
      var b;
      const { scope: p, children: m, ...g } = f, v = ((b = p == null ? void 0 : p[e]) == null ? void 0 : b[c]) || l, w = h.useMemo(() => g, Object.values(g));
      return /* @__PURE__ */ a(v.Provider, { value: w, children: m });
    };
    u.displayName = s + "Provider";
    function d(f, p) {
      var v;
      const m = ((v = p == null ? void 0 : p[e]) == null ? void 0 : v[c]) || l, g = h.useContext(m);
      if (g) return g;
      if (i !== void 0) return i;
      throw new Error(`\`${f}\` must be used within \`${s}\``);
    }
    return [u, d];
  }
  const o = () => {
    const s = n.map((i) => h.createContext(i));
    return function(l) {
      const c = (l == null ? void 0 : l[e]) || s;
      return h.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: c } }),
        [l, c]
      );
    };
  };
  return o.scopeName = e, [r, R8(o, ...t)];
}
function R8(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(s) {
      const i = r.reduce((l, { useScope: c, scopeName: u }) => {
        const f = c(s)[`__scope${u}`];
        return { ...l, ...f };
      }, {});
      return h.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function D8(e, t) {
  return h.useReducer((n, r) => t[n][r] ?? n, e);
}
var hp = (e) => {
  const { present: t, children: n } = e, r = A8(t), o = typeof n == "function" ? n({ present: r.isPresent }) : h.Children.only(n), s = te(r.ref, _8(o));
  return typeof n == "function" || r.isPresent ? h.cloneElement(o, { ref: s }) : null;
};
hp.displayName = "Presence";
function A8(e) {
  const [t, n] = h.useState(), r = h.useRef({}), o = h.useRef(e), s = h.useRef("none"), i = e ? "mounted" : "unmounted", [l, c] = D8(i, {
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
  return h.useEffect(() => {
    const u = Or(r.current);
    s.current = l === "mounted" ? u : "none";
  }, [l]), Ee(() => {
    const u = r.current, d = o.current;
    if (d !== e) {
      const p = s.current, m = Or(u);
      e ? c("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? c("UNMOUNT") : c(d && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), Ee(() => {
    if (t) {
      let u;
      const d = t.ownerDocument.defaultView ?? window, f = (m) => {
        const v = Or(r.current).includes(m.animationName);
        if (m.target === t && v && (c("ANIMATION_END"), !o.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", u = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, p = (m) => {
        m.target === t && (s.current = Or(r.current));
      };
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(u), t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: h.useCallback((u) => {
      u && (r.current = getComputedStyle(u)), n(u);
    }, [])
  };
}
function Or(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function _8(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Ea = "Collapsible", [I8, wS] = L8(Ea), [V8, Pa] = I8(Ea), pp = h.forwardRef(
  (e, t) => {
    const {
      __scopeCollapsible: n,
      open: r,
      defaultOpen: o,
      disabled: s,
      onOpenChange: i,
      ...l
    } = e, [c = !1, u] = st({
      prop: r,
      defaultProp: o,
      onChange: i
    });
    return /* @__PURE__ */ a(
      V8,
      {
        scope: n,
        disabled: s,
        contentId: Je(),
        open: c,
        onOpenToggle: h.useCallback(() => u((d) => !d), [u]),
        children: /* @__PURE__ */ a(
          z.div,
          {
            "data-state": Ta(c),
            "data-disabled": s ? "" : void 0,
            ...l,
            ref: t
          }
        )
      }
    );
  }
);
pp.displayName = Ea;
var mp = "CollapsibleTrigger", gp = h.forwardRef(
  (e, t) => {
    const { __scopeCollapsible: n, ...r } = e, o = Pa(mp, n);
    return /* @__PURE__ */ a(
      z.button,
      {
        type: "button",
        "aria-controls": o.contentId,
        "aria-expanded": o.open || !1,
        "data-state": Ta(o.open),
        "data-disabled": o.disabled ? "" : void 0,
        disabled: o.disabled,
        ...r,
        ref: t,
        onClick: O(e.onClick, o.onOpenToggle)
      }
    );
  }
);
gp.displayName = mp;
var Na = "CollapsibleContent", vp = h.forwardRef(
  (e, t) => {
    const { forceMount: n, ...r } = e, o = Pa(Na, e.__scopeCollapsible);
    return /* @__PURE__ */ a(hp, { present: n || o.open, children: ({ present: s }) => /* @__PURE__ */ a(O8, { ...r, ref: t, present: s }) });
  }
);
vp.displayName = Na;
var O8 = h.forwardRef((e, t) => {
  const { __scopeCollapsible: n, present: r, children: o, ...s } = e, i = Pa(Na, n), [l, c] = h.useState(r), u = h.useRef(null), d = te(t, u), f = h.useRef(0), p = f.current, m = h.useRef(0), g = m.current, v = i.open || l, w = h.useRef(v), b = h.useRef();
  return h.useEffect(() => {
    const y = requestAnimationFrame(() => w.current = !1);
    return () => cancelAnimationFrame(y);
  }, []), Ee(() => {
    const y = u.current;
    if (y) {
      b.current = b.current || {
        transitionDuration: y.style.transitionDuration,
        animationName: y.style.animationName
      }, y.style.transitionDuration = "0s", y.style.animationName = "none";
      const C = y.getBoundingClientRect();
      f.current = C.height, m.current = C.width, w.current || (y.style.transitionDuration = b.current.transitionDuration, y.style.animationName = b.current.animationName), c(r);
    }
  }, [i.open, r]), /* @__PURE__ */ a(
    z.div,
    {
      "data-state": Ta(i.open),
      "data-disabled": i.disabled ? "" : void 0,
      id: i.contentId,
      hidden: !v,
      ...s,
      ref: d,
      style: {
        "--radix-collapsible-content-height": p ? `${p}px` : void 0,
        "--radix-collapsible-content-width": g ? `${g}px` : void 0,
        ...e.style
      },
      children: v && o
    }
  );
});
function Ta(e) {
  return e ? "open" : "closed";
}
var F8 = pp;
const B8 = F8, $8 = gp, W8 = vp, j8 = ({
  item: e,
  active: t
}) => {
  const n = e.icon;
  return /* @__PURE__ */ k("div", { className: "flex w-full items-center justify-between", children: [
    /* @__PURE__ */ k("div", { className: "flex items-center gap-1.5 font-medium text-f1-foreground", children: [
      /* @__PURE__ */ a(
        n,
        {
          className: T(
            "h-5 w-5 transition-colors",
            t ? "text-f1-icon-bold" : "text-f1-icon"
          )
        }
      ),
      /* @__PURE__ */ a("span", { children: e.label })
    ] }),
    e.badge && /* @__PURE__ */ a(e1, { value: e.badge, size: "sm", type: "bold" })
  ] });
}, Xc = ({ item: e }) => {
  const { isActive: t } = di(), { label: n, ...r } = e, o = t(r.href, { exact: r.exactMatch });
  return /* @__PURE__ */ a(
    ln,
    {
      ...r,
      className: T(
        "flex cursor-pointer items-center rounded py-1.5 pl-1.5 pr-2 no-underline transition-colors",
        bt(),
        o ? "bg-f1-background-secondary-hover text-f1-foreground" : "hover:bg-f1-background-secondary-hover"
      ),
      children: /* @__PURE__ */ a(j8, { item: e, active: o })
    }
  );
}, H8 = ({ category: e }) => {
  const [t, n] = ee.useState(e.isOpen !== !1), r = fi();
  return e.isRoot ? /* @__PURE__ */ a("div", { className: "flex flex-col gap-1 pb-3", children: e.items.map((o, s) => /* @__PURE__ */ a(Xc, { item: o }, s)) }) : /* @__PURE__ */ k(B8, { open: t, onOpenChange: n, children: [
    /* @__PURE__ */ k(
      $8,
      {
        className: T(
          "flex w-full cursor-pointer items-center justify-between border-t border-dashed border-transparent border-t-f1-border px-1.5 pb-2 pt-4 text-sm font-semibold uppercase tracking-wide text-f1-foreground-secondary",
          bt("focus-visible:rounded-md")
        ),
        children: [
          e.title,
          /* @__PURE__ */ a(
            It.div,
            {
              initial: !1,
              animate: { rotate: t ? 0 : -90 },
              transition: { duration: r ? 0 : 0.1 },
              children: /* @__PURE__ */ a(dr, { className: "h-4 w-4 text-f1-icon-secondary" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ a(
      W8,
      {
        forceMount: !0,
        className: "flex flex-col gap-1 overflow-hidden pb-3",
        children: /* @__PURE__ */ a(Lo, { initial: !1, children: t && /* @__PURE__ */ a(
          It.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: {
              duration: r ? 0 : 0.15,
              ease: [0.165, 0.84, 0.44, 1]
            },
            children: /* @__PURE__ */ a("div", { className: "flex flex-col gap-1 pb-3", children: e.items.map((o, s) => /* @__PURE__ */ a(Xc, { item: o }, s)) })
          }
        ) })
      }
    )
  ] });
};
function bS({ tree: e }) {
  return /* @__PURE__ */ a("div", { className: "w-full bg-transparent", children: e.map((t, n) => /* @__PURE__ */ a(H8, { category: t }, n)) });
}
function CS({
  onClick: e,
  placeholder: t,
  shortcut: n = ["cmd", "k"],
  ...r
}) {
  return /* @__PURE__ */ k(
    "button",
    {
      onClick: e,
      className: T(
        "mb-4 mt-2 flex w-full cursor-pointer items-center justify-between rounded border border-solid border-f1-border/70 bg-f1-background/80 p-1.5 text-f1-foreground-secondary transition-colors hover:border-f1-border-hover",
        bt()
      ),
      type: "button",
      ...r,
      children: [
        /* @__PURE__ */ k("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ a(Ae, { icon: pf, size: "md" }),
          /* @__PURE__ */ a("span", { children: t })
        ] }),
        /* @__PURE__ */ a("div", { className: "hidden xs:block", children: /* @__PURE__ */ a($3, { keys: n }) })
      ]
    }
  );
}
function xS({ header: e, body: t, footer: n }) {
  const { sidebarState: r, isSmallScreen: o } = Go(), s = fi(), [i, l] = Ce(!1), c = (d) => {
    l(d.currentTarget.scrollTop > 0);
  }, u = {
    x: {
      ease: r !== "locked" ? o ? [0.25, 0.46, 0.45, 0.94] : [0.175, 0.885, 0.32, 1.1] : [0, 0, 0.58, 1],
      duration: s ? 0 : r !== "locked" && !o ? 0.3 : 0.2
    },
    top: { duration: s ? 0 : 0.1 },
    left: { duration: s ? 0 : 0.1 },
    default: { duration: s ? 0 : 0.2 }
  };
  return /* @__PURE__ */ k(
    It.div,
    {
      initial: !1,
      className: T(
        "absolute bottom-0 left-0 top-0 z-10 flex w-64 flex-col px-3 transition-[background-color]",
        r === "locked" ? "h-screen" : T(
          "pb-3",
          o ? "h-screen bg-f1-background-secondary" : "h-[calc(100vh-16px)] border-solid border-f1-border/40 bg-f1-background/60 shadow-lg backdrop-blur-2xl"
        )
      ),
      animate: {
        top: r === "locked" || o ? 0 : "8px",
        borderRadius: r === "locked" || o ? "0" : "12px",
        left: r === "locked" ? "0" : o ? 0 : "8px",
        x: r === "hidden" ? -260 : 0,
        opacity: r === "hidden" ? o ? 0.7 : 0 : 1,
        pointerEvents: r === "hidden" ? "none" : "auto"
      },
      transition: u,
      children: [
        /* @__PURE__ */ a("div", { className: "flex-shrink-0", children: e }),
        t && /* @__PURE__ */ k("div", { className: "relative flex-grow overflow-y-hidden", children: [
          /* @__PURE__ */ a(Lo, { children: i && /* @__PURE__ */ a(
            It.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              transition: { duration: 0.2, ease: "easeOut" },
              className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-6 bg-gradient-to-b from-f1-background-bold/15 to-transparent [mask-image:linear-gradient(to_right,transparent,black_30%,black_60%,transparent)]"
            }
          ) }),
          /* @__PURE__ */ a(
            "div",
            {
              className: "h-full overflow-y-auto",
              onScroll: c,
              onTouchMove: c,
              children: t
            }
          )
        ] }),
        /* @__PURE__ */ a("div", { className: "flex-shrink-0", children: n })
      ]
    }
  );
}
function kS({ firstName: e, lastName: t, avatarUrl: n, options: r }) {
  return /* @__PURE__ */ a("div", { className: "border-t border-dashed border-transparent border-t-f1-border pt-4", children: /* @__PURE__ */ a(fp, { items: r, children: /* @__PURE__ */ k(
    "button",
    {
      className: T(
        "flex w-full items-center gap-1.5 rounded p-1.5 font-medium transition-colors hover:bg-f1-background-secondary-hover data-[state=open]:bg-f1-background-secondary-hover",
        bt()
      ),
      children: [
        /* @__PURE__ */ a(
          Vo,
          {
            src: n,
            firstName: e,
            lastName: t,
            size: "xsmall"
          }
        ),
        e,
        " ",
        t
      ]
    }
  ) }) });
}
var Vn = "NavigationMenu", [La, yp, U8] = vr(Vn), [oi, G8, z8] = vr(Vn), [Ra, SS] = wt(
  Vn,
  [U8, z8]
), [K8, rt] = Ra(Vn), [Y8, Z8] = Ra(Vn), wp = h.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      delayDuration: i = 200,
      skipDelayDuration: l = 300,
      orientation: c = "horizontal",
      dir: u,
      ...d
    } = e, [f, p] = h.useState(null), m = te(t, (D) => p(D)), g = _n(u), v = h.useRef(0), w = h.useRef(0), b = h.useRef(0), [y, C] = h.useState(!0), [M = "", E] = st({
      prop: r,
      onChange: (D) => {
        const W = D !== "", Q = l > 0;
        W ? (window.clearTimeout(b.current), Q && C(!1)) : (window.clearTimeout(b.current), b.current = window.setTimeout(
          () => C(!0),
          l
        )), o == null || o(D);
      },
      defaultProp: s
    }), A = h.useCallback(() => {
      window.clearTimeout(w.current), w.current = window.setTimeout(() => E(""), 150);
    }, [E]), B = h.useCallback(
      (D) => {
        window.clearTimeout(w.current), E(D);
      },
      [E]
    ), L = h.useCallback(
      (D) => {
        M === D ? window.clearTimeout(w.current) : v.current = window.setTimeout(() => {
          window.clearTimeout(w.current), E(D);
        }, i);
      },
      [M, E, i]
    );
    return h.useEffect(() => () => {
      window.clearTimeout(v.current), window.clearTimeout(w.current), window.clearTimeout(b.current);
    }, []), /* @__PURE__ */ a(
      Cp,
      {
        scope: n,
        isRootMenu: !0,
        value: M,
        dir: g,
        orientation: c,
        rootNavigationMenu: f,
        onTriggerEnter: (D) => {
          window.clearTimeout(v.current), y ? L(D) : B(D);
        },
        onTriggerLeave: () => {
          window.clearTimeout(v.current), A();
        },
        onContentEnter: () => window.clearTimeout(w.current),
        onContentLeave: A,
        onItemSelect: (D) => {
          E((W) => W === D ? "" : D);
        },
        onItemDismiss: () => E(""),
        children: /* @__PURE__ */ a(
          z.nav,
          {
            "aria-label": "Main",
            "data-orientation": c,
            dir: g,
            ...d,
            ref: m
          }
        )
      }
    );
  }
);
wp.displayName = Vn;
var bp = "NavigationMenuSub", X8 = h.forwardRef(
  (e, t) => {
    const {
      __scopeNavigationMenu: n,
      value: r,
      onValueChange: o,
      defaultValue: s,
      orientation: i = "horizontal",
      ...l
    } = e, c = rt(bp, n), [u = "", d] = st({
      prop: r,
      onChange: o,
      defaultProp: s
    });
    return /* @__PURE__ */ a(
      Cp,
      {
        scope: n,
        isRootMenu: !1,
        value: u,
        dir: c.dir,
        orientation: i,
        rootNavigationMenu: c.rootNavigationMenu,
        onTriggerEnter: (f) => d(f),
        onItemSelect: (f) => d(f),
        onItemDismiss: () => d(""),
        children: /* @__PURE__ */ a(z.div, { "data-orientation": i, ...l, ref: t })
      }
    );
  }
);
X8.displayName = bp;
var Cp = (e) => {
  const {
    scope: t,
    isRootMenu: n,
    rootNavigationMenu: r,
    dir: o,
    orientation: s,
    children: i,
    value: l,
    onItemSelect: c,
    onItemDismiss: u,
    onTriggerEnter: d,
    onTriggerLeave: f,
    onContentEnter: p,
    onContentLeave: m
  } = e, [g, v] = h.useState(null), [w, b] = h.useState(/* @__PURE__ */ new Map()), [y, C] = h.useState(null);
  return /* @__PURE__ */ a(
    K8,
    {
      scope: t,
      isRootMenu: n,
      rootNavigationMenu: r,
      value: l,
      previousValue: qf(l),
      baseId: Je(),
      dir: o,
      orientation: s,
      viewport: g,
      onViewportChange: v,
      indicatorTrack: y,
      onIndicatorTrackChange: C,
      onTriggerEnter: be(d),
      onTriggerLeave: be(f),
      onContentEnter: be(p),
      onContentLeave: be(m),
      onItemSelect: be(c),
      onItemDismiss: be(u),
      onViewportContentChange: h.useCallback((M, E) => {
        b((A) => (A.set(M, E), new Map(A)));
      }, []),
      onViewportContentRemove: h.useCallback((M) => {
        b((E) => E.has(M) ? (E.delete(M), new Map(E)) : E);
      }, []),
      children: /* @__PURE__ */ a(La.Provider, { scope: t, children: /* @__PURE__ */ a(Y8, { scope: t, items: w, children: i }) })
    }
  );
}, xp = "NavigationMenuList", kp = h.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = rt(xp, n), s = /* @__PURE__ */ a(z.ul, { "data-orientation": o.orientation, ...r, ref: t });
    return /* @__PURE__ */ a(z.div, { style: { position: "relative" }, ref: o.onIndicatorTrackChange, children: /* @__PURE__ */ a(La.Slot, { scope: n, children: o.isRootMenu ? /* @__PURE__ */ a(Tp, { asChild: !0, children: s }) : s }) });
  }
);
kp.displayName = xp;
var Sp = "NavigationMenuItem", [q8, Mp] = Ra(Sp), Ep = h.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, value: r, ...o } = e, s = Je(), i = r || s || "LEGACY_REACT_AUTO_VALUE", l = h.useRef(null), c = h.useRef(null), u = h.useRef(null), d = h.useRef(() => {
    }), f = h.useRef(!1), p = h.useCallback((g = "start") => {
      if (l.current) {
        d.current();
        const v = ii(l.current);
        v.length && _a(g === "start" ? v : v.reverse());
      }
    }, []), m = h.useCallback(() => {
      if (l.current) {
        const g = ii(l.current);
        g.length && (d.current = l7(g));
      }
    }, []);
    return /* @__PURE__ */ a(
      q8,
      {
        scope: n,
        value: i,
        triggerRef: c,
        contentRef: l,
        focusProxyRef: u,
        wasEscapeCloseRef: f,
        onEntryKeyDown: p,
        onFocusProxyEnter: p,
        onRootContentClose: m,
        onContentFocusOutside: m,
        children: /* @__PURE__ */ a(z.li, { ...o, ref: t })
      }
    );
  }
);
Ep.displayName = Sp;
var si = "NavigationMenuTrigger", Q8 = h.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, disabled: r, ...o } = e, s = rt(si, e.__scopeNavigationMenu), i = Mp(si, e.__scopeNavigationMenu), l = h.useRef(null), c = te(l, i.triggerRef, t), u = Rp(s.baseId, i.value), d = Dp(s.baseId, i.value), f = h.useRef(!1), p = h.useRef(!1), m = i.value === s.value;
  return /* @__PURE__ */ k(me, { children: [
    /* @__PURE__ */ a(La.ItemSlot, { scope: n, value: i.value, children: /* @__PURE__ */ a(Lp, { asChild: !0, children: /* @__PURE__ */ a(
      z.button,
      {
        id: u,
        disabled: r,
        "data-disabled": r ? "" : void 0,
        "data-state": Ia(m),
        "aria-expanded": m,
        "aria-controls": d,
        ...o,
        ref: c,
        onPointerEnter: O(e.onPointerEnter, () => {
          p.current = !1, i.wasEscapeCloseRef.current = !1;
        }),
        onPointerMove: O(
          e.onPointerMove,
          uo(() => {
            r || p.current || i.wasEscapeCloseRef.current || f.current || (s.onTriggerEnter(i.value), f.current = !0);
          })
        ),
        onPointerLeave: O(
          e.onPointerLeave,
          uo(() => {
            r || (s.onTriggerLeave(), f.current = !1);
          })
        ),
        onClick: O(e.onClick, () => {
          s.onItemSelect(i.value), p.current = m;
        }),
        onKeyDown: O(e.onKeyDown, (g) => {
          const w = { horizontal: "ArrowDown", vertical: s.dir === "rtl" ? "ArrowLeft" : "ArrowRight" }[s.orientation];
          m && g.key === w && (i.onEntryKeyDown(), g.preventDefault());
        })
      }
    ) }) }),
    m && /* @__PURE__ */ k(me, { children: [
      /* @__PURE__ */ a(
        Hm,
        {
          "aria-hidden": !0,
          tabIndex: 0,
          ref: i.focusProxyRef,
          onFocus: (g) => {
            const v = i.contentRef.current, w = g.relatedTarget, b = w === l.current, y = v == null ? void 0 : v.contains(w);
            (b || !y) && i.onFocusProxyEnter(b ? "start" : "end");
          }
        }
      ),
      s.viewport && /* @__PURE__ */ a("span", { "aria-owns": d })
    ] })
  ] });
});
Q8.displayName = si;
var J8 = "NavigationMenuLink", qc = "navigationMenu.linkSelect", Pp = h.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, active: r, onSelect: o, ...s } = e;
    return /* @__PURE__ */ a(Lp, { asChild: !0, children: /* @__PURE__ */ a(
      z.a,
      {
        "data-active": r ? "" : void 0,
        "aria-current": r ? "page" : void 0,
        ...s,
        ref: t,
        onClick: O(
          e.onClick,
          (i) => {
            const l = i.target, c = new CustomEvent(qc, {
              bubbles: !0,
              cancelable: !0
            });
            if (l.addEventListener(qc, (u) => o == null ? void 0 : o(u), { once: !0 }), Rs(l, c), !c.defaultPrevented && !i.metaKey) {
              const u = new CustomEvent(zr, {
                bubbles: !0,
                cancelable: !0
              });
              Rs(l, u);
            }
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Pp.displayName = J8;
var Da = "NavigationMenuIndicator", e7 = h.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = rt(Da, e.__scopeNavigationMenu), s = !!o.value;
  return o.indicatorTrack ? fu.createPortal(
    /* @__PURE__ */ a(Fe, { present: n || s, children: /* @__PURE__ */ a(t7, { ...r, ref: t }) }),
    o.indicatorTrack
  ) : null;
});
e7.displayName = Da;
var t7 = h.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, ...r } = e, o = rt(Da, n), s = yp(n), [i, l] = h.useState(
    null
  ), [c, u] = h.useState(null), d = o.orientation === "horizontal", f = !!o.value;
  h.useEffect(() => {
    var v;
    const g = (v = s().find((w) => w.value === o.value)) == null ? void 0 : v.ref.current;
    g && l(g);
  }, [s, o.value]);
  const p = () => {
    i && u({
      size: d ? i.offsetWidth : i.offsetHeight,
      offset: d ? i.offsetLeft : i.offsetTop
    });
  };
  return ai(i, p), ai(o.indicatorTrack, p), c ? /* @__PURE__ */ a(
    z.div,
    {
      "aria-hidden": !0,
      "data-state": f ? "visible" : "hidden",
      "data-orientation": o.orientation,
      ...r,
      ref: t,
      style: {
        position: "absolute",
        ...d ? {
          left: 0,
          width: c.size + "px",
          transform: `translateX(${c.offset}px)`
        } : {
          top: 0,
          height: c.size + "px",
          transform: `translateY(${c.offset}px)`
        },
        ...r.style
      }
    }
  ) : null;
}), Rn = "NavigationMenuContent", n7 = h.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, o = rt(Rn, e.__scopeNavigationMenu), s = Mp(Rn, e.__scopeNavigationMenu), i = te(s.contentRef, t), l = s.value === o.value, c = {
    value: s.value,
    triggerRef: s.triggerRef,
    focusProxyRef: s.focusProxyRef,
    wasEscapeCloseRef: s.wasEscapeCloseRef,
    onContentFocusOutside: s.onContentFocusOutside,
    onRootContentClose: s.onRootContentClose,
    ...r
  };
  return o.viewport ? /* @__PURE__ */ a(r7, { forceMount: n, ...c, ref: i }) : /* @__PURE__ */ a(Fe, { present: n || l, children: /* @__PURE__ */ a(
    Np,
    {
      "data-state": Ia(l),
      ...c,
      ref: i,
      onPointerEnter: O(e.onPointerEnter, o.onContentEnter),
      onPointerLeave: O(
        e.onPointerLeave,
        uo(o.onContentLeave)
      ),
      style: {
        // Prevent interaction when animating out
        pointerEvents: !l && o.isRootMenu ? "none" : void 0,
        ...c.style
      }
    }
  ) });
});
n7.displayName = Rn;
var r7 = h.forwardRef((e, t) => {
  const n = rt(Rn, e.__scopeNavigationMenu), { onViewportContentChange: r, onViewportContentRemove: o } = n;
  return Ee(() => {
    r(e.value, {
      ref: t,
      ...e
    });
  }, [e, t, r]), Ee(() => () => o(e.value), [e.value, o]), null;
}), zr = "navigationMenu.rootContentDismiss", Np = h.forwardRef((e, t) => {
  const {
    __scopeNavigationMenu: n,
    value: r,
    triggerRef: o,
    focusProxyRef: s,
    wasEscapeCloseRef: i,
    onRootContentClose: l,
    onContentFocusOutside: c,
    ...u
  } = e, d = rt(Rn, n), f = h.useRef(null), p = te(f, t), m = Rp(d.baseId, r), g = Dp(d.baseId, r), v = yp(n), w = h.useRef(null), { onItemDismiss: b } = d;
  h.useEffect(() => {
    const C = f.current;
    if (d.isRootMenu && C) {
      const M = () => {
        var E;
        b(), l(), C.contains(document.activeElement) && ((E = o.current) == null || E.focus());
      };
      return C.addEventListener(zr, M), () => C.removeEventListener(zr, M);
    }
  }, [d.isRootMenu, e.value, o, b, l]);
  const y = h.useMemo(() => {
    const M = v().map((W) => W.value);
    d.dir === "rtl" && M.reverse();
    const E = M.indexOf(d.value), A = M.indexOf(d.previousValue), B = r === d.value, L = A === M.indexOf(r);
    if (!B && !L) return w.current;
    const D = (() => {
      if (E !== A) {
        if (B && A !== -1) return E > A ? "from-end" : "from-start";
        if (L && E !== -1) return E > A ? "to-start" : "to-end";
      }
      return null;
    })();
    return w.current = D, D;
  }, [d.previousValue, d.value, d.dir, v, r]);
  return /* @__PURE__ */ a(Tp, { asChild: !0, children: /* @__PURE__ */ a(
    vo,
    {
      id: g,
      "aria-labelledby": m,
      "data-motion": y,
      "data-orientation": d.orientation,
      ...u,
      ref: p,
      disableOutsidePointerEvents: !1,
      onDismiss: () => {
        var M;
        const C = new Event(zr, {
          bubbles: !0,
          cancelable: !0
        });
        (M = f.current) == null || M.dispatchEvent(C);
      },
      onFocusOutside: O(e.onFocusOutside, (C) => {
        var E;
        c();
        const M = C.target;
        (E = d.rootNavigationMenu) != null && E.contains(M) && C.preventDefault();
      }),
      onPointerDownOutside: O(e.onPointerDownOutside, (C) => {
        var B;
        const M = C.target, E = v().some((L) => {
          var D;
          return (D = L.ref.current) == null ? void 0 : D.contains(M);
        }), A = d.isRootMenu && ((B = d.viewport) == null ? void 0 : B.contains(M));
        (E || A || !d.isRootMenu) && C.preventDefault();
      }),
      onKeyDown: O(e.onKeyDown, (C) => {
        var A;
        const M = C.altKey || C.ctrlKey || C.metaKey;
        if (C.key === "Tab" && !M) {
          const B = ii(C.currentTarget), L = document.activeElement, D = B.findIndex((j) => j === L), Q = C.shiftKey ? B.slice(0, D).reverse() : B.slice(D + 1, B.length);
          _a(Q) ? C.preventDefault() : (A = s.current) == null || A.focus();
        }
      }),
      onEscapeKeyDown: O(e.onEscapeKeyDown, (C) => {
        i.current = !0;
      })
    }
  ) });
}), Aa = "NavigationMenuViewport", o7 = h.forwardRef((e, t) => {
  const { forceMount: n, ...r } = e, s = !!rt(Aa, e.__scopeNavigationMenu).value;
  return /* @__PURE__ */ a(Fe, { present: n || s, children: /* @__PURE__ */ a(s7, { ...r, ref: t }) });
});
o7.displayName = Aa;
var s7 = h.forwardRef((e, t) => {
  const { __scopeNavigationMenu: n, children: r, ...o } = e, s = rt(Aa, n), i = te(t, s.onViewportChange), l = Z8(
    Rn,
    e.__scopeNavigationMenu
  ), [c, u] = h.useState(null), [d, f] = h.useState(null), p = c ? (c == null ? void 0 : c.width) + "px" : void 0, m = c ? (c == null ? void 0 : c.height) + "px" : void 0, g = !!s.value, v = g ? s.value : s.previousValue;
  return ai(d, () => {
    d && u({ width: d.offsetWidth, height: d.offsetHeight });
  }), /* @__PURE__ */ a(
    z.div,
    {
      "data-state": Ia(g),
      "data-orientation": s.orientation,
      ...o,
      ref: i,
      style: {
        // Prevent interaction when animating out
        pointerEvents: !g && s.isRootMenu ? "none" : void 0,
        "--radix-navigation-menu-viewport-width": p,
        "--radix-navigation-menu-viewport-height": m,
        ...o.style
      },
      onPointerEnter: O(e.onPointerEnter, s.onContentEnter),
      onPointerLeave: O(e.onPointerLeave, uo(s.onContentLeave)),
      children: Array.from(l.items).map(([b, { ref: y, forceMount: C, ...M }]) => {
        const E = v === b;
        return /* @__PURE__ */ a(Fe, { present: C || E, children: /* @__PURE__ */ a(
          Np,
          {
            ...M,
            ref: hi(y, (A) => {
              E && A && f(A);
            })
          }
        ) }, b);
      })
    }
  );
}), i7 = "FocusGroup", Tp = h.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = rt(i7, n);
    return /* @__PURE__ */ a(oi.Provider, { scope: n, children: /* @__PURE__ */ a(oi.Slot, { scope: n, children: /* @__PURE__ */ a(z.div, { dir: o.dir, ...r, ref: t }) }) });
  }
), Qc = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"], a7 = "FocusGroupItem", Lp = h.forwardRef(
  (e, t) => {
    const { __scopeNavigationMenu: n, ...r } = e, o = G8(n), s = rt(a7, n);
    return /* @__PURE__ */ a(oi.ItemSlot, { scope: n, children: /* @__PURE__ */ a(
      z.button,
      {
        ...r,
        ref: t,
        onKeyDown: O(e.onKeyDown, (i) => {
          if (["Home", "End", ...Qc].includes(i.key)) {
            let c = o().map((f) => f.ref.current);
            if ([s.dir === "rtl" ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(i.key) && c.reverse(), Qc.includes(i.key)) {
              const f = c.indexOf(i.currentTarget);
              c = c.slice(f + 1);
            }
            setTimeout(() => _a(c)), i.preventDefault();
          }
        })
      }
    ) });
  }
);
function ii(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function _a(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
function l7(e) {
  return e.forEach((t) => {
    t.dataset.tabindex = t.getAttribute("tabindex") || "", t.setAttribute("tabindex", "-1");
  }), () => {
    e.forEach((t) => {
      const n = t.dataset.tabindex;
      t.setAttribute("tabindex", n);
    });
  };
}
function ai(e, t) {
  const n = be(t);
  Ee(() => {
    let r = 0;
    if (e) {
      const o = new ResizeObserver(() => {
        cancelAnimationFrame(r), r = window.requestAnimationFrame(n);
      });
      return o.observe(e), () => {
        window.cancelAnimationFrame(r), o.unobserve(e);
      };
    }
  }, [e, n]);
}
function Ia(e) {
  return e ? "open" : "closed";
}
function Rp(e, t) {
  return `${e}-trigger-${t}`;
}
function Dp(e, t) {
  return `${e}-content-${t}`;
}
function uo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var c7 = wp, u7 = kp, d7 = Ep, f7 = Pp;
function h7(e, t) {
  const { asChild: n, children: r } = e;
  if (!n)
    return typeof t == "function" ? t(r) : t;
  const o = h.Children.only(r);
  return h.cloneElement(o, {
    children: typeof t == "function" ? t(o.props.children) : t
  });
}
const p7 = Be(
  "flex items-center justify-start gap-1 overflow-x-auto whitespace-nowrap border-x-0 border-b border-t-0 border-solid border-f1-border-secondary px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  {
    variants: {
      secondary: {
        true: "bg-f1-background-secondary/25",
        false: "bg-f1-background-transparent"
      }
    },
    defaultVariants: {
      secondary: !1
    }
  }
), Ap = h.forwardRef(({ className: e, children: t, secondary: n, ...r }, o) => {
  const s = yo();
  return /* @__PURE__ */ a(
    c7,
    {
      ref: o,
      ...r,
      asChild: !1,
      children: /* @__PURE__ */ a(D2, { id: s, children: /* @__PURE__ */ a(
        u7,
        {
          className: T(p7({ secondary: n }), e),
          children: t
        }
      ) })
    }
  );
});
Ap.displayName = "TabNavigation";
const m7 = Be(
  "flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 font-medium transition-all",
  {
    variants: {
      secondary: {
        true: "bg-f1-background/60 group-hover:border-f1-border group-data-[active=true]:border-f1-border group-data-[active=true]:text-f1-foreground",
        false: "bg-f1-background-transparent group-hover:bg-f1-background-secondary group-hover:text-f1-foreground group-data-[active=true]:bg-f1-background-secondary group-data-[active=true]:text-f1-foreground"
      },
      disabled: {
        true: "pointer-events-none text-f1-foreground-disabled"
      }
    },
    defaultVariants: {
      secondary: !1,
      disabled: !1
    }
  }
), _p = h.forwardRef(
  ({ asChild: e, disabled: t, active: n, className: r, children: o, secondary: s, ...i }, l) => /* @__PURE__ */ a(d7, { className: "flex", children: /* @__PURE__ */ a(
    f7,
    {
      "data-active": n ? "true" : void 0,
      "aria-disabled": t || void 0,
      className: T(
        "group relative flex shrink-0 select-none items-center justify-center rounded-md no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-ring focus-visible:ring-offset-1",
        t ? "pointer-events-none" : ""
      ),
      ref: l,
      onSelect: () => {
      },
      asChild: e,
      ...i,
      children: h7({ asChild: e, children: o }, (c) => /* @__PURE__ */ k(
        "span",
        {
          className: T(
            "border border-solid border-transparent text-f1-foreground-secondary",
            m7({ secondary: s, disabled: t }),
            r
          ),
          children: [
            c,
            n && !s && /* @__PURE__ */ a(
              It.div,
              {
                layoutId: "underline",
                className: "absolute inset-x-0 -bottom-3 h-px bg-f1-background-bold",
                transition: {
                  type: "spring",
                  bounce: 0.2,
                  duration: 0.5
                }
              }
            )
          ]
        }
      ))
    }
  ) })
);
_p.displayName = "TabNavigationLink";
function MS({ tabs: e, secondary: t = !1 }) {
  const { isActive: n } = di();
  return /* @__PURE__ */ a(Ap, { secondary: t, children: e.map(({ label: r, ...o }, s) => /* @__PURE__ */ a(
    _p,
    {
      active: n(o.href, { exact: o.exactMatch }),
      href: o.href,
      secondary: t,
      asChild: !0,
      children: /* @__PURE__ */ a(ln, { ...o, children: r })
    },
    s
  )) });
}
var Va = "Dialog", [Ip, ES] = wt(Va), [g7, ct] = Ip(Va), Vp = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: s,
    modal: i = !0
  } = e, l = h.useRef(null), c = h.useRef(null), [u = !1, d] = st({
    prop: r,
    defaultProp: o,
    onChange: s
  });
  return /* @__PURE__ */ a(
    g7,
    {
      scope: t,
      triggerRef: l,
      contentRef: c,
      contentId: Je(),
      titleId: Je(),
      descriptionId: Je(),
      open: u,
      onOpenChange: d,
      onOpenToggle: h.useCallback(() => d((f) => !f), [d]),
      modal: i,
      children: n
    }
  );
};
Vp.displayName = Va;
var Op = "DialogTrigger", v7 = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ct(Op, n), s = te(t, o.triggerRef);
    return /* @__PURE__ */ a(
      z.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": Ba(o.open),
        ...r,
        ref: s,
        onClick: O(e.onClick, o.onOpenToggle)
      }
    );
  }
);
v7.displayName = Op;
var Oa = "DialogPortal", [y7, Fp] = Ip(Oa, {
  forceMount: void 0
}), Bp = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, s = ct(Oa, t);
  return /* @__PURE__ */ a(y7, { scope: t, forceMount: n, children: h.Children.map(r, (i) => /* @__PURE__ */ a(Fe, { present: n || s.open, children: /* @__PURE__ */ a(wo, { asChild: !0, container: o, children: i }) })) });
};
Bp.displayName = Oa;
var fo = "DialogOverlay", $p = h.forwardRef(
  (e, t) => {
    const n = Fp(fo, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = ct(fo, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ a(Fe, { present: r || s.open, children: /* @__PURE__ */ a(w7, { ...o, ref: t }) }) : null;
  }
);
$p.displayName = fo;
var w7 = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ct(fo, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ a(Bo, { as: En, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ a(
        z.div,
        {
          "data-state": Ba(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), an = "DialogContent", Wp = h.forwardRef(
  (e, t) => {
    const n = Fp(an, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, s = ct(an, e.__scopeDialog);
    return /* @__PURE__ */ a(Fe, { present: r || s.open, children: s.modal ? /* @__PURE__ */ a(b7, { ...o, ref: t }) : /* @__PURE__ */ a(C7, { ...o, ref: t }) });
  }
);
Wp.displayName = an;
var b7 = h.forwardRef(
  (e, t) => {
    const n = ct(an, e.__scopeDialog), r = h.useRef(null), o = te(t, n.contentRef, r);
    return h.useEffect(() => {
      const s = r.current;
      if (s) return ua(s);
    }, []), /* @__PURE__ */ a(
      jp,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: O(e.onCloseAutoFocus, (s) => {
          var i;
          s.preventDefault(), (i = n.triggerRef.current) == null || i.focus();
        }),
        onPointerDownOutside: O(e.onPointerDownOutside, (s) => {
          const i = s.detail.originalEvent, l = i.button === 0 && i.ctrlKey === !0;
          (i.button === 2 || l) && s.preventDefault();
        }),
        onFocusOutside: O(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), C7 = h.forwardRef(
  (e, t) => {
    const n = ct(an, e.__scopeDialog), r = h.useRef(!1), o = h.useRef(!1);
    return /* @__PURE__ */ a(
      jp,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var i, l;
          (i = e.onCloseAutoFocus) == null || i.call(e, s), s.defaultPrevented || (r.current || (l = n.triggerRef.current) == null || l.focus(), s.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (s) => {
          var c, u;
          (c = e.onInteractOutside) == null || c.call(e, s), s.defaultPrevented || (r.current = !0, s.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const i = s.target;
          ((u = n.triggerRef.current) == null ? void 0 : u.contains(i)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && o.current && s.preventDefault();
        }
      }
    );
  }
), jp = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: s, ...i } = e, l = ct(an, n), c = h.useRef(null), u = te(t, c);
    return ca(), /* @__PURE__ */ k(me, { children: [
      /* @__PURE__ */ a(
        Oo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ a(
            vo,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": Ba(l.open),
              ...i,
              ref: u,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ k(me, { children: [
        /* @__PURE__ */ a(x7, { titleId: l.titleId }),
        /* @__PURE__ */ a(S7, { contentRef: c, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), Fa = "DialogTitle", Hp = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ct(Fa, n);
    return /* @__PURE__ */ a(z.h2, { id: o.titleId, ...r, ref: t });
  }
);
Hp.displayName = Fa;
var Up = "DialogDescription", Gp = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ct(Up, n);
    return /* @__PURE__ */ a(z.p, { id: o.descriptionId, ...r, ref: t });
  }
);
Gp.displayName = Up;
var zp = "DialogClose", Kp = h.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = ct(zp, n);
    return /* @__PURE__ */ a(
      z.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: O(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
Kp.displayName = zp;
function Ba(e) {
  return e ? "open" : "closed";
}
var Yp = "DialogTitleWarning", [PS, Zp] = Um(Yp, {
  contentName: an,
  titleName: Fa,
  docsSlug: "dialog"
}), x7 = ({ titleId: e }) => {
  const t = Zp(Yp), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return h.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, k7 = "DialogDescriptionWarning", S7 = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Zp(k7).contentName}}.`;
  return h.useEffect(() => {
    var s;
    const o = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, M7 = Vp, E7 = Bp, Xp = $p, qp = Wp, Qp = Hp, Jp = Gp, P7 = Kp;
const N7 = M7, T7 = E7, em = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Xp,
  {
    ref: n,
    className: T(
      "fixed inset-0 z-50 bg-f1-background-bold/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
em.displayName = Xp.displayName;
const tm = h.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ a(T7, { children: /* @__PURE__ */ a(em, { className: "grid place-items-center overflow-y-auto sm:p-8", children: /* @__PURE__ */ k(
  qp,
  {
    ref: r,
    onInteractOutside: (o) => o.preventDefault(),
    className: T(
      "relative z-50 grid w-full origin-center gap-4 border bg-f1-background p-8 shadow-xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:w-fit sm:min-w-[400px] sm:rounded-xl md:min-w-[456px]",
      e
    ),
    ...n,
    children: [
      t,
      /* @__PURE__ */ k(P7, { className: "ring-offset-background focus:ring-ring absolute right-2 top-2 rounded-2xs p-2 text-f1-foreground opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-f1-background-secondary data-[state=open]:text-f1-foreground-secondary", children: [
        /* @__PURE__ */ a(Kb, { className: "h-5 w-5" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "Close" })
      ] })
    ]
  }
) }) }));
tm.displayName = qp.displayName;
const nm = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "div",
  {
    className: T(
      "text-icon-neutral-bold absolute left-8 top-0 h-16 w-16 translate-y-[-50%] rounded-xl bg-f1-background p-4 shadow-md",
      e
    ),
    ...t
  }
);
nm.displayName = "DialogIcon";
const rm = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a("div", { className: T("mt-5 flex flex-col text-left", e), ...t });
rm.displayName = "DialogHeader";
const om = ({
  className: e,
  ...t
}) => /* @__PURE__ */ a(
  "div",
  {
    className: T(
      "-mx-8 -mb-8 mt-4 flex flex-col-reverse gap-0 rounded-bl-xl rounded-br-xl border-0 border-t border-solid border-f1-border bg-f1-background-secondary/50 px-8 py-4 sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
om.displayName = "DialogFooter";
const sm = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Qp,
  {
    ref: n,
    className: T("mt-1 text-xl font-medium leading-none", e),
    ...t
  }
));
sm.displayName = Qp.displayName;
const im = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  Jp,
  {
    ref: n,
    className: T("mt-2 text-base text-f1-foreground-secondary", e),
    ...t
  }
));
im.displayName = Jp.displayName;
function ho({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: T(
        "animate-pulse rounded-xs bg-f1-background-secondary",
        e
      ),
      ...t
    }
  );
}
const am = P(
  ({ header: e, children: t, loading: n, actions: r, open: o, onClose: s }, i) => {
    const [l, c] = Ce(!1), u = rn(() => {
      c(!0);
      const d = setTimeout(() => {
        s == null || s(), c(!1);
      }, 200);
      return () => clearTimeout(d);
    }, [s]);
    return /* @__PURE__ */ a(
      N7,
      {
        open: o && !l,
        onOpenChange: (d) => !d && (u == null ? void 0 : u()),
        children: /* @__PURE__ */ k(tm, { ref: i, children: [
          e && /* @__PURE__ */ k(rm, { children: [
            e.icon && /* @__PURE__ */ a(nm, { children: /* @__PURE__ */ a(Ae, { size: "lg", icon: e.icon }) }),
            /* @__PURE__ */ a(sm, { children: e.title }),
            /* @__PURE__ */ a(im, { children: e.description })
          ] }),
          /* @__PURE__ */ a("div", { className: "flex-grow flex-col", children: n ? /* @__PURE__ */ k("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ a(ho, { className: "h-6 w-full rounded-full" }),
            /* @__PURE__ */ a(ho, { className: "h-6 w-full rounded-full" })
          ] }) : t }),
          r && /* @__PURE__ */ k(om, { children: [
            r.secondary && /* @__PURE__ */ a(nn, { variant: "outline", ...r.secondary }),
            /* @__PURE__ */ a(nn, { variant: "default", ...r.primary })
          ] })
        ] })
      }
    );
  }
);
am.displayName = "Dialog";
const NS = Te(
  {
    name: "Dialog",
    type: "info"
  },
  am
), lm = P(
  ({ children: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, ...t, className: "relative flex flex-1 [&>div]:flex-1", children: e })
);
lm.displayName = "FullscreenLayout";
const L7 = P(
  function({ children: t, sideContent: n }, r) {
    return /* @__PURE__ */ a("div", { ref: r, className: "overflow-auto sm:min-h-full", children: /* @__PURE__ */ k("div", { className: "flex flex-col-reverse overflow-auto text-f1-foreground sm:min-h-full sm:flex-row", children: [
      /* @__PURE__ */ a("div", { className: "px-6 py-5 sm:basis-3/4", children: t }),
      /* @__PURE__ */ a("div", { className: "border-0 py-5 pl-2 pr-4 sm:basis-1/4 sm:border-l sm:border-solid sm:border-l-f1-border-secondary sm:pb-6", children: n })
    ] }) });
  }
), R7 = Be(
  "relative flex w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  {
    variants: {
      variant: {
        narrow: "max-w-screen-lg"
      }
    }
  }
);
function TS({ children: e, variant: t }) {
  return /* @__PURE__ */ a("div", { className: "relative flex-1 overflow-auto", children: /* @__PURE__ */ a("div", { className: T(R7({ variant: t })), children: e }) });
}
const D7 = 750, A7 = ({ text: e, children: t }) => {
  const [n, r] = Ce(!1);
  Le(() => {
    if (n) {
      const s = setTimeout(() => r(!1), D7);
      return () => clearTimeout(s);
    }
  }, [n]);
  const o = async () => {
    try {
      await navigator.clipboard.writeText(e), r(!0);
    } catch {
    }
  };
  return /* @__PURE__ */ k(
    "button",
    {
      type: "button",
      "aria-label": n ? "Copied!" : `Copy ${e}`,
      className: T(
        "group flex items-center gap-1.5 rounded p-1.5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold",
        "transition-colors duration-300 hover:bg-f1-background-hover active:bg-f1-background-secondary-hover",
        n ? "hover:bg-f1-background-positive focus-visible:bg-f1-background-positive" : void 0
      ),
      onClick: o,
      children: [
        t,
        /* @__PURE__ */ k("div", { className: "grid", children: [
          /* @__PURE__ */ a(
            Ae,
            {
              icon: ff,
              size: "md",
              "aria-hidden": !0,
              className: T(
                "col-start-1 col-end-2 row-start-1 row-end-2",
                "opacity-0 transition-opacity duration-300",
                !n && "group-hover:opacity-100 group-focus-visible:opacity-100"
              )
            }
          ),
          /* @__PURE__ */ a(
            Ae,
            {
              icon: Ki,
              size: "md",
              "aria-hidden": !0,
              className: T(
                "col-start-1 col-end-2 row-start-1 row-end-2",
                // place to the same cell
                "text-f1-icon-positive opacity-0 transition-opacity duration-300",
                n && "group-hover:opacity-100 group-focus-visible:opacity-100"
              )
            }
          )
        ] })
      ]
    }
  );
}, cm = rg(
  ({ children: e, className: t, ...n }) => /* @__PURE__ */ k(
    ln,
    {
      ...n,
      className: T(
        "text-inherit group flex items-center gap-1.5 rounded p-1.5 text-f1-foreground",
        "no-underline hover:bg-f1-background-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-f1-border-selected-bold active:bg-f1-background-secondary-hover",
        t
      ),
      children: [
        e,
        /* @__PURE__ */ a("div", { className: "grid", children: /* @__PURE__ */ a(
          Ae,
          {
            "aria-hidden": !0,
            icon: fr,
            size: "md",
            className: "opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:opacity-100"
          }
        ) })
      ]
    }
  )
);
cm.displayName = "NavigateAction";
const xr = P(
  (e, t) => {
    const {
      text: n,
      leftIcon: r,
      className: o,
      action: s = { type: "noop" }
    } = e;
    return /* @__PURE__ */ a(
      "li",
      {
        className: "flex rounded font-medium text-f1-foreground *:flex-1",
        ref: t,
        children: /* @__PURE__ */ k(
          _7,
          {
            action: s,
            className: T("flex items-center gap-1.5 p-1.5", o),
            children: [
              r && (typeof r == "function" ? r({}) : /* @__PURE__ */ a(Ae, { icon: r, size: "md", "aria-hidden": "true" })),
              /* @__PURE__ */ a("div", { className: "line-clamp-2 flex-1 text-left", children: n })
            ]
          }
        )
      }
    );
  }
);
xr.displayName = "ItemContainer";
const _7 = ({
  children: e,
  action: t,
  ...n
}) => {
  const r = t.type;
  switch (r) {
    case "copy":
      return /* @__PURE__ */ a(A7, { ...t, ...n, children: e });
    case "navigate":
      return /* @__PURE__ */ a(cm, { ...t, ...n, children: e });
    case "noop":
      return /* @__PURE__ */ a("div", { ...n, children: e });
    default:
      return r;
  }
}, um = P(
  ({ children: e, label: t }, n) => /* @__PURE__ */ k("div", { className: "min-w-32 max-w-72", children: [
    t && /* @__PURE__ */ a("p", { className: "mb-0.5 px-1.5 text-f1-foreground-secondary", children: t }),
    /* @__PURE__ */ a("ul", { className: "flex flex-col gap-0.5", ref: n, children: e })
  ] })
);
um.displayName = "DataList";
const dm = P(
  ({ text: e, icon: t, action: n }, r) => /* @__PURE__ */ a(
    xr,
    {
      ref: r,
      text: e,
      leftIcon: t,
      action: Xo(n, e)
    }
  )
);
dm.displayName = "DataList.Item";
const fm = P(
  ({ action: e, avatarUrl: t, firstName: n, lastName: r }, o) => {
    const s = `${n} ${r}`;
    return /* @__PURE__ */ a(
      xr,
      {
        ref: o,
        leftIcon: () => /* @__PURE__ */ a(
          Vo,
          {
            size: "xsmall",
            src: t,
            firstName: n,
            lastName: r
          }
        ),
        text: s,
        action: Xo(e, s)
      }
    );
  }
);
fm.displayName = "PersonItem";
const hm = P(
  ({ avatarUrl: e, name: t, action: n }, r) => /* @__PURE__ */ a(
    xr,
    {
      ref: r,
      leftIcon: () => /* @__PURE__ */ a(Io, { name: t, size: "xsmall", src: e }),
      text: t,
      action: Xo(n, t)
    }
  )
);
hm.displayName = "CompanyItem";
const pm = P(
  ({ action: e, name: t }, n) => /* @__PURE__ */ a(
    xr,
    {
      ref: n,
      leftIcon: () => /* @__PURE__ */ a(la, { name: t, size: "xsmall" }),
      text: t,
      action: Xo(e, t)
    }
  )
);
pm.displayName = "TeamItem";
const Xo = (e, t) => e && e.type === "copy" ? { type: "copy", text: e.text ?? t } : e, zn = Object.assign(um, {
  Item: dm,
  CompanyItem: hm,
  PersonItem: fm,
  TeamItem: pm
});
var I7 = "Toggle", $a = h.forwardRef((e, t) => {
  const { pressed: n, defaultPressed: r = !1, onPressedChange: o, ...s } = e, [i = !1, l] = st({
    prop: n,
    onChange: o,
    defaultProp: r
  });
  return /* @__PURE__ */ a(
    z.button,
    {
      type: "button",
      "aria-pressed": i,
      "data-state": i ? "on" : "off",
      "data-disabled": e.disabled ? "" : void 0,
      ...s,
      ref: t,
      onClick: O(e.onClick, () => {
        e.disabled || l(!i);
      })
    }
  );
});
$a.displayName = I7;
var mm = $a, On = "ToggleGroup", [gm, LS] = wt(On, [
  Ko
]), vm = Ko(), Wa = ee.forwardRef((e, t) => {
  const { type: n, ...r } = e;
  if (n === "single")
    return /* @__PURE__ */ a(V7, { ...r, ref: t });
  if (n === "multiple")
    return /* @__PURE__ */ a(O7, { ...r, ref: t });
  throw new Error(`Missing prop \`type\` expected on \`${On}\``);
});
Wa.displayName = On;
var [ym, wm] = gm(On), V7 = ee.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [i, l] = st({
    prop: n,
    defaultProp: r,
    onChange: o
  });
  return /* @__PURE__ */ a(
    ym,
    {
      scope: e.__scopeToggleGroup,
      type: "single",
      value: i ? [i] : [],
      onItemActivate: l,
      onItemDeactivate: ee.useCallback(() => l(""), [l]),
      children: /* @__PURE__ */ a(bm, { ...s, ref: t })
    }
  );
}), O7 = ee.forwardRef((e, t) => {
  const {
    value: n,
    defaultValue: r,
    onValueChange: o = () => {
    },
    ...s
  } = e, [i = [], l] = st({
    prop: n,
    defaultProp: r,
    onChange: o
  }), c = ee.useCallback(
    (d) => l((f = []) => [...f, d]),
    [l]
  ), u = ee.useCallback(
    (d) => l((f = []) => f.filter((p) => p !== d)),
    [l]
  );
  return /* @__PURE__ */ a(
    ym,
    {
      scope: e.__scopeToggleGroup,
      type: "multiple",
      value: i,
      onItemActivate: c,
      onItemDeactivate: u,
      children: /* @__PURE__ */ a(bm, { ...s, ref: t })
    }
  );
});
Wa.displayName = On;
var [F7, B7] = gm(On), bm = ee.forwardRef(
  (e, t) => {
    const {
      __scopeToggleGroup: n,
      disabled: r = !1,
      rovingFocus: o = !0,
      orientation: s,
      dir: i,
      loop: l = !0,
      ...c
    } = e, u = vm(n), d = _n(i), f = { role: "group", dir: d, ...c };
    return /* @__PURE__ */ a(F7, { scope: n, rovingFocus: o, disabled: r, children: o ? /* @__PURE__ */ a(
      m1,
      {
        asChild: !0,
        ...u,
        orientation: s,
        dir: d,
        loop: l,
        children: /* @__PURE__ */ a(z.div, { ...f, ref: t })
      }
    ) : /* @__PURE__ */ a(z.div, { ...f, ref: t }) });
  }
), po = "ToggleGroupItem", Cm = ee.forwardRef(
  (e, t) => {
    const n = wm(po, e.__scopeToggleGroup), r = B7(po, e.__scopeToggleGroup), o = vm(e.__scopeToggleGroup), s = n.value.includes(e.value), i = r.disabled || e.disabled, l = { ...e, pressed: s, disabled: i }, c = ee.useRef(null);
    return r.rovingFocus ? /* @__PURE__ */ a(
      g1,
      {
        asChild: !0,
        ...o,
        focusable: !i,
        active: s,
        ref: c,
        children: /* @__PURE__ */ a(Jc, { ...l, ref: t })
      }
    ) : /* @__PURE__ */ a(Jc, { ...l, ref: t });
  }
);
Cm.displayName = po;
var Jc = ee.forwardRef(
  (e, t) => {
    const { __scopeToggleGroup: n, value: r, ...o } = e, s = wm(po, n), i = { role: "radio", "aria-checked": e.pressed, "aria-pressed": void 0 }, l = s.type === "single" ? i : void 0;
    return /* @__PURE__ */ a(
      $a,
      {
        ...l,
        ...o,
        ref: t,
        onPressedChange: (c) => {
          c ? s.onItemActivate(r) : s.onItemDeactivate(r);
        }
      }
    );
  }
), xm = Wa, km = Cm;
const Sm = Be(
  T(
    "inline-flex items-center justify-center rounded-xs text-sm font-medium transition-colors hover:bg-f1-background-secondary hover:text-f1-foreground-secondary disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-f1-background-secondary data-[state=on]:text-f1-foreground",
    bt()
  ),
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-f1-border bg-transparent hover:bg-f1-background-secondary hover:text-f1-foreground"
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), $7 = h.forwardRef(({ className: e, variant: t, size: n, ...r }, o) => /* @__PURE__ */ a(
  mm,
  {
    ref: o,
    className: T(Sm({ variant: t, size: n, className: e })),
    ...r
  }
));
$7.displayName = mm.displayName;
const Mm = h.createContext({
  size: "default",
  variant: "default"
}), Em = h.forwardRef(({ className: e, variant: t, size: n, children: r, ...o }, s) => /* @__PURE__ */ a(
  xm,
  {
    ref: s,
    className: T("flex items-center justify-center gap-1", e),
    ...o,
    children: /* @__PURE__ */ a(Mm.Provider, { value: { variant: t, size: n }, children: r })
  }
));
Em.displayName = xm.displayName;
const Pm = h.forwardRef(({ className: e, children: t, variant: n, size: r, ...o }, s) => {
  const i = h.useContext(Mm);
  return /* @__PURE__ */ a(
    km,
    {
      ref: s,
      className: T(
        Sm({
          variant: i.variant || n,
          size: i.size || r
        }),
        e
      ),
      ...o,
      children: t
    }
  );
});
Pm.displayName = km.displayName;
const W7 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], j7 = P(
  function({ daysOfTheWeek: t = W7, activatedDays: n = [] }, r) {
    return /* @__PURE__ */ a(
      Em,
      {
        type: "multiple",
        value: n,
        disabled: !0,
        className: "flex justify-start",
        ref: r,
        children: t.map((o) => /* @__PURE__ */ a(
          Pm,
          {
            "aria-label": o,
            value: o,
            className: "h-6 w-6 shrink-0 grow-0 basis-6 p-0 text-sm font-medium disabled:select-none disabled:bg-f1-background-tertiary disabled:text-f1-foreground-secondary disabled:opacity-100 disabled:data-[state=on]:border disabled:data-[state=on]:border-solid disabled:data-[state=on]:border-f1-border-selected disabled:data-[state=on]:bg-f1-background-selected disabled:data-[state=on]:text-f1-foreground-selected",
            children: o[0]
          },
          o
        ))
      }
    );
  }
), H7 = ({ content: e }) => /* @__PURE__ */ k(me, { children: [
  e.type === "weekdays" && /* @__PURE__ */ a("li", { className: "list-none px-1.5 py-1", children: /* @__PURE__ */ a(j7, { ...e }) }),
  e.type === "person" && /* @__PURE__ */ a(zn.PersonItem, { ...e }),
  e.type === "item" && /* @__PURE__ */ a(zn.Item, { ...e }),
  e.type === "team" && /* @__PURE__ */ a(zn.TeamItem, { ...e }),
  e.type === "company" && /* @__PURE__ */ a(zn.CompanyItem, { ...e })
] }), U7 = P(
  function({ title: t, content: n, spacingAtTheBottom: r }, o) {
    const s = Array.isArray(n) ? n : [n];
    return /* @__PURE__ */ a(
      "div",
      {
        ref: o,
        className: T("flex flex-col gap-0.5", r && "pb-3"),
        children: /* @__PURE__ */ a(zn, { label: t, children: s.map((i, l) => /* @__PURE__ */ a(H7, { content: i }, l)) })
      }
    );
  }
), RS = P(function({ title: t, details: n }, r) {
  return /* @__PURE__ */ k("div", { ref: r, className: "flex flex-col gap-4", children: [
    !!t && /* @__PURE__ */ a("p", { className: "mb-1 pl-3 text-sm font-semibold text-f1-foreground-secondary", children: t.toLocaleUpperCase() }),
    /* @__PURE__ */ a("div", { className: "flex flex-col gap-1", children: n == null ? void 0 : n.map((o) => /* @__PURE__ */ a(
      U7,
      {
        title: o.title,
        content: o.content,
        spacingAtTheBottom: o.spacingAtTheBottom
      },
      o.title
    )) })
  ] });
}), DS = Te(
  {
    name: "InfoPaneLayout",
    type: "layout"
  },
  L7
), AS = Te(
  {
    name: "FullscreenLayout",
    type: "layout"
  },
  lm
), ja = {
  2: "gap-2",
  4: "gap-4",
  8: "gap-8"
}, G7 = Be("grid grid-cols-1", {
  variants: {
    tileSize: {
      // The amount of columns and autoflow when paginating is an issue if we
      // want to prevent orphan elments. Say, we have 10 elements, we can't just
      // render 3 rows of 3 elements and then an orphan one in the end.
      //
      // This makes sure that everything will look nice when using pages of 48
      // elements, it will always result in even rows.
      sm: "@12xl:grid-cols-16 @md:grid-cols-2 @2xl:grid-cols-3 @4xl:grid-cols-4 @8xl:grid-cols-6 @10xl:grid-cols-8 @11xl:grid-cols-12",
      md: "@lg:grid-cols-2 @4xl:grid-cols-3 @7xl:grid-cols-4 @9xl:grid-cols-6 @10xl:grid-cols-8 @12xl:grid-cols-12",
      lg: "@3xl:grid-cols-2 @7xl:grid-cols-3 @9xl:grid-cols-4 @10xl:grid-cols-6 @12xl:grid-cols-8"
    },
    gap: {
      ...ja
    }
  },
  defaultVariants: {
    tileSize: "md",
    gap: "4"
  }
}), z7 = ee.forwardRef(function({ className: t, gap: n, children: r, tileSize: o, ...s }, i) {
  return /* @__PURE__ */ a("div", { className: T("@container", "grow"), ref: i, ...s, children: /* @__PURE__ */ a(
    "div",
    {
      className: T(G7({ gap: n, tileSize: o }), t),
      ref: i,
      ...s,
      children: r
    }
  ) });
}), K7 = Be("flex", {
  variants: {
    overflow: {
      hidden: "overflow-hidden",
      auto: "overflow-auto"
    },
    paddingX: {
      none: "px-0",
      "p-2": "px-2",
      "p-4": "px-4",
      "p-8": "px-8",
      "p-12": "px-12",
      "p-16": "px-16"
    },
    maxWidth: {
      xs: "max-w-xs",
      sm: "max-w-sm",
      md: "max-w-md",
      xl: "max-w-xl",
      "screen-sm": "max-w-screen-sm",
      "screen-md": "max-w-screen-md",
      "screen-lg": "max-w-screen-lg",
      "screen-xl": "max-w-screen-xl",
      "screen-2xl": "max-w-screen-2xl"
    },
    height: {
      auto: "h-auto",
      full: "h-full"
    },
    width: {
      auto: "w-auto",
      full: "w-full"
    },
    paddingY: {
      none: "py-0",
      "p-2": "py-2",
      "p-4": "py-4",
      "p-8": "py-8",
      "p-12": "py-12",
      "p-16": "py-16"
    },
    basis: {
      0: "basis-0"
    },
    inline: {
      true: "inline-flex",
      false: "flex"
    },
    justifyContent: {
      center: "justify-center",
      end: "justify-end",
      "space-between": "justify-between",
      start: "justify-start",
      stretch: "justify-stretch"
    },
    alignItems: {
      center: "items-center",
      end: "items-end",
      "space-between": "items-between",
      start: "items-start",
      stretch: "items-stretch"
    },
    grow: {
      true: "flex-grow",
      false: "flex-grow-0"
    },
    shrink: {
      true: "flex-shrink",
      false: "flex-shrink-0"
    }
  },
  defaultVariants: {
    paddingX: "none",
    paddingY: "none",
    inline: !1
  }
}), Nm = P(function({
  className: t,
  grow: n,
  basis: r,
  shrink: o,
  paddingX: s,
  paddingY: i,
  inline: l,
  overflow: c,
  maxWidth: u,
  justifyContent: d,
  alignItems: f,
  height: p,
  width: m,
  ...g
}, v) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: T(
        K7({
          paddingX: s,
          basis: r,
          paddingY: i,
          grow: n,
          shrink: o,
          inline: l,
          overflow: c,
          maxWidth: u,
          justifyContent: d,
          alignItems: f,
          height: p,
          width: m
        }),
        t
      ),
      ref: v,
      ...g
    }
  );
}), Y7 = Be("flex-row", {
  variants: {
    gap: {
      ...ja
    },
    wrap: {
      true: "flex-wrap"
    }
  },
  defaultVariants: {
    wrap: !0
  }
}), Z7 = ee.forwardRef(function({ className: t, gap: n, wrap: r, ...o }, s) {
  return /* @__PURE__ */ a(
    Nm,
    {
      className: T(Y7({ gap: n, wrap: r }), t),
      ref: s,
      ...o
    }
  );
}), X7 = Be("flex-col", {
  variants: {
    gap: {
      ...ja
    }
  },
  defaultVariants: {}
}), q7 = P(function({ className: t, gap: n, children: r, ...o }, s) {
  return /* @__PURE__ */ a(
    Nm,
    {
      className: T(X7({ gap: n }), t),
      ref: s,
      ...o,
      children: r
    }
  );
}), _S = Te(
  {
    name: "Stack",
    type: "layout"
  },
  q7
), IS = Te(
  {
    name: "Split",
    type: "layout"
  },
  Z7
), VS = Te(
  {
    name: "AutoGrid",
    type: "layout"
  },
  z7
), Q7 = ({ children: e }) => {
  const { enabled: t } = au();
  return /* @__PURE__ */ a("div", { className: T(t && "blur-md", "inline"), children: e });
};
function Vt(e, t) {
  const n = e.displayName || e.name || "Component";
  return Object.assign(t, { displayName: `${n}.Skeleton` }), Object.assign(e, { Skeleton: t });
}
const Tm = ({ orientation: e = "vertical", limit: t = 600, children: n }) => /* @__PURE__ */ a(
  "div",
  {
    style: {
      maskImage: `linear-gradient(to ${e == "vertical" ? "bottom" : "right"}, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) calc(min(100% - ${t}px, 100%)), rgba(0, 0, 0, 0) 100%)`
    },
    className: e == "horizontal" ? "w-full overflow-hidden" : "w-auto",
    children: n
  }
), Ha = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    className: T(
      "flex flex-col items-stretch rounded-xl border border-solid border-f1-border bg-f1-background p-4",
      e
    ),
    ...t
  }
));
Ha.displayName = "Card";
const Ua = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    className: T("flex flex-row gap-1.5", e),
    ...t
  }
));
Ua.displayName = "CardHeader";
const Ga = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a("h3", { ref: n, className: T("text-base font-medium", e), ...t }));
Ga.displayName = "CardTitle";
const za = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a(
  "h3",
  {
    ref: n,
    className: T(
      "line-clamp-1 truncate text-base font-normal text-f1-foreground-secondary",
      e
    ),
    ...t
  }
));
za.displayName = "CardSubtitle";
const J7 = h.forwardRef(({ className: e, content: t }, n) => /* @__PURE__ */ a(
  "div",
  {
    ref: n,
    className: T("-ml-1 flex h-6 w-6 items-center justify-center", e),
    children: /* @__PURE__ */ a(Gm, { children: /* @__PURE__ */ k(zm, { children: [
      /* @__PURE__ */ a(
        Km,
        {
          className: "h-5 w-5 cursor-help text-f1-foreground-secondary",
          "aria-label": t,
          children: /* @__PURE__ */ a(Ae, { icon: uf, size: "md" })
        }
      ),
      /* @__PURE__ */ a(Ym, { children: /* @__PURE__ */ a("p", { children: t }) })
    ] }) })
  }
));
J7.displayName = "CardInfo";
const Lm = h.forwardRef(({ className: e, title: t, ...n }) => /* @__PURE__ */ a(
  ln,
  {
    className: T(
      "flex h-6 w-6 items-center justify-center rounded-sm border border-solid border-f1-border text-f1-foreground-secondary transition-colors hover:text-f1-foreground",
      e
    ),
    "aria-label": t,
    ...n,
    children: /* @__PURE__ */ a(Ae, { icon: fr, size: "sm" })
  }
));
Lm.displayName = "CardLink";
const Ka = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, className: T("flex grow flex-col", e), ...t }));
Ka.displayName = "CardContent";
const Ya = h.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ a("div", { ref: n, className: T("flex items-center", e), ...t }));
Ya.displayName = "CardFooter";
const ek = h.forwardRef(function({ className: t, ...n }, r) {
  return /* @__PURE__ */ a(
    "div",
    {
      ref: r,
      className: T("flex text-2xl font-semibold", t),
      ...n
    }
  );
});
Ya.displayName = "CardComment";
const tk = P(
  function({ bare: t = !1, ...n }, r) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: r,
        role: "separator",
        className: T("-mx-4 h-[1px]", t ? void 0 : "my-4"),
        style: {
          backgroundImage: "repeating-linear-gradient(to right, hsl(var(--neutral-20)) 0, hsl(var(--neutral-20)) 3px, transparent 3px, transparent 7px)"
        },
        ...n
      }
    );
  }
), nk = () => /* @__PURE__ */ a("div", { className: "min-h-[0.15rem] min-w-[0.15rem] rounded-full bg-f1-foreground-secondary" }), rk = P(function({ header: t, children: n, action: r, summaries: o, alert: s, status: i }, l) {
  const { enabled: c, toggle: u } = au();
  Le(() => {
    if (s && i)
      throw Error(
        "You cannot pass both alert and status at the same time to this component"
      );
  }, [s, i]);
  const d = (f) => !!f && !(ee.isValidElement(f) && f.type === ee.Fragment && ee.Children.count(f.props.children) === 0);
  return /* @__PURE__ */ k(Ha, { className: "relative flex gap-4 border-f1-border-secondary", ref: l, children: [
    t && /* @__PURE__ */ a(Ua, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ k("div", { className: "flex w-full flex-1 flex-col gap-4", children: [
      /* @__PURE__ */ k("div", { className: "flex flex-1 flex-row flex-nowrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ k("div", { className: "flex min-h-6 grow flex-row items-center gap-1 truncate", children: [
          t.title && /* @__PURE__ */ a(Ga, { className: "truncate", children: t.title }),
          t.subtitle && /* @__PURE__ */ k("div", { className: "flex flex-row items-center gap-1", children: [
            /* @__PURE__ */ a(nk, {}),
            /* @__PURE__ */ a(za, { className: "truncate", children: t.subtitle })
          ] })
        ] }),
        /* @__PURE__ */ k("div", { className: "flex flex-row items-center gap-3", children: [
          s && /* @__PURE__ */ a(ga, { text: s, level: "critical" }),
          i && /* @__PURE__ */ a(r1, { text: i.text, variant: i.variant }),
          t.link && /* @__PURE__ */ a(Lm, { href: t.link.url, title: t.link.title })
        ] })
      ] }),
      t.comment && /* @__PURE__ */ k("div", { className: "flex flex-row items-center gap-3 overflow-visible", children: [
        /* @__PURE__ */ a(Q7, { children: /* @__PURE__ */ a(ek, { children: t.comment }) }),
        !!t.canBeBlurred && /* @__PURE__ */ a("span", { children: /* @__PURE__ */ a(
          nn,
          {
            icon: c ? af : lf,
            hideLabel: !0,
            label: "hide/show",
            variant: "outline",
            round: !0,
            onClick: u,
            size: "sm"
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ k(Ka, { className: "flex flex-col gap-4", children: [
      o && /* @__PURE__ */ a("div", { className: "flex flex-row", children: o.map((f, p) => /* @__PURE__ */ k("div", { className: "grow", children: [
        /* @__PURE__ */ a("div", { className: "mb-0.5 text-sm text-f1-foreground-secondary", children: f.label }),
        /* @__PURE__ */ k("div", { className: "flex flex-row items-end gap-0.5 text-xl font-semibold", children: [
          !!f.prefixUnit && /* @__PURE__ */ a("div", { className: "text-lg font-medium", children: f.prefixUnit }),
          f.value,
          !!f.postfixUnit && /* @__PURE__ */ a("div", { className: "text-lg font-medium", children: f.postfixUnit })
        ] })
      ] }, p)) }),
      ee.Children.toArray(n).filter(d).map((f, p) => /* @__PURE__ */ k(me, { children: [
        p > 0 && /* @__PURE__ */ a(tk, { bare: !0 }),
        f
      ] }))
    ] }),
    r && /* @__PURE__ */ a(Ya, { children: /* @__PURE__ */ a(nn, { variant: "neutral", size: "sm", ...r }) })
  ] });
}), ok = Be("", {
  variants: {
    height: {
      sm: "h-36",
      md: "h-48",
      lg: "h-60"
    }
  }
}), sk = P(
  function({ header: t, height: n }, r) {
    return /* @__PURE__ */ k(
      Ha,
      {
        className: "flex gap-4 border-f1-border-secondary",
        ref: r,
        "aria-live": "polite",
        "aria-busy": !0,
        children: [
          /* @__PURE__ */ a(Ua, { className: "-mr-1 -mt-1", children: /* @__PURE__ */ k(
            "div",
            {
              className: "flex h-6 w-full flex-row items-center gap-1.5",
              "aria-hidden": !0,
              children: [
                t != null && t.title ? /* @__PURE__ */ a(Ga, { children: t.title }) : /* @__PURE__ */ a(ho, { className: "h-4 w-full max-w-16" }),
                (t == null ? void 0 : t.subtitle) && /* @__PURE__ */ a(za, { children: t.subtitle })
              ]
            }
          ) }),
          /* @__PURE__ */ a(
            Ka,
            {
              "aria-hidden": !0,
              className: T(ok({ height: n })),
              children: [...Array(4)].map((o, s) => /* @__PURE__ */ a(
                ho,
                {
                  className: `mb-1 h-6 ${["w-full", "w-1/2", "w-3/4", "w-1/4"][s]}`
                },
                s
              ))
            }
          )
        ]
      }
    );
  }
), tn = Vt(rk, sk), tt = Object.assign(
  P(function({ chart: t, summaries: n, ...r }, o) {
    return /* @__PURE__ */ a(tn, { ref: o, ...r, summaries: n, children: t && /* @__PURE__ */ a("div", { className: "min-h-52 grow pt-2", children: t }) });
  }),
  {
    Skeleton: tn.Skeleton
  }
), ik = Vt(
  P(function({ canBeBlurred: t, ...n }, r) {
    const o = {
      ...n,
      header: {
        ...n.header,
        canBeBlurred: t
      }
    }, s = {
      ...n.chart,
      yAxis: n.chart.yAxis ? { ...n.chart.yAxis } : { hide: !0 }
    };
    return /* @__PURE__ */ a(
      tt,
      {
        ref: r,
        ...o,
        chart: /* @__PURE__ */ a(Zm, { ...s, canBeBlurred: t })
      }
    );
  }),
  tt.Skeleton
), ak = P(function(t, n) {
  return /* @__PURE__ */ a(
    tt,
    {
      ref: n,
      ...t,
      chart: /* @__PURE__ */ a(Xm, { aspect: null, yAxis: { hide: !0 }, ...t.chart })
    }
  );
}), lk = Vt(
  ak,
  tt.Skeleton
), ck = Vt(
  P(
    function(t, n) {
      return /* @__PURE__ */ a(
        tt,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ a(qm, { aspect: null, yAxis: { hide: !0 }, ...t.chart })
        }
      );
    }
  ),
  tt.Skeleton
), uk = Vt(
  P(
    function(t, n) {
      return /* @__PURE__ */ a(
        tt,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ a(Qm, { aspect: null, ...t.chart })
        }
      );
    }
  ),
  tt.Skeleton
), dk = Vt(
  P(
    function(t, n) {
      return /* @__PURE__ */ a(tt, { ref: n, ...t, chart: null });
    }
  ),
  tt.Skeleton
), fk = Vt(
  P(
    function(t, n) {
      return /* @__PURE__ */ a(
        tt,
        {
          ref: n,
          ...t,
          chart: /* @__PURE__ */ a(
            Jm,
            {
              aspect: null,
              xAxis: { hide: !0 },
              ...t.chart
            }
          )
        }
      );
    }
  ),
  tt.Skeleton
), OS = Te(
  {
    name: "AreaChartWidget",
    type: "info"
  },
  ik
), FS = Te(
  {
    name: "BarChartWidget",
    type: "info"
  },
  lk
), BS = Te(
  {
    name: "LineChartWidget",
    type: "info"
  },
  ck
), $S = Te(
  {
    name: "PieChartWidget",
    type: "info"
  },
  uk
), WS = Te(
  {
    name: "VerticalBarChartWidget",
    type: "info"
  },
  fk
), jS = Te(
  {
    name: "SummariesWidget",
    type: "info"
  },
  dk
);
function HS({
  title: e,
  subtitle: t,
  data: n,
  helpText: r,
  legend: o = !1
}) {
  return /* @__PURE__ */ k("div", { children: [
    /* @__PURE__ */ k("div", { className: "flex items-baseline justify-between", children: [
      /* @__PURE__ */ a("span", { className: "text-2xl font-semibold", children: e }),
      /* @__PURE__ */ a("span", { className: "text-2xl font-semibold text-f1-foreground-secondary", children: t })
    ] }),
    /* @__PURE__ */ a("div", { className: "mt-2", children: /* @__PURE__ */ a(eg, { data: n, legend: o }) }),
    !!r && /* @__PURE__ */ a("div", { className: "mt-1", children: /* @__PURE__ */ a("span", { className: "text-sm", children: r }) })
  ] });
}
const hk = P(function({ title: t, subtitle: n, description: r, color: o, isPending: s }, i) {
  return /* @__PURE__ */ k(
    "div",
    {
      ref: i,
      className: "relative flex flex-row items-stretch gap-3 overflow-hidden rounded-sm px-2 py-1.5",
      children: [
        /* @__PURE__ */ a(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 top-0 opacity-10",
            style: {
              background: `linear-gradient(to right, ${o}, transparent)`
            }
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: "min-h-10 min-w-1 rounded-2xs",
            style: s ? {
              backgroundImage: `repeating-linear-gradient(
              135deg,
              ${o} 0px,
              ${o} 4px, 
              transparent 4px, 
              transparent 5.5px
            )`
            } : {
              backgroundColor: o
            }
          }
        ),
        /* @__PURE__ */ k("div", { className: "flex flex-col gap-0.5", children: [
          /* @__PURE__ */ k("p", { className: "line-clamp-3 font-medium", children: [
            t,
            /* @__PURE__ */ a("span", { className: "pl-1", children: n })
          ] }),
          /* @__PURE__ */ a("p", { className: "text-f1-foreground-secondary", children: r })
        ] })
      ]
    }
  );
}), US = P(
  function({ events: t, limit: n = 3 }, r) {
    return t.length ? /* @__PURE__ */ a("div", { className: "flex flex-col gap-2", ref: r, children: t.slice(0, n).map((o) => /* @__PURE__ */ a(
      hk,
      {
        title: o.title,
        subtitle: o.subtitle,
        description: o.description,
        color: o.color,
        isPending: o.isPending
      },
      o.title
    )) }) : null;
  }
), pk = P(
  function({ content: t, label: n, icon: r, color: o }, s) {
    return /* @__PURE__ */ k("div", { className: "grid-row-2 col-span-1 grid", ref: s, children: [
      /* @__PURE__ */ a("p", { className: "text-2xl font-semibold", children: t }),
      /* @__PURE__ */ k("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ a("p", { className: "text-f1-foreground-secondary", children: n }),
        r && /* @__PURE__ */ a("span", { className: T("flex", o), children: /* @__PURE__ */ a(Ae, { icon: r }) })
      ] })
    ] }, n);
  }
), GS = P(
  function({ items: t }, n) {
    return /* @__PURE__ */ a(
      "div",
      {
        ref: n,
        className: "grid auto-cols-fr grid-flow-col items-end gap-x-3",
        children: t.map(({ label: r, content: o, icon: s, color: i }) => /* @__PURE__ */ a(
          pk,
          {
            label: r,
            content: o,
            icon: s,
            color: i
          },
          `${r}-${o}`
        ))
      }
    );
  }
), mk = ({ onClick: e, className: t, children: n }) => e ? /* @__PURE__ */ a("a", { className: t, onClick: e, tabIndex: 0, children: n }) : /* @__PURE__ */ a("div", { className: t, tabIndex: -1, children: n });
function gk({
  task: e,
  status: t,
  onClick: n,
  hideIcon: r = !1
}) {
  const o = T(
    "flex flex-row items-center gap-1 rounded-sm border border-solid border-transparent px-2 py-1.5",
    n ? "cursor-pointer hover:bg-f1-background-tertiary focus:border-f1-background-selected-bold focus:outline-none" : void 0
  );
  return /* @__PURE__ */ k(mk, { onClick: (i) => {
    i.preventDefault(), n == null || n(e);
  }, className: o, children: [
    !r && (t === "due" || t === "no-due") && /* @__PURE__ */ a(
      Ae,
      {
        icon: of,
        size: "md",
        className: "text-f1-icon-secondary"
      }
    ),
    !r && t === "in-progress" && /* @__PURE__ */ a(Ae, { icon: cf, size: "md", className: "text-f1-icon-info" }),
    /* @__PURE__ */ a("p", { className: "mt-0.5 line-clamp-2 flex-1 font-medium", children: e.text }),
    !!e.badge && /* @__PURE__ */ a(me, { children: e.badge.isPastDue ? /* @__PURE__ */ a(ga, { text: e.badge.text, level: "critical" }) : /* @__PURE__ */ a(n1, { text: e.badge.text, icon: ef }) }),
    !!e.counter && /* @__PURE__ */ a(e1, { value: e.counter })
  ] });
}
function zS({
  tasks: e,
  onClickTask: t,
  hideIcons: n = !1,
  maxTasksToShow: r = 5,
  emptyMessage: o = "No tasks assigned"
}) {
  const i = [
    { key: "inProgress", status: "in-progress" },
    { key: "due", status: "due" },
    { key: "noDue", status: "no-due" }
  ].flatMap(
    ({ key: c, status: u }) => (e[c] || []).map(
      (d) => typeof d == "string" ? {
        id: d,
        text: d
      } : d
    ).map(({ id: d, text: f, badge: p, counter: m }) => ({
      id: d,
      text: f,
      badge: p,
      counter: m,
      status: u
    }))
  ), l = !i.length;
  return /* @__PURE__ */ a("div", { className: "flex flex-col gap-0", children: l ? /* @__PURE__ */ a("p", { className: "font-medium", children: o }) : i.slice(0, r).map((c) => /* @__PURE__ */ a(
    gk,
    {
      task: c,
      status: c.status,
      hideIcon: n,
      onClick: t
    },
    c.id
  )) });
}
const vk = ({ title: e, info: t }) => /* @__PURE__ */ k("div", { className: "flex items-center justify-between", children: [
  /* @__PURE__ */ a("p", { className: "flex text-f1-foreground-secondary", children: e }),
  /* @__PURE__ */ a("div", { className: "basis-16 justify-self-end text-right font-medium", children: t })
] }), KS = P(
  function({ title: t, list: n }, r) {
    return /* @__PURE__ */ k("div", { ref: r, className: "flex flex-col gap-2", children: [
      t && /* @__PURE__ */ a("div", { className: "font-medium", children: t }),
      n.map((o) => /* @__PURE__ */ a(vk, { title: o.title, info: o.info }, o.title))
    ] });
  }
);
var yk = Object.defineProperty, wk = Object.defineProperties, bk = Object.getOwnPropertyDescriptors, mo = Object.getOwnPropertySymbols, Rm = Object.prototype.hasOwnProperty, Dm = Object.prototype.propertyIsEnumerable, eu = (e, t, n) => t in e ? yk(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qe = (e, t) => {
  for (var n in t || (t = {})) Rm.call(t, n) && eu(e, n, t[n]);
  if (mo) for (var n of mo(t)) Dm.call(t, n) && eu(e, n, t[n]);
  return e;
}, qo = (e, t) => wk(e, bk(t)), Ck = (e, t) => {
  var n = {};
  for (var r in e) Rm.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && mo) for (var r of mo(e)) t.indexOf(r) < 0 && Dm.call(e, r) && (n[r] = e[r]);
  return n;
}, xk = (e) => e.right - e.left < 5 || e.bottom && e.bottom - e.top < 5, kk = ({ spotsList: e, usedSpot: t }) => e.some((n) => n !== t && t.left === n.left), Sk = ({ position: e, spot: t, stone: n }) => {
  if (e.left > t.left && t.right >= e.left && e.top + n.height > t.top) {
    if (t.bottom && t.bottom < e.top) return t;
    let r = Qe({}, t);
    return r.right = e.left, r;
  }
  return null;
}, Mk = ({ position: e, stone: t, spot: n }) => {
  if (e.left + t.width > n.left && e.top >= n.top) {
    if (n.bottom && n.bottom < e.top || n.right < e.left) return n;
    let r = Qe({}, n);
    return r.bottom = e.top, r;
  }
  return null;
}, Ek = ({ stone: e, position: t, spotsList: n, optimalSpot: r }) => {
  let o = Qe({}, r);
  return o.left = t.left + e.width, xk(o) || kk({ usedSpot: o, spotsList: n }) ? null : o;
}, Pk = ({ spots: e, position: t, optimalSpot: n, stone: r }) => e.map((o, s, i) => {
  if (o === n) return Ek({ stone: r, position: t, optimalSpot: n, spotsList: i });
  let l = Sk({ position: t, spot: o, stone: r });
  return l || Mk({ position: t, stone: r, spot: o }) || o;
});
function Nk(e, t) {
  for (let n = 0, r = t.length; n < r; n++) {
    let o = t[n];
    if (e(o)) return o;
  }
  return null;
}
var Tk = (e, t) => t.filter(e), Lk = (e, t) => [...t].sort(e), Rk = (e, t) => e.top === t.top ? e.left < t.left ? -1 : 1 : e.top < t.top ? -1 : 1, Dk = (e) => Lk(Rk, e), Ak = ({ availableSpots: e, optimalSpot: t, containerSize: n, stone: r }) => {
  let o = { right: n, top: t.top + r.height, left: t.left };
  t.bottom && (o.bottom = t.bottom);
  for (let s = 0, i = e.length; s < i; s += 1) {
    let l = e[s];
    if (o.left < l.left && o.top < l.top) {
      o.right = l.left;
      break;
    }
  }
  return o;
}, _k = (e, t) => {
  let n = e.right - e.left >= t.width;
  if (!e.bottom) return n;
  let r = e.bottom - e.top >= t.height;
  return n && r;
}, Ik = ({ availableSpots: e, stone: t }) => Nk((n) => _k(n, t), e);
function Vk({ stone: e, availableSpots: t, containerSize: n }) {
  let r = Ik({ availableSpots: t, stone: e }), o = { left: r.left, top: r.top }, s = Ak({ optimalSpot: r, availableSpots: t.filter((c) => c !== r), stone: e, containerSize: n }), i = [...t, s], l = Pk({ spots: i, position: o, optimalSpot: r, stone: e });
  return i = [...Tk(Boolean, l)], i = Dk(i), { position: o, availableSpots: i };
}
var Ok = ({ stones: e, containerSize: t }) => {
  let n = { positions: [], containerHeight: 0, availableSpots: [] };
  if (!e.length) return n;
  let r = 0, o = [], s = [{ top: 0, left: 0, right: t }];
  for (let i of e) {
    let l = Vk({ availableSpots: s, stone: i, containerSize: t }), c = l.position.top + i.height;
    r < c && (r = c), o.push(l.position), s = l.availableSpots;
  }
  return { availableSpots: s, positions: o, containerHeight: r };
}, Fk = (e) => e.reduce((t, n) => {
  if (!n) return t;
  let r = n.getBoundingClientRect();
  return t.push({ width: r.width, height: r.height }), t;
}, []), Bk = ({ boxesRefs: e, wrapperRef: t, children: n, windowWidth: r, wrapperWidth: o }) => {
  let [{ positions: s, containerHeight: i, stones: l, availableSpots: c }, u] = Ce({ positions: [], containerHeight: null, stones: [], availableSpots: [] });
  return Le(() => {
    var d, f;
    let p = Fk(e.current), m = (f = (d = t.current) == null ? void 0 : d.offsetWidth) != null ? f : 0;
    if (m === null) return;
    let g = Ok({ stones: p, containerSize: m });
    u(qo(Qe({}, g), { stones: p }));
  }, [n, e, t, r, o]), { positions: s, containerHeight: i, stones: l, availableSpots: c };
}, $k = (e) => ({ fade: `${e}ms opacity ease`, fadeMove: `
    ${e}ms opacity ease,
    ${e}ms top ease,
    ${e}ms left ease
  `, move: `
    ${e}ms top ease,
    ${e}ms left ease
  ` }), Wk = ({ transition: e, transitionDuration: t }) => e ? { transition: $k(t)[e] } : null, jk = (e) => e ? qo(Qe({}, e), { opacity: 1 }) : { opacity: 0, top: 0, left: 0 }, Hk = ({ style: e, position: t, transition: n, transitionDuration: r }) => Qe(Qe(qo(Qe({}, e), { position: "absolute" }), jk(t)), Wk({ transition: n, transitionDuration: r }));
function Uk(e, t, n) {
  let r;
  return function(...o) {
    r && clearTimeout(r), r = setTimeout(function() {
      r = null, e.apply(null, o);
    }, t);
  };
}
var Gk = () => {
  let [e, t] = Ce(), n = Ue(Uk(t, 300));
  return Le(() => {
    let r = () => {
      n.current(window.innerWidth);
    };
    return window.addEventListener("resize", r), () => {
      window.removeEventListener("resize", r);
    };
  }, []), e;
}, zk = (e) => {
  let [t, n] = Ce(null);
  return Le(() => {
    let r = new ResizeObserver((o) => {
      for (let s of o) n(s.contentRect.width);
    });
    return e.current && r.observe(e.current), () => {
      r.disconnect();
    };
  }, [e]), t;
}, Kk = (e) => {
  var t = e, { children: n, style: r, transition: o = !1, transitionDuration: s = 500, transitionStep: i = 50 } = t, l = Ck(t, ["children", "style", "transition", "transitionDuration", "transitionStep"]);
  let c = Ue([]), u = Ue(null), d = Gk(), f = zk(u), { positions: p, containerHeight: m } = Bk({ boxesRefs: c, wrapperRef: u, children: n, windowWidth: d, wrapperWidth: f }), g = Qe({ minHeight: m ?? 0, position: "relative" }, r);
  return a("div", qo(Qe({ ref: u, style: g }, l), { children: pi.map(n, (v, w) => {
    if (typeof v != "object" || !v || !("type" in v)) return v;
    let b = { style: Hk({ style: v.props.style, position: p[w], transition: o, transitionDuration: s }), ref: (y) => c.current[w] = y };
    return og(v, Qe(Qe({}, v.props), b));
  }) }));
};
const Yk = { sm: 340, md: 480, lg: 640 }, tu = P(
  function({ children: t, widgetWidth: n = "sm" }, r) {
    const o = Yk[n], [s, i] = Ce(), l = pi.toArray(t), c = Ue(null);
    return Le(() => {
      const u = () => {
        var f;
        const d = (f = c.current) == null ? void 0 : f.offsetWidth;
        d && i(Math.floor(d / o) || 1);
      };
      return u(), window.addEventListener("resize", u), () => {
        window.removeEventListener("resize", u);
      };
    }, [i, o]), /* @__PURE__ */ a("div", { ref: r, className: "text-f1-foreground", children: /* @__PURE__ */ a("div", { ref: c, children: s === 1 ? /* @__PURE__ */ a("div", { className: "flex flex-col gap-4 *:shadow", children: t }) : s && s > 1 && /* @__PURE__ */ a("div", { className: "relative -mr-4", children: /* @__PURE__ */ a(Kk, { children: l.map((u, d) => /* @__PURE__ */ a(
      "div",
      {
        style: {
          width: `${Math.floor(1 / s * 1e4) / 100 - 0.05}%`
        },
        className: "pb-[0.01px] pr-4 *:mb-4 *:shadow",
        children: u
      },
      d
    )) }, s) }) }) });
  }
), Zk = ["sm", "lg", "md", "md", "lg", "sm", "lg", "lg", "sm", "sm", "md", "md"], YS = Vt(tu, () => /* @__PURE__ */ a(Tm, { children: /* @__PURE__ */ a(tu, { children: Zk.map((e, t) => /* @__PURE__ */ a(tn.Skeleton, { height: e }, t)) }) })), nu = ({ children: e }) => /* @__PURE__ */ a(
  "div",
  {
    className: T(
      "flex min-h-40 flex-row items-stretch gap-4 text-f1-foreground [&>*]:min-w-96 [&>*]:max-w-lg [&>*]:flex-grow [&>*]:basis-0"
    ),
    children: e
  }
), ZS = Vt(
  P(function({ children: t }, n) {
    return /* @__PURE__ */ a(Gi, { ref: n, children: /* @__PURE__ */ a(nu, { children: t }) });
  }),
  () => /* @__PURE__ */ a(Tm, { orientation: "horizontal", children: /* @__PURE__ */ k(nu, { children: [
    /* @__PURE__ */ a(tn.Skeleton, {}),
    /* @__PURE__ */ a(tn.Skeleton, {}),
    /* @__PURE__ */ a(tn.Skeleton, {})
  ] }) })
), XS = P(
  function({ title: t, content: n, icon: r, buttonLabel: o, buttonAction: s, promote: i = !1 }, l) {
    return /* @__PURE__ */ a(
      tn,
      {
        header: {
          title: t
        },
        action: o ? {
          label: o,
          variant: i ? "promote" : "default",
          onClick: s
        } : void 0,
        ref: l,
        children: /* @__PURE__ */ k("div", { className: "relative flex min-h-28 flex-1", children: [
          /* @__PURE__ */ a(r, { className: "absolute right-0 top-0 z-10 max-h-full max-w-full text-f1-background-promote" }),
          /* @__PURE__ */ a("p", { className: "flex w-3/4 text-xl font-semibold", children: n })
        ] })
      }
    );
  }
), Xk = P(
  ({ title: e, children: t }, n) => (un(e, { disallowEmpty: !0 }), /* @__PURE__ */ k("div", { ref: n, className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ a("p", { className: "text-base font-medium text-f1-foreground-secondary", children: e }),
    t
  ] }))
);
Xk.displayName = "WidgetSection";
const qS = Te(
  {
    name: "ScrollArea",
    type: "layout"
  },
  Gi
);
export {
  uS as Alert,
  fS as AlertDescription,
  ga as AlertTag,
  dS as AlertTitle,
  hS as ApplicationFrame,
  OS as AreaChartWidget,
  VS as AutoGrid,
  U3 as BalanceTag,
  FS as BarChartWidget,
  _6 as Calendar,
  HS as CategoryBarSection,
  Io as CompanyAvatar,
  G3 as CompanyTag,
  e1 as Counter,
  YS as Dashboard,
  U7 as DetailsItem,
  RS as DetailsItemsList,
  NS as Dialog,
  K3 as DotTag,
  fp as Dropdown,
  US as EventsList,
  AS as FullscreenLayout,
  GS as IndicatorsList,
  DS as InfoPaneLayout,
  aS as Input,
  BS as LineChartWidget,
  bS as Menu,
  t1 as ModuleAvatar,
  lS as NumberInput,
  vS as Page,
  gS as PageHeader,
  Vo as PersonAvatar,
  Y3 as PersonTag,
  $S as PieChartWidget,
  Q7 as PrivateBox,
  n1 as RawTag,
  qS as ScrollArea,
  CS as SearchBar,
  f3 as Select,
  $3 as Shortcut,
  xS as Sidebar,
  yS as SidebarHeader,
  IS as Split,
  _S as Stack,
  TS as StandardLayout,
  r1 as StatusTag,
  jS as SummariesWidget,
  MS as Tabs,
  zS as TasksList,
  la as TeamAvatar,
  Z3 as TeamTag,
  iS as Textarea,
  KS as TwoColumnsList,
  kS as User,
  WS as VerticalBarChartWidget,
  j7 as Weekdays,
  tn as Widget,
  XS as WidgetEmptyState,
  Xk as WidgetSection,
  ZS as WidgetStrip,
  Zf as renderAvatar,
  cS as useForm
};
