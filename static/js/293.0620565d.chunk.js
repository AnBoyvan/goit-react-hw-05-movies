"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[293],{293:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(433),a=t(861),s=t(439),c=t(757),u=t.n(c),i=t(705),o=t(686),f=t.n(o),p=t(791),m=t(87),v=t(870),l=t(973),h="Movies_Searchbar__TJREf",_="Movies_SearchForm__qApC0",d="Movies_SearchFormBtn__pKTEA",x="Movies_SearchFormIinput__mOMFN",g=t(184),b=function(){var e=(0,p.useState)([]),r=(0,s.Z)(e,2),t=r[0],c=r[1],o=(0,m.lr)(),b=(0,s.Z)(o,2),w=b[0],j=b[1],k=w.get("query");(0,p.useEffect)((function(){var e=function(){var e=(0,a.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.z1)(k);case 3:r=e.sent,c((0,n.Z)(r.results)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();""!==k&&e()}),[k]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{className:h,children:(0,g.jsx)(i.J9,{initialValues:{search:""},onSubmit:function(e,r){var t=e.search,n=r.resetForm;if(""===t.trim())return f().Notify.failure("Please enter a search"),void n();j({query:t}),n()},children:(0,g.jsxs)(i.l0,{className:_,children:[(0,g.jsx)(i.gN,{type:"text",name:"search",className:x,autoFocus:!0}),(0,g.jsx)("button",{type:"submit",className:d,children:"Search"})]})})}),(0,g.jsx)(v.Z,{items:t})]})},w=function(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(b,{})})}},870:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(87),a=t(689),s="MovieItems_list__A4QYA",c="MovieItems_item__dFkha",u="MovieItems_link__1paVd",i="MovieItems_poster__BC4J4",o=t(184),f=function(e){var r=e.items,t=(0,a.TH)(),f=r.map((function(e){var r=e.id,a=e.title,s=e.poster_path;return(0,o.jsx)("li",{className:c,children:(0,o.jsxs)(n.rU,{className:u,to:"/movies/".concat(r),state:{from:t},children:[s&&(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(s),className:i,alt:""}),(0,o.jsx)("p",{children:a})]})},r)}));return(0,o.jsx)("ul",{className:s,children:f})}},973:function(e,r,t){t.d(r,{Jh:function(){return f},Pg:function(){return o},_L:function(){return i},_r:function(){return p},z1:function(){return u}});var n=t(861),a=t(757),s=t.n(a),c=t(912).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"15b081f5b9030a29148fdb73ac896fef",language:"en-US"}}),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/popular");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=293.0620565d.chunk.js.map