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
})({"aTMyo":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "bac14d6dfa29e6e8";
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

},{}],"41jrU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _profileHeaderJs = require("../UiComponents/ProfileHeader.js");
var _profileHeaderJsDefault = parcelHelpers.interopDefault(_profileHeaderJs);
var _tabMenuJs = require("../UiComponents/TabMenu.js");
var _tabMenuJsDefault = parcelHelpers.interopDefault(_tabMenuJs);
var _personalInfoSectionJs = require("../UiComponents/PersonalInfoSection.js");
var _personalInfoSectionJsDefault = parcelHelpers.interopDefault(_personalInfoSectionJs);
var _vehicleInfoJs = require("../UiComponents/VehicleInfo.js");
var _vehicleInfoJsDefault = parcelHelpers.interopDefault(_vehicleInfoJs);
var _documentsDetailsJs = require("../UiComponents/DocumentsDetails.js");
var _documentsDetailsJsDefault = parcelHelpers.interopDefault(_documentsDetailsJs);
var _bankDetailsJs = require("../UiComponents/BankDetails.js");
var _bankDetailsJsDefault = parcelHelpers.interopDefault(_bankDetailsJs);
var _verificationFormJs = require("../UiComponents/VerificationForm.js");
var _verificationFormJsDefault = parcelHelpers.interopDefault(_verificationFormJs);
document.addEventListener("DOMContentLoaded", function() {
    const profileHeader = new (0, _profileHeaderJsDefault.default)(document.querySelector(".profile-header"));
    const tabMenu = new (0, _tabMenuJsDefault.default)(document.querySelector(".tab-menu"));
    const personalInfoSection = new (0, _personalInfoSectionJsDefault.default)(document.querySelector(".personal-info-section"));
    const vehicleInfo = new (0, _vehicleInfoJsDefault.default)(document.querySelector(".vehicle-info"));
    const documentsDetails = new (0, _documentsDetailsJsDefault.default)(document.querySelector(".documents-details"));
    const bankDetails = new (0, _bankDetailsJsDefault.default)(document.querySelector(".bank-details"));
    const verificationForm = new (0, _verificationFormJsDefault.default)(document.querySelector(".verification-form"));
    profileHeader.render();
    tabMenu.render();
    personalInfoSection.render();
    vehicleInfo.render();
    documentsDetails.render();
    bankDetails.render();
    verificationForm.render();
}); // import ProfileHeader from '../UiComponents/ProfileHeader.js';
 // import TabMenu from '../UiComponents/TabMenu.js';
 // import PersonalInfoSection from '../UiComponents/PersonalInfoSection.js';
 // import VehicleInfo from '../UiComponents/VehicleInfo.js';
 // import DocumentsDetails from '../UiComponents/DocumentsDetails.js';
 // import BankDetails from '../UiComponents/BankDetails.js';
 // import VerificationForm from '../UiComponents/VerificationForm.js';
 // document.addEventListener('DOMContentLoaded', function() {
 //     const profileHeader = new ProfileHeader(document.querySelector('.profile-header'));
 //     const tabMenu = new TabMenu(document.querySelector('.tab-menu'));
 //     const personalInfoSection = new PersonalInfoSection(document.querySelector('.personal-info-section'));
 //     const vehicleInfo = new VehicleInfo(document.querySelector('.vehicle-info'));
 //     const documentsDetails = new DocumentsDetails(document.querySelector('.documents-details'));
 //     const bankDetails = new BankDetails(document.querySelector('.bank-details'));
 //     const verificationForm = new VerificationForm(document.querySelector('.verification-form'));
 //     // Render each component
 //     profileHeader.render();
 //     tabMenu.render();
 //     personalInfoSection.render();
 //     vehicleInfo.render();
 //     documentsDetails.render();
 //     bankDetails.render();
 //     verificationForm.render();
 // });

},{"../UiComponents/ProfileHeader.js":"dmn7C","../UiComponents/TabMenu.js":"ddKsr","../UiComponents/PersonalInfoSection.js":"5J8Ow","../UiComponents/VehicleInfo.js":"aAY1N","../UiComponents/DocumentsDetails.js":"kEoVu","../UiComponents/BankDetails.js":"cw0V8","../UiComponents/VerificationForm.js":"8s44f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmn7C":[function(require,module,exports) {
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
        this.fetchProfileData();
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

},{"../../Assets/Images/group-28389@2x.png":"hSYHT","../../Config/Url":"eTxUq","../../Assets/Images/path-39207@2x.png":"emHNJ","../../Assets/Images/path-38334@2x.png":"es6jj","../../Assets/Images/path-38491@2x.png":"1cJuz","../../Assets/Images/path-38492@2x.png":"j1a0T","../../Assets/Images/vmlogo.png.jpg":"3t8yV","../../Assets/Images/call.png":"gzgUH","../../Assets/Images/call2x.png":"isayW","../../Assets/Images/call3x.png":"6yrF6","../../Assets/Images/group-25527.png":"3Uod5","../../Assets/Images/group-25528.png":"8BaC7","../../Assets/Images/group-25527@2x.png":"jAbck","../../Assets/Images/group-25529.png":"lgOmb","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hSYHT":[function(require,module,exports) {
module.exports = require("fa9409dac48adf18").getBundleURL("g25Li") + "group-28389@2x.38633999.png" + "?" + Date.now();

},{"fa9409dac48adf18":"lgJ39"}],"lgJ39":[function(require,module,exports) {
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
const base = "http://localhost:3000";
const API_BASE_URL = `${base}/api`;
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

},{}],"emHNJ":[function(require,module,exports) {
module.exports = require("b19869774fb310c").getBundleURL("g25Li") + "path-39207@2x.06eb4535.png" + "?" + Date.now();

},{"b19869774fb310c":"lgJ39"}],"es6jj":[function(require,module,exports) {
module.exports = require("981a2f801a37588").getBundleURL("g25Li") + "path-38334@2x.ff1aa6ef.png" + "?" + Date.now();

},{"981a2f801a37588":"lgJ39"}],"1cJuz":[function(require,module,exports) {
module.exports = require("ef69da0e11d9de5a").getBundleURL("g25Li") + "path-38491@2x.fad70a9f.png" + "?" + Date.now();

},{"ef69da0e11d9de5a":"lgJ39"}],"j1a0T":[function(require,module,exports) {
module.exports = require("74bd4e4d67b9a4bb").getBundleURL("g25Li") + "path-38492@2x.a789b301.png" + "?" + Date.now();

},{"74bd4e4d67b9a4bb":"lgJ39"}],"3t8yV":[function(require,module,exports) {
module.exports = require("bc43789facf2b5dc").getBundleURL("g25Li") + "vmlogo.png.1a8d9a45.jpg" + "?" + Date.now();

},{"bc43789facf2b5dc":"lgJ39"}],"gzgUH":[function(require,module,exports) {
module.exports = require("1dff0198c4c13b9c").getBundleURL("g25Li") + "call.b53de7e1.png" + "?" + Date.now();

},{"1dff0198c4c13b9c":"lgJ39"}],"isayW":[function(require,module,exports) {
module.exports = require("8ef59326e6304e4").getBundleURL("g25Li") + "call2x.fb7160c4.png" + "?" + Date.now();

},{"8ef59326e6304e4":"lgJ39"}],"6yrF6":[function(require,module,exports) {
module.exports = require("df8defdd575eb509").getBundleURL("g25Li") + "call3x.c8df3887.png" + "?" + Date.now();

},{"df8defdd575eb509":"lgJ39"}],"3Uod5":[function(require,module,exports) {
module.exports = require("1dec61f99a6f0d47").getBundleURL("g25Li") + "group-25527.35a0451d.png" + "?" + Date.now();

},{"1dec61f99a6f0d47":"lgJ39"}],"8BaC7":[function(require,module,exports) {
module.exports = require("ccf331710ad75795").getBundleURL("g25Li") + "group-25528.fcdc7462.png" + "?" + Date.now();

},{"ccf331710ad75795":"lgJ39"}],"jAbck":[function(require,module,exports) {
module.exports = require("7817302773158759").getBundleURL("g25Li") + "group-25527@2x.5a351419.png" + "?" + Date.now();

},{"7817302773158759":"lgJ39"}],"lgOmb":[function(require,module,exports) {
module.exports = require("f6d34eeec7a33073").getBundleURL("g25Li") + "group-25529.7ada4746.png" + "?" + Date.now();

},{"f6d34eeec7a33073":"lgJ39"}],"ddKsr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class TabMenu {
    constructor(container){
        this.container = container;
        this.tabsArray = [
            "Personal Details",
            "Live Tracking",
            "Services Applied",
            "Trip History",
            "Payment Reports",
            "Vehicles Driven",
            "Customer Feedback",
            "Accidental Reports"
        ];
    }
    render() {
        const buttonsHtml = this.tabsArray.map((tab, index)=>`
            <button class="tab-button ${index === 0 ? "active" : ""}">
                ${tab}
            </button>
        `).join("");
        this.container.innerHTML = buttonsHtml;
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    const container = document.getElementById("tab-menu");
    const tabMenu = new TabMenu(container);
    tabMenu.render();
});
exports.default = TabMenu; // class TabMenu {
 //     constructor(container) {
 //         this.container = container;
 //         // const tabsArray = [
 //         //     'Personal Details',
 //         //     'Live Tracking',
 //         //     'Services Applied',
 //         //     'Trip History',
 //         //     'Payment Reports',
 //         //     'Vehicles Driven',
 //         //     'Customer Feedback',
 //         //     'Accidental Reports'
 //         // ];
 //     }
 //     //we are writing as a seperate class to reuse the tabs again , so it should be dynaminc
 //     render() {
 //         this.container.innerHTML = `
 //             <button class="tab-button active">tabsArray</button>
 //             <button class="tab-button">Live Tracking</button>
 //             <button class="tab-button">Services Applied</button>
 //             <button class="tab-button">Trip History</button>
 //             <button class="tab-button">Payment Reports</button>
 //             <button class="tab-button">Vehicles Driven</button>
 //             <button class="tab-button">Customer Feedback</button>
 //             <button class="tab-button">Accidental Reports</button>
 //         `;
 //     }        
 // }

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5J8Ow":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _url = require("../../Config/Url");
var _urlDefault = parcelHelpers.interopDefault(_url);
class PersonalInfoSection {
    constructor(container){
        this.container = container;
        //default values
        this.name = "loading...";
        this.fetchPersonalData();
    }
    // Fetch profile data from API
    async fetchPersonalData() {
        try {
            const driverId = "NOTDR001";
            const response = await fetch(`${(0, _urlDefault.default)}/personal-info?driver_id=${driverId}`);
            let data = await response.json();
            data = data[0];
            console.log(data);
            // Update the class properties with the fetched data
            this.name = data.name || "Unknown";
            this.PhoneNumber = data.phone_number || "N/A";
            this.EmailAddress = data.email || "N/A";
            this.Gender = data.gender || "N/A";
            this.Age = data.age || "N/A";
            this.DateofBirth = data.date_of_birth || "N/A";
            this.Address = data.address || "N/A";
            this.AadharCardNo = data.aadhar_card_no || "N/A";
            this.PANCardNo = data.pan_card_no || "N/A";
            // Re-render the component with updated data
            this.render();
        } catch (error) {
            console.error("Failed to fetch personal data:", error);
        }
    }
    render() {
        this.container.innerHTML = `
            <div class="section-title">
                <h3>Personal Information</h3>
                <div class="line"></div>
            </div>
            <div class="info-content">
                <div class="info-header">
                    <h2>${this.name}</h2>
                </div>
                <div class="info-grid">
                    <div class="info-item">
                        <p>Phone Number<br><strong>${this.PhoneNumber}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Email Address<br><strong>${this.EmailAddress}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Gender<br><strong>${this.Gender}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Age<br><strong>${this.Age}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Date of Birth<br><strong>${this.DateofBirth}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Address<br><strong>${this.Address}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>Aadhar Card No<br><strong>${this.AadharCardNo}</strong></p>
                    </div>
                    <div class="info-item">
                        <p>PAN Card No<br><strong>${this.PANCardNo}</strong></p>
                    </div>
                </div>
            </div>
        `;
    }
}
exports.default = PersonalInfoSection;

},{"../../Config/Url":"eTxUq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAY1N":[function(require,module,exports) {
// import vehicle_info from '../../Assets/Images/illustration@3x.png';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class VehicleInfo {
    constructor(container){
        this.container = container;
    }
    render() {
        this.container.innerHTML = `
            <div class="title">Currently Assigned Vehicle Information</div>
            <div class="content">
                <div class="illustration">
                    <img src="../Assets/Images/illustration@3x.png" alt="No Vehicle Assigned" />
                </div>
                <div class="message">No Vehicle assigned / registered</div>
            </div>
        `;
    }
}
exports.default = VehicleInfo;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kEoVu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _url = require("../../Config/Url");
var _urlDefault = parcelHelpers.interopDefault(_url);
class DocumentsDetails {
    constructor(container){
        this.container = container;
        this.fetchDocumentDetails();
    }
    async fetchDocumentDetails() {
        try {
            const driverId = "NOTDR001";
            const response = await fetch(`${(0, _urlDefault.default)}/verification-documents?driver_id=${driverId}`);
            let data = await response.json();
            console.log(data);
            this.slno1 = data[0].SL_NO || "N/A";
            this.slno2 = data[1].SL_NO || "N/A";
            this.slno3 = data[2].SL_NO || "N/A";
            this.doctype1 = data[0].DOCUMENT_TYPE || "N/A";
            this.doctype2 = data[1].DOCUMENT_TYPE || "N/A";
            this.doctype3 = data[2].DOCUMENT_TYPE || "N/A";
            this.idno1 = data[0].ID_NO || "N/A";
            this.idno2 = data[1].ID_NO || "N/A";
            this.idno3 = data[2].ID_NO || "N/A";
            this.startdate1 = data[0].START_DATE || "N/A";
            this.startdate2 = data[1].START_DATE || "N/A";
            this.startdate3 = data[2].START_DATE || "N/A";
            this.expdate1 = data[0].EXPIRY_DATE;
            this.expdate2 = data[1].EXPIRY_DATE;
            this.expdate3 = data[2].EXPIRY_DATE;
            this.remainingdate1 = data[0].REMAINING_DAYS;
            this.remainingdate2 = data[1].REMAINING_DAYS;
            this.remainingdate3 = data[2].REMAINING_DAYS;
            this.status1 = data[0].STATUS;
            this.status2 = data[1].STATUS;
            this.status3 = data[2].STATUS;
            // Re-render the component with updated data
            this.render();
        } catch (error) {
            console.error("Failed to fetch profile data:", error);
        }
    }
    render() {
        this.container.innerHTML = `
            <div class="title">Verification Documents Details</div>
            <table>
                <thead>
                    <tr>
                        <th>SL NO</th>
                        <th>DOCUMENT TYPE</th>
                        <th>ID NO</th>
                        <th>START DATE</th>
                        <th>EXPIRY DATE</th>
                        <th>REMAINING DAYS</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${this.slno1}</td>
                        <td>${this.doctype1}</td>
                        <td>${this.idno1}</td>
                        <td>${this.startdate1}</td>
                        <td>${this.expdate1}</td>
                        <td><span class='color'>${this.remainingdate1}</span></td>
                        <td><span class="status active">${this.status1}</span></td>
                    </tr>
                    <tr>
                        <td>${this.slno2}</td>
                        <td>${this.doctype2}</td>
                        <td>${this.idno2}</td>
                        <td>${this.startdate2}</td>
                        <td>${this.expdate2}</td>
                        <td><span class='color'>${this.remainingdate2}</span></td>
                        <td><span class="status active">${this.status2}</span></td>
                    </tr>
                    <tr>
                        <td>${this.slno3}</td>
                        <td>${this.doctype3}</td>
                        <td>${this.idno3}</td>
                        <td>${this.startdate3}</td>
                        <td>${this.expdate3}</td>
                        <td><span class='color'>${this.remainingdate3}</span></td>
                        <td><span class="status active">${this.status3}</span></td>
                    </tr>
                </tbody>
            </table>
        `;
    }
}
exports.default = DocumentsDetails;

},{"../../Config/Url":"eTxUq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cw0V8":[function(require,module,exports) {
//import BankDetails_1 from '../../Assets/Images/gender.png';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _url = require("../../Config/Url");
var _urlDefault = parcelHelpers.interopDefault(_url);
class BankDetails {
    constructor(container){
        this.container = container;
        this.accountHolderName = "loading..";
        this.fetchBankDetails();
    }
    //Fetch BankDetails from API
    async fetchBankDetails() {
        try {
            const driverId = "NOTDR001";
            const response = await fetch(`${(0, _urlDefault.default)}/bank-account-details?driver_id=${driverId}`);
            let data = await response.json();
            data = data[0];
            console.log(data);
            // Update the class properties with the fetched data
            this.userName = data.name || "Unknown";
            this.accountHolderName = data.AccountHolderName || "N/A";
            this.accountNumber = data.AccountNumber || "N/A";
            this.bankName = data.BankName || "N/A";
            this.branchName = data.BranchName || "N/A";
            this.ifsCode = data.IFSC_Code || "N/A";
            // Re-render the component with updated data
            this.render();
        } catch (error) {
            console.error("Failed to fetch profile data:", error);
        }
    }
    render() {
        this.container.innerHTML = `
          
                <div class="title">Bank Account Details</div>
                <div class="details-grid">
                    <div class="detail-item">
                        <div class="icon">
                            <img src="../Assets/Images/gender.png" alt="Account Holder Icon">
                        </div>
                        <div class="detail">
                            <span>Account Holder's Name</span>
                            <h3>${this.accountHolderName}</h3>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="icon">
                            <img src="../Assets/Images/hash.png" alt="Account Number Icon">
                        </div>
                        <div class="detail">
                            <span>Account Number</span>
                            <h3>${this.accountNumber}</h3>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="icon">
                            <img src="../Assets/Images/bank.png" alt="Bank Icon">
                        </div>
                        <div class="detail">
                            <span>Bank Name</span>
                            <h3>${this.bankName}</h3>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="icon">
                            <img src="../Assets/Images/bank.png" alt="Branch Icon">
                        </div>
                        <div class="detail">
                            <span>Branch Name</span>
                            <h3>${this.branchName}</h3>
                        </div>
                    </div>
                    <div class="detail-item">
                        <div class="icon">
                            <img src="../Assets/Images/bank.png" alt="IFSC Icon">
                        </div>
                        <div class="detail">
                            <span>IFS Code</span>
                            <h3>${this.ifsCode}</h3>
                        </div>
                    </div>
                </div>
            
        `;
    }
}
exports.default = BankDetails;

},{"../../Config/Url":"eTxUq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8s44f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class VerificationForm {
    constructor(container){
        this.container = container;
    }
    render() {
        this.container.innerHTML = `
            <form class=""> 
                <label>
                    <input type="checkbox"> I acknowledge that the Owner/Driver profile is verified
                </label>
                <br>
                <label>
                    <input type="checkbox"> I acknowledge that the Vehicle is verified
                </label>
                <br>
                <label>
                    <input type="checkbox"> I acknowledge that the Owner Document and Vehicle Document is verified
                </label>
                <br>
                <label>
                    <input type="checkbox"> I acknowledge that the Bank Account is verified
                </label>
                <br>
                <div class="footer">
                    <div class="verified-by">
                        <p>Verified By</p>
                        <a href="#">Ezio Auditore</a>
                    </div>
                    <div class="action-buttons">
                        <button type="button" class="approve-btn">Approve</button>
                        <button type="button" class="reject-btn">Reject</button>
                    </div>
                </div>
            </form>
        `;
    }
}
exports.default = VerificationForm;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aTMyo","41jrU"], "41jrU", "parcelRequire94c2")

//# sourceMappingURL=index.fa29e6e8.js.map
