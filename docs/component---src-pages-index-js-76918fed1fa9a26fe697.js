(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{409:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),o=a.n(r),l=a(22),m=a(411),c=a.n(m),s=(a(59),a(97),a(194),a(79),a(60),a(42),a(41),a(72),a(421)),d=a(422),f=a(68),u=a(3),h=a(15),p=["og:locale:alternate"];var g=function(e){var t=e.title,a=e.meta;return i.a.createElement(u.c,null,function(e){var n=e.lang,r=e.availableLocales,o=e.locale;return i.a.createElement(f.b,{query:"8840273",render:function(e){var l=e.siteHeadData,m=e.pageHeadData,c="/"===Object(h.e)(n)?"index":Object(h.e)(n).replace(/^\//,"").replace(/\/$/,"").replace(/\//g,"___"),s=m.nodes.filter(function(e){return e.relativePath==="content/meta/"+c+"."+n+".md"}).shift(),f=l.nodes.filter(function(e){return e.relativePath==="content/meta/__site."+n+".md"}).shift(),u=function(e){var t=e.componentHeadData,a=e.pageHeadData,n=e.siteHeadData,i=e.availableLocales,r=e.locale,o={};Object.keys(a).forEach(function(e){a[e]&&(o[e]=a[e])});var l=[],m=[];return[].concat(function(e,t){var a=[].concat(e);return a.splice(e.indexOf(t),1),a.map(function(e){return{name:"og:locale:alternate",content:e}})}(i,r),t.meta||[],o.meta||[],n.meta||[]).forEach(function(e){(e.content||e.file)&&(!p.includes(e.name)&&l.includes(e.name)||m.push({name:e.name,content:e.content||Object(h.c)(e.file)}),l.push(e.name))}),{title:t.title||o.title||n.title,meta:m.map(function(e){return e.name.match(/^og:/)?{property:e.name,content:e.content}:e})}}({componentHeadData:{title:t,meta:a},pageHeadData:s&&s.childMarkdownRemark.frontmatter&&s.childMarkdownRemark.frontmatter.head||{},siteHeadData:f&&f.childMarkdownRemark.frontmatter&&f.childMarkdownRemark.frontmatter.head||{},availableLocales:r,locale:o});return i.a.createElement(d.Helmet,{title:u.title,meta:u.meta},i.a.createElement("html",{lang:n}))},data:s})})};g.propTypes={title:o.a.string,meta:o.a.arrayOf(o.a.shape({name:o.a.string.isRequired,content:o.a.string,file:o.a.string}))};var M=g,A=Object(l.d)(["0%{width:0;padding-bottom:0;opacity:1;}100%{width:100%;padding-bottom:100%;opacity:0;}"]),w=l.c.div.withConfig({displayName:"Loader__Container",componentId:"sc-1m03rig-0"})(["position:relative;display:inline-block;width:","rem;height:","rem;> div{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:","rem;border:4px solid ",";opacity:1;border-radius:50%;animation:"," 1.6s cubic-bezier(0,0.2,0.8,1) infinite;box-sizing:content-box;&:nth-of-type(2){animation-delay:-0.33s;}&:last-of-type{animation-delay:-0.66s;}}"],function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.theme.colors.interactive},A),T=function(e){var t=e.size;return i.a.createElement(w,{size:t},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))};T.propTypes={size:o.a.number},T.defaultProps={size:10};var b=T,y=l.c.div.withConfig({displayName:"PageLoader__Container",componentId:"sc-1jv81q3-0"})(["display:inline-block;left:50%;position:relative;transform:translateX(-50%);"]),N=function(){return i.a.createElement(y,null,i.a.createElement(b,null))},k=(a(196),a(95)),L=a(93),R=a(80),O=(a(177),a(429)),S=l.c.footer.withConfig({displayName:"Footer__Container",componentId:"a1f04j-0"})(["width:100%;max-width:",";max-width:100vw;padding:0 2rem;margin:0 auto;display:block;letter-spacing:0.08em;margin-top:15rem;margin-bottom:3rem;text-transform:uppercase;font-size:60%;letter-spacing:.2rem;img{margin:0;}.left{text-align:left;float:left;line-height:1;.github{font-size:150%;line-height:.1;vertical-align:middle;}}.right{text-align:right;}.menu{display:none;list-style-type:none;text-align:center;}&.home,&.nav-toggled{position:fixed;bottom:0;left:0;max-width:100%;width:100%;color:white;z-index:15;.left,.right{opacity:.5;}}.lang-picker{margin-bottom:4rem;font-size:180%;display:none;animation:langin 6s ease;}@keyframes langin{0%,60%{opacity:0}100%{opacity:1}}@media screen and (max-width:","px){.left{text-align:center;float:none;}.right{text-align:center;}.lang-picker{display:block;text-align:center;}&.home,&.nav-toggled{.menu{display:block;margin:-1rem 0 3rem 0;li{display:none;&.item-2{display:block;font-size:160%;a{color:white}}}}}}"],function(e){return e.theme.dimensions.contentWidth},function(e){return e.theme.dimensions.mobileBreakpoint-1}),v=function(e){return i.a.createElement(u.e,null,function(t){var a=t.toggle;return i.a.createElement(n.Fragment,null,i.a.createElement(k.a,{render:function(t){var n=t.frontmatter;return i.a.createElement(S,{className:(e.home?"home":"")+" "+(a?"nav-toggled":"")},i.a.createElement("div",{className:"left"},i.a.createElement(R.a,{delay:350},n.footer.left)," ",i.a.createElement(L.a,{href:"https://github.com/tomasvrana/tomasvrana.com",className:"github",target:"_blank"},i.a.createElement(O.a,null)),"  ",i.a.createElement(R.a,{delay:400},"E-mail: tom@vrana.org")),i.a.createElement("div",{className:"right"},i.a.createElement(R.a,{delay:330},n.footer.rights)))}}))})};v.propTypes={home:o.a.bool};var E=v,C=l.c.main.withConfig({displayName:"Home__Main",componentId:"hx3q39-0"})(["position:relative;z-index:1;margin:0;width:100%;padding:0;opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),V=l.c.div.withConfig({displayName:"Home__PageLoaderContainer",componentId:"hx3q39-1"})(["opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),j=function(e){var t=e.children,a=e.pageLoading,r=Object(n.useState)(null),o=r[0],l=r[1],m=Object(n.useState)(null),s=m[0],d=m[1];return Object(n.useEffect)(function(){var e;return a?(l(!1),d(!0)):(d(!1),e=setTimeout(function(){l(!0)},500)),function(){clearTimeout(e)}},[a]),i.a.createElement(c.a,{transitionName:"page-content",transitionEnterTimeout:500,transitionLeaveTimeout:500},(null===s&&a||s)&&i.a.createElement(V,{key:"page_loader_"+Object(h.d)()},i.a.createElement(N,null)),(null===o&&!a||o)&&i.a.createElement(C,{key:"page_content_"+Object(h.d)()},t))};j.propTypes={children:o.a.node,pageLoading:o.a.bool};var I=function(e){var t=e.children,a=e.headData,r=void 0===a?null:a;return i.a.createElement(u.i,null,function(e){var a=e.loading;return i.a.createElement(n.Fragment,null,i.a.createElement(M,r),i.a.createElement(j,{pageLoading:a},t),i.a.createElement(E,{home:!0}))})};I.propTypes={children:j.propTypes.children,headData:o.a.object};var x=I,P=a(427),D=function(e){var t=e.render;return i.a.createElement(u.c,null,function(e){var a=e.lang;return i.a.createElement(f.b,{query:"3397187471",render:function(e){var n=e.allFile.nodes.filter(function(e){return e.relativePath==="content/pages/welcome/"+a+".md"}).shift();if(!n)throw new Error("No content found for home page using language "+a);return t(n.childMarkdownRemark)},data:P})})};D.propTypes={render:o.a.func.isRequired};var z=D,G=l.c.h1.withConfig({displayName:"Title__PageTitle",componentId:"sc-1bb0yxx-0"})(["text-align:left;margin:1em 0 2em 0;filter:blur(2px);text-transform:uppercase;&.large{text-transform:none;font-size:270%;}animation:blur 16s ease 0s infinite;-webkit-animation:blur 16s ease 0s infinite;-moz-animation:blur 16s ease 0s infinite;@keyframes blur{0%,39%,41%,43%,45%,100%{-webkit-filter:blur(0px);-moz-filter:blur(0px);-o-filter:blur(0px);-ms-filter:blur(0px);}40%,42%,44%,46%{-webkit-filter:blur(2px);-moz-filter:blur(2px);-o-filter:blur(2px);-ms-filter:blur(2px);}}"]),W=function(e){return i.a.createElement(G,{className:e.large?"large":""},i.a.createElement(R.a,{method:e.method,rewrite:e.rewrite,rewriteRandom:e.rewriteRandom,rewriteDelay:e.rewriteDelay,delay:e.delay},e.children))};W.propTypes={method:o.a.string,rewrite:o.a.string,rewriteRandom:o.a.string,rewriteDelay:o.a.string,delay:o.a.number,large:o.a.bool,children:o.a.node};var _=W,F=(a(428),l.c.div.withConfig({displayName:"Appear__Container",componentId:"wdxw1w-0"})(["display:inline-block;opacity:0;&.appear{transition:opacity 2s ease;opacity:1;}"])),H=function(e){var t=Object(n.useState)(!1),a=t[0],r=t[1];return Object(n.useEffect)(function(){setTimeout(function(){r(!0)},20*e.delay)},[]),i.a.createElement(F,{className:""+(a&&"appear")},e.children)};H.propTypes={method:o.a.string,delay:o.a.number,children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])};a(195);var K=l.c.div.withConfig({displayName:"Noise__Container",componentId:"c7dpqf-0"})(["position:fixed;top:0;@keyframes gradient{0%{background-position:0% 100%;}50%{background-position:0% 0%;}100%{background-position:0% 100%;}}@keyframes barsmove{0%{background-position:0% 0%;}100%{background-position:100% 0%;}}.grad{position:absolute;width:100%;height:100%;background:linear-gradient(-3deg,rgba(0,0,0,0) 20%,rgba(0,0,20,.5) 50%,rgba(0,0,0,0) 80%);animation:gradient 10s ease infinite;background-size:200% 200%;}.bars{position:absolute;opacity:.7;width:100%;height:100%;background:linear-gradient(91deg,#0f0 0%,#0f0 6%,#f0f 7%,#f0f 14%,#0ff 15%,#0ff 21%,#0f0 22%,#0f0 28%,#f0f 29%,#f0f 35%,#f00 36%,#f00 42%,#00f 43%,#00f 49%,#0f0 50%,#0f0 56%,#f0f 57%,#f0f 63%,#0ff 64%,#0ff 70%,#0f0 71%,#0f0 77%,#f0f 78%,#f0f 84%,#f00 85%,#f00 93%,#00f 94%,#00f 100%);animation:barsmove 50s linear infinite;background-size:215% 215%;}.bars.fast{animation:barsmove 25s linear infinite;}.bars.in{opacity:.7;}.barsback{position:absolute;opacity:.5;width:100%;height:100%;background:linear-gradient(-90deg,#00f 7%,#00f 14%,#0ff 15%,#0ff 21%,#0f0 22%,#0f0 28%,#f0f 29%,#f0f 35%,#f00 36%,#f00 42%,#ff0 43%,#ff0 49%,#00f 57%,#00f 63%,#0ff 64%,#0ff 70%,#0f0 71%,#0f0 77%,#f0f 78%,#f0f 84%,#f00 85%,#f00 93%,#ff0 94%,#ff0 100%);animation:barsmove 40s linear infinite;background-size:215% 215%;}.barsback.fast{animation:barsmove 20s linear infinite;}.barsback.in{opacity:1;}#canvas{width:100%;height:100%;}#info{position:absolute;font-size:3rem;top:10rem;left:10rem;color:red}#info2{position:absolute;font-size:3rem;top:14rem;left:10rem;color:red}"]),Q=function(){var e,t,a,r=Object(n.useState)(!0),o=r[0],l=r[1],m=Object(n.useState)(!0),c=m[0],s=m[1],d=Object(n.useState)(!0),f=d[0],h=d[1],p=Object(n.useState)(!0),g=p[0],M=p[1],A=!0,w=0,T=300,b=!0,y=0,N=500,k=!0,L=0,R=100,O=!0,S=0,v=400,E=!0;var C=function n(){y++,L++,S++,++w>T&&(T=Math.floor(1e3*Math.random()),l(b=!b),w=0),y>N&&(N=Math.floor(1e3*Math.random()),s(k=!k),y=0),L>R&&(R=Math.floor(1e3*Math.random()),h(O=!O),L=0),S>v&&(v=Math.floor(1e3*Math.random()),M(E=!E),S=0),(A=!A)?a=requestAnimationFrame(n):(!function(t){e.width=window.innerWidth,e.height=window.innerHeight;var a=t.canvas.width,n=t.canvas.height,i=t.createImageData(a,n);new Uint32Array(i.data.buffer).length,t.putImageData(i,0,0)}(t),a=requestAnimationFrame(n))};return Object(n.useEffect)(function(){return e=document.getElementById("canvas"),t=e.getContext("2d"),C(),function(){cancelAnimationFrame(a)}},[]),i.a.createElement(u.g,null,function(e){var t=e.updateNavActive;return i.a.createElement(K,null,t(""),i.a.createElement("div",{className:"bars "+(o?"fast":"")+" "+(f?"in":"")}),i.a.createElement("div",{className:"barsback "+(c?"fast":"")+" "+(g?"in":"")}),i.a.createElement("div",{className:"grad"}),i.a.createElement("canvas",{id:"canvas"}))})},U=l.c.div.withConfig({displayName:"Welcome__Container",componentId:"sc-1q8c1u7-0"})(["padding:10rem 1em 0 1em;color:white;position:relative;z-index:100;"]),Y=l.c.div.withConfig({displayName:"Welcome__Wrap",componentId:"sc-1q8c1u7-1"})([""]),B=l.c.div.withConfig({displayName:"Welcome__Desc",componentId:"sc-1q8c1u7-2"})([""]),Z=l.c.ul.withConfig({displayName:"Welcome__Websites",componentId:"sc-1q8c1u7-6"})(["padding:0;font-size:85%;li{list-style-type:none}"]),J=function(){return i.a.createElement(z,{render:function(e){var t=e.frontmatter;return i.a.createElement(u.g,null,function(e){var a=e.updateNavActive;return i.a.createElement(Y,null,i.a.createElement(Q,null),i.a.createElement(U,null,a(t.content.href),i.a.createElement(_,{delay:200,rewrite:t.content.subtitle},t.content.title),i.a.createElement(B,null,i.a.createElement(R.a,{delay:250,method:"quicktyping"},t.content.desc)),i.a.createElement("br",null),i.a.createElement("h4",null,i.a.createElement(R.a,null,"Some websites I did:")),i.a.createElement(Z,null,t.content.websites&&t.content.websites.map(function(e,t){return i.a.createElement("li",null,e.url&&i.a.createElement(L.a,{href:e.url,target:"_blank"},i.a.createElement(R.a,null,e.title)))}))))})}})};t.default=function(){return i.a.createElement(x,null,i.a.createElement(J,null))}},421:function(e){e.exports={data:{siteHeadData:{nodes:[{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}}]},pageHeadData:{nodes:[{relativePath:"content/meta/404.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/404.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/attraction.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TURISTICKÁ ATRAKCE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/attraction.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOURIST ATTRACTION - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/cube.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOSTKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOSTKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/cube.en.md",childMarkdownRemark:{frontmatter:{head:{title:"CUBE - TOMAS VRANA",meta:[{name:"description",content:"CUBE - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/duracel.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/duracel.en.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/hospital.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEMOCNICE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/hospital.en.md",childMarkdownRemark:{frontmatter:{head:{title:"HOSPITAL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/images.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/images.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMÁŠ VRÁNA WEBDEV",meta:[{name:"description",content:"TOMÁŠ VRÁNA WEBDEV",file:""}]}}}},{relativePath:"content/meta/index.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMAS VRANA WEBDEV",meta:[{name:"description",content:"TOMAS VRANA WEBDEV",file:""}]}}}},{relativePath:"content/meta/information.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMACE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"INFORMACE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/information.en.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMATION - TOMAS VRANA",meta:[{name:"description",content:"INFORMATION - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/islam.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",meta:[{name:"description",content:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/islam.en.md",childMarkdownRemark:{frontmatter:{head:{title:"ISLAM COMING - TOMAS VRANA",meta:[{name:"description",content:"ISLAM COMING - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMAS VRANA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/konevmen.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KONEVMEN - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/konevmen.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KONĚVMEN - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/maniac.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/maniac.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAC - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/messenger.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POSLÍČEK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/messenger.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MESSENGER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/mother.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MOTHER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/mother.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MATKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/nepu.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPÚ - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/nepu.en.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPU - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/progress.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POKROK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/progress.en.md",childMarkdownRemark:{frontmatter:{head:{title:"PROGRESS - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/rainbowball.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DUHOVKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/rainbowball.en.md",childMarkdownRemark:{frontmatter:{head:{title:"RAINBOW BALL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/spaces.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"PROSTOR - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/spaces.en.md",childMarkdownRemark:{frontmatter:{head:{title:"SPACES - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}}]}}}},427:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/pages/welcome/cz.md",childMarkdownRemark:{frontmatter:{content:{title:"Website Front-end development",subtitle:"Lamp stack|React|Gatby",desc:"Hi. I'm Tom. I do bullet-proof website front-end development using LAMP stack with React and Gatsby or WordPress.\n",member:"TV is a member of an art collective of gallery Gottfrei.\n",contact:"E-mail: tom@vrana.org",href:"/information/",experience:{title:"Zkušenost",items:[{title:null,desc:null}]},exhibitions:{title:"Výstavy",items:[{title:null,desc:null}]},websites:[{title:"iohk.io",url:"https://iohk.io"},{title:"ernieels.com",url:"https://ernieels.com"},{title:"sgt.tejnorova.com",url:"https://sgt.tejnorova.com/"},{title:"sakarilerkkanen.com",url:"https://sakarilerkkanen.com"},{title:"lucielerkkanen.com",url:"https://lucielerkkanen.com"}]}}}},{relativePath:"content/pages/welcome/en.md",childMarkdownRemark:{frontmatter:{content:{title:"Website Front-end development",subtitle:"Lamp stack|React|Gatby",desc:"Hi. I'm Tom. I do bullet-proof website front-end development using LAMP stack with React and Gatsby.\n",member:"TV is a member of an art collective of gallery Gottfrei.\n",contact:"E-mail: tom@vrana.org",href:"/information/",experience:{title:"Zkušenost",items:[{title:null,desc:null}]},exhibitions:{title:"Výstavy",items:[{title:null,desc:null}]},websites:null}}}}]}}}},428:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDAuNSAyMS4zIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTx0aXRsZT5Hb3R0ZnJlaTwvdGl0bGU+CjxnPgoJPHBhdGggZD0iTTkuMiwxMy43bDUuOCwwYy0xLDEuNi0yLjYsMi42LTQuNCwyLjZjLTMuMSwwLTUuNS0yLjQtNS41LTUuNmMwLTMuMSwyLjQtNS40LDUuNS01LjRjMS42LDAsMi45LDAuNiw0LDJoNS44bDAtNy4xSDE2djIKCQljLTAuOS0wLjYtMS4xLTAuNy0xLjQtMC45Yy0xLjEtMC42LTIuNy0xLTQuMi0xQzQuNiwwLjMsMCw1LDAsMTAuN2MwLDUuOCw0LjYsMTAuNSwxMC40LDEwLjVjMi42LDAsNC43LTAuOSw2LTIuNWwwLDIuMWw0LjEsMAoJCWwwLTExLjNIOS4yVjEzLjd6Ij48L3BhdGg+Cgk8cGF0aCBkPSJNMjkuMiw1LjJjLTQuNCwwLTguMSwzLjYtOC4xLDhjMCw0LjQsMy43LDguMSw4LjEsOC4xYzQuNCwwLDguMS0zLjYsOC4xLThDMzcuNCw4LjgsMzMuOCw1LjIsMjkuMiw1LjJ6IE0yOS4zLDE2LjkKCQljLTIsMC0zLjYtMS43LTMuNi0zLjdjMC0yLDEuNi0zLjcsMy42LTMuN2MyLDAsMy42LDEuNiwzLjYsMy43QzMyLjgsMTUuMiwzMS4yLDE2LjksMjkuMywxNi45eiI+PC9wYXRoPgoJPHBhdGggZD0iTTQ5LjcsOS44bDAsMTFoNC41bDAtMTFoNC4xbDAsMTFoNC41bDAtMTFoNC4xbDAsMTFsNC41LDB2LTYuOWMwLTIuNCwyLTQuMiw0LjQtMy45VjUuNGMtMi4xLTAuMi00LjEsMS4zLTQuOCwzVjUuNmgtOC4yCgkJYzAtMC42LDAuMS0wLjgsMC4yLTEuMWMwLjItMC40LDAuNy0wLjcsMS4zLTAuN2MwLjUsMCwyLjEsMCwyLjQsMFYwLjFjLTAuMywwLTEuNS0wLjEtMi0wLjFjLTQuMi0wLjEtNi4zLDEuNy02LjQsNS42aC00LjFWMC4yCgkJaC00LjV2NS41aC00LjFsMC01LjVoLTQuNXY1LjVoLTQuM3Y0LjFoNC4zdjExLjFsNC41LDBsMC0xMUg0OS43eiI+PC9wYXRoPgoJPHBhdGggZD0iTTgzLjUsMTcuNGMtMS43LDAtMy0wLjktMy43LTIuNEw5MSwxNWMwLjItMC44LDAuMi0xLjIsMC4yLTEuOGMwLTQuNS0zLjUtNy45LTcuOS03LjljLTQuNCwwLTcuOSwzLjUtNy45LDguMQoJCWMwLDQuNSwzLjUsOC4xLDgsOC4xYzMuMiwwLDYtMS45LDcuMi01aC00LjZDODUuNCwxNyw4NC41LDE3LjQsODMuNSwxNy40eiBNODMuMyw5LjFjMS43LDAsMy4xLDAuOSwzLjgsMi41aC03LjQKCQlDODAuMywxMC4xLDgxLjcsOS4xLDgzLjMsOS4xeiI+PC9wYXRoPgoJPHJlY3QgeD0iOTMuOCIgeT0iMCIgd2lkdGg9IjQuMyIgaGVpZ2h0PSI0Ij48L3JlY3Q+Cgk8cG9seWdvbiBwb2ludHM9Ijk4LjIsMTYuMyA5OC4yLDUuNiA5MS42LDUuNiA5MS42LDkuOCA5My43LDkuOCA5My43LDE2LjMgOTEuNiwxNi4zIDkxLjYsMjAuOCAxMDAuNSwyMC44IDEwMC41LDE2LjMgCSI+PC9wb2x5Z29uPgo8L2c+Cjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-index-js-76918fed1fa9a26fe697.js.map