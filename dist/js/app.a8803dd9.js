(function(){"use strict";var t={1993:function(t,e,o){var n=o(9242),r=o(3396);function a(t,e,o,n,a,i){const s=(0,r.up)("HeaderSection"),c=(0,r.up)("MainSection"),d=(0,r.up)("FooterSection");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(s),(0,r.Wm)(c),(0,r.Wm)(d)],64)}o(7658);var i=o.p+"img/logo_store.70c728e5.png";const s=t=>((0,r.dD)("data-v-20c28bfe"),t=t(),(0,r.Cn)(),t),c={class:"header"},d=s((()=>(0,r._)("img",{class:"logo-header",src:i},null,-1))),l=[d];function u(t,e,o,n,a,i){return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",{class:"header-wrapper",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},l)])}var f={name:"HeaderSection"},p=o(89);const v=(0,p.Z)(f,[["render",u],["__scopeId","data-v-20c28bfe"]]);var h=v;const b=t=>((0,r.dD)("data-v-ff227b62"),t=t(),(0,r.Cn)(),t),m={class:"main"},g=b((()=>(0,r._)("div",{class:"bar"},null,-1))),y=b((()=>(0,r._)("div",{class:"bar"},null,-1))),w=b((()=>(0,r._)("div",{class:"bar"},null,-1))),S=[g,y,w];function _(t,e,o,n,a,i){const s=(0,r.up)("ProductCard"),c=(0,r.up)("SidebarSection");return(0,r.wg)(),(0,r.iD)("div",m,[(0,r._)("div",{class:"menu-sidebar",onClick:e[0]||(e[0]=(...t)=>i.showSidebar&&i.showSidebar(...t))},S),(0,r.Wm)(s,{detailsOfProducts:a.listAllProducts},null,8,["detailsOfProducts"]),(0,r.Wm)(c,{onCheck:i.getSelected,show:a.sidebarVisible,"onUpdate:show":e[1]||(e[1]=t=>a.sidebarVisible=t)},null,8,["onCheck","show"])])}var k=o(7139);const P={class:"product-title"},C={class:"image-product"},O=["src"],j={class:"product-price"};function A(t,e,o,n,a,i){return(0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.detailsOfProducts,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"product-card",key:t.id},[(0,r._)("div",P,(0,k.zw)(t.title),1),(0,r._)("div",C,[(0,r._)("img",{src:t.image,alt:"product-image"},null,8,O)]),(0,r._)("div",j,(0,k.zw)(t.price)+"$",1)])))),128)}var D={name:"ProductCard",props:{detailsOfProducts:{type:Array,required:!0}}};const M=(0,p.Z)(D,[["render",A],["__scopeId","data-v-b560e1e4"]]);var E=M;const H={key:0,class:"sidebar"},T={class:"sidebar-menu"},V={class:"menu-content"},Z=["onClick"];function I(t,e,o,a,i,s){return o.show?((0,r.wg)(),(0,r.iD)("div",H,[(0,r._)("div",T,[(0,r._)("div",{class:"close-sidebar",onClick:e[0]||(e[0]=(0,n.iM)(((...t)=>s.hideSidebar&&s.hideSidebar(...t)),["stop"]))},"X"),(0,r._)("div",V,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.categoryProducts,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"category-menu",key:t,onClick:e=>s.getOneCategory(t)},(0,k.zw)(t),9,Z)))),128))])])])):(0,r.kq)("",!0)}o(541);var W={name:"SidebarSection",props:{show:{type:Boolean,default:!1}},data(){return{categoryProducts:null,selectedCategory:null}},methods:{async getAllCategory(){const t="https://fakestoreapi.com/products/categories",e=await fetch(t).then((t=>t.json()));this.categoryProducts=e,this.categoryProducts.unshift("all products")},getOneCategory(t){this.selectedCategory=t,this.$emit("check",this.selectedCategory)},hideSidebar(){this.$emit("update:show",!1)}},mounted(){this.getAllCategory()}};const F=(0,p.Z)(W,[["render",I],["__scopeId","data-v-cfa54848"]]);var L=F,$={name:"MainSection",components:{ProductCard:E,SidebarSection:L},data(){return{listAllProducts:[],sidebarVisible:!1}},methods:{async getListAllProducts(){console.log(this.sidebarVisible),this.listAllProducts=[];const t="https://fakestoreapi.com/products",e=await fetch(t).then((t=>t.json()));e.forEach((t=>this.listAllProducts.push({id:t.id,title:t.title,description:t.description,rating:{count:t.rating.count,rate:t.rating.rate},price:t.price,image:t.image,category:t.category})))},async getSelected(t){if("all products"===t)await this.getListAllProducts();else{const e=await fetch(`https://fakestoreapi.com/products/category/${t}`).then((t=>t.json()));this.listAllProducts=e}},showSidebar(){this.sidebarVisible=!0,console.log(this.sidebarVisible)}},mounted(){this.getListAllProducts()}};const x=(0,p.Z)($,[["render",_],["__scopeId","data-v-ff227b62"]]);var q=x;const z={class:"footer"},N=(0,r.uE)('<div class="footer-section" data-v-2bd9d280><div class="footer-contacts" data-v-2bd9d280><address class="contacts" data-v-2bd9d280><a href="mailto:philipp@funtcoffee.com.ua" data-v-2bd9d280><span class="email" data-v-2bd9d280>e-mail: philipp@funtcoffee.com.ua</span></a><a class="tel:+380970010508" data-v-2bd9d280><span data-v-2bd9d280>tel: +38 097 001 05 08</span></a></address></div><div class="footer-social" data-v-2bd9d280><ul class="social" data-v-2bd9d280><li class="social-item fb" data-v-2bd9d280><a href="#" class="social-link" data-v-2bd9d280>f</a></li><li class="social-item in" data-v-2bd9d280><a href="#" class="social-link" data-v-2bd9d280>In</a></li></ul></div></div>',1),Y=[N];function B(t,e,o,n,a,i){return(0,r.wg)(),(0,r.iD)("div",z,Y)}var K={name:"FooterSection"};const U=(0,p.Z)(K,[["render",B],["__scopeId","data-v-2bd9d280"]]);var X=U,G={components:{HeaderSection:h,MainSection:q,FooterSection:X}};const J=(0,p.Z)(G,[["render",a]]);var Q=J,R=o(2483);const tt={class:"home-view"};function et(t,e,o,n,a,i){const s=(0,r.up)("MainSection");return(0,r.wg)(),(0,r.iD)("div",tt,[(0,r.Wm)(s)])}var ot={name:"HomeView",components:{MainSection:q}};const nt=(0,p.Z)(ot,[["render",et]]);var rt=nt;const at=[{path:"/",name:"home",component:rt},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,7381))}],it=(0,R.p7)({history:(0,R.PO)("/Store-app/"),routes:at});var st=it;(0,n.ri)(Q).use(st).mount("#app")}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,r,a){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],r=t[l][1],a=t[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[c])}))?n.splice(c--,1):(s=!1,a<i&&(i=a));if(s){t.splice(l--,1);var d=r();void 0!==d&&(e=d)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[n,r,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.0bdabcf3.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="app-store:";o.l=function(n,r,a,i){if(t[n])t[n].push(r);else{var s,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+a){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",e+a),s.src=n),t[n]=[r];var f=function(e,o){s.onerror=s.onload=null,clearTimeout(p);var r=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(o)})),e)return e(o)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/Store-app/"}(),function(){var t={143:0};o.f.j=function(e,n){var r=o.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var a=new Promise((function(o,n){r=t[e]=[o,n]}));n.push(r[2]=a);var i=o.p+o.u(e),s=new Error,c=function(n){if(o.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,r[1](s)}};o.l(i,c,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,a,i=n[0],s=n[1],c=n[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(c)var l=c(o)}for(e&&e(n);d<i.length;d++)a=i[d],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(l)},n=self["webpackChunkapp_store"]=self["webpackChunkapp_store"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(1993)}));n=o.O(n)})();
//# sourceMappingURL=app.a8803dd9.js.map