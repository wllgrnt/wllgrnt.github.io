(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(147),o=a(153),l=a(151);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"About the venues"}),r.a.createElement("h1",null,"The venues for the day"),r.a.createElement("p",null,"There will be some data here!"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},147:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(32),s=a.n(l);a.d(t,"a",function(){return s.a});a(148);var c=r.a.createContext({}),u=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Will and Christina Wedding",menuLinks:[{name:"home",link:"/"},{name:"venues",link:"/venues"}]}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(158),c=a.n(s),u=a(147);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.b,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var m="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Will and Christina Wedding",description:"Gatsby save-the-date website, built off the default starter.",author:"@wllgrnt"}}}}},153:function(e,t,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(147),c=(a(154),a(155),a(156),function(e){var t=e.siteTitle,a=e.menuLinks;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),i.a.createElement("nav",{style:{display:"flex",flex:1}},a.map(function(e){return i.a.createElement("li",{key:e.name,style:{listStyleType:"none"}},i.a.createElement(s.a,{to:e.link,style:{color:"white",textDecoration:"none"}},e.name))}))))});c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var u=c,d=(a(157),function(e){var t=e.children;return i.a.createElement(s.b,{query:"3436215879",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,i.a.createElement("footer",null,"© William Grant ",(new Date).getFullYear())))},data:n})});d.propTypes={children:l.a.node.isRequired};t.a=d}}]);
//# sourceMappingURL=component---src-pages-venues-js-12e6784cc62ef55d064b.js.map