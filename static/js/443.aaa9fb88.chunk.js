"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[443],{3855:function(e,n,a){a.d(n,{Z:function(){return u}});var t="TextField_formGroup__r7cSs",r="TextField_field__z1Dqi",i=a(184),l=function(e){var n=e.id,a=e.label,l=e.value,u=e.name,s=e.handleChange,o=e.type,c=e.checked,d=e.className,m=e.placeholder,h=e.required,p=e.pattern,f=d?"".concat(r," ").concat(d):r;return(0,i.jsxs)("div",{className:t,children:[a&&(0,i.jsx)("label",{htmlFor:n,children:a}),(0,i.jsx)("input",{id:n,value:l,checked:c,name:u,onChange:s,type:o,className:f,placeholder:m,required:h,pattern:p})]})},u=l;l.defaultProps={type:"text",required:!1}},9824:function(e,n,a){var t=a(4942),r=a(1413),i=a(885),l=a(2791);n.Z=function(e){var n=e.initialState,a=e.onSubmit,u=(0,l.useState)((0,r.Z)({},n)),s=(0,i.Z)(u,2),o=s[0],c=s[1];return{state:o,setState:c,handleChange:function(e){var n=e.target,a=n.value,i=n.name,l=n.type,u=n.checked,s="checkbox"===l?u:a;c((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},i,s))}))},handleSubmit:function(e){e.preventDefault(),a((0,r.Z)({},o)),c((0,r.Z)({},n))}}}},3443:function(e,n,a){a.r(n),a.d(n,{default:function(){return f}});var t=a(9434),r=a(8724),i=a(1413),l=a(2791),u=a(5984),s=a(9824),o=a(3855),c={email:"",password:""},d={email:{label:"User email",name:"email",type:"email",placeholder:"Enter user email",required:!0},password:{label:"User password",name:"password",type:"password",placeholder:"Enter user password (min 6 symbols)",required:!0}},m=a(184),h=function(e){var n=e.onSubmit,a=(0,s.Z)({initialState:c,onSubmit:n}),t=a.state,r=a.handleChange,h=a.handleSubmit,p=(0,l.useMemo)((function(){return(0,u.x0)()}),[]),f=(0,l.useMemo)((function(){return(0,u.x0)()}),[]),b=t.email,x=t.password;return(0,m.jsxs)("form",{onSubmit:h,children:[(0,m.jsx)(o.Z,(0,i.Z)({id:p,value:b,handleChange:r},d.email)),(0,m.jsx)(o.Z,(0,i.Z)({id:f,value:x,handleChange:r},d.password)),(0,m.jsx)("button",{children:"Login"})]})},p=h;function f(){var e=(0,t.I0)();return(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:"Login page"}),(0,m.jsx)(p,{onSubmit:function(n){e((0,r.x4)(n))}})]})}h.defaultProps={onSubmit:function(){}}}}]);
//# sourceMappingURL=443.aaa9fb88.chunk.js.map