"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[509],{509:function(t,r,e){e.r(r),e.d(r,{default:function(){return m}});var n=e(433),a=e(861),u=e(439),c=e(757),s=e.n(c),i=e(791),o=e(870),f=e(973),p=e(184),v=function(){var t=(0,i.useState)([]),r=(0,u.Z)(t,2),e=r[0],c=r[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,a.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f._L)();case 3:r=t.sent,c((0,n.Z)(r.results)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsx)(o.Z,{items:e})},m=function(){return(0,p.jsx)(v,{})}},870:function(t,r,e){e.d(r,{Z:function(){return f}});var n=e(87),a=e(689),u="MovieItems_list__A4QYA",c="MovieItems_item__dFkha",s="MovieItems_link__1paVd",i="MovieItems_poster__BC4J4",o=e(184),f=function(t){var r=t.items,e=(0,a.TH)(),f=r.map((function(t){var r=t.id,a=t.title,u=t.poster_path;return(0,o.jsx)("li",{className:c,children:(0,o.jsxs)(n.rU,{className:s,to:"/movies/".concat(r),state:{from:e},children:[u&&(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(u),className:i,alt:""}),(0,o.jsx)("p",{children:a})]})},r)}));return(0,o.jsx)("ul",{className:u,children:f})}},973:function(t,r,e){e.d(r,{Jh:function(){return f},Pg:function(){return o},_L:function(){return i},_r:function(){return p},z1:function(){return s}});var n=e(861),a=e(757),u=e.n(a),c=e(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"15b081f5b9030a29148fdb73ac896fef",language:"en-US"}}),s=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(){var r,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/popular");case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=509.8acb2d8d.chunk.js.map