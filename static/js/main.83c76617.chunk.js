(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{100:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){},132:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},233:function(e,t,n){},234:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),c=n(39),a=n.n(c),i=(n(100),n(19)),s=n(4),l=n(7),u=n(3),d=n(2),m=n(8),j=n.n(m),b=n(15),p=n(55),O=n.n(p);var h={error:null,data:null,loading:!1};function f(e){var t=Object(r.useState)(h),n=Object(d.a)(t,2),o=n[0],c=n[1],a=function(e,t){var n=Object(r.useRef)(null);return function(){for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return new Promise((function(r,c){n.current&&clearTimeout(n.current),n.current=window.setTimeout(Object(b.a)(j.a.mark((function t(){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.apply(void 0,o);case 3:n=t.sent,r(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),c(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),t)}))}}(O.a,e.debounceDelay);function i(){return(i=Object(b.a)(j.a.mark((function t(n){var r,i,s,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=null,(i=Object(u.a)(Object(u.a)({baseURL:"http://localhost:5000",updateRequestInfo:function(e){return e}},e),n)).isFetchMore?c(Object(u.a)(Object(u.a)({},h),{},{data:o.data,loading:!0})):i.quietly||c(Object(u.a)(Object(u.a)({},h),{},{loading:!0})),s=i.debounced?a:O.a,t.prev=4,t.next=7,s(i);case 7:r=t.sent,console.log(r.headers),l=Object(u.a)(Object(u.a)({},h),{},{data:r.data}),void 0!==r.headers["x-total-count"]&&(l.total=Number.parseInt(r.headers["x-total-count"],10)),c(i.updateRequestInfo(l,o)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(4),c(i.updateRequestInfo(Object(u.a)(Object(u.a)({},h),{},{error:t.t0}),o));case 17:return e.onCompleted&&e.onCompleted(r),t.abrupt("return",r);case 19:case"end":return t.stop()}}),t,null,[[4,14]])})))).apply(this,arguments)}return[function(e){return i.apply(this,arguments)},o]}var x=n(1),v=function(e){var t=e.fetchMore,n=Object(r.useRef)();return Object(r.useEffect)((function(){var e=new IntersectionObserver((function(n){Object(d.a)(n,1)[0].isIntersecting&&(e.disconnect(),t())}),{root:null,rootMargin:"0px",threshold:1});return e.observe(n.current),function(){e.disconnect()}}),[]),Object(x.jsx)("div",{ref:n})},_=n(95),g=n(43),C=(n(122),["children","className","component","theme"]),N=function(e){var t=e.children,n=e.className,r=e.component,o=e.theme,c=Object(g.a)(e,C);return Object(x.jsx)(r,Object(u.a)(Object(u.a)({className:"ui-button ui-button--".concat(o," ").concat(n)},c),{},{children:t}))};N.defaultProps={component:"a",className:"",theme:"bordered-blue"};var k=N,y=(n(123),function(e){var t=e.promotion,n=e.onClickComments,r=e.onClickDelete;return Object(x.jsxs)("div",{className:"promotion-card",children:[Object(x.jsx)("img",{src:t.imageUrl,alt:t.title,className:"promotion-card__image"}),Object(x.jsxs)("div",{className:"promotion-card__info",children:[Object(x.jsx)("h1",{className:"promotion-card__title",children:t.title}),Object(x.jsxs)("span",{className:"promotion-card__price",children:["R$ ",t.price]}),Object(x.jsxs)("footer",{className:"promotion-card__footer",children:[t.comments.length>0&&Object(x.jsxs)("div",{className:"promotion-card__comment",children:[' "',t.comments[0].comment,'" ']}),Object(x.jsxs)("button",{className:"promotion-card__comments-count",onClick:n,children:[t.comments.length," "," ",t.comments.length>1?"Comentarios":"Comentario"," "]}),Object(x.jsx)(k,{component:"a",href:t.url,target:"_blank",rel:"noopener noreferrer",children:"Ir Para o Site"}),Object(x.jsx)(k,{component:i.b,to:"/edit/".concat(t.id),className:"promotion-card__edit-button",children:"Editar"})]}),Object(x.jsx)("button",{type:"button",className:"promotion-card__delete-button",onClick:r,children:Object(x.jsx)(_.a,{})})]})]})}),I=(n(128),document.getElementById("portal-root")),w=function(e){var t=e.children,n=e.isOpen,r=e.onClickClose;return n?a.a.createPortal(Object(x.jsx)("div",{className:"ui-modal__overlay",children:Object(x.jsxs)("div",{className:"ui-modal",children:[Object(x.jsx)("button",{type:"button",className:"ui-modal__close-button",onClick:r,children:" X "}),t]})}),I):null};n(129);var S=function(e){var t=e.comments,n=e.sendComment,o=Object(r.useMemo)((function(){return function(e){if(!e)return[];var t=[],n={};return e.forEach((function(e){e.parentId?(n[e.parentId]||(n[e.parentId]=[]),n[e.parentId].push(e)):t.push(e)})),function e(t){return t?t.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{children:e(n[t.id])})})):null}(t)}(t)}),[t]),c=Object(r.useState)(""),a=Object(d.a)(c,2),i=a[0],s=a[1],l=Object(r.useState)(null),m=Object(d.a)(l,2),j=m[0],b=m[1];if(!t)return Object(x.jsx)("div",{children:"Carregando..."});function p(e){return Object(x.jsxs)("li",{className:"promotion-modal-comments-tree__item",children:[Object(x.jsx)("img",{src:e.user.avatarUrl,alt:"foto de ".concat(e.user.name),className:"promotion-modal-comments-tree__item__avatar"}),Object(x.jsxs)("div",{className:"promotion-modal-comments-tree__item__info",children:[Object(x.jsxs)("span",{className:"promotion-modal-comments-tree__item__name",children:[" ",e.user.name]}),Object(x.jsxs)("p",{children:[" ",e.comment," "]}),Object(x.jsx)("button",{type:"button",className:"promotion-modal-comments-tree__answer-button",onClick:function(){s(""),b(j===e.id?null:e.id)},children:"Responder"}),j===e.id&&Object(x.jsxs)("div",{className:"promotion-modal-comments-tree__comment-box",children:[Object(x.jsx)("textarea",{value:i,onChange:function(e){return s(e.target.value)}}),Object(x.jsx)("button",{type:"button",className:"promotion-modal-comments-tree__send-button",onClick:function(){n(i,e.id),s(""),b(null)},children:"Enviar"})]}),e.children&&O(e.children)]})]})}function O(e){return Object(x.jsx)("ul",{className:"promotion-modal-comments-tree",children:e.map(p)})}return O(o)};S.defaultProps={sendComment:function(){}};var E=S,P=(n(130),function(e){var t=e.promotionId,n=e.onClickClose,o=Object(r.useState)(""),c=Object(d.a)(o,2),a=c[0],i=c[1],s=f({url:"/comments",params:{promotionId:t,_expand:"user"}}),l=Object(d.a)(s,2),u=l[0],m=l[1],p=f({url:"/comments",method:"POST"}),O=Object(d.a)(p,2),h=O[0],v=O[1];function _(){return(_=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,h({data:{userId:1,promotionId:t,comment:a}});case 4:i(""),u({quietly:!0}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(1);case 10:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function g(){return(g=Object(b.a)(j.a.mark((function e(n,r){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h({data:{userId:1,promotionId:t,comment:n,parentId:r}});case 2:u({quietly:!0});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){u()}),[]),Object(x.jsxs)(w,{isOpen:!0,onClickClose:n,children:[Object(x.jsxs)("form",{className:"promotion-modal__comment-form",onSubmit:function(e){return _.apply(this,arguments)},children:[Object(x.jsx)("textarea",{placeholder:"Comentar...",onChange:function(e){return i(e.target.value)},value:a,disabled:v.loading}),Object(x.jsx)("button",{type:"submit",disabled:v.loading,children:v.loading?"enviando...":"Enviar"})]}),Object(x.jsx)(E,{comments:m.data,sendComment:function(e,t){return g.apply(this,arguments)}})]})}),q=(n(131),function(e){var t=e.loading,n=e.error,o=e.promotions,c=e.refetch,a=Object(r.useState)(null),i=Object(d.a)(a,2),s=i[0],l=i[1],u=f({method:"DELETE"}),m=Object(d.a)(u,2),p=m[0],O=m[1];return n?Object(x.jsx)("div",{children:"Algo de errado n\xe3o est\xe1 certo..."}):null===o||O.loading?Object(x.jsx)("div",{children:"Carregando"}):0===o.lenght?Object(x.jsx)("div",{children:"Nenhum resultado encontrado"}):Object(x.jsxs)("div",{className:"promotion-list",children:[o.map((function(e){return Object(x.jsx)(y,{promotion:e,onClickComments:function(){return l(e.id)},onClickDelete:Object(b.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p({url:"/promotions/".concat(e.id)});case 2:c();case 3:case"end":return t.stop()}}),t)})))})})),t&&Object(x.jsx)("div",{children:"Carregando mais promo\xe7\xf5es..."}),s&&Object(x.jsx)(P,{promotionId:s,onClickClose:function(){return l(null)}})]})}),R=(n(132),{_embed:"comments",_order:"desc",_sort:"id",_limit:5}),D=function(){var e,t=Object(r.useState)(1),n=Object(d.a)(t,2),o=n[0],c=n[1],a=Object(r.useRef)(null),s=Object(r.useState)(""),m=Object(d.a)(s,2),j=m[0],b=m[1],p=f({debounceDelay:300,url:"/promotions",method:"get"}),O=Object(d.a)(p,2),h=O[0],_=O[1];return Object(r.useEffect)((function(){h({debounced:a.current,params:Object(u.a)(Object(u.a)({},R),{},{_page:1,title_like:j||void 0})}),a.current||(a.current=!0)}),[j]),Object(x.jsxs)("div",{classname:"promotion-search",children:[Object(x.jsxs)("header",{className:"promotion-search__header",children:[Object(x.jsx)("h1",{children:" Promo Show "}),Object(x.jsx)(k,{component:i.b,to:"/create",theme:"contained-green",children:"Nova promo\xe7\xe3o"})]}),Object(x.jsx)("input",{type:"search",className:"promotion-search__input",Placeholder:"buscar",value:j,onChange:function(e){return b(e.target.value)}}),Object(x.jsx)(q,{promotions:_.data,loading:_.loading,error:_.error,refetch:function(){h({params:R})}}),_.data&&!_.loading&&(null===(e=_.data)||void 0===e?void 0:e.length)<_.total&&Object(x.jsx)(v,{fetchMore:function(){var e=o+1;h({isFetchMore:!0,params:Object(u.a)(Object(u.a)({},R),{},{_page:e,title_like:j||void 0}),updateRequestInfo:function(e,t){return Object(u.a)(Object(u.a)({},e),{},{data:[].concat(Object(l.a)(t.data),Object(l.a)(e.data))})}}),c(e)}})]})},F=(n(133),function(e){var t=e.children;return Object(x.jsx)("div",{className:"ui-container",children:t})}),U=function(){return Object(x.jsx)(F,{children:Object(x.jsx)(D,{})})},M=n(32),T=(n(134),["name","id","label"]),L=function(e){var t=e.name,n=e.id,r=e.label,o=Object(g.a)(e,T),c=Object(M.c)(Object(u.a)({name:t,id:n},o)),a=Object(d.a)(c,2),i=a[0],s=a[1];return Object(x.jsxs)(x.Fragment,{children:[r&&Object(x.jsx)("label",{htmlFor:null!==n&&void 0!==n?n:t,className:"form-field__label",children:r}),Object(x.jsx)("input",Object(u.a)(Object(u.a)({},i),{},{name:t,id:null!==n&&void 0!==n?n:t,className:"form-field__input ".concat(s.error&&"form-field__input--has-error")})),s.error&&Object(x.jsx)("span",{className:"form-field__error-message",children:s.error})]})},B=n(25),V=B.b().shape({title:B.c().required("Campo Obrigatorio"),url:B.c().url("Url deve ser V\xe1lida").required("Campo Obrigatorio"),imageUrl:B.c().url("Url deve ser V\xe1lida").required("Campo Obrigatorio"),price:B.a().required("Campo Obrigatorio")}),A=(n(233),{title:"",url:"",imageUrl:"",price:0}),J=function(e){var t=e.id,n=Object(s.f)(),o=f({url:"/promotions/".concat(t),method:"get"}),c=Object(d.a)(o,2),a=c[0],i=c[1],l=f({url:t?"/promotions/".concat(t):"/promotions",method:t?"put":"post",onCompleted:function(e){e.error||n.push("/")}}),u=Object(d.a)(l,2),m=u[0],j=u[1];Object(r.useEffect)((function(){t&&a()}),[t]);var b=t?i.data:A;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Promo Show"}),Object(x.jsx)("h2",{children:"Nova Promo"}),b?Object(x.jsx)(M.b,{initialValues:b,onSubmit:function(e){m({data:e})},validationSchema:V,render:function(){return Object(x.jsxs)(M.a,{children:[j.loading&&Object(x.jsx)("span",{children:" Salvando Dados..."}),Object(x.jsx)("div",{className:"promotion-form__group",children:Object(x.jsx)(L,{name:"title",type:"text",label:"T\xedtulo"})}),Object(x.jsx)("div",{className:"promotion-form__group",children:Object(x.jsx)(L,{name:"url",type:"text",label:"link"})}),Object(x.jsx)("div",{className:"promotion-form__group",children:Object(x.jsx)(L,{name:"imageUrl",type:"text",label:"Imagem url"})}),Object(x.jsx)("div",{className:"promotion-form__group",children:Object(x.jsx)(L,{name:"price",type:"number",label:"Pre\xe7o"})}),Object(x.jsx)("div",{children:Object(x.jsx)(k,{component:"button",type:"submit",children:"salvar"})})]})}}):Object(x.jsx)("div",{children:"Carregando..."})]})},X=function(){var e=Object(s.g)().id;return Object(x.jsx)(F,{children:Object(x.jsx)(J,{id:e?Number.parseInt(e,10):null})})},$=function(){return Object(x.jsx)(i.a,{children:Object(x.jsxs)(s.c,{children:[Object(x.jsx)(s.a,{path:"/create",component:X}),Object(x.jsx)(s.a,{path:"/edit/:id",component:X}),Object(x.jsx)(s.a,{path:"/",component:U})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,235)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),c(e),a(e)}))};a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)($,{})}),document.getElementById("root")),z()}},[[234,1,2]]]);
//# sourceMappingURL=main.83c76617.chunk.js.map