"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[90],{90:function(t,r,e){e.r(r),e.d(r,{default:function(){return d}});var n=e(861),a=e(439),c=e(757),u=e.n(c),s=e(791),i=e(689),o=e(973),p="Cast_list__iUE7c",f="Cast_item__iDaXp",v="Cast_photo__oqgJb",h="Cast_name__FDwnw",l="Cast_character__vuBWQ",m=e(184),_=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),e=r[0],c=r[1],_=(0,i.UO)().id;(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.Jh)(_);case 3:r=t.sent,c(r.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[_]);var d=e.map((function(t){var r=t.id,e=t.name,n=t.character,a=t.profile_path;return(0,m.jsxs)("li",{className:f,children:[a&&(0,m.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),className:v,alt:""}),(0,m.jsx)("p",{className:h,children:e}),(0,m.jsxs)("p",{className:l,children:["Character: ",n]})]},r)}));return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("ul",{className:p,children:0===d.length?"We don't have any cast for this movie":d})})},d=function(){return(0,m.jsx)(_,{})}},973:function(t,r,e){e.d(r,{Jh:function(){return p},Pg:function(){return o},_L:function(){return i},_r:function(){return f},z1:function(){return s}});var n=e(861),a=e(757),c=e.n(a),u=e(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"15b081f5b9030a29148fdb73ac896fef",language:"en-US"}}),s=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("search/movie",{params:{query:r}});case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("movie/popular");case 2:return r=t.sent,e=r.data,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=90.5ee5ba85.chunk.js.map