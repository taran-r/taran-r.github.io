// node_modules/@shadergradient/react/dist/chunk-23DH3CGE.mjs
var i = (t15, a14 = "") => ({ control: { type: t15.Enum, options: ["props", "query"], optionTitles: ["Props", "Query"], displaySegmentedControl: true, defaultValue: a14 === "stateless" ? "query" : "props" }, activeTab: { title: "Settings Group", type: t15.Enum, options: ["Shape", "Colors", "Effects", "View"], hidden: (e21) => e21.control === "query" }, type: { type: t15.Enum, options: ["plane", "sphere", "waterPlane"], optionTitles: ["Plane", "Sphere", "Water"], displaySegmentedControl: true, hidden: (e21) => e21.control === "query" || e21.activeTab !== "Shape" }, animate: { type: t15.Enum, options: ["on", "off"], optionTitles: ["On", "Off"], displaySegmentedControl: true, hidden: (e21) => e21.control === "query" || e21.activeTab !== "Shape" && e21.activeTab !== "URL" }, uTime: { title: "Movements", type: t15.Number, step: 0.1, displayStepper: true, hidden: (e21) => e21.animate === "on" || e21.control === "query" || e21.activeTab !== "Shape" }, uSpeed: { title: "Speed", type: t15.Number, step: 0.1, min: 0.1, displayStepper: true, defaultValue: 0.4, hidden: (e21) => e21.animate === "off" || e21.control === "query" || e21.activeTab !== "Shape" }, noise: { type: t15.Object, controls: { uStrength: { type: t15.Number, title: "Strength", step: 0.1, min: 0.1, displayStepper: true, defaultValue: 4 }, uDensity: { type: t15.Number, title: "Density", step: 0.1, min: 0.1, displayStepper: true, defaultValue: 1.3 } }, hidden: (e21) => e21.control === "query" || e21.activeTab !== "Shape" }, uAmplitude: { type: t15.Number, title: "Spiral", step: 0.1, min: 0.1, displayStepper: true, defaultValue: 1, hidden: (e21) => e21.type !== "sphere" || e21.control === "query" || e21.activeTab !== "Shape" }, grain: { type: t15.Enum, options: ["on", "off"], optionTitles: ["On", "Off"], displaySegmentedControl: true, hidden: (e21) => e21.control === "query" || e21.activeTab !== "Effects" }, lightType: { type: t15.Enum, options: ["env", "3d"], optionTitles: ["Env", "Light"], displaySegmentedControl: true, defaultValue: "3d", hidden: (e21) => e21.control === "query" || e21.activeTab !== "Effects" }, envPreset: { type: t15.Enum, options: ["city", "dawn", "lobby"], optionTitles: ["City", "Dawn", "Lobby"], displaySegmentedControl: true, hidden: (e21) => e21.lightType === "3d" || e21.control === "query" || e21.activeTab !== "Effects" }, brightness: { type: t15.Number, step: 0.1, min: 0.1, max: 3, defaultValue: 1.2, hidden: (e21) => e21.lightType === "env" || e21.control === "query" || e21.activeTab !== "Effects" || e21.url }, reflection: { type: t15.Number, step: 0.1, min: 0, max: 1, defaultValue: 0.1, hidden: (e21) => e21.lightType === "3d" || e21.control === "query" || e21.activeTab !== "Effects" || e21.url }, color1: { type: t15.Color, defaultValue: "#ff5005", hidden: (e21) => e21.control === "query" || e21.activeTab !== "Colors" }, color2: { type: t15.Color, defaultValue: "#dbba95", hidden: (e21) => e21.control === "query" || e21.activeTab !== "Colors" }, color3: { type: t15.Color, defaultValue: "#d0bce1", hidden: (e21) => e21.control === "query" || e21.activeTab !== "Colors" }, cDistance: { title: "Distance", type: t15.Number, displayStepper: true, min: 0, max: 20, defaultValue: 3.6, hidden: (e21) => e21.type === "sphere" || e21.control === "query" || e21.activeTab !== "View" }, cameraZoom: { type: t15.Number, displayStepper: true, step: 0.1, min: 0.1, max: 30, defaultValue: 1, hidden: (e21) => e21.type !== "sphere" || e21.control === "query" || e21.activeTab !== "View" }, cameraAngle: { type: t15.Object, controls: { cAzimuthAngle: { title: "Azimuth", type: t15.Number, displayStepper: true, step: 10, min: 0, max: 360, defaultValue: 180 }, cPolarAngle: { title: "Polar", type: t15.Number, displayStepper: true, step: 10, min: 0, max: 180, defaultValue: 90 } }, hidden: (e21) => e21.control === "query" || e21.activeTab !== "View" }, position: { type: t15.Object, controls: { positionX: { type: t15.Number, step: 0.1, displayStepper: true, defaultValue: -1.4 }, positionY: { type: t15.Number, step: 0.1, displayStepper: true, defaultValue: 0 }, positionZ: { type: t15.Number, step: 0.1, displayStepper: true, defaultValue: 0 } }, hidden: (e21) => e21.control === "query" || e21.activeTab !== "View" }, rotation: { type: t15.Object, controls: { rotationX: { type: t15.Number, step: 10, min: -360, max: 360, displayStepper: true, defaultValue: 0 }, rotationY: { type: t15.Number, step: 10, min: -360, max: 360, displayStepper: true, defaultValue: 10 }, rotationZ: { type: t15.Number, step: 10, min: -360, max: 360, displayStepper: true, defaultValue: 50 } }, hidden: (e21) => e21.control === "query" || e21.activeTab !== "View" }, urlString: { type: t15.String, placeholder: "URL from shadergradient.co", defaultValue: a14 === "stateless" ? "" : "https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=3.6&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=plane&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=4&uTime=0&wireframe=false", hidden: (e21) => e21.control === "props" }, zoomOut: { type: t15.Boolean, title: "View", enabledTitle: "Wide", disabledTitle: "-", defaultValue: false, hidden: (e21) => e21.control === "query" }, toggleAxis: { type: t15.Boolean, title: "Axis", enabledTitle: "Guide", disabledTitle: "-", defaultValue: false, hidden: (e21) => e21.control === "query" }, enableTransition: { type: t15.Boolean, title: "Camera Transition", enabledTitle: "Smooth", disabledTitle: "Instant", defaultValue: true, hidden: (e21) => e21.control === "query" }, enableCameraUpdate: { type: t15.Boolean, title: "Camera Update", enabledTitle: "On", disabledTitle: "Off", defaultValue: false, hidden: (e21) => a14 !== "stateless" }, pointerEvents: { type: t15.Enum, title: "Touch Control", options: ["none", "auto"], optionTitles: ["Disable", "Enable"], displaySegmentedControl: true, hidden: (e21) => e21.control === "query" }, lazyLoad: { type: t15.Boolean, defaultValue: true }, threshold: { type: t15.Number, min: 0, max: 1, step: 0.1, defaultValue: 0.1, displayStepper: true, title: "\u21B3 Threshold", hidden: (e21) => !e21.lazyLoad }, rootMargin: { type: t15.String, placeholder: "0px", defaultValue: "0px", title: "\u21B3 Root Margin", description: 'Offset before triggering (e.g., "100px", "-50px")', hidden: (e21) => !e21.lazyLoad }, canvas: { type: t15.Object, title: "Canvas", controls: { pixelDensity: { type: t15.Number, step: 0.1, min: 0, max: 3, displayStepper: true, defaultValue: 1 }, fov: { type: t15.Number, step: 1, min: 10, max: 180, displayStepper: true, defaultValue: 45 }, preserveDrawingBuffer: { type: t15.Boolean, title: "Keep Buffer", defaultValue: false }, powerPreference: { type: t15.Enum, title: "Power Pref", options: ["default", "high-performance", "low-power"], optionTitles: ["Auto", "High", "Low"], displaySegmentedControl: true, defaultValue: "low-power" } } } });

// node_modules/@shadergradient/react/dist/chunk-27WNIDXB.mjs
import { Fragment as t, jsx as o, jsxs as a } from "react/jsx-runtime";
var e = 192;
function n({ type: r11 }) {
  return a(t, { children: [r11 === "plane" && o("planeGeometry", { args: [10, 10, 1, e] }), r11 === "sphere" && o("icosahedronGeometry", { args: [1, e / 3] }), r11 === "waterPlane" && o("planeGeometry", { args: [10, 10, e, e] })] });
}

// node_modules/@shadergradient/react/dist/chunk-F3ULA5MU.mjs
function n2(r11) {
  let t15 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r11);
  return t15 ? { r: parseInt(t15[1], 16), g: parseInt(t15[2], 16), b: parseInt(t15[3], 16) } : null;
}
function e2(r11) {
  let t15 = r11.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return t15 ? { r: parseInt(t15[1]), g: parseInt(t15[2]), b: parseInt(t15[3]) } : null;
}
function s(r11) {
  if (r11.startsWith("#")) return n2(r11);
  if (r11.startsWith("rgb")) return e2(r11);
  throw new Error("Invalid color format");
}
function a2(r11 = 0) {
  return r11 / 255;
}

// node_modules/@shadergradient/react/dist/chunk-7RJG5BRD.mjs
var p = Object.create;
var h = Object.defineProperty;
var q = Object.defineProperties;
var r = Object.getOwnPropertyDescriptor;
var s2 = Object.getOwnPropertyDescriptors;
var t2 = Object.getOwnPropertyNames;
var g = Object.getOwnPropertySymbols;
var u = Object.getPrototypeOf;
var k = Object.prototype.hasOwnProperty;
var m = Object.prototype.propertyIsEnumerable;
var l = (a14, b8, c4) => b8 in a14 ? h(a14, b8, { enumerable: true, configurable: true, writable: true, value: c4 }) : a14[b8] = c4;
var w = (a14, b8) => {
  for (var c4 in b8 || (b8 = {})) k.call(b8, c4) && l(a14, c4, b8[c4]);
  if (g) for (var c4 of g(b8)) m.call(b8, c4) && l(a14, c4, b8[c4]);
  return a14;
};
var x = (a14, b8) => q(a14, s2(b8));
var y = (a14, b8) => {
  var c4 = {};
  for (var d5 in a14) k.call(a14, d5) && b8.indexOf(d5) < 0 && (c4[d5] = a14[d5]);
  if (a14 != null && g) for (var d5 of g(a14)) b8.indexOf(d5) < 0 && m.call(a14, d5) && (c4[d5] = a14[d5]);
  return c4;
};
var z = (a14, b8) => () => (b8 || a14((b8 = { exports: {} }).exports, b8), b8.exports);
var A = (a14, b8) => {
  for (var c4 in b8) h(a14, c4, { get: b8[c4], enumerable: true });
};
var v = (a14, b8, c4, d5) => {
  if (b8 && typeof b8 == "object" || typeof b8 == "function") for (let e21 of t2(b8)) !k.call(a14, e21) && e21 !== c4 && h(a14, e21, { get: () => b8[e21], enumerable: !(d5 = r(b8, e21)) || d5.enumerable });
  return a14;
};
var B = (a14, b8, c4) => (c4 = a14 != null ? p(u(a14)) : {}, v(b8 || !a14 || !a14.__esModule ? h(c4, "default", { value: a14, enumerable: true }) : c4, a14));

// node_modules/@shadergradient/react/dist/chunk-HXMZSSU4.mjs
import { useEffect as k2, useMemo as U, useRef as h2 } from "react";
import * as l2 from "three";
import { useFrame as B2 } from "@react-three/fiber";
import { jsx as V } from "react/jsx-runtime";
var A2 = ({ animate: g6, range: N5, rangeStart: m8, rangeEnd: E8, loop: j2, loopDuration: f8, reflection: R7, uniforms: D3, vertexShader: H4, fragmentShader: M5, onInit: T4, shader: b8 }) => {
  let p10 = h2(new l2.Clock()), e21 = U(() => {
    let s10 = Object.entries(D3), L2 = D3.colors, t15 = s(L2[0]), a14 = s(L2[1]), u7 = s(L2[2]), w4 = { uC1r: { value: a2(t15 == null ? void 0 : t15.r) }, uC1g: { value: a2(t15 == null ? void 0 : t15.g) }, uC1b: { value: a2(t15 == null ? void 0 : t15.b) }, uC2r: { value: a2(a14 == null ? void 0 : a14.r) }, uC2g: { value: a2(a14 == null ? void 0 : a14.g) }, uC2b: { value: a2(a14 == null ? void 0 : a14.b) }, uC3r: { value: a2(u7 == null ? void 0 : u7.r) }, uC3g: { value: a2(u7 == null ? void 0 : u7.g) }, uC3b: { value: a2(u7 == null ? void 0 : u7.b) } }, F4 = s10.reduce((o13, [y9, O4]) => {
      let P8 = l2.UniformsUtils.clone({ [y9]: { value: O4 } });
      return w(w({}, o13), P8);
    }, {}), i12 = { userData: F4, metalness: b8 === "glass" ? 0 : 0.2, roughness: b8 === "glass" ? 0.1 : 1 - (typeof R7 == "number" ? R7 : 0.1), side: l2.DoubleSide, onBeforeCompile: (o13) => {
      o13.uniforms = w(w(w({}, o13.uniforms), F4), w4), o13.vertexShader = H4, o13.fragmentShader = M5;
    } };
    b8 === "glass" && (i12.transparent = true, i12.opacity = 0.3, i12.transmission = 0.9, i12.thickness = 0.5, i12.clearcoat = 1, i12.clearcoatRoughness = 0, i12.ior = 1.5, i12.envMapIntensity = 1);
    let c4 = new l2.MeshPhysicalMaterial(i12);
    return s10.forEach(([o13]) => Object.defineProperty(c4, o13, { get: () => c4.uniforms[o13].value, set: (y9) => c4.uniforms[o13].value = y9 })), T4 && T4(c4), c4;
  }, [D3, H4, M5, T4, R7, b8]);
  return k2(() => () => {
    e21.dispose();
  }, [e21]), k2(() => {
    g6 === "on" ? p10.current.start() : p10.current.stop();
  }, [g6]), B2(() => {
    if (g6 === "on" && e21.userData.uTime) {
      let s10 = p10.current.getElapsedTime();
      j2 === "on" && Number.isFinite(f8) && f8 > 0 ? (s10 = s10 % f8, e21.userData.uLoop && (e21.userData.uLoop.value = 1), e21.userData.uLoopDuration && (e21.userData.uLoopDuration.value = f8)) : (e21.userData.uLoop && (e21.userData.uLoop.value = 0), N5 === "enabled" && Number.isFinite(m8) && Number.isFinite(E8) && E8 > m8 && (s10 = m8 + s10, s10 >= E8 && (s10 = m8, p10.current.start()))), e21.userData.uTime.value = s10;
    }
  }), V("primitive", { attach: "material", object: e21 });
};

// node_modules/@shadergradient/react/dist/chunk-OZWEDB42.mjs
var o2 = {};
A(o2, { fragment: () => n3, vertex: () => e3 });
var n3 = `
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include\uB97C \uD1B5\uD574 \uAC00\uC838\uC628 \uAC12\uC740 \uB300\uBD80\uBD84 \uD658\uACBD, \uBE5B \uB4F1\uC744 \uACC4\uC0B0\uD558\uAE30 \uC704\uD574\uC11C \uAE30\uBCF8 fragment
// shader\uC758 \uAC12\uB4E4\uC744 \uBC1B\uC544\uC654\uC2B5\uB2C8\uB2E4. \uC77C\uB2E8\uC740 \uBB34\uC2DC\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor\uB294 \uC624\uBE0C\uC81D\uD2B8\uC758 \uBCA0\uC774\uC2A4 \uC0C9\uC0C1 (\uD658\uACBD\uC774\uB098 \uBE5B\uC774 \uACE0\uB824\uB418\uC9C0 \uC54A\uC740 \uBCF8\uC5F0\uC758
  // \uC0C9)

  // mix(x, y, a): a\uB97C \uCD95\uC73C\uB85C \uD588\uC744 \uB54C \uAC00\uC7A5 \uB0AE\uC740 \uAC12\uC5D0\uC11C x\uAC12\uC758 \uC601\uD5A5\uB825\uC744 100%, \uAC00\uC7A5
  // \uB192\uC740 \uAC12\uC5D0\uC11C y\uAC12\uC758 \uC601\uD5A5\uB825\uC744 100%\uB85C \uB9CC\uB4E0\uB2E4. smoothstep(x, y, a): a\uCD95\uC744
  // \uAE30\uC900\uC73C\uB85C x\uB97C \uCD5C\uC18C\uAC12, y\uB97C \uCD5C\uB300\uAC12\uC73C\uB85C \uADF8 \uC0AC\uC774\uC758 \uAC12\uC744 \uCABC\uAC20\uB2E4. x\uC640 y \uC0AC\uC774\uB97C
  // 0-100 \uC0AC\uC774\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uCC98\uB7FC \uB2E8\uACC4\uBCC4\uB85C \uD45C\uD604\uD558\uACE0, x \uBBF8\uB9CC\uC758 \uAC12\uC740 0, y \uC774\uC0C1\uC758
  // \uAC12\uC740 100\uC73C\uB85C \uCC98\uB9AC

  // 1. smoothstep(-3.0, 3.0,vPos.x)\uB85C x\uCD95\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uAC00 \uD45C\uD604 \uB420 \uBC94\uC704\uB97C -3,
  // 3\uC73C\uB85C \uC815\uD55C\uB2E4.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))\uB85C color1\uACFC color3\uC744
  // \uC704\uC758 \uBC94\uC704 \uC548\uC5D0\uC11C \uADF8\uB77C\uB514\uC5B8\uD2B8\uB85C \uD45C\uD604\uD55C\uB2E4.
  // \uC608\uB97C \uB4E4\uC5B4 color1\uC774 \uB178\uB791, color3\uC774 \uD30C\uB791\uC774\uB77C\uACE0 \uCE58\uBA74, x\uCD95 \uAE30\uC900 -3\uBD80\uD130 3\uAE4C\uC9C0
  // \uB178\uB791\uACFC \uD30C\uB791 \uC0AC\uC774\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uAC00 \uB098\uD0C0\uB098\uACE0, -3\uBCF4\uB2E4 \uC791\uC740 \uAC12\uC5D0\uC11C\uB294 \uACC4\uC18D \uB178\uB791,
  // 3\uBCF4\uB2E4 \uD070 \uAC12\uC5D0\uC11C\uB294 \uACC4\uC18D \uD30C\uB791\uC774 \uB098\uD0C0\uB09C\uB2E4.
  // 3. mix()\uB97C \uD55C \uBC88 \uB354 \uC0AC\uC6A9\uD574\uC11C \uC704\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uC640 color2\uB97C z\uCD95 \uAE30\uC900\uC73C\uB85C
  // \uBD84\uBC30\uD55C\uB2E4.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //\uC704\uC5D0\uC11C \uC815\uC758\uD55C diffuseColor\uC5D0 \uD658\uACBD\uC774\uB098 \uBC18\uC0AC\uAC12\uB4E4\uC744 \uBC18\uC601\uD55C \uAC12.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor\uAC00 fragment shader\uB97C \uD1B5\uD574 \uB098\uD0C0\uB098\uB294 \uCD5C\uC885\uAC12\uC73C\uB85C, diffuseColor\uC5D0\uC11C
  // \uC815\uC758\uD55C \uADF8\uB77C\uB514\uC5B8\uD2B8 \uC0C9\uC0C1 \uC704\uC5D0 \uBC18\uC0AC\uB098 \uBE5B\uC744 \uACC4\uC0B0\uD55C \uAC12\uC744 \uCD5C\uC885\uAC12\uC73C\uB85C \uC815\uC758.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); \uC704\uCC98\uB7FC \uCD5C\uC885\uAC12\uC744 \uADF8\uB77C\uB514\uC5B8\uD2B8 \uAC12 \uC790\uCCB4\uB97C \uB123\uC73C\uBA74 \uD658\uACBD
  // \uC601\uD5A5\uC5C6\uB294 \uADF8\uB77C\uB514\uC5B8\uD2B8\uB9CC \uD45C\uD604\uB428.
}
`;
var e3 = `// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  vec3 noisePos = 0.43 * position * uNoiseDensity;
  float distortion;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    // Loop progress only depends on time and duration, not speed
    float loopProgress = uTime / uLoopDuration;
    float angle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    // Larger radius = more distance traveled = faster perceived motion
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points around the circle
    vec3 offset0 = vec3(cos(angle) * radius, sin(angle) * radius, 0.0);
    vec3 offset1 = vec3(cos(angle + 1.57079632679) * radius, sin(angle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(angle + 3.14159265359) * radius, sin(angle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(angle + 4.71238898038) * radius, sin(angle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = cnoise(noisePos + offset0);
    float n1 = cnoise(noisePos + offset1);
    float n2 = cnoise(noisePos + offset2);
    float n3 = cnoise(noisePos + offset3);
    
    // Smooth interpolation weights using cosine
    float w0 = (cos(angle) + 1.0) * 0.5;
    float w1 = (cos(angle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(angle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(angle + 4.71238898038) + 1.0) * 0.5;
    
    // Normalize weights
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend all samples with amplitude boost to match single-sample strength
    // Blending reduces amplitude by ~30%, so we compensate
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = 0.75 * blendedNoise * 1.5;
  } else {
    // Normal linear time progression
    distortion = 0.75 * cnoise(noisePos + t);
  }

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`;

// node_modules/@shadergradient/react/dist/chunk-VE5U2NIR.mjs
var i2 = {};
A(i2, { fragment: () => n4, vertex: () => e4 });
var n4 = `
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include\uB97C \uD1B5\uD574 \uAC00\uC838\uC628 \uAC12\uC740 \uB300\uBD80\uBD84 \uD658\uACBD, \uBE5B \uB4F1\uC744 \uACC4\uC0B0\uD558\uAE30 \uC704\uD574\uC11C \uAE30\uBCF8 fragment
// shader\uC758 \uAC12\uB4E4\uC744 \uBC1B\uC544\uC654\uC2B5\uB2C8\uB2E4. \uC77C\uB2E8\uC740 \uBB34\uC2DC\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;


// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter\uB85C \uC911\uC2EC\uC810\uACFC\uC758 \uAC70\uB9AC\uB97C \uAD6C\uD568.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//\uC704\uC5D0\uC11C \uC815\uC758\uD55C diffuseColor\uC5D0 \uD658\uACBD\uC774\uB098 \uBC18\uC0AC\uAC12\uB4E4\uC744 \uBC18\uC601\uD55C \uAC12.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance2(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor\uAC00 fragment shader\uB97C \uD1B5\uD574 \uB098\uD0C0\uB098\uB294 \uCD5C\uC885\uAC12\uC73C\uB85C, diffuseColor\uC5D0\uC11C
  // \uC815\uC758\uD55C \uADF8\uB77C\uB514\uC5B8\uD2B8 \uC0C9\uC0C1 \uC704\uC5D0 \uBC18\uC0AC\uB098 \uBE5B\uC744 \uACC4\uC0B0\uD55C \uAC12\uC744 \uCD5C\uC885\uAC12\uC73C\uB85C \uC815\uC758.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); \uC704\uCC98\uB7FC \uCD5C\uC885\uAC12\uC744 \uADF8\uB77C\uB514\uC5B8\uD2B8 \uAC12 \uC790\uCCB4\uB97C \uB123\uC73C\uBA74 \uD658\uACBD
  // \uC601\uD5A5\uC5C6\uB294 \uADF8\uB77C\uB514\uC5B8\uD2B8\uB9CC \uD45C\uD604\uB428.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`;
var e4 = `// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  float distortion;
  float angle;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    float loopProgress = uTime / uLoopDuration;
    float loopAngle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points
    vec3 offset0 = vec3(cos(loopAngle) * radius, sin(loopAngle) * radius, 0.0);
    vec3 offset1 = vec3(cos(loopAngle + 1.57079632679) * radius, sin(loopAngle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(loopAngle + 3.14159265359) * radius, sin(loopAngle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(loopAngle + 4.71238898038) * radius, sin(loopAngle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = pnoise((normal + offset0) * uNoiseDensity, vec3(10.0));
    float n1 = pnoise((normal + offset1) * uNoiseDensity, vec3(10.0));
    float n2 = pnoise((normal + offset2) * uNoiseDensity, vec3(10.0));
    float n3 = pnoise((normal + offset3) * uNoiseDensity, vec3(10.0));
    
    // Smooth interpolation weights
    float w0 = (cos(loopAngle) + 1.0) * 0.5;
    float w1 = (cos(loopAngle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(loopAngle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(loopAngle + 4.71238898038) + 1.0) * 0.5;
    
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend samples with amplitude boost to match single-sample strength
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = blendedNoise * 1.5 * uNoiseStrength;
    
    // Apply loop to spiral effect with blended offset
    float angleOffset = offset0.x * w0 + offset1.x * w1 + offset2.x * w2 + offset3.x * w3;
    angle = sin(uv.y * uFrequency + angleOffset) * uAmplitude;
  } else {
    // Normal linear time progression
    distortion = pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
    angle = sin(uv.y * uFrequency + t) * uAmplitude;
  }
  
  vec3 pos = position + (normal * distortion);
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`;

// node_modules/@shadergradient/react/dist/chunk-S63T3L7T.mjs
var o3 = {};
A(o3, { fragment: () => n5, vertex: () => e5 });
var n5 = `
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include\uB97C \uD1B5\uD574 \uAC00\uC838\uC628 \uAC12\uC740 \uB300\uBD80\uBD84 \uD658\uACBD, \uBE5B \uB4F1\uC744 \uACC4\uC0B0\uD558\uAE30 \uC704\uD574\uC11C \uAE30\uBCF8 fragment
// shader\uC758 \uAC12\uB4E4\uC744 \uBC1B\uC544\uC654\uC2B5\uB2C8\uB2E4. \uC77C\uB2E8\uC740 \uBB34\uC2DC\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4.

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

varying vec3 color1;
varying vec3 color2;
varying vec3 color3;

// for npm package, need to add this manually
// 'linearToRelativeLuminance' : function already has a body
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;

  #include <clipping_planes_fragment>

  vec4 diffuseColor = vec4(
      mix(mix(color1, color2, smoothstep(-3.0, 3.0, vPos.x)), color3, vPos.z),
      1);
  // diffuseColor\uB294 \uC624\uBE0C\uC81D\uD2B8\uC758 \uBCA0\uC774\uC2A4 \uC0C9\uC0C1 (\uD658\uACBD\uC774\uB098 \uBE5B\uC774 \uACE0\uB824\uB418\uC9C0 \uC54A\uC740 \uBCF8\uC5F0\uC758
  // \uC0C9)

  // mix(x, y, a): a\uB97C \uCD95\uC73C\uB85C \uD588\uC744 \uB54C \uAC00\uC7A5 \uB0AE\uC740 \uAC12\uC5D0\uC11C x\uAC12\uC758 \uC601\uD5A5\uB825\uC744 100%, \uAC00\uC7A5
  // \uB192\uC740 \uAC12\uC5D0\uC11C y\uAC12\uC758 \uC601\uD5A5\uB825\uC744 100%\uB85C \uB9CC\uB4E0\uB2E4. smoothstep(x, y, a): a\uCD95\uC744
  // \uAE30\uC900\uC73C\uB85C x\uB97C \uCD5C\uC18C\uAC12, y\uB97C \uCD5C\uB300\uAC12\uC73C\uB85C \uADF8 \uC0AC\uC774\uC758 \uAC12\uC744 \uCABC\uAC20\uB2E4. x\uC640 y \uC0AC\uC774\uB97C
  // 0-100 \uC0AC\uC774\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uCC98\uB7FC \uB2E8\uACC4\uBCC4\uB85C \uD45C\uD604\uD558\uACE0, x \uBBF8\uB9CC\uC758 \uAC12\uC740 0, y \uC774\uC0C1\uC758
  // \uAC12\uC740 100\uC73C\uB85C \uCC98\uB9AC

  // 1. smoothstep(-3.0, 3.0,vPos.x)\uB85C x\uCD95\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uAC00 \uD45C\uD604 \uB420 \uBC94\uC704\uB97C -3,
  // 3\uC73C\uB85C \uC815\uD55C\uB2E4.
  // 2. mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x))\uB85C color1\uACFC color3\uC744
  // \uC704\uC758 \uBC94\uC704 \uC548\uC5D0\uC11C \uADF8\uB77C\uB514\uC5B8\uD2B8\uB85C \uD45C\uD604\uD55C\uB2E4.
  // \uC608\uB97C \uB4E4\uC5B4 color1\uC774 \uB178\uB791, color3\uC774 \uD30C\uB791\uC774\uB77C\uACE0 \uCE58\uBA74, x\uCD95 \uAE30\uC900 -3\uBD80\uD130 3\uAE4C\uC9C0
  // \uB178\uB791\uACFC \uD30C\uB791 \uC0AC\uC774\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uAC00 \uB098\uD0C0\uB098\uACE0, -3\uBCF4\uB2E4 \uC791\uC740 \uAC12\uC5D0\uC11C\uB294 \uACC4\uC18D \uB178\uB791,
  // 3\uBCF4\uB2E4 \uD070 \uAC12\uC5D0\uC11C\uB294 \uACC4\uC18D \uD30C\uB791\uC774 \uB098\uD0C0\uB09C\uB2E4.
  // 3. mix()\uB97C \uD55C \uBC88 \uB354 \uC0AC\uC6A9\uD574\uC11C \uC704\uC758 \uADF8\uB77C\uB514\uC5B8\uD2B8\uC640 color2\uB97C z\uCD95 \uAE30\uC900\uC73C\uB85C
  // \uBD84\uBC30\uD55C\uB2E4.

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  // #include <transmissionmap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
    vec3 outgoingLight =
        reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
        reflectedLight.directSpecular + reflectedLight.indirectSpecular;
    //\uC704\uC5D0\uC11C \uC815\uC758\uD55C diffuseColor\uC5D0 \uD658\uACBD\uC774\uB098 \uBC18\uC0AC\uAC12\uB4E4\uC744 \uBC18\uC601\uD55C \uAC12.
  #ifdef TRANSMISSION
    diffuseColor.a *=
        mix(saturate(1. - totalTransmission +
                    linearToRelativeLuminance2(reflectedLight.directSpecular +
                                              reflectedLight.indirectSpecular)),
            1.0, metalness);
  #endif


  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>


  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor\uAC00 fragment shader\uB97C \uD1B5\uD574 \uB098\uD0C0\uB098\uB294 \uCD5C\uC885\uAC12\uC73C\uB85C, diffuseColor\uC5D0\uC11C
  // \uC815\uC758\uD55C \uADF8\uB77C\uB514\uC5B8\uD2B8 \uC0C9\uC0C1 \uC704\uC5D0 \uBC18\uC0AC\uB098 \uBE5B\uC744 \uACC4\uC0B0\uD55C \uAC12\uC744 \uCD5C\uC885\uAC12\uC73C\uB85C \uC815\uC758.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); \uC704\uCC98\uB7FC \uCD5C\uC885\uAC12\uC744 \uADF8\uB77C\uB514\uC5B8\uD2B8 \uAC12 \uC790\uCCB4\uB97C \uB123\uC73C\uBA74 \uD658\uACBD
  // \uC601\uD5A5\uC5C6\uB294 \uADF8\uB77C\uB514\uC5B8\uD2B8\uB9CC \uD45C\uD604\uB428.
}
`;
var e5 = `// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 
vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

uniform float uTime;
uniform float uSpeed;
uniform float uLoop;
uniform float uLoopDuration;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  
  // For seamless loops, sample noise using 4D-like circular interpolation
  vec3 noisePos = 0.43 * position * uNoiseDensity;
  float distortion;
  
  if (uLoop > 0.5) {
    // Create truly dynamic seamless loop using 4D noise simulation
    float loopProgress = uTime / uLoopDuration;
    float angle = loopProgress * 6.28318530718; // 2*PI
    
    // Radius scales with speed to maintain consistent visual speed
    float radius = 5.0 * uSpeed;
    
    // Sample 4 noise values at cardinal points
    vec3 offset0 = vec3(cos(angle) * radius, sin(angle) * radius, 0.0);
    vec3 offset1 = vec3(cos(angle + 1.57079632679) * radius, sin(angle + 1.57079632679) * radius, 0.0);
    vec3 offset2 = vec3(cos(angle + 3.14159265359) * radius, sin(angle + 3.14159265359) * radius, 0.0);
    vec3 offset3 = vec3(cos(angle + 4.71238898038) * radius, sin(angle + 4.71238898038) * radius, 0.0);
    
    // Get noise at all 4 points
    float n0 = cnoise(noisePos + offset0);
    float n1 = cnoise(noisePos + offset1);
    float n2 = cnoise(noisePos + offset2);
    float n3 = cnoise(noisePos + offset3);
    
    // Smooth interpolation weights
    float w0 = (cos(angle) + 1.0) * 0.5;
    float w1 = (cos(angle + 1.57079632679) + 1.0) * 0.5;
    float w2 = (cos(angle + 3.14159265359) + 1.0) * 0.5;
    float w3 = (cos(angle + 4.71238898038) + 1.0) * 0.5;
    
    float totalWeight = w0 + w1 + w2 + w3;
    w0 /= totalWeight;
    w1 /= totalWeight;
    w2 /= totalWeight;
    w3 /= totalWeight;
    
    // Blend samples with amplitude boost to match single-sample strength
    float blendedNoise = n0 * w0 + n1 * w1 + n2 * w2 + n3 * w3;
    distortion = 0.75 * blendedNoise * 1.5;
  } else {
    // Normal linear time progression
    distortion = 0.75 * cnoise(noisePos + t);
  }

  vec3 pos = position + normal * distortion * uNoiseStrength;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`;

// node_modules/@shadergradient/react/dist/chunk-5UBL6RAK.mjs
var p2 = {};
A(p2, { plane: () => o2, sphere: () => i2, waterPlane: () => o3 });

// node_modules/@shadergradient/react/dist/chunk-GEYS2LRX.mjs
var i3 = {};
A(i3, { fragment: () => n6, vertex: () => e6 });
var n6 = `// Glass Plane Fragment Shader - Transparency & Refraction

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - dot(viewDirection, normal), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  return vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  #else
  return vec3(0.5);
  #endif
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Glass-specific calculations
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // Base glass color gradient
  vec3 gradientColor = mix(uColor1, uColor2, vUv.y);
  gradientColor = mix(gradientColor, uColor3, fresnelFactor);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, uRefraction, uChromaticAberration);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Mix reflection and refraction based on Fresnel
  vec3 envColor = mix(refractionColor, reflectionColor, fresnelFactor * uReflectivity);
  
  // Combine with gradient color
  vec3 finalColor = mix(gradientColor, envColor, 0.7);
  
  // Apply transparency
  float finalAlpha = mix(uTransparency, 1.0, fresnelFactor * 0.5);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our glass color contribution
  outgoingLight += finalColor * 0.8;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`;
var e6 = `// Glass Plane Vertex Shader - Refraction & Transparency Effects

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;

// Noise functions for glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  #ifndef FLAT_SHADED
  vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // Create subtle wave distortion for glass effect
  float waveX = sin(position.x * uWaveFrequency + time) * uWaveAmplitude;
  float waveY = cos(position.y * uWaveFrequency + time) * uWaveAmplitude;
  float waveZ = sin(position.z * uWaveFrequency + time * 0.5) * uWaveAmplitude * 0.5;
  
  // Add noise for organic glass distortion
  vec3 noisePos = position + vec3(time * 0.1);
  float noise = snoise(noisePos * 0.5) * uNoiseStrength;
  
  // Apply distortion to transformed position
  transformed += vec3(waveX, waveY, waveZ) * uDistortion + normal * noise;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors
  vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with index of refraction for glass (1.5)
  float ior = 1.5;
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`;

// node_modules/@shadergradient/react/dist/chunk-LNX2N5NW.mjs
var i4 = {};
A(i4, { fragment: () => n7, vertex: () => e7 });
var n7 = `// Glass Sphere Fragment Shader - Transparency & Refraction

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vDistortion;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - abs(dot(viewDirection, normal)), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  return vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  #else
  return vec3(0.5);
  #endif
}

// Caustics simulation for sphere
float caustics(vec3 position, float time) {
  float c1 = sin(position.x * 4.0 + time) * sin(position.y * 4.0 + time * 0.8);
  float c2 = sin(position.z * 3.0 - time * 1.2) * sin(position.x * 3.0 + time);
  return (c1 + c2) * 0.5 + 0.5;
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Glass-specific calculations
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // For sphere, use spherical UV mapping for gradient
  float sphericalU = atan(vPosition.z, vPosition.x) / (2.0 * PI) + 0.5;
  float sphericalV = acos(vPosition.y / length(vPosition)) / PI;
  vec2 sphericalUV = vec2(sphericalU, sphericalV);
  
  // Create color gradient based on spherical coordinates
  vec3 gradientColor = mix(uColor1, uColor2, sphericalUV.y);
  gradientColor = mix(gradientColor, uColor3, pow(fresnelFactor, 1.5));
  
  // Add caustics effect for sphere
  float causticsValue = caustics(vGlassWorldPos, uTime);
  gradientColor += vec3(causticsValue * 0.1);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration (enhanced for sphere)
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    float chromaticIntensity = uChromaticAberration * (1.0 + vDistortion * 0.5);
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, uRefraction, chromaticIntensity);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Mix reflection and refraction based on Fresnel (stronger effect for sphere)
  vec3 envColor = mix(refractionColor, reflectionColor, fresnelFactor * uReflectivity);
  
  // Add inner glow effect for sphere
  float innerGlow = pow(1.0 - abs(dot(viewDirection, worldNormal)), 3.0);
  vec3 glowColor = mix(uColor2, uColor3, innerGlow) * innerGlow * 0.5;
  
  // Combine all effects
  vec3 finalColor = mix(gradientColor, envColor, 0.8) + glowColor;
  
  // Apply transparency with sphere thickness consideration
  float thickness = 1.0 - pow(abs(dot(viewDirection, worldNormal)), 0.5);
  float finalAlpha = mix(uTransparency * thickness, 1.0, fresnelFactor * 0.7);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our glass color contribution
  outgoingLight += finalColor * 0.9;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`;
var e7 = `// Glass Sphere Vertex Shader - Refraction & Transparency Effects

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vDistortion;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;

// Noise functions for glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  #ifndef FLAT_SHADED
  vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // For sphere, use spherical coordinates for better distortion
  float theta = atan(position.z, position.x);
  float phi = acos(position.y / length(position));
  
  // Create waves based on spherical coordinates
  float waveTheta = sin(theta * uWaveFrequency * 2.0 + time) * uWaveAmplitude;
  float wavePhi = cos(phi * uWaveFrequency + time * 1.5) * uWaveAmplitude;
  
  // Add noise for organic glass distortion
  vec3 noisePos = position + vec3(time * 0.1);
  float noise = snoise(noisePos * 0.8) * uNoiseStrength;
  
  // Calculate distortion based on position on sphere
  float distortionAmount = (waveTheta + wavePhi) * uDistortion + noise;
  vDistortion = distortionAmount;
  
  // Apply distortion along normal for sphere
  transformed += normal * distortionAmount;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors
  vec3 worldNormal = normalize(mat3(modelMatrix) * normal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with index of refraction for glass (1.5)
  // For sphere, adjust IOR based on curvature
  float ior = 1.5 + sin(theta * 2.0 + time) * 0.1;
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`;

// node_modules/@shadergradient/react/dist/chunk-4ZGMESHB.mjs
var o4 = {};
A(o4, { fragment: () => e8, vertex: () => n8 });
var e8 = `// Glass WaterPlane Fragment Shader - Liquid Glass Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

// transmission is already defined by Three.js when TRANSMISSION is enabled
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif

varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif

#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
#include <transmission_pars_fragment>

// Custom uniforms for liquid glass effect
uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uTransparency;
uniform float uRefraction;
uniform float uChromaticAberration;
uniform float uFresnelPower;
uniform float uReflectivity;
// envMap and envMapIntensity are provided by Three.js
uniform float uLiquidEffect;
uniform float uFoamIntensity;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vWaveHeight;
varying vec3 vWaveNormal;

// Fresnel calculation
float fresnel(vec3 viewDirection, vec3 normal, float power) {
  return pow(1.0 - abs(dot(viewDirection, normal)), power);
}

// Chromatic aberration for refraction
vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float ior, float chromaticStrength) {
  vec3 refractedR = refract(viewDirection, normal, 1.0 / (ior - chromaticStrength));
  vec3 refractedG = refract(viewDirection, normal, 1.0 / ior);
  vec3 refractedB = refract(viewDirection, normal, 1.0 / (ior + chromaticStrength));
  
  #ifdef ENVMAP_TYPE_CUBE
  vec3 result = vec3(
    textureCube(envMap, refractedR).r,
    textureCube(envMap, refractedG).g,
    textureCube(envMap, refractedB).b
  );
  
  // Add distortion based on wave height
  float distortion = vWaveHeight * 0.1;
  result = mix(result, textureCube(envMap, refractedG + vec3(distortion)).rgb, 0.3);
  #else
  vec3 result = vec3(0.5);
  #endif
  
  return result;
}

// Foam effect for water surface
float foam(vec2 uv, float waveHeight, float time) {
  float foamThreshold = 0.3;
  float foamAmount = smoothstep(foamThreshold - 0.1, foamThreshold + 0.1, abs(waveHeight));
  
  // Add foam texture pattern
  float foamPattern = sin(uv.x * 40.0 + time) * cos(uv.y * 30.0 - time * 0.5);
  foamPattern += sin(uv.x * 25.0 - time * 0.8) * sin(uv.y * 35.0 + time);
  foamPattern = clamp(foamPattern * 0.5 + 0.5, 0.0, 1.0);
  
  return foamAmount * foamPattern;
}

// Caustics for underwater effect
vec3 caustics(vec3 position, float time) {
  float c1 = sin(position.x * 6.0 + time * 1.5) * sin(position.z * 6.0 + time);
  float c2 = cos(position.x * 4.0 - time) * cos(position.z * 5.0 + time * 1.2);
  float c3 = sin((position.x + position.z) * 3.0 + time * 0.8);
  
  float causticPattern = (c1 + c2 + c3) / 3.0;
  causticPattern = pow(max(0.0, causticPattern), 2.0);
  
  return vec3(causticPattern) * vec3(0.3, 0.6, 1.0);
}

void main() {
  #include <clipping_planes_fragment>
  
  vec4 diffuseColor = vec4(diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
  
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <specularmap_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  
  // Use wave normal for more accurate water surface
  vec3 viewDirection = normalize(vViewPosition);
  vec3 worldNormal = normalize(vWaveNormal);
  
  // Calculate Fresnel effect
  float fresnelFactor = fresnel(viewDirection, worldNormal, uFresnelPower);
  
  // Water color gradient with depth effect
  float depth = 1.0 - abs(vWaveHeight) * 2.0;
  vec3 shallowColor = mix(uColor1, uColor2, vUv.y);
  vec3 deepColor = mix(uColor2, uColor3, depth);
  vec3 gradientColor = mix(shallowColor, deepColor, fresnelFactor);
  
  // Add foam effect
  float foamAmount = foam(vUv, vWaveHeight, uTime) * uFoamIntensity;
  vec3 foamColor = vec3(1.0, 1.0, 1.0);
  gradientColor = mix(gradientColor, foamColor, foamAmount);
  
  // Reflection
  #ifdef ENVMAP_TYPE_CUBE
  vec3 reflectionColor = textureCube(envMap, vReflect).rgb * envMapIntensity;
  
  // Add slight blur to reflection for water effect
  vec3 blurredReflection = reflectionColor;
  for (int i = 0; i < 4; i++) {
    vec3 offset = vec3(
      sin(float(i) * 2.0) * 0.01,
      0.0,
      cos(float(i) * 2.0) * 0.01
    );
    blurredReflection += textureCube(envMap, vReflect + offset).rgb * envMapIntensity;
  }
  blurredReflection /= 5.0;
  reflectionColor = mix(reflectionColor, blurredReflection, uLiquidEffect);
  #else
  vec3 reflectionColor = vec3(0.5);
  #endif
  
  // Refraction with chromatic aberration (stronger for water)
  vec3 refractionColor;
  #ifdef ENVMAP_TYPE_CUBE
  if (uChromaticAberration > 0.0) {
    float waterIOR = 1.33 + vWaveHeight * 0.1;
    refractionColor = chromaticRefraction(-viewDirection, worldNormal, waterIOR, uChromaticAberration * 1.5);
  } else {
    refractionColor = textureCube(envMap, vRefract).rgb;
  }
  refractionColor *= envMapIntensity;
  #else
  refractionColor = vec3(0.3);
  #endif
  
  // Add caustics to refraction
  vec3 causticsColor = caustics(vGlassWorldPos, uTime);
  refractionColor += causticsColor * 0.3 * uLiquidEffect;
  
  // Mix reflection and refraction based on Fresnel and wave
  float reflectionMix = fresnelFactor * uReflectivity * (1.0 + abs(vWaveHeight));
  vec3 envColor = mix(refractionColor, reflectionColor, clamp(reflectionMix, 0.0, 1.0));
  
  // Combine all effects
  vec3 finalColor = mix(gradientColor, envColor, 0.85);
  
  // Apply transparency with wave variation
  float waveAlpha = 1.0 - abs(vWaveHeight) * 0.3;
  float finalAlpha = mix(uTransparency * waveAlpha, 1.0, fresnelFactor * 0.6 + foamAmount * 0.4);
  
  // Set diffuse color for standard lighting
  diffuseColor.rgb = finalColor;
  diffuseColor.a = finalAlpha;
  
  // Skip transmission_fragment to avoid conflicts
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + 
                       reflectedLight.directSpecular + reflectedLight.indirectSpecular + 
                       totalEmissiveRadiance;
  
  // Add our liquid glass color contribution
  outgoingLight += finalColor * 0.95;
  
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}
`;
var n8 = `// Glass WaterPlane Vertex Shader - Liquid Glass Effect

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vGlassWorldPos;
varying vec3 vReflect;
varying vec3 vRefract;
varying float vWaveHeight;
varying vec3 vWaveNormal;

uniform float uTime;
uniform float uSpeed;
uniform float uWaveAmplitude;
uniform float uWaveFrequency;
uniform float uNoiseStrength;
uniform float uDistortion;
uniform float uFlowSpeed;
uniform vec2 uFlowDirection;

// Noise functions for water-like glass distortion
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1),
    dot(p2, x2), dot(p3, x3)));
}

// Water wave function
vec3 waterWave(vec2 pos, float time) {
  // Flow effect
  vec2 flowPos = pos + uFlowDirection * time * uFlowSpeed;
  
  // Multiple wave layers for realistic water
  float wave1 = sin(flowPos.x * uWaveFrequency + time) * cos(flowPos.y * uWaveFrequency * 0.8 + time * 0.7);
  float wave2 = sin(flowPos.x * uWaveFrequency * 1.7 - time * 1.3) * sin(flowPos.y * uWaveFrequency * 1.3 + time);
  float wave3 = cos(flowPos.x * uWaveFrequency * 0.5 + time * 0.5) * sin(flowPos.y * uWaveFrequency * 0.6 - time * 0.8);
  
  // Combine waves
  float height = (wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2) * uWaveAmplitude;
  
  // Calculate wave normals
  float dx = cos(flowPos.x * uWaveFrequency + time) * uWaveFrequency * 0.5 * uWaveAmplitude;
  float dz = -sin(flowPos.y * uWaveFrequency * 0.8 + time * 0.7) * uWaveFrequency * 0.8 * 0.5 * uWaveAmplitude;
  
  return vec3(dx, height, dz);
}

void main() {
  #include <uv_pars_vertex>
  #include <uv_vertex>
  #include <uv2_pars_vertex>
  #include <uv2_vertex>
  #include <color_pars_vertex>
  #include <color_vertex>
  #include <morphcolor_vertex>
  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <defaultnormal_vertex>
  #include <normal_vertex>
  
  // Pass UV coordinates
  vUv = uv;

  // Calculate time-based animation
  float time = uTime * uSpeed;
  
  // Calculate water waves
  vec3 waveData = waterWave(position.xz, time);
  float waveHeight = waveData.y;
  vec2 waveGradient = waveData.xz;
  
  // Add noise for organic water movement
  vec3 noisePos = vec3(position.x, position.y, position.z) + vec3(time * 0.05);
  float noise = snoise(noisePos * 1.2) * uNoiseStrength * 0.5;
  
  // Store wave height for fragment shader
  vWaveHeight = waveHeight + noise;
  
  // Calculate perturbed normal for water surface
  vec3 waveNormal = normalize(vec3(-waveGradient.x, 1.0, -waveGradient.y));
  vWaveNormal = waveNormal;
  
  // Blend original normal with wave normal
  vec3 blendedNormal = normalize(mix(normal, waveNormal, 0.7));
  
  #ifndef FLAT_SHADED
  vNormal = normalize(mat3(modelViewMatrix) * blendedNormal);
  #ifdef USE_TANGENT
  vTangent = normalize(transformedTangent);
  vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  
  #include <begin_vertex>
  #include <morphtarget_vertex>
  #include <skinning_vertex>
  #include <displacementmap_vertex>
  
  // Apply wave displacement and additional distortion
  transformed.y += waveHeight + noise;
  transformed += blendedNormal * uDistortion * noise;
  
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>
  
  vViewPosition = -mvPosition.xyz;
  vPosition = transformed;
  
  // Calculate world position for refraction
  vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
  vGlassWorldPos = worldPosition.xyz;
  
  // Calculate reflection and refraction vectors with wave normal
  vec3 worldNormal = normalize(mat3(modelMatrix) * blendedNormal);
  vec3 viewVector = normalize(cameraPosition - worldPosition.xyz);
  
  // Reflection vector
  vReflect = reflect(-viewVector, worldNormal);
  
  // Refraction vector with varying IOR for water effect
  float ior = 1.33 + sin(time + position.x * 2.0) * 0.1; // Water IOR ~1.33
  vRefract = refract(-viewVector, worldNormal, 1.0 / ior);
  
  #include <fog_vertex>
  #include <shadowmap_vertex>
}
`;

// node_modules/@shadergradient/react/dist/chunk-SNM3FAAB.mjs
var p3 = {};
A(p3, { plane: () => i3, sphere: () => i4, waterPlane: () => o4 });

// node_modules/@shadergradient/react/dist/chunk-QDM5QQJ2.mjs
var t3 = {};
A(t3, { fragment: () => n9, vertex: () => e9 });
var n9 = `uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;


varying vec3 vNormal;
varying vec3 vPos;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  gl_FragColor = vec4(color1 * vPos.x + color2 * vPos.y + color3 * vPos.z, 1.);

}
`;
var e9 = `// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  // vNormal = normal;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`;

// node_modules/@shadergradient/react/dist/chunk-7UVO7YQS.mjs
var r2 = {};
A(r2, { fragment: () => n10, vertex: () => e10 });
var n10 = `
#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
// #include <transmissionmap_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>
// include\uB97C \uD1B5\uD574 \uAC00\uC838\uC628 \uAC12\uC740 \uB300\uBD80\uBD84 \uD658\uACBD, \uBE5B \uB4F1\uC744 \uACC4\uC0B0\uD558\uAE30 \uC704\uD574\uC11C \uAE30\uBCF8 fragment
// shader\uC758 \uAC12\uB4E4\uC744 \uBC1B\uC544\uC654\uC2B5\uB2C8\uB2E4. \uC77C\uB2E8\uC740 \uBB34\uC2DC\uD558\uC154\uB3C4 \uB429\uB2C8\uB2E4.
varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;
varying vec3 color1;
varying vec3 color2;
varying vec3 color3;
varying float distanceToCenter;
void main() {
  //-------- basic gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.5;
#include <clipping_planes_fragment>

  float distanceToCenter = distance(vPos, vec3(0, 0, 0));
  // distanceToCenter\uB85C \uC911\uC2EC\uC810\uACFC\uC758 \uAC70\uB9AC\uB97C \uAD6C\uD568.

  vec4 diffuseColor =
      vec4(mix(color3, mix(color2, color1, smoothstep(-1.0, 1.0, vPos.y)),
               distanceToCenter),
           1);

  //-------- materiality ------------
  ReflectedLight reflectedLight =
      ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive;
#ifdef TRANSMISSION
  float totalTransmission = transmission;
#endif
#include <logdepthbuf_fragment>
#include <map_fragment>
#include <color_fragment>
#include <alphamap_fragment>
#include <alphatest_fragment>
#include <roughnessmap_fragment>
#include <metalnessmap_fragment>
#include <normal_fragment_begin>
#include <normal_fragment_maps>
#include <clearcoat_normal_fragment_begin>
#include <clearcoat_normal_fragment_maps>
#include <emissivemap_fragment>
// #include <transmissionmap_fragment>
#include <lights_physical_fragment>
#include <lights_fragment_begin>
#include <lights_fragment_maps>
#include <lights_fragment_end>
#include <aomap_fragment>
  vec3 outgoingLight =
      reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
      reflectedLight.directSpecular + reflectedLight.indirectSpecular;
//\uC704\uC5D0\uC11C \uC815\uC758\uD55C diffuseColor\uC5D0 \uD658\uACBD\uC774\uB098 \uBC18\uC0AC\uAC12\uB4E4\uC744 \uBC18\uC601\uD55C \uAC12.
#ifdef TRANSMISSION
  diffuseColor.a *=
      mix(saturate(1. - totalTransmission +
                   linearToRelativeLuminance(reflectedLight.directSpecular +
                                             reflectedLight.indirectSpecular)),
          1.0, metalness);
#endif
  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
  // gl_FragColor\uAC00 fragment shader\uB97C \uD1B5\uD574 \uB098\uD0C0\uB098\uB294 \uCD5C\uC885\uAC12\uC73C\uB85C, diffuseColor\uC5D0\uC11C
  // \uC815\uC758\uD55C \uADF8\uB77C\uB514\uC5B8\uD2B8 \uC0C9\uC0C1 \uC704\uC5D0 \uBC18\uC0AC\uB098 \uBE5B\uC744 \uACC4\uC0B0\uD55C \uAC12\uC744 \uCD5C\uC885\uAC12\uC73C\uB85C \uC815\uC758.
  // gl_FragColor = vec4(mix(mix(color1, color3, smoothstep(-3.0, 3.0,vPos.x)),
  // color2, vNormal.z), 1.0); \uC704\uCC98\uB7FC \uCD5C\uC885\uAC12\uC744 \uADF8\uB77C\uB514\uC5B8\uD2B8 \uAC12 \uC790\uCCB4\uB97C \uB123\uC73C\uBA74 \uD658\uACBD
  // \uC601\uD5A5\uC5C6\uB294 \uADF8\uB77C\uB514\uC5B8\uD2B8\uB9CC \uD45C\uD604\uB428.

#include <tonemapping_fragment>
#include <encodings_fragment>
#include <fog_fragment>
#include <premultiplied_alpha_fragment>
#include <dithering_fragment>
}
`;
var e10 = `// #pragma glslify: pnoise = require(glsl-noise/periodic/3d)

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}


//-------- start here ------------

varying vec3 vNormal;
uniform float uTime;
uniform float uSpeed;
uniform float uNoiseDensity;
uniform float uNoiseStrength;
uniform float uFrequency;
uniform float uAmplitude;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying vec3 vViewPosition;

#define STANDARD
#ifndef FLAT_SHADED
  #ifdef USE_TANGENT
    varying vec3 vTangent;
    varying vec3 vBitangent;
  #endif
#endif

#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>


// rotation
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

void main() {
  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  float t = uTime * uSpeed;
  float distortion =
      pnoise((normal + t) * uNoiseDensity, vec3(10.0)) * uNoiseStrength;
  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFrequency + t) * uAmplitude;
  pos = rotateY(pos, angle);

  vPos = pos;
  vDistort = distortion;
  vNormal = normal;
  vUv = uv;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`;

// node_modules/@shadergradient/react/dist/chunk-KSOJKU6C.mjs
var t4 = {};
A(t4, { fragment: () => n11, vertex: () => e11 });
var n11 = `uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;


varying vec3 vNormal;
varying vec3 vPos;

void main() {
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);

  gl_FragColor = vec4(color1 * vPos.x + color2 * vPos.y + color3 * vPos.z, 1.);

}
`;
var e11 = `// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- start here ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;

varying vec2 vUv;

uniform float uTime;
uniform float uSpeed;

uniform float uLoadingTime;

uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- start vertex ------------
  vUv = uv;

  // vNormal = normal;

  float t = uTime * uSpeed;
  // Create a sine wave from top to bottom of the sphere
  float distortion = 0.75 * cnoise(0.43 * position * uNoiseDensity + t);

  vec3 pos = position + normal * distortion * uNoiseStrength * uLoadingTime;
  vPos = pos;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`;

// node_modules/@shadergradient/react/dist/chunk-65KZC4AC.mjs
var p4 = {};
A(p4, { plane: () => t3, sphere: () => r2, waterPlane: () => t4 });

// node_modules/@shadergradient/react/dist/chunk-6I4MTSXI.mjs
var o5 = {};
A(o5, { fragment: () => n12, vertex: () => e12 });
var n12 = `// Cosmic Plane Fragment Shader - Holographic Gradient

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vHolographicIntensity;
varying float vCosmicWave;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Holographic helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Holographic Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.2; // More reflective for holographic effect

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Create holographic interference patterns
  float interference1 = sin(vPos.x * 20.0 + t * 3.0) * cos(vPos.y * 15.0 + t * 2.0);
  float interference2 = sin(vPos.x * 35.0 + t * 4.0) * sin(vPos.y * 30.0 + t * 3.5);
  float interference3 = cos(vPos.x * 50.0 + t * 5.0) * cos(vPos.y * 45.0 + t * 4.5);
  
  // Combine interference patterns
  float holographicPattern = (interference1 + interference2 * 0.5 + interference3 * 0.25) / 1.75;
  
  // Create cosmic shimmer effect
  float shimmer = noise2D(vPos.xy * 40.0 + t * 2.0) * 0.3;
  float cosmicGlow = noise2D(vPos.xy * 8.0 + t * 0.5) * 0.5;
  
  // Holographic color shifting
  vec3 holographicShift = vec3(
    sin(vPos.x * 10.0 + t * 2.0 + 0.0) * 0.1,
    sin(vPos.x * 10.0 + t * 2.0 + 2.094) * 0.1,  // 120 degrees
    sin(vPos.x * 10.0 + t * 2.0 + 4.188) * 0.1   // 240 degrees
  );
  
  // Enhanced gradient mixing with cosmic effects
  float gradientX = smoothstep(-4.0, 4.0, vPos.x + holographicPattern * 2.0);
  float gradientY = smoothstep(-4.0, 4.0, vPos.y + vCosmicWave * 1.5);
  float gradientZ = smoothstep(-2.0, 2.0, vPos.z + shimmer);
  
  // Multi-layer color mixing for depth
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.7 + gradientZ * 0.3
  );
  
  // Apply holographic color shifts
  vec3 holographicColor = baseGradient + holographicShift;
  
  // Add cosmic glow and shimmer
  vec3 cosmicEnhancement = vec3(
    cosmicGlow * 0.2,
    shimmer * 0.15,
    (cosmicGlow + shimmer) * 0.1
  );
  
  // Holographic intensity modulation
  float intensityMod = 1.0 + vHolographicIntensity * 0.5 + abs(holographicPattern) * 0.3;
  
  // Final color with cosmic and holographic effects
  vec3 finalColor = (holographicColor + cosmicEnhancement) * intensityMod;
  
  // Add subtle iridescence
  float iridescence = sin(vPos.x * 25.0 + t * 3.0) * cos(vPos.y * 20.0 + t * 2.5) * 0.1;
  finalColor += vec3(iridescence * 0.2, iridescence * 0.3, iridescence * 0.4);

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Holographic Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.1; // Add some emission for glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`;
var e12 = `// Cosmic Plane Vertex Shader - Holographic Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Holographic Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

mat3 rotation3dX(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }
vec3 rotateX(vec3 v, float angle) { return rotation3dX(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vHolographicIntensity;
varying float vCosmicWave;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Holographic Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create holographic interference patterns
  float holographicPattern = sin(position.x * 15.0 + t * 2.0) * 
                            sin(position.y * 12.0 + t * 1.5) * 0.1;
  
  // Cosmic wave distortion
  float cosmicWave = cnoise(position * uNoiseDensity * 0.5 + vec3(t * 0.3, t * 0.2, t * 0.4));
  vCosmicWave = cosmicWave;
  
  // Multi-layer noise for depth
  float noise1 = cnoise(position * uNoiseDensity * 2.0 + t * 0.8);
  float noise2 = cnoise(position * uNoiseDensity * 0.3 + t * 0.2) * 0.5;
  float noise3 = cnoise(position * uNoiseDensity * 4.0 + t * 1.2) * 0.25;
  
  float combinedNoise = noise1 + noise2 + noise3;
  
  // Holographic shimmer effect
  float shimmer = sin(position.x * 30.0 + t * 4.0) * 
                  cos(position.y * 25.0 + t * 3.0) * 0.05;
  
  // Calculate holographic intensity for fragment shader
  vHolographicIntensity = abs(holographicPattern) + abs(shimmer) * 2.0;
  
  // Apply displacement with holographic and cosmic effects
  float totalDisplacement = (combinedNoise + holographicPattern + shimmer) * uNoiseStrength * uLoadingTime;
  
  vec3 pos = position + normal * totalDisplacement;
  vPos = pos;
  
  // Add subtle rotation effect for cosmic feel
  pos = rotateY(pos, sin(t * 0.1) * 0.05);
  pos = rotateX(pos, cos(t * 0.07) * 0.03);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

// node_modules/@shadergradient/react/dist/chunk-B5JTL55V.mjs
var a3 = {};
A(a3, { fragment: () => n13, vertex: () => e13 });
var n13 = `// Cosmic Sphere Fragment Shader - Nebula Particle Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vNebulaIntensity;
varying float vParticleDensity;
varying vec3 vCosmicSwirl;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Nebula helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// Fractal Brownian Motion for complex nebula patterns
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 5; i++) {
        value += amplitude * noise2D(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}

// Star field generation
float stars(vec2 p, float density) {
    vec2 n = floor(p * density);
    vec2 f = fract(p * density);
    
    float d = 1.0;
    for(int i = -1; i <= 1; i++) {
        for(int j = -1; j <= 1; j++) {
            vec2 g = vec2(float(i), float(j));
            vec2 o = hash(n + g) * vec2(1.0);
            vec2 r = g + o - f;
            d = min(d, dot(r, r));
        }
    }
    
    return 1.0 - smoothstep(0.0, 0.02, sqrt(d));
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Nebula Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.1; // Very reflective for cosmic shine

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Calculate distance from center for radial effects
  float distanceFromCenter = length(vPos);
  float angle = atan(vPos.y, vPos.x);
  
  // Create complex nebula patterns using FBM
  vec2 nebulaCoords = vPos.xy * 3.0 + vCosmicSwirl.xy;
  float nebulaPattern1 = fbm(nebulaCoords + t * 0.1);
  float nebulaPattern2 = fbm(nebulaCoords * 2.0 + t * 0.15);
  float nebulaPattern3 = fbm(nebulaCoords * 4.0 + t * 0.2);
  
  // Combine nebula patterns
  float combinedNebula = (nebulaPattern1 + nebulaPattern2 * 0.5 + nebulaPattern3 * 0.25) / 1.75;
  
  // Create particle-like bright spots
  float particleField = stars(vPos.xy * 20.0 + t * 0.5, 50.0);
  float microParticles = stars(vPos.xy * 80.0 + t * 1.0, 200.0) * 0.5;
  
  // Create cosmic dust clouds
  float dustClouds = fbm(vPos.xy * 8.0 + t * 0.05) * 0.3;
  
  // Energy streams
  float energyStream1 = sin(vPos.x * 15.0 + t * 3.0 + angle * 2.0) * 0.1;
  float energyStream2 = cos(vPos.y * 20.0 + t * 2.5 + distanceFromCenter * 5.0) * 0.1;
  
  // Cosmic gradient mixing with nebula influence
  float gradientX = smoothstep(-3.0, 3.0, vPos.x + combinedNebula * 2.0 + vCosmicSwirl.x * 3.0);
  float gradientY = smoothstep(-3.0, 3.0, vPos.y + vNebulaIntensity * 1.5 + vCosmicSwirl.y * 2.0);
  float gradientZ = smoothstep(-2.0, 2.0, vPos.z + dustClouds * 2.0);
  
  // Multi-layer color mixing
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.6 + gradientZ * 0.4
  );
  
  // Add nebula color variations
  vec3 nebulaColor = baseGradient;
  nebulaColor.r += combinedNebula * 0.3 + energyStream1;
  nebulaColor.g += vNebulaIntensity * 0.2 + energyStream2;
  nebulaColor.b += dustClouds * 0.4 + abs(vCosmicSwirl.z) * 0.5;
  
  // Add particle brightness
  vec3 particleGlow = vec3(
    particleField * 0.8 + microParticles * 0.4,
    particleField * 0.6 + microParticles * 0.3,
    particleField * 0.9 + microParticles * 0.5
  );
  
  // Create pulsing cosmic energy
  float cosmicPulse = sin(t * 1.5 + distanceFromCenter * 3.0) * 0.1 + 1.0;
  
  // Combine all effects
  vec3 finalColor = (nebulaColor + particleGlow * 2.0) * cosmicPulse;
  
  // Add cosmic rim lighting effect
  float rimLight = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewPosition))), 2.0);
  finalColor += rimLight * 0.3 * (color1 + color2 + color3) / 3.0;
  
  // Enhance particle density areas
  finalColor = mix(finalColor, finalColor * 1.5, vParticleDensity * 0.5);
  
  // Add subtle color temperature variation
  float temperature = sin(angle * 3.0 + t * 0.8) * 0.1;
  finalColor.r += temperature * 0.1;
  finalColor.b -= temperature * 0.1;

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Cosmic Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.2; // Strong emission for nebula glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`;
var e13 = `// Cosmic Sphere Vertex Shader - Nebula Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Nebula Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

mat3 rotation3dX(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c);
}

mat3 rotation3dZ(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, s, 0.0, -s, c, 0.0, 0.0, 0.0, 1.0);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }
vec3 rotateX(vec3 v, float angle) { return rotation3dX(angle) * v; }
vec3 rotateZ(vec3 v, float angle) { return rotation3dZ(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vNebulaIntensity;
varying float vParticleDensity;
varying vec3 vCosmicSwirl;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Nebula Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create swirling nebula patterns
  vec3 swirlCenter = vec3(0.0, 0.0, 0.0);
  vec3 toCenter = position - swirlCenter;
  float distanceFromCenter = length(toCenter);
  
  // Create spiral motion
  float angle = atan(toCenter.y, toCenter.x);
  float spiralAngle = angle + distanceFromCenter * 2.0 + t * 0.5;
  
  // Multi-octave noise for nebula density
  float nebula1 = cnoise(position * uNoiseDensity * 0.8 + vec3(t * 0.2, t * 0.3, t * 0.1));
  float nebula2 = cnoise(position * uNoiseDensity * 1.5 + vec3(t * 0.4, t * 0.2, t * 0.5)) * 0.7;
  float nebula3 = cnoise(position * uNoiseDensity * 3.0 + vec3(t * 0.8, t * 0.6, t * 0.9)) * 0.4;
  float nebula4 = cnoise(position * uNoiseDensity * 6.0 + vec3(t * 1.2, t * 1.0, t * 1.4)) * 0.2;
  
  // Combine nebula layers for complexity
  float nebulaPattern = nebula1 + nebula2 + nebula3 + nebula4;
  vNebulaIntensity = abs(nebulaPattern);
  
  // Create particle-like density variations
  float particleDensity = cnoise(position * uNoiseDensity * 8.0 + vec3(t * 2.0, t * 1.5, t * 2.5));
  vParticleDensity = smoothstep(-0.3, 0.8, particleDensity);
  
  // Create cosmic swirl effect
  vec3 swirl = vec3(
    sin(spiralAngle + t * 0.3) * distanceFromCenter * 0.1,
    cos(spiralAngle + t * 0.2) * distanceFromCenter * 0.1,
    sin(distanceFromCenter * 3.0 + t * 0.4) * 0.05
  );
  vCosmicSwirl = swirl;
  
  // Create pulsing effect for cosmic energy
  float pulse = sin(t * 2.0 + distanceFromCenter * 5.0) * 0.1 + 1.0;
  
  // Apply complex displacement
  float totalDisplacement = nebulaPattern * uNoiseStrength * uLoadingTime * pulse;
  
  // Add swirl displacement
  vec3 pos = position + normal * totalDisplacement + swirl * 0.3;
  vPos = pos;
  
  // Add cosmic rotation for dynamic feel
  pos = rotateY(pos, sin(t * 0.1 + distanceFromCenter) * 0.1);
  pos = rotateX(pos, cos(t * 0.08 + angle) * 0.08);
  pos = rotateZ(pos, sin(t * 0.05 + spiralAngle) * 0.05);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

// node_modules/@shadergradient/react/dist/chunk-N4CAJBCU.mjs
var a4 = {};
A(a4, { fragment: () => n14, vertex: () => e14 });
var n14 = `// Cosmic WaterPlane Fragment Shader - Aurora Wave Effect

#define STANDARD
#ifdef PHYSICAL
#define REFLECTIVITY
#define CLEARCOAT
#define TRANSMISSION
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef TRANSMISSION
uniform float transmission;
#endif
#ifdef REFLECTIVITY
uniform float reflectivity;
#endif
#ifdef CLEARCOAT
uniform float clearcoat;
uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <color_pars_fragment>
#include <common>
#include <dithering_pars_fragment>
#include <emissivemap_pars_fragment>
#include <lightmap_pars_fragment>
#include <map_pars_fragment>
#include <packing>
#include <uv2_pars_fragment>
#include <uv_pars_fragment>
#include <bsdfs>
#include <bumpmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <clipping_planes_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <shadowmap_pars_fragment>

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vAuroraIntensity;
varying float vWaveHeight;
varying vec3 vFlowDirection;

uniform float uTime;
uniform float uSpeed;

uniform float uC1r;
uniform float uC1g;
uniform float uC1b;
uniform float uC2r;
uniform float uC2g;
uniform float uC2b;
uniform float uC3r;
uniform float uC3g;
uniform float uC3b;

// Aurora helper functions
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise2D(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    
    return mix(mix(hash(i + vec2(0.0, 0.0)), 
                   hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), 
                   hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// Fractal Brownian Motion for aurora patterns
float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for(int i = 0; i < 4; i++) {
        value += amplitude * noise2D(p * frequency);
        amplitude *= 0.5;
        frequency *= 2.0;
    }
    return value;
}

// Aurora curtain effect
float aurora(vec2 p, float time) {
    vec2 q = vec2(fbm(p + vec2(0.0, time * 0.1)),
                  fbm(p + vec2(5.2, time * 0.15)));
    
    vec2 r = vec2(fbm(p + 4.0 * q + vec2(1.7, time * 0.2)),
                  fbm(p + 4.0 * q + vec2(8.3, time * 0.18)));
    
    return fbm(p + 4.0 * r);
}

// Water caustics effect
float caustics(vec2 p, float time) {
    vec2 uv = p * 4.0;
    vec2 p0 = uv + vec2(time * 0.3, time * 0.2);
    vec2 p1 = uv + vec2(time * -0.4, time * 0.3);
    
    float c1 = sin(length(p0) * 8.0 - time * 2.0) * 0.5 + 0.5;
    float c2 = sin(length(p1) * 6.0 - time * 1.5) * 0.5 + 0.5;
    
    return (c1 + c2) * 0.5;
}

// for npm package, need to add this manually
float linearToRelativeLuminance2( const in vec3 color ) {
    vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
    return dot( weights, color.rgb );
}

void main() {

  //-------- Cosmic Aurora Water Gradient ------------
  vec3 color1 = vec3(uC1r, uC1g, uC1b);
  vec3 color2 = vec3(uC2r, uC2g, uC2b);
  vec3 color3 = vec3(uC3r, uC3g, uC3b);
  
  float clearcoat = 1.0;
  float clearcoatRoughness = 0.05; // Very smooth for water-like reflection

  #include <clipping_planes_fragment>

  float t = uTime * uSpeed;
  
  // Create aurora patterns
  vec2 auroraCoords = vPos.xy * 2.0 + vFlowDirection.xy * t * 0.5;
  float auroraPattern1 = aurora(auroraCoords, t);
  float auroraPattern2 = aurora(auroraCoords * 1.5 + vec2(3.0, 1.0), t * 1.2);
  float auroraPattern3 = aurora(auroraCoords * 0.7 + vec2(-2.0, 4.0), t * 0.8);
  
  // Combine aurora layers
  float combinedAurora = (auroraPattern1 + auroraPattern2 * 0.7 + auroraPattern3 * 0.5) / 2.2;
  
  // Create water caustics
  float causticsPattern = caustics(vPos.xy, t);
  
  // Create flowing light streams
  float lightStream1 = sin(vPos.x * 8.0 + t * 2.0 + combinedAurora * 3.0) * 0.2;
  float lightStream2 = cos(vPos.y * 6.0 + t * 1.5 + vWaveHeight * 4.0) * 0.15;
  float lightStream3 = sin((vPos.x + vPos.y) * 10.0 + t * 2.5) * 0.1;
  
  // Create cosmic energy waves
  float distanceFromCenter = length(vPos.xy);
  float energyWave = sin(distanceFromCenter * 5.0 - t * 3.0) * 
                     exp(-distanceFromCenter * 0.05) * 0.3;
  
  // Aurora color shifting effect
  vec3 auroraShift = vec3(
    sin(combinedAurora * 6.28 + t * 1.0) * 0.2,
    sin(combinedAurora * 6.28 + t * 1.0 + 2.094) * 0.2,  // 120 degrees
    sin(combinedAurora * 6.28 + t * 1.0 + 4.188) * 0.2   // 240 degrees
  );
  
  // Enhanced gradient mixing with aurora and water effects
  float gradientX = smoothstep(-4.0, 4.0, vPos.x + combinedAurora * 3.0 + vFlowDirection.x * 2.0);
  float gradientY = smoothstep(-4.0, 4.0, vPos.y + vWaveHeight * 2.0 + lightStream1 * 3.0);
  float gradientZ = smoothstep(-3.0, 3.0, vPos.z + causticsPattern * 2.0);
  
  // Multi-layer color mixing
  vec3 baseGradient = mix(
    mix(color1, color2, gradientX), 
    color3, 
    gradientY * 0.7 + gradientZ * 0.3
  );
  
  // Apply aurora color shifts
  vec3 auroraColor = baseGradient + auroraShift;
  
  // Add water caustics coloring
  vec3 causticsColor = vec3(
    causticsPattern * 0.3,
    causticsPattern * 0.4,
    causticsPattern * 0.5
  );
  
  // Add light streams
  vec3 lightStreams = vec3(
    abs(lightStream1) * 0.4,
    abs(lightStream2) * 0.3,
    abs(lightStream3) * 0.5
  );
  
  // Aurora intensity modulation
  float auroraIntensityMod = 1.0 + vAuroraIntensity * 0.8 + abs(combinedAurora) * 0.6;
  
  // Combine all effects
  vec3 finalColor = (auroraColor + causticsColor + lightStreams + vec3(energyWave * 0.2)) * auroraIntensityMod;
  
  // Add water-like shimmer
  float shimmer = sin(vPos.x * 20.0 + t * 4.0) * 
                  cos(vPos.y * 18.0 + t * 3.5) * 
                  vWaveHeight * 0.1;
  finalColor += vec3(shimmer * 0.3, shimmer * 0.4, shimmer * 0.6);
  
  // Add aurora dancing effect
  float auroraMovement = sin(vPos.x * 3.0 + t * 1.2 + combinedAurora * 2.0) * 
                         cos(vPos.y * 2.5 + t * 0.9) * 0.15;
  finalColor.g += abs(auroraMovement) * 0.4;
  finalColor.b += abs(auroraMovement) * 0.2;
  
  // Add cosmic depth variation
  float depthVariation = noise2D(vPos.xy * 5.0 + t * 0.3) * 0.1;
  finalColor *= (1.0 + depthVariation);

  vec4 diffuseColor = vec4(finalColor, 1.0);

  //-------- Enhanced Materiality for Water Aurora Effect ------------
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = emissive + finalColor * 0.15; // Moderate emission for aurora glow

  #ifdef TRANSMISSION
    float totalTransmission = transmission;
  #endif
  #include <logdepthbuf_fragment>
  #include <map_fragment>
  #include <color_fragment>
  #include <alphamap_fragment>
  #include <alphatest_fragment>
  #include <roughnessmap_fragment>
  #include <metalnessmap_fragment>
  #include <normal_fragment_begin>
  #include <normal_fragment_maps>
  #include <clearcoat_normal_fragment_begin>
  #include <clearcoat_normal_fragment_maps>
  #include <emissivemap_fragment>
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_maps>
  #include <lights_fragment_end>
  #include <aomap_fragment>
  
  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse +
                      reflectedLight.directSpecular + reflectedLight.indirectSpecular +
                      totalEmissiveRadiance;

  #ifdef TRANSMISSION
    diffuseColor.a *= mix(saturate(1. - totalTransmission +
                        linearToRelativeLuminance2(reflectedLight.directSpecular +
                                                  reflectedLight.indirectSpecular)),
                1.0, metalness);
  #endif

  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);
}
`;
var e14 = `// Cosmic WaterPlane Vertex Shader - Aurora Wave Effect
// #pragma glslify: cnoise3 = require(glsl-noise/classic/3d) 

// noise source from https://github.com/hughsk/glsl-noise/blob/master/periodic/3d.glsl

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

//-------- Aurora Wave Effect Functions ------------

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

vec3 rotateY(vec3 v, float angle) { return rotation3dY(angle) * v; }

varying vec3 vNormal;
varying float displacement;
varying vec3 vPos;
varying float vDistort;
varying vec2 vUv;
varying float vAuroraIntensity;
varying float vWaveHeight;
varying vec3 vFlowDirection;

uniform float uTime;
uniform float uSpeed;
uniform float uLoadingTime;
uniform float uNoiseDensity;
uniform float uNoiseStrength;

#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
#ifdef USE_TANGENT
varying vec3 vTangent;
varying vec3 vBitangent;
#endif
#endif
#include <clipping_planes_pars_vertex>
#include <color_pars_vertex>
#include <common>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <morphtarget_pars_vertex>
#include <shadowmap_pars_vertex>
#include <skinning_pars_vertex>
#include <uv2_pars_vertex>
#include <uv_pars_vertex>

void main() {

  #include <beginnormal_vertex>
  #include <color_vertex>
  #include <defaultnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <uv2_vertex>
  #include <uv_vertex>
  #ifndef FLAT_SHADED
    vNormal = normalize(transformedNormal);
  #ifdef USE_TANGENT
    vTangent = normalize(transformedTangent);
    vBitangent = normalize(cross(vNormal, vTangent) * tangent.w);
  #endif
  #endif
  #include <begin_vertex>

  #include <clipping_planes_vertex>
  #include <displacementmap_vertex>
  #include <logdepthbuf_vertex>
  #include <morphtarget_vertex>
  #include <project_vertex>
  #include <skinning_vertex>
    vViewPosition = -mvPosition.xyz;
  #include <fog_vertex>
  #include <shadowmap_vertex>
  #include <worldpos_vertex>

  //-------- Cosmic Aurora Wave Effect ------------
  vUv = uv;
  
  float t = uTime * uSpeed;
  
  // Create flowing aurora patterns
  float auroraFlow1 = sin(position.x * 5.0 + t * 1.5) * cos(position.y * 3.0 + t * 1.0);
  float auroraFlow2 = sin(position.x * 8.0 + t * 2.0) * sin(position.y * 6.0 + t * 1.8);
  float auroraFlow3 = cos(position.x * 12.0 + t * 2.5) * cos(position.y * 9.0 + t * 2.2);
  
  // Combine aurora flows
  float auroraPattern = (auroraFlow1 + auroraFlow2 * 0.7 + auroraFlow3 * 0.4) / 2.1;
  vAuroraIntensity = abs(auroraPattern);
  
  // Create multi-layered waves
  float wave1 = cnoise(vec3(position.xy * uNoiseDensity * 0.5, t * 0.3));
  float wave2 = cnoise(vec3(position.xy * uNoiseDensity * 1.2, t * 0.5)) * 0.6;
  float wave3 = cnoise(vec3(position.xy * uNoiseDensity * 2.5, t * 0.8)) * 0.3;
  float wave4 = cnoise(vec3(position.xy * uNoiseDensity * 5.0, t * 1.2)) * 0.15;
  
  // Combine waves for complex water surface
  float combinedWaves = wave1 + wave2 + wave3 + wave4;
  vWaveHeight = combinedWaves;
  
  // Create flowing current patterns
  vec2 flowDirection = vec2(
    sin(position.x * 2.0 + t * 0.8) + cos(position.y * 1.5 + t * 0.6),
    cos(position.x * 1.8 + t * 0.7) + sin(position.y * 2.2 + t * 0.9)
  );
  vFlowDirection = vec3(normalize(flowDirection), 0.0);
  
  // Aurora-influenced wave distortion
  float auroraWave = sin(position.x * 15.0 + t * 3.0 + auroraPattern * 5.0) * 
                     cos(position.y * 12.0 + t * 2.5 + auroraPattern * 4.0) * 0.2;
  
  // Create cosmic energy ripples
  float distanceFromCenter = length(position.xy);
  float cosmicRipple = sin(distanceFromCenter * 8.0 - t * 4.0) * 
                       exp(-distanceFromCenter * 0.1) * 0.3;
  
  // Pulsing effect for cosmic energy
  float cosmicPulse = sin(t * 1.5 + distanceFromCenter * 2.0) * 0.1 + 1.0;
  
  // Apply complex displacement
  float totalDisplacement = (combinedWaves + auroraWave + cosmicRipple) * 
                           uNoiseStrength * uLoadingTime * cosmicPulse;
  
  vec3 pos = position + normal * totalDisplacement;
  vPos = pos;
  
  // Add subtle rotation for cosmic flow
  pos = rotateY(pos, sin(t * 0.05 + distanceFromCenter * 0.1) * 0.02);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`;

// node_modules/@shadergradient/react/dist/chunk-CLJIQSIC.mjs
var p5 = {};
A(p5, { plane: () => o5, sphere: () => a3, waterPlane: () => a4 });

// node_modules/@shadergradient/react/dist/chunk-RHJWCM3L.mjs
var t5 = {};
A(t5, { cosmic: () => p5, defaults: () => p2, glass: () => p3, positionMix: () => p4 });

// node_modules/@shadergradient/react/dist/chunk-HKGRTUU2.mjs
var r3 = { performance: false, render: true };
var o6 = { enable: (e21) => {
  r3[e21] = true;
}, disable: (e21) => {
  r3[e21] = false;
}, enableAll: () => {
  Object.keys(r3).forEach((e21) => {
    r3[e21] = true;
  });
}, disableAll: () => {
  Object.keys(r3).forEach((e21) => {
    r3[e21] = false;
  });
}, performance: (...e21) => {
  r3.performance && console.log("[Performance]", ...e21);
}, render: (...e21) => {
  r3.render && console.log("[Render]", ...e21);
} };
typeof window != "undefined" && (window.debug = o6);

// node_modules/@shadergradient/react/dist/chunk-H5PDSFZE.mjs
function R(e21) {
  return e21 / 180 * Math.PI;
}
function y2(e21) {
  return e21.map((r11) => R(r11));
}
function I(e21) {
  return e21.replace("http://localhost:3001/customize", "").replace("https://shadergradient.co/customize", "").replace("https://www.shadergradient.co/customize", "");
}
function M(T4) {
  var o13 = T4, { position: e21, rotation: r11, cameraAngle: i12, noise: p10, canvas: a14 } = o13, s10 = y(o13, ["position", "rotation", "cameraAngle", "noise", "canvas"]);
  let { positionX: u7, positionY: f8, positionZ: d5 } = e21 || {}, { rotationX: m8, rotationY: l8, rotationZ: h9 } = r11 || {}, { cAzimuthAngle: P8, cPolarAngle: g6 } = i12 || {}, { uDensity: w4, uStrength: x6 } = p10 || {}, { pixelDensity: z4, fov: A4, preserveDrawingBuffer: D3, powerPreference: t15 } = a14 || {};
  return w({ positionX: u7, positionY: f8, positionZ: d5, rotationX: m8, rotationY: l8, rotationZ: h9, cAzimuthAngle: P8, cPolarAngle: g6, uDensity: w4, uStrength: x6, pixelDensity: z4, fov: A4, preserveDrawingBuffer: D3, powerPreference: t15 && t15 !== "default" ? t15 : void 0 }, s10);
}

// node_modules/@shadergradient/react/dist/chunk-6MZB7NYQ.mjs
import { jsx as l3, jsxs as P } from "react/jsx-runtime";
function J({ animate: d5, range: h9, rangeStart: y9, rangeEnd: v9, loop: t15, loopDuration: n19, positionX: T4, positionY: F4, positionZ: I7, rotationX: M5, rotationY: S4, rotationZ: b8, type: i12, color1: a14, color2: s10, color3: m8, reflection: C2, uTime: D3, uSpeed: L2, uDensity: R7, uStrength: w4, uFrequency: x6, uAmplitude: A4, shader: o13 }) {
  let { vertex: q5, fragment: E8 } = t5[o13][i12], N5 = { colors: [a14, s10, m8], uTime: D3, uSpeed: L2, uLoadingTime: 1, uNoiseDensity: R7, uNoiseStrength: w4, uFrequency: x6, uAmplitude: A4, uIntensity: 0.5, uLoop: t15 === "on" ? 1 : 0, uLoopDuration: n19 || 5 }, U4 = o13 === "glass" ? { uColor1: s(a14), uColor2: s(s10), uColor3: s(m8), uTransparency: 0.1, uRefraction: 1.5, uChromaticAberration: 0.1, uFresnelPower: 2, uReflectivity: 0.9, uWaveAmplitude: 0.02, uWaveFrequency: 5, uDistortion: 0.1, uFlowSpeed: 0.1, uFlowDirection: { x: 1, y: 0.5 }, uLiquidEffect: 0.5, uFoamIntensity: 0.3, envMapIntensity: 1 } : {}, W2 = w(w({}, N5), U4);
  return P("mesh", { name: "shadergradient-mesh", position: [T4, F4, I7], rotation: y2([M5, S4, b8]), children: [l3(n, { type: i12 }), l3(A2, { animate: d5, range: h9, rangeStart: y9, rangeEnd: v9, loop: t15, loopDuration: n19, reflection: C2, shader: o13, uniforms: W2, vertexShader: q5, fragmentShader: E8, onInit: (G3) => {
    o6.performance("material (onInit)", G3);
  } })] });
}

// node_modules/@shadergradient/react/dist/chunk-YRKK26G7.mjs
import { BufferGeometry as a5, Float32BufferAttribute as i5, OrthographicCamera as n15, Mesh as m2 } from "three";
var r4 = class {
  constructor() {
    this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
};
var h3 = new n15(-1, 1, 1, -1, 0, 1);
var t6 = new a5();
t6.setAttribute("position", new i5([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
t6.setAttribute("uv", new i5([0, 2, 0, 0, 2, 0], 2));
var s3 = class {
  constructor(e21) {
    this._mesh = new m2(t6, e21);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e21) {
    e21.render(this._mesh, h3);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e21) {
    this._mesh.material = e21;
  }
};

// node_modules/@shadergradient/react/dist/chunk-QYDWPRFC.mjs
import { Color as h4 } from "three";
var s4 = class extends r4 {
  constructor(l8, i12, t15, a14, e21) {
    super(), this.scene = l8, this.camera = i12, this.overrideMaterial = t15, this.clearColor = a14, this.clearAlpha = e21 !== void 0 ? e21 : 0, this.clear = true, this.clearDepth = false, this.needsSwap = false, this._oldClearColor = new h4();
  }
  render(l8, i12, t15) {
    let a14 = l8.autoClear;
    l8.autoClear = false;
    let e21, o13;
    this.overrideMaterial !== void 0 && (o13 = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor && (l8.getClearColor(this._oldClearColor), e21 = l8.getClearAlpha(), l8.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && l8.clearDepth(), l8.setRenderTarget(this.renderToScreen ? null : t15), this.clear && l8.clear(l8.autoClearColor, l8.autoClearDepth, l8.autoClearStencil), l8.render(this.scene, this.camera), this.clearColor && l8.setClearColor(this._oldClearColor, e21), this.overrideMaterial !== void 0 && (this.scene.overrideMaterial = o13), l8.autoClear = a14;
  }
};

// node_modules/@shadergradient/react/dist/chunk-66B4V7BU.mjs
import { ShaderMaterial as a6, UniformsUtils as r5 } from "three";
var f = class extends r4 {
  constructor(t15, i12) {
    super(), this.textureID = i12 !== void 0 ? i12 : "tDiffuse", t15 instanceof a6 ? (this.uniforms = t15.uniforms, this.material = t15) : t15 && (this.uniforms = r5.clone(t15.uniforms), this.material = new a6({ defines: Object.assign({}, t15.defines), uniforms: this.uniforms, vertexShader: t15.vertexShader, fragmentShader: t15.fragmentShader })), this.fsQuad = new s3(this.material);
  }
  render(t15, i12, n19) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n19.texture), this.fsQuad.material = this.material, this.renderToScreen ? (t15.setRenderTarget(null), this.fsQuad.render(t15)) : (t15.setRenderTarget(i12), this.clear && t15.clear(t15.autoClearColor, t15.autoClearDepth, t15.autoClearStencil), this.fsQuad.render(t15));
  }
};

// node_modules/@shadergradient/react/dist/chunk-LHZKBITZ.mjs
var e15 = { uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } }, vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;

		}` };

// node_modules/@shadergradient/react/dist/chunk-AYXY7L4E.mjs
var a7 = class extends r4 {
  constructor(s10, f8) {
    super(), this.scene = s10, this.camera = f8, this.clear = true, this.needsSwap = false, this.inverse = false;
  }
  render(s10, f8, n19) {
    let t15 = s10.getContext(), e21 = s10.state;
    e21.buffers.color.setMask(false), e21.buffers.depth.setMask(false), e21.buffers.color.setLocked(true), e21.buffers.depth.setLocked(true);
    let c4, l8;
    this.inverse ? (c4 = 0, l8 = 1) : (c4 = 1, l8 = 0), e21.buffers.stencil.setTest(true), e21.buffers.stencil.setOp(t15.REPLACE, t15.REPLACE, t15.REPLACE), e21.buffers.stencil.setFunc(t15.ALWAYS, c4, 4294967295), e21.buffers.stencil.setClear(l8), e21.buffers.stencil.setLocked(true), s10.setRenderTarget(n19), this.clear && s10.clear(), s10.render(this.scene, this.camera), s10.setRenderTarget(f8), this.clear && s10.clear(), s10.render(this.scene, this.camera), e21.buffers.color.setLocked(false), e21.buffers.depth.setLocked(false), e21.buffers.stencil.setLocked(false), e21.buffers.stencil.setFunc(t15.EQUAL, 1, 4294967295), e21.buffers.stencil.setOp(t15.KEEP, t15.KEEP, t15.KEEP), e21.buffers.stencil.setLocked(true);
  }
};
var i6 = class extends r4 {
  constructor() {
    super(), this.needsSwap = false;
  }
  render(s10) {
    s10.state.buffers.stencil.setLocked(false), s10.state.buffers.stencil.setTest(false);
  }
};

// node_modules/@shadergradient/react/dist/chunk-WASVT75G.mjs
import { BufferGeometry as R2, Clock as S, Float32BufferAttribute as x2, LinearFilter as u2, Mesh as B3, OrthographicCamera as P2, RGBAFormat as z2, Vector2 as _, WebGLRenderTarget as E } from "three";
var g2 = class {
  constructor(e21, t15) {
    if (this.renderer = e21, t15 === void 0) {
      let i12 = { minFilter: u2, magFilter: u2, format: z2 }, s10 = e21.getSize(new _());
      this._pixelRatio = e21.getPixelRatio(), this._width = s10.width, this._height = s10.height, t15 = new E(this._width * this._pixelRatio, this._height * this._pixelRatio, i12), t15.texture.name = "EffectComposer.rt1";
    } else this._pixelRatio = 1, this._width = t15.width, this._height = t15.height;
    this.renderTarget1 = t15, this.renderTarget2 = t15.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = true, this.passes = [], e15 === void 0 && console.error("THREE.EffectComposer relies on CopyShader"), f === void 0 && console.error("THREE.EffectComposer relies on ShaderPass"), this.copyPass = new f(e15), this.clock = new S();
  }
  swapBuffers() {
    let e21 = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e21;
  }
  addPass(e21) {
    this.passes.push(e21), e21.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e21, t15) {
    this.passes.splice(t15, 0, e21), e21.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e21) {
    let t15 = this.passes.indexOf(e21);
    t15 !== -1 && this.passes.splice(t15, 1);
  }
  isLastEnabledPass(e21) {
    for (let t15 = e21 + 1; t15 < this.passes.length; t15++) if (this.passes[t15].enabled) return false;
    return true;
  }
  render(e21) {
    e21 === void 0 && (e21 = this.clock.getDelta());
    let t15 = this.renderer.getRenderTarget(), i12 = false;
    for (let s10 = 0, h9 = this.passes.length; s10 < h9; s10++) {
      let r11 = this.passes[s10];
      if (r11.enabled !== false) {
        if (r11.renderToScreen = this.renderToScreen && this.isLastEnabledPass(s10), r11.render(this.renderer, this.writeBuffer, this.readBuffer, e21, i12), r11.needsSwap) {
          if (i12) {
            let l8 = this.renderer.getContext(), c4 = this.renderer.state.buffers.stencil;
            c4.setFunc(l8.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e21), c4.setFunc(l8.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        a7 !== void 0 && (r11 instanceof a7 ? i12 = true : r11 instanceof i6 && (i12 = false));
      }
    }
    this.renderer.setRenderTarget(t15);
  }
  reset(e21) {
    if (e21 === void 0) {
      let t15 = this.renderer.getSize(new _());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t15.width, this._height = t15.height, e21 = this.renderTarget1.clone(), e21.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e21, this.renderTarget2 = e21.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e21, t15) {
    this._width = e21, this._height = t15;
    let i12 = this._width * this._pixelRatio, s10 = this._height * this._pixelRatio;
    this.renderTarget1.setSize(i12, s10), this.renderTarget2.setSize(i12, s10);
    for (let h9 = 0; h9 < this.passes.length; h9++) this.passes[h9].setSize(i12, s10);
  }
  setPixelRatio(e21) {
    this._pixelRatio = e21, this.setSize(this._width, this._height);
  }
};
var T = new P2(-1, 1, 1, -1, 0, 1);
var f2 = new R2();
f2.setAttribute("position", new x2([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
f2.setAttribute("uv", new x2([0, 2, 0, 0, 2, 0], 2));

// node_modules/@shadergradient/react/dist/chunk-VJZMGGI7.mjs
var e16 = { uniforms: { tDiffuse: { value: null }, shape: { value: 1 }, radius: { value: 2 }, rotateR: { value: Math.PI / 12 * 1 }, rotateG: { value: Math.PI / 12 * 2 }, rotateB: { value: Math.PI / 12 * 3 }, scatter: { value: 1 }, width: { value: 20 }, height: { value: 20 }, blending: { value: 1 }, blendingMode: { value: 1 }, greyscale: { value: false }, disable: { value: false } }, vertexShader: `

		varying vec2 vUV;
		varying vec3 vPosition;

		void main() {

			vUV = uv;
			vPosition = position;

			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

		}`, fragmentShader: `

		#define SQRT2_MINUS_ONE 0.41421356
		#define SQRT2_HALF_MINUS_ONE 0.20710678
		#define PI2 6.28318531
		#define SHAPE_DOT 1
		#define SHAPE_ELLIPSE 2
		#define SHAPE_LINE 3
		#define SHAPE_SQUARE 4
		#define BLENDING_LINEAR 1
		#define BLENDING_MULTIPLY 2
		#define BLENDING_ADD 3
		#define BLENDING_LIGHTER 4
		#define BLENDING_DARKER 5
		uniform sampler2D tDiffuse;
		uniform float radius;
		uniform float rotateR;
		uniform float rotateG;
		uniform float rotateB;
		uniform float scatter;
		uniform float width;
		uniform float height;
		uniform int shape;
		uniform bool disable;
		uniform float blending;
		uniform int blendingMode;
		varying vec2 vUV;
		varying vec3 vPosition;
		uniform bool greyscale;
		const int samples = 8;

		float blend( float a, float b, float t ) {

		// linear blend
			return a * ( 1.0 - t ) + b * t;

		}

		float hypot( float x, float y ) {

		// vector magnitude
			return sqrt( x * x + y * y );

		}

		float rand( vec2 seed ){

		// get pseudo-random number
			return fract( sin( dot( seed.xy, vec2( 12.9898, 78.233 ) ) ) * 43758.5453 );

		}

		float distanceToDotRadius( float channel, vec2 coord, vec2 normal, vec2 p, float angle, float rad_max ) {

		// apply shape-specific transforms
			float dist = hypot( coord.x - p.x, coord.y - p.y );
			float rad = channel;

			if ( shape == SHAPE_DOT ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

			} else if ( shape == SHAPE_ELLIPSE ) {

				rad = pow( abs( rad ), 1.125 ) * rad_max;

				if ( dist != 0.0 ) {
					float dot_p = abs( ( p.x - coord.x ) / dist * normal.x + ( p.y - coord.y ) / dist * normal.y );
					dist = ( dist * ( 1.0 - SQRT2_HALF_MINUS_ONE ) ) + dot_p * dist * SQRT2_MINUS_ONE;
				}

			} else if ( shape == SHAPE_LINE ) {

				rad = pow( abs( rad ), 1.5) * rad_max;
				float dot_p = ( p.x - coord.x ) * normal.x + ( p.y - coord.y ) * normal.y;
				dist = hypot( normal.x * dot_p, normal.y * dot_p );

			} else if ( shape == SHAPE_SQUARE ) {

				float theta = atan( p.y - coord.y, p.x - coord.x ) - angle;
				float sin_t = abs( sin( theta ) );
				float cos_t = abs( cos( theta ) );
				rad = pow( abs( rad ), 1.4 );
				rad = rad_max * ( rad + ( ( sin_t > cos_t ) ? rad - sin_t * rad : rad - cos_t * rad ) );

			}

			return rad - dist;

		}

		struct Cell {

		// grid sample positions
			vec2 normal;
			vec2 p1;
			vec2 p2;
			vec2 p3;
			vec2 p4;
			float samp2;
			float samp1;
			float samp3;
			float samp4;

		};

		vec4 getSample( vec2 point ) {

		// multi-sampled point
			vec4 tex = texture2D( tDiffuse, vec2( point.x / width, point.y / height ) );
			float base = rand( vec2( floor( point.x ), floor( point.y ) ) ) * PI2;
			float step = PI2 / float( samples );
			// float dist = radius * 0.66;
			float dist = radius * 0.0;

			for ( int i = 0; i < samples; ++i ) {

				float r = base + step * float( i );
				vec2 coord = point + vec2( cos( r ) * dist, sin( r ) * dist );
				tex += texture2D( tDiffuse, vec2( coord.x / width, coord.y / height ) );

			}

			tex /= float( samples ) + 1.0;
			return tex;

		}

		float getDotColour( Cell c, vec2 p, int channel, float angle, float aa ) {

		// get colour for given point
			float dist_c_1, dist_c_2, dist_c_3, dist_c_4, res;

			if ( channel == 0 ) {

				c.samp1 = getSample( c.p1 ).r;
				c.samp2 = getSample( c.p2 ).r;
				c.samp3 = getSample( c.p3 ).r;
				c.samp4 = getSample( c.p4 ).r;

			} else if (channel == 1) {

				c.samp1 = getSample( c.p1 ).g;
				c.samp2 = getSample( c.p2 ).g;
				c.samp3 = getSample( c.p3 ).g;
				c.samp4 = getSample( c.p4 ).g;

			} else {

				c.samp1 = getSample( c.p1 ).b;
				c.samp3 = getSample( c.p3 ).b;
				c.samp2 = getSample( c.p2 ).b;
				c.samp4 = getSample( c.p4 ).b;

			}

			dist_c_1 = distanceToDotRadius( c.samp1, c.p1, c.normal, p, angle, radius );
			dist_c_2 = distanceToDotRadius( c.samp2, c.p2, c.normal, p, angle, radius );
			dist_c_3 = distanceToDotRadius( c.samp3, c.p3, c.normal, p, angle, radius );
			dist_c_4 = distanceToDotRadius( c.samp4, c.p4, c.normal, p, angle, radius );
			res = ( dist_c_1 > 0.0 ) ? clamp( dist_c_1 / aa, 0.0, 1.0 ) : 0.0;
			// res = 0.0;
			res += ( dist_c_2 > 0.0 ) ? clamp( dist_c_2 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_3 > 0.0 ) ? clamp( dist_c_3 / aa, 0.0, 1.0 ) : 0.0;
			res += ( dist_c_4 > 0.0 ) ? clamp( dist_c_4 / aa, 0.0, 1.0 ) : 0.0;
			res = clamp( res, 0.0, 1.0 );

			return res;
			// return 2

		}

		Cell getReferenceCell( vec2 p, vec2 origin, float grid_angle, float step ) {

		// get containing cell
			Cell c;

		// calc grid
			vec2 n = vec2( cos( grid_angle ), sin( grid_angle ) );
			float threshold = step * 0.5;
			float dot_normal = n.x * ( p.x - origin.x ) + n.y * ( p.y - origin.y );
			float dot_line = -n.y * ( p.x - origin.x ) + n.x * ( p.y - origin.y );
			vec2 offset = vec2( n.x * dot_normal, n.y * dot_normal );
			float offset_normal = mod( hypot( offset.x, offset.y ), step );
			float normal_dir = ( dot_normal < 0.0 ) ? 1.0 : -1.0;
			float normal_scale = ( ( offset_normal < threshold ) ? -offset_normal : step - offset_normal ) * normal_dir;
			float offset_line = mod( hypot( ( p.x - offset.x ) - origin.x, ( p.y - offset.y ) - origin.y ), step );
			float line_dir = ( dot_line < 0.0 ) ? 1.0 : -1.0;
			float line_scale = ( ( offset_line < threshold ) ? -offset_line : step - offset_line ) * line_dir;

		// get closest corner
			c.normal = n;
			c.p1.x = p.x - n.x * normal_scale + n.y * line_scale;
			c.p1.y = p.y - n.y * normal_scale - n.x * line_scale;

		// scatter
			if ( scatter != 0.0 ) {

				float off_mag = scatter * threshold * 0.5;
				float off_angle = rand( vec2( floor( c.p1.x ), floor( c.p1.y ) ) ) * PI2;
				c.p1.x += cos( off_angle ) * off_mag;
				c.p1.y += sin( off_angle ) * off_mag;

			}

		// find corners
			float normal_step = normal_dir * ( ( offset_normal < threshold ) ? step : -step );
			float line_step = line_dir * ( ( offset_line < threshold ) ? step : -step );
			c.p2.x = c.p1.x - n.x * normal_step;
			c.p2.y = c.p1.y - n.y * normal_step;
			c.p3.x = c.p1.x + n.y * line_step;
			c.p3.y = c.p1.y - n.x * line_step;
			c.p4.x = c.p1.x - n.x * normal_step + n.y * line_step;
			c.p4.y = c.p1.y - n.y * normal_step - n.x * line_step;

			return c;

		}

		float blendColour( float a, float b, float t ) {

		// blend colours
			if ( blendingMode == BLENDING_LINEAR ) {
				return blend( a, b, 1.0 - t );
			} else if ( blendingMode == BLENDING_ADD ) {
				return blend( a, min( 1.0, a + b ), t );
			} else if ( blendingMode == BLENDING_MULTIPLY ) {
				return blend( a, max( 0.0, a * b ), t );
			} else if ( blendingMode == BLENDING_LIGHTER ) {
				return blend( a, max( a, b ), t );
			} else if ( blendingMode == BLENDING_DARKER ) {
				return blend( a, min( a, b ), t );
			} else {
				return blend( a, b, 1.0 - t );
			}

		}

		void main() {

			if ( ! disable ) {

		// setup
				vec2 p = vec2( vUV.x * width, vUV.y * height ) - vec2(vPosition.x, vPosition.y) * 3.0; // - position values to remove black borders.
				vec2 origin = vec2( 0, 0 );
				float aa = ( radius < 2.5 ) ? radius * 0.5 : 1.25;
				// float aa = 0.0;

		// get channel samples
				Cell cell_r = getReferenceCell( p, origin, rotateR, radius );
				Cell cell_g = getReferenceCell( p, origin, rotateG, radius );
				Cell cell_b = getReferenceCell( p, origin, rotateB, radius );
				float r = getDotColour( cell_r, p, 0, rotateR, aa );
				float g = getDotColour( cell_g, p, 1, rotateG, aa );
				float b = getDotColour( cell_b, p, 2, rotateB, aa );

		// blend with original
				vec4 colour = texture2D( tDiffuse, vUV );
				
				// add masking before blendColour
				if (colour.r == 0.0) {
					r = 0.0;
				} else {
					r = blendColour( r, colour.r, blending );
				}

				if (colour.g == 0.0) {
					g = 0.0;
				} else {
					g = blendColour( g, colour.g, blending );
				}

				if (colour.b == 0.0) {
					b = 0.0;
				} else {
					b = blendColour( b, colour.b, blending );
				}
				
				
				

				if ( greyscale ) {
					r = g = b = (r + b + g) / 3.0;
				}

				// add alpha channel to each r, g, b colors
				vec4 vR;
				vec4 vG;
				vec4 vB;
	
				// apply transparent to outside of mesh
				if (r == 0.0 && colour.r == 0.0) {
					vR = vec4( 0, 0, 0, 0 );
				} else {
					vR = vec4( r, 0, 0, 1 );
				}
	
				if (g == 0.0 && colour.g == 0.0) {
					vG = vec4( 0, 0, 0, 0 );
				} else {
					vG = vec4( 0, g, 0, 1 );
				}
	
				if (b == 0.0 && colour.b == 0.0) {
					vB = vec4( 0, 0, 0, 0 );
				} else {
					vB = vec4( 0, 0, b, 1 );
				}

				// gl_FragColor = vec4( r, g, b, 1.0 );
				gl_FragColor = vR + vG + vB;

			} else {

				gl_FragColor = texture2D( tDiffuse, vUV );

			}

		}` };

// node_modules/@shadergradient/react/dist/chunk-RE2GTNAW.mjs
import { BufferGeometry as a8, Float32BufferAttribute as i7, OrthographicCamera as n16, Mesh as m3 } from "three";
var r6 = class {
  constructor() {
    this.enabled = true, this.needsSwap = true, this.clear = false, this.renderToScreen = false;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
};
var h5 = new n16(-1, 1, 1, -1, 0, 1);
var t7 = new a8();
t7.setAttribute("position", new i7([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
t7.setAttribute("uv", new i7([0, 2, 0, 0, 2, 0], 2));
var s5 = class {
  constructor(e21) {
    this._mesh = new m3(t7, e21);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e21) {
    e21.render(this._mesh, h5);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e21) {
    this._mesh.material = e21;
  }
};

// node_modules/@shadergradient/react/dist/chunk-E7V5LYA3.mjs
var E2 = { SKIP: 0, ADD: 1, ALPHA: 2, AVERAGE: 3, COLOR_BURN: 4, COLOR_DODGE: 5, DARKEN: 6, DIFFERENCE: 7, EXCLUSION: 8, LIGHTEN: 9, MULTIPLY: 10, DIVIDE: 11, NEGATION: 12, NORMAL: 13, OVERLAY: 14, REFLECT: 15, SCREEN: 16, SOFT_LIGHT: 17, SUBTRACT: 18 };

// node_modules/@shadergradient/react/dist/chunk-TJDK6R5K.mjs
import { EventDispatcher as E3, Uniform as h6 } from "three";
var o7 = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x + y, 1.0) * opacity + x * (1.0 - opacity);

}
`;
var e17 = `vec3 blend(const in vec3 x, const in vec3 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	float a = min(y.a, opacity);

	return vec4(blend(x.rgb, y.rgb, a), max(x.a, a));

}
`;
var c = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y) * 0.5 * opacity + x * (1.0 - opacity);

}
`;
var i8 = `float blend(const in float x, const in float y) {

	return (y == 0.0) ? y : max(1.0 - (1.0 - x) / y, 0.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;
var a9 = `float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;
var r7 = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return min(x, y) * opacity + x * (1.0 - opacity);

}
`;
var l4 = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return abs(x - y) * opacity + x * (1.0 - opacity);

}
`;
var y3 = `float blend(const in float x, const in float y) {

	return (y > 0.0) ? min(x / y, 1.0) : 1.0;

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;
var x3 = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (x + y - 2.0 * x * y) * opacity + x * (1.0 - opacity);

}
`;
var d = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x, y) * opacity + x * (1.0 - opacity);

}
`;
var p6 = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return x * y * opacity + x * (1.0 - opacity);

}
`;
var s6 = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - abs(1.0 - x - y)) * opacity + x * (1.0 - opacity);

}
`;
var f3 = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return y * opacity + x * (1.0 - opacity);

}
`;
var u3 = `float blend(const in float x, const in float y) {

	return (x < 0.5) ? (2.0 * x * y) : (1.0 - 2.0 * (1.0 - x) * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;
var v2 = `float blend(const in float x, const in float y) {

	return (y == 1.0) ? y : min(x * x / (1.0 - y), 1.0);

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;
var b = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return (1.0 - (1.0 - x) * (1.0 - y)) * opacity + x * (1.0 - opacity);

}
`;
var m4 = `float blend(const in float x, const in float y) {

	return (y < 0.5) ?
		(2.0 * x * y + x * x * (1.0 - 2.0 * y)) :
		(sqrt(x) * (2.0 * y - 1.0) + 2.0 * x * (1.0 - y));

}

vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	vec4 z = vec4(
		blend(x.r, y.r),
		blend(x.g, y.g),
		blend(x.b, y.b),
		blend(x.a, y.a)
	);

	return z * opacity + x * (1.0 - opacity);

}
`;
var F = `vec4 blend(const in vec4 x, const in vec4 y, const in float opacity) {

	return max(x + y - 1.0, 0.0) * opacity + x * (1.0 - opacity);

}
`;
var z3 = /* @__PURE__ */ new Map([[E2.SKIP, null], [E2.ADD, o7], [E2.ALPHA, e17], [E2.AVERAGE, c], [E2.COLOR_BURN, i8], [E2.COLOR_DODGE, a9], [E2.DARKEN, r7], [E2.DIFFERENCE, l4], [E2.EXCLUSION, x3], [E2.LIGHTEN, d], [E2.MULTIPLY, p6], [E2.DIVIDE, y3], [E2.NEGATION, s6], [E2.NORMAL, f3], [E2.OVERLAY, u3], [E2.REFLECT, v2], [E2.SCREEN, b], [E2.SOFT_LIGHT, m4], [E2.SUBTRACT, F]]);
var g3 = class extends E3 {
  constructor(t15, B8 = 1) {
    super(), this.blendFunction = t15, this.opacity = new h6(B8);
  }
  getBlendFunction() {
    return this.blendFunction;
  }
  setBlendFunction(t15) {
    this.blendFunction = t15, this.dispatchEvent({ type: "change" });
  }
  getShaderCode() {
    return z3.get(this.blendFunction);
  }
};

// node_modules/@shadergradient/react/dist/chunk-DG5TTWXJ.mjs
import { ShaderMaterial as f4, UniformsUtils as o8 } from "three";
var h7 = true;
var d2 = class extends r6 {
  constructor(e21, r11, i12) {
    super(), e16 === void 0 && console.error("THREE.HalftonePass requires HalftoneShader"), this.uniforms = o8.clone(e16.uniforms), this.material = new f4({ uniforms: this.uniforms, fragmentShader: e16.fragmentShader, vertexShader: e16.vertexShader }), h7 && (this.uniforms.width.value = e21, this.uniforms.height.value = r11), this.uniforms.disable.value = i12.disable, this.fsQuad = new s5(this.material), this.blendMode = new g3(E2.SCREEN), this.extensions = null;
  }
  render(e21, r11, i12) {
    this.material.uniforms.tDiffuse.value = i12.texture, this.renderToScreen ? (e21.setRenderTarget(null), this.fsQuad.render(e21)) : (e21.setRenderTarget(r11), this.clear && e21.clear(), this.fsQuad.render(e21));
  }
  setSize(e21, r11) {
    h7 && (this.uniforms.width.value = e21, this.uniforms.height.value = r11);
  }
  initialize(e21, r11, i12) {
  }
  addEventListener() {
  }
  getAttributes() {
    return this.attributes;
  }
  getFragmentShader() {
    return e16.fragmentShader;
  }
  getVertexShader() {
    return e16.vertexShader;
  }
  update(e21, r11, i12) {
  }
};

// node_modules/@shadergradient/react/dist/chunk-SOFAB2VP.mjs
import { useEffect as l5, useMemo as b2, useRef as T2 } from "react";
import { useThree as H, useFrame as Q } from "@react-three/fiber";
import { Fragment as S2, jsx as v3 } from "react/jsx-runtime";
function k3({ disable: u7 = false }) {
  let { gl: c4, scene: m8, camera: d5, size: t15 } = H(), n19 = T2(null), o13 = T2(null), p10 = b2(() => ({ shape: 1, radius: 2, rotateR: Math.PI / 12, rotateB: Math.PI / 12 * 2, rotateG: Math.PI / 12 * 3, scatter: 1, blending: 1, blendingMode: 1, greyscale: false }), []);
  return l5(() => {
    let e21 = new g2(c4), r11 = new s4(m8, d5), s10 = new d2(t15.width, t15.height, x(w({}, p10), { disable: u7 }));
    return e21.addPass(r11), e21.addPass(s10), n19.current = e21, o13.current = s10, () => {
      var h9, P8, a14, g6, f8, w4, i12, C2;
      (h9 = r11.dispose) == null || h9.call(r11), (P8 = s10.fsQuad) != null && P8.dispose && s10.fsQuad.dispose(), (g6 = (a14 = s10.material) == null ? void 0 : a14.dispose) == null || g6.call(a14), (w4 = (f8 = e21.renderTarget1) == null ? void 0 : f8.dispose) == null || w4.call(f8), (C2 = (i12 = e21.renderTarget2) == null ? void 0 : i12.dispose) == null || C2.call(i12), n19.current = null, o13.current = null;
    };
  }, [d5, c4, p10, m8]), l5(() => {
    var r11;
    let e21 = n19.current;
    e21 && (e21.setSize(t15.width, t15.height), (r11 = o13.current) == null || r11.setSize(t15.width, t15.height));
  }, [t15.height, t15.width]), l5(() => {
    var e21, r11;
    (r11 = (e21 = o13.current) == null ? void 0 : e21.uniforms) != null && r11.disable && (o13.current.uniforms.disable.value = u7);
  }, [u7]), Q((e21, r11) => {
    let s10 = n19.current;
    s10 && (c4.autoClear = true, s10.render(r11));
  }, 1), v3(S2, {});
}

// node_modules/@shadergradient/react/dist/chunk-CPUZJ7YV.mjs
var r8 = (e21, o13, t15) => ({ dpr: e21, camera: { fov: o13 }, linear: true, flat: true, gl: { preserveDrawingBuffer: t15 == null ? void 0 : t15.preserveDrawingBuffer, powerPreference: t15 == null ? void 0 : t15.powerPreference } });
var s7 = 1;
var a10 = 14;
var p7 = { zoom: 1, distance: 14 };
var c2 = { zoom: 5, distance: 14 };
var h8 = "https://ruucm.github.io/shadergradient/ui@0.0.0/assets/hdr/";

// node_modules/@shadergradient/react/dist/chunk-YIJC6OD2.mjs
import { useEffect as E4, useRef as O } from "react";
import { useFrame as P3 } from "@react-three/fiber";
function v4({ type: u7, cAzimuthAngle: z4, cPolarAngle: y9, cDistance: h9, cameraZoom: R7, zoomOut: S4, enableTransition: f8 = true }) {
  let e21 = O();
  return P3((m8, F4) => e21.current.update(F4)), E4(() => {
    let m8 = e21.current;
    m8 == null || m8.rotateTo(R(z4), R(y9), f8);
  }, [e21, z4, y9, f8]), E4(() => {
    let m8 = e21.current;
    S4 ? u7 === "sphere" ? (m8 == null || m8.dollyTo(c2.distance, f8), m8 == null || m8.zoomTo(c2.zoom, f8)) : (m8 == null || m8.dollyTo(p7.distance, f8), m8 == null || m8.zoomTo(p7.zoom, f8)) : u7 === "sphere" ? (m8 == null || m8.zoomTo(R7, f8), m8 == null || m8.dollyTo(a10, f8)) : (m8 == null || m8.dollyTo(h9, f8), m8 == null || m8.zoomTo(s7, f8));
  }, [e21, S4, u7, R7, h9, f8]), e21;
}

// node_modules/@shadergradient/react/dist/chunk-6DNZ3I5B.mjs
import * as Pt from "three";
import { extend as zt, useThree as Ut } from "@react-three/fiber";
import { useEffect as Ft, useState as wt } from "react";
import { jsx as Rt } from "react/jsx-runtime";
var P4 = { LEFT: 1, RIGHT: 2, MIDDLE: 4 };
var i9 = Object.freeze({ NONE: 0, ROTATE: 1, TRUCK: 2, OFFSET: 4, DOLLY: 8, ZOOM: 16, TOUCH_ROTATE: 32, TOUCH_TRUCK: 64, TOUCH_OFFSET: 128, TOUCH_DOLLY: 256, TOUCH_ZOOM: 512, TOUCH_DOLLY_TRUCK: 1024, TOUCH_DOLLY_OFFSET: 2048, TOUCH_DOLLY_ROTATE: 4096, TOUCH_ZOOM_TRUCK: 8192, TOUCH_ZOOM_OFFSET: 16384, TOUCH_ZOOM_ROTATE: 32768 });
var N = { NONE: 0, IN: 1, OUT: -1 };
function k4(u7) {
  return u7.isPerspectiveCamera;
}
function H2(u7) {
  return u7.isOrthographicCamera;
}
var Z = Math.PI * 2;
var pt = Math.PI / 2;
var Ct = 1e-5;
var K = Math.PI / 180;
function M2(u7, t15, e21) {
  return Math.max(t15, Math.min(e21, u7));
}
function D(u7, t15 = Ct) {
  return Math.abs(u7) < t15;
}
function x4(u7, t15, e21 = Ct) {
  return D(u7 - t15, e21);
}
function ut(u7, t15) {
  return Math.round(u7 / t15) * t15;
}
function X(u7) {
  return isFinite(u7) ? u7 : u7 < 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
}
function Q2(u7) {
  return Math.abs(u7) < Number.MAX_VALUE ? u7 : u7 * (1 / 0);
}
function J2(u7, t15, e21, s10, n19 = 1 / 0, r11) {
  s10 = Math.max(1e-4, s10);
  let a14 = 2 / s10, l8 = a14 * r11, m8 = 1 / (1 + l8 + 0.48 * l8 * l8 + 0.235 * l8 * l8 * l8), h9 = u7 - t15, v9 = t15, g6 = n19 * s10;
  h9 = M2(h9, -g6, g6), t15 = u7 - h9;
  let C2 = (e21.value + a14 * h9) * r11;
  e21.value = (e21.value - a14 * C2) * m8;
  let f8 = t15 + (h9 + C2) * m8;
  return v9 - u7 > 0 == f8 > v9 && (f8 = v9, e21.value = (f8 - v9) / r11), f8;
}
function ft(u7, t15, e21, s10, n19 = 1 / 0, r11, a14) {
  s10 = Math.max(1e-4, s10);
  let l8 = 2 / s10, m8 = l8 * r11, h9 = 1 / (1 + m8 + 0.48 * m8 * m8 + 0.235 * m8 * m8 * m8), v9 = t15.x, g6 = t15.y, C2 = t15.z, f8 = u7.x - v9, L2 = u7.y - g6, T4 = u7.z - C2, A4 = v9, o13 = g6, c4 = C2, d5 = n19 * s10, _3 = d5 * d5, E8 = f8 * f8 + L2 * L2 + T4 * T4;
  if (E8 > _3) {
    let st = Math.sqrt(E8);
    f8 = f8 / st * d5, L2 = L2 / st * d5, T4 = T4 / st * d5;
  }
  v9 = u7.x - f8, g6 = u7.y - L2, C2 = u7.z - T4;
  let O4 = (e21.x + l8 * f8) * r11, S4 = (e21.y + l8 * L2) * r11, z4 = (e21.z + l8 * T4) * r11;
  e21.x = (e21.x - l8 * O4) * h9, e21.y = (e21.y - l8 * S4) * h9, e21.z = (e21.z - l8 * z4) * h9, a14.x = v9 + (f8 + O4) * h9, a14.y = g6 + (L2 + S4) * h9, a14.z = C2 + (T4 + z4) * h9;
  let j2 = A4 - u7.x, W2 = o13 - u7.y, vt = c4 - u7.z, xt = a14.x - A4, Dt = a14.y - o13, Lt = a14.z - c4;
  return j2 * xt + W2 * Dt + vt * Lt > 0 && (a14.x = A4, a14.y = o13, a14.z = c4, e21.x = (a14.x - A4) / r11, e21.y = (a14.y - o13) / r11, e21.z = (a14.z - c4) / r11), a14;
}
function ot(u7, t15) {
  t15.set(0, 0), u7.forEach((e21) => {
    t15.x += e21.clientX, t15.y += e21.clientY;
  }), t15.x /= u7.length, t15.y /= u7.length;
}
function rt(u7, t15) {
  return H2(u7) ? (console.warn(`${t15} is not supported in OrthographicCamera`), true) : false;
}
var _t = class {
  constructor() {
    this._listeners = {};
  }
  addEventListener(t15, e21) {
    let s10 = this._listeners;
    s10[t15] === void 0 && (s10[t15] = []), s10[t15].indexOf(e21) === -1 && s10[t15].push(e21);
  }
  hasEventListener(t15, e21) {
    let s10 = this._listeners;
    return s10[t15] !== void 0 && s10[t15].indexOf(e21) !== -1;
  }
  removeEventListener(t15, e21) {
    let n19 = this._listeners[t15];
    if (n19 !== void 0) {
      let r11 = n19.indexOf(e21);
      r11 !== -1 && n19.splice(r11, 1);
    }
  }
  removeAllEventListeners(t15) {
    if (!t15) {
      this._listeners = {};
      return;
    }
    Array.isArray(this._listeners[t15]) && (this._listeners[t15].length = 0);
  }
  dispatchEvent(t15) {
    let s10 = this._listeners[t15.type];
    if (s10 !== void 0) {
      t15.target = this;
      let n19 = s10.slice(0);
      for (let r11 = 0, a14 = n19.length; r11 < a14; r11++) n19[r11].call(this, t15);
    }
  }
};
var nt;
var At = "2.9.0";
var $ = 1 / 8;
var St = /Mac/.test((nt = globalThis == null ? void 0 : globalThis.navigator) === null || nt === void 0 ? void 0 : nt.platform);
var p8;
var gt;
var tt;
var at;
var F2;
var y4;
var U2;
var V2;
var q2;
var I2;
var b3;
var Y;
var Ot;
var yt;
var R3;
var G;
var B4;
var Tt;
var ht;
var Et;
var lt;
var ct;
var et;
var w2 = class u4 extends _t {
  static install(t15) {
    p8 = t15.THREE, gt = Object.freeze(new p8.Vector3(0, 0, 0)), tt = Object.freeze(new p8.Vector3(0, 1, 0)), at = Object.freeze(new p8.Vector3(0, 0, 1)), F2 = new p8.Vector2(), y4 = new p8.Vector3(), U2 = new p8.Vector3(), V2 = new p8.Vector3(), q2 = new p8.Vector3(), I2 = new p8.Vector3(), b3 = new p8.Vector3(), Y = new p8.Vector3(), Ot = new p8.Vector3(), yt = new p8.Vector3(), R3 = new p8.Spherical(), G = new p8.Spherical(), B4 = new p8.Box3(), Tt = new p8.Box3(), ht = new p8.Sphere(), Et = new p8.Quaternion(), lt = new p8.Quaternion(), ct = new p8.Matrix4(), et = new p8.Raycaster();
  }
  static get ACTION() {
    return i9;
  }
  constructor(t15, e21) {
    super(), this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.minDistance = Number.EPSILON, this.maxDistance = 1 / 0, this.infinityDolly = false, this.minZoom = 0.01, this.maxZoom = 1 / 0, this.smoothTime = 0.25, this.draggingSmoothTime = 0.125, this.maxSpeed = 1 / 0, this.azimuthRotateSpeed = 1, this.polarRotateSpeed = 1, this.dollySpeed = 1, this.dollyDragInverted = false, this.truckSpeed = 2, this.dollyToCursor = false, this.dragToOffset = false, this.verticalDragToForward = false, this.boundaryFriction = 0, this.restThreshold = 0.01, this.colliderMeshes = [], this.cancel = () => {
    }, this._enabled = true, this._state = i9.NONE, this._viewport = null, this._changedDolly = 0, this._changedZoom = 0, this._hasRested = true, this._boundaryEnclosesCamera = false, this._needsUpdate = true, this._updatedLastTime = false, this._elementRect = new DOMRect(), this._isDragging = false, this._dragNeedsUpdate = true, this._activePointers = [], this._lockedPointer = null, this._interactiveArea = new DOMRect(0, 0, 1, 1), this._isUserControllingRotate = false, this._isUserControllingDolly = false, this._isUserControllingTruck = false, this._isUserControllingOffset = false, this._isUserControllingZoom = false, this._lastDollyDirection = N.NONE, this._thetaVelocity = { value: 0 }, this._phiVelocity = { value: 0 }, this._radiusVelocity = { value: 0 }, this._targetVelocity = new p8.Vector3(), this._focalOffsetVelocity = new p8.Vector3(), this._zoomVelocity = { value: 0 }, this._truckInternal = (o13, c4, d5) => {
      let _3, E8;
      if (k4(this._camera)) {
        let O4 = y4.copy(this._camera.position).sub(this._target), S4 = this._camera.getEffectiveFOV() * K, z4 = O4.length() * Math.tan(S4 * 0.5);
        _3 = this.truckSpeed * o13 * z4 / this._elementRect.height, E8 = this.truckSpeed * c4 * z4 / this._elementRect.height;
      } else if (H2(this._camera)) {
        let O4 = this._camera;
        _3 = o13 * (O4.right - O4.left) / O4.zoom / this._elementRect.width, E8 = c4 * (O4.top - O4.bottom) / O4.zoom / this._elementRect.height;
      } else return;
      this.verticalDragToForward ? (d5 ? this.setFocalOffset(this._focalOffsetEnd.x + _3, this._focalOffsetEnd.y, this._focalOffsetEnd.z, true) : this.truck(_3, 0, true), this.forward(-E8, true)) : d5 ? this.setFocalOffset(this._focalOffsetEnd.x + _3, this._focalOffsetEnd.y + E8, this._focalOffsetEnd.z, true) : this.truck(_3, E8, true);
    }, this._rotateInternal = (o13, c4) => {
      let d5 = Z * this.azimuthRotateSpeed * o13 / this._elementRect.height, _3 = Z * this.polarRotateSpeed * c4 / this._elementRect.height;
      this.rotate(d5, _3, true);
    }, this._dollyInternal = (o13, c4, d5) => {
      let _3 = Math.pow(0.95, -o13 * this.dollySpeed), E8 = this._sphericalEnd.radius, O4 = this._sphericalEnd.radius * _3, S4 = M2(O4, this.minDistance, this.maxDistance), z4 = S4 - O4;
      this.infinityDolly && this.dollyToCursor ? this._dollyToNoClamp(O4, true) : this.infinityDolly && !this.dollyToCursor ? (this.dollyInFixed(z4, true), this._dollyToNoClamp(S4, true)) : this._dollyToNoClamp(S4, true), this.dollyToCursor && (this._changedDolly += (this.infinityDolly ? O4 : S4) - E8, this._dollyControlCoord.set(c4, d5)), this._lastDollyDirection = Math.sign(-o13);
    }, this._zoomInternal = (o13, c4, d5) => {
      let _3 = Math.pow(0.95, o13 * this.dollySpeed), E8 = this._zoom, O4 = this._zoom * _3;
      this.zoomTo(O4, true), this.dollyToCursor && (this._changedZoom += O4 - E8, this._dollyControlCoord.set(c4, d5));
    }, typeof p8 == "undefined" && console.error("camera-controls: `THREE` is undefined. You must first run `CameraControls.install( { THREE: THREE } )`. Check the docs for further information."), this._camera = t15, this._yAxisUpSpace = new p8.Quaternion().setFromUnitVectors(this._camera.up, tt), this._yAxisUpSpaceInverse = this._yAxisUpSpace.clone().invert(), this._state = i9.NONE, this._target = new p8.Vector3(), this._targetEnd = this._target.clone(), this._focalOffset = new p8.Vector3(), this._focalOffsetEnd = this._focalOffset.clone(), this._spherical = new p8.Spherical().setFromVector3(y4.copy(this._camera.position).applyQuaternion(this._yAxisUpSpace)), this._sphericalEnd = this._spherical.clone(), this._lastDistance = this._spherical.radius, this._zoom = this._camera.zoom, this._zoomEnd = this._zoom, this._lastZoom = this._zoom, this._nearPlaneCorners = [new p8.Vector3(), new p8.Vector3(), new p8.Vector3(), new p8.Vector3()], this._updateNearPlaneCorners(), this._boundary = new p8.Box3(new p8.Vector3(-1 / 0, -1 / 0, -1 / 0), new p8.Vector3(1 / 0, 1 / 0, 1 / 0)), this._cameraUp0 = this._camera.up.clone(), this._target0 = this._target.clone(), this._position0 = this._camera.position.clone(), this._zoom0 = this._zoom, this._focalOffset0 = this._focalOffset.clone(), this._dollyControlCoord = new p8.Vector2(), this.mouseButtons = { left: i9.ROTATE, middle: i9.DOLLY, right: i9.TRUCK, wheel: k4(this._camera) ? i9.DOLLY : H2(this._camera) ? i9.ZOOM : i9.NONE }, this.touches = { one: i9.TOUCH_ROTATE, two: k4(this._camera) ? i9.TOUCH_DOLLY_TRUCK : H2(this._camera) ? i9.TOUCH_ZOOM_TRUCK : i9.NONE, three: i9.TOUCH_TRUCK };
    let s10 = new p8.Vector2(), n19 = new p8.Vector2(), r11 = new p8.Vector2(), a14 = (o13) => {
      if (!this._enabled || !this._domElement) return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        let _3 = this._domElement.getBoundingClientRect(), E8 = o13.clientX / _3.width, O4 = o13.clientY / _3.height;
        if (E8 < this._interactiveArea.left || E8 > this._interactiveArea.right || O4 < this._interactiveArea.top || O4 > this._interactiveArea.bottom) return;
      }
      let c4 = o13.pointerType !== "mouse" ? null : (o13.buttons & P4.LEFT) === P4.LEFT ? P4.LEFT : (o13.buttons & P4.MIDDLE) === P4.MIDDLE ? P4.MIDDLE : (o13.buttons & P4.RIGHT) === P4.RIGHT ? P4.RIGHT : null;
      if (c4 !== null) {
        let _3 = this._findPointerByMouseButton(c4);
        _3 && this._disposePointer(_3);
      }
      if ((o13.buttons & P4.LEFT) === P4.LEFT && this._lockedPointer) return;
      let d5 = { pointerId: o13.pointerId, clientX: o13.clientX, clientY: o13.clientY, deltaX: 0, deltaY: 0, mouseButton: c4 };
      this._activePointers.push(d5), this._domElement.ownerDocument.removeEventListener("pointermove", l8, { passive: false }), this._domElement.ownerDocument.removeEventListener("pointerup", m8), this._domElement.ownerDocument.addEventListener("pointermove", l8, { passive: false }), this._domElement.ownerDocument.addEventListener("pointerup", m8), this._isDragging = true, C2(o13);
    }, l8 = (o13) => {
      o13.cancelable && o13.preventDefault();
      let c4 = o13.pointerId, d5 = this._lockedPointer || this._findPointerById(c4);
      if (d5) {
        if (d5.clientX = o13.clientX, d5.clientY = o13.clientY, d5.deltaX = o13.movementX, d5.deltaY = o13.movementY, this._state = 0, o13.pointerType === "touch") switch (this._activePointers.length) {
          case 1:
            this._state = this.touches.one;
            break;
          case 2:
            this._state = this.touches.two;
            break;
          case 3:
            this._state = this.touches.three;
            break;
        }
        else (!this._isDragging && this._lockedPointer || this._isDragging && (o13.buttons & P4.LEFT) === P4.LEFT) && (this._state = this._state | this.mouseButtons.left), this._isDragging && (o13.buttons & P4.MIDDLE) === P4.MIDDLE && (this._state = this._state | this.mouseButtons.middle), this._isDragging && (o13.buttons & P4.RIGHT) === P4.RIGHT && (this._state = this._state | this.mouseButtons.right);
        f8();
      }
    }, m8 = (o13) => {
      let c4 = this._findPointerById(o13.pointerId);
      if (!(c4 && c4 === this._lockedPointer)) {
        if (c4 && this._disposePointer(c4), o13.pointerType === "touch") switch (this._activePointers.length) {
          case 0:
            this._state = i9.NONE;
            break;
          case 1:
            this._state = this.touches.one;
            break;
          case 2:
            this._state = this.touches.two;
            break;
          case 3:
            this._state = this.touches.three;
            break;
        }
        else this._state = i9.NONE;
        L2();
      }
    }, h9 = -1, v9 = (o13) => {
      if (!this._domElement || !this._enabled || this.mouseButtons.wheel === i9.NONE) return;
      if (this._interactiveArea.left !== 0 || this._interactiveArea.top !== 0 || this._interactiveArea.width !== 1 || this._interactiveArea.height !== 1) {
        let O4 = this._domElement.getBoundingClientRect(), S4 = o13.clientX / O4.width, z4 = o13.clientY / O4.height;
        if (S4 < this._interactiveArea.left || S4 > this._interactiveArea.right || z4 < this._interactiveArea.top || z4 > this._interactiveArea.bottom) return;
      }
      if (o13.preventDefault(), this.dollyToCursor || this.mouseButtons.wheel === i9.ROTATE || this.mouseButtons.wheel === i9.TRUCK) {
        let O4 = performance.now();
        h9 - O4 < 1e3 && this._getClientRect(this._elementRect), h9 = O4;
      }
      let c4 = St ? -1 : -3, d5 = o13.deltaMode === 1 ? o13.deltaY / c4 : o13.deltaY / (c4 * 10), _3 = this.dollyToCursor ? (o13.clientX - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, E8 = this.dollyToCursor ? (o13.clientY - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
      switch (this.mouseButtons.wheel) {
        case i9.ROTATE: {
          this._rotateInternal(o13.deltaX, o13.deltaY), this._isUserControllingRotate = true;
          break;
        }
        case i9.TRUCK: {
          this._truckInternal(o13.deltaX, o13.deltaY, false), this._isUserControllingTruck = true;
          break;
        }
        case i9.OFFSET: {
          this._truckInternal(o13.deltaX, o13.deltaY, true), this._isUserControllingOffset = true;
          break;
        }
        case i9.DOLLY: {
          this._dollyInternal(-d5, _3, E8), this._isUserControllingDolly = true;
          break;
        }
        case i9.ZOOM: {
          this._zoomInternal(-d5, _3, E8), this._isUserControllingZoom = true;
          break;
        }
      }
      this.dispatchEvent({ type: "control" });
    }, g6 = (o13) => {
      if (!(!this._domElement || !this._enabled)) {
        if (this.mouseButtons.right === u4.ACTION.NONE) {
          let c4 = o13 instanceof PointerEvent ? o13.pointerId : 0, d5 = this._findPointerById(c4);
          d5 && this._disposePointer(d5), this._domElement.ownerDocument.removeEventListener("pointermove", l8, { passive: false }), this._domElement.ownerDocument.removeEventListener("pointerup", m8);
          return;
        }
        o13.preventDefault();
      }
    }, C2 = (o13) => {
      if (!this._enabled) return;
      if (ot(this._activePointers, F2), this._getClientRect(this._elementRect), s10.copy(F2), n19.copy(F2), this._activePointers.length >= 2) {
        let d5 = F2.x - this._activePointers[1].clientX, _3 = F2.y - this._activePointers[1].clientY, E8 = Math.sqrt(d5 * d5 + _3 * _3);
        r11.set(0, E8);
        let O4 = (this._activePointers[0].clientX + this._activePointers[1].clientX) * 0.5, S4 = (this._activePointers[0].clientY + this._activePointers[1].clientY) * 0.5;
        n19.set(O4, S4);
      }
      if (this._state = 0, !o13) this._lockedPointer && (this._state = this._state | this.mouseButtons.left);
      else if ("pointerType" in o13 && o13.pointerType === "touch") switch (this._activePointers.length) {
        case 1:
          this._state = this.touches.one;
          break;
        case 2:
          this._state = this.touches.two;
          break;
        case 3:
          this._state = this.touches.three;
          break;
      }
      else !this._lockedPointer && (o13.buttons & P4.LEFT) === P4.LEFT && (this._state = this._state | this.mouseButtons.left), (o13.buttons & P4.MIDDLE) === P4.MIDDLE && (this._state = this._state | this.mouseButtons.middle), (o13.buttons & P4.RIGHT) === P4.RIGHT && (this._state = this._state | this.mouseButtons.right);
      ((this._state & i9.ROTATE) === i9.ROTATE || (this._state & i9.TOUCH_ROTATE) === i9.TOUCH_ROTATE || (this._state & i9.TOUCH_DOLLY_ROTATE) === i9.TOUCH_DOLLY_ROTATE || (this._state & i9.TOUCH_ZOOM_ROTATE) === i9.TOUCH_ZOOM_ROTATE) && (this._sphericalEnd.theta = this._spherical.theta, this._sphericalEnd.phi = this._spherical.phi, this._thetaVelocity.value = 0, this._phiVelocity.value = 0), ((this._state & i9.TRUCK) === i9.TRUCK || (this._state & i9.TOUCH_TRUCK) === i9.TOUCH_TRUCK || (this._state & i9.TOUCH_DOLLY_TRUCK) === i9.TOUCH_DOLLY_TRUCK || (this._state & i9.TOUCH_ZOOM_TRUCK) === i9.TOUCH_ZOOM_TRUCK) && (this._targetEnd.copy(this._target), this._targetVelocity.set(0, 0, 0)), ((this._state & i9.DOLLY) === i9.DOLLY || (this._state & i9.TOUCH_DOLLY) === i9.TOUCH_DOLLY || (this._state & i9.TOUCH_DOLLY_TRUCK) === i9.TOUCH_DOLLY_TRUCK || (this._state & i9.TOUCH_DOLLY_OFFSET) === i9.TOUCH_DOLLY_OFFSET || (this._state & i9.TOUCH_DOLLY_ROTATE) === i9.TOUCH_DOLLY_ROTATE) && (this._sphericalEnd.radius = this._spherical.radius, this._radiusVelocity.value = 0), ((this._state & i9.ZOOM) === i9.ZOOM || (this._state & i9.TOUCH_ZOOM) === i9.TOUCH_ZOOM || (this._state & i9.TOUCH_ZOOM_TRUCK) === i9.TOUCH_ZOOM_TRUCK || (this._state & i9.TOUCH_ZOOM_OFFSET) === i9.TOUCH_ZOOM_OFFSET || (this._state & i9.TOUCH_ZOOM_ROTATE) === i9.TOUCH_ZOOM_ROTATE) && (this._zoomEnd = this._zoom, this._zoomVelocity.value = 0), ((this._state & i9.OFFSET) === i9.OFFSET || (this._state & i9.TOUCH_OFFSET) === i9.TOUCH_OFFSET || (this._state & i9.TOUCH_DOLLY_OFFSET) === i9.TOUCH_DOLLY_OFFSET || (this._state & i9.TOUCH_ZOOM_OFFSET) === i9.TOUCH_ZOOM_OFFSET) && (this._focalOffsetEnd.copy(this._focalOffset), this._focalOffsetVelocity.set(0, 0, 0)), this.dispatchEvent({ type: "controlstart" });
    }, f8 = () => {
      if (!this._enabled || !this._dragNeedsUpdate) return;
      this._dragNeedsUpdate = false, ot(this._activePointers, F2);
      let c4 = this._domElement && this._domElement.ownerDocument.pointerLockElement === this._domElement ? this._lockedPointer || this._activePointers[0] : null, d5 = c4 ? -c4.deltaX : n19.x - F2.x, _3 = c4 ? -c4.deltaY : n19.y - F2.y;
      if (n19.copy(F2), ((this._state & i9.ROTATE) === i9.ROTATE || (this._state & i9.TOUCH_ROTATE) === i9.TOUCH_ROTATE || (this._state & i9.TOUCH_DOLLY_ROTATE) === i9.TOUCH_DOLLY_ROTATE || (this._state & i9.TOUCH_ZOOM_ROTATE) === i9.TOUCH_ZOOM_ROTATE) && (this._rotateInternal(d5, _3), this._isUserControllingRotate = true), (this._state & i9.DOLLY) === i9.DOLLY || (this._state & i9.ZOOM) === i9.ZOOM) {
        let E8 = this.dollyToCursor ? (s10.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, O4 = this.dollyToCursor ? (s10.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0, S4 = this.dollyDragInverted ? -1 : 1;
        (this._state & i9.DOLLY) === i9.DOLLY ? (this._dollyInternal(S4 * _3 * $, E8, O4), this._isUserControllingDolly = true) : (this._zoomInternal(S4 * _3 * $, E8, O4), this._isUserControllingZoom = true);
      }
      if ((this._state & i9.TOUCH_DOLLY) === i9.TOUCH_DOLLY || (this._state & i9.TOUCH_ZOOM) === i9.TOUCH_ZOOM || (this._state & i9.TOUCH_DOLLY_TRUCK) === i9.TOUCH_DOLLY_TRUCK || (this._state & i9.TOUCH_ZOOM_TRUCK) === i9.TOUCH_ZOOM_TRUCK || (this._state & i9.TOUCH_DOLLY_OFFSET) === i9.TOUCH_DOLLY_OFFSET || (this._state & i9.TOUCH_ZOOM_OFFSET) === i9.TOUCH_ZOOM_OFFSET || (this._state & i9.TOUCH_DOLLY_ROTATE) === i9.TOUCH_DOLLY_ROTATE || (this._state & i9.TOUCH_ZOOM_ROTATE) === i9.TOUCH_ZOOM_ROTATE) {
        let E8 = F2.x - this._activePointers[1].clientX, O4 = F2.y - this._activePointers[1].clientY, S4 = Math.sqrt(E8 * E8 + O4 * O4), z4 = r11.y - S4;
        r11.set(0, S4);
        let j2 = this.dollyToCursor ? (n19.x - this._elementRect.x) / this._elementRect.width * 2 - 1 : 0, W2 = this.dollyToCursor ? (n19.y - this._elementRect.y) / this._elementRect.height * -2 + 1 : 0;
        (this._state & i9.TOUCH_DOLLY) === i9.TOUCH_DOLLY || (this._state & i9.TOUCH_DOLLY_ROTATE) === i9.TOUCH_DOLLY_ROTATE || (this._state & i9.TOUCH_DOLLY_TRUCK) === i9.TOUCH_DOLLY_TRUCK || (this._state & i9.TOUCH_DOLLY_OFFSET) === i9.TOUCH_DOLLY_OFFSET ? (this._dollyInternal(z4 * $, j2, W2), this._isUserControllingDolly = true) : (this._zoomInternal(z4 * $, j2, W2), this._isUserControllingZoom = true);
      }
      ((this._state & i9.TRUCK) === i9.TRUCK || (this._state & i9.TOUCH_TRUCK) === i9.TOUCH_TRUCK || (this._state & i9.TOUCH_DOLLY_TRUCK) === i9.TOUCH_DOLLY_TRUCK || (this._state & i9.TOUCH_ZOOM_TRUCK) === i9.TOUCH_ZOOM_TRUCK) && (this._truckInternal(d5, _3, false), this._isUserControllingTruck = true), ((this._state & i9.OFFSET) === i9.OFFSET || (this._state & i9.TOUCH_OFFSET) === i9.TOUCH_OFFSET || (this._state & i9.TOUCH_DOLLY_OFFSET) === i9.TOUCH_DOLLY_OFFSET || (this._state & i9.TOUCH_ZOOM_OFFSET) === i9.TOUCH_ZOOM_OFFSET) && (this._truckInternal(d5, _3, true), this._isUserControllingOffset = true), this.dispatchEvent({ type: "control" });
    }, L2 = () => {
      ot(this._activePointers, F2), n19.copy(F2), this._dragNeedsUpdate = false, (this._activePointers.length === 0 || this._activePointers.length === 1 && this._activePointers[0] === this._lockedPointer) && (this._isDragging = false), this._activePointers.length === 0 && this._domElement && (this._domElement.ownerDocument.removeEventListener("pointermove", l8, { passive: false }), this._domElement.ownerDocument.removeEventListener("pointerup", m8), this.dispatchEvent({ type: "controlend" }));
    };
    this.lockPointer = () => {
      !this._enabled || !this._domElement || (this.cancel(), this._lockedPointer = { pointerId: -1, clientX: 0, clientY: 0, deltaX: 0, deltaY: 0, mouseButton: null }, this._activePointers.push(this._lockedPointer), this._domElement.ownerDocument.removeEventListener("pointermove", l8, { passive: false }), this._domElement.ownerDocument.removeEventListener("pointerup", m8), this._domElement.requestPointerLock(), this._domElement.ownerDocument.addEventListener("pointerlockchange", T4), this._domElement.ownerDocument.addEventListener("pointerlockerror", A4), this._domElement.ownerDocument.addEventListener("pointermove", l8, { passive: false }), this._domElement.ownerDocument.addEventListener("pointerup", m8), C2());
    }, this.unlockPointer = () => {
      var o13, c4, d5;
      this._lockedPointer !== null && (this._disposePointer(this._lockedPointer), this._lockedPointer = null), (o13 = this._domElement) === null || o13 === void 0 || o13.ownerDocument.exitPointerLock(), (c4 = this._domElement) === null || c4 === void 0 || c4.ownerDocument.removeEventListener("pointerlockchange", T4), (d5 = this._domElement) === null || d5 === void 0 || d5.ownerDocument.removeEventListener("pointerlockerror", A4), this.cancel();
    };
    let T4 = () => {
      this._domElement && this._domElement.ownerDocument.pointerLockElement === this._domElement || this.unlockPointer();
    }, A4 = () => {
      this.unlockPointer();
    };
    this._addAllEventListeners = (o13) => {
      this._domElement = o13, this._domElement.style.touchAction = "none", this._domElement.style.userSelect = "none", this._domElement.style.webkitUserSelect = "none", this._domElement.addEventListener("pointerdown", a14), this._domElement.addEventListener("pointercancel", m8), this._domElement.addEventListener("wheel", v9, { passive: false }), this._domElement.addEventListener("contextmenu", g6);
    }, this._removeAllEventListeners = () => {
      this._domElement && (this._domElement.style.touchAction = "", this._domElement.style.userSelect = "", this._domElement.style.webkitUserSelect = "", this._domElement.removeEventListener("pointerdown", a14), this._domElement.removeEventListener("pointercancel", m8), this._domElement.removeEventListener("wheel", v9, { passive: false }), this._domElement.removeEventListener("contextmenu", g6), this._domElement.ownerDocument.removeEventListener("pointermove", l8, { passive: false }), this._domElement.ownerDocument.removeEventListener("pointerup", m8), this._domElement.ownerDocument.removeEventListener("pointerlockchange", T4), this._domElement.ownerDocument.removeEventListener("pointerlockerror", A4));
    }, this.cancel = () => {
      this._state !== i9.NONE && (this._state = i9.NONE, this._activePointers.length = 0, L2());
    }, e21 && this.connect(e21), this.update(0);
  }
  get camera() {
    return this._camera;
  }
  set camera(t15) {
    this._camera = t15, this.updateCameraUp(), this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = true;
  }
  get enabled() {
    return this._enabled;
  }
  set enabled(t15) {
    this._enabled = t15, this._domElement && (t15 ? (this._domElement.style.touchAction = "none", this._domElement.style.userSelect = "none", this._domElement.style.webkitUserSelect = "none") : (this.cancel(), this._domElement.style.touchAction = "", this._domElement.style.userSelect = "", this._domElement.style.webkitUserSelect = ""));
  }
  get active() {
    return !this._hasRested;
  }
  get currentAction() {
    return this._state;
  }
  get distance() {
    return this._spherical.radius;
  }
  set distance(t15) {
    this._spherical.radius === t15 && this._sphericalEnd.radius === t15 || (this._spherical.radius = t15, this._sphericalEnd.radius = t15, this._needsUpdate = true);
  }
  get azimuthAngle() {
    return this._spherical.theta;
  }
  set azimuthAngle(t15) {
    this._spherical.theta === t15 && this._sphericalEnd.theta === t15 || (this._spherical.theta = t15, this._sphericalEnd.theta = t15, this._needsUpdate = true);
  }
  get polarAngle() {
    return this._spherical.phi;
  }
  set polarAngle(t15) {
    this._spherical.phi === t15 && this._sphericalEnd.phi === t15 || (this._spherical.phi = t15, this._sphericalEnd.phi = t15, this._needsUpdate = true);
  }
  get boundaryEnclosesCamera() {
    return this._boundaryEnclosesCamera;
  }
  set boundaryEnclosesCamera(t15) {
    this._boundaryEnclosesCamera = t15, this._needsUpdate = true;
  }
  set interactiveArea(t15) {
    this._interactiveArea.width = M2(t15.width, 0, 1), this._interactiveArea.height = M2(t15.height, 0, 1), this._interactiveArea.x = M2(t15.x, 0, 1 - this._interactiveArea.width), this._interactiveArea.y = M2(t15.y, 0, 1 - this._interactiveArea.height);
  }
  addEventListener(t15, e21) {
    super.addEventListener(t15, e21);
  }
  removeEventListener(t15, e21) {
    super.removeEventListener(t15, e21);
  }
  rotate(t15, e21, s10 = false) {
    return this.rotateTo(this._sphericalEnd.theta + t15, this._sphericalEnd.phi + e21, s10);
  }
  rotateAzimuthTo(t15, e21 = false) {
    return this.rotateTo(t15, this._sphericalEnd.phi, e21);
  }
  rotatePolarTo(t15, e21 = false) {
    return this.rotateTo(this._sphericalEnd.theta, t15, e21);
  }
  rotateTo(t15, e21, s10 = false) {
    this._isUserControllingRotate = false;
    let n19 = M2(t15, this.minAzimuthAngle, this.maxAzimuthAngle), r11 = M2(e21, this.minPolarAngle, this.maxPolarAngle);
    this._sphericalEnd.theta = n19, this._sphericalEnd.phi = r11, this._sphericalEnd.makeSafe(), this._needsUpdate = true, s10 || (this._spherical.theta = this._sphericalEnd.theta, this._spherical.phi = this._sphericalEnd.phi);
    let a14 = !s10 || x4(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && x4(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold);
    return this._createOnRestPromise(a14);
  }
  dolly(t15, e21 = false) {
    return this.dollyTo(this._sphericalEnd.radius - t15, e21);
  }
  dollyTo(t15, e21 = false) {
    return this._isUserControllingDolly = false, this._lastDollyDirection = N.NONE, this._changedDolly = 0, this._dollyToNoClamp(M2(t15, this.minDistance, this.maxDistance), e21);
  }
  _dollyToNoClamp(t15, e21 = false) {
    let s10 = this._sphericalEnd.radius;
    if (this.colliderMeshes.length >= 1) {
      let a14 = this._collisionTest(), l8 = x4(a14, this._spherical.radius);
      if (!(s10 > t15) && l8) return Promise.resolve();
      this._sphericalEnd.radius = Math.min(t15, a14);
    } else this._sphericalEnd.radius = t15;
    this._needsUpdate = true, e21 || (this._spherical.radius = this._sphericalEnd.radius);
    let r11 = !e21 || x4(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(r11);
  }
  dollyInFixed(t15, e21 = false) {
    this._targetEnd.add(this._getCameraDirection(q2).multiplyScalar(t15)), e21 || this._target.copy(this._targetEnd);
    let s10 = !e21 || x4(this._target.x, this._targetEnd.x, this.restThreshold) && x4(this._target.y, this._targetEnd.y, this.restThreshold) && x4(this._target.z, this._targetEnd.z, this.restThreshold);
    return this._createOnRestPromise(s10);
  }
  zoom(t15, e21 = false) {
    return this.zoomTo(this._zoomEnd + t15, e21);
  }
  zoomTo(t15, e21 = false) {
    this._isUserControllingZoom = false, this._zoomEnd = M2(t15, this.minZoom, this.maxZoom), this._needsUpdate = true, e21 || (this._zoom = this._zoomEnd);
    let s10 = !e21 || x4(this._zoom, this._zoomEnd, this.restThreshold);
    return this._changedZoom = 0, this._createOnRestPromise(s10);
  }
  pan(t15, e21, s10 = false) {
    return console.warn("`pan` has been renamed to `truck`"), this.truck(t15, e21, s10);
  }
  truck(t15, e21, s10 = false) {
    this._camera.updateMatrix(), I2.setFromMatrixColumn(this._camera.matrix, 0), b3.setFromMatrixColumn(this._camera.matrix, 1), I2.multiplyScalar(t15), b3.multiplyScalar(-e21);
    let n19 = y4.copy(I2).add(b3), r11 = U2.copy(this._targetEnd).add(n19);
    return this.moveTo(r11.x, r11.y, r11.z, s10);
  }
  forward(t15, e21 = false) {
    y4.setFromMatrixColumn(this._camera.matrix, 0), y4.crossVectors(this._camera.up, y4), y4.multiplyScalar(t15);
    let s10 = U2.copy(this._targetEnd).add(y4);
    return this.moveTo(s10.x, s10.y, s10.z, e21);
  }
  elevate(t15, e21 = false) {
    return y4.copy(this._camera.up).multiplyScalar(t15), this.moveTo(this._targetEnd.x + y4.x, this._targetEnd.y + y4.y, this._targetEnd.z + y4.z, e21);
  }
  moveTo(t15, e21, s10, n19 = false) {
    this._isUserControllingTruck = false;
    let r11 = y4.set(t15, e21, s10).sub(this._targetEnd);
    this._encloseToBoundary(this._targetEnd, r11, this.boundaryFriction), this._needsUpdate = true, n19 || this._target.copy(this._targetEnd);
    let a14 = !n19 || x4(this._target.x, this._targetEnd.x, this.restThreshold) && x4(this._target.y, this._targetEnd.y, this.restThreshold) && x4(this._target.z, this._targetEnd.z, this.restThreshold);
    return this._createOnRestPromise(a14);
  }
  lookInDirectionOf(t15, e21, s10, n19 = false) {
    let l8 = y4.set(t15, e21, s10).sub(this._targetEnd).normalize().multiplyScalar(-this._sphericalEnd.radius).add(this._targetEnd);
    return this.setPosition(l8.x, l8.y, l8.z, n19);
  }
  fitToBox(t15, e21, { cover: s10 = false, paddingLeft: n19 = 0, paddingRight: r11 = 0, paddingBottom: a14 = 0, paddingTop: l8 = 0 } = {}) {
    let m8 = [], h9 = t15.isBox3 ? B4.copy(t15) : B4.setFromObject(t15);
    h9.isEmpty() && (console.warn("camera-controls: fitTo() cannot be used with an empty box. Aborting"), Promise.resolve());
    let v9 = ut(this._sphericalEnd.theta, pt), g6 = ut(this._sphericalEnd.phi, pt);
    m8.push(this.rotateTo(v9, g6, e21));
    let C2 = y4.setFromSpherical(this._sphericalEnd).normalize(), f8 = Et.setFromUnitVectors(C2, at), L2 = x4(Math.abs(C2.y), 1);
    L2 && f8.multiply(lt.setFromAxisAngle(tt, v9)), f8.multiply(this._yAxisUpSpaceInverse);
    let T4 = Tt.makeEmpty();
    U2.copy(h9.min).applyQuaternion(f8), T4.expandByPoint(U2), U2.copy(h9.min).setX(h9.max.x).applyQuaternion(f8), T4.expandByPoint(U2), U2.copy(h9.min).setY(h9.max.y).applyQuaternion(f8), T4.expandByPoint(U2), U2.copy(h9.max).setZ(h9.min.z).applyQuaternion(f8), T4.expandByPoint(U2), U2.copy(h9.min).setZ(h9.max.z).applyQuaternion(f8), T4.expandByPoint(U2), U2.copy(h9.max).setY(h9.min.y).applyQuaternion(f8), T4.expandByPoint(U2), U2.copy(h9.max).setX(h9.min.x).applyQuaternion(f8), T4.expandByPoint(U2), U2.copy(h9.max).applyQuaternion(f8), T4.expandByPoint(U2), T4.min.x -= n19, T4.min.y -= a14, T4.max.x += r11, T4.max.y += l8, f8.setFromUnitVectors(at, C2), L2 && f8.premultiply(lt.invert()), f8.premultiply(this._yAxisUpSpace);
    let A4 = T4.getSize(y4), o13 = T4.getCenter(U2).applyQuaternion(f8);
    if (k4(this._camera)) {
      let c4 = this.getDistanceToFitBox(A4.x, A4.y, A4.z, s10);
      m8.push(this.moveTo(o13.x, o13.y, o13.z, e21)), m8.push(this.dollyTo(c4, e21)), m8.push(this.setFocalOffset(0, 0, 0, e21));
    } else if (H2(this._camera)) {
      let c4 = this._camera, d5 = c4.right - c4.left, _3 = c4.top - c4.bottom, E8 = s10 ? Math.max(d5 / A4.x, _3 / A4.y) : Math.min(d5 / A4.x, _3 / A4.y);
      m8.push(this.moveTo(o13.x, o13.y, o13.z, e21)), m8.push(this.zoomTo(E8, e21)), m8.push(this.setFocalOffset(0, 0, 0, e21));
    }
    return Promise.all(m8);
  }
  fitToSphere(t15, e21) {
    let s10 = [], r11 = "isObject3D" in t15 ? u4.createBoundingSphere(t15, ht) : ht.copy(t15);
    if (s10.push(this.moveTo(r11.center.x, r11.center.y, r11.center.z, e21)), k4(this._camera)) {
      let a14 = this.getDistanceToFitSphere(r11.radius);
      s10.push(this.dollyTo(a14, e21));
    } else if (H2(this._camera)) {
      let a14 = this._camera.right - this._camera.left, l8 = this._camera.top - this._camera.bottom, m8 = 2 * r11.radius, h9 = Math.min(a14 / m8, l8 / m8);
      s10.push(this.zoomTo(h9, e21));
    }
    return s10.push(this.setFocalOffset(0, 0, 0, e21)), Promise.all(s10);
  }
  setLookAt(t15, e21, s10, n19, r11, a14, l8 = false) {
    this._isUserControllingRotate = false, this._isUserControllingDolly = false, this._isUserControllingTruck = false, this._lastDollyDirection = N.NONE, this._changedDolly = 0;
    let m8 = U2.set(n19, r11, a14), h9 = y4.set(t15, e21, s10);
    this._targetEnd.copy(m8), this._sphericalEnd.setFromVector3(h9.sub(m8).applyQuaternion(this._yAxisUpSpace)), this.normalizeRotations(), this._needsUpdate = true, l8 || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
    let v9 = !l8 || x4(this._target.x, this._targetEnd.x, this.restThreshold) && x4(this._target.y, this._targetEnd.y, this.restThreshold) && x4(this._target.z, this._targetEnd.z, this.restThreshold) && x4(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && x4(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && x4(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(v9);
  }
  lerpLookAt(t15, e21, s10, n19, r11, a14, l8, m8, h9, v9, g6, C2, f8, L2 = false) {
    this._isUserControllingRotate = false, this._isUserControllingDolly = false, this._isUserControllingTruck = false, this._lastDollyDirection = N.NONE, this._changedDolly = 0;
    let T4 = y4.set(n19, r11, a14), A4 = U2.set(t15, e21, s10);
    R3.setFromVector3(A4.sub(T4).applyQuaternion(this._yAxisUpSpace));
    let o13 = V2.set(v9, g6, C2), c4 = U2.set(l8, m8, h9);
    G.setFromVector3(c4.sub(o13).applyQuaternion(this._yAxisUpSpace)), this._targetEnd.copy(T4.lerp(o13, f8));
    let d5 = G.theta - R3.theta, _3 = G.phi - R3.phi, E8 = G.radius - R3.radius;
    this._sphericalEnd.set(R3.radius + E8 * f8, R3.phi + _3 * f8, R3.theta + d5 * f8), this.normalizeRotations(), this._needsUpdate = true, L2 || (this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd));
    let O4 = !L2 || x4(this._target.x, this._targetEnd.x, this.restThreshold) && x4(this._target.y, this._targetEnd.y, this.restThreshold) && x4(this._target.z, this._targetEnd.z, this.restThreshold) && x4(this._spherical.theta, this._sphericalEnd.theta, this.restThreshold) && x4(this._spherical.phi, this._sphericalEnd.phi, this.restThreshold) && x4(this._spherical.radius, this._sphericalEnd.radius, this.restThreshold);
    return this._createOnRestPromise(O4);
  }
  setPosition(t15, e21, s10, n19 = false) {
    return this.setLookAt(t15, e21, s10, this._targetEnd.x, this._targetEnd.y, this._targetEnd.z, n19);
  }
  setTarget(t15, e21, s10, n19 = false) {
    let r11 = this.getPosition(y4), a14 = this.setLookAt(r11.x, r11.y, r11.z, t15, e21, s10, n19);
    return this._sphericalEnd.phi = M2(this._sphericalEnd.phi, this.minPolarAngle, this.maxPolarAngle), a14;
  }
  setFocalOffset(t15, e21, s10, n19 = false) {
    this._isUserControllingOffset = false, this._focalOffsetEnd.set(t15, e21, s10), this._needsUpdate = true, n19 || this._focalOffset.copy(this._focalOffsetEnd);
    let r11 = !n19 || x4(this._focalOffset.x, this._focalOffsetEnd.x, this.restThreshold) && x4(this._focalOffset.y, this._focalOffsetEnd.y, this.restThreshold) && x4(this._focalOffset.z, this._focalOffsetEnd.z, this.restThreshold);
    return this._createOnRestPromise(r11);
  }
  setOrbitPoint(t15, e21, s10) {
    this._camera.updateMatrixWorld(), I2.setFromMatrixColumn(this._camera.matrixWorldInverse, 0), b3.setFromMatrixColumn(this._camera.matrixWorldInverse, 1), Y.setFromMatrixColumn(this._camera.matrixWorldInverse, 2);
    let n19 = y4.set(t15, e21, s10), r11 = n19.distanceTo(this._camera.position), a14 = n19.sub(this._camera.position);
    I2.multiplyScalar(a14.x), b3.multiplyScalar(a14.y), Y.multiplyScalar(a14.z), y4.copy(I2).add(b3).add(Y), y4.z = y4.z + r11, this.dollyTo(r11, false), this.setFocalOffset(-y4.x, y4.y, -y4.z, false), this.moveTo(t15, e21, s10, false);
  }
  setBoundary(t15) {
    if (!t15) {
      this._boundary.min.set(-1 / 0, -1 / 0, -1 / 0), this._boundary.max.set(1 / 0, 1 / 0, 1 / 0), this._needsUpdate = true;
      return;
    }
    this._boundary.copy(t15), this._boundary.clampPoint(this._targetEnd, this._targetEnd), this._needsUpdate = true;
  }
  setViewport(t15, e21, s10, n19) {
    if (t15 === null) {
      this._viewport = null;
      return;
    }
    this._viewport = this._viewport || new p8.Vector4(), typeof t15 == "number" ? this._viewport.set(t15, e21, s10, n19) : this._viewport.copy(t15);
  }
  getDistanceToFitBox(t15, e21, s10, n19 = false) {
    if (rt(this._camera, "getDistanceToFitBox")) return this._spherical.radius;
    let r11 = t15 / e21, a14 = this._camera.getEffectiveFOV() * K, l8 = this._camera.aspect;
    return ((n19 ? r11 > l8 : r11 < l8) ? e21 : t15 / l8) * 0.5 / Math.tan(a14 * 0.5) + s10 * 0.5;
  }
  getDistanceToFitSphere(t15) {
    if (rt(this._camera, "getDistanceToFitSphere")) return this._spherical.radius;
    let e21 = this._camera.getEffectiveFOV() * K, s10 = Math.atan(Math.tan(e21 * 0.5) * this._camera.aspect) * 2, n19 = 1 < this._camera.aspect ? e21 : s10;
    return t15 / Math.sin(n19 * 0.5);
  }
  getTarget(t15, e21 = true) {
    return (t15 && t15.isVector3 ? t15 : new p8.Vector3()).copy(e21 ? this._targetEnd : this._target);
  }
  getPosition(t15, e21 = true) {
    return (t15 && t15.isVector3 ? t15 : new p8.Vector3()).setFromSpherical(e21 ? this._sphericalEnd : this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(e21 ? this._targetEnd : this._target);
  }
  getSpherical(t15, e21 = true) {
    return (t15 || new p8.Spherical()).copy(e21 ? this._sphericalEnd : this._spherical);
  }
  getFocalOffset(t15, e21 = true) {
    return (t15 && t15.isVector3 ? t15 : new p8.Vector3()).copy(e21 ? this._focalOffsetEnd : this._focalOffset);
  }
  normalizeRotations() {
    this._sphericalEnd.theta = this._sphericalEnd.theta % Z, this._sphericalEnd.theta < 0 && (this._sphericalEnd.theta += Z), this._spherical.theta += Z * Math.round((this._sphericalEnd.theta - this._spherical.theta) / Z);
  }
  stop() {
    this._focalOffset.copy(this._focalOffsetEnd), this._target.copy(this._targetEnd), this._spherical.copy(this._sphericalEnd), this._zoom = this._zoomEnd;
  }
  reset(t15 = false) {
    if (!x4(this._camera.up.x, this._cameraUp0.x) || !x4(this._camera.up.y, this._cameraUp0.y) || !x4(this._camera.up.z, this._cameraUp0.z)) {
      this._camera.up.copy(this._cameraUp0);
      let s10 = this.getPosition(y4);
      this.updateCameraUp(), this.setPosition(s10.x, s10.y, s10.z);
    }
    let e21 = [this.setLookAt(this._position0.x, this._position0.y, this._position0.z, this._target0.x, this._target0.y, this._target0.z, t15), this.setFocalOffset(this._focalOffset0.x, this._focalOffset0.y, this._focalOffset0.z, t15), this.zoomTo(this._zoom0, t15)];
    return Promise.all(e21);
  }
  saveState() {
    this._cameraUp0.copy(this._camera.up), this.getTarget(this._target0), this.getPosition(this._position0), this._zoom0 = this._zoom, this._focalOffset0.copy(this._focalOffset);
  }
  updateCameraUp() {
    this._yAxisUpSpace.setFromUnitVectors(this._camera.up, tt), this._yAxisUpSpaceInverse.copy(this._yAxisUpSpace).invert();
  }
  applyCameraUp() {
    let t15 = y4.subVectors(this._target, this._camera.position).normalize(), e21 = U2.crossVectors(t15, this._camera.up);
    this._camera.up.crossVectors(e21, t15).normalize(), this._camera.updateMatrixWorld();
    let s10 = this.getPosition(y4);
    this.updateCameraUp(), this.setPosition(s10.x, s10.y, s10.z);
  }
  update(t15) {
    let e21 = this._sphericalEnd.theta - this._spherical.theta, s10 = this._sphericalEnd.phi - this._spherical.phi, n19 = this._sphericalEnd.radius - this._spherical.radius, r11 = Ot.subVectors(this._targetEnd, this._target), a14 = yt.subVectors(this._focalOffsetEnd, this._focalOffset), l8 = this._zoomEnd - this._zoom;
    if (D(e21)) this._thetaVelocity.value = 0, this._spherical.theta = this._sphericalEnd.theta;
    else {
      let g6 = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.theta = J2(this._spherical.theta, this._sphericalEnd.theta, this._thetaVelocity, g6, 1 / 0, t15), this._needsUpdate = true;
    }
    if (D(s10)) this._phiVelocity.value = 0, this._spherical.phi = this._sphericalEnd.phi;
    else {
      let g6 = this._isUserControllingRotate ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.phi = J2(this._spherical.phi, this._sphericalEnd.phi, this._phiVelocity, g6, 1 / 0, t15), this._needsUpdate = true;
    }
    if (D(n19)) this._radiusVelocity.value = 0, this._spherical.radius = this._sphericalEnd.radius;
    else {
      let g6 = this._isUserControllingDolly ? this.draggingSmoothTime : this.smoothTime;
      this._spherical.radius = J2(this._spherical.radius, this._sphericalEnd.radius, this._radiusVelocity, g6, this.maxSpeed, t15), this._needsUpdate = true;
    }
    if (D(r11.x) && D(r11.y) && D(r11.z)) this._targetVelocity.set(0, 0, 0), this._target.copy(this._targetEnd);
    else {
      let g6 = this._isUserControllingTruck ? this.draggingSmoothTime : this.smoothTime;
      ft(this._target, this._targetEnd, this._targetVelocity, g6, this.maxSpeed, t15, this._target), this._needsUpdate = true;
    }
    if (D(a14.x) && D(a14.y) && D(a14.z)) this._focalOffsetVelocity.set(0, 0, 0), this._focalOffset.copy(this._focalOffsetEnd);
    else {
      let g6 = this._isUserControllingOffset ? this.draggingSmoothTime : this.smoothTime;
      ft(this._focalOffset, this._focalOffsetEnd, this._focalOffsetVelocity, g6, this.maxSpeed, t15, this._focalOffset), this._needsUpdate = true;
    }
    if (D(l8)) this._zoomVelocity.value = 0, this._zoom = this._zoomEnd;
    else {
      let g6 = this._isUserControllingZoom ? this.draggingSmoothTime : this.smoothTime;
      this._zoom = J2(this._zoom, this._zoomEnd, this._zoomVelocity, g6, 1 / 0, t15);
    }
    if (this.dollyToCursor) {
      if (k4(this._camera) && this._changedDolly !== 0) {
        let g6 = this._spherical.radius - this._lastDistance, C2 = this._camera, f8 = this._getCameraDirection(q2), L2 = y4.copy(f8).cross(C2.up).normalize();
        L2.lengthSq() === 0 && (L2.x = 1);
        let T4 = U2.crossVectors(L2, f8), A4 = this._sphericalEnd.radius * Math.tan(C2.getEffectiveFOV() * K * 0.5), c4 = (this._sphericalEnd.radius - g6 - this._sphericalEnd.radius) / this._sphericalEnd.radius, d5 = V2.copy(this._targetEnd).add(L2.multiplyScalar(this._dollyControlCoord.x * A4 * C2.aspect)).add(T4.multiplyScalar(this._dollyControlCoord.y * A4)), _3 = y4.copy(this._targetEnd).lerp(d5, c4), E8 = this._lastDollyDirection === N.IN && this._spherical.radius <= this.minDistance, O4 = this._lastDollyDirection === N.OUT && this.maxDistance <= this._spherical.radius;
        if (this.infinityDolly && (E8 || O4)) {
          this._sphericalEnd.radius -= g6, this._spherical.radius -= g6;
          let z4 = U2.copy(f8).multiplyScalar(-g6);
          _3.add(z4);
        }
        this._boundary.clampPoint(_3, _3);
        let S4 = U2.subVectors(_3, this._targetEnd);
        this._targetEnd.copy(_3), this._target.add(S4), this._changedDolly -= g6, D(this._changedDolly) && (this._changedDolly = 0);
      } else if (H2(this._camera) && this._changedZoom !== 0) {
        let g6 = this._zoom - this._lastZoom, C2 = this._camera, f8 = y4.set(this._dollyControlCoord.x, this._dollyControlCoord.y, (C2.near + C2.far) / (C2.near - C2.far)).unproject(C2), L2 = U2.set(0, 0, -1).applyQuaternion(C2.quaternion), T4 = V2.copy(f8).add(L2.multiplyScalar(-f8.dot(C2.up))), o13 = -(this._zoom - g6 - this._zoom) / this._zoom, c4 = this._getCameraDirection(q2), d5 = this._targetEnd.dot(c4), _3 = y4.copy(this._targetEnd).lerp(T4, o13), E8 = _3.dot(c4), O4 = c4.multiplyScalar(E8 - d5);
        _3.sub(O4), this._boundary.clampPoint(_3, _3);
        let S4 = U2.subVectors(_3, this._targetEnd);
        this._targetEnd.copy(_3), this._target.add(S4), this._changedZoom -= g6, D(this._changedZoom) && (this._changedZoom = 0);
      }
    }
    this._camera.zoom !== this._zoom && (this._camera.zoom = this._zoom, this._camera.updateProjectionMatrix(), this._updateNearPlaneCorners(), this._needsUpdate = true), this._dragNeedsUpdate = true;
    let m8 = this._collisionTest();
    this._spherical.radius = Math.min(this._spherical.radius, m8), this._spherical.makeSafe(), this._camera.position.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse).add(this._target), this._camera.lookAt(this._target), (!D(this._focalOffset.x) || !D(this._focalOffset.y) || !D(this._focalOffset.z)) && (this._camera.updateMatrixWorld(), I2.setFromMatrixColumn(this._camera.matrix, 0), b3.setFromMatrixColumn(this._camera.matrix, 1), Y.setFromMatrixColumn(this._camera.matrix, 2), I2.multiplyScalar(this._focalOffset.x), b3.multiplyScalar(-this._focalOffset.y), Y.multiplyScalar(this._focalOffset.z), y4.copy(I2).add(b3).add(Y), this._camera.position.add(y4)), this._boundaryEnclosesCamera && this._encloseToBoundary(this._camera.position.copy(this._target), y4.setFromSpherical(this._spherical).applyQuaternion(this._yAxisUpSpaceInverse), 1);
    let v9 = this._needsUpdate;
    return v9 && !this._updatedLastTime ? (this._hasRested = false, this.dispatchEvent({ type: "wake" }), this.dispatchEvent({ type: "update" })) : v9 ? (this.dispatchEvent({ type: "update" }), D(e21, this.restThreshold) && D(s10, this.restThreshold) && D(n19, this.restThreshold) && D(r11.x, this.restThreshold) && D(r11.y, this.restThreshold) && D(r11.z, this.restThreshold) && D(a14.x, this.restThreshold) && D(a14.y, this.restThreshold) && D(a14.z, this.restThreshold) && D(l8, this.restThreshold) && !this._hasRested && (this._hasRested = true, this.dispatchEvent({ type: "rest" }))) : !v9 && this._updatedLastTime && this.dispatchEvent({ type: "sleep" }), this._lastDistance = this._spherical.radius, this._lastZoom = this._zoom, this._updatedLastTime = v9, this._needsUpdate = false, v9;
  }
  toJSON() {
    return JSON.stringify({ enabled: this._enabled, minDistance: this.minDistance, maxDistance: X(this.maxDistance), minZoom: this.minZoom, maxZoom: X(this.maxZoom), minPolarAngle: this.minPolarAngle, maxPolarAngle: X(this.maxPolarAngle), minAzimuthAngle: X(this.minAzimuthAngle), maxAzimuthAngle: X(this.maxAzimuthAngle), smoothTime: this.smoothTime, draggingSmoothTime: this.draggingSmoothTime, dollySpeed: this.dollySpeed, truckSpeed: this.truckSpeed, dollyToCursor: this.dollyToCursor, verticalDragToForward: this.verticalDragToForward, target: this._targetEnd.toArray(), position: y4.setFromSpherical(this._sphericalEnd).add(this._targetEnd).toArray(), zoom: this._zoomEnd, focalOffset: this._focalOffsetEnd.toArray(), target0: this._target0.toArray(), position0: this._position0.toArray(), zoom0: this._zoom0, focalOffset0: this._focalOffset0.toArray() });
  }
  fromJSON(t15, e21 = false) {
    let s10 = JSON.parse(t15);
    this.enabled = s10.enabled, this.minDistance = s10.minDistance, this.maxDistance = Q2(s10.maxDistance), this.minZoom = s10.minZoom, this.maxZoom = Q2(s10.maxZoom), this.minPolarAngle = s10.minPolarAngle, this.maxPolarAngle = Q2(s10.maxPolarAngle), this.minAzimuthAngle = Q2(s10.minAzimuthAngle), this.maxAzimuthAngle = Q2(s10.maxAzimuthAngle), this.smoothTime = s10.smoothTime, this.draggingSmoothTime = s10.draggingSmoothTime, this.dollySpeed = s10.dollySpeed, this.truckSpeed = s10.truckSpeed, this.dollyToCursor = s10.dollyToCursor, this.verticalDragToForward = s10.verticalDragToForward, this._target0.fromArray(s10.target0), this._position0.fromArray(s10.position0), this._zoom0 = s10.zoom0, this._focalOffset0.fromArray(s10.focalOffset0), this.moveTo(s10.target[0], s10.target[1], s10.target[2], e21), R3.setFromVector3(y4.fromArray(s10.position).sub(this._targetEnd).applyQuaternion(this._yAxisUpSpace)), this.rotateTo(R3.theta, R3.phi, e21), this.dollyTo(R3.radius, e21), this.zoomTo(s10.zoom, e21), this.setFocalOffset(s10.focalOffset[0], s10.focalOffset[1], s10.focalOffset[2], e21), this._needsUpdate = true;
  }
  connect(t15) {
    if (this._domElement) {
      console.warn("camera-controls is already connected.");
      return;
    }
    t15.setAttribute("data-camera-controls-version", At), this._addAllEventListeners(t15), this._getClientRect(this._elementRect);
  }
  disconnect() {
    this.cancel(), this._removeAllEventListeners(), this._domElement && (this._domElement.removeAttribute("data-camera-controls-version"), this._domElement = void 0);
  }
  dispose() {
    this.removeAllEventListeners(), this.disconnect();
  }
  _getTargetDirection(t15) {
    return t15.setFromSpherical(this._spherical).divideScalar(this._spherical.radius).applyQuaternion(this._yAxisUpSpaceInverse);
  }
  _getCameraDirection(t15) {
    return this._getTargetDirection(t15).negate();
  }
  _findPointerById(t15) {
    return this._activePointers.find((e21) => e21.pointerId === t15);
  }
  _findPointerByMouseButton(t15) {
    return this._activePointers.find((e21) => e21.mouseButton === t15);
  }
  _disposePointer(t15) {
    this._activePointers.splice(this._activePointers.indexOf(t15), 1);
  }
  _encloseToBoundary(t15, e21, s10) {
    let n19 = e21.lengthSq();
    if (n19 === 0) return t15;
    let r11 = U2.copy(e21).add(t15), l8 = this._boundary.clampPoint(r11, V2).sub(r11), m8 = l8.lengthSq();
    if (m8 === 0) return t15.add(e21);
    if (m8 === n19) return t15;
    if (s10 === 0) return t15.add(e21).add(l8);
    {
      let h9 = 1 + s10 * m8 / e21.dot(l8);
      return t15.add(U2.copy(e21).multiplyScalar(h9)).add(l8.multiplyScalar(1 - s10));
    }
  }
  _updateNearPlaneCorners() {
    if (k4(this._camera)) {
      let t15 = this._camera, e21 = t15.near, s10 = t15.getEffectiveFOV() * K, n19 = Math.tan(s10 * 0.5) * e21, r11 = n19 * t15.aspect;
      this._nearPlaneCorners[0].set(-r11, -n19, 0), this._nearPlaneCorners[1].set(r11, -n19, 0), this._nearPlaneCorners[2].set(r11, n19, 0), this._nearPlaneCorners[3].set(-r11, n19, 0);
    } else if (H2(this._camera)) {
      let t15 = this._camera, e21 = 1 / t15.zoom, s10 = t15.left * e21, n19 = t15.right * e21, r11 = t15.top * e21, a14 = t15.bottom * e21;
      this._nearPlaneCorners[0].set(s10, r11, 0), this._nearPlaneCorners[1].set(n19, r11, 0), this._nearPlaneCorners[2].set(n19, a14, 0), this._nearPlaneCorners[3].set(s10, a14, 0);
    }
  }
  _collisionTest() {
    let t15 = 1 / 0;
    if (!(this.colliderMeshes.length >= 1) || rt(this._camera, "_collisionTest")) return t15;
    let s10 = this._getTargetDirection(q2);
    ct.lookAt(gt, s10, this._camera.up);
    for (let n19 = 0; n19 < 4; n19++) {
      let r11 = U2.copy(this._nearPlaneCorners[n19]);
      r11.applyMatrix4(ct);
      let a14 = V2.addVectors(this._target, r11);
      et.set(a14, s10), et.far = this._spherical.radius + 1;
      let l8 = et.intersectObjects(this.colliderMeshes);
      l8.length !== 0 && l8[0].distance < t15 && (t15 = l8[0].distance);
    }
    return t15;
  }
  _getClientRect(t15) {
    if (!this._domElement) return;
    let e21 = this._domElement.getBoundingClientRect();
    return t15.x = e21.left, t15.y = e21.top, this._viewport ? (t15.x += this._viewport.x, t15.y += e21.height - this._viewport.w - this._viewport.y, t15.width = this._viewport.z, t15.height = this._viewport.w) : (t15.width = e21.width, t15.height = e21.height), t15;
  }
  _createOnRestPromise(t15) {
    return t15 ? Promise.resolve() : (this._hasRested = false, this.dispatchEvent({ type: "transitionstart" }), new Promise((e21) => {
      let s10 = () => {
        this.removeEventListener("rest", s10), e21();
      };
      this.addEventListener("rest", s10);
    }));
  }
  _addAllEventListeners(t15) {
  }
  _removeAllEventListeners() {
  }
  get dampingFactor() {
    return console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead."), 0;
  }
  set dampingFactor(t15) {
    console.warn(".dampingFactor has been deprecated. use smoothTime (in seconds) instead.");
  }
  get draggingDampingFactor() {
    return console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead."), 0;
  }
  set draggingDampingFactor(t15) {
    console.warn(".draggingDampingFactor has been deprecated. use draggingSmoothTime (in seconds) instead.");
  }
  static createBoundingSphere(t15, e21 = new p8.Sphere()) {
    let s10 = e21, n19 = s10.center;
    B4.makeEmpty(), t15.traverseVisible((a14) => {
      a14.isMesh && B4.expandByObject(a14);
    }), B4.getCenter(n19);
    let r11 = 0;
    return t15.traverseVisible((a14) => {
      if (!a14.isMesh) return;
      let l8 = a14, m8 = l8.geometry.clone();
      m8.applyMatrix4(l8.matrixWorld);
      let v9 = m8.attributes.position;
      for (let g6 = 0, C2 = v9.count; g6 < C2; g6++) y4.fromBufferAttribute(v9, g6), r11 = Math.max(r11, n19.distanceToSquared(y4));
    }), s10.radius = Math.sqrt(r11), s10;
  }
};
function Yt(e21) {
  var s10 = e21, { smoothTime: u7 = 0.05 } = s10, t15 = y(s10, ["smoothTime"]);
  w2.install({ THREE: Pt }), zt({ CameraControls: w2 });
  let n19 = Ut((h9) => h9.camera), r11 = Ut((h9) => h9.gl), a14 = v4(t15), [l8, m8] = wt(false);
  return Ft(() => {
    let h9 = a14.current;
    if (!h9) return;
    let { type: v9, onCameraUpdate: g6 } = t15 || {};
    if (!g6) return;
    let C2 = (o13) => Math.round(o13 * 180 / Math.PI), f8 = () => ({ cAzimuthAngle: C2(h9.azimuthAngle), cPolarAngle: C2(h9.polarAngle) }), L2 = () => {
      var c4;
      let o13 = {};
      if (v9 === "sphere") {
        let d5 = h9 == null ? void 0 : h9.zoom;
        if (Number.isFinite(d5)) o13.cameraZoom = Number(d5.toFixed(2));
        else {
          let _3 = (c4 = h9 == null ? void 0 : h9.camera) == null ? void 0 : c4.zoom;
          Number.isFinite(_3) && (o13.cameraZoom = Number(_3.toFixed(2)));
        }
      } else Number.isFinite(h9.distance) && (o13.cDistance = Number(h9.distance.toFixed(2)));
      return o13;
    }, T4 = () => {
      m8(true);
    }, A4 = () => {
      m8(false), g6(w(w({}, f8()), L2()));
    };
    return h9.addEventListener("controlstart", T4), h9.addEventListener("rest", A4), () => {
      h9.removeEventListener("controlstart", T4), h9.removeEventListener("rest", A4);
    };
  }, [a14, t15]), Rt("cameraControls", { ref: a14, args: [n19, r11.domElement], smoothTime: l8 ? 0 : u7, zoomSpeed: 10, dollySpeed: 5, maxDistance: 1e3, restThreshold: 0.01, mouseButtons: { left: w2.ACTION.ROTATE, middle: t15.type === "sphere" ? w2.ACTION.ZOOM : w2.ACTION.DOLLY, right: w2.ACTION.NONE, wheel: t15.type === "sphere" ? w2.ACTION.ZOOM : w2.ACTION.DOLLY }, touches: { one: w2.ACTION.ROTATE, two: w2.ACTION.NONE, three: w2.ACTION.NONE } });
}

// node_modules/@shadergradient/react/dist/chunk-MNG3BBZ4.mjs
import { Fragment as C, jsx as n17 } from "react/jsx-runtime";
function l6(t15) {
  return n17(C, { children: n17(Yt, w({}, t15)) });
}

// node_modules/@shadergradient/react/dist/chunk-DTOHMYM5.mjs
import { DataTextureLoader as Me, HalfFloatType as K2, FloatType as oe, DataUtils as X2, LinearFilter as ce } from "three";
import { InstancedBufferGeometry as Ae, Float32BufferAttribute as ue, InstancedInterleavedBuffer as he, InterleavedBufferAttribute as q3, WireframeGeometry as Ce, Box3 as ge, Sphere as Be, Vector3 as Re } from "three";
import { ShaderMaterial as De, UniformsUtils as ve, UniformsLib as ye, Vector2 as Pe } from "three";
import { REVISION as Te } from "three";
import { Mesh as Ue, InstancedInterleavedBuffer as Ge, InterleavedBufferAttribute as Le, Vector4 as W, Vector3 as P5, Box3 as Oe, Sphere as He, MathUtils as Fe, Matrix4 as ze, Line3 as Ie } from "three";
var ie = class extends Me {
  constructor(e21) {
    super(e21), this.type = K2;
  }
  parse(e21) {
    let a14 = function(n19, m8) {
      switch (n19) {
        case 1:
          throw new Error("THREE.RGBELoader: Read Error: " + (m8 || ""));
        case 2:
          throw new Error("THREE.RGBELoader: Write Error: " + (m8 || ""));
        case 3:
          throw new Error("THREE.RGBELoader: Bad File Format: " + (m8 || ""));
        default:
        case 4:
          throw new Error("THREE.RGBELoader: Memory Error: " + (m8 || ""));
      }
    }, b8 = `
`, L2 = function(n19, m8, l8) {
      m8 = m8 || 1024;
      let u7 = n19.pos, c4 = -1, s10 = 0, h9 = "", p10 = String.fromCharCode.apply(null, new Uint16Array(n19.subarray(u7, u7 + 128)));
      for (; 0 > (c4 = p10.indexOf(b8)) && s10 < m8 && u7 < n19.byteLength; ) h9 += p10, s10 += p10.length, u7 += 128, p10 += String.fromCharCode.apply(null, new Uint16Array(n19.subarray(u7, u7 + 128)));
      return -1 < c4 ? (l8 !== false && (n19.pos += s10 + c4 + 1), h9 + p10.slice(0, c4)) : false;
    }, C2 = function(n19) {
      let m8 = /^#\?(\S+)/, l8 = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, d5 = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, u7 = /^\s*FORMAT=(\S+)\s*$/, c4 = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, s10 = { valid: 0, string: "", comments: "", programtype: "RGBE", format: "", gamma: 1, exposure: 1, width: 0, height: 0 }, h9, p10;
      for ((n19.pos >= n19.byteLength || !(h9 = L2(n19))) && a14(1, "no header found"), (p10 = h9.match(m8)) || a14(3, "bad initial token"), s10.valid |= 1, s10.programtype = p10[1], s10.string += h9 + `
`; h9 = L2(n19), h9 !== false; ) {
        if (s10.string += h9 + `
`, h9.charAt(0) === "#") {
          s10.comments += h9 + `
`;
          continue;
        }
        if ((p10 = h9.match(l8)) && (s10.gamma = parseFloat(p10[1])), (p10 = h9.match(d5)) && (s10.exposure = parseFloat(p10[1])), (p10 = h9.match(u7)) && (s10.valid |= 2, s10.format = p10[1]), (p10 = h9.match(c4)) && (s10.valid |= 4, s10.height = parseInt(p10[1], 10), s10.width = parseInt(p10[2], 10)), s10.valid & 2 && s10.valid & 4) break;
      }
      return s10.valid & 2 || a14(3, "missing format specifier"), s10.valid & 4 || a14(3, "missing image size specifier"), s10;
    }, ee = function(n19, m8, l8) {
      let d5 = m8;
      if (d5 < 8 || d5 > 32767 || n19[0] !== 2 || n19[1] !== 2 || n19[2] & 128) return new Uint8Array(n19);
      d5 !== (n19[2] << 8 | n19[3]) && a14(3, "wrong scanline width");
      let u7 = new Uint8Array(4 * m8 * l8);
      u7.length || a14(4, "unable to allocate buffer space");
      let c4 = 0, s10 = 0, h9 = 4 * d5, p10 = new Uint8Array(4), z4 = new Uint8Array(h9), pe = l8;
      for (; pe > 0 && s10 < n19.byteLength; ) {
        s10 + 4 > n19.byteLength && a14(1), p10[0] = n19[s10++], p10[1] = n19[s10++], p10[2] = n19[s10++], p10[3] = n19[s10++], (p10[0] != 2 || p10[1] != 2 || (p10[2] << 8 | p10[3]) != d5) && a14(3, "bad rgbe scanline format");
        let V6 = 0, R7;
        for (; V6 < h9 && s10 < n19.byteLength; ) {
          R7 = n19[s10++];
          let T4 = R7 > 128;
          if (T4 && (R7 -= 128), (R7 === 0 || V6 + R7 > h9) && a14(3, "bad scanline data"), T4) {
            let D3 = n19[s10++];
            for (let de = 0; de < R7; de++) z4[V6++] = D3;
          } else z4.set(n19.subarray(s10, s10 + R7), V6), V6 += R7, s10 += R7;
        }
        let Ee = d5;
        for (let T4 = 0; T4 < Ee; T4++) {
          let D3 = 0;
          u7[c4] = z4[T4 + D3], D3 += d5, u7[c4 + 1] = z4[T4 + D3], D3 += d5, u7[c4 + 2] = z4[T4 + D3], D3 += d5, u7[c4 + 3] = z4[T4 + D3], c4 += 4;
        }
        pe--;
      }
      return u7;
    }, le = function(n19, m8, l8, d5) {
      let u7 = n19[m8 + 3], c4 = Math.pow(2, u7 - 128) / 255;
      l8[d5 + 0] = n19[m8 + 0] * c4, l8[d5 + 1] = n19[m8 + 1] * c4, l8[d5 + 2] = n19[m8 + 2] * c4, l8[d5 + 3] = 1;
    }, k6 = function(n19, m8, l8, d5) {
      let u7 = n19[m8 + 3], c4 = Math.pow(2, u7 - 128) / 255;
      l8[d5 + 0] = X2.toHalfFloat(Math.min(n19[m8 + 0] * c4, 65504)), l8[d5 + 1] = X2.toHalfFloat(Math.min(n19[m8 + 1] * c4, 65504)), l8[d5 + 2] = X2.toHalfFloat(Math.min(n19[m8 + 2] * c4, 65504)), l8[d5 + 3] = X2.toHalfFloat(1);
    }, U4 = new Uint8Array(e21);
    U4.pos = 0;
    let G3 = C2(U4), j2 = G3.width, B8 = G3.height, _3 = ee(U4.subarray(U4.pos), j2, B8), te, re, F4;
    switch (this.type) {
      case oe:
        F4 = _3.length / 4;
        let n19 = new Float32Array(F4 * 4);
        for (let l8 = 0; l8 < F4; l8++) le(_3, l8 * 4, n19, l8 * 4);
        te = n19, re = oe;
        break;
      case K2:
        F4 = _3.length / 4;
        let m8 = new Uint16Array(F4 * 4);
        for (let l8 = 0; l8 < F4; l8++) k6(_3, l8 * 4, m8, l8 * 4);
        te = m8, re = K2;
        break;
      default:
        throw new Error("THREE.RGBELoader: Unsupported type: " + this.type);
    }
    return { width: j2, height: B8, data: te, header: G3.string, gamma: G3.gamma, exposure: G3.exposure, type: re };
  }
  setDataType(e21) {
    return this.type = e21, this;
  }
  load(e21, t15, i12, r11) {
    function o13(a14, f8) {
      switch (a14.type) {
        case oe:
        case K2:
          "colorSpace" in a14 ? a14.colorSpace = "srgb-linear" : a14.encoding = 3e3, a14.minFilter = ce, a14.magFilter = ce, a14.generateMipmaps = false, a14.flipY = true;
          break;
      }
      t15 && t15(a14, f8);
    }
    return super.load(e21, o13, i12, r11);
  }
};
var Se = new ge();
var Y2 = new Re();
var $2 = parseInt(Te.replace(/\D+/g, ""));
var ne = $2 >= 125 ? "uv1" : "uv2";
var ae = new W();
var xe = new P5();
var be = new P5();
var g4 = new W();
var v5 = new W();
var E5 = new W();
var se = new P5();
var me = new ze();
var y5 = new Ie();
var _e = new P5();
var J3 = new Oe();
var Z2 = new He();
var M3 = new W();

// node_modules/@shadergradient/react/dist/chunk-CRHASVN5.mjs
import { useLoader as o9 } from "@react-three/fiber";
function s8(t15, { path: r11 }) {
  return o9(ie, t15, (u7) => u7.setPath(r11));
}

// node_modules/@shadergradient/react/dist/chunk-6MX7M6OR.mjs
import { useEffect as o10, useState as f5, useRef as I3 } from "react";
function v6(e21 = true, t15 = 0.1, r11 = "0px") {
  let [i12, u7] = f5(!e21), n19 = I3(null);
  return o10(() => {
    if (!e21) return;
    let s10 = new IntersectionObserver(([c4]) => {
      u7(c4.isIntersecting);
    }, { threshold: t15, rootMargin: r11 });
    return n19.current && s10.observe(n19.current), () => s10.disconnect();
  }, [e21, t15, r11]), { isInView: i12, containerRef: n19 };
}

// node_modules/@shadergradient/react/dist/chunk-O3EDKAOT.mjs
import { useEffect as G2, createContext as P6, useMemo as R4, useContext as w3 } from "react";
import { Canvas as y6 } from "@react-three/fiber";
import * as e18 from "three";
import { jsx as t8 } from "react/jsx-runtime";
var v7 = P6({});
var N2 = () => w3(v7);
function V3({ children: C2, style: u7 = {}, pixelDensity: n19 = 1, fov: a14 = 45, pointerEvents: c4, className: f8, envBasePath: o13, lazyLoad: s10 = true, threshold: p10 = 0.1, rootMargin: m8 = "0px", preserveDrawingBuffer: x6, powerPreference: S4 }) {
  let { isInView: g6, containerRef: l8 } = v6(s10, p10, m8), E8 = R4(() => ({ envBasePath: o13 }), [o13]);
  return b4(), t8("div", { ref: l8, style: w({ width: "100%", height: "100%" }, u7), children: (!s10 || g6) && t8(v7.Provider, { value: E8, children: t8(y6, x(w({ id: "gradientCanvas", style: { pointerEvents: c4 }, resize: { offsetSize: true }, className: f8 }, r8(n19, a14, { preserveDrawingBuffer: x6, powerPreference: S4 })), { children: C2 }), n19 + a14) }) });
}
function b4() {
  G2(() => {
    e18.ShaderChunk.uv2_pars_vertex = "", e18.ShaderChunk.uv2_vertex = "", e18.ShaderChunk.uv2_pars_fragment = "", e18.ShaderChunk.encodings_fragment = "";
  }, []);
}

// node_modules/@shadergradient/react/dist/chunk-V6TQH2YK.mjs
import d3 from "react";
import { EquirectangularReflectionMapping as E6 } from "three";
import { useThree as R5 } from "@react-three/fiber";
var y7 = (e21) => e21.current && e21.current.isScene;
var v8 = (e21) => y7(e21) ? e21.current : e21;
function B5({ background: e21 = false, envPreset: i12 }) {
  let { envBasePath: u7 } = N2(), r11 = u7 || h8, l8 = s8("city.hdr", { path: r11 }), f8 = s8("dawn.hdr", { path: r11 }), m8 = s8("lobby.hdr", { path: r11 }), n19 = { city: l8, dawn: f8, lobby: m8 }[i12], a14 = R5((t15) => t15.scene);
  d3.useLayoutEffect(() => {
    if (n19) {
      let t15 = v8(a14), h9 = t15.background, b8 = t15.environment;
      return e21 !== "only" && (t15.environment = n19), e21 && (t15.background = n19), () => {
        e21 !== "only" && (t15.environment = b8), e21 && (t15.background = "black");
      };
    }
  }, [a14, n19, e21]);
  let p10 = n19;
  return p10.mapping = E6, null;
}

// node_modules/@shadergradient/react/dist/chunk-R5BBYD62.mjs
import { Suspense as r9 } from "react";
import { Fragment as s9, jsx as n18, jsxs as m5 } from "react/jsx-runtime";
function p9({ lightType: t15, brightness: e21, envPreset: o13 }) {
  return m5(s9, { children: [t15 === "3d" && n18("ambientLight", { intensity: (e21 || 1) * Math.PI }), t15 === "env" && n18(r9, { fallback: n18(a11, {}), children: n18(B5, { envPreset: o13, background: false, loadingCallback: () => {
  } }) })] });
}
function a11() {
  return n18("ambientLight", { intensity: 0.4 });
}

// node_modules/@shadergradient/react/dist/chunk-OM36AWEE.mjs
import * as o11 from "react";
import { Raycaster as i10, Camera as m6 } from "three";
import { useThree as u5, applyProps as f6 } from "@react-three/fiber";
function b5(r11, e21) {
  let n19 = u5((t15) => t15.pointer), [c4] = o11.useState(() => {
    let t15 = new i10();
    return e21 && f6(t15, e21, {}), function(p10, s10) {
      t15.setFromCamera(n19, r11 instanceof m6 ? r11 : r11.current);
      let a14 = this.constructor.prototype.raycast.bind(this);
      a14 && a14(t15, s10);
    };
  });
  return c4;
}

// node_modules/@shadergradient/react/dist/chunk-VL2CUAE4.mjs
import * as t9 from "react";
import * as e19 from "three";
import { useThree as R6 } from "@react-three/fiber";
function d4(n19, m8, T4) {
  let { gl: c4, size: p10, viewport: u7 } = R6(), o13 = typeof n19 == "number" ? n19 : p10.width * u7.dpr, a14 = typeof m8 == "number" ? m8 : p10.height * u7.dpr, g6 = (typeof n19 == "number" ? T4 : n19) || {}, { samples: r11 } = g6, f8 = y(g6, ["samples"]), s10 = t9.useMemo(() => {
    let i12;
    return i12 = new e19.WebGLRenderTarget(o13, a14, w({ minFilter: e19.LinearFilter, magFilter: e19.LinearFilter, encoding: c4.outputEncoding, type: e19.HalfFloatType }, f8)), i12.samples = r11, i12;
  }, []);
  return t9.useLayoutEffect(() => {
    s10.setSize(o13, a14), r11 && (s10.samples = r11);
  }, [r11, s10, o13, a14]), t9.useEffect(() => () => s10.dispose(), []), s10;
}

// node_modules/@shadergradient/react/dist/chunk-GXQ2EBSK.mjs
function t10(e21, n19) {
  if (typeof e21 == "function") return e21(n19);
  e21 && (e21.current = n19);
}
function u6(e21) {
  return (n19) => {
    for (let f8 of e21) t10(f8, n19);
  };
}

// node_modules/@shadergradient/react/dist/chunk-ST3I7JZX.mjs
import * as r10 from "react";
import { useThree as f7, useFrame as I4 } from "@react-three/fiber";
import { Fragment as P7, jsx as y8, jsxs as k5 } from "react/jsx-runtime";
var F3 = (a14) => typeof a14 == "function";
var N3 = r10.forwardRef((v9, H4) => {
  var R7 = v9, { envMap: a14, resolution: x6 = 256, frames: s10 = 1 / 0, children: n19, makeDefault: l8 } = R7, c4 = y(R7, ["envMap", "resolution", "frames", "children", "makeDefault"]);
  let u7 = f7(({ set: e21 }) => e21), O4 = f7(({ camera: e21 }) => e21), o13 = f7(({ size: e21 }) => e21), t15 = r10.useRef(null), i12 = r10.useRef(null), p10 = d4(x6);
  r10.useLayoutEffect(() => {
    c4.manual || t15.current.updateProjectionMatrix();
  }, [o13, c4]), r10.useLayoutEffect(() => {
    t15.current.updateProjectionMatrix();
  }), r10.useLayoutEffect(() => {
    if (l8) {
      let e21 = O4;
      return u7(() => ({ camera: t15.current })), () => u7(() => ({ camera: e21 }));
    }
  }, [t15, l8, u7]);
  let g6 = 0, h9 = null, m8 = F3(n19);
  return I4((e21) => {
    m8 && (s10 === 1 / 0 || g6 < s10) && (i12.current.visible = false, e21.gl.setRenderTarget(p10), h9 = e21.scene.background, a14 && (e21.scene.background = a14), e21.gl.render(e21.scene, t15.current), e21.scene.background = h9, e21.gl.setRenderTarget(null), i12.current.visible = true, g6++);
  }), k5(P7, { children: [y8("orthographicCamera", x(w({ left: o13.width / -2, right: o13.width / 2, top: o13.height / 2, bottom: o13.height / -2, ref: u6([t15, H4]) }, c4), { children: !m8 && n19 })), y8("group", { ref: i12, children: m8 && n19(p10.texture) })] });
});

// node_modules/@shadergradient/react/dist/chunk-HHLYZM5K.mjs
import * as t11 from "react";
import { createPortal as _2, useFrame as j, useThree as c3 } from "@react-three/fiber";
import { Matrix4 as B6, Object3D as K3, Quaternion as E7, Scene as L, Vector3 as m7 } from "three";
import { jsx as V4, jsxs as $3 } from "react/jsx-runtime";
var I5 = t11.createContext({});
var pt2 = () => t11.useContext(I5);
var N4 = 2 * Math.PI;
var O2 = new K3();
var q4 = new B6();
var [a12, b6] = [new E7(), new E7()];
var S3 = new m7();
var T3 = new m7();
var Z3 = (n19) => "minPolarAngle" in n19;
var lt2 = ({ alignment: n19 = "bottom-right", margin: M5 = [80, 80], renderPriority: W2 = 0, autoClear: Q3 = true, onUpdate: h9, onTarget: s10, children: A4 }) => {
  let i12 = c3(({ size: e21 }) => e21), r11 = c3(({ camera: e21 }) => e21), o13 = c3(({ controls: e21 }) => e21), f8 = c3(({ gl: e21 }) => e21), u7 = c3(({ scene: e21 }) => e21), d5 = c3(({ invalidate: e21 }) => e21), p10 = t11.useRef(), C2 = t11.useRef(), l8 = t11.useRef(null), [R7] = t11.useState(() => new L()), y9 = t11.useRef(false), g6 = t11.useRef(0), x6 = t11.useRef(new m7(0, 0, 0)), w4 = t11.useRef(new m7(0, 0, 0));
  t11.useEffect(() => {
    w4.current.copy(r11.up);
  }, [r11]);
  let P8 = t11.useCallback((e21) => {
    y9.current = true, (o13 || s10) && (x6.current = (o13 == null ? void 0 : o13.target) || (s10 == null ? void 0 : s10())), g6.current = r11.position.distanceTo(S3), a12.copy(r11.quaternion), T3.copy(e21).multiplyScalar(g6.current).add(S3), O2.lookAt(T3), b6.copy(O2.quaternion), d5();
  }, [o13, r11, s10, d5]);
  t11.useEffect(() => (u7.background && (p10.current = u7.background, u7.background = null, R7.background = p10.current), () => {
    p10.current && (u7.background = p10.current);
  }), []), j((e21, U4) => {
    var G3;
    if (l8.current && C2.current) {
      if (y9.current) if (a12.angleTo(b6) < 0.01) y9.current = false, Z3(o13) && r11.up.copy(w4.current);
      else {
        let Y3 = U4 * N4;
        a12.rotateTowards(b6, Y3), r11.position.set(0, 0, 1).applyQuaternion(a12).multiplyScalar(g6.current).add(x6.current), r11.up.set(0, 1, 0).applyQuaternion(a12).normalize(), r11.quaternion.copy(a12), h9 ? h9() : o13 && o13.update(), d5();
      }
      q4.copy(r11.matrix).invert(), (G3 = C2.current) == null || G3.quaternion.setFromRotationMatrix(q4), Q3 && (f8.autoClear = false), f8.clearDepth(), f8.render(R7, l8.current);
    }
  }, W2);
  let D3 = b5(l8), F4 = t11.useMemo(() => ({ tweenCamera: P8, raycast: D3 }), [P8]), [z4, v9] = M5, X3 = n19.endsWith("-center") ? 0 : n19.endsWith("-left") ? -i12.width / 2 + z4 : i12.width / 2 - z4, J5 = n19.startsWith("center-") ? 0 : n19.startsWith("top-") ? i12.height / 2 - v9 : -i12.height / 2 + v9;
  return _2($3(I5.Provider, { value: F4, children: [V4(N3, { ref: l8, position: [0, 0, 200] }), V4("group", { ref: C2, position: [X3, J5, 0], children: A4 })] }), R7);
};

// node_modules/@shadergradient/react/dist/chunk-MNIYBOZ2.mjs
import * as b7 from "react";
import { useThree as I6 } from "@react-three/fiber";
import { CanvasTexture as O3 } from "three";
import { Fragment as H3, jsx as t12, jsxs as x5 } from "react/jsx-runtime";
function A3({ scale: c4 = [0.8, 0.05, 0.05], color: s10, rotation: r11 }) {
  return t12("group", { rotation: r11, children: x5("mesh", { position: [0.4, 0, 0], children: [t12("boxGeometry", { args: c4 }), t12("meshBasicMaterial", { color: s10, toneMapped: false })] }) });
}
function l7(S4) {
  var h9 = S4, { onClick: c4, font: s10, disabled: r11, arcStyle: g6, label: i12, labelColor: d5, axisHeadScale: p10 = 1 } = h9, u7 = y(h9, ["onClick", "font", "disabled", "arcStyle", "label", "labelColor", "axisHeadScale"]);
  let f8 = I6((o13) => o13.gl), M5 = b7.useMemo(() => {
    let o13 = document.createElement("canvas");
    o13.width = 64, o13.height = 64;
    let e21 = o13.getContext("2d");
    return e21.beginPath(), e21.arc(32, 32, 16, 0, 2 * Math.PI), e21.closePath(), e21.fillStyle = g6, e21.fill(), i12 && (e21.font = s10, e21.textAlign = "center", e21.fillStyle = d5, e21.fillText(i12, 32, 41)), new O3(o13);
  }, [g6, i12, d5, s10]), [P8, a14] = b7.useState(false), m8 = (i12 ? 1 : 0.75) * (P8 ? 1.2 : 1) * p10;
  return t12("sprite", x(w({ scale: m8, onPointerOver: r11 ? void 0 : (o13) => {
    o13.stopPropagation(), a14(true);
  }, onPointerOut: r11 ? void 0 : c4 || ((o13) => {
    o13.stopPropagation(), a14(false);
  }) }, u7), { children: t12("spriteMaterial", { map: M5, "map-encoding": f8.outputEncoding, "map-anisotropy": f8.capabilities.getMaxAnisotropy() || 1, alphaTest: 0.3, opacity: i12 ? 1 : 0.75, toneMapped: false }) }));
}
var V5 = (M5) => {
  var P8 = M5, { hideNegativeAxes: c4, hideAxisHeads: s10, disabled: r11, font: g6 = "18px Inter var, Arial, sans-serif", axisColors: i12 = ["#ff2060", "#20df80", "#2080ff"], axisHeadScale: d5 = 1, axisScale: p10, labels: u7 = ["X", "Y", "Z"], labelColor: S4 = "#000", onClick: h9 } = P8, f8 = y(P8, ["hideNegativeAxes", "hideAxisHeads", "disabled", "font", "axisColors", "axisHeadScale", "axisScale", "labels", "labelColor", "onClick"]);
  let [a14, m8, v9] = i12, { tweenCamera: T4, raycast: o13 } = pt2(), e21 = { font: g6, disabled: r11, labelColor: S4, raycast: o13, onClick: h9, axisHeadScale: d5, onPointerDown: r11 ? void 0 : (C2) => {
    T4(C2.object.position), C2.stopPropagation();
  } };
  return x5("group", x(w({ scale: 40 }, f8), { children: [t12(A3, { color: a14, rotation: [0, 0, 0], scale: p10 }), t12(A3, { color: m8, rotation: [0, 0, Math.PI / 2], scale: p10 }), t12(A3, { color: v9, rotation: [0, -Math.PI / 2, 0], scale: p10 }), !s10 && x5(H3, { children: [t12(l7, w({ arcStyle: a14, position: [1, 0, 0], label: u7[0] }, e21)), t12(l7, w({ arcStyle: m8, position: [0, 1, 0], label: u7[1] }, e21)), t12(l7, w({ arcStyle: v9, position: [0, 0, 1], label: u7[2] }, e21)), !c4 && x5(H3, { children: [t12(l7, w({ arcStyle: a14, position: [-1, 0, 0] }, e21)), t12(l7, w({ arcStyle: m8, position: [0, -1, 0] }, e21)), t12(l7, w({ arcStyle: v9, position: [0, 0, -1] }, e21))] })] }), t12("ambientLight", { intensity: 0.5 }), t12("pointLight", { position: [10, 10, 10], intensity: 0.5 })] }));
};

// node_modules/@shadergradient/react/dist/chunk-4UW34ZH3.mjs
import { Fragment as t13, jsx as i11 } from "react/jsx-runtime";
function a13({ margin: o13 = [65, 110] }) {
  return i11(t13, { children: i11(lt2, { alignment: "bottom-right", margin: o13, renderPriority: 2, children: i11(V5, { axisColors: ["#FF430A", "#FF430A", "#FF430A"], labelColor: "white", hideNegativeAxes: true, axisHeadScale: 0.8 }) }) });
}

// node_modules/@shadergradient/react/dist/chunk-PMGWUTR2.mjs
var e20 = { halo: { title: "Halo", color: "white", props: { type: "plane", uAmplitude: 1, uDensity: 1.3, uSpeed: 0.4, uStrength: 4, uTime: 0, uFrequency: 5.5, range: "disabled", rangeStart: 0, rangeEnd: 40, frameRate: 10, destination: "onCanvas", format: "gif", axesHelper: "off", brightness: 1.2, cAzimuthAngle: 180, cDistance: 3.6, cPolarAngle: 90, cameraZoom: 1, color1: "#ff5005", color2: "#dbba95", color3: "#d0bce1", embedMode: "off", envPreset: "city", gizmoHelper: "hide", grain: "on", lightType: "3d", pixelDensity: 1, fov: 45, positionX: -1.4, positionY: 0, positionZ: 0, reflection: 0.1, rotationX: 0, rotationY: 10, rotationZ: 50, shader: "defaults", animate: "on", wireframe: false } }, pensive: { title: "Pensive", color: "white", props: { range: "disabled", rangeStart: 0, rangeEnd: 40, frameRate: 10, destination: "onCanvas", format: "gif", animate: "on", axesHelper: "off", brightness: 1.5, cAzimuthAngle: 250, cDistance: 1.5, cPolarAngle: 140, cameraZoom: 12.5, color1: "#809bd6", color2: "#910aff", color3: "#af38ff", embedMode: "off", envPreset: "city", gizmoHelper: "hide", grain: "on", lightType: "3d", pixelDensity: 1, fov: 45, positionX: 0, positionY: 0, positionZ: 0, reflection: 0.5, rotationX: 0, rotationY: 0, rotationZ: 140, shader: "defaults", type: "sphere", uAmplitude: 7, uDensity: 0.8, uFrequency: 5.5, uSpeed: 0.3, uStrength: 0.4, uTime: 0, wireframe: false } }, mint: { title: "Mint", color: "white", props: { range: "disabled", rangeStart: 0, rangeEnd: 40, frameRate: 10, destination: "onCanvas", format: "gif", animate: "on", axesHelper: "off", brightness: 1.2, cAzimuthAngle: 170, cDistance: 4.4, cPolarAngle: 70, cameraZoom: 1, color1: "#94ffd1", color2: "#6bf5ff", color3: "#ffffff", embedMode: "off", envPreset: "city", gizmoHelper: "hide", grain: "off", lightType: "3d", pixelDensity: 1, fov: 45, positionX: 0, positionY: 0.9, positionZ: -0.3, reflection: 0.1, rotationX: 45, rotationY: 0, rotationZ: 0, shader: "defaults", type: "waterPlane", uAmplitude: 0, uDensity: 1.2, uFrequency: 0, uSpeed: 0.2, uStrength: 3.4, uTime: 0, wireframe: false } }, interstella: { title: "Interstella", color: "white", props: { range: "disabled", rangeStart: 0, rangeEnd: 40, frameRate: 10, destination: "onCanvas", format: "gif", animate: "on", axesHelper: "off", brightness: 0.8, cAzimuthAngle: 270, cDistance: 0.5, cPolarAngle: 180, cameraZoom: 15.1, color1: "#73bfc4", color2: "#ff810a", color3: "#8da0ce", embedMode: "off", envPreset: "city", gizmoHelper: "hide", grain: "on", lightType: "env", pixelDensity: 1, fov: 45, positionX: -0.1, positionY: 0, positionZ: 0, reflection: 0.4, rotationX: 0, rotationY: 130, rotationZ: 70, shader: "defaults", type: "sphere", uAmplitude: 3.2, uDensity: 0.8, uFrequency: 5.5, uSpeed: 0.3, uStrength: 0.3, uTime: 0, wireframe: false } }, nightyNight: { title: "Nighty night", color: "white", props: { range: "disabled", rangeStart: 0, rangeEnd: 40, frameRate: 10, destination: "onCanvas", format: "gif", animate: "on", axesHelper: "off", brightness: 1, cAzimuthAngle: 180, cDistance: 2.8, cPolarAngle: 80, cameraZoom: 9.1, color1: "#606080", color2: "#8d7dca", color3: "#212121", embedMode: "off", envPreset: "city", gizmoHelper: "hide", grain: "on", lightType: "3d", pixelDensity: 1, fov: 45, positionX: 0, positionY: 0, positionZ: 0, reflection: 0.1, rotationX: 50, rotationY: 0, rotationZ: -60, shader: "defaults", type: "waterPlane", uAmplitude: 0, uDensity: 1.5, uFrequency: 0, uSpeed: 0.3, uStrength: 1.5, uTime: 8, wireframe: false } }, violaOrientalis: { title: "Viola", color: "white", props: { range: "disabled", rangeStart: 0, rangeEnd: 40, frameRate: 10, destination: "onCanvas", format: "gif", animate: "on", axesHelper: "on", brightness: 1.1, cAzimuthAngle: 0, cDistance: 7.1, cPolarAngle: 140, cameraZoom: 17.3, color1: "#ffffff", color2: "#ffbb00", color3: "#0700ff", embedMode: "off", envPreset: "city", grain: "off", lightType: "3d", pixelDensity: 1, fov: 45, positionX: 0, positionY: 0, positionZ: 0, reflection: 0.1, rotationX: 0, rotationY: 0, rotationZ: 0, shader: "defaults", type: "sphere", uAmplitude: 1.4, uDensity: 1.1, uSpeed: 0.1, uStrength: 1, uTime: 0, uFrequency: 5.5, wireframe: false } }, universe: { title: "Universe", color: "white", props: { range: "disabled", rangeStart: 0, rangeEnd: 40, frameRate: 10, destination: "onCanvas", format: "gif", animate: "on", axesHelper: "on", brightness: 1.1, cAzimuthAngle: 180, cDistance: 3.9, cPolarAngle: 115, cameraZoom: 1, color1: "#5606ff", color2: "#fe8989", color3: "#000000", embedMode: "off", envPreset: "city", grain: "off", lightType: "3d", pixelDensity: 1, fov: 45, positionX: -0.5, positionY: 0.1, positionZ: 0, reflection: 0.1, rotationX: 0, rotationY: 0, rotationZ: 235, shader: "defaults", type: "waterPlane", uAmplitude: 0, uDensity: 1.1, uSpeed: 0.1, uStrength: 2.4, uTime: 0.2, uFrequency: 5.5, wireframe: false } }, sunset: { title: "Sunset", color: "white", props: { range: "disabled", rangeStart: 0, rangeEnd: 40, frameRate: 10, destination: "onCanvas", format: "gif", animate: "on", axesHelper: "on", bgColor1: "#000000", bgColor2: "#000000", brightness: 1.5, cAzimuthAngle: 60, cDistance: 7.1, cPolarAngle: 90, cameraZoom: 15.3, color1: "#ff7a33", color2: "#33a0ff", color3: "#ffc53d", embedMode: "off", envPreset: "dawn", grain: "off", lightType: "3d", pixelDensity: 1, fov: 45, positionX: 0, positionY: -0.15, positionZ: 0, reflection: 0.1, rotationX: 0, rotationY: 0, rotationZ: 0, shader: "defaults", type: "sphere", uAmplitude: 1.4, uDensity: 1.1, uSpeed: 0.1, uStrength: 0.4, uTime: 0, uFrequency: 5.5, wireframe: false } }, mandarin: { title: "Mandarin", color: "white", props: { range: "disabled", rangeStart: 0, rangeEnd: 40, frameRate: 10, destination: "onCanvas", format: "gif", animate: "on", axesHelper: "on", bgColor1: "#000000", bgColor2: "#000000", brightness: 1.2, cAzimuthAngle: 180, cDistance: 2.4, cPolarAngle: 95, cameraZoom: 1, color1: "#ff6a1a", color2: "#c73c00", color3: "#FD4912", embedMode: "off", envPreset: "city", grain: "off", lightType: "3d", pixelDensity: 1, fov: 45, positionX: 0, positionY: -2.1, positionZ: 0, reflection: 0.1, rotationX: 0, rotationY: 0, rotationZ: 225, shader: "defaults", type: "waterPlane", uAmplitude: 0, uDensity: 1.8, uSpeed: 0.2, uStrength: 3, uTime: 0.2, uFrequency: 5.5, wireframe: false } }, cottonCandy: { title: "Cotton Candy", color: "white", props: { range: "disabled", rangeStart: 0, rangeEnd: 40, frameRate: 10, destination: "onCanvas", format: "gif", animate: "on", axesHelper: "off", brightness: 1.2, cAzimuthAngle: 180, cDistance: 2.9, cPolarAngle: 120, cameraZoom: 1, color1: "#ebedff", color2: "#f3f2f8", color3: "#dbf8ff", embedMode: "off", envPreset: "city", grain: "off", lightType: "3d", pixelDensity: 1, fov: 45, positionX: 0, positionY: 1.8, positionZ: 0, reflection: 0.1, rotationX: 0, rotationY: 0, rotationZ: -90, shader: "defaults", type: "waterPlane", uAmplitude: 0, uDensity: 1, uSpeed: 0.3, uStrength: 3, uTime: 0.2, uFrequency: 5.5, wireframe: false } } };
var t14 = 0;
var o12 = Object.values(e20);

// node_modules/@shadergradient/react/dist/chunk-KLJOXLT7.mjs
import { Fragment as sr, jsx as g5, jsxs as cr } from "react/jsx-runtime";
var U3 = z((dr, w4) => {
  "use strict";
  w4.exports = (r11) => encodeURIComponent(r11).replace(/[!'()*]/g, (e21) => `%${e21.charCodeAt(0).toString(16).toUpperCase()}`);
});
var D2 = z((or, T4) => {
  "use strict";
  var q5 = "%[a-f0-9]{2}", $4 = new RegExp("(" + q5 + ")|([^%]+?)", "gi"), I7 = new RegExp("(" + q5 + ")+", "gi");
  function h9(r11, e21) {
    try {
      return [decodeURIComponent(r11.join(""))];
    } catch (a14) {
    }
    if (r11.length === 1) return r11;
    e21 = e21 || 1;
    var t15 = r11.slice(0, e21), n19 = r11.slice(e21);
    return Array.prototype.concat.call([], h9(t15), h9(n19));
  }
  function Z4(r11) {
    try {
      return decodeURIComponent(r11);
    } catch (n19) {
      for (var e21 = r11.match($4) || [], t15 = 1; t15 < e21.length; t15++) r11 = h9(e21, t15).join(""), e21 = r11.match($4) || [];
      return r11;
    }
  }
  function k6(r11) {
    for (var e21 = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" }, t15 = I7.exec(r11); t15; ) {
      try {
        e21[t15[0]] = decodeURIComponent(t15[0]);
      } catch (i12) {
        var n19 = Z4(t15[0]);
        n19 !== t15[0] && (e21[t15[0]] = n19);
      }
      t15 = I7.exec(r11);
    }
    e21["%C2"] = "\uFFFD";
    for (var a14 = Object.keys(e21), s10 = 0; s10 < a14.length; s10++) {
      var f8 = a14[s10];
      r11 = r11.replace(new RegExp(f8, "g"), e21[f8]);
    }
    return r11;
  }
  T4.exports = function(r11) {
    if (typeof r11 != "string") throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof r11 + "`");
    try {
      return r11 = r11.replace(/\+/g, " "), decodeURIComponent(r11);
    } catch (e21) {
      return k6(r11);
    }
  };
});
var B7 = z((mr, R7) => {
  "use strict";
  R7.exports = (r11, e21) => {
    if (!(typeof r11 == "string" && typeof e21 == "string")) throw new TypeError("Expected the arguments to be of type `string`");
    if (e21 === "") return [r11];
    let t15 = r11.indexOf(e21);
    return t15 === -1 ? [r11] : [r11.slice(0, t15), r11.slice(t15 + e21.length)];
  };
});
var M4 = z((ur, L2) => {
  "use strict";
  L2.exports = function(r11, e21) {
    for (var t15 = {}, n19 = Object.keys(r11), a14 = Array.isArray(e21), s10 = 0; s10 < n19.length; s10++) {
      var f8 = n19[s10], i12 = r11[f8];
      (a14 ? e21.indexOf(f8) !== -1 : e21(f8, i12, r11)) && (t15[f8] = i12);
    }
    return t15;
  };
});
var J4 = z((d5) => {
  "use strict";
  var v9 = U3(), rr = D2(), V6 = B7(), er = M4(), tr = (r11) => r11 == null, y9 = /* @__PURE__ */ Symbol("encodeFragmentIdentifier");
  function nr(r11) {
    switch (r11.arrayFormat) {
      case "index":
        return (e21) => (t15, n19) => {
          let a14 = t15.length;
          return n19 === void 0 || r11.skipNull && n19 === null || r11.skipEmptyString && n19 === "" ? t15 : n19 === null ? [...t15, [c4(e21, r11), "[", a14, "]"].join("")] : [...t15, [c4(e21, r11), "[", c4(a14, r11), "]=", c4(n19, r11)].join("")];
        };
      case "bracket":
        return (e21) => (t15, n19) => n19 === void 0 || r11.skipNull && n19 === null || r11.skipEmptyString && n19 === "" ? t15 : n19 === null ? [...t15, [c4(e21, r11), "[]"].join("")] : [...t15, [c4(e21, r11), "[]=", c4(n19, r11)].join("")];
      case "colon-list-separator":
        return (e21) => (t15, n19) => n19 === void 0 || r11.skipNull && n19 === null || r11.skipEmptyString && n19 === "" ? t15 : n19 === null ? [...t15, [c4(e21, r11), ":list="].join("")] : [...t15, [c4(e21, r11), ":list=", c4(n19, r11)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        let e21 = r11.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (t15) => (n19, a14) => a14 === void 0 || r11.skipNull && a14 === null || r11.skipEmptyString && a14 === "" ? n19 : (a14 = a14 === null ? "" : a14, n19.length === 0 ? [[c4(t15, r11), e21, c4(a14, r11)].join("")] : [[n19, c4(a14, r11)].join(r11.arrayFormatSeparator)]);
      }
      default:
        return (e21) => (t15, n19) => n19 === void 0 || r11.skipNull && n19 === null || r11.skipEmptyString && n19 === "" ? t15 : n19 === null ? [...t15, c4(e21, r11)] : [...t15, [c4(e21, r11), "=", c4(n19, r11)].join("")];
    }
  }
  function ar(r11) {
    let e21;
    switch (r11.arrayFormat) {
      case "index":
        return (t15, n19, a14) => {
          if (e21 = /\[(\d*)\]$/.exec(t15), t15 = t15.replace(/\[\d*\]$/, ""), !e21) {
            a14[t15] = n19;
            return;
          }
          a14[t15] === void 0 && (a14[t15] = {}), a14[t15][e21[1]] = n19;
        };
      case "bracket":
        return (t15, n19, a14) => {
          if (e21 = /(\[\])$/.exec(t15), t15 = t15.replace(/\[\]$/, ""), !e21) {
            a14[t15] = n19;
            return;
          }
          if (a14[t15] === void 0) {
            a14[t15] = [n19];
            return;
          }
          a14[t15] = [].concat(a14[t15], n19);
        };
      case "colon-list-separator":
        return (t15, n19, a14) => {
          if (e21 = /(:list)$/.exec(t15), t15 = t15.replace(/:list$/, ""), !e21) {
            a14[t15] = n19;
            return;
          }
          if (a14[t15] === void 0) {
            a14[t15] = [n19];
            return;
          }
          a14[t15] = [].concat(a14[t15], n19);
        };
      case "comma":
      case "separator":
        return (t15, n19, a14) => {
          let s10 = typeof n19 == "string" && n19.includes(r11.arrayFormatSeparator), f8 = typeof n19 == "string" && !s10 && o13(n19, r11).includes(r11.arrayFormatSeparator);
          n19 = f8 ? o13(n19, r11) : n19;
          let i12 = s10 || f8 ? n19.split(r11.arrayFormatSeparator).map((l8) => o13(l8, r11)) : n19 === null ? n19 : o13(n19, r11);
          a14[t15] = i12;
        };
      case "bracket-separator":
        return (t15, n19, a14) => {
          let s10 = /(\[\])$/.test(t15);
          if (t15 = t15.replace(/\[\]$/, ""), !s10) {
            a14[t15] = n19 && o13(n19, r11);
            return;
          }
          let f8 = n19 === null ? [] : n19.split(r11.arrayFormatSeparator).map((i12) => o13(i12, r11));
          if (a14[t15] === void 0) {
            a14[t15] = f8;
            return;
          }
          a14[t15] = [].concat(a14[t15], f8);
        };
      default:
        return (t15, n19, a14) => {
          if (a14[t15] === void 0) {
            a14[t15] = n19;
            return;
          }
          a14[t15] = [].concat(a14[t15], n19);
        };
    }
  }
  function G3(r11) {
    if (typeof r11 != "string" || r11.length !== 1) throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function c4(r11, e21) {
    return e21.encode ? e21.strict ? v9(r11) : encodeURIComponent(r11) : r11;
  }
  function o13(r11, e21) {
    return e21.decode ? rr(r11) : r11;
  }
  function H4(r11) {
    return Array.isArray(r11) ? r11.sort() : typeof r11 == "object" ? H4(Object.keys(r11)).sort((e21, t15) => Number(e21) - Number(t15)).map((e21) => r11[e21]) : r11;
  }
  function Q3(r11) {
    let e21 = r11.indexOf("#");
    return e21 !== -1 && (r11 = r11.slice(0, e21)), r11;
  }
  function fr(r11) {
    let e21 = "", t15 = r11.indexOf("#");
    return t15 !== -1 && (e21 = r11.slice(t15)), e21;
  }
  function _3(r11) {
    r11 = Q3(r11);
    let e21 = r11.indexOf("?");
    return e21 === -1 ? "" : r11.slice(e21 + 1);
  }
  function P8(r11, e21) {
    return e21.parseNumbers && !Number.isNaN(Number(r11)) && typeof r11 == "string" && r11.trim() !== "" ? r11 = Number(r11) : e21.parseBooleans && r11 !== null && (r11.toLowerCase() === "true" || r11.toLowerCase() === "false") && (r11 = r11.toLowerCase() === "true"), r11;
  }
  function z4(r11, e21) {
    e21 = Object.assign({ decode: true, sort: true, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: false, parseBooleans: false }, e21), G3(e21.arrayFormatSeparator);
    let t15 = ar(e21), n19 = /* @__PURE__ */ Object.create(null);
    if (typeof r11 != "string" || (r11 = r11.trim().replace(/^[?#&]/, ""), !r11)) return n19;
    for (let a14 of r11.split("&")) {
      if (a14 === "") continue;
      let [s10, f8] = V6(e21.decode ? a14.replace(/\+/g, " ") : a14, "=");
      f8 = f8 === void 0 ? null : ["comma", "separator", "bracket-separator"].includes(e21.arrayFormat) ? f8 : o13(f8, e21), t15(o13(s10, e21), f8, n19);
    }
    for (let a14 of Object.keys(n19)) {
      let s10 = n19[a14];
      if (typeof s10 == "object" && s10 !== null) for (let f8 of Object.keys(s10)) s10[f8] = P8(s10[f8], e21);
      else n19[a14] = P8(s10, e21);
    }
    return e21.sort === false ? n19 : (e21.sort === true ? Object.keys(n19).sort() : Object.keys(n19).sort(e21.sort)).reduce((a14, s10) => {
      let f8 = n19[s10];
      return f8 && typeof f8 == "object" && !Array.isArray(f8) ? a14[s10] = H4(f8) : a14[s10] = f8, a14;
    }, /* @__PURE__ */ Object.create(null));
  }
  d5.extract = _3;
  d5.parse = z4;
  d5.stringify = (r11, e21) => {
    if (!r11) return "";
    e21 = Object.assign({ encode: true, strict: true, arrayFormat: "none", arrayFormatSeparator: "," }, e21), G3(e21.arrayFormatSeparator);
    let t15 = (f8) => e21.skipNull && tr(r11[f8]) || e21.skipEmptyString && r11[f8] === "", n19 = nr(e21), a14 = {};
    for (let f8 of Object.keys(r11)) t15(f8) || (a14[f8] = r11[f8]);
    let s10 = Object.keys(a14);
    return e21.sort !== false && s10.sort(e21.sort), s10.map((f8) => {
      let i12 = r11[f8];
      return i12 === void 0 ? "" : i12 === null ? c4(f8, e21) : Array.isArray(i12) ? i12.length === 0 && e21.arrayFormat === "bracket-separator" ? c4(f8, e21) + "[]" : i12.reduce(n19(f8), []).join("&") : c4(f8, e21) + "=" + c4(i12, e21);
    }).filter((f8) => f8.length > 0).join("&");
  };
  d5.parseUrl = (r11, e21) => {
    e21 = Object.assign({ decode: true }, e21);
    let [t15, n19] = V6(r11, "#");
    return Object.assign({ url: t15.split("?")[0] || "", query: z4(_3(r11), e21) }, e21 && e21.parseFragmentIdentifier && n19 ? { fragmentIdentifier: o13(n19, e21) } : {});
  };
  d5.stringifyUrl = (r11, e21) => {
    e21 = Object.assign({ encode: true, strict: true, [y9]: true }, e21);
    let t15 = Q3(r11.url).split("?")[0] || "", n19 = d5.extract(r11.url), a14 = d5.parse(n19, { sort: false }), s10 = Object.assign(a14, r11.query), f8 = d5.stringify(s10, e21);
    f8 && (f8 = `?${f8}`);
    let i12 = fr(r11.url);
    return r11.fragmentIdentifier && (i12 = `#${e21[y9] ? c4(r11.fragmentIdentifier, e21) : r11.fragmentIdentifier}`), `${t15}${f8}${i12}`;
  };
  d5.pick = (r11, e21, t15) => {
    t15 = Object.assign({ parseFragmentIdentifier: true, [y9]: false }, t15);
    let { url: n19, query: a14, fragmentIdentifier: s10 } = d5.parseUrl(r11, t15);
    return d5.stringifyUrl({ url: n19, query: er(a14, e21), fragmentIdentifier: s10 }, t15);
  };
  d5.exclude = (r11, e21, t15) => {
    let n19 = Array.isArray(e21) ? (a14) => !e21.includes(a14) : (a14, s10) => !e21(a14, s10);
    return d5.pick(r11, n19, t15);
  };
});
var K4 = B(J4());
function Sr(r11) {
  let p10 = w(w({}, e20.halo.props), r11), { control: e21, urlString: t15, onCameraUpdate: n19 } = p10, s10 = y(p10, ["control", "urlString", "onCameraUpdate"]);
  e21 === "query" && (s10 = K4.parse(I(t15), { parseNumbers: true, parseBooleans: true, arrayFormat: "index" }));
  let b8 = s10, { lightType: f8, envPreset: i12, brightness: l8, grain: W2, toggleAxis: X3 } = b8, ir = y(b8, ["lightType", "envPreset", "brightness", "grain", "toggleAxis"]);
  return cr(sr, { children: [g5(J, w({}, s10)), g5(p9, { lightType: f8, brightness: l8, envPreset: i12 }), W2 !== "off" && g5(k3, {}), X3 && g5(a13, {}), g5(l6, x(w({}, s10), { onCameraUpdate: n19 }))] });
}
export {
  Sr as ShaderGradient,
  V3 as ShaderGradientCanvas,
  M as formatFramerProps,
  I as formatUrlString,
  t14 as initialActivePreset,
  e20 as presets,
  o12 as presetsArray,
  i as propertyControls,
  N2 as useShaderGradientCanvasContext
};
/*! Bundled license information:

@shadergradient/react/dist/chunk-6DNZ3I5B.mjs:
  (*! Bundled license information:
  
  camera-controls/dist/camera-controls.module.js:
    (*!
     * camera-controls
     * https://github.com/yomotsu/camera-controls
     * (c) 2017 @yomotsu
     * Released under the MIT License.
     *)
  *)
*/
