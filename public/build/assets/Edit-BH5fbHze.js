import{W as u,j as s,a as x,d as p}from"./app-DMs39ZIJ.js";import{I as l}from"./InputError-CJtYRox3.js";import{I as o}from"./InputLabel-DUOvrmq5.js";import{T as i}from"./TextInput-BN2opVw-.js";import{A as h}from"./AuthenticatedLayout-C9a5_F3J.js";import"./ApplicationLogo-D5hFbTCZ.js";import"./transition-CVVOJVY5.js";function _({auth:d,user:a}){const{data:r,setData:t,post:n,errors:m,reset:g}=u({name:a.name||"",email:a.email||"",password:"",password_confirmation:"",_method:"PUT"}),c=e=>{e.preventDefault(),n(route("user.update",a.id))};return s.jsxs(h,{user:d.user,header:s.jsx("div",{className:"flex justify-between items-center",children:s.jsxs("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:['Edit user "',a.name,'"']})}),children:[s.jsx(x,{title:"Users"}),s.jsx("div",{className:"py-12",children:s.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:s.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:s.jsxs("form",{onSubmit:c,className:"p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg",children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(o,{htmlFor:"user_name",value:"User Name"}),s.jsx(i,{id:"user_name",type:"text",name:"name",value:r.name,className:"mt-1 block w-full",isFocused:!0,onChange:e=>t("name",e.target.value)}),s.jsx(l,{message:m.name,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(o,{htmlFor:"user_email",value:"User Email"}),s.jsx(i,{id:"user_email",type:"text",name:"email",value:r.email,className:"mt-1 block w-full",onChange:e=>t("email",e.target.value)}),s.jsx(l,{message:m.email,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(o,{htmlFor:"user_password",value:"User Password"}),s.jsx(i,{id:"user_password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",onChange:e=>t("password",e.target.value)}),s.jsx(l,{message:m.password,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4",children:[s.jsx(o,{htmlFor:"user_password_confirmation",value:"Confirm Password"}),s.jsx(i,{id:"user_password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",onChange:e=>t("password_confirmation",e.target.value)}),s.jsx(l,{message:m.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"mt-4 text-right",children:[s.jsx(p,{href:route("user.index"),className:"bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2",children:"Cancel"}),s.jsx("button",{className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Submit"})]})]})})})})]})}export{_ as default};
