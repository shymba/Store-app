(function(){"use strict";var e={8574:function(e,t,a){var n=a(9242),o=a(3396);function r(e,t,a,n,r,i){const c=(0,o.up)("HeaderSection"),s=(0,o.up)("MainSection"),d=(0,o.up)("FooterSection");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o.Wm)(s),(0,o.Wm)(d)],64)}a(7658);var i=a.p+"img/logo_store.70c728e5.png";const c=e=>((0,o.dD)("data-v-20c28bfe"),e=e(),(0,o.Cn)(),e),s={class:"header"},d=c((()=>(0,o._)("img",{class:"logo-header",src:i},null,-1))),l=[d];function u(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",s,[(0,o._)("div",{class:"header-wrapper",onClick:t[0]||(t[0]=t=>e.$router.push("/"))},l)])}var f={name:"HeaderSection"},p=a(89);const v=(0,p.Z)(f,[["render",u],["__scopeId","data-v-20c28bfe"]]);var g=v;const b=e=>((0,o.dD)("data-v-472d9aaf"),e=e(),(0,o.Cn)(),e),m={class:"main"},h=b((()=>(0,o._)("div",{class:"bar"},null,-1))),y=b((()=>(0,o._)("div",{class:"bar"},null,-1))),w=b((()=>(0,o._)("div",{class:"bar"},null,-1))),C=[h,y,w];function _(e,t,a,n,r,i){const c=(0,o.up)("ProductCard"),s=(0,o.up)("SidebarSection");return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",{class:"menu-sidebar",onClick:t[0]||(t[0]=(...e)=>i.showSidebar&&i.showSidebar(...e))},C),(0,o.Wm)(c,{detailsOfProducts:r.products},null,8,["detailsOfProducts"]),(0,o.Wm)(s,{onSelectedCategory:i.getSelectedCategory,show:r.sidebarVisible,"onUpdate:show":t[1]||(t[1]=e=>r.sidebarVisible=e)},null,8,["onSelectedCategory","show"])])}var S=a(7139);const k={class:"listOfCards"},O={class:"btn-section"},D={class:"btn-content"};function P(e,t,a,n,r,i){const c=(0,o.up)("OneCard");return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("div",O,[(0,o._)("div",D,[(0,o._)("button",{onClick:t[0]||(t[0]=e=>r.layout="list"),class:(0,S.C_)({active:"list"===r.layout})}," List ",2),(0,o._)("button",{onClick:t[1]||(t[1]=e=>r.layout="card"),class:(0,S.C_)({active:"card"===r.layout})}," Cards ",2)])]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.detailsOfProducts,(e=>((0,o.wg)(),(0,o.j4)(c,{layout:r.layout,key:e.id,oneCardDetails:e},null,8,["layout","oneCardDetails"])))),128))])}const j={key:0,class:"product-card"},A={class:"product-title"},M={class:"image-product"},Z=["src"],H={class:"product-price"},$={key:1,class:"product-card-list"},E={class:"image-product"},I=["src"],T={class:"card-description"},q={class:"product-title"},z={class:"product-description"},B={class:"product-price"};function W(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,["card"===a.layout?((0,o.wg)(),(0,o.iD)("div",j,[(0,o._)("div",A,(0,S.zw)(a.oneCardDetails.title),1),(0,o._)("div",M,[(0,o._)("img",{src:a.oneCardDetails.image,alt:"product-image"},null,8,Z)]),(0,o._)("div",H,(0,S.zw)(a.oneCardDetails.price)+"$",1)])):(0,o.kq)("",!0),"list"===a.layout?((0,o.wg)(),(0,o.iD)("div",$,[(0,o._)("div",E,[(0,o._)("img",{src:a.oneCardDetails.image,alt:"product-image"},null,8,I)]),(0,o._)("div",T,[(0,o._)("div",q,(0,S.zw)(a.oneCardDetails.title),1),(0,o._)("div",z,(0,S.zw)(a.oneCardDetails.description),1),(0,o._)("div",B,(0,S.zw)(a.oneCardDetails.price)+"$",1)])])):(0,o.kq)("",!0)],64)}var F={name:"OneCard",props:{oneCardDetails:{type:Object,required:!0},layout:"card"}};const V=(0,p.Z)(F,[["render",W],["__scopeId","data-v-45e9da2c"]]);var x=V,Y={name:"ProductCard",components:{OneCard:x},data(){return{layout:"card"}},props:{detailsOfProducts:{type:Array,required:!0}}};const L=(0,p.Z)(Y,[["render",P],["__scopeId","data-v-722599a9"]]);var N=L;const K={key:0,class:"sidebar"},U={class:"sidebar-menu"},X={class:"menu-content"},G=["onClick"];function J(e,t,a,r,i,c){return a.show?((0,o.wg)(),(0,o.iD)("div",K,[(0,o._)("div",U,[(0,o._)("div",{class:"close-sidebar",onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>c.hideSidebar&&c.hideSidebar(...e)),["stop"]))},"X"),(0,o._)("div",X,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.categoryProducts,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"category-menu",key:e,onClick:t=>c.getOneCategory(e)},(0,S.zw)(e),9,G)))),128))])])])):(0,o.kq)("",!0)}a(541);var Q=a(7327);class R{constructor(){(0,Q.Z)(this,"_apiBase","https://fakestoreapi.com/products")}async getAllProducts(){const e=await fetch(this._apiBase).then((e=>e.json()));return e}async getSelectedCategory(e){const t=await fetch(`${this._apiBase}/category/${e}`).then((e=>e.json()));return t}async getAllSidebarCategory(){const e=await fetch(`${this._apiBase}/categories`).then((e=>e.json()));return e}}const ee=new R;var te={name:"SidebarSection",props:{show:{type:Boolean,default:!1}},data(){return{categoryProducts:null}},methods:{async getAllCategory(){this.categoryProducts=await ee.getAllSidebarCategory(),this.categoryProducts.unshift("all products")},getOneCategory(e){this.$emit("selectedCategory",e)},hideSidebar(){this.$emit("update:show",!1)}},mounted(){this.getAllCategory()}};const ae=(0,p.Z)(te,[["render",J],["__scopeId","data-v-ba8c7866"]]);var ne=ae;const oe=new R;var re={name:"MainSection",components:{ProductCard:N,SidebarSection:ne},data(){return{products:[],sidebarVisible:!1}},methods:{async getSelectedCategory(e){this.products="all products"===e?await oe.getAllProducts():await oe.getSelectedCategory(e)},showSidebar(){this.sidebarVisible=!0}},async mounted(){this.products=await oe.getAllProducts()}};const ie=(0,p.Z)(re,[["render",_],["__scopeId","data-v-472d9aaf"]]);var ce=ie;const se={class:"footer"},de=(0,o.uE)('<div class="footer-section" data-v-5f2e4bec><div class="footer-contacts" data-v-5f2e4bec><address class="contacts" data-v-5f2e4bec><a href="mailto:philipp@funtcoffee.com.ua" data-v-5f2e4bec><span class="email" data-v-5f2e4bec>e-mail: testmail@gmail.com</span></a><a class="tel:+389991112233" data-v-5f2e4bec><span data-v-5f2e4bec>tel: +38 999 111 22 33</span></a></address></div><div class="footer-social" data-v-5f2e4bec><ul class="social" data-v-5f2e4bec><li class="social-item fb" data-v-5f2e4bec><a href="#" class="social-link" data-v-5f2e4bec>f</a></li><li class="social-item in" data-v-5f2e4bec><a href="#" class="social-link" data-v-5f2e4bec>In</a></li></ul></div></div>',1),le=[de];function ue(e,t,a,n,r,i){return(0,o.wg)(),(0,o.iD)("div",se,le)}var fe={name:"FooterSection"};const pe=(0,p.Z)(fe,[["render",ue],["__scopeId","data-v-5f2e4bec"]]);var ve=pe,ge={components:{HeaderSection:g,MainSection:ce,FooterSection:ve}};const be=(0,p.Z)(ge,[["render",r]]);var me=be,he=a(2483);const ye={class:"home-view"};function we(e,t,a,n,r,i){const c=(0,o.up)("MainSection");return(0,o.wg)(),(0,o.iD)("div",ye,[(0,o.Wm)(c)])}var Ce={name:"HomeView",components:{MainSection:ce}};const _e=(0,p.Z)(Ce,[["render",we]]);var Se=_e;const ke=[{path:"/",name:"home",component:Se},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,7381))}],Oe=(0,he.p7)({history:(0,he.PO)("/Store-app/"),routes:ke});var De=Oe;(0,n.ri)(me).use(De).mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],r=e[l][2];for(var c=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[s])}))?n.splice(s--,1):(c=!1,r<i&&(i=r));if(c){e.splice(l--,1);var d=o();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.3ad2cde2.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="app-store:";a.l=function(n,o,r,i){if(e[n])e[n].push(o);else{var c,s;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+r){c=u;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",t+r),c.src=n),e[n]=[o];var f=function(t,a){c.onerror=c.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(a)})),t)return t(a)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/Store-app/"}(),function(){var e={143:0};a.f.j=function(t,n){var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(a,n){o=e[t]=[a,n]}));n.push(o[2]=r);var i=a.p+a.u(t),c=new Error,s=function(n){if(a.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,o[1](c)}};a.l(i,s,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,i=n[0],c=n[1],s=n[2],d=0;if(i.some((function(t){return 0!==e[t]}))){for(o in c)a.o(c,o)&&(a.m[o]=c[o]);if(s)var l=s(a)}for(t&&t(n);d<i.length;d++)r=i[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(l)},n=self["webpackChunkapp_store"]=self["webpackChunkapp_store"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(8574)}));n=a.O(n)})();
//# sourceMappingURL=app.3d04fe6d.js.map