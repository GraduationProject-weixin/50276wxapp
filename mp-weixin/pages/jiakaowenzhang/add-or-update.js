(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jiakaowenzhang/add-or-update"],{1820:function(e,n,a){"use strict";var t;a.d(n,"b",(function(){return r})),a.d(n,"c",(function(){return i})),a.d(n,"a",(function(){return t}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"6e33":function(e,n,a){"use strict";(function(e){a("945a");t(a("66fd"));var n=t(a("b728"));function t(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=a,e(n.default)}).call(this,a("543d")["createPage"])},"866a":function(e,n,a){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=r(a("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,a,t,r,i,o){try{var u=e[i](o),c=u.value}catch(s){return void a(s)}u.done?n(c):Promise.resolve(c).then(t,r)}function o(e){return function(){var n=this,a=arguments;return new Promise((function(t,r){var o=e.apply(n,a);function u(e){i(o,t,r,u,c,"next",e)}function c(e){i(o,t,r,u,c,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("6fa2"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{cross:"",ruleForm:{biaoti:"",fengmian:"",neirong:"",fabushijian:"",jiaxiaozhanghao:"",jiaxiaomingcheng:""},user:{},ro:{biaoti:!1,fengmian:!1,neirong:!1,fabushijian:!1,jiaxiaozhanghao:!1,jiaxiaomingcheng:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var a=this;return o(t.default.mark((function r(){var i,o,u,c;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a.ruleForm.fabushijian=a.$utils.getCurDate(),i=e.getStorageSync("nowTable"),r.next=4,a.$api.session(i);case 4:if(o=r.sent,a.user=o.data,a.ruleForm.jiaxiaozhanghao=a.user.jiaxiaozhanghao,a.ro.jiaxiaozhanghao=!0,a.ruleForm.jiaxiaomingcheng=a.user.jiaxiaomingcheng,a.ro.jiaxiaomingcheng=!0,a.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(a.ruleForm.refid=n.refid,a.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=18;break}return a.ruleForm.id=n.id,r.next=16,a.$api.info("jiakaowenzhang",a.ruleForm.id);case 16:o=r.sent,a.ruleForm=o.data;case 18:if(a.cross=n.cross,!n.cross){r.next=50;break}u=e.getStorageSync("crossObj"),r.t0=t.default.keys(u);case 22:if((r.t1=r.t0()).done){r.next=50;break}if(c=r.t1.value,"biaoti"!=c){r.next=28;break}return a.ruleForm.biaoti=u[c],a.ro.biaoti=!0,r.abrupt("continue",22);case 28:if("fengmian"!=c){r.next=32;break}return a.ruleForm.fengmian=u[c],a.ro.fengmian=!0,r.abrupt("continue",22);case 32:if("neirong"!=c){r.next=36;break}return a.ruleForm.neirong=u[c],a.ro.neirong=!0,r.abrupt("continue",22);case 36:if("fabushijian"!=c){r.next=40;break}return a.ruleForm.fabushijian=u[c],a.ro.fabushijian=!0,r.abrupt("continue",22);case 40:if("jiaxiaozhanghao"!=c){r.next=44;break}return a.ruleForm.jiaxiaozhanghao=u[c],a.ro.jiaxiaozhanghao=!0,r.abrupt("continue",22);case 44:if("jiaxiaomingcheng"!=c){r.next=48;break}return a.ruleForm.jiaxiaomingcheng=u[c],a.ro.jiaxiaomingcheng=!0,r.abrupt("continue",22);case 48:r.next=22;break;case 50:a.styleChange();case 51:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianChange:function(e){this.ruleForm.fabushijian=e.target.value,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(t.default.mark((function a(){var r,i,o,u,c,s,f,l,g,d;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!n.cross){a.next=16;break}if(u=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==u){a.next=16;break}if(s=e.getStorageSync("crossObj"),u.startsWith("[")){a.next=12;break}for(f in s)f==u&&(s[f]=c);return l=e.getStorageSync("crossTable"),a.next=10,n.$api.update("".concat(l),s);case 10:a.next=16;break;case 12:r=Number(e.getStorageSync("userid")),i=s["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!r){a.next=38;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=i,g={page:1,limit:10,crossuserid:r,crossrefid:i},a.next=22,n.$api.list("jiakaowenzhang",g);case 22:if(d=a.sent,!(d.data.total>=o)){a.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),a.abrupt("return",!1);case 28:if(!n.ruleForm.id){a.next=33;break}return a.next=31,n.$api.update("jiakaowenzhang",n.ruleForm);case 31:a.next=35;break;case 33:return a.next=35,n.$api.add("jiakaowenzhang",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:a.next=46;break;case 38:if(!n.ruleForm.id){a.next=43;break}return a.next=41,n.$api.update("jiakaowenzhang",n.ruleForm);case 41:a.next=45;break;case 43:return a.next=45,n.$api.add("jiakaowenzhang",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return a.stop()}}),a)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,a=n.getFullYear(),t=n.getMonth()+1,r=n.getDate();return"start"===e?a-=60:"end"===e&&(a+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(a,"-").concat(t,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,a("543d")["default"])},a66f:function(e,n,a){},b728:function(e,n,a){"use strict";a.r(n);var t=a("1820"),r=a("ee08");for(var i in r)"default"!==i&&function(e){a.d(n,e,(function(){return r[e]}))}(i);a("c451");var o,u=a("f0c5"),c=Object(u["a"])(r["default"],t["b"],t["c"],!1,null,"46e0c3f4",null,!1,t["a"],o);n["default"]=c.exports},c451:function(e,n,a){"use strict";var t=a("a66f"),r=a.n(t);r.a},ee08:function(e,n,a){"use strict";a.r(n);var t=a("866a"),r=a.n(t);for(var i in t)"default"!==i&&function(e){a.d(n,e,(function(){return t[e]}))}(i);n["default"]=r.a}},[["6e33","common/runtime","common/vendor"]]]);