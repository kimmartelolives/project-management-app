import{j as e,d,a as i}from"./app-DMs39ZIJ.js";import{A as l}from"./AuthenticatedLayout-C9a5_F3J.js";import m from"./TasksTable-DTGF4t_g.js";import"./ApplicationLogo-D5hFbTCZ.js";import"./transition-CVVOJVY5.js";import"./TableHeading-CZ0eqObm.js";import"./SelectInput-CFEkWhcp.js";import"./TextInput-BN2opVw-.js";import"./contants-Ckjsl-FG.js";function f({auth:t,success:a,tasks:r,queryParams:s=null}){return e.jsxs(l,{user:t.user,header:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"Tasks"}),e.jsx(d,{href:route("task.create"),className:"bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600",children:"Add New"})]}),children:[e.jsx(i,{title:"Tasks"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[a&&e.jsx("div",{className:"bg-emerald-500 py-2 px-4 text-white rounded mb-4",children:a}),e.jsx("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsx(m,{tasks:r,queryParams:s,success:a})})})]})})]})}export{f as default};
