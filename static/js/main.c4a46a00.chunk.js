(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,a,t){e.exports=t.p+"static/media/admin.daf59bea.jpg"},47:function(e,a,t){e.exports=t(80)},78:function(e,a,t){},80:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(44),r=t.n(c),m=t(21),s=t(6),i=t(46),o=t(15),d=t(7),u=t(37),f=t(19),E=function(e){var a=l.a.useState(),n=Object(s.a)(a,2),c=n[0],r=n[1],i=l.a.useState(1),o=Object(s.a)(i,2),d=o[0],u=o[1],f=l.a.useState(0),E=Object(s.a)(f,2),p=E[0],N=E[1],v=l.a.useRef(),b=l.a.useReducer(function(e,a){switch(a.type){case"addComment":return N(p+1),[].concat(Object(m.a)(e),[(t=a.id,n=a.cmnt,l=a.postId,{id:t,cmnt:n,postId:l})]);case"deleteComment":if(a.postId===a.pstId)return N(p-1),e.filter(function(e){return e.id!==a.idCmnt})}var t,n,l},[]),y=Object(s.a)(b,2),g=y[0],h=y[1];function C(e){var a=document.querySelector(".testComment"+e);c?(a.style.display="none",r(!1)):c||(a.style.display="block",r(!0))}return l.a.useEffect(function(){u(d+1),v.current.value=""},[g]),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"engagement"},l.a.createElement("label",{className:"like"},l.a.createElement("i",{className:"fa-solid fa-thumbs-up"})," 282"),l.a.createElement("label",{className:"comment float-end",onClick:function(){return C(e.id)}}," ",p," Comments")),l.a.createElement("div",{className:"engagementButton",onClick:function(){return C(e.id)}},l.a.createElement("div",{className:"commentBtn"},l.a.createElement("i",{className:"fa-solid fa-comment"}),"Comment")),l.a.createElement("div",{className:"postComment testComment"+e.id},l.a.createElement("div",{className:"input-group input-groupEdit mb-3"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},l.a.createElement("img",{alt:"",src:t(25)})),l.a.createElement("input",{ref:v,type:"text",className:"form-control myComment"+e.id,placeholder:"Your Comment","aria-label":"Username","aria-describedby":"basic-addon1"}),l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},l.a.createElement("label",{htmlFor:"saveComment"+e.id,className:"float-end editLabel"},l.a.createElement("i",{className:"fa-solid fa-floppy-disk fs-5 mx-2"})),l.a.createElement("input",{type:"button",id:"saveComment"+e.id,onClick:function(){return h({type:"addComment",id:d,cmnt:document.querySelector(".myComment"+e.id).value,postId:e.id})},hidden:!0}))),l.a.createElement("div",{className:"theComments-container"},g.map(function(a,n){if(e.id===a.postId)return l.a.createElement("div",{key:n,className:"theComments"},l.a.createElement("img",{alt:"",src:t(25)}),l.a.createElement("div",{className:"comments_container"},l.a.createElement("div",{className:"commentName"},"salaheddine naji"),l.a.createElement("div",{className:"comments"},l.a.createElement("label",null),a.cmnt),l.a.createElement("div",{className:"remove_comment"},l.a.createElement("label",{htmlFor:"deleteComment"+e.id+a.id},"x")),l.a.createElement("input",{type:"button",id:"deleteComment"+e.id+a.id,onClick:function(){return h({type:"deleteComment",idCmnt:a.id,postId:a.postId,pstId:e.id})},hidden:!0})))}))))};var p=function e(){var a=0,n=l.a.useRef(),c=l.a.useRef(),r=l.a.useState(!1),p=Object(s.a)(r,2),N=p[0],v=p[1],b=function(){return v(!1)};window.onresize=function(){window.innerWidth>=991?(n.current.style.left="0px",c.current.style.left="50%",c.current.style.position="absolute"):window.innerWidth<=991&&(n.current.style.left="-60%",c.current.style.left="50%",c.current.style.position="absolute")};var y=l.a.useState(""),g=Object(s.a)(y,2),h=g[0],C=g[1],k=l.a.useRef(),x=l.a.useState(0),S=Object(s.a)(x,2),j=S[0],w=S[1],O=l.a.useState(),I=Object(s.a)(O,2),F=I[0],T=I[1],B=l.a.useState([]),L=Object(s.a)(B,2),H=L[0],R=L[1],M=l.a.useState(!1),P=Object(s.a)(M,2),_=P[0],A=P[1],U=l.a.useState(!1),q=Object(s.a)(U,2),W=q[0],D=q[1],Y=l.a.useState(),J=Object(s.a)(Y,2),z=J[0],G=J[1],K=l.a.useState(),Q=Object(s.a)(K,2),V=Q[0],X=Q[1],Z=l.a.useState(),$=Object(s.a)(Z,2),ee=$[0],ae=$[1],te=l.a.useState(),ne=Object(s.a)(te,2),le=ne[0],ce=ne[1],re=l.a.useState(),me=Object(s.a)(re,2),se=me[0],ie=me[1],oe=l.a.useState(),de=Object(s.a)(oe,2),ue=de[0],fe=de[1],Ee=l.a.useState(),pe=Object(s.a)(Ee,2),Ne=pe[0],ve=pe[1],be=l.a.useState(!1),ye=Object(s.a)(be,2),ge=ye[0],he=ye[1],Ce=l.a.useRef(),ke=l.a.useReducer(function(e,a){if("add"===a.type)R(function(e){return[].concat(Object(m.a)(e),[(t=a.id,n=a.desc,l=a.img,c=a.iframe,{id:t,desc:n,img:l,iframe:c})]);var t,n,l,c}),C(""),fe("<iframe hidden></iframe>"),X("posted successfully"),A(!0);else if("remove"===a.type){fe("");var t=H.filter(function(e){return e.id!==F});R(t),b(),X("deleted successfully"),A(!0)}else"update"===a.type&&(H.map(function(e,t){e.id===a.id&&(e.desc=a.desc,e.img=a.img,e.iframe=a.iframe)}),fe("<iframe hidden></iframe>"),he(!1),D(!1),X("updated successfully"),A(!0))},H),xe=Object(s.a)(ke,2),Se=(xe[0],xe[1]);function je(){A(!1)}return l.a.useEffect(function(){!0===ge&&""!==ue&&Ce.current.firstElementChild.classList.add("iframe")},[ge]),l.a.useEffect(function(){w(j+1),k.current.value=""},[H]),l.a.useEffect(function(){H.map(function(e,a){return e.id===F&&(G(e.desc),ae(e.img),ve(e.iframe)),a})},[W]),l.a.createElement("div",{className:"app"},l.a.createElement("div",{ref:n,className:"sideBar-container"},l.a.createElement("span",{className:"sideBar"},l.a.createElement("a",{href:e},l.a.createElement("div",{className:"my-active"},l.a.createElement("i",{className:"fa-solid fa-house"})," Home")),l.a.createElement("a",{href:e},l.a.createElement("div",null,l.a.createElement("i",{className:"fa-solid fa-book"})," Courses")),l.a.createElement("a",{href:e},l.a.createElement("div",null,l.a.createElement("i",{className:"fa-solid fa-gauge"})," Dashboard")),l.a.createElement("a",{href:e},l.a.createElement("div",null,l.a.createElement("i",{className:"fa-solid fa-address-book"})," Members")),l.a.createElement("a",{href:e},l.a.createElement("div",null,l.a.createElement("i",{className:"fa-solid fa-certificate"})," Membership Catalog")),l.a.createElement("a",{href:e},l.a.createElement("div",null,l.a.createElement("i",{className:"fa-solid fa-flag"})," Terms Of Service")),l.a.createElement("a",{href:e},l.a.createElement("div",null,l.a.createElement("i",{className:"fa-solid fa-power-off"})," Sign Out")))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"float-start"},l.a.createElement("i",{className:"fa-solid fa-bars d-lg-none",onClick:function(){0===a||"-60%"===n.current.style.left?(n.current.style.left="0",c.current.style.left="530px",c.current.style.position="fixed",a=1):1!==a&&"0px"!==n.current.style.left||(n.current.style.left="-60%",c.current.style.left="50%",c.current.style.position="absolute",a=0)}})),l.a.createElement("div",{className:"col-lg-3 mx-auto"},l.a.createElement("div",{className:"input-group mb-3 input-group-edit"},l.a.createElement("span",{className:"input-group-text",id:"basic-addon1"},l.a.createElement("i",{className:"fa-solid fa-magnifying-glass"})),l.a.createElement("input",{type:"text",className:"form-control",placeholder:"search","aria-label":"Username","aria-describedby":"basic-addon1"}))),l.a.createElement("div",{className:"f-left"},l.a.createElement("img",{alt:"",src:t(25)}))),l.a.createElement("div",{ref:c,className:"ourContent"},l.a.createElement("div",{className:"container-edit"},l.a.createElement("h3",null,"News Feed"),l.a.createElement("div",{className:"share"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{alt:"",className:"my-img",src:t(25)})),l.a.createElement("div",{className:"input"},l.a.createElement("textarea",{ref:k,className:"form-control form-control-edit",placeholder:"Share Wat's on Your Mind, fjrji..."}))),l.a.createElement("div",{className:"media"},l.a.createElement("div",{className:"media-content"},l.a.createElement("label",{htmlFor:"input"},l.a.createElement("i",{className:"fa-solid fa-camera"})),l.a.createElement("label",{htmlFor:"iframe",className:"position-absolute"},l.a.createElement("i",{className:"fa-solid fa-video"})),l.a.createElement("label",{htmlFor:"post",className:"float-end editLabel"},l.a.createElement("i",{className:"fa-solid fa-floppy-disk"})),l.a.createElement("label",{className:"commentPost"},l.a.createElement("img",{alt:"",src:h}),ge&&l.a.createElement("div",{ref:Ce,dangerouslySetInnerHTML:{__html:ue||""}}))))),H.map(function(e,a){return l.a.createElement("div",{className:"post_container"},l.a.createElement("div",{key:a,className:"post"},l.a.createElement("div",{className:"profile"},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{alt:"",src:t(25)})),l.a.createElement("div",{className:"aboutProfile"},l.a.createElement("div",{className:"firstInfo"},l.a.createElement("strong",null,"salaheddine"),l.a.createElement("label",null,"Posted An Update")),l.a.createElement("br",null),l.a.createElement("div",{className:"secondInfo"},l.a.createElement("strong",null,"A Week Ago"),l.a.createElement("i",{className:"fa-solid fa-earth-africa"}),l.a.createElement("i",{className:"fa-solid fa-angle-down"}))),l.a.createElement("div",{className:"option"},l.a.createElement("label",{className:"option-font",onClick:je},l.a.createElement("label",{htmlFor:"modal",className:"text-danger",onClick:function(){return T(e.id)}},l.a.createElement("i",{className:"fa-solid fa-trash"})),l.a.createElement("label",{htmlFor:"updateModal",className:"text-success",onClick:function(){return T(e.id)}},l.a.createElement("i",{className:"fa-solid fa-pen"}))),l.a.createElement("input",{type:"button",id:e.id,onClick:function(){return Se({type:"remove",id:e.id})},hidden:!0}))),l.a.createElement("div",{className:"world"},l.a.createElement("p",null,e.desc)),l.a.createElement("div",{className:"media"},l.a.createElement("img",{alt:"",src:e.img}),l.a.createElement("div",{className:"iframe",ref:Ce,dangerouslySetInnerHTML:{__html:e.iframe?e.iframe:""}})),l.a.createElement(E,{id:e.id})))}),l.a.createElement("input",{className:"inputFile",onChange:function(e){""!==document.querySelector(".inputFile").value&&C(URL.createObjectURL(e.target.files[0]))},type:"file",id:"input",hidden:!0}),l.a.createElement("input",{className:"inputFile2",onChange:function(e){""!==document.querySelector(".inputFile2").value&&ae(URL.createObjectURL(e.target.files[0]))},type:"file",id:"input2",hidden:!0}),l.a.createElement("input",{type:"button",id:"post",onClick:function(){return Se({type:"add",id:j,desc:k.current.value,img:h,iframe:ue})},hidden:!0}),l.a.createElement(o.a,{id:"modal",variant:"primary",onClick:function(){return v(!0)},hidden:!0},"Launch demo modal")),l.a.createElement("div",{className:"rightBar d-none d-lg-block"},l.a.createElement("div",{className:"progressBar"},l.a.createElement("div",{className:"progressContainer"},l.a.createElement("div",{className:"mx-auto",role:"progressbar","aria-valuenow":50,"aria-valuemin":0,"aria-valuemax":100,style:{"--value":"50"}}),l.a.createElement("div",{className:"progressText text-center"},"Complete"),l.a.createElement("div",{className:"details"},l.a.createElement("label",{className:"arrow"},"|"),l.a.createElement("div",{className:"radio radio-block"}),l.a.createElement("div",{className:"radio-block"},l.a.createElement("label",{className:"radioText"},"Details")),l.a.createElement("div",{className:"leftText"},"2/4")," ",l.a.createElement("br",null),l.a.createElement("label",{className:"arrow text-success"},"|"),l.a.createElement("div",{className:"radio radio-block"}),l.a.createElement("div",{className:"radio-block"},l.a.createElement("label",{className:"radioText"},"Profile Photo")),l.a.createElement("div",{className:"leftText"},"0/1")," ",l.a.createElement("br",null),l.a.createElement("label",{className:"arrow"},"|"),l.a.createElement("div",{className:"radio radio-block bg-success"}),l.a.createElement("div",{className:"radio-block"},l.a.createElement("label",{className:"radioText"},"Cover Photo")),l.a.createElement("div",{className:"leftText"},"1/1")," ",l.a.createElement("br",null))))),l.a.createElement(i.a,{show:_,className:"alertEdit",variant:"success"},l.a.createElement("i",{className:"fa-solid fa-check"}),V,l.a.createElement(o.a,{className:"closeButton",onClick:function(){return A(!1)},variant:"outline-success"},l.a.createElement("i",{className:"fa-solid fa-x"}))),l.a.createElement("input",{type:"button",id:"updateModal",onClick:function(){return D(!0)},hidden:!0}),l.a.createElement(d.a,{show:N,onHide:b},l.a.createElement(d.a.Header,{closeButton:!0},l.a.createElement(d.a.Title,null,"Warning")),l.a.createElement(d.a.Body,null,"Are you shure you want to delete this post!!"),l.a.createElement(d.a.Footer,null,l.a.createElement(o.a,{variant:"secondary",onClick:b},"Cancel"),l.a.createElement(o.a,{variant:"danger",onClick:function(){return Se({type:"remove"})}},"Yes, Delete"))),l.a.createElement(d.a,{show:W,onHide:function(){return D(!1)}},l.a.createElement(d.a.Header,{closeButton:!0},l.a.createElement(d.a.Title,null,"update post")),l.a.createElement(d.a.Body,null,l.a.createElement(f.a,null,l.a.createElement(f.a.Text,null,l.a.createElement("i",{className:"fa-solid fa-align-left"})),l.a.createElement(u.a.Control,{onChange:function(e){return G(e.target.value)},className:"updateText bg-dark text-white",placeholder:"Description",as:"textarea","aria-label":"With textarea",value:z})),l.a.createElement("div",{className:"chousingImg"},l.a.createElement("img",{alt:"",src:ee}),l.a.createElement("div",{className:"iframe",ref:Ce,dangerouslySetInnerHTML:{__html:Ne||""}})),l.a.createElement("div",{className:"media-content modalMedia"},l.a.createElement("label",{htmlFor:"input2"},l.a.createElement("i",{className:"fa-solid fa-camera"})),l.a.createElement("label",{htmlFor:"iframe2",className:"position-absolute"},l.a.createElement("i",{className:"fa-solid fa-video"})),l.a.createElement("div",{className:"commentPost",hidden:!0},ee))),l.a.createElement(d.a.Footer,null,l.a.createElement(o.a,{variant:"secondary",onClick:function(){return D(!1)}},"Cancel"),l.a.createElement(o.a,{variant:"dark",onClick:function(){return Se({type:"update",id:F,desc:z,img:ee,iframe:Ne})}},"Update"))),l.a.createElement("input",{type:"button",id:"iframe",onClick:function(){return ce(!0)},hidden:!0}),l.a.createElement(d.a,{show:le,onHide:function(){return ce(!1)}},l.a.createElement(d.a.Header,{closeButton:!0},l.a.createElement(d.a.Title,null,"Adding Iframe")),l.a.createElement(d.a.Body,null,l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(f.a.Text,{id:"basic-addon1"},l.a.createElement("i",{className:"fa-solid fa-video"})),l.a.createElement(u.a.Control,{placeholder:"Your iframe",className:"myIframe"}))),l.a.createElement(d.a.Footer,null,l.a.createElement(o.a,{variant:"secondary",onClick:function(){return ce(!1)}},"Cancel"),l.a.createElement(o.a,{variant:"success",onClick:function(){fe(document.querySelector(".myIframe").value),ce(!1),he(!0)}},"Add Iframe"))),l.a.createElement("input",{type:"button",id:"iframe2",onClick:function(){return ie(!0)},hidden:!0}),l.a.createElement(d.a,{show:se,onHide:function(){return ie(!1)}},l.a.createElement(d.a.Header,{closeButton:!0},l.a.createElement(d.a.Title,null,"Adding Iframe")),l.a.createElement(d.a.Body,null,l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(f.a.Text,{id:"basic-addon1"},l.a.createElement("i",{className:"fa-solid fa-video"})),l.a.createElement(u.a.Control,{placeholder:"Your iframe",className:"myIframe"}))),l.a.createElement(d.a.Footer,null,l.a.createElement(o.a,{variant:"secondary",onClick:function(){return ie(!1)}},"Cancel"),l.a.createElement(o.a,{variant:"success",onClick:function(){ve(document.querySelector(".myIframe").value),ie(!1),he(!0)}},"Add Iframe"))))},N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,84)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),c(e),r(e)})};t(58),t(59),t(60),t(78);r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null))),N()}},[[47,1,2]]]);
//# sourceMappingURL=main.c4a46a00.chunk.js.map