(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{409:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(435),o=n(27),l=n(469),m=n(2),c=n.n(m),d=n(58),s=n(8),f=function(e){var t=e.render;return i.a.createElement(s.c,null,function(e){var n=e.lang;return i.a.createElement(d.b,{query:"402527216",render:function(e){var a=e.allFile.nodes.filter(function(e){return e.relativePath==="content/pages/information/"+n+".md"}).shift();if(!a)throw new Error("No content found for home page using language "+n);return t(a.childMarkdownRemark)},data:l})})};f.propTypes={render:c.a.func.isRequired};var u=f,h=o.d.ul.withConfig({displayName:"List__Ul",componentId:"sc-53zmaj-0"})([""]),p=function(e){return i.a.createElement(a.Fragment,null,i.a.createElement("h2",null,e.title),i.a.createElement(h,null,e.children.map(function(e,t){return i.a.createElement("li",{key:"infoli-"+t},i.a.createElement("strong",null,e.title),i.a.createElement("div",{className:"desc"},e.desc))})))};p.propTypes={title:c.a.string,children:c.a.oneOfType([c.a.node,c.a.arrayOf(c.a.node)]).isRequired};var M=n(82),g=n(436),A=n(470),T=n.n(A),w=n(434),N=o.d.div.withConfig({displayName:"Information__Container",componentId:"sc-1cbsmh7-0"})(["@media screen and (max-width:","px){padding:0 1em;}"],function(e){return e.theme.dimensions.mobileBreakpoint-1}),L=o.d.div.withConfig({displayName:"Information__Desc",componentId:"sc-1cbsmh7-1"})([""]),R=o.d.div.withConfig({displayName:"Information__Contact",componentId:"sc-1cbsmh7-3"})([""]),O=o.d.div.withConfig({displayName:"Information__Logo",componentId:"sc-1cbsmh7-4"})(["padding:1em 0 2em 0;"]),y=function(){return i.a.createElement(u,{render:function(e){var t=e.frontmatter;return i.a.createElement(s.e,null,function(e){var n=e.updateNavActive;return i.a.createElement(N,null,n(t.content.href),i.a.createElement(g.a,{title:t.content.title}),i.a.createElement(L,null,i.a.createElement(w.a,null,t.content.desc)),i.a.createElement(O,null,i.a.createElement(M.a,{href:"//gottfrei.com",target:"_blank"},i.a.createElement("img",{src:T.a,alt:"",width:"150"}))),i.a.createElement(L,null,i.a.createElement(w.a,null,t.content.member)),i.a.createElement(R,null,t.content.contact))})}})};t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(y,null))}},425:function(e,t,n){"use strict";n(59),n(96),n(193),n(81),n(60),n(42),n(41),n(73);var a=n(426),i=n(0),r=n.n(i),o=n(2),l=n.n(o),m=n(433),c=n(58),d=n(8),s=n(16),f=["og:locale:alternate"];var u=function(e){var t=e.title,n=e.meta;return r.a.createElement(d.c,null,function(e){var i=e.lang,o=e.availableLocales,l=e.locale;return r.a.createElement(c.b,{query:"8840273",render:function(e){var a=e.siteHeadData,c=e.pageHeadData,d="/"===Object(s.e)(i)?"index":Object(s.e)(i).replace(/^\//,"").replace(/\/$/,"").replace(/\//g,"___"),u=c.nodes.filter(function(e){return e.relativePath==="content/meta/"+d+"."+i+".md"}).shift(),h=a.nodes.filter(function(e){return e.relativePath==="content/meta/__site."+i+".md"}).shift(),p=function(e){var t=e.componentHeadData,n=e.pageHeadData,a=e.siteHeadData,i=e.availableLocales,r=e.locale,o={};Object.keys(n).forEach(function(e){n[e]&&(o[e]=n[e])});var l=[],m=[];return[].concat(function(e,t){var n=[].concat(e);return n.splice(e.indexOf(t),1),n.map(function(e){return{name:"og:locale:alternate",content:e}})}(i,r),t.meta||[],o.meta||[],a.meta||[]).forEach(function(e){(e.content||e.file)&&(!f.includes(e.name)&&l.includes(e.name)||m.push({name:e.name,content:e.content||Object(s.c)(e.file)}),l.push(e.name))}),{title:t.title||o.title||a.title,meta:m.map(function(e){return e.name.match(/^og:/)?{property:e.name,content:e.content}:e})}}({componentHeadData:{title:t,meta:n},pageHeadData:u&&u.childMarkdownRemark.frontmatter&&u.childMarkdownRemark.frontmatter.head||{},siteHeadData:h&&h.childMarkdownRemark.frontmatter&&h.childMarkdownRemark.frontmatter.head||{},availableLocales:o,locale:l});return r.a.createElement(m.Helmet,{title:p.title,meta:p.meta},r.a.createElement("html",{lang:i}))},data:a})})};u.propTypes={title:l.a.string,meta:l.a.arrayOf(l.a.shape({name:l.a.string.isRequired,content:l.a.string,file:l.a.string}))},t.a=u},426:function(e){e.exports={data:{siteHeadData:{nodes:[{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}}]},pageHeadData:{nodes:[{relativePath:"content/meta/404.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/404.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/attraction.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOURIST ATTRACTION - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/attraction.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TURISTICKÁ ATRAKCE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/cube.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOSTKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOSTKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/cube.en.md",childMarkdownRemark:{frontmatter:{head:{title:"CUBE - TOMAS VRANA",meta:[{name:"description",content:"CUBE - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/duracel.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/duracel.en.md",childMarkdownRemark:{frontmatter:{head:{title:"DURACEL - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/hospital.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEMOCNICE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/hospital.en.md",childMarkdownRemark:{frontmatter:{head:{title:"HOSPITAL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/images.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/images.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMÁŠ VRÁNA PRÁCE",meta:[{name:"description",content:"TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/index.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TOMAS VRANA WORKS",meta:[{name:"description",content:"TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/information.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMACE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"INFORMACE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/islam.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",meta:[{name:"description",content:"VYSLÁN ISLÁM - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/information.en.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMATION - TOMAS VRANA",meta:[{name:"description",content:"INFORMATION - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/islam.en.md",childMarkdownRemark:{frontmatter:{head:{title:"ISLAM COMING - TOMAS VRANA",meta:[{name:"description",content:"ISLAM COMING - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/maniac.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/konevmen.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KONEVMEN - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMAS VRANA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/konevmen.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KONĚVMEN - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/maniac.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MANIAC - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/messenger.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POSLÍČEK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/messenger.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MESSENGER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/mother.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"MATKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/mother.en.md",childMarkdownRemark:{frontmatter:{head:{title:"MOTHER - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/nepu.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPÚ - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/nepu.en.md",childMarkdownRemark:{frontmatter:{head:{title:"NEPU - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/progress.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"POKROK - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/rainbowball.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"DUHOVKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/rainbowball.en.md",childMarkdownRemark:{frontmatter:{head:{title:"RAINBOW BALL - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/spaces.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"PROSTOR - TOMÁŠ VRÁNA",meta:[{name:"description",content:"PROSTOR - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/spaces.en.md",childMarkdownRemark:{frontmatter:{head:{title:"SPACES - TOMAS VRANA",meta:[{name:"description",content:"SPACES - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/progress.en.md",childMarkdownRemark:{frontmatter:{head:{title:"PROGRESS - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}}]}}}},427:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(27),o=n(2),l=n.n(o),m=n(133),c=n(80),d=r.d.footer.withConfig({displayName:"Footer__Container",componentId:"a1f04j-0"})(["width:100%;max-width:",";padding:0 2rem;margin:0 auto;display:block;letter-spacing:0.08em;margin-top:15rem;margin-bottom:3rem;text-transform:uppercase;font-size:60%;letter-spacing:.2rem;img{margin:0;}.left{text-align:left;float:left;}.right{text-align:right;}.menu{display:none;list-style-type:none;text-align:center;}&.home{position:absolute;bottom:0;left:0;max-width:100%;width:100%;color:white;z-index:88;.left,.right{opacity:.5;}}@media screen and (max-width:","px){.left{text-align:center;float:none;}.right{text-align:center;}&.home{.menu{display:block;margin:-1rem 0 3rem 0;li{display:none;&.item-2{display:block;font-size:160%;a{color:white}}}}}}"],function(e){return e.theme.dimensions.contentWidth},function(e){return e.theme.dimensions.mobileBreakpoint-1}),s=function(e){return i.a.createElement(a.Fragment,null,i.a.createElement(c.a,{render:function(t){var n=t.frontmatter;return i.a.createElement(d,{className:e.home?"home":""},e.home&&i.a.createElement(m.a,null),i.a.createElement("div",{className:"left"},"2022 © ",n.footer.left),i.a.createElement("div",{className:"right"},n.footer.rights))}}))};s.propTypes={home:l.a.bool},t.a=s},428:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(2),o=n.n(r),l=n(27),m=Object(l.e)(["0%{width:0;padding-bottom:0;opacity:1;}100%{width:100%;padding-bottom:100%;opacity:0;}"]),c=l.d.div.withConfig({displayName:"Loader__Container",componentId:"sc-1m03rig-0"})(["position:relative;display:inline-block;width:","rem;height:","rem;> div{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:","rem;border:4px solid ",";opacity:1;border-radius:50%;animation:"," 1.6s cubic-bezier(0,0.2,0.8,1) infinite;box-sizing:content-box;&:nth-of-type(2){animation-delay:-0.33s;}&:last-of-type{animation-delay:-0.66s;}}"],function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.theme.colors.interactive},m),d=function(e){var t=e.size;return i.a.createElement(c,{size:t},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))};d.propTypes={size:o.a.number},d.defaultProps={size:10};var s=d,f=l.d.div.withConfig({displayName:"PageLoader__Container",componentId:"sc-1jv81q3-0"})(["display:inline-block;left:50%;position:relative;transform:translateX(-50%);"]);t.a=function(){return i.a.createElement(f,null,i.a.createElement(s,null))}},435:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(2),o=n.n(r),l=n(27),m=n(432),c=n.n(m),d=n(425),s=n(428),f=n(8),u=n(16),h=n(427),p=l.d.main.withConfig({displayName:"Narrow__Main",componentId:"or0qr0-0"})(["position:relative;z-index:1;margin:0 auto;width:100%;padding:13rem 0;opacity:1;transition:0.5s opacity ease-in-out;max-width:650px;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),M=l.d.div.withConfig({displayName:"Narrow__PageLoaderContainer",componentId:"or0qr0-1"})(["opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),g=function(e){var t=e.children,n=e.pageLoading,r=Object(a.useState)(null),o=r[0],l=r[1],m=Object(a.useState)(null),d=m[0],f=m[1];return Object(a.useEffect)(function(){var e;return n?(l(!1),f(!0)):(f(!1),e=setTimeout(function(){l(!0)},500)),function(){clearTimeout(e)}},[n]),i.a.createElement(c.a,{transitionName:"page-content",transitionEnterTimeout:500,transitionLeaveTimeout:500},(null===d&&n||d)&&i.a.createElement(M,{key:"page_loader_"+Object(u.d)()},i.a.createElement(s.a,null)),(null===o&&!n||o)&&i.a.createElement(p,{key:"page_content_"+Object(u.d)()},t))};g.propTypes={children:o.a.node,pageLoading:o.a.bool};var A=function(e){var t=e.children,n=e.headData,r=void 0===n?null:n;return i.a.createElement(f.g,null,function(e){var n=e.loading;return i.a.createElement(a.Fragment,null,i.a.createElement(d.a,r),i.a.createElement(g,{pageLoading:n},t),i.a.createElement(h.a,null))})};A.propTypes={children:g.propTypes.children,headData:o.a.object},t.a=A},436:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(27),o=n(2),l=n.n(o),m=r.d.h1.withConfig({displayName:"Title__PageTitle",componentId:"fn83pj-0"})(["text-align:center;margin:1em 0 2em 0;filter:blur(2px);animation:blur 4s ease 0s infinite;-webkit-animation:blur 8s ease 0s infinite;-moz-animation:blur 8s ease 0s infinite;@keyframes blur{0%,80%{-webkit-filter:blur(2px);-moz-filter:blur(2px);-o-filter:blur(2px);-ms-filter:blur(2px);}40%{-webkit-filter:blur(0px);-moz-filter:blur(0px);-o-filter:blur(0px);-ms-filter:blur(0px);}}"]),c=function(e){return i.a.createElement(m,null,e.title)};c.propTypes={title:l.a.string},t.a=c},469:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/pages/information/cz.md",childMarkdownRemark:{frontmatter:{content:{title:"INFORMACE",desc:"TV se ve své tvorbě točí kolem experimentů s kontextem. Prolíná v sebe i protichůdné cesty a jako laborant testuje životnost i základních prvků, jako je oči nebo strop. No a pak se to nabarví. \n\nNepopiratelný je původ grafického designéra, ale i vliv mistrů jako David Hockney, Mark Rothko či Francis Bacon.\n\nVšechny hodnoty velikostí, tedy rozměry, jsou uvedeny v centimetrech.\n    \n",member:"TV je členem výtvarného kolektivu galerie Gottfrei v Opavě.\n",contact:"E-mail: tom@vrana.org",href:"/information/",experience:{title:"Zkušenost",items:[{title:"shool",desc:"fdsfds"},{title:"work",desc:"fdsfds"}]},exhibitions:{title:"Výstavy",items:[{title:"shool",desc:"fdsfds"},{title:"work",desc:"fdsfds"}]}}}}},{relativePath:"content/pages/information/en.md",childMarkdownRemark:{frontmatter:{content:{title:"INFORMATION",desc:null,member:null,contact:"E-mail: tom@vrana.org",href:"/information/",experience:{title:"Zkušenost",items:[{title:null,desc:null}]},exhibitions:{title:"Výstavy",items:[{title:null,desc:null}]}}}}}]}}}},470:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMDAuNSAyMS4zIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCTx0aXRsZT5Hb3R0ZnJlaTwvdGl0bGU+CjxnPgoJPHBhdGggZD0iTTkuMiwxMy43bDUuOCwwYy0xLDEuNi0yLjYsMi42LTQuNCwyLjZjLTMuMSwwLTUuNS0yLjQtNS41LTUuNmMwLTMuMSwyLjQtNS40LDUuNS01LjRjMS42LDAsMi45LDAuNiw0LDJoNS44bDAtNy4xSDE2djIKCQljLTAuOS0wLjYtMS4xLTAuNy0xLjQtMC45Yy0xLjEtMC42LTIuNy0xLTQuMi0xQzQuNiwwLjMsMCw1LDAsMTAuN2MwLDUuOCw0LjYsMTAuNSwxMC40LDEwLjVjMi42LDAsNC43LTAuOSw2LTIuNWwwLDIuMWw0LjEsMAoJCWwwLTExLjNIOS4yVjEzLjd6Ij48L3BhdGg+Cgk8cGF0aCBkPSJNMjkuMiw1LjJjLTQuNCwwLTguMSwzLjYtOC4xLDhjMCw0LjQsMy43LDguMSw4LjEsOC4xYzQuNCwwLDguMS0zLjYsOC4xLThDMzcuNCw4LjgsMzMuOCw1LjIsMjkuMiw1LjJ6IE0yOS4zLDE2LjkKCQljLTIsMC0zLjYtMS43LTMuNi0zLjdjMC0yLDEuNi0zLjcsMy42LTMuN2MyLDAsMy42LDEuNiwzLjYsMy43QzMyLjgsMTUuMiwzMS4yLDE2LjksMjkuMywxNi45eiI+PC9wYXRoPgoJPHBhdGggZD0iTTQ5LjcsOS44bDAsMTFoNC41bDAtMTFoNC4xbDAsMTFoNC41bDAtMTFoNC4xbDAsMTFsNC41LDB2LTYuOWMwLTIuNCwyLTQuMiw0LjQtMy45VjUuNGMtMi4xLTAuMi00LjEsMS4zLTQuOCwzVjUuNmgtOC4yCgkJYzAtMC42LDAuMS0wLjgsMC4yLTEuMWMwLjItMC40LDAuNy0wLjcsMS4zLTAuN2MwLjUsMCwyLjEsMCwyLjQsMFYwLjFjLTAuMywwLTEuNS0wLjEtMi0wLjFjLTQuMi0wLjEtNi4zLDEuNy02LjQsNS42aC00LjFWMC4yCgkJaC00LjV2NS41aC00LjFsMC01LjVoLTQuNXY1LjVoLTQuM3Y0LjFoNC4zdjExLjFsNC41LDBsMC0xMUg0OS43eiI+PC9wYXRoPgoJPHBhdGggZD0iTTgzLjUsMTcuNGMtMS43LDAtMy0wLjktMy43LTIuNEw5MSwxNWMwLjItMC44LDAuMi0xLjIsMC4yLTEuOGMwLTQuNS0zLjUtNy45LTcuOS03LjljLTQuNCwwLTcuOSwzLjUtNy45LDguMQoJCWMwLDQuNSwzLjUsOC4xLDgsOC4xYzMuMiwwLDYtMS45LDcuMi01aC00LjZDODUuNCwxNyw4NC41LDE3LjQsODMuNSwxNy40eiBNODMuMyw5LjFjMS43LDAsMy4xLDAuOSwzLjgsMi41aC03LjQKCQlDODAuMywxMC4xLDgxLjcsOS4xLDgzLjMsOS4xeiI+PC9wYXRoPgoJPHJlY3QgeD0iOTMuOCIgeT0iMCIgd2lkdGg9IjQuMyIgaGVpZ2h0PSI0Ij48L3JlY3Q+Cgk8cG9seWdvbiBwb2ludHM9Ijk4LjIsMTYuMyA5OC4yLDUuNiA5MS42LDUuNiA5MS42LDkuOCA5My43LDkuOCA5My43LDE2LjMgOTEuNiwxNi4zIDkxLjYsMjAuOCAxMDAuNSwyMC44IDEwMC41LDE2LjMgCSI+PC9wb2x5Z29uPgo8L2c+Cjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-information-js-49cd53de823d65fb6d0f.js.map