"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var dataModel = require("../Models/resumeModel/resumeModel");
var secretKey = require("../Models/secretKey");
var users = require("../Models/userModel");
var getResume = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res, next) {
    var resume;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return dataModel.find().sort({
            createdAt: -1,
            updatedAt: -1
          });
        case 3:
          resume = _context.sent;
          if (resume) {
            _context.next = 6;
            break;
          }
          throw "Resume not found!!";
        case 6:
          res.status(200).send(resume);
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          res.status(400).send(_context.t0);
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return function getResume(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var saveResume = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res, next) {
    var _req$body$secret, userData, userSecret, existUser, secretData, resume;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          // console.log("start save data!!", req.body);
          _req$body$secret = req.body.secret, userData = _req$body$secret.userData, userSecret = _req$body$secret.userSecret;
          _context2.next = 3;
          return users.findOne({
            email: "sandeepsokle12@gmail.com"
          });
        case 3:
          existUser = _context2.sent;
          _context2.next = 6;
          return secretKey.findOne();
        case 6:
          secretData = _context2.sent;
          _context2.prev = 7;
          if (!(userData.name !== existUser.displayName || userData.uid !== existUser.uid || userData.email !== existUser.email)) {
            _context2.next = 17;
            break;
          }
          if (!(secretData.secretKey !== userSecret)) {
            _context2.next = 14;
            break;
          }
          console.log("secret Key not match!!");
          throw {
            message: "Unauthorized User!!"
          };
        case 14:
          console.log("secretKey match!!");
        case 15:
          _context2.next = 18;
          break;
        case 17:
          console.log("name match!!");
        case 18:
          _context2.next = 20;
          return dataModel.create(_objectSpread({}, req.body));
        case 20:
          resume = _context2.sent;
          // resume.save();
          console.log("data saved !!", resume);
          if (resume) {
            _context2.next = 24;
            break;
          }
          throw "Resume Creation failed!!";
        case 24:
          res.status(200).send(resume);
          _context2.next = 31;
          break;
        case 27:
          _context2.prev = 27;
          _context2.t0 = _context2["catch"](7);
          console.log("end save data with failed!!", _context2.t0.message);
          res.status(400).send(_context2.t0.message);
        case 31:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[7, 27]]);
  }));
  return function saveResume(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteResume = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res, next) {
    var id, _req$body$secret2, userData, userSecret, existUser, secretData, resume;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          console.log("start delete data!!", req.body.secret);
          _req$body$secret2 = req.body.secret, userData = _req$body$secret2.userData, userSecret = _req$body$secret2.userSecret;
          _context3.next = 5;
          return users.findOne({
            email: "sandeepsokle12@gmail.com"
          });
        case 5:
          existUser = _context3.sent;
          _context3.next = 8;
          return secretKey.findOne();
        case 8:
          secretData = _context3.sent;
          console.log("start update data!!", {
            // userData,
            userSecret: userSecret,
            // existUser,
            secretData: secretData.secretKey
          });

          // delete data.secret;

          // const finalData = { ...data, secret: undefined };
          _context3.prev = 10;
          if (!(userData.name !== existUser.displayName || userData.uid !== existUser.uid || userData.email !== existUser.email)) {
            _context3.next = 20;
            break;
          }
          if (!(secretData.secretKey !== userSecret)) {
            _context3.next = 17;
            break;
          }
          console.log("secret Key not match!!");
          throw {
            message: "Unauthorized User!!"
          };
        case 17:
          console.log("secretKey match!!");
        case 18:
          _context3.next = 21;
          break;
        case 20:
          console.log("name match!!");
        case 21:
          _context3.next = 23;
          return dataModel.findOneAndDelete({
            id: id
          });
        case 23:
          resume = _context3.sent;
          if (resume) {
            _context3.next = 26;
            break;
          }
          throw "Resume not found!!";
        case 26:
          console.log("Resume Deleted", resume);
          res.status(200).send(resume);
          _context3.next = 34;
          break;
        case 30:
          _context3.prev = 30;
          _context3.t0 = _context3["catch"](10);
          console.log("Resume Not Deleted", _context3.t0.message);
          res.status(400).send(_context3.t0);
        case 34:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[10, 30]]);
  }));
  return function deleteResume(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();
var updateResume = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res, next) {
    var id, data, _req$body$secret3, userData, userSecret, existUser, secretData, resume;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          data = req.body;
          _req$body$secret3 = req.body.secret, userData = _req$body$secret3.userData, userSecret = _req$body$secret3.userSecret;
          _context4.next = 5;
          return users.findOne({
            email: "sandeepsokle12@gmail.com"
          });
        case 5:
          existUser = _context4.sent;
          _context4.next = 8;
          return secretKey.findOne();
        case 8:
          secretData = _context4.sent;
          console.log("start update data!!", {
            // userData,
            userSecret: userSecret,
            // existUser,
            secretData: secretData.secretKey
          });
          delete data.secret;

          // const finalData = { ...data, secret: undefined };
          _context4.prev = 11;
          if (!(userData.name !== existUser.displayName || userData.uid !== existUser.uid || userData.email !== existUser.email)) {
            _context4.next = 21;
            break;
          }
          if (!(secretData.secretKey !== userSecret)) {
            _context4.next = 18;
            break;
          }
          console.log("secret Key not match!!");
          throw {
            message: "Unauthorized User!!"
          };
        case 18:
          console.log("secretKey match!!");
        case 19:
          _context4.next = 22;
          break;
        case 21:
          console.log("name match!!");
        case 22:
          _context4.next = 24;
          return dataModel.findOneAndUpdate({
            id: id
          }, {
            data: data
          }, {
            "new": true
          });
        case 24:
          resume = _context4.sent;
          if (resume) {
            _context4.next = 27;
            break;
          }
          throw "Resume not found!!";
        case 27:
          // console.log("Resume Updated", resume);
          res.status(200).send(resume);
          _context4.next = 34;
          break;
        case 30:
          _context4.prev = 30;
          _context4.t0 = _context4["catch"](11);
          console.log("Resume Not Updated", _context4.t0.message);
          res.status(400).send(_context4.t0);
        case 34:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[11, 30]]);
  }));
  return function updateResume(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();
var getBlogs = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res, next) {
    var blogs, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return dataModel.find({
            module: "blog"
          });
        case 3:
          blogs = _context5.sent;
          if (blogs) {
            _context5.next = 6;
            break;
          }
          throw "Resume not found!!";
        case 6:
          data = blogs.map(function (ele) {
            return ele.data;
          });
          res.status(200).send(data);
          _context5.next = 13;
          break;
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(400).send(_context5.t0);
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function getBlogs(_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}();
var checkCreds = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res, next) {
    var _req$body$secret4, userData, userSecret, existUser, secretData;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _req$body$secret4 = req.body.secret, userData = _req$body$secret4.userData, userSecret = _req$body$secret4.userSecret;
          _context6.next = 3;
          return users.findOne({
            email: "sandeepsokle12@gmail.com"
          });
        case 3:
          existUser = _context6.sent;
          _context6.next = 6;
          return secretKey.findOne();
        case 6:
          secretData = _context6.sent;
          console.log({
            u1: userData.name,
            id: userData.uid,
            email: userData.email
          });
          console.log({
            u1: existUser.name,
            id: existUser.uid,
            email: existUser.email,
            existUser: existUser
          });
          _context6.prev = 9;
          if (!(userData.displayName !== existUser.name || userData.uid !== existUser.uid || userData.email !== existUser.email)) {
            _context6.next = 19;
            break;
          }
          if (!(secretData.secretKey !== userSecret)) {
            _context6.next = 16;
            break;
          }
          console.log("secret Key not match!!");
          throw {
            message: "Unauthorized User!!"
          };
        case 16:
          console.log("secretKey match!!");
        case 17:
          _context6.next = 20;
          break;
        case 19:
          console.log("name match!!");
        case 20:
          res.status(200).send({
            status: true
          });
          _context6.next = 27;
          break;
        case 23:
          _context6.prev = 23;
          _context6.t0 = _context6["catch"](9);
          console.log("Resume Not Updated", _context6.t0.message);
          res.status(400).send(_context6.t0);
        case 27:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[9, 23]]);
  }));
  return function checkCreds(_x16, _x17, _x18) {
    return _ref6.apply(this, arguments);
  };
}();
var updateProjectStatus = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res, next) {
    var id, data, _req$body$secret5, userData, userSecret, existUser, secretData, resume;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          id = req.params.id;
          data = req.body;
          _req$body$secret5 = req.body.secret, userData = _req$body$secret5.userData, userSecret = _req$body$secret5.userSecret;
          _context7.next = 5;
          return users.findOne({
            email: "sandeepsokle12@gmail.com"
          });
        case 5:
          existUser = _context7.sent;
          _context7.next = 8;
          return secretKey.findOne();
        case 8:
          secretData = _context7.sent;
          console.log("start update data!!", {
            data: data,
            val: data.selectedVal,
            is: data.selectedVal === "Complete"
          });
          delete data.secret;

          // const finalData = { ...data, secret: undefined };
          _context7.prev = 11;
          if (!(userData.name !== existUser.displayName || userData.uid !== existUser.uid || userData.email !== existUser.email)) {
            _context7.next = 21;
            break;
          }
          if (!(secretData.secretKey !== userSecret)) {
            _context7.next = 18;
            break;
          }
          console.log("secret Key not match!!");
          throw {
            message: "Unauthorized User!!"
          };
        case 18:
          console.log("secretKey match!!");
        case 19:
          _context7.next = 22;
          break;
        case 21:
          console.log("name match!!");
        case 22:
          _context7.next = 24;
          return dataModel.findOneAndUpdate({
            id: id
          }, {
            type: "".concat(data.selectedVal === "Complete" ? "in progress" : "complete"),
            createdAt: new Date(),
            updatedAt: new Date()
          }, {
            "new": true
          });
        case 24:
          resume = _context7.sent;
          if (resume) {
            _context7.next = 27;
            break;
          }
          throw "Resume not found!!";
        case 27:
          console.log("Resume Updated", resume);
          res.status(200).send(resume);
          _context7.next = 35;
          break;
        case 31:
          _context7.prev = 31;
          _context7.t0 = _context7["catch"](11);
          console.log("Resume Not Updated", _context7.t0.message);
          res.status(400).send(_context7.t0);
        case 35:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[11, 31]]);
  }));
  return function updateProjectStatus(_x19, _x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();
module.exports = {
  getResume: getResume,
  saveResume: saveResume,
  deleteResume: deleteResume,
  updateResume: updateResume,
  getBlogs: getBlogs,
  checkCreds: checkCreds,
  updateProjectStatus: updateProjectStatus
};