(this["webpackJsonpboba-watch"]=this["webpackJsonpboba-watch"]||[]).push([[15],{288:function(e,t,a){"use strict";function c(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){var a=parseInt(e/100);return isNaN(a)?"---":a}var c=Number(e/100).toFixed(2);return isNaN(c)?"---":c}a.d(t,"a",(function(){return c}))},299:function(e,t,a){"use strict";var c=a(70),s=a(72);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(1)),r=(0,c(a(71)).default)(n.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=r},300:function(e,t,a){"use strict";var c=a(70),s=a(72);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(1)),r=(0,c(a(71)).default)(n.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=r},446:function(e,t,a){},447:function(e,t,a){},448:function(e,t,a){e.exports={container:"MobileHistory_container__qelPH",title:"MobileHistory_title__5kamD",header:"MobileHistory_header__2h55U",search:"MobileHistory_search__34Gym",history:"MobileHistory_history__14e0Q",bw:"MobileHistory_bw__1DL8T",total:"MobileHistory_total__2gJQX","none-label":"MobileHistory_none-label__1zwNd","load-more":"MobileHistory_load-more__2G_i1","thaman-color":"MobileHistory_thaman-color__2UV_g"}},498:function(e,t,a){"use strict";a.r(t);var c=a(9),s=a(8),n=a(1),r=a(19),i=a(279),l=a(299),o=a.n(l),d=a(300),j=a.n(d),b=a(288),O=a(61),u=a(11),h=a(10),m=a(46),p=a(30),x=(a(446),a(2)),f=function(e){var t=e.data,a=e.triggerUpdate,r=Object(n.useContext)(p.a),l=Object(s.a)(r,1)[0],d=Object(i.a)().t,f=Object(n.useState)(!1),v=Object(s.a)(f,2),N=v[0],g=v[1],_=Object(h.g)(),y=new Date(t.date);return Object(x.jsxs)("div",{className:"drink-panel",children:[Object(x.jsxs)("div",{className:"info",onClick:function(){g(!N)},children:[Object(x.jsx)("p",{className:"place",children:t.location}),Object(x.jsxs)("p",{className:"price",children:[d("$"),Object(b.a)(t.price)]}),Object(x.jsx)("div",{className:"expand-icon",children:N?Object(x.jsx)(o.a,{}):Object(x.jsx)(j.a,{})}),Object(x.jsx)("p",{className:"name",children:t.name}),Object(x.jsx)("p",{className:"time",children:y.toDateString().substr(4)})]}),Object(x.jsxs)("div",{className:"collapsed-info"+(N?" expanded":""),children:[Object(x.jsx)(H,Object(c.a)(Object(c.a)({},t),{},{expanded:N,date:y})),Object(x.jsxs)("div",{className:"options",children:[Object(x.jsx)("button",{className:"text",onClick:function(){_("/edit/"+t.id)},children:d("EDIT")}),Object(x.jsx)("button",{className:"text",onClick:function(){u.b.collection("users/".concat(l.uid,"/drinks")).doc(t.id).delete().then((function(){var e=Object(O.b)(t.id);e.d=JSON.stringify(e.d),u.b.collection("users/".concat(l.uid,"/user")).doc("stats").set(e).finally((function(){Object(m.d)(),a(JSON.parse(localStorage.getItem("drinkids")))}))})).catch((function(e){Object(m.e)(e)}))},children:d("DELETE")})]})]})]})},v=Object(n.memo)(f),N=a(15),g=a.n(N),_=a(25),y=a(305),S=a(97),w=a.n(S),M=a(94),k=(a(447),function(e){var t=e.name,a=e.location,c=e.description,r=e.expanded,l=e.image,o=e.date,d=Object(i.a)().t,j=Object(n.useState)(!1),b=Object(s.a)(j,2),O=b[0],u=b[1],h=new w.a;return Object(n.useEffect)((function(){r&&l&&Object(_.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,Object(M.b)(l);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[l,r]),Object(x.jsxs)("div",{className:"expanded-drink-description--wrapper",children:[Object(x.jsxs)("p",{className:"title",children:[t,Object(x.jsx)("br",{}),Object(x.jsxs)("span",{children:["@",a]})]}),O&&Object(x.jsx)("img",{src:O,className:"user-uploaded",alt:"user-upload"}),Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"description",children:Object(x.jsx)(y.default,{id:"preview",view:{menu:!1,md:!1},readOnly:!0,renderHTML:function(e){return h.render(e)},canView:{menu:!1,md:!1,html:!1,fullScreen:!1,hideMenu:!1},value:c})}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{className:"date",children:[Object(x.jsx)("span",{children:d("on")})," ",o.toString()]})]})}),H=Object(n.memo)(k),E=a(39),D=a(448),J=a.n(D),I=function(e){var t=e.click;return Object(x.jsx)("div",{className:J.a["thaman-color"],children:Object(x.jsx)("div",{className:J.a["load-more"],onClick:t,children:"\u2022 \u2022 \u2022"})})},L=function(e){var t=e.label,a=Object(i.a)().t;return Object(x.jsx)("div",{className:Object(r.a)(J.a["thaman-color"],J.a["none-label"]),children:Object(x.jsx)("h3",{className:"bw none-label",children:a(t)})})},C=function(){var e=Object(i.a)().t,t=Object(n.useState)([]),a=Object(s.a)(t,2),l=a[0],o=a[1],d=Object(n.useState)([]),j=Object(s.a)(d,2),O=j[0],u=j[1],h=Object(n.useState)({complete:5,recent:7}),m=Object(s.a)(h,2),p=m[0],f=m[1],N=Object(n.useState)([]),g=Object(s.a)(N,2),_=g[0],y=g[1],S=Object(n.useState)(JSON.parse(localStorage.getItem("drinkids"))),w=Object(s.a)(S,2),M=w[0],k=w[1],H=Object(n.useState)(JSON.parse(localStorage.getItem("metrics"))),D=Object(s.a)(H,2),C=D[0],T=D[1];Object(n.useEffect)((function(){T(JSON.parse(localStorage.getItem("metrics")));var e=[],t=[],a=[],s=new Date,n=s.getMonth(),r=s.getFullYear(),i=p.complete,l=p.recent;M.forEach((function(c){var s=JSON.parse(localStorage.getItem(c));a.push(s);var o=new Date(s.date),d=o.getMonth()===n&&o.getFullYear()===r;d&&l>0?(e.push(Object(x.jsx)(v,{triggerUpdate:k,data:s},s.id)),l--):!d&&i>0&&(t.push(Object(x.jsx)(v,{triggerUpdate:k,data:s},s.id)),i--)})),0===e.length&&(e.push(Object(x.jsx)(L,{label:"no drinks this month ...yet"},"@ryqndev/empty")),0===t.length&&t.push(Object(x.jsx)(L,{label:"Add a drink to start!"},"@ryqndev/empty"))),l<=0&&e.push(Object(x.jsx)(I,{click:function(){f(Object(c.a)(Object(c.a)({},p),{},{recent:p.recent+10}))}},"@ryqndev/load")),i<=0&&t.push(Object(x.jsx)(I,{click:function(){f(Object(c.a)(Object(c.a)({},p),{},{complete:p.complete+10}))}},"@ryqndev/load")),o([].concat(e)),u([].concat(t)),y(a)}),[M.length,M,p,p.recent,p.complete]);return Object(x.jsx)("div",{className:"page with-user",children:Object(x.jsxs)("div",{className:J.a.container,children:[Object(x.jsx)("div",{className:J.a.header,children:Object(x.jsx)("h3",{className:J.a.title,children:e("Drink History")})}),Object(x.jsx)("div",{className:J.a.search,children:Object(x.jsx)(E.g,{placeholder:e("Search your history..."),data:_,keys:["description","location","name","price"],Result:function(e){var t=e.item;e.matches;return Object(x.jsx)(v,{triggerUpdate:k,data:t})}})}),Object(x.jsxs)("div",{className:J.a.list,children:[Object(x.jsx)("h3",{className:J.a.bw,children:e("Monthly Spending")}),Object(x.jsx)("div",{className:"history-spending",children:l}),Object(x.jsxs)("h3",{className:Object(r.a)(J.a.bw,J.a.total),children:[Object(x.jsxs)("span",{children:[e("Monthly Total"),":"]})," ",e("$"),Object(b.a)(C.tc)]}),Object(x.jsx)("h3",{className:J.a.bw,children:e("Overall Spending")}),Object(x.jsx)("div",{className:"history-spending",children:O}),Object(x.jsxs)("h3",{className:Object(r.a)(J.a.bw,J.a.total),children:[Object(x.jsxs)("span",{children:[e("Complete Total"),":"]})," ",e("$"),Object(b.a)(C.ctc)]})]})]})})},T=Object(n.memo)(C);t.default=T}}]);
//# sourceMappingURL=15.9bf84d32.chunk.js.map