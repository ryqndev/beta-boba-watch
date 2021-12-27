"use strict";(self.webpackChunkboba_watch=self.webpackChunkboba_watch||[]).push([[647],{9268:function(e,t,n){n.d(t,{SJ:function(){return m},ul:function(){return p},df:function(){return b}});var a=n(8182),r=n(2791),s=n(1768),i=n(500),c=n(5026),o=n(2333),l="UserLocationButton_button__mgCvr",d="UserLocationButton_center__59pZY",u=n(184),h=function(e){var t=e.setPosition,n=(0,c.Z)(),h=(0,s.Sx)(),p=(0,r.useCallback)((function(){if(!(null!==n&&void 0!==n&&n.lat||null!==n&&void 0!==n&&n.lng))return null;t([n.lat,n.lng]),h.flyTo([n.lat,n.lng],13,{animate:!0,duration:1})}),[n,h,t]);return(0,r.useEffect)(p,[p]),(0,u.jsxs)(u.Fragment,{children:[(null===n||void 0===n?void 0:n.lat)&&(null===n||void 0===n?void 0:n.lng)&&(0,u.jsx)(i.c,{center:[n.lat,n.lng],radius:5,fill:!0,color:"#B64040",fillColor:"#B64040",fillOpacity:"1"}),(0,u.jsx)("button",{className:(0,a.Z)(l,d),onClick:p,children:(0,u.jsx)(o.Z,{})})]})},p=(0,r.memo)(h),m=function(e){var t=e.center,n=(0,s.Sx)();return(0,r.useEffect)((function(){n.flyTo(t,13,{animate:!0,duration:.5})}),[t,n]),(0,u.jsx)("div",{})},_=n(2840),f=n(5987),x=n(885),j=["location","id","address","date"],v=function(e){var t=(0,r.useState)([]),n=(0,x.Z)(t,2),a=n[0],s=n[1];return(0,r.useEffect)((function(){s(Object.values(e.reduce((function(e,t){var n=t.location,a=t.id,r=t.address,s=t.date;(0,f.Z)(t,j);if(null===r||void 0===r||!r.lat||null===r||void 0===r||!r.lng)return e;var i=r.lat.toFixed(6),c=r.lng.toFixed(6),o="".concat(i,",").concat(c).concat(n);return e.hasOwnProperty(o)?e[o].drinks.push({id:a,date:s}):e[o]={coordinates:[i,c],location:n,address:r,drinks:[{id:a,date:s}]},e}),{})))}),[e]),{locations:a}},k=n(1951),g="VisitedLocations_container__kuIJ6",b=function(e){var t=e.drinks,n=v(t).locations;return(0,u.jsx)(u.Fragment,{children:n.map((function(e){var t=e.coordinates,n=e.drinks,a=e.location;return(0,u.jsx)(i.c,{center:t,radius:10,fill:!0,weight:1,color:"#F68080",fillColor:"#F68080",fillOpacity:"0.5",children:(0,u.jsx)(_.G,{children:(0,u.jsxs)("div",{className:g,children:[(0,u.jsx)("h2",{children:a}),(0,u.jsxs)("p",{children:["Visited ",(0,u.jsx)("span",{children:n.length})," times"]}),(0,u.jsx)("p",{children:"Recent visits:"}),n.slice(0,5).map((function(e){var t=e.date;return(0,u.jsx)("div",{children:(0,k.Z)(new Date(t),"MMM d, yyyy h:mm a")},t)}))]})})},JSON.stringify(t)+a)}))})}},3798:function(e,t,n){function a(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(t){var n=parseInt(e/100);return isNaN(n)?"---":n}var a=Number(e/100).toFixed(2);return isNaN(a)?"---":a}n.d(t,{K:function(){return a}})},1748:function(e,t,n){var a=n(885),r=n(2791);t.Z=function(){var e=(0,r.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],i=(0,r.useState)([]),c=(0,a.Z)(i,2),o=c[0],l=c[1],d=(0,r.useCallback)((function(){s(JSON.parse(localStorage.getItem("drinkids")))}),[]);return(0,r.useEffect)(d,[d]),(0,r.useEffect)((function(){l(n.map((function(e){return JSON.parse(localStorage.getItem(e))})))}),[n]),{drinkids:n,drinks:o,update:d}}},5026:function(e,t,n){var a=n(1413),r=n(885),s=n(2791);t.Z=function(){var e=(0,s.useState)({}),t=(0,r.Z)(e,2),n=t[0],i=t[1],c=(0,s.useState)(null),o=(0,r.Z)(c,2),l=o[0],d=o[1],u=function(e){d(e.message)},h=function(e){var t=e.coords,n=e.timestamp;i({accuracy:t.accuracy,alt:t.altitude,altitudeAccuracy:t.altitudeAccuracy,heading:t.heading,lat:t.latitude,lng:t.longitude,timestamp:n})};return(0,s.useEffect)((function(){navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(h,u,{}):d("Geolocation is not supported")}),[]),(0,a.Z)((0,a.Z)({},n),{},{error:l})}},1835:function(e,t,n){n.d(t,{si:function(){return p},Hj:function(){return $},ky:function(){return ce},x_:function(){return he}});var a=n(2791),r=n(4258),s=n(7743),i=n(3168),c="BudgetPieChart_container__50hfA",o="BudgetPieChart_description__tlZXI",l="BudgetPieChart_chart__GNVD5",d="BudgetPieChart_full__y+pG5",u=n(184),h=function(e){var t=e.spent,n=void 0===t?0:t,a=e.budget,h=void 0===a?1:a,p=e.theme,m=(0,i.$)().t;return(0,u.jsxs)("div",{className:c,children:[(0,u.jsxs)("div",{className:o,children:[(0,u.jsxs)("p",{children:[m("monthly limit"),": $",h/100]}),(0,u.jsxs)("span",{children:["$",(n/100).toFixed(2)]}),(0,u.jsxs)("p",{children:[m("remaining"),": $",(h-n)/100]})]}),(0,u.jsx)("svg",{className:l,viewBox:"0 0 100 100",children:(0,u.jsx)(s.Z,{className:d,left:50,top:50,children:(0,u.jsx)(r.Z,{data:[{label:"spent",value:n},{label:"unspent",value:h-n}],pieSortValues:function(){return 1},pieValue:function(e){return e.value},fill:function(e){return"spent"===e.data.label?"#14e33a":"dark"!==p?"#d8d8d8":"#223242"},outerRadius:48,innerRadius:32,cornerRadius:2,padAngle:.1})})})]})},p=(0,a.memo)(h),m=n(1413),_=n(885),f=n(7595),x=n(5429),j=n(5861),v=n(7757),k=n.n(v),g=n(1502),b=n(3534),D=n.n(b),N=n(5613),Z="ExpandedDrinkDescription_container__0UdSo",y="ExpandedDrinkDescription_title__kx82G",M="ExpandedDrinkDescription_date__y6qQZ",P="ExpandedDrinkDescription_user-uploaded__iHuJM",S="ExpandedDrinkDescription_description__3WSpP",w="ExpandedDrinkDescription_preview__joAu8",A=function(e){var t=e.name,n=e.location,r=e.description,s=e.expanded,c=e.image,o=e.date,l=(0,i.$)().t,d=(0,a.useState)(!1),h=(0,_.Z)(d,2),p=h[0],m=h[1],f=new(D());return(0,a.useEffect)((function(){s&&c&&(0,j.Z)(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m,e.next=3,(0,N.Vq)(c);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[c,s]),(0,u.jsxs)("div",{className:Z,children:[(0,u.jsxs)("p",{className:y,children:[t,(0,u.jsxs)("span",{children:[" @ ",n]})]}),p&&(0,u.jsx)("img",{src:p,className:P,alt:"user-upload"}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{className:S,children:r&&""!==r?(0,u.jsx)(g.default,{id:w,view:{menu:!1,md:!1},readOnly:!0,renderHTML:function(e){return f.render(e)},canView:{menu:!1,md:!1,html:!1,fullScreen:!1,hideMenu:!1},value:r}):(0,u.jsx)("span",{children:"[no description]"})}),(0,u.jsx)("br",{}),(0,u.jsxs)("p",{className:M,children:[(0,u.jsx)("span",{children:l("on")})," ",o.toString()]})]})},C=n(3798),O=n(8182),T="DrinkPanel_container__o4BKt",E="DrinkPanel_basic-details__gsVq1",B="DrinkPanel_place__A014J",F="DrinkPanel_time__Ff-r3",H="DrinkPanel_price__wjUY0",I="DrinkPanel_name__BcCES",V="DrinkPanel_expand-icon__UoGXD",G="DrinkPanel_collapsed-info__i3DQ1",J="DrinkPanel_expanded__sAK1n",L=function(e){var t=e.data,n=(0,i.$)().t,r=(0,a.useState)(!1),s=(0,_.Z)(r,2),c=s[0],o=s[1],l=new Date(t.date);return(0,u.jsxs)("div",{className:T,children:[(0,u.jsxs)("div",{className:E,onClick:function(){return o((function(e){return!e}))},children:[(0,u.jsx)("p",{className:B,children:t.location}),(0,u.jsxs)("p",{className:H,children:[n("$"),(0,C.K)(t.price)]}),(0,u.jsx)("div",{className:V,children:c?(0,u.jsx)(f.Z,{}):(0,u.jsx)(x.Z,{})}),(0,u.jsx)("p",{className:I,children:t.name}),(0,u.jsx)("p",{className:F,children:l.toDateString().substr(4)})]}),(0,u.jsx)("div",{className:(0,O.Z)(G,c&&J),children:(0,u.jsx)(A,(0,m.Z)((0,m.Z)({},t),{},{expanded:c,date:l}))})]})},$=(0,a.memo)(L),R=n(3125),q=n(1323),W=n(4031),z=n(7524),Q="PurchaseTimeHeatMap_container__nIz-O",U="PurchaseTimeHeatMap_tick__tj3Gp",K="PurchaseTimeHeatMap_tick-label__4McGv",X="PurchaseTimeHeatMap_tooltip__Dv50R",Y=n(2506),ee=n(9766),te=n(863),ne=function(e){var t=e.bin,n=e.handleMouseOver,a=e.hideTooltip;return(0,u.jsx)("rect",{width:t.width,height:t.height,x:t.x,y:t.y,fill:t.color,fillOpacity:t.opacity,"data-bin":JSON.stringify({row:t.row,column:t.column,count:t.count}),onMouseOver:n,onMouseOut:a})},ae=(0,a.memo)(ne),re=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],se=["1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 AM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM","12 PM"],ie=function(e){var t=e.data,n=(0,i.$)().t,a=(0,Y.Z)(),r=a.tooltipData,c=a.tooltipLeft,o=a.tooltipTop,l=a.tooltipOpen,d=a.showTooltip,h=a.hideTooltip,p=(0,ee.Z)({detectBounds:!0,scroll:!0}),m=p.containerRef,_=p.TooltipInPortal,f=function(e){var t=(0,te.Z)(e.target.ownerSVGElement,e);d({tooltipLeft:t.x,tooltipTop:t.y,tooltipData:JSON.parse(e.target.dataset.bin)})},x=0,j=t.map((function(e,t){return{bin:t+1,bins:e.map((function(e,t){return e>x&&(x=e),{count:e,bin:t}}))}}));return(0,u.jsxs)("svg",{ref:m,className:Q,viewBox:"0 0 214 400",children:[(0,u.jsx)(q.Z,{scale:(0,z.Z)({domain:re.map((function(e){return n(e)})),range:[24,209]}),top:14,tickLength:4,tickClassName:U,tickStroke:"grey",stroke:"#aaa",tickLabelProps:function(){return{className:K,y:-7,textAnchor:"middle"}}}),(0,u.jsx)(W.Z,{scale:(0,z.Z)({domain:se.map((function(e){return n(e)})),range:[13,396]}),left:24,orientation:"left",tickLength:4,tickClassName:U,tickStroke:"grey",stroke:"#aaa",numTicks:24,tickLabelProps:function(){return{className:K,transform:"translate(0, 2)",x:-22,textAnchor:"left"}}}),(0,u.jsx)(s.Z,{left:20,children:(0,u.jsx)(R.Z,{data:j,xScale:function(e){return 26.5*e+4},yScale:function(e){return 16*e+12},colorScale:function(e){return"rgba(246, 128, 128, ".concat(0===e?x>5?.01:.1:e/x,")")},binWidth:27.5,binHeight:17,children:function(e){return e.map((function(e){return e.map((function(e){return(0,u.jsx)(ae,{bin:e,handleMouseOver:f,hideTooltip:h},"heatmap-rect-".concat(e.row,"-").concat(e.column))}))}))}})}),l&&(0,u.jsx)(_,{top:o,left:c,children:(0,u.jsxs)("div",{className:X,children:[(0,u.jsxs)("time",{children:[n(re[r.column])," | ",n(se[r.row])]}),(0,u.jsxs)("p",{children:[(0,u.jsxs)("strong",{children:[r.count," "]}),n("drinks purchased",{count:r.count})]})]})},Math.random())]})},ce=(0,a.memo)(ie),oe=n(2311),le=n(9268),de="VisitedMap_container__3Hbfc",ue=function(e){var t=e.className,n=e.theme,a=e.drinks;return(0,u.jsx)(oe.Z,{className:(0,O.Z)(t,de),scrollWheelZoom:!1,touchZoom:!0,dragging:!0,zoom:2.5,theme:n,children:function(e){return(0,u.jsx)(le.df,{drinks:a})}})},he=(0,a.memo)(ue)},5647:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(885),r=n(2791),s=n(3168),i=n(4674),c=n(1748),o=n(6433),l=n(1835),d={container:"DesktopDashboard_container__rIoCH",title:"DesktopDashboard_title__fC1B-",content:"DesktopDashboard_content__+4QG4",map:"DesktopDashboard_map__CiWsV",heatmap:"DesktopDashboard_heatmap__zmexE",stats:"DesktopDashboard_stats__TFDAc",budget:"DesktopDashboard_budget__6VtW-",total:"DesktopDashboard_total__90Qza",xy:"DesktopDashboard_xy__-RjIg",sidebar:"DesktopDashboard_sidebar__Q1nkb","aside-container":"DesktopDashboard_aside-container__ECRyv",recent:"DesktopDashboard_recent__89DIu","empty-recent-purchases":"DesktopDashboard_empty-recent-purchases__prBqq",search:"DesktopDashboard_search__4up7F"},u=n(184),h=function(e){var t=e.theme,n=(0,s.$)().t,h=(0,c.Z)().drinks,p=(0,r.useContext)(i.Z),m=(0,a.Z)(p,1)[0],_=(0,r.useState)(JSON.parse(localStorage.getItem("metrics"))),f=(0,a.Z)(_,1)[0];return(0,u.jsxs)("div",{className:d.container,children:[(0,u.jsxs)("main",{children:[(0,u.jsx)("header",{children:(0,u.jsx)("h1",{className:d.title,children:n("dashboard")})}),(0,u.jsxs)("div",{className:d.content,children:[(0,u.jsx)(l.x_,{className:d.map,theme:t,drinks:h}),(0,u.jsx)(o.Zb,{className:d.heatmap,title:n("drink frequency"),children:(0,u.jsx)(l.ky,{data:f.d})}),(0,u.jsxs)("div",{className:d.stats,children:[(0,u.jsxs)(o.Zb,{className:d.budget,children:[(0,u.jsxs)("p",{children:[n("this is how much you\u2019ve spent on drinks so far"),":"]}),(0,u.jsxs)("h2",{className:d.bw,children:["$",f.ctc>=100?(f.ctc/100).toFixed(2):parseInt(f.ctc/100)]})]}),(0,u.jsxs)(o.Zb,{className:d.total,children:[(0,u.jsx)("h2",{className:d.bw,children:f.td}),(0,u.jsx)("p",{children:n("drinks this month",{count:f.td})})]})]}),(0,u.jsx)(o.Zb,{className:d.xy,children:(0,u.jsx)("h3",{style:{display:"grid",color:"var(--text-secondary)",fontSize:"3em",textAlign:"center"},children:n("coming soon")})})]})]}),(0,u.jsx)("aside",{className:d.sidebar,children:(0,u.jsxs)("div",{className:d["aside-container"],children:[(0,u.jsx)(o.Zb,{className:d.search,title:n("monthly budget"),children:(0,u.jsx)(l.si,{budget:m.profile.budget,spent:f.tc,theme:t})}),(0,u.jsxs)(o.Zb,{className:d.search,children:[(0,u.jsx)("h2",{children:n("search")}),(0,u.jsx)("span",{children:n("search your past uploads")}),(0,u.jsx)(o.wD,{data:h,Result:function(e){var t=e.item;return(0,u.jsx)(l.Hj,{data:t})}})]}),(0,u.jsxs)(o.Zb,{className:d.recent,title:n("recent purchases"),children:[h.slice(0,5).map((function(e){return(0,u.jsx)(l.Hj,{data:e},e.id)})),0===h.length&&(0,u.jsx)("div",{className:d["empty-recent-purchases"],children:n("no drinks recorded")})]})]})})]})},p=(0,r.memo)(h)}}]);
//# sourceMappingURL=647.21f68b16.chunk.js.map