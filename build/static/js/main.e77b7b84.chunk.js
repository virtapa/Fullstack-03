(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(15),c=n.n(r),u=n(6),o=n(3),a=n(1),i=n(4),s=n.n(i),d="https://tranquil-refuge-80894.herokuapp.com/api/persons",l=function(){return s.a.get(d).then((function(e){return e.data}))},h=function(e){return s.a.post(d,e).then((function(e){return e.data}))},f=function(e){return s.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},b=function(e,t){return s.a.put("".concat(d,"/").concat(e),t).then((function(e){return e.data}))},j=n(0),m=function(e){var t=e.newFilter,n=e.handleFilterChange;return Object(j.jsxs)("div",{children:["Filter shown with: ",Object(j.jsx)("input",{id:"filter",value:t,onChange:n})]})},p=function(e){var t=e.addPerson,n=e.newName,r=e.handleNameChange,c=e.newNumber,u=e.handleNumberChange;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Add Contact"}),Object(j.jsxs)("form",{onSubmit:t,children:["Name: ",Object(j.jsx)("input",{name:"name",id:"name",value:n,onChange:r}),"Phone Number: ",Object(j.jsx)("input",{name:"phonenumber",id:"phonenumber",value:c,onChange:u}),Object(j.jsx)("button",{type:"submit",children:"Add"})]})]})},O=function(e){var t=e.person,n=e.handleDeletePerson;return Object(j.jsxs)("div",{children:[t.name," ",t.number,Object(j.jsx)("button",{onClick:function(){return n(t.id)},children:"delete"})]})},x=function(e){var t=e.persons,n=e.setPersons,r=e.setMessage,c=function(e){f(e).then((function(c){n(t.filter((function(t){return t.id!==e}))),r({text:"Deleted!",type:"success"}),setTimeout((function(){r(null)}),5e3)})).catch((function(c){r({text:"This person was already removed from server",type:"error"}),setTimeout((function(){r(null)}),5e3),n(t.filter((function(t){return t.id!==e})))}))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Numbers"}),t.map((function(e){return Object(j.jsx)(O,{person:e,handleDeletePerson:c},e.id)}))]})},v=function(e){var t=e.message;return null===t?null:Object(j.jsx)("div",{className:"notification notification_".concat(t.type),children:t.text})},g=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(o.a)(c,2),s=i[0],d=i[1],f=Object(a.useState)(""),O=Object(o.a)(f,2),g=O[0],w=O[1],C=Object(a.useState)(""),N=Object(o.a)(C,2),y=N[0],P=N[1],k=Object(a.useState)(null),L=Object(o.a)(k,2),S=L[0],F=L[1];Object(a.useEffect)((function(){l().then((function(e){r(e)}))}),[]);var T=function(e){var t=n.find((function(t){return t.name.toLowerCase()===e.toLowerCase()})),c=Object(u.a)(Object(u.a)({},t),{},{number:g});b(t.id,c).then((function(e){r(n.map((function(n){return n.id!==t.id?n:e}))),F({text:"Updated ".concat(e.name,"'s number"),type:"success"}),setTimeout((function(){F(null)}),3e3)}))},D=y?n.filter((function(e){return e.name.toLowerCase().includes(y.toLowerCase())})):n,A=function(e){return n.some((function(t){return t.name.toLowerCase()===e.toLowerCase()}))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(v,{message:S}),Object(j.jsx)(m,{newFilter:y,handleFilterChange:function(e){P(e.target.value)}}),Object(j.jsx)(p,{addPerson:function(e){if(e.preventDefault(),A(s))return alert("".concat(s," is already added, would you like to update their phone number?")),T(s),d(""),void w("");var t={name:s,number:g};h(t).then((function(e){r(n.concat(e)),d(""),w("")})).then((function(){F({text:"Added ".concat(t.name," to the phonebook"),type:"success"}),setTimeout((function(){F(null)}),3e3)})).catch((function(e){F({text:e.response.data.error,type:"error"})}))},newName:s,handleNameChange:function(e){d(e.target.value)},newNumber:g,handleNumberChange:function(e){w(e.target.value)}}),Object(j.jsx)(x,{persons:D,setPersons:r,setMessage:F})]})};n(39);c.a.render(Object(j.jsx)(g,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e77b7b84.chunk.js.map