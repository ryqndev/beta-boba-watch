"use strict";(self.webpackChunkboba_watch=self.webpackChunkboba_watch||[]).push([[952],{2495:function(e,n,t){t.d(n,{Fy:function(){return o.Z},M7:function(){return a.Z},tx:function(){return r.Z}});t(5691);var o=t(9312),a=t(1748),r=t(3568);t(5026),t(2791),t(6831),t(7426),t(8228)},1748:function(e,n,t){var o=t(885),a=t(2791);n.Z=function(){var e=(0,a.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1],c=(0,a.useState)([]),s=(0,o.Z)(c,2),i=s[0],u=s[1],l=(0,a.useCallback)((function(){r(JSON.parse(localStorage.getItem("drinkids")))}),[]);return(0,a.useEffect)(l,[l]),(0,a.useEffect)((function(){u(t.map((function(e){return JSON.parse(localStorage.getItem(e))})))}),[t]),{drinkids:t,drinks:i,update:l}}},3568:function(e,n,t){var o=t(2791);n.Z=function(){var e=(0,o.useCallback)((function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o="https://us-central1-boba-watch-firebase.cloudfunctions.net/locator";fetch(o+"?"+new URLSearchParams(e).toString()).then((function(e){return e.json()})).then(n).catch(t)}),[]),n=(0,o.useCallback)((function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o="https://us-central1-boba-watch-firebase.cloudfunctions.net/nearbyLocations";fetch(o+"?"+new URLSearchParams(e).toString()).then((function(e){return e.json()})).then(n).catch(t)}),[]);return{getLocationsNearby:e,getLocationsByText:n}}},5026:function(e,n,t){var o=t(1413),a=t(885),r=t(2791);n.Z=function(){var e=(0,r.useState)({}),n=(0,a.Z)(e,2),t=n[0],c=n[1],s=(0,r.useState)(null),i=(0,a.Z)(s,2),u=i[0],l=i[1],f=function(e){l(e.message)},d=function(e){var n=e.coords,t=e.timestamp;c({accuracy:n.accuracy,alt:n.altitude,altitudeAccuracy:n.altitudeAccuracy,heading:n.heading,lat:n.latitude,lng:n.longitude,timestamp:t})};return(0,r.useEffect)((function(){navigator&&navigator.geolocation?navigator.geolocation.getCurrentPosition(d,f,{}):l("Geolocation is not supported")}),[]),(0,o.Z)((0,o.Z)({},t),{},{error:u})}},7426:function(e,n,t){var o=t(885),a=t(2791),r=t(5135),c=t(242),s=t(4674),i=t(4796);n.Z=function(e){var n=(0,a.useState)((0,i.Qe)()),t=(0,o.Z)(n,2),u=t[0],l=t[1],f=(0,a.useContext)(s.Z),d=(0,o.Z)(f,1)[0];return(0,a.useEffect)((function(){if(void 0===e||d.uid===e)return l(JSON.parse(localStorage.getItem("metrics")));l({}),r.Fs.collection("users/".concat(e,"/user")).doc("stats").get().then((function(e){l(e.data())})).catch(c.qQ)}),[e,d.uid]),u}},952:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var o=t(4942),a=t(1413),r=t(885),c=t(2791),s=t(3168),i=t(8182),u=t(6433),l=t(7579),f="DesktopLocator_container__e1o82",d="DesktopLocator_title__h-uLK",p="DesktopLocator_map__IAtGT",h="DesktopLocator_details__LsvIw",m="DesktopLocator_filters__dguWV",v="DesktopLocator_selected__BpB6Z",g="DesktopLocator_toggle__nUSiw",x="DesktopLocator_list-holder__+SOqQ",_="DesktopLocator_list__ccAnU",b=t(184),j=function(e){var n=e.theme,t=(0,s.$)().t,j=(0,c.useState)(null),Z=(0,r.Z)(j,2),N=Z[0],k=Z[1],S=(0,c.useState)(null),y=(0,r.Z)(S,2),C=y[0],L=y[1],w=(0,c.useState)(null),D=(0,r.Z)(w,2),E=D[0],O=D[1],R=(0,c.useState)({openNow:!1,coffee:!1}),B=(0,r.Z)(R,2),I=B[0],A=B[1],F=function(e,n){A((function(t){return(0,a.Z)((0,a.Z)({},t),{},(0,o.Z)({},e,void 0!==n?n:!t[e]))}))};return(0,b.jsxs)("main",{className:f,children:[(0,b.jsx)("header",{children:(0,b.jsx)("h1",{className:d,children:t("boba locator")})}),(0,b.jsx)(u.D5,{className:p,zoom:12,center:E,setCenter:O,theme:n,children:function(e){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l.rD,{position:e,setStores:k,filters:I}),N&&N.map((function(e){return(0,b.jsx)(l.bb,{data:e,setSelected:L,setCenter:O},e.venue.id)}))]})}}),(0,b.jsxs)("div",{className:h,children:[(0,b.jsxs)(u.Zb,{className:m,title:t("locations"),children:[(0,b.jsx)("button",{className:(0,i.Z)(I.openNow&&v),onClick:function(){F("openNow")},children:t("open now")}),(0,b.jsxs)("div",{className:g,children:[(0,b.jsx)("button",{className:(0,i.Z)(!I.coffee&&v),onClick:function(){return F("coffee",!1)},children:t("boba")}),(0,b.jsx)("button",{className:(0,i.Z)(I.coffee&&v),onClick:function(){return F("coffee",!0)},children:t("coffee")})]})]}),(0,b.jsx)("div",{className:x,children:(0,b.jsxs)("div",{className:_,children:[!N&&(0,b.jsx)(l.aT,{}),N&&0===N.length&&(0,b.jsx)(l.hR,{}),N&&N.map((function(e){return(0,b.jsx)(l.NB,{data:e,selected:C,setCenter:O},e.venue.id)}))]})})]})]})},Z=(0,c.memo)(j)},7579:function(e,n,t){t.d(n,{hR:function(){return p},NB:function(){return v},aT:function(){return m},rD:function(){return Z},bb:function(){return L}});var o=t(2791),a=t(3168),r=t(6433),c="Listing_container__lr9Zl",s="Listing_center__wH56q",i="Listing_distance__Sifwb",u="Listing_address__5MjCZ",l=t(184),f=function(e){var n,t=e.data,f=e.selected,d=e.setCenter,p=(0,a.$)().t,h=t.venue.id,m=(0,o.useRef)(null);return(0,o.useEffect)((function(){f===h&&m.current.scrollIntoView({behavior:"smooth"})}),[f,h]),(0,l.jsxs)(r.Zb,{className:c,forwardedref:m,children:[(0,l.jsx)("h3",{children:t.venue.name}),(0,l.jsxs)("p",{className:i,children:[(0,l.jsx)("span",{children:(n=t.venue.location.distance,n>1e3?(n/1e3).toFixed(2)+" "+p("km"):n+" "+p("meters"))})," ",p("from search pin")]}),(0,l.jsx)("p",{className:u,children:t.venue.location.formattedAddress.join(", ")}),(0,l.jsx)("span",{className:s,onClick:function(){d([t.venue.location.lat,t.venue.location.lng])},children:p("center on map")})]})},d=(0,o.memo)(f),p=function(){return(0,l.jsxs)(r.Zb,{className:c,children:[(0,l.jsx)("h3",{children:"no places nearby :("}),(0,l.jsx)("p",{className:i,children:"We can't seem to find any boba places near you. Try searching a different part of the map."})]})},h=function(){return(0,l.jsxs)(r.Zb,{className:c,children:[(0,l.jsx)("h3",{children:"Loading...."}),(0,l.jsxs)("p",{className:i,children:["Trying to find places near you. If this is taking too long, check your internet and try again.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Make sure you have your location enabled otherwise you will need to manually search"]})]})},m=(0,o.memo)(h),v=d,g=t(1768),x=t(8182),_=t(2495),b="SearchAreaButton_button__PpKcD",j=function(e){var n=e.className,t=e.position,r=e.setStores,c=e.filters,s=(0,a.$)().t,i=(0,g.Sx)(),u=(0,_.tx)().getLocationsNearby,f=(0,o.useCallback)((function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"map";if("user"===n)e={lat:t[0],lng:t[1]};else e=i.getCenter();var o={lat:e.lat,lng:e.lng,open:c.openNow?"true":"false",coffee:c.coffee?"true":"false"};r(null),u(o,(function(e){r(e.response.groups[0].items)}),(function(e){console.error("ERROR:",e),r([])}))}),[i,t,r,c,u]);return(0,o.useEffect)((function(){t&&f("user")}),[t,f]),(0,l.jsx)("button",{className:(0,x.Z)(b,n),onClick:f,children:s("search this area")})},Z=(0,o.memo)(j),N=t(500),k=t(2840),S=t(3504),y="StoreMarker_popup__ylxB1",C=function(e){var n=e.data,t=e.setCenter,o=e.setSelected,r=(0,a.$)().t,c=n.venue.location;return(0,l.jsx)(N.c,{center:[c.lat,c.lng],radius:10,fill:!0,weight:1,color:"#F68080",fillColor:"#F68080",fillOpacity:"0.5",eventHandlers:{click:function(){t([c.lat,c.lng]),o(n.venue.id)}},children:(0,l.jsx)(k.G,{children:(0,l.jsxs)("div",{className:y,children:[(0,l.jsx)("h3",{children:n.venue.name}),(0,l.jsx)("span",{children:n.venue.location.address}),(0,l.jsx)(S.rU,{to:"/add",state:{address:n.venue.location,location:n.venue.name},children:r("add drink for this location")})]})})})},L=(0,o.memo)(C)},2840:function(e,n,t){t.d(n,{G:function(){return c}});var o=t(203),a=t(8559),r=t(2791),c=(0,o.SO)((function(e,n){return{instance:new a.Popup(e,n.overlayContainer),context:n}}),(function(e,n,t,o){var a=t.onClose,c=t.onOpen,s=t.position;(0,r.useEffect)((function(){var t=e.instance;function r(e){e.popup===t&&(t.update(),o(!0),null==c||c())}function i(e){e.popup===t&&(o(!1),null==a||a())}return n.map.on({popupopen:r,popupclose:i}),null==n.overlayContainer?(null!=s&&t.setLatLng(s),t.openOn(n.map)):n.overlayContainer.bindPopup(t),function(){n.map.off({popupopen:r,popupclose:i}),n.map.removeLayer(t)}}),[e,n,o,a,c,s])}))},1768:function(e,n,t){t.d(n,{Sx:function(){return a}});var o=t(4666);t(2791);function a(){return(0,o.mE)().map}}}]);
//# sourceMappingURL=952.98090b01.chunk.js.map