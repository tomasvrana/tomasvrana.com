(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{407:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(2),r=n.n(o),l=n(20),m=n(418),c=n.n(m),s=n(413),d=n(415),p=n(8),f=n(16),g=l.d.main.withConfig({displayName:"Home__Main",componentId:"hx3q39-0"})(["position:relative;z-index:1;margin:0;width:100%;padding:0;opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),u=l.d.div.withConfig({displayName:"Home__PageLoaderContainer",componentId:"hx3q39-1"})(["opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),h=function(e){var t=e.children,n=e.pageLoading,o=Object(a.useState)(null),r=o[0],l=o[1],m=Object(a.useState)(null),s=m[0],p=m[1];return Object(a.useEffect)(function(){var e;return n?(l(!1),p(!0)):(p(!1),e=setTimeout(function(){l(!0)},500)),function(){clearTimeout(e)}},[n]),i.a.createElement(c.a,{transitionName:"page-content",transitionEnterTimeout:500,transitionLeaveTimeout:500},(null===s&&n||s)&&i.a.createElement(u,{key:"page_loader_"+Object(f.d)()},i.a.createElement(d.a,null)),(null===r&&!n||r)&&i.a.createElement(g,{key:"page_content_"+Object(f.d)()},t))};h.propTypes={children:r.a.node,pageLoading:r.a.bool};var b=function(e){var t=e.children,n=e.headData,o=void 0===n?null:n;return i.a.createElement(p.f,null,function(e){var n=e.loading;return i.a.createElement(a.Fragment,null,i.a.createElement(s.a,o),i.a.createElement(h,{pageLoading:n},t))})};b.propTypes={children:h.propTypes.children,headData:r.a.object};var T=b,w=n(451),k=n(41),v=function(e){var t=e.render;return i.a.createElement(p.d,null,function(e){var n=e.lang;return i.a.createElement(k.b,{query:"359444649",render:function(e){var a=e.allFile.nodes.filter(function(e){return e.relativePath==="content/pages/index/"+n+".md"}).shift();if(!a)throw new Error("No content found for home page using language "+n);return t(a.childMarkdownRemark)},data:w})})};v.propTypes={render:r.a.func.isRequired};var y=v,V=n(452),S=(n(460),l.d.div.withConfig({displayName:"Slider__Container",componentId:"sc-12tbww9-0"})(["position:fixed;z-index:1;width:100%;height:100%;overflow:hidden;h1{position:fixed;font-size:1000%;letter-spacing:.05em;z-index:33;text-align:center;width:100%;top:40vh;font-weight:800;}img{pointer-events:none;}"])),M=function(){return i.a.createElement(y,{render:function(e){var t=e.frontmatter;return i.a.createElement(S,null,i.a.createElement("h1",null,t.content.title),i.a.createElement(V.Carousel,{showArrows:!1,showStatus:!1,showIndicators:!1,infiniteLoop:!0,showThumbs:!1,useKeyboardArrows:!0,autoPlay:!0,stopOnHover:!0,swipeable:!0,dynamicHeight:!1,emulateTouch:!0,autoFocus:!0,thumbWidth:!1,selectedItem:0,interval:4e3,transitionTime:1e3,swipeScrollTolerance:5},t.content.projects.map(function(e,t){return i.a.createElement("div",null,i.a.createElement("img",{src:e.image,unSelectable:"on",onSelectStart:"return false;",onMouseDown:"return false;"}),i.a.createElement("p",{className:"legend"},e.title))})))}})};t.default=function(){return i.a.createElement(T,null,i.a.createElement(M,null))}},413:function(e,t,n){"use strict";n(59),n(93),n(192),n(79),n(60),n(43),n(42),n(72);var a=n(414),i=n(0),o=n.n(i),r=n(2),l=n.n(r),m=n(419),c=n(41),s=n(8),d=n(16),p=["og:locale:alternate"];var f=function(e){var t=e.title,n=e.meta;return o.a.createElement(s.d,null,function(e){var i=e.lang,r=e.availableLocales,l=e.locale;return o.a.createElement(c.b,{query:"8840273",render:function(e){var a=e.siteHeadData,c=e.pageHeadData,s="/"===Object(d.e)(i)?"index":Object(d.e)(i).replace(/^\//,"").replace(/\/$/,"").replace(/\//g,"___"),f=c.nodes.filter(function(e){return e.relativePath==="content/meta/"+s+"."+i+".md"}).shift(),g=a.nodes.filter(function(e){return e.relativePath==="content/meta/__site."+i+".md"}).shift(),u=function(e){var t=e.componentHeadData,n=e.pageHeadData,a=e.siteHeadData,i=e.availableLocales,o=e.locale,r={};Object.keys(n).forEach(function(e){n[e]&&(r[e]=n[e])});var l=[],m=[];return[].concat(function(e,t){var n=[].concat(e);return n.splice(e.indexOf(t),1),n.map(function(e){return{name:"og:locale:alternate",content:e}})}(i,o),t.meta||[],r.meta||[],a.meta||[]).forEach(function(e){(e.content||e.file)&&(!p.includes(e.name)&&l.includes(e.name)||m.push({name:e.name,content:e.content||Object(d.c)(e.file)}),l.push(e.name))}),{title:t.title||r.title||a.title,meta:m.map(function(e){return e.name.match(/^og:/)?{property:e.name,content:e.content}:e})}}({componentHeadData:{title:t,meta:n},pageHeadData:f&&f.childMarkdownRemark.frontmatter&&f.childMarkdownRemark.frontmatter.head||{},siteHeadData:g&&g.childMarkdownRemark.frontmatter&&g.childMarkdownRemark.frontmatter.head||{},availableLocales:r,locale:l});return o.a.createElement(m.Helmet,{title:u.title,meta:u.meta},o.a.createElement("html",{lang:i}))},data:a})})};f.propTypes={title:l.a.string,meta:l.a.arrayOf(l.a.shape({name:l.a.string.isRequired,content:l.a.string,file:l.a.string}))},t.a=f},414:function(e){e.exports={data:{siteHeadData:{nodes:[{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}}]},pageHeadData:{nodes:[{relativePath:"content/meta/404.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/404.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/images.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"OBRAZY - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/images.en.md",childMarkdownRemark:{frontmatter:{head:{title:"IMAGES - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV - TOMAS VRANA",meta:[{name:"description",content:"TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV - TOMÁŠ VRÁNA",meta:[{name:"description",content:"TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/information.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMACE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"INFORMACE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/information.en.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMATION - TOMAS VRANA",meta:[{name:"description",content:"INFORMATION - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/spaces.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV INSTALUJE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"TV INSTALUJE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMAS VRANA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/spaces.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV INSTALLING - TOMAS VRANA",meta:[{name:"description",content:"INSTALLING - TOMAS VRANA",file:""}]}}}}]}}}},415:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(2),r=n.n(o),l=n(20),m=Object(l.e)(["0%{width:0;padding-bottom:0;opacity:1;}100%{width:100%;padding-bottom:100%;opacity:0;}"]),c=l.d.div.withConfig({displayName:"Loader__Container",componentId:"sc-1m03rig-0"})(["position:relative;display:inline-block;width:","rem;height:","rem;> div{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:","rem;border:4px solid ",";opacity:1;border-radius:50%;animation:"," 1.6s cubic-bezier(0,0.2,0.8,1) infinite;box-sizing:content-box;&:nth-of-type(2){animation-delay:-0.33s;}&:last-of-type{animation-delay:-0.66s;}}"],function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.theme.colors.interactive},m),s=function(e){var t=e.size;return i.a.createElement(c,{size:t},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))};s.propTypes={size:r.a.number},s.defaultProps={size:10};var d=s,p=l.d.div.withConfig({displayName:"PageLoader__Container",componentId:"sc-1jv81q3-0"})(["display:inline-block;left:50%;position:relative;transform:translateX(-50%);"]);t.a=function(){return i.a.createElement(p,null,i.a.createElement(d,null))}},451:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/pages/index/cz.md",childMarkdownRemark:{frontmatter:{content:{title:"Let me thing!",projects:[{title:"Kolos",href:"/kolos/",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"/images/kolos/1.jpg"},{title:"Konevmen",href:"/konevmen/",description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",image:"/images/konevmen/1.jpg"},{title:"Kostka",href:"/kostka/",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"/images/kostka/1.jpg"},{title:"Matka",href:"/matka/",description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",image:"/images/matka/1.jpg"}]}}}},{relativePath:"content/pages/index/en.md",childMarkdownRemark:{frontmatter:{content:{title:"Let me thing!",projects:[{title:"Kolos",href:"/kolos/",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"/images/kolos/1.jpg"},{title:"Konevmen",href:"/konevmen/",description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",image:"/images/konevmen/1.jpg"},{title:"Kostka",href:"/kostka/",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",image:"/images/kostka/1.jpg"},{title:"Matka",href:"/matka/",description:"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",image:"/images/matka/1.jpg"}]}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-8c18f9f99f10911b17bb.js.map