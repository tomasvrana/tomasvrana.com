(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{409:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(421),o=n(457),l=n(2),c=n.n(l),m=n(41),s=n(8),d=function(e){var t=e.render;return i.a.createElement(s.d,null,function(e){var n=e.lang;return i.a.createElement(m.b,{query:"2666444002",render:function(e){var a=e.allFile.nodes.filter(function(e){return e.relativePath==="content/projects/kolos/"+n+".md"}).shift();if(!a)throw new Error("No content found for home page using language "+n);return t(a.childMarkdownRemark)},data:o})})};d.propTypes={render:c.a.func.isRequired};var f=d,p=n(20),g=(n(94),p.d.div.withConfig({displayName:"Item__Container",componentId:"sc-16ne94t-0"})(["text-align:center;h1{margin:0 0 1rem 0;}.desc{padding:2em 0 4em 0;max-width:760px;margin:auto;}.media{padding:.8rem 0 1rem 0;color:#999;}small{text-transform:uppercase;}"])),h=function(e){return i.a.createElement(g,null,i.a.createElement("h1",null,e.title),i.a.createElement("small",null,e.year,", ",e.type,", ",e.location),i.a.createElement("div",{className:"media"},e.media),i.a.createElement("div",{className:"desc"},e.description),i.a.createElement("div",null,e.images.map(function(t,n){return i.a.createElement("img",{src:t.src,alt:e.image})})))};h.propTypes={title:c.a.string,description:c.a.string,image:c.a.string,type:c.a.string,media:c.a.string,year:c.a.string,images:c.a.array};var u=h,T=function(){return i.a.createElement(f,{render:function(e){var t=e.frontmatter;return i.a.createElement(u,{title:t.content.title,image:t.content.image,description:t.content.description,images:t.content.images,year:t.content.year,type:t.content.type,media:t.content.media,location:t.content.location})}})};t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(T,null))}},412:function(e,t,n){"use strict";n(59),n(93),n(192),n(79),n(60),n(43),n(42),n(72);var a=n(413),i=n(0),r=n.n(i),o=n(2),l=n.n(o),c=n(418),m=n(41),s=n(8),d=n(16),f=["og:locale:alternate"];var p=function(e){var t=e.title,n=e.meta;return r.a.createElement(s.d,null,function(e){var i=e.lang,o=e.availableLocales,l=e.locale;return r.a.createElement(m.b,{query:"8840273",render:function(e){var a=e.siteHeadData,m=e.pageHeadData,s="/"===Object(d.e)(i)?"index":Object(d.e)(i).replace(/^\//,"").replace(/\/$/,"").replace(/\//g,"___"),p=m.nodes.filter(function(e){return e.relativePath==="content/meta/"+s+"."+i+".md"}).shift(),g=a.nodes.filter(function(e){return e.relativePath==="content/meta/__site."+i+".md"}).shift(),h=function(e){var t=e.componentHeadData,n=e.pageHeadData,a=e.siteHeadData,i=e.availableLocales,r=e.locale,o={};Object.keys(n).forEach(function(e){n[e]&&(o[e]=n[e])});var l=[],c=[];return[].concat(function(e,t){var n=[].concat(e);return n.splice(e.indexOf(t),1),n.map(function(e){return{name:"og:locale:alternate",content:e}})}(i,r),t.meta||[],o.meta||[],a.meta||[]).forEach(function(e){(e.content||e.file)&&(!f.includes(e.name)&&l.includes(e.name)||c.push({name:e.name,content:e.content||Object(d.c)(e.file)}),l.push(e.name))}),{title:t.title||o.title||a.title,meta:c.map(function(e){return e.name.match(/^og:/)?{property:e.name,content:e.content}:e})}}({componentHeadData:{title:t,meta:n},pageHeadData:p&&p.childMarkdownRemark.frontmatter&&p.childMarkdownRemark.frontmatter.head||{},siteHeadData:g&&g.childMarkdownRemark.frontmatter&&g.childMarkdownRemark.frontmatter.head||{},availableLocales:o,locale:l});return r.a.createElement(c.Helmet,{title:h.title,meta:h.meta},r.a.createElement("html",{lang:i}))},data:a})})};p.propTypes={title:l.a.string,meta:l.a.arrayOf(l.a.shape({name:l.a.string.isRequired,content:l.a.string,file:l.a.string}))},t.a=p},413:function(e){e.exports={data:{siteHeadData:{nodes:[{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}}]},pageHeadData:{nodes:[{relativePath:"content/meta/404.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/404.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter - Error 404 not found",meta:[{name:"description",content:"Error page not found",file:""},{name:"twitter:card",content:"Error page not found",file:""},{name:"twitter:title",content:"Error page not found",file:""},{name:"twitter:description",content:"Error page not found",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-404-en.png"},{name:"og:title",content:"Error page not found",file:""},{name:"og:description",content:"Error page not found",file:""},{name:"og:image",content:"",file:"/images/uploads/share-404-en.png"}]}}}},{relativePath:"content/meta/__site.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/__site.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV Gatsby Starter",meta:[{name:"description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"language",content:"en",file:""},{name:"twitter:card",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"twitter:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"twitter:site",content:"TV Gatsby Starter",file:""},{name:"twitter:creator",content:"TV Gatsby Starter",file:""},{name:"twitter:image",content:"",file:"/images/uploads/share-en.png"},{name:"og:title",content:"Welcome to the TV gatsby starter template",file:""},{name:"og:type",content:"website",file:""},{name:"og:description",content:"The Gatsby starter template for TV. With CI, CMS, localisation and theming baked in.",file:""},{name:"og:site_name",content:"TV Gatsby Starter",file:""},{name:"og:image",content:"",file:"/images/uploads/share-en.png"},{name:"robots",content:"index,follow",file:""}]}}}},{relativePath:"content/meta/graphics.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"GRAFIKA - TOMÁŠ VRÁNA",meta:[{name:"description",content:"GRAFIKA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/graphics.en.md",childMarkdownRemark:{frontmatter:{head:{title:"GRAPHICS - TOMAS VRANA",meta:[{name:"description",content:"GRAPHICS - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/index.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV - TOMÁŠ VRÁNA",meta:[{name:"description",content:"TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/index.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV - TOMAS VRANA",meta:[{name:"description",content:"TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/information.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMACE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"INFORMACE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.en.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMAS VRANA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/information.en.md",childMarkdownRemark:{frontmatter:{head:{title:"INFORMATION - TOMAS VRANA",meta:[{name:"description",content:"INFORMATION - TOMAS VRANA",file:""}]}}}},{relativePath:"content/meta/kolos-of-ostrava.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"KOLOS OF OSTRAVA - TV PRESENTS - TOMÁŠ VRÁNA",meta:[{name:"description",content:"KOLOS OF OSTRAVA - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/spaces.cz.md",childMarkdownRemark:{frontmatter:{head:{title:"TV INSTALUJE - TOMÁŠ VRÁNA",meta:[{name:"description",content:"TV INSTALUJE - TOMÁŠ VRÁNA",file:""}]}}}},{relativePath:"content/meta/spaces.en.md",childMarkdownRemark:{frontmatter:{head:{title:"TV INSTALLING - TOMAS VRANA",meta:[{name:"description",content:"INSTALLING - TOMAS VRANA",file:""}]}}}}]}}}},414:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(2),o=n.n(r),l=n(20),c=Object(l.e)(["0%{width:0;padding-bottom:0;opacity:1;}100%{width:100%;padding-bottom:100%;opacity:0;}"]),m=l.d.div.withConfig({displayName:"Loader__Container",componentId:"sc-1m03rig-0"})(["position:relative;display:inline-block;width:","rem;height:","rem;> div{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:","rem;border:4px solid ",";opacity:1;border-radius:50%;animation:"," 1.6s cubic-bezier(0,0.2,0.8,1) infinite;box-sizing:content-box;&:nth-of-type(2){animation-delay:-0.33s;}&:last-of-type{animation-delay:-0.66s;}}"],function(e){return e.size},function(e){return e.size},function(e){return e.size},function(e){return e.theme.colors.interactive},c),s=function(e){var t=e.size;return i.a.createElement(m,{size:t},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))};s.propTypes={size:o.a.number},s.defaultProps={size:10};var d=s,f=l.d.div.withConfig({displayName:"PageLoader__Container",componentId:"sc-1jv81q3-0"})(["display:inline-block;left:50%;position:relative;transform:translateX(-50%);"]);t.a=function(){return i.a.createElement(f,null,i.a.createElement(d,null))}},415:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/footer/cz.md",childMarkdownRemark:{html:"",frontmatter:{title:"En (English) footer content",content:{left:"Tomáš Vrána",rights:"Všechna práva vyhrazena"}}}},{relativePath:"content/footer/en.md",childMarkdownRemark:{html:"",frontmatter:{title:"En (English) footer content",content:{left:"TOMAS VRANA",rights:"All rights reserved"}}}}]}}}},416:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(20),o=(n(44),n(415)),l=n(2),c=n.n(l),m=n(41),s=n(8),d=function(e){var t=e.render;return i.a.createElement(s.d,null,function(e){var n=e.lang;return i.a.createElement(m.b,{query:"1139629735",render:function(e){var a=e.allFile.nodes.filter(function(e){return e.relativePath==="content/footer/"+n+".md"}).shift();if(!a||!a.childMarkdownRemark)throw new Error("No footer translations found for language "+n);return t(Object.assign({},a.childMarkdownRemark.frontmatter,{html:a.childMarkdownRemark.html}))},data:o})})};d.propTypes={render:c.a.func.isRequired};var f=d,p=r.d.footer.withConfig({displayName:"Footer__Container",componentId:"a1f04j-0"})(["width:100%;max-width:",";padding:0 2rem;margin:0 auto;display:block;letter-spacing:0.08em;margin-top:15rem;margin-bottom:3rem;text-transform:uppercase;font-size:60%;letter-spacing:.2rem;img{margin:0;}.left{text-align:left;float:left;}.right{text-align:right;}"],function(e){return e.theme.dimensions.contentWidth});t.a=function(){return i.a.createElement(p,null,i.a.createElement(f,{render:function(e){return i.a.createElement(a.Fragment,null,i.a.createElement("div",{className:"left"},"2022 © ",e.content.left),i.a.createElement("div",{className:"right"},e.content.rights))}}))}},421:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(2),o=n.n(r),l=n(20),c=n(417),m=n.n(c),s=n(412),d=n(414),f=n(8),p=n(16),g=n(416),h=l.d.main.withConfig({displayName:"Layout__Main",componentId:"twoqhg-0"})(["position:relative;z-index:1;margin:0 auto;width:100%;padding:10em 0;opacity:1;transition:0.5s opacity ease-in-out;max-width:",";&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"],function(e){return e.theme.dimensions.contentWidth}),u=l.d.div.withConfig({displayName:"Layout__PageLoaderContainer",componentId:"twoqhg-1"})(["opacity:1;transition:0.5s opacity ease-in-out;&.page-content-enter{opacity:0;}&.page-content-enter-active,&.page-content-leave{opacity:1;}&.page-content-leave-active{opacity:0;}"]),T=function(e){var t=e.children,n=e.pageLoading,r=Object(a.useState)(null),o=r[0],l=r[1],c=Object(a.useState)(null),s=c[0],f=c[1];return Object(a.useEffect)(function(){var e;return n?(l(!1),f(!0)):(f(!1),e=setTimeout(function(){l(!0)},500)),function(){clearTimeout(e)}},[n]),i.a.createElement(m.a,{transitionName:"page-content",transitionEnterTimeout:500,transitionLeaveTimeout:500},(null===s&&n||s)&&i.a.createElement(u,{key:"page_loader_"+Object(p.d)()},i.a.createElement(d.a,null)),(null===o&&!n||o)&&i.a.createElement(h,{key:"page_content_"+Object(p.d)()},t))};T.propTypes={children:o.a.node,pageLoading:o.a.bool};var y=function(e){var t=e.children,n=e.headData,r=void 0===n?null:n;return i.a.createElement(f.f,null,function(e){var n=e.loading;return i.a.createElement(a.Fragment,null,i.a.createElement(s.a,r),i.a.createElement(T,{pageLoading:n},t),i.a.createElement(g.a,null))})};y.propTypes={children:T.propTypes.children,headData:o.a.object},t.a=y},457:function(e){e.exports={data:{allFile:{nodes:[{relativePath:"content/projects/kolos/en.md",childMarkdownRemark:{frontmatter:{content:{title:"Kolos of Ostrava",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",media:"Paint, steel, concrete",type:"Installation",year:2019,image:"/images/kolos/1.jpg",location:"Ostrava, CZ",images:[{src:"/images/kolos/1.jpg"},{src:"/images/kolos/2.jpg"}]}}}},{relativePath:"content/projects/kolos/cz.md",childMarkdownRemark:{frontmatter:{content:{title:"Kolos of Ostrava",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",media:"Barva, ocel, beton",type:"Instalace",year:2019,image:"/images/kolos/1.jpg",location:"Ostrava",images:[{src:"/images/kolos/1.jpg"},{src:"/images/kolos/2.jpg"}]}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-kolos-of-ostrava-js-9bcd13320e9d56b94a54.js.map