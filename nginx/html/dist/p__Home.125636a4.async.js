(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[371],{72007:function(ce){ce.exports={container:"container___3CbIL","add-button":"add-button___2Rab9",listItem:"listItem___3CzOw",card:"card___3_21E",cardAvatar:"cardAvatar___329Wn"}},57719:function(){},72040:function(ce,k,e){"use strict";e.r(k),e.d(k,{default:function(){return Ue}});var C=e(38663),w=e(57719),$=e(13254),ye=e(20228),h=e(14781),z=e(6999),q=e(85061),I=e(22122),j=e(96156),K=e(28481),le=e(90484),t=e(67294),ue=e(94184),S=e.n(ue),me=e(11382),G=e(25378),ee=e(24308),B=e(65632),de=e(40308),H=e(92820),s=e(21584),o=e(96159),d=function(n,r){var f={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&r.indexOf(a)<0&&(f[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(n);i<a.length;i++)r.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(f[a[i]]=n[a[i]]);return f},c=function(r){var f=r.prefixCls,a=r.className,i=r.avatar,x=r.title,M=r.description,T=d(r,["prefixCls","className","avatar","title","description"]),Z=t.useContext(B.E_),O=Z.getPrefixCls,N=O("list",f),u=S()("".concat(N,"-item-meta"),a),U=t.createElement("div",{className:"".concat(N,"-item-meta-content")},x&&t.createElement("h4",{className:"".concat(N,"-item-meta-title")},x),M&&t.createElement("div",{className:"".concat(N,"-item-meta-description")},M));return t.createElement("div",(0,I.Z)({},T,{className:u}),i&&t.createElement("div",{className:"".concat(N,"-item-meta-avatar")},i),(x||M)&&U)},l=function(r){var f=r.prefixCls,a=r.children,i=r.actions,x=r.extra,M=r.className,T=r.colStyle,Z=d(r,["prefixCls","children","actions","extra","className","colStyle"]),O=t.useContext(m),N=O.grid,u=O.itemLayout,U=t.useContext(B.E_),E=U.getPrefixCls,ne=function(){var L;return t.Children.forEach(a,function(re){typeof re=="string"&&(L=!0)}),L&&t.Children.count(a)>1},Y=function(){return u==="vertical"?!!x:!ne()},D=E("list",f),J=i&&i.length>0&&t.createElement("ul",{className:"".concat(D,"-item-action"),key:"actions"},i.map(function(_,L){return t.createElement("li",{key:"".concat(D,"-item-action-").concat(L)},_,L!==i.length-1&&t.createElement("em",{className:"".concat(D,"-item-action-split")}))})),X=N?"div":"li",Q=t.createElement(X,(0,I.Z)({},Z,{className:S()("".concat(D,"-item"),(0,j.Z)({},"".concat(D,"-item-no-flex"),!Y()),M)}),u==="vertical"&&x?[t.createElement("div",{className:"".concat(D,"-item-main"),key:"content"},a,J),t.createElement("div",{className:"".concat(D,"-item-extra"),key:"extra"},x)]:[a,J,(0,o.Tm)(x,{key:"extra"})]);return N?t.createElement(s.Z,{flex:1,style:T},Q):Q};l.Meta=c;var y=l,p=function(n,r){var f={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&r.indexOf(a)<0&&(f[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,a=Object.getOwnPropertySymbols(n);i<a.length;i++)r.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(n,a[i])&&(f[a[i]]=n[a[i]]);return f},m=t.createContext({}),V=m.Consumer;function Ee(n){var r,f=n.pagination,a=f===void 0?!1:f,i=n.prefixCls,x=n.bordered,M=x===void 0?!1:x,T=n.split,Z=T===void 0?!0:T,O=n.className,N=n.children,u=n.itemLayout,U=n.loadMore,E=n.grid,ne=n.dataSource,Y=ne===void 0?[]:ne,D=n.size,J=n.header,X=n.footer,Q=n.loading,_=Q===void 0?!1:Q,L=n.rowKey,re=n.renderItem,Ze=n.locale,Ye=p(n,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),Ne=a&&(0,le.Z)(a)==="object"?a:{},Fe=t.useState(Ne.defaultCurrent||1),Ie=(0,K.Z)(Fe,2),Ge=Ie[0],He=Ie[1],Ve=t.useState(Ne.defaultPageSize||10),je=(0,K.Z)(Ve,2),Je=je[0],Xe=je[1],ve=t.useContext(B.E_),Qe=ve.getPrefixCls,_e=ve.renderEmpty,ke=ve.direction,qe={current:1,total:0},Se={},Oe=function(g){return function(A,R){He(A),Xe(R),a&&a[g]&&a[g](A,R)}},et=Oe("onChange"),tt=Oe("onShowSizeChange"),at=function(g,A){if(!re)return null;var R;return typeof L=="function"?R=L(g):L?R=g[L]:R=g.key,R||(R="list-item-".concat(A)),Se[A]=R,re(g,A)},nt=function(){return!!(U||a||X)},rt=function(g,A){return t.createElement("div",{className:"".concat(g,"-empty-text")},Ze&&Ze.emptyText||A("List"))},P=Qe("list",i),F=_;typeof F=="boolean"&&(F={spinning:F});var fe=F&&F.spinning,oe="";switch(D){case"large":oe="lg";break;case"small":oe="sm";break;default:break}var ot=S()(P,(r={},(0,j.Z)(r,"".concat(P,"-vertical"),u==="vertical"),(0,j.Z)(r,"".concat(P,"-").concat(oe),oe),(0,j.Z)(r,"".concat(P,"-split"),Z),(0,j.Z)(r,"".concat(P,"-bordered"),M),(0,j.Z)(r,"".concat(P,"-loading"),fe),(0,j.Z)(r,"".concat(P,"-grid"),!!E),(0,j.Z)(r,"".concat(P,"-something-after-last-item"),nt()),(0,j.Z)(r,"".concat(P,"-rtl"),ke==="rtl"),r),O),b=(0,I.Z)((0,I.Z)((0,I.Z)({},qe),{total:Y.length,current:Ge,pageSize:Je}),a||{}),be=Math.ceil(b.total/b.pageSize);b.current>be&&(b.current=be);var Le=a?t.createElement("div",{className:"".concat(P,"-pagination")},t.createElement(de.Z,(0,I.Z)({},b,{onChange:et,onShowSizeChange:tt}))):null,ge=(0,q.Z)(Y);a&&Y.length>(b.current-1)*b.pageSize&&(ge=(0,q.Z)(Y).splice((b.current-1)*b.pageSize,b.pageSize));var it=Object.keys(E||{}).some(function(v){return["xs","sm","md","lg","xl","xxl"].includes(v)}),Me=(0,G.Z)(it),ie=t.useMemo(function(){for(var v=0;v<ee.c4.length;v+=1){var g=ee.c4[v];if(Me[g])return g}},[Me]),st=t.useMemo(function(){if(!!E){var v=ie&&E[ie]?E[ie]:E.column;if(v)return{width:"".concat(100/v,"%"),maxWidth:"".concat(100/v,"%")}}},[E==null?void 0:E.column,ie]),he=fe&&t.createElement("div",{style:{minHeight:53}});if(ge.length>0){var Te=ge.map(function(v,g){return at(v,g)}),ct=t.Children.map(Te,function(v,g){return t.createElement("div",{key:Se[g],style:st},v)});he=E?t.createElement(H.Z,{gutter:E.gutter},ct):t.createElement("ul",{className:"".concat(P,"-items")},Te)}else!N&&!fe&&(he=rt(P,_e));var se=b.position||"bottom",lt=t.useMemo(function(){return{grid:E,itemLayout:u}},[JSON.stringify(E),u]);return t.createElement(m.Provider,{value:lt},t.createElement("div",(0,I.Z)({className:ot},Ye),(se==="top"||se==="both")&&Le,J&&t.createElement("div",{className:"".concat(P,"-header")},J),t.createElement(me.Z,F,he,N),X&&t.createElement("div",{className:"".concat(P,"-footer")},X),U||(se==="bottom"||se==="both")&&Le))}Ee.Item=y;var Ce=Ee,De=e(3182),Re=e(2824),ut=e(58024),Pe=e(39144),$e=e(94043),xe=e.n($e),ze=e(35551),We=e(48103),Ae=e(97175),pe={basename:"/"};window.routerBase&&(pe.basename=window.routerBase);var te={NODE_ENV:"production"}.__IS_SERVER?null:(0,Ae.lX)(pe),mt=function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return r||(te=createBrowserHistory(pe)),te},we=e(72007),ae=e.n(we),W=e(85893),Be=Pe.Z.Meta,Ke=function(){var r=te.location.pathname,f=(0,t.useState)([]),a=(0,Re.Z)(f,2),i=a[0],x=a[1],M=function(){var T=(0,De.Z)(xe().mark(function Z(){var O;return xe().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,(0,We.RB)();case 3:O=u.sent,O.data&&x(O.data),u.next=10;break;case 7:u.prev=7,u.t0=u.catch(0),console.error("Fetch Data failed ",u.t0);case 10:case"end":return u.stop()}},Z,null,[[0,7]])}));return function(){return T.apply(this,arguments)}}();return(0,t.useEffect)(function(){M()},[r]),(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(ze.ZP,{className:S()(ae().container),children:(0,W.jsx)(Ce,{dataSource:i,className:S()(ae().list),renderItem:function(Z){return(0,W.jsx)(Ce.Item,{className:S()(ae().listItem),children:(0,W.jsx)(Pe.Z,{hoverable:!0,className:S()(ae().card),cover:(0,W.jsx)("img",{alt:"{page.projectionName}",src:Z.avatar}),onClick:function(){return te.push("".concat(Z.pageType,"/").concat(Z.projectionName))},children:(0,W.jsx)(Be,{title:Z.title})})})}})})})},Ue=Ke},48103:function(ce,k,e){"use strict";e.d(k,{mC:function(){return q},rV:function(){return j},Vx:function(){return le},Ue:function(){return ue},wz:function(){return me},RB:function(){return ee},fx:function(){return de}});var C=e(8870),w=e(93224),$=e(3182),ye=e(94043),h=e.n(ye),z=e(21010);function q(s,o){return I.apply(this,arguments)}function I(){return I=(0,$.Z)(h().mark(function s(o,d){var c,l;return h().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return c=o.projectionName,l=(0,w.Z)(o,["projectionName"]),p.abrupt("return",(0,z.WY)("/api/v1/query/".concat(c,"/getItemList"),(0,C.Z)({method:"GET",params:(0,C.Z)({},l)},d||{})));case 2:case"end":return p.stop()}},s)})),I.apply(this,arguments)}function j(s,o){return K.apply(this,arguments)}function K(){return K=(0,$.Z)(h().mark(function s(o,d){var c,l,y;return h().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return c=o.projectionName,l=o.projectionId,y=(0,w.Z)(o,["projectionName","projectionId"]),m.abrupt("return",(0,z.WY)("/api/v1/query/".concat(c,"/item/").concat(l,"/getItem"),(0,C.Z)({method:"GET",params:(0,C.Z)({},y)},d||{})));case 2:case"end":return m.stop()}},s)})),K.apply(this,arguments)}function le(s,o,d){return t.apply(this,arguments)}function t(){return t=(0,$.Z)(h().mark(function s(o,d,c){var l,y,p;return h().wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return l=o.projectionName,y=o.projectionId,p=(0,w.Z)(o,["projectionName","projectionId"]),V.abrupt("return",(0,z.WY)("/api/v1/command/".concat(l,"/item/").concat(y,"/updateItem"),(0,C.Z)({method:"POST",headers:{"Content-Type":"application/json"},params:(0,C.Z)({},p),data:d},c||{})));case 2:case"end":return V.stop()}},s)})),t.apply(this,arguments)}function ue(s,o,d){return S.apply(this,arguments)}function S(){return S=(0,$.Z)(h().mark(function s(o,d,c){var l,y;return h().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return l=o.projectionName,y=(0,w.Z)(o,["projectionName"]),m.abrupt("return",(0,z.WY)("/api/v1/command/".concat(l,"/createItem"),(0,C.Z)({method:"PUT",headers:{"Content-Type":"application/json"},params:(0,C.Z)({},y),data:d},c||{})));case 2:case"end":return m.stop()}},s)})),S.apply(this,arguments)}function me(s,o){return G.apply(this,arguments)}function G(){return G=(0,$.Z)(h().mark(function s(o,d){var c,l,y;return h().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return c=o.projectionName,l=o.projectionId,y=(0,w.Z)(o,["projectionName","projectionId"]),m.abrupt("return",(0,z.WY)("/api/v1/command/".concat(c,"/item/").concat(l,"/deleteItem"),(0,C.Z)({method:"DELETE",params:(0,C.Z)({},y)},d||{})));case 2:case"end":return m.stop()}},s)})),G.apply(this,arguments)}function ee(s){return B.apply(this,arguments)}function B(){return B=(0,$.Z)(h().mark(function s(o){return h().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",(0,z.WY)("/api/v1/query/getPageList",(0,C.Z)({method:"GET"},o||{})));case 1:case"end":return c.stop()}},s)})),B.apply(this,arguments)}function de(s,o){return H.apply(this,arguments)}function H(){return H=(0,$.Z)(h().mark(function s(o,d){var c,l;return h().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return c=o.projectionName,l=(0,w.Z)(o,["projectionName"]),p.abrupt("return",(0,z.WY)("/api/v1/query/".concat(c,"/getPage"),(0,C.Z)({method:"GET",params:(0,C.Z)({},l)},d||{})));case 2:case"end":return p.stop()}},s)})),H.apply(this,arguments)}}}]);
