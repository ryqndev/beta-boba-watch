(this["webpackJsonpboba-watch"]=this["webpackJsonpboba-watch"]||[]).push([[8],{302:function(e,t,n){"use strict";var c=n(8),a=n(0);t.a=function(){var e=Object(a.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)([]),r=Object(c.a)(s,2),i=r[0],l=r[1],u=Object(a.useCallback)((function(){o(JSON.parse(localStorage.getItem("drinkids")))}),[]);return Object(a.useEffect)(u,[u]),Object(a.useEffect)((function(){l(n.map((function(e){return JSON.parse(localStorage.getItem(e))})))}),[n]),{drinkids:n,drinks:i,update:u}}},303:function(e,t,n){"use strict";var c=n(0);t.a=function(){return{getLocationsNearby:Object(c.useCallback)((function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},c="https://us-central1-boba-watch-firebase.cloudfunctions.net/locator";fetch(c+"?"+new URLSearchParams(e).toString()).then((function(e){return e.json()})).then(t).catch(n)}),[]),getLocationsByText:Object(c.useCallback)((function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},c="https://us-central1-boba-watch-firebase.cloudfunctions.net/nearbyLocations";fetch(c+"?"+new URLSearchParams(e).toString()).then((function(e){return e.json()})).then(t).catch(n)}),[])}}},304:function(e,t,n){"use strict";var c=n(8),a=n(0),o=n(13),s=n(40),r=n(27),i=n(73);t.a=function(e){var t=Object(a.useState)(Object(i.c)()),n=Object(c.a)(t,2),l=n[0],u=n[1],j=Object(a.useContext)(r.a),b=Object(c.a)(j,1)[0];return Object(a.useEffect)((function(){if(void 0===e||b.uid===e)return u(JSON.parse(localStorage.getItem("metrics")));u({}),o.b.collection("users/".concat(e,"/user")).doc("stats").get().then((function(e){u(e.data())})).catch(s.a)}),[e,b.uid]),l}},312:function(e,t,n){"use strict";n.d(t,"a",(function(){return c.a})),n.d(t,"b",(function(){return a.a})),n.d(t,"c",(function(){return o.a}));n(107);var c=n(71),a=n(302),o=n(303);n(105),n(8),n(0),n(109),n(304),n(108)},337:function(e,t,n){e.exports={container:"Listing_container__15GQ1",center:"Listing_center__17arw",distance:"Listing_distance__3MU9m",address:"Listing_address__3UQFM"}},432:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(296),a=n(56),o=n(0),s=Object(c.a)((function(e,t){return{instance:new a.Popup(e,t.overlayContainer),context:t}}),(function(e,t,n,c){var a=n.onClose,s=n.onOpen,r=n.position;Object(o.useEffect)((function(){var n=e.instance;function o(e){e.popup===n&&(n.update(),c(!0),null==s||s())}function i(e){e.popup===n&&(c(!1),null==a||a())}return t.map.on({popupopen:o,popupclose:i}),null==t.overlayContainer?(null!=r&&n.setLatLng(r),n.openOn(t.map)):t.overlayContainer.bindPopup(n),function(){t.map.off({popupopen:o,popupclose:i}),t.map.removeLayer(n)}}),[e,t,c,a,s,r])}))},455:function(e,t,n){e.exports={button:"SearchAreaButton_button__2rtPN"}},456:function(e,t,n){e.exports={popup:"StoreMarker_popup__wTD9d"}},457:function(e,t,n){e.exports={container:"DesktopLocator_container__23JrQ",title:"DesktopLocator_title__27VDe",map:"DesktopLocator_map__3pFsp",details:"DesktopLocator_details__3AOIX",filters:"DesktopLocator_filters__tRQLI",selected:"DesktopLocator_selected__1kX3a",toggle:"DesktopLocator_toggle__BdWR4","list-holder":"DesktopLocator_list-holder__1FjGt",list:"DesktopLocator_list__200Se"}},458:function(e,t,n){e.exports={container:"Filter_container__3NBKK"}},459:function(e,t,n){"use strict";var c=n(45),a=n(47);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),s=(0,c(n(46)).default)(o.createElement("path",{d:"M3 18c0 .55.45 1 1 1h5v-2H4c-.55 0-1 .45-1 1zM3 6c0 .55.45 1 1 1h9V5H4c-.55 0-1 .45-1 1zm10 14v-1h7c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1zM7 10v1H4c-.55 0-1 .45-1 1s.45 1 1 1h3v1c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1zm14 2c0-.55-.45-1-1-1h-9v2h9c.55 0 1-.45 1-1zm-5-3c.55 0 1-.45 1-1V7h3c.55 0 1-.45 1-1s-.45-1-1-1h-3V4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1z"}),"TuneRounded");t.default=s},460:function(e,t,n){e.exports={container:"MobileLocator_container__3rr6S",map:"MobileLocator_map__2__z_","search-area--btn":"MobileLocator_search-area--btn__EwX6_"}},492:function(e,t,n){"use strict";n.r(t);var c=n(71),a=n(65),o=n(9),s=n(8),r=n(0),i=n(19),l=n(49),u=n(337),j=n.n(u),b=n(2),d=function(e){var t,n=e.data,c=e.selected,a=e.setCenter,o=n.venue.id,s=Object(r.useRef)(null);return Object(r.useEffect)((function(){c===o&&s.current.scrollIntoView({behavior:"smooth"})}),[c,o]),Object(b.jsxs)(l.a,{className:j.a.container,forwardedref:s,children:[Object(b.jsx)("h3",{children:n.venue.name}),Object(b.jsxs)("p",{className:j.a.distance,children:[Object(b.jsx)("span",{children:(t=n.venue.location.distance,t>1e3?(t/1e3).toFixed(2)+" km":t+" meters")})," from search pin"]}),Object(b.jsx)("p",{className:j.a.address,children:n.venue.location.formattedAddress.join(", ")}),Object(b.jsx)("span",{className:j.a.center,onClick:function(){a([n.venue.location.lat,n.venue.location.lng])},children:"CENTER ON MAP"})]})},f=Object(r.memo)(d),O=function(){return Object(b.jsxs)(l.a,{className:j.a.container,children:[Object(b.jsx)("h3",{children:"no places nearby :("}),Object(b.jsx)("p",{className:j.a.distance,children:"We can't seem to find any boba places near you. Try searching a different part of the map."})]})},p=function(){return Object(b.jsxs)(l.a,{className:j.a.container,children:[Object(b.jsx)("h3",{children:"Loading...."}),Object(b.jsxs)("p",{className:j.a.distance,children:["Trying to find places near you. If this is taking too long, check your internet and try again.",Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),"Make sure you have your location enabled otherwise you will need to manually search"]})]})},h=Object(r.memo)(p),m=f,v=n(293),_=n(312),x=n(455),g=n.n(x),N=function(e){var t=e.className,n=e.position,c=e.setStores,a=e.filters,o=Object(v.a)(),s=Object(_.c)().getLocationsNearby,l=Object(r.useCallback)((function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"map";switch(t){case"user":e={lat:n[0],lng:n[1]};break;case"map":default:e=o.getCenter()}var r={lat:e.lat,lng:e.lng,open:a.openNow?"true":"false",coffee:a.coffee?"true":"false"};c(null),s(r,(function(e){c(e.response.groups[0].items)}),(function(e){console.error("ERROR:",e),c([])}))}),[o,n,c,a,s]);return Object(r.useEffect)((function(){n&&l("user")}),[n,l]),Object(b.jsx)("button",{className:Object(i.a)(g.a.button,t),onClick:l,children:"Search this area"})},S=Object(r.memo)(N),k=n(300),L=n(432),C=n(37),w=n(456),y=n.n(w),E=function(e){var t=e.data,n=e.setCenter,c=e.setSelected,a=t.venue.location;return Object(b.jsx)(k.a,{center:[a.lat,a.lng],radius:10,fill:!0,weight:1,color:"#F68080",fillColor:"#F68080",fillOpacity:"0.5",eventHandlers:{click:function(){n([a.lat,a.lng]),c(t.venue.id)}},children:Object(b.jsx)(L.a,{children:Object(b.jsxs)("div",{className:y.a.popup,children:[Object(b.jsx)("h3",{children:t.venue.name}),Object(b.jsx)("span",{children:t.venue.location.address}),Object(b.jsx)(C.b,{to:"/add",state:{address:t.venue.location,location:t.venue.name},children:"Add drink for this location"})]})})})},F=Object(r.memo)(E),M=n(457),D=n.n(M),z=function(e){var t=e.theme,n=Object(r.useState)(null),c=Object(s.a)(n,2),u=c[0],j=c[1],d=Object(r.useState)(null),f=Object(s.a)(d,2),p=f[0],v=f[1],_=Object(r.useState)(null),x=Object(s.a)(_,2),g=x[0],N=x[1],k=Object(r.useState)({openNow:!1,coffee:!1}),L=Object(s.a)(k,2),C=L[0],w=L[1],y=function(e,t){w((function(n){return Object(o.a)(Object(o.a)({},n),{},Object(a.a)({},e,void 0!==t?t:!n[e]))}))};return Object(b.jsxs)("main",{className:D.a.container,children:[Object(b.jsx)("header",{children:Object(b.jsx)("h1",{className:D.a.title,children:"Boba Locator"})}),Object(b.jsx)(l.d,{className:D.a.map,zoom:12,center:g,setCenter:N,theme:t,children:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(S,{position:e,setStores:j,filters:C}),u&&u.map((function(e){return Object(b.jsx)(F,{data:e,setSelected:v,setCenter:N},e.venue.id)}))]})}}),Object(b.jsxs)("div",{className:D.a.details,children:[Object(b.jsxs)(l.a,{className:D.a.filters,title:"locations",children:[Object(b.jsx)("button",{className:Object(i.a)(C.openNow&&D.a.selected),onClick:function(){y("openNow")},children:"OPEN NOW"}),Object(b.jsxs)("div",{className:D.a.toggle,children:[Object(b.jsx)("button",{className:Object(i.a)(!C.coffee&&D.a.selected),onClick:function(){return y("coffee",!1)},children:"BOBA"}),Object(b.jsx)("button",{className:Object(i.a)(C.coffee&&D.a.selected),onClick:function(){return y("coffee",!0)},children:"COFFEE"})]})]}),Object(b.jsx)("div",{className:D.a["list-holder"],children:Object(b.jsxs)("div",{className:D.a.list,children:[!u&&Object(b.jsx)(h,{}),u&&0===u.length&&Object(b.jsx)(O,{}),u&&u.map((function(e){return Object(b.jsx)(m,{data:e,selected:p,setCenter:N},e.venue.id)}))]})})]})]})},R=Object(r.memo)(z),B=n(459),P=n.n(B),I=n(458),A=n.n(I),J=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("button",{className:A.a.container,children:[Object(b.jsx)(P.a,{}),Object(b.jsx)(l.f,{open:n,setOpen:c,children:"Filter options"})]})},T=Object(r.memo)(J),V=n(460),H=n.n(V),Q=function(e){var t=e.theme,n=Object(r.useState)(null),c=Object(s.a)(n,2),a=c[0],o=c[1],i=Object(r.useState)(null),u=Object(s.a)(i,2),j=(u[0],u[1]),d=Object(r.useState)(null),f=Object(s.a)(d,2),O=f[0],p=f[1],h=Object(r.useState)({openNow:!1,coffee:!1}),m=Object(s.a)(h,2),v=m[0];m[1];return Object(b.jsx)("div",{className:H.a.container,children:Object(b.jsx)(l.d,{className:H.a.map,zoom:12,center:O,setCenter:p,theme:t,zoomControl:!1,hasCenterButton:!1,children:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(T,{}),Object(b.jsx)(S,{className:H.a["search-area--btn"],position:e,setStores:o,filters:v}),a&&a.map((function(e){return Object(b.jsx)(F,{data:e,setSelected:j,setCenter:p},e.venue.id)}))]})}})})},U=Object(r.memo)(Q),W=function(e){var t=e.theme;return"phone"===Object(c.a)()?Object(b.jsx)(U,{theme:t}):Object(b.jsx)(R,{theme:t})};t.default=W}}]);
//# sourceMappingURL=8.fd1b4bf6.chunk.js.map