(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{409:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(2),r=n.n(o),l=n(22),m=n(411),c=n.n(m),d=(n(59),n(97),n(194),n(79),n(60),n(42),n(41),n(72),n(421)),s=n(422),f=n(68),u=n(3),p=n(15),h=["og:locale:alternate"];var g=function(e){var t=e.title,n=e.meta;return i.a.createElement(u.c,null,function(e){var a=e.lang,o=e.availableLocales,r=e.locale;return i.a.createElement(f.b,{query:"8840273",render:function(e){var l=e.siteHeadData,m=e.pageHeadData,c="/"===Object(p.e)(a)?"index":Object(p.e)(a).replace(/^\//,"").replace(/\/$/,"").replace(/\//g,"___"),d=m.nodes.filter(function(e){return e.relativePath==="content/meta/"+c+"."+a+".md"}).shift(),f=l.nodes.filter(function(e){return e.relativePath==="content/meta/__site."+a+".md"}).shift(),u=function(e){var t=e.componentHeadData,n=e.pageHeadData,a=e.siteHeadData,i=e.availableLocales,o=e.locale,r={};Object.keys(n).forEach(function(e){n[e]&&(r[e]=n[e])});var l=[],m=[];return[].concat(function(e,t){var n=[].concat(e);return n.splice(e.indexOf(t),1),n.map(function(e){return{name:"og:locale:alternate",content:e}})}(i,o),t.meta||[],r.meta||[],a.meta||[]).forEach(function(e){(e.content||e.file)&&(!h.includes(e.name)&&l.includes(e.name)||m.push({name:e.name,content:e.content||Object(p.c)(e.file)}),l.push(e.name))}),{title:t.title||r.title||a.title,meta:m.map(function(e){return e.name.match(/^og:/)?{property:e.name,content:e.content}:e})}}({componentHeadData:{title:t,meta:n},pageHeadData:d&&d.childMarkdownRemark.frontmatter&&d.childMarkdownRemark.frontmatter.head||{},siteHeadData:f&&f.childMarkdownRemark.frontmatter&&f.childMarkdownRemark.frontmatter.head||{},availableLocales:o,locale:r});return i.a.createElement(s.Helmet,{title:u.title,meta:u.meta},i.a.createElement("html",{lang:a}))},data:d})})};g.propTypes={title:r.a.string,meta:r.a.arrayOf(r.a.shape({name:r.a.string.isRequired,content:r.a.string,file:r.a.string}))};var M=g,A=Object(l.d)(["0%{width:0;padding-bottom:0;opacity:1;}100%{width:100%;padding-bottom:100%;opacity:0;}"]),w=l.c.div.withConfig({displayName:"Loader__Container",componentId:"sc-1m03rig-0"})(["position:relative;display:inline-block;width:","rem;height:","rem;> div{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:","rem;border:4px solid ",";opacity:1;border-radius:50%;animation:"," 1.6s cubic-bezier(0,0.2,0.8,1) infinite;box-sizing:content-box;&:nth-of-type(2){animation-delay:-0.33s;}&:last-of-type{animation-delay:-0.66s;}}"],function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.theme.colors.interactive},A),b=function(e){var t=e.size;return i.a.createElement(w,{size:t},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))};b.propTypes={size:r.a.number},b.defaultProps={size:10};var T=b,v=l.c.div.withConfig({displayName:"PageLoader__Container",componentId:"sc-1jv81q3-0"})(["display:inline-block;left:50%;position:relative;transform:translateX(-50%);"]),N=function(){return i.a.createElement(v,null,i.a.createElement(T,null))},L=(n(196),n(95)),R=n(93),k=n(80),O=(n(177),n(429)),y=l.c.footer.withConfig({displayName:"Footer__Container",componentId:"a1f04j-0"})(["width:100%;max-width:",";max-width:100vw;padding:0 2rem;margin:0 auto;display:block;letter-spacing:0.08em;margin-top:15rem;margin-bottom:3rem;text-transform:uppercase;font-size:60%;letter-spacing:.2rem;img{margin:0;}.left{text-align:left;float:left;line-height:1;.github{font-size:150%;line-height:.1;vertical-align:middle;}}.right{text-align:right;}.menu{display:none;list-style-type:none;text-align:center;}&.home,&.nav-toggled{position:fixed;bottom:0;left:0;max-width:100%;width:100%;color:white;z-index:15;.left,.right{opacity:.5;}}.lang-picker{margin-bottom:4rem;font-size:180%;display:none;animation:langin 6s ease;}@keyframes langin{0%,60%{opacity:0}100%{opacity:1}}@media screen and (max-width:","px){.left{text-align:center;float:none;}.right{text-align:center;}.lang-picker{display:block;text-align:center;}&.home,&.nav-toggled{.menu{display:block;margin:-1rem 0 3rem 0;li{display:none;&.item-2{display:block;font-size:160%;a{color:white}}}}}}"],function(e){return e.theme.dimensions.contentWidth},function(e){return e.theme.dimensions.mobileBreakpoint-1}),S=function(e){return i.a.createElement(u.e,null,function(t){var n=t.toggle;return i.a.createElement(a.Fragment,null,i.a.createElement(L.a,{render:function(t){var a=t.frontmatter;return i.a.createElement(y,{className:(e.home?"home":"")+" "+(n?"nav-toggled":"")},i.a.createElement("div",{className:"left"},i.a.createElement(k.a,{delay:350},a.footer.left)," ",i.a.createElement(R.a,{href:"https://github.com/tomasvrana/tomasvrana.com",className:"github",target:"_blank"},i.a.createElement(O.a,null)),"  ",i.a.createElement(k.a,{delay:400},"E-mail: tom@vrana.org")),i.a.createElement("div",{className:"right"},i.a.createElement(k.a,{delay:330},a.footer.rights)))}}))})};S.propTypes={home:r.a.bool};var E=S,V=l.c.main.withConfig({displayName:"Home__Main",componentId:"hx3q39-0"})(["position:relative;z-index:1;margin:0;width:100%;padding:0;opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),D=l.c.div.withConfig({displayName:"Home__PageLoaderContainer",componentId:"hx3q39-1"})(["opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),C=function(e){var t=e.children,n=e.pageLoading,o=Object(a.useState)(null),r=o[0],l=o[1],m=Object(a.useState)(null),d=m[0],s=m[1];return Object(a.useEffect)(function(){var e;return n?(l(!1),s(!0)):(s(!1),e=setTimeout(function(){l(!0)},500)),function(){clearTimeout(e)}},[n]),i.a.createElement(c.a,{transitionName:"page-content",transitionEnterTimeout:500,transitionLeaveTimeout:500},(null===d&&n||d)&&i.a.createElement(D,{key:"page_loader_"+Object(p.d)()},i.a.createElement(N,null)),(null===r&&!n||r)&&i.a.createElement(V,{key:"page_content_"+Object(p.d)()},t))};C.propTypes={children:r.a.node,pageLoading:r.a.bool};var j=function(e){var t=e.children,n=e.headData,o=void 0===n?null:n;return i.a.createElement(u.i,null,function(e){var n=e.loading;return i.a.createElement(a.Fragment,null,i.a.createElement(M,o),i.a.createElement(C,{pageLoading:n},t),i.a.createElement(E,{home:!0}))})};j.propTypes={children:C.propTypes.children,headData:r.a.object};var I=j,x=n(427),P=function(e){var t=e.render;return i.a.createElement(u.c,null,function(e){var n=e.lang;return i.a.createElement(f.b,{query:"3397187471",render:function(e){var a=e.allFile.nodes.filter(function(e){return e.relativePath==="content/pages/welcome/"+n+".md"}).shift();if(!a)throw new Error("No content found for home page using language "+n);return t(a.childMarkdownRemark)},data:x})})};P.propTypes={render:r.a.func.isRequired};var W=P,F=l.c.h1.withConfig({displayName:"Title__PageTitle",componentId:"sc-1bb0yxx-0"})(["text-align:left;margin:1em 0 2em 0;filter:blur(2px);text-transform:uppercase;&.large{text-transform:none;font-size:270%;}animation:blur 16s ease 0s infinite;-webkit-animation:blur 16s ease 0s infinite;-moz-animation:blur 16s ease 0s infinite;@keyframes blur{0%,39%,41%,43%,45%,100%{-webkit-filter:blur(0px);-moz-filter:blur(0px);-o-filter:blur(0px);-ms-filter:blur(0px);}40%,42%,44%,46%{-webkit-filter:blur(2px);-moz-filter:blur(2px);-o-filter:blur(2px);-ms-filter:blur(2px);}}"]),z=function(e){return i.a.createElement(F,{className:e.large?"large":""},i.a.createElement(k.a,{method:e.method,rewrite:e.rewrite,rewriteRandom:e.rewriteRandom,rewriteDelay:e.rewriteDelay,delay:e.delay},e.children))};z.propTypes={method:r.a.string,rewrite:r.a.string,rewriteRandom:r.a.string,rewriteDelay:r.a.string,delay:r.a.number,large:r.a.bool,children:r.a.node};var G=z,_=(n(428),l.c.div.withConfig({displayName:"Appear__Container",componentId:"wdxw1w-0"})(["display:inline-block;opacity:0;&.appear{transition:opacity 2s ease;opacity:1;}"])),H=function(e){var t=Object(a.useState)(!1),n=t[0],o=t[1];return Object(a.useEffect)(function(){setTimeout(function(){o(!0)},20*e.delay)},[]),i.a.createElement(_,{className:""+(n&&"appear")},e.children)};H.propTypes={method:r.a.string,delay:r.a.number,children:r.a.oneOfType([r.a.node,r.a.arrayOf(r.a.node)])};n(195);var K=l.c.div.withConfig({displayName:"Noise__Container",componentId:"c7dpqf-0"})(["position:fixed;top:0;@keyframes gradient{0%{background-position:0% 100%;}50%{background-position:0% 0%;}100%{background-position:0% 100%;}}@keyframes barsmove{0%{background-position:0% 0%;}100%{background-position:100% 0%;}}.grad{position:absolute;width:100%;height:100%;background:linear-gradient(-3deg,rgba(0,0,0,0) 20%,rgba(0,0,20,.5) 50%,rgba(0,0,0,0) 80%);animation:gradient 10s ease infinite;background-size:200% 200%;}.bars{position:absolute;opacity:.7;width:100%;height:100%;background:linear-gradient(91deg,#0f0 0%,#0f0 6%,#f0f 7%,#f0f 14%,#0ff 15%,#0ff 21%,#0f0 22%,#0f0 28%,#f0f 29%,#f0f 35%,#f00 36%,#f00 42%,#00f 43%,#00f 49%,#0f0 50%,#0f0 56%,#f0f 57%,#f0f 63%,#0ff 64%,#0ff 70%,#0f0 71%,#0f0 77%,#f0f 78%,#f0f 84%,#f00 85%,#f00 93%,#00f 94%,#00f 100%);animation:barsmove 50s linear infinite;background-size:215% 215%;}.bars.fast{animation:barsmove 25s linear infinite;}.bars.in{opacity:.7;}.barsback{position:absolute;opacity:.5;width:100%;height:100%;background:linear-gradient(-90deg,#00f 7%,#00f 14%,#0ff 15%,#0ff 21%,#0f0 22%,#0f0 28%,#f0f 29%,#f0f 35%,#f00 36%,#f00 42%,#ff0 43%,#ff0 49%,#00f 57%,#00f 63%,#0ff 64%,#0ff 70%,#0f0 71%,#0f0 77%,#f0f 78%,#f0f 84%,#f00 85%,#f00 93%,#ff0 94%,#ff0 100%);animation:barsmove 40s linear infinite;background-size:215% 215%;}.barsback.fast{animation:barsmove 20s linear infinite;}.barsback.in{opacity:1;}#canvas{width:100%;height:100%;}#info{position:absolute;font-size:3rem;top:10rem;left:10rem;color:red}#info2{position:absolute;font-size:3rem;top:14rem;left:10rem;color:red}"]),Q=function(){var e,t,n,o=Object(a.useState)(!0),r=o[0],l=o[1],m=Object(a.useState)(!0),c=m[0],d=m[1],s=Object(a.useState)(!0),f=s[0],p=s[1],h=Object(a.useState)(!0),g=h[0],M=h[1],A=!0,w=0,b=300,T=!0,v=0,N=500,L=!0,R=0,k=100,O=!0,y=0,S=400,E=!0;var V=function a(){v++,R++,y++,++w>b&&(b=Math.floor(1e3*Math.random()),l(T=!T),w=0),v>N&&(N=Math.floor(1e3*Math.random()),d(L=!L),v=0),R>k&&(k=Math.floor(1e3*Math.random()),p(O=!O),R=0),y>S&&(S=Math.floor(1e3*Math.random()),M(E=!E),y=0),(A=!A)?n=requestAnimationFrame(a):(!function(t){e.width=window.innerWidth,e.height=window.innerHeight;var n=t.canvas.width,a=t.canvas.height,i=t.createImageData(n,a);new Uint32Array(i.data.buffer).length,t.putImageData(i,0,0)}(t),n=requestAnimationFrame(a))};return Object(a.useEffect)(function(){return e=document.getElementById("canvas"),t=e.getContext("2d"),V(),function(){cancelAnimationFrame(n)}},[]),i.a.createElement(u.g,null,function(e){var t=e.updateNavActive;return i.a.createElement(K,null,t(""),i.a.createElement("div",{className:"bars "+(r?"fast":"")+" "+(f?"in":"")}),i.a.createElement("div",{className:"barsback "+(c?"fast":"")+" "+(g?"in":"")}),i.a.createElement("div",{className:"grad"}),i.a.createElement("canvas",{id:"canvas"}))})},U=l.c.div.withConfig({displayName:"Welcome__Container",componentId:"sc-1q8c1u7-0"})(["padding:10rem 1em 0 1em;color:white;position:relative;z-index:100;"]),Y=l.c.div.withConfig({displayName:"Welcome__Wrap",componentId:"sc-1q8c1u7-1"})([""]),Z=l.c.div.withConfig({displayName:"Welcome__Desc",componentId:"sc-1q8c1u7-2"})([""]),B=l.c.ul.withConfig({displayName:"Welcome__Websites",componentId:"sc-1q8c1u7-6"})(["padding:0;font-size:85%;li{list-style-type:none}"]),J=function(){return i.a.createElement(W,{render:function(e){var t=e.frontmatter;return i.a.createElement(u.g,null,function(e){var n=e.updateNavActive;return i.a.createElement(Y,null,i.a.createElement(Q,null),i.a.createElement(U,null,n(t.content.href),i.a.createElement(G,{delay:200,rewrite:t.content.subtitle},t.content.title),i.a.createElement(Z,null,i.a.createElement(k.a,{delay:250,method:"quicktyping"},t.content.desc)),i.a.createElement("br",null),i.a.createElement("h4",null,i.a.createElement(k.a,null,"Some websites I did:")),i.a.createElement(B,null,t.content.websites&&t.content.websites.map(function(e,t){return i.a.createElement("li",null,e.url&&i.a.createElement(R.a,{href:e.url,target:"_blank"},i.a.createElement(k.a,null,e.title)))}))))})}})};t.default=function(){return i.a.createElement(I,null,i.a.createElement(J,null))}},421:function(e){e.exports={data:{siteHeadData:{nodes:[{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"Tomas Vrana Website Front-end Developer",meta:[{name:"description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:title",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:site",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:creator",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"og:site_name",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"Tomas Vrana Website Front-end Developer",meta:[{name:"description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:title",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:site",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:creator",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"og:site_name",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}}]},pageHeadData:{nodes:[{relativePath:"content/meta/404.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/404.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"Tomas Vrana Website Front-end Developer",meta:[{name:"description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:title",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:site",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:creator",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"og:site_name",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/attraction.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TURISTICKÁ ATRAKCE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"Tomas Vrana Website Front-end Developer",meta:[{name:"description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:title",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:site",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:creator",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"Welcome to the Tomas Vrana Website Front-end Developer",file:""},{name:"og:site_name",content:"Tomas Vrana Website Front-end Developer",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/attraction.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOURIST ATTRACTION - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/cube.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOSTKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOSTKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/cube.en.md",childMarkdownRemark:{frontmatter:{head:{title:"CUBE - TOMAS VRANA",meta:[{name:"description",content:"CUBE - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/duracel.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/duracel.en.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/hospital.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEMOCNICE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/hospital.en.md",childMarkdownRemark:{frontmatter:{head:{title:"HOSPITAL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/images.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/images.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMÁŠ VRÁNA Website Front-end Developer",meta:[{name:"description",content:"TOMÁŠ VRÁNA Website Front-end Developer",file:""}]}}}},{relativePath:"content/meta/index.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMAS VRANA Website Front-end Developer",meta:[{name:"description",content:"TOMAS VRANA Website Front-end Developer",file:""}]}}}},{relativePath:"content/meta/information.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMACE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"INFORMACE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/information.en.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMATION - TOMAS VRANA",meta:[{name:"description",content:"INFORMATION - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/islam.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",meta:[{name:"description",content:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/islam.en.md",childMarkdownRemark:{frontmatter:{head:{title:"ISLAM COMING - TOMAS VRANA",meta:[{name:"description",content:"ISLAM COMING - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMAS VRANA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/konevmen.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KONĚVMEN - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/konevmen.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KONEVMEN - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/maniac.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAC - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/messenger.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POSLÍČEK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/maniac.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/messenger.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MESSENGER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/mother.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MATKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/mother.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MOTHER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/nepu.en.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPU - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/nepu.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPÚ - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/progress.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POKROK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/progress.en.md",childMarkdownRemark:{frontmatter:{head:{title:"PROGRESS - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/rainbowball.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DUHOVKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/rainbowball.en.md",childMarkdownRemark:{frontmatter:{head:{title:"RAINBOW BALL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/spaces.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"PROSTOR - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/spaces.en.md",childMarkdownRemark:{frontmatter:{head:{title:"SPACES - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}}]}}}},427:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/pages/welcome/cz.md",childMarkdownRemark:{frontmatter:{content:{title:"Website Front-end development",subtitle:"Lamp stack|React|Gatby",desc:"Hi. I'm Tom. I do bullet-proof website front-end development using LAMP stack with React and Gatsby or WordPress.\n",member:"TV is a member of an art collective of gallery Gottfrei.\n",contact:"E-mail: tom@vrana.org",href:"/information/",experience:{title:"Zkušenost",items:[{title:null,desc:null}]},exhibitions:{title:"Výstavy",items:[{title:null,desc:null}]},websites:[{title:"iohk.io",url:"https://iohk.io"},{title:"ernieels.com",url:"https://ernieels.com"},{title:"sgt.tejnorova.com",url:"https://sgt.tejnorova.com/"},{title:"sakarilerkkanen.com",url:"https://sakarilerkkanen.com"},{title:"lucielerkkanen.com",url:"https://lucielerkkanen.com"}]}}}},{relativePath:"content/pages/welcome/en.md",childMarkdownRemark:{frontmatter:{content:{title:"Website Front-end development",subtitle:"Lamp stack|React|Gatby",desc:"Hi. I'm Tom. I do bullet-proof website front-end development using LAMP stack with React and Gatsby.\n",member:"TV is a member of an art collective of gallery Gottfrei.\n",contact:"E-mail: tom@vrana.org",href:"/information/",experience:{title:"Zkušenost",items:[{title:null,desc:null}]},exhibitions:{title:"Výstavy",items:[{title:null,desc:null}]},websites:null}}}}]}}}},428:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDAuNSAyMS4zIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTx0aXRsZT5Hb3R0ZnJlaTwvdGl0bGU+CjxnPgoJPHBhdGggZD0iTTkuMiwxMy43bDUuOCwwYy0xLDEuNi0yLjYsMi42LTQuNCwyLjZjLTMuMSwwLTUuNS0yLjQtNS41LTUuNmMwLTMuMSwyLjQtNS40LDUuNS01LjRjMS42LDAsMi45LDAuNiw0LDJoNS44bDAtNy4xSDE2djIKCQljLTAuOS0wLjYtMS4xLTAuNy0xLjQtMC45Yy0xLjEtMC42LTIuNy0xLTQuMi0xQzQuNiwwLjMsMCw1LDAsMTAuN2MwLDUuOCw0LjYsMTAuNSwxMC40LDEwLjVjMi42LDAsNC43LTAuOSw2LTIuNWwwLDIuMWw0LjEsMAoJCWwwLTExLjNIOS4yVjEzLjd6Ij48L3BhdGg+Cgk8cGF0aCBkPSJNMjkuMiw1LjJjLTQuNCwwLTguMSwzLjYtOC4xLDhjMCw0LjQsMy43LDguMSw4LjEsOC4xYzQuNCwwLDguMS0zLjYsOC4xLThDMzcuNCw4LjgsMzMuOCw1LjIsMjkuMiw1LjJ6IE0yOS4zLDE2LjkKCQljLTIsMC0zLjYtMS43LTMuNi0zLjdjMC0yLDEuNi0zLjcsMy42LTMuN2MyLDAsMy42LDEuNiwzLjYsMy43QzMyLjgsMTUuMiwzMS4yLDE2LjksMjkuMywxNi45eiI+PC9wYXRoPgoJPHBhdGggZD0iTTQ5LjcsOS44bDAsMTFoNC41bDAtMTFoNC4xbDAsMTFoNC41bDAtMTFoNC4xbDAsMTFsNC41LDB2LTYuOWMwLTIuNCwyLTQuMiw0LjQtMy45VjUuNGMtMi4xLTAuMi00LjEsMS4zLTQuOCwzVjUuNmgtOC4yCgkJYzAtMC42LDAuMS0wLjgsMC4yLTEuMWMwLjItMC40LDAuNy0wLjcsMS4zLTAuN2MwLjUsMCwyLjEsMCwyLjQsMFYwLjFjLTAuMywwLTEuNS0wLjEtMi0wLjFjLTQuMi0wLjEtNi4zLDEuNy02LjQsNS42aC00LjFWMC4yCgkJaC00LjV2NS41aC00LjFsMC01LjVoLTQuNXY1LjVoLTQuM3Y0LjFoNC4zdjExLjFsNC41LDBsMC0xMUg0OS43eiI+PC9wYXRoPgoJPHBhdGggZD0iTTgzLjUsMTcuNGMtMS43LDAtMy0wLjktMy43LTIuNEw5MSwxNWMwLjItMC44LDAuMi0xLjIsMC4yLTEuOGMwLTQuNS0zLjUtNy45LTcuOS03LjljLTQuNCwwLTcuOSwzLjUtNy45LDguMQoJCWMwLDQuNSwzLjUsOC4xLDgsOC4xYzMuMiwwLDYtMS45LDcuMi01aC00LjZDODUuNCwxNyw4NC41LDE3LjQsODMuNSwxNy40eiBNODMuMyw5LjFjMS43LDAsMy4xLDAuOSwzLjgsMi41aC03LjQKCQlDODAuMywxMC4xLDgxLjcsOS4xLDgzLjMsOS4xeiI+PC9wYXRoPgoJPHJlY3QgeD0iOTMuOCIgeT0iMCIgd2lkdGg9IjQuMyIgaGVpZ2h0PSI0Ij48L3JlY3Q+Cgk8cG9seWdvbiBwb2ludHM9Ijk4LjIsMTYuMyA5OC4yLDUuNiA5MS42LDUuNiA5MS42LDkuOCA5My43LDkuOCA5My43LDE2LjMgOTEuNiwxNi4zIDkxLjYsMjAuOCAxMDAuNSwyMC44IDEwMC41LDE2LjMgCSI+PC9wb2x5Z29uPgo8L2c+Cjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-88445fc6bf380387ac9d.js.map