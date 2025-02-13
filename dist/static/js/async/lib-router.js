"use strict";
(self['chunk_remoteDesignSystem'] = self['chunk_remoteDesignSystem'] || []).push([["lib-router"], {
"./node_modules/@remix-run/router/dist/router.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AbortedDeferredError: function() { return AbortedDeferredError; },
  Action: function() { return Action; },
  IDLE_BLOCKER: function() { return IDLE_BLOCKER; },
  IDLE_FETCHER: function() { return IDLE_FETCHER; },
  IDLE_NAVIGATION: function() { return IDLE_NAVIGATION; },
  UNSAFE_DEFERRED_SYMBOL: function() { return UNSAFE_DEFERRED_SYMBOL; },
  UNSAFE_DeferredData: function() { return DeferredData; },
  UNSAFE_ErrorResponseImpl: function() { return ErrorResponseImpl; },
  UNSAFE_convertRouteMatchToUiMatch: function() { return convertRouteMatchToUiMatch; },
  UNSAFE_convertRoutesToDataRoutes: function() { return convertRoutesToDataRoutes; },
  UNSAFE_decodePath: function() { return decodePath; },
  UNSAFE_getResolveToMatches: function() { return getResolveToMatches; },
  UNSAFE_invariant: function() { return invariant; },
  UNSAFE_warning: function() { return warning; },
  createBrowserHistory: function() { return createBrowserHistory; },
  createHashHistory: function() { return createHashHistory; },
  createMemoryHistory: function() { return createMemoryHistory; },
  createPath: function() { return createPath; },
  createRouter: function() { return createRouter; },
  createStaticHandler: function() { return createStaticHandler; },
  data: function() { return data; },
  defer: function() { return defer; },
  generatePath: function() { return generatePath; },
  getStaticContextFromError: function() { return getStaticContextFromError; },
  getToPathname: function() { return getToPathname; },
  isDataWithResponseInit: function() { return isDataWithResponseInit; },
  isDeferredData: function() { return isDeferredData; },
  isRouteErrorResponse: function() { return isRouteErrorResponse; },
  joinPaths: function() { return joinPaths; },
  json: function() { return json; },
  matchPath: function() { return matchPath; },
  matchRoutes: function() { return matchRoutes; },
  normalizePathname: function() { return normalizePathname; },
  parsePath: function() { return parsePath; },
  redirect: function() { return redirect; },
  redirectDocument: function() { return redirectDocument; },
  replace: function() { return replace; },
  resolvePath: function() { return resolvePath; },
  resolveTo: function() { return resolveTo; },
  stripBasename: function() { return stripBasename; }
});
/* ESM import */var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_async_to_generator.js");
/* ESM import */var _swc_helpers_type_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_type_of.js");
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 

function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
////////////////////////////////////////////////////////////////////////////////
//#region Types and Constants
////////////////////////////////////////////////////////////////////////////////
/**
 * Actions represent the type of change to a location value.
 */ var Action;
(function(Action) {
    /**
   * A POP indicates a change to an arbitrary index in the history stack, such
   * as a back or forward navigation. It does not describe the direction of the
   * navigation, only that the current index changed.
   *
   * Note: This is the default action for newly created history objects.
   */ Action["Pop"] = "POP";
    /**
   * A PUSH indicates a new entry being added to the history stack, such as when
   * a link is clicked and a new page loads. When this happens, all subsequent
   * entries in the stack are lost.
   */ Action["Push"] = "PUSH";
    /**
   * A REPLACE indicates the entry at the current index in the history stack
   * being replaced by a new one.
   */ Action["Replace"] = "REPLACE";
})(Action || (Action = {}));
var PopStateEventType = "popstate";
/**
 * Memory history stores the current location in memory. It is designed for use
 * in stateful non-browser environments like tests and React Native.
 */ function createMemoryHistory(options) {
    if (options === void 0) {
        options = {};
    }
    var { initialEntries = [
        "/"
    ], initialIndex, v5Compat = false } = options;
    var entries; // Declare so we can access from createMemoryLocation
    entries = initialEntries.map((entry, index)=>createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : undefined));
    var index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
    var action = Action.Pop;
    var listener = null;
    function clampIndex(n) {
        return Math.min(Math.max(n, 0), entries.length - 1);
    }
    function getCurrentLocation() {
        return entries[index];
    }
    function createMemoryLocation(to, state, key) {
        if (state === void 0) {
            state = null;
        }
        var location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
        return location;
    }
    function createHref(to) {
        return typeof to === "string" ? to : createPath(to);
    }
    var history = {
        get index () {
            return index;
        },
        get action () {
            return action;
        },
        get location () {
            return getCurrentLocation();
        },
        createHref,
        createURL (to) {
            return new URL(createHref(to), "http://localhost");
        },
        encodeLocation (to) {
            var path = typeof to === "string" ? parsePath(to) : to;
            return {
                pathname: path.pathname || "",
                search: path.search || "",
                hash: path.hash || ""
            };
        },
        push (to, state) {
            action = Action.Push;
            var nextLocation = createMemoryLocation(to, state);
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            if (v5Compat && listener) {
                listener({
                    action,
                    location: nextLocation,
                    delta: 1
                });
            }
        },
        replace (to, state) {
            action = Action.Replace;
            var nextLocation = createMemoryLocation(to, state);
            entries[index] = nextLocation;
            if (v5Compat && listener) {
                listener({
                    action,
                    location: nextLocation,
                    delta: 0
                });
            }
        },
        go (delta) {
            action = Action.Pop;
            var nextIndex = clampIndex(index + delta);
            var nextLocation = entries[nextIndex];
            index = nextIndex;
            if (listener) {
                listener({
                    action,
                    location: nextLocation,
                    delta
                });
            }
        },
        listen (fn) {
            listener = fn;
            return ()=>{
                listener = null;
            };
        }
    };
    return history;
}
/**
 * Browser history stores the location in regular URLs. This is the standard for
 * most web apps, but it requires some configuration on the server to ensure you
 * serve the same app at multiple URLs.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
 */ function createBrowserHistory(options) {
    if (options === void 0) {
        options = {};
    }
    function createBrowserLocation(window1, globalHistory) {
        var { pathname, search, hash } = window1.location;
        return createLocation("", {
            pathname,
            search,
            hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createBrowserHref(window1, to) {
        return typeof to === "string" ? to : createPath(to);
    }
    return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
/**
 * Hash history stores the location in window.location.hash. This makes it ideal
 * for situations where you don't want to send the location to the server for
 * some reason, either because you do cannot configure it or the URL space is
 * reserved for something else.
 *
 * @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createhashhistory
 */ function createHashHistory(options) {
    if (options === void 0) {
        options = {};
    }
    function createHashLocation(window1, globalHistory) {
        var { pathname = "/", search = "", hash = "" } = parsePath(window1.location.hash.substr(1));
        // Hash URL should always have a leading / just like window.location.pathname
        // does, so if an app ends up at a route like /#something then we add a
        // leading slash so all of our path-matching behaves the same as if it would
        // in a browser router.  This is particularly important when there exists a
        // root splat route (<Route path="*">) since that matches internally against
        // "/*" and we'd expect /#something to 404 in a hash router app.
        if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
            pathname = "/" + pathname;
        }
        return createLocation("", {
            pathname,
            search,
            hash
        }, // state defaults to `null` because `window.history.state` does
        globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
    }
    function createHashHref(window1, to) {
        var base = window1.document.querySelector("base");
        var href = "";
        if (base && base.getAttribute("href")) {
            var url = window1.location.href;
            var hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
        }
        return href + "#" + (typeof to === "string" ? to : createPath(to));
    }
    function validateHashLocation(location, to) {
        warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
    }
    return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
    if (value === false || value === null || typeof value === "undefined") {
        throw new Error(message);
    }
}
function warning(cond, message) {
    if (!cond) {
        // eslint-disable-next-line no-console
        if (typeof console !== "undefined") console.warn(message);
        try {
            // Welcome to debugging history!
            //
            // This error is thrown as a convenience, so you can more easily
            // find the source for a warning that appears in the console by
            // enabling "pause on exceptions" in your JavaScript debugger.
            throw new Error(message);
        // eslint-disable-next-line no-empty
        } catch (e) {}
    }
}
function createKey() {
    return Math.random().toString(36).substr(2, 8);
}
/**
 * For browser-based histories, we combine the state and key into an object
 */ function getHistoryState(location, index) {
    return {
        usr: location.state,
        key: location.key,
        idx: index
    };
}
/**
 * Creates a Location object with a unique key from the given Path
 */ function createLocation(current, to, state, key) {
    if (state === void 0) {
        state = null;
    }
    var location = _extends({
        pathname: typeof current === "string" ? current : current.pathname,
        search: "",
        hash: ""
    }, typeof to === "string" ? parsePath(to) : to, {
        state,
        // TODO: This could be cleaned up.  push/replace should probably just take
        // full Locations now and avoid the need to run through this flow at all
        // But that's a pretty big refactor to the current test suite so going to
        // keep as is for the time being and just let any incoming keys take precedence
        key: to && to.key || key || createKey()
    });
    return location;
}
/**
 * Creates a string URL path from the given pathname, search, and hash components.
 */ function createPath(_ref) {
    var { pathname = "/", search = "", hash = "" } = _ref;
    if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
    if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
    return pathname;
}
/**
 * Parses a string URL path into its separate pathname, search, and hash components.
 */ function parsePath(path) {
    var parsedPath = {};
    if (path) {
        var hashIndex = path.indexOf("#");
        if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
        }
        var searchIndex = path.indexOf("?");
        if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
        }
        if (path) {
            parsedPath.pathname = path;
        }
    }
    return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
    if (options === void 0) {
        options = {};
    }
    var { window: window1 = document.defaultView, v5Compat = false } = options;
    var globalHistory = window1.history;
    var action = Action.Pop;
    var listener = null;
    var index = getIndex();
    // Index should only be null when we initialize. If not, it's because the
    // user called history.pushState or history.replaceState directly, in which
    // case we should log a warning as it will result in bugs.
    if (index == null) {
        index = 0;
        globalHistory.replaceState(_extends({}, globalHistory.state, {
            idx: index
        }), "");
    }
    function getIndex() {
        var state = globalHistory.state || {
            idx: null
        };
        return state.idx;
    }
    function handlePop() {
        action = Action.Pop;
        var nextIndex = getIndex();
        var delta = nextIndex == null ? null : nextIndex - index;
        index = nextIndex;
        if (listener) {
            listener({
                action,
                location: history.location,
                delta
            });
        }
    }
    function push(to, state) {
        action = Action.Push;
        var location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex() + 1;
        var historyState = getHistoryState(location, index);
        var url = history.createHref(location);
        // try...catch because iOS limits us to 100 pushState calls :/
        try {
            globalHistory.pushState(historyState, "", url);
        } catch (error) {
            // If the exception is because `state` can't be serialized, let that throw
            // outwards just like a replace call would so the dev knows the cause
            // https://html.spec.whatwg.org/multipage/nav-history-apis.html#shared-history-push/replace-state-steps
            // https://html.spec.whatwg.org/multipage/structured-data.html#structuredserializeinternal
            if (error instanceof DOMException && error.name === "DataCloneError") {
                throw error;
            }
            // They are going to lose state here, but there is no real
            // way to warn them about it since the page will refresh...
            window1.location.assign(url);
        }
        if (v5Compat && listener) {
            listener({
                action,
                location: history.location,
                delta: 1
            });
        }
    }
    function replace(to, state) {
        action = Action.Replace;
        var location = createLocation(history.location, to, state);
        if (validateLocation) validateLocation(location, to);
        index = getIndex();
        var historyState = getHistoryState(location, index);
        var url = history.createHref(location);
        globalHistory.replaceState(historyState, "", url);
        if (v5Compat && listener) {
            listener({
                action,
                location: history.location,
                delta: 0
            });
        }
    }
    function createURL(to) {
        // window.location.origin is "null" (the literal string value) in Firefox
        // under certain conditions, notably when serving from a local HTML file
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=878297
        var base = window1.location.origin !== "null" ? window1.location.origin : window1.location.href;
        var href = typeof to === "string" ? to : createPath(to);
        // Treating this as a full URL will strip any trailing spaces so we need to
        // pre-encode them since they might be part of a matching splat param from
        // an ancestor route
        href = href.replace(/ $/, "%20");
        invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
        return new URL(href, base);
    }
    var history = {
        get action () {
            return action;
        },
        get location () {
            return getLocation(window1, globalHistory);
        },
        listen (fn) {
            if (listener) {
                throw new Error("A history only accepts one active listener");
            }
            window1.addEventListener(PopStateEventType, handlePop);
            listener = fn;
            return ()=>{
                window1.removeEventListener(PopStateEventType, handlePop);
                listener = null;
            };
        },
        createHref (to) {
            return createHref(window1, to);
        },
        createURL,
        encodeLocation (to) {
            // Encode a Location the same way window.location would
            var url = createURL(to);
            return {
                pathname: url.pathname,
                search: url.search,
                hash: url.hash
            };
        },
        push,
        replace,
        go (n) {
            return globalHistory.go(n);
        }
    };
    return history;
}
//#endregion
var ResultType;
(function(ResultType) {
    ResultType["data"] = "data";
    ResultType["deferred"] = "deferred";
    ResultType["redirect"] = "redirect";
    ResultType["error"] = "error";
})(ResultType || (ResultType = {}));
var immutableRouteKeys = new Set([
    "lazy",
    "caseSensitive",
    "path",
    "id",
    "index",
    "children"
]);
function isIndexRoute(route) {
    return route.index === true;
}
// Walk the route tree generating unique IDs where necessary, so we are working
// solely with AgnosticDataRouteObject's within the Router
function convertRoutesToDataRoutes(routes, mapRouteProperties, parentPath, manifest) {
    if (parentPath === void 0) {
        parentPath = [];
    }
    if (manifest === void 0) {
        manifest = {};
    }
    return routes.map((route, index)=>{
        var treePath = [
            ...parentPath,
            String(index)
        ];
        var id = typeof route.id === "string" ? route.id : treePath.join("-");
        invariant(route.index !== true || !route.children, "Cannot specify children on an index route");
        invariant(!manifest[id], "Found a route id collision on id \"" + id + "\".  Route " + "id's must be globally unique within Data Router usages");
        if (isIndexRoute(route)) {
            var indexRoute = _extends({}, route, mapRouteProperties(route), {
                id
            });
            manifest[id] = indexRoute;
            return indexRoute;
        } else {
            var pathOrLayoutRoute = _extends({}, route, mapRouteProperties(route), {
                id,
                children: undefined
            });
            manifest[id] = pathOrLayoutRoute;
            if (route.children) {
                pathOrLayoutRoute.children = convertRoutesToDataRoutes(route.children, mapRouteProperties, treePath, manifest);
            }
            return pathOrLayoutRoute;
        }
    });
}
/**
 * Matches the given routes to a location and returns the match data.
 *
 * @see https://reactrouter.com/utils/match-routes
 */ function matchRoutes(routes, locationArg, basename) {
    if (basename === void 0) {
        basename = "/";
    }
    return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
    var location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    var pathname = stripBasename(location.pathname || "/", basename);
    if (pathname == null) {
        return null;
    }
    var branches = flattenRoutes(routes);
    rankRouteBranches(branches);
    var matches = null;
    for(var i = 0; matches == null && i < branches.length; ++i){
        // Incoming pathnames are generally encoded from either window.location
        // or from router.navigate, but we want to match against the unencoded
        // paths in the route definitions.  Memory router locations won't be
        // encoded here but there also shouldn't be anything to decode so this
        // should be a safe operation.  This avoids needing matchRoutes to be
        // history-aware.
        var decoded = decodePath(pathname);
        matches = matchRouteBranch(branches[i], decoded, allowPartial);
    }
    return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
    var { route, pathname, params } = match;
    return {
        id: route.id,
        pathname,
        params,
        data: loaderData[route.id],
        handle: route.handle
    };
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
    if (branches === void 0) {
        branches = [];
    }
    if (parentsMeta === void 0) {
        parentsMeta = [];
    }
    if (parentPath === void 0) {
        parentPath = "";
    }
    var flattenRoute = (route, index, relativePath)=>{
        var meta = {
            relativePath: relativePath === undefined ? route.path || "" : relativePath,
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route
        };
        if (meta.relativePath.startsWith("/")) {
            invariant(meta.relativePath.startsWith(parentPath), "Absolute route path \"" + meta.relativePath + "\" nested under path " + ("\"" + parentPath + "\" is not valid. An absolute child route path ") + "must start with the combined path of all its parent routes.");
            meta.relativePath = meta.relativePath.slice(parentPath.length);
        }
        var path = joinPaths([
            parentPath,
            meta.relativePath
        ]);
        var routesMeta = parentsMeta.concat(meta);
        // Add the children before adding this route to the array, so we traverse the
        // route tree depth-first and child routes appear before their parents in
        // the "flattened" version.
        if (route.children && route.children.length > 0) {
            invariant(// Our types know better, but runtime JS may not!
            // @ts-expect-error
            route.index !== true, "Index routes must not have child routes. Please remove " + ("all child routes from route path \"" + path + "\"."));
            flattenRoutes(route.children, branches, routesMeta, path);
        }
        // Routes without a path shouldn't ever match by themselves unless they are
        // index routes, so don't add them to the list of possible branches.
        if (route.path == null && !route.index) {
            return;
        }
        branches.push({
            path,
            score: computeScore(path, route.index),
            routesMeta
        });
    };
    routes.forEach((route, index)=>{
        var _route$path;
        // coarse-grain check for optional params
        if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
            flattenRoute(route, index);
        } else {
            for (var exploded of explodeOptionalSegments(route.path)){
                flattenRoute(route, index, exploded);
            }
        }
    });
    return branches;
}
/**
 * Computes all combinations of optional path segments for a given path,
 * excluding combinations that are ambiguous and of lower priority.
 *
 * For example, `/one/:two?/three/:four?/:five?` explodes to:
 * - `/one/three`
 * - `/one/:two/three`
 * - `/one/three/:four`
 * - `/one/three/:five`
 * - `/one/:two/three/:four`
 * - `/one/:two/three/:five`
 * - `/one/three/:four/:five`
 * - `/one/:two/three/:four/:five`
 */ function explodeOptionalSegments(path) {
    var segments = path.split("/");
    if (segments.length === 0) return [];
    var [first, ...rest] = segments;
    // Optional path segments are denoted by a trailing `?`
    var isOptional = first.endsWith("?");
    // Compute the corresponding required segment: `foo?` -> `foo`
    var required = first.replace(/\?$/, "");
    if (rest.length === 0) {
        // Intepret empty string as omitting an optional segment
        // `["one", "", "three"]` corresponds to omitting `:two` from `/one/:two?/three` -> `/one/three`
        return isOptional ? [
            required,
            ""
        ] : [
            required
        ];
    }
    var restExploded = explodeOptionalSegments(rest.join("/"));
    var result = [];
    // All child paths with the prefix.  Do this for all children before the
    // optional version for all children, so we get consistent ordering where the
    // parent optional aspect is preferred as required.  Otherwise, we can get
    // child sections interspersed where deeper optional segments are higher than
    // parent optional segments, where for example, /:two would explode _earlier_
    // then /:one.  By always including the parent as required _for all children_
    // first, we avoid this issue
    result.push(...restExploded.map((subpath)=>subpath === "" ? required : [
            required,
            subpath
        ].join("/")));
    // Then, if this is an optional value, add all child versions without
    if (isOptional) {
        result.push(...restExploded);
    }
    // for absolute paths, ensure `/` instead of empty segment
    return result.map((exploded)=>path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
    branches.sort((a, b)=>a.score !== b.score ? b.score - a.score // Higher score first
         : compareIndexes(a.routesMeta.map((meta)=>meta.childrenIndex), b.routesMeta.map((meta)=>meta.childrenIndex)));
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s)=>s === "*";
function computeScore(path, index) {
    var segments = path.split("/");
    var initialScore = segments.length;
    if (segments.some(isSplat)) {
        initialScore += splatPenalty;
    }
    if (index) {
        initialScore += indexRouteValue;
    }
    return segments.filter((s)=>!isSplat(s)).reduce((score, segment)=>score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b) {
    var siblings = a.length === b.length && a.slice(0, -1).every((n, i)=>n === b[i]);
    return siblings ? // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1] : // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0;
}
function matchRouteBranch(branch, pathname, allowPartial) {
    if (allowPartial === void 0) {
        allowPartial = false;
    }
    var { routesMeta } = branch;
    var matchedParams = {};
    var matchedPathname = "/";
    var matches = [];
    for(var i = 0; i < routesMeta.length; ++i){
        var meta = routesMeta[i];
        var end = i === routesMeta.length - 1;
        var remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
        var match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end
        }, remainingPathname);
        var route = meta.route;
        if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
            match = matchPath({
                path: meta.relativePath,
                caseSensitive: meta.caseSensitive,
                end: false
            }, remainingPathname);
        }
        if (!match) {
            return null;
        }
        Object.assign(matchedParams, match.params);
        matches.push({
            // TODO: Can this as be avoided?
            params: matchedParams,
            pathname: joinPaths([
                matchedPathname,
                match.pathname
            ]),
            pathnameBase: normalizePathname(joinPaths([
                matchedPathname,
                match.pathnameBase
            ])),
            route
        });
        if (match.pathnameBase !== "/") {
            matchedPathname = joinPaths([
                matchedPathname,
                match.pathnameBase
            ]);
        }
    }
    return matches;
}
/**
 * Returns a path with params interpolated.
 *
 * @see https://reactrouter.com/utils/generate-path
 */ function generatePath(originalPath, params) {
    if (params === void 0) {
        params = {};
    }
    var path = originalPath;
    if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
        warning(false, "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
        path = path.replace(/\*$/, "/*");
    }
    // ensure `/` is added at the beginning if the path is absolute
    var prefix = path.startsWith("/") ? "/" : "";
    var stringify = (p)=>p == null ? "" : typeof p === "string" ? p : String(p);
    var segments = path.split(/\/+/).map((segment, index, array)=>{
        var isLastSegment = index === array.length - 1;
        // only apply the splat if it's the last segment
        if (isLastSegment && segment === "*") {
            var star = "*";
            // Apply the splat
            return stringify(params[star]);
        }
        var keyMatch = segment.match(/^:([\w-]+)(\??)$/);
        if (keyMatch) {
            var [, key, optional] = keyMatch;
            var param = params[key];
            invariant(optional === "?" || param != null, "Missing \":" + key + "\" param");
            return stringify(param);
        }
        // Remove any optional markers from optional static segments
        return segment.replace(/\?$/g, "");
    })// Remove empty segments
    .filter((segment)=>!!segment);
    return prefix + segments.join("/");
}
/**
 * Performs pattern matching on a URL pathname and returns information about
 * the match.
 *
 * @see https://reactrouter.com/utils/match-path
 */ function matchPath(pattern, pathname) {
    if (typeof pattern === "string") {
        pattern = {
            path: pattern,
            caseSensitive: false,
            end: true
        };
    }
    var [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
    var match = pathname.match(matcher);
    if (!match) return null;
    var matchedPathname = match[0];
    var pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
    var captureGroups = match.slice(1);
    var params = compiledParams.reduce((memo, _ref, index)=>{
        var { paramName, isOptional } = _ref;
        // We need to compute the pathnameBase here using the raw splat value
        // instead of using params["*"] later because it will be decoded then
        if (paramName === "*") {
            var splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
        }
        var value = captureGroups[index];
        if (isOptional && !value) {
            memo[paramName] = undefined;
        } else {
            memo[paramName] = (value || "").replace(/%2F/g, "/");
        }
        return memo;
    }, {});
    return {
        params,
        pathname: matchedPathname,
        pathnameBase,
        pattern
    };
}
function compilePath(path, caseSensitive, end) {
    if (caseSensitive === void 0) {
        caseSensitive = false;
    }
    if (end === void 0) {
        end = true;
    }
    warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), "Route path \"" + path + "\" will be treated as if it were " + ("\"" + path.replace(/\*$/, "/*") + "\" because the `*` character must ") + "always follow a `/` in the pattern. To get rid of this warning, " + ("please change the route path to \"" + path.replace(/\*$/, "/*") + "\"."));
    var params = [];
    var regexpSource = "^" + path.replace(/\/*\*?$/, "") // Ignore trailing / and /*, we'll handle it below
    .replace(/^\/*/, "/") // Make sure it has a leading /
    .replace(/[\\.*+^${}|()[\]]/g, "\\$&") // Escape special regex chars
    .replace(/\/:([\w-]+)(\?)?/g, (_, paramName, isOptional)=>{
        params.push({
            paramName,
            isOptional: isOptional != null
        });
        return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    });
    if (path.endsWith("*")) {
        params.push({
            paramName: "*"
        });
        regexpSource += path === "*" || path === "/*" ? "(.*)$" // Already matched the initial /, just match the rest
         : "(?:\\/(.+)|\\/*)$"; // Don't include the / in params["*"]
    } else if (end) {
        // When matching to the end, ignore trailing slashes
        regexpSource += "\\/*$";
    } else if (path !== "" && path !== "/") {
        // If our path is non-empty and contains anything beyond an initial slash,
        // then we have _some_ form of path in our regex, so we should expect to
        // match only if we find the end of this path segment.  Look for an optional
        // non-captured trailing slash (to match a portion of the URL) or the end
        // of the path (if we've matched to the end).  We used to do this with a
        // word boundary but that gives false positives on routes like
        // /user-preferences since `-` counts as a word boundary.
        regexpSource += "(?:(?=\\/|$))";
    } else ;
    var matcher = new RegExp(regexpSource, caseSensitive ? undefined : "i");
    return [
        matcher,
        params
    ];
}
function decodePath(value) {
    try {
        return value.split("/").map((v)=>decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
    } catch (error) {
        warning(false, "The URL path \"" + value + "\" could not be decoded because it is is a " + "malformed URL segment. This is probably due to a bad percent " + ("encoding (" + error + ")."));
        return value;
    }
}
/**
 * @private
 */ function stripBasename(pathname, basename) {
    if (basename === "/") return pathname;
    if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
        return null;
    }
    // We want to leave trailing slash behavior in the user's control, so if they
    // specify a basename with a trailing slash, we should support it
    var startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
    var nextChar = pathname.charAt(startIndex);
    if (nextChar && nextChar !== "/") {
        // pathname does not start with basename/
        return null;
    }
    return pathname.slice(startIndex) || "/";
}
/**
 * Returns a resolved path object relative to the given pathname.
 *
 * @see https://reactrouter.com/utils/resolve-path
 */ function resolvePath(to, fromPathname) {
    if (fromPathname === void 0) {
        fromPathname = "/";
    }
    var { pathname: toPathname, search = "", hash = "" } = typeof to === "string" ? parsePath(to) : to;
    var pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
    return {
        pathname,
        search: normalizeSearch(search),
        hash: normalizeHash(hash)
    };
}
function resolvePathname(relativePath, fromPathname) {
    var segments = fromPathname.replace(/\/+$/, "").split("/");
    var relativeSegments = relativePath.split("/");
    relativeSegments.forEach((segment)=>{
        if (segment === "..") {
            // Keep the root "" segment so the pathname starts at /
            if (segments.length > 1) segments.pop();
        } else if (segment !== ".") {
            segments.push(segment);
        }
    });
    return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
    return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
 * @private
 *
 * When processing relative navigation we want to ignore ancestor routes that
 * do not contribute to the path, such that index/pathless layout routes don't
 * interfere.
 *
 * For example, when moving a route element into an index route and/or a
 * pathless layout route, relative link behavior contained within should stay
 * the same.  Both of the following examples should link back to the root:
 *
 *   <Route path="/">
 *     <Route path="accounts" element={<Link to=".."}>
 *   </Route>
 *
 *   <Route path="/">
 *     <Route path="accounts">
 *       <Route element={<AccountsLayout />}>       // <-- Does not contribute
 *         <Route index element={<Link to=".."} />  // <-- Does not contribute
 *       </Route
 *     </Route>
 *   </Route>
 */ function getPathContributingMatches(matches) {
    return matches.filter((match, index)=>index === 0 || match.route.path && match.route.path.length > 0);
}
// Return the array of pathnames for the current route matches - used to
// generate the routePathnames input for resolveTo()
function getResolveToMatches(matches, v7_relativeSplatPath) {
    var pathMatches = getPathContributingMatches(matches);
    // When v7_relativeSplatPath is enabled, use the full pathname for the leaf
    // match so we include splat values for "." links.  See:
    // https://github.com/remix-run/react-router/issues/11052#issuecomment-1836589329
    if (v7_relativeSplatPath) {
        return pathMatches.map((match, idx)=>idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase);
    }
    return pathMatches.map((match)=>match.pathnameBase);
}
/**
 * @private
 */ function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
    if (isPathRelative === void 0) {
        isPathRelative = false;
    }
    var to;
    if (typeof toArg === "string") {
        to = parsePath(toArg);
    } else {
        to = _extends({}, toArg);
        invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
        invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
        invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
    }
    var isEmptyPath = toArg === "" || to.pathname === "";
    var toPathname = isEmptyPath ? "/" : to.pathname;
    var from;
    // Routing is relative to the current pathname if explicitly requested.
    //
    // If a pathname is explicitly provided in `to`, it should be relative to the
    // route context. This is explained in `Note on `<Link to>` values` in our
    // migration guide from v5 as a means of disambiguation between `to` values
    // that begin with `/` and those that do not. However, this is problematic for
    // `to` values that do not provide a pathname. `to` can simply be a search or
    // hash string, in which case we should assume that the navigation is relative
    // to the current location's pathname and *not* the route pathname.
    if (toPathname == null) {
        from = locationPathname;
    } else {
        var routePathnameIndex = routePathnames.length - 1;
        // With relative="route" (the default), each leading .. segment means
        // "go up one route" instead of "go up one URL segment".  This is a key
        // difference from how <a href> works and a major reason we call this a
        // "to" value instead of a "href".
        if (!isPathRelative && toPathname.startsWith("..")) {
            var toSegments = toPathname.split("/");
            while(toSegments[0] === ".."){
                toSegments.shift();
                routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
        }
        from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
    }
    var path = resolvePath(to, from);
    // Ensure the pathname has a trailing slash if the original "to" had one
    var hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
    // Or if this was a link to the current path which has a trailing slash
    var hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
    if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
        path.pathname += "/";
    }
    return path;
}
/**
 * @private
 */ function getToPathname(to) {
    // Empty strings should be treated the same as / paths
    return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? parsePath(to).pathname : to.pathname;
}
/**
 * @private
 */ var joinPaths = (paths)=>paths.join("/").replace(/\/\/+/g, "/");
/**
 * @private
 */ var normalizePathname = (pathname)=>pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
/**
 * @private
 */ var normalizeSearch = (search)=>!search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
/**
 * @private
 */ var normalizeHash = (hash)=>!hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
/**
 * This is a shortcut for creating `application/json` responses. Converts `data`
 * to JSON and sets the `Content-Type` header.
 */ var json = function json(data, init) {
    if (init === void 0) {
        init = {};
    }
    var responseInit = typeof init === "number" ? {
        status: init
    } : init;
    var headers = new Headers(responseInit.headers);
    if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json; charset=utf-8");
    }
    return new Response(JSON.stringify(data), _extends({}, responseInit, {
        headers
    }));
};
class DataWithResponseInit {
    constructor(data, init){
        this.type = "DataWithResponseInit";
        this.data = data;
        this.init = init || null;
    }
}
/**
 * Create "responses" that contain `status`/`headers` without forcing
 * serialization into an actual `Response` - used by Remix single fetch
 */ function data(data, init) {
    return new DataWithResponseInit(data, typeof init === "number" ? {
        status: init
    } : init);
}
class AbortedDeferredError extends Error {
}
class DeferredData {
    trackPromise(key, value) {
        if (!(value instanceof Promise)) {
            return value;
        }
        this.deferredKeys.push(key);
        this.pendingKeysSet.add(key);
        // We store a little wrapper promise that will be extended with
        // _data/_error props upon resolve/reject
        var promise = Promise.race([
            value,
            this.abortPromise
        ]).then((data)=>this.onSettle(promise, key, undefined, data), (error)=>this.onSettle(promise, key, error));
        // Register rejection listeners to avoid uncaught promise rejections on
        // errors or aborted deferred values
        promise.catch(()=>{});
        Object.defineProperty(promise, "_tracked", {
            get: ()=>true
        });
        return promise;
    }
    onSettle(promise, key, error, data) {
        if (this.controller.signal.aborted && error instanceof AbortedDeferredError) {
            this.unlistenAbortSignal();
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            return Promise.reject(error);
        }
        this.pendingKeysSet.delete(key);
        if (this.done) {
            // Nothing left to abort!
            this.unlistenAbortSignal();
        }
        // If the promise was resolved/rejected with undefined, we'll throw an error as you
        // should always resolve with a value or null
        if (error === undefined && data === undefined) {
            var undefinedError = new Error("Deferred data for key \"" + key + "\" resolved/rejected with `undefined`, " + "you must resolve/reject with a value or `null`.");
            Object.defineProperty(promise, "_error", {
                get: ()=>undefinedError
            });
            this.emit(false, key);
            return Promise.reject(undefinedError);
        }
        if (data === undefined) {
            Object.defineProperty(promise, "_error", {
                get: ()=>error
            });
            this.emit(false, key);
            return Promise.reject(error);
        }
        Object.defineProperty(promise, "_data", {
            get: ()=>data
        });
        this.emit(false, key);
        return data;
    }
    emit(aborted, settledKey) {
        this.subscribers.forEach((subscriber)=>subscriber(aborted, settledKey));
    }
    subscribe(fn) {
        this.subscribers.add(fn);
        return ()=>this.subscribers.delete(fn);
    }
    cancel() {
        this.controller.abort();
        this.pendingKeysSet.forEach((v, k)=>this.pendingKeysSet.delete(k));
        this.emit(true);
    }
    resolveData(signal) {
        var _this = this;
        return (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*() {
            var aborted = false;
            if (!_this.done) {
                var onAbort = ()=>_this.cancel();
                signal.addEventListener("abort", onAbort);
                aborted = yield new Promise((resolve)=>{
                    _this.subscribe((aborted)=>{
                        signal.removeEventListener("abort", onAbort);
                        if (aborted || _this.done) {
                            resolve(aborted);
                        }
                    });
                });
            }
            return aborted;
        })();
    }
    get done() {
        return this.pendingKeysSet.size === 0;
    }
    get unwrappedData() {
        invariant(this.data !== null && this.done, "Can only unwrap data on initialized and settled deferreds");
        return Object.entries(this.data).reduce((acc, _ref3)=>{
            var [key, value] = _ref3;
            return Object.assign(acc, {
                [key]: unwrapTrackedPromise(value)
            });
        }, {});
    }
    get pendingKeys() {
        return Array.from(this.pendingKeysSet);
    }
    constructor(data, responseInit){
        this.pendingKeysSet = new Set();
        this.subscribers = new Set();
        this.deferredKeys = [];
        invariant(data && typeof data === "object" && !Array.isArray(data), "defer() only accepts plain objects");
        // Set up an AbortController + Promise we can race against to exit early
        // cancellation
        var reject;
        this.abortPromise = new Promise((_, r)=>reject = r);
        this.controller = new AbortController();
        var onAbort = ()=>reject(new AbortedDeferredError("Deferred data aborted"));
        this.unlistenAbortSignal = ()=>this.controller.signal.removeEventListener("abort", onAbort);
        this.controller.signal.addEventListener("abort", onAbort);
        this.data = Object.entries(data).reduce((acc, _ref2)=>{
            var [key, value] = _ref2;
            return Object.assign(acc, {
                [key]: this.trackPromise(key, value)
            });
        }, {});
        if (this.done) {
            // All incoming values were resolved
            this.unlistenAbortSignal();
        }
        this.init = responseInit;
    }
}
function isTrackedPromise(value) {
    return value instanceof Promise && value._tracked === true;
}
function unwrapTrackedPromise(value) {
    if (!isTrackedPromise(value)) {
        return value;
    }
    if (value._error) {
        throw value._error;
    }
    return value._data;
}
var defer = function defer(data, init) {
    if (init === void 0) {
        init = {};
    }
    var responseInit = typeof init === "number" ? {
        status: init
    } : init;
    return new DeferredData(data, responseInit);
};
/**
 * A redirect response. Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ var redirect = function redirect(url, init) {
    if (init === void 0) {
        init = 302;
    }
    var responseInit = init;
    if (typeof responseInit === "number") {
        responseInit = {
            status: responseInit
        };
    } else if (typeof responseInit.status === "undefined") {
        responseInit.status = 302;
    }
    var headers = new Headers(responseInit.headers);
    headers.set("Location", url);
    return new Response(null, _extends({}, responseInit, {
        headers
    }));
};
/**
 * A redirect response that will force a document reload to the new location.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ var redirectDocument = (url, init)=>{
    var response = redirect(url, init);
    response.headers.set("X-Remix-Reload-Document", "true");
    return response;
};
/**
 * A redirect response that will perform a `history.replaceState` instead of a
 * `history.pushState` for client-side navigation redirects.
 * Sets the status code and the `Location` header.
 * Defaults to "302 Found".
 */ var replace = (url, init)=>{
    var response = redirect(url, init);
    response.headers.set("X-Remix-Replace", "true");
    return response;
};
/**
 * @private
 * Utility class we use to hold auto-unwrapped 4xx/5xx Response bodies
 *
 * We don't export the class for public use since it's an implementation
 * detail, but we export the interface above so folks can build their own
 * abstractions around instances via isRouteErrorResponse()
 */ class ErrorResponseImpl {
    constructor(status, statusText, data, internal){
        if (internal === void 0) {
            internal = false;
        }
        this.status = status;
        this.statusText = statusText || "";
        this.internal = internal;
        if (data instanceof Error) {
            this.data = data.toString();
            this.error = data;
        } else {
            this.data = data;
        }
    }
}
/**
 * Check if the given error is an ErrorResponse generated from a 4xx/5xx
 * Response thrown from an action/loader
 */ function isRouteErrorResponse(error) {
    return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
var validMutationMethodsArr = [
    "post",
    "put",
    "patch",
    "delete"
];
var validMutationMethods = new Set(validMutationMethodsArr);
var validRequestMethodsArr = [
    "get",
    ...validMutationMethodsArr
];
var validRequestMethods = new Set(validRequestMethodsArr);
var redirectStatusCodes = new Set([
    301,
    302,
    303,
    307,
    308
]);
var redirectPreserveMethodStatusCodes = new Set([
    307,
    308
]);
var IDLE_NAVIGATION = {
    state: "idle",
    location: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
var IDLE_FETCHER = {
    state: "idle",
    data: undefined,
    formMethod: undefined,
    formAction: undefined,
    formEncType: undefined,
    formData: undefined,
    json: undefined,
    text: undefined
};
var IDLE_BLOCKER = {
    state: "unblocked",
    proceed: undefined,
    reset: undefined,
    location: undefined
};
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var defaultMapRouteProperties = (route)=>({
        hasErrorBoundary: Boolean(route.hasErrorBoundary)
    });
var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createRouter
////////////////////////////////////////////////////////////////////////////////
/**
 * Create a router and listen to history POP navigations
 */ function createRouter(init) {
    var routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : undefined;
    var isBrowser = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
    var isServer = !isBrowser;
    invariant(init.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    var mapRouteProperties;
    if (init.mapRouteProperties) {
        mapRouteProperties = init.mapRouteProperties;
    } else if (init.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        var detectErrorBoundary = init.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else {
        mapRouteProperties = defaultMapRouteProperties;
    }
    // Routes keyed by ID
    var manifest = {};
    // Routes in tree format for matching
    var dataRoutes = convertRoutesToDataRoutes(init.routes, mapRouteProperties, undefined, manifest);
    var inFlightDataRoutes;
    var basename = init.basename || "/";
    var dataStrategyImpl = init.dataStrategy || defaultDataStrategy;
    var patchRoutesOnNavigationImpl = init.patchRoutesOnNavigation;
    // Config driven behavior flags
    var future = _extends({
        v7_fetcherPersist: false,
        v7_normalizeFormMethod: false,
        v7_partialHydration: false,
        v7_prependBasename: false,
        v7_relativeSplatPath: false,
        v7_skipActionErrorRevalidation: false
    }, init.future);
    // Cleanup function for history
    var unlistenHistory = null;
    // Externally-provided functions to call on all state changes
    var subscribers = new Set();
    // Externally-provided object to hold scroll restoration locations during routing
    var savedScrollPositions = null;
    // Externally-provided function to get scroll restoration keys
    var getScrollRestorationKey = null;
    // Externally-provided function to get current scroll position
    var getScrollPosition = null;
    // One-time flag to control the initial hydration scroll restoration.  Because
    // we don't get the saved positions from <ScrollRestoration /> until _after_
    // the initial render, we need to manually trigger a separate updateState to
    // send along the restoreScrollPosition
    // Set to true if we have `hydrationData` since we assume we were SSR'd and that
    // SSR did the initial scroll restoration.
    var initialScrollRestored = init.hydrationData != null;
    var initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
    var initialErrors = null;
    if (initialMatches == null && !patchRoutesOnNavigationImpl) {
        // If we do not match a user-provided-route, fall back to the root
        // to allow the error boundary to take over
        var error = getInternalRouterError(404, {
            pathname: init.history.location.pathname
        });
        var { matches, route } = getShortCircuitMatches(dataRoutes);
        initialMatches = matches;
        initialErrors = {
            [route.id]: error
        };
    }
    // In SPA apps, if the user provided a patchRoutesOnNavigation implementation and
    // our initial match is a splat route, clear them out so we run through lazy
    // discovery on hydration in case there's a more accurate lazy route match.
    // In SSR apps (with `hydrationData`), we expect that the server will send
    // up the proper matched routes so we don't want to run lazy discovery on
    // initial hydration and want to hydrate into the splat route.
    if (initialMatches && !init.hydrationData) {
        var fogOfWar = checkFogOfWar(initialMatches, dataRoutes, init.history.location.pathname);
        if (fogOfWar.active) {
            initialMatches = null;
        }
    }
    var initialized;
    if (!initialMatches) {
        initialized = false;
        initialMatches = [];
        // If partial hydration and fog of war is enabled, we will be running
        // `patchRoutesOnNavigation` during hydration so include any partial matches as
        // the initial matches so we can properly render `HydrateFallback`'s
        if (future.v7_partialHydration) {
            var fogOfWar1 = checkFogOfWar(null, dataRoutes, init.history.location.pathname);
            if (fogOfWar1.active && fogOfWar1.matches) {
                initialMatches = fogOfWar1.matches;
            }
        }
    } else if (initialMatches.some((m)=>m.route.lazy)) {
        // All initialMatches need to be loaded before we're ready.  If we have lazy
        // functions around still then we'll need to run them in initialize()
        initialized = false;
    } else if (!initialMatches.some((m)=>m.route.loader)) {
        // If we've got no loaders to run, then we're good to go
        initialized = true;
    } else if (future.v7_partialHydration) {
        // If partial hydration is enabled, we're initialized so long as we were
        // provided with hydrationData for every route with a loader, and no loaders
        // were marked for explicit hydration
        var loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
        var errors = init.hydrationData ? init.hydrationData.errors : null;
        // If errors exist, don't consider routes below the boundary
        if (errors) {
            var idx = initialMatches.findIndex((m)=>errors[m.route.id] !== undefined);
            initialized = initialMatches.slice(0, idx + 1).every((m)=>!shouldLoadRouteOnHydration(m.route, loaderData, errors));
        } else {
            initialized = initialMatches.every((m)=>!shouldLoadRouteOnHydration(m.route, loaderData, errors));
        }
    } else {
        // Without partial hydration - we're initialized if we were provided any
        // hydrationData - which is expected to be complete
        initialized = init.hydrationData != null;
    }
    var router;
    var state = {
        historyAction: init.history.action,
        location: init.history.location,
        matches: initialMatches,
        initialized,
        navigation: IDLE_NAVIGATION,
        // Don't restore on initial updateState() if we were SSR'd
        restoreScrollPosition: init.hydrationData != null ? false : null,
        preventScrollReset: false,
        revalidation: "idle",
        loaderData: init.hydrationData && init.hydrationData.loaderData || {},
        actionData: init.hydrationData && init.hydrationData.actionData || null,
        errors: init.hydrationData && init.hydrationData.errors || initialErrors,
        fetchers: new Map(),
        blockers: new Map()
    };
    // -- Stateful internal variables to manage navigations --
    // Current navigation in progress (to be committed in completeNavigation)
    var pendingAction = Action.Pop;
    // Should the current navigation prevent the scroll reset if scroll cannot
    // be restored?
    var pendingPreventScrollReset = false;
    // AbortController for the active navigation
    var pendingNavigationController;
    // Should the current navigation enable document.startViewTransition?
    var pendingViewTransitionEnabled = false;
    // Store applied view transitions so we can apply them on POP
    var appliedViewTransitions = new Map();
    // Cleanup function for persisting applied transitions to sessionStorage
    var removePageHideEventListener = null;
    // We use this to avoid touching history in completeNavigation if a
    // revalidation is entirely uninterrupted
    var isUninterruptedRevalidation = false;
    // Use this internal flag to force revalidation of all loaders:
    //  - submissions (completed or interrupted)
    //  - useRevalidator()
    //  - X-Remix-Revalidate (from redirect)
    var isRevalidationRequired = false;
    // Use this internal array to capture routes that require revalidation due
    // to a cancelled deferred on action submission
    var cancelledDeferredRoutes = [];
    // Use this internal array to capture fetcher loads that were cancelled by an
    // action navigation and require revalidation
    var cancelledFetcherLoads = new Set();
    // AbortControllers for any in-flight fetchers
    var fetchControllers = new Map();
    // Track loads based on the order in which they started
    var incrementingLoadId = 0;
    // Track the outstanding pending navigation data load to be compared against
    // the globally incrementing load when a fetcher load lands after a completed
    // navigation
    var pendingNavigationLoadId = -1;
    // Fetchers that triggered data reloads as a result of their actions
    var fetchReloadIds = new Map();
    // Fetchers that triggered redirect navigations
    var fetchRedirectIds = new Set();
    // Most recent href/match for fetcher.load calls for fetchers
    var fetchLoadMatches = new Map();
    // Ref-count mounted fetchers so we know when it's ok to clean them up
    var activeFetchers = new Map();
    // Fetchers that have requested a delete when using v7_fetcherPersist,
    // they'll be officially removed after they return to idle
    var deletedFetchers = new Set();
    // Store DeferredData instances for active route matches.  When a
    // route loader returns defer() we stick one in here.  Then, when a nested
    // promise resolves we update loaderData.  If a new navigation starts we
    // cancel active deferreds for eliminated routes.
    var activeDeferreds = new Map();
    // Store blocker functions in a separate Map outside of router state since
    // we don't need to update UI state if they change
    var blockerFunctions = new Map();
    // Flag to ignore the next history update, so we can revert the URL change on
    // a POP navigation that was blocked by the user without touching router state
    var unblockBlockerHistoryUpdate = undefined;
    // Initialize the router, all side effects should be kicked off from here.
    // Implemented as a Fluent API for ease of:
    //   let router = createRouter(init).initialize();
    function initialize() {
        // If history informs us of a POP navigation, start the navigation but do not update
        // state.  We'll update our own state once the navigation completes
        unlistenHistory = init.history.listen((_ref)=>{
            var { action: historyAction, location, delta } = _ref;
            // Ignore this event if it was just us resetting the URL from a
            // blocked POP navigation
            if (unblockBlockerHistoryUpdate) {
                unblockBlockerHistoryUpdate();
                unblockBlockerHistoryUpdate = undefined;
                return;
            }
            warning(blockerFunctions.size === 0 || delta != null, "You are trying to use a blocker on a POP navigation to a location " + "that was not created by @remix-run/router. This will fail silently in " + "production. This can happen if you are navigating outside the router " + "via `window.history.pushState`/`window.location.hash` instead of using " + "router navigation APIs.  This can also happen if you are using " + "createHashRouter and the user manually changes the URL.");
            var blockerKey = shouldBlockNavigation({
                currentLocation: state.location,
                nextLocation: location,
                historyAction
            });
            if (blockerKey && delta != null) {
                // Restore the URL to match the current UI, but don't update router state
                var nextHistoryUpdatePromise = new Promise((resolve)=>{
                    unblockBlockerHistoryUpdate = resolve;
                });
                init.history.go(delta * -1);
                // Put the blocker into a blocked state
                updateBlocker(blockerKey, {
                    state: "blocked",
                    location,
                    proceed () {
                        updateBlocker(blockerKey, {
                            state: "proceeding",
                            proceed: undefined,
                            reset: undefined,
                            location
                        });
                        // Re-do the same POP navigation we just blocked, after the url
                        // restoration is also complete.  See:
                        // https://github.com/remix-run/react-router/issues/11613
                        nextHistoryUpdatePromise.then(()=>init.history.go(delta));
                    },
                    reset () {
                        var blockers = new Map(state.blockers);
                        blockers.set(blockerKey, IDLE_BLOCKER);
                        updateState({
                            blockers
                        });
                    }
                });
                return;
            }
            return startNavigation(historyAction, location);
        });
        if (isBrowser) {
            // FIXME: This feels gross.  How can we cleanup the lines between
            // scrollRestoration/appliedTransitions persistance?
            restoreAppliedTransitions(routerWindow, appliedViewTransitions);
            var _saveAppliedTransitions = ()=>persistAppliedTransitions(routerWindow, appliedViewTransitions);
            routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
            removePageHideEventListener = ()=>routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
        }
        // Kick off initial data load if needed.  Use Pop to avoid modifying history
        // Note we don't do any handling of lazy here.  For SPA's it'll get handled
        // in the normal navigation flow.  For SSR it's expected that lazy modules are
        // resolved prior to router creation since we can't go into a fallbackElement
        // UI for SSR'd apps
        if (!state.initialized) {
            startNavigation(Action.Pop, state.location, {
                initialHydration: true
            });
        }
        return router;
    }
    // Clean up a router and it's side effects
    function dispose() {
        if (unlistenHistory) {
            unlistenHistory();
        }
        if (removePageHideEventListener) {
            removePageHideEventListener();
        }
        subscribers.clear();
        pendingNavigationController && pendingNavigationController.abort();
        state.fetchers.forEach((_, key)=>deleteFetcher(key));
        state.blockers.forEach((_, key)=>deleteBlocker(key));
    }
    // Subscribe to state updates for the router
    function subscribe(fn) {
        subscribers.add(fn);
        return ()=>subscribers.delete(fn);
    }
    // Update our state and notify the calling context of the change
    function updateState(newState, opts) {
        if (opts === void 0) {
            opts = {};
        }
        state = _extends({}, state, newState);
        // Prep fetcher cleanup so we can tell the UI which fetcher data entries
        // can be removed
        var completedFetchers = [];
        var deletedFetchersKeys = [];
        if (future.v7_fetcherPersist) {
            state.fetchers.forEach((fetcher, key)=>{
                if (fetcher.state === "idle") {
                    if (deletedFetchers.has(key)) {
                        // Unmounted from the UI and can be totally removed
                        deletedFetchersKeys.push(key);
                    } else {
                        // Returned to idle but still mounted in the UI, so semi-remains for
                        // revalidations and such
                        completedFetchers.push(key);
                    }
                }
            });
        }
        // Iterate over a local copy so that if flushSync is used and we end up
        // removing and adding a new subscriber due to the useCallback dependencies,
        // we don't get ourselves into a loop calling the new subscriber immediately
        [
            ...subscribers
        ].forEach((subscriber)=>subscriber(state, {
                deletedFetchers: deletedFetchersKeys,
                viewTransitionOpts: opts.viewTransitionOpts,
                flushSync: opts.flushSync === true
            }));
        // Remove idle fetchers from state since we only care about in-flight fetchers.
        if (future.v7_fetcherPersist) {
            completedFetchers.forEach((key)=>state.fetchers.delete(key));
            deletedFetchersKeys.forEach((key)=>deleteFetcher(key));
        }
    }
    // Complete a navigation returning the state.navigation back to the IDLE_NAVIGATION
    // and setting state.[historyAction/location/matches] to the new route.
    // - Location is a required param
    // - Navigation will always be set to IDLE_NAVIGATION
    // - Can pass any other state in newState
    function completeNavigation(location, newState, _temp) {
        var _location$state, _location$state2;
        var { flushSync } = _temp === void 0 ? {} : _temp;
        // Deduce if we're in a loading/actionReload state:
        // - We have committed actionData in the store
        // - The current navigation was a mutation submission
        // - We're past the submitting state and into the loading state
        // - The location being loaded is not the result of a redirect
        var isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && ((_location$state = location.state) == null ? void 0 : _location$state._isRedirect) !== true;
        var actionData;
        if (newState.actionData) {
            if (Object.keys(newState.actionData).length > 0) {
                actionData = newState.actionData;
            } else {
                // Empty actionData -> clear prior actionData due to an action error
                actionData = null;
            }
        } else if (isActionReload) {
            // Keep the current data if we're wrapping up the action reload
            actionData = state.actionData;
        } else {
            // Clear actionData on any other completed navigations
            actionData = null;
        }
        // Always preserve any existing loaderData from re-used routes
        var loaderData = newState.loaderData ? mergeLoaderData(state.loaderData, newState.loaderData, newState.matches || [], newState.errors) : state.loaderData;
        // On a successful navigation we can assume we got through all blockers
        // so we can start fresh
        var blockers = state.blockers;
        if (blockers.size > 0) {
            blockers = new Map(blockers);
            blockers.forEach((_, k)=>blockers.set(k, IDLE_BLOCKER));
        }
        // Always respect the user flag.  Otherwise don't reset on mutation
        // submission navigations unless they redirect
        var preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && ((_location$state2 = location.state) == null ? void 0 : _location$state2._isRedirect) !== true;
        // Commit any in-flight routes at the end of the HMR revalidation "navigation"
        if (inFlightDataRoutes) {
            dataRoutes = inFlightDataRoutes;
            inFlightDataRoutes = undefined;
        }
        if (isUninterruptedRevalidation) ;
        else if (pendingAction === Action.Pop) ;
        else if (pendingAction === Action.Push) {
            init.history.push(location, location.state);
        } else if (pendingAction === Action.Replace) {
            init.history.replace(location, location.state);
        }
        var viewTransitionOpts;
        // On POP, enable transitions if they were enabled on the original navigation
        if (pendingAction === Action.Pop) {
            // Forward takes precedence so they behave like the original navigation
            var priorPaths = appliedViewTransitions.get(state.location.pathname);
            if (priorPaths && priorPaths.has(location.pathname)) {
                viewTransitionOpts = {
                    currentLocation: state.location,
                    nextLocation: location
                };
            } else if (appliedViewTransitions.has(location.pathname)) {
                // If we don't have a previous forward nav, assume we're popping back to
                // the new location and enable if that location previously enabled
                viewTransitionOpts = {
                    currentLocation: location,
                    nextLocation: state.location
                };
            }
        } else if (pendingViewTransitionEnabled) {
            // Store the applied transition on PUSH/REPLACE
            var toPaths = appliedViewTransitions.get(state.location.pathname);
            if (toPaths) {
                toPaths.add(location.pathname);
            } else {
                toPaths = new Set([
                    location.pathname
                ]);
                appliedViewTransitions.set(state.location.pathname, toPaths);
            }
            viewTransitionOpts = {
                currentLocation: state.location,
                nextLocation: location
            };
        }
        updateState(_extends({}, newState, {
            actionData,
            loaderData,
            historyAction: pendingAction,
            location,
            initialized: true,
            navigation: IDLE_NAVIGATION,
            revalidation: "idle",
            restoreScrollPosition: getSavedScrollPosition(location, newState.matches || state.matches),
            preventScrollReset,
            blockers
        }), {
            viewTransitionOpts,
            flushSync: flushSync === true
        });
        // Reset stateful navigation vars
        pendingAction = Action.Pop;
        pendingPreventScrollReset = false;
        pendingViewTransitionEnabled = false;
        isUninterruptedRevalidation = false;
        isRevalidationRequired = false;
        cancelledDeferredRoutes = [];
    }
    function navigate(to, opts) {
        return _navigate.apply(this, arguments);
    }
    function _navigate() {
        _navigate = // Trigger a navigation event, which can either be a numerical POP or a PUSH
        // replace with an optional submission
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(to, opts) {
            if (typeof to === "number") {
                init.history.go(to);
                return;
            }
            var normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, to, future.v7_relativeSplatPath, opts == null ? void 0 : opts.fromRouteId, opts == null ? void 0 : opts.relative);
            var { path, submission, error } = normalizeNavigateOptions(future.v7_normalizeFormMethod, false, normalizedPath, opts);
            var currentLocation = state.location;
            var nextLocation = createLocation(state.location, path, opts && opts.state);
            // When using navigate as a PUSH/REPLACE we aren't reading an already-encoded
            // URL from window.location, so we need to encode it here so the behavior
            // remains the same as POP and non-data-router usages.  new URL() does all
            // the same encoding we'd get from a history.pushState/window.location read
            // without having to touch history
            nextLocation = _extends({}, nextLocation, init.history.encodeLocation(nextLocation));
            var userReplace = opts && opts.replace != null ? opts.replace : undefined;
            var historyAction = Action.Push;
            if (userReplace === true) {
                historyAction = Action.Replace;
            } else if (userReplace === false) ;
            else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
                // By default on submissions to the current location we REPLACE so that
                // users don't have to double-click the back button to get to the prior
                // location.  If the user redirects to a different location from the
                // action/loader this will be ignored and the redirect will be a PUSH
                historyAction = Action.Replace;
            }
            var preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : undefined;
            var flushSync = (opts && opts.flushSync) === true;
            var blockerKey = shouldBlockNavigation({
                currentLocation,
                nextLocation,
                historyAction
            });
            if (blockerKey) {
                // Put the blocker into a blocked state
                updateBlocker(blockerKey, {
                    state: "blocked",
                    location: nextLocation,
                    proceed () {
                        updateBlocker(blockerKey, {
                            state: "proceeding",
                            proceed: undefined,
                            reset: undefined,
                            location: nextLocation
                        });
                        // Send the same navigation through
                        navigate(to, opts);
                    },
                    reset () {
                        var blockers = new Map(state.blockers);
                        blockers.set(blockerKey, IDLE_BLOCKER);
                        updateState({
                            blockers
                        });
                    }
                });
                return;
            }
            return yield startNavigation(historyAction, nextLocation, {
                submission,
                // Send through the formData serialization error if we have one so we can
                // render at the right error boundary after we match routes
                pendingError: error,
                preventScrollReset,
                replace: opts && opts.replace,
                enableViewTransition: opts && opts.viewTransition,
                flushSync
            });
        });
        return _navigate.apply(this, arguments);
    }
    // Revalidate all current loaders.  If a navigation is in progress or if this
    // is interrupted by a navigation, allow this to "succeed" by calling all
    // loaders during the next loader round
    function revalidate() {
        interruptActiveLoads();
        updateState({
            revalidation: "loading"
        });
        // If we're currently submitting an action, we don't need to start a new
        // navigation, we'll just let the follow up loader execution call all loaders
        if (state.navigation.state === "submitting") {
            return;
        }
        // If we're currently in an idle state, start a new navigation for the current
        // action/location and mark it as uninterrupted, which will skip the history
        // update in completeNavigation
        if (state.navigation.state === "idle") {
            startNavigation(state.historyAction, state.location, {
                startUninterruptedRevalidation: true
            });
            return;
        }
        // Otherwise, if we're currently in a loading state, just start a new
        // navigation to the navigation.location but do not trigger an uninterrupted
        // revalidation so that history correctly updates once the navigation completes
        startNavigation(pendingAction || state.historyAction, state.navigation.location, {
            overrideNavigation: state.navigation,
            // Proxy through any rending view transition
            enableViewTransition: pendingViewTransitionEnabled === true
        });
    }
    function startNavigation(historyAction, location, opts) {
        return _startNavigation.apply(this, arguments);
    }
    function _startNavigation() {
        _startNavigation = // Start a navigation to the given action/location.  Can optionally provide a
        // overrideNavigation which will override the normalLoad in the case of a redirect
        // navigation
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(historyAction, location, opts) {
            // Abort any in-progress navigations and start a new one. Unset any ongoing
            // uninterrupted revalidations unless told otherwise, since we want this
            // new navigation to update history normally
            pendingNavigationController && pendingNavigationController.abort();
            pendingNavigationController = null;
            pendingAction = historyAction;
            isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
            // Save the current scroll position every time we start a new navigation,
            // and track whether we should reset scroll on completion
            saveScrollPosition(state.location, state.matches);
            pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
            pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
            var routesToUse = inFlightDataRoutes || dataRoutes;
            var loadingNavigation = opts && opts.overrideNavigation;
            var matches = matchRoutes(routesToUse, location, basename);
            var flushSync = (opts && opts.flushSync) === true;
            var fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
            if (fogOfWar.active && fogOfWar.matches) {
                matches = fogOfWar.matches;
            }
            // Short circuit with a 404 on the root error boundary if we match nothing
            if (!matches) {
                var { error, notFoundMatches, route } = handleNavigational404(location.pathname);
                completeNavigation(location, {
                    matches: notFoundMatches,
                    loaderData: {},
                    errors: {
                        [route.id]: error
                    }
                }, {
                    flushSync
                });
                return;
            }
            // Short circuit if it's only a hash change and not a revalidation or
            // mutation submission.
            //
            // Ignore on initial page loads because since the initial hydration will always
            // be "same hash".  For example, on /page#hash and submit a <Form method="post">
            // which will default to a navigation to /page
            if (state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
                completeNavigation(location, {
                    matches
                }, {
                    flushSync
                });
                return;
            }
            // Create a controller/Request for this navigation
            pendingNavigationController = new AbortController();
            var request = createClientSideRequest(init.history, location, pendingNavigationController.signal, opts && opts.submission);
            var pendingActionResult;
            if (opts && opts.pendingError) {
                // If we have a pendingError, it means the user attempted a GET submission
                // with binary FormData so assign here and skip to handleLoaders.  That
                // way we handle calling loaders above the boundary etc.  It's not really
                // different from an actionError in that sense.
                pendingActionResult = [
                    findNearestBoundary(matches).route.id,
                    {
                        type: ResultType.error,
                        error: opts.pendingError
                    }
                ];
            } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
                // Call action if we received an action submission
                var actionResult = yield handleAction(request, location, opts.submission, matches, fogOfWar.active, {
                    replace: opts.replace,
                    flushSync
                });
                if (actionResult.shortCircuited) {
                    return;
                }
                // If we received a 404 from handleAction, it's because we couldn't lazily
                // discover the destination route so we don't want to call loaders
                if (actionResult.pendingActionResult) {
                    var [routeId, result] = actionResult.pendingActionResult;
                    if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
                        pendingNavigationController = null;
                        completeNavigation(location, {
                            matches: actionResult.matches,
                            loaderData: {},
                            errors: {
                                [routeId]: result.error
                            }
                        });
                        return;
                    }
                }
                matches = actionResult.matches || matches;
                pendingActionResult = actionResult.pendingActionResult;
                loadingNavigation = getLoadingNavigation(location, opts.submission);
                flushSync = false;
                // No need to do fog of war matching again on loader execution
                fogOfWar.active = false;
                // Create a GET request for the loaders
                request = createClientSideRequest(init.history, request.url, request.signal);
            }
            // Call loaders
            var { shortCircuited, matches: updatedMatches, loaderData, errors } = yield handleLoaders(request, location, matches, fogOfWar.active, loadingNavigation, opts && opts.submission, opts && opts.fetcherSubmission, opts && opts.replace, opts && opts.initialHydration === true, flushSync, pendingActionResult);
            if (shortCircuited) {
                return;
            }
            // Clean up now that the action/loaders have completed.  Don't clean up if
            // we short circuited because pendingNavigationController will have already
            // been assigned to a new controller for the next navigation
            pendingNavigationController = null;
            completeNavigation(location, _extends({
                matches: updatedMatches || matches
            }, getActionDataForCommit(pendingActionResult), {
                loaderData,
                errors
            }));
        });
        return _startNavigation.apply(this, arguments);
    }
    function handleAction(request, location, submission, matches, isFogOfWar, opts) {
        return _handleAction.apply(this, arguments);
    }
    function _handleAction() {
        _handleAction = // Call the action matched by the leaf route for this navigation and handle
        // redirects/errors
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(request, location, submission, matches, isFogOfWar, opts) {
            if (opts === void 0) {
                opts = {};
            }
            interruptActiveLoads();
            // Put us in a submitting state
            var navigation = getSubmittingNavigation(location, submission);
            updateState({
                navigation
            }, {
                flushSync: opts.flushSync === true
            });
            if (isFogOfWar) {
                var discoverResult = yield discoverRoutes(matches, location.pathname, request.signal);
                if (discoverResult.type === "aborted") {
                    return {
                        shortCircuited: true
                    };
                } else if (discoverResult.type === "error") {
                    var boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
                    return {
                        matches: discoverResult.partialMatches,
                        pendingActionResult: [
                            boundaryId,
                            {
                                type: ResultType.error,
                                error: discoverResult.error
                            }
                        ]
                    };
                } else if (!discoverResult.matches) {
                    var { notFoundMatches, error, route } = handleNavigational404(location.pathname);
                    return {
                        matches: notFoundMatches,
                        pendingActionResult: [
                            route.id,
                            {
                                type: ResultType.error,
                                error
                            }
                        ]
                    };
                } else {
                    matches = discoverResult.matches;
                }
            }
            // Call our action and get the result
            var result;
            var actionMatch = getTargetMatch(matches, location);
            if (!actionMatch.route.action && !actionMatch.route.lazy) {
                result = {
                    type: ResultType.error,
                    error: getInternalRouterError(405, {
                        method: request.method,
                        pathname: location.pathname,
                        routeId: actionMatch.route.id
                    })
                };
            } else {
                var results = yield callDataStrategy("action", state, request, [
                    actionMatch
                ], matches, null);
                result = results[actionMatch.route.id];
                if (request.signal.aborted) {
                    return {
                        shortCircuited: true
                    };
                }
            }
            if (isRedirectResult(result)) {
                var replace;
                if (opts && opts.replace != null) {
                    replace = opts.replace;
                } else {
                    // If the user didn't explicity indicate replace behavior, replace if
                    // we redirected to the exact same location we're currently at to avoid
                    // double back-buttons
                    var _$location = normalizeRedirectLocation(result.response.headers.get("Location"), new URL(request.url), basename);
                    replace = _$location === state.location.pathname + state.location.search;
                }
                yield startRedirectNavigation(request, result, true, {
                    submission,
                    replace
                });
                return {
                    shortCircuited: true
                };
            }
            if (isDeferredResult(result)) {
                throw getInternalRouterError(400, {
                    type: "defer-action"
                });
            }
            if (isErrorResult(result)) {
                // Store off the pending error - we use it to determine which loaders
                // to call and will commit it when we complete the navigation
                var boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
                // By default, all submissions to the current location are REPLACE
                // navigations, but if the action threw an error that'll be rendered in
                // an errorElement, we fall back to PUSH so that the user can use the
                // back button to get back to the pre-submission form location to try
                // again
                if ((opts && opts.replace) !== true) {
                    pendingAction = Action.Push;
                }
                return {
                    matches,
                    pendingActionResult: [
                        boundaryMatch.route.id,
                        result
                    ]
                };
            }
            return {
                matches,
                pendingActionResult: [
                    actionMatch.route.id,
                    result
                ]
            };
        });
        return _handleAction.apply(this, arguments);
    }
    function handleLoaders(request, location, matches, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionResult) {
        return _handleLoaders.apply(this, arguments);
    }
    function _handleLoaders() {
        _handleLoaders = // Call all applicable loaders for the given matches, handling redirects,
        // errors, etc.
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(request, location, matches, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace, initialHydration, flushSync, pendingActionResult) {
            // Figure out the right navigation we want to use for data loading
            var loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
            // If this was a redirect from an action we don't have a "submission" but
            // we have it on the loading navigation so use that if available
            var activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
            // If this is an uninterrupted revalidation, we remain in our current idle
            // state.  If not, we need to switch to our loading state and load data,
            // preserving any new action data or existing action data (in the case of
            // a revalidation interrupting an actionReload)
            // If we have partialHydration enabled, then don't update the state for the
            // initial data load since it's not a "navigation"
            var shouldUpdateNavigationState = !isUninterruptedRevalidation && (!future.v7_partialHydration || !initialHydration);
            // When fog of war is enabled, we enter our `loading` state earlier so we
            // can discover new routes during the `loading` state.  We skip this if
            // we've already run actions since we would have done our matching already.
            // If the children() function threw then, we want to proceed with the
            // partial matches it discovered.
            if (isFogOfWar) {
                if (shouldUpdateNavigationState) {
                    var actionData = getUpdatedActionData(pendingActionResult);
                    updateState(_extends({
                        navigation: loadingNavigation
                    }, actionData !== undefined ? {
                        actionData
                    } : {}), {
                        flushSync
                    });
                }
                var discoverResult = yield discoverRoutes(matches, location.pathname, request.signal);
                if (discoverResult.type === "aborted") {
                    return {
                        shortCircuited: true
                    };
                } else if (discoverResult.type === "error") {
                    var boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
                    return {
                        matches: discoverResult.partialMatches,
                        loaderData: {},
                        errors: {
                            [boundaryId]: discoverResult.error
                        }
                    };
                } else if (!discoverResult.matches) {
                    var { error, notFoundMatches, route } = handleNavigational404(location.pathname);
                    return {
                        matches: notFoundMatches,
                        loaderData: {},
                        errors: {
                            [route.id]: error
                        }
                    };
                } else {
                    matches = discoverResult.matches;
                }
            }
            var routesToUse = inFlightDataRoutes || dataRoutes;
            var [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, activeSubmission, location, future.v7_partialHydration && initialHydration === true, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult);
            // Cancel pending deferreds for no-longer-matched routes or routes we're
            // about to reload.  Note that if this is an action reload we would have
            // already cancelled all pending deferreds so this would be a no-op
            cancelActiveDeferreds((routeId)=>!(matches && matches.some((m)=>m.route.id === routeId)) || matchesToLoad && matchesToLoad.some((m)=>m.route.id === routeId));
            pendingNavigationLoadId = ++incrementingLoadId;
            // Short circuit if we have no loaders to run
            if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
                var updatedFetchers = markFetchRedirectsDone();
                completeNavigation(location, _extends({
                    matches,
                    loaderData: {},
                    // Commit pending error if we're short circuiting
                    errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
                        [pendingActionResult[0]]: pendingActionResult[1].error
                    } : null
                }, getActionDataForCommit(pendingActionResult), updatedFetchers ? {
                    fetchers: new Map(state.fetchers)
                } : {}), {
                    flushSync
                });
                return {
                    shortCircuited: true
                };
            }
            if (shouldUpdateNavigationState) {
                var updates = {};
                if (!isFogOfWar) {
                    // Only update navigation/actionNData if we didn't already do it above
                    updates.navigation = loadingNavigation;
                    var actionData1 = getUpdatedActionData(pendingActionResult);
                    if (actionData1 !== undefined) {
                        updates.actionData = actionData1;
                    }
                }
                if (revalidatingFetchers.length > 0) {
                    updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
                }
                updateState(updates, {
                    flushSync
                });
            }
            revalidatingFetchers.forEach((rf)=>{
                abortFetcher(rf.key);
                if (rf.controller) {
                    // Fetchers use an independent AbortController so that aborting a fetcher
                    // (via deleteFetcher) does not abort the triggering navigation that
                    // triggered the revalidation
                    fetchControllers.set(rf.key, rf.controller);
                }
            });
            // Proxy navigation abort through to revalidation fetchers
            var abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((f)=>abortFetcher(f.key));
            if (pendingNavigationController) {
                pendingNavigationController.signal.addEventListener("abort", abortPendingFetchRevalidations);
            }
            var { loaderResults, fetcherResults } = yield callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, request);
            if (request.signal.aborted) {
                return {
                    shortCircuited: true
                };
            }
            // Clean up _after_ loaders have completed.  Don't clean up if we short
            // circuited because fetchControllers would have been aborted and
            // reassigned to new controllers for the next navigation
            if (pendingNavigationController) {
                pendingNavigationController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
            }
            revalidatingFetchers.forEach((rf)=>fetchControllers.delete(rf.key));
            // If any loaders returned a redirect Response, start a new REPLACE navigation
            var redirect = findRedirect(loaderResults);
            if (redirect) {
                yield startRedirectNavigation(request, redirect.result, true, {
                    replace
                });
                return {
                    shortCircuited: true
                };
            }
            redirect = findRedirect(fetcherResults);
            if (redirect) {
                // If this redirect came from a fetcher make sure we mark it in
                // fetchRedirectIds so it doesn't get revalidated on the next set of
                // loader executions
                fetchRedirectIds.add(redirect.key);
                yield startRedirectNavigation(request, redirect.result, true, {
                    replace
                });
                return {
                    shortCircuited: true
                };
            }
            // Process and commit output from loaders
            var { loaderData, errors } = processLoaderData(state, matches, loaderResults, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds);
            // Wire up subscribers to update loaderData as promises settle
            activeDeferreds.forEach((deferredData, routeId)=>{
                deferredData.subscribe((aborted)=>{
                    // Note: No need to updateState here since the TrackedPromise on
                    // loaderData is stable across resolve/reject
                    // Remove this instance if we were aborted or if promises have settled
                    if (aborted || deferredData.done) {
                        activeDeferreds.delete(routeId);
                    }
                });
            });
            // Preserve SSR errors during partial hydration
            if (future.v7_partialHydration && initialHydration && state.errors) {
                errors = _extends({}, state.errors, errors);
            }
            var updatedFetchers1 = markFetchRedirectsDone();
            var didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
            var shouldUpdateFetchers = updatedFetchers1 || didAbortFetchLoads || revalidatingFetchers.length > 0;
            return _extends({
                matches,
                loaderData,
                errors
            }, shouldUpdateFetchers ? {
                fetchers: new Map(state.fetchers)
            } : {});
        });
        return _handleLoaders.apply(this, arguments);
    }
    function getUpdatedActionData(pendingActionResult) {
        if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
            // This is cast to `any` currently because `RouteData`uses any and it
            // would be a breaking change to use any.
            // TODO: v7 - change `RouteData` to use `unknown` instead of `any`
            return {
                [pendingActionResult[0]]: pendingActionResult[1].data
            };
        } else if (state.actionData) {
            if (Object.keys(state.actionData).length === 0) {
                return null;
            } else {
                return state.actionData;
            }
        }
    }
    function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
        revalidatingFetchers.forEach((rf)=>{
            var fetcher = state.fetchers.get(rf.key);
            var revalidatingFetcher = getLoadingFetcher(undefined, fetcher ? fetcher.data : undefined);
            state.fetchers.set(rf.key, revalidatingFetcher);
        });
        return new Map(state.fetchers);
    }
    // Trigger a fetcher load/submit for the given fetcher key
    function fetch(key, routeId, href, opts) {
        if (isServer) {
            throw new Error("router.fetch() was called during the server render, but it shouldn't be. " + "You are likely calling a useFetcher() method in the body of your component. " + "Try moving it to a useEffect or a callback.");
        }
        abortFetcher(key);
        var flushSync = (opts && opts.flushSync) === true;
        var routesToUse = inFlightDataRoutes || dataRoutes;
        var normalizedPath = normalizeTo(state.location, state.matches, basename, future.v7_prependBasename, href, future.v7_relativeSplatPath, routeId, opts == null ? void 0 : opts.relative);
        var matches = matchRoutes(routesToUse, normalizedPath, basename);
        var fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
        if (fogOfWar.active && fogOfWar.matches) {
            matches = fogOfWar.matches;
        }
        if (!matches) {
            setFetcherError(key, routeId, getInternalRouterError(404, {
                pathname: normalizedPath
            }), {
                flushSync
            });
            return;
        }
        var { path, submission, error } = normalizeNavigateOptions(future.v7_normalizeFormMethod, true, normalizedPath, opts);
        if (error) {
            setFetcherError(key, routeId, error, {
                flushSync
            });
            return;
        }
        var match = getTargetMatch(matches, path);
        var preventScrollReset = (opts && opts.preventScrollReset) === true;
        if (submission && isMutationMethod(submission.formMethod)) {
            handleFetcherAction(key, routeId, path, match, matches, fogOfWar.active, flushSync, preventScrollReset, submission);
            return;
        }
        // Store off the match so we can call it's shouldRevalidate on subsequent
        // revalidations
        fetchLoadMatches.set(key, {
            routeId,
            path
        });
        handleFetcherLoader(key, routeId, path, match, matches, fogOfWar.active, flushSync, preventScrollReset, submission);
    }
    function handleFetcherAction(key, routeId, path, match, requestMatches, isFogOfWar, flushSync, preventScrollReset, submission) {
        return _handleFetcherAction.apply(this, arguments);
    }
    function _handleFetcherAction() {
        _handleFetcherAction = // Call the action for the matched fetcher.submit(), and then handle redirects,
        // errors, and revalidation
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(key, routeId, path, match, requestMatches, isFogOfWar, flushSync, preventScrollReset, submission) {
            interruptActiveLoads();
            fetchLoadMatches.delete(key);
            function detectAndHandle405Error(m) {
                if (!m.route.action && !m.route.lazy) {
                    var error = getInternalRouterError(405, {
                        method: submission.formMethod,
                        pathname: path,
                        routeId: routeId
                    });
                    setFetcherError(key, routeId, error, {
                        flushSync
                    });
                    return true;
                }
                return false;
            }
            if (!isFogOfWar && detectAndHandle405Error(match)) {
                return;
            }
            // Put this fetcher into it's submitting state
            var existingFetcher = state.fetchers.get(key);
            updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
                flushSync
            });
            var abortController = new AbortController();
            var fetchRequest = createClientSideRequest(init.history, path, abortController.signal, submission);
            if (isFogOfWar) {
                var discoverResult = yield discoverRoutes(requestMatches, path, fetchRequest.signal);
                if (discoverResult.type === "aborted") {
                    return;
                } else if (discoverResult.type === "error") {
                    setFetcherError(key, routeId, discoverResult.error, {
                        flushSync
                    });
                    return;
                } else if (!discoverResult.matches) {
                    setFetcherError(key, routeId, getInternalRouterError(404, {
                        pathname: path
                    }), {
                        flushSync
                    });
                    return;
                } else {
                    requestMatches = discoverResult.matches;
                    match = getTargetMatch(requestMatches, path);
                    if (detectAndHandle405Error(match)) {
                        return;
                    }
                }
            }
            // Call the action for the fetcher
            fetchControllers.set(key, abortController);
            var originatingLoadId = incrementingLoadId;
            var actionResults = yield callDataStrategy("action", state, fetchRequest, [
                match
            ], requestMatches, key);
            var actionResult = actionResults[match.route.id];
            if (fetchRequest.signal.aborted) {
                // We can delete this so long as we weren't aborted by our own fetcher
                // re-submit which would have put _new_ controller is in fetchControllers
                if (fetchControllers.get(key) === abortController) {
                    fetchControllers.delete(key);
                }
                return;
            }
            // When using v7_fetcherPersist, we don't want errors bubbling up to the UI
            // or redirects processed for unmounted fetchers so we just revert them to
            // idle
            if (future.v7_fetcherPersist && deletedFetchers.has(key)) {
                if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
                    updateFetcherState(key, getDoneFetcher(undefined));
                    return;
                }
            // Let SuccessResult's fall through for revalidation
            } else {
                if (isRedirectResult(actionResult)) {
                    fetchControllers.delete(key);
                    if (pendingNavigationLoadId > originatingLoadId) {
                        // A new navigation was kicked off after our action started, so that
                        // should take precedence over this redirect navigation.  We already
                        // set isRevalidationRequired so all loaders for the new route should
                        // fire unless opted out via shouldRevalidate
                        updateFetcherState(key, getDoneFetcher(undefined));
                        return;
                    } else {
                        fetchRedirectIds.add(key);
                        updateFetcherState(key, getLoadingFetcher(submission));
                        return startRedirectNavigation(fetchRequest, actionResult, false, {
                            fetcherSubmission: submission,
                            preventScrollReset
                        });
                    }
                }
                // Process any non-redirect errors thrown
                if (isErrorResult(actionResult)) {
                    setFetcherError(key, routeId, actionResult.error);
                    return;
                }
            }
            if (isDeferredResult(actionResult)) {
                throw getInternalRouterError(400, {
                    type: "defer-action"
                });
            }
            // Start the data load for current matches, or the next location if we're
            // in the middle of a navigation
            var nextLocation = state.navigation.location || state.location;
            var revalidationRequest = createClientSideRequest(init.history, nextLocation, abortController.signal);
            var routesToUse = inFlightDataRoutes || dataRoutes;
            var matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
            invariant(matches, "Didn't find any matches after fetcher action");
            var loadId = ++incrementingLoadId;
            fetchReloadIds.set(key, loadId);
            var loadFetcher = getLoadingFetcher(submission, actionResult.data);
            state.fetchers.set(key, loadFetcher);
            var [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(init.history, state, matches, submission, nextLocation, false, future.v7_skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, [
                match.route.id,
                actionResult
            ]);
            // Put all revalidating fetchers into the loading state, except for the
            // current fetcher which we want to keep in it's current loading state which
            // contains it's action submission info + action data
            revalidatingFetchers.filter((rf)=>rf.key !== key).forEach((rf)=>{
                var staleKey = rf.key;
                var existingFetcher = state.fetchers.get(staleKey);
                var revalidatingFetcher = getLoadingFetcher(undefined, existingFetcher ? existingFetcher.data : undefined);
                state.fetchers.set(staleKey, revalidatingFetcher);
                abortFetcher(staleKey);
                if (rf.controller) {
                    fetchControllers.set(staleKey, rf.controller);
                }
            });
            updateState({
                fetchers: new Map(state.fetchers)
            });
            var abortPendingFetchRevalidations = ()=>revalidatingFetchers.forEach((rf)=>abortFetcher(rf.key));
            abortController.signal.addEventListener("abort", abortPendingFetchRevalidations);
            var { loaderResults, fetcherResults } = yield callLoadersAndMaybeResolveData(state, matches, matchesToLoad, revalidatingFetchers, revalidationRequest);
            if (abortController.signal.aborted) {
                return;
            }
            abortController.signal.removeEventListener("abort", abortPendingFetchRevalidations);
            fetchReloadIds.delete(key);
            fetchControllers.delete(key);
            revalidatingFetchers.forEach((r)=>fetchControllers.delete(r.key));
            var redirect = findRedirect(loaderResults);
            if (redirect) {
                return startRedirectNavigation(revalidationRequest, redirect.result, false, {
                    preventScrollReset
                });
            }
            redirect = findRedirect(fetcherResults);
            if (redirect) {
                // If this redirect came from a fetcher make sure we mark it in
                // fetchRedirectIds so it doesn't get revalidated on the next set of
                // loader executions
                fetchRedirectIds.add(redirect.key);
                return startRedirectNavigation(revalidationRequest, redirect.result, false, {
                    preventScrollReset
                });
            }
            // Process and commit output from loaders
            var { loaderData, errors } = processLoaderData(state, matches, loaderResults, undefined, revalidatingFetchers, fetcherResults, activeDeferreds);
            // Since we let revalidations complete even if the submitting fetcher was
            // deleted, only put it back to idle if it hasn't been deleted
            if (state.fetchers.has(key)) {
                var doneFetcher = getDoneFetcher(actionResult.data);
                state.fetchers.set(key, doneFetcher);
            }
            abortStaleFetchLoads(loadId);
            // If we are currently in a navigation loading state and this fetcher is
            // more recent than the navigation, we want the newer data so abort the
            // navigation and complete it with the fetcher data
            if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
                invariant(pendingAction, "Expected pending action");
                pendingNavigationController && pendingNavigationController.abort();
                completeNavigation(state.navigation.location, {
                    matches,
                    loaderData,
                    errors,
                    fetchers: new Map(state.fetchers)
                });
            } else {
                // otherwise just update with the fetcher data, preserving any existing
                // loaderData for loaders that did not need to reload.  We have to
                // manually merge here since we aren't going through completeNavigation
                updateState({
                    errors,
                    loaderData: mergeLoaderData(state.loaderData, loaderData, matches, errors),
                    fetchers: new Map(state.fetchers)
                });
                isRevalidationRequired = false;
            }
        });
        return _handleFetcherAction.apply(this, arguments);
    }
    function handleFetcherLoader(key, routeId, path, match, matches, isFogOfWar, flushSync, preventScrollReset, submission) {
        return _handleFetcherLoader.apply(this, arguments);
    }
    function _handleFetcherLoader() {
        _handleFetcherLoader = // Call the matched loader for fetcher.load(), handling redirects, errors, etc.
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(key, routeId, path, match, matches, isFogOfWar, flushSync, preventScrollReset, submission) {
            var existingFetcher = state.fetchers.get(key);
            updateFetcherState(key, getLoadingFetcher(submission, existingFetcher ? existingFetcher.data : undefined), {
                flushSync
            });
            var abortController = new AbortController();
            var fetchRequest = createClientSideRequest(init.history, path, abortController.signal);
            if (isFogOfWar) {
                var discoverResult = yield discoverRoutes(matches, path, fetchRequest.signal);
                if (discoverResult.type === "aborted") {
                    return;
                } else if (discoverResult.type === "error") {
                    setFetcherError(key, routeId, discoverResult.error, {
                        flushSync
                    });
                    return;
                } else if (!discoverResult.matches) {
                    setFetcherError(key, routeId, getInternalRouterError(404, {
                        pathname: path
                    }), {
                        flushSync
                    });
                    return;
                } else {
                    matches = discoverResult.matches;
                    match = getTargetMatch(matches, path);
                }
            }
            // Call the loader for this fetcher route match
            fetchControllers.set(key, abortController);
            var originatingLoadId = incrementingLoadId;
            var results = yield callDataStrategy("loader", state, fetchRequest, [
                match
            ], matches, key);
            var result = results[match.route.id];
            // Deferred isn't supported for fetcher loads, await everything and treat it
            // as a normal load.  resolveDeferredData will return undefined if this
            // fetcher gets aborted, so we just leave result untouched and short circuit
            // below if that happens
            if (isDeferredResult(result)) {
                result = (yield resolveDeferredData(result, fetchRequest.signal, true)) || result;
            }
            // We can delete this so long as we weren't aborted by our our own fetcher
            // re-load which would have put _new_ controller is in fetchControllers
            if (fetchControllers.get(key) === abortController) {
                fetchControllers.delete(key);
            }
            if (fetchRequest.signal.aborted) {
                return;
            }
            // We don't want errors bubbling up or redirects followed for unmounted
            // fetchers, so short circuit here if it was removed from the UI
            if (deletedFetchers.has(key)) {
                updateFetcherState(key, getDoneFetcher(undefined));
                return;
            }
            // If the loader threw a redirect Response, start a new REPLACE navigation
            if (isRedirectResult(result)) {
                if (pendingNavigationLoadId > originatingLoadId) {
                    // A new navigation was kicked off after our loader started, so that
                    // should take precedence over this redirect navigation
                    updateFetcherState(key, getDoneFetcher(undefined));
                    return;
                } else {
                    fetchRedirectIds.add(key);
                    yield startRedirectNavigation(fetchRequest, result, false, {
                        preventScrollReset
                    });
                    return;
                }
            }
            // Process any non-redirect errors thrown
            if (isErrorResult(result)) {
                setFetcherError(key, routeId, result.error);
                return;
            }
            invariant(!isDeferredResult(result), "Unhandled fetcher deferred data");
            // Put the fetcher back into an idle state
            updateFetcherState(key, getDoneFetcher(result.data));
        });
        return _handleFetcherLoader.apply(this, arguments);
    }
    function startRedirectNavigation(request, redirect, isNavigation, _temp2) {
        return _startRedirectNavigation.apply(this, arguments);
    }
    function _startRedirectNavigation() {
        _startRedirectNavigation = /**
   * Utility function to handle redirects returned from an action or loader.
   * Normally, a redirect "replaces" the navigation that triggered it.  So, for
   * example:
   *
   *  - user is on /a
   *  - user clicks a link to /b
   *  - loader for /b redirects to /c
   *
   * In a non-JS app the browser would track the in-flight navigation to /b and
   * then replace it with /c when it encountered the redirect response.  In
   * the end it would only ever update the URL bar with /c.
   *
   * In client-side routing using pushState/replaceState, we aim to emulate
   * this behavior and we also do not update history until the end of the
   * navigation (including processed redirects).  This means that we never
   * actually touch history until we've processed redirects, so we just use
   * the history action from the original navigation (PUSH or REPLACE).
   */ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(request, redirect, isNavigation, _temp2) {
            var { submission, fetcherSubmission, preventScrollReset, replace } = _temp2 === void 0 ? {} : _temp2;
            if (redirect.response.headers.has("X-Remix-Revalidate")) {
                isRevalidationRequired = true;
            }
            var location = redirect.response.headers.get("Location");
            invariant(location, "Expected a Location header on the redirect Response");
            location = normalizeRedirectLocation(location, new URL(request.url), basename);
            var redirectLocation = createLocation(state.location, location, {
                _isRedirect: true
            });
            if (isBrowser) {
                var isDocumentReload = false;
                if (redirect.response.headers.has("X-Remix-Reload-Document")) {
                    // Hard reload if the response contained X-Remix-Reload-Document
                    isDocumentReload = true;
                } else if (ABSOLUTE_URL_REGEX.test(location)) {
                    var url = init.history.createURL(location);
                    isDocumentReload = // Hard reload if it's an absolute URL to a new origin
                    url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
                    stripBasename(url.pathname, basename) == null;
                }
                if (isDocumentReload) {
                    if (replace) {
                        routerWindow.location.replace(location);
                    } else {
                        routerWindow.location.assign(location);
                    }
                    return;
                }
            }
            // There's no need to abort on redirects, since we don't detect the
            // redirect until the action/loaders have settled
            pendingNavigationController = null;
            var redirectHistoryAction = replace === true || redirect.response.headers.has("X-Remix-Replace") ? Action.Replace : Action.Push;
            // Use the incoming submission if provided, fallback on the active one in
            // state.navigation
            var { formMethod, formAction, formEncType } = state.navigation;
            if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
                submission = getSubmissionFromNavigation(state.navigation);
            }
            // If this was a 307/308 submission we want to preserve the HTTP method and
            // re-submit the GET/POST/PUT/PATCH/DELETE as a submission navigation to the
            // redirected location
            var activeSubmission = submission || fetcherSubmission;
            if (redirectPreserveMethodStatusCodes.has(redirect.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
                yield startNavigation(redirectHistoryAction, redirectLocation, {
                    submission: _extends({}, activeSubmission, {
                        formAction: location
                    }),
                    // Preserve these flags across redirects
                    preventScrollReset: preventScrollReset || pendingPreventScrollReset,
                    enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
                });
            } else {
                // If we have a navigation submission, we will preserve it through the
                // redirect navigation
                var overrideNavigation = getLoadingNavigation(redirectLocation, submission);
                yield startNavigation(redirectHistoryAction, redirectLocation, {
                    overrideNavigation,
                    // Send fetcher submissions through for shouldRevalidate
                    fetcherSubmission,
                    // Preserve these flags across redirects
                    preventScrollReset: preventScrollReset || pendingPreventScrollReset,
                    enableViewTransition: isNavigation ? pendingViewTransitionEnabled : undefined
                });
            }
        });
        return _startRedirectNavigation.apply(this, arguments);
    }
    function callDataStrategy(type, state, request, matchesToLoad, matches, fetcherKey) {
        return _callDataStrategy.apply(this, arguments);
    }
    function _callDataStrategy() {
        _callDataStrategy = // Utility wrapper for calling dataStrategy client-side without having to
        // pass around the manifest, mapRouteProperties, etc.
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(type, state, request, matchesToLoad, matches, fetcherKey) {
            var results;
            var dataResults = {};
            try {
                results = yield callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties);
            } catch (e) {
                // If the outer dataStrategy method throws, just return the error for all
                // matches - and it'll naturally bubble to the root
                matchesToLoad.forEach((m)=>{
                    dataResults[m.route.id] = {
                        type: ResultType.error,
                        error: e
                    };
                });
                return dataResults;
            }
            for (var [routeId, result] of Object.entries(results)){
                if (isRedirectDataStrategyResultResult(result)) {
                    var response = result.result;
                    dataResults[routeId] = {
                        type: ResultType.redirect,
                        response: normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, future.v7_relativeSplatPath)
                    };
                } else {
                    dataResults[routeId] = yield convertDataStrategyResultToDataResult(result);
                }
            }
            return dataResults;
        });
        return _callDataStrategy.apply(this, arguments);
    }
    function callLoadersAndMaybeResolveData(state, matches, matchesToLoad, fetchersToLoad, request) {
        return _callLoadersAndMaybeResolveData.apply(this, arguments);
    }
    function _callLoadersAndMaybeResolveData() {
        _callLoadersAndMaybeResolveData = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(state, matches, matchesToLoad, fetchersToLoad, request) {
            var currentMatches = state.matches;
            // Kick off loaders and fetchers in parallel
            var loaderResultsPromise = callDataStrategy("loader", state, request, matchesToLoad, matches, null);
            var fetcherResultsPromise = Promise.all(fetchersToLoad.map(/*#__PURE__*/ function() {
                var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(f) {
                    if (f.matches && f.match && f.controller) {
                        var results = yield callDataStrategy("loader", state, createClientSideRequest(init.history, f.path, f.controller.signal), [
                            f.match
                        ], f.matches, f.key);
                        var result = results[f.match.route.id];
                        // Fetcher results are keyed by fetcher key from here on out, not routeId
                        return {
                            [f.key]: result
                        };
                    } else {
                        return Promise.resolve({
                            [f.key]: {
                                type: ResultType.error,
                                error: getInternalRouterError(404, {
                                    pathname: f.path
                                })
                            }
                        });
                    }
                });
                return function(f) {
                    return _ref.apply(this, arguments);
                };
            }()));
            var loaderResults = yield loaderResultsPromise;
            var fetcherResults = (yield fetcherResultsPromise).reduce((acc, r)=>Object.assign(acc, r), {});
            yield Promise.all([
                resolveNavigationDeferredResults(matches, loaderResults, request.signal, currentMatches, state.loaderData),
                resolveFetcherDeferredResults(matches, fetcherResults, fetchersToLoad)
            ]);
            return {
                loaderResults,
                fetcherResults
            };
        });
        return _callLoadersAndMaybeResolveData.apply(this, arguments);
    }
    function interruptActiveLoads() {
        // Every interruption triggers a revalidation
        isRevalidationRequired = true;
        // Cancel pending route-level deferreds and mark cancelled routes for
        // revalidation
        cancelledDeferredRoutes.push(...cancelActiveDeferreds());
        // Abort in-flight fetcher loads
        fetchLoadMatches.forEach((_, key)=>{
            if (fetchControllers.has(key)) {
                cancelledFetcherLoads.add(key);
            }
            abortFetcher(key);
        });
    }
    function updateFetcherState(key, fetcher, opts) {
        if (opts === void 0) {
            opts = {};
        }
        state.fetchers.set(key, fetcher);
        updateState({
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function setFetcherError(key, routeId, error, opts) {
        if (opts === void 0) {
            opts = {};
        }
        var boundaryMatch = findNearestBoundary(state.matches, routeId);
        deleteFetcher(key);
        updateState({
            errors: {
                [boundaryMatch.route.id]: error
            },
            fetchers: new Map(state.fetchers)
        }, {
            flushSync: (opts && opts.flushSync) === true
        });
    }
    function getFetcher(key) {
        if (future.v7_fetcherPersist) {
            activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
            // If this fetcher was previously marked for deletion, unmark it since we
            // have a new instance
            if (deletedFetchers.has(key)) {
                deletedFetchers.delete(key);
            }
        }
        return state.fetchers.get(key) || IDLE_FETCHER;
    }
    function deleteFetcher(key) {
        var fetcher = state.fetchers.get(key);
        // Don't abort the controller if this is a deletion of a fetcher.submit()
        // in it's loading phase since - we don't want to abort the corresponding
        // revalidation and want them to complete and land
        if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
            abortFetcher(key);
        }
        fetchLoadMatches.delete(key);
        fetchReloadIds.delete(key);
        fetchRedirectIds.delete(key);
        deletedFetchers.delete(key);
        cancelledFetcherLoads.delete(key);
        state.fetchers.delete(key);
    }
    function deleteFetcherAndUpdateState(key) {
        if (future.v7_fetcherPersist) {
            var count = (activeFetchers.get(key) || 0) - 1;
            if (count <= 0) {
                activeFetchers.delete(key);
                deletedFetchers.add(key);
            } else {
                activeFetchers.set(key, count);
            }
        } else {
            deleteFetcher(key);
        }
        updateState({
            fetchers: new Map(state.fetchers)
        });
    }
    function abortFetcher(key) {
        var controller = fetchControllers.get(key);
        if (controller) {
            controller.abort();
            fetchControllers.delete(key);
        }
    }
    function markFetchersDone(keys) {
        for (var key of keys){
            var fetcher = getFetcher(key);
            var doneFetcher = getDoneFetcher(fetcher.data);
            state.fetchers.set(key, doneFetcher);
        }
    }
    function markFetchRedirectsDone() {
        var doneKeys = [];
        var updatedFetchers = false;
        for (var key of fetchRedirectIds){
            var fetcher = state.fetchers.get(key);
            invariant(fetcher, "Expected fetcher: " + key);
            if (fetcher.state === "loading") {
                fetchRedirectIds.delete(key);
                doneKeys.push(key);
                updatedFetchers = true;
            }
        }
        markFetchersDone(doneKeys);
        return updatedFetchers;
    }
    function abortStaleFetchLoads(landedId) {
        var yeetedKeys = [];
        for (var [key, id] of fetchReloadIds){
            if (id < landedId) {
                var fetcher = state.fetchers.get(key);
                invariant(fetcher, "Expected fetcher: " + key);
                if (fetcher.state === "loading") {
                    abortFetcher(key);
                    fetchReloadIds.delete(key);
                    yeetedKeys.push(key);
                }
            }
        }
        markFetchersDone(yeetedKeys);
        return yeetedKeys.length > 0;
    }
    function getBlocker(key, fn) {
        var blocker = state.blockers.get(key) || IDLE_BLOCKER;
        if (blockerFunctions.get(key) !== fn) {
            blockerFunctions.set(key, fn);
        }
        return blocker;
    }
    function deleteBlocker(key) {
        state.blockers.delete(key);
        blockerFunctions.delete(key);
    }
    // Utility function to update blockers, ensuring valid state transitions
    function updateBlocker(key, newBlocker) {
        var blocker = state.blockers.get(key) || IDLE_BLOCKER;
        // Poor mans state machine :)
        // https://mermaid.live/edit#pako:eNqVkc9OwzAMxl8l8nnjAYrEtDIOHEBIgwvKJTReGy3_lDpIqO27k6awMG0XcrLlnz87nwdonESogKXXBuE79rq75XZO3-yHds0RJVuv70YrPlUrCEe2HfrORS3rubqZfuhtpg5C9wk5tZ4VKcRUq88q9Z8RS0-48cE1iHJkL0ugbHuFLus9L6spZy8nX9MP2CNdomVaposqu3fGayT8T8-jJQwhepo_UtpgBQaDEUom04dZhAN1aJBDlUKJBxE1ceB2Smj0Mln-IBW5AFU2dwUiktt_2Qaq2dBfaKdEup85UV7Yd-dKjlnkabl2Pvr0DTkTreM
        invariant(blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked", "Invalid blocker state transition: " + blocker.state + " -> " + newBlocker.state);
        var blockers = new Map(state.blockers);
        blockers.set(key, newBlocker);
        updateState({
            blockers
        });
    }
    function shouldBlockNavigation(_ref2) {
        var { currentLocation, nextLocation, historyAction } = _ref2;
        if (blockerFunctions.size === 0) {
            return;
        }
        // We ony support a single active blocker at the moment since we don't have
        // any compelling use cases for multi-blocker yet
        if (blockerFunctions.size > 1) {
            warning(false, "A router only supports one blocker at a time");
        }
        var entries = Array.from(blockerFunctions.entries());
        var [blockerKey, blockerFunction] = entries[entries.length - 1];
        var blocker = state.blockers.get(blockerKey);
        if (blocker && blocker.state === "proceeding") {
            // If the blocker is currently proceeding, we don't need to re-check
            // it and can let this navigation continue
            return;
        }
        // At this point, we know we're unblocked/blocked so we need to check the
        // user-provided blocker function
        if (blockerFunction({
            currentLocation,
            nextLocation,
            historyAction
        })) {
            return blockerKey;
        }
    }
    function handleNavigational404(pathname) {
        var error = getInternalRouterError(404, {
            pathname
        });
        var routesToUse = inFlightDataRoutes || dataRoutes;
        var { matches, route } = getShortCircuitMatches(routesToUse);
        // Cancel all pending deferred on 404s since we don't keep any routes
        cancelActiveDeferreds();
        return {
            notFoundMatches: matches,
            route,
            error
        };
    }
    function cancelActiveDeferreds(predicate) {
        var cancelledRouteIds = [];
        activeDeferreds.forEach((dfd, routeId)=>{
            if (!predicate || predicate(routeId)) {
                // Cancel the deferred - but do not remove from activeDeferreds here -
                // we rely on the subscribers to do that so our tests can assert proper
                // cleanup via _internalActiveDeferreds
                dfd.cancel();
                cancelledRouteIds.push(routeId);
                activeDeferreds.delete(routeId);
            }
        });
        return cancelledRouteIds;
    }
    // Opt in to capturing and reporting scroll positions during navigations,
    // used by the <ScrollRestoration> component
    function enableScrollRestoration(positions, getPosition, getKey) {
        savedScrollPositions = positions;
        getScrollPosition = getPosition;
        getScrollRestorationKey = getKey || null;
        // Perform initial hydration scroll restoration, since we miss the boat on
        // the initial updateState() because we've not yet rendered <ScrollRestoration/>
        // and therefore have no savedScrollPositions available
        if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
            initialScrollRestored = true;
            var y = getSavedScrollPosition(state.location, state.matches);
            if (y != null) {
                updateState({
                    restoreScrollPosition: y
                });
            }
        }
        return ()=>{
            savedScrollPositions = null;
            getScrollPosition = null;
            getScrollRestorationKey = null;
        };
    }
    function getScrollKey(location, matches) {
        if (getScrollRestorationKey) {
            var key = getScrollRestorationKey(location, matches.map((m)=>convertRouteMatchToUiMatch(m, state.loaderData)));
            return key || location.key;
        }
        return location.key;
    }
    function saveScrollPosition(location, matches) {
        if (savedScrollPositions && getScrollPosition) {
            var key = getScrollKey(location, matches);
            savedScrollPositions[key] = getScrollPosition();
        }
    }
    function getSavedScrollPosition(location, matches) {
        if (savedScrollPositions) {
            var key = getScrollKey(location, matches);
            var y = savedScrollPositions[key];
            if (typeof y === "number") {
                return y;
            }
        }
        return null;
    }
    function checkFogOfWar(matches, routesToUse, pathname) {
        if (patchRoutesOnNavigationImpl) {
            if (!matches) {
                var fogMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
                return {
                    active: true,
                    matches: fogMatches || []
                };
            } else {
                if (Object.keys(matches[0].params).length > 0) {
                    // If we matched a dynamic param or a splat, it might only be because
                    // we haven't yet discovered other routes that would match with a
                    // higher score.  Call patchRoutesOnNavigation just to be sure
                    var partialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
                    return {
                        active: true,
                        matches: partialMatches
                    };
                }
            }
        }
        return {
            active: false,
            matches: null
        };
    }
    function discoverRoutes(matches, pathname, signal) {
        return _discoverRoutes.apply(this, arguments);
    }
    function _discoverRoutes() {
        _discoverRoutes = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(matches, pathname, signal) {
            var _loop = function*() {
                var isNonHMR = inFlightDataRoutes == null;
                var routesToUse = inFlightDataRoutes || dataRoutes;
                var localManifest = manifest;
                try {
                    yield patchRoutesOnNavigationImpl({
                        path: pathname,
                        matches: partialMatches,
                        patch: (routeId, children)=>{
                            if (signal.aborted) return;
                            patchRoutesImpl(routeId, children, routesToUse, localManifest, mapRouteProperties);
                        }
                    });
                } catch (e) {
                    return {
                        v: {
                            type: "error",
                            error: e,
                            partialMatches
                        }
                    };
                } finally{
                    // If we are not in the middle of an HMR revalidation and we changed the
                    // routes, provide a new identity so when we `updateState` at the end of
                    // this navigation/fetch `router.routes` will be a new identity and
                    // trigger a re-run of memoized `router.routes` dependencies.
                    // HMR will already update the identity and reflow when it lands
                    // `inFlightDataRoutes` in `completeNavigation`
                    if (isNonHMR && !signal.aborted) {
                        dataRoutes = [
                            ...dataRoutes
                        ];
                    }
                }
                if (signal.aborted) {
                    return {
                        v: {
                            type: "aborted"
                        }
                    };
                }
                var newMatches = matchRoutes(routesToUse, pathname, basename);
                if (newMatches) {
                    return {
                        v: {
                            type: "success",
                            matches: newMatches
                        }
                    };
                }
                var newPartialMatches = matchRoutesImpl(routesToUse, pathname, basename, true);
                // Avoid loops if the second pass results in the same partial matches
                if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every((m, i)=>m.route.id === newPartialMatches[i].route.id)) {
                    return {
                        v: {
                            type: "success",
                            matches: null
                        }
                    };
                }
                partialMatches = newPartialMatches;
            };
            if (!patchRoutesOnNavigationImpl) {
                return {
                    type: "success",
                    matches
                };
            }
            var partialMatches = matches;
            while(true){
                var _ret = yield* _loop();
                if ((0,_swc_helpers_type_of__WEBPACK_IMPORTED_MODULE_1__._)(_ret) === "object") return _ret.v;
            }
        });
        return _discoverRoutes.apply(this, arguments);
    }
    function _internalSetRoutes(newRoutes) {
        manifest = {};
        inFlightDataRoutes = convertRoutesToDataRoutes(newRoutes, mapRouteProperties, undefined, manifest);
    }
    function patchRoutes(routeId, children) {
        var isNonHMR = inFlightDataRoutes == null;
        var routesToUse = inFlightDataRoutes || dataRoutes;
        patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties);
        // If we are not in the middle of an HMR revalidation and we changed the
        // routes, provide a new identity and trigger a reflow via `updateState`
        // to re-run memoized `router.routes` dependencies.
        // HMR will already update the identity and reflow when it lands
        // `inFlightDataRoutes` in `completeNavigation`
        if (isNonHMR) {
            dataRoutes = [
                ...dataRoutes
            ];
            updateState({});
        }
    }
    router = {
        get basename () {
            return basename;
        },
        get future () {
            return future;
        },
        get state () {
            return state;
        },
        get routes () {
            return dataRoutes;
        },
        get window () {
            return routerWindow;
        },
        initialize,
        subscribe,
        enableScrollRestoration,
        navigate,
        fetch,
        revalidate,
        // Passthrough to history-aware createHref used by useHref so we get proper
        // hash-aware URLs in DOM paths
        createHref: (to)=>init.history.createHref(to),
        encodeLocation: (to)=>init.history.encodeLocation(to),
        getFetcher,
        deleteFetcher: deleteFetcherAndUpdateState,
        dispose,
        getBlocker,
        deleteBlocker,
        patchRoutes,
        _internalFetchControllers: fetchControllers,
        _internalActiveDeferreds: activeDeferreds,
        // TODO: Remove setRoutes, it's temporary to avoid dealing with
        // updating the tree while validating the update algorithm.
        _internalSetRoutes
    };
    return router;
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region createStaticHandler
////////////////////////////////////////////////////////////////////////////////
var UNSAFE_DEFERRED_SYMBOL = Symbol("deferred");
function createStaticHandler(routes, opts) {
    invariant(routes.length > 0, "You must provide a non-empty routes array to createStaticHandler");
    var manifest = {};
    var basename = (opts ? opts.basename : null) || "/";
    var mapRouteProperties;
    if (opts != null && opts.mapRouteProperties) {
        mapRouteProperties = opts.mapRouteProperties;
    } else if (opts != null && opts.detectErrorBoundary) {
        // If they are still using the deprecated version, wrap it with the new API
        var detectErrorBoundary = opts.detectErrorBoundary;
        mapRouteProperties = (route)=>({
                hasErrorBoundary: detectErrorBoundary(route)
            });
    } else {
        mapRouteProperties = defaultMapRouteProperties;
    }
    // Config driven behavior flags
    var future = _extends({
        v7_relativeSplatPath: false,
        v7_throwAbortReason: false
    }, opts ? opts.future : null);
    var dataRoutes = convertRoutesToDataRoutes(routes, mapRouteProperties, undefined, manifest);
    function query(request, _temp3) {
        return _query.apply(this, arguments);
    }
    function _query() {
        _query = /**
   * The query() method is intended for document requests, in which we want to
   * call an optional action and potentially multiple loaders for all nested
   * routes.  It returns a StaticHandlerContext object, which is very similar
   * to the router state (location, loaderData, actionData, errors, etc.) and
   * also adds SSR-specific information such as the statusCode and headers
   * from action/loaders Responses.
   *
   * It _should_ never throw and should report all errors through the
   * returned context.errors object, properly associating errors to their error
   * boundary.  Additionally, it tracks _deepestRenderedBoundaryId which can be
   * used to emulate React error boundaries during SSr by performing a second
   * pass only down to the boundaryId.
   *
   * The one exception where we do not return a StaticHandlerContext is when a
   * redirect response is returned or thrown from any action/loader.  We
   * propagate that out and return the raw Response so the HTTP server can
   * return it directly.
   *
   * - `opts.requestContext` is an optional server context that will be passed
   *   to actions/loaders in the `context` parameter
   * - `opts.skipLoaderErrorBubbling` is an optional parameter that will prevent
   *   the bubbling of errors which allows single-fetch-type implementations
   *   where the client will handle the bubbling and we may need to return data
   *   for the handling route
   */ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(request, _temp3) {
            var { requestContext, skipLoaderErrorBubbling, dataStrategy } = _temp3 === void 0 ? {} : _temp3;
            var url = new URL(request.url);
            var method = request.method;
            var location = createLocation("", createPath(url), null, "default");
            var matches = matchRoutes(dataRoutes, location, basename);
            // SSR supports HEAD requests while SPA doesn't
            if (!isValidMethod(method) && method !== "HEAD") {
                var error = getInternalRouterError(405, {
                    method
                });
                var { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
                return {
                    basename,
                    location,
                    matches: methodNotAllowedMatches,
                    loaderData: {},
                    actionData: null,
                    errors: {
                        [route.id]: error
                    },
                    statusCode: error.status,
                    loaderHeaders: {},
                    actionHeaders: {},
                    activeDeferreds: null
                };
            } else if (!matches) {
                var error1 = getInternalRouterError(404, {
                    pathname: location.pathname
                });
                var { matches: notFoundMatches, route: route1 } = getShortCircuitMatches(dataRoutes);
                return {
                    basename,
                    location,
                    matches: notFoundMatches,
                    loaderData: {},
                    actionData: null,
                    errors: {
                        [route1.id]: error1
                    },
                    statusCode: error1.status,
                    loaderHeaders: {},
                    actionHeaders: {},
                    activeDeferreds: null
                };
            }
            var result = yield queryImpl(request, location, matches, requestContext, dataStrategy || null, skipLoaderErrorBubbling === true, null);
            if (isResponse(result)) {
                return result;
            }
            // When returning StaticHandlerContext, we patch back in the location here
            // since we need it for React Context.  But this helps keep our submit and
            // loadRouteData operating on a Request instead of a Location
            return _extends({
                location,
                basename
            }, result);
        });
        return _query.apply(this, arguments);
    }
    function queryRoute(request, _temp4) {
        return _queryRoute.apply(this, arguments);
    }
    function _queryRoute() {
        _queryRoute = /**
   * The queryRoute() method is intended for targeted route requests, either
   * for fetch ?_data requests or resource route requests.  In this case, we
   * are only ever calling a single action or loader, and we are returning the
   * returned value directly.  In most cases, this will be a Response returned
   * from the action/loader, but it may be a primitive or other value as well -
   * and in such cases the calling context should handle that accordingly.
   *
   * We do respect the throw/return differentiation, so if an action/loader
   * throws, then this method will throw the value.  This is important so we
   * can do proper boundary identification in Remix where a thrown Response
   * must go to the Catch Boundary but a returned Response is happy-path.
   *
   * One thing to note is that any Router-initiated Errors that make sense
   * to associate with a status code will be thrown as an ErrorResponse
   * instance which include the raw Error, such that the calling context can
   * serialize the error as they see fit while including the proper response
   * code.  Examples here are 404 and 405 errors that occur prior to reaching
   * any user-defined loaders.
   *
   * - `opts.routeId` allows you to specify the specific route handler to call.
   *   If not provided the handler will determine the proper route by matching
   *   against `request.url`
   * - `opts.requestContext` is an optional server context that will be passed
   *    to actions/loaders in the `context` parameter
   */ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(request, _temp4) {
            var { routeId, requestContext, dataStrategy } = _temp4 === void 0 ? {} : _temp4;
            var url = new URL(request.url);
            var method = request.method;
            var location = createLocation("", createPath(url), null, "default");
            var matches = matchRoutes(dataRoutes, location, basename);
            // SSR supports HEAD requests while SPA doesn't
            if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
                throw getInternalRouterError(405, {
                    method
                });
            } else if (!matches) {
                throw getInternalRouterError(404, {
                    pathname: location.pathname
                });
            }
            var match = routeId ? matches.find((m)=>m.route.id === routeId) : getTargetMatch(matches, location);
            if (routeId && !match) {
                throw getInternalRouterError(403, {
                    pathname: location.pathname,
                    routeId
                });
            } else if (!match) {
                // This should never hit I don't think?
                throw getInternalRouterError(404, {
                    pathname: location.pathname
                });
            }
            var result = yield queryImpl(request, location, matches, requestContext, dataStrategy || null, false, match);
            if (isResponse(result)) {
                return result;
            }
            var error = result.errors ? Object.values(result.errors)[0] : undefined;
            if (error !== undefined) {
                // If we got back result.errors, that means the loader/action threw
                // _something_ that wasn't a Response, but it's not guaranteed/required
                // to be an `instanceof Error` either, so we have to use throw here to
                // preserve the "error" state outside of queryImpl.
                throw error;
            }
            // Pick off the right state value to return
            if (result.actionData) {
                return Object.values(result.actionData)[0];
            }
            if (result.loaderData) {
                var _result$activeDeferre;
                var data = Object.values(result.loaderData)[0];
                if ((_result$activeDeferre = result.activeDeferreds) != null && _result$activeDeferre[match.route.id]) {
                    data[UNSAFE_DEFERRED_SYMBOL] = result.activeDeferreds[match.route.id];
                }
                return data;
            }
            return undefined;
        });
        return _queryRoute.apply(this, arguments);
    }
    function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch) {
        return _queryImpl.apply(this, arguments);
    }
    function _queryImpl() {
        _queryImpl = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch) {
            invariant(request.signal, "query()/queryRoute() requests must contain an AbortController signal");
            try {
                if (isMutationMethod(request.method.toLowerCase())) {
                    var result = yield submit(request, matches, routeMatch || getTargetMatch(matches, location), requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch != null);
                    return result;
                }
                var result1 = yield loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch);
                return isResponse(result1) ? result1 : _extends({}, result1, {
                    actionData: null,
                    actionHeaders: {}
                });
            } catch (e) {
                // If the user threw/returned a Response in callLoaderOrAction for a
                // `queryRoute` call, we throw the `DataStrategyResult` to bail out early
                // and then return or throw the raw Response here accordingly
                if (isDataStrategyResult(e) && isResponse(e.result)) {
                    if (e.type === ResultType.error) {
                        throw e.result;
                    }
                    return e.result;
                }
                // Redirects are always returned since they don't propagate to catch
                // boundaries
                if (isRedirectResponse(e)) {
                    return e;
                }
                throw e;
            }
        });
        return _queryImpl.apply(this, arguments);
    }
    function submit(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
        return _submit.apply(this, arguments);
    }
    function _submit() {
        _submit = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest) {
            var result;
            if (!actionMatch.route.action && !actionMatch.route.lazy) {
                var error = getInternalRouterError(405, {
                    method: request.method,
                    pathname: new URL(request.url).pathname,
                    routeId: actionMatch.route.id
                });
                if (isRouteRequest) {
                    throw error;
                }
                result = {
                    type: ResultType.error,
                    error
                };
            } else {
                var results = yield callDataStrategy("action", request, [
                    actionMatch
                ], matches, isRouteRequest, requestContext, dataStrategy);
                result = results[actionMatch.route.id];
                if (request.signal.aborted) {
                    throwStaticHandlerAbortedError(request, isRouteRequest, future);
                }
            }
            if (isRedirectResult(result)) {
                // Uhhhh - this should never happen, we should always throw these from
                // callLoaderOrAction, but the type narrowing here keeps TS happy and we
                // can get back on the "throw all redirect responses" train here should
                // this ever happen :/
                throw new Response(null, {
                    status: result.response.status,
                    headers: {
                        Location: result.response.headers.get("Location")
                    }
                });
            }
            if (isDeferredResult(result)) {
                var error1 = getInternalRouterError(400, {
                    type: "defer-action"
                });
                if (isRouteRequest) {
                    throw error1;
                }
                result = {
                    type: ResultType.error,
                    error: error1
                };
            }
            if (isRouteRequest) {
                // Note: This should only be non-Response values if we get here, since
                // isRouteRequest should throw any Response received in callLoaderOrAction
                if (isErrorResult(result)) {
                    throw result.error;
                }
                return {
                    matches: [
                        actionMatch
                    ],
                    loaderData: {},
                    actionData: {
                        [actionMatch.route.id]: result.data
                    },
                    errors: null,
                    // Note: statusCode + headers are unused here since queryRoute will
                    // return the raw Response or value
                    statusCode: 200,
                    loaderHeaders: {},
                    actionHeaders: {},
                    activeDeferreds: null
                };
            }
            // Create a GET request for the loaders
            var loaderRequest = new Request(request.url, {
                headers: request.headers,
                redirect: request.redirect,
                signal: request.signal
            });
            if (isErrorResult(result)) {
                // Store off the pending error - we use it to determine which loaders
                // to call and will commit it when we complete the navigation
                var boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
                var context = yield loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null, [
                    boundaryMatch.route.id,
                    result
                ]);
                // action status codes take precedence over loader status codes
                return _extends({}, context, {
                    statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
                    actionData: null,
                    actionHeaders: _extends({}, result.headers ? {
                        [actionMatch.route.id]: result.headers
                    } : {})
                });
            }
            var context1 = yield loadRouteData(loaderRequest, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, null);
            return _extends({}, context1, {
                actionData: {
                    [actionMatch.route.id]: result.data
                }
            }, result.statusCode ? {
                statusCode: result.statusCode
            } : {}, {
                actionHeaders: result.headers ? {
                    [actionMatch.route.id]: result.headers
                } : {}
            });
        });
        return _submit.apply(this, arguments);
    }
    function loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
        return _loadRouteData.apply(this, arguments);
    }
    function _loadRouteData() {
        _loadRouteData = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, pendingActionResult) {
            var isRouteRequest = routeMatch != null;
            // Short circuit if we have no loaders to run (queryRoute())
            if (isRouteRequest && !(routeMatch != null && routeMatch.route.loader) && !(routeMatch != null && routeMatch.route.lazy)) {
                throw getInternalRouterError(400, {
                    method: request.method,
                    pathname: new URL(request.url).pathname,
                    routeId: routeMatch == null ? void 0 : routeMatch.route.id
                });
            }
            var requestMatches = routeMatch ? [
                routeMatch
            ] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
            var matchesToLoad = requestMatches.filter((m)=>m.route.loader || m.route.lazy);
            // Short circuit if we have no loaders to run (query())
            if (matchesToLoad.length === 0) {
                return {
                    matches,
                    // Add a null for all matched routes for proper revalidation on the client
                    loaderData: matches.reduce((acc, m)=>Object.assign(acc, {
                            [m.route.id]: null
                        }), {}),
                    errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
                        [pendingActionResult[0]]: pendingActionResult[1].error
                    } : null,
                    statusCode: 200,
                    loaderHeaders: {},
                    activeDeferreds: null
                };
            }
            var results = yield callDataStrategy("loader", request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy);
            if (request.signal.aborted) {
                throwStaticHandlerAbortedError(request, isRouteRequest, future);
            }
            // Process and commit output from loaders
            var activeDeferreds = new Map();
            var context = processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling);
            // Add a null for any non-loader matches for proper revalidation on the client
            var executedLoaders = new Set(matchesToLoad.map((match)=>match.route.id));
            matches.forEach((match)=>{
                if (!executedLoaders.has(match.route.id)) {
                    context.loaderData[match.route.id] = null;
                }
            });
            return _extends({}, context, {
                matches,
                activeDeferreds: activeDeferreds.size > 0 ? Object.fromEntries(activeDeferreds.entries()) : null
            });
        });
        return _loadRouteData.apply(this, arguments);
    }
    function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy) {
        return _callDataStrategy.apply(this, arguments);
    }
    function _callDataStrategy() {
        _callDataStrategy = // Utility wrapper for calling dataStrategy server-side without having to
        // pass around the manifest, mapRouteProperties, etc.
        (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(type, request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy) {
            var results = yield callDataStrategyImpl(dataStrategy || defaultDataStrategy, type, null, request, matchesToLoad, matches, null, manifest, mapRouteProperties, requestContext);
            var dataResults = {};
            yield Promise.all(matches.map(/*#__PURE__*/ function() {
                var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(match) {
                    if (!(match.route.id in results)) {
                        return;
                    }
                    var result = results[match.route.id];
                    if (isRedirectDataStrategyResultResult(result)) {
                        var response = result.result;
                        // Throw redirects and let the server handle them with an HTTP redirect
                        throw normalizeRelativeRoutingRedirectResponse(response, request, match.route.id, matches, basename, future.v7_relativeSplatPath);
                    }
                    if (isResponse(result.result) && isRouteRequest) {
                        // For SSR single-route requests, we want to hand Responses back
                        // directly without unwrapping
                        throw result;
                    }
                    dataResults[match.route.id] = yield convertDataStrategyResultToDataResult(result);
                });
                return function(match) {
                    return _ref.apply(this, arguments);
                };
            }()));
            return dataResults;
        });
        return _callDataStrategy.apply(this, arguments);
    }
    return {
        dataRoutes,
        query,
        queryRoute
    };
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Helpers
////////////////////////////////////////////////////////////////////////////////
/**
 * Given an existing StaticHandlerContext and an error thrown at render time,
 * provide an updated StaticHandlerContext suitable for a second SSR render
 */ function getStaticContextFromError(routes, context, error) {
    var newContext = _extends({}, context, {
        statusCode: isRouteErrorResponse(error) ? error.status : 500,
        errors: {
            [context._deepestRenderedBoundaryId || routes[0].id]: error
        }
    });
    return newContext;
}
function throwStaticHandlerAbortedError(request, isRouteRequest, future) {
    if (future.v7_throwAbortReason && request.signal.reason !== undefined) {
        throw request.signal.reason;
    }
    var method = isRouteRequest ? "queryRoute" : "query";
    throw new Error(method + "() call aborted: " + request.method + " " + request.url);
}
function isSubmissionNavigation(opts) {
    return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== undefined);
}
function normalizeTo(location, matches, basename, prependBasename, to, v7_relativeSplatPath, fromRouteId, relative) {
    var contextualMatches;
    var activeRouteMatch;
    if (fromRouteId) {
        // Grab matches up to the calling route so our route-relative logic is
        // relative to the correct source route
        contextualMatches = [];
        for (var match of matches){
            contextualMatches.push(match);
            if (match.route.id === fromRouteId) {
                activeRouteMatch = match;
                break;
            }
        }
    } else {
        contextualMatches = matches;
        activeRouteMatch = matches[matches.length - 1];
    }
    // Resolve the relative path
    var path = resolveTo(to ? to : ".", getResolveToMatches(contextualMatches, v7_relativeSplatPath), stripBasename(location.pathname, basename) || location.pathname, relative === "path");
    // When `to` is not specified we inherit search/hash from the current
    // location, unlike when to="." and we just inherit the path.
    // See https://github.com/remix-run/remix/issues/927
    if (to == null) {
        path.search = location.search;
        path.hash = location.hash;
    }
    // Account for `?index` params when routing to the current location
    if ((to == null || to === "" || to === ".") && activeRouteMatch) {
        var nakedIndex = hasNakedIndexQuery(path.search);
        if (activeRouteMatch.route.index && !nakedIndex) {
            // Add one when we're targeting an index route
            path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
        } else if (!activeRouteMatch.route.index && nakedIndex) {
            // Remove existing ones when we're not
            var params = new URLSearchParams(path.search);
            var indexValues = params.getAll("index");
            params.delete("index");
            indexValues.filter((v)=>v).forEach((v)=>params.append("index", v));
            var qs = params.toString();
            path.search = qs ? "?" + qs : "";
        }
    }
    // If we're operating within a basename, prepend it to the pathname.  If
    // this is a root navigation, then just use the raw basename which allows
    // the basename to have full control over the presence of a trailing slash
    // on root actions
    if (prependBasename && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([
            basename,
            path.pathname
        ]);
    }
    return createPath(path);
}
// Normalize navigation options by converting formMethod=GET formData objects to
// URLSearchParams so they behave identically to links with query params
function normalizeNavigateOptions(normalizeFormMethod, isFetcher, path, opts) {
    // Return location verbatim on non-submission navigations
    if (!opts || !isSubmissionNavigation(opts)) {
        return {
            path
        };
    }
    if (opts.formMethod && !isValidMethod(opts.formMethod)) {
        return {
            path,
            error: getInternalRouterError(405, {
                method: opts.formMethod
            })
        };
    }
    var getInvalidBodyError = ()=>({
            path,
            error: getInternalRouterError(400, {
                type: "invalid-body"
            })
        });
    // Create a Submission on non-GET navigations
    var rawFormMethod = opts.formMethod || "get";
    var formMethod = normalizeFormMethod ? rawFormMethod.toUpperCase() : rawFormMethod.toLowerCase();
    var formAction = stripHashFromPath(path);
    if (opts.body !== undefined) {
        if (opts.formEncType === "text/plain") {
            // text only support POST/PUT/PATCH/DELETE submissions
            if (!isMutationMethod(formMethod)) {
                return getInvalidBodyError();
            }
            var text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
            Array.from(opts.body.entries()).reduce((acc, _ref3)=>{
                var [name, value] = _ref3;
                return "" + acc + name + "=" + value + "\n";
            }, "") : String(opts.body);
            return {
                path,
                submission: {
                    formMethod,
                    formAction,
                    formEncType: opts.formEncType,
                    formData: undefined,
                    json: undefined,
                    text
                }
            };
        } else if (opts.formEncType === "application/json") {
            // json only supports POST/PUT/PATCH/DELETE submissions
            if (!isMutationMethod(formMethod)) {
                return getInvalidBodyError();
            }
            try {
                var json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
                return {
                    path,
                    submission: {
                        formMethod,
                        formAction,
                        formEncType: opts.formEncType,
                        formData: undefined,
                        json,
                        text: undefined
                    }
                };
            } catch (e) {
                return getInvalidBodyError();
            }
        }
    }
    invariant(typeof FormData === "function", "FormData is not available in this environment");
    var searchParams;
    var formData;
    if (opts.formData) {
        searchParams = convertFormDataToSearchParams(opts.formData);
        formData = opts.formData;
    } else if (opts.body instanceof FormData) {
        searchParams = convertFormDataToSearchParams(opts.body);
        formData = opts.body;
    } else if (opts.body instanceof URLSearchParams) {
        searchParams = opts.body;
        formData = convertSearchParamsToFormData(searchParams);
    } else if (opts.body == null) {
        searchParams = new URLSearchParams();
        formData = new FormData();
    } else {
        try {
            searchParams = new URLSearchParams(opts.body);
            formData = convertSearchParamsToFormData(searchParams);
        } catch (e) {
            return getInvalidBodyError();
        }
    }
    var submission = {
        formMethod,
        formAction,
        formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
        formData,
        json: undefined,
        text: undefined
    };
    if (isMutationMethod(submission.formMethod)) {
        return {
            path,
            submission
        };
    }
    // Flatten submission onto URLSearchParams for GET submissions
    var parsedPath = parsePath(path);
    // On GET navigation submissions we can drop the ?index param from the
    // resulting location since all loaders will run.  But fetcher GET submissions
    // only run a single loader so we need to preserve any incoming ?index params
    if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
        searchParams.append("index", "");
    }
    parsedPath.search = "?" + searchParams;
    return {
        path: createPath(parsedPath),
        submission
    };
}
// Filter out all routes at/below any caught error as they aren't going to
// render so we don't need to load them
function getLoaderMatchesUntilBoundary(matches, boundaryId, includeBoundary) {
    if (includeBoundary === void 0) {
        includeBoundary = false;
    }
    var index = matches.findIndex((m)=>m.route.id === boundaryId);
    if (index >= 0) {
        return matches.slice(0, includeBoundary ? index + 1 : index);
    }
    return matches;
}
function getMatchesToLoad(history, state, matches, submission, location, initialHydration, skipActionErrorRevalidation, isRevalidationRequired, cancelledDeferredRoutes, cancelledFetcherLoads, deletedFetchers, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
    var actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : undefined;
    var currentUrl = history.createURL(state.location);
    var nextUrl = history.createURL(location);
    // Pick navigation matches that are net-new or qualify for revalidation
    var boundaryMatches = matches;
    if (initialHydration && state.errors) {
        // On initial hydration, only consider matches up to _and including_ the boundary.
        // This is inclusive to handle cases where a server loader ran successfully,
        // a child server loader bubbled up to this route, but this route has
        // `clientLoader.hydrate` so we want to still run the `clientLoader` so that
        // we have a complete version of `loaderData`
        boundaryMatches = getLoaderMatchesUntilBoundary(matches, Object.keys(state.errors)[0], true);
    } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
        // If an action threw an error, we call loaders up to, but not including the
        // boundary
        boundaryMatches = getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]);
    }
    // Don't revalidate loaders by default after action 4xx/5xx responses
    // when the flag is enabled.  They can still opt-into revalidation via
    // `shouldRevalidate` via `actionResult`
    var actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : undefined;
    var shouldSkipRevalidation = skipActionErrorRevalidation && actionStatus && actionStatus >= 400;
    var navigationMatches = boundaryMatches.filter((match, index)=>{
        var { route } = match;
        if (route.lazy) {
            // We haven't loaded this route yet so we don't know if it's got a loader!
            return true;
        }
        if (route.loader == null) {
            return false;
        }
        if (initialHydration) {
            return shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
        }
        // Always call the loader on new route instances and pending defer cancellations
        if (isNewLoader(state.loaderData, state.matches[index], match) || cancelledDeferredRoutes.some((id)=>id === match.route.id)) {
            return true;
        }
        // This is the default implementation for when we revalidate.  If the route
        // provides it's own implementation, then we give them full control but
        // provide this value so they can leverage it if needed after they check
        // their own specific use cases
        var currentRouteMatch = state.matches[index];
        var nextRouteMatch = match;
        return shouldRevalidateLoader(match, _extends({
            currentUrl,
            currentParams: currentRouteMatch.params,
            nextUrl,
            nextParams: nextRouteMatch.params
        }, submission, {
            actionResult,
            actionStatus,
            defaultShouldRevalidate: shouldSkipRevalidation ? false : // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
            isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
            currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
        }));
    });
    // Pick fetcher.loads that need to be revalidated
    var revalidatingFetchers = [];
    fetchLoadMatches.forEach((f, key)=>{
        // Don't revalidate:
        //  - on initial hydration (shouldn't be any fetchers then anyway)
        //  - if fetcher won't be present in the subsequent render
        //    - no longer matches the URL (v7_fetcherPersist=false)
        //    - was unmounted but persisted due to v7_fetcherPersist=true
        if (initialHydration || !matches.some((m)=>m.route.id === f.routeId) || deletedFetchers.has(key)) {
            return;
        }
        var fetcherMatches = matchRoutes(routesToUse, f.path, basename);
        // If the fetcher path no longer matches, push it in with null matches so
        // we can trigger a 404 in callLoadersAndMaybeResolveData.  Note this is
        // currently only a use-case for Remix HMR where the route tree can change
        // at runtime and remove a route previously loaded via a fetcher
        if (!fetcherMatches) {
            revalidatingFetchers.push({
                key,
                routeId: f.routeId,
                path: f.path,
                matches: null,
                match: null,
                controller: null
            });
            return;
        }
        // Revalidating fetchers are decoupled from the route matches since they
        // load from a static href.  They revalidate based on explicit revalidation
        // (submission, useRevalidator, or X-Remix-Revalidate)
        var fetcher = state.fetchers.get(key);
        var fetcherMatch = getTargetMatch(fetcherMatches, f.path);
        var shouldRevalidate = false;
        if (fetchRedirectIds.has(key)) {
            // Never trigger a revalidation of an actively redirecting fetcher
            shouldRevalidate = false;
        } else if (cancelledFetcherLoads.has(key)) {
            // Always mark for revalidation if the fetcher was cancelled
            cancelledFetcherLoads.delete(key);
            shouldRevalidate = true;
        } else if (fetcher && fetcher.state !== "idle" && fetcher.data === undefined) {
            // If the fetcher hasn't ever completed loading yet, then this isn't a
            // revalidation, it would just be a brand new load if an explicit
            // revalidation is required
            shouldRevalidate = isRevalidationRequired;
        } else {
            // Otherwise fall back on any user-defined shouldRevalidate, defaulting
            // to explicit revalidations only
            shouldRevalidate = shouldRevalidateLoader(fetcherMatch, _extends({
                currentUrl,
                currentParams: state.matches[state.matches.length - 1].params,
                nextUrl,
                nextParams: matches[matches.length - 1].params
            }, submission, {
                actionResult,
                actionStatus,
                defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
            }));
        }
        if (shouldRevalidate) {
            revalidatingFetchers.push({
                key,
                routeId: f.routeId,
                path: f.path,
                matches: fetcherMatches,
                match: fetcherMatch,
                controller: new AbortController()
            });
        }
    });
    return [
        navigationMatches,
        revalidatingFetchers
    ];
}
function shouldLoadRouteOnHydration(route, loaderData, errors) {
    // We dunno if we have a loader - gotta find out!
    if (route.lazy) {
        return true;
    }
    // No loader, nothing to initialize
    if (!route.loader) {
        return false;
    }
    var hasData = loaderData != null && loaderData[route.id] !== undefined;
    var hasError = errors != null && errors[route.id] !== undefined;
    // Don't run if we error'd during SSR
    if (!hasData && hasError) {
        return false;
    }
    // Explicitly opting-in to running on hydration
    if (typeof route.loader === "function" && route.loader.hydrate === true) {
        return true;
    }
    // Otherwise, run if we're not yet initialized with anything
    return !hasData && !hasError;
}
function isNewLoader(currentLoaderData, currentMatch, match) {
    var isNew = // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id;
    // Handle the case that we don't have data for a re-used route, potentially
    // from a prior error or from a cancelled pending deferred
    var isMissingData = currentLoaderData[match.route.id] === undefined;
    // Always load if this is a net-new route or we don't yet have data
    return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
    var currentPath = currentMatch.route.path;
    return(// param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]);
}
function shouldRevalidateLoader(loaderMatch, arg) {
    if (loaderMatch.route.shouldRevalidate) {
        var routeChoice = loaderMatch.route.shouldRevalidate(arg);
        if (typeof routeChoice === "boolean") {
            return routeChoice;
        }
    }
    return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties) {
    var _childrenToPatch;
    var childrenToPatch;
    if (routeId) {
        var route = manifest[routeId];
        invariant(route, "No route found to patch children into: routeId = " + routeId);
        if (!route.children) {
            route.children = [];
        }
        childrenToPatch = route.children;
    } else {
        childrenToPatch = routesToUse;
    }
    // Don't patch in routes we already know about so that `patch` is idempotent
    // to simplify user-land code. This is useful because we re-call the
    // `patchRoutesOnNavigation` function for matched routes with params.
    var uniqueChildren = children.filter((newRoute)=>!childrenToPatch.some((existingRoute)=>isSameRoute(newRoute, existingRoute)));
    var newRoutes = convertRoutesToDataRoutes(uniqueChildren, mapRouteProperties, [
        routeId || "_",
        "patch",
        String(((_childrenToPatch = childrenToPatch) == null ? void 0 : _childrenToPatch.length) || "0")
    ], manifest);
    childrenToPatch.push(...newRoutes);
}
function isSameRoute(newRoute, existingRoute) {
    // Most optimal check is by id
    if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
        return true;
    }
    // Second is by pathing differences
    if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
        return false;
    }
    // Pathless layout routes are trickier since we need to check children.
    // If they have no children then they're the same as far as we can tell
    if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
        return true;
    }
    // Otherwise, we look to see if every child in the new route is already
    // represented in the existing route's children
    return newRoute.children.every((aChild, i)=>{
        var _existingRoute$childr;
        return (_existingRoute$childr = existingRoute.children) == null ? void 0 : _existingRoute$childr.some((bChild)=>isSameRoute(aChild, bChild));
    });
}
function loadLazyRouteModule(route, mapRouteProperties, manifest) {
    return _loadLazyRouteModule.apply(this, arguments);
}
function _loadLazyRouteModule() {
    _loadLazyRouteModule = /**
 * Execute route.lazy() methods to lazily load route modules (loader, action,
 * shouldRevalidate) and update the routeManifest in place which shares objects
 * with dataRoutes so those get updated as well.
 */ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(route, mapRouteProperties, manifest) {
        if (!route.lazy) {
            return;
        }
        var lazyRoute = yield route.lazy();
        // If the lazy route function was executed and removed by another parallel
        // call then we can return - first lazy() to finish wins because the return
        // value of lazy is expected to be static
        if (!route.lazy) {
            return;
        }
        var routeToUpdate = manifest[route.id];
        invariant(routeToUpdate, "No route found in manifest");
        // Update the route in place.  This should be safe because there's no way
        // we could yet be sitting on this route as we can't get there without
        // resolving lazy() first.
        //
        // This is different than the HMR "update" use-case where we may actively be
        // on the route being updated.  The main concern boils down to "does this
        // mutation affect any ongoing navigations or any current state.matches
        // values?".  If not, it should be safe to update in place.
        var routeUpdates = {};
        for(var lazyRouteProperty in lazyRoute){
            var staticRouteValue = routeToUpdate[lazyRouteProperty];
            var isPropertyStaticallyDefined = staticRouteValue !== undefined && // This property isn't static since it should always be updated based
            // on the route updates
            lazyRouteProperty !== "hasErrorBoundary";
            warning(!isPropertyStaticallyDefined, "Route \"" + routeToUpdate.id + "\" has a static property \"" + lazyRouteProperty + "\" " + "defined but its lazy function is also returning a value for this property. " + ("The lazy route property \"" + lazyRouteProperty + "\" will be ignored."));
            if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
                routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
            }
        }
        // Mutate the route with the provided updates.  Do this first so we pass
        // the updated version to mapRouteProperties
        Object.assign(routeToUpdate, routeUpdates);
        // Mutate the `hasErrorBoundary` property on the route based on the route
        // updates and remove the `lazy` function so we don't resolve the lazy
        // route again.
        Object.assign(routeToUpdate, _extends({}, mapRouteProperties(routeToUpdate), {
            lazy: undefined
        }));
    });
    return _loadLazyRouteModule.apply(this, arguments);
}
function defaultDataStrategy(_ref4) {
    return _defaultDataStrategy.apply(this, arguments);
}
function _defaultDataStrategy() {
    _defaultDataStrategy = // Default implementation of `dataStrategy` which fetches all loaders in parallel
    (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(_ref4) {
        var { matches } = _ref4;
        var matchesToLoad = matches.filter((m)=>m.shouldLoad);
        var results = yield Promise.all(matchesToLoad.map((m)=>m.resolve()));
        return results.reduce((acc, result, i)=>Object.assign(acc, {
                [matchesToLoad[i].route.id]: result
            }), {});
    });
    return _defaultDataStrategy.apply(this, arguments);
}
function callDataStrategyImpl(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties, requestContext) {
    return _callDataStrategyImpl.apply(this, arguments);
}
function _callDataStrategyImpl() {
    _callDataStrategyImpl = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(dataStrategyImpl, type, state, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties, requestContext) {
        var loadRouteDefinitionsPromises = matches.map((m)=>m.route.lazy ? loadLazyRouteModule(m.route, mapRouteProperties, manifest) : undefined);
        var dsMatches = matches.map((match, i)=>{
            var loadRoutePromise = loadRouteDefinitionsPromises[i];
            var shouldLoad = matchesToLoad.some((m)=>m.route.id === match.route.id);
            // `resolve` encapsulates route.lazy(), executing the loader/action,
            // and mapping return values/thrown errors to a `DataStrategyResult`.  Users
            // can pass a callback to take fine-grained control over the execution
            // of the loader/action
            var resolve = /*#__PURE__*/ function() {
                var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(handlerOverride) {
                    if (handlerOverride && request.method === "GET" && (match.route.lazy || match.route.loader)) {
                        shouldLoad = true;
                    }
                    return shouldLoad ? callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, requestContext) : Promise.resolve({
                        type: ResultType.data,
                        result: undefined
                    });
                });
                return function resolve(handlerOverride) {
                    return _ref.apply(this, arguments);
                };
            }();
            return _extends({}, match, {
                shouldLoad,
                resolve
            });
        });
        // Send all matches here to allow for a middleware-type implementation.
        // handler will be a no-op for unneeded routes and we filter those results
        // back out below.
        var results = yield dataStrategyImpl({
            matches: dsMatches,
            request,
            params: matches[0].params,
            fetcherKey,
            context: requestContext
        });
        // Wait for all routes to load here but 'swallow the error since we want
        // it to bubble up from the `await loadRoutePromise` in `callLoaderOrAction` -
        // called from `match.resolve()`
        try {
            yield Promise.all(loadRouteDefinitionsPromises);
        } catch (e) {
        // No-op
        }
        return results;
    });
    return _callDataStrategyImpl.apply(this, arguments);
}
function callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, staticContext) {
    return _callLoaderOrAction.apply(this, arguments);
}
function _callLoaderOrAction() {
    _callLoaderOrAction = // Default logic for calling a loader/action is the user has no specified a dataStrategy
    (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(type, request, match, loadRoutePromise, handlerOverride, staticContext) {
        var result;
        var onReject;
        var runHandler = (handler)=>{
            // Setup a promise we can race against so that abort signals short circuit
            var reject;
            // This will never resolve so safe to type it as Promise<DataStrategyResult> to
            // satisfy the function return value
            var abortPromise = new Promise((_, r)=>reject = r);
            onReject = ()=>reject();
            request.signal.addEventListener("abort", onReject);
            var actualHandler = (ctx)=>{
                if (typeof handler !== "function") {
                    return Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ("\"" + type + "\" [routeId: " + match.route.id + "]")));
                }
                return handler({
                    request,
                    params: match.params,
                    context: staticContext
                }, ...ctx !== undefined ? [
                    ctx
                ] : []);
            };
            var handlerPromise = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*() {
                try {
                    var val = yield handlerOverride ? handlerOverride((ctx)=>actualHandler(ctx)) : actualHandler();
                    return {
                        type: "data",
                        result: val
                    };
                } catch (e) {
                    return {
                        type: "error",
                        result: e
                    };
                }
            })();
            return Promise.race([
                handlerPromise,
                abortPromise
            ]);
        };
        try {
            var handler = match.route[type];
            // If we have a route.lazy promise, await that first
            if (loadRoutePromise) {
                if (handler) {
                    // Run statically defined handler in parallel with lazy()
                    var handlerError;
                    var [value] = yield Promise.all([
                        // If the handler throws, don't let it immediately bubble out,
                        // since we need to let the lazy() execution finish so we know if this
                        // route has a boundary that can handle the error
                        runHandler(handler).catch((e)=>{
                            handlerError = e;
                        }),
                        loadRoutePromise
                    ]);
                    if (handlerError !== undefined) {
                        throw handlerError;
                    }
                    result = value;
                } else {
                    // Load lazy route module, then run any returned handler
                    yield loadRoutePromise;
                    handler = match.route[type];
                    if (handler) {
                        // Handler still runs even if we got interrupted to maintain consistency
                        // with un-abortable behavior of handler execution on non-lazy or
                        // previously-lazy-loaded routes
                        result = yield runHandler(handler);
                    } else if (type === "action") {
                        var url = new URL(request.url);
                        var pathname = url.pathname + url.search;
                        throw getInternalRouterError(405, {
                            method: request.method,
                            pathname,
                            routeId: match.route.id
                        });
                    } else {
                        // lazy() route has no loader to run.  Short circuit here so we don't
                        // hit the invariant below that errors on returning undefined.
                        return {
                            type: ResultType.data,
                            result: undefined
                        };
                    }
                }
            } else if (!handler) {
                var url1 = new URL(request.url);
                var pathname1 = url1.pathname + url1.search;
                throw getInternalRouterError(404, {
                    pathname: pathname1
                });
            } else {
                result = yield runHandler(handler);
            }
            invariant(result.result !== undefined, "You defined " + (type === "action" ? "an action" : "a loader") + " for route " + ("\"" + match.route.id + "\" but didn't return anything from your `" + type + "` ") + "function. Please return a value or `null`.");
        } catch (e) {
            // We should already be catching and converting normal handler executions to
            // DataStrategyResults and returning them, so anything that throws here is an
            // unexpected error we still need to wrap
            return {
                type: ResultType.error,
                result: e
            };
        } finally{
            if (onReject) {
                request.signal.removeEventListener("abort", onReject);
            }
        }
        return result;
    });
    return _callLoaderOrAction.apply(this, arguments);
}
function convertDataStrategyResultToDataResult(dataStrategyResult) {
    return _convertDataStrategyResultToDataResult.apply(this, arguments);
}
function _convertDataStrategyResultToDataResult() {
    _convertDataStrategyResultToDataResult = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(dataStrategyResult) {
        var { result, type } = dataStrategyResult;
        if (isResponse(result)) {
            var data;
            try {
                var contentType = result.headers.get("Content-Type");
                // Check between word boundaries instead of startsWith() due to the last
                // paragraph of https://httpwg.org/specs/rfc9110.html#field.content-type
                if (contentType && /\bapplication\/json\b/.test(contentType)) {
                    if (result.body == null) {
                        data = null;
                    } else {
                        data = yield result.json();
                    }
                } else {
                    data = yield result.text();
                }
            } catch (e) {
                return {
                    type: ResultType.error,
                    error: e
                };
            }
            if (type === ResultType.error) {
                return {
                    type: ResultType.error,
                    error: new ErrorResponseImpl(result.status, result.statusText, data),
                    statusCode: result.status,
                    headers: result.headers
                };
            }
            return {
                type: ResultType.data,
                data,
                statusCode: result.status,
                headers: result.headers
            };
        }
        if (type === ResultType.error) {
            if (isDataWithResponseInit(result)) {
                var _result$init2;
                if (result.data instanceof Error) {
                    var _result$init;
                    return {
                        type: ResultType.error,
                        error: result.data,
                        statusCode: (_result$init = result.init) == null ? void 0 : _result$init.status
                    };
                }
                // Convert thrown data() to ErrorResponse instances
                result = new ErrorResponseImpl(((_result$init2 = result.init) == null ? void 0 : _result$init2.status) || 500, undefined, result.data);
            }
            return {
                type: ResultType.error,
                error: result,
                statusCode: isRouteErrorResponse(result) ? result.status : undefined
            };
        }
        if (isDeferredData(result)) {
            var _result$init3, _result$init4;
            return {
                type: ResultType.deferred,
                deferredData: result,
                statusCode: (_result$init3 = result.init) == null ? void 0 : _result$init3.status,
                headers: ((_result$init4 = result.init) == null ? void 0 : _result$init4.headers) && new Headers(result.init.headers)
            };
        }
        if (isDataWithResponseInit(result)) {
            var _result$init5, _result$init6;
            return {
                type: ResultType.data,
                data: result.data,
                statusCode: (_result$init5 = result.init) == null ? void 0 : _result$init5.status,
                headers: (_result$init6 = result.init) != null && _result$init6.headers ? new Headers(result.init.headers) : undefined
            };
        }
        return {
            type: ResultType.data,
            data: result
        };
    });
    return _convertDataStrategyResultToDataResult.apply(this, arguments);
}
// Support relative routing in internal redirects
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename, v7_relativeSplatPath) {
    var location = response.headers.get("Location");
    invariant(location, "Redirects returned/thrown from loaders/actions must have a Location header");
    if (!ABSOLUTE_URL_REGEX.test(location)) {
        var trimmedMatches = matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1);
        location = normalizeTo(new URL(request.url), trimmedMatches, basename, true, location, v7_relativeSplatPath);
        response.headers.set("Location", location);
    }
    return response;
}
function normalizeRedirectLocation(location, currentUrl, basename) {
    if (ABSOLUTE_URL_REGEX.test(location)) {
        // Strip off the protocol+origin for same-origin + same-basename absolute redirects
        var normalizedLocation = location;
        var url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
        var isSameBasename = stripBasename(url.pathname, basename) != null;
        if (url.origin === currentUrl.origin && isSameBasename) {
            return url.pathname + url.search + url.hash;
        }
    }
    return location;
}
// Utility method for creating the Request instances for loaders/actions during
// client-side navigations and fetches.  During SSR we will always have a
// Request instance from the static handler (query/queryRoute)
function createClientSideRequest(history, location, signal, submission) {
    var url = history.createURL(stripHashFromPath(location)).toString();
    var init = {
        signal
    };
    if (submission && isMutationMethod(submission.formMethod)) {
        var { formMethod, formEncType } = submission;
        // Didn't think we needed this but it turns out unlike other methods, patch
        // won't be properly normalized to uppercase and results in a 405 error.
        // See: https://fetch.spec.whatwg.org/#concept-method
        init.method = formMethod.toUpperCase();
        if (formEncType === "application/json") {
            init.headers = new Headers({
                "Content-Type": formEncType
            });
            init.body = JSON.stringify(submission.json);
        } else if (formEncType === "text/plain") {
            // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
            init.body = submission.text;
        } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
            // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
            init.body = convertFormDataToSearchParams(submission.formData);
        } else {
            // Content-Type is inferred (https://fetch.spec.whatwg.org/#dom-request)
            init.body = submission.formData;
        }
    }
    return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
    var searchParams = new URLSearchParams();
    for (var [key, value] of formData.entries()){
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#converting-an-entry-list-to-a-list-of-name-value-pairs
        searchParams.append(key, typeof value === "string" ? value : value.name);
    }
    return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
    var formData = new FormData();
    for (var [key, value] of searchParams.entries()){
        formData.append(key, value);
    }
    return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, skipLoaderErrorBubbling) {
    // Fill in loaderData/errors from our loaders
    var loaderData = {};
    var errors = null;
    var statusCode;
    var foundError = false;
    var loaderHeaders = {};
    var pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : undefined;
    // Process loader results into state.loaderData/state.errors
    matches.forEach((match)=>{
        if (!(match.route.id in results)) {
            return;
        }
        var id = match.route.id;
        var result = results[id];
        invariant(!isRedirectResult(result), "Cannot handle redirect results in processLoaderData");
        if (isErrorResult(result)) {
            var error = result.error;
            // If we have a pending action error, we report it at the highest-route
            // that throws a loader error, and then clear it out to indicate that
            // it was consumed
            if (pendingError !== undefined) {
                error = pendingError;
                pendingError = undefined;
            }
            errors = errors || {};
            if (skipLoaderErrorBubbling) {
                errors[id] = error;
            } else {
                // Look upwards from the matched route for the closest ancestor error
                // boundary, defaulting to the root match.  Prefer higher error values
                // if lower errors bubble to the same boundary
                var boundaryMatch = findNearestBoundary(matches, id);
                if (errors[boundaryMatch.route.id] == null) {
                    errors[boundaryMatch.route.id] = error;
                }
            }
            // Clear our any prior loaderData for the throwing route
            loaderData[id] = undefined;
            // Once we find our first (highest) error, we set the status code and
            // prevent deeper status codes from overriding
            if (!foundError) {
                foundError = true;
                statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
            }
            if (result.headers) {
                loaderHeaders[id] = result.headers;
            }
        } else {
            if (isDeferredResult(result)) {
                activeDeferreds.set(id, result.deferredData);
                loaderData[id] = result.deferredData.data;
                // Error status codes always override success status codes, but if all
                // loaders are successful we take the deepest status code.
                if (result.statusCode != null && result.statusCode !== 200 && !foundError) {
                    statusCode = result.statusCode;
                }
                if (result.headers) {
                    loaderHeaders[id] = result.headers;
                }
            } else {
                loaderData[id] = result.data;
                // Error status codes always override success status codes, but if all
                // loaders are successful we take the deepest status code.
                if (result.statusCode && result.statusCode !== 200 && !foundError) {
                    statusCode = result.statusCode;
                }
                if (result.headers) {
                    loaderHeaders[id] = result.headers;
                }
            }
        }
    });
    // If we didn't consume the pending action error (i.e., all loaders
    // resolved), then consume it here.  Also clear out any loaderData for the
    // throwing route
    if (pendingError !== undefined && pendingActionResult) {
        errors = {
            [pendingActionResult[0]]: pendingError
        };
        loaderData[pendingActionResult[0]] = undefined;
    }
    return {
        loaderData,
        errors,
        statusCode: statusCode || 200,
        loaderHeaders
    };
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults, activeDeferreds) {
    var { loaderData, errors } = processRouteLoaderData(matches, results, pendingActionResult, activeDeferreds, false // This method is only called client side so we always want to bubble
    );
    // Process results from our revalidating fetchers
    revalidatingFetchers.forEach((rf)=>{
        var { key, match, controller } = rf;
        var result = fetcherResults[key];
        invariant(result, "Did not find corresponding fetcher result");
        // Process fetcher non-redirect errors
        if (controller && controller.signal.aborted) {
            // Nothing to do for aborted fetchers
            return;
        } else if (isErrorResult(result)) {
            var boundaryMatch = findNearestBoundary(state.matches, match == null ? void 0 : match.route.id);
            if (!(errors && errors[boundaryMatch.route.id])) {
                errors = _extends({}, errors, {
                    [boundaryMatch.route.id]: result.error
                });
            }
            state.fetchers.delete(key);
        } else if (isRedirectResult(result)) {
            // Should never get here, redirects should get processed above, but we
            // keep this to type narrow to a success result in the else
            invariant(false, "Unhandled fetcher revalidation redirect");
        } else if (isDeferredResult(result)) {
            // Should never get here, deferred data should be awaited for fetchers
            // in resolveDeferredResults
            invariant(false, "Unhandled fetcher deferred data");
        } else {
            var doneFetcher = getDoneFetcher(result.data);
            state.fetchers.set(key, doneFetcher);
        }
    });
    return {
        loaderData,
        errors
    };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
    var mergedLoaderData = _extends({}, newLoaderData);
    for (var match of matches){
        var id = match.route.id;
        if (newLoaderData.hasOwnProperty(id)) {
            if (newLoaderData[id] !== undefined) {
                mergedLoaderData[id] = newLoaderData[id];
            }
        } else if (loaderData[id] !== undefined && match.route.loader) {
            // Preserve existing keys not included in newLoaderData and where a loader
            // wasn't removed by HMR
            mergedLoaderData[id] = loaderData[id];
        }
        if (errors && errors.hasOwnProperty(id)) {
            break;
        }
    }
    return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
    if (!pendingActionResult) {
        return {};
    }
    return isErrorResult(pendingActionResult[1]) ? {
        // Clear out prior actionData on errors
        actionData: {}
    } : {
        actionData: {
            [pendingActionResult[0]]: pendingActionResult[1].data
        }
    };
}
// Find the nearest error boundary, looking upwards from the leaf route (or the
// route specified by routeId) for the closest ancestor error boundary,
// defaulting to the root match
function findNearestBoundary(matches, routeId) {
    var eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m)=>m.route.id === routeId) + 1) : [
        ...matches
    ];
    return eligibleMatches.reverse().find((m)=>m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
    // Prefer a root layout route if present, otherwise shim in a route object
    var route = routes.length === 1 ? routes[0] : routes.find((r)=>r.index || !r.path || r.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [
            {
                params: {},
                pathname: "",
                pathnameBase: "",
                route
            }
        ],
        route
    };
}
function getInternalRouterError(status, _temp5) {
    var { pathname, routeId, method, type, message } = _temp5 === void 0 ? {} : _temp5;
    var statusText = "Unknown Server Error";
    var errorMessage = "Unknown @remix-run/router error";
    if (status === 400) {
        statusText = "Bad Request";
        if (method && pathname && routeId) {
            errorMessage = "You made a " + method + " request to \"" + pathname + "\" but " + ("did not provide a `loader` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
        } else if (type === "defer-action") {
            errorMessage = "defer() is not supported in actions";
        } else if (type === "invalid-body") {
            errorMessage = "Unable to encode submission body";
        }
    } else if (status === 403) {
        statusText = "Forbidden";
        errorMessage = "Route \"" + routeId + "\" does not match URL \"" + pathname + "\"";
    } else if (status === 404) {
        statusText = "Not Found";
        errorMessage = "No route matches URL \"" + pathname + "\"";
    } else if (status === 405) {
        statusText = "Method Not Allowed";
        if (method && pathname && routeId) {
            errorMessage = "You made a " + method.toUpperCase() + " request to \"" + pathname + "\" but " + ("did not provide an `action` for route \"" + routeId + "\", ") + "so there is no way to handle the request.";
        } else if (method) {
            errorMessage = "Invalid request method \"" + method.toUpperCase() + "\"";
        }
    }
    return new ErrorResponseImpl(status || 500, statusText, new Error(errorMessage), true);
}
// Find any returned redirect errors, starting from the lowest match
function findRedirect(results) {
    var entries = Object.entries(results);
    for(var i = entries.length - 1; i >= 0; i--){
        var [key, result] = entries[i];
        if (isRedirectResult(result)) {
            return {
                key,
                result
            };
        }
    }
}
function stripHashFromPath(path) {
    var parsedPath = typeof path === "string" ? parsePath(path) : path;
    return createPath(_extends({}, parsedPath, {
        hash: ""
    }));
}
function isHashChangeOnly(a, b) {
    if (a.pathname !== b.pathname || a.search !== b.search) {
        return false;
    }
    if (a.hash === "") {
        // /page -> /page#hash
        return b.hash !== "";
    } else if (a.hash === b.hash) {
        // /page#hash -> /page#hash
        return true;
    } else if (b.hash !== "") {
        // /page#hash -> /page#other
        return true;
    }
    // If the hash is removed the browser will re-perform a request to the server
    // /page#hash -> /page
    return false;
}
function isDataStrategyResult(result) {
    return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === ResultType.data || result.type === ResultType.error);
}
function isRedirectDataStrategyResultResult(result) {
    return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isDeferredResult(result) {
    return result.type === ResultType.deferred;
}
function isErrorResult(result) {
    return result.type === ResultType.error;
}
function isRedirectResult(result) {
    return (result && result.type) === ResultType.redirect;
}
function isDataWithResponseInit(value) {
    return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isDeferredData(value) {
    var deferred = value;
    return deferred && typeof deferred === "object" && typeof deferred.data === "object" && typeof deferred.subscribe === "function" && typeof deferred.cancel === "function" && typeof deferred.resolveData === "function";
}
function isResponse(value) {
    return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(result) {
    if (!isResponse(result)) {
        return false;
    }
    var status = result.status;
    var location = result.headers.get("Location");
    return status >= 300 && status <= 399 && location != null;
}
function isValidMethod(method) {
    return validRequestMethods.has(method.toLowerCase());
}
function isMutationMethod(method) {
    return validMutationMethods.has(method.toLowerCase());
}
function resolveNavigationDeferredResults(matches, results, signal, currentMatches, currentLoaderData) {
    return _resolveNavigationDeferredResults.apply(this, arguments);
}
function _resolveNavigationDeferredResults() {
    _resolveNavigationDeferredResults = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(matches, results, signal, currentMatches, currentLoaderData) {
        var _loop = function*(index) {
            var [routeId, result] = entries[index];
            var match = matches.find((m)=>(m == null ? void 0 : m.route.id) === routeId);
            // If we don't have a match, then we can have a deferred result to do
            // anything with.  This is for revalidating fetchers where the route was
            // removed during HMR
            if (!match) {
                return "continue";
            }
            var currentMatch = currentMatches.find((m)=>m.route.id === match.route.id);
            var isRevalidatingLoader = currentMatch != null && !isNewRouteInstance(currentMatch, match) && (currentLoaderData && currentLoaderData[match.route.id]) !== undefined;
            if (isDeferredResult(result) && isRevalidatingLoader) {
                // Note: we do not have to touch activeDeferreds here since we race them
                // against the signal in resolveDeferredData and they'll get aborted
                // there if needed
                yield resolveDeferredData(result, signal, false).then((result)=>{
                    if (result) {
                        results[routeId] = result;
                    }
                });
            }
        };
        var entries = Object.entries(results);
        for(var index = 0; index < entries.length; index++)yield* _loop(index);
    });
    return _resolveNavigationDeferredResults.apply(this, arguments);
}
function resolveFetcherDeferredResults(matches, results, revalidatingFetchers) {
    return _resolveFetcherDeferredResults.apply(this, arguments);
}
function _resolveFetcherDeferredResults() {
    _resolveFetcherDeferredResults = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(matches, results, revalidatingFetchers) {
        var _loop = function*(index) {
            var { key, routeId, controller } = revalidatingFetchers[index];
            var result = results[key];
            var match = matches.find((m)=>(m == null ? void 0 : m.route.id) === routeId);
            // If we don't have a match, then we can have a deferred result to do
            // anything with.  This is for revalidating fetchers where the route was
            // removed during HMR
            if (!match) {
                return "continue";
            }
            if (isDeferredResult(result)) {
                // Note: we do not have to touch activeDeferreds here since we race them
                // against the signal in resolveDeferredData and they'll get aborted
                // there if needed
                invariant(controller, "Expected an AbortController for revalidating fetcher deferred result");
                yield resolveDeferredData(result, controller.signal, true).then((result)=>{
                    if (result) {
                        results[key] = result;
                    }
                });
            }
        };
        for(var index = 0; index < revalidatingFetchers.length; index++)yield* _loop(index);
    });
    return _resolveFetcherDeferredResults.apply(this, arguments);
}
function resolveDeferredData(result, signal, unwrap) {
    return _resolveDeferredData.apply(this, arguments);
}
function _resolveDeferredData() {
    _resolveDeferredData = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function*(result, signal, unwrap) {
        if (unwrap === void 0) {
            unwrap = false;
        }
        var aborted = yield result.deferredData.resolveData(signal);
        if (aborted) {
            return;
        }
        if (unwrap) {
            try {
                return {
                    type: ResultType.data,
                    data: result.deferredData.unwrappedData
                };
            } catch (e) {
                // Handle any TrackedPromise._error values encountered while unwrapping
                return {
                    type: ResultType.error,
                    error: e
                };
            }
        }
        return {
            type: ResultType.data,
            data: result.deferredData.data
        };
    });
    return _resolveDeferredData.apply(this, arguments);
}
function hasNakedIndexQuery(search) {
    return new URLSearchParams(search).getAll("index").some((v)=>v === "");
}
function getTargetMatch(matches, location) {
    var search = typeof location === "string" ? parsePath(location).search : location.search;
    if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
        // Return the leaf index route when index is present
        return matches[matches.length - 1];
    }
    // Otherwise grab the deepest "path contributing" match (ignoring index and
    // pathless layout routes)
    var pathMatches = getPathContributingMatches(matches);
    return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
    var { formMethod, formAction, formEncType, text, formData, json } = navigation;
    if (!formMethod || !formAction || !formEncType) {
        return;
    }
    if (text != null) {
        return {
            formMethod,
            formAction,
            formEncType,
            formData: undefined,
            json: undefined,
            text
        };
    } else if (formData != null) {
        return {
            formMethod,
            formAction,
            formEncType,
            formData,
            json: undefined,
            text: undefined
        };
    } else if (json !== undefined) {
        return {
            formMethod,
            formAction,
            formEncType,
            formData: undefined,
            json,
            text: undefined
        };
    }
}
function getLoadingNavigation(location, submission) {
    if (submission) {
        var navigation = {
            state: "loading",
            location,
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text
        };
        return navigation;
    } else {
        var navigation1 = {
            state: "loading",
            location,
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined
        };
        return navigation1;
    }
}
function getSubmittingNavigation(location, submission) {
    var navigation = {
        state: "submitting",
        location,
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text
    };
    return navigation;
}
function getLoadingFetcher(submission, data) {
    if (submission) {
        var fetcher = {
            state: "loading",
            formMethod: submission.formMethod,
            formAction: submission.formAction,
            formEncType: submission.formEncType,
            formData: submission.formData,
            json: submission.json,
            text: submission.text,
            data
        };
        return fetcher;
    } else {
        var fetcher1 = {
            state: "loading",
            formMethod: undefined,
            formAction: undefined,
            formEncType: undefined,
            formData: undefined,
            json: undefined,
            text: undefined,
            data
        };
        return fetcher1;
    }
}
function getSubmittingFetcher(submission, existingFetcher) {
    var fetcher = {
        state: "submitting",
        formMethod: submission.formMethod,
        formAction: submission.formAction,
        formEncType: submission.formEncType,
        formData: submission.formData,
        json: submission.json,
        text: submission.text,
        data: existingFetcher ? existingFetcher.data : undefined
    };
    return fetcher;
}
function getDoneFetcher(data) {
    var fetcher = {
        state: "idle",
        formMethod: undefined,
        formAction: undefined,
        formEncType: undefined,
        formData: undefined,
        json: undefined,
        text: undefined,
        data
    };
    return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
    try {
        var sessionPositions = _window.sessionStorage.getItem(TRANSITIONS_STORAGE_KEY);
        if (sessionPositions) {
            var json = JSON.parse(sessionPositions);
            for (var [k, v] of Object.entries(json || {})){
                if (v && Array.isArray(v)) {
                    transitions.set(k, new Set(v || []));
                }
            }
        }
    } catch (e) {
    // no-op, use default empty object
    }
}
function persistAppliedTransitions(_window, transitions) {
    if (transitions.size > 0) {
        var json = {};
        for (var [k, v] of transitions){
            json[k] = [
                ...v
            ];
        }
        try {
            _window.sessionStorage.setItem(TRANSITIONS_STORAGE_KEY, JSON.stringify(json));
        } catch (error) {
            warning(false, "Failed to save applied view transitions in sessionStorage (" + error + ").");
        }
    }
}
//#endregion
 //# sourceMappingURL=router.js.map


}),
"./node_modules/react-router-dom/dist/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AbortedDeferredError: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.AbortedDeferredError; },
  Await: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Await; },
  BrowserRouter: function() { return BrowserRouter; },
  Form: function() { return Form; },
  HashRouter: function() { return HashRouter; },
  Link: function() { return Link; },
  MemoryRouter: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.MemoryRouter; },
  NavLink: function() { return NavLink; },
  Navigate: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Navigate; },
  NavigationType: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.Action; },
  Outlet: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Outlet; },
  Route: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Route; },
  Router: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Router; },
  RouterProvider: function() { return RouterProvider; },
  Routes: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.Routes; },
  ScrollRestoration: function() { return ScrollRestoration; },
  UNSAFE_DataRouterContext: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext; },
  UNSAFE_DataRouterStateContext: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext; },
  UNSAFE_ErrorResponseImpl: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_ErrorResponseImpl; },
  UNSAFE_FetchersContext: function() { return FetchersContext; },
  UNSAFE_LocationContext: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_LocationContext; },
  UNSAFE_NavigationContext: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext; },
  UNSAFE_RouteContext: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext; },
  UNSAFE_ViewTransitionContext: function() { return ViewTransitionContext; },
  UNSAFE_useRouteId: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRouteId; },
  UNSAFE_useScrollRestoration: function() { return useScrollRestoration; },
  createBrowserRouter: function() { return createBrowserRouter; },
  createHashRouter: function() { return createHashRouter; },
  createMemoryRouter: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createMemoryRouter; },
  createPath: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.createPath; },
  createRoutesFromChildren: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createRoutesFromChildren; },
  createRoutesFromElements: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.createRoutesFromElements; },
  createSearchParams: function() { return createSearchParams; },
  defer: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.defer; },
  generatePath: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.generatePath; },
  isRouteErrorResponse: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.isRouteErrorResponse; },
  json: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.json; },
  matchPath: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath; },
  matchRoutes: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.matchRoutes; },
  parsePath: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.parsePath; },
  redirect: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.redirect; },
  redirectDocument: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.redirectDocument; },
  renderMatches: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.renderMatches; },
  replace: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.replace; },
  resolvePath: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_2__.resolvePath; },
  unstable_HistoryRouter: function() { return HistoryRouter; },
  unstable_usePrompt: function() { return usePrompt; },
  useActionData: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useActionData; },
  useAsyncError: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useAsyncError; },
  useAsyncValue: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useAsyncValue; },
  useBeforeUnload: function() { return useBeforeUnload; },
  useBlocker: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useBlocker; },
  useFetcher: function() { return useFetcher; },
  useFetchers: function() { return useFetchers; },
  useFormAction: function() { return useFormAction; },
  useHref: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useHref; },
  useInRouterContext: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useInRouterContext; },
  useLinkClickHandler: function() { return useLinkClickHandler; },
  useLoaderData: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useLoaderData; },
  useLocation: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation; },
  useMatch: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useMatch; },
  useMatches: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useMatches; },
  useNavigate: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate; },
  useNavigation: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigation; },
  useNavigationType: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigationType; },
  useOutlet: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useOutlet; },
  useOutletContext: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useOutletContext; },
  useParams: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useParams; },
  useResolvedPath: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath; },
  useRevalidator: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRevalidator; },
  useRouteError: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRouteError; },
  useRouteLoaderData: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRouteLoaderData; },
  useRoutes: function() { return /* reexport safe */ react_router__WEBPACK_IMPORTED_MODULE_3__.useRoutes; },
  useSearchParams: function() { return useSearchParams; },
  useSubmit: function() { return useSubmit; },
  useViewTransitionState: function() { return useViewTransitionState; }
});
/* ESM import */var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/@rsbuild/core/node_modules/@swc/helpers/esm/_async_to_generator.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?da31");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("webpack/sharing/consume/default/react-dom/react-dom?7f38");
/* ESM import */var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* ESM import */var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@remix-run/router/dist/router.js");
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ 
var _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$(), _s6 = $RefreshSig$(), _s7 = $RefreshSig$(), _s8 = $RefreshSig$(), _s9 = $RefreshSig$(), _s10 = $RefreshSig$(), _s11 = $RefreshSig$(), _s12 = $RefreshSig$(), _s13 = $RefreshSig$(), _s14 = $RefreshSig$(), _s15 = $RefreshSig$(), _s16 = $RefreshSig$(), _s17 = $RefreshSig$(), _s18 = $RefreshSig$(), _s19 = $RefreshSig$(), _s20 = $RefreshSig$();






function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
    return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
    return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
    return event.button === 0 && // Ignore everything but left clicks
    (!target || target === "_self") && // Let browser handle "target=_blank" etc.
    !isModifiedEvent(event) // Ignore clicks with modifier keys
    ;
}
/**
 * Creates a URLSearchParams object using the given initializer.
 *
 * This is identical to `new URLSearchParams(init)` except it also
 * supports arrays as values in the object form of the initializer
 * instead of just strings. This is convenient when you need multiple
 * values for a given key, but don't want to use an array initializer.
 *
 * For example, instead of:
 *
 *   let searchParams = new URLSearchParams([
 *     ['sort', 'name'],
 *     ['sort', 'price']
 *   ]);
 *
 * you can do:
 *
 *   let searchParams = createSearchParams({
 *     sort: ['name', 'price']
 *   });
 */ function createSearchParams(init) {
    if (init === void 0) {
        init = "";
    }
    return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key)=>{
        var value = init[key];
        return memo.concat(Array.isArray(value) ? value.map((v)=>[
                key,
                v
            ]) : [
            [
                key,
                value
            ]
        ]);
    }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
    var searchParams = createSearchParams(locationSearch);
    if (defaultSearchParams) {
        // Use `defaultSearchParams.forEach(...)` here instead of iterating of
        // `defaultSearchParams.keys()` to work-around a bug in Firefox related to
        // web extensions. Relevant Bugzilla tickets:
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1414602
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1023984
        defaultSearchParams.forEach((_, key)=>{
            if (!searchParams.has(key)) {
                defaultSearchParams.getAll(key).forEach((value)=>{
                    searchParams.append(key, value);
                });
            }
        });
    }
    return searchParams;
}
// One-time check for submitter support
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
    if (_formDataSupportsSubmitter === null) {
        try {
            new FormData(document.createElement("form"), // @ts-expect-error if FormData supports the submitter parameter, this will throw
            0);
            _formDataSupportsSubmitter = false;
        } catch (e) {
            _formDataSupportsSubmitter = true;
        }
    }
    return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = new Set([
    "application/x-www-form-urlencoded",
    "multipart/form-data",
    "text/plain"
]);
function getFormEncType(encType) {
    if (encType != null && !supportedFormEncTypes.has(encType)) {
         true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "\"" + encType + "\" is not a valid `encType` for `<Form>`/`<fetcher.Form>` " + ("and will default to \"" + defaultEncType + "\"")) : 0;
        return null;
    }
    return encType;
}
function getFormSubmissionInfo(target, basename) {
    var method;
    var action;
    var encType;
    var formData;
    var body;
    if (isFormElement(target)) {
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        var attr = target.getAttribute("action");
        action = attr ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(attr, basename) : null;
        method = target.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
        formData = new FormData(target);
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
        var form = target.form;
        if (form == null) {
            throw new Error("Cannot submit a <button> or <input type=\"submit\"> without a <form>");
        }
        // <button>/<input type="submit"> may override attributes of <form>
        // When grabbing the action from the element, it will have had the basename
        // prefixed to ensure non-JS scenarios work, so strip it since we'll
        // re-prefix in the router
        var attr1 = target.getAttribute("formaction") || form.getAttribute("action");
        action = attr1 ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(attr1, basename) : null;
        method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
        encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
        // Build a FormData object populated from a form and submitter
        formData = new FormData(form, target);
        // If this browser doesn't support the `FormData(el, submitter)` format,
        // then tack on the submitter value at the end.  This is a lightweight
        // solution that is not 100% spec compliant.  For complete support in older
        // browsers, consider using the `formdata-submitter-polyfill` package
        if (!isFormDataSubmitterSupported()) {
            var { name, type, value } = target;
            if (type === "image") {
                var prefix = name ? name + "." : "";
                formData.append(prefix + "x", "0");
                formData.append(prefix + "y", "0");
            } else if (name) {
                formData.append(name, value);
            }
        }
    } else if (isHtmlElement(target)) {
        throw new Error("Cannot submit element that is not <form>, <button>, or " + "<input type=\"submit|image\">");
    } else {
        method = defaultMethod;
        action = null;
        encType = defaultEncType;
        body = target;
    }
    // Send body for <Form encType="text/plain" so we encode it into text
    if (formData && encType === "text/plain") {
        body = formData;
        formData = undefined;
    }
    return {
        action,
        method: method.toLowerCase(),
        encType,
        formData,
        body
    };
}
var _excluded = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition"
], _excluded2 = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children"
], _excluded3 = [
    "fetcherKey",
    "navigate",
    "reloadDocument",
    "replace",
    "state",
    "method",
    "action",
    "onSubmit",
    "relative",
    "preventScrollReset",
    "viewTransition"
];
// HEY YOU! DON'T TOUCH THIS VARIABLE!
//
// It is replaced with the proper version at build time via a babel plugin in
// the rollup config.
//
// Export a global property onto the window for React Router detection by the
// Core Web Vitals Technology Report.  This way they can configure the `wappalyzer`
// to detect and properly classify live websites as being built with React Router:
// https://github.com/HTTPArchive/wappalyzer/blob/main/src/technologies/r.json
var REACT_ROUTER_VERSION = "6";
try {
    window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e) {
// no-op
}
function createBrowserRouter(routes, opts) {
    return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
        routes,
        mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_mapRouteProperties,
        dataStrategy: opts == null ? void 0 : opts.dataStrategy,
        patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation,
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function createHashRouter(routes, opts) {
    return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
            window: opts == null ? void 0 : opts.window
        }),
        hydrationData: (opts == null ? void 0 : opts.hydrationData) || parseHydrationData(),
        routes,
        mapRouteProperties: react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_mapRouteProperties,
        dataStrategy: opts == null ? void 0 : opts.dataStrategy,
        patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation,
        window: opts == null ? void 0 : opts.window
    }).initialize();
}
function parseHydrationData() {
    var _window;
    var state = (_window = window) == null ? void 0 : _window.__staticRouterHydrationData;
    if (state && state.errors) {
        state = _extends({}, state, {
            errors: deserializeErrors(state.errors)
        });
    }
    return state;
}
function deserializeErrors(errors) {
    if (!errors) return null;
    var entries = Object.entries(errors);
    var serialized = {};
    for (var [key, val] of entries){
        // Hey you!  If you change this, please change the corresponding logic in
        // serializeErrors in react-router-dom/server.tsx :)
        if (val && val.__type === "RouteErrorResponse") {
            serialized[key] = new react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_ErrorResponseImpl(val.status, val.statusText, val.data, val.internal === true);
        } else if (val && val.__type === "Error") {
            // Attempt to reconstruct the right type of Error (i.e., ReferenceError)
            if (val.__subType) {
                var ErrorConstructor = window[val.__subType];
                if (typeof ErrorConstructor === "function") {
                    try {
                        // @ts-expect-error
                        var error = new ErrorConstructor(val.message);
                        // Wipe away the client-side stack trace.  Nothing to fill it in with
                        // because we don't serialize SSR stack traces for security reasons
                        error.stack = "";
                        serialized[key] = error;
                    } catch (e) {
                    // no-op - fall through and create a normal Error
                    }
                }
            }
            if (serialized[key] == null) {
                var error1 = new Error(val.message);
                // Wipe away the client-side stack trace.  Nothing to fill it in with
                // because we don't serialize SSR stack traces for security reasons
                error1.stack = "";
                serialized[key] = error1;
            }
        } else {
            serialized[key] = val;
        }
    }
    return serialized;
}
var ViewTransitionContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    isTransitioning: false
});
if (true) {
    ViewTransitionContext.displayName = "ViewTransition";
}
var FetchersContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(new Map());
if (true) {
    FetchersContext.displayName = "Fetchers";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Components
////////////////////////////////////////////////////////////////////////////////
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ var START_TRANSITION = "startTransition";
var startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];
var FLUSH_SYNC = "flushSync";
var flushSyncImpl = react_dom__WEBPACK_IMPORTED_MODULE_1__[FLUSH_SYNC];
var USE_ID = "useId";
var useIdImpl = react__WEBPACK_IMPORTED_MODULE_0__[USE_ID];
function startTransitionSafe(cb) {
    if (startTransitionImpl) {
        startTransitionImpl(cb);
    } else {
        cb();
    }
}
function flushSyncSafe(cb) {
    if (flushSyncImpl) {
        flushSyncImpl(cb);
    } else {
        cb();
    }
}
class Deferred {
    constructor(){
        this.status = "pending";
        this.promise = new Promise((resolve, reject)=>{
            this.resolve = (value)=>{
                if (this.status === "pending") {
                    this.status = "resolved";
                    resolve(value);
                }
            };
            this.reject = (reason)=>{
                if (this.status === "pending") {
                    this.status = "rejected";
                    reject(reason);
                }
            };
        });
    }
}
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function RouterProvider(_ref) {
    _s();
    var { fallbackElement, router, future } = _ref;
    var [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
    var [pendingState, setPendingState] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    var [vtContext, setVtContext] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        isTransitioning: false
    });
    var [renderDfd, setRenderDfd] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    var [transition, setTransition] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    var [interruption, setInterruption] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
    var fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useRef(new Map());
    var { v7_startTransition } = future || {};
    var optInStartTransition = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((cb)=>{
        if (v7_startTransition) {
            startTransitionSafe(cb);
        } else {
            cb();
        }
    }, [
        v7_startTransition
    ]);
    var setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState, _ref2)=>{
        var { deletedFetchers, flushSync: flushSync, viewTransitionOpts: viewTransitionOpts } = _ref2;
        deletedFetchers.forEach((key)=>fetcherData.current.delete(key));
        newState.fetchers.forEach((fetcher, key)=>{
            if (fetcher.data !== undefined) {
                fetcherData.current.set(key, fetcher.data);
            }
        });
        var isViewTransitionUnavailable = router.window == null || router.window.document == null || typeof router.window.document.startViewTransition !== "function";
        // If this isn't a view transition or it's not available in this browser,
        // just update and be done with it
        if (!viewTransitionOpts || isViewTransitionUnavailable) {
            if (flushSync) {
                flushSyncSafe(()=>setStateImpl(newState));
            } else {
                optInStartTransition(()=>setStateImpl(newState));
            }
            return;
        }
        // flushSync + startViewTransition
        if (flushSync) {
            // Flush through the context to mark DOM elements as transition=ing
            flushSyncSafe(()=>{
                // Cancel any pending transitions
                if (transition) {
                    renderDfd && renderDfd.resolve();
                    transition.skipTransition();
                }
                setVtContext({
                    isTransitioning: true,
                    flushSync: true,
                    currentLocation: viewTransitionOpts.currentLocation,
                    nextLocation: viewTransitionOpts.nextLocation
                });
            });
            // Update the DOM
            var t = router.window.document.startViewTransition(()=>{
                flushSyncSafe(()=>setStateImpl(newState));
            });
            // Clean up after the animation completes
            t.finished.finally(()=>{
                flushSyncSafe(()=>{
                    setRenderDfd(undefined);
                    setTransition(undefined);
                    setPendingState(undefined);
                    setVtContext({
                        isTransitioning: false
                    });
                });
            });
            flushSyncSafe(()=>setTransition(t));
            return;
        }
        // startTransition + startViewTransition
        if (transition) {
            // Interrupting an in-progress transition, cancel and let everything flush
            // out, and then kick off a new transition from the interruption state
            renderDfd && renderDfd.resolve();
            transition.skipTransition();
            setInterruption({
                state: newState,
                currentLocation: viewTransitionOpts.currentLocation,
                nextLocation: viewTransitionOpts.nextLocation
            });
        } else {
            // Completed navigation update with opted-in view transitions, let 'er rip
            setPendingState(newState);
            setVtContext({
                isTransitioning: true,
                flushSync: false,
                currentLocation: viewTransitionOpts.currentLocation,
                nextLocation: viewTransitionOpts.nextLocation
            });
        }
    }, [
        router.window,
        transition,
        renderDfd,
        fetcherData,
        optInStartTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    // When we start a view transition, create a Deferred we can use for the
    // eventual "completed" render
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (vtContext.isTransitioning && !vtContext.flushSync) {
            setRenderDfd(new Deferred());
        }
    }, [
        vtContext
    ]);
    // Once the deferred is created, kick off startViewTransition() to update the
    // DOM and then wait on the Deferred to resolve (indicating the DOM update has
    // happened)
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (renderDfd && pendingState && router.window) {
            var newState = pendingState;
            var renderPromise = renderDfd.promise;
            var transition = router.window.document.startViewTransition(/*#__PURE__*/ (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_4__._)(function*() {
                optInStartTransition(()=>setStateImpl(newState));
                yield renderPromise;
            }));
            transition.finished.finally(()=>{
                setRenderDfd(undefined);
                setTransition(undefined);
                setPendingState(undefined);
                setVtContext({
                    isTransitioning: false
                });
            });
            setTransition(transition);
        }
    }, [
        optInStartTransition,
        pendingState,
        renderDfd,
        router.window
    ]);
    // When the new location finally renders and is committed to the DOM, this
    // effect will run to resolve the transition
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
            renderDfd.resolve();
        }
    }, [
        renderDfd,
        transition,
        state.location,
        pendingState
    ]);
    // If we get interrupted with a new navigation during a transition, we skip
    // the active transition, let it cleanup, then kick it off again here
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (!vtContext.isTransitioning && interruption) {
            setPendingState(interruption.state);
            setVtContext({
                isTransitioning: true,
                flushSync: false,
                currentLocation: interruption.currentLocation,
                nextLocation: interruption.nextLocation
            });
            setInterruption(undefined);
        }
    }, [
        vtContext.isTransitioning,
        interruption
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
         true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using " + "`v7_partialHydration`, use a `HydrateFallback` component instead") : 0;
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>{
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: (n)=>router.navigate(n),
            push: (to, state, opts)=>router.navigate(to, {
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                }),
            replace: (to, state, opts)=>router.navigate(to, {
                    replace: true,
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                })
        };
    }, [
        router
    ]);
    var basename = router.basename || "/";
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            router,
            navigator,
            static: false,
            basename
        }), [
        router,
        navigator,
        basename
    ]);
    var routerFuture = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }), [
        router.future.v7_relativeSplatPath
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext.Provider, {
        value: state
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(FetchersContext.Provider, {
        value: fetcherData.current
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTransitionContext.Provider, {
        value: vtContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: routerFuture
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(MemoizedDataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))))), null);
}
_s(RouterProvider, "vVuyb8Zjb66md2gE+qeKUDChF8E=");
_c = RouterProvider;
// Memoize to avoid re-renders when updating `ViewTransitionContext`
var MemoizedDataRoutes = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.memo(DataRoutes);
_c1 = MemoizedDataRoutes;
function DataRoutes(_ref3) {
    var { routes, future, state } = _ref3;
    return (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRoutesImpl)(routes, undefined, state, future);
}
_c2 = DataRoutes;
/**
 * A `<Router>` for use in web browsers. Provides the cleanest URLs.
 */ function BrowserRouter(_ref4) {
    _s1();
    var { basename, children, future, window: _$window } = _ref4;
    var historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    if (historyRef.current == null) {
        historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createBrowserHistory)({
            window: _$window,
            v5Compat: true
        });
    }
    var history = historyRef.current;
    var [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        action: history.action,
        location: history.location
    });
    var { v7_startTransition } = future || {};
    var setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState)=>{
        v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
_s1(BrowserRouter, "4hUJUqHydkgNqll0yBdcphm8IwU=");
_c3 = BrowserRouter;
/**
 * A `<Router>` for use in web browsers. Stores the location in the hash
 * portion of the URL so it is not sent to the server.
 */ function HashRouter(_ref5) {
    _s2();
    var { basename, children, future, window: _$window } = _ref5;
    var historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    if (historyRef.current == null) {
        historyRef.current = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createHashHistory)({
            window: _$window,
            v5Compat: true
        });
    }
    var history = historyRef.current;
    var [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        action: history.action,
        location: history.location
    });
    var { v7_startTransition } = future || {};
    var setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState)=>{
        v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
_s2(HashRouter, "4hUJUqHydkgNqll0yBdcphm8IwU=");
_c4 = HashRouter;
/**
 * A `<Router>` that accepts a pre-instantiated history object. It's important
 * to note that using your own history object is highly discouraged and may add
 * two versions of the history library to your bundles unless you use the same
 * version of the history library that React Router uses internally.
 */ function HistoryRouter(_ref6) {
    _s3();
    var { basename, children, future, history } = _ref6;
    var [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        action: history.action,
        location: history.location
    });
    var { v7_startTransition } = future || {};
    var setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState)=>{
        v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
_s3(HistoryRouter, "qZQfXZolk6/V9qSWbR9WFN9lmtM=");
_c5 = HistoryRouter;
if (true) {
    HistoryRouter.displayName = "unstable_HistoryRouter";
}
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
/**
 * The public API for rendering a history-aware `<a>`.
 */ var Link = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(_s4(function LinkWithRef(_ref7, ref) {
    _s4();
    var { onClick, relative, reloadDocument, replace, state, target, to, preventScrollReset, viewTransition } = _ref7, rest = _objectWithoutPropertiesLoose(_ref7, _excluded);
    var { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
    // Rendered into <a href> for absolute URLs
    var absoluteHref;
    var isExternal = false;
    if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
        // Render the absolute href server- and client-side
        absoluteHref = to;
        // Only check for external origins client-side
        if (isBrowser) {
            try {
                var currentUrl = new URL(window.location.href);
                var targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
                var path = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(targetUrl.pathname, basename);
                if (targetUrl.origin === currentUrl.origin && path != null) {
                    // Strip the protocol/origin/basename for same-origin absolute URLs
                    to = path + targetUrl.search + targetUrl.hash;
                } else {
                    isExternal = true;
                }
            } catch (e) {
                // We can't do external URL detection without a valid URL
                 true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "<Link to=\"" + to + "\"> contains an invalid URL which will probably break " + "when clicked - please update to a valid URL path.") : 0;
            }
        }
    }
    // Rendered into <a href> for relative URLs
    var href = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useHref)(to, {
        relative
    });
    var internalOnClick = useLinkClickHandler(to, {
        replace,
        state,
        target,
        preventScrollReset,
        relative,
        viewTransition
    });
    function handleClick(event) {
        if (onClick) onClick(event);
        if (!event.defaultPrevented) {
            internalOnClick(event);
        }
    }
    return(/*#__PURE__*/ // eslint-disable-next-line jsx-a11y/anchor-has-content
    react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", _extends({}, rest, {
        href: absoluteHref || href,
        onClick: isExternal || reloadDocument ? onClick : handleClick,
        ref: ref,
        target: target
    })));
}, "Yajx66sAxOifLkmxXXPYSkQDUHU=", false, function() {
    return [
        react_router__WEBPACK_IMPORTED_MODULE_3__.useHref,
        useLinkClickHandler
    ];
}));
_c6 = Link;
if (true) {
    Link.displayName = "Link";
}
/**
 * A `<Link>` wrapper that knows if it's "active" or not.
 */ var NavLink = /*#__PURE__*/ _s5(react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(_c7 = _s5(function NavLinkWithRef(_ref8, ref) {
    _s5();
    var { "aria-current": ariaCurrentProp = "page", caseSensitive = false, className: classNameProp = "", end = false, style: styleProp, to, viewTransition, children } = _ref8, rest = _objectWithoutPropertiesLoose(_ref8, _excluded2);
    var path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
        relative: rest.relative
    });
    var location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    var routerState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext);
    var { navigator, basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
    var isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) && viewTransition === true;
    var toPathname = navigator.encodeLocation ? navigator.encodeLocation(path).pathname : path.pathname;
    var locationPathname = location.pathname;
    var nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
        locationPathname = locationPathname.toLowerCase();
        nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
        toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
        nextLocationPathname = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(nextLocationPathname, basename) || nextLocationPathname;
    }
    // If the `to` has a trailing slash, look at that exact spot.  Otherwise,
    // we're looking for a slash _after_ what's in `to`.  For example:
    //
    // <NavLink to="/users"> and <NavLink to="/users/">
    // both want to look for a / at index 6 to match URL `/users/matt`
    var endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    var isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    var isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    var renderProps = {
        isActive,
        isPending,
        isTransitioning
    };
    var ariaCurrent = isActive ? ariaCurrentProp : undefined;
    var className;
    if (typeof classNameProp === "function") {
        className = classNameProp(renderProps);
    } else {
        // If the className prop is not a function, we use a default `active`
        // class for <NavLink />s that are active. In v5 `active` was the default
        // value for `activeClassName`, but we are removing that API and can still
        // use the old default behavior for a cleaner upgrade path and keep the
        // simple styling rules working as they currently do.
        className = [
            classNameProp,
            isActive ? "active" : null,
            isPending ? "pending" : null,
            isTransitioning ? "transitioning" : null
        ].filter(Boolean).join(" ");
    }
    var style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Link, _extends({}, rest, {
        "aria-current": ariaCurrent,
        className: className,
        ref: ref,
        style: style,
        to: to,
        viewTransition: viewTransition
    }), typeof children === "function" ? children(renderProps) : children);
}, "wq4xN8HClr2yZaXEsc0te6Q4lW4=", false, function() {
    return [
        react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath,
        react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation,
        useViewTransitionState
    ];
})), "wq4xN8HClr2yZaXEsc0te6Q4lW4=", false, function() {
    return [
        react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath,
        react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation,
        useViewTransitionState
    ];
});
_c8 = NavLink;
if (true) {
    NavLink.displayName = "NavLink";
}
/**
 * A `@remix-run/router`-aware `<form>`. It behaves like a normal form except
 * that the interaction with the server is with `fetch` instead of new document
 * requests, allowing components to add nicer UX to the page as the form is
 * submitted and returns with data.
 */ var Form = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(_s6((_ref9, forwardedRef)=>{
    _s6();
    var { fetcherKey, navigate, reloadDocument, replace, state, method = defaultMethod, action, onSubmit, relative, preventScrollReset, viewTransition } = _ref9, props = _objectWithoutPropertiesLoose(_ref9, _excluded3);
    var submit = useSubmit();
    var formAction = useFormAction(action, {
        relative
    });
    var formMethod = method.toLowerCase() === "get" ? "get" : "post";
    var submitHandler = (event)=>{
        onSubmit && onSubmit(event);
        if (event.defaultPrevented) return;
        event.preventDefault();
        var submitter = event.nativeEvent.submitter;
        var submitMethod = (submitter == null ? void 0 : submitter.getAttribute("formmethod")) || method;
        submit(submitter || event.currentTarget, {
            fetcherKey,
            method: submitMethod,
            navigate,
            replace,
            state,
            relative,
            preventScrollReset,
            viewTransition
        });
    };
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", _extends({
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler
    }, props));
}, "Two0rNo7idaOcTMlttOijS29YtQ=", false, function() {
    return [
        useSubmit,
        useFormAction
    ];
}));
_c9 = Form;
if (true) {
    Form.displayName = "Form";
}
/**
 * This component will emulate the browser's scroll restoration on location
 * changes.
 */ function ScrollRestoration(_ref10) {
    _s7();
    var { getKey, storageKey } = _ref10;
    useScrollRestoration({
        getKey,
        storageKey
    });
    return null;
}
_s7(ScrollRestoration, "i2Pmz86I+GEMTyh0cl3DeIWLJmI=", false, function() {
    return [
        useScrollRestoration
    ];
});
_c10 = ScrollRestoration;
if (true) {
    ScrollRestoration.displayName = "ScrollRestoration";
}
//#endregion
////////////////////////////////////////////////////////////////////////////////
//#region Hooks
////////////////////////////////////////////////////////////////////////////////
var DataRouterHook;
(function(DataRouterHook) {
    DataRouterHook["UseScrollRestoration"] = "useScrollRestoration";
    DataRouterHook["UseSubmit"] = "useSubmit";
    DataRouterHook["UseSubmitFetcher"] = "useSubmitFetcher";
    DataRouterHook["UseFetcher"] = "useFetcher";
    DataRouterHook["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook) {
    DataRouterStateHook["UseFetcher"] = "useFetcher";
    DataRouterStateHook["UseFetchers"] = "useFetchers";
    DataRouterStateHook["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
// Internal hooks
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    _s8();
    var ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterContext);
    !ctx ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
    return ctx;
}
_s8(useDataRouterContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
function useDataRouterState(hookName) {
    _s9();
    var state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_DataRouterStateContext);
    !state ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
    return state;
}
_s9(useDataRouterState, "kdLImxeHm3898p7tqgy8Fclg5s8=");
// External hooks
/**
 * Handles the click behavior for router `<Link>` components. This is useful if
 * you need to create custom `<Link>` components with the same click behavior we
 * use in our exported `<Link>`.
 */ function useLinkClickHandler(to, _temp) {
    _s10();
    var { target, replace: replaceProp, state, preventScrollReset, relative, viewTransition } = _temp === void 0 ? {} : _temp;
    var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    var location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    var path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
        relative
    });
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((event)=>{
        if (shouldProcessLinkClick(event, target)) {
            event.preventDefault();
            // If the URL hasn't changed, a regular <a> will do a replace instead of
            // a push, so do the same here unless the replace prop is explicitly set
            var replace = replaceProp !== undefined ? replaceProp : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(location) === (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
            navigate(to, {
                replace,
                state,
                preventScrollReset,
                relative,
                viewTransition
            });
        }
    }, [
        location,
        navigate,
        path,
        replaceProp,
        state,
        target,
        to,
        preventScrollReset,
        relative,
        viewTransition
    ]);
}
_s10(useLinkClickHandler, "BZYjyGAa1ZxLRntdbX23tSdFTkI=", false, function() {
    return [
        react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate,
        react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation,
        react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath
    ];
});
/**
 * A convenient wrapper for reading and writing search parameters via the
 * URLSearchParams interface.
 */ function useSearchParams(defaultInit) {
    _s11();
     true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not " + "support the URLSearchParams API. If you need to support Internet " + "Explorer 11, we recommend you load a polyfill such as " + "https://github.com/ungap/url-search-params.") : 0;
    var defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createSearchParams(defaultInit));
    var hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    var location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    var searchParams = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>// Only merge in the defaults if we haven't yet called setSearchParams.
        // Once we call that we want those to take precedence, otherwise you can't
        // remove a param with setSearchParams({}) if it has an initial value
        getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current), [
        location.search
    ]);
    var navigate = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
    var setSearchParams = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((nextInit, navigateOptions)=>{
        var newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
        hasSetSearchParamsRef.current = true;
        navigate("?" + newSearchParams, navigateOptions);
    }, [
        navigate,
        searchParams
    ]);
    return [
        searchParams,
        setSearchParams
    ];
}
_s11(useSearchParams, "OI4Q5UoLuAWNlbh84tDqEBFb7zQ=", false, function() {
    return [
        react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation,
        react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigate
    ];
});
function validateClientSideSubmission() {
    if (typeof document === "undefined") {
        throw new Error("You are calling submit during the server render. " + "Try calling submit within a `useEffect` or callback instead.");
    }
}
var fetcherId = 0;
var getUniqueFetcherId = ()=>"__" + String(++fetcherId) + "__";
/**
 * Returns a function that may be used to programmatically submit a form (or
 * some arbitrary data) to the server.
 */ function useSubmit() {
    _s12();
    var { router } = useDataRouterContext(DataRouterHook.UseSubmit);
    var { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
    var currentRouteId = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_useRouteId)();
    return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(target, options) {
        if (options === void 0) {
            options = {};
        }
        validateClientSideSubmission();
        var { action, method, encType, formData, body } = getFormSubmissionInfo(target, basename);
        if (options.navigate === false) {
            var key = options.fetcherKey || getUniqueFetcherId();
            router.fetch(key, currentRouteId, options.action || action, {
                preventScrollReset: options.preventScrollReset,
                formData,
                body,
                formMethod: options.method || method,
                formEncType: options.encType || encType,
                flushSync: options.flushSync
            });
        } else {
            router.navigate(options.action || action, {
                preventScrollReset: options.preventScrollReset,
                formData,
                body,
                formMethod: options.method || method,
                formEncType: options.encType || encType,
                replace: options.replace,
                state: options.state,
                fromRouteId: currentRouteId,
                flushSync: options.flushSync,
                viewTransition: options.viewTransition
            });
        }
    }, [
        router,
        basename,
        currentRouteId
    ]);
}
_s12(useSubmit, "mA3zi2Au3iJBSgB63hGhKHztn/0=", false, function() {
    return [
        useDataRouterContext
    ];
});
// v7: Eventually we should deprecate this entirely in favor of using the
// router method directly?
function useFormAction(action, _temp2) {
    _s13();
    var { relative } = _temp2 === void 0 ? {} : _temp2;
    var { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
    var routeContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext);
    !routeContext ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFormAction must be used inside a RouteContext") : 0 : void 0;
    var [match] = routeContext.matches.slice(-1);
    // Shallow clone path so we can modify it below, otherwise we modify the
    // object referenced by useMemo inside useResolvedPath
    var path = _extends({}, (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(action ? action : ".", {
        relative
    }));
    // If no action was specified, browsers will persist current search params
    // when determining the path, so match that behavior
    // https://github.com/remix-run/remix/issues/927
    var location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    if (action == null) {
        // Safe to write to this directly here since if action was undefined, we
        // would have called useResolvedPath(".") which will never include a search
        path.search = location.search;
        // When grabbing search params from the URL, remove any included ?index param
        // since it might not apply to our contextual route.  We add it back based
        // on match.route.index below
        var params = new URLSearchParams(path.search);
        var indexValues = params.getAll("index");
        var hasNakedIndexParam = indexValues.some((v)=>v === "");
        if (hasNakedIndexParam) {
            params.delete("index");
            indexValues.filter((v)=>v).forEach((v)=>params.append("index", v));
            var qs = params.toString();
            path.search = qs ? "?" + qs : "";
        }
    }
    if ((!action || action === ".") && match.route.index) {
        path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    }
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the form action.  If this is a root navigation, then just use
    // the raw basename which allows the basename to have full control over the
    // presence of a trailing slash on root actions
    if (basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : (0,react_router__WEBPACK_IMPORTED_MODULE_2__.joinPaths)([
            basename,
            path.pathname
        ]);
    }
    return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.createPath)(path);
}
_s13(useFormAction, "JoBz/6khkD9g4enzYtwaKbHAM0k=", false, function() {
    return [
        react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath,
        react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation
    ];
});
// TODO: (v7) Change the useFetcher generic default from `any` to `unknown`
/**
 * Interacts with route loaders and actions without causing a navigation. Great
 * for any interaction that stays on the same page.
 */ function useFetcher(_temp3) {
    _s14();
    var _route$matches;
    var { key } = _temp3 === void 0 ? {} : _temp3;
    var { router } = useDataRouterContext(DataRouterHook.UseFetcher);
    var state = useDataRouterState(DataRouterStateHook.UseFetcher);
    var fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FetchersContext);
    var route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_RouteContext);
    var routeId = (_route$matches = route.matches[route.matches.length - 1]) == null ? void 0 : _route$matches.route.id;
    !fetcherData ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher must be used inside a FetchersContext") : 0 : void 0;
    !route ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher must be used inside a RouteContext") : 0 : void 0;
    !(routeId != null) ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "useFetcher can only be used on routes that contain a unique \"id\"") : 0 : void 0;
    // Fetcher key handling
    // OK to call conditionally to feature detect `useId`
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var defaultKey = useIdImpl ? useIdImpl() : "";
    var [fetcherKey, setFetcherKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(key || defaultKey);
    if (key && key !== fetcherKey) {
        setFetcherKey(key);
    } else if (!fetcherKey) {
        // We will only fall through here when `useId` is not available
        setFetcherKey(getUniqueFetcherId());
    }
    // Registration/cleanup
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        router.getFetcher(fetcherKey);
        return ()=>{
            // Tell the router we've unmounted - if v7_fetcherPersist is enabled this
            // will not delete immediately but instead queue up a delete after the
            // fetcher returns to an `idle` state
            router.deleteFetcher(fetcherKey);
        };
    }, [
        router,
        fetcherKey
    ]);
    // Fetcher additions
    var load = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((href, opts)=>{
        !routeId ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "No routeId available for fetcher.load()") : 0 : void 0;
        router.fetch(fetcherKey, routeId, href, opts);
    }, [
        fetcherKey,
        routeId,
        router
    ]);
    var submitImpl = useSubmit();
    var submit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((target, opts)=>{
        submitImpl(target, _extends({}, opts, {
            navigate: false,
            fetcherKey
        }));
    }, [
        fetcherKey,
        submitImpl
    ]);
    var FetcherForm = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>{
        var FetcherForm = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((props, ref)=>{
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form, _extends({}, props, {
                navigate: false,
                fetcherKey: fetcherKey,
                ref: ref
            }));
        });
        if (true) {
            FetcherForm.displayName = "fetcher.Form";
        }
        return FetcherForm;
    }, [
        fetcherKey
    ]);
    // Exposed FetcherWithComponents
    var fetcher = state.fetchers.get(fetcherKey) || react_router__WEBPACK_IMPORTED_MODULE_2__.IDLE_FETCHER;
    var data = fetcherData.get(fetcherKey);
    var fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>_extends({
            Form: FetcherForm,
            submit,
            load
        }, fetcher, {
            data
        }), [
        FetcherForm,
        submit,
        load,
        fetcher,
        data
    ]);
    return fetcherWithComponents;
}
_s14(useFetcher, "Pi5nEnAS3jm7jeOFNH/8ffWEhJU=", false, function() {
    return [
        useDataRouterContext,
        useDataRouterState,
        useIdImpl,
        useSubmit
    ];
});
/**
 * Provides all fetchers currently on the page. Useful for layouts and parent
 * routes that need to provide pending/optimistic UI regarding the fetch.
 */ function useFetchers() {
    _s15();
    var state = useDataRouterState(DataRouterStateHook.UseFetchers);
    return Array.from(state.fetchers.entries()).map((_ref11)=>{
        var [key, fetcher] = _ref11;
        return _extends({}, fetcher, {
            key
        });
    });
}
_s15(useFetchers, "ksx0pUFe0Qs5FOQ3bx/kwJ/n1pg=", false, function() {
    return [
        useDataRouterState
    ];
});
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
/**
 * When rendered inside a RouterProvider, will restore scroll positions on navigations
 */ function useScrollRestoration(_temp4) {
    _s16();
    var { getKey, storageKey } = _temp4 === void 0 ? {} : _temp4;
    var { router } = useDataRouterContext(DataRouterHook.UseScrollRestoration);
    var { restoreScrollPosition, preventScrollReset } = useDataRouterState(DataRouterStateHook.UseScrollRestoration);
    var { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(react_router__WEBPACK_IMPORTED_MODULE_3__.UNSAFE_NavigationContext);
    var location = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
    var matches = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useMatches)();
    var navigation = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigation)();
    // Trigger manual scroll restoration while we're active
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        window.history.scrollRestoration = "manual";
        return ()=>{
            window.history.scrollRestoration = "auto";
        };
    }, []);
    // Save positions on pagehide
    usePageHide(react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{
        if (navigation.state === "idle") {
            var key = (getKey ? getKey(location, matches) : null) || location.key;
            savedScrollPositions[key] = window.scrollY;
        }
        try {
            sessionStorage.setItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY, JSON.stringify(savedScrollPositions));
        } catch (error) {
             true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_warning)(false, "Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (" + error + ").") : 0;
        }
        window.history.scrollRestoration = "auto";
    }, [
        storageKey,
        getKey,
        navigation.state,
        location,
        matches
    ]));
    // Read in any saved scroll locations
    if (typeof document !== "undefined") {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>{
            try {
                var sessionPositions = sessionStorage.getItem(storageKey || SCROLL_RESTORATION_STORAGE_KEY);
                if (sessionPositions) {
                    savedScrollPositions = JSON.parse(sessionPositions);
                }
            } catch (e) {
            // no-op, use default empty object
            }
        }, [
            storageKey
        ]);
        // Enable scroll restoration in the router
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>{
            var getKeyWithoutBasename = getKey && basename !== "/" ? (location, matches)=>getKey(_extends({}, location, {
                    pathname: (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(location.pathname, basename) || location.pathname
                }), matches) : getKey;
            var disableScrollRestoration = router == null ? void 0 : router.enableScrollRestoration(savedScrollPositions, ()=>window.scrollY, getKeyWithoutBasename);
            return ()=>disableScrollRestoration && disableScrollRestoration();
        }, [
            router,
            basename,
            getKey
        ]);
        // Restore scrolling when state.restoreScrollPosition changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>{
            // Explicit false means don't do anything (used for submissions)
            if (restoreScrollPosition === false) {
                return;
            }
            // been here before, scroll to it
            if (typeof restoreScrollPosition === "number") {
                window.scrollTo(0, restoreScrollPosition);
                return;
            }
            // try to scroll to the hash
            if (location.hash) {
                var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
                if (el) {
                    el.scrollIntoView();
                    return;
                }
            }
            // Don't reset if this navigation opted out
            if (preventScrollReset === true) {
                return;
            }
            // otherwise go to the top on new locations
            window.scrollTo(0, 0);
        }, [
            location,
            restoreScrollPosition,
            preventScrollReset
        ]);
    }
}
_s16(useScrollRestoration, "vdEr3LoXckw3LPbj40nmhOfvxQ4=", false, function() {
    return [
        useDataRouterContext,
        useDataRouterState,
        react_router__WEBPACK_IMPORTED_MODULE_3__.useLocation,
        react_router__WEBPACK_IMPORTED_MODULE_3__.useMatches,
        react_router__WEBPACK_IMPORTED_MODULE_3__.useNavigation,
        usePageHide
    ];
});
/**
 * Setup a callback to be fired on the window's `beforeunload` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function useBeforeUnload(callback, options) {
    _s17();
    var { capture } = options || {};
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        var opts = capture != null ? {
            capture
        } : undefined;
        window.addEventListener("beforeunload", callback, opts);
        return ()=>{
            window.removeEventListener("beforeunload", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
_s17(useBeforeUnload, "OD7bBpZva5O2jO+Puf00hKivP7c=");
/**
 * Setup a callback to be fired on the window's `pagehide` event. This is
 * useful for saving some data to `window.localStorage` just before the page
 * refreshes.  This event is better supported than beforeunload across browsers.
 *
 * Note: The `callback` argument should be a function created with
 * `React.useCallback()`.
 */ function usePageHide(callback, options) {
    _s18();
    var { capture } = options || {};
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        var opts = capture != null ? {
            capture
        } : undefined;
        window.addEventListener("pagehide", callback, opts);
        return ()=>{
            window.removeEventListener("pagehide", callback, opts);
        };
    }, [
        callback,
        capture
    ]);
}
_s18(usePageHide, "OD7bBpZva5O2jO+Puf00hKivP7c=");
/**
 * Wrapper around useBlocker to show a window.confirm prompt to users instead
 * of building a custom UI with useBlocker.
 *
 * Warning: This has *a lot of rough edges* and behaves very differently (and
 * very incorrectly in some cases) across browsers if user click addition
 * back/forward navigations while the confirm is open.  Use at your own risk.
 */ function usePrompt(_ref12) {
    _s19();
    var { when, message } = _ref12;
    var blocker = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useBlocker)(when);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (blocker.state === "blocked") {
            var proceed = window.confirm(message);
            if (proceed) {
                // This timeout is needed to avoid a weird "race" on POP navigations
                // between the `window.history` revert navigation and the result of
                // `window.confirm`
                setTimeout(blocker.proceed, 0);
            } else {
                blocker.reset();
            }
        }
    }, [
        blocker,
        message
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (blocker.state === "blocked" && !when) {
            blocker.reset();
        }
    }, [
        blocker,
        when
    ]);
}
_s19(usePrompt, "jYtya6TSjG38CYszy4JXllb2X4U=", false, function() {
    return [
        react_router__WEBPACK_IMPORTED_MODULE_3__.useBlocker
    ];
});
/**
 * Return a boolean indicating if there is an active view transition to the
 * given href.  You can use this value to render CSS classes or viewTransitionName
 * styles onto your elements
 *
 * @param href The destination href
 * @param [opts.relative] Relative routing type ("route" | "path")
 */ function useViewTransitionState(to, opts) {
    _s20();
    if (opts === void 0) {
        opts = {};
    }
    var vtContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ViewTransitionContext);
    !(vtContext != null) ?  true ? (0,react_router__WEBPACK_IMPORTED_MODULE_2__.UNSAFE_invariant)(false, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  " + "Did you accidentally import `RouterProvider` from `react-router`?") : 0 : void 0;
    var { basename } = useDataRouterContext(DataRouterHook.useViewTransitionState);
    var path = (0,react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath)(to, {
        relative: opts.relative
    });
    if (!vtContext.isTransitioning) {
        return false;
    }
    var currentPath = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
    var nextPath = (0,react_router__WEBPACK_IMPORTED_MODULE_2__.stripBasename)(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
    // Transition is active if we're going to or coming from the indicated
    // destination.  This ensures that other PUSH navigations that reverse
    // an indicated transition apply.  I.e., on the list view you have:
    //
    //   <NavLink to="/details/1" viewTransition>
    //
    // If you click the breadcrumb back to the list view:
    //
    //   <NavLink to="/list" viewTransition>
    //
    // We should apply the transition because it's indicated as active going
    // from /list -> /details/1 and therefore should be active on the reverse
    // (even though this isn't strictly a POP reverse)
    return (0,react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath)(path.pathname, nextPath) != null || (0,react_router__WEBPACK_IMPORTED_MODULE_2__.matchPath)(path.pathname, currentPath) != null;
}
_s20(useViewTransitionState, "lzGZGowfzVlnxtaSSU6dvWwwv+E=", false, function() {
    return [
        useDataRouterContext,
        react_router__WEBPACK_IMPORTED_MODULE_3__.useResolvedPath
    ];
});
//#endregion
 //# sourceMappingURL=index.js.map
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
$RefreshReg$(_c, "RouterProvider");
$RefreshReg$(_c1, "MemoizedDataRoutes");
$RefreshReg$(_c2, "DataRoutes");
$RefreshReg$(_c3, "BrowserRouter");
$RefreshReg$(_c4, "HashRouter");
$RefreshReg$(_c5, "HistoryRouter");
$RefreshReg$(_c6, "Link");
$RefreshReg$(_c7, "NavLink$React.forwardRef");
$RefreshReg$(_c8, "NavLink");
$RefreshReg$(_c9, "Form");
$RefreshReg$(_c10, "ScrollRestoration");


}),
"./node_modules/react-router/dist/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AbortedDeferredError: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError; },
  Await: function() { return Await; },
  MemoryRouter: function() { return MemoryRouter; },
  Navigate: function() { return Navigate; },
  NavigationType: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action; },
  Outlet: function() { return Outlet; },
  Route: function() { return Route; },
  Router: function() { return Router; },
  RouterProvider: function() { return RouterProvider; },
  Routes: function() { return Routes; },
  UNSAFE_DataRouterContext: function() { return DataRouterContext; },
  UNSAFE_DataRouterStateContext: function() { return DataRouterStateContext; },
  UNSAFE_LocationContext: function() { return LocationContext; },
  UNSAFE_NavigationContext: function() { return NavigationContext; },
  UNSAFE_RouteContext: function() { return RouteContext; },
  UNSAFE_mapRouteProperties: function() { return mapRouteProperties; },
  UNSAFE_useRouteId: function() { return useRouteId; },
  UNSAFE_useRoutesImpl: function() { return useRoutesImpl; },
  createMemoryRouter: function() { return createMemoryRouter; },
  createPath: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createPath; },
  createRoutesFromChildren: function() { return createRoutesFromChildren; },
  createRoutesFromElements: function() { return createRoutesFromChildren; },
  defer: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.defer; },
  generatePath: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.generatePath; },
  isRouteErrorResponse: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse; },
  json: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.json; },
  matchPath: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath; },
  matchRoutes: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes; },
  parsePath: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath; },
  redirect: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirect; },
  redirectDocument: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.redirectDocument; },
  renderMatches: function() { return renderMatches; },
  replace: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.replace; },
  resolvePath: function() { return /* reexport safe */ _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolvePath; },
  useActionData: function() { return useActionData; },
  useAsyncError: function() { return useAsyncError; },
  useAsyncValue: function() { return useAsyncValue; },
  useBlocker: function() { return useBlocker; },
  useHref: function() { return useHref; },
  useInRouterContext: function() { return useInRouterContext; },
  useLoaderData: function() { return useLoaderData; },
  useLocation: function() { return useLocation; },
  useMatch: function() { return useMatch; },
  useMatches: function() { return useMatches; },
  useNavigate: function() { return useNavigate; },
  useNavigation: function() { return useNavigation; },
  useNavigationType: function() { return useNavigationType; },
  useOutlet: function() { return useOutlet; },
  useOutletContext: function() { return useOutletContext; },
  useParams: function() { return useParams; },
  useResolvedPath: function() { return useResolvedPath; },
  useRevalidator: function() { return useRevalidator; },
  useRouteError: function() { return useRouteError; },
  useRouteLoaderData: function() { return useRouteLoaderData; },
  useRoutes: function() { return useRoutes; }
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("webpack/sharing/consume/default/react/react?da31");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var _remix_run_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@remix-run/router/dist/router.js");
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var _s = $RefreshSig$(), _s1 = $RefreshSig$(), _s2 = $RefreshSig$(), _s3 = $RefreshSig$(), _s4 = $RefreshSig$(), _s5 = $RefreshSig$(), _s6 = $RefreshSig$(), _s7 = $RefreshSig$(), _s8 = $RefreshSig$(), _s9 = $RefreshSig$(), _s10 = $RefreshSig$(), _s11 = $RefreshSig$(), _s12 = $RefreshSig$(), _s13 = $RefreshSig$(), _s14 = $RefreshSig$(), _s15 = $RefreshSig$(), _s16 = $RefreshSig$(), _s17 = $RefreshSig$(), _s18 = $RefreshSig$(), _s19 = $RefreshSig$(), _s20 = $RefreshSig$(), _s21 = $RefreshSig$(), _s22 = $RefreshSig$(), _s23 = $RefreshSig$(), _s24 = $RefreshSig$(), _s25 = $RefreshSig$(), _s26 = $RefreshSig$(), _s27 = $RefreshSig$(), _s28 = $RefreshSig$(), _s29 = $RefreshSig$(), _s30 = $RefreshSig$(), _s31 = $RefreshSig$(), _s32 = $RefreshSig$(), _s33 = $RefreshSig$(), _s34 = $RefreshSig$(), _s35 = $RefreshSig$(), _s36 = $RefreshSig$(), _s37 = $RefreshSig$(), _s38 = $RefreshSig$(), _s39 = $RefreshSig$();



function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function _extends(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
// Create react-specific types from the agnostic types in @remix-run/router to
// export from react-router
var DataRouterContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
    DataRouterContext.displayName = "DataRouter";
}
var DataRouterStateContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
    DataRouterStateContext.displayName = "DataRouterState";
}
var AwaitContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
    AwaitContext.displayName = "Await";
}
/**
 * A Navigator is a "location changer"; it's how you get to different locations.
 *
 * Every history instance conforms to the Navigator interface, but the
 * distinction is useful primarily when it comes to the low-level `<Router>` API
 * where both the location and a navigator must be provided separately in order
 * to avoid "tearing" that may occur in a suspense-enabled app if the action
 * and/or location were to be read directly from the history instance.
 */ var NavigationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
    NavigationContext.displayName = "Navigation";
}
var LocationContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
    LocationContext.displayName = "Location";
}
var RouteContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext({
    outlet: null,
    matches: [],
    isDataRoute: false
});
if (true) {
    RouteContext.displayName = "Route";
}
var RouteErrorContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (true) {
    RouteErrorContext.displayName = "RouteError";
}
/**
 * Returns the full href for the given "to" value. This is useful for building
 * custom links that are also accessible and preserve right-click behavior.
 *
 * @see https://reactrouter.com/hooks/use-href
 */ function useHref(to, _temp) {
    _s();
    var { relative } = _temp === void 0 ? {} : _temp;
    !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component.") : 0 : void 0;
    var { basename, navigator } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    var { hash, pathname, search } = useResolvedPath(to, {
        relative
    });
    var joinedPathname = pathname;
    // If we're operating within a basename, prepend it to the pathname prior
    // to creating the href.  If this is a root navigation, then just use the raw
    // basename which allows the basename to have full control over the presence
    // of a trailing slash on root links
    if (basename !== "/") {
        joinedPathname = pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([
            basename,
            pathname
        ]);
    }
    return navigator.createHref({
        pathname: joinedPathname,
        search,
        hash
    });
}
_s(useHref, "rGGf6evAqoN3mWGkxXhzdvQMWyw=", false, function() {
    return [
        useInRouterContext,
        useResolvedPath
    ];
});
/**
 * Returns true if this component is a descendant of a `<Router>`.
 *
 * @see https://reactrouter.com/hooks/use-in-router-context
 */ function useInRouterContext() {
    _s1();
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext) != null;
}
_s1(useInRouterContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
/**
 * Returns the current location object, which represents the current URL in web
 * browsers.
 *
 * Note: If you're using this it may mean you're doing some of your own
 * "routing" in your app, and we'd like to know what your use case is. We may
 * be able to provide something higher-level to better suit your needs.
 *
 * @see https://reactrouter.com/hooks/use-location
 */ function useLocation() {
    _s2();
    !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component.") : 0 : void 0;
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location;
}
_s2(useLocation, "pnBsrBzOSKrTAsifUkfhXR0cM+Y=", false, function() {
    return [
        useInRouterContext
    ];
});
/**
 * Returns the current navigation action which describes how the router came to
 * the current location, either by a pop, push, or replace on the history stack.
 *
 * @see https://reactrouter.com/hooks/use-navigation-type
 */ function useNavigationType() {
    _s3();
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).navigationType;
}
_s3(useNavigationType, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
/**
 * Returns a PathMatch object if the given pattern matches the current URL.
 * This is useful for components that need to know "active" state, e.g.
 * `<NavLink>`.
 *
 * @see https://reactrouter.com/hooks/use-match
 */ function useMatch(pattern) {
    _s4();
    !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component.") : 0 : void 0;
    var { pathname } = useLocation();
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchPath)(pattern, (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_decodePath)(pathname)), [
        pathname,
        pattern
    ]);
}
_s4(useMatch, "nQeQy8ml7gNYO2EbpP3HWNGpSDs=", false, function() {
    return [
        useInRouterContext,
        useLocation
    ];
});
/**
 * The interface for the navigate() function returned from useNavigate().
 */ var navigateEffectWarning = "You should call navigate() in a React.useEffect(), not when " + "your component is first rendered.";
// Mute warnings for calls to useNavigate in SSR environments
function useIsomorphicLayoutEffect(cb) {
    _s5();
    var isStatic = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static;
    if (!isStatic) {
        // We should be able to get rid of this once react 18.3 is released
        // See: https://github.com/facebook/react/pull/26395
        // eslint-disable-next-line react-hooks/rules-of-hooks
        react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb);
    }
}
_s5(useIsomorphicLayoutEffect, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
/**
 * Returns an imperative method for changing the location. Used by `<Link>`s, but
 * may also be used by other elements to change the location.
 *
 * @see https://reactrouter.com/hooks/use-navigate
 */ function useNavigate() {
    _s6();
    var { isDataRoute } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
_s6(useNavigate, "3i7MQnPpiPAGSiIiwm8rZLKRF8w=", false, function() {
    return [
        useNavigateStable,
        useNavigateUnstable
    ];
});
function useNavigateUnstable() {
    _s7();
    !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component.") : 0 : void 0;
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
    var { basename, future, navigator } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    var { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    var { pathname: locationPathname } = useLocation();
    var routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
    var activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    var navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(to, options) {
        if (options === void 0) {
            options = {};
        }
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : 0;
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our history listener yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            navigator.go(to);
            return;
        }
        var path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
        // If we're operating within a basename, prepend it to the pathname prior
        // to handing off to history (but only if we're not in a data router,
        // otherwise it'll prepend the basename inside of the router).
        // If this is a root navigation, then we navigate to the raw basename
        // which allows the basename to have full control over the presence of a
        // trailing slash on root links
        if (dataRouterContext == null && basename !== "/") {
            path.pathname = path.pathname === "/" ? basename : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([
                basename,
                path.pathname
            ]);
        }
        (!!options.replace ? navigator.replace : navigator.push)(path, options.state, options);
    }, [
        basename,
        navigator,
        routePathnamesJson,
        locationPathname,
        dataRouterContext
    ]);
    return navigate;
}
_s7(useNavigateUnstable, "tUQDCcinF6M4+U0yp9u8DvP9joE=", false, function() {
    return [
        useInRouterContext,
        useLocation,
        useIsomorphicLayoutEffect
    ];
});
var OutletContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/**
 * Returns the context (if provided) for the child route at this level of the route
 * hierarchy.
 * @see https://reactrouter.com/hooks/use-outlet-context
 */ function useOutletContext() {
    _s8();
    return react__WEBPACK_IMPORTED_MODULE_0__.useContext(OutletContext);
}
_s8(useOutletContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
/**
 * Returns the element for the child route at this level of the route
 * hierarchy. Used internally by `<Outlet>` to render child routes.
 *
 * @see https://reactrouter.com/hooks/use-outlet
 */ function useOutlet(context) {
    _s9();
    var outlet = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext).outlet;
    if (outlet) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider, {
            value: context
        }, outlet);
    }
    return outlet;
}
_s9(useOutlet, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
/**
 * Returns an object of key/value pairs of the dynamic params from the current
 * URL that were matched by the route path.
 *
 * @see https://reactrouter.com/hooks/use-params
 */ function useParams() {
    _s10();
    var { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    var routeMatch = matches[matches.length - 1];
    return routeMatch ? routeMatch.params : {};
}
_s10(useParams, "KZfdG8ZL0oSOy0/P9JYAG6JDDJw=");
/**
 * Resolves the pathname of the given `to` value against the current location.
 *
 * @see https://reactrouter.com/hooks/use-resolved-path
 */ function useResolvedPath(to, _temp2) {
    _s11();
    var { relative } = _temp2 === void 0 ? {} : _temp2;
    var { future } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    var { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    var { pathname: locationPathname } = useLocation();
    var routePathnamesJson = JSON.stringify((0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath));
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [
        to,
        routePathnamesJson,
        locationPathname,
        relative
    ]);
}
_s11(useResolvedPath, "wVXBIr+VW78mZc8lDu4RuR6aKjE=", false, function() {
    return [
        useLocation
    ];
});
/**
 * Returns the element of the route that matched the current location, prepared
 * with the correct context to render the remainder of the route tree. Route
 * elements in the tree must render an `<Outlet>` to render their child route's
 * element.
 *
 * @see https://reactrouter.com/hooks/use-routes
 */ function useRoutes(routes, locationArg) {
    _s12();
    return useRoutesImpl(routes, locationArg);
}
_s12(useRoutes, "bxXQ1PjoUitFHQG/730mCYNdT00=", false, function() {
    return [
        useRoutesImpl
    ];
});
// Internal implementation with accept optional param for RouterProvider usage
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
    _s13();
    !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component.") : 0 : void 0;
    var { navigator } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    var { matches: parentMatches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    var routeMatch = parentMatches[parentMatches.length - 1];
    var parentParams = routeMatch ? routeMatch.params : {};
    var parentPathname = routeMatch ? routeMatch.pathname : "/";
    var parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
    var parentRoute = routeMatch && routeMatch.route;
    if (true) {
        // You won't get a warning about 2 different <Routes> under a <Route>
        // without a trailing *, but this is a best-effort warning anyway since we
        // cannot even give the warning unless they land at the parent route.
        //
        // Example:
        //
        // <Routes>
        //   {/* This route path MUST end with /* because otherwise
        //       it will never match /blog/post/123 */}
        //   <Route path="blog" element={<Blog />} />
        //   <Route path="blog/feed" element={<BlogFeed />} />
        // </Routes>
        //
        // function Blog() {
        //   return (
        //     <Routes>
        //       <Route path="post/:id" element={<Post />} />
        //     </Routes>
        //   );
        // }
        var parentPath = parentRoute && parentRoute.path || "";
        warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ("\"" + parentPathname + "\" (under <Route path=\"" + parentPath + "\">) but the ") + "parent route path has no trailing \"*\". This means if you navigate " + "deeper, the parent won't match anymore and therefore the child " + "routes will never render.\n\n" + ("Please change the parent <Route path=\"" + parentPath + "\"> to <Route ") + ("path=\"" + (parentPath === "/" ? "*" : parentPath + "/*") + "\">."));
    }
    var locationFromContext = useLocation();
    var location;
    if (locationArg) {
        var _parsedLocationArg$pa;
        var parsedLocationArg = typeof locationArg === "string" ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationArg) : locationArg;
        !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, " + "the location pathname must begin with the portion of the URL pathname that was " + ("matched by all parent routes. The current pathname base is \"" + parentPathnameBase + "\" ") + ("but pathname \"" + parsedLocationArg.pathname + "\" was given in the `location` prop.")) : 0 : void 0;
        location = parsedLocationArg;
    } else {
        location = locationFromContext;
    }
    var pathname = location.pathname || "/";
    var remainingPathname = pathname;
    if (parentPathnameBase !== "/") {
        // Determine the remaining pathname by removing the # of URL segments the
        // parentPathnameBase has, instead of removing based on character count.
        // This is because we can't guarantee that incoming/outgoing encodings/
        // decodings will match exactly.
        // We decode paths before matching on a per-segment basis with
        // decodeURIComponent(), but we re-encode pathnames via `new URL()` so they
        // match what `window.location.pathname` would reflect.  Those don't 100%
        // align when it comes to encoded URI characters such as % and &.
        //
        // So we may end up with:
        //   pathname:           "/descendant/a%25b/match"
        //   parentPathnameBase: "/descendant/a%b"
        //
        // And the direct substring removal approach won't work :/
        var parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
        var segments = pathname.replace(/^\//, "").split("/");
        remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
    }
    var matches = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.matchRoutes)(routes, {
        pathname: remainingPathname
    });
    if (true) {
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(parentRoute || matches != null, "No routes matched location \"" + location.pathname + location.search + location.hash + "\" ") : 0;
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(matches == null || matches[matches.length - 1].route.element !== undefined || matches[matches.length - 1].route.Component !== undefined || matches[matches.length - 1].route.lazy !== undefined, "Matched leaf route at location \"" + location.pathname + location.search + location.hash + "\" " + "does not have an element or Component. This means it will render an <Outlet /> with a " + "null value by default resulting in an \"empty\" page.") : 0;
    }
    var renderedMatches = _renderMatches(matches && matches.map((match)=>Object.assign({}, match, {
            params: Object.assign({}, parentParams, match.params),
            pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathname).pathname : match.pathname
            ]),
            pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.joinPaths)([
                parentPathnameBase,
                // Re-encode pathnames that were decoded inside matchRoutes
                navigator.encodeLocation ? navigator.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
            ])
        })), parentMatches, dataRouterState, future);
    // When a user passes in a `locationArg`, the associated routes need to
    // be wrapped in a new `LocationContext.Provider` in order for `useLocation`
    // to use the scoped location instead of the global location.
    if (locationArg && renderedMatches) {
        return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
            value: {
                location: _extends({
                    pathname: "/",
                    search: "",
                    hash: "",
                    state: null,
                    key: "default"
                }, location),
                navigationType: _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop
            }
        }, renderedMatches);
    }
    return renderedMatches;
}
_s13(useRoutesImpl, "50L/Aw/rSNnE0T4921HQ7wCgOK0=", false, function() {
    return [
        useInRouterContext,
        useLocation
    ];
});
function DefaultErrorComponent() {
    _s14();
    var error = useRouteError();
    var message = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.isRouteErrorResponse)(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
    var stack = error instanceof Error ? error.stack : null;
    var lightgrey = "rgba(200,200,200, 0.5)";
    var preStyles = {
        padding: "0.5rem",
        backgroundColor: lightgrey
    };
    var codeStyles = {
        padding: "2px 4px",
        backgroundColor: lightgrey
    };
    var devInfo = null;
    if (true) {
        console.error("Error handled by React Router default ErrorBoundary:", error);
        devInfo = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\uD83D\uDCBF Hey developer \uD83D\uDC4B"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
            style: codeStyles
        }, "ErrorBoundary"), " or", " ", /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", {
            style: codeStyles
        }, "errorElement"), " prop on your route."));
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Unexpected Application Error!"), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, message), stack ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", {
        style: preStyles
    }, stack) : null, devInfo);
}
_s14(DefaultErrorComponent, "oAgjgbJzsRXlB89+MoVumxMQqKM=", false, function() {
    return [
        useRouteError
    ];
});
_c = DefaultErrorComponent;
var defaultErrorElement = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static getDerivedStateFromError(error) {
        return {
            error: error
        };
    }
    static getDerivedStateFromProps(props, state) {
        // When we get into an error state, the user will likely click "back" to the
        // previous page that didn't have an error. Because this wraps the entire
        // application, that will have no effect--the error page continues to display.
        // This gives us a mechanism to recover from the error when the location changes.
        //
        // Whether we're in an error state or not, we update the location in state
        // so that when we are in an error state, it gets reset when a new location
        // comes in and the user recovers from the error.
        if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
            return {
                error: props.error,
                location: props.location,
                revalidation: props.revalidation
            };
        }
        // If we're not changing locations, preserve the location but still surface
        // any new errors that may come through. We retain the existing error, we do
        // this because the error provided from the app state may be cleared without
        // the location changing.
        return {
            error: props.error !== undefined ? props.error : state.error,
            location: state.location,
            revalidation: props.revalidation || state.revalidation
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("React Router caught the following error during render", error, errorInfo);
    }
    render() {
        return this.state.error !== undefined ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
            value: this.props.routeContext
        }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteErrorContext.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            location: props.location,
            revalidation: props.revalidation,
            error: props.error
        };
    }
}
function RenderedRoute(_ref) {
    _s15();
    var { routeContext, match, children } = _ref;
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
    // Track how deep we got in our render pass to emulate SSR componentDidCatch
    // in a DataStaticRouter
    if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
        dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, {
        value: routeContext
    }, children);
}
_s15(RenderedRoute, "CDKlwIqxcpySUP3IDCQMJZjTo1Q=");
_c1 = RenderedRoute;
function _renderMatches(matches, parentMatches, dataRouterState, future) {
    var _dataRouterState;
    if (parentMatches === void 0) {
        parentMatches = [];
    }
    if (dataRouterState === void 0) {
        dataRouterState = null;
    }
    if (future === void 0) {
        future = null;
    }
    if (matches == null) {
        var _future;
        if (!dataRouterState) {
            return null;
        }
        if (dataRouterState.errors) {
            // Don't bail if we have data router errors so we can render them in the
            // boundary.  Use the pre-matched (or shimmed) matches
            matches = dataRouterState.matches;
        } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
            // Don't bail if we're initializing with partial hydration and we have
            // router matches.  That means we're actively running `patchRoutesOnNavigation`
            // so we should render down the partial matches to the appropriate
            // `HydrateFallback`.  We only do this if `parentMatches` is empty so it
            // only impacts the root matches for `RouterProvider` and no descendant
            // `<Routes>`
            matches = dataRouterState.matches;
        } else {
            return null;
        }
    }
    var renderedMatches = matches;
    // If we have data errors, trim matches to the highest error boundary
    var errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
    if (errors != null) {
        var errorIndex = renderedMatches.findIndex((m)=>m.route.id && (errors == null ? void 0 : errors[m.route.id]) !== undefined);
        !(errorIndex >= 0) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "Could not find a matching route for errors on route IDs: " + Object.keys(errors).join(",")) : 0 : void 0;
        renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
    }
    // If we're in a partial hydration mode, detect if we need to render down to
    // a given HydrateFallback while we load the rest of the hydration data
    var renderFallback = false;
    var fallbackIndex = -1;
    if (dataRouterState && future && future.v7_partialHydration) {
        for(var i = 0; i < renderedMatches.length; i++){
            var match = renderedMatches[i];
            // Track the deepest fallback up until the first route without data
            if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
                fallbackIndex = i;
            }
            if (match.route.id) {
                var { loaderData, errors: errors1 } = dataRouterState;
                var needsToRunLoader = match.route.loader && loaderData[match.route.id] === undefined && (!errors1 || errors1[match.route.id] === undefined);
                if (match.route.lazy || needsToRunLoader) {
                    // We found the first route that's not ready to render (waiting on
                    // lazy, or has a loader that hasn't run yet).  Flag that we need to
                    // render a fallback and render up until the appropriate fallback
                    renderFallback = true;
                    if (fallbackIndex >= 0) {
                        renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
                    } else {
                        renderedMatches = [
                            renderedMatches[0]
                        ];
                    }
                    break;
                }
            }
        }
    }
    return renderedMatches.reduceRight((outlet, match, index)=>{
        // Only data routers handle errors/fallbacks
        var error;
        var shouldRenderHydrateFallback = false;
        var errorElement = null;
        var hydrateFallbackElement = null;
        if (dataRouterState) {
            error = errors && match.route.id ? errors[match.route.id] : undefined;
            errorElement = match.route.errorElement || defaultErrorElement;
            if (renderFallback) {
                if (fallbackIndex < 0 && index === 0) {
                    warningOnce("route-fallback", false, "No `HydrateFallback` element provided to render during initial hydration");
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = null;
                } else if (fallbackIndex === index) {
                    shouldRenderHydrateFallback = true;
                    hydrateFallbackElement = match.route.hydrateFallbackElement || null;
                }
            }
        }
        var _$matches = parentMatches.concat(renderedMatches.slice(0, index + 1));
        var getChildren = ()=>{
            var children;
            if (error) {
                children = errorElement;
            } else if (shouldRenderHydrateFallback) {
                children = hydrateFallbackElement;
            } else if (match.route.Component) {
                // Note: This is a de-optimized path since React won't re-use the
                // ReactElement since it's identity changes with each new
                // React.createElement call.  We keep this so folks can use
                // `<Route Component={...}>` in `<Routes>` but generally `Component`
                // usage is only advised in `RouterProvider` when we can convert it to
                // `element` ahead of time.
                children = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component, null);
            } else if (match.route.element) {
                children = match.route.element;
            } else {
                children = outlet;
            }
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderedRoute, {
                match: match,
                routeContext: {
                    outlet,
                    matches: _$matches,
                    isDataRoute: dataRouterState != null
                },
                children: children
            });
        };
        // Only wrap in an error boundary within data router usages when we have an
        // ErrorBoundary/errorElement on this route.  Otherwise let it bubble up to
        // an ancestor ErrorBoundary/errorElement
        return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderErrorBoundary, {
            location: dataRouterState.location,
            revalidation: dataRouterState.revalidation,
            component: errorElement,
            error: error,
            children: getChildren(),
            routeContext: {
                outlet: null,
                matches: _$matches,
                isDataRoute: true
            }
        }) : getChildren();
    }, null);
}
var DataRouterHook = /*#__PURE__*/ function(DataRouterHook) {
    DataRouterHook["UseBlocker"] = "useBlocker";
    DataRouterHook["UseRevalidator"] = "useRevalidator";
    DataRouterHook["UseNavigateStable"] = "useNavigate";
    return DataRouterHook;
}(DataRouterHook || {});
var DataRouterStateHook = /*#__PURE__*/ function(DataRouterStateHook) {
    DataRouterStateHook["UseBlocker"] = "useBlocker";
    DataRouterStateHook["UseLoaderData"] = "useLoaderData";
    DataRouterStateHook["UseActionData"] = "useActionData";
    DataRouterStateHook["UseRouteError"] = "useRouteError";
    DataRouterStateHook["UseNavigation"] = "useNavigation";
    DataRouterStateHook["UseRouteLoaderData"] = "useRouteLoaderData";
    DataRouterStateHook["UseMatches"] = "useMatches";
    DataRouterStateHook["UseRevalidator"] = "useRevalidator";
    DataRouterStateHook["UseNavigateStable"] = "useNavigate";
    DataRouterStateHook["UseRouteId"] = "useRouteId";
    return DataRouterStateHook;
}(DataRouterStateHook || {});
function getDataRouterConsoleError(hookName) {
    return hookName + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function useDataRouterContext(hookName) {
    _s16();
    var ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
    !ctx ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
    return ctx;
}
_s16(useDataRouterContext, "/dMy7t63NXD4eYACoT93CePwGrg=");
function useDataRouterState(hookName) {
    _s17();
    var state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
    !state ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
    return state;
}
_s17(useDataRouterState, "kdLImxeHm3898p7tqgy8Fclg5s8=");
function useRouteContext(hookName) {
    _s18();
    var route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    !route ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, getDataRouterConsoleError(hookName)) : 0 : void 0;
    return route;
}
_s18(useRouteContext, "+p67gHdeicVxIDd5SykDKMiYfaw=");
// Internal version with hookName-aware debugging
function useCurrentRouteId(hookName) {
    _s19();
    var route = useRouteContext(hookName);
    var thisRoute = route.matches[route.matches.length - 1];
    !thisRoute.route.id ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, hookName + " can only be used on routes that contain a unique \"id\"") : 0 : void 0;
    return thisRoute.route.id;
}
_s19(useCurrentRouteId, "wASpERyQLx+zgcw/PyUNGa0MV3E=", false, function() {
    return [
        useRouteContext
    ];
});
/**
 * Returns the ID for the nearest contextual route
 */ function useRouteId() {
    _s20();
    return useCurrentRouteId(DataRouterStateHook.UseRouteId);
}
_s20(useRouteId, "pD4QEmuO4Ll++v9bSotMnGBlCbU=", false, function() {
    return [
        useCurrentRouteId
    ];
});
/**
 * Returns the current navigation, defaulting to an "idle" navigation when
 * no navigation is in progress
 */ function useNavigation() {
    _s21();
    var state = useDataRouterState(DataRouterStateHook.UseNavigation);
    return state.navigation;
}
_s21(useNavigation, "ksx0pUFe0Qs5FOQ3bx/kwJ/n1pg=", false, function() {
    return [
        useDataRouterState
    ];
});
/**
 * Returns a revalidate function for manually triggering revalidation, as well
 * as the current state of any manual revalidations
 */ function useRevalidator() {
    _s22();
    var dataRouterContext = useDataRouterContext(DataRouterHook.UseRevalidator);
    var state = useDataRouterState(DataRouterStateHook.UseRevalidator);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            revalidate: dataRouterContext.router.revalidate,
            state: state.revalidation
        }), [
        dataRouterContext.router.revalidate,
        state.revalidation
    ]);
}
_s22(useRevalidator, "EZWIzOxYWjhEC35mfDgj9WeuX0E=", false, function() {
    return [
        useDataRouterContext,
        useDataRouterState
    ];
});
/**
 * Returns the active route matches, useful for accessing loaderData for
 * parent/child routes or the route "handle" property
 */ function useMatches() {
    _s23();
    var { matches, loaderData } = useDataRouterState(DataRouterStateHook.UseMatches);
    return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>matches.map((m)=>(0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_convertRouteMatchToUiMatch)(m, loaderData)), [
        matches,
        loaderData
    ]);
}
_s23(useMatches, "NOMFGVHPHfWiEFTcfvlVcUixXmw=", false, function() {
    return [
        useDataRouterState
    ];
});
/**
 * Returns the loader data for the nearest ancestor Route loader
 */ function useLoaderData() {
    _s24();
    var state = useDataRouterState(DataRouterStateHook.UseLoaderData);
    var routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    if (state.errors && state.errors[routeId] != null) {
        console.error("You cannot `useLoaderData` in an errorElement (routeId: " + routeId + ")");
        return undefined;
    }
    return state.loaderData[routeId];
}
_s24(useLoaderData, "9OzlB4eTxA/d/duIIR6ygqOjcHs=", false, function() {
    return [
        useDataRouterState,
        useCurrentRouteId
    ];
});
/**
 * Returns the loaderData for the given routeId
 */ function useRouteLoaderData(routeId) {
    _s25();
    var state = useDataRouterState(DataRouterStateHook.UseRouteLoaderData);
    return state.loaderData[routeId];
}
_s25(useRouteLoaderData, "ksx0pUFe0Qs5FOQ3bx/kwJ/n1pg=", false, function() {
    return [
        useDataRouterState
    ];
});
/**
 * Returns the action data for the nearest ancestor Route action
 */ function useActionData() {
    _s26();
    var state = useDataRouterState(DataRouterStateHook.UseActionData);
    var routeId = useCurrentRouteId(DataRouterStateHook.UseLoaderData);
    return state.actionData ? state.actionData[routeId] : undefined;
}
_s26(useActionData, "9OzlB4eTxA/d/duIIR6ygqOjcHs=", false, function() {
    return [
        useDataRouterState,
        useCurrentRouteId
    ];
});
/**
 * Returns the nearest ancestor Route error, which could be a loader/action
 * error or a render error.  This is intended to be called from your
 * ErrorBoundary/errorElement to display a proper error message.
 */ function useRouteError() {
    _s27();
    var _state$errors;
    var error = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext);
    var state = useDataRouterState(DataRouterStateHook.UseRouteError);
    var routeId = useCurrentRouteId(DataRouterStateHook.UseRouteError);
    // If this was a render error, we put it in a RouteError context inside
    // of RenderErrorBoundary
    if (error !== undefined) {
        return error;
    }
    // Otherwise look for errors from our data router state
    return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
_s27(useRouteError, "MKznRPOFPCBNjzCcIHhUV3MxLu8=", false, function() {
    return [
        useDataRouterState,
        useCurrentRouteId
    ];
});
/**
 * Returns the happy-path data from the nearest ancestor `<Await />` value
 */ function useAsyncValue() {
    _s28();
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
    return value == null ? void 0 : value._data;
}
_s28(useAsyncValue, "ksutO2/Ix3UeCrGnhyM+QEP505Y=");
/**
 * Returns the error from the nearest ancestor `<Await />` value
 */ function useAsyncError() {
    _s29();
    var value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
    return value == null ? void 0 : value._error;
}
_s29(useAsyncError, "ksutO2/Ix3UeCrGnhyM+QEP505Y=");
var blockerId = 0;
/**
 * Allow the application to block navigations within the SPA and present the
 * user a confirmation dialog to confirm the navigation.  Mostly used to avoid
 * using half-filled form data.  This does not handle hard-reloads or
 * cross-origin navigations.
 */ function useBlocker(shouldBlock) {
    _s30();
    var { router, basename } = useDataRouterContext(DataRouterHook.UseBlocker);
    var state = useDataRouterState(DataRouterStateHook.UseBlocker);
    var [blockerKey, setBlockerKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
    var blockerFunction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((arg)=>{
        if (typeof shouldBlock !== "function") {
            return !!shouldBlock;
        }
        if (basename === "/") {
            return shouldBlock(arg);
        }
        // If they provided us a function and we've got an active basename, strip
        // it from the locations we expose to the user to match the behavior of
        // useLocation
        var { currentLocation, nextLocation, historyAction } = arg;
        return shouldBlock({
            currentLocation: _extends({}, currentLocation, {
                pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(currentLocation.pathname, basename) || currentLocation.pathname
            }),
            nextLocation: _extends({}, nextLocation, {
                pathname: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(nextLocation.pathname, basename) || nextLocation.pathname
            }),
            historyAction
        });
    }, [
        basename,
        shouldBlock
    ]);
    // This effect is in charge of blocker key assignment and deletion (which is
    // tightly coupled to the key)
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        var key = String(++blockerId);
        setBlockerKey(key);
        return ()=>router.deleteBlocker(key);
    }, [
        router
    ]);
    // This effect handles assigning the blockerFunction.  This is to handle
    // unstable blocker function identities, and happens only after the prior
    // effect so we don't get an orphaned blockerFunction in the router with a
    // key of "".  Until then we just have the IDLE_BLOCKER.
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
        if (blockerKey !== "") {
            router.getBlocker(blockerKey, blockerFunction);
        }
    }, [
        router,
        blockerKey,
        blockerFunction
    ]);
    // Prefer the blocker from `state` not `router.state` since DataRouterContext
    // is memoized so this ensures we update on blocker state updates
    return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.IDLE_BLOCKER;
}
_s30(useBlocker, "AOVsd8P3GKIpZMz2QSJilxLW7HY=", false, function() {
    return [
        useDataRouterContext,
        useDataRouterState
    ];
});
/**
 * Stable version of useNavigate that is used when we are in the context of
 * a RouterProvider.
 */ function useNavigateStable() {
    _s31();
    var { router } = useDataRouterContext(DataRouterHook.UseNavigateStable);
    var id = useCurrentRouteId(DataRouterStateHook.UseNavigateStable);
    var activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
    useIsomorphicLayoutEffect(()=>{
        activeRef.current = true;
    });
    var navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(to, options) {
        if (options === void 0) {
            options = {};
        }
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(activeRef.current, navigateEffectWarning) : 0;
        // Short circuit here since if this happens on first render the navigate
        // is useless because we haven't wired up our router subscriber yet
        if (!activeRef.current) return;
        if (typeof to === "number") {
            router.navigate(to);
        } else {
            router.navigate(to, _extends({
                fromRouteId: id
            }, options));
        }
    }, [
        router,
        id
    ]);
    return navigate;
}
_s31(useNavigateStable, "XnEoyWrHBFr+eR9tWx9eMWjlblI=", false, function() {
    return [
        useDataRouterContext,
        useCurrentRouteId,
        useIsomorphicLayoutEffect
    ];
});
var alreadyWarned = {};
function warningOnce(key, cond, message) {
    if (!cond && !alreadyWarned[key]) {
        alreadyWarned[key] = true;
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, message) : 0;
    }
}
/**
  Webpack + React 17 fails to compile on any of the following because webpack
  complains that `startTransition` doesn't exist in `React`:
  * import { startTransition } from "react"
  * import * as React from from "react";
    "startTransition" in React ? React.startTransition(() => setState()) : setState()
  * import * as React from from "react";
    "startTransition" in React ? React["startTransition"](() => setState()) : setState()

  Moving it to a constant such as the following solves the Webpack/React 17 issue:
  * import * as React from from "react";
    const START_TRANSITION = "startTransition";
    START_TRANSITION in React ? React[START_TRANSITION](() => setState()) : setState()

  However, that introduces webpack/terser minification issues in production builds
  in React 18 where minification/obfuscation ends up removing the call of
  React.startTransition entirely from the first half of the ternary.  Grabbing
  this exported reference once up front resolves that issue.

  See https://github.com/remix-run/react-router/issues/10579
*/ var START_TRANSITION = "startTransition";
var startTransitionImpl = react__WEBPACK_IMPORTED_MODULE_0__[START_TRANSITION];
/**
 * Given a Remix Router instance, render the appropriate UI
 */ function RouterProvider(_ref) {
    _s32();
    var { fallbackElement, router, future } = _ref;
    var [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
    var { v7_startTransition } = future || {};
    var setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState)=>{
        if (v7_startTransition && startTransitionImpl) {
            startTransitionImpl(()=>setStateImpl(newState));
        } else {
            setStateImpl(newState);
        }
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    // Need to use a layout effect here so we are subscribed early enough to
    // pick up on any render-driven redirects/navigations (useEffect/<Navigate>)
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>router.subscribe(setState), [
        router,
        setState
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{
         true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(fallbackElement == null || !router.future.v7_partialHydration, "`<RouterProvider fallbackElement>` is deprecated when using " + "`v7_partialHydration`, use a `HydrateFallback` component instead") : 0;
    // Only log this once on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var navigator = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>{
        return {
            createHref: router.createHref,
            encodeLocation: router.encodeLocation,
            go: (n)=>router.navigate(n),
            push: (to, state, opts)=>router.navigate(to, {
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                }),
            replace: (to, state, opts)=>router.navigate(to, {
                    replace: true,
                    state,
                    preventScrollReset: opts == null ? void 0 : opts.preventScrollReset
                })
        };
    }, [
        router
    ]);
    var basename = router.basename || "/";
    var dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            router,
            navigator,
            static: false,
            basename
        }), [
        router,
        navigator,
        basename
    ]);
    // The fragment and {null} here are important!  We need them to keep React 18's
    // useId happy when we are server-rendering since we may have a <script> here
    // containing the hydrated server-side staticContext (from StaticRouterProvider).
    // useId relies on the component tree structure to generate deterministic id's
    // so we need to ensure it remains the same on the client even though
    // we don't need the <script> tag
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterContext.Provider, {
        value: dataRouterContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterStateContext.Provider, {
        value: state
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
        basename: basename,
        location: state.location,
        navigationType: state.historyAction,
        navigator: navigator,
        future: {
            v7_relativeSplatPath: router.future.v7_relativeSplatPath
        }
    }, state.initialized || router.future.v7_partialHydration ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRoutes, {
        routes: router.routes,
        future: router.future,
        state: state
    }) : fallbackElement))), null);
}
_s32(RouterProvider, "kUUDDYbee7ULQBMEitmsnqmH1Mo=");
_c2 = RouterProvider;
function DataRoutes(_ref2) {
    _s33();
    var { routes, future, state } = _ref2;
    return useRoutesImpl(routes, undefined, state, future);
}
_s33(DataRoutes, "bxXQ1PjoUitFHQG/730mCYNdT00=", false, function() {
    return [
        useRoutesImpl
    ];
});
_c3 = DataRoutes;
/**
 * A `<Router>` that stores all entries in memory.
 *
 * @see https://reactrouter.com/router-components/memory-router
 */ function MemoryRouter(_ref3) {
    _s34();
    var { basename, children, initialEntries, initialIndex, future } = _ref3;
    var historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    if (historyRef.current == null) {
        historyRef.current = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
            initialEntries,
            initialIndex,
            v5Compat: true
        });
    }
    var history = historyRef.current;
    var [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
        action: history.action,
        location: history.location
    });
    var { v7_startTransition } = future || {};
    var setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback((newState)=>{
        v7_startTransition && startTransitionImpl ? startTransitionImpl(()=>setStateImpl(newState)) : setStateImpl(newState);
    }, [
        setStateImpl,
        v7_startTransition
    ]);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(()=>history.listen(setState), [
        history,
        setState
    ]);
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Router, {
        basename: basename,
        children: children,
        location: state.location,
        navigationType: state.action,
        navigator: history,
        future: future
    });
}
_s34(MemoryRouter, "4hUJUqHydkgNqll0yBdcphm8IwU=");
_c4 = MemoryRouter;
/**
 * Changes the current location.
 *
 * Note: This API is mostly useful in React.Component subclasses that are not
 * able to use hooks. In functional components, we recommend you use the
 * `useNavigate` hook instead.
 *
 * @see https://reactrouter.com/components/navigate
 */ function Navigate(_ref4) {
    _s35();
    var { to, replace, state, relative } = _ref4;
    !useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component.") : 0 : void 0;
    var { future, static: isStatic } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(!isStatic, "<Navigate> must not be used on the initial render in a <StaticRouter>. " + "This is a no-op, but you should modify your code so the <Navigate> is " + "only ever rendered in response to some user interaction or state change.") : 0;
    var { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
    var { pathname: locationPathname } = useLocation();
    var navigate = useNavigate();
    // Resolve the path outside of the effect so that when effects run twice in
    // StrictMode they navigate to the same place
    var path = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.resolveTo)(to, (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_getResolveToMatches)(matches, future.v7_relativeSplatPath), locationPathname, relative === "path");
    var jsonPath = JSON.stringify(path);
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>navigate(JSON.parse(jsonPath), {
            replace,
            state,
            relative
        }), [
        navigate,
        jsonPath,
        relative,
        replace,
        state
    ]);
    return null;
}
_s35(Navigate, "n37Mzi87sVJPNmCniRUSXZEDIfY=", false, function() {
    return [
        useInRouterContext,
        useLocation,
        useNavigate
    ];
});
_c5 = Navigate;
/**
 * Renders the child route's element, if there is one.
 *
 * @see https://reactrouter.com/components/outlet
 */ function Outlet(props) {
    _s36();
    return useOutlet(props.context);
}
_s36(Outlet, "UOsMKhZRqBWgnX+NkNBlxu0sfe8=", false, function() {
    return [
        useOutlet
    ];
});
_c6 = Outlet;
/**
 * Declares an element that should be rendered at a certain URL path.
 *
 * @see https://reactrouter.com/components/route
 */ function Route(_props) {
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "A <Route> is only ever to be used as the child of <Routes> element, " + "never rendered directly. Please wrap your <Route> in a <Routes>.") : 0;
}
_c7 = Route;
/**
 * Provides location context for the rest of the app.
 *
 * Note: You usually won't render a `<Router>` directly. Instead, you'll render a
 * router that is more specific to your environment such as a `<BrowserRouter>`
 * in web browsers or a `<StaticRouter>` for server rendering.
 *
 * @see https://reactrouter.com/router-components/router
 */ function Router(_ref5) {
    _s37();
    var { basename: basenameProp = "/", children = null, location: locationProp, navigationType = _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.Action.Pop, navigator, static: staticProp = false, future } = _ref5;
    !!useInRouterContext() ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "You cannot render a <Router> inside another <Router>." + " You should never have more than one in your app.") : 0 : void 0;
    // Preserve trailing slashes on basename, so we can let the user control
    // the enforcement of trailing slashes throughout the app
    var basename = basenameProp.replace(/^\/*/, "/");
    var navigationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({
            basename,
            navigator,
            static: staticProp,
            future: _extends({
                v7_relativeSplatPath: false
            }, future)
        }), [
        basename,
        future,
        navigator,
        staticProp
    ]);
    if (typeof locationProp === "string") {
        locationProp = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.parsePath)(locationProp);
    }
    var { pathname = "/", search = "", hash = "", state = null, key = "default" } = locationProp;
    var locationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>{
        var trailingPathname = (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.stripBasename)(pathname, basename);
        if (trailingPathname == null) {
            return null;
        }
        return {
            location: {
                pathname: trailingPathname,
                search,
                hash,
                state,
                key
            },
            navigationType
        };
    }, [
        basename,
        pathname,
        search,
        hash,
        state,
        key,
        navigationType
    ]);
     true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(locationContext != null, "<Router basename=\"" + basename + "\"> is not able to match the URL " + ("\"" + pathname + search + hash + "\" because it does not start with the ") + "basename, so the <Router> won't render anything.") : 0;
    if (locationContext == null) {
        return null;
    }
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider, {
        value: navigationContext
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, {
        children: children,
        value: locationContext
    }));
}
_s37(Router, "cWELrQ0qrnJGlFKBUy43aV+1NAk=", false, function() {
    return [
        useInRouterContext
    ];
});
_c8 = Router;
/**
 * A container for a nested tree of `<Route>` elements that renders the branch
 * that best matches the current location.
 *
 * @see https://reactrouter.com/components/routes
 */ function Routes(_ref6) {
    _s38();
    var { children, location } = _ref6;
    return useRoutes(createRoutesFromChildren(children), location);
}
_s38(Routes, "mNBMh7IZrKf5fDyw9x3t8azefmI=", false, function() {
    return [
        useRoutes
    ];
});
_c9 = Routes;
/**
 * Component to use for rendering lazily loaded data from returning defer()
 * in a loader function
 */ function Await(_ref7) {
    var { children, errorElement, resolve } = _ref7;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitErrorBoundary, {
        resolve: resolve,
        errorElement: errorElement
    }, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResolveAwait, null, children));
}
_c10 = Await;
var AwaitRenderStatus = /*#__PURE__*/ function(AwaitRenderStatus) {
    AwaitRenderStatus[AwaitRenderStatus["pending"] = 0] = "pending";
    AwaitRenderStatus[AwaitRenderStatus["success"] = 1] = "success";
    AwaitRenderStatus[AwaitRenderStatus["error"] = 2] = "error";
    return AwaitRenderStatus;
}(AwaitRenderStatus || {});
var neverSettledPromise = new Promise(()=>{});
class AwaitErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("<Await> caught the following error during render", error, errorInfo);
    }
    render() {
        var { children, errorElement, resolve } = this.props;
        var promise = null;
        var status = AwaitRenderStatus.pending;
        if (!(resolve instanceof Promise)) {
            // Didn't get a promise - provide as a resolved promise
            status = AwaitRenderStatus.success;
            promise = Promise.resolve();
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_data", {
                get: ()=>resolve
            });
        } else if (this.state.error) {
            // Caught a render error, provide it as a rejected promise
            status = AwaitRenderStatus.error;
            var renderError = this.state.error;
            promise = Promise.reject().catch(()=>{}); // Avoid unhandled rejection warnings
            Object.defineProperty(promise, "_tracked", {
                get: ()=>true
            });
            Object.defineProperty(promise, "_error", {
                get: ()=>renderError
            });
        } else if (resolve._tracked) {
            // Already tracked promise - check contents
            promise = resolve;
            status = "_error" in promise ? AwaitRenderStatus.error : "_data" in promise ? AwaitRenderStatus.success : AwaitRenderStatus.pending;
        } else {
            // Raw (untracked) promise - track it
            status = AwaitRenderStatus.pending;
            Object.defineProperty(resolve, "_tracked", {
                get: ()=>true
            });
            promise = resolve.then((data)=>Object.defineProperty(resolve, "_data", {
                    get: ()=>data
                }), (error)=>Object.defineProperty(resolve, "_error", {
                    get: ()=>error
                }));
        }
        if (status === AwaitRenderStatus.error && promise._error instanceof _remix_run_router__WEBPACK_IMPORTED_MODULE_1__.AbortedDeferredError) {
            // Freeze the UI by throwing a never resolved promise
            throw neverSettledPromise;
        }
        if (status === AwaitRenderStatus.error && !errorElement) {
            // No errorElement, throw to the nearest route-level error boundary
            throw promise._error;
        }
        if (status === AwaitRenderStatus.error) {
            // Render via our errorElement
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
                value: promise,
                children: errorElement
            });
        }
        if (status === AwaitRenderStatus.success) {
            // Render children with resolved value
            return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, {
                value: promise,
                children: children
            });
        }
        // Throw to the suspense boundary
        throw promise;
    }
    constructor(props){
        super(props);
        this.state = {
            error: null
        };
    }
}
/**
 * @private
 * Indirection to leverage useAsyncValue for a render-prop API on `<Await>`
 */ function ResolveAwait(_ref8) {
    _s39();
    var { children } = _ref8;
    var data = useAsyncValue();
    var toRender = typeof children === "function" ? children(data) : children;
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, toRender);
}
_s39(ResolveAwait, "EqArxLHTnAt9aJ6B4STzn3Bic5A=", false, function() {
    return [
        useAsyncValue
    ];
});
_c11 = ResolveAwait;
///////////////////////////////////////////////////////////////////////////////
// UTILS
///////////////////////////////////////////////////////////////////////////////
/**
 * Creates a route config from a React "children" object, which is usually
 * either a `<Route>` element or an array of them. Used internally by
 * `<Routes>` to create a route config from its children.
 *
 * @see https://reactrouter.com/utils/create-routes-from-children
 */ function createRoutesFromChildren(children, parentPath) {
    if (parentPath === void 0) {
        parentPath = [];
    }
    var routes = [];
    react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (element, index)=>{
        if (!/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
            // Ignore non-elements. This allows people to more easily inline
            // conditionals in their route config.
            return;
        }
        var treePath = [
            ...parentPath,
            index
        ];
        if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
            // Transparently support React.Fragment and its children.
            routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
            return;
        }
        !(element.type === Route) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : 0 : void 0;
        !(!element.props.index || !element.props.children) ?  true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_invariant)(false, "An index route cannot have child routes.") : 0 : void 0;
        var route = {
            id: element.props.id || treePath.join("-"),
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            Component: element.props.Component,
            index: element.props.index,
            path: element.props.path,
            loader: element.props.loader,
            action: element.props.action,
            errorElement: element.props.errorElement,
            ErrorBoundary: element.props.ErrorBoundary,
            hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
            shouldRevalidate: element.props.shouldRevalidate,
            handle: element.props.handle,
            lazy: element.props.lazy
        };
        if (element.props.children) {
            route.children = createRoutesFromChildren(element.props.children, treePath);
        }
        routes.push(route);
    });
    return routes;
}
/**
 * Renders the result of `matchRoutes()` into a React element.
 */ function renderMatches(matches) {
    return _renderMatches(matches);
}
function mapRouteProperties(route) {
    var updates = {
        // Note: this check also occurs in createRoutesFromChildren so update
        // there if you change this -- please and thank you!
        hasErrorBoundary: route.ErrorBoundary != null || route.errorElement != null
    };
    if (route.Component) {
        if (true) {
            if (route.element) {
                 true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `Component` and `element` on your route - " + "`Component` will be used.") : 0;
            }
        }
        Object.assign(updates, {
            element: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.Component),
            Component: undefined
        });
    }
    if (route.HydrateFallback) {
        if (true) {
            if (route.hydrateFallbackElement) {
                 true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - " + "`HydrateFallback` will be used.") : 0;
            }
        }
        Object.assign(updates, {
            hydrateFallbackElement: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.HydrateFallback),
            HydrateFallback: undefined
        });
    }
    if (route.ErrorBoundary) {
        if (true) {
            if (route.errorElement) {
                 true ? (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.UNSAFE_warning)(false, "You should not include both `ErrorBoundary` and `errorElement` on your route - " + "`ErrorBoundary` will be used.") : 0;
            }
        }
        Object.assign(updates, {
            errorElement: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.ErrorBoundary),
            ErrorBoundary: undefined
        });
    }
    return updates;
}
function createMemoryRouter(routes, opts) {
    return (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createRouter)({
        basename: opts == null ? void 0 : opts.basename,
        future: _extends({}, opts == null ? void 0 : opts.future, {
            v7_prependBasename: true
        }),
        history: (0,_remix_run_router__WEBPACK_IMPORTED_MODULE_1__.createMemoryHistory)({
            initialEntries: opts == null ? void 0 : opts.initialEntries,
            initialIndex: opts == null ? void 0 : opts.initialIndex
        }),
        hydrationData: opts == null ? void 0 : opts.hydrationData,
        routes,
        mapRouteProperties,
        dataStrategy: opts == null ? void 0 : opts.dataStrategy,
        patchRoutesOnNavigation: opts == null ? void 0 : opts.patchRoutesOnNavigation
    }).initialize();
}
 //# sourceMappingURL=index.js.map
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
$RefreshReg$(_c, "DefaultErrorComponent");
$RefreshReg$(_c1, "RenderedRoute");
$RefreshReg$(_c2, "RouterProvider");
$RefreshReg$(_c3, "DataRoutes");
$RefreshReg$(_c4, "MemoryRouter");
$RefreshReg$(_c5, "Navigate");
$RefreshReg$(_c6, "Outlet");
$RefreshReg$(_c7, "Route");
$RefreshReg$(_c8, "Router");
$RefreshReg$(_c9, "Routes");
$RefreshReg$(_c10, "Await");
$RefreshReg$(_c11, "ResolveAwait");


}),

}]);
//# sourceMappingURL=lib-router.js.map