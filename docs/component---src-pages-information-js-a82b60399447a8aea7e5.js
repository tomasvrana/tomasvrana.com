(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{416:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(437),o=n(22),l=n(462),m=n(2),c=n.n(m),d=n(59),s=n(3),f=function(e){var t=e.render;return i.a.createElement(s.c,null,function(e){var n=e.lang;return i.a.createElement(d.b,{query:"1258577415",render:function(e){var a=e.allFile.nodes.filter(function(e){return e.relativePath==="content/pages/information/"+n+".md"}).shift();if(!a)throw new Error("No content found for home page using language "+n);return t(a.childMarkdownRemark)},data:l})})};f.propTypes={render:c.a.func.isRequired};var u=f,h=n(81),p=n(433),g=n(463),M=n.n(g),A=n(80),T=n(439),w=o.d.div.withConfig({displayName:"Information__Container",componentId:"sc-1cbsmh7-0"})(["@media screen and (max-width:","px){padding:0 1em;}"],function(e){return e.theme.dimensions.mobileBreakpoint-1}),y=o.d.div.withConfig({displayName:"Information__Desc",componentId:"sc-1cbsmh7-1"})([""]),N=o.d.div.withConfig({displayName:"Information__Contact",componentId:"sc-1cbsmh7-3"})([""]),b=o.d.div.withConfig({displayName:"Information__Logo",componentId:"sc-1cbsmh7-4"})(["padding:1em 0 2em 0;"]),L=function(){return i.a.createElement(u,{render:function(e){var t=e.frontmatter;return i.a.createElement(s.g,null,function(e){var n=e.updateNavActive;return i.a.createElement(w,null,n(t.content.href),i.a.createElement(p.a,{delay:200,rewrite:t.content.subtitle},t.content.title),i.a.createElement(y,null,i.a.createElement(A.a,{delay:250,method:"quicktyping"},t.content.desc)),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(y,null,i.a.createElement(A.a,{delay:300},t.content.member)),i.a.createElement(T.a,{delay:400},i.a.createElement(b,null,i.a.createElement(h.a,{href:"//gottfrei.com",target:"_blank"},i.a.createElement("img",{src:M.a,alt:"",width:"150"})))),i.a.createElement(N,null,i.a.createElement(A.a,{delay:350,method:"rolltyping"},t.content.contact)))})}})};t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(L,null))}},429:function(e,t,n){"use strict";n(60),n(97),n(195),n(82),n(61),n(42),n(41),n(73);var a=n(430),i=n(0),r=n.n(i),o=n(2),l=n.n(o),m=n(436),c=n(59),d=n(3),s=n(15),f=["og:locale:alternate"];var u=function(e){var t=e.title,n=e.meta;return r.a.createElement(d.c,null,function(e){var i=e.lang,o=e.availableLocales,l=e.locale;return r.a.createElement(c.b,{query:"8840273",render:function(e){var a=e.siteHeadData,c=e.pageHeadData,d="/"===Object(s.e)(i)?"index":Object(s.e)(i).replace(/^\//,"").replace(/\/$/,"").replace(/\//g,"___"),u=c.nodes.filter(function(e){return e.relativePath==="content/meta/"+d+"."+i+".md"}).shift(),h=a.nodes.filter(function(e){return e.relativePath==="content/meta/__site."+i+".md"}).shift(),p=function(e){var t=e.componentHeadData,n=e.pageHeadData,a=e.siteHeadData,i=e.availableLocales,r=e.locale,o={};Object.keys(n).forEach(function(e){n[e]&&(o[e]=n[e])});var l=[],m=[];return[].concat(function(e,t){var n=[].concat(e);return n.splice(e.indexOf(t),1),n.map(function(e){return{name:"og:locale:alternate",content:e}})}(i,r),t.meta||[],o.meta||[],a.meta||[]).forEach(function(e){(e.content||e.file)&&(!f.includes(e.name)&&l.includes(e.name)||m.push({name:e.name,content:e.content||Object(s.c)(e.file)}),l.push(e.name))}),{title:t.title||o.title||a.title,meta:m.map(function(e){return e.name.match(/^og:/)?{property:e.name,content:e.content}:e})}}({componentHeadData:{title:t,meta:n},pageHeadData:u&&u.childMarkdownRemark.frontmatter&&u.childMarkdownRemark.frontmatter.head||{},siteHeadData:h&&h.childMarkdownRemark.frontmatter&&h.childMarkdownRemark.frontmatter.head||{},availableLocales:o,locale:l});return r.a.createElement(m.Helmet,{title:p.title,meta:p.meta},r.a.createElement("html",{lang:i}))},data:a})})};u.propTypes={title:l.a.string,meta:l.a.arrayOf(l.a.shape({name:l.a.string.isRequired,content:l.a.string,file:l.a.string}))},t.a=u},430:function(e){e.exports={data:{siteHeadData:{nodes:[{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}}]},pageHeadData:{nodes:[{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/404.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/attraction.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TURISTICKÁ ATRAKCE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/404.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/attraction.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOURIST ATTRACTION - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/cube.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOSTKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOSTKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/cube.en.md",childMarkdownRemark:{frontmatter:{head:{title:"CUBE - TOMAS VRANA",meta:[{name:"description",content:"CUBE - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/duracel.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/hospital.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEMOCNICE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/hospital.en.md",childMarkdownRemark:{frontmatter:{head:{title:"HOSPITAL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/duracel.en.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/images.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/index.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMÁŠ VRÁNA PRÁCE",meta:[{name:"description",content:"TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/information.en.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMATION - TOMAS VRANA",meta:[{name:"description",content:"INFORMATION - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/images.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/islam.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",meta:[{name:"description",content:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/islam.en.md",childMarkdownRemark:{frontmatter:{head:{title:"ISLAM COMING - TOMAS VRANA",meta:[{name:"description",content:"ISLAM COMING - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMAS VRANA WORKS",meta:[{name:"description",content:"TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/information.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMACE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"INFORMACE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/konevmen.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KONĚVMEN - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMAS VRANA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/konevmen.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KONEVMEN - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/maniac.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/messenger.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POSLÍČEK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/maniac.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAC - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/messenger.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MESSENGER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/mother.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MOTHER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/mother.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MATKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/nepu.en.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPU - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/nepu.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPÚ - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/progress.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POKROK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/rainbowball.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DUHOVKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/rainbowball.en.md",childMarkdownRemark:{frontmatter:{head:{title:"RAINBOW BALL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/progress.en.md",childMarkdownRemark:{frontmatter:{head:{title:"PROGRESS - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/spaces.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"PROSTOR - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/spaces.en.md",childMarkdownRemark:{frontmatter:{head:{title:"SPACES - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}}]}}}},431:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(22),o=n(2),l=n.n(o),m=n(3),c=n(98),d=n(83),s=n(81),f=n(80),u=n(135),h=n(434),p=r.d.footer.withConfig({displayName:"Footer__Container",componentId:"a1f04j-0"})(["width:100%;max-width:",";max-width:100vw;padding:0 2rem;margin:0 auto;display:block;letter-spacing:0.08em;margin-top:15rem;margin-bottom:3rem;text-transform:uppercase;font-size:60%;letter-spacing:.2rem;img{margin:0;}.left{text-align:left;float:left;line-height:1;.github{font-size:150%;line-height:.1;vertical-align:middle;}}.right{text-align:right;}.menu{display:none;list-style-type:none;text-align:center;}&.home,&.nav-toggled{position:fixed;bottom:0;left:0;max-width:100%;width:100%;color:white;z-index:15;.left,.right{opacity:.5;}}.lang-picker{margin-bottom:4rem;font-size:180%;display:none;animation:langin 6s ease;}@keyframes langin{0%,60%{opacity:0}100%{opacity:1}}@media screen and (max-width:","px){.left{text-align:center;float:none;}.right{text-align:center;}.lang-picker{display:block;text-align:center;}&.home,&.nav-toggled{.menu{display:block;margin:-1rem 0 3rem 0;li{display:none;&.item-2{display:block;font-size:160%;a{color:white}}}}}}"],function(e){return e.theme.dimensions.contentWidth},function(e){return e.theme.dimensions.mobileBreakpoint-1}),g=function(e){return i.a.createElement(m.e,null,function(t){var n=t.toggle;return i.a.createElement(a.Fragment,null,i.a.createElement(d.a,{render:function(t){var r=t.frontmatter;return i.a.createElement(p,{className:(e.home?"home":"")+" "+(n?"nav-toggled":"")},(e.home||n)&&i.a.createElement(a.Fragment,null,i.a.createElement(c.a,null),i.a.createElement(u.a,null)),i.a.createElement("div",{className:"left"},i.a.createElement(f.a,{delay:400},"2022")," © ",i.a.createElement(f.a,{delay:350},r.footer.left)," ",i.a.createElement(s.a,{href:"https://github.com/tomasvrana/tomasvrana.com",className:"github",target:"_blank"},i.a.createElement(h.b,null))),i.a.createElement("div",{className:"right"},i.a.createElement(f.a,{delay:330},r.footer.rights)))}}))})};g.propTypes={home:l.a.bool},t.a=g},432:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(2),o=n.n(r),l=n(22),m=Object(l.e)(["0%{width:0;padding-bottom:0;opacity:1;}100%{width:100%;padding-bottom:100%;opacity:0;}"]),c=l.d.div.withConfig({displayName:"Loader__Container",componentId:"sc-1m03rig-0"})(["position:relative;display:inline-block;width:","rem;height:","rem;> div{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:","rem;border:4px solid ",";opacity:1;border-radius:50%;animation:"," 1.6s cubic-bezier(0,0.2,0.8,1) infinite;box-sizing:content-box;&:nth-of-type(2){animation-delay:-0.33s;}&:last-of-type{animation-delay:-0.66s;}}"],function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.theme.colors.interactive},m),d=function(e){var t=e.size;return i.a.createElement(c,{size:t},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))};d.propTypes={size:o.a.number},d.defaultProps={size:10};var s=d,f=l.d.div.withConfig({displayName:"PageLoader__Container",componentId:"sc-1jv81q3-0"})(["display:inline-block;left:50%;position:relative;transform:translateX(-50%);"]);t.a=function(){return i.a.createElement(f,null,i.a.createElement(s,null))}},433:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(22),o=n(2),l=n.n(o),m=n(80),c=r.d.h1.withConfig({displayName:"Title__PageTitle",componentId:"sc-1bb0yxx-0"})(["text-align:center;margin:1em 0 2em 0;filter:blur(2px);text-transform:uppercase;&.large{text-transform:none;font-size:270%;}animation:blur 16s ease 0s infinite;-webkit-animation:blur 16s ease 0s infinite;-moz-animation:blur 16s ease 0s infinite;@keyframes blur{0%,39%,41%,43%,45%,100%{-webkit-filter:blur(0px);-moz-filter:blur(0px);-o-filter:blur(0px);-ms-filter:blur(0px);}40%,42%,44%,46%{-webkit-filter:blur(2px);-moz-filter:blur(2px);-o-filter:blur(2px);-ms-filter:blur(2px);}}"]),d=function(e){return i.a.createElement(c,{className:e.large?"large":""},i.a.createElement(m.a,{method:e.method,rewrite:e.rewrite,rewriteRandom:e.rewriteRandom,rewriteDelay:e.rewriteDelay,delay:e.delay},e.children))};d.propTypes={method:l.a.string,rewrite:l.a.string,rewriteRandom:l.a.string,rewriteDelay:l.a.string,delay:l.a.number,large:l.a.bool,children:l.a.node},t.a=d},437:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(2),o=n.n(r),l=n(22),m=n(435),c=n.n(m),d=n(429),s=n(432),f=n(3),u=n(15),h=n(431),p=l.d.main.withConfig({displayName:"Narrow__Main",componentId:"or0qr0-0"})(["position:relative;z-index:1;margin:0 auto;width:100%;padding:8rem 0;opacity:1;transition:0.5s opacity ease-in-out;max-width:650px;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),g=l.d.div.withConfig({displayName:"Narrow__PageLoaderContainer",componentId:"or0qr0-1"})(["opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),M=function(e){var t=e.children,n=e.pageLoading,r=Object(a.useState)(null),o=r[0],l=r[1],m=Object(a.useState)(null),d=m[0],f=m[1];return Object(a.useEffect)(function(){var e;return n?(l(!1),f(!0)):(f(!1),e=setTimeout(function(){l(!0)},500)),function(){clearTimeout(e)}},[n]),i.a.createElement(c.a,{transitionName:"page-content",transitionEnterTimeout:500,transitionLeaveTimeout:500},(null===d&&n||d)&&i.a.createElement(g,{key:"page_loader_"+Object(u.d)()},i.a.createElement(s.a,null)),(null===o&&!n||o)&&i.a.createElement(p,{key:"page_content_"+Object(u.d)()},t))};M.propTypes={children:o.a.node,pageLoading:o.a.bool};var A=function(e){var t=e.children,n=e.headData,r=void 0===n?null:n;return i.a.createElement(f.i,null,function(e){var n=e.loading;return i.a.createElement(a.Fragment,null,i.a.createElement(d.a,r),i.a.createElement(M,{pageLoading:n},t),i.a.createElement(h.a,null))})};A.propTypes={children:M.propTypes.children,headData:o.a.object},t.a=A},439:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(2),o=n.n(r),l=n(22).d.div.withConfig({displayName:"Appear__Container",componentId:"wdxw1w-0"})(["display:inline-block;opacity:0;&.appear{transition:opacity 2s ease;opacity:1;}"]),m=function(e){var t=Object(a.useState)(!1),n=t[0],r=t[1];return Object(a.useEffect)(function(){setTimeout(function(){r(!0)},20*e.delay)},[]),i.a.createElement(l,{className:""+(n&&"appear")},e.children)};m.propTypes={method:o.a.string,delay:o.a.number,children:o.a.oneOfType([o.a.node,o.a.arrayOf(o.a.node)])},t.a=m},462:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/pages/information/cz.md",childMarkdownRemark:{frontmatter:{content:{title:"INFORMACE",subtitle:null,desc:"TV se ve své tvorbě točí kolem experimentů s kontextem. Prolíná v sebe i protichůdné cesty a jako laborant testuje životnost i základních prvků, jako je oči nebo strop. No a pak se to nabarví. \n\nNepopiratelný je původ grafického designéra, ale i vliv mistrů jako David Hockney, Mark Rothko či Francis Bacon.\n\nVšechny hodnoty velikostí, tedy rozměry, jsou uvedeny v centimetrech.\n    \n",member:"TV je členem výtvarného kolektivu galerie Gottfrei v Opavě.\n",contact:"E-mail: tom@vrana.org",href:"/information/",experience:{title:"Zkušenost",items:[{title:"shool",desc:"fdsfds"},{title:"work",desc:"fdsfds"}]},exhibitions:{title:"Výstavy",items:[{title:"shool",desc:"fdsfds"},{title:"work",desc:"fdsfds"}]}}}}},{relativePath:"content/pages/information/en.md",childMarkdownRemark:{frontmatter:{content:{title:"INFORMATION",subtitle:"ABOUT ME|CONTACT",desc:"In his creative process TV is seeking contextual experimentation. He blends contrary ways and tends to test sustainability even of a basic elements like eyes or ceiling. And then you add some colours.\n\nTV can't deny some fundamental influences from masters such as David Hockney, Mark Rothko or Francis Bacon\n\nAll values of sizes, so called dimensions, are stated in centimetres.\n",member:"TV is a member of an art collective of gallery Gottfrei.\n",contact:"E-mail: tom@vrana.org",href:"/information/",experience:{title:"Zkušenost",items:[{title:null,desc:null}]},exhibitions:{title:"Výstavy",items:[{title:null,desc:null}]}}}}}]}}}},463:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDAuNSAyMS4zIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTx0aXRsZT5Hb3R0ZnJlaTwvdGl0bGU+CjxnPgoJPHBhdGggZD0iTTkuMiwxMy43bDUuOCwwYy0xLDEuNi0yLjYsMi42LTQuNCwyLjZjLTMuMSwwLTUuNS0yLjQtNS41LTUuNmMwLTMuMSwyLjQtNS40LDUuNS01LjRjMS42LDAsMi45LDAuNiw0LDJoNS44bDAtNy4xSDE2djIKCQljLTAuOS0wLjYtMS4xLTAuNy0xLjQtMC45Yy0xLjEtMC42LTIuNy0xLTQuMi0xQzQuNiwwLjMsMCw1LDAsMTAuN2MwLDUuOCw0LjYsMTAuNSwxMC40LDEwLjVjMi42LDAsNC43LTAuOSw2LTIuNWwwLDIuMWw0LjEsMAoJCWwwLTExLjNIOS4yVjEzLjd6Ij48L3BhdGg+Cgk8cGF0aCBkPSJNMjkuMiw1LjJjLTQuNCwwLTguMSwzLjYtOC4xLDhjMCw0LjQsMy43LDguMSw4LjEsOC4xYzQuNCwwLDguMS0zLjYsOC4xLThDMzcuNCw4LjgsMzMuOCw1LjIsMjkuMiw1LjJ6IE0yOS4zLDE2LjkKCQljLTIsMC0zLjYtMS43LTMuNi0zLjdjMC0yLDEuNi0zLjcsMy42LTMuN2MyLDAsMy42LDEuNiwzLjYsMy43QzMyLjgsMTUuMiwzMS4yLDE2LjksMjkuMywxNi45eiI+PC9wYXRoPgoJPHBhdGggZD0iTTQ5LjcsOS44bDAsMTFoNC41bDAtMTFoNC4xbDAsMTFoNC41bDAtMTFoNC4xbDAsMTFsNC41LDB2LTYuOWMwLTIuNCwyLTQuMiw0LjQtMy45VjUuNGMtMi4xLTAuMi00LjEsMS4zLTQuOCwzVjUuNmgtOC4yCgkJYzAtMC42LDAuMS0wLjgsMC4yLTEuMWMwLjItMC40LDAuNy0wLjcsMS4zLTAuN2MwLjUsMCwyLjEsMCwyLjQsMFYwLjFjLTAuMywwLTEuNS0wLjEtMi0wLjFjLTQuMi0wLjEtNi4zLDEuNy02LjQsNS42aC00LjFWMC4yCgkJaC00LjV2NS41aC00LjFsMC01LjVoLTQuNXY1LjVoLTQuM3Y0LjFoNC4zdjExLjFsNC41LDBsMC0xMUg0OS43eiI+PC9wYXRoPgoJPHBhdGggZD0iTTgzLjUsMTcuNGMtMS43LDAtMy0wLjktMy43LTIuNEw5MSwxNWMwLjItMC44LDAuMi0xLjIsMC4yLTEuOGMwLTQuNS0zLjUtNy45LTcuOS03LjljLTQuNCwwLTcuOSwzLjUtNy45LDguMQoJCWMwLDQuNSwzLjUsOC4xLDgsOC4xYzMuMiwwLDYtMS45LDcuMi01aC00LjZDODUuNCwxNyw4NC41LDE3LjQsODMuNSwxNy40eiBNODMuMyw5LjFjMS43LDAsMy4xLDAuOSwzLjgsMi41aC03LjQKCQlDODAuMywxMC4xLDgxLjcsOS4xLDgzLjMsOS4xeiI+PC9wYXRoPgoJPHJlY3QgeD0iOTMuOCIgeT0iMCIgd2lkdGg9IjQuMyIgaGVpZ2h0PSI0Ij48L3JlY3Q+Cgk8cG9seWdvbiBwb2ludHM9Ijk4LjIsMTYuMyA5OC4yLDUuNiA5MS42LDUuNiA5MS42LDkuOCA5My43LDkuOCA5My43LDE2LjMgOTEuNiwxNi4zIDkxLjYsMjAuOCAxMDAuNSwyMC44IDEwMC41LDE2LjMgCSI+PC9wb2x5Z29uPgo8L2c+Cjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-information-js-a82b60399447a8aea7e5.js.map