// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "*{box-sizing: border-box;margin: 0;padding: 0;}\n.all{\n    background: rgb(212,236,249);\n    // min-height: 100vh;\n}\n.header{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 300px;\n    animation-duration: 2s;\n    animation-name: slidein;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n   \n}\n@keyframes slidein{\n    from{\n        transform:translateY(0px);\n    }\n    to{\n        transform:translateY(100px);\n    }\n}\n.top{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n}\n.top1{\n    border: 1px solid;\n    width: 30px;\n    height: 15px;\n    background: rgb(252,193,54);\n    border-radius:100px 100px 0 0;\n}\n.top2{\n    border: 1px solid;\n    width:80px;\n    height: 1px;\n    animation-duration: 0.1s;\n    animation-name: rotar;\n    animation-iteration-count: infinite;\n    animation-direction: alternate;\n    z-index: 100;\n}\n@keyframes rotar {\n    from{transform:rotate3D(0,1,0,0deg);}\n    to{transform:rotate3D(0,1,0,360deg);}\n}\n.top3{\n    border: 1px solid;\n    width: 10px;\n    height: 15px;\n    background: rgb(252,193,54);\n}\n.face{\n    border: 1px solid;\n    border-radius: 50%;\n    width: 200px;\n    height: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background:rgb(53,161,201);\n    position: relative;\n}\n.face2{\n    border: 1px solid;\n    border-radius: 50%;\n    width: 160px;\n    height: 160px;\n    background: white;\n\n}\n.eye1{ \n    display: flex;\n    justify-content: center;\n}\n.eye{\n    border: 1px solid;\n    border-radius: 50%;\n    width: 40px;\n    height:40px;\n    background: white;\n}\n\n.eyes{\n    border: 1px solid;\n    border-radius: 50%;\n    width: 12px;\n    height:18px;\n    margin-left:20px;\n    margin-top: 12px;\n    background: #000;\n}\n.eyes::before{\n    content:'';\n    display: block;\n    border-radius: 50%;\n    width: 5px;\n    height:6px;\n    margin-top: 5px;\n    margin-left:2px;\n    background: #fff;\n}\n.content{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: -6px;\n}\n.line{\n    border: 1px solid;\n    width: 65px;\n    background: #000;\n}\n.line1{\n    margin-top: -2px;\n    transform: rotate(20deg)\n}\n.line2{\n    margin-top: 18px;\n}\n.line3{\n    margin-top: 12px;\n    transform: rotate(-10deg)\n}\n.line4{\n    margin-top: -2px;\n    transform: rotate(-20deg)\n}\n.line5{\n    margin-top: 12px;\n    transform: rotate(10deg)\n}\n.bitou{\n    border: 1px solid;\n    border-radius: 50%;\n    width: 30px;\n    height:30px;\n    background: rgb(177,22,53);\n}\n.bitou::after{\n    content: '';\n    display: block;\n    height:10px;\n    width: 10px;\n    border-radius: 50%;\n    margin-top: 5px;\n    margin-left: 5px;\n    background: #fff;\n}\n.bidi{\n    border: 1px solid;\n    height:13px;\n    width: 1px;\n    margin:auto;\n    background: #000;\n}\n.mouse{\n    border: 1px solid;\n    border-radius:0 0 100px 100px ;\n    height:70px;\n    width: 125px;\n    margin:auto;\n    background: rgb(177,22,53);\n    display: flex;\n    justify-content: center;\n    overflow: hidden;\n}\n.tongue{\n    width: 50px;\n    height: 50px;\n    margin-top: 25px;\n    border-radius: 100px 90px 0 0;\n    background: rgb(202,37,51);\n}\n";
exports.default = string;
},{}],"HdJB":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
    n: 0,
    timeout: 100,
    id: undefined,
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: function init() {
        player.play();
        player.bindEvents();
    },
    bindEvents: function bindEvents() {
        console.log('dianjile1');
        for (var key in player.events) {
            var value = player.events[key];
            console.log(player[value]);
            document.querySelector(key).onclick = player[value];
        }
    },
    run: function run() {
        if (player.n > _css2.default.length) {
            window.clearInterval(player.id);
            return;
        }
        demo.innerHTML = _css2.default.substr(0, player.n);
        hljs.highlightAll();
        demo2.innerHTML = _css2.default.substr(0, player.n);
        demo.scrollTop = demo.scrollHeight;
        player.n += 1;
    },
    play: function play() {
        window.clearInterval(player.id);
        player.id = setInterval(player.run, player.timeout);
    },
    pause: function pause() {
        window.clearInterval(player.id);
    },
    slow: function slow() {
        player.pause();
        player.timeout = 1000;
        player.play();
    },
    normal: function normal() {
        player.pause();
        player.timeout = 100;
        player.play();
    },
    fast: function fast() {
        player.pause();
        player.timeout = 10;
        player.play();
    }
};

player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=/test.afe2d669.map