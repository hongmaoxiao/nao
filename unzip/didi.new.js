var Zepto = function() {
  /**
   * @param {Function} obj
   * @return {?}
   */
  function type(obj) {
    return null == obj ? String(obj) : class2type[core_toString.call(obj)] || "object";
  }
  /**
   * @param {Function} val
   * @return {?}
   */
  function isFunction(val) {
    return "function" == type(val);
  }
  /**
   * @param {Object} obj
   * @return {?}
   */
  function isWindow(obj) {
    return null != obj && obj == obj.window;
  }
  /**
   * @param {Object} obj
   * @return {?}
   */
  function isDocument(obj) {
    return null != obj && obj.nodeType == obj.DOCUMENT_NODE;
  }
  /**
   * @param {Function} val
   * @return {?}
   */
  function isObject(val) {
    return "object" == type(val);
  }
  /**
   * @param {Function} obj
   * @return {?}
   */
  function isPlainObject(obj) {
    return isObject(obj) && (!isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype);
  }
  /**
   * @param {string} obj
   * @return {?}
   */
  function likeArray(obj) {
    return "number" == typeof obj.length;
  }
  /**
   * @param {Object} elems
   * @return {?}
   */
  function compact(elems) {
    return fn.call(elems, function(dataAndEvents) {
      return null != dataAndEvents;
    });
  }
  /**
   * @param {?} array
   * @return {?}
   */
  function flatten(array) {
    return array.length > 0 ? jQuery.fn.concat.apply([], array) : array;
  }
  /**
   * @param {string} str
   * @return {?}
   */
  function dasherize(str) {
    return str.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase();
  }
  /**
   * @param {string} name
   * @return {?}
   */
  function classRE(name) {
    return name in classCache ? classCache[name] : classCache[name] = new RegExp("(^|\\s)" + name + "(\\s|$)");
  }
  /**
   * @param {string} name
   * @param {number} value
   * @return {?}
   */
  function maybeAddPx(name, value) {
    return "number" != typeof value || cssNumber[dasherize(name)] ? value : value + "px";
  }
  /**
   * @param {?} nodeName
   * @return {?}
   */
  function defaultDisplay(nodeName) {
    var element;
    var display;
    return elementDisplay[nodeName] || (element = doc.createElement(nodeName), doc.body.appendChild(element), display = getComputedStyle(element, "").getPropertyValue("display"), element.parentNode.removeChild(element), "none" == display && (display = "block"), elementDisplay[nodeName] = display), elementDisplay[nodeName];
  }
  /**
   * @param {Element} node
   * @return {?}
   */
  function children(node) {
    return "children" in node ? slice.call(node.children) : jQuery.map(node.childNodes, function(dest) {
      return 1 == dest.nodeType ? dest : void 0;
    });
  }
  /**
   * @param {Object} obj
   * @param {Object} source
   * @param {?} deep
   * @return {undefined}
   */
  function extend(obj, source, deep) {
    for (key in source) {
      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
        if (isPlainObject(source[key])) {
          if (!isPlainObject(obj[key])) {
            obj[key] = {};
          }
        }
        if (isArray(source[key])) {
          if (!isArray(obj[key])) {
            /** @type {Array} */
            obj[key] = [];
          }
        }
        extend(obj[key], source[key], deep);
      } else {
        if (source[key] !== target) {
          obj[key] = source[key];
        }
      }
    }
  }
  /**
   * @param {?} nodes
   * @param {Object} selector
   * @return {?}
   */
  function filtered(nodes, selector) {
    return null == selector ? jQuery(nodes) : jQuery(nodes).filter(selector);
  }
  /**
   * @param {Object} elems
   * @param {Function} arg
   * @param {Object} idx
   * @param {?} payload
   * @return {?}
   */
  function funcArg(elems, arg, idx, payload) {
    return isFunction(arg) ? arg.call(elems, idx, payload) : arg;
  }
  /**
   * @param {Element} node
   * @param {?} name
   * @param {number} value
   * @return {undefined}
   */
  function setAttribute(node, name, value) {
    if (null == value) {
      node.removeAttribute(name);
    } else {
      node.setAttribute(name, value);
    }
  }
  /**
   * @param {Element} element
   * @param {string} value
   * @return {?}
   */
  function className(element, value) {
    var elem = element.className || "";
    var isParentListItem = elem && elem.baseVal !== target;
    return value === target ? isParentListItem ? elem.baseVal : elem : void(isParentListItem ? elem.baseVal = value : element.className = value);
  }
  /**
   * @param {string} data
   * @return {?}
   */
  function deserializeValue(data) {
    try {
      return data ? "true" == data || ("false" == data ? false : "null" == data ? null : +data + "" == data ? +data : /^[\[\{]/.test(data) ? jQuery.parseJSON(data) : data) : data;
    } catch (t) {
      return data;
    }
  }
  /**
   * @param {Element} node
   * @param {Function} fun
   * @return {undefined}
   */
  function traverseNode(node, fun) {
    fun(node);
    /** @type {number} */
    var key = 0;
    var cnl = node.childNodes.length;
    for (;cnl > key;key++) {
      traverseNode(node.childNodes[key], fun);
    }
  }
  var target;
  var key;
  var jQuery;
  var classList;
  var camelize;
  var uniq;
  /** @type {Array} */
  var $ = [];
  /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
  var slice = $.slice;
  /** @type {function (this:(Array.<T>|string|{length: number}), (function (this:S, T, number, Array.<T>): ?|null), S=): Array.<T>} */
  var fn = $.filter;
  /** @type {Document} */
  var doc = window.document;
  var elementDisplay = {};
  var classCache = {};
  var cssNumber = {
    "column-count" : 1,
    columns : 1,
    "font-weight" : 1,
    "line-height" : 1,
    opacity : 1,
    "z-index" : 1,
    zoom : 1
  };
  /** @type {RegExp} */
  var fragmentRE = /^\s*<(\w+|!)[^>]*>/;
  /** @type {RegExp} */
  var BEGIN_TAG_REGEXP = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  /** @type {RegExp} */
  var matchAll = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
  /** @type {RegExp} */
  var rootNodeRE = /^(?:body|html)$/i;
  /** @type {RegExp} */
  var r20 = /([A-Z])/g;
  /** @type {Array} */
  var methodAttributes = ["val", "css", "html", "text", "data", "width", "height", "offset"];
  /** @type {Array} */
  var adjacencyOperators = ["after", "prepend", "before", "append"];
  /** @type {Element} */
  var table = doc.createElement("table");
  /** @type {Element} */
  var tableRow = doc.createElement("tr");
  var containers = {
    tr : doc.createElement("tbody"),
    tbody : table,
    thead : table,
    tfoot : table,
    td : tableRow,
    th : tableRow,
    "*" : doc.createElement("div")
  };
  /** @type {RegExp} */
  var rxReady = /complete|loaded|interactive/;
  /** @type {RegExp} */
  var simpleSelectorRE = /^[\w-]*$/;
  var class2type = {};
  /** @type {function (this:*): string} */
  var core_toString = class2type.toString;
  var zepto = {};
  /** @type {Element} */
  var tempParent = doc.createElement("div");
  var propMap = {
    tabindex : "tabIndex",
    readonly : "readOnly",
    for : "htmlFor",
    class : "className",
    maxlength : "maxLength",
    cellspacing : "cellSpacing",
    cellpadding : "cellPadding",
    rowspan : "rowSpan",
    colspan : "colSpan",
    usemap : "useMap",
    frameborder : "frameBorder",
    contenteditable : "contentEditable"
  };
  /** @type {function (*): boolean} */
  var isArray = Array.isArray || function(value) {
    return value instanceof Array;
  };
  return zepto.matches = function(element, selector) {
    var matchesSelector;
    var i;
    var parent;
    var previousStatus;
    return selector && (element && 1 === element.nodeType) ? (matchesSelector = element.webkitMatchesSelector || (element.mozMatchesSelector || (element.oMatchesSelector || element.matchesSelector))) ? matchesSelector.call(element, selector) : (parent = element.parentNode, previousStatus = !parent, previousStatus && (parent = tempParent).appendChild(element), i = ~zepto.qsa(parent, selector).indexOf(element), previousStatus && tempParent.removeChild(element), i) : false;
  }, camelize = function(str) {
    return str.replace(/-+(.)?/g, function(dataAndEvents, chr) {
      return chr ? chr.toUpperCase() : "";
    });
  }, uniq = function(elems) {
    return fn.call(elems, function(elem, value) {
      return elems.indexOf(elem) == value;
    });
  }, zepto.fragment = function(html, name, properties) {
    var elem;
    var ret;
    var container;
    return BEGIN_TAG_REGEXP.test(html) && (elem = jQuery(doc.createElement(RegExp.$1))), elem || (html.replace && (html = html.replace(matchAll, "<$1></$2>")), name === target && (name = fragmentRE.test(html) && RegExp.$1), name in containers || (name = "*"), container = containers[name], container.innerHTML = "" + html, elem = jQuery.each(slice.call(container.childNodes), function() {
      container.removeChild(this);
    })), isPlainObject(properties) && (ret = jQuery(elem), jQuery.each(properties, function(key, value) {
      if (methodAttributes.indexOf(key) > -1) {
        ret[key](value);
      } else {
        ret.attr(key, value);
      }
    })), elem;
  }, zepto.Z = function(dom, selector) {
    return dom = dom || [], dom.__proto__ = jQuery.fn, dom.selector = selector || "", dom;
  }, zepto.isZ = function(object) {
    return object instanceof zepto.Z;
  }, zepto.init = function(selector, context) {
    var dom;
    if (!selector) {
      return zepto.Z();
    }
    if ("string" == typeof selector) {
      if (selector = selector.trim(), "<" == selector[0] && fragmentRE.test(selector)) {
        dom = zepto.fragment(selector, RegExp.$1, context);
        /** @type {null} */
        selector = null;
      } else {
        if (context !== target) {
          return jQuery(context).find(selector);
        }
        dom = zepto.qsa(doc, selector);
      }
    } else {
      if (isFunction(selector)) {
        return jQuery(doc).ready(selector);
      }
      if (zepto.isZ(selector)) {
        return selector;
      }
      if (isArray(selector)) {
        dom = compact(selector);
      } else {
        if (isObject(selector)) {
          /** @type {Array} */
          dom = [selector];
          /** @type {null} */
          selector = null;
        } else {
          if (fragmentRE.test(selector)) {
            dom = zepto.fragment(selector.trim(), RegExp.$1, context);
            /** @type {null} */
            selector = null;
          } else {
            if (context !== target) {
              return jQuery(context).find(selector);
            }
            dom = zepto.qsa(doc, selector);
          }
        }
      }
    }
    return zepto.Z(dom, selector);
  }, jQuery = function(selector, context) {
    return zepto.init(selector, context);
  }, jQuery.extend = function(target) {
    var deep;
    /** @type {Array.<?>} */
    var fns = slice.call(arguments, 1);
    return "boolean" == typeof target && (deep = target, target = fns.shift()), fns.forEach(function(params) {
      extend(target, params, deep);
    }), target;
  }, zepto.qsa = function(element, selector) {
    var found;
    /** @type {boolean} */
    var maybeID = "#" == selector[0];
    /** @type {boolean} */
    var maybeClass = !maybeID && "." == selector[0];
    var nameOnly = maybeID || maybeClass ? selector.slice(1) : selector;
    /** @type {boolean} */
    var isSimple = simpleSelectorRE.test(nameOnly);
    return isDocument(element) && (isSimple && maybeID) ? (found = element.getElementById(nameOnly)) ? [found] : [] : 1 !== element.nodeType && 9 !== element.nodeType ? [] : slice.call(isSimple && !maybeID ? maybeClass ? element.getElementsByClassName(nameOnly) : element.getElementsByTagName(selector) : element.querySelectorAll(selector));
  }, jQuery.contains = doc.documentElement.contains ? function(parent, node) {
    return parent !== node && parent.contains(node);
  } : function(dataAndEvents, element) {
    for (;element && (element = element.parentNode);) {
      if (element === dataAndEvents) {
        return true;
      }
    }
    return false;
  }, jQuery.type = type, jQuery.isFunction = isFunction, jQuery.isWindow = isWindow, jQuery.isArray = isArray, jQuery.isPlainObject = isPlainObject, jQuery.isEmptyObject = function(obj) {
    var prop;
    for (prop in obj) {
      return false;
    }
    return true;
  }, jQuery.inArray = function(expectedNumberOfNonCommentArgs, elems, isXML) {
    return $.indexOf.call(elems, expectedNumberOfNonCommentArgs, isXML);
  }, jQuery.camelCase = camelize, jQuery.trim = function(arr) {
    return null == arr ? "" : String.prototype.trim.call(arr);
  }, jQuery.uuid = 0, jQuery.support = {}, jQuery.expr = {}, jQuery.map = function(elements, callback) {
    var value;
    var i;
    var key;
    /** @type {Array} */
    var values = [];
    if (likeArray(elements)) {
      /** @type {number} */
      i = 0;
      for (;i < elements.length;i++) {
        value = callback(elements[i], i);
        if (null != value) {
          values.push(value);
        }
      }
    } else {
      for (key in elements) {
        value = callback(elements[key], key);
        if (null != value) {
          values.push(value);
        }
      }
    }
    return flatten(values);
  }, jQuery.each = function(obj, callback) {
    var i;
    var name;
    if (likeArray(obj)) {
      /** @type {number} */
      i = 0;
      for (;i < obj.length;i++) {
        if (callback.call(obj[i], i, obj[i]) === false) {
          return obj;
        }
      }
    } else {
      for (name in obj) {
        if (callback.call(obj[name], name, obj[name]) === false) {
          return obj;
        }
      }
    }
    return obj;
  }, jQuery.grep = function(elems, expectedNumberOfNonCommentArgs) {
    return fn.call(elems, expectedNumberOfNonCommentArgs);
  }, window.JSON && (jQuery.parseJSON = JSON.parse), jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(dataAndEvents, m3) {
    class2type["[object " + m3 + "]"] = m3.toLowerCase();
  }), jQuery.fn = {
    /** @type {function (this:(Array.<T>|string|{length: number}), (function (this:S, T, number, Array.<T>): ?|null), S=): ?} */
    forEach : $.forEach,
    /** @type {function (this:(Array.<T>|string|{length: number}), (function (?, T, number, Array.<T>): R|null), *=): R} */
    reduce : $.reduce,
    /** @type {function (this:(Array.<T>|{length: number}), ...[T]): number} */
    push : $.push,
    /** @type {function (this:(Array.<T>|{length: number}), function (T, T): number=): ?} */
    sort : $.sort,
    /** @type {function (this:(Array.<T>|string|{length: number}), T, number=): number} */
    indexOf : $.indexOf,
    /** @type {function (this:*, ...[*]): Array} */
    concat : $.concat,
    /**
     * @param {Function} fn
     * @return {?}
     */
    map : function(fn) {
      return jQuery(jQuery.map(this, function(elems, expectedNumberOfNonCommentArgs) {
        return fn.call(elems, expectedNumberOfNonCommentArgs, elems);
      }));
    },
    /**
     * @return {?}
     */
    slice : function() {
      return jQuery(slice.apply(this, arguments));
    },
    /**
     * @param {Function} callback
     * @return {?}
     */
    ready : function(callback) {
      return rxReady.test(doc.readyState) && doc.body ? callback(jQuery) : doc.addEventListener("DOMContentLoaded", function() {
        callback(jQuery);
      }, false), this;
    },
    /**
     * @param {number} idx
     * @return {?}
     */
    get : function(idx) {
      return idx === target ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length];
    },
    /**
     * @return {?}
     */
    toArray : function() {
      return this.get();
    },
    /**
     * @return {?}
     */
    size : function() {
      return this.length;
    },
    /**
     * @return {?}
     */
    remove : function() {
      return this.each(function() {
        if (null != this.parentNode) {
          this.parentNode.removeChild(this);
        }
      });
    },
    /**
     * @param {Function} opt_attributes
     * @return {?}
     */
    each : function(opt_attributes) {
      return $.every.call(this, function(objId, expectedNumberOfNonCommentArgs) {
        return opt_attributes.call(objId, expectedNumberOfNonCommentArgs, objId) !== false;
      }), this;
    },
    /**
     * @param {Function} selector
     * @return {?}
     */
    filter : function(selector) {
      return isFunction(selector) ? this.not(this.not(selector)) : jQuery(fn.call(this, function(element) {
        return zepto.matches(element, selector);
      }));
    },
    /**
     * @param {Object} selector
     * @param {Function} context
     * @return {?}
     */
    add : function(selector, context) {
      return jQuery(uniq(this.concat(jQuery(selector, context))));
    },
    /**
     * @param {string} selector
     * @return {?}
     */
    is : function(selector) {
      return this.length > 0 && zepto.matches(this[0], selector);
    },
    /**
     * @param {Object} selector
     * @return {?}
     */
    not : function(selector) {
      var reserved;
      /** @type {Array} */
      var scripts = [];
      return isFunction(selector) && selector.call !== target ? this.each(function(expectedNumberOfNonCommentArgs) {
        if (!selector.call(this, expectedNumberOfNonCommentArgs)) {
          scripts.push(this);
        }
      }) : (reserved = "string" == typeof selector ? this.filter(selector) : likeArray(selector) && isFunction(selector.item) ? slice.call(selector) : jQuery(selector), this.forEach(function(i) {
        if (reserved.indexOf(i) < 0) {
          scripts.push(i);
        }
      })), jQuery(scripts);
    },
    /**
     * @param {string} selector
     * @return {?}
     */
    has : function(selector) {
      return this.filter(function() {
        return isObject(selector) ? jQuery.contains(this, selector) : jQuery(this).find(selector).size();
      });
    },
    /**
     * @param {number} i
     * @return {?}
     */
    eq : function(i) {
      return-1 === i ? this.slice(i) : this.slice(i, +i + 1);
    },
    /**
     * @return {?}
     */
    first : function() {
      var el = this[0];
      return el && !isObject(el) ? el : jQuery(el);
    },
    /**
     * @return {?}
     */
    last : function() {
      var el = this[this.length - 1];
      return el && !isObject(el) ? el : jQuery(el);
    },
    /**
     * @param {string} selector
     * @return {?}
     */
    find : function(selector) {
      var str;
      var restoreScript = this;
      return str = selector ? "object" == typeof selector ? jQuery(selector).filter(function() {
        var related = this;
        return $.some.call(restoreScript, function(node) {
          return jQuery.contains(node, related);
        });
      }) : 1 == this.length ? jQuery(zepto.qsa(this[0], selector)) : this.map(function() {
        return zepto.qsa(this, selector);
      }) : jQuery();
    },
    /**
     * @param {Object} selector
     * @param {Object} context
     * @return {?}
     */
    closest : function(selector, context) {
      var node = this[0];
      /** @type {boolean} */
      var collection = false;
      if ("object" == typeof selector) {
        collection = jQuery(selector);
      }
      for (;node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector));) {
        node = node !== context && (!isDocument(node) && node.parentNode);
      }
      return jQuery(node);
    },
    /**
     * @param {Object} selector
     * @return {?}
     */
    parents : function(selector) {
      /** @type {Array} */
      var ancestors = [];
      var nodes = this;
      for (;nodes.length > 0;) {
        nodes = jQuery.map(nodes, function(node) {
          return(node = node.parentNode) && (!isDocument(node) && ancestors.indexOf(node) < 0) ? (ancestors.push(node), node) : void 0;
        });
      }
      return filtered(ancestors, selector);
    },
    /**
     * @param {Object} selector
     * @return {?}
     */
    parent : function(selector) {
      return filtered(uniq(this.pluck("parentNode")), selector);
    },
    /**
     * @param {Object} selector
     * @return {?}
     */
    children : function(selector) {
      return filtered(this.map(function() {
        return children(this);
      }), selector);
    },
    /**
     * @return {?}
     */
    contents : function() {
      return this.map(function() {
        return slice.call(this.childNodes);
      });
    },
    /**
     * @param {Object} selector
     * @return {?}
     */
    siblings : function(selector) {
      return filtered(this.map(function(dataAndEvents, el) {
        return fn.call(children(el.parentNode), function(child) {
          return child !== el;
        });
      }), selector);
    },
    /**
     * @return {?}
     */
    empty : function() {
      return this.each(function() {
        /** @type {string} */
        this.innerHTML = "";
      });
    },
    /**
     * @param {string} property
     * @return {?}
     */
    pluck : function(property) {
      return jQuery.map(this, function(to_instance) {
        return to_instance[property];
      });
    },
    /**
     * @return {?}
     */
    show : function() {
      return this.each(function() {
        if ("none" == this.style.display) {
          /** @type {string} */
          this.style.display = "";
        }
        if ("none" == getComputedStyle(this, "").getPropertyValue("display")) {
          this.style.display = defaultDisplay(this.nodeName);
        }
      });
    },
    /**
     * @param {?} newContent
     * @return {?}
     */
    replaceWith : function(newContent) {
      return this.before(newContent).remove();
    },
    /**
     * @param {Function} html
     * @return {?}
     */
    wrap : function(html) {
      var dom;
      var clone;
      var func = isFunction(html);
      return this[0] && (!func && (dom = jQuery(html).get(0), clone = dom.parentNode || this.length > 1)), this.each(function(expectedNumberOfNonCommentArgs) {
        jQuery(this).wrapAll(func ? html.call(this, expectedNumberOfNonCommentArgs) : clone ? dom.cloneNode(true) : dom);
      });
    },
    /**
     * @param {Element} html
     * @return {?}
     */
    wrapAll : function(html) {
      if (this[0]) {
        jQuery(this[0]).before(html = jQuery(html));
        var children;
        for (;(children = html.children()).length;) {
          html = children.first();
        }
        jQuery(html).append(this);
      }
      return this;
    },
    /**
     * @param {Function} value
     * @return {?}
     */
    wrapInner : function(value) {
      var iterator = isFunction(value);
      return this.each(function(expectedNumberOfNonCommentArgs) {
        var self = jQuery(this);
        var contents = self.contents();
        var html = iterator ? value.call(this, expectedNumberOfNonCommentArgs) : value;
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    /**
     * @return {?}
     */
    unwrap : function() {
      return this.parent().each(function() {
        jQuery(this).replaceWith(jQuery(this).children());
      }), this;
    },
    /**
     * @return {?}
     */
    clone : function() {
      return this.map(function() {
        return this.cloneNode(true);
      });
    },
    /**
     * @return {?}
     */
    hide : function() {
      return this.css("display", "none");
    },
    /**
     * @param {boolean} value
     * @return {?}
     */
    toggle : function(value) {
      return this.each(function() {
        var hidden = jQuery(this);
        if (value === target ? "none" == hidden.css("display") : value) {
          hidden.show();
        } else {
          hidden.hide();
        }
      });
    },
    /**
     * @param {string} selector
     * @return {?}
     */
    prev : function(selector) {
      return jQuery(this.pluck("previousElementSibling")).filter(selector || "*");
    },
    /**
     * @param {string} selector
     * @return {?}
     */
    next : function(selector) {
      return jQuery(this.pluck("nextElementSibling")).filter(selector || "*");
    },
    /**
     * @param {Function} html
     * @return {?}
     */
    html : function(html) {
      return 0 in arguments ? this.each(function(idx) {
        var originHtml = this.innerHTML;
        jQuery(this).empty().append(funcArg(this, html, idx, originHtml));
      }) : 0 in this ? this[0].innerHTML : null;
    },
    /**
     * @param {Function} value
     * @return {?}
     */
    text : function(value) {
      return 0 in arguments ? this.each(function(idx) {
        var newName = funcArg(this, value, idx, this.textContent);
        /** @type {string} */
        this.textContent = null == newName ? "" : "" + newName;
      }) : 0 in this ? this[0].textContent : null;
    },
    /**
     * @param {Object} name
     * @param {?} value
     * @return {?}
     */
    attr : function(name, value) {
      var isLengthProperty;
      return "string" != typeof name || 1 in arguments ? this.each(function(idx) {
        if (1 === this.nodeType) {
          if (isObject(name)) {
            for (key in name) {
              setAttribute(this, key, name[key]);
            }
          } else {
            setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)));
          }
        }
      }) : this.length && 1 === this[0].nodeType ? !(isLengthProperty = this[0].getAttribute(name)) && name in this[0] ? this[0][name] : isLengthProperty : target;
    },
    /**
     * @param {string} value
     * @return {?}
     */
    removeAttr : function(value) {
      return this.each(function() {
        if (1 === this.nodeType) {
          value.split(" ").forEach(function(name) {
            setAttribute(this, name);
          }, this);
        }
      });
    },
    /**
     * @param {Text} name
     * @param {Function} value
     * @return {?}
     */
    prop : function(name, value) {
      return name = propMap[name] || name, 1 in arguments ? this.each(function(idx) {
        this[name] = funcArg(this, value, idx, this[name]);
      }) : this[0] && this[0][name];
    },
    /**
     * @param {Function} prop
     * @param {?} value
     * @return {?}
     */
    data : function(prop, value) {
      var match = "data-" + prop.replace(r20, "-$1").toLowerCase();
      var pdataCur = 1 in arguments ? this.attr(match, value) : this.attr(match);
      return null !== pdataCur ? deserializeValue(pdataCur) : target;
    },
    /**
     * @param {Function} value
     * @return {?}
     */
    val : function(value) {
      return 0 in arguments ? this.each(function(idx) {
        this.value = funcArg(this, value, idx, this.value);
      }) : this[0] && (this[0].multiple ? jQuery(this[0]).find("option").filter(function() {
        return this.selected;
      }).pluck("value") : this[0].value);
    },
    /**
     * @param {Function} coordinates
     * @return {?}
     */
    offset : function(coordinates) {
      if (coordinates) {
        return this.each(function(index) {
          var elem = jQuery(this);
          var coords = funcArg(this, coordinates, index, elem.offset());
          var parentOffset = elem.offsetParent().offset();
          var styles = {
            top : coords.top - parentOffset.top,
            left : coords.left - parentOffset.left
          };
          if ("static" == elem.css("position")) {
            /** @type {string} */
            styles.position = "relative";
          }
          elem.css(styles);
        });
      }
      if (!this.length) {
        return null;
      }
      var obj = this[0].getBoundingClientRect();
      return{
        left : obj.left + window.pageXOffset,
        top : obj.top + window.pageYOffset,
        width : Math.round(obj.width),
        height : Math.round(obj.height)
      };
    },
    /**
     * @param {?} prop
     * @param {boolean} value
     * @return {?}
     */
    css : function(prop, value) {
      var cs;
      var element;
      var originalEvent;
      var css;
      if (arguments.length < 2) {
        if (element = this[0], !element) {
          return;
        }
        if (cs = getComputedStyle(element, ""), "string" == typeof prop) {
          return element.style[camelize(prop)] || cs.getPropertyValue(prop);
        }
        if (isArray(prop)) {
          return originalEvent = {}, jQuery.each(prop, function(dataAndEvents, prop) {
            originalEvent[prop] = element.style[camelize(prop)] || cs.getPropertyValue(prop);
          }), originalEvent;
        }
      }
      if (css = "", "string" == type(prop)) {
        if (value || 0 === value) {
          /** @type {string} */
          css = dasherize(prop) + ":" + maybeAddPx(prop, value);
        } else {
          this.each(function() {
            this.style.removeProperty(dasherize(prop));
          });
        }
      } else {
        for (key in prop) {
          if (prop[key] || 0 === prop[key]) {
            css += dasherize(key) + ":" + maybeAddPx(key, prop[key]) + ";";
          } else {
            this.each(function() {
              this.style.removeProperty(dasherize(key));
            });
          }
        }
      }
      return this.each(function() {
        this.style.cssText += ";" + css;
      });
    },
    /**
     * @param {?} element
     * @return {?}
     */
    index : function(element) {
      return element ? this.indexOf(jQuery(element)[0]) : this.parent().children().indexOf(this[0]);
    },
    /**
     * @param {string} name
     * @return {?}
     */
    hasClass : function(name) {
      return name ? $.some.call(this, function(el) {
        return this.test(className(el));
      }, classRE(name)) : false;
    },
    /**
     * @param {string} name
     * @return {?}
     */
    addClass : function(name) {
      return name ? this.each(function(idx) {
        if ("className" in this) {
          /** @type {Array} */
          classList = [];
          var cls = className(this);
          var newName = funcArg(this, name, idx, cls);
          newName.split(/\s+/g).forEach(function(klass) {
            if (!jQuery(this).hasClass(klass)) {
              classList.push(klass);
            }
          }, this);
          if (classList.length) {
            className(this, cls + (cls ? " " : "") + classList.join(" "));
          }
        }
      }) : this;
    },
    /**
     * @param {string} name
     * @return {?}
     */
    removeClass : function(name) {
      return this.each(function(idx) {
        if ("className" in this) {
          if (name === target) {
            return className(this, "");
          }
          classList = className(this);
          funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass) {
            classList = classList.replace(classRE(klass), " ");
          });
          className(this, classList.trim());
        }
      });
    },
    /**
     * @param {Function} name
     * @param {boolean} value
     * @return {?}
     */
    toggleClass : function(name, value) {
      return name ? this.each(function(idx) {
        var $this = jQuery(this);
        var names = funcArg(this, name, idx, className(this));
        names.split(/\s+/g).forEach(function(klass) {
          if (value === target ? !$this.hasClass(klass) : value) {
            $this.addClass(klass);
          } else {
            $this.removeClass(klass);
          }
        });
      }) : this;
    },
    /**
     * @param {?} value
     * @return {?}
     */
    scrollTop : function(value) {
      if (this.length) {
        /** @type {boolean} */
        var hasScrollTop = "scrollTop" in this[0];
        return value === target ? hasScrollTop ? this[0].scrollTop : this[0].pageYOffset : this.each(hasScrollTop ? function() {
          this.scrollTop = value;
        } : function() {
          this.scrollTo(this.scrollX, value);
        });
      }
    },
    /**
     * @param {number} value
     * @return {?}
     */
    scrollLeft : function(value) {
      if (this.length) {
        /** @type {boolean} */
        var hasScrollLeft = "scrollLeft" in this[0];
        return value === target ? hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset : this.each(hasScrollLeft ? function() {
          /** @type {number} */
          this.scrollLeft = value;
        } : function() {
          this.scrollTo(value, this.scrollY);
        });
      }
    },
    /**
     * @return {?}
     */
    position : function() {
      if (this.length) {
        var sel = this[0];
        var args = this.offsetParent();
        var offset = this.offset();
        var parentOffset = rootNodeRE.test(args[0].nodeName) ? {
          top : 0,
          left : 0
        } : args.offset();
        return offset.top -= parseFloat(jQuery(sel).css("margin-top")) || 0, offset.left -= parseFloat(jQuery(sel).css("margin-left")) || 0, parentOffset.top += parseFloat(jQuery(args[0]).css("border-top-width")) || 0, parentOffset.left += parseFloat(jQuery(args[0]).css("border-left-width")) || 0, {
          top : offset.top - parentOffset.top,
          left : offset.left - parentOffset.left
        };
      }
    },
    /**
     * @return {?}
     */
    offsetParent : function() {
      return this.map(function() {
        var parent = this.offsetParent || doc.body;
        for (;parent && (!rootNodeRE.test(parent.nodeName) && "static" == jQuery(parent).css("position"));) {
          parent = parent.offsetParent;
        }
        return parent;
      });
    }
  }, jQuery.fn.detach = jQuery.fn.remove, ["width", "height"].forEach(function(property) {
    var dimensionProperty = property.replace(/./, function(m) {
      return m[0].toUpperCase();
    });
    /**
     * @param {Function} value
     * @return {?}
     */
    jQuery.fn[property] = function(value) {
      var offset;
      var el = this[0];
      return value === target ? isWindow(el) ? el["inner" + dimensionProperty] : isDocument(el) ? el.documentElement["scroll" + dimensionProperty] : (offset = this.offset()) && offset[property] : this.each(function(idx) {
        el = jQuery(this);
        el.css(property, funcArg(this, value, idx, el[property]()));
      });
    };
  }), adjacencyOperators.forEach(function(original, operatorIndex) {
    /** @type {number} */
    var inside = operatorIndex % 2;
    /**
     * @return {?}
     */
    jQuery.fn[original] = function() {
      var $clone_type;
      var target;
      var resolveValues = jQuery.map(arguments, function(val) {
        return $clone_type = type(val), "object" == $clone_type || ("array" == $clone_type || null == val) ? val : zepto.fragment(val);
      });
      /** @type {boolean} */
      var copyByClone = this.length > 1;
      return resolveValues.length < 1 ? this : this.each(function(dataAndEvents, ref) {
        target = inside ? ref : ref.parentNode;
        ref = 0 == operatorIndex ? ref.nextSibling : 1 == operatorIndex ? ref.firstChild : 2 == operatorIndex ? ref : null;
        var options = jQuery.contains(doc.documentElement, target);
        resolveValues.forEach(function(node) {
          if (copyByClone) {
            node = node.cloneNode(true);
          } else {
            if (!target) {
              return jQuery(node).remove();
            }
          }
          target.insertBefore(node, ref);
          if (options) {
            traverseNode(node, function(src) {
              if (!(null == src.nodeName)) {
                if (!("SCRIPT" !== src.nodeName.toUpperCase())) {
                  if (!(src.type && "text/javascript" !== src.type)) {
                    if (!src.src) {
                      window.eval.call(window, src.innerHTML);
                    }
                  }
                }
              }
            });
          }
        });
      });
    };
    /**
     * @param {?} option
     * @return {?}
     */
    jQuery.fn[inside ? original + "To" : "insert" + (operatorIndex ? "Before" : "After")] = function(option) {
      return jQuery(option)[original](this), this;
    };
  }), zepto.Z.prototype = jQuery.fn, zepto.uniq = uniq, zepto.deserializeValue = deserializeValue, jQuery.zepto = zepto, jQuery;
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function($) {
  /**
   * @param {boolean} element
   * @return {?}
   */
  function zid(element) {
    return element._zid || (element._zid = _zid++);
  }
  /**
   * @param {boolean} fn
   * @param {string} event
   * @param {boolean} element
   * @param {boolean} selector
   * @return {?}
   */
  function findHandlers(fn, event, element, selector) {
    if (event = parse(event), event.ns) {
      var matcher = matcherFor(event.ns)
    }
    return(handlers[zid(fn)] || []).filter(function(handler) {
      return!(!handler || (event.e && handler.e != event.e || (event.ns && !matcher.test(handler.ns) || (element && zid(handler.fn) !== zid(element) || selector && handler.sel != selector))));
    });
  }
  /**
   * @param {string} event
   * @return {?}
   */
  function parse(event) {
    /** @type {Array.<string>} */
    var parts = ("" + event).split(".");
    return{
      e : parts[0],
      ns : parts.slice(1).sort().join(" ")
    };
  }
  /**
   * @param {string} ns
   * @return {?}
   */
  function matcherFor(ns) {
    return new RegExp("(?:^| )" + ns.replace(" ", " .* ?") + "(?: |$)");
  }
  /**
   * @param {Object} handler
   * @param {?} captureSetting
   * @return {?}
   */
  function eventCapture(handler, captureSetting) {
    return handler.del && (!focusinSupported && handler.e in focus) || !!captureSetting;
  }
  /**
   * @param {(Array|string)} type
   * @return {?}
   */
  function realEvent(type) {
    return hover[type] || (focusinSupported && focus[type] || type);
  }
  /**
   * @param {Object} element
   * @param {string} value
   * @param {Function} fn
   * @param {Object} data
   * @param {string} selector
   * @param {string} delegator
   * @param {?} capture
   * @return {undefined}
   */
  function add(element, value, fn, data, selector, delegator, capture) {
    var id = zid(element);
    var set = handlers[id] || (handlers[id] = []);
    value.split(/\s/).forEach(function(name) {
      var handler;
      var $delegate;
      return "ready" == name ? $(document).ready(fn) : (handler = parse(name), handler.fn = fn, handler.sel = selector, handler.e in hover && (fn = function(factor) {
        var related = factor.relatedTarget;
        return!related || related !== this && !$.contains(this, related) ? handler.fn.apply(this, arguments) : void 0;
      }), handler.del = delegator, $delegate = delegator || fn, handler.proxy = function(e) {
        if (e = compatible(e), !e.isImmediatePropagationStopped()) {
          /** @type {Object} */
          e.data = data;
          var elementRect = $delegate.apply(element, e._args == _ ? [e] : [e].concat(e._args));
          return elementRect === false && (e.preventDefault(), e.stopPropagation()), elementRect;
        }
      }, handler.i = set.length, set.push(handler), "addEventListener" in element && element.addEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture)), void 0);
    });
  }
  /**
   * @param {Object} element
   * @param {string} classNames
   * @param {Function} fn
   * @param {Object} selector
   * @param {?} capture
   * @return {undefined}
   */
  function remove(element, classNames, fn, selector, capture) {
    var id = zid(element);
    (classNames || "").split(/\s/).forEach(function(event) {
      findHandlers(element, event, fn, selector).forEach(function(handler) {
        delete handlers[id][handler.i];
        if ("removeEventListener" in element) {
          element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
        }
      });
    });
  }
  /**
   * @param {Object} event
   * @param {Object} source
   * @return {?}
   */
  function compatible(event, source) {
    return(source || !event.isDefaultPrevented) && (source || (source = event), $.each(attributes, function(name, predicate) {
      var sourceMethod = source[name];
      /**
       * @return {?}
       */
      event[name] = function() {
        return this[predicate] = returnTrue, sourceMethod && sourceMethod.apply(source, arguments);
      };
      event[predicate] = returnFalse;
    }), (source.defaultPrevented !== _ ? source.defaultPrevented : "returnValue" in source ? source.returnValue === false : source.getPreventDefault && source.getPreventDefault()) && (event.isDefaultPrevented = returnTrue)), event;
  }
  /**
   * @param {Object} event
   * @return {?}
   */
  function createProxy(event) {
    var key;
    var proxy = {
      originalEvent : event
    };
    for (key in event) {
      if (!isint.test(key)) {
        if (!(event[key] === _)) {
          proxy[key] = event[key];
        }
      }
    }
    return compatible(proxy, event);
  }
  var _;
  var returnTrue;
  var returnFalse;
  var isint;
  var attributes;
  /** @type {number} */
  var _zid = 1;
  /** @type {function (this:(Array.<T>|string|{length: number}), *=, *=): Array.<T>} */
  var __slice = Array.prototype.slice;
  var isFunction = $.isFunction;
  /**
   * @param {Function} value
   * @return {?}
   */
  var isString = function(value) {
    return "string" == typeof value;
  };
  var handlers = {};
  var specialEvents = {};
  /** @type {boolean} */
  var focusinSupported = "onfocusin" in window;
  var focus = {
    focus : "focusin",
    blur : "focusout"
  };
  var hover = {
    mouseenter : "mouseover",
    mouseleave : "mouseout"
  };
  /** @type {string} */
  specialEvents.click = specialEvents.mousedown = specialEvents.mouseup = specialEvents.mousemove = "MouseEvents";
  $.event = {
    /** @type {function (Object, string, Function, Object, string, string, ?): undefined} */
    add : add,
    /** @type {function (Object, string, Function, Object, ?): undefined} */
    remove : remove
  };
  /**
   * @param {Object} fn
   * @param {?} context
   * @return {?}
   */
  $.proxy = function(fn, context) {
    var proxyFn;
    /** @type {(Array.<?>|boolean)} */
    var args = 2 in arguments && __slice.call(arguments, 2);
    if (isFunction(fn)) {
      return proxyFn = function() {
        return fn.apply(context, args ? args.concat(__slice.call(arguments)) : arguments);
      }, proxyFn._zid = zid(fn), proxyFn;
    }
    if (isString(context)) {
      return args ? (args.unshift(fn[context], fn), $.proxy.apply(null, args)) : $.proxy(fn[context], fn);
    }
    throw new TypeError("expected function");
  };
  /**
   * @param {string} types
   * @param {Function} selector
   * @param {Function} data
   * @return {?}
   */
  $.fn.bind = function(types, selector, data) {
    return this.on(types, selector, data);
  };
  /**
   * @param {Function} types
   * @param {Function} callback
   * @return {?}
   */
  $.fn.unbind = function(types, callback) {
    return this.off(types, callback);
  };
  /**
   * @param {string} types
   * @param {Function} selector
   * @param {Function} data
   * @param {Function} callback
   * @return {?}
   */
  $.fn.one = function(types, selector, data, callback) {
    return this.on(types, selector, data, callback, 1);
  };
  /**
   * @return {?}
   */
  returnTrue = function() {
    return true;
  };
  /**
   * @return {?}
   */
  returnFalse = function() {
    return false;
  };
  /** @type {RegExp} */
  isint = /^([A-Z]|returnValue$|layer[XY]$)/;
  attributes = {
    preventDefault : "isDefaultPrevented",
    stopImmediatePropagation : "isImmediatePropagationStopped",
    stopPropagation : "isPropagationStopped"
  };
  /**
   * @param {Function} selector
   * @param {string} types
   * @param {?} data
   * @return {?}
   */
  $.fn.delegate = function(selector, types, data) {
    return this.on(types, selector, data);
  };
  /**
   * @param {Function} selector
   * @param {?} types
   * @param {?} fn
   * @return {?}
   */
  $.fn.undelegate = function(selector, types, fn) {
    return this.off(types, selector, fn);
  };
  /**
   * @param {string} event
   * @param {?} callback
   * @return {?}
   */
  $.fn.live = function(event, callback) {
    return $(document.body).delegate(this.selector, event, callback), this;
  };
  /**
   * @param {?} event
   * @param {?} callback
   * @return {?}
   */
  $.fn.die = function(event, callback) {
    return $(document.body).undelegate(this.selector, event, callback), this;
  };
  /**
   * @param {?} context
   * @param {Function} selector
   * @param {Function} data
   * @param {Function} callback
   * @param {number} one
   * @return {?}
   */
  $.fn.on = function(context, selector, data, callback, one) {
    var autoRemove;
    var delegator;
    var _t = this;
    return context && !isString(context) ? ($.each(context, function(type, callback) {
      _t.on(type, selector, data, callback, one);
    }), _t) : (isString(selector) || (isFunction(callback) || (callback === false || (callback = data, data = selector, selector = _))), (isFunction(data) || data === false) && (callback = data, data = _), callback === false && (callback = returnFalse), _t.each(function(dataAndEvents, element) {
      if (one) {
        /**
         * @param {Event} e
         * @return {?}
         */
        autoRemove = function(e) {
          return remove(element, e.type, callback), callback.apply(this, arguments);
        };
      }
      if (selector) {
        /**
         * @param {Object} e
         * @return {?}
         */
        delegator = function(e) {
          var context;
          var match = $(e.target).closest(selector, element).get(0);
          return match && match !== element ? (context = $.extend(createProxy(e), {
            currentTarget : match,
            liveFired : element
          }), (autoRemove || callback).apply(match, [context].concat(__slice.call(arguments, 1)))) : void 0;
        };
      }
      add(element, context, callback, data, selector, delegator || autoRemove);
    }));
  };
  /**
   * @param {Function} context
   * @param {Function} selector
   * @param {Function} fn
   * @return {?}
   */
  $.fn.off = function(context, selector, fn) {
    var $this = this;
    return context && !isString(context) ? ($.each(context, function(event, fn) {
      $this.off(event, selector, fn);
    }), $this) : (isString(selector) || (isFunction(fn) || (fn === false || (fn = selector, selector = _))), fn === false && (fn = returnFalse), $this.each(function() {
      remove(this, context, fn, selector);
    }));
  };
  /**
   * @param {Object} event
   * @param {?} args
   * @return {?}
   */
  $.fn.trigger = function(event, args) {
    return event = isString(event) || $.isPlainObject(event) ? $.Event(event) : compatible(event), event._args = args, this.each(function() {
      if (event.type in focus && "function" == typeof this[event.type]) {
        this[event.type]();
      } else {
        if ("dispatchEvent" in this) {
          this.dispatchEvent(event);
        } else {
          $(this).triggerHandler(event, args);
        }
      }
    });
  };
  /**
   * @param {Object} event
   * @param {?} args
   * @return {?}
   */
  $.fn.triggerHandler = function(event, args) {
    var e;
    var $col;
    return this.each(function(dataAndEvents, element) {
      e = createProxy(isString(event) ? $.Event(event) : event);
      e._args = args;
      /** @type {Object} */
      e.target = element;
      $.each(findHandlers(element, event.type || event), function(dataAndEvents, handler) {
        return $col = handler.proxy(e), e.isImmediatePropagationStopped() ? false : void 0;
      });
    }), $col;
  };
  "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(name) {
    /**
     * @param {Function} callback
     * @return {?}
     */
    $.fn[name] = function(callback) {
      return 0 in arguments ? this.bind(name, callback) : this.trigger(name);
    };
  });
  /**
   * @param {Object} type
   * @param {Object} props
   * @return {?}
   */
  $.Event = function(type, props) {
    var event;
    var bubbles;
    var i;
    if (isString(type) || (props = type, type = props.type), event = document.createEvent(specialEvents[type] || "Events"), bubbles = true, props) {
      for (i in props) {
        if ("bubbles" == i) {
          /** @type {boolean} */
          bubbles = !!props[i];
        } else {
          event[i] = props[i];
        }
      }
    }
    return event.initEvent(type, bubbles, true), compatible(event);
  };
}(Zepto), function($) {
  /**
   * @param {?} context
   * @param {string} eventName
   * @param {Array} data
   * @return {?}
   */
  function triggerAndReturn(context, eventName, data) {
    var event = $.Event(eventName);
    return $(context).trigger(event, data), !event.isDefaultPrevented();
  }
  /**
   * @param {Object} settings
   * @param {Object} callback
   * @param {string} eventName
   * @param {Array} data
   * @return {?}
   */
  function triggerGlobal(settings, callback, eventName, data) {
    return settings.global ? triggerAndReturn(callback || doc, eventName, data) : void 0;
  }
  /**
   * @param {Object} settings
   * @return {undefined}
   */
  function ajaxStart(settings) {
    if (settings.global) {
      if (0 === $.active++) {
        triggerGlobal(settings, null, "ajaxStart");
      }
    }
  }
  /**
   * @param {Object} settings
   * @return {undefined}
   */
  function ajaxStop(settings) {
    if (settings.global) {
      if (!--$.active) {
        triggerGlobal(settings, null, "ajaxStop");
      }
    }
  }
  /**
   * @param {Object} expectedNumberOfNonCommentArgs
   * @param {Object} settings
   * @return {?}
   */
  function ajaxBeforeSend(expectedNumberOfNonCommentArgs, settings) {
    var restoreScript = settings.context;
    return settings.beforeSend.call(restoreScript, expectedNumberOfNonCommentArgs, settings) === false || triggerGlobal(settings, restoreScript, "ajaxBeforeSend", [expectedNumberOfNonCommentArgs, settings]) === false ? false : void triggerGlobal(settings, restoreScript, "ajaxSend", [expectedNumberOfNonCommentArgs, settings]);
  }
  /**
   * @param {Object} expectedNumberOfNonCommentArgs
   * @param {Error} xhr
   * @param {Object} settings
   * @param {?} deferred
   * @return {undefined}
   */
  function ajaxSuccess(expectedNumberOfNonCommentArgs, xhr, settings, deferred) {
    var restoreScript = settings.context;
    /** @type {string} */
    var status = "success";
    settings.success.call(restoreScript, expectedNumberOfNonCommentArgs, status, xhr);
    if (deferred) {
      deferred.resolveWith(restoreScript, [expectedNumberOfNonCommentArgs, status, xhr]);
    }
    triggerGlobal(settings, restoreScript, "ajaxSuccess", [xhr, settings, expectedNumberOfNonCommentArgs]);
    ajaxComplete(status, xhr, settings);
  }
  /**
   * @param {Object} error
   * @param {string} type
   * @param {Object} expectedNumberOfNonCommentArgs
   * @param {Object} settings
   * @param {?} deferred
   * @return {undefined}
   */
  function ajaxError(error, type, expectedNumberOfNonCommentArgs, settings, deferred) {
    var restoreScript = settings.context;
    settings.error.call(restoreScript, expectedNumberOfNonCommentArgs, type, error);
    if (deferred) {
      deferred.rejectWith(restoreScript, [expectedNumberOfNonCommentArgs, type, error]);
    }
    triggerGlobal(settings, restoreScript, "ajaxError", [expectedNumberOfNonCommentArgs, settings, error || type]);
    ajaxComplete(type, expectedNumberOfNonCommentArgs, settings);
  }
  /**
   * @param {?} status
   * @param {Object} expectedNumberOfNonCommentArgs
   * @param {Object} settings
   * @return {undefined}
   */
  function ajaxComplete(status, expectedNumberOfNonCommentArgs, settings) {
    var restoreScript = settings.context;
    settings.complete.call(restoreScript, expectedNumberOfNonCommentArgs, status);
    triggerGlobal(settings, restoreScript, "ajaxComplete", [expectedNumberOfNonCommentArgs, settings]);
    ajaxStop(settings);
  }
  /**
   * @return {undefined}
   */
  function empty() {
  }
  /**
   * @param {Object} mime
   * @return {?}
   */
  function mimeToDataType(mime) {
    return mime && (mime = mime.split(";", 2)[0]), mime && (mime == htmlType ? "html" : mime == jsonType ? "json" : rchecked.test(mime) ? "script" : exclude.test(mime) && "xml") || "text";
  }
  /**
   * @param {string} label
   * @param {string} str
   * @return {?}
   */
  function appendQuery(label, str) {
    return "" == str ? label : (label + "&" + str).replace(/[&?]{1,2}/, "?");
  }
  /**
   * @param {Object} options
   * @return {undefined}
   */
  function serializeData(options) {
    if (options.processData) {
      if (options.data) {
        if ("string" != $.type(options.data)) {
          options.data = $.param(options.data, options.traditional);
        }
      }
    }
    if (!!options.data) {
      if (!(options.type && "GET" != options.type.toUpperCase())) {
        options.url = appendQuery(options.url, options.data);
        options.data = void 0;
      }
    }
  }
  /**
   * @param {string} url
   * @param {Object} data
   * @param {Object} val
   * @param {Object} type
   * @return {?}
   */
  function parseArguments(url, data, val, type) {
    return $.isFunction(data) && (type = val, val = data, data = void 0), $.isFunction(val) || (type = val, val = void 0), {
      url : url,
      data : data,
      success : val,
      dataType : type
    };
  }
  /**
   * @param {Object} params
   * @param {Function} value
   * @param {boolean} traditional
   * @param {string} scope
   * @return {undefined}
   */
  function serialize(params, value, traditional, scope) {
    var $clone_type;
    var isFunction = $.isArray(value);
    var hash = $.isPlainObject(value);
    $.each(value, function(key, value) {
      $clone_type = $.type(value);
      if (scope) {
        key = traditional ? scope : scope + "[" + (hash || ("object" == $clone_type || "array" == $clone_type) ? key : "") + "]";
      }
      if (!scope && isFunction) {
        params.add(value.name, value.value);
      } else {
        if ("array" == $clone_type || !traditional && "object" == $clone_type) {
          serialize(params, value, traditional, key);
        } else {
          params.add(key, value);
        }
      }
    });
  }
  var key;
  var name;
  var flatten;
  /** @type {number} */
  var jsonpID = 0;
  /** @type {Document} */
  var doc = window.document;
  /** @type {RegExp} */
  var protectSelfClosingRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  /** @type {RegExp} */
  var rchecked = /^(?:text|application)\/javascript/i;
  /** @type {RegExp} */
  var exclude = /^(?:text|application)\/xml/i;
  /** @type {string} */
  var jsonType = "application/json";
  /** @type {string} */
  var htmlType = "text/html";
  /** @type {RegExp} */
  var rbrace = /^\s*$/;
  /** @type {Element} */
  var l = doc.createElement("a");
  /** @type {string} */
  l.href = window.location.href;
  /** @type {number} */
  $.active = 0;
  /**
   * @param {Object} options
   * @param {?} deferred
   * @return {?}
   */
  $.ajaxJSONP = function(options, deferred) {
    if (!("type" in options)) {
      return $.ajax(options);
    }
    var responseData;
    var tref;
    var value = options.jsonpCallback;
    var name = ($.isFunction(value) ? value() : value) || "jsonp" + ++jsonpID;
    /** @type {Element} */
    var script = doc.createElement("script");
    var method = window[name];
    /**
     * @param {string} errorType
     * @return {undefined}
     */
    var abort = function(errorType) {
      $(script).triggerHandler("error", errorType || "abort");
    };
    var xhr = {
      /** @type {function (string): undefined} */
      abort : abort
    };
    return deferred && deferred.promise(xhr), $(script).on("load error", function(error, errorType) {
      clearTimeout(tref);
      $(script).off().remove();
      if ("error" != error.type && responseData) {
        ajaxSuccess(responseData[0], xhr, options, deferred);
      } else {
        ajaxError(null, errorType || "error", xhr, options, deferred);
      }
      window[name] = method;
      if (responseData) {
        if ($.isFunction(method)) {
          method(responseData[0]);
        }
      }
      method = responseData = void 0;
    }), ajaxBeforeSend(xhr, options) === false ? (abort("abort"), xhr) : (window[name] = function() {
      /** @type {Arguments} */
      responseData = arguments;
    }, script.src = options.url.replace(/\?(.+)=\?/, "?$1=" + name), doc.head.appendChild(script), options.timeout > 0 && (tref = setTimeout(function() {
      abort("timeout");
    }, options.timeout)), xhr);
  };
  $.ajaxSettings = {
    type : "GET",
    /** @type {function (): undefined} */
    beforeSend : empty,
    /** @type {function (): undefined} */
    success : empty,
    /** @type {function (): undefined} */
    error : empty,
    /** @type {function (): undefined} */
    complete : empty,
    context : null,
    global : true,
    /**
     * @return {?}
     */
    xhr : function() {
      return new window.XMLHttpRequest;
    },
    accepts : {
      script : "text/javascript, application/javascript, application/x-javascript",
      json : jsonType,
      xml : "application/xml, text/xml",
      html : htmlType,
      text : "text/plain"
    },
    crossDomain : false,
    timeout : 0,
    processData : true,
    cache : true
  };
  /**
   * @param {Object} options
   * @return {?}
   */
  $.ajax = function(options) {
    var config;
    var dataType;
    var c;
    var tref;
    var mime;
    var headers;
    var setHeader;
    var b;
    var xhr;
    var res;
    var async;
    var settings = $.extend({}, options || {});
    var deferred = $.Deferred && $.Deferred();
    for (key in $.ajaxSettings) {
      if (void 0 === settings[key]) {
        settings[key] = $.ajaxSettings[key];
      }
    }
    if (ajaxStart(settings), settings.crossDomain || (config = doc.createElement("a"), config.href = settings.url, config.href = config.href, settings.crossDomain = l.protocol + "//" + l.host != config.protocol + "//" + config.host), settings.url || (settings.url = window.location.toString()), serializeData(settings), dataType = settings.dataType, c = /\?.+=\?/.test(settings.url), c && (dataType = "jsonp"), settings.cache !== false && (options && options.cache === true || "script" != dataType &&
    "jsonp" != dataType) || (settings.url = appendQuery(settings.url, "_=" + Date.now())), "jsonp" == dataType) {
      return c || (settings.url = appendQuery(settings.url, settings.jsonp ? settings.jsonp + "=?" : settings.jsonp === false ? "" : "callback=?")), $.ajaxJSONP(settings, deferred);
    }
    if (mime = settings.accepts[dataType], headers = {}, setHeader = function(name, value) {
      /** @type {Array} */
      headers[name.toLowerCase()] = [name, value];
    }, b = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol, xhr = settings.xhr(), res = xhr.setRequestHeader, deferred && deferred.promise(xhr), settings.crossDomain || setHeader("X-Requested-With", "XMLHttpRequest"), setHeader("Accept", mime || "*/*"), (mime = settings.mimeType || mime) && (mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]), xhr.overrideMimeType && xhr.overrideMimeType(mime)), (settings.contentType || settings.contentType !== false && (settings.data &&
    "GET" != settings.type.toUpperCase())) && setHeader("Content-Type", settings.contentType || "application/x-www-form-urlencoded"), settings.headers) {
      for (name in settings.headers) {
        setHeader(name, settings.headers[name]);
      }
    }
    if (xhr.setRequestHeader = setHeader, xhr.onreadystatechange = function() {
      if (4 == xhr.readyState) {
        /** @type {function (): undefined} */
        xhr.onreadystatechange = empty;
        clearTimeout(tref);
        var data;
        /** @type {boolean} */
        var error = false;
        if (xhr.status >= 200 && xhr.status < 300 || (304 == xhr.status || 0 == xhr.status && "file:" == b)) {
          dataType = dataType || mimeToDataType(settings.mimeType || xhr.getResponseHeader("content-type"));
          data = xhr.responseText;
          try {
            if ("script" == dataType) {
              (1, eval)(data);
            } else {
              if ("xml" == dataType) {
                data = xhr.responseXML;
              } else {
                if ("json" == dataType) {
                  data = rbrace.test(data) ? null : $.parseJSON(data);
                }
              }
            }
          } catch (err) {
            error = err;
          }
          if (error) {
            ajaxError(error, "parsererror", xhr, settings, deferred);
          } else {
            ajaxSuccess(data, xhr, settings, deferred);
          }
        } else {
          ajaxError(xhr.statusText || null, xhr.status ? "error" : "abort", xhr, settings, deferred);
        }
      }
    }, ajaxBeforeSend(xhr, settings) === false) {
      return xhr.abort(), ajaxError(null, "abort", xhr, settings, deferred), xhr;
    }
    if (settings.xhrFields) {
      for (name in settings.xhrFields) {
        xhr[name] = settings.xhrFields[name];
      }
    }
    async = "async" in settings ? settings.async : true;
    xhr.open(settings.type, settings.url, async, settings.username, settings.password);
    for (name in headers) {
      res.apply(xhr, headers[name]);
    }
    return settings.timeout > 0 && (tref = setTimeout(function() {
      /** @type {function (): undefined} */
      xhr.onreadystatechange = empty;
      xhr.abort();
      ajaxError(null, "timeout", xhr, settings, deferred);
    }, settings.timeout)), xhr.send(settings.data ? settings.data : null), xhr;
  };
  /**
   * @return {?}
   */
  $.get = function() {
    return $.ajax(parseArguments.apply(null, arguments));
  };
  /**
   * @return {?}
   */
  $.post = function() {
    var options = parseArguments.apply(null, arguments);
    return options.type = "POST", $.ajax(options);
  };
  /**
   * @return {?}
   */
  $.getJSON = function() {
    var options = parseArguments.apply(null, arguments);
    return options.dataType = "json", $.ajax(options);
  };
  /**
   * @param {string} url
   * @param {Object} data
   * @param {Object} opts
   * @return {?}
   */
  $.fn.load = function(url, data, opts) {
    if (!this.length) {
      return this;
    }
    var selector;
    var self = this;
    var parts = url.split(/\s/);
    var options = parseArguments(url, data, opts);
    /** @type {function (Function): undefined} */
    var success = options.success;
    return parts.length > 1 && (options.url = parts[0], selector = parts[1]), options.success = function(html) {
      self.html(selector ? $("<div>").html(html.replace(protectSelfClosingRegex, "")).find(selector) : html);
      if (success) {
        success.apply(self, arguments);
      }
    }, $.ajax(options), this;
  };
  /** @type {function (string): string} */
  flatten = encodeURIComponent;
  /**
   * @param {Function} obj
   * @param {boolean} traditional
   * @return {?}
   */
  $.param = function(obj, traditional) {
    /** @type {Array} */
    var params = [];
    return params.add = function(selector, value) {
      if ($.isFunction(value)) {
        value = value();
      }
      if (null == value) {
        /** @type {string} */
        value = "";
      }
      this.push(flatten(selector) + "=" + flatten(value));
    }, serialize(params, obj, traditional), params.join("&").replace(/%20/g, "+");
  };
}(Zepto), function($) {
  /**
   * @return {?}
   */
  $.fn.serializeArray = function() {
    var ret;
    var type;
    /** @type {Array} */
    var sorted = [];
    /**
     * @param {Array} obj
     * @return {?}
     */
    var iterator = function(obj) {
      return obj.forEach ? obj.forEach(iterator) : void sorted.push({
        name : ret,
        value : obj
      });
    };
    return this[0] && $.each(this[0].elements, function(dataAndEvents, elem) {
      type = elem.type;
      ret = elem.name;
      if (ret) {
        if ("fieldset" != elem.nodeName.toLowerCase()) {
          if (!elem.disabled) {
            if ("submit" != type) {
              if ("reset" != type) {
                if ("button" != type) {
                  if ("file" != type) {
                    if ("radio" != type && "checkbox" != type || elem.checked) {
                      iterator($(elem).val());
                    }
                  }
                }
              }
            }
          }
        }
      }
    }), sorted;
  };
  /**
   * @return {?}
   */
  $.fn.serialize = function() {
    /** @type {Array} */
    var tagNameArr = [];
    return this.serializeArray().forEach(function(elm) {
      tagNameArr.push(encodeURIComponent(elm.name) + "=" + encodeURIComponent(elm.value));
    }), tagNameArr.join("&");
  };
  /**
   * @param {Function} callback
   * @return {?}
   */
  $.fn.submit = function(callback) {
    if (0 in arguments) {
      this.bind("submit", callback);
    } else {
      if (this.length) {
        var event = $.Event("submit");
        this.eq(0).trigger(event);
        if (!event.isDefaultPrevented()) {
          this.get(0).submit();
        }
      }
    }
    return this;
  };
}(Zepto), function($) {
  if (!("__proto__" in {})) {
    $.extend($.zepto, {
      /**
       * @param {Object} dom
       * @param {string} selector
       * @return {?}
       */
      Z : function(dom, selector) {
        return dom = dom || [], $.extend(dom, $.fn), dom.selector = selector || "", dom.__Z = true, dom;
      },
      /**
       * @param {?} val
       * @return {?}
       */
      isZ : function(val) {
        return "array" === $.type(val) && "__Z" in val;
      }
    });
  }
  try {
    getComputedStyle(void 0);
  } catch (e) {
    var nativeGetComputedStyle = getComputedStyle;
    /**
     * @param {(Element|null)} element
     * @return {(CSSStyleDeclaration|null)}
     */
    window.getComputedStyle = function(element) {
      try {
        return nativeGetComputedStyle(element);
      } catch (e) {
        return null;
      }
    };
  }
}(Zepto), function(a) {
  var self = window.didi = window.dd = a;
  !function(self) {
    self._cfg = {};
    /**
     * @param {Object} options
     * @return {undefined}
     */
    self.init = function(options) {
      options = options || {};
      if (options.id) {
        self.trace({
          id : options.id,
          data : options.data || {}
        });
      }
      var params = self._cfg;
      if ("auto" === options.debug) {
        options.debug = self.is("dev");
      }
      /** @type {boolean} */
      params.debug = !!options.debug;
      options.debug === true;
      if (options.wxSignFn) {
        params.wxSignFn = options.wxSignFn;
      } else {
        if (options.wxSignApi) {
          params.wxSignApi = options.wxSignApi;
        }
      }
      if ("undefined" != typeof options.share) {
        self.setShare(options.share);
      } else {
        self.app.setShare(false);
      }
    };
    self._ = {};
    /**
     * @param {string} file
     * @param {string} id
     * @param {Function} callback
     * @return {undefined}
     */
    self._.require = function(file, id, callback) {
      if ($.isFunction(window.define) && ((window.define.amd || window.define.cmd) && window.require)) {
        window.require.config({
          paths : {
            wx : file
          }
        });
        window.require([id], function(obj) {
          window[id] = obj;
          callback(obj);
        });
      } else {
        /** @type {Element} */
        var scriptObject = document.createElement("script");
        /** @type {string} */
        scriptObject.type = "text/javascript";
        /** @type {string} */
        scriptObject.src = file + ".js";
        document.getElementsByTagName("head")[0].appendChild(scriptObject);
        /**
         * @return {undefined}
         */
        scriptObject.onload = function() {
          callback(window[id]);
        };
      }
    };
    /**
     * @param {(Function|string)} src
     * @param {?} callback
     * @return {undefined}
     */
    $.getScript = function(src, callback) {
      /** @type {Element} */
      var script = document.createElement("script");
      /** @type {string} */
      script.type = "text/javascript";
      /** @type {(Function|string)} */
      script.src = src;
      document.getElementsByTagName("head")[0].appendChild(script);
      /** @type {function (): undefined} */
      script.onload = script.onreadystatechange = function() {
        if (!(this.readyState && ("loaded" !== this.readyState && "complete" !== this.readyState))) {
          if ("function" == typeof callback) {
            callback();
          }
        }
      };
    };
    /**
     * @param {Function} selector
     * @param {Function} fn
     * @param {Function} error
     * @return {?}
     */
    $.fn.touch = function(selector, fn, error) {
      var startX;
      var startY;
      var mobile;
      var callback;
      var invoke;
      var makePointerEvent;
      var el = $(this);
      /** @type {boolean} */
      var d = false;
      if (selector === false) {
        return el.off(".touch"), this;
      }
      if ("string" == typeof selector && fn === false) {
        return el.off(".touch", selector), this;
      }
      if ("string" == typeof selector && $.isFunction(fn)) {
        /** @type {boolean} */
        d = true;
      } else {
        if (!$.isFunction(selector)) {
          return this;
        }
        /** @type {boolean} */
        d = false;
        /** @type {Function} */
        fn = selector;
        /** @type {Function} */
        error = fn;
      }
      return startX = 0, startY = 0, mobile = self.is("mobile"), callback = function(next, recurring) {
        if (error !== false) {
          if (recurring) {
            next.addClass("active");
          } else {
            next.removeClass("active");
          }
        }
      }, self._cfg.lastTouch = +new Date, invoke = function(type, matcherFunction) {
        /** @type {string} */
        type = "touch" + type + ".touch";
        /**
         * @return {undefined}
         */
        var t = function() {
          matcherFunction.apply(this, arguments);
          /** @type {number} */
          self._cfg.lastTouch = +new Date;
        };
        if (d) {
          el.on(type, selector, t);
        } else {
          el.on(type, t);
        }
      }, makePointerEvent = function(type, matcherFunction) {
        /** @type {string} */
        type = "mouse" + type + ".touch";
        /**
         * @return {undefined}
         */
        var handler = function() {
          /** @type {number} */
          var lastTouch = +new Date;
          if (!mobile || self.is("chrome") && lastTouch - self._cfg.lastTouch > 1E3) {
            matcherFunction.apply(this, arguments);
          }
        };
        if (d) {
          el.on(type, selector, handler);
        } else {
          el.on(type, handler);
        }
      }, invoke("start", function(e) {
        callback($(this), true);
        var t = e.touches || (e.originalEvent && e.originalEvent.touches || [{}]);
        t = t[0];
        startX = t.pageX;
        startY = t.pageY;
      }), invoke("move", function(e) {
        var t = e.touches || (e.originalEvent && e.originalEvent.touches || [{}]);
        t = t[0];
        if (Math.abs(t.pageX - startX) + Math.abs(t.pageY - startY) > 15) {
          $(this).attr("moved", "true");
          callback($(this), false);
        } else {
          $(this).attr("moved", "false");
          callback($(this), true);
        }
      }), invoke("end", function(expectedNumberOfNonCommentArgs) {
        callback($(this), false);
        if ("true" !== $(this).attr("moved")) {
          fn.call(this, expectedNumberOfNonCommentArgs);
        } else {
          $(this).attr("moved", "false");
        }
      }), invoke("cancel", function() {
        callback($(this), false);
        $(this).attr("moved", "false");
      }), makePointerEvent("down", function() {
        callback($(this), true);
      }), makePointerEvent("leave", function() {
        callback($(this), false);
      }), makePointerEvent("up", function(expectedNumberOfNonCommentArgs) {
        callback($(this), false);
        fn.call(this, expectedNumberOfNonCommentArgs);
      }), this;
    };
    /**
     * @param {Object} settings
     * @return {undefined}
     */
    $.fn.loading = function(settings) {
      if ("string" == typeof settings) {
        settings = {
          text : settings
        };
      }
    };
  }(self);
  (function(self) {
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
            var parts = a.search.replace(/^\?/, "").split("&");
            var l = parts.length;
            /** @type {number} */
            var i = 0;
            for (;l > i;i++) {
              if (parts[i]) {
                captures = parts[i].split("=");
                /** @type {string} */
                params[decodeURIComponent(captures[0])] = decodeURIComponent(parts[i].substr(captures[0].length + 1));
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
        return test.push(options.protocol, "://"), test.push(options.host), options.port && test.push(":", options.port), test.push(options.path), $.each(options.params, function(sectionName, key) {
          if (null !== key) {
            leaks.push(encodeURIComponent(sectionName) + "=" + encodeURIComponent(key));
          }
        }), leaks.length > 0 && test.push("?", leaks.join("&")), options.hash && test.push("#", options.hash), test.join("");
      },
      /**
       * @param {number} param
       * @param {string} url
       * @return {?}
       */
      get : function(param, url) {
        if (0 === arguments.length) {
          return config.decode();
        }
        /** @type {string} */
        var src = "";
        var req = config.decode(url || window.location.href);
        return $.each(param.split(","), function(dataAndEvents, name) {
          return req.params[name] ? (src = req.params[name], false) : void 0;
        }), src;
      },
      /**
       * @param {string} path
       * @param {Object} data
       * @return {?}
       */
      build : function(path, data) {
        var route = config.decode(path);
        return $.each(data || {}, function(i, offsetPosition) {
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
      }
    };
    /**
     * @param {number} url
     * @return {?}
     */
    self.query = function(url) {
      return url ? config.get(url) : config.decode().params;
    };
    $.each("build,encode,decode,https".split(","), function(dataAndEvents, param) {
      self.query[param] = config[param];
    });
    /** @type {function (number): ?} */
    window.getQueryData = self.query;
    /** @type {function (number): ?} */
    window.getQueryString = self.query;
    /** @type {function (number): ?} */
    window.getQuerySting = self.query;
  })(self);
  (function(global) {
    var obj;
    /** @type {null} */
    var timeout = null;
    /** @type {null} */
    var doc = null;
    /** @type {null} */
    var e = null;
    /** @type {null} */
    var root = null;
    /** @type {null} */
    var td = null;
    /** @type {null} */
    var el = null;
    /** @type {null} */
    var data = null;
    /**
     * @param {?} options
     * @return {?}
     */
    var Modal = function(options) {
      return doc = window.document, e = doc.documentElement, root = doc.body, this instanceof Modal ? (new Modal.fn.init(options), void 0) : data = new Modal(options);
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    var isObject = function(arg) {
      /** @type {boolean} */
      var index = false;
      return index = Array.isArray(arg);
    };
    /**
     * @param {?} node
     * @return {undefined}
     */
    var render = function(node) {
      $("body").append(node);
    };
    Modal.fn = Modal.prototype = {
      /** @type {function (?): ?} */
      constructor : Modal,
      /**
       * @param {Object} options
       * @return {undefined}
       */
      init : function(options) {
        var container;
        var dom;
        var html;
        var element;
        var _ref;
        var coffeeForClosure;
        var p;
        var expires;
        var loading;
        var i;
        var ilen;
        var s;
        var ff8a01;
        var b;
        var y;
        var x;
        var t;
        var k;
        var T;
        var idx;
        var r;
        var row;
        var script;
        var testee;
        if (options) {
          if (container = doc.createElement("div"), container.id = "d_wall", container.style.backgroundColor = options.bgcolor || "black", container.style.opacity = options.opacity || "0.2", container.style.filter = options.opacity ? "alpha(opacity=" + 100 * options.opacity + ")" : "alpha(opacity=20)", container.className = "didi-dialog-wall", dom = doc.createElement("div"), dom.id = "d_wrap", dom.style.width = options.width || "260px", dom.style.height = options.height || "210px", dom.style.backgroundColor =
          options.d_bgcolor || "#fff", dom.style.opacity = options.d_opacity ? options.d_opacity : "", dom.style.filter = options.d_opacity ? "alpha(opacity=" + 100 * options.d_opacity + ")" : "alpha(opacity=20)", "loading" === options.type && (dom.style.padding = "0px"), dom.setAttribute("dialog-type", options.type), dom.className = "didi-dialog-wrap", html = "", html += "<div style='" + ("loading" === options.type ? "padding:0px;" : "padding: 0px 16px;") + "'>", options.dom && 1 === options.dom.nodeType ?
          html += options.dom.outerHTML : options.html && "string" == typeof options.html ? html += options.html : options.domId && (options.domId.length && (element = doc.getElementById(options.domId), element && (html += element.outerHTML))), options.icon ? (_ref = options.icon.type, coffeeForClosure = options.icon.width || "61px", p = options.icon.height || "61px", _ref && (expires = "", expires = "loading" === options.type ? "margin:36px 0px 10px 0" : "margin:20px 0px 12px 0", loading = "dialog-icon icon-" +
          _ref, "loading" === _ref && (loading = "icon-loading"), html += '<p class="didi_dialog_icon" style="' + expires + '"><span class="' + loading + '" style="display: inline-block; width:' + coffeeForClosure + ";height:" + p + "; background-size:" + coffeeForClosure + " " + p + ';"></span></p>')) : html += '<div class="no-icon" style="height:20px"></div>', options.title && isObject(options.title)) {
            /** @type {number} */
            i = 0;
            ilen = options.title.length;
            for (;ilen > i;i++) {
              s = options.title[i];
              if (s) {
                ff8a01 = s.color || "#ff8a01";
                b = s.fontSize || "1.4em";
                html += '<p class="didi-dialog-title" style="color:' + ff8a01 + ";font-size:" + b + ';">' + s.txt + "</p>";
              }
            }
          }
          if (options.tips && isObject(options.tips)) {
            /** @type {number} */
            y = 0;
            x = options.tips.length;
            for (;x > y;y++) {
              t = options.tips[y];
              if (t) {
                k = t.color || "#666666";
                T = t.fontSize || "1.0em";
                html += '<p class="didi-dialog-p" style="color:' + k + ";font-size:" + T + ';">' + t.txt + "</p>";
              }
            }
          }
          if (options.btns && isObject(options.btns)) {
            html += '<div id="d_dialog_footer" class="didi-dialog-footer">';
            /** @type {number} */
            idx = 0;
            r = options.btns.length;
            for (;r > idx;idx++) {
              row = options.btns[idx];
              if (row) {
                html += "confirm" === options.type ? '<a class="' + row.klsName + '" id="' + row.id + '" style="width: 118px; height: 37px; line-height: 35px; margin:0 3px;">' + row.txt + "</a>" : '<a class="' + row.klsName + '" id="' + row.id + '" style="width: 100%;">' + row.txt + "</a>";
              }
            }
            html += "</div>";
          }
          html += "</div>";
          /** @type {string} */
          dom.innerHTML = html;
          script = doc.getElementById("d_wall");
          testee = doc.getElementById("d_wrap");
          if (script) {
            root.removeChild(script);
            render(container);
          } else {
            render(container);
          }
          if (testee) {
            root.removeChild(testee);
            render(dom);
          } else {
            render(dom);
          }
          td = doc.getElementById("d_wall");
          el = doc.getElementById("d_wrap");
          if (options.btns) {
            if (options.btns.length) {
              if (isObject(options.btns)) {
                $.each(options.btns, function(dataAndEvents, options) {
                  if (options) {
                    var id = options.id;
                    var etype = options.eventType || "click";
                    var callback = options.callback;
                    var el = doc.getElementById(id);
                    if (el) {
                      if (!el["on" + etype]) {
                        if ("click" === etype) {
                          $(el).touch(function(event) {
                            event.preventDefault();
                            event.stopPropagation();
                            setTimeout(function() {
                              callback(event);
                            }, 0);
                          }, true);
                        } else {
                          el.addEventListener(etype, callback, false);
                        }
                      }
                    }
                  }
                });
              }
            }
          }
        }
      },
      /**
       * @return {?}
       */
      _dialogPosi : function() {
        var position;
        var b;
        var start = e.scrollTop;
        var t = e.scrollLeft;
        var h = e.clientHeight;
        var x = doc.getElementsByTagName("body")[0].offsetWidth;
        var y = el.style.height.replace("px", "");
        var top = el.style.width.replace("px", "");
        return "auto" === y && (y = 220), position = start + (h - y - 20) / 2, b = t + (x - top) / 2, {
          top : position,
          left : b
        };
      }
    };
    /**
     * @return {undefined}
     */
    Modal.fn.show = function() {
      var h;
      var w;
      var yOffset;
      var pos;
      var restoreScript = this;
      if (td) {
        if (el) {
          h = root.scrollHeight;
          w = e.clientWidth;
          yOffset = doc.documentElement.scrollTop || doc.body.scrollTop;
          /** @type {string} */
          td.style.width = w + "px";
          /** @type {string} */
          td.style.height = h + "px";
          /** @type {string} */
          td.style.display = "block";
          pos = this._dialogPosi();
          /** @type {string} */
          el.style.top = pos.top + yOffset + "px";
          /** @type {string} */
          el.style.left = pos.left + "px";
          /** @type {string} */
          el.style.display = "block";
          window.addEventListener("resize", function() {
            restoreScript.reset.call(restoreScript);
          }, false);
          window.addEventListener("scroll", function() {
            restoreScript.reset.call(restoreScript);
            yOffset = doc.documentElement.scrollTop || doc.body.scrollTop;
            /** @type {string} */
            el.style.top = pos.top + yOffset + "px";
          }, false);
        }
      }
      if (timeout) {
        clearTimeout(timeout);
      }
    };
    /**
     * @param {string} type
     * @return {?}
     */
    Modal.fn.hide = function(type) {
      if (type && ("string" == typeof type && el)) {
        var scope = el.getAttribute("dialog-type");
        if (type !== scope) {
          return false;
        }
      }
      if (td) {
        if (el) {
          /** @type {string} */
          td.style.display = "none";
          /** @type {string} */
          el.style.display = "none";
        }
      }
      if (timeout) {
        clearTimeout(timeout);
      }
    };
    /**
     * @return {undefined}
     */
    Modal.fn.reset = function() {
      var newheight;
      var w;
      var pos;
      var val = td.style.display;
      if ("block" === val) {
        if (td) {
          if (el) {
            newheight = doc.documentElement.scrollHeight;
            w = doc.documentElement.clientWidth;
            /** @type {string} */
            td.style.width = w + "px";
            /** @type {string} */
            td.style.height = newheight + "px";
            pos = this._dialogPosi();
            /** @type {string} */
            el.style.top = pos.top + "px";
            /** @type {string} */
            el.style.left = pos.left + "px";
          }
        }
      }
    };
    obj = {};
    /**
     * @param {(boolean|string)} val
     * @param {?} completeCallback
     * @param {Object} opt
     * @return {?}
     */
    obj.alert = function(val, completeCallback, opt) {
      if (opt = opt || {}, val === false) {
        return Modal.fn.hide("alert");
      }
      var options = {
        type : "alert",
        bgcolor : "black",
        height : "auto",
        width : opt.width || "280px",
        tips : [{
          txt : val,
          fontSize : "1.1em"
        }],
        btns : [{
          id : "btn_close",
          txt : opt.text || "\u6211\u77e5\u9053\u4e86",
          klsName : "btn-orange",
          eventType : "click",
          /**
           * @return {undefined}
           */
          callback : function() {
            data.hide();
            if (completeCallback) {
              completeCallback();
            }
          }
        }]
      };
      if (opt.icon !== false) {
        options.icon = {
          type : opt.icon || "alert",
          width : "61px",
          height : "61px"
        };
      }
      data = new Modal(options);
      data.show();
    };
    /**
     * @param {string} verbose
     * @param {?} fn
     * @param {?} arg
     * @param {Object} options
     * @return {?}
     */
    obj.confirm = function(verbose, fn, arg, options) {
      if (options = options || {}, verbose === false) {
        return Modal.fn.hide("confirm");
      }
      var self = {
        type : "confirm",
        height : "auto",
        width : options.width || "280px",
        tips : [{
          txt : verbose || "\u786e\u5b9a\u6267\u884c\u6b64\u64cd\u4f5c\u5417\uff1f",
          color : "#666666",
          fontSize : "1.04em"
        }],
        btns : [{
          id : "btn-cancel",
          txt : options.cancelText || "\u53d6\u6d88",
          klsName : "btn-white",
          eventType : "click",
          /**
           * @return {undefined}
           */
          callback : function() {
            data.hide();
            if ("function" == typeof arg) {
              arg();
            }
          }
        }, {
          id : "btn-ok",
          txt : options.confirmText || "\u786e\u5b9a",
          klsName : "btn-orange",
          eventType : "click",
          /**
           * @return {undefined}
           */
          callback : function() {
            data.hide();
            if ("function" == typeof fn) {
              fn();
            }
          }
        }]
      };
      if (options.icon !== false) {
        self.icon = {
          type : options.icon || "alert",
          width : "60px",
          height : "60px"
        };
      }
      data = new Modal(self);
      data.show();
    };
    /**
     * @param {string} settings
     * @param {number} quietMillis
     * @param {?} callback
     * @return {?}
     */
    obj.loading = function(settings, quietMillis, callback) {
      if (settings === false) {
        return Modal.fn.hide("loading");
      }
      var options = {
        type : "loading",
        bgcolor : "#ffffff",
        d_bgcolor : "black",
        d_opacity : "0.7",
        width : "125px",
        height : "125px",
        icon : {
          type : "loading",
          width : "30px",
          height : "30px"
        },
        tips : [{
          txt : settings || "\u6b63\u5728\u52a0\u8f7d...",
          color : "#FFFFFF",
          fontSize : "13px"
        }]
      };
      data = new Modal(options);
      data.show();
      if (null === quietMillis || void 0 === quietMillis) {
        /** @type {number} */
        quietMillis = 1E4;
      }
      if (quietMillis) {
        if (timeout) {
          clearTimeout(timeout);
        }
        /** @type {number} */
        timeout = window.setTimeout(function() {
          data.hide();
        }, quietMillis);
      }
      if (callback) {
        callback();
      }
    };
    $.each(["alert", "confirm", "loading"], function(dataAndEvents, x) {
      if (!global[x]) {
        global[x] = obj[x];
      }
    });
    if (!global.dialog) {
      /** @type {function (?): ?} */
      global.dialog = Modal;
    }
  })(self);
  (function(self) {
    var normalize;
    var data;
    var next;
    /**
     * @param {string} key
     * @return {?}
     */
    self.getData = function(key) {
      if (window.localStorage) {
        return localStorage[key] || null;
      }
      var parts;
      /** @type {RegExp} */
      var reSplitToken = new RegExp("(^| )" + key + "=([^;]*)(;|$)");
      return parts = document.cookie.match(reSplitToken), parts ? window.unescape ? window.unescape(parts[2]) : parts[2] : null;
    };
    /**
     * @param {string} name
     * @param {string} value
     * @return {undefined}
     */
    self.setData = function(name, value) {
      if (window.localStorage) {
        /** @type {string} */
        localStorage[name] = value;
      } else {
        /** @type {Date} */
        var date = new Date;
        date.setTime(date.getTime() + 2592E3);
        value = window.escape ? window.escape(value) : value;
        /** @type {string} */
        document.cookie = name + "=" + value + ";expires=" + date.toGMTString();
      }
    };
    /**
     * @param {string} key
     * @return {undefined}
     */
    self.delData = function(key) {
      var value = self.getData(key);
      if (void 0 !== value) {
        if (window.localStorage) {
          delete localStorage[key];
        } else {
          /** @type {string} */
          document.cookie = key + "=" + value + ";expires=" + (new Date(0)).toGMTString();
        }
      }
    };
    /**
     * @param {string} msg
     * @return {undefined}
     */
    self.err = function(msg) {
      console.log("ERR:" + msg);
    };
    /**
     * @return {?}
     */
    self.ua = function() {
      var attributes = {
        android : /android/i,
        iphone : /iphone/i,
        ipad : /ipad/i,
        ipod : /ipod/i,
        weixin : /micromessenger/i,
        mqq : /QQ\//i,
        app : /didi.passenger/i,
        sdk : /didi.sdk/i,
        alipay : /aliapp/i,
        ding : /dingtalk/i,
        chrome : /chrome\//i
      };
      var o = {};
      /** @type {string} */
      var n = window.navigator.userAgent;
      return $.each(attributes, function(e, numbers) {
        o[e] = numbers.test(n);
      }), o.ios = o.iphone || (o.ipad || o.ipod), o.mobile = o.ios || o.android, o.pc = !o.mobile, o.prod = /(udache.com|diditaxi.com.cn|xiaojukeji.com)\//.test(window.location.href), o.dev = !o.prod, o.dingding = o.ding, o.ding && (o.alipay = false), window.chrome && (window.chrome && (o.chrome = true)), o.app || (o.app = !!window.DidiJSBridge), o.didi = o.app, o;
    };
    /**
     * @param {string} name
     * @return {?}
     */
    self.is = function(name) {
      var attributes = name.split(",");
      var buf = self.ua();
      /**
       * @param {(Object|string)} message
       * @return {?}
       */
      var process = function(message) {
        var attributes;
        var n;
        return(message = $.trim(message) || "") ? (attributes = message.split("."), n = true, $.each(attributes, function(dataAndEvents, off) {
          return buf[off] ? void 0 : (n = false, false);
        }), n) : false;
      };
      /** @type {boolean} */
      var o = false;
      return $.each(attributes, function(dataAndEvents, last) {
        return process(last) ? (o = true, false) : void 0;
      }), o;
    };
    /**
     * @param {string} p
     * @return {?}
     */
    normalize = function(p) {
      p = p || "";
      p = p.split(".");
      /** @type {number} */
      p.length = 4;
      /** @type {Array} */
      var tagNameArr = [];
      return $.each(p, function(dataAndEvents, value) {
        /** @type {number} */
        value = 1 * value;
        if (value) {
          tagNameArr.push(value > 10 ? value : "0" + value);
        } else {
          tagNameArr.push("00");
        }
      }), parseInt(tagNameArr.join(""), 10);
    };
    /**
     * @return {undefined}
     */
    self.version = function() {
    };
    /**
     * @param {?} a
     * @param {(Object|string)} message
     * @param {?} b
     * @return {?}
     */
    self.version.compare = function(a, message, b) {
      return a = normalize(a), b = normalize(b), message = $.trim(message) || "", -1 !== message.indexOf("=") && a === b ? true : -1 !== message.indexOf(">") && a > b ? true : -1 !== message.indexOf("<") && b > a ? true : false;
    };
    /** @type {function (string): ?} */
    self.version.parse = normalize;
    data = {
      data : {},
      sign : "",
      /**
       * @param {Object} view
       * @return {undefined}
       */
      pv : function(view) {
        var that = data.data = {
          id : view.id,
          data : view.data || {}
        };
        $.ajax({
          url : "//gsactivity.diditaxi.com.cn/gulfstream/recommend/v1/activity/pv",
          data : {
            a_id : that.id,
            data : that.data
          },
          dataType : "jsonp",
          /**
           * @param {Function} obj
           * @return {undefined}
           */
          success : function(obj) {
            data.sign = obj.sign;
          }
        });
      },
      /**
       * @param {string} a
       * @param {Object} source
       * @param {string} text
       * @return {undefined}
       */
      log : function(a, source, text) {
        if ($.isFunction(source)) {
          /** @type {Object} */
          text = source;
          source = {};
        }
        var message = data.data;
        $.ajax({
          url : "//gsactivity.diditaxi.com.cn/gulfstream/recommend/v1/activity/log",
          data : {
            a_id : message.id,
            action : a,
            data : source || {},
            sign : data.sign
          },
          dataType : "jsonp",
          /**
           * @return {undefined}
           */
          success : function() {
            if (text) {
              text();
            }
          }
        });
      }
    };
    /**
     * @param {Object} opts
     * @param {Object} name
     * @param {string} index
     * @return {undefined}
     */
    next = function(opts, name, index) {
      if ($.isPlainObject(opts) && !data.sign) {
        data.pv(opts);
      } else {
        if ("string" == typeof opts) {
          data.log(opts, name, index);
        }
      }
    };
    $.extend(next, {
      /** @type {function (Object): undefined} */
      pv : data.pv,
      /** @type {function (string, Object, string): undefined} */
      log : data.log
    });
    /** @type {function (Object, Object, string): undefined} */
    self.trace = next;
  })(self);
  (function(self) {
    var cache = {
      cache : {},
      /**
       * @return {undefined}
       */
      set : function() {
      }
    };
    var item = {
      cfgs : {},
      shareTitle : {
        weixin_timeline : "\u5fae\u4fe1\u670b\u53cb\u5708",
        weixin_appmsg : "\u5fae\u4fe1\u597d\u53cb",
        qq_appmsg : "QQ",
        qzone : "QQ\u7a7a\u95f4",
        alipay_friend : "\u652f\u4ed8\u5b9d\u597d\u53cb",
        alipay_life : "\u652f\u4ed8\u5b9d\u751f\u6d3b\u5708"
      },
      shareMap : {
        title : "title",
        link : "link,url",
        icon : "icon,imgUrl",
        desc : "desc,text,content"
      },
      /**
       * @param {string} name
       * @param {Object} tab
       * @param {Object} flags
       * @return {?}
       */
      getShareCfg : function(name, tab, flags) {
        var obj;
        var self;
        var match;
        var res;
        var onerror;
        return flags = flags || {}, tab[name] === false ? false : (obj = {}, self = {}, match = function(expected, url) {
          /** @type {string} */
          var optsData = "";
          return $.each(item.shareMap[url].split(","), function(dataAndEvents, margin) {
            return tab[expected + margin] ? (optsData = tab[expected + margin], false) : void 0;
          }), optsData;
        }, $.each(item.shareMap, function(key) {
          var val = flags[key] || key;
          self[key] = val;
          obj[val] = match(name + "_", key) || match("", key);
        }), tab.revertAppmsgTitle === true && (("weixin_appmsg" === name || "qq_appmsg" === name) && (res = obj[self.desc], obj[self.desc] = obj[self.title], obj[self.title] = res)), onerror = function(url) {
          return/^\/\//.test(url) && (url = window.location.protocol + url), url;
        }, obj[self.link] = onerror(obj[self.link]), obj[self.icon] = onerror(obj[self.icon]), obj);
      },
      /**
       * @param {string} name
       * @param {?} s
       * @return {undefined}
       */
      reg : function(name, s) {
        item.cfgs[name] = s;
      },
      /**
       * @param {number} url
       * @return {?}
       */
      get : function(url) {
        return item.cfgs[url] || {};
      }
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    self.env = function(name, value) {
      return value ? item.reg(name, value) : item.get(name);
    };
    $.each("reg,getShareCfg".split(","), function(dataAndEvents, key) {
      self.env[key] = item[key];
    });
    /**
     * @param {Object} method
     * @return {undefined}
     */
    self.setShare = function(method) {
      if (self.is("weixin")) {
        self.weixin.setShare(method);
      }
      if (self.is("didi")) {
        self.app.setShare(method);
      }
      if (self.is("mqq")) {
        self.qq.setShare(method);
      }
      $.each(item.cfgs, function(dataAndEvents, $log) {
        if ($log.is) {
          if ($log.is()) {
            if ($log.setShare) {
              $log.setShare(method);
            }
          }
        }
      });
    };
    (function(self) {
      var module = {
        fns : [],
        isReady : false,
        isInit : false,
        /**
         * @return {undefined}
         */
        init : function() {
          if (!module.isInit) {
            /** @type {boolean} */
            module.isInit = true;
            self._.require("//res.wx.qq.com/open/js/jweixin-1.0.0", "wx", function(me) {
              if (me) {
                if (me.hideOptionMenu) {
                  me.hideOptionMenu();
                }
              }
              module.getSign(function(data) {
                /** @type {Array.<string>} */
                var testEnvironment = "onMenuShareTimeline,onMenuShareAppMessage,onMenuShareWeibo,hideOptionMenu,showOptionMenu,hideMenuItems,showMenuItems,chooseWXPay,scanQRCode,checkJsApi,getLocation,chooseImage".split(",");
                var config = {
                  debug : false,
                  appId : data.appid || data.appId,
                  timestamp : "" + (data.timestamp || data.timestamp),
                  nonceStr : data.noncestr || data.nonceStr,
                  signature : data.sign || data.signature
                };
                /** @type {Array.<string>} */
                config.jsApiList = testEnvironment;
                me.config(config);
                me.ready(function() {
                  /** @type {boolean} */
                  module.isReady = true;
                  $.each(module.fns, function(dataAndEvents, forOwn) {
                    forOwn(me);
                  });
                });
                me.error(function() {
                });
              });
            });
          }
        },
        /**
         * @return {?}
         */
        is : function() {
          return self.is("weixin");
        },
        /**
         * @param {Function} done
         * @return {undefined}
         */
        getSign : function(done) {
          var requestUrl;
          var t;
          var types = self._cfg || {};
          if ($.isFunction(self._cfg.wxSignFn)) {
            types.wxSignFn(function(err) {
              done(err);
            });
          } else {
            /** @type {string} */
            requestUrl = location.href.split("#")[0];
            if (types.wxSignApi) {
              t = types.wxSignApi;
            } else {
              if (/walletranship.com\//.test(requestUrl)) {
                /** @type {string} */
                t = "//activity.walletranship.com/wx/getconfig";
              } else {
                /** @type {string} */
                t = "//common.diditaxi.com.cn/general/webEntry/jsapiticket";
                /** @type {string} */
                requestUrl = encodeURIComponent(requestUrl);
              }
            }
            $.ajax({
              dataType : "json",
              url : t,
              data : {
                url : requestUrl
              },
              /**
               * @param {Function} data
               * @return {undefined}
               */
              success : function(data) {
                if (0 === 1 * data.errno) {
                  done(data.info || (data.data || data));
                }
              }
            });
          }
        },
        /**
         * @param {Function} prop
         * @return {?}
         */
        fn : function(prop) {
          return module.is() ? 0 === arguments.length ? true : (module.isReady ? prop(window.wx, true) : (module.fns.push(prop), module.init()), void 0) : false;
        },
        /**
         * @param {Object} scope
         * @return {undefined}
         */
        setShare : function(scope) {
          module.fn(function(dataAndEvents) {
            dataAndEvents.showOptionMenu({});
            /** @type {Array} */
            var out = [];
            /** @type {Array} */
            var configList = [];
            $.each({
              weixin_timeline : {
                fn : "Timeline",
                menu : "timeline"
              },
              weixin_appmsg : {
                fn : "AppMessage",
                menu : "appMessage"
              },
              qq_appmsg : {
                fn : "QQ",
                menu : "qq"
              },
              qzone : {
                fn : "QZone",
                menu : "QZone"
              },
              qq_weibo : {
                fn : "Weibo",
                menu : "weiboApp"
              }
            }, function(match, options) {
              var fn;
              /** @type {string} */
              var copies = "menuItem:share:" + options.menu;
              return scope === false ? (out.push(copies), void 0) : (fn = self.env.getShareCfg(match, scope, {
                icon : "imgUrl"
              }), fn === false ? out.push(copies) : (fn.cancel = scope.cancel || function() {
              }, fn.success = function(body) {
                if (scope.success) {
                  scope.success({
                    from : "weixin",
                    to : match,
                    status : "success",
                    /** @type {Function} */
                    ret : body
                  });
                }
              }, dataAndEvents["onMenuShare" + options.fn](fn), configList.push(copies)), void 0);
            });
            if (out.length > 0) {
              dataAndEvents.hideMenuItems({
                menuList : out
              });
            }
            if (configList.length > 0) {
              dataAndEvents.showMenuItems({
                menuList : configList
              });
            }
          });
        },
        /**
         * @return {undefined}
         */
        sign : function() {
        }
      };
      /**
       * @param {Function} val
       * @return {?}
       */
      self.weixin = function(val) {
        return module.fn(val);
      };
      $.each("getSign,setShare,is".split(","), function(dataAndEvents, name) {
        self.weixin[name] = module[name];
      });
      self.env("weixin", module);
    })(self);
    (function(wrapper) {
      var options = {
        fns : [],
        isReady : false,
        isInit : false,
        /**
         * @return {undefined}
         */
        init : function() {
          if (!options.isInit) {
            /** @type {boolean} */
            options.isInit = true;
            /** @type {Element} */
            var scriptObject = document.createElement("script");
            /** @type {string} */
            scriptObject.type = "text/javascript";
            /** @type {string} */
            scriptObject.src = "//open.mobile.qq.com/sdk/qqapi.js?_bid=152";
            document.getElementsByTagName("head")[0].appendChild(scriptObject);
            /**
             * @return {undefined}
             */
            scriptObject.onload = function() {
              /** @type {boolean} */
              options.isReady = true;
              $.each(options.fns, function(dataAndEvents, callback) {
                callback(window.mqq);
              });
            };
          }
        },
        /**
         * @return {?}
         */
        is : function() {
          return wrapper.is("mqq");
        },
        /**
         * @param {Function} prop
         * @return {?}
         */
        fn : function(prop) {
          return wrapper.is("mqq") ? 0 === arguments.length ? true : (options.isReady ? prop(window.mqq, true) : (options.fns.push(prop), options.init()), void 0) : false;
        },
        /**
         * @param {Object} config
         * @return {undefined}
         */
        setShare : function(config) {
          options.fn(function(body) {
            if (config === false) {
              return body.ui.setTitleButtons({
                right : {
                  hidden : true
                }
              }), void 0;
            }
            var out = {
              title : config.title || "",
              share_url : config.link || (config.url || (config.href || "")),
              image_url : config.imgUrl || (config.icon || ""),
              desc : config.desc || (config.text || (config.content || ""))
            };
            body.data.setShareInfo(out, function() {
            });
          });
        }
      };
      /**
       * @param {Function} val
       * @return {?}
       */
      wrapper.qq = function(val) {
        return options.fn(val);
      };
      $.each("setShare,is".split(","), function(dataAndEvents, name) {
        wrapper.qq[name] = options[name];
      });
      /** @type {function (Function): ?} */
      wrapper.mqq = wrapper.qq;
    })(window.didi);
    (function() {
      var ua;
      var condition;
      var skip;
      var reInjection;
      var options;
      var me;
      var d;
      var jQuery;
      var self = {
        cfg : {
          pageClose : {
            fn : "page_close",
            callback : false
          },
          pageRefresh : {
            fn : "page_refresh",
            callback : false
          },
          pageOpen : {
            fn : "open_url",
            sarg : true,
            alias : "openUrl",
            callback : false,
            /**
             * @param {Object} callback
             * @return {?}
             */
            call : function(callback) {
              return callback.newWindow ? skip : (event.bridge.openNativeWebPage(callback), void 0);
            }
          },
          openNativeWebPage : {
            /**
             * @param {Object} callback
             * @return {?}
             */
            call : function(callback) {
              return event.is("ios") && (callback.url && (window.location.href = callback.url)), skip;
            }
          },
          feeback : {
            fn : "feeback",
            callback : false
          },
          callNativeLogin : {
            callback : false,
            sarg : true,
            /**
             * @param {Object} callback
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            call : function(callback, expectedNumberOfNonCommentArgs) {
              return expectedNumberOfNonCommentArgs ? options.call("callNativeLoginWithCallback", {}, expectedNumberOfNonCommentArgs) : skip;
            }
          },
          callNativeLoginWithCallback : {
            support : "4.1"
          },
          initEntrance : {
            fn : "init_entrance",
            sarg : true,
            callback : false
          },
          invokeEntrance : {
            fn : "invoke_entrance",
            sarg : true,
            callback : false
          },
          showEntrance : {
            fn : "show_entrance",
            sarg : true,
            callback : false
          },
          hideEntrance : {
            fn : "hide_entrance",
            sarg : true,
            callback : false
          },
          shareWeixinTimeline : {
            fn : "share_weixin_timeline",
            sarg : true,
            callback : false
          },
          shareWeixinAppmsg : {
            fn : "share_weixin_appmsg",
            sarg : true,
            callback : false
          },
          shareQzone : {
            fn : "share_qzone",
            sarg : true,
            callback : false
          },
          shareQQAppmsg : {
            fn : "share_qq_appmsg",
            sarg : true,
            callback : false
          },
          shareSinaWeibo : {
            fn : "share_sina_weibo",
            sarg : true,
            callback : false
          },
          getUserInfo : {
            support : "3.9.5"
          },
          getSystemInfo : {
            support : "3.9.5"
          },
          getLocationInfo : {
            support : "3.9.5"
          },
          imageCutReview : {
            alias : "callback_image_literature_review",
            support : "3.9.8"
          },
          resizeImage : {
            support : "3.9.10"
          },
          markupPageClose : {
            fn : "markup_page_close",
            callback : false,
            support : "4.1.3"
          },
          agreeMarkup : {
            fn : "agree_markup",
            callback : false,
            support : "4.1.3"
          },
          disagreeMarkup : {
            fn : "disagree_markup",
            callback : false,
            support : "4.1.3"
          },
          markupGuide : {
            fn : "markup_guide",
            callback : false,
            support : "4.1.3"
          },
          pay : {
            fn : "pay_setup",
            support : "4.1.5"
          },
          bindCard : {
            fn : "bind_card",
            support : "4.1.5"
          },
          orderCancel : {
            fn : "orderCancel",
            sarg : true,
            callback : false,
            support : "4.2.1"
          },
          orderRetry : {
            fn : "orderRetry",
            callback : false,
            support : "4.3.2"
          },
          redirectToDetail : {
            fn : "redirectToDetail",
            callback : false,
            support : "4.2.3"
          },
          traceLog : {},
          apolloGetToggle : {
            support : "4.2",
            paramKey : "name",
            /**
             * @param {Object} data
             * @param {Function} success
             * @return {undefined}
             */
            callback : function(data, success) {
              /** @type {Object} */
              d.data = data;
              success(data);
            }
          },
          apolloTraceLog : {
            support : "4.2",
            /**
             * @param {Object} callback
             * @param {Object} expectedNumberOfNonCommentArgs
             * @return {?}
             */
            call : function(callback, expectedNumberOfNonCommentArgs) {
              return d.traceLog(callback, expectedNumberOfNonCommentArgs);
            }
          },
          startRecord : {
            support : "4.3.4"
          },
          endRecord : {
            support : "4.3.4"
          },
          playVoice : {
            support : "4.3.4"
          },
          stopVoice : {
            support : "4.3.4"
          }
        },
        downloadUrl : {
          ios : "https://itunes.apple.com/cn/app/di-di-da-che-zhi-jian-shang/id554499054?ls=1&mt=8",
          android : "http://dldir1.qq.com/diditaxi/apk/didi_psngr.apk"
        },
        map : false,
        /**
         * @return {undefined}
         */
        init : function() {
          if (!self.map) {
            self.map = {};
            $.each(self.cfg, function(key, data) {
              if (!data.fn) {
                /** @type {string} */
                data.fn = key;
              }
              var category = key.replace(/([A-Z])/g, "_$1").toLowerCase();
              /** @type {Object} */
              self.map[key] = data;
              /** @type {Object} */
              self.map[data.fn] = data;
              /** @type {Object} */
              self.map[category] = data;
              if (data.alias) {
                $.each(data.alias.split(","), function(dataAndEvents, key) {
                  /** @type {Object} */
                  self.map[key] = data;
                });
              }
            });
          }
        },
        /**
         * @param {Object} template
         * @return {?}
         */
        formatFn : function(template) {
          return self.getFnCfg(template).fn || template;
        },
        /**
         * @param {Object} arg
         * @param {?} data
         * @param {boolean} dataAndEvents
         * @return {?}
         */
        formatParam : function(arg, data, dataAndEvents) {
          var tmp;
          var keyName = self.getFnCfg(arg);
          return keyName.paramKey ? "string" == typeof data && (keyName.paramKey && (tmp = {}, tmp[keyName.paramKey] = data, data = tmp)) : "object" == typeof data && (keyName.sarg && (dataAndEvents !== true && (data = JSON.stringify(data)))), data;
        },
        /**
         * @param {string} callback
         * @return {?}
         */
        hasCallback : function(callback) {
          return!!self.getFnCfg(callback).callback != false;
        },
        /**
         * @param {string} id
         * @return {?}
         */
        getFnCfg : function(id) {
          var key = id.replace(/\-/g, "_");
          var param = key.replace(/([A-Z])/g, "_$1").toLowerCase();
          return self.init(), self.map[key] || (self.map[param] || (self.map[id] || {}));
        },
        /**
         * @param {string} attributes
         * @return {?}
         */
        parse : function(attributes) {
          attributes = attributes || "";
          attributes = attributes.split(".");
          /** @type {number} */
          attributes.length = 4;
          /** @type {Array} */
          var tagNameArr = [];
          return $.each(attributes, function(dataAndEvents, start) {
            /** @type {number} */
            start = 1 * start;
            if (start) {
              tagNameArr.push(start >= 10 ? start : "0" + start);
            } else {
              tagNameArr.push("00");
            }
          }), parseInt(tagNameArr.join(""), 10);
        },
        /**
         * @param {?} x
         * @param {(Object|string)} message
         * @param {?} y
         * @return {?}
         */
        compare : function(x, message, y) {
          return x = self.parse(x), y = self.parse(y), message = $.trim(message) || "", -1 !== message.indexOf("=") && x === y ? true : -1 !== message.indexOf(">") && x > y ? true : -1 !== message.indexOf("<") && y > x ? true : false;
        },
        /**
         * @param {string} string
         * @return {?}
         */
        version : function(string) {
          var result;
          var i;
          if (!string) {
            return result = /didi.passenger\/([\d\.]+)/.exec(ua), result && result[1] ? result[1] : "3.9.4";
          }
          switch(i = self.version(), arguments.length) {
            case 1:
              if (result = /^\s*([>=<]*)\s*([\d\.]+)\s*$/.exec(string), result && 3 === result.length) {
                return self.compare(i, result[1] || "=", result[2]);
              }
              break;
            case 2:
              return self.version(string + arguments[1]);
            case 3:
              return self.compare.apply(null, arguments);
          }
          return false;
        },
        /**
         * @param {string} event
         * @param {?} result
         * @return {?}
         */
        support : function(event, result) {
          if (!self.is()) {
            return false;
          }
          var error = self.getFnCfg(event);
          return error.support ? self.compare(result || self.version(), ">=", error.support) : false;
        },
        /**
         * @return {?}
         */
        is : function() {
          return/didi.passenger\/([\d\.]+)/.test(ua) || (!!window.DidiJSBridge || (/didigsui.*_(.+)_\d+$/i.test(ua) || /ddudriver.*_(.+)$/i.test(ua)));
        }
      };
      var event = window.didi || {};
      var $ = window.$ || {};
      $.each = $.each || function(prop, $) {
        var n;
        var end;
        var p;
        if ("[object Array]" === Object.prototype.toString.call(prop)) {
          /** @type {number} */
          n = 0;
          end = prop.length;
          for (;end > n;n++) {
            $(n, prop[n]);
          }
        } else {
          for (p in prop) {
            $(p, prop[p]);
          }
        }
      };
      $.isFunction = $.isFunction || function(fn) {
        return "function" == typeof fn;
      };
      $.trim = $.trim || function(childrenVarArgs) {
        return childrenVarArgs;
      };
      /** @type {string} */
      ua = window.navigator.userAgent;
      /** @type {boolean} */
      condition = /android/i.test(ua);
      /** @type {string} */
      skip = "GOON_BRIDGE_CALL";
      reInjection = {
        /**
         * @return {undefined}
         */
        reInjection : function() {
          var event;
          var config = {
            queue : [],
            /**
             * @return {undefined}
             */
            callback : function() {
              /** @type {Array.<?>} */
              var args = Array.prototype.slice.call(arguments, 0);
              var i = args.shift();
              var n = args.shift();
              this.queue[i].apply(this, args);
              if (!n) {
                delete this.queue[i];
              }
            }
          };
          /**
           * @return {?}
           */
          config.callHandler = function() {
            var assigns;
            var method;
            var i;
            var option;
            var vvar;
            var index;
            var res;
            /** @type {Array.<?>} */
            var args = Array.prototype.slice.call(arguments, 0);
            if (args.length < 1) {
              throw "DidiJSBridge call error, message:miss method name";
            }
            /** @type {Array} */
            assigns = [];
            method = args.shift();
            /** @type {number} */
            i = 0;
            for (;i < args.length;i++) {
              option = args[i];
              /** @type {string} */
              vvar = typeof option;
              assigns.push(vvar);
              if ("function" === vvar) {
                /** @type {number} */
                index = config.queue.length;
                config.queue[index] = option;
                /** @type {number} */
                args[i] = index;
              }
            }
            if (res = JSON.parse(prompt(JSON.stringify({
              method : method,
              types : assigns,
              args : args
            }))), !res || 200 !== res.code) {
              throw "DidiJSBridge call error, code:" + res.code + ", message:" + res.result;
            }
            return res.result;
          };
          Object.getOwnPropertyNames(config).forEach(function(item) {
            var handler = config[item];
            if ("function" == typeof handler) {
              if ("callback" !== item) {
                /**
                 * @return {?}
                 */
                config[item] = function() {
                  return handler.apply(config, [item].concat(Array.prototype.slice.call(arguments, 0)));
                };
              }
            }
          });
          window.DidiJSBridge = config;
          /** @type {(Event|null)} */
          event = document.createEvent("HTMLEvents");
          event.initEvent("DidiJSBridgeReady", false, false);
          document.dispatchEvent(event);
        }
      };
      options = {
        isPre : false,
        isReady : false,
        fns : [],
        /**
         * @return {undefined}
         */
        prepare : function() {
          var scrollIntervalId;
          var t;
          var ready;
          if (!options.isPre) {
            /** @type {null} */
            scrollIntervalId = null;
            /** @type {number} */
            t = 0;
            /**
             * @return {undefined}
             */
            ready = function() {
              if ("undefined" != typeof DidiJSBridge) {
                options.getBridge(function(outErr) {
                  $.each(options.fns, function(dataAndEvents, cb) {
                    cb(outErr);
                  });
                  /** @type {Array} */
                  options.fns = [];
                });
                if (scrollIntervalId) {
                  clearInterval(scrollIntervalId);
                }
                document.removeEventListener("DidiJSBridgeReady", ready, false);
              }
            };
            document.addEventListener("DidiJSBridgeReady", ready, false);
            /** @type {number} */
            scrollIntervalId = setInterval(function() {
              ready();
              t++;
              if (t > 100) {
                if (scrollIntervalId) {
                  clearInterval(scrollIntervalId);
                }
              }
            }, 100);
            /** @type {boolean} */
            options.isPre = true;
          }
        },
        waitBridgeFn : null,
        waitBridgeCount : 0,
        /**
         * @param {Function} content
         * @return {?}
         */
        getBridge : function(content) {
          var parent = window.DidiJSBridge;
          if (options.isReady) {
            return content(parent);
          }
          if (condition && self.version("< 5.0.18")) {
            if (parent.queue) {
              return options.isReady = true, content(parent), void 0;
            }
            if (options.waitBridgeCount < 4) {
              if (options.waitBridgeFn) {
                clearTimeout(options.waitBridgeFn);
              }
              /** @type {number} */
              options.waitBridgeFn = setTimeout(function() {
                options.waitBridgeCount++;
                options.getBridge(content);
              }, 500);
            } else {
              if (4 === options.waitBridgeCount) {
                reInjection.reInjection();
                options.waitBridgeCount++;
                setTimeout(function() {
                  options.getBridge(content);
                }, 50);
              } else {
                /** @type {boolean} */
                options.isReady = true;
                content(parent);
              }
            }
          } else {
            setTimeout(function() {
              try {
                if (parent.init) {
                  parent.init({});
                }
              } catch (e) {
              }
              /** @type {boolean} */
              options.isReady = true;
              content(parent);
            }, 500);
          }
        },
        /**
         * @param {Function} val
         * @return {?}
         */
        fn : function(val) {
          return 0 === arguments.length ? true : self.is() ? "string" == typeof val ? options.call.apply(null, arguments) : (options.isReady ? options.getBridge(val) : (options.fns.push(val), options.prepare()), void 0) : true;
        },
        /**
         * @param {Object} callback
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Function} value
         * @return {?}
         */
        call : function(callback, expectedNumberOfNonCommentArgs, value) {
          var handler;
          var val;
          return "function" == typeof expectedNumberOfNonCommentArgs && (value = expectedNumberOfNonCommentArgs, expectedNumberOfNonCommentArgs = {}), handler = self.getFnCfg(callback), handler.call && (val = handler.call(expectedNumberOfNonCommentArgs, value), val !== skip) ? val : (me.supply() ? me.call(callback, expectedNumberOfNonCommentArgs, value) : options.fn(function(process) {
            callback = self.formatFn(callback);
            expectedNumberOfNonCommentArgs = self.formatParam(callback, expectedNumberOfNonCommentArgs);
            /** @type {boolean} */
            var hasCallback = handler.callback !== false;
            try {
              if (hasCallback) {
                process.callHandler(callback, expectedNumberOfNonCommentArgs, function(val) {
                  if ("string" == typeof val) {
                    /** @type {*} */
                    val = eval("(" + val + ")");
                  }
                  value = value || function() {
                  };
                  var sprintf = $.isFunction(handler.callback) ? handler.callback : function(context, fn) {
                    if ("function" == typeof fn) {
                      fn(context);
                    }
                  };
                  sprintf(val, value);
                });
              } else {
                if (expectedNumberOfNonCommentArgs) {
                  process.callHandler(callback, expectedNumberOfNonCommentArgs);
                } else {
                  process.callHandler(callback);
                }
              }
            } catch (e) {
            }
          }), void 0);
        },
        /**
         * @param {string} types
         * @param {Function} event
         * @return {?}
         */
        on : function(types, event) {
          return self.is() ? (condition ? me.on(types, event) : options.fn(function(self) {
            self.registerHandler(types, event);
          }), void 0) : false;
        },
        /**
         * @param {Object} opts
         * @return {undefined}
         */
        open : function(opts) {
          var b;
          var src;
          var attributes;
          var path;
          var prefix;
          opts = opts || {};
          if ("string" == typeof opts) {
            opts = {
              biz : opts
            };
          }
          /** @type {number} */
          b = Date.now();
          /** @type {string} */
          src = "didipasnger://common_marketing_host";
          attributes = {
            1 : "\u51fa\u79df\u8f66|taxi|\u6253\u8f66|1",
            2 : "\u4e13\u8f66|udache|2",
            3 : "\u5feb\u8f66|flier|fastcar|3",
            4 : "\u987a\u98ce\u8f66|shunfengche|4",
            5 : "\u4ee3\u9a7e|daijia|5"
          };
          /** @type {number} */
          path = 1;
          prefix = opts.business || opts.biz;
          if (prefix) {
            $.each(attributes, function(new_path, buf) {
              if (buf.indexOf(prefix) > -1) {
                /** @type {number} */
                path = new_path;
              }
            });
            src = src + "?business=" + path;
          }
          if (opts.loading !== false) {
            if (event.loading) {
              event.loading("\u8bf7\u7a0d\u5019...");
            }
          }
          $("<iframe>").attr({
            src : opts.packageUrl || src
          }).hide().appendTo("body");
          setTimeout(function() {
            var p;
            var loc;
            /** @type {number} */
            var a = Date.now();
            if (!b || 2500 > a - b) {
              /** @type {string} */
              p = opts.system ? "ios" === opts.system ? "ios" : "android" : condition ? "android" : "ios";
              loc = opts[p] || self.downloadUrl[p];
              location.href = loc;
              if (opts.loading !== false) {
                event.loading(false);
              }
            }
          }, 2E3);
        }
      };
      me = {
        id : 0,
        callbacks : [],
        events : {},
        /**
         * @return {?}
         */
        supply : function() {
          return "undefined" != typeof event.bridge._forceTitan ? event.bridge._forceTitan : condition && self.version(">= 4.2.1");
        },
        /**
         * @param {string} types
         * @param {Function} event
         * @return {undefined}
         */
        on : function(types, event) {
          /** @type {Function} */
          me.events[types] = event;
        },
        /**
         * @param {?} event
         * @param {(Array|string)} data
         * @return {undefined}
         */
        trigger : function(event, data) {
          var h = me.events[event];
          if (h) {
            if ("string" == typeof data) {
              /** @type {*} */
              data = eval("(" + data + ")");
            }
            h(data);
          }
        },
        /**
         * @return {?}
         */
        getId : function() {
          return me.id++, "titan_" + me.id;
        },
        /**
         * @param {Object} callback
         * @param {Object} expectedNumberOfNonCommentArgs
         * @param {Function} value
         * @return {undefined}
         */
        call : function(callback, expectedNumberOfNonCommentArgs, value) {
          var data;
          var id = me.getId();
          var listener = self.getFnCfg(callback);
          /**
           * @param {Object} obj
           * @return {undefined}
           */
          me.callbacks[id] = function(obj) {
            var group = $.isFunction(listener.callback) ? listener.callback : function(context, fn) {
              if ("function" == typeof fn) {
                fn(context);
              }
            };
            group(obj, value);
          };
          expectedNumberOfNonCommentArgs = self.formatParam(callback, expectedNumberOfNonCommentArgs, true);
          data = {
            id : id,
            cmd : self.formatFn(callback),
            params : expectedNumberOfNonCommentArgs || {}
          };
          prompt(JSON.stringify(data));
        },
        /**
         * @param {Object} e
         * @return {undefined}
         */
        callback : function(e) {
          if ("string" == typeof e && (e = eval("(" + e + ")")), e.id && e.result) {
            var fn = me.callbacks[e.id] || false;
            if ("function" == typeof fn) {
              fn(e.result);
            }
            delete me.callbacks[e.id];
          }
          if (e.handlerName) {
            if (e.data) {
              me.trigger(e.handlerName, e.data);
            }
          }
        }
      };
      d = {
        data : false,
        /**
         * @param {Object} args
         * @return {undefined}
         */
        traceLog : function(args) {
          var $scope = d.data || false;
          if ($scope) {
            event.bridge.traceLog({
              eventId : "ApolloTraceLog",
              extraInfo : {
                name : $scope.name,
                allow : $scope.allow,
                testKey : args.testKey,
                event : args.event
              }
            });
          }
        },
        /**
         * @param {?} owner
         * @param {?} callback
         * @return {undefined}
         */
        init : function(owner, callback) {
          var STOP = {
            isReady : false,
            allow : d.allow
          };
          event.bridge.apolloGetToggle(owner, function(data) {
            /** @type {string} */
            d.data = data;
            if (callback) {
              callback(STOP);
            }
          });
        },
        /**
         * @return {?}
         */
        allow : function() {
          return d.data.allow;
        }
      };
      jQuery = {
        shareMap : {
          weixin_timeline : "\u5fae\u4fe1\u670b\u53cb\u5708",
          weixin_appmsg : "\u5fae\u4fe1\u597d\u53cb",
          qq_appmsg : "QQ",
          qzone : "QQ\u7a7a\u95f4",
          alipay_friend : "\u652f\u4ed8\u5b9d\u597d\u53cb",
          alipay_life : "\u652f\u4ed8\u5b9d\u751f\u6d3b\u5708"
        },
        data : {},
        /**
         * @param {Object} row
         * @param {string} prefix
         * @return {?}
         */
        formatShareData : function(row, prefix) {
          var type;
          var defaults = {
            url : "link,url",
            icon_url : "icon",
            img_url : "imgUrl,img_url,icon",
            title : "title",
            content : "desc,content",
            from : "from"
          };
          var attributes = {
            title : "\u6ef4\u6ef4\u4e00\u4e0b\uff0c\u7f8e\u597d\u51fa\u884c",
            from : "native"
          };
          var match = {};
          return prefix = prefix ? prefix + "_" : "", $.each(defaults, function(num, pair) {
            /** @type {string} */
            num = "share_" + num;
            $.each(pair.split(","), function(dataAndEvents, number) {
              return match[num] = match[num] || (row[prefix + number] || ""), match[num] ? false : void 0;
            });
            if (!match[num]) {
              $.each(pair.split(","), function(dataAndEvents, index) {
                return match[num] = match[num] || (row[index] || ""), match[num] ? false : void 0;
              });
            }
          }), $.each(attributes, function(startLength, value) {
            /** @type {string} */
            var index = "share_" + startLength;
            match[index] = match[index] || value;
          }), row.revertAppmsgTitle === true && (("weixin_appmsg" === prefix || "qq_appmsg" === prefix) && (type = match.share_content, match.share_content = match.share_title, match.share_title = type)), $.each(["icon_url", "img_url", "url"], function(dataAndEvents, port) {
            /** @type {string} */
            var name = "share_" + port;
            if (/^\/\//.test(match[name])) {
              match[name] = window.location.protocol + match[name];
            }
          }), match;
        },
        /**
         * @param {Object} data
         * @param {?} callback
         * @return {?}
         */
        setShare : function(data, callback) {
          if (!self.is()) {
            return false;
          }
          var that = {
            entrance : {
              icon : "http://static.xiaojukeji.com/api/img/i-webview-entrance.png"
            },
            buttons : []
          };
          if (data !== false) {
            /** @type {Object} */
            jQuery.data = data;
            $.each(jQuery.shareMap, function(name, errorName) {
              if (data[name] !== false) {
                that.buttons.push({
                  type : "share_" + name,
                  name : errorName,
                  data : jQuery.formatShareData(data, name),
                  /**
                   * @param {Object} var_args
                   * @return {undefined}
                   */
                  callback : function(var_args) {
                    if (data.success) {
                      data.success({
                        from : "didi_passenger",
                        to : name,
                        status : "success",
                        ret : var_args
                      });
                    }
                  }
                });
              }
            });
          }
          if (data.refresh !== false) {
            that.buttons.push({
              type : "page_refresh",
              name : "\u5237\u65b0"
            });
          }
          options.fn("init_entrance", that);
          options.fn("show_entrance", that);
          if (callback) {
            if ("function" == typeof callback) {
              callback();
            }
          }
        },
        /**
         * @param {string} name
         * @param {boolean} text
         * @return {undefined}
         */
        share : function(name, text) {
          if (name = name.replace(/\-/g, "_"), jQuery.shareMap[name]) {
            var expectedNumberOfNonCommentArgs = jQuery.formatShareData(text || jQuery.data, name);
            options.call("share_" + name, expectedNumberOfNonCommentArgs);
          }
        }
      };
      /** @type {function (Function): ?} */
      event.bridge = options.fn;
      /** @type {function (string): ?} */
      self.version.parse = self.parse;
      $.each({
        /** @type {function (Object, ?): ?} */
        setShare : jQuery.setShare,
        /** @type {function (string, boolean): undefined} */
        share : jQuery.share,
        /** @type {function (string): ?} */
        version : self.version,
        /** @type {function (string, ?): ?} */
        support : self.support,
        /** @type {function (): ?} */
        is : self.is,
        /** @type {function (Object): undefined} */
        open : options.open,
        /** @type {function (Object): undefined} */
        _callback : me.callback,
        /** @type {function (?, (Array|string)): undefined} */
        _trigger : me.trigger,
        /** @type {function (string, Function): ?} */
        on : options.on
      }, function(i, offsetPosition) {
        event.bridge[i] = offsetPosition;
      });
      $.each(self.cfg, function(prop, topic) {
        if (topic.public !== false) {
          /**
           * @param {?} two
           * @param {?} b
           * @return {undefined}
           */
          event.bridge[prop] = function(two, b) {
            event.bridge(prop, two, b);
          };
        }
      });
      window.didi = event;
      if (window.dd) {
        /** @type {function (Function): ?} */
        window.dd.bridge = event.bridge;
      }
    })();
    self.app = self.bridge;
    (function(item) {
      var that = {
        fns : [],
        shareData : false,
        isPre : false,
        isReady : false,
        channelMap : {
          alipay_appmsg : "ALPContact",
          alipay_timeline : "ALPTimeLine",
          sina_weibo : "Weibo",
          weixin_appmsg : "wx",
          qq_appmsg : "qq",
          sms : "sms"
        },
        channelMapRevert : {},
        inited : false,
        /**
         * @return {undefined}
         */
        init : function() {
          if (!that.inited) {
            if (item.is("alipay")) {
              $.each(that.channelMap, function(root, path) {
                that.channelMapRevert[path] = root;
              });
              document.addEventListener("optionMenu", function() {
                that.onOptionMenu();
              });
              /** @type {boolean} */
              that.inited = true;
            }
          }
        },
        /**
         * @return {undefined}
         */
        onOptionMenu : function() {
          if (that.shareData) {
            self.fn(function(next_callback) {
              next_callback.call("startShare", {
                onlySelectChannel : ["Weibo", "ALPContact", "ALPTimeLine"]
              }, function(message) {
                var optgroup = that.channelMapRevert[message.channelName];
                if (optgroup) {
                  self.share(optgroup, that.shareData, function(fmt) {
                    console.log(fmt);
                  });
                }
              });
            });
          }
        },
        /**
         * @return {undefined}
         */
        prepare : function() {
          if (!that.isPre) {
            /**
             * @return {undefined}
             */
            var p = function() {
              /** @type {boolean} */
              that.isReady = true;
              $.each(that.fns, function(dataAndEvents, $) {
                $(window.AlipayJSBridge);
              });
            };
            if ("undefined" != typeof window.AlipayJSBridge) {
              p();
            } else {
              document.addEventListener("AlipayJSBridgeReady", function() {
                p();
              }, false);
            }
            /** @type {boolean} */
            that.isPre = true;
          }
        }
      };
      var self = {
        /**
         * @return {undefined}
         */
        init : function() {
          that.init();
        },
        /**
         * @return {?}
         */
        is : function() {
          return item.is("alipay");
        },
        /**
         * @param {Function} prop
         * @return {?}
         */
        fn : function(prop) {
          return item.is("alipay") ? 0 === arguments.length ? true : (that.isReady ? prop(window.AlipayJSBridge) : (that.fns.push(prop), that.prepare()), void 0) : false;
        },
        /**
         * @param {boolean} callback
         * @return {undefined}
         */
        setShare : function(callback) {
          self.fn(function(editor) {
            if (callback === false) {
              editor.call("setOptionMenu", {
                icon : "menu"
              });
              /** @type {boolean} */
              that.shareData = false;
            } else {
              editor.call("setOptionMenu", {
                title : "\u5206\u4eab",
                icon : "menu"
              });
              /** @type {boolean} */
              that.shareData = callback;
            }
          });
        },
        /**
         * @param {string} name
         * @param {boolean} scope
         * @param {Function} text
         * @return {undefined}
         */
        share : function(name, scope, text) {
          var obj = item.env.getShareCfg(name, scope, {
            icon : "iconUrl",
            link : "url",
            desc : "content"
          });
          /** @type {string} */
          obj.contentType = "url";
          self.fn(function(builder) {
            builder.call("shareToChannel", {
              name : that.channelMap[name],
              param : obj
            }, function(failures) {
              if (text) {
                text(failures);
              }
            });
          });
        }
      };
      /**
       * @param {Function} val
       * @return {?}
       */
      item.alipay = function(val) {
        return self.fn(val);
      };
      $(self.init);
      item.env("alipay", self);
    })(self);
    (function(self) {
      var s = {
        fns : [],
        ding : null,
        isReady : false,
        isInit : false,
        /**
         * @return {undefined}
         */
        init : function() {
          if (!s.isInit) {
            /** @type {boolean} */
            s.isInit = true;
            self._.require("//g.alicdn.com/dingding/open/1.0.1/dingtalk-promise", "__dd", function(data) {
              /** @type {Object} */
              s.ding = data;
              s.getSign(function(options) {
                var map = {
                  agentId : options.agentId,
                  corpId : options.corpId,
                  timeStamp : options.timestamp,
                  nonceStr : options.nonceStr,
                  signature : options.signature,
                  jsApiList : ["biz.alipay.pay", "biz.alipay.auth", "device.geolocation.get"]
                };
                data.config(map);
                data.ready(function() {
                  /** @type {boolean} */
                  s.isReady = true;
                  $.each(s.fns, function(dataAndEvents, getter) {
                    getter(data);
                  });
                });
                data.error(function() {
                  alert(JSON.stringify({
                    ret : arguments
                  }));
                });
              });
            });
          }
        },
        /**
         * @return {?}
         */
        is : function() {
          return self.is("ding");
        },
        /**
         * @param {Function} done
         * @return {undefined}
         */
        getSign : function(done) {
          /** @type {string} */
          var appFrontendUrl = window.location.href.split("#")[0];
          $.ajax({
            type : "post",
            dataType : "json",
            url : "//common.diditaxi.com.cn/general/webEntry/ddtalkJSAPI",
            data : {
              url : appFrontendUrl,
              corpid : "ding8dd9c46ebfe9c277"
            },
            /**
             * @param {Function} data
             * @return {undefined}
             */
            success : function(data) {
              if (0 === 1 * data.errno) {
                done(data.info || (data.data || data));
              }
            }
          });
        },
        /**
         * @param {Function} prop
         * @return {?}
         */
        fn : function(prop) {
          return s.is() ? 0 === arguments.length ? true : (s.isReady ? prop(s.ding, true) : (s.fns.push(prop), s.init()), void 0) : false;
        }
      };
      /**
       * @param {Function} val
       * @return {?}
       */
      self.ding = function(val) {
        return s.fn(val);
      };
      self.env("ding", s);
    })(self);
  })(self);
  (function() {
    var doc = {
      _tipsCont : null,
      _tips : null,
      _isTipShow : false,
      _tipsNs : "default",
      _tipsFn : {},
      /**
       * @param {Object} label
       * @param {string} id
       * @return {undefined}
       */
      tips : function(label, id) {
        var html;
        var content;
        /** @type {number} */
        var wait = 1E4;
        if ("number" == typeof id) {
          /** @type {number} */
          wait = 1E3 * id;
          /** @type {string} */
          id = "default";
        } else {
          id = id || "default";
        }
        if (doc._tipsCont) {
          html = doc._tipsCont;
          /** @type {null} */
          content = doc._tips;
        } else {
          html = $("<div>").addClass("slide-tips-cont");
          content = $("<div>").addClass("slide-tips");
          html.append(content).appendTo("body");
          html.touch(function() {
            $(html).removeClass("open");
          });
          doc._tipsCont = html;
          doc._tips = content;
        }
        if (doc._tipsFn[id]) {
          clearTimeout(doc._tipsFn[id]);
        }
        /** @type {number} */
        doc._tipsFn[id] = setTimeout(function() {
          doc.tips(false, id);
        }, wait);
        if (label === false) {
          if (void 0 === id || id === doc._tipsNs) {
            html.removeClass("open");
          }
        } else {
          setTimeout(function() {
            content.html(label);
            html.addClass("open");
            doc._tipsNs = id;
          });
        }
      }
    };
    /** @type {function (Object, string): undefined} */
    self.tips = doc.tips;
  })();
}(window.dd || {});
