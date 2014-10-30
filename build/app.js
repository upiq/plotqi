/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var d3 = __webpack_require__(4);
	var moment = __webpack_require__(2);
	__webpack_require__(3);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	if (typeof window.Symbol === 'undefined') {
	var SortaSymbol = (function(Object){
	 
	// (C) WebReflection Mit Style License
	 
	var ObjectPrototype = Object.prototype,
	defineProperty = Object.defineProperty,
	prefix = '__simbol' + Math.random() + '__',
	id = 0;
	 
	function get(){/*avoid set w/out get prob*/}
	 
	function Symbol() {
	var __symbol__ = prefix + id++;
	defineProperty(
	ObjectPrototype,
	this._ = __symbol__,
	{
	enumerable: false,
	configurable: false,
	get: get, // undefined
	set: function (value) {
	defineProperty(this, __symbol__, {
	enumerable: false,
	configurable: true,
	writable: true,
	value: value
	});
	}
	}
	);
	}
	 
	defineProperty(Symbol.prototype, 'toString', {
	enumerable: false,
	configurable: false,
	writable: false,
	value: function toString() {
	return this._;
	}
	});
	 
	return Symbol;
	 
	}(Object));
	window.Symbol = function() {
	  return new SortaSymbol();
	}
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {//! moment.js
	//! version : 2.8.3
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com
	(function(a){function b(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me")}}function c(a,b){return zb.call(a,b)}function d(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function e(a){tb.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function f(a,b){var c=!0;return m(function(){return c&&(e(a),c=!1),b.apply(this,arguments)},b)}function g(a,b){qc[a]||(e(b),qc[a]=!0)}function h(a,b){return function(c){return p(a.call(this,c),b)}}function i(a,b){return function(c){return this.localeData().ordinal(a.call(this,c),b)}}function j(){}function k(a,b){b!==!1&&F(a),n(this,a),this._d=new Date(+a._d)}function l(a){var b=y(a),c=b.year||0,d=b.quarter||0,e=b.month||0,f=b.week||0,g=b.day||0,h=b.hour||0,i=b.minute||0,j=b.second||0,k=b.millisecond||0;this._milliseconds=+k+1e3*j+6e4*i+36e5*h,this._days=+g+7*f,this._months=+e+3*d+12*c,this._data={},this._locale=tb.localeData(),this._bubble()}function m(a,b){for(var d in b)c(b,d)&&(a[d]=b[d]);return c(b,"toString")&&(a.toString=b.toString),c(b,"valueOf")&&(a.valueOf=b.valueOf),a}function n(a,b){var c,d,e;if("undefined"!=typeof b._isAMomentObject&&(a._isAMomentObject=b._isAMomentObject),"undefined"!=typeof b._i&&(a._i=b._i),"undefined"!=typeof b._f&&(a._f=b._f),"undefined"!=typeof b._l&&(a._l=b._l),"undefined"!=typeof b._strict&&(a._strict=b._strict),"undefined"!=typeof b._tzm&&(a._tzm=b._tzm),"undefined"!=typeof b._isUTC&&(a._isUTC=b._isUTC),"undefined"!=typeof b._offset&&(a._offset=b._offset),"undefined"!=typeof b._pf&&(a._pf=b._pf),"undefined"!=typeof b._locale&&(a._locale=b._locale),Ib.length>0)for(c in Ib)d=Ib[c],e=b[d],"undefined"!=typeof e&&(a[d]=e);return a}function o(a){return 0>a?Math.ceil(a):Math.floor(a)}function p(a,b,c){for(var d=""+Math.abs(a),e=a>=0;d.length<b;)d="0"+d;return(e?c?"+":"":"-")+d}function q(a,b){var c={milliseconds:0,months:0};return c.months=b.month()-a.month()+12*(b.year()-a.year()),a.clone().add(c.months,"M").isAfter(b)&&--c.months,c.milliseconds=+b-+a.clone().add(c.months,"M"),c}function r(a,b){var c;return b=K(b,a),a.isBefore(b)?c=q(a,b):(c=q(b,a),c.milliseconds=-c.milliseconds,c.months=-c.months),c}function s(a,b){return function(c,d){var e,f;return null===d||isNaN(+d)||(g(b,"moment()."+b+"(period, number) is deprecated. Please use moment()."+b+"(number, period)."),f=c,c=d,d=f),c="string"==typeof c?+c:c,e=tb.duration(c,d),t(this,e,a),this}}function t(a,b,c,d){var e=b._milliseconds,f=b._days,g=b._months;d=null==d?!0:d,e&&a._d.setTime(+a._d+e*c),f&&nb(a,"Date",mb(a,"Date")+f*c),g&&lb(a,mb(a,"Month")+g*c),d&&tb.updateOffset(a,f||g)}function u(a){return"[object Array]"===Object.prototype.toString.call(a)}function v(a){return"[object Date]"===Object.prototype.toString.call(a)||a instanceof Date}function w(a,b,c){var d,e=Math.min(a.length,b.length),f=Math.abs(a.length-b.length),g=0;for(d=0;e>d;d++)(c&&a[d]!==b[d]||!c&&A(a[d])!==A(b[d]))&&g++;return g+f}function x(a){if(a){var b=a.toLowerCase().replace(/(.)s$/,"$1");a=jc[a]||kc[b]||b}return a}function y(a){var b,d,e={};for(d in a)c(a,d)&&(b=x(d),b&&(e[b]=a[d]));return e}function z(b){var c,d;if(0===b.indexOf("week"))c=7,d="day";else{if(0!==b.indexOf("month"))return;c=12,d="month"}tb[b]=function(e,f){var g,h,i=tb._locale[b],j=[];if("number"==typeof e&&(f=e,e=a),h=function(a){var b=tb().utc().set(d,a);return i.call(tb._locale,b,e||"")},null!=f)return h(f);for(g=0;c>g;g++)j.push(h(g));return j}}function A(a){var b=+a,c=0;return 0!==b&&isFinite(b)&&(c=b>=0?Math.floor(b):Math.ceil(b)),c}function B(a,b){return new Date(Date.UTC(a,b+1,0)).getUTCDate()}function C(a,b,c){return hb(tb([a,11,31+b-c]),b,c).week}function D(a){return E(a)?366:365}function E(a){return a%4===0&&a%100!==0||a%400===0}function F(a){var b;a._a&&-2===a._pf.overflow&&(b=a._a[Bb]<0||a._a[Bb]>11?Bb:a._a[Cb]<1||a._a[Cb]>B(a._a[Ab],a._a[Bb])?Cb:a._a[Db]<0||a._a[Db]>23?Db:a._a[Eb]<0||a._a[Eb]>59?Eb:a._a[Fb]<0||a._a[Fb]>59?Fb:a._a[Gb]<0||a._a[Gb]>999?Gb:-1,a._pf._overflowDayOfYear&&(Ab>b||b>Cb)&&(b=Cb),a._pf.overflow=b)}function G(a){return null==a._isValid&&(a._isValid=!isNaN(a._d.getTime())&&a._pf.overflow<0&&!a._pf.empty&&!a._pf.invalidMonth&&!a._pf.nullInput&&!a._pf.invalidFormat&&!a._pf.userInvalidated,a._strict&&(a._isValid=a._isValid&&0===a._pf.charsLeftOver&&0===a._pf.unusedTokens.length)),a._isValid}function H(a){return a?a.toLowerCase().replace("_","-"):a}function I(a){for(var b,c,d,e,f=0;f<a.length;){for(e=H(a[f]).split("-"),b=e.length,c=H(a[f+1]),c=c?c.split("-"):null;b>0;){if(d=J(e.slice(0,b).join("-")))return d;if(c&&c.length>=b&&w(e,c,!0)>=b-1)break;b--}f++}return null}function J(a){var b=null;if(!Hb[a]&&Jb)try{b=tb.locale(),!(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()),tb.locale(b)}catch(c){}return Hb[a]}function K(a,b){return b._isUTC?tb(a).zone(b._offset||0):tb(a).local()}function L(a){return a.match(/\[[\s\S]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function M(a){var b,c,d=a.match(Nb);for(b=0,c=d.length;c>b;b++)d[b]=pc[d[b]]?pc[d[b]]:L(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function N(a,b){return a.isValid()?(b=O(b,a.localeData()),lc[b]||(lc[b]=M(b)),lc[b](a)):a.localeData().invalidDate()}function O(a,b){function c(a){return b.longDateFormat(a)||a}var d=5;for(Ob.lastIndex=0;d>=0&&Ob.test(a);)a=a.replace(Ob,c),Ob.lastIndex=0,d-=1;return a}function P(a,b){var c,d=b._strict;switch(a){case"Q":return Zb;case"DDDD":return _b;case"YYYY":case"GGGG":case"gggg":return d?ac:Rb;case"Y":case"G":case"g":return cc;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return d?bc:Sb;case"S":if(d)return Zb;case"SS":if(d)return $b;case"SSS":if(d)return _b;case"DDD":return Qb;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return Ub;case"a":case"A":return b._locale._meridiemParse;case"X":return Xb;case"Z":case"ZZ":return Vb;case"T":return Wb;case"SSSS":return Tb;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return d?$b:Pb;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return Pb;case"Do":return Yb;default:return c=new RegExp(Y(X(a.replace("\\","")),"i"))}}function Q(a){a=a||"";var b=a.match(Vb)||[],c=b[b.length-1]||[],d=(c+"").match(hc)||["-",0,0],e=+(60*d[1])+A(d[2]);return"+"===d[0]?-e:e}function R(a,b,c){var d,e=c._a;switch(a){case"Q":null!=b&&(e[Bb]=3*(A(b)-1));break;case"M":case"MM":null!=b&&(e[Bb]=A(b)-1);break;case"MMM":case"MMMM":d=c._locale.monthsParse(b),null!=d?e[Bb]=d:c._pf.invalidMonth=b;break;case"D":case"DD":null!=b&&(e[Cb]=A(b));break;case"Do":null!=b&&(e[Cb]=A(parseInt(b,10)));break;case"DDD":case"DDDD":null!=b&&(c._dayOfYear=A(b));break;case"YY":e[Ab]=tb.parseTwoDigitYear(b);break;case"YYYY":case"YYYYY":case"YYYYYY":e[Ab]=A(b);break;case"a":case"A":c._isPm=c._locale.isPM(b);break;case"H":case"HH":case"h":case"hh":e[Db]=A(b);break;case"m":case"mm":e[Eb]=A(b);break;case"s":case"ss":e[Fb]=A(b);break;case"S":case"SS":case"SSS":case"SSSS":e[Gb]=A(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=Q(b);break;case"dd":case"ddd":case"dddd":d=c._locale.weekdaysParse(b),null!=d?(c._w=c._w||{},c._w.d=d):c._pf.invalidWeekday=b;break;case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":a=a.substr(0,1);case"gggg":case"GGGG":case"GGGGG":a=a.substr(0,2),b&&(c._w=c._w||{},c._w[a]=A(b));break;case"gg":case"GG":c._w=c._w||{},c._w[a]=tb.parseTwoDigitYear(b)}}function S(a){var c,d,e,f,g,h,i;c=a._w,null!=c.GG||null!=c.W||null!=c.E?(g=1,h=4,d=b(c.GG,a._a[Ab],hb(tb(),1,4).year),e=b(c.W,1),f=b(c.E,1)):(g=a._locale._week.dow,h=a._locale._week.doy,d=b(c.gg,a._a[Ab],hb(tb(),g,h).year),e=b(c.w,1),null!=c.d?(f=c.d,g>f&&++e):f=null!=c.e?c.e+g:g),i=ib(d,e,f,h,g),a._a[Ab]=i.year,a._dayOfYear=i.dayOfYear}function T(a){var c,d,e,f,g=[];if(!a._d){for(e=V(a),a._w&&null==a._a[Cb]&&null==a._a[Bb]&&S(a),a._dayOfYear&&(f=b(a._a[Ab],e[Ab]),a._dayOfYear>D(f)&&(a._pf._overflowDayOfYear=!0),d=db(f,0,a._dayOfYear),a._a[Bb]=d.getUTCMonth(),a._a[Cb]=d.getUTCDate()),c=0;3>c&&null==a._a[c];++c)a._a[c]=g[c]=e[c];for(;7>c;c++)a._a[c]=g[c]=null==a._a[c]?2===c?1:0:a._a[c];a._d=(a._useUTC?db:cb).apply(null,g),null!=a._tzm&&a._d.setUTCMinutes(a._d.getUTCMinutes()+a._tzm)}}function U(a){var b;a._d||(b=y(a._i),a._a=[b.year,b.month,b.day,b.hour,b.minute,b.second,b.millisecond],T(a))}function V(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}function W(a){if(a._f===tb.ISO_8601)return void $(a);a._a=[],a._pf.empty=!0;var b,c,d,e,f,g=""+a._i,h=g.length,i=0;for(d=O(a._f,a._locale).match(Nb)||[],b=0;b<d.length;b++)e=d[b],c=(g.match(P(e,a))||[])[0],c&&(f=g.substr(0,g.indexOf(c)),f.length>0&&a._pf.unusedInput.push(f),g=g.slice(g.indexOf(c)+c.length),i+=c.length),pc[e]?(c?a._pf.empty=!1:a._pf.unusedTokens.push(e),R(e,c,a)):a._strict&&!c&&a._pf.unusedTokens.push(e);a._pf.charsLeftOver=h-i,g.length>0&&a._pf.unusedInput.push(g),a._isPm&&a._a[Db]<12&&(a._a[Db]+=12),a._isPm===!1&&12===a._a[Db]&&(a._a[Db]=0),T(a),F(a)}function X(a){return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(a,b,c,d,e){return b||c||d||e})}function Y(a){return a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function Z(a){var b,c,e,f,g;if(0===a._f.length)return a._pf.invalidFormat=!0,void(a._d=new Date(0/0));for(f=0;f<a._f.length;f++)g=0,b=n({},a),null!=a._useUTC&&(b._useUTC=a._useUTC),b._pf=d(),b._f=a._f[f],W(b),G(b)&&(g+=b._pf.charsLeftOver,g+=10*b._pf.unusedTokens.length,b._pf.score=g,(null==e||e>g)&&(e=g,c=b));m(a,c||b)}function $(a){var b,c,d=a._i,e=dc.exec(d);if(e){for(a._pf.iso=!0,b=0,c=fc.length;c>b;b++)if(fc[b][1].exec(d)){a._f=fc[b][0]+(e[6]||" ");break}for(b=0,c=gc.length;c>b;b++)if(gc[b][1].exec(d)){a._f+=gc[b][0];break}d.match(Vb)&&(a._f+="Z"),W(a)}else a._isValid=!1}function _(a){$(a),a._isValid===!1&&(delete a._isValid,tb.createFromInputFallback(a))}function ab(a,b){var c,d=[];for(c=0;c<a.length;++c)d.push(b(a[c],c));return d}function bb(b){var c,d=b._i;d===a?b._d=new Date:v(d)?b._d=new Date(+d):null!==(c=Kb.exec(d))?b._d=new Date(+c[1]):"string"==typeof d?_(b):u(d)?(b._a=ab(d.slice(0),function(a){return parseInt(a,10)}),T(b)):"object"==typeof d?U(b):"number"==typeof d?b._d=new Date(d):tb.createFromInputFallback(b)}function cb(a,b,c,d,e,f,g){var h=new Date(a,b,c,d,e,f,g);return 1970>a&&h.setFullYear(a),h}function db(a){var b=new Date(Date.UTC.apply(null,arguments));return 1970>a&&b.setUTCFullYear(a),b}function eb(a,b){if("string"==typeof a)if(isNaN(a)){if(a=b.weekdaysParse(a),"number"!=typeof a)return null}else a=parseInt(a,10);return a}function fb(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function gb(a,b,c){var d=tb.duration(a).abs(),e=yb(d.as("s")),f=yb(d.as("m")),g=yb(d.as("h")),h=yb(d.as("d")),i=yb(d.as("M")),j=yb(d.as("y")),k=e<mc.s&&["s",e]||1===f&&["m"]||f<mc.m&&["mm",f]||1===g&&["h"]||g<mc.h&&["hh",g]||1===h&&["d"]||h<mc.d&&["dd",h]||1===i&&["M"]||i<mc.M&&["MM",i]||1===j&&["y"]||["yy",j];return k[2]=b,k[3]=+a>0,k[4]=c,fb.apply({},k)}function hb(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=tb(a).add(f,"d"),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function ib(a,b,c,d,e){var f,g,h=db(a,0,1).getUTCDay();return h=0===h?7:h,c=null!=c?c:e,f=e-h+(h>d?7:0)-(e>h?7:0),g=7*(b-1)+(c-e)+f+1,{year:g>0?a:a-1,dayOfYear:g>0?g:D(a-1)+g}}function jb(b){var c=b._i,d=b._f;return b._locale=b._locale||tb.localeData(b._l),null===c||d===a&&""===c?tb.invalid({nullInput:!0}):("string"==typeof c&&(b._i=c=b._locale.preparse(c)),tb.isMoment(c)?new k(c,!0):(d?u(d)?Z(b):W(b):bb(b),new k(b)))}function kb(a,b){var c,d;if(1===b.length&&u(b[0])&&(b=b[0]),!b.length)return tb();for(c=b[0],d=1;d<b.length;++d)b[d][a](c)&&(c=b[d]);return c}function lb(a,b){var c;return"string"==typeof b&&(b=a.localeData().monthsParse(b),"number"!=typeof b)?a:(c=Math.min(a.date(),B(a.year(),b)),a._d["set"+(a._isUTC?"UTC":"")+"Month"](b,c),a)}function mb(a,b){return a._d["get"+(a._isUTC?"UTC":"")+b]()}function nb(a,b,c){return"Month"===b?lb(a,c):a._d["set"+(a._isUTC?"UTC":"")+b](c)}function ob(a,b){return function(c){return null!=c?(nb(this,a,c),tb.updateOffset(this,b),this):mb(this,a)}}function pb(a){return 400*a/146097}function qb(a){return 146097*a/400}function rb(a){tb.duration.fn[a]=function(){return this._data[a]}}function sb(a){"undefined"==typeof ender&&(ub=xb.moment,xb.moment=a?f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.",tb):tb)}for(var tb,ub,vb,wb="2.8.3",xb="undefined"!=typeof global?global:this,yb=Math.round,zb=Object.prototype.hasOwnProperty,Ab=0,Bb=1,Cb=2,Db=3,Eb=4,Fb=5,Gb=6,Hb={},Ib=[],Jb="undefined"!=typeof module&&module.exports,Kb=/^\/?Date\((\-?\d+)/i,Lb=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,Mb=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,Nb=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,Ob=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,Pb=/\d\d?/,Qb=/\d{1,3}/,Rb=/\d{1,4}/,Sb=/[+\-]?\d{1,6}/,Tb=/\d+/,Ub=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vb=/Z|[\+\-]\d\d:?\d\d/gi,Wb=/T/i,Xb=/[\+\-]?\d+(\.\d{1,3})?/,Yb=/\d{1,2}/,Zb=/\d/,$b=/\d\d/,_b=/\d{3}/,ac=/\d{4}/,bc=/[+-]?\d{6}/,cc=/[+-]?\d+/,dc=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,ec="YYYY-MM-DDTHH:mm:ssZ",fc=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],gc=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],hc=/([\+\-]|\d\d)/gi,ic=("Date|Hours|Minutes|Seconds|Milliseconds".split("|"),{Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6}),jc={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},kc={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},lc={},mc={s:45,m:45,h:22,d:26,M:11},nc="DDD w W M D d".split(" "),oc="M D H h m s w W".split(" "),pc={M:function(){return this.month()+1},MMM:function(a){return this.localeData().monthsShort(this,a)},MMMM:function(a){return this.localeData().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.localeData().weekdaysMin(this,a)},ddd:function(a){return this.localeData().weekdaysShort(this,a)},dddd:function(a){return this.localeData().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return p(this.year()%100,2)},YYYY:function(){return p(this.year(),4)},YYYYY:function(){return p(this.year(),5)},YYYYYY:function(){var a=this.year(),b=a>=0?"+":"-";return b+p(Math.abs(a),6)},gg:function(){return p(this.weekYear()%100,2)},gggg:function(){return p(this.weekYear(),4)},ggggg:function(){return p(this.weekYear(),5)},GG:function(){return p(this.isoWeekYear()%100,2)},GGGG:function(){return p(this.isoWeekYear(),4)},GGGGG:function(){return p(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return A(this.milliseconds()/100)},SS:function(){return p(A(this.milliseconds()/10),2)},SSS:function(){return p(this.milliseconds(),3)},SSSS:function(){return p(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+":"+p(A(a)%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+p(A(a/60),2)+p(A(a)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},qc={},rc=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];nc.length;)vb=nc.pop(),pc[vb+"o"]=i(pc[vb],vb);for(;oc.length;)vb=oc.pop(),pc[vb+vb]=h(pc[vb],2);pc.DDDD=h(pc.DDD,3),m(j.prototype,{set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=tb.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=tb([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return hb(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),tb=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._i=b,g._f=c,g._l=e,g._strict=f,g._isUTC=!1,g._pf=d(),jb(g)},tb.suppressDeprecationWarnings=!1,tb.createFromInputFallback=f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.",function(a){a._d=new Date(a._i)}),tb.min=function(){var a=[].slice.call(arguments,0);return kb("isBefore",a)},tb.max=function(){var a=[].slice.call(arguments,0);return kb("isAfter",a)},tb.utc=function(b,c,e,f){var g;return"boolean"==typeof e&&(f=e,e=a),g={},g._isAMomentObject=!0,g._useUTC=!0,g._isUTC=!0,g._l=e,g._i=b,g._f=c,g._strict=f,g._pf=d(),jb(g).utc()},tb.unix=function(a){return tb(1e3*a)},tb.duration=function(a,b){var d,e,f,g,h=a,i=null;return tb.isDuration(a)?h={ms:a._milliseconds,d:a._days,M:a._months}:"number"==typeof a?(h={},b?h[b]=a:h.milliseconds=a):(i=Lb.exec(a))?(d="-"===i[1]?-1:1,h={y:0,d:A(i[Cb])*d,h:A(i[Db])*d,m:A(i[Eb])*d,s:A(i[Fb])*d,ms:A(i[Gb])*d}):(i=Mb.exec(a))?(d="-"===i[1]?-1:1,f=function(a){var b=a&&parseFloat(a.replace(",","."));return(isNaN(b)?0:b)*d},h={y:f(i[2]),M:f(i[3]),d:f(i[4]),h:f(i[5]),m:f(i[6]),s:f(i[7]),w:f(i[8])}):"object"==typeof h&&("from"in h||"to"in h)&&(g=r(tb(h.from),tb(h.to)),h={},h.ms=g.milliseconds,h.M=g.months),e=new l(h),tb.isDuration(a)&&c(a,"_locale")&&(e._locale=a._locale),e},tb.version=wb,tb.defaultFormat=ec,tb.ISO_8601=function(){},tb.momentProperties=Ib,tb.updateOffset=function(){},tb.relativeTimeThreshold=function(b,c){return mc[b]===a?!1:c===a?mc[b]:(mc[b]=c,!0)},tb.lang=f("moment.lang is deprecated. Use moment.locale instead.",function(a,b){return tb.locale(a,b)}),tb.locale=function(a,b){var c;return a&&(c="undefined"!=typeof b?tb.defineLocale(a,b):tb.localeData(a),c&&(tb.duration._locale=tb._locale=c)),tb._locale._abbr},tb.defineLocale=function(a,b){return null!==b?(b.abbr=a,Hb[a]||(Hb[a]=new j),Hb[a].set(b),tb.locale(a),Hb[a]):(delete Hb[a],null)},tb.langData=f("moment.langData is deprecated. Use moment.localeData instead.",function(a){return tb.localeData(a)}),tb.localeData=function(a){var b;if(a&&a._locale&&a._locale._abbr&&(a=a._locale._abbr),!a)return tb._locale;if(!u(a)){if(b=J(a))return b;a=[a]}return I(a)},tb.isMoment=function(a){return a instanceof k||null!=a&&c(a,"_isAMomentObject")},tb.isDuration=function(a){return a instanceof l};for(vb=rc.length-1;vb>=0;--vb)z(rc[vb]);tb.normalizeUnits=function(a){return x(a)},tb.invalid=function(a){var b=tb.utc(0/0);return null!=a?m(b._pf,a):b._pf.userInvalidated=!0,b},tb.parseZone=function(){return tb.apply(null,arguments).parseZone()},tb.parseTwoDigitYear=function(a){return A(a)+(A(a)>68?1900:2e3)},m(tb.fn=k.prototype,{clone:function(){return tb(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var a=tb(this).utc();return 0<a.year()&&a.year()<=9999?N(a,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):N(a,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return G(this)},isDSTShifted:function(){return this._a?this.isValid()&&w(this._a,(this._isUTC?tb.utc(this._a):tb(this._a)).toArray())>0:!1},parsingFlags:function(){return m({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(a){return this.zone(0,a)},local:function(a){return this._isUTC&&(this.zone(0,a),this._isUTC=!1,a&&this.add(this._dateTzOffset(),"m")),this},format:function(a){var b=N(this,a||tb.defaultFormat);return this.localeData().postformat(b)},add:s(1,"add"),subtract:s(-1,"subtract"),diff:function(a,b,c){var d,e,f,g=K(a,this),h=6e4*(this.zone()-g.zone());return b=x(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+g.daysInMonth()),e=12*(this.year()-g.year())+(this.month()-g.month()),f=this-tb(this).startOf("month")-(g-tb(g).startOf("month")),f-=6e4*(this.zone()-tb(this).startOf("month").zone()-(g.zone()-tb(g).startOf("month").zone())),e+=f/d,"year"===b&&(e/=12)):(d=this-g,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-h)/864e5:"week"===b?(d-h)/6048e5:d),c?e:o(e)},from:function(a,b){return tb.duration({to:this,from:a}).locale(this.locale()).humanize(!b)},fromNow:function(a){return this.from(tb(),a)},calendar:function(a){var b=a||tb(),c=K(b,this).startOf("day"),d=this.diff(c,"days",!0),e=-6>d?"sameElse":-1>d?"lastWeek":0>d?"lastDay":1>d?"sameDay":2>d?"nextDay":7>d?"nextWeek":"sameElse";return this.format(this.localeData().calendar(e,this))},isLeapYear:function(){return E(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?(a=eb(a,this.localeData()),this.add(a-b,"d")):b},month:ob("Month",!0),startOf:function(a){switch(a=x(a)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoWeek"===a&&this.isoWeekday(1),"quarter"===a&&this.month(3*Math.floor(this.month()/3)),this},endOf:function(a){return a=x(a),this.startOf(a).add(1,"isoWeek"===a?"week":a).subtract(1,"ms")},isAfter:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this>+a):+this.clone().startOf(b)>+tb(a).startOf(b)},isBefore:function(a,b){return b=x("undefined"!=typeof b?b:"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+a>+this):+this.clone().startOf(b)<+tb(a).startOf(b)},isSame:function(a,b){return b=x(b||"millisecond"),"millisecond"===b?(a=tb.isMoment(a)?a:tb(a),+this===+a):+this.clone().startOf(b)===+K(a,this).startOf(b)},min:f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),this>a?this:a}),max:f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(a){return a=tb.apply(null,arguments),a>this?this:a}),zone:function(a,b){var c,d=this._offset||0;return null==a?this._isUTC?d:this._dateTzOffset():("string"==typeof a&&(a=Q(a)),Math.abs(a)<16&&(a=60*a),!this._isUTC&&b&&(c=this._dateTzOffset()),this._offset=a,this._isUTC=!0,null!=c&&this.subtract(c,"m"),d!==a&&(!b||this._changeInProgress?t(this,tb.duration(d-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,tb.updateOffset(this,!0),this._changeInProgress=null)),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(a){return a=a?tb(a).zone():0,(this.zone()-a)%60===0},daysInMonth:function(){return B(this.year(),this.month())},dayOfYear:function(a){var b=yb((tb(this).startOf("day")-tb(this).startOf("year"))/864e5)+1;return null==a?b:this.add(a-b,"d")},quarter:function(a){return null==a?Math.ceil((this.month()+1)/3):this.month(3*(a-1)+this.month()%3)},weekYear:function(a){var b=hb(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==a?b:this.add(a-b,"y")},isoWeekYear:function(a){var b=hb(this,1,4).year;return null==a?b:this.add(a-b,"y")},week:function(a){var b=this.localeData().week(this);return null==a?b:this.add(7*(a-b),"d")},isoWeek:function(a){var b=hb(this,1,4).week;return null==a?b:this.add(7*(a-b),"d")},weekday:function(a){var b=(this.day()+7-this.localeData()._week.dow)%7;return null==a?b:this.add(a-b,"d")},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},isoWeeksInYear:function(){return C(this.year(),1,4)},weeksInYear:function(){var a=this.localeData()._week;return C(this.year(),a.dow,a.doy)},get:function(a){return a=x(a),this[a]()},set:function(a,b){return a=x(a),"function"==typeof this[a]&&this[a](b),this},locale:function(b){var c;return b===a?this._locale._abbr:(c=tb.localeData(b),null!=c&&(this._locale=c),this)},lang:f("moment().lang() is deprecated. Use moment().localeData() instead.",function(b){return b===a?this.localeData():this.locale(b)}),localeData:function(){return this._locale},_dateTzOffset:function(){return 15*Math.round(this._d.getTimezoneOffset()/15)}}),tb.fn.millisecond=tb.fn.milliseconds=ob("Milliseconds",!1),tb.fn.second=tb.fn.seconds=ob("Seconds",!1),tb.fn.minute=tb.fn.minutes=ob("Minutes",!1),tb.fn.hour=tb.fn.hours=ob("Hours",!0),tb.fn.date=ob("Date",!0),tb.fn.dates=f("dates accessor is deprecated. Use date instead.",ob("Date",!0)),tb.fn.year=ob("FullYear",!0),tb.fn.years=f("years accessor is deprecated. Use year instead.",ob("FullYear",!0)),tb.fn.days=tb.fn.day,tb.fn.months=tb.fn.month,tb.fn.weeks=tb.fn.week,tb.fn.isoWeeks=tb.fn.isoWeek,tb.fn.quarters=tb.fn.quarter,tb.fn.toJSON=tb.fn.toISOString,m(tb.duration.fn=l.prototype,{_bubble:function(){var a,b,c,d=this._milliseconds,e=this._days,f=this._months,g=this._data,h=0;g.milliseconds=d%1e3,a=o(d/1e3),g.seconds=a%60,b=o(a/60),g.minutes=b%60,c=o(b/60),g.hours=c%24,e+=o(c/24),h=o(pb(e)),e-=o(qb(h)),f+=o(e/30),e%=30,h+=o(f/12),f%=12,g.days=e,g.months=f,g.years=h},abs:function(){return this._milliseconds=Math.abs(this._milliseconds),this._days=Math.abs(this._days),this._months=Math.abs(this._months),this._data.milliseconds=Math.abs(this._data.milliseconds),this._data.seconds=Math.abs(this._data.seconds),this._data.minutes=Math.abs(this._data.minutes),this._data.hours=Math.abs(this._data.hours),this._data.months=Math.abs(this._data.months),this._data.years=Math.abs(this._data.years),this},weeks:function(){return o(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*A(this._months/12)},humanize:function(a){var b=gb(this,!a,this.localeData());return a&&(b=this.localeData().pastFuture(+this,b)),this.localeData().postformat(b)},add:function(a,b){var c=tb.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=tb.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=x(a),this[a.toLowerCase()+"s"]()},as:function(a){var b,c;if(a=x(a),"month"===a||"year"===a)return b=this._days+this._milliseconds/864e5,c=this._months+12*pb(b),"month"===a?c:c/12;switch(b=this._days+qb(this._months/12),a){case"week":return b/7+this._milliseconds/6048e5;case"day":return b+this._milliseconds/864e5;case"hour":return 24*b+this._milliseconds/36e5;case"minute":return 24*b*60+this._milliseconds/6e4;case"second":return 24*b*60*60+this._milliseconds/1e3;case"millisecond":return Math.floor(24*b*60*60*1e3)+this._milliseconds;default:throw new Error("Unknown unit "+a)}},lang:tb.fn.lang,locale:tb.fn.locale,toIsoString:f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",function(){return this.toISOString()}),toISOString:function(){var a=Math.abs(this.years()),b=Math.abs(this.months()),c=Math.abs(this.days()),d=Math.abs(this.hours()),e=Math.abs(this.minutes()),f=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(this.asSeconds()<0?"-":"")+"P"+(a?a+"Y":"")+(b?b+"M":"")+(c?c+"D":"")+(d||e||f?"T":"")+(d?d+"H":"")+(e?e+"M":"")+(f?f+"S":""):"P0D"},localeData:function(){return this._locale}}),tb.duration.fn.toString=tb.duration.fn.toISOString;for(vb in ic)c(ic,vb)&&rb(vb.toLowerCase());tb.duration.fn.asMilliseconds=function(){return this.as("ms")},tb.duration.fn.asSeconds=function(){return this.as("s")},tb.duration.fn.asMinutes=function(){return this.as("m")},tb.duration.fn.asHours=function(){return this.as("h")},tb.duration.fn.asDays=function(){return this.as("d")},tb.duration.fn.asWeeks=function(){return this.as("weeks")},tb.duration.fn.asMonths=function(){return this.as("M")},tb.duration.fn.asYears=function(){return this.as("y")},tb.locale("en",{ordinal:function(a){var b=a%10,c=1===A(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";
	return a+c}}),Jb?module.exports=tb:true?(!(__WEBPACK_AMD_DEFINE_RESULT__ = function(a,b,c){return c.config&&c.config()&&c.config().noGlobal===!0&&(xb.moment=ub),tb}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),sb(!0)):sb()}).call(this);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var getObjects = __webpack_require__(5).getObjects;
	var Chart = __webpack_require__(6).Chart;
	var SmallMultiplesChart = __webpack_require__(7).SmallMultiplesChart;
	var LargeChart = __webpack_require__(8).LargeChart;
	var d3 = __webpack_require__(4);
	var nv = __webpack_require__(12);
	getObjects('report.json', function (charts) {
	  console.log(charts);
	  charts = charts.map( function(graph) {
	    return Chart(graph);
	  } )
	  window.charts = charts;
	  /* window.container = ChartContainer;
	  window.graphs = charts.map( chart => new TimeGraph(chart) );
	  function renderAll() {
	    graphs.forEach(function (g) {
	    var div = d3.select('body')
	                .append('div')
	                .attr('id', g.id)
	                .classed('chart-div', true)
	                .style('position', 'relative')
	                .style('width', g.container.width + 'px')
	                .style('height', g.container.height + 'px');

	    var svg = div.append('svg')
	                 .attr('width', '100%')
	                 .attr('height', '100%')
	                 .style('position', 'absolute')
	                 .style('top', '0')
	                 .style('left', '0')
	                 .style('background-color', 'rgb(' + Math.round(Math.random() * 256) + ',' + Math.round(Math.random() * 256) + ',' + Math.round(Math.random() * 256) + ')');

	    svg.data(g.chart.series);
	    });
	  }
	  renderAll();
	  //d3.select(window).on('resize', renderAll);*/
	  var small_div = d3.select('#small-chart-div-test_numero_dos');
	  var lg_div = d3.select('#chart-div-test_numero_dos');
	  /*window.nvchart = graphs[0].bindTo(svg.node());
	  nv.addGraph( () => {
	    var c = nvchart.prepare();
	    d3.select('#chart-div-test_numero_dos svg')
	      .append('text')
	      .attr('x', 5)
	      .attr('y', 160 - 2)
	      .attr('text-anchor', 'left')
	      //.style('font-size', '8pt')
	      .style('letter-spacing', '-0.1em')
	      //.attr('textLength', '160')
	      //.attr('lengthAdjust', 'spacingAndGlyphs')
	      .text(nvchart.chart.title);
	    nvchart.goal();
	    nvchart.legend();
	    return c;
	  } );*/
	  nv.addGraph(SmallMultiplesChart(charts[0], small_div));
	  nv.addGraph(LargeChart(charts[0], lg_div));
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function() {
	  var d3 = {
	    version: "3.4.11"
	  };
	  if (!Date.now) Date.now = function() {
	    return +new Date();
	  };
	  var d3_arraySlice = [].slice, d3_array = function(list) {
	    return d3_arraySlice.call(list);
	  };
	  var d3_document = document, d3_documentElement = d3_document.documentElement, d3_window = window;
	  try {
	    d3_array(d3_documentElement.childNodes)[0].nodeType;
	  } catch (e) {
	    d3_array = function(list) {
	      var i = list.length, array = new Array(i);
	      while (i--) array[i] = list[i];
	      return array;
	    };
	  }
	  try {
	    d3_document.createElement("div").style.setProperty("opacity", 0, "");
	  } catch (error) {
	    var d3_element_prototype = d3_window.Element.prototype, d3_element_setAttribute = d3_element_prototype.setAttribute, d3_element_setAttributeNS = d3_element_prototype.setAttributeNS, d3_style_prototype = d3_window.CSSStyleDeclaration.prototype, d3_style_setProperty = d3_style_prototype.setProperty;
	    d3_element_prototype.setAttribute = function(name, value) {
	      d3_element_setAttribute.call(this, name, value + "");
	    };
	    d3_element_prototype.setAttributeNS = function(space, local, value) {
	      d3_element_setAttributeNS.call(this, space, local, value + "");
	    };
	    d3_style_prototype.setProperty = function(name, value, priority) {
	      d3_style_setProperty.call(this, name, value + "", priority);
	    };
	  }
	  d3.ascending = d3_ascending;
	  function d3_ascending(a, b) {
	    return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
	  }
	  d3.descending = function(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  };
	  d3.min = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n && !((a = array[i]) != null && a <= a)) a = undefined;
	      while (++i < n) if ((b = array[i]) != null && a > b) a = b;
	    } else {
	      while (++i < n && !((a = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && a > b) a = b;
	    }
	    return a;
	  };
	  d3.max = function(array, f) {
	    var i = -1, n = array.length, a, b;
	    if (arguments.length === 1) {
	      while (++i < n && !((a = array[i]) != null && a <= a)) a = undefined;
	      while (++i < n) if ((b = array[i]) != null && b > a) a = b;
	    } else {
	      while (++i < n && !((a = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null && b > a) a = b;
	    }
	    return a;
	  };
	  d3.extent = function(array, f) {
	    var i = -1, n = array.length, a, b, c;
	    if (arguments.length === 1) {
	      while (++i < n && !((a = c = array[i]) != null && a <= a)) a = c = undefined;
	      while (++i < n) if ((b = array[i]) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    } else {
	      while (++i < n && !((a = c = f.call(array, array[i], i)) != null && a <= a)) a = undefined;
	      while (++i < n) if ((b = f.call(array, array[i], i)) != null) {
	        if (a > b) a = b;
	        if (c < b) c = b;
	      }
	    }
	    return [ a, c ];
	  };
	  d3.sum = function(array, f) {
	    var s = 0, n = array.length, a, i = -1;
	    if (arguments.length === 1) {
	      while (++i < n) if (!isNaN(a = +array[i])) s += a;
	    } else {
	      while (++i < n) if (!isNaN(a = +f.call(array, array[i], i))) s += a;
	    }
	    return s;
	  };
	  function d3_number(x) {
	    return x != null && !isNaN(x);
	  }
	  d3.mean = function(array, f) {
	    var s = 0, n = array.length, a, i = -1, j = n;
	    if (arguments.length === 1) {
	      while (++i < n) if (d3_number(a = array[i])) s += a; else --j;
	    } else {
	      while (++i < n) if (d3_number(a = f.call(array, array[i], i))) s += a; else --j;
	    }
	    return j ? s / j : undefined;
	  };
	  d3.quantile = function(values, p) {
	    var H = (values.length - 1) * p + 1, h = Math.floor(H), v = +values[h - 1], e = H - h;
	    return e ? v + e * (values[h] - v) : v;
	  };
	  d3.median = function(array, f) {
	    if (arguments.length > 1) array = array.map(f);
	    array = array.filter(d3_number);
	    return array.length ? d3.quantile(array.sort(d3_ascending), .5) : undefined;
	  };
	  function d3_bisector(compare) {
	    return {
	      left: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) < 0) lo = mid + 1; else hi = mid;
	        }
	        return lo;
	      },
	      right: function(a, x, lo, hi) {
	        if (arguments.length < 3) lo = 0;
	        if (arguments.length < 4) hi = a.length;
	        while (lo < hi) {
	          var mid = lo + hi >>> 1;
	          if (compare(a[mid], x) > 0) hi = mid; else lo = mid + 1;
	        }
	        return lo;
	      }
	    };
	  }
	  var d3_bisect = d3_bisector(d3_ascending);
	  d3.bisectLeft = d3_bisect.left;
	  d3.bisect = d3.bisectRight = d3_bisect.right;
	  d3.bisector = function(f) {
	    return d3_bisector(f.length === 1 ? function(d, x) {
	      return d3_ascending(f(d), x);
	    } : f);
	  };
	  d3.shuffle = function(array) {
	    var m = array.length, t, i;
	    while (m) {
	      i = Math.random() * m-- | 0;
	      t = array[m], array[m] = array[i], array[i] = t;
	    }
	    return array;
	  };
	  d3.permute = function(array, indexes) {
	    var i = indexes.length, permutes = new Array(i);
	    while (i--) permutes[i] = array[indexes[i]];
	    return permutes;
	  };
	  d3.pairs = function(array) {
	    var i = 0, n = array.length - 1, p0, p1 = array[0], pairs = new Array(n < 0 ? 0 : n);
	    while (i < n) pairs[i] = [ p0 = p1, p1 = array[++i] ];
	    return pairs;
	  };
	  d3.zip = function() {
	    if (!(n = arguments.length)) return [];
	    for (var i = -1, m = d3.min(arguments, d3_zipLength), zips = new Array(m); ++i < m; ) {
	      for (var j = -1, n, zip = zips[i] = new Array(n); ++j < n; ) {
	        zip[j] = arguments[j][i];
	      }
	    }
	    return zips;
	  };
	  function d3_zipLength(d) {
	    return d.length;
	  }
	  d3.transpose = function(matrix) {
	    return d3.zip.apply(d3, matrix);
	  };
	  d3.keys = function(map) {
	    var keys = [];
	    for (var key in map) keys.push(key);
	    return keys;
	  };
	  d3.values = function(map) {
	    var values = [];
	    for (var key in map) values.push(map[key]);
	    return values;
	  };
	  d3.entries = function(map) {
	    var entries = [];
	    for (var key in map) entries.push({
	      key: key,
	      value: map[key]
	    });
	    return entries;
	  };
	  d3.merge = function(arrays) {
	    var n = arrays.length, m, i = -1, j = 0, merged, array;
	    while (++i < n) j += arrays[i].length;
	    merged = new Array(j);
	    while (--n >= 0) {
	      array = arrays[n];
	      m = array.length;
	      while (--m >= 0) {
	        merged[--j] = array[m];
	      }
	    }
	    return merged;
	  };
	  var abs = Math.abs;
	  d3.range = function(start, stop, step) {
	    if (arguments.length < 3) {
	      step = 1;
	      if (arguments.length < 2) {
	        stop = start;
	        start = 0;
	      }
	    }
	    if ((stop - start) / step === Infinity) throw new Error("infinite range");
	    var range = [], k = d3_range_integerScale(abs(step)), i = -1, j;
	    start *= k, stop *= k, step *= k;
	    if (step < 0) while ((j = start + step * ++i) > stop) range.push(j / k); else while ((j = start + step * ++i) < stop) range.push(j / k);
	    return range;
	  };
	  function d3_range_integerScale(x) {
	    var k = 1;
	    while (x * k % 1) k *= 10;
	    return k;
	  }
	  function d3_class(ctor, properties) {
	    try {
	      for (var key in properties) {
	        Object.defineProperty(ctor.prototype, key, {
	          value: properties[key],
	          enumerable: false
	        });
	      }
	    } catch (e) {
	      ctor.prototype = properties;
	    }
	  }
	  d3.map = function(object) {
	    var map = new d3_Map();
	    if (object instanceof d3_Map) object.forEach(function(key, value) {
	      map.set(key, value);
	    }); else for (var key in object) map.set(key, object[key]);
	    return map;
	  };
	  function d3_Map() {}
	  d3_class(d3_Map, {
	    has: d3_map_has,
	    get: function(key) {
	      return this[d3_map_prefix + key];
	    },
	    set: function(key, value) {
	      return this[d3_map_prefix + key] = value;
	    },
	    remove: d3_map_remove,
	    keys: d3_map_keys,
	    values: function() {
	      var values = [];
	      this.forEach(function(key, value) {
	        values.push(value);
	      });
	      return values;
	    },
	    entries: function() {
	      var entries = [];
	      this.forEach(function(key, value) {
	        entries.push({
	          key: key,
	          value: value
	        });
	      });
	      return entries;
	    },
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var key in this) if (key.charCodeAt(0) === d3_map_prefixCode) f.call(this, key.substring(1), this[key]);
	    }
	  });
	  var d3_map_prefix = "\x00", d3_map_prefixCode = d3_map_prefix.charCodeAt(0);
	  function d3_map_has(key) {
	    return d3_map_prefix + key in this;
	  }
	  function d3_map_remove(key) {
	    key = d3_map_prefix + key;
	    return key in this && delete this[key];
	  }
	  function d3_map_keys() {
	    var keys = [];
	    this.forEach(function(key) {
	      keys.push(key);
	    });
	    return keys;
	  }
	  function d3_map_size() {
	    var size = 0;
	    for (var key in this) if (key.charCodeAt(0) === d3_map_prefixCode) ++size;
	    return size;
	  }
	  function d3_map_empty() {
	    for (var key in this) if (key.charCodeAt(0) === d3_map_prefixCode) return false;
	    return true;
	  }
	  d3.nest = function() {
	    var nest = {}, keys = [], sortKeys = [], sortValues, rollup;
	    function map(mapType, array, depth) {
	      if (depth >= keys.length) return rollup ? rollup.call(nest, array) : sortValues ? array.sort(sortValues) : array;
	      var i = -1, n = array.length, key = keys[depth++], keyValue, object, setter, valuesByKey = new d3_Map(), values;
	      while (++i < n) {
	        if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
	          values.push(object);
	        } else {
	          valuesByKey.set(keyValue, [ object ]);
	        }
	      }
	      if (mapType) {
	        object = mapType();
	        setter = function(keyValue, values) {
	          object.set(keyValue, map(mapType, values, depth));
	        };
	      } else {
	        object = {};
	        setter = function(keyValue, values) {
	          object[keyValue] = map(mapType, values, depth);
	        };
	      }
	      valuesByKey.forEach(setter);
	      return object;
	    }
	    function entries(map, depth) {
	      if (depth >= keys.length) return map;
	      var array = [], sortKey = sortKeys[depth++];
	      map.forEach(function(key, keyMap) {
	        array.push({
	          key: key,
	          values: entries(keyMap, depth)
	        });
	      });
	      return sortKey ? array.sort(function(a, b) {
	        return sortKey(a.key, b.key);
	      }) : array;
	    }
	    nest.map = function(array, mapType) {
	      return map(mapType, array, 0);
	    };
	    nest.entries = function(array) {
	      return entries(map(d3.map, array, 0), 0);
	    };
	    nest.key = function(d) {
	      keys.push(d);
	      return nest;
	    };
	    nest.sortKeys = function(order) {
	      sortKeys[keys.length - 1] = order;
	      return nest;
	    };
	    nest.sortValues = function(order) {
	      sortValues = order;
	      return nest;
	    };
	    nest.rollup = function(f) {
	      rollup = f;
	      return nest;
	    };
	    return nest;
	  };
	  d3.set = function(array) {
	    var set = new d3_Set();
	    if (array) for (var i = 0, n = array.length; i < n; ++i) set.add(array[i]);
	    return set;
	  };
	  function d3_Set() {}
	  d3_class(d3_Set, {
	    has: d3_map_has,
	    add: function(value) {
	      this[d3_map_prefix + value] = true;
	      return value;
	    },
	    remove: function(value) {
	      value = d3_map_prefix + value;
	      return value in this && delete this[value];
	    },
	    values: d3_map_keys,
	    size: d3_map_size,
	    empty: d3_map_empty,
	    forEach: function(f) {
	      for (var value in this) if (value.charCodeAt(0) === d3_map_prefixCode) f.call(this, value.substring(1));
	    }
	  });
	  d3.behavior = {};
	  d3.rebind = function(target, source) {
	    var i = 1, n = arguments.length, method;
	    while (++i < n) target[method = arguments[i]] = d3_rebind(target, source, source[method]);
	    return target;
	  };
	  function d3_rebind(target, source, method) {
	    return function() {
	      var value = method.apply(source, arguments);
	      return value === source ? target : value;
	    };
	  }
	  function d3_vendorSymbol(object, name) {
	    if (name in object) return name;
	    name = name.charAt(0).toUpperCase() + name.substring(1);
	    for (var i = 0, n = d3_vendorPrefixes.length; i < n; ++i) {
	      var prefixName = d3_vendorPrefixes[i] + name;
	      if (prefixName in object) return prefixName;
	    }
	  }
	  var d3_vendorPrefixes = [ "webkit", "ms", "moz", "Moz", "o", "O" ];
	  function d3_noop() {}
	  d3.dispatch = function() {
	    var dispatch = new d3_dispatch(), i = -1, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    return dispatch;
	  };
	  function d3_dispatch() {}
	  d3_dispatch.prototype.on = function(type, listener) {
	    var i = type.indexOf("."), name = "";
	    if (i >= 0) {
	      name = type.substring(i + 1);
	      type = type.substring(0, i);
	    }
	    if (type) return arguments.length < 2 ? this[type].on(name) : this[type].on(name, listener);
	    if (arguments.length === 2) {
	      if (listener == null) for (type in this) {
	        if (this.hasOwnProperty(type)) this[type].on(name, null);
	      }
	      return this;
	    }
	  };
	  function d3_dispatch_event(dispatch) {
	    var listeners = [], listenerByName = new d3_Map();
	    function event() {
	      var z = listeners, i = -1, n = z.length, l;
	      while (++i < n) if (l = z[i].on) l.apply(this, arguments);
	      return dispatch;
	    }
	    event.on = function(name, listener) {
	      var l = listenerByName.get(name), i;
	      if (arguments.length < 2) return l && l.on;
	      if (l) {
	        l.on = null;
	        listeners = listeners.slice(0, i = listeners.indexOf(l)).concat(listeners.slice(i + 1));
	        listenerByName.remove(name);
	      }
	      if (listener) listeners.push(listenerByName.set(name, {
	        on: listener
	      }));
	      return dispatch;
	    };
	    return event;
	  }
	  d3.event = null;
	  function d3_eventPreventDefault() {
	    d3.event.preventDefault();
	  }
	  function d3_eventSource() {
	    var e = d3.event, s;
	    while (s = e.sourceEvent) e = s;
	    return e;
	  }
	  function d3_eventDispatch(target) {
	    var dispatch = new d3_dispatch(), i = 0, n = arguments.length;
	    while (++i < n) dispatch[arguments[i]] = d3_dispatch_event(dispatch);
	    dispatch.of = function(thiz, argumentz) {
	      return function(e1) {
	        try {
	          var e0 = e1.sourceEvent = d3.event;
	          e1.target = target;
	          d3.event = e1;
	          dispatch[e1.type].apply(thiz, argumentz);
	        } finally {
	          d3.event = e0;
	        }
	      };
	    };
	    return dispatch;
	  }
	  d3.requote = function(s) {
	    return s.replace(d3_requote_re, "\\$&");
	  };
	  var d3_requote_re = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
	  var d3_subclass = {}.__proto__ ? function(object, prototype) {
	    object.__proto__ = prototype;
	  } : function(object, prototype) {
	    for (var property in prototype) object[property] = prototype[property];
	  };
	  function d3_selection(groups) {
	    d3_subclass(groups, d3_selectionPrototype);
	    return groups;
	  }
	  var d3_select = function(s, n) {
	    return n.querySelector(s);
	  }, d3_selectAll = function(s, n) {
	    return n.querySelectorAll(s);
	  }, d3_selectMatcher = d3_documentElement.matches || d3_documentElement[d3_vendorSymbol(d3_documentElement, "matchesSelector")], d3_selectMatches = function(n, s) {
	    return d3_selectMatcher.call(n, s);
	  };
	  if (typeof Sizzle === "function") {
	    d3_select = function(s, n) {
	      return Sizzle(s, n)[0] || null;
	    };
	    d3_selectAll = Sizzle;
	    d3_selectMatches = Sizzle.matchesSelector;
	  }
	  d3.selection = function() {
	    return d3_selectionRoot;
	  };
	  var d3_selectionPrototype = d3.selection.prototype = [];
	  d3_selectionPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, group, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(subnode = selector.call(node, node.__data__, i, j));
	          if (subnode && "__data__" in node) subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selector(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_select(selector, this);
	    };
	  }
	  d3_selectionPrototype.selectAll = function(selector) {
	    var subgroups = [], subgroup, node;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroups.push(subgroup = d3_array(selector.call(node, node.__data__, i, j)));
	          subgroup.parentNode = node;
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_selectorAll(selector) {
	    return typeof selector === "function" ? selector : function() {
	      return d3_selectAll(selector, this);
	    };
	  }
	  var d3_nsPrefix = {
	    svg: "http://www.w3.org/2000/svg",
	    xhtml: "http://www.w3.org/1999/xhtml",
	    xlink: "http://www.w3.org/1999/xlink",
	    xml: "http://www.w3.org/XML/1998/namespace",
	    xmlns: "http://www.w3.org/2000/xmlns/"
	  };
	  d3.ns = {
	    prefix: d3_nsPrefix,
	    qualify: function(name) {
	      var i = name.indexOf(":"), prefix = name;
	      if (i >= 0) {
	        prefix = name.substring(0, i);
	        name = name.substring(i + 1);
	      }
	      return d3_nsPrefix.hasOwnProperty(prefix) ? {
	        space: d3_nsPrefix[prefix],
	        local: name
	      } : name;
	    }
	  };
	  d3_selectionPrototype.attr = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node();
	        name = d3.ns.qualify(name);
	        return name.local ? node.getAttributeNS(name.space, name.local) : node.getAttribute(name);
	      }
	      for (value in name) this.each(d3_selection_attr(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_attr(name, value));
	  };
	  function d3_selection_attr(name, value) {
	    name = d3.ns.qualify(name);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrConstant() {
	      this.setAttribute(name, value);
	    }
	    function attrConstantNS() {
	      this.setAttributeNS(name.space, name.local, value);
	    }
	    function attrFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttribute(name); else this.setAttribute(name, x);
	    }
	    function attrFunctionNS() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.removeAttributeNS(name.space, name.local); else this.setAttributeNS(name.space, name.local, x);
	    }
	    return value == null ? name.local ? attrNullNS : attrNull : typeof value === "function" ? name.local ? attrFunctionNS : attrFunction : name.local ? attrConstantNS : attrConstant;
	  }
	  function d3_collapse(s) {
	    return s.trim().replace(/\s+/g, " ");
	  }
	  d3_selectionPrototype.classed = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") {
	        var node = this.node(), n = (name = d3_selection_classes(name)).length, i = -1;
	        if (value = node.classList) {
	          while (++i < n) if (!value.contains(name[i])) return false;
	        } else {
	          value = node.getAttribute("class");
	          while (++i < n) if (!d3_selection_classedRe(name[i]).test(value)) return false;
	        }
	        return true;
	      }
	      for (value in name) this.each(d3_selection_classed(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_classed(name, value));
	  };
	  function d3_selection_classedRe(name) {
	    return new RegExp("(?:^|\\s+)" + d3.requote(name) + "(?:\\s+|$)", "g");
	  }
	  function d3_selection_classes(name) {
	    return (name + "").trim().split(/^|\s+/);
	  }
	  function d3_selection_classed(name, value) {
	    name = d3_selection_classes(name).map(d3_selection_classedName);
	    var n = name.length;
	    function classedConstant() {
	      var i = -1;
	      while (++i < n) name[i](this, value);
	    }
	    function classedFunction() {
	      var i = -1, x = value.apply(this, arguments);
	      while (++i < n) name[i](this, x);
	    }
	    return typeof value === "function" ? classedFunction : classedConstant;
	  }
	  function d3_selection_classedName(name) {
	    var re = d3_selection_classedRe(name);
	    return function(node, value) {
	      if (c = node.classList) return value ? c.add(name) : c.remove(name);
	      var c = node.getAttribute("class") || "";
	      if (value) {
	        re.lastIndex = 0;
	        if (!re.test(c)) node.setAttribute("class", d3_collapse(c + " " + name));
	      } else {
	        node.setAttribute("class", d3_collapse(c.replace(re, " ")));
	      }
	    };
	  }
	  d3_selectionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.each(d3_selection_style(priority, name[priority], value));
	        return this;
	      }
	      if (n < 2) return d3_window.getComputedStyle(this.node(), null).getPropertyValue(name);
	      priority = "";
	    }
	    return this.each(d3_selection_style(name, value, priority));
	  };
	  function d3_selection_style(name, value, priority) {
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleConstant() {
	      this.style.setProperty(name, value, priority);
	    }
	    function styleFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) this.style.removeProperty(name); else this.style.setProperty(name, x, priority);
	    }
	    return value == null ? styleNull : typeof value === "function" ? styleFunction : styleConstant;
	  }
	  d3_selectionPrototype.property = function(name, value) {
	    if (arguments.length < 2) {
	      if (typeof name === "string") return this.node()[name];
	      for (value in name) this.each(d3_selection_property(value, name[value]));
	      return this;
	    }
	    return this.each(d3_selection_property(name, value));
	  };
	  function d3_selection_property(name, value) {
	    function propertyNull() {
	      delete this[name];
	    }
	    function propertyConstant() {
	      this[name] = value;
	    }
	    function propertyFunction() {
	      var x = value.apply(this, arguments);
	      if (x == null) delete this[name]; else this[name] = x;
	    }
	    return value == null ? propertyNull : typeof value === "function" ? propertyFunction : propertyConstant;
	  }
	  d3_selectionPrototype.text = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.textContent = v == null ? "" : v;
	    } : value == null ? function() {
	      this.textContent = "";
	    } : function() {
	      this.textContent = value;
	    }) : this.node().textContent;
	  };
	  d3_selectionPrototype.html = function(value) {
	    return arguments.length ? this.each(typeof value === "function" ? function() {
	      var v = value.apply(this, arguments);
	      this.innerHTML = v == null ? "" : v;
	    } : value == null ? function() {
	      this.innerHTML = "";
	    } : function() {
	      this.innerHTML = value;
	    }) : this.node().innerHTML;
	  };
	  d3_selectionPrototype.append = function(name) {
	    name = d3_selection_creator(name);
	    return this.select(function() {
	      return this.appendChild(name.apply(this, arguments));
	    });
	  };
	  function d3_selection_creator(name) {
	    return typeof name === "function" ? name : (name = d3.ns.qualify(name)).local ? function() {
	      return this.ownerDocument.createElementNS(name.space, name.local);
	    } : function() {
	      return this.ownerDocument.createElementNS(this.namespaceURI, name);
	    };
	  }
	  d3_selectionPrototype.insert = function(name, before) {
	    name = d3_selection_creator(name);
	    before = d3_selection_selector(before);
	    return this.select(function() {
	      return this.insertBefore(name.apply(this, arguments), before.apply(this, arguments) || null);
	    });
	  };
	  d3_selectionPrototype.remove = function() {
	    return this.each(function() {
	      var parent = this.parentNode;
	      if (parent) parent.removeChild(this);
	    });
	  };
	  d3_selectionPrototype.data = function(value, key) {
	    var i = -1, n = this.length, group, node;
	    if (!arguments.length) {
	      value = new Array(n = (group = this[0]).length);
	      while (++i < n) {
	        if (node = group[i]) {
	          value[i] = node.__data__;
	        }
	      }
	      return value;
	    }
	    function bind(group, groupData) {
	      var i, n = group.length, m = groupData.length, n0 = Math.min(n, m), updateNodes = new Array(m), enterNodes = new Array(m), exitNodes = new Array(n), node, nodeData;
	      if (key) {
	        var nodeByKeyValue = new d3_Map(), dataByKeyValue = new d3_Map(), keyValues = [], keyValue;
	        for (i = -1; ++i < n; ) {
	          keyValue = key.call(node = group[i], node.__data__, i);
	          if (nodeByKeyValue.has(keyValue)) {
	            exitNodes[i] = node;
	          } else {
	            nodeByKeyValue.set(keyValue, node);
	          }
	          keyValues.push(keyValue);
	        }
	        for (i = -1; ++i < m; ) {
	          keyValue = key.call(groupData, nodeData = groupData[i], i);
	          if (node = nodeByKeyValue.get(keyValue)) {
	            updateNodes[i] = node;
	            node.__data__ = nodeData;
	          } else if (!dataByKeyValue.has(keyValue)) {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          }
	          dataByKeyValue.set(keyValue, nodeData);
	          nodeByKeyValue.remove(keyValue);
	        }
	        for (i = -1; ++i < n; ) {
	          if (nodeByKeyValue.has(keyValues[i])) {
	            exitNodes[i] = group[i];
	          }
	        }
	      } else {
	        for (i = -1; ++i < n0; ) {
	          node = group[i];
	          nodeData = groupData[i];
	          if (node) {
	            node.__data__ = nodeData;
	            updateNodes[i] = node;
	          } else {
	            enterNodes[i] = d3_selection_dataNode(nodeData);
	          }
	        }
	        for (;i < m; ++i) {
	          enterNodes[i] = d3_selection_dataNode(groupData[i]);
	        }
	        for (;i < n; ++i) {
	          exitNodes[i] = group[i];
	        }
	      }
	      enterNodes.update = updateNodes;
	      enterNodes.parentNode = updateNodes.parentNode = exitNodes.parentNode = group.parentNode;
	      enter.push(enterNodes);
	      update.push(updateNodes);
	      exit.push(exitNodes);
	    }
	    var enter = d3_selection_enter([]), update = d3_selection([]), exit = d3_selection([]);
	    if (typeof value === "function") {
	      while (++i < n) {
	        bind(group = this[i], value.call(group, group.parentNode.__data__, i));
	      }
	    } else {
	      while (++i < n) {
	        bind(group = this[i], value);
	      }
	    }
	    update.enter = function() {
	      return enter;
	    };
	    update.exit = function() {
	      return exit;
	    };
	    return update;
	  };
	  function d3_selection_dataNode(data) {
	    return {
	      __data__: data
	    };
	  }
	  d3_selectionPrototype.datum = function(value) {
	    return arguments.length ? this.property("__data__", value) : this.property("__data__");
	  };
	  d3_selectionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = (group = this[j]).parentNode;
	      for (var i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  function d3_selection_filter(selector) {
	    return function() {
	      return d3_selectMatches(this, selector);
	    };
	  }
	  d3_selectionPrototype.order = function() {
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
	        if (node = group[i]) {
	          if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
	          next = node;
	        }
	      }
	    }
	    return this;
	  };
	  d3_selectionPrototype.sort = function(comparator) {
	    comparator = d3_selection_sortComparator.apply(this, arguments);
	    for (var j = -1, m = this.length; ++j < m; ) this[j].sort(comparator);
	    return this.order();
	  };
	  function d3_selection_sortComparator(comparator) {
	    if (!arguments.length) comparator = d3_ascending;
	    return function(a, b) {
	      return a && b ? comparator(a.__data__, b.__data__) : !a - !b;
	    };
	  }
	  d3_selectionPrototype.each = function(callback) {
	    return d3_selection_each(this, function(node, i, j) {
	      callback.call(node, node.__data__, i, j);
	    });
	  };
	  function d3_selection_each(groups, callback) {
	    for (var j = 0, m = groups.length; j < m; j++) {
	      for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
	        if (node = group[i]) callback(node, i, j);
	      }
	    }
	    return groups;
	  }
	  d3_selectionPrototype.call = function(callback) {
	    var args = d3_array(arguments);
	    callback.apply(args[0] = this, args);
	    return this;
	  };
	  d3_selectionPrototype.empty = function() {
	    return !this.node();
	  };
	  d3_selectionPrototype.node = function() {
	    for (var j = 0, m = this.length; j < m; j++) {
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        var node = group[i];
	        if (node) return node;
	      }
	    }
	    return null;
	  };
	  d3_selectionPrototype.size = function() {
	    var n = 0;
	    this.each(function() {
	      ++n;
	    });
	    return n;
	  };
	  function d3_selection_enter(selection) {
	    d3_subclass(selection, d3_selection_enterPrototype);
	    return selection;
	  }
	  var d3_selection_enterPrototype = [];
	  d3.selection.enter = d3_selection_enter;
	  d3.selection.enter.prototype = d3_selection_enterPrototype;
	  d3_selection_enterPrototype.append = d3_selectionPrototype.append;
	  d3_selection_enterPrototype.empty = d3_selectionPrototype.empty;
	  d3_selection_enterPrototype.node = d3_selectionPrototype.node;
	  d3_selection_enterPrototype.call = d3_selectionPrototype.call;
	  d3_selection_enterPrototype.size = d3_selectionPrototype.size;
	  d3_selection_enterPrototype.select = function(selector) {
	    var subgroups = [], subgroup, subnode, upgroup, group, node;
	    for (var j = -1, m = this.length; ++j < m; ) {
	      upgroup = (group = this[j]).update;
	      subgroups.push(subgroup = []);
	      subgroup.parentNode = group.parentNode;
	      for (var i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          subgroup.push(upgroup[i] = subnode = selector.call(group.parentNode, node.__data__, i, j));
	          subnode.__data__ = node.__data__;
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_selection(subgroups);
	  };
	  d3_selection_enterPrototype.insert = function(name, before) {
	    if (arguments.length < 2) before = d3_selection_enterInsertBefore(this);
	    return d3_selectionPrototype.insert.call(this, name, before);
	  };
	  function d3_selection_enterInsertBefore(enter) {
	    var i0, j0;
	    return function(d, i, j) {
	      var group = enter[j].update, n = group.length, node;
	      if (j != j0) j0 = j, i0 = 0;
	      if (i >= i0) i0 = i + 1;
	      while (!(node = group[i0]) && ++i0 < n) ;
	      return node;
	    };
	  }
	  d3_selectionPrototype.transition = function() {
	    var id = d3_transitionInheritId || ++d3_transitionId, subgroups = [], subgroup, node, transition = d3_transitionInherit || {
	      time: Date.now(),
	      ease: d3_ease_cubicInOut,
	      delay: 0,
	      duration: 250
	    };
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) d3_transitionNode(node, i, id, transition);
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, id);
	  };
	  d3_selectionPrototype.interrupt = function() {
	    return this.each(d3_selection_interrupt);
	  };
	  function d3_selection_interrupt() {
	    var lock = this.__transition__;
	    if (lock) ++lock.active;
	  }
	  d3.select = function(node) {
	    var group = [ typeof node === "string" ? d3_select(node, d3_document) : node ];
	    group.parentNode = d3_documentElement;
	    return d3_selection([ group ]);
	  };
	  d3.selectAll = function(nodes) {
	    var group = d3_array(typeof nodes === "string" ? d3_selectAll(nodes, d3_document) : nodes);
	    group.parentNode = d3_documentElement;
	    return d3_selection([ group ]);
	  };
	  var d3_selectionRoot = d3.select(d3_documentElement);
	  d3_selectionPrototype.on = function(type, listener, capture) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof type !== "string") {
	        if (n < 2) listener = false;
	        for (capture in type) this.each(d3_selection_on(capture, type[capture], listener));
	        return this;
	      }
	      if (n < 2) return (n = this.node()["__on" + type]) && n._;
	      capture = false;
	    }
	    return this.each(d3_selection_on(type, listener, capture));
	  };
	  function d3_selection_on(type, listener, capture) {
	    var name = "__on" + type, i = type.indexOf("."), wrap = d3_selection_onListener;
	    if (i > 0) type = type.substring(0, i);
	    var filter = d3_selection_onFilters.get(type);
	    if (filter) type = filter, wrap = d3_selection_onFilter;
	    function onRemove() {
	      var l = this[name];
	      if (l) {
	        this.removeEventListener(type, l, l.$);
	        delete this[name];
	      }
	    }
	    function onAdd() {
	      var l = wrap(listener, d3_array(arguments));
	      onRemove.call(this);
	      this.addEventListener(type, this[name] = l, l.$ = capture);
	      l._ = listener;
	    }
	    function removeAll() {
	      var re = new RegExp("^__on([^.]+)" + d3.requote(type) + "$"), match;
	      for (var name in this) {
	        if (match = name.match(re)) {
	          var l = this[name];
	          this.removeEventListener(match[1], l, l.$);
	          delete this[name];
	        }
	      }
	    }
	    return i ? listener ? onAdd : onRemove : listener ? d3_noop : removeAll;
	  }
	  var d3_selection_onFilters = d3.map({
	    mouseenter: "mouseover",
	    mouseleave: "mouseout"
	  });
	  d3_selection_onFilters.forEach(function(k) {
	    if ("on" + k in d3_document) d3_selection_onFilters.remove(k);
	  });
	  function d3_selection_onListener(listener, argumentz) {
	    return function(e) {
	      var o = d3.event;
	      d3.event = e;
	      argumentz[0] = this.__data__;
	      try {
	        listener.apply(this, argumentz);
	      } finally {
	        d3.event = o;
	      }
	    };
	  }
	  function d3_selection_onFilter(listener, argumentz) {
	    var l = d3_selection_onListener(listener, argumentz);
	    return function(e) {
	      var target = this, related = e.relatedTarget;
	      if (!related || related !== target && !(related.compareDocumentPosition(target) & 8)) {
	        l.call(target, e);
	      }
	    };
	  }
	  var d3_event_dragSelect = "onselectstart" in d3_document ? null : d3_vendorSymbol(d3_documentElement.style, "userSelect"), d3_event_dragId = 0;
	  function d3_event_dragSuppress() {
	    var name = ".dragsuppress-" + ++d3_event_dragId, click = "click" + name, w = d3.select(d3_window).on("touchmove" + name, d3_eventPreventDefault).on("dragstart" + name, d3_eventPreventDefault).on("selectstart" + name, d3_eventPreventDefault);
	    if (d3_event_dragSelect) {
	      var style = d3_documentElement.style, select = style[d3_event_dragSelect];
	      style[d3_event_dragSelect] = "none";
	    }
	    return function(suppressClick) {
	      w.on(name, null);
	      if (d3_event_dragSelect) style[d3_event_dragSelect] = select;
	      if (suppressClick) {
	        function off() {
	          w.on(click, null);
	        }
	        w.on(click, function() {
	          d3_eventPreventDefault();
	          off();
	        }, true);
	        setTimeout(off, 0);
	      }
	    };
	  }
	  d3.mouse = function(container) {
	    return d3_mousePoint(container, d3_eventSource());
	  };
	  var d3_mouse_bug44083 = /WebKit/.test(d3_window.navigator.userAgent) ? -1 : 0;
	  function d3_mousePoint(container, e) {
	    if (e.changedTouches) e = e.changedTouches[0];
	    var svg = container.ownerSVGElement || container;
	    if (svg.createSVGPoint) {
	      var point = svg.createSVGPoint();
	      if (d3_mouse_bug44083 < 0 && (d3_window.scrollX || d3_window.scrollY)) {
	        svg = d3.select("body").append("svg").style({
	          position: "absolute",
	          top: 0,
	          left: 0,
	          margin: 0,
	          padding: 0,
	          border: "none"
	        }, "important");
	        var ctm = svg[0][0].getScreenCTM();
	        d3_mouse_bug44083 = !(ctm.f || ctm.e);
	        svg.remove();
	      }
	      if (d3_mouse_bug44083) point.x = e.pageX, point.y = e.pageY; else point.x = e.clientX, 
	      point.y = e.clientY;
	      point = point.matrixTransform(container.getScreenCTM().inverse());
	      return [ point.x, point.y ];
	    }
	    var rect = container.getBoundingClientRect();
	    return [ e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop ];
	  }
	  d3.touches = function(container, touches) {
	    if (arguments.length < 2) touches = d3_eventSource().touches;
	    return touches ? d3_array(touches).map(function(touch) {
	      var point = d3_mousePoint(container, touch);
	      point.identifier = touch.identifier;
	      return point;
	    }) : [];
	  };
	  d3.behavior.drag = function() {
	    var event = d3_eventDispatch(drag, "drag", "dragstart", "dragend"), origin = null, mousedown = dragstart(d3_noop, d3.mouse, d3_behavior_dragMouseSubject, "mousemove", "mouseup"), touchstart = dragstart(d3_behavior_dragTouchId, d3.touch, d3_behavior_dragTouchSubject, "touchmove", "touchend");
	    function drag() {
	      this.on("mousedown.drag", mousedown).on("touchstart.drag", touchstart);
	    }
	    function dragstart(id, position, subject, move, end) {
	      return function() {
	        var that = this, target = d3.event.target, parent = that.parentNode, dispatch = event.of(that, arguments), dragged = 0, dragId = id(), dragName = ".drag" + (dragId == null ? "" : "-" + dragId), dragOffset, dragSubject = d3.select(subject()).on(move + dragName, moved).on(end + dragName, ended), dragRestore = d3_event_dragSuppress(), position0 = position(parent, dragId);
	        if (origin) {
	          dragOffset = origin.apply(that, arguments);
	          dragOffset = [ dragOffset.x - position0[0], dragOffset.y - position0[1] ];
	        } else {
	          dragOffset = [ 0, 0 ];
	        }
	        dispatch({
	          type: "dragstart"
	        });
	        function moved() {
	          var position1 = position(parent, dragId), dx, dy;
	          if (!position1) return;
	          dx = position1[0] - position0[0];
	          dy = position1[1] - position0[1];
	          dragged |= dx | dy;
	          position0 = position1;
	          dispatch({
	            type: "drag",
	            x: position1[0] + dragOffset[0],
	            y: position1[1] + dragOffset[1],
	            dx: dx,
	            dy: dy
	          });
	        }
	        function ended() {
	          if (!position(parent, dragId)) return;
	          dragSubject.on(move + dragName, null).on(end + dragName, null);
	          dragRestore(dragged && d3.event.target === target);
	          dispatch({
	            type: "dragend"
	          });
	        }
	      };
	    }
	    drag.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return drag;
	    };
	    return d3.rebind(drag, event, "on");
	  };
	  function d3_behavior_dragTouchId() {
	    return d3.event.changedTouches[0].identifier;
	  }
	  function d3_behavior_dragTouchSubject() {
	    return d3.event.target;
	  }
	  function d3_behavior_dragMouseSubject() {
	    return d3_window;
	  }
	  var π = Math.PI, τ = 2 * π, halfπ = π / 2, ε = 1e-6, ε2 = ε * ε, d3_radians = π / 180, d3_degrees = 180 / π;
	  function d3_sgn(x) {
	    return x > 0 ? 1 : x < 0 ? -1 : 0;
	  }
	  function d3_cross2d(a, b, c) {
	    return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
	  }
	  function d3_acos(x) {
	    return x > 1 ? 0 : x < -1 ? π : Math.acos(x);
	  }
	  function d3_asin(x) {
	    return x > 1 ? halfπ : x < -1 ? -halfπ : Math.asin(x);
	  }
	  function d3_sinh(x) {
	    return ((x = Math.exp(x)) - 1 / x) / 2;
	  }
	  function d3_cosh(x) {
	    return ((x = Math.exp(x)) + 1 / x) / 2;
	  }
	  function d3_tanh(x) {
	    return ((x = Math.exp(2 * x)) - 1) / (x + 1);
	  }
	  function d3_haversin(x) {
	    return (x = Math.sin(x / 2)) * x;
	  }
	  var ρ = Math.SQRT2, ρ2 = 2, ρ4 = 4;
	  d3.interpolateZoom = function(p0, p1) {
	    var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2];
	    var dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + ρ4 * d2) / (2 * w0 * ρ2 * d1), b1 = (w1 * w1 - w0 * w0 - ρ4 * d2) / (2 * w1 * ρ2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0), r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1), dr = r1 - r0, S = (dr || Math.log(w1 / w0)) / ρ;
	    function interpolate(t) {
	      var s = t * S;
	      if (dr) {
	        var coshr0 = d3_cosh(r0), u = w0 / (ρ2 * d1) * (coshr0 * d3_tanh(ρ * s + r0) - d3_sinh(r0));
	        return [ ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / d3_cosh(ρ * s + r0) ];
	      }
	      return [ ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(ρ * s) ];
	    }
	    interpolate.duration = S * 1e3;
	    return interpolate;
	  };
	  d3.behavior.zoom = function() {
	    var view = {
	      x: 0,
	      y: 0,
	      k: 1
	    }, translate0, center0, center, size = [ 960, 500 ], scaleExtent = d3_behavior_zoomInfinity, mousedown = "mousedown.zoom", mousemove = "mousemove.zoom", mouseup = "mouseup.zoom", mousewheelTimer, touchstart = "touchstart.zoom", touchtime, event = d3_eventDispatch(zoom, "zoomstart", "zoom", "zoomend"), x0, x1, y0, y1;
	    function zoom(g) {
	      g.on(mousedown, mousedowned).on(d3_behavior_zoomWheel + ".zoom", mousewheeled).on("dblclick.zoom", dblclicked).on(touchstart, touchstarted);
	    }
	    zoom.event = function(g) {
	      g.each(function() {
	        var dispatch = event.of(this, arguments), view1 = view;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.zoom", function() {
	            view = this.__chart__ || {
	              x: 0,
	              y: 0,
	              k: 1
	            };
	            zoomstarted(dispatch);
	          }).tween("zoom:zoom", function() {
	            var dx = size[0], dy = size[1], cx = dx / 2, cy = dy / 2, i = d3.interpolateZoom([ (cx - view.x) / view.k, (cy - view.y) / view.k, dx / view.k ], [ (cx - view1.x) / view1.k, (cy - view1.y) / view1.k, dx / view1.k ]);
	            return function(t) {
	              var l = i(t), k = dx / l[2];
	              this.__chart__ = view = {
	                x: cx - l[0] * k,
	                y: cy - l[1] * k,
	                k: k
	              };
	              zoomed(dispatch);
	            };
	          }).each("end.zoom", function() {
	            zoomended(dispatch);
	          });
	        } else {
	          this.__chart__ = view;
	          zoomstarted(dispatch);
	          zoomed(dispatch);
	          zoomended(dispatch);
	        }
	      });
	    };
	    zoom.translate = function(_) {
	      if (!arguments.length) return [ view.x, view.y ];
	      view = {
	        x: +_[0],
	        y: +_[1],
	        k: view.k
	      };
	      rescale();
	      return zoom;
	    };
	    zoom.scale = function(_) {
	      if (!arguments.length) return view.k;
	      view = {
	        x: view.x,
	        y: view.y,
	        k: +_
	      };
	      rescale();
	      return zoom;
	    };
	    zoom.scaleExtent = function(_) {
	      if (!arguments.length) return scaleExtent;
	      scaleExtent = _ == null ? d3_behavior_zoomInfinity : [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.center = function(_) {
	      if (!arguments.length) return center;
	      center = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.size = function(_) {
	      if (!arguments.length) return size;
	      size = _ && [ +_[0], +_[1] ];
	      return zoom;
	    };
	    zoom.x = function(z) {
	      if (!arguments.length) return x1;
	      x1 = z;
	      x0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    zoom.y = function(z) {
	      if (!arguments.length) return y1;
	      y1 = z;
	      y0 = z.copy();
	      view = {
	        x: 0,
	        y: 0,
	        k: 1
	      };
	      return zoom;
	    };
	    function location(p) {
	      return [ (p[0] - view.x) / view.k, (p[1] - view.y) / view.k ];
	    }
	    function point(l) {
	      return [ l[0] * view.k + view.x, l[1] * view.k + view.y ];
	    }
	    function scaleTo(s) {
	      view.k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], s));
	    }
	    function translateTo(p, l) {
	      l = point(l);
	      view.x += p[0] - l[0];
	      view.y += p[1] - l[1];
	    }
	    function rescale() {
	      if (x1) x1.domain(x0.range().map(function(x) {
	        return (x - view.x) / view.k;
	      }).map(x0.invert));
	      if (y1) y1.domain(y0.range().map(function(y) {
	        return (y - view.y) / view.k;
	      }).map(y0.invert));
	    }
	    function zoomstarted(dispatch) {
	      dispatch({
	        type: "zoomstart"
	      });
	    }
	    function zoomed(dispatch) {
	      rescale();
	      dispatch({
	        type: "zoom",
	        scale: view.k,
	        translate: [ view.x, view.y ]
	      });
	    }
	    function zoomended(dispatch) {
	      dispatch({
	        type: "zoomend"
	      });
	    }
	    function mousedowned() {
	      var that = this, target = d3.event.target, dispatch = event.of(that, arguments), dragged = 0, subject = d3.select(d3_window).on(mousemove, moved).on(mouseup, ended), location0 = location(d3.mouse(that)), dragRestore = d3_event_dragSuppress();
	      d3_selection_interrupt.call(that);
	      zoomstarted(dispatch);
	      function moved() {
	        dragged = 1;
	        translateTo(d3.mouse(that), location0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        subject.on(mousemove, null).on(mouseup, null);
	        dragRestore(dragged && d3.event.target === target);
	        zoomended(dispatch);
	      }
	    }
	    function touchstarted() {
	      var that = this, dispatch = event.of(that, arguments), locations0 = {}, distance0 = 0, scale0, zoomName = ".zoom-" + d3.event.changedTouches[0].identifier, touchmove = "touchmove" + zoomName, touchend = "touchend" + zoomName, targets = [], subject = d3.select(that).on(mousedown, null).on(touchstart, started), dragRestore = d3_event_dragSuppress();
	      d3_selection_interrupt.call(that);
	      started();
	      zoomstarted(dispatch);
	      function relocate() {
	        var touches = d3.touches(that);
	        scale0 = view.k;
	        touches.forEach(function(t) {
	          if (t.identifier in locations0) locations0[t.identifier] = location(t);
	        });
	        return touches;
	      }
	      function started() {
	        var target = d3.event.target;
	        d3.select(target).on(touchmove, moved).on(touchend, ended);
	        targets.push(target);
	        var changed = d3.event.changedTouches;
	        for (var i = 0, n = changed.length; i < n; ++i) {
	          locations0[changed[i].identifier] = null;
	        }
	        var touches = relocate(), now = Date.now();
	        if (touches.length === 1) {
	          if (now - touchtime < 500) {
	            var p = touches[0], l = locations0[p.identifier];
	            scaleTo(view.k * 2);
	            translateTo(p, l);
	            d3_eventPreventDefault();
	            zoomed(dispatch);
	          }
	          touchtime = now;
	        } else if (touches.length > 1) {
	          var p = touches[0], q = touches[1], dx = p[0] - q[0], dy = p[1] - q[1];
	          distance0 = dx * dx + dy * dy;
	        }
	      }
	      function moved() {
	        var touches = d3.touches(that), p0, l0, p1, l1;
	        for (var i = 0, n = touches.length; i < n; ++i, l1 = null) {
	          p1 = touches[i];
	          if (l1 = locations0[p1.identifier]) {
	            if (l0) break;
	            p0 = p1, l0 = l1;
	          }
	        }
	        if (l1) {
	          var distance1 = (distance1 = p1[0] - p0[0]) * distance1 + (distance1 = p1[1] - p0[1]) * distance1, scale1 = distance0 && Math.sqrt(distance1 / distance0);
	          p0 = [ (p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2 ];
	          l0 = [ (l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2 ];
	          scaleTo(scale1 * scale0);
	        }
	        touchtime = null;
	        translateTo(p0, l0);
	        zoomed(dispatch);
	      }
	      function ended() {
	        if (d3.event.touches.length) {
	          var changed = d3.event.changedTouches;
	          for (var i = 0, n = changed.length; i < n; ++i) {
	            delete locations0[changed[i].identifier];
	          }
	          for (var identifier in locations0) {
	            return void relocate();
	          }
	        }
	        d3.selectAll(targets).on(zoomName, null);
	        subject.on(mousedown, mousedowned).on(touchstart, touchstarted);
	        dragRestore();
	        zoomended(dispatch);
	      }
	    }
	    function mousewheeled() {
	      var dispatch = event.of(this, arguments);
	      if (mousewheelTimer) clearTimeout(mousewheelTimer); else translate0 = location(center0 = center || d3.mouse(this)), 
	      d3_selection_interrupt.call(this), zoomstarted(dispatch);
	      mousewheelTimer = setTimeout(function() {
	        mousewheelTimer = null;
	        zoomended(dispatch);
	      }, 50);
	      d3_eventPreventDefault();
	      scaleTo(Math.pow(2, d3_behavior_zoomDelta() * .002) * view.k);
	      translateTo(center0, translate0);
	      zoomed(dispatch);
	    }
	    function dblclicked() {
	      var dispatch = event.of(this, arguments), p = d3.mouse(this), l = location(p), k = Math.log(view.k) / Math.LN2;
	      zoomstarted(dispatch);
	      scaleTo(Math.pow(2, d3.event.shiftKey ? Math.ceil(k) - 1 : Math.floor(k) + 1));
	      translateTo(p, l);
	      zoomed(dispatch);
	      zoomended(dispatch);
	    }
	    return d3.rebind(zoom, event, "on");
	  };
	  var d3_behavior_zoomInfinity = [ 0, Infinity ];
	  var d3_behavior_zoomDelta, d3_behavior_zoomWheel = "onwheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	    return -d3.event.deltaY * (d3.event.deltaMode ? 120 : 1);
	  }, "wheel") : "onmousewheel" in d3_document ? (d3_behavior_zoomDelta = function() {
	    return d3.event.wheelDelta;
	  }, "mousewheel") : (d3_behavior_zoomDelta = function() {
	    return -d3.event.detail;
	  }, "MozMousePixelScroll");
	  d3.color = d3_color;
	  function d3_color() {}
	  d3_color.prototype.toString = function() {
	    return this.rgb() + "";
	  };
	  d3.hsl = d3_hsl;
	  function d3_hsl(h, s, l) {
	    return this instanceof d3_hsl ? void (this.h = +h, this.s = +s, this.l = +l) : arguments.length < 2 ? h instanceof d3_hsl ? new d3_hsl(h.h, h.s, h.l) : d3_rgb_parse("" + h, d3_rgb_hsl, d3_hsl) : new d3_hsl(h, s, l);
	  }
	  var d3_hslPrototype = d3_hsl.prototype = new d3_color();
	  d3_hslPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, this.l / k);
	  };
	  d3_hslPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_hsl(this.h, this.s, k * this.l);
	  };
	  d3_hslPrototype.rgb = function() {
	    return d3_hsl_rgb(this.h, this.s, this.l);
	  };
	  function d3_hsl_rgb(h, s, l) {
	    var m1, m2;
	    h = isNaN(h) ? 0 : (h %= 360) < 0 ? h + 360 : h;
	    s = isNaN(s) ? 0 : s < 0 ? 0 : s > 1 ? 1 : s;
	    l = l < 0 ? 0 : l > 1 ? 1 : l;
	    m2 = l <= .5 ? l * (1 + s) : l + s - l * s;
	    m1 = 2 * l - m2;
	    function v(h) {
	      if (h > 360) h -= 360; else if (h < 0) h += 360;
	      if (h < 60) return m1 + (m2 - m1) * h / 60;
	      if (h < 180) return m2;
	      if (h < 240) return m1 + (m2 - m1) * (240 - h) / 60;
	      return m1;
	    }
	    function vv(h) {
	      return Math.round(v(h) * 255);
	    }
	    return new d3_rgb(vv(h + 120), vv(h), vv(h - 120));
	  }
	  d3.hcl = d3_hcl;
	  function d3_hcl(h, c, l) {
	    return this instanceof d3_hcl ? void (this.h = +h, this.c = +c, this.l = +l) : arguments.length < 2 ? h instanceof d3_hcl ? new d3_hcl(h.h, h.c, h.l) : h instanceof d3_lab ? d3_lab_hcl(h.l, h.a, h.b) : d3_lab_hcl((h = d3_rgb_lab((h = d3.rgb(h)).r, h.g, h.b)).l, h.a, h.b) : new d3_hcl(h, c, l);
	  }
	  var d3_hclPrototype = d3_hcl.prototype = new d3_color();
	  d3_hclPrototype.brighter = function(k) {
	    return new d3_hcl(this.h, this.c, Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.darker = function(k) {
	    return new d3_hcl(this.h, this.c, Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)));
	  };
	  d3_hclPrototype.rgb = function() {
	    return d3_hcl_lab(this.h, this.c, this.l).rgb();
	  };
	  function d3_hcl_lab(h, c, l) {
	    if (isNaN(h)) h = 0;
	    if (isNaN(c)) c = 0;
	    return new d3_lab(l, Math.cos(h *= d3_radians) * c, Math.sin(h) * c);
	  }
	  d3.lab = d3_lab;
	  function d3_lab(l, a, b) {
	    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.l, l.c, l.h) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);
	  }
	  var d3_lab_K = 18;
	  var d3_lab_X = .95047, d3_lab_Y = 1, d3_lab_Z = 1.08883;
	  var d3_labPrototype = d3_lab.prototype = new d3_color();
	  d3_labPrototype.brighter = function(k) {
	    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.darker = function(k) {
	    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);
	  };
	  d3_labPrototype.rgb = function() {
	    return d3_lab_rgb(this.l, this.a, this.b);
	  };
	  function d3_lab_rgb(l, a, b) {
	    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;
	    x = d3_lab_xyz(x) * d3_lab_X;
	    y = d3_lab_xyz(y) * d3_lab_Y;
	    z = d3_lab_xyz(z) * d3_lab_Z;
	    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - .4985314 * z), d3_xyz_rgb(-.969266 * x + 1.8760108 * y + .041556 * z), d3_xyz_rgb(.0556434 * x - .2040259 * y + 1.0572252 * z));
	  }
	  function d3_lab_hcl(l, a, b) {
	    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);
	  }
	  function d3_lab_xyz(x) {
	    return x > .206893034 ? x * x * x : (x - 4 / 29) / 7.787037;
	  }
	  function d3_xyz_lab(x) {
	    return x > .008856 ? Math.pow(x, 1 / 3) : 7.787037 * x + 4 / 29;
	  }
	  function d3_xyz_rgb(r) {
	    return Math.round(255 * (r <= .00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - .055));
	  }
	  d3.rgb = d3_rgb;
	  function d3_rgb(r, g, b) {
	    return this instanceof d3_rgb ? void (this.r = ~~r, this.g = ~~g, this.b = ~~b) : arguments.length < 2 ? r instanceof d3_rgb ? new d3_rgb(r.r, r.g, r.b) : d3_rgb_parse("" + r, d3_rgb, d3_hsl_rgb) : new d3_rgb(r, g, b);
	  }
	  function d3_rgbNumber(value) {
	    return new d3_rgb(value >> 16, value >> 8 & 255, value & 255);
	  }
	  function d3_rgbString(value) {
	    return d3_rgbNumber(value) + "";
	  }
	  var d3_rgbPrototype = d3_rgb.prototype = new d3_color();
	  d3_rgbPrototype.brighter = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    var r = this.r, g = this.g, b = this.b, i = 30;
	    if (!r && !g && !b) return new d3_rgb(i, i, i);
	    if (r && r < i) r = i;
	    if (g && g < i) g = i;
	    if (b && b < i) b = i;
	    return new d3_rgb(Math.min(255, r / k), Math.min(255, g / k), Math.min(255, b / k));
	  };
	  d3_rgbPrototype.darker = function(k) {
	    k = Math.pow(.7, arguments.length ? k : 1);
	    return new d3_rgb(k * this.r, k * this.g, k * this.b);
	  };
	  d3_rgbPrototype.hsl = function() {
	    return d3_rgb_hsl(this.r, this.g, this.b);
	  };
	  d3_rgbPrototype.toString = function() {
	    return "#" + d3_rgb_hex(this.r) + d3_rgb_hex(this.g) + d3_rgb_hex(this.b);
	  };
	  function d3_rgb_hex(v) {
	    return v < 16 ? "0" + Math.max(0, v).toString(16) : Math.min(255, v).toString(16);
	  }
	  function d3_rgb_parse(format, rgb, hsl) {
	    var r = 0, g = 0, b = 0, m1, m2, color;
	    m1 = /([a-z]+)\((.*)\)/i.exec(format);
	    if (m1) {
	      m2 = m1[2].split(",");
	      switch (m1[1]) {
	       case "hsl":
	        {
	          return hsl(parseFloat(m2[0]), parseFloat(m2[1]) / 100, parseFloat(m2[2]) / 100);
	        }

	       case "rgb":
	        {
	          return rgb(d3_rgb_parseNumber(m2[0]), d3_rgb_parseNumber(m2[1]), d3_rgb_parseNumber(m2[2]));
	        }
	      }
	    }
	    if (color = d3_rgb_names.get(format)) return rgb(color.r, color.g, color.b);
	    if (format != null && format.charAt(0) === "#" && !isNaN(color = parseInt(format.substring(1), 16))) {
	      if (format.length === 4) {
	        r = (color & 3840) >> 4;
	        r = r >> 4 | r;
	        g = color & 240;
	        g = g >> 4 | g;
	        b = color & 15;
	        b = b << 4 | b;
	      } else if (format.length === 7) {
	        r = (color & 16711680) >> 16;
	        g = (color & 65280) >> 8;
	        b = color & 255;
	      }
	    }
	    return rgb(r, g, b);
	  }
	  function d3_rgb_hsl(r, g, b) {
	    var min = Math.min(r /= 255, g /= 255, b /= 255), max = Math.max(r, g, b), d = max - min, h, s, l = (max + min) / 2;
	    if (d) {
	      s = l < .5 ? d / (max + min) : d / (2 - max - min);
	      if (r == max) h = (g - b) / d + (g < b ? 6 : 0); else if (g == max) h = (b - r) / d + 2; else h = (r - g) / d + 4;
	      h *= 60;
	    } else {
	      h = NaN;
	      s = l > 0 && l < 1 ? 0 : h;
	    }
	    return new d3_hsl(h, s, l);
	  }
	  function d3_rgb_lab(r, g, b) {
	    r = d3_rgb_xyz(r);
	    g = d3_rgb_xyz(g);
	    b = d3_rgb_xyz(b);
	    var x = d3_xyz_lab((.4124564 * r + .3575761 * g + .1804375 * b) / d3_lab_X), y = d3_xyz_lab((.2126729 * r + .7151522 * g + .072175 * b) / d3_lab_Y), z = d3_xyz_lab((.0193339 * r + .119192 * g + .9503041 * b) / d3_lab_Z);
	    return d3_lab(116 * y - 16, 500 * (x - y), 200 * (y - z));
	  }
	  function d3_rgb_xyz(r) {
	    return (r /= 255) <= .04045 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4);
	  }
	  function d3_rgb_parseNumber(c) {
	    var f = parseFloat(c);
	    return c.charAt(c.length - 1) === "%" ? Math.round(f * 2.55) : f;
	  }
	  var d3_rgb_names = d3.map({
	    aliceblue: 15792383,
	    antiquewhite: 16444375,
	    aqua: 65535,
	    aquamarine: 8388564,
	    azure: 15794175,
	    beige: 16119260,
	    bisque: 16770244,
	    black: 0,
	    blanchedalmond: 16772045,
	    blue: 255,
	    blueviolet: 9055202,
	    brown: 10824234,
	    burlywood: 14596231,
	    cadetblue: 6266528,
	    chartreuse: 8388352,
	    chocolate: 13789470,
	    coral: 16744272,
	    cornflowerblue: 6591981,
	    cornsilk: 16775388,
	    crimson: 14423100,
	    cyan: 65535,
	    darkblue: 139,
	    darkcyan: 35723,
	    darkgoldenrod: 12092939,
	    darkgray: 11119017,
	    darkgreen: 25600,
	    darkgrey: 11119017,
	    darkkhaki: 12433259,
	    darkmagenta: 9109643,
	    darkolivegreen: 5597999,
	    darkorange: 16747520,
	    darkorchid: 10040012,
	    darkred: 9109504,
	    darksalmon: 15308410,
	    darkseagreen: 9419919,
	    darkslateblue: 4734347,
	    darkslategray: 3100495,
	    darkslategrey: 3100495,
	    darkturquoise: 52945,
	    darkviolet: 9699539,
	    deeppink: 16716947,
	    deepskyblue: 49151,
	    dimgray: 6908265,
	    dimgrey: 6908265,
	    dodgerblue: 2003199,
	    firebrick: 11674146,
	    floralwhite: 16775920,
	    forestgreen: 2263842,
	    fuchsia: 16711935,
	    gainsboro: 14474460,
	    ghostwhite: 16316671,
	    gold: 16766720,
	    goldenrod: 14329120,
	    gray: 8421504,
	    green: 32768,
	    greenyellow: 11403055,
	    grey: 8421504,
	    honeydew: 15794160,
	    hotpink: 16738740,
	    indianred: 13458524,
	    indigo: 4915330,
	    ivory: 16777200,
	    khaki: 15787660,
	    lavender: 15132410,
	    lavenderblush: 16773365,
	    lawngreen: 8190976,
	    lemonchiffon: 16775885,
	    lightblue: 11393254,
	    lightcoral: 15761536,
	    lightcyan: 14745599,
	    lightgoldenrodyellow: 16448210,
	    lightgray: 13882323,
	    lightgreen: 9498256,
	    lightgrey: 13882323,
	    lightpink: 16758465,
	    lightsalmon: 16752762,
	    lightseagreen: 2142890,
	    lightskyblue: 8900346,
	    lightslategray: 7833753,
	    lightslategrey: 7833753,
	    lightsteelblue: 11584734,
	    lightyellow: 16777184,
	    lime: 65280,
	    limegreen: 3329330,
	    linen: 16445670,
	    magenta: 16711935,
	    maroon: 8388608,
	    mediumaquamarine: 6737322,
	    mediumblue: 205,
	    mediumorchid: 12211667,
	    mediumpurple: 9662683,
	    mediumseagreen: 3978097,
	    mediumslateblue: 8087790,
	    mediumspringgreen: 64154,
	    mediumturquoise: 4772300,
	    mediumvioletred: 13047173,
	    midnightblue: 1644912,
	    mintcream: 16121850,
	    mistyrose: 16770273,
	    moccasin: 16770229,
	    navajowhite: 16768685,
	    navy: 128,
	    oldlace: 16643558,
	    olive: 8421376,
	    olivedrab: 7048739,
	    orange: 16753920,
	    orangered: 16729344,
	    orchid: 14315734,
	    palegoldenrod: 15657130,
	    palegreen: 10025880,
	    paleturquoise: 11529966,
	    palevioletred: 14381203,
	    papayawhip: 16773077,
	    peachpuff: 16767673,
	    peru: 13468991,
	    pink: 16761035,
	    plum: 14524637,
	    powderblue: 11591910,
	    purple: 8388736,
	    red: 16711680,
	    rosybrown: 12357519,
	    royalblue: 4286945,
	    saddlebrown: 9127187,
	    salmon: 16416882,
	    sandybrown: 16032864,
	    seagreen: 3050327,
	    seashell: 16774638,
	    sienna: 10506797,
	    silver: 12632256,
	    skyblue: 8900331,
	    slateblue: 6970061,
	    slategray: 7372944,
	    slategrey: 7372944,
	    snow: 16775930,
	    springgreen: 65407,
	    steelblue: 4620980,
	    tan: 13808780,
	    teal: 32896,
	    thistle: 14204888,
	    tomato: 16737095,
	    turquoise: 4251856,
	    violet: 15631086,
	    wheat: 16113331,
	    white: 16777215,
	    whitesmoke: 16119285,
	    yellow: 16776960,
	    yellowgreen: 10145074
	  });
	  d3_rgb_names.forEach(function(key, value) {
	    d3_rgb_names.set(key, d3_rgbNumber(value));
	  });
	  function d3_functor(v) {
	    return typeof v === "function" ? v : function() {
	      return v;
	    };
	  }
	  d3.functor = d3_functor;
	  function d3_identity(d) {
	    return d;
	  }
	  d3.xhr = d3_xhrType(d3_identity);
	  function d3_xhrType(response) {
	    return function(url, mimeType, callback) {
	      if (arguments.length === 2 && typeof mimeType === "function") callback = mimeType, 
	      mimeType = null;
	      return d3_xhr(url, mimeType, response, callback);
	    };
	  }
	  function d3_xhr(url, mimeType, response, callback) {
	    var xhr = {}, dispatch = d3.dispatch("beforesend", "progress", "load", "error"), headers = {}, request = new XMLHttpRequest(), responseType = null;
	    if (d3_window.XDomainRequest && !("withCredentials" in request) && /^(http(s)?:)?\/\//.test(url)) request = new XDomainRequest();
	    "onload" in request ? request.onload = request.onerror = respond : request.onreadystatechange = function() {
	      request.readyState > 3 && respond();
	    };
	    function respond() {
	      var status = request.status, result;
	      if (!status && request.responseText || status >= 200 && status < 300 || status === 304) {
	        try {
	          result = response.call(xhr, request);
	        } catch (e) {
	          dispatch.error.call(xhr, e);
	          return;
	        }
	        dispatch.load.call(xhr, result);
	      } else {
	        dispatch.error.call(xhr, request);
	      }
	    }
	    request.onprogress = function(event) {
	      var o = d3.event;
	      d3.event = event;
	      try {
	        dispatch.progress.call(xhr, request);
	      } finally {
	        d3.event = o;
	      }
	    };
	    xhr.header = function(name, value) {
	      name = (name + "").toLowerCase();
	      if (arguments.length < 2) return headers[name];
	      if (value == null) delete headers[name]; else headers[name] = value + "";
	      return xhr;
	    };
	    xhr.mimeType = function(value) {
	      if (!arguments.length) return mimeType;
	      mimeType = value == null ? null : value + "";
	      return xhr;
	    };
	    xhr.responseType = function(value) {
	      if (!arguments.length) return responseType;
	      responseType = value;
	      return xhr;
	    };
	    xhr.response = function(value) {
	      response = value;
	      return xhr;
	    };
	    [ "get", "post" ].forEach(function(method) {
	      xhr[method] = function() {
	        return xhr.send.apply(xhr, [ method ].concat(d3_array(arguments)));
	      };
	    });
	    xhr.send = function(method, data, callback) {
	      if (arguments.length === 2 && typeof data === "function") callback = data, data = null;
	      request.open(method, url, true);
	      if (mimeType != null && !("accept" in headers)) headers["accept"] = mimeType + ",*/*";
	      if (request.setRequestHeader) for (var name in headers) request.setRequestHeader(name, headers[name]);
	      if (mimeType != null && request.overrideMimeType) request.overrideMimeType(mimeType);
	      if (responseType != null) request.responseType = responseType;
	      if (callback != null) xhr.on("error", callback).on("load", function(request) {
	        callback(null, request);
	      });
	      dispatch.beforesend.call(xhr, request);
	      request.send(data == null ? null : data);
	      return xhr;
	    };
	    xhr.abort = function() {
	      request.abort();
	      return xhr;
	    };
	    d3.rebind(xhr, dispatch, "on");
	    return callback == null ? xhr : xhr.get(d3_xhr_fixCallback(callback));
	  }
	  function d3_xhr_fixCallback(callback) {
	    return callback.length === 1 ? function(error, request) {
	      callback(error == null ? request : null);
	    } : callback;
	  }
	  d3.dsv = function(delimiter, mimeType) {
	    var reFormat = new RegExp('["' + delimiter + "\n]"), delimiterCode = delimiter.charCodeAt(0);
	    function dsv(url, row, callback) {
	      if (arguments.length < 3) callback = row, row = null;
	      var xhr = d3_xhr(url, mimeType, row == null ? response : typedResponse(row), callback);
	      xhr.row = function(_) {
	        return arguments.length ? xhr.response((row = _) == null ? response : typedResponse(_)) : row;
	      };
	      return xhr;
	    }
	    function response(request) {
	      return dsv.parse(request.responseText);
	    }
	    function typedResponse(f) {
	      return function(request) {
	        return dsv.parse(request.responseText, f);
	      };
	    }
	    dsv.parse = function(text, f) {
	      var o;
	      return dsv.parseRows(text, function(row, i) {
	        if (o) return o(row, i - 1);
	        var a = new Function("d", "return {" + row.map(function(name, i) {
	          return JSON.stringify(name) + ": d[" + i + "]";
	        }).join(",") + "}");
	        o = f ? function(row, i) {
	          return f(a(row), i);
	        } : a;
	      });
	    };
	    dsv.parseRows = function(text, f) {
	      var EOL = {}, EOF = {}, rows = [], N = text.length, I = 0, n = 0, t, eol;
	      function token() {
	        if (I >= N) return EOF;
	        if (eol) return eol = false, EOL;
	        var j = I;
	        if (text.charCodeAt(j) === 34) {
	          var i = j;
	          while (i++ < N) {
	            if (text.charCodeAt(i) === 34) {
	              if (text.charCodeAt(i + 1) !== 34) break;
	              ++i;
	            }
	          }
	          I = i + 2;
	          var c = text.charCodeAt(i + 1);
	          if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(i + 2) === 10) ++I;
	          } else if (c === 10) {
	            eol = true;
	          }
	          return text.substring(j + 1, i).replace(/""/g, '"');
	        }
	        while (I < N) {
	          var c = text.charCodeAt(I++), k = 1;
	          if (c === 10) eol = true; else if (c === 13) {
	            eol = true;
	            if (text.charCodeAt(I) === 10) ++I, ++k;
	          } else if (c !== delimiterCode) continue;
	          return text.substring(j, I - k);
	        }
	        return text.substring(j);
	      }
	      while ((t = token()) !== EOF) {
	        var a = [];
	        while (t !== EOL && t !== EOF) {
	          a.push(t);
	          t = token();
	        }
	        if (f && !(a = f(a, n++))) continue;
	        rows.push(a);
	      }
	      return rows;
	    };
	    dsv.format = function(rows) {
	      if (Array.isArray(rows[0])) return dsv.formatRows(rows);
	      var fieldSet = new d3_Set(), fields = [];
	      rows.forEach(function(row) {
	        for (var field in row) {
	          if (!fieldSet.has(field)) {
	            fields.push(fieldSet.add(field));
	          }
	        }
	      });
	      return [ fields.map(formatValue).join(delimiter) ].concat(rows.map(function(row) {
	        return fields.map(function(field) {
	          return formatValue(row[field]);
	        }).join(delimiter);
	      })).join("\n");
	    };
	    dsv.formatRows = function(rows) {
	      return rows.map(formatRow).join("\n");
	    };
	    function formatRow(row) {
	      return row.map(formatValue).join(delimiter);
	    }
	    function formatValue(text) {
	      return reFormat.test(text) ? '"' + text.replace(/\"/g, '""') + '"' : text;
	    }
	    return dsv;
	  };
	  d3.csv = d3.dsv(",", "text/csv");
	  d3.tsv = d3.dsv("	", "text/tab-separated-values");
	  d3.touch = function(container, touches, identifier) {
	    if (arguments.length < 3) identifier = touches, touches = d3_eventSource().changedTouches;
	    if (touches) for (var i = 0, n = touches.length, touch; i < n; ++i) {
	      if ((touch = touches[i]).identifier === identifier) {
	        return d3_mousePoint(container, touch);
	      }
	    }
	  };
	  var d3_timer_queueHead, d3_timer_queueTail, d3_timer_interval, d3_timer_timeout, d3_timer_active, d3_timer_frame = d3_window[d3_vendorSymbol(d3_window, "requestAnimationFrame")] || function(callback) {
	    setTimeout(callback, 17);
	  };
	  d3.timer = function(callback, delay, then) {
	    var n = arguments.length;
	    if (n < 2) delay = 0;
	    if (n < 3) then = Date.now();
	    var time = then + delay, timer = {
	      c: callback,
	      t: time,
	      f: false,
	      n: null
	    };
	    if (d3_timer_queueTail) d3_timer_queueTail.n = timer; else d3_timer_queueHead = timer;
	    d3_timer_queueTail = timer;
	    if (!d3_timer_interval) {
	      d3_timer_timeout = clearTimeout(d3_timer_timeout);
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	  };
	  function d3_timer_step() {
	    var now = d3_timer_mark(), delay = d3_timer_sweep() - now;
	    if (delay > 24) {
	      if (isFinite(delay)) {
	        clearTimeout(d3_timer_timeout);
	        d3_timer_timeout = setTimeout(d3_timer_step, delay);
	      }
	      d3_timer_interval = 0;
	    } else {
	      d3_timer_interval = 1;
	      d3_timer_frame(d3_timer_step);
	    }
	  }
	  d3.timer.flush = function() {
	    d3_timer_mark();
	    d3_timer_sweep();
	  };
	  function d3_timer_mark() {
	    var now = Date.now();
	    d3_timer_active = d3_timer_queueHead;
	    while (d3_timer_active) {
	      if (now >= d3_timer_active.t) d3_timer_active.f = d3_timer_active.c(now - d3_timer_active.t);
	      d3_timer_active = d3_timer_active.n;
	    }
	    return now;
	  }
	  function d3_timer_sweep() {
	    var t0, t1 = d3_timer_queueHead, time = Infinity;
	    while (t1) {
	      if (t1.f) {
	        t1 = t0 ? t0.n = t1.n : d3_timer_queueHead = t1.n;
	      } else {
	        if (t1.t < time) time = t1.t;
	        t1 = (t0 = t1).n;
	      }
	    }
	    d3_timer_queueTail = t0;
	    return time;
	  }
	  function d3_format_precision(x, p) {
	    return p - (x ? Math.ceil(Math.log(x) / Math.LN10) : 1);
	  }
	  d3.round = function(x, n) {
	    return n ? Math.round(x * (n = Math.pow(10, n))) / n : Math.round(x);
	  };
	  var d3_formatPrefixes = [ "y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y" ].map(d3_formatPrefix);
	  d3.formatPrefix = function(value, precision) {
	    var i = 0;
	    if (value) {
	      if (value < 0) value *= -1;
	      if (precision) value = d3.round(value, d3_format_precision(value, precision));
	      i = 1 + Math.floor(1e-12 + Math.log(value) / Math.LN10);
	      i = Math.max(-24, Math.min(24, Math.floor((i - 1) / 3) * 3));
	    }
	    return d3_formatPrefixes[8 + i / 3];
	  };
	  function d3_formatPrefix(d, i) {
	    var k = Math.pow(10, abs(8 - i) * 3);
	    return {
	      scale: i > 8 ? function(d) {
	        return d / k;
	      } : function(d) {
	        return d * k;
	      },
	      symbol: d
	    };
	  }
	  function d3_locale_numberFormat(locale) {
	    var locale_decimal = locale.decimal, locale_thousands = locale.thousands, locale_grouping = locale.grouping, locale_currency = locale.currency, formatGroup = locale_grouping ? function(value) {
	      var i = value.length, t = [], j = 0, g = locale_grouping[0];
	      while (i > 0 && g > 0) {
	        t.push(value.substring(i -= g, i + g));
	        g = locale_grouping[j = (j + 1) % locale_grouping.length];
	      }
	      return t.reverse().join(locale_thousands);
	    } : d3_identity;
	    return function(specifier) {
	      var match = d3_format_re.exec(specifier), fill = match[1] || " ", align = match[2] || ">", sign = match[3] || "", symbol = match[4] || "", zfill = match[5], width = +match[6], comma = match[7], precision = match[8], type = match[9], scale = 1, prefix = "", suffix = "", integer = false;
	      if (precision) precision = +precision.substring(1);
	      if (zfill || fill === "0" && align === "=") {
	        zfill = fill = "0";
	        align = "=";
	        if (comma) width -= Math.floor((width - 1) / 4);
	      }
	      switch (type) {
	       case "n":
	        comma = true;
	        type = "g";
	        break;

	       case "%":
	        scale = 100;
	        suffix = "%";
	        type = "f";
	        break;

	       case "p":
	        scale = 100;
	        suffix = "%";
	        type = "r";
	        break;

	       case "b":
	       case "o":
	       case "x":
	       case "X":
	        if (symbol === "#") prefix = "0" + type.toLowerCase();

	       case "c":
	       case "d":
	        integer = true;
	        precision = 0;
	        break;

	       case "s":
	        scale = -1;
	        type = "r";
	        break;
	      }
	      if (symbol === "$") prefix = locale_currency[0], suffix = locale_currency[1];
	      if (type == "r" && !precision) type = "g";
	      if (precision != null) {
	        if (type == "g") precision = Math.max(1, Math.min(21, precision)); else if (type == "e" || type == "f") precision = Math.max(0, Math.min(20, precision));
	      }
	      type = d3_format_types.get(type) || d3_format_typeDefault;
	      var zcomma = zfill && comma;
	      return function(value) {
	        var fullSuffix = suffix;
	        if (integer && value % 1) return "";
	        var negative = value < 0 || value === 0 && 1 / value < 0 ? (value = -value, "-") : sign;
	        if (scale < 0) {
	          var unit = d3.formatPrefix(value, precision);
	          value = unit.scale(value);
	          fullSuffix = unit.symbol + suffix;
	        } else {
	          value *= scale;
	        }
	        value = type(value, precision);
	        var i = value.lastIndexOf("."), before = i < 0 ? value : value.substring(0, i), after = i < 0 ? "" : locale_decimal + value.substring(i + 1);
	        if (!zfill && comma) before = formatGroup(before);
	        var length = prefix.length + before.length + after.length + (zcomma ? 0 : negative.length), padding = length < width ? new Array(length = width - length + 1).join(fill) : "";
	        if (zcomma) before = formatGroup(padding + before);
	        negative += prefix;
	        value = before + after;
	        return (align === "<" ? negative + value + padding : align === ">" ? padding + negative + value : align === "^" ? padding.substring(0, length >>= 1) + negative + value + padding.substring(length) : negative + (zcomma ? value : padding + value)) + fullSuffix;
	      };
	    };
	  }
	  var d3_format_re = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i;
	  var d3_format_types = d3.map({
	    b: function(x) {
	      return x.toString(2);
	    },
	    c: function(x) {
	      return String.fromCharCode(x);
	    },
	    o: function(x) {
	      return x.toString(8);
	    },
	    x: function(x) {
	      return x.toString(16);
	    },
	    X: function(x) {
	      return x.toString(16).toUpperCase();
	    },
	    g: function(x, p) {
	      return x.toPrecision(p);
	    },
	    e: function(x, p) {
	      return x.toExponential(p);
	    },
	    f: function(x, p) {
	      return x.toFixed(p);
	    },
	    r: function(x, p) {
	      return (x = d3.round(x, d3_format_precision(x, p))).toFixed(Math.max(0, Math.min(20, d3_format_precision(x * (1 + 1e-15), p))));
	    }
	  });
	  function d3_format_typeDefault(x) {
	    return x + "";
	  }
	  var d3_time = d3.time = {}, d3_date = Date;
	  function d3_date_utc() {
	    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0]);
	  }
	  d3_date_utc.prototype = {
	    getDate: function() {
	      return this._.getUTCDate();
	    },
	    getDay: function() {
	      return this._.getUTCDay();
	    },
	    getFullYear: function() {
	      return this._.getUTCFullYear();
	    },
	    getHours: function() {
	      return this._.getUTCHours();
	    },
	    getMilliseconds: function() {
	      return this._.getUTCMilliseconds();
	    },
	    getMinutes: function() {
	      return this._.getUTCMinutes();
	    },
	    getMonth: function() {
	      return this._.getUTCMonth();
	    },
	    getSeconds: function() {
	      return this._.getUTCSeconds();
	    },
	    getTime: function() {
	      return this._.getTime();
	    },
	    getTimezoneOffset: function() {
	      return 0;
	    },
	    valueOf: function() {
	      return this._.valueOf();
	    },
	    setDate: function() {
	      d3_time_prototype.setUTCDate.apply(this._, arguments);
	    },
	    setDay: function() {
	      d3_time_prototype.setUTCDay.apply(this._, arguments);
	    },
	    setFullYear: function() {
	      d3_time_prototype.setUTCFullYear.apply(this._, arguments);
	    },
	    setHours: function() {
	      d3_time_prototype.setUTCHours.apply(this._, arguments);
	    },
	    setMilliseconds: function() {
	      d3_time_prototype.setUTCMilliseconds.apply(this._, arguments);
	    },
	    setMinutes: function() {
	      d3_time_prototype.setUTCMinutes.apply(this._, arguments);
	    },
	    setMonth: function() {
	      d3_time_prototype.setUTCMonth.apply(this._, arguments);
	    },
	    setSeconds: function() {
	      d3_time_prototype.setUTCSeconds.apply(this._, arguments);
	    },
	    setTime: function() {
	      d3_time_prototype.setTime.apply(this._, arguments);
	    }
	  };
	  var d3_time_prototype = Date.prototype;
	  function d3_time_interval(local, step, number) {
	    function round(date) {
	      var d0 = local(date), d1 = offset(d0, 1);
	      return date - d0 < d1 - date ? d0 : d1;
	    }
	    function ceil(date) {
	      step(date = local(new d3_date(date - 1)), 1);
	      return date;
	    }
	    function offset(date, k) {
	      step(date = new d3_date(+date), k);
	      return date;
	    }
	    function range(t0, t1, dt) {
	      var time = ceil(t0), times = [];
	      if (dt > 1) {
	        while (time < t1) {
	          if (!(number(time) % dt)) times.push(new Date(+time));
	          step(time, 1);
	        }
	      } else {
	        while (time < t1) times.push(new Date(+time)), step(time, 1);
	      }
	      return times;
	    }
	    function range_utc(t0, t1, dt) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = t0;
	        return range(utc, t1, dt);
	      } finally {
	        d3_date = Date;
	      }
	    }
	    local.floor = local;
	    local.round = round;
	    local.ceil = ceil;
	    local.offset = offset;
	    local.range = range;
	    var utc = local.utc = d3_time_interval_utc(local);
	    utc.floor = utc;
	    utc.round = d3_time_interval_utc(round);
	    utc.ceil = d3_time_interval_utc(ceil);
	    utc.offset = d3_time_interval_utc(offset);
	    utc.range = range_utc;
	    return local;
	  }
	  function d3_time_interval_utc(method) {
	    return function(date, k) {
	      try {
	        d3_date = d3_date_utc;
	        var utc = new d3_date_utc();
	        utc._ = date;
	        return method(utc, k)._;
	      } finally {
	        d3_date = Date;
	      }
	    };
	  }
	  d3_time.year = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setMonth(0, 1);
	    return date;
	  }, function(date, offset) {
	    date.setFullYear(date.getFullYear() + offset);
	  }, function(date) {
	    return date.getFullYear();
	  });
	  d3_time.years = d3_time.year.range;
	  d3_time.years.utc = d3_time.year.utc.range;
	  d3_time.day = d3_time_interval(function(date) {
	    var day = new d3_date(2e3, 0);
	    day.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
	    return day;
	  }, function(date, offset) {
	    date.setDate(date.getDate() + offset);
	  }, function(date) {
	    return date.getDate() - 1;
	  });
	  d3_time.days = d3_time.day.range;
	  d3_time.days.utc = d3_time.day.utc.range;
	  d3_time.dayOfYear = function(date) {
	    var year = d3_time.year(date);
	    return Math.floor((date - year - (date.getTimezoneOffset() - year.getTimezoneOffset()) * 6e4) / 864e5);
	  };
	  [ "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday" ].forEach(function(day, i) {
	    i = 7 - i;
	    var interval = d3_time[day] = d3_time_interval(function(date) {
	      (date = d3_time.day(date)).setDate(date.getDate() - (date.getDay() + i) % 7);
	      return date;
	    }, function(date, offset) {
	      date.setDate(date.getDate() + Math.floor(offset) * 7);
	    }, function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7) - (day !== i);
	    });
	    d3_time[day + "s"] = interval.range;
	    d3_time[day + "s"].utc = interval.utc.range;
	    d3_time[day + "OfYear"] = function(date) {
	      var day = d3_time.year(date).getDay();
	      return Math.floor((d3_time.dayOfYear(date) + (day + i) % 7) / 7);
	    };
	  });
	  d3_time.week = d3_time.sunday;
	  d3_time.weeks = d3_time.sunday.range;
	  d3_time.weeks.utc = d3_time.sunday.utc.range;
	  d3_time.weekOfYear = d3_time.sundayOfYear;
	  function d3_locale_timeFormat(locale) {
	    var locale_dateTime = locale.dateTime, locale_date = locale.date, locale_time = locale.time, locale_periods = locale.periods, locale_days = locale.days, locale_shortDays = locale.shortDays, locale_months = locale.months, locale_shortMonths = locale.shortMonths;
	    function d3_time_format(template) {
	      var n = template.length;
	      function format(date) {
	        var string = [], i = -1, j = 0, c, p, f;
	        while (++i < n) {
	          if (template.charCodeAt(i) === 37) {
	            string.push(template.substring(j, i));
	            if ((p = d3_time_formatPads[c = template.charAt(++i)]) != null) c = template.charAt(++i);
	            if (f = d3_time_formats[c]) c = f(date, p == null ? c === "e" ? " " : "0" : p);
	            string.push(c);
	            j = i + 1;
	          }
	        }
	        string.push(template.substring(j, i));
	        return string.join("");
	      }
	      format.parse = function(string) {
	        var d = {
	          y: 1900,
	          m: 0,
	          d: 1,
	          H: 0,
	          M: 0,
	          S: 0,
	          L: 0,
	          Z: null
	        }, i = d3_time_parse(d, template, string, 0);
	        if (i != string.length) return null;
	        if ("p" in d) d.H = d.H % 12 + d.p * 12;
	        var localZ = d.Z != null && d3_date !== d3_date_utc, date = new (localZ ? d3_date_utc : d3_date)();
	        if ("j" in d) date.setFullYear(d.y, 0, d.j); else if ("w" in d && ("W" in d || "U" in d)) {
	          date.setFullYear(d.y, 0, 1);
	          date.setFullYear(d.y, 0, "W" in d ? (d.w + 6) % 7 + d.W * 7 - (date.getDay() + 5) % 7 : d.w + d.U * 7 - (date.getDay() + 6) % 7);
	        } else date.setFullYear(d.y, d.m, d.d);
	        date.setHours(d.H + Math.floor(d.Z / 100), d.M + d.Z % 100, d.S, d.L);
	        return localZ ? date._ : date;
	      };
	      format.toString = function() {
	        return template;
	      };
	      return format;
	    }
	    function d3_time_parse(date, template, string, j) {
	      var c, p, t, i = 0, n = template.length, m = string.length;
	      while (i < n) {
	        if (j >= m) return -1;
	        c = template.charCodeAt(i++);
	        if (c === 37) {
	          t = template.charAt(i++);
	          p = d3_time_parsers[t in d3_time_formatPads ? template.charAt(i++) : t];
	          if (!p || (j = p(date, string, j)) < 0) return -1;
	        } else if (c != string.charCodeAt(j++)) {
	          return -1;
	        }
	      }
	      return j;
	    }
	    d3_time_format.utc = function(template) {
	      var local = d3_time_format(template);
	      function format(date) {
	        try {
	          d3_date = d3_date_utc;
	          var utc = new d3_date();
	          utc._ = date;
	          return local(utc);
	        } finally {
	          d3_date = Date;
	        }
	      }
	      format.parse = function(string) {
	        try {
	          d3_date = d3_date_utc;
	          var date = local.parse(string);
	          return date && date._;
	        } finally {
	          d3_date = Date;
	        }
	      };
	      format.toString = local.toString;
	      return format;
	    };
	    d3_time_format.multi = d3_time_format.utc.multi = d3_time_formatMulti;
	    var d3_time_periodLookup = d3.map(), d3_time_dayRe = d3_time_formatRe(locale_days), d3_time_dayLookup = d3_time_formatLookup(locale_days), d3_time_dayAbbrevRe = d3_time_formatRe(locale_shortDays), d3_time_dayAbbrevLookup = d3_time_formatLookup(locale_shortDays), d3_time_monthRe = d3_time_formatRe(locale_months), d3_time_monthLookup = d3_time_formatLookup(locale_months), d3_time_monthAbbrevRe = d3_time_formatRe(locale_shortMonths), d3_time_monthAbbrevLookup = d3_time_formatLookup(locale_shortMonths);
	    locale_periods.forEach(function(p, i) {
	      d3_time_periodLookup.set(p.toLowerCase(), i);
	    });
	    var d3_time_formats = {
	      a: function(d) {
	        return locale_shortDays[d.getDay()];
	      },
	      A: function(d) {
	        return locale_days[d.getDay()];
	      },
	      b: function(d) {
	        return locale_shortMonths[d.getMonth()];
	      },
	      B: function(d) {
	        return locale_months[d.getMonth()];
	      },
	      c: d3_time_format(locale_dateTime),
	      d: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      e: function(d, p) {
	        return d3_time_formatPad(d.getDate(), p, 2);
	      },
	      H: function(d, p) {
	        return d3_time_formatPad(d.getHours(), p, 2);
	      },
	      I: function(d, p) {
	        return d3_time_formatPad(d.getHours() % 12 || 12, p, 2);
	      },
	      j: function(d, p) {
	        return d3_time_formatPad(1 + d3_time.dayOfYear(d), p, 3);
	      },
	      L: function(d, p) {
	        return d3_time_formatPad(d.getMilliseconds(), p, 3);
	      },
	      m: function(d, p) {
	        return d3_time_formatPad(d.getMonth() + 1, p, 2);
	      },
	      M: function(d, p) {
	        return d3_time_formatPad(d.getMinutes(), p, 2);
	      },
	      p: function(d) {
	        return locale_periods[+(d.getHours() >= 12)];
	      },
	      S: function(d, p) {
	        return d3_time_formatPad(d.getSeconds(), p, 2);
	      },
	      U: function(d, p) {
	        return d3_time_formatPad(d3_time.sundayOfYear(d), p, 2);
	      },
	      w: function(d) {
	        return d.getDay();
	      },
	      W: function(d, p) {
	        return d3_time_formatPad(d3_time.mondayOfYear(d), p, 2);
	      },
	      x: d3_time_format(locale_date),
	      X: d3_time_format(locale_time),
	      y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 100, p, 2);
	      },
	      Y: function(d, p) {
	        return d3_time_formatPad(d.getFullYear() % 1e4, p, 4);
	      },
	      Z: d3_time_zone,
	      "%": function() {
	        return "%";
	      }
	    };
	    var d3_time_parsers = {
	      a: d3_time_parseWeekdayAbbrev,
	      A: d3_time_parseWeekday,
	      b: d3_time_parseMonthAbbrev,
	      B: d3_time_parseMonth,
	      c: d3_time_parseLocaleFull,
	      d: d3_time_parseDay,
	      e: d3_time_parseDay,
	      H: d3_time_parseHour24,
	      I: d3_time_parseHour24,
	      j: d3_time_parseDayOfYear,
	      L: d3_time_parseMilliseconds,
	      m: d3_time_parseMonthNumber,
	      M: d3_time_parseMinutes,
	      p: d3_time_parseAmPm,
	      S: d3_time_parseSeconds,
	      U: d3_time_parseWeekNumberSunday,
	      w: d3_time_parseWeekdayNumber,
	      W: d3_time_parseWeekNumberMonday,
	      x: d3_time_parseLocaleDate,
	      X: d3_time_parseLocaleTime,
	      y: d3_time_parseYear,
	      Y: d3_time_parseFullYear,
	      Z: d3_time_parseZone,
	      "%": d3_time_parseLiteralPercent
	    };
	    function d3_time_parseWeekdayAbbrev(date, string, i) {
	      d3_time_dayAbbrevRe.lastIndex = 0;
	      var n = d3_time_dayAbbrevRe.exec(string.substring(i));
	      return n ? (date.w = d3_time_dayAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseWeekday(date, string, i) {
	      d3_time_dayRe.lastIndex = 0;
	      var n = d3_time_dayRe.exec(string.substring(i));
	      return n ? (date.w = d3_time_dayLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonthAbbrev(date, string, i) {
	      d3_time_monthAbbrevRe.lastIndex = 0;
	      var n = d3_time_monthAbbrevRe.exec(string.substring(i));
	      return n ? (date.m = d3_time_monthAbbrevLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseMonth(date, string, i) {
	      d3_time_monthRe.lastIndex = 0;
	      var n = d3_time_monthRe.exec(string.substring(i));
	      return n ? (date.m = d3_time_monthLookup.get(n[0].toLowerCase()), i + n[0].length) : -1;
	    }
	    function d3_time_parseLocaleFull(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.c.toString(), string, i);
	    }
	    function d3_time_parseLocaleDate(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.x.toString(), string, i);
	    }
	    function d3_time_parseLocaleTime(date, string, i) {
	      return d3_time_parse(date, d3_time_formats.X.toString(), string, i);
	    }
	    function d3_time_parseAmPm(date, string, i) {
	      var n = d3_time_periodLookup.get(string.substring(i, i += 2).toLowerCase());
	      return n == null ? -1 : (date.p = n, i);
	    }
	    return d3_time_format;
	  }
	  var d3_time_formatPads = {
	    "-": "",
	    _: " ",
	    "0": "0"
	  }, d3_time_numberRe = /^\s*\d+/, d3_time_percentRe = /^%/;
	  function d3_time_formatPad(value, fill, width) {
	    var sign = value < 0 ? "-" : "", string = (sign ? -value : value) + "", length = string.length;
	    return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
	  }
	  function d3_time_formatRe(names) {
	    return new RegExp("^(?:" + names.map(d3.requote).join("|") + ")", "i");
	  }
	  function d3_time_formatLookup(names) {
	    var map = new d3_Map(), i = -1, n = names.length;
	    while (++i < n) map.set(names[i].toLowerCase(), i);
	    return map;
	  }
	  function d3_time_parseWeekdayNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i, i + 1));
	    return n ? (date.w = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberSunday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i));
	    return n ? (date.U = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseWeekNumberMonday(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i));
	    return n ? (date.W = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseFullYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i, i + 4));
	    return n ? (date.y = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
	    return n ? (date.y = d3_time_expandYear(+n[0]), i + n[0].length) : -1;
	  }
	  function d3_time_parseZone(date, string, i) {
	    return /^[+-]\d{4}$/.test(string = string.substring(i, i + 5)) ? (date.Z = -string, 
	    i + 5) : -1;
	  }
	  function d3_time_expandYear(d) {
	    return d + (d > 68 ? 1900 : 2e3);
	  }
	  function d3_time_parseMonthNumber(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
	    return n ? (date.m = n[0] - 1, i + n[0].length) : -1;
	  }
	  function d3_time_parseDay(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
	    return n ? (date.d = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseDayOfYear(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i, i + 3));
	    return n ? (date.j = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseHour24(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
	    return n ? (date.H = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMinutes(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
	    return n ? (date.M = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseSeconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i, i + 2));
	    return n ? (date.S = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_parseMilliseconds(date, string, i) {
	    d3_time_numberRe.lastIndex = 0;
	    var n = d3_time_numberRe.exec(string.substring(i, i + 3));
	    return n ? (date.L = +n[0], i + n[0].length) : -1;
	  }
	  function d3_time_zone(d) {
	    var z = d.getTimezoneOffset(), zs = z > 0 ? "-" : "+", zh = ~~(abs(z) / 60), zm = abs(z) % 60;
	    return zs + d3_time_formatPad(zh, "0", 2) + d3_time_formatPad(zm, "0", 2);
	  }
	  function d3_time_parseLiteralPercent(date, string, i) {
	    d3_time_percentRe.lastIndex = 0;
	    var n = d3_time_percentRe.exec(string.substring(i, i + 1));
	    return n ? i + n[0].length : -1;
	  }
	  function d3_time_formatMulti(formats) {
	    var n = formats.length, i = -1;
	    while (++i < n) formats[i][0] = this(formats[i][0]);
	    return function(date) {
	      var i = 0, f = formats[i];
	      while (!f[1](date)) f = formats[++i];
	      return f[0](date);
	    };
	  }
	  d3.locale = function(locale) {
	    return {
	      numberFormat: d3_locale_numberFormat(locale),
	      timeFormat: d3_locale_timeFormat(locale)
	    };
	  };
	  var d3_locale_enUS = d3.locale({
	    decimal: ".",
	    thousands: ",",
	    grouping: [ 3 ],
	    currency: [ "$", "" ],
	    dateTime: "%a %b %e %X %Y",
	    date: "%m/%d/%Y",
	    time: "%H:%M:%S",
	    periods: [ "AM", "PM" ],
	    days: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
	    shortDays: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
	    months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
	    shortMonths: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
	  });
	  d3.format = d3_locale_enUS.numberFormat;
	  d3.geo = {};
	  function d3_adder() {}
	  d3_adder.prototype = {
	    s: 0,
	    t: 0,
	    add: function(y) {
	      d3_adderSum(y, this.t, d3_adderTemp);
	      d3_adderSum(d3_adderTemp.s, this.s, this);
	      if (this.s) this.t += d3_adderTemp.t; else this.s = d3_adderTemp.t;
	    },
	    reset: function() {
	      this.s = this.t = 0;
	    },
	    valueOf: function() {
	      return this.s;
	    }
	  };
	  var d3_adderTemp = new d3_adder();
	  function d3_adderSum(a, b, o) {
	    var x = o.s = a + b, bv = x - a, av = x - bv;
	    o.t = a - av + (b - bv);
	  }
	  d3.geo.stream = function(object, listener) {
	    if (object && d3_geo_streamObjectType.hasOwnProperty(object.type)) {
	      d3_geo_streamObjectType[object.type](object, listener);
	    } else {
	      d3_geo_streamGeometry(object, listener);
	    }
	  };
	  function d3_geo_streamGeometry(geometry, listener) {
	    if (geometry && d3_geo_streamGeometryType.hasOwnProperty(geometry.type)) {
	      d3_geo_streamGeometryType[geometry.type](geometry, listener);
	    }
	  }
	  var d3_geo_streamObjectType = {
	    Feature: function(feature, listener) {
	      d3_geo_streamGeometry(feature.geometry, listener);
	    },
	    FeatureCollection: function(object, listener) {
	      var features = object.features, i = -1, n = features.length;
	      while (++i < n) d3_geo_streamGeometry(features[i].geometry, listener);
	    }
	  };
	  var d3_geo_streamGeometryType = {
	    Sphere: function(object, listener) {
	      listener.sphere();
	    },
	    Point: function(object, listener) {
	      object = object.coordinates;
	      listener.point(object[0], object[1], object[2]);
	    },
	    MultiPoint: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) object = coordinates[i], listener.point(object[0], object[1], object[2]);
	    },
	    LineString: function(object, listener) {
	      d3_geo_streamLine(object.coordinates, listener, 0);
	    },
	    MultiLineString: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamLine(coordinates[i], listener, 0);
	    },
	    Polygon: function(object, listener) {
	      d3_geo_streamPolygon(object.coordinates, listener);
	    },
	    MultiPolygon: function(object, listener) {
	      var coordinates = object.coordinates, i = -1, n = coordinates.length;
	      while (++i < n) d3_geo_streamPolygon(coordinates[i], listener);
	    },
	    GeometryCollection: function(object, listener) {
	      var geometries = object.geometries, i = -1, n = geometries.length;
	      while (++i < n) d3_geo_streamGeometry(geometries[i], listener);
	    }
	  };
	  function d3_geo_streamLine(coordinates, listener, closed) {
	    var i = -1, n = coordinates.length - closed, coordinate;
	    listener.lineStart();
	    while (++i < n) coordinate = coordinates[i], listener.point(coordinate[0], coordinate[1], coordinate[2]);
	    listener.lineEnd();
	  }
	  function d3_geo_streamPolygon(coordinates, listener) {
	    var i = -1, n = coordinates.length;
	    listener.polygonStart();
	    while (++i < n) d3_geo_streamLine(coordinates[i], listener, 1);
	    listener.polygonEnd();
	  }
	  d3.geo.area = function(object) {
	    d3_geo_areaSum = 0;
	    d3.geo.stream(object, d3_geo_area);
	    return d3_geo_areaSum;
	  };
	  var d3_geo_areaSum, d3_geo_areaRingSum = new d3_adder();
	  var d3_geo_area = {
	    sphere: function() {
	      d3_geo_areaSum += 4 * π;
	    },
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_areaRingSum.reset();
	      d3_geo_area.lineStart = d3_geo_areaRingStart;
	    },
	    polygonEnd: function() {
	      var area = 2 * d3_geo_areaRingSum;
	      d3_geo_areaSum += area < 0 ? 4 * π + area : area;
	      d3_geo_area.lineStart = d3_geo_area.lineEnd = d3_geo_area.point = d3_noop;
	    }
	  };
	  function d3_geo_areaRingStart() {
	    var λ00, φ00, λ0, cosφ0, sinφ0;
	    d3_geo_area.point = function(λ, φ) {
	      d3_geo_area.point = nextPoint;
	      λ0 = (λ00 = λ) * d3_radians, cosφ0 = Math.cos(φ = (φ00 = φ) * d3_radians / 2 + π / 4), 
	      sinφ0 = Math.sin(φ);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      φ = φ * d3_radians / 2 + π / 4;
	      var dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, cosφ = Math.cos(φ), sinφ = Math.sin(φ), k = sinφ0 * sinφ, u = cosφ0 * cosφ + k * Math.cos(adλ), v = k * sdλ * Math.sin(adλ);
	      d3_geo_areaRingSum.add(Math.atan2(v, u));
	      λ0 = λ, cosφ0 = cosφ, sinφ0 = sinφ;
	    }
	    d3_geo_area.lineEnd = function() {
	      nextPoint(λ00, φ00);
	    };
	  }
	  function d3_geo_cartesian(spherical) {
	    var λ = spherical[0], φ = spherical[1], cosφ = Math.cos(φ);
	    return [ cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ) ];
	  }
	  function d3_geo_cartesianDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
	  }
	  function d3_geo_cartesianCross(a, b) {
	    return [ a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0] ];
	  }
	  function d3_geo_cartesianAdd(a, b) {
	    a[0] += b[0];
	    a[1] += b[1];
	    a[2] += b[2];
	  }
	  function d3_geo_cartesianScale(vector, k) {
	    return [ vector[0] * k, vector[1] * k, vector[2] * k ];
	  }
	  function d3_geo_cartesianNormalize(d) {
	    var l = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
	    d[0] /= l;
	    d[1] /= l;
	    d[2] /= l;
	  }
	  function d3_geo_spherical(cartesian) {
	    return [ Math.atan2(cartesian[1], cartesian[0]), d3_asin(cartesian[2]) ];
	  }
	  function d3_geo_sphericalEqual(a, b) {
	    return abs(a[0] - b[0]) < ε && abs(a[1] - b[1]) < ε;
	  }
	  d3.geo.bounds = function() {
	    var λ0, φ0, λ1, φ1, λ_, λ__, φ__, p0, dλSum, ranges, range;
	    var bound = {
	      point: point,
	      lineStart: lineStart,
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        bound.point = ringPoint;
	        bound.lineStart = ringStart;
	        bound.lineEnd = ringEnd;
	        dλSum = 0;
	        d3_geo_area.polygonStart();
	      },
	      polygonEnd: function() {
	        d3_geo_area.polygonEnd();
	        bound.point = point;
	        bound.lineStart = lineStart;
	        bound.lineEnd = lineEnd;
	        if (d3_geo_areaRingSum < 0) λ0 = -(λ1 = 180), φ0 = -(φ1 = 90); else if (dλSum > ε) φ1 = 90; else if (dλSum < -ε) φ0 = -90;
	        range[0] = λ0, range[1] = λ1;
	      }
	    };
	    function point(λ, φ) {
	      ranges.push(range = [ λ0 = λ, λ1 = λ ]);
	      if (φ < φ0) φ0 = φ;
	      if (φ > φ1) φ1 = φ;
	    }
	    function linePoint(λ, φ) {
	      var p = d3_geo_cartesian([ λ * d3_radians, φ * d3_radians ]);
	      if (p0) {
	        var normal = d3_geo_cartesianCross(p0, p), equatorial = [ normal[1], -normal[0], 0 ], inflection = d3_geo_cartesianCross(equatorial, normal);
	        d3_geo_cartesianNormalize(inflection);
	        inflection = d3_geo_spherical(inflection);
	        var dλ = λ - λ_, s = dλ > 0 ? 1 : -1, λi = inflection[0] * d3_degrees * s, antimeridian = abs(dλ) > 180;
	        if (antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = inflection[1] * d3_degrees;
	          if (φi > φ1) φ1 = φi;
	        } else if (λi = (λi + 360) % 360 - 180, antimeridian ^ (s * λ_ < λi && λi < s * λ)) {
	          var φi = -inflection[1] * d3_degrees;
	          if (φi < φ0) φ0 = φi;
	        } else {
	          if (φ < φ0) φ0 = φ;
	          if (φ > φ1) φ1 = φ;
	        }
	        if (antimeridian) {
	          if (λ < λ_) {
	            if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	          } else {
	            if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	          }
	        } else {
	          if (λ1 >= λ0) {
	            if (λ < λ0) λ0 = λ;
	            if (λ > λ1) λ1 = λ;
	          } else {
	            if (λ > λ_) {
	              if (angle(λ0, λ) > angle(λ0, λ1)) λ1 = λ;
	            } else {
	              if (angle(λ, λ1) > angle(λ0, λ1)) λ0 = λ;
	            }
	          }
	        }
	      } else {
	        point(λ, φ);
	      }
	      p0 = p, λ_ = λ;
	    }
	    function lineStart() {
	      bound.point = linePoint;
	    }
	    function lineEnd() {
	      range[0] = λ0, range[1] = λ1;
	      bound.point = point;
	      p0 = null;
	    }
	    function ringPoint(λ, φ) {
	      if (p0) {
	        var dλ = λ - λ_;
	        dλSum += abs(dλ) > 180 ? dλ + (dλ > 0 ? 360 : -360) : dλ;
	      } else λ__ = λ, φ__ = φ;
	      d3_geo_area.point(λ, φ);
	      linePoint(λ, φ);
	    }
	    function ringStart() {
	      d3_geo_area.lineStart();
	    }
	    function ringEnd() {
	      ringPoint(λ__, φ__);
	      d3_geo_area.lineEnd();
	      if (abs(dλSum) > ε) λ0 = -(λ1 = 180);
	      range[0] = λ0, range[1] = λ1;
	      p0 = null;
	    }
	    function angle(λ0, λ1) {
	      return (λ1 -= λ0) < 0 ? λ1 + 360 : λ1;
	    }
	    function compareRanges(a, b) {
	      return a[0] - b[0];
	    }
	    function withinRange(x, range) {
	      return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
	    }
	    return function(feature) {
	      φ1 = λ1 = -(λ0 = φ0 = Infinity);
	      ranges = [];
	      d3.geo.stream(feature, bound);
	      var n = ranges.length;
	      if (n) {
	        ranges.sort(compareRanges);
	        for (var i = 1, a = ranges[0], b, merged = [ a ]; i < n; ++i) {
	          b = ranges[i];
	          if (withinRange(b[0], a) || withinRange(b[1], a)) {
	            if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
	            if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
	          } else {
	            merged.push(a = b);
	          }
	        }
	        var best = -Infinity, dλ;
	        for (var n = merged.length - 1, i = 0, a = merged[n], b; i <= n; a = b, ++i) {
	          b = merged[i];
	          if ((dλ = angle(a[1], b[0])) > best) best = dλ, λ0 = b[0], λ1 = a[1];
	        }
	      }
	      ranges = range = null;
	      return λ0 === Infinity || φ0 === Infinity ? [ [ NaN, NaN ], [ NaN, NaN ] ] : [ [ λ0, φ0 ], [ λ1, φ1 ] ];
	    };
	  }();
	  d3.geo.centroid = function(object) {
	    d3_geo_centroidW0 = d3_geo_centroidW1 = d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	    d3.geo.stream(object, d3_geo_centroid);
	    var x = d3_geo_centroidX2, y = d3_geo_centroidY2, z = d3_geo_centroidZ2, m = x * x + y * y + z * z;
	    if (m < ε2) {
	      x = d3_geo_centroidX1, y = d3_geo_centroidY1, z = d3_geo_centroidZ1;
	      if (d3_geo_centroidW1 < ε) x = d3_geo_centroidX0, y = d3_geo_centroidY0, z = d3_geo_centroidZ0;
	      m = x * x + y * y + z * z;
	      if (m < ε2) return [ NaN, NaN ];
	    }
	    return [ Math.atan2(y, x) * d3_degrees, d3_asin(z / Math.sqrt(m)) * d3_degrees ];
	  };
	  var d3_geo_centroidW0, d3_geo_centroidW1, d3_geo_centroidX0, d3_geo_centroidY0, d3_geo_centroidZ0, d3_geo_centroidX1, d3_geo_centroidY1, d3_geo_centroidZ1, d3_geo_centroidX2, d3_geo_centroidY2, d3_geo_centroidZ2;
	  var d3_geo_centroid = {
	    sphere: d3_noop,
	    point: d3_geo_centroidPoint,
	    lineStart: d3_geo_centroidLineStart,
	    lineEnd: d3_geo_centroidLineEnd,
	    polygonStart: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_centroid.lineStart = d3_geo_centroidLineStart;
	    }
	  };
	  function d3_geo_centroidPoint(λ, φ) {
	    λ *= d3_radians;
	    var cosφ = Math.cos(φ *= d3_radians);
	    d3_geo_centroidPointXYZ(cosφ * Math.cos(λ), cosφ * Math.sin(λ), Math.sin(φ));
	  }
	  function d3_geo_centroidPointXYZ(x, y, z) {
	    ++d3_geo_centroidW0;
	    d3_geo_centroidX0 += (x - d3_geo_centroidX0) / d3_geo_centroidW0;
	    d3_geo_centroidY0 += (y - d3_geo_centroidY0) / d3_geo_centroidW0;
	    d3_geo_centroidZ0 += (z - d3_geo_centroidZ0) / d3_geo_centroidW0;
	  }
	  function d3_geo_centroidLineStart() {
	    var x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroid.point = nextPoint;
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), w = Math.atan2(Math.sqrt((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_geo_centroidLineEnd() {
	    d3_geo_centroid.point = d3_geo_centroidPoint;
	  }
	  function d3_geo_centroidRingStart() {
	    var λ00, φ00, x0, y0, z0;
	    d3_geo_centroid.point = function(λ, φ) {
	      λ00 = λ, φ00 = φ;
	      d3_geo_centroid.point = nextPoint;
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians);
	      x0 = cosφ * Math.cos(λ);
	      y0 = cosφ * Math.sin(λ);
	      z0 = Math.sin(φ);
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    };
	    d3_geo_centroid.lineEnd = function() {
	      nextPoint(λ00, φ00);
	      d3_geo_centroid.lineEnd = d3_geo_centroidLineEnd;
	      d3_geo_centroid.point = d3_geo_centroidPoint;
	    };
	    function nextPoint(λ, φ) {
	      λ *= d3_radians;
	      var cosφ = Math.cos(φ *= d3_radians), x = cosφ * Math.cos(λ), y = cosφ * Math.sin(λ), z = Math.sin(φ), cx = y0 * z - z0 * y, cy = z0 * x - x0 * z, cz = x0 * y - y0 * x, m = Math.sqrt(cx * cx + cy * cy + cz * cz), u = x0 * x + y0 * y + z0 * z, v = m && -d3_acos(u) / m, w = Math.atan2(m, u);
	      d3_geo_centroidX2 += v * cx;
	      d3_geo_centroidY2 += v * cy;
	      d3_geo_centroidZ2 += v * cz;
	      d3_geo_centroidW1 += w;
	      d3_geo_centroidX1 += w * (x0 + (x0 = x));
	      d3_geo_centroidY1 += w * (y0 + (y0 = y));
	      d3_geo_centroidZ1 += w * (z0 + (z0 = z));
	      d3_geo_centroidPointXYZ(x0, y0, z0);
	    }
	  }
	  function d3_true() {
	    return true;
	  }
	  function d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener) {
	    var subject = [], clip = [];
	    segments.forEach(function(segment) {
	      if ((n = segment.length - 1) <= 0) return;
	      var n, p0 = segment[0], p1 = segment[n];
	      if (d3_geo_sphericalEqual(p0, p1)) {
	        listener.lineStart();
	        for (var i = 0; i < n; ++i) listener.point((p0 = segment[i])[0], p0[1]);
	        listener.lineEnd();
	        return;
	      }
	      var a = new d3_geo_clipPolygonIntersection(p0, segment, null, true), b = new d3_geo_clipPolygonIntersection(p0, null, a, false);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	      a = new d3_geo_clipPolygonIntersection(p1, segment, null, false);
	      b = new d3_geo_clipPolygonIntersection(p1, null, a, true);
	      a.o = b;
	      subject.push(a);
	      clip.push(b);
	    });
	    clip.sort(compare);
	    d3_geo_clipPolygonLinkCircular(subject);
	    d3_geo_clipPolygonLinkCircular(clip);
	    if (!subject.length) return;
	    for (var i = 0, entry = clipStartInside, n = clip.length; i < n; ++i) {
	      clip[i].e = entry = !entry;
	    }
	    var start = subject[0], points, point;
	    while (1) {
	      var current = start, isSubject = true;
	      while (current.v) if ((current = current.n) === start) return;
	      points = current.z;
	      listener.lineStart();
	      do {
	        current.v = current.o.v = true;
	        if (current.e) {
	          if (isSubject) {
	            for (var i = 0, n = points.length; i < n; ++i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.n.x, 1, listener);
	          }
	          current = current.n;
	        } else {
	          if (isSubject) {
	            points = current.p.z;
	            for (var i = points.length - 1; i >= 0; --i) listener.point((point = points[i])[0], point[1]);
	          } else {
	            interpolate(current.x, current.p.x, -1, listener);
	          }
	          current = current.p;
	        }
	        current = current.o;
	        points = current.z;
	        isSubject = !isSubject;
	      } while (!current.v);
	      listener.lineEnd();
	    }
	  }
	  function d3_geo_clipPolygonLinkCircular(array) {
	    if (!(n = array.length)) return;
	    var n, i = 0, a = array[0], b;
	    while (++i < n) {
	      a.n = b = array[i];
	      b.p = a;
	      a = b;
	    }
	    a.n = b = array[0];
	    b.p = a;
	  }
	  function d3_geo_clipPolygonIntersection(point, points, other, entry) {
	    this.x = point;
	    this.z = points;
	    this.o = other;
	    this.e = entry;
	    this.v = false;
	    this.n = this.p = null;
	  }
	  function d3_geo_clip(pointVisible, clipLine, interpolate, clipStart) {
	    return function(rotate, listener) {
	      var line = clipLine(listener), rotatedClipStart = rotate.invert(clipStart[0], clipStart[1]);
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          clip.point = pointRing;
	          clip.lineStart = ringStart;
	          clip.lineEnd = ringEnd;
	          segments = [];
	          polygon = [];
	        },
	        polygonEnd: function() {
	          clip.point = point;
	          clip.lineStart = lineStart;
	          clip.lineEnd = lineEnd;
	          segments = d3.merge(segments);
	          var clipStartInside = d3_geo_pointInPolygon(rotatedClipStart, polygon);
	          if (segments.length) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            d3_geo_clipPolygon(segments, d3_geo_clipSort, clipStartInside, interpolate, listener);
	          } else if (clipStartInside) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            interpolate(null, null, 1, listener);
	            listener.lineEnd();
	          }
	          if (polygonStarted) listener.polygonEnd(), polygonStarted = false;
	          segments = polygon = null;
	        },
	        sphere: function() {
	          listener.polygonStart();
	          listener.lineStart();
	          interpolate(null, null, 1, listener);
	          listener.lineEnd();
	          listener.polygonEnd();
	        }
	      };
	      function point(λ, φ) {
	        var point = rotate(λ, φ);
	        if (pointVisible(λ = point[0], φ = point[1])) listener.point(λ, φ);
	      }
	      function pointLine(λ, φ) {
	        var point = rotate(λ, φ);
	        line.point(point[0], point[1]);
	      }
	      function lineStart() {
	        clip.point = pointLine;
	        line.lineStart();
	      }
	      function lineEnd() {
	        clip.point = point;
	        line.lineEnd();
	      }
	      var segments;
	      var buffer = d3_geo_clipBufferListener(), ringListener = clipLine(buffer), polygonStarted = false, polygon, ring;
	      function pointRing(λ, φ) {
	        ring.push([ λ, φ ]);
	        var point = rotate(λ, φ);
	        ringListener.point(point[0], point[1]);
	      }
	      function ringStart() {
	        ringListener.lineStart();
	        ring = [];
	      }
	      function ringEnd() {
	        pointRing(ring[0][0], ring[0][1]);
	        ringListener.lineEnd();
	        var clean = ringListener.clean(), ringSegments = buffer.buffer(), segment, n = ringSegments.length;
	        ring.pop();
	        polygon.push(ring);
	        ring = null;
	        if (!n) return;
	        if (clean & 1) {
	          segment = ringSegments[0];
	          var n = segment.length - 1, i = -1, point;
	          if (n > 0) {
	            if (!polygonStarted) listener.polygonStart(), polygonStarted = true;
	            listener.lineStart();
	            while (++i < n) listener.point((point = segment[i])[0], point[1]);
	            listener.lineEnd();
	          }
	          return;
	        }
	        if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));
	        segments.push(ringSegments.filter(d3_geo_clipSegmentLength1));
	      }
	      return clip;
	    };
	  }
	  function d3_geo_clipSegmentLength1(segment) {
	    return segment.length > 1;
	  }
	  function d3_geo_clipBufferListener() {
	    var lines = [], line;
	    return {
	      lineStart: function() {
	        lines.push(line = []);
	      },
	      point: function(λ, φ) {
	        line.push([ λ, φ ]);
	      },
	      lineEnd: d3_noop,
	      buffer: function() {
	        var buffer = lines;
	        lines = [];
	        line = null;
	        return buffer;
	      },
	      rejoin: function() {
	        if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
	      }
	    };
	  }
	  function d3_geo_clipSort(a, b) {
	    return ((a = a.x)[0] < 0 ? a[1] - halfπ - ε : halfπ - a[1]) - ((b = b.x)[0] < 0 ? b[1] - halfπ - ε : halfπ - b[1]);
	  }
	  function d3_geo_pointInPolygon(point, polygon) {
	    var meridian = point[0], parallel = point[1], meridianNormal = [ Math.sin(meridian), -Math.cos(meridian), 0 ], polarAngle = 0, winding = 0;
	    d3_geo_areaRingSum.reset();
	    for (var i = 0, n = polygon.length; i < n; ++i) {
	      var ring = polygon[i], m = ring.length;
	      if (!m) continue;
	      var point0 = ring[0], λ0 = point0[0], φ0 = point0[1] / 2 + π / 4, sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), j = 1;
	      while (true) {
	        if (j === m) j = 0;
	        point = ring[j];
	        var λ = point[0], φ = point[1] / 2 + π / 4, sinφ = Math.sin(φ), cosφ = Math.cos(φ), dλ = λ - λ0, sdλ = dλ >= 0 ? 1 : -1, adλ = sdλ * dλ, antimeridian = adλ > π, k = sinφ0 * sinφ;
	        d3_geo_areaRingSum.add(Math.atan2(k * sdλ * Math.sin(adλ), cosφ0 * cosφ + k * Math.cos(adλ)));
	        polarAngle += antimeridian ? dλ + sdλ * τ : dλ;
	        if (antimeridian ^ λ0 >= meridian ^ λ >= meridian) {
	          var arc = d3_geo_cartesianCross(d3_geo_cartesian(point0), d3_geo_cartesian(point));
	          d3_geo_cartesianNormalize(arc);
	          var intersection = d3_geo_cartesianCross(meridianNormal, arc);
	          d3_geo_cartesianNormalize(intersection);
	          var φarc = (antimeridian ^ dλ >= 0 ? -1 : 1) * d3_asin(intersection[2]);
	          if (parallel > φarc || parallel === φarc && (arc[0] || arc[1])) {
	            winding += antimeridian ^ dλ >= 0 ? 1 : -1;
	          }
	        }
	        if (!j++) break;
	        λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ, point0 = point;
	      }
	    }
	    return (polarAngle < -ε || polarAngle < ε && d3_geo_areaRingSum < 0) ^ winding & 1;
	  }
	  var d3_geo_clipAntimeridian = d3_geo_clip(d3_true, d3_geo_clipAntimeridianLine, d3_geo_clipAntimeridianInterpolate, [ -π, -π / 2 ]);
	  function d3_geo_clipAntimeridianLine(listener) {
	    var λ0 = NaN, φ0 = NaN, sλ0 = NaN, clean;
	    return {
	      lineStart: function() {
	        listener.lineStart();
	        clean = 1;
	      },
	      point: function(λ1, φ1) {
	        var sλ1 = λ1 > 0 ? π : -π, dλ = abs(λ1 - λ0);
	        if (abs(dλ - π) < ε) {
	          listener.point(λ0, φ0 = (φ0 + φ1) / 2 > 0 ? halfπ : -halfπ);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          listener.point(λ1, φ0);
	          clean = 0;
	        } else if (sλ0 !== sλ1 && dλ >= π) {
	          if (abs(λ0 - sλ0) < ε) λ0 -= sλ0 * ε;
	          if (abs(λ1 - sλ1) < ε) λ1 -= sλ1 * ε;
	          φ0 = d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1);
	          listener.point(sλ0, φ0);
	          listener.lineEnd();
	          listener.lineStart();
	          listener.point(sλ1, φ0);
	          clean = 0;
	        }
	        listener.point(λ0 = λ1, φ0 = φ1);
	        sλ0 = sλ1;
	      },
	      lineEnd: function() {
	        listener.lineEnd();
	        λ0 = φ0 = NaN;
	      },
	      clean: function() {
	        return 2 - clean;
	      }
	    };
	  }
	  function d3_geo_clipAntimeridianIntersect(λ0, φ0, λ1, φ1) {
	    var cosφ0, cosφ1, sinλ0_λ1 = Math.sin(λ0 - λ1);
	    return abs(sinλ0_λ1) > ε ? Math.atan((Math.sin(φ0) * (cosφ1 = Math.cos(φ1)) * Math.sin(λ1) - Math.sin(φ1) * (cosφ0 = Math.cos(φ0)) * Math.sin(λ0)) / (cosφ0 * cosφ1 * sinλ0_λ1)) : (φ0 + φ1) / 2;
	  }
	  function d3_geo_clipAntimeridianInterpolate(from, to, direction, listener) {
	    var φ;
	    if (from == null) {
	      φ = direction * halfπ;
	      listener.point(-π, φ);
	      listener.point(0, φ);
	      listener.point(π, φ);
	      listener.point(π, 0);
	      listener.point(π, -φ);
	      listener.point(0, -φ);
	      listener.point(-π, -φ);
	      listener.point(-π, 0);
	      listener.point(-π, φ);
	    } else if (abs(from[0] - to[0]) > ε) {
	      var s = from[0] < to[0] ? π : -π;
	      φ = direction * s / 2;
	      listener.point(-s, φ);
	      listener.point(0, φ);
	      listener.point(s, φ);
	    } else {
	      listener.point(to[0], to[1]);
	    }
	  }
	  function d3_geo_clipCircle(radius) {
	    var cr = Math.cos(radius), smallRadius = cr > 0, notHemisphere = abs(cr) > ε, interpolate = d3_geo_circleInterpolate(radius, 6 * d3_radians);
	    return d3_geo_clip(visible, clipLine, interpolate, smallRadius ? [ 0, -radius ] : [ -π, radius - π ]);
	    function visible(λ, φ) {
	      return Math.cos(λ) * Math.cos(φ) > cr;
	    }
	    function clipLine(listener) {
	      var point0, c0, v0, v00, clean;
	      return {
	        lineStart: function() {
	          v00 = v0 = false;
	          clean = 1;
	        },
	        point: function(λ, φ) {
	          var point1 = [ λ, φ ], point2, v = visible(λ, φ), c = smallRadius ? v ? 0 : code(λ, φ) : v ? code(λ + (λ < 0 ? π : -π), φ) : 0;
	          if (!point0 && (v00 = v0 = v)) listener.lineStart();
	          if (v !== v0) {
	            point2 = intersect(point0, point1);
	            if (d3_geo_sphericalEqual(point0, point2) || d3_geo_sphericalEqual(point1, point2)) {
	              point1[0] += ε;
	              point1[1] += ε;
	              v = visible(point1[0], point1[1]);
	            }
	          }
	          if (v !== v0) {
	            clean = 0;
	            if (v) {
	              listener.lineStart();
	              point2 = intersect(point1, point0);
	              listener.point(point2[0], point2[1]);
	            } else {
	              point2 = intersect(point0, point1);
	              listener.point(point2[0], point2[1]);
	              listener.lineEnd();
	            }
	            point0 = point2;
	          } else if (notHemisphere && point0 && smallRadius ^ v) {
	            var t;
	            if (!(c & c0) && (t = intersect(point1, point0, true))) {
	              clean = 0;
	              if (smallRadius) {
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	              } else {
	                listener.point(t[1][0], t[1][1]);
	                listener.lineEnd();
	                listener.lineStart();
	                listener.point(t[0][0], t[0][1]);
	              }
	            }
	          }
	          if (v && (!point0 || !d3_geo_sphericalEqual(point0, point1))) {
	            listener.point(point1[0], point1[1]);
	          }
	          point0 = point1, v0 = v, c0 = c;
	        },
	        lineEnd: function() {
	          if (v0) listener.lineEnd();
	          point0 = null;
	        },
	        clean: function() {
	          return clean | (v00 && v0) << 1;
	        }
	      };
	    }
	    function intersect(a, b, two) {
	      var pa = d3_geo_cartesian(a), pb = d3_geo_cartesian(b);
	      var n1 = [ 1, 0, 0 ], n2 = d3_geo_cartesianCross(pa, pb), n2n2 = d3_geo_cartesianDot(n2, n2), n1n2 = n2[0], determinant = n2n2 - n1n2 * n1n2;
	      if (!determinant) return !two && a;
	      var c1 = cr * n2n2 / determinant, c2 = -cr * n1n2 / determinant, n1xn2 = d3_geo_cartesianCross(n1, n2), A = d3_geo_cartesianScale(n1, c1), B = d3_geo_cartesianScale(n2, c2);
	      d3_geo_cartesianAdd(A, B);
	      var u = n1xn2, w = d3_geo_cartesianDot(A, u), uu = d3_geo_cartesianDot(u, u), t2 = w * w - uu * (d3_geo_cartesianDot(A, A) - 1);
	      if (t2 < 0) return;
	      var t = Math.sqrt(t2), q = d3_geo_cartesianScale(u, (-w - t) / uu);
	      d3_geo_cartesianAdd(q, A);
	      q = d3_geo_spherical(q);
	      if (!two) return q;
	      var λ0 = a[0], λ1 = b[0], φ0 = a[1], φ1 = b[1], z;
	      if (λ1 < λ0) z = λ0, λ0 = λ1, λ1 = z;
	      var δλ = λ1 - λ0, polar = abs(δλ - π) < ε, meridian = polar || δλ < ε;
	      if (!polar && φ1 < φ0) z = φ0, φ0 = φ1, φ1 = z;
	      if (meridian ? polar ? φ0 + φ1 > 0 ^ q[1] < (abs(q[0] - λ0) < ε ? φ0 : φ1) : φ0 <= q[1] && q[1] <= φ1 : δλ > π ^ (λ0 <= q[0] && q[0] <= λ1)) {
	        var q1 = d3_geo_cartesianScale(u, (-w + t) / uu);
	        d3_geo_cartesianAdd(q1, A);
	        return [ q, d3_geo_spherical(q1) ];
	      }
	    }
	    function code(λ, φ) {
	      var r = smallRadius ? radius : π - radius, code = 0;
	      if (λ < -r) code |= 1; else if (λ > r) code |= 2;
	      if (φ < -r) code |= 4; else if (φ > r) code |= 8;
	      return code;
	    }
	  }
	  function d3_geom_clipLine(x0, y0, x1, y1) {
	    return function(line) {
	      var a = line.a, b = line.b, ax = a.x, ay = a.y, bx = b.x, by = b.y, t0 = 0, t1 = 1, dx = bx - ax, dy = by - ay, r;
	      r = x0 - ax;
	      if (!dx && r > 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dx > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = x1 - ax;
	      if (!dx && r < 0) return;
	      r /= dx;
	      if (dx < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dx > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      r = y0 - ay;
	      if (!dy && r > 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      } else if (dy > 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      }
	      r = y1 - ay;
	      if (!dy && r < 0) return;
	      r /= dy;
	      if (dy < 0) {
	        if (r > t1) return;
	        if (r > t0) t0 = r;
	      } else if (dy > 0) {
	        if (r < t0) return;
	        if (r < t1) t1 = r;
	      }
	      if (t0 > 0) line.a = {
	        x: ax + t0 * dx,
	        y: ay + t0 * dy
	      };
	      if (t1 < 1) line.b = {
	        x: ax + t1 * dx,
	        y: ay + t1 * dy
	      };
	      return line;
	    };
	  }
	  var d3_geo_clipExtentMAX = 1e9;
	  d3.geo.clipExtent = function() {
	    var x0, y0, x1, y1, stream, clip, clipExtent = {
	      stream: function(output) {
	        if (stream) stream.valid = false;
	        stream = clip(output);
	        stream.valid = true;
	        return stream;
	      },
	      extent: function(_) {
	        if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	        clip = d3_geo_clipExtent(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]);
	        if (stream) stream.valid = false, stream = null;
	        return clipExtent;
	      }
	    };
	    return clipExtent.extent([ [ 0, 0 ], [ 960, 500 ] ]);
	  };
	  function d3_geo_clipExtent(x0, y0, x1, y1) {
	    return function(listener) {
	      var listener_ = listener, bufferListener = d3_geo_clipBufferListener(), clipLine = d3_geom_clipLine(x0, y0, x1, y1), segments, polygon, ring;
	      var clip = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          listener = bufferListener;
	          segments = [];
	          polygon = [];
	          clean = true;
	        },
	        polygonEnd: function() {
	          listener = listener_;
	          segments = d3.merge(segments);
	          var clipStartInside = insidePolygon([ x0, y1 ]), inside = clean && clipStartInside, visible = segments.length;
	          if (inside || visible) {
	            listener.polygonStart();
	            if (inside) {
	              listener.lineStart();
	              interpolate(null, null, 1, listener);
	              listener.lineEnd();
	            }
	            if (visible) {
	              d3_geo_clipPolygon(segments, compare, clipStartInside, interpolate, listener);
	            }
	            listener.polygonEnd();
	          }
	          segments = polygon = ring = null;
	        }
	      };
	      function insidePolygon(p) {
	        var wn = 0, n = polygon.length, y = p[1];
	        for (var i = 0; i < n; ++i) {
	          for (var j = 1, v = polygon[i], m = v.length, a = v[0], b; j < m; ++j) {
	            b = v[j];
	            if (a[1] <= y) {
	              if (b[1] > y && d3_cross2d(a, b, p) > 0) ++wn;
	            } else {
	              if (b[1] <= y && d3_cross2d(a, b, p) < 0) --wn;
	            }
	            a = b;
	          }
	        }
	        return wn !== 0;
	      }
	      function interpolate(from, to, direction, listener) {
	        var a = 0, a1 = 0;
	        if (from == null || (a = corner(from, direction)) !== (a1 = corner(to, direction)) || comparePoints(from, to) < 0 ^ direction > 0) {
	          do {
	            listener.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
	          } while ((a = (a + direction + 4) % 4) !== a1);
	        } else {
	          listener.point(to[0], to[1]);
	        }
	      }
	      function pointVisible(x, y) {
	        return x0 <= x && x <= x1 && y0 <= y && y <= y1;
	      }
	      function point(x, y) {
	        if (pointVisible(x, y)) listener.point(x, y);
	      }
	      var x__, y__, v__, x_, y_, v_, first, clean;
	      function lineStart() {
	        clip.point = linePoint;
	        if (polygon) polygon.push(ring = []);
	        first = true;
	        v_ = false;
	        x_ = y_ = NaN;
	      }
	      function lineEnd() {
	        if (segments) {
	          linePoint(x__, y__);
	          if (v__ && v_) bufferListener.rejoin();
	          segments.push(bufferListener.buffer());
	        }
	        clip.point = point;
	        if (v_) listener.lineEnd();
	      }
	      function linePoint(x, y) {
	        x = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, x));
	        y = Math.max(-d3_geo_clipExtentMAX, Math.min(d3_geo_clipExtentMAX, y));
	        var v = pointVisible(x, y);
	        if (polygon) ring.push([ x, y ]);
	        if (first) {
	          x__ = x, y__ = y, v__ = v;
	          first = false;
	          if (v) {
	            listener.lineStart();
	            listener.point(x, y);
	          }
	        } else {
	          if (v && v_) listener.point(x, y); else {
	            var l = {
	              a: {
	                x: x_,
	                y: y_
	              },
	              b: {
	                x: x,
	                y: y
	              }
	            };
	            if (clipLine(l)) {
	              if (!v_) {
	                listener.lineStart();
	                listener.point(l.a.x, l.a.y);
	              }
	              listener.point(l.b.x, l.b.y);
	              if (!v) listener.lineEnd();
	              clean = false;
	            } else if (v) {
	              listener.lineStart();
	              listener.point(x, y);
	              clean = false;
	            }
	          }
	        }
	        x_ = x, y_ = y, v_ = v;
	      }
	      return clip;
	    };
	    function corner(p, direction) {
	      return abs(p[0] - x0) < ε ? direction > 0 ? 0 : 3 : abs(p[0] - x1) < ε ? direction > 0 ? 2 : 1 : abs(p[1] - y0) < ε ? direction > 0 ? 1 : 0 : direction > 0 ? 3 : 2;
	    }
	    function compare(a, b) {
	      return comparePoints(a.x, b.x);
	    }
	    function comparePoints(a, b) {
	      var ca = corner(a, 1), cb = corner(b, 1);
	      return ca !== cb ? ca - cb : ca === 0 ? b[1] - a[1] : ca === 1 ? a[0] - b[0] : ca === 2 ? a[1] - b[1] : b[0] - a[0];
	    }
	  }
	  function d3_geo_compose(a, b) {
	    function compose(x, y) {
	      return x = a(x, y), b(x[0], x[1]);
	    }
	    if (a.invert && b.invert) compose.invert = function(x, y) {
	      return x = b.invert(x, y), x && a.invert(x[0], x[1]);
	    };
	    return compose;
	  }
	  function d3_geo_conic(projectAt) {
	    var φ0 = 0, φ1 = π / 3, m = d3_geo_projectionMutator(projectAt), p = m(φ0, φ1);
	    p.parallels = function(_) {
	      if (!arguments.length) return [ φ0 / π * 180, φ1 / π * 180 ];
	      return m(φ0 = _[0] * π / 180, φ1 = _[1] * π / 180);
	    };
	    return p;
	  }
	  function d3_geo_conicEqualArea(φ0, φ1) {
	    var sinφ0 = Math.sin(φ0), n = (sinφ0 + Math.sin(φ1)) / 2, C = 1 + sinφ0 * (2 * n - sinφ0), ρ0 = Math.sqrt(C) / n;
	    function forward(λ, φ) {
	      var ρ = Math.sqrt(C - 2 * n * Math.sin(φ)) / n;
	      return [ ρ * Math.sin(λ *= n), ρ0 - ρ * Math.cos(λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = ρ0 - y;
	      return [ Math.atan2(x, ρ0_y) / n, d3_asin((C - (x * x + ρ0_y * ρ0_y) * n * n) / (2 * n)) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEqualArea = function() {
	    return d3_geo_conic(d3_geo_conicEqualArea);
	  }).raw = d3_geo_conicEqualArea;
	  d3.geo.albers = function() {
	    return d3.geo.conicEqualArea().rotate([ 96, 0 ]).center([ -.6, 38.7 ]).parallels([ 29.5, 45.5 ]).scale(1070);
	  };
	  d3.geo.albersUsa = function() {
	    var lower48 = d3.geo.albers();
	    var alaska = d3.geo.conicEqualArea().rotate([ 154, 0 ]).center([ -2, 58.5 ]).parallels([ 55, 65 ]);
	    var hawaii = d3.geo.conicEqualArea().rotate([ 157, 0 ]).center([ -3, 19.9 ]).parallels([ 8, 18 ]);
	    var point, pointStream = {
	      point: function(x, y) {
	        point = [ x, y ];
	      }
	    }, lower48Point, alaskaPoint, hawaiiPoint;
	    function albersUsa(coordinates) {
	      var x = coordinates[0], y = coordinates[1];
	      point = null;
	      (lower48Point(x, y), point) || (alaskaPoint(x, y), point) || hawaiiPoint(x, y);
	      return point;
	    }
	    albersUsa.invert = function(coordinates) {
	      var k = lower48.scale(), t = lower48.translate(), x = (coordinates[0] - t[0]) / k, y = (coordinates[1] - t[1]) / k;
	      return (y >= .12 && y < .234 && x >= -.425 && x < -.214 ? alaska : y >= .166 && y < .234 && x >= -.214 && x < -.115 ? hawaii : lower48).invert(coordinates);
	    };
	    albersUsa.stream = function(stream) {
	      var lower48Stream = lower48.stream(stream), alaskaStream = alaska.stream(stream), hawaiiStream = hawaii.stream(stream);
	      return {
	        point: function(x, y) {
	          lower48Stream.point(x, y);
	          alaskaStream.point(x, y);
	          hawaiiStream.point(x, y);
	        },
	        sphere: function() {
	          lower48Stream.sphere();
	          alaskaStream.sphere();
	          hawaiiStream.sphere();
	        },
	        lineStart: function() {
	          lower48Stream.lineStart();
	          alaskaStream.lineStart();
	          hawaiiStream.lineStart();
	        },
	        lineEnd: function() {
	          lower48Stream.lineEnd();
	          alaskaStream.lineEnd();
	          hawaiiStream.lineEnd();
	        },
	        polygonStart: function() {
	          lower48Stream.polygonStart();
	          alaskaStream.polygonStart();
	          hawaiiStream.polygonStart();
	        },
	        polygonEnd: function() {
	          lower48Stream.polygonEnd();
	          alaskaStream.polygonEnd();
	          hawaiiStream.polygonEnd();
	        }
	      };
	    };
	    albersUsa.precision = function(_) {
	      if (!arguments.length) return lower48.precision();
	      lower48.precision(_);
	      alaska.precision(_);
	      hawaii.precision(_);
	      return albersUsa;
	    };
	    albersUsa.scale = function(_) {
	      if (!arguments.length) return lower48.scale();
	      lower48.scale(_);
	      alaska.scale(_ * .35);
	      hawaii.scale(_);
	      return albersUsa.translate(lower48.translate());
	    };
	    albersUsa.translate = function(_) {
	      if (!arguments.length) return lower48.translate();
	      var k = lower48.scale(), x = +_[0], y = +_[1];
	      lower48Point = lower48.translate(_).clipExtent([ [ x - .455 * k, y - .238 * k ], [ x + .455 * k, y + .238 * k ] ]).stream(pointStream).point;
	      alaskaPoint = alaska.translate([ x - .307 * k, y + .201 * k ]).clipExtent([ [ x - .425 * k + ε, y + .12 * k + ε ], [ x - .214 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      hawaiiPoint = hawaii.translate([ x - .205 * k, y + .212 * k ]).clipExtent([ [ x - .214 * k + ε, y + .166 * k + ε ], [ x - .115 * k - ε, y + .234 * k - ε ] ]).stream(pointStream).point;
	      return albersUsa;
	    };
	    return albersUsa.scale(1070);
	  };
	  var d3_geo_pathAreaSum, d3_geo_pathAreaPolygon, d3_geo_pathArea = {
	    point: d3_noop,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: function() {
	      d3_geo_pathAreaPolygon = 0;
	      d3_geo_pathArea.lineStart = d3_geo_pathAreaRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathArea.lineStart = d3_geo_pathArea.lineEnd = d3_geo_pathArea.point = d3_noop;
	      d3_geo_pathAreaSum += abs(d3_geo_pathAreaPolygon / 2);
	    }
	  };
	  function d3_geo_pathAreaRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathArea.point = function(x, y) {
	      d3_geo_pathArea.point = nextPoint;
	      x00 = x0 = x, y00 = y0 = y;
	    };
	    function nextPoint(x, y) {
	      d3_geo_pathAreaPolygon += y0 * x - x0 * y;
	      x0 = x, y0 = y;
	    }
	    d3_geo_pathArea.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  var d3_geo_pathBoundsX0, d3_geo_pathBoundsY0, d3_geo_pathBoundsX1, d3_geo_pathBoundsY1;
	  var d3_geo_pathBounds = {
	    point: d3_geo_pathBoundsPoint,
	    lineStart: d3_noop,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_pathBoundsPoint(x, y) {
	    if (x < d3_geo_pathBoundsX0) d3_geo_pathBoundsX0 = x;
	    if (x > d3_geo_pathBoundsX1) d3_geo_pathBoundsX1 = x;
	    if (y < d3_geo_pathBoundsY0) d3_geo_pathBoundsY0 = y;
	    if (y > d3_geo_pathBoundsY1) d3_geo_pathBoundsY1 = y;
	  }
	  function d3_geo_pathBuffer() {
	    var pointCircle = d3_geo_pathBufferCircle(4.5), buffer = [];
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointCircle = d3_geo_pathBufferCircle(_);
	        return stream;
	      },
	      result: function() {
	        if (buffer.length) {
	          var result = buffer.join("");
	          buffer = [];
	          return result;
	        }
	      }
	    };
	    function point(x, y) {
	      buffer.push("M", x, ",", y, pointCircle);
	    }
	    function pointLineStart(x, y) {
	      buffer.push("M", x, ",", y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      buffer.push("L", x, ",", y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      buffer.push("Z");
	    }
	    return stream;
	  }
	  function d3_geo_pathBufferCircle(radius) {
	    return "m0," + radius + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius + "z";
	  }
	  var d3_geo_pathCentroid = {
	    point: d3_geo_pathCentroidPoint,
	    lineStart: d3_geo_pathCentroidLineStart,
	    lineEnd: d3_geo_pathCentroidLineEnd,
	    polygonStart: function() {
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidRingStart;
	    },
	    polygonEnd: function() {
	      d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	      d3_geo_pathCentroid.lineStart = d3_geo_pathCentroidLineStart;
	      d3_geo_pathCentroid.lineEnd = d3_geo_pathCentroidLineEnd;
	    }
	  };
	  function d3_geo_pathCentroidPoint(x, y) {
	    d3_geo_centroidX0 += x;
	    d3_geo_centroidY0 += y;
	    ++d3_geo_centroidZ0;
	  }
	  function d3_geo_pathCentroidLineStart() {
	    var x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	  }
	  function d3_geo_pathCentroidLineEnd() {
	    d3_geo_pathCentroid.point = d3_geo_pathCentroidPoint;
	  }
	  function d3_geo_pathCentroidRingStart() {
	    var x00, y00, x0, y0;
	    d3_geo_pathCentroid.point = function(x, y) {
	      d3_geo_pathCentroid.point = nextPoint;
	      d3_geo_pathCentroidPoint(x00 = x0 = x, y00 = y0 = y);
	    };
	    function nextPoint(x, y) {
	      var dx = x - x0, dy = y - y0, z = Math.sqrt(dx * dx + dy * dy);
	      d3_geo_centroidX1 += z * (x0 + x) / 2;
	      d3_geo_centroidY1 += z * (y0 + y) / 2;
	      d3_geo_centroidZ1 += z;
	      z = y0 * x - x0 * y;
	      d3_geo_centroidX2 += z * (x0 + x);
	      d3_geo_centroidY2 += z * (y0 + y);
	      d3_geo_centroidZ2 += z * 3;
	      d3_geo_pathCentroidPoint(x0 = x, y0 = y);
	    }
	    d3_geo_pathCentroid.lineEnd = function() {
	      nextPoint(x00, y00);
	    };
	  }
	  function d3_geo_pathContext(context) {
	    var pointRadius = 4.5;
	    var stream = {
	      point: point,
	      lineStart: function() {
	        stream.point = pointLineStart;
	      },
	      lineEnd: lineEnd,
	      polygonStart: function() {
	        stream.lineEnd = lineEndPolygon;
	      },
	      polygonEnd: function() {
	        stream.lineEnd = lineEnd;
	        stream.point = point;
	      },
	      pointRadius: function(_) {
	        pointRadius = _;
	        return stream;
	      },
	      result: d3_noop
	    };
	    function point(x, y) {
	      context.moveTo(x, y);
	      context.arc(x, y, pointRadius, 0, τ);
	    }
	    function pointLineStart(x, y) {
	      context.moveTo(x, y);
	      stream.point = pointLine;
	    }
	    function pointLine(x, y) {
	      context.lineTo(x, y);
	    }
	    function lineEnd() {
	      stream.point = point;
	    }
	    function lineEndPolygon() {
	      context.closePath();
	    }
	    return stream;
	  }
	  function d3_geo_resample(project) {
	    var δ2 = .5, cosMinDistance = Math.cos(30 * d3_radians), maxDepth = 16;
	    function resample(stream) {
	      return (maxDepth ? resampleRecursive : resampleNone)(stream);
	    }
	    function resampleNone(stream) {
	      return d3_geo_transformPoint(stream, function(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      });
	    }
	    function resampleRecursive(stream) {
	      var λ00, φ00, x00, y00, a00, b00, c00, λ0, x0, y0, a0, b0, c0;
	      var resample = {
	        point: point,
	        lineStart: lineStart,
	        lineEnd: lineEnd,
	        polygonStart: function() {
	          stream.polygonStart();
	          resample.lineStart = ringStart;
	        },
	        polygonEnd: function() {
	          stream.polygonEnd();
	          resample.lineStart = lineStart;
	        }
	      };
	      function point(x, y) {
	        x = project(x, y);
	        stream.point(x[0], x[1]);
	      }
	      function lineStart() {
	        x0 = NaN;
	        resample.point = linePoint;
	        stream.lineStart();
	      }
	      function linePoint(λ, φ) {
	        var c = d3_geo_cartesian([ λ, φ ]), p = project(λ, φ);
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x0 = p[0], y0 = p[1], λ0 = λ, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
	        stream.point(x0, y0);
	      }
	      function lineEnd() {
	        resample.point = point;
	        stream.lineEnd();
	      }
	      function ringStart() {
	        lineStart();
	        resample.point = ringPoint;
	        resample.lineEnd = ringEnd;
	      }
	      function ringPoint(λ, φ) {
	        linePoint(λ00 = λ, φ00 = φ), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
	        resample.point = linePoint;
	      }
	      function ringEnd() {
	        resampleLineTo(x0, y0, λ0, a0, b0, c0, x00, y00, λ00, a00, b00, c00, maxDepth, stream);
	        resample.lineEnd = lineEnd;
	        lineEnd();
	      }
	      return resample;
	    }
	    function resampleLineTo(x0, y0, λ0, a0, b0, c0, x1, y1, λ1, a1, b1, c1, depth, stream) {
	      var dx = x1 - x0, dy = y1 - y0, d2 = dx * dx + dy * dy;
	      if (d2 > 4 * δ2 && depth--) {
	        var a = a0 + a1, b = b0 + b1, c = c0 + c1, m = Math.sqrt(a * a + b * b + c * c), φ2 = Math.asin(c /= m), λ2 = abs(abs(c) - 1) < ε || abs(λ0 - λ1) < ε ? (λ0 + λ1) / 2 : Math.atan2(b, a), p = project(λ2, φ2), x2 = p[0], y2 = p[1], dx2 = x2 - x0, dy2 = y2 - y0, dz = dy * dx2 - dx * dy2;
	        if (dz * dz / d2 > δ2 || abs((dx * dx2 + dy * dy2) / d2 - .5) > .3 || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) {
	          resampleLineTo(x0, y0, λ0, a0, b0, c0, x2, y2, λ2, a /= m, b /= m, c, depth, stream);
	          stream.point(x2, y2);
	          resampleLineTo(x2, y2, λ2, a, b, c, x1, y1, λ1, a1, b1, c1, depth, stream);
	        }
	      }
	    }
	    resample.precision = function(_) {
	      if (!arguments.length) return Math.sqrt(δ2);
	      maxDepth = (δ2 = _ * _) > 0 && 16;
	      return resample;
	    };
	    return resample;
	  }
	  d3.geo.path = function() {
	    var pointRadius = 4.5, projection, context, projectStream, contextStream, cacheStream;
	    function path(object) {
	      if (object) {
	        if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
	        if (!cacheStream || !cacheStream.valid) cacheStream = projectStream(contextStream);
	        d3.geo.stream(object, cacheStream);
	      }
	      return contextStream.result();
	    }
	    path.area = function(object) {
	      d3_geo_pathAreaSum = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathArea));
	      return d3_geo_pathAreaSum;
	    };
	    path.centroid = function(object) {
	      d3_geo_centroidX0 = d3_geo_centroidY0 = d3_geo_centroidZ0 = d3_geo_centroidX1 = d3_geo_centroidY1 = d3_geo_centroidZ1 = d3_geo_centroidX2 = d3_geo_centroidY2 = d3_geo_centroidZ2 = 0;
	      d3.geo.stream(object, projectStream(d3_geo_pathCentroid));
	      return d3_geo_centroidZ2 ? [ d3_geo_centroidX2 / d3_geo_centroidZ2, d3_geo_centroidY2 / d3_geo_centroidZ2 ] : d3_geo_centroidZ1 ? [ d3_geo_centroidX1 / d3_geo_centroidZ1, d3_geo_centroidY1 / d3_geo_centroidZ1 ] : d3_geo_centroidZ0 ? [ d3_geo_centroidX0 / d3_geo_centroidZ0, d3_geo_centroidY0 / d3_geo_centroidZ0 ] : [ NaN, NaN ];
	    };
	    path.bounds = function(object) {
	      d3_geo_pathBoundsX1 = d3_geo_pathBoundsY1 = -(d3_geo_pathBoundsX0 = d3_geo_pathBoundsY0 = Infinity);
	      d3.geo.stream(object, projectStream(d3_geo_pathBounds));
	      return [ [ d3_geo_pathBoundsX0, d3_geo_pathBoundsY0 ], [ d3_geo_pathBoundsX1, d3_geo_pathBoundsY1 ] ];
	    };
	    path.projection = function(_) {
	      if (!arguments.length) return projection;
	      projectStream = (projection = _) ? _.stream || d3_geo_pathProjectStream(_) : d3_identity;
	      return reset();
	    };
	    path.context = function(_) {
	      if (!arguments.length) return context;
	      contextStream = (context = _) == null ? new d3_geo_pathBuffer() : new d3_geo_pathContext(_);
	      if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
	      return reset();
	    };
	    path.pointRadius = function(_) {
	      if (!arguments.length) return pointRadius;
	      pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
	      return path;
	    };
	    function reset() {
	      cacheStream = null;
	      return path;
	    }
	    return path.projection(d3.geo.albersUsa()).context(null);
	  };
	  function d3_geo_pathProjectStream(project) {
	    var resample = d3_geo_resample(function(x, y) {
	      return project([ x * d3_degrees, y * d3_degrees ]);
	    });
	    return function(stream) {
	      return d3_geo_projectionRadians(resample(stream));
	    };
	  }
	  d3.geo.transform = function(methods) {
	    return {
	      stream: function(stream) {
	        var transform = new d3_geo_transform(stream);
	        for (var k in methods) transform[k] = methods[k];
	        return transform;
	      }
	    };
	  };
	  function d3_geo_transform(stream) {
	    this.stream = stream;
	  }
	  d3_geo_transform.prototype = {
	    point: function(x, y) {
	      this.stream.point(x, y);
	    },
	    sphere: function() {
	      this.stream.sphere();
	    },
	    lineStart: function() {
	      this.stream.lineStart();
	    },
	    lineEnd: function() {
	      this.stream.lineEnd();
	    },
	    polygonStart: function() {
	      this.stream.polygonStart();
	    },
	    polygonEnd: function() {
	      this.stream.polygonEnd();
	    }
	  };
	  function d3_geo_transformPoint(stream, point) {
	    return {
	      point: point,
	      sphere: function() {
	        stream.sphere();
	      },
	      lineStart: function() {
	        stream.lineStart();
	      },
	      lineEnd: function() {
	        stream.lineEnd();
	      },
	      polygonStart: function() {
	        stream.polygonStart();
	      },
	      polygonEnd: function() {
	        stream.polygonEnd();
	      }
	    };
	  }
	  d3.geo.projection = d3_geo_projection;
	  d3.geo.projectionMutator = d3_geo_projectionMutator;
	  function d3_geo_projection(project) {
	    return d3_geo_projectionMutator(function() {
	      return project;
	    })();
	  }
	  function d3_geo_projectionMutator(projectAt) {
	    var project, rotate, projectRotate, projectResample = d3_geo_resample(function(x, y) {
	      x = project(x, y);
	      return [ x[0] * k + δx, δy - x[1] * k ];
	    }), k = 150, x = 480, y = 250, λ = 0, φ = 0, δλ = 0, δφ = 0, δγ = 0, δx, δy, preclip = d3_geo_clipAntimeridian, postclip = d3_identity, clipAngle = null, clipExtent = null, stream;
	    function projection(point) {
	      point = projectRotate(point[0] * d3_radians, point[1] * d3_radians);
	      return [ point[0] * k + δx, δy - point[1] * k ];
	    }
	    function invert(point) {
	      point = projectRotate.invert((point[0] - δx) / k, (δy - point[1]) / k);
	      return point && [ point[0] * d3_degrees, point[1] * d3_degrees ];
	    }
	    projection.stream = function(output) {
	      if (stream) stream.valid = false;
	      stream = d3_geo_projectionRadians(preclip(rotate, projectResample(postclip(output))));
	      stream.valid = true;
	      return stream;
	    };
	    projection.clipAngle = function(_) {
	      if (!arguments.length) return clipAngle;
	      preclip = _ == null ? (clipAngle = _, d3_geo_clipAntimeridian) : d3_geo_clipCircle((clipAngle = +_) * d3_radians);
	      return invalidate();
	    };
	    projection.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent;
	      clipExtent = _;
	      postclip = _ ? d3_geo_clipExtent(_[0][0], _[0][1], _[1][0], _[1][1]) : d3_identity;
	      return invalidate();
	    };
	    projection.scale = function(_) {
	      if (!arguments.length) return k;
	      k = +_;
	      return reset();
	    };
	    projection.translate = function(_) {
	      if (!arguments.length) return [ x, y ];
	      x = +_[0];
	      y = +_[1];
	      return reset();
	    };
	    projection.center = function(_) {
	      if (!arguments.length) return [ λ * d3_degrees, φ * d3_degrees ];
	      λ = _[0] % 360 * d3_radians;
	      φ = _[1] % 360 * d3_radians;
	      return reset();
	    };
	    projection.rotate = function(_) {
	      if (!arguments.length) return [ δλ * d3_degrees, δφ * d3_degrees, δγ * d3_degrees ];
	      δλ = _[0] % 360 * d3_radians;
	      δφ = _[1] % 360 * d3_radians;
	      δγ = _.length > 2 ? _[2] % 360 * d3_radians : 0;
	      return reset();
	    };
	    d3.rebind(projection, projectResample, "precision");
	    function reset() {
	      projectRotate = d3_geo_compose(rotate = d3_geo_rotation(δλ, δφ, δγ), project);
	      var center = project(λ, φ);
	      δx = x - center[0] * k;
	      δy = y + center[1] * k;
	      return invalidate();
	    }
	    function invalidate() {
	      if (stream) stream.valid = false, stream = null;
	      return projection;
	    }
	    return function() {
	      project = projectAt.apply(this, arguments);
	      projection.invert = project.invert && invert;
	      return reset();
	    };
	  }
	  function d3_geo_projectionRadians(stream) {
	    return d3_geo_transformPoint(stream, function(x, y) {
	      stream.point(x * d3_radians, y * d3_radians);
	    });
	  }
	  function d3_geo_equirectangular(λ, φ) {
	    return [ λ, φ ];
	  }
	  (d3.geo.equirectangular = function() {
	    return d3_geo_projection(d3_geo_equirectangular);
	  }).raw = d3_geo_equirectangular.invert = d3_geo_equirectangular;
	  d3.geo.rotation = function(rotate) {
	    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);
	    function forward(coordinates) {
	      coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    }
	    forward.invert = function(coordinates) {
	      coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);
	      return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;
	    };
	    return forward;
	  };
	  function d3_geo_identityRotation(λ, φ) {
	    return [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	  }
	  d3_geo_identityRotation.invert = d3_geo_equirectangular;
	  function d3_geo_rotation(δλ, δφ, δγ) {
	    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;
	  }
	  function d3_geo_forwardRotationλ(δλ) {
	    return function(λ, φ) {
	      return λ += δλ, [ λ > π ? λ - τ : λ < -π ? λ + τ : λ, φ ];
	    };
	  }
	  function d3_geo_rotationλ(δλ) {
	    var rotation = d3_geo_forwardRotationλ(δλ);
	    rotation.invert = d3_geo_forwardRotationλ(-δλ);
	    return rotation;
	  }
	  function d3_geo_rotationφγ(δφ, δγ) {
	    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);
	    function rotation(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;
	      return [ Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ), d3_asin(k * cosδγ + y * sinδγ) ];
	    }
	    rotation.invert = function(λ, φ) {
	      var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;
	      return [ Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ), d3_asin(k * cosδφ - x * sinδφ) ];
	    };
	    return rotation;
	  }
	  d3.geo.circle = function() {
	    var origin = [ 0, 0 ], angle, precision = 6, interpolate;
	    function circle() {
	      var center = typeof origin === "function" ? origin.apply(this, arguments) : origin, rotate = d3_geo_rotation(-center[0] * d3_radians, -center[1] * d3_radians, 0).invert, ring = [];
	      interpolate(null, null, 1, {
	        point: function(x, y) {
	          ring.push(x = rotate(x, y));
	          x[0] *= d3_degrees, x[1] *= d3_degrees;
	        }
	      });
	      return {
	        type: "Polygon",
	        coordinates: [ ring ]
	      };
	    }
	    circle.origin = function(x) {
	      if (!arguments.length) return origin;
	      origin = x;
	      return circle;
	    };
	    circle.angle = function(x) {
	      if (!arguments.length) return angle;
	      interpolate = d3_geo_circleInterpolate((angle = +x) * d3_radians, precision * d3_radians);
	      return circle;
	    };
	    circle.precision = function(_) {
	      if (!arguments.length) return precision;
	      interpolate = d3_geo_circleInterpolate(angle * d3_radians, (precision = +_) * d3_radians);
	      return circle;
	    };
	    return circle.angle(90);
	  };
	  function d3_geo_circleInterpolate(radius, precision) {
	    var cr = Math.cos(radius), sr = Math.sin(radius);
	    return function(from, to, direction, listener) {
	      var step = direction * precision;
	      if (from != null) {
	        from = d3_geo_circleAngle(cr, from);
	        to = d3_geo_circleAngle(cr, to);
	        if (direction > 0 ? from < to : from > to) from += direction * τ;
	      } else {
	        from = radius + direction * τ;
	        to = radius - .5 * step;
	      }
	      for (var point, t = from; direction > 0 ? t > to : t < to; t -= step) {
	        listener.point((point = d3_geo_spherical([ cr, -sr * Math.cos(t), -sr * Math.sin(t) ]))[0], point[1]);
	      }
	    };
	  }
	  function d3_geo_circleAngle(cr, point) {
	    var a = d3_geo_cartesian(point);
	    a[0] -= cr;
	    d3_geo_cartesianNormalize(a);
	    var angle = d3_acos(-a[1]);
	    return ((-a[2] < 0 ? -angle : angle) + 2 * Math.PI - ε) % (2 * Math.PI);
	  }
	  d3.geo.distance = function(a, b) {
	    var Δλ = (b[0] - a[0]) * d3_radians, φ0 = a[1] * d3_radians, φ1 = b[1] * d3_radians, sinΔλ = Math.sin(Δλ), cosΔλ = Math.cos(Δλ), sinφ0 = Math.sin(φ0), cosφ0 = Math.cos(φ0), sinφ1 = Math.sin(φ1), cosφ1 = Math.cos(φ1), t;
	    return Math.atan2(Math.sqrt((t = cosφ1 * sinΔλ) * t + (t = cosφ0 * sinφ1 - sinφ0 * cosφ1 * cosΔλ) * t), sinφ0 * sinφ1 + cosφ0 * cosφ1 * cosΔλ);
	  };
	  d3.geo.graticule = function() {
	    var x1, x0, X1, X0, y1, y0, Y1, Y0, dx = 10, dy = dx, DX = 90, DY = 360, x, y, X, Y, precision = 2.5;
	    function graticule() {
	      return {
	        type: "MultiLineString",
	        coordinates: lines()
	      };
	    }
	    function lines() {
	      return d3.range(Math.ceil(X0 / DX) * DX, X1, DX).map(X).concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y)).concat(d3.range(Math.ceil(x0 / dx) * dx, x1, dx).filter(function(x) {
	        return abs(x % DX) > ε;
	      }).map(x)).concat(d3.range(Math.ceil(y0 / dy) * dy, y1, dy).filter(function(y) {
	        return abs(y % DY) > ε;
	      }).map(y));
	    }
	    graticule.lines = function() {
	      return lines().map(function(coordinates) {
	        return {
	          type: "LineString",
	          coordinates: coordinates
	        };
	      });
	    };
	    graticule.outline = function() {
	      return {
	        type: "Polygon",
	        coordinates: [ X(X0).concat(Y(Y1).slice(1), X(X1).reverse().slice(1), Y(Y0).reverse().slice(1)) ]
	      };
	    };
	    graticule.extent = function(_) {
	      if (!arguments.length) return graticule.minorExtent();
	      return graticule.majorExtent(_).minorExtent(_);
	    };
	    graticule.majorExtent = function(_) {
	      if (!arguments.length) return [ [ X0, Y0 ], [ X1, Y1 ] ];
	      X0 = +_[0][0], X1 = +_[1][0];
	      Y0 = +_[0][1], Y1 = +_[1][1];
	      if (X0 > X1) _ = X0, X0 = X1, X1 = _;
	      if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.minorExtent = function(_) {
	      if (!arguments.length) return [ [ x0, y0 ], [ x1, y1 ] ];
	      x0 = +_[0][0], x1 = +_[1][0];
	      y0 = +_[0][1], y1 = +_[1][1];
	      if (x0 > x1) _ = x0, x0 = x1, x1 = _;
	      if (y0 > y1) _ = y0, y0 = y1, y1 = _;
	      return graticule.precision(precision);
	    };
	    graticule.step = function(_) {
	      if (!arguments.length) return graticule.minorStep();
	      return graticule.majorStep(_).minorStep(_);
	    };
	    graticule.majorStep = function(_) {
	      if (!arguments.length) return [ DX, DY ];
	      DX = +_[0], DY = +_[1];
	      return graticule;
	    };
	    graticule.minorStep = function(_) {
	      if (!arguments.length) return [ dx, dy ];
	      dx = +_[0], dy = +_[1];
	      return graticule;
	    };
	    graticule.precision = function(_) {
	      if (!arguments.length) return precision;
	      precision = +_;
	      x = d3_geo_graticuleX(y0, y1, 90);
	      y = d3_geo_graticuleY(x0, x1, precision);
	      X = d3_geo_graticuleX(Y0, Y1, 90);
	      Y = d3_geo_graticuleY(X0, X1, precision);
	      return graticule;
	    };
	    return graticule.majorExtent([ [ -180, -90 + ε ], [ 180, 90 - ε ] ]).minorExtent([ [ -180, -80 - ε ], [ 180, 80 + ε ] ]);
	  };
	  function d3_geo_graticuleX(y0, y1, dy) {
	    var y = d3.range(y0, y1 - ε, dy).concat(y1);
	    return function(x) {
	      return y.map(function(y) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_geo_graticuleY(x0, x1, dx) {
	    var x = d3.range(x0, x1 - ε, dx).concat(x1);
	    return function(y) {
	      return x.map(function(x) {
	        return [ x, y ];
	      });
	    };
	  }
	  function d3_source(d) {
	    return d.source;
	  }
	  function d3_target(d) {
	    return d.target;
	  }
	  d3.geo.greatArc = function() {
	    var source = d3_source, source_, target = d3_target, target_;
	    function greatArc() {
	      return {
	        type: "LineString",
	        coordinates: [ source_ || source.apply(this, arguments), target_ || target.apply(this, arguments) ]
	      };
	    }
	    greatArc.distance = function() {
	      return d3.geo.distance(source_ || source.apply(this, arguments), target_ || target.apply(this, arguments));
	    };
	    greatArc.source = function(_) {
	      if (!arguments.length) return source;
	      source = _, source_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.target = function(_) {
	      if (!arguments.length) return target;
	      target = _, target_ = typeof _ === "function" ? null : _;
	      return greatArc;
	    };
	    greatArc.precision = function() {
	      return arguments.length ? greatArc : 0;
	    };
	    return greatArc;
	  };
	  d3.geo.interpolate = function(source, target) {
	    return d3_geo_interpolate(source[0] * d3_radians, source[1] * d3_radians, target[0] * d3_radians, target[1] * d3_radians);
	  };
	  function d3_geo_interpolate(x0, y0, x1, y1) {
	    var cy0 = Math.cos(y0), sy0 = Math.sin(y0), cy1 = Math.cos(y1), sy1 = Math.sin(y1), kx0 = cy0 * Math.cos(x0), ky0 = cy0 * Math.sin(x0), kx1 = cy1 * Math.cos(x1), ky1 = cy1 * Math.sin(x1), d = 2 * Math.asin(Math.sqrt(d3_haversin(y1 - y0) + cy0 * cy1 * d3_haversin(x1 - x0))), k = 1 / Math.sin(d);
	    var interpolate = d ? function(t) {
	      var B = Math.sin(t *= d) * k, A = Math.sin(d - t) * k, x = A * kx0 + B * kx1, y = A * ky0 + B * ky1, z = A * sy0 + B * sy1;
	      return [ Math.atan2(y, x) * d3_degrees, Math.atan2(z, Math.sqrt(x * x + y * y)) * d3_degrees ];
	    } : function() {
	      return [ x0 * d3_degrees, y0 * d3_degrees ];
	    };
	    interpolate.distance = d;
	    return interpolate;
	  }
	  d3.geo.length = function(object) {
	    d3_geo_lengthSum = 0;
	    d3.geo.stream(object, d3_geo_length);
	    return d3_geo_lengthSum;
	  };
	  var d3_geo_lengthSum;
	  var d3_geo_length = {
	    sphere: d3_noop,
	    point: d3_noop,
	    lineStart: d3_geo_lengthLineStart,
	    lineEnd: d3_noop,
	    polygonStart: d3_noop,
	    polygonEnd: d3_noop
	  };
	  function d3_geo_lengthLineStart() {
	    var λ0, sinφ0, cosφ0;
	    d3_geo_length.point = function(λ, φ) {
	      λ0 = λ * d3_radians, sinφ0 = Math.sin(φ *= d3_radians), cosφ0 = Math.cos(φ);
	      d3_geo_length.point = nextPoint;
	    };
	    d3_geo_length.lineEnd = function() {
	      d3_geo_length.point = d3_geo_length.lineEnd = d3_noop;
	    };
	    function nextPoint(λ, φ) {
	      var sinφ = Math.sin(φ *= d3_radians), cosφ = Math.cos(φ), t = abs((λ *= d3_radians) - λ0), cosΔλ = Math.cos(t);
	      d3_geo_lengthSum += Math.atan2(Math.sqrt((t = cosφ * Math.sin(t)) * t + (t = cosφ0 * sinφ - sinφ0 * cosφ * cosΔλ) * t), sinφ0 * sinφ + cosφ0 * cosφ * cosΔλ);
	      λ0 = λ, sinφ0 = sinφ, cosφ0 = cosφ;
	    }
	  }
	  function d3_geo_azimuthal(scale, angle) {
	    function azimuthal(λ, φ) {
	      var cosλ = Math.cos(λ), cosφ = Math.cos(φ), k = scale(cosλ * cosφ);
	      return [ k * cosφ * Math.sin(λ), k * Math.sin(φ) ];
	    }
	    azimuthal.invert = function(x, y) {
	      var ρ = Math.sqrt(x * x + y * y), c = angle(ρ), sinc = Math.sin(c), cosc = Math.cos(c);
	      return [ Math.atan2(x * sinc, ρ * cosc), Math.asin(ρ && y * sinc / ρ) ];
	    };
	    return azimuthal;
	  }
	  var d3_geo_azimuthalEqualArea = d3_geo_azimuthal(function(cosλcosφ) {
	    return Math.sqrt(2 / (1 + cosλcosφ));
	  }, function(ρ) {
	    return 2 * Math.asin(ρ / 2);
	  });
	  (d3.geo.azimuthalEqualArea = function() {
	    return d3_geo_projection(d3_geo_azimuthalEqualArea);
	  }).raw = d3_geo_azimuthalEqualArea;
	  var d3_geo_azimuthalEquidistant = d3_geo_azimuthal(function(cosλcosφ) {
	    var c = Math.acos(cosλcosφ);
	    return c && c / Math.sin(c);
	  }, d3_identity);
	  (d3.geo.azimuthalEquidistant = function() {
	    return d3_geo_projection(d3_geo_azimuthalEquidistant);
	  }).raw = d3_geo_azimuthalEquidistant;
	  function d3_geo_conicConformal(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), t = function(φ) {
	      return Math.tan(π / 4 + φ / 2);
	    }, n = φ0 === φ1 ? Math.sin(φ0) : Math.log(cosφ0 / Math.cos(φ1)) / Math.log(t(φ1) / t(φ0)), F = cosφ0 * Math.pow(t(φ0), n) / n;
	    if (!n) return d3_geo_mercator;
	    function forward(λ, φ) {
	      if (F > 0) {
	        if (φ < -halfπ + ε) φ = -halfπ + ε;
	      } else {
	        if (φ > halfπ - ε) φ = halfπ - ε;
	      }
	      var ρ = F / Math.pow(t(φ), n);
	      return [ ρ * Math.sin(n * λ), F - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = F - y, ρ = d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y);
	      return [ Math.atan2(x, ρ0_y) / n, 2 * Math.atan(Math.pow(F / ρ, 1 / n)) - halfπ ];
	    };
	    return forward;
	  }
	  (d3.geo.conicConformal = function() {
	    return d3_geo_conic(d3_geo_conicConformal);
	  }).raw = d3_geo_conicConformal;
	  function d3_geo_conicEquidistant(φ0, φ1) {
	    var cosφ0 = Math.cos(φ0), n = φ0 === φ1 ? Math.sin(φ0) : (cosφ0 - Math.cos(φ1)) / (φ1 - φ0), G = cosφ0 / n + φ0;
	    if (abs(n) < ε) return d3_geo_equirectangular;
	    function forward(λ, φ) {
	      var ρ = G - φ;
	      return [ ρ * Math.sin(n * λ), G - ρ * Math.cos(n * λ) ];
	    }
	    forward.invert = function(x, y) {
	      var ρ0_y = G - y;
	      return [ Math.atan2(x, ρ0_y) / n, G - d3_sgn(n) * Math.sqrt(x * x + ρ0_y * ρ0_y) ];
	    };
	    return forward;
	  }
	  (d3.geo.conicEquidistant = function() {
	    return d3_geo_conic(d3_geo_conicEquidistant);
	  }).raw = d3_geo_conicEquidistant;
	  var d3_geo_gnomonic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / cosλcosφ;
	  }, Math.atan);
	  (d3.geo.gnomonic = function() {
	    return d3_geo_projection(d3_geo_gnomonic);
	  }).raw = d3_geo_gnomonic;
	  function d3_geo_mercator(λ, φ) {
	    return [ λ, Math.log(Math.tan(π / 4 + φ / 2)) ];
	  }
	  d3_geo_mercator.invert = function(x, y) {
	    return [ x, 2 * Math.atan(Math.exp(y)) - halfπ ];
	  };
	  function d3_geo_mercatorProjection(project) {
	    var m = d3_geo_projection(project), scale = m.scale, translate = m.translate, clipExtent = m.clipExtent, clipAuto;
	    m.scale = function() {
	      var v = scale.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.translate = function() {
	      var v = translate.apply(m, arguments);
	      return v === m ? clipAuto ? m.clipExtent(null) : m : v;
	    };
	    m.clipExtent = function(_) {
	      var v = clipExtent.apply(m, arguments);
	      if (v === m) {
	        if (clipAuto = _ == null) {
	          var k = π * scale(), t = translate();
	          clipExtent([ [ t[0] - k, t[1] - k ], [ t[0] + k, t[1] + k ] ]);
	        }
	      } else if (clipAuto) {
	        v = null;
	      }
	      return v;
	    };
	    return m.clipExtent(null);
	  }
	  (d3.geo.mercator = function() {
	    return d3_geo_mercatorProjection(d3_geo_mercator);
	  }).raw = d3_geo_mercator;
	  var d3_geo_orthographic = d3_geo_azimuthal(function() {
	    return 1;
	  }, Math.asin);
	  (d3.geo.orthographic = function() {
	    return d3_geo_projection(d3_geo_orthographic);
	  }).raw = d3_geo_orthographic;
	  var d3_geo_stereographic = d3_geo_azimuthal(function(cosλcosφ) {
	    return 1 / (1 + cosλcosφ);
	  }, function(ρ) {
	    return 2 * Math.atan(ρ);
	  });
	  (d3.geo.stereographic = function() {
	    return d3_geo_projection(d3_geo_stereographic);
	  }).raw = d3_geo_stereographic;
	  function d3_geo_transverseMercator(λ, φ) {
	    return [ Math.log(Math.tan(π / 4 + φ / 2)), -λ ];
	  }
	  d3_geo_transverseMercator.invert = function(x, y) {
	    return [ -y, 2 * Math.atan(Math.exp(x)) - halfπ ];
	  };
	  (d3.geo.transverseMercator = function() {
	    var projection = d3_geo_mercatorProjection(d3_geo_transverseMercator), center = projection.center, rotate = projection.rotate;
	    projection.center = function(_) {
	      return _ ? center([ -_[1], _[0] ]) : (_ = center(), [ _[1], -_[0] ]);
	    };
	    projection.rotate = function(_) {
	      return _ ? rotate([ _[0], _[1], _.length > 2 ? _[2] + 90 : 90 ]) : (_ = rotate(), 
	      [ _[0], _[1], _[2] - 90 ]);
	    };
	    return rotate([ 0, 0, 90 ]);
	  }).raw = d3_geo_transverseMercator;
	  d3.geom = {};
	  function d3_geom_pointX(d) {
	    return d[0];
	  }
	  function d3_geom_pointY(d) {
	    return d[1];
	  }
	  d3.geom.hull = function(vertices) {
	    var x = d3_geom_pointX, y = d3_geom_pointY;
	    if (arguments.length) return hull(vertices);
	    function hull(data) {
	      if (data.length < 3) return [];
	      var fx = d3_functor(x), fy = d3_functor(y), i, n = data.length, points = [], flippedPoints = [];
	      for (i = 0; i < n; i++) {
	        points.push([ +fx.call(this, data[i], i), +fy.call(this, data[i], i), i ]);
	      }
	      points.sort(d3_geom_hullOrder);
	      for (i = 0; i < n; i++) flippedPoints.push([ points[i][0], -points[i][1] ]);
	      var upper = d3_geom_hullUpper(points), lower = d3_geom_hullUpper(flippedPoints);
	      var skipLeft = lower[0] === upper[0], skipRight = lower[lower.length - 1] === upper[upper.length - 1], polygon = [];
	      for (i = upper.length - 1; i >= 0; --i) polygon.push(data[points[upper[i]][2]]);
	      for (i = +skipLeft; i < lower.length - skipRight; ++i) polygon.push(data[points[lower[i]][2]]);
	      return polygon;
	    }
	    hull.x = function(_) {
	      return arguments.length ? (x = _, hull) : x;
	    };
	    hull.y = function(_) {
	      return arguments.length ? (y = _, hull) : y;
	    };
	    return hull;
	  };
	  function d3_geom_hullUpper(points) {
	    var n = points.length, hull = [ 0, 1 ], hs = 2;
	    for (var i = 2; i < n; i++) {
	      while (hs > 1 && d3_cross2d(points[hull[hs - 2]], points[hull[hs - 1]], points[i]) <= 0) --hs;
	      hull[hs++] = i;
	    }
	    return hull.slice(0, hs);
	  }
	  function d3_geom_hullOrder(a, b) {
	    return a[0] - b[0] || a[1] - b[1];
	  }
	  d3.geom.polygon = function(coordinates) {
	    d3_subclass(coordinates, d3_geom_polygonPrototype);
	    return coordinates;
	  };
	  var d3_geom_polygonPrototype = d3.geom.polygon.prototype = [];
	  d3_geom_polygonPrototype.area = function() {
	    var i = -1, n = this.length, a, b = this[n - 1], area = 0;
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      area += a[1] * b[0] - a[0] * b[1];
	    }
	    return area * .5;
	  };
	  d3_geom_polygonPrototype.centroid = function(k) {
	    var i = -1, n = this.length, x = 0, y = 0, a, b = this[n - 1], c;
	    if (!arguments.length) k = -1 / (6 * this.area());
	    while (++i < n) {
	      a = b;
	      b = this[i];
	      c = a[0] * b[1] - b[0] * a[1];
	      x += (a[0] + b[0]) * c;
	      y += (a[1] + b[1]) * c;
	    }
	    return [ x * k, y * k ];
	  };
	  d3_geom_polygonPrototype.clip = function(subject) {
	    var input, closed = d3_geom_polygonClosed(subject), i = -1, n = this.length - d3_geom_polygonClosed(this), j, m, a = this[n - 1], b, c, d;
	    while (++i < n) {
	      input = subject.slice();
	      subject.length = 0;
	      b = this[i];
	      c = input[(m = input.length - closed) - 1];
	      j = -1;
	      while (++j < m) {
	        d = input[j];
	        if (d3_geom_polygonInside(d, a, b)) {
	          if (!d3_geom_polygonInside(c, a, b)) {
	            subject.push(d3_geom_polygonIntersect(c, d, a, b));
	          }
	          subject.push(d);
	        } else if (d3_geom_polygonInside(c, a, b)) {
	          subject.push(d3_geom_polygonIntersect(c, d, a, b));
	        }
	        c = d;
	      }
	      if (closed) subject.push(subject[0]);
	      a = b;
	    }
	    return subject;
	  };
	  function d3_geom_polygonInside(p, a, b) {
	    return (b[0] - a[0]) * (p[1] - a[1]) < (b[1] - a[1]) * (p[0] - a[0]);
	  }
	  function d3_geom_polygonIntersect(c, d, a, b) {
	    var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3, y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3, ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
	    return [ x1 + ua * x21, y1 + ua * y21 ];
	  }
	  function d3_geom_polygonClosed(coordinates) {
	    var a = coordinates[0], b = coordinates[coordinates.length - 1];
	    return !(a[0] - b[0] || a[1] - b[1]);
	  }
	  var d3_geom_voronoiEdges, d3_geom_voronoiCells, d3_geom_voronoiBeaches, d3_geom_voronoiBeachPool = [], d3_geom_voronoiFirstCircle, d3_geom_voronoiCircles, d3_geom_voronoiCirclePool = [];
	  function d3_geom_voronoiBeach() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.edge = this.site = this.circle = null;
	  }
	  function d3_geom_voronoiCreateBeach(site) {
	    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();
	    beach.site = site;
	    return beach;
	  }
	  function d3_geom_voronoiDetachBeach(beach) {
	    d3_geom_voronoiDetachCircle(beach);
	    d3_geom_voronoiBeaches.remove(beach);
	    d3_geom_voronoiBeachPool.push(beach);
	    d3_geom_voronoiRedBlackNode(beach);
	  }
	  function d3_geom_voronoiRemoveBeach(beach) {
	    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {
	      x: x,
	      y: y
	    }, previous = beach.P, next = beach.N, disappearing = [ beach ];
	    d3_geom_voronoiDetachBeach(beach);
	    var lArc = previous;
	    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {
	      previous = lArc.P;
	      disappearing.unshift(lArc);
	      d3_geom_voronoiDetachBeach(lArc);
	      lArc = previous;
	    }
	    disappearing.unshift(lArc);
	    d3_geom_voronoiDetachCircle(lArc);
	    var rArc = next;
	    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {
	      next = rArc.N;
	      disappearing.push(rArc);
	      d3_geom_voronoiDetachBeach(rArc);
	      rArc = next;
	    }
	    disappearing.push(rArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var nArcs = disappearing.length, iArc;
	    for (iArc = 1; iArc < nArcs; ++iArc) {
	      rArc = disappearing[iArc];
	      lArc = disappearing[iArc - 1];
	      d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);
	    }
	    lArc = disappearing[0];
	    rArc = disappearing[nArcs - 1];
	    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiAddBeach(site) {
	    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;
	    while (node) {
	      dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;
	      if (dxl > ε) node = node.L; else {
	        dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);
	        if (dxr > ε) {
	          if (!node.R) {
	            lArc = node;
	            break;
	          }
	          node = node.R;
	        } else {
	          if (dxl > -ε) {
	            lArc = node.P;
	            rArc = node;
	          } else if (dxr > -ε) {
	            lArc = node;
	            rArc = node.N;
	          } else {
	            lArc = rArc = node;
	          }
	          break;
	        }
	      }
	    }
	    var newArc = d3_geom_voronoiCreateBeach(site);
	    d3_geom_voronoiBeaches.insert(lArc, newArc);
	    if (!lArc && !rArc) return;
	    if (lArc === rArc) {
	      d3_geom_voronoiDetachCircle(lArc);
	      rArc = d3_geom_voronoiCreateBeach(lArc.site);
	      d3_geom_voronoiBeaches.insert(newArc, rArc);
	      newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      d3_geom_voronoiAttachCircle(lArc);
	      d3_geom_voronoiAttachCircle(rArc);
	      return;
	    }
	    if (!rArc) {
	      newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);
	      return;
	    }
	    d3_geom_voronoiDetachCircle(lArc);
	    d3_geom_voronoiDetachCircle(rArc);
	    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {
	      x: (cy * hb - by * hc) / d + ax,
	      y: (bx * hc - cx * hb) / d + ay
	    };
	    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);
	    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);
	    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);
	    d3_geom_voronoiAttachCircle(lArc);
	    d3_geom_voronoiAttachCircle(rArc);
	  }
	  function d3_geom_voronoiLeftBreakPoint(arc, directrix) {
	    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;
	    if (!pby2) return rfocx;
	    var lArc = arc.P;
	    if (!lArc) return -Infinity;
	    site = lArc.site;
	    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;
	    if (!plby2) return lfocx;
	    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;
	    if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;
	    return (rfocx + lfocx) / 2;
	  }
	  function d3_geom_voronoiRightBreakPoint(arc, directrix) {
	    var rArc = arc.N;
	    if (rArc) return d3_geom_voronoiLeftBreakPoint(rArc, directrix);
	    var site = arc.site;
	    return site.y === directrix ? site.x : Infinity;
	  }
	  function d3_geom_voronoiCell(site) {
	    this.site = site;
	    this.edges = [];
	  }
	  d3_geom_voronoiCell.prototype.prepare = function() {
	    var halfEdges = this.edges, iHalfEdge = halfEdges.length, edge;
	    while (iHalfEdge--) {
	      edge = halfEdges[iHalfEdge].edge;
	      if (!edge.b || !edge.a) halfEdges.splice(iHalfEdge, 1);
	    }
	    halfEdges.sort(d3_geom_voronoiHalfEdgeOrder);
	    return halfEdges.length;
	  };
	  function d3_geom_voronoiCloseCells(extent) {
	    var x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], x2, y2, x3, y3, cells = d3_geom_voronoiCells, iCell = cells.length, cell, iHalfEdge, halfEdges, nHalfEdges, start, end;
	    while (iCell--) {
	      cell = cells[iCell];
	      if (!cell || !cell.prepare()) continue;
	      halfEdges = cell.edges;
	      nHalfEdges = halfEdges.length;
	      iHalfEdge = 0;
	      while (iHalfEdge < nHalfEdges) {
	        end = halfEdges[iHalfEdge].end(), x3 = end.x, y3 = end.y;
	        start = halfEdges[++iHalfEdge % nHalfEdges].start(), x2 = start.x, y2 = start.y;
	        if (abs(x3 - x2) > ε || abs(y3 - y2) > ε) {
	          halfEdges.splice(iHalfEdge, 0, new d3_geom_voronoiHalfEdge(d3_geom_voronoiCreateBorderEdge(cell.site, end, abs(x3 - x0) < ε && y1 - y3 > ε ? {
	            x: x0,
	            y: abs(x2 - x0) < ε ? y2 : y1
	          } : abs(y3 - y1) < ε && x1 - x3 > ε ? {
	            x: abs(y2 - y1) < ε ? x2 : x1,
	            y: y1
	          } : abs(x3 - x1) < ε && y3 - y0 > ε ? {
	            x: x1,
	            y: abs(x2 - x1) < ε ? y2 : y0
	          } : abs(y3 - y0) < ε && x3 - x0 > ε ? {
	            x: abs(y2 - y0) < ε ? x2 : x0,
	            y: y0
	          } : null), cell.site, null));
	          ++nHalfEdges;
	        }
	      }
	    }
	  }
	  function d3_geom_voronoiHalfEdgeOrder(a, b) {
	    return b.angle - a.angle;
	  }
	  function d3_geom_voronoiCircle() {
	    d3_geom_voronoiRedBlackNode(this);
	    this.x = this.y = this.arc = this.site = this.cy = null;
	  }
	  function d3_geom_voronoiAttachCircle(arc) {
	    var lArc = arc.P, rArc = arc.N;
	    if (!lArc || !rArc) return;
	    var lSite = lArc.site, cSite = arc.site, rSite = rArc.site;
	    if (lSite === rSite) return;
	    var bx = cSite.x, by = cSite.y, ax = lSite.x - bx, ay = lSite.y - by, cx = rSite.x - bx, cy = rSite.y - by;
	    var d = 2 * (ax * cy - ay * cx);
	    if (d >= -ε2) return;
	    var ha = ax * ax + ay * ay, hc = cx * cx + cy * cy, x = (cy * ha - ay * hc) / d, y = (ax * hc - cx * ha) / d, cy = y + by;
	    var circle = d3_geom_voronoiCirclePool.pop() || new d3_geom_voronoiCircle();
	    circle.arc = arc;
	    circle.site = cSite;
	    circle.x = x + bx;
	    circle.y = cy + Math.sqrt(x * x + y * y);
	    circle.cy = cy;
	    arc.circle = circle;
	    var before = null, node = d3_geom_voronoiCircles._;
	    while (node) {
	      if (circle.y < node.y || circle.y === node.y && circle.x <= node.x) {
	        if (node.L) node = node.L; else {
	          before = node.P;
	          break;
	        }
	      } else {
	        if (node.R) node = node.R; else {
	          before = node;
	          break;
	        }
	      }
	    }
	    d3_geom_voronoiCircles.insert(before, circle);
	    if (!before) d3_geom_voronoiFirstCircle = circle;
	  }
	  function d3_geom_voronoiDetachCircle(arc) {
	    var circle = arc.circle;
	    if (circle) {
	      if (!circle.P) d3_geom_voronoiFirstCircle = circle.N;
	      d3_geom_voronoiCircles.remove(circle);
	      d3_geom_voronoiCirclePool.push(circle);
	      d3_geom_voronoiRedBlackNode(circle);
	      arc.circle = null;
	    }
	  }
	  function d3_geom_voronoiClipEdges(extent) {
	    var edges = d3_geom_voronoiEdges, clip = d3_geom_clipLine(extent[0][0], extent[0][1], extent[1][0], extent[1][1]), i = edges.length, e;
	    while (i--) {
	      e = edges[i];
	      if (!d3_geom_voronoiConnectEdge(e, extent) || !clip(e) || abs(e.a.x - e.b.x) < ε && abs(e.a.y - e.b.y) < ε) {
	        e.a = e.b = null;
	        edges.splice(i, 1);
	      }
	    }
	  }
	  function d3_geom_voronoiConnectEdge(edge, extent) {
	    var vb = edge.b;
	    if (vb) return true;
	    var va = edge.a, x0 = extent[0][0], x1 = extent[1][0], y0 = extent[0][1], y1 = extent[1][1], lSite = edge.l, rSite = edge.r, lx = lSite.x, ly = lSite.y, rx = rSite.x, ry = rSite.y, fx = (lx + rx) / 2, fy = (ly + ry) / 2, fm, fb;
	    if (ry === ly) {
	      if (fx < x0 || fx >= x1) return;
	      if (lx > rx) {
	        if (!va) va = {
	          x: fx,
	          y: y0
	        }; else if (va.y >= y1) return;
	        vb = {
	          x: fx,
	          y: y1
	        };
	      } else {
	        if (!va) va = {
	          x: fx,
	          y: y1
	        }; else if (va.y < y0) return;
	        vb = {
	          x: fx,
	          y: y0
	        };
	      }
	    } else {
	      fm = (lx - rx) / (ry - ly);
	      fb = fy - fm * fx;
	      if (fm < -1 || fm > 1) {
	        if (lx > rx) {
	          if (!va) va = {
	            x: (y0 - fb) / fm,
	            y: y0
	          }; else if (va.y >= y1) return;
	          vb = {
	            x: (y1 - fb) / fm,
	            y: y1
	          };
	        } else {
	          if (!va) va = {
	            x: (y1 - fb) / fm,
	            y: y1
	          }; else if (va.y < y0) return;
	          vb = {
	            x: (y0 - fb) / fm,
	            y: y0
	          };
	        }
	      } else {
	        if (ly < ry) {
	          if (!va) va = {
	            x: x0,
	            y: fm * x0 + fb
	          }; else if (va.x >= x1) return;
	          vb = {
	            x: x1,
	            y: fm * x1 + fb
	          };
	        } else {
	          if (!va) va = {
	            x: x1,
	            y: fm * x1 + fb
	          }; else if (va.x < x0) return;
	          vb = {
	            x: x0,
	            y: fm * x0 + fb
	          };
	        }
	      }
	    }
	    edge.a = va;
	    edge.b = vb;
	    return true;
	  }
	  function d3_geom_voronoiEdge(lSite, rSite) {
	    this.l = lSite;
	    this.r = rSite;
	    this.a = this.b = null;
	  }
	  function d3_geom_voronoiCreateEdge(lSite, rSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, rSite);
	    d3_geom_voronoiEdges.push(edge);
	    if (va) d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, va);
	    if (vb) d3_geom_voronoiSetEdgeEnd(edge, rSite, lSite, vb);
	    d3_geom_voronoiCells[lSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, lSite, rSite));
	    d3_geom_voronoiCells[rSite.i].edges.push(new d3_geom_voronoiHalfEdge(edge, rSite, lSite));
	    return edge;
	  }
	  function d3_geom_voronoiCreateBorderEdge(lSite, va, vb) {
	    var edge = new d3_geom_voronoiEdge(lSite, null);
	    edge.a = va;
	    edge.b = vb;
	    d3_geom_voronoiEdges.push(edge);
	    return edge;
	  }
	  function d3_geom_voronoiSetEdgeEnd(edge, lSite, rSite, vertex) {
	    if (!edge.a && !edge.b) {
	      edge.a = vertex;
	      edge.l = lSite;
	      edge.r = rSite;
	    } else if (edge.l === rSite) {
	      edge.b = vertex;
	    } else {
	      edge.a = vertex;
	    }
	  }
	  function d3_geom_voronoiHalfEdge(edge, lSite, rSite) {
	    var va = edge.a, vb = edge.b;
	    this.edge = edge;
	    this.site = lSite;
	    this.angle = rSite ? Math.atan2(rSite.y - lSite.y, rSite.x - lSite.x) : edge.l === lSite ? Math.atan2(vb.x - va.x, va.y - vb.y) : Math.atan2(va.x - vb.x, vb.y - va.y);
	  }
	  d3_geom_voronoiHalfEdge.prototype = {
	    start: function() {
	      return this.edge.l === this.site ? this.edge.a : this.edge.b;
	    },
	    end: function() {
	      return this.edge.l === this.site ? this.edge.b : this.edge.a;
	    }
	  };
	  function d3_geom_voronoiRedBlackTree() {
	    this._ = null;
	  }
	  function d3_geom_voronoiRedBlackNode(node) {
	    node.U = node.C = node.L = node.R = node.P = node.N = null;
	  }
	  d3_geom_voronoiRedBlackTree.prototype = {
	    insert: function(after, node) {
	      var parent, grandpa, uncle;
	      if (after) {
	        node.P = after;
	        node.N = after.N;
	        if (after.N) after.N.P = node;
	        after.N = node;
	        if (after.R) {
	          after = after.R;
	          while (after.L) after = after.L;
	          after.L = node;
	        } else {
	          after.R = node;
	        }
	        parent = after;
	      } else if (this._) {
	        after = d3_geom_voronoiRedBlackFirst(this._);
	        node.P = null;
	        node.N = after;
	        after.P = after.L = node;
	        parent = after;
	      } else {
	        node.P = node.N = null;
	        this._ = node;
	        parent = null;
	      }
	      node.L = node.R = null;
	      node.U = parent;
	      node.C = true;
	      after = node;
	      while (parent && parent.C) {
	        grandpa = parent.U;
	        if (parent === grandpa.L) {
	          uncle = grandpa.R;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.R) {
	              d3_geom_voronoiRedBlackRotateLeft(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, grandpa);
	          }
	        } else {
	          uncle = grandpa.L;
	          if (uncle && uncle.C) {
	            parent.C = uncle.C = false;
	            grandpa.C = true;
	            after = grandpa;
	          } else {
	            if (after === parent.L) {
	              d3_geom_voronoiRedBlackRotateRight(this, parent);
	              after = parent;
	              parent = after.U;
	            }
	            parent.C = false;
	            grandpa.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, grandpa);
	          }
	        }
	        parent = after.U;
	      }
	      this._.C = false;
	    },
	    remove: function(node) {
	      if (node.N) node.N.P = node.P;
	      if (node.P) node.P.N = node.N;
	      node.N = node.P = null;
	      var parent = node.U, sibling, left = node.L, right = node.R, next, red;
	      if (!left) next = right; else if (!right) next = left; else next = d3_geom_voronoiRedBlackFirst(right);
	      if (parent) {
	        if (parent.L === node) parent.L = next; else parent.R = next;
	      } else {
	        this._ = next;
	      }
	      if (left && right) {
	        red = next.C;
	        next.C = node.C;
	        next.L = left;
	        left.U = next;
	        if (next !== right) {
	          parent = next.U;
	          next.U = node.U;
	          node = next.R;
	          parent.L = node;
	          next.R = right;
	          right.U = next;
	        } else {
	          next.U = parent;
	          parent = next;
	          node = next.R;
	        }
	      } else {
	        red = node.C;
	        node = next;
	      }
	      if (node) node.U = parent;
	      if (red) return;
	      if (node && node.C) {
	        node.C = false;
	        return;
	      }
	      do {
	        if (node === this._) break;
	        if (node === parent.L) {
	          sibling = parent.R;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            sibling = parent.R;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.R || !sibling.R.C) {
	              sibling.L.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateRight(this, sibling);
	              sibling = parent.R;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.R.C = false;
	            d3_geom_voronoiRedBlackRotateLeft(this, parent);
	            node = this._;
	            break;
	          }
	        } else {
	          sibling = parent.L;
	          if (sibling.C) {
	            sibling.C = false;
	            parent.C = true;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            sibling = parent.L;
	          }
	          if (sibling.L && sibling.L.C || sibling.R && sibling.R.C) {
	            if (!sibling.L || !sibling.L.C) {
	              sibling.R.C = false;
	              sibling.C = true;
	              d3_geom_voronoiRedBlackRotateLeft(this, sibling);
	              sibling = parent.L;
	            }
	            sibling.C = parent.C;
	            parent.C = sibling.L.C = false;
	            d3_geom_voronoiRedBlackRotateRight(this, parent);
	            node = this._;
	            break;
	          }
	        }
	        sibling.C = true;
	        node = parent;
	        parent = parent.U;
	      } while (!node.C);
	      if (node) node.C = false;
	    }
	  };
	  function d3_geom_voronoiRedBlackRotateLeft(tree, node) {
	    var p = node, q = node.R, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.R = q.L;
	    if (p.R) p.R.U = p;
	    q.L = p;
	  }
	  function d3_geom_voronoiRedBlackRotateRight(tree, node) {
	    var p = node, q = node.L, parent = p.U;
	    if (parent) {
	      if (parent.L === p) parent.L = q; else parent.R = q;
	    } else {
	      tree._ = q;
	    }
	    q.U = parent;
	    p.U = q;
	    p.L = q.R;
	    if (p.L) p.L.U = p;
	    q.R = p;
	  }
	  function d3_geom_voronoiRedBlackFirst(node) {
	    while (node.L) node = node.L;
	    return node;
	  }
	  function d3_geom_voronoi(sites, bbox) {
	    var site = sites.sort(d3_geom_voronoiVertexOrder).pop(), x0, y0, circle;
	    d3_geom_voronoiEdges = [];
	    d3_geom_voronoiCells = new Array(sites.length);
	    d3_geom_voronoiBeaches = new d3_geom_voronoiRedBlackTree();
	    d3_geom_voronoiCircles = new d3_geom_voronoiRedBlackTree();
	    while (true) {
	      circle = d3_geom_voronoiFirstCircle;
	      if (site && (!circle || site.y < circle.y || site.y === circle.y && site.x < circle.x)) {
	        if (site.x !== x0 || site.y !== y0) {
	          d3_geom_voronoiCells[site.i] = new d3_geom_voronoiCell(site);
	          d3_geom_voronoiAddBeach(site);
	          x0 = site.x, y0 = site.y;
	        }
	        site = sites.pop();
	      } else if (circle) {
	        d3_geom_voronoiRemoveBeach(circle.arc);
	      } else {
	        break;
	      }
	    }
	    if (bbox) d3_geom_voronoiClipEdges(bbox), d3_geom_voronoiCloseCells(bbox);
	    var diagram = {
	      cells: d3_geom_voronoiCells,
	      edges: d3_geom_voronoiEdges
	    };
	    d3_geom_voronoiBeaches = d3_geom_voronoiCircles = d3_geom_voronoiEdges = d3_geom_voronoiCells = null;
	    return diagram;
	  }
	  function d3_geom_voronoiVertexOrder(a, b) {
	    return b.y - a.y || b.x - a.x;
	  }
	  d3.geom.voronoi = function(points) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, fx = x, fy = y, clipExtent = d3_geom_voronoiClipExtent;
	    if (points) return voronoi(points);
	    function voronoi(data) {
	      var polygons = new Array(data.length), x0 = clipExtent[0][0], y0 = clipExtent[0][1], x1 = clipExtent[1][0], y1 = clipExtent[1][1];
	      d3_geom_voronoi(sites(data), clipExtent).cells.forEach(function(cell, i) {
	        var edges = cell.edges, site = cell.site, polygon = polygons[i] = edges.length ? edges.map(function(e) {
	          var s = e.start();
	          return [ s.x, s.y ];
	        }) : site.x >= x0 && site.x <= x1 && site.y >= y0 && site.y <= y1 ? [ [ x0, y1 ], [ x1, y1 ], [ x1, y0 ], [ x0, y0 ] ] : [];
	        polygon.point = data[i];
	      });
	      return polygons;
	    }
	    function sites(data) {
	      return data.map(function(d, i) {
	        return {
	          x: Math.round(fx(d, i) / ε) * ε,
	          y: Math.round(fy(d, i) / ε) * ε,
	          i: i
	        };
	      });
	    }
	    voronoi.links = function(data) {
	      return d3_geom_voronoi(sites(data)).edges.filter(function(edge) {
	        return edge.l && edge.r;
	      }).map(function(edge) {
	        return {
	          source: data[edge.l.i],
	          target: data[edge.r.i]
	        };
	      });
	    };
	    voronoi.triangles = function(data) {
	      var triangles = [];
	      d3_geom_voronoi(sites(data)).cells.forEach(function(cell, i) {
	        var site = cell.site, edges = cell.edges.sort(d3_geom_voronoiHalfEdgeOrder), j = -1, m = edges.length, e0, s0, e1 = edges[m - 1].edge, s1 = e1.l === site ? e1.r : e1.l;
	        while (++j < m) {
	          e0 = e1;
	          s0 = s1;
	          e1 = edges[j].edge;
	          s1 = e1.l === site ? e1.r : e1.l;
	          if (i < s0.i && i < s1.i && d3_geom_voronoiTriangleArea(site, s0, s1) < 0) {
	            triangles.push([ data[i], data[s0.i], data[s1.i] ]);
	          }
	        }
	      });
	      return triangles;
	    };
	    voronoi.x = function(_) {
	      return arguments.length ? (fx = d3_functor(x = _), voronoi) : x;
	    };
	    voronoi.y = function(_) {
	      return arguments.length ? (fy = d3_functor(y = _), voronoi) : y;
	    };
	    voronoi.clipExtent = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent;
	      clipExtent = _ == null ? d3_geom_voronoiClipExtent : _;
	      return voronoi;
	    };
	    voronoi.size = function(_) {
	      if (!arguments.length) return clipExtent === d3_geom_voronoiClipExtent ? null : clipExtent && clipExtent[1];
	      return voronoi.clipExtent(_ && [ [ 0, 0 ], _ ]);
	    };
	    return voronoi;
	  };
	  var d3_geom_voronoiClipExtent = [ [ -1e6, -1e6 ], [ 1e6, 1e6 ] ];
	  function d3_geom_voronoiTriangleArea(a, b, c) {
	    return (a.x - c.x) * (b.y - a.y) - (a.x - b.x) * (c.y - a.y);
	  }
	  d3.geom.delaunay = function(vertices) {
	    return d3.geom.voronoi().triangles(vertices);
	  };
	  d3.geom.quadtree = function(points, x1, y1, x2, y2) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, compat;
	    if (compat = arguments.length) {
	      x = d3_geom_quadtreeCompatX;
	      y = d3_geom_quadtreeCompatY;
	      if (compat === 3) {
	        y2 = y1;
	        x2 = x1;
	        y1 = x1 = 0;
	      }
	      return quadtree(points);
	    }
	    function quadtree(data) {
	      var d, fx = d3_functor(x), fy = d3_functor(y), xs, ys, i, n, x1_, y1_, x2_, y2_;
	      if (x1 != null) {
	        x1_ = x1, y1_ = y1, x2_ = x2, y2_ = y2;
	      } else {
	        x2_ = y2_ = -(x1_ = y1_ = Infinity);
	        xs = [], ys = [];
	        n = data.length;
	        if (compat) for (i = 0; i < n; ++i) {
	          d = data[i];
	          if (d.x < x1_) x1_ = d.x;
	          if (d.y < y1_) y1_ = d.y;
	          if (d.x > x2_) x2_ = d.x;
	          if (d.y > y2_) y2_ = d.y;
	          xs.push(d.x);
	          ys.push(d.y);
	        } else for (i = 0; i < n; ++i) {
	          var x_ = +fx(d = data[i], i), y_ = +fy(d, i);
	          if (x_ < x1_) x1_ = x_;
	          if (y_ < y1_) y1_ = y_;
	          if (x_ > x2_) x2_ = x_;
	          if (y_ > y2_) y2_ = y_;
	          xs.push(x_);
	          ys.push(y_);
	        }
	      }
	      var dx = x2_ - x1_, dy = y2_ - y1_;
	      if (dx > dy) y2_ = y1_ + dx; else x2_ = x1_ + dy;
	      function insert(n, d, x, y, x1, y1, x2, y2) {
	        if (isNaN(x) || isNaN(y)) return;
	        if (n.leaf) {
	          var nx = n.x, ny = n.y;
	          if (nx != null) {
	            if (abs(nx - x) + abs(ny - y) < .01) {
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            } else {
	              var nPoint = n.point;
	              n.x = n.y = n.point = null;
	              insertChild(n, nPoint, nx, ny, x1, y1, x2, y2);
	              insertChild(n, d, x, y, x1, y1, x2, y2);
	            }
	          } else {
	            n.x = x, n.y = y, n.point = d;
	          }
	        } else {
	          insertChild(n, d, x, y, x1, y1, x2, y2);
	        }
	      }
	      function insertChild(n, d, x, y, x1, y1, x2, y2) {
	        var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, right = x >= sx, bottom = y >= sy, i = (bottom << 1) + right;
	        n.leaf = false;
	        n = n.nodes[i] || (n.nodes[i] = d3_geom_quadtreeNode());
	        if (right) x1 = sx; else x2 = sx;
	        if (bottom) y1 = sy; else y2 = sy;
	        insert(n, d, x, y, x1, y1, x2, y2);
	      }
	      var root = d3_geom_quadtreeNode();
	      root.add = function(d) {
	        insert(root, d, +fx(d, ++i), +fy(d, i), x1_, y1_, x2_, y2_);
	      };
	      root.visit = function(f) {
	        d3_geom_quadtreeVisit(f, root, x1_, y1_, x2_, y2_);
	      };
	      i = -1;
	      if (x1 == null) {
	        while (++i < n) {
	          insert(root, data[i], xs[i], ys[i], x1_, y1_, x2_, y2_);
	        }
	        --i;
	      } else data.forEach(root.add);
	      xs = ys = data = d = null;
	      return root;
	    }
	    quadtree.x = function(_) {
	      return arguments.length ? (x = _, quadtree) : x;
	    };
	    quadtree.y = function(_) {
	      return arguments.length ? (y = _, quadtree) : y;
	    };
	    quadtree.extent = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ [ x1, y1 ], [ x2, y2 ] ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = +_[0][0], y1 = +_[0][1], x2 = +_[1][0], 
	      y2 = +_[1][1];
	      return quadtree;
	    };
	    quadtree.size = function(_) {
	      if (!arguments.length) return x1 == null ? null : [ x2 - x1, y2 - y1 ];
	      if (_ == null) x1 = y1 = x2 = y2 = null; else x1 = y1 = 0, x2 = +_[0], y2 = +_[1];
	      return quadtree;
	    };
	    return quadtree;
	  };
	  function d3_geom_quadtreeCompatX(d) {
	    return d.x;
	  }
	  function d3_geom_quadtreeCompatY(d) {
	    return d.y;
	  }
	  function d3_geom_quadtreeNode() {
	    return {
	      leaf: true,
	      nodes: [],
	      point: null,
	      x: null,
	      y: null
	    };
	  }
	  function d3_geom_quadtreeVisit(f, node, x1, y1, x2, y2) {
	    if (!f(node, x1, y1, x2, y2)) {
	      var sx = (x1 + x2) * .5, sy = (y1 + y2) * .5, children = node.nodes;
	      if (children[0]) d3_geom_quadtreeVisit(f, children[0], x1, y1, sx, sy);
	      if (children[1]) d3_geom_quadtreeVisit(f, children[1], sx, y1, x2, sy);
	      if (children[2]) d3_geom_quadtreeVisit(f, children[2], x1, sy, sx, y2);
	      if (children[3]) d3_geom_quadtreeVisit(f, children[3], sx, sy, x2, y2);
	    }
	  }
	  d3.interpolateRgb = d3_interpolateRgb;
	  function d3_interpolateRgb(a, b) {
	    a = d3.rgb(a);
	    b = d3.rgb(b);
	    var ar = a.r, ag = a.g, ab = a.b, br = b.r - ar, bg = b.g - ag, bb = b.b - ab;
	    return function(t) {
	      return "#" + d3_rgb_hex(Math.round(ar + br * t)) + d3_rgb_hex(Math.round(ag + bg * t)) + d3_rgb_hex(Math.round(ab + bb * t));
	    };
	  }
	  d3.interpolateObject = d3_interpolateObject;
	  function d3_interpolateObject(a, b) {
	    var i = {}, c = {}, k;
	    for (k in a) {
	      if (k in b) {
	        i[k] = d3_interpolate(a[k], b[k]);
	      } else {
	        c[k] = a[k];
	      }
	    }
	    for (k in b) {
	      if (!(k in a)) {
	        c[k] = b[k];
	      }
	    }
	    return function(t) {
	      for (k in i) c[k] = i[k](t);
	      return c;
	    };
	  }
	  d3.interpolateNumber = d3_interpolateNumber;
	  function d3_interpolateNumber(a, b) {
	    b -= a = +a;
	    return function(t) {
	      return a + b * t;
	    };
	  }
	  d3.interpolateString = d3_interpolateString;
	  function d3_interpolateString(a, b) {
	    var bi = d3_interpolate_numberA.lastIndex = d3_interpolate_numberB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
	    a = a + "", b = b + "";
	    while ((am = d3_interpolate_numberA.exec(a)) && (bm = d3_interpolate_numberB.exec(b))) {
	      if ((bs = bm.index) > bi) {
	        bs = b.substring(bi, bs);
	        if (s[i]) s[i] += bs; else s[++i] = bs;
	      }
	      if ((am = am[0]) === (bm = bm[0])) {
	        if (s[i]) s[i] += bm; else s[++i] = bm;
	      } else {
	        s[++i] = null;
	        q.push({
	          i: i,
	          x: d3_interpolateNumber(am, bm)
	        });
	      }
	      bi = d3_interpolate_numberB.lastIndex;
	    }
	    if (bi < b.length) {
	      bs = b.substring(bi);
	      if (s[i]) s[i] += bs; else s[++i] = bs;
	    }
	    return s.length < 2 ? q[0] ? (b = q[0].x, function(t) {
	      return b(t) + "";
	    }) : function() {
	      return b;
	    } : (b = q.length, function(t) {
	      for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    });
	  }
	  var d3_interpolate_numberA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, d3_interpolate_numberB = new RegExp(d3_interpolate_numberA.source, "g");
	  d3.interpolate = d3_interpolate;
	  function d3_interpolate(a, b) {
	    var i = d3.interpolators.length, f;
	    while (--i >= 0 && !(f = d3.interpolators[i](a, b))) ;
	    return f;
	  }
	  d3.interpolators = [ function(a, b) {
	    var t = typeof b;
	    return (t === "string" ? d3_rgb_names.has(b) || /^(#|rgb\(|hsl\()/.test(b) ? d3_interpolateRgb : d3_interpolateString : b instanceof d3_color ? d3_interpolateRgb : Array.isArray(b) ? d3_interpolateArray : t === "object" && isNaN(b) ? d3_interpolateObject : d3_interpolateNumber)(a, b);
	  } ];
	  d3.interpolateArray = d3_interpolateArray;
	  function d3_interpolateArray(a, b) {
	    var x = [], c = [], na = a.length, nb = b.length, n0 = Math.min(a.length, b.length), i;
	    for (i = 0; i < n0; ++i) x.push(d3_interpolate(a[i], b[i]));
	    for (;i < na; ++i) c[i] = a[i];
	    for (;i < nb; ++i) c[i] = b[i];
	    return function(t) {
	      for (i = 0; i < n0; ++i) c[i] = x[i](t);
	      return c;
	    };
	  }
	  var d3_ease_default = function() {
	    return d3_identity;
	  };
	  var d3_ease = d3.map({
	    linear: d3_ease_default,
	    poly: d3_ease_poly,
	    quad: function() {
	      return d3_ease_quad;
	    },
	    cubic: function() {
	      return d3_ease_cubic;
	    },
	    sin: function() {
	      return d3_ease_sin;
	    },
	    exp: function() {
	      return d3_ease_exp;
	    },
	    circle: function() {
	      return d3_ease_circle;
	    },
	    elastic: d3_ease_elastic,
	    back: d3_ease_back,
	    bounce: function() {
	      return d3_ease_bounce;
	    }
	  });
	  var d3_ease_mode = d3.map({
	    "in": d3_identity,
	    out: d3_ease_reverse,
	    "in-out": d3_ease_reflect,
	    "out-in": function(f) {
	      return d3_ease_reflect(d3_ease_reverse(f));
	    }
	  });
	  d3.ease = function(name) {
	    var i = name.indexOf("-"), t = i >= 0 ? name.substring(0, i) : name, m = i >= 0 ? name.substring(i + 1) : "in";
	    t = d3_ease.get(t) || d3_ease_default;
	    m = d3_ease_mode.get(m) || d3_identity;
	    return d3_ease_clamp(m(t.apply(null, d3_arraySlice.call(arguments, 1))));
	  };
	  function d3_ease_clamp(f) {
	    return function(t) {
	      return t <= 0 ? 0 : t >= 1 ? 1 : f(t);
	    };
	  }
	  function d3_ease_reverse(f) {
	    return function(t) {
	      return 1 - f(1 - t);
	    };
	  }
	  function d3_ease_reflect(f) {
	    return function(t) {
	      return .5 * (t < .5 ? f(2 * t) : 2 - f(2 - 2 * t));
	    };
	  }
	  function d3_ease_quad(t) {
	    return t * t;
	  }
	  function d3_ease_cubic(t) {
	    return t * t * t;
	  }
	  function d3_ease_cubicInOut(t) {
	    if (t <= 0) return 0;
	    if (t >= 1) return 1;
	    var t2 = t * t, t3 = t2 * t;
	    return 4 * (t < .5 ? t3 : 3 * (t - t2) + t3 - .75);
	  }
	  function d3_ease_poly(e) {
	    return function(t) {
	      return Math.pow(t, e);
	    };
	  }
	  function d3_ease_sin(t) {
	    return 1 - Math.cos(t * halfπ);
	  }
	  function d3_ease_exp(t) {
	    return Math.pow(2, 10 * (t - 1));
	  }
	  function d3_ease_circle(t) {
	    return 1 - Math.sqrt(1 - t * t);
	  }
	  function d3_ease_elastic(a, p) {
	    var s;
	    if (arguments.length < 2) p = .45;
	    if (arguments.length) s = p / τ * Math.asin(1 / a); else a = 1, s = p / 4;
	    return function(t) {
	      return 1 + a * Math.pow(2, -10 * t) * Math.sin((t - s) * τ / p);
	    };
	  }
	  function d3_ease_back(s) {
	    if (!s) s = 1.70158;
	    return function(t) {
	      return t * t * ((s + 1) * t - s);
	    };
	  }
	  function d3_ease_bounce(t) {
	    return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
	  }
	  d3.interpolateHcl = d3_interpolateHcl;
	  function d3_interpolateHcl(a, b) {
	    a = d3.hcl(a);
	    b = d3.hcl(b);
	    var ah = a.h, ac = a.c, al = a.l, bh = b.h - ah, bc = b.c - ac, bl = b.l - al;
	    if (isNaN(bc)) bc = 0, ac = isNaN(ac) ? b.c : ac;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hcl_lab(ah + bh * t, ac + bc * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateHsl = d3_interpolateHsl;
	  function d3_interpolateHsl(a, b) {
	    a = d3.hsl(a);
	    b = d3.hsl(b);
	    var ah = a.h, as = a.s, al = a.l, bh = b.h - ah, bs = b.s - as, bl = b.l - al;
	    if (isNaN(bs)) bs = 0, as = isNaN(as) ? b.s : as;
	    if (isNaN(bh)) bh = 0, ah = isNaN(ah) ? b.h : ah; else if (bh > 180) bh -= 360; else if (bh < -180) bh += 360;
	    return function(t) {
	      return d3_hsl_rgb(ah + bh * t, as + bs * t, al + bl * t) + "";
	    };
	  }
	  d3.interpolateLab = d3_interpolateLab;
	  function d3_interpolateLab(a, b) {
	    a = d3.lab(a);
	    b = d3.lab(b);
	    var al = a.l, aa = a.a, ab = a.b, bl = b.l - al, ba = b.a - aa, bb = b.b - ab;
	    return function(t) {
	      return d3_lab_rgb(al + bl * t, aa + ba * t, ab + bb * t) + "";
	    };
	  }
	  d3.interpolateRound = d3_interpolateRound;
	  function d3_interpolateRound(a, b) {
	    b -= a;
	    return function(t) {
	      return Math.round(a + b * t);
	    };
	  }
	  d3.transform = function(string) {
	    var g = d3_document.createElementNS(d3.ns.prefix.svg, "g");
	    return (d3.transform = function(string) {
	      if (string != null) {
	        g.setAttribute("transform", string);
	        var t = g.transform.baseVal.consolidate();
	      }
	      return new d3_transform(t ? t.matrix : d3_transformIdentity);
	    })(string);
	  };
	  function d3_transform(m) {
	    var r0 = [ m.a, m.b ], r1 = [ m.c, m.d ], kx = d3_transformNormalize(r0), kz = d3_transformDot(r0, r1), ky = d3_transformNormalize(d3_transformCombine(r1, r0, -kz)) || 0;
	    if (r0[0] * r1[1] < r1[0] * r0[1]) {
	      r0[0] *= -1;
	      r0[1] *= -1;
	      kx *= -1;
	      kz *= -1;
	    }
	    this.rotate = (kx ? Math.atan2(r0[1], r0[0]) : Math.atan2(-r1[0], r1[1])) * d3_degrees;
	    this.translate = [ m.e, m.f ];
	    this.scale = [ kx, ky ];
	    this.skew = ky ? Math.atan2(kz, ky) * d3_degrees : 0;
	  }
	  d3_transform.prototype.toString = function() {
	    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")";
	  };
	  function d3_transformDot(a, b) {
	    return a[0] * b[0] + a[1] * b[1];
	  }
	  function d3_transformNormalize(a) {
	    var k = Math.sqrt(d3_transformDot(a, a));
	    if (k) {
	      a[0] /= k;
	      a[1] /= k;
	    }
	    return k;
	  }
	  function d3_transformCombine(a, b, k) {
	    a[0] += k * b[0];
	    a[1] += k * b[1];
	    return a;
	  }
	  var d3_transformIdentity = {
	    a: 1,
	    b: 0,
	    c: 0,
	    d: 1,
	    e: 0,
	    f: 0
	  };
	  d3.interpolateTransform = d3_interpolateTransform;
	  function d3_interpolateTransform(a, b) {
	    var s = [], q = [], n, A = d3.transform(a), B = d3.transform(b), ta = A.translate, tb = B.translate, ra = A.rotate, rb = B.rotate, wa = A.skew, wb = B.skew, ka = A.scale, kb = B.scale;
	    if (ta[0] != tb[0] || ta[1] != tb[1]) {
	      s.push("translate(", null, ",", null, ")");
	      q.push({
	        i: 1,
	        x: d3_interpolateNumber(ta[0], tb[0])
	      }, {
	        i: 3,
	        x: d3_interpolateNumber(ta[1], tb[1])
	      });
	    } else if (tb[0] || tb[1]) {
	      s.push("translate(" + tb + ")");
	    } else {
	      s.push("");
	    }
	    if (ra != rb) {
	      if (ra - rb > 180) rb += 360; else if (rb - ra > 180) ra += 360;
	      q.push({
	        i: s.push(s.pop() + "rotate(", null, ")") - 2,
	        x: d3_interpolateNumber(ra, rb)
	      });
	    } else if (rb) {
	      s.push(s.pop() + "rotate(" + rb + ")");
	    }
	    if (wa != wb) {
	      q.push({
	        i: s.push(s.pop() + "skewX(", null, ")") - 2,
	        x: d3_interpolateNumber(wa, wb)
	      });
	    } else if (wb) {
	      s.push(s.pop() + "skewX(" + wb + ")");
	    }
	    if (ka[0] != kb[0] || ka[1] != kb[1]) {
	      n = s.push(s.pop() + "scale(", null, ",", null, ")");
	      q.push({
	        i: n - 4,
	        x: d3_interpolateNumber(ka[0], kb[0])
	      }, {
	        i: n - 2,
	        x: d3_interpolateNumber(ka[1], kb[1])
	      });
	    } else if (kb[0] != 1 || kb[1] != 1) {
	      s.push(s.pop() + "scale(" + kb + ")");
	    }
	    n = q.length;
	    return function(t) {
	      var i = -1, o;
	      while (++i < n) s[(o = q[i]).i] = o.x(t);
	      return s.join("");
	    };
	  }
	  function d3_uninterpolateNumber(a, b) {
	    b = b - (a = +a) ? 1 / (b - a) : 0;
	    return function(x) {
	      return (x - a) * b;
	    };
	  }
	  function d3_uninterpolateClamp(a, b) {
	    b = b - (a = +a) ? 1 / (b - a) : 0;
	    return function(x) {
	      return Math.max(0, Math.min(1, (x - a) * b));
	    };
	  }
	  d3.layout = {};
	  d3.layout.bundle = function() {
	    return function(links) {
	      var paths = [], i = -1, n = links.length;
	      while (++i < n) paths.push(d3_layout_bundlePath(links[i]));
	      return paths;
	    };
	  };
	  function d3_layout_bundlePath(link) {
	    var start = link.source, end = link.target, lca = d3_layout_bundleLeastCommonAncestor(start, end), points = [ start ];
	    while (start !== lca) {
	      start = start.parent;
	      points.push(start);
	    }
	    var k = points.length;
	    while (end !== lca) {
	      points.splice(k, 0, end);
	      end = end.parent;
	    }
	    return points;
	  }
	  function d3_layout_bundleAncestors(node) {
	    var ancestors = [], parent = node.parent;
	    while (parent != null) {
	      ancestors.push(node);
	      node = parent;
	      parent = parent.parent;
	    }
	    ancestors.push(node);
	    return ancestors;
	  }
	  function d3_layout_bundleLeastCommonAncestor(a, b) {
	    if (a === b) return a;
	    var aNodes = d3_layout_bundleAncestors(a), bNodes = d3_layout_bundleAncestors(b), aNode = aNodes.pop(), bNode = bNodes.pop(), sharedNode = null;
	    while (aNode === bNode) {
	      sharedNode = aNode;
	      aNode = aNodes.pop();
	      bNode = bNodes.pop();
	    }
	    return sharedNode;
	  }
	  d3.layout.chord = function() {
	    var chord = {}, chords, groups, matrix, n, padding = 0, sortGroups, sortSubgroups, sortChords;
	    function relayout() {
	      var subgroups = {}, groupSums = [], groupIndex = d3.range(n), subgroupIndex = [], k, x, x0, i, j;
	      chords = [];
	      groups = [];
	      k = 0, i = -1;
	      while (++i < n) {
	        x = 0, j = -1;
	        while (++j < n) {
	          x += matrix[i][j];
	        }
	        groupSums.push(x);
	        subgroupIndex.push(d3.range(n));
	        k += x;
	      }
	      if (sortGroups) {
	        groupIndex.sort(function(a, b) {
	          return sortGroups(groupSums[a], groupSums[b]);
	        });
	      }
	      if (sortSubgroups) {
	        subgroupIndex.forEach(function(d, i) {
	          d.sort(function(a, b) {
	            return sortSubgroups(matrix[i][a], matrix[i][b]);
	          });
	        });
	      }
	      k = (τ - padding * n) / k;
	      x = 0, i = -1;
	      while (++i < n) {
	        x0 = x, j = -1;
	        while (++j < n) {
	          var di = groupIndex[i], dj = subgroupIndex[di][j], v = matrix[di][dj], a0 = x, a1 = x += v * k;
	          subgroups[di + "-" + dj] = {
	            index: di,
	            subindex: dj,
	            startAngle: a0,
	            endAngle: a1,
	            value: v
	          };
	        }
	        groups[di] = {
	          index: di,
	          startAngle: x0,
	          endAngle: x,
	          value: (x - x0) / k
	        };
	        x += padding;
	      }
	      i = -1;
	      while (++i < n) {
	        j = i - 1;
	        while (++j < n) {
	          var source = subgroups[i + "-" + j], target = subgroups[j + "-" + i];
	          if (source.value || target.value) {
	            chords.push(source.value < target.value ? {
	              source: target,
	              target: source
	            } : {
	              source: source,
	              target: target
	            });
	          }
	        }
	      }
	      if (sortChords) resort();
	    }
	    function resort() {
	      chords.sort(function(a, b) {
	        return sortChords((a.source.value + a.target.value) / 2, (b.source.value + b.target.value) / 2);
	      });
	    }
	    chord.matrix = function(x) {
	      if (!arguments.length) return matrix;
	      n = (matrix = x) && matrix.length;
	      chords = groups = null;
	      return chord;
	    };
	    chord.padding = function(x) {
	      if (!arguments.length) return padding;
	      padding = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortGroups = function(x) {
	      if (!arguments.length) return sortGroups;
	      sortGroups = x;
	      chords = groups = null;
	      return chord;
	    };
	    chord.sortSubgroups = function(x) {
	      if (!arguments.length) return sortSubgroups;
	      sortSubgroups = x;
	      chords = null;
	      return chord;
	    };
	    chord.sortChords = function(x) {
	      if (!arguments.length) return sortChords;
	      sortChords = x;
	      if (chords) resort();
	      return chord;
	    };
	    chord.chords = function() {
	      if (!chords) relayout();
	      return chords;
	    };
	    chord.groups = function() {
	      if (!groups) relayout();
	      return groups;
	    };
	    return chord;
	  };
	  d3.layout.force = function() {
	    var force = {}, event = d3.dispatch("start", "tick", "end"), size = [ 1, 1 ], drag, alpha, friction = .9, linkDistance = d3_layout_forceLinkDistance, linkStrength = d3_layout_forceLinkStrength, charge = -30, chargeDistance2 = d3_layout_forceChargeDistance2, gravity = .1, theta2 = .64, nodes = [], links = [], distances, strengths, charges;
	    function repulse(node) {
	      return function(quad, x1, _, x2) {
	        if (quad.point !== node) {
	          var dx = quad.cx - node.x, dy = quad.cy - node.y, dw = x2 - x1, dn = dx * dx + dy * dy;
	          if (dw * dw / theta2 < dn) {
	            if (dn < chargeDistance2) {
	              var k = quad.charge / dn;
	              node.px -= dx * k;
	              node.py -= dy * k;
	            }
	            return true;
	          }
	          if (quad.point && dn && dn < chargeDistance2) {
	            var k = quad.pointCharge / dn;
	            node.px -= dx * k;
	            node.py -= dy * k;
	          }
	        }
	        return !quad.charge;
	      };
	    }
	    force.tick = function() {
	      if ((alpha *= .99) < .005) {
	        event.end({
	          type: "end",
	          alpha: alpha = 0
	        });
	        return true;
	      }
	      var n = nodes.length, m = links.length, q, i, o, s, t, l, k, x, y;
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        s = o.source;
	        t = o.target;
	        x = t.x - s.x;
	        y = t.y - s.y;
	        if (l = x * x + y * y) {
	          l = alpha * strengths[i] * ((l = Math.sqrt(l)) - distances[i]) / l;
	          x *= l;
	          y *= l;
	          t.x -= x * (k = s.weight / (t.weight + s.weight));
	          t.y -= y * k;
	          s.x += x * (k = 1 - k);
	          s.y += y * k;
	        }
	      }
	      if (k = alpha * gravity) {
	        x = size[0] / 2;
	        y = size[1] / 2;
	        i = -1;
	        if (k) while (++i < n) {
	          o = nodes[i];
	          o.x += (x - o.x) * k;
	          o.y += (y - o.y) * k;
	        }
	      }
	      if (charge) {
	        d3_layout_forceAccumulate(q = d3.geom.quadtree(nodes), alpha, charges);
	        i = -1;
	        while (++i < n) {
	          if (!(o = nodes[i]).fixed) {
	            q.visit(repulse(o));
	          }
	        }
	      }
	      i = -1;
	      while (++i < n) {
	        o = nodes[i];
	        if (o.fixed) {
	          o.x = o.px;
	          o.y = o.py;
	        } else {
	          o.x -= (o.px - (o.px = o.x)) * friction;
	          o.y -= (o.py - (o.py = o.y)) * friction;
	        }
	      }
	      event.tick({
	        type: "tick",
	        alpha: alpha
	      });
	    };
	    force.nodes = function(x) {
	      if (!arguments.length) return nodes;
	      nodes = x;
	      return force;
	    };
	    force.links = function(x) {
	      if (!arguments.length) return links;
	      links = x;
	      return force;
	    };
	    force.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return force;
	    };
	    force.linkDistance = function(x) {
	      if (!arguments.length) return linkDistance;
	      linkDistance = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.distance = force.linkDistance;
	    force.linkStrength = function(x) {
	      if (!arguments.length) return linkStrength;
	      linkStrength = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.friction = function(x) {
	      if (!arguments.length) return friction;
	      friction = +x;
	      return force;
	    };
	    force.charge = function(x) {
	      if (!arguments.length) return charge;
	      charge = typeof x === "function" ? x : +x;
	      return force;
	    };
	    force.chargeDistance = function(x) {
	      if (!arguments.length) return Math.sqrt(chargeDistance2);
	      chargeDistance2 = x * x;
	      return force;
	    };
	    force.gravity = function(x) {
	      if (!arguments.length) return gravity;
	      gravity = +x;
	      return force;
	    };
	    force.theta = function(x) {
	      if (!arguments.length) return Math.sqrt(theta2);
	      theta2 = x * x;
	      return force;
	    };
	    force.alpha = function(x) {
	      if (!arguments.length) return alpha;
	      x = +x;
	      if (alpha) {
	        if (x > 0) alpha = x; else alpha = 0;
	      } else if (x > 0) {
	        event.start({
	          type: "start",
	          alpha: alpha = x
	        });
	        d3.timer(force.tick);
	      }
	      return force;
	    };
	    force.start = function() {
	      var i, n = nodes.length, m = links.length, w = size[0], h = size[1], neighbors, o;
	      for (i = 0; i < n; ++i) {
	        (o = nodes[i]).index = i;
	        o.weight = 0;
	      }
	      for (i = 0; i < m; ++i) {
	        o = links[i];
	        if (typeof o.source == "number") o.source = nodes[o.source];
	        if (typeof o.target == "number") o.target = nodes[o.target];
	        ++o.source.weight;
	        ++o.target.weight;
	      }
	      for (i = 0; i < n; ++i) {
	        o = nodes[i];
	        if (isNaN(o.x)) o.x = position("x", w);
	        if (isNaN(o.y)) o.y = position("y", h);
	        if (isNaN(o.px)) o.px = o.x;
	        if (isNaN(o.py)) o.py = o.y;
	      }
	      distances = [];
	      if (typeof linkDistance === "function") for (i = 0; i < m; ++i) distances[i] = +linkDistance.call(this, links[i], i); else for (i = 0; i < m; ++i) distances[i] = linkDistance;
	      strengths = [];
	      if (typeof linkStrength === "function") for (i = 0; i < m; ++i) strengths[i] = +linkStrength.call(this, links[i], i); else for (i = 0; i < m; ++i) strengths[i] = linkStrength;
	      charges = [];
	      if (typeof charge === "function") for (i = 0; i < n; ++i) charges[i] = +charge.call(this, nodes[i], i); else for (i = 0; i < n; ++i) charges[i] = charge;
	      function position(dimension, size) {
	        if (!neighbors) {
	          neighbors = new Array(n);
	          for (j = 0; j < n; ++j) {
	            neighbors[j] = [];
	          }
	          for (j = 0; j < m; ++j) {
	            var o = links[j];
	            neighbors[o.source.index].push(o.target);
	            neighbors[o.target.index].push(o.source);
	          }
	        }
	        var candidates = neighbors[i], j = -1, m = candidates.length, x;
	        while (++j < m) if (!isNaN(x = candidates[j][dimension])) return x;
	        return Math.random() * size;
	      }
	      return force.resume();
	    };
	    force.resume = function() {
	      return force.alpha(.1);
	    };
	    force.stop = function() {
	      return force.alpha(0);
	    };
	    force.drag = function() {
	      if (!drag) drag = d3.behavior.drag().origin(d3_identity).on("dragstart.force", d3_layout_forceDragstart).on("drag.force", dragmove).on("dragend.force", d3_layout_forceDragend);
	      if (!arguments.length) return drag;
	      this.on("mouseover.force", d3_layout_forceMouseover).on("mouseout.force", d3_layout_forceMouseout).call(drag);
	    };
	    function dragmove(d) {
	      d.px = d3.event.x, d.py = d3.event.y;
	      force.resume();
	    }
	    return d3.rebind(force, event, "on");
	  };
	  function d3_layout_forceDragstart(d) {
	    d.fixed |= 2;
	  }
	  function d3_layout_forceDragend(d) {
	    d.fixed &= ~6;
	  }
	  function d3_layout_forceMouseover(d) {
	    d.fixed |= 4;
	    d.px = d.x, d.py = d.y;
	  }
	  function d3_layout_forceMouseout(d) {
	    d.fixed &= ~4;
	  }
	  function d3_layout_forceAccumulate(quad, alpha, charges) {
	    var cx = 0, cy = 0;
	    quad.charge = 0;
	    if (!quad.leaf) {
	      var nodes = quad.nodes, n = nodes.length, i = -1, c;
	      while (++i < n) {
	        c = nodes[i];
	        if (c == null) continue;
	        d3_layout_forceAccumulate(c, alpha, charges);
	        quad.charge += c.charge;
	        cx += c.charge * c.cx;
	        cy += c.charge * c.cy;
	      }
	    }
	    if (quad.point) {
	      if (!quad.leaf) {
	        quad.point.x += Math.random() - .5;
	        quad.point.y += Math.random() - .5;
	      }
	      var k = alpha * charges[quad.point.index];
	      quad.charge += quad.pointCharge = k;
	      cx += k * quad.point.x;
	      cy += k * quad.point.y;
	    }
	    quad.cx = cx / quad.charge;
	    quad.cy = cy / quad.charge;
	  }
	  var d3_layout_forceLinkDistance = 20, d3_layout_forceLinkStrength = 1, d3_layout_forceChargeDistance2 = Infinity;
	  d3.layout.hierarchy = function() {
	    var sort = d3_layout_hierarchySort, children = d3_layout_hierarchyChildren, value = d3_layout_hierarchyValue;
	    function hierarchy(root) {
	      var stack = [ root ], nodes = [], node;
	      root.depth = 0;
	      while ((node = stack.pop()) != null) {
	        nodes.push(node);
	        if ((childs = children.call(hierarchy, node, node.depth)) && (n = childs.length)) {
	          var n, childs, child;
	          while (--n >= 0) {
	            stack.push(child = childs[n]);
	            child.parent = node;
	            child.depth = node.depth + 1;
	          }
	          if (value) node.value = 0;
	          node.children = childs;
	        } else {
	          if (value) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          delete node.children;
	        }
	      }
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var childs, parent;
	        if (sort && (childs = node.children)) childs.sort(sort);
	        if (value && (parent = node.parent)) parent.value += node.value;
	      });
	      return nodes;
	    }
	    hierarchy.sort = function(x) {
	      if (!arguments.length) return sort;
	      sort = x;
	      return hierarchy;
	    };
	    hierarchy.children = function(x) {
	      if (!arguments.length) return children;
	      children = x;
	      return hierarchy;
	    };
	    hierarchy.value = function(x) {
	      if (!arguments.length) return value;
	      value = x;
	      return hierarchy;
	    };
	    hierarchy.revalue = function(root) {
	      if (value) {
	        d3_layout_hierarchyVisitBefore(root, function(node) {
	          if (node.children) node.value = 0;
	        });
	        d3_layout_hierarchyVisitAfter(root, function(node) {
	          var parent;
	          if (!node.children) node.value = +value.call(hierarchy, node, node.depth) || 0;
	          if (parent = node.parent) parent.value += node.value;
	        });
	      }
	      return root;
	    };
	    return hierarchy;
	  };
	  function d3_layout_hierarchyRebind(object, hierarchy) {
	    d3.rebind(object, hierarchy, "sort", "children", "value");
	    object.nodes = object;
	    object.links = d3_layout_hierarchyLinks;
	    return object;
	  }
	  function d3_layout_hierarchyVisitBefore(node, callback) {
	    var nodes = [ node ];
	    while ((node = nodes.pop()) != null) {
	      callback(node);
	      if ((children = node.children) && (n = children.length)) {
	        var n, children;
	        while (--n >= 0) nodes.push(children[n]);
	      }
	    }
	  }
	  function d3_layout_hierarchyVisitAfter(node, callback) {
	    var nodes = [ node ], nodes2 = [];
	    while ((node = nodes.pop()) != null) {
	      nodes2.push(node);
	      if ((children = node.children) && (n = children.length)) {
	        var i = -1, n, children;
	        while (++i < n) nodes.push(children[i]);
	      }
	    }
	    while ((node = nodes2.pop()) != null) {
	      callback(node);
	    }
	  }
	  function d3_layout_hierarchyChildren(d) {
	    return d.children;
	  }
	  function d3_layout_hierarchyValue(d) {
	    return d.value;
	  }
	  function d3_layout_hierarchySort(a, b) {
	    return b.value - a.value;
	  }
	  function d3_layout_hierarchyLinks(nodes) {
	    return d3.merge(nodes.map(function(parent) {
	      return (parent.children || []).map(function(child) {
	        return {
	          source: parent,
	          target: child
	        };
	      });
	    }));
	  }
	  d3.layout.partition = function() {
	    var hierarchy = d3.layout.hierarchy(), size = [ 1, 1 ];
	    function position(node, x, dx, dy) {
	      var children = node.children;
	      node.x = x;
	      node.y = node.depth * dy;
	      node.dx = dx;
	      node.dy = dy;
	      if (children && (n = children.length)) {
	        var i = -1, n, c, d;
	        dx = node.value ? dx / node.value : 0;
	        while (++i < n) {
	          position(c = children[i], x, d = c.value * dx, dy);
	          x += d;
	        }
	      }
	    }
	    function depth(node) {
	      var children = node.children, d = 0;
	      if (children && (n = children.length)) {
	        var i = -1, n;
	        while (++i < n) d = Math.max(d, depth(children[i]));
	      }
	      return 1 + d;
	    }
	    function partition(d, i) {
	      var nodes = hierarchy.call(this, d, i);
	      position(nodes[0], 0, size[0], size[1] / depth(nodes[0]));
	      return nodes;
	    }
	    partition.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return partition;
	    };
	    return d3_layout_hierarchyRebind(partition, hierarchy);
	  };
	  d3.layout.pie = function() {
	    var value = Number, sort = d3_layout_pieSortByValue, startAngle = 0, endAngle = τ;
	    function pie(data) {
	      var values = data.map(function(d, i) {
	        return +value.call(pie, d, i);
	      });
	      var a = +(typeof startAngle === "function" ? startAngle.apply(this, arguments) : startAngle);
	      var k = ((typeof endAngle === "function" ? endAngle.apply(this, arguments) : endAngle) - a) / d3.sum(values);
	      var index = d3.range(data.length);
	      if (sort != null) index.sort(sort === d3_layout_pieSortByValue ? function(i, j) {
	        return values[j] - values[i];
	      } : function(i, j) {
	        return sort(data[i], data[j]);
	      });
	      var arcs = [];
	      index.forEach(function(i) {
	        var d;
	        arcs[i] = {
	          data: data[i],
	          value: d = values[i],
	          startAngle: a,
	          endAngle: a += d * k
	        };
	      });
	      return arcs;
	    }
	    pie.value = function(x) {
	      if (!arguments.length) return value;
	      value = x;
	      return pie;
	    };
	    pie.sort = function(x) {
	      if (!arguments.length) return sort;
	      sort = x;
	      return pie;
	    };
	    pie.startAngle = function(x) {
	      if (!arguments.length) return startAngle;
	      startAngle = x;
	      return pie;
	    };
	    pie.endAngle = function(x) {
	      if (!arguments.length) return endAngle;
	      endAngle = x;
	      return pie;
	    };
	    return pie;
	  };
	  var d3_layout_pieSortByValue = {};
	  d3.layout.stack = function() {
	    var values = d3_identity, order = d3_layout_stackOrderDefault, offset = d3_layout_stackOffsetZero, out = d3_layout_stackOut, x = d3_layout_stackX, y = d3_layout_stackY;
	    function stack(data, index) {
	      var series = data.map(function(d, i) {
	        return values.call(stack, d, i);
	      });
	      var points = series.map(function(d) {
	        return d.map(function(v, i) {
	          return [ x.call(stack, v, i), y.call(stack, v, i) ];
	        });
	      });
	      var orders = order.call(stack, points, index);
	      series = d3.permute(series, orders);
	      points = d3.permute(points, orders);
	      var offsets = offset.call(stack, points, index);
	      var n = series.length, m = series[0].length, i, j, o;
	      for (j = 0; j < m; ++j) {
	        out.call(stack, series[0][j], o = offsets[j], points[0][j][1]);
	        for (i = 1; i < n; ++i) {
	          out.call(stack, series[i][j], o += points[i - 1][j][1], points[i][j][1]);
	        }
	      }
	      return data;
	    }
	    stack.values = function(x) {
	      if (!arguments.length) return values;
	      values = x;
	      return stack;
	    };
	    stack.order = function(x) {
	      if (!arguments.length) return order;
	      order = typeof x === "function" ? x : d3_layout_stackOrders.get(x) || d3_layout_stackOrderDefault;
	      return stack;
	    };
	    stack.offset = function(x) {
	      if (!arguments.length) return offset;
	      offset = typeof x === "function" ? x : d3_layout_stackOffsets.get(x) || d3_layout_stackOffsetZero;
	      return stack;
	    };
	    stack.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      return stack;
	    };
	    stack.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      return stack;
	    };
	    stack.out = function(z) {
	      if (!arguments.length) return out;
	      out = z;
	      return stack;
	    };
	    return stack;
	  };
	  function d3_layout_stackX(d) {
	    return d.x;
	  }
	  function d3_layout_stackY(d) {
	    return d.y;
	  }
	  function d3_layout_stackOut(d, y0, y) {
	    d.y0 = y0;
	    d.y = y;
	  }
	  var d3_layout_stackOrders = d3.map({
	    "inside-out": function(data) {
	      var n = data.length, i, j, max = data.map(d3_layout_stackMaxIndex), sums = data.map(d3_layout_stackReduceSum), index = d3.range(n).sort(function(a, b) {
	        return max[a] - max[b];
	      }), top = 0, bottom = 0, tops = [], bottoms = [];
	      for (i = 0; i < n; ++i) {
	        j = index[i];
	        if (top < bottom) {
	          top += sums[j];
	          tops.push(j);
	        } else {
	          bottom += sums[j];
	          bottoms.push(j);
	        }
	      }
	      return bottoms.reverse().concat(tops);
	    },
	    reverse: function(data) {
	      return d3.range(data.length).reverse();
	    },
	    "default": d3_layout_stackOrderDefault
	  });
	  var d3_layout_stackOffsets = d3.map({
	    silhouette: function(data) {
	      var n = data.length, m = data[0].length, sums = [], max = 0, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o > max) max = o;
	        sums.push(o);
	      }
	      for (j = 0; j < m; ++j) {
	        y0[j] = (max - sums[j]) / 2;
	      }
	      return y0;
	    },
	    wiggle: function(data) {
	      var n = data.length, x = data[0], m = x.length, i, j, k, s1, s2, s3, dx, o, o0, y0 = [];
	      y0[0] = o = o0 = 0;
	      for (j = 1; j < m; ++j) {
	        for (i = 0, s1 = 0; i < n; ++i) s1 += data[i][j][1];
	        for (i = 0, s2 = 0, dx = x[j][0] - x[j - 1][0]; i < n; ++i) {
	          for (k = 0, s3 = (data[i][j][1] - data[i][j - 1][1]) / (2 * dx); k < i; ++k) {
	            s3 += (data[k][j][1] - data[k][j - 1][1]) / dx;
	          }
	          s2 += s3 * data[i][j][1];
	        }
	        y0[j] = o -= s1 ? s2 / s1 * dx : 0;
	        if (o < o0) o0 = o;
	      }
	      for (j = 0; j < m; ++j) y0[j] -= o0;
	      return y0;
	    },
	    expand: function(data) {
	      var n = data.length, m = data[0].length, k = 1 / n, i, j, o, y0 = [];
	      for (j = 0; j < m; ++j) {
	        for (i = 0, o = 0; i < n; i++) o += data[i][j][1];
	        if (o) for (i = 0; i < n; i++) data[i][j][1] /= o; else for (i = 0; i < n; i++) data[i][j][1] = k;
	      }
	      for (j = 0; j < m; ++j) y0[j] = 0;
	      return y0;
	    },
	    zero: d3_layout_stackOffsetZero
	  });
	  function d3_layout_stackOrderDefault(data) {
	    return d3.range(data.length);
	  }
	  function d3_layout_stackOffsetZero(data) {
	    var j = -1, m = data[0].length, y0 = [];
	    while (++j < m) y0[j] = 0;
	    return y0;
	  }
	  function d3_layout_stackMaxIndex(array) {
	    var i = 1, j = 0, v = array[0][1], k, n = array.length;
	    for (;i < n; ++i) {
	      if ((k = array[i][1]) > v) {
	        j = i;
	        v = k;
	      }
	    }
	    return j;
	  }
	  function d3_layout_stackReduceSum(d) {
	    return d.reduce(d3_layout_stackSum, 0);
	  }
	  function d3_layout_stackSum(p, d) {
	    return p + d[1];
	  }
	  d3.layout.histogram = function() {
	    var frequency = true, valuer = Number, ranger = d3_layout_histogramRange, binner = d3_layout_histogramBinSturges;
	    function histogram(data, i) {
	      var bins = [], values = data.map(valuer, this), range = ranger.call(this, values, i), thresholds = binner.call(this, range, values, i), bin, i = -1, n = values.length, m = thresholds.length - 1, k = frequency ? 1 : 1 / n, x;
	      while (++i < m) {
	        bin = bins[i] = [];
	        bin.dx = thresholds[i + 1] - (bin.x = thresholds[i]);
	        bin.y = 0;
	      }
	      if (m > 0) {
	        i = -1;
	        while (++i < n) {
	          x = values[i];
	          if (x >= range[0] && x <= range[1]) {
	            bin = bins[d3.bisect(thresholds, x, 1, m) - 1];
	            bin.y += k;
	            bin.push(data[i]);
	          }
	        }
	      }
	      return bins;
	    }
	    histogram.value = function(x) {
	      if (!arguments.length) return valuer;
	      valuer = x;
	      return histogram;
	    };
	    histogram.range = function(x) {
	      if (!arguments.length) return ranger;
	      ranger = d3_functor(x);
	      return histogram;
	    };
	    histogram.bins = function(x) {
	      if (!arguments.length) return binner;
	      binner = typeof x === "number" ? function(range) {
	        return d3_layout_histogramBinFixed(range, x);
	      } : d3_functor(x);
	      return histogram;
	    };
	    histogram.frequency = function(x) {
	      if (!arguments.length) return frequency;
	      frequency = !!x;
	      return histogram;
	    };
	    return histogram;
	  };
	  function d3_layout_histogramBinSturges(range, values) {
	    return d3_layout_histogramBinFixed(range, Math.ceil(Math.log(values.length) / Math.LN2 + 1));
	  }
	  function d3_layout_histogramBinFixed(range, n) {
	    var x = -1, b = +range[0], m = (range[1] - b) / n, f = [];
	    while (++x <= n) f[x] = m * x + b;
	    return f;
	  }
	  function d3_layout_histogramRange(values) {
	    return [ d3.min(values), d3.max(values) ];
	  }
	  d3.layout.pack = function() {
	    var hierarchy = d3.layout.hierarchy().sort(d3_layout_packSort), padding = 0, size = [ 1, 1 ], radius;
	    function pack(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], w = size[0], h = size[1], r = radius == null ? Math.sqrt : typeof radius === "function" ? radius : function() {
	        return radius;
	      };
	      root.x = root.y = 0;
	      d3_layout_hierarchyVisitAfter(root, function(d) {
	        d.r = +r(d.value);
	      });
	      d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	      if (padding) {
	        var dr = padding * (radius ? 1 : Math.max(2 * root.r / w, 2 * root.r / h)) / 2;
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r += dr;
	        });
	        d3_layout_hierarchyVisitAfter(root, d3_layout_packSiblings);
	        d3_layout_hierarchyVisitAfter(root, function(d) {
	          d.r -= dr;
	        });
	      }
	      d3_layout_packTransform(root, w / 2, h / 2, radius ? 1 : 1 / Math.max(2 * root.r / w, 2 * root.r / h));
	      return nodes;
	    }
	    pack.size = function(_) {
	      if (!arguments.length) return size;
	      size = _;
	      return pack;
	    };
	    pack.radius = function(_) {
	      if (!arguments.length) return radius;
	      radius = _ == null || typeof _ === "function" ? _ : +_;
	      return pack;
	    };
	    pack.padding = function(_) {
	      if (!arguments.length) return padding;
	      padding = +_;
	      return pack;
	    };
	    return d3_layout_hierarchyRebind(pack, hierarchy);
	  };
	  function d3_layout_packSort(a, b) {
	    return a.value - b.value;
	  }
	  function d3_layout_packInsert(a, b) {
	    var c = a._pack_next;
	    a._pack_next = b;
	    b._pack_prev = a;
	    b._pack_next = c;
	    c._pack_prev = b;
	  }
	  function d3_layout_packSplice(a, b) {
	    a._pack_next = b;
	    b._pack_prev = a;
	  }
	  function d3_layout_packIntersects(a, b) {
	    var dx = b.x - a.x, dy = b.y - a.y, dr = a.r + b.r;
	    return .999 * dr * dr > dx * dx + dy * dy;
	  }
	  function d3_layout_packSiblings(node) {
	    if (!(nodes = node.children) || !(n = nodes.length)) return;
	    var nodes, xMin = Infinity, xMax = -Infinity, yMin = Infinity, yMax = -Infinity, a, b, c, i, j, k, n;
	    function bound(node) {
	      xMin = Math.min(node.x - node.r, xMin);
	      xMax = Math.max(node.x + node.r, xMax);
	      yMin = Math.min(node.y - node.r, yMin);
	      yMax = Math.max(node.y + node.r, yMax);
	    }
	    nodes.forEach(d3_layout_packLink);
	    a = nodes[0];
	    a.x = -a.r;
	    a.y = 0;
	    bound(a);
	    if (n > 1) {
	      b = nodes[1];
	      b.x = b.r;
	      b.y = 0;
	      bound(b);
	      if (n > 2) {
	        c = nodes[2];
	        d3_layout_packPlace(a, b, c);
	        bound(c);
	        d3_layout_packInsert(a, c);
	        a._pack_prev = c;
	        d3_layout_packInsert(c, b);
	        b = a._pack_next;
	        for (i = 3; i < n; i++) {
	          d3_layout_packPlace(a, b, c = nodes[i]);
	          var isect = 0, s1 = 1, s2 = 1;
	          for (j = b._pack_next; j !== b; j = j._pack_next, s1++) {
	            if (d3_layout_packIntersects(j, c)) {
	              isect = 1;
	              break;
	            }
	          }
	          if (isect == 1) {
	            for (k = a._pack_prev; k !== j._pack_prev; k = k._pack_prev, s2++) {
	              if (d3_layout_packIntersects(k, c)) {
	                break;
	              }
	            }
	          }
	          if (isect) {
	            if (s1 < s2 || s1 == s2 && b.r < a.r) d3_layout_packSplice(a, b = j); else d3_layout_packSplice(a = k, b);
	            i--;
	          } else {
	            d3_layout_packInsert(a, c);
	            b = c;
	            bound(c);
	          }
	        }
	      }
	    }
	    var cx = (xMin + xMax) / 2, cy = (yMin + yMax) / 2, cr = 0;
	    for (i = 0; i < n; i++) {
	      c = nodes[i];
	      c.x -= cx;
	      c.y -= cy;
	      cr = Math.max(cr, c.r + Math.sqrt(c.x * c.x + c.y * c.y));
	    }
	    node.r = cr;
	    nodes.forEach(d3_layout_packUnlink);
	  }
	  function d3_layout_packLink(node) {
	    node._pack_next = node._pack_prev = node;
	  }
	  function d3_layout_packUnlink(node) {
	    delete node._pack_next;
	    delete node._pack_prev;
	  }
	  function d3_layout_packTransform(node, x, y, k) {
	    var children = node.children;
	    node.x = x += k * node.x;
	    node.y = y += k * node.y;
	    node.r *= k;
	    if (children) {
	      var i = -1, n = children.length;
	      while (++i < n) d3_layout_packTransform(children[i], x, y, k);
	    }
	  }
	  function d3_layout_packPlace(a, b, c) {
	    var db = a.r + c.r, dx = b.x - a.x, dy = b.y - a.y;
	    if (db && (dx || dy)) {
	      var da = b.r + c.r, dc = dx * dx + dy * dy;
	      da *= da;
	      db *= db;
	      var x = .5 + (db - da) / (2 * dc), y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
	      c.x = a.x + x * dx + y * dy;
	      c.y = a.y + x * dy - y * dx;
	    } else {
	      c.x = a.x + db;
	      c.y = a.y;
	    }
	  }
	  d3.layout.tree = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = null;
	    function tree(d, i) {
	      var nodes = hierarchy.call(this, d, i), root0 = nodes[0], root1 = wrapTree(root0);
	      d3_layout_hierarchyVisitAfter(root1, firstWalk), root1.parent.m = -root1.z;
	      d3_layout_hierarchyVisitBefore(root1, secondWalk);
	      if (nodeSize) d3_layout_hierarchyVisitBefore(root0, sizeNode); else {
	        var left = root0, right = root0, bottom = root0;
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          if (node.x < left.x) left = node;
	          if (node.x > right.x) right = node;
	          if (node.depth > bottom.depth) bottom = node;
	        });
	        var tx = separation(left, right) / 2 - left.x, kx = size[0] / (right.x + separation(right, left) / 2 + tx), ky = size[1] / (bottom.depth || 1);
	        d3_layout_hierarchyVisitBefore(root0, function(node) {
	          node.x = (node.x + tx) * kx;
	          node.y = node.depth * ky;
	        });
	      }
	      return nodes;
	    }
	    function wrapTree(root0) {
	      var root1 = {
	        A: null,
	        children: [ root0 ]
	      }, queue = [ root1 ], node1;
	      while ((node1 = queue.pop()) != null) {
	        for (var children = node1.children, child, i = 0, n = children.length; i < n; ++i) {
	          queue.push((children[i] = child = {
	            _: children[i],
	            parent: node1,
	            children: (child = children[i].children) && child.slice() || [],
	            A: null,
	            a: null,
	            z: 0,
	            m: 0,
	            c: 0,
	            s: 0,
	            t: null,
	            i: i
	          }).a = child);
	        }
	      }
	      return root1.children[0];
	    }
	    function firstWalk(v) {
	      var children = v.children, siblings = v.parent.children, w = v.i ? siblings[v.i - 1] : null;
	      if (children.length) {
	        d3_layout_treeShift(v);
	        var midpoint = (children[0].z + children[children.length - 1].z) / 2;
	        if (w) {
	          v.z = w.z + separation(v._, w._);
	          v.m = v.z - midpoint;
	        } else {
	          v.z = midpoint;
	        }
	      } else if (w) {
	        v.z = w.z + separation(v._, w._);
	      }
	      v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
	    }
	    function secondWalk(v) {
	      v._.x = v.z + v.parent.m;
	      v.m += v.parent.m;
	    }
	    function apportion(v, w, ancestor) {
	      if (w) {
	        var vip = v, vop = v, vim = w, vom = vip.parent.children[0], sip = vip.m, sop = vop.m, sim = vim.m, som = vom.m, shift;
	        while (vim = d3_layout_treeRight(vim), vip = d3_layout_treeLeft(vip), vim && vip) {
	          vom = d3_layout_treeLeft(vom);
	          vop = d3_layout_treeRight(vop);
	          vop.a = v;
	          shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
	          if (shift > 0) {
	            d3_layout_treeMove(d3_layout_treeAncestor(vim, v, ancestor), v, shift);
	            sip += shift;
	            sop += shift;
	          }
	          sim += vim.m;
	          sip += vip.m;
	          som += vom.m;
	          sop += vop.m;
	        }
	        if (vim && !d3_layout_treeRight(vop)) {
	          vop.t = vim;
	          vop.m += sim - sop;
	        }
	        if (vip && !d3_layout_treeLeft(vom)) {
	          vom.t = vip;
	          vom.m += sip - som;
	          ancestor = v;
	        }
	      }
	      return ancestor;
	    }
	    function sizeNode(node) {
	      node.x *= size[0];
	      node.y = node.depth * size[1];
	    }
	    tree.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return tree;
	    };
	    tree.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null ? sizeNode : null;
	      return tree;
	    };
	    tree.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) == null ? null : sizeNode;
	      return tree;
	    };
	    return d3_layout_hierarchyRebind(tree, hierarchy);
	  };
	  function d3_layout_treeSeparation(a, b) {
	    return a.parent == b.parent ? 1 : 2;
	  }
	  function d3_layout_treeLeft(v) {
	    var children = v.children;
	    return children.length ? children[0] : v.t;
	  }
	  function d3_layout_treeRight(v) {
	    var children = v.children, n;
	    return (n = children.length) ? children[n - 1] : v.t;
	  }
	  function d3_layout_treeMove(wm, wp, shift) {
	    var change = shift / (wp.i - wm.i);
	    wp.c -= change;
	    wp.s += shift;
	    wm.c += change;
	    wp.z += shift;
	    wp.m += shift;
	  }
	  function d3_layout_treeShift(v) {
	    var shift = 0, change = 0, children = v.children, i = children.length, w;
	    while (--i >= 0) {
	      w = children[i];
	      w.z += shift;
	      w.m += shift;
	      shift += w.s + (change += w.c);
	    }
	  }
	  function d3_layout_treeAncestor(vim, v, ancestor) {
	    return vim.a.parent === v.parent ? vim.a : ancestor;
	  }
	  d3.layout.cluster = function() {
	    var hierarchy = d3.layout.hierarchy().sort(null).value(null), separation = d3_layout_treeSeparation, size = [ 1, 1 ], nodeSize = false;
	    function cluster(d, i) {
	      var nodes = hierarchy.call(this, d, i), root = nodes[0], previousNode, x = 0;
	      d3_layout_hierarchyVisitAfter(root, function(node) {
	        var children = node.children;
	        if (children && children.length) {
	          node.x = d3_layout_clusterX(children);
	          node.y = d3_layout_clusterY(children);
	        } else {
	          node.x = previousNode ? x += separation(node, previousNode) : 0;
	          node.y = 0;
	          previousNode = node;
	        }
	      });
	      var left = d3_layout_clusterLeft(root), right = d3_layout_clusterRight(root), x0 = left.x - separation(left, right) / 2, x1 = right.x + separation(right, left) / 2;
	      d3_layout_hierarchyVisitAfter(root, nodeSize ? function(node) {
	        node.x = (node.x - root.x) * size[0];
	        node.y = (root.y - node.y) * size[1];
	      } : function(node) {
	        node.x = (node.x - x0) / (x1 - x0) * size[0];
	        node.y = (1 - (root.y ? node.y / root.y : 1)) * size[1];
	      });
	      return nodes;
	    }
	    cluster.separation = function(x) {
	      if (!arguments.length) return separation;
	      separation = x;
	      return cluster;
	    };
	    cluster.size = function(x) {
	      if (!arguments.length) return nodeSize ? null : size;
	      nodeSize = (size = x) == null;
	      return cluster;
	    };
	    cluster.nodeSize = function(x) {
	      if (!arguments.length) return nodeSize ? size : null;
	      nodeSize = (size = x) != null;
	      return cluster;
	    };
	    return d3_layout_hierarchyRebind(cluster, hierarchy);
	  };
	  function d3_layout_clusterY(children) {
	    return 1 + d3.max(children, function(child) {
	      return child.y;
	    });
	  }
	  function d3_layout_clusterX(children) {
	    return children.reduce(function(x, child) {
	      return x + child.x;
	    }, 0) / children.length;
	  }
	  function d3_layout_clusterLeft(node) {
	    var children = node.children;
	    return children && children.length ? d3_layout_clusterLeft(children[0]) : node;
	  }
	  function d3_layout_clusterRight(node) {
	    var children = node.children, n;
	    return children && (n = children.length) ? d3_layout_clusterRight(children[n - 1]) : node;
	  }
	  d3.layout.treemap = function() {
	    var hierarchy = d3.layout.hierarchy(), round = Math.round, size = [ 1, 1 ], padding = null, pad = d3_layout_treemapPadNull, sticky = false, stickies, mode = "squarify", ratio = .5 * (1 + Math.sqrt(5));
	    function scale(children, k) {
	      var i = -1, n = children.length, child, area;
	      while (++i < n) {
	        area = (child = children[i]).value * (k < 0 ? 0 : k);
	        child.area = isNaN(area) || area <= 0 ? 0 : area;
	      }
	    }
	    function squarify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), row = [], remaining = children.slice(), child, best = Infinity, score, u = mode === "slice" ? rect.dx : mode === "dice" ? rect.dy : mode === "slice-dice" ? node.depth & 1 ? rect.dy : rect.dx : Math.min(rect.dx, rect.dy), n;
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while ((n = remaining.length) > 0) {
	          row.push(child = remaining[n - 1]);
	          row.area += child.area;
	          if (mode !== "squarify" || (score = worst(row, u)) <= best) {
	            remaining.pop();
	            best = score;
	          } else {
	            row.area -= row.pop().area;
	            position(row, u, rect, false);
	            u = Math.min(rect.dx, rect.dy);
	            row.length = row.area = 0;
	            best = Infinity;
	          }
	        }
	        if (row.length) {
	          position(row, u, rect, true);
	          row.length = row.area = 0;
	        }
	        children.forEach(squarify);
	      }
	    }
	    function stickify(node) {
	      var children = node.children;
	      if (children && children.length) {
	        var rect = pad(node), remaining = children.slice(), child, row = [];
	        scale(remaining, rect.dx * rect.dy / node.value);
	        row.area = 0;
	        while (child = remaining.pop()) {
	          row.push(child);
	          row.area += child.area;
	          if (child.z != null) {
	            position(row, child.z ? rect.dx : rect.dy, rect, !remaining.length);
	            row.length = row.area = 0;
	          }
	        }
	        children.forEach(stickify);
	      }
	    }
	    function worst(row, u) {
	      var s = row.area, r, rmax = 0, rmin = Infinity, i = -1, n = row.length;
	      while (++i < n) {
	        if (!(r = row[i].area)) continue;
	        if (r < rmin) rmin = r;
	        if (r > rmax) rmax = r;
	      }
	      s *= s;
	      u *= u;
	      return s ? Math.max(u * rmax * ratio / s, s / (u * rmin * ratio)) : Infinity;
	    }
	    function position(row, u, rect, flush) {
	      var i = -1, n = row.length, x = rect.x, y = rect.y, v = u ? round(row.area / u) : 0, o;
	      if (u == rect.dx) {
	        if (flush || v > rect.dy) v = rect.dy;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dy = v;
	          x += o.dx = Math.min(rect.x + rect.dx - x, v ? round(o.area / v) : 0);
	        }
	        o.z = true;
	        o.dx += rect.x + rect.dx - x;
	        rect.y += v;
	        rect.dy -= v;
	      } else {
	        if (flush || v > rect.dx) v = rect.dx;
	        while (++i < n) {
	          o = row[i];
	          o.x = x;
	          o.y = y;
	          o.dx = v;
	          y += o.dy = Math.min(rect.y + rect.dy - y, v ? round(o.area / v) : 0);
	        }
	        o.z = false;
	        o.dy += rect.y + rect.dy - y;
	        rect.x += v;
	        rect.dx -= v;
	      }
	    }
	    function treemap(d) {
	      var nodes = stickies || hierarchy(d), root = nodes[0];
	      root.x = 0;
	      root.y = 0;
	      root.dx = size[0];
	      root.dy = size[1];
	      if (stickies) hierarchy.revalue(root);
	      scale([ root ], root.dx * root.dy / root.value);
	      (stickies ? stickify : squarify)(root);
	      if (sticky) stickies = nodes;
	      return nodes;
	    }
	    treemap.size = function(x) {
	      if (!arguments.length) return size;
	      size = x;
	      return treemap;
	    };
	    treemap.padding = function(x) {
	      if (!arguments.length) return padding;
	      function padFunction(node) {
	        var p = x.call(treemap, node, node.depth);
	        return p == null ? d3_layout_treemapPadNull(node) : d3_layout_treemapPad(node, typeof p === "number" ? [ p, p, p, p ] : p);
	      }
	      function padConstant(node) {
	        return d3_layout_treemapPad(node, x);
	      }
	      var type;
	      pad = (padding = x) == null ? d3_layout_treemapPadNull : (type = typeof x) === "function" ? padFunction : type === "number" ? (x = [ x, x, x, x ], 
	      padConstant) : padConstant;
	      return treemap;
	    };
	    treemap.round = function(x) {
	      if (!arguments.length) return round != Number;
	      round = x ? Math.round : Number;
	      return treemap;
	    };
	    treemap.sticky = function(x) {
	      if (!arguments.length) return sticky;
	      sticky = x;
	      stickies = null;
	      return treemap;
	    };
	    treemap.ratio = function(x) {
	      if (!arguments.length) return ratio;
	      ratio = x;
	      return treemap;
	    };
	    treemap.mode = function(x) {
	      if (!arguments.length) return mode;
	      mode = x + "";
	      return treemap;
	    };
	    return d3_layout_hierarchyRebind(treemap, hierarchy);
	  };
	  function d3_layout_treemapPadNull(node) {
	    return {
	      x: node.x,
	      y: node.y,
	      dx: node.dx,
	      dy: node.dy
	    };
	  }
	  function d3_layout_treemapPad(node, padding) {
	    var x = node.x + padding[3], y = node.y + padding[0], dx = node.dx - padding[1] - padding[3], dy = node.dy - padding[0] - padding[2];
	    if (dx < 0) {
	      x += dx / 2;
	      dx = 0;
	    }
	    if (dy < 0) {
	      y += dy / 2;
	      dy = 0;
	    }
	    return {
	      x: x,
	      y: y,
	      dx: dx,
	      dy: dy
	    };
	  }
	  d3.random = {
	    normal: function(µ, σ) {
	      var n = arguments.length;
	      if (n < 2) σ = 1;
	      if (n < 1) µ = 0;
	      return function() {
	        var x, y, r;
	        do {
	          x = Math.random() * 2 - 1;
	          y = Math.random() * 2 - 1;
	          r = x * x + y * y;
	        } while (!r || r > 1);
	        return µ + σ * x * Math.sqrt(-2 * Math.log(r) / r);
	      };
	    },
	    logNormal: function() {
	      var random = d3.random.normal.apply(d3, arguments);
	      return function() {
	        return Math.exp(random());
	      };
	    },
	    bates: function(m) {
	      var random = d3.random.irwinHall(m);
	      return function() {
	        return random() / m;
	      };
	    },
	    irwinHall: function(m) {
	      return function() {
	        for (var s = 0, j = 0; j < m; j++) s += Math.random();
	        return s;
	      };
	    }
	  };
	  d3.scale = {};
	  function d3_scaleExtent(domain) {
	    var start = domain[0], stop = domain[domain.length - 1];
	    return start < stop ? [ start, stop ] : [ stop, start ];
	  }
	  function d3_scaleRange(scale) {
	    return scale.rangeExtent ? scale.rangeExtent() : d3_scaleExtent(scale.range());
	  }
	  function d3_scale_bilinear(domain, range, uninterpolate, interpolate) {
	    var u = uninterpolate(domain[0], domain[1]), i = interpolate(range[0], range[1]);
	    return function(x) {
	      return i(u(x));
	    };
	  }
	  function d3_scale_nice(domain, nice) {
	    var i0 = 0, i1 = domain.length - 1, x0 = domain[i0], x1 = domain[i1], dx;
	    if (x1 < x0) {
	      dx = i0, i0 = i1, i1 = dx;
	      dx = x0, x0 = x1, x1 = dx;
	    }
	    domain[i0] = nice.floor(x0);
	    domain[i1] = nice.ceil(x1);
	    return domain;
	  }
	  function d3_scale_niceStep(step) {
	    return step ? {
	      floor: function(x) {
	        return Math.floor(x / step) * step;
	      },
	      ceil: function(x) {
	        return Math.ceil(x / step) * step;
	      }
	    } : d3_scale_niceIdentity;
	  }
	  var d3_scale_niceIdentity = {
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  function d3_scale_polylinear(domain, range, uninterpolate, interpolate) {
	    var u = [], i = [], j = 0, k = Math.min(domain.length, range.length) - 1;
	    if (domain[k] < domain[0]) {
	      domain = domain.slice().reverse();
	      range = range.slice().reverse();
	    }
	    while (++j <= k) {
	      u.push(uninterpolate(domain[j - 1], domain[j]));
	      i.push(interpolate(range[j - 1], range[j]));
	    }
	    return function(x) {
	      var j = d3.bisect(domain, x, 1, k) - 1;
	      return i[j](u[j](x));
	    };
	  }
	  d3.scale.linear = function() {
	    return d3_scale_linear([ 0, 1 ], [ 0, 1 ], d3_interpolate, false);
	  };
	  function d3_scale_linear(domain, range, interpolate, clamp) {
	    var output, input;
	    function rescale() {
	      var linear = Math.min(domain.length, range.length) > 2 ? d3_scale_polylinear : d3_scale_bilinear, uninterpolate = clamp ? d3_uninterpolateClamp : d3_uninterpolateNumber;
	      output = linear(domain, range, uninterpolate, interpolate);
	      input = linear(range, domain, uninterpolate, d3_interpolate);
	      return scale;
	    }
	    function scale(x) {
	      return output(x);
	    }
	    scale.invert = function(y) {
	      return input(y);
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(Number);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.rangeRound = function(x) {
	      return scale.range(x).interpolate(d3_interpolateRound);
	    };
	    scale.clamp = function(x) {
	      if (!arguments.length) return clamp;
	      clamp = x;
	      return rescale();
	    };
	    scale.interpolate = function(x) {
	      if (!arguments.length) return interpolate;
	      interpolate = x;
	      return rescale();
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      d3_scale_linearNice(domain, m);
	      return rescale();
	    };
	    scale.copy = function() {
	      return d3_scale_linear(domain, range, interpolate, clamp);
	    };
	    return rescale();
	  }
	  function d3_scale_linearRebind(scale, linear) {
	    return d3.rebind(scale, linear, "range", "rangeRound", "interpolate", "clamp");
	  }
	  function d3_scale_linearNice(domain, m) {
	    return d3_scale_nice(domain, d3_scale_niceStep(d3_scale_linearTickRange(domain, m)[2]));
	  }
	  function d3_scale_linearTickRange(domain, m) {
	    if (m == null) m = 10;
	    var extent = d3_scaleExtent(domain), span = extent[1] - extent[0], step = Math.pow(10, Math.floor(Math.log(span / m) / Math.LN10)), err = m / span * step;
	    if (err <= .15) step *= 10; else if (err <= .35) step *= 5; else if (err <= .75) step *= 2;
	    extent[0] = Math.ceil(extent[0] / step) * step;
	    extent[1] = Math.floor(extent[1] / step) * step + step * .5;
	    extent[2] = step;
	    return extent;
	  }
	  function d3_scale_linearTicks(domain, m) {
	    return d3.range.apply(d3, d3_scale_linearTickRange(domain, m));
	  }
	  function d3_scale_linearTickFormat(domain, m, format) {
	    var range = d3_scale_linearTickRange(domain, m);
	    if (format) {
	      var match = d3_format_re.exec(format);
	      match.shift();
	      if (match[8] === "s") {
	        var prefix = d3.formatPrefix(Math.max(abs(range[0]), abs(range[1])));
	        if (!match[7]) match[7] = "." + d3_scale_linearPrecision(prefix.scale(range[2]));
	        match[8] = "f";
	        format = d3.format(match.join(""));
	        return function(d) {
	          return format(prefix.scale(d)) + prefix.symbol;
	        };
	      }
	      if (!match[7]) match[7] = "." + d3_scale_linearFormatPrecision(match[8], range);
	      format = match.join("");
	    } else {
	      format = ",." + d3_scale_linearPrecision(range[2]) + "f";
	    }
	    return d3.format(format);
	  }
	  var d3_scale_linearFormatSignificant = {
	    s: 1,
	    g: 1,
	    p: 1,
	    r: 1,
	    e: 1
	  };
	  function d3_scale_linearPrecision(value) {
	    return -Math.floor(Math.log(value) / Math.LN10 + .01);
	  }
	  function d3_scale_linearFormatPrecision(type, range) {
	    var p = d3_scale_linearPrecision(range[2]);
	    return type in d3_scale_linearFormatSignificant ? Math.abs(p - d3_scale_linearPrecision(Math.max(abs(range[0]), abs(range[1])))) + +(type !== "e") : p - (type === "%") * 2;
	  }
	  d3.scale.log = function() {
	    return d3_scale_log(d3.scale.linear().domain([ 0, 1 ]), 10, true, [ 1, 10 ]);
	  };
	  function d3_scale_log(linear, base, positive, domain) {
	    function log(x) {
	      return (positive ? Math.log(x < 0 ? 0 : x) : -Math.log(x > 0 ? 0 : -x)) / Math.log(base);
	    }
	    function pow(x) {
	      return positive ? Math.pow(base, x) : -Math.pow(base, -x);
	    }
	    function scale(x) {
	      return linear(log(x));
	    }
	    scale.invert = function(x) {
	      return pow(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      positive = x[0] >= 0;
	      linear.domain((domain = x.map(Number)).map(log));
	      return scale;
	    };
	    scale.base = function(_) {
	      if (!arguments.length) return base;
	      base = +_;
	      linear.domain(domain.map(log));
	      return scale;
	    };
	    scale.nice = function() {
	      var niced = d3_scale_nice(domain.map(log), positive ? Math : d3_scale_logNiceNegative);
	      linear.domain(niced);
	      domain = niced.map(pow);
	      return scale;
	    };
	    scale.ticks = function() {
	      var extent = d3_scaleExtent(domain), ticks = [], u = extent[0], v = extent[1], i = Math.floor(log(u)), j = Math.ceil(log(v)), n = base % 1 ? 2 : base;
	      if (isFinite(j - i)) {
	        if (positive) {
	          for (;i < j; i++) for (var k = 1; k < n; k++) ticks.push(pow(i) * k);
	          ticks.push(pow(i));
	        } else {
	          ticks.push(pow(i));
	          for (;i++ < j; ) for (var k = n - 1; k > 0; k--) ticks.push(pow(i) * k);
	        }
	        for (i = 0; ticks[i] < u; i++) {}
	        for (j = ticks.length; ticks[j - 1] > v; j--) {}
	        ticks = ticks.slice(i, j);
	      }
	      return ticks;
	    };
	    scale.tickFormat = function(n, format) {
	      if (!arguments.length) return d3_scale_logFormat;
	      if (arguments.length < 2) format = d3_scale_logFormat; else if (typeof format !== "function") format = d3.format(format);
	      var k = Math.max(.1, n / scale.ticks().length), f = positive ? (e = 1e-12, Math.ceil) : (e = -1e-12, 
	      Math.floor), e;
	      return function(d) {
	        return d / pow(f(log(d) + e)) <= k ? format(d) : "";
	      };
	    };
	    scale.copy = function() {
	      return d3_scale_log(linear.copy(), base, positive, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  var d3_scale_logFormat = d3.format(".0e"), d3_scale_logNiceNegative = {
	    floor: function(x) {
	      return -Math.ceil(-x);
	    },
	    ceil: function(x) {
	      return -Math.floor(-x);
	    }
	  };
	  d3.scale.pow = function() {
	    return d3_scale_pow(d3.scale.linear(), 1, [ 0, 1 ]);
	  };
	  function d3_scale_pow(linear, exponent, domain) {
	    var powp = d3_scale_powPow(exponent), powb = d3_scale_powPow(1 / exponent);
	    function scale(x) {
	      return linear(powp(x));
	    }
	    scale.invert = function(x) {
	      return powb(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      linear.domain((domain = x.map(Number)).map(powp));
	      return scale;
	    };
	    scale.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    scale.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    scale.nice = function(m) {
	      return scale.domain(d3_scale_linearNice(domain, m));
	    };
	    scale.exponent = function(x) {
	      if (!arguments.length) return exponent;
	      powp = d3_scale_powPow(exponent = x);
	      powb = d3_scale_powPow(1 / exponent);
	      linear.domain(domain.map(powp));
	      return scale;
	    };
	    scale.copy = function() {
	      return d3_scale_pow(linear.copy(), exponent, domain);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_scale_powPow(e) {
	    return function(x) {
	      return x < 0 ? -Math.pow(-x, e) : Math.pow(x, e);
	    };
	  }
	  d3.scale.sqrt = function() {
	    return d3.scale.pow().exponent(.5);
	  };
	  d3.scale.ordinal = function() {
	    return d3_scale_ordinal([], {
	      t: "range",
	      a: [ [] ]
	    });
	  };
	  function d3_scale_ordinal(domain, ranger) {
	    var index, range, rangeBand;
	    function scale(x) {
	      return range[((index.get(x) || (ranger.t === "range" ? index.set(x, domain.push(x)) : NaN)) - 1) % range.length];
	    }
	    function steps(start, step) {
	      return d3.range(domain.length).map(function(i) {
	        return start + step * i;
	      });
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = [];
	      index = new d3_Map();
	      var i = -1, n = x.length, xi;
	      while (++i < n) if (!index.has(xi = x[i])) index.set(xi, domain.push(xi));
	      return scale[ranger.t].apply(scale, ranger.a);
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      rangeBand = 0;
	      ranger = {
	        t: "range",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangePoints = function(x, padding) {
	      if (arguments.length < 2) padding = 0;
	      var start = x[0], stop = x[1], step = (stop - start) / (Math.max(1, domain.length - 1) + padding);
	      range = steps(domain.length < 2 ? (start + stop) / 2 : start + step * padding / 2, step);
	      rangeBand = 0;
	      ranger = {
	        t: "rangePoints",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = (stop - start) / (domain.length - padding + 2 * outerPadding);
	      range = steps(start + step * outerPadding, step);
	      if (reverse) range.reverse();
	      rangeBand = step * (1 - padding);
	      ranger = {
	        t: "rangeBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeRoundBands = function(x, padding, outerPadding) {
	      if (arguments.length < 2) padding = 0;
	      if (arguments.length < 3) outerPadding = padding;
	      var reverse = x[1] < x[0], start = x[reverse - 0], stop = x[1 - reverse], step = Math.floor((stop - start) / (domain.length - padding + 2 * outerPadding)), error = stop - start - (domain.length - padding) * step;
	      range = steps(start + Math.round(error / 2), step);
	      if (reverse) range.reverse();
	      rangeBand = Math.round(step * (1 - padding));
	      ranger = {
	        t: "rangeRoundBands",
	        a: arguments
	      };
	      return scale;
	    };
	    scale.rangeBand = function() {
	      return rangeBand;
	    };
	    scale.rangeExtent = function() {
	      return d3_scaleExtent(ranger.a[0]);
	    };
	    scale.copy = function() {
	      return d3_scale_ordinal(domain, ranger);
	    };
	    return scale.domain(domain);
	  }
	  d3.scale.category10 = function() {
	    return d3.scale.ordinal().range(d3_category10);
	  };
	  d3.scale.category20 = function() {
	    return d3.scale.ordinal().range(d3_category20);
	  };
	  d3.scale.category20b = function() {
	    return d3.scale.ordinal().range(d3_category20b);
	  };
	  d3.scale.category20c = function() {
	    return d3.scale.ordinal().range(d3_category20c);
	  };
	  var d3_category10 = [ 2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175 ].map(d3_rgbString);
	  var d3_category20 = [ 2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725 ].map(d3_rgbString);
	  var d3_category20b = [ 3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654 ].map(d3_rgbString);
	  var d3_category20c = [ 3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081 ].map(d3_rgbString);
	  d3.scale.quantile = function() {
	    return d3_scale_quantile([], []);
	  };
	  function d3_scale_quantile(domain, range) {
	    var thresholds;
	    function rescale() {
	      var k = 0, q = range.length;
	      thresholds = [];
	      while (++k < q) thresholds[k - 1] = d3.quantile(domain, k / q);
	      return scale;
	    }
	    function scale(x) {
	      if (!isNaN(x = +x)) return range[d3.bisect(thresholds, x)];
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.filter(d3_number).sort(d3_ascending);
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.quantiles = function() {
	      return thresholds;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return y < 0 ? [ NaN, NaN ] : [ y > 0 ? thresholds[y - 1] : domain[0], y < thresholds.length ? thresholds[y] : domain[domain.length - 1] ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantile(domain, range);
	    };
	    return rescale();
	  }
	  d3.scale.quantize = function() {
	    return d3_scale_quantize(0, 1, [ 0, 1 ]);
	  };
	  function d3_scale_quantize(x0, x1, range) {
	    var kx, i;
	    function scale(x) {
	      return range[Math.max(0, Math.min(i, Math.floor(kx * (x - x0))))];
	    }
	    function rescale() {
	      kx = range.length / (x1 - x0);
	      i = range.length - 1;
	      return scale;
	    }
	    scale.domain = function(x) {
	      if (!arguments.length) return [ x0, x1 ];
	      x0 = +x[0];
	      x1 = +x[x.length - 1];
	      return rescale();
	    };
	    scale.range = function(x) {
	      if (!arguments.length) return range;
	      range = x;
	      return rescale();
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      y = y < 0 ? NaN : y / kx + x0;
	      return [ y, y + 1 / kx ];
	    };
	    scale.copy = function() {
	      return d3_scale_quantize(x0, x1, range);
	    };
	    return rescale();
	  }
	  d3.scale.threshold = function() {
	    return d3_scale_threshold([ .5 ], [ 0, 1 ]);
	  };
	  function d3_scale_threshold(domain, range) {
	    function scale(x) {
	      if (x <= x) return range[d3.bisect(domain, x)];
	    }
	    scale.domain = function(_) {
	      if (!arguments.length) return domain;
	      domain = _;
	      return scale;
	    };
	    scale.range = function(_) {
	      if (!arguments.length) return range;
	      range = _;
	      return scale;
	    };
	    scale.invertExtent = function(y) {
	      y = range.indexOf(y);
	      return [ domain[y - 1], domain[y] ];
	    };
	    scale.copy = function() {
	      return d3_scale_threshold(domain, range);
	    };
	    return scale;
	  }
	  d3.scale.identity = function() {
	    return d3_scale_identity([ 0, 1 ]);
	  };
	  function d3_scale_identity(domain) {
	    function identity(x) {
	      return +x;
	    }
	    identity.invert = identity;
	    identity.domain = identity.range = function(x) {
	      if (!arguments.length) return domain;
	      domain = x.map(identity);
	      return identity;
	    };
	    identity.ticks = function(m) {
	      return d3_scale_linearTicks(domain, m);
	    };
	    identity.tickFormat = function(m, format) {
	      return d3_scale_linearTickFormat(domain, m, format);
	    };
	    identity.copy = function() {
	      return d3_scale_identity(domain);
	    };
	    return identity;
	  }
	  d3.svg = {};
	  d3.svg.arc = function() {
	    var innerRadius = d3_svg_arcInnerRadius, outerRadius = d3_svg_arcOuterRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
	    function arc() {
	      var r0 = innerRadius.apply(this, arguments), r1 = outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) + d3_svg_arcOffset, a1 = endAngle.apply(this, arguments) + d3_svg_arcOffset, da = (a1 < a0 && (da = a0, 
	      a0 = a1, a1 = da), a1 - a0), df = da < π ? "0" : "1", c0 = Math.cos(a0), s0 = Math.sin(a0), c1 = Math.cos(a1), s1 = Math.sin(a1);
	      return da >= d3_svg_arcMax ? r0 ? "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "M0," + r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + -r0 + "A" + r0 + "," + r0 + " 0 1,0 0," + r0 + "Z" : "M0," + r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + -r1 + "A" + r1 + "," + r1 + " 0 1,1 0," + r1 + "Z" : r0 ? "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L" + r0 * c1 + "," + r0 * s1 + "A" + r0 + "," + r0 + " 0 " + df + ",0 " + r0 * c0 + "," + r0 * s0 + "Z" : "M" + r1 * c0 + "," + r1 * s0 + "A" + r1 + "," + r1 + " 0 " + df + ",1 " + r1 * c1 + "," + r1 * s1 + "L0,0" + "Z";
	    }
	    arc.innerRadius = function(v) {
	      if (!arguments.length) return innerRadius;
	      innerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.outerRadius = function(v) {
	      if (!arguments.length) return outerRadius;
	      outerRadius = d3_functor(v);
	      return arc;
	    };
	    arc.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return arc;
	    };
	    arc.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return arc;
	    };
	    arc.centroid = function() {
	      var r = (innerRadius.apply(this, arguments) + outerRadius.apply(this, arguments)) / 2, a = (startAngle.apply(this, arguments) + endAngle.apply(this, arguments)) / 2 + d3_svg_arcOffset;
	      return [ Math.cos(a) * r, Math.sin(a) * r ];
	    };
	    return arc;
	  };
	  var d3_svg_arcOffset = -halfπ, d3_svg_arcMax = τ - ε;
	  function d3_svg_arcInnerRadius(d) {
	    return d.innerRadius;
	  }
	  function d3_svg_arcOuterRadius(d) {
	    return d.outerRadius;
	  }
	  function d3_svg_arcStartAngle(d) {
	    return d.startAngle;
	  }
	  function d3_svg_arcEndAngle(d) {
	    return d.endAngle;
	  }
	  function d3_svg_line(projection) {
	    var x = d3_geom_pointX, y = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, tension = .7;
	    function line(data) {
	      var segments = [], points = [], i = -1, n = data.length, d, fx = d3_functor(x), fy = d3_functor(y);
	      function segment() {
	        segments.push("M", interpolate(projection(points), tension));
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points.push([ +fx.call(this, d, i), +fy.call(this, d, i) ]);
	        } else if (points.length) {
	          segment();
	          points = [];
	        }
	      }
	      if (points.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    line.x = function(_) {
	      if (!arguments.length) return x;
	      x = _;
	      return line;
	    };
	    line.y = function(_) {
	      if (!arguments.length) return y;
	      y = _;
	      return line;
	    };
	    line.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return line;
	    };
	    line.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      return line;
	    };
	    line.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return line;
	    };
	    return line;
	  }
	  d3.svg.line = function() {
	    return d3_svg_line(d3_identity);
	  };
	  var d3_svg_lineInterpolators = d3.map({
	    linear: d3_svg_lineLinear,
	    "linear-closed": d3_svg_lineLinearClosed,
	    step: d3_svg_lineStep,
	    "step-before": d3_svg_lineStepBefore,
	    "step-after": d3_svg_lineStepAfter,
	    basis: d3_svg_lineBasis,
	    "basis-open": d3_svg_lineBasisOpen,
	    "basis-closed": d3_svg_lineBasisClosed,
	    bundle: d3_svg_lineBundle,
	    cardinal: d3_svg_lineCardinal,
	    "cardinal-open": d3_svg_lineCardinalOpen,
	    "cardinal-closed": d3_svg_lineCardinalClosed,
	    monotone: d3_svg_lineMonotone
	  });
	  d3_svg_lineInterpolators.forEach(function(key, value) {
	    value.key = key;
	    value.closed = /-closed$/.test(key);
	  });
	  function d3_svg_lineLinear(points) {
	    return points.join("L");
	  }
	  function d3_svg_lineLinearClosed(points) {
	    return d3_svg_lineLinear(points) + "Z";
	  }
	  function d3_svg_lineStep(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p[0] + (p = points[i])[0]) / 2, "V", p[1]);
	    if (n > 1) path.push("H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepBefore(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("V", (p = points[i])[1], "H", p[0]);
	    return path.join("");
	  }
	  function d3_svg_lineStepAfter(points) {
	    var i = 0, n = points.length, p = points[0], path = [ p[0], ",", p[1] ];
	    while (++i < n) path.push("H", (p = points[i])[0], "V", p[1]);
	    return path.join("");
	  }
	  function d3_svg_lineCardinalOpen(points, tension) {
	    return points.length < 4 ? d3_svg_lineLinear(points) : points[1] + d3_svg_lineHermite(points.slice(1, points.length - 1), d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineCardinalClosed(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite((points.push(points[0]), 
	    points), d3_svg_lineCardinalTangents([ points[points.length - 2] ].concat(points, [ points[1] ]), tension));
	  }
	  function d3_svg_lineCardinal(points, tension) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineCardinalTangents(points, tension));
	  }
	  function d3_svg_lineHermite(points, tangents) {
	    if (tangents.length < 1 || points.length != tangents.length && points.length != tangents.length + 2) {
	      return d3_svg_lineLinear(points);
	    }
	    var quad = points.length != tangents.length, path = "", p0 = points[0], p = points[1], t0 = tangents[0], t = t0, pi = 1;
	    if (quad) {
	      path += "Q" + (p[0] - t0[0] * 2 / 3) + "," + (p[1] - t0[1] * 2 / 3) + "," + p[0] + "," + p[1];
	      p0 = points[1];
	      pi = 2;
	    }
	    if (tangents.length > 1) {
	      t = tangents[1];
	      p = points[pi];
	      pi++;
	      path += "C" + (p0[0] + t0[0]) + "," + (p0[1] + t0[1]) + "," + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      for (var i = 2; i < tangents.length; i++, pi++) {
	        p = points[pi];
	        t = tangents[i];
	        path += "S" + (p[0] - t[0]) + "," + (p[1] - t[1]) + "," + p[0] + "," + p[1];
	      }
	    }
	    if (quad) {
	      var lp = points[pi];
	      path += "Q" + (p[0] + t[0] * 2 / 3) + "," + (p[1] + t[1] * 2 / 3) + "," + lp[0] + "," + lp[1];
	    }
	    return path;
	  }
	  function d3_svg_lineCardinalTangents(points, tension) {
	    var tangents = [], a = (1 - tension) / 2, p0, p1 = points[0], p2 = points[1], i = 1, n = points.length;
	    while (++i < n) {
	      p0 = p1;
	      p1 = p2;
	      p2 = points[i];
	      tangents.push([ a * (p2[0] - p0[0]), a * (p2[1] - p0[1]) ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineBasis(points) {
	    if (points.length < 3) return d3_svg_lineLinear(points);
	    var i = 1, n = points.length, pi = points[0], x0 = pi[0], y0 = pi[1], px = [ x0, x0, x0, (pi = points[1])[0] ], py = [ y0, y0, y0, pi[1] ], path = [ x0, ",", y0, "L", d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    points.push(points[n - 1]);
	    while (++i <= n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    points.pop();
	    path.push("L", pi);
	    return path.join("");
	  }
	  function d3_svg_lineBasisOpen(points) {
	    if (points.length < 4) return d3_svg_lineLinear(points);
	    var path = [], i = -1, n = points.length, pi, px = [ 0 ], py = [ 0 ];
	    while (++i < 3) {
	      pi = points[i];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path.push(d3_svg_lineDot4(d3_svg_lineBasisBezier3, px) + "," + d3_svg_lineDot4(d3_svg_lineBasisBezier3, py));
	    --i;
	    while (++i < n) {
	      pi = points[i];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBasisClosed(points) {
	    var path, i = -1, n = points.length, m = n + 4, pi, px = [], py = [];
	    while (++i < 4) {
	      pi = points[i % n];
	      px.push(pi[0]);
	      py.push(pi[1]);
	    }
	    path = [ d3_svg_lineDot4(d3_svg_lineBasisBezier3, px), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, py) ];
	    --i;
	    while (++i < m) {
	      pi = points[i % n];
	      px.shift();
	      px.push(pi[0]);
	      py.shift();
	      py.push(pi[1]);
	      d3_svg_lineBasisBezier(path, px, py);
	    }
	    return path.join("");
	  }
	  function d3_svg_lineBundle(points, tension) {
	    var n = points.length - 1;
	    if (n) {
	      var x0 = points[0][0], y0 = points[0][1], dx = points[n][0] - x0, dy = points[n][1] - y0, i = -1, p, t;
	      while (++i <= n) {
	        p = points[i];
	        t = i / n;
	        p[0] = tension * p[0] + (1 - tension) * (x0 + t * dx);
	        p[1] = tension * p[1] + (1 - tension) * (y0 + t * dy);
	      }
	    }
	    return d3_svg_lineBasis(points);
	  }
	  function d3_svg_lineDot4(a, b) {
	    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
	  }
	  var d3_svg_lineBasisBezier1 = [ 0, 2 / 3, 1 / 3, 0 ], d3_svg_lineBasisBezier2 = [ 0, 1 / 3, 2 / 3, 0 ], d3_svg_lineBasisBezier3 = [ 0, 1 / 6, 2 / 3, 1 / 6 ];
	  function d3_svg_lineBasisBezier(path, x, y) {
	    path.push("C", d3_svg_lineDot4(d3_svg_lineBasisBezier1, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier1, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier2, y), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, x), ",", d3_svg_lineDot4(d3_svg_lineBasisBezier3, y));
	  }
	  function d3_svg_lineSlope(p0, p1) {
	    return (p1[1] - p0[1]) / (p1[0] - p0[0]);
	  }
	  function d3_svg_lineFiniteDifferences(points) {
	    var i = 0, j = points.length - 1, m = [], p0 = points[0], p1 = points[1], d = m[0] = d3_svg_lineSlope(p0, p1);
	    while (++i < j) {
	      m[i] = (d + (d = d3_svg_lineSlope(p0 = p1, p1 = points[i + 1]))) / 2;
	    }
	    m[i] = d;
	    return m;
	  }
	  function d3_svg_lineMonotoneTangents(points) {
	    var tangents = [], d, a, b, s, m = d3_svg_lineFiniteDifferences(points), i = -1, j = points.length - 1;
	    while (++i < j) {
	      d = d3_svg_lineSlope(points[i], points[i + 1]);
	      if (abs(d) < ε) {
	        m[i] = m[i + 1] = 0;
	      } else {
	        a = m[i] / d;
	        b = m[i + 1] / d;
	        s = a * a + b * b;
	        if (s > 9) {
	          s = d * 3 / Math.sqrt(s);
	          m[i] = s * a;
	          m[i + 1] = s * b;
	        }
	      }
	    }
	    i = -1;
	    while (++i <= j) {
	      s = (points[Math.min(j, i + 1)][0] - points[Math.max(0, i - 1)][0]) / (6 * (1 + m[i] * m[i]));
	      tangents.push([ s || 0, m[i] * s || 0 ]);
	    }
	    return tangents;
	  }
	  function d3_svg_lineMonotone(points) {
	    return points.length < 3 ? d3_svg_lineLinear(points) : points[0] + d3_svg_lineHermite(points, d3_svg_lineMonotoneTangents(points));
	  }
	  d3.svg.line.radial = function() {
	    var line = d3_svg_line(d3_svg_lineRadial);
	    line.radius = line.x, delete line.x;
	    line.angle = line.y, delete line.y;
	    return line;
	  };
	  function d3_svg_lineRadial(points) {
	    var point, i = -1, n = points.length, r, a;
	    while (++i < n) {
	      point = points[i];
	      r = point[0];
	      a = point[1] + d3_svg_arcOffset;
	      point[0] = r * Math.cos(a);
	      point[1] = r * Math.sin(a);
	    }
	    return points;
	  }
	  function d3_svg_area(projection) {
	    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = "L", tension = .7;
	    function area(data) {
	      var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function() {
	        return x;
	      } : d3_functor(x1), fy1 = y0 === y1 ? function() {
	        return y;
	      } : d3_functor(y1), x, y;
	      function segment() {
	        segments.push("M", interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), "Z");
	      }
	      while (++i < n) {
	        if (defined.call(this, d = data[i], i)) {
	          points0.push([ x = +fx0.call(this, d, i), y = +fy0.call(this, d, i) ]);
	          points1.push([ +fx1.call(this, d, i), +fy1.call(this, d, i) ]);
	        } else if (points0.length) {
	          segment();
	          points0 = [];
	          points1 = [];
	        }
	      }
	      if (points0.length) segment();
	      return segments.length ? segments.join("") : null;
	    }
	    area.x = function(_) {
	      if (!arguments.length) return x1;
	      x0 = x1 = _;
	      return area;
	    };
	    area.x0 = function(_) {
	      if (!arguments.length) return x0;
	      x0 = _;
	      return area;
	    };
	    area.x1 = function(_) {
	      if (!arguments.length) return x1;
	      x1 = _;
	      return area;
	    };
	    area.y = function(_) {
	      if (!arguments.length) return y1;
	      y0 = y1 = _;
	      return area;
	    };
	    area.y0 = function(_) {
	      if (!arguments.length) return y0;
	      y0 = _;
	      return area;
	    };
	    area.y1 = function(_) {
	      if (!arguments.length) return y1;
	      y1 = _;
	      return area;
	    };
	    area.defined = function(_) {
	      if (!arguments.length) return defined;
	      defined = _;
	      return area;
	    };
	    area.interpolate = function(_) {
	      if (!arguments.length) return interpolateKey;
	      if (typeof _ === "function") interpolateKey = interpolate = _; else interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;
	      interpolateReverse = interpolate.reverse || interpolate;
	      L = interpolate.closed ? "M" : "L";
	      return area;
	    };
	    area.tension = function(_) {
	      if (!arguments.length) return tension;
	      tension = _;
	      return area;
	    };
	    return area;
	  }
	  d3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;
	  d3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;
	  d3.svg.area = function() {
	    return d3_svg_area(d3_identity);
	  };
	  d3.svg.area.radial = function() {
	    var area = d3_svg_area(d3_svg_lineRadial);
	    area.radius = area.x, delete area.x;
	    area.innerRadius = area.x0, delete area.x0;
	    area.outerRadius = area.x1, delete area.x1;
	    area.angle = area.y, delete area.y;
	    area.startAngle = area.y0, delete area.y0;
	    area.endAngle = area.y1, delete area.y1;
	    return area;
	  };
	  d3.svg.chord = function() {
	    var source = d3_source, target = d3_target, radius = d3_svg_chordRadius, startAngle = d3_svg_arcStartAngle, endAngle = d3_svg_arcEndAngle;
	    function chord(d, i) {
	      var s = subgroup(this, source, d, i), t = subgroup(this, target, d, i);
	      return "M" + s.p0 + arc(s.r, s.p1, s.a1 - s.a0) + (equals(s, t) ? curve(s.r, s.p1, s.r, s.p0) : curve(s.r, s.p1, t.r, t.p0) + arc(t.r, t.p1, t.a1 - t.a0) + curve(t.r, t.p1, s.r, s.p0)) + "Z";
	    }
	    function subgroup(self, f, d, i) {
	      var subgroup = f.call(self, d, i), r = radius.call(self, subgroup, i), a0 = startAngle.call(self, subgroup, i) + d3_svg_arcOffset, a1 = endAngle.call(self, subgroup, i) + d3_svg_arcOffset;
	      return {
	        r: r,
	        a0: a0,
	        a1: a1,
	        p0: [ r * Math.cos(a0), r * Math.sin(a0) ],
	        p1: [ r * Math.cos(a1), r * Math.sin(a1) ]
	      };
	    }
	    function equals(a, b) {
	      return a.a0 == b.a0 && a.a1 == b.a1;
	    }
	    function arc(r, p, a) {
	      return "A" + r + "," + r + " 0 " + +(a > π) + ",1 " + p;
	    }
	    function curve(r0, p0, r1, p1) {
	      return "Q 0,0 " + p1;
	    }
	    chord.radius = function(v) {
	      if (!arguments.length) return radius;
	      radius = d3_functor(v);
	      return chord;
	    };
	    chord.source = function(v) {
	      if (!arguments.length) return source;
	      source = d3_functor(v);
	      return chord;
	    };
	    chord.target = function(v) {
	      if (!arguments.length) return target;
	      target = d3_functor(v);
	      return chord;
	    };
	    chord.startAngle = function(v) {
	      if (!arguments.length) return startAngle;
	      startAngle = d3_functor(v);
	      return chord;
	    };
	    chord.endAngle = function(v) {
	      if (!arguments.length) return endAngle;
	      endAngle = d3_functor(v);
	      return chord;
	    };
	    return chord;
	  };
	  function d3_svg_chordRadius(d) {
	    return d.radius;
	  }
	  d3.svg.diagonal = function() {
	    var source = d3_source, target = d3_target, projection = d3_svg_diagonalProjection;
	    function diagonal(d, i) {
	      var p0 = source.call(this, d, i), p3 = target.call(this, d, i), m = (p0.y + p3.y) / 2, p = [ p0, {
	        x: p0.x,
	        y: m
	      }, {
	        x: p3.x,
	        y: m
	      }, p3 ];
	      p = p.map(projection);
	      return "M" + p[0] + "C" + p[1] + " " + p[2] + " " + p[3];
	    }
	    diagonal.source = function(x) {
	      if (!arguments.length) return source;
	      source = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.target = function(x) {
	      if (!arguments.length) return target;
	      target = d3_functor(x);
	      return diagonal;
	    };
	    diagonal.projection = function(x) {
	      if (!arguments.length) return projection;
	      projection = x;
	      return diagonal;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalProjection(d) {
	    return [ d.x, d.y ];
	  }
	  d3.svg.diagonal.radial = function() {
	    var diagonal = d3.svg.diagonal(), projection = d3_svg_diagonalProjection, projection_ = diagonal.projection;
	    diagonal.projection = function(x) {
	      return arguments.length ? projection_(d3_svg_diagonalRadialProjection(projection = x)) : projection;
	    };
	    return diagonal;
	  };
	  function d3_svg_diagonalRadialProjection(projection) {
	    return function() {
	      var d = projection.apply(this, arguments), r = d[0], a = d[1] + d3_svg_arcOffset;
	      return [ r * Math.cos(a), r * Math.sin(a) ];
	    };
	  }
	  d3.svg.symbol = function() {
	    var type = d3_svg_symbolType, size = d3_svg_symbolSize;
	    function symbol(d, i) {
	      return (d3_svg_symbols.get(type.call(this, d, i)) || d3_svg_symbolCircle)(size.call(this, d, i));
	    }
	    symbol.type = function(x) {
	      if (!arguments.length) return type;
	      type = d3_functor(x);
	      return symbol;
	    };
	    symbol.size = function(x) {
	      if (!arguments.length) return size;
	      size = d3_functor(x);
	      return symbol;
	    };
	    return symbol;
	  };
	  function d3_svg_symbolSize() {
	    return 64;
	  }
	  function d3_svg_symbolType() {
	    return "circle";
	  }
	  function d3_svg_symbolCircle(size) {
	    var r = Math.sqrt(size / π);
	    return "M0," + r + "A" + r + "," + r + " 0 1,1 0," + -r + "A" + r + "," + r + " 0 1,1 0," + r + "Z";
	  }
	  var d3_svg_symbols = d3.map({
	    circle: d3_svg_symbolCircle,
	    cross: function(size) {
	      var r = Math.sqrt(size / 5) / 2;
	      return "M" + -3 * r + "," + -r + "H" + -r + "V" + -3 * r + "H" + r + "V" + -r + "H" + 3 * r + "V" + r + "H" + r + "V" + 3 * r + "H" + -r + "V" + r + "H" + -3 * r + "Z";
	    },
	    diamond: function(size) {
	      var ry = Math.sqrt(size / (2 * d3_svg_symbolTan30)), rx = ry * d3_svg_symbolTan30;
	      return "M0," + -ry + "L" + rx + ",0" + " 0," + ry + " " + -rx + ",0" + "Z";
	    },
	    square: function(size) {
	      var r = Math.sqrt(size) / 2;
	      return "M" + -r + "," + -r + "L" + r + "," + -r + " " + r + "," + r + " " + -r + "," + r + "Z";
	    },
	    "triangle-down": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + ry + "L" + rx + "," + -ry + " " + -rx + "," + -ry + "Z";
	    },
	    "triangle-up": function(size) {
	      var rx = Math.sqrt(size / d3_svg_symbolSqrt3), ry = rx * d3_svg_symbolSqrt3 / 2;
	      return "M0," + -ry + "L" + rx + "," + ry + " " + -rx + "," + ry + "Z";
	    }
	  });
	  d3.svg.symbolTypes = d3_svg_symbols.keys();
	  var d3_svg_symbolSqrt3 = Math.sqrt(3), d3_svg_symbolTan30 = Math.tan(30 * d3_radians);
	  function d3_transition(groups, id) {
	    d3_subclass(groups, d3_transitionPrototype);
	    groups.id = id;
	    return groups;
	  }
	  var d3_transitionPrototype = [], d3_transitionId = 0, d3_transitionInheritId, d3_transitionInherit;
	  d3_transitionPrototype.call = d3_selectionPrototype.call;
	  d3_transitionPrototype.empty = d3_selectionPrototype.empty;
	  d3_transitionPrototype.node = d3_selectionPrototype.node;
	  d3_transitionPrototype.size = d3_selectionPrototype.size;
	  d3.transition = function(selection) {
	    return arguments.length ? d3_transitionInheritId ? selection.transition() : selection : d3_selectionRoot.transition();
	  };
	  d3.transition.prototype = d3_transitionPrototype;
	  d3_transitionPrototype.select = function(selector) {
	    var id = this.id, subgroups = [], subgroup, subnode, node;
	    selector = d3_selection_selector(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if ((node = group[i]) && (subnode = selector.call(node, node.__data__, i, j))) {
	          if ("__data__" in node) subnode.__data__ = node.__data__;
	          d3_transitionNode(subnode, i, id, node.__transition__[id]);
	          subgroup.push(subnode);
	        } else {
	          subgroup.push(null);
	        }
	      }
	    }
	    return d3_transition(subgroups, id);
	  };
	  d3_transitionPrototype.selectAll = function(selector) {
	    var id = this.id, subgroups = [], subgroup, subnodes, node, subnode, transition;
	    selector = d3_selection_selectorAll(selector);
	    for (var j = -1, m = this.length; ++j < m; ) {
	      for (var group = this[j], i = -1, n = group.length; ++i < n; ) {
	        if (node = group[i]) {
	          transition = node.__transition__[id];
	          subnodes = selector.call(node, node.__data__, i, j);
	          subgroups.push(subgroup = []);
	          for (var k = -1, o = subnodes.length; ++k < o; ) {
	            if (subnode = subnodes[k]) d3_transitionNode(subnode, k, id, transition);
	            subgroup.push(subnode);
	          }
	        }
	      }
	    }
	    return d3_transition(subgroups, id);
	  };
	  d3_transitionPrototype.filter = function(filter) {
	    var subgroups = [], subgroup, group, node;
	    if (typeof filter !== "function") filter = d3_selection_filter(filter);
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if ((node = group[i]) && filter.call(node, node.__data__, i, j)) {
	          subgroup.push(node);
	        }
	      }
	    }
	    return d3_transition(subgroups, this.id);
	  };
	  d3_transitionPrototype.tween = function(name, tween) {
	    var id = this.id;
	    if (arguments.length < 2) return this.node().__transition__[id].tween.get(name);
	    return d3_selection_each(this, tween == null ? function(node) {
	      node.__transition__[id].tween.remove(name);
	    } : function(node) {
	      node.__transition__[id].tween.set(name, tween);
	    });
	  };
	  function d3_transition_tween(groups, name, value, tween) {
	    var id = groups.id;
	    return d3_selection_each(groups, typeof value === "function" ? function(node, i, j) {
	      node.__transition__[id].tween.set(name, tween(value.call(node, node.__data__, i, j)));
	    } : (value = tween(value), function(node) {
	      node.__transition__[id].tween.set(name, value);
	    }));
	  }
	  d3_transitionPrototype.attr = function(nameNS, value) {
	    if (arguments.length < 2) {
	      for (value in nameNS) this.attr(value, nameNS[value]);
	      return this;
	    }
	    var interpolate = nameNS == "transform" ? d3_interpolateTransform : d3_interpolate, name = d3.ns.qualify(nameNS);
	    function attrNull() {
	      this.removeAttribute(name);
	    }
	    function attrNullNS() {
	      this.removeAttributeNS(name.space, name.local);
	    }
	    function attrTween(b) {
	      return b == null ? attrNull : (b += "", function() {
	        var a = this.getAttribute(name), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttribute(name, i(t));
	        });
	      });
	    }
	    function attrTweenNS(b) {
	      return b == null ? attrNullNS : (b += "", function() {
	        var a = this.getAttributeNS(name.space, name.local), i;
	        return a !== b && (i = interpolate(a, b), function(t) {
	          this.setAttributeNS(name.space, name.local, i(t));
	        });
	      });
	    }
	    return d3_transition_tween(this, "attr." + nameNS, value, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.attrTween = function(nameNS, tween) {
	    var name = d3.ns.qualify(nameNS);
	    function attrTween(d, i) {
	      var f = tween.call(this, d, i, this.getAttribute(name));
	      return f && function(t) {
	        this.setAttribute(name, f(t));
	      };
	    }
	    function attrTweenNS(d, i) {
	      var f = tween.call(this, d, i, this.getAttributeNS(name.space, name.local));
	      return f && function(t) {
	        this.setAttributeNS(name.space, name.local, f(t));
	      };
	    }
	    return this.tween("attr." + nameNS, name.local ? attrTweenNS : attrTween);
	  };
	  d3_transitionPrototype.style = function(name, value, priority) {
	    var n = arguments.length;
	    if (n < 3) {
	      if (typeof name !== "string") {
	        if (n < 2) value = "";
	        for (priority in name) this.style(priority, name[priority], value);
	        return this;
	      }
	      priority = "";
	    }
	    function styleNull() {
	      this.style.removeProperty(name);
	    }
	    function styleString(b) {
	      return b == null ? styleNull : (b += "", function() {
	        var a = d3_window.getComputedStyle(this, null).getPropertyValue(name), i;
	        return a !== b && (i = d3_interpolate(a, b), function(t) {
	          this.style.setProperty(name, i(t), priority);
	        });
	      });
	    }
	    return d3_transition_tween(this, "style." + name, value, styleString);
	  };
	  d3_transitionPrototype.styleTween = function(name, tween, priority) {
	    if (arguments.length < 3) priority = "";
	    function styleTween(d, i) {
	      var f = tween.call(this, d, i, d3_window.getComputedStyle(this, null).getPropertyValue(name));
	      return f && function(t) {
	        this.style.setProperty(name, f(t), priority);
	      };
	    }
	    return this.tween("style." + name, styleTween);
	  };
	  d3_transitionPrototype.text = function(value) {
	    return d3_transition_tween(this, "text", value, d3_transition_text);
	  };
	  function d3_transition_text(b) {
	    if (b == null) b = "";
	    return function() {
	      this.textContent = b;
	    };
	  }
	  d3_transitionPrototype.remove = function() {
	    return this.each("end.transition", function() {
	      var p;
	      if (this.__transition__.count < 2 && (p = this.parentNode)) p.removeChild(this);
	    });
	  };
	  d3_transitionPrototype.ease = function(value) {
	    var id = this.id;
	    if (arguments.length < 1) return this.node().__transition__[id].ease;
	    if (typeof value !== "function") value = d3.ease.apply(d3, arguments);
	    return d3_selection_each(this, function(node) {
	      node.__transition__[id].ease = value;
	    });
	  };
	  d3_transitionPrototype.delay = function(value) {
	    var id = this.id;
	    if (arguments.length < 1) return this.node().__transition__[id].delay;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node.__transition__[id].delay = +value.call(node, node.__data__, i, j);
	    } : (value = +value, function(node) {
	      node.__transition__[id].delay = value;
	    }));
	  };
	  d3_transitionPrototype.duration = function(value) {
	    var id = this.id;
	    if (arguments.length < 1) return this.node().__transition__[id].duration;
	    return d3_selection_each(this, typeof value === "function" ? function(node, i, j) {
	      node.__transition__[id].duration = Math.max(1, value.call(node, node.__data__, i, j));
	    } : (value = Math.max(1, value), function(node) {
	      node.__transition__[id].duration = value;
	    }));
	  };
	  d3_transitionPrototype.each = function(type, listener) {
	    var id = this.id;
	    if (arguments.length < 2) {
	      var inherit = d3_transitionInherit, inheritId = d3_transitionInheritId;
	      d3_transitionInheritId = id;
	      d3_selection_each(this, function(node, i, j) {
	        d3_transitionInherit = node.__transition__[id];
	        type.call(node, node.__data__, i, j);
	      });
	      d3_transitionInherit = inherit;
	      d3_transitionInheritId = inheritId;
	    } else {
	      d3_selection_each(this, function(node) {
	        var transition = node.__transition__[id];
	        (transition.event || (transition.event = d3.dispatch("start", "end"))).on(type, listener);
	      });
	    }
	    return this;
	  };
	  d3_transitionPrototype.transition = function() {
	    var id0 = this.id, id1 = ++d3_transitionId, subgroups = [], subgroup, group, node, transition;
	    for (var j = 0, m = this.length; j < m; j++) {
	      subgroups.push(subgroup = []);
	      for (var group = this[j], i = 0, n = group.length; i < n; i++) {
	        if (node = group[i]) {
	          transition = Object.create(node.__transition__[id0]);
	          transition.delay += transition.duration;
	          d3_transitionNode(node, i, id1, transition);
	        }
	        subgroup.push(node);
	      }
	    }
	    return d3_transition(subgroups, id1);
	  };
	  function d3_transitionNode(node, i, id, inherit) {
	    var lock = node.__transition__ || (node.__transition__ = {
	      active: 0,
	      count: 0
	    }), transition = lock[id];
	    if (!transition) {
	      var time = inherit.time;
	      transition = lock[id] = {
	        tween: new d3_Map(),
	        time: time,
	        ease: inherit.ease,
	        delay: inherit.delay,
	        duration: inherit.duration
	      };
	      ++lock.count;
	      d3.timer(function(elapsed) {
	        var d = node.__data__, ease = transition.ease, delay = transition.delay, duration = transition.duration, timer = d3_timer_active, tweened = [];
	        timer.t = delay + time;
	        if (delay <= elapsed) return start(elapsed - delay);
	        timer.c = start;
	        function start(elapsed) {
	          if (lock.active > id) return stop();
	          lock.active = id;
	          transition.event && transition.event.start.call(node, d, i);
	          transition.tween.forEach(function(key, value) {
	            if (value = value.call(node, d, i)) {
	              tweened.push(value);
	            }
	          });
	          d3.timer(function() {
	            timer.c = tick(elapsed || 1) ? d3_true : tick;
	            return 1;
	          }, 0, time);
	        }
	        function tick(elapsed) {
	          if (lock.active !== id) return stop();
	          var t = elapsed / duration, e = ease(t), n = tweened.length;
	          while (n > 0) {
	            tweened[--n].call(node, e);
	          }
	          if (t >= 1) {
	            transition.event && transition.event.end.call(node, d, i);
	            return stop();
	          }
	        }
	        function stop() {
	          if (--lock.count) delete lock[id]; else delete node.__transition__;
	          return 1;
	        }
	      }, 0, time);
	    }
	  }
	  d3.svg.axis = function() {
	    var scale = d3.scale.linear(), orient = d3_svg_axisDefaultOrient, innerTickSize = 6, outerTickSize = 6, tickPadding = 3, tickArguments_ = [ 10 ], tickValues = null, tickFormat_;
	    function axis(g) {
	      g.each(function() {
	        var g = d3.select(this);
	        var scale0 = this.__chart__ || scale, scale1 = this.__chart__ = scale.copy();
	        var ticks = tickValues == null ? scale1.ticks ? scale1.ticks.apply(scale1, tickArguments_) : scale1.domain() : tickValues, tickFormat = tickFormat_ == null ? scale1.tickFormat ? scale1.tickFormat.apply(scale1, tickArguments_) : d3_identity : tickFormat_, tick = g.selectAll(".tick").data(ticks, scale1), tickEnter = tick.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ε), tickExit = d3.transition(tick.exit()).style("opacity", ε).remove(), tickUpdate = d3.transition(tick.order()).style("opacity", 1), tickTransform;
	        var range = d3_scaleRange(scale1), path = g.selectAll(".domain").data([ 0 ]), pathUpdate = (path.enter().append("path").attr("class", "domain"), 
	        d3.transition(path));
	        tickEnter.append("line");
	        tickEnter.append("text");
	        var lineEnter = tickEnter.select("line"), lineUpdate = tickUpdate.select("line"), text = tick.select("text").text(tickFormat), textEnter = tickEnter.select("text"), textUpdate = tickUpdate.select("text");
	        switch (orient) {
	         case "bottom":
	          {
	            tickTransform = d3_svg_axisX;
	            lineEnter.attr("y2", innerTickSize);
	            textEnter.attr("y", Math.max(innerTickSize, 0) + tickPadding);
	            lineUpdate.attr("x2", 0).attr("y2", innerTickSize);
	            textUpdate.attr("x", 0).attr("y", Math.max(innerTickSize, 0) + tickPadding);
	            text.attr("dy", ".71em").style("text-anchor", "middle");
	            pathUpdate.attr("d", "M" + range[0] + "," + outerTickSize + "V0H" + range[1] + "V" + outerTickSize);
	            break;
	          }

	         case "top":
	          {
	            tickTransform = d3_svg_axisX;
	            lineEnter.attr("y2", -innerTickSize);
	            textEnter.attr("y", -(Math.max(innerTickSize, 0) + tickPadding));
	            lineUpdate.attr("x2", 0).attr("y2", -innerTickSize);
	            textUpdate.attr("x", 0).attr("y", -(Math.max(innerTickSize, 0) + tickPadding));
	            text.attr("dy", "0em").style("text-anchor", "middle");
	            pathUpdate.attr("d", "M" + range[0] + "," + -outerTickSize + "V0H" + range[1] + "V" + -outerTickSize);
	            break;
	          }

	         case "left":
	          {
	            tickTransform = d3_svg_axisY;
	            lineEnter.attr("x2", -innerTickSize);
	            textEnter.attr("x", -(Math.max(innerTickSize, 0) + tickPadding));
	            lineUpdate.attr("x2", -innerTickSize).attr("y2", 0);
	            textUpdate.attr("x", -(Math.max(innerTickSize, 0) + tickPadding)).attr("y", 0);
	            text.attr("dy", ".32em").style("text-anchor", "end");
	            pathUpdate.attr("d", "M" + -outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + -outerTickSize);
	            break;
	          }

	         case "right":
	          {
	            tickTransform = d3_svg_axisY;
	            lineEnter.attr("x2", innerTickSize);
	            textEnter.attr("x", Math.max(innerTickSize, 0) + tickPadding);
	            lineUpdate.attr("x2", innerTickSize).attr("y2", 0);
	            textUpdate.attr("x", Math.max(innerTickSize, 0) + tickPadding).attr("y", 0);
	            text.attr("dy", ".32em").style("text-anchor", "start");
	            pathUpdate.attr("d", "M" + outerTickSize + "," + range[0] + "H0V" + range[1] + "H" + outerTickSize);
	            break;
	          }
	        }
	        if (scale1.rangeBand) {
	          var x = scale1, dx = x.rangeBand() / 2;
	          scale0 = scale1 = function(d) {
	            return x(d) + dx;
	          };
	        } else if (scale0.rangeBand) {
	          scale0 = scale1;
	        } else {
	          tickExit.call(tickTransform, scale1);
	        }
	        tickEnter.call(tickTransform, scale0);
	        tickUpdate.call(tickTransform, scale1);
	      });
	    }
	    axis.scale = function(x) {
	      if (!arguments.length) return scale;
	      scale = x;
	      return axis;
	    };
	    axis.orient = function(x) {
	      if (!arguments.length) return orient;
	      orient = x in d3_svg_axisOrients ? x + "" : d3_svg_axisDefaultOrient;
	      return axis;
	    };
	    axis.ticks = function() {
	      if (!arguments.length) return tickArguments_;
	      tickArguments_ = arguments;
	      return axis;
	    };
	    axis.tickValues = function(x) {
	      if (!arguments.length) return tickValues;
	      tickValues = x;
	      return axis;
	    };
	    axis.tickFormat = function(x) {
	      if (!arguments.length) return tickFormat_;
	      tickFormat_ = x;
	      return axis;
	    };
	    axis.tickSize = function(x) {
	      var n = arguments.length;
	      if (!n) return innerTickSize;
	      innerTickSize = +x;
	      outerTickSize = +arguments[n - 1];
	      return axis;
	    };
	    axis.innerTickSize = function(x) {
	      if (!arguments.length) return innerTickSize;
	      innerTickSize = +x;
	      return axis;
	    };
	    axis.outerTickSize = function(x) {
	      if (!arguments.length) return outerTickSize;
	      outerTickSize = +x;
	      return axis;
	    };
	    axis.tickPadding = function(x) {
	      if (!arguments.length) return tickPadding;
	      tickPadding = +x;
	      return axis;
	    };
	    axis.tickSubdivide = function() {
	      return arguments.length && axis;
	    };
	    return axis;
	  };
	  var d3_svg_axisDefaultOrient = "bottom", d3_svg_axisOrients = {
	    top: 1,
	    right: 1,
	    bottom: 1,
	    left: 1
	  };
	  function d3_svg_axisX(selection, x) {
	    selection.attr("transform", function(d) {
	      return "translate(" + x(d) + ",0)";
	    });
	  }
	  function d3_svg_axisY(selection, y) {
	    selection.attr("transform", function(d) {
	      return "translate(0," + y(d) + ")";
	    });
	  }
	  d3.svg.brush = function() {
	    var event = d3_eventDispatch(brush, "brushstart", "brush", "brushend"), x = null, y = null, xExtent = [ 0, 0 ], yExtent = [ 0, 0 ], xExtentDomain, yExtentDomain, xClamp = true, yClamp = true, resizes = d3_svg_brushResizes[0];
	    function brush(g) {
	      g.each(function() {
	        var g = d3.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", brushstart).on("touchstart.brush", brushstart);
	        var background = g.selectAll(".background").data([ 0 ]);
	        background.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair");
	        g.selectAll(".extent").data([ 0 ]).enter().append("rect").attr("class", "extent").style("cursor", "move");
	        var resize = g.selectAll(".resize").data(resizes, d3_identity);
	        resize.exit().remove();
	        resize.enter().append("g").attr("class", function(d) {
	          return "resize " + d;
	        }).style("cursor", function(d) {
	          return d3_svg_brushCursor[d];
	        }).append("rect").attr("x", function(d) {
	          return /[ew]$/.test(d) ? -3 : null;
	        }).attr("y", function(d) {
	          return /^[ns]/.test(d) ? -3 : null;
	        }).attr("width", 6).attr("height", 6).style("visibility", "hidden");
	        resize.style("display", brush.empty() ? "none" : null);
	        var gUpdate = d3.transition(g), backgroundUpdate = d3.transition(background), range;
	        if (x) {
	          range = d3_scaleRange(x);
	          backgroundUpdate.attr("x", range[0]).attr("width", range[1] - range[0]);
	          redrawX(gUpdate);
	        }
	        if (y) {
	          range = d3_scaleRange(y);
	          backgroundUpdate.attr("y", range[0]).attr("height", range[1] - range[0]);
	          redrawY(gUpdate);
	        }
	        redraw(gUpdate);
	      });
	    }
	    brush.event = function(g) {
	      g.each(function() {
	        var event_ = event.of(this, arguments), extent1 = {
	          x: xExtent,
	          y: yExtent,
	          i: xExtentDomain,
	          j: yExtentDomain
	        }, extent0 = this.__chart__ || extent1;
	        this.__chart__ = extent1;
	        if (d3_transitionInheritId) {
	          d3.select(this).transition().each("start.brush", function() {
	            xExtentDomain = extent0.i;
	            yExtentDomain = extent0.j;
	            xExtent = extent0.x;
	            yExtent = extent0.y;
	            event_({
	              type: "brushstart"
	            });
	          }).tween("brush:brush", function() {
	            var xi = d3_interpolateArray(xExtent, extent1.x), yi = d3_interpolateArray(yExtent, extent1.y);
	            xExtentDomain = yExtentDomain = null;
	            return function(t) {
	              xExtent = extent1.x = xi(t);
	              yExtent = extent1.y = yi(t);
	              event_({
	                type: "brush",
	                mode: "resize"
	              });
	            };
	          }).each("end.brush", function() {
	            xExtentDomain = extent1.i;
	            yExtentDomain = extent1.j;
	            event_({
	              type: "brush",
	              mode: "resize"
	            });
	            event_({
	              type: "brushend"
	            });
	          });
	        } else {
	          event_({
	            type: "brushstart"
	          });
	          event_({
	            type: "brush",
	            mode: "resize"
	          });
	          event_({
	            type: "brushend"
	          });
	        }
	      });
	    };
	    function redraw(g) {
	      g.selectAll(".resize").attr("transform", function(d) {
	        return "translate(" + xExtent[+/e$/.test(d)] + "," + yExtent[+/^s/.test(d)] + ")";
	      });
	    }
	    function redrawX(g) {
	      g.select(".extent").attr("x", xExtent[0]);
	      g.selectAll(".extent,.n>rect,.s>rect").attr("width", xExtent[1] - xExtent[0]);
	    }
	    function redrawY(g) {
	      g.select(".extent").attr("y", yExtent[0]);
	      g.selectAll(".extent,.e>rect,.w>rect").attr("height", yExtent[1] - yExtent[0]);
	    }
	    function brushstart() {
	      var target = this, eventTarget = d3.select(d3.event.target), event_ = event.of(target, arguments), g = d3.select(target), resizing = eventTarget.datum(), resizingX = !/^(n|s)$/.test(resizing) && x, resizingY = !/^(e|w)$/.test(resizing) && y, dragging = eventTarget.classed("extent"), dragRestore = d3_event_dragSuppress(), center, origin = d3.mouse(target), offset;
	      var w = d3.select(d3_window).on("keydown.brush", keydown).on("keyup.brush", keyup);
	      if (d3.event.changedTouches) {
	        w.on("touchmove.brush", brushmove).on("touchend.brush", brushend);
	      } else {
	        w.on("mousemove.brush", brushmove).on("mouseup.brush", brushend);
	      }
	      g.interrupt().selectAll("*").interrupt();
	      if (dragging) {
	        origin[0] = xExtent[0] - origin[0];
	        origin[1] = yExtent[0] - origin[1];
	      } else if (resizing) {
	        var ex = +/w$/.test(resizing), ey = +/^n/.test(resizing);
	        offset = [ xExtent[1 - ex] - origin[0], yExtent[1 - ey] - origin[1] ];
	        origin[0] = xExtent[ex];
	        origin[1] = yExtent[ey];
	      } else if (d3.event.altKey) center = origin.slice();
	      g.style("pointer-events", "none").selectAll(".resize").style("display", null);
	      d3.select("body").style("cursor", eventTarget.style("cursor"));
	      event_({
	        type: "brushstart"
	      });
	      brushmove();
	      function keydown() {
	        if (d3.event.keyCode == 32) {
	          if (!dragging) {
	            center = null;
	            origin[0] -= xExtent[1];
	            origin[1] -= yExtent[1];
	            dragging = 2;
	          }
	          d3_eventPreventDefault();
	        }
	      }
	      function keyup() {
	        if (d3.event.keyCode == 32 && dragging == 2) {
	          origin[0] += xExtent[1];
	          origin[1] += yExtent[1];
	          dragging = 0;
	          d3_eventPreventDefault();
	        }
	      }
	      function brushmove() {
	        var point = d3.mouse(target), moved = false;
	        if (offset) {
	          point[0] += offset[0];
	          point[1] += offset[1];
	        }
	        if (!dragging) {
	          if (d3.event.altKey) {
	            if (!center) center = [ (xExtent[0] + xExtent[1]) / 2, (yExtent[0] + yExtent[1]) / 2 ];
	            origin[0] = xExtent[+(point[0] < center[0])];
	            origin[1] = yExtent[+(point[1] < center[1])];
	          } else center = null;
	        }
	        if (resizingX && move1(point, x, 0)) {
	          redrawX(g);
	          moved = true;
	        }
	        if (resizingY && move1(point, y, 1)) {
	          redrawY(g);
	          moved = true;
	        }
	        if (moved) {
	          redraw(g);
	          event_({
	            type: "brush",
	            mode: dragging ? "move" : "resize"
	          });
	        }
	      }
	      function move1(point, scale, i) {
	        var range = d3_scaleRange(scale), r0 = range[0], r1 = range[1], position = origin[i], extent = i ? yExtent : xExtent, size = extent[1] - extent[0], min, max;
	        if (dragging) {
	          r0 -= position;
	          r1 -= size + position;
	        }
	        min = (i ? yClamp : xClamp) ? Math.max(r0, Math.min(r1, point[i])) : point[i];
	        if (dragging) {
	          max = (min += position) + size;
	        } else {
	          if (center) position = Math.max(r0, Math.min(r1, 2 * center[i] - min));
	          if (position < min) {
	            max = min;
	            min = position;
	          } else {
	            max = position;
	          }
	        }
	        if (extent[0] != min || extent[1] != max) {
	          if (i) yExtentDomain = null; else xExtentDomain = null;
	          extent[0] = min;
	          extent[1] = max;
	          return true;
	        }
	      }
	      function brushend() {
	        brushmove();
	        g.style("pointer-events", "all").selectAll(".resize").style("display", brush.empty() ? "none" : null);
	        d3.select("body").style("cursor", null);
	        w.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null);
	        dragRestore();
	        event_({
	          type: "brushend"
	        });
	      }
	    }
	    brush.x = function(z) {
	      if (!arguments.length) return x;
	      x = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.y = function(z) {
	      if (!arguments.length) return y;
	      y = z;
	      resizes = d3_svg_brushResizes[!x << 1 | !y];
	      return brush;
	    };
	    brush.clamp = function(z) {
	      if (!arguments.length) return x && y ? [ xClamp, yClamp ] : x ? xClamp : y ? yClamp : null;
	      if (x && y) xClamp = !!z[0], yClamp = !!z[1]; else if (x) xClamp = !!z; else if (y) yClamp = !!z;
	      return brush;
	    };
	    brush.extent = function(z) {
	      var x0, x1, y0, y1, t;
	      if (!arguments.length) {
	        if (x) {
	          if (xExtentDomain) {
	            x0 = xExtentDomain[0], x1 = xExtentDomain[1];
	          } else {
	            x0 = xExtent[0], x1 = xExtent[1];
	            if (x.invert) x0 = x.invert(x0), x1 = x.invert(x1);
	            if (x1 < x0) t = x0, x0 = x1, x1 = t;
	          }
	        }
	        if (y) {
	          if (yExtentDomain) {
	            y0 = yExtentDomain[0], y1 = yExtentDomain[1];
	          } else {
	            y0 = yExtent[0], y1 = yExtent[1];
	            if (y.invert) y0 = y.invert(y0), y1 = y.invert(y1);
	            if (y1 < y0) t = y0, y0 = y1, y1 = t;
	          }
	        }
	        return x && y ? [ [ x0, y0 ], [ x1, y1 ] ] : x ? [ x0, x1 ] : y && [ y0, y1 ];
	      }
	      if (x) {
	        x0 = z[0], x1 = z[1];
	        if (y) x0 = x0[0], x1 = x1[0];
	        xExtentDomain = [ x0, x1 ];
	        if (x.invert) x0 = x(x0), x1 = x(x1);
	        if (x1 < x0) t = x0, x0 = x1, x1 = t;
	        if (x0 != xExtent[0] || x1 != xExtent[1]) xExtent = [ x0, x1 ];
	      }
	      if (y) {
	        y0 = z[0], y1 = z[1];
	        if (x) y0 = y0[1], y1 = y1[1];
	        yExtentDomain = [ y0, y1 ];
	        if (y.invert) y0 = y(y0), y1 = y(y1);
	        if (y1 < y0) t = y0, y0 = y1, y1 = t;
	        if (y0 != yExtent[0] || y1 != yExtent[1]) yExtent = [ y0, y1 ];
	      }
	      return brush;
	    };
	    brush.clear = function() {
	      if (!brush.empty()) {
	        xExtent = [ 0, 0 ], yExtent = [ 0, 0 ];
	        xExtentDomain = yExtentDomain = null;
	      }
	      return brush;
	    };
	    brush.empty = function() {
	      return !!x && xExtent[0] == xExtent[1] || !!y && yExtent[0] == yExtent[1];
	    };
	    return d3.rebind(brush, event, "on");
	  };
	  var d3_svg_brushCursor = {
	    n: "ns-resize",
	    e: "ew-resize",
	    s: "ns-resize",
	    w: "ew-resize",
	    nw: "nwse-resize",
	    ne: "nesw-resize",
	    se: "nwse-resize",
	    sw: "nesw-resize"
	  };
	  var d3_svg_brushResizes = [ [ "n", "e", "s", "w", "nw", "ne", "se", "sw" ], [ "e", "w" ], [ "n", "s" ], [] ];
	  var d3_time_format = d3_time.format = d3_locale_enUS.timeFormat;
	  var d3_time_formatUtc = d3_time_format.utc;
	  var d3_time_formatIso = d3_time_formatUtc("%Y-%m-%dT%H:%M:%S.%LZ");
	  d3_time_format.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? d3_time_formatIsoNative : d3_time_formatIso;
	  function d3_time_formatIsoNative(date) {
	    return date.toISOString();
	  }
	  d3_time_formatIsoNative.parse = function(string) {
	    var date = new Date(string);
	    return isNaN(date) ? null : date;
	  };
	  d3_time_formatIsoNative.toString = d3_time_formatIso.toString;
	  d3_time.second = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 1e3) * 1e3);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 1e3);
	  }, function(date) {
	    return date.getSeconds();
	  });
	  d3_time.seconds = d3_time.second.range;
	  d3_time.seconds.utc = d3_time.second.utc.range;
	  d3_time.minute = d3_time_interval(function(date) {
	    return new d3_date(Math.floor(date / 6e4) * 6e4);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 6e4);
	  }, function(date) {
	    return date.getMinutes();
	  });
	  d3_time.minutes = d3_time.minute.range;
	  d3_time.minutes.utc = d3_time.minute.utc.range;
	  d3_time.hour = d3_time_interval(function(date) {
	    var timezone = date.getTimezoneOffset() / 60;
	    return new d3_date((Math.floor(date / 36e5 - timezone) + timezone) * 36e5);
	  }, function(date, offset) {
	    date.setTime(date.getTime() + Math.floor(offset) * 36e5);
	  }, function(date) {
	    return date.getHours();
	  });
	  d3_time.hours = d3_time.hour.range;
	  d3_time.hours.utc = d3_time.hour.utc.range;
	  d3_time.month = d3_time_interval(function(date) {
	    date = d3_time.day(date);
	    date.setDate(1);
	    return date;
	  }, function(date, offset) {
	    date.setMonth(date.getMonth() + offset);
	  }, function(date) {
	    return date.getMonth();
	  });
	  d3_time.months = d3_time.month.range;
	  d3_time.months.utc = d3_time.month.utc.range;
	  function d3_time_scale(linear, methods, format) {
	    function scale(x) {
	      return linear(x);
	    }
	    scale.invert = function(x) {
	      return d3_time_scaleDate(linear.invert(x));
	    };
	    scale.domain = function(x) {
	      if (!arguments.length) return linear.domain().map(d3_time_scaleDate);
	      linear.domain(x);
	      return scale;
	    };
	    function tickMethod(extent, count) {
	      var span = extent[1] - extent[0], target = span / count, i = d3.bisect(d3_time_scaleSteps, target);
	      return i == d3_time_scaleSteps.length ? [ methods.year, d3_scale_linearTickRange(extent.map(function(d) {
	        return d / 31536e6;
	      }), count)[2] ] : !i ? [ d3_time_scaleMilliseconds, d3_scale_linearTickRange(extent, count)[2] ] : methods[target / d3_time_scaleSteps[i - 1] < d3_time_scaleSteps[i] / target ? i - 1 : i];
	    }
	    scale.nice = function(interval, skip) {
	      var domain = scale.domain(), extent = d3_scaleExtent(domain), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" && tickMethod(extent, interval);
	      if (method) interval = method[0], skip = method[1];
	      function skipped(date) {
	        return !isNaN(date) && !interval.range(date, d3_time_scaleDate(+date + 1), skip).length;
	      }
	      return scale.domain(d3_scale_nice(domain, skip > 1 ? {
	        floor: function(date) {
	          while (skipped(date = interval.floor(date))) date = d3_time_scaleDate(date - 1);
	          return date;
	        },
	        ceil: function(date) {
	          while (skipped(date = interval.ceil(date))) date = d3_time_scaleDate(+date + 1);
	          return date;
	        }
	      } : interval));
	    };
	    scale.ticks = function(interval, skip) {
	      var extent = d3_scaleExtent(scale.domain()), method = interval == null ? tickMethod(extent, 10) : typeof interval === "number" ? tickMethod(extent, interval) : !interval.range && [ {
	        range: interval
	      }, skip ];
	      if (method) interval = method[0], skip = method[1];
	      return interval.range(extent[0], d3_time_scaleDate(+extent[1] + 1), skip < 1 ? 1 : skip);
	    };
	    scale.tickFormat = function() {
	      return format;
	    };
	    scale.copy = function() {
	      return d3_time_scale(linear.copy(), methods, format);
	    };
	    return d3_scale_linearRebind(scale, linear);
	  }
	  function d3_time_scaleDate(t) {
	    return new Date(t);
	  }
	  var d3_time_scaleSteps = [ 1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6 ];
	  var d3_time_scaleLocalMethods = [ [ d3_time.second, 1 ], [ d3_time.second, 5 ], [ d3_time.second, 15 ], [ d3_time.second, 30 ], [ d3_time.minute, 1 ], [ d3_time.minute, 5 ], [ d3_time.minute, 15 ], [ d3_time.minute, 30 ], [ d3_time.hour, 1 ], [ d3_time.hour, 3 ], [ d3_time.hour, 6 ], [ d3_time.hour, 12 ], [ d3_time.day, 1 ], [ d3_time.day, 2 ], [ d3_time.week, 1 ], [ d3_time.month, 1 ], [ d3_time.month, 3 ], [ d3_time.year, 1 ] ];
	  var d3_time_scaleLocalFormat = d3_time_format.multi([ [ ".%L", function(d) {
	    return d.getMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getHours();
	  } ], [ "%a %d", function(d) {
	    return d.getDay() && d.getDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getMonth();
	  } ], [ "%Y", d3_true ] ]);
	  var d3_time_scaleMilliseconds = {
	    range: function(start, stop, step) {
	      return d3.range(Math.ceil(start / step) * step, +stop, step).map(d3_time_scaleDate);
	    },
	    floor: d3_identity,
	    ceil: d3_identity
	  };
	  d3_time_scaleLocalMethods.year = d3_time.year;
	  d3_time.scale = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleLocalMethods, d3_time_scaleLocalFormat);
	  };
	  var d3_time_scaleUtcMethods = d3_time_scaleLocalMethods.map(function(m) {
	    return [ m[0].utc, m[1] ];
	  });
	  var d3_time_scaleUtcFormat = d3_time_formatUtc.multi([ [ ".%L", function(d) {
	    return d.getUTCMilliseconds();
	  } ], [ ":%S", function(d) {
	    return d.getUTCSeconds();
	  } ], [ "%I:%M", function(d) {
	    return d.getUTCMinutes();
	  } ], [ "%I %p", function(d) {
	    return d.getUTCHours();
	  } ], [ "%a %d", function(d) {
	    return d.getUTCDay() && d.getUTCDate() != 1;
	  } ], [ "%b %d", function(d) {
	    return d.getUTCDate() != 1;
	  } ], [ "%B", function(d) {
	    return d.getUTCMonth();
	  } ], [ "%Y", d3_true ] ]);
	  d3_time_scaleUtcMethods.year = d3_time.year.utc;
	  d3_time.scale.utc = function() {
	    return d3_time_scale(d3.scale.linear(), d3_time_scaleUtcMethods, d3_time_scaleUtcFormat);
	  };
	  d3.text = d3_xhrType(function(request) {
	    return request.responseText;
	  });
	  d3.json = function(url, callback) {
	    return d3_xhr(url, "application/json", d3_json, callback);
	  };
	  function d3_json(request) {
	    return JSON.parse(request.responseText);
	  }
	  d3.html = function(url, callback) {
	    return d3_xhr(url, "text/html", d3_html, callback);
	  };
	  function d3_html(request) {
	    var range = d3_document.createRange();
	    range.selectNode(d3_document.body);
	    return range.createContextualFragment(request.responseText);
	  }
	  d3.xml = d3_xhrType(function(request) {
	    return request.responseXML;
	  });
	  if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d3), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); else if (typeof module === "object" && module.exports) module.exports = d3;
	  this.d3 = d3;
	}();

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $__getIteratorRange = function(iterator, index, begin, len) {
	    if (index > begin) {
	        throw new RangeError();
	    }

	    if (typeof len === "undefined") {
	        len = Infinity;
	    }

	    var range = [], end = begin + len;

	    while (index < end) {
	        var next = iterator.next();

	        if (next.done) {
	            break;
	        }

	        if (index >= begin) {
	            range.push(next.value);
	        }

	        index++;
	    }

	    return {
	        range: range,
	        index: index
	    };
	};

	var $__getIterator = function(iterable) {
	    var sym = typeof Symbol === "function" && Symbol.iterator || "@@iterator";

	    if (typeof iterable[sym] === "function") {
	        return iterable[sym]();
	    } else if (typeof iterable === "object" || typeof iterable === "function") {
	        return $__getArrayIterator(iterable);
	    } else {
	        throw new TypeError();
	    }
	};

	var $__getArrayIterator = function(array) {
	    var index = 0;

	    return {
	        next: function() {
	            if (index < array.length) {
	                return {
	                    done: false,
	                    value: array[index++]
	                };
	            } else {
	                return {
	                    done: true,
	                    value: void 0
	                };
	            }
	        }
	    };
	};

	var moment = __webpack_require__(2);

	function getObjects(jsonFile, callback) {
		d3.json(jsonFile, function (jsonData) {
			var objs = [];
			if(jsonData.length)
				objs = jsonData.map( function(arg$0) {
	                var iterator$0 = $__getIterator(arg$0),
	                    iteratorValue$0 = {
	                        index: 0
	                    },
	                    obj = (iteratorValue$0 = $__getIteratorRange(iterator$0, iteratorValue$0.index, 1, 1), iteratorValue$0.range[0]);

	                return obj;
	            } );
			else //if the JSON payload wasn't an array
				objs = [ jsonData ]; //then we were given a single object
			/*objs.forEach(function (val, index) {
				this[index].series.forEach(function (v, i) {
					this[i].data.forEach(function (datum, n) {
						this[n] = datum[1];
						this[n].key = moment(this[n].key);
					}, this[i].data);
				}, this[index].series);
			}, objs);*/
	    objs.forEach( function(obj) {
	        return obj.series.forEach( function(serum) {
	            return serum.data = serum.data.map( function(arg$1) {
	                var iterator$1 = $__getIterator(arg$1),
	                    iteratorValue$1 = {
	                        index: 0
	                    },
	                    datum = (iteratorValue$1 = $__getIteratorRange(iterator$1, iteratorValue$1.index, 1, 1), iteratorValue$1.range[0]);

	                return datum;
	            } );
	        } );
	    } );
			callback(objs);
		});
	}

	exports.getObjects = getObjects;function croppedDomain(mschart) {
	  var domain = mschart.domain;
	  if( moment(domain[1]).diff(moment(domain[0]), 'months') > 12) {
	    domain[0] = d3.time.month.offset(domain[1], -12)
	  }
	  return domain;
	}

	exports.croppedDomain = croppedDomain;function addStylesheetRules (rules) {
	  var styleEl = document.createElement('style'),
	      styleSheet;

	  // Apparently some version of Safari needs the following line? I dunno.
	  styleEl.appendChild(document.createTextNode(''));

	  // Append style element to head
	  document.head.appendChild(styleEl);

	  // Grab style sheet
	  styleSheet = styleEl.sheet;

	  for (var i = 0, rl = rules.length; i < rl; i++) {
	    var j = 1, rule = rules[i], selector = rules[i][0], propStr = '';
	    // If the second argument of a rule is an array of arrays, correct our variables.
	    if (Object.prototype.toString.call(rule[1][0]) === '[object Array]') {
	      rule = rule[1];
	      j = 0;
	    }

	    for (var pl = rule.length; j < pl; j++) {
	      var prop = rule[j];
	      propStr += prop[0] + ':' + prop[1] + (prop[2] ? ' !important' : '') + ';\n';
	    }

	    // Insert CSS Rule
	    styleSheet.insertRule(selector + '{' + propStr + '}', styleSheet.cssRules.length);
	  }
	}

	exports.addStylesheetRules = addStylesheetRules;//Taken from Underscore, licensed under the MIT license
	//Copyright (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//Full MIT copyright notice can be found in the project root
	function debounce(func, wait, immediate) {
	  var timeout;
	  return function() {
	      var $__arguments0 = arguments;
	      var $__arguments = $__arguments0;
	      var context = this, args = $__arguments;

	      var later = function() {
	        timeout = null;
	        if (!immediate) func.apply(context, args);
	      };

	      var callNow = immediate && !timeout;
	      clearTimeout(timeout);
	      timeout = setTimeout(later, wait);
	      if (callNow) func.apply(context, args);
	  };
	}

	exports.debounce = debounce;/*
	Taken from an upcoming version of d3
	 */
	function d3textWrap(text, width, paddingRightLeft, paddingTopBottom) {
	    paddingRightLeft = paddingRightLeft != null ? paddingRightLeft : 5; //Default padding (5px)
	    paddingTopBottom = (paddingTopBottom != null ? paddingTopBottom : 5) - 2; //Default padding (5px), remove 2 pixels because of the borders
	    var maxWidth = width; //I store the tooltip max width
	    width = width - (paddingRightLeft * 2); //Take the padding into account

	    var arrLineCreatedCount = [];
	    text.each(function() {
	        var text = d3.select(this),
	            words = text.text().split(/[ \f\n\r\t\v]+/).reverse(), //Don't cut non-breaking space (\xA0), as well as the Unicode characters \u00A0 \u2028 \u2029)
	            word,
	            line = [],
	            lineNumber = 0,
	            lineHeight = 1.2, //Ems
	            x,
	            y = parseFloat(text.attr("y")),
	            dy = parseFloat(text.attr("dy")),
	            createdLineCount = 1, //Total line created count
	            textAlign = text.style('text-anchor') || 'start'; //'start' by default (start, middle, end, inherit)

	        //Clean the data in case <text> does not define those values
	        if (isNaN(dy)) dy = 0; //Default padding (0em) : the 'dy' attribute on the first <tspan> _must_ be identical to the 'dy' specified on the <text> element, or start at '0em' if undefined

	        //Offset the text position based on the text-anchor
	        var wrapTickLabels = d3.select(text.node().parentNode).classed('tick'); //Don't wrap the 'normal untranslated' <text> element and the translated <g class='tick'><text></text></g> elements the same way..
	        if (wrapTickLabels) {
	            switch (textAlign) {
	                case 'start':
	                    x = -width / 2;
	                    break;
	                case 'middle':
	                    x = 0;
	                    break;
	                case 'end':
	                    x = width / 2;
	                    break;
	                default :
	            }
	        }
	        else { //untranslated <text> elements
	            switch (textAlign) {
	                case 'start':
	                    x = paddingRightLeft;
	                    break;
	                case 'middle':
	                    x = maxWidth / 2;
	                    break;
	                case 'end':
	                    x = maxWidth - paddingRightLeft;
	                    break;
	                default :
	            }
	        }
	        y = +((null === y)?paddingTopBottom:y);

	        var tspan = text.text(null).append("tspan").attr("x", x)/*.attr("y", y)*/.attr("dy", dy + "em");
	        //noinspection JSHint
	        while (word = words.pop()) {
	            line.push(word);
	            tspan.text(line.join(" "));
	            if (tspan.node().getComputedTextLength() > width && line.length > 1) {
	                line.pop();
	                tspan.text(line.join(" "));
	                line = [word];
	                tspan = text.append("tspan").attr("x", x)/*.attr("y", y)*/.attr("dy", /*(++lineNumber * )*/ lineHeight + dy + "em").text(word);
	                ++createdLineCount;
	            }
	        }

	        arrLineCreatedCount.push(createdLineCount); //Store the line count in the array
	    });
	    return arrLineCreatedCount;
	}
	exports.d3textWrap = d3textWrap;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $__getIteratorRange = function(iterator, index, begin, len) {
	  if (index > begin) {
	    throw new RangeError();
	  }

	  if (typeof len === "undefined") {
	    len = Infinity;
	  }

	  var range = [], end = begin + len;

	  while (index < end) {
	    var next = iterator.next();

	    if (next.done) {
	      break;
	    }

	    if (index >= begin) {
	      range.push(next.value);
	    }

	    index++;
	  }

	  return {
	    range: range,
	    index: index
	  };
	};

	var $__getIterator = function(iterable) {
	  var sym = typeof Symbol === "function" && Symbol.iterator || "@@iterator";

	  if (typeof iterable[sym] === "function") {
	    return iterable[sym]();
	  } else if (typeof iterable === "object" || typeof iterable === "function") {
	    return $__getArrayIterator(iterable);
	  } else {
	    throw new TypeError();
	  }
	};

	var $__getArrayIterator = function(array) {
	  var index = 0;

	  return {
	    next: function() {
	      if (index < array.length) {
	        return {
	          done: false,
	          value: array[index++]
	        };
	      } else {
	        return {
	          done: true,
	          value: void 0
	        };
	      }
	    }
	  };
	};

	var $__Array$prototype$slice = Array.prototype.slice;
	var $__Object$defineProperties = Object.defineProperties;
	var $__Object$defineProperty = Object.defineProperty;
	var $__Object$create = Object.create;
	var $__Object$getPrototypeOf = Object.getPrototypeOf;
	var Klass = __webpack_require__(9).Klass;
	var dataSym = Symbol();
	var d3 = __webpack_require__(4);

	var dataPointSchema = __webpack_require__(10).dataPointSchema;
	var timeDataPointSchema = __webpack_require__(10).timeDataPointSchema;
	var dataSeriesSchema = __webpack_require__(10).dataSeriesSchema;
	var timeDataSeriesSchema = __webpack_require__(10).timeDataSeriesSchema;
	var multiSeriesChartSchema = __webpack_require__(10).multiSeriesChartSchema;
	var timeSeriesChartSchema = __webpack_require__(10).timeSeriesChartSchema;

	var moment = __webpack_require__(2);

	var DataPoint = function($__super) {
	  "use strict";

	  function DataPoint(obj) {
	    obj = obj || {key: '[none]'};
	    obj.schema = obj.schema || dataPointSchema;
	    $__Object$getPrototypeOf(DataPoint.prototype).constructor.call(this, obj);
	  }

	  DataPoint.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  DataPoint.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(DataPoint.prototype, "constructor", {
	    value: DataPoint
	  });

	  return DataPoint;
	}(Klass);
	exports.DataPoint = DataPoint;
	var TimeDataPoint = function($__super) {
	  "use strict";

	  function TimeDataPoint(obj) {
	    obj = obj || {key: new Date()};
	    obj.schema = obj.schema || timeDataPointSchema;
	    $__Object$getPrototypeOf(TimeDataPoint.prototype).constructor.call(this, obj);
	  }

	  TimeDataPoint.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  TimeDataPoint.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(TimeDataPoint.prototype, "constructor", {
	    value: TimeDataPoint
	  });

	  return TimeDataPoint;
	}(DataPoint);
	exports.TimeDataPoint = TimeDataPoint;
	var DataSeries = function($__super) {
	  "use strict";

	  function DataSeries(obj) {
	    obj = obj || {};
	    obj.schema = obj.schema || dataSeriesSchema;
	    $__Object$getPrototypeOf(DataSeries.prototype).constructor.call(this, obj);
	    /*Object.defineProperty(this, 'data', function () {
	      var data = [];
	      return {
	        enumerable: true,
	        configurable: true,
	        get: () => data,
	        set: function (d) {
	          data = d.sort( (a, b) => (a.key > b.key) ? 1 : -1 )
	          .filter( (v, i) => (i === 0 || v.key != d[i-1].key) )
	          .map( datum => new DataPoint(datum) );
	        }
	      };
	    }());*/
	    this.data = obj.data || [];
	  }

	  DataSeries.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  DataSeries.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(DataSeries.prototype, "constructor", {
	    value: DataSeries
	  });

	  $__Object$defineProperties(DataSeries.prototype, {
	    data: {
	      get: function() {
	        return this[dataSym];
	      },

	      set: function(d) {
	        var data = d3.map();
	        d.sort( function(a, b) {
	          return (a.key > b.key) ? 1 : -1;
	        } )
	        .filter( function(v, i) {
	          return i === 0 || v.key != d[i-1].key;
	        } )
	        .map( function(datum) {
	          return new DataPoint(datum);
	        } )
	        .forEach( function(datum) {
	          return data.set(datum.key, datum);
	        } );
	        this[dataSym] = data;
	      },

	      enumerable: true,
	      configurable: true
	    },

	    range: {
	      get: function() {
	        return d3.extent(this.data.values(), function(d) {
	          return d.value;
	        }) || [-Infinity, Infinity];
	      },

	      enumerable: true,
	      configurable: true
	    }
	  });

	  return DataSeries;
	}(Klass);
	exports.DataSeries = DataSeries;
	var TimeDataSeries = function($__super) {
	  "use strict";

	  function TimeDataSeries(obj) {
	    obj = obj || {};
	    obj.schema = obj.schema || timeDataSeriesSchema;
	    $__Object$getPrototypeOf(TimeDataSeries.prototype).constructor.call(this, obj);
	    this.data = obj.data || [];
	  }

	  TimeDataSeries.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  TimeDataSeries.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(TimeDataSeries.prototype, "constructor", {
	    value: TimeDataSeries
	  });

	  $__Object$defineProperties(TimeDataSeries.prototype, {
	    data: {
	      get: function() {
	        return this[dataSym];
	      },

	      set: function(d) {
	        var data = d3.map();
	        d.sort( function(a, b) {
	          return (a.key > b.key) ? 1 : -1;
	        } )
	        .filter( function(v, i) {
	          return i === 0 || v.key.toString() != d[i-1].key.toString();
	        } )
	        .map( function(datum) {
	          return new TimeDataPoint(datum);
	        } )
	        .forEach( function(datum) {
	          return data.set(datum.key, datum);
	        } );
	        this[dataSym] = data;
	      },

	      enumerable: true,
	      configurable: true
	    },

	    domain: {
	      get: function() {
	        var $__1;
	        var $__0;

	        var min = ($__0 = moment).min.apply($__0, $__Array$prototype$slice.call(this.data.values().map( function(d) {
	          return moment(d.key);
	        } ))).toDate();

	        var max = ($__1 = moment).max.apply($__1, $__Array$prototype$slice.call(this.data.values().map( function(d) {
	          return moment(d.key);
	        } ))).toDate();

	        return [min, max];
	      },

	      enumerable: true,
	      configurable: true
	    },

	    croppedDomain: {
	      get: function() {
	        var $__3;
	        var $__2;

	        var data = this.data.values().filter( function(datum) {
	          return datum.value != null;
	        } );

	        var min = ($__2 = moment).min.apply($__2, $__Array$prototype$slice.call(data.map( function(d) {
	          return moment(d.key);
	        } ))).toDate();

	        var max = ($__3 = moment).max.apply($__3, $__Array$prototype$slice.call(data.map( function(d) {
	          return moment(d.key);
	        } ))).toDate();

	        return [min, max];
	      },

	      enumerable: true,
	      configurable: true
	    }
	  });

	  return TimeDataSeries;
	}(DataSeries);
	exports.TimeDataSeries = TimeDataSeries;
	var MultiSeriesChart = function($__super) {
	  "use strict";

	  function MultiSeriesChart(obj) {
	    obj = obj || {};
	    obj.schema = obj.schema || multiSeriesChartSchema;
	    $__Object$getPrototypeOf(MultiSeriesChart.prototype).constructor.call(this, obj);
	    this.series = obj.series || [];
	  }

	  MultiSeriesChart.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  MultiSeriesChart.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(MultiSeriesChart.prototype, "constructor", {
	    value: MultiSeriesChart
	  });

	  $__Object$defineProperties(MultiSeriesChart.prototype, {
	    series: {
	      get: function() {
	        return this[dataSym];
	      },

	      set: function(s) {
	        this[dataSym] = s.map( function(serum) {
	          return new DataSeries(serum);
	        } );
	      },

	      enumerable: true,
	      configurable: true
	    },

	    range: {
	      get: function() {
	        if(this.range_min != null && this.range_max != null)
	          return [this.range_min, this.range_max];
	        var ranges = this.series.map( function(serum) {
	          return serum.range;
	        } );
	        return [
	          d3.min(ranges, function(arg$0) {
	            var iterator$0 = $__getIterator(arg$0),
	                iteratorValue$0 = {
	                  index: 0
	                },
	                min = (iteratorValue$0 = $__getIteratorRange(iterator$0, iteratorValue$0.index, 0, 1), iteratorValue$0.range[0]);

	            return min;
	          } ),
	          d3.max(ranges, function(arg$1) {
	            var iterator$1 = $__getIterator(arg$1),
	                iteratorValue$1 = {
	                  index: 0
	                },
	                max = (iteratorValue$1 = $__getIteratorRange(iterator$1, iteratorValue$1.index, 1, 1), iteratorValue$1.range[0]);

	            return max;
	          } )
	        ];
	      },

	      enumerable: true,
	      configurable: true
	    },

	    keys: {
	      get: function() {
	        var data = this.series.map( function(serum) {
	          return serum.data;
	        } )
	        .map( function(datum) {
	          return datum.values();
	        } );
	        data = d3.merge(data);
	        return data.map( function(datum) {
	          return datum.key;
	        } )
	      },

	      enumerable: true,
	      configurable: true
	    }
	  });

	  return MultiSeriesChart;
	}(Klass);
	exports.MultiSeriesChart = MultiSeriesChart;
	var TimeSeriesChart = function($__super) {
	  "use strict";

	  function TimeSeriesChart(obj) {
	    obj = obj || {};
	    obj.schema = obj.schema || timeSeriesChartSchema;
	    $__Object$getPrototypeOf(TimeSeriesChart.prototype).constructor.call(this, obj);
	    this.series = obj.series || [];
	  }

	  TimeSeriesChart.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  TimeSeriesChart.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(TimeSeriesChart.prototype, "constructor", {
	    value: TimeSeriesChart
	  });

	  $__Object$defineProperties(TimeSeriesChart.prototype, {
	    series: {
	      get: function() {
	        return this[dataSym];
	      },

	      set: function(s) {
	        this[dataSym] = s.map( function(serum) {
	          return new TimeDataSeries(serum);
	        } );
	      },

	      enumerable: true,
	      configurable: true
	    },

	    domain: {
	      get: function() {
	        var $__5;
	        var $__4;
	        var start, end;

	        var var$0 = [this.start || undefined, this.end || undefined],
	            iterator$2 = $__getIterator(var$0),
	            iteratorValue$2 = {
	              index: 0
	            },
	            start = (iteratorValue$2 = $__getIteratorRange(iterator$2, iteratorValue$2.index, 0, 1), iteratorValue$2.range[0]),
	            end = (iteratorValue$2 = $__getIteratorRange(iterator$2, iteratorValue$2.index, 1, 1), iteratorValue$2.range[0]);;

	        var domains = this.series.map( function(serum) {
	          return this.auto_crop ? serum.croppedDomain : serum.domain;
	        }.bind(this) );

	        if(!domains) return [start || new Date(), end || new Date()];

	        domains = domains.map( function(arg$2) {
	          var iterator$3 = $__getIterator(arg$2),
	              iteratorValue$3 = {
	                index: 0
	              },
	              a = (iteratorValue$3 = $__getIteratorRange(iterator$3, iteratorValue$3.index, 0, 1), iteratorValue$3.range[0]),
	              b = (iteratorValue$3 = $__getIteratorRange(iterator$3, iteratorValue$3.index, 1, 1), iteratorValue$3.range[0]);

	          return [moment(a), moment(b)];
	        } );

	        return [
	          start || ($__4 = moment).min.apply($__4, $__Array$prototype$slice.call(domains.map( function(arg$3) {
	            var iterator$4 = $__getIterator(arg$3),
	                iteratorValue$4 = {
	                  index: 0
	                },
	                min = (iteratorValue$4 = $__getIteratorRange(iterator$4, iteratorValue$4.index, 0, 1), iteratorValue$4.range[0]);

	            return min;
	          } ))).toDate(),
	          end || ($__5 = moment).max.apply($__5, $__Array$prototype$slice.call(domains.map( function(arg$4) {
	            var iterator$5 = $__getIterator(arg$4),
	                iteratorValue$5 = {
	                  index: 0
	                },
	                max = (iteratorValue$5 = $__getIteratorRange(iterator$5, iteratorValue$5.index, 1, 1), iteratorValue$5.range[0]);

	            return max;
	          } ))).toDate()
	        ];
	      },

	      enumerable: true,
	      configurable: true
	    }
	  });

	  return TimeSeriesChart;
	}(MultiSeriesChart);
	exports.TimeSeriesChart = TimeSeriesChart;
	function Chart(data) {
	  return data.x_axis_type === 'date' ? new TimeSeriesChart(data) : new MultiSeriesChart(data);
	}
	exports.Chart = Chart;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $__Array$prototype$slice = Array.prototype.slice;
	var privateSym = Symbol();

	var DataPoint = __webpack_require__(6).DataPoint;
	var TimeDataPoint = __webpack_require__(6).TimeDataPoint;
	var DataSeries = __webpack_require__(6).DataSeries;
	var TimeDataSeries = __webpack_require__(6).TimeDataSeries;
	var MultiSeriesChart = __webpack_require__(6).MultiSeriesChart;
	var TimeSeriesChartSchema = __webpack_require__(6).TimeSeriesChartSchema;

	var shapePath = __webpack_require__(11).shapePath;
	var shapes = __webpack_require__(11).shapes;
	var legendMarkers = __webpack_require__(11).legendMarkers;
	var moment = __webpack_require__(2);
	var d3 = __webpack_require__(4);
	var nv = __webpack_require__(12);

	function SmallMultiplesChart(mschart, node, size) {
	  var $__0;
	  node = node || d3.select('body').append('div').attr('id', 'small-chart-div-' + (mschart.uid || Math.floor(Math.random() * 1000)));
	  node.classed('chart-div', true);
	  size = size || [160, 160];
	  var width = size[0] || 160;
	  var height = size[1] || 160;

	  node.style('width', width + 'px')
	      .style('height', height + 'px');

	  node = node.append('svg')
	             .attr('class', 'upiq-small-chart chart-svg');

	  var margins = {top: 10, bottom: 50, left: 25, right: 30};
	  var data = extractData(mschart);
	  var domain = croppedDomain(mschart);
	  var tick_domain = domain.slice();
	  tick_domain[1] = d3.time.month.offset(domain[1], 1);

	  var tickVals = ($__0 = d3.time).months.apply($__0, $__Array$prototype$slice.call(tick_domain)).map( function(month) {
	    return month.valueOf();
	  } );

	  return function () {
	    node.append('g')
	    .attr('class', 'nv-background')
	    .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

	    var chart = nv.models.lineChart()
	                  .id('small-' + mschart.uid)
	                  .showLegend(false)
	                  .useInteractiveGuideline(false)
	                  .interactive(false)
	                  .tooltips(false)
	                  .margin(margins)
	                  .transitionDuration(500)
	                  .tooltipContent(function(seriesName, x, y, graph) {
	                    return '<h3>' + seriesName.slice(0, seriesName.lastIndexOf('::')) + '</h3>' + '<p>' + graph.point.note + '</p>'
	                    + '<p class=\'footer\'>' + graph.point.title + ', ' + graph.series.format(y / 100) + '</p>';
	                  })
	                  chart.lines.scatter.onlyCircles(false).useVoronoi(false);

	    chart.xAxis
	         .tickFormat( function(d) {
	      return d3.time.format('%B')(new Date(d))[0];
	    } )
	         .tickValues(tickVals)
	         .showMaxMin(false)
	         .tickPadding(3)
	    chart.yAxis
	         .tickFormat(d3.format(','))
	         .showMaxMin(false);
	    chart
	         .xDomain(domain.map( function(x) {
	      return x.valueOf();
	    } ))
	         .yDomain(mschart.range);

	    node.datum(data).call(chart);

	    var yscale = chart.yScale();
	    var xscale = chart.xScale();

	    //Dashed lines for all missing areas
	    node.selectAll('.nv-wrap.nv-line > g > g.nv-groups .nv-group').filter( function(d) {
	      return d.dashed;
	    } )
	        .style('stroke-dasharray', '3 3');
	    node.selectAll('.nv-linesWrap .nv-wrap.nv-line g.nv-scatterWrap .nv-wrap.nv-scatter .nv-groups g.nv-group').filter( function(d) {
	      return d.dashed;
	    } )
	        .attr('visibility', 'hidden')
	        .remove();

	    //Fix Axis Ticks
	    node.selectAll('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis g.tick:not(:nth-of-type(1)):not(:nth-last-of-type(1))')
	      .append('line')
	      .attr('y2', 0)
	      .attr('x2', 4)
	      .style('stroke', 'dimgray');

	    /*//Fix for Firefox - 2px lines must be shifted by .5px to align to pixel boundaries
	    node.select('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis .tick:nth-of-type(1) line')
	        .attr('y1', 0.5)
	        .attr('y2', 0.5);
	    node.select('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis .tick:nth-last-of-type(1) line')
	        .attr('y1', -0.5)
	        .attr('y2', -0.5);*/

	    //Graph Title
	    node.append('g')
	        .attr('class', 'nvd3 nv-small-chart nv-chart-title')
	        .append('text')
	        .attr('class', 'nv-small-chart nv-title')
	        .attr('x', 5)
	        .attr('y', height - 2)
	        .text(mschart.title);

	    //Legend
	    var legend = node.append('g')
	                     .attr('class', 'nvd3 nv-legend')
	                     .attr('transform', 'translate(' + 5 + ',' + (height - 30) + ')')
	                     .append('g')
	                     .attr('class', 'nv-leg')
	                     .selectAll('circle.legend-pt.nv-point')
	                     .data(mschart.series.slice(0, 2))
	                     .enter().append('g');
	    legend.append('path')
	          .attr('class', 'nv-legendpt nv-point')
	          .attr('transform', function(d, i) {
	      return 'translate(5.5,' + (i * 11) + ')';
	    })
	          .style('stroke', function(d) {
	      return d.color;
	    } )
	          .style('stroke-opacity', 1)
	          .style('fill', function(d) {
	      return d.color;
	    } )
	          .style('fill-opacity', 0.5)
	          .call(legendMarkers, 8);
	    legend.append('text')
	          .attr('class', 'nv-goal-lbl')
	          .attr('text-anchor', 'start')
	          .attr('x', 15)
	          .attr('y', function(d, i) {
	      return (i * 12) + 3;
	    } )
	          .attr('dy', '0.1em')
	          .text( function(d) {
	      return d.title;
	    } );

	    //Goal Line
	    if(mschart.goal) {
	      var goal = node.append('g')
	                     .attr('class', 'nvd3 nv-distribution')
	                     .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')')
	                     .selectAll('line.nv-goal')
	                     .data([mschart.goal])
	                     .enter().append('g')
	                     .attr('class', 'nv-dist nv-goal')
	                     .attr('transform',
	                      'translate(0,' + Math.floor(yscale(mschart.goal)) + ')')
	                     .style('color', mschart.goal_color);
	      goal.append('line')
	          .attr('class', 'nv-goal-line')
	          .attr('x2', xscale(domain[1].valueOf()));
	      goal.append('text')
	          .attr('class', 'nv-goal-lbl')
	          .attr('text-anchor', 'start')
	          .attr('x', xscale(domain[1].valueOf()) + 2)
	          .attr('y', 2)
	          .attr('textLength', margins.right - 2)
	          .attr('lengthAdjust', 'spacing')
	          .text(mschart.goal + ' (G)');
	    }

	    //Year Labels
	    var yrs = node.append('g')
	                   .attr('class', 'nvd3 nv-year-wrap')
	                   .attr('transform', 'translate(' + margins.left + ',0)')
	                   .selectAll('line.nv-goal')
	                   .data([true])
	                   .enter().append('g')
	                   .attr('class', 'nv-years');
	    yrs.append('text')
	       .attr('class', 'nv-year-lbl')
	       .attr('text-anchor', 'start')
	       .attr('x', xscale(domain[0].valueOf()))
	       .attr('y', margins.top - 5)
	       .text(domain[0].getFullYear());
	    if(domain[1].getFullYear() !== domain[0].getFullYear()) {
	      yrs.append('text')
	         .attr('class', 'nv-year-lbl')
	         .attr('text-anchor', 'end')
	         .attr('x', xscale(domain[1].valueOf()))
	         .attr('y', margins.top - 5)
	         .text(domain[1].getFullYear());
	    }

	    //Zebra striped background
	    var tickDiff = xscale(tickVals[1]) - xscale(tickVals[0]);
	    var bg = node.select('.nv-background')
	                 .selectAll("rect.nv-zebra")
	                 .data(tickVals)
	                 .enter().append('rect')
	                 .attr('y', 0)
	                 .attr('x', function(d) {
	      return xscale(d);
	    })
	                 .attr('height', yscale(mschart.range[0]))
	                 .attr('width', tickDiff)
	                 .attr('visibility', function(d, i) {
	      return i !== (tickVals.length - 1) ? 'visible' : 'hidden';
	    } )
	                 .style('fill', function(d) {
	      return new Date(d).getFullYear() === domain[0].getFullYear() ? '#E6F0FF' : '#FFEBF5';
	    } )
	                 .style('opacity', function(d, i) {
	      return i % 2 === 0 ? 0.60 : 1.0;
	    } );

	    /*chart.dispatch.on('changeState.fix_axes', function (e) {
	      node.select('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis .tick:nth-of-type(1) line')
	        .attr('y1', 0.5)
	        .attr('y2', 0.5);
	    node.select('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis .tick:nth-last-of-type(1) line')
	        .attr('y1', -0.5)
	        .attr('y2', -0.5);
	    });*/
	    console.log(chart);
	    return chart;
	  };
	}

	exports.SmallMultiplesChart = SmallMultiplesChart;function croppedDomain(mschart) {
	  var domain = mschart.domain;
	  if( moment(domain[1]).diff(moment(domain[0]), 'months') > 12) {
	    domain[0] = d3.time.month.offset(domain[1], -12)
	  }
	  return domain;
	}

	exports.croppedDomain = croppedDomain;function preprocessData(mschart) {
	  var $__1;
	  var data = [];
	  var domain = croppedDomain(mschart);
	  domain[1] = d3.time.month.offset(domain[1], 2);
	  var keys = ($__1 = d3.time.month).range.apply($__1, $__Array$prototype$slice.call(domain));
	  var chart_series = mschart.series;
	  if(chart_series.length > 2) chart_series = chart_series.slice(-2);

	  chart_series.forEach(function (series, index) {
	    var obj = {
	      key: series.title,
	      color: series.color,
	      values: [],
	      format: d3.format(series.display_format),
	      incomplete: series.break_lines
	    };

	    keys.forEach(function (key) {
	      var datapoint = series.data.get(key);
	      if(series.data.has(key))
	        obj.values.push({
	          x: moment(datapoint.key).valueOf(),
	          y: datapoint.value,
	          size: series.marker_size,
	          shape: series.marker_style,
	          note: datapoint.note,
	          title: datapoint.title
	          });
	      else
	        obj.values.push({
	          x: moment(new Date(key)).valueOf(),
	          missing: true
	        });
	    });
	    data.push(obj);
	  });

	  return data;
	}

	function extractData(mschart) {
	  var data = [];
	  var oldData = preprocessData(mschart);
	  oldData.forEach(function (series, i) {
	    var poly_set = [];
	    var poly_line, prev_pt = {missing: true};
	    var hidden = series.incomplete === 'hidden';
	    var solid = series.incomplete === 'solid';
	    series.values.forEach(function (pt, i) {
	      if(!pt.missing) {
	        if(!poly_line) {
	          poly_line = [];
	          prev_pt = pt;
	        }
	         if(!prev_pt.missing) {
	          poly_line.push(pt);
	        } else {
	          poly_line.push(pt);
	          if(!solid) {
	            poly_set.push(poly_line);
	            poly_line = [ pt ];
	          }
	        }
	        if(i === (series.values.length)) {
	          poly_set.push(poly_line);
	        }
	      }
	      if(pt.missing) {
	         if(!prev_pt.missing && !solid) {
	          poly_set.push(poly_line);
	          poly_line = [ prev_pt ];
	        }
	      }
	      prev_pt = pt;
	    });
	    if(solid)
	      poly_set = [ poly_line ];
	    poly_set.forEach(function (poly_line, i) {
	      if(!hidden)
	        data.push({
	          key: series.key + '::' + i,
	          color: series.color,
	          values: poly_line,
	          format: series.format,
	          dashed: i % 2 === 1
	        });
	      else if(i % 2 === 0)
	          data.push({
	          key: series.key + '::' + i,
	          color: series.color,
	          values: poly_line,
	          format: series.format,
	          dashed: false
	        });
	    });
	  });
	  return data;
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $__Array$prototype$slice = Array.prototype.slice;
	var privateSym = Symbol();

	var DataPoint = __webpack_require__(6).DataPoint;
	var TimeDataPoint = __webpack_require__(6).TimeDataPoint;
	var DataSeries = __webpack_require__(6).DataSeries;
	var TimeDataSeries = __webpack_require__(6).TimeDataSeries;
	var MultiSeriesChart = __webpack_require__(6).MultiSeriesChart;
	var TimeSeriesChartSchema = __webpack_require__(6).TimeSeriesChartSchema;

	var moment = __webpack_require__(2);
	var d3 = __webpack_require__(4);
	var nv = __webpack_require__(12);
	var addStylesheetRules = __webpack_require__(5).addStylesheetRules;
	var debounce = __webpack_require__(5).debounce;
	var d3textWrap = __webpack_require__(5).d3textWrap;

	function LargeChart(mschart, node) {
	  var $__0;
	  node = node || d3.select('body').append('div').attr('id', 'chart-div-' + (mschart.uid || Math.floor(Math.random() * 1000)));
	  var parentNode = node;

	  node = parentNode.append('div')
	             .classed('chart-div', true)
	             .style("width", mschart.width + mschart.width_units);

	  var relative = (mschart.width_units == '%');
	  var ratio = mschart.aspect_ratio ? (mschart.aspect_ratio[1] / mschart.aspect_ratio[0]) : undefined;
	  var yMax, xMax;

	  if(relative) {
	    yMax = mschart.range_max - mschart.range_min;
	    xMax = ratio * (mschart.range_max - mschart.range_min);
	  } else {
	    if(!ratio) {
	      yMax = mschart.height;
	      xMax = mschart.width;
	    } else {
	      yMax = ratio * mschart.width;
	      xMax = mschart.width;
	    }
	  }

	  if(relative) {
	    if(ratio)
	      addStylesheetRules([
	        ['#' + parentNode.attr('id') + ' .chart-div:after',
	          ['content', '""'],
	          ['display', 'block'],
	          ['margin-top', (ratio * 100) + '%']
	        ]
	      ]);
	    else
	      node.style('height', mschart.height + mschart.height_units);
	  } else {
	    if(!ratio)
	      node.style('height', mschart.height + mschart.height_units);
	    else
	      node.style('height', (ratio * mschart.width) + 'px')
	  }

	  node = node.append('svg')
	             .attr('class', 'upiq-chart chart-svg');

	  var margins = {top: 8, bottom: 75, left: 40, right: 120};
	  var data = extractData(mschart);
	  var domain = mschart.domain;
	  var tick_domain = domain.slice();
	  tick_domain[1] = d3.time.month.offset(domain[1], 1);

	  var tickVals = ($__0 = d3.time).months.apply($__0, $__Array$prototype$slice.call(tick_domain)).map( function(month) {
	    return month.valueOf();
	  } );

	  return function () {
	    node.append('g')
	    .attr('class', 'nv-background')
	    .attr('transform', 'translate(' + margins.left + ',' + margins.top + ')');

	    var chart = nv.models.lineChart()
	                  .id(mschart.uid)
	                  .showLegend(false)
	                  .useInteractiveGuideline(false)
	                  .tooltips(false)
	                  .interactive(false)
	                  .margin(margins)
	                  .transitionDuration(500)
	                  .tooltipContent(function(seriesName, x, y, graph) {
	                    return '<h3>' + seriesName.slice(0, seriesName.lastIndexOf('::')) + '</h3>' + '<p>' + graph.point.note + '</p>'
	                    + '<p class=\'footer\'>' + graph.point.title + ', ' + graph.series.format(y / 100) + '</p>';
	                  })
	                  chart.lines.scatter.onlyCircles(false).useVoronoi(false);

	    chart.xAxis
	         .tickFormat( function(d) {
	      return d3.time.format('%B')(new Date(d)).slice(0,3) + " " + d3.time.format('%Y')(new Date(d));
	    } )
	         .tickValues(tickVals)
	         .showMaxMin(false)
	         .tickPadding(6)
	         .rotateLabels(-45);
	    chart.yAxis
	         .tickFormat(d3.format(','))
	         .ticks(5)
	         .showMaxMin(false)
	         .tickPadding(6);
	    chart
	         .xDomain(domain.map( function(x) {
	      return x.valueOf();
	    } ))
	         .yDomain(mschart.range);
	    if(mschart.x_label)
	      chart.xAxis.axisLabel(mschart.x_label)
	    if(mschart.y_label)
	      chart.yAxis.axisLabel(mschart.y_label)
	                 .axisLabelDistance(48);

	    node.datum(data).call(chart);

	    var yscale = chart.yScale();
	    var xscale = chart.xScale();

	    node.select('.nv-wrap.nv-lineChart > g')
	        .insert('g', '.nv-linesWrap')
	        .attr('class', 'nvd3 nv-distribution');

	    //Dashed lines for all missing areas
	    node.selectAll('.nv-wrap.nv-line > g > g.nv-groups .nv-group')
	        .style('stroke-dasharray', function(d) {
	      return d.dashed ? '5 5' : 'none';
	    } )
	        .style('stroke-width', function(d) {
	      return d.thickness;
	    } );
	    node.selectAll('.nv-linesWrap .nv-wrap.nv-line g.nv-scatterWrap .nv-wrap.nv-scatter .nv-groups g.nv-group')
	        .style('stroke-width', function(d) {
	      return d.markerThickness;
	    } );

	    //Fix Axis Ticks
	    node.selectAll('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis g.tick:not(:nth-of-type(1)):not(:nth-last-of-type(1))')
	      .append('line')
	      .attr('y2', 0)
	      .attr('x2', 4)
	      .style('stroke', 'dimgray');

	    //Graph Title
	    if(mschart.title) {
	      parentNode.insert('h4', 'div.chart-div')
	                .attr('class', 'chart-title')
	                .text(mschart.title);
	                if(mschart.description) {
	                  parentNode.insert('p', 'div.chart-div')
	                            .attr('class', 'chart-desc')
	                            .text(mschart.description);
	                }
	    }

	    /*//Fix for Firefox - 2px lines must be shifted by .5px to align to pixel boundaries
	    node.select('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis .tick:nth-of-type(1) line')
	        .attr('y1', 0.5)
	        .attr('y2', 0.5);
	    node.select('.nv-y.nv-axis .nvd3.nv-wrap.nv-axis .tick:nth-last-of-type(1) line')
	        .attr('y1', -0.5)
	        .attr('y2', -0.5);*/
	    /*
	    //Graph Title
	    node.append('g')
	        .attr('class', 'nvd3 nv-small-chart nv-chart-title')
	        .append('text')
	        .attr('class', 'nv-small-chart nv-title')
	        .attr('x', 5)
	        .attr('y', 10)
	        .text(mschart.title);

	    var legend = node.append('g')
	                     .attr('class', 'nvd3 nv-legend')
	                     .attr('transform', 'translate(' + 5 + ',' + '100' + ')')
	                     .append('g')
	                     .attr('class', 'nv-leg')
	                     .selectAll('circle.legend-pt.nv-point')
	                     .data(mschart.series.slice(0, 2))
	                     .enter().append('g');*/
	    render(mschart, node, margins).call(chart);
	    console.log(chart);
	    if(relative)
	      nv.utils.windowResize(debounce(render(mschart, node, margins).bind(chart), 250, false));
	    return chart;
	  };
	}

	exports.LargeChart = LargeChart;function render(mschart, node, margins) {
	  return function () {
	    var rightHandLegend = function() {
	      //Legend
	      if(mschart.series.length > 1) {
	        var legPadding = 5, legWidth = margins.right - (2 * legPadding), markerWidth = 10;;
	        var legWrap = node.selectAll('g.nv-legend').data([mschart.series]);
	        var legWrapEnter = legWrap.enter().append('g')
	                                   .attr('class', 'nvd3 nv-legend')
	                                   .attr('transform', 'translate(' + (xMax + margins.left) + ',' + margins.top + ')');

	        var legend = legWrap.selectAll('g.nv-leg-entry').data(mschart.series);
	        var legEnter = legend.enter().append('g')
	                                     .attr('class', 'nv-leg-entry');
	        var dy = legPadding * 2;
	        legEnter.each(function (d, i) {
	          var el = d3.select(this);
	          el.attr('transform', 'translate(' + (2 * legPadding) +  ',' + dy + ')');
	          el.append('text')
	            .text(d.title)
	            .attr('y', markerWidth)
	            .attr('transform', 'translate(' + (legPadding + markerWidth) + ',0)')
	            .call(d3textWrap, legWidth - markerWidth - (2 * legPadding), 0);
	          dy += this.getBoundingClientRect().height + 10;
	          el.append('rect')
	              .attr('x', 0)
	              .attr('y', 0)
	              .attr('width', 10)
	              .attr('height', 10)
	              .style('fill', function(d, i) {
	            return d.color;
	          } )
	              .style('stroke', function(d, i) {
	            return d.color;
	          } )
	              .style('fill-opacity', 0.5 );
	        });
	        var legHeight = legWrap.node().getBoundingClientRect().height + 15;

	        legWrapEnter.append('rect')
	                    .attr('x', legPadding)
	                    .attr('height', legHeight)
	                    .attr('width', legWidth)
	                    .attr('stroke', 'black')
	                    .attr('stroke-opacity', 0.5)
	                    .attr('stroke-width', 1)
	                    .attr('fill-opacity', 0);
	        legWrap.transition().duration(500).attr('transform', 'translate(' + (margins.left + xMax) + ',' + (margins.top + (yRange / 2) - (legHeight / 2)) + ')');
	      }
	    }



	    this.update();
	    node.selectAll('.nv-linesWrap .nv-wrap.nv-line g.nv-scatterWrap .nv-wrap.nv-scatter .nv-groups g.nv-group').filter( function(d) {
	      return d.dashed;
	    } )
	        .remove();

	    var yscale = this.yScale();
	    var xscale = this.xScale();
	    var xMax = xscale(mschart.domain[1].valueOf());
	    var yMax = yscale(mschart.range[1]);
	    var yMin = yscale(mschart.range[0]);
	    var yRange = yMin - yMax;
	    var chartHeight = node.node().getBoundingClientRect().height;

	    //Goal Line
	    if(mschart.goal) {
	      var goal = node.select('g.nv-distribution').selectAll('g.nv-dist.nv-goal').data([mschart.goal]);
	      var goalEnter = goal.enter().append('g')
	                          .attr('class', 'nv-dist nv-goal')
	                          .style('color', mschart.goal_color);
	      goalEnter.append('line')
	               .attr('class', 'nv-goal-line');
	      goalEnter.append('text')
	               .attr('class', 'nv-goal-lbl')
	               .text('Goal: ' + mschart.goal)
	               .attr('text-anchor', 'start')
	               .attr('x', 3)
	               .attr('y', -5);

	      goal.transition().duration(500).attr('transform', 'translate(0,' + (Math.floor(yscale(mschart.goal)) + 0.5) + ')');
	      goal.select('line').transition().duration(500).attr('x2', xMax);
	    }

	    //Legend
	    rightHandLegend();
	  }
	}

	function preprocessData(mschart) {
	  var $__1;
	  var data = [];
	  var domain = mschart.domain;
	  domain[1] = d3.time.month.offset(domain[1], 2);
	  var keys = ($__1 = d3.time.month).range.apply($__1, $__Array$prototype$slice.call(domain));

	  mschart.series.forEach(function (series, index) {
	    var obj = {
	      key: series.title,
	      color: series.color,
	      values: [],
	      format: d3.format(series.display_format),
	      incomplete: series.break_lines,
	      thickness: series.line_width,
	      markerThickness: series.marker_width
	    };

	    keys.forEach(function (key) {
	      var datapoint = series.data.get(key);
	      if(series.data.has(key))
	        obj.values.push({
	          x: moment(datapoint.key).valueOf(),
	          y: datapoint.value,
	          size: series.marker_size,
	          shape: series.marker_style,
	          note: datapoint.note,
	          title: datapoint.title,
	          });
	      else
	        obj.values.push({
	          x: moment(new Date(key)).valueOf(),
	          missing: true
	        });
	    });
	    data.push(obj);
	  });

	  return data;
	}

	function extractData(mschart) {
	  var data = [];
	  var oldData = preprocessData(mschart);
	  oldData.forEach(function (series, i) {
	    var poly_set = [];
	    var poly_line, prev_pt = {missing: true};
	    var hidden = series.incomplete === 'hidden';
	    var solid = series.incomplete === 'solid';
	    series.values.forEach(function (pt, i) {
	      if(!pt.missing) {
	        if(!poly_line) {
	          poly_line = [];
	          prev_pt = pt;
	        }
	         if(!prev_pt.missing) {
	          poly_line.push(pt);
	        } else {
	          poly_line.push(pt);
	          if(!solid) {
	            poly_set.push(poly_line);
	            poly_line = [ pt ];
	          }
	        }
	        if(i === (series.values.length)) {
	          poly_set.push(poly_line);
	        }
	      }
	      if(pt.missing) {
	         if(!prev_pt.missing && !solid) {
	          poly_set.push(poly_line);
	          poly_line = [ prev_pt ];
	        }
	      }
	      prev_pt = pt;
	    });
	    if(solid)
	      poly_set = [ poly_line ];
	    poly_set.forEach(function (poly_line, i) {
	      if(!hidden)
	        data.push({
	          key: series.key + '::' + i,
	          color: series.color,
	          values: poly_line,
	          format: series.format,
	          thickness: series.thickness,
	          markerThickness: series.markerThickness,
	          dashed: i % 2 === 1
	        });
	      else if(i % 2 === 0)
	          data.push({
	          key: series.key + '::' + i,
	          color: series.color,
	          values: poly_line,
	          format: series.format,
	          thickness: series.thickness,
	          markerThickness: series.markerThickness,
	          dashed: false
	        });
	    });
	  });
	  return data;
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $__Object$defineProperty = Object.defineProperty;
	var $__Object$create = Object.create;
	var $__Object$getPrototypeOf = Object.getPrototypeOf;
	var $__Object$defineProperties = Object.defineProperties;
	'use strict';
	var moment = __webpack_require__(2);

	var Schema = function() {
	  "use strict";
	  function Schema() {}
	  return Schema;
	}();
	exports.Schema = Schema;
	function schematize(fields, schema) {
	  var fieldset = [];
	  Object.getOwnPropertyNames(fields).forEach(function (field) {
	    fieldset.push(new Field(field, this[field]));
	  }, fields);
	  fieldset.forEach(function (field) {
	    Object.defineProperty(schema, field.name, {
	      enumerable: true,
	      configurable: true,
	      value: field
	    });
	  });
	  return schema;
	}

	exports.schematize = schematize;var Field = function() {
	  "use strict";

	  function Field(name, descriptor) {
	    if(name == null) throw new Error('Field must be named');
	    descriptor = descriptor || {};
	    this.name = name; //field name, REQUIRED
	    this.title = descriptor.title; //label for the field
	    this.description = descriptor.description;
	    this.type = descriptor.type; //constrain to specific type, either pass in a class or a typeof. undefined means ignored
	    this.vocabulary = descriptor.vocabulary; //constrain field to specific set of values.
	    this.constraint = descriptor.constraint; //a callback function which can throw a ValidationError or return a normalized value. the field is passed in as 'this'
	    this.required = descriptor.required || false; //ValidationError thrown if this field is not set
	    this.defaultValue = descriptor.defaultValue; //when there is no value stored, the getter will return this value
	  }

	  $__Object$defineProperties(Field.prototype, {
	    validate: {
	      value: function(value, obj) {
	        var normalized = value;
	        obj = obj || {};
	        if(value != null) normalized = this.constraint ? (this.constraint.call(this, value, obj) || value) : value;

	        if(this.type && (normalized != null)) {
	          if(typeof this.type === 'string') {
	            if(typeof normalized !== this.type) throw new ValidationTypeError(this, (typeof normalized), 'Expected type: [' + this.type + ']');
	          } else if (typeof this.type === 'function') {
	            if(! (normalized instanceof this.type)) throw new ValidationTypeError(this, (typeof normalized), 'Expected type: [' + this.type + ']');
	          }
	        }

	        if(this.required && (normalized == null)) {
	          if(this.defaultValue != null) normalized = this.defaultValue;
	          else throw new ValidationError(this, normalized, 'Required fields cannot be null');
	        }

	        if(this.vocabulary && this.vocabulary.indexOf(normalized) === -1) throw new ValidationError(this, normalized, 'Allowed values: ' + this.vocabulary);

	        return normalized;
	      },

	      enumerable: false,
	      writable: true
	    }
	  });

	  return Field;
	}();
	exports.Field = Field;
	var ValidationError = function($__super) {
	  "use strict";

	  function ValidationError(field, value, msg) {
	    $__Object$getPrototypeOf(ValidationError.prototype).constructor.call(this);
	    this.message = 'Invalid value: ' + value + ' on field: ' + field.name + (msg ? '! (' + msg + ')' : '!');
	    this.name = 'ValidationError';
	  }

	  ValidationError.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  ValidationError.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(ValidationError.prototype, "constructor", {
	    value: ValidationError
	  });

	  return ValidationError;
	}(Error);
	exports.ValidationError = ValidationError;
	var ValidationTypeError = function($__super) {
	  "use strict";

	  function ValidationTypeError(field, type, msg) {
	    $__Object$getPrototypeOf(ValidationTypeError.prototype).constructor.call(this);
	    this.message = 'Invalid type: [' + type + '] on field: ' + field.name + (msg ? '! (' + msg + ')' : '!');
	    this.name = 'ValidationTypeError';
	  }

	  ValidationTypeError.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  ValidationTypeError.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(ValidationTypeError.prototype, "constructor", {
	    value: ValidationTypeError
	  });

	  return ValidationTypeError;
	}(TypeError);
	exports.ValidationTypeError = ValidationTypeError;
	var Klass = function() {
	  "use strict";

	  function Klass(obj) {
	    obj = obj || {};
	    var schema = obj.schema || schematize(obj, {});
	    this.schema = schema;
	    function descriptor(field, o) {
	      var value;
	      return {
	        enumerable: true,
	        configurable: true,
	        get: function () {
	          return (value != null) ? value : field.defaultValue;
	        },
	        set: function (v) {
	          value = field.validate(v, o);
	        }
	      };
	    }
	    Object.keys(schema).forEach(function (field) {
	      Object.defineProperty(this, schema[field].name, descriptor(schema[field], this));
	    }, this);

	    Object.keys(schema).forEach(function (k) {
	      this[k] = obj[k];
	    }, this);
	  }

	  return Klass;
	}();
	exports.Klass = Klass;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $__Object$defineProperty = Object.defineProperty;
	var $__Object$create = Object.create;
	var $__Object$getPrototypeOf = Object.getPrototypeOf;
	var Schema = __webpack_require__(9).Schema;
	var schematize = __webpack_require__(9).schematize;
	var ValidationError = __webpack_require__(9).ValidationError;
	var ValidationTypeError = __webpack_require__(9).ValidationTypeError;
	var moment = __webpack_require__(2);

	function dateTypeConstraint(value) {
	  var m = moment(value);
	  if(!m.isValid()) return null;
	  return m.toDate();
	}

	var DataPointSchema = function($__super) {
	  "use strict";

	  function DataPointSchema() {
	    $__Object$getPrototypeOf(DataPointSchema.prototype).constructor.call(this);
	    schematize({
	      key: {
	        title: 'Data point key',
	        type: 'string',
	        required: true
	      },
	      value: {
	        title: 'Data point value',
	        type: 'number',
	        required: false  // null value means explicitly N/A for key
	      },
	      title: {
	        title: 'Descriptive label (for key)',
	        type: 'string',
	        required: false,
	      },
	      valueLabel: {
	        title: 'Value label',
	        description: 'May be used for N= labels for denominator value',
	        type: 'string',
	        required: false
	      },
	      note: {
	        title: 'Data point note',
	        description: 'Descriptive note, used in interactive features',
	        type: 'string',
	        defaultValue: ''
	      },
	      uri: {
	        title: 'Data point URI',
	        description: 'Link to data source for point',
	        type: 'string',
	        required: false
	      }
	    }, this);
	  }

	  DataPointSchema.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  DataPointSchema.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(DataPointSchema.prototype, "constructor", {
	    value: DataPointSchema
	  });

	  return DataPointSchema;
	}(Schema);
	exports.DataPointSchema = DataPointSchema;
	var dataPointSchema = new DataPointSchema();
	exports.dataPointSchema = dataPointSchema;
	var TimeDataPointSchema = function($__super) {
	  "use strict";

	  function TimeDataPointSchema() {
	    $__Object$getPrototypeOf(TimeDataPointSchema.prototype).constructor.call(this);
	    schematize({
	      key: {
	        title: 'Date key',
	        description: 'Time series data point key (Date value); ' +
	                     'should be naive dates stored as localtime.',
	        type: Date,
	        required: true,
	        constraint: dateTypeConstraint
	      }
	      }, this);
	  }

	  TimeDataPointSchema.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  TimeDataPointSchema.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(TimeDataPointSchema.prototype, "constructor", {
	    value: TimeDataPointSchema
	  });

	  return TimeDataPointSchema;
	}(DataPointSchema);
	exports.TimeDataPointSchema = TimeDataPointSchema;
	var timeDataPointSchema = new TimeDataPointSchema();
	exports.timeDataPointSchema = timeDataPointSchema;
	var DataSeriesSchema = function($__super) {
	  "use strict";

	  function DataSeriesSchema() {
	    $__Object$getPrototypeOf(DataSeriesSchema.prototype).constructor.call(this);
	    schematize({
	          title: {
	            title: 'Series title',
	            description: 'Series/line name or title',
	            type: 'string',
	            required: false
	          },
	          description: {
	            title: 'Series description',
	            description: 'Descriptive text metadata about series, often' +
	                         'is empty or unused',
	            type: 'string',
	            required: false
	          },
	          line_width: {
	            title: 'Line width',
	            description: 'Line width (in relative px units) Considered '+
	                         'in line plots only, ignored otherwise.',
	            type: 'number',
	            required: false,
	            defaultValue: 2.0
	          },
	          color: {
	            title: 'Line/bar color',
	            description: 'Primary series color name or HTML color code; ' +
	                         'if unspecified ("Auto" default), defer to ' +
	                         'automatic default color palette choices.',
	            type: 'string',
	            defaultValue: 'auto',
	            required: false
	          },
	          marker_color: {
	            title: 'Point marker fill color',
	            description: 'Data point marker color name or code; ' +
	                         'if unspecified ("Auto" default), defer to ' +
	                         'match the line/bar color.',
	            type: 'string',
	            defaultValue: "Auto",
	            required: false
	          },
	          marker_size: {
	            title: 'Marker size',
	            description: 'Marker size (in relative px units) Considered '+
	                         'in line plots only, ignored otherwise.',
	            type: 'number',
	            required: false,
	            defaultValue: 9.0
	          },
	          marker_width: {
	            title: 'Marker stroke width',
	            description: 'Marker stroke width (in relative px units) ' +
	                         'Considered in line plots only, ignored ' +
	                         'otherwise.  Currently only used for marker ' +
	                         'style/shape that is not filled.',
	            type: 'number',
	            required: false,
	            defaultValue: 2.0
	          },
	          marker_style: {
	            title: 'Marker shape style',
	            description: 'Marker shape, selected from enumerated ' +
	                         'vocabulary of allowable choices.',
	            type: 'string',
	            constraint: function (value, obj) {
	              if(value === 'x') return 'cross';
	              if(value === 'filledCircle') {
	                return 'circle';
	              }
	              if(value === 'filledSquare') {
	                return 'square';
	              }
	              if(value === 'filledDiamond') {
	                return 'diamond';
	              }
	            },
	            vocabulary: [
	              'diamond',
	              'circle',
	              'square',
	              'cross',
	              'plus',
	              'dash',
	              'triangle-up',
	              'triangle-down'
	            ],
	            required: false,
	            defaultValue: 'square'
	          },
	          show_trend: {
	            title: 'Show trend line?',
	            type: 'boolean',
	            defaultValue: false
	          },
	          trend_width: {
	            title: 'Trend line width, if applicable',
	            type: 'number',
	            defaultValue: 2.0
	          },
	          trend_color: {
	            title: 'Trend line color, if applicable',
	            description: 'Trend line color name or code; ' +
	                         'if unspecified ("Auto" default), defer to ' +
	                         'match the line/bar color.',
	            type: 'string',
	            defaultValue: "Auto"
	          },
	          point_labels: {
	            title: 'Show point labels?',
	            description: 'Show labels above each marker for data value? ' +
	                         'The default value of defer obeys plot-wide ' +
	                         'setting, where show/omit explicitly do as ' +
	                         'described.',
	            type: 'string',
	            vocabulary: ['defer', 'omit', 'show'],
	            defaultValue: 'defer'
	          },
	          display_format: {
	            title: 'Display format for y values',
	            description: 'Standard formatting string',
	            type: 'string',
	            defaultValue: '%%.%if'
	          }
	        }, this);
	  }

	  DataSeriesSchema.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  DataSeriesSchema.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(DataSeriesSchema.prototype, "constructor", {
	    value: DataSeriesSchema
	  });

	  return DataSeriesSchema;
	}(Schema);
	exports.DataSeriesSchema = DataSeriesSchema;
	var dataSeriesSchema = new DataSeriesSchema();
	exports.dataSeriesSchema = dataSeriesSchema;
	var TimeDataSeriesSchema = function($__super) {
	  "use strict";

	  function TimeDataSeriesSchema() {
	    $__Object$getPrototypeOf(TimeDataSeriesSchema.prototype).constructor.call(this);
	    schematize({
	      break_lines: {
	        title: 'Break lines?',
	        description:
	            'When a value is missing for name or date on the ' +
	            'X axis, should the line be broken/discontinuous ' +
	            'such that no line runs through the empty/null ' +
	            'value?  This defaults to true, which means that ' +
	            'no line will run from adjacent values through the ' +
	            'missing value.  For purposes of tabular legend, ' +
	            'any value without a data-source should render "--" ' +
	            'and any null value (specifying N/A or NaN value) ' +
	            'should display as N/A.  At future date, we may ' +
	            'wish to add other options for this case, such as ' +
	            'drawing a dotted-line through the N/A period that ' +
	            'breaks continuity of contiguous points.  Ideally, ' +
	            'any such rendering behavior avoids depending on a ' +
	            'fixed frequency for a time-series plot.',
	        type: 'string',
	        constraint: function (value) {
	          if(typeof value === 'boolean')
	            return value ? 'dashed' : 'solid';
	        },
	        vocabulary: ['hidden', 'solid', 'dashed'],
	        defaultValue: 'dashed'
	      }
	    }, this);
	  }

	  TimeDataSeriesSchema.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  TimeDataSeriesSchema.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(TimeDataSeriesSchema.prototype, "constructor", {
	    value: TimeDataSeriesSchema
	  });

	  return TimeDataSeriesSchema;
	}(DataSeriesSchema);
	exports.TimeDataSeriesSchema = TimeDataSeriesSchema;
	var timeDataSeriesSchema = new TimeDataSeriesSchema();
	exports.timeDataSeriesSchema = timeDataSeriesSchema;
	var MultiSeriesChartSchema = function($__super) {
	  "use strict";

	  function MultiSeriesChartSchema() {
	    $__Object$getPrototypeOf(MultiSeriesChartSchema.prototype).constructor.call(this);
	    schematize({
	          // Identifiction: shortname and uid
	          name: {
	            title: 'Short name',
	            description: 'Short name of plot, unique only to report it ' +
	                         'is contained within, usually descriptive, ' +
	                         'like a filename; often transformed from ' +
	                         'title.  May be present in JSON, but usually ' +
	                         'is not preferred for identification or ' +
	                         'data binding vs. UID; may be used in URL ' +
	                         'construction, but in itself does not contain ' +
	                         'full context or URI.',
	            type: 'string',
	            required: false
	          },
	          uid: {
	            title: 'UID',
	            description: 'UUID (hexidecimal representation) of chart, ' +
	                         'based on UUID of chart content in Teamspace ' +
	                         'CMS system.  May or may not be in canonical ' +
	                         'RFC 4122 format (with dashes) or unfieled ' +
	                         'hexidecimal format (usually, no dashes).',
	            type: 'string',
	            required: false
	          },
	          url: {
	            title: 'Chart URL',
	            description: 'Base URL to chart content',
	            type: 'string',
	            required: false
	          },
	          // Basic metadata -- may be rendered in template in HTML source
	          //                   rendered by server, if it is included in
	          //                   DOM this way, plotting application may
	          //                   choose to re-plot it, if necessary?
	          //                   Current (Sept. 2014) implementation is
	          //                   *ignoring* title, description even though
	          //                   they are provided in JSON.
	          title: {
	            title: 'Title',
	            description: 'Data collection name or title; may be ' +
	                         'displayed in legend.',
	            type: 'string',
	            required: false
	          },
	          description: {
	            title: 'Description',
	            description: 'Textual description of the data collection.',
	            type: 'string',
	            required: false
	          },
	          info: {
	            title: 'Informative notes / caption',
	            description: 'This allows any rich text and may contain ' +
	                         'free-form notes about this chart; displayed ' +
	                         'in report output.  NOTE: this is NOT included ' +
	                         'in JSON as of September 2014, and is instead ' +
	                         'rendered server-side in template -- it may be ' +
	                         'included in future JSON feeds.',
	            type: 'string',
	            required: false
	          },
	          // Type of plot:
	          chart_type: {
	            title: 'Chart type',
	            description: 'Type of chart to display (line or bar).',
	            type: 'string',
	            vocabulary: ['line', 'bar'],
	            defaultValue: 'line',
	            required: true
	          },
	          // Plot sizing: favor aspect_ratio over height, if provided
	          width: {
	            title: 'Width',
	            description: 'Display width of chart, including Y-axis ' +
	                         'labels, grid, and legend (if applicable) in ' +
	                         'units configured.',
	            type: 'number',
	            defaultValue: '100',
	            required: true
	          },
	          width_units: {
	            title: 'Units of width',
	            description: '',
	            type: 'string',
	            defaultValue: '%',
	            required: true
	          },
	          height: {
	            title: 'Height',
	            description: 'Display height of chart in units configured ' +
	                         '(either as percentage of width, or in pixels) ' +
	                         ' -- used when aspect_ratio not specified.',
	            type: 'number',
	            defaultValue: '50',
	            required: true
	          },
	          height_units: {
	            title: 'Units of height',
	            description: 'Ignore unless aspect ratio not provided or ' +
	                         'value of height_units is % or px.',
	            type: 'string',
	            defaultValue: '2:1',    // prefer aspect_ratio field to this
	            required: true
	          },
	          aspect_ratio: {
	              title: 'Aspect ratio',
	              description: 'Preferred ratio of width to height, should ' +
	                           'control height of containing div, if present.',
	              type: Array,
	              required: false,
	              constraint: function (value) {
	                // validate that value is indeed a two-item Array of num.
	                if (value.length !== 2)
	                  throw new ValidationError(this, value, 'Aspect ratio must be a two element Array');
	                if (typeof value[0] !== 'number' || typeof value[1] !== 'number')
	                  throw new ValidationTypeError(this, (typeof value[0]) + ' ' + (typeof value[1]), 'Both elements of aspect ratio must be numbers');
	            }
	          },
	          range_min: {
	            title: 'Range minimum',
	            description: 'Minimum anticipated value of any data point ' +
	                         '(optional; if not specified, calculate from '+
	                         'available data on all contained series).',
	            type: 'number',
	            constraint: function(value, obj) {
	              var max = (obj.range_max != null) ? obj.range_max : null;
	              if(value > max) throw new ValidationError(this, value, 'range_min must be less than or equal to range_max');
	              return value;
	            },
	            required: false
	          },
	          range_max: {
	            title: 'Range maximum',
	            description: 'Maximum anticipated value of any data point ' +
	                         '(optional; if not specified, calculate from '+
	                         'available data on all contained series).',
	            type: 'number',
	            constraint: function(value, obj) {
	              var min = (obj.range_min != null) ? obj.range_min : null;
	              if(value < min) throw new ValidationError(this, value, 'range_max must be greater than or equal to range_min');
	              return value;
	            },
	            required: false
	          },
	          units: {
	            title: 'Units',
	            description: 'Common set of units of measure for the data ' +
	                         'series in this collection.  If the units for ' +
	                         'series are not shared, then define respective ' +
	                         'units on the series themselves. May be ' +
	                         'displayed as part of Y-axis label using a ' +
	                         'parenthetical notation of both units and ' +
	                         'y_label are provided.',
	            type: 'string',
	            required: false
	          },
	          y_label: {
	            title: 'Y axis label',
	            description: 'Primary Y-Axis label/title (descriptive); ' +
	                         'this is often omitted since axis is often ' +
	                         'self-describing (especially when units are ' +
	                         'percentages).  If omitted, do not allocate ' +
	                         'space in plot for label. If included, ' +
	                         'render text at 90-degree rotation ' +
	                         '(counter-clockwise, with text bottom-to-top).',
	            type: 'string',
	            defaultValue: '',
	            required: false
	          },
	          // Goal line: value (if defined), color:
	          goal: {
	            title: 'Goal',
	            description: 'Common goal value as decimal number.  If each ' +
	                         'series has different respective goals, edit ' +
	                         'those goals on each series.  If goal is ' +
	                         'undefined or null, omit display of goal line.',
	            type: 'number',
	            required: false
	          },
	          goal_color: {
	            title: 'Goal-line color',
	            description: 'If omitted, color will be selected from ' +
	                         'defaults.',
	            type: 'string',
	            defaultValue: "Auto",
	            required: false
	          },
	          // Legend configuration:
	          legend_placement: {
	            title: 'Legend placement',
	            description: 'Where to place legend in relationship to the ' +
	                         'grid. Note: the legend is disabled for less ' +
	                         'than two series/line unless the tabular '+
	                         'legend is selected.',
	            type: 'string',
	            vocabulary: [
	              'tabular',      // (def) aligned value table below grid
	              'outside',      // outside grid, next most common
	              'inside'        // inside grid, rarely used
	            ],
	            defaultValue: 'outside',
	            required: false
	          },
	          legend_location: {
	            title: 'Legend location',
	            description: 'Select a directional position for legend. ' +
	                         'This setting is ignored if either the tabular ' +
	                         'legend placement is selected or if the legend ' +
	                         'is hidden (for less than two series). ' +
	                         'Available choices are cardinal directions, ' +
	                         'which is a hold-over from how jqPlot idioms.',
	            type: 'string',
	            vocabulary: [
	              'n',        // top
	              'e',        // right of grid, vertical align at middle
	              'w',        // left of grid, vertical align at middle
	              's',        // bottom, below plot
	              'nw',       // left of grid, top-aligned
	              'ne',       // right of grid, top-aligned
	              'sw',       // left of grid, bottom-aligned
	              'se'        // right of grid, bottom-aligned
	            ],
	            defaultValue: 'e',
	            required: false
	          },
	          // X-axis (title label):
	          x_label: {
	            title: 'X axis label',
	            description: 'Label for X-axis, optional.',
	            type: 'string',
	            defaultValue: '',
	            required: false
	          },
	          // misc:
	          css: {
	            title: 'Chart styles',
	            description: 'CSS stylesheet rules for chart (optional).',
	            type: 'string',
	            required: false
	          },
	          point_labels: {
	            title: 'Show point labels?',
	            description: 'Show labels above data-point markers?  This ' +
	                         'may be overridden on individual lines/series. ' +
	                         'If omitted, the usual assumption is that ' +
	                         'a viewer in a browser must hover over a ' +
	                         'point to see its value, and click for detail. ' +
	                         'The primary usability question with this is ' +
	                         'what to do with overlapping values from two ' +
	                         'lines, which is why we omit usually (or have ' +
	                         'an idiom of displaying just labels for the ' +
	                         'first/primary line on the plot, not plot-wide.',
	            type: 'string',
	            vocabulary: ['show', 'omit'],
	            defaultValue: 'omit',
	            required: true
	          }
	        }, this);
	  }

	  MultiSeriesChartSchema.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  MultiSeriesChartSchema.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(MultiSeriesChartSchema.prototype, "constructor", {
	    value: MultiSeriesChartSchema
	  });

	  return MultiSeriesChartSchema;
	}(Schema);
	exports.MultiSeriesChartSchema = MultiSeriesChartSchema;
	var multiSeriesChartSchema = new MultiSeriesChartSchema();
	exports.multiSeriesChartSchema = multiSeriesChartSchema;
	var TimeSeriesChartSchema = function($__super) {
	  "use strict";

	  function TimeSeriesChartSchema() {
	    $__Object$getPrototypeOf(TimeSeriesChartSchema.prototype).constructor.call(this);
	    schematize({
	          frequency: {
	            title: 'Frequency (YAGNI??)',
	            description: 'Frequncy between periods of reporting that ' +
	                         'the plot visualizes.  May be used as cue for ' +
	                         'handling the default date-label choices, ' +
	                         'where month names are often stand-ins for ' +
	                         'an exemplar date value for the month, e.g. ' +
	                         '2014-06-01 may be represented as "Jun 2014". ' +
	                         'THIS MAY BE YAGNI if we do not need to draw ' +
	                         'vertical lines at X-axis tick labels, or just ' +
	                         'rely on scales and explicit data-labels in ' +
	                         'the labels field below (the JSON will provide ' +
	                         'them, and if it does not, then just using ' +
	                         'default US-appropriate short-date of ' +
	                         'MM/DD/YYYY may be good enough to justify ' +
	                         'ignoring this?  I cannot remember why jqPlot ' +
	                         'wants this interval-frequency on the domain, ' +
	                         'but it may be unnecessarily constraining to ' +
	                         'fix this to a controlled set of choices or ' +
	                         'just plain unnecessary?',
	            type: 'string',
	            vocabulary: ['monthly', 'weekly', 'yearly', 'quarterly'],
	            defaultValue: 'monthly',
	            required: false
	          },
	          start: {
	            title: 'Start date',
	            description: 'Explicit start date; optional.  If an ' +
	                         'explicit start date is not provided, one ' +
	                         'should be computed from earliest value in ' +
	                         'provided data.',
	            type: Date,
	            constraint: function(value, obj) {
	              value = dateTypeConstraint(value);
	              var end = obj.end;
	              if(end == null) return value;
	              if(value > end) throw new ValidationError(this, value, 'Start date cannot be after end date');
	              return value;
	            },
	            required: false
	          },
	          end: {
	            title: 'End date',
	            description: 'Explicit end date; optional.  If an ' +
	                         'explicit end date is not provided, one ' +
	                         'should be computed from latest value in ' +
	                         'provided data.',
	            type: Date,
	            constraint: function(value, obj) {
	              value = dateTypeConstraint(value);
	              var start = obj.start;
	              if(start == null) return value;
	              if(value < start) throw new ValidationError(this, value, 'End date cannot be before start date');
	              return value;
	            },
	            required: false
	          },
	          labels: {
	            title: 'Date labels',
	            description: 'Date label overrides, used for X-axis labels. ' +
	                         'if ommitted in whole or in part, use a ' +
	                         'default MM/DD/YYYY format for dates. Is an ' +
	                         'untyped object value used as key/vaule pair; ' +
	                         'keys are ISO 8601 date stamps, values labels; ' +
	                         'example: http://snag.gy/D1zjx.jpg',
	            type: Object,
	            constraint: function (value) {
	              // validate the object key/value pairs:
	              Object.keys(value).forEach(function (k) {
	                var v = value[k];
	                if (!moment(k).isValid())
	                  throw new ValidationError(this, value, 'Key is not a valid Datestamp: ' + k);
	                if (typeof v !== 'string')
	                  throw new ValidationTypeError(this, typeof v, 'Labels must be strings');
	              }, this);
	            },
	            required: false
	          },
	          auto_crop: {
	            title: 'Auto-crop data?',
	            description:
	                'If data contains sequential null values (incomplete ' +
	                'or no data calculable) on the right-hand of a ' +
	                'time-series plot, should that right-hand side ' +
	                'be cropped to only show the latest meaningful ' +
	                'data?  The default is to crop automatically.',
	            type: 'boolean',
	            defaultValue: true,
	            required: false
	          }
	        }, this);
	  }

	  TimeSeriesChartSchema.__proto__ = ($__super !== null ? $__super : Function.prototype);
	  TimeSeriesChartSchema.prototype = $__Object$create(($__super !== null ? $__super.prototype : null));

	  $__Object$defineProperty(TimeSeriesChartSchema.prototype, "constructor", {
	    value: TimeSeriesChartSchema
	  });

	  return TimeSeriesChartSchema;
	}(MultiSeriesChartSchema);
	exports.TimeSeriesChartSchema = TimeSeriesChartSchema;
	var timeSeriesChartSchema = new TimeSeriesChartSchema();
	exports.timeSeriesChartSchema = timeSeriesChartSchema;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var $__getIteratorRange = function(iterator, index, begin, len) {
	  if (index > begin) {
	    throw new RangeError();
	  }

	  if (typeof len === "undefined") {
	    len = Infinity;
	  }

	  var range = [], end = begin + len;

	  while (index < end) {
	    var next = iterator.next();

	    if (next.done) {
	      break;
	    }

	    if (index >= begin) {
	      range.push(next.value);
	    }

	    index++;
	  }

	  return {
	    range: range,
	    index: index
	  };
	};

	var $__getIterator = function(iterable) {
	  var sym = typeof Symbol === "function" && Symbol.iterator || "@@iterator";

	  if (typeof iterable[sym] === "function") {
	    return iterable[sym]();
	  } else if (typeof iterable === "object" || typeof iterable === "function") {
	    return $__getArrayIterator(iterable);
	  } else {
	    throw new TypeError();
	  }
	};

	var $__getArrayIterator = function(array) {
	  var index = 0;

	  return {
	    next: function() {
	      if (index < array.length) {
	        return {
	          done: false,
	          value: array[index++]
	        };
	      } else {
	        return {
	          done: true,
	          value: void 0
	        };
	      }
	    }
	  };
	};

	function shapePath(node) {
	  var spec = (arguments[1] !== void 0 ? arguments[1] : shapes.square);
	  var size = (arguments[2] !== void 0 ? arguments[2] : 3);
	  var d = "";
	  var normalizer = spec.normalizer || 1;
	  var multiplier = size * normalizer;

	  spec.path.forEach(function () {
	    var $__arguments0 = arguments;
	    var $__arguments = $__arguments0;

	    var var$0 = $__arguments[0],
	        iterator$0 = $__getIterator(var$0),
	        iteratorValue$0 = {
	          index: 0
	        },
	        cmd = (iteratorValue$0 = $__getIteratorRange(iterator$0, iteratorValue$0.index, 0, 1), iteratorValue$0.range[0]),
	        args = (iteratorValue$0 = $__getIteratorRange(iterator$0, iteratorValue$0.index, 1, Infinity), iteratorValue$0.range);

	    d += cmd;

	    args.forEach(function (arg, i) {
	      if(i !== 0)
	        d += ' ';
	      if(arg.length)
	        arg.forEach(function (sub_arg, sub_i) {
	          if(arg)
	          if(sub_i === 0){
	                if(String(arg).indexOf('#') === -1)
	              d += (multiplier * sub_arg);
	            else
	              d += sub_arg.slice(1);
	          } else {
	            if(String(arg).indexOf('#') === -1)
	              d += "," + (multiplier * sub_arg);
	            else
	              d += "," + arg.slice(1);
	          }
	        });
	      else {
	        if(String(arg).indexOf('#') === -1)
	          d += (multiplier * arg);
	        else
	          d += arg.slice(1);
	      }
	    });
	  });

	  console.log(d);

	  node.attr('d', d)
	      .classed('smooth-shape', spec.smooth ? true : false)
	      .classed('crisp-shape', spec.smooth ? false : true);
	}

	exports.shapePath = shapePath;function legendMarkers (selection, size) {
	  size = size || 4;
	  selection.each(function (d, i) {
	    var sel = d3.select(this);
	    var shape_name = d.marker_style || 'square';
	    if(shape_name === 'cross') shape_name = 'legend_cross';
	    var shape = shapes[shape_name] || shapes.square;
	    sel.call(shapePath, shape, size)
	  });
	}

	exports.legendMarkers = legendMarkers;var shapes = {
	  square: {
	    normalizer: 1 /2,
	    path: [
	      ['m', -1, -1],
	      ['h', 2],
	      ['v', 2],
	      ['h', -2],
	      ['z']
	    ]
	  },
	  diamond: {
	    normalizer: 1 / 2,
	    path: [
	      ['m', -1, 0],
	      ['l', 1, -1],
	      ['l', 1, 1],
	      ['l', -1, 1],
	      ['z']
	    ]
	  },
	  cross: {
	    normalizer: 1 / 6,
	    path: [
	      ['m', -1, -1],
	      ['v', -2],
	      ['h', 2],
	      ['v', 2],
	      ['h', 2],
	      ['v', 2],
	      ['h', -2],
	      ['v', 2],
	      ['h', -2],
	      ['v', -2],
	      ['h', -2],
	      ['v', -2],
	      ['z']
	    ]
	  },
	  legend_cross: {
	    normalizer: 1 / 4,
	    path: [
	      ['m', -1, -1],
	      ['v', -1],
	      ['h', 2],
	      ['v', 1],
	      ['h', 1],
	      ['v', 2],
	      ['h', -1],
	      ['v', 1],
	      ['h', -2],
	      ['v', -1],
	      ['h', -1],
	      ['v', -2],
	      ['z']
	    ]
	  },
	  circle: {
	    normalizer: 1 / 2,
	    path: [
	      ['m', -1, 0],
	      ['a', [1, 1], [0], ['#1',0], [2,0]],
	      ['a', [1, 1], [0], ['#1',0], [-2,0]]
	    ],
	    smooth: true
	  }
	}
	exports.shapes = shapes;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var d3 = __webpack_require__(4);

	(function(){

	var nv = window.nv || {};


	nv.version = '1.1.15b';
	nv.dev = true //set false when in production

	window.nv = nv;

	nv.tooltip = nv.tooltip || {}; // For the tooltip system
	nv.utils = nv.utils || {}; // Utility subsystem
	nv.models = nv.models || {}; //stores all the possible models/components
	nv.charts = {}; //stores all the ready to use charts
	nv.graphs = []; //stores all the graphs currently on the page
	nv.logs = {}; //stores some statistics and potential error messages

	nv.dispatch = d3.dispatch('render_start', 'render_end');

	// *************************************************************************
	//  Development render timers - disabled if dev = false

	if (nv.dev) {
	  nv.dispatch.on('render_start', function(e) {
	    nv.logs.startTime = +new Date();
	  });

	  nv.dispatch.on('render_end', function(e) {
	    nv.logs.endTime = +new Date();
	    nv.logs.totalTime = nv.logs.endTime - nv.logs.startTime;
	    nv.log('total', nv.logs.totalTime); // used for development, to keep track of graph generation times
	  });
	}

	// ********************************************
	//  Public Core NV functions

	// Logs all arguments, and returns the last so you can test things in place
	// Note: in IE8 console.log is an object not a function, and if modernizr is used
	// then calling Function.prototype.bind with with anything other than a function
	// causes a TypeError to be thrown.
	nv.log = function() {
	  if (nv.dev && console.log && console.log.apply)
	    console.log.apply(console, arguments)
	  else if (nv.dev && typeof console.log == "function" && Function.prototype.bind) {
	    var log = Function.prototype.bind.call(console.log, console);
	    log.apply(console, arguments);
	  }
	  return arguments[arguments.length - 1];
	};


	nv.render = function render(step) {
	  step = step || 1; // number of graphs to generate in each timeout loop

	  nv.render.active = true;
	  nv.dispatch.render_start();

	  setTimeout(function() {
	    var chart, graph;

	    for (var i = 0; i < step && (graph = nv.render.queue[i]); i++) {
	      chart = graph.generate();
	      if (typeof graph.callback == typeof(Function)) graph.callback(chart);
	      nv.graphs.push(chart);
	    }

	    nv.render.queue.splice(0, i);

	    if (nv.render.queue.length) setTimeout(arguments.callee, 0);
	    else {
	      nv.dispatch.render_end();
	      nv.render.active = false;
	    }
	  }, 0);
	};

	nv.render.active = false;
	nv.render.queue = [];

	nv.addGraph = function(obj) {
	  if (typeof arguments[0] === typeof(Function))
	    obj = {generate: arguments[0], callback: arguments[1]};

	  nv.render.queue.push(obj);

	  if (!nv.render.active) nv.render();
	};

	nv.identity = function(d) { return d; };

	nv.strip = function(s) { return s.replace(/(\s|&)/g,''); };

	function daysInMonth(month,year) {
	  return (new Date(year, month+1, 0)).getDate();
	}

	function d3_time_range(floor, step, number) {
	  return function(t0, t1, dt) {
	    var time = floor(t0), times = [];
	    if (time < t0) step(time);
	    if (dt > 1) {
	      while (time < t1) {
	        var date = new Date(+time);
	        if ((number(date) % dt === 0)) times.push(date);
	        step(time);
	      }
	    } else {
	      while (time < t1) { times.push(new Date(+time)); step(time); }
	    }
	    return times;
	  };
	}

	d3.time.monthEnd = function(date) {
	  return new Date(date.getFullYear(), date.getMonth(), 0);
	};

	d3.time.monthEnds = d3_time_range(d3.time.monthEnd, function(date) {
	    date.setUTCDate(date.getUTCDate() + 1);
	    date.setDate(daysInMonth(date.getMonth() + 1, date.getFullYear()));
	  }, function(date) {
	    return date.getMonth();
	  }
	);

	/* Utility class to handle creation of an interactive layer.
	This places a rectangle on top of the chart. When you mouse move over it, it sends a dispatch
	containing the X-coordinate. It can also render a vertical line where the mouse is located.

	dispatch.elementMousemove is the important event to latch onto.  It is fired whenever the mouse moves over
	the rectangle. The dispatch is given one object which contains the mouseX/Y location.
	It also has 'pointXValue', which is the conversion of mouseX to the x-axis scale.
	*/
	nv.interactiveGuideline = function() {
		"use strict";
		var tooltip = nv.models.tooltip();
		//Public settings
		var width = null
		, height = null
	    //Please pass in the bounding chart's top and left margins
	    //This is important for calculating the correct mouseX/Y positions.
		, margin = {left: 0, top: 0}
		, xScale = d3.scale.linear()
		, yScale = d3.scale.linear()
		, dispatch = d3.dispatch('elementMousemove', 'elementMouseout','elementDblclick')
		, showGuideLine = true
		, svgContainer = null  
	    //Must pass in the bounding chart's <svg> container.
	    //The mousemove event is attached to this container.
		;

		//Private variables
		var isMSIE = navigator.userAgent.indexOf("MSIE") !== -1  //Check user-agent for Microsoft Internet Explorer.
		;


		function layer(selection) {
			selection.each(function(data) {
					var container = d3.select(this);
					
					var availableWidth = (width || 960), availableHeight = (height || 400);

					var wrap = container.selectAll("g.nv-wrap.nv-interactiveLineLayer").data([data]);
					var wrapEnter = wrap.enter()
									.append("g").attr("class", " nv-wrap nv-interactiveLineLayer");
									
					
					wrapEnter.append("g").attr("class","nv-interactiveGuideLine");
					
					if (!svgContainer) {
						return;
					}

	                function mouseHandler() {
	                      var d3mouse = d3.mouse(this);
	                      var mouseX = d3mouse[0];
	                      var mouseY = d3mouse[1];
	                      var subtractMargin = true;
	                      var mouseOutAnyReason = false;
	                      if (isMSIE) {
	                         /*
	                            D3.js (or maybe SVG.getScreenCTM) has a nasty bug in Internet Explorer 10.
	                            d3.mouse() returns incorrect X,Y mouse coordinates when mouse moving
	                            over a rect in IE 10.
	                            However, d3.event.offsetX/Y also returns the mouse coordinates
	                            relative to the triggering <rect>. So we use offsetX/Y on IE.  
	                         */
	                         mouseX = d3.event.offsetX;
	                         mouseY = d3.event.offsetY;

	                         /*
	                            On IE, if you attach a mouse event listener to the <svg> container,
	                            it will actually trigger it for all the child elements (like <path>, <circle>, etc).
	                            When this happens on IE, the offsetX/Y is set to where ever the child element
	                            is located.
	                            As a result, we do NOT need to subtract margins to figure out the mouse X/Y
	                            position under this scenario. Removing the line below *will* cause 
	                            the interactive layer to not work right on IE.
	                         */
	                         if(d3.event.target.tagName !== "svg")
	                            subtractMargin = false;

	                         if (d3.event.target.className.baseVal.match("nv-legend"))
	                         	mouseOutAnyReason = true;
	                          
	                      }

	                      if(subtractMargin) {
	                         mouseX -= margin.left;
	                         mouseY -= margin.top;
	                      }

	                      /* If mouseX/Y is outside of the chart's bounds,
	                      trigger a mouseOut event.
	                      */
	                      if (mouseX < 0 || mouseY < 0 
	                        || mouseX > availableWidth || mouseY > availableHeight
	                        || (d3.event.relatedTarget && d3.event.relatedTarget.ownerSVGElement === undefined)
	                        || mouseOutAnyReason
	                        ) 
	                      {
	                      		if (isMSIE) {
	                      			if (d3.event.relatedTarget 
	                      				&& d3.event.relatedTarget.ownerSVGElement === undefined
	                      				&& d3.event.relatedTarget.className.match(tooltip.nvPointerEventsClass)) {
	                      				return;
	                      			}
	                      		}
	                            dispatch.elementMouseout({
	                               mouseX: mouseX,
	                               mouseY: mouseY
	                            });
	                            layer.renderGuideLine(null); //hide the guideline
	                            return;
	                      }
	                      
	                      var pointXValue = xScale.invert(mouseX);
	                      dispatch.elementMousemove({
	                            mouseX: mouseX,
	                            mouseY: mouseY,
	                            pointXValue: pointXValue
	                      });

	                      //If user double clicks the layer, fire a elementDblclick dispatch.
	                      if (d3.event.type === "dblclick") {
	                        dispatch.elementDblclick({
	                            mouseX: mouseX,
	                            mouseY: mouseY,
	                            pointXValue: pointXValue
	                        });
	                      }
	                }

					svgContainer
					      .on("mousemove",mouseHandler, true)
					      .on("mouseout" ,mouseHandler,true)
	                      .on("dblclick" ,mouseHandler)
					      ;

					 //Draws a vertical guideline at the given X postion.
					layer.renderGuideLine = function(x) {
					 	if (!showGuideLine) return;
					 	var line = wrap.select(".nv-interactiveGuideLine")
					 	      .selectAll("line")
					 	      .data((x != null) ? [nv.utils.NaNtoZero(x)] : [], String);

					 	line.enter()
					 		.append("line")
					 		.attr("class", "nv-guideline")
					 		.attr("x1", function(d) { return d;})
					 		.attr("x2", function(d) { return d;})
					 		.attr("y1", availableHeight)
					 		.attr("y2",0)
					 		;
					 	line.exit().remove();

					}
			});
		}

		layer.dispatch = dispatch;
		layer.tooltip = tooltip;

		layer.margin = function(_) {
		    if (!arguments.length) return margin;
		    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
		    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
		    return layer;
	    };

		layer.width = function(_) {
			if (!arguments.length) return width;
			width = _;
			return layer;
		};

		layer.height = function(_) {
			if (!arguments.length) return height;
			height = _;
			return layer;
		};

		layer.xScale = function(_) {
			if (!arguments.length) return xScale;
			xScale = _;
			return layer;
		};

		layer.showGuideLine = function(_) {
			if (!arguments.length) return showGuideLine;
			showGuideLine = _;
			return layer;
		};

		layer.svgContainer = function(_) {
			if (!arguments.length) return svgContainer;
			svgContainer = _;
			return layer;
		};


		return layer;
	};

	/* Utility class that uses d3.bisect to find the index in a given array, where a search value can be inserted.
	This is different from normal bisectLeft; this function finds the nearest index to insert the search value.

	For instance, lets say your array is [1,2,3,5,10,30], and you search for 28. 
	Normal d3.bisectLeft will return 4, because 28 is inserted after the number 10.  But interactiveBisect will return 5
	because 28 is closer to 30 than 10.

	Unit tests can be found in: interactiveBisectTest.html

	Has the following known issues:
	   * Will not work if the data points move backwards (ie, 10,9,8,7, etc) or if the data points are in random order.
	   * Won't work if there are duplicate x coordinate values.
	*/
	nv.interactiveBisect = function (values, searchVal, xAccessor) {
		  "use strict";
	      if (! values instanceof Array) return null;
	      if (typeof xAccessor !== 'function') xAccessor = function(d,i) { return d.x;}

	      var bisect = d3.bisector(xAccessor).left;
	      var index = d3.max([0, bisect(values,searchVal) - 1]);
	      var currentValue = xAccessor(values[index], index);
	      if (typeof currentValue === 'undefined') currentValue = index;

	      if (currentValue === searchVal) return index;  //found exact match

	      var nextIndex = d3.min([index+1, values.length - 1]);
	      var nextValue = xAccessor(values[nextIndex], nextIndex);
	      if (typeof nextValue === 'undefined') nextValue = nextIndex;

	      if (Math.abs(nextValue - searchVal) >= Math.abs(currentValue - searchVal))
	          return index;
	      else
	          return nextIndex
	};

	/*
	Returns the index in the array "values" that is closest to searchVal.
	Only returns an index if searchVal is within some "threshold".
	Otherwise, returns null.
	*/
	nv.nearestValueIndex = function (values, searchVal, threshold) {
	      "use strict";
	      var yDistMax = Infinity, indexToHighlight = null;
	      values.forEach(function(d,i) {
	         var delta = Math.abs(searchVal - d);
	         if ( delta <= yDistMax && delta < threshold) {
	            yDistMax = delta;
	            indexToHighlight = i;
	         }
	      });
	      return indexToHighlight;
	};/* Tooltip rendering model for nvd3 charts.
	window.nv.models.tooltip is the updated,new way to render tooltips.

	window.nv.tooltip.show is the old tooltip code.
	window.nv.tooltip.* also has various helper methods.
	*/
	(function() {
	  "use strict";
	  window.nv.tooltip = {};

	  /* Model which can be instantiated to handle tooltip rendering.
	    Example usage: 
	    var tip = nv.models.tooltip().gravity('w').distance(23)
	                .data(myDataObject);

	        tip();    //just invoke the returned function to render tooltip.
	  */
	  window.nv.models.tooltip = function() {
	        var content = null    //HTML contents of the tooltip.  If null, the content is generated via the data variable.
	        ,   data = null     /* Tooltip data. If data is given in the proper format, a consistent tooltip is generated.
	        Format of data:
	        {
	            key: "Date",
	            value: "August 2009", 
	            series: [
	                    {
	                        key: "Series 1",
	                        value: "Value 1",
	                        color: "#000"
	                    },
	                    {
	                        key: "Series 2",
	                        value: "Value 2",
	                        color: "#00f"
	                    }
	            ]

	        }

	        */
	        ,   gravity = 'w'   //Can be 'n','s','e','w'. Determines how tooltip is positioned.
	        ,   distance = 50   //Distance to offset tooltip from the mouse location.
	        ,   snapDistance = 25   //Tolerance allowed before tooltip is moved from its current position (creates 'snapping' effect)
	        ,   fixedTop = null //If not null, this fixes the top position of the tooltip.
	        ,   classes = null  //Attaches additional CSS classes to the tooltip DIV that is created.
	        ,   chartContainer = null   //Parent DIV, of the SVG Container that holds the chart.
	        ,   tooltipElem = null  //actual DOM element representing the tooltip.
	        ,   position = {left: null, top: null}      //Relative position of the tooltip inside chartContainer.
	        ,   enabled = true  //True -> tooltips are rendered. False -> don't render tooltips.
	        //Generates a unique id when you create a new tooltip() object
	        ,   id = "nvtooltip-" + Math.floor(Math.random() * 100000)
	        ;

	        //CSS class to specify whether element should not have mouse events.
	        var  nvPointerEventsClass = "nv-pointer-events-none";

	        //Format function for the tooltip values column
	        var valueFormatter = function(d,i) {
	            return d;
	        };

	        //Format function for the tooltip header value.
	        var headerFormatter = function(d) {
	            return d;
	        };

	        //By default, the tooltip model renders a beautiful table inside a DIV.
	        //You can override this function if a custom tooltip is desired.
	        var contentGenerator = function(d) {
	            if (content != null) return content;

	            if (d == null) return '';

	            var table = d3.select(document.createElement("table"));
	            var theadEnter = table.selectAll("thead")
	                .data([d])
	                .enter().append("thead");
	            theadEnter.append("tr")
	                .append("td")
	                .attr("colspan",3)
	                .append("strong")
	                    .classed("x-value",true)
	                    .html(headerFormatter(d.value));

	            var tbodyEnter = table.selectAll("tbody")
	                .data([d])
	                .enter().append("tbody");
	            var trowEnter = tbodyEnter.selectAll("tr")
	                .data(function(p) { return p.series})
	                .enter()
	                .append("tr")
	                .classed("highlight", function(p) { return p.highlight})
	                ;

	            trowEnter.append("td")
	                .classed("legend-color-guide",true)
	                .append("div")
	                    .style("background-color", function(p) { return p.color});
	            trowEnter.append("td")
	                .classed("key",true)
	                .html(function(p) {return p.key});
	            trowEnter.append("td")
	                .classed("value",true)
	                .html(function(p,i) { return valueFormatter(p.value,i) });


	            trowEnter.selectAll("td").each(function(p) {
	                if (p.highlight) {
	                    var opacityScale = d3.scale.linear().domain([0,1]).range(["#fff",p.color]);
	                    var opacity = 0.6;
	                    d3.select(this)
	                        .style("border-bottom-color", opacityScale(opacity))
	                        .style("border-top-color", opacityScale(opacity))
	                        ;
	                }
	            });

	            var html = table.node().outerHTML;
	            if (d.footer !== undefined)
	                html += "<div class='footer'>" + d.footer + "</div>";
	            return html;

	        };

	        var dataSeriesExists = function(d) {
	            if (d && d.series && d.series.length > 0) return true;

	            return false;
	        };

	        //In situations where the chart is in a 'viewBox', re-position the tooltip based on how far chart is zoomed.
	        function convertViewBoxRatio() {
	            if (chartContainer) {
	              var svg = d3.select(chartContainer);
	              if (svg.node().tagName !== "svg") {
	                 svg = svg.select("svg");
	              }
	              var viewBox = (svg.node()) ? svg.attr('viewBox') : null;
	              if (viewBox) {
	                viewBox = viewBox.split(' ');
	                var ratio = parseInt(svg.style('width')) / viewBox[2];
	                
	                position.left = position.left * ratio;
	                position.top  = position.top * ratio;
	              }
	            }
	        }

	        //Creates new tooltip container, or uses existing one on DOM.
	        function getTooltipContainer(newContent) {
	            var body;
	            if (chartContainer)
	                body = d3.select(chartContainer);
	            else
	                body = d3.select("body");

	            var container = body.select(".nvtooltip");
	            if (container.node() === null) {
	                //Create new tooltip div if it doesn't exist on DOM.
	                container = body.append("div")
	                    .attr("class", "nvtooltip " + (classes? classes: "xy-tooltip"))
	                    .attr("id",id)
	                    ;
	            }
	        

	            container.node().innerHTML = newContent;
	            container.style("top",0).style("left",0).style("opacity",0);
	            container.selectAll("div, table, td, tr").classed(nvPointerEventsClass,true)
	            container.classed(nvPointerEventsClass,true);
	            return container.node();
	        }

	        

	        //Draw the tooltip onto the DOM.
	        function nvtooltip() {
	            if (!enabled) return;
	            if (!dataSeriesExists(data)) return;

	            convertViewBoxRatio();

	            var left = position.left;
	            var top = (fixedTop != null) ? fixedTop : position.top;
	            var container = getTooltipContainer(contentGenerator(data));
	            tooltipElem = container;
	            if (chartContainer) {
	                var svgComp = chartContainer.getElementsByTagName("svg")[0];
	                var boundRect = (svgComp) ? svgComp.getBoundingClientRect() : chartContainer.getBoundingClientRect();
	                var svgOffset = {left:0,top:0};
	                if (svgComp) {
	                    var svgBound = svgComp.getBoundingClientRect();
	                    var chartBound = chartContainer.getBoundingClientRect();
	                    var svgBoundTop = svgBound.top;
	                    
	                    //Defensive code. Sometimes, svgBoundTop can be a really negative
	                    //  number, like -134254. That's a bug. 
	                    //  If such a number is found, use zero instead. FireFox bug only
	                    if (svgBoundTop < 0) {
	                        var containerBound = chartContainer.getBoundingClientRect();
	                        svgBoundTop = (Math.abs(svgBoundTop) > containerBound.height) ? 0 : svgBoundTop;
	                    } 
	                    svgOffset.top = Math.abs(svgBoundTop - chartBound.top);
	                    svgOffset.left = Math.abs(svgBound.left - chartBound.left);
	                }
	                //If the parent container is an overflow <div> with scrollbars, subtract the scroll offsets.
	                //You need to also add any offset between the <svg> element and its containing <div>
	                //Finally, add any offset of the containing <div> on the whole page.
	                left += chartContainer.offsetLeft + svgOffset.left - 2*chartContainer.scrollLeft;
	                top += chartContainer.offsetTop + svgOffset.top - 2*chartContainer.scrollTop;
	            }

	            if (snapDistance && snapDistance > 0) {
	                top = Math.floor(top/snapDistance) * snapDistance;
	            }

	            nv.tooltip.calcTooltipPosition([left,top], gravity, distance, container);
	            return nvtooltip;
	        };

	        nvtooltip.nvPointerEventsClass = nvPointerEventsClass;
	        
	        nvtooltip.content = function(_) {
	            if (!arguments.length) return content;
	            content = _;
	            return nvtooltip;
	        };

	        //Returns tooltipElem...not able to set it.
	        nvtooltip.tooltipElem = function() {
	            return tooltipElem;
	        };

	        nvtooltip.contentGenerator = function(_) {
	            if (!arguments.length) return contentGenerator;
	            if (typeof _ === 'function') {
	                contentGenerator = _;
	            }
	            return nvtooltip;
	        };

	        nvtooltip.data = function(_) {
	            if (!arguments.length) return data;
	            data = _;
	            return nvtooltip;
	        };

	        nvtooltip.gravity = function(_) {
	            if (!arguments.length) return gravity;
	            gravity = _;
	            return nvtooltip;
	        };

	        nvtooltip.distance = function(_) {
	            if (!arguments.length) return distance;
	            distance = _;
	            return nvtooltip;
	        };

	        nvtooltip.snapDistance = function(_) {
	            if (!arguments.length) return snapDistance;
	            snapDistance = _;
	            return nvtooltip;
	        };

	        nvtooltip.classes = function(_) {
	            if (!arguments.length) return classes;
	            classes = _;
	            return nvtooltip;
	        };

	        nvtooltip.chartContainer = function(_) {
	            if (!arguments.length) return chartContainer;
	            chartContainer = _;
	            return nvtooltip;
	        };

	        nvtooltip.position = function(_) {
	            if (!arguments.length) return position;
	            position.left = (typeof _.left !== 'undefined') ? _.left : position.left;
	            position.top = (typeof _.top !== 'undefined') ? _.top : position.top;
	            return nvtooltip;
	        };

	        nvtooltip.fixedTop = function(_) {
	            if (!arguments.length) return fixedTop;
	            fixedTop = _;
	            return nvtooltip;
	        };

	        nvtooltip.enabled = function(_) {
	            if (!arguments.length) return enabled;
	            enabled = _;
	            return nvtooltip;
	        };

	        nvtooltip.valueFormatter = function(_) {
	            if (!arguments.length) return valueFormatter;
	            if (typeof _ === 'function') {
	                valueFormatter = _;
	            }
	            return nvtooltip;
	        };

	        nvtooltip.headerFormatter = function(_) {
	            if (!arguments.length) return headerFormatter;
	            if (typeof _ === 'function') {
	                headerFormatter = _;
	            }
	            return nvtooltip;
	        };

	        //id() is a read-only function. You can't use it to set the id.
	        nvtooltip.id = function() {
	            return id;
	        };


	        return nvtooltip;
	  };


	  //Original tooltip.show function. Kept for backward compatibility.
	  // pos = [left,top]
	  nv.tooltip.show = function(pos, content, gravity, dist, parentContainer, classes) {
	      
	        //Create new tooltip div if it doesn't exist on DOM.
	        var   container = document.createElement('div');
	        container.className = 'nvtooltip ' + (classes ? classes : 'xy-tooltip');

	        var body = parentContainer;
	        if ( !parentContainer || parentContainer.tagName.match(/g|svg/i)) {
	            //If the parent element is an SVG element, place tooltip in the <body> element.
	            body = document.getElementsByTagName('body')[0];
	        }
	   
	        container.style.left = 0;
	        container.style.top = 0;
	        container.style.opacity = 0;
	        container.innerHTML = content;
	        body.appendChild(container);
	        
	        //If the parent container is an overflow <div> with scrollbars, subtract the scroll offsets.
	        if (parentContainer) {
	           pos[0] = pos[0] - parentContainer.scrollLeft;
	           pos[1] = pos[1] - parentContainer.scrollTop;
	        }
	        nv.tooltip.calcTooltipPosition(pos, gravity, dist, container);
	  };

	  //Looks up the ancestry of a DOM element, and returns the first NON-svg node.
	  nv.tooltip.findFirstNonSVGParent = function(Elem) {
	            while(Elem.tagName.match(/^g|svg$/i) !== null) {
	                Elem = Elem.parentNode;
	            }
	            return Elem;
	  };

	  //Finds the total offsetTop of a given DOM element.
	  //Looks up the entire ancestry of an element, up to the first relatively positioned element.
	  nv.tooltip.findTotalOffsetTop = function ( Elem, initialTop ) {
	                var offsetTop = initialTop;
	                
	                do {
	                    if( !isNaN( Elem.offsetTop ) ) {
	                        offsetTop += (Elem.offsetTop);
	                    }
	                } while( Elem = Elem.offsetParent );
	                return offsetTop;
	  };

	  //Finds the total offsetLeft of a given DOM element.
	  //Looks up the entire ancestry of an element, up to the first relatively positioned element.
	  nv.tooltip.findTotalOffsetLeft = function ( Elem, initialLeft) {
	                var offsetLeft = initialLeft;
	                
	                do {
	                    if( !isNaN( Elem.offsetLeft ) ) {
	                        offsetLeft += (Elem.offsetLeft);
	                    }
	                } while( Elem = Elem.offsetParent );
	                return offsetLeft;
	  };

	  //Global utility function to render a tooltip on the DOM.
	  //pos = [left,top] coordinates of where to place the tooltip, relative to the SVG chart container.
	  //gravity = how to orient the tooltip
	  //dist = how far away from the mouse to place tooltip
	  //container = tooltip DIV
	  nv.tooltip.calcTooltipPosition = function(pos, gravity, dist, container) {

	            var height = parseInt(container.offsetHeight),
	                width = parseInt(container.offsetWidth),
	                windowWidth = nv.utils.windowSize().width,
	                windowHeight = nv.utils.windowSize().height,
	                scrollTop = window.pageYOffset,
	                scrollLeft = window.pageXOffset,
	                left, top;

	            windowHeight = window.innerWidth >= document.body.scrollWidth ? windowHeight : windowHeight - 16;
	            windowWidth = window.innerHeight >= document.body.scrollHeight ? windowWidth : windowWidth - 16;

	            gravity = gravity || 's';
	            dist = dist || 20;

	            var tooltipTop = function ( Elem ) {
	                return nv.tooltip.findTotalOffsetTop(Elem, top);
	            };

	            var tooltipLeft = function ( Elem ) {
	                return nv.tooltip.findTotalOffsetLeft(Elem,left);
	            };

	            switch (gravity) {
	              case 'e':
	                left = pos[0] - width - dist;
	                top = pos[1] - (height / 2);
	                var tLeft = tooltipLeft(container);
	                var tTop = tooltipTop(container);
	                if (tLeft < scrollLeft) left = pos[0] + dist > scrollLeft ? pos[0] + dist : scrollLeft - tLeft + left;
	                if (tTop < scrollTop) top = scrollTop - tTop + top;
	                if (tTop + height > scrollTop + windowHeight) top = scrollTop + windowHeight - tTop + top - height;
	                break;
	              case 'w':
	                left = pos[0] + dist;
	                top = pos[1] - (height / 2);
	                var tLeft = tooltipLeft(container);
	                var tTop = tooltipTop(container);
	                if (tLeft + width > windowWidth) left = pos[0] - width - dist;
	                if (tTop < scrollTop) top = scrollTop + 5;
	                if (tTop + height > scrollTop + windowHeight) top = scrollTop + windowHeight - tTop + top - height;
	                break;
	              case 'n':
	                left = pos[0] - (width / 2) - 5;
	                top = pos[1] + dist;
	                var tLeft = tooltipLeft(container);
	                var tTop = tooltipTop(container);
	                if (tLeft < scrollLeft) left = scrollLeft + 5;
	                if (tLeft + width > windowWidth) left = left - width/2 + 5;
	                if (tTop + height > scrollTop + windowHeight) top = scrollTop + windowHeight - tTop + top - height;
	                break;
	              case 's':
	                left = pos[0] - (width / 2);
	                top = pos[1] - height - dist;
	                var tLeft = tooltipLeft(container);
	                var tTop = tooltipTop(container);
	                if (tLeft < scrollLeft) left = scrollLeft + 5;
	                if (tLeft + width > windowWidth) left = left - width/2 + 5;
	                if (scrollTop > tTop) top = scrollTop;
	                break;
	              case 'none':
	                left = pos[0];
	                top = pos[1] - dist;
	                var tLeft = tooltipLeft(container);
	                var tTop = tooltipTop(container);
	                break;
	            }


	            container.style.left = left+'px';
	            container.style.top = top+'px';
	            container.style.opacity = 1;
	            container.style.position = 'absolute'; 

	            return container;
	    };

	    //Global utility function to remove tooltips from the DOM.
	    nv.tooltip.cleanup = function() {

	              // Find the tooltips, mark them for removal by this class (so others cleanups won't find it)
	              var tooltips = document.getElementsByClassName('nvtooltip');
	              var purging = [];
	              while(tooltips.length) {
	                purging.push(tooltips[0]);
	                tooltips[0].style.transitionDelay = '0 !important';
	                tooltips[0].style.opacity = 0;
	                tooltips[0].className = 'nvtooltip-pending-removal';
	              }

	              setTimeout(function() {

	                  while (purging.length) {
	                     var removeMe = purging.pop();
	                      removeMe.parentNode.removeChild(removeMe);
	                  }
	            }, 500);
	    };

	})();

	nv.utils.windowSize = function() {
	    // Sane defaults
	    var size = {width: 640, height: 480};

	    // Earlier IE uses Doc.body
	    if (document.body && document.body.offsetWidth) {
	        size.width = document.body.offsetWidth;
	        size.height = document.body.offsetHeight;
	    }

	    // IE can use depending on mode it is in
	    if (document.compatMode=='CSS1Compat' &&
	        document.documentElement &&
	        document.documentElement.offsetWidth ) {
	        size.width = document.documentElement.offsetWidth;
	        size.height = document.documentElement.offsetHeight;
	    }

	    // Most recent browsers use
	    if (window.innerWidth && window.innerHeight) {
	        size.width = window.innerWidth;
	        size.height = window.innerHeight;
	    }
	    return (size);
	};



	// Easy way to bind multiple functions to window.onresize
	// TODO: give a way to remove a function after its bound, other than removing all of them
	nv.utils.windowResize = function(fun){
	  if (fun === undefined) return;
	  var oldresize = window.onresize;

	  window.onresize = function(e) {
	    if (typeof oldresize == 'function') oldresize(e);
	    fun(e);
	  }
	}

	// Backwards compatible way to implement more d3-like coloring of graphs.
	// If passed an array, wrap it in a function which implements the old default
	// behavior
	nv.utils.getColor = function(color) {
	    if (!arguments.length) return nv.utils.defaultColor(); //if you pass in nothing, get default colors back

	    if( Object.prototype.toString.call( color ) === '[object Array]' )
	        return function(d, i) { return d.color || color[i % color.length]; };
	    else
	        return color;
	        //can't really help it if someone passes rubbish as color
	}

	// Default color chooser uses the index of an object as before.
	nv.utils.defaultColor = function() {
	    var colors = d3.scale.category20().range();
	    return function(d, i) { return d.color || colors[i % colors.length] };
	}


	// Returns a color function that takes the result of 'getKey' for each series and
	// looks for a corresponding color from the dictionary,
	nv.utils.customTheme = function(dictionary, getKey, defaultColors) {
	  getKey = getKey || function(series) { return series.key }; // use default series.key if getKey is undefined
	  defaultColors = defaultColors || d3.scale.category20().range(); //default color function

	  var defIndex = defaultColors.length; //current default color (going in reverse)

	  return function(series, index) {
	    var key = getKey(series);

	    if (!defIndex) defIndex = defaultColors.length; //used all the default colors, start over

	    if (typeof dictionary[key] !== "undefined")
	      return (typeof dictionary[key] === "function") ? dictionary[key]() : dictionary[key];
	    else
	      return defaultColors[--defIndex]; // no match in dictionary, use default color
	  }
	}



	// From the PJAX example on d3js.org, while this is not really directly needed
	// it's a very cool method for doing pjax, I may expand upon it a little bit,
	// open to suggestions on anything that may be useful
	nv.utils.pjax = function(links, content) {
	  d3.selectAll(links).on("click", function() {
	    history.pushState(this.href, this.textContent, this.href);
	    load(this.href);
	    d3.event.preventDefault();
	  });

	  function load(href) {
	    d3.html(href, function(fragment) {
	      var target = d3.select(content).node();
	      target.parentNode.replaceChild(d3.select(fragment).select(content).node(), target);
	      nv.utils.pjax(links, content);
	    });
	  }

	  d3.select(window).on("popstate", function() {
	    if (d3.event.state) load(d3.event.state);
	  });
	}

	/* For situations where we want to approximate the width in pixels for an SVG:text element.
	Most common instance is when the element is in a display:none; container.
	Forumla is : text.length * font-size * constant_factor
	*/
	nv.utils.calcApproxTextWidth = function (svgTextElem) {
	    if (typeof svgTextElem.style === 'function'
	        && typeof svgTextElem.text === 'function') {
	        var fontSize = parseInt(svgTextElem.style("font-size").replace("px",""));
	        var textLength = svgTextElem.text().length;

	        return textLength * fontSize * 0.5;
	    }
	    return 0;
	};

	/* Numbers that are undefined, null or NaN, convert them to zeros.
	*/
	nv.utils.NaNtoZero = function(n) {
	    if (typeof n !== 'number'
	        || isNaN(n)
	        || n === null
	        || n === Infinity) return 0;

	    return n;
	};

	/*
	Snippet of code you can insert into each nv.models.* to give you the ability to
	do things like:
	chart.options({
	  showXAxis: true,
	  tooltips: true
	});

	To enable in the chart:
	chart.options = nv.utils.optionsFunc.bind(chart);
	*/
	nv.utils.optionsFunc = function(args) {
	    if (args) {
	      d3.map(args).forEach((function(key,value) {
	        if (typeof this[key] === "function") {
	           this[key](value);
	        }
	      }).bind(this));
	    }
	    return this;
	};nv.models.axis = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var axis = d3.svg.axis()
	    ;

	  var margin = {top: 0, right: 0, bottom: 0, left: 0}
	    , width = 75 //only used for tickLabel currently
	    , height = 60 //only used for tickLabel currently
	    , scale = d3.scale.linear()
	    , axisLabelText = null
	    , showMaxMin = true //TODO: showMaxMin should be disabled on all ordinal scaled axes
	    , highlightZero = true
	    , rotateLabels = 0
	    , rotateYLabel = true
	    , staggerLabels = false
	    , isOrdinal = false
	    , ticks = null
	    , axisLabelDistance = 12 //The larger this number is, the closer the axis label is to the axis.
	    ;

	  axis
	    .scale(scale)
	    .orient('bottom')
	    .tickFormat(function(d) { return d })
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var scale0;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this);


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-axis').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-axis');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g')

	      //------------------------------------------------------------


	      if (ticks !== null)
	        axis.ticks(ticks);
	      else if (axis.orient() == 'top' || axis.orient() == 'bottom')
	        axis.ticks(Math.abs(scale.range()[1] - scale.range()[0]) / 100);


	      //TODO: consider calculating width/height based on whether or not label is added, for reference in charts using this component


	      g.transition().call(axis);

	      scale0 = scale0 || axis.scale();

	      var fmt = axis.tickFormat();
	      if (fmt == null) {
	        fmt = scale0.tickFormat();
	      }

	      var axisLabel = g.selectAll('text.nv-axislabel')
	          .data([axisLabelText || null]);
	      axisLabel.exit().remove();
	      switch (axis.orient()) {
	        case 'top':
	          axisLabel.enter().append('text').attr('class', 'nv-axislabel');
	          var w = (scale.range().length==2) ? scale.range()[1] : (scale.range()[scale.range().length-1]+(scale.range()[1]-scale.range()[0]));
	          axisLabel
	              .attr('text-anchor', 'middle')
	              .attr('y', 0)
	              .attr('x', w/2);
	          if (showMaxMin) {
	            var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
	                           .data(scale.domain());
	            axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text');
	            axisMaxMin.exit().remove();
	            axisMaxMin
	                .attr('transform', function(d,i) {
	                  return 'translate(' + scale(d) + ',0)'
	                })
	              .select('text')
	                .attr('dy', '-0.5em')
	                .attr('y', -axis.tickPadding())
	                .attr('text-anchor', 'middle')
	                .text(function(d,i) {
	                  var v = fmt(d);
	                  return ('' + v).match('NaN') ? '' : v;
	                });
	            axisMaxMin.transition()
	                .attr('transform', function(d,i) {
	                  return 'translate(' + scale.range()[i] + ',0)'
	                });
	          }
	          break;
	        case 'bottom':
	          var xLabelMargin = 36;
	          var maxTextWidth = 30;
	          var xTicks = g.selectAll('g').select("text");
	          if (rotateLabels%360) {
	            //Calculate the longest xTick width
	            xTicks.each(function(d,i){
	              var width = this.getBBox().width;
	              if(width > maxTextWidth) maxTextWidth = width;
	            });
	            //Convert to radians before calculating sin. Add 30 to margin for healthy padding.
	            var sin = Math.abs(Math.sin(rotateLabels*Math.PI/180));
	            var xLabelMargin = (sin ? sin*maxTextWidth : maxTextWidth)+30;
	            //Rotate all xTicks
	            xTicks
	              .attr('transform', function(d,i,j) { return 'rotate(' + rotateLabels + ' 0,0)' })
	              .style('text-anchor', rotateLabels%360 > 0 ? 'start' : 'end');
	          }
	          axisLabel.enter().append('text').attr('class', 'nv-axislabel');
	          var w = (scale.range().length==2) ? scale.range()[1] : (scale.range()[scale.range().length-1]+(scale.range()[1]-scale.range()[0]));
	          axisLabel
	              .attr('text-anchor', 'middle')
	              .attr('y', xLabelMargin)
	              .attr('x', w/2);
	          if (showMaxMin) {
	          //if (showMaxMin && !isOrdinal) {
	            var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
	                           //.data(scale.domain())
	                           .data([scale.domain()[0], scale.domain()[scale.domain().length - 1]]);
	            axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text');
	            axisMaxMin.exit().remove();
	            axisMaxMin
	                .attr('transform', function(d,i) {
	                  return 'translate(' + (scale(d) + (isOrdinal ? scale.rangeBand() / 2 : 0)) + ',0)'
	                })
	              .select('text')
	                .attr('dy', '.71em')
	                .attr('y', axis.tickPadding())
	                .attr('transform', function(d,i,j) { return 'rotate(' + rotateLabels + ' 0,0)' })
	                .style('text-anchor', rotateLabels ? (rotateLabels%360 > 0 ? 'start' : 'end') : 'middle')
	                .text(function(d,i) {
	                  var v = fmt(d);
	                  return ('' + v).match('NaN') ? '' : v;
	                });
	            axisMaxMin.transition()
	                .attr('transform', function(d,i) {
	                  //return 'translate(' + scale.range()[i] + ',0)'
	                  //return 'translate(' + scale(d) + ',0)'
	                  return 'translate(' + (scale(d) + (isOrdinal ? scale.rangeBand() / 2 : 0)) + ',0)'
	                });
	          }
	          if (staggerLabels)
	            xTicks
	                .attr('transform', function(d,i) { return 'translate(0,' + (i % 2 == 0 ? '0' : '12') + ')' });

	          break;
	        case 'right':
	          axisLabel.enter().append('text').attr('class', 'nv-axislabel');
	          axisLabel
	              .style('text-anchor', rotateYLabel ? 'middle' : 'begin')
	              .attr('transform', rotateYLabel ? 'rotate(90)' : '')
	              .attr('y', rotateYLabel ? (-Math.max(margin.right,width) + 12) : -10) //TODO: consider calculating this based on largest tick width... OR at least expose this on chart
	              .attr('x', rotateYLabel ? (scale.range()[0] / 2) : axis.tickPadding());
	          if (showMaxMin) {
	            var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
	                           .data(scale.domain());
	            axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text')
	                .style('opacity', 0);
	            axisMaxMin.exit().remove();
	            axisMaxMin
	                .attr('transform', function(d,i) {
	                  return 'translate(0,' + scale(d) + ')'
	                })
	              .select('text')
	                .attr('dy', '.32em')
	                .attr('y', 0)
	                .attr('x', axis.tickPadding())
	                .style('text-anchor', 'start')
	                .text(function(d,i) {
	                  var v = fmt(d);
	                  return ('' + v).match('NaN') ? '' : v;
	                });
	            axisMaxMin.transition()
	                .attr('transform', function(d,i) {
	                  return 'translate(0,' + scale.range()[i] + ')'
	                })
	              .select('text')
	                .style('opacity', 1);
	          }
	          break;
	        case 'left':
	          /*
	          //For dynamically placing the label. Can be used with dynamically-sized chart axis margins
	          var yTicks = g.selectAll('g').select("text");
	          yTicks.each(function(d,i){
	            var labelPadding = this.getBBox().width + axis.tickPadding() + 16;
	            if(labelPadding > width) width = labelPadding;
	          });
	          */
	          axisLabel.enter().append('text').attr('class', 'nv-axislabel');
	          axisLabel
	              .style('text-anchor', rotateYLabel ? 'middle' : 'end')
	              .attr('transform', rotateYLabel ? 'rotate(-90)' : '')
	              .attr('y', rotateYLabel ? (-Math.max(margin.left,width) + axisLabelDistance) : -10) //TODO: consider calculating this based on largest tick width... OR at least expose this on chart
	              .attr('x', rotateYLabel ? (-scale.range()[0] / 2) : -axis.tickPadding());
	          if (showMaxMin) {
	            var axisMaxMin = wrap.selectAll('g.nv-axisMaxMin')
	                           .data(scale.domain());
	            axisMaxMin.enter().append('g').attr('class', 'nv-axisMaxMin').append('text')
	                .style('opacity', 0);
	            axisMaxMin.exit().remove();
	            axisMaxMin
	                .attr('transform', function(d,i) {
	                  return 'translate(0,' + scale0(d) + ')'
	                })
	              .select('text')
	                .attr('dy', '.32em')
	                .attr('y', 0)
	                .attr('x', -axis.tickPadding())
	                .attr('text-anchor', 'end')
	                .text(function(d,i) {
	                  var v = fmt(d);
	                  return ('' + v).match('NaN') ? '' : v;
	                });
	            axisMaxMin.transition()
	                .attr('transform', function(d,i) {
	                  return 'translate(0,' + scale.range()[i] + ')'
	                })
	              .select('text')
	                .style('opacity', 1);
	          }
	          break;
	      }
	      axisLabel
	          .text(function(d) { return d });


	      if (showMaxMin && (axis.orient() === 'left' || axis.orient() === 'right')) {
	        //check if max and min overlap other values, if so, hide the values that overlap
	        g.selectAll('g') // the g's wrapping each tick
	            .each(function(d,i) {
	              d3.select(this).select('text').attr('opacity', 1);
	              if (scale(d) < scale.range()[1] + 10 || scale(d) > scale.range()[0] - 10) { // 10 is assuming text height is 16... if d is 0, leave it!
	                if (d > 1e-10 || d < -1e-10) // accounts for minor floating point errors... though could be problematic if the scale is EXTREMELY SMALL
	                  d3.select(this).attr('opacity', 0);

	                d3.select(this).select('text').attr('opacity', 0); // Don't remove the ZERO line!!
	              }
	            });

	        //if Max and Min = 0 only show min, Issue #281
	        if (scale.domain()[0] == scale.domain()[1] && scale.domain()[0] == 0)
	          wrap.selectAll('g.nv-axisMaxMin')
	            .style('opacity', function(d,i) { return !i ? 1 : 0 });

	      }

	      if (showMaxMin && (axis.orient() === 'top' || axis.orient() === 'bottom')) {
	        var maxMinRange = [];
	        wrap.selectAll('g.nv-axisMaxMin')
	            .each(function(d,i) {
	              try {
	                  if (i) // i== 1, max position
	                      maxMinRange.push(scale(d) - this.getBBox().width - 4)  //assuming the max and min labels are as wide as the next tick (with an extra 4 pixels just in case)
	                  else // i==0, min position
	                      maxMinRange.push(scale(d) + this.getBBox().width + 4)
	              }catch (err) {
	                  if (i) // i== 1, max position
	                      maxMinRange.push(scale(d) - 4)  //assuming the max and min labels are as wide as the next tick (with an extra 4 pixels just in case)
	                  else // i==0, min position
	                      maxMinRange.push(scale(d) + 4)
	              }
	            });
	        g.selectAll('g') // the g's wrapping each tick
	            .each(function(d,i) {
	              if (scale(d) < maxMinRange[0] || scale(d) > maxMinRange[1]) {
	                if (d > 1e-10 || d < -1e-10) // accounts for minor floating point errors... though could be problematic if the scale is EXTREMELY SMALL
	                  d3.select(this).remove();
	                else
	                  d3.select(this).select('text').remove(); // Don't remove the ZERO line!!
	              }
	            });
	      }


	      //highlight zero line ... Maybe should not be an option and should just be in CSS?
	      if (highlightZero)
	        g.selectAll('.tick')
	          .filter(function(d) { return !parseFloat(Math.round(d.__data__*100000)/1000000) && (d.__data__ !== undefined) }) //this is because sometimes the 0 tick is a very small fraction, TODO: think of cleaner technique
	            .classed('zero', true);

	      //store old scales for use in transitions on update
	      scale0 = scale.copy();

	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.axis = axis;

	  d3.rebind(chart, axis, 'orient', 'tickValues', 'tickSubdivide', 'tickSize', 'tickPadding', 'tickFormat');
	  d3.rebind(chart, scale, 'domain', 'range', 'rangeBand', 'rangeBands'); //these are also accessible by chart.scale(), but added common ones directly for ease of use

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.margin = function(_) {
	    if(!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  }

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.ticks = function(_) {
	    if (!arguments.length) return ticks;
	    ticks = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.axisLabel = function(_) {
	    if (!arguments.length) return axisLabelText;
	    axisLabelText = _;
	    return chart;
	  }

	  chart.showMaxMin = function(_) {
	    if (!arguments.length) return showMaxMin;
	    showMaxMin = _;
	    return chart;
	  }

	  chart.highlightZero = function(_) {
	    if (!arguments.length) return highlightZero;
	    highlightZero = _;
	    return chart;
	  }

	  chart.scale = function(_) {
	    if (!arguments.length) return scale;
	    scale = _;
	    axis.scale(scale);
	    isOrdinal = typeof scale.rangeBands === 'function';
	    d3.rebind(chart, scale, 'domain', 'range', 'rangeBand', 'rangeBands');
	    return chart;
	  }

	  chart.rotateYLabel = function(_) {
	    if(!arguments.length) return rotateYLabel;
	    rotateYLabel = _;
	    return chart;
	  }

	  chart.rotateLabels = function(_) {
	    if(!arguments.length) return rotateLabels;
	    rotateLabels = _;
	    return chart;
	  }

	  chart.staggerLabels = function(_) {
	    if (!arguments.length) return staggerLabels;
	    staggerLabels = _;
	    return chart;
	  };

	  chart.axisLabelDistance = function(_) {
	    if (!arguments.length) return axisLabelDistance;
	    axisLabelDistance = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}
	//TODO: consider deprecating and using multibar with single series for this
	nv.models.historicalBar = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 0, right: 0, bottom: 0, left: 0}
	    , width = 960
	    , height = 500
	    , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
	    , x = d3.scale.linear()
	    , y = d3.scale.linear()
	    , getX = function(d) { return d.x }
	    , getY = function(d) { return d.y }
	    , forceX = []
	    , forceY = [0]
	    , padData = false
	    , clipEdge = true
	    , color = nv.utils.defaultColor()
	    , xDomain
	    , yDomain
	    , xRange
	    , yRange
	    , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout')
	    , interactive = true
	    ;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableWidth = width - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          container = d3.select(this);


	      //------------------------------------------------------------
	      // Setup Scales

	      x   .domain(xDomain || d3.extent(data[0].values.map(getX).concat(forceX) ))

	      if (padData)
	        x.range(xRange || [availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5)  / data[0].values.length ]);
	      else
	        x.range(xRange || [0, availableWidth]);

	      y   .domain(yDomain || d3.extent(data[0].values.map(getY).concat(forceY) ))
	          .range(yRange || [availableHeight, 0]);

	      // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point

	      if (x.domain()[0] === x.domain()[1])
	        x.domain()[0] ?
	            x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01])
	          : x.domain([-1,1]);

	      if (y.domain()[0] === y.domain()[1])
	        y.domain()[0] ?
	            y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01])
	          : y.domain([-1,1]);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-historicalBar-' + id).data([data[0].values]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-historicalBar-' + id);
	      var defsEnter = wrapEnter.append('defs');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-bars');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------


	      container
	          .on('click', function(d,i) {
	            dispatch.chartClick({
	                data: d,
	                index: i,
	                pos: d3.event,
	                id: id
	            });
	          });


	      defsEnter.append('clipPath')
	          .attr('id', 'nv-chart-clip-path-' + id)
	        .append('rect');

	      wrap.select('#nv-chart-clip-path-' + id + ' rect')
	          .attr('width', availableWidth)
	          .attr('height', availableHeight);

	      g   .attr('clip-path', clipEdge ? 'url(#nv-chart-clip-path-' + id + ')' : '');



	      var bars = wrap.select('.nv-bars').selectAll('.nv-bar')
	          .data(function(d) { return d }, function(d,i) {return getX(d,i)});

	      bars.exit().remove();


	      var barsEnter = bars.enter().append('rect')
	          //.attr('class', function(d,i,j) { return (getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive') + ' nv-bar-' + j + '-' + i })
	          .attr('x', 0 )
	          .attr('y', function(d,i) {  return nv.utils.NaNtoZero(y(Math.max(0, getY(d,i)))) })
	          .attr('height', function(d,i) { return nv.utils.NaNtoZero(Math.abs(y(getY(d,i)) - y(0))) })
	          .attr('transform', function(d,i) { return 'translate(' + (x(getX(d,i)) - availableWidth / data[0].values.length * .45) + ',0)'; }) 
	          .on('mouseover', function(d,i) {
	            if (!interactive) return;
	            d3.select(this).classed('hover', true);
	            dispatch.elementMouseover({
	                point: d,
	                series: data[0],
	                pos: [x(getX(d,i)), y(getY(d,i))],  // TODO: Figure out why the value appears to be shifted
	                pointIndex: i,
	                seriesIndex: 0,
	                e: d3.event
	            });

	          })
	          .on('mouseout', function(d,i) {
	                if (!interactive) return;
	                d3.select(this).classed('hover', false);
	                dispatch.elementMouseout({
	                    point: d,
	                    series: data[0],
	                    pointIndex: i,
	                    seriesIndex: 0,
	                    e: d3.event
	                });
	          })
	          .on('click', function(d,i) {
	                if (!interactive) return;
	                dispatch.elementClick({
	                    //label: d[label],
	                    value: getY(d,i),
	                    data: d,
	                    index: i,
	                    pos: [x(getX(d,i)), y(getY(d,i))],
	                    e: d3.event,
	                    id: id
	                });
	              d3.event.stopPropagation();
	          })
	          .on('dblclick', function(d,i) {
	              if (!interactive) return;
	              dispatch.elementDblClick({
	                  //label: d[label],
	                  value: getY(d,i),
	                  data: d,
	                  index: i,
	                  pos: [x(getX(d,i)), y(getY(d,i))],
	                  e: d3.event,
	                  id: id
	              });
	              d3.event.stopPropagation();
	          });

	      bars
	          .attr('fill', function(d,i) { return color(d, i); })
	          .attr('class', function(d,i,j) { return (getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive') + ' nv-bar-' + j + '-' + i })
	          .transition()
	          .attr('transform', function(d,i) { return 'translate(' + (x(getX(d,i)) - availableWidth / data[0].values.length * .45) + ',0)'; }) 
	           //TODO: better width calculations that don't assume always uniform data spacing;w
	          .attr('width', (availableWidth / data[0].values.length) * .9 );


	      bars.transition()
	          .attr('y', function(d,i) {
	            var rval = getY(d,i) < 0 ?
	                    y(0) :
	                    y(0) - y(getY(d,i)) < 1 ?
	                      y(0) - 1 :
	                      y(getY(d,i));
	            return nv.utils.NaNtoZero(rval);
	          })
	          .attr('height', function(d,i) { return nv.utils.NaNtoZero(Math.max(Math.abs(y(getY(d,i)) - y(0)),1)) });

	    });

	    return chart;
	  }

	  //Create methods to allow outside functions to highlight a specific bar.
	  chart.highlightPoint = function(pointIndex, isHoverOver) {
	      d3.select(".nv-historicalBar-" + id)
	        .select(".nv-bars .nv-bar-0-" + pointIndex)
	              .classed("hover", isHoverOver)
	               ;
	  };

	  chart.clearHighlights = function() {
	      d3.select(".nv-historicalBar-" + id)
	        .select(".nv-bars .nv-bar.hover")
	              .classed("hover", false)
	               ;
	  };
	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;

	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = _;
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = _;
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.xScale = function(_) {
	    if (!arguments.length) return x;
	    x = _;
	    return chart;
	  };

	  chart.yScale = function(_) {
	    if (!arguments.length) return y;
	    y = _;
	    return chart;
	  };

	  chart.xDomain = function(_) {
	    if (!arguments.length) return xDomain;
	    xDomain = _;
	    return chart;
	  };

	  chart.yDomain = function(_) {
	    if (!arguments.length) return yDomain;
	    yDomain = _;
	    return chart;
	  };

	  chart.xRange = function(_) {
	    if (!arguments.length) return xRange;
	    xRange = _;
	    return chart;
	  };

	  chart.yRange = function(_) {
	    if (!arguments.length) return yRange;
	    yRange = _;
	    return chart;
	  };

	  chart.forceX = function(_) {
	    if (!arguments.length) return forceX;
	    forceX = _;
	    return chart;
	  };

	  chart.forceY = function(_) {
	    if (!arguments.length) return forceY;
	    forceY = _;
	    return chart;
	  };

	  chart.padData = function(_) {
	    if (!arguments.length) return padData;
	    padData = _;
	    return chart;
	  };

	  chart.clipEdge = function(_) {
	    if (!arguments.length) return clipEdge;
	    clipEdge = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };

	  chart.id = function(_) {
	    if (!arguments.length) return id;
	    id = _;
	    return chart;
	  };

	  chart.interactive = function(_) {
	    if(!arguments.length) return interactive;
	    interactive = false;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	// Chart design based on the recommendations of Stephen Few. Implementation
	// based on the work of Clint Ivy, Jamie Love, and Jason Davies.
	// http://projects.instantcognition.com/protovis/bulletchart/

	nv.models.bullet = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 0, right: 0, bottom: 0, left: 0}
	    , orient = 'left' // TODO top & bottom
	    , reverse = false
	    , ranges = function(d) { return d.ranges }
	    , markers = function(d) { return d.markers }
	    , measures = function(d) { return d.measures }
	    , rangeLabels = function(d) { return d.rangeLabels ? d.rangeLabels : [] }
	    , markerLabels = function(d) { return d.markerLabels ? d.markerLabels : []  }
	    , measureLabels = function(d) { return d.measureLabels ? d.measureLabels : []  }
	    , forceX = [0] // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
	    , width = 380
	    , height = 30
	    , tickFormat = null
	    , color = nv.utils.getColor(['#1f77b4'])
	    , dispatch = d3.dispatch('elementMouseover', 'elementMouseout')
	    ;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(d, i) {
	      var availableWidth = width - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          container = d3.select(this);

	      var rangez = ranges.call(this, d, i).slice().sort(d3.descending),
	          markerz = markers.call(this, d, i).slice().sort(d3.descending),
	          measurez = measures.call(this, d, i).slice().sort(d3.descending),
	          rangeLabelz = rangeLabels.call(this, d, i).slice(),
	          markerLabelz = markerLabels.call(this, d, i).slice(),
	          measureLabelz = measureLabels.call(this, d, i).slice();


	      //------------------------------------------------------------
	      // Setup Scales

	      // Compute the new x-scale.
	      var x1 = d3.scale.linear()
	          .domain( d3.extent(d3.merge([forceX, rangez])) )
	          .range(reverse ? [availableWidth, 0] : [0, availableWidth]);

	      // Retrieve the old x-scale, if this is an update.
	      var x0 = this.__chart__ || d3.scale.linear()
	          .domain([0, Infinity])
	          .range(x1.range());

	      // Stash the new scale.
	      this.__chart__ = x1;


	      var rangeMin = d3.min(rangez), //rangez[2]
	          rangeMax = d3.max(rangez), //rangez[0]
	          rangeAvg = rangez[1];

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-bullet').data([d]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-bullet');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      gEnter.append('rect').attr('class', 'nv-range nv-rangeMax');
	      gEnter.append('rect').attr('class', 'nv-range nv-rangeAvg');
	      gEnter.append('rect').attr('class', 'nv-range nv-rangeMin');
	      gEnter.append('rect').attr('class', 'nv-measure');
	      gEnter.append('path').attr('class', 'nv-markerTriangle');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------



	      var w0 = function(d) { return Math.abs(x0(d) - x0(0)) }, // TODO: could optimize by precalculating x0(0) and x1(0)
	          w1 = function(d) { return Math.abs(x1(d) - x1(0)) };
	      var xp0 = function(d) { return d < 0 ? x0(d) : x0(0) },
	          xp1 = function(d) { return d < 0 ? x1(d) : x1(0) };


	      g.select('rect.nv-rangeMax')
	          .attr('height', availableHeight)
	          .attr('width', w1(rangeMax > 0 ? rangeMax : rangeMin))
	          .attr('x', xp1(rangeMax > 0 ? rangeMax : rangeMin))
	          .datum(rangeMax > 0 ? rangeMax : rangeMin)
	          /*
	          .attr('x', rangeMin < 0 ?
	                         rangeMax > 0 ?
	                             x1(rangeMin)
	                           : x1(rangeMax)
	                       : x1(0))
	                      */

	      g.select('rect.nv-rangeAvg')
	          .attr('height', availableHeight)
	          .attr('width', w1(rangeAvg))
	          .attr('x', xp1(rangeAvg))
	          .datum(rangeAvg)
	          /*
	          .attr('width', rangeMax <= 0 ?
	                             x1(rangeMax) - x1(rangeAvg)
	                           : x1(rangeAvg) - x1(rangeMin))
	          .attr('x', rangeMax <= 0 ?
	                         x1(rangeAvg)
	                       : x1(rangeMin))
	                      */

	      g.select('rect.nv-rangeMin')
	          .attr('height', availableHeight)
	          .attr('width', w1(rangeMax))
	          .attr('x', xp1(rangeMax))
	          .attr('width', w1(rangeMax > 0 ? rangeMin : rangeMax))
	          .attr('x', xp1(rangeMax > 0 ? rangeMin : rangeMax))
	          .datum(rangeMax > 0 ? rangeMin : rangeMax)
	          /*
	          .attr('width', rangeMax <= 0 ?
	                             x1(rangeAvg) - x1(rangeMin)
	                           : x1(rangeMax) - x1(rangeAvg))
	          .attr('x', rangeMax <= 0 ?
	                         x1(rangeMin)
	                       : x1(rangeAvg))
	                      */

	      g.select('rect.nv-measure')
	          .style('fill', color)
	          .attr('height', availableHeight / 3)
	          .attr('y', availableHeight / 3)
	          .attr('width', measurez < 0 ?
	                             x1(0) - x1(measurez[0])
	                           : x1(measurez[0]) - x1(0))
	          .attr('x', xp1(measurez))
	          .on('mouseover', function() {
	              dispatch.elementMouseover({
	                value: measurez[0],
	                label: measureLabelz[0] || 'Current',
	                pos: [x1(measurez[0]), availableHeight/2]
	              })
	          })
	          .on('mouseout', function() {
	              dispatch.elementMouseout({
	                value: measurez[0],
	                label: measureLabelz[0] || 'Current'
	              })
	          })

	      var h3 =  availableHeight / 6;
	      if (markerz[0]) {
	        g.selectAll('path.nv-markerTriangle')
	            .attr('transform', function(d) { return 'translate(' + x1(markerz[0]) + ',' + (availableHeight / 2) + ')' })
	            .attr('d', 'M0,' + h3 + 'L' + h3 + ',' + (-h3) + ' ' + (-h3) + ',' + (-h3) + 'Z')
	            .on('mouseover', function() {
	              dispatch.elementMouseover({
	                value: markerz[0],
	                label: markerLabelz[0] || 'Previous',
	                pos: [x1(markerz[0]), availableHeight/2]
	              })
	            })
	            .on('mouseout', function() {
	              dispatch.elementMouseout({
	                value: markerz[0],
	                label: markerLabelz[0] || 'Previous'
	              })
	            });
	      } else {
	        g.selectAll('path.nv-markerTriangle').remove();
	      }


	      wrap.selectAll('.nv-range')
	          .on('mouseover', function(d,i) {
	            var label = rangeLabelz[i] || (!i ? "Maximum" : i == 1 ? "Mean" : "Minimum");

	            dispatch.elementMouseover({
	              value: d,
	              label: label,
	              pos: [x1(d), availableHeight/2]
	            })
	          })
	          .on('mouseout', function(d,i) {
	            var label = rangeLabelz[i] || (!i ? "Maximum" : i == 1 ? "Mean" : "Minimum");

	            dispatch.elementMouseout({
	              value: d,
	              label: label
	            })
	          })

	/* // THIS IS THE PREVIOUS BULLET IMPLEMENTATION, WILL REMOVE SHORTLY
	      // Update the range rects.
	      var range = g.selectAll('rect.nv-range')
	          .data(rangez);

	      range.enter().append('rect')
	          .attr('class', function(d, i) { return 'nv-range nv-s' + i; })
	          .attr('width', w0)
	          .attr('height', availableHeight)
	          .attr('x', reverse ? x0 : 0)
	          .on('mouseover', function(d,i) { 
	              dispatch.elementMouseover({
	                value: d,
	                label: (i <= 0) ? 'Maximum' : (i > 1) ? 'Minimum' : 'Mean', //TODO: make these labels a variable
	                pos: [x1(d), availableHeight/2]
	              })
	          })
	          .on('mouseout', function(d,i) { 
	              dispatch.elementMouseout({
	                value: d,
	                label: (i <= 0) ? 'Minimum' : (i >=1) ? 'Maximum' : 'Mean' //TODO: make these labels a variable
	              })
	          })

	      d3.transition(range)
	          .attr('x', reverse ? x1 : 0)
	          .attr('width', w1)
	          .attr('height', availableHeight);


	      // Update the measure rects.
	      var measure = g.selectAll('rect.nv-measure')
	          .data(measurez);

	      measure.enter().append('rect')
	          .attr('class', function(d, i) { return 'nv-measure nv-s' + i; })
	          .style('fill', function(d,i) { return color(d,i ) })
	          .attr('width', w0)
	          .attr('height', availableHeight / 3)
	          .attr('x', reverse ? x0 : 0)
	          .attr('y', availableHeight / 3)
	          .on('mouseover', function(d) { 
	              dispatch.elementMouseover({
	                value: d,
	                label: 'Current', //TODO: make these labels a variable
	                pos: [x1(d), availableHeight/2]
	              })
	          })
	          .on('mouseout', function(d) { 
	              dispatch.elementMouseout({
	                value: d,
	                label: 'Current' //TODO: make these labels a variable
	              })
	          })

	      d3.transition(measure)
	          .attr('width', w1)
	          .attr('height', availableHeight / 3)
	          .attr('x', reverse ? x1 : 0)
	          .attr('y', availableHeight / 3);



	      // Update the marker lines.
	      var marker = g.selectAll('path.nv-markerTriangle')
	          .data(markerz);

	      var h3 =  availableHeight / 6;
	      marker.enter().append('path')
	          .attr('class', 'nv-markerTriangle')
	          .attr('transform', function(d) { return 'translate(' + x0(d) + ',' + (availableHeight / 2) + ')' })
	          .attr('d', 'M0,' + h3 + 'L' + h3 + ',' + (-h3) + ' ' + (-h3) + ',' + (-h3) + 'Z')
	          .on('mouseover', function(d,i) {
	              dispatch.elementMouseover({
	                value: d,
	                label: 'Previous',
	                pos: [x1(d), availableHeight/2]
	              })
	          })
	          .on('mouseout', function(d,i) {
	              dispatch.elementMouseout({
	                value: d,
	                label: 'Previous'
	              })
	          });

	      d3.transition(marker)
	          .attr('transform', function(d) { return 'translate(' + (x1(d) - x1(0)) + ',' + (availableHeight / 2) + ')' });

	      marker.exit().remove();
	*/

	    });

	    // d3.timer.flush();  // Not needed?

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;

	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  // left, right, top, bottom
	  chart.orient = function(_) {
	    if (!arguments.length) return orient;
	    orient = _;
	    reverse = orient == 'right' || orient == 'bottom';
	    return chart;
	  };

	  // ranges (bad, satisfactory, good)
	  chart.ranges = function(_) {
	    if (!arguments.length) return ranges;
	    ranges = _;
	    return chart;
	  };

	  // markers (previous, goal)
	  chart.markers = function(_) {
	    if (!arguments.length) return markers;
	    markers = _;
	    return chart;
	  };

	  // measures (actual, forecast)
	  chart.measures = function(_) {
	    if (!arguments.length) return measures;
	    measures = _;
	    return chart;
	  };

	  chart.forceX = function(_) {
	    if (!arguments.length) return forceX;
	    forceX = _;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.tickFormat = function(_) {
	    if (!arguments.length) return tickFormat;
	    tickFormat = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };

	  //============================================================


	  return chart;
	};



	// Chart design based on the recommendations of Stephen Few. Implementation
	// based on the work of Clint Ivy, Jamie Love, and Jason Davies.
	// http://projects.instantcognition.com/protovis/bulletchart/
	nv.models.bulletChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var bullet = nv.models.bullet()
	    ;

	  var orient = 'left' // TODO top & bottom
	    , reverse = false
	    , margin = {top: 5, right: 40, bottom: 20, left: 120}
	    , ranges = function(d) { return d.ranges }
	    , markers = function(d) { return d.markers }
	    , measures = function(d) { return d.measures }
	    , width = null
	    , height = 55
	    , tickFormat = null
	    , tooltips = true
	    , tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + x + '</h3>' +
	               '<p>' + y + '</p>'
	      }
	    , noData = 'No Data Available.'
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide')
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var showTooltip = function(e, offsetElement) {
	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ) + margin.left,
	        top = e.pos[1] + ( offsetElement.offsetTop || 0) + margin.top,
	        content = tooltip(e.key, e.label, e.value, e, chart);

	    nv.tooltip.show([left, top], content, e.value < 0 ? 'e' : 'w', null, offsetElement);
	  };

	  //============================================================


	  function chart(selection) {
	    selection.each(function(d, i) {
	      var container = d3.select(this);

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          that = this;


	      chart.update = function() { chart(selection) };
	      chart.container = this;

	      //------------------------------------------------------------
	      // Display No Data message if there's nothing to show.

	      if (!d || !ranges.call(this, d, i)) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', 18 + margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------



	      var rangez = ranges.call(this, d, i).slice().sort(d3.descending),
	          markerz = markers.call(this, d, i).slice().sort(d3.descending),
	          measurez = measures.call(this, d, i).slice().sort(d3.descending);


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-bulletChart').data([d]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-bulletChart');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-bulletWrap');
	      gEnter.append('g').attr('class', 'nv-titles');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------


	      // Compute the new x-scale.
	      var x1 = d3.scale.linear()
	          .domain([0, Math.max(rangez[0], markerz[0], measurez[0])])  // TODO: need to allow forceX and forceY, and xDomain, yDomain
	          .range(reverse ? [availableWidth, 0] : [0, availableWidth]);

	      // Retrieve the old x-scale, if this is an update.
	      var x0 = this.__chart__ || d3.scale.linear()
	          .domain([0, Infinity])
	          .range(x1.range());

	      // Stash the new scale.
	      this.__chart__ = x1;

	      /*
	      // Derive width-scales from the x-scales.
	      var w0 = bulletWidth(x0),
	          w1 = bulletWidth(x1);

	      function bulletWidth(x) {
	        var x0 = x(0);
	        return function(d) {
	          return Math.abs(x(d) - x(0));
	        };
	      }

	      function bulletTranslate(x) {
	        return function(d) {
	          return 'translate(' + x(d) + ',0)';
	        };
	      }
	      */

	      var w0 = function(d) { return Math.abs(x0(d) - x0(0)) }, // TODO: could optimize by precalculating x0(0) and x1(0)
	          w1 = function(d) { return Math.abs(x1(d) - x1(0)) };


	      var title = gEnter.select('.nv-titles').append('g')
	          .attr('text-anchor', 'end')
	          .attr('transform', 'translate(-6,' + (height - margin.top - margin.bottom) / 2 + ')');
	      title.append('text')
	          .attr('class', 'nv-title')
	          .text(function(d) { return d.title; });

	      title.append('text')
	          .attr('class', 'nv-subtitle')
	          .attr('dy', '1em')
	          .text(function(d) { return d.subtitle; });



	      bullet
	        .width(availableWidth)
	        .height(availableHeight)

	      var bulletWrap = g.select('.nv-bulletWrap');

	      d3.transition(bulletWrap).call(bullet);



	      // Compute the tick format.
	      var format = tickFormat || x1.tickFormat( availableWidth / 100 );

	      // Update the tick groups.
	      var tick = g.selectAll('g.nv-tick')
	          .data(x1.ticks( availableWidth / 50 ), function(d) {
	            return this.textContent || format(d);
	          });

	      // Initialize the ticks with the old scale, x0.
	      var tickEnter = tick.enter().append('g')
	          .attr('class', 'nv-tick')
	          .attr('transform', function(d) { return 'translate(' + x0(d) + ',0)' })
	          .style('opacity', 1e-6);

	      tickEnter.append('line')
	          .attr('y1', availableHeight)
	          .attr('y2', availableHeight * 7 / 6);

	      tickEnter.append('text')
	          .attr('text-anchor', 'middle')
	          .attr('dy', '1em')
	          .attr('y', availableHeight * 7 / 6)
	          .text(format);


	      // Transition the updating ticks to the new scale, x1.
	      var tickUpdate = d3.transition(tick)
	          .attr('transform', function(d) { return 'translate(' + x1(d) + ',0)' })
	          .style('opacity', 1);

	      tickUpdate.select('line')
	          .attr('y1', availableHeight)
	          .attr('y2', availableHeight * 7 / 6);

	      tickUpdate.select('text')
	          .attr('y', availableHeight * 7 / 6);

	      // Transition the exiting ticks to the new scale, x1.
	      d3.transition(tick.exit())
	          .attr('transform', function(d) { return 'translate(' + x1(d) + ',0)' })
	          .style('opacity', 1e-6)
	          .remove();


	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      dispatch.on('tooltipShow', function(e) {
	        e.key = d.title;
	        if (tooltips) showTooltip(e, that.parentNode);
	      });

	      //============================================================

	    });

	    d3.timer.flush();

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  bullet.dispatch.on('elementMouseover.tooltip', function(e) {
	    dispatch.tooltipShow(e);
	  });

	  bullet.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;
	  chart.bullet = bullet;

	  d3.rebind(chart, bullet, 'color');

	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  // left, right, top, bottom
	  chart.orient = function(x) {
	    if (!arguments.length) return orient;
	    orient = x;
	    reverse = orient == 'right' || orient == 'bottom';
	    return chart;
	  };

	  // ranges (bad, satisfactory, good)
	  chart.ranges = function(x) {
	    if (!arguments.length) return ranges;
	    ranges = x;
	    return chart;
	  };

	  // markers (previous, goal)
	  chart.markers = function(x) {
	    if (!arguments.length) return markers;
	    markers = x;
	    return chart;
	  };

	  // measures (actual, forecast)
	  chart.measures = function(x) {
	    if (!arguments.length) return measures;
	    measures = x;
	    return chart;
	  };

	  chart.width = function(x) {
	    if (!arguments.length) return width;
	    width = x;
	    return chart;
	  };

	  chart.height = function(x) {
	    if (!arguments.length) return height;
	    height = x;
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.tickFormat = function(x) {
	    if (!arguments.length) return tickFormat;
	    tickFormat = x;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	};



	nv.models.cumulativeLineChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var lines = nv.models.line()
	    , xAxis = nv.models.axis()
	    , yAxis = nv.models.axis()
	    , legend = nv.models.legend()
	    , controls = nv.models.legend()
	    , interactiveLayer = nv.interactiveGuideline()
	    ;

	  var margin = {top: 30, right: 30, bottom: 50, left: 60}
	    , color = nv.utils.defaultColor()
	    , width = null
	    , height = null
	    , showLegend = true
	    , showXAxis = true
	    , showYAxis = true
	    , rightAlignYAxis = false
	    , tooltips = true
	    , showControls = true
	    , useInteractiveGuideline = false
	    , rescaleY = true
	    , tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + key + '</h3>' +
	               '<p>' +  y + ' at ' + x + '</p>'
	      }
	    , x //can be accessed via chart.xScale()
	    , y //can be accessed via chart.yScale()
	    , id = lines.id()
	    , state = { index: 0, rescaleY: rescaleY }
	    , defaultState = null
	    , noData = 'No Data Available.'
	    , average = function(d) { return d.average }
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
	    , transitionDuration = 250
	    , noErrorCheck = false  //if set to TRUE, will bypass an error check in the indexify function.
	    ;

	  xAxis
	    .orient('bottom')
	    .tickPadding(7)
	    ;
	  yAxis
	    .orient((rightAlignYAxis) ? 'right' : 'left')
	    ;

	  //============================================================
	  controls.updateState(false);

	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	   var dx = d3.scale.linear()
	     , index = {i: 0, x: 0}
	     ;

	  var showTooltip = function(e, offsetElement) {
	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
	        y = yAxis.tickFormat()(lines.y()(e.point, e.pointIndex)),
	        content = tooltip(e.series.key, x, y, e, chart);

	    nv.tooltip.show([left, top], content, null, null, offsetElement);
	  };

	  //============================================================

	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this).classed('nv-chart-' + id, true),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;


	      chart.update = function() { container.transition().duration(transitionDuration).call(chart) };
	      chart.container = this;

	      //set state.disabled
	      state.disabled = data.map(function(d) { return !!d.disabled });

	      if (!defaultState) {
	        var key;
	        defaultState = {};
	        for (key in state) {
	          if (state[key] instanceof Array)
	            defaultState[key] = state[key].slice(0);
	          else
	            defaultState[key] = state[key];
	        }
	      }

	      var indexDrag = d3.behavior.drag()
	                        .on('dragstart', dragStart)
	                        .on('drag', dragMove)
	                        .on('dragend', dragEnd);


	      function dragStart(d,i) {
	        d3.select(chart.container)
	            .style('cursor', 'ew-resize');
	      }

	      function dragMove(d,i) {
	        index.x = d3.event.x;
	        index.i = Math.round(dx.invert(index.x));
	        updateZero();
	      }

	      function dragEnd(d,i) {
	        d3.select(chart.container)
	            .style('cursor', 'auto');

	        // update state and send stateChange with new index
	        state.index = index.i;
	        dispatch.stateChange(state);
	      }

	      //------------------------------------------------------------
	      // Display No Data message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      x = lines.xScale();
	      y = lines.yScale();


	      if (!rescaleY) {
	        var seriesDomains = data
	          .filter(function(series) { return !series.disabled })
	          .map(function(series,i) {
	            var initialDomain = d3.extent(series.values, lines.y());

	            //account for series being disabled when losing 95% or more
	            if (initialDomain[0] < -.95) initialDomain[0] = -.95;

	            return [
	              (initialDomain[0] - initialDomain[1]) / (1 + initialDomain[1]),
	              (initialDomain[1] - initialDomain[0]) / (1 + initialDomain[0])
	            ];
	          });

	        var completeDomain = [
	          d3.min(seriesDomains, function(d) { return d[0] }),
	          d3.max(seriesDomains, function(d) { return d[1] })
	        ]

	        lines.yDomain(completeDomain);
	      } else {
	        lines.yDomain(null);
	      }


	      dx  .domain([0, data[0].values.length - 1]) //Assumes all series have same length
	          .range([0, availableWidth])
	          .clamp(true);

	      //------------------------------------------------------------


	      var data = indexify(index.i, data);


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart
	      var interactivePointerEvents = (useInteractiveGuideline) ? "none" : "all";
	      var wrap = container.selectAll('g.nv-wrap.nv-cumulativeLine').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-cumulativeLine').append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-interactive');
	      gEnter.append('g').attr('class', 'nv-x nv-axis').style("pointer-events","none");
	      gEnter.append('g').attr('class', 'nv-y nv-axis');
	      gEnter.append('g').attr('class', 'nv-background');
	      gEnter.append('g').attr('class', 'nv-linesWrap').style("pointer-events",interactivePointerEvents);
	      gEnter.append('g').attr('class', 'nv-avgLinesWrap').style("pointer-events","none");
	      gEnter.append('g').attr('class', 'nv-legendWrap');
	      gEnter.append('g').attr('class', 'nv-controlsWrap');


	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        legend.width(availableWidth);

	        g.select('.nv-legendWrap')
	            .datum(data)
	            .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }

	        g.select('.nv-legendWrap')
	            .attr('transform', 'translate(0,' + (-margin.top) +')')
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Controls

	      if (showControls) {
	        var controlsData = [
	          { key: 'Re-scale y-axis', disabled: !rescaleY }
	        ];

	        controls
	            .width(140)
	            .color(['#444', '#444', '#444'])
	            .rightAlign(false)
	            .margin({top: 5, right: 0, bottom: 5, left: 20})
	            ;

	        g.select('.nv-controlsWrap')
	            .datum(controlsData)
	            .attr('transform', 'translate(0,' + (-margin.top) +')')
	            .call(controls);
	      }

	      //------------------------------------------------------------


	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      if (rightAlignYAxis) {
	          g.select(".nv-y.nv-axis")
	              .attr("transform", "translate(" + availableWidth + ",0)");
	      }

	      // Show error if series goes below 100%
	      var tempDisabled = data.filter(function(d) { return d.tempDisabled });

	      wrap.select('.tempDisabled').remove(); //clean-up and prevent duplicates
	      if (tempDisabled.length) {
	        wrap.append('text').attr('class', 'tempDisabled')
	            .attr('x', availableWidth / 2)
	            .attr('y', '-.71em')
	            .style('text-anchor', 'end')
	            .text(tempDisabled.map(function(d) { return d.key }).join(', ') + ' values cannot be calculated for this time period.');
	      }

	      //------------------------------------------------------------
	      // Main Chart Component(s)

	      //------------------------------------------------------------
	      //Set up interactive layer
	      if (useInteractiveGuideline) {
	        interactiveLayer
	          .width(availableWidth)
	          .height(availableHeight)
	          .margin({left:margin.left,top:margin.top})
	          .svgContainer(container)
	          .xScale(x);
	        wrap.select(".nv-interactive").call(interactiveLayer);
	      }

	      gEnter.select('.nv-background')
	        .append('rect');

	      g.select('.nv-background rect')
	          .attr('width', availableWidth)
	          .attr('height', availableHeight);

	      lines
	        //.x(function(d) { return d.x })
	        .y(function(d) { return d.display.y })
	        .width(availableWidth)
	        .height(availableHeight)
	        .color(data.map(function(d,i) {
	          return d.color || color(d, i);
	        }).filter(function(d,i) { return !data[i].disabled && !data[i].tempDisabled; }));



	      var linesWrap = g.select('.nv-linesWrap')
	          .datum(data.filter(function(d) { return  !d.disabled && !d.tempDisabled }));

	      //d3.transition(linesWrap).call(lines);
	      linesWrap.call(lines);

	      /*Handle average lines [AN-612] ----------------------------*/

	      //Store a series index number in the data array.
	      data.forEach(function(d,i) {
	            d.seriesIndex = i;
	      });

	      var avgLineData = data.filter(function(d) {
	          return !d.disabled && !!average(d);
	      });

	      var avgLines = g.select(".nv-avgLinesWrap").selectAll("line")
	              .data(avgLineData, function(d) { return d.key; });

	      var getAvgLineY = function(d) {
	          //If average lines go off the svg element, clamp them to the svg bounds.
	          var yVal = y(average(d));
	          if (yVal < 0) return 0;
	          if (yVal > availableHeight) return availableHeight;
	          return yVal;
	      };

	      avgLines.enter()
	              .append('line')
	              .style('stroke-width',2)
	              .style('stroke-dasharray','10,10')
	              .style('stroke',function (d,i) {
	                  return lines.color()(d,d.seriesIndex);
	              })
	              .attr('x1',0)
	              .attr('x2',availableWidth)
	              .attr('y1', getAvgLineY)
	              .attr('y2', getAvgLineY);

	      avgLines
	              .style('stroke-opacity',function(d){
	                  //If average lines go offscreen, make them transparent
	                  var yVal = y(average(d));
	                  if (yVal < 0 || yVal > availableHeight) return 0;
	                  return 1;
	              })
	              .attr('x1',0)
	              .attr('x2',availableWidth)
	              .attr('y1', getAvgLineY)
	              .attr('y2', getAvgLineY);

	      avgLines.exit().remove();

	      //Create index line -----------------------------------------

	      var indexLine = linesWrap.selectAll('.nv-indexLine')
	          .data([index]);
	      indexLine.enter().append('rect').attr('class', 'nv-indexLine')
	          .attr('width', 3)
	          .attr('x', -2)
	          .attr('fill', 'red')
	          .attr('fill-opacity', .5)
	          .style("pointer-events","all")
	          .call(indexDrag)

	      indexLine
	          .attr('transform', function(d) { return 'translate(' + dx(d.i) + ',0)' })
	          .attr('height', availableHeight)

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Axes

	      if (showXAxis) {
	        xAxis
	          .scale(x)
	          //Suggest how many ticks based on the chart width and D3 should listen (70 is the optimal number for MM/DD/YY dates)
	          .ticks( Math.min(data[0].values.length,availableWidth/70) )
	          .tickSize(-availableHeight, 0);

	        g.select('.nv-x.nv-axis')
	            .attr('transform', 'translate(0,' + y.range()[0] + ')');
	        d3.transition(g.select('.nv-x.nv-axis'))
	            .call(xAxis);
	      }


	      if (showYAxis) {
	        yAxis
	          .scale(y)
	          .ticks( availableHeight / 36 )
	          .tickSize( -availableWidth, 0);

	        d3.transition(g.select('.nv-y.nv-axis'))
	            .call(yAxis);
	      }
	      //------------------------------------------------------------


	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------


	      function updateZero() {
	        indexLine
	          .data([index]);

	        //When dragging the index line, turn off line transitions.
	        // Then turn them back on when done dragging.
	        var oldDuration = chart.transitionDuration();
	        chart.transitionDuration(0);
	        chart.update();
	        chart.transitionDuration(oldDuration);
	      }

	      g.select('.nv-background rect')
	          .on('click', function() {
	            index.x = d3.mouse(this)[0];
	            index.i = Math.round(dx.invert(index.x));

	            // update state and send stateChange with new index
	            state.index = index.i;
	            dispatch.stateChange(state);

	            updateZero();
	          });

	      lines.dispatch.on('elementClick', function(e) {
	        index.i = e.pointIndex;
	        index.x = dx(index.i);

	        // update state and send stateChange with new index
	        state.index = index.i;
	        dispatch.stateChange(state);

	        updateZero();
	      });

	      controls.dispatch.on('legendClick', function(d,i) {
	        d.disabled = !d.disabled;
	        rescaleY = !d.disabled;

	        state.rescaleY = rescaleY;
	        dispatch.stateChange(state);
	        chart.update();
	      });


	      legend.dispatch.on('stateChange', function(newState) {
	        state.disabled = newState.disabled;
	        dispatch.stateChange(state);
	        chart.update();
	      });

	      interactiveLayer.dispatch.on('elementMousemove', function(e) {
	          lines.clearHighlights();
	          var singlePoint, pointIndex, pointXLocation, allData = [];


	          data
	          .filter(function(series, i) {
	            series.seriesIndex = i;
	            return !series.disabled;
	          })
	          .forEach(function(series,i) {
	              pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
	              lines.highlightPoint(i, pointIndex, true);
	              var point = series.values[pointIndex];
	              if (typeof point === 'undefined') return;
	              if (typeof singlePoint === 'undefined') singlePoint = point;
	              if (typeof pointXLocation === 'undefined') pointXLocation = chart.xScale()(chart.x()(point,pointIndex));
	              allData.push({
	                  key: series.key,
	                  value: chart.y()(point, pointIndex),
	                  color: color(series,series.seriesIndex)
	              });
	          });

	          //Highlight the tooltip entry based on which point the mouse is closest to.
	          if (allData.length > 2) {
	            var yValue = chart.yScale().invert(e.mouseY);
	            var domainExtent = Math.abs(chart.yScale().domain()[0] - chart.yScale().domain()[1]);
	            var threshold = 0.03 * domainExtent;
	            var indexToHighlight = nv.nearestValueIndex(allData.map(function(d){return d.value}),yValue,threshold);
	            if (indexToHighlight !== null)
	              allData[indexToHighlight].highlight = true;
	          }

	          var xValue = xAxis.tickFormat()(chart.x()(singlePoint,pointIndex), pointIndex);
	          interactiveLayer.tooltip
	                  .position({left: pointXLocation + margin.left, top: e.mouseY + margin.top})
	                  .chartContainer(that.parentNode)
	                  .enabled(tooltips)
	                  .valueFormatter(function(d,i) {
	                     return yAxis.tickFormat()(d);
	                  })
	                  .data(
	                      {
	                        value: xValue,
	                        series: allData
	                      }
	                  )();

	          interactiveLayer.renderGuideLine(pointXLocation);

	      });

	      interactiveLayer.dispatch.on("elementMouseout",function(e) {
	          dispatch.tooltipHide();
	          lines.clearHighlights();
	      });

	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });


	      // Update chart from a state object passed to event handler
	      dispatch.on('changeState', function(e) {

	        if (typeof e.disabled !== 'undefined') {
	          data.forEach(function(series,i) {
	            series.disabled = e.disabled[i];
	          });

	          state.disabled = e.disabled;
	        }


	        if (typeof e.index !== 'undefined') {
	          index.i = e.index;
	          index.x = dx(index.i);

	          state.index = e.index;

	          indexLine
	            .data([index]);
	        }


	        if (typeof e.rescaleY !== 'undefined') {
	          rescaleY = e.rescaleY;
	        }

	        chart.update();
	      });

	      //============================================================

	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  lines.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  lines.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.lines = lines;
	  chart.legend = legend;
	  chart.xAxis = xAxis;
	  chart.yAxis = yAxis;
	  chart.interactiveLayer = interactiveLayer;

	  d3.rebind(chart, lines, 'defined', 'isArea', 'x', 'y', 'xScale','yScale', 'size', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi','useVoronoi',  'id');

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    legend.color(color);
	    return chart;
	  };

	  chart.rescaleY = function(_) {
	    if (!arguments.length) return rescaleY;
	    rescaleY = _;
	    return chart;
	  };

	  chart.showControls = function(_) {
	    if (!arguments.length) return showControls;
	    showControls = _;
	    return chart;
	  };

	  chart.useInteractiveGuideline = function(_) {
	    if(!arguments.length) return useInteractiveGuideline;
	    useInteractiveGuideline = _;
	    if (_ === true) {
	       chart.interactive(false);
	       chart.useVoronoi(false);
	    }
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.showXAxis = function(_) {
	    if (!arguments.length) return showXAxis;
	    showXAxis = _;
	    return chart;
	  };

	  chart.showYAxis = function(_) {
	    if (!arguments.length) return showYAxis;
	    showYAxis = _;
	    return chart;
	  };

	  chart.rightAlignYAxis = function(_) {
	    if(!arguments.length) return rightAlignYAxis;
	    rightAlignYAxis = _;
	    yAxis.orient( (_) ? 'right' : 'left');
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.state = function(_) {
	    if (!arguments.length) return state;
	    state = _;
	    return chart;
	  };

	  chart.defaultState = function(_) {
	    if (!arguments.length) return defaultState;
	    defaultState = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  chart.average = function(_) {
	     if(!arguments.length) return average;
	     average = _;
	     return chart;
	  };

	  chart.transitionDuration = function(_) {
	    if (!arguments.length) return transitionDuration;
	    transitionDuration = _;
	    return chart;
	  };

	  chart.noErrorCheck = function(_) {
	    if (!arguments.length) return noErrorCheck;
	    noErrorCheck = _;
	    return chart;
	  };

	  //============================================================


	  //============================================================
	  // Functions
	  //------------------------------------------------------------

	  /* Normalize the data according to an index point. */
	  function indexify(idx, data) {
	    return data.map(function(line, i) {
	      if (!line.values) {
	         return line;
	      }
	      var v = lines.y()(line.values[idx], idx);

	      //TODO: implement check below, and disable series if series loses 100% or more cause divide by 0 issue
	      if (v < -.95 && !noErrorCheck) {
	        //if a series loses more than 100%, calculations fail.. anything close can cause major distortion (but is mathematically correct till it hits 100)

	        line.tempDisabled = true;
	        return line;
	      }

	      line.tempDisabled = false;

	      line.values = line.values.map(function(point, pointIndex) {
	        point.display = {'y': (lines.y()(point, pointIndex) - v) / (1 + v) };
	        return point;
	      })

	      return line;
	    })
	  }

	  //============================================================


	  return chart;
	}
	//TODO: consider deprecating by adding necessary features to multiBar model
	nv.models.discreteBar = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 0, right: 0, bottom: 0, left: 0}
	    , width = 960
	    , height = 500
	    , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
	    , x = d3.scale.ordinal()
	    , y = d3.scale.linear()
	    , getX = function(d) { return d.x }
	    , getY = function(d) { return d.y }
	    , forceY = [0] // 0 is forced by default.. this makes sense for the majority of bar graphs... user can always do chart.forceY([]) to remove
	    , color = nv.utils.defaultColor()
	    , showValues = false
	    , valueFormat = d3.format(',.2f')
	    , xDomain
	    , yDomain
	    , xRange
	    , yRange
	    , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout')
	    , rectClass = 'discreteBar'
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var x0, y0;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableWidth = width - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          container = d3.select(this);


	      //add series index to each data point for reference
	      data.forEach(function(series, i) {
	        series.values.forEach(function(point) {
	          point.series = i;
	        });
	      });


	      //------------------------------------------------------------
	      // Setup Scales

	      // remap and flatten the data for use in calculating the scales' domains
	      var seriesData = (xDomain && yDomain) ? [] : // if we know xDomain and yDomain, no need to calculate
	            data.map(function(d) {
	              return d.values.map(function(d,i) {
	                return { x: getX(d,i), y: getY(d,i), y0: d.y0 }
	              })
	            });

	      x   .domain(xDomain || d3.merge(seriesData).map(function(d) { return d.x }))
	          .rangeBands(xRange || [0, availableWidth], .1);

	      y   .domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) { return d.y }).concat(forceY)));


	      // If showValues, pad the Y axis range to account for label height
	      if (showValues) y.range(yRange || [availableHeight - (y.domain()[0] < 0 ? 12 : 0), y.domain()[1] > 0 ? 12 : 0]);
	      else y.range(yRange || [availableHeight, 0]);

	      //store old scales if they exist
	      x0 = x0 || x;
	      y0 = y0 || y.copy().range([y(0),y(0)]);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-discretebar').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discretebar');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-groups');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------



	      //TODO: by definition, the discrete bar should not have multiple groups, will modify/remove later
	      var groups = wrap.select('.nv-groups').selectAll('.nv-group')
	          .data(function(d) { return d }, function(d) { return d.key });
	      groups.enter().append('g')
	          .style('stroke-opacity', 1e-6)
	          .style('fill-opacity', 1e-6);
	      groups.exit()
	          .transition()
	          .style('stroke-opacity', 1e-6)
	          .style('fill-opacity', 1e-6)
	          .remove();
	      groups
	          .attr('class', function(d,i) { return 'nv-group nv-series-' + i })
	          .classed('hover', function(d) { return d.hover });
	      groups
	          .transition()
	          .style('stroke-opacity', 1)
	          .style('fill-opacity', .75);


	      var bars = groups.selectAll('g.nv-bar')
	          .data(function(d) { return d.values });

	      bars.exit().remove();


	      var barsEnter = bars.enter().append('g')
	          .attr('transform', function(d,i,j) {
	              return 'translate(' + (x(getX(d,i)) + x.rangeBand() * .05 ) + ', ' + y(0) + ')'
	          })
	          .on('mouseover', function(d,i) { //TODO: figure out why j works above, but not here
	            d3.select(this).classed('hover', true);
	            dispatch.elementMouseover({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pos: [x(getX(d,i)) + (x.rangeBand() * (d.series + .5) / data.length), y(getY(d,i))],  // TODO: Figure out why the value appears to be shifted
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	          })
	          .on('mouseout', function(d,i) {
	            d3.select(this).classed('hover', false);
	            dispatch.elementMouseout({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	          })
	          .on('click', function(d,i) {
	            dispatch.elementClick({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pos: [x(getX(d,i)) + (x.rangeBand() * (d.series + .5) / data.length), y(getY(d,i))],  // TODO: Figure out why the value appears to be shifted
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	            d3.event.stopPropagation();
	          })
	          .on('dblclick', function(d,i) {
	            dispatch.elementDblClick({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pos: [x(getX(d,i)) + (x.rangeBand() * (d.series + .5) / data.length), y(getY(d,i))],  // TODO: Figure out why the value appears to be shifted
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	            d3.event.stopPropagation();
	          });

	      barsEnter.append('rect')
	          .attr('height', 0)
	          .attr('width', x.rangeBand() * .9 / data.length )

	      if (showValues) {
	        barsEnter.append('text')
	          .attr('text-anchor', 'middle')
	          ;

	        bars.select('text')
	          .text(function(d,i) { return valueFormat(getY(d,i)) })
	          .transition()
	          .attr('x', x.rangeBand() * .9 / 2)
	          .attr('y', function(d,i) { return getY(d,i) < 0 ? y(getY(d,i)) - y(0) + 12 : -4 })

	          ;
	      } else {
	        bars.selectAll('text').remove();
	      }

	      bars
	          .attr('class', function(d,i) { return getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive' })
	          .style('fill', function(d,i) { return d.color || color(d,i) })
	          .style('stroke', function(d,i) { return d.color || color(d,i) })
	        .select('rect')
	          .attr('class', rectClass)
	          .transition()
	          .attr('width', x.rangeBand() * .9 / data.length);
	      bars.transition()
	        //.delay(function(d,i) { return i * 1200 / data[0].values.length })
	          .attr('transform', function(d,i) {
	            var left = x(getX(d,i)) + x.rangeBand() * .05,
	                top = getY(d,i) < 0 ?
	                        y(0) :
	                        y(0) - y(getY(d,i)) < 1 ?
	                          y(0) - 1 : //make 1 px positive bars show up above y=0
	                          y(getY(d,i));

	              return 'translate(' + left + ', ' + top + ')'
	          })
	        .select('rect')
	          .attr('height', function(d,i) {
	            return  Math.max(Math.abs(y(getY(d,i)) - y((yDomain && yDomain[0]) || 0)) || 1)
	          });


	      //store old scales for use in transitions on update
	      x0 = x.copy();
	      y0 = y.copy();

	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = _;
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = _;
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.xScale = function(_) {
	    if (!arguments.length) return x;
	    x = _;
	    return chart;
	  };

	  chart.yScale = function(_) {
	    if (!arguments.length) return y;
	    y = _;
	    return chart;
	  };

	  chart.xDomain = function(_) {
	    if (!arguments.length) return xDomain;
	    xDomain = _;
	    return chart;
	  };

	  chart.yDomain = function(_) {
	    if (!arguments.length) return yDomain;
	    yDomain = _;
	    return chart;
	  };

	  chart.xRange = function(_) {
	    if (!arguments.length) return xRange;
	    xRange = _;
	    return chart;
	  };

	  chart.yRange = function(_) {
	    if (!arguments.length) return yRange;
	    yRange = _;
	    return chart;
	  };

	  chart.forceY = function(_) {
	    if (!arguments.length) return forceY;
	    forceY = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };

	  chart.id = function(_) {
	    if (!arguments.length) return id;
	    id = _;
	    return chart;
	  };

	  chart.showValues = function(_) {
	    if (!arguments.length) return showValues;
	    showValues = _;
	    return chart;
	  };

	  chart.valueFormat= function(_) {
	    if (!arguments.length) return valueFormat;
	    valueFormat = _;
	    return chart;
	  };

	  chart.rectClass= function(_) {
	    if (!arguments.length) return rectClass;
	    rectClass = _;
	    return chart;
	  };
	  //============================================================


	  return chart;
	}

	nv.models.discreteBarChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var discretebar = nv.models.discreteBar()
	    , xAxis = nv.models.axis()
	    , yAxis = nv.models.axis()
	    ;

	  var margin = {top: 15, right: 10, bottom: 50, left: 60}
	    , width = null
	    , height = null
	    , color = nv.utils.getColor()
	    , showXAxis = true
	    , showYAxis = true
	    , rightAlignYAxis = false
	    , staggerLabels = false
	    , tooltips = true
	    , tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + x + '</h3>' +
	               '<p>' +  y + '</p>'
	      }
	    , x
	    , y
	    , noData = "No Data Available."
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'beforeUpdate')
	    , transitionDuration = 250
	    ;

	  xAxis
	    .orient('bottom')
	    .highlightZero(false)
	    .showMaxMin(false)
	    .tickFormat(function(d) { return d })
	    ;
	  yAxis
	    .orient((rightAlignYAxis) ? 'right' : 'left')
	    .tickFormat(d3.format(',.1f'))
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var showTooltip = function(e, offsetElement) {
	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        x = xAxis.tickFormat()(discretebar.x()(e.point, e.pointIndex)),
	        y = yAxis.tickFormat()(discretebar.y()(e.point, e.pointIndex)),
	        content = tooltip(e.series.key, x, y, e, chart);

	    nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
	  };

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;


	      chart.update = function() { 
	        dispatch.beforeUpdate(); 
	        container.transition().duration(transitionDuration).call(chart); 
	      };
	      chart.container = this;


	      //------------------------------------------------------------
	      // Display No Data message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      x = discretebar.xScale();
	      y = discretebar.yScale().clamp(true);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-discreteBarWithAxes').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-discreteBarWithAxes').append('g');
	      var defsEnter = gEnter.append('defs');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-x nv-axis');
	      gEnter.append('g').attr('class', 'nv-y nv-axis')
	            .append('g').attr('class', 'nv-zeroLine')
	            .append('line');
	        
	      gEnter.append('g').attr('class', 'nv-barsWrap');

	      g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      if (rightAlignYAxis) {
	          g.select(".nv-y.nv-axis")
	              .attr("transform", "translate(" + availableWidth + ",0)");
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Main Chart Component(s)

	      discretebar
	        .width(availableWidth)
	        .height(availableHeight);


	      var barsWrap = g.select('.nv-barsWrap')
	          .datum(data.filter(function(d) { return !d.disabled }))

	      barsWrap.transition().call(discretebar);

	      //------------------------------------------------------------



	      defsEnter.append('clipPath')
	          .attr('id', 'nv-x-label-clip-' + discretebar.id())
	        .append('rect');

	      g.select('#nv-x-label-clip-' + discretebar.id() + ' rect')
	          .attr('width', x.rangeBand() * (staggerLabels ? 2 : 1))
	          .attr('height', 16)
	          .attr('x', -x.rangeBand() / (staggerLabels ? 1 : 2 ));


	      //------------------------------------------------------------
	      // Setup Axes

	      if (showXAxis) {
	          xAxis
	            .scale(x)
	            .ticks( availableWidth / 100 )
	            .tickSize(-availableHeight, 0);

	          g.select('.nv-x.nv-axis')
	              .attr('transform', 'translate(0,' + (y.range()[0] + ((discretebar.showValues() && y.domain()[0] < 0) ? 16 : 0)) + ')');
	          //d3.transition(g.select('.nv-x.nv-axis'))
	          g.select('.nv-x.nv-axis').transition()
	              .call(xAxis);


	          var xTicks = g.select('.nv-x.nv-axis').selectAll('g');

	          if (staggerLabels) {
	            xTicks
	                .selectAll('text')
	                .attr('transform', function(d,i,j) { return 'translate(0,' + (j % 2 == 0 ? '5' : '17') + ')' })
	          }
	      }

	      if (showYAxis) {
	          yAxis
	            .scale(y)
	            .ticks( availableHeight / 36 )
	            .tickSize( -availableWidth, 0);

	          g.select('.nv-y.nv-axis').transition()
	              .call(yAxis);
	      }

	      // Zero line
	      g.select(".nv-zeroLine line")
	        .attr("x1",0)
	        .attr("x2",availableWidth)
	        .attr("y1", y(0))
	        .attr("y2", y(0))
	        ;

	      //------------------------------------------------------------


	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });

	      //============================================================


	    });

	    return chart;
	  }

	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  discretebar.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  discretebar.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.discretebar = discretebar;
	  chart.xAxis = xAxis;
	  chart.yAxis = yAxis;

	  d3.rebind(chart, discretebar, 'x', 'y', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'id', 'showValues', 'valueFormat');

	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    discretebar.color(color);
	    return chart;
	  };

	  chart.showXAxis = function(_) {
	    if (!arguments.length) return showXAxis;
	    showXAxis = _;
	    return chart;
	  };

	  chart.showYAxis = function(_) {
	    if (!arguments.length) return showYAxis;
	    showYAxis = _;
	    return chart;
	  };

	  chart.rightAlignYAxis = function(_) {
	    if(!arguments.length) return rightAlignYAxis;
	    rightAlignYAxis = _;
	    yAxis.orient( (_) ? 'right' : 'left');
	    return chart;
	  };

	  chart.staggerLabels = function(_) {
	    if (!arguments.length) return staggerLabels;
	    staggerLabels = _;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  chart.transitionDuration = function(_) {
	    if (!arguments.length) return transitionDuration;
	    transitionDuration = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.distribution = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 0, right: 0, bottom: 0, left: 0}
	    , width = 400 //technically width or height depending on x or y....
	    , size = 8
	    , axis = 'x' // 'x' or 'y'... horizontal or vertical
	    , getData = function(d) { return d[axis] }  // defaults d.x or d.y
	    , color = nv.utils.defaultColor()
	    , scale = d3.scale.linear()
	    , domain
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var scale0;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableLength = width - (axis === 'x' ? margin.left + margin.right : margin.top + margin.bottom),
	          naxis = axis == 'x' ? 'y' : 'x',
	          container = d3.select(this);


	      //------------------------------------------------------------
	      // Setup Scales

	      scale0 = scale0 || scale;

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-distribution').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-distribution');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

	      //------------------------------------------------------------


	      var distWrap = g.selectAll('g.nv-dist')
	          .data(function(d) { return d }, function(d) { return d.key });

	      distWrap.enter().append('g');
	      distWrap
	          .attr('class', function(d,i) { return 'nv-dist nv-series-' + i })
	          .style('stroke', function(d,i) { return color(d, i) });

	      var dist = distWrap.selectAll('line.nv-dist' + axis)
	          .data(function(d) { return d.values })
	      dist.enter().append('line')
	          .attr(axis + '1', function(d,i) { return scale0(getData(d,i)) })
	          .attr(axis + '2', function(d,i) { return scale0(getData(d,i)) })
	      distWrap.exit().selectAll('line.nv-dist' + axis)
	          .transition()
	          .attr(axis + '1', function(d,i) { return scale(getData(d,i)) })
	          .attr(axis + '2', function(d,i) { return scale(getData(d,i)) })
	          .style('stroke-opacity', 0)
	          .remove();
	      dist
	          .attr('class', function(d,i) { return 'nv-dist' + axis + ' nv-dist' + axis + '-' + i })
	          .attr(naxis + '1', 0)
	          .attr(naxis + '2', size);
	      dist
	          .transition()
	          .attr(axis + '1', function(d,i) { return scale(getData(d,i)) })
	          .attr(axis + '2', function(d,i) { return scale(getData(d,i)) })


	      scale0 = scale.copy();

	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------
	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.axis = function(_) {
	    if (!arguments.length) return axis;
	    axis = _;
	    return chart;
	  };

	  chart.size = function(_) {
	    if (!arguments.length) return size;
	    size = _;
	    return chart;
	  };

	  chart.getData = function(_) {
	    if (!arguments.length) return getData;
	    getData = d3.functor(_);
	    return chart;
	  };

	  chart.scale = function(_) {
	    if (!arguments.length) return scale;
	    scale = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };
	  //============================================================


	  return chart;
	}

	nv.models.historicalBarChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var bars = nv.models.historicalBar()
	    , xAxis = nv.models.axis()
	    , yAxis = nv.models.axis()
	    , legend = nv.models.legend()
	    ;


	  var margin = {top: 30, right: 90, bottom: 50, left: 90}
	    , color = nv.utils.defaultColor()
	    , width = null
	    , height = null
	    , showLegend = false
	    , showXAxis = true
	    , showYAxis = true
	    , rightAlignYAxis = false
	    , tooltips = true
	    , tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + key + '</h3>' +
	               '<p>' +  y + ' at ' + x + '</p>'
	      }
	    , x
	    , y
	    , state = {}
	    , defaultState = null
	    , noData = 'No Data Available.'
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
	    , transitionDuration = 250
	    ;

	  xAxis
	    .orient('bottom')
	    .tickPadding(7)
	    ;
	  yAxis
	    .orient( (rightAlignYAxis) ? 'right' : 'left')
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var showTooltip = function(e, offsetElement) {

	    // New addition to calculate position if SVG is scaled with viewBox, may move TODO: consider implementing everywhere else
	    if (offsetElement) {
	      var svg = d3.select(offsetElement).select('svg');
	      var viewBox = (svg.node()) ? svg.attr('viewBox') : null;
	      if (viewBox) {
	        viewBox = viewBox.split(' ');
	        var ratio = parseInt(svg.style('width')) / viewBox[2];
	        e.pos[0] = e.pos[0] * ratio;
	        e.pos[1] = e.pos[1] * ratio;
	      }
	    }

	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        x = xAxis.tickFormat()(bars.x()(e.point, e.pointIndex)),
	        y = yAxis.tickFormat()(bars.y()(e.point, e.pointIndex)),
	        content = tooltip(e.series.key, x, y, e, chart);

	    nv.tooltip.show([left, top], content, null, null, offsetElement);
	  };

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;


	      chart.update = function() { container.transition().duration(transitionDuration).call(chart) };
	      chart.container = this;

	      //set state.disabled
	      state.disabled = data.map(function(d) { return !!d.disabled });

	      if (!defaultState) {
	        var key;
	        defaultState = {};
	        for (key in state) {
	          if (state[key] instanceof Array)
	            defaultState[key] = state[key].slice(0);
	          else
	            defaultState[key] = state[key];
	        }
	      }

	      //------------------------------------------------------------
	      // Display noData message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      x = bars.xScale();
	      y = bars.yScale();

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-historicalBarChart').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-historicalBarChart').append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-x nv-axis');
	      gEnter.append('g').attr('class', 'nv-y nv-axis');
	      gEnter.append('g').attr('class', 'nv-barsWrap');
	      gEnter.append('g').attr('class', 'nv-legendWrap');

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        legend.width(availableWidth);

	        g.select('.nv-legendWrap')
	            .datum(data)
	            .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }

	        wrap.select('.nv-legendWrap')
	            .attr('transform', 'translate(0,' + (-margin.top) +')')
	      }

	      //------------------------------------------------------------

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      if (rightAlignYAxis) {
	        g.select(".nv-y.nv-axis")
	            .attr("transform", "translate(" + availableWidth + ",0)");
	      }


	      //------------------------------------------------------------
	      // Main Chart Component(s)

	      bars
	        .width(availableWidth)
	        .height(availableHeight)
	        .color(data.map(function(d,i) {
	          return d.color || color(d, i);
	        }).filter(function(d,i) { return !data[i].disabled }));


	      var barsWrap = g.select('.nv-barsWrap')
	          .datum(data.filter(function(d) { return !d.disabled }))

	      barsWrap.transition().call(bars);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Axes

	      if (showXAxis) {
	        xAxis
	          .scale(x)
	          .tickSize(-availableHeight, 0);

	        g.select('.nv-x.nv-axis')
	            .attr('transform', 'translate(0,' + y.range()[0] + ')');
	        g.select('.nv-x.nv-axis')
	            .transition()
	            .call(xAxis);
	      }

	      if (showYAxis) {
	        yAxis
	          .scale(y)
	          .ticks( availableHeight / 36 )
	          .tickSize( -availableWidth, 0);

	        g.select('.nv-y.nv-axis')
	          .transition()
	            .call(yAxis);
	      }
	      //------------------------------------------------------------


	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      legend.dispatch.on('legendClick', function(d,i) {
	        d.disabled = !d.disabled;

	        if (!data.filter(function(d) { return !d.disabled }).length) {
	          data.map(function(d) {
	            d.disabled = false;
	            wrap.selectAll('.nv-series').classed('disabled', false);
	            return d;
	          });
	        }

	        state.disabled = data.map(function(d) { return !!d.disabled });
	        dispatch.stateChange(state);

	        selection.transition().call(chart);
	      });

	      legend.dispatch.on('legendDblclick', function(d) {
	          //Double clicking should always enable current series, and disabled all others.
	          data.forEach(function(d) {
	             d.disabled = true;
	          });
	          d.disabled = false;

	          state.disabled = data.map(function(d) { return !!d.disabled });
	          dispatch.stateChange(state);
	          chart.update();
	      });

	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });


	      dispatch.on('changeState', function(e) {

	        if (typeof e.disabled !== 'undefined') {
	          data.forEach(function(series,i) {
	            series.disabled = e.disabled[i];
	          });

	          state.disabled = e.disabled;
	        }

	        chart.update();
	      });

	      //============================================================

	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  bars.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  bars.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.bars = bars;
	  chart.legend = legend;
	  chart.xAxis = xAxis;
	  chart.yAxis = yAxis;

	  d3.rebind(chart, bars, 'defined', 'isArea', 'x', 'y', 'size', 'xScale', 'yScale',
	    'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'id', 'interpolate','highlightPoint','clearHighlights', 'interactive');

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    legend.color(color);
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.showXAxis = function(_) {
	    if (!arguments.length) return showXAxis;
	    showXAxis = _;
	    return chart;
	  };

	  chart.showYAxis = function(_) {
	    if (!arguments.length) return showYAxis;
	    showYAxis = _;
	    return chart;
	  };

	  chart.rightAlignYAxis = function(_) {
	    if(!arguments.length) return rightAlignYAxis;
	    rightAlignYAxis = _;
	    yAxis.orient( (_) ? 'right' : 'left');
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.state = function(_) {
	    if (!arguments.length) return state;
	    state = _;
	    return chart;
	  };

	  chart.defaultState = function(_) {
	    if (!arguments.length) return defaultState;
	    defaultState = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  chart.transitionDuration = function(_) {
	    if (!arguments.length) return transitionDuration;
	    transitionDuration = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}
	nv.models.indentedTree = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 0, right: 0, bottom: 0, left: 0} //TODO: implement, maybe as margin on the containing div
	    , width = 960
	    , height = 500
	    , color = nv.utils.defaultColor()
	    , id = Math.floor(Math.random() * 10000)
	    , header = true
	    , filterZero = false
	    , noData = "No Data Available."
	    , childIndent = 20
	    , columns = [{key:'key', label: 'Name', type:'text'}] //TODO: consider functions like chart.addColumn, chart.removeColumn, instead of a block like this
	    , tableClass = null
	    , iconOpen = 'images/grey-plus.png' //TODO: consider removing this and replacing with a '+' or '-' unless user defines images
	    , iconClose = 'images/grey-minus.png'
	    , dispatch = d3.dispatch('elementClick', 'elementDblclick', 'elementMouseover', 'elementMouseout')
	    , getUrl = function(d) { return d.url }
	    ;

	  //============================================================

	  var idx = 0;

	  function chart(selection) {
	    selection.each(function(data) {
	      var depth = 1,
	          container = d3.select(this);

	      var tree = d3.layout.tree()
	          .children(function(d) { return d.values })
	          .size([height, childIndent]); //Not sure if this is needed now that the result is HTML

	      chart.update = function() { container.transition().duration(600).call(chart) };


	      //------------------------------------------------------------
	      // Display No Data message if there's nothing to show.
	      if (!data[0]) data[0] = {key: noData};

	      //------------------------------------------------------------


	      var nodes = tree.nodes(data[0]);

	      // nodes.map(function(d) {
	      //   d.id = i++;
	      // })

	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = d3.select(this).selectAll('div').data([[nodes]]);
	      var wrapEnter = wrap.enter().append('div').attr('class', 'nvd3 nv-wrap nv-indentedtree');
	      var tableEnter = wrapEnter.append('table');
	      var table = wrap.select('table').attr('width', '100%').attr('class', tableClass);

	      //------------------------------------------------------------


	      if (header) {
	        var thead = tableEnter.append('thead');

	        var theadRow1 = thead.append('tr');

	        columns.forEach(function(column) {
	          theadRow1
	            .append('th')
	              .attr('width', column.width ? column.width : '10%')
	              .style('text-align', column.type == 'numeric' ? 'right' : 'left')
	            .append('span')
	              .text(column.label);
	        });
	      }


	      var tbody = table.selectAll('tbody')
	                    .data(function(d) { return d });
	      tbody.enter().append('tbody');



	      //compute max generations
	      depth = d3.max(nodes, function(node) { return node.depth });
	      tree.size([height, depth * childIndent]); //TODO: see if this is necessary at all


	      // Update the nodes…
	      var node = tbody.selectAll('tr')
	          // .data(function(d) { return d; }, function(d) { return d.id || (d.id == ++i)});
	          .data(function(d) { return d.filter(function(d) { return (filterZero && !d.children) ? filterZero(d) :  true; } )}, function(d,i) { return d.id || (d.id || ++idx)});
	          //.style('display', 'table-row'); //TODO: see if this does anything

	      node.exit().remove();

	      node.select('img.nv-treeicon')
	          .attr('src', icon)
	          .classed('folded', folded);

	      var nodeEnter = node.enter().append('tr');


	      columns.forEach(function(column, index) {

	        var nodeName = nodeEnter.append('td')
	            .style('padding-left', function(d) { return (index ? 0 : d.depth * childIndent + 12 + (icon(d) ? 0 : 16)) + 'px' }, 'important') //TODO: check why I did the ternary here
	            .style('text-align', column.type == 'numeric' ? 'right' : 'left');


	        if (index == 0) {
	          nodeName.append('img')
	              .classed('nv-treeicon', true)
	              .classed('nv-folded', folded)
	              .attr('src', icon)
	              .style('width', '14px')
	              .style('height', '14px')
	              .style('padding', '0 1px')
	              .style('display', function(d) { return icon(d) ? 'inline-block' : 'none'; })
	              .on('click', click);
	        }


	        nodeName.each(function(d) {
	          if (!index && getUrl(d))
	            d3.select(this)
	              .append('a')
	              .attr('href',getUrl)
	              .attr('class', d3.functor(column.classes))
	              .append('span')
	          else
	            d3.select(this)
	              .append('span')

	            d3.select(this).select('span')
	              .attr('class', d3.functor(column.classes) )
	              .text(function(d) { return column.format ? column.format(d) :
	                                        (d[column.key] || '-') });
	          });

	        if  (column.showCount) {
	          nodeName.append('span')
	              .attr('class', 'nv-childrenCount');

	          node.selectAll('span.nv-childrenCount').text(function(d) {
	                return ((d.values && d.values.length) || (d._values && d._values.length)) ?                                   //If this is a parent
	                    '(' + ((d.values && (d.values.filter(function(d) { return filterZero ? filterZero(d) :  true; }).length)) //If children are in values check its children and filter
	                    || (d._values && d._values.filter(function(d) { return filterZero ? filterZero(d) :  true; }).length)     //Otherwise, do the same, but with the other name, _values...
	                    || 0) + ')'                                                                                               //This is the catch-all in case there are no children after a filter
	                    : ''                                                                                                     //If this is not a parent, just give an empty string
	            });
	        }

	        // if (column.click)
	        //   nodeName.select('span').on('click', column.click);

	      });

	      node
	        .order()
	        .on('click', function(d) { 
	          dispatch.elementClick({
	            row: this, //TODO: decide whether or not this should be consistent with scatter/line events or should be an html link (a href)
	            data: d,
	            pos: [d.x, d.y]
	          });
	        })
	        .on('dblclick', function(d) { 
	          dispatch.elementDblclick({
	            row: this,
	            data: d,
	            pos: [d.x, d.y]
	          });
	        })
	        .on('mouseover', function(d) { 
	          dispatch.elementMouseover({
	            row: this,
	            data: d,
	            pos: [d.x, d.y]
	          });
	        })
	        .on('mouseout', function(d) { 
	          dispatch.elementMouseout({
	            row: this,
	            data: d,
	            pos: [d.x, d.y]
	          });
	        });




	      // Toggle children on click.
	      function click(d, _, unshift) {
	        d3.event.stopPropagation();

	        if(d3.event.shiftKey && !unshift) {
	          //If you shift-click, it'll toggle fold all the children, instead of itself
	          d3.event.shiftKey = false;
	          d.values && d.values.forEach(function(node){
	            if (node.values || node._values) {
	              click(node, 0, true);
	            }
	          });
	          return true;
	        }
	        if(!hasChildren(d)) {
	          //download file
	          //window.location.href = d.url;
	          return true;
	        }
	        if (d.values) {
	          d._values = d.values;
	          d.values = null;
	        } else {
	          d.values = d._values;
	          d._values = null;
	        }
	        chart.update();
	      }


	      function icon(d) {
	        return (d._values && d._values.length) ? iconOpen : (d.values && d.values.length) ? iconClose : '';
	      }

	      function folded(d) {
	        return (d._values && d._values.length);
	      }

	      function hasChildren(d) {
	        var values = d.values || d._values;

	        return (values && values.length);
	      }


	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------
	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    scatter.color(color);
	    return chart;
	  };

	  chart.id = function(_) {
	    if (!arguments.length) return id;
	    id = _;
	    return chart;
	  };

	  chart.header = function(_) {
	    if (!arguments.length) return header;
	    header = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  chart.filterZero = function(_) {
	    if (!arguments.length) return filterZero;
	    filterZero = _;
	    return chart;
	  };

	  chart.columns = function(_) {
	    if (!arguments.length) return columns;
	    columns = _;
	    return chart;
	  };

	  chart.tableClass = function(_) {
	    if (!arguments.length) return tableClass;
	    tableClass = _;
	    return chart;
	  };

	  chart.iconOpen = function(_){
	     if (!arguments.length) return iconOpen;
	    iconOpen = _;
	    return chart;
	  }

	  chart.iconClose = function(_){
	     if (!arguments.length) return iconClose;
	    iconClose = _;
	    return chart;
	  }

	  chart.getUrl = function(_){
	     if (!arguments.length) return getUrl;
	    getUrl = _;
	    return chart;
	  }

	  //============================================================


	  return chart;
	};nv.models.legend = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 5, right: 0, bottom: 5, left: 0}
	    , width = 400
	    , height = 20
	    , getKey = function(d) { return d.key }
	    , color = nv.utils.defaultColor()
	    , align = true
	    , rightAlign = true
	    , updateState = true   //If true, legend will update data.disabled and trigger a 'stateChange' dispatch.
	    , radioButtonMode = false   //If true, clicking legend items will cause it to behave like a radio button. (only one can be selected at a time)
	    , dispatch = d3.dispatch('legendClick', 'legendDblclick', 'legendMouseover', 'legendMouseout', 'stateChange')
	    ;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableWidth = width - margin.left - margin.right,
	          container = d3.select(this);


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-legend').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-legend').append('g');
	      var g = wrap.select('g');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------


	      var series = g.selectAll('.nv-series')
	          .data(function(d) { return d });
	      var seriesEnter = series.enter().append('g').attr('class', 'nv-series')
	          .on('mouseover', function(d,i) {
	            dispatch.legendMouseover(d,i);  //TODO: Make consistent with other event objects
	          })
	          .on('mouseout', function(d,i) {
	            dispatch.legendMouseout(d,i);
	          })
	          .on('click', function(d,i) {
	            dispatch.legendClick(d,i);
	            if (updateState) {
	               if (radioButtonMode) {
	                   //Radio button mode: set every series to disabled,
	                   //  and enable the clicked series.
	                   data.forEach(function(series) { series.disabled = true});
	                   d.disabled = false;
	               }
	               else {
	                   d.disabled = !d.disabled;
	                   if (data.every(function(series) { return series.disabled})) {
	                       //the default behavior of NVD3 legends is, if every single series
	                       // is disabled, turn all series' back on.
	                       data.forEach(function(series) { series.disabled = false});
	                   }
	               }
	               dispatch.stateChange({
	                  disabled: data.map(function(d) { return !!d.disabled })
	               });
	            }
	          })
	          .on('dblclick', function(d,i) {
	            dispatch.legendDblclick(d,i);
	            if (updateState) {
	                //the default behavior of NVD3 legends, when double clicking one,
	                // is to set all other series' to false, and make the double clicked series enabled.
	                data.forEach(function(series) {
	                   series.disabled = true;
	                });
	                d.disabled = false;
	                dispatch.stateChange({
	                    disabled: data.map(function(d) { return !!d.disabled })
	                });
	            }
	          });
	      seriesEnter.append('circle')
	          .style('stroke-width', 2)
	          .attr('class','nv-legend-symbol')
	          .attr('r', 5);
	      seriesEnter.append('text')
	          .attr('text-anchor', 'start')
	          .attr('class','nv-legend-text')
	          .attr('dy', '.32em')
	          .attr('dx', '8');
	      series.classed('disabled', function(d) { return d.disabled });
	      series.exit().remove();
	      series.select('circle')
	          .style('fill', function(d,i) { return d.color || color(d,i)})
	          .style('stroke', function(d,i) { return d.color || color(d, i) });
	      series.select('text').text(getKey);


	      //TODO: implement fixed-width and max-width options (max-width is especially useful with the align option)

	      // NEW ALIGNING CODE, TODO: clean up
	      if (align) {

	        var seriesWidths = [];
	        series.each(function(d,i) {
	              var legendText = d3.select(this).select('text');
	              var nodeTextLength;
	              try {
	                nodeTextLength = legendText.getComputedTextLength();
	                // If the legendText is display:none'd (nodeTextLength == 0), simulate an error so we approximate, instead
	                if(nodeTextLength <= 0) throw Error();
	              }
	              catch(e) {
	                nodeTextLength = nv.utils.calcApproxTextWidth(legendText);
	              }

	              seriesWidths.push(nodeTextLength + 28); // 28 is ~ the width of the circle plus some padding
	            });

	        var seriesPerRow = 0;
	        var legendWidth = 0;
	        var columnWidths = [];

	        while ( legendWidth < availableWidth && seriesPerRow < seriesWidths.length) {
	          columnWidths[seriesPerRow] = seriesWidths[seriesPerRow];
	          legendWidth += seriesWidths[seriesPerRow++];
	        }
	        if (seriesPerRow === 0) seriesPerRow = 1; //minimum of one series per row


	        while ( legendWidth > availableWidth && seriesPerRow > 1 ) {
	          columnWidths = [];
	          seriesPerRow--;

	          for (var k = 0; k < seriesWidths.length; k++) {
	            if (seriesWidths[k] > (columnWidths[k % seriesPerRow] || 0) )
	              columnWidths[k % seriesPerRow] = seriesWidths[k];
	          }

	          legendWidth = columnWidths.reduce(function(prev, cur, index, array) {
	                          return prev + cur;
	                        });
	        }

	        var xPositions = [];
	        for (var i = 0, curX = 0; i < seriesPerRow; i++) {
	            xPositions[i] = curX;
	            curX += columnWidths[i];
	        }

	        series
	            .attr('transform', function(d, i) {
	              return 'translate(' + xPositions[i % seriesPerRow] + ',' + (5 + Math.floor(i / seriesPerRow) * 20) + ')';
	            });

	        //position legend as far right as possible within the total width
	        if (rightAlign) {
	           g.attr('transform', 'translate(' + (width - margin.right - legendWidth) + ',' + margin.top + ')');
	        }
	        else {
	           g.attr('transform', 'translate(0' + ',' + margin.top + ')');
	        }

	        height = margin.top + margin.bottom + (Math.ceil(seriesWidths.length / seriesPerRow) * 20);

	      } else {

	        var ypos = 5,
	            newxpos = 5,
	            maxwidth = 0,
	            xpos;
	        series
	            .attr('transform', function(d, i) {
	              var length = d3.select(this).select('text').node().getComputedTextLength() + 28;
	              xpos = newxpos;

	              if (width < margin.left + margin.right + xpos + length) {
	                newxpos = xpos = 5;
	                ypos += 20;
	              }

	              newxpos += length;
	              if (newxpos > maxwidth) maxwidth = newxpos;

	              return 'translate(' + xpos + ',' + ypos + ')';
	            });

	        //position legend as far right as possible within the total width
	        g.attr('transform', 'translate(' + (width - margin.right - maxwidth) + ',' + margin.top + ')');

	        height = margin.top + margin.bottom + ypos + 15;

	      }

	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;
	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.key = function(_) {
	    if (!arguments.length) return getKey;
	    getKey = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };

	  chart.align = function(_) {
	    if (!arguments.length) return align;
	    align = _;
	    return chart;
	  };

	  chart.rightAlign = function(_) {
	    if (!arguments.length) return rightAlign;
	    rightAlign = _;
	    return chart;
	  };

	  chart.updateState = function(_) {
	    if (!arguments.length) return updateState;
	    updateState = _;
	    return chart;
	  };

	  chart.radioButtonMode = function(_) {
	    if (!arguments.length) return radioButtonMode;
	    radioButtonMode = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.line = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var  scatter = nv.models.scatter()
	    ;

	  var margin = {top: 0, right: 0, bottom: 0, left: 0}
	    , width = 960
	    , height = 500
	    , color = nv.utils.defaultColor() // a function that returns a color
	    , getX = function(d) { return d.x } // accessor to get the x value from a data point
	    , getY = function(d) { return d.y } // accessor to get the y value from a data point
	    , defined = function(d,i) { return !isNaN(getY(d,i)) && getY(d,i) !== null } // allows a line to be not continuous when it is not defined
	    , isArea = function(d) { return d.area } // decides if a line is an area or just a line
	    , clipEdge = false // if true, masks lines within x and y scale
	    , x //can be accessed via chart.xScale()
	    , y //can be accessed via chart.yScale()
	    , interpolate = "linear" // controls the line interpolation
	    ;

	  scatter
	    .size(16) // default size
	    .sizeDomain([16,256]) //set to speed up calculation, needs to be unset if there is a custom size accessor
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var x0, y0 //used to store previous scales
	      ;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableWidth = width - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          container = d3.select(this);

	      //------------------------------------------------------------
	      // Setup Scales

	      x = scatter.xScale();
	      y = scatter.yScale();

	      x0 = x0 || x;
	      y0 = y0 || y;

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-line').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-line');
	      var defsEnter = wrapEnter.append('defs');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g')

	      gEnter.append('g').attr('class', 'nv-groups');
	      gEnter.append('g').attr('class', 'nv-scatterWrap');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------




	      scatter
	        .width(availableWidth)
	        .height(availableHeight)

	      var scatterWrap = wrap.select('.nv-scatterWrap');
	          //.datum(data); // Data automatically trickles down from the wrap

	      scatterWrap.transition().call(scatter);



	      defsEnter.append('clipPath')
	          .attr('id', 'nv-edge-clip-' + scatter.id())
	        .append('rect');

	      wrap.select('#nv-edge-clip-' + scatter.id() + ' rect')
	          .attr('width', availableWidth)
	          .attr('height', (availableHeight > 0) ? availableHeight : 0);

	      g   .attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + scatter.id() + ')' : '');
	      scatterWrap
	          .attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + scatter.id() + ')' : '');




	      var groups = wrap.select('.nv-groups').selectAll('.nv-group')
	          .data(function(d) { return d }, function(d) { return d.key });
	      groups.enter().append('g')
	          .style('stroke-opacity', 1e-6)
	          .style('fill-opacity', 1e-6);

	      groups.exit().remove();

	      groups
	          .attr('class', function(d,i) { return 'nv-group nv-series-' + i })
	          .classed('hover', function(d) { return d.hover })
	          .style('fill', function(d,i){ return color(d, i) })
	          .style('stroke', function(d,i){ return color(d, i)});
	      groups
	          .transition()
	          .style('stroke-opacity', 1)
	          .style('fill-opacity', .5);



	      var areaPaths = groups.selectAll('path.nv-area')
	          .data(function(d) { return isArea(d) ? [d] : [] }); // this is done differently than lines because I need to check if series is an area
	      areaPaths.enter().append('path')
	          .attr('class', 'nv-area')
	          .attr('d', function(d) {
	            return d3.svg.area()
	                .interpolate(interpolate)
	                .defined(defined)
	                .x(function(d,i) { return nv.utils.NaNtoZero(x0(getX(d,i))) })
	                .y0(function(d,i) { return nv.utils.NaNtoZero(y0(getY(d,i))) })
	                .y1(function(d,i) { return y0( y.domain()[0] <= 0 ? y.domain()[1] >= 0 ? 0 : y.domain()[1] : y.domain()[0] ) })
	                //.y1(function(d,i) { return y0(0) }) //assuming 0 is within y domain.. may need to tweak this
	                .apply(this, [d.values])
	          });
	      groups.exit().selectAll('path.nv-area')
	           .remove();

	      areaPaths
	          .transition()
	          .attr('d', function(d) {
	            return d3.svg.area()
	                .interpolate(interpolate)
	                .defined(defined)
	                .x(function(d,i) { return nv.utils.NaNtoZero(x(getX(d,i))) })
	                .y0(function(d,i) { return nv.utils.NaNtoZero(y(getY(d,i))) })
	                .y1(function(d,i) { return y( y.domain()[0] <= 0 ? y.domain()[1] >= 0 ? 0 : y.domain()[1] : y.domain()[0] ) })
	                //.y1(function(d,i) { return y0(0) }) //assuming 0 is within y domain.. may need to tweak this
	                .apply(this, [d.values])
	          });



	      var linePaths = groups.selectAll('path.nv-line')
	          .data(function(d) { return [d.values] });
	      linePaths.enter().append('path')
	          .attr('class', 'nv-line')
	          .attr('d',
	            d3.svg.line()
	              .interpolate(interpolate)
	              .defined(defined)
	              .x(function(d,i) { return nv.utils.NaNtoZero(x0(getX(d,i))) })
	              .y(function(d,i) { return nv.utils.NaNtoZero(y0(getY(d,i))) })
	          );

	      linePaths
	          .transition()
	          .attr('d',
	            d3.svg.line()
	              .interpolate(interpolate)
	              .defined(defined)
	              .x(function(d,i) { return nv.utils.NaNtoZero(x(getX(d,i))) })
	              .y(function(d,i) { return nv.utils.NaNtoZero(y(getY(d,i))) })
	          );



	      //store old scales for use in transitions on update
	      x0 = x.copy();
	      y0 = y.copy();

	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  chart.dispatch = scatter.dispatch;
	  chart.scatter = scatter;

	  d3.rebind(chart, scatter, 'id', 'interactive', 'size', 'xScale', 'yScale', 'zScale', 'xDomain', 'yDomain', 'xRange', 'yRange',
	    'sizeDomain', 'forceX', 'forceY', 'forceSize', 'clipVoronoi', 'useVoronoi', 'clipRadius', 'padData','highlightPoint','clearHighlights');

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = _;
	    scatter.x(_);
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = _;
	    scatter.y(_);
	    return chart;
	  };

	  chart.clipEdge = function(_) {
	    if (!arguments.length) return clipEdge;
	    clipEdge = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    scatter.color(color);
	    return chart;
	  };

	  chart.interpolate = function(_) {
	    if (!arguments.length) return interpolate;
	    interpolate = _;
	    return chart;
	  };

	  chart.defined = function(_) {
	    if (!arguments.length) return defined;
	    defined = _;
	    return chart;
	  };

	  chart.isArea = function(_) {
	    if (!arguments.length) return isArea;
	    isArea = d3.functor(_);
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.lineChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var lines = nv.models.line()
	    , xAxis = nv.models.axis()
	    , yAxis = nv.models.axis()
	    , legend = nv.models.legend()
	    , interactiveLayer = nv.interactiveGuideline()
	    ;

	  var margin = {top: 30, right: 20, bottom: 50, left: 60}
	    , color = nv.utils.defaultColor()
	    , width = null
	    , height = null
	    , showLegend = true
	    , showXAxis = true
	    , showYAxis = true
	    , rightAlignYAxis = false
	    , useInteractiveGuideline = false
	    , tooltips = true
	    , tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + key + '</h3>' +
	               '<p>' +  y + ' at ' + x + '</p>'
	      }
	    , x
	    , y
	    , state = {}
	    , defaultState = null
	    , noData = 'No Data Available.'
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
	    , transitionDuration = 250
	    ;

	  xAxis
	    .orient('bottom')
	    .tickPadding(7)
	    ;
	  yAxis
	    .orient((rightAlignYAxis) ? 'right' : 'left')
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var showTooltip = function(e, offsetElement) {
	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
	        y = yAxis.tickFormat()(lines.y()(e.point, e.pointIndex)),
	        content = tooltip(e.series.key, x, y, e, chart);

	    nv.tooltip.show([left, top], content, null, null, offsetElement);
	  };

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;


	      chart.update = function() { container.transition().duration(transitionDuration).call(chart) };
	      chart.container = this;

	      //set state.disabled
	      state.disabled = data.map(function(d) { return !!d.disabled });


	      if (!defaultState) {
	        var key;
	        defaultState = {};
	        for (key in state) {
	          if (state[key] instanceof Array)
	            defaultState[key] = state[key].slice(0);
	          else
	            defaultState[key] = state[key];
	        }
	      }

	      //------------------------------------------------------------
	      // Display noData message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      x = lines.xScale();
	      y = lines.yScale();

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-lineChart').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-lineChart').append('g');
	      var g = wrap.select('g');

	      gEnter.append("rect").style("opacity",0);
	      gEnter.append('g').attr('class', 'nv-x nv-axis');
	      gEnter.append('g').attr('class', 'nv-y nv-axis');
	      gEnter.append('g').attr('class', 'nv-linesWrap');
	      gEnter.append('g').attr('class', 'nv-legendWrap');
	      gEnter.append('g').attr('class', 'nv-interactive');

	      g.select("rect")
	        .attr("width",availableWidth)
	        .attr("height",(availableHeight > 0) ? availableHeight : 0);
	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        legend.width(availableWidth);

	        g.select('.nv-legendWrap')
	            .datum(data)
	            .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }

	        wrap.select('.nv-legendWrap')
	            .attr('transform', 'translate(0,' + (-margin.top) +')')
	      }

	      //------------------------------------------------------------

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      if (rightAlignYAxis) {
	          g.select(".nv-y.nv-axis")
	              .attr("transform", "translate(" + availableWidth + ",0)");
	      }

	      //------------------------------------------------------------
	      // Main Chart Component(s)


	      //------------------------------------------------------------
	      //Set up interactive layer
	      if (useInteractiveGuideline) {
	        interactiveLayer
	           .width(availableWidth)
	           .height(availableHeight)
	           .margin({left:margin.left, top:margin.top})
	           .svgContainer(container)
	           .xScale(x);
	        wrap.select(".nv-interactive").call(interactiveLayer);
	      }


	      lines
	        .width(availableWidth)
	        .height(availableHeight)
	        .color(data.map(function(d,i) {
	          return d.color || color(d, i);
	        }).filter(function(d,i) { return !data[i].disabled }));


	      var linesWrap = g.select('.nv-linesWrap')
	          .datum(data.filter(function(d) { return !d.disabled }))

	      linesWrap.transition().call(lines);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Axes

	      if (showXAxis) {
	        xAxis
	          .scale(x)
	          .ticks( availableWidth / 100 )
	          .tickSize(-availableHeight, 0);

	        g.select('.nv-x.nv-axis')
	            .attr('transform', 'translate(0,' + y.range()[0] + ')');
	        g.select('.nv-x.nv-axis')
	            .transition()
	            .call(xAxis);
	      }

	      if (showYAxis) {
	        yAxis
	          .scale(y)
	          .ticks( availableHeight / 36 )
	          .tickSize( -availableWidth, 0);

	        g.select('.nv-y.nv-axis')
	            .transition()
	            .call(yAxis);
	      }
	      //------------------------------------------------------------


	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      legend.dispatch.on('stateChange', function(newState) {
	          state = newState;
	          dispatch.stateChange(state);
	          chart.update();
	      });

	      interactiveLayer.dispatch.on('elementMousemove', function(e) {
	          lines.clearHighlights();
	          var singlePoint, pointIndex, pointXLocation, allData = [];
	          data
	          .filter(function(series, i) {
	            series.seriesIndex = i;
	            return !series.disabled;
	          })
	          .forEach(function(series,i) {
	              pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
	              lines.highlightPoint(i, pointIndex, true);
	              var point = series.values[pointIndex];
	              if (typeof point === 'undefined') return;
	              if (typeof singlePoint === 'undefined') singlePoint = point;
	              if (typeof pointXLocation === 'undefined') pointXLocation = chart.xScale()(chart.x()(point,pointIndex));
	              allData.push({
	                  key: series.key,
	                  value: chart.y()(point, pointIndex),
	                  color: color(series,series.seriesIndex)
	              });
	          });
	          //Highlight the tooltip entry based on which point the mouse is closest to.
	          if (allData.length > 2) {
	            var yValue = chart.yScale().invert(e.mouseY);
	            var domainExtent = Math.abs(chart.yScale().domain()[0] - chart.yScale().domain()[1]);
	            var threshold = 0.03 * domainExtent;
	            var indexToHighlight = nv.nearestValueIndex(allData.map(function(d){return d.value}),yValue,threshold);
	            if (indexToHighlight !== null)
	              allData[indexToHighlight].highlight = true;
	          }

	          var xValue = xAxis.tickFormat()(chart.x()(singlePoint,pointIndex));
	          interactiveLayer.tooltip
	                  .position({left: pointXLocation + margin.left, top: e.mouseY + margin.top})
	                  .chartContainer(that.parentNode)
	                  .enabled(tooltips)
	                  .valueFormatter(function(d,i) {
	                     return yAxis.tickFormat()(d);
	                  })
	                  .data(
	                      {
	                        value: xValue,
	                        series: allData
	                      }
	                  )();

	          interactiveLayer.renderGuideLine(pointXLocation);

	      });

	      interactiveLayer.dispatch.on("elementMouseout",function(e) {
	          dispatch.tooltipHide();
	          lines.clearHighlights();
	      });

	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });


	      dispatch.on('changeState', function(e) {

	        if (typeof e.disabled !== 'undefined' && data.length === e.disabled.length) {
	          data.forEach(function(series,i) {
	            series.disabled = e.disabled[i];
	          });

	          state.disabled = e.disabled;
	        }

	        chart.update();
	      });

	      //============================================================

	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  lines.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  lines.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.lines = lines;
	  chart.legend = legend;
	  chart.xAxis = xAxis;
	  chart.yAxis = yAxis;
	  chart.interactiveLayer = interactiveLayer;

	  d3.rebind(chart, lines, 'defined', 'isArea', 'x', 'y', 'size', 'xScale', 'yScale', 'xDomain', 'yDomain', 'xRange', 'yRange'
	    , 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'useVoronoi','id', 'interpolate');

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    legend.color(color);
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.showXAxis = function(_) {
	    if (!arguments.length) return showXAxis;
	    showXAxis = _;
	    return chart;
	  };

	  chart.showYAxis = function(_) {
	    if (!arguments.length) return showYAxis;
	    showYAxis = _;
	    return chart;
	  };

	  chart.rightAlignYAxis = function(_) {
	    if(!arguments.length) return rightAlignYAxis;
	    rightAlignYAxis = _;
	    yAxis.orient( (_) ? 'right' : 'left');
	    return chart;
	  };

	  chart.useInteractiveGuideline = function(_) {
	    if(!arguments.length) return useInteractiveGuideline;
	    useInteractiveGuideline = _;
	    if (_ === true) {
	       chart.interactive(false);
	       chart.useVoronoi(false);
	    }
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.state = function(_) {
	    if (!arguments.length) return state;
	    state = _;
	    return chart;
	  };

	  chart.defaultState = function(_) {
	    if (!arguments.length) return defaultState;
	    defaultState = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  chart.transitionDuration = function(_) {
	    if (!arguments.length) return transitionDuration;
	    transitionDuration = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.linePlusBarChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var lines = nv.models.line()
	    , bars = nv.models.historicalBar()
	    , xAxis = nv.models.axis()
	    , y1Axis = nv.models.axis()
	    , y2Axis = nv.models.axis()
	    , legend = nv.models.legend()
	    ;

	  var margin = {top: 30, right: 60, bottom: 50, left: 60}
	    , width = null
	    , height = null
	    , getX = function(d) { return d.x }
	    , getY = function(d) { return d.y }
	    , color = nv.utils.defaultColor()
	    , showLegend = true
	    , tooltips = true
	    , tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + key + '</h3>' +
	               '<p>' +  y + ' at ' + x + '</p>';
	      }
	    , x
	    , y1
	    , y2
	    , state = {}
	    , defaultState = null
	    , noData = "No Data Available."
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
	    ;

	  bars
	    .padData(true)
	    ;
	  lines
	    .clipEdge(false)
	    .padData(true)
	    ;
	  xAxis
	    .orient('bottom')
	    .tickPadding(7)
	    .highlightZero(false)
	    ;
	  y1Axis
	    .orient('left')
	    ;
	  y2Axis
	    .orient('right')
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var showTooltip = function(e, offsetElement) {
	      var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	          top = e.pos[1] + ( offsetElement.offsetTop || 0),
	          x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
	          y = (e.series.bar ? y1Axis : y2Axis).tickFormat()(lines.y()(e.point, e.pointIndex)),
	          content = tooltip(e.series.key, x, y, e, chart);

	      nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
	    }
	    ;

	  //------------------------------------------------------------



	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;

	      chart.update = function() { container.transition().call(chart); };
	      // chart.container = this;

	      //set state.disabled
	      state.disabled = data.map(function(d) { return !!d.disabled });

	      if (!defaultState) {
	        var key;
	        defaultState = {};
	        for (key in state) {
	          if (state[key] instanceof Array)
	            defaultState[key] = state[key].slice(0);
	          else
	            defaultState[key] = state[key];
	        }
	      }

	      //------------------------------------------------------------
	      // Display No Data message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      var dataBars = data.filter(function(d) { return !d.disabled && d.bar });
	      var dataLines = data.filter(function(d) { return !d.bar }); // removed the !d.disabled clause here to fix Issue #240

	      //x = xAxis.scale();
	       x = dataLines.filter(function(d) { return !d.disabled; }).length && dataLines.filter(function(d) { return !d.disabled; })[0].values.length ? lines.xScale() : bars.xScale();
	      //x = dataLines.filter(function(d) { return !d.disabled; }).length ? lines.xScale() : bars.xScale(); //old code before change above
	      y1 = bars.yScale();
	      y2 = lines.yScale();

	      //------------------------------------------------------------

	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = d3.select(this).selectAll('g.nv-wrap.nv-linePlusBar').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-linePlusBar').append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-x nv-axis');
	      gEnter.append('g').attr('class', 'nv-y1 nv-axis');
	      gEnter.append('g').attr('class', 'nv-y2 nv-axis');
	      gEnter.append('g').attr('class', 'nv-barsWrap');
	      gEnter.append('g').attr('class', 'nv-linesWrap');
	      gEnter.append('g').attr('class', 'nv-legendWrap');

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        legend.width( availableWidth / 2 );

	        g.select('.nv-legendWrap')
	            .datum(data.map(function(series) {
	              series.originalKey = series.originalKey === undefined ? series.key : series.originalKey;
	              series.key = series.originalKey + (series.bar ? ' (left axis)' : ' (right axis)');
	              return series;
	            }))
	          .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }

	        g.select('.nv-legendWrap')
	            .attr('transform', 'translate(' + ( availableWidth / 2 ) + ',' + (-margin.top) +')');
	      }

	      //------------------------------------------------------------


	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


	      //------------------------------------------------------------
	      // Main Chart Component(s)


	      lines
	        .width(availableWidth)
	        .height(availableHeight)
	        .color(data.map(function(d,i) {
	          return d.color || color(d, i);
	        }).filter(function(d,i) { return !data[i].disabled && !data[i].bar }))

	      bars
	        .width(availableWidth)
	        .height(availableHeight)
	        .color(data.map(function(d,i) {
	          return d.color || color(d, i);
	        }).filter(function(d,i) { return !data[i].disabled && data[i].bar }))



	      var barsWrap = g.select('.nv-barsWrap')
	          .datum(dataBars.length ? dataBars : [{values:[]}])

	      var linesWrap = g.select('.nv-linesWrap')
	          .datum(dataLines[0] && !dataLines[0].disabled ? dataLines : [{values:[]}] );
	          //.datum(!dataLines[0].disabled ? dataLines : [{values:dataLines[0].values.map(function(d) { return [d[0], null] }) }] );

	      d3.transition(barsWrap).call(bars);
	      d3.transition(linesWrap).call(lines);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Axes

	      xAxis
	        .scale(x)
	        .ticks( availableWidth / 100 )
	        .tickSize(-availableHeight, 0);

	      g.select('.nv-x.nv-axis')
	          .attr('transform', 'translate(0,' + y1.range()[0] + ')');
	      d3.transition(g.select('.nv-x.nv-axis'))
	          .call(xAxis);


	      y1Axis
	        .scale(y1)
	        .ticks( availableHeight / 36 )
	        .tickSize(-availableWidth, 0);

	      d3.transition(g.select('.nv-y1.nv-axis'))
	          .style('opacity', dataBars.length ? 1 : 0)
	          .call(y1Axis);


	      y2Axis
	        .scale(y2)
	        .ticks( availableHeight / 36 )
	        .tickSize(dataBars.length ? 0 : -availableWidth, 0); // Show the y2 rules only if y1 has none

	      g.select('.nv-y2.nv-axis')
	          .style('opacity', dataLines.length ? 1 : 0)
	          .attr('transform', 'translate(' + availableWidth + ',0)');
	          //.attr('transform', 'translate(' + x.range()[1] + ',0)');

	      d3.transition(g.select('.nv-y2.nv-axis'))
	          .call(y2Axis);

	      //------------------------------------------------------------


	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      legend.dispatch.on('stateChange', function(newState) { 
	        state = newState;
	        dispatch.stateChange(state);
	        chart.update();
	      });

	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });


	      // Update chart from a state object passed to event handler
	      dispatch.on('changeState', function(e) {

	        if (typeof e.disabled !== 'undefined') {
	          data.forEach(function(series,i) {
	            series.disabled = e.disabled[i];
	          });

	          state.disabled = e.disabled;
	        }

	        chart.update();
	      });

	      //============================================================


	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  lines.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  lines.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  bars.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  bars.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.legend = legend;
	  chart.lines = lines;
	  chart.bars = bars;
	  chart.xAxis = xAxis;
	  chart.y1Axis = y1Axis;
	  chart.y2Axis = y2Axis;

	  d3.rebind(chart, lines, 'defined', 'size', 'clipVoronoi', 'interpolate');
	  //TODO: consider rebinding x, y and some other stuff, and simply do soemthign lile bars.x(lines.x()), etc.
	  //d3.rebind(chart, lines, 'x', 'y', 'size', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'id');

	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = _;
	    lines.x(_);
	    bars.x(_);
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = _;
	    lines.y(_);
	    bars.y(_);
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    legend.color(color);
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.state = function(_) {
	    if (!arguments.length) return state;
	    state = _;
	    return chart;
	  };

	  chart.defaultState = function(_) {
	    if (!arguments.length) return defaultState;
	    defaultState = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}
	nv.models.lineWithFocusChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var lines = nv.models.line()
	    , lines2 = nv.models.line()
	    , xAxis = nv.models.axis()
	    , yAxis = nv.models.axis()
	    , x2Axis = nv.models.axis()
	    , y2Axis = nv.models.axis()
	    , legend = nv.models.legend()
	    , brush = d3.svg.brush()
	    ;

	  var margin = {top: 30, right: 30, bottom: 30, left: 60}
	    , margin2 = {top: 0, right: 30, bottom: 20, left: 60}
	    , color = nv.utils.defaultColor()
	    , width = null
	    , height = null
	    , height2 = 100
	    , x
	    , y
	    , x2
	    , y2
	    , showLegend = true
	    , brushExtent = null
	    , tooltips = true
	    , tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + key + '</h3>' +
	               '<p>' +  y + ' at ' + x + '</p>'
	      }
	    , noData = "No Data Available."
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'brush')
	    , transitionDuration = 250
	    ;

	  lines
	    .clipEdge(true)
	    ;
	  lines2
	    .interactive(false)
	    ;
	  xAxis
	    .orient('bottom')
	    .tickPadding(5)
	    ;
	  yAxis
	    .orient('left')
	    ;
	  x2Axis
	    .orient('bottom')
	    .tickPadding(5)
	    ;
	  y2Axis
	    .orient('left')
	    ;
	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var showTooltip = function(e, offsetElement) {
	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
	        y = yAxis.tickFormat()(lines.y()(e.point, e.pointIndex)),
	        content = tooltip(e.series.key, x, y, e, chart);

	    nv.tooltip.show([left, top], content, null, null, offsetElement);
	  };

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight1 = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom - height2,
	          availableHeight2 = height2 - margin2.top - margin2.bottom;

	      chart.update = function() { container.transition().duration(transitionDuration).call(chart) };
	      chart.container = this;


	      //------------------------------------------------------------
	      // Display No Data message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight1 / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      x = lines.xScale();
	      y = lines.yScale();
	      x2 = lines2.xScale();
	      y2 = lines2.yScale();

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-lineWithFocusChart').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-lineWithFocusChart').append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-legendWrap');

	      var focusEnter = gEnter.append('g').attr('class', 'nv-focus');
	      focusEnter.append('g').attr('class', 'nv-x nv-axis');
	      focusEnter.append('g').attr('class', 'nv-y nv-axis');
	      focusEnter.append('g').attr('class', 'nv-linesWrap');

	      var contextEnter = gEnter.append('g').attr('class', 'nv-context');
	      contextEnter.append('g').attr('class', 'nv-x nv-axis');
	      contextEnter.append('g').attr('class', 'nv-y nv-axis');
	      contextEnter.append('g').attr('class', 'nv-linesWrap');
	      contextEnter.append('g').attr('class', 'nv-brushBackground');
	      contextEnter.append('g').attr('class', 'nv-x nv-brush');

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        legend.width(availableWidth);

	        g.select('.nv-legendWrap')
	            .datum(data)
	            .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight1 = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom - height2;
	        }

	        g.select('.nv-legendWrap')
	            .attr('transform', 'translate(0,' + (-margin.top) +')')
	      }

	      //------------------------------------------------------------


	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


	      //------------------------------------------------------------
	      // Main Chart Component(s)

	      lines
	        .width(availableWidth)
	        .height(availableHeight1)
	        .color(
	          data
	            .map(function(d,i) {
	              return d.color || color(d, i);
	            })
	            .filter(function(d,i) {
	              return !data[i].disabled;
	          })
	        );

	      lines2
	        .defined(lines.defined())
	        .width(availableWidth)
	        .height(availableHeight2)
	        .color(
	          data
	            .map(function(d,i) {
	              return d.color || color(d, i);
	            })
	            .filter(function(d,i) {
	              return !data[i].disabled;
	          })
	        );

	      g.select('.nv-context')
	          .attr('transform', 'translate(0,' + ( availableHeight1 + margin.bottom + margin2.top) + ')')

	      var contextLinesWrap = g.select('.nv-context .nv-linesWrap')
	          .datum(data.filter(function(d) { return !d.disabled }))

	      d3.transition(contextLinesWrap).call(lines2);

	      //------------------------------------------------------------


	      /*
	      var focusLinesWrap = g.select('.nv-focus .nv-linesWrap')
	          .datum(data.filter(function(d) { return !d.disabled }))

	      d3.transition(focusLinesWrap).call(lines);
	     */


	      //------------------------------------------------------------
	      // Setup Main (Focus) Axes

	      xAxis
	        .scale(x)
	        .ticks( availableWidth / 100 )
	        .tickSize(-availableHeight1, 0);

	      yAxis
	        .scale(y)
	        .ticks( availableHeight1 / 36 )
	        .tickSize( -availableWidth, 0);

	      g.select('.nv-focus .nv-x.nv-axis')
	          .attr('transform', 'translate(0,' + availableHeight1 + ')');

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Brush

	      brush
	        .x(x2)
	        .on('brush', function() {
	            //When brushing, turn off transitions because chart needs to change immediately.
	            var oldTransition = chart.transitionDuration();
	            chart.transitionDuration(0); 
	            onBrush();
	            chart.transitionDuration(oldTransition);
	        });

	      if (brushExtent) brush.extent(brushExtent);

	      var brushBG = g.select('.nv-brushBackground').selectAll('g')
	          .data([brushExtent || brush.extent()])

	      var brushBGenter = brushBG.enter()
	          .append('g');

	      brushBGenter.append('rect')
	          .attr('class', 'left')
	          .attr('x', 0)
	          .attr('y', 0)
	          .attr('height', availableHeight2);

	      brushBGenter.append('rect')
	          .attr('class', 'right')
	          .attr('x', 0)
	          .attr('y', 0)
	          .attr('height', availableHeight2);

	      var gBrush = g.select('.nv-x.nv-brush')
	          .call(brush);
	      gBrush.selectAll('rect')
	          //.attr('y', -5)
	          .attr('height', availableHeight2);
	      gBrush.selectAll('.resize').append('path').attr('d', resizePath);

	      onBrush();

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Secondary (Context) Axes

	      x2Axis
	        .scale(x2)
	        .ticks( availableWidth / 100 )
	        .tickSize(-availableHeight2, 0);

	      g.select('.nv-context .nv-x.nv-axis')
	          .attr('transform', 'translate(0,' + y2.range()[0] + ')');
	      d3.transition(g.select('.nv-context .nv-x.nv-axis'))
	          .call(x2Axis);


	      y2Axis
	        .scale(y2)
	        .ticks( availableHeight2 / 36 )
	        .tickSize( -availableWidth, 0);

	      d3.transition(g.select('.nv-context .nv-y.nv-axis'))
	          .call(y2Axis);

	      g.select('.nv-context .nv-x.nv-axis')
	          .attr('transform', 'translate(0,' + y2.range()[0] + ')');

	      //------------------------------------------------------------


	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      legend.dispatch.on('stateChange', function(newState) { 
	        chart.update();
	      });

	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });

	      //============================================================


	      //============================================================
	      // Functions
	      //------------------------------------------------------------

	      // Taken from crossfilter (http://square.github.com/crossfilter/)
	      function resizePath(d) {
	        var e = +(d == 'e'),
	            x = e ? 1 : -1,
	            y = availableHeight2 / 3;
	        return 'M' + (.5 * x) + ',' + y
	            + 'A6,6 0 0 ' + e + ' ' + (6.5 * x) + ',' + (y + 6)
	            + 'V' + (2 * y - 6)
	            + 'A6,6 0 0 ' + e + ' ' + (.5 * x) + ',' + (2 * y)
	            + 'Z'
	            + 'M' + (2.5 * x) + ',' + (y + 8)
	            + 'V' + (2 * y - 8)
	            + 'M' + (4.5 * x) + ',' + (y + 8)
	            + 'V' + (2 * y - 8);
	      }


	      function updateBrushBG() {
	        if (!brush.empty()) brush.extent(brushExtent);
	        brushBG
	            .data([brush.empty() ? x2.domain() : brushExtent])
	            .each(function(d,i) {
	              var leftWidth = x2(d[0]) - x.range()[0],
	                  rightWidth = x.range()[1] - x2(d[1]);
	              d3.select(this).select('.left')
	                .attr('width',  leftWidth < 0 ? 0 : leftWidth);

	              d3.select(this).select('.right')
	                .attr('x', x2(d[1]))
	                .attr('width', rightWidth < 0 ? 0 : rightWidth);
	            });
	      }


	      function onBrush() {
	        brushExtent = brush.empty() ? null : brush.extent();
	        var extent = brush.empty() ? x2.domain() : brush.extent();

	        //The brush extent cannot be less than one.  If it is, don't update the line chart.
	        if (Math.abs(extent[0] - extent[1]) <= 1) {
	          return;
	        }

	        dispatch.brush({extent: extent, brush: brush});


	        updateBrushBG();

	        // Update Main (Focus)
	        var focusLinesWrap = g.select('.nv-focus .nv-linesWrap')
	            .datum(
	              data
	                .filter(function(d) { return !d.disabled })
	                .map(function(d,i) {
	                  return {
	                    key: d.key,
	                    values: d.values.filter(function(d,i) {
	                      return lines.x()(d,i) >= extent[0] && lines.x()(d,i) <= extent[1];
	                    })
	                  }
	                })
	            );
	        focusLinesWrap.transition().duration(transitionDuration).call(lines);


	        // Update Main (Focus) Axes
	        g.select('.nv-focus .nv-x.nv-axis').transition().duration(transitionDuration)
	            .call(xAxis);
	        g.select('.nv-focus .nv-y.nv-axis').transition().duration(transitionDuration)
	            .call(yAxis);
	      }

	      //============================================================


	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  lines.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  lines.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.legend = legend;
	  chart.lines = lines;
	  chart.lines2 = lines2;
	  chart.xAxis = xAxis;
	  chart.yAxis = yAxis;
	  chart.x2Axis = x2Axis;
	  chart.y2Axis = y2Axis;

	  d3.rebind(chart, lines, 'defined', 'isArea', 'size', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'id');

	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.x = function(_) {
	    if (!arguments.length) return lines.x;
	    lines.x(_);
	    lines2.x(_);
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return lines.y;
	    lines.y(_);
	    lines2.y(_);
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.margin2 = function(_) {
	    if (!arguments.length) return margin2;
	    margin2 = _;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.height2 = function(_) {
	    if (!arguments.length) return height2;
	    height2 = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color =nv.utils.getColor(_);
	    legend.color(color);
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.interpolate = function(_) {
	    if (!arguments.length) return lines.interpolate();
	    lines.interpolate(_);
	    lines2.interpolate(_);
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  // Chart has multiple similar Axes, to prevent code duplication, probably need to link all axis functions manually like below
	  chart.xTickFormat = function(_) {
	    if (!arguments.length) return xAxis.tickFormat();
	    xAxis.tickFormat(_);
	    x2Axis.tickFormat(_);
	    return chart;
	  };

	  chart.yTickFormat = function(_) {
	    if (!arguments.length) return yAxis.tickFormat();
	    yAxis.tickFormat(_);
	    y2Axis.tickFormat(_);
	    return chart;
	  };
	  
	  chart.brushExtent = function(_) {
	    if (!arguments.length) return brushExtent;
	    brushExtent = _;
	    return chart;
	  };

	  chart.transitionDuration = function(_) {
	    if (!arguments.length) return transitionDuration;
	    transitionDuration = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.linePlusBarWithFocusChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var lines = nv.models.line()
	    , lines2 = nv.models.line()
	    , bars = nv.models.historicalBar()
	    , bars2 = nv.models.historicalBar()
	    , xAxis = nv.models.axis()
	    , x2Axis = nv.models.axis()
	    , y1Axis = nv.models.axis()
	    , y2Axis = nv.models.axis()
	    , y3Axis = nv.models.axis()
	    , y4Axis = nv.models.axis()
	    , legend = nv.models.legend()
	    , brush = d3.svg.brush()
	    ;

	  var margin = {top: 30, right: 30, bottom: 30, left: 60}
	    , margin2 = {top: 0, right: 30, bottom: 20, left: 60}
	    , width = null
	    , height = null
	    , height2 = 100
	    , getX = function(d) { return d.x }
	    , getY = function(d) { return d.y }
	    , color = nv.utils.defaultColor()
	    , showLegend = true
	    , extent
	    , brushExtent = null
	    , tooltips = true
	    , tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + key + '</h3>' +
	               '<p>' +  y + ' at ' + x + '</p>';
	      }
	    , x
	    , x2
	    , y1
	    , y2
	    , y3
	    , y4
	    , noData = "No Data Available."
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'brush')
	    , transitionDuration = 0
	    ;

	  lines
	    .clipEdge(true)
	    ;
	  lines2
	    .interactive(false)
	    ;
	  xAxis
	    .orient('bottom')
	    .tickPadding(5)
	    ;
	  y1Axis
	    .orient('left')
	    ;
	  y2Axis
	    .orient('right')
	    ;
	  x2Axis
	    .orient('bottom')
	    .tickPadding(5)
	    ;
	  y3Axis
	    .orient('left')
	    ;
	  y4Axis
	    .orient('right')
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var showTooltip = function(e, offsetElement) {
	    if (extent) {
	        e.pointIndex += Math.ceil(extent[0]);
	    }
	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        x = xAxis.tickFormat()(lines.x()(e.point, e.pointIndex)),
	        y = (e.series.bar ? y1Axis : y2Axis).tickFormat()(lines.y()(e.point, e.pointIndex)),
	        content = tooltip(e.series.key, x, y, e, chart);

	    nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
	  };

	  //------------------------------------------------------------



	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight1 = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom - height2,
	          availableHeight2 = height2 - margin2.top - margin2.bottom;

	      chart.update = function() { container.transition().duration(transitionDuration).call(chart); };
	      chart.container = this;


	      //------------------------------------------------------------
	      // Display No Data message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight1 / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      var dataBars = data.filter(function(d) { return !d.disabled && d.bar });
	      var dataLines = data.filter(function(d) { return !d.bar }); // removed the !d.disabled clause here to fix Issue #240

	      x = bars.xScale();
	      x2 = x2Axis.scale();
	      y1 = bars.yScale();
	      y2 = lines.yScale();
	      y3 = bars2.yScale();
	      y4 = lines2.yScale();

	      var series1 = data
	        .filter(function(d) { return !d.disabled && d.bar })
	        .map(function(d) {
	          return d.values.map(function(d,i) {
	            return { x: getX(d,i), y: getY(d,i) }
	          })
	        });

	      var series2 = data
	        .filter(function(d) { return !d.disabled && !d.bar })
	        .map(function(d) {
	          return d.values.map(function(d,i) {
	            return { x: getX(d,i), y: getY(d,i) }
	          })
	        });

	      x   .range([0, availableWidth]);
	      
	      x2  .domain(d3.extent(d3.merge(series1.concat(series2)), function(d) { return d.x } ))
	          .range([0, availableWidth]);


	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-linePlusBar').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-linePlusBar').append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-legendWrap');
	      
	      var focusEnter = gEnter.append('g').attr('class', 'nv-focus');
	      focusEnter.append('g').attr('class', 'nv-x nv-axis');
	      focusEnter.append('g').attr('class', 'nv-y1 nv-axis');
	      focusEnter.append('g').attr('class', 'nv-y2 nv-axis');
	      focusEnter.append('g').attr('class', 'nv-barsWrap');
	      focusEnter.append('g').attr('class', 'nv-linesWrap');

	      var contextEnter = gEnter.append('g').attr('class', 'nv-context');
	      contextEnter.append('g').attr('class', 'nv-x nv-axis');
	      contextEnter.append('g').attr('class', 'nv-y1 nv-axis');
	      contextEnter.append('g').attr('class', 'nv-y2 nv-axis');
	      contextEnter.append('g').attr('class', 'nv-barsWrap');
	      contextEnter.append('g').attr('class', 'nv-linesWrap');
	      contextEnter.append('g').attr('class', 'nv-brushBackground');
	      contextEnter.append('g').attr('class', 'nv-x nv-brush');


	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        legend.width( availableWidth / 2 );

	        g.select('.nv-legendWrap')
	            .datum(data.map(function(series) {
	              series.originalKey = series.originalKey === undefined ? series.key : series.originalKey;
	              series.key = series.originalKey + (series.bar ? ' (left axis)' : ' (right axis)');
	              return series;
	            }))
	          .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight1 = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom - height2;
	        }

	        g.select('.nv-legendWrap')
	            .attr('transform', 'translate(' + ( availableWidth / 2 ) + ',' + (-margin.top) +')');
	      }

	      //------------------------------------------------------------


	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


	      //------------------------------------------------------------
	      // Context Components

	      bars2
	        .width(availableWidth)
	        .height(availableHeight2)
	        .color(data.map(function(d,i) {
	          return d.color || color(d, i);
	        }).filter(function(d,i) { return !data[i].disabled && data[i].bar }));

	      lines2
	        .width(availableWidth)
	        .height(availableHeight2)
	        .color(data.map(function(d,i) {
	          return d.color || color(d, i);
	        }).filter(function(d,i) { return !data[i].disabled && !data[i].bar }));
	        
	      var bars2Wrap = g.select('.nv-context .nv-barsWrap')
	          .datum(dataBars.length ? dataBars : [{values:[]}]);

	      var lines2Wrap = g.select('.nv-context .nv-linesWrap')
	          .datum(!dataLines[0].disabled ? dataLines : [{values:[]}]);
	          
	      g.select('.nv-context')
	          .attr('transform', 'translate(0,' + ( availableHeight1 + margin.bottom + margin2.top) + ')')

	      bars2Wrap.transition().call(bars2);
	      lines2Wrap.transition().call(lines2);

	      //------------------------------------------------------------



	      //------------------------------------------------------------
	      // Setup Brush

	      brush
	        .x(x2)
	        .on('brush', onBrush);

	      if (brushExtent) brush.extent(brushExtent);

	      var brushBG = g.select('.nv-brushBackground').selectAll('g')
	          .data([brushExtent || brush.extent()])

	      var brushBGenter = brushBG.enter()
	          .append('g');

	      brushBGenter.append('rect')
	          .attr('class', 'left')
	          .attr('x', 0)
	          .attr('y', 0)
	          .attr('height', availableHeight2);

	      brushBGenter.append('rect')
	          .attr('class', 'right')
	          .attr('x', 0)
	          .attr('y', 0)
	          .attr('height', availableHeight2);

	      var gBrush = g.select('.nv-x.nv-brush')
	          .call(brush);
	      gBrush.selectAll('rect')
	          //.attr('y', -5)
	          .attr('height', availableHeight2);
	      gBrush.selectAll('.resize').append('path').attr('d', resizePath);

	      //------------------------------------------------------------

	      //------------------------------------------------------------
	      // Setup Secondary (Context) Axes

	      x2Axis
	        .ticks( availableWidth / 100 )
	        .tickSize(-availableHeight2, 0);

	      g.select('.nv-context .nv-x.nv-axis')
	          .attr('transform', 'translate(0,' + y3.range()[0] + ')');
	      g.select('.nv-context .nv-x.nv-axis').transition()
	          .call(x2Axis);


	      y3Axis
	        .scale(y3)
	        .ticks( availableHeight2 / 36 )
	        .tickSize( -availableWidth, 0);

	      g.select('.nv-context .nv-y1.nv-axis')
	          .style('opacity', dataBars.length ? 1 : 0)
	          .attr('transform', 'translate(0,' + x2.range()[0] + ')');
	          
	      g.select('.nv-context .nv-y1.nv-axis').transition()
	          .call(y3Axis);
	          

	      y4Axis
	        .scale(y4)
	        .ticks( availableHeight2 / 36 )
	        .tickSize(dataBars.length ? 0 : -availableWidth, 0); // Show the y2 rules only if y1 has none

	      g.select('.nv-context .nv-y2.nv-axis')
	          .style('opacity', dataLines.length ? 1 : 0)
	          .attr('transform', 'translate(' + x2.range()[1] + ',0)');

	      g.select('.nv-context .nv-y2.nv-axis').transition()
	          .call(y4Axis);
	          
	      //------------------------------------------------------------

	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      legend.dispatch.on('stateChange', function(newState) { 
	        chart.update();
	      });

	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });

	      //============================================================


	      //============================================================
	      // Functions
	      //------------------------------------------------------------

	      // Taken from crossfilter (http://square.github.com/crossfilter/)
	      function resizePath(d) {
	        var e = +(d == 'e'),
	            x = e ? 1 : -1,
	            y = availableHeight2 / 3;
	        return 'M' + (.5 * x) + ',' + y
	            + 'A6,6 0 0 ' + e + ' ' + (6.5 * x) + ',' + (y + 6)
	            + 'V' + (2 * y - 6)
	            + 'A6,6 0 0 ' + e + ' ' + (.5 * x) + ',' + (2 * y)
	            + 'Z'
	            + 'M' + (2.5 * x) + ',' + (y + 8)
	            + 'V' + (2 * y - 8)
	            + 'M' + (4.5 * x) + ',' + (y + 8)
	            + 'V' + (2 * y - 8);
	      }


	      function updateBrushBG() {
	        if (!brush.empty()) brush.extent(brushExtent);
	        brushBG
	            .data([brush.empty() ? x2.domain() : brushExtent])
	            .each(function(d,i) {
	              var leftWidth = x2(d[0]) - x2.range()[0],
	                  rightWidth = x2.range()[1] - x2(d[1]);
	              d3.select(this).select('.left')
	                .attr('width',  leftWidth < 0 ? 0 : leftWidth);

	              d3.select(this).select('.right')
	                .attr('x', x2(d[1]))
	                .attr('width', rightWidth < 0 ? 0 : rightWidth);
	            });
	      }


	      function onBrush() {
	        brushExtent = brush.empty() ? null : brush.extent();
	        extent = brush.empty() ? x2.domain() : brush.extent();


	        dispatch.brush({extent: extent, brush: brush});

	        updateBrushBG();


	        //------------------------------------------------------------
	        // Prepare Main (Focus) Bars and Lines
	        
	        bars
	        .width(availableWidth)
	        .height(availableHeight1)
	        .color(data.map(function(d,i) {
	          return d.color || color(d, i);
	        }).filter(function(d,i) { return !data[i].disabled && data[i].bar }));


	        lines
	        .width(availableWidth)
	        .height(availableHeight1)
	        .color(data.map(function(d,i) {
	          return d.color || color(d, i);
	        }).filter(function(d,i) { return !data[i].disabled && !data[i].bar }));

	        var focusBarsWrap = g.select('.nv-focus .nv-barsWrap')
	            .datum(!dataBars.length ? [{values:[]}] :
	              dataBars
	                .map(function(d,i) {
	                  return {
	                    key: d.key,
	                    values: d.values.filter(function(d,i) {
	                      return bars.x()(d,i) >= extent[0] && bars.x()(d,i) <= extent[1];
	                    })
	                  }
	                })
	            );
	        
	        var focusLinesWrap = g.select('.nv-focus .nv-linesWrap')
	            .datum(dataLines[0].disabled ? [{values:[]}] :
	              dataLines
	                .map(function(d,i) {
	                  return {
	                    key: d.key,
	                    values: d.values.filter(function(d,i) {
	                      return lines.x()(d,i) >= extent[0] && lines.x()(d,i) <= extent[1];
	                    })
	                  }
	                })
	             );
	                 
	        //------------------------------------------------------------
	        
	        
	        //------------------------------------------------------------
	        // Update Main (Focus) X Axis

	        if (dataBars.length) {
	            x = bars.xScale();
	        } else {
	            x = lines.xScale();
	        }
	        
	        xAxis
	        .scale(x)
	        .ticks( availableWidth / 100 )
	        .tickSize(-availableHeight1, 0);

	        xAxis.domain([Math.ceil(extent[0]), Math.floor(extent[1])]);
	        
	        g.select('.nv-x.nv-axis').transition().duration(transitionDuration)
	          .call(xAxis);
	        //------------------------------------------------------------
	        
	        
	        //------------------------------------------------------------
	        // Update Main (Focus) Bars and Lines

	        focusBarsWrap.transition().duration(transitionDuration).call(bars);
	        focusLinesWrap.transition().duration(transitionDuration).call(lines);
	        
	        //------------------------------------------------------------
	        
	          
	        //------------------------------------------------------------
	        // Setup and Update Main (Focus) Y Axes
	        
	        g.select('.nv-focus .nv-x.nv-axis')
	          .attr('transform', 'translate(0,' + y1.range()[0] + ')');


	        y1Axis
	        .scale(y1)
	        .ticks( availableHeight1 / 36 )
	        .tickSize(-availableWidth, 0);

	        g.select('.nv-focus .nv-y1.nv-axis')
	          .style('opacity', dataBars.length ? 1 : 0);


	        y2Axis
	        .scale(y2)
	        .ticks( availableHeight1 / 36 )
	        .tickSize(dataBars.length ? 0 : -availableWidth, 0); // Show the y2 rules only if y1 has none

	        g.select('.nv-focus .nv-y2.nv-axis')
	          .style('opacity', dataLines.length ? 1 : 0)
	          .attr('transform', 'translate(' + x.range()[1] + ',0)');

	        g.select('.nv-focus .nv-y1.nv-axis').transition().duration(transitionDuration)
	            .call(y1Axis);
	        g.select('.nv-focus .nv-y2.nv-axis').transition().duration(transitionDuration)
	            .call(y2Axis);
	      }

	      //============================================================

	      onBrush();

	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  lines.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  lines.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  bars.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  bars.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.legend = legend;
	  chart.lines = lines;
	  chart.lines2 = lines2;
	  chart.bars = bars;
	  chart.bars2 = bars2;
	  chart.xAxis = xAxis;
	  chart.x2Axis = x2Axis;
	  chart.y1Axis = y1Axis;
	  chart.y2Axis = y2Axis;
	  chart.y3Axis = y3Axis;
	  chart.y4Axis = y4Axis;

	  d3.rebind(chart, lines, 'defined', 'size', 'clipVoronoi', 'interpolate');
	  //TODO: consider rebinding x, y and some other stuff, and simply do soemthign lile bars.x(lines.x()), etc.
	  //d3.rebind(chart, lines, 'x', 'y', 'size', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'interactive', 'clipEdge', 'clipVoronoi', 'id');

	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = _;
	    lines.x(_);
	    bars.x(_);
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = _;
	    lines.y(_);
	    bars.y(_);
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    legend.color(color);
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  chart.brushExtent = function(_) {
	    if (!arguments.length) return brushExtent;
	    brushExtent = _;
	    return chart;
	  };


	  //============================================================


	  return chart;
	}

	nv.models.multiBar = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 0, right: 0, bottom: 0, left: 0}
	    , width = 960
	    , height = 500
	    , x = d3.scale.ordinal()
	    , y = d3.scale.linear()
	    , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
	    , getX = function(d) { return d.x }
	    , getY = function(d) { return d.y }
	    , forceY = [0] // 0 is forced by default.. this makes sense for the majority of bar graphs... user can always do chart.forceY([]) to remove
	    , clipEdge = true
	    , stacked = false
	    , stackOffset = 'zero' // options include 'silhouette', 'wiggle', 'expand', 'zero', or a custom function
	    , color = nv.utils.defaultColor()
	    , hideable = false
	    , barColor = null // adding the ability to set the color for each rather than the whole group
	    , disabled // used in conjunction with barColor to communicate from multiBarHorizontalChart what series are disabled
	    , delay = 1200
	    , xDomain
	    , yDomain
	    , xRange
	    , yRange
	    , groupSpacing = 0.1
	    , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout')
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var x0, y0 //used to store previous scales
	      ;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableWidth = width - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          container = d3.select(this);

	      if(hideable && data.length) hideable = [{
	        values: data[0].values.map(function(d) {
	        return {
	          x: d.x,
	          y: 0,
	          series: d.series,
	          size: 0.01
	        };}
	      )}];

	      if (stacked)
	        data = d3.layout.stack()
	                 .offset(stackOffset)
	                 .values(function(d){ return d.values })
	                 .y(getY)
	                 (!data.length && hideable ? hideable : data);


	      //add series index to each data point for reference
	      data.forEach(function(series, i) {
	        series.values.forEach(function(point) {
	          point.series = i;
	        });
	      });


	      //------------------------------------------------------------
	      // HACK for negative value stacking
	      if (stacked)
	        data[0].values.map(function(d,i) {
	          var posBase = 0, negBase = 0;
	          data.map(function(d) {
	            var f = d.values[i]
	            f.size = Math.abs(f.y);
	            if (f.y<0)  {
	              f.y1 = negBase;
	              negBase = negBase - f.size;
	            } else
	            {
	              f.y1 = f.size + posBase;
	              posBase = posBase + f.size;
	            }
	          });
	        });

	      //------------------------------------------------------------
	      // Setup Scales

	      // remap and flatten the data for use in calculating the scales' domains
	      var seriesData = (xDomain && yDomain) ? [] : // if we know xDomain and yDomain, no need to calculate
	            data.map(function(d) {
	              return d.values.map(function(d,i) {
	                return { x: getX(d,i), y: getY(d,i), y0: d.y0, y1: d.y1 }
	              })
	            });

	      x   .domain(xDomain || d3.merge(seriesData).map(function(d) { return d.x }))
	          .rangeBands(xRange || [0, availableWidth], groupSpacing);

	      //y   .domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) { return d.y + (stacked ? d.y1 : 0) }).concat(forceY)))
	      y   .domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) { return stacked ? (d.y > 0 ? d.y1 : d.y1 + d.y ) : d.y }).concat(forceY)))
	          .range(yRange || [availableHeight, 0]);

	      // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
	      if (x.domain()[0] === x.domain()[1])
	        x.domain()[0] ?
	            x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01])
	          : x.domain([-1,1]);

	      if (y.domain()[0] === y.domain()[1])
	        y.domain()[0] ?
	            y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01])
	          : y.domain([-1,1]);


	      x0 = x0 || x;
	      y0 = y0 || y;

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-multibar').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multibar');
	      var defsEnter = wrapEnter.append('defs');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g')

	      gEnter.append('g').attr('class', 'nv-groups');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------



	      defsEnter.append('clipPath')
	          .attr('id', 'nv-edge-clip-' + id)
	        .append('rect');
	      wrap.select('#nv-edge-clip-' + id + ' rect')
	          .attr('width', availableWidth)
	          .attr('height', availableHeight);

	      g   .attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');



	      var groups = wrap.select('.nv-groups').selectAll('.nv-group')
	          .data(function(d) { return d }, function(d,i) { return i });
	      groups.enter().append('g')
	          .style('stroke-opacity', 1e-6)
	          .style('fill-opacity', 1e-6);
	      groups.exit()
	        .transition()
	        .selectAll('rect.nv-bar')
	        .delay(function(d,i) {
	             return i * delay/ data[0].values.length;
	        })
	          .attr('y', function(d) { return stacked ? y0(d.y0) : y0(0) })
	          .attr('height', 0)
	          .remove();
	      groups
	          .attr('class', function(d,i) { return 'nv-group nv-series-' + i })
	          .classed('hover', function(d) { return d.hover })
	          .style('fill', function(d,i){ return color(d, i) })
	          .style('stroke', function(d,i){ return color(d, i) });
	      groups
	          .transition()
	          .style('stroke-opacity', 1)
	          .style('fill-opacity', .75);


	      var bars = groups.selectAll('rect.nv-bar')
	          .data(function(d) { return (hideable && !data.length) ? hideable.values : d.values });

	      bars.exit().remove();


	      var barsEnter = bars.enter().append('rect')
	          .attr('class', function(d,i) { return getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive'})
	          .attr('x', function(d,i,j) {
	              return stacked ? 0 : (j * x.rangeBand() / data.length )
	          })
	          .attr('y', function(d) { return y0(stacked ? d.y0 : 0) })
	          .attr('height', 0)
	          .attr('width', x.rangeBand() / (stacked ? 1 : data.length) )
	          .attr('transform', function(d,i) { return 'translate(' + x(getX(d,i)) + ',0)'; })
	          ;
	      bars
	          .style('fill', function(d,i,j){ return color(d, j, i);  })
	          .style('stroke', function(d,i,j){ return color(d, j, i); })
	          .on('mouseover', function(d,i) { //TODO: figure out why j works above, but not here
	            d3.select(this).classed('hover', true);
	            dispatch.elementMouseover({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pos: [x(getX(d,i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length), y(getY(d,i) + (stacked ? d.y0 : 0))],  // TODO: Figure out why the value appears to be shifted
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	          })
	          .on('mouseout', function(d,i) {
	            d3.select(this).classed('hover', false);
	            dispatch.elementMouseout({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	          })
	          .on('click', function(d,i) {
	            dispatch.elementClick({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pos: [x(getX(d,i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length), y(getY(d,i) + (stacked ? d.y0 : 0))],  // TODO: Figure out why the value appears to be shifted
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	            d3.event.stopPropagation();
	          })
	          .on('dblclick', function(d,i) {
	            dispatch.elementDblClick({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pos: [x(getX(d,i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length), y(getY(d,i) + (stacked ? d.y0 : 0))],  // TODO: Figure out why the value appears to be shifted
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	            d3.event.stopPropagation();
	          });
	      bars
	          .attr('class', function(d,i) { return getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive'})
	          .transition()
	          .attr('transform', function(d,i) { return 'translate(' + x(getX(d,i)) + ',0)'; })

	      if (barColor) {
	        if (!disabled) disabled = data.map(function() { return true });
	        bars
	          .style('fill', function(d,i,j) { return d3.rgb(barColor(d,i)).darker(  disabled.map(function(d,i) { return i }).filter(function(d,i){ return !disabled[i]  })[j]   ).toString(); })
	          .style('stroke', function(d,i,j) { return d3.rgb(barColor(d,i)).darker(  disabled.map(function(d,i) { return i }).filter(function(d,i){ return !disabled[i]  })[j]   ).toString(); });
	      }


	      if (stacked)
	          bars.transition()
	            .delay(function(d,i) {

	                  return i * delay / data[0].values.length;
	            })
	            .attr('y', function(d,i) {

	              return y((stacked ? d.y1 : 0));
	            })
	            .attr('height', function(d,i) {
	              return Math.max(Math.abs(y(d.y + (stacked ? d.y0 : 0)) - y((stacked ? d.y0 : 0))),1);
	            })
	            .attr('x', function(d,i) {
	                  return stacked ? 0 : (d.series * x.rangeBand() / data.length )
	            })
	            .attr('width', x.rangeBand() / (stacked ? 1 : data.length) );
	      else
	          bars.transition()
	            .delay(function(d,i) {
	                return i * delay/ data[0].values.length;
	            })
	            .attr('x', function(d,i) {
	              return d.series * x.rangeBand() / data.length
	            })
	            .attr('width', x.rangeBand() / data.length)
	            .attr('y', function(d,i) {
	                return getY(d,i) < 0 ?
	                        y(0) :
	                        y(0) - y(getY(d,i)) < 1 ?
	                          y(0) - 1 :
	                        y(getY(d,i)) || 0;
	            })
	            .attr('height', function(d,i) {
	                return Math.max(Math.abs(y(getY(d,i)) - y(0)),1) || 0;
	            });



	      //store old scales for use in transitions on update
	      x0 = x.copy();
	      y0 = y.copy();

	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = _;
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = _;
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.xScale = function(_) {
	    if (!arguments.length) return x;
	    x = _;
	    return chart;
	  };

	  chart.yScale = function(_) {
	    if (!arguments.length) return y;
	    y = _;
	    return chart;
	  };

	  chart.xDomain = function(_) {
	    if (!arguments.length) return xDomain;
	    xDomain = _;
	    return chart;
	  };

	  chart.yDomain = function(_) {
	    if (!arguments.length) return yDomain;
	    yDomain = _;
	    return chart;
	  };

	  chart.xRange = function(_) {
	    if (!arguments.length) return xRange;
	    xRange = _;
	    return chart;
	  };

	  chart.yRange = function(_) {
	    if (!arguments.length) return yRange;
	    yRange = _;
	    return chart;
	  };

	  chart.forceY = function(_) {
	    if (!arguments.length) return forceY;
	    forceY = _;
	    return chart;
	  };

	  chart.stacked = function(_) {
	    if (!arguments.length) return stacked;
	    stacked = _;
	    return chart;
	  };

	  chart.stackOffset = function(_) {
	    if (!arguments.length) return stackOffset;
	    stackOffset = _;
	    return chart;
	  };

	  chart.clipEdge = function(_) {
	    if (!arguments.length) return clipEdge;
	    clipEdge = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };

	  chart.barColor = function(_) {
	    if (!arguments.length) return barColor;
	    barColor = nv.utils.getColor(_);
	    return chart;
	  };

	  chart.disabled = function(_) {
	    if (!arguments.length) return disabled;
	    disabled = _;
	    return chart;
	  };

	  chart.id = function(_) {
	    if (!arguments.length) return id;
	    id = _;
	    return chart;
	  };

	  chart.hideable = function(_) {
	    if (!arguments.length) return hideable;
	    hideable = _;
	    return chart;
	  };

	  chart.delay = function(_) {
	    if (!arguments.length) return delay;
	    delay = _;
	    return chart;
	  };

	  chart.groupSpacing = function(_) {
	    if (!arguments.length) return groupSpacing;
	    groupSpacing = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.multiBarChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var multibar = nv.models.multiBar()
	    , xAxis = nv.models.axis()
	    , yAxis = nv.models.axis()
	    , legend = nv.models.legend()
	    , controls = nv.models.legend()
	    ;

	  var margin = {top: 30, right: 20, bottom: 50, left: 60}
	    , width = null
	    , height = null
	    , color = nv.utils.defaultColor()
	    , showControls = true
	    , showLegend = true
	    , showXAxis = true
	    , showYAxis = true
	    , rightAlignYAxis = false
	    , reduceXTicks = true // if false a tick will show for every data point
	    , staggerLabels = false
	    , rotateLabels = 0
	    , tooltips = true
	    , tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + key + '</h3>' +
	               '<p>' +  y + ' on ' + x + '</p>'
	      }
	    , x //can be accessed via chart.xScale()
	    , y //can be accessed via chart.yScale()
	    , state = { stacked: false }
	    , defaultState = null
	    , noData = "No Data Available."
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
	    , controlWidth = function() { return showControls ? 180 : 0 }
	    , transitionDuration = 250
	    ;

	  multibar
	    .stacked(false)
	    ;
	  xAxis
	    .orient('bottom')
	    .tickPadding(7)
	    .highlightZero(true)
	    .showMaxMin(false)
	    .tickFormat(function(d) { return d })
	    ;
	  yAxis
	    .orient((rightAlignYAxis) ? 'right' : 'left')
	    .tickFormat(d3.format(',.1f'))
	    ;

	  controls.updateState(false);
	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var showTooltip = function(e, offsetElement) {
	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        x = xAxis.tickFormat()(multibar.x()(e.point, e.pointIndex)),
	        y = yAxis.tickFormat()(multibar.y()(e.point, e.pointIndex)),
	        content = tooltip(e.series.key, x, y, e, chart);

	    nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
	  };

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;

	      chart.update = function() { container.transition().duration(transitionDuration).call(chart) };
	      chart.container = this;

	      //set state.disabled
	      state.disabled = data.map(function(d) { return !!d.disabled });

	      if (!defaultState) {
	        var key;
	        defaultState = {};
	        for (key in state) {
	          if (state[key] instanceof Array)
	            defaultState[key] = state[key].slice(0);
	          else
	            defaultState[key] = state[key];
	        }
	      }
	      //------------------------------------------------------------
	      // Display noData message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      x = multibar.xScale();
	      y = multibar.yScale();

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-multiBarWithLegend').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multiBarWithLegend').append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-x nv-axis');
	      gEnter.append('g').attr('class', 'nv-y nv-axis');
	      gEnter.append('g').attr('class', 'nv-barsWrap');
	      gEnter.append('g').attr('class', 'nv-legendWrap');
	      gEnter.append('g').attr('class', 'nv-controlsWrap');

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        legend.width(availableWidth - controlWidth());

	        if (multibar.barColor())
	          data.forEach(function(series,i) {
	            series.color = d3.rgb('#ccc').darker(i * 1.5).toString();
	          })

	        g.select('.nv-legendWrap')
	            .datum(data)
	            .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }

	        g.select('.nv-legendWrap')
	            .attr('transform', 'translate(' + controlWidth() + ',' + (-margin.top) +')');
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Controls

	      if (showControls) {
	        var controlsData = [
	          { key: 'Grouped', disabled: multibar.stacked() },
	          { key: 'Stacked', disabled: !multibar.stacked() }
	        ];

	        controls.width(controlWidth()).color(['#444', '#444', '#444']);
	        g.select('.nv-controlsWrap')
	            .datum(controlsData)
	            .attr('transform', 'translate(0,' + (-margin.top) +')')
	            .call(controls);
	      }

	      //------------------------------------------------------------


	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      if (rightAlignYAxis) {
	          g.select(".nv-y.nv-axis")
	              .attr("transform", "translate(" + availableWidth + ",0)");
	      }

	      //------------------------------------------------------------
	      // Main Chart Component(s)

	      multibar
	        .disabled(data.map(function(series) { return series.disabled }))
	        .width(availableWidth)
	        .height(availableHeight)
	        .color(data.map(function(d,i) {
	          return d.color || color(d, i);
	        }).filter(function(d,i) { return !data[i].disabled }))


	      var barsWrap = g.select('.nv-barsWrap')
	          .datum(data.filter(function(d) { return !d.disabled }))

	      barsWrap.transition().call(multibar);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Axes

	      if (showXAxis) {
	          xAxis
	            .scale(x)
	            .ticks( availableWidth / 100 )
	            .tickSize(-availableHeight, 0);

	          g.select('.nv-x.nv-axis')
	              .attr('transform', 'translate(0,' + y.range()[0] + ')');
	          g.select('.nv-x.nv-axis').transition()
	              .call(xAxis);

	          var xTicks = g.select('.nv-x.nv-axis > g').selectAll('g');

	          xTicks
	              .selectAll('line, text')
	              .style('opacity', 1)

	          if (staggerLabels) {
	              var getTranslate = function(x,y) {
	                  return "translate(" + x + "," + y + ")";
	              };

	              var staggerUp = 5, staggerDown = 17;  //pixels to stagger by
	              // Issue #140
	              xTicks
	                .selectAll("text")
	                .attr('transform', function(d,i,j) { 
	                    return  getTranslate(0, (j % 2 == 0 ? staggerUp : staggerDown));
	                  });

	              var totalInBetweenTicks = d3.selectAll(".nv-x.nv-axis .nv-wrap g g text")[0].length;
	              g.selectAll(".nv-x.nv-axis .nv-axisMaxMin text")
	                .attr("transform", function(d,i) {
	                    return getTranslate(0, (i === 0 || totalInBetweenTicks % 2 !== 0) ? staggerDown : staggerUp);
	                });
	          }

	          if (reduceXTicks)
	            xTicks
	              .filter(function(d,i) {
	                  return i % Math.ceil(data[0].values.length / (availableWidth / 100)) !== 0;
	                })
	              .selectAll('text, line')
	              .style('opacity', 0);

	          if(rotateLabels)
	            xTicks
	              .selectAll('.tick text')
	              .attr('transform', 'rotate(' + rotateLabels + ' 0,0)')
	              .style('text-anchor', rotateLabels > 0 ? 'start' : 'end');
	          
	          g.select('.nv-x.nv-axis').selectAll('g.nv-axisMaxMin text')
	              .style('opacity', 1);
	      }


	      if (showYAxis) {      
	          yAxis
	            .scale(y)
	            .ticks( availableHeight / 36 )
	            .tickSize( -availableWidth, 0);

	          g.select('.nv-y.nv-axis').transition()
	              .call(yAxis);
	      }


	      //------------------------------------------------------------



	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      legend.dispatch.on('stateChange', function(newState) { 
	        state = newState;
	        dispatch.stateChange(state);
	        chart.update();
	      });

	      controls.dispatch.on('legendClick', function(d,i) {
	        if (!d.disabled) return;
	        controlsData = controlsData.map(function(s) {
	          s.disabled = true;
	          return s;
	        });
	        d.disabled = false;

	        switch (d.key) {
	          case 'Grouped':
	            multibar.stacked(false);
	            break;
	          case 'Stacked':
	            multibar.stacked(true);
	            break;
	        }

	        state.stacked = multibar.stacked();
	        dispatch.stateChange(state);

	        chart.update();
	      });

	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode)
	      });

	      // Update chart from a state object passed to event handler
	      dispatch.on('changeState', function(e) {

	        if (typeof e.disabled !== 'undefined') {
	          data.forEach(function(series,i) {
	            series.disabled = e.disabled[i];
	          });

	          state.disabled = e.disabled;
	        }

	        if (typeof e.stacked !== 'undefined') {
	          multibar.stacked(e.stacked);
	          state.stacked = e.stacked;
	        }

	        chart.update();
	      });

	      //============================================================


	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  multibar.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  multibar.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });
	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.multibar = multibar;
	  chart.legend = legend;
	  chart.xAxis = xAxis;
	  chart.yAxis = yAxis;

	  d3.rebind(chart, multibar, 'x', 'y', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY', 'clipEdge',
	   'id', 'stacked', 'stackOffset', 'delay', 'barColor','groupSpacing');

	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    legend.color(color);
	    return chart;
	  };

	  chart.showControls = function(_) {
	    if (!arguments.length) return showControls;
	    showControls = _;
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.showXAxis = function(_) {
	    if (!arguments.length) return showXAxis;
	    showXAxis = _;
	    return chart;
	  };

	  chart.showYAxis = function(_) {
	    if (!arguments.length) return showYAxis;
	    showYAxis = _;
	    return chart;
	  };

	  chart.rightAlignYAxis = function(_) {
	    if(!arguments.length) return rightAlignYAxis;
	    rightAlignYAxis = _;
	    yAxis.orient( (_) ? 'right' : 'left');
	    return chart;
	  };

	  chart.reduceXTicks= function(_) {
	    if (!arguments.length) return reduceXTicks;
	    reduceXTicks = _;
	    return chart;
	  };

	  chart.rotateLabels = function(_) {
	    if (!arguments.length) return rotateLabels;
	    rotateLabels = _;
	    return chart;
	  }

	  chart.staggerLabels = function(_) {
	    if (!arguments.length) return staggerLabels;
	    staggerLabels = _;
	    return chart;
	  };

	  chart.tooltip = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.state = function(_) {
	    if (!arguments.length) return state;
	    state = _;
	    return chart;
	  };

	  chart.defaultState = function(_) {
	    if (!arguments.length) return defaultState;
	    defaultState = _;
	    return chart;
	  };
	  
	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  chart.transitionDuration = function(_) {
	    if (!arguments.length) return transitionDuration;
	    transitionDuration = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.multiBarHorizontal = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 0, right: 0, bottom: 0, left: 0}
	    , width = 960
	    , height = 500
	    , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
	    , x = d3.scale.ordinal()
	    , y = d3.scale.linear()
	    , getX = function(d) { return d.x }
	    , getY = function(d) { return d.y }
	    , forceY = [0] // 0 is forced by default.. this makes sense for the majority of bar graphs... user can always do chart.forceY([]) to remove
	    , color = nv.utils.defaultColor()
	    , barColor = null // adding the ability to set the color for each rather than the whole group
	    , disabled // used in conjunction with barColor to communicate from multiBarHorizontalChart what series are disabled
	    , stacked = false
	    , showValues = false
	    , showBarLabels = false
	    , valuePadding = 60
	    , valueFormat = d3.format(',.2f')
	    , delay = 1200
	    , xDomain
	    , yDomain
	    , xRange
	    , yRange
	    , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout')
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var x0, y0 //used to store previous scales
	      ;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableWidth = width - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          container = d3.select(this);


	      if (stacked)
	        data = d3.layout.stack()
	                 .offset('zero')
	                 .values(function(d){ return d.values })
	                 .y(getY)
	                 (data);


	      //add series index to each data point for reference
	      data.forEach(function(series, i) {
	        series.values.forEach(function(point) {
	          point.series = i;
	        });
	      });



	      //------------------------------------------------------------
	      // HACK for negative value stacking
	      if (stacked)
	        data[0].values.map(function(d,i) {
	          var posBase = 0, negBase = 0;
	          data.map(function(d) {
	            var f = d.values[i]
	            f.size = Math.abs(f.y);
	            if (f.y<0)  {
	              f.y1 = negBase - f.size;
	              negBase = negBase - f.size;
	            } else
	            {
	              f.y1 = posBase;
	              posBase = posBase + f.size;
	            }
	          });
	        });



	      //------------------------------------------------------------
	      // Setup Scales

	      // remap and flatten the data for use in calculating the scales' domains
	      var seriesData = (xDomain && yDomain) ? [] : // if we know xDomain and yDomain, no need to calculate
	            data.map(function(d) {
	              return d.values.map(function(d,i) {
	                return { x: getX(d,i), y: getY(d,i), y0: d.y0, y1: d.y1 }
	              })
	            });

	      x   .domain(xDomain || d3.merge(seriesData).map(function(d) { return d.x }))
	          .rangeBands(xRange || [0, availableHeight], .1);

	      //y   .domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) { return d.y + (stacked ? d.y0 : 0) }).concat(forceY)))
	      y   .domain(yDomain || d3.extent(d3.merge(seriesData).map(function(d) { return stacked ? (d.y > 0 ? d.y1 + d.y : d.y1 ) : d.y }).concat(forceY)))

	      if (showValues && !stacked)
	        y.range(yRange || [(y.domain()[0] < 0 ? valuePadding : 0), availableWidth - (y.domain()[1] > 0 ? valuePadding : 0) ]);
	      else
	        y.range(yRange || [0, availableWidth]);

	      x0 = x0 || x;
	      y0 = y0 || d3.scale.linear().domain(y.domain()).range([y(0),y(0)]);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = d3.select(this).selectAll('g.nv-wrap.nv-multibarHorizontal').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multibarHorizontal');
	      var defsEnter = wrapEnter.append('defs');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-groups');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------



	      var groups = wrap.select('.nv-groups').selectAll('.nv-group')
	          .data(function(d) { return d }, function(d,i) { return i });
	      groups.enter().append('g')
	          .style('stroke-opacity', 1e-6)
	          .style('fill-opacity', 1e-6);
	      groups.exit().transition()
	          .style('stroke-opacity', 1e-6)
	          .style('fill-opacity', 1e-6)
	          .remove();
	      groups
	          .attr('class', function(d,i) { return 'nv-group nv-series-' + i })
	          .classed('hover', function(d) { return d.hover })
	          .style('fill', function(d,i){ return color(d, i) })
	          .style('stroke', function(d,i){ return color(d, i) });
	      groups.transition()
	          .style('stroke-opacity', 1)
	          .style('fill-opacity', .75);


	      var bars = groups.selectAll('g.nv-bar')
	          .data(function(d) { return d.values });

	      bars.exit().remove();


	      var barsEnter = bars.enter().append('g')
	          .attr('transform', function(d,i,j) {
	              return 'translate(' + y0(stacked ? d.y0 : 0) + ',' + (stacked ? 0 : (j * x.rangeBand() / data.length ) + x(getX(d,i))) + ')'
	          });

	      barsEnter.append('rect')
	          .attr('width', 0)
	          .attr('height', x.rangeBand() / (stacked ? 1 : data.length) )

	      bars
	          .on('mouseover', function(d,i) { //TODO: figure out why j works above, but not here
	            d3.select(this).classed('hover', true);
	            dispatch.elementMouseover({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pos: [ y(getY(d,i) + (stacked ? d.y0 : 0)), x(getX(d,i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length) ],
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	          })
	          .on('mouseout', function(d,i) {
	            d3.select(this).classed('hover', false);
	            dispatch.elementMouseout({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	          })
	          .on('click', function(d,i) {
	            dispatch.elementClick({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pos: [x(getX(d,i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length), y(getY(d,i) + (stacked ? d.y0 : 0))],  // TODO: Figure out why the value appears to be shifted
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	            d3.event.stopPropagation();
	          })
	          .on('dblclick', function(d,i) {
	            dispatch.elementDblClick({
	              value: getY(d,i),
	              point: d,
	              series: data[d.series],
	              pos: [x(getX(d,i)) + (x.rangeBand() * (stacked ? data.length / 2 : d.series + .5) / data.length), y(getY(d,i) + (stacked ? d.y0 : 0))],  // TODO: Figure out why the value appears to be shifted
	              pointIndex: i,
	              seriesIndex: d.series,
	              e: d3.event
	            });
	            d3.event.stopPropagation();
	          });


	      barsEnter.append('text');

	      if (showValues && !stacked) {
	        bars.select('text')
	            .attr('text-anchor', function(d,i) { return getY(d,i) < 0 ? 'end' : 'start' })
	            .attr('y', x.rangeBand() / (data.length * 2))
	            .attr('dy', '.32em')
	            .text(function(d,i) { return valueFormat(getY(d,i)) })
	        bars.transition()
	          .select('text')
	            .attr('x', function(d,i) { return getY(d,i) < 0 ? -4 : y(getY(d,i)) - y(0) + 4 })
	      } else {
	        bars.selectAll('text').text('');
	      }

	      if (showBarLabels && !stacked) {
	        barsEnter.append('text').classed('nv-bar-label',true);
	        bars.select('text.nv-bar-label')
	            .attr('text-anchor', function(d,i) { return getY(d,i) < 0 ? 'start' : 'end' })
	            .attr('y', x.rangeBand() / (data.length * 2))
	            .attr('dy', '.32em')
	            .text(function(d,i) { return getX(d,i) });
	        bars.transition()
	          .select('text.nv-bar-label')
	            .attr('x', function(d,i) { return getY(d,i) < 0 ? y(0) - y(getY(d,i)) + 4 : -4 });
	      }
	      else {
	        bars.selectAll('text.nv-bar-label').text('');
	      }

	      bars
	          .attr('class', function(d,i) { return getY(d,i) < 0 ? 'nv-bar negative' : 'nv-bar positive'})

	      if (barColor) {
	        if (!disabled) disabled = data.map(function() { return true });
	        bars
	          .style('fill', function(d,i,j) { return d3.rgb(barColor(d,i)).darker(  disabled.map(function(d,i) { return i }).filter(function(d,i){ return !disabled[i]  })[j]   ).toString(); })
	          .style('stroke', function(d,i,j) { return d3.rgb(barColor(d,i)).darker(  disabled.map(function(d,i) { return i }).filter(function(d,i){ return !disabled[i]  })[j]   ).toString(); });
	      }

	      if (stacked)
	        bars.transition()
	            .attr('transform', function(d,i) {
	              return 'translate(' + y(d.y1) + ',' + x(getX(d,i)) + ')'
	            })
	          .select('rect')
	            .attr('width', function(d,i) {
	              return Math.abs(y(getY(d,i) + d.y0) - y(d.y0))
	            })
	            .attr('height', x.rangeBand() );
	      else
	        bars.transition()
	            .attr('transform', function(d,i) {
	              //TODO: stacked must be all positive or all negative, not both?
	              return 'translate(' +
	              (getY(d,i) < 0 ? y(getY(d,i)) : y(0))
	              + ',' +
	              (d.series * x.rangeBand() / data.length
	              +
	              x(getX(d,i)) )
	              + ')'
	            })
	          .select('rect')
	            .attr('height', x.rangeBand() / data.length )
	            .attr('width', function(d,i) {
	              return Math.max(Math.abs(y(getY(d,i)) - y(0)),1)
	            });


	      //store old scales for use in transitions on update
	      x0 = x.copy();
	      y0 = y.copy();

	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = _;
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = _;
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.xScale = function(_) {
	    if (!arguments.length) return x;
	    x = _;
	    return chart;
	  };

	  chart.yScale = function(_) {
	    if (!arguments.length) return y;
	    y = _;
	    return chart;
	  };

	  chart.xDomain = function(_) {
	    if (!arguments.length) return xDomain;
	    xDomain = _;
	    return chart;
	  };

	  chart.yDomain = function(_) {
	    if (!arguments.length) return yDomain;
	    yDomain = _;
	    return chart;
	  };

	  chart.xRange = function(_) {
	    if (!arguments.length) return xRange;
	    xRange = _;
	    return chart;
	  };

	  chart.yRange = function(_) {
	    if (!arguments.length) return yRange;
	    yRange = _;
	    return chart;
	  };

	  chart.forceY = function(_) {
	    if (!arguments.length) return forceY;
	    forceY = _;
	    return chart;
	  };

	  chart.stacked = function(_) {
	    if (!arguments.length) return stacked;
	    stacked = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };

	  chart.barColor = function(_) {
	    if (!arguments.length) return barColor;
	    barColor = nv.utils.getColor(_);
	    return chart;
	  };

	  chart.disabled = function(_) {
	    if (!arguments.length) return disabled;
	    disabled = _;
	    return chart;
	  };

	  chart.id = function(_) {
	    if (!arguments.length) return id;
	    id = _;
	    return chart;
	  };

	  chart.delay = function(_) {
	    if (!arguments.length) return delay;
	    delay = _;
	    return chart;
	  };

	  chart.showValues = function(_) {
	    if (!arguments.length) return showValues;
	    showValues = _;
	    return chart;
	  };

	  chart.showBarLabels = function(_) {
	    if (!arguments.length) return showBarLabels;
	    showBarLabels = _;
	    return chart;
	  };


	  chart.valueFormat= function(_) {
	    if (!arguments.length) return valueFormat;
	    valueFormat = _;
	    return chart;
	  };

	  chart.valuePadding = function(_) {
	    if (!arguments.length) return valuePadding;
	    valuePadding = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.multiBarHorizontalChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var multibar = nv.models.multiBarHorizontal()
	    , xAxis = nv.models.axis()
	    , yAxis = nv.models.axis()
	    , legend = nv.models.legend().height(30)
	    , controls = nv.models.legend().height(30)
	    ;

	  var margin = {top: 30, right: 20, bottom: 50, left: 60}
	    , width = null
	    , height = null
	    , color = nv.utils.defaultColor()
	    , showControls = true
	    , showLegend = true
	    , showXAxis = true
	    , showYAxis = true
	    , stacked = false
	    , tooltips = true
	    , tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + key + ' - ' + x + '</h3>' +
	               '<p>' +  y + '</p>'
	      }
	    , x //can be accessed via chart.xScale()
	    , y //can be accessed via chart.yScale()
	    , state = { stacked: stacked }
	    , defaultState = null
	    , noData = 'No Data Available.'
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
	    , controlWidth = function() { return showControls ? 180 : 0 }
	    , transitionDuration = 250
	    ;

	  multibar
	    .stacked(stacked)
	    ;
	  xAxis
	    .orient('left')
	    .tickPadding(5)
	    .highlightZero(false)
	    .showMaxMin(false)
	    .tickFormat(function(d) { return d })
	    ;
	  yAxis
	    .orient('bottom')
	    .tickFormat(d3.format(',.1f'))
	    ;

	  controls.updateState(false);
	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var showTooltip = function(e, offsetElement) {
	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        x = xAxis.tickFormat()(multibar.x()(e.point, e.pointIndex)),
	        y = yAxis.tickFormat()(multibar.y()(e.point, e.pointIndex)),
	        content = tooltip(e.series.key, x, y, e, chart);

	    nv.tooltip.show([left, top], content, e.value < 0 ? 'e' : 'w', null, offsetElement);
	  };

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;

	      chart.update = function() { container.transition().duration(transitionDuration).call(chart) };
	      chart.container = this;

	      //set state.disabled
	      state.disabled = data.map(function(d) { return !!d.disabled });

	      if (!defaultState) {
	        var key;
	        defaultState = {};
	        for (key in state) {
	          if (state[key] instanceof Array)
	            defaultState[key] = state[key].slice(0);
	          else
	            defaultState[key] = state[key];
	        }
	      }

	      //------------------------------------------------------------
	      // Display No Data message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      x = multibar.xScale();
	      y = multibar.yScale();

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-multiBarHorizontalChart').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-multiBarHorizontalChart').append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-x nv-axis');
	      gEnter.append('g').attr('class', 'nv-y nv-axis')
	            .append('g').attr('class', 'nv-zeroLine')
	            .append('line');
	      gEnter.append('g').attr('class', 'nv-barsWrap');
	      gEnter.append('g').attr('class', 'nv-legendWrap');
	      gEnter.append('g').attr('class', 'nv-controlsWrap');

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        legend.width(availableWidth - controlWidth());

	        if (multibar.barColor())
	          data.forEach(function(series,i) {
	            series.color = d3.rgb('#ccc').darker(i * 1.5).toString();
	          })

	        g.select('.nv-legendWrap')
	            .datum(data)
	            .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }

	        g.select('.nv-legendWrap')
	            .attr('transform', 'translate(' + controlWidth() + ',' + (-margin.top) +')');
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Controls

	      if (showControls) {
	        var controlsData = [
	          { key: 'Grouped', disabled: multibar.stacked() },
	          { key: 'Stacked', disabled: !multibar.stacked() }
	        ];

	        controls.width(controlWidth()).color(['#444', '#444', '#444']);
	        g.select('.nv-controlsWrap')
	            .datum(controlsData)
	            .attr('transform', 'translate(0,' + (-margin.top) +')')
	            .call(controls);
	      }

	      //------------------------------------------------------------


	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


	      //------------------------------------------------------------
	      // Main Chart Component(s)

	      multibar
	        .disabled(data.map(function(series) { return series.disabled }))
	        .width(availableWidth)
	        .height(availableHeight)
	        .color(data.map(function(d,i) {
	          return d.color || color(d, i);
	        }).filter(function(d,i) { return !data[i].disabled }))


	      var barsWrap = g.select('.nv-barsWrap')
	          .datum(data.filter(function(d) { return !d.disabled }))

	      barsWrap.transition().call(multibar);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Axes

	      if (showXAxis) {
	          xAxis
	            .scale(x)
	            .ticks( availableHeight / 24 )
	            .tickSize(-availableWidth, 0);

	          g.select('.nv-x.nv-axis').transition()
	              .call(xAxis);

	          var xTicks = g.select('.nv-x.nv-axis').selectAll('g');

	          xTicks
	              .selectAll('line, text');
	      }

	      if (showYAxis) {
	          yAxis
	            .scale(y)
	            .ticks( availableWidth / 100 )
	            .tickSize( -availableHeight, 0);

	          g.select('.nv-y.nv-axis')
	              .attr('transform', 'translate(0,' + availableHeight + ')');
	          g.select('.nv-y.nv-axis').transition()
	              .call(yAxis);
	      }

	      // Zero line
	      g.select(".nv-zeroLine line")
	        .attr("x1", y(0))
	        .attr("x2", y(0))
	        .attr("y1", 0)
	        .attr("y2", -availableHeight)
	        ;

	      //------------------------------------------------------------



	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      legend.dispatch.on('stateChange', function(newState) {
	        state = newState;
	        dispatch.stateChange(state);
	        chart.update();
	      });

	      controls.dispatch.on('legendClick', function(d,i) {
	        if (!d.disabled) return;
	        controlsData = controlsData.map(function(s) {
	          s.disabled = true;
	          return s;
	        });
	        d.disabled = false;

	        switch (d.key) {
	          case 'Grouped':
	            multibar.stacked(false);
	            break;
	          case 'Stacked':
	            multibar.stacked(true);
	            break;
	        }

	        state.stacked = multibar.stacked();
	        dispatch.stateChange(state);

	        chart.update();
	      });

	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });

	      // Update chart from a state object passed to event handler
	      dispatch.on('changeState', function(e) {

	        if (typeof e.disabled !== 'undefined') {
	          data.forEach(function(series,i) {
	            series.disabled = e.disabled[i];
	          });

	          state.disabled = e.disabled;
	        }

	        if (typeof e.stacked !== 'undefined') {
	          multibar.stacked(e.stacked);
	          state.stacked = e.stacked;
	        }

	        chart.update();
	      });
	      //============================================================


	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  multibar.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  multibar.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });
	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.multibar = multibar;
	  chart.legend = legend;
	  chart.xAxis = xAxis;
	  chart.yAxis = yAxis;

	  d3.rebind(chart, multibar, 'x', 'y', 'xDomain', 'yDomain', 'xRange', 'yRange', 'forceX', 'forceY',
	    'clipEdge', 'id', 'delay', 'showValues','showBarLabels', 'valueFormat', 'stacked', 'barColor');

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    legend.color(color);
	    return chart;
	  };

	  chart.showControls = function(_) {
	    if (!arguments.length) return showControls;
	    showControls = _;
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.showXAxis = function(_) {
	    if (!arguments.length) return showXAxis;
	    showXAxis = _;
	    return chart;
	  };

	  chart.showYAxis = function(_) {
	    if (!arguments.length) return showYAxis;
	    showYAxis = _;
	    return chart;
	  };

	  chart.tooltip = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.state = function(_) {
	    if (!arguments.length) return state;
	    state = _;
	    return chart;
	  };

	  chart.defaultState = function(_) {
	    if (!arguments.length) return defaultState;
	    defaultState = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  chart.transitionDuration = function(_) {
	    if (!arguments.length) return transitionDuration;
	    transitionDuration = _;
	    return chart;
	  };
	  //============================================================


	  return chart;
	}
	nv.models.multiChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 30, right: 20, bottom: 50, left: 60},
	      color = d3.scale.category20().range(),
	      width = null, 
	      height = null,
	      showLegend = true,
	      tooltips = true,
	      tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + key + '</h3>' +
	               '<p>' +  y + ' at ' + x + '</p>'
	      },
	      x,
	      y,
	      yDomain1,
	      yDomain2
	      ; //can be accessed via chart.lines.[x/y]Scale()

	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var x = d3.scale.linear(),
	      yScale1 = d3.scale.linear(),
	      yScale2 = d3.scale.linear(),

	      lines1 = nv.models.line().yScale(yScale1),
	      lines2 = nv.models.line().yScale(yScale2),

	      bars1 = nv.models.multiBar().stacked(false).yScale(yScale1),
	      bars2 = nv.models.multiBar().stacked(false).yScale(yScale2),

	      stack1 = nv.models.stackedArea().yScale(yScale1),
	      stack2 = nv.models.stackedArea().yScale(yScale2),

	      xAxis = nv.models.axis().scale(x).orient('bottom').tickPadding(5),
	      yAxis1 = nv.models.axis().scale(yScale1).orient('left'),
	      yAxis2 = nv.models.axis().scale(yScale2).orient('right'),

	      legend = nv.models.legend().height(30),
	      dispatch = d3.dispatch('tooltipShow', 'tooltipHide');

	  var showTooltip = function(e, offsetElement) {
	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        x = xAxis.tickFormat()(lines1.x()(e.point, e.pointIndex)),
	        y = ((e.series.yAxis == 2) ? yAxis2 : yAxis1).tickFormat()(lines1.y()(e.point, e.pointIndex)),
	        content = tooltip(e.series.key, x, y, e, chart);

	    nv.tooltip.show([left, top], content, undefined, undefined, offsetElement.offsetParent);
	  };

	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      chart.update = function() { container.transition().call(chart); };
	      chart.container = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;

	      var dataLines1 = data.filter(function(d) {return !d.disabled && d.type == 'line' && d.yAxis == 1})
	      var dataLines2 = data.filter(function(d) {return !d.disabled && d.type == 'line' && d.yAxis == 2})
	      var dataBars1 = data.filter(function(d) {return !d.disabled && d.type == 'bar' && d.yAxis == 1})
	      var dataBars2 = data.filter(function(d) {return !d.disabled && d.type == 'bar' && d.yAxis == 2})
	      var dataStack1 = data.filter(function(d) {return !d.disabled && d.type == 'area' && d.yAxis == 1})
	      var dataStack2 = data.filter(function(d) {return !d.disabled && d.type == 'area' && d.yAxis == 2})

	      var series1 = data.filter(function(d) {return !d.disabled && d.yAxis == 1})
	            .map(function(d) {
	              return d.values.map(function(d,i) {
	                return { x: d.x, y: d.y }
	              })
	            })

	      var series2 = data.filter(function(d) {return !d.disabled && d.yAxis == 2})
	            .map(function(d) {
	              return d.values.map(function(d,i) {
	                return { x: d.x, y: d.y }
	              })
	            })

	      x   .domain(d3.extent(d3.merge(series1.concat(series2)), function(d) { return d.x } ))
	          .range([0, availableWidth]);

	      var wrap = container.selectAll('g.wrap.multiChart').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'wrap nvd3 multiChart').append('g');

	      gEnter.append('g').attr('class', 'x axis');
	      gEnter.append('g').attr('class', 'y1 axis');
	      gEnter.append('g').attr('class', 'y2 axis');
	      gEnter.append('g').attr('class', 'lines1Wrap');
	      gEnter.append('g').attr('class', 'lines2Wrap');
	      gEnter.append('g').attr('class', 'bars1Wrap');
	      gEnter.append('g').attr('class', 'bars2Wrap');
	      gEnter.append('g').attr('class', 'stack1Wrap');
	      gEnter.append('g').attr('class', 'stack2Wrap');
	      gEnter.append('g').attr('class', 'legendWrap');

	      var g = wrap.select('g');

	      if (showLegend) {
	        legend.width( availableWidth / 2 );

	        g.select('.legendWrap')
	            .datum(data.map(function(series) { 
	              series.originalKey = series.originalKey === undefined ? series.key : series.originalKey;
	              series.key = series.originalKey + (series.yAxis == 1 ? '' : ' (right axis)');
	              return series;
	            }))
	          .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }

	        g.select('.legendWrap')
	            .attr('transform', 'translate(' + ( availableWidth / 2 ) + ',' + (-margin.top) +')');
	      }


	      lines1
	        .width(availableWidth)
	        .height(availableHeight)
	        .interpolate("monotone")
	        .color(data.map(function(d,i) {
	          return d.color || color[i % color.length];
	        }).filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'line'}));

	      lines2
	        .width(availableWidth)
	        .height(availableHeight)
	        .interpolate("monotone")
	        .color(data.map(function(d,i) {
	          return d.color || color[i % color.length];
	        }).filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'line'}));

	      bars1
	        .width(availableWidth)
	        .height(availableHeight)
	        .color(data.map(function(d,i) {
	          return d.color || color[i % color.length];
	        }).filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'bar'}));

	      bars2
	        .width(availableWidth)
	        .height(availableHeight)
	        .color(data.map(function(d,i) {
	          return d.color || color[i % color.length];
	        }).filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'bar'}));

	      stack1
	        .width(availableWidth)
	        .height(availableHeight)
	        .color(data.map(function(d,i) {
	          return d.color || color[i % color.length];
	        }).filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 1 && data[i].type == 'area'}));

	      stack2
	        .width(availableWidth)
	        .height(availableHeight)
	        .color(data.map(function(d,i) {
	          return d.color || color[i % color.length];
	        }).filter(function(d,i) { return !data[i].disabled && data[i].yAxis == 2 && data[i].type == 'area'}));

	      g.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


	      var lines1Wrap = g.select('.lines1Wrap')
	          .datum(dataLines1)
	      var bars1Wrap = g.select('.bars1Wrap')
	          .datum(dataBars1)
	      var stack1Wrap = g.select('.stack1Wrap')
	          .datum(dataStack1)

	      var lines2Wrap = g.select('.lines2Wrap')
	          .datum(dataLines2)
	      var bars2Wrap = g.select('.bars2Wrap')
	          .datum(dataBars2)
	      var stack2Wrap = g.select('.stack2Wrap')
	          .datum(dataStack2)

	      var extraValue1 = dataStack1.length ? dataStack1.map(function(a){return a.values}).reduce(function(a,b){
	        return a.map(function(aVal,i){return {x: aVal.x, y: aVal.y + b[i].y}})
	      }).concat([{x:0, y:0}]) : []
	      var extraValue2 = dataStack2.length ? dataStack2.map(function(a){return a.values}).reduce(function(a,b){
	        return a.map(function(aVal,i){return {x: aVal.x, y: aVal.y + b[i].y}})
	      }).concat([{x:0, y:0}]) : []

	      yScale1 .domain(yDomain1 || d3.extent(d3.merge(series1).concat(extraValue1), function(d) { return d.y } ))
	              .range([0, availableHeight])

	      yScale2 .domain(yDomain2 || d3.extent(d3.merge(series2).concat(extraValue2), function(d) { return d.y } ))
	              .range([0, availableHeight])

	      lines1.yDomain(yScale1.domain())
	      bars1.yDomain(yScale1.domain())
	      stack1.yDomain(yScale1.domain())

	      lines2.yDomain(yScale2.domain())
	      bars2.yDomain(yScale2.domain())
	      stack2.yDomain(yScale2.domain())

	      if(dataStack1.length){d3.transition(stack1Wrap).call(stack1);}
	      if(dataStack2.length){d3.transition(stack2Wrap).call(stack2);}

	      if(dataBars1.length){d3.transition(bars1Wrap).call(bars1);}
	      if(dataBars2.length){d3.transition(bars2Wrap).call(bars2);}

	      if(dataLines1.length){d3.transition(lines1Wrap).call(lines1);}
	      if(dataLines2.length){d3.transition(lines2Wrap).call(lines2);}
	      


	      xAxis
	        .ticks( availableWidth / 100 )
	        .tickSize(-availableHeight, 0);

	      g.select('.x.axis')
	          .attr('transform', 'translate(0,' + availableHeight + ')');
	      d3.transition(g.select('.x.axis'))
	          .call(xAxis);

	      yAxis1
	        .ticks( availableHeight / 36 )
	        .tickSize( -availableWidth, 0);


	      d3.transition(g.select('.y1.axis'))
	          .call(yAxis1);

	      yAxis2
	        .ticks( availableHeight / 36 )
	        .tickSize( -availableWidth, 0);

	      d3.transition(g.select('.y2.axis'))
	          .call(yAxis2);

	      g.select('.y2.axis')
	          .style('opacity', series2.length ? 1 : 0)
	          .attr('transform', 'translate(' + x.range()[1] + ',0)');

	      legend.dispatch.on('stateChange', function(newState) { 
	        chart.update();
	      });
	     
	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });

	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  lines1.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  lines1.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  lines2.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  lines2.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  bars1.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  bars1.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  bars2.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  bars2.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  stack1.dispatch.on('tooltipShow', function(e) {
	    //disable tooltips when value ~= 0
	    //// TODO: consider removing points from voronoi that have 0 value instead of this hack
	    if (!Math.round(stack1.y()(e.point) * 100)) {  // 100 will not be good for very small numbers... will have to think about making this valu dynamic, based on data range
	      setTimeout(function() { d3.selectAll('.point.hover').classed('hover', false) }, 0);
	      return false;
	    }

	    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top],
	    dispatch.tooltipShow(e);
	  });

	  stack1.dispatch.on('tooltipHide', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  stack2.dispatch.on('tooltipShow', function(e) {
	    //disable tooltips when value ~= 0
	    //// TODO: consider removing points from voronoi that have 0 value instead of this hack
	    if (!Math.round(stack2.y()(e.point) * 100)) {  // 100 will not be good for very small numbers... will have to think about making this valu dynamic, based on data range
	      setTimeout(function() { d3.selectAll('.point.hover').classed('hover', false) }, 0);
	      return false;
	    }

	    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top],
	    dispatch.tooltipShow(e);
	  });

	  stack2.dispatch.on('tooltipHide', function(e) {
	    dispatch.tooltipHide(e);
	  });

	    lines1.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  lines1.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  lines2.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  lines2.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });



	  //============================================================
	  // Global getters and setters
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;
	  chart.lines1 = lines1;
	  chart.lines2 = lines2;
	  chart.bars1 = bars1;
	  chart.bars2 = bars2;
	  chart.stack1 = stack1;
	  chart.stack2 = stack2;
	  chart.xAxis = xAxis;
	  chart.yAxis1 = yAxis1;
	  chart.yAxis2 = yAxis2;
	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = _;
	    lines1.x(_);
	    bars1.x(_);
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = _;
	    lines1.y(_);
	    bars1.y(_);
	    return chart;
	  };

	  chart.yDomain1 = function(_) {
	    if (!arguments.length) return yDomain1;
	    yDomain1 = _;
	    return chart;
	  };

	  chart.yDomain2 = function(_) {
	    if (!arguments.length) return yDomain2;
	    yDomain2 = _;
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin = _;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = _;
	    legend.color(_);
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  return chart;
	}


	nv.models.ohlcBar = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 0, right: 0, bottom: 0, left: 0}
	    , width = 960
	    , height = 500
	    , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
	    , x = d3.scale.linear()
	    , y = d3.scale.linear()
	    , getX = function(d) { return d.x }
	    , getY = function(d) { return d.y }
	    , getOpen = function(d) { return d.open }
	    , getClose = function(d) { return d.close }
	    , getHigh = function(d) { return d.high }
	    , getLow = function(d) { return d.low }
	    , forceX = []
	    , forceY = []
	    , padData     = false // If true, adds half a data points width to front and back, for lining up a line chart with a bar chart
	    , clipEdge = true
	    , color = nv.utils.defaultColor()
	    , xDomain
	    , yDomain
	    , xRange
	    , yRange
	    , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout')
	    ;

	  //============================================================

	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  //TODO: store old scales for transitions

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableWidth = width - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          container = d3.select(this);


	      //------------------------------------------------------------
	      // Setup Scales

	      x   .domain(xDomain || d3.extent(data[0].values.map(getX).concat(forceX) ));

	      if (padData)
	        x.range(xRange || [availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5)  / data[0].values.length ]);
	      else
	        x.range(xRange || [0, availableWidth]);

	      y   .domain(yDomain || [
	            d3.min(data[0].values.map(getLow).concat(forceY)),
	            d3.max(data[0].values.map(getHigh).concat(forceY))
	          ])
	          .range(yRange || [availableHeight, 0]);

	      // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
	      if (x.domain()[0] === x.domain()[1])
	        x.domain()[0] ?
	            x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01])
	          : x.domain([-1,1]);

	      if (y.domain()[0] === y.domain()[1])
	        y.domain()[0] ?
	            y.domain([y.domain()[0] + y.domain()[0] * 0.01, y.domain()[1] - y.domain()[1] * 0.01])
	          : y.domain([-1,1]);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = d3.select(this).selectAll('g.nv-wrap.nv-ohlcBar').data([data[0].values]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-ohlcBar');
	      var defsEnter = wrapEnter.append('defs');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-ticks');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------


	      container
	          .on('click', function(d,i) {
	            dispatch.chartClick({
	                data: d,
	                index: i,
	                pos: d3.event,
	                id: id
	            });
	          });


	      defsEnter.append('clipPath')
	          .attr('id', 'nv-chart-clip-path-' + id)
	        .append('rect');

	      wrap.select('#nv-chart-clip-path-' + id + ' rect')
	          .attr('width', availableWidth)
	          .attr('height', availableHeight);

	      g   .attr('clip-path', clipEdge ? 'url(#nv-chart-clip-path-' + id + ')' : '');



	      var ticks = wrap.select('.nv-ticks').selectAll('.nv-tick')
	          .data(function(d) { return d });

	      ticks.exit().remove();


	      var ticksEnter = ticks.enter().append('path')
	          .attr('class', function(d,i,j) { return (getOpen(d,i) > getClose(d,i) ? 'nv-tick negative' : 'nv-tick positive') + ' nv-tick-' + j + '-' + i })
	          .attr('d', function(d,i) {
	            var w = (availableWidth / data[0].values.length) * .9;
	            return 'm0,0l0,'
	                 + (y(getOpen(d,i))
	                 - y(getHigh(d,i)))
	                 + 'l'
	                 + (-w/2)
	                 + ',0l'
	                 + (w/2)
	                 + ',0l0,'
	                 + (y(getLow(d,i)) - y(getOpen(d,i)))
	                 + 'l0,'
	                 + (y(getClose(d,i))
	                 - y(getLow(d,i)))
	                 + 'l'
	                 + (w/2)
	                 + ',0l'
	                 + (-w/2)
	                 + ',0z';
	          })
	          .attr('transform', function(d,i) { return 'translate(' + x(getX(d,i)) + ',' + y(getHigh(d,i)) + ')'; })
	          //.attr('fill', function(d,i) { return color[0]; })
	          //.attr('stroke', function(d,i) { return color[0]; })
	          //.attr('x', 0 )
	          //.attr('y', function(d,i) {  return y(Math.max(0, getY(d,i))) })
	          //.attr('height', function(d,i) { return Math.abs(y(getY(d,i)) - y(0)) })
	          .on('mouseover', function(d,i) {
	            d3.select(this).classed('hover', true);
	            dispatch.elementMouseover({
	                point: d,
	                series: data[0],
	                pos: [x(getX(d,i)), y(getY(d,i))],  // TODO: Figure out why the value appears to be shifted
	                pointIndex: i,
	                seriesIndex: 0,
	                e: d3.event
	            });

	          })
	          .on('mouseout', function(d,i) {
	                d3.select(this).classed('hover', false);
	                dispatch.elementMouseout({
	                    point: d,
	                    series: data[0],
	                    pointIndex: i,
	                    seriesIndex: 0,
	                    e: d3.event
	                });
	          })
	          .on('click', function(d,i) {
	                dispatch.elementClick({
	                    //label: d[label],
	                    value: getY(d,i),
	                    data: d,
	                    index: i,
	                    pos: [x(getX(d,i)), y(getY(d,i))],
	                    e: d3.event,
	                    id: id
	                });
	              d3.event.stopPropagation();
	          })
	          .on('dblclick', function(d,i) {
	              dispatch.elementDblClick({
	                  //label: d[label],
	                  value: getY(d,i),
	                  data: d,
	                  index: i,
	                  pos: [x(getX(d,i)), y(getY(d,i))],
	                  e: d3.event,
	                  id: id
	              });
	              d3.event.stopPropagation();
	          });

	      ticks
	          .attr('class', function(d,i,j) { return (getOpen(d,i) > getClose(d,i) ? 'nv-tick negative' : 'nv-tick positive') + ' nv-tick-' + j + '-' + i })
	      d3.transition(ticks)
	          .attr('transform', function(d,i) { return 'translate(' + x(getX(d,i)) + ',' + y(getHigh(d,i)) + ')'; })
	          .attr('d', function(d,i) {
	            var w = (availableWidth / data[0].values.length) * .9;
	            return 'm0,0l0,'
	                 + (y(getOpen(d,i))
	                 - y(getHigh(d,i)))
	                 + 'l'
	                 + (-w/2)
	                 + ',0l'
	                 + (w/2)
	                 + ',0l0,'
	                 + (y(getLow(d,i))
	                 - y(getOpen(d,i)))
	                 + 'l0,'
	                 + (y(getClose(d,i))
	                 - y(getLow(d,i)))
	                 + 'l'
	                 + (w/2)
	                 + ',0l'
	                 + (-w/2)
	                 + ',0z';
	          })
	          //.attr('width', (availableWidth / data[0].values.length) * .9 )


	      //d3.transition(ticks)
	          //.attr('y', function(d,i) {  return y(Math.max(0, getY(d,i))) })
	          //.attr('height', function(d,i) { return Math.abs(y(getY(d,i)) - y(0)) });
	          //.order();  // not sure if this makes any sense for this model

	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = _;
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = _;
	    return chart;
	  };

	  chart.open = function(_) {
	    if (!arguments.length) return getOpen;
	    getOpen = _;
	    return chart;
	  };

	  chart.close = function(_) {
	    if (!arguments.length) return getClose;
	    getClose = _;
	    return chart;
	  };

	  chart.high = function(_) {
	    if (!arguments.length) return getHigh;
	    getHigh = _;
	    return chart;
	  };

	  chart.low = function(_) {
	    if (!arguments.length) return getLow;
	    getLow = _;
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.xScale = function(_) {
	    if (!arguments.length) return x;
	    x = _;
	    return chart;
	  };

	  chart.yScale = function(_) {
	    if (!arguments.length) return y;
	    y = _;
	    return chart;
	  };

	  chart.xDomain = function(_) {
	    if (!arguments.length) return xDomain;
	    xDomain = _;
	    return chart;
	  };

	  chart.yDomain = function(_) {
	    if (!arguments.length) return yDomain;
	    yDomain = _;
	    return chart;
	  };

	  chart.xRange = function(_) {
	    if (!arguments.length) return xRange;
	    xRange = _;
	    return chart;
	  };

	  chart.yRange = function(_) {
	    if (!arguments.length) return yRange;
	    yRange = _;
	    return chart;
	  };

	  chart.forceX = function(_) {
	    if (!arguments.length) return forceX;
	    forceX = _;
	    return chart;
	  };

	  chart.forceY = function(_) {
	    if (!arguments.length) return forceY;
	    forceY = _;
	    return chart;
	  };

	  chart.padData = function(_) {
	    if (!arguments.length) return padData;
	    padData = _;
	    return chart;
	  };

	  chart.clipEdge = function(_) {
	    if (!arguments.length) return clipEdge;
	    clipEdge = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };

	  chart.id = function(_) {
	    if (!arguments.length) return id;
	    id = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}
	nv.models.pie = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 0, right: 0, bottom: 0, left: 0}
	    , width = 500
	    , height = 500
	    , getX = function(d) { return d.x }
	    , getY = function(d) { return d.y }
	    , getDescription = function(d) { return d.description }
	    , id = Math.floor(Math.random() * 10000) //Create semi-unique ID in case user doesn't select one
	    , color = nv.utils.defaultColor()
	    , valueFormat = d3.format(',.2f')
	    , showLabels = true
	    , pieLabelsOutside = true
	    , donutLabelsOutside = false
	    , labelType = "key"
	    , labelThreshold = .02 //if slice percentage is under this, don't show label
	    , donut = false
	    , labelSunbeamLayout = false
	    , startAngle = false
	    , endAngle = false
	    , donutRatio = 0.5
	    , dispatch = d3.dispatch('chartClick', 'elementClick', 'elementDblClick', 'elementMouseover', 'elementMouseout')
	    ;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableWidth = width - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          radius = Math.min(availableWidth, availableHeight) / 2,
	          arcRadius = radius-(radius / 5),
	          container = d3.select(this);


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      //var wrap = container.selectAll('.nv-wrap.nv-pie').data([data]);
	      var wrap = container.selectAll('.nv-wrap.nv-pie').data(data);
	      var wrapEnter = wrap.enter().append('g').attr('class','nvd3 nv-wrap nv-pie nv-chart-' + id);
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-pie');
	      gEnter.append('g').attr('class', 'nv-pieLabels');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
	      g.select('.nv-pie').attr('transform', 'translate(' + availableWidth / 2 + ',' + availableHeight / 2 + ')');
	      g.select('.nv-pieLabels').attr('transform', 'translate(' + availableWidth / 2 + ',' + availableHeight / 2 + ')');

	      //------------------------------------------------------------


	      container
	          .on('click', function(d,i) {
	              dispatch.chartClick({
	                  data: d,
	                  index: i,
	                  pos: d3.event,
	                  id: id
	              });
	          });


	      var arc = d3.svg.arc()
	                  .outerRadius(arcRadius);

	      if (startAngle) arc.startAngle(startAngle)
	      if (endAngle) arc.endAngle(endAngle);
	      if (donut) arc.innerRadius(radius * donutRatio);

	      // Setup the Pie chart and choose the data element
	      var pie = d3.layout.pie()
	          .sort(null)
	          .value(function(d) { return d.disabled ? 0 : getY(d) });

	      var slices = wrap.select('.nv-pie').selectAll('.nv-slice')
	          .data(pie);

	      var pieLabels = wrap.select('.nv-pieLabels').selectAll('.nv-label')
	          .data(pie);

	      slices.exit().remove();
	      pieLabels.exit().remove();

	      var ae = slices.enter().append('g')
	              .attr('class', 'nv-slice')
	              .on('mouseover', function(d,i){
	                d3.select(this).classed('hover', true);
	                dispatch.elementMouseover({
	                    label: getX(d.data),
	                    value: getY(d.data),
	                    point: d.data,
	                    pointIndex: i,
	                    pos: [d3.event.pageX, d3.event.pageY],
	                    id: id
	                });
	              })
	              .on('mouseout', function(d,i){
	                d3.select(this).classed('hover', false);
	                dispatch.elementMouseout({
	                    label: getX(d.data),
	                    value: getY(d.data),
	                    point: d.data,
	                    index: i,
	                    id: id
	                });
	              })
	              .on('click', function(d,i) {
	                dispatch.elementClick({
	                    label: getX(d.data),
	                    value: getY(d.data),
	                    point: d.data,
	                    index: i,
	                    pos: d3.event,
	                    id: id
	                });
	                d3.event.stopPropagation();
	              })
	              .on('dblclick', function(d,i) {
	                dispatch.elementDblClick({
	                    label: getX(d.data),
	                    value: getY(d.data),
	                    point: d.data,
	                    index: i,
	                    pos: d3.event,
	                    id: id
	                });
	                d3.event.stopPropagation();
	              });

	        slices
	            .attr('fill', function(d,i) { return color(d, i); })
	            .attr('stroke', function(d,i) { return color(d, i); });

	        var paths = ae.append('path')
	            .each(function(d) { this._current = d; });
	            //.attr('d', arc);

	        slices.select('path')
	          .transition()
	            .attr('d', arc)
	            .attrTween('d', arcTween);

	        if (showLabels) {
	          // This does the normal label
	          var labelsArc = d3.svg.arc().innerRadius(0);

	          if (pieLabelsOutside){ labelsArc = arc; }

	          if (donutLabelsOutside) { labelsArc = d3.svg.arc().outerRadius(arc.outerRadius()); }

	          pieLabels.enter().append("g").classed("nv-label",true)
	            .each(function(d,i) {
	                var group = d3.select(this);

	                group
	                  .attr('transform', function(d) {
	                       if (labelSunbeamLayout) {
	                         d.outerRadius = arcRadius + 10; // Set Outer Coordinate
	                         d.innerRadius = arcRadius + 15; // Set Inner Coordinate
	                         var rotateAngle = (d.startAngle + d.endAngle) / 2 * (180 / Math.PI);
	                         if ((d.startAngle+d.endAngle)/2 < Math.PI) {
	                           rotateAngle -= 90;
	                         } else {
	                           rotateAngle += 90;
	                         }
	                         return 'translate(' + labelsArc.centroid(d) + ') rotate(' + rotateAngle + ')';
	                       } else {
	                         d.outerRadius = radius + 10; // Set Outer Coordinate
	                         d.innerRadius = radius + 15; // Set Inner Coordinate
	                         return 'translate(' + labelsArc.centroid(d) + ')'
	                       }
	                  });

	                group.append('rect')
	                    .style('stroke', '#fff')
	                    .style('fill', '#fff')
	                    .attr("rx", 3)
	                    .attr("ry", 3);

	                group.append('text')
	                    .style('text-anchor', labelSunbeamLayout ? ((d.startAngle + d.endAngle) / 2 < Math.PI ? 'start' : 'end') : 'middle') //center the text on it's origin or begin/end if orthogonal aligned
	                    .style('fill', '#000')

	            });

	          var labelLocationHash = {};
	          var avgHeight = 14;
	          var avgWidth = 140;
	          var createHashKey = function(coordinates) {

	              return Math.floor(coordinates[0]/avgWidth) * avgWidth + ',' + Math.floor(coordinates[1]/avgHeight) * avgHeight;
	          };
	          pieLabels.transition()
	                .attr('transform', function(d) {
	                  if (labelSunbeamLayout) {
	                      d.outerRadius = arcRadius + 10; // Set Outer Coordinate
	                      d.innerRadius = arcRadius + 15; // Set Inner Coordinate
	                      var rotateAngle = (d.startAngle + d.endAngle) / 2 * (180 / Math.PI);
	                      if ((d.startAngle+d.endAngle)/2 < Math.PI) {
	                        rotateAngle -= 90;
	                      } else {
	                        rotateAngle += 90;
	                      }
	                      return 'translate(' + labelsArc.centroid(d) + ') rotate(' + rotateAngle + ')';
	                    } else {
	                      d.outerRadius = radius + 10; // Set Outer Coordinate
	                      d.innerRadius = radius + 15; // Set Inner Coordinate

	                      /*
	                      Overlapping pie labels are not good. What this attempts to do is, prevent overlapping.
	                      Each label location is hashed, and if a hash collision occurs, we assume an overlap.
	                      Adjust the label's y-position to remove the overlap.
	                      */
	                      var center = labelsArc.centroid(d);
	                      var hashKey = createHashKey(center);
	                      if (labelLocationHash[hashKey]) {
	                        center[1] -= avgHeight;
	                      }
	                      labelLocationHash[createHashKey(center)] = true;
	                      return 'translate(' + center + ')'
	                    }
	                });
	          pieLabels.select(".nv-label text")
	                .style('text-anchor', labelSunbeamLayout ? ((d.startAngle + d.endAngle) / 2 < Math.PI ? 'start' : 'end') : 'middle') //center the text on it's origin or begin/end if orthogonal aligned
	                .text(function(d, i) {
	                  var percent = (d.endAngle - d.startAngle) / (2 * Math.PI);
	                  var labelTypes = {
	                    "key" : getX(d.data),
	                    "value": getY(d.data),
	                    "percent": d3.format('%')(percent)
	                  };
	                  return (d.value && percent > labelThreshold) ? labelTypes[labelType] : '';
	                });
	        }


	        // Computes the angle of an arc, converting from radians to degrees.
	        function angle(d) {
	          var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
	          return a > 90 ? a - 180 : a;
	        }

	        function arcTween(a) {
	          a.endAngle = isNaN(a.endAngle) ? 0 : a.endAngle;
	          a.startAngle = isNaN(a.startAngle) ? 0 : a.startAngle;
	          if (!donut) a.innerRadius = 0;
	          var i = d3.interpolate(this._current, a);
	          this._current = i(0);
	          return function(t) {
	            return arc(i(t));
	          };
	        }

	        function tweenPie(b) {
	          b.innerRadius = 0;
	          var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	          return function(t) {
	              return arc(i(t));
	          };
	        }

	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;
	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.values = function(_) {
	    nv.log("pie.values() is no longer supported.");
	    return chart;
	  };

	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = _;
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = d3.functor(_);
	    return chart;
	  };

	  chart.description = function(_) {
	    if (!arguments.length) return getDescription;
	    getDescription = _;
	    return chart;
	  };

	  chart.showLabels = function(_) {
	    if (!arguments.length) return showLabels;
	    showLabels = _;
	    return chart;
	  };

	  chart.labelSunbeamLayout = function(_) {
	    if (!arguments.length) return labelSunbeamLayout;
	    labelSunbeamLayout = _;
	    return chart;
	  };

	  chart.donutLabelsOutside = function(_) {
	    if (!arguments.length) return donutLabelsOutside;
	    donutLabelsOutside = _;
	    return chart;
	  };

	  chart.pieLabelsOutside = function(_) {
	    if (!arguments.length) return pieLabelsOutside;
	    pieLabelsOutside = _;
	    return chart;
	  };

	  chart.labelType = function(_) {
	    if (!arguments.length) return labelType;
	    labelType = _;
	    labelType = labelType || "key";
	    return chart;
	  };

	  chart.donut = function(_) {
	    if (!arguments.length) return donut;
	    donut = _;
	    return chart;
	  };

	  chart.donutRatio = function(_) {
	    if (!arguments.length) return donutRatio;
	    donutRatio = _;
	    return chart;
	  };

	  chart.startAngle = function(_) {
	    if (!arguments.length) return startAngle;
	    startAngle = _;
	    return chart;
	  };

	  chart.endAngle = function(_) {
	    if (!arguments.length) return endAngle;
	    endAngle = _;
	    return chart;
	  };

	  chart.id = function(_) {
	    if (!arguments.length) return id;
	    id = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };

	  chart.valueFormat = function(_) {
	    if (!arguments.length) return valueFormat;
	    valueFormat = _;
	    return chart;
	  };

	  chart.labelThreshold = function(_) {
	    if (!arguments.length) return labelThreshold;
	    labelThreshold = _;
	    return chart;
	  };
	  //============================================================


	  return chart;
	}
	nv.models.pieChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var pie = nv.models.pie()
	    , legend = nv.models.legend()
	    ;

	  var margin = {top: 30, right: 20, bottom: 20, left: 20}
	    , width = null
	    , height = null
	    , showLegend = true
	    , color = nv.utils.defaultColor()
	    , tooltips = true
	    , tooltip = function(key, y, e, graph) {
	        return '<h3>' + key + '</h3>' +
	               '<p>' +  y + '</p>'
	      }
	    , state = {}
	    , defaultState = null
	    , noData = "No Data Available."
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var showTooltip = function(e, offsetElement) {
	    var tooltipLabel = pie.description()(e.point) || pie.x()(e.point)
	    var left = e.pos[0] + ( (offsetElement && offsetElement.offsetLeft) || 0 ),
	        top = e.pos[1] + ( (offsetElement && offsetElement.offsetTop) || 0),
	        y = pie.valueFormat()(pie.y()(e.point)),
	        content = tooltip(tooltipLabel, y, e, chart);

	    nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
	  };

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;

	      chart.update = function() { container.transition().call(chart); };
	      chart.container = this;

	      //set state.disabled
	      state.disabled = data.map(function(d) { return !!d.disabled });

	      if (!defaultState) {
	        var key;
	        defaultState = {};
	        for (key in state) {
	          if (state[key] instanceof Array)
	            defaultState[key] = state[key].slice(0);
	          else
	            defaultState[key] = state[key];
	        }
	      }

	      //------------------------------------------------------------
	      // Display No Data message if there's nothing to show.

	      if (!data || !data.length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-pieChart').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-pieChart').append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-pieWrap');
	      gEnter.append('g').attr('class', 'nv-legendWrap');

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        legend
	          .width( availableWidth )
	          .key(pie.x());

	        wrap.select('.nv-legendWrap')
	            .datum(data)
	            .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }

	        wrap.select('.nv-legendWrap')
	            .attr('transform', 'translate(0,' + (-margin.top) +')');
	      }

	      //------------------------------------------------------------


	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


	      //------------------------------------------------------------
	      // Main Chart Component(s)

	      pie
	        .width(availableWidth)
	        .height(availableHeight);


	      var pieWrap = g.select('.nv-pieWrap')
	          .datum([data]);

	      d3.transition(pieWrap).call(pie);

	      //------------------------------------------------------------


	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      legend.dispatch.on('stateChange', function(newState) {
	        state = newState;
	        dispatch.stateChange(state);
	        chart.update();
	      });

	      pie.dispatch.on('elementMouseout.tooltip', function(e) {
	        dispatch.tooltipHide(e);
	      });

	      // Update chart from a state object passed to event handler
	      dispatch.on('changeState', function(e) {

	        if (typeof e.disabled !== 'undefined') {
	          data.forEach(function(series,i) {
	            series.disabled = e.disabled[i];
	          });

	          state.disabled = e.disabled;
	        }

	        chart.update();
	      });

	      //============================================================


	    });

	    return chart;
	  }

	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  pie.dispatch.on('elementMouseover.tooltip', function(e) {
	    e.pos = [e.pos[0] +  margin.left, e.pos[1] + margin.top];
	    dispatch.tooltipShow(e);
	  });

	  dispatch.on('tooltipShow', function(e) {
	    if (tooltips) showTooltip(e);
	  });

	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.legend = legend;
	  chart.dispatch = dispatch;
	  chart.pie = pie;

	  d3.rebind(chart, pie, 'valueFormat', 'values', 'x', 'y', 'description', 'id', 'showLabels', 'donutLabelsOutside', 'pieLabelsOutside', 'labelType', 'donut', 'donutRatio', 'labelThreshold');
	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    legend.color(color);
	    pie.color(color);
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.state = function(_) {
	    if (!arguments.length) return state;
	    state = _;
	    return chart;
	  };

	  chart.defaultState = function(_) {
	    if (!arguments.length) return defaultState;
	    defaultState = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.scatter = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin       = {top: 0, right: 0, bottom: 0, left: 0}
	    , width        = 960
	    , height       = 500
	    , color        = nv.utils.defaultColor() // chooses color
	    , id           = Math.floor(Math.random() * 100000) //Create semi-unique ID incase user doesn't select one
	    , x            = d3.scale.linear()
	    , y            = d3.scale.linear()
	    , z            = d3.scale.linear() //linear because d3.svg.shape.size is treated as area
	    , getX         = function(d) { return d.x } // accessor to get the x value
	    , getY         = function(d) { return d.y } // accessor to get the y value
	    , getSize      = function(d) { return d.size || 1} // accessor to get the point size
	    , getShape     = function(d) { return d.shape || 'circle' } // accessor to get point shape
	    , onlyCircles  = true // Set to false to use shapes
	    , forceX       = [] // List of numbers to Force into the X scale (ie. 0, or a max / min, etc.)
	    , forceY       = [] // List of numbers to Force into the Y scale
	    , forceSize    = [] // List of numbers to Force into the Size scale
	    , interactive  = true // If true, plots a voronoi overlay for advanced point intersection
	    , pointKey     = null
	    , pointActive  = function(d) { return !d.notActive } // any points that return false will be filtered out
	    , padData      = false // If true, adds half a data points width to front and back, for lining up a line chart with a bar chart
	    , padDataOuter = .1 //outerPadding to imitate ordinal scale outer padding
	    , clipEdge     = false // if true, masks points within x and y scale
	    , clipVoronoi  = true // if true, masks each point with a circle... can turn off to slightly increase performance
	    , clipRadius   = function() { return 25 } // function to get the radius for voronoi point clips
	    , xDomain      = null // Override x domain (skips the calculation from data)
	    , yDomain      = null // Override y domain
	    , xRange       = null // Override x range
	    , yRange       = null // Override y range
	    , sizeDomain   = null // Override point size domain
	    , sizeRange    = null
	    , singlePoint  = false
	    , dispatch     = d3.dispatch('elementClick', 'elementMouseover', 'elementMouseout')
	    , useVoronoi   = true
	    ;

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var x0, y0, z0 // used to store previous scales
	    , timeoutID
	    , needsUpdate = false // Flag for when the points are visually updating, but the interactive layer is behind, to disable tooltips
	    ;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableWidth = width - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          container = d3.select(this);

	      //add series index to each data point for reference
	      data.forEach(function(series, i) {
	        series.values.forEach(function(point) {
	          point.series = i;
	        });
	      });

	      //------------------------------------------------------------
	      // Setup Scales

	      // remap and flatten the data for use in calculating the scales' domains
	      var seriesData = (xDomain && yDomain && sizeDomain) ? [] : // if we know xDomain and yDomain and sizeDomain, no need to calculate.... if Size is constant remember to set sizeDomain to speed up performance
	            d3.merge(
	              data.map(function(d) {
	                return d.values.map(function(d,i) {
	                  return { x: getX(d,i), y: getY(d,i), size: getSize(d,i) }
	                })
	              })
	            );

	      x   .domain(xDomain || d3.extent(seriesData.map(function(d) { return d.x; }).concat(forceX)))

	      if (padData && data[0])
	        x.range(xRange || [(availableWidth * padDataOuter +  availableWidth) / (2 *data[0].values.length), availableWidth - availableWidth * (1 + padDataOuter) / (2 * data[0].values.length)  ]);
	        //x.range([availableWidth * .5 / data[0].values.length, availableWidth * (data[0].values.length - .5)  / data[0].values.length ]);
	      else
	        x.range(xRange || [0, availableWidth]);

	      y   .domain(yDomain || d3.extent(seriesData.map(function(d) { return d.y }).concat(forceY)))
	          .range(yRange || [availableHeight, 0]);

	      z   .domain(sizeDomain || d3.extent(seriesData.map(function(d) { return d.size }).concat(forceSize)))
	          .range(sizeRange || [16, 256]);

	      // If scale's domain don't have a range, slightly adjust to make one... so a chart can show a single data point
	      if (x.domain()[0] === x.domain()[1] || y.domain()[0] === y.domain()[1]) singlePoint = true;
	      if (x.domain()[0] === x.domain()[1])
	        x.domain()[0] ?
	            x.domain([x.domain()[0] - x.domain()[0] * 0.01, x.domain()[1] + x.domain()[1] * 0.01])
	          : x.domain([-1,1]);

	      if (y.domain()[0] === y.domain()[1])
	        y.domain()[0] ?
	            y.domain([y.domain()[0] - y.domain()[0] * 0.01, y.domain()[1] + y.domain()[1] * 0.01])
	          : y.domain([-1,1]);

	      if ( isNaN(x.domain()[0])) {
	          x.domain([-1,1]);
	      }

	      if ( isNaN(y.domain()[0])) {
	          y.domain([-1,1]);
	      }


	      x0 = x0 || x;
	      y0 = y0 || y;
	      z0 = z0 || z;

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-scatter').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-scatter nv-chart-' + id + (singlePoint ? ' nv-single-point' : ''));
	      var defsEnter = wrapEnter.append('defs');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-groups');
	      gEnter.append('g').attr('class', 'nv-point-paths');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------


	      defsEnter.append('clipPath')
	          .attr('id', 'nv-edge-clip-' + id)
	        .append('rect');

	      wrap.select('#nv-edge-clip-' + id + ' rect')
	          .attr('width', availableWidth)
	          .attr('height', (availableHeight > 0) ? availableHeight : 0);

	      g   .attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');


	      function updateInteractiveLayer() {

	        if (!interactive) return false;

	        var eventElements;

	        var vertices = d3.merge(data.map(function(group, groupIndex) {
	            return group.values
	              .map(function(point, pointIndex) {
	                // *Adding noise to make duplicates very unlikely
	                // *Injecting series and point index for reference
	                /* *Adding a 'jitter' to the points, because there's an issue in d3.geom.voronoi.
	                */
	                var pX = getX(point,pointIndex);
	                var pY = getY(point,pointIndex);

	                return [x(pX)+ Math.random() * 1e-7,
	                        y(pY)+ Math.random() * 1e-7,
	                        groupIndex,
	                        pointIndex, point]; //temp hack to add noise untill I think of a better way so there are no duplicates
	              })
	              .filter(function(pointArray, pointIndex) {
	                return pointActive(pointArray[4], pointIndex); // Issue #237.. move filter to after map, so pointIndex is correct!
	              })
	          })
	        );



	        //inject series and point index for reference into voronoi
	        if (useVoronoi === true) {

	          if (clipVoronoi) {
	            var pointClipsEnter = wrap.select('defs').selectAll('.nv-point-clips')
	                .data([id])
	              .enter();

	            pointClipsEnter.append('clipPath')
	                  .attr('class', 'nv-point-clips')
	                  .attr('id', 'nv-points-clip-' + id);

	            var pointClips = wrap.select('#nv-points-clip-' + id).selectAll('circle')
	                .data(vertices);
	            pointClips.enter().append('circle')
	                .attr('r', clipRadius);
	            pointClips.exit().remove();
	            pointClips
	                .attr('cx', function(d) { return d[0] })
	                .attr('cy', function(d) { return d[1] });

	            wrap.select('.nv-point-paths')
	                .attr('clip-path', 'url(#nv-points-clip-' + id + ')');
	          }


	          if(vertices.length) {
	            // Issue #283 - Adding 2 dummy points to the voronoi b/c voronoi requires min 3 points to work
	            vertices.push([x.range()[0] - 20, y.range()[0] - 20, null, null]);
	            vertices.push([x.range()[1] + 20, y.range()[1] + 20, null, null]);
	            vertices.push([x.range()[0] - 20, y.range()[0] + 20, null, null]);
	            vertices.push([x.range()[1] + 20, y.range()[1] - 20, null, null]);
	          }

	          var bounds = d3.geom.polygon([
	              [-10,-10],
	              [-10,height + 10],
	              [width + 10,height + 10],
	              [width + 10,-10]
	          ]);

	          var voronoi = d3.geom.voronoi(vertices).map(function(d, i) {
	              return {
	                'data': bounds.clip(d),
	                'series': vertices[i][2],
	                'point': vertices[i][3]
	              }
	            });


	          var pointPaths = wrap.select('.nv-point-paths').selectAll('path')
	              .data(voronoi);
	          pointPaths.enter().append('path')
	              .attr('class', function(d,i) { return 'nv-path-'+i; });
	          pointPaths.exit().remove();
	          pointPaths
	              .attr('d', function(d) {
	                if (d.data.length === 0)
	                    return 'M 0 0'
	                else
	                    return 'M' + d.data.join('L') + 'Z';
	              });

	          var mouseEventCallback = function(d,mDispatch) {
	                if (needsUpdate) return 0;
	                var series = data[d.series];
	                if (typeof series === 'undefined') return;

	                var point  = series.values[d.point];

	                mDispatch({
	                  point: point,
	                  series: series,
	                  pos: [x(getX(point, d.point)) + margin.left, y(getY(point, d.point)) + margin.top],
	                  seriesIndex: d.series,
	                  pointIndex: d.point
	                });
	          };

	          pointPaths
	              .on('click', function(d) {
	                mouseEventCallback(d, dispatch.elementClick);
	              })
	              .on('mouseover', function(d) {
	                mouseEventCallback(d, dispatch.elementMouseover);
	              })
	              .on('mouseout', function(d, i) {
	                mouseEventCallback(d, dispatch.elementMouseout);
	              });


	        } else {
	          /*
	          // bring data in form needed for click handlers
	          var dataWithPoints = vertices.map(function(d, i) {
	              return {
	                'data': d,
	                'series': vertices[i][2],
	                'point': vertices[i][3]
	              }
	            });
	           */

	          // add event handlers to points instead voronoi paths
	          wrap.select('.nv-groups').selectAll('.nv-group')
	            .selectAll('.nv-point')
	              //.data(dataWithPoints)
	              //.style('pointer-events', 'auto') // recativate events, disabled by css
	              .on('click', function(d,i) {
	                //nv.log('test', d, i);
	                if (needsUpdate || !data[d.series]) return 0; //check if this is a dummy point
	                var series = data[d.series],
	                    point  = series.values[i];

	                dispatch.elementClick({
	                  point: point,
	                  series: series,
	                  pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
	                  seriesIndex: d.series,
	                  pointIndex: i
	                });
	              })
	              .on('mouseover', function(d,i) {
	                if (needsUpdate || !data[d.series]) return 0; //check if this is a dummy point
	                var series = data[d.series],
	                    point  = series.values[i];

	                dispatch.elementMouseover({
	                  point: point,
	                  series: series,
	                  pos: [x(getX(point, i)) + margin.left, y(getY(point, i)) + margin.top],
	                  seriesIndex: d.series,
	                  pointIndex: i
	                });
	              })
	              .on('mouseout', function(d,i) {
	                if (needsUpdate || !data[d.series]) return 0; //check if this is a dummy point
	                var series = data[d.series],
	                    point  = series.values[i];

	                dispatch.elementMouseout({
	                  point: point,
	                  series: series,
	                  seriesIndex: d.series,
	                  pointIndex: i
	                });
	              });
	          }

	          needsUpdate = false;
	      }

	      needsUpdate = true;

	      var groups = wrap.select('.nv-groups').selectAll('.nv-group')
	          .data(function(d) { return d }, function(d) { return d.key });
	      groups.enter().append('g')
	          .style('stroke-opacity', 1e-6)
	          .style('fill-opacity', 1e-6);
	      groups.exit()
	          .remove();
	      groups
	          .attr('class', function(d,i) { return 'nv-group nv-series-' + i })
	          .classed('hover', function(d) { return d.hover });
	      groups
	          .transition()
	          .style('fill', function(d,i) { return color(d, i) })
	          .style('stroke', function(d,i) { return color(d, i) })
	          .style('stroke-opacity', 1)
	          .style('fill-opacity', .5);


	      if (onlyCircles) {

	        var points = groups.selectAll('circle.nv-point')
	            .data(function(d) { return d.values }, pointKey);
	        points.enter().append('circle')
	            .style('fill', function (d,i) { return d.color })
	            .style('stroke', function (d,i) { return d.color })
	            .attr('cx', function(d,i) { return nv.utils.NaNtoZero(x0(getX(d,i))) })
	            .attr('cy', function(d,i) { return nv.utils.NaNtoZero(y0(getY(d,i))) })
	            .attr('r', function(d,i) { return Math.sqrt(z(getSize(d,i))/Math.PI) });
	        points.exit().remove();
	        groups.exit().selectAll('path.nv-point').transition()
	            .attr('cx', function(d,i) { return nv.utils.NaNtoZero(x(getX(d,i))) })
	            .attr('cy', function(d,i) { return nv.utils.NaNtoZero(y(getY(d,i))) })
	            .remove();
	        points.each(function(d,i) {
	          d3.select(this)
	            .classed('nv-point', true)
	            .classed('nv-point-' + i, true)
	            .classed('hover',false)
	            ;
	        });
	        points.transition()
	            .attr('cx', function(d,i) { return nv.utils.NaNtoZero(x(getX(d,i))) })
	            .attr('cy', function(d,i) { return nv.utils.NaNtoZero(y(getY(d,i))) })
	            .attr('r', function(d,i) { return Math.sqrt(z(getSize(d,i))/Math.PI) });

	      } else {

	        var points = groups.selectAll('path.nv-point')
	            .data(function(d) { return d.values });
	        points.enter().append('path')
	            .style('fill', function (d,i) { return d.color })
	            .style('stroke', function (d,i) { return d.color })
	            .attr('transform', function(d,i) {
	              return 'translate(' + x0(getX(d,i)) + ',' + y0(getY(d,i)) + ')'
	            })
	            .attr('d',
	              d3.svg.symbol()
	                .type(getShape)
	                .size(function(d,i) { return z(getSize(d,i)) })
	            );
	        points.exit().remove();
	        groups.exit().selectAll('path.nv-point')
	            .transition()
	            .attr('transform', function(d,i) {
	              return 'translate(' + x(getX(d,i)) + ',' + y(getY(d,i)) + ')'
	            })
	            .remove();
	        points.each(function(d,i) {
	          d3.select(this)
	            .classed('nv-point', true)
	            .classed('nv-point-' + i, true)
	            .classed('hover',false)
	            ;
	        });
	        points.transition()
	            .attr('transform', function(d,i) {
	              //nv.log(d,i,getX(d,i), x(getX(d,i)));
	              return 'translate(' + x(getX(d,i)) + ',' + y(getY(d,i)) + ')'
	            })
	            .attr('d',
	              d3.svg.symbol()
	                .type(getShape)
	                .size(function(d,i) { return z(getSize(d,i)) })
	            );
	      }


	      // Delay updating the invisible interactive layer for smoother animation
	      clearTimeout(timeoutID); // stop repeat calls to updateInteractiveLayer
	      timeoutID = setTimeout(updateInteractiveLayer, 300);
	      //updateInteractiveLayer();

	      //store old scales for use in transitions on update
	      x0 = x.copy();
	      y0 = y.copy();
	      z0 = z.copy();

	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------
	  chart.clearHighlights = function() {
	      //Remove the 'hover' class from all highlighted points.
	      d3.selectAll(".nv-chart-" + id + " .nv-point.hover").classed("hover",false);
	  };

	  chart.highlightPoint = function(seriesIndex,pointIndex,isHoverOver) {
	      d3.select(".nv-chart-" + id + " .nv-series-" + seriesIndex + " .nv-point-" + pointIndex)
	          .classed("hover",isHoverOver);
	  };


	  dispatch.on('elementMouseover.point', function(d) {
	     if (interactive) chart.highlightPoint(d.seriesIndex,d.pointIndex,true);
	  });

	  dispatch.on('elementMouseout.point', function(d) {
	     if (interactive) chart.highlightPoint(d.seriesIndex,d.pointIndex,false);
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;
	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = d3.functor(_);
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = d3.functor(_);
	    return chart;
	  };

	  chart.size = function(_) {
	    if (!arguments.length) return getSize;
	    getSize = d3.functor(_);
	    return chart;
	  };

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.xScale = function(_) {
	    if (!arguments.length) return x;
	    x = _;
	    return chart;
	  };

	  chart.yScale = function(_) {
	    if (!arguments.length) return y;
	    y = _;
	    return chart;
	  };

	  chart.zScale = function(_) {
	    if (!arguments.length) return z;
	    z = _;
	    return chart;
	  };

	  chart.xDomain = function(_) {
	    if (!arguments.length) return xDomain;
	    xDomain = _;
	    return chart;
	  };

	  chart.yDomain = function(_) {
	    if (!arguments.length) return yDomain;
	    yDomain = _;
	    return chart;
	  };

	  chart.sizeDomain = function(_) {
	    if (!arguments.length) return sizeDomain;
	    sizeDomain = _;
	    return chart;
	  };

	  chart.xRange = function(_) {
	    if (!arguments.length) return xRange;
	    xRange = _;
	    return chart;
	  };

	  chart.yRange = function(_) {
	    if (!arguments.length) return yRange;
	    yRange = _;
	    return chart;
	  };

	  chart.sizeRange = function(_) {
	    if (!arguments.length) return sizeRange;
	    sizeRange = _;
	    return chart;
	  };

	  chart.forceX = function(_) {
	    if (!arguments.length) return forceX;
	    forceX = _;
	    return chart;
	  };

	  chart.forceY = function(_) {
	    if (!arguments.length) return forceY;
	    forceY = _;
	    return chart;
	  };

	  chart.forceSize = function(_) {
	    if (!arguments.length) return forceSize;
	    forceSize = _;
	    return chart;
	  };

	  chart.interactive = function(_) {
	    if (!arguments.length) return interactive;
	    interactive = _;
	    return chart;
	  };

	  chart.pointKey = function(_) {
	    if (!arguments.length) return pointKey;
	    pointKey = _;
	    return chart;
	  };

	  chart.pointActive = function(_) {
	    if (!arguments.length) return pointActive;
	    pointActive = _;
	    return chart;
	  };

	  chart.padData = function(_) {
	    if (!arguments.length) return padData;
	    padData = _;
	    return chart;
	  };

	  chart.padDataOuter = function(_) {
	    if (!arguments.length) return padDataOuter;
	    padDataOuter = _;
	    return chart;
	  };

	  chart.clipEdge = function(_) {
	    if (!arguments.length) return clipEdge;
	    clipEdge = _;
	    return chart;
	  };

	  chart.clipVoronoi= function(_) {
	    if (!arguments.length) return clipVoronoi;
	    clipVoronoi = _;
	    return chart;
	  };

	  chart.useVoronoi= function(_) {
	    if (!arguments.length) return useVoronoi;
	    useVoronoi = _;
	    if (useVoronoi === false) {
	        clipVoronoi = false;
	    }
	    return chart;
	  };

	  chart.clipRadius = function(_) {
	    if (!arguments.length) return clipRadius;
	    clipRadius = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };

	  chart.shape = function(_) {
	    if (!arguments.length) return getShape;
	    getShape = _;
	    return chart;
	  };

	  chart.onlyCircles = function(_) {
	    if (!arguments.length) return onlyCircles;
	    onlyCircles = _;
	    return chart;
	  };

	  chart.id = function(_) {
	    if (!arguments.length) return id;
	    id = _;
	    return chart;
	  };

	  chart.singlePoint = function(_) {
	    if (!arguments.length) return singlePoint;
	    singlePoint = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}
	nv.models.scatterChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var scatter      = nv.models.scatter()
	    , xAxis        = nv.models.axis()
	    , yAxis        = nv.models.axis()
	    , legend       = nv.models.legend()
	    , controls     = nv.models.legend()
	    , distX        = nv.models.distribution()
	    , distY        = nv.models.distribution()
	    ;

	  var margin       = {top: 30, right: 20, bottom: 50, left: 75}
	    , width        = null
	    , height       = null
	    , color        = nv.utils.defaultColor()
	    , x            = d3.fisheye ? d3.fisheye.scale(d3.scale.linear).distortion(0) : scatter.xScale()
	    , y            = d3.fisheye ? d3.fisheye.scale(d3.scale.linear).distortion(0) : scatter.yScale()
	    , xPadding     = 0
	    , yPadding     = 0
	    , showDistX    = false
	    , showDistY    = false
	    , showLegend   = true
	    , showXAxis    = true
	    , showYAxis    = true
	    , rightAlignYAxis = false
	    , showControls = !!d3.fisheye
	    , fisheye      = 0
	    , pauseFisheye = false
	    , tooltips     = true
	    , tooltipX     = function(key, x, y) { return '<strong>' + x + '</strong>' }
	    , tooltipY     = function(key, x, y) { return '<strong>' + y + '</strong>' }
	    , tooltip      = null
	    , state = {}
	    , defaultState = null
	    , dispatch     = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
	    , noData       = "No Data Available."
	    , transitionDuration = 250
	    ;

	  scatter
	    .xScale(x)
	    .yScale(y)
	    ;
	  xAxis
	    .orient('bottom')
	    .tickPadding(10)
	    ;
	  yAxis
	    .orient((rightAlignYAxis) ? 'right' : 'left')
	    .tickPadding(10)
	    ;
	  distX
	    .axis('x')
	    ;
	  distY
	    .axis('y')
	    ;

	  controls.updateState(false);

	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var x0, y0;

	  var showTooltip = function(e, offsetElement) {
	    //TODO: make tooltip style an option between single or dual on axes (maybe on all charts with axes?)

	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        leftX = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        topX = y.range()[0] + margin.top + ( offsetElement.offsetTop || 0),
	        leftY = x.range()[0] + margin.left + ( offsetElement.offsetLeft || 0 ),
	        topY = e.pos[1] + ( offsetElement.offsetTop || 0),
	        xVal = xAxis.tickFormat()(scatter.x()(e.point, e.pointIndex)),
	        yVal = yAxis.tickFormat()(scatter.y()(e.point, e.pointIndex));

	      if( tooltipX != null )
	          nv.tooltip.show([leftX, topX], tooltipX(e.series.key, xVal, yVal, e, chart), 'n', 1, offsetElement, 'x-nvtooltip');
	      if( tooltipY != null )
	          nv.tooltip.show([leftY, topY], tooltipY(e.series.key, xVal, yVal, e, chart), 'e', 1, offsetElement, 'y-nvtooltip');
	      if( tooltip != null )
	          nv.tooltip.show([left, top], tooltip(e.series.key, xVal, yVal, e, chart), e.value < 0 ? 'n' : 's', null, offsetElement);
	  };

	  var controlsData = [
	    { key: 'Magnify', disabled: true }
	  ];

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;

	      chart.update = function() { container.transition().duration(transitionDuration).call(chart); };
	      chart.container = this;

	      //set state.disabled
	      state.disabled = data.map(function(d) { return !!d.disabled });

	      if (!defaultState) {
	        var key;
	        defaultState = {};
	        for (key in state) {
	          if (state[key] instanceof Array)
	            defaultState[key] = state[key].slice(0);
	          else
	            defaultState[key] = state[key];
	        }
	      }

	      //------------------------------------------------------------
	      // Display noData message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      x0 = x0 || x;
	      y0 = y0 || y;

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-scatterChart').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-scatterChart nv-chart-' + scatter.id());
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      // background for pointer events
	      gEnter.append('rect').attr('class', 'nvd3 nv-background');

	      gEnter.append('g').attr('class', 'nv-x nv-axis');
	      gEnter.append('g').attr('class', 'nv-y nv-axis');
	      gEnter.append('g').attr('class', 'nv-scatterWrap');
	      gEnter.append('g').attr('class', 'nv-distWrap');
	      gEnter.append('g').attr('class', 'nv-legendWrap');
	      gEnter.append('g').attr('class', 'nv-controlsWrap');

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        var legendWidth = (showControls) ? availableWidth / 2 : availableWidth;
	        legend.width(legendWidth);

	        wrap.select('.nv-legendWrap')
	            .datum(data)
	            .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }

	        wrap.select('.nv-legendWrap')
	            .attr('transform', 'translate(' + (availableWidth - legendWidth) + ',' + (-margin.top) +')');
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Controls

	      if (showControls) {
	        controls.width(180).color(['#444']);
	        g.select('.nv-controlsWrap')
	            .datum(controlsData)
	            .attr('transform', 'translate(0,' + (-margin.top) +')')
	            .call(controls);
	      }

	      //------------------------------------------------------------


	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      if (rightAlignYAxis) {
	          g.select(".nv-y.nv-axis")
	              .attr("transform", "translate(" + availableWidth + ",0)");
	      }

	      //------------------------------------------------------------
	      // Main Chart Component(s)

	      scatter
	          .width(availableWidth)
	          .height(availableHeight)
	          .color(data.map(function(d,i) {
	            return d.color || color(d, i);
	          }).filter(function(d,i) { return !data[i].disabled }));

	      if (xPadding !== 0)
	        scatter.xDomain(null);

	      if (yPadding !== 0)
	        scatter.yDomain(null);

	      wrap.select('.nv-scatterWrap')
	          .datum(data.filter(function(d) { return !d.disabled }))
	          .call(scatter);

	      //Adjust for x and y padding
	      if (xPadding !== 0) {
	        var xRange = x.domain()[1] - x.domain()[0];
	        scatter.xDomain([x.domain()[0] - (xPadding * xRange), x.domain()[1] + (xPadding * xRange)]);
	      }

	      if (yPadding !== 0) {
	        var yRange = y.domain()[1] - y.domain()[0];
	        scatter.yDomain([y.domain()[0] - (yPadding * yRange), y.domain()[1] + (yPadding * yRange)]);
	      }

	      //Only need to update the scatter again if x/yPadding changed the domain.
	      if (yPadding !== 0 || xPadding !== 0) {
	        wrap.select('.nv-scatterWrap')
	            .datum(data.filter(function(d) { return !d.disabled }))
	            .call(scatter);
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Axes
	      if (showXAxis) {
	        xAxis
	            .scale(x)
	            .ticks( xAxis.ticks() && xAxis.ticks().length ? xAxis.ticks() : availableWidth / 100 )
	            .tickSize( -availableHeight , 0);

	        g.select('.nv-x.nv-axis')
	            .attr('transform', 'translate(0,' + y.range()[0] + ')')
	            .call(xAxis);

	      }

	      if (showYAxis) {
	        yAxis
	            .scale(y)
	            .ticks( yAxis.ticks() && yAxis.ticks().length ? yAxis.ticks() : availableHeight / 36 )
	            .tickSize( -availableWidth, 0);

	        g.select('.nv-y.nv-axis')
	            .call(yAxis);
	      }


	      if (showDistX) {
	        distX
	            .getData(scatter.x())
	            .scale(x)
	            .width(availableWidth)
	            .color(data.map(function(d,i) {
	              return d.color || color(d, i);
	            }).filter(function(d,i) { return !data[i].disabled }));
	        gEnter.select('.nv-distWrap').append('g')
	            .attr('class', 'nv-distributionX');
	        g.select('.nv-distributionX')
	            .attr('transform', 'translate(0,' + y.range()[0] + ')')
	            .datum(data.filter(function(d) { return !d.disabled }))
	            .call(distX);
	      }

	      if (showDistY) {
	        distY
	            .getData(scatter.y())
	            .scale(y)
	            .width(availableHeight)
	            .color(data.map(function(d,i) {
	              return d.color || color(d, i);
	            }).filter(function(d,i) { return !data[i].disabled }));
	        gEnter.select('.nv-distWrap').append('g')
	            .attr('class', 'nv-distributionY');
	        g.select('.nv-distributionY')
	            .attr('transform', 
	              'translate(' + (rightAlignYAxis ? availableWidth : -distY.size() ) + ',0)')
	            .datum(data.filter(function(d) { return !d.disabled }))
	            .call(distY);
	      }

	      //------------------------------------------------------------




	      if (d3.fisheye) {
	        g.select('.nv-background')
	            .attr('width', availableWidth)
	            .attr('height', availableHeight);

	        g.select('.nv-background').on('mousemove', updateFisheye);
	        g.select('.nv-background').on('click', function() { pauseFisheye = !pauseFisheye;});
	        scatter.dispatch.on('elementClick.freezeFisheye', function() {
	          pauseFisheye = !pauseFisheye;
	        });
	      }


	      function updateFisheye() {
	        if (pauseFisheye) {
	          g.select('.nv-point-paths').style('pointer-events', 'all');
	          return false;
	        }

	        g.select('.nv-point-paths').style('pointer-events', 'none' );

	        var mouse = d3.mouse(this);
	        x.distortion(fisheye).focus(mouse[0]);
	        y.distortion(fisheye).focus(mouse[1]);

	        g.select('.nv-scatterWrap')
	            .call(scatter);

	        if (showXAxis)
	          g.select('.nv-x.nv-axis').call(xAxis);
	        
	        if (showYAxis)
	          g.select('.nv-y.nv-axis').call(yAxis);
	        
	        g.select('.nv-distributionX')
	            .datum(data.filter(function(d) { return !d.disabled }))
	            .call(distX);
	        g.select('.nv-distributionY')
	            .datum(data.filter(function(d) { return !d.disabled }))
	            .call(distY);
	      }



	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      controls.dispatch.on('legendClick', function(d,i) {
	        d.disabled = !d.disabled;

	        fisheye = d.disabled ? 0 : 2.5;
	        g.select('.nv-background') .style('pointer-events', d.disabled ? 'none' : 'all');
	        g.select('.nv-point-paths').style('pointer-events', d.disabled ? 'all' : 'none' );

	        if (d.disabled) {
	          x.distortion(fisheye).focus(0);
	          y.distortion(fisheye).focus(0);

	          g.select('.nv-scatterWrap').call(scatter);
	          g.select('.nv-x.nv-axis').call(xAxis);
	          g.select('.nv-y.nv-axis').call(yAxis);
	        } else {
	          pauseFisheye = false;
	        }

	        chart.update();
	      });

	      legend.dispatch.on('stateChange', function(newState) {
	        state.disabled = newState.disabled;
	        dispatch.stateChange(state);
	        chart.update();
	      });

	      scatter.dispatch.on('elementMouseover.tooltip', function(e) {
	        d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-distx-' + e.pointIndex)
	            .attr('y1', function(d,i) { return e.pos[1] - availableHeight;});
	        d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-disty-' + e.pointIndex)
	            .attr('x2', e.pos[0] + distX.size());

	        e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
	        dispatch.tooltipShow(e);
	      });

	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });

	      // Update chart from a state object passed to event handler
	      dispatch.on('changeState', function(e) {

	        if (typeof e.disabled !== 'undefined') {
	          data.forEach(function(series,i) {
	            series.disabled = e.disabled[i];
	          });

	          state.disabled = e.disabled;
	        }

	        chart.update();
	      });

	      //============================================================


	      //store old scales for use in transitions on update
	      x0 = x.copy();
	      y0 = y.copy();


	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  scatter.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);

	    d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-distx-' + e.pointIndex)
	        .attr('y1', 0);
	    d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-disty-' + e.pointIndex)
	        .attr('x2', distY.size());
	  });
	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.scatter = scatter;
	  chart.legend = legend;
	  chart.controls = controls;
	  chart.xAxis = xAxis;
	  chart.yAxis = yAxis;
	  chart.distX = distX;
	  chart.distY = distY;

	  d3.rebind(chart, scatter, 'id', 'interactive', 'pointActive', 'x', 'y', 'shape', 'size', 'xScale', 'yScale', 'zScale', 'xDomain', 'yDomain', 'xRange', 'yRange', 'sizeDomain', 'sizeRange', 'forceX', 'forceY', 'forceSize', 'clipVoronoi', 'clipRadius', 'useVoronoi');
	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    legend.color(color);
	    distX.color(color);
	    distY.color(color);
	    return chart;
	  };

	  chart.showDistX = function(_) {
	    if (!arguments.length) return showDistX;
	    showDistX = _;
	    return chart;
	  };

	  chart.showDistY = function(_) {
	    if (!arguments.length) return showDistY;
	    showDistY = _;
	    return chart;
	  };

	  chart.showControls = function(_) {
	    if (!arguments.length) return showControls;
	    showControls = _;
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.showXAxis = function(_) {
	    if (!arguments.length) return showXAxis;
	    showXAxis = _;
	    return chart;
	  };

	  chart.showYAxis = function(_) {
	    if (!arguments.length) return showYAxis;
	    showYAxis = _;
	    return chart;
	  };

	  chart.rightAlignYAxis = function(_) {
	    if(!arguments.length) return rightAlignYAxis;
	    rightAlignYAxis = _;
	    yAxis.orient( (_) ? 'right' : 'left');
	    return chart;
	  };


	  chart.fisheye = function(_) {
	    if (!arguments.length) return fisheye;
	    fisheye = _;
	    return chart;
	  };

	  chart.xPadding = function(_) {
	    if (!arguments.length) return xPadding;
	    xPadding = _;
	    return chart;
	  };

	  chart.yPadding = function(_) {
	    if (!arguments.length) return yPadding;
	    yPadding = _;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.tooltipXContent = function(_) {
	    if (!arguments.length) return tooltipX;
	    tooltipX = _;
	    return chart;
	  };

	  chart.tooltipYContent = function(_) {
	    if (!arguments.length) return tooltipY;
	    tooltipY = _;
	    return chart;
	  };

	  chart.state = function(_) {
	    if (!arguments.length) return state;
	    state = _;
	    return chart;
	  };

	  chart.defaultState = function(_) {
	    if (!arguments.length) return defaultState;
	    defaultState = _;
	    return chart;
	  };
	  
	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  chart.transitionDuration = function(_) {
	    if (!arguments.length) return transitionDuration;
	    transitionDuration = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.scatterPlusLineChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var scatter      = nv.models.scatter()
	    , xAxis        = nv.models.axis()
	    , yAxis        = nv.models.axis()
	    , legend       = nv.models.legend()
	    , controls     = nv.models.legend()
	    , distX        = nv.models.distribution()
	    , distY        = nv.models.distribution()
	    ;

	  var margin       = {top: 30, right: 20, bottom: 50, left: 75}
	    , width        = null
	    , height       = null
	    , color        = nv.utils.defaultColor()
	    , x            = d3.fisheye ? d3.fisheye.scale(d3.scale.linear).distortion(0) : scatter.xScale()
	    , y            = d3.fisheye ? d3.fisheye.scale(d3.scale.linear).distortion(0) : scatter.yScale()
	    , showDistX    = false
	    , showDistY    = false
	    , showLegend   = true
	    , showXAxis    = true
	    , showYAxis    = true
	    , rightAlignYAxis = false
	    , showControls = !!d3.fisheye
	    , fisheye      = 0
	    , pauseFisheye = false
	    , tooltips     = true
	    , tooltipX     = function(key, x, y) { return '<strong>' + x + '</strong>' }
	    , tooltipY     = function(key, x, y) { return '<strong>' + y + '</strong>' }
	    , tooltip      = function(key, x, y, date) { return '<h3>' + key + '</h3>' 
	                                                      + '<p>' + date + '</p>' }
	    , state = {}
	    , defaultState = null
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
	    , noData       = "No Data Available."
	    , transitionDuration = 250
	    ;

	  scatter
	    .xScale(x)
	    .yScale(y)
	    ;
	  xAxis
	    .orient('bottom')
	    .tickPadding(10)
	    ;
	  yAxis
	    .orient((rightAlignYAxis) ? 'right' : 'left')
	    .tickPadding(10)
	    ;
	  distX
	    .axis('x')
	    ;
	  distY
	    .axis('y')
	    ;
	  
	  controls.updateState(false);
	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var x0, y0;

	  var showTooltip = function(e, offsetElement) {
	    //TODO: make tooltip style an option between single or dual on axes (maybe on all charts with axes?)

	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        leftX = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        topX = y.range()[0] + margin.top + ( offsetElement.offsetTop || 0),
	        leftY = x.range()[0] + margin.left + ( offsetElement.offsetLeft || 0 ),
	        topY = e.pos[1] + ( offsetElement.offsetTop || 0),
	        xVal = xAxis.tickFormat()(scatter.x()(e.point, e.pointIndex)),
	        yVal = yAxis.tickFormat()(scatter.y()(e.point, e.pointIndex));

	      if( tooltipX != null )
	          nv.tooltip.show([leftX, topX], tooltipX(e.series.key, xVal, yVal, e, chart), 'n', 1, offsetElement, 'x-nvtooltip');
	      if( tooltipY != null )
	          nv.tooltip.show([leftY, topY], tooltipY(e.series.key, xVal, yVal, e, chart), 'e', 1, offsetElement, 'y-nvtooltip');
	      if( tooltip != null )
	          nv.tooltip.show([left, top], tooltip(e.series.key, xVal, yVal, e.point.tooltip, e, chart), e.value < 0 ? 'n' : 's', null, offsetElement);
	  };

	  var controlsData = [
	    { key: 'Magnify', disabled: true }
	  ];

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;

	      chart.update = function() { container.transition().duration(transitionDuration).call(chart); };
	      chart.container = this;

	      //set state.disabled
	      state.disabled = data.map(function(d) { return !!d.disabled });

	      if (!defaultState) {
	        var key;
	        defaultState = {};
	        for (key in state) {
	          if (state[key] instanceof Array)
	            defaultState[key] = state[key].slice(0);
	          else
	            defaultState[key] = state[key];
	        }
	      }

	      //------------------------------------------------------------
	      // Display noData message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      x = scatter.xScale();
	      y = scatter.yScale();

	      x0 = x0 || x;
	      y0 = y0 || y;

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-scatterChart').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-scatterChart nv-chart-' + scatter.id());
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g')

	      // background for pointer events
	      gEnter.append('rect').attr('class', 'nvd3 nv-background').style("pointer-events","none");

	      gEnter.append('g').attr('class', 'nv-x nv-axis');
	      gEnter.append('g').attr('class', 'nv-y nv-axis');
	      gEnter.append('g').attr('class', 'nv-scatterWrap');
	      gEnter.append('g').attr('class', 'nv-regressionLinesWrap');
	      gEnter.append('g').attr('class', 'nv-distWrap');
	      gEnter.append('g').attr('class', 'nv-legendWrap');
	      gEnter.append('g').attr('class', 'nv-controlsWrap');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      if (rightAlignYAxis) {
	          g.select(".nv-y.nv-axis")
	              .attr("transform", "translate(" + availableWidth + ",0)");
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        legend.width( availableWidth / 2 );

	        wrap.select('.nv-legendWrap')
	            .datum(data)
	            .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }

	        wrap.select('.nv-legendWrap')
	            .attr('transform', 'translate(' + (availableWidth / 2) + ',' + (-margin.top) +')');
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Controls

	      if (showControls) {
	        controls.width(180).color(['#444']);
	        g.select('.nv-controlsWrap')
	            .datum(controlsData)
	            .attr('transform', 'translate(0,' + (-margin.top) +')')
	            .call(controls);
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Main Chart Component(s)

	      scatter
	          .width(availableWidth)
	          .height(availableHeight)
	          .color(data.map(function(d,i) {
	            return d.color || color(d, i);
	          }).filter(function(d,i) { return !data[i].disabled }))

	      wrap.select('.nv-scatterWrap')
	          .datum(data.filter(function(d) { return !d.disabled }))
	          .call(scatter);

	      wrap.select('.nv-regressionLinesWrap')
	          .attr('clip-path', 'url(#nv-edge-clip-' + scatter.id() + ')');

	      var regWrap = wrap.select('.nv-regressionLinesWrap').selectAll('.nv-regLines')
	                      .data(function(d) {return d });
	      
	      regWrap.enter().append('g').attr('class', 'nv-regLines');

	      var regLine = regWrap.selectAll('.nv-regLine').data(function(d){return [d]});
	      var regLineEnter = regLine.enter()
	                       .append('line').attr('class', 'nv-regLine')
	                       .style('stroke-opacity', 0);

	      regLine
	          .transition()
	          .attr('x1', x.range()[0])
	          .attr('x2', x.range()[1])
	          .attr('y1', function(d,i) {return y(x.domain()[0] * d.slope + d.intercept) })
	          .attr('y2', function(d,i) { return y(x.domain()[1] * d.slope + d.intercept) })
	          .style('stroke', function(d,i,j) { return color(d,j) })
	          .style('stroke-opacity', function(d,i) {
	            return (d.disabled || typeof d.slope === 'undefined' || typeof d.intercept === 'undefined') ? 0 : 1 
	          });

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Axes

	      if (showXAxis) {
	        xAxis
	            .scale(x)
	            .ticks( xAxis.ticks() ? xAxis.ticks() : availableWidth / 100 )
	            .tickSize( -availableHeight , 0);

	        g.select('.nv-x.nv-axis')
	            .attr('transform', 'translate(0,' + y.range()[0] + ')')
	            .call(xAxis);
	      }

	      if (showYAxis) {
	        yAxis
	            .scale(y)
	            .ticks( yAxis.ticks() ? yAxis.ticks() : availableHeight / 36 )
	            .tickSize( -availableWidth, 0);

	        g.select('.nv-y.nv-axis')
	            .call(yAxis);
	      }


	      if (showDistX) {
	        distX
	            .getData(scatter.x())
	            .scale(x)
	            .width(availableWidth)
	            .color(data.map(function(d,i) {
	              return d.color || color(d, i);
	            }).filter(function(d,i) { return !data[i].disabled }));
	        gEnter.select('.nv-distWrap').append('g')
	            .attr('class', 'nv-distributionX');
	        g.select('.nv-distributionX')
	            .attr('transform', 'translate(0,' + y.range()[0] + ')')
	            .datum(data.filter(function(d) { return !d.disabled }))
	            .call(distX);
	      }

	      if (showDistY) {
	        distY
	            .getData(scatter.y())
	            .scale(y)
	            .width(availableHeight)
	            .color(data.map(function(d,i) {
	              return d.color || color(d, i);
	            }).filter(function(d,i) { return !data[i].disabled }));
	        gEnter.select('.nv-distWrap').append('g')
	            .attr('class', 'nv-distributionY');
	        g.select('.nv-distributionY')
	            .attr('transform', 'translate(' + (rightAlignYAxis ? availableWidth : -distY.size() ) + ',0)')
	            .datum(data.filter(function(d) { return !d.disabled }))
	            .call(distY);
	      }

	      //------------------------------------------------------------




	      if (d3.fisheye) {
	        g.select('.nv-background')
	            .attr('width', availableWidth)
	            .attr('height', availableHeight)
	            ;

	        g.select('.nv-background').on('mousemove', updateFisheye);
	        g.select('.nv-background').on('click', function() { pauseFisheye = !pauseFisheye;});
	        scatter.dispatch.on('elementClick.freezeFisheye', function() {
	          pauseFisheye = !pauseFisheye;
	        });
	      }


	      function updateFisheye() {
	        if (pauseFisheye) {
	          g.select('.nv-point-paths').style('pointer-events', 'all');
	          return false;
	        }

	        g.select('.nv-point-paths').style('pointer-events', 'none' );

	        var mouse = d3.mouse(this);
	        x.distortion(fisheye).focus(mouse[0]);
	        y.distortion(fisheye).focus(mouse[1]);

	        g.select('.nv-scatterWrap')
	            .datum(data.filter(function(d) { return !d.disabled }))
	            .call(scatter);

	        if (showXAxis)
	          g.select('.nv-x.nv-axis').call(xAxis);

	        if (showYAxis)
	          g.select('.nv-y.nv-axis').call(yAxis);
	        
	        g.select('.nv-distributionX')
	            .datum(data.filter(function(d) { return !d.disabled }))
	            .call(distX);
	        g.select('.nv-distributionY')
	            .datum(data.filter(function(d) { return !d.disabled }))
	            .call(distY);
	      }



	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      controls.dispatch.on('legendClick', function(d,i) {
	        d.disabled = !d.disabled;

	        fisheye = d.disabled ? 0 : 2.5;
	        g.select('.nv-background') .style('pointer-events', d.disabled ? 'none' : 'all');
	        g.select('.nv-point-paths').style('pointer-events', d.disabled ? 'all' : 'none' );

	        if (d.disabled) {
	          x.distortion(fisheye).focus(0);
	          y.distortion(fisheye).focus(0);

	          g.select('.nv-scatterWrap').call(scatter);
	          g.select('.nv-x.nv-axis').call(xAxis);
	          g.select('.nv-y.nv-axis').call(yAxis);
	        } else {
	          pauseFisheye = false;
	        }

	        chart.update();
	      });

	      legend.dispatch.on('stateChange', function(newState) { 
	        state = newState;
	        dispatch.stateChange(state);
	        chart.update();
	      });


	      scatter.dispatch.on('elementMouseover.tooltip', function(e) {
	        d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-distx-' + e.pointIndex)
	            .attr('y1', e.pos[1] - availableHeight);
	        d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-disty-' + e.pointIndex)
	            .attr('x2', e.pos[0] + distX.size());

	        e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top];
	        dispatch.tooltipShow(e);
	      });

	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });

	      // Update chart from a state object passed to event handler
	      dispatch.on('changeState', function(e) {

	        if (typeof e.disabled !== 'undefined') {
	          data.forEach(function(series,i) {
	            series.disabled = e.disabled[i];
	          });

	          state.disabled = e.disabled;
	        }

	        chart.update();
	      });

	      //============================================================


	      //store old scales for use in transitions on update
	      x0 = x.copy();
	      y0 = y.copy();


	    });

	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  scatter.dispatch.on('elementMouseout.tooltip', function(e) {
	    dispatch.tooltipHide(e);

	    d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-distx-' + e.pointIndex)
	        .attr('y1', 0);
	    d3.select('.nv-chart-' + scatter.id() + ' .nv-series-' + e.seriesIndex + ' .nv-disty-' + e.pointIndex)
	        .attr('x2', distY.size());
	  });
	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.scatter = scatter;
	  chart.legend = legend;
	  chart.controls = controls;
	  chart.xAxis = xAxis;
	  chart.yAxis = yAxis;
	  chart.distX = distX;
	  chart.distY = distY;

	  d3.rebind(chart, scatter, 'id', 'interactive', 'pointActive', 'x', 'y', 'shape', 'size', 'xScale', 'yScale', 'zScale', 'xDomain', 'yDomain', 'xRange', 'yRange', 'sizeDomain', 'sizeRange', 'forceX', 'forceY', 'forceSize', 'clipVoronoi', 'clipRadius', 'useVoronoi');

	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    legend.color(color);
	    distX.color(color);
	    distY.color(color);
	    return chart;
	  };

	  chart.showDistX = function(_) {
	    if (!arguments.length) return showDistX;
	    showDistX = _;
	    return chart;
	  };

	  chart.showDistY = function(_) {
	    if (!arguments.length) return showDistY;
	    showDistY = _;
	    return chart;
	  };

	  chart.showControls = function(_) {
	    if (!arguments.length) return showControls;
	    showControls = _;
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.showXAxis = function(_) {
	    if (!arguments.length) return showXAxis;
	    showXAxis = _;
	    return chart;
	  };

	  chart.showYAxis = function(_) {
	    if (!arguments.length) return showYAxis;
	    showYAxis = _;
	    return chart;
	  };

	  chart.rightAlignYAxis = function(_) {
	    if(!arguments.length) return rightAlignYAxis;
	    rightAlignYAxis = _;
	    yAxis.orient( (_) ? 'right' : 'left');
	    return chart;
	  };

	  chart.fisheye = function(_) {
	    if (!arguments.length) return fisheye;
	    fisheye = _;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.tooltipXContent = function(_) {
	    if (!arguments.length) return tooltipX;
	    tooltipX = _;
	    return chart;
	  };

	  chart.tooltipYContent = function(_) {
	    if (!arguments.length) return tooltipY;
	    tooltipY = _;
	    return chart;
	  };

	  chart.state = function(_) {
	    if (!arguments.length) return state;
	    state = _;
	    return chart;
	  };

	  chart.defaultState = function(_) {
	    if (!arguments.length) return defaultState;
	    defaultState = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  chart.transitionDuration = function(_) {
	    if (!arguments.length) return transitionDuration;
	    transitionDuration = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.sparkline = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 2, right: 0, bottom: 2, left: 0}
	    , width = 400
	    , height = 32
	    , animate = true
	    , x = d3.scale.linear()
	    , y = d3.scale.linear()
	    , getX = function(d) { return d.x }
	    , getY = function(d) { return d.y }
	    , color = nv.utils.getColor(['#000'])
	    , xDomain
	    , yDomain
	    , xRange
	    , yRange
	    ;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableWidth = width - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          container = d3.select(this);


	      //------------------------------------------------------------
	      // Setup Scales

	      x   .domain(xDomain || d3.extent(data, getX ))
	          .range(xRange || [0, availableWidth]);

	      y   .domain(yDomain || d3.extent(data, getY ))
	          .range(yRange || [availableHeight, 0]);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-sparkline').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-sparkline');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

	      //------------------------------------------------------------


	      var paths = wrap.selectAll('path')
	          .data(function(d) { return [d] });
	      paths.enter().append('path');
	      paths.exit().remove();
	      paths
	          .style('stroke', function(d,i) { return d.color || color(d, i) })
	          .attr('d', d3.svg.line()
	            .x(function(d,i) { return x(getX(d,i)) })
	            .y(function(d,i) { return y(getY(d,i)) })
	          );


	      // TODO: Add CURRENT data point (Need Min, Mac, Current / Most recent)
	      var points = wrap.selectAll('circle.nv-point')
	          .data(function(data) {
	              var yValues = data.map(function(d, i) { return getY(d,i); });
	              function pointIndex(index) {
	                  if (index != -1) {
		              var result = data[index];
	                      result.pointIndex = index;
	                      return result;
	                  } else {
	                      return null;
	                  }
	              }
	              var maxPoint = pointIndex(yValues.lastIndexOf(y.domain()[1])),
	                  minPoint = pointIndex(yValues.indexOf(y.domain()[0])),
	                  currentPoint = pointIndex(yValues.length - 1);
	              return [minPoint, maxPoint, currentPoint].filter(function (d) {return d != null;});
	          });
	      points.enter().append('circle');
	      points.exit().remove();
	      points
	          .attr('cx', function(d,i) { return x(getX(d,d.pointIndex)) })
	          .attr('cy', function(d,i) { return y(getY(d,d.pointIndex)) })
	          .attr('r', 2)
	          .attr('class', function(d,i) {
	            return getX(d, d.pointIndex) == x.domain()[1] ? 'nv-point nv-currentValue' :
	                   getY(d, d.pointIndex) == y.domain()[0] ? 'nv-point nv-minValue' : 'nv-point nv-maxValue'
	          });
	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------
	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = d3.functor(_);
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = d3.functor(_);
	    return chart;
	  };

	  chart.xScale = function(_) {
	    if (!arguments.length) return x;
	    x = _;
	    return chart;
	  };

	  chart.yScale = function(_) {
	    if (!arguments.length) return y;
	    y = _;
	    return chart;
	  };

	  chart.xDomain = function(_) {
	    if (!arguments.length) return xDomain;
	    xDomain = _;
	    return chart;
	  };

	  chart.yDomain = function(_) {
	    if (!arguments.length) return yDomain;
	    yDomain = _;
	    return chart;
	  };

	  chart.xRange = function(_) {
	    if (!arguments.length) return xRange;
	    xRange = _;
	    return chart;
	  };

	  chart.yRange = function(_) {
	    if (!arguments.length) return yRange;
	    yRange = _;
	    return chart;
	  };

	  chart.animate = function(_) {
	    if (!arguments.length) return animate;
	    animate = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.sparklinePlus = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var sparkline = nv.models.sparkline();

	  var margin = {top: 15, right: 100, bottom: 10, left: 50}
	    , width = null
	    , height = null
	    , x
	    , y
	    , index = []
	    , paused = false
	    , xTickFormat = d3.format(',r')
	    , yTickFormat = d3.format(',.2f')
	    , showValue = true
	    , alignValue = true
	    , rightAlignValue = false
	    , noData = "No Data Available."
	    ;

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this);

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;

	      

	      chart.update = function() { chart(selection) };
	      chart.container = this;


	      //------------------------------------------------------------
	      // Display No Data message if there's nothing to show.

	      if (!data || !data.length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      var currentValue = sparkline.y()(data[data.length-1], data.length-1);

	      //------------------------------------------------------------



	      //------------------------------------------------------------
	      // Setup Scales

	      x = sparkline.xScale();
	      y = sparkline.yScale();

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-sparklineplus').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-sparklineplus');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-sparklineWrap');
	      gEnter.append('g').attr('class', 'nv-valueWrap');
	      gEnter.append('g').attr('class', 'nv-hoverArea');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Main Chart Component(s)

	      var sparklineWrap = g.select('.nv-sparklineWrap');

	      sparkline
	        .width(availableWidth)
	        .height(availableHeight);

	      sparklineWrap
	          .call(sparkline);

	      //------------------------------------------------------------


	      var valueWrap = g.select('.nv-valueWrap');
	      
	      var value = valueWrap.selectAll('.nv-currentValue')
	          .data([currentValue]);

	      value.enter().append('text').attr('class', 'nv-currentValue')
	          .attr('dx', rightAlignValue ? -8 : 8)
	          .attr('dy', '.9em')
	          .style('text-anchor', rightAlignValue ? 'end' : 'start');

	      value
	          .attr('x', availableWidth + (rightAlignValue ? margin.right : 0))
	          .attr('y', alignValue ? function(d) { return y(d) } : 0)
	          .style('fill', sparkline.color()(data[data.length-1], data.length-1))
	          .text(yTickFormat(currentValue));



	      gEnter.select('.nv-hoverArea').append('rect')
	          .on('mousemove', sparklineHover)
	          .on('click', function() { paused = !paused })
	          .on('mouseout', function() { index = []; updateValueLine(); });
	          //.on('mouseout', function() { index = null; updateValueLine(); });

	      g.select('.nv-hoverArea rect')
	          .attr('transform', function(d) { return 'translate(' + -margin.left + ',' + -margin.top + ')' })
	          .attr('width', availableWidth + margin.left + margin.right)
	          .attr('height', availableHeight + margin.top);



	      function updateValueLine() { //index is currently global (within the chart), may or may not keep it that way
	        if (paused) return;

	        var hoverValue = g.selectAll('.nv-hoverValue').data(index)

	        var hoverEnter = hoverValue.enter()
	          .append('g').attr('class', 'nv-hoverValue')
	            .style('stroke-opacity', 0)
	            .style('fill-opacity', 0);

	        hoverValue.exit()
	          .transition().duration(250)
	            .style('stroke-opacity', 0)
	            .style('fill-opacity', 0)
	            .remove();

	        hoverValue
	            .attr('transform', function(d) { return 'translate(' + x(sparkline.x()(data[d],d)) + ',0)' })
	          .transition().duration(250)
	            .style('stroke-opacity', 1)
	            .style('fill-opacity', 1);

	        if (!index.length) return;

	        hoverEnter.append('line')
	            .attr('x1', 0)
	            .attr('y1', -margin.top)
	            .attr('x2', 0)
	            .attr('y2', availableHeight);


	        hoverEnter.append('text').attr('class', 'nv-xValue')
	            .attr('x', -6)
	            .attr('y', -margin.top)
	            .attr('text-anchor', 'end')
	            .attr('dy', '.9em')


	        g.select('.nv-hoverValue .nv-xValue')
	            .text(xTickFormat(sparkline.x()(data[index[0]], index[0])));

	        hoverEnter.append('text').attr('class', 'nv-yValue')
	            .attr('x', 6)
	            .attr('y', -margin.top)
	            .attr('text-anchor', 'start')
	            .attr('dy', '.9em')

	        g.select('.nv-hoverValue .nv-yValue')
	            .text(yTickFormat(sparkline.y()(data[index[0]], index[0])));

	      }


	      function sparklineHover() {
	        if (paused) return;

	        var pos = d3.mouse(this)[0] - margin.left;

	        function getClosestIndex(data, x) {
	          var distance = Math.abs(sparkline.x()(data[0], 0) - x);
	          var closestIndex = 0;
	          for (var i = 0; i < data.length; i++){
	            if (Math.abs(sparkline.x()(data[i], i) - x) < distance) {
	              distance = Math.abs(sparkline.x()(data[i], i) - x);
	              closestIndex = i;
	            }
	          }
	          return closestIndex;
	        }

	        index = [getClosestIndex(data, Math.round(x.invert(pos)))];

	        updateValueLine();
	      }

	    });

	    return chart;
	  }


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.sparkline = sparkline;

	  d3.rebind(chart, sparkline, 'x', 'y', 'xScale', 'yScale', 'color');

	  chart.options = nv.utils.optionsFunc.bind(chart);
	  
	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.xTickFormat = function(_) {
	    if (!arguments.length) return xTickFormat;
	    xTickFormat = _;
	    return chart;
	  };

	  chart.yTickFormat = function(_) {
	    if (!arguments.length) return yTickFormat;
	    yTickFormat = _;
	    return chart;
	  };

	  chart.showValue = function(_) {
	    if (!arguments.length) return showValue;
	    showValue = _;
	    return chart;
	  };

	  chart.alignValue = function(_) {
	    if (!arguments.length) return alignValue;
	    alignValue = _;
	    return chart;
	  };

	  chart.rightAlignValue = function(_) {
	    if (!arguments.length) return rightAlignValue;
	    rightAlignValue = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  //============================================================


	  return chart;
	}

	nv.models.stackedArea = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var margin = {top: 0, right: 0, bottom: 0, left: 0}
	    , width = 960
	    , height = 500
	    , color = nv.utils.defaultColor() // a function that computes the color
	    , id = Math.floor(Math.random() * 100000) //Create semi-unique ID incase user doesn't selet one
	    , getX = function(d) { return d.x } // accessor to get the x value from a data point
	    , getY = function(d) { return d.y } // accessor to get the y value from a data point
	    , style = 'stack'
	    , offset = 'zero'
	    , order = 'default'
	    , interpolate = 'linear'  // controls the line interpolation
	    , clipEdge = false // if true, masks lines within x and y scale
	    , x //can be accessed via chart.xScale()
	    , y //can be accessed via chart.yScale()
	    , scatter = nv.models.scatter()
	    , dispatch =  d3.dispatch('tooltipShow', 'tooltipHide', 'areaClick', 'areaMouseover', 'areaMouseout')
	    ;

	  scatter
	    .size(2.2) // default size
	    .sizeDomain([2.2,2.2]) // all the same size by default
	    ;

	  /************************************
	   * offset:
	   *   'wiggle' (stream)
	   *   'zero' (stacked)
	   *   'expand' (normalize to 100%)
	   *   'silhouette' (simple centered)
	   *
	   * order:
	   *   'inside-out' (stream)
	   *   'default' (input order)
	   ************************************/

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var availableWidth = width - margin.left - margin.right,
	          availableHeight = height - margin.top - margin.bottom,
	          container = d3.select(this);

	      //------------------------------------------------------------
	      // Setup Scales

	      x = scatter.xScale();
	      y = scatter.yScale();

	      //------------------------------------------------------------

	      var dataRaw = data;
	      // Injecting point index into each point because d3.layout.stack().out does not give index
	      data.forEach(function(aseries, i) {
	        aseries.seriesIndex = i;
	        aseries.values = aseries.values.map(function(d, j) {
	          d.index = j;
	          d.seriesIndex = i;
	          return d;
	        });
	      });

	      var dataFiltered = data.filter(function(series) {
	            return !series.disabled;
	      });

	      data = d3.layout.stack()
	               .order(order)
	               .offset(offset)
	               .values(function(d) { return d.values })  //TODO: make values customizeable in EVERY model in this fashion
	               .x(getX)
	               .y(getY)
	               .out(function(d, y0, y) {
	                    var yHeight = (getY(d) === 0) ? 0 : y;
	                    d.display = {
	                      y: yHeight,
	                     y0: y0
	                    };
	                })
	              (dataFiltered);


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-stackedarea').data([data]);
	      var wrapEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-stackedarea');
	      var defsEnter = wrapEnter.append('defs');
	      var gEnter = wrapEnter.append('g');
	      var g = wrap.select('g');

	      gEnter.append('g').attr('class', 'nv-areaWrap');
	      gEnter.append('g').attr('class', 'nv-scatterWrap');

	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      //------------------------------------------------------------


	      scatter
	        .width(availableWidth)
	        .height(availableHeight)
	        .x(getX)
	        .y(function(d) { return d.display.y + d.display.y0 })
	        .forceY([0])
	        .color(data.map(function(d,i) {
	          return d.color || color(d, d.seriesIndex);
	        }));


	      var scatterWrap = g.select('.nv-scatterWrap')
	          .datum(data);

	      scatterWrap.call(scatter);

	      defsEnter.append('clipPath')
	          .attr('id', 'nv-edge-clip-' + id)
	        .append('rect');

	      wrap.select('#nv-edge-clip-' + id + ' rect')
	          .attr('width', availableWidth)
	          .attr('height', availableHeight);

	      g   .attr('clip-path', clipEdge ? 'url(#nv-edge-clip-' + id + ')' : '');

	      var area = d3.svg.area()
	          .x(function(d,i)  { return x(getX(d,i)) })
	          .y0(function(d) {
	              return y(d.display.y0)
	          })
	          .y1(function(d) {
	              return y(d.display.y + d.display.y0)
	          })
	          .interpolate(interpolate);

	      var zeroArea = d3.svg.area()
	          .x(function(d,i)  { return x(getX(d,i)) })
	          .y0(function(d) { return y(d.display.y0) })
	          .y1(function(d) { return y(d.display.y0) });


	      var path = g.select('.nv-areaWrap').selectAll('path.nv-area')
	          .data(function(d) { return d });

	      path.enter().append('path').attr('class', function(d,i) { return 'nv-area nv-area-' + i })
	          .attr('d', function(d,i){
	            return zeroArea(d.values, d.seriesIndex);
	          })
	          .on('mouseover', function(d,i) {
	            d3.select(this).classed('hover', true);
	            dispatch.areaMouseover({
	              point: d,
	              series: d.key,
	              pos: [d3.event.pageX, d3.event.pageY],
	              seriesIndex: d.seriesIndex
	            });
	          })
	          .on('mouseout', function(d,i) {
	            d3.select(this).classed('hover', false);
	            dispatch.areaMouseout({
	              point: d,
	              series: d.key,
	              pos: [d3.event.pageX, d3.event.pageY],
	              seriesIndex: d.seriesIndex
	            });
	          })
	          .on('click', function(d,i) {
	            d3.select(this).classed('hover', false);
	            dispatch.areaClick({
	              point: d,
	              series: d.key,
	              pos: [d3.event.pageX, d3.event.pageY],
	              seriesIndex: d.seriesIndex
	            });
	          })

	      path.exit().remove();

	      path
	          .style('fill', function(d,i){
	            return d.color || color(d, d.seriesIndex)
	          })
	          .style('stroke', function(d,i){ return d.color || color(d, d.seriesIndex) });
	      path.transition()
	          .attr('d', function(d,i) {
	            return area(d.values,i)
	          });



	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      scatter.dispatch.on('elementMouseover.area', function(e) {
	        g.select('.nv-chart-' + id + ' .nv-area-' + e.seriesIndex).classed('hover', true);
	      });
	      scatter.dispatch.on('elementMouseout.area', function(e) {
	        g.select('.nv-chart-' + id + ' .nv-area-' + e.seriesIndex).classed('hover', false);
	      });

	      //============================================================
	      //Special offset functions
	      chart.d3_stackedOffset_stackPercent = function(stackData) {
	          var n = stackData.length,    //How many series
	          m = stackData[0].length,     //how many points per series
	          k = 1 / n,
	           i,
	           j,
	           o,
	           y0 = [];

	          for (j = 0; j < m; ++j) { //Looping through all points
	            for (i = 0, o = 0; i < dataRaw.length; i++)  //looping through series'
	                o += getY(dataRaw[i].values[j])   //total value of all points at a certian point in time.

	            if (o) for (i = 0; i < n; i++)
	               stackData[i][j][1] /= o;
	            else
	              for (i = 0; i < n; i++)
	               stackData[i][j][1] = k;
	          }
	          for (j = 0; j < m; ++j) y0[j] = 0;
	          return y0;
	      };

	    });


	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  scatter.dispatch.on('elementClick.area', function(e) {
	    dispatch.areaClick(e);
	  })
	  scatter.dispatch.on('elementMouseover.tooltip', function(e) {
	        e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top],
	        dispatch.tooltipShow(e);
	  });
	  scatter.dispatch.on('elementMouseout.tooltip', function(e) {
	        dispatch.tooltipHide(e);
	  });

	  //============================================================

	  //============================================================
	  // Global getters and setters
	  //------------------------------------------------------------

	  chart.dispatch = dispatch;
	  chart.scatter = scatter;

	  d3.rebind(chart, scatter, 'interactive', 'size', 'xScale', 'yScale', 'zScale', 'xDomain', 'yDomain', 'xRange', 'yRange',
	    'sizeDomain', 'forceX', 'forceY', 'forceSize', 'clipVoronoi', 'useVoronoi','clipRadius','highlightPoint','clearHighlights');

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.x = function(_) {
	    if (!arguments.length) return getX;
	    getX = d3.functor(_);
	    return chart;
	  };

	  chart.y = function(_) {
	    if (!arguments.length) return getY;
	    getY = d3.functor(_);
	    return chart;
	  }

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.clipEdge = function(_) {
	    if (!arguments.length) return clipEdge;
	    clipEdge = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    return chart;
	  };

	  chart.offset = function(_) {
	    if (!arguments.length) return offset;
	    offset = _;
	    return chart;
	  };

	  chart.order = function(_) {
	    if (!arguments.length) return order;
	    order = _;
	    return chart;
	  };

	  //shortcut for offset + order
	  chart.style = function(_) {
	    if (!arguments.length) return style;
	    style = _;

	    switch (style) {
	      case 'stack':
	        chart.offset('zero');
	        chart.order('default');
	        break;
	      case 'stream':
	        chart.offset('wiggle');
	        chart.order('inside-out');
	        break;
	      case 'stream-center':
	          chart.offset('silhouette');
	          chart.order('inside-out');
	          break;
	      case 'expand':
	        chart.offset('expand');
	        chart.order('default');
	        break;
	      case 'stack_percent':
	        chart.offset(chart.d3_stackedOffset_stackPercent);
	        chart.order('default');
	        break;
	    }

	    return chart;
	  };

	  chart.interpolate = function(_) {
		    if (!arguments.length) return interpolate;
		    interpolate = _;
		    return chart;
	  };
	  //============================================================


	  return chart;
	}

	nv.models.stackedAreaChart = function() {
	  "use strict";
	  //============================================================
	  // Public Variables with Default Settings
	  //------------------------------------------------------------

	  var stacked = nv.models.stackedArea()
	    , xAxis = nv.models.axis()
	    , yAxis = nv.models.axis()
	    , legend = nv.models.legend()
	    , controls = nv.models.legend()
	    , interactiveLayer = nv.interactiveGuideline()
	    ;

	  var margin = {top: 30, right: 25, bottom: 50, left: 60}
	    , width = null
	    , height = null
	    , color = nv.utils.defaultColor() // a function that takes in d, i and returns color
	    , showControls = true
	    , showLegend = true
	    , showXAxis = true
	    , showYAxis = true
	    , rightAlignYAxis = false
	    , useInteractiveGuideline = false
	    , tooltips = true
	    , tooltip = function(key, x, y, e, graph) {
	        return '<h3>' + key + '</h3>' +
	               '<p>' +  y + ' on ' + x + '</p>'
	      }
	    , x //can be accessed via chart.xScale()
	    , y //can be accessed via chart.yScale()
	    , yAxisTickFormat = d3.format(',.2f')
	    , state = { style: stacked.style() }
	    , defaultState = null
	    , noData = 'No Data Available.'
	    , dispatch = d3.dispatch('tooltipShow', 'tooltipHide', 'stateChange', 'changeState')
	    , controlWidth = 250
	    , cData = ['Stacked','Stream','Expanded']
	    , controlLabels = {}
	    , transitionDuration = 250
	    ;

	  xAxis
	    .orient('bottom')
	    .tickPadding(7)
	    ;
	  yAxis
	    .orient((rightAlignYAxis) ? 'right' : 'left')
	    ;

	  controls.updateState(false);
	  //============================================================


	  //============================================================
	  // Private Variables
	  //------------------------------------------------------------

	  var showTooltip = function(e, offsetElement) {
	    var left = e.pos[0] + ( offsetElement.offsetLeft || 0 ),
	        top = e.pos[1] + ( offsetElement.offsetTop || 0),
	        x = xAxis.tickFormat()(stacked.x()(e.point, e.pointIndex)),
	        y = yAxis.tickFormat()(stacked.y()(e.point, e.pointIndex)),
	        content = tooltip(e.series.key, x, y, e, chart);

	    nv.tooltip.show([left, top], content, e.value < 0 ? 'n' : 's', null, offsetElement);
	  };

	  //============================================================


	  function chart(selection) {
	    selection.each(function(data) {
	      var container = d3.select(this),
	          that = this;

	      var availableWidth = (width  || parseInt(container.style('width')) || 960)
	                             - margin.left - margin.right,
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;

	      chart.update = function() { container.transition().duration(transitionDuration).call(chart); };
	      chart.container = this;

	      //set state.disabled
	      state.disabled = data.map(function(d) { return !!d.disabled });

	      if (!defaultState) {
	        var key;
	        defaultState = {};
	        for (key in state) {
	          if (state[key] instanceof Array)
	            defaultState[key] = state[key].slice(0);
	          else
	            defaultState[key] = state[key];
	        }
	      }

	      //------------------------------------------------------------
	      // Display No Data message if there's nothing to show.

	      if (!data || !data.length || !data.filter(function(d) { return d.values.length }).length) {
	        var noDataText = container.selectAll('.nv-noData').data([noData]);

	        noDataText.enter().append('text')
	          .attr('class', 'nvd3 nv-noData')
	          .attr('dy', '-.7em')
	          .style('text-anchor', 'middle');

	        noDataText
	          .attr('x', margin.left + availableWidth / 2)
	          .attr('y', margin.top + availableHeight / 2)
	          .text(function(d) { return d });

	        return chart;
	      } else {
	        container.selectAll('.nv-noData').remove();
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Scales

	      x = stacked.xScale();
	      y = stacked.yScale();

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup containers and skeleton of chart

	      var wrap = container.selectAll('g.nv-wrap.nv-stackedAreaChart').data([data]);
	      var gEnter = wrap.enter().append('g').attr('class', 'nvd3 nv-wrap nv-stackedAreaChart').append('g');
	      var g = wrap.select('g');

	      gEnter.append("rect").style("opacity",0);
	      gEnter.append('g').attr('class', 'nv-x nv-axis');
	      gEnter.append('g').attr('class', 'nv-y nv-axis');
	      gEnter.append('g').attr('class', 'nv-stackedWrap');
	      gEnter.append('g').attr('class', 'nv-legendWrap');
	      gEnter.append('g').attr('class', 'nv-controlsWrap');
	      gEnter.append('g').attr('class', 'nv-interactive');

	      g.select("rect").attr("width",availableWidth).attr("height",availableHeight);
	      //------------------------------------------------------------
	      // Legend

	      if (showLegend) {
	        var legendWidth = (showControls) ? availableWidth - controlWidth : availableWidth;
	        legend
	          .width(legendWidth);

	        g.select('.nv-legendWrap')
	            .datum(data)
	            .call(legend);

	        if ( margin.top != legend.height()) {
	          margin.top = legend.height();
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }

	        g.select('.nv-legendWrap')
	            .attr('transform', 'translate(' + (availableWidth-legendWidth) + ',' + (-margin.top) +')');
	      }

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Controls

	      if (showControls) {
	        var controlsData = [
	          {
	            key: controlLabels.stacked || 'Stacked',
	            metaKey: 'Stacked',
	            disabled: stacked.style() != 'stack',
	            style: 'stack'
	          },
	          {
	            key: controlLabels.stream || 'Stream',
	            metaKey: 'Stream',
	            disabled: stacked.style() != 'stream',
	            style: 'stream'
	          },
	          {
	            key: controlLabels.expanded || 'Expanded',
	            metaKey: 'Expanded',
	            disabled: stacked.style() != 'expand',
	            style: 'expand'
	          },
	          {
	            key: controlLabels.stack_percent || 'Stack %',
	            metaKey: 'Stack_Percent',
	            disabled: stacked.style() != 'stack_percent',
	            style: 'stack_percent'
	          }
	        ];

	        controlWidth = (cData.length/3) * 260;

	        controlsData = controlsData.filter(function(d) {
	          return cData.indexOf(d.metaKey) !== -1;
	        })

	        controls
	          .width( controlWidth )
	          .color(['#444', '#444', '#444']);

	        g.select('.nv-controlsWrap')
	            .datum(controlsData)
	            .call(controls);


	        if ( margin.top != Math.max(controls.height(), legend.height()) ) {
	          margin.top = Math.max(controls.height(), legend.height());
	          availableHeight = (height || parseInt(container.style('height')) || 400)
	                             - margin.top - margin.bottom;
	        }


	        g.select('.nv-controlsWrap')
	            .attr('transform', 'translate(0,' + (-margin.top) +')');
	      }

	      //------------------------------------------------------------


	      wrap.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

	      if (rightAlignYAxis) {
	          g.select(".nv-y.nv-axis")
	              .attr("transform", "translate(" + availableWidth + ",0)");
	      }

	      //------------------------------------------------------------
	      // Main Chart Component(s)

	      //------------------------------------------------------------
	      //Set up interactive layer
	      if (useInteractiveGuideline) {
	        interactiveLayer
	           .width(availableWidth)
	           .height(availableHeight)
	           .margin({left: margin.left, top: margin.top})
	           .svgContainer(container)
	           .xScale(x);
	        wrap.select(".nv-interactive").call(interactiveLayer);
	      }

	      stacked
	        .width(availableWidth)
	        .height(availableHeight)

	      var stackedWrap = g.select('.nv-stackedWrap')
	          .datum(data);

	      stackedWrap.transition().call(stacked);

	      //------------------------------------------------------------


	      //------------------------------------------------------------
	      // Setup Axes

	      if (showXAxis) {
	        xAxis
	          .scale(x)
	          .ticks( availableWidth / 100 )
	          .tickSize( -availableHeight, 0);

	        g.select('.nv-x.nv-axis')
	            .attr('transform', 'translate(0,' + availableHeight + ')');

	        g.select('.nv-x.nv-axis')
	          .transition().duration(0)
	            .call(xAxis);
	      }

	      if (showYAxis) {
	        yAxis
	          .scale(y)
	          .ticks(stacked.offset() == 'wiggle' ? 0 : availableHeight / 36)
	          .tickSize(-availableWidth, 0)
	          .setTickFormat( (stacked.style() == 'expand' || stacked.style() == 'stack_percent')
	                ? d3.format('%') : yAxisTickFormat);

	        g.select('.nv-y.nv-axis')
	          .transition().duration(0)
	            .call(yAxis);
	      }

	      //------------------------------------------------------------


	      //============================================================
	      // Event Handling/Dispatching (in chart's scope)
	      //------------------------------------------------------------

	      stacked.dispatch.on('areaClick.toggle', function(e) {
	        if (data.filter(function(d) { return !d.disabled }).length === 1)
	          data.forEach(function(d) {
	            d.disabled = false;
	          });
	        else
	          data.forEach(function(d,i) {
	            d.disabled = (i != e.seriesIndex);
	          });

	        state.disabled = data.map(function(d) { return !!d.disabled });
	        dispatch.stateChange(state);

	        chart.update();
	      });

	      legend.dispatch.on('stateChange', function(newState) {
	        state.disabled = newState.disabled;
	        dispatch.stateChange(state);
	        chart.update();
	      });

	      controls.dispatch.on('legendClick', function(d,i) {
	        if (!d.disabled) return;

	        controlsData = controlsData.map(function(s) {
	          s.disabled = true;
	          return s;
	        });
	        d.disabled = false;

	        stacked.style(d.style);


	        state.style = stacked.style();
	        dispatch.stateChange(state);

	        chart.update();
	      });


	      interactiveLayer.dispatch.on('elementMousemove', function(e) {
	          stacked.clearHighlights();
	          var singlePoint, pointIndex, pointXLocation, allData = [];
	          data
	          .filter(function(series, i) {
	            series.seriesIndex = i;
	            return !series.disabled;
	          })
	          .forEach(function(series,i) {
	              pointIndex = nv.interactiveBisect(series.values, e.pointXValue, chart.x());
	              stacked.highlightPoint(i, pointIndex, true);
	              var point = series.values[pointIndex];
	              if (typeof point === 'undefined') return;
	              if (typeof singlePoint === 'undefined') singlePoint = point;
	              if (typeof pointXLocation === 'undefined') pointXLocation = chart.xScale()(chart.x()(point,pointIndex));

	              //If we are in 'expand' mode, use the stacked percent value instead of raw value.
	              var tooltipValue = (stacked.style() == 'expand') ? point.display.y : chart.y()(point,pointIndex);
	              allData.push({
	                  key: series.key,
	                  value: tooltipValue,
	                  color: color(series,series.seriesIndex),
	                  stackedValue: point.display
	              });
	          });

	          allData.reverse();

	          //Highlight the tooltip entry based on which stack the mouse is closest to.
	          if (allData.length > 2) {
	            var yValue = chart.yScale().invert(e.mouseY);
	            var yDistMax = Infinity, indexToHighlight = null;
	            allData.forEach(function(series,i) {

	               //To handle situation where the stacked area chart is negative, we need to use absolute values
	               //when checking if the mouse Y value is within the stack area.
	               yValue = Math.abs(yValue);
	               var stackedY0 = Math.abs(series.stackedValue.y0);
	               var stackedY = Math.abs(series.stackedValue.y);
	               if ( yValue >= stackedY0 && yValue <= (stackedY + stackedY0))
	               {
	                  indexToHighlight = i;
	                  return;
	               }
	            });
	            if (indexToHighlight != null)
	               allData[indexToHighlight].highlight = true;
	          }

	          var xValue = xAxis.tickFormat()(chart.x()(singlePoint,pointIndex));

	          //If we are in 'expand' mode, force the format to be a percentage.
	          var valueFormatter = (stacked.style() == 'expand') ?
	               function(d,i) {return d3.format(".1%")(d);} :
	               function(d,i) {return yAxis.tickFormat()(d); };
	          interactiveLayer.tooltip
	                  .position({left: pointXLocation + margin.left, top: e.mouseY + margin.top})
	                  .chartContainer(that.parentNode)
	                  .enabled(tooltips)
	                  .valueFormatter(valueFormatter)
	                  .data(
	                      {
	                        value: xValue,
	                        series: allData
	                      }
	                  )();

	          interactiveLayer.renderGuideLine(pointXLocation);

	      });

	      interactiveLayer.dispatch.on("elementMouseout",function(e) {
	          dispatch.tooltipHide();
	          stacked.clearHighlights();
	      });


	      dispatch.on('tooltipShow', function(e) {
	        if (tooltips) showTooltip(e, that.parentNode);
	      });

	      // Update chart from a state object passed to event handler
	      dispatch.on('changeState', function(e) {

	        if (typeof e.disabled !== 'undefined' && data.length === e.disabled.length) {
	          data.forEach(function(series,i) {
	            series.disabled = e.disabled[i];
	          });

	          state.disabled = e.disabled;
	        }

	        if (typeof e.style !== 'undefined') {
	          stacked.style(e.style);
	        }

	        chart.update();
	      });

	    });


	    return chart;
	  }


	  //============================================================
	  // Event Handling/Dispatching (out of chart's scope)
	  //------------------------------------------------------------

	  stacked.dispatch.on('tooltipShow', function(e) {
	    //disable tooltips when value ~= 0
	    //// TODO: consider removing points from voronoi that have 0 value instead of this hack
	    /*
	    if (!Math.round(stacked.y()(e.point) * 100)) {  // 100 will not be good for very small numbers... will have to think about making this valu dynamic, based on data range
	      setTimeout(function() { d3.selectAll('.point.hover').classed('hover', false) }, 0);
	      return false;
	    }
	   */

	    e.pos = [e.pos[0] + margin.left, e.pos[1] + margin.top],
	    dispatch.tooltipShow(e);
	  });

	  stacked.dispatch.on('tooltipHide', function(e) {
	    dispatch.tooltipHide(e);
	  });

	  dispatch.on('tooltipHide', function() {
	    if (tooltips) nv.tooltip.cleanup();
	  });

	  //============================================================


	  //============================================================
	  // Expose Public Variables
	  //------------------------------------------------------------

	  // expose chart's sub-components
	  chart.dispatch = dispatch;
	  chart.stacked = stacked;
	  chart.legend = legend;
	  chart.controls = controls;
	  chart.xAxis = xAxis;
	  chart.yAxis = yAxis;
	  chart.interactiveLayer = interactiveLayer;

	  d3.rebind(chart, stacked, 'x', 'y', 'size', 'xScale', 'yScale', 'xDomain', 'yDomain', 'xRange', 'yRange', 'sizeDomain', 'interactive', 'useVoronoi', 'offset', 'order', 'style', 'clipEdge', 'forceX', 'forceY', 'forceSize', 'interpolate');

	  chart.options = nv.utils.optionsFunc.bind(chart);

	  chart.margin = function(_) {
	    if (!arguments.length) return margin;
	    margin.top    = typeof _.top    != 'undefined' ? _.top    : margin.top;
	    margin.right  = typeof _.right  != 'undefined' ? _.right  : margin.right;
	    margin.bottom = typeof _.bottom != 'undefined' ? _.bottom : margin.bottom;
	    margin.left   = typeof _.left   != 'undefined' ? _.left   : margin.left;
	    return chart;
	  };

	  chart.width = function(_) {
	    if (!arguments.length) return width;
	    width = _;
	    return chart;
	  };

	  chart.height = function(_) {
	    if (!arguments.length) return height;
	    height = _;
	    return chart;
	  };

	  chart.color = function(_) {
	    if (!arguments.length) return color;
	    color = nv.utils.getColor(_);
	    legend.color(color);
	    stacked.color(color);
	    return chart;
	  };

	  chart.showControls = function(_) {
	    if (!arguments.length) return showControls;
	    showControls = _;
	    return chart;
	  };

	  chart.showLegend = function(_) {
	    if (!arguments.length) return showLegend;
	    showLegend = _;
	    return chart;
	  };

	  chart.showXAxis = function(_) {
	    if (!arguments.length) return showXAxis;
	    showXAxis = _;
	    return chart;
	  };

	  chart.showYAxis = function(_) {
	    if (!arguments.length) return showYAxis;
	    showYAxis = _;
	    return chart;
	  };

	  chart.rightAlignYAxis = function(_) {
	    if(!arguments.length) return rightAlignYAxis;
	    rightAlignYAxis = _;
	    yAxis.orient( (_) ? 'right' : 'left');
	    return chart;
	  };

	  chart.useInteractiveGuideline = function(_) {
	    if(!arguments.length) return useInteractiveGuideline;
	    useInteractiveGuideline = _;
	    if (_ === true) {
	       chart.interactive(false);
	       chart.useVoronoi(false);
	    }
	    return chart;
	  };

	  chart.tooltip = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.tooltips = function(_) {
	    if (!arguments.length) return tooltips;
	    tooltips = _;
	    return chart;
	  };

	  chart.tooltipContent = function(_) {
	    if (!arguments.length) return tooltip;
	    tooltip = _;
	    return chart;
	  };

	  chart.state = function(_) {
	    if (!arguments.length) return state;
	    state = _;
	    return chart;
	  };

	  chart.defaultState = function(_) {
	    if (!arguments.length) return defaultState;
	    defaultState = _;
	    return chart;
	  };

	  chart.noData = function(_) {
	    if (!arguments.length) return noData;
	    noData = _;
	    return chart;
	  };

	  chart.transitionDuration = function(_) {
	    if (!arguments.length) return transitionDuration;
	    transitionDuration = _;
	    return chart;
	  };

	  chart.controlsData = function(_) {
	    if (!arguments.length) return cData;
	    cData = _;
	    return chart;
	  };

	  chart.controlLabels = function(_) {
	    if (!arguments.length) return controlLabels;
	    if (typeof _ !== 'object') return controlLabels;
	    controlLabels = _;
	    return chart;
	  };

	  yAxis.setTickFormat = yAxis.tickFormat;

	  yAxis.tickFormat = function(_) {
	    if (!arguments.length) return yAxisTickFormat;
	    yAxisTickFormat = _;
	    return yAxis;
	  };


	  //============================================================

	  return chart;
	}
	})();

	/*** EXPORTS FROM exports-loader ***/
	module.exports = window.nv

/***/ }
/******/ ])