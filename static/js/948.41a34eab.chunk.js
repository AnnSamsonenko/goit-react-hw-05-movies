"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[948],{1454:function(n,e,t){t.d(e,{a:function(){return s}});var r,i=t(6373),o=t(168),a=t(5751).ZP.div(r||(r=(0,o.Z)(["\n  width: fit-content;\n  margin: 0 auto;\n"]))),c=t(184),s=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(i.W0,{heigth:"50",width:"50",color:"#ff6838",ariaLabel:"loading"})})}},4946:function(n,e,t){t.d(e,{Tg:function(){return d},Hq:function(){return h},Mc:function(){return f},wL:function(){return v},Bt:function(){return g}});var r=t(5861),i=t(7757),o=t.n(i),a=t(4569),c=t.n(a),s="https://api.themoviedb.org/3/",u="c3a4cb8038ee207f234d0a08ae3fa54d";function l(){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(o().mark((function n(){var e,t,r,i=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:"",t=i.length>1&&void 0!==i[1]?i[1]:{},n.next=4,c().get(e,t);case 4:return r=n.sent,n.abrupt("return",r.data);case 6:case"end":return n.stop()}}),n)}))),p.apply(this,arguments)}function d(){return l("".concat(s,"/trending/movie/day?api_key=").concat(u))}function h(n){return l("".concat(s,"search/movie?api_key=").concat(u,"&query=").concat(n,"&language=en-US&include_adult=false"))}function f(n){return l("".concat(s,"/movie/").concat(n,"?api_key=").concat(u,"&language=en-US"))}function v(n){return l("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"))}function g(n){return l("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&"))}},6948:function(n,e,t){t.r(e),t.d(e,{MovieDetails:function(){return L}});var r,i,o,a,c,s,u,l,p,d=t(5861),h=t(885),f=t(7757),v=t.n(f),g=t(6871),x=t(2791),m=t(4946),w=t(168),j=t(5751),Z=t(501),_=j.ZP.div(r||(r=(0,w.Z)(["\n  width: 70%;\n  margin: 0 auto;\n  display: flex;\n"]))),k=j.ZP.div(i||(i=(0,w.Z)(["\n  width: 50%;\n  height: 100%;\n  padding: 10px;\n"]))),b=j.ZP.img(o||(o=(0,w.Z)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),y=j.ZP.h3(a||(a=(0,w.Z)(["\n  margin-bottom: 20px;\n  font-weight: 500;\n  font-size: 36px;\n  line-height: 40px;\n  text-transform: capitalize;\n  color: #363853;\n"]))),P=j.ZP.h4(c||(c=(0,w.Z)(["\n  margin-bottom: 10px;\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 30px;\n  color: #363853;\n"]))),S=j.ZP.p(s||(s=(0,w.Z)(["\n  margin-bottom: 10px;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 24px;\n  color: #363853;\n  opacity: 0.9;\n"]))),U=j.ZP.div(u||(u=(0,w.Z)(["\n  width: fit-content;\n  padding: 20px 0;\n  margin: 0 auto;\n"]))),z=(0,j.ZP)(Z.rU)(l||(l=(0,w.Z)(["\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 28px;\n  color: #363853;\n  transition: color 250ms ease;\n  &:not(:last-child) {\n    margin-right: 16px;\n  }\n  &:hover {\n    color: #ff7a50;\n  }\n"]))),C=(0,j.ZP)(Z.rU)(p||(p=(0,w.Z)(["\n  margin-top: 10px;\n  display: inline-block;\n  padding: 8px 23px;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 24px;\n  color: #fff;\n  background-color: #ff7a50;\n  box-shadow: 0px 22px 40px rgba(255, 104, 56, 0.19);\n  border-radius: 30px 30px 1px 30px;\n"]))),M=t(184),q=function(n){var e=n.movie;return(0,M.jsxs)(_,{children:[(0,M.jsx)(k,{children:(0,M.jsx)(b,{src:e.poster_path,alt:e.title})}),(0,M.jsxs)(k,{children:[(0,M.jsxs)(y,{children:[e.title," (",e.release_date,")"]}),(0,M.jsxs)(S,{children:["User score: ",e.vote_average,"%"]}),(0,M.jsx)(P,{children:"Overview"}),(0,M.jsx)(S,{children:e.overview}),(0,M.jsx)(P,{children:"Genres"}),(0,M.jsx)(S,{children:e.genres.join(", ")})]})]})},G=t(5834),H=t(1454),L=function(){var n,e,t,r,i=(0,g.TH)(),o=(0,g.UO)().movieId,a=(0,x.useState)(null),c=(0,h.Z)(a,2),s=c[0],u=c[1],l=(0,x.useState)(!1),p=(0,h.Z)(l,2),f=p[0],w=p[1],j=(0,x.useState)(""),Z=(0,h.Z)(j,2),_=Z[0],k=Z[1];return(0,x.useEffect)((function(){var n=function(){var n=(0,d.Z)(v().mark((function n(){var t,r;return v().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),k(""),n.next=5,(0,m.Mc)(o);case 5:t=n.sent,r=e(t),u(r),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),k(n.t0.message);case 13:return n.prev=13,w(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})));return function(){return n.apply(this,arguments)}}(),e=function(n){return{poster_path:n.poster_path?"https://image.tmdb.org/t/p/w300/".concat(n.poster_path):"https://sd.keepcalms.com/i/keep-calm-poster-not-found.png",release_date:n.release_date.slice(0,4),vote_average:10*n.vote_average,genres:n.genres.map((function(n){return n.name})),overview:n.overview,title:n.title,id:n.id}};n()}),[o]),(0,M.jsxs)(G.W,{children:[(0,M.jsx)(C,{to:null!==(n=null===i||void 0===i||null===(e=i.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Go back"}),f&&(0,M.jsx)(H.a,{}),_&&(0,M.jsx)("h2",{children:"Something went wrong, please try again"}),!_&&!f&&s&&(0,M.jsx)(q,{movie:s}),(0,M.jsx)("hr",{}),(0,M.jsxs)(U,{children:[(0,M.jsx)(z,{state:{from:null===i||void 0===i||null===(t=i.state)||void 0===t?void 0:t.from},to:"cast",children:"Cast"}),(0,M.jsx)(z,{state:{from:null===i||void 0===i||null===(r=i.state)||void 0===r?void 0:r.from},to:"reviews",children:"Reviews"})]}),(0,M.jsx)(g.j3,{})]})}}}]);
//# sourceMappingURL=948.41a34eab.chunk.js.map