(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{175:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(176),A=a(182),s=a(180),c=(a(21),a(195)),o=a(196),l=a.n(o);function d(e){return function(t){return i.a.createElement(n.b,{query:"856365532",render:function(a){return i.a.createElement(e,Object.assign({},t,{imageData:a}))},data:c})}}var u=d(function(e){return i.a.createElement(l.a,{fluid:e.imageData.churchMap.childImageSharp.fluid})}),f=d(function(e){return i.a.createElement(l.a,{fluid:e.imageData.churchInterior.childImageSharp.fluid})}),g=d(function(e){return i.a.createElement(l.a,{fluid:e.imageData.churchExterior.childImageSharp.fluid})});d(function(e){return i.a.createElement(l.a,{fluid:e.imageData.placeHolder.childImageSharp.fluid})}),t.default=function(){return i.a.createElement(A.a,null,i.a.createElement(s.a,{title:"About the venues"}),i.a.createElement("h1",null,"The venues for the day"),i.a.createElement("h2",null,"The church: St. Nicholas church / Kostel svatého Mikuláše "),i.a.createElement("p",null,"This Hussite church was built between 1732-1737, on the site of a 13th century Gothic church, and is located in the Old Town Square. ",i.a.createElement("a",{href:"https://www.svmikulas.cz/en/"},"See here for more details.")),i.a.createElement("p",null,"NB: Not to be confused with the St. Nicholas church in Mala Strana!"),i.a.createElement("p",null,"(Photos below belong to ",i.a.createElement("a",{href:"http://www.exclusiveweddingsinprague.com"},"Exclusive Weddings in Prague)")),i.a.createElement("p",null),i.a.createElement("div",{style:{maxWidth:"800px",marginBottom:"1.45rem"}},i.a.createElement(u,null),i.a.createElement(f,null),i.a.createElement(g,null)),i.a.createElement("h2",null,"The reception venue: Villa Richter"),i.a.createElement("p",null,"This restaurant sits alongside the Prague Castle, in the historic St. Wenceslas Vineyard. ",i.a.createElement("a",{href:"http://www.villarichter.cz/lang/en//"},"See here for more details.")),i.a.createElement(n.a,{to:"/"},"Go back to the homepage"))}},176:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),i=a.n(r),n=a(11),A=a.n(n),s=a(58),c=a.n(s);a.d(t,"a",function(){return c.a});a(177);var o=i.a.createContext({});function l(e){var t=e.staticQueryData,a=e.data,r=e.query,n=e.render,A=a?a.data:t[r]&&t[r].data;return i.a.createElement(i.a.Fragment,null,A&&n(A),!A&&i.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,r=e.render,n=e.children;return i.a.createElement(o.Consumer,null,function(e){return i.a.createElement(l,{data:t,query:a,render:r||n,staticQueryData:e})})};d.propTypes={data:A.a.object,query:A.a.string.isRequired,render:A.a.func,children:A.a.func}},177:function(e,t,a){var r;e.exports=(r=a(179))&&r.default||r},178:function(e){e.exports={data:{site:{siteMetadata:{title:"Will and Christina's Wedding",menuLinks:[{name:"Home",link:"/"},{name:"About the Venues",link:"/venues"}]}}}}},179:function(e,t,a){"use strict";a.r(t);a(21);var r=a(0),i=a.n(r),n=a(11),A=a.n(n),s=a(82),c=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:A.a.shape({pathname:A.a.string.isRequired}).isRequired},t.default=c},180:function(e,t,a){"use strict";var r=a(181),i=a(0),n=a.n(i),A=a(11),s=a.n(A),c=a(186),o=a.n(c),l=a(176);function d(e){var t=e.description,a=e.lang,i=e.meta,A=e.keywords,s=e.title;return n.a.createElement(l.b,{query:u,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(A.length>0?{name:"keywords",content:A.join(", ")}:[]).concat(i)})},data:r})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var u="1025518380"},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Will and Christina's Wedding",description:"Gatsby save-the-date website, built off the default starter.",author:"@wllgrnt"}}}}},182:function(e,t,a){"use strict";var r=a(178),i=a(0),n=a.n(i),A=a(11),s=a.n(A),c=a(176),o=(a(183),a(34),a(184),function(e){var t=e.siteTitle,a=e.menuLinks;return n.a.createElement("div",{style:{background:"#ff5000",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},t)),n.a.createElement("nav",{style:{display:"flex",flex:1}},a.map(function(e){return n.a.createElement("li",{key:e.name,style:{listStyleType:"none"}},n.a.createElement(c.a,{to:e.link,style:{color:"white",textDecoration:"none"}},e.name))}))))});o.propTypes={siteTitle:s.a.string},o.defaultProps={siteTitle:""};var l=o,d=(a(185),function(e){var t=e.children;return n.a.createElement(c.b,{query:"3436215879",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(l,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,n.a.createElement("footer",null,"© William Grant ",(new Date).getFullYear())))},data:r})});d.propTypes={children:s.a.node.isRequired};t.a=d},195:function(e){e.exports={data:{churchInterior:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBBAUC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQIA/9oADAMBAAIQAxAAAAFTZbFZhdBouzeqHlUN/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAECAxESE//aAAgBAQABBQKupMVcm/OJHO1bKQvOJXfye6ROxdLMT0eb/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AXT/xAAWEQADAAAAAAAAAAAAAAAAAAAAEBH/2gAIAQIBAT8BcP/EAB0QAAICAgMBAAAAAAAAAAAAAAABESECMRASUUH/2gAIAQEABj8CyS34KVR6PLGh9qRDktj+Dg1ZfH//xAAdEAEBAQACAwEBAAAAAAAAAAABEQAhMVFhsUGR/9oACAEBAAE/ISF0BMu9B3Osu3+jSQaQPelpBOvmkTofO8QFafMF/d64y25DzkeC9tVDS3MqDN//2gAMAwEAAgADAAAAEOjvTv/EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxCOhipdW//EABgRAAMBAQAAAAAAAAAAAAAAAAABEUFR/9oACAECAQE/EE1pX0iIP//EAB4QAQACAgIDAQAAAAAAAAAAAAEAESExQZFRYcHh/9oACAEBAAE/ELfTKPd5gIHPoEZ1L0vesJVzgF/r5Vf2BAEjbbUZsKOHMuWq4C8V0/JS4rVtjihxvfcUMTl76lnoaRNnUAXPYazAY3hc/9k=",aspectRatio:.6666666666666666,src:"/static/2cc37ab9a1ea2baeec7e7e770049573f/2f7e7/stnicks_interior.jpg",srcSet:"/static/2cc37ab9a1ea2baeec7e7e770049573f/4d406/stnicks_interior.jpg 250w,\n/static/2cc37ab9a1ea2baeec7e7e770049573f/32ee9/stnicks_interior.jpg 500w,\n/static/2cc37ab9a1ea2baeec7e7e770049573f/2f7e7/stnicks_interior.jpg 1000w,\n/static/2cc37ab9a1ea2baeec7e7e770049573f/2a5e2/stnicks_interior.jpg 1500w,\n/static/2cc37ab9a1ea2baeec7e7e770049573f/5bc26/stnicks_interior.jpg 1536w",sizes:"(max-width: 1000px) 100vw, 1000px"}}},churchExterior:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAGtkNwWyOF//8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAERIDE//aAAgBAQABBQJMx2o2J6EKnQlNlp//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwGI/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Bqv/EABsQAAEEAwAAAAAAAAAAAAAAAAABAiExQWFx/9oACAEBAAY/AsHFLIH6ktT/xAAcEAACAgIDAAAAAAAAAAAAAAAAAREhMUFhcYH/2gAIAQEAAT8h5BSasjaG54CUWXpJbbjkxWoOmf/aAAwDAQACAAMAAAAQAO//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPxAM/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAIAQIBAT8QrVP/xAAeEAEAAgICAwEAAAAAAAAAAAABABEhMWHRQVGBsf/aAAgBAQABPxA4I5WjEd8AlBah3+S7AfJsdVnfz1GJCg2LxctWjAmDQ+uZ/9k=",aspectRatio:1.5001500150015001,src:"/static/cd495d77e00b152a6ba99ec21f3065db/2f7e7/stnicks_exterior.jpg",srcSet:"/static/cd495d77e00b152a6ba99ec21f3065db/4d406/stnicks_exterior.jpg 250w,\n/static/cd495d77e00b152a6ba99ec21f3065db/32ee9/stnicks_exterior.jpg 500w,\n/static/cd495d77e00b152a6ba99ec21f3065db/2f7e7/stnicks_exterior.jpg 1000w,\n/static/cd495d77e00b152a6ba99ec21f3065db/2a5e2/stnicks_exterior.jpg 1500w,\n/static/cd495d77e00b152a6ba99ec21f3065db/883ab/stnicks_exterior.jpg 2000w,\n/static/cd495d77e00b152a6ba99ec21f3065db/bdd60/stnicks_exterior.jpg 5000w",sizes:"(max-width: 1000px) 100vw, 1000px"}}},churchMap:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAAAsSAAALEgHS3X78AAACzklEQVQozx1SaVPbSBDV//8RW5UtQqiEQEgW75JlP4RwJKQMJIAtW9iyNZoZzd1zST6CtEq6XvW3V/2OTq7U4MPi1VHx59yNvsvsL3zwHzs8ZQfH5cE7fHRtTm/V+LKqPqHN26x7Ne120+7lb+xOuuSrPvlhvozULYfKukCAfOaDT/LwAS4Km95R//Fp+8d992Lcvcm6Qbb5XGyGZHtH199JnWCPjDPexTqure+nQQ7JwIJfnRftzuj5fbY+XWwfqoZycMtiowREMM5aLZO5nkhLhSVLNYuhtiEg7ahUJ7O4k3avp+0PUocQNOcYE8uFkPKRogkTLsTkjA9O8cc7mqV6bkOjXQArr5B/+YvZpTRoACqDI8oqC8JIA8p6sK7iMhnp4bC6OcnHqfTMegdqIV1/sA/mhm7bVWTWSOtD8FJpIiQ2ZqkNuICESiSwCft2vrymELmvV8GdFdsXo+543lZgkeY5TK0FWrG8KOcFdgDBQr+d88kl/+erOH3QX5SHOkZhm38XP9+Om2FZN15VAPf6NhU3TBVSYx9ikFRTtERYGJXMqjlW6Jwdn+HBKtq0ioORuZowLaWv6xgig7JgGeVViMp51/MNWKVVH3BiDLvlF8dk/7q6BCsu0Hp33L7LtsoG5pvSNUj5UhgGvde5U8ppRSmiZFmUReIjpjDL5aOUs5Srg6fnnXF7+NRKDcpop2UMoU8YGUvvbqLAjUQlLp5QzlWVBMepYtEwLfiHWbs36fbSti8JcbtSlJd5qaHvbxODbeK8zAuSZ+VixpbGkmQuylzh4OiU+93H1f6j35u0R7NnY0FqdY/JcFFQrddB1Z5bIN7+hmcBSGIcd06tvfhG6v4x3kzb15Ofg1lN+58SRErRm13FHrIJwgFTCgPgpcKVKhJuSMZJyid/56HX3Aven24vC0mtbpy0zvWea68bL1ZB+F/kqpdQe5IT+j/G4iQp36Q40AAAAABJRU5ErkJggg==",aspectRatio:1.375586854460094,src:"/static/9709c19b05404ccdd297e27c83f8532d/26bfe/stnicks_map.png",srcSet:"/static/9709c19b05404ccdd297e27c83f8532d/69781/stnicks_map.png 250w,\n/static/9709c19b05404ccdd297e27c83f8532d/3fa08/stnicks_map.png 500w,\n/static/9709c19b05404ccdd297e27c83f8532d/26bfe/stnicks_map.png 879w",sizes:"(max-width: 879px) 100vw, 879px"}}},placeHolder:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/7c0ed/gatsby-astronaut.png 200w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/647de/gatsby-astronaut.png 400w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},196:function(e,t,a){"use strict";a(29),a(22),a(12),a(60),a(120),a(197);var r=a(16);t.__esModule=!0,t.default=void 0;var i,n=r(a(62)),A=r(a(63)),s=r(a(122)),c=r(a(123)),o=r(a(0)),l=r(a(11)),d=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},u=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},f=Object.create({}),g=function(e){var t=d(e),a=u(t);return f[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,E=new WeakMap;function b(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return o.default.createElement(o.default.Fragment,{key:t},r&&o.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),o.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function S(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return o.default.createElement("source",{key:t,media:a,srcSet:r})})}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return o.default.createElement("source",{key:t,media:a,srcSet:r})})}function y(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',A=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",l=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?y(e,!0):"")+y(e)}).join("")+"<img "+o+A+s+a+r+t+n+i+c+l+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},Q=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=o.default.createElement(R,(0,c.default)({src:t},i));return a.length>1?o.default.createElement("picture",null,r(a),n):n},R=o.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,A=e.onLoad,l=e.onError,d=e.loading,u=e.draggable,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return o.default.createElement("img",(0,c.default)({sizes:a,srcSet:r,src:i},f,{onLoad:A,onError:l,ref:t,loading:d,draggable:u,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});R.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!p&&m&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,A.default)((0,A.default)(a))),a.handleRef=a.handleRef.bind((0,A.default)((0,A.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=u(t),f[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,A=e.imgStyle,s=void 0===A?{}:A,l=e.placeholderStyle,u=void 0===l?{}:l,f=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,E=e.Tag,S=e.itemProp,y=e.loading,B=e.draggable,x=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,c.default)({opacity:x?1:0,transition:I?"opacity "+m+"ms":"none"},s),k="boolean"==typeof h?"lightgray":h,O={transitionDelay:m+"ms"},C=(0,c.default)({opacity:this.state.imgLoaded?0:1},I&&O,s,u),V={title:t,alt:this.state.isVisible?"":a,style:C,className:f};if(g){var T=g,L=T[0];return o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},o.default.createElement(E,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),k&&o.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&O)}),L.base64&&o.default.createElement(Q,{src:L.base64,spreadProps:V,imageVariants:T,generateSources:v}),L.tracedSVG&&o.default.createElement(Q,{src:L.tracedSVG,spreadProps:V,imageVariants:T,generateSources:w}),this.state.isVisible&&o.default.createElement("picture",null,b(T),o.default.createElement(R,{alt:a,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:y,draggable:B})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,c.default)({alt:a,title:t,loading:y},L,{imageVariants:T}))}}))}if(p){var M=p,Y=M[0],z=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},n);return"inherit"===n.display&&delete z.display,o.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},k&&o.default.createElement(E,{title:t,style:(0,c.default)({backgroundColor:k,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},I&&O)}),Y.base64&&o.default.createElement(Q,{src:Y.base64,spreadProps:V,imageVariants:M,generateSources:v}),Y.tracedSVG&&o.default.createElement(Q,{src:Y.tracedSVG,spreadProps:V,imageVariants:M,generateSources:w}),this.state.isVisible&&o.default.createElement("picture",null,b(M),o.default.createElement(R,{alt:a,title:t,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:y,draggable:B})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,c.default)({alt:a,title:t,loading:y},Y,{imageVariants:M}))}}))}return null},t}(o.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string}),N=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string,media:l.default.string});x.propTypes={resolutions:I,sizes:N,fixed:l.default.oneOfType([I,l.default.arrayOf(I)]),fluid:l.default.oneOfType([N,l.default.arrayOf(N)]),fadeIn:l.default.bool,durationFadeIn:l.default.number,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,crossOrigin:l.default.oneOfType([l.default.string,l.default.bool]),style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string,itemProp:l.default.string,loading:l.default.oneOf(["auto","lazy","eager"]),draggable:l.default.bool};var k=x;t.default=k},197:function(e,t,a){"use strict";a(187)("fixed",function(e){return function(){return e(this,"tt","","")}})}}]);
//# sourceMappingURL=component---src-pages-venues-js-3acd9dd33960d8a909e2.js.map