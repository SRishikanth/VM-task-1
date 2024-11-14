// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hWUC8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "23e577e1659cac1c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"dmn7C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _group283892XPng = require("../../Assets/Images/group-28389@2x.png");
var _group283892XPngDefault = parcelHelpers.interopDefault(_group283892XPng);
var _url = require("../../Config/Url");
var _urlDefault = parcelHelpers.interopDefault(_url);
var _path392072XPng = require("../../Assets/Images/path-39207@2x.png");
var _path392072XPngDefault = parcelHelpers.interopDefault(_path392072XPng);
var _path383342XPng = require("../../Assets/Images/path-38334@2x.png");
var _path383342XPngDefault = parcelHelpers.interopDefault(_path383342XPng);
var _path384912XPng = require("../../Assets/Images/path-38491@2x.png");
var _path384912XPngDefault = parcelHelpers.interopDefault(_path384912XPng);
var _path384922XPng = require("../../Assets/Images/path-38492@2x.png");
var _path384922XPngDefault = parcelHelpers.interopDefault(_path384922XPng);
var _vmlogoPngJpg = require("../../Assets/Images/vmlogo.png.jpg");
var _vmlogoPngJpgDefault = parcelHelpers.interopDefault(_vmlogoPngJpg);
var _callPng = require("../../Assets/Images/call.png");
var _callPngDefault = parcelHelpers.interopDefault(_callPng);
var _call2XPng = require("../../Assets/Images/call2x.png");
var _call2XPngDefault = parcelHelpers.interopDefault(_call2XPng);
var _call3XPng = require("../../Assets/Images/call3x.png");
var _call3XPngDefault = parcelHelpers.interopDefault(_call3XPng);
var _group25527Png = require("../../Assets/Images/group-25527.png");
var _group25527PngDefault = parcelHelpers.interopDefault(_group25527Png);
var _group25528Png = require("../../Assets/Images/group-25528.png");
var _group25528PngDefault = parcelHelpers.interopDefault(_group25528Png);
var _group255272XPng = require("../../Assets/Images/group-25527@2x.png");
var _group255272XPngDefault = parcelHelpers.interopDefault(_group255272XPng);
var _group25529Png = require("../../Assets/Images/group-25529.png");
var _group25529PngDefault = parcelHelpers.interopDefault(_group25529Png);
class ProfileHeader {
    constructor(container){
        this.container = container;
        this.userName = "Loading...";
        this.fetchProfileData(); //this  -current instance of an object. It is used to access properties or methods that belong to the object in which the code is currently executing.
    }
    // Fetch profile data from API
    async fetchProfileData() {
        try {
            const driverId = "NOTDR001";
            const response = await fetch(`${(0, _urlDefault.default)}/driver-profile?driver_id=${driverId}`);
            let data = await response.json();
            data = data[0];
            console.log(data);
            // Update the class properties with the fetched data
            this.userName = data.name || "Unknown";
            this.lastUpdate = data.LastUpdate || "N/A";
            this.userId = data.driver_id || "N/A";
            this.experience = data.experience_years || "N/A";
            this.totalDistance = data.total_distance_km || "0 Km";
            this.totalHours = data.total_hours || "0h 0m";
            this.totalOfficeTrips = data.total_office_trips || "0";
            this.totalRegularTrips = data.total_regular_trips || "0";
            this.totalRevenue = data.total_revenue || "\u20B90";
            this.driverRevenue = data.driver_revenue || "\u20B90";
            this.totalVehiclesDriven = data.total_vehicles_driven || "0";
            this.joinedDate = data.joined_date || "N/A";
            // Re-render the component with updated data
            this.render();
        } catch (error) {
            console.error("Failed to fetch profile data:", error);
        }
    }
    // Render the component
    render() {
        this.container.innerHTML = `
            <div class="status-container">
                <div class="left">
                    <img src=${0, _group283892XPngDefault.default} alt="" width="30px" height="30px">
                </div>
                <div class="right">
                    <div class="status-button">
                        <span class="active-1"><img style="width: 20px; padding-right: 6px;" src=${0, _path392072XPngDefault.default} alt="">All Documents are up to date</span>
                    </div>
                    <div class="status-button">
                        <button class="active"> ACTIVE <img style="padding-left: 4px;" src=${0, _path383342XPngDefault.default} alt="" width="10px"></button>
                    </div>
                    <div class="icon-button">
                        <button class="pen"><img src=${0, _path384912XPngDefault.default} width="20px"></button>
                    </div>
                    <div class="icon-button">
                        <button class="del"><img src=${0, _path384922XPngDefault.default} width="20px"></button>
                    </div>
                </div>
            </div>

            <div class="user-info">
                <div class="img">
                    <img src=${0, _vmlogoPngJpgDefault.default} alt="User Profile Picture" class="logo">
                </div>
                <div class="name-txt">
                    <h3>${this.userName} <span class="sub-text">Last Update: ${this.lastUpdate}</span></h3>
                    <span class="NOTDR001">${this.userId}</span>
                </div>
            </div>

            <div class="row">
                <div class="lgo-1">
                    <img src=${0, _callPngDefault.default} srcset=${0, _call2XPngDefault.default}, ${0, _call3XPngDefault.default} class="Group-25526">
                    <img src=${0, _group25527PngDefault.default} srcset=${0, _group255272XPngDefault.default}, ../Assets/Images/group-25527@3x.png 3x" class="Group-25527">
                    <img src=${0, _group25528PngDefault.default} srcset="../Assets/Images/group-25528@2x.png 2x, ../Assets/Images/group-25528@3x.png 3x" class="Group-25528">
                    <img src=${0, _group25529PngDefault.default} srcset="../Assets/Images/group-25529@2x.png 2x, ../Assets/Images/group-25529@3x.png 3x" class="Group-25529">
                </div>
                <div class="lgo-2">
                        <button class="Driver">Driver Only</button>
                    <button class="Fleet">Fleet</button>
                    <button class="Office">Office Rides</button>
                    <button class="Travels">New Pandian Travels</button>
                    <button class="npt">NPT - HCL</button>
                    <button class="km">KM Based Payment</button>
                </div>
            </div>

            <div class="status-section">
                <div class="status-card">
                    <h3>${this.experience}</h3>
                    <p>Experience</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalDistance}</h3>
                    <p>Total Distance</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalHours}</h3>
                    <p>Total Hours</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalOfficeTrips}</h3>
                    <p>Total Office Trips</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalRegularTrips}</h3>
                    <p>Total Regular Trips</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalRevenue}</h3>
                    <p>Total Revenue</p>
                </div>
                <div class="status-card">
                    <h3>${this.driverRevenue}</h3>
                    <p>Driver Revenue</p>
                </div>
                <div class="status-card">
                    <h3>${this.totalVehiclesDriven}</h3>
                    <p>Total Vehicles Driven</p>
                </div>
                <div class="status-card">
                    <h3>${this.joinedDate}</h3>
                    <p>Joined Date</p>
                </div>
            </div>
        `;
    }
}
exports.default = ProfileHeader;

},{"../../Assets/Images/group-28389@2x.png":"7it2Z","../../Config/Url":"eTxUq","../../Assets/Images/path-39207@2x.png":"iIHp9","../../Assets/Images/path-38334@2x.png":"71EAy","../../Assets/Images/path-38491@2x.png":"6F2Z8","../../Assets/Images/path-38492@2x.png":"5fi9F","../../Assets/Images/vmlogo.png.jpg":"1jFEZ","../../Assets/Images/call.png":"1aFXq","../../Assets/Images/call2x.png":"8k40J","../../Assets/Images/call3x.png":"js9Eh","../../Assets/Images/group-25527.png":"bIDB3","../../Assets/Images/group-25528.png":"2zB60","../../Assets/Images/group-25527@2x.png":"bjP11","../../Assets/Images/group-25529.png":"dBbjI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7it2Z":[function(require,module,exports) {
module.exports = require("31446de0cc528a8d").getBundleURL("354Ga") + "group-28389@2x.38633999.png" + "?" + Date.now();

},{"31446de0cc528a8d":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"eTxUq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const API_BASE_URL = "http://localhost:3000/api";
exports.default = API_BASE_URL;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iIHp9":[function(require,module,exports) {
module.exports = require("187ede1c86a5f029").getBundleURL("354Ga") + "path-39207@2x.06eb4535.png" + "?" + Date.now();

},{"187ede1c86a5f029":"lgJ39"}],"71EAy":[function(require,module,exports) {
module.exports = require("b54493b7d8ea1346").getBundleURL("354Ga") + "path-38334@2x.ff1aa6ef.png" + "?" + Date.now();

},{"b54493b7d8ea1346":"lgJ39"}],"6F2Z8":[function(require,module,exports) {
module.exports = require("4d3060e550323798").getBundleURL("354Ga") + "path-38491@2x.fad70a9f.png" + "?" + Date.now();

},{"4d3060e550323798":"lgJ39"}],"5fi9F":[function(require,module,exports) {
module.exports = require("17b3b7c33eefd6cc").getBundleURL("354Ga") + "path-38492@2x.a789b301.png" + "?" + Date.now();

},{"17b3b7c33eefd6cc":"lgJ39"}],"1jFEZ":[function(require,module,exports) {
module.exports = require("94e34481d20e3a36").getBundleURL("354Ga") + "vmlogo.png.1a8d9a45.jpg" + "?" + Date.now();

},{"94e34481d20e3a36":"lgJ39"}],"1aFXq":[function(require,module,exports) {
module.exports = require("c3f481d1f683f0b1").getBundleURL("354Ga") + "call.b53de7e1.png" + "?" + Date.now();

},{"c3f481d1f683f0b1":"lgJ39"}],"8k40J":[function(require,module,exports) {
module.exports = require("ce97a666086c5d9c").getBundleURL("354Ga") + "call2x.fb7160c4.png" + "?" + Date.now();

},{"ce97a666086c5d9c":"lgJ39"}],"js9Eh":[function(require,module,exports) {
module.exports = require("8115a6bc510d1ecb").getBundleURL("354Ga") + "call3x.c8df3887.png" + "?" + Date.now();

},{"8115a6bc510d1ecb":"lgJ39"}],"bIDB3":[function(require,module,exports) {
module.exports = require("13bf1cce1a394f73").getBundleURL("354Ga") + "group-25527.35a0451d.png" + "?" + Date.now();

},{"13bf1cce1a394f73":"lgJ39"}],"2zB60":[function(require,module,exports) {
module.exports = require("75a1726c33710953").getBundleURL("354Ga") + "group-25528.fcdc7462.png" + "?" + Date.now();

},{"75a1726c33710953":"lgJ39"}],"bjP11":[function(require,module,exports) {
module.exports = require("8f97922684d43ffd").getBundleURL("354Ga") + "group-25527@2x.5a351419.png" + "?" + Date.now();

},{"8f97922684d43ffd":"lgJ39"}],"dBbjI":[function(require,module,exports) {
module.exports = require("f87fd2313f557ec1").getBundleURL("354Ga") + "group-25529.7ada4746.png" + "?" + Date.now();

},{"f87fd2313f557ec1":"lgJ39"}]},["hWUC8","dmn7C"], "dmn7C", "parcelRequire94c2")

//# sourceMappingURL=index.659cac1c.js.map
