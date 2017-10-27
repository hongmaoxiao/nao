!function(dataAndEvents, factory) {
  if ("object" == typeof exports && "object" == typeof module) {
    module.exports = factory();
  } else {
    if ("function" == typeof define && define.amd) {
      define([], factory);
    } else {
      if ("object" == typeof exports) {
        exports.D = factory();
      } else {
        dataAndEvents.D = factory();
      }
    }
  }
}(this, function() {
  return function(orig) {
    /**
     * @param {number} i
     * @return {?}
     */
    function self(i) {
      if (t[i]) {
        return t[i].exports;
      }
      var m = t[i] = {
        i : i,
        l : false,
        exports : {}
      };
      return orig[i].call(m.exports, m, m.exports, self), m.l = true, m.exports;
    }
    var t = {};
    return self.m = orig, self.c = t, self.i = function(b) {
      return b;
    }, self.d = function(w, ast, f) {
      if (!self.o(w, ast)) {
        Object.defineProperty(w, ast, {
          configurable : false,
          enumerable : true,
          /** @type {Function} */
          get : f
        });
      }
    }, self.n = function(c) {
      /** @type {function (): ?} */
      var i = c && c.__esModule ? function() {
        return c.default;
      } : function() {
        return c;
      };
      return self.d(i, "a", i), i;
    }, self.o = function(a, input) {
      return Object.prototype.hasOwnProperty.call(a, input);
    }, self.p = "", self(self.s = 131);
  }([function(dataAndEvents, w, topic) {
    /**
     * @param {string} hash
     * @param {string} name
     * @return {?}
     */
    function isKind(hash, name) {
      return Object.prototype.toString.call(hash) === "[object " + name + "]";
    }
    /**
     * @param {Function} val
     * @return {?}
     */
    function isFunction(val) {
      return isKind(val, "Function");
    }
    /**
     * @param {string} val
     * @return {?}
     */
    function isString(val) {
      return isKind(val, "String");
    }
    /**
     * @param {string} val
     * @return {?}
     */
    function isObject(val) {
      return isKind(val, "Object");
    }
    /**
     * @param {Object} hash
     * @return {?}
     */
    function isArray(hash) {
      return isKind(hash, "Array");
    }
    /**
     * @param {string} val
     * @return {?}
     */
    function isBoolean(val) {
      return isKind(val, "Undefined");
    }
    /**
     * @param {Object} w
     * @param {Function} fn
     * @param {Object} h
     * @return {undefined}
     */
    function add(w, fn, h) {
      if (w && isFunction(fn)) {
        if (h = h || w, isArray(w)) {
          /** @type {number} */
          var i = 0;
          var valuesLen = w.length;
          for (;i < valuesLen;i++) {
            if (false === fn.call(h, w[i], i, w)) {
              return;
            }
          }
        } else {
          if (isObject(w)) {
            var key;
            for (key in w) {
              if (false === fn.call(h, w[key], key, w)) {
                return;
              }
            }
          }
        }
      }
    }
    /**
     * @param {string} str
     * @return {?}
     */
    function camelize(str) {
      return str.replace(r20, capitalize);
    }
    /**
     * @param {string} text
     * @return {?}
     */
    function trim(text) {
      return text ? (text + "").replace(/^\s+|\s+$/g, "") : "";
    }
    /**
     * @param {?} b
     * @return {?}
     */
    function extend(b) {
      /** @type {number} */
      var len = arguments.length;
      /** @type {Array} */
      var args = Array(len > 1 ? len - 1 : 0);
      /** @type {number} */
      var i = 1;
      for (;i < len;i++) {
        args[i - 1] = arguments[i];
      }
      return property.default.apply(Object, [b].concat(args));
    }
    /**
     * @param {?} cache
     * @param {boolean} string
     * @return {?}
     */
    function capitalize(cache, string) {
      return string ? string.toUpperCase() : "";
    }
    /**
     * @return {undefined}
     */
    function noop() {
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var out = topic(3);
    var property = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }(out);
    /** @type {function (Function): ?} */
    w.isFn = isFunction;
    /** @type {function (string): ?} */
    w.isStr = isString;
    /** @type {function (string): ?} */
    w.isObj = isObject;
    /** @type {function (Object): ?} */
    w.isArray = isArray;
    /** @type {function (string): ?} */
    w.isUndefined = isBoolean;
    /** @type {function (Object, Function, Object): undefined} */
    w.each = add;
    /** @type {function (string): ?} */
    w.camelize = camelize;
    /** @type {function (string): ?} */
    w.trim = trim;
    /** @type {function (?): ?} */
    w.extend = extend;
    /** @type {function (): undefined} */
    w.noop = noop;
    /** @type {RegExp} */
    var r20 = /_(\w)/g;
  }, function(dataAndEvents, w, proceed) {
    /**
     * @return {?}
     */
    function detect() {
      var o = {};
      /** @type {string} */
      var n = window.navigator.userAgent;
      var k;
      for (k in tests) {
        o[k] = tests[k].test(n);
      }
      return o.ios = o.iphone || (o.ipad || o.ipod), o.mobile = o.ios || o.android, o.driver = o.driverAndroid || o.driverIOS, o.pc = !o.mobile, o.uber = o.lite, o.dingding = o.ding, o.ding && (o.alipay = false), window.chrome && (window.chrome && (o.chrome = true)), o.inNative = o.driver || (o.passenger || o.lite), o;
    }
    /**
     * @param {string} type
     * @return {?}
     */
    function query(type) {
      var Benchmark = type.split(",");
      var buf = detect();
      /**
       * @param {(Function|string)} string
       * @return {?}
       */
      var query = function(string) {
        if (!(string = (0, value.trim)(string) || "")) {
          return false;
        }
        var Benchmark = string.split(".");
        /** @type {boolean} */
        var hasKey = true;
        return(0, value.each)(Benchmark, function(off, dataAndEvents) {
          if (!buf[off]) {
            return hasKey = false, false;
          }
        }), hasKey;
      };
      /** @type {boolean} */
      var hasKey = false;
      return(0, value.each)(Benchmark, function(input, dataAndEvents) {
        if (query(input)) {
          return hasKey = true, false;
        }
      }), hasKey;
    }
    /**
     * @param {string} string
     * @return {?}
     */
    function parsePath(string) {
      string = string || "";
      string = string.split(".");
      /** @type {number} */
      string.length = 4;
      /** @type {Array} */
      var sb = [];
      return(0, value.each)(string, function(n) {
        n *= 1;
        if (n) {
          sb.push(n >= 10 ? n : "0" + n);
        } else {
          sb.push("00");
        }
      }), parseInt(sb.join(""), 10);
    }
    /**
     * @param {?} a
     * @param {(Object|string)} classNames
     * @param {?} b
     * @return {?}
     */
    function add(a, classNames, b) {
      return a = parsePath(a), b = parsePath(b), classNames = (0, value.trim)(classNames) || "", -1 !== classNames.indexOf("=") && a === b || (-1 !== classNames.indexOf(">") && a > b || -1 !== classNames.indexOf("<") && a < b);
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var value = proceed(0);
    var tests = {
      android : /android/i,
      iphone : /iphone/i,
      ipad : /ipad/i,
      ipod : /ipod/i,
      weixin : /micromessenger/i,
      mqq : /QQ\//i,
      alipay : /aliapp/i,
      ding : /dingtalk/i,
      passenger : /didi.passenger/i,
      lite : /didi.lite/i,
      sdk : /didi.sdk/i,
      driverAndroid : /didigsui/i,
      driverIOS : /ddudriver/i,
      chrome : /chrome\//i,
      fusion : /fusionkit/i,
      guarana : /guarana/i
    };
    w.default = {
      ua : detect(),
      /** @type {function (string): ?} */
      is : query,
      /** @type {function (?, (Object|string), ?): ?} */
      compare : add,
      regs : tests
    };
  }, function(dataAndEvents, w, $) {
    (function(object) {
      /**
       * @param {string} src
       * @param {Object} params
       * @param {Function} callback
       * @return {undefined}
       */
      function loadScript(src, params, callback) {
        /** @type {string} */
        var path = "";
        if ((0, me.isObj)(src)) {
          if (path = src.url || src.src, src.reg && write(src.reg)) {
            return;
          }
        } else {
          /** @type {string} */
          path = src;
        }
        var id = document.head || document.getElementsByTagName("head")[0];
        /** @type {Element} */
        var el = document.createElement("script");
        if ((0, me.isFn)(params)) {
          /** @type {Object} */
          callback = params;
          params = {};
        }
        params = params || {};
        callback = callback || function() {
        };
        el.type = params.type || "text/javascript";
        el.charset = params.charset || "utf8";
        /** @type {boolean} */
        el.async = !("async" in params) || !!params.async;
        if (path.indexOf("webapp/shield/z/common-pay/common-pay") > -1 || (path.indexOf("/webapp/shield/z/login/login/") > -1 || path.indexOf("static.udache.com/share_sdk/") > -1)) {
          /** @type {string} */
          el.crossOrigin = "anonymous";
        }
        el.src = path;
        if (params.attrs) {
          attrs(el, params.attrs);
        }
        if (params.text) {
          /** @type {string} */
          el.text = "" + params.text;
        }
        ("onload" in el ? loadFile : onload)(el, callback);
        if (!el.onload) {
          loadFile(el, callback);
        }
        id.appendChild(el);
      }
      /**
       * @param {Element} el
       * @param {Object} attrs
       * @return {undefined}
       */
      function attrs(el, attrs) {
        var attr;
        for (attr in attrs) {
          el.setAttribute(attr, attrs[attr]);
        }
      }
      /**
       * @param {Node} d
       * @param {Function} cb
       * @return {undefined}
       */
      function loadFile(d, cb) {
        /**
         * @return {undefined}
         */
        d.onload = function() {
          /** @type {null} */
          this.onerror = this.onload = null;
          cb(null, d);
        };
        /**
         * @return {undefined}
         */
        d.onerror = function() {
          /** @type {null} */
          this.onerror = this.onload = null;
          cb(new Error("Failed to load " + this.src), d);
        };
      }
      /**
       * @param {Node} file
       * @param {Function} cb
       * @return {undefined}
       */
      function onload(file, cb) {
        /**
         * @return {undefined}
         */
        file.onreadystatechange = function() {
          if (!("complete" != this.readyState && "loaded" != this.readyState)) {
            /** @type {null} */
            this.onreadystatechange = null;
            cb(null, file);
          }
        };
      }
      /**
       * @param {?} params
       * @return {?}
       */
      function write(params) {
        /** @type {boolean} */
        var rtn = false;
        var k;
        for (k in document.scripts) {
          var classes = document.scripts[k].src;
          if ("" !== classes) {
            if ((new RegExp(params)).exec(classes)) {
              /** @type {boolean} */
              rtn = true;
            }
          }
        }
        return rtn;
      }
      /**
       * @param {string} expr
       * @param {string} name
       * @return {undefined}
       */
      function lambda(expr, name) {
        if (m) {
          for (;animations[name].length;) {
            var matches = animations[name].shift();
            matches.call(this, expr);
          }
        }
      }
      /**
       * @param {string} event
       * @return {undefined}
       */
      function check(event) {
        if (obj.default.is("android")) {
          /** @type {boolean} */
          m = true;
        } else {
          document.addEventListener(event, function() {
            /** @type {boolean} */
            m = true;
          });
        }
      }
      /**
       * @param {string} key
       * @param {string} original
       * @param {Function} errorCallback
       * @param {string} arg
       * @return {undefined}
       */
      function read(key, original, errorCallback, arg) {
        if (!animations[key]) {
          /** @type {Array} */
          animations[key] = [];
        }
        animations[key].push(errorCallback);
        if (arg) {
          check(arg);
        } else {
          /** @type {boolean} */
          m = true;
        }
        if (object[key] && object[key].constructor === Object) {
          /** @type {boolean} */
          g = true;
          lambda(object[key], key);
        } else {
          /** @type {boolean} */
          g = false;
        }
        if (!$cookies[key]) {
          if (!g) {
            if ($cookies[key] = true) {
              loadScript(original, function(obj) {
                if (obj) {
                  return void lambda(obj, key);
                }
                /** @type {boolean} */
                g = true;
                lambda(object[key], key);
              });
            }
          }
        }
      }
      Object.defineProperty(w, "__esModule", {
        value : true
      });
      var me = $(0);
      var grid = $(1);
      var obj = function(d) {
        return d && d.__esModule ? d : {
          default : d
        };
      }(grid);
      var $cookies = {};
      var animations = {};
      /** @type {boolean} */
      var g = false;
      /** @type {boolean} */
      var m = false;
      w.default = {
        /** @type {function (string, Object, Function): undefined} */
        loadScript : loadScript,
        /** @type {function (string, string, Function, string): undefined} */
        sdkReady : read
      };
    }).call(w, $(38));
  }, function(module, dataAndEvents, $sanitize) {
    module.exports = {
      default : $sanitize(83),
      __esModule : true
    };
  }, function($, dataAndEvents) {
    var t = $.exports = {
      version : "2.5.1"
    };
    if ("number" == typeof __e) {
      __e = t;
    }
  }, function(module, dataAndEvents, $sanitize) {
    /** @type {boolean} */
    module.exports = !$sanitize(12)(function() {
      return 7 != Object.defineProperty({}, "a", {
        /**
         * @return {?}
         */
        get : function() {
          return 7;
        }
      }).a;
    });
  }, function(module, dataAndEvents) {
    var t = module.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    if ("number" == typeof __g) {
      __g = t;
    }
  }, function(dataAndEvents, w, deepDataAndEvents) {
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var def = {
      internal : {
        login : {
          url : "https://webapp.didistatic.com/static/webapp/shield/z/login/login/0.6.1/login.min.js",
          reg : /static\/webapp\/shield\/z\/login\/login/
        },
        shareSDK : {
          url : "https://static.udache.com/share_sdk/0.0.4/shareSDK.min.js",
          reg : /share_sdk\/.*\/shareSDK.min.js/
        },
        driverBridge : {
          url : "https://static.udache.com/driver/assets/js/bridge/didi.dbridge.new.js",
          reg : /bridge\/didi.dbridge.new.js/
        },
        fusion : {
          url : "https://fusion.didistatic.com/static/fusion/1.0.6/fusion.js",
          reg : /static\/fusion\/.*\/fusion.js/
        },
        paySDK : {
          url : "https://webapp.didistatic.com/static/webapp/shield/z/common-pay/common-pay/0.0.2/index.js",
          reg : /common-pay\/common-pay\/.*\/index.js/
        }
      },
      international : {
        login : {
          url : "https://webapp.didistatic.com/static/webapp/shield/z/login/login/0.6.1/login.min.js",
          reg : /static\/webapp\/shield\/z\/login\/login/
        },
        shareSDK : {
          url : "https://static.99taxis.mobi/share_sdk/0.0.4/shareSDK.min.js",
          reg : /share_sdk\/.*\/shareSDK.min.js/
        },
        fusion : {
          url : "https://static.99taxis.mobi/hybrid-fusion/1.0.6/fusion.js",
          reg : /hybrid-fusion\/.*\/fusion.js/
        },
        paySDK : {
          url : "https://webapp.didistatic.com/static/webapp/shield/z/common-pay/common-pay/0.0.2/index.js",
          reg : /common-pay\/common-pay\/.*\/index.js/
        }
      }
    };
    w.default = def;
  }, function(module, dataAndEvents, require) {
    var nodes = require(125);
    var pkg = require(16);
    var Block = require(129);
    var unique = {
      openUniPay : Block.openUniPay,
      compare : pkg.compareAppVersion,
      compareSysVersion : pkg.compareSysVersion,
      version : pkg.version
    };
    (0, nodes.initGlobalAPI)(unique);
    module.exports = unique;
  }, function(module, dataAndEvents) {
    /** @type {function (this:Object, *): boolean} */
    var hasOwn = {}.hasOwnProperty;
    /**
     * @param {Object} hash
     * @param {string} key
     * @return {?}
     */
    module.exports = function(hash, key) {
      return hasOwn.call(hash, key);
    };
  }, function(dataAndEvents, entry, require) {
    var module = require(18);
    var Block = require(46);
    var walk = require(35);
    /** @type {function (Object, string, Object): Object} */
    var setDescriptor = Object.defineProperty;
    /** @type {Function} */
    entry.f = require(5) ? Object.defineProperty : function(hash, ast, opt_attributes) {
      if (module(hash), ast = walk(ast, true), module(opt_attributes), Block) {
        try {
          return setDescriptor(hash, ast, opt_attributes);
        } catch (e) {
        }
      }
      if ("get" in opt_attributes || "set" in opt_attributes) {
        throw TypeError("Accessors not supported!");
      }
      return "value" in opt_attributes && (hash[ast] = opt_attributes.value), hash;
    };
  }, function(module, dataAndEvents, require) {
    var assert = require(6);
    var helper = require(4);
    var extend = require(92);
    var array = require(13);
    /**
     * @param {Object} hash
     * @param {string} key
     * @param {?} opt_attributes
     * @return {undefined}
     */
    var keys = function(hash, key, opt_attributes) {
      var i;
      var di;
      var name;
      /** @type {number} */
      var h = hash & keys.F;
      /** @type {number} */
      var args = hash & keys.G;
      /** @type {number} */
      var parens = hash & keys.S;
      /** @type {number} */
      var fn = hash & keys.P;
      /** @type {number} */
      var msie = hash & keys.B;
      /** @type {number} */
      var e = hash & keys.W;
      var self = args ? helper : helper[key] || (helper[key] = {});
      var orig = self.prototype;
      var parts = args ? assert : parens ? assert[key] : (assert[key] || {}).prototype;
      if (args) {
        /** @type {string} */
        opt_attributes = key;
      }
      for (i in opt_attributes) {
        if (!((di = !h && (parts && void 0 !== parts[i])) && i in self)) {
          name = di ? parts[i] : opt_attributes[i];
          self[i] = args && "function" != typeof parts[i] ? opt_attributes[i] : msie && di ? extend(name, assert) : e && parts[i] == name ? function(target) {
            /**
             * @param {string} l
             * @param {string} x
             * @param {string} y
             * @return {?}
             */
            var F = function(l, x, y) {
              if (this instanceof target) {
                switch(arguments.length) {
                  case 0:
                    return new target;
                  case 1:
                    return new target(l);
                  case 2:
                    return new target(l, x);
                }
                return new target(l, x, y);
              }
              return target.apply(this, arguments);
            };
            return F.prototype = target.prototype, F;
          }(name) : fn && "function" == typeof name ? extend(Function.call, name) : name;
          if (fn) {
            (self.virtual || (self.virtual = {}))[i] = name;
            if (hash & keys.R) {
              if (orig) {
                if (!orig[i]) {
                  array(orig, i, name);
                }
              }
            }
          }
        }
      }
    };
    /** @type {number} */
    keys.F = 1;
    /** @type {number} */
    keys.G = 2;
    /** @type {number} */
    keys.S = 4;
    /** @type {number} */
    keys.P = 8;
    /** @type {number} */
    keys.B = 16;
    /** @type {number} */
    keys.W = 32;
    /** @type {number} */
    keys.U = 64;
    /** @type {number} */
    keys.R = 128;
    /** @type {function (Object, string, ?): undefined} */
    module.exports = keys;
  }, function(module, dataAndEvents) {
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      try {
        return!!hash();
      } catch (e) {
        return true;
      }
    };
  }, function(module, dataAndEvents, topic) {
    var out = topic(10);
    var easing = topic(21);
    /** @type {function (Object, string, ?): ?} */
    module.exports = topic(5) ? function(hash, ast, opt_attributes) {
      return out.f(hash, ast, easing(1, opt_attributes));
    } : function(hash, key, opt_attributes) {
      return hash[key] = opt_attributes, hash;
    };
  }, function(module, dataAndEvents, require) {
    var format = require(47);
    var getActual = require(26);
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return format(getActual(hash));
    };
  }, function(module, dataAndEvents, require) {
    var store = require(33)("wks");
    var Block = require(22);
    var c = require(6).Symbol;
    /** @type {boolean} */
    var fn = "function" == typeof c;
    (module.exports = function(hash) {
      return store[hash] || (store[hash] = fn && c[hash] || (fn ? c : Block)("Symbol." + hash));
    }).store = store;
  }, function(dataAndEvents, w, require) {
    /**
     * @param {Object} context
     * @return {undefined}
     */
    function detect(context) {
      var os = {};
      var options = {};
      (0, nodes.each)(self.default.regs, function(rchecked, i) {
        os[i] = rchecked.test(value);
      });
      os.ios = os.iphone || (os.ipad || os.ipod);
      if (os.driverAndroid || os.driverIOS) {
        /** @type {boolean} */
        os.driver = true;
      }
      (0, nodes.each)(r20, function(rtagName, i) {
        if (os[i]) {
          var parts = rtagName.exec(value);
          /** @type {string} */
          var pos = "unkown";
          if (parts) {
            pos = parts[1];
          }
          options[i] = pos;
        }
      });
      options.driver = options.driverAndroid || options.driverIOS;
      context.app = w.app = data = {
        env : os.lite ? "uber" : os.passenger ? "passenger" : os.driver ? "driver" : ln,
        appVersion : options.passenger || (options.lite || options.driver),
        system : os.ios ? "ios" : os.android ? "android" : ln,
        sysVersion : options.ios || options.android,
        fusionKit : os.fusion,
        guarana : os.guarana
      };
    }
    /**
     * @return {?}
     */
    function isAndroid() {
      return "android" === data.system;
    }
    /**
     * @return {?}
     */
    function parse() {
      return "ios" === data.system;
    }
    /**
     * @return {?}
     */
    function respond() {
      return data.fusionKit;
    }
    /**
     * @return {?}
     */
    function onComplete() {
      return data.env !== ln;
    }
    /**
     * @return {?}
     */
    function e() {
      /** @type {number} */
      var l = arguments.length;
      /** @type {Array} */
      var args = Array(l);
      /** @type {number} */
      var i = 0;
      for (;i < l;i++) {
        args[i] = arguments[i];
      }
      switch(args.length) {
        case 2:
          return self.default.compare(data.appVersion, args[0], args[1]);
        case 3:
          return self.default.compare.apply(null, args);
      }
    }
    /**
     * @return {?}
     */
    function map() {
      /** @type {number} */
      var l = arguments.length;
      /** @type {Array} */
      var args = Array(l);
      /** @type {number} */
      var i = 0;
      for (;i < l;i++) {
        args[i] = arguments[i];
      }
      switch(args.length) {
        case 2:
          return self.default.compare(data.sysVersion, args[0], args[1]);
        case 3:
          return self.default.compare.apply(null, args);
      }
    }
    /**
     * @return {?}
     */
    function compare() {
      var value = data.appVersion;
      /** @type {number} */
      var n = arguments.length;
      /** @type {Array} */
      var result = Array(n);
      /** @type {number} */
      var i = 0;
      for (;i < n;i++) {
        result[i] = arguments[i];
      }
      if (0 == result.length) {
        return void 0 === value ? "0" : value;
      }
      var parsedResult;
      switch(result.length) {
        case 1:
          if ((parsedResult = /^\s*([>=<]*)\s*([\d\.]+)\s*$/.exec(result)) && 3 === parsedResult.length) {
            return self.default.compare(value, parsedResult[1] || "=", parsedResult[2]);
          }
          break;
        case 2:
          return self.default.compare(value, result[0], result[1]);
        case 3:
          return self.default.compare.apply(null, result);
      }
      return false;
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    w.app = w.UA = void 0;
    /** @type {function (Object): undefined} */
    w.initApp = detect;
    /** @type {function (): ?} */
    w.isAndroid = isAndroid;
    /** @type {function (): ?} */
    w.isIos = parse;
    /** @type {function (): ?} */
    w.isFusionKit = respond;
    /** @type {function (): ?} */
    w.inApp = onComplete;
    /** @type {function (): ?} */
    w.compareAppVersion = e;
    /** @type {function (): ?} */
    w.compareSysVersion = map;
    /** @type {function (): ?} */
    w.version = compare;
    var nodes = require(0);
    var index = require(1);
    var self = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }(index);
    /** @type {string} */
    var value = w.UA = window.navigator.userAgent.toLowerCase();
    var r20 = {
      passenger : /didi.passenger.*?\/([\d\.]+)/i,
      lite : /didi.lite\/(.+)$/i,
      driverAndroid : /didigsui.*_(.+)_\d+_*/i,
      driverIOS : /ddudriver.*\d_(\d+\.\d+\.\d+)_*/i,
      android : /android ([\d\.]+)/i,
      ios : /iphone os ([\d_]+)/i,
      fusion : /fusionkit\/([\d\.]+)/i
    };
    /** @type {string} */
    var ln = "others";
    var data = w.app = {};
  }, function(module, dataAndEvents) {
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return "object" == typeof hash ? null !== hash : "function" == typeof hash;
    };
  }, function(module, dataAndEvents, require) {
    var getActual = require(17);
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      if (!getActual(hash)) {
        throw TypeError(hash + " is not an object!");
      }
      return hash;
    };
  }, function(module, dataAndEvents, leaf) {
    var HOP = leaf(53);
    var parent = leaf(27);
    /** @type {function (Object): Array.<string>} */
    module.exports = Object.keys || function(hash) {
      return HOP(hash, parent);
    };
  }, function(dataAndEvents, entry) {
    /** @type {function (this:Object, string): boolean} */
    entry.f = {}.propertyIsEnumerable;
  }, function(module, dataAndEvents) {
    /**
     * @param {Object} hash
     * @param {string} key
     * @return {?}
     */
    module.exports = function(hash, key) {
      return{
        enumerable : !(1 & hash),
        configurable : !(2 & hash),
        writable : !(4 & hash),
        value : key
      };
    };
  }, function(module, dataAndEvents) {
    /** @type {number} */
    var count = 0;
    /** @type {number} */
    var id = Math.random();
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return "Symbol(".concat(void 0 === hash ? "" : hash, ")_", (++count + id).toString(36));
    };
  }, function(dataAndEvents, w, require) {
    /**
     * @return {undefined}
     */
    function completed() {
      if (window.DidiJSBridge.init) {
        window.DidiJSBridge.init();
      }
      (0, util.each)(domWaiters, function(method) {
        method(window.DidiJSBridge);
      });
    }
    /**
     * @param {Function} callback
     * @return {undefined}
     */
    function call(callback) {
      if ((0, util.isUndefined)(window.DidiJSBridge)) {
        domWaiters.push(callback);
      } else {
        callback(window.DidiJSBridge);
      }
    }
    /**
     * @param {string} element
     * @param {?} dataAndEvents
     * @param {?} ctrl
     * @return {?}
     */
    function postLink(element, dataAndEvents, ctrl) {
      return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        var error = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : util.noop;
        if (1 === arguments.length) {
          if ((0, util.isFn)(e)) {
            error = e;
            /** @type {string} */
            e = "";
          }
        }
        var value = (0, alias.alias)(element, e, dataAndEvents, ctrl);
        if ((0, Block.supportPrompt)()) {
          (0, Block.promptSend)(value.name, value.param, error);
        } else {
          call(function(params) {
            params.callHandler(value.name, value.param, function(attributes) {
              if ((0, util.isStr)(attributes)) {
                /** @type {*} */
                attributes = JSON.parse(attributes);
              }
              error({
                errno : 0,
                errmg : ""
              }, attributes);
            });
          });
        }
      };
    }
    /**
     * @param {?} type
     * @param {Function} fn
     * @return {undefined}
     */
    function once(type, fn) {
      /**
       * @param {?} one
       * @return {undefined}
       */
      var on = function(one) {
        if (fn) {
          fn({
            errno : 0,
            errmg : ""
          }, one);
        }
      };
      call(function(self) {
        self.registerHandler(type, on);
      });
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (Function): undefined} */
    w.bridgeReady = call;
    /** @type {function (string, ?, ?): ?} */
    w.oldMakeBridgeFn = postLink;
    /** @type {function (?, Function): undefined} */
    w.registerHandler = once;
    var util = require(0);
    var Block = require(128);
    var alias = require(122);
    var nodes = require(1);
    var node = function(type) {
      return type && type.__esModule ? type : {
        default : type
      };
    }(nodes);
    /** @type {Array} */
    var domWaiters = [];
    if (node.default.is("passenger")) {
      (function() {
        if ((0, util.isUndefined)(window.DidiJSBridge)) {
          document.addEventListener("DidiJSBridgeReady", completed, false);
        } else {
          if (window.DidiJSBridge.init) {
            window.DidiJSBridge.init();
          }
        }
      })();
    }
  }, function(module, dataAndEvents, require) {
    /**
     * @param {Array} resultItems
     * @param {Object} value
     * @return {undefined}
     */
    function callback(resultItems, value) {
      /** @type {number} */
      var i = 0;
      for (;i < resultItems.length;i++) {
        var result = resultItems[i];
        var data = files[result.id];
        if (data) {
          data.refs++;
          /** @type {number} */
          var p = 0;
          for (;p < data.parts.length;p++) {
            data.parts[p](result.parts[p]);
          }
          for (;p < result.parts.length;p++) {
            data.parts.push(animate(result.parts[p], value));
          }
        } else {
          /** @type {Array} */
          var collect = [];
          /** @type {number} */
          p = 0;
          for (;p < result.parts.length;p++) {
            collect.push(animate(result.parts[p], value));
          }
          files[result.id] = {
            id : result.id,
            refs : 1,
            parts : collect
          };
        }
      }
    }
    /**
     * @param {Array} text
     * @param {Object} state
     * @return {?}
     */
    function $(text, state) {
      /** @type {Array} */
      var ret = [];
      var parts = {};
      /** @type {number} */
      var i = 0;
      for (;i < text.length;i++) {
        var base = text[i];
        var id = state.base ? base[0] + state.base : base[0];
        var original = base[1];
        var q = base[2];
        var sourceMap = base[3];
        var params = {
          css : original,
          media : q,
          sourceMap : sourceMap
        };
        if (parts[id]) {
          parts[id].parts.push(params);
        } else {
          ret.push(parts[id] = {
            id : id,
            parts : [params]
          });
        }
      }
      return ret;
    }
    /**
     * @param {Object} obj
     * @param {Element} node
     * @return {undefined}
     */
    function after(obj, node) {
      var t = template(obj.insertInto);
      if (!t) {
        throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
      }
      var el = list[list.length - 1];
      if ("top" === obj.insertAt) {
        if (el) {
          if (el.nextSibling) {
            t.insertBefore(node, el.nextSibling);
          } else {
            t.appendChild(node);
          }
        } else {
          t.insertBefore(node, t.firstChild);
        }
        list.push(node);
      } else {
        if ("bottom" !== obj.insertAt) {
          throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        }
        t.appendChild(node);
      }
    }
    /**
     * @param {Node} c
     * @return {?}
     */
    function complete(c) {
      if (null === c.parentNode) {
        return false;
      }
      c.parentNode.removeChild(c);
      /** @type {number} */
      var pos = list.indexOf(c);
      if (pos >= 0) {
        list.splice(pos, 1);
      }
    }
    /**
     * @param {Object} el
     * @return {?}
     */
    function create(el) {
      /** @type {Element} */
      var target = document.createElement("style");
      return el.attrs.type = "text/css", set(target, el.attrs), after(el, target), target;
    }
    /**
     * @param {Object} el
     * @return {?}
     */
    function initialize(el) {
      /** @type {Element} */
      var node = document.createElement("link");
      return el.attrs.type = "text/css", el.attrs.rel = "stylesheet", set(node, el.attrs), after(el, node), node;
    }
    /**
     * @param {Element} element
     * @param {Object} w
     * @return {undefined}
     */
    function set(element, w) {
      Object.keys(w).forEach(function(key) {
        element.setAttribute(key, w[key]);
      });
    }
    /**
     * @param {Object} item
     * @param {Object} element
     * @return {?}
     */
    function animate(item, element) {
      var a;
      var fn;
      var callback;
      var data;
      if (element.transform && item.css) {
        if (!(data = element.transform(item.css))) {
          return function() {
          };
        }
        item.css = data;
      }
      if (element.singleton) {
        /** @type {number} */
        var context = y++;
        a = res || (res = create(element));
        fn = init.bind(null, a, context, false);
        callback = init.bind(null, a, context, true);
      } else {
        if (item.sourceMap && ("function" == typeof URL && ("function" == typeof URL.createObjectURL && ("function" == typeof URL.revokeObjectURL && ("function" == typeof Blob && "function" == typeof btoa))))) {
          a = initialize(element);
          fn = compile.bind(null, a, element);
          /**
           * @return {undefined}
           */
          callback = function() {
            complete(a);
            if (a.href) {
              URL.revokeObjectURL(a.href);
            }
          };
        } else {
          a = create(element);
          fn = f.bind(null, a);
          /**
           * @return {undefined}
           */
          callback = function() {
            complete(a);
          };
        }
      }
      return fn(item), function(result) {
        if (result) {
          if (result.css === item.css && (result.media === item.media && result.sourceMap === item.sourceMap)) {
            return;
          }
          fn(item = result);
        } else {
          callback();
        }
      };
    }
    /**
     * @param {Node} element
     * @param {?} key
     * @param {boolean} success
     * @param {Object} options
     * @return {undefined}
     */
    function init(element, key, success, options) {
      var message = success ? "" : options.css;
      if (element.styleSheet) {
        element.styleSheet.cssText = sendMessage(key, message);
      } else {
        /** @type {Text} */
        var i = document.createTextNode(message);
        var children = element.childNodes;
        if (children[key]) {
          element.removeChild(children[key]);
        }
        if (children.length) {
          element.insertBefore(i, children[key]);
        } else {
          element.appendChild(i);
        }
      }
    }
    /**
     * @param {Node} s
     * @param {Object} el
     * @return {undefined}
     */
    function f(s, el) {
      var css = el.css;
      var src = el.media;
      if (src && s.setAttribute("media", src), s.styleSheet) {
        s.styleSheet.cssText = css;
      } else {
        for (;s.firstChild;) {
          s.removeChild(s.firstChild);
        }
        s.appendChild(document.createTextNode(css));
      }
    }
    /**
     * @param {StyleSheet} o
     * @param {?} tElement
     * @param {Object} options
     * @return {undefined}
     */
    function compile(o, tElement, options) {
      var str = options.css;
      var value = options.sourceMap;
      var proceed = void 0 === tElement.convertToAbsoluteUrls && value;
      if (tElement.convertToAbsoluteUrls || proceed) {
        str = toString(str);
      }
      if (value) {
        str += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(value)))) + " */";
      }
      /** @type {Blob} */
      var blob = new Blob([str], {
        type : "text/css"
      });
      var url = o.href;
      o.href = URL.createObjectURL(blob);
      if (url) {
        URL.revokeObjectURL(url);
      }
    }
    var files = {};
    var getActual = function(matcherFunction) {
      var returnValue;
      return function() {
        return void 0 === returnValue && (returnValue = matcherFunction.apply(this, arguments)), returnValue;
      };
    }(function() {
      return window && (document && (document.all && !window.atob));
    });
    var template = function(callback) {
      var args = {};
      return function(index) {
        return void 0 === args[index] && (args[index] = callback.call(this, index)), args[index];
      };
    }(function(querySelector) {
      return document.querySelector(querySelector);
    });
    /** @type {null} */
    var res = null;
    /** @type {number} */
    var y = 0;
    /** @type {Array} */
    var list = [];
    var toString = require(77);
    /**
     * @param {Object} hash
     * @param {Object} key
     * @return {?}
     */
    module.exports = function(hash, key) {
      if ("undefined" != typeof DEBUG && (DEBUG && "object" != typeof document)) {
        throw new Error("The style-loader cannot be used in a non-browser environment");
      }
      key = key || {};
      key.attrs = "object" == typeof key.attrs ? key.attrs : {};
      if (!key.singleton) {
        key.singleton = getActual();
      }
      if (!key.insertInto) {
        /** @type {string} */
        key.insertInto = "head";
      }
      if (!key.insertAt) {
        /** @type {string} */
        key.insertAt = "bottom";
      }
      var resultItems = $(hash, key);
      return callback(resultItems, key), function(el) {
        /** @type {Array} */
        var items = [];
        /** @type {number} */
        var i = 0;
        for (;i < resultItems.length;i++) {
          var result = resultItems[i];
          var item = files[result.id];
          item.refs--;
          items.push(item);
        }
        if (el) {
          callback($(el, key), key);
        }
        /** @type {number} */
        i = 0;
        for (;i < items.length;i++) {
          item = items[i];
          if (0 === item.refs) {
            /** @type {number} */
            var j = 0;
            for (;j < item.parts.length;j++) {
              item.parts[j]();
            }
            delete files[item.id];
          }
        }
      };
    };
    var sendMessage = function() {
      /** @type {Array} */
      var files = [];
      return function(name, file) {
        return files[name] = file, files.filter(Boolean).join("\n");
      };
    }();
  }, function(module, dataAndEvents) {
    /**
     * @param {(Array|Float32Array)} target
     * @param {boolean} val
     * @return {?}
     */
    function include(target, val) {
      var prefix = target[1] || "";
      var src = target[3];
      if (!src) {
        return prefix;
      }
      if (val && "function" == typeof btoa) {
        var func = compile(src);
        return[prefix].concat(src.sources.map(function(dataAndEvents) {
          return "/*# sourceURL=" + src.sourceRoot + dataAndEvents + " */";
        })).concat([func]).join("\n");
      }
      return[prefix].join("\n");
    }
    /**
     * @param {Object} files
     * @return {?}
     */
    function compile(files) {
      return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(files)))) + " */";
    }
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      /** @type {Array} */
      var array = [];
      return array.toString = function() {
        return this.map(function(target) {
          var actual = include(target, hash);
          return target[2] ? "@media " + target[2] + "{" + actual + "}" : actual;
        }).join("");
      }, array.i = function(obj, item) {
        if ("string" == typeof obj) {
          /** @type {Array} */
          obj = [[null, obj, ""]];
        }
        var map = {};
        /** @type {number} */
        var i = 0;
        for (;i < this.length;i++) {
          var objUid = this[i][0];
          if ("number" == typeof objUid) {
            /** @type {boolean} */
            map[objUid] = true;
          }
        }
        /** @type {number} */
        i = 0;
        for (;i < obj.length;i++) {
          var val = obj[i];
          if (!("number" == typeof val[0] && map[val[0]])) {
            if (item && !val[2]) {
              /** @type {Function} */
              val[2] = item;
            } else {
              if (item) {
                /** @type {string} */
                val[2] = "(" + val[2] + ") and (" + item + ")";
              }
            }
            array.push(val);
          }
        }
      }, array;
    };
  }, function(module, dataAndEvents) {
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      if (void 0 == hash) {
        throw TypeError("Can't call method on  " + hash);
      }
      return hash;
    };
  }, function(module, dataAndEvents) {
    /** @type {Array.<string>} */
    module.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function(module, dataAndEvents) {
    module.exports = {};
  }, function(module, dataAndEvents) {
    /** @type {boolean} */
    module.exports = true;
  }, function(dataAndEvents, object) {
    object.f = Object.getOwnPropertySymbols;
  }, function(module, dataAndEvents, require) {
    var template = require(10).f;
    var getActual = require(9);
    var ast = require(15)("toStringTag");
    /**
     * @param {Object} hash
     * @param {string} key
     * @param {?} opt_attributes
     * @return {undefined}
     */
    module.exports = function(hash, key, opt_attributes) {
      if (hash) {
        if (!getActual(hash = opt_attributes ? hash : hash.prototype, ast)) {
          template(hash, ast, {
            configurable : true,
            value : key
          });
        }
      }
    };
  }, function(module, dataAndEvents, require) {
    var keys = require(33)("keys");
    var getActual = require(22);
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return keys[hash] || (keys[hash] = getActual(hash));
    };
  }, function(module, dataAndEvents, require) {
    var Block = require(6);
    var cache = Block["__core-js_shared__"] || (Block["__core-js_shared__"] = {});
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return cache[hash] || (cache[hash] = {});
    };
  }, function(module, dataAndEvents) {
    /** @type {function (*): number} */
    var ceil = Math.ceil;
    /** @type {function (*): number} */
    var floor = Math.floor;
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return isNaN(hash = +hash) ? 0 : (hash > 0 ? floor : ceil)(hash);
    };
  }, function(module, dataAndEvents, require) {
    var getActual = require(17);
    /**
     * @param {Object} hash
     * @param {string} key
     * @return {?}
     */
    module.exports = function(hash, key) {
      if (!getActual(hash)) {
        return hash;
      }
      var valueOf;
      var node;
      if (key && ("function" == typeof(valueOf = hash.toString) && !getActual(node = valueOf.call(hash)))) {
        return node;
      }
      if ("function" == typeof(valueOf = hash.valueOf) && !getActual(node = valueOf.call(hash))) {
        return node;
      }
      if (!key && ("function" == typeof(valueOf = hash.toString) && !getActual(node = valueOf.call(hash)))) {
        return node;
      }
      throw TypeError("Can't convert object to primitive value");
    };
  }, function(module, dataAndEvents, require) {
    var nodes = require(6);
    var runtime = require(4);
    var Block = require(29);
    var m = require(37);
    var page = require(10).f;
    /**
     * @param {Object} hash
     * @return {undefined}
     */
    module.exports = function(hash) {
      var w = runtime.Symbol || (runtime.Symbol = Block ? {} : nodes.Symbol || {});
      if (!("_" == hash.charAt(0))) {
        if (!(hash in w)) {
          page(w, hash, {
            value : m.f(hash)
          });
        }
      }
    };
  }, function(dataAndEvents, el, trim) {
    el.f = trim(15);
  }, function(module, dataAndEvents) {
    var dom;
    dom = function() {
      return this;
    }();
    try {
      dom = dom || (Function("return this")() || (0, eval)("this"));
    } catch (e) {
      if ("object" == typeof window) {
        /** @type {Window} */
        dom = window;
      }
    }
    module.exports = dom;
  }, function(module, dataAndEvents, $sanitize) {
    module.exports = {
      default : $sanitize(82),
      __esModule : true
    };
  }, function(dataAndEvents, w, deepDataAndEvents) {
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {number} */
    w.ERR_OK = 0;
    /** @type {number} */
    w.ERR_FUNCTION_NOT_EXIST = 1001;
    /** @type {number} */
    w.ERR_CALLBACK_ERROR = 1002;
    /** @type {number} */
    w.ERR_ENV_ERROR = 2001;
  }, function(dataAndEvents, w, deepDataAndEvents) {
    /**
     * @param {Array} context
     * @param {(Array|string)} a
     * @return {?}
     */
    function f(context, a) {
      var f = context[0];
      var v = context[1];
      a = context[2].concat(a);
      try {
        return f.apply(v, a);
      } catch (e) {
        setTimeout(function() {
          throw e;
        }, 0);
      }
    }
    /**
     * @param {Array} old
     * @param {number} name
     * @return {?}
     */
    function filter(old, name) {
      /** @type {Array} */
      var event = new Array(name);
      for (;name--;) {
        event[name] = old[name];
      }
      return event;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    function flush(name) {
      var grid = event[name];
      if (!grid) {
        return true;
      }
      var v = grid.cbs.length;
      var toReturn = filter(grid.cbs, v);
      /** @type {boolean} */
      var rv = true;
      /** @type {number} */
      var $_len = arguments.length;
      /** @type {Array} */
      var args = Array($_len > 1 ? $_len - 1 : 0);
      /** @type {number} */
      var $_i = 1;
      for (;$_i < $_len;$_i++) {
        args[$_i - 1] = arguments[$_i];
      }
      /** @type {number} */
      var i = 0;
      for (;i < v;i++) {
        if (toReturn[i]) {
          /** @type {boolean} */
          rv = false !== f(toReturn[i], args) && rv;
        }
      }
      return!!rv;
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var event = {};
    w.events = {
      /**
       * @param {?} types
       * @param {Function} fn
       * @param {?} id
       * @return {undefined}
       */
      on : function(types, fn, id) {
        var args = event[types];
        if (!args) {
          event[types] = args = {
            args : null,
            cbs : []
          };
        }
        /** @type {number} */
        var len = arguments.length;
        /** @type {Array} */
        var result = Array(len > 3 ? len - 3 : 0);
        /** @type {number} */
        var i = 3;
        for (;i < len;i++) {
          result[i - 3] = arguments[i];
        }
        /** @type {Array} */
        var val = [fn, id, result];
        /** @type {null} */
        var p = args.args;
        if (p) {
          f(val, p);
        } else {
          args.cbs.push(val);
        }
      },
      /**
       * @param {?} fn
       * @param {?} opt_attributes
       * @return {?}
       */
      un : function(fn, opt_attributes) {
        var base = event[fn];
        if (!base) {
          return true;
        }
        if (1 === arguments.length) {
          /** @type {Array} */
          base.cbs = [];
        } else {
          var finalCandidates = base.cbs;
          var len = finalCandidates.length;
          for (;len--;) {
            if (finalCandidates[len]) {
              if (finalCandidates[len][0] === opt_attributes) {
                finalCandidates.splice(len, 1);
              }
            }
          }
        }
      },
      /**
       * @param {?} data
       * @param {Array} evt
       * @return {?}
       */
      emit : function(data, evt) {
        return flush.apply(this, arguments);
      },
      /**
       * @param {?} i
       * @return {undefined}
       */
      done : function(i) {
        /** @type {number} */
        var $_len = arguments.length;
        /** @type {Array} */
        var args = Array($_len > 1 ? $_len - 1 : 0);
        /** @type {number} */
        var $_i = 1;
        for (;$_i < $_len;$_i++) {
          args[$_i - 1] = arguments[$_i];
        }
        var ev = event[i];
        if (!ev) {
          event[i] = ev = {
            args : args,
            cbs : []
          };
        }
        /** @type {Array} */
        var context = ev.cbs;
        /** @type {number} */
        var j = context.length;
        flush.apply(this, arguments);
        /** @type {Array} */
        ev.args = args;
        /** @type {Array.<?>} */
        ev.cbs = context.slice(j);
      },
      /**
       * @param {?} e
       * @return {?}
       */
      undo : function(e) {
        var input = event[e];
        if (!input) {
          return false;
        }
        /** @type {null} */
        input.args = null;
      }
    };
  }, function(dataAndEvents, w, deepDataAndEvents) {
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    (function(i, opt_attributes) {
      if (window.SDKCONFIG && window.SDKCONFIG.rem) {
        /** @type {HTMLDocument} */
        var d = document;
        /** @type {Window} */
        var target = window;
        /** @type {Element} */
        var container = d.documentElement;
        /** @type {string} */
        var resizeEvent = "orientationchange" in window ? "orientationchange" : "resize";
        /** @type {null} */
        var tref = null;
        /**
         * @return {undefined}
         */
        var draw = function() {
          /** @type {number} */
          var max = container.getBoundingClientRect().width || container.clientWidth;
          if (max) {
            /** @type {string} */
            container.style.fontSize = i * (max / opt_attributes) + "px";
          }
        };
        draw();
        target.addEventListener(resizeEvent, function() {
          clearTimeout(tref);
          /** @type {number} */
          tref = setTimeout(function() {
            draw();
          }, 10);
        }, false);
      }
    })(100, 750);
    w.default = {
      baxi : "static.99taxis.mobi" === window.location.host
    };
  }, function(module, dataAndEvents, $) {
    /**
     * @param {string} obj
     * @return {?}
     */
    function isPlainObject(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      var item = {};
      if (null != obj) {
        var key;
        for (key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            item[key] = obj[key];
          }
        }
      }
      return item.default = obj, item;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    function parse(url) {
      return url && url.__esModule ? url : {
        default : url
      };
    }
    var url = $(3);
    var opts = parse(url);
    var copy = $(0);
    var isObject = isPlainObject(copy);
    var content = $(1);
    var obj = parse(content);
    var existing = $(41);
    var testElement = isPlainObject(existing);
    var src = $(2);
    var out = parse(src);
    var v = $(7);
    var c = parse(v);
    (0, opts.default)(isObject, testElement, {
      ua : obj.default.ua
    }, {
      is : obj.default.is
    }, out.default, {
      sdkUrlConfig : c.default
    });
    module.exports = isObject;
  }, function(module, dataAndEvents) {
    /** @type {function (this:*): string} */
    var ostring = {}.toString;
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return ostring.call(hash).slice(8, -1);
    };
  }, function(module, dataAndEvents, clamp) {
    var y = clamp(17);
    var d = clamp(6).document;
    var isHashPath = y(d) && y(d.createElement);
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return isHashPath ? d.createElement(hash) : {};
    };
  }, function(module, dataAndEvents, $sanitize) {
    /** @type {boolean} */
    module.exports = !$sanitize(5) && !$sanitize(12)(function() {
      return 7 != Object.defineProperty($sanitize(45)("div"), "a", {
        /**
         * @return {?}
         */
        get : function() {
          return 7;
        }
      }).a;
    });
  }, function(module, dataAndEvents, format) {
    var f = format(44);
    /** @type {Function} */
    module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(hash) {
      return "String" == f(hash) ? hash.split("") : Object(hash);
    };
  }, function(module, dataAndEvents, require) {
    var Block = require(29);
    var inspect = require(11);
    var assert = require(54);
    var b = require(13);
    var a = require(9);
    var results = require(28);
    var inherits = require(96);
    var getActual = require(31);
    var objDisplay = require(101);
    var locals = require(15)("iterator");
    /** @type {boolean} */
    var program = !([].keys && "next" in [].keys());
    /**
     * @return {?}
     */
    var content = function() {
      return this;
    };
    /**
     * @param {Object} hash
     * @param {string} key
     * @param {?} opt_attributes
     * @param {?} classProps
     * @param {Function} method
     * @param {(Function|string)} raw
     * @param {?} chai
     * @return {?}
     */
    module.exports = function(hash, key, opt_attributes, classProps, method, raw, chai) {
      inherits(opt_attributes, key, classProps);
      var testSource;
      var name;
      var self;
      /**
       * @param {string} key
       * @return {?}
       */
      var callback = function(key) {
        if (!program && key in obj) {
          return obj[key];
        }
        switch(key) {
          case "keys":
          ;
          case "values":
            return function() {
              return new opt_attributes(this, key);
            };
        }
        return function() {
          return new opt_attributes(this, key);
        };
      };
      /** @type {string} */
      var file = key + " Iterator";
      /** @type {boolean} */
      var err = "values" == method;
      /** @type {boolean} */
      var inverse = false;
      var obj = hash.prototype;
      var value = obj[locals] || (obj["@@iterator"] || method && obj[method]);
      var result = value || callback(method);
      var entries = method ? err ? callback("entries") : result : void 0;
      var newValue = "Array" == key ? obj.entries || value : value;
      if (newValue && ((self = objDisplay(newValue.call(new hash))) !== Object.prototype && (self.next && (getActual(self, file, true), Block || (a(self, locals) || b(self, locals, content))))), err && (value && ("values" !== value.name && (inverse = true, result = function() {
        return value.call(this);
      }))), Block && !chai || (!program && (!inverse && obj[locals]) || b(obj, locals, result)), results[key] = result, results[file] = content, method) {
        if (testSource = {
          values : err ? result : callback("values"),
          keys : raw ? result : callback("keys"),
          entries : entries
        }, chai) {
          for (name in testSource) {
            if (!(name in obj)) {
              assert(obj, name, testSource[name]);
            }
          }
        } else {
          inspect(inspect.P + inspect.F * (program || inverse), key, testSource);
        }
      }
      return testSource;
    };
  }, function(module, dataAndEvents, require) {
    var ast = require(22)("meta");
    var render = require(17);
    var trim = require(9);
    var f = require(10).f;
    /** @type {number} */
    var O = 0;
    /** @type {function (Object): boolean} */
    var String = Object.isExtensible || function() {
      return true;
    };
    /** @type {boolean} */
    var c = !require(12)(function() {
      return String(Object.preventExtensions({}));
    });
    /**
     * @param {Object} w
     * @return {undefined}
     */
    var isString = function(w) {
      f(w, ast, {
        value : {
          i : "O" + ++O,
          w : {}
        }
      });
    };
    /**
     * @param {string} str
     * @param {?} idt
     * @return {?}
     */
    var toString = function(str, idt) {
      if (!render(str)) {
        return "symbol" == typeof str ? str : ("string" == typeof str ? "S" : "P") + str;
      }
      if (!trim(str, ast)) {
        if (!String(str)) {
          return "F";
        }
        if (!idt) {
          return "E";
        }
        isString(str);
      }
      return str[ast].i;
    };
    /**
     * @param {Object} value
     * @param {?} str
     * @return {?}
     */
    var isEmpty = function(value, str) {
      if (!trim(value, ast)) {
        if (!String(value)) {
          return true;
        }
        if (!str) {
          return false;
        }
        isString(value);
      }
      return value[ast].w;
    };
    /**
     * @param {?} v
     * @return {?}
     */
    var setter = function(v) {
      return c && (NEED.NEED && (String(v) && (!trim(v, ast) && isString(v)))), v;
    };
    var NEED = module.exports = {
      KEY : ast,
      NEED : false,
      /** @type {function (string, ?): ?} */
      fastKey : toString,
      /** @type {function (Object, ?): ?} */
      getWeak : isEmpty,
      /** @type {function (?): ?} */
      onFreeze : setter
    };
  }, function(module, dataAndEvents, random) {
    var template = random(18);
    var promote = random(51);
    var tokenized = random(27);
    var clientId = random(32)("IE_PROTO");
    /**
     * @return {undefined}
     */
    var config = function() {
    };
    /**
     * @return {?}
     */
    var CodeMirror = function() {
      var doc;
      var ifr = random(45)("iframe");
      var index = tokenized.length;
      /** @type {string} */
      ifr.style.display = "none";
      random(94).appendChild(ifr);
      /** @type {string} */
      ifr.src = "javascript:";
      doc = ifr.contentWindow.document;
      doc.open();
      doc.write("<script>document.F=Object\x3c/script>");
      doc.close();
      CodeMirror = doc.F;
      for (;index--;) {
        delete CodeMirror.prototype[tokenized[index]];
      }
      return CodeMirror();
    };
    /** @type {function ((Object|null), (Object|null)=): Object} */
    module.exports = Object.create || function(hash, key) {
      var dataCache;
      return null !== hash ? (config.prototype = template(hash), dataCache = new config, config.prototype = null, dataCache[clientId] = hash) : dataCache = CodeMirror(), void 0 === key ? dataCache : promote(dataCache, key);
    };
  }, function(module, dataAndEvents, require) {
    var jQuery = require(10);
    var getActual = require(18);
    var inspect = require(19);
    /** @type {Function} */
    module.exports = require(5) ? Object.defineProperties : function(hash, key) {
      getActual(hash);
      var p;
      var str = inspect(key);
      var len = str.length;
      /** @type {number} */
      var j = 0;
      for (;len > j;) {
        jQuery.f(hash, p = str[j++], key[p]);
      }
      return hash;
    };
  }, function(dataAndEvents, entry, func) {
    var go = func(53);
    var len = func(27).concat("length", "prototype");
    /** @type {function (Object): Array.<string>} */
    entry.f = Object.getOwnPropertyNames || function(hash) {
      return go(hash, len);
    };
  }, function(module, dataAndEvents, require) {
    var inspect = require(9);
    var getActual = require(14);
    var callback = require(91)(false);
    var e = require(32)("IE_PROTO");
    /**
     * @param {Object} hash
     * @param {string} key
     * @return {?}
     */
    module.exports = function(hash, key) {
      var i;
      var actual = getActual(hash);
      /** @type {number} */
      var bs = 0;
      /** @type {Array} */
      var errors = [];
      for (i in actual) {
        if (i != e) {
          if (inspect(actual, i)) {
            errors.push(i);
          }
        }
      }
      for (;key.length > bs;) {
        if (inspect(actual, i = key[bs++])) {
          if (!~callback(errors, i)) {
            errors.push(i);
          }
        }
      }
      return errors;
    };
  }, function(module, dataAndEvents, factory) {
    module.exports = factory(13);
  }, function(module, dataAndEvents, require) {
    var getActual = require(26);
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return Object(getActual(hash));
    };
  }, function(module, dataAndEvents, $sanitize) {
    module.exports = {
      default : $sanitize(87),
      __esModule : true
    };
  }, function(dataAndEvents, obj, deepDataAndEvents) {
    /** @type {boolean} */
    obj.__esModule = true;
    /**
     * @param {?} value
     * @param {Function} type
     * @return {undefined}
     */
    obj.default = function(value, type) {
      if (!(value instanceof type)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
  }, function(dataAndEvents, obj, keys) {
    /** @type {boolean} */
    obj.__esModule = true;
    var props = keys(118);
    var opts = function(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }(props);
    obj.default = function() {
      /**
       * @param {Function} value
       * @param {Array} obj
       * @return {undefined}
       */
      function defineProperty(value, obj) {
        /** @type {number} */
        var i = 0;
        for (;i < obj.length;i++) {
          var property = obj[i];
          property.enumerable = property.enumerable || false;
          /** @type {boolean} */
          property.configurable = true;
          if ("value" in property) {
            /** @type {boolean} */
            property.writable = true;
          }
          (0, opts.default)(value, property.key, property);
        }
      }
      return function(ctor, element, key) {
        return element && defineProperty(ctor.prototype, element), key && defineProperty(ctor, key), ctor;
      };
    }();
  }, function(dataAndEvents, obj, compile) {
    /**
     * @param {?} options
     * @return {?}
     */
    function fire(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    /** @type {boolean} */
    obj.__esModule = true;
    var memory = compile(117);
    var opts = fire(memory);
    var element = compile(119);
    var action = fire(element);
    /**
     * @param {?} data
     * @param {?} value
     * @return {?}
     */
    obj.default = function(data, value) {
      return(0, action.default)((0, opts.default)(data, {
        raw : {
          value : (0, action.default)(value)
        }
      }));
    };
  }, function(dataAndEvents, obj, require) {
    /**
     * @param {?} id
     * @return {?}
     */
    function create(id) {
      return id && id.__esModule ? id : {
        default : id
      };
    }
    /** @type {boolean} */
    obj.__esModule = true;
    var i = require(120);
    var node = create(i);
    var item = require(56);
    var object = create(item);
    /** @type {function (string): ?} */
    var ownProp = "function" == typeof object.default && "symbol" == typeof node.default ? function(attr) {
      return typeof attr;
    } : function(attr) {
      return attr && ("function" == typeof object.default && (attr.constructor === object.default && attr !== object.default.prototype)) ? "symbol" : typeof attr;
    };
    /** @type {function (string): ?} */
    obj.default = "function" == typeof object.default && "symbol" === ownProp(node.default) ? function(protoProps) {
      return void 0 === protoProps ? "undefined" : ownProp(protoProps);
    } : function(protoProps) {
      return protoProps && ("function" == typeof object.default && (protoProps.constructor === object.default && protoProps !== object.default.prototype)) ? "symbol" : void 0 === protoProps ? "undefined" : ownProp(protoProps);
    };
  }, function(dataAndEvents, w, format) {
    /**
     * @param {?} type
     * @return {?}
     */
    function String(type) {
      return type && type.__esModule ? type : {
        default : type
      };
    }
    /**
     * @param {?} option
     * @param {?} random
     * @return {undefined}
     */
    function Map(option, random) {
      out.default.sdkReady("DPay", originalEvent, function(data) {
        if (data.constructor === Error) {
          random(data);
        } else {
          data.init(option);
        }
      });
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (?, ?): undefined} */
    w.sdk = Map;
    var text = format(2);
    var out = String(text);
    var obj = format(7);
    var self = String(obj);
    var originalEvent = self.default.internal.paySDK;
  }, function(dataAndEvents, w, format) {
    /**
     * @param {?} type
     * @return {?}
     */
    function String(type) {
      return type && type.__esModule ? type : {
        default : type
      };
    }
    /**
     * @param {?} event
     * @return {undefined}
     */
    function respond(event) {
      out.default.sdkReady("shareSDK", originalEvent, function(eventUtil) {
        eventUtil.setShare(event);
      });
    }
    /**
     * @param {?} protoProps
     * @return {undefined}
     */
    function extend(protoProps) {
      out.default.sdkReady("shareSDK", originalEvent, function(_) {
        _.invokeShare(protoProps);
      });
    }
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    function clone(deepDataAndEvents) {
      out.default.sdkReady("shareSDK", originalEvent, function(pt2) {
        pt2.wx(deepDataAndEvents);
      });
    }
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    function i(deepDataAndEvents) {
      out.default.sdkReady("shareSDK", originalEvent, function(dataAndEvents) {
        dataAndEvents.alipay(deepDataAndEvents);
      });
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (?): undefined} */
    w.setShare = respond;
    /** @type {function (?): undefined} */
    w.invokeShare = extend;
    /** @type {function (?): undefined} */
    w.wx = clone;
    /** @type {function (?): undefined} */
    w.alipay = i;
    var text = format(2);
    var out = String(text);
    var obj = format(7);
    var self = String(obj);
    var originalEvent = self.default.internal.shareSDK;
  }, function(dataAndEvents, w, require) {
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var url = require(60);
    var obj = function(url) {
      return url && url.__esModule ? url : {
        default : url
      };
    }(url);
    w.default = {
      /**
       * @param {?} properties
       * @param {?} opt_attributes
       * @return {?}
       */
      css : function(properties, opt_attributes) {
        if ("string" == typeof opt_attributes) {
          return this.getStyle(properties, opt_attributes);
        }
        if ("object" == (void 0 === opt_attributes ? "undefined" : (0, obj.default)(opt_attributes))) {
          /** @type {string} */
          var cssText = "";
          var part;
          for (part in opt_attributes) {
            cssText += part + ":" + opt_attributes[part] + ";";
          }
          properties.style.cssText += cssText;
        }
      },
      /**
       * @param {Element} obj
       * @param {string} prop
       * @return {?}
       */
      getStyle : function(obj, prop) {
        return obj.style[this.camelize(prop)] || getComputedStyle(obj, "").getPropertyValue(prop);
      },
      /**
       * @param {string} str
       * @return {?}
       */
      camelize : function(str) {
        var oStringList = str.split("-");
        var len = oStringList.length;
        if (1 == len) {
          return oStringList[0];
        }
        var camelized = "-" == this.charAt(0) ? oStringList[0].charAt(0).toUpperCase() + oStringList[0].substring(1) : oStringList[0];
        /** @type {number} */
        var i = 1;
        for (;i < len;i++) {
          cameplize += oStringList[i].charAt(0).toUpperCase() + oStringList[i].substring(1);
        }
        return camelized;
      }
    };
  }, function(dataAndEvents, w, proceed) {
    /**
     * @param {Array} array
     * @return {?}
     */
    function map(array) {
      /** @type {number} */
      var len = arguments.length;
      /** @type {Array} */
      var args = Array(len > 1 ? len - 1 : 0);
      /** @type {number} */
      var i = 1;
      for (;i < len;i++) {
        args[i - 1] = arguments[i];
      }
      /** @type {Array} */
      var eventPath = [];
      return array.reduce(function(result, chunk, f) {
        if ((eventPath.length > 0 && eventPath[eventPath.length - 1] == hex || 0 == eventPath.length) && (result += chunk), args.hasOwnProperty(f)) {
          var format = args[f];
          if (format === hex || format === hex6) {
            eventPath.push(format);
          } else {
            if (format === time) {
              eventPath.pop();
            } else {
              if (eventPath[eventPath.length - 1] == hex) {
                result += String(args[f]);
              }
            }
          }
        }
        return result;
      }, "");
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    w.helpers = w.template = void 0;
    var value = proceed(56);
    var obj = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }(value);
    var hex = (0, obj.default)("blockSentinel");
    var hex6 = (0, obj.default)("ignoreBlockSentinel");
    var time = (0, obj.default)("endBlockSentinel");
    var params = {
      /**
       * @param {?} t
       * @param {?} e
       * @return {?}
       */
      if : function(t, e) {
        if (arguments.length > 2) {
          if (void 0 !== arguments[2]) {
            arguments[2];
          }
        }
        return t ? hex : hex6;
      },
      /**
       * @return {?}
       */
      end : function() {
        return time;
      },
      /**
       * @param {?} data
       * @param {?} dataAndEvents
       * @param {?} condition
       * @return {?}
       */
      unless : function(data, dataAndEvents, condition) {
        return data ? hex6 : hex;
      },
      /**
       * @param {?} name
       * @param {?} fn
       * @return {undefined}
       */
      registerHelper : function(name, fn) {
        params[name] = fn;
      }
    };
    /** @type {function (Array): ?} */
    w.template = map;
    w.helpers = params;
  }, function(dataAndEvents, w, deepDataAndEvents) {
    /**
     * @param {string} name
     * @return {?}
     */
    function getCookie(name) {
      var matches;
      /** @type {RegExp} */
      var URI_REF = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      return matches = document.cookie.match(URI_REF), matches ? decodeURIComponent(matches[2]) : null;
    }
    /**
     * @param {?} key
     * @param {?} url
     * @return {undefined}
     */
    function setCookie(key, url) {
      var scope = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
      /** @type {Date} */
      var exp = new Date;
      /** @type {Array} */
      var name = [];
      exp.setTime(exp.getTime() + 2592E6);
      exp = scope.exp || exp;
      url = window.encodeURIComponent ? window.encodeURIComponent(url) : url;
      /** @type {Array} */
      name = [key, "=", url, ";expires=" + exp.toGMTString(), scope.path ? ";path=" + scope.path : "", scope.domain ? ";domain=" + scope.domain : ""];
      /** @type {string} */
      document.cookie = name.join("");
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (string): ?} */
    w.getCookie = getCookie;
    /** @type {function (?, ?): undefined} */
    w.setCookie = setCookie;
  }, function(module, dataAndEvents, deepDataAndEvents) {
    /**
     * @param {?} url
     * @return {?}
     */
    function createFrame(url) {
      /** @type {Element} */
      var iframe = document.createElement("IFRAME");
      return iframe.style.display = "none", iframe.src = url, document.body.appendChild(iframe), iframe;
    }
    module.exports = {
      /** @type {function (?): ?} */
      createFrame : createFrame
    };
  }, function(dataAndEvents, w, require) {
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var nodes = require(0);
    var config = {
      /**
       * @param {string} url
       * @return {?}
       */
      decode : function(url) {
        url = url || window.location.href;
        /** @type {Element} */
        var a = document.createElement("a");
        return a.href = url, {
          source : url,
          protocol : a.protocol.replace(":", ""),
          host : a.hostname,
          port : a.port,
          query : a.search,
          params : function() {
            var captures;
            var params = {};
            var values = a.search.replace(/^\?/, "").split("&");
            var valuesLen = values.length;
            /** @type {number} */
            var i = 0;
            for (;i < valuesLen;i++) {
              if (values[i]) {
                captures = values[i].split("=");
                /** @type {string} */
                params[decodeURIComponent(captures[0])] = decodeURIComponent(values[i].substr(captures[0].length + 1));
              }
            }
            return params;
          }(),
          file : (a.pathname.match(/\/([^\/?#]+)$/i) || [, ""])[1],
          hash : a.hash.replace("#", ""),
          path : a.pathname.replace(/^([^\/])/, "/$1"),
          relative : (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ""])[1],
          segments : a.pathname.replace(/^\//, "").split("/")
        };
      },
      /**
       * @param {Object} options
       * @return {?}
       */
      encode : function(options) {
        /** @type {Array} */
        var test = [];
        /** @type {Array} */
        var leaks = [];
        return test.push(options.protocol, "://"), test.push(options.host), options.port && test.push(":", options.port), test.push(options.path), (0, nodes.each)(options.params, function(sectionName, key) {
          if (null !== sectionName) {
            leaks.push(encodeURIComponent(key) + "=" + encodeURIComponent(sectionName));
          }
        }), leaks.length > 0 && test.push("?", leaks.join("&")), options.hash && test.push("#", options.hash), test.join("");
      },
      /**
       * @param {string} str
       * @param {string} url
       * @return {?}
       */
      get : function(str, url) {
        if (0 === arguments.length) {
          return config.decode();
        }
        var old = {};
        var destElements = str.split(",");
        var req = config.decode(url || window.location.href);
        return(0, nodes.each)(destElements, function(name, dataAndEvents) {
          if (req.params[name]) {
            if (1 == destElements.length) {
              return old = req.params[name], false;
            }
            old[name] = req.params[name];
          } else {
            if (1 == destElements.length) {
              return old = null, false;
            }
            /** @type {null} */
            old[name] = null;
          }
        }), old;
      },
      /**
       * @param {string} path
       * @param {Object} var_args
       * @return {?}
       */
      build : function(path, var_args) {
        var route = config.decode(path);
        return(0, nodes.each)(var_args || {}, function(offsetPosition, i) {
          /** @type {Function} */
          route.params[i] = offsetPosition;
        }), config.encode(route);
      },
      /**
       * @param {Text} c
       * @param {Object} e
       * @return {?}
       */
      weixin : function(c, e) {
        c = config.build(c, e);
        return c;
      },
      /**
       * @param {string} requestUrl
       * @return {?}
       */
      https : function(requestUrl) {
        return requestUrl.replace(/^http:/, "");
      },
      /**
       * @param {boolean} selector
       * @return {?}
       */
      query : function(selector) {
        return selector ? config.get(selector) : config.decode().params;
      }
    };
    w.default = config;
  }, function(dataAndEvents, w, $sanitize) {
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var udataCur = $sanitize(133);
    var self = function(value) {
      return value && value.__esModule ? value : {
        default : value
      };
    }(udataCur);
    w.default = self.default;
  }, function(dataAndEvents, w, $sanitize) {
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var udataCur = $sanitize(135);
    var self = function(value) {
      return value && value.__esModule ? value : {
        default : value
      };
    }(udataCur);
    w.default = self.default;
  }, function(dataAndEvents, w, parse) {
    /**
     * @param {?} value
     * @return {?}
     */
    function lookupIterator(value) {
      return value && value.__esModule ? value : {
        default : value
      };
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    w.pay = void 0;
    var url = parse(143);
    var obj = lookupIterator(url);
    var value = parse(140);
    var iterator = lookupIterator(value);
    var respond = {
      uni : obj.default.uni,
      one : iterator.default.one
    };
    w.pay = respond;
  }, function(dataAndEvents, w, valueAccessor) {
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    w.alipay = w.wx = w.invokeShare = w.setShare = void 0;
    var arg = valueAccessor(147);
    var value = valueAccessor(145);
    w.setShare = arg.setShare;
    w.invokeShare = arg.invokeShare;
    w.wx = value.wx;
    w.alipay = value.alipay;
  }, function(module, dataAndEvents, require) {
    /**
     * @param {?} type
     * @return {?}
     */
    function Event(type) {
      return type && type.__esModule ? type : {
        default : type
      };
    }
    require(74);
    var type = require(42);
    var cycle = (Event(type), require(149));
    var self = Event(cycle);
    var complete = require(150);
    var Y = Event(complete);
    /** @type {null} */
    var clone = null;
    var Dialog = {
      Toast : Y.default,
      /**
       * @param {string} text
       * @return {?}
       */
      loading : function(text) {
        var dur = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2E3;
        var activeItem = new Y.default({
          icon : "loading",
          msg : text,
          duration : dur,
          showClass : "D-ui-toast-show-center",
          className : "D-ui-toast-center"
        });
        return activeItem.show(), activeItem;
      },
      /**
       * @param {string} config
       * @return {?}
       */
      tips : function(config) {
        var dur = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2E3;
        var activeItem = new Y.default({
          msg : config,
          duration : dur
        });
        return activeItem.show(), activeItem;
      },
      Dialog : self.default,
      /**
       * @param {Object} value
       * @param {Function} fn
       * @return {undefined}
       */
      alert : function(value, fn) {
        if (value) {
          value = "string" == typeof value ? {
            content : value,
            cancelText : "",
            okText : "\u786e\u8ba4",
            /** @type {Function} */
            ok : fn
          } : value;
          if (clone) {
            clone.refresh(value);
          } else {
            clone = new self.default(value);
          }
          clone.show();
        }
      },
      /**
       * @param {Object} value
       * @param {Function} res
       * @param {string} cancel
       * @return {undefined}
       */
      confirm : function(value, res, cancel) {
        if (value) {
          value = "string" == typeof value ? {
            content : value,
            cancelText : "\u53d6\u6d88",
            okText : "\u786e\u8ba4",
            /** @type {Function} */
            ok : res,
            cancel : cancel
          } : value;
          if (clone) {
            clone.refresh(value);
          } else {
            clone = new self.default(value);
          }
          clone.show();
        }
      }
    };
    module.exports = Dialog;
  }, function(module, dataAndEvents, $) {
    /**
     * @param {string} obj
     * @return {?}
     */
    function extend(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      var o = {};
      if (null != obj) {
        var i;
        for (i in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, i)) {
            o[i] = obj[i];
          }
        }
      }
      return o.default = obj, o;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function parseInt(value) {
      return value && value.__esModule ? value : {
        default : value
      };
    }
    var b = $(3);
    var bp = parseInt(b);
    var el = $(43);
    var config = extend(el);
    var min = $(66);
    var out = parseInt(min);
    var date = $(67);
    var c = parseInt(date);
    var opts = $(65);
    var oldconfig = extend(opts);
    var header = $(151);
    var value = parseInt(header);
    config.utils = {};
    config.query = c.default.query;
    (0, bp.default)(config.utils, oldconfig, out.default, value.default, c.default);
    module.exports = config;
  }, function(options, dataAndEvents, require) {
    var app = require(78);
    if ("string" == typeof app) {
      /** @type {Array} */
      app = [[options.i, app, ""]];
    }
    var transformer = {};
    transformer.transform = void 0;
    require(24)(app, transformer);
    if (app.locals) {
      options.exports = app.locals;
    }
  }, function(options, dataAndEvents, require) {
    var app = require(79);
    if ("string" == typeof app) {
      /** @type {Array} */
      app = [[options.i, app, ""]];
    }
    var transformer = {};
    transformer.transform = void 0;
    require(24)(app, transformer);
    if (app.locals) {
      options.exports = app.locals;
    }
  }, function(options, dataAndEvents, require) {
    var app = require(80);
    if ("string" == typeof app) {
      /** @type {Array} */
      app = [[options.i, app, ""]];
    }
    var transformer = {};
    transformer.transform = void 0;
    require(24)(app, transformer);
    if (app.locals) {
      options.exports = app.locals;
    }
  }, function(module, dataAndEvents) {
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      /** @type {(Location|boolean)} */
      var parsed = "undefined" != typeof window && window.location;
      if (!parsed) {
        throw new Error("fixUrls requires window.location");
      }
      if (!hash || "string" != typeof hash) {
        return hash;
      }
      /** @type {string} */
      var BASE_URL = parsed.protocol + "//" + parsed.host;
      /** @type {string} */
      var path = BASE_URL + parsed.pathname.replace(/\/[^\/]*$/, "/");
      return hash.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(escape, buf) {
        var requestUrl = buf.trim().replace(/^"(.*)"$/, function(dataAndEvents, deepDataAndEvents) {
          return deepDataAndEvents;
        }).replace(/^'(.*)'$/, function(dataAndEvents, deepDataAndEvents) {
          return deepDataAndEvents;
        });
        if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(requestUrl)) {
          return escape;
        }
        var proto;
        return proto = 0 === requestUrl.indexOf("//") ? requestUrl : 0 === requestUrl.indexOf("/") ? BASE_URL + requestUrl : path + requestUrl.replace(/^\.\//, ""), "url(" + JSON.stringify(proto) + ")";
      });
    };
  }, function(f, rows, $sanitize) {
    rows = f.exports = $sanitize(25)(void 0);
    rows.push([f.i, "", ""]);
  }, function(f, matchIndexes, $sanitize) {
    matchIndexes = f.exports = $sanitize(25)(void 0);
    matchIndexes.push([f.i, ".D-ui-dialog {\n  position: fixed;\n  z-index: 9000;\n  width: 100%;\n  display: none;\n  height: 100%;\n  top: 0;\n  left: 0;\n  font-size: 16px; }\n  @media (-webkit-min-device-pixel-ratio: 3) {\n    .D-ui-dialog {\n      font-size: 14px; } }\n  .D-ui-dialog .dialog-headImg-small {\n    vertical-align: top;\n    background: center, center;\n    background-size: cover;\n    height: 0;\n    padding-bottom: 50%; }\n  .D-ui-dialog .dialog-headImg-big {\n    height: 0;\n    padding-bottom: 133.4444%;\n    vertical-align: top;\n    background: center, center;\n    background-size: cover; }\n  .D-ui-dialog .dialog-mask {\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.6); }\n  .D-ui-dialog .dialog-main {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 70%;\n    background-color: #fff;\n    border-radius: 2px; }\n    .D-ui-dialog .dialog-main .dialog-close {\n      height: 16px; }\n      .D-ui-dialog .dialog-main .dialog-close .close-icon {\n        position: absolute;\n        top: 10px;\n        right: 10px;\n        width: 12px;\n        height: 12px; }\n  .D-ui-dialog .dialog-title {\n    text-align: center;\n    padding-top: 15px;\n    margin-bottom: 15px;\n    font-size: 16px; }\n    @media (min-device-width: 310px) and (max-device-width: 337px) {\n      .D-ui-dialog .dialog-title {\n        font-size: 14px;\n        padding-top: 10px;\n        margin-bottom: 10px; } }\n    @media (-webkit-min-device-pixel-ratio: 3) {\n      .D-ui-dialog .dialog-title {\n        font-size: 17px; } }\n  .D-ui-dialog .dialog-content {\n    padding: 0 15px 15px 15px;\n    margin-top: 15px;\n    color: #666666;\n    text-align: center;\n    font-size: 15px; }\n    @media (min-device-width: 310px) and (max-device-width: 337px) {\n      .D-ui-dialog .dialog-content {\n        padding: 0 10px 10px 10px;\n        margin-top: 10px; } }\n  .D-ui-dialog .dialog-btns {\n    border-top: 1px solid #ebebeb;\n    height: 50px;\n    line-height: 50px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n    @media (min-device-width: 310px) and (max-device-width: 337px) {\n      .D-ui-dialog .dialog-btns {\n        height: 35px;\n        line-height: 35px; } }\n  .D-ui-dialog .dialog-ok {\n    color: #fc9153;\n    text-align: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 20%; }\n  .D-ui-dialog .dialog-cancel {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 20%;\n    border-right: 1px solid #ebebeb;\n    color: #fc9153;\n    text-align: center; }\n",
    ""]);
  }, function(f, matchIndexes, $sanitize) {
    matchIndexes = f.exports = $sanitize(25)(void 0);
    matchIndexes.push([f.i, ".D-ui-toast-wrapper {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n.D-ui-toast {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  z-index: 900;\n  max-width: 50%;\n  background-color: #3a3b42;\n  border-radius: 2px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 10px;\n  font-size: 12px; }\n  @media (-webkit-min-device-pixel-ratio: 3) {\n    .D-ui-toast {\n      font-size: 14px; } }\n  @media (min-device-width: 310px) and (max-device-width: 337px) {\n    .D-ui-toast {\n      padding: 8px; } }\n  .D-ui-toast .toast-msg {\n    color: #cccccc;\n    text-align: center;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    width: 30%; }\n  .D-ui-toast .toast-icon {\n    width: 30px;\n    height: 30px;\n    margin-right: 10px; }\n    @media (min-device-width: 310px) and (max-device-width: 337px) {\n      .D-ui-toast .toast-icon {\n        margin-right: 8px; } }\n  .D-ui-toast .nogutter {\n    margin-left: -10px; }\n    @media (min-device-width: 310px) and (max-device-width: 337px) {\n      .D-ui-toast .nogutter {\n        margin-left: -8px; } }\n\n.D-ui-toast-animation {\n  -webkit-transition: all .4s;\n  transition: all .4s; }\n\n.D-ui-toast-top {\n  position: fixed;\n  top: 0px;\n  left: 50%;\n  -webkit-transform: translate(-50%, -100%);\n          transform: translate(-50%, -100%); }\n\n.D-ui-toast-center {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-10000px, -10000px);\n          transform: translate(-10000px, -10000px); }\n\n.D-ui-toast-show-top {\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  top: 30px; }\n\n.D-ui-toast-show-center {\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n",
    ""]);
  }, function(module, dataAndEvents) {
    /** @type {string} */
    module.exports = "data:image/gif;base64,R0lGODlhZABkAKIEAN7e3rq6uv///5mZmQAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpBRjA4RUZDMDI3MjA2ODExODA4M0Y1OTQyMzVDRDM3MyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMzE0Rjk3NDdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMzE0Rjk3MzdDRTgxMUUzOUJCRjk0NjAxMUE1NzRBMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDVBMTZDQjczOTIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QUYwOEVGQzAyNzIwNjgxMTgwODNGNTk0MjM1Q0QzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQFAAAEACwAAAAAZABkAAAD/0i63P4wykmrvTjrzbv/YCiOZGme6CasbOqObPvOXRzTeGbLeT/tK18KQLwABZeBUlghOgGVY0VJHTAlT2cUOK0ur4+s9sedeKngsBhK3lHO3zRjXZRIJfC4fEFv28xwew50bBB3EHlWgg2EEYcOiYtqYo5lD3mSk5QPjwyRmYNrhpYNmKChog6dCp+njKkNqwSmrq+wDG6QtD4BvRiNsX+lu296Hb3IARd9qjyegRZnH8nUTbfR0IDZG9TdFJsa0trEGd3eE08eVcWJihzm5ovt6x7w8WDz9CD25z35aCT4Vcvxz9gIgchwFJyBUOG8HvwckqNhT6K4K/1oXJST0P8HwFogQ4ocSbKkyVoFP8pJaRARS31MXsJ0KdNdzJo2L+FsqXFnzmE7r/j8CVRmmqDjXh7F2UXpSqMno0qdSrWq1ZNENWby4m/mzY0uJvYUa6JdV7NjW4XNZ1Ft2X9nH5ZIKYSuiIX44ILAu5StOr8RvGIQ/EwuB8OBuW4Aq9NtBseNCbOTXJjx4G14MDdVPJny5qyROS9gDJkmzxkTLZM95ZhcaVCQU6+WJ1v17D2lxb4WRLa3Zkmvff/mPZxV8VnH8x5fvfur5cqem3tMjvw5dJW4qd++HRe7ac/GRWcX/9176NNCwYcn//3qevXuz6OPn9g6/czw7xedrz9x//8KAAYo4IAEFthAAgAh+QQFAAAEACwLAAUAPwAjAAADxUi63P4QyAmrvfhNmrvP2/aNJBNyZdqdkvoFsMcCnmCTcB6AbGb/gpcuhpn5gLfOMFfsXZA/z5JoMT6hQeV0V3VWsEnt8mL9YkdbbsT7AGeF00rZ4U5t5ewGWJVenyB1fHEaeQt7Ln0Oc4aHiIMNiwqNjo8mIW2TCwObcGOQl3qZCpukA1KVCyJ0Zw6lrhl3I6IErrUYniRQELW2FzouQBW8vC7FDcPExsrIvcouzK/OxdCk0sbU1svI2drJ3NfR387V4hgJACH5BAUAAAQALBoABQA/ACMAAAPFSLrcHjC6Sau9L0LMu1ea9o0kE0pl6p2b6g3wynpATcL4wLEBV/+ATw63m2GAv9cwduEdkbbOkmlxXqBRzpRKsVawWe20afxiR1tdxTsBB9HbddnhTsW78wZYlcafKHV8YxNsDHsufRl/dIeIgw2FCo2OjyYhbZOUS4oohpkXAqEVd5CdnlAeoaoCFKQ0Zxirsq1DKaigsrO0XCRAsbm6LsIKwMDDwsXGxynJucsqzcHPI9Gq09DR1y7N2sjF3cPO4MfWHQkAIfkEBQAABAAsLgAFADEAMAAAA71Is0z+MMpJJ2s1a33v/qDTYWFJjYupSugQBvAKtR9sB7KI1ncs05qeLQfMCH2rIuWIVCknzJxiV2HiiFRoVPqEbLnZiFWqGy2P5HJHi053CV/3WjJOq1Pi+AbAz3jobR98gwAyehSEiYY9e4mKi02Ijo92kpOUlRCXk5kRm46dnp+EoZqjfaWmn6kSq6ytl6+Wg7IZtLW4ubq7vL2dAsDBwsPApcTHyL/Iy8GZzM/FdtDPztPHytbDodnCDgkAIfkEBQAABAAsOwAKACQAPwAAA69IujzOMMpJnB0062u1h1z3jeEzeqV5Zum6te6UYrFc1vaNR/De9D4FMDgLLoqngDLHSSqfkuHkSV3ympqqlunRbndeLy4sjpG/5jN1rLayz0a4kUCeL9B2BTTP7/v/gIERAISFhoeELoiLjCeMj4YjkJOJHpSTkpeLjpqIK52RgqKjpKUjAoECqqp+q66oea+vdrKyRrW2Qbi5O7u8OL6uusGsw8Fzx7S4fMt9sxEJACH5BAUAAAQALDsAGQAkAD8AAAOtSLrcziO+SV+8o2qL8f5d+GmhOHJldzZpuS6t+RKxOtO1dCv5DrU+VirokBGFmaNyyWw6n8yAdEqtSl/WrPak7VJH3vB1Iw6Dy1ku2rpaf6HwuHzuBMQBePwzz7cz+31LgIBHg4REhoc+iYo7jHyIj3oTApUCGpJ+DZaWG48PnJ2ehg6hoqONCqanqJOlq02rlbGyTLKXtrW5prSwu6G9vL/Aw6xHusW4yU/EOwkAIfkEBQAABAAsLgAtADEAMQAAA7lIutz+ZMhJq4Q4L8u7/k0nUmA5nlepoaf6sZ67wpb80pOt73zv/8CgcLgLEGWBZPIIUjqNTMzzGX1Mp1XGFZtVbLnZL7gqdnYJZWUPwAZo0lBbu/0p7+b0+laHz+vHCwKCgw59fn9LD4OEhYZCi4uNjkCQjA2GbJSVAg+Ybj+bnJ2YoJsYpD6hp6g8qqt9qaavsK2ys3i1lR+sNq4ZvDK+v7Q6wreZO8a3PcpdzVnP0JBnitPU1dcOCQAh+QQFAAAEACwaADoAPwAkAAADyEi63P4wkiGrvXhojbu3W0h9ZCmKZZqdqOo+7PnOTCzTs33jrh7yL99GIigKXIFkoCIcOYzGlFIJ0j2g0dKUWmVdsUXSltttMcBZBmDNdozJZecZ/WC33W8cOtyw2/F5L3tHDn53DW9Jgnt1hgAPiUsqgxCOj5CJk3SVjhGZJZSchp6fH4wRlhKlHaGifqqrFq2uf7CBF6cSqRWxRJu6nby3smAXu8JbrMUWx7ZTHlgYzc6SQIXB1jPT2Snb3CWj39qv4jRr5QwJACH5BAUAAAQALAsAOgA/ACQAAAPHSLrcJC7KSesUGNvNu8og5I3kE4Jlap2n6kZs+86xPKu1fZc5uuM9zS8VFE0ASIBrwBxccpZkMtVsSmob6bRUtTpiHO3W0/V+fVkx0hFoux1l80ytZLvbkbjzRq8z7ndwenN0EYBvgnEvfYaHAXmDKoyNhxJ6eyWFEo6PloqZmpSAE5egYhScFJEek5uOqqtpahWpsJ+yWha1tl0doRO7pLdRp7qvFsMVs8aVyGWsUhzBvJhDDdPWKtjZJdvcJM3fL+Hi450qCQAh+QQFAAAEACwFAC0AMQAxAAADukgq3P5MyUmrlTDryzvRoOONU2hG5HiaKblurfpCsTs3da7vfO//wKBwCAQQa4Bk8jhSOo1My/MZpUynVckVW91ymd7vMezMkpXmsyfADvDIo3Z75yXJ57pt6o7PUfd8bBUDhIVDgW6DhYRCiIkTi4tAjhaRhj+UipaYiBeWjD6dnp+hopWkPaanmzyZo6w6rq+RrYEjnwO1fLeosbu8sDm2wLS6giS4WavFypC9zQrJ0M6S09SX1s4SCQAh+QQFAAAEACwFABkAJAA/AAADrki6Ks4wytmcpRjb/bJfXPh5oThSZXlOqbpGrfmC8TZD9XUz+Q63vp8riOMQUZ2jcslsOp8MgHRKrUpf1qz2pO1SR97w1SMOg8tZLtq6Wn+h8Lh8Tj8F4oF83qnv35V+fkeBgUSEhTuHiDOKiy+NfT6QepKTGQOYAxOQHpmZEoofnp8RhyOjpBCCp6iYTK2aS7CxR7OvsLK4uai3rb2jv8BKtrvCxZ5Nvsm8TsYRCQAh+QQFAAAEACwFAAoAJAA/AAADrki63K4ivklnvKJqi+X+S3eBoOiRmnmilMqm7tvG8kPXjZrhzs1Dvl+Qp6MAjqii48gEkILN6AcalcIwj2p1g81qt7yv9icG18pWHJr5I6zbijI8/p0vzHa6M8/v+/+AGgGDhIWGgyyHioski46FII+SiBuTkpGWio2ZhyickIGhoqOkogOAA6mpfKqtp3Curm2xsT+0tTW3uC+6uyy9rTjAqsLDtr2wt3bKebI/CQA7";
  }, function(module, dataAndEvents, $sanitize) {
    var S = $sanitize(4);
    var newArgs = S.JSON || (S.JSON = {
      /** @type {function (this:JSONType, *, (Array.<string>|function (string, *): *|null)=, (number|string)=): string} */
      stringify : JSON.stringify
    });
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return newArgs.stringify.apply(newArgs, arguments);
    };
  }, function(module, dataAndEvents, $sanitize) {
    $sanitize(107);
    module.exports = $sanitize(4).Object.assign;
  }, function(module, dataAndEvents, $sanitize) {
    $sanitize(108);
    var OBJECT = $sanitize(4).Object;
    /**
     * @param {Object} hash
     * @param {string} ast
     * @return {?}
     */
    module.exports = function(hash, ast) {
      return OBJECT.defineProperties(hash, ast);
    };
  }, function(module, dataAndEvents, $sanitize) {
    $sanitize(109);
    var OBJECT = $sanitize(4).Object;
    /**
     * @param {Object} hash
     * @param {string} ast
     * @param {?} opt_attributes
     * @return {?}
     */
    module.exports = function(hash, ast, opt_attributes) {
      return OBJECT.defineProperty(hash, ast, opt_attributes);
    };
  }, function(module, dataAndEvents, $sanitize) {
    $sanitize(110);
    module.exports = $sanitize(4).Object.freeze;
  }, function(module, dataAndEvents, $sanitize) {
    $sanitize(113);
    $sanitize(111);
    $sanitize(114);
    $sanitize(115);
    module.exports = $sanitize(4).Symbol;
  }, function(module, dataAndEvents, $sanitize) {
    $sanitize(112);
    $sanitize(116);
    module.exports = $sanitize(37).f("iterator");
  }, function(module, dataAndEvents) {
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      if ("function" != typeof hash) {
        throw TypeError(hash + " is not a function!");
      }
      return hash;
    };
  }, function(module, dataAndEvents) {
    /**
     * @return {undefined}
     */
    module.exports = function() {
    };
  }, function(module, dataAndEvents, require) {
    var walk = require(14);
    var assert = require(105);
    var parse = require(104);
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return function(nodes, a, sub) {
        var xhtml;
        var result = walk(nodes);
        var k = assert(result.length);
        var i = parse(sub, k);
        if (hash && a != a) {
          for (;k > i;) {
            if ((xhtml = result[i++]) != xhtml) {
              return true;
            }
          }
        } else {
          for (;k > i;i++) {
            if ((hash || i in result) && result[i] === a) {
              return hash || (i || 0);
            }
          }
        }
        return!hash && -1;
      };
    };
  }, function(module, dataAndEvents, require) {
    var getActual = require(89);
    /**
     * @param {Object} hash
     * @param {string} key
     * @param {?} opt_attributes
     * @return {?}
     */
    module.exports = function(hash, key, opt_attributes) {
      if (getActual(hash), void 0 === key) {
        return hash;
      }
      switch(opt_attributes) {
        case 1:
          return function(obj) {
            return hash.call(key, obj);
          };
        case 2:
          return function(obj, start) {
            return hash.call(key, obj, start);
          };
        case 3:
          return function(obj, start, capture) {
            return hash.call(key, obj, start, capture);
          };
      }
      return function() {
        return hash.apply(key, arguments);
      };
    };
  }, function(module, dataAndEvents, require) {
    var inspect = require(19);
    var argv = require(30);
    var cfg = require(20);
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      var str = inspect(hash);
      var readFile = argv.f;
      if (readFile) {
        var v;
        var input = readFile(hash);
        var filter = cfg.f;
        /** @type {number} */
        var pos = 0;
        for (;input.length > pos;) {
          if (filter.call(hash, v = input[pos++])) {
            str.push(v);
          }
        }
      }
      return str;
    };
  }, function(module, dataAndEvents, $sanitize) {
    var doc = $sanitize(6).document;
    module.exports = doc && doc.documentElement;
  }, function(module, dataAndEvents, format) {
    var f = format(44);
    /** @type {function (*): boolean} */
    module.exports = Array.isArray || function(hash) {
      return "Array" == f(hash);
    };
  }, function(module, dataAndEvents, require) {
    var getActual = require(50);
    var inspect = require(21);
    var render = require(31);
    var proto = {};
    require(13)(proto, require(15)("iterator"), function() {
      return this;
    });
    /**
     * @param {Object} hash
     * @param {string} key
     * @param {?} opt_attributes
     * @return {undefined}
     */
    module.exports = function(hash, key, opt_attributes) {
      hash.prototype = getActual(proto, {
        next : inspect(1, opt_attributes)
      });
      render(hash, key + " Iterator");
    };
  }, function(module, dataAndEvents) {
    /**
     * @param {Object} hash
     * @param {string} key
     * @return {?}
     */
    module.exports = function(hash, key) {
      return{
        value : key,
        done : !!hash
      };
    };
  }, function(module, dataAndEvents, require) {
    var comments = require(19);
    var props = require(30);
    var node = require(20);
    var getActual = require(55);
    var inspect = require(47);
    var getNames_ = Object.assign;
    module.exports = !getNames_ || require(12)(function() {
      var expr = {};
      var ast = {};
      var unlock = Symbol();
      /** @type {string} */
      var view = "abcdefghijklmnopqrst";
      return expr[unlock] = 7, view.split("").forEach(function(testname) {
        /** @type {string} */
        ast[testname] = testname;
      }), 7 != getNames_({}, expr)[unlock] || Object.keys(getNames_({}, ast)).join("") != view;
    }) ? function(hash, ast) {
      var o = getActual(hash);
      /** @type {number} */
      var argLength = arguments.length;
      /** @type {number} */
      var current = 1;
      var f = props.f;
      var s = node.f;
      for (;argLength > current;) {
        var i;
        var w = inspect(arguments[current++]);
        var left = f ? comments(w).concat(f(w)) : comments(w);
        var a = left.length;
        /** @type {number} */
        var b = 0;
        for (;a > b;) {
          if (s.call(w, i = left[b++])) {
            o[i] = w[i];
          }
        }
      }
      return o;
    } : getNames_;
  }, function(dataAndEvents, entry, require) {
    var module = require(20);
    var getActual = require(21);
    var setLocationParams = require(14);
    var walk = require(35);
    var template = require(9);
    var Block = require(46);
    /** @type {function (Object, string): (ObjectPropertyDescriptor|undefined)} */
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    /** @type {Function} */
    entry.f = require(5) ? getOwnPropertyDescriptor : function(hash, ast) {
      if (hash = setLocationParams(hash), ast = walk(ast, true), Block) {
        try {
          return getOwnPropertyDescriptor(hash, ast);
        } catch (e) {
        }
      }
      if (template(hash, ast)) {
        return getActual(!module.f.call(hash, ast), hash[ast]);
      }
    };
  }, function(mod, dataAndEvents, $sanitize) {
    var equals = $sanitize(14);
    var f = $sanitize(52).f;
    /** @type {function (this:*): string} */
    var ostring = {}.toString;
    /** @type {Array} */
    var models = "object" == typeof window && (window && Object.getOwnPropertyNames) ? Object.getOwnPropertyNames(window) : [];
    /**
     * @param {Object} w
     * @return {?}
     */
    var isString = function(w) {
      try {
        return f(w);
      } catch (e) {
        return models.slice();
      }
    };
    /**
     * @param {Object} hash
     * @return {?}
     */
    mod.exports.f = function(hash) {
      return models && "[object Window]" == ostring.call(hash) ? isString(hash) : f(equals(hash));
    };
  }, function(module, dataAndEvents, format) {
    var hasKey = format(9);
    var f = format(55);
    var type = format(32)("IE_PROTO");
    var objectProto = Object.prototype;
    /** @type {function (Object): (Object|null)} */
    module.exports = Object.getPrototypeOf || function(hash) {
      return hash = f(hash), hasKey(hash, type) ? hash[type] : "function" == typeof hash.constructor && hash instanceof hash.constructor ? hash.constructor.prototype : hash instanceof Object ? objectProto : null;
    };
  }, function(module, dataAndEvents, require) {
    var inspect = require(11);
    var util = require(4);
    var getActual = require(12);
    /**
     * @param {Object} hash
     * @param {string} key
     * @return {undefined}
     */
    module.exports = function(hash, key) {
      var resolve = (util.Object || {})[hash] || Object[hash];
      var keys = {};
      keys[hash] = key(resolve);
      inspect(inspect.S + inspect.F * getActual(function() {
        resolve(1);
      }), "Object", keys);
    };
  }, function(module, dataAndEvents, getCallback) {
    var func = getCallback(34);
    var callback = getCallback(26);
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return function(value, fn) {
        var chr;
        var a;
        /** @type {string} */
        var str = String(callback(value));
        var i = func(fn);
        /** @type {number} */
        var len = str.length;
        return i < 0 || i >= len ? hash ? "" : void 0 : (chr = str.charCodeAt(i), chr < 55296 || (chr > 56319 || (i + 1 === len || ((a = str.charCodeAt(i + 1)) < 56320 || a > 57343))) ? hash ? str.charAt(i) : chr : hash ? str.slice(i, i + 2) : a - 56320 + (chr - 55296 << 10) + 65536);
      };
    };
  }, function(module, dataAndEvents, require) {
    var getActual = require(34);
    /** @type {function (...[*]): number} */
    var log = Math.max;
    /** @type {function (...[*]): number} */
    var callback = Math.min;
    /**
     * @param {Object} hash
     * @param {string} key
     * @return {?}
     */
    module.exports = function(hash, key) {
      return hash = getActual(hash), hash < 0 ? log(hash + key, 0) : callback(hash, key);
    };
  }, function(module, dataAndEvents, require) {
    var getActual = require(34);
    /** @type {function (...[*]): number} */
    var nativeMin = Math.min;
    /**
     * @param {Object} hash
     * @return {?}
     */
    module.exports = function(hash) {
      return hash > 0 ? nativeMin(getActual(hash), 9007199254740991) : 0;
    };
  }, function(module, dataAndEvents, require) {
    var isArray = require(90);
    var fn = require(97);
    var nodes = require(28);
    var getActual = require(14);
    module.exports = require(48)(Array, "Array", function(obj, dataAndEvents) {
      this._t = getActual(obj);
      /** @type {number} */
      this._i = 0;
      /** @type {(number|string)} */
      this._k = dataAndEvents;
    }, function() {
      var arr = this._t;
      var EMPTY = this._k;
      /** @type {number} */
      var i = this._i++;
      return!arr || i >= arr.length ? (this._t = void 0, fn(1)) : "keys" == EMPTY ? fn(0, i) : "values" == EMPTY ? fn(0, arr[i]) : fn(0, [i, arr[i]]);
    }, "values");
    nodes.Arguments = nodes.Array;
    isArray("keys");
    isArray("values");
    isArray("entries");
  }, function(dataAndEvents, deepDataAndEvents, parser) {
    var expr = parser(11);
    expr(expr.S + expr.F, "Object", {
      assign : parser(98)
    });
  }, function(dataAndEvents, deepDataAndEvents, parser) {
    var expr = parser(11);
    expr(expr.S + expr.F * !parser(5), "Object", {
      defineProperties : parser(51)
    });
  }, function(dataAndEvents, deepDataAndEvents, parser) {
    var expr = parser(11);
    expr(expr.S + expr.F * !parser(5), "Object", {
      defineProperty : parser(10).f
    });
  }, function(dataAndEvents, deepDataAndEvents, require) {
    var isFunction = require(17);
    var unescape = require(49).onFreeze;
    require(102)("freeze", function(callback) {
      return function(value) {
        return callback && isFunction(value) ? callback(unescape(value)) : value;
      };
    });
  }, function(dataAndEvents, deepDataAndEvents) {
  }, function(dataAndEvents, deepDataAndEvents, $sanitize) {
    var fn = $sanitize(103)(true);
    $sanitize(48)(String, "String", function(opt_message) {
      /** @type {string} */
      this._t = String(opt_message);
      /** @type {number} */
      this._i = 0;
    }, function() {
      var result;
      var list = this._t;
      var index = this._i;
      return index >= list.length ? {
        value : void 0,
        done : true
      } : (result = fn(list, index), this._i += result.length, {
        value : result,
        done : false
      });
    });
  }, function(dataAndEvents, deepDataAndEvents, require) {
    var Global = require(6);
    var equals = require(9);
    var Block = require(5);
    var node = require(11);
    var request = require(54);
    var last = require(49).KEY;
    var inspect = require(12);
    var flag = require(33);
    var defaults = require(31);
    var getActual = require(22);
    var trim = require(15);
    var argv = require(37);
    var helper = require(36);
    var nodes = require(93);
    var isArray = require(95);
    var $ = require(18);
    var parseInt = require(14);
    var parse = require(35);
    var route = require(21);
    var expect = require(50);
    var module = require(100);
    var object = require(99);
    var g = require(10);
    var rep = require(19);
    var f = object.f;
    var get = g.f;
    var load = module.f;
    var options = Global.Symbol;
    var self = Global.JSON;
    var fn = self && self.stringify;
    var key = trim("_hidden");
    var m = trim("toPrimitive");
    /** @type {function (this:Object, string): boolean} */
    var propertyIsEnumerable = {}.propertyIsEnumerable;
    var o = flag("symbol-registry");
    var obj = flag("symbols");
    var w = flag("op-symbols");
    var hash = Object.prototype;
    /** @type {boolean} */
    var symbol = "function" == typeof options;
    var location = Global.QObject;
    /** @type {boolean} */
    var hasLines = !location || (!location.prototype || !location.prototype.findChild);
    var template = Block && inspect(function() {
      return 7 != expect(get({}, "a", {
        /**
         * @return {?}
         */
        get : function() {
          return get(this, "a", {
            value : 7
          }).a;
        }
      })).a;
    }) ? function(w, ast, opt_attributes) {
      var attributes = f(hash, ast);
      if (attributes) {
        delete hash[ast];
      }
      get(w, ast, opt_attributes);
      if (attributes) {
        if (w !== hash) {
          get(hash, ast, attributes);
        }
      }
    } : get;
    /**
     * @param {(number|string)} b
     * @return {?}
     */
    var empty = function(b) {
      var self = obj[b] = expect(options.prototype);
      return self._k = b, self;
    };
    /** @type {function (Object): ?} */
    var group = symbol && "symbol" == typeof options.iterator ? function(var_args) {
      return "symbol" == typeof var_args;
    } : function(var_args) {
      return var_args instanceof options;
    };
    /**
     * @param {Object} body
     * @param {string} ast
     * @param {?} opt_attributes
     * @return {?}
     */
    var callback = function(body, ast, opt_attributes) {
      return body === hash && callback(w, ast, opt_attributes), $(body), ast = parse(ast, true), $(opt_attributes), equals(obj, ast) ? (opt_attributes.enumerable ? (equals(body, key) && (body[key][ast] && (body[key][ast] = false)), opt_attributes = expect(opt_attributes, {
        enumerable : route(0, false)
      })) : (equals(body, key) || get(body, key, route(1, {})), body[key][ast] = true), template(body, ast, opt_attributes)) : get(body, ast, opt_attributes);
    };
    /**
     * @param {Object} hash
     * @param {string} key
     * @return {?}
     */
    var index = function(hash, key) {
      $(hash);
      var j;
      var first = nodes(key = parseInt(key));
      /** @type {number} */
      var pos = 0;
      var i = first.length;
      for (;i > pos;) {
        callback(hash, j = first[pos++], key[j]);
      }
      return hash;
    };
    /**
     * @param {Object} hash
     * @param {string} ast
     * @return {?}
     */
    var for_in = function(hash, ast) {
      return void 0 === ast ? expect(hash) : index(expect(hash), ast);
    };
    /**
     * @param {Object} body
     * @return {?}
     */
    var cb = function(body) {
      /** @type {boolean} */
      var n = propertyIsEnumerable.call(this, body = parse(body, true));
      return!(this === hash && (equals(obj, body) && !equals(w, body))) && (!(n || (!equals(this, body) || (!equals(obj, body) || equals(this, key) && this[key][body]))) || n);
    };
    /**
     * @param {Object} body
     * @param {string} ast
     * @return {?}
     */
    var set = function(body, ast) {
      if (body = parseInt(body), ast = parse(ast, true), body !== hash || (!equals(obj, ast) || equals(w, ast))) {
        var color = f(body, ast);
        return!color || (!equals(obj, ast) || (equals(body, key) && body[key][ast] || (color.enumerable = true))), color;
      }
    };
    /**
     * @param {Object} hash
     * @return {?}
     */
    var add = function(hash) {
      var i;
      var items = load(parseInt(hash));
      /** @type {Array} */
      var bProperties = [];
      /** @type {number} */
      var index = 0;
      for (;items.length > index;) {
        if (!equals(obj, i = items[index++])) {
          if (!(i == key)) {
            if (!(i == last)) {
              bProperties.push(i);
            }
          }
        }
      }
      return bProperties;
    };
    /**
     * @param {Object} body
     * @return {?}
     */
    var next = function(body) {
      var item;
      /** @type {boolean} */
      var stripFlag = body === hash;
      var items = load(stripFlag ? w : parseInt(body));
      /** @type {Array} */
      var ret = [];
      /** @type {number} */
      var index = 0;
      for (;items.length > index;) {
        if (!!equals(obj, item = items[index++])) {
          if (!(stripFlag && !equals(hash, item))) {
            ret.push(obj[item]);
          }
        }
      }
      return ret;
    };
    if (!symbol) {
      /**
       * @return {?}
       */
      options = function() {
        if (this instanceof options) {
          throw TypeError("Symbol is not a constructor!");
        }
        var ast = getActual(arguments.length > 0 ? arguments[0] : void 0);
        /**
         * @param {string} name
         * @return {undefined}
         */
        var fn = function(name) {
          if (this === hash) {
            fn.call(w, name);
          }
          if (equals(this, key)) {
            if (equals(this[key], ast)) {
              /** @type {boolean} */
              this[key][ast] = false;
            }
          }
          template(this, ast, route(1, name));
        };
        return Block && (hasLines && template(hash, ast, {
          configurable : true,
          /** @type {function (string): undefined} */
          set : fn
        })), empty(ast);
      };
      request(options.prototype, "toString", function() {
        return this._k;
      });
      /** @type {function (Object, string): ?} */
      object.f = set;
      /** @type {function (Object, string, ?): ?} */
      g.f = callback;
      /** @type {function (Object): ?} */
      require(52).f = module.f = add;
      /** @type {function (Object): ?} */
      require(20).f = cb;
      /** @type {function (Object): ?} */
      require(30).f = next;
      if (Block) {
        if (!require(29)) {
          request(hash, "propertyIsEnumerable", cb, true);
        }
      }
      /**
       * @param {Object} hash
       * @return {?}
       */
      argv.f = function(hash) {
        return empty(trim(hash));
      };
    }
    node(node.G + node.W + node.F * !symbol, {
      Symbol : options
    });
    /** @type {Array.<string>} */
    var tret = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",");
    /** @type {number} */
    var x = 0;
    for (;tret.length > x;) {
      trim(tret[x++]);
    }
    var h = rep(trim.store);
    /** @type {number} */
    var i = 0;
    for (;h.length > i;) {
      helper(h[i++]);
    }
    node(node.S + node.F * !symbol, "Symbol", {
      /**
       * @param {Object} w
       * @return {?}
       */
      for : function(w) {
        return equals(o, w += "") ? o[w] : o[w] = options(w);
      },
      /**
       * @param {string} obj
       * @return {?}
       */
      keyFor : function(obj) {
        if (!group(obj)) {
          throw TypeError(obj + " is not a symbol!");
        }
        var i;
        for (i in o) {
          if (o[i] === obj) {
            return i;
          }
        }
      },
      /**
       * @return {undefined}
       */
      useSetter : function() {
        /** @type {boolean} */
        hasLines = true;
      },
      /**
       * @return {undefined}
       */
      useSimple : function() {
        /** @type {boolean} */
        hasLines = false;
      }
    });
    node(node.S + node.F * !symbol, "Object", {
      /** @type {function (Object, string): ?} */
      create : for_in,
      /** @type {function (Object, string, ?): ?} */
      defineProperty : callback,
      /** @type {function (Object, string): ?} */
      defineProperties : index,
      /** @type {function (Object, string): ?} */
      getOwnPropertyDescriptor : set,
      /** @type {function (Object): ?} */
      getOwnPropertyNames : add,
      /** @type {function (Object): ?} */
      getOwnPropertySymbols : next
    });
    if (self) {
      node(node.S + node.F * (!symbol || inspect(function() {
        var w = options();
        return "[null]" != fn([w]) || ("{}" != fn({
          a : w
        }) || "{}" != fn(Object(w)));
      })), "JSON", {
        /**
         * @param {Object} obj
         * @return {?}
         */
        stringify : function(obj) {
          if (void 0 !== obj && !group(obj)) {
            var handler;
            var callback;
            /** @type {Array} */
            var args = [obj];
            /** @type {number} */
            var i = 1;
            for (;arguments.length > i;) {
              args.push(arguments[i++]);
            }
            return handler = args[1], "function" == typeof handler && (callback = handler), !callback && isArray(handler) || (handler = function(item, idx) {
              if (callback && (idx = callback.call(this, item, idx)), !group(idx)) {
                return idx;
              }
            }), args[1] = handler, fn.apply(self, args);
          }
        }
      });
    }
    if (!options.prototype[m]) {
      require(13)(options.prototype, m, options.prototype.valueOf);
    }
    defaults(options, "Symbol");
    defaults(Math, "Math", true);
    defaults(Global.JSON, "JSON", true);
  }, function(dataAndEvents, deepDataAndEvents, $sanitize) {
    $sanitize(36)("asyncIterator");
  }, function(dataAndEvents, deepDataAndEvents, $sanitize) {
    $sanitize(36)("observable");
  }, function(dataAndEvents, deepDataAndEvents, require) {
    require(106);
    var events = require(6);
    var getActual = require(13);
    var nodes = require(28);
    var args = require(15)("toStringTag");
    /** @type {Array.<string>} */
    var codeSegments = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(",");
    /** @type {number} */
    var i = 0;
    for (;i < codeSegments.length;i++) {
      /** @type {string} */
      var name = codeSegments[i];
      var constructor = events[name];
      var obj = constructor && constructor.prototype;
      if (obj) {
        if (!obj[args]) {
          getActual(obj, args, name);
        }
      }
      nodes[name] = nodes.Array;
    }
  }, function(module, dataAndEvents, $sanitize) {
    module.exports = {
      default : $sanitize(84),
      __esModule : true
    };
  }, function(module, dataAndEvents, $sanitize) {
    module.exports = {
      default : $sanitize(85),
      __esModule : true
    };
  }, function(module, dataAndEvents, $sanitize) {
    module.exports = {
      default : $sanitize(86),
      __esModule : true
    };
  }, function(module, dataAndEvents, $sanitize) {
    module.exports = {
      default : $sanitize(88),
      __esModule : true
    };
  }, function(dataAndEvents, obj, keys) {
    /** @type {boolean} */
    obj.__esModule = true;
    var props = keys(3);
    var opts = function(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }(props);
    obj.default = opts.default || function(object) {
      /** @type {number} */
      var i = 1;
      for (;i < arguments.length;i++) {
        var iterable = arguments[i];
        var key;
        for (key in iterable) {
          if (Object.prototype.hasOwnProperty.call(iterable, key)) {
            object[key] = iterable[key];
          }
        }
      }
      return object;
    };
  }, function(dataAndEvents, w, deepDataAndEvents) {
    /**
     * @param {Object} item
     * @return {?}
     */
    function getImage(item) {
      return item.type && "image" === item.type || (item.share_title = item.title, item.share_content = item.content, item.share_url = item.url, item.share_icon_url = item.icon), item;
    }
    /**
     * @param {?} opt_attributes
     * @param {?} attributes
     * @param {Object} c
     * @param {?} allBindingsAccessor
     * @return {?}
     */
    function init(opt_attributes, attributes, c, allBindingsAccessor) {
      return 0 === opt_attributes.indexOf("share") ? (opt_attributes = c.alias ? c.alias : c.fn, attributes = getImage(attributes)) : "setTitle" === opt_attributes ? (opt_attributes = c.alias ? c.alias : c.fn, attributes.navi_title = attributes.title) : c && (opt_attributes = c.alias ? c.alias : c.fn), {
        name : opt_attributes,
        param : attributes
      };
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (Object): ?} */
    w.getOldParamAlias = getImage;
    /** @type {function (?, ?, Object, ?): ?} */
    w.alias = init;
  }, function(dataAndEvents, w, require) {
    /**
     * @param {string} type
     * @param {Object} params
     * @param {?} fn
     * @return {undefined}
     */
    function dialog(type, params, fn) {
      /** @type {number} */
      var id = rightId++;
      /** @type {string} */
      var cb = "__bridgeCall__" + id;
      var MSG_CLOSURE_CUSTOM_COLOR_PROMPT = (0, obj.default)({
        cmd : type,
        id : id,
        params : params,
        callback : cb
      });
      /**
       * @param {Object} res
       * @return {undefined}
       */
      window[cb] = function(res) {
        var len = res.errno;
        /** @type {null} */
        var err = null;
        if (len !== b.ERR_OK) {
          var data = res.errmsg;
          /** @type {Error} */
          err = new Error(data);
        }
        delete window[cb];
        fn(err, res.result);
      };
      window.prompt(MSG_CLOSURE_CUSTOM_COLOR_PROMPT);
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var json = require(39);
    var obj = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }(json);
    /** @type {function (string, Object, ?): undefined} */
    w.callAndroid = dialog;
    var b = require(40);
    /** @type {number} */
    var rightId = 0;
  }, function(dataAndEvents, w, deepDataAndEvents) {
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var def = {
      debug : false,
      api : {
        initEntrance : {
          fn : "initEntrance",
          alias : "init_entrance"
        },
        invokeEntrance : {
          fn : "invokeEntrance",
          alias : "invoke_entrance"
        },
        showEntrance : {
          fn : "showEntrance",
          alias : "show_entrance"
        },
        hideEntrance : {
          fn : "hideEntrance",
          alias : "hide_entrance"
        },
        shareWeixinTimeline : {
          fn : "shareWeixinTimeline",
          alias : "share_weixin_timeline"
        },
        shareWeixinAppmsg : {
          fn : "shareWeixinAppmsg",
          alias : "share_weixin_appmsg"
        },
        shareAlipayLife : {
          fn : "shareAlipayLife"
        },
        shareAlipayFriend : {
          fn : "shareAlipayFriend"
        },
        shareQzone : {
          fn : "shareQzone",
          alias : "share_qzone"
        },
        shareQqAppmsg : {
          fn : "shareQqAppmsg",
          alias : "share_qq_appmsg"
        },
        shareSinaWeibo : {
          fn : "shareSinaWeibo",
          alias : "share_sina_weibo"
        },
        shareFacebook : {
          fn : "shareFacebook"
        },
        shareLine : {
          fn : "shareLine"
        },
        shareWhatsApp : {
          fn : "shareWhatsApp"
        },
        shareTwitter : {
          fn : "shareTwitter"
        },
        shareMessenger : {
          fn : "shareMessenger"
        },
        shareEmail : {
          fn : "shareEmail"
        },
        shareSMS : {
          fn : "shareSMS"
        },
        getUserInfo : {
          fn : "getUserInfo"
        },
        getSystemInfo : {
          fn : "getSystemInfo"
        },
        getLocationInfo : {
          fn : "getLocationInfo"
        },
        apolloGetToggle : {
          fn : "apolloGetToggle"
        },
        refreshPage : {
          fn : "refreshPage",
          alias : "page_refresh"
        },
        closePage : {
          fn : "closePage",
          alias : "page_close"
        },
        openPage : {
          fn : "openPage",
          alias : "open_url"
        },
        clearCache : {
          fn : "clearCache",
          support : "5.0.10"
        },
        launchScan : {
          fn : "launchScan",
          support : "5.0.20"
        },
        requestLogin : {
          fn : "requestLogin",
          alias : "callNativeLogin",
          support : "5.0.10"
        },
        setTitle : {
          fn : "setTitle",
          alias : "updateNaviTitle",
          paramsAlias : "navi_title"
        },
        photograph : {
          fn : "photograph",
          support : "5.0.12"
        },
        commonPay : {
          fn : "commonPay",
          support : "5.0.10"
        },
        openUniPay : {
          fn : "openUniPay",
          support : "5.1.2"
        }
      }
    };
    w.default = def;
  }, function(dataAndEvents, w, require) {
    /**
     * @param {?} value
     * @return {?}
     */
    function getter(value) {
      return value && value.__esModule ? value : {
        default : value
      };
    }
    /**
     * @param {Object} context
     * @return {undefined}
     */
    function add(context) {
      if ((0, ua.initApp)(context), isFunction(context), callback(context), value.default.is("fusion")) {
        var src = self.default.internal.fusion;
        if (value.default.is("guarana")) {
          src = self.default.international.fusion;
        }
        pos.default.loadScript(src, function() {
        });
      }
      if (value.default.is("driver")) {
        pos.default.sdkReady("didi", self.default.internal.driverBridge, function(self) {
          context.driver = self.dbridge;
        }, "DidiJSBridgeReady");
      }
      if (value.default.is("driver") || ((0, ua.isFusionKit)() || !(0, ua.compareAppVersion)("<", "5.0.0"))) {
        rekapiCore(context);
      } else {
        cb = options.oldMakeBridgeFn;
        setup(context);
      }
    }
    /**
     * @param {Function} obj
     * @return {undefined}
     */
    function isFunction(obj) {
      /**
       * @param {string} hash
       * @param {string} name
       * @param {Function} n
       * @return {?}
       */
      obj.call = function(hash, name, n) {
        var node = option.default.api[hash];
        var func = cb(hash, node, option.default);
        return!n && ((0, $.isFn)(name) && (n = name, name = {})), func(name, n);
      };
      /**
       * @param {string} method
       * @param {Element} deepDataAndEvents
       * @param {Element} el
       * @return {?}
       */
      obj.oldCall = function(method, deepDataAndEvents, el) {
        var type = option.default.api[method];
        var q = (0, options.oldMakeBridgeFn)(method, type, option.default);
        return setup(obj, true), !el && ((0, $.isFn)(deepDataAndEvents) && (el = deepDataAndEvents, deepDataAndEvents = {})), q(deepDataAndEvents, el);
      };
    }
    /**
     * @param {Object} root
     * @return {undefined}
     */
    function rekapiCore(root) {
      /**
       * @param {?} type
       * @param {Function} fn
       * @return {undefined}
       */
      root.on = function(type, fn) {
        me.events.on(type, fn);
      };
      /**
       * @param {?} properties
       * @param {?} opt_attributes
       * @return {undefined}
       */
      root.off = function(properties, opt_attributes) {
        me.events.un(properties, opt_attributes);
      };
    }
    /**
     * @param {Object} self
     * @return {undefined}
     */
    function callback(self) {
      /**
       * @param {string} solution
       * @param {Function} result
       * @return {?}
       */
      self.support = function(solution, result) {
        if (!ua.inApp || !self[solution]) {
          return false;
        }
        var support = self[solution].support;
        return!(support && !(0, ua.compareAppVersion)(result || ua.app.version, ">=", support));
      };
    }
    /**
     * @param {Object} instance
     * @return {undefined}
     */
    function setup(instance) {
      if (arguments.length > 1 && (void 0 !== arguments[1] && arguments[1])) {
        if ((0, ua.isAndroid)()) {
          /**
           * @param {?} type
           * @param {Function} fn
           * @return {undefined}
           */
          instance.oldOn = function(type, fn) {
            me.events.on(type, fn);
          };
          /**
           * @param {?} properties
           * @param {?} opt_attributes
           * @return {undefined}
           */
          instance.oldOff = function(properties, opt_attributes) {
            me.events.un(properties, opt_attributes);
          };
          instance.oldTrigger = me.events.emit;
        } else {
          instance.oldOn = options.registerHandler;
          instance.oldOff = $.noop;
        }
      } else {
        if ((0, ua.isAndroid)()) {
          /**
           * @param {?} type
           * @param {Function} fn
           * @return {undefined}
           */
          instance.on = function(type, fn) {
            me.events.on(type, fn);
          };
          /**
           * @param {?} properties
           * @param {?} opt_attributes
           * @return {undefined}
           */
          instance.off = function(properties, opt_attributes) {
            me.events.un(properties, opt_attributes);
          };
          instance._trigger = me.events.emit;
        } else {
          instance.on = options.registerHandler;
          instance.off = $.noop;
        }
      }
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (Object): undefined} */
    w.initGlobalAPI = add;
    var $ = require(0);
    var me = require(41);
    var options = require(23);
    var module = require(127);
    var ua = require(16);
    var object = require(1);
    var value = getter(object);
    var c = require(2);
    var pos = getter(c);
    var index = require(7);
    var self = getter(index);
    var i = require(124);
    var option = getter(i);
    var cb = module.makeBridgeFn;
  }, function(dataAndEvents, w, require) {
    /**
     * @param {string} code
     * @param {Object} reason
     * @param {?} cb
     * @return {undefined}
     */
    function close(code, reason, cb) {
      /** @type {number} */
      var id = rightId++;
      /** @type {string} */
      var fn = "__bridgeCall__" + id;
      var s = (0, obj.default)({
        cmd : code,
        id : id,
        params : reason,
        callback : fn
      });
      /** @type {string} */
      var b = "__getCallData__" + id;
      /**
       * @return {?}
       */
      window[b] = function() {
        return delete window[b], s;
      };
      /**
       * @param {Object} res
       * @return {undefined}
       */
      window[fn] = function(res) {
        if ((0, util.isStr)(res)) {
          try {
            /** @type {*} */
            res = JSON.parse(res);
          } catch (n) {
            res = {};
          }
        }
        var len = res.errno;
        /** @type {null} */
        var err = null;
        if (len !== b.ERR_OK) {
          var data = res.errmsg;
          /** @type {Error} */
          err = new Error(data);
        }
        delete window[fn];
        cb(err, res.result);
      };
      callback(a + b);
    }
    /**
     * @param {string} url
     * @return {undefined}
     */
    function callback(url) {
      if (script) {
        /** @type {string} */
        script.src = url;
      } else {
        script = (0, Handlebars.createFrame)(url);
      }
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var json = require(39);
    var obj = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }(json);
    /** @type {function (string, Object, ?): undefined} */
    w.callIOS = close;
    var Handlebars = require(66);
    var util = require(0);
    var b = require(40);
    /** @type {string} */
    var a = "didibridge://BRIDGE_CALL?callback=";
    /** @type {null} */
    var script = null;
    /** @type {number} */
    var rightId = 0;
  }, function(dataAndEvents, w, require) {
    /**
     * @param {string} object
     * @param {boolean} event
     * @return {?}
     */
    function fn(object, event) {
      return function() {
        var key = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        var which = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : util.noop;
        if (1 === arguments.length) {
          if ((0, util.isFn)(key)) {
            which = key;
            key = {};
          }
        }
        promote(event ? event.fn : object, key, which);
      };
    }
    /**
     * @param {string} key
     * @param {Object} parent
     * @param {Function} callback
     * @return {undefined}
     */
    function promote(key, parent, callback) {
      switch(arguments.length) {
        case 1:
          parent = {};
          /**
           * @return {undefined}
           */
          callback = function() {
          };
          break;
        case 2:
          if ((0, util.isFn)(arguments[1])) {
            callback = arguments[1];
            parent = {};
          } else {
            /**
             * @return {undefined}
             */
            callback = function() {
            };
          }
        ;
      }
      if ((0, b.inApp)()) {
        if (!(0, b.isFusionKit)() || ((0, util.isUndefined)(window.Fusion) || (0, util.isUndefined)(window.Fusion[key]))) {
          if ((0, b.isAndroid)()) {
            (0, helper.callAndroid)(key, parent, callback);
          } else {
            (0, Block.callIOS)(key, parent, callback);
          }
        } else {
          /**
           * @param {Object} res
           * @return {undefined}
           */
          window.__fusionBridgeCall__ = function(res) {
            if ((res.hasOwnProperty("errorno") || res.hasOwnProperty("errno")) && ((res.hasOwnProperty("errormsg") || res.hasOwnProperty("errmsg")) && res.hasOwnProperty("result"))) {
              callback({
                errno : res.errno || res.errorno,
                errmsg : res.errmsg || res.errormsg
              }, res.result);
            } else {
              callback({
                errno : 0,
                errmsg : ""
              }, res);
            }
          };
          window.Fusion[key](parent, window.__fusionBridgeCall__);
        }
      }
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (string, boolean): ?} */
    w.makeBridgeFn = fn;
    var util = require(0);
    var object = require(41);
    var nodes = require(40);
    var b = require(16);
    var Block = require(126);
    var helper = require(123);
    var url = require(1);
    var obj = function(url) {
      return url && url.__esModule ? url : {
        default : url
      };
    }(url);
    if (obj.default.is("passenger") || obj.default.is("lite")) {
      (function() {
        /**
         * @param {Object} res
         * @return {undefined}
         */
        window.__bridgeTrigger__ = function(res) {
          if ((0, util.isStr)(res)) {
            try {
              /** @type {*} */
              res = JSON.parse(res);
            } catch (n) {
              res = {};
            }
          }
          var pdataCur = res.eventname;
          var i = res.errno;
          /** @type {null} */
          var err = null;
          if (i !== nodes.ERR_OK) {
            var data = res.errmsg;
            /** @type {Error} */
            err = new Error(data);
          }
          object.events.emit(pdataCur, err, res.result);
        };
        promote("initConfig", {
          handler : "__bridgeTrigger__"
        }, util.noop);
      })();
    }
  }, function(dataAndEvents, w, require) {
    /**
     * @param {?} url
     * @return {?}
     */
    function parse(url) {
      return url && url.__esModule ? url : {
        default : url
      };
    }
    /**
     * @param {Object} res
     * @return {undefined}
     */
    function cb(res) {
      if ((0, util.isStr)(res)) {
        /** @type {*} */
        res = JSON.parse(res);
      }
      /** @type {Object} */
      var body = res;
      var type = body.id;
      var text = body.result;
      var exec = module[type];
      if ((0, util.isFn)(exec)) {
        exec(null, text);
      }
    }
    /**
     * @param {string} fail
     * @param {Object} params
     * @param {?} value
     * @return {undefined}
     */
    function prompt(fail, params, value) {
      /** @type {number} */
      var id = rightId++;
      var MSG_CLOSURE_CUSTOM_COLOR_PROMPT = (0, opts.default)({
        cmd : fail,
        id : id,
        params : params
      });
      module[id] = value;
      window.prompt(MSG_CLOSURE_CUSTOM_COLOR_PROMPT);
    }
    /**
     * @return {?}
     */
    function respond() {
      return(0, helper.isAndroid)() && (0, helper.compareAppVersion)(">", "4.2.0");
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var url = require(39);
    var opts = parse(url);
    /** @type {function (string, Object, ?): undefined} */
    w.promptSend = prompt;
    /** @type {function (): ?} */
    w.supportPrompt = respond;
    var util = require(0);
    var helper = require(16);
    var uri = require(1);
    var obj = parse(uri);
    /** @type {number} */
    var rightId = 0;
    var module = {};
    if (obj.default.is("passenger") || obj.default.is("lite")) {
      (function() {
        if ((0, util.isUndefined)(window.didi) || (0, util.isUndefined)(window.didi.bridge)) {
          if ((0, util.isUndefined)(window.didi)) {
            window.didi = {};
          }
          window.didi.bridge = {};
          /** @type {function (Object): undefined} */
          window.didi.bridge._callback = cb;
        } else {
          /** @type {function (Object): undefined} */
          window.didi.bridge._callback = cb;
        }
      })();
    }
  }, function(dataAndEvents, w, require) {
    /**
     * @param {?} data
     * @param {?} cb
     * @return {undefined}
     */
    function wrap(data, cb) {
      var w = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : util.noop;
      if (window.DidiJSBridge) {
        /**
         * @param {?} index
         * @return {undefined}
         */
        var get = function(index) {
          if (cb) {
            cb(null, index);
          }
        };
        if ((0, Block.isIos)()) {
          (0, bridge.registerHandler)("sendPayResult", get);
        }
        window.DidiJSBridge.callHandler("openUniPay", data, get);
      } else {
        w({
          errno : -1,
          errmsg : "\u5ba2\u6237\u7aef\u4e0d\u652f\u6301"
        });
      }
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (?, ?): undefined} */
    w.openUniPay = wrap;
    var util = require(0);
    var Block = require(16);
    var bridge = require(23);
  }, function(dataAndEvents, w, deepDataAndEvents) {
    /**
     * @param {Object} options
     * @return {?}
     */
    function request(options) {
      /**
       * @return {undefined}
       */
      function cb() {
        if (200 === xhr.status) {
          /** @type {string} */
          var attributes = xhr.responseText;
          if ("json" === options.dataType) {
            /** @type {*} */
            attributes = JSON.parse(attributes);
          }
          if (options.success) {
            options.success(attributes);
          }
        } else {
          if (options.error) {
            options.error(xhr.status, xhr.statusText);
          }
        }
      }
      /** @type {XMLHttpRequest} */
      var xhr = new window.XMLHttpRequest;
      if (options.data = serialize(options.data), options.method || (options.method = "get"), "get" !== options.method && "jsonp" !== options.method || (options.url += (-1 === options.url.indexOf("?") ? "?" : "&") + options.data), true !== options.cache && (options.url += (-1 === options.url.indexOf("?") ? "?" : "&") + "_=" + (new Date).getTime()), "jsonp" === options.method) {
        return void loadScript(options);
      }
      /** @type {boolean} */
      options.async = false !== options.async;
      if (false !== options.async) {
        /**
         * @return {undefined}
         */
        xhr.onreadystatechange = function() {
          if (4 === xhr.readyState) {
            cb();
          }
        };
      }
      xhr.open(options.method, options.url, options.async);
      if ("post" === options.method) {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(options.data);
      } else {
        xhr.send(null);
      }
      if (false === options.async) {
        cb();
      }
    }
    /**
     * @param {Object} options
     * @return {undefined}
     */
    function loadScript(options) {
      var path = options.url;
      /** @type {string} */
      var key = "__cb__" + queueHooks;
      path += "&callback=" + key;
      /**
       * @param {?} attributes
       * @return {undefined}
       */
      window[key] = function(attributes) {
        if (options.success) {
          options.success(attributes);
        }
      };
      /** @type {Element} */
      var el = document.createElement("script");
      /** @type {string} */
      el.type = "text/javascript";
      /** @type {string} */
      el.async = "async";
      /** @type {function (): undefined} */
      el.onload = el.onreadystatechange = function() {
        if (!this.readyState || /^(loaded|complete)$/.test(this.readyState)) {
          try {
            delete window[key];
          } catch (e) {
          }
          /** @type {null} */
          el.onload = el.onreadystatechange = null;
        }
      };
      /**
       * @return {undefined}
       */
      el.onerror = function() {
        if (options.error) {
          options.error(0);
        }
        try {
          delete window[key];
        } catch (e) {
        }
        /** @type {null} */
        el.onerror = null;
      };
      /** @type {string} */
      el.src = path;
      document.getElementsByTagName("head")[0].appendChild(el);
    }
    /**
     * @param {Object} params
     * @return {?}
     */
    function serialize(params) {
      /** @type {Array} */
      var tagNameArr = [];
      var key;
      for (key in params) {
        tagNameArr.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
      }
      return tagNameArr.join("&");
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (Object): ?} */
    w.ajax = request;
    /** @type {function (Object): ?} */
    w.params = serialize;
    /** @type {number} */
    var queueHooks = 0;
  }, function(module, dataAndEvents, require) {
    /**
     * @param {?} obj
     * @return {?}
     */
    function extend(obj) {
      if (obj && obj.__esModule) {
        return obj;
      }
      var o = {};
      if (null != obj) {
        var i;
        for (i in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, i)) {
            o[i] = obj[i];
          }
        }
      }
      return o.default = obj, o;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function String(value) {
      return value && value.__esModule ? value : {
        default : value
      };
    }
    var arg = require(3);
    var keyName = String(arg);
    var data = require(43);
    var conf = extend(data);
    var text = require(8);
    var out = String(text);
    var nodes = require(71);
    var oldconfig = extend(nodes);
    var header = require(69);
    var value = String(header);
    var number = require(72);
    var val = String(number);
    var base = require(73);
    var mod = extend(base);
    var target = require(70);
    var targets = extend(target);
    var i = require(68);
    var c = String(i);
    (0, keyName.default)(conf, {
      bridge : out.default
    }, oldconfig, value.default, {
      ui : val.default
    }, mod, targets, c.default);
    module.exports = conf;
  }, function(dataAndEvents, w, require) {
    /**
     * @param {?} name
     * @return {?}
     */
    function fn(name) {
      return name && name.__esModule ? name : {
        default : name
      };
    }
    /**
     * @return {undefined}
     */
    function wrap() {
      var expr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var second = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : util.noop;
      if (obj.default.is("driver") && !obj.default.is("fusion")) {
        out.default.sdkReady("didi", object.default.internal.driverBridge, function(dataAndEvents) {
          dataAndEvents.dbridge.getLocationInfo(function(attributes) {
            second({
              errno : 0,
              errmsg : ""
            }, attributes);
          });
        }, "DidiJSBridgeReady");
      } else {
        matches.call("getLocationInfo", expr, second);
      }
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (): undefined} */
    w.getLocation = wrap;
    var nodes = require(8);
    var matches = function(b) {
      if (b && b.__esModule) {
        return b;
      }
      var c = {};
      if (null != b) {
        var e;
        for (e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            c[e] = b[e];
          }
        }
      }
      return c.default = b, c;
    }(nodes);
    var util = require(0);
    var res = require(1);
    var obj = fn(res);
    var path = require(2);
    var out = fn(path);
    var item = require(7);
    var object = fn(item);
  }, function(dataAndEvents, w, require) {
    /**
     * @param {Function} element
     * @return {undefined}
     */
    function Datepicker(element) {
      var r20 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : util.noop;
      if (obj.default.is("passenger,driver")) {
        (0, path.getLocation)(element, r20);
      } else {
        (0, geolocation.getLocation)(element, r20);
      }
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var json = require(1);
    var obj = function(d) {
      return d && d.__esModule ? d : {
        default : d
      };
    }(json);
    var util = require(0);
    var path = require(132);
    var geolocation = require(134);
    w.default = {
      /** @type {function (Function): undefined} */
      getLocationInfo : Datepicker
    };
  }, function(dataAndEvents, w, require) {
    /**
     * @param {?} name
     * @return {?}
     */
    function makeModuleMap(name) {
      return name && name.__esModule ? name : {
        default : name
      };
    }
    /**
     * @return {undefined}
     */
    function wrap() {
      var H5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var callback = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : $.noop;
      if (!H5.H5 && obj.default.is("weixin")) {
        (0, helper.weixinReady)(function(p) {
          if (p.constructor === Error) {
            callback({
              errno : -1,
              errmsg : "\u5fae\u4fe1sdk\u52a0\u8f7d\u5f02\u5e38"
            }, {});
          } else {
            p.getLocation({
              /**
               * @param {?} opt_attributes
               * @return {undefined}
               */
              success : function(opt_attributes) {
                callback({
                  errno : 0,
                  errmsg : ""
                }, opt_attributes);
              },
              /**
               * @param {?} opt_attributes
               * @return {undefined}
               */
              cancel : function(opt_attributes) {
                callback({
                  errno : -1,
                  errmsg : "\u7528\u6237\u62d2\u7edd\u83b7\u53d6\u5730\u7406\u4f4d\u7f6e"
                }, opt_attributes);
              }
            });
          }
        });
      } else {
        if (!H5.H5 && obj.default.is("alipay")) {
          (0, Block.alipayReady)(function(next_callback) {
            next_callback.call("getLocation", function(attributes) {
              if (attributes.error) {
                return void callback({
                  errno : -1,
                  errmsg : attributes.errorMessage
                }, {});
              }
              callback({
                errno : -1,
                errmsg : attributes.errorMessage
              }, attributes);
            });
          });
        } else {
          if (!H5.H5 && obj.default.is("mqq")) {
            (0, nodes.qqReady)(function(e) {
              if (e.constructor === Error) {
                callback({
                  errno : -1,
                  errmsg : "qqsdk\u52a0\u8f7d\u5f02\u5e38"
                }, {});
              } else {
                e.sensor.getLocation({}, function(dataAndEvents, latitude, longitude) {
                  callback({
                    errno : 0,
                    errmsg : ""
                  }, {
                    latitude : latitude,
                    longitude : longitude
                  });
                });
              }
            });
          } else {
            if ("geolocation" in navigator) {
              navigator.geolocation.getCurrentPosition(function(result) {
                callback({
                  errno : 0,
                  errmsg : ""
                }, result.coords);
              }, function(attributes) {
                callback(attributes, {});
              });
            } else {
              callback({
                errno : -1,
                errmsg : "\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u5b9a\u4f4d"
              }, {});
            }
          }
        }
      }
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (): undefined} */
    w.getLocation = wrap;
    var dep = require(2);
    var moduleName = (makeModuleMap(dep), require(7));
    var $ = (makeModuleMap(moduleName), require(0));
    var id = require(1);
    var obj = makeModuleMap(id);
    var helper = require(138);
    var nodes = require(137);
    var Block = require(136);
  }, function(securityProvider, dataAndEvents, require) {
    /**
     * @param {?} options
     * @return {?}
     */
    function $(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }
    /**
     * @param {Object} $scope
     * @return {undefined}
     */
    function some($scope) {
      var iterator = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : util.noop;
      option.default.sdkReady("login", originalEvent, function(attributes) {
        var $1 = {
          appid : $scope.appid || test,
          role : $scope.role || now
        };
        if (attributes.constructor === Error) {
          iterator(attributes);
        } else {
          attributes.setConfig($1);
        }
      });
    }
    /**
     * @return {?}
     */
    function initialize() {
      return{
        token : item.default.get("token") || item.default.get("ticket"),
        phone : item.default.get("phone")
      };
    }
    /**
     * @return {?}
     */
    function constructor() {
      var _clone = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : util.noop;
      var forOwn = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : util.noop;
      var attributes = initialize();
      if (obj.default.is("inNative") && attributes.token) {
        _clone(attributes);
      } else {
        if (obj.default.is("lite,passenger,fusion")) {
          return insert.call("getUserInfo", {}, function(dataAndEvents, user) {
            _clone({
              token : user.token || user.ticket,
              phone : user.phone
            });
          }), false;
        }
        if (obj.default.is("driver")) {
          return option.default.sdkReady("didi", node.default.internal.driverBridge, function(Client) {
            Client.dbridge.getUserInfo(function(user) {
              _clone({
                token : user.token || user.ticket,
                phone : user.phone
              });
            });
          }, "DidiJSBridgeReady"), false;
        }
        option.default.sdkReady("login", originalEvent, function(attributes) {
          if (attributes.constructor === Error) {
            forOwn(attributes);
          } else {
            attributes.isLogin(function(dataAndEvents, attributes) {
              if (dataAndEvents && attributes.login) {
                _clone({
                  token : attributes.ticket,
                  phone : attributes.cell
                });
              } else {
                forOwn(attributes);
              }
            });
          }
        });
      }
    }
    /**
     * @return {undefined}
     */
    function init() {
      var sprintf = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : util.noop;
      var isString = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : util.noop;
      constructor(function(attributes) {
        if (!attributes.token) {
          return isString(false), false;
        }
        if (sprintf) {
          sprintf(attributes);
        }
      }, function(attributes) {
        if (isString) {
          isString(attributes);
        }
      });
    }
    /**
     * @return {undefined}
     */
    function login() {
      var sendAndCallback = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : util.noop;
      var callback = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : util.noop;
      if (!(0, Block.compareAppVersion)("<", "5.0.10") && obj.default.is("lite,passenger")) {
        insert.call("requestLogin", {}, function(onlyHandlers, target) {
          if (!onlyHandlers && target.userInfo) {
            sendAndCallback(target.userInfo);
          } else {
            callback(false);
          }
        });
      } else {
        option.default.sdkReady("login", originalEvent, function(attributes) {
          if (attributes.constructor === Error) {
            callback(attributes);
          } else {
            attributes.login(function(oauth_token, phone) {
              sendAndCallback({
                phone : phone,
                token : oauth_token
              });
            }, function(paramType, msg) {
              callback({
                type : paramType,
                msg : msg
              });
            });
          }
        });
      }
    }
    /**
     * @return {undefined}
     */
    function logout() {
      var throttledUpdate = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : util.noop;
      var callback = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : util.noop;
      if (obj.default.is("lite,passenger")) {
        login();
      } else {
        option.default.sdkReady("login", originalEvent, function(attributes) {
          if (attributes.constructor === Error) {
            callback(attributes);
          } else {
            attributes.logout(function() {
              throttledUpdate();
            }, function() {
              callback();
            });
          }
        });
      }
    }
    var items = require(2);
    var option = $(items);
    var url = require(1);
    var obj = $(url);
    var util = require(0);
    var selector = require(8);
    var insert = function(value) {
      if (value && value.__esModule) {
        return value;
      }
      var obj = {};
      if (null != value) {
        var key;
        for (key in value) {
          if (Object.prototype.hasOwnProperty.call(value, key)) {
            obj[key] = value[key];
          }
        }
      }
      return obj.default = value, obj;
    }(selector);
    var nodes = require(7);
    var node = $(nodes);
    var Block = require(16);
    var id = require(67);
    var item = $(id);
    /** @type {number} */
    var now = 1;
    /** @type {string} */
    var test = "777777777";
    var originalEvent = node.default.internal.login;
    securityProvider.exports = {
      /** @type {function (): undefined} */
      login : login,
      /** @type {function (): undefined} */
      logout : logout,
      /** @type {function (): undefined} */
      isLogin : init,
      /** @type {function (): ?} */
      getUserInfo : constructor,
      /** @type {function (Object): undefined} */
      setLoginConfig : some
    };
  }, function(dataAndEvents, w, callback) {
    (function(collection) {
      /**
       * @param {?} callback
       * @return {undefined}
       */
      function close(callback) {
        var e = collection.AlipayJSBridge;
        if (void 0 !== e) {
          callback(e);
        } else {
          document.addEventListener("AlipayJSBridgeReady", function(basis) {
            callback(basis);
          });
        }
      }
      Object.defineProperty(w, "__esModule", {
        value : true
      });
      /** @type {function (?): undefined} */
      w.alipayReady = close;
    }).call(w, callback(38));
  }, function(dataAndEvents, w, keys) {
    /**
     * @param {?} cb
     * @return {undefined}
     */
    function close(cb) {
      opts.default.sdkReady("mqq", originalEvent, function(outErr) {
        cb(outErr);
      });
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (?): undefined} */
    w.qqReady = close;
    var props = keys(2);
    var opts = function(options) {
      return options && options.__esModule ? options : {
        default : options
      };
    }(props);
    /** @type {string} */
    var originalEvent = "//open.mobile.qq.com/sdk/qqapi.js";
  }, function(dataAndEvents, w, get) {
    (function(el) {
      /**
       * @param {?} src
       * @return {?}
       */
      function eval(src) {
        return src && src.__esModule ? src : {
          default : src
        };
      }
      /**
       * @param {?} transform
       * @return {undefined}
       */
      function constructor(transform) {
        require(transform);
        obj.default.sdkReady("wx", originalEvent, function(ctx) {
          if (ctx.constructor == Error) {
            transform(ctx);
          } else {
            load(function(status, response) {
              if ("success" === status) {
                var s = el.wx;
                /** @type {Array} */
                var beginswith = ["login", "getLocation", "onMenuShareTimeline", "onMenuShareAppMessage", "hideOptionMenu", "showMenuItems", "hideMenuItems", "onMenuShareQQ", "onMenuShareQZone"];
                var caseSensitive = el._SDK_API_LIST_ || [];
                s.config((0, action.default)({
                  beta : true,
                  debug : false
                }, response.data, {
                  jsApiList : beginswith.concat(caseSensitive)
                }));
                s.ready(function() {
                  transform(el.wx);
                  /** @type {boolean} */
                  el.__wechatReady__ = true;
                });
                s.error(function(code) {
                  transform(code);
                  /** @type {boolean} */
                  el.__wechatReady__ = false;
                });
              } else {
                transform(response);
              }
            });
          }
        });
      }
      /**
       * @param {?} t
       * @return {?}
       */
      function require(t) {
        if (el.__initWechat__) {
          return void test(t);
        }
        /** @type {boolean} */
        el.__initWechat__ = true;
      }
      /**
       * @param {?} t
       * @return {undefined}
       */
      function test(t) {
        /**
         * @return {?}
         */
        function f() {
          if (el.__wechatReady__) {
            return void t(el.wx);
          }
          setTimeout(f, 100);
        }
        f();
      }
      /**
       * @param {Function} callback
       * @return {undefined}
       */
      function load(callback) {
        var req = request();
        var url = req.url;
        var method = req.method;
        (0, b.ajax)({
          url : url,
          method : method,
          dataType : "json",
          data : {
            url : el.location.href.replace(/#.*/, "")
          },
          /**
           * @param {?} opt_attributes
           * @return {undefined}
           */
          success : function(opt_attributes) {
            callback("success", opt_attributes);
          },
          /**
           * @param {?} opt_attributes
           * @param {?} replacementHash
           * @return {undefined}
           */
          error : function(opt_attributes, replacementHash) {
            callback("failed", replacementHash);
          }
        });
      }
      /**
       * @return {?}
       */
      function request() {
        return{
          url : "//common.diditaxi.com.cn/general/webEntry/jsapiticket",
          method : "post"
        };
      }
      /**
       * @param {?} cb
       * @return {undefined}
       */
      function close(cb) {
        constructor(cb);
      }
      Object.defineProperty(w, "__esModule", {
        value : true
      });
      var target = get(121);
      var action = (0,eval)(target);
      /** @type {function (?): undefined} */
      w.weixinReady = close;
      var url = get(2);
      var obj = (0,eval)(url);
      var b = get(130);
      /** @type {string} */
      var originalEvent = "//res.wx.qq.com/open/js/jweixin-1.0.0.js";
    }).call(w, get(38));
  }, function(dataAndEvents, w, $) {
    /**
     * @param {?} url
     * @return {?}
     */
    function load(url) {
      return url && url.__esModule ? url : {
        default : url
      };
    }
    /**
     * @return {undefined}
     */
    function wrap() {
      var actual = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : replacement.noop;
      if (expected.compare(">=", "5.0.10")) {
        expected.call("commonPay", actual, c);
      } else {
        if ("weixin" == actual.type) {
          expected.oldCall("payByWX", actual.pay_params);
          if (obj.default.is("ios")) {
            (0, mask.registerHandler)("paybackWX", function(err, chunk) {
              emit("weixin", chunk, c, err);
            });
          } else {
            /**
             * @param {?} chunk
             * @return {undefined}
             */
            window.paybackWXA = function(chunk) {
              emit("weixin", chunk, c, err);
            };
          }
        } else {
          if ("ali" == actual.type) {
            expected.oldCall("payByAli", actual.pay_params);
            if (obj.default.is("ios")) {
              (0, mask.registerHandler)("paybackAlipay", function(err, chunk) {
                emit("ali", chunk, c, err);
              });
            } else {
              /**
               * @param {?} chunk
               * @return {undefined}
               */
              window.paybackAlipay = function(chunk) {
                emit("ali", chunk, c);
              };
            }
          } else {
            c({
              errno : -1,
              errmsg : "\u5176\u5b83\u7c7b\u578b\u7684\u652f\u4ed8\u6682\u4e0d\u652f\u6301"
            }, {});
          }
        }
      }
    }
    /**
     * @param {string} evt
     * @param {?} data
     * @return {undefined}
     */
    function emit(evt, data) {
      var concat = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : replacement.noop;
      var attributes = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
        errno : 0,
        errmsg : ""
      };
      /** @type {*} */
      var number = "object" == (void 0 === data ? "undefined" : (0, option.default)(data)) ? data : JSON.parse(data);
      /** @type {number} */
      var pay_result = 1;
      if ("weixin" == evt) {
        /** @type {number} */
        pay_result = 0 === number.errCode ? 0 : -2 == number.errCode ? 2 : 1;
      } else {
        if ("ali" == evt) {
          /** @type {number} */
          pay_result = 6001 == +number.resultStatus ? 2 : 9E3 == +number.resultStatus ? 0 : 1;
        }
      }
      concat(attributes, {
        pay_result : pay_result,
        pay_back : number
      });
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var value = $(60);
    var option = load(value);
    /** @type {function (): undefined} */
    w.commonPay = wrap;
    var collection = $(8);
    var expected = function(value) {
      if (value && value.__esModule) {
        return value;
      }
      var obj = {};
      if (null != value) {
        var key;
        for (key in value) {
          if (Object.prototype.hasOwnProperty.call(value, key)) {
            obj[key] = value[key];
          }
        }
      }
      return obj.default = value, obj;
    }(collection);
    var mask = $(23);
    var url = $(1);
    var obj = load(url);
    var replacement = $(0);
  }, function(dataAndEvents, w, require) {
    /**
     * @return {undefined}
     */
    function Datepicker() {
      var r20 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      var find = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : util.noop;
      if (obj.default.is("passenger")) {
        (0, commonPay.commonPay)(r20, find);
      } else {
        find({
          errno : -1,
          errmsg : "\u53ea\u6709\u4e58\u5ba2\u7aef\u6682\u65f6\u652f\u6301\u652f\u4ed8"
        }, {});
      }
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var udataCur = require(8);
    var commonPay = (function(value) {
      if (value && value.__esModule) {
        return value;
      }
      var obj = {};
      if (null != value) {
        var key;
        for (key in value) {
          if (Object.prototype.hasOwnProperty.call(value, key)) {
            obj[key] = value[key];
          }
        }
      }
      /** @type {string} */
      obj.default = value;
    }(udataCur), require(141), require(139));
    var url = require(1);
    var obj = function(url) {
      return url && url.__esModule ? url : {
        default : url
      };
    }(url);
    var util = require(0);
    w.default = {
      /** @type {function (): undefined} */
      one : Datepicker
    };
  }, function(dataAndEvents, w, $sanitize) {
    /**
     * @param {?} err
     * @param {?} data
     * @return {undefined}
     */
    function respond(err, data) {
      finish(err, data);
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (?, ?): undefined} */
    w.commonPay = respond;
    var udataCur = $sanitize(61);
    var finish = function(value) {
      if (value && value.__esModule) {
        return value;
      }
      var obj = {};
      if (null != value) {
        var key;
        for (key in value) {
          if (Object.prototype.hasOwnProperty.call(value, key)) {
            obj[key] = value[key];
          }
        }
      }
      return obj.default = value, obj;
    }(udataCur);
  }, function(dataAndEvents, w, require) {
    /**
     * @param {Element} deepDataAndEvents
     * @param {Element} fn
     * @return {undefined}
     */
    function run(deepDataAndEvents, fn) {
      if (a.compare(">=", "5.1.2")) {
        a.oldCall("openUniPay", deepDataAndEvents, fn);
        if (obj.default.is("ios")) {
          (0, bridge.registerHandler)("sendPayResult", fn);
        }
      } else {
        fn({
          errno : -1,
          errmsg : "\u4f4e\u4e8e5.1.2\u7684\u7248\u672c\u4e0d\u652f\u6301\u62c9\u8d77\u6536\u94f6\u53f0"
        }, {});
      }
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (Element, Element): undefined} */
    w.openUniPay = run;
    var udataCur = require(8);
    var a = function(value) {
      if (value && value.__esModule) {
        return value;
      }
      var obj = {};
      if (null != value) {
        var key;
        for (key in value) {
          if (Object.prototype.hasOwnProperty.call(value, key)) {
            obj[key] = value[key];
          }
        }
      }
      return obj.default = value, obj;
    }(udataCur);
    var bridge = require(23);
    var url = require(1);
    var obj = function(url) {
      return url && url.__esModule ? url : {
        default : url
      };
    }(url);
    obj.default.is("fusion");
  }, function(dataAndEvents, w, symbol) {
    /**
     * @param {?} element
     * @return {undefined}
     */
    function Datepicker(element) {
      var r20 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.noop;
      if (obj.default.is("passenger")) {
        (0, sym.openUniPay)(element, r20);
      } else {
        (0, x.openUniPay)(element, r20);
      }
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var udataCur = symbol(1);
    var obj = function(value) {
      return value && value.__esModule ? value : {
        default : value
      };
    }(udataCur);
    var a = symbol(0);
    var x = symbol(144);
    var sym = symbol(142);
    w.default = {
      /** @type {function (?): undefined} */
      uni : Datepicker
    };
  }, function(dataAndEvents, w, require) {
    /**
     * @param {?} relativeToItem
     * @param {?} opt_obj2
     * @return {undefined}
     */
    function insertBefore(relativeToItem, opt_obj2) {
      (0, Block.sdk)(relativeToItem, opt_obj2);
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (?, ?): undefined} */
    w.openUniPay = insertBefore;
    var Block = require(61);
  }, function(dataAndEvents, w, $sanitize) {
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    function clone(deepDataAndEvents) {
      iworld.wx(deepDataAndEvents);
    }
    /**
     * @param {?} deepDataAndEvents
     * @return {undefined}
     */
    function respond(deepDataAndEvents) {
      iworld.alipay(deepDataAndEvents);
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    /** @type {function (?): undefined} */
    w.wx = clone;
    /** @type {function (?): undefined} */
    w.alipay = respond;
    var udataCur = $sanitize(62);
    var iworld = function(value) {
      if (value && value.__esModule) {
        return value;
      }
      var obj = {};
      if (null != value) {
        var key;
        for (key in value) {
          if (Object.prototype.hasOwnProperty.call(value, key)) {
            obj[key] = value[key];
          }
        }
      }
      return obj.default = value, obj;
    }(udataCur);
  }, function(module, dataAndEvents, require) {
    /**
     * @param {?} url
     * @return {?}
     */
    function parse(url) {
      return url && url.__esModule ? url : {
        default : url
      };
    }
    /**
     * @param {Object} options
     * @return {?}
     */
    function init(options) {
      /** @type {Array} */
      var data = [];
      var testSource = fromIndex;
      if (opts.default.is("guarana")) {
        testSource = services;
      }
      var name;
      for (name in testSource) {
        var ref = testSource[name];
        var task = {};
        if (false !== options[name]) {
          /** @type {({content: ?, icon: ?, title: ?, url: ?}|{image: ?, type: string})} */
          task = "image" === options.type ? {
            type : "image",
            image : options.image
          } : {
            url : options.url,
            icon : options.icon,
            title : options[name + "_title"] || options.title,
            content : options[name + "_content"] || options.content
          };
          data.push({
            type : ref.type,
            name : ref.name,
            data : task
          });
        }
      }
      return false !== options.refresh && data.push({
        type : "refreshPage",
        name : "\u5237\u65b0"
      }), data;
    }
    /**
     * @param {Object} options
     * @return {?}
     */
    function constructor(options) {
      return false === options ? (opts.default.is("passenger") && jQuery.call("hideEntrance", {}, function() {
      }), false) : opts.default.is("driver") && !driver ? void obj.default.sdkReady("didi", self.default.internal.driverBridge, function(dataAndEvents) {
        var app = edit(options);
        setTimeout(function() {
          dataAndEvents.dbridge.initEntrance(app);
          dataAndEvents.dbridge.addCornerButton({
            btnName : "..."
          }, function() {
            has();
          });
        }, 100);
      }, "DidiJSBridgeReady") : (data.buttons = init(options), jQuery.call("initEntrance", data, function(dataAndEvents, deepDataAndEvents) {
      }), opts.default.is("lite,passenger") ? jQuery.call("showEntrance", data, function(dataAndEvents, deepDataAndEvents) {
      }) : opts.default.is("driver") && jQuery.call("addCornerButton", {
        btnName : "..."
      }, function() {
        has();
      }), void(window.__showEntranceCallBack__ = function(attributes) {
        if ((0, util.isStr)(attributes)) {
          try {
            /** @type {*} */
            attributes = JSON.parse(attributes);
          } catch (e) {
            attributes = {};
          }
        }
        if (0 == +attributes.share_result) {
          if (options.success) {
            options.success(attributes);
          }
        } else {
          if (2 == +attributes.share_result) {
            if (options.cancel) {
              options.cancel(attributes);
            }
          } else {
            if (options.fail) {
              options.fail(attributes);
            }
          }
        }
      }));
    }
    /**
     * @param {Object} item
     * @return {?}
     */
    function edit(item) {
      item.share_url = item.url;
      item.share_content = item.content;
      item.share_title = item.title;
      item.share_icon_url = item.icon;
      var state = {
        share_weixin_appmsg : item,
        share_weixin_timeline : item
      };
      return false !== item.sms && (state.share_sms = {
        phone : item.phone || "",
        content : item.sms_content || item.content
      }), state;
    }
    /**
     * @param {Function} i
     * @return {undefined}
     */
    function has(i) {
      if (opts.default.is("passenger, lite, fusion")) {
        jQuery.call("invokeEntrance", {}, i);
      } else {
        obj.default.sdkReady("didi", self.default.internal.driverBridge, function(dataAndEvents) {
          dataAndEvents.dbridge.invokeEntrance();
        }, "DidiJSBridgeReady");
      }
    }
    /**
     * @param {?} id
     * @param {?} nowMillis
     * @return {undefined}
     */
    function cancelAnimationFrame(id, nowMillis) {
      if (-1 !== "weixin_timeline,weixin_appmsg,share_sms".indexOf(id)) {
        obj.default.sdkReady("didi", self.default.internal.driverBridge, function(d) {
          d.dbridge.share(id, nowMillis);
        }, "DidiJSBridgeReady");
      }
    }
    /**
     * @param {Object} item
     * @return {?}
     */
    function onClick(item) {
      var id = item.channel;
      var newMillis = item.cfg;
      var name = item.callback;
      if (id && newMillis) {
        if (opts.default.is("driver") && !driver) {
          return cancelAnimationFrame(id, newMillis);
        }
        var elements = newMillis;
        /** @type {string} */
        var a = "";
        var i = fromIndex;
        if (opts.default.is("guarana")) {
          i = services;
        }
        if (i[id]) {
          a = i[id].type;
        } else {
          name({
            errno : -1,
            errmsg : "\u8be5\u5206\u4eab\u6e20\u9053\u4e0d\u652f\u6301"
          }, {});
        }
        if (a) {
          jQuery.call(a, elements, name);
        }
      } else {
        has(name);
      }
    }
    var udataCur = require(8);
    var jQuery = function(value) {
      if (value && value.__esModule) {
        return value;
      }
      var obj = {};
      if (null != value) {
        var key;
        for (key in value) {
          if (Object.prototype.hasOwnProperty.call(value, key)) {
            obj[key] = value[key];
          }
        }
      }
      return obj.default = value, obj;
    }(udataCur);
    var src = require(1);
    var opts = parse(src);
    var url = require(2);
    var obj = parse(url);
    var dom = require(7);
    var self = parse(dom);
    var util = require(0);
    var driver = opts.default.is("fusion");
    var data = {
      entrance : {
        icon : "http://static.xiaojukeji.com/api/img/i-webview-entrance.png"
      },
      buttons : [],
      windowCallBack : "__showEntranceCallBack__"
    };
    var fromIndex = {
      weixin_timeline : {
        type : "shareWeixinTimeline",
        name : "\u5fae\u4fe1\u670b\u53cb\u5708"
      },
      weixin_appmsg : {
        type : "shareWeixinAppmsg",
        name : "\u5fae\u4fe1\u597d\u53cb"
      },
      qzone : {
        type : "shareQzone",
        name : "QQ\u7a7a\u95f4"
      },
      qq_appmsg : {
        type : "shareQqAppmsg",
        name : "QQ\u597d\u53cb"
      },
      alipay_timeline : {
        type : "shareAlipayLife",
        name : "\u751f\u6d3b\u5708"
      },
      alipay_appmsg : {
        type : "shareAlipayFriend",
        name : "\u652f\u4ed8\u5b9d\u597d\u53cb"
      }
    };
    var services = {
      facebook : {
        type : "shareFacebook",
        name : "Facebook"
      },
      twitter : {
        type : "shareTwitter",
        name : "Twitter"
      },
      line : {
        type : "shareLine",
        name : "Line"
      },
      whatsapp : {
        type : "shareWhatsApp",
        name : "WhatsApp"
      },
      sms : {
        type : "shareSMS",
        name : "SMS"
      },
      email : {
        type : "shareEmail",
        name : "Email"
      },
      messenger : {
        type : "shareMessenger",
        name : "Messenger"
      }
    };
    module.exports = {
      /** @type {function (Object): ?} */
      setShareInApp : constructor,
      /** @type {function (Object): ?} */
      invokeShareInApp : onClick
    };
  }, function(dataAndEvents, w, $) {
    /**
     * @param {?} url
     * @return {?}
     */
    function load(url) {
      return url && url.__esModule ? url : {
        default : url
      };
    }
    /**
     * @return {?}
     */
    function init() {
      var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return options = (0, option.default)(args, options), (0, option.default)(options, {
        content : options.content || (options.desc || options.text),
        icon : options.icon || options.imgUrl,
        url : options.url || (options.link || (options.href || options.shareUrl))
      }), options;
    }
    /**
     * @param {?} event
     * @return {undefined}
     */
    function onComplete(event) {
      if (false !== event) {
        event = init(event);
      }
      if (obj.default.is("lite,passenger,driver")) {
        (0, emptyJ.setShareInApp)(event);
      } else {
        (0, $spy.setShareOutApp)(event);
      }
      args = event;
    }
    /**
     * @return {undefined}
     */
    function onSuccess() {
      var failureMessage = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      var protocols = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      var tapCallback = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {
      };
      if (obj.default.is("lite, passenger, driver")) {
        if (failureMessage) {
          protocols = init(protocols);
          (0, emptyJ.invokeShareInApp)({
            channel : failureMessage,
            cfg : protocols,
            callback : tapCallback
          });
        } else {
          (0, emptyJ.invokeShareInApp)({
            callback : tapCallback
          });
        }
      } else {
        (0, $spy.invokeShareOutApp)(failureMessage, protocols);
      }
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var value = $(3);
    var option = load(value);
    /** @type {function (?): undefined} */
    w.setShare = onComplete;
    /** @type {function (): undefined} */
    w.invokeShare = onSuccess;
    var url = $(1);
    var obj = load(url);
    var $spy = $(148);
    var emptyJ = $(146);
    var args = {
      title : "\u6ef4\u6ef4\u51fa\u884c",
      content : "\u6ef4\u6ef4\u4e00\u4e0b\uff0c\u7f8e\u597d\u51fa\u884c",
      url : window.location.href.replace(/token=[^&]*/, ""),
      icon : "http://static.udache.com/gulfstream/webapp/css/image/share-icon.png"
    };
  }, function(dataAndEvents, w, require) {
    /**
     * @param {?} qualifier
     * @return {undefined}
     */
    function winnow(qualifier) {
      environment.setShare(qualifier);
    }
    /**
     * @param {string} code
     * @param {Object} params
     * @return {undefined}
     */
    function respond(code, params) {
      if (!("weixin_appmsg" !== code && "weixin_timeline" !== code)) {
        /** @type {string} */
        code = "wechat";
      }
      var child = (0, obj.default)({}, params, {
        url : params.url,
        platform : code
      });
      environment.invokeShare(child);
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var url = require(3);
    var obj = function(url) {
      return url && url.__esModule ? url : {
        default : url
      };
    }(url);
    /** @type {function (?): undefined} */
    w.setShareOutApp = winnow;
    /** @type {function (string, Object): undefined} */
    w.invokeShareOutApp = respond;
    var ast = require(62);
    var environment = function(b) {
      if (b && b.__esModule) {
        return b;
      }
      var c = {};
      if (null != b) {
        var e;
        for (e in b) {
          if (Object.prototype.hasOwnProperty.call(b, e)) {
            c[e] = b[e];
          }
        }
      }
      return c.default = b, c;
    }(ast);
  }, function(dataAndEvents, w, require) {
    /**
     * @param {?} type
     * @return {?}
     */
    function $(type) {
      return type && type.__esModule ? type : {
        default : type
      };
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var nodes = require(59);
    var node = $(nodes);
    var helper = require(3);
    var opt = $(helper);
    var items = require(57);
    var option = $(items);
    var header = require(58);
    var opts = $(header);
    var fragment = (0, node.default)(['\n            <div class="dialog-mask"></div>\n            <div class="dialog-main ', '">\n                <div class="dialog-close">\n                ', '\n                    <img class="close-icon" src="', '"/>\n                ', "\n                </div>\n                ", '\n                    <div class="dialog-headImg dialog-headImg-', '"  style="background-image:url(', ')"></div>\n                ', "\n                ", '\n                    <div class="dialog-title">',
    "</div>\n                ", "\n\n                ", '\n                    <div class="dialog-content">', "</div>\n                ", "\n\n                ", "\n                    <div>", "</div>\n                ", "\n\n                ", '\n                    <div class="dialog-btns">\n                        ', '\n                            <div class="dialog-cancel">', "</div>\n                        ", "\n                        ", '\n                            <div class="dialog-ok">',
    "</div>\n                        ", "\n                    </div>\n                ", "\n\n            </div>\n        "], ['\n            <div class="dialog-mask"></div>\n            <div class="dialog-main ', '">\n                <div class="dialog-close">\n                ', '\n                    <img class="close-icon" src="', '"/>\n                ', "\n                </div>\n                ", '\n                    <div class="dialog-headImg dialog-headImg-', '"  style="background-image:url(',
    ')"></div>\n                ', "\n                ", '\n                    <div class="dialog-title">', "</div>\n                ", "\n\n                ", '\n                    <div class="dialog-content">', "</div>\n                ", "\n\n                ", "\n                    <div>", "</div>\n                ", "\n\n                ", '\n                    <div class="dialog-btns">\n                        ', '\n                            <div class="dialog-cancel">', "</div>\n                        ",
    "\n                        ", '\n                            <div class="dialog-ok">', "</div>\n                        ", "\n                    </div>\n                ", "\n\n            </div>\n        "]);
    var config = require(64);
    var ready = require(75);
    var form = ($(ready), require(63));
    var self = $(form);
    var json = require(42);
    var obj = $(json);
    var params = {
      close : obj.default.baxi ? "//static.99taxis.mobi/agility-sdk/static/close.png" : "//img-hxy021.didistatic.com/static/gsh5actimg/dpub2_static/close.png"
    };
    var def = function() {
      /**
       * @param {?} px
       * @return {undefined}
       */
      function draw(px) {
        (0, option.default)(this, draw);
        (0, opt.default)(this, {
          title : "",
          id : "dialog_" + (new Date).getTime(),
          className : "",
          content : "",
          headImg : "",
          headImgType : "",
          okText : "",
          ok : "",
          cancel : "",
          cancelText : "",
          onShow : "",
          onClose : "",
          onRefresh : "",
          extHtml : "",
          ready : ""
        }, px);
        this.icon = params[this.icon] || this.icon;
        this.init();
      }
      return(0, opts.default)(draw, [{
        key : "init",
        /**
         * @return {undefined}
         */
        value : function() {
          this.render();
          this.bindEvent();
        }
      }, {
        key : "render",
        /**
         * @return {undefined}
         */
        value : function() {
          var xhtml = (0, config.template)(fragment, this.className, config.helpers.if(this.icon), this.icon, config.helpers.end(), config.helpers.if(this.headImg && this.headImgType), this.headImgType, this.headImg, config.helpers.end(), config.helpers.if(this.title), this.title, config.helpers.end(), config.helpers.if(this.content), this.content, config.helpers.end(), config.helpers.if(this.extHtml), this.extHtml, config.helpers.end(), config.helpers.if(this.cancelText || this.okText), config.helpers.if(this.cancelText),
          this.cancelText, config.helpers.end(), config.helpers.if(this.okText), this.okText, config.helpers.end(), config.helpers.end());
          /** @type {Element} */
          var element = document.createElement("div");
          /** @type {string} */
          element.className = "D-ui-dialog";
          element.id = this.id;
          element.innerHTML = xhtml;
          document.body.appendChild(element);
        }
      }, {
        key : "bindEvent",
        /**
         * @return {undefined}
         */
        value : function() {
          var me = this;
          /** @type {(Element|null)} */
          this.dialogDom = document.querySelector("#" + this.id);
          /** @type {(Element|null)} */
          this.okDom = this.dialogDom.querySelector(".dialog-ok");
          /** @type {(Element|null)} */
          this.cancelDom = this.dialogDom.querySelector(".dialog-cancel");
          /** @type {(Element|null)} */
          this.maskDom = this.dialogDom.querySelector(".dialog-mask");
          /** @type {(Element|null)} */
          this.closeDom = this.dialogDom.querySelector(".close-icon");
          /**
           * @return {undefined}
           */
          this.okHandle = function() {
            me.close();
            if ("function" == typeof me.ok) {
              me.ok();
            }
          };
          /**
           * @return {undefined}
           */
          this.cancelHandle = function() {
            me.close();
            if ("function" == typeof me.cancel) {
              me.cancel();
            }
          };
          /**
           * @return {undefined}
           */
          this.xCloseHandle = function() {
            me.close();
            if ("function" == typeof me.xClose) {
              me.xClose();
            }
          };
          /**
           * @param {?} event
           * @return {undefined}
           */
          this.maskHandle = function(event) {
            event.preventDefault();
            event.stopPropagation();
          };
          if (this.okDom) {
            this.okDom.addEventListener("click", this.okHandle, false);
          }
          if (this.cancelDom) {
            this.cancelDom.addEventListener("click", this.cancelHandle, false);
          }
          if (this.closeDom) {
            this.closeDom.addEventListener("click", this.xCloseHandle, false);
          }
          this.maskDom.addEventListener("touchmove", this.maskHandle, false);
          if (this.ready) {
            this.ready();
          }
        }
      }, {
        key : "destory",
        /**
         * @return {undefined}
         */
        value : function() {
          if (this.okDom) {
            this.okDom.removeEventListener("touchend", this.okHandle, false);
          }
          if (this.cancelDom) {
            this.cancelDom.removeEventListener("touchend", this.cancelHandle, false);
          }
          if (this.maskDom) {
            this.maskDom.removeEventListener("touchmove", this.maskHandle, false);
          }
          this.dialogDom.remove();
        }
      }, {
        key : "refresh",
        /**
         * @param {?} newValue
         * @return {undefined}
         */
        value : function(newValue) {
          this.destory();
          var bid;
          for (bid in this) {
            if ("id" != bid) {
              /** @type {string} */
              this[bid] = "";
            }
          }
          (0, opt.default)(this, newValue);
          this.init();
          if (this.onRefresh) {
            this.onRefresh();
          }
        }
      }, {
        key : "show",
        /**
         * @param {(Document|string)} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          self.default.css(this.dialogDom, {
            display : "block"
          });
          var conditional = thisValue || this.onShow;
          if (conditional) {
            conditional.call(this);
          }
        }
      }, {
        key : "close",
        /**
         * @param {string} thisValue
         * @return {undefined}
         */
        value : function(thisValue) {
          self.default.css(this.dialogDom, {
            display : "none"
          });
          var conditional = thisValue || this.onClose;
          if (conditional) {
            conditional.call(this);
          }
        }
      }]), draw;
    }();
    w.default = def;
  }, function(dataAndEvents, w, require) {
    /**
     * @param {?} type
     * @return {?}
     */
    function $(type) {
      return type && type.__esModule ? type : {
        default : type
      };
    }
    Object.defineProperty(w, "__esModule", {
      value : true
    });
    var nodes = require(59);
    var node = $(nodes);
    var json = require(3);
    var obj = $(json);
    var helper = require(57);
    var opt = $(helper);
    var header = require(58);
    var opts = $(header);
    var comps = (0, node.default)(["\n                ", '\n                    <img class="toast-icon" src="', '"/>\n                ', "\n                ", '\n                    <div class="toast-msg">', "</div>\n                ", "\n                ", '\n                    <div class="toast-msg nogutter">', "</div>\n                ", "\n        "], ["\n                ", '\n                    <img class="toast-icon" src="', '"/>\n                ', "\n                ", '\n                    <div class="toast-msg">',
    "</div>\n                ", "\n                ", '\n                    <div class="toast-msg nogutter">', "</div>\n                ", "\n        "]);
    var config = require(64);
    var ready = require(76);
    var popover = ($(ready), require(63));
    var tooltip = ($(popover), require(42));
    var elem = ($(tooltip), require(81));
    var property = $(elem);
    var color = {
      success : "",
      warn : "",
      error : "",
      loading : property.default
    };
    var def = function() {
      /**
       * @param {?} opt_handler
       * @return {undefined}
       */
      function init(opt_handler) {
        (0, opt.default)(this, init);
        (0, obj.default)(this, {
          id : "toast" + (new Date).getTime(),
          className : "D-ui-toast-top D-ui-toast-animation",
          showClass : "D-ui-toast-show-top",
          icon : "",
          duration : 2E3,
          msg : "",
          extHtml : "",
          model : "normal"
        }, opt_handler);
        this.icon = color[this.icon] || this.icon;
        this.init();
      }
      return(0, opts.default)(init, [{
        key : "init",
        /**
         * @return {undefined}
         */
        value : function() {
          this.render();
          this.bindEvent();
        }
      }, {
        key : "render",
        /**
         * @return {undefined}
         */
        value : function() {
          var tableHtml = (0, config.template)(comps, config.helpers.if(this.icon), this.icon, config.helpers.end(), config.helpers.if(this.msg), this.msg, config.helpers.end(), config.helpers.if(!this.msg), this.msg, config.helpers.end());
          /** @type {Element} */
          var div = document.createElement("div");
          /** @type {string} */
          div.className = "D-ui-toast " + this.className;
          div.id = this.id;
          div.innerHTML = tableHtml;
          document.body.appendChild(div);
        }
      }, {
        key : "bindEvent",
        /**
         * @return {undefined}
         */
        value : function() {
          var loading = this;
          /** @type {(Element|null)} */
          this.toastDom = document.querySelector("#" + this.id);
          if (this.duration > 0) {
            setTimeout(function() {
              loading.destory();
            }, this.duration);
          }
        }
      }, {
        key : "destory",
        /**
         * @return {undefined}
         */
        value : function() {
          this.toastDom.classList.remove(this.showClass);
          this.toastDom.remove();
        }
      }, {
        key : "show",
        /**
         * @return {undefined}
         */
        value : function() {
          var event = this;
          setTimeout(function() {
            event.toastDom.classList.add(event.showClass);
          }, 0);
        }
      }]), init;
    }();
    w.default = def;
  }, function(module, dataAndEvents, origBinder) {
    var res = origBinder(65);
    /**
     * @param {?} key
     * @return {?}
     */
    var store = function(key) {
      return window.localStorage ? localStorage[key] || null : (0, res.getCookie)(key);
    };
    /**
     * @param {?} n
     * @param {?} val
     * @return {undefined}
     */
    var update = function(n, val) {
      if (window.localStorage) {
        localStorage[n] = val;
      } else {
        /** @type {Date} */
        var exp = new Date;
        exp.setTime(exp.getTime() + 2592E3);
        (0, res.setCookie)(n, val, {
          exp : exp
        });
      }
    };
    /**
     * @param {?} key
     * @return {undefined}
     */
    var save = function(key) {
      var camelKey = store(key);
      if (void 0 !== camelKey) {
        if (window.localStorage) {
          delete localStorage[key];
        } else {
          (0, res.setCookie)(key, camelKey, {
            exp : new Date(0)
          });
        }
      }
    };
    module.exports = {
      /** @type {function (?): ?} */
      getData : store,
      /** @type {function (?, ?): undefined} */
      setData : update,
      /** @type {function (?): undefined} */
      delData : save
    };
  }]);
});
