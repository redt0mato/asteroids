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
})({"37eO2":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "c767fc22f18de3a7";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
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
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
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
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
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
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
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
function hmrApply(bundle, asset) {
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
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7SwCM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var entity_1 = require("./objects/entity");
var Controller_1 = require("./actions/Controller");
var Physics_1 = require("./actions/Physics");
var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext("2d");
var GameWorld = function() {
    function GameWorld(ctx) {
        this.entities = [];
        this.maximumSpeed = 1;
        this.isGameRunning = true;
        if (GameWorld._instance) throw new Error("Error: Instantiation failed: Use GameWorld.getInstance() instead of new.");
        GameWorld._instance = this;
        var _a = document.getElementsByTagName("canvas")[0], height = _a.height, width = _a.width;
        var shipInstance = new entity_1.Ship(ctx, width / 2, height / 2, 0, 0);
        this.ctx = ctx;
        GameWorld._instance.entities = [
            shipInstance
        ];
        for(var i = 0; i < 5; i++)GameWorld._instance.entities.push(new entity_1.Asteroid(ctx, Math.random() * canvas.width, Math.random() * canvas.height));
        (0, Controller_1.setupControls)(shipInstance, GameWorld);
        var startButton = document.getElementById("startButton");
        var stopButton = document.getElementById("stopButton");
        if (startButton) startButton.addEventListener("click", function() {
            GameWorld._instance.isGameRunning = true;
            requestAnimationFrame(GameWorld._instance.requestGameAnimationFrame);
        });
        if (stopButton) stopButton.addEventListener("click", function() {
            GameWorld._instance.isGameRunning = false;
            GameWorld._instance.ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }
    GameWorld.getInstance = function() {
        if (!GameWorld._instance) GameWorld._instance = new GameWorld(ctx);
        return GameWorld._instance;
    };
    GameWorld.prototype.checkIfOutOfBounds = function(entity) {
        if (entity.xPos < -50) entity.xPos = 770;
        else if (entity.xPos > 770) entity.xPos = -50;
        if (entity.yPos < -50) entity.yPos = 850;
        else if (entity.yPos > 850) entity.yPos = -50;
        return true;
    };
    GameWorld.prototype.updatePositionOfEntity = function(entity) {};
    GameWorld.prototype.drawMap = function() {
        GameWorld._instance.ctx.clearRect(0, 0, canvas.width, canvas.height);
        GameWorld._instance.entities.forEach(function(entity) {
            GameWorld._instance.checkIfOutOfBounds(entity);
            entity.draw();
            entity.updatePosition();
        });
    };
    GameWorld.prototype.requestGameAnimationFrame = function() {
        if (GameWorld._instance.isGameRunning !== true) return;
        (0, Physics_1.calculatePhysics)(GameWorld);
        GameWorld._instance.drawMap();
        requestAnimationFrame(GameWorld._instance.requestGameAnimationFrame);
    };
    GameWorld._instance = new GameWorld(ctx);
    return GameWorld;
}();
var GameWorldSingleton = GameWorld.getInstance();

},{"./objects/entity":"gHrh4","./actions/Controller":"bWZt3","./actions/Physics":"1UKZe"}],"gHrh4":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Asteroid = exports.Ship = exports.DIRECTIONS = exports.Controller = exports.EntityTypes = exports.Entity = void 0;
var shipMaxSpeed = 1;
var Entity = function() {
    function Entity(ctx, xPos, yPos, xVelocity, yVelocity) {
        if (xVelocity === void 0) xVelocity = 0;
        if (yVelocity === void 0) yVelocity = 0;
        this.type = EntityTypes.ENTITY;
        this.radius = 50;
        this.ctx = ctx;
        this._xPos = xPos;
        this._yPos = yPos;
        this._vel = [
            xVelocity,
            yVelocity
        ];
    }
    Entity.prototype.updatePosition = function() {
        this.xPos += this._vel[0];
        this.yPos += this._vel[1];
    };
    Object.defineProperty(Entity.prototype, "xPos", {
        get: function() {
            return this._xPos;
        },
        set: function(value) {
            if (value === undefined) throw new Error("tried to set NaN or undefined");
            this._xPos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "yPos", {
        get: function() {
            return this._yPos;
        },
        set: function(value) {
            if (value === undefined) throw new Error("tried to set NaN or undefined");
            this._yPos = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "vel", {
        get: function() {
            return this._vel;
        },
        set: function(newVel) {
            this._vel = newVel;
        },
        enumerable: false,
        configurable: true
    });
    Entity.prototype.draw = function() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = "red";
        this.ctx.arc(this.xPos, this.yPos, this.radius, 0, Math.PI);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.strokeStyle = "blue";
        this.ctx.arc(this.xPos, this.yPos, this.radius, Math.PI, 2 * Math.PI);
        this.ctx.stroke();
    };
    return Entity;
}();
exports.Entity = Entity;
var EntityTypes;
(function(EntityTypes) {
    EntityTypes[EntityTypes["ASTEROID"] = 0] = "ASTEROID";
    EntityTypes[EntityTypes["SHIP"] = 1] = "SHIP";
    EntityTypes[EntityTypes["BULLET"] = 2] = "BULLET";
    EntityTypes[EntityTypes["ENTITY"] = 3] = "ENTITY";
})(EntityTypes = exports.EntityTypes || (exports.EntityTypes = {}));
var Controller = function() {
    function Controller() {}
    return Controller;
}();
exports.Controller = Controller;
var DIRECTIONS;
(function(DIRECTIONS) {
    DIRECTIONS[DIRECTIONS["UP"] = 0] = "UP";
    DIRECTIONS[DIRECTIONS["DOWN"] = 1] = "DOWN";
    DIRECTIONS[DIRECTIONS["LEFT"] = 2] = "LEFT";
    DIRECTIONS[DIRECTIONS["RIGHT"] = 3] = "RIGHT";
})(DIRECTIONS = exports.DIRECTIONS || (exports.DIRECTIONS = {}));
var bulletRadius = 5;
var Ship = function(_super) {
    __extends(Ship, _super);
    function Ship() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = EntityTypes.SHIP;
        _this.radius = 15;
        return _this;
    }
    Ship.prototype.power = function(direction) {
        var _a = this.vel, xVel = _a[0], yVel = _a[1];
        var newVel = [
            xVel,
            yVel
        ];
        if (direction === DIRECTIONS.UP) newVel = [
            xVel,
            yVel - 1
        ];
        else if (direction === DIRECTIONS.DOWN) newVel = [
            xVel,
            yVel + 1
        ];
        else if (direction === DIRECTIONS.LEFT) newVel = [
            xVel - 1,
            yVel
        ];
        else if (direction === DIRECTIONS.RIGHT) newVel = [
            xVel + 1,
            yVel
        ];
        this.vel = [
            Math.abs(newVel[0]) <= 1.5 ? newVel[0] : newVel[0] / Math.abs(newVel[0] || 1) * 1.5,
            Math.abs(newVel[1]) <= 1.5 ? newVel[1] : newVel[1] / Math.abs(newVel[1] || 1) * 1.5, 
        ];
    };
    Ship.prototype.fireBullet = function(GameWorld) {
        if (GameWorld.getInstance().entities.indexOf(this) === -1) return;
        var _a = this, ctx = _a.ctx, shipXPos = _a.xPos, shipYPos = _a.yPos, shipVelocity = _a.vel, radius = _a.radius;
        var newBullet = new Bullet(ctx, shipXPos + 2.25 * radius * (shipVelocity[0] / Math.abs(shipVelocity[0] || 1)), shipYPos + 2.25 * radius * (shipVelocity[1] / Math.abs(shipVelocity[1] || 1)), shipVelocity[0] / Math.abs(shipVelocity[0] || 1) * 3, shipVelocity[1] / Math.abs(shipVelocity[1] || 1) * 3);
        GameWorld.getInstance().entities.push(newBullet);
    };
    return Ship;
}(Entity);
exports.Ship = Ship;
var Bullet = function(_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = EntityTypes.BULLET;
        _this.radius = 5;
        return _this;
    }
    return Bullet;
}(Entity);
var Asteroid = function(_super) {
    __extends(Asteroid, _super);
    function Asteroid() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var _this = _super.call(this, args[0], args[1], args[2], Math.random() * 1.2, Math.random() * 1.2) || this;
        _this.type = EntityTypes.ASTEROID;
        return _this;
    }
    return Asteroid;
}(Entity);
exports.Asteroid = Asteroid;

},{}],"bWZt3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setupControls = void 0;
var entity_1 = require("../objects/entity");
function setupControls(shipInstance, GameWorld) {
    document.onkeydown = function(event) {
        if (event.keyCode === 37) shipInstance.power(entity_1.DIRECTIONS.LEFT);
        else if (event.keyCode === 38) shipInstance.power(entity_1.DIRECTIONS.UP);
        else if (event.keyCode === 39) shipInstance.power(entity_1.DIRECTIONS.RIGHT);
        else if (event.keyCode === 40) shipInstance.power(entity_1.DIRECTIONS.DOWN);
        else if (event.keyCode === 32) shipInstance.fireBullet(GameWorld);
    };
}
exports.setupControls = setupControls;

},{"../objects/entity":"gHrh4"}],"1UKZe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.calculatePhysics = void 0;
function calculateDistanceBetweenTwoPoints(coords1, coords2) {
    return Math.sqrt(Math.pow(Math.abs(coords1[0] - coords2[0]), 2) + Math.pow(Math.abs(coords1[1] - coords2[1]), 2));
}
function doCirclesCollide() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var coords1 = args[0], coords2 = args[1], radius1 = args[2], radius2 = args[3];
    return calculateDistanceBetweenTwoPoints(coords1, coords2) < radius1 + radius2;
}
function calculatePhysics(GameWorld) {
    var entitiesArray = GameWorld.getInstance().entities;
    var entity1, entity2;
    for(var i = 0; i < entitiesArray.length; i++)for(var j = i + 1; j < entitiesArray.length; j++){
        entity1 = entitiesArray[i];
        entity2 = entitiesArray[j];
        if (entity1.type !== entity2.type && doCirclesCollide([
            entity1.xPos,
            entity1.yPos
        ], [
            entity2.xPos,
            entity2.yPos
        ], entity1.radius, entity2.radius)) {
            var oldEntitiesArray = GameWorld.getInstance().entities;
            var newArray = oldEntitiesArray.slice(0, i);
            newArray = newArray.concat(oldEntitiesArray.slice(i + 1, j)).concat(oldEntitiesArray.slice(j + 1));
            GameWorld.getInstance().entities = newArray;
        } else console.log("nothing collided");
    }
}
exports.calculatePhysics = calculatePhysics;

},{}]},["37eO2","7SwCM"], "7SwCM", "parcelRequire94c2")

//# sourceMappingURL=index.f18de3a7.js.map
