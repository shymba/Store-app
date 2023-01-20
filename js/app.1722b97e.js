(function(){"use strict";var t={5380:function(t,e,n){var r=n(9242),o=n(3396);function i(t,e,n,r,i,c){const a=(0,o.up)("HeaderSection"),u=(0,o.up)("MainSection"),s=(0,o.up)("FooterSection");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(a),(0,o.Wm)(u),(0,o.Wm)(s)],64)}n(7658);var c=n.p+"img/logo_store.70c728e5.png";const a=t=>((0,o.dD)("data-v-5893500c"),t=t(),(0,o.Cn)(),t),u={class:"header"},s=a((()=>(0,o._)("button",{class:"menu-btn"},"Menu",-1))),d=a((()=>(0,o._)("img",{class:"logo-header",src:c},null,-1))),l=[d];function f(t,e,n,r,i,c){return(0,o.wg)(),(0,o.iD)("div",u,[s,(0,o._)("div",{class:"header-wrapper",onClick:e[0]||(e[0]=e=>t.$router.push("/"))},l)])}var p={name:"HeaderSection"},v=n(89);const m=(0,v.Z)(p,[["render",f],["__scopeId","data-v-5893500c"]]);var g=m;const h={class:"main"};function b(t,e,n,r,i,c){const a=(0,o.up)("ProductCard");return(0,o.wg)(),(0,o.iD)("div",h,[(0,o.Wm)(a,{detailsOfProducts:i.listAllProducts},null,8,["detailsOfProducts"])])}var y=n(7139);const w={class:"product-title"},_={class:"image-product"},O=["src"],P={class:"product-price"};function S(t,e,n,r,i,c){return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.detailsOfProducts,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{class:"product-card",key:t.id},[(0,o._)("div",w,(0,y.zw)(t.title),1),(0,o._)("div",_,[(0,o._)("img",{src:t.image,alt:"product-image"},null,8,O)]),(0,o._)("div",P,(0,y.zw)(t.price)+"$",1)])))),128)}var k={name:"ProductCard",props:{detailsOfProducts:{type:Array,required:!0}}};const j=(0,v.Z)(k,[["render",S],["__scopeId","data-v-7ca2892f"]]);var C=j,A={name:"MainSection",components:{ProductCard:C},data(){return{listAllProducts:[]}},methods:{async getListAllProducts(){const t="https://fakestoreapi.com/products",e=await fetch(t).then((t=>t.json()));e.forEach((t=>this.listAllProducts.push({id:t.id,title:t.title,description:t.description,rating:{count:t.rating.count,rate:t.rating.rate},price:t.price,image:t.image,category:t.category})))}},mounted(){this.getListAllProducts()}};const M=(0,v.Z)(A,[["render",b],["__scopeId","data-v-4e0d8737"]]);var D=M;const E={class:"footer"},T=(0,o._)("h1",null,"Footer Block",-1),F=[T];function H(t,e,n,r,i,c){return(0,o.wg)(),(0,o.iD)("div",E,F)}var Z={name:"FooterSection"};const W=(0,v.Z)(Z,[["render",H]]);var x=W,L={components:{HeaderSection:g,MainSection:D,FooterSection:x}};const I=(0,v.Z)(L,[["render",i]]);var N=I,q=n(2483);const z={class:"home-view"};function B(t,e,n,r,i,c){const a=(0,o.up)("MainSection");return(0,o.wg)(),(0,o.iD)("div",z,[(0,o.Wm)(a)])}var Y={name:"HomeView",components:{MainSection:D}};const $=(0,v.Z)(Y,[["render",B]]);var K=$;const V=[{path:"/",name:"home",component:K},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7381))}],G=(0,q.p7)({history:(0,q.PO)("/Store-app/"),routes:V});var J=G;(0,r.ri)(N).use(J).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var c=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],i=t[d][2];for(var a=!0,u=0;u<r.length;u++)(!1&i||c>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(a=!1,i<c&&(c=i));if(a){t.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.d540d81d.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="app-store:";n.l=function(r,o,i,c){if(t[r])t[r].push(o);else{var a,u;if(void 0!==i)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){a=l;break}}a||(u=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=r),t[r]=[o];var f=function(e,n){a.onerror=a.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),u&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/Store-app/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var c=n.p+n.u(e),a=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+c+")",a.name="ChunkLoadError",a.type=i,a.request=c,o[1](a)}};n.l(c,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,c=r[0],a=r[1],u=r[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var d=u(n)}for(e&&e(r);s<c.length;s++)i=c[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(d)},r=self["webpackChunkapp_store"]=self["webpackChunkapp_store"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5380)}));r=n.O(r)})();
//# sourceMappingURL=app.1722b97e.js.map