(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(152),o=n(150);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},146:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(32),l=n.n(s);n.d(t,"a",function(){return l.a});n(147);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Will and Christina's Wedding",menuLinks:[{name:"Home",link:"/"},{name:"About the Venues",link:"/venues"}]}}}}},149:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(54),l=n(2),c=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},150:function(e,t,n){"use strict";var a=n(151),r=n(0),i=n.n(r),o=n(4),s=n.n(o),l=n(157),c=n.n(l),u=n(146);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(u.b,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var m="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Will and Christina's Wedding",description:"Gatsby save-the-date website, built off the default starter.",author:"@wllgrnt"}}}}},152:function(e,t,n){"use strict";var a=n(148),r=n(0),i=n.n(r),o=n(4),s=n.n(o),l=n(146),c=(n(153),n(154),n(155),function(e){var t=e.siteTitle,n=e.menuLinks;return i.a.createElement("div",{style:{background:"#ff652f",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("nav",{style:{display:"flex",flex:1}},n.map(function(e){return i.a.createElement("li",{key:e.name,style:{listStyleType:"none"}},i.a.createElement(l.a,{to:e.link,style:{color:"white",textDecoration:"none"}},e.name))}))))});c.propTypes={siteTitle:s.a.string},c.defaultProps={siteTitle:""};var u=c,d=(n(156),function(e){var t=e.children;return i.a.createElement(l.b,{query:"3436215879",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:a})});d.propTypes={children:s.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-b19c1f0759304c56b06f.js.map