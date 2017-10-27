var Omega = function(global, doc) {
  var value = global.Omega;
  if (!value || !value.loaded) {
    var items;
    var o;
    var json;
    var error;
    var data;
    var url;
    var val;
    var i;
    var str;
    var testSource;
    var self = {
      /**
       * @return {undefined}
       */
      onJsError: function() {}
    };
    /** @type {string} */
    var jv = "0.1.8";
    /** @type {boolean} */
    var g = false;
    /** @type {Array} */
    var eventPath = [];
    /** @type {string} */
    var nextStack = "OmegaSDK://";
    /** @type {string} */
    var STACK_JUMP_SEPARATOR = "didi";
    /** @type {RegExp} */
    var reWhitespace = /omega/;
    /** @type {RegExp} */
    var rSlash = /^\s*|\s*$/g;
    /** @type {Array} */
    var arr = [];
    /** @type {string} */
    var oldValue = "OMGH5PageView";
    /** @type {string} */
    var OMGH5CustomTiming = "OMGH5CustomTiming";
    /** @type {string} */
    var camelKey = "OMGH5Click";
    /** @type {string} */
    var first = "OMGH5Touch";
    /** @type {string} */
    var rreturn = "omgh5sid";
    /** @type {string} */
    var newId = "omgh5dbg";
    /** @type {string} */
    var key = "omgh5hmp";
    /** @type {string} */
    var code = "omgscfg";
    /** @type {string} */
    var r20 = "omgh5sdbg";
    /** @type {string} */
    var rclass = "omgh5smpl";
    /** @type {string} */
    var name = "omega-auto";
    /** @type {number} */
    var expiry = 1E3;
    /** @type {boolean} */
    var P = /[?&]omg_no_track=1(?:\&|#|$)/.test(location.search);
    /** @type {string} */
    var prefix = "//omgup.xiaojukeji.com/api/webstat/x.gif";
    /** @type {string} */
    var msg = "//omgup.xiaojukeji.com/api/webinfo";
    var events = {};
    var attrs = {};
    var left = navigator.userAgent || (navigator.vendor || global.opera);
    var MutationObserver = global.MutationObserver || (global.WebKitMutationObserver || global.MozMutationObserver);
    /** @type {number} */
    var removeCombos = navigator.cookieEnabled ? 1 : 0;
    var vvar = function() {
      try {
        return top.window === window;
      } catch (e) {
        return false;
      }
    }();
    /**
     * @param {string} regex
     * @return {?}
     */
    var forEach = function(regex) {
      /** @type {Array} */
      var directives = doc.cookie ? doc.cookie.split("; ") : [];
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var len = directives.length;
      for (; len > i; i++) {
        var a = directives[i].split("=");
        if (a[0] === regex) {
          return a[1];
        }
      }
    };
    /**
     * @param {string} regex
     * @param {string} obj
     * @param {boolean} charset
     * @return {undefined}
     */
    var read = function(regex, obj, charset) {
      /** @type {string} */
      doc.cookie = regex + "=" + obj + (charset ? "; expires=" + charset : "") + "; path=/";
    };
    /**
     * @param {string} id
     * @return {?}
     */
    var load = function(id) {
      /** @type {RegExp} */
      var regex = new RegExp("[?&]" + id + "=([^&$]+)");
      return regex.test(location.search) || regex.test(location.hash.slice(1)) ? RegExp.$1 : void 0;
    };
    /**
     * @param {?} method
     * @return {?}
     */
    var parse = function(method) {
      var value = forEach(code);
      try {
        if (value) {
          return value = JSON.parse(value), method ? value[method] : value;
        }
      } catch (n) {}
    };
    /**
     * @param {Object} data
     * @param {?} value
     * @return {undefined}
     */
    var end = function(data, value) {
      var r = parse();
      if (r || (r = {}), is(data, "String")) {
        var cache = {};
        cache[data] = value;
        data = cache;
      }
      var k;
      for (k in data) {
        r[k] = data[k];
      }
      try {
        read(code, JSON.stringify(r));
        func(r, options);
      } catch (a) {}
    };
    /**
     * @return {?}
     */
    var next = function() {
      return (Math.random() + "").substr(2, 12) + "-" + (new Date).getTime();
    };
    /**
     * @param {(number|string)} o
     * @return {undefined}
     */
    var failure = function(o) {
      /** @type {string} */
      json = o + "";
    };
    /**
     * @param {(number|string)} moduleName
     * @return {undefined}
     */
    var lookup = function(moduleName) {
      /** @type {string} */
      url = moduleName + "";
    };
    /**
     * @param {(number|string)} data
     * @return {undefined}
     */
    var trigger = function(data) {
      /** @type {string} */
      error = data + "";
      show("username-received");
    };
    /**
     * @param {(number|string)} url
     * @return {undefined}
     */
    var open = function(url) {
      /** @type {string} */
      data = url + "";
      show("telephone-received");
    };
    /**
     * @param {?} current
     * @return {undefined}
     */
    var direction = function(current) {
      val = current;
    };
    /**
     * @param {(number|string)} o
     * @return {undefined}
     */
    var css = function(o) {
      /** @type {string} */
      i = o + "";
    };
    var ch = next();
    var txt = function() {
      var first = forEach(rreturn);
      return first || read(rreturn, first = ch), first;
    }();
    var child = function() {
      return load(txt);
    }();
    /**
     * @param {Object} value
     * @param {?} obj
     * @return {?}
     */
    var func = function(value, obj) {
      var key;
      for (key in value) {
        if (value.hasOwnProperty(key)) {
          switch (key) {
            case "productName":
              json = value[key] + "";
              break;
            case "userName":
              error = value[key] + "";
              break;
            case "telephone":
              data = value[key] + "";
              break;
            case "pageTitle":
              url = value[key] + "";
              break;
            case "cityId":
              val = value[key];
              break;
            case "channel":
              i = value[key] + "";
              break;
            case "appVersion":
              str = value[key] + "";
              break;
            case "timeout":
              expiry = value[key];
              break;
            default:
              obj[key] = value[key];
          }
        }
      }
      return obj;
    };
    var options = function() {
      var suiteView = {
        autoClick: true,
        autoTouch: false,
        autoError: true,
        noTrack: false,
        autoSendPageView: true
      };
      var ast = parse();
      return ast && func(ast, suiteView), value && (value.constructor === Object && (func(value, suiteView), value = null)), suiteView;
    }();
    /**
     * @return {?}
     */
    var fail = function() {
      return "undefined" != typeof OmegaSDK;
    };
    var ce = function() {
      return left.indexOf(STACK_JUMP_SEPARATOR) >= 0 && reWhitespace.test(left);
    }();
    /**
     * @param {?} obj
     * @return {?}
     */
    var insert = function(obj) {
      return arr.push(obj),
        function() {
          /** @type {number} */
          var i = 0;
          /** @type {number} */
          var l = arr.length;
          for (; l > i; i++) {
            if (arr[i] === obj) {
              return arr.splice(i, 1);
            }
          }
        };
    };
    /**
     * @param {Function} obj
     * @return {?}
     */
    var isArray = function(obj) {
      return Object.prototype.toString.call(obj).match(/\[object\s+(\w+)\]/)[1];
    };
    /**
     * @param {Function} obj
     * @param {string} type
     * @return {?}
     */
    var is = function(obj, type) {
      return isArray(obj) === type;
    };
    var on = function() {
      return global.addEventListener ? function(o, evtName, evtHandler) {
        o.addEventListener(evtName, evtHandler, true);
      } : global.attachEvent ? function(object, sEvent, fpNotify) {
        object.attachEvent("on" + sEvent, fpNotify);
      } : void 0;
    }();
    var addEventListener = function() {
      return global.removeEventListener ? function(el, eventName, f) {
        el.removeEventListener(eventName, f, true);
      } : global.detachEvent ? function(object, sEvent, fpNotify) {
        object.detachEvent("on" + sEvent, fpNotify);
      } : void 0;
    }();
    /**
     * @param {string} n
     * @param {Object} data
     * @return {?}
     */
    var select = function(n, data) {
      var tasks = data["class"];
      if (tasks) {
        /** @type {string} */
        var node = n;
        /** @type {Array} */
        var keys = [];
        if (tasks.constructor === Array) {
          /** @type {number} */
          var i = 0;
          var len = tasks.length;
          for (; len > i; i++) {
            keys.push(" " + tasks[i] + " ");
          }
        } else {
          keys.push(" " + tasks + " ");
        }
        /** @type {number} */
        len = keys.length;
        for (; node && (node !== doc.body && node !== doc.documentElement);) {
          /** @type {string} */
          var rv = " " + node.className + " ";
          /** @type {number} */
          i = 0;
          for (; len > i; i++) {
            if (rv.indexOf(keys[i]) > -1) {
              return node;
            }
          }
          node = node.parentNode;
        }
      }
      var attributeName = data.attr;
      if (attributeName) {
        /** @type {string} */
        node = n;
        for (; node && (node !== doc.body && node !== doc.documentElement);) {
          if (node.hasAttribute(attributeName)) {
            var value = node.getAttribute(attributeName);
            if (!value) {
              return node;
            }
            try {
              /** @type {*} */
              var el = JSON.parse(value);
              return el.target = node, el;
            } catch (d) {
              return node;
            }
          } else {
            node = node.parentNode;
          }
        }
      }
    };
    /**
     * @param {Object} doc
     * @return {undefined}
     */
    var loop = function(doc) {
      if (o) {
        ch = next();
      }
      var tempCtx = {
        nt: 1
      };
      if (doc = doc || {}, global.performance && global.performance.timing) {
        var helper = require();
        var key;
        for (key in helper) {
          doc[key] = helper[key];
        }
      }
      done(initialize([oldValue, doc]), tempCtx);
    };
    /**
     * @return {?}
     */
    var loadScript = function() {
      try {
        var ca = performance.getEntries();
        /** @type {number} */
        var i = 0;
        var l = ca.length;
        for (; l > i; i++) {
          var c = ca[i];
          if ("script" == c.initiatorType && c.name.indexOf("/omega.") > -1) {
            return c;
          }
        }
      } catch (o) {}
    };
    /**
     * @return {?}
     */
    var require = function() {
      /** @type {(PerformanceTiming|null)} */
      var t = global.performance.timing;
      var result = {
        t_fb: t.responseStart - t.navigationStart,
        t_rq: t.responseEnd - t.requestStart,
        t_tcp: t.connectEnd - t.connectStart,
        t_dns: t.domainLookupEnd - t.domainLookupStart,
        t_pgrd: t.loadEventEnd - t.navigationStart,
        t_dmrd: t.domContentLoadedEventEnd - t.navigationStart,
        t_psdm: t.domComplete - t.domInteractive,
        t_di: t.domInteractive - t.domLoading,
        t_dcl: t.domContentLoadedEventEnd - t.domLoading,
        t_dc: t.domComplete - t.domLoading,
        t_ld: t.loadEventEnd - t.loadEventStart
      };
      /** @type {(PerformanceMemory|null)} */
      var obj = global.performance.memory;
      if (obj && (result.m_used = obj.usedJSHeapSize, result.m_total = obj.totalJSHeapSize, result.m_limit = obj.jsHeapSizeLimit), global.chrome && global.chrome.loadTimes) {
        try {
          var lt = global.chrome.loadTimes();
          if (lt) {
            /** @type {number} */
            result.t_fp = 1E3 * lt.firstPaintTime - global.performance.timing.navigationStart;
          }
        } catch (a) {}
      }
      var video = loadScript();
      if (video) {
        /** @type {number} */
        result.t_omgld = Math.round(video.duration);
      }
      var attr;
      for (attr in attrs) {
        var context = result.t_custom;
        if (!context) {
          context = result.t_custom = {};
        }
        context[attr] = attrs[attr];
      }
      try {
        if (context) {
          /** @type {string} */
          result.t_custom = JSON.stringify(context);
        }
      } catch (a) {}
      return result;
    };
    var pe = function() {
      return vvar || !load(newId) && !forEach(r20) ? false : (read(r20, "1"), true);
    }();
    var useTouch = function() {
      return vvar ? false : load(key);
    }();
    /**
     * @param {string} value
     * @param {?} models
     * @param {?} obj
     * @param {Object} params
     * @param {?} callback
     * @return {undefined}
     */
    var add = function(value, models, obj, params, callback) {
      var c;
      var newVersion;
      var start = params.ts;
      if (!(value !== oldValue)) {
        if (!o) {
          /** @type {boolean} */
          o = true;
        }
      }
      /** @type {string} */
      var message = "?e=" + value;
      var parameter;
      for (parameter in params) {
        message += "&" + parameter + "=" + encodeURIComponent(params[parameter]);
      }
      if (message += "&attrs=" + encodeURIComponent(JSON.stringify(obj)), pe) {
        try {
          top.window.postMessage("omgh5:log:" + message, "*");
        } catch (d) {}
      } else {
        if (callback) {
          setTimeout(function() {
            if (!c) {
              /** @type {boolean} */
              newVersion = true;
              callback(value, models, obj, params, newVersion);
            }
          }, expiry);
        }
        /** @type {Image} */
        var img = global["_t_ig" + start] = new Image;
        /**
         * @return {undefined}
         */
        img.onload = function() {
          try {
            /** @type {null} */
            img.onload = img.onerror = img.onabort = null;
            delete global["_t_ig" + start];
          } finally {
            if (!newVersion) {
              /** @type {boolean} */
              c = true;
              if (callback) {
                callback(value, models, obj, params);
              }
            }
          }
        };
        /** @type {function (): undefined} */
        img.onerror = img.onabort = function() {
          /** @type {number} */
          var rnd = +(img.getAttribute("count") || 0);
          img.setAttribute("count", ++rnd);
          if (4 > rnd) {
            setTimeout(function() {
              img.src = prefix + message + "&_rt=" + rnd;
            }, 100);
          }
        };
        /** @type {string} */
        img.src = prefix + message;
      }
    };
    /**
     * @param {Node} el
     * @return {?}
     */
    var remove = function(el) {
      var arr = el.parentNode.children;
      /** @type {number} */
      var i = 0;
      var l = arr.length;
      for (; l > i; i++) {
        if (arr[i] === el) {
          return i;
        }
      }
    };
    /**
     * @param {string} next
     * @return {?}
     */
    var fn = function(next) {
      var t;
      /** @type {Array} */
      var list = [];
      /** @type {string} */
      var el = next;
      try {
        for (;
          "BODY" !== el.nodeName;) {
          var arg = el.getAttribute("id") || el.getAttribute("name");
          if (arg) {
            list.unshift(arg);
            /** @type {number} */
            t = 1;
            break;
          }
          list.unshift(remove(el));
          el = el.parentNode;
        }
        if (!t) {
          list.unshift("body");
        }
      } catch (r) {
        /** @type {number} */
        list.length = 0;
      }
      return list.length ? list.join("->") : "";
    };
    /**
     * @param {(Element|string)} el
     * @param {string} ev
     * @param {Object} data
     * @param {number} deepDataAndEvents
     * @return {undefined}
     */
    var wrap = function(el, ev, data, deepDataAndEvents) {
      var l;
      var old = {};
      ev = ev || global.event;
      var element = ev.target || ev.srcElement;
      if (data && is(data, "Object")) {
        var e = select(element, data);
        if (e) {
          if (is(e, "Object")) {
            if (el = e.e || el, l = e.l, e.attrs && is(e.attrs, "Object")) {
              var name;
              for (name in e.attrs) {
                old[name] = e.attrs[name];
              }
            }
            element = e.target;
          }
        } else {
          if (!deepDataAndEvents) {
            return;
          }
        }
      } else {
        if (!deepDataAndEvents) {
          return;
        }
      }
      show(el, l || element.tagName, old, element, ev, true);
    };
    /**
     * @param {string} index
     * @return {?}
     */
    var handler = function(index) {
      /** @type {number} */
      var argLength = arguments.length;
      var options = {
        eventId: index
      };
      /** @type {number} */
      var lastIndex = 1;
      for (; argLength > lastIndex; lastIndex++) {
        var target = arguments[lastIndex];
        var type = isArray(target);
        switch (type) {
          case "String":
            options.eventLabel = target;
            break;
          case "Object":
            options.attrs = target;
            break;
          case "Function":
            options.callback = target;
            break;
          case "Boolean":
            options.auto = target;
            break;
          case "MouseEvent":
            ;
          case "TouchEvent":
            options.event = target;
            break;
          case "Undefined":
            ;
          case "Null":
            break;
          default:
            options.target = target;
        }
      }
      return options;
    };
    /**
     * @param {?} index
     * @param {(Node|string)} callback
     * @param {?} element
     * @return {?}
     */
    var ready = function(index, callback, element) {
      var p = {
        v: location.href,
        r: doc.referrer || "",
        c: removeCombos,
        ts: (new Date).getTime(),
        fp: 1,
        p: ch,
        jv: jv,
        pt: url || (doc.title || "")
      };
      return removeCombos && (p.s = txt), callback && (p.l = callback), json && (p.pn = json), error && (p.un = error), data && (p.tel = data), val && (p.ct = val), i && (p.ch = i), str && (p.av = str), child && (p.rs = child), p;
    };
    /**
     * @param {string} s
     * @return {?}
     */
    var esc = function(s) {
      return s.replace(rSlash, "");
    };
    /**
     * @param {Element} elem
     * @return {?}
     */
    var walk = function(elem) {
      try {
        var nodeName = elem.nodeName;
        if ("INPUT" === nodeName && "button" === elem.type) {
          return elem.value;
        }
        if ("SELECT" === nodeName || ("INPUT" === nodeName || "TEXTAREA" === nodeName)) {
          /** @type {Array} */
          var result = [];
          var n = elem.previousSibling;
          if (n) {
            if (3 == n.nodeType) {
              result.push(esc(n.nodeValue));
            }
          }
          if (elem.placeholder) {
            result.push("placeholder=" + elem.placeholder);
          }
          if (elem.id) {
            result.push("id=" + elem.id);
          }
          if (elem.name) {
            result.push("name=" + elem.name);
          }
          if (elem.className) {
            result.push("class=" + elem.className);
          }
          var node = elem.nextSibling;
          return node && (3 == node.nodeType && result.push(esc(node.nodeValue))), result.join(" ");
        }
        var options = elem.childNodes;
        /** @type {Array} */
        result = [];
        /** @type {number} */
        var i = 0;
        var len = options.length;
        for (; len > i; i++) {
          var v = options[i];
          if (3 == v.nodeType) {
            result.push(esc(v.nodeValue));
          }
        }
        return result.join(" ");
      } catch (l) {}
    };
    /**
     * @param {Element} node
     * @param {Object} params
     * @param {Event} event
     * @return {?}
     */
    var update = function(node, params, event) {
      params = params || {};
      if (node.id) {
        params.id = node.id;
      }
      if (node.className) {
        params["class"] = node.className;
      }
      if (node.href) {
        params.href = node.href;
      }
      if (node.name) {
        params.name = node.name;
      }
      var data = walk(node);
      if (data && (data.length > 50 && (data = data.substr(0, 50) + "..."), params.text = data), node.getBoundingClientRect) {
        var result = node.getBoundingClientRect();
        /** @type {number} */
        params.ex = Math.round(result.left);
        /** @type {number} */
        params.ey = Math.round(result.top);
        if (result.width) {
          /** @type {number} */
          params.ew = Math.round(result.width);
        }
        if (result.height) {
          /** @type {number} */
          params.eh = Math.round(result.height);
        }
      }
      if (!params.eh && (node.offsetHeight && (params.eh = node.offsetHeight)), !params.ew && (node.offsetWidth && (params.ew = node.offsetWidth)), event) {
        /** @type {number} */
        var body_scrollLeft = doc.documentElement.scrollLeft || (doc.body && doc.body.scrollLeft || 0);
        /** @type {number} */
        var body_scrollTop = doc.documentElement.scrollTop || (doc.body && doc.body.scrollTop || 0);
        var offset = event.pageX || event.clientX + body_scrollLeft;
        var lat = event.pageY || event.clientY + body_scrollTop;
        params.x = offset;
        params.y = lat;
      }
      result = fn(node);
      return result && (params.rn = result), params.h = doc.documentElement.scrollHeight || (doc.body && doc.body.scrollHeight || 0), params.w = doc.documentElement.scrollWidth || (doc.body && doc.body.scrollWidth || 0), params;
    };
    /**
     * @param {Object} config
     * @return {?}
     */
    var initialize = function(config) {
      config = handler.apply(null, config);
      var index = config.eventId;
      var restoreScript = config.eventLabel || "";
      var params = config.attrs || {};
      var element = config.target;
      var te = config.event;
      var callback = config.callback;
      var name;
      for (name in options) {
        if (!params.hasOwnProperty(name)) {
          params[name] = options[name];
        }
      }
      if (params = extend(index, params, element), element && ((index === camelKey || (index === first || config.auto)) && (params = update(element, params, te), testSource))) {
        for (name in testSource) {
          params[name] = testSource[name]();
        }
      }
      return {
        eventId: index,
        callback: callback,
        eventLabel: restoreScript,
        attrs: params,
        sys: ready(index, restoreScript, element)
      };
    };
    /**
     * @return {undefined}
     */
    var show = function() {
      try {
        var out = initialize(arguments);
        done(out);
      } catch (t) {}
    };
    /**
     * @param {Object} options
     * @param {Object} ctx
     * @return {undefined}
     */
    var done = function(options, ctx) {
      if (!P) {
        var id = options.eventId;
        var data = options.eventLabel;
        var callback = options.callback;
        var obj = options.attrs;
        var context = options.sys;
        /** @type {string} */
        var extra = JSON.stringify(ctx || {});
        /** @type {string} */
        var type = JSON.stringify(obj);
        /** @type {string} */
        var value = JSON.stringify(context);
        if ("OMGH5JsError" === id && self.onJsError(data, context, obj), fail()) {
          if (OmegaSDK.trackEventEx) {
            try {
              OmegaSDK.trackEventEx(id, data, type, value, extra);
              if (callback) {
                callback(id, data, obj, context);
              }
            } catch (s) {
              add(id, data, obj, context, callback);
            }
          } else {
            if (OmegaSDK.trackEvent) {
              try {
                OmegaSDK.trackEvent(id, data, type, value);
                if (callback) {
                  callback(id, data, obj, context);
                }
              } catch (s) {
                try {
                  OmegaSDK.trackEvent(id, data, type);
                  if (callback) {
                    callback(id, data, obj, context);
                  }
                } catch (s) {
                  add(id, data, obj, context, callback);
                }
              }
            } else {
              add(id, data, obj, context, callback);
            }
          }
        } else {
          if (ce) {
            /** @type {string} */
            var message = nextStack + "trackEvent?e=" + id;
            message += "&attrs=" + type;
            message += "&sys=" + value;
            if (ctx) {
              message += "&ex=" + extra;
            }
            global.prompt(message);
            if (callback) {
              callback(id, data, obj, context);
            }
          } else {
            add(id, data, obj, context, callback);
          }
        }
      }
    };
    /**
     * @param {Array} stack
     * @param {string} d
     * @param {?} key
     * @param {?} c
     * @param {?} e
     * @return {undefined}
     */
    var callback = function(stack, d, key, c, e) {
      var state = {
        line: key,
        url: d
      };
      if (c) {
        state.col = c;
      }
      if (e) {
        if (e.stack) {
          stack = e.stack;
        }
      }
      show("OMGH5JsError", stack, state);
    };
    /**
     * @return {undefined}
     */
    var handleGlobalError = function() {
      if (!events.jserror) {
        /** @type {number} */
        events.jserror = 1;
        /** @type {(function (string, string, number): ?|null)} */
        var fn = global.onerror;
        /**
         * @param {Array} er
         * @param {string} ev
         * @param {?} url
         * @param {?} error
         * @param {?} evt
         * @return {undefined}
         */
        global.onerror = function(er, ev, url, error, evt) {
          callback(er, ev, url, error, evt);
          if ("function" == typeof fn) {
            fn.apply(global, arguments);
          }
        };
      }
    };
    /**
     * @param {?} value
     * @param {Object} data
     * @param {?} list
     * @return {?}
     */
    var extend = function(value, data, list) {
      data = data || {};
      /** @type {number} */
      var i = 0;
      /** @type {number} */
      var l = arr.length;
      for (; l > i; i++) {
        var result = arr[i].call(list, value, data, list);
        if (result && is(result, "Object")) {
          var k;
          for (k in result) {
            data[k] = result[k];
          }
        }
      }
      return func(data, {});
    };
    /**
     * @return {?}
     */
    var exec = function() {
      if (fail()) {
        try {
          return OmegaSDK.getInfo();
        } catch (e) {}
      }
    };
    /**
     * @param {Function} entity
     * @param {Function} fn
     * @return {undefined}
     */
    var init = function(entity, fn) {
      try {
        /** @type {Element} */
        var element = doc.createElement("script");
        doc.documentElement.appendChild(element);
        /** @type {string} */
        var id = max() + "_" + ("" + Math.random()).substr(2, 9);
        element.onload = function(timer) {
          return function() {
            doc.documentElement.removeChild(element);
          };
        }(id);
        if (entity) {
          if (is(entity, "Function")) {
            self["__callback" + id] = function() {
              return function(file_data) {
                entity(JSON.parse(file_data));
                delete self["__callback" + id];
              };
            }(id);
            /** @type {string} */
            element.src = msg + "?callback=Omega.__callback" + id;
          }
        }
        element.onerror = function(event) {
          return function() {
            if (fn) {
              if (is(fn, "Function")) {
                fn();
              }
            }
            doc.documentElement.removeChild(element);
            delete self["__callback" + event];
          };
        }(id);
      } catch (a) {}
    };
    /**
     * @param {Object} filter
     * @param {Function} type
     * @return {?}
     */
    var exports = function(filter, type) {
      var ret;
      if (filter && is(filter, "Function")) {
        if (items) {
          return void filter(items);
        }
        init(function(node) {
          filter(items = node.clientid);
        }, type);
      } else {
        if (Promise) {
          if (Promise.all) {
            ret = new Promise(function(filter, doc) {
              if (items) {
                filter(items);
              } else {
                init(function(node) {
                  filter(items = node.clientid);
                }, doc);
              }
            });
          }
        }
      }
      return ret;
    };
    /**
     * @param {string} type
     * @param {string} key
     * @param {Object} listener
     * @param {number} deepDataAndEvents
     * @return {undefined}
     */
    var listen = function(type, key, listener, deepDataAndEvents) {
      var eventFns = events[type];
      if (eventFns) {
        addEventListener(doc, type, eventFns);
      }
      /**
       * @param {string} comment
       * @return {undefined}
       */
      events[type] = function(comment) {
        wrap(key, comment, listener, deepDataAndEvents);
      };
      on(doc, type, events[type]);
    };
    var max = function() {
      if (global.performance && global.performance.now) {
        return function() {
          return parseInt(global.performance.now());
        };
      }
      /** @type {number} */
      var nowOffset = Date.now();
      return global.performance && (global.performance.timing && (nowOffset = global.performance.timing.navigationStart)),
        function() {
          return Date.now() - nowOffset;
        };
    }();
    /**
     * @param {?} selector
     * @return {undefined}
     */
    var setup = function(selector) {
      if (global.performance) {
        if (performance.timing) {
          if (is(selector, "String")) {
            attrs["" + selector] = max();
          }
        }
      }
    };
    /**
     * @param {Object} eventName
     * @return {undefined}
     */
    var render = function(eventName) {
      listen("click", camelKey, eventName, 1);
    };
    /**
     * @param {Object} callback
     * @return {undefined}
     */
    var stop = function(callback) {
      listen("touchstart", first, callback, 1);
    };
    /**
     * @param {Object} callback
     * @return {undefined}
     */
    var delegate = function(callback) {
      listen("click", camelKey, callback);
    };
    /**
     * @param {Object} callback
     * @return {undefined}
     */
    var touch = function(callback) {
      listen("touchstart", first, callback);
    };
    /**
     * @param {number} key
     * @return {?}
     */
    var process = function(key) {
      var suiteView = forEach(rclass);
      if (!suiteView) {
        /** @type {Date} */
        var now = new Date;
        /** @type {number} */
        suiteView = now.getTime();
        now.setFullYear(now.getFullYear() + 30);
        read(rclass, suiteView, now.toGMTString());
      }
      return suiteView % (1 / key) === 0;
    };
    /**
     * @param {boolean} err
     * @param {number} index
     * @param {Object} version
     * @param {Object} options
     * @param {number} last
     * @return {undefined}
     */
    var test = function(err, index, version, options, last) {
      if (err && ("string" == typeof err && "number" == typeof index)) {
        last = last || 0.1;
        options = options || {};
        /** @type {number} */
        options.ms = index;
        var tempCtx = {
          nt: 1
        };
        if (version) {
          /** @type {Object} */
          options.version = version;
        }
        if (process(last)) {
          done(initialize([OMGH5CustomTiming, err, options]), tempCtx);
        }
      }
    };
    /**
     * @return {undefined}
     */
    var send = function() {
      /** @type {Array.<?>} */
      var args = Array.prototype.slice.call(arguments);
      var camelKey = args.pop();
      if (process(camelKey)) {
        show.apply(null, args);
      }
    };
    if (options.autoClick) {
      if (is(options.autoClick, "Object")) {
        render(options.autoClick);
      } else {
        render();
      }
    }
    if (options.autoTouch) {
      if (is(options.autoTouch, "Object")) {
        stop(options.autoTouch);
      } else {
        stop();
      }
    }
    if (options.filterClick) {
      if (is(options.filterClick, "Object")) {
        delegate(options.filterClick);
      }
    }
    if (options.filterTouch) {
      if (is(options.filterTouch, "Object")) {
        touch(options.filterTouch);
      }
    }
    if (options.autoError) {
      handleGlobalError();
    }
    if (options.noTrack) {
      /** @type {number} */
      P = 1;
    }
    var async = options.autoSendPageView;
    if (delete options.autoClick, delete options.autoTouch, delete options.autoError, delete options.debugMode, delete options.autoSendPageView, delete options.filterClick, delete options.filterTouch, delete options.noTrack, MutationObserver) {
      try {
        /** @type {MutationObserver} */
        var observer = new MutationObserver(function(dataAndEvents) {
          cb(doc.body);
        });
        on(global, "load", function() {
          var observerOptions = {
            childList: true,
            subtree: true
          };
          observer.observe(doc.body, observerOptions);
        });
      } catch (ze) {}
    }
    /**
     * @param {Object} node
     * @return {undefined}
     */
    var cb = function(node) {
      var map = {};
      var elems = node.getElementsByTagName("*");
      /** @type {Object} */
      elems[elems.length] = node;
      /** @type {number} */
      var id = 0;
      var el = elems.length;
      for (; el > id; id++) {
        var elem = elems[id];
        var nodeType = elem.nodeName;
        switch (nodeType) {
          case "INPUT":
            var state = elem.type;
            if (!!elem.name) {
              if (!("text" !== state && "hidden" !== state)) {
                map[elem.name] = function(elem) {
                  return function() {
                    return elem.value;
                  };
                }(elem);
              }
            }
            break;
          case "TEXTAREA":
            if (elem.name) {
              map[elem.name] = function(elem) {
                return function() {
                  return elem.value;
                };
              }(elem);
            };
        }
        if (elem.hasAttribute(name)) {
          var names = elem.getAttribute(name);
          if (names) {
            var arr = names.split(":");
            map[arr[0]] = function(a, type) {
              return function() {
                return "text" === type ? a.textContent || a.innerText : a.value;
              };
            }(elem, arr[1]);
          } else {
            if (elem.name) {
              map[elem.name] = function(elem) {
                return function() {
                  return elem.value;
                };
              }(elem);
            }
          }
        }
      }
      testSource = map;
    };
    return on(global, "load", function() {
        /** @type {boolean} */
        g = true;
        for (; eventPath.length;) {
          setTimeout(eventPath.pop(), 10);
        }
      }), pe && ! function() {
        var _restoreBorderStyle;
        var name;
        var tref;
        on(doc, "mouseover", function(ev) {
          var view = ev.target;
          var data = fn(view);
          _restoreBorderStyle = view.style.border;
          /** @type {string} */
          view.style.border = "2px solid #f00";
          name = view.title;
          view.title = data;
          /** @type {number} */
          tref = setTimeout(function() {
            top.window.postMessage("omgh5:rncopy:" + data, "*");
          }, 1E3);
        });
        on(doc, "mouseout", function(e) {
          var element = e.target;
          element.style.border = _restoreBorderStyle;
          element.title = name;
          clearTimeout(tref);
        });
      }(), useTouch && on(global, "message", function(err) {
        try {
          err.data.replace(/^omgh5\:rnheat\:(.+)$/, function(dataAndEvents, pair) {
            var children = pair.split("->");
            var name = children[0];
            /** @type {(HTMLElement|null)} */
            var obj = doc.body;
            if ("body" !== name) {
              /** @type {(HTMLElement|null)} */
              obj = doc.getElementById(name);
            }
            if (!obj) {
              obj = doc.getElementsByName(name)[0];
            }
            /** @type {number} */
            var i = 1;
            var l = children.length;
            for (; l > i; i++) {
              obj = obj.children[children[i]];
            }
            if (obj) {
              top.window.postMessage("omgh5:rninfo:" + JSON.stringify(update(obj)), "*");
            }
          });
        } catch (e) {}
      }), (pe || useTouch) && ! function() {
        var buf = {};
        on(global, "message", function(err) {
          try {
            err.data.replace(/^omgh5\:rnhover\:(.+)$/, function(dataAndEvents, off) {
              var keys = off.split("->");
              var id = keys[0];
              /** @type {(HTMLElement|null)} */
              var elem = doc.body;
              if ("body" !== id) {
                /** @type {(HTMLElement|null)} */
                elem = doc.getElementById(id);
              }
              if (!elem) {
                elem = doc.getElementsByName(id)[0];
              }
              /** @type {number} */
              var i = 1;
              var len = keys.length;
              for (; len > i; i++) {
                elem = elem.children[keys[i]];
              }
              if (elem) {
                var border = elem.style.border;
                buf[off] = border;
                /** @type {string} */
                elem.style.border = "2px solid #f00";
                setTimeout(function() {
                  elem.style.border = border;
                }, 3E3);
              }
            });
            err.data.replace(/^omgh5\:rnout\:(.+)$/, function(dataAndEvents, off) {
              var keys = off.split("->");
              var id = keys[0];
              /** @type {(HTMLElement|null)} */
              var elem = doc.body;
              if ("body" !== id) {
                /** @type {(HTMLElement|null)} */
                elem = doc.getElementById(id);
              }
              if (!elem) {
                elem = doc.getElementsByName(id)[0];
              }
              /** @type {number} */
              var i = 1;
              var len = keys.length;
              for (; len > i; i++) {
                elem = elem.children[keys[i]];
              }
              if (elem) {
                elem.style.border = buf[off];
              }
            });
            err.data.replace(/^omgh5\:go(\w+)$/, function(dataAndEvents, i) {
              global.history[i]();
            });
          } catch (r) {}
        });
      }(), async && eventPath.push(loop), self.trackEvent = show, self.getAppSdkInfo = exec, self.trackError = callback, self.addTrackHandler = insert, self.enableClickAutoTracker = render, self.enableTouchAutoTracker = stop, self.enableClickFilterTracker = delegate, self.enableTouchFilterTracker = touch, self.setProduct = failure, self.setUserName = trigger, self.setTelephone = open, self.setPageTitle = lookup, self.setCityId = direction, self.setChannel = css, self.sendPageView = loop, self.markTimePoint =
      setup, self.setSessionConfig = end, self.trackTiming = test, self.trackEventSample = send, self.sid = function() {
        return txt;
      }, self.getProduct = function() {
        return json;
      }, self.getClientId = exports, self.enableDebugMode = function() {}, self.trackPerformance = function() {}, self.bindEvent = on, self.getQuery = load, self.loaded = true, self;
  }
}(window, document);
