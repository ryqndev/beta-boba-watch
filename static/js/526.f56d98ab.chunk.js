"use strict";(self.webpackChunkboba_watch=self.webpackChunkboba_watch||[]).push([[526],{9268:function(e,n,t){t.d(n,{SJ:function(){return f},ul:function(){return m},df:function(){return k}});var i=t(8182),a=t(2791),r=t(1768),s=t(500),o=t(5026),c=t(2333),l="UserLocationButton_button__mgCvr",d="UserLocationButton_center__59pZY",u=t(184),h=function(e){var n=e.setPosition,t=(0,o.Z)(),h=(0,r.Sx)(),m=(0,a.useCallback)((function(){if(!(null!==t&&void 0!==t&&t.lat||null!==t&&void 0!==t&&t.lng))return null;n([t.lat,t.lng]),h.flyTo([t.lat,t.lng],13,{animate:!0,duration:1})}),[t,h,n]);return(0,a.useEffect)(m,[m]),(0,u.jsxs)(u.Fragment,{children:[(null===t||void 0===t?void 0:t.lat)&&(null===t||void 0===t?void 0:t.lng)&&(0,u.jsx)(s.c,{center:[t.lat,t.lng],radius:5,fill:!0,color:"#B64040",fillColor:"#B64040",fillOpacity:"1"}),(0,u.jsx)("button",{className:(0,i.Z)(l,d),onClick:m,children:(0,u.jsx)(c.Z,{})})]})},m=(0,a.memo)(h),f=function(e){var n=e.center,t=(0,r.Sx)();return(0,a.useEffect)((function(){t.flyTo(n,13,{animate:!0,duration:.5})}),[n,t]),(0,u.jsx)("div",{})},p=t(2840),_=t(5987),x=t(885),j=["location","id","address","date"],v=function(e){var n=(0,a.useState)([]),t=(0,x.Z)(n,2),i=t[0],r=t[1];return(0,a.useEffect)((function(){r(Object.values(e.reduce((function(e,n){var t=n.location,i=n.id,a=n.address,r=n.date;(0,_.Z)(n,j);if(null===a||void 0===a||!a.lat||null===a||void 0===a||!a.lng)return e;var s=Number(a.lat).toFixed(6),o=Number(a.lng).toFixed(6),c="".concat(s,",").concat(o).concat(t);return e.hasOwnProperty(c)?e[c].drinks.push({id:i,date:r}):e[c]={coordinates:[s,o],location:t,address:a,drinks:[{id:i,date:r}]},e}),{})))}),[e]),{locations:i}},b=t(1951),g="VisitedLocations_container__kuIJ6",k=function(e){var n=e.drinks,t=v(n).locations;return(0,u.jsx)(u.Fragment,{children:t.map((function(e){var n=e.coordinates,t=e.drinks,i=e.location;return(0,u.jsx)(s.c,{center:n,radius:10,fill:!0,weight:1,color:"#F68080",fillColor:"#F68080",fillOpacity:"0.5",children:(0,u.jsx)(p.G,{children:(0,u.jsxs)("div",{className:g,children:[(0,u.jsx)("h2",{children:i}),(0,u.jsxs)("p",{children:["Visited ",(0,u.jsx)("span",{children:t.length})," times"]}),(0,u.jsx)("p",{children:"Recent visits:"}),t.slice(0,5).map((function(e){var n=e.date;return(0,u.jsx)("div",{children:(0,b.Z)(new Date(n),"MMM d, yyyy h:mm a")},n)}))]})})},JSON.stringify(n)+i)}))})}},3798:function(e,n,t){function i(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n){var t=parseInt(e/100);return isNaN(t)?"---":t}var i=Number(e/100).toFixed(2);return isNaN(i)?"---":i}t.d(n,{K:function(){return i}})},5026:function(e,n,t){var i=t(1413),a=t(885),r=t(2791);n.Z=function(){var e=(0,r.useState)({}),n=(0,a.Z)(e,2),t=n[0],s=n[1],o=(0,r.useState)(null),c=(0,a.Z)(o,2),l=c[0],d=c[1],u=function(e){d(e.message)},h=function(e){var n=e.coords,t=e.timestamp;s({accuracy:n.accuracy,alt:n.altitude,altitudeAccuracy:n.altitudeAccuracy,heading:n.heading,lat:n.latitude,lng:n.longitude,timestamp:t})};return(0,r.useEffect)((function(){navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(h,u,{}):d("Geolocation is not supported")}),[]),(0,i.Z)((0,i.Z)({},t),{},{error:l})}},7426:function(e,n,t){var i=t(885),a=t(2791),r=t(5135),s=t(242),o=t(4674),c=t(4796);n.Z=function(e){var n=(0,a.useState)((0,c.Qe)()),t=(0,i.Z)(n,2),l=t[0],d=t[1],u=(0,a.useContext)(o.Z),h=(0,i.Z)(u,1)[0];return(0,a.useEffect)((function(){if(void 0===e||h.uid===e)return d(JSON.parse(localStorage.getItem("metrics")));d({}),r.Fs.collection("users/".concat(e,"/user")).doc("stats").get().then((function(e){d(e.data())})).catch(s.qQ)}),[e,h.uid]),l}},1835:function(e,n,t){t.d(n,{si:function(){return m},Hj:function(){return J},ky:function(){return oe},x_:function(){return he}});var i=t(2791),a=t(4258),r=t(7743),s=t(3168),o="BudgetPieChart_container__50hfA",c="BudgetPieChart_description__tlZXI",l="BudgetPieChart_chart__GNVD5",d="BudgetPieChart_full__y+pG5",u=t(184),h=function(e){var n=e.spent,t=void 0===n?0:n,i=e.budget,h=void 0===i?1:i,m=e.theme,f=(0,s.$)().t;return(0,u.jsxs)("div",{className:o,children:[(0,u.jsxs)("div",{className:c,children:[(0,u.jsxs)("p",{children:[f("monthly limit"),": $",h/100]}),(0,u.jsxs)("span",{children:["$",(t/100).toFixed(2)]}),(0,u.jsxs)("p",{children:[f("remaining"),": $",(h-t)/100]})]}),(0,u.jsx)("svg",{className:l,viewBox:"0 0 100 100",children:(0,u.jsx)(r.Z,{className:d,left:50,top:50,children:(0,u.jsx)(a.Z,{data:[{label:"spent",value:t},{label:"unspent",value:h-t}],pieSortValues:function(){return 1},pieValue:function(e){return e.value},fill:function(e){return"spent"===e.data.label?"#14e33a":"dark"!==m?"#d8d8d8":"#223242"},outerRadius:48,innerRadius:32,cornerRadius:2,padAngle:.1})})})]})},m=(0,i.memo)(h),f=t(1413),p=t(885),_=t(7595),x=t(5429),j=t(5861),v=t(7757),b=t.n(v),g=t(1502),k=t(3534),M=t.n(k),N=t(5613),Z="ExpandedDrinkDescription_container__0UdSo",D="ExpandedDrinkDescription_title__kx82G",P="ExpandedDrinkDescription_date__y6qQZ",y="ExpandedDrinkDescription_user-uploaded__iHuJM",S="ExpandedDrinkDescription_description__3WSpP",w="ExpandedDrinkDescription_preview__joAu8",A=function(e){var n=e.name,t=e.location,a=e.description,r=e.expanded,o=e.image,c=e.date,l=(0,s.$)().t,d=(0,i.useState)(!1),h=(0,p.Z)(d,2),m=h[0],f=h[1],_=new(M());return(0,i.useEffect)((function(){r&&o&&(0,j.Z)(b().mark((function e(){return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,(0,N.Vq)(o);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[o,r]),(0,u.jsxs)("div",{className:Z,children:[(0,u.jsxs)("p",{className:D,children:[n,(0,u.jsxs)("span",{children:[" @ ",t]})]}),m&&(0,u.jsx)("img",{src:m,className:y,alt:"user-upload"}),(0,u.jsx)("br",{}),(0,u.jsx)("div",{className:S,children:a&&""!==a?(0,u.jsx)(g.default,{id:w,view:{menu:!1,md:!1},readOnly:!0,renderHTML:function(e){return _.render(e)},canView:{menu:!1,md:!1,html:!1,fullScreen:!1,hideMenu:!1},value:a}):(0,u.jsx)("span",{children:"[no description]"})}),(0,u.jsx)("br",{}),(0,u.jsxs)("p",{className:P,children:[(0,u.jsx)("span",{children:l("on")})," ",c.toString()]})]})},C=t(3798),O=t(8182),T="DrinkPanel_container__o4BKt",E="DrinkPanel_basic-details__gsVq1",B="DrinkPanel_place__A014J",F="DrinkPanel_time__Ff-r3",V="DrinkPanel_price__wjUY0",L="DrinkPanel_name__BcCES",$="DrinkPanel_expand-icon__UoGXD",G="DrinkPanel_collapsed-info__i3DQ1",H="DrinkPanel_expanded__sAK1n",I=function(e){var n=e.data,t=(0,s.$)().t,a=(0,i.useState)(!1),r=(0,p.Z)(a,2),o=r[0],c=r[1],l=new Date(n.date);return(0,u.jsxs)("div",{className:T,children:[(0,u.jsxs)("div",{className:E,onClick:function(){return c((function(e){return!e}))},children:[(0,u.jsx)("p",{className:B,children:n.location}),(0,u.jsxs)("p",{className:V,children:[t("$"),(0,C.K)(n.price)]}),(0,u.jsx)("div",{className:$,children:o?(0,u.jsx)(_.Z,{}):(0,u.jsx)(x.Z,{})}),(0,u.jsx)("p",{className:L,children:n.name}),(0,u.jsx)("p",{className:F,children:l.toDateString().substr(4)})]}),(0,u.jsx)("div",{className:(0,O.Z)(G,o&&H),children:(0,u.jsx)(A,(0,f.Z)((0,f.Z)({},n),{},{expanded:o,date:l}))})]})},J=(0,i.memo)(I),q=t(3125),R=t(1323),U=t(4031),z=t(7524),K="PurchaseTimeHeatMap_container__nIz-O",Q="PurchaseTimeHeatMap_tick__tj3Gp",W="PurchaseTimeHeatMap_tick-label__4McGv",Y="PurchaseTimeHeatMap_tooltip__Dv50R",X=t(2506),ee=t(9766),ne=t(863),te=function(e){var n=e.bin,t=e.handleMouseOver,i=e.hideTooltip;return(0,u.jsx)("rect",{width:n.width,height:n.height,x:n.x,y:n.y,fill:n.color,fillOpacity:n.opacity,"data-bin":JSON.stringify({row:n.row,column:n.column,count:n.count}),onMouseOver:t,onMouseOut:i})},ie=(0,i.memo)(te),ae=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],re=["1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 AM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM","12 PM"],se=function(e){var n=e.data,t=(0,s.$)().t,i=(0,X.Z)(),a=i.tooltipData,o=i.tooltipLeft,c=i.tooltipTop,l=i.tooltipOpen,d=i.showTooltip,h=i.hideTooltip,m=(0,ee.Z)({detectBounds:!0,scroll:!0}),f=m.containerRef,p=m.TooltipInPortal,_=function(e){var n=(0,ne.Z)(e.target.ownerSVGElement,e);d({tooltipLeft:n.x,tooltipTop:n.y,tooltipData:JSON.parse(e.target.dataset.bin)})},x=0,j=n.map((function(e,n){return{bin:n+1,bins:e.map((function(e,n){return e>x&&(x=e),{count:e,bin:n}}))}}));return(0,u.jsxs)("svg",{ref:f,className:K,viewBox:"0 0 214 400",children:[(0,u.jsx)(R.Z,{scale:(0,z.Z)({domain:ae.map((function(e){return t(e)})),range:[24,209]}),top:14,tickLength:4,tickClassName:Q,tickStroke:"grey",stroke:"#aaa",tickLabelProps:function(){return{className:W,y:-7,textAnchor:"middle"}}}),(0,u.jsx)(U.Z,{scale:(0,z.Z)({domain:re.map((function(e){return t(e)})),range:[13,396]}),left:24,orientation:"left",tickLength:4,tickClassName:Q,tickStroke:"grey",stroke:"#aaa",numTicks:24,tickLabelProps:function(){return{className:W,transform:"translate(0, 2)",x:-22,textAnchor:"left"}}}),(0,u.jsx)(r.Z,{left:20,children:(0,u.jsx)(q.Z,{data:j,xScale:function(e){return 26.5*e+4},yScale:function(e){return 16*e+12},colorScale:function(e){return"rgba(246, 128, 128, ".concat(0===e?x>5?.01:.1:e/x,")")},binWidth:27.5,binHeight:17,children:function(e){return e.map((function(e){return e.map((function(e){return(0,u.jsx)(ie,{bin:e,handleMouseOver:_,hideTooltip:h},"heatmap-rect-".concat(e.row,"-").concat(e.column))}))}))}})}),l&&(0,u.jsx)(p,{top:c,left:o,children:(0,u.jsxs)("div",{className:Y,children:[(0,u.jsxs)("time",{children:[t(ae[a.column])," | ",t(re[a.row])]}),(0,u.jsxs)("p",{children:[(0,u.jsxs)("strong",{children:[a.count," "]}),t("drinks purchased",{count:a.count})]})]})},Math.random())]})},oe=(0,i.memo)(se),ce=t(2311),le=t(9268),de="VisitedMap_container__3Hbfc",ue=function(e){var n=e.className,t=e.theme,i=e.drinks;return(0,u.jsx)(ce.Z,{className:(0,O.Z)(n,de),scrollWheelZoom:!1,touchZoom:!0,dragging:!0,zoom:2.5,theme:t,children:function(e){return(0,u.jsx)(le.df,{drinks:i})}})},he=(0,i.memo)(ue)},1526:function(e,n,t){t.r(n),t.d(n,{default:function(){return M}});var i=t(885),a=t(2791),r=t(3168),s=t(8182),o=t(3798),c=t(1835),l=t(6433),d=t(4674),u=t(7426),h="MobileDashboard_scrollable__q8vzV",m="MobileDashboard_container__NOzhz",f="MobileDashboard_bw__fQVsM",p="MobileDashboard_title__0D3xs",_="MobileDashboard_budget__+7abi",x="MobileDashboard_limit__C8Umg",j="MobileDashboard_total__Wu85u",v="MobileDashboard_heatmap__yhbAF",b="MobileDashboard_daily-chart__q2scO",g=t(184),k=function(e){var n=e.theme,t=(0,r.$)().t,k=(0,u.Z)(),M=(0,a.useContext)(d.Z),N=(0,i.Z)(M,1)[0];return(0,g.jsx)("div",{className:h,children:(0,g.jsxs)("main",{className:m,children:[(0,g.jsx)("h4",{className:(0,s.Z)(f,p),children:t("dashboard")}),(0,g.jsx)(l.Zb,{id:"chart-holder",className:b,children:(0,g.jsx)(c.si,{budget:N.profile.budget,spent:k.tc,theme:n})}),(0,g.jsxs)(l.Zb,{className:_,children:[(0,g.jsxs)("p",{children:[t("this is how much you\u2019ve spent on drinks so far"),":"]}),(0,g.jsxs)("h2",{className:f,children:[t("$"),(0,o.K)(k.ctc,k.ctc/1e4>1)]})]}),(0,g.jsxs)(l.Zb,{className:x,style:{backgroundPositionY:2.7*(100-parseInt(k.td/N.profile.limit*100))},children:[(0,g.jsxs)("h3",{className:f,children:[parseInt(k.td/N.profile.limit*100),"%"]}),(0,g.jsx)("p",{children:t("to your max number of drinks this month")})]}),(0,g.jsxs)(l.Zb,{className:j,children:[(0,g.jsx)("h2",{className:f,children:k.td}),(0,g.jsx)("p",{children:t("drinks this month")})]}),(0,g.jsxs)(l.Zb,{className:v,children:[(0,g.jsx)("h2",{children:t("drink frequency")}),(0,g.jsx)(c.ky,{data:k.d})]})]})})},M=(0,a.memo)(k)}}]);
//# sourceMappingURL=526.f56d98ab.chunk.js.map